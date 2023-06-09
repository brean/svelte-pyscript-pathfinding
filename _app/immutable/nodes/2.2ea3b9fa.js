import{_ as U}from"../chunks/preload-helper.41c905a7.js";import{S as J,i as X,s as K,J as Q,k as E,q as $,a as I,K as D,l as P,m as b,r as x,h as u,c as Z,L as F,n,b as L,G as V,M as k,H as G,N as ee,o as te,t as ie,w as z}from"../chunks/index.6234371f.js";const re=!0,de=Object.freeze(Object.defineProperty({__proto__:null,prerender:re},Symbol.toStringTag,{value:"Module"}));function ne(){return new Worker(""+new URL("../workers/editor.worker-06f3d890.js",import.meta.url).href)}function oe(d){let m,_,p,g,w,o,y,v,c,h,i,f,l,C,M;return Q(d[9]),{c(){m=E("py-script"),_=$("from pathfinding.core.grid import Grid"),p=I(),g=E("div"),w=I(),o=E("canvas"),c=I(),h=E("div"),i=E("button"),f=D("svg"),l=D("path"),this.h()},l(r){m=P(r,"PY-SCRIPT",{});var s=b(m);_=x(s,"from pathfinding.core.grid import Grid"),s.forEach(u),p=Z(r),g=P(r,"DIV",{class:!0}),b(g).forEach(u),w=Z(r),o=P(r,"CANVAS",{width:!0,height:!0,style:!0}),b(o).forEach(u),c=Z(r),h=P(r,"DIV",{class:!0,role:!0,"aria-label":!0});var T=b(h);i=P(T,"BUTTON",{class:!0,title:!0,"aria-label":!0});var S=b(i);f=F(S,"svg",{"aria-hidden":!0,width:!0,height:!0,viewBox:!0});var R=b(f);l=F(R,"path",{fill:!0,stroke:!0,d:!0}),b(l).forEach(u),R.forEach(u),S.forEach(u),T.forEach(u),this.h()},h(){n(g,"class","me"),n(o,"width",y=d[0]/2-16),n(o,"height",v=d[1]-16),n(o,"style","top: 8px; left: 8px; position: absolute"),n(l,"fill","currentColor"),n(l,"stroke","none"),n(l,"d","M3.7242 8.45192L7.28876 7.19383C6.55281 8.18469 5.92055 9.24884 5.40213 10.3696L3.7242 8.45192ZM1.24742 8.6585L4.54987 12.4327L4.07152 13.6286C3.92296 14 4.01003 14.4242 4.29289 14.7071L4.60651 15.0207C2.90342 16.9411 1.9627 18.9496 1.05132 21.6838C0.931539 22.0431 1.02506 22.4393 1.29289 22.7071C1.56073 22.9749 1.95689 23.0685 2.31623 22.9487C5.05037 22.0373 7.05889 21.0966 8.97928 19.3935L9.29289 19.7071C9.57576 19.99 9.99997 20.077 10.3714 19.9285L11.5673 19.4501L15.3415 22.7526C15.5911 22.971 15.9327 23.0514 16.2535 22.9673C16.5744 22.8832 16.8326 22.6456 16.943 22.3328L19.9291 13.8722C21.8977 11.5428 23 8.57479 23 5.48078V2C23 1.44772 22.5523 1 22 1H18.5192C15.4252 1 12.4572 2.10225 10.1278 4.0709L1.66718 7.05701C1.35444 7.16739 1.11676 7.42565 1.03268 7.74646C0.948589 8.06728 1.02903 8.40891 1.24742 8.6585ZM3.68527 20.3147C4.31277 18.7992 5.017 17.5929 6.02356 16.4378L7.56223 17.9764C6.40713 18.983 5.20083 19.6872 3.68527 20.3147ZM10.2408 17.8266L9.70711 17.2929L6.70711 14.2929L6.17337 13.7592L6.88327 11.9844C7.53465 10.356 8.44936 8.84567 9.59079 7.51401L10.1674 6.84129C12.2572 4.40319 15.308 3 18.5192 3H21V5.48078C21 8.69196 19.5968 11.7428 17.1587 13.8326L16.486 14.4092C15.1543 15.5506 13.644 16.4653 12.0156 17.1167L10.2408 17.8266ZM15.5481 20.2758L13.6304 18.5979C14.7512 18.0795 15.8153 17.4472 16.8062 16.7112L15.5481 20.2758ZM15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8ZM16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5Z"),n(f,"aria-hidden","true"),n(f,"width","24"),n(f,"height","24"),n(f,"viewBox","0 0 24 24"),n(i,"class","fab"),n(i,"title","Run code"),n(i,"aria-label","Run code"),n(h,"class","fabs"),n(h,"role","group"),n(h,"aria-label","Floating action buttons")},m(r,s){L(r,m,s),V(m,_),L(r,p,s),L(r,g,s),d[10](g),L(r,w,s),L(r,o,s),d[11](o),L(r,c,s),L(r,h,s),V(h,i),V(i,f),V(f,l),C||(M=[k(window,"resize",d[4]),k(window,"resize",d[9]),k(o,"pointerdown",d[5]),k(o,"pointermove",d[6]),k(o,"pointerup",d[7]),k(i,"click",d[8])],C=!0)},p(r,[s]){s&1&&y!==(y=r[0]/2-16)&&n(o,"width",y),s&2&&v!==(v=r[1]-16)&&n(o,"height",v)},i:G,o:G,d(r){r&&u(m),r&&u(p),r&&u(g),d[10](null),r&&u(w),r&&u(o),d[11](null),r&&u(c),r&&u(h),C=!1,ee(M)}}}function ae(d,m,_){let p=[],g=-1,w=0,o=0,y=0,v=0,c=[10,10],h=[20,10],i=[[1]],f,l,C,M,r=["# Here you can test python-pathfinding directly.","# Press the rocket 🚀 in the bottom right to execute this code.","# The variables grid, matrix, start and end are already defined from the","# interactive grid on the left, but you can overwrite it here if you want.","# It runs in your local browser using pyscript, there's no save!","# If your code does not run take a look at the browsers console for errors.","# You need to provide a variable path with your final path to draw the path on the map","","from pathfinding.finder.a_star import AStarFinder","from pathfinding.core.diagonal_movement import DiagonalMovement","","finder = AStarFinder(diagonal_movement=DiagonalMovement.always)","path, runs = finder.find_path(start, end, grid)"].join(`
`);function s(){if(v=Math.floor(l.height/20),y=Math.floor(l.width/20),i.length<v){const e=v-i.length;if(e<1)i.slice(v,i.length);else for(let t=0;t<e;t++)i.push([])}for(let e=0;e<i.length;e++){const t=y-i[e].length;if(t<1)i[e].slice(y,i[e].length);else for(let a=0;a<t;a++)i[e].push(1)}i[10][15]=0}function T(){s()}function S(e){e.lineWidth=1,e.clearRect(0,0,l.width,l.height),e.strokeStyle="black",e.fillStyle="green",e.fillRect(c[0]*20,c[1]*20,20,20),e.fillStyle="red",e.fillRect(h[0]*20,h[1]*20,20,20),i.length<=1&&s(),e.fillStyle="gray";for(let t=0;t<i.length;t++)for(let a=0;a<i[t].length;a++)i[t][a]<=0&&e.fillRect(a*20,t*20,20,20);for(let t=0;t<i[0].length+1;t++)e.beginPath(),e.moveTo(t*20+.5,0),e.lineTo(t*20+.5,i.length*20),e.stroke();for(let t=0;t<i.length+1;t++)e.beginPath(),e.moveTo(0,t*20+.5),e.lineTo(i[0].length*20,t*20+.5),e.stroke();if(p.length>1){e.strokeStyle="darkred",e.beginPath(),e.moveTo(p[0][0]*20+10.5,p[0][1]*20+10.5);for(let t=1;t<p.length;t++)e.lineTo(p[t][0]*20+10.5,p[t][1]*20+10.5);e.stroke()}requestAnimationFrame(()=>{S(e)})}te(async()=>{self.MonacoEnvironment={getWorker(t){return new ne}},M=await U(()=>import("../chunks/editor.main.ce2c3417.js").then(t=>t.e),["../chunks/editor.main.ce2c3417.js","../chunks/preload-helper.41c905a7.js","../assets/editor.481e4c24.css"],import.meta.url),C=M.editor.create(f,{value:r,language:"python",minimap:{enabled:!1},automaticLayout:!0,scrollBeyondLastLine:!1});const e=l.getContext("2d");return e&&(await ie(),requestAnimationFrame(()=>{S(e)})),()=>{C.dispose()}});function R(e){const t=Math.floor((e.clientX-8)/20),a=Math.floor((e.clientY-8)/20);g=i[a][t]===0?1:0,i[a][t]=g}function N(e){if(g===-1)return;const t=Math.floor((e.clientX-8)/20),a=Math.floor((e.clientY-8)/20);i[a][t]=g}function O(){g=-1}async function j(){p=[];let e=`path = None
`;e+=`grid = Grid(matrix=${JSON.stringify(i)})
`,e+=`start = grid.node(${c[0]}, ${c[1]})
`,e+=`end = grid.node(${h[0]}, ${h[1]})
`,e+=C.getValue(),console.log(e);const t=pyscript.interpreter;await t.run(e);let a=t.globals.get("path");if(a)for(let W=0;W<a.length;W++)p.push([a.get(W).get(0),a.get(W).get(1)]);let A=t.globals.get("start");A&&(c=[A.x,A.y]);let H=t.globals.get("end");H&&(h=[H.x,H.y])}function q(){_(1,o=window.innerHeight),_(0,w=window.innerWidth)}function B(e){z[e?"unshift":"push"](()=>{f=e,_(2,f)})}function Y(e){z[e?"unshift":"push"](()=>{l=e,_(3,l)})}return[w,o,f,l,T,R,N,O,j,q,B,Y]}class he extends J{constructor(m){super(),X(this,m,ae,oe,K,{})}}export{he as component,de as universal};
