(this["webpackJsonpgift-wrapping-algorithm"]=this["webpackJsonpgift-wrapping-algorithm"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(5),i=n.n(a);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(6),u=n(1),l=n(2),s=function(e){var t=e.points,n=e.isRunning,r=e.currentVertex,a=e.nextVertex,i=e.checking,o=e.hull,u=e.getLinePath,l=e.width,s=e.height,f=function(e){var t=e.point;return c.a.createElement("circle",{cx:t.x,fill:"white",cy:t.y,r:5})};return c.a.createElement((function(e){return c.a.createElement("svg",{viewBox:"0 0 ".concat(l," ").concat(s)},e.children)}),null,c.a.createElement((function(){return c.a.createElement("g",null,t.map((function(e,t){return c.a.createElement(f,{point:e,key:t})})))}),null),c.a.createElement((function(){return n?c.a.createElement("g",null,c.a.createElement("line",{strokeWidth:2,stroke:"green",x1:r.x,y1:r.y,x2:a.x,y2:a.y}),c.a.createElement("line",{strokeWidth:2,stroke:"white",x1:r.x,y1:r.y,x2:i.x,y2:i.y})):null}),null),c.a.createElement((function(){return c.a.createElement("path",{opacity:.2,fill:"lavender",d:u(o),strokeWidth:10,stroke:"blue"})}),null))},f=function(){var e=window.innerWidth,t=window.innerHeight,n=50,a=50,i=Object(r.useState)(Array(a).fill(0).map((function(){return{x:z(n,e-n),y:z(n,t-n)}}))),f=Object(u.a)(i,2),h=f[0],x=(f[1],Object(r.useState)(h.sort((function(e,t){return e.x-t.x}))[0])),y=Object(u.a)(x,2),b=y[0],g=(y[1],Object(r.useState)(b)),m=Object(u.a)(g,2),j=m[0],O=m[1],d=Object(r.useState)([j]),v=Object(u.a)(d,2),w=v[0],p=v[1],E=Object(r.useState)(h[1]),k=Object(u.a)(E,2),S=k[0],W=k[1],V=Object(r.useState)(2),B=Object(u.a)(V,2),I=B[0],L=B[1],R=Object(r.useState)(!0),J=Object(u.a)(R,2),M=J[0],P=J[1],A=Object(r.useState)(h[I]),H=Object(u.a)(A,2),$=H[0],q=H[1];function z(e,t){return Math.random()*(t-e)+e}function C(){p([].concat(Object(o.a)(w),[S])),O(S),L(0),W(b)}return function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=Object(l.setInterval)((function(){n.current()}),t);return function(){return Object(l.clearInterval)(e)}}}),[t])}((function(){return function(){if(h[I]){q(h[I]);var e={x:S.x-j.x,y:S.y-j.y},t={x:$.x-j.x,y:$.y-j.y};(n=e).x*(r=t).y-n.y*r.x<0&&W($)}var n,r}(),L(I+1),void(I===h.length&&(S===b?(P(!1),C()):C()))}),M?10:null),c.a.createElement(s,{points:h,checking:$,currentVertex:j,getLinePath:function(e){for(var t="M".concat(e[0].x,",").concat(e[0].y),n="",r=1;r<e.length;r++)n+="L".concat(e[r].x,",").concat(e[r].y);return"".concat(t).concat(n)},hull:w,isRunning:M,nextVertex:S,width:e,height:t})};i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.68e801b8.chunk.js.map