(this["webpackJsonpdolar-review"]=this["webpackJsonpdolar-review"]||[]).push([[0],{77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(38),r=a.n(n),i=a(23),s=a.n(i),o=a(39),j=a(25),l=a(96),d=a(98),u=a(80),b=a(99),h=a(100),O=a(101),x=a(102),p=a(103),m=a(104),f=a(105),v=a(106),g=a(40),w=a.n(g).a.create({baseURL:"https://api.exchangedyn.com/free/quotes/usdves"}),y={jan:"01",feb:"02",mar:"03",apr:"04",may:"05",jun:"06",jul:"07",aug:"08",sep:"09",oct:"10",nov:"11",dec:"12"};function N(e){var t="".concat(e).split(" ");return"".concat(t[3],"-").concat(y[t[1].toLowerCase()],"-").concat(t[2])}function P(e){if(isNaN(e))return 0;var t=Number(e).toLocaleString("en-US"),a=t.split(".");return a[0]=a[0].replace(",","."),t=a.join(",")}var k=a(3),G=Object(l.a)((function(e){return{dataGrid:{height:300,width:"100%"},avegeragePaper:{marginTop:e.spacing(4),marginBottom:e.spacing(4)}}}));var S=function(){var e=G(),t=Object(c.useState)({sources:[]}),a=Object(j.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)([]),l=Object(j.a)(i,2),g=l[0],y=l[1],S=Object(d.a)("(max-width:669px)"),B=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get();case 2:t=e.sent,r(t.data),a=[],t.data.sources.forEach((function(e,t){a.push({id:t,name:e.name,price:e.quote,last_update:e.last_retrieved})})),y(a),console.log(t.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){B()}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(u.a,{className:e.avegeragePaper,children:Object(k.jsxs)(b.a,{container:!0,justify:"center",children:[Object(k.jsx)(b.a,{container:!0,justify:"center",children:Object(k.jsxs)(h.a,{variant:"h5",children:["Fecha: ",N(Date())]})}),Object(k.jsx)(b.a,{container:!0,justify:"center",children:Object(k.jsxs)(h.a,{variant:"h5",children:["Promedio: ",P(n.average)]})})]})}),Object(k.jsx)(b.a,{container:!0,justify:"center",children:Object(k.jsx)(O.a,{component:u.a,children:Object(k.jsxs)(x.a,{className:e.table,size:S?"small":"medium","aria-label":"tabla de precios del dolar",children:[Object(k.jsx)(p.a,{children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(f.a,{children:"Proveedor"}),Object(k.jsx)(f.a,{children:"Precio"}),Object(k.jsx)(f.a,{children:"Ultima\xa0Actualizaci\xf3n"})]})}),Object(k.jsx)(v.a,{children:g.map((function(e){return Object(k.jsxs)(m.a,{children:[Object(k.jsx)(f.a,{component:"th",scope:"row",children:e.name}),Object(k.jsx)(f.a,{children:P(e.price)}),Object(k.jsx)(f.a,{children:e.last_update})]},e.name)}))})]})})})]})},B=a(107),E=a(108),L=Object(l.a)((function(e){return{root:{flexGrow:1,width:"100vw"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"#28a745"}}}));function R(){var e=L();return Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(B.a,{position:"static",children:Object(k.jsx)(E.a,{children:Object(k.jsx)(h.a,{variant:"h6",className:e.title,children:"DolarReview"})})})})}var U=a(109),_=(a(77),Object(l.a)((function(e){return{root:{flexGrow:1,padding:50}}})));var q=function(){var e=_();return Object(k.jsxs)("div",{children:[Object(k.jsx)(R,{}),Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(U.a,{children:Object(k.jsx)(S,{})})})]})},z=a(46),D=a(110),F=a(111),J=Object(z.a)({palette:{type:"dark",primary:{main:"#1c1c1c"},secondary:{main:"#fff"}}});r.a.render(Object(k.jsxs)(D.a,{theme:J,children:[Object(k.jsx)(F.a,{}),Object(k.jsx)(q,{})]}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.5407747f.chunk.js.map