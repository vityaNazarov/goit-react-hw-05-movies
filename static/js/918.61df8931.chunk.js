"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[918],{7918:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var t=n(5861),a=n(9439),u=n(4687),c=n.n(u),s=n(2791),i=n(7689),o=n(2089),p=n(3997),f="cast-page_descriptionCast__WuKXp",l=n(184),d=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),n=r[0],u=r[1],d=(0,s.useState)(!1),v=(0,a.Z)(d,2),h=v[0],m=v[1],g=(0,s.useState)(null),x=(0,a.Z)(g,2),w=x[0],k=x[1],b=(0,i.UO)().id;(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,o.Di)(b);case 4:r=e.sent,u(r.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[b,m,k]);var _=n.map((function(e){var r=e.id,n=e.profile_path,t=e.original_name,a=e.name,u=e.character;return(0,l.jsxs)("li",{className:f,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+n,alt:t,width:150}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:a}),(0,l.jsxs)("p",{children:["Character: ",u]})]})]},r)}));return(0,l.jsxs)("div",{children:[(0,l.jsx)("ul",{children:_}),h&&(0,l.jsx)(p.a,{}),w&&(0,l.jsx)("p",{children:"...Posts load failed"})]})}},2089:function(e,r,n){n.d(r,{Di:function(){return o},J2:function(){return p},XT:function(){return s},lC:function(){return f},wn:function(){return i}});var t=n(5861),a=n(4687),u=n.n(a),c=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9fae0fdf266213c68361ca578a95b948"}}),s=function(){var e=(0,t.Z)(u().mark((function e(){var r,n,t,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,c.get("/trending/movie/day",{params:{page:r,language:"en-US"}});case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r),{params:{language:"en-US"}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"),{params:{language:"en-US"}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t,a,s=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,c.get("/movie/".concat(r,"/reviews"),{params:{language:"en-US",page:n}});case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t,a,s=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,c.get("/search/movie",{params:{query:r,language:"en-US",page:n,include_adult:!1}});case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=918.61df8931.chunk.js.map