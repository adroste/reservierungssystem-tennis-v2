(this["webpackJsonpreservierungssystem-tennis"]=this["webpackJsonpreservierungssystem-tennis"]||[]).push([[6],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return s}));var r=n(32),c=n(164);function a(e,t,n){if(!e)return null;var r,a=Object(c.a)(e);try{for(a.s();!(r=a.n()).done;){var i=r.value;if(t.isBetween(i.from,i.to,"hour","[)")&&n===i.courtId)return i}}catch(o){a.e(o)}finally{a.f()}return null}function i(e,t){return e.from.isBefore(t.to,"hour")&&e.to.isAfter(t.from,"hour")&&e.courtId===t.courtId}function o(e,t){var n;return null===(n=e.find((function(e){return e.courtId===t})))||void 0===n?void 0:n.name}function u(e){for(var t={},n=("?"===e[0]?e.substr(1):e).split("&"),r=0;r<n.length;r++){var c=n[r].split("=");t[decodeURIComponent(c[0])]=decodeURIComponent(c[1]||"")}return t}function s(e){for(var t=Object(r.a)(e,2),n=t[0],c=t[1],a=[],i=parseInt(n);i<parseInt(c);++i)a.push(i);return a}},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=Object.freeze({NORMAL:1,DISABLE:2})},128:function(e,t,n){e.exports={wrapper:"Ball_wrapper__2ZIuN",ballWrapper:"Ball_ballWrapper__3raqu",large:"Ball_large__2_bXH",preloader:"Ball_preloader__38zDy",visible:"Ball_visible__1j9MH",centered:"Ball_centered__2X2XD",ball:"Ball_ball__3Ysq4",spin:"Ball_spin__3tWSR",jump:"Ball_jump__3yJc4",rotate:"Ball_rotate__uVyFJ"}},131:function(e,t,n){e.exports={menu:"MainMenu_menu__1Ez4Z",horizontal:"MainMenu_horizontal__jNPXA",stretch:"MainMenu_stretch__3BpF9",menuButton:"MainMenu_menuButton__3Ujw0"}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),c=n(253),a=n(254),i=n(64),o=n(252);function u(e){var t=e.className,n=e.loading,u=e.error,s=e.success,l=e.text;return Object(r.jsxs)(o.b,{className:t,children:[n&&Object(r.jsx)(i.a,{visible:!0,spin:!0}),u&&Object(r.jsx)(c.a,{style:{color:"#ff4d4f"}}),s&&Object(r.jsx)(a.a,{style:{color:"#52c41a"}}),Object(r.jsx)("span",{children:l})]})}},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(3),c=n(251),a=n(72);function i(){return Object(r.jsx)(c.a,{style:{margin:"0 auto"},status:"warning",title:"Etwas ist schiefgelaufen.",extra:Object(r.jsx)(a.a,{type:"primary",onClick:function(){return window.location.reload()},children:"Erneut versuchen"})})}},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var r={BASE_DATA:120,RESERVATIONS:30},c=r;function a(){Object.assign(c,r)}},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(e,t){Object(r.useEffect)((function(){var n=function(){document.hidden||e()};document.addEventListener("visibilitychange",n);var r=setInterval(n,1e3*t);return function(){document.removeEventListener("visibilitychange",n),clearInterval(r)}}),[e,t])}},187:function(e,t,n){},250:function(e,t,n){"use strict";n.r(t);var r=n(3);n(186),n(187),n(188),n(189),n(190),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(258),a=n(256),i=n(0),o=n(62),u=n(29),s=n(64),l=n(178),j=n(72);function d(){return Object(i.useEffect)((function(){if(!localStorage.getItem("notice-closed")){var e=function(){l.a.close("cookie-notice"),localStorage.setItem("notice-closed","true")};l.a.info({key:"cookie-notice",message:"Cookie Hinweis",duration:0,placement:"bottomRight",description:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:"Funktionsbedingt wird eine zu Cookies alternative Technologie verwendet."}),Object(r.jsx)("div",{children:"Es werden keine 3rd-Party oder Tracking Cookies gesetzt."})]}),onClose:e,btn:Object(r.jsx)(j.a,{type:"primary",size:"middle",onClick:e,children:"OK"}),closeIcon:" "})}}),[]),null}var b=n(134),f=n(58),O=n(34),m=n.n(O);function h(e){var t=e.noLinks,n=Object(i.useContext)(f.b).config.orgName;return Object(r.jsxs)(r.Fragment,{children:[!t&&Object(r.jsx)("p",{children:Object(r.jsx)(o.b,{to:"/legalnotice-privacy",children:"Impressum / Datenschutz"})}),Object(r.jsxs)("p",{children:["\xa9".concat(m()().format("YYYY")," ").concat(n," - v").concat("2.0.0-alpha.4"," - entwickelt von "),t?Object(r.jsx)("span",{children:"Alexander\xa0Droste"}):Object(r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/alexdroste/reservierungssystem-tennis-v2",children:"Alexander\xa0Droste"})]})]})}var v=n(32),x=n(257),p=n(259),g=n(260),y=n(261),_=n(262),k=n(263),I=n(264),C=n(255),P=n(133),S=n(57),z=n(100),N=n.n(z),w=n(131),B=n.n(w),A=N.a.bind(B.a);function E(e){var t=e.horizontal,n=void 0!==t&&t,c=e.onClick,a=Object(i.useContext)(S.b),o=a.autoLoginState,s=a.user,l=Object(u.h)().pathname,d=Object(u.g)(),b=Object(i.useCallback)((function(e){var t=e.key;c&&c(t),l!==t&&d.push(t)}),[d,l,c]),f=Object(i.useCallback)((function(){b({key:"/login"})}),[b]),O=Object(i.useCallback)((function(){b({key:"/register"})}),[b]),m=Object(i.useCallback)((function(){b({key:"/logout"})}),[b]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(C.a,{className:A({menu:!0,horizontal:n}),mode:n?"horizontal":"inline",theme:"light",selectedKeys:[l],onClick:b,children:[Object(r.jsx)(C.a.Item,{icon:Object(r.jsx)(g.a,{}),children:"Reservierungskalender"},"/"),s&&Object(r.jsx)(C.a.Item,{icon:Object(r.jsx)(y.a,{}),children:"Meine Reservierungen"},"/my-reservations"),Object(r.jsx)(C.a.Item,{icon:Object(r.jsx)(_.a,{}),children:"Hinweise"},"/info"),(null===s||void 0===s?void 0:s.admin)&&Object(r.jsxs)(C.a.SubMenu,{title:"Verwaltung",icon:Object(r.jsx)(k.a,{}),children:[Object(r.jsx)(C.a.Item,{children:"Allgemein"},"/admin/general"),Object(r.jsx)(C.a.Item,{children:"Statistiken"},"/admin/stats"),Object(r.jsx)(C.a.Item,{children:"Nutzerverwaltung"},"/admin/users"),Object(r.jsx)(C.a.Item,{children:"Textvorlagen"},"/admin/templates")]},"/admin"),Object(r.jsx)("span",{className:B.a.stretch},"stretch"),s&&Object(r.jsx)(C.a.Item,{icon:Object(r.jsx)(I.a,{}),children:"Mein Benutzerkonto"},"/profile")]}),o.loading&&Object(r.jsx)(P.a,{className:A({menuButton:!0,horizontal:n}),loading:!0,text:"Anmeldung..."}),s&&Object(r.jsx)(j.a,{className:A({menuButton:!0,horizontal:n}),onClick:m,children:"Abmelden"}),!s&&!o.loading&&Object(r.jsx)(j.a,{className:A({menuButton:!0,horizontal:n}),onClick:f,children:"Anmelden"}),!s&&!o.loading&&Object(r.jsx)(j.a,{className:A({menuButton:!0,horizontal:n}),type:"primary",onClick:O,children:"Kostenlos Registrieren"})]})}var T=n(265),M=n(68),F=n.n(M);function R(){var e=Object(i.useContext)(f.b).config.orgName,t=Object(i.useState)(!1),n=Object(v.a)(t,2),c=n[0],o=n[1],u=Object(i.useCallback)((function(){return o(!0)}),[]),s=Object(i.useCallback)((function(){return o(!1)}),[]);return Object(r.jsxs)(a.a.Header,{className:F.a.header,children:[Object(r.jsxs)("div",{className:F.a.title,children:[Object(r.jsx)("div",{className:F.a.orgName,children:e}),Object(r.jsx)(x.a.Text,{type:"secondary",children:"Reservierungssystem"})]}),Object(r.jsx)("div",{className:F.a.horizontalMenuWrapper,children:Object(r.jsx)(E,{horizontal:!0})}),Object(r.jsxs)("div",{className:F.a.drawerMenuWrapper,children:[Object(r.jsx)(j.a,{type:"text",icon:Object(r.jsx)(T.a,{}),onClick:u}),Object(r.jsx)(p.a,{title:"".concat(e,"\nReservierungssystem"),visible:c,width:300,className:F.a.drawer,onClose:s,children:Object(r.jsx)(E,{onClick:s})})]})]})}var L=n(18),D=n(137);function q(e){var t=e.admin,n=e.children,c=Object(D.a)(e,["admin","children"]),a=Object(i.useContext)(S.b).user;return Object(r.jsx)(u.b,Object(L.a)(Object(L.a)({},c),{},{render:function(e){var c=e.location;return a?t&&!a.admin?Object(r.jsx)(u.a,{to:"/"}):n:Object(r.jsx)(u.a,{to:{pathname:"/login",state:{from:c}}})}}))}var W=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,549)).then((function(e){return{default:e.CalendarPage}}))})),U=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(15),n.e(20)]).then(n.bind(null,551)).then((function(e){return{default:e.GeneralSettingsPage}}))})),H=Object(i.lazy)((function(){return n.e(23).then(n.bind(null,536)).then((function(e){return{default:e.InfoPage}}))})),J=Object(i.lazy)((function(){return n.e(24).then(n.bind(null,537)).then((function(e){return{default:e.LegalPrivacyPage}}))})),Y=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,538)).then((function(e){return{default:e.LoginPage}}))})),X=Object(i.lazy)((function(){return n.e(25).then(n.bind(null,539)).then((function(e){return{default:e.LogoutPage}}))})),K=Object(i.lazy)((function(){return n.e(26).then(n.bind(null,540)).then((function(e){return{default:e.VerifyMailPage}}))})),V=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(16)]).then(n.bind(null,541)).then((function(e){return{default:e.MyAccountPage}}))})),G=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,556)).then((function(e){return{default:e.MyReservationsPage}}))})),Z=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,542)).then((function(e){return{default:e.RegisterPage}}))})),$=Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(4),n.e(5),n.e(10),n.e(21)]).then(n.bind(null,543)).then((function(e){return{default:e.StatsPage}}))})),Q=Object(i.lazy)((function(){return Promise.all([n.e(5),n.e(13),n.e(19)]).then(n.bind(null,550)).then((function(e){return{default:e.EditTemplatesPage}}))})),ee=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(14),n.e(22)]).then(n.bind(null,544)).then((function(e){return{default:e.UserManagementPage}}))}));function te(){return Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)(s.a,{visible:!0,large:!0,centered:!0,spin:!0}),children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{exact:!0,path:"/",children:Object(r.jsx)(W,{})}),Object(r.jsx)(u.b,{exact:!0,path:"/info",children:Object(r.jsx)(H,{})}),Object(r.jsx)(u.b,{exact:!0,path:"/legalnotice-privacy",children:Object(r.jsx)(J,{})}),Object(r.jsx)(u.b,{exact:!0,path:"/logout",children:Object(r.jsx)(X,{})}),Object(r.jsx)(u.b,{exact:!0,path:"/login",children:Object(r.jsx)(Y,{})}),Object(r.jsx)(u.b,{exact:!0,path:"/register",children:Object(r.jsx)(Z,{})}),Object(r.jsx)(q,{admin:!0,exact:!0,path:"/admin/general",children:Object(r.jsx)(U,{})}),Object(r.jsx)(q,{admin:!0,exact:!0,path:"/admin/stats",children:Object(r.jsx)($,{})}),Object(r.jsx)(q,{admin:!0,exact:!0,path:"/admin/users",children:Object(r.jsx)(ee,{})}),Object(r.jsx)(q,{admin:!0,exact:!0,path:"/admin/templates",children:Object(r.jsx)(Q,{})}),Object(r.jsx)(q,{exact:!0,path:"/my-reservations",children:Object(r.jsx)(G,{})}),Object(r.jsx)(q,{exact:!0,path:"/profile",children:Object(r.jsx)(V,{})}),Object(r.jsx)(q,{path:"/verify-mail/:verifyToken",children:Object(r.jsx)(K,{})}),Object(r.jsx)(u.b,{path:"*",children:Object(r.jsx)(u.a,{to:"/"})})]})})}var ne=n(85),re=n.n(ne),ce=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,552)).then((function(e){return{default:e.KioskPage}}))})),ae=Object(i.lazy)((function(){return n.e(28).then(n.bind(null,374)).then((function(e){return{default:e.DemoControls}}))}));var ie=function(){var e=Object(i.useContext)(f.b),t=e.config,n=e.state,l=Object(i.useRef)(null);return Object(i.useEffect)((function(){(null===t||void 0===t?void 0:t.announcement)&&t.announcement!==l.current&&(l.current=t.announcement,c.a.info({className:re.a.announcement,title:"Ank\xfcndigung",centered:!0,content:t.announcement,zIndex:1200}))}),[t]),n.error?Object(r.jsx)(b.a,{}):t?Object(r.jsx)(o.a,{basename:"/tennis-court-reservation-system-v2/client/demo",children:Object(r.jsx)(a.a,{children:Object(r.jsxs)(i.Suspense,{fallback:Object(r.jsx)(s.a,{visible:!0,preloader:!0,spin:!0}),children:[Object(r.jsxs)(u.d,{children:[Object(r.jsxs)(u.b,{exact:!0,path:"/kiosk",children:[Object(r.jsx)(a.a.Content,{className:re.a.content,children:Object(r.jsx)(ce,{})}),Object(r.jsx)(a.a.Footer,{className:re.a.footer,children:Object(r.jsx)(h,{noLinks:!0})})]}),Object(r.jsxs)(u.b,{path:"*",children:[Object(r.jsx)(R,{}),Object(r.jsx)(a.a.Content,{className:re.a.content,children:Object(r.jsx)(te,{})}),Object(r.jsx)(a.a.Footer,{className:re.a.footer,children:Object(r.jsx)(h,{})}),Object(r.jsx)(d,{})]})]}),Object(r.jsx)(ae,{})]})})}):Object(r.jsx)(s.a,{visible:!0,preloader:!0,spin:!0})},oe=n(20),ue=n(16),se=n.n(ue),le=n(171),je=n.n(le),de=n(172),be=n.n(de),fe=n(173),Oe=n.n(fe),me=n(175),he=n.n(me),ve=n(174),xe=n.n(ve),pe=n(158),ge=n.n(pe),ye=n(159),_e=n.n(ye);m.a.locale("de"),m.a.extend(ge.a),m.a.extend(_e.a),m.a.extend(xe.a),m.a.extend(je.a),m.a.extend(be.a),m.a.extend(Oe.a),n.e(27).then(n.bind(null,554)).then((function(e){e.patchFetch(),se.a.render(Object(r.jsx)(oe.b,{locale:he.a,children:Object(r.jsx)(f.a,{children:Object(r.jsx)(S.a,{children:Object(r.jsx)(ie,{})})})}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j}));var r=n(32),c=n(3),a=n(0),i=n.n(a),o=n(86),u=n(87),s="usertoken",l=i.a.createContext();function j(e){var t=e.children,n=Object(a.useState)(null),i=Object(r.a)(n,2),j=i[0],d=i[1],b=Object(a.useRef)(!1),f=Object(a.useCallback)((function(e){d((function(t){var n=e(t);return(null===n||void 0===n?void 0:n.token)&&(b.current?localStorage.setItem(s,n.token):sessionStorage.setItem(s,n.token)),n}))}),[]),O=Object(u.a)(o.i,f),m=Object(r.a)(O,2),h=m[0],v=m[1],x=Object(u.a)(o.j),p=Object(r.a)(x,2)[1];Object(a.useEffect)((function(){var e=sessionStorage.getItem(s)||localStorage.getItem(s);e&&!j&&v(null,{type:"token",token:e})}),[v,j]),Object(a.useEffect)((function(){h.error&&(sessionStorage.removeItem(s),localStorage.removeItem(s))}),[h]);var g=Object(a.useCallback)((function(e){b.current=e}),[]),y=Object(a.useCallback)((function(){p(null,{userId:null===j||void 0===j?void 0:j.userId}),d(null),sessionStorage.removeItem(s),localStorage.removeItem(s)}),[p,null===j||void 0===j?void 0:j.userId]),_=Object(a.useMemo)((function(){return{autoLoginState:h,logout:y,setRememberLogin:g,setUser:f,user:j}}),[h,y,g,f,j]);return Object(c.jsx)(l.Provider,{value:_,children:t})}},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return d}));var r=n(32),c=n(3),a=n(0),i=n.n(a),o=n(138),u=n(86),s=n(87),l=n(140),j=i.a.createContext();function d(e){var t=e.children,n=Object(a.useState)(),i=Object(r.a)(n,2),d=i[0],b=i[1],f=Object(a.useState)(),O=Object(r.a)(f,2),m=O[0],h=O[1],v=Object(a.useState)(),x=Object(r.a)(v,2),p=x[0],g=x[1],y=Object(a.useCallback)((function(e){var t=e(null),n=t.config,r=t.courts,c=t.templates;b(n),g(c),h(r)}),[]),_=Object(s.a)(u.b,y,!0),k=Object(r.a)(_,2),I=k[0],C=k[1];Object(l.a)(C,o.a.BASE_DATA);var P=Object(a.useMemo)((function(){return{config:d,courts:m,templates:p,setConfig:b,setCourts:h,setTemplates:g,state:I,reload:C}}),[d,m,p,I,C]);return Object(c.jsx)(j.Provider,{value:P,children:t})}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),c=(n(0),n(100)),a=n.n(c),i=n(128),o=n.n(i),u=a.a.bind(o.a);function s(e){var t=e.centered,n=e.large,c=e.preloader,a=e.spin,i=e.visible;return Object(r.jsx)("div",{className:u({centered:t,preloader:c,spin:a,visible:i,wrapper:!0}),children:Object(r.jsx)("div",{className:u({ballWrapper:!0,large:n}),children:Object(r.jsx)("div",{className:o.a.ball})})})}},68:function(e,t,n){e.exports={header:"NavBar_header__3EbUr",title:"NavBar_title__2Ydj-",orgName:"NavBar_orgName__3TDkX",horizontalMenuWrapper:"NavBar_horizontalMenuWrapper__pOr71",drawerMenuWrapper:"NavBar_drawerMenuWrapper__15WnD",drawer:"NavBar_drawer__2Jr7L"}},85:function(e,t,n){e.exports={content:"App_content__3La4L",footer:"App_footer__29Fsv",announcement:"App_announcement__1d1pc"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"f",(function(){return d})),n.d(t,"o",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"p",(function(){return h})),n.d(t,"k",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"l",(function(){return p})),n.d(t,"g",(function(){return g})),n.d(t,"m",(function(){return y})),n.d(t,"q",(function(){return _})),n.d(t,"e",(function(){return k})),n.d(t,"h",(function(){return I})),n.d(t,"a",(function(){return C})),n.d(t,"n",(function(){return P}));var r=n(63),c=n(93),a=n(18),i=n(118),o=n(34),u=n.n(o),s=n(117),l="/api",j={url:"".concat(l,"/base-data"),setFunc:function(e){return e.res}},d={url:"".concat(l,"/config"),method:"PATCH",setFunc:function(e){var t=e.cur,n=e.req;return Object(a.a)(Object(a.a)({},t),n)}},b={url:"".concat(l,"/courts"),method:"PUT",setFunc:function(e){return e.req}},f={url:"".concat(l,"/login"),method:"POST"},O={url:"".concat(l,"/logout"),method:"POST"},m={url:"".concat(l,"/mail-templates")},h={url:"".concat(l,"/mail-template/:id"),method:"PUT",setFunc:function(e){var t=e.cur,n=e.req;return Object(a.a)(Object(a.a)({},t),{},Object(c.a)({},n.id,n))}},v={url:"".concat(l,"/register"),method:"POST"},x={url:"".concat(l,"/reservations"),method:"POST",setFunc:function(e){return e.res.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{from:u()(e.from),to:u()(e.to)})}))}},p={url:"".concat(l,"/reservation-group"),method:"POST",setFunc:function(e){var t=e.cur,n=e.res;if(!(null===n||void 0===n?void 0:n.length))return t;var c=Object(r.a)(t);return n[0].type===i.a.DISABLE&&(c=c.filter((function(e){return!n.some((function(t){return Object(s.d)(e,t)}))}))),[].concat(Object(r.a)(c),Object(r.a)(n.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{from:u()(e.from),to:u()(e.to)})}))))}},g={url:"".concat(l,"/reservation-group/:groupId"),method:"PATCH",setFunc:function(e){var t=e.cur,n=e.req,c=e.params.path.groupId,o=t.find((function(e){return e.groupId===c}));if(!o)return t;var u=Object(r.a)(t);return o.type===i.a.DISABLE&&(u=u.filter((function(e){return!n.reservations.some((function(t){return Object(s.d)(e,t)}))}))),[].concat(Object(r.a)(u.filter((function(e){return e.groupId!==c}))),Object(r.a)(n.reservations.map((function(e){return Object(a.a)(Object(a.a)(Object(a.a)({},o),e),{},{text:n.text||o.text})}))))}},y={url:"".concat(l,"/send-verify-mail"),method:"POST"},_={url:"".concat(l,"/template/:id"),method:"PUT",setFunc:function(e){var t=e.cur,n=e.req;return Object(a.a)(Object(a.a)({},t),{},Object(c.a)({},n.id,n))}},k={url:"".concat(l,"/users"),setFunc:function(e){return e.res.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{lastActivity:e.lastActivity&&u()(e.lastActivity)})}))}},I={url:"".concat(l,"/user/:userId"),method:"PATCH",setFunc:function(e){var t=e.cur,n=e.req;return Array.isArray(t)?t.map((function(e){return e.userId===n.userId?Object(a.a)(Object(a.a)(Object(a.a)({},e),n),{},{verified:(!n.mail||e.mail===n.mail)&&e.verified}):e})):Object(a.a)(Object(a.a)(Object(a.a)({},t),n),{},{verified:(!n.mail||t.mail===n.mail)&&t.verified})}},C={url:"".concat(l,"/user/:userId"),method:"DELETE",setFunc:function(e){var t=e.cur,n=e.params;return t.filter((function(e){return e.userId!==n.path.userId}))}},P={url:"".concat(l,"/verify-mail"),method:"POST",setFunc:function(e){var t=e.cur;return Object(a.a)(Object(a.a)({},t),{},{verified:!0})}}},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(126),c=n.n(r),a=n(155),i=n(32),o=n(0),u=n(57),s=function(e){return e.res};function l(e,t){var n=e.url,r=e.method,l=void 0===r?"GET":r,j=e.setFunc,d=void 0===j?s:j,b=arguments.length>2&&void 0!==arguments[2]&&arguments[2],f=Object(o.useContext)(u.b)||{},O=f.user,m=f.logout,h=null===O||void 0===O?void 0:O.token,v=Object(o.useState)(!1),x=Object(i.a)(v,2),p=x[0],g=x[1],y=Object(o.useState)(null),_=Object(i.a)(y,2),k=_[0],I=_[1],C=Object(o.useState)(!!b),P=Object(i.a)(C,2),S=P[0],z=P[1],N=Object(o.useState)(null),w=Object(i.a)(N,2),B=w[0],A=w[1],E=Object(o.useRef)(null),T=Object(o.useCallback)((function(e,r,i){E.current&&E.current.cancel();var o=!1,u=function(){var u=Object(a.a)(c.a.mark((function a(){var u,s,j,b,f,O;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(g(!1),I(null),z(!0),u=!1,c.prev=4,s=Object.keys((null===e||void 0===e?void 0:e.path)||{}).reduce((function(t,n){return t.replace(":".concat(n),e.path[n])}),n),(j=Object.keys((null===e||void 0===e?void 0:e.query)||{}).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e.query[t]))})).join("&"))&&(s+="?".concat(j)),b={},h&&(b.Authorization="Bearer ".concat(h)),r&&(b["Content-Type"]="application/json"),!o){c.next=13;break}return c.abrupt("return");case 13:return c.next=15,fetch(s,{method:l,headers:b,body:r?JSON.stringify(r):void 0});case 15:return f=c.sent,o||I(f.status),c.next=19,f.json();case 19:O=c.sent,f.ok?(t&&t((function(t){return d({cur:t,params:e,req:r,res:O})})),o||(g(!0),i&&i())):(o||A(O),u=401===f.status),c.next=26;break;case 23:c.prev=23,c.t0=c.catch(4),o||A(c.t0);case 26:return c.prev=26,o||z(!1),u&&(null===m||void 0===m||m()),c.finish(26);case 30:case"end":return c.stop()}}),a,null,[[4,23,26,30]])})));return function(){return u.apply(this,arguments)}}()();return u.cancel=function(){return o=!0},E.current=u,u.cancel}),[m,l,t,d,n,h]);return Object(o.useEffect)((function(){b&&T(null===b||void 0===b?void 0:b.reqParams,null===b||void 0===b?void 0:b.reqData)}),[b,T]),Object(o.useEffect)((function(){return function(){var e,t;return null===(e=E.current)||void 0===e||null===(t=e.cancel)||void 0===t?void 0:t.call(e)}}),[]),Object(o.useMemo)((function(){return[{success:p,loading:S,error:B,status:k},T]}),[p,S,B,k,T])}}},[[250,7,8]]]);
//# sourceMappingURL=main.7bc22266.chunk.js.map