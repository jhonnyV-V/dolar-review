(this["webpackJsonpdolar-review"]=this["webpackJsonpdolar-review"]||[]).push([[4],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var a={jan:"01",feb:"02",mar:"03",apr:"04",may:"05",jun:"06",jul:"07",aug:"08",sep:"09",oct:"10",nov:"11",dec:"12"};function r(e){var t="".concat(e).split(" ");return"".concat(t[3],"-").concat(a[t[1].toLowerCase()],"-").concat(t[2])}var c=function(){return navigator.language||"en-US"},o=new Intl.NumberFormat(c(),{style:"currency",currency:"VES"}),i=new Intl.NumberFormat(c(),{style:"currency",currency:"USD"});function s(e,t){return isNaN(e)?0:t&&"VES"!==t?i.format(e):o.format(e)}},150:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(103),r=n(109),c=n(110),o=n(0),i=n(37),s=n(117),u=n(18),l=n(151),j=n(129),m=n(147),b=n(148),d=n(2),f=Object(a.a)((function(e){return{formControl:{margin:e.spacing(1),marginTop:0,minWidth:120},selectEmpty:{marginTop:e.spacing(2)},amount:{marginTop:"32px",fontSize:"1.4rem",fontWeight:"bold",color:"#28a745",overflow:"scroll","@media (min-width: 600px)":{overflow:"auto"}}}})),p=function(e){var t=e.calculate,n=e.options,a=f(),i=Object(o.useState)("Promedio"),s=Object(u.a)(i,2),p=s[0],O=s[1],v=Object(o.useState)(""),h=Object(u.a)(v,2),x=h[0],g=h[1];return Object(d.jsxs)(r.a,{container:!0,item:!0,children:[Object(d.jsxs)(r.a,{container:!0,item:!0,xs:12,children:[Object(d.jsx)(r.a,{container:!0,item:!0,xs:12,sm:6,children:Object(d.jsxs)(l.a,{className:a.formControl,children:[Object(d.jsx)(j.a,{className:a.selectEmpty,defaultValue:"Promedio",name:"Proveedor",onChange:function(e){O(e.target.value)},inputProps:{"aria-label":"Proveedor"},children:n.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))}),Object(d.jsx)(m.a,{children:"Proveedor"})]})}),Object(d.jsx)(r.a,{container:!0,item:!0,xs:12,sm:6,children:Object(d.jsx)(b.a,{variant:"outlined",placeholder:"Cantidad",value:x,onChange:function(e){isNaN(e.target.value)||g(e.target.value)},className:a.textField})})]}),Object(d.jsx)(r.a,{container:!0,justify:"center",item:!0,xs:9,children:Object(d.jsx)(c.a,{variant:"h6",className:a.amount,children:t(p,x||0)})})]})},O=Object(a.a)((function(e){return{container:{marginTop:e.spacing(4),marginBottom:e.spacing(4)}}})),v=function(){var e=O(),t=Object(o.useContext)(i.b),n=t.rows,a={Promedio:t.data.average};n.forEach((function(e){a[e.name]=e.price}));return Object(d.jsxs)(r.a,{container:!0,justify:"center",children:[Object(d.jsxs)(r.a,{item:!0,xs:12,sm:6,className:e.container,children:[Object(d.jsx)(c.a,{variant:"h6",children:"Dolares a Bolivares"}),Object(d.jsx)(p,{options:Object.keys(a),calculate:function(e,t){return isNaN(t)?0:Object(s.b)(a[e||"Provider"]*t)}})]}),Object(d.jsxs)(r.a,{item:!0,xs:12,sm:6,className:e.container,children:[Object(d.jsx)(c.a,{variant:"h6",children:"Bolivares a Dolares"}),Object(d.jsx)(p,{optionObject:a,options:Object.keys(a),calculate:function(e,t){return isNaN(t)?0:Object(s.b)(t/a[e||"Provider"],"USD")}})]})]})}}}]);
//# sourceMappingURL=4.7a4570ac.chunk.js.map