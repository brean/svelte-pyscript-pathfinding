import{_ as Z}from"../chunks/preload-helper.41c905a7.js";import{S as D,i as P,s as V,k as h,q as G,a as w,J as x,l as g,m as c,r as I,h as o,c as E,K as S,n as t,b as _,G as C,L as R,H as L,o as T,w as j}from"../chunks/index.047809aa.js";const B=!0,q=Object.freeze(Object.defineProperty({__proto__:null,prerender:B},Symbol.toStringTag,{value:"Module"}));function O(){return new Worker(""+new URL("../workers/editor.worker-06f3d890.js",import.meta.url).href)}function W(f){let l,m,d,n,u,a,i,s,r,v,b;return{c(){l=h("py-script"),m=G(`from pathfinding.core.diagonal_movement import DiagonalMovement
from pathfinding.core.grid import Grid

matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]
grid = Grid(matrix=matrix)

start = grid.node(0, 0)
end = grid.node(2, 2)`),d=w(),n=h("div"),u=w(),a=h("div"),i=h("button"),s=x("svg"),r=x("path"),this.h()},l(e){l=g(e,"PY-SCRIPT",{});var p=c(l);m=I(p,`from pathfinding.core.diagonal_movement import DiagonalMovement
from pathfinding.core.grid import Grid

matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]
grid = Grid(matrix=matrix)

start = grid.node(0, 0)
end = grid.node(2, 2)`),p.forEach(o),d=E(e),n=g(e,"DIV",{class:!0}),c(n).forEach(o),u=E(e),a=g(e,"DIV",{class:!0,role:!0,"aria-label":!0});var M=c(a);i=g(M,"BUTTON",{class:!0,title:!0,"aria-label":!0});var y=c(i);s=S(y,"svg",{"aria-hidden":!0,width:!0,height:!0,viewBox:!0});var k=c(s);r=S(k,"path",{fill:!0,stroke:!0,d:!0}),c(r).forEach(o),k.forEach(o),y.forEach(o),M.forEach(o),this.h()},h(){t(n,"class","me"),t(r,"fill","currentColor"),t(r,"stroke","none"),t(r,"d","M3.7242 8.45192L7.28876 7.19383C6.55281 8.18469 5.92055 9.24884 5.40213 10.3696L3.7242 8.45192ZM1.24742 8.6585L4.54987 12.4327L4.07152 13.6286C3.92296 14 4.01003 14.4242 4.29289 14.7071L4.60651 15.0207C2.90342 16.9411 1.9627 18.9496 1.05132 21.6838C0.931539 22.0431 1.02506 22.4393 1.29289 22.7071C1.56073 22.9749 1.95689 23.0685 2.31623 22.9487C5.05037 22.0373 7.05889 21.0966 8.97928 19.3935L9.29289 19.7071C9.57576 19.99 9.99997 20.077 10.3714 19.9285L11.5673 19.4501L15.3415 22.7526C15.5911 22.971 15.9327 23.0514 16.2535 22.9673C16.5744 22.8832 16.8326 22.6456 16.943 22.3328L19.9291 13.8722C21.8977 11.5428 23 8.57479 23 5.48078V2C23 1.44772 22.5523 1 22 1H18.5192C15.4252 1 12.4572 2.10225 10.1278 4.0709L1.66718 7.05701C1.35444 7.16739 1.11676 7.42565 1.03268 7.74646C0.948589 8.06728 1.02903 8.40891 1.24742 8.6585ZM3.68527 20.3147C4.31277 18.7992 5.017 17.5929 6.02356 16.4378L7.56223 17.9764C6.40713 18.983 5.20083 19.6872 3.68527 20.3147ZM10.2408 17.8266L9.70711 17.2929L6.70711 14.2929L6.17337 13.7592L6.88327 11.9844C7.53465 10.356 8.44936 8.84567 9.59079 7.51401L10.1674 6.84129C12.2572 4.40319 15.308 3 18.5192 3H21V5.48078C21 8.69196 19.5968 11.7428 17.1587 13.8326L16.486 14.4092C15.1543 15.5506 13.644 16.4653 12.0156 17.1167L10.2408 17.8266ZM15.5481 20.2758L13.6304 18.5979C14.7512 18.0795 15.8153 17.4472 16.8062 16.7112L15.5481 20.2758ZM15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8ZM16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5Z"),t(s,"aria-hidden","true"),t(s,"width","24"),t(s,"height","24"),t(s,"viewBox","0 0 24 24"),t(i,"class","fab"),t(i,"title","Run code"),t(i,"aria-label","Run code"),t(a,"class","fabs"),t(a,"role","group"),t(a,"aria-label","Floating action buttons")},m(e,p){_(e,l,p),C(l,m),_(e,d,p),_(e,n,p),f[2](n),_(e,u,p),_(e,a,p),C(a,i),C(i,s),C(s,r),v||(b=R(i,"click",f[3]),v=!0)},p:L,i:L,o:L,d(e){e&&o(l),e&&o(d),e&&o(n),f[2](null),e&&o(u),e&&o(a),v=!1,b()}}}function A(f,l,m){let d,n,u,a=["from pathfinding.finder.a_star import AStarFinder","","finder = AStarFinder(diagonal_movement=DiagonalMovement.always)","path, runs = finder.find_path(start, end, grid)","","print('operations:', runs, 'path length:', len(path))","print(grid.grid_str(path=path, start=start, end=end))"].join(`
`);T(async()=>(self.MonacoEnvironment={getWorker(r){return new O}},u=await Z(()=>import("../chunks/editor.main.ce2c3417.js").then(r=>r.e),["../chunks/editor.main.ce2c3417.js","../chunks/preload-helper.41c905a7.js","../assets/editor.481e4c24.css"],import.meta.url),m(1,n=u.editor.create(d,{value:a,language:"python",minimap:{enabled:!1},automaticLayout:!0,scrollBeyondLastLine:!1})),()=>{n.dispose()}));function i(r){j[r?"unshift":"push"](()=>{d=r,m(0,d)})}return[d,n,i,()=>{pyscript.interpreter.run(n.getValue())}]}class U extends D{constructor(l){super(),P(this,l,A,W,V,{})}}export{U as component,q as universal};
