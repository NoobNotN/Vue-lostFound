(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],s=0,d=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1558e4d8":"673a97f8","chunk-2d21007d":"5722ae5e","chunk-321dd546":"a8877e1c","chunk-7e505041":"eeca2450","chunk-cfd52788":"a809de6f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1558e4d8":1,"chunk-321dd546":1,"chunk-7e505041":1,"chunk-cfd52788":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1558e4d8":"f4e58d97","chunk-2d21007d":"31d6cfe0","chunk-321dd546":"2b9dc943","chunk-7e505041":"0a746545","chunk-cfd52788":"524991be"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("ac1f"),n("5319"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-collapse-transition",[n("router-view")],1)],1)},a=[],u=(n("034f"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),l=i.exports,s=n("8c4f");r["default"].use(s["a"]);var d=[{path:"/",name:"indexPage",redirect:"/loginPage"},{path:"/loginPage",name:"loginPage",component:function(){return n.e("chunk-cfd52788").then(n.bind(null,"e4b6"))}},{path:"/createUser",name:"createUserPage",component:function(){return n.e("chunk-321dd546").then(n.bind(null,"a895"))}},{path:"/foundPage",name:"foundPage",component:function(){return n.e("chunk-7e505041").then(n.bind(null,"ac47"))},children:[{path:"/lostList",component:function(){return n.e("chunk-1558e4d8").then(n.bind(null,"fa8a"))}},{path:"/userPage",component:function(){return n.e("chunk-2d21007d").then(n.bind(null,"b5c7"))}}]}],f=new s["a"]({routes:d});f.beforeEach((function(e,t,n){if("/loginPage"===e.path||"/createUser"===e.path)n();else{var r=localStorage.getItem("token");null===r||""===r?n("/loginPage"):n()}}));var p=f,h=n("2f62");r["default"].use(h["a"]);var g=new h["a"].Store({state:{token:"index",userID:"index"},mutations:{setToken:function(e,t){e.token=t,localStorage.setItem("token",t)},delToken:function(e){e.token="",localStorage.removeItem("token")},setUserID:function(e,t){e.userID=t}},actions:{},modules:{}}),m=n("bc3a"),v=n.n(m),k=n("5c96"),b=n.n(k),y=(n("0fae"),void 0);r["default"].use(b.a),v.a.defaults.baseURL="/php",r["default"].prototype.axios=v.a,r["default"].config.productionTip=!1,v.a.interceptors.request.use((function(e){return localStorage.getItem("Token")&&(e.headers.token=localStorage.getItem("token")),e}),(function(e){return Promise.reject(e)})),v.a.interceptors.response.use((function(e){return e}),(function(e){if(e.response)switch(e.response.status){case 401:y.$store.commit("delToken"),p.replace({path:"/loginPage",query:{redirect:p.currentRoute.fullPath}})}return Promise.reject(e.response.data)})),new r["default"]({router:p,store:g,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.b46c5b2d.js.map