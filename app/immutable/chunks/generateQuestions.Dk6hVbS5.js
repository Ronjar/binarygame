import{s as Q,e as _,a as B,t as z,c as p,b,f as A,h as N,d as m,i as w,j as k,k as g,l as P,n as T,W as ie,X as ce,g as X,Y as oe,L as E,M as J,N as K,O as $,P as ee,Q as C,R as V,z as ue,Z as M}from"./scheduler.DOH_6nvr.js";import{S as j,i as H,g as he,b as D,e as fe,t as I,c as te,a as se,m as ne,d as le}from"./index.DVcndwRG.js";import{g as re}from"./spread.CN4WR7uZ.js";function Y(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function de(n){return n.reduce((e,t,s)=>e+t*Math.pow(2,n.length-s-1),0)}function Z(n,e,t){const s=n.slice();return s[9]=e[t],s[10]=e,s[11]=t,s}function F(n){let e,t=Math.pow(2,n[0]-1-n[11])+"",s;return{c(){e=_("p"),s=z(t),this.h()},l(a){e=p(a,"P",{class:!0});var i=b(e);s=N(i,t),i.forEach(m),this.h()},h(){w(e,"class","w-full flex justify-center")},m(a,i){k(a,e,i),g(e,s)},p(a,i){i&1&&t!==(t=Math.pow(2,a[0]-1-a[11])+"")&&P(s,t)},d(a){a&&m(e)}}}function G(n){let e,t,s,a,i,r='<div class="m-5">1</div>',l,o,c='<div class="m-5">0</div>',u,f,x;function L(){n[7].call(s,n[11])}let d=n[0]>4&&F(n);return{c(){e=_("div"),t=_("label"),s=_("input"),a=B(),i=_("div"),i.innerHTML=r,l=B(),o=_("div"),o.innerHTML=c,u=B(),d&&d.c(),this.h()},l(y){e=p(y,"DIV",{});var h=b(e);t=p(h,"LABEL",{class:!0});var v=b(t);s=p(v,"INPUT",{type:!0}),a=A(v),i=p(v,"DIV",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-19u081f"&&(i.innerHTML=r),l=A(v),o=p(v,"DIV",{class:!0,"data-svelte-h":!0}),X(o)!=="svelte-xffprf"&&(o.innerHTML=c),v.forEach(m),u=A(h),d&&d.l(h),h.forEach(m),this.h()},h(){w(s,"type","checkbox"),w(i,"class","btn swap-on btn-primary text-2xl flex items-center justify-center w-20 h-20"),w(o,"class","btn swap-off text-2xl flex items-center justify-center w-20 h-20"),w(t,"class","swap text-2xl")},m(y,h){k(y,e,h),g(e,t),g(t,s),s.checked=n[1][n[11]],g(t,a),g(t,i),g(t,l),g(t,o),g(e,u),d&&d.m(e,null),f||(x=oe(s,"change",L),f=!0)},p(y,h){n=y,h&2&&(s.checked=n[1][n[11]]),n[0]>4?d?d.p(n,h):(d=F(n),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},d(y){y&&m(e),d&&d.d(),f=!1,x()}}}function me(n){let e,t,s,a,i=Y(Array(n[0])),r=[];for(let l=0;l<i.length;l+=1)r[l]=G(Z(n,i,l));return{c(){e=_("div");for(let l=0;l<r.length;l+=1)r[l].c();t=B(),s=_("p"),a=z(n[2]),this.h()},l(l){e=p(l,"DIV",{class:!0});var o=b(e);for(let u=0;u<r.length;u+=1)r[u].l(o);t=A(o),s=p(o,"P",{class:!0});var c=b(s);a=N(c,n[2]),c.forEach(m),o.forEach(m),this.h()},h(){w(s,"class","text-2xl flex items-center justify-center w-20 h-20"),w(e,"class","flex flex-row justify-center gap-3")},m(l,o){k(l,e,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);g(e,t),g(e,s),g(s,a)},p(l,[o]){if(o&3){i=Y(Array(l[0]));let c;for(c=0;c<i.length;c+=1){const u=Z(l,i,c);r[c]?r[c].p(u,o):(r[c]=G(u),r[c].c(),r[c].m(e,t))}for(;c<r.length;c+=1)r[c].d(1);r.length=i.length}o&4&&P(a,l[2])},i:T,o:T,d(l){l&&m(e),ie(r,l)}}}function ae(){document.querySelectorAll(".swap").forEach(n=>{n.classList.add("btn-success"),setTimeout(()=>n.classList.remove("btn-success"),500)})}function ge(n,e,t){const s=ce();let{count:a=2}=e,i=Array(a).fill(!1),r=0,l=!1;function o(f){t(6,l=!0),t(0,a=f),t(1,i=Array(a).fill(!1))}function c(){t(6,l=!0),t(1,i=Array(a).fill(!1))}function u(f){i[f]=this.checked,t(1,i)}return n.$$set=f=>{"count"in f&&t(0,a=f.count)},n.$$.update=()=>{n.$$.dirty&70&&(t(2,r=de(i.map(f=>f?1:0))),l||s("update",{decimal:r}),t(6,l=!1))},[a,i,r,o,c,ae,l,u]}class Le extends j{constructor(e){super(),H(this,e,ge,me,Q,{count:0,setCount:3,reset:4,highlightBoxes:5})}get setCount(){return this.$$.ctx[3]}get reset(){return this.$$.ctx[4]}get highlightBoxes(){return ae}}function ve(n){let e,t,s='<path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"/>',a=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},n[0]],i={};for(let r=0;r<a.length;r+=1)i=E(i,a[r]);return{c(){e=J("svg"),t=new K(!0),this.h()},l(r){e=$(r,"svg",{viewBox:!0,width:!0,height:!0});var l=b(e);t=ee(l,!0),l.forEach(m),this.h()},h(){t.a=null,C(e,i)},m(r,l){k(r,e,l),t.m(s,e)},p(r,[l]){C(e,i=re(a,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&r[0]]))},i:T,o:T,d(r){r&&m(e)}}}function _e(n,e,t){return n.$$set=s=>{t(0,e=E(E({},e),V(s)))},e=V(e),[e]}class pe extends j{constructor(e){super(),H(this,e,_e,ve,Q,{})}}function be(n){let e,t,s='<path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"/>',a=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},n[0]],i={};for(let r=0;r<a.length;r+=1)i=E(i,a[r]);return{c(){e=J("svg"),t=new K(!0),this.h()},l(r){e=$(r,"svg",{viewBox:!0,width:!0,height:!0});var l=b(e);t=ee(l,!0),l.forEach(m),this.h()},h(){t.a=null,C(e,i)},m(r,l){k(r,e,l),t.m(s,e)},p(r,[l]){C(e,i=re(a,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},l&1&&r[0]]))},i:T,o:T,d(r){r&&m(e)}}}function we(n,e,t){return n.$$set=s=>{t(0,e=E(E({},e),V(s)))},e=V(e),[e]}class xe extends j{constructor(e){super(),H(this,e,we,be,Q,{})}}function ye(n){let e,t;return e=new pe({}),{c(){te(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,a){ne(e,s,a),t=!0},i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){le(e,s)}}}function qe(n){let e,t;return e=new xe({}),{c(){te(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,a){ne(e,s,a),t=!0},i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){le(e,s)}}}function Te(n){let e,t,s,a,i,r,l,o,c,u,f,x;const L=[qe,ye],d=[];function y(h,v){return h[2]?0:1}return u=y(n),f=d[u]=L[u](n),{c(){e=_("label"),t=_("div"),s=_("div"),a=_("h2"),i=z(n[0]),r=B(),l=_("div"),o=_("div"),c=_("h2"),f.c(),this.h()},l(h){e=p(h,"LABEL",{class:!0});var v=b(e);t=p(v,"DIV",{class:!0});var q=b(t);s=p(q,"DIV",{class:!0});var S=b(s);a=p(S,"H2",{class:!0});var O=b(a);i=N(O,n[0]),O.forEach(m),S.forEach(m),q.forEach(m),r=A(v),l=p(v,"DIV",{class:!0});var R=b(l);o=p(R,"DIV",{class:!0});var U=b(o);c=p(U,"H2",{class:!0});var W=b(c);f.l(W),W.forEach(m),U.forEach(m),R.forEach(m),v.forEach(m),this.h()},h(){w(a,"class","card-title justify-center text-base-content"),w(s,"class","card-body mx-8"),w(t,"class","swap-on card bg-base-200 text-primary-content shadow-xl"),w(c,"class","card-title justify-center text-base-content"),w(o,"class","card-body mx-8"),w(l,"class","swap-off card bg-base-200 text-primary-content shadow-xl"),M(l,"bg-green-800",n[2]),w(e,"class","swap swap-flip"),M(e,"swap-active",n[1])},m(h,v){k(h,e,v),g(e,t),g(t,s),g(s,a),g(a,i),g(e,r),g(e,l),g(l,o),g(o,c),d[u].m(c,null),x=!0},p(h,[v]){(!x||v&1)&&P(i,h[0]);let q=u;u=y(h),u!==q&&(he(),D(d[q],1,1,()=>{d[q]=null}),fe(),f=d[u],f||(f=d[u]=L[u](h),f.c()),I(f,1),f.m(c,null)),(!x||v&4)&&M(l,"bg-green-800",h[2]),(!x||v&2)&&M(e,"swap-active",h[1])},i(h){x||(I(f),x=!0)},o(h){D(f),x=!1},d(h){h&&m(e),d[u].d()}}}function Ee(n,e,t){let s=!1,a=!1,{question:i=0}=e;function r(u){t(0,i=u)}function l(){t(2,a=!1),t(1,s=!0)}function o(){t(2,a=!0),t(1,s=!1)}function c(){t(2,a=!1),t(1,s=!1)}return n.$$set=u=>{"question"in u&&t(0,i=u.question)},[i,s,a,r,l,o,c]}class Me extends j{constructor(e){super(),H(this,e,Ee,Te,Q,{question:0,setQuestion:3,showQuestion:4,correctAnswer:5,reset:6})}get question(){return this.$$.ctx[0]}set question(e){this.$$set({question:e}),ue()}get setQuestion(){return this.$$.ctx[3]}get showQuestion(){return this.$$.ctx[4]}get correctAnswer(){return this.$$.ctx[5]}get reset(){return this.$$.ctx[6]}}function Ce(n){const t=[{level:0,bits:2},{level:2,bits:3},{level:4,bits:4},{level:7,bits:5},{level:10,bits:6}].reduce((l,o)=>o.level<=n?o.bits:l,7),s=Math.pow(2,t)-1,a=new Set;for(;a.size<3;)a.add(Math.floor(Math.random()*(s+1)));const i=Array.from(a);return{bitCount:t,numbers:i}}export{Le as B,Me as Q,Ce as g};
