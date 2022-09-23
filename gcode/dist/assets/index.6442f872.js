(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function D(){}const wt=t=>t;function ft(t){return t()}function tt(){return Object.create(null)}function x(t){t.forEach(ft)}function at(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function vt(t){return Object.keys(t).length===0}const dt=typeof window<"u";let bt=dt?()=>window.performance.now():()=>Date.now(),T=dt?t=>requestAnimationFrame(t):D;const A=new Set;function ht(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&T(ht)}function xt(t){let e;return A.size===0&&T(ht),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}function R(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=M("style");return At(mt(t),e),e.sheet}function At(t,e){return R(t.head||t,e),e.sheet}function H(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function M(t){return document.createElement(t)}function Mt(t){return document.createTextNode(t)}function pt(){return Mt(" ")}function j(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t){return t===""?null:+t}function Ot(t){return Array.from(t.childNodes)}function et(t,e){t.value=e==null?"":e}function b(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let Y;function kt(){if(Y===void 0){Y=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{Y=!0}}return Y}function Nt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const o=M("iframe");o.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),o.setAttribute("aria-hidden","true"),o.tabIndex=-1;const r=kt();let i;return r?(o.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",i=j(window,"message",s=>{s.source===o.contentWindow&&e()})):(o.src="about:blank",o.onload=()=>{i=j(o.contentWindow,"resize",e)}),R(t,o),()=>{(r||i&&o.contentWindow)&&i(),$(o)}}function Pt(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}const W=new Map;let B=0;function Xt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Yt(t,e){const n={stylesheet:$t(e),rules:{}};return W.set(t,n),n}function nt(t,e,n,o,r,i,s,l=0){const u=16.666/o;let c=`{
`;for(let d=0;d<=1;d+=u){const g=e+(n-e)*i(d);c+=d*100+`%{${s(g,1-g)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,h=`__svelte_${Xt(f)}_${l}`,a=mt(t),{stylesheet:p,rules:m}=W.get(a)||Yt(a,t);m[h]||(m[h]=!0,p.insertRule(`@keyframes ${h} ${f}`,p.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${h} ${o}ms linear ${r}ms 1 both`,B+=1,h}function Ct(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),r=n.length-o.length;r&&(t.style.animation=o.join(", "),B-=r,B||zt())}function zt(){T(()=>{B||(W.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&$(e)}),W.clear())})}let J;function P(t){J=t}const N=[],rt=[],z=[],it=[],St=Promise.resolve();let G=!1;function Rt(){G||(G=!0,St.then(gt))}function L(t){z.push(t)}const q=new Set;let C=0;function gt(){const t=J;do{for(;C<N.length;){const e=N[C];C++,P(e),jt(e.$$)}for(P(null),N.length=0,C=0;rt.length;)rt.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];q.has(n)||(q.add(n),n())}z.length=0}while(N.length);for(;it.length;)it.pop()();G=!1,q.clear(),P(t)}function jt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let O;function Wt(){return O||(O=Promise.resolve(),O.then(()=>{O=null})),O}function F(t,e,n){t.dispatchEvent(Pt(`${e?"intro":"outro"}${n}`))}const S=new Set;let _;function Bt(){_={r:0,c:[],p:_}}function It(){_.r||x(_.c),_=_.p}function E(t,e){t&&t.i&&(S.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),_.c.push(()=>{S.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}const Dt={duration:0};function ot(t,e,n,o){let r=e(t,n),i=o?0:1,s=null,l=null,u=null;function c(){u&&Ct(t,u)}function f(a,p){const m=a.b-i;return p*=Math.abs(m),{a:i,b:a.b,d:m,duration:p,start:a.start,end:a.start+p,group:a.group}}function h(a){const{delay:p=0,duration:m=300,easing:y=wt,tick:d=D,css:g}=r||Dt,w={start:bt()+p,b:a};a||(w.group=_,_.r+=1),s||l?l=w:(g&&(c(),u=nt(t,i,a,m,p,y,g)),a&&d(0,1),s=f(w,m),L(()=>F(t,a,"start")),xt(X=>{if(l&&X>l.start&&(s=f(l,m),l=null,F(t,s.b,"start"),g&&(c(),u=nt(t,i,s.b,s.duration,0,y,r.css))),s){if(X>=s.end)d(i=s.b,1-i),F(t,s.b,"end"),l||(s.b?c():--s.group.r||x(s.group.c)),s=null;else if(X>=s.start){const yt=X-s.start;i=s.a+s.d*y(yt/s.duration),d(i,1-i)}}return!!(s||l)}))}return{run(a){at(r)?Wt().then(()=>{r=r(),h(a)}):h(a)},end(){c(),s=l=null}}}function _t(t){t&&t.c()}function Q(t,e,n,o){const{fragment:r,on_mount:i,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),o||L(()=>{const u=i.map(ft).filter(at);s?s.push(...u):x(u),t.$$.on_mount=[]}),l.forEach(L)}function U(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(N.push(t),Rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,o,r,i,s,l=[-1]){const u=J;P(t);const c=t.$$={fragment:null,ctx:null,props:i,update:D,not_equal:r,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:tt(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(h,a,...p)=>{const m=p.length?p[0]:a;return c.ctx&&r(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),f&&Ht(t,h)),a}):[],c.update(),f=!0,x(c.before_update),c.fragment=o?o(c.ctx):!1,e.target){if(e.hydrate){const h=Ot(e.target);c.fragment&&c.fragment.l(h),h.forEach($)}else c.fragment&&c.fragment.c();e.intro&&E(t.$$.fragment),Q(t,e.target,e.anchor,e.customElement),gt()}P(u)}class Z{$destroy(){U(this,1),this.$destroy=D}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function qt(t){const e=t-1;return e*e*e+1}function st(t,{delay:e=0,duration:n=400,easing:o=qt,start:r=0,opacity:i=0}={}){const s=getComputedStyle(t),l=+s.opacity,u=s.transform==="none"?"":s.transform,c=1-r,f=l*(1-i);return{delay:e,duration:n,easing:o,css:(h,a)=>`
			transform: ${u} scale(${1-c*a});
			opacity: ${l-f*a}
		`}}function Ft(t){let e,n,o;return{c(){e=M("div"),v(e,"class","h-px bg-cyan-500 absolute origin-bottom-left"),b(e,"width",t[2]()+"px"),b(e,"transform","translate("+t[0]+"px, "+t[1]+"px) rotate("+t[3]()+"deg)")},m(r,i){H(r,e,i),o=!0},p(r,[i]){(!o||i&3)&&b(e,"transform","translate("+r[0]+"px, "+r[1]+"px) rotate("+r[3]()+"deg)")},i(r){o||(L(()=>{n||(n=ot(e,st,{},!0)),n.run(1)}),o=!0)},o(r){n||(n=ot(e,st,{},!1)),n.run(0),o=!1},d(r){r&&$(e),r&&n&&n.end()}}}function k(t,e){const n=Math.min(t,e);return Math.max(t,e)-n}function Gt(t,e,n){let{x:o}=e,{y:r}=e,{prevX:i}=e,{prevY:s}=e;const l=o===i,u=r===s,c=!l&&u,f=!u&&l,h=!l&&!u,a=l&&u;function p(){return Math.hypot(k(o,i),k(r,s))}function m(){if(h)return p();if(c)return k(o,i);if(f)return k(r,s);if(a)return 0}function y(){if(h){const d=Math.asin(k(r,s)/m())*180/Math.PI,g=i>o,w=s>r;return g&&u?d+180:w&&g?d-180:g&&!w?180-d:w&&l||w&&!g?d*-1:d}return l?90:0}return t.$$set=d=>{"x"in d&&n(4,o=d.x),"y"in d&&n(5,r=d.y),"prevX"in d&&n(0,i=d.prevX),"prevY"in d&&n(1,s=d.prevY)},[i,s,m,y,o,r]}class Kt extends Z{constructor(e){super(),V(this,e,Gt,Ft,K,{x:4,y:5,prevX:0,prevY:1})}}function lt(t,e,n){var i;const o=t.slice();o[7]=e[n],o[10]=n;const r=(i=o[0][o[10]-1])!=null?i:o[7];return o[8]=r,o}function ct(t){let e,n,o;return e=new Kt({props:{x:t[7].x,y:t[7].y,prevX:t[8].x,prevY:t[8].y}}),{c(){_t(e.$$.fragment),n=pt()},m(r,i){Q(e,r,i),H(r,n,i),o=!0},p(r,i){const s={};i&1&&(s.x=r[7].x),i&1&&(s.y=r[7].y),i&1&&(s.prevX=r[8].x),i&1&&(s.prevY=r[8].y),e.$set(s)},i(r){o||(E(e.$$.fragment,r),o=!0)},o(r){I(e.$$.fragment,r),o=!1},d(r){U(e,r),r&&$(n)}}}function Tt(t){let e,n,o,r=t[0],i=[];for(let l=0;l<r.length;l+=1)i[l]=ct(lt(t,r,l));const s=l=>I(i[l],1,1,()=>{i[l]=null});return{c(){e=M("div");for(let l=0;l<i.length;l+=1)i[l].c();v(e,"class","relative bg-white shadow-md rounded overflow-auto"),b(e,"width",t[5]+1+"px"),b(e,"height",t[4]+1+t[3]+"px"),L(()=>t[6].call(e))},m(l,u){H(l,e,u);for(let c=0;c<i.length;c+=1)i[c].m(e,null);n=Nt(e,t[6].bind(e)),o=!0},p(l,[u]){if(u&1){r=l[0];let c;for(c=0;c<r.length;c+=1){const f=lt(l,r,c);i[c]?(i[c].p(f,u),E(i[c],1)):(i[c]=ct(f),i[c].c(),E(i[c],1),i[c].m(e,null))}for(Bt(),c=r.length;c<i.length;c+=1)s(c);It()}(!o||u&32)&&b(e,"width",l[5]+1+"px"),(!o||u&24)&&b(e,"height",l[4]+1+l[3]+"px")},i(l){if(!o){for(let u=0;u<r.length;u+=1)E(i[u]);o=!0}},o(l){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)I(i[u]);o=!1},d(l){l&&$(e),Et(i,l),n()}}}function Jt(t,e,n){let o,r,i,{coordsArray:s}=e,l=0,u=0;function c(){u=this.clientHeight,l=this.offsetHeight,n(2,u),n(1,l)}return t.$$set=f=>{"coordsArray"in f&&n(0,s=f.coordsArray)},t.$$.update=()=>{t.$$.dirty&1&&n(5,o=Math.max(...s.map(f=>f.x))),t.$$.dirty&1&&n(4,r=Math.max(...s.map(f=>f.y))),t.$$.dirty&6&&n(3,i=l-u)},[s,l,u,i,r,o,c]}class Qt extends Z{constructor(e){super(),V(this,e,Jt,Tt,K,{coordsArray:0})}}function Ut(t){let e,n,o,r,i,s,l;return r=new Qt({props:{coordsArray:ut(t[0])}}),{c(){e=M("main"),n=M("input"),o=pt(),_t(r.$$.fragment),v(n,"class","fixed top-0 m-4 w-[80vw]"),v(n,"type","range"),v(n,"min","0"),v(n,"max","50"),v(e,"class","flex flex-wrap justify-center gap-10 place-items-center h-full overflow-auto p-10")},m(u,c){H(u,e,c),R(e,n),et(n,t[0]),R(e,o),Q(r,e,null),i=!0,s||(l=[j(n,"change",t[1]),j(n,"input",t[1])],s=!0)},p(u,[c]){c&1&&et(n,u[0]);const f={};c&1&&(f.coordsArray=ut(u[0])),r.$set(f)},i(u){i||(E(r.$$.fragment,u),i=!0)},o(u){I(r.$$.fragment,u),i=!1},d(u){u&&$(e),U(r),s=!1,x(l)}}}function ut(t){let e=[];for(let n=0;n<=t;n++)e=[...e,{x:n*(2*n),y:n*10}];return e}function Vt(t,e,n){let o=10;function r(){o=Lt(this.value),n(0,o)}return[o,r]}class Zt extends Z{constructor(e){super(),V(this,e,Vt,Ut,K,{})}}new Zt({target:document.getElementById("app")});
