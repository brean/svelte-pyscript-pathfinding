<script lang="ts">

  import type monaco from 'monaco-editor';
  import { onMount, tick } from 'svelte';
  import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

  let changed = true;
  let currentPointerValue = -1;
  let innerWidth = 0;
  let innerHeight = 0;

  let gridWidth = 0;
  let gridHeight = 0;

  let start = [10, 10];
  let end = [20, 10];
  let matrix: any = [[1]];

  let divEl: HTMLDivElement;
  let canvasEl: HTMLCanvasElement;
  let editor: monaco.editor.IStandaloneCodeEditor;
  
  let Monaco;
  let code = ['# Here you can test python-pathfinding directly.',
'# Press the rocket 🚀 in the bottom right to execute this code.',
'# The variables grid, start and end are already defined.',
'# It runs in your local browser using pyscript, there\'s no save!',
'# If your code does not run take a look at the browsers console for errors.',
'',
'from pathfinding.finder.a_star import AStarFinder',
'from pathfinding.core.diagonal_movement import DiagonalMovement',
'',
'finder = AStarFinder(diagonal_movement=DiagonalMovement.always)',
'path, runs = finder.find_path(start, end, grid)',
'',
"print('operations:', runs, 'path length:', len(path))",
"print(grid.grid_str(path=path, start=start, end=end))"].join('\n')

  function rebuildGrid() {
    gridHeight = Math.floor(canvasEl.height / 20);
    gridWidth = Math.floor(canvasEl.width / 20);
    if (matrix.length < gridWidth) {
      const len = gridWidth - matrix.length;
      if (len < 1) {
        matrix.slice(gridWidth, matrix.length);
      } else {
        for (let i = 0; i < len; i++) {
          matrix.push([]);
        }
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      const len = gridHeight - matrix[i].length;
      if (len < 1) {
        matrix[i].slice(gridHeight, matrix[i].length);
      } else {
        for (let j = 0; j < len; j++) {
          matrix[i].push(1);
        }
      }
    }
    matrix[15][10] = 0
  }

  function resizeWindow() {
    rebuildGrid();
    changed = true;
  }

  function drawGrid(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 1;

    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    ctx.fillStyle = 'green';
    ctx.fillRect(start[0] * 20, start[1] * 20, 20, 20);

    ctx.fillStyle = 'red';
    ctx.fillRect(end[0] * 20, end[1] * 20, 20, 20);

    if (matrix.length <= 1) {
      rebuildGrid();
    }

    ctx.fillStyle = 'gray';
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        if (matrix[x][y] <= 0) {
          ctx.fillRect(x * 20, y * 20, 20, 20);
        }
      }
    }
    
    for (let i = 0; i < matrix.length+1; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 20 + 0.5, 0);
      ctx.lineTo(i * 20 + 0.5, matrix[0].length * 20);
      ctx.stroke();
    }

    for (let i = 0; i < matrix[0].length+1; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * 20 + 0.5);
      ctx.lineTo(matrix.length * 20, i * 20 + 0.5);
      ctx.stroke();
    }

    changed = false;
    requestAnimationFrame(() => {drawGrid(ctx)});
  }


  onMount(async () => {
    // @ts-ignore
    self.MonacoEnvironment = {
      getWorker: function (_moduleId: any) {
        return new editorWorker();
      }
    };

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

    return () => {
      editor.dispose();
    };
  });

  function pointerDownCanvas(e: PointerEvent) {

    const x = Math.floor((e.clientX - 8) / 20);
    const y = Math.floor((e.clientY - 8) / 20);
    currentPointerValue = matrix[x][y] === 0 ? 1 : 0;
    matrix[x][y] = currentPointerValue;
  }

  function pointerMoveCanvas(e: PointerEvent) {
    if (currentPointerValue === -1) {
      return
    }
    const x = Math.floor((e.clientX - 8) / 20);
    const y = Math.floor((e.clientY - 8) / 20);
    matrix[x][y] = currentPointerValue;
  }

  function pointerUpCanvas() {
    currentPointerValue = -1;
  }

  function runPyScript() {
    // TODO update grid and start/end on data change by user
    let code = `grid = Grid(matrix=${JSON.stringify(matrix)})\n`;
    code += `start = grid.node(${start[0]}, ${start[1]})\n`
    code += `end = grid.node(${end[0]}, ${end[1]})\n`
    code += editor.getValue();
    console.log(code);
    pyscript.interpreter.run(code);
  }
</script>

<py-script>
from pathfinding.core.grid import Grid
</py-script>

<div bind:this={divEl} class="me" />

<svelte:window 
  bind:innerHeight={innerHeight}
  bind:innerWidth={innerWidth}
  on:resize={resizeWindow} />

<canvas
	bind:this={canvasEl}
  on:pointerdown={pointerDownCanvas}
  on:pointermove={pointerMoveCanvas}
  on:pointerup={pointerUpCanvas}
	width={innerWidth/2-16}
	height={innerHeight-16}
  style={'top: 8px; left: 8px; position: absolute'}
></canvas>

<!-- TODO: select from different code examples -->
<div class="fabs" role="group" aria-label="Floating action buttons">
  <button on:click={runPyScript} class="fab" title="Run code" aria-label="Run code">
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" stroke="none" d="M3.7242 8.45192L7.28876 7.19383C6.55281 8.18469 5.92055 9.24884 5.40213 10.3696L3.7242 8.45192ZM1.24742 8.6585L4.54987 12.4327L4.07152 13.6286C3.92296 14 4.01003 14.4242 4.29289 14.7071L4.60651 15.0207C2.90342 16.9411 1.9627 18.9496 1.05132 21.6838C0.931539 22.0431 1.02506 22.4393 1.29289 22.7071C1.56073 22.9749 1.95689 23.0685 2.31623 22.9487C5.05037 22.0373 7.05889 21.0966 8.97928 19.3935L9.29289 19.7071C9.57576 19.99 9.99997 20.077 10.3714 19.9285L11.5673 19.4501L15.3415 22.7526C15.5911 22.971 15.9327 23.0514 16.2535 22.9673C16.5744 22.8832 16.8326 22.6456 16.943 22.3328L19.9291 13.8722C21.8977 11.5428 23 8.57479 23 5.48078V2C23 1.44772 22.5523 1 22 1H18.5192C15.4252 1 12.4572 2.10225 10.1278 4.0709L1.66718 7.05701C1.35444 7.16739 1.11676 7.42565 1.03268 7.74646C0.948589 8.06728 1.02903 8.40891 1.24742 8.6585ZM3.68527 20.3147C4.31277 18.7992 5.017 17.5929 6.02356 16.4378L7.56223 17.9764C6.40713 18.983 5.20083 19.6872 3.68527 20.3147ZM10.2408 17.8266L9.70711 17.2929L6.70711 14.2929L6.17337 13.7592L6.88327 11.9844C7.53465 10.356 8.44936 8.84567 9.59079 7.51401L10.1674 6.84129C12.2572 4.40319 15.308 3 18.5192 3H21V5.48078C21 8.69196 19.5968 11.7428 17.1587 13.8326L16.486 14.4092C15.1543 15.5506 13.644 16.4653 12.0156 17.1167L10.2408 17.8266ZM15.5481 20.2758L13.6304 18.5979C14.7512 18.0795 15.8153 17.4472 16.8062 16.7112L15.5481 20.2758ZM15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8ZM16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5Z"></path>
    </svg>
  </button>
</div>