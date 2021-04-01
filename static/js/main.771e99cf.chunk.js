(this.webpackJsonpjokes=this.webpackJsonpjokes||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),i=n.n(a),s=n(125),o=n(128),u=n(67),j=n(2),l=function(e){var t=e.title;return Object(j.jsx)("header",{children:Object(j.jsx)(s.a,{position:"static",id:"header",children:Object(j.jsx)(o.a,{children:Object(j.jsx)(u.a,{variant:"h6",children:t})})})})},b=n(10),d=n.n(b),O=n(16),f=n(13),h=n(130),p=n(136),x=n(137),v=n(138),g=n(135),m=(n(82),function(e){var t=e.joke;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"card--title",children:Object(j.jsx)(u.a,{gutterBottom:!0,children:t.category.toUpperCase()})}),Object(j.jsx)("div",{className:"card--content",children:Object(j.jsx)(k,{joke:t})})]})}),k=function(e){var t=Object(c.useState)(!1),n=Object(f.a)(t,2),r=n[0],a=n[1],i=e.joke;switch(i.type){case"twopart":return r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{variant:"h5",children:i.setup}),Object(j.jsx)(u.a,{children:i.delivery})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{variant:"h5",children:i.setup}),Object(j.jsx)("span",{id:"hidden-delivery",onClick:function(e){return a(!0)},children:"???"})]});default:return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u.a,{variant:"h5",children:i.joke})})}},y=n(139),w=n(134),F=n(129),C=n(45),S=n(142),D=n(143),M=n(144),J=n(132),z=n(133),N=n(140),V=n(131),B=n(141),E=n(63),G=n.n(E),I=function(){var e=G.a.create({baseURL:"https://v2.jokeapi.dev/"});return e.interceptors.response.use((function(e){return e}),(function(e){var t=e.response.status;t>399&&console.info("API error (status ".concat(t,")"))})),e}(),A=function(){return{getFlags:function(){var e=Object(O.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("/flags").then((function(e){return e.data}));case 2:return t=e.sent,n=t.flags,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getCategories:function(){var e=Object(O.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("/categories").then((function(e){return e.data}));case 2:return t=e.sent,n=t.categories,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getJoke:function(){var e=Object(O.a)(d.a.mark((function e(t,n){var c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),c=n?"?blacklistFlags=".concat(n.join(",")):"",console.log(c),e.next=5,I.get("/joke/".concat(t).concat(c)).then((function(e){return e.data}));case 5:return r=e.sent,a=r,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},T=n(64),U="#383794",L=Object(T.a)({palette:{secondary:{main:U}}}),P=Object(T.a)({palette:{secondary:{main:U}}}),R=(n(57),function(e){var t=e.getDialogValues,n=function(){var e=Object(c.useState)(),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(c.useMemo)(Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A().getCategories();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)}))),[]),n}(),r=function(){var e=Object(c.useState)(),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(c.useMemo)(Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A().getFlags();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)}))),[]),n}(),a=Object(c.useState)("Any"),i=Object(f.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)([]),l=Object(f.a)(u,2),b=l[0],p=l[1];if(Object(c.useEffect)((function(){t(s,b)}),[b,s]),!n||!r)return Object(j.jsx)(F.a,{container:!0,justify:"center",children:Object(j.jsx)(h.a,{})});var x=function(e){var t=e.target,n=t.checked,c=t.name;if(n)p([].concat(Object(C.a)(b),[c]));else{for(var r=b.indexOf(c),a=b,i=0;i<a.length;i++)i===r&&a.splice(i,1);p(Object(C.a)(a))}};return Object(j.jsx)(S.a,{component:"fieldset",children:Object(j.jsxs)(F.a,{container:!0,direction:"row",justify:"space-around",children:[Object(j.jsxs)(D.a,{"aria-label":"category",name:"category",value:s,onChange:function(e){o(e.target.value)},children:[Object(j.jsx)(M.a,{component:"legend",focused:!1,children:"Category"}),Object(j.jsx)(J.a,{theme:P,children:Object.entries(n).map((function(e){return Object(j.jsx)(z.a,{value:e[1],control:Object(j.jsx)(N.a,{}),label:e[1],checked:e[1]===s},e[1])}))})]}),Object(j.jsxs)(V.a,{children:[Object(j.jsx)(M.a,{component:"label",focused:!1,children:"Flags"}),Object(j.jsx)(J.a,{theme:L,children:Object.entries(r).map((function(e){return Object(j.jsx)(z.a,{control:Object(j.jsx)(B.a,{checked:b.includes(e[1]),onChange:x,name:e[1]}),label:e[1]},e[1])}))})]})]})})}),W=function(e){var t=e.open,n=e.setOpen,c=e.getDialogValues,r=function(){n(!1)},a={radio:"any",check:[""]};return Object(j.jsxs)(y.a,{"aria-labelledby":"simple-dialog-title",open:t,fullWidth:!0,onBackdropClick:function(){return r()},children:[Object(j.jsx)(w.a,{id:"simple-dialog-title",children:"Filter"}),Object(j.jsx)(R,{getDialogValues:function(e,t){a.radio=e,a.check=t}}),Object(j.jsxs)(F.a,{container:!0,direction:"row",justify:"space-evenly",children:[Object(j.jsx)(g.a,{size:"small",variant:"contained",id:"btnDialogCancel",onClick:function(){r()},children:"Cancel"}),Object(j.jsx)(g.a,{size:"small",variant:"contained",id:"btnDialogFilter",onClick:function(){c(a),r()},children:"Filter"})]})]})},Y=function(){var e=Object(c.useState)(!0),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),i=Object(f.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)("any"),l=Object(f.a)(u,2),b=l[0],k=l[1],y=Object(c.useState)(null),w=Object(f.a)(y,2),F=w[0],C=w[1],S=function(){(function(){var e=Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A().getJoke(b,F);case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()};if(Object(c.useEffect)((function(){(function(){var e=Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!s)return Object(j.jsx)(h.a,{});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(p.a,{id:"card",children:[Object(j.jsx)(x.a,{children:Object(j.jsx)(m,{joke:s})}),Object(j.jsx)(v.a,{children:Object(j.jsx)(g.a,{size:"small",variant:"contained",id:"btnNewJoke",onClick:function(e){o(void 0),S()},children:"Tell Me More"})})]}),Object(j.jsx)(g.a,{size:"small",variant:"contained",id:"btnFilter",onClick:function(){r(!0)},children:"Filter"}),Object(j.jsx)(W,{open:n,setOpen:r,getDialogValues:function(e){var t=e.radio,n=e.check;k(t),C(n),S()}})]})},q=function(){var e=(new Date).getFullYear(),t=2021,n=e===t?t:"".concat(t," - ").concat(e);return Object(j.jsx)("footer",{children:Object(j.jsxs)(u.a,{variant:"overline",children:["Developed by Matheus Garrido \xa9 ",n]})})};n(101),n(102);var H=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(F.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",id:"mainGrid",children:[Object(j.jsx)(l,{title:"GetClown"}),Object(j.jsx)("main",{children:Object(j.jsx)(F.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",children:Object(j.jsx)(Y,{})})}),Object(j.jsx)(q,{})]})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementsByTagName("body")[0])},57:function(e,t,n){},82:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.771e99cf.chunk.js.map