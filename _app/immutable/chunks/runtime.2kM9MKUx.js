var Dn=Array.isArray,kn=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,In=Object.prototype,bn=Array.prototype,Zt=Object.getPrototypeOf;const Pn=()=>{};function Cn(t){return t()}function Wt(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,dt=4,j=8,st=16,m=32,W=64,tt=128,O=256,G=512,h=1024,x=2048,U=4096,b=8192,P=16384,zt=32768,yt=65536,Fn=1<<17,Jt=1<<19,Et=1<<20,ct=Symbol("$state"),qn=Symbol("legacy props"),Ln=Symbol("");function wt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Qt(t,this.v)}function Xt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Mn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Un(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let z=!1;function Bn(){z=!0}function ut(t){return{f:0,v:t,reactions:null,equals:wt,version:0}}function Hn(t){return mt(ut(t))}function sn(t,n=!1){var e;const r=ut(t);return n||(r.equals=Tt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Vn(t,n=!1){return mt(sn(t,n))}function mt(t){return o!==null&&o.f&E&&(T===null?Tn([t]):T.push(t)),t}function Gn(t,n){return o!==null&&it()&&o.f&(E|st)&&(T===null||!T.includes(t))&&ln(),un(t,n)}function un(t,n){return t.equals(n)||(t.v=n,t.version=Ut(),gt(t,x),it()&&a!==null&&a.f&h&&!(a.f&m)&&(v!==null&&v.includes(t)?(g(a,x),X(a)):A===null?mn([t]):A.push(t))),n}function gt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),l=r.length,s=0;s<l;s++){var u=r[s],i=u.f;i&x||!e&&u===a||(g(u,n),i&(h|O)&&(i&E?gt(u,U):X(u)))}}function At(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const Kn=1,$n=2,Zn=4,Wn=8,zn=16,Jn=1,Qn=2,an="[",on="[!",fn="]",xt={},Xn=Symbol();let R=!1;function tr(t){R=t}let w;function q(t){if(t===null)throw At(),xt;return w=t}function nr(){return q(D(w))}function rr(t){if(R){if(D(w)!==null)throw At(),xt;w=t}}function er(t=1){if(R){for(var n=t,r=w;n--;)r=D(r);w=r}}function lr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===an||r===on)&&(t+=1)}var e=D(n);n.remove(),n=e}}var vt,St,Rt;function sr(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;St=_t(n,"firstChild").get,Rt=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return St.call(t)}function D(t){return Rt.call(t)}function ur(t,n){if(!R)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function ar(t,n){if(!R){var r=rt(t);return r instanceof Comment&&r.data===""?D(r):r}return w}function or(t,n=1,r=!1){let e=R?w:t;for(var l;n--;)l=e,e=D(e);if(!R)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var u=nt();return e===null?l==null||l.after(u):e.before(u),q(u),u}return q(e),e}function ir(t){t.textContent=""}function _n(t){var n=E|x;a===null?n|=O:a.f|=Et;var r=o!==null&&o.f&E?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function fr(t){const n=_n(t);return n.equals=Tt,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&E?at(e):F(e)}}}function cn(t){for(var n=t.parent;n!==null;){if(!(n.f&E))return n;n=n.parent}return null}function Dt(t){var n,r=a;Z(cn(t));try{Ot(t),n=Bt(t)}finally{Z(r)}return n}function kt(t){var n=Dt(t),r=(k||t.f&O)&&t.deps!==null?U:h;g(t,r),t.equals(n)||(t.v=n,t.version=Ut())}function at(t){Ot(t),M(t,0),g(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){a===null&&o===null&&nn(),o!==null&&o.f&O&&tn(),ot&&Xt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function C(t,n,r,e=!0){var l=(t&W)!==0,s=a,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{pt(!0),Q(u),u.f|=zt}catch(_){throw F(u),_}finally{pt(i)}}else n!==null&&X(u);var p=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Et)===0;if(!p&&!l&&e&&(s!==null&&vn(u,s),o!==null&&o.f&E)){var d=o;(d.children??(d.children=[])).push(u)}return u}function _r(t){const n=C(j,null,!1);return g(n,h),n.teardown=t,n}function cr(t){Nt();var n=a!==null&&(a.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:o})}else{var e=It(t);return e}}function vr(t){return Nt(),pn(t)}function pr(t){const n=C(W,t,!0);return()=>{F(n)}}function It(t){return C(dt,t,!1)}function pn(t){return C(j,t,!0)}function hr(t){return hn(t)}function hn(t,n=0){return C(j|st|n,t,!0)}function dr(t,n=!0){return C(j|m,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),$(null);try{n.call(null)}finally{ht(r),$(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Jt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:D(e);e.remove(),e=s}r=!0}Ct(t,n&&!r),Pt(t),M(t,0),g(t,P);var u=t.transitions;if(u!==null)for(const p of u)p.stop();bt(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yr(t,n){var r=[];qt(t,r,!0),yn(r,()=>{F(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&m)!==0;qt(e,n,s?r:!1),e=l}}}function Er(t){Lt(t,!0)}function Lt(t,n){if(t.f&b){B(t)&&Q(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&m)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let K=!1,et=[];function Yt(){K=!1;const t=et.slice();et=[],Wt(t)}function wr(t){K||(K=!0,queueMicrotask(Yt)),et.push(t)}function En(){K&&Yt()}const Mt=0,wn=1;let H=!1,V=Mt,L=!1,Y=null,N=!1,ot=!1;function pt(t){N=t}function ht(t){ot=t}let S=[],I=0;let o=null;function $(t){o=t}let a=null;function Z(t){a=t}let T=null;function Tn(t){T=t}let v=null,y=0,A=null;function mn(t){A=t}let jt=0,k=!1,f=null;function Ut(){return++jt}function it(){return!z||f!==null&&f.l===null}function B(t){var u,i;var n=t.f;if(n&x)return!0;if(n&U){var r=t.deps,e=(n&O)!==0;if(r!==null){var l;if(n&G){for(l=0;l<r.length;l++)((u=r[l]).reactions??(u.reactions=[])).push(t);t.f^=G}for(l=0;l<r.length;l++){var s=r[l];if(B(s)&&kt(s),e&&a!==null&&!k&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}e||g(t,h)}return!1}function gn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw H=!1,t}function An(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&tt)===0)}function J(t,n,r,e){if(H){if(r===null&&(H=!1),An(n))throw t;return}r!==null&&(H=!0);{gn(t,n);return}}function Bt(t){var ft;var n=v,r=y,e=A,l=o,s=k,u=T,i=f,p=t.f;v=null,y=0,A=null,o=p&(m|W)?null:t,k=!N&&(p&O)!==0,T=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(M(t,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else t.deps=_=v;if(!k)for(c=y;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&y<_.length&&(M(t,y),_.length=y);return d}finally{v=n,y=r,A=e,o=l,k=s,T=u,f=i}}function xn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&E&&(v===null||!v.includes(n))&&(g(n,U),n.f&(O|G)||(n.f^=G),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function Q(t){var n=t.f;if(!(n&P)){g(t,h);var r=a,e=f;a=t;try{n&st?dn(t):Ct(t),Pt(t),bt(t);var l=Bt(t);t.teardown=typeof l=="function"?l:null,t.version=jt}catch(s){J(s,t,r,e||t.ctx)}finally{a=r}}}function Ht(){if(I>1e3){I=0;try{rn()}catch(t){if(Y!==null)J(t,Y,null);else throw t}}I++}function Vt(t){var n=t.length;if(n!==0){Ht();var r=N;N=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Gt(l,s),Sn(s)}}finally{N=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|b)))try{B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){J(l,e,null,e.ctx)}}}function Rn(){if(L=!1,I>1001)return;const t=S;S=[],Vt(t),L||(I=0,Y=null)}function X(t){V===Mt&&(L||(L=!0,queueMicrotask(Rn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|m)){if(!(r&h))return;n.f^=h}}S.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&m)!==0,u=s&&(l&h)!==0,i=r.next;if(!u&&!(l&b))if(l&j){if(s)r.f^=h;else try{B(r)&&Q(r)}catch(c){J(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&dt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Gt(p,n)}function Kt(t){var n=V,r=S;try{Ht();const l=[];V=wn,S=l,L=!1,Vt(r);var e=t==null?void 0:t();return En(),(S.length>0||l.length>0)&&Kt(),I=0,Y=null,e}finally{V=n,S=r}}async function Tr(){await Promise.resolve(),Kt()}function mr(t){var _;var n=t.f,r=(n&E)!==0;if(r&&n&P){var e=Dt(t);return at(t),e}if(o!==null){T!==null&&T.includes(t)&&en();var l=o.deps;v===null&&l!==null&&l[y]===t?y++:v===null?v=[t]:v.push(t),A!==null&&a!==null&&a.f&h&&!(a.f&m)&&A.includes(t)&&(g(a,x),X(a))}else if(r&&t.deps===null)for(var s=t,u=s.parent,i=s;u!==null;)if(u.f&E){var p=u;i=p,u=p.parent}else{var d=u;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(s=t,B(s)&&kt(s)),t.v}function gr(t){const n=o;try{return o=null,t()}finally{o=n}}const On=~(x|U|h);function g(t,n){t.f=t.f&On|n}function Ar(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function xr(t){const n=f;if(n!==null){const u=n.e;if(u!==null){var r=a,e=o;n.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];Z(s.effect),$(s.reaction),It(s.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Jn as $,o as A,a as B,wr as C,Nn as D,yt as E,Dn as F,sr as G,rt as H,an as I,D as J,xt as K,tr as L,q as M,nr as N,fn as O,At as P,Yn as Q,ir as R,kn as S,pr as T,nt as U,sn as V,Gn as W,It as X,pn as Y,ct as Z,z as _,dr as a,Qn as a0,Zt as a1,Ln as a2,$t as a3,Tr as a4,vt as a5,Vn as a6,er as a7,In as a8,bn as a9,ut as aa,jn as ab,Xn as ac,_t as ad,Un as ae,on as af,lr as ag,Er as ah,yr as ai,Mn as aj,Fn as ak,Zn as al,Tt as am,m as an,W as ao,Kn as ap,$n as aq,Wn as ar,qn as as,fr as at,zn as au,Kt as av,Hn as aw,Qt as ax,hn as b,w as c,F as d,xr as e,ar as f,ur as g,R as h,cr as i,f as j,gr as k,Wt as l,mr as m,Pn as n,Cn as o,Ar as p,Sr as q,rr as r,or as s,hr as t,vr as u,_n as v,Bn as w,_r as x,$ as y,Z as z};
