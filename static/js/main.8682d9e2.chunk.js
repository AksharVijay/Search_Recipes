(this.webpackJsonprecipeapp=this.webpackJsonprecipeapp||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"Recipe_recipe__1OkXT",image:"Recipe_image__19Y3D"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),o=(a(12),a(2)),s=a.n(o),l=a(6),u=a(1),p=a(3),m=a.n(p),f=function(e){var t=e.title,a=e.calories,n=e.image;return c.a.createElement("div",{className:m.a.recipe},c.a.createElement("h3",null,t),c.a.createElement("p",null,a),c.a.createElement("img",{className:m.a.image,src:n,alt:""}))},h=(a(14),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),p=o[0],m=o[1],h=Object(n.useState)("chicken"),d=Object(u.a)(h,2),b=d[0],v=d[1];Object(n.useEffect)((function(){g()}),[b]);var g=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("6623d026","&app_key=").concat("de4d0da7af849a5076cacfd58343b71b"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.hits),r(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(p),m("")},className:"searchForm"},c.a.createElement("input",{type:"text",className:"searchInput",value:p,onChange:function(e){m(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"searchBtn"},"Search")),c.a.createElement("div",{className:"Recipe"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.8682d9e2.chunk.js.map