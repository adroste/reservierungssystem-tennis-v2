(this["webpackJsonpreservierungssystem-tennis"]=this["webpackJsonpreservierungssystem-tennis"]||[]).push([[2],{262:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n=t||{},a=n.defaultValue,c=n.value,i=n.onChange,l=n.postState,s=o(r.useState((function(){return void 0!==c?c:void 0!==a?"function"===typeof a?a():a:"function"===typeof e?e():e})),2),u=s[0],f=s[1],m=void 0!==c?c:u;l&&(m=l(m));var d=r.useRef(!0);return r.useEffect((function(){d.current?d.current=!1:void 0===c&&f(c)}),[c]),[m,function(e){f(e),m!==e&&i&&i(e,m)}]}},527:function(e,t,n){"use strict";var r=n(7),o=n(0),a=n(158),c=n(1),i=n(5),l=n.n(i),s=n(30),u=n(74),f=n(48);function m(e){var t=e.prefixCls,n=e.style,r=e.visible,a=e.maskProps,i=e.motionName;return o.createElement(f.b,{key:"mask",visible:r,motionName:i,leavedClassName:"".concat(t,"-mask-hidden")},(function(e){var r=e.className,i=e.style;return o.createElement("div",Object.assign({style:Object(c.a)(Object(c.a)({},i),n),className:l()("".concat(t,"-mask"),r)},a))}))}function d(e,t,n){var r=t;return!r&&n&&(r="".concat(e,"-").concat(n)),r}var v=-1;function p(e,t){var n=e["page".concat(t?"Y":"X","Offset")],r="scroll".concat(t?"Top":"Left");if("number"!==typeof n){var o=e.document;"number"!==typeof(n=o.documentElement[r])&&(n=o.body[r])}return n}var b={width:0,height:0,overflow:"hidden",outline:"none"},y=o.forwardRef((function(e,t){var n=e.closable,a=e.prefixCls,i=e.width,s=e.height,u=e.footer,m=e.title,d=e.closeIcon,v=e.style,y=e.className,C=e.visible,g=e.forceRender,k=e.bodyStyle,O=e.bodyProps,x=e.children,E=e.destroyOnClose,h=e.modalRender,N=e.motionName,j=e.ariaId,w=e.onClose,T=e.onVisibleChanged,P=e.onClick,S=e.mousePosition,R=Object(o.useRef)(),I=Object(o.useRef)(),A=Object(o.useRef)();o.useImperativeHandle(t,(function(){return{focus:function(){var e;null===(e=R.current)||void 0===e||e.focus()},getDOM:function(){return A.current},changeActive:function(e){var t=document.activeElement;e&&t===I.current?R.current.focus():e||t!==R.current||I.current.focus()}}}));var M,z,F,B=o.useState(),D=Object(r.a)(B,2),L=D[0],V=D[1],H={};function J(){var e=function(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},r=e.ownerDocument,o=r.defaultView||r.parentWindow;return n.left+=p(o),n.top+=p(o,!0),n}(A.current);V(S?"".concat(S.x-e.left,"px ").concat(S.y-e.top,"px"):"")}void 0!==i&&(H.width=i),void 0!==s&&(H.height=s),L&&(H.transformOrigin=L),u&&(M=o.createElement("div",{className:"".concat(a,"-footer")},u)),m&&(z=o.createElement("div",{className:"".concat(a,"-header")},o.createElement("div",{className:"".concat(a,"-title"),id:j},m))),n&&(F=o.createElement("button",{type:"button",onClick:w,"aria-label":"Close",className:"".concat(a,"-close")},d||o.createElement("span",{className:"".concat(a,"-close-x")})));var K=o.createElement("div",{className:"".concat(a,"-content")},F,z,o.createElement("div",Object.assign({className:"".concat(a,"-body"),style:k},O),x),M);return o.createElement(f.b,{visible:C,onVisibleChanged:T,onAppearPrepare:J,onEnterPrepare:J,forceRender:g,motionName:N,removeOnLeave:E,ref:A},(function(e,t){var n=e.className,r=e.style;return o.createElement("div",{key:"dialog-element",role:"document",ref:t,style:Object(c.a)(Object(c.a)(Object(c.a)({},r),v),H),className:l()(a,y,n),onClick:P},o.createElement("div",{tabIndex:0,ref:R,style:b,"aria-hidden":"true"}),h?h(K):K,o.createElement("div",{tabIndex:0,ref:I,style:b,"aria-hidden":"true"}))}))}));y.displayName="Content";var C=y;function g(e){var t=e.prefixCls,n=void 0===t?"rc-dialog":t,a=e.zIndex,i=e.visible,f=void 0!==i&&i,p=e.keyboard,b=void 0===p||p,y=e.focusTriggerAfterClose,g=void 0===y||y,k=e.switchScrollingEffect,O=void 0===k?function(){}:k,x=e.title,E=e.wrapStyle,h=e.wrapClassName,N=e.wrapProps,j=e.onClose,w=e.afterClose,T=e.transitionName,P=e.animation,S=e.closable,R=void 0===S||S,I=e.mask,A=void 0===I||I,M=e.maskTransitionName,z=e.maskAnimation,F=e.maskClosable,B=void 0===F||F,D=e.maskStyle,L=e.maskProps,V=Object(o.useRef)(),H=Object(o.useRef)(),J=Object(o.useRef)(),K=o.useState(f),X=Object(r.a)(K,2),Y=X[0],U=X[1],W=Object(o.useRef)();function $(e){null===j||void 0===j||j(e)}W.current||(W.current="rcDialogTitle".concat(v+=1));var q=Object(o.useRef)(!1),G=Object(o.useRef)(),Q=null;return B&&(Q=function(e){q.current||Object(u.a)(J.current.getDOM(),e.target)||$(e)}),Object(o.useEffect)((function(){f&&(U(!0),O())}),[f]),Object(o.useEffect)((function(){return function(){O(),clearTimeout(G.current)}}),[]),o.createElement("div",{className:"".concat(n,"-root")},o.createElement(m,{prefixCls:n,visible:A&&f,motionName:d(n,M,z),style:Object(c.a)({zIndex:a},D),maskProps:L}),o.createElement("div",Object.assign({tabIndex:-1,onKeyDown:function(e){if(b&&e.keyCode===s.a.ESC)return e.stopPropagation(),void $(e);f&&e.keyCode===s.a.TAB&&J.current.changeActive(!e.shiftKey)},className:l()("".concat(n,"-wrap"),h),ref:H,onClick:Q,role:"dialog","aria-labelledby":x?W.current:null,style:Object(c.a)(Object(c.a)({zIndex:a},E),{},{display:Y?null:"none"})},N),o.createElement(C,Object.assign({},e,{onClick:function(){clearTimeout(G.current),q.current=!0,G.current=setTimeout((function(){q.current=!1}))},ref:J,closable:R,ariaId:W.current,prefixCls:n,visible:f,onClose:$,onVisibleChanged:function(e){if(e){var t;if(!Object(u.a)(H.current,document.activeElement))V.current=document.activeElement,null===(t=J.current)||void 0===t||t.focus()}else{if(U(!1),O(),A&&V.current&&g){try{V.current.focus({preventScroll:!0})}catch(n){}V.current=null}null===w||void 0===w||w()}},motionName:d(n,T,P)}))))}var k=function(e){var t=e.visible,n=e.getContainer,c=e.forceRender,i=e.destroyOnClose,l=void 0!==i&&i,s=e.afterClose,u=o.useState(t),f=Object(r.a)(u,2),m=f[0],d=f[1];return o.useEffect((function(){t&&d(!0)}),[t]),!1===n?o.createElement(g,Object.assign({},e,{getOpenCount:function(){return 2}})):c||!l||m?o.createElement(a.a,{visible:t,forceRender:c,getContainer:n},(function(t){return o.createElement(g,Object.assign({},e,{destroyOnClose:l,afterClose:function(){null===s||void 0===s||s(),d(!1)}},t))})):null};k.displayName="Dialog";var O=k;t.a=O},544:function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(3),c=n.n(a),i=n(0),l=n(527),s=n(5),u=n.n(s),f=n(59),m=n(94),d=n.n(m),v=n(47),p=n.n(v),b=n(65),y=n.n(b);var C=n(175),g=n(138),k=function(e){var t=i.useRef(!1),n=i.useRef(),r=i.useState(!1),o=p()(r,2),a=o[0],l=o[1];i.useEffect((function(){var t;if(e.autoFocus){var r=n.current;t=setTimeout((function(){return r.focus()}))}return function(){t&&clearTimeout(t)}}),[]);var s=e.type,u=e.children,f=e.prefixCls,m=e.buttonProps;return i.createElement(C.a,c()({},Object(g.a)(s),{onClick:function(){var n=e.actionFn,r=e.closeModal;if(!t.current)if(t.current=!0,n){var o;if(n.length)o=n(r),t.current=!1;else if(!(o=n()))return void r();!function(n){var r=e.closeModal;n&&n.then&&(l(!0),n.then((function(){r.apply(void 0,arguments)}),(function(e){console.error(e),l(!1),t.current=!1})))}(o)}else r()},loading:a,prefixCls:f},m,{ref:n}),u)},O=n(24),x=n(26),E=function(e){var t=e.icon,n=e.onCancel,r=e.onOk,a=e.close,c=e.zIndex,l=e.afterClose,s=e.visible,f=e.keyboard,m=e.centered,d=e.getContainer,v=e.maskStyle,p=e.okText,b=e.okButtonProps,y=e.cancelText,C=e.cancelButtonProps,g=e.direction,E=e.prefixCls,h=e.rootPrefixCls,N=e.bodyStyle,j=e.modalRender;Object(O.a)(!("string"===typeof t&&t.length>2),"Modal","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(t,"` at https://ant.design/components/icon"));var w=e.okType||"primary",T="".concat(E,"-confirm"),P=!("okCancel"in e)||e.okCancel,S=e.width||416,R=e.style||{},I=void 0===e.mask||e.mask,A=void 0!==e.maskClosable&&e.maskClosable,M=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),z=e.transitionName||"zoom",F=e.maskTransitionName||"fade",B=u()(T,"".concat(T,"-").concat(e.type),o()({},"".concat(T,"-rtl"),"rtl"===g),e.className),D=P&&i.createElement(k,{actionFn:n,closeModal:a,autoFocus:"cancel"===M,buttonProps:C,prefixCls:"".concat(h,"-btn")},y);return i.createElement(_,{prefixCls:E,className:B,wrapClassName:u()(o()({},"".concat(T,"-centered"),!!e.centered)),onCancel:function(){return a({triggerCancel:!0})},visible:s,title:"",transitionName:z,footer:"",maskTransitionName:F,mask:I,maskClosable:A,maskStyle:v,style:R,width:S,zIndex:c,afterClose:l,keyboard:f,centered:m,getContainer:d,modalRender:j},i.createElement("div",{className:"".concat(T,"-body-wrapper")},i.createElement(x.b,{prefixCls:h},i.createElement("div",{className:"".concat(T,"-body"),style:N},t,void 0===e.title?null:i.createElement("span",{className:"".concat(T,"-title")},e.title),i.createElement("div",{className:"".concat(T,"-content")},e.content))),i.createElement("div",{className:"".concat(T,"-btns")},D,i.createElement(k,{type:w,actionFn:r,closeModal:a,autoFocus:"ok"===M,buttonProps:b,prefixCls:"".concat(h,"-btn")},p))))},h=n(83),N=n(66),j=n(45),w=function(e,t){var n=e.afterClose,r=e.config,o=i.useState(!0),a=p()(o,2),l=a[0],s=a[1],u=i.useState(r),f=p()(u,2),m=f[0],d=f[1],v=i.useContext(j.b),b=v.direction,y=v.getPrefixCls,C=y("modal"),g=y();function k(){s(!1)}return i.useImperativeHandle(t,(function(){return{destroy:k,update:function(e){d((function(t){return c()(c()({},t),e)}))}}})),i.createElement(N.a,{componentName:"Modal",defaultLocale:h.a.Modal},(function(e){return i.createElement(E,c()({prefixCls:C,rootPrefixCls:g},m,{close:k,visible:l,afterClose:n,okText:m.okText||(m.okCancel?e.okText:e.justOkText),direction:b,cancelText:m.cancelText||e.cancelText}))}))},T=i.forwardRef(w),P=n(16),S=n(127),R=n.n(S),I=n(126),A=n.n(I),M=n(128),z=n.n(M),F=n(129),B=n.n(F),D=n(104),L=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},V="ant";function H(){return V}function J(e){var t=document.createElement("div");document.body.appendChild(t);var n=c()(c()({},e),{close:a,visible:!0});function r(){var n=P.unmountComponentAtNode(t);n&&t.parentNode&&t.parentNode.removeChild(t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];var i=o.some((function(e){return e&&e.triggerCancel}));e.onCancel&&i&&e.onCancel.apply(e,o);for(var l=0;l<Q.length;l++){var s=Q[l];if(s===a){Q.splice(l,1);break}}}function o(e){var n=e.okText,r=e.cancelText,o=e.prefixCls,a=L(e,["okText","cancelText","prefixCls"]);setTimeout((function(){var e=Object(D.b)();P.render(i.createElement(E,c()({},a,{prefixCls:o||"".concat(H(),"-modal"),rootPrefixCls:H(),okText:n||(a.okCancel?e.okText:e.justOkText),cancelText:r||e.cancelText})),t)}))}function a(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];o(n=c()(c()({},n),{visible:!1,afterClose:r.bind.apply(r,[this].concat(t))}))}return o(n),Q.push(a),{destroy:a,update:function(e){o(n="function"===typeof e?e(n):c()(c()({},n),e))}}}function K(e){return c()({type:"warning",icon:i.createElement(B.a,null),okCancel:!1},e)}function X(e){return c()({type:"info",icon:i.createElement(R.a,null),okCancel:!1},e)}function Y(e){return c()({type:"success",icon:i.createElement(A.a,null),okCancel:!1},e)}function U(e){return c()({type:"error",icon:i.createElement(z.a,null),okCancel:!1},e)}function W(e){return c()({type:"confirm",icon:i.createElement(B.a,null),okCancel:!0},e)}var $=0;var q,G=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Q=[];"undefined"!==typeof window&&window.document&&window.document.documentElement&&Object(f.a)(document.documentElement,"click",(function(e){q={x:e.pageX,y:e.pageY},setTimeout((function(){q=null}),100)}));var Z=function(e){var t,n=i.useContext(j.b),r=n.getPopupContainer,a=n.getPrefixCls,s=n.direction,f=function(t){var n=e.onCancel;n&&n(t)},m=function(t){var n=e.onOk;n&&n(t)},v=function(t){var n=e.okText,r=e.okType,o=e.cancelText,a=e.confirmLoading;return i.createElement(i.Fragment,null,i.createElement(C.a,c()({onClick:f},e.cancelButtonProps),o||t.cancelText),i.createElement(C.a,c()({},Object(g.a)(r),{loading:a,onClick:m},e.okButtonProps),n||t.okText))},p=e.prefixCls,b=e.footer,y=e.visible,k=e.wrapClassName,O=e.centered,x=e.getContainer,E=e.closeIcon,h=G(e,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon"]),w=a("modal",p),T=i.createElement(N.a,{componentName:"Modal",defaultLocale:Object(D.b)()},v),P=i.createElement("span",{className:"".concat(w,"-close-x")},E||i.createElement(d.a,{className:"".concat(w,"-close-icon")})),S=u()(k,(t={},o()(t,"".concat(w,"-centered"),!!O),o()(t,"".concat(w,"-wrap-rtl"),"rtl"===s),t));return i.createElement(l.a,c()({},h,{getContainer:void 0===x?r:x,prefixCls:w,wrapClassName:S,footer:void 0===b?T:b,visible:y,mousePosition:q,onClose:f,closeIcon:P}))};Z.useModal=function(){var e=function(){var e=i.useState([]),t=p()(e,2),n=t[0],r=t[1];return[n,function(e){return r((function(t){return[].concat(y()(t),[e])})),function(){r((function(t){return t.filter((function(t){return t!==e}))}))}}]}(),t=p()(e,2),n=t[0],r=t[1];function o(e){return function(t){$+=1;var n,o=i.createRef(),a=i.createElement(T,{key:"modal-".concat($),config:e(t),ref:o,afterClose:function(){n()}});return n=r(a),{destroy:function(){o.current&&o.current.destroy()},update:function(e){o.current&&o.current.update(e)}}}}return[{info:o(X),success:o(Y),error:o(U),warning:o(K),confirm:o(W)},i.createElement(i.Fragment,null,n)]},Z.defaultProps={width:520,transitionName:"zoom",maskTransitionName:"fade",confirmLoading:!1,visible:!1,okType:"primary"};var _=Z;function ee(e){return J(K(e))}var te=_;te.info=function(e){return J(X(e))},te.success=function(e){return J(Y(e))},te.error=function(e){return J(U(e))},te.warning=ee,te.warn=ee,te.confirm=function(e){return J(W(e))},te.destroyAll=function(){for(;Q.length;){var e=Q.pop();e&&e()}},te.config=function(e){var t=e.rootPrefixCls;t&&(V=t)};t.a=te},552:function(e,t,n){"use strict";var r=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},a=n(33),c=function(e,t){return r.createElement(a.a,Object.assign({},e,{ref:t,icon:o}))};c.displayName="ExclamationCircleOutlined";t.a=r.forwardRef(c)}}]);
//# sourceMappingURL=2.80060091.chunk.js.map