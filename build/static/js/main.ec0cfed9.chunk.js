(this.webpackJsonpmernolith=this.webpackJsonpmernolith||[]).push([[0],{48:function(e,t){},54:function(e,t,a){e.exports=a(92)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},69:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(59),a(11)),i=(a(60),a(61),a(106));function u(e){var t=e.type;return r.a.createElement("div",{className:"button"},r.a.createElement(i.a,null,t))}var s=a(44),m=a.n(s),f=a(45),d=a.n(f),p=a(46),E=a.n(p);var h=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(o.c,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"MERNOLITH"))),r.a.createElement("div",{className:"buttons"},r.a.createElement(o.c,{to:"/films",style:{textDecoration:"none",color:"white",marginRight:"2vw"}},r.a.createElement("h3",null,"All Films")),r.a.createElement(u,{type:r.a.createElement(E.a,null)}),r.a.createElement(u,{type:r.a.createElement(d.a,null)}),r.a.createElement(u,{type:r.a.createElement(m.a,null)})))},v=a(6),b=a.n(v),g=a(16),w=a(14),y=(a(69),a(47)),O=a.n(y).a.create({baseURL:"https://mernolithv2.herokuapp.com/"});a(87);var j=function(e){e.match;var t=e.img,a=e._id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,{to:"/directors/".concat(a)},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")"),borderRadius:"3px"},className:"director"})))};var x=function(){var e=Object(n.useState)(null),t=Object(w.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/directors");case 2:return t=e.sent,console.log(t),c(t.data),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"directors__container"},a&&r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{_id:e._id,img:e.image}))}))))},_=a(3),k=a(48),N=a.n(k);a(88);a(89),a(90);var F=function(e){var t=e.id,a=Object(n.useState)(0),c=Object(w.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/films/".concat(t));case 2:return a=e.sent,console.log(a.data),o(a.data),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",{className:"directorFilm",style:{backgroundImage:"url(".concat(l.poster,")")}}))},S=(a(91),a(49)),D=a.n(S),I=a(50),R=a.n(I);var C=function(e){var t=e.id,a=e.match,c=e.films,l=e.setUpdateFilms,o=e.updateFilms,u=Object(n.useState)(null),s=Object(w.a)(u,2),m=s[0],f=s[1];Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/films/".concat(t));case 2:return a=e.sent,f(a.data),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,o]);var d=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O.delete("/films/".concat(m._id));case 3:return a=e.sent,f(!1),p(),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){for(var e=[],t=0;t<c.length;t++)c[t]!=m._id&&e.push(c[t]);var n=O.put("/directors/".concat(a.params.id),{films:e});return l(o+1),window.history.back(),n};return r.a.createElement("div",null,m&&r.a.createElement("div",{className:"modal__container"},r.a.createElement("div",{className:"modal__image",style:{backgroundImage:"url(".concat(m.poster,")")}}),console.log(m),r.a.createElement("div",{className:"modal__words"},r.a.createElement("h3",null,m.title),r.a.createElement("p",null,m.description)),r.a.createElement("div",{className:"modal__buttons"},r.a.createElement(i.a,{onClick:function(){console.log("Ds")}},r.a.createElement(D.a,{style:{color:"white"}})),r.a.createElement(i.a,{onClick:d},r.a.createElement(R.a,{style:{color:"white"}})))))};var U=function(e){var t=e.match,a=Object(n.useState)(null),c=Object(w.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(null),u=Object(w.a)(i,2),s=u[0],m=u[1],f=Object(n.useState)(0),d=Object(w.a)(f,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/directors/".concat(t.params.id));case 2:return a=e.sent,console.log(a),o(a.data.films),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.scrollTo(0,0),function(){e.apply(this,arguments)}()}),[p]),r.a.createElement("div",{className:"directorFilm__page"},s&&r.a.createElement("div",{className:"SelectedDirectorFilm"},r.a.createElement(C,{setUpdateFilms:E,updateFilms:p,films:l,id:s,match:t})),r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",{className:"film__container"},l.length>0&&r.a.createElement(r.a.Fragment,null,l.map((function(e){return r.a.createElement("button",{style:{margin:"3px",border:"none"},onClick:function(){return m(e)}},console.log(p),r.a.createElement(F,{id:e}))}))))))};var B=function(){return r.a.createElement(o.b,{basename:"/"},r.a.createElement("div",{className:"app"},r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(_.a,{exact:!0,path:"/",render:function(e){var t=e.match;return r.a.createElement(x,{match:t})}}),r.a.createElement(_.a,{exact:!0,path:"/directors",render:function(e){var t=e.match;return r.a.createElement(x,{match:t})}}),r.a.createElement(_.a,{exact:!0,path:"/films",render:function(e){var t=e.match;return r.a.createElement(N.a,{match:t})}}),r.a.createElement(_.a,{exact:!0,path:"/directors/:id",render:function(e){var t=e.match;return r.a.createElement(U,{match:t})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.ec0cfed9.chunk.js.map