<script lang="ts">

  import type monaco from 'monaco-editor';
  import { onMount, tick } from 'svelte';
  import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

  let loading_ui = true;
  let loading_py = true;
  const WALKABLE = 1;
  const OBSTACLE = 0;
  const START = -2;
  const END = -3;

  const GRIDSIZE = 20;
  const GRIDBORDER = GRIDSIZE > 3;

  let changed = true;
  let path: [x: number, y: number][] = [];
  let nodes: {f: number, opened: boolean}[][] = [[]]
  let currentPointerValue = -1;
  let innerWidth = 0;
  let innerHeight = 0;

  let gridWidth = 0;
  let gridHeight = 0;

  // note that points here are [x, y] while you access the matrix in [y][x]
  // which allows you to get a full row (all x values) by the column number (y)
  let start = [-1, -1];
  let end = [-1, -1];
  let matrix: number[][] = [[WALKABLE]];

  let divEl: HTMLDivElement;
  let canvasEl: HTMLCanvasElement;
  let editor: monaco.editor.IStandaloneCodeEditor;
  
  let Monaco;
  const code_templates: {[name: string]: string} = {
    a_star: ['from pathfinding.finder.a_star import AStarFinder',
      'from pathfinding.core.diagonal_movement import DiagonalMovement', '',
      'finder = AStarFinder(diagonal_movement=DiagonalMovement.always)'].join('\n'),
    dijkstra: ['from pathfinding.finder.dijkstra import DijkstraFinder',
      'from pathfinding.core.diagonal_movement import DiagonalMovement', '',
      'finder = DijkstraFinder(diagonal_movement=DiagonalMovement.always)'].join('\n'),
    best_first: ['from pathfinding.finder.best_first import BestFirst',
      'from pathfinding.core.diagonal_movement import DiagonalMovement', '',
      'finder = BestFirst(diagonal_movement=DiagonalMovement.always)'].join('\n'),
    bi_a_star: ['from pathfinding.finder.bi_a_star import BiAStarFinder',
      'from pathfinding.core.diagonal_movement import DiagonalMovement', '',
      'finder = BiAStarFinder(diagonal_movement=DiagonalMovement.always)'].join('\n'),
    breadth_first: ['from pathfinding.finder.breadth_first import BreadthFirstFinder',
      'from pathfinding.core.diagonal_movement import DiagonalMovement', '',
      'finder = BreadthFirstFinder(diagonal_movement=DiagonalMovement.always)'].join('\n'),
    ida_star: ['# WARNING! This might be very slow on larger paths and might crash your browser!',
      'from pathfinding.finder.ida_star import IDAStarFinder',
      'from pathfinding.core.diagonal_movement import DiagonalMovement', '',
      'finder = IDAStarFinder(diagonal_movement=DiagonalMovement.always)'].join('\n'),
    msp: ['from pathfinding.finder.msp import MinimumSpanningTree',
      'from pathfinding.core.diagonal_movement import DiagonalMovement', '',
      'finder = MinimumSpanningTree(diagonal_movement=DiagonalMovement.always)'].join('\n')
  }

  let code = [
    '# Here you can test python-pathfinding directly.',
    '# Press the rocket 🚀 in the bottom right to execute this code.',
    '# The variables "grid", "matrix", "start" and "end" are already defined by the',
    '# interactive grid on the left, but you can overwrite it here if you want.',
    '# It runs in your local browser using pyscript, there\'s no save!',
    '# If your code does not run take a look at the browsers console for errors.',
    '# You need to provide a variable "path" with points on the map to draw the path on the map',
    code_templates['a_star'],
    'path, runs = finder.find_path(start, end, grid)'].join('\n');

  function rebuildGrid() {
    gridHeight = Math.floor(canvasEl.height / GRIDSIZE);
    gridWidth = Math.floor(canvasEl.width / GRIDSIZE);
    if (matrix.length < gridHeight) {
      const len = gridHeight - matrix.length;
      if (len < 1) {
        matrix = matrix.slice(0, gridHeight);
      } else {
        for (let y = 0; y < len; y++) {
          matrix.push([]);
        }
      }
    }
    for (let y = 0; y < matrix.length; y++) {
      const len = gridWidth - matrix[y].length;
      if (len < 1) {
        matrix[y] = matrix[y].slice(0, gridWidth);
      } else {
        for (let x = 0; x < len; x++) {
          matrix[y].push(WALKABLE);
        }
      }
    }
    if (end[0] > gridWidth - 1 || end[1] > gridHeight - 1 || end[0] < 0 || end[1] < 0) {
      end = [gridWidth - 1 , gridHeight - 1]
    }
    if (start[0] > gridWidth || start[1] > gridHeight || start[0] < 0 || start[1] < 0) {
      start = [0, 0]
    }
  }

  function resizeWindow() {
    rebuildGrid();
    changed = true;
  }

  function drawGrid(ctx: CanvasRenderingContext2D) {
    if (!canvasEl) {
      requestAnimationFrame(() => {drawGrid(ctx)});
      return
    }
    if (matrix.length <= 1) {
      rebuildGrid();
    }
    ctx.lineWidth = 1;
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // show which nodes have been visited during search
    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes[i].length; j++) {
          if (!nodes[i][j].opened) {
            continue
          }
          ctx.fillStyle = '#cccccc';
          ctx.fillRect(
            j * GRIDSIZE, 
            i * GRIDSIZE, 
            GRIDSIZE, GRIDSIZE);
        }
      }
    }

    // draw path
    if (path.length > 1) {
      ctx.strokeStyle = 'darkred';
      ctx.beginPath();
      ctx.moveTo(
        path[0][0] * GRIDSIZE + GRIDSIZE/2 + .5,
        path[0][1] * GRIDSIZE + GRIDSIZE/2 + .5);
      for (let i = 1; i < path.length; i++) {
        if (i < path.length-1) {
          ctx.fillStyle = '#ff9a4b';
          ctx.fillRect(
            path[i][0] * GRIDSIZE, 
            path[i][1] * GRIDSIZE, 
            GRIDSIZE, GRIDSIZE);
        }
        ctx.lineTo(
          path[i][0] * GRIDSIZE + GRIDSIZE/2 + .5,
          path[i][1] * GRIDSIZE + GRIDSIZE/2 + .5);
      }
      ctx.stroke();
    }

    // draw obstacles
    ctx.fillStyle = 'gray';
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] <= 0) {
          ctx.fillRect(x * GRIDSIZE, y * GRIDSIZE, GRIDSIZE, GRIDSIZE);
        }
      }
    }

    // draw start and end
    ctx.fillStyle = 'green';
    ctx.fillRect(start[0] * GRIDSIZE, start[1] * GRIDSIZE, GRIDSIZE, GRIDSIZE);

    ctx.fillStyle = 'red';
    ctx.fillRect(end[0] * GRIDSIZE, end[1] * GRIDSIZE, GRIDSIZE, GRIDSIZE);
   
    // draw border
    if (GRIDBORDER) {
      ctx.strokeStyle = 'black'
      for (let i = 0; i < matrix[0].length+1; i++) {
        ctx.beginPath();
        ctx.moveTo(i * GRIDSIZE + 0.5, 0);
        ctx.lineTo(i * GRIDSIZE + 0.5, matrix.length * GRIDSIZE);
        ctx.stroke();
      }

      for (let i = 0; i < matrix.length+1; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * GRIDSIZE + 0.5);
        ctx.lineTo(matrix[0].length * GRIDSIZE, i * GRIDSIZE + 0.5);
        ctx.stroke();
      }
    }

    changed = false;
    requestAnimationFrame(() => {drawGrid(ctx)});
  }


  // @ts-ignore
  onMount(async () => {
    // @ts-ignore
    self.MonacoEnvironment = {
      getWorker: function (_moduleId: any) {
        return new editorWorker();
      }
    };
    // @ts-ignore
    Monaco = await import('monaco-editor');
    editor = Monaco.editor.create(divEl, {
      value: code,
      language: 'python',
      minimap: { enabled: false },
      automaticLayout: true,
      scrollBeyondLastLine: false
    });

    const ctx = canvasEl.getContext('2d');
    if (ctx) {
      await tick()
      requestAnimationFrame(() => {drawGrid(ctx)});
    }
    
    loading_ui = false;
    
    return () => {
      editor.dispose();
    };
  });

  function pointerDownCanvas(e: PointerEvent) {
    const x = Math.floor((e.clientX - 8) / GRIDSIZE);
    const y = Math.floor((e.clientY - 8) / GRIDSIZE);
    // check for start/end Point
    if (start && start[0] == x && start[1] == y) {
      currentPointerValue = START;
      return
    }
    if (end && end[0] == x && end[1] == y) {
      currentPointerValue = END;
      return
    }

    currentPointerValue = matrix[y][x] === OBSTACLE ? WALKABLE : OBSTACLE;
    matrix[y][x] = currentPointerValue;
  }

  function pointerMoveCanvas(e: PointerEvent) {
    if (currentPointerValue === -1) {
      return
    }
    const x = Math.floor((e.clientX - 8) / GRIDSIZE);
    const y = Math.floor((e.clientY - 8) / GRIDSIZE);
    if (currentPointerValue === START) {
      start = [x, y];
      return
    }
    if (currentPointerValue === END) {
      end = [x, y];
      return
    }
    matrix[y][x] = currentPointerValue;
  }

  function pointerUpCanvas() {
    currentPointerValue = -1;
  }

  // forward the grid to python
  // @ts-ignore
  globalThis.grid_to_py = () => {
    return {
      matrix,
      start,
      end,
      py_code: editor.getValue()
    };
  }

  // @ts-ignore
  globalThis.update_path = (
      pypath: [x: number, y: number][], 
      pynodes: {f: number, opened?: boolean, closed?: boolean, tested?: boolean}[][]) => {
    path = pypath;
    for (let i = 0; i < pynodes.length; i++) {
      nodes[i] = []
      let tmp_nodes = Array.from(pynodes[i]);
      for (let j = 0; j < tmp_nodes.length; j++) {
        const tmp_node: {f: number, opened?: boolean, closed?: boolean, tested?: boolean} = tmp_nodes[j];
        nodes[i][j] = {
          f: tmp_node.f, 
          opened: tmp_node.opened || tmp_node.closed || tmp_node.tested || false}
      }
    }
    changed = true;
  }

  // @ts-ignore
  globalThis.loading_py_done = () => {
    loading_py = false;
  }

</script>

{#if loading_ui || loading_py}
<div class="lds-dual-ring loading-color"></div>
<div class="loading-text loading-color">
Loading, please wait...
</div>
{/if}

{#if !loading_ui}
<py-script>
from pathfinding.core.grid import Grid
from pyodide.ffi import create_proxy, to_js
from js import grid_to_py, update_path, loading_py_done
import js

def find_path(evt):
    data = grid_to_py().as_object_map(hereditary=True)
    grid = Grid(matrix=list(data['matrix']))
    start = grid.node(data['start'][0], data['start'][1])
    end = grid.node(data['end'][0], data['end'][1])
    _locals = locals()
    _globals = globals()
    exec(data['py_code'], _globals, _locals)
    if 'path' not in _locals or not _locals['path']:
        print('no path found')
        return
    path = _locals['path']
    _nodes = _locals['grid'].nodes
    update_path(
      to_js([[node.x, node.y] for node in path]),
      to_js(_nodes)
    )


find_path_proxy = add_one_proxy = create_proxy(find_path)
run_code_btn = js.document.getElementById('run_code')
run_code_btn.addEventListener("click", find_path_proxy)
loading_py_done();
</py-script>
{/if}
<div bind:this={divEl} class="monaco_editor" style:display={loading_py ? 'none' : 'block'}></div>

<svelte:window 
  bind:innerHeight={innerHeight}
  bind:innerWidth={innerWidth}
  on:resize={resizeWindow} />

<canvas
  style:display={loading_py ? 'none' : 'block'}
	bind:this={canvasEl}
  on:pointerdown={pointerDownCanvas}
  on:pointermove={pointerMoveCanvas}
  on:pointerup={pointerUpCanvas}
	width={innerWidth/2-16}
	height={innerHeight-16}
  style:top={'8px;'}
  style:left={'8px'}
  style:position={'absolute'}
></canvas>

{#if !loading_ui}
<div class="scenario-select" style:display={loading_py ? 'none' : 'block'}>
  <select on:change={(e)=>{
    // @ts-ignore
    code = code_templates[e?.target?.value];
    editor.setValue(code+'\npath, runs = finder.find_path(start, end, grid)');
    }}>
    <option value="a_star" selected>A*</option>
    <option value="dijkstra">Dijkstra</option>
    <option value="best_first">Best First</option>
    <option value="bi_a_star">Bi-directional A*</option>
    <option value="breadth_first">Breadth First Search (BFS)</option>
    <option value="ida_star">Iterative Deeping A* (IDA*)</option>
    <option value="msp">Minimum Spanning Tree (MSP)</option>
  </select>
</div>


<div class="fabs" role="group" aria-label="Floating action buttons" style:display={loading_py ? 'none' : 'block'}>
  <button id="run_code" class="fab" title="Run code" aria-label="Run code">
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" stroke="none" d="M3.7242 8.45192L7.28876 7.19383C6.55281 8.18469 5.92055 9.24884 5.40213 10.3696L3.7242 8.45192ZM1.24742 8.6585L4.54987 12.4327L4.07152 13.6286C3.92296 14 4.01003 14.4242 4.29289 14.7071L4.60651 15.0207C2.90342 16.9411 1.9627 18.9496 1.05132 21.6838C0.931539 22.0431 1.02506 22.4393 1.29289 22.7071C1.56073 22.9749 1.95689 23.0685 2.31623 22.9487C5.05037 22.0373 7.05889 21.0966 8.97928 19.3935L9.29289 19.7071C9.57576 19.99 9.99997 20.077 10.3714 19.9285L11.5673 19.4501L15.3415 22.7526C15.5911 22.971 15.9327 23.0514 16.2535 22.9673C16.5744 22.8832 16.8326 22.6456 16.943 22.3328L19.9291 13.8722C21.8977 11.5428 23 8.57479 23 5.48078V2C23 1.44772 22.5523 1 22 1H18.5192C15.4252 1 12.4572 2.10225 10.1278 4.0709L1.66718 7.05701C1.35444 7.16739 1.11676 7.42565 1.03268 7.74646C0.948589 8.06728 1.02903 8.40891 1.24742 8.6585ZM3.68527 20.3147C4.31277 18.7992 5.017 17.5929 6.02356 16.4378L7.56223 17.9764C6.40713 18.983 5.20083 19.6872 3.68527 20.3147ZM10.2408 17.8266L9.70711 17.2929L6.70711 14.2929L6.17337 13.7592L6.88327 11.9844C7.53465 10.356 8.44936 8.84567 9.59079 7.51401L10.1674 6.84129C12.2572 4.40319 15.308 3 18.5192 3H21V5.48078C21 8.69196 19.5968 11.7428 17.1587 13.8326L16.486 14.4092C15.1543 15.5506 13.644 16.4653 12.0156 17.1167L10.2408 17.8266ZM15.5481 20.2758L13.6304 18.5979C14.7512 18.0795 15.8153 17.4472 16.8062 16.7112L15.5481 20.2758ZM15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8ZM16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5Z"></path>
    </svg>
  </button>
</div>
{/if}
