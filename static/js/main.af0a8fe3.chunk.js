(this["webpackJsonpshine-web"]=this["webpackJsonpshine-web"]||[]).push([[0],{22:function(t,n,o){},26:function(t,n,o){"use strict";o.r(n);var e,r,a,c=o(0),i=o(14),d=o.n(i),s=(o(22),o(7)),b=o(3),f=o(2),u=document.body.clientHeight,p=document.body.clientWidth,l=function(t){return Math.floor(Math.random()*t)},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-50;return Math.floor(Math.random()*t)},j=function(t,n){var o=n-t;return o<=1?Math.floor(Math.random()*o*100)/100+t:Math.floor(Math.random()*o)+t},h=function(){var t=j(0,188);return t<=16?"0".concat(t.toString(16)):t.toString(16)},g=function(){var t=h(),n=h(),o=h();return"#".concat(t).concat(n).concat(o)},m=function(){return Number(j(.08,.25).toFixed(2))},x=o(9),O=o(10),w=O.a.div(e||(e=Object(x.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]))),M=O.a.div(r||(r=Object(x.a)(["\n  width: 100%;\n  height: 80px;\n"]))),S=O.a.div(a||(a=Object(x.a)(["\n  position: fixed;\n  display: block;\n  color: red;\n  width: 0px;\n  height: 0px;\n  -moz-transform: rotate(35deg);\n  -webkit-transform: rotate(35deg);\n  -ms-transform: rotate(35deg);\n  -o-transform: rotate(35deg);\n  ",'\n\n  ::before {\n    position: absolute;\n    height: 0;\n    width: 0;\n    display: block;\n    content: "";\n    -webkit-transform: rotate(-35deg);\n    -moz-transform: rotate(-35deg);\n    -ms-transform: rotate(-35deg);\n    -o-transform: rotate(-35deg);\n    ','\n  }\n\n  ::after {\n    position: absolute;\n    display: block;\n    color: red;\n    width: 0px;\n    height: 0px;\n    -webkit-transform: rotate(-70deg);\n    -moz-transform: rotate(-70deg);\n    -ms-transform: rotate(-70deg);\n    -o-transform: rotate(-70deg);\n    content: "";\n    ',"\n  }\n"])),(function(t){var n=t.posX,o=void 0===n?0:n,e=t.posY,r=void 0===e?0:e,a=t.rate,c=void 0===a?1:a,i=t.bgColor,d=void 0===i?"#f9f9f9":i;return"\n    top: ".concat(r,"px;\n    left: ").concat(o,"px;\n    border-right: ").concat(100*c,"px solid transparent;\n    border-bottom: ").concat(70*c,"px solid ").concat(d,";\n    border-left: ").concat(100*c,"px solid transparent;\n  ")}),(function(t){var n=t.rate,o=void 0===n?1:n,e=t.bgColor,r=void 0===e?"#f9f9f9":e;return"\n    top: ".concat(-45*o,"px;\n    left: ").concat(-65*o,"px;\n    border-bottom: ").concat(80*o,"px solid ").concat(r,";\n    border-left: ").concat(30*o,"px solid transparent;\n    border-right: ").concat(30*o,"px solid transparent;\n    \n  ")}),(function(t){var n=t.rate,o=void 0===n?1:n,e=t.bgColor,r=void 0===e?"#f9f9f9":e;return"\n    top: ".concat(3*o,"px;\n    left: ").concat(-105*o,"px;\n    border-right: ").concat(100*o,"px solid transparent;\n    border-bottom: ").concat(70*o,"px solid ").concat(r,";\n    border-left: ").concat(100*o,"px solid transparent;\n  ")})),k=o(1),C=function(t){var n=t.posX,o=void 0===n?0:n,e=t.posY,r=void 0===e?0:e,a=t.rate,i=void 0===a?1:a,d=t.bgColor,s=void 0===d?"#eee":d,b=Object(c.useState)(o),j=Object(f.a)(b,2),h=j[0],x=j[1],O=Object(c.useState)(r),w=Object(f.a)(O,2),M=w[0],C=w[1],y=Object(c.useState)(i),X=Object(f.a)(y,2),Y=X[0],z=X[1],E=Object(c.useState)(s),I=Object(f.a)(E,2),A=I[0],J=I[1];Object(c.useEffect)((function(){var t=setInterval((function(){C((function(t){return t>=u?(N(),v()):B(t)}))}),200);return function(){t&&clearInterval(t)}}),[]);var N=function(){x(l(p)),J(g()),z(m())},B=function(t){if(t<=10)return t+1;var n=t/u;return t+Math.pow(1+5*n,3)};return Object(k.jsx)("div",{children:Object(k.jsx)(S,{posY:M,posX:h,rate:Y,bgColor:A})})};var y=function(t){Object(b.a)(t);var n=Object(c.useState)([]),o=Object(f.a)(n,2),e=o[0],r=o[1];Object(c.useEffect)((function(){var t,n=(t=p,new Array(10).fill({}).map((function(){return{rate:m(),posX:l(t),posY:v(),bgColor:g()}})));r(n)}),[]);var a;return Object(k.jsx)("div",{children:(a=e,null===a||void 0===a?void 0:a.map((function(t){var n=t.posX,o=void 0===n?0:n,e=t.posY,r=void 0===e?0:e,a=t.rate,c=void 0===a?1:a,i=t.bgColor,d=void 0===i?"#eee":i;return Object(k.jsx)(C,{posX:o,posY:r,rate:c,bgColor:d},"".concat(o,"-").concat(c))})))})},X=function(t){Object(b.a)(t);var n=Object(c.useState)();Object(s.a)(n);return Object(k.jsx)(M,{children:Object(k.jsx)(y,{})})},Y=function(t){Object(b.a)(t);var n=Object(c.useState)();Object(s.a)(n);return Object(k.jsx)(w,{children:Object(k.jsx)(X,{})})};var z=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(Y,{})})};d.a.render(Object(k.jsx)(z,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.af0a8fe3.chunk.js.map