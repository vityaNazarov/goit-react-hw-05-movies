(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{583:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(1087),a=r(7689),s="movies-search_link__Tcyxi",u=r(184),o=function(e){var t=e.movies,r=(0,a.TH)(),o=t.map((function(e){var t=e.id,a=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{className:s,to:"/movies/".concat(t),state:{from:r},children:a})},t)}));return(0,u.jsx)("ul",{children:o})};o.defaultProps={movies:[]};var c=o},6050:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(5861),a=r(9439),s=r(4687),u=r.n(s),o=r(2791),c=r(1087),i=r(2089),p=r(7596),f=r(2007),l=r.n(f),m="search-form-movies_searchForm__bI6yD",v="search-form-movies_input__nx-By",h="search-form-movies_button__FU9gf",d=r(184),g=function(e){var t=e.onSubmit,r=(0,o.useState)(""),n=(0,a.Z)(r,2),s=n[0],u=n[1];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(),""!==s.trim()?(t(s),u("")):p.Am.info("Please enter a search request!",{position:p.Am.POSITION.TOP_LEFT,theme:"colored"})},children:[(0,d.jsx)("input",{name:"search",className:v,type:"text",value:s,onChange:function(e){var t=e.target;u(t.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,d.jsx)("button",{type:"submit",className:h,children:"Search"})]})})};g.protoTypes={onSubmit:l().func.isRequired};var y=g,x=r(583),_=r(3997),b="movies-page_container__WI70c",S=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],f=(0,o.useState)(!1),l=(0,a.Z)(f,2),m=l[0],v=l[1],h=(0,o.useState)(null),g=(0,a.Z)(h,2),S=g[0],w=g[1],T=(0,c.lr)(),k=(0,a.Z)(T,2),O=k[0],j=k[1],P=O.get("query");(0,o.useEffect)((function(){if(P){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,i.lC)(P);case 4:t=e.sent,(r=t.results).length||(v(!1),p.Am.error("Sorry, there are no movies matching your search. Please try again.",{position:p.Am.POSITION.TOP_RIGHT,theme:"colored"})),s(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),w(e.t0.messege);case 13:return e.prev=13,v(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[P,v,s,w]);return(0,d.jsxs)("div",{className:b,children:[(0,d.jsx)(y,{onSubmit:function(e){""!==e&&(j({query:e}),s([]))}}),0!==r.length&&(0,d.jsx)(x.Z,{movies:r}),m&&(0,d.jsx)(_.a,{}),S&&(0,d.jsx)("p",{children:"...Posts load failed"})]})}},2089:function(e,t,r){"use strict";r.d(t,{Di:function(){return i},J2:function(){return p},XT:function(){return o},lC:function(){return f},wn:function(){return c}});var n=r(5861),a=r(4687),s=r.n(a),u=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9fae0fdf266213c68361ca578a95b948"}}),o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,u.get("/trending/movie/day",{params:{page:t,language:"en-US"}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t),{params:{language:"en-US"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"),{params:{language:"en-US"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,u.get("/movie/".concat(t,"/reviews"),{params:{language:"en-US",page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,u.get("/search/movie",{params:{query:t,language:"en-US",page:r,include_adult:!1}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,r){"use strict";var n=r(9047);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,s,u){if(u!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=50.8c722ea3.chunk.js.map