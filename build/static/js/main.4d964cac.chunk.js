(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{122:function(e,t,c){},123:function(e,t,c){},127:function(e,t,c){},216:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(26),a=c.n(r),i=(c(122),c(219)),o=c(220),l=c(221),j=c(222),d=c(223),h=(c(75),c(123),c(47)),b=c(4),u=function(){return Object(b.jsx)(i.a,{children:Object(b.jsx)(o.a,{className:"d-flex justify-content-center",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(j.a,{className:"image",src:"https://lh3.googleusercontent.com/a-/AOh14GhnaEkgS062CYjPvirOuW9SpoC8jAaHIlksy5MByg=s288-p-rw-no",roundedCircle:!0}),Object(b.jsx)("h1",{children:"Mukhriddin Shakhriyorov"}),Object(b.jsx)("p",{children:Object(b.jsx)(d.a,{bg:"secondary",children:"Front-end Developer"})}),Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{className:"d-flex justify-content-center align-center",children:[Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"https://www.instagram.com/m_shakhriyorov/",title:"Mukhriddin on Intagram",target:"_blank",children:[Object(b.jsx)(h.c,{})," Instagram"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"https://www.facebook.com/mukhriddin.shakhriyorov.3",title:"Mukhriddin on Facebook",target:"_blank",children:[Object(b.jsx)(h.a,{})," Facebook"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"https://t.me/Mookher_al_deen",title:"Mukhriddin on Telegram",target:"_blank",children:[Object(b.jsx)(h.d,{})," Telegram"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"https://github.com/mshakhriyorov",title:"Mukhriddin on GitHub",target:"_blank",children:[Object(b.jsx)(h.b,{})," GitHub"]})})]})})]})})})},O=c(28),x=(c(127),c(226)),m=c(97),p=c.n(m),f="http://jsonplaceholder.typicode.com/",g=c(225),k=c(224),v=(c(146),c(98)),y=c(99),w=c(116),N=c(113),C=function(e){Object(w.a)(c,e);var t=Object(N.a)(c);function c(){return Object(v.a)(this,c),t.apply(this,arguments)}return Object(y.a)(c,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"modal show fade",role:"dialog",style:{display:"block",backgroundColor:"rgba(0, 0, 0, 0.8)"},children:Object(b.jsx)("div",{className:"modal-dialog",role:"document",children:Object(b.jsxs)("div",{className:"modal-content mt-5",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",style:{textAlign:"center"},children:this.props.title}),Object(b.jsx)("button",{type:"button",className:"btn-close btn-danger",onClick:this.props.hide})]}),Object(b.jsxs)("div",{className:"modal-body",children:[Object(b.jsx)("img",{src:"https://admnvrsk.ru/upload/resize_cache/iblock/440/600_600_2/440d8445edc9f9527669db6dd078219d.jpg",alt:this.props.title,className:"img-fluid"}),Object(b.jsx)("p",{children:this.props.body})]})]})})},this.props.id)})}}]),c}(n.Component),S=g.a.Search,_=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(0),a=Object(O.a)(r,2),o=a[0],j=a[1],d=Object(n.useState)(1),h=Object(O.a)(d,2),u=h[0],m=h[1],g=Object(n.useState)(6),v=Object(O.a)(g,2),y=v[0],w=v[1],N=Object(n.useState)(""),_=Object(O.a)(N,2),M=_[0],F=_[1],z=Object(n.useState)(!1),I=Object(O.a)(z,2),A=I[0],L=I[1],T=Object(n.useState)([]),B=Object(O.a)(T,2),E=B[0],G=B[1];Object(n.useEffect)((function(){p.a.get(f+"posts").then((function(e){s(e.data),j(e.data.length)})).catch((function(e){console.error(e)}))}),[]);var H=c.slice(u,y+u);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{className:"search",placeholder:"input search text",allowClear:!0,onChange:function(e){F(e.target.value)},style:{width:200}}),Object(b.jsxs)(i.a,{className:"d-flex flex-wrap justify-content-center",children:[H.filter((function(e){return""==M||e.title.toLowerCase().includes(M.toLowerCase())||e.body.toLowerCase().includes(M.toLowerCase())?e:void 0})).map((function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(l.a,{md:4,sm:12,lg:3,className:"card",onClick:function(){return function(e,t,c){var n=[e,t,c];return G((function(e){return[1].concat(n)})),L(!0)}(e.title,e.body,e.id)},children:[Object(b.jsx)(x.a.Img,{variant:"top",src:"https://admnvrsk.ru/upload/resize_cache/iblock/440/600_600_2/440d8445edc9f9527669db6dd078219d.jpg"}),Object(b.jsxs)(x.a.Body,{children:[Object(b.jsx)(x.a.Title,{children:e.title}),Object(b.jsx)(x.a.Text,{children:e.body.split(" ").splice(0,7).join(" ")+"..."})]}),Object(b.jsx)(x.a.Footer,{children:Object(b.jsx)("small",{className:"text",children:"Read more..."})})]},e.id)})})),!0===A?Object(b.jsx)(C,{title:E[1],body:E[2],id:E[3],hide:function(){return L(!1)}}):""]}),Object(b.jsx)(k.a,{onChange:function(e){return m(e)},pageSize:y,total:o,current:u,showQuickJumper:!0,showSizeChanger:!0,onShowSizeChange:function(e,t){return c=t,m(e),w(c),void console.log(H);var c},itemRender:function(e,t,c){return"prev"===t?Object(b.jsx)("a",{children:"Previous"}):"next"===t?Object(b.jsx)("a",{children:"Next"}):c}})]})};var M=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{}),Object(b.jsx)(_,{})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.4d964cac.chunk.js.map