(this.webpackJsonpshoplist=this.webpackJsonpshoplist||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),r=c(7),a=c.n(r),j=c(4);c(14);var l=function(){return Object(n.jsx)("div",{className:"has-background-primary",children:Object(n.jsx)("h1",{className:"is-size-2 has-text-centered",children:"Shopping List"})})},d=c(8);var o=function(e){var t=e.items,c=e.setItems,i=Object(s.useState)(""),r=Object(j.a)(i,2),a=r[0],l=r[1];return Object(n.jsx)("section",{className:"section",children:Object(n.jsx)("div",{className:"container is-mobile",children:Object(n.jsxs)("div",{className:"field is-grouped",children:[Object(n.jsx)("div",{className:"control is-expanded",children:Object(n.jsx)("input",{type:"text",className:"input",placeholder:"Enter your item",onChange:function(e){l(e.target.value)},value:a})}),Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),c([].concat(Object(d.a)(t),[{id:Math.round(1e3*Math.random()),item:a,checked:!1}])),l("")},type:"submit",className:"button is-info",children:"Add"})})]})})})},h=c(6);var b=function(e){var t=e.item,c=e.items,s=e.setItems;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{style:t.checked?{textDecoration:"line-through"}:{},children:t.item}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{onClick:function(){s(c.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{checked:!e.checked}):e})))},href:"#",children:"Check"})}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{onClick:function(){s(c.filter((function(e){return e.id!==t.id})))},href:"#",children:"Delete"})})]})};var u=function(e){var t=e.items,c=e.setItems;return Object(n.jsx)("section",{className:"section",children:Object(n.jsx)("div",{className:"container is-mobile",children:Object(n.jsxs)("table",{className:"table is-fullwidth is-hoverable",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Item"}),Object(n.jsx)("th",{children:"Check"}),Object(n.jsx)("th",{children:"Remove"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsx)(b,{item:e,items:t,setItems:c},e.id)}))})]})})})};var m=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(l,{}),Object(n.jsx)(o,{items:c,setItems:i}),Object(n.jsx)(u,{items:c,setItems:i})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.fd29671b.chunk.js.map