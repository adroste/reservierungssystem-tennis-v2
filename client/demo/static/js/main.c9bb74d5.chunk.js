(this["webpackJsonpreservierungssystem-tennis"]=this["webpackJsonpreservierungssystem-tennis"]||[]).push([[6],{119:function(e,t,n){e.exports={wrapper:"Ball_wrapper__2ZIuN",ballWrapper:"Ball_ballWrapper__3raqu",large:"Ball_large__2_bXH",preloader:"Ball_preloader__38zDy",visible:"Ball_visible__1j9MH",centered:"Ball_centered__2X2XD",ball:"Ball_ball__3Ysq4",spin:"Ball_spin__3tWSR",jump:"Ball_jump__3yJc4",rotate:"Ball_rotate__uVyFJ"}},122:function(e,t,n){e.exports={menu:"MainMenu_menu__1Ez4Z",horizontal:"MainMenu_horizontal__jNPXA",stretch:"MainMenu_stretch__3BpF9",menuButton:"MainMenu_menuButton__3Ujw0"}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(2),c=n(249),a=n(250),i=n(58),o=n(248);function u(e){var t=e.className,n=e.loading,u=e.error,s=e.success,l=e.text;return Object(r.jsxs)(o.b,{className:t,children:[n&&Object(r.jsx)(i.a,{visible:!0,spin:!0}),u&&Object(r.jsx)(c.a,{style:{color:"#ff4d4f"}}),s&&Object(r.jsx)(a.a,{style:{color:"#52c41a"}}),Object(r.jsx)("span",{children:l})]})}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2),c=n(247),a=n(175);function i(){return Object(r.jsx)(c.a,{style:{margin:"0 auto"},status:"warning",title:"Etwas ist schiefgelaufen.",extra:Object(r.jsx)(a.a,{type:"primary",onClick:function(){return window.location.reload()},children:"Erneut versuchen"})})}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var r={BASE_DATA:120,RESERVATIONS:30},c=r;function a(){Object.assign(c,r)}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(e,t){Object(r.useEffect)((function(){var n=function(){document.hidden||e()};document.addEventListener("visibilitychange",n);var r=setInterval(n,1e3*t);return function(){document.removeEventListener("visibilitychange",n),clearInterval(r)}}),[e,t])}},183:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var r=n(2);n(182),n(183),n(184),n(185),n(186),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(0),a=n(57),i=n(28),o=n(58),u=n(173),s=n(175);function l(){return Object(c.useEffect)((function(){if(!localStorage.getItem("notice-closed")){var e=function(){u.a.close("cookie-notice"),localStorage.setItem("notice-closed","true")};u.a.info({key:"cookie-notice",message:"Cookie Hinweis",duration:0,placement:"bottomRight",description:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:"Funktionsbedingt wird eine zu Cookies alternative Technologie verwendet."}),Object(r.jsx)("div",{children:"Es werden keine 3rd-Party oder Tracking Cookies gesetzt."})]}),onClose:e,btn:Object(r.jsx)(s.a,{type:"primary",size:"middle",onClick:e,children:"OK"}),closeIcon:" "})}}),[]),null}var j=n(125),d=n(55),b=n(37),O=n.n(b);function f(e){var t=e.noLinks,n=Object(c.useContext)(d.b).config.orgName;return Object(r.jsxs)(r.Fragment,{children:[!t&&Object(r.jsx)("p",{children:Object(r.jsx)(a.b,{to:"/legalnotice-privacy",children:"Impressum / Datenschutz"})}),Object(r.jsxs)("p",{children:["\xa9".concat(O()().format("YYYY")," ").concat(n," - v").concat("2.0.0-alpha.2"," - entwickelt von "),t?Object(r.jsx)("span",{children:"Alexander\xa0Droste"}):Object(r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/alexdroste/reservierungssystem-tennis-v2",children:"Alexander\xa0Droste"})]})]})}var h=n(252),m=n(34),v=n(253),x=n(254),p=n(255),g=n(256),y=n(257),_=n(258),k=n(259),C=n(251),I=n(124),P=n(54),N=n(95),S=n.n(N),z=n(122),w=n.n(z),T=S.a.bind(w.a);function B(e){var t=e.horizontal,n=void 0!==t&&t,a=e.onClick,o=Object(c.useContext)(P.b),u=o.autoLoginState,l=o.user,j=Object(i.h)().pathname,d=Object(i.g)(),b=Object(c.useCallback)((function(e){var t=e.key;a&&a(t),j!==t&&d.push(t)}),[d,j,a]),O=Object(c.useCallback)((function(){b({key:"/login"})}),[b]),f=Object(c.useCallback)((function(){b({key:"/register"})}),[b]),h=Object(c.useCallback)((function(){b({key:"/logout"})}),[b]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(C.a,{className:T({menu:!0,horizontal:n}),mode:n?"horizontal":"inline",theme:"light",selectedKeys:[j],onClick:b,children:[Object(r.jsx)(C.a.Item,{icon:Object(r.jsx)(p.a,{}),children:"Reservierungskalender"},"/"),l&&Object(r.jsx)(C.a.Item,{icon:Object(r.jsx)(g.a,{}),children:"Meine Reservierungen"},"/my-reservations"),Object(r.jsx)(C.a.Item,{icon:Object(r.jsx)(y.a,{}),children:"Hinweise"},"/info"),(null===l||void 0===l?void 0:l.admin)&&Object(r.jsxs)(C.a.SubMenu,{title:"Verwaltung",icon:Object(r.jsx)(_.a,{}),children:[Object(r.jsx)(C.a.Item,{children:"Allgemein"},"/admin/general"),Object(r.jsx)(C.a.Item,{children:"Statistiken"},"/admin/stats"),Object(r.jsx)(C.a.Item,{children:"Nutzerverwaltung"},"/admin/users"),Object(r.jsx)(C.a.Item,{children:"Textvorlagen"},"/admin/templates")]},"/admin"),Object(r.jsx)("span",{className:w.a.stretch},"stretch"),l&&Object(r.jsx)(C.a.Item,{icon:Object(r.jsx)(k.a,{}),children:"Mein Benutzerkonto"},"/profile")]}),u.loading&&Object(r.jsx)(I.a,{className:T({menuButton:!0,horizontal:n}),loading:!0,text:"Anmeldung..."}),l&&Object(r.jsx)(s.a,{className:T({menuButton:!0,horizontal:n}),onClick:h,children:"Abmelden"}),!l&&!u.loading&&Object(r.jsx)(s.a,{className:T({menuButton:!0,horizontal:n}),onClick:O,children:"Anmelden"}),!l&&!u.loading&&Object(r.jsx)(s.a,{className:T({menuButton:!0,horizontal:n}),type:"primary",onClick:f,children:"Kostenlos Registrieren"})]})}var A=n(260),E=n(62),F=n.n(E);function M(){var e=Object(c.useContext)(d.b).config.orgName,t=Object(c.useState)(!1),n=Object(m.a)(t,2),a=n[0],i=n[1],o=Object(c.useCallback)((function(){return i(!0)}),[]),u=Object(c.useCallback)((function(){return i(!1)}),[]);return Object(r.jsxs)(h.a.Header,{className:F.a.header,children:[Object(r.jsxs)("div",{className:F.a.title,children:[Object(r.jsx)("div",{className:F.a.orgName,children:e}),Object(r.jsx)(v.a.Text,{type:"secondary",children:"Reservierungssystem"})]}),Object(r.jsx)("div",{className:F.a.horizontalMenuWrapper,children:Object(r.jsx)(B,{horizontal:!0})}),Object(r.jsxs)("div",{className:F.a.drawerMenuWrapper,children:[Object(r.jsx)(s.a,{type:"text",icon:Object(r.jsx)(A.a,{}),onClick:o}),Object(r.jsx)(x.a,{title:"".concat(e,"\nReservierungssystem"),visible:a,width:300,className:F.a.drawer,onClose:u,children:Object(r.jsx)(B,{onClick:u})})]})]})}var R=n(18),L=n(159);function q(e){var t=e.admin,n=e.children,a=Object(L.a)(e,["admin","children"]),o=Object(c.useContext)(P.b).user;return Object(r.jsx)(i.b,Object(R.a)(Object(R.a)({},a),{},{render:function(e){var c=e.location;return o?t&&!o.admin?Object(r.jsx)(i.a,{to:"/"}):n:Object(r.jsx)(i.a,{to:{pathname:"/login",state:{from:c}}})}}))}var D=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,545)).then((function(e){return{default:e.CalendarPage}}))})),W=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(16)]).then(n.bind(null,541)).then((function(e){return{default:e.GeneralSettingsPage}}))})),U=Object(c.lazy)((function(){return n.e(24).then(n.bind(null,531)).then((function(e){return{default:e.InfoPage}}))})),H=Object(c.lazy)((function(){return n.e(25).then(n.bind(null,532)).then((function(e){return{default:e.LegalPrivacyPage}}))})),J=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,533)).then((function(e){return{default:e.LoginPage}}))})),Y=Object(c.lazy)((function(){return n.e(26).then(n.bind(null,534)).then((function(e){return{default:e.LogoutPage}}))})),X=Object(c.lazy)((function(){return n.e(27).then(n.bind(null,535)).then((function(e){return{default:e.VerifyMailPage}}))})),K=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,536)).then((function(e){return{default:e.MyAccountPage}}))})),V=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12)]).then(n.bind(null,551)).then((function(e){return{default:e.MyReservationsPage}}))})),G=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,537)).then((function(e){return{default:e.RegisterPage}}))})),Z=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(5),n.e(10),n.e(22)]).then(n.bind(null,538)).then((function(e){return{default:e.StatsPage}}))})),$=Object(c.lazy)((function(){return Promise.all([n.e(5),n.e(15),n.e(20)]).then(n.bind(null,546)).then((function(e){return{default:e.EditTemplatesPage}}))})),Q=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(13),n.e(23)]).then(n.bind(null,539)).then((function(e){return{default:e.UserManagementPage}}))}));function ee(){return Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(o.a,{visible:!0,large:!0,centered:!0,spin:!0}),children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{exact:!0,path:"/",children:Object(r.jsx)(D,{})}),Object(r.jsx)(i.b,{exact:!0,path:"/info",children:Object(r.jsx)(U,{})}),Object(r.jsx)(i.b,{exact:!0,path:"/legalnotice-privacy",children:Object(r.jsx)(H,{})}),Object(r.jsx)(i.b,{exact:!0,path:"/logout",children:Object(r.jsx)(Y,{})}),Object(r.jsx)(i.b,{exact:!0,path:"/login",children:Object(r.jsx)(J,{})}),Object(r.jsx)(i.b,{exact:!0,path:"/register",children:Object(r.jsx)(G,{})}),Object(r.jsx)(q,{admin:!0,exact:!0,path:"/admin/general",children:Object(r.jsx)(W,{})}),Object(r.jsx)(q,{admin:!0,exact:!0,path:"/admin/stats",children:Object(r.jsx)(Z,{})}),Object(r.jsx)(q,{admin:!0,exact:!0,path:"/admin/users",children:Object(r.jsx)(Q,{})}),Object(r.jsx)(q,{admin:!0,exact:!0,path:"/admin/templates",children:Object(r.jsx)($,{})}),Object(r.jsx)(q,{exact:!0,path:"/my-reservations",children:Object(r.jsx)(V,{})}),Object(r.jsx)(q,{exact:!0,path:"/profile",children:Object(r.jsx)(K,{})}),Object(r.jsx)(q,{path:"/verify-mail/:verifyToken",children:Object(r.jsx)(X,{})}),Object(r.jsx)(i.b,{path:"*",children:Object(r.jsx)(i.a,{to:"/"})})]})})}var te=n(93),ne=n.n(te),re=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(14),n.e(11)]).then(n.bind(null,547)).then((function(e){return{default:e.KioskPage}}))})),ce=Object(c.lazy)((function(){return n.e(28).then(n.bind(null,334)).then((function(e){return{default:e.DemoControls}}))}));var ae=function(){var e=Object(c.useContext)(d.b),t=e.config;return e.state.error?Object(r.jsx)(j.a,{}):t?Object(r.jsx)(a.a,{basename:"/tennis-court-reservation-system-v2/client/demo",children:Object(r.jsx)(h.a,{children:Object(r.jsxs)(c.Suspense,{fallback:Object(r.jsx)(o.a,{visible:!0,preloader:!0,spin:!0}),children:[Object(r.jsxs)(i.d,{children:[Object(r.jsxs)(i.b,{exact:!0,path:"/kiosk",children:[Object(r.jsx)(h.a.Content,{className:ne.a.content,children:Object(r.jsx)(re,{})}),Object(r.jsx)(h.a.Footer,{className:ne.a.footer,children:Object(r.jsx)(f,{noLinks:!0})})]}),Object(r.jsxs)(i.b,{path:"*",children:[Object(r.jsx)(M,{}),Object(r.jsx)(h.a.Content,{className:ne.a.content,children:Object(r.jsx)(ee,{})}),Object(r.jsx)(h.a.Footer,{className:ne.a.footer,children:Object(r.jsx)(f,{})}),Object(r.jsx)(l,{})]})]}),Object(r.jsx)(ce,{})]})})}):Object(r.jsx)(o.a,{visible:!0,preloader:!0,spin:!0})},ie=n(26),oe=n(16),ue=n.n(oe),se=n(167),le=n.n(se),je=n(168),de=n.n(je),be=n(169),Oe=n.n(be),fe=n(171),he=n.n(fe),me=n(170),ve=n.n(me),xe=n(153),pe=n.n(xe),ge=n(154),ye=n.n(ge);O.a.locale("de"),O.a.extend(pe.a),O.a.extend(ye.a),O.a.extend(ve.a),O.a.extend(le.a),O.a.extend(de.a),O.a.extend(Oe.a),n.e(21).then(n.bind(null,549)).then((function(e){e.patchFetch(),ue.a.render(Object(r.jsx)(ie.b,{locale:he.a,children:Object(r.jsx)(d.a,{children:Object(r.jsx)(P.a,{children:Object(r.jsx)(ae,{})})})}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j}));var r=n(34),c=n(2),a=n(0),i=n.n(a),o=n(78),u=n(79),s="usertoken",l=i.a.createContext();function j(e){var t=e.children,n=Object(a.useState)(null),i=Object(r.a)(n,2),j=i[0],d=i[1],b=Object(a.useRef)(!1),O=Object(a.useCallback)((function(e){d((function(t){var n=e(t);return(null===n||void 0===n?void 0:n.token)&&(b.current?localStorage.setItem(s,n.token):sessionStorage.setItem(s,n.token)),n}))}),[]),f=Object(u.a)(o.j,O),h=Object(r.a)(f,2),m=h[0],v=h[1],x=Object(u.a)(o.k),p=Object(r.a)(x,2)[1];Object(a.useEffect)((function(){var e=sessionStorage.getItem(s)||localStorage.getItem(s);e&&!j&&v(null,{type:"token",token:e})}),[v,j]),Object(a.useEffect)((function(){m.error&&(sessionStorage.removeItem(s),localStorage.removeItem(s))}),[m]);var g=Object(a.useCallback)((function(e){b.current=e}),[]),y=Object(a.useCallback)((function(){p(null,{userId:null===j||void 0===j?void 0:j.userId}),d(null),sessionStorage.removeItem(s),localStorage.removeItem(s)}),[p,null===j||void 0===j?void 0:j.userId]),_=Object(a.useMemo)((function(){return{autoLoginState:m,logout:y,setRememberLogin:g,setUser:O,user:j}}),[m,y,g,O,j]);return Object(c.jsx)(l.Provider,{value:_,children:t})}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return d}));var r=n(34),c=n(2),a=n(0),i=n.n(a),o=n(133),u=n(78),s=n(79),l=n(135),j=i.a.createContext();function d(e){var t=e.children,n=Object(a.useState)(),i=Object(r.a)(n,2),d=i[0],b=i[1],O=Object(a.useState)(),f=Object(r.a)(O,2),h=f[0],m=f[1],v=Object(a.useState)(),x=Object(r.a)(v,2),p=x[0],g=x[1],y=Object(a.useCallback)((function(e){var t=e(null),n=t.config,r=t.courts,c=t.templates;b(n),g(c),m(r)}),[]),_=Object(s.a)(u.c,y,!0),k=Object(r.a)(_,2),C=k[0],I=k[1];Object(l.a)(I,o.a.BASE_DATA);var P=Object(a.useMemo)((function(){return{config:d,courts:h,templates:p,setConfig:b,setCourts:m,setTemplates:g,state:C,reload:I}}),[d,h,p,C,I]);return Object(c.jsx)(j.Provider,{value:P,children:t})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),c=(n(0),n(95)),a=n.n(c),i=n(119),o=n.n(i),u=a.a.bind(o.a);function s(e){var t=e.centered,n=e.large,c=e.preloader,a=e.spin,i=e.visible;return Object(r.jsx)("div",{className:u({centered:t,preloader:c,spin:a,visible:i,wrapper:!0}),children:Object(r.jsx)("div",{className:u({ballWrapper:!0,large:n}),children:Object(r.jsx)("div",{className:o.a.ball})})})}},62:function(e,t,n){e.exports={header:"NavBar_header__3EbUr",title:"NavBar_title__2Ydj-",orgName:"NavBar_orgName__3TDkX",horizontalMenuWrapper:"NavBar_horizontalMenuWrapper__pOr71",drawerMenuWrapper:"NavBar_drawerMenuWrapper__15WnD",drawer:"NavBar_drawer__2Jr7L"}},78:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"p",(function(){return j})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return b})),n.d(t,"d",(function(){return O})),n.d(t,"q",(function(){return f})),n.d(t,"l",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"m",(function(){return v})),n.d(t,"h",(function(){return x})),n.d(t,"a",(function(){return p})),n.d(t,"n",(function(){return g})),n.d(t,"r",(function(){return y})),n.d(t,"f",(function(){return _})),n.d(t,"i",(function(){return k})),n.d(t,"b",(function(){return C})),n.d(t,"o",(function(){return I}));var r=n(80),c=n(86),a=n(18),i=n(37),o=n.n(i),u="/api",s={url:"".concat(u,"/base-data"),setFunc:function(e){var t,n=e.res;return Object(a.a)(Object(a.a)({},n),{},{courts:null===(t=n.courts)||void 0===t?void 0:t.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{disabledFromTil:null===(t=e.disabledFromTil)||void 0===t?void 0:t.map((function(e){return o()(e)}))})}))})}},l={url:"".concat(u,"/config"),method:"PATCH",setFunc:function(e){var t=e.cur,n=e.req;return Object(a.a)(Object(a.a)({},t),n)}},j={url:"".concat(u,"/courts"),method:"PUT",setFunc:function(e){return e.req}},d={url:"".concat(u,"/login"),method:"POST"},b={url:"".concat(u,"/logout"),method:"POST"},O={url:"".concat(u,"/mail-templates")},f={url:"".concat(u,"/mail-template/:id"),method:"PUT",setFunc:function(e){var t=e.cur,n=e.req;return Object(a.a)(Object(a.a)({},t),{},Object(c.a)({},n.id,n))}},h={url:"".concat(u,"/register"),method:"POST"},m={url:"".concat(u,"/reservations"),method:"POST",setFunc:function(e){return e.res.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{date:o()(e.date)})}))}},v={url:"".concat(u,"/reservation-group"),method:"POST",setFunc:function(e){var t=e.cur,n=e.res;return[].concat(Object(r.a)(t),Object(r.a)(n.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{date:o()(e.date)})}))))}},x={url:"".concat(u,"/reservation-group/:groupId"),method:"PATCH",setFunc:function(e){var t=e.cur,n=e.req,c=e.params.path.groupId,i=t.find((function(e){return e.groupId===c}));return[].concat(Object(r.a)(t.filter((function(e){return e.groupId!==c}))),Object(r.a)(n.dates.map((function(e){return Object(a.a)(Object(a.a)({},i),{},{date:e,customName:n.customName||i.customName})}))))}},p={url:"".concat(u,"/reservation-group/:groupId"),method:"DELETE",setFunc:function(e){var t=e.cur,n=e.params;return t.filter((function(e){return e.groupId!==n.path.groupId}))}},g={url:"".concat(u,"/send-verify-mail"),method:"POST"},y={url:"".concat(u,"/template/:id"),method:"PUT",setFunc:function(e){var t=e.cur,n=e.req;return Object(a.a)(Object(a.a)({},t),{},Object(c.a)({},n.id,n))}},_={url:"".concat(u,"/users"),setFunc:function(e){return e.res.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{lastActivity:e.lastActivity&&o()(e.lastActivity)})}))}},k={url:"".concat(u,"/user/:userId"),method:"PATCH",setFunc:function(e){var t=e.cur,n=e.req;return Array.isArray(t)?t.map((function(e){return e.userId===n.userId?Object(a.a)(Object(a.a)(Object(a.a)({},e),n),{},{verified:(!n.mail||e.mail===n.mail)&&e.verified}):e})):Object(a.a)(Object(a.a)(Object(a.a)({},t),n),{},{verified:(!n.mail||t.mail===n.mail)&&t.verified})}},C={url:"".concat(u,"/user/:userId"),method:"DELETE",setFunc:function(e){var t=e.cur,n=e.params;return t.filter((function(e){return e.userId!==n.path.userId}))}},I={url:"".concat(u,"/verify-mail"),method:"POST",setFunc:function(e){var t=e.cur;return Object(a.a)(Object(a.a)({},t),{},{verified:!0})}}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(117),c=n.n(r),a=n(150),i=n(34),o=n(0),u=n(54),s=function(e){return e.res};function l(e,t){var n=e.url,r=e.method,l=void 0===r?"GET":r,j=e.setFunc,d=void 0===j?s:j,b=arguments.length>2&&void 0!==arguments[2]&&arguments[2],O=Object(o.useContext)(u.b)||{},f=O.user,h=O.logout,m=null===f||void 0===f?void 0:f.token,v=Object(o.useState)(!1),x=Object(i.a)(v,2),p=x[0],g=x[1],y=Object(o.useState)(null),_=Object(i.a)(y,2),k=_[0],C=_[1],I=Object(o.useState)(!!b),P=Object(i.a)(I,2),N=P[0],S=P[1],z=Object(o.useState)(null),w=Object(i.a)(z,2),T=w[0],B=w[1],A=Object(o.useRef)(null),E=Object(o.useCallback)((function(e,r,i){A.current&&A.current.cancel();var o=!1,u=function(){var u=Object(a.a)(c.a.mark((function a(){var u,s,j,b,O,f;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(g(!1),C(null),S(!0),u=!1,c.prev=4,s=Object.keys((null===e||void 0===e?void 0:e.path)||{}).reduce((function(t,n){return t.replace(":".concat(n),e.path[n])}),n),(j=Object.keys((null===e||void 0===e?void 0:e.query)||{}).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e.query[t]))})).join("&"))&&(s+="?".concat(j)),b={},m&&(b.Authorization="Bearer ".concat(m)),r&&(b["Content-Type"]="application/json"),!o){c.next=13;break}return c.abrupt("return");case 13:return c.next=15,fetch(s,{method:l,headers:b,body:r?JSON.stringify(r):void 0});case 15:return O=c.sent,o||C(O.status),c.next=19,O.json();case 19:f=c.sent,O.ok?(t&&t((function(t){return d({cur:t,params:e,req:r,res:f})})),o||(g(!0),i&&i())):(o||B(f),u=401===O.status),c.next=26;break;case 23:c.prev=23,c.t0=c.catch(4),o||B(c.t0);case 26:return c.prev=26,o||S(!1),u&&(null===h||void 0===h||h()),c.finish(26);case 30:case"end":return c.stop()}}),a,null,[[4,23,26,30]])})));return function(){return u.apply(this,arguments)}}()();return u.cancel=function(){return o=!0},A.current=u,u.cancel}),[h,l,t,d,n,m]);return Object(o.useEffect)((function(){b&&E(null===b||void 0===b?void 0:b.reqParams,null===b||void 0===b?void 0:b.reqData)}),[b,E]),Object(o.useEffect)((function(){return function(){var e,t;return null===(e=A.current)||void 0===e||null===(t=e.cancel)||void 0===t?void 0:t.call(e)}}),[]),Object(o.useMemo)((function(){return[{success:p,loading:N,error:T,status:k},E]}),[p,N,T,k,E])}},93:function(e,t,n){e.exports={content:"App_content__3La4L",footer:"App_footer__29Fsv"}}},[[246,7,8]]]);
//# sourceMappingURL=main.c9bb74d5.chunk.js.map