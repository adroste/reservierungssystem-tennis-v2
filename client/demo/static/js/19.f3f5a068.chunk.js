(this["webpackJsonpreservierungssystem-tennis"]=this["webpackJsonpreservierungssystem-tennis"]||[]).push([[19],{272:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var s=n(3),r=n(283),a=n(284),i=n(72),c=n(133);function j(e){var t=e.apiState,n=t.success,r=t.loading,a=t.error;return r?Object(s.jsx)(c.a,{loading:!0,text:"Speichern..."}):a?Object(s.jsx)(c.a,{error:!0,text:"Konnte nicht gespeichert werden"}):n?Object(s.jsx)(c.a,{success:!0,text:"Gespeichert"}):null}function d(e){var t=e.apiState,n=void 0===t?{}:t,c=e.disableReset,d=e.onSave,l=e.onReset;return Object(s.jsxs)(r.a,{gutter:[16,16],align:"middle",children:[Object(s.jsx)(a.a,{children:Object(s.jsx)(i.a,{disabled:n.loading,onClick:d,type:"primary",htmlType:"submit",children:"Speichern"})}),Object(s.jsx)(a.a,{children:Object(s.jsx)(i.a,{disabled:n.loading||c,onClick:l,htmlType:"reset",children:"Zur\xfccksetzen"})}),Object(s.jsx)(a.a,{children:Object(s.jsx)(j,{apiState:n})})]})}},507:function(e,t,n){e.exports={toolbar:"HtmlEditor_toolbar__1Qc_c",varWidth:"HtmlEditor_varWidth__NV4d6"}},511:function(e,t,n){e.exports={key:"BaseTemplateEditor_key__2AYPw"}},512:function(e,t,n){e.exports={wrapper:"EditTemplatesPage_wrapper__2o1P-",tabs:"EditTemplatesPage_tabs__2v8EB",content:"EditTemplatesPage_content__2EKkC"}},550:function(e,t,n){"use strict";n.r(t),n.d(t,"EditTemplatesPage",(function(){return D}));var s=n(3),r=n(32),a=n(0),i=n(64),c=n(361),j=n(134),d=n(252),l=n(530),b=n(18),u=n(137),o=n(528),O=n(507),h=n.n(O),x=n(508);function m(e,t,n,r){return a.displayName=e.replace(/\s/g,""),Object(x.withEditorContext)(a);function a(a){var i=a.selection,c=Object(u.a)(a,["selection"]),j=!1;return"string"===typeof n&&(j=!!i&&document.queryCommandState(n)),Object(s.jsx)(o.j,Object(b.a)(Object(b.a)({title:e},c),{},{onMouseDown:function(){"function"===typeof n?n(i):r?document.execCommand(n,!1,r):document.execCommand(n)},active:j,children:t}))}}var g=m("H1","\ud835\udddb1","formatBlock","H1"),p=m("H2","\ud835\udddb2","formatBlock","H2"),v=m("Block","Block","formatBlock","div"),f=m("Absatz","Absatz","formatBlock","p");function k(e){var t=e.value,n=e.onChange,i=Object(a.useState)(!1),c=Object(r.a)(i,2),j=c[0],d=c[1],b=Object(a.useCallback)((function(e){n(e.target.value)}),[n]),u=Object(a.useMemo)((function(){var e=j?"HTML ausblenden":"HTML-Editor";return m(e,e,(function(){d(!j)}))}),[j]);return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.k,{value:t||"",onChange:b,children:Object(s.jsxs)(o.m,{className:h.a.toolbar,children:[Object(s.jsx)(o.i,{}),Object(s.jsx)(o.g,{}),Object(s.jsx)(o.l,{}),Object(s.jsx)(o.a,{}),Object(s.jsx)(o.d,{}),Object(s.jsx)(o.h,{}),Object(s.jsx)(o.l,{}),Object(s.jsx)(o.f,{}),Object(s.jsx)(o.b,{}),Object(s.jsx)(o.l,{}),Object(s.jsx)(o.e,{}),Object(s.jsx)(o.c,{}),Object(s.jsx)(o.l,{}),Object(s.jsx)(v,{className:h.a.varWidth}),Object(s.jsx)(f,{className:h.a.varWidth}),Object(s.jsx)(g,{}),Object(s.jsx)(p,{}),Object(s.jsx)(o.l,{}),Object(s.jsx)(u,{className:h.a.varWidth})]})}),j&&Object(s.jsx)(l.a.TextArea,{value:t||"",onChange:b,autoSize:!0})]})}var z=n(272),y=n(511),S=n.n(y),T={display:"flex"};function w(e){var t=e.apiState,n=e.hasSubject,i=e.extra,c=e.initialBody,j=e.initialSubject,b=e.onSave,u=e.replacements,o=Object(a.useState)(),O=Object(r.a)(o,2),h=O[0],x=O[1],m=Object(a.useState)(),g=Object(r.a)(m,2),p=g[0],v=g[1],f=h===c&&(!n||p===j),y=Object(a.useCallback)((function(){var e=h.match(/<.*?>([^<>]+)<.*?>/gim)?h:"";b({cleanBody:e,subject:p})}),[p,h,b]),w=Object(a.useCallback)((function(){x(c),n&&v(j)}),[n,c,j]);Object(a.useEffect)((function(){w()}),[w]);var N=Object(a.useCallback)((function(e){v(e.target.value)}),[]);return Object(s.jsxs)(d.b,{direction:"vertical",style:T,children:[n&&Object(s.jsx)(l.a,{addonBefore:"Betreff:",value:p,onChange:N}),Object(s.jsx)(k,{value:h,onChange:x}),u&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Automatische Ersetzungen"}),Object(s.jsx)("ul",{children:u.map((function(e){var t=e.key,n=e.description;return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:S.a.key,children:t})," - ",Object(s.jsx)("span",{children:n})]},t)}))})]}),Object(s.jsx)("div",{children:i}),Object(s.jsx)(z.a,{apiState:t,disableReset:f,onSave:y,onReset:w})]})}var N=n(86),C=n(87);function B(e){var t=e.id,n=e.mailTemplates,i=e.setMailTemplates,c=e.extra,j=e.replacements,d=n[t],l=d.body,b=d.subject,u=Object(C.a)(N.p,i),o=Object(r.a)(u,2),O=o[0],h=o[1],x=Object(a.useCallback)((function(e){var n=e.cleanBody,s=e.subject;h({path:{id:t}},{id:t,body:n,subject:s})}),[t,h]);return Object(s.jsx)(w,{apiState:O,extra:c,hasSubject:!0,initialBody:l,initialSubject:b,onSave:x,replacements:j})}function _(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],d=t[1],l=Object(C.a)(N.c,d,!0),b=Object(r.a)(l,1)[0];return b.error?Object(s.jsx)(j.a,{}):b.loading?Object(s.jsx)(i.a,{visible:!0,spin:!0,centered:!0,large:!0}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Reservierungsbest\xe4tigung"}),Object(s.jsx)(B,{id:"reservationConfirmation",mailTemplates:n,setMailTemplates:d,replacements:[{key:"{{name}}",description:"Wird durch den Namen des Benutzers ersetzt"},{key:"{{reservierung}}",description:"Wird durch die Angaben zur get\xe4tigen Reservierung ersetzt"}]}),Object(s.jsx)(c.a,{}),Object(s.jsx)("h1",{children:"Stornierung"}),Object(s.jsx)(B,{id:"reservationCancelled",mailTemplates:n,setMailTemplates:d,replacements:[{key:"{{name}}",description:"Wird durch den Namen des Benutzers ersetzt"},{key:"{{reservierung}}",description:"Wird durch die Angaben zur stornierten Reservierung ersetzt"},{key:"{{grund}}",description:"Wird durch den Grund der Stornierung ersetzt"}]}),Object(s.jsx)(c.a,{}),Object(s.jsx)("h1",{children:"Registrierung: E-Mail best\xe4tigen"}),Object(s.jsx)(B,{id:"confirmMail",mailTemplates:n,setMailTemplates:d,replacements:[{key:"{{name}}",description:"Wird durch den Namen des Benutzers ersetzt"},{key:"{{link}}",description:"Wird durch den Best\xe4tigungslink ersetzt"}]}),Object(s.jsx)(c.a,{}),Object(s.jsx)("h1",{children:"Registrierung: Passwort vergessen"}),Object(s.jsx)(B,{id:"resetPassword",mailTemplates:n,setMailTemplates:d,replacements:[{key:"{{name}}",description:"Wird durch den Namen des Benutzers ersetzt"},{key:"{{link}}",description:"Wird durch den Link zum Passwort-Reset ersetzt"}]})]})}var E=n(342),P=n(58);function R(e){var t=e.id,n=e.extra,i=e.replacements,c=Object(a.useContext)(P.b),j=c.templates,d=c.setTemplates,l=j[t].body,b=Object(C.a)(N.q,d),u=Object(r.a)(b,2),o=u[0],O=u[1],h=Object(a.useCallback)((function(e){var n=e.cleanBody;O({path:{id:t}},{id:t,body:n})}),[t,O]);return Object(s.jsx)(w,{apiState:o,extra:n,initialBody:l,onSave:h,replacements:i})}var W=n(512),A=n.n(W);function D(){return Object(s.jsx)("div",{className:A.a.wrapper,children:Object(s.jsxs)(E.a,{className:A.a.tabs,type:"card",children:[Object(s.jsx)(E.a.TabPane,{tab:"Hinweis-Seite",children:Object(s.jsx)("div",{className:A.a.content,children:Object(s.jsx)(R,{id:"infoPage"})})},"2"),Object(s.jsx)(E.a.TabPane,{tab:"Impressum / Datenschutz",children:Object(s.jsx)("div",{className:A.a.content,children:Object(s.jsx)(R,{id:"legalPrivacy",extra:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Rechtliche Informationen"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"Folgende Informationen sollten in die Datenschutzerkl\xe4rung eingebracht werden."}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Das System verwendet eine zu Cookies \xe4hnliche Technologie, um Basisfunktionen wie die Nutzeranmeldung zu erm\xf6glichen."}),Object(s.jsx)("li",{children:"Es werden keinerlei Daten mit Dritten ausgetauscht."}),Object(s.jsx)("li",{children:"Es werden keine Tracking Cookies gesetzt."}),Object(s.jsxs)("li",{children:["Das System hat ein eingebautes Tracking-System, um Seitenaufrufe, etc. zu z\xe4hlen.",Object(s.jsx)("br",{}),"Dazu werden Anfragen an den Server ausgewertet. Aus den Informationen der Anfrage wird f\xfcr jeden Nutzer ein Fingerprint erstellt, um die Anzahl der Aufrufe in Abh\xe4ngigkeit unterschiedliche Nutzer z\xe4hlen zu k\xf6nnen. Dabei werden keine personenbezogenen Daten gespeichert oder weitergegeben. Der Fingerprint erneuert sich t\xe4glich, damit keine Nutzerprofile erstellt werden k\xf6nnen."]})]})]})]})})})},"i"),Object(s.jsx)(E.a.TabPane,{tab:"Reservierungsdialog",children:Object(s.jsx)("div",{className:A.a.content,children:Object(s.jsx)(R,{id:"reservationTos",extra:Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{children:"Der Nutzer wird w\xe4hrend einer Reservierung dazu aufgefordert, oben stehende Hinweise / Ordnung zu akzeptieren."})})})})},"1"),Object(s.jsx)(E.a.TabPane,{tab:"Registrierung",children:Object(s.jsxs)("div",{className:A.a.content,children:[Object(s.jsx)("h1",{children:"Nutzungsbedingungen"}),Object(s.jsx)(R,{id:"systemTos",extra:"Der Nutzer muss diese Nutzungsbedingungen akzeptieren, um sich Registrieren zu k\xf6nnen."})]})},"7"),Object(s.jsx)(E.a.TabPane,{tab:"E-Mail Vorlagen",children:Object(s.jsx)("div",{className:A.a.content,children:Object(s.jsx)(_,{})})},"3")]})})}}}]);
//# sourceMappingURL=19.f3f5a068.chunk.js.map