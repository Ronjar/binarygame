import{s as R,e as b,a as D,t as se,c as w,b as x,g as $,d as ne,f as m,p as y,i as O,h,j as re,n as N,W as qe,X as Ie,S as ae,Y as Ee,K as G,L as de,M as me,N as ge,O as ve,P as ee,Q as te,y as Ve,Z as F,o as Te,r as J}from"../chunks/scheduler.CvXGCIA6.js";import{S as U,i as W,g as De,t as Q,c as $e,a as M,b as j,d as H,m as z,e as P}from"../chunks/index.Bj8-oLah.js";import{g as _e}from"../chunks/spread.CN4WR7uZ.js";function ue(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ce(n){return n.reduce((e,t,s)=>e+t*Math.pow(2,n.length-s-1),0)}function fe(n,e,t){const s=n.slice();return s[9]=e[t],s[10]=e,s[11]=t,s}function he(n){let e,t,s,i,a,l='<div class="m-5">1</div>',r,f,o='<div class="m-5">0</div>',c,d,v=Math.pow(2,n[0]-1-n[11])+"",V,q,T;function p(){n[7].call(s,n[11])}return{c(){e=b("div"),t=b("label"),s=b("input"),i=D(),a=b("div"),a.innerHTML=l,r=D(),f=b("div"),f.innerHTML=o,c=D(),d=b("p"),V=se(v),this.h()},l(g){e=w(g,"DIV",{});var _=x(e);t=w(_,"LABEL",{class:!0});var u=x(t);s=w(u,"INPUT",{type:!0}),i=$(u),a=w(u,"DIV",{class:!0,"data-svelte-h":!0}),ae(a)!=="svelte-19u081f"&&(a.innerHTML=l),r=$(u),f=w(u,"DIV",{class:!0,"data-svelte-h":!0}),ae(f)!=="svelte-xffprf"&&(f.innerHTML=o),u.forEach(m),c=$(_),d=w(_,"P",{class:!0});var E=x(d);V=ne(E,v),E.forEach(m),_.forEach(m),this.h()},h(){y(s,"type","checkbox"),y(a,"class","btn swap-on btn-primary text-2xl flex items-center justify-center w-20 h-20"),y(f,"class","btn swap-off text-2xl flex items-center justify-center w-20 h-20"),y(t,"class","swap text-2xl"),y(d,"class","w-full flex justify-center")},m(g,_){O(g,e,_),h(e,t),h(t,s),s.checked=n[1][n[11]],h(t,i),h(t,a),h(t,r),h(t,f),h(e,c),h(e,d),h(d,V),q||(T=Ee(s,"change",p),q=!0)},p(g,_){n=g,_&2&&(s.checked=n[1][n[11]]),_&1&&v!==(v=Math.pow(2,n[0]-1-n[11])+"")&&re(V,v)},d(g){g&&m(e),q=!1,T()}}}function ke(n){let e,t,s,i,a=ue(Array(n[0])),l=[];for(let r=0;r<a.length;r+=1)l[r]=he(fe(n,a,r));return{c(){e=b("div");for(let r=0;r<l.length;r+=1)l[r].c();t=D(),s=b("p"),i=se(n[2]),this.h()},l(r){e=w(r,"DIV",{class:!0});var f=x(e);for(let c=0;c<l.length;c+=1)l[c].l(f);t=$(f),s=w(f,"P",{class:!0});var o=x(s);i=ne(o,n[2]),o.forEach(m),f.forEach(m),this.h()},h(){y(s,"class","text-2xl flex items-center justify-center w-20 h-20"),y(e,"class","flex flex-row justify-center gap-3")},m(r,f){O(r,e,f);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null);h(e,t),h(e,s),h(s,i)},p(r,[f]){if(f&3){a=ue(Array(r[0]));let o;for(o=0;o<a.length;o+=1){const c=fe(r,a,o);l[o]?l[o].p(c,f):(l[o]=he(c),l[o].c(),l[o].m(e,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=a.length}f&4&&re(i,r[2])},i:N,o:N,d(r){r&&m(e),qe(l,r)}}}function pe(){document.querySelectorAll(".swap").forEach(n=>{n.classList.add("btn-success"),setTimeout(()=>n.classList.remove("btn-success"),500)})}function Le(n,e,t){const s=Ie();let{count:i=2}=e,a=Array(i).fill(!1),l=0,r=!1;function f(d){t(6,r=!0),t(0,i=d),t(1,a=Array(i).fill(!1))}function o(){t(6,r=!0),t(1,a=Array(i).fill(!1))}function c(d){a[d]=this.checked,t(1,a)}return n.$$set=d=>{"count"in d&&t(0,i=d.count)},n.$$.update=()=>{n.$$.dirty&70&&(t(2,l=Ce(a.map(d=>d?1:0))),r||s("update",{decimal:l}),t(6,r=!1))},[i,a,l,f,o,pe,r,c]}class Qe extends U{constructor(e){super(),W(this,e,Le,ke,R,{count:0,setCount:3,reset:4,highlightBoxes:5})}get setCount(){return this.$$.ctx[3]}get reset(){return this.$$.ctx[4]}get highlightBoxes(){return pe}}function Me(n){let e,t,s='<path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"/>',i=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},n[0]],a={};for(let l=0;l<i.length;l+=1)a=G(a,i[l]);return{c(){e=de("svg"),t=new me(!0),this.h()},l(l){e=ge(l,"svg",{viewBox:!0,width:!0,height:!0});var r=x(e);t=ve(r,!0),r.forEach(m),this.h()},h(){t.a=null,ee(e,a)},m(l,r){O(l,e,r),t.m(s,e)},p(l,[r]){ee(e,a=_e(i,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r&1&&l[0]]))},i:N,o:N,d(l){l&&m(e)}}}function Ae(n,e,t){return n.$$set=s=>{t(0,e=G(G({},e),te(s)))},e=te(e),[e]}class Be extends U{constructor(e){super(),W(this,e,Ae,Me,R,{})}}function Se(n){let e,t,s='<path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"/>',i=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},n[0]],a={};for(let l=0;l<i.length;l+=1)a=G(a,i[l]);return{c(){e=de("svg"),t=new me(!0),this.h()},l(l){e=ge(l,"svg",{viewBox:!0,width:!0,height:!0});var r=x(e);t=ve(r,!0),r.forEach(m),this.h()},h(){t.a=null,ee(e,a)},m(l,r){O(l,e,r),t.m(s,e)},p(l,[r]){ee(e,a=_e(i,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r&1&&l[0]]))},i:N,o:N,d(l){l&&m(e)}}}function je(n,e,t){return n.$$set=s=>{t(0,e=G(G({},e),te(s)))},e=te(e),[e]}class He extends U{constructor(e){super(),W(this,e,je,Se,R,{})}}function ze(n){let e,t;return e=new Be({}),{c(){j(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,i){z(e,s,i),t=!0},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){Q(e.$$.fragment,s),t=!1},d(s){P(e,s)}}}function Pe(n){let e,t;return e=new He({}),{c(){j(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,i){z(e,s,i),t=!0},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){Q(e.$$.fragment,s),t=!1},d(s){P(e,s)}}}function Ne(n){let e,t,s,i,a,l,r,f,o,c,d,v;const V=[Pe,ze],q=[];function T(p,g){return p[2]?0:1}return c=T(n),d=q[c]=V[c](n),{c(){e=b("label"),t=b("div"),s=b("div"),i=b("h2"),a=se(n[0]),l=D(),r=b("div"),f=b("div"),o=b("h2"),d.c(),this.h()},l(p){e=w(p,"LABEL",{class:!0});var g=x(e);t=w(g,"DIV",{class:!0});var _=x(t);s=w(_,"DIV",{class:!0});var u=x(s);i=w(u,"H2",{class:!0});var E=x(i);a=ne(E,n[0]),E.forEach(m),u.forEach(m),_.forEach(m),l=$(g),r=w(g,"DIV",{class:!0});var B=x(r);f=w(B,"DIV",{class:!0});var k=x(f);o=w(k,"H2",{class:!0});var A=x(o);d.l(A),A.forEach(m),k.forEach(m),B.forEach(m),g.forEach(m),this.h()},h(){y(i,"class","card-title justify-center text-base-content"),y(s,"class","card-body mx-8"),y(t,"class","swap-on card bg-base-200 text-primary-content shadow-xl"),y(o,"class","card-title justify-center text-base-content"),y(f,"class","card-body mx-8"),y(r,"class","swap-off card bg-base-200 text-primary-content shadow-xl"),F(r,"bg-green-800",n[2]),y(e,"class","swap swap-flip"),F(e,"swap-active",n[1])},m(p,g){O(p,e,g),h(e,t),h(t,s),h(s,i),h(i,a),h(e,l),h(e,r),h(r,f),h(f,o),q[c].m(o,null),v=!0},p(p,[g]){(!v||g&1)&&re(a,p[0]);let _=c;c=T(p),c!==_&&(De(),Q(q[_],1,1,()=>{q[_]=null}),$e(),d=q[c],d||(d=q[c]=V[c](p),d.c()),M(d,1),d.m(o,null)),(!v||g&4)&&F(r,"bg-green-800",p[2]),(!v||g&2)&&F(e,"swap-active",p[1])},i(p){v||(M(d),v=!0)},o(p){Q(d),v=!1},d(p){p&&m(e),q[c].d()}}}function Ge(n,e,t){let s=!1,i=!1,{question:a=0}=e;function l(c){t(0,a=c)}function r(){t(2,i=!1),t(1,s=!0)}function f(){t(2,i=!0),t(1,s=!1)}function o(){t(2,i=!1),t(1,s=!1)}return n.$$set=c=>{"question"in c&&t(0,a=c.question)},[a,s,i,l,r,f,o]}class le extends U{constructor(e){super(),W(this,e,Ge,Ne,R,{question:0,setQuestion:3,showQuestion:4,correctAnswer:5,reset:6})}get question(){return this.$$.ctx[0]}set question(e){this.$$set({question:e}),Ve()}get setQuestion(){return this.$$.ctx[3]}get showQuestion(){return this.$$.ctx[4]}get correctAnswer(){return this.$$.ctx[5]}get reset(){return this.$$.ctx[6]}}function Oe(n){const t=[{level:0,bits:2},{level:2,bits:3},{level:4,bits:4},{level:7,bits:5},{level:10,bits:6}].reduce((r,f)=>f.level<=n?f.bits:r,7),s=Math.pow(2,t)-1,i=new Set;for(;i.size<3;)i.add(Math.floor(Math.random()*(s+1)));const a=Array.from(i);return{bitCount:t,numbers:a}}function Ke(n){let e,t,s,i,a,l,r,f,o,c,d,v,V,q,T,p,g,_,u,E="Score",B,k,A,K,be={};r=new Qe({props:be}),n[4](r),r.$on("update",n[3]);let we={};c=new le({props:we}),n[5](c);let xe={};v=new le({props:xe}),n[6](v);let ye={};return q=new le({props:ye}),n[7](q),{c(){e=b("div"),t=b("div"),s=D(),i=b("div"),a=b("div"),l=b("div"),j(r.$$.fragment),f=D(),o=b("div"),j(c.$$.fragment),d=D(),j(v.$$.fragment),V=D(),j(q.$$.fragment),T=D(),p=b("div"),g=b("div"),_=b("div"),u=b("div"),u.textContent=E,B=D(),k=b("div"),A=se(n[2]),this.h()},l(I){e=w(I,"DIV",{class:!0});var C=x(e);t=w(C,"DIV",{}),x(t).forEach(m),s=$(C),i=w(C,"DIV",{class:!0});var X=x(i);a=w(X,"DIV",{class:!0});var S=x(a);l=w(S,"DIV",{class:!0});var Y=x(l);H(r.$$.fragment,Y),Y.forEach(m),f=$(S),o=w(S,"DIV",{class:!0});var L=x(o);H(c.$$.fragment,L),d=$(L),H(v.$$.fragment,L),V=$(L),H(q.$$.fragment,L),L.forEach(m),S.forEach(m),X.forEach(m),T=$(C),p=w(C,"DIV",{class:!0});var ie=x(p);g=w(ie,"DIV",{class:!0});var oe=x(g);_=w(oe,"DIV",{class:!0});var Z=x(_);u=w(Z,"DIV",{class:!0,"data-svelte-h":!0}),ae(u)!=="svelte-7gzw0e"&&(u.textContent=E),B=$(Z),k=w(Z,"DIV",{class:!0});var ce=x(k);A=ne(ce,n[2]),ce.forEach(m),Z.forEach(m),oe.forEach(m),ie.forEach(m),C.forEach(m),this.h()},h(){y(l,"class","w-full flex justify-center"),y(o,"class","mt-8 space-x-4 flex justify-center"),y(a,"class","mt-48 w-full"),y(i,"class","basis-1/2 flex justify-center"),y(u,"class","stat-title"),y(k,"class","stat-value text-primary"),y(_,"class","stat"),y(g,"class","stats shadow pr-10"),y(p,"class","flex-end"),y(e,"class","flex justify-between")},m(I,C){O(I,e,C),h(e,t),h(e,s),h(e,i),h(i,a),h(a,l),z(r,l,null),h(a,f),h(a,o),z(c,o,null),h(o,d),z(v,o,null),h(o,V),z(q,o,null),h(e,T),h(e,p),h(p,g),h(g,_),h(_,u),h(_,B),h(_,k),h(k,A),K=!0},p(I,[C]){const X={};r.$set(X);const S={};c.$set(S);const Y={};v.$set(Y);const L={};q.$set(L),(!K||C&4)&&re(A,I[2])},i(I){K||(M(r.$$.fragment,I),M(c.$$.fragment,I),M(v.$$.fragment,I),M(q.$$.fragment,I),K=!0)},o(I){Q(r.$$.fragment,I),Q(c.$$.fragment,I),Q(v.$$.fragment,I),Q(q.$$.fragment,I),K=!1},d(I){I&&m(e),n[4](null),P(r),n[5](null),P(c),n[6](null),P(v),n[7](null),P(q)}}}function Re(n,e,t){let s=[],i,a=0,l=0,r=0;function f(u){u.detail.decimal===s[a].question&&(t(2,l++,l),q(),s[a].correctAnswer(),c())}function o(){let u=Oe(r);i.setCount(u.bitCount);for(let E=0;E<3;E++)s[E].setQuestion(u.numbers[E])}function c(){setTimeout(()=>{a++,a>=3&&v(),i.reset(),s[a].showQuestion()},1e3)}function d(){a>=3&&v(),setTimeout(()=>{s[a].showQuestion()},1e3)}function v(){a=0,r++,o();for(let u=0;u<s.length;u++)s[u].reset()}Te(()=>{V(),v(),d()});function V(){let u=localStorage.getItem("score"),E=localStorage.getItem("level");t(2,l=u?parseInt(u):0),r=E?parseInt(E):0}function q(){localStorage.setItem("score",l.toString()),localStorage.setItem("level",r.toString())}function T(u){J[u?"unshift":"push"](()=>{i=u,t(1,i)})}function p(u){J[u?"unshift":"push"](()=>{s[0]=u,t(0,s)})}function g(u){J[u?"unshift":"push"](()=>{s[1]=u,t(0,s)})}function _(u){J[u?"unshift":"push"](()=>{s[2]=u,t(0,s)})}return[s,i,l,f,T,p,g,_]}class Ye extends U{constructor(e){super(),W(this,e,Re,Ke,R,{})}}export{Ye as component};
