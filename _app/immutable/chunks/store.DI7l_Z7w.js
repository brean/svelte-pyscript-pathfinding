import{G as m,H as L,I as O,J as V,K as y,L as b,M as N,N as D,c as l,O as H,P as M,Q as Y,R as j,S as k,T as C,U as P,a as W,p as $,h as w,B,e as G,j as J,n as E,k as K,x as Q,V as U,m as q,W as z}from"./runtime.2kM9MKUx.js";import{a as F,r as S,h}from"./events.BWSBc2I8.js";import{b as X}from"./disclose-version.e7KfJPgS.js";const Z=["touchstart","touchmove"];function x(e){return Z.includes(e)}function ae(e,s){var r=s==null?"":typeof s=="object"?s+"":s;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ee(e,s){return A(e,s)}function ie(e,s){m(),s.intro=s.intro??!1;const r=s.target,t=w,o=l;try{for(var n=L(r);n&&(n.nodeType!==8||n.data!==O);)n=V(n);if(!n)throw y;b(!0),N(n),D();const f=A(e,{...s,anchor:n});if(l===null||l.nodeType!==8||l.data!==H)throw M(),y;return b(!1),f}catch(f){if(f===y)return s.recover===!1&&Y(),m(),j(r),b(!1),ee(e,s);throw f}finally{b(t),N(o)}}const d=new Map;function A(e,{target:s,anchor:r,props:t={},events:o,context:n,intro:f=!0}){m();var g=new Set,p=u=>{for(var a=0;a<u.length;a++){var i=u[a];if(!g.has(i)){g.add(i);var c=x(i);s.addEventListener(i,h,{passive:c});var R=d.get(i);R===void 0?(document.addEventListener(i,h,{passive:c}),d.set(i,1)):d.set(i,R+1)}}};p(k(F)),S.add(p);var _=void 0,I=C(()=>{var u=r??s.appendChild(P());return W(()=>{if(n){$({});var a=J;a.c=n}o&&(t.$$events=o),w&&X(u,null),_=e(u,t)||{},w&&(B.nodes_end=l),n&&G()}),()=>{var c;for(var a of g){s.removeEventListener(a,h);var i=d.get(a);--i===0?(document.removeEventListener(a,h),d.delete(a)):d.set(a,i)}S.delete(p),T.delete(_),u!==r&&((c=u.parentNode)==null||c.removeChild(u))}});return T.set(_,I),_}let T=new WeakMap;function ue(e){const s=T.get(e);s&&s()}function se(e,s,r){if(e==null)return s(void 0),E;const t=K(()=>e.subscribe(s,r));return t.unsubscribe?()=>t.unsubscribe():t}let v=!1;function oe(e,s,r){const t=r[s]??(r[s]={store:null,source:U(void 0),unsubscribe:E});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=E;else{var o=!0;t.unsubscribe=se(e,n=>{o?t.source.v=n:z(t.source,n)}),o=!1}return q(t.source)}function de(){const e={};return Q(()=>{for(var s in e)e[s].unsubscribe()}),e}function fe(e){var s=v;try{return v=!1,[e(),v]}finally{v=s}}export{ae as a,oe as b,fe as c,ie as h,ee as m,de as s,ue as u};
