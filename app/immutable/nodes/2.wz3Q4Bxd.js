import{s as te,e as v,a as V,t as se,c as g,b as I,d as h,f as Q,g as ne,h as ae,i as q,j as re,k as a,l as ie,o as oe,m as z}from"../chunks/scheduler.BerbHHAa.js";import{S as le,i as ce,c as A,a as P,m as F,t as H,b as J,d as K}from"../chunks/index.CNKnHraz.js";import{B as ue,Q as O,g as de}from"../chunks/generateQuestions.B1Ti3eLb.js";function fe(l){let o,f,t,r,s,u,i,C,d,m,x,c,j,p,k,y,E,_,e,b="Score",N,S,B,L,X={};i=new ue({props:X}),l[4](i),i.$on("update",l[3]);let Y={};m=new O({props:Y}),l[5](m);let Z={};c=new O({props:Z}),l[6](c);let ee={};return p=new O({props:ee}),l[7](p),{c(){o=v("div"),f=v("div"),t=V(),r=v("div"),s=v("div"),u=v("div"),A(i.$$.fragment),C=V(),d=v("div"),A(m.$$.fragment),x=V(),A(c.$$.fragment),j=V(),A(p.$$.fragment),k=V(),y=v("div"),E=v("div"),_=v("div"),e=v("div"),e.textContent=b,N=V(),S=v("div"),B=se(l[2]),this.h()},l(n){o=g(n,"DIV",{class:!0});var $=I(o);f=g($,"DIV",{}),I(f).forEach(h),t=Q($),r=g($,"DIV",{class:!0});var G=I(r);s=g(G,"DIV",{class:!0});var D=I(s);u=g(D,"DIV",{class:!0});var M=I(u);P(i.$$.fragment,M),M.forEach(h),C=Q(D),d=g(D,"DIV",{class:!0});var w=I(d);P(m.$$.fragment,w),x=Q(w),P(c.$$.fragment,w),j=Q(w),P(p.$$.fragment,w),w.forEach(h),D.forEach(h),G.forEach(h),k=Q($),y=g($,"DIV",{class:!0});var R=I(y);E=g(R,"DIV",{class:!0});var U=I(E);_=g(U,"DIV",{class:!0});var T=I(_);e=g(T,"DIV",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-7gzw0e"&&(e.textContent=b),N=Q(T),S=g(T,"DIV",{class:!0});var W=I(S);B=ae(W,l[2]),W.forEach(h),T.forEach(h),U.forEach(h),R.forEach(h),$.forEach(h),this.h()},h(){q(u,"class","w-full flex justify-center"),q(d,"class","mt-8 space-x-4 flex justify-center"),q(s,"class","mt-48 w-full"),q(r,"class","basis-1/2 flex justify-center"),q(e,"class","stat-title"),q(S,"class","stat-value text-primary"),q(_,"class","stat"),q(E,"class","stats shadow pr-10"),q(y,"class","flex-end"),q(o,"class","flex justify-between")},m(n,$){re(n,o,$),a(o,f),a(o,t),a(o,r),a(r,s),a(s,u),F(i,u,null),a(s,C),a(s,d),F(m,d,null),a(d,x),F(c,d,null),a(d,j),F(p,d,null),a(o,k),a(o,y),a(y,E),a(E,_),a(_,e),a(_,N),a(_,S),a(S,B),L=!0},p(n,[$]){const G={};i.$set(G);const D={};m.$set(D);const M={};c.$set(M);const w={};p.$set(w),(!L||$&4)&&ie(B,n[2])},i(n){L||(H(i.$$.fragment,n),H(m.$$.fragment,n),H(c.$$.fragment,n),H(p.$$.fragment,n),L=!0)},o(n){J(i.$$.fragment,n),J(m.$$.fragment,n),J(c.$$.fragment,n),J(p.$$.fragment,n),L=!1},d(n){n&&h(o),l[4](null),K(i),l[5](null),K(m),l[6](null),K(c),l[7](null),K(p)}}}function me(l,o,f){let t=[],r,s=0,u=0,i=0;function C(e){e.detail.decimal===t[s].question&&(r.disable(),f(2,u++,u),p(),t[s].correctAnswer(),m())}function d(){let e=de(i);r.setCount(e.bitCount),r.setSumEnabled(e.isSumEnabled),r.setIndicatorsEnabled(e.areIndicatorsEnabled);for(let b=0;b<3;b++)t[b].setQuestion(e.numbers[b])}function m(){setTimeout(()=>{s++,s>=3&&c(),r.reset(),t[s].showQuestion(),r.enable()},1e3)}function x(){s>=3&&c(),setTimeout(()=>{t[s].showQuestion()},1e3)}function c(){s=0,i++,d();for(let e=0;e<t.length;e++)t[e].reset()}oe(()=>{j(),c(),x()});function j(){let e=localStorage.getItem("score"),b=localStorage.getItem("level");f(2,u=e?parseInt(e):0),i=b?parseInt(b):0}function p(){localStorage.setItem("score",u.toString()),localStorage.setItem("level",i.toString())}function k(e){z[e?"unshift":"push"](()=>{r=e,f(1,r)})}function y(e){z[e?"unshift":"push"](()=>{t[0]=e,f(0,t)})}function E(e){z[e?"unshift":"push"](()=>{t[1]=e,f(0,t)})}function _(e){z[e?"unshift":"push"](()=>{t[2]=e,f(0,t)})}return[t,r,u,C,k,y,E,_]}class he extends le{constructor(o){super(),ce(this,o,me,fe,te,{})}}export{he as component};
