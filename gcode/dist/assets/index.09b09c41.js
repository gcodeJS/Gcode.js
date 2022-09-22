(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();function b(){}function T(e){return e()}function K(){return Object.create(null)}function $(e){e.forEach(T)}function re(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function oe(e){return Object.keys(e).length===0}function N(e,t,o){e.insertBefore(t,o||null)}function O(e){e.parentNode.removeChild(e)}function U(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function S(e){return document.createElement(e)}function B(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function ie(e){return Array.from(e.childNodes)}function x(e,t,o,r){o===null?e.style.removeProperty(t):e.style.setProperty(t,o,r?"important":"")}let R;function v(e){R=e}const y=[],W=[],X=[],z=[],ce=Promise.resolve();let P=!1;function le(){P||(P=!0,ce.then(V))}function k(e){X.push(e)}const E=new Set;let L=0;function V(){const e=R;do{for(;L<y.length;){const t=y[L];L++,v(t),se(t.$$)}for(v(null),y.length=0,L=0;W.length;)W.pop()();for(let t=0;t<X.length;t+=1){const o=X[t];E.has(o)||(E.add(o),o())}X.length=0}while(y.length);for(;z.length;)z.pop()();P=!1,E.clear(),v(e)}function se(e){if(e.fragment!==null){e.update(),$(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const Y=new Set;let g;function Z(){g={r:0,c:[],p:g}}function ee(){g.r||$(g.c),g=g.p}function d(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function p(e,t,o,r){if(e&&e.o){if(Y.has(e))return;Y.add(e),g.c.push(()=>{Y.delete(e),r&&(o&&e.d(1),r())}),e.o(t)}else r&&r()}function te(e){e&&e.c()}function C(e,t,o,r){const{fragment:n,on_mount:l,on_destroy:i,after_update:s}=e.$$;n&&n.m(t,o),r||k(()=>{const c=l.map(T).filter(re);i?i.push(...c):$(c),e.$$.on_mount=[]}),s.forEach(k)}function I(e,t){const o=e.$$;o.fragment!==null&&($(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(y.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,o,r,n,l,i,s=[-1]){const c=R;v(e);const f=e.$$={fragment:null,ctx:null,props:l,update:b,not_equal:n,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:K(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};i&&i(f.root);let w=!1;if(f.ctx=o?o(e,t.props||{},(a,A,...h)=>{const M=h.length?h[0]:A;return f.ctx&&n(f.ctx[a],f.ctx[a]=M)&&(!f.skip_bound&&f.bound[a]&&f.bound[a](M),w&&fe(e,a)),A}):[],f.update(),w=!0,$(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const a=ie(t.target);f.fragment&&f.fragment.l(a),a.forEach(O)}else f.fragment&&f.fragment.c();t.intro&&d(e.$$.fragment),C(e,t.target,t.anchor,t.customElement),V()}v(c)}class q{$destroy(){I(this,1),this.$destroy=b}$on(t,o){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(o),()=>{const n=r.indexOf(o);n!==-1&&r.splice(n,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ue(e){let t;return{c(){t=S("div"),B(t,"class","h-px bg-cyan-500 absolute origin-bottom-left"),x(t,"width",e[2]()+"px"),x(t,"transform","translate("+e[0]+"px, "+e[1]+"px) rotate("+e[3]()+"deg)")},m(o,r){N(o,t,r)},p(o,[r]){r&3&&x(t,"transform","translate("+o[0]+"px, "+o[1]+"px) rotate("+o[3]()+"deg)")},i:b,o:b,d(o){o&&O(t)}}}function ae(e,t,o){let{x:r}=t,{y:n}=t,{prevX:l}=t,{prevY:i}=t;const s=r===l,c=n===i,f=!s&&c,w=!c&&s,a=!s&&!c,A=s&&c,h=(u,m)=>{const _=Math.min(u,m);return Math.max(u,m)-_},M=()=>Math.hypot(h(r,l),h(n,i));function F(){if(a)return M();if(f)return h(r,l);if(w)return h(n,i);if(A)return 0}function ne(){if(a){const u=Math.asin(h(n,i)/F())*180/Math.PI,m=l>r,_=i>n;return m&&c?u+180:_&&m?u-180:m&&!_?180-u:_&&s||_&&!m?u*-1:u}return s?90:0}return e.$$set=u=>{"x"in u&&o(4,r=u.x),"y"in u&&o(5,n=u.y),"prevX"in u&&o(0,l=u.prevX),"prevY"in u&&o(1,i=u.prevY)},[l,i,F,ne,r,n]}class de extends q{constructor(t){super(),G(this,t,ae,ue,j,{x:4,y:5,prevX:0,prevY:1})}}function D(e,t,o){var l;const r=e.slice();r[3]=t[o],r[6]=o;const n=(l=r[0][r[6]-1])!=null?l:r[3];return r[4]=n,r}function H(e){let t,o;return t=new de({props:{x:e[3].x,y:e[3].y,prevX:e[4].x,prevY:e[4].y}}),{c(){te(t.$$.fragment)},m(r,n){C(t,r,n),o=!0},p(r,n){const l={};n&1&&(l.x=r[3].x),n&1&&(l.y=r[3].y),n&1&&(l.prevX=r[4].x),n&1&&(l.prevY=r[4].y),t.$set(l)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){I(t,r)}}}function he(e){let t,o,r=e[0],n=[];for(let i=0;i<r.length;i+=1)n[i]=H(D(e,r,i));const l=i=>p(n[i],1,1,()=>{n[i]=null});return{c(){t=S("div");for(let i=0;i<n.length;i+=1)n[i].c();B(t,"class","relative bg-white shadow-md rounded"),x(t,"width",e[1]+"px"),x(t,"height",e[2]+"px")},m(i,s){N(i,t,s);for(let c=0;c<n.length;c+=1)n[c].m(t,null);o=!0},p(i,[s]){if(s&1){r=i[0];let c;for(c=0;c<r.length;c+=1){const f=D(i,r,c);n[c]?(n[c].p(f,s),d(n[c],1)):(n[c]=H(f),n[c].c(),d(n[c],1),n[c].m(t,null))}for(Z(),c=r.length;c<n.length;c+=1)l(c);ee()}},i(i){if(!o){for(let s=0;s<r.length;s+=1)d(n[s]);o=!0}},o(i){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)p(n[s]);o=!1},d(i){i&&O(t),U(n,i)}}}function me(e,t,o){let{coordsArray:r}=t;const n=Math.max(...r.map(i=>i.x)),l=Math.max(...r.map(i=>i.y));return e.$$set=i=>{"coordsArray"in i&&o(0,r=i.coordsArray)},[r,n,l]}class ge extends q{constructor(t){super(),G(this,t,me,he,j,{coordsArray:0})}}function J(e,t,o){const r=e.slice();return r[1]=t[o],r}function Q(e){let t,o;return t=new ge({props:{coordsArray:e[0](e[1])}}),{c(){te(t.$$.fragment)},m(r,n){C(t,r,n),o=!0},p:b,i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){I(t,r)}}}function _e(e){let t,o,r=[10,20,30,40,50,60],n=[];for(let i=0;i<6;i+=1)n[i]=Q(J(e,r,i));const l=i=>p(n[i],1,1,()=>{n[i]=null});return{c(){t=S("main");for(let i=0;i<6;i+=1)n[i].c();B(t,"class","flex flex-wrap justify-center gap-10 place-items-center h-full overflow-auto p-10")},m(i,s){N(i,t,s);for(let c=0;c<6;c+=1)n[c].m(t,null);o=!0},p(i,[s]){if(s&1){r=[10,20,30,40,50,60];let c;for(c=0;c<6;c+=1){const f=J(i,r,c);n[c]?(n[c].p(f,s),d(n[c],1)):(n[c]=Q(f),n[c].c(),d(n[c],1),n[c].m(t,null))}for(Z(),c=6;c<6;c+=1)l(c);ee()}},i(i){if(!o){for(let s=0;s<6;s+=1)d(n[s]);o=!0}},o(i){n=n.filter(Boolean);for(let s=0;s<6;s+=1)p(n[s]);o=!1},d(i){i&&O(t),U(n,i)}}}function pe(e){return[o=>{let r=[];for(let n=0;n<=o;n++)r=[...r,{x:n*10*Math.random(),y:n*10*Math.random()}];return r}]}class ye extends q{constructor(t){super(),G(this,t,pe,_e,j,{})}}new ye({target:document.getElementById("app")});