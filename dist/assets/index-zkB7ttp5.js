(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function fg(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Cu={exports:{}},Fs={},Ru={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function zx(){if(Xp)return _t;Xp=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(E){return E===null||typeof E!="object"?null:(E=v&&E[v]||E["@@iterator"],typeof E=="function"?E:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function _(E,j,ve){this.props=E,this.context=j,this.refs=w,this.updater=ve||M}_.prototype.isReactComponent={},_.prototype.setState=function(E,j){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,j,"setState")},_.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function S(){}S.prototype=_.prototype;function I(E,j,ve){this.props=E,this.context=j,this.refs=w,this.updater=ve||M}var k=I.prototype=new S;k.constructor=I,b(k,_.prototype),k.isPureReactComponent=!0;var A=Array.isArray,q=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function B(E,j,ve){var Y,ne={},pe=null,ie=null;if(j!=null)for(Y in j.ref!==void 0&&(ie=j.ref),j.key!==void 0&&(pe=""+j.key),j)q.call(j,Y)&&!O.hasOwnProperty(Y)&&(ne[Y]=j[Y]);var ge=arguments.length-2;if(ge===1)ne.children=ve;else if(1<ge){for(var be=Array(ge),Pe=0;Pe<ge;Pe++)be[Pe]=arguments[Pe+2];ne.children=be}if(E&&E.defaultProps)for(Y in ge=E.defaultProps,ge)ne[Y]===void 0&&(ne[Y]=ge[Y]);return{$$typeof:a,type:E,key:pe,ref:ie,props:ne,_owner:F.current}}function P(E,j){return{$$typeof:a,type:E.type,key:j,ref:E.ref,props:E.props,_owner:E._owner}}function C(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function z(E){var j={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ve){return j[ve]})}var te=/\/+/g;function J(E,j){return typeof E=="object"&&E!==null&&E.key!=null?z(""+E.key):j.toString(36)}function ce(E,j,ve,Y,ne){var pe=typeof E;(pe==="undefined"||pe==="boolean")&&(E=null);var ie=!1;if(E===null)ie=!0;else switch(pe){case"string":case"number":ie=!0;break;case"object":switch(E.$$typeof){case a:case e:ie=!0}}if(ie)return ie=E,ne=ne(ie),E=Y===""?"."+J(ie,0):Y,A(ne)?(ve="",E!=null&&(ve=E.replace(te,"$&/")+"/"),ce(ne,j,ve,"",function(Pe){return Pe})):ne!=null&&(C(ne)&&(ne=P(ne,ve+(!ne.key||ie&&ie.key===ne.key?"":(""+ne.key).replace(te,"$&/")+"/")+E)),j.push(ne)),1;if(ie=0,Y=Y===""?".":Y+":",A(E))for(var ge=0;ge<E.length;ge++){pe=E[ge];var be=Y+J(pe,ge);ie+=ce(pe,j,ve,be,ne)}else if(be=y(E),typeof be=="function")for(E=be.call(E),ge=0;!(pe=E.next()).done;)pe=pe.value,be=Y+J(pe,ge++),ie+=ce(pe,j,ve,be,ne);else if(pe==="object")throw j=String(E),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ie}function de(E,j,ve){if(E==null)return E;var Y=[],ne=0;return ce(E,Y,"","",function(pe){return j.call(ve,pe,ne++)}),Y}function ue(E){if(E._status===-1){var j=E._result;j=j(),j.then(function(ve){(E._status===0||E._status===-1)&&(E._status=1,E._result=ve)},function(ve){(E._status===0||E._status===-1)&&(E._status=2,E._result=ve)}),E._status===-1&&(E._status=0,E._result=j)}if(E._status===1)return E._result.default;throw E._result}var fe={current:null},G={transition:null},me={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function D(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:de,forEach:function(E,j,ve){de(E,function(){j.apply(this,arguments)},ve)},count:function(E){var j=0;return de(E,function(){j++}),j},toArray:function(E){return de(E,function(j){return j})||[]},only:function(E){if(!C(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},_t.Component=_,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=I,_t.StrictMode=r,_t.Suspense=p,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,_t.act=D,_t.cloneElement=function(E,j,ve){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var Y=b({},E.props),ne=E.key,pe=E.ref,ie=E._owner;if(j!=null){if(j.ref!==void 0&&(pe=j.ref,ie=F.current),j.key!==void 0&&(ne=""+j.key),E.type&&E.type.defaultProps)var ge=E.type.defaultProps;for(be in j)q.call(j,be)&&!O.hasOwnProperty(be)&&(Y[be]=j[be]===void 0&&ge!==void 0?ge[be]:j[be])}var be=arguments.length-2;if(be===1)Y.children=ve;else if(1<be){ge=Array(be);for(var Pe=0;Pe<be;Pe++)ge[Pe]=arguments[Pe+2];Y.children=ge}return{$$typeof:a,type:E.type,key:ne,ref:pe,props:Y,_owner:ie}},_t.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:l,_context:E},E.Consumer=E},_t.createElement=B,_t.createFactory=function(E){var j=B.bind(null,E);return j.type=E,j},_t.createRef=function(){return{current:null}},_t.forwardRef=function(E){return{$$typeof:d,render:E}},_t.isValidElement=C,_t.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:ue}},_t.memo=function(E,j){return{$$typeof:m,type:E,compare:j===void 0?null:j}},_t.startTransition=function(E){var j=G.transition;G.transition={};try{E()}finally{G.transition=j}},_t.unstable_act=D,_t.useCallback=function(E,j){return fe.current.useCallback(E,j)},_t.useContext=function(E){return fe.current.useContext(E)},_t.useDebugValue=function(){},_t.useDeferredValue=function(E){return fe.current.useDeferredValue(E)},_t.useEffect=function(E,j){return fe.current.useEffect(E,j)},_t.useId=function(){return fe.current.useId()},_t.useImperativeHandle=function(E,j,ve){return fe.current.useImperativeHandle(E,j,ve)},_t.useInsertionEffect=function(E,j){return fe.current.useInsertionEffect(E,j)},_t.useLayoutEffect=function(E,j){return fe.current.useLayoutEffect(E,j)},_t.useMemo=function(E,j){return fe.current.useMemo(E,j)},_t.useReducer=function(E,j,ve){return fe.current.useReducer(E,j,ve)},_t.useRef=function(E){return fe.current.useRef(E)},_t.useState=function(E){return fe.current.useState(E)},_t.useSyncExternalStore=function(E,j,ve){return fe.current.useSyncExternalStore(E,j,ve)},_t.useTransition=function(){return fe.current.useTransition()},_t.version="18.3.1",_t}var qp;function rh(){return qp||(qp=1,Ru.exports=zx()),Ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Hx(){if(Yp)return Fs;Yp=1;var a=rh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,v={},y=null,M=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:M,props:v,_owner:o.current}}return Fs.Fragment=t,Fs.jsx=u,Fs.jsxs=u,Fs}var $p;function Vx(){return $p||($p=1,Cu.exports=Hx()),Cu.exports}var f=Vx(),Ue=rh();const Gx=fg(Ue);var ll={},Nu={exports:{}},Pn={},Pu={exports:{}},ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function jx(){return Kp||(Kp=1,(function(a){function e(G,me){var D=G.length;G.push(me);e:for(;0<D;){var E=D-1>>>1,j=G[E];if(0<o(j,me))G[E]=me,G[D]=j,D=E;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var me=G[0],D=G.pop();if(D!==me){G[0]=D;e:for(var E=0,j=G.length,ve=j>>>1;E<ve;){var Y=2*(E+1)-1,ne=G[Y],pe=Y+1,ie=G[pe];if(0>o(ne,D))pe<j&&0>o(ie,ne)?(G[E]=ie,G[pe]=D,E=pe):(G[E]=ne,G[Y]=D,E=Y);else if(pe<j&&0>o(ie,D))G[E]=ie,G[pe]=D,E=pe;else break e}}return me}function o(G,me){var D=G.sortIndex-me.sortIndex;return D!==0?D:G.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,v=null,y=3,M=!1,b=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(G){for(var me=t(m);me!==null;){if(me.callback===null)r(m);else if(me.startTime<=G)r(m),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(m)}}function A(G){if(w=!1,k(G),!b)if(t(p)!==null)b=!0,ue(q);else{var me=t(m);me!==null&&fe(A,me.startTime-G)}}function q(G,me){b=!1,w&&(w=!1,S(B),B=-1),M=!0;var D=y;try{for(k(me),v=t(p);v!==null&&(!(v.expirationTime>me)||G&&!z());){var E=v.callback;if(typeof E=="function"){v.callback=null,y=v.priorityLevel;var j=E(v.expirationTime<=me);me=a.unstable_now(),typeof j=="function"?v.callback=j:v===t(p)&&r(p),k(me)}else r(p);v=t(p)}if(v!==null)var ve=!0;else{var Y=t(m);Y!==null&&fe(A,Y.startTime-me),ve=!1}return ve}finally{v=null,y=D,M=!1}}var F=!1,O=null,B=-1,P=5,C=-1;function z(){return!(a.unstable_now()-C<P)}function te(){if(O!==null){var G=a.unstable_now();C=G;var me=!0;try{me=O(!0,G)}finally{me?J():(F=!1,O=null)}}else F=!1}var J;if(typeof I=="function")J=function(){I(te)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=te,J=function(){de.postMessage(null)}}else J=function(){_(te,0)};function ue(G){O=G,F||(F=!0,J())}function fe(G,me){B=_(function(){G(a.unstable_now())},me)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(G){G.callback=null},a.unstable_continueExecution=function(){b||M||(b=!0,ue(q))},a.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},a.unstable_getCurrentPriorityLevel=function(){return y},a.unstable_getFirstCallbackNode=function(){return t(p)},a.unstable_next=function(G){switch(y){case 1:case 2:case 3:var me=3;break;default:me=y}var D=y;y=me;try{return G()}finally{y=D}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(G,me){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var D=y;y=G;try{return me()}finally{y=D}},a.unstable_scheduleCallback=function(G,me,D){var E=a.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?E+D:E):D=E,G){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=D+j,G={id:x++,callback:me,priorityLevel:G,startTime:D,expirationTime:j,sortIndex:-1},D>E?(G.sortIndex=D,e(m,G),t(p)===null&&G===t(m)&&(w?(S(B),B=-1):w=!0,fe(A,D-E))):(G.sortIndex=j,e(p,G),b||M||(b=!0,ue(q))),G},a.unstable_shouldYield=z,a.unstable_wrapCallback=function(G){var me=y;return function(){var D=y;y=me;try{return G.apply(this,arguments)}finally{y=D}}}})(ku)),ku}var Zp;function Wx(){return Zp||(Zp=1,Pu.exports=jx()),Pu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Xx(){if(Qp)return Pn;Qp=1;var a=rh(),e=Wx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(n){return p.call(v,n)?!0:p.call(x,n)?!1:m.test(n)?v[n]=!0:(x[n]=!0,!1)}function M(n,i,s,c){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,s,c){if(i===null||typeof i>"u"||M(n,i,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,s,c,h,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=s,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,I);_[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,I);_[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,I);_[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,i,s,c){var h=_.hasOwnProperty(i)?_[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,s,h,c)&&(s=null),c||h===null?y(i)&&(s===null?n.removeAttribute(i):n.setAttribute(i,""+s)):h.mustUseProperty?n[h.propertyName]=s===null?h.type===3?!1:"":s:(i=h.attributeName,c=h.attributeNamespace,s===null?n.removeAttribute(i):(h=h.type,s=h===3||h===4&&s===!0?"":""+s,c?n.setAttributeNS(c,i,s):n.setAttribute(i,s))))}var A=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),G=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var D=Object.assign,E;function j(n){if(E===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);E=i&&i[1]||""}return`
`+E+n}var ve=!1;function Y(n,i){if(!n||ve)return"";ve=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var c=se}Reflect.construct(n,[],i)}else{try{i.call()}catch(se){c=se}n.call(i.prototype)}else{try{throw Error()}catch(se){c=se}n()}}catch(se){if(se&&c&&typeof se.stack=="string"){for(var h=se.stack.split(`
`),g=c.stack.split(`
`),T=h.length-1,U=g.length-1;1<=T&&0<=U&&h[T]!==g[U];)U--;for(;1<=T&&0<=U;T--,U--)if(h[T]!==g[U]){if(T!==1||U!==1)do if(T--,U--,0>U||h[T]!==g[U]){var V=`
`+h[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=U);break}}}finally{ve=!1,Error.prepareStackTrace=s}return(n=n?n.displayName||n.name:"")?j(n):""}function ne(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case F:return"Portal";case P:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case te:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:pe(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return pe(n(i))}catch{}}return null}function ie(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(n){var i=be(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,g=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Je(n){n._valueTracker||(n._valueTracker=Pe(n))}function We(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return n&&(c=be(n)?n.checked?"true":"false":n.value),n=c,n!==s?(i.setValue(n),!0):!1}function ot(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,i){var s=i.checked;return D({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??n._wrapperState.initialChecked})}function wt(n,i){var s=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;s=ge(i.value!=null?i.value:s),n._wrapperState={initialChecked:c,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function tt(n,i){i=i.checked,i!=null&&k(n,"checked",i,!1)}function et(n,i){tt(n,i);var s=ge(i.value),c=i.type;if(s!=null)c==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+s):n.value!==""+s&&(n.value=""+s);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?vt(n,i.type,s):i.hasOwnProperty("defaultValue")&&vt(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ge(n,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,s||i===n.value||(n.value=i),n.defaultValue=i}s=n.name,s!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,s!==""&&(n.name=s)}function vt(n,i,s){(i!=="number"||ot(n.ownerDocument)!==n)&&(s==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+s&&(n.defaultValue=""+s))}var Fe=Array.isArray;function L(n,i,s,c){if(n=n.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=i.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+ge(s),i=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return D({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ae(n,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(t(92));if(Fe(s)){if(1<s.length)throw Error(t(93));s=s[0]}i=s}i==null&&(i=""),s=i}n._wrapperState={initialValue:ge(s)}}function _e(n,i){var s=ge(i.value),c=ge(i.defaultValue);s!=null&&(s=""+s,s!==n.value&&(n.value=s),i.defaultValue==null&&n.defaultValue!==s&&(n.defaultValue=s)),c!=null&&(n.defaultValue=""+c)}function Se(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function xe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?xe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ne,Oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,s,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function pt(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function nt(n,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function st(n,i){n=n.style;for(var s in i)if(i.hasOwnProperty(s)){var c=s.indexOf("--")===0,h=nt(s,i[s],c);s==="float"&&(s="cssFloat"),c?n.setProperty(s,h):n[s]=h}}var Ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yt(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ht(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function $(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ke=null,he=null,ye=null;function Ie(n){if(n=Ms(n)){if(typeof ke!="function")throw Error(t(280));var i=n.stateNode;i&&(i=wo(i),ke(n.stateNode,n.type,i))}}function Le(n){he?ye?ye.push(n):ye=[n]:he=n}function ft(){if(he){var n=he,i=ye;if(ye=he=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ut(n,i){return n(i)}function $t(){}var bt=!1;function bn(n,i,s){if(bt)return n(i,s);bt=!0;try{return Ut(n,i,s)}finally{bt=!1,(he!==null||ye!==null)&&($t(),ft())}}function yn(n,i){var s=n.stateNode;if(s===null)return null;var c=wo(s);if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(t(231,i,typeof s));return s}var sa=!1;if(d)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){sa=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{sa=!1}function Ci(n,i,s,c,h,g,T,U,V){var se=Array.prototype.slice.call(arguments,3);try{i.apply(s,se)}catch(we){this.onError(we)}}var Ri=!1,Nr=null,Pr=!1,Ji=null,no={onError:function(n){Ri=!0,Nr=n}};function oa(n,i,s,c,h,g,T,U,V){Ri=!1,Nr=null,Ci.apply(no,arguments)}function io(n,i,s,c,h,g,T,U,V){if(oa.apply(this,arguments),Ri){if(Ri){var se=Nr;Ri=!1,Nr=null}else throw Error(t(198));Pr||(Pr=!0,Ji=se)}}function xi(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function ro(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ao(n){if(xi(n)!==n)throw Error(t(188))}function Kl(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var s=n,c=i;;){var h=s.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===s)return ao(h),n;if(g===c)return ao(h),i;g=g.sibling}throw Error(t(188))}if(s.return!==c.return)s=h,c=g;else{for(var T=!1,U=h.child;U;){if(U===s){T=!0,s=h,c=g;break}if(U===c){T=!0,c=h,s=g;break}U=U.sibling}if(!T){for(U=g.child;U;){if(U===s){T=!0,s=g,c=h;break}if(U===c){T=!0,c=g,s=h;break}U=U.sibling}if(!T)throw Error(t(189))}}if(s.alternate!==c)throw Error(t(190))}if(s.tag!==3)throw Error(t(188));return s.stateNode.current===s?n:i}function N(n){return n=Kl(n),n!==null?Z(n):null}function Z(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Z(n);if(i!==null)return i;n=n.sibling}return null}var oe=e.unstable_scheduleCallback,le=e.unstable_cancelCallback,Q=e.unstable_shouldYield,Re=e.unstable_requestPaint,Ae=e.unstable_now,$e=e.unstable_getCurrentPriorityLevel,qe=e.unstable_ImmediatePriority,lt=e.unstable_UserBlockingPriority,dt=e.unstable_NormalPriority,Ke=e.unstable_LowPriority,Mt=e.unstable_IdlePriority,Rt=null,St=null;function cn(n){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:At,Qe=Math.log,ei=Math.LN2;function At(n){return n>>>=0,n===0?32:31-(Qe(n)/ei|0)|0}var un=64,ti=4194304;function Kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vi(n,i){var s=n.pendingLanes;if(s===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,T=s&268435455;if(T!==0){var U=T&~h;U!==0?c=Kt(U):(g&=T,g!==0&&(c=Kt(g)))}else T=s&~h,T!==0?c=Kt(T):g!==0&&(c=Kt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=s&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)s=31-mt(i),h=1<<s,c|=n[s],i&=~h;return c}function Lt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(n,i){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-mt(g),U=1<<T,V=h[T];V===-1?((U&s)===0||(U&c)!==0)&&(h[T]=Lt(U,i)):V<=i&&(n.expiredLanes|=U),g&=~U}}function Ni(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _n(){var n=un;return un<<=1,(un&4194240)===0&&(un=64),n}function Vn(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function En(n,i,s){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-mt(i),n[i]=s}function so(n,i){var s=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<s;){var h=31-mt(s),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,s&=~g}}function Zl(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var c=31-mt(s),h=1<<c;h&i|n[c]&i&&(n[c]|=i),s&=~h}}var kt=0;function wh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var bh,Ql,Eh,Th,Ah,Jl=!1,oo=[],er=null,tr=null,nr=null,ss=new Map,os=new Map,ir=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ch(n,i){switch(n){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ss.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(i.pointerId)}}function ls(n,i,s,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Ms(i),i!==null&&Ql(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function c0(n,i,s,c,h){switch(i){case"focusin":return er=ls(er,n,i,s,c,h),!0;case"dragenter":return tr=ls(tr,n,i,s,c,h),!0;case"mouseover":return nr=ls(nr,n,i,s,c,h),!0;case"pointerover":var g=h.pointerId;return ss.set(g,ls(ss.get(g)||null,n,i,s,c,h)),!0;case"gotpointercapture":return g=h.pointerId,os.set(g,ls(os.get(g)||null,n,i,s,c,h)),!0}return!1}function Rh(n){var i=kr(n.target);if(i!==null){var s=xi(i);if(s!==null){if(i=s.tag,i===13){if(i=ro(s),i!==null){n.blockedOn=i,Ah(n.priority,function(){Eh(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=tc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);Pt=c,s.target.dispatchEvent(c),Pt=null}else return i=Ms(s),i!==null&&Ql(i),n.blockedOn=s,!1;i.shift()}return!0}function Nh(n,i,s){lo(n)&&s.delete(i)}function u0(){Jl=!1,er!==null&&lo(er)&&(er=null),tr!==null&&lo(tr)&&(tr=null),nr!==null&&lo(nr)&&(nr=null),ss.forEach(Nh),os.forEach(Nh)}function cs(n,i){n.blockedOn===i&&(n.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,u0)))}function us(n){function i(h){return cs(h,n)}if(0<oo.length){cs(oo[0],n);for(var s=1;s<oo.length;s++){var c=oo[s];c.blockedOn===n&&(c.blockedOn=null)}}for(er!==null&&cs(er,n),tr!==null&&cs(tr,n),nr!==null&&cs(nr,n),ss.forEach(i),os.forEach(i),s=0;s<ir.length;s++)c=ir[s],c.blockedOn===n&&(c.blockedOn=null);for(;0<ir.length&&(s=ir[0],s.blockedOn===null);)Rh(s),s.blockedOn===null&&ir.shift()}var la=A.ReactCurrentBatchConfig,co=!0;function d0(n,i,s,c){var h=kt,g=la.transition;la.transition=null;try{kt=1,ec(n,i,s,c)}finally{kt=h,la.transition=g}}function h0(n,i,s,c){var h=kt,g=la.transition;la.transition=null;try{kt=4,ec(n,i,s,c)}finally{kt=h,la.transition=g}}function ec(n,i,s,c){if(co){var h=tc(n,i,s,c);if(h===null)vc(n,i,c,uo,s),Ch(n,c);else if(c0(h,n,i,s,c))c.stopPropagation();else if(Ch(n,c),i&4&&-1<l0.indexOf(n)){for(;h!==null;){var g=Ms(h);if(g!==null&&bh(g),g=tc(n,i,s,c),g===null&&vc(n,i,c,uo,s),g===h)break;h=g}h!==null&&c.stopPropagation()}else vc(n,i,c,null,s)}}var uo=null;function tc(n,i,s,c){if(uo=null,n=$(c),n=kr(n),n!==null)if(i=xi(n),i===null)n=null;else if(s=i.tag,s===13){if(n=ro(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return uo=n,null}function Ph(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($e()){case qe:return 1;case lt:return 4;case dt:case Ke:return 16;case Mt:return 536870912;default:return 16}default:return 16}}var rr=null,nc=null,ho=null;function kh(){if(ho)return ho;var n,i=nc,s=i.length,c,h="value"in rr?rr.value:rr.textContent,g=h.length;for(n=0;n<s&&i[n]===h[n];n++);var T=s-n;for(c=1;c<=T&&i[s-c]===h[g-c];c++);return ho=h.slice(n,1<c?1-c:void 0)}function fo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function po(){return!0}function Dh(){return!1}function In(n){function i(s,c,h,g,T){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(s=n[U],this[U]=s?s(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?po:Dh,this.isPropagationStopped=Dh,this}return D(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),i}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=In(ca),ds=D({},ca,{view:0,detail:0}),f0=In(ds),rc,ac,hs,mo=D({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==hs&&(hs&&n.type==="mousemove"?(rc=n.screenX-hs.screenX,ac=n.screenY-hs.screenY):ac=rc=0,hs=n),rc)},movementY:function(n){return"movementY"in n?n.movementY:ac}}),Lh=In(mo),p0=D({},mo,{dataTransfer:0}),m0=In(p0),g0=D({},ds,{relatedTarget:0}),sc=In(g0),x0=D({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=In(x0),y0=D({},ca,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_0=In(y0),S0=D({},ca,{data:0}),Ih=In(S0),M0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=b0[n])?!!i[n]:!1}function oc(){return E0}var T0=D({},ds,{key:function(n){if(n.key){var i=M0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=fo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?w0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(n){return n.type==="keypress"?fo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?fo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),A0=In(T0),C0=D({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=In(C0),R0=D({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),N0=In(R0),P0=D({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=In(P0),D0=D({},mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=In(D0),I0=[9,13,27,32],lc=d&&"CompositionEvent"in window,fs=null;d&&"documentMode"in document&&(fs=document.documentMode);var U0=d&&"TextEvent"in window&&!fs,Fh=d&&(!lc||fs&&8<fs&&11>=fs),Oh=" ",Bh=!1;function zh(n,i){switch(n){case"keyup":return I0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ua=!1;function F0(n,i){switch(n){case"compositionend":return Hh(i);case"keypress":return i.which!==32?null:(Bh=!0,Oh);case"textInput":return n=i.data,n===Oh&&Bh?null:n;default:return null}}function O0(n,i){if(ua)return n==="compositionend"||!lc&&zh(n,i)?(n=kh(),ho=nc=rr=null,ua=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fh&&i.locale!=="ko"?null:i.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!B0[n.type]:i==="textarea"}function Gh(n,i,s,c){Le(c),i=_o(i,"onChange"),0<i.length&&(s=new ic("onChange","change",null,s,c),n.push({event:s,listeners:i}))}var ps=null,ms=null;function z0(n){lf(n,0)}function go(n){var i=ma(n);if(We(i))return n}function H0(n,i){if(n==="change")return i}var jh=!1;if(d){var cc;if(d){var uc="oninput"in document;if(!uc){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),uc=typeof Wh.oninput=="function"}cc=uc}else cc=!1;jh=cc&&(!document.documentMode||9<document.documentMode)}function Xh(){ps&&(ps.detachEvent("onpropertychange",qh),ms=ps=null)}function qh(n){if(n.propertyName==="value"&&go(ms)){var i=[];Gh(i,ms,n,$(n)),bn(z0,i)}}function V0(n,i,s){n==="focusin"?(Xh(),ps=i,ms=s,ps.attachEvent("onpropertychange",qh)):n==="focusout"&&Xh()}function G0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return go(ms)}function j0(n,i){if(n==="click")return go(i)}function W0(n,i){if(n==="input"||n==="change")return go(i)}function X0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:X0;function gs(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!p.call(i,h)||!ni(n[h],i[h]))return!1}return!0}function Yh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $h(n,i){var s=Yh(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=i&&c>=i)return{node:s,offset:i-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Yh(s)}}function Kh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Kh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Zh(){for(var n=window,i=ot();i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=ot(n.document)}return i}function dc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function q0(n){var i=Zh(),s=n.focusedElem,c=n.selectionRange;if(i!==s&&s&&s.ownerDocument&&Kh(s.ownerDocument.documentElement,s)){if(c!==null&&dc(s)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(n,s.value.length);else if(n=(i=s.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=s.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=$h(s,g);var T=$h(s,c);h&&T&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=s;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)n=i[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Y0=d&&"documentMode"in document&&11>=document.documentMode,da=null,hc=null,xs=null,fc=!1;function Qh(n,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;fc||da==null||da!==ot(c)||(c=da,"selectionStart"in c&&dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),xs&&gs(xs,c)||(xs=c,c=_o(hc,"onSelect"),0<c.length&&(i=new ic("onSelect","select",null,i,s),n.push({event:i,listeners:c}),i.target=da)))}function xo(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var ha={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},pc={},Jh={};d&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function vo(n){if(pc[n])return pc[n];if(!ha[n])return n;var i=ha[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in Jh)return pc[n]=i[s];return n}var ef=vo("animationend"),tf=vo("animationiteration"),nf=vo("animationstart"),rf=vo("transitionend"),af=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,i){af.set(n,i),l(i,[n])}for(var mc=0;mc<sf.length;mc++){var gc=sf[mc],$0=gc.toLowerCase(),K0=gc[0].toUpperCase()+gc.slice(1);ar($0,"on"+K0)}ar(ef,"onAnimationEnd"),ar(tf,"onAnimationIteration"),ar(nf,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(rf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function of(n,i,s){var c=n.type||"unknown-event";n.currentTarget=s,io(c,i,void 0,n),n.currentTarget=null}function lf(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var U=c[T],V=U.instance,se=U.currentTarget;if(U=U.listener,V!==g&&h.isPropagationStopped())break e;of(h,U,se),g=V}else for(T=0;T<c.length;T++){if(U=c[T],V=U.instance,se=U.currentTarget,U=U.listener,V!==g&&h.isPropagationStopped())break e;of(h,U,se),g=V}}}if(Pr)throw n=Ji,Pr=!1,Ji=null,n}function Ft(n,i){var s=i[bc];s===void 0&&(s=i[bc]=new Set);var c=n+"__bubble";s.has(c)||(cf(i,n,2,!1),s.add(c))}function xc(n,i,s){var c=0;i&&(c|=4),cf(s,n,c,i)}var yo="_reactListening"+Math.random().toString(36).slice(2);function ys(n){if(!n[yo]){n[yo]=!0,r.forEach(function(s){s!=="selectionchange"&&(Z0.has(s)||xc(s,!1,n),xc(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[yo]||(i[yo]=!0,xc("selectionchange",!1,i))}}function cf(n,i,s,c){switch(Ph(i)){case 1:var h=d0;break;case 4:h=h0;break;default:h=ec}s=h.bind(null,i,s,n),h=void 0,!sa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,s,{capture:!0,passive:h}):n.addEventListener(i,s,!0):h!==void 0?n.addEventListener(i,s,{passive:h}):n.addEventListener(i,s,!1)}function vc(n,i,s,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var U=c.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(T===4)for(T=c.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;T=T.return}for(;U!==null;){if(T=kr(U),T===null)return;if(V=T.tag,V===5||V===6){c=g=T;continue e}U=U.parentNode}}c=c.return}bn(function(){var se=g,we=$(s),Te=[];e:{var Me=af.get(n);if(Me!==void 0){var Be=ic,je=n;switch(n){case"keypress":if(fo(s)===0)break e;case"keydown":case"keyup":Be=A0;break;case"focusin":je="focus",Be=sc;break;case"focusout":je="blur",Be=sc;break;case"beforeblur":case"afterblur":Be=sc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=N0;break;case ef:case tf:case nf:Be=v0;break;case rf:Be=k0;break;case"scroll":Be=f0;break;case"wheel":Be=L0;break;case"copy":case"cut":case"paste":Be=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Uh}var Ye=(i&4)!==0,Xt=!Ye&&n==="scroll",ee=Ye?Me!==null?Me+"Capture":null:Me;Ye=[];for(var W=se,re;W!==null;){re=W;var Ce=re.stateNode;if(re.tag===5&&Ce!==null&&(re=Ce,ee!==null&&(Ce=yn(W,ee),Ce!=null&&Ye.push(_s(W,Ce,re)))),Xt)break;W=W.return}0<Ye.length&&(Me=new Be(Me,je,null,s,we),Te.push({event:Me,listeners:Ye}))}}if((i&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",Me&&s!==Pt&&(je=s.relatedTarget||s.fromElement)&&(kr(je)||je[Pi]))break e;if((Be||Me)&&(Me=we.window===we?we:(Me=we.ownerDocument)?Me.defaultView||Me.parentWindow:window,Be?(je=s.relatedTarget||s.toElement,Be=se,je=je?kr(je):null,je!==null&&(Xt=xi(je),je!==Xt||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=se),Be!==je)){if(Ye=Lh,Ce="onMouseLeave",ee="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Uh,Ce="onPointerLeave",ee="onPointerEnter",W="pointer"),Xt=Be==null?Me:ma(Be),re=je==null?Me:ma(je),Me=new Ye(Ce,W+"leave",Be,s,we),Me.target=Xt,Me.relatedTarget=re,Ce=null,kr(we)===se&&(Ye=new Ye(ee,W+"enter",je,s,we),Ye.target=re,Ye.relatedTarget=Xt,Ce=Ye),Xt=Ce,Be&&je)t:{for(Ye=Be,ee=je,W=0,re=Ye;re;re=fa(re))W++;for(re=0,Ce=ee;Ce;Ce=fa(Ce))re++;for(;0<W-re;)Ye=fa(Ye),W--;for(;0<re-W;)ee=fa(ee),re--;for(;W--;){if(Ye===ee||ee!==null&&Ye===ee.alternate)break t;Ye=fa(Ye),ee=fa(ee)}Ye=null}else Ye=null;Be!==null&&uf(Te,Me,Be,Ye,!1),je!==null&&Xt!==null&&uf(Te,Xt,je,Ye,!0)}}e:{if(Me=se?ma(se):window,Be=Me.nodeName&&Me.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Me.type==="file")var Ze=H0;else if(Vh(Me))if(jh)Ze=W0;else{Ze=G0;var it=V0}else(Be=Me.nodeName)&&Be.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(Ze=j0);if(Ze&&(Ze=Ze(n,se))){Gh(Te,Ze,s,we);break e}it&&it(n,Me,se),n==="focusout"&&(it=Me._wrapperState)&&it.controlled&&Me.type==="number"&&vt(Me,"number",Me.value)}switch(it=se?ma(se):window,n){case"focusin":(Vh(it)||it.contentEditable==="true")&&(da=it,hc=se,xs=null);break;case"focusout":xs=hc=da=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Qh(Te,s,we);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":Qh(Te,s,we)}var rt;if(lc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else ua?zh(n,s)&&(ct="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ct="onCompositionStart");ct&&(Fh&&s.locale!=="ko"&&(ua||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&ua&&(rt=kh()):(rr=we,nc="value"in rr?rr.value:rr.textContent,ua=!0)),it=_o(se,ct),0<it.length&&(ct=new Ih(ct,n,null,s,we),Te.push({event:ct,listeners:it}),rt?ct.data=rt:(rt=Hh(s),rt!==null&&(ct.data=rt)))),(rt=U0?F0(n,s):O0(n,s))&&(se=_o(se,"onBeforeInput"),0<se.length&&(we=new Ih("onBeforeInput","beforeinput",null,s,we),Te.push({event:we,listeners:se}),we.data=rt))}lf(Te,i)})}function _s(n,i,s){return{instance:n,listener:i,currentTarget:s}}function _o(n,i){for(var s=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=yn(n,s),g!=null&&c.unshift(_s(n,g,h)),g=yn(n,i),g!=null&&c.push(_s(n,g,h))),n=n.return}return c}function fa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function uf(n,i,s,c,h){for(var g=i._reactName,T=[];s!==null&&s!==c;){var U=s,V=U.alternate,se=U.stateNode;if(V!==null&&V===c)break;U.tag===5&&se!==null&&(U=se,h?(V=yn(s,g),V!=null&&T.unshift(_s(s,V,U))):h||(V=yn(s,g),V!=null&&T.push(_s(s,V,U)))),s=s.return}T.length!==0&&n.push({event:i,listeners:T})}var Q0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function df(n){return(typeof n=="string"?n:""+n).replace(Q0,`
`).replace(J0,"")}function So(n,i,s){if(i=df(i),df(n)!==i&&s)throw Error(t(425))}function Mo(){}var yc=null,_c=null;function Sc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,hf=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof hf<"u"?function(n){return hf.resolve(null).then(n).catch(nx)}:Mc;function nx(n){setTimeout(function(){throw n})}function wc(n,i){var s=i,c=0;do{var h=s.nextSibling;if(n.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"){if(c===0){n.removeChild(h),us(i);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=h}while(s);us(i)}function sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ff(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}var pa=Math.random().toString(36).slice(2),yi="__reactFiber$"+pa,Ss="__reactProps$"+pa,Pi="__reactContainer$"+pa,bc="__reactEvents$"+pa,ix="__reactListeners$"+pa,rx="__reactHandles$"+pa;function kr(n){var i=n[yi];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Pi]||s[yi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=ff(n);n!==null;){if(s=n[yi])return s;n=ff(n)}return i}n=s,s=n.parentNode}return null}function Ms(n){return n=n[yi]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ma(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wo(n){return n[Ss]||null}var Ec=[],ga=-1;function or(n){return{current:n}}function Ot(n){0>ga||(n.current=Ec[ga],Ec[ga]=null,ga--)}function It(n,i){ga++,Ec[ga]=n.current,n.current=i}var lr={},dn=or(lr),Tn=or(!1),Dr=lr;function xa(n,i){var s=n.type.contextTypes;if(!s)return lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in s)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function An(n){return n=n.childContextTypes,n!=null}function bo(){Ot(Tn),Ot(dn)}function pf(n,i,s){if(dn.current!==lr)throw Error(t(168));It(dn,i),It(Tn,s)}function mf(n,i,s){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ie(n)||"Unknown",h));return D({},s,c)}function Eo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lr,Dr=dn.current,It(dn,n),It(Tn,Tn.current),!0}function gf(n,i,s){var c=n.stateNode;if(!c)throw Error(t(169));s?(n=mf(n,i,Dr),c.__reactInternalMemoizedMergedChildContext=n,Ot(Tn),Ot(dn),It(dn,n)):Ot(Tn),It(Tn,s)}var ki=null,To=!1,Tc=!1;function xf(n){ki===null?ki=[n]:ki.push(n)}function ax(n){To=!0,xf(n)}function cr(){if(!Tc&&ki!==null){Tc=!0;var n=0,i=kt;try{var s=ki;for(kt=1;n<s.length;n++){var c=s[n];do c=c(!0);while(c!==null)}ki=null,To=!1}catch(h){throw ki!==null&&(ki=ki.slice(n+1)),oe(qe,cr),h}finally{kt=i,Tc=!1}}return null}var va=[],ya=0,Ao=null,Co=0,Gn=[],jn=0,Lr=null,Di=1,Li="";function Ir(n,i){va[ya++]=Co,va[ya++]=Ao,Ao=n,Co=i}function vf(n,i,s){Gn[jn++]=Di,Gn[jn++]=Li,Gn[jn++]=Lr,Lr=n;var c=Di;n=Li;var h=32-mt(c)-1;c&=~(1<<h),s+=1;var g=32-mt(i)+h;if(30<g){var T=h-h%5;g=(c&(1<<T)-1).toString(32),c>>=T,h-=T,Di=1<<32-mt(i)+h|s<<h|c,Li=g+n}else Di=1<<g|s<<h|c,Li=n}function Ac(n){n.return!==null&&(Ir(n,1),vf(n,1,0))}function Cc(n){for(;n===Ao;)Ao=va[--ya],va[ya]=null,Co=va[--ya],va[ya]=null;for(;n===Lr;)Lr=Gn[--jn],Gn[jn]=null,Li=Gn[--jn],Gn[jn]=null,Di=Gn[--jn],Gn[jn]=null}var Un=null,Fn=null,zt=!1,ii=null;function yf(n,i){var s=Yn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=n,i=n.deletions,i===null?(n.deletions=[s],n.flags|=16):i.push(s)}function _f(n,i){switch(n.tag){case 5:var s=n.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Un=n,Fn=sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Un=n,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Lr!==null?{id:Di,overflow:Li}:null,n.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Yn(18,null,null,0),s.stateNode=i,s.return=n,n.child=s,Un=n,Fn=null,!0):!1;default:return!1}}function Rc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nc(n){if(zt){var i=Fn;if(i){var s=i;if(!_f(n,i)){if(Rc(n))throw Error(t(418));i=sr(s.nextSibling);var c=Un;i&&_f(n,i)?yf(c,s):(n.flags=n.flags&-4097|2,zt=!1,Un=n)}}else{if(Rc(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Un=n}}}function Sf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function Ro(n){if(n!==Un)return!1;if(!zt)return Sf(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Sc(n.type,n.memoizedProps)),i&&(i=Fn)){if(Rc(n))throw Mf(),Error(t(418));for(;i;)yf(n,i),i=sr(i.nextSibling)}if(Sf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"){if(i===0){Fn=sr(n.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}n=n.nextSibling}Fn=null}}else Fn=Un?sr(n.stateNode.nextSibling):null;return!0}function Mf(){for(var n=Fn;n;)n=sr(n.nextSibling)}function _a(){Fn=Un=null,zt=!1}function Pc(n){ii===null?ii=[n]:ii.push(n)}var sx=A.ReactCurrentBatchConfig;function ws(n,i,s){if(n=s.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(t(309));var c=s.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var U=h.refs;T===null?delete U[g]:U[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!s._owner)throw Error(t(290,n))}return n}function No(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function wf(n){var i=n._init;return i(n._payload)}function bf(n){function i(ee,W){if(n){var re=ee.deletions;re===null?(ee.deletions=[W],ee.flags|=16):re.push(W)}}function s(ee,W){if(!n)return null;for(;W!==null;)i(ee,W),W=W.sibling;return null}function c(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function h(ee,W){return ee=xr(ee,W),ee.index=0,ee.sibling=null,ee}function g(ee,W,re){return ee.index=re,n?(re=ee.alternate,re!==null?(re=re.index,re<W?(ee.flags|=2,W):re):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function T(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function U(ee,W,re,Ce){return W===null||W.tag!==6?(W=Mu(re,ee.mode,Ce),W.return=ee,W):(W=h(W,re),W.return=ee,W)}function V(ee,W,re,Ce){var Ze=re.type;return Ze===O?we(ee,W,re.props.children,Ce,re.key):W!==null&&(W.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ue&&wf(Ze)===W.type)?(Ce=h(W,re.props),Ce.ref=ws(ee,W,re),Ce.return=ee,Ce):(Ce=el(re.type,re.key,re.props,null,ee.mode,Ce),Ce.ref=ws(ee,W,re),Ce.return=ee,Ce)}function se(ee,W,re,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==re.containerInfo||W.stateNode.implementation!==re.implementation?(W=wu(re,ee.mode,Ce),W.return=ee,W):(W=h(W,re.children||[]),W.return=ee,W)}function we(ee,W,re,Ce,Ze){return W===null||W.tag!==7?(W=Gr(re,ee.mode,Ce,Ze),W.return=ee,W):(W=h(W,re),W.return=ee,W)}function Te(ee,W,re){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Mu(""+W,ee.mode,re),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case q:return re=el(W.type,W.key,W.props,null,ee.mode,re),re.ref=ws(ee,null,W),re.return=ee,re;case F:return W=wu(W,ee.mode,re),W.return=ee,W;case ue:var Ce=W._init;return Te(ee,Ce(W._payload),re)}if(Fe(W)||me(W))return W=Gr(W,ee.mode,re,null),W.return=ee,W;No(ee,W)}return null}function Me(ee,W,re,Ce){var Ze=W!==null?W.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Ze!==null?null:U(ee,W,""+re,Ce);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case q:return re.key===Ze?V(ee,W,re,Ce):null;case F:return re.key===Ze?se(ee,W,re,Ce):null;case ue:return Ze=re._init,Me(ee,W,Ze(re._payload),Ce)}if(Fe(re)||me(re))return Ze!==null?null:we(ee,W,re,Ce,null);No(ee,re)}return null}function Be(ee,W,re,Ce,Ze){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return ee=ee.get(re)||null,U(W,ee,""+Ce,Ze);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case q:return ee=ee.get(Ce.key===null?re:Ce.key)||null,V(W,ee,Ce,Ze);case F:return ee=ee.get(Ce.key===null?re:Ce.key)||null,se(W,ee,Ce,Ze);case ue:var it=Ce._init;return Be(ee,W,re,it(Ce._payload),Ze)}if(Fe(Ce)||me(Ce))return ee=ee.get(re)||null,we(W,ee,Ce,Ze,null);No(W,Ce)}return null}function je(ee,W,re,Ce){for(var Ze=null,it=null,rt=W,ct=W=0,an=null;rt!==null&&ct<re.length;ct++){rt.index>ct?(an=rt,rt=null):an=rt.sibling;var Ct=Me(ee,rt,re[ct],Ce);if(Ct===null){rt===null&&(rt=an);break}n&&rt&&Ct.alternate===null&&i(ee,rt),W=g(Ct,W,ct),it===null?Ze=Ct:it.sibling=Ct,it=Ct,rt=an}if(ct===re.length)return s(ee,rt),zt&&Ir(ee,ct),Ze;if(rt===null){for(;ct<re.length;ct++)rt=Te(ee,re[ct],Ce),rt!==null&&(W=g(rt,W,ct),it===null?Ze=rt:it.sibling=rt,it=rt);return zt&&Ir(ee,ct),Ze}for(rt=c(ee,rt);ct<re.length;ct++)an=Be(rt,ee,ct,re[ct],Ce),an!==null&&(n&&an.alternate!==null&&rt.delete(an.key===null?ct:an.key),W=g(an,W,ct),it===null?Ze=an:it.sibling=an,it=an);return n&&rt.forEach(function(vr){return i(ee,vr)}),zt&&Ir(ee,ct),Ze}function Ye(ee,W,re,Ce){var Ze=me(re);if(typeof Ze!="function")throw Error(t(150));if(re=Ze.call(re),re==null)throw Error(t(151));for(var it=Ze=null,rt=W,ct=W=0,an=null,Ct=re.next();rt!==null&&!Ct.done;ct++,Ct=re.next()){rt.index>ct?(an=rt,rt=null):an=rt.sibling;var vr=Me(ee,rt,Ct.value,Ce);if(vr===null){rt===null&&(rt=an);break}n&&rt&&vr.alternate===null&&i(ee,rt),W=g(vr,W,ct),it===null?Ze=vr:it.sibling=vr,it=vr,rt=an}if(Ct.done)return s(ee,rt),zt&&Ir(ee,ct),Ze;if(rt===null){for(;!Ct.done;ct++,Ct=re.next())Ct=Te(ee,Ct.value,Ce),Ct!==null&&(W=g(Ct,W,ct),it===null?Ze=Ct:it.sibling=Ct,it=Ct);return zt&&Ir(ee,ct),Ze}for(rt=c(ee,rt);!Ct.done;ct++,Ct=re.next())Ct=Be(rt,ee,ct,Ct.value,Ce),Ct!==null&&(n&&Ct.alternate!==null&&rt.delete(Ct.key===null?ct:Ct.key),W=g(Ct,W,ct),it===null?Ze=Ct:it.sibling=Ct,it=Ct);return n&&rt.forEach(function(Bx){return i(ee,Bx)}),zt&&Ir(ee,ct),Ze}function Xt(ee,W,re,Ce){if(typeof re=="object"&&re!==null&&re.type===O&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case q:e:{for(var Ze=re.key,it=W;it!==null;){if(it.key===Ze){if(Ze=re.type,Ze===O){if(it.tag===7){s(ee,it.sibling),W=h(it,re.props.children),W.return=ee,ee=W;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ue&&wf(Ze)===it.type){s(ee,it.sibling),W=h(it,re.props),W.ref=ws(ee,it,re),W.return=ee,ee=W;break e}s(ee,it);break}else i(ee,it);it=it.sibling}re.type===O?(W=Gr(re.props.children,ee.mode,Ce,re.key),W.return=ee,ee=W):(Ce=el(re.type,re.key,re.props,null,ee.mode,Ce),Ce.ref=ws(ee,W,re),Ce.return=ee,ee=Ce)}return T(ee);case F:e:{for(it=re.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===re.containerInfo&&W.stateNode.implementation===re.implementation){s(ee,W.sibling),W=h(W,re.children||[]),W.return=ee,ee=W;break e}else{s(ee,W);break}else i(ee,W);W=W.sibling}W=wu(re,ee.mode,Ce),W.return=ee,ee=W}return T(ee);case ue:return it=re._init,Xt(ee,W,it(re._payload),Ce)}if(Fe(re))return je(ee,W,re,Ce);if(me(re))return Ye(ee,W,re,Ce);No(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,W!==null&&W.tag===6?(s(ee,W.sibling),W=h(W,re),W.return=ee,ee=W):(s(ee,W),W=Mu(re,ee.mode,Ce),W.return=ee,ee=W),T(ee)):s(ee,W)}return Xt}var Sa=bf(!0),Ef=bf(!1),Po=or(null),ko=null,Ma=null,kc=null;function Dc(){kc=Ma=ko=null}function Lc(n){var i=Po.current;Ot(Po),n._currentValue=i}function Ic(n,i,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===s)break;n=n.return}}function wa(n,i){ko=n,kc=Ma=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Cn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(kc!==n)if(n={context:n,memoizedValue:i,next:null},Ma===null){if(ko===null)throw Error(t(308));Ma=n,ko.dependencies={lanes:0,firstContext:n}}else Ma=Ma.next=n;return i}var Ur=null;function Uc(n){Ur===null?Ur=[n]:Ur.push(n)}function Tf(n,i,s,c){var h=i.interleaved;return h===null?(s.next=s,Uc(i)):(s.next=h.next,h.next=s),i.interleaved=s,Ii(n,c)}function Ii(n,i){n.lanes|=i;var s=n.alternate;for(s!==null&&(s.lanes|=i),s=n,n=n.return;n!==null;)n.childLanes|=i,s=n.alternate,s!==null&&(s.childLanes|=i),s=n,n=n.return;return s.tag===3?s.stateNode:null}var ur=!1;function Fc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Af(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function dr(n,i,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ii(n,s)}return h=c.interleaved,h===null?(i.next=i,Uc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ii(n,s)}function Do(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,Zl(n,s)}}function Cf(n,i){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var T={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};g===null?h=g=T:g=g.next=T,s=s.next}while(s!==null);g===null?h=g=i:g=g.next=i}else h=g=i;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}function Lo(n,i,s,c){var h=n.updateQueue;ur=!1;var g=h.firstBaseUpdate,T=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var V=U,se=V.next;V.next=null,T===null?g=se:T.next=se,T=V;var we=n.alternate;we!==null&&(we=we.updateQueue,U=we.lastBaseUpdate,U!==T&&(U===null?we.firstBaseUpdate=se:U.next=se,we.lastBaseUpdate=V))}if(g!==null){var Te=h.baseState;T=0,we=se=V=null,U=g;do{var Me=U.lane,Be=U.eventTime;if((c&Me)===Me){we!==null&&(we=we.next={eventTime:Be,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var je=n,Ye=U;switch(Me=i,Be=s,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){Te=je.call(Be,Te,Me);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,Me=typeof je=="function"?je.call(Be,Te,Me):je,Me==null)break e;Te=D({},Te,Me);break e;case 2:ur=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,Me=h.effects,Me===null?h.effects=[U]:Me.push(U))}else Be={eventTime:Be,lane:Me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},we===null?(se=we=Be,V=Te):we=we.next=Be,T|=Me;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;Me=U,U=Me.next,Me.next=null,h.lastBaseUpdate=Me,h.shared.pending=null}}while(!0);if(we===null&&(V=Te),h.baseState=V,h.firstBaseUpdate=se,h.lastBaseUpdate=we,i=h.shared.interleaved,i!==null){h=i;do T|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Br|=T,n.lanes=T,n.memoizedState=Te}}function Rf(n,i,s){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=s,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var bs={},_i=or(bs),Es=or(bs),Ts=or(bs);function Fr(n){if(n===bs)throw Error(t(174));return n}function Oc(n,i){switch(It(Ts,i),It(Es,n),It(_i,bs),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Xe(i,n)}Ot(_i),It(_i,i)}function ba(){Ot(_i),Ot(Es),Ot(Ts)}function Nf(n){Fr(Ts.current);var i=Fr(_i.current),s=Xe(i,n.type);i!==s&&(It(Es,n),It(_i,s))}function Bc(n){Es.current===n&&(Ot(_i),Ot(Es))}var Vt=or(0);function Io(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zc=[];function Hc(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var Uo=A.ReactCurrentDispatcher,Vc=A.ReactCurrentBatchConfig,Or=0,Gt=null,Zt=null,nn=null,Fo=!1,As=!1,Cs=0,ox=0;function hn(){throw Error(t(321))}function Gc(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!ni(n[s],i[s]))return!1;return!0}function jc(n,i,s,c,h,g){if(Or=g,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Uo.current=n===null||n.memoizedState===null?dx:hx,n=s(c,h),As){g=0;do{if(As=!1,Cs=0,25<=g)throw Error(t(301));g+=1,nn=Zt=null,i.updateQueue=null,Uo.current=fx,n=s(c,h)}while(As)}if(Uo.current=zo,i=Zt!==null&&Zt.next!==null,Or=0,nn=Zt=Gt=null,Fo=!1,i)throw Error(t(300));return n}function Wc(){var n=Cs!==0;return Cs=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Gt.memoizedState=nn=n:nn=nn.next=n,nn}function Xn(){if(Zt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=nn===null?Gt.memoizedState:nn.next;if(i!==null)nn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},nn===null?Gt.memoizedState=nn=n:nn=nn.next=n}return nn}function Rs(n,i){return typeof i=="function"?i(n):i}function Xc(n){var i=Xn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var c=Zt,h=c.baseQueue,g=s.pending;if(g!==null){if(h!==null){var T=h.next;h.next=g.next,g.next=T}c.baseQueue=h=g,s.pending=null}if(h!==null){g=h.next,c=c.baseState;var U=T=null,V=null,se=g;do{var we=se.lane;if((Or&we)===we)V!==null&&(V=V.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),c=se.hasEagerState?se.eagerState:n(c,se.action);else{var Te={lane:we,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};V===null?(U=V=Te,T=c):V=V.next=Te,Gt.lanes|=we,Br|=we}se=se.next}while(se!==null&&se!==g);V===null?T=c:V.next=U,ni(c,i.memoizedState)||(Cn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=V,s.lastRenderedState=c}if(n=s.interleaved,n!==null){h=n;do g=h.lane,Gt.lanes|=g,Br|=g,h=h.next;while(h!==n)}else h===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function qc(n){var i=Xn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,g=i.memoizedState;if(h!==null){s.pending=null;var T=h=h.next;do g=n(g,T.action),T=T.next;while(T!==h);ni(g,i.memoizedState)||(Cn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),s.lastRenderedState=g}return[g,c]}function Pf(){}function kf(n,i){var s=Gt,c=Xn(),h=i(),g=!ni(c.memoizedState,h);if(g&&(c.memoizedState=h,Cn=!0),c=c.queue,Yc(If.bind(null,s,c,n),[n]),c.getSnapshot!==i||g||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Ns(9,Lf.bind(null,s,c,h,i),void 0,null),rn===null)throw Error(t(349));(Or&30)!==0||Df(s,i,h)}return h}function Df(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Lf(n,i,s,c){i.value=s,i.getSnapshot=c,Uf(i)&&Ff(n)}function If(n,i,s){return s(function(){Uf(i)&&Ff(n)})}function Uf(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!ni(n,s)}catch{return!0}}function Ff(n){var i=Ii(n,1);i!==null&&oi(i,n,1,-1)}function Of(n){var i=Si();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:n},i.queue=n,n=n.dispatch=ux.bind(null,Gt,n),[i.memoizedState,n]}function Ns(n,i,s,c){return n={tag:n,create:i,destroy:s,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(s=i.lastEffect,s===null?i.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,i.lastEffect=n)),n}function Bf(){return Xn().memoizedState}function Oo(n,i,s,c){var h=Si();Gt.flags|=n,h.memoizedState=Ns(1|i,s,void 0,c===void 0?null:c)}function Bo(n,i,s,c){var h=Xn();c=c===void 0?null:c;var g=void 0;if(Zt!==null){var T=Zt.memoizedState;if(g=T.destroy,c!==null&&Gc(c,T.deps)){h.memoizedState=Ns(i,s,g,c);return}}Gt.flags|=n,h.memoizedState=Ns(1|i,s,g,c)}function zf(n,i){return Oo(8390656,8,n,i)}function Yc(n,i){return Bo(2048,8,n,i)}function Hf(n,i){return Bo(4,2,n,i)}function Vf(n,i){return Bo(4,4,n,i)}function Gf(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function jf(n,i,s){return s=s!=null?s.concat([n]):null,Bo(4,4,Gf.bind(null,i,n),s)}function $c(){}function Wf(n,i){var s=Xn();i=i===void 0?null:i;var c=s.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(s.memoizedState=[n,i],n)}function Xf(n,i){var s=Xn();i=i===void 0?null:i;var c=s.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(n=n(),s.memoizedState=[n,i],n)}function qf(n,i,s){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=s):(ni(s,i)||(s=_n(),Gt.lanes|=s,Br|=s,n.baseState=!0),i)}function lx(n,i){var s=kt;kt=s!==0&&4>s?s:4,n(!0);var c=Vc.transition;Vc.transition={};try{n(!1),i()}finally{kt=s,Vc.transition=c}}function Yf(){return Xn().memoizedState}function cx(n,i,s){var c=mr(n);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},$f(n))Kf(i,s);else if(s=Tf(n,i,s,c),s!==null){var h=Mn();oi(s,n,c,h),Zf(s,i,c)}}function ux(n,i,s){var c=mr(n),h={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if($f(n))Kf(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,U=g(T,s);if(h.hasEagerState=!0,h.eagerState=U,ni(U,T)){var V=i.interleaved;V===null?(h.next=h,Uc(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}finally{}s=Tf(n,i,h,c),s!==null&&(h=Mn(),oi(s,n,c,h),Zf(s,i,c))}}function $f(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function Kf(n,i){As=Fo=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function Zf(n,i,s){if((s&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,Zl(n,s)}}var zo={readContext:Wn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},dx={readContext:Wn,useCallback:function(n,i){return Si().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:zf,useImperativeHandle:function(n,i,s){return s=s!=null?s.concat([n]):null,Oo(4194308,4,Gf.bind(null,i,n),s)},useLayoutEffect:function(n,i){return Oo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Oo(4,2,n,i)},useMemo:function(n,i){var s=Si();return i=i===void 0?null:i,n=n(),s.memoizedState=[n,i],n},useReducer:function(n,i,s){var c=Si();return i=s!==void 0?s(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=cx.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=Si();return n={current:n},i.memoizedState=n},useState:Of,useDebugValue:$c,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=Of(!1),i=n[0];return n=lx.bind(null,n[1]),Si().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,s){var c=Gt,h=Si();if(zt){if(s===void 0)throw Error(t(407));s=s()}else{if(s=i(),rn===null)throw Error(t(349));(Or&30)!==0||Df(c,i,s)}h.memoizedState=s;var g={value:s,getSnapshot:i};return h.queue=g,zf(If.bind(null,c,g,n),[n]),c.flags|=2048,Ns(9,Lf.bind(null,c,g,s,i),void 0,null),s},useId:function(){var n=Si(),i=rn.identifierPrefix;if(zt){var s=Li,c=Di;s=(c&~(1<<32-mt(c)-1)).toString(32)+s,i=":"+i+"R"+s,s=Cs++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=ox++,i=":"+i+"r"+s.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},hx={readContext:Wn,useCallback:Wf,useContext:Wn,useEffect:Yc,useImperativeHandle:jf,useInsertionEffect:Hf,useLayoutEffect:Vf,useMemo:Xf,useReducer:Xc,useRef:Bf,useState:function(){return Xc(Rs)},useDebugValue:$c,useDeferredValue:function(n){var i=Xn();return qf(i,Zt.memoizedState,n)},useTransition:function(){var n=Xc(Rs)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Pf,useSyncExternalStore:kf,useId:Yf,unstable_isNewReconciler:!1},fx={readContext:Wn,useCallback:Wf,useContext:Wn,useEffect:Yc,useImperativeHandle:jf,useInsertionEffect:Hf,useLayoutEffect:Vf,useMemo:Xf,useReducer:qc,useRef:Bf,useState:function(){return qc(Rs)},useDebugValue:$c,useDeferredValue:function(n){var i=Xn();return Zt===null?i.memoizedState=n:qf(i,Zt.memoizedState,n)},useTransition:function(){var n=qc(Rs)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Pf,useSyncExternalStore:kf,useId:Yf,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=D({},i),n=n.defaultProps;for(var s in n)i[s]===void 0&&(i[s]=n[s]);return i}return i}function Kc(n,i,s,c){i=n.memoizedState,s=s(c,i),s=s==null?i:D({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Ho={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,s){n=n._reactInternals;var c=Mn(),h=mr(n),g=Ui(c,h);g.payload=i,s!=null&&(g.callback=s),i=dr(n,g,h),i!==null&&(oi(i,n,h,c),Do(i,n,h))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var c=Mn(),h=mr(n),g=Ui(c,h);g.tag=1,g.payload=i,s!=null&&(g.callback=s),i=dr(n,g,h),i!==null&&(oi(i,n,h,c),Do(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=Mn(),c=mr(n),h=Ui(s,c);h.tag=2,i!=null&&(h.callback=i),i=dr(n,h,c),i!==null&&(oi(i,n,c,s),Do(i,n,c))}};function Qf(n,i,s,c,h,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!gs(s,c)||!gs(h,g):!0}function Jf(n,i,s){var c=!1,h=lr,g=i.contextType;return typeof g=="object"&&g!==null?g=Wn(g):(h=An(i)?Dr:dn.current,c=i.contextTypes,g=(c=c!=null)?xa(n,h):lr),i=new i(s,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ho,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function ep(n,i,s,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==n&&Ho.enqueueReplaceState(i,i.state,null)}function Zc(n,i,s,c){var h=n.stateNode;h.props=s,h.state=n.memoizedState,h.refs={},Fc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Wn(g):(g=An(i)?Dr:dn.current,h.context=xa(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Kc(n,i,g,s),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Ho.enqueueReplaceState(h,h.state,null),Lo(n,s,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ea(n,i){try{var s="",c=i;do s+=ne(c),c=c.return;while(c);var h=s}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Qc(n,i,s){return{value:n,source:null,stack:s??null,digest:i??null}}function Jc(n,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var px=typeof WeakMap=="function"?WeakMap:Map;function tp(n,i,s){s=Ui(-1,s),s.tag=3,s.payload={element:null};var c=i.value;return s.callback=function(){Yo||(Yo=!0,pu=c),Jc(n,i)},s}function np(n,i,s){s=Ui(-1,s),s.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;s.payload=function(){return c(h)},s.callback=function(){Jc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(s.callback=function(){Jc(n,i),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),s}function ip(n,i,s){var c=n.pingCache;if(c===null){c=n.pingCache=new px;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(s)||(h.add(s),n=Cx.bind(null,n,i,s),i.then(n,n))}function rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ap(n,i,s,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ui(-1,1),i.tag=2,dr(s,i,1))),s.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var mx=A.ReactCurrentOwner,Cn=!1;function Sn(n,i,s,c){i.child=n===null?Ef(i,null,s,c):Sa(i,n.child,s,c)}function sp(n,i,s,c,h){s=s.render;var g=i.ref;return wa(i,h),c=jc(n,i,s,c,g,h),s=Wc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Fi(n,i,h)):(zt&&s&&Ac(i),i.flags|=1,Sn(n,i,c,h),i.child)}function op(n,i,s,c,h){if(n===null){var g=s.type;return typeof g=="function"&&!Su(g)&&g.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=g,lp(n,i,g,c,h)):(n=el(s.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var T=g.memoizedProps;if(s=s.compare,s=s!==null?s:gs,s(T,c)&&n.ref===i.ref)return Fi(n,i,h)}return i.flags|=1,n=xr(g,c),n.ref=i.ref,n.return=i,i.child=n}function lp(n,i,s,c,h){if(n!==null){var g=n.memoizedProps;if(gs(g,c)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Cn=!0);else return i.lanes=n.lanes,Fi(n,i,h)}return eu(n,i,s,c,h)}function cp(n,i,s){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Aa,On),On|=s;else{if((s&1073741824)===0)return n=g!==null?g.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Aa,On),On|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:s,It(Aa,On),On|=c}else g!==null?(c=g.baseLanes|s,i.memoizedState=null):c=s,It(Aa,On),On|=c;return Sn(n,i,h,s),i.child}function up(n,i){var s=i.ref;(n===null&&s!==null||n!==null&&n.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function eu(n,i,s,c,h){var g=An(s)?Dr:dn.current;return g=xa(i,g),wa(i,h),s=jc(n,i,s,c,g,h),c=Wc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Fi(n,i,h)):(zt&&c&&Ac(i),i.flags|=1,Sn(n,i,s,h),i.child)}function dp(n,i,s,c,h){if(An(s)){var g=!0;Eo(i)}else g=!1;if(wa(i,h),i.stateNode===null)Go(n,i),Jf(i,s,c),Zc(i,s,c,h),c=!0;else if(n===null){var T=i.stateNode,U=i.memoizedProps;T.props=U;var V=T.context,se=s.contextType;typeof se=="object"&&se!==null?se=Wn(se):(se=An(s)?Dr:dn.current,se=xa(i,se));var we=s.getDerivedStateFromProps,Te=typeof we=="function"||typeof T.getSnapshotBeforeUpdate=="function";Te||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==c||V!==se)&&ep(i,T,c,se),ur=!1;var Me=i.memoizedState;T.state=Me,Lo(i,c,T,h),V=i.memoizedState,U!==c||Me!==V||Tn.current||ur?(typeof we=="function"&&(Kc(i,s,we,c),V=i.memoizedState),(U=ur||Qf(i,s,U,c,Me,V,se))?(Te||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),T.props=c,T.state=V,T.context=se,c=U):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Af(n,i),U=i.memoizedProps,se=i.type===i.elementType?U:ri(i.type,U),T.props=se,Te=i.pendingProps,Me=T.context,V=s.contextType,typeof V=="object"&&V!==null?V=Wn(V):(V=An(s)?Dr:dn.current,V=xa(i,V));var Be=s.getDerivedStateFromProps;(we=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Te||Me!==V)&&ep(i,T,c,V),ur=!1,Me=i.memoizedState,T.state=Me,Lo(i,c,T,h);var je=i.memoizedState;U!==Te||Me!==je||Tn.current||ur?(typeof Be=="function"&&(Kc(i,s,Be,c),je=i.memoizedState),(se=ur||Qf(i,s,se,c,Me,je,V)||!1)?(we||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,je,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,je,V)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),T.props=c,T.state=je,T.context=V,c=se):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Me===n.memoizedState||(i.flags|=1024),c=!1)}return tu(n,i,s,c,g,h)}function tu(n,i,s,c,h,g){up(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return h&&gf(i,s,!1),Fi(n,i,g);c=i.stateNode,mx.current=i;var U=T&&typeof s.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Sa(i,n.child,null,g),i.child=Sa(i,null,U,g)):Sn(n,i,U,g),i.memoizedState=c.state,h&&gf(i,s,!0),i.child}function hp(n){var i=n.stateNode;i.pendingContext?pf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&pf(n,i.context,!1),Oc(n,i.containerInfo)}function fp(n,i,s,c,h){return _a(),Pc(h),i.flags|=256,Sn(n,i,s,c),i.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(n){return{baseLanes:n,cachePool:null,transitions:null}}function pp(n,i,s){var c=i.pendingProps,h=Vt.current,g=!1,T=(i.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),It(Vt,h&1),n===null)return Nc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,g?(c=i.mode,g=i.child,T={mode:"hidden",children:T},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=tl(T,c,0,null),n=Gr(n,c,s,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=iu(s),i.memoizedState=nu,n):ru(i,T));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return gx(n,i,T,c,U,h,s);if(g){g=c.fallback,T=i.mode,h=n.child,U=h.sibling;var V={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=xr(h,V),c.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=xr(U,g):(g=Gr(g,T,s,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,T=n.child.memoizedState,T=T===null?iu(s):{baseLanes:T.baseLanes|s,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~s,i.memoizedState=nu,c}return g=n.child,n=g.sibling,c=xr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=s),c.return=i,c.sibling=null,n!==null&&(s=i.deletions,s===null?(i.deletions=[n],i.flags|=16):s.push(n)),i.child=c,i.memoizedState=null,c}function ru(n,i){return i=tl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Vo(n,i,s,c){return c!==null&&Pc(c),Sa(i,n.child,null,s),n=ru(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function gx(n,i,s,c,h,g,T){if(s)return i.flags&256?(i.flags&=-257,c=Qc(Error(t(422))),Vo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=tl({mode:"visible",children:c.children},h,0,null),g=Gr(g,h,T,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Sa(i,n.child,null,T),i.child.memoizedState=iu(T),i.memoizedState=nu,g);if((i.mode&1)===0)return Vo(n,i,T,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var U=c.dgst;return c=U,g=Error(t(419)),c=Qc(g,c,void 0),Vo(n,i,T,c)}if(U=(T&n.childLanes)!==0,Cn||U){if(c=rn,c!==null){switch(T&-T){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|T))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Ii(n,h),oi(c,n,h,-1))}return _u(),c=Qc(Error(t(421))),Vo(n,i,T,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Rx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Fn=sr(h.nextSibling),Un=i,zt=!0,ii=null,n!==null&&(Gn[jn++]=Di,Gn[jn++]=Li,Gn[jn++]=Lr,Di=n.id,Li=n.overflow,Lr=i),i=ru(i,c.children),i.flags|=4096,i)}function mp(n,i,s){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Ic(n.return,i,s)}function au(n,i,s,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=s,g.tailMode=h)}function gp(n,i,s){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Sn(n,i,c.children,s),c=Vt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mp(n,s,i);else if(n.tag===19)mp(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(It(Vt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(s=i.child,h=null;s!==null;)n=s.alternate,n!==null&&Io(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),au(i,!1,h,s,g);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Io(n)===null){i.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}au(i,!0,s,null,g);break;case"together":au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Go(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Fi(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),Br|=i.lanes,(s&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,s=xr(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=xr(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function xx(n,i,s){switch(i.tag){case 3:hp(i),_a();break;case 5:Nf(i);break;case 1:An(i.type)&&Eo(i);break;case 4:Oc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;It(Po,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(Vt,Vt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?pp(n,i,s):(It(Vt,Vt.current&1),n=Fi(n,i,s),n!==null?n.sibling:null);It(Vt,Vt.current&1);break;case 19:if(c=(s&i.childLanes)!==0,(n.flags&128)!==0){if(c)return gp(n,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),It(Vt,Vt.current),c)break;return null;case 22:case 23:return i.lanes=0,cp(n,i,s)}return Fi(n,i,s)}var xp,su,vp,yp;xp=function(n,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},su=function(){},vp=function(n,i,s,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Fr(_i.current);var g=null;switch(s){case"input":h=H(n,h),c=H(n,c),g=[];break;case"select":h=D({},h,{value:void 0}),c=D({},c,{value:void 0}),g=[];break;case"textarea":h=R(n,h),c=R(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Mo)}yt(s,c);var T;s=null;for(se in h)if(!c.hasOwnProperty(se)&&h.hasOwnProperty(se)&&h[se]!=null)if(se==="style"){var U=h[se];for(T in U)U.hasOwnProperty(T)&&(s||(s={}),s[T]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?g||(g=[]):(g=g||[]).push(se,null));for(se in c){var V=c[se];if(U=h!=null?h[se]:void 0,c.hasOwnProperty(se)&&V!==U&&(V!=null||U!=null))if(se==="style")if(U){for(T in U)!U.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(s||(s={}),s[T]="");for(T in V)V.hasOwnProperty(T)&&U[T]!==V[T]&&(s||(s={}),s[T]=V[T])}else s||(g||(g=[]),g.push(se,s)),s=V;else se==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(g=g||[]).push(se,V)):se==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(se,""+V):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(V!=null&&se==="onScroll"&&Ft("scroll",n),g||U===V||(g=[])):(g=g||[]).push(se,V))}s&&(g=g||[]).push("style",s);var se=g;(i.updateQueue=se)&&(i.flags|=4)}},yp=function(n,i,s,c){s!==c&&(i.flags|=4)};function Ps(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(i)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,i}function vx(n,i,s){var c=i.pendingProps;switch(Cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return An(i.type)&&bo(),fn(i),null;case 3:return c=i.stateNode,ba(),Ot(Tn),Ot(dn),Hc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ro(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(xu(ii),ii=null))),su(n,i),fn(i),null;case 5:Bc(i);var h=Fr(Ts.current);if(s=i.type,n!==null&&i.stateNode!=null)vp(n,i,s,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return fn(i),null}if(n=Fr(_i.current),Ro(i)){c=i.stateNode,s=i.type;var g=i.memoizedProps;switch(c[yi]=i,c[Ss]=g,n=(i.mode&1)!==0,s){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(h=0;h<vs.length;h++)Ft(vs[h],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":wt(c,g),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ft("invalid",c);break;case"textarea":ae(c,g),Ft("invalid",c)}yt(s,g),h=null;for(var T in g)if(g.hasOwnProperty(T)){var U=g[T];T==="children"?typeof U=="string"?c.textContent!==U&&(g.suppressHydrationWarning!==!0&&So(c.textContent,U,n),h=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&So(c.textContent,U,n),h=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Ft("scroll",c)}switch(s){case"input":Je(c),Ge(c,g,!0);break;case"textarea":Je(c),Se(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Mo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=xe(s)),n==="http://www.w3.org/1999/xhtml"?s==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(s,{is:c.is}):(n=T.createElement(s),s==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,s),n[yi]=i,n[Ss]=c,xp(n,i,!1,!1),i.stateNode=n;e:{switch(T=ht(s,c),s){case"dialog":Ft("cancel",n),Ft("close",n),h=c;break;case"iframe":case"object":case"embed":Ft("load",n),h=c;break;case"video":case"audio":for(h=0;h<vs.length;h++)Ft(vs[h],n);h=c;break;case"source":Ft("error",n),h=c;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),h=c;break;case"details":Ft("toggle",n),h=c;break;case"input":wt(n,c),h=H(n,c),Ft("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=D({},c,{value:void 0}),Ft("invalid",n);break;case"textarea":ae(n,c),h=R(n,c),Ft("invalid",n);break;default:h=c}yt(s,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var V=U[g];g==="style"?st(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Oe(n,V)):g==="children"?typeof V=="string"?(s!=="textarea"||V!=="")&&pt(n,V):typeof V=="number"&&pt(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&Ft("scroll",n):V!=null&&k(n,g,V,T))}switch(s){case"input":Je(n),Ge(n,c,!1);break;case"textarea":Je(n),Se(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ge(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?L(n,!!c.multiple,g,!1):c.defaultValue!=null&&L(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Mo)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(n&&i.stateNode!=null)yp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(s=Fr(Ts.current),Fr(_i.current),Ro(i)){if(c=i.stateNode,s=i.memoizedProps,c[yi]=i,(g=c.nodeValue!==s)&&(n=Un,n!==null))switch(n.tag){case 3:So(c.nodeValue,s,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&So(c.nodeValue,s,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[yi]=i,i.stateNode=c}return fn(i),null;case 13:if(Ot(Vt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Mf(),_a(),i.flags|=98560,g=!1;else if(g=Ro(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[yi]=i}else _a(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),g=!1}else ii!==null&&(xu(ii),ii=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?Qt===0&&(Qt=3):_u())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return ba(),su(n,i),n===null&&ys(i.stateNode.containerInfo),fn(i),null;case 10:return Lc(i.type._context),fn(i),null;case 17:return An(i.type)&&bo(),fn(i),null;case 19:if(Ot(Vt),g=i.memoizedState,g===null)return fn(i),null;if(c=(i.flags&128)!==0,T=g.rendering,T===null)if(c)Ps(g,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Io(n),T!==null){for(i.flags|=128,Ps(g,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=s,s=i.child;s!==null;)g=s,n=c,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),s=s.sibling;return It(Vt,Vt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Ae()>Ca&&(i.flags|=128,c=!0,Ps(g,!1),i.lanes=4194304)}else{if(!c)if(n=Io(T),n!==null){if(i.flags|=128,c=!0,s=n.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Ps(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!zt)return fn(i),null}else 2*Ae()-g.renderingStartTime>Ca&&s!==1073741824&&(i.flags|=128,c=!0,Ps(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(s=g.last,s!==null?s.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ae(),i.sibling=null,s=Vt.current,It(Vt,c?s&1|2:s&1),i):(fn(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(On&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function yx(n,i){switch(Cc(i),i.tag){case 1:return An(i.type)&&bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ba(),Ot(Tn),Ot(dn),Hc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Bc(i),null;case 13:if(Ot(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));_a()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Vt),null;case 4:return ba(),null;case 10:return Lc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var jo=!1,pn=!1,_x=typeof WeakSet=="function"?WeakSet:Set,He=null;function Ta(n,i){var s=n.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){jt(n,i,c)}else s.current=null}function ou(n,i,s){try{s()}catch(c){jt(n,i,c)}}var _p=!1;function Sx(n,i){if(yc=co,n=Zh(),dc(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var T=0,U=-1,V=-1,se=0,we=0,Te=n,Me=null;t:for(;;){for(var Be;Te!==s||h!==0&&Te.nodeType!==3||(U=T+h),Te!==g||c!==0&&Te.nodeType!==3||(V=T+c),Te.nodeType===3&&(T+=Te.nodeValue.length),(Be=Te.firstChild)!==null;)Me=Te,Te=Be;for(;;){if(Te===n)break t;if(Me===s&&++se===h&&(U=T),Me===g&&++we===c&&(V=T),(Be=Te.nextSibling)!==null)break;Te=Me,Me=Te.parentNode}Te=Be}s=U===-1||V===-1?null:{start:U,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(_c={focusedElem:n,selectionRange:s},co=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,Xt=je.memoizedState,ee=i.stateNode,W=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ri(i.type,Ye),Xt);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){jt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return je=_p,_p=!1,je}function ks(n,i,s){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&ou(i,s,g)}h=h.next}while(h!==c)}}function Wo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&n)===n){var c=s.create;s.destroy=c()}s=s.next}while(s!==i)}}function lu(n){var i=n.ref;if(i!==null){var s=n.stateNode;switch(n.tag){case 5:n=s;break;default:n=s}typeof i=="function"?i(n):i.current=n}}function Sp(n){var i=n.alternate;i!==null&&(n.alternate=null,Sp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[Ss],delete i[bc],delete i[ix],delete i[rx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mp(n){return n.tag===5||n.tag===3||n.tag===4}function wp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cu(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(n,i):s.insertBefore(n,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(n,s)):(i=s,i.appendChild(n)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Mo));else if(c!==4&&(n=n.child,n!==null))for(cu(n,i,s),n=n.sibling;n!==null;)cu(n,i,s),n=n.sibling}function uu(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(uu(n,i,s),n=n.sibling;n!==null;)uu(n,i,s),n=n.sibling}var on=null,ai=!1;function hr(n,i,s){for(s=s.child;s!==null;)bp(n,i,s),s=s.sibling}function bp(n,i,s){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Rt,s)}catch{}switch(s.tag){case 5:pn||Ta(s,i);case 6:var c=on,h=ai;on=null,hr(n,i,s),on=c,ai=h,on!==null&&(ai?(n=on,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):on.removeChild(s.stateNode));break;case 18:on!==null&&(ai?(n=on,s=s.stateNode,n.nodeType===8?wc(n.parentNode,s):n.nodeType===1&&wc(n,s),us(n)):wc(on,s.stateNode));break;case 4:c=on,h=ai,on=s.stateNode.containerInfo,ai=!0,hr(n,i,s),on=c,ai=h;break;case 0:case 11:case 14:case 15:if(!pn&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&ou(s,i,T),h=h.next}while(h!==c)}hr(n,i,s);break;case 1:if(!pn&&(Ta(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(U){jt(s,i,U)}hr(n,i,s);break;case 21:hr(n,i,s);break;case 22:s.mode&1?(pn=(c=pn)||s.memoizedState!==null,hr(n,i,s),pn=c):hr(n,i,s);break;default:hr(n,i,s)}}function Ep(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var s=n.stateNode;s===null&&(s=n.stateNode=new _x),i.forEach(function(c){var h=Nx.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}}function si(n,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c];try{var g=n,T=i,U=T;e:for(;U!==null;){switch(U.tag){case 5:on=U.stateNode,ai=!1;break e;case 3:on=U.stateNode.containerInfo,ai=!0;break e;case 4:on=U.stateNode.containerInfo,ai=!0;break e}U=U.return}if(on===null)throw Error(t(160));bp(g,T,h),on=null,ai=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(se){jt(h,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Tp(i,n),i=i.sibling}function Tp(n,i){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),Mi(n),c&4){try{ks(3,n,n.return),Wo(3,n)}catch(Ye){jt(n,n.return,Ye)}try{ks(5,n,n.return)}catch(Ye){jt(n,n.return,Ye)}}break;case 1:si(i,n),Mi(n),c&512&&s!==null&&Ta(s,s.return);break;case 5:if(si(i,n),Mi(n),c&512&&s!==null&&Ta(s,s.return),n.flags&32){var h=n.stateNode;try{pt(h,"")}catch(Ye){jt(n,n.return,Ye)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,T=s!==null?s.memoizedProps:g,U=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&tt(h,g),ht(U,T);var se=ht(U,g);for(T=0;T<V.length;T+=2){var we=V[T],Te=V[T+1];we==="style"?st(h,Te):we==="dangerouslySetInnerHTML"?Oe(h,Te):we==="children"?pt(h,Te):k(h,we,Te,se)}switch(U){case"input":et(h,g);break;case"textarea":_e(h,g);break;case"select":var Me=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Be=g.value;Be!=null?L(h,!!g.multiple,Be,!1):Me!==!!g.multiple&&(g.defaultValue!=null?L(h,!!g.multiple,g.defaultValue,!0):L(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ss]=g}catch(Ye){jt(n,n.return,Ye)}}break;case 6:if(si(i,n),Mi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ye){jt(n,n.return,Ye)}}break;case 3:if(si(i,n),Mi(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{us(i.containerInfo)}catch(Ye){jt(n,n.return,Ye)}break;case 4:si(i,n),Mi(n);break;case 13:si(i,n),Mi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(fu=Ae())),c&4&&Ep(n);break;case 22:if(we=s!==null&&s.memoizedState!==null,n.mode&1?(pn=(se=pn)||we,si(i,n),pn=se):si(i,n),Mi(n),c&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!we&&(n.mode&1)!==0)for(He=n,we=n.child;we!==null;){for(Te=He=we;He!==null;){switch(Me=He,Be=Me.child,Me.tag){case 0:case 11:case 14:case 15:ks(4,Me,Me.return);break;case 1:Ta(Me,Me.return);var je=Me.stateNode;if(typeof je.componentWillUnmount=="function"){c=Me,s=Me.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ye){jt(c,s,Ye)}}break;case 5:Ta(Me,Me.return);break;case 22:if(Me.memoizedState!==null){Rp(Te);continue}}Be!==null?(Be.return=Me,He=Be):Rp(Te)}we=we.sibling}e:for(we=null,Te=n;;){if(Te.tag===5){if(we===null){we=Te;try{h=Te.stateNode,se?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Te.stateNode,V=Te.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=nt("display",T))}catch(Ye){jt(n,n.return,Ye)}}}else if(Te.tag===6){if(we===null)try{Te.stateNode.nodeValue=se?"":Te.memoizedProps}catch(Ye){jt(n,n.return,Ye)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;we===Te&&(we=null),Te=Te.return}we===Te&&(we=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:si(i,n),Mi(n),c&4&&Ep(n);break;case 21:break;default:si(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var s=n.return;s!==null;){if(Mp(s)){var c=s;break e}s=s.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(pt(h,""),c.flags&=-33);var g=wp(n);uu(n,g,h);break;case 3:case 4:var T=c.stateNode.containerInfo,U=wp(n);cu(n,U,T);break;default:throw Error(t(161))}}catch(V){jt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Mx(n,i,s){He=n,Ap(n)}function Ap(n,i,s){for(var c=(n.mode&1)!==0;He!==null;){var h=He,g=h.child;if(h.tag===22&&c){var T=h.memoizedState!==null||jo;if(!T){var U=h.alternate,V=U!==null&&U.memoizedState!==null||pn;U=jo;var se=pn;if(jo=T,(pn=V)&&!se)for(He=h;He!==null;)T=He,V=T.child,T.tag===22&&T.memoizedState!==null?Np(h):V!==null?(V.return=T,He=V):Np(h);for(;g!==null;)He=g,Ap(g),g=g.sibling;He=h,jo=U,pn=se}Cp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,He=g):Cp(n)}}function Cp(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Wo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!pn)if(s===null)c.componentDidMount();else{var h=i.elementType===i.type?s.memoizedProps:ri(i.type,s.memoizedProps);c.componentDidUpdate(h,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Rf(i,g,c);break;case 3:var T=i.updateQueue;if(T!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Rf(i,T,s)}break;case 5:var U=i.stateNode;if(s===null&&i.flags&4){s=U;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&s.focus();break;case"img":V.src&&(s.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var we=se.memoizedState;if(we!==null){var Te=we.dehydrated;Te!==null&&us(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||i.flags&512&&lu(i)}catch(Me){jt(i,i.return,Me)}}if(i===n){He=null;break}if(s=i.sibling,s!==null){s.return=i.return,He=s;break}He=i.return}}function Rp(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var s=i.sibling;if(s!==null){s.return=i.return,He=s;break}He=i.return}}function Np(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Wo(4,i)}catch(V){jt(i,s,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(V){jt(i,h,V)}}var g=i.return;try{lu(i)}catch(V){jt(i,g,V)}break;case 5:var T=i.return;try{lu(i)}catch(V){jt(i,T,V)}}}catch(V){jt(i,i.return,V)}if(i===n){He=null;break}var U=i.sibling;if(U!==null){U.return=i.return,He=U;break}He=i.return}}var wx=Math.ceil,Xo=A.ReactCurrentDispatcher,du=A.ReactCurrentOwner,qn=A.ReactCurrentBatchConfig,Et=0,rn=null,qt=null,ln=0,On=0,Aa=or(0),Qt=0,Ds=null,Br=0,qo=0,hu=0,Ls=null,Rn=null,fu=0,Ca=1/0,Oi=null,Yo=!1,pu=null,fr=null,$o=!1,pr=null,Ko=0,Is=0,mu=null,Zo=-1,Qo=0;function Mn(){return(Et&6)!==0?Ae():Zo!==-1?Zo:Zo=Ae()}function mr(n){return(n.mode&1)===0?1:(Et&2)!==0&&ln!==0?ln&-ln:sx.transition!==null?(Qo===0&&(Qo=_n()),Qo):(n=kt,n!==0||(n=window.event,n=n===void 0?16:Ph(n.type)),n)}function oi(n,i,s,c){if(50<Is)throw Is=0,mu=null,Error(t(185));En(n,s,c),((Et&2)===0||n!==rn)&&(n===rn&&((Et&2)===0&&(qo|=s),Qt===4&&gr(n,ln)),Nn(n,c),s===1&&Et===0&&(i.mode&1)===0&&(Ca=Ae()+500,To&&cr()))}function Nn(n,i){var s=n.callbackNode;Hn(n,i);var c=vi(n,n===rn?ln:0);if(c===0)s!==null&&le(s),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(s!=null&&le(s),i===1)n.tag===0?ax(kp.bind(null,n)):xf(kp.bind(null,n)),tx(function(){(Et&6)===0&&cr()}),s=null;else{switch(wh(c)){case 1:s=qe;break;case 4:s=lt;break;case 16:s=dt;break;case 536870912:s=Mt;break;default:s=dt}s=zp(s,Pp.bind(null,n))}n.callbackPriority=i,n.callbackNode=s}}function Pp(n,i){if(Zo=-1,Qo=0,(Et&6)!==0)throw Error(t(327));var s=n.callbackNode;if(Ra()&&n.callbackNode!==s)return null;var c=vi(n,n===rn?ln:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Jo(n,c);else{i=c;var h=Et;Et|=2;var g=Lp();(rn!==n||ln!==i)&&(Oi=null,Ca=Ae()+500,Hr(n,i));do try{Tx();break}catch(U){Dp(n,U)}while(!0);Dc(),Xo.current=g,Et=h,qt!==null?i=0:(rn=null,ln=0,i=Qt)}if(i!==0){if(i===2&&(h=Ni(n),h!==0&&(c=h,i=gu(n,h))),i===1)throw s=Ds,Hr(n,0),gr(n,c),Nn(n,Ae()),s;if(i===6)gr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!bx(h)&&(i=Jo(n,c),i===2&&(g=Ni(n),g!==0&&(c=g,i=gu(n,g))),i===1))throw s=Ds,Hr(n,0),gr(n,c),Nn(n,Ae()),s;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Rn,Oi);break;case 3:if(gr(n,c),(c&130023424)===c&&(i=fu+500-Ae(),10<i)){if(vi(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Mn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Mc(Vr.bind(null,n,Rn,Oi),i);break}Vr(n,Rn,Oi);break;case 4:if(gr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var T=31-mt(c);g=1<<T,T=i[T],T>h&&(h=T),c&=~g}if(c=h,c=Ae()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*wx(c/1960))-c,10<c){n.timeoutHandle=Mc(Vr.bind(null,n,Rn,Oi),c);break}Vr(n,Rn,Oi);break;case 5:Vr(n,Rn,Oi);break;default:throw Error(t(329))}}}return Nn(n,Ae()),n.callbackNode===s?Pp.bind(null,n):null}function gu(n,i){var s=Ls;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=Jo(n,i),n!==2&&(i=Rn,Rn=s,i!==null&&xu(i)),n}function xu(n){Rn===null?Rn=n:Rn.push.apply(Rn,n)}function bx(n){for(var i=n;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var h=s[c],g=h.getSnapshot;h=h.value;try{if(!ni(g(),h))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(n,i){for(i&=~hu,i&=~qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var s=31-mt(i),c=1<<s;n[s]=-1,i&=~c}}function kp(n){if((Et&6)!==0)throw Error(t(327));Ra();var i=vi(n,0);if((i&1)===0)return Nn(n,Ae()),null;var s=Jo(n,i);if(n.tag!==0&&s===2){var c=Ni(n);c!==0&&(i=c,s=gu(n,c))}if(s===1)throw s=Ds,Hr(n,0),gr(n,i),Nn(n,Ae()),s;if(s===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Rn,Oi),Nn(n,Ae()),null}function vu(n,i){var s=Et;Et|=1;try{return n(i)}finally{Et=s,Et===0&&(Ca=Ae()+500,To&&cr())}}function zr(n){pr!==null&&pr.tag===0&&(Et&6)===0&&Ra();var i=Et;Et|=1;var s=qn.transition,c=kt;try{if(qn.transition=null,kt=1,n)return n()}finally{kt=c,qn.transition=s,Et=i,(Et&6)===0&&cr()}}function yu(){On=Aa.current,Ot(Aa)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;if(s!==-1&&(n.timeoutHandle=-1,ex(s)),qt!==null)for(s=qt.return;s!==null;){var c=s;switch(Cc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bo();break;case 3:ba(),Ot(Tn),Ot(dn),Hc();break;case 5:Bc(c);break;case 4:ba();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:Lc(c.type._context);break;case 22:case 23:yu()}s=s.return}if(rn=n,qt=n=xr(n.current,null),ln=On=i,Qt=0,Ds=null,hu=qo=Br=0,Rn=Ls=null,Ur!==null){for(i=0;i<Ur.length;i++)if(s=Ur[i],c=s.interleaved,c!==null){s.interleaved=null;var h=c.next,g=s.pending;if(g!==null){var T=g.next;g.next=h,c.next=T}s.pending=c}Ur=null}return n}function Dp(n,i){do{var s=qt;try{if(Dc(),Uo.current=zo,Fo){for(var c=Gt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Fo=!1}if(Or=0,nn=Zt=Gt=null,As=!1,Cs=0,du.current=null,s===null||s.return===null){Qt=1,Ds=i,qt=null;break}e:{var g=n,T=s.return,U=s,V=i;if(i=ln,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var se=V,we=U,Te=we.tag;if((we.mode&1)===0&&(Te===0||Te===11||Te===15)){var Me=we.alternate;Me?(we.updateQueue=Me.updateQueue,we.memoizedState=Me.memoizedState,we.lanes=Me.lanes):(we.updateQueue=null,we.memoizedState=null)}var Be=rp(T);if(Be!==null){Be.flags&=-257,ap(Be,T,U,g,i),Be.mode&1&&ip(g,se,i),i=Be,V=se;var je=i.updateQueue;if(je===null){var Ye=new Set;Ye.add(V),i.updateQueue=Ye}else je.add(V);break e}else{if((i&1)===0){ip(g,se,i),_u();break e}V=Error(t(426))}}else if(zt&&U.mode&1){var Xt=rp(T);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),ap(Xt,T,U,g,i),Pc(Ea(V,U));break e}}g=V=Ea(V,U),Qt!==4&&(Qt=2),Ls===null?Ls=[g]:Ls.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ee=tp(g,V,i);Cf(g,ee);break e;case 1:U=V;var W=g.type,re=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(fr===null||!fr.has(re)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ce=np(g,U,i);Cf(g,Ce);break e}}g=g.return}while(g!==null)}Up(s)}catch(Ze){i=Ze,qt===s&&s!==null&&(qt=s=s.return);continue}break}while(!0)}function Lp(){var n=Xo.current;return Xo.current=zo,n===null?zo:n}function _u(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),rn===null||(Br&268435455)===0&&(qo&268435455)===0||gr(rn,ln)}function Jo(n,i){var s=Et;Et|=2;var c=Lp();(rn!==n||ln!==i)&&(Oi=null,Hr(n,i));do try{Ex();break}catch(h){Dp(n,h)}while(!0);if(Dc(),Et=s,Xo.current=c,qt!==null)throw Error(t(261));return rn=null,ln=0,Qt}function Ex(){for(;qt!==null;)Ip(qt)}function Tx(){for(;qt!==null&&!Q();)Ip(qt)}function Ip(n){var i=Bp(n.alternate,n,On);n.memoizedProps=n.pendingProps,i===null?Up(n):qt=i,du.current=null}function Up(n){var i=n;do{var s=i.alternate;if(n=i.return,(i.flags&32768)===0){if(s=vx(s,i,On),s!==null){qt=s;return}}else{if(s=yx(s,i),s!==null){s.flags&=32767,qt=s;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Vr(n,i,s){var c=kt,h=qn.transition;try{qn.transition=null,kt=1,Ax(n,i,s,c)}finally{qn.transition=h,kt=c}return null}function Ax(n,i,s,c){do Ra();while(pr!==null);if((Et&6)!==0)throw Error(t(327));s=n.finishedWork;var h=n.finishedLanes;if(s===null)return null;if(n.finishedWork=null,n.finishedLanes=0,s===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=s.lanes|s.childLanes;if(so(n,g),n===rn&&(qt=rn=null,ln=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||$o||($o=!0,zp(dt,function(){return Ra(),null})),g=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||g){g=qn.transition,qn.transition=null;var T=kt;kt=1;var U=Et;Et|=4,du.current=null,Sx(n,s),Tp(s,n),q0(_c),co=!!yc,_c=yc=null,n.current=s,Mx(s),Re(),Et=U,kt=T,qn.transition=g}else n.current=s;if($o&&($o=!1,pr=n,Ko=h),g=n.pendingLanes,g===0&&(fr=null),cn(s.stateNode),Nn(n,Ae()),i!==null)for(c=n.onRecoverableError,s=0;s<i.length;s++)h=i[s],c(h.value,{componentStack:h.stack,digest:h.digest});if(Yo)throw Yo=!1,n=pu,pu=null,n;return(Ko&1)!==0&&n.tag!==0&&Ra(),g=n.pendingLanes,(g&1)!==0?n===mu?Is++:(Is=0,mu=n):Is=0,cr(),null}function Ra(){if(pr!==null){var n=wh(Ko),i=qn.transition,s=kt;try{if(qn.transition=null,kt=16>n?16:n,pr===null)var c=!1;else{if(n=pr,pr=null,Ko=0,(Et&6)!==0)throw Error(t(331));var h=Et;for(Et|=4,He=n.current;He!==null;){var g=He,T=g.child;if((He.flags&16)!==0){var U=g.deletions;if(U!==null){for(var V=0;V<U.length;V++){var se=U[V];for(He=se;He!==null;){var we=He;switch(we.tag){case 0:case 11:case 15:ks(8,we,g)}var Te=we.child;if(Te!==null)Te.return=we,He=Te;else for(;He!==null;){we=He;var Me=we.sibling,Be=we.return;if(Sp(we),we===se){He=null;break}if(Me!==null){Me.return=Be,He=Me;break}He=Be}}}var je=g.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var Xt=Ye.sibling;Ye.sibling=null,Ye=Xt}while(Ye!==null)}}He=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,He=T;else e:for(;He!==null;){if(g=He,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ks(9,g,g.return)}var ee=g.sibling;if(ee!==null){ee.return=g.return,He=ee;break e}He=g.return}}var W=n.current;for(He=W;He!==null;){T=He;var re=T.child;if((T.subtreeFlags&2064)!==0&&re!==null)re.return=T,He=re;else e:for(T=W;He!==null;){if(U=He,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Wo(9,U)}}catch(Ze){jt(U,U.return,Ze)}if(U===T){He=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,He=Ce;break e}He=U.return}}if(Et=h,cr(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Rt,n)}catch{}c=!0}return c}finally{kt=s,qn.transition=i}}return!1}function Fp(n,i,s){i=Ea(s,i),i=tp(n,i,1),n=dr(n,i,1),i=Mn(),n!==null&&(En(n,1,i),Nn(n,i))}function jt(n,i,s){if(n.tag===3)Fp(n,n,s);else for(;i!==null;){if(i.tag===3){Fp(i,n,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fr===null||!fr.has(c))){n=Ea(s,n),n=np(i,n,1),i=dr(i,n,1),n=Mn(),i!==null&&(En(i,1,n),Nn(i,n));break}}i=i.return}}function Cx(n,i,s){var c=n.pingCache;c!==null&&c.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&s,rn===n&&(ln&s)===s&&(Qt===4||Qt===3&&(ln&130023424)===ln&&500>Ae()-fu?Hr(n,0):hu|=s),Nn(n,i)}function Op(n,i){i===0&&((n.mode&1)===0?i=1:(i=ti,ti<<=1,(ti&130023424)===0&&(ti=4194304)));var s=Mn();n=Ii(n,i),n!==null&&(En(n,i,s),Nn(n,s))}function Rx(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),Op(n,s)}function Nx(n,i){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Op(n,s)}var Bp;Bp=function(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps||Tn.current)Cn=!0;else{if((n.lanes&s)===0&&(i.flags&128)===0)return Cn=!1,xx(n,i,s);Cn=(n.flags&131072)!==0}else Cn=!1,zt&&(i.flags&1048576)!==0&&vf(i,Co,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Go(n,i),n=i.pendingProps;var h=xa(i,dn.current);wa(i,s),h=jc(null,i,c,n,h,s);var g=Wc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(c)?(g=!0,Eo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Fc(i),h.updater=Ho,i.stateNode=h,h._reactInternals=i,Zc(i,c,n,s),i=tu(null,i,c,!0,g,s)):(i.tag=0,zt&&g&&Ac(i),Sn(null,i,h,s),i=i.child),i;case 16:c=i.elementType;e:{switch(Go(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=kx(c),n=ri(c,n),h){case 0:i=eu(null,i,c,n,s);break e;case 1:i=dp(null,i,c,n,s);break e;case 11:i=sp(null,i,c,n,s);break e;case 14:i=op(null,i,c,ri(c.type,n),s);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),eu(n,i,c,h,s);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),dp(n,i,c,h,s);case 3:e:{if(hp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Af(n,i),Lo(i,c,null,s);var T=i.memoizedState;if(c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ea(Error(t(423)),i),i=fp(n,i,c,s,h);break e}else if(c!==h){h=Ea(Error(t(424)),i),i=fp(n,i,c,s,h);break e}else for(Fn=sr(i.stateNode.containerInfo.firstChild),Un=i,zt=!0,ii=null,s=Ef(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(_a(),c===h){i=Fi(n,i,s);break e}Sn(n,i,c,s)}i=i.child}return i;case 5:return Nf(i),n===null&&Nc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,T=h.children,Sc(c,h)?T=null:g!==null&&Sc(c,g)&&(i.flags|=32),up(n,i),Sn(n,i,T,s),i.child;case 6:return n===null&&Nc(i),null;case 13:return pp(n,i,s);case 4:return Oc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Sa(i,null,c,s):Sn(n,i,c,s),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),sp(n,i,c,h,s);case 7:return Sn(n,i,i.pendingProps,s),i.child;case 8:return Sn(n,i,i.pendingProps.children,s),i.child;case 12:return Sn(n,i,i.pendingProps.children,s),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,T=h.value,It(Po,c._currentValue),c._currentValue=T,g!==null)if(ni(g.value,T)){if(g.children===h.children&&!Tn.current){i=Fi(n,i,s);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){T=g.child;for(var V=U.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=Ui(-1,s&-s),V.tag=2;var se=g.updateQueue;if(se!==null){se=se.shared;var we=se.pending;we===null?V.next=V:(V.next=we.next,we.next=V),se.pending=V}}g.lanes|=s,V=g.alternate,V!==null&&(V.lanes|=s),Ic(g.return,s,i),U.lanes|=s;break}V=V.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=s,U=T.alternate,U!==null&&(U.lanes|=s),Ic(T,s,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Sn(n,i,h.children,s),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,wa(i,s),h=Wn(h),c=c(h),i.flags|=1,Sn(n,i,c,s),i.child;case 14:return c=i.type,h=ri(c,i.pendingProps),h=ri(c.type,h),op(n,i,c,h,s);case 15:return lp(n,i,i.type,i.pendingProps,s);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),Go(n,i),i.tag=1,An(c)?(n=!0,Eo(i)):n=!1,wa(i,s),Jf(i,c,h),Zc(i,c,h,s),tu(null,i,c,!0,n,s);case 19:return gp(n,i,s);case 22:return cp(n,i,s)}throw Error(t(156,i.tag))};function zp(n,i){return oe(n,i)}function Px(n,i,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,i,s,c){return new Px(n,i,s,c)}function Su(n){return n=n.prototype,!(!n||!n.isReactComponent)}function kx(n){if(typeof n=="function")return Su(n)?1:0;if(n!=null){if(n=n.$$typeof,n===te)return 11;if(n===de)return 14}return 2}function xr(n,i){var s=n.alternate;return s===null?(s=Yn(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&14680064,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s}function el(n,i,s,c,h,g){var T=2;if(c=n,typeof n=="function")Su(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return Gr(s.children,h,g,i);case B:T=8,h|=8;break;case P:return n=Yn(12,s,i,h|2),n.elementType=P,n.lanes=g,n;case J:return n=Yn(13,s,i,h),n.elementType=J,n.lanes=g,n;case ce:return n=Yn(19,s,i,h),n.elementType=ce,n.lanes=g,n;case fe:return tl(s,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:T=10;break e;case z:T=9;break e;case te:T=11;break e;case de:T=14;break e;case ue:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Yn(T,s,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function Gr(n,i,s,c){return n=Yn(7,n,c,i),n.lanes=s,n}function tl(n,i,s,c){return n=Yn(22,n,c,i),n.elementType=fe,n.lanes=s,n.stateNode={isHidden:!1},n}function Mu(n,i,s){return n=Yn(6,n,null,i),n.lanes=s,n}function wu(n,i,s){return i=Yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Dx(n,i,s,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function bu(n,i,s,c,h,g,T,U,V){return n=new Dx(n,i,s,U,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Yn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(g),n}function Lx(n,i,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:s}}function Hp(n){if(!n)return lr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var s=n.type;if(An(s))return mf(n,s,i)}return i}function Vp(n,i,s,c,h,g,T,U,V){return n=bu(s,c,!0,n,h,g,T,U,V),n.context=Hp(null),s=n.current,c=Mn(),h=mr(s),g=Ui(c,h),g.callback=i??null,dr(s,g,h),n.current.lanes=h,En(n,h,c),Nn(n,c),n}function nl(n,i,s,c){var h=i.current,g=Mn(),T=mr(h);return s=Hp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ui(g,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=dr(h,i,T),n!==null&&(oi(n,h,T,g),Do(n,h,T)),T}function il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Eu(n,i){Gp(n,i),(n=n.alternate)&&Gp(n,i)}function Ix(){return null}var jp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Tu(n){this._internalRoot=n}rl.prototype.render=Tu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));nl(n,i,null,null)},rl.prototype.unmount=Tu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){nl(null,n,null,null)}),i[Pi]=null}};function rl(n){this._internalRoot=n}rl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Th();n={blockedOn:null,target:n,priority:i};for(var s=0;s<ir.length&&i!==0&&i<ir[s].priority;s++);ir.splice(s,0,n),s===0&&Rh(n)}};function Au(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function Ux(n,i,s,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var se=il(T);g.call(se)}}var T=Vp(i,c,n,0,null,!1,!1,"",Wp);return n._reactRootContainer=T,n[Pi]=T.current,ys(n.nodeType===8?n.parentNode:n),zr(),T}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var U=c;c=function(){var se=il(V);U.call(se)}}var V=bu(n,0,!1,null,null,!1,!1,"",Wp);return n._reactRootContainer=V,n[Pi]=V.current,ys(n.nodeType===8?n.parentNode:n),zr(function(){nl(i,V,s,c)}),V}function sl(n,i,s,c,h){var g=s._reactRootContainer;if(g){var T=g;if(typeof h=="function"){var U=h;h=function(){var V=il(T);U.call(V)}}nl(i,T,n,h)}else T=Ux(s,i,n,h,c);return il(T)}bh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var s=Kt(i.pendingLanes);s!==0&&(Zl(i,s|1),Nn(i,Ae()),(Et&6)===0&&(Ca=Ae()+500,cr()))}break;case 13:zr(function(){var c=Ii(n,1);if(c!==null){var h=Mn();oi(c,n,1,h)}}),Eu(n,1)}},Ql=function(n){if(n.tag===13){var i=Ii(n,134217728);if(i!==null){var s=Mn();oi(i,n,134217728,s)}Eu(n,134217728)}},Eh=function(n){if(n.tag===13){var i=mr(n),s=Ii(n,i);if(s!==null){var c=Mn();oi(s,n,i,c)}Eu(n,i)}},Th=function(){return kt},Ah=function(n,i){var s=kt;try{return kt=n,i()}finally{kt=s}},ke=function(n,i,s){switch(i){case"input":if(et(n,s),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==n&&c.form===n.form){var h=wo(c);if(!h)throw Error(t(90));We(c),et(c,h)}}}break;case"textarea":_e(n,s);break;case"select":i=s.value,i!=null&&L(n,!!s.multiple,i,!1)}},Ut=vu,$t=zr;var Fx={usingClientEntryPoint:!1,Events:[Ms,ma,wo,Le,ft,vu]},Us={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ox={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=N(n),n===null?null:n.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Rt=ol.inject(Ox),St=ol}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx,Pn.createPortal=function(n,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(i))throw Error(t(200));return Lx(n,i,null,s)},Pn.createRoot=function(n,i){if(!Au(n))throw Error(t(299));var s=!1,c="",h=jp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=bu(n,1,!1,null,null,s,!1,c,h),n[Pi]=i.current,ys(n.nodeType===8?n.parentNode:n),new Tu(i)},Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=N(i),n=n===null?null:n.stateNode,n},Pn.flushSync=function(n){return zr(n)},Pn.hydrate=function(n,i,s){if(!al(i))throw Error(t(200));return sl(null,n,i,!0,s)},Pn.hydrateRoot=function(n,i,s){if(!Au(n))throw Error(t(405));var c=s!=null&&s.hydratedSources||null,h=!1,g="",T=jp;if(s!=null&&(s.unstable_strictMode===!0&&(h=!0),s.identifierPrefix!==void 0&&(g=s.identifierPrefix),s.onRecoverableError!==void 0&&(T=s.onRecoverableError)),i=Vp(i,null,n,1,s??null,h,!1,g,T),n[Pi]=i.current,ys(n),c)for(n=0;n<c.length;n++)s=c[n],h=s._getVersion,h=h(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,h]:i.mutableSourceEagerHydrationData.push(s,h);return new rl(i)},Pn.render=function(n,i,s){if(!al(i))throw Error(t(200));return sl(null,n,i,!1,s)},Pn.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){sl(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},Pn.unstable_batchedUpdates=vu,Pn.unstable_renderSubtreeIntoContainer=function(n,i,s,c){if(!al(s))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return sl(n,i,s,!1,c)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var Jp;function qx(){if(Jp)return Nu.exports;Jp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Nu.exports=Xx(),Nu.exports}var em;function Yx(){if(em)return ll;em=1;var a=qx();return ll.createRoot=a.createRoot,ll.hydrateRoot=a.hydrateRoot,ll}var $x=Yx();const Kx=fg($x),tm={en:{appName:"Virtual Herbal Garden",appTagline:"Rooted in Tradition, Growing for a Healthier Tomorrow",nav:{home:"Home",explore:"Explore Garden",threeD:"3D Garden",assistant:"AI Assistant",ayush:"AYUSH Systems",tours:"Virtual Tours",quiz:"Herbal Quiz",learning:"Learning Hub",profile:"My Profile",about:"About"},hero:{badge:"Smart India Hackathon 2026 • AYUSH Innovation",title:"Discover India’s Sacred Botanical Heritage",subtitle:"An immersive 3D virtual garden unlocking centuries of medicinal plant wisdom across Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy.",btnExplore:"Explore Herbal Garden",btn3D:"Launch 3D Explorer",btnQuiz:"Take Knowledge Quiz",btnAssistant:"Ask AI Assistant",statSpecies:"Medicinal Species",statSystems:"AYUSH Systems",statAccuracy:"Verified Knowledge",statInteractive:"Interactive 3D Hotspots"},assistant:{heading:"Your AI-Powered Herbal Knowledge Assistant",subheading:"Ask questions, explore traditional wisdom, and discover the richness of India's medicinal plants.",placeholder:"Show me plants traditionally associated with digestive health...",btnAsk:"Ask",quickSuggestions:["Digestive health","Immunity","Respiratory Health","Skin Health","Mental Wellbeing","General Wellness"],didYouKnow:"Did You Know?",fact:"Many digestive herbs work by supporting Agni (digestive fire) in Ayurveda, which is considered essential for overall health and immunity.",recommendationPrefix:"Here are some medicinal plants traditionally associated with",emptyQuery:"Please type a symptom, herb name, or health topic above to consult VedaBot."},explorer:{title:"Interactive Herbal Plant Collection",searchPlaceholder:"Search for a medicinal plant (e.g. Tulsi, Neem, digestion)...",allSystems:"All AYUSH Systems",allCategories:"All Health Categories",filterBySystem:"AYUSH System",filterByCategory:"Health Category",filterByPart:"Plant Part Used",filterByHabitat:"Climate / Habitat",viewCards:"Cards",view3D:"3D Garden",viewList:"List",showing:"Showing",of:"of",plants:"plants",noResults:"No medicinal plants match your current filter criteria.",resetFilters:"Reset Filters"},card:{viewDetails:"View Details",view3D:"View 3D Model",popular:"Popular",parts:"Parts Used",benefits:"Key Benefits",ayush:"Associated AYUSH System"},modal:{tabOverview:"Overview",tabSignificance:"Traditional Use",tabPharmacology:"Ayurvedic Profile",tabCultivation:"Cultivation",tabPreparations:"Home Recipes",tabNotes:"My Notes",scientificName:"Botanical Name",sanskritName:"Classical Sanskrit Name",family:"Plant Family",audioGuide:"Audio Guide",playAudio:"Pronounce & Listen",stopAudio:"Stop Audio",bookmark:"Bookmark Herb",bookmarked:"Bookmarked",share:"Share Plant",precautions:"Precautions & Safety Notice",notesPlaceholder:"Write your personalized study notes for this medicinal plant here...",saveNotes:"Save Field Notes"},threeD:{title:"Interactive 3D Botanical Anatomy Viewer",subtitle:"Rotate 360°, zoom in/out, and click glowing anatomical hotspots to inspect medicinal virtues of each plant organ.",selectPlant:"Select 3D Plant Model",rotateHint:"Drag to rotate • Scroll to zoom • Click glowing nodes to inspect anatomy",resetView:"Reset Camera",wireframe:"Wireframe Mode",dayNight:"Day / Night Light",anatomyDetails:"Selected Anatomical Part",clickToInspect:"Click on any pulsating glowing sphere on the plant model to view detailed anatomical and chemical data."},quiz:{title:"Herbal Knowledge Quiz Challenge",subtitle:"Test your botanical wisdom, unlock prestigious achievement badges, and climb the Herbalist Leaderboard!",question:"Question",score:"Score",streak:"Streak",restart:"Play Again",congrats:"Quiz Completed!",xpEarned:"XP Points Earned",correct:"Correct Answer!",incorrect:"Incorrect!",nextQuestion:"Next Question",viewResults:"View Final Results"},badges:{title:"Achievements & Badge Shelf",subtitle:"Earn prestige badges by exploring medicinal plants, inspecting 3D models, and mastering quizzes.",explorer:"Plant Explorer (5 plants)",scholar:"AYUSH Scholar (10 plants)",quizBeginner:"Herbal Novice (1 quiz)",quizMaster:"Master Herbalist (80%+ score)",botanist:"3D Botanical Specialist",locked:"Locked"},profile:{title:"Herbalist Learning Dashboard",subtitle:"Your personal learning journey through India’s traditional medicine heritage.",level:"Herbalist Level",xp:"Total XP",exploredCount:"Plants Explored",quizCount:"Quizzes Completed",bookmarksTitle:"Bookmarked Medicinal Plants",notesTitle:"Saved Field Notes",noBookmarks:"No bookmarked plants yet. Click the bookmark icon on any plant card to save it here!",noNotes:"You haven't added any study notes yet. Open any plant details modal to write your notes!"},disclaimer:"Disclaimer: It is an educational platform, not a diagnostic or treatment tool."},hi:{appName:"वर्चुअल हर्बल गार्डन",appTagline:"परंपरा में निहित, स्वस्थ कल के लिए अग्रसर",nav:{home:"होम",explore:"उद्यान देखें",threeD:"3D गार्डन",assistant:"एआई सहायक",ayush:"आयुष प्रणालियाँ",tours:"वर्चुअल यात्रा",quiz:"ज्ञान प्रश्नोत्तरी",learning:"ज्ञान केंद्र",profile:"मेरी प्रोफ़ाइल",about:"परिचय"},hero:{badge:"स्मार्ट इंडिया हैकथॉन 2026 • आयुष नवाचार",title:"भारत की पवित्र वनस्पति धरोहर को जानें",subtitle:"आयुर्वेद, योग व प्राकृतिक चिकित्सा, यूनानी, सिद्ध और होम्योपैथी में औषधीय पौधों के सदियों पुराने ज्ञान को 3D में अनुभव करें।",btnExplore:"हर्बल गार्डन देखें",btn3D:"3D एक्सप्लोरर शुरू करें",btnQuiz:"क्विज खेलें",btnAssistant:"एआई से पूछें",statSpecies:"औषधीय पौधे",statSystems:"आयुष प्रणालियाँ",statAccuracy:"प्रमाणित ज्ञान",statInteractive:"3D हॉटस्पॉट्स"},assistant:{heading:"आपका एआई-संचालित हर्बल ज्ञान सहायक",subheading:"प्रश्न पूछें, पारंपरिक ज्ञान का अन्वेषण करें, और भारत के औषधीय पौधों की समृद्धि की खोज करें।",placeholder:"पाचन स्वास्थ्य से जुड़े पारंपरिक औषधीय पौधे बताएं...",btnAsk:"पूछें",quickSuggestions:["Digestive Health","Immunity","Respiratory Health","Skin Health","Mental Wellbeing","General Wellness"],didYouKnow:"क्या आप जानते हैं?",fact:"आयुर्वेद में अधिकांश पाचक जड़ी-बूटियाँ जठराग्नि को प्रदीप्त करके काम करती हैं, जो समग्र स्वास्थ्य और रोग प्रतिरोधक क्षमता के लिए आवश्यक है।",recommendationPrefix:"पारंपरिक आयुष ज्ञान के अनुसार इससे संबंधित प्रमुख औषधीय पौधे:",emptyQuery:"कृपया वेदबॉट से परामर्श करने के लिए ऊपर कोई लक्षण या विषय टाइप करें।"},explorer:{title:"इंटरएक्टिव औषधीय पादप संग्रह",searchPlaceholder:"औषधीय पौधे खोजें (उदा. तुलसी, नीम, पाचन)...",allSystems:"सभी आयुष प्रणालियाँ",allCategories:"सभी स्वास्थ्य श्रेणियाँ",filterBySystem:"आयुष प्रणाली",filterByCategory:"स्वास्थ्य श्रेणी",filterByPart:"उपयोगी भाग",filterByHabitat:"जलवायु / क्षेत्र",viewCards:"कार्ड",view3D:"3D गार्डन",viewList:"सूची",showing:"दिखाए जा रहे हैं",of:"में से",plants:"पौधे",noResults:"चुने गए फिल्टर के अनुसार कोई पौधा नहीं मिला।",resetFilters:"रीसेट करें"},card:{viewDetails:"विवरण देखें",view3D:"3D मॉडल देखें",popular:"लोकप्रिय",parts:"उपयोगी भाग",benefits:"मुख्य लाभ",ayush:"संबद्ध आयुष प्रणाली"},modal:{tabOverview:"अवलोकन",tabSignificance:"पारंपरिक उपयोग",tabPharmacology:"आयुर्वेदिक गुण",tabCultivation:"खेती / बागवानी",tabPreparations:"घरेलू नुस्खे",tabNotes:"मेरे नोट्स",scientificName:"वानस्पतिक नाम",sanskritName:"संस्कृत / शास्त्रीय नाम",family:"पादप कुल",audioGuide:"ऑडियो गाइड",playAudio:"उच्चारण सुनें",stopAudio:"रोकें",bookmark:"बुकमार्क करें",bookmarked:"सहेजा गया",share:"साझा करें",precautions:"सावधानियां एवं मात्रा",notesPlaceholder:"इस औषधीय पौधे के संबंध में अपने अध्ययन नोट्स यहाँ लिखें...",saveNotes:"नोट्स सहेजें"},threeD:{title:"इंटरएक्टिव 3D वनस्पति संरचना प्रदर्शक",subtitle:"पौधे को घुमाएँ, ज़ूम करें और औषधीय तत्वों को जानने के लिए चमकते हुए नोड्स पर क्लिक करें।",selectPlant:"3D पौधा चुनें",rotateHint:"घुमाने के लिए ड्रैग करें • ज़ूम के लिए स्क्रॉल करें",resetView:"कैमरा रीसेट",wireframe:"वायरफ्रेम",dayNight:"दिन / रात मोड",anatomyDetails:"चयनित पादप अंग का विवरण",clickToInspect:"रासायनिक और चिकित्सीय जानकारी देखने के लिए 3D मॉडल पर किसी भी चमकते बिंदु पर क्लिक करें।"},quiz:{title:"हर्बल ज्ञान प्रश्नोत्तरी एवं चुनौती",subtitle:"अपने वानस्पतिक ज्ञान का परीक्षण करें, बैज अनलॉक करें और हर्बलिस्ट लीडरबोर्ड में आगे बढ़ें!",question:"प्रश्न",score:"स्कोर",streak:"लगातार सही",restart:"पुनः खेलें",congrats:"प्रश्नोत्तरी पूर्ण हुई!",xpEarned:"अर्जित अंक (XP)",correct:"सही उत्तर!",incorrect:"गलत उत्तर!",nextQuestion:"अगला प्रश्न",viewResults:"परिणाम देखें"},badges:{title:"उपलब्धियां एवं बैज",subtitle:"जैसे-जैसे आप पौधों को जानेंगे और क्विज़ हल करेंगे, नए बैज अनलॉक होते जाएँगे।",explorer:"पादप खोजी (5 पौधे)",scholar:"आयुष विद्वान (10 पौधे)",quizBeginner:"हर्बल नौसिखिया (1 क्विज)",quizMaster:"मास्टर हर्बलिस्ट (80%+ स्कोर)",botanist:"3D वनस्पति विशेषज्ञ",locked:"अनलॉक बाकी"},profile:{title:"हर्बलिस्ट अध्ययन डैशबोर्ड",subtitle:"भारत की पारंपरिक चिकित्सा पद्धति में आपकी सीखने की यात्रा।",level:"हर्बलिस्ट स्तर",xp:"कुल XP",exploredCount:"अध्ययन किए गए पौधे",quizCount:"पूर्ण की गई प्रश्नोत्तरी",bookmarksTitle:"बुकमार्क किए गए पौधे",notesTitle:"सहेजे गए अध्ययन नोट्स",noBookmarks:"अभी कोई पौधा बुकमार्क नहीं किया गया है।",noNotes:"अभी कोई नोट्स नहीं लिखे गए हैं।"},disclaimer:"अस्वीकरण: यह मंच एक शैक्षणिक प्लेटफॉर्म है, कोई नैदानिक या उपचार उपकरण नहीं।"},ta:{appName:"மெய்நிகர் மூலிகைத் தோட்டம்",appTagline:"பாரம்பரியத்தில் வேரூன்றி, ஆரோக்கியமான எதிர்காலத்தை நோக்கி",nav:{home:"முகப்பு",explore:"தோட்டம்",threeD:"3D தோட்டம்",assistant:"AI உதவியாளர்",ayush:"ஆயுஷ் அமைப்புகள்",tours:"சுற்றுப்பயணம்",quiz:"வினாடி வினா",learning:"கற்றல் மையம்",profile:"என் சுயவிவரம்",about:"பற்றி"},hero:{badge:"ஸ்மார்ட் இந்தியா ஹேக்கத்தான் 2026 • ஆயுஷ் கண்டுபிடிப்பு",title:"இந்தியாவின் புனித மூலிகைப் பாரம்பரியத்தை அறிக",subtitle:"ஆயுர்வேதம், யோகா, யுனானி, சித்தா மற்றும் ஹோமியோபதியில் மூலிகைகளின் அறிவை 3D முறையில் அனுபவிக்கவும்.",btnExplore:"மூலிகைத் தோட்டம் காண்க",btn3D:"3D தோட்டம் துவங்கு",btnQuiz:"வினாடி வினா ஆடு",btnAssistant:"AI உதவியாளரிடம் கேள்",statSpecies:"மூலிகை இனங்கள்",statSystems:"ஆயுஷ் அமைப்புகள்",statAccuracy:"சரிபார்க்கப்பட்ட அறிவு",statInteractive:"3D ஊடாடும் பகுதிகள்"},assistant:{heading:"உங்கள் AI மூலிகை அறிவு உதவியாளர்",subheading:"கேள்விகளைக் கேளுங்கள், பாரம்பரிய ஞானத்தை ஆராயுங்கள்.",placeholder:"செரிமான ஆரோக்கியத்துடன் தொடர்புடைய தாவரங்களைக் காட்டு...",btnAsk:"கேள்",quickSuggestions:["Digestive Health","Immunity","Respiratory Health","Skin Health","Mental Wellbeing","General Wellness"],didYouKnow:"உங்களுக்குத் தெரியுமா?",fact:"ஆயுர்வேதத்தில் பல செரிமான மூலிகைகள் அக்னியை (செரிமான தீ) தூண்டுவதன் மூலம் செயல்படுகின்றன.",recommendationPrefix:"பாரம்பரிய ஆயுஷ் அமைப்புகளின்படி பரிந்துரைக்கப்பட்ட தாவரங்கள்:",emptyQuery:"வேதபாட் உதவியைப் பெற மேலே உள்ள தலைப்பைத் தட்டச்சு செய்க."},explorer:{title:"ஊடாடும் மூலிகைத் தாவரத் தொகுப்பு",searchPlaceholder:"மூலிகைப் பெயர் தேடுக...",allSystems:"அனைத்து ஆயுஷ் முறைகள்",allCategories:"அனைத்து ஆரோக்கியப் பிரிவுகள்",filterBySystem:"ஆயுஷ் முறை",filterByCategory:"பிரிவு",filterByPart:"பயன்படும் பகுதி",filterByHabitat:"வாழிடம்",viewCards:"அட்டை",view3D:"3D தோட்டம்",viewList:"பட்டியல்",showing:"காட்டப்படுகிறது",of:"/",plants:"தாவரங்கள்",noResults:"தேடலுக்குரிய தாவரங்கள் ஏதுமில்லை.",resetFilters:"மீட்டமை"},card:{viewDetails:"விவரம் காண்க",view3D:"3D மாதிரி காண்க",popular:"பிரபலமானது",parts:"பயன்படும் பகுதி",benefits:"முக்கிய நன்மைகள்",ayush:"ஆயுஷ் முறை"},modal:{tabOverview:"கண்ணோட்டம்",tabSignificance:"பாரம்பரிய பயன்பாடு",tabPharmacology:"மருத்துவக் குணம்",tabCultivation:"வளர்ப்பு முறை",tabPreparations:"வீட்டு வைத்தியம்",tabNotes:"என் குறிப்புகள்",scientificName:"தாவரவியல் பெயர்",sanskritName:"பாரம்பரியப் பெயர்",family:"குடும்பம்",audioGuide:"ஒலி வழிகாட்டி",playAudio:"உச்சரிப்பைக் கேள்",stopAudio:"நிறுத்து",bookmark:"புக்மார்க்",bookmarked:"சேமிக்கப்பட்டது",share:"பகிர்",precautions:"முன்னெச்சரிக்கைகள்",notesPlaceholder:"உங்கள் குறிப்புகளை இங்கே எழுதுங்கள்...",saveNotes:"சேமி"},threeD:{title:"3D தாவர உடற்கூறியல் காட்சி",subtitle:"சுழற்றி, பெரிதாக்கி, ஒளிரும் புள்ளிகளைக் கிளிக் செய்து மருத்துவப் பகுதிகளைக் கற்றுக் கொள்ளுங்கள்.",selectPlant:"3D தாவரத்தைத் தேர்ந்தெடு",rotateHint:"சுழற்ற இழுக்கவும் • பெரிதாக்க ஸ்க்ரோல் செய்யவும்",resetView:"கேமரா மீட்டமை",wireframe:"வயர்ஃபிரேம்",dayNight:"பகல் / இரவு முறை",anatomyDetails:"தேர்ந்தெடுக்கப்பட்ட பகுதி",clickToInspect:"விவரங்களைக் காண 3D மாதிரியில் ஒளிரும் புள்ளிகளைக் கிளிக் செய்யவும்."},quiz:{title:"மூலிகை அறிவு வினாடி வினா",subtitle:"உங்கள் அறிவை சோதித்து புதிய பேட்ஜ்களை வெல்லுங்கள்!",question:"கேள்வி",score:"மதிப்பெண்",streak:"தொடர் வெற்றி",restart:"மீண்டும் விளையாடு",congrats:"வினாடி வினா முடிந்தது!",xpEarned:"ஈட்டிய புள்ளிகள் (XP)",correct:"சரியான விடை!",incorrect:"தவறான விடை!",nextQuestion:"அடுத்த கேள்வி",viewResults:"முடிவுகளைப் பார்"},badges:{title:"சாதனைகள் மற்றும் பேட்ஜ்கள்",subtitle:"தாவரங்களை ஆராய்ந்து வினாடி வினாக்களை முடிக்கும்போது பேட்ஜ்களைப் பெறுங்கள்.",explorer:"தாவர ஆய்வாளர் (5)",scholar:"ஆயுஷ் அறிஞர் (10)",quizBeginner:"மூலிகை தொடக்கநிலை",quizMaster:"மூலிகை மாஸ்டர்",botanist:"3D தாவரவியல் நிபுணர்",locked:"பூட்டப்பட்டது"},profile:{title:"மூலிகை கற்றல் டாஷ்போர்டு",subtitle:"இந்தியாவின் பாரம்பரிய மருத்துவத்தில் உங்கள் கற்றல் பயணம்.",level:"கற்றல் நிலை",xp:"மொத்த XP",exploredCount:"ஆராய்ந்த தாவரங்கள்",quizCount:"முடித்த வினாடி வினாக்கள்",bookmarksTitle:"சேமிக்கப்பட்ட தாவரங்கள்",notesTitle:"சேமித்த குறிப்புகள்",noBookmarks:"சேமிக்கப்பட்ட தாவரங்கள் எதுவும் இல்லை.",noNotes:"குறிப்புகள் எதுவும் இல்லை."},disclaimer:"பொறுப்புத் துறப்பு: இது ஒரு கல்வி தளம், சிகிச்சைக்கான கருவி அல்ல."},bn:{appName:"ভার্চুয়াল ভেষজ উদ্যান",appTagline:"ঐতিহ্যে প্রোথিত, সুস্থ আগামীর পথে",nav:{home:"হোম",explore:"উদ্যান অন্বেষণ",threeD:"3D উদ্যান",assistant:"এআই সহকারী",ayush:"আয়ুষ পদ্ধতি",tours:"ভার্চুয়াল ট্যুর",quiz:"ভেষজ কুইজ",learning:"জ্ঞান কেন্দ্র",profile:"আমার প্রোফাইল",about:"সম্পর্কে"},hero:{badge:"স্মার্ট ইন্ডিয়া হ্যাকাথন ২০২৬ • আয়ুষ উদ্ভাবন",title:"ভারতের পবিত্র ভেষজ ঐতিহ্য আবিষ্কার করুন",subtitle:"আয়ুর্বেদ, যোগ ও প্রাকৃতিক চিকিৎসা, ইউনানি, সিদ্ধ এবং হোমিওপ্যাথির ঔষধি গাছের শতবর্ষের জ্ঞান 3D মাধ্যমে উপভোগ করুন।",btnExplore:"ভেষজ উদ্যান দেখুন",btn3D:"3D এক্সপ্লোরার খুলুন",btnQuiz:"কুইজ খেলুন",btnAssistant:"এআই-কে জিজ্ঞাসা করুন",statSpecies:"ঔষধি প্রজাতি",statSystems:"আয়ুষ পদ্ধতি",statAccuracy:"যাচাইকৃত জ্ঞান",statInteractive:"3D হটস্পট"},assistant:{heading:"আপনার এআই চালিত ভেষজ জ্ঞান সহকারী",subheading:"প্রশ্ন করুন, ঐতিহ্যবাহী জ্ঞান অন্বেষণ করুন এবং ঔষধি গাছের সমৃদ্ধি আবিষ্কার করুন।",placeholder:"হজমের জন্য উপকারী ঔষধি গাছ দেখান...",btnAsk:"জিজ্ঞাসা করুন",quickSuggestions:["Digestive Health","Immunity","Respiratory Health","Skin Health","Mental Wellbeing","General Wellness"],didYouKnow:"আপনি কি জানেন?",fact:"আয়ুর্বেদে অনেক পাচক ভেষজ অগ্নির শক্তি বৃদ্ধি করে কাজ করে, যা সামগ্রিক জীবনীশক্তির জন্য অপরিহার্য।",recommendationPrefix:"ঐতিহ্যবাহী আয়ুষ জ্ঞান অনুযায়ী সম্পর্কিত ঔষধি গাছসমূহ:",emptyQuery:"বেদবটের পরামর্শ পেতে উপরে কোনো লক্ষণ বা বিষয় লিখুন।"},explorer:{title:"ইন্টারেক্টিভ ঔষধি উদ্ভিদ সংগ্রহ",searchPlaceholder:"ঔষধি উদ্ভিদ অনুসন্ধান করুন...",allSystems:"সকল আয়ুষ পদ্ধতি",allCategories:"সকল স্বাস্থ্য বিভাগ",filterBySystem:"আয়ুষ পদ্ধতি",filterByCategory:"স্বাস্থ্য বিভাগ",filterByPart:"ব্যবহৃত অংশ",filterByHabitat:"আবাসস্থল",viewCards:"কার্ড",view3D:"3D উদ্যান",viewList:"তালিকা",showing:"প্রদর্শিত হচ্ছে",of:"এর মধ্যে",plants:"উদ্ভিদ",noResults:"কোনো উদ্ভিদ মেলেনি।",resetFilters:"রিসেট"},card:{viewDetails:"বিস্তারিত দেখুন",view3D:"3D মডেল দেখুন",popular:"জনপ্রিয়",parts:"ব্যবহৃত অংশ",benefits:"মূল উপকারিতা",ayush:"আয়ুষ পদ্ধতি"},modal:{tabOverview:"সংক্ষিপ্ত বিবরণ",tabSignificance:"ঐতিহ্যগত ব্যবহার",tabPharmacology:"ভেষজ গুণাগুণ",tabCultivation:"চাষাবাদ",tabPreparations:"ঘরোয়া রেসিپی",tabNotes:"আমার নোট",scientificName:"বৈজ্ঞানিক নাম",sanskritName:"সংস্কৃত নাম",family:"উদ্ভিদ গোত্র",audioGuide:"অডিও গাইড",playAudio:"উচ্চারণ শুনুন",stopAudio:"থামুন",bookmark:"বুকমার্ক করুন",bookmarked:"সংরক্ষিত",share:"শেয়ার করুন",precautions:"সতর্কতা ও মাত্রা",notesPlaceholder:"আপনার নিজস্ব স্টাডি নোট লিখুন...",saveNotes:"সংরক্ষণ করুন"},threeD:{title:"ইন্টারেক্টিভ 3D উদ্ভিদ শারীরস্থান প্রদর্শক",subtitle:"ঘোরান, জুম করুন এবং উদ্ভিদের প্রতিটি অংশের ফাইটোকেমিক্যাল জানতে উজ্জ্বল হটস্পটগুলিতে ক্লিক করুন।",selectPlant:"3D উদ্ভিদ নির্বাচন করুন",rotateHint:"ঘোরাতে ড্র্যাগ করুন • জুম করতে স্ক্রোল করুন",resetView:"ক্যামেরা রিসেট",wireframe:"ওয়্যারফ্রেম",dayNight:"দিন / রাত মোড",anatomyDetails:"নির্বাচিত অংশের বিবরণ",clickToInspect:"বিস্তারিত দেখতে 3D মডেলের যেকোনো উজ্জ্বল বিন্দুতে ক্লিক করুন।"},quiz:{title:"ভেষজ জ্ঞান কুইজ ও চ্যালেঞ্জ",subtitle:"আপনার উদ্ভিদ জ্ঞান পরীক্ষা করুন এবং আকর্ষণীয় ব্যাজ অর্জন করুন!",question:"প্রশ্ন",score:"স্কোর",streak:"ধারাবাহিক",restart:"আবার খেলুন",congrats:"কুইজ সম্পন্ন হয়েছে!",xpEarned:"অর্জিত পয়েন্ট (XP)",correct:"সঠিক উত্তর!",incorrect:"ভুল উত্তর!",nextQuestion:"পরবর্তী প্রশ্ন",viewResults:"ফলাফল দেখুন"},badges:{title:"অর্জন ও ব্যাজ",subtitle:"উদ্ভিদ অন্বেষণ এবং কুইজ সম্পন্ন করে নতুন ব্যাজ আনলক করুন।",explorer:"উদ্ভিদ অভিযাত্রী (৫)",scholar:"আয়ুষ পণ্ডিত (১০)",quizBeginner:"ভেষজ শিক্ষানবিস",quizMaster:"মাস্টার হারবালিস্ট",botanist:"3D উদ্ভিদ বিশেষজ্ঞ",locked:"লক করা"},profile:{title:"হারবালিস্ট লার্নিং ড্যাশবোর্ড",subtitle:"ভারতের ঐতিহ্যবাহী চিকিৎসায় আপনার শেখার যাত্রা।",level:"শিক্ষার স্তর",xp:"মোট XP",exploredCount:"অধ্যয়ন করা উদ্ভিদ",quizCount:"সম্পন্ন কুইজ",bookmarksTitle:"বুকমার্ক করা গাছপালা",notesTitle:"সংরক্ষিত নোটস",noBookmarks:"কোনো উদ্ভিদ বুকমার্ক করা হয়নি।",noNotes:"কোনো স্টাডি নোট নেই।"},disclaimer:"দাবিত্যাগ: এটি একটি শিক্ষামূলক প্ল্যাটফর্ম, চিকিৎসার পরামর্শ নয়।"}},pg=Ue.createContext(),Zx=[{code:"en",label:"English",short:"EN",native:"English"},{code:"hi",label:"Hindi",short:"HI",native:"हिंदी"},{code:"ta",label:"Tamil",short:"TA",native:"தமிழ்"},{code:"bn",label:"Bengali",short:"BN",native:"বাংলা"}];function Qx({children:a}){const[e,t]=Ue.useState(()=>localStorage.getItem("vhg_language")||"en");Ue.useEffect(()=>{localStorage.setItem("vhg_language",e)},[e]);const r=tm[e]||tm.en,o=l=>!l||!l.commonNames?(l==null?void 0:l.name)||"":l.commonNames[e]||l.commonNames.en||l.name;return f.jsx(pg.Provider,{value:{lang:e,setLang:t,t:r,languages:Zx,getPlantCommonName:o},children:a})}const Jn=()=>Ue.useContext(pg),mg=Ue.createContext();function Jx({children:a}){const[e,t]=Ue.useState(()=>{const o=localStorage.getItem("vhg_theme");return o||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});Ue.useEffect(()=>{const o=document.documentElement;e==="dark"?o.classList.add("dark"):o.classList.remove("dark"),localStorage.setItem("vhg_theme",e)},[e]);const r=()=>{t(o=>o==="dark"?"light":"dark")};return f.jsx(mg.Provider,{value:{theme:e,toggleTheme:r,isDark:e==="dark"},children:a})}const ev=()=>Ue.useContext(mg);var ah={};(function a(e,t,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var D=new OffscreenCanvas(1,1),E=D.getContext("2d");E.fillRect(0,0,1,1);var j=D.transferToImageBitmap();E.createPattern(j,"no-repeat")}catch{return!1}return!0})();function p(){}function m(D){var E=t.exports.Promise,j=E!==void 0?E:e.Promise;return typeof j=="function"?new j(D):(D(p,p),null)}var x=(function(D,E){return{transform:function(j){if(D)return j;if(E.has(j))return E.get(j);var ve=new OffscreenCanvas(j.width,j.height),Y=ve.getContext("2d");return Y.drawImage(j,0,0),E.set(j,ve),ve},clear:function(){E.clear()}}})(d,new Map),v=(function(){var D=Math.floor(16.666666666666668),E,j,ve={},Y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(ne){var pe=Math.random();return ve[pe]=requestAnimationFrame(function ie(ge){Y===ge||Y+D-1<ge?(Y=ge,delete ve[pe],ne()):ve[pe]=requestAnimationFrame(ie)}),pe},j=function(ne){ve[ne]&&cancelAnimationFrame(ve[ne])}):(E=function(ne){return setTimeout(ne,D)},j=function(ne){return clearTimeout(ne)}),{frame:E,cancel:j}})(),y=(function(){var D,E,j={};function ve(Y){function ne(pe,ie){Y.postMessage({options:pe||{},callback:ie})}Y.init=function(ie){var ge=ie.transferControlToOffscreen();Y.postMessage({canvas:ge},[ge])},Y.fire=function(ie,ge,be){if(E)return ne(ie,null),E;var Pe=Math.random().toString(36).slice(2);return E=m(function(Je){function We(ot){ot.data.callback===Pe&&(delete j[Pe],Y.removeEventListener("message",We),E=null,x.clear(),be(),Je())}Y.addEventListener("message",We),ne(ie,Pe),j[Pe]=We.bind(null,{data:{callback:Pe}})}),E},Y.reset=function(){Y.postMessage({reset:!0});for(var ie in j)j[ie](),delete j[ie]}}return function(){if(D)return D;if(!r&&l){var Y=["var CONFETTI, SIZE = {}, module = {};","("+a.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([Y])))}catch(ne){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ne),null}ve(D)}return D}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(D,E){return E?E(D):D}function w(D){return D!=null}function _(D,E,j){return b(D&&w(D[E])?D[E]:M[E],j)}function S(D){return D<0?0:Math.floor(D)}function I(D,E){return Math.floor(Math.random()*(E-D))+D}function k(D){return parseInt(D,16)}function A(D){return D.map(q)}function q(D){var E=String(D).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:k(E.substring(0,2)),g:k(E.substring(2,4)),b:k(E.substring(4,6))}}function F(D){var E=_(D,"origin",Object);return E.x=_(E,"x",Number),E.y=_(E,"y",Number),E}function O(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function B(D){var E=D.getBoundingClientRect();D.width=E.width,D.height=E.height}function P(D){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=D,E}function C(D,E,j,ve,Y,ne,pe,ie,ge){D.save(),D.translate(E,j),D.rotate(ne),D.scale(ve,Y),D.arc(0,0,1,pe,ie,ge),D.restore()}function z(D){var E=D.angle*(Math.PI/180),j=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-E+(.5*j-Math.random()*j),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function te(D,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var j=E.tick++/E.totalTicks,ve=E.x+E.random*E.tiltCos,Y=E.y+E.random*E.tiltSin,ne=E.wobbleX+E.random*E.tiltCos,pe=E.wobbleY+E.random*E.tiltSin;if(D.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-j)+")",D.beginPath(),u&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))D.fill(fe(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(ne-ve)*.1,Math.abs(pe-Y)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var ie=Math.PI/10*E.wobble,ge=Math.abs(ne-ve)*.1,be=Math.abs(pe-Y)*.1,Pe=E.shape.bitmap.width*E.scalar,Je=E.shape.bitmap.height*E.scalar,We=new DOMMatrix([Math.cos(ie)*ge,Math.sin(ie)*ge,-Math.sin(ie)*be,Math.cos(ie)*be,E.x,E.y]);We.multiplySelf(new DOMMatrix(E.shape.matrix));var ot=D.createPattern(x.transform(E.shape.bitmap),"no-repeat");ot.setTransform(We),D.globalAlpha=1-j,D.fillStyle=ot,D.fillRect(E.x-Pe/2,E.y-Je/2,Pe,Je),D.globalAlpha=1}else if(E.shape==="circle")D.ellipse?D.ellipse(E.x,E.y,Math.abs(ne-ve)*E.ovalScalar,Math.abs(pe-Y)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):C(D,E.x,E.y,Math.abs(ne-ve)*E.ovalScalar,Math.abs(pe-Y)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var H=Math.PI/2*3,wt=4*E.scalar,tt=8*E.scalar,et=E.x,Ge=E.y,vt=5,Fe=Math.PI/vt;vt--;)et=E.x+Math.cos(H)*tt,Ge=E.y+Math.sin(H)*tt,D.lineTo(et,Ge),H+=Fe,et=E.x+Math.cos(H)*wt,Ge=E.y+Math.sin(H)*wt,D.lineTo(et,Ge),H+=Fe;else D.moveTo(Math.floor(E.x),Math.floor(E.y)),D.lineTo(Math.floor(E.wobbleX),Math.floor(Y)),D.lineTo(Math.floor(ne),Math.floor(pe)),D.lineTo(Math.floor(ve),Math.floor(E.wobbleY));return D.closePath(),D.fill(),E.tick<E.totalTicks}function J(D,E,j,ve,Y){var ne=E.slice(),pe=D.getContext("2d"),ie,ge,be=m(function(Pe){function Je(){ie=ge=null,pe.clearRect(0,0,ve.width,ve.height),x.clear(),Y(),Pe()}function We(){r&&!(ve.width===o.width&&ve.height===o.height)&&(ve.width=D.width=o.width,ve.height=D.height=o.height),!ve.width&&!ve.height&&(j(D),ve.width=D.width,ve.height=D.height),pe.clearRect(0,0,ve.width,ve.height),ne=ne.filter(function(ot){return te(pe,ot)}),ne.length?ie=v.frame(We):Je()}ie=v.frame(We),ge=Je});return{addFettis:function(Pe){return ne=ne.concat(Pe),be},canvas:D,promise:be,reset:function(){ie&&v.cancel(ie),ge&&ge()}}}function ce(D,E){var j=!D,ve=!!_(E||{},"resize"),Y=!1,ne=_(E,"disableForReducedMotion",Boolean),pe=l&&!!_(E||{},"useWorker"),ie=pe?y():null,ge=j?O:B,be=D&&ie?!!D.__confetti_initialized:!1,Pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Je;function We(H,wt,tt){for(var et=_(H,"particleCount",S),Ge=_(H,"angle",Number),vt=_(H,"spread",Number),Fe=_(H,"startVelocity",Number),L=_(H,"decay",Number),R=_(H,"gravity",Number),ae=_(H,"drift",Number),_e=_(H,"colors",A),Se=_(H,"ticks",Number),xe=_(H,"shapes"),Xe=_(H,"scalar"),Ne=!!_(H,"flat"),Oe=F(H),pt=et,Ee=[],ze=D.width*Oe.x,nt=D.height*Oe.y;pt--;)Ee.push(z({x:ze,y:nt,angle:Ge,spread:vt,startVelocity:Fe,color:_e[pt%_e.length],shape:xe[I(0,xe.length)],ticks:Se,decay:L,gravity:R,drift:ae,scalar:Xe,flat:Ne}));return Je?Je.addFettis(Ee):(Je=J(D,Ee,ge,wt,tt),Je.promise)}function ot(H){var wt=ne||_(H,"disableForReducedMotion",Boolean),tt=_(H,"zIndex",Number);if(wt&&Pe)return m(function(Fe){Fe()});j&&Je?D=Je.canvas:j&&!D&&(D=P(tt),document.body.appendChild(D)),ve&&!be&&ge(D);var et={width:D.width,height:D.height};ie&&!be&&ie.init(D),be=!0,ie&&(D.__confetti_initialized=!0);function Ge(){if(ie){var Fe={getBoundingClientRect:function(){if(!j)return D.getBoundingClientRect()}};ge(Fe),ie.postMessage({resize:{width:Fe.width,height:Fe.height}});return}et.width=et.height=null}function vt(){Je=null,ve&&(Y=!1,e.removeEventListener("resize",Ge)),j&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,be=!1)}return ve&&!Y&&(Y=!0,e.addEventListener("resize",Ge,!1)),ie?ie.fire(H,et,vt):We(H,et,vt)}return ot.reset=function(){ie&&ie.reset(),Je&&Je.reset()},ot}var de;function ue(){return de||(de=ce(null,{useWorker:!0,resize:!0})),de}function fe(D,E,j,ve,Y,ne,pe){var ie=new Path2D(D),ge=new Path2D;ge.addPath(ie,new DOMMatrix(E));var be=new Path2D;return be.addPath(ge,new DOMMatrix([Math.cos(pe)*Y,Math.sin(pe)*Y,-Math.sin(pe)*ne,Math.cos(pe)*ne,j,ve])),be}function G(D){if(!u)throw new Error("path confetti are not supported in this browser");var E,j;typeof D=="string"?E=D:(E=D.path,j=D.matrix);var ve=new Path2D(E),Y=document.createElement("canvas"),ne=Y.getContext("2d");if(!j){for(var pe=1e3,ie=pe,ge=pe,be=0,Pe=0,Je,We,ot=0;ot<pe;ot+=2)for(var H=0;H<pe;H+=2)ne.isPointInPath(ve,ot,H,"nonzero")&&(ie=Math.min(ie,ot),ge=Math.min(ge,H),be=Math.max(be,ot),Pe=Math.max(Pe,H));Je=be-ie,We=Pe-ge;var wt=10,tt=Math.min(wt/Je,wt/We);j=[tt,0,0,tt,-Math.round(Je/2+ie)*tt,-Math.round(We/2+ge)*tt]}return{type:"path",path:E,matrix:j}}function me(D){var E,j=1,ve="#000000",Y='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?E=D:(E=D.text,j="scalar"in D?D.scalar:j,Y="fontFamily"in D?D.fontFamily:Y,ve="color"in D?D.color:ve);var ne=10*j,pe=""+ne+"px "+Y,ie=new OffscreenCanvas(ne,ne),ge=ie.getContext("2d");ge.font=pe;var be=ge.measureText(E),Pe=Math.ceil(be.actualBoundingBoxRight+be.actualBoundingBoxLeft),Je=Math.ceil(be.actualBoundingBoxAscent+be.actualBoundingBoxDescent),We=2,ot=be.actualBoundingBoxLeft+We,H=be.actualBoundingBoxAscent+We;Pe+=We+We,Je+=We+We,ie=new OffscreenCanvas(Pe,Je),ge=ie.getContext("2d"),ge.font=pe,ge.fillStyle=ve,ge.fillText(E,ot,H);var wt=1/j;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[wt,0,0,wt,-Pe*wt/2,-Je*wt/2]}}t.exports=function(){return ue().apply(this,arguments)},t.exports.reset=function(){ue().reset()},t.exports.create=ce,t.exports.shapeFromPath=G,t.exports.shapeFromText=me})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ah,!1);const tv=ah.exports;ah.exports.create;const gg=Ue.createContext();function nv({children:a}){const[e,t]=Ue.useState(()=>{const y=localStorage.getItem("vhg_gamification");if(y)try{return JSON.parse(y)}catch{}return{xp:150,level:1,exploredPlants:["tulsi","neem"],viewed3DPlants:["tulsi"],bookmarkedPlants:["tulsi"],quizHistory:[],notes:{tulsi:"Excellent for morning herbal tea with fresh ginger and honey for immunity."},unlockedBadges:["explorer_novice"]}}),[r,o]=Ue.useState(null);Ue.useEffect(()=>{localStorage.setItem("vhg_gamification",JSON.stringify(e))},[e]);const l=()=>{try{tv({particleCount:80,spread:70,origin:{y:.6}})}catch{}},u=(y,M="")=>{t(b=>{const w=b.xp+y,_=Math.floor(w/200)+1;return _>b.level&&l(),{...b,xp:w,level:_}})},d=y=>{t(M=>{if(M.exploredPlants.includes(y))return M;const b=[...M.exploredPlants,y],w=[...M.unlockedBadges];return b.length>=5&&!w.includes("plant_explorer_5")&&(w.push("plant_explorer_5"),o("Plant Explorer (5 plants unlocked!)"),l()),b.length>=10&&!w.includes("ayush_scholar_10")&&(w.push("ayush_scholar_10"),o("AYUSH Scholar (10 plants unlocked!)"),l()),{...M,exploredPlants:b,unlockedBadges:w,xp:M.xp+25}})},p=y=>{t(M=>{if(M.viewed3DPlants.includes(y))return M;const b=[...M.viewed3DPlants,y],w=[...M.unlockedBadges];return b.length>=3&&!w.includes("3d_botanist")&&(w.push("3d_botanist"),o("3D Botanical Explorer"),l()),{...M,viewed3DPlants:b,unlockedBadges:w,xp:M.xp+35}})},m=y=>{t(M=>{const w=M.bookmarkedPlants.includes(y)?M.bookmarkedPlants.filter(_=>_!==y):[...M.bookmarkedPlants,y];return{...M,bookmarkedPlants:w}})},x=(y,M)=>{t(b=>({...b,notes:{...b.notes,[y]:M},xp:b.xp+15}))},v=(y,M,b)=>{t(w=>{const _=[{date:new Date().toISOString(),score:y,total:M,percentage:b},...w.quizHistory],S=[...w.unlockedBadges];S.includes("herbal_novice")||S.push("herbal_novice"),b>=80&&!S.includes("master_herbalist")&&(S.push("master_herbalist"),o("Master Herbalist (Score 80%+)"),l());const I=y*30+50;return{...w,quizHistory:_,unlockedBadges:S,xp:w.xp+I}})};return f.jsx(gg.Provider,{value:{...e,addXP:u,markPlantExplored:d,mark3DViewed:p,toggleBookmark:m,saveNote:x,recordQuizResult:v,recentBadge:r,clearRecentBadge:()=>o(null),triggerConfetti:l},children:a})}const Ki=()=>Ue.useContext(gg);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=(...a)=>a.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=a=>{const e=rv(a);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Du={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},sv=Ue.createContext({}),ov=()=>Ue.useContext(sv),lv=Ue.forwardRef(({color:a,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>{const{size:m=24,strokeWidth:x=2,absoluteStrokeWidth:v=!1,color:y="currentColor",className:M=""}=ov()??{},b=r??v?Number(t??x)*24/Number(e??m):t??x;return Ue.createElement("svg",{ref:p,...Du,width:e??m??Du.width,height:e??m??Du.height,stroke:a??y,strokeWidth:b,className:xg("lucide",M,o),...!l&&!av(d)&&{"aria-hidden":"true"},...d},[...u.map(([w,_])=>Ue.createElement(w,_)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(a,e)=>{const t=Ue.forwardRef(({className:r,...o},l)=>Ue.createElement(lv,{ref:l,iconNode:e,className:xg(`lucide-${iv(nm(a))}`,`lucide-${a}`,r),...o}));return t.displayName=nm(a),t};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],uv=ut("activity",cv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],hv=ut("arrow-left",dv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$s=ut("arrow-right",fv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],jl=ut("award",pv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],gv=ut("book-marked",mv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],Wl=ut("book-open",xv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],Ol=ut("bookmark",vv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],vg=ut("bot",yv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],na=ut("box",_v);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],im=ut("check",Sv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],yg=ut("circle-check",Mv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],bv=ut("circle-x",wv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Tv=ut("clock",Ev);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],Xl=ut("compass",Av);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Rv=ut("cpu",Cv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],Lu=ut("droplets",Nv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],kv=ut("external-link",Pv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Lv=ut("eye",Dv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Bl=ut("flame",Iv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Fv=ut("globe",Uv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],_g=ut("grid-3x3",Ov);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],zv=ut("layers",Bv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Sg=ut("leaf",Hv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Gv=ut("lightbulb",Vv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Wv=ut("list",jv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],qv=ut("lock",Xv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Mg=ut("map-pin",Yv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Kv=ut("menu",$v);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],md=ut("moon",Zv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],sh=ut("rotate-ccw",Qv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ey=ut("save",Jv);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],rm=ut("search",ty);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],iy=ut("send",ny);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],ay=ut("share-2",ry);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qs=ut("shield-check",sy);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ia=ut("sparkles",oy);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",key:"139s4v"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",key:"1dlkgp"}],["path",{d:"M5 21h14",key:"11awu3"}]],Pl=ut("sprout",ly);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],zl=ut("sun",cy);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],dy=ut("target",uy);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]],fy=ut("tree-deciduous",hy);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],my=ut("triangle-alert",py);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]],wg=ut("trophy",gy);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],vy=ut("user",xy);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],bg=ut("volume-2",yy);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Eg=ut("volume-x",_y);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hl=ut("x",Sy);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],wy=ut("zap",My);function by({activeTab:a,setActiveTab:e}){var b;const{lang:t,setLang:r,t:o,languages:l}=Jn(),{isDark:u,toggleTheme:d}=ev(),{xp:p,level:m}=Ki(),[x,v]=Ue.useState(!1),y=[{id:"home",label:o.nav.home,icon:Pl},{id:"explore",label:o.nav.explore,icon:Xl},{id:"3d-garden",label:o.nav.threeD,icon:na,badge:"Interactive"},{id:"assistant",label:o.nav.assistant,icon:vg,badge:"AI"},{id:"ayush",label:o.nav.ayush,icon:Wl},{id:"tours",label:o.nav.tours,icon:Mg},{id:"quiz",label:o.nav.quiz,icon:jl},{id:"profile",label:o.nav.profile,icon:vy}],M=w=>{e(w),v(!1),window.scrollTo({top:0,behavior:"smooth"})};return f.jsxs(f.Fragment,{children:[f.jsxs("header",{className:"lg:hidden sticky top-0 z-40 w-full glass-panel border-b border-emerald-500/20 px-4 py-3 flex items-center justify-between shadow-sm",children:[f.jsxs("button",{onClick:()=>M("home"),className:"flex items-center gap-2.5 text-left focus:outline-none",children:[f.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md",children:f.jsx(Pl,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"font-heading font-extrabold text-base tracking-tight text-slate-900 dark:text-white",children:"Herbal Garden"}),f.jsx("span",{className:"block text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold",children:"SIH 2026 • AYUSH"})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{onClick:d,"aria-label":"Toggle Theme",className:"p-2 rounded-xl glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-200",children:u?f.jsx(zl,{className:"w-4 h-4 text-amber-400"}):f.jsx(md,{className:"w-4 h-4 text-emerald-700"})}),f.jsx("button",{onClick:()=>v(!x),"aria-label":"Open Navigation",className:"p-2 rounded-xl bg-emerald-600 text-white shadow-md focus:outline-none",children:x?f.jsx(Hl,{className:"w-5 h-5"}):f.jsx(Kv,{className:"w-5 h-5"})})]})]}),x&&f.jsx("div",{onClick:()=>v(!1),className:"lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in"}),f.jsxs("aside",{className:`fixed top-0 bottom-0 left-0 z-50 w-72 lg:w-68 xl:w-72 h-screen glass-panel border-r border-emerald-500/20 flex flex-col justify-between p-4 sm:p-5 transition-transform duration-300 ease-in-out lg:translate-x-0 ${x?"translate-x-0":"-translate-x-full lg:translate-x-0"} bg-white dark:bg-herbal-darkCard overflow-y-auto`,children:[f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("button",{onClick:()=>M("home"),className:"flex items-center gap-3 text-left group focus:outline-none",children:[f.jsx("div",{className:"w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform",children:f.jsx(Pl,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("span",{className:"font-heading font-extrabold text-lg tracking-tight text-slate-900 dark:text-white leading-tight block",children:"Virtual Herbal"}),f.jsx("span",{className:"text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 block",children:"Garden • AYUSH"})]})]}),f.jsx("button",{onClick:()=>v(!1),className:"lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",children:f.jsx(Hl,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-800 text-[11px] font-bold text-emerald-800 dark:text-emerald-300 flex items-center justify-between",children:[f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx(qs,{className:"w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"}),"SIH 2026 • PSS03"]}),f.jsx("span",{className:"text-[10px] uppercase font-extrabold tracking-wider bg-emerald-600 text-white px-1.5 py-0.5 rounded-md",children:"Govt. AYUSH"})]}),f.jsxs("nav",{className:"space-y-1 pt-1",children:[f.jsx("div",{className:"text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 pb-1",children:"Menu Navigation"}),y.map(w=>{const _=w.icon,S=a===w.id;return f.jsxs("button",{onClick:()=>M(w.id),className:`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${S?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-700 dark:hover:text-emerald-300"}`,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(_,{className:`w-4 h-4 ${S?"text-white":"text-emerald-600 dark:text-emerald-400"}`}),f.jsx("span",{children:w.label})]}),w.badge&&f.jsx("span",{className:`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${S?"bg-white/20 text-white":"bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40"}`,children:w.badge})]},w.id)})]})]}),f.jsxs("div",{className:"space-y-4 pt-6 border-t border-emerald-500/10",children:[f.jsxs("div",{onClick:()=>M("profile"),className:"cursor-pointer p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300/70 dark:border-amber-800/60 space-y-1.5 transition-transform hover:scale-[1.02]",children:[f.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-300",children:[f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx(ia,{className:"w-3.5 h-3.5 text-amber-600 fill-amber-600"}),"Level ",m," Explorer"]}),f.jsxs("span",{children:[p," XP"]})]}),f.jsx("div",{className:"w-full bg-amber-200/60 dark:bg-amber-900/60 h-1.5 rounded-full overflow-hidden",children:f.jsx("div",{className:"bg-amber-600 h-full rounded-full transition-all",style:{width:`${Math.min(100,p%200/2)}%`}})})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400",children:[f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx(Fv,{className:"w-3.5 h-3.5 text-emerald-600"}),"Language"]}),f.jsx("span",{className:"text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400",children:(b=l.find(w=>w.code===t))==null?void 0:b.label})]}),f.jsx("div",{className:"grid grid-cols-4 gap-1",children:l.map(w=>f.jsx("button",{onClick:()=>r(w.code),className:`py-1.5 rounded-xl text-xs font-bold transition-all text-center ${t===w.code?"bg-emerald-600 text-white shadow-sm":"glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"}`,children:w.short},w.code))})]}),f.jsxs("div",{className:"flex items-center justify-between pt-1",children:[f.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-3 py-2 rounded-xl glass-panel border border-emerald-500/20 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-emerald-500 transition-colors",children:[u?f.jsx(zl,{className:"w-4 h-4 text-amber-400"}):f.jsx(md,{className:"w-4 h-4 text-emerald-700"}),f.jsx("span",{children:u?"Light Mode":"Dark Mode"})]}),f.jsx("button",{onClick:()=>M("profile"),title:"My Profile",className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-xs shadow-md ring-2 ring-emerald-500/30 hover:ring-emerald-500 transition-all",children:"VS"})]})]})]})]})}function Ey({setActiveTab:a}){const{t:e}=Jn(),t=[{name:"Ayurveda",color:"border-emerald-500/40 text-emerald-800 dark:text-emerald-300 bg-emerald-500/10"},{name:"Yoga & Naturopathy",color:"border-amber-500/40 text-amber-800 dark:text-amber-300 bg-amber-500/10"},{name:"Unani",color:"border-purple-500/40 text-purple-800 dark:text-purple-300 bg-purple-500/10"},{name:"Siddha",color:"border-orange-500/40 text-orange-800 dark:text-orange-300 bg-orange-500/10"},{name:"Homeopathy",color:"border-sky-500/40 text-sky-800 dark:text-sky-300 bg-sky-500/10"}];return f.jsx("section",{className:"relative overflow-hidden py-8 sm:py-12 lg:py-16",children:f.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto text-center space-y-6",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/40 shadow-sm",children:[f.jsx(qs,{className:"w-4 h-4 text-emerald-600 dark:text-emerald-400"}),f.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300",children:e.hero.badge})]}),f.jsx("h1",{className:"font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-tight",children:e.hero.title}),f.jsx("p",{className:"text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed",children:e.hero.subtitle}),f.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 pt-1",children:t.map(r=>f.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md transition-transform hover:scale-105 ${r.color}`,children:r.name},r.name))}),f.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-3",children:[f.jsxs("button",{onClick:()=>a("explore"),className:"flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 active:scale-95 transition-all",children:[f.jsx(Xl,{className:"w-4 h-4"}),e.hero.btnExplore]}),f.jsxs("button",{onClick:()=>a("3d-garden"),className:"flex items-center gap-2 px-6 py-3 rounded-2xl glass-panel border border-emerald-500/40 text-emerald-900 dark:text-emerald-200 font-bold text-xs sm:text-sm hover:border-emerald-500 hover:scale-105 active:scale-95 transition-all shadow-sm",children:[f.jsx(na,{className:"w-4 h-4 text-emerald-600 dark:text-emerald-400"}),e.hero.btn3D]}),f.jsxs("button",{onClick:()=>a("quiz"),className:"flex items-center gap-2 px-5 py-3 rounded-2xl glass-panel border border-amber-500/40 text-amber-900 dark:text-amber-300 font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-sm",children:[f.jsx(jl,{className:"w-4 h-4 text-amber-600"}),e.hero.btnQuiz]})]}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-emerald-500/20",children:[f.jsxs("div",{className:"glass-panel p-4 rounded-2xl border border-emerald-500/20 text-center space-y-1",children:[f.jsx("div",{className:"w-9 h-9 mx-auto rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400",children:f.jsx(Sg,{className:"w-4 h-4"})}),f.jsx("div",{className:"font-heading font-extrabold text-xl text-slate-900 dark:text-white",children:"12 Species"}),f.jsx("div",{className:"text-[11px] font-semibold text-slate-500 dark:text-slate-400",children:e.hero.statSpecies})]}),f.jsxs("div",{className:"glass-panel p-4 rounded-2xl border border-emerald-500/20 text-center space-y-1",children:[f.jsx("div",{className:"w-9 h-9 mx-auto rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400",children:f.jsx(zv,{className:"w-4 h-4"})}),f.jsx("div",{className:"font-heading font-extrabold text-xl text-slate-900 dark:text-white",children:"5 Systems"}),f.jsx("div",{className:"text-[11px] font-semibold text-slate-500 dark:text-slate-400",children:e.hero.statSystems})]}),f.jsxs("div",{className:"glass-panel p-4 rounded-2xl border border-emerald-500/20 text-center space-y-1",children:[f.jsx("div",{className:"w-9 h-9 mx-auto rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400",children:f.jsx(qs,{className:"w-4 h-4"})}),f.jsx("div",{className:"font-heading font-extrabold text-xl text-slate-900 dark:text-white",children:"Classical"}),f.jsx("div",{className:"text-[11px] font-semibold text-slate-500 dark:text-slate-400",children:e.hero.statAccuracy})]}),f.jsxs("div",{className:"glass-panel p-4 rounded-2xl border border-emerald-500/20 text-center space-y-1",children:[f.jsx("div",{className:"w-9 h-9 mx-auto rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400",children:f.jsx(na,{className:"w-4 h-4"})}),f.jsx("div",{className:"font-heading font-extrabold text-xl text-slate-900 dark:text-white",children:"3D Models"}),f.jsx("div",{className:"text-[11px] font-semibold text-slate-500 dark:text-slate-400",children:e.hero.statInteractive})]})]})]})})}const Zn=[{id:"tulsi",name:"Tulsi",commonNames:{en:"Holy Basil",hi:"तुलसी (Tulsi)",ta:"துளசி (Thulasi)",bn:"তুলসী (Tulsi)"},scientificName:"Ocimum tenuiflorum",sanskritName:"Surasa, Tulasi (सुरसा, तुलसी)",family:"Lamiaceae",isPopular:!0,has3DModel:!0,image:"/images/plants/tulsi.jpg",bannerImage:"/images/plants/tulsi.jpg",ayushSystems:["Ayurveda","Yoga & Naturopathy","Siddha","Unani"],healthCategories:["Immunity","Respiratory Health","Digestive Health","Mental Wellbeing"],shortDescription:"Known as 'The Incomparable One' and Queen of Herbs, Tulsi is a premier adaptogen revered for respiratory vitality and immune defense.",traditionalSignificance:"Revered in Charaka Samhita as an auspicious Rasayana. In classical Ayurveda, it strengthens Agni (digestive fire), calms Vata and Kapha doshas, and dispels toxic accumulations (Ama).",medicinalUses:["Relieves cough, cold, bronchitis, and respiratory congestion","Supports gut balance, reduces bloating, and stimulates sluggish digestion","Potent adaptogen that lowers cortisol and mitigates everyday mental stress","Natural anti-microbial agent for oral health and topical skin cleansing"],ayurvedicProfile:{rasa:"Katu (Pungent), Tikta (Bitter)",guna:"Laghu (Light), Ruksha (Dry)",virya:"Ushna (Heating)",vipaka:"Katu (Pungent)",doshaKarma:"Balances Kapha & Vata; moderately increases Pitta"},phytochemicals:["Eugenol","Ursolic Acid","Rosmarinic Acid","Caryophyllene","Apigenin"],partsUsed:["Leaves","Seeds","Roots","Flowers"],cultivation:{climate:"Tropical / Subtropical",soil:"Well-drained, rich loamy soil (pH 6.5 - 7.5)",sunlight:"4–6 hours of direct sunlight daily",watering:"Moderate; keep soil evenly moist without waterlogging",homeGardening:"Easily cultivated in earthen clay pots on balconies and courtyards."},preparations:[{name:"Tulsi Herbal Tea (Swarasa / Kashayam)",usage:"Boil 5-7 fresh leaves in water with ginger and honey for immunity."},{name:"Tulsi Leaf Powder (Churna)",usage:"1-2 grams with warm water twice daily."},{name:"Tulsi Essential Oil / Nasya",usage:"Inhaled in steam for sinus congestion."}],precautions:"Due to its heating nature, avoid excessive dosage during pregnancy or when taking anticoagulant medication.",region:"Throughout India, Southeast Asia",difficulty:"Easy",threeDConfig:{modelType:"tulsi",scale:1.2,cameraPos:[0,1.8,3.2],hotspots:[{id:"leaves",name:"Leaves (Patra)",pos:[0,1.2,.4],description:"Rich in essential oil eugenol; primary part used for teas and cough syrups."},{id:"flowers",name:"Flower Inflorescence (Manjari)",pos:[0,2.1,.1],description:"Loaded with fragrant seeds; used for digestive calm and cooling drinks."},{id:"stem",name:"Stem & Bark (Kanda)",pos:[0,.7,0],description:"Used to craft sacred Tulsi beads (Kanthi) with therapeutic skin contact."},{id:"root",name:"Root System (Moola)",pos:[0,-.2,0],description:"Applied in classical formulations for fever management and insect bites."}]}},{id:"neem",name:"Neem",commonNames:{en:"Indian Lilac / Neem",hi:"नीम (Neem)",ta:"வேம்பு (Vembu)",bn:"নিম (Neem)"},scientificName:"Azadirachta indica",sanskritName:"Nimba, Arishta (निम्ब, अरिष्ट)",family:"Meliaceae",isPopular:!0,has3DModel:!0,image:"/images/plants/neem.jpg",bannerImage:"/images/plants/neem.jpg",ayushSystems:["Ayurveda","Unani","Siddha","Yoga & Naturopathy"],healthCategories:["Skin Health","Immunity","General Wellness","Digestive Health"],shortDescription:"Celebrated as the 'Village Pharmacy of India', Neem is nature's most powerful purifier with bitter cooling properties.",traditionalSignificance:"The Sanskrit word 'Arishta' means 'reliever of sickness'. Renowned in Unani as a premier blood purifier (Musaffi-e-Dam) and in Siddha for deep skin restoration.",medicinalUses:["Treats acne, eczema, psoriasis, and diverse inflammatory skin conditions","Purifies bloodstream and eliminates metabolic toxins (Rakta Shodhaka)","Natural dental cleaner (Datun) that fights plaque and periodontal pathogens","Supports healthy blood sugar levels and enhances liver function"],ayurvedicProfile:{rasa:"Tikta (Bitter), Kashaya (Astringent)",guna:"Laghu (Light), Ruksha (Dry)",virya:"Sheeta (Cooling)",vipaka:"Katu (Pungent)",doshaKarma:"Balances Pitta & Kapha; may aggravate Vata if taken in excess"},phytochemicals:["Azadirachtin","Nimbin","Nimbidin","Quercetin","Gedunin"],partsUsed:["Leaves","Bark","Twigs","Seeds","Seed Oil"],cultivation:{climate:"Arid / Semi-arid / Tropical",soil:"Sandy, stony or nutrient-poor soil with good drainage",sunlight:"Full direct sunlight",watering:"Extremely drought resistant; minimal water once established",homeGardening:"Planted as shade tree outdoors; dwarfed varieties in terrace gardens."},preparations:[{name:"Neem Leaf Paste (Lepa)",usage:"Crushed leaves applied topically for pimples, insect bites, and wounds."},{name:"Neem Decoction Wash (Kashayam)",usage:"Boiled leaf water used as antiseptic rinse for skin and hair."},{name:"Neem Twig (Datun)",usage:"Chewed end used as natural antibacterial toothbrush."}],precautions:"Avoid prolonged internal use by infants, pregnant women, or severely dehydrated individuals.",region:"Widespread across the Indian subcontinent",difficulty:"Very Easy",threeDConfig:{modelType:"neem",scale:1.1,cameraPos:[0,2,3.5],hotspots:[{id:"leaves",name:"Compound Leaves",pos:[.3,1.8,.3],description:"Bitter serrated leaves used for blood cleansing, skin remedies, and pest control."},{id:"bark",name:"Stem Bark",pos:[0,.9,0],description:"High in astringent tannins; used in periodontal powders and bitter febrifuges."},{id:"fruit",name:"Neem Drupe / Seed",pos:[-.2,1.4,.3],description:"Pressed to extract cold-pressed Neem oil, a premier organic antimicrobial oil."},{id:"root",name:"Taproot",pos:[0,.1,0],description:"Extracts historically used in Siddha medicine for deep-seated skin conditions."}]}},{id:"aloe-vera",name:"Aloe Vera",commonNames:{en:"Aloe Vera / Barbados Aloe",hi:"घृतकुमारी / एलोवेरा (Ghritkumari)",ta:"சோற்றுக்கற்றாழை (Sotru Katraazhai)",bn:"ঘৃতকুমারী (Ghritakumari)"},scientificName:"Aloe barbadensis miller",sanskritName:"Ghritakumari, Kumari (घृतकुमारी, कुमारी)",family:"Asphodelaceae",isPopular:!0,has3DModel:!0,image:"/images/plants/aloe-vera.jpg",bannerImage:"/images/plants/aloe-vera.jpg",ayushSystems:["Ayurveda","Siddha","Homeopathy","Yoga & Naturopathy","Unani"],healthCategories:["Skin Health","Digestive Health","General Wellness"],shortDescription:"The 'Youth Maiden' herb, famed for its soothing cooling gel that heals burns, rejuvenates skin, and lubricates digestion.",traditionalSignificance:"In Sanskrit, 'Kumari' means young maiden—indicating its unique affinity for female vitality, youthful skin cellular turn-over, and Pitta pacification.",medicinalUses:["Deeply moisturizes, heals burns, sunburns, cuts, and dermatological abrasions","Soothes acid reflux, gastritis, and balances digestive inflammation","Acts as a gentle laxative and detoxifier for sluggish colon motility","Strengthens hair roots, eliminates scalp dandruff, and balances sebum"],ayurvedicProfile:{rasa:"Tikta (Bitter), Madhura (Sweet)",guna:"Guru (Heavy), Snigdha (Unctuous), Picchila (Slimy)",virya:"Sheeta (Cooling)",vipaka:"Madhura (Sweet)",doshaKarma:"Balances all three doshas (Tridosha Shamaka), particularly cooling to Pitta"},phytochemicals:["Aloin","Acemannan","Glucomannan","Anthraquinones","Vitamin C & E"],partsUsed:["Inner Leaf Gel (Pulp)","Leaf Juice","Latex"],cultivation:{climate:"Arid / Tropical / Subtropical succulent",soil:"Well-draining sandy loam or cactus mix",sunlight:"Bright indirect to moderate direct sunlight",watering:"Low water requirement; allow soil to dry between waterings",homeGardening:"Thrives in windowsill pots and outdoor succulent beds."},preparations:[{name:"Fresh Kumari Gel (Pulp)",usage:"Extracted clear inner fillet applied to face or consumed with cumin for Pitta balance."},{name:"Kumaryasava",usage:"Classical fermented Ayurvedic elixir for anemia, liver vitality, and menstrual harmony."},{name:"Hair Mask",usage:"Blended gel combined with coconut oil and hibiscus for silky follicles."}],precautions:"Do not ingest the bitter yellow aloin latex layer if pregnant or experiencing acute inflammatory bowel flares.",region:"Indigenous to Mediterranean & dry regions of India",difficulty:"Very Easy",threeDConfig:{modelType:"aloe",scale:1.3,cameraPos:[0,1.4,2.8],hotspots:[{id:"leaves",name:"Fleshy Rosette Leaves",pos:[.4,.9,.4],description:"Stores soothing mucilage gel and acemannan polysaccharides for tissue regeneration."},{id:"stem",name:"Crown Base",pos:[0,.3,0],description:"Central growth axis producing new offsets for propagation."},{id:"root",name:"Fibrous Root Network",pos:[0,-.1,0],description:"Shallow root system specialized for rapid moisture capture in arid soils."}]}},{id:"ashwagandha",name:"Ashwagandha",commonNames:{en:"Indian Ginseng / Winter Cherry",hi:"अश्वगंधा (Ashwagandha)",ta:"அமுக்கிரா (Amukkara)",bn:"অশ্বগন্ধা (Ashwagandha)"},scientificName:"Withania somnifera",sanskritName:"Ashwagandha, Varahakarni (अश्वगंधा)",family:"Solanaceae",isPopular:!0,has3DModel:!0,image:"/images/plants/ashwagandha.jpg",bannerImage:"/images/plants/ashwagandha.jpg",ayushSystems:["Ayurveda","Unani","Siddha"],healthCategories:["Mental Wellbeing","Immunity","General Wellness"],shortDescription:"The pinnacle Medhya & Balya herb of Ayurveda, translating to 'smell and strength of a stallion', bestowing stamina and serenity.",traditionalSignificance:"Celebrated as an elite Rasayana in Charaka Samhita. It nourishes the nervous system (Majja Dhatu) and balances excess Vata caused by burnout.",medicinalUses:["Clinically recognized adaptogen that reduces serum cortisol and anxiety","Enhances deep REM sleep quality without morning sedative grogginess","Boosts physical stamina, muscular endurance, and athletic performance","Supports cognitive recall, focus, and neuroprotective cell vitality"],ayurvedicProfile:{rasa:"Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)",guna:"Guru (Heavy), Snigdha (Unctuous)",virya:"Ushna (Heating)",vipaka:"Madhura (Sweet)",doshaKarma:"Pacifies Vata & Kapha; neutral-to-slight increase in Pitta"},phytochemicals:["Withanolides (Withaferin A)","Withanosides","Alkaloids (Anaferine)","Saponins"],partsUsed:["Dried Roots (Primary)","Leaves","Berries"],cultivation:{climate:"Dry, sub-tropical regions; needs dry weather for root formation",soil:"Sandy loam or light red soils, pH 7.5 to 8.0",sunlight:"Full sunlight",watering:"Low to moderate; requires dry period before root harvesting",homeGardening:"Cultivated in deep containers to allow root elongation."},preparations:[{name:"Ashwagandha Ksheerapaka (Milk Decoction)",usage:"Simmer 1 tsp root powder in warm milk with nutmeg before bedtime."},{name:"Ashwagandharishta",usage:"Traditional fermented liquid tonic for memory and physical exhaustion."},{name:"Ashwagandha Churna with Ghee",usage:"Combined with warm A2 ghee and honey for tissue strength."}],precautions:"Caution in autoimmune thyroid overactivity or acute severe gastritis.",region:"Central and Northwestern India (Madhya Pradesh, Rajasthan)",difficulty:"Moderate",threeDConfig:{modelType:"ashwagandha",scale:1.1,cameraPos:[0,1.6,3],hotspots:[{id:"root",name:"Medicinal Tuberous Root",pos:[0,.1,0],description:"The power center of the plant; packed with withanolides for vitality and neural rest."},{id:"leaves",name:"Velvety Leaves",pos:[.2,1.2,.2],description:"Used topically for joint inflammation and skin boils."},{id:"fruit",name:"Orange-Red Berries",pos:[-.2,1.5,.1],description:"Enclosed in papery calyces; used in traditional enzyme preparations."}]}},{id:"turmeric",name:"Turmeric",commonNames:{en:"Turmeric / Golden Spice",hi:"हल्दी (Haldi)",ta:"மஞ்சள் (Manjal)",bn:"হলুদ (Holud)"},scientificName:"Curcuma longa",sanskritName:"Haridra, Kanchani (हरिद्रा, काञ्चनी)",family:"Zingiberaceae",isPopular:!0,has3DModel:!0,image:"/images/plants/turmeric.jpg",bannerImage:"/images/plants/turmeric.jpg",ayushSystems:["Ayurveda","Siddha","Unani","Homeopathy"],healthCategories:["Immunity","Skin Health","Digestive Health","General Wellness"],shortDescription:"The sacred golden root of India with unmatched anti-inflammatory, antioxidant, and wound-healing prowess.",traditionalSignificance:"Detailed in Sushruta Samhita for surgical dressings and blood detoxification (Varnya & Rakta Prasadana).",medicinalUses:["Powerful systemic anti-inflammatory soothing joint stiffness and arthritis","Potent antimicrobial and skin complexion enhancer (Varnya)","Aids bile production, fatty liver metabolism, and digestive comfort","Supports cardiovascular endothelium and cellular DNA protection"],ayurvedicProfile:{rasa:"Tikta (Bitter), Katu (Pungent)",guna:"Laghu (Light), Ruksha (Dry)",virya:"Ushna (Heating)",vipaka:"Katu (Pungent)",doshaKarma:"Tridosha Shamaka (Pacifies Kapha and Vata; balances Pitta in moderation)"},phytochemicals:["Curcumin","Demethoxycurcumin","Turmerones","Zingiberene"],partsUsed:["Underground Rhizomes (Fresh & Dried)"],cultivation:{climate:"Warm and humid tropical climate (20°C–35°C)",soil:"Rich, loose, well-drained loamy soil with abundant organic compost",sunlight:"Partial shade to full morning sun",watering:"Regular moderate watering; keep soil moist but never muddy",homeGardening:"Grows remarkably well in 12-inch grow bags from live rhizome fingers."},preparations:[{name:"Golden Milk (Haldi Doodh)",usage:"1/2 tsp pure turmeric simmered in milk with a pinch of black pepper (piperine)."},{name:"Haridra Khanda",usage:"Classical confection used for allergic hives, skin rashes, and respiratory allergies."},{name:"Topical Ubtan Paste",usage:"Turmeric with chickpea flour and rosewater for radiant skin."}],precautions:"Use therapeutic doses carefully if diagnosed with acute gallstones or bile duct obstructions.",region:"Southern & Eastern India (Erode, Andhra Pradesh, Meghalaya)",difficulty:"Easy",threeDConfig:{modelType:"turmeric",scale:1.2,cameraPos:[0,1.5,3],hotspots:[{id:"root",name:"Golden Rhizome (Kanda)",pos:[0,.2,0],description:"Underground spice powerhouse concentrated with curcumin and volatile essential oils."},{id:"leaves",name:"Broad Lanceolate Leaves",pos:[.1,1.4,.2],description:"Aromatic leaves used in coastal Indian cooking for natural steaming fragrance."},{id:"stem",name:"Pseudostem & Bracts",pos:[0,.8,0],description:"Upright stem leading to picturesque pale yellow flower spikes."}]}},{id:"ginger",name:"Ginger",commonNames:{en:"Ginger / Great Medicine",hi:"अदरक / सोंठ (Adrak / Sonth)",ta:"இஞ்சி / சுக்கு (Inji / Sukku)",bn:"আদা (Aada)"},scientificName:"Zingiber officinale",sanskritName:"Ardraka (Fresh), Shunthi (Dry) (आर्द्रक, शुण्ठी)",family:"Zingiberaceae",isPopular:!0,has3DModel:!0,image:"/images/plants/ginger.jpg",bannerImage:"/images/plants/ginger.jpg",ayushSystems:["Ayurveda","Unani","Siddha","Homeopathy"],healthCategories:["Digestive Health","Respiratory Health","Immunity"],shortDescription:"Acclaimed in Ayurveda as 'Vishwabheshaja' (The Universal Medicine), ignite of digestive fire and vanquisher of nausea.",traditionalSignificance:"Regarded as the universal herbal catalyst. Fresh ginger is Deepana (appetite stimulator), while dry ginger (Shunthi) pacifies Vata without aggravating Pitta.",medicinalUses:["Alleviates indigestion, gas, bloating, and stomach heaviness","Highly effective for morning sickness, motion nausea, and vomiting","Breaks down respiratory mucus and expels cold toxins","Provides relief in menstrual cramping and inflammatory joint pain"],ayurvedicProfile:{rasa:"Katu (Pungent)",guna:"Laghu (Light), Snigdha (Unctuous in dry form)",virya:"Ushna (Heating)",vipaka:"Madhura (Sweet - dry form), Katu (Fresh form)",doshaKarma:"Pacifies Vata & Kapha; excess fresh form can raise Pitta"},phytochemicals:["Gingerols","Shogaols","Zingerone","Paradols","Zingiberene"],partsUsed:["Fresh Rhizome","Dried Rhizome (Sonth / Shunthi)"],cultivation:{climate:"Warm, humid climate with generous shade",soil:"Rich loamy soil with abundant decomposed organic matter",sunlight:"Filtered sunlight / Partial shade",watering:"Consistent moisture; avoid stagnant water",homeGardening:"Grows readily in deep pots or raised patio beds."},preparations:[{name:"Ginger Salt Appetizer",usage:"Slice of fresh ginger with rock salt and lemon juice 10 minutes prior to meals."},{name:"Trikatu Churna",usage:"Famous classical trinity (Dry Ginger + Black Pepper + Pippali) for metabolic Agni."},{name:"Ginger Tea with Honey",usage:"Crushed ginger boiled in water for cough, sore throat, and shivering colds."}],precautions:"Moderate intake if suffering from active peptic ulcers or acute bleeding conditions.",region:"Kerala, Assam, Meghalaya, Karnataka",difficulty:"Easy",threeDConfig:{modelType:"ginger",scale:1.2,cameraPos:[0,1.4,2.9],hotspots:[{id:"root",name:"Knobby Rhizome",pos:[0,.2,0],description:"Aromatic subterranean stem loaded with gingerols and digestive bio-actives."},{id:"stem",name:"Reed-like Pseudostem",pos:[0,.8,0],description:"Slender leafy stems growing up to 1 meter in height."},{id:"leaves",name:"Linear-Lanceolate Leaves",pos:[.2,1.2,.1],description:"Narrow lush green foliage with distinctive pleasant spicy aroma when bruised."}]}},{id:"brahmi",name:"Brahmi",commonNames:{en:"Water Hyssop / Herb of Grace",hi:"ब्राह्मी (Brahmi)",ta:"பிராமி (Neer Brahmi)",bn:"ব্রাহ্মী শাক (Brahmi)"},scientificName:"Bacopa monnieri",sanskritName:"Brahmi, Saraswati (ब्राह्मी, सरस्वती)",family:"Plantaginaceae",isPopular:!1,has3DModel:!1,image:"/images/plants/brahmi.jpg",bannerImage:"/images/plants/brahmi.jpg",ayushSystems:["Ayurveda","Siddha","Unani"],healthCategories:["Mental Wellbeing","General Wellness"],shortDescription:"The premier Medhya Rasayana brain tonic that enhances neuro-synaptic transmission, memory retention, and mental composure.",traditionalSignificance:"Named after Brahma, the creator of cosmic wisdom. Charaka classifies Brahmi as Prajasthapana and Medhya (intelligence enhancer).",medicinalUses:["Significantly improves memory recall, cognitive speed, and study retention","Reduces mental fatigue, panic, nervous agitation, and ADHD symptoms","Protects brain neurons from oxidative neurodegenerative stress","Enhances peaceful nocturnal sleep when massaged on scalp as oil"],ayurvedicProfile:{rasa:"Tikta (Bitter), Kashaya (Astringent)",guna:"Laghu (Light), Sara (Flowing)",virya:"Sheeta (Cooling)",vipaka:"Madhura (Sweet)",doshaKarma:"Balances Vata & Pitta; pacifies mental heat"},phytochemicals:["Bacosides A & B","Bacopasides","Brahmine","Herpestine"],partsUsed:["Whole Plant (Panchanga)","Fresh Leaves"],cultivation:{climate:"Wet, marshy, tropical edges",soil:"Moist rich mud or submerged shallow hydroponic pans",sunlight:"Partial shade to full morning sun",watering:"High water requirement; thrives with roots constantly wet",homeGardening:"Grows nicely in water bowls or shallow planter trays."},preparations:[{name:"Brahmi Ghrita",usage:"Medicated A2 ghee infused with Brahmi juice taken for cognitive brilliance."},{name:"Brahmi Taila Scalp Massage",usage:"Cooling herbal oil applied to crown (Shiro Abhyanga) for deep relaxation."},{name:"Fresh Leaf Juice with Honey",usage:"5-10 ml fresh juice with raw honey in early morning."}],precautions:"High doses on an empty stomach may cause mild stomach rumbling in sensitive individuals.",region:"Wetlands of Eastern & Southern India",difficulty:"Easy"},{id:"giloy",name:"Giloy / Guduchi",commonNames:{en:"Heart-leaved Moonseed",hi:"गिलोय / गिलोय बेल (Giloy)",ta:"சீந்தில் கொடி (Seenthil)",bn:"গুলঞ্চ (Gulancha)"},scientificName:"Tinospora cordifolia",sanskritName:"Guduchi, Amrita (गुडूची, अमृता)",family:"Menispermaceae",isPopular:!0,has3DModel:!1,image:"/images/plants/giloy.jpg",bannerImage:"/images/plants/giloy.jpg",ayushSystems:["Ayurveda","Siddha","Unani","Homeopathy"],healthCategories:["Immunity","General Wellness","Digestive Health"],shortDescription:"Known as 'Amrita' (The Heavenly Nectar of Immortality), Giloy is India's ultimate immunomodulator and fever-breaking vine.",traditionalSignificance:"Classified as a supreme Rasayana for balancing all three doshas simultaneously.",medicinalUses:["Stimulates white blood cell phagocytosis and adaptive immune response","Breaks chronic fevers, viral infections, and dengue-related platelet drops","Protects and regenerates liver hepatocytes from chemical stress","Purifies blood and soothes chronic inflammatory arthritis (Vatarakta)"],ayurvedicProfile:{rasa:"Tikta (Bitter), Kashaya (Astringent)",guna:"Laghu (Light), Snigdha (Unctuous)",virya:"Ushna (Heating in potency yet cooling in action)",vipaka:"Madhura (Sweet)",doshaKarma:"Unique Tridosha balancer (Calms Vata, Pitta, and Kapha equally)"},phytochemicals:["Tinosporide","Cordifolioside","Berberine","Palmatine","Tinosporaside"],partsUsed:["Stem (Kanda - Primary)","Leaves","Root"],cultivation:{climate:"Tropical deciduous climber",soil:"Adaptable to almost all soils; loves climbing Neem trees",sunlight:"Moderate to full sunlight",watering:"Low; drought-tolerant succulent vine",homeGardening:"Easily grown from a 6-inch woody stem cutting planted in a container with a trellis."},preparations:[{name:"Giloy Kwath (Decoction)",usage:"Fresh stem crushed and boiled down to 1/4th volume with tulsi and black pepper."},{name:"Guduchi Satva",usage:"Pure white medicinal starch sedimented from fresh stems, ideal for sensitive Pitta."},{name:"Samsamani Vati",usage:"Classical tablet prescribed widely by AYUSH ministry for immunity."}],precautions:"Safe for long-term use; monitor blood glucose levels if taking diabetic medications.",region:"Throughout tropical India, climbing on deciduous forest trees",difficulty:"Very Easy"},{id:"amla",name:"Amla",commonNames:{en:"Indian Gooseberry",hi:"आंवला (Amla)",ta:"நெல்லிக்காய் (Nellikai)",bn:"আমলকী (Amloki)"},scientificName:"Phyllanthus emblica",sanskritName:"Amalaki, Dhatri (आमलकी, धात्री)",family:"Phyllanthaceae",isPopular:!0,has3DModel:!1,image:"/images/plants/amla.jpg",bannerImage:"/images/plants/amla.jpg",ayushSystems:["Ayurveda","Siddha","Unani","Yoga & Naturopathy"],healthCategories:["Immunity","Digestive Health","Skin Health","General Wellness"],shortDescription:"The supreme 'Dhatri' (Earthly Mother) fruit, containing the highest natural concentration of thermostable Vitamin C.",traditionalSignificance:"The core ingredient of Chyawanprash. Charaka calls Amalaki 'Vayasthapana' (the premier anti-aging longevity fruit).",medicinalUses:["Supercharges cellular immunity and acts as a mega antioxidant scavenger","Promotes thick lustrous hair growth and prevents premature greying","Strengthens eyesight (Chakshushya) and delays cataracts","Cools excess stomach acid, balances hyperacidity, and supports bowel regularity"],ayurvedicProfile:{rasa:"Amla (Sour - dominant), Madhura, Tikta, Katu, Kashaya (All 5 tastes)",guna:"Laghu (Light), Ruksha (Dry)",virya:"Sheeta (Cooling)",vipaka:"Madhura (Sweet post-digestive)",doshaKarma:"Balances all three Doshas (Tridosha Shamaka)"},phytochemicals:["Ascorbic Acid (Vitamin C)","Ellagitannins (Emblicanin A & B)","Gallic Acid","Quercetin"],partsUsed:["Fresh & Dried Fruit Pulp","Fruit Seeds"],cultivation:{climate:"Subtropical to tropical; hardy tree",soil:"Fertile loamy to light clay soil, tolerant of alkaline soils",sunlight:"Full direct sunlight",watering:"Moderate; drought-hardy once root system matures",homeGardening:"Dwarf grafted varieties can be grown in large 20-gallon terrace planters."},preparations:[{name:"Chyawanprash Awaleha",usage:"Ancient Ayurvedic herbal jam based on fresh Amla fruit paste."},{name:"Fresh Amla Ginger Juice",usage:"20 ml fresh juice first thing in the morning for glowing skin and digestion."},{name:"Triphala Churna",usage:"Synergistic combination of Amla + Haritaki + Bibhitaki for daily gut health."}],precautions:"Excess raw fruit in winter evenings may cause mild throat dryness due to sourness.",region:"Uttar Pradesh (Pratapgarh), Maharashtra, Gujarat",difficulty:"Moderate"},{id:"moringa",name:"Moringa",commonNames:{en:"Drumstick Tree / Miracle Tree",hi:"सहजन / मोरिंगा (Sahjan)",ta:"முருங்கை (Murungai)",bn:"সজনে (Sojne)"},scientificName:"Moringa oleifera",sanskritName:"Shigru, Shobhanjana (शिग्रु, शोभान्जन)",family:"Moringaceae",isPopular:!1,has3DModel:!1,image:"/images/plants/moringa.jpg",bannerImage:"/images/plants/moringa.jpg",ayushSystems:["Ayurveda","Siddha","Yoga & Naturopathy"],healthCategories:["General Wellness","Immunity","Digestive Health"],shortDescription:"A nutrient-dense superfood tree rich in plant protein, iron, calcium, and bioactive polyphenols that combat metabolic syndrome.",traditionalSignificance:"The Sanskrit name 'Shigru' translates to 'that which moves like an arrow', signifying its rapid penetrating ability into bodily tissues.",medicinalUses:["Fights nutritional anemia with bioavailable iron and amino acids","Supports healthy blood pressure and lowers lipid cholesterol levels","Reduces inflammatory joint pain and muscular cramps","Enhances lactation in nursing mothers and boosts daily energy"],ayurvedicProfile:{rasa:"Katu (Pungent), Tikta (Bitter)",guna:"Laghu (Light), Ruksha (Dry), Tikshna (Sharp/Penetrating)",virya:"Ushna (Heating)",vipaka:"Katu (Pungent)",doshaKarma:"Pacifies Kapha and Vata; may elevate Pitta if overused"},phytochemicals:["Quercetin","Chlorogenic Acid","Isothiocyanates","Beta-Carotene","Glucosinolates"],partsUsed:["Leaves","Tender Pods (Drumsticks)","Seeds","Flowers","Bark"],cultivation:{climate:"Tropical / Subtropical; thrives in high temperatures",soil:"Sandy or loamy well-drained soil",sunlight:"Full blazing sun",watering:"Very low water; vulnerable to waterlogged root rot",homeGardening:"Fastest growing garden tree; harvest leaves within 3 months."},preparations:[{name:"Moringa Leaf Powder Smoothie",usage:"1 tsp leaf powder mixed into warm water, dal, or green morning smoothies."},{name:"Drumstick Soup (Murungai Rasam)",usage:"Siddha medicinal herbal soup for stamina and cold relief."},{name:"Moringa Seed Oil (Ben Oil)",usage:"Cold pressed cosmetic oil for wrinkle reduction."}],precautions:"Avoid root bark extracts during early pregnancy due to strong uterine-contracting properties.",region:"Southern and Western India",difficulty:"Very Easy"},{id:"shatavari",name:"Shatavari",commonNames:{en:"Wild Asparagus",hi:"शतावरी (Shatavari)",ta:"தண்ணீர்விட்டான் (Thaneervittan)",bn:"শতমূলী (Shatamuli)"},scientificName:"Asparagus racemosus",sanskritName:"Shatavari, Bahusuta (शतावरी, बहुसुता)",family:"Asparagaceae",isPopular:!1,has3DModel:!1,image:"/images/plants/shatavari.jpg",bannerImage:"/images/plants/shatavari.jpg",ayushSystems:["Ayurveda","Siddha","Unani"],healthCategories:["General Wellness","Digestive Health","Mental Wellbeing"],shortDescription:"The queen of female rejuvenatives, providing hormonal harmony, digestive soothing, and deep vitality.",traditionalSignificance:"Regarded in Ayurveda as the premier nutritive tonic for feminine physiology, soothing mucous membranes of the stomach and lungs.",medicinalUses:["Balances female hormones across puberty, fertility, postpartum, and menopause","Provides profound mucosal protection against gastric ulcers and hyperacidity","Acts as a natural galactagogue promoting breast milk secretion","Nourishes the nervous system and fosters emotional calm"],ayurvedicProfile:{rasa:"Madhura (Sweet), Tikta (Bitter)",guna:"Guru (Heavy), Snigdha (Unctuous)",virya:"Sheeta (Cooling)",vipaka:"Madhura (Sweet)",doshaKarma:"Calms Pitta and Vata; can increase Kapha in large amounts"},phytochemicals:["Steroidal Saponins (Shatavarins I–IV)","Sarsasapogenin","Isoflavones","Mucilage"],partsUsed:["Tuberous Roots"],cultivation:{climate:"Tropical & subtropical thorny forests",soil:"Sandy loam to gravelly soil with deep porous texture",sunlight:"Dappled sunlight / partial shade",watering:"Moderate watering during growth; drought-hardy roots",homeGardening:"Can be grown as an ornamental spiny climber with fragrant white blossoms."},preparations:[{name:"Shatavari Gulam / Confection",usage:"Traditional sweet herbal jam for postpartum vigor."},{name:"Shatavari Milk Decoction",usage:"1 tsp root powder boiled in cup of milk with cardamom."},{name:"Shatavaryadi Ghrita",usage:"Herbal ghee for gastric hyperacidity and fertility wellness."}],precautions:"Use with care if there is severe congestive Kapha or fluid retention.",region:"Himalayan foothills, Western Ghats, Deccan plateau",difficulty:"Moderate"},{id:"peppermint",name:"Pudina / Peppermint",commonNames:{en:"Field Mint / Peppermint",hi:"पुदीना (Pudina)",ta:"புதினா (Pudhina)",bn:"পুদিনা (Pudina)"},scientificName:"Mentha arvensis",sanskritName:"Putiha, Ruchya (पूतीह, रुच्य)",family:"Lamiaceae",isPopular:!1,has3DModel:!1,image:"/images/plants/peppermint.jpg",bannerImage:"/images/plants/peppermint.jpg",ayushSystems:["Ayurveda","Unani","Homeopathy","Yoga & Naturopathy"],healthCategories:["Digestive Health","Respiratory Health","Mental Wellbeing"],shortDescription:"An invigorating, cooling aromatic herb celebrated for banishing digestive spasms, headaches, and respiratory stuffiness.",traditionalSignificance:"Celebrated in Unani as 'Nana' (stomachic) and in Ayurveda for sparking taste receptors (Rochana) and clearing Kapha.",medicinalUses:["Relieves irritable bowel symptoms, stomach spasms, and digestive cramps","Natural menthol aroma clears blocked nasal passages and sinus congestion","Provides cooling relief for tension headaches when applied to temples","Freshens breath and mitigates foul oral bacteria"],ayurvedicProfile:{rasa:"Katu (Pungent), Tikta (Bitter)",guna:"Laghu (Light), Ruksha (Dry), Tikshna",virya:"Sheeta (Cooling sensation)",vipaka:"Katu (Pungent)",doshaKarma:"Pacifies Kapha and Vata; cooling to Pitta"},phytochemicals:["Menthol","Menthone","Isomenthone","Rosmarinic Acid","Limonene"],partsUsed:["Fresh Leaves","Distilled Essential Oil (Pudina Satva)"],cultivation:{climate:"Temperate to subtropical; loves humidity",soil:"Rich, moist, humus-laden soil",sunlight:"Full morning sun to light afternoon shade",watering:"Frequent; keep soil consistently moist",homeGardening:"Spreads vigorously by runners; ideal for windowsill pots."},preparations:[{name:"Fresh Pudina Chutney",usage:"Blended with coriander, green chili, rock salt, and cumin for digestion."},{name:"Pudina Satva Drops (Amritdhara)",usage:"1 drop in warm water for sudden stomach ache or nausea."},{name:"Mint Infusion Tea",usage:"Steeped fresh leaves with lemon for mid-day cooling refreshment."}],precautions:"Avoid pure undiluted essential oil on face or near nostrils of young infants.",region:"Northern & Central plains of India (Punjab, UP, Haryana)",difficulty:"Very Easy"}];function am({onSelectPlant:a,onOpen3D:e}){const{t,getPlantCommonName:r}=Jn(),[o,l]=Ue.useState("Show me plants traditionally associated with digestive health."),[u,d]=Ue.useState("Digestive Health"),[p,m]=Ue.useState(!1),x=[{name:"Ayurveda",color:"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"},{name:"Yoga & Naturopathy",color:"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"},{name:"Unani",color:"bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300"},{name:"Siddha",color:"bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300"},{name:"Homeopathy",color:"bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300"}],y=(()=>{const w=o.toLowerCase();return w.includes("digest")||w.includes("gut")||w.includes("bloat")||u==="Digestive Health"?Zn.filter(_=>_.healthCategories.includes("Digestive Health")).slice(0,3):w.includes("immunit")||w.includes("rejuvenat")||u==="Immunity"?Zn.filter(_=>_.healthCategories.includes("Immunity")).slice(0,3):w.includes("skin")||w.includes("acne")||w.includes("glow")||u==="Skin Health"?Zn.filter(_=>_.healthCategories.includes("Skin Health")).slice(0,3):w.includes("stress")||w.includes("sleep")||w.includes("mind")||u==="Mental Wellbeing"?Zn.filter(_=>_.healthCategories.includes("Mental Wellbeing")).slice(0,3):w.includes("cough")||w.includes("cold")||w.includes("respirat")||u==="Respiratory Health"?Zn.filter(_=>_.healthCategories.includes("Respiratory Health")).slice(0,3):Zn.slice(0,3)})(),M=w=>{w==null||w.preventDefault(),m(!0),setTimeout(()=>m(!1),200)},b=w=>{d(w),l(`Show me medicinal plants traditionally associated with ${w.toLowerCase()}.`)};return f.jsxs("div",{className:"space-y-6",children:[f.jsx("div",{className:"relative rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 p-6 md:p-8 shadow-xl",children:f.jsxs("div",{className:"space-y-5",children:[f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider",children:"AI Knowledge Assistant"}),f.jsx("span",{className:"text-xs text-emerald-700 dark:text-emerald-400 font-semibold",children:"AYUSH Corpus Verified"})]}),f.jsx("h2",{className:"font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-slate-900 dark:text-white",children:t.assistant.heading}),f.jsx("p",{className:"text-xs sm:text-sm text-slate-600 dark:text-slate-300",children:t.assistant.subheading})]}),f.jsx("div",{className:"flex flex-wrap items-center gap-2",children:x.map(w=>f.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20 shadow-sm ${w.color}`,children:w.name},w.name))}),f.jsxs("form",{onSubmit:M,className:"flex flex-col sm:flex-row items-center gap-3",children:[f.jsx("div",{className:"w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md flex-shrink-0",children:f.jsx(vg,{className:"w-6 h-6"})}),f.jsxs("div",{className:"flex-1 w-full flex items-center rounded-2xl glass-panel border border-emerald-500/40 shadow-inner px-4 py-2.5 focus-within:border-emerald-500 transition-all",children:[f.jsx("input",{type:"text",value:o,onChange:w=>l(w.target.value),placeholder:t.assistant.placeholder,className:"w-full bg-transparent text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"}),f.jsxs("button",{type:"submit",disabled:p,className:"flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all ml-2",children:[f.jsx(iy,{className:"w-3.5 h-3.5"}),t.assistant.btnAsk]})]})]}),f.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-1",children:[f.jsx("span",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"Suggested topics:"}),t.assistant.quickSuggestions.map(w=>f.jsx("button",{type:"button",onClick:()=>b(w),className:`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${u===w?"bg-emerald-600 text-white shadow-sm":"glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"}`,children:w},w))]})]})}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-2.5 p-3.5 rounded-2xl glass-panel border border-emerald-500/20 text-slate-800 dark:text-slate-200",children:[f.jsx(uv,{className:"w-4 h-4 text-emerald-600 flex-shrink-0"}),f.jsxs("p",{className:"text-xs font-medium",children:[t.assistant.recommendationPrefix," ",f.jsxs("span",{className:"font-bold text-emerald-700 dark:text-emerald-300",children:['"',u,'"']})," in classical AYUSH medical texts:"]})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:y.map(w=>f.jsxs("div",{className:"group rounded-3xl overflow-hidden glass-panel border border-emerald-500/20 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:[f.jsx("img",{src:w.image,alt:w.name,loading:"lazy",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"}),w.isPopular&&f.jsx("span",{className:"absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm",children:"Popular"}),f.jsxs("div",{className:"absolute bottom-3 left-3 right-3 text-white",children:[f.jsx("h3",{className:"font-heading font-extrabold text-base drop-shadow-sm",children:r(w)}),f.jsx("p",{className:"text-[11px] italic text-emerald-200",children:w.scientificName})]})]}),f.jsxs("div",{className:"p-4 space-y-3",children:[f.jsx("div",{className:"flex flex-wrap gap-1",children:w.ayushSystems.slice(0,2).map(_=>f.jsx("span",{className:"px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40",children:_},_))}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed",children:w.medicinalUses[0]})]})]}),f.jsxs("div",{className:"p-4 pt-0 flex items-center gap-2 border-t border-emerald-500/10",children:[f.jsxs("button",{onClick:()=>a(w),className:"flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm",children:["View Details",f.jsx($s,{className:"w-3.5 h-3.5"})]}),w.has3DModel&&f.jsx("button",{onClick:()=>e(w),title:"View 3D Model",className:"p-2.5 rounded-xl glass-panel border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white transition-colors",children:f.jsx(na,{className:"w-4 h-4"})})]})]},w.id))}),f.jsxs("div",{className:"rounded-2xl glass-panel border border-amber-500/30 p-4 shadow-md flex items-center gap-3.5 bg-amber-50/20 dark:bg-amber-950/20",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0",children:f.jsx(Gv,{className:"w-5 h-5"})}),f.jsxs("div",{className:"space-y-0.5",children:[f.jsx("h4",{className:"font-heading font-bold text-xs text-amber-900 dark:text-amber-300",children:t.assistant.didYouKnow}),f.jsx("p",{className:"text-xs text-slate-700 dark:text-slate-300 leading-relaxed",children:t.assistant.fact})]})]})]})]})}function Ty({plant:a,onSelect:e,onOpen3D:t}){const{t:r,getPlantCommonName:o}=Jn(),{bookmarkedPlants:l,toggleBookmark:u}=Ki(),d=l.includes(a.id);return f.jsxs("div",{className:"group rounded-3xl overflow-hidden glass-panel border border-emerald-500/20 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:[f.jsx("img",{src:a.image,alt:a.name,loading:"lazy",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"}),f.jsxs("div",{className:"absolute top-3 left-3 right-3 flex items-center justify-between",children:[a.isPopular?f.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1",children:[f.jsx(ia,{className:"w-3 h-3"}),"Popular"]}):f.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-emerald-700/80 backdrop-blur-md text-white text-[10px] font-bold",children:a.family}),f.jsx("button",{onClick:p=>{p.stopPropagation(),u(a.id)},title:d?"Remove Bookmark":"Save Bookmark",className:`p-2 rounded-full backdrop-blur-md transition-transform hover:scale-110 active:scale-95 ${d?"bg-amber-500 text-white shadow-md":"bg-black/40 text-white hover:bg-black/60"}`,children:f.jsx(Ol,{className:`w-3.5 h-3.5 ${d?"fill-current":""}`})})]}),f.jsxs("div",{className:"absolute bottom-3 left-3 right-3 text-white space-y-0.5",children:[f.jsx("h3",{className:"font-heading font-extrabold text-lg leading-snug drop-shadow-sm",children:o(a)}),f.jsx("p",{className:"text-xs italic text-emerald-200",children:a.scientificName})]})]}),f.jsxs("div",{className:"p-4 sm:p-5 space-y-3.5",children:[f.jsx("div",{className:"flex flex-wrap gap-1.5",children:a.ayushSystems.slice(0,3).map(p=>f.jsx("span",{className:"px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40",children:p},p))}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed",children:a.shortDescription}),f.jsxs("div",{className:"text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1",children:[f.jsxs("span",{className:"font-bold text-slate-700 dark:text-slate-200",children:[r.card.parts,":"]}),f.jsx("span",{className:"line-clamp-1",children:a.partsUsed.join(", ")})]})]})]}),f.jsxs("div",{className:"p-4 sm:p-5 pt-0 flex items-center gap-2 border-t border-emerald-500/10",children:[f.jsxs("button",{onClick:()=>e(a),className:"flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 text-xs font-bold transition-all shadow-sm",children:[r.card.viewDetails,f.jsx($s,{className:"w-3.5 h-3.5"})]}),a.has3DModel&&f.jsxs("button",{onClick:()=>t(a),title:r.card.view3D,className:"flex items-center gap-1 px-3 py-2.5 rounded-xl glass-panel border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors",children:[f.jsx(na,{className:"w-4 h-4"}),f.jsx("span",{className:"hidden sm:inline",children:"3D"})]})]})]})}function sm({onSelectPlant:a,onOpen3D:e}){const{t,getPlantCommonName:r}=Jn(),[o,l]=Ue.useState(""),[u,d]=Ue.useState("all"),[p,m]=Ue.useState("all"),[x,v]=Ue.useState("all"),[y,M]=Ue.useState("cards"),b=["Ayurveda","Yoga & Naturopathy","Unani","Siddha","Homeopathy"],w=["Immunity","Digestive Health","Respiratory Health","Skin Health","Mental Wellbeing","General Wellness"],_=["Leaves","Roots","Bark","Seeds","Flowers","Inner Leaf Gel (Pulp)"],S=Ue.useMemo(()=>Zn.filter(A=>{const q=o.toLowerCase().trim(),F=!q||A.name.toLowerCase().includes(q)||A.scientificName.toLowerCase().includes(q)||A.sanskritName.toLowerCase().includes(q)||A.shortDescription.toLowerCase().includes(q)||r(A).toLowerCase().includes(q)||A.medicinalUses.some(C=>C.toLowerCase().includes(q)),O=u==="all"||A.ayushSystems.includes(u),B=p==="all"||A.healthCategories.includes(p),P=x==="all"||A.partsUsed.some(C=>C.toLowerCase().includes(x.toLowerCase()));return F&&O&&B&&P}),[o,u,p,x,r]),I=()=>{l(""),d("all"),m("all"),v("all")},k=(u!=="all"?1:0)+(p!=="all"?1:0)+(x!=="all"?1:0)+(o?1:0);return f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",children:[f.jsxs("div",{className:"relative flex-1",children:[f.jsx(rm,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),f.jsx("input",{type:"text",value:o,onChange:A=>l(A.target.value),placeholder:t.explorer.searchPlaceholder,className:"w-full pl-10 pr-10 py-3 rounded-2xl glass-panel border border-emerald-500/30 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-sm"}),o&&f.jsx("button",{onClick:()=>l(""),className:"absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600",children:f.jsx(Hl,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"flex items-center gap-2 self-end sm:self-auto",children:[f.jsxs("div",{className:"glass-panel p-1 rounded-2xl border border-emerald-500/30 flex items-center shadow-sm",children:[f.jsxs("button",{onClick:()=>M("cards"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${y==="cards"?"bg-emerald-600 text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-emerald-600"}`,children:[f.jsx(_g,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:t.explorer.viewCards})]}),f.jsxs("button",{onClick:()=>M("list"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${y==="list"?"bg-emerald-600 text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-emerald-600"}`,children:[f.jsx(Wv,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:t.explorer.viewList})]})]}),k>0&&f.jsxs("button",{onClick:I,className:"flex items-center gap-1 px-3 py-2 rounded-2xl glass-panel border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40",children:[f.jsx(sh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Reset"})]})]})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2.5",children:[f.jsxs("div",{className:"space-y-1",children:[f.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider",children:t.explorer.filterBySystem}),f.jsxs("select",{value:u,onChange:A=>d(A.target.value),className:"w-full px-3 py-2 rounded-xl glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none",children:[f.jsx("option",{value:"all",children:t.explorer.allSystems}),b.map(A=>f.jsx("option",{value:A,children:A},A))]})]}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider",children:t.explorer.filterByCategory}),f.jsxs("select",{value:p,onChange:A=>m(A.target.value),className:"w-full px-3 py-2 rounded-xl glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none",children:[f.jsx("option",{value:"all",children:t.explorer.allCategories}),w.map(A=>f.jsx("option",{value:A,children:A},A))]})]}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("label",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider",children:t.explorer.filterByPart}),f.jsxs("select",{value:x,onChange:A=>v(A.target.value),className:"w-full px-3 py-2 rounded-xl glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none",children:[f.jsx("option",{value:"all",children:"All Parts"}),_.map(A=>f.jsx("option",{value:A,children:A},A))]})]})]})]}),f.jsx("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 border-b border-emerald-500/10 pb-2",children:f.jsxs("div",{children:[t.explorer.showing," ",f.jsx("span",{className:"font-bold text-emerald-600 dark:text-emerald-400",children:S.length})," ",t.explorer.of," ",Zn.length," ",t.explorer.plants]})}),S.length===0?f.jsxs("div",{className:"text-center py-12 space-y-3 glass-panel rounded-3xl border border-dashed border-emerald-500/30",children:[f.jsx("div",{className:"w-12 h-12 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600",children:f.jsx(rm,{className:"w-6 h-6"})}),f.jsx("h4",{className:"font-heading font-bold text-base text-slate-800 dark:text-slate-200",children:t.explorer.noResults}),f.jsx("button",{onClick:I,className:"px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold",children:"Reset Filters"})]}):y==="cards"?f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:S.map(A=>f.jsx(Ty,{plant:A,onSelect:a,onOpen3D:e},A.id))}):f.jsx("div",{className:"space-y-2.5",children:S.map(A=>f.jsxs("div",{onClick:()=>a(A),className:"cursor-pointer p-3.5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-emerald-500 flex items-center justify-between gap-3 transition-colors",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("img",{src:A.image,alt:A.name,className:"w-14 h-14 rounded-xl object-cover"}),f.jsxs("div",{children:[f.jsx("h4",{className:"font-heading font-bold text-sm text-slate-900 dark:text-white",children:r(A)}),f.jsx("p",{className:"text-[11px] italic text-emerald-600 dark:text-emerald-400",children:A.scientificName})]})]}),f.jsx("button",{onClick:q=>{q.stopPropagation(),a(A)},className:"px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold",children:"Details"})]},A.id))})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="170",Ay=0,om=1,Cy=2,Ry=0,Tg=1,Ny=2,Wi=3,Cr=0,Dn=1,hi=2,Tr=0,Xa=1,lm=2,cm=3,um=4,Py=5,Qr=100,ky=101,Dy=102,Ly=103,Iy=104,Uy=200,Fy=201,Oy=202,By=203,gd=204,xd=205,zy=206,Hy=207,Vy=208,Gy=209,jy=210,Wy=211,Xy=212,qy=213,Yy=214,vd=0,yd=1,_d=2,$a=3,Sd=4,Md=5,wd=6,bd=7,Ag=0,$y=1,Ky=2,Ar=0,Zy=1,Qy=2,Jy=3,e_=4,t_=5,n_=6,i_=7,Cg=300,Ka=301,Za=302,Ed=303,Td=304,ql=306,Ad=1e3,ea=1001,Cd=1002,mi=1003,r_=1004,cl=1005,bi=1006,Iu=1007,ta=1008,$i=1009,Rg=1010,Ng=1011,Ys=1012,lh=1013,ra=1014,Xi=1015,Ks=1016,ch=1017,uh=1018,Qa=1020,Pg=35902,kg=1021,Dg=1022,pi=1023,Lg=1024,Ig=1025,qa=1026,Ja=1027,Ug=1028,dh=1029,Fg=1030,hh=1031,fh=1033,kl=33776,Dl=33777,Ll=33778,Il=33779,Rd=35840,Nd=35841,Pd=35842,kd=35843,Dd=36196,Ld=37492,Id=37496,Ud=37808,Fd=37809,Od=37810,Bd=37811,zd=37812,Hd=37813,Vd=37814,Gd=37815,jd=37816,Wd=37817,Xd=37818,qd=37819,Yd=37820,$d=37821,Ul=36492,Kd=36494,Zd=36495,Og=36283,Qd=36284,Jd=36285,eh=36286,a_=3200,s_=3201,Bg=0,o_=1,Er="",Kn="srgb",ns="srgb-linear",Yl="linear",Dt="srgb",Na=7680,dm=519,l_=512,c_=513,u_=514,zg=515,d_=516,h_=517,f_=518,p_=519,hm=35044,fm="300 es",qi=2e3,Vl=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,th=180/Math.PI;function Zs(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[a&255]+mn[a>>8&255]+mn[a>>16&255]+mn[a>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function xn(a,e,t){return Math.max(e,Math.min(t,a))}function m_(a,e){return(a%e+e)%e}function Fu(a,e,t){return(1-t)*a+t*e}function Os(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function kn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,r,o,l,u,d,p,m){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m)}set(e,t,r,o,l,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],v=r[7],y=r[2],M=r[5],b=r[8],w=o[0],_=o[3],S=o[6],I=o[1],k=o[4],A=o[7],q=o[2],F=o[5],O=o[8];return l[0]=u*w+d*I+p*q,l[3]=u*_+d*k+p*F,l[6]=u*S+d*A+p*O,l[1]=m*w+x*I+v*q,l[4]=m*_+x*k+v*F,l[7]=m*S+x*A+v*O,l[2]=y*w+M*I+b*q,l[5]=y*_+M*k+b*F,l[8]=y*S+M*A+b*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return t*u*x-t*d*m-r*l*x+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=x*u-d*m,y=d*p-x*l,M=m*l-u*p,b=t*v+r*y+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(o*m-x*r)*w,e[2]=(d*r-o*u)*w,e[3]=y*w,e[4]=(x*t-o*p)*w,e[5]=(o*l-d*t)*w,e[6]=M*w,e[7]=(r*p-m*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ou.makeScale(e,t)),this}rotate(e){return this.premultiply(Ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ou=new gt;function Hg(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Gl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function g_(){const a=Gl("canvas");return a.style.display="block",a}const pm={};function Gs(a){a in pm||(pm[a]=!0,console.warn(a))}function x_(a,e,t){return new Promise(function(r,o){function l(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function v_(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function y_(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tt={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(a,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(a.r=Yi(a.r),a.g=Yi(a.g),a.b=Yi(a.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(a.applyMatrix3(this.spaces[e].toXYZ),a.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(a.r=Ya(a.r),a.g=Ya(a.g),a.b=Ya(a.b))),a},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Er?Yl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,e=this.workingColorSpace){return a.fromArray(this.spaces[e].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,e,t){return a.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function Yi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ya(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const mm=[.64,.33,.3,.6,.15,.06],gm=[.2126,.7152,.0722],xm=[.3127,.329],vm=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ym=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Tt.define({[ns]:{primaries:mm,whitePoint:xm,transfer:Yl,toXYZ:vm,fromXYZ:ym,luminanceCoefficients:gm,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:mm,whitePoint:xm,transfer:Dt,toXYZ:vm,fromXYZ:ym,luminanceCoefficients:gm,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Pa;class __{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pa===void 0&&(Pa=Gl("canvas")),Pa.width=e.width,Pa.height=e.height;const r=Pa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Pa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Yi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yi(t[r]/255)*255):t[r]=Yi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let S_=0;class Vg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Bu(o[u].image)):l.push(Bu(o[u]))}else l=Bu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Bu(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?__.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let M_=0;class Ln extends is{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,r=ea,o=ea,l=bi,u=ta,d=pi,p=$i,m=Ln.DEFAULT_ANISOTROPY,x=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Zs(),this.name="",this.source=new Vg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ad:e.x=e.x-Math.floor(e.x);break;case ea:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ad:e.y=e.y-Math.floor(e.y);break;case ea:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Cg;Ln.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,r=0,o=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],y=p[1],M=p[5],b=p[9],w=p[2],_=p[6],S=p[10];if(Math.abs(x-y)<.01&&Math.abs(v-w)<.01&&Math.abs(b-_)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+w)<.1&&Math.abs(b+_)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(m+1)/2,A=(M+1)/2,q=(S+1)/2,F=(x+y)/4,O=(v+w)/4,B=(b+_)/4;return k>A&&k>q?k<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(k),o=F/r,l=O/r):A>q?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=F/o,l=B/o):q<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(q),r=O/l,o=B/l),this.set(r,o,l,t),this}let I=Math.sqrt((_-b)*(_-b)+(v-w)*(v-w)+(y-x)*(y-x));return Math.abs(I)<.001&&(I=1),this.x=(_-b)/I,this.y=(v-w)/I,this.z=(y-x)/I,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w_ extends is{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Ln(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends w_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Gg extends Ln{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class b_ extends Ln{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3];const y=l[u+0],M=l[u+1],b=l[u+2],w=l[u+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(d===1){e[t+0]=y,e[t+1]=M,e[t+2]=b,e[t+3]=w;return}if(v!==w||p!==y||m!==M||x!==b){let _=1-d;const S=p*y+m*M+x*b+v*w,I=S>=0?1:-1,k=1-S*S;if(k>Number.EPSILON){const q=Math.sqrt(k),F=Math.atan2(q,S*I);_=Math.sin(_*F)/q,d=Math.sin(d*F)/q}const A=d*I;if(p=p*_+y*A,m=m*_+M*A,x=x*_+b*A,v=v*_+w*A,_===1-d){const q=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=q,m*=q,x*=q,v*=q}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[u],y=l[u+1],M=l[u+2],b=l[u+3];return e[t]=d*b+x*v+p*M-m*y,e[t+1]=p*b+x*y+m*v-d*M,e[t+2]=m*b+x*M+d*y-p*v,e[t+3]=x*b-d*v-p*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),v=d(l/2),y=p(r/2),M=p(o/2),b=p(l/2);switch(u){case"XYZ":this._x=y*x*v+m*M*b,this._y=m*M*v-y*x*b,this._z=m*x*b+y*M*v,this._w=m*x*v-y*M*b;break;case"YXZ":this._x=y*x*v+m*M*b,this._y=m*M*v-y*x*b,this._z=m*x*b-y*M*v,this._w=m*x*v+y*M*b;break;case"ZXY":this._x=y*x*v-m*M*b,this._y=m*M*v+y*x*b,this._z=m*x*b+y*M*v,this._w=m*x*v-y*M*b;break;case"ZYX":this._x=y*x*v-m*M*b,this._y=m*M*v+y*x*b,this._z=m*x*b-y*M*v,this._w=m*x*v+y*M*b;break;case"YZX":this._x=y*x*v+m*M*b,this._y=m*M*v+y*x*b,this._z=m*x*b-y*M*v,this._w=m*x*v-y*M*b;break;case"XZY":this._x=y*x*v-m*M*b,this._y=m*M*v-y*x*b,this._z=m*x*b+y*M*v,this._w=m*x*v+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],x=t[6],v=t[10],y=r+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(x-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+u*d+o*m-l*p,this._y=o*x+u*p+l*d-r*m,this._z=l*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),x=Math.atan2(m,d),v=Math.sin((1-t)*x)/m,y=Math.sin(t*x)/m;return this._w=u*v+this._w*y,this._x=r*v+this._x*y,this._y=o*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_m.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_m.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*t-l*o),v=2*(l*r-u*t);return this.x=t+p*m+u*v-d*x,this.y=r+p*x+d*m-l*v,this.z=o+p*v+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new K,_m=new Qs;class Js{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,li):li.fromBufferAttribute(l,u),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),dl.subVectors(this.max,Bs),ka.subVectors(e.a,Bs),Da.subVectors(e.b,Bs),La.subVectors(e.c,Bs),yr.subVectors(Da,ka),_r.subVectors(La,Da),jr.subVectors(ka,La);let t=[0,-yr.z,yr.y,0,-_r.z,_r.y,0,-jr.z,jr.y,yr.z,0,-yr.x,_r.z,0,-_r.x,jr.z,0,-jr.x,-yr.y,yr.x,0,-_r.y,_r.x,0,-jr.y,jr.x,0];return!Hu(t,ka,Da,La,dl)||(t=[1,0,0,0,1,0,0,0,1],!Hu(t,ka,Da,La,dl))?!1:(hl.crossVectors(yr,_r),t=[hl.x,hl.y,hl.z],Hu(t,ka,Da,La,dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new K,new K,new K,new K,new K,new K,new K,new K],li=new K,ul=new Js,ka=new K,Da=new K,La=new K,yr=new K,_r=new K,jr=new K,Bs=new K,dl=new K,hl=new K,Wr=new K;function Hu(a,e,t,r,o){for(let l=0,u=a.length-3;l<=u;l+=3){Wr.fromArray(a,l);const d=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),p=e.dot(Wr),m=t.dot(Wr),x=r.dot(Wr);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const E_=new Js,zs=new K,Vu=new K;class ph{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):E_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(zs,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Vu)),this.expandByPoint(zs.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new K,Gu=new K,fl=new K,Sr=new K,ju=new K,pl=new K,Wu=new K;class jg{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gu.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(Gu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(fl),d=Sr.dot(this.direction),p=-Sr.dot(fl),m=Sr.lengthSq(),x=Math.abs(1-u*u);let v,y,M,b;if(x>0)if(v=u*p-d,y=u*d-p,b=l*x,v>=0)if(y>=-b)if(y<=b){const w=1/x;v*=w,y*=w,M=v*(v+u*y+2*d)+y*(u*v+y+2*p)+m}else y=l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*p)+m;else y=-l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*p)+m;else y<=-b?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-p),l),M=-v*v+y*(y+2*p)+m):y<=b?(v=0,y=Math.min(Math.max(-l,-p),l),M=y*(y+2*p)+m):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-p),l),M=-v*v+y*(y+2*p)+m);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Gu).addScaledVector(fl,y),M}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const r=zi.dot(this.direction),o=zi.dot(zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,r,o,l){ju.subVectors(t,e),pl.subVectors(r,e),Wu.crossVectors(ju,pl);let u=this.direction.dot(Wu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Sr.subVectors(this.origin,e);const p=d*this.direction.dot(pl.crossVectors(Sr,pl));if(p<0)return null;const m=d*this.direction.dot(ju.cross(Sr));if(m<0||p+m>u)return null;const x=-d*Sr.dot(Wu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,o,l,u,d,p,m,x,v,y,M,b,w,_){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m,x,v,y,M,b,w,_)}set(e,t,r,o,l,u,d,p,m,x,v,y,M,b,w,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=u,S[9]=d,S[13]=p,S[2]=m,S[6]=x,S[10]=v,S[14]=y,S[3]=M,S[7]=b,S[11]=w,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ia.setFromMatrixColumn(e,0).length(),l=1/Ia.setFromMatrixColumn(e,1).length(),u=1/Ia.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,M=u*v,b=d*x,w=d*v;t[0]=p*x,t[4]=-p*v,t[8]=m,t[1]=M+b*m,t[5]=y-w*m,t[9]=-d*p,t[2]=w-y*m,t[6]=b+M*m,t[10]=u*p}else if(e.order==="YXZ"){const y=p*x,M=p*v,b=m*x,w=m*v;t[0]=y+w*d,t[4]=b*d-M,t[8]=u*m,t[1]=u*v,t[5]=u*x,t[9]=-d,t[2]=M*d-b,t[6]=w+y*d,t[10]=u*p}else if(e.order==="ZXY"){const y=p*x,M=p*v,b=m*x,w=m*v;t[0]=y-w*d,t[4]=-u*v,t[8]=b+M*d,t[1]=M+b*d,t[5]=u*x,t[9]=w-y*d,t[2]=-u*m,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const y=u*x,M=u*v,b=d*x,w=d*v;t[0]=p*x,t[4]=b*m-M,t[8]=y*m+w,t[1]=p*v,t[5]=w*m+y,t[9]=M*m-b,t[2]=-m,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const y=u*p,M=u*m,b=d*p,w=d*m;t[0]=p*x,t[4]=w-y*v,t[8]=b*v+M,t[1]=v,t[5]=u*x,t[9]=-d*x,t[2]=-m*x,t[6]=M*v+b,t[10]=y-w*v}else if(e.order==="XZY"){const y=u*p,M=u*m,b=d*p,w=d*m;t[0]=p*x,t[4]=-v,t[8]=m*x,t[1]=y*v+w,t[5]=u*x,t[9]=M*v-b,t[2]=b*v-M,t[6]=d*x,t[10]=w*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T_,e,A_)}lookAt(e,t,r){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Mr.crossVectors(r,Bn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Mr.crossVectors(r,Bn)),Mr.normalize(),ml.crossVectors(Bn,Mr),o[0]=Mr.x,o[4]=ml.x,o[8]=Bn.x,o[1]=Mr.y,o[5]=ml.y,o[9]=Bn.y,o[2]=Mr.z,o[6]=ml.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],v=r[5],y=r[9],M=r[13],b=r[2],w=r[6],_=r[10],S=r[14],I=r[3],k=r[7],A=r[11],q=r[15],F=o[0],O=o[4],B=o[8],P=o[12],C=o[1],z=o[5],te=o[9],J=o[13],ce=o[2],de=o[6],ue=o[10],fe=o[14],G=o[3],me=o[7],D=o[11],E=o[15];return l[0]=u*F+d*C+p*ce+m*G,l[4]=u*O+d*z+p*de+m*me,l[8]=u*B+d*te+p*ue+m*D,l[12]=u*P+d*J+p*fe+m*E,l[1]=x*F+v*C+y*ce+M*G,l[5]=x*O+v*z+y*de+M*me,l[9]=x*B+v*te+y*ue+M*D,l[13]=x*P+v*J+y*fe+M*E,l[2]=b*F+w*C+_*ce+S*G,l[6]=b*O+w*z+_*de+S*me,l[10]=b*B+w*te+_*ue+S*D,l[14]=b*P+w*J+_*fe+S*E,l[3]=I*F+k*C+A*ce+q*G,l[7]=I*O+k*z+A*de+q*me,l[11]=I*B+k*te+A*ue+q*D,l[15]=I*P+k*J+A*fe+q*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],v=e[6],y=e[10],M=e[14],b=e[3],w=e[7],_=e[11],S=e[15];return b*(+l*p*v-o*m*v-l*d*y+r*m*y+o*d*M-r*p*M)+w*(+t*p*M-t*m*y+l*u*y-o*u*M+o*m*x-l*p*x)+_*(+t*m*v-t*d*M-l*u*v+r*u*M+l*d*x-r*m*x)+S*(-o*d*x-t*p*v+t*d*y+o*u*v-r*u*y+r*p*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=e[9],y=e[10],M=e[11],b=e[12],w=e[13],_=e[14],S=e[15],I=v*_*m-w*y*m+w*p*M-d*_*M-v*p*S+d*y*S,k=b*y*m-x*_*m-b*p*M+u*_*M+x*p*S-u*y*S,A=x*w*m-b*v*m+b*d*M-u*w*M-x*d*S+u*v*S,q=b*v*p-x*w*p-b*d*y+u*w*y+x*d*_-u*v*_,F=t*I+r*k+o*A+l*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=I*O,e[1]=(w*y*l-v*_*l-w*o*M+r*_*M+v*o*S-r*y*S)*O,e[2]=(d*_*l-w*p*l+w*o*m-r*_*m-d*o*S+r*p*S)*O,e[3]=(v*p*l-d*y*l-v*o*m+r*y*m+d*o*M-r*p*M)*O,e[4]=k*O,e[5]=(x*_*l-b*y*l+b*o*M-t*_*M-x*o*S+t*y*S)*O,e[6]=(b*p*l-u*_*l-b*o*m+t*_*m+u*o*S-t*p*S)*O,e[7]=(u*y*l-x*p*l+x*o*m-t*y*m-u*o*M+t*p*M)*O,e[8]=A*O,e[9]=(b*v*l-x*w*l-b*r*M+t*w*M+x*r*S-t*v*S)*O,e[10]=(u*w*l-b*d*l+b*r*m-t*w*m-u*r*S+t*d*S)*O,e[11]=(x*d*l-u*v*l-x*r*m+t*v*m+u*r*M-t*d*M)*O,e[12]=q*O,e[13]=(x*w*o-b*v*o+b*r*y-t*w*y-x*r*_+t*v*_)*O,e[14]=(b*d*o-u*w*o-b*r*p+t*w*p+u*r*_-t*d*_)*O,e[15]=(u*v*o-x*d*o+x*r*p-t*v*p-u*r*y+t*d*y)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,m=l+l,x=u+u,v=d+d,y=l*m,M=l*x,b=l*v,w=u*x,_=u*v,S=d*v,I=p*m,k=p*x,A=p*v,q=r.x,F=r.y,O=r.z;return o[0]=(1-(w+S))*q,o[1]=(M+A)*q,o[2]=(b-k)*q,o[3]=0,o[4]=(M-A)*F,o[5]=(1-(y+S))*F,o[6]=(_+I)*F,o[7]=0,o[8]=(b+k)*O,o[9]=(_-I)*O,o[10]=(1-(y+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Ia.set(o[0],o[1],o[2]).length();const u=Ia.set(o[4],o[5],o[6]).length(),d=Ia.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ci.copy(this);const m=1/l,x=1/u,v=1/d;return ci.elements[0]*=m,ci.elements[1]*=m,ci.elements[2]*=m,ci.elements[4]*=x,ci.elements[5]*=x,ci.elements[6]*=x,ci.elements[8]*=v,ci.elements[9]*=v,ci.elements[10]*=v,t.setFromRotationMatrix(ci),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=qi){const p=this.elements,m=2*l/(t-e),x=2*l/(r-o),v=(t+e)/(t-e),y=(r+o)/(r-o);let M,b;if(d===qi)M=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(d===Vl)M=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=qi){const p=this.elements,m=1/(t-e),x=1/(r-o),v=1/(u-l),y=(t+e)*m,M=(r+o)*x;let b,w;if(d===qi)b=(u+l)*v,w=-2*v;else if(d===Vl)b=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ia=new K,ci=new Ht,T_=new K(0,0,0),A_=new K(1,1,1),Mr=new K,ml=new K,Bn=new K,Sm=new Ht,Mm=new Qs;class Ai{constructor(e=0,t=0,r=0,o=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],v=o[2],y=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(xn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-xn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(xn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C_=0;const wm=new K,Ua=new Qs,Hi=new Ht,gl=new K,Hs=new K,R_=new K,N_=new Qs,bm=new K(1,0,0),Em=new K(0,1,0),Tm=new K(0,0,1),Am={type:"added"},P_={type:"removed"},Fa={type:"childadded",child:null},Xu={type:"childremoved",child:null};class vn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new K,t=new Ai,r=new Qs,o=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new gt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ua.setFromAxisAngle(e,t),this.quaternion.multiply(Ua),this}rotateOnWorldAxis(e,t){return Ua.setFromAxisAngle(e,t),this.quaternion.premultiply(Ua),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,t){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?gl.copy(e):gl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Hs,gl,this.up):Hi.lookAt(gl,Hs,this.up),this.quaternion.setFromRotationMatrix(Hi),o&&(Hi.extractRotation(o.matrixWorld),Ua.setFromRotationMatrix(Hi),this.quaternion.premultiply(Ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(P_),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,R_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,N_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),M=u(e.animations),b=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}vn.DEFAULT_UP=new K(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new K,Vi=new K,qu=new K,Gi=new K,Oa=new K,Ba=new K,Cm=new K,Yu=new K,$u=new K,Ku=new K,Zu=new Wt,Qu=new Wt,Ju=new Wt;class fi{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ui.subVectors(e,t),o.cross(ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ui.subVectors(o,t),Vi.subVectors(r,t),qu.subVectors(e,t);const u=ui.dot(ui),d=ui.dot(Vi),p=ui.dot(qu),m=Vi.dot(Vi),x=Vi.dot(qu),v=u*m-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,M=(m*p-d*x)*y,b=(u*x-d*p)*y;return l.set(1-M-b,b,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,Gi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Gi.x),p.addScaledVector(u,Gi.y),p.addScaledVector(d,Gi.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return Zu.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Zu.fromBufferAttribute(e,t),Qu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Zu,l.x),u.addScaledVector(Qu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,t,r,o){return ui.subVectors(r,t),Vi.subVectors(e,t),ui.cross(Vi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ui.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Oa.subVectors(o,r),Ba.subVectors(l,r),Yu.subVectors(e,r);const p=Oa.dot(Yu),m=Ba.dot(Yu);if(p<=0&&m<=0)return t.copy(r);$u.subVectors(e,o);const x=Oa.dot($u),v=Ba.dot($u);if(x>=0&&v<=x)return t.copy(o);const y=p*v-x*m;if(y<=0&&p>=0&&x<=0)return u=p/(p-x),t.copy(r).addScaledVector(Oa,u);Ku.subVectors(e,l);const M=Oa.dot(Ku),b=Ba.dot(Ku);if(b>=0&&M<=b)return t.copy(l);const w=M*m-p*b;if(w<=0&&m>=0&&b<=0)return d=m/(m-b),t.copy(r).addScaledVector(Ba,d);const _=x*b-M*v;if(_<=0&&v-x>=0&&M-b>=0)return Cm.subVectors(l,o),d=(v-x)/(v-x+(M-b)),t.copy(o).addScaledVector(Cm,d);const S=1/(_+w+y);return u=w*S,d=y*S,t.copy(r).addScaledVector(Oa,u).addScaledVector(Ba,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function ed(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Tt.workingColorSpace){if(e=m_(e,1),t=xn(t,0,1),r=xn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ed(u,l,e+1/3),this.g=ed(u,l,e),this.b=ed(u,l,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,t=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const r=Wg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Tt.fromWorkingColorSpace(gn.copy(this),e),Math.round(xn(gn.r*255,0,255))*65536+Math.round(xn(gn.g*255,0,255))*256+Math.round(xn(gn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(gn.copy(this),t);const r=gn.r,o=gn.g,l=gn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const v=u-d;switch(m=x<=.5?v/(u+d):v/(2-u-d),u){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Kn){Tt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,r=gn.g,o=gn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(xl);const r=Fu(wr.h,xl.h,t),o=Fu(wr.s,xl.s,t),l=Fu(wr.l,xl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Nt;Nt.NAMES=Wg;let k_=0;class eo extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Zs(),this.name="",this.blending=Xa,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=xd,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xa&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==xd&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$a&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Na&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Na&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Na&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gh extends eo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new K,vl=new at;class Ti{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=hm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Os(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array),l=kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hm&&(e.usage=this.usage),e}}class Xg extends Ti{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class qg extends Ti{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Jt extends Ti{constructor(e,t,r){super(new Float32Array(e),t,r)}}let D_=0;const $n=new Ht,td=new vn,za=new K,zn=new Js,Vs=new Js,sn=new K;class gi extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hg(e)?qg:Xg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,r){return $n.makeTranslation(e,t,r),this.applyMatrix4($n),this}scale(e,t,r){return $n.makeScale(e,t,r),this.applyMatrix4($n),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(za).negate(),this.translate(za.x,za.y,za.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Jt(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ph);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Vs.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(zn.min,Vs.min),zn.expandByPoint(sn),sn.addVectors(zn.max,Vs.max),zn.expandByPoint(sn)):(zn.expandByPoint(Vs.min),zn.expandByPoint(Vs.max))}zn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)sn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(sn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)sn.fromBufferAttribute(d,m),p&&(za.fromBufferAttribute(e,m),sn.add(za)),o=Math.max(o,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<r.count;B++)d[B]=new K,p[B]=new K;const m=new K,x=new K,v=new K,y=new at,M=new at,b=new at,w=new K,_=new K;function S(B,P,C){m.fromBufferAttribute(r,B),x.fromBufferAttribute(r,P),v.fromBufferAttribute(r,C),y.fromBufferAttribute(l,B),M.fromBufferAttribute(l,P),b.fromBufferAttribute(l,C),x.sub(m),v.sub(m),M.sub(y),b.sub(y);const z=1/(M.x*b.y-b.x*M.y);isFinite(z)&&(w.copy(x).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(z),_.copy(v).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(z),d[B].add(w),d[P].add(w),d[C].add(w),p[B].add(_),p[P].add(_),p[C].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let B=0,P=I.length;B<P;++B){const C=I[B],z=C.start,te=C.count;for(let J=z,ce=z+te;J<ce;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const k=new K,A=new K,q=new K,F=new K;function O(B){q.fromBufferAttribute(o,B),F.copy(q);const P=d[B];k.copy(P),k.sub(q.multiplyScalar(q.dot(P))).normalize(),A.crossVectors(F,P);const z=A.dot(p[B])<0?-1:1;u.setXYZW(B,k.x,k.y,k.z,z)}for(let B=0,P=I.length;B<P;++B){const C=I[B],z=C.start,te=C.count;for(let J=z,ce=z+te;J<ce;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new K,l=new K,u=new K,d=new K,p=new K,m=new K,x=new K,v=new K;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),w=e.getX(y+1),_=e.getX(y+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,_),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,_),d.add(x),p.add(x),m.add(x),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let y=0,M=t.count;y<M;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,v=d.normalized,y=new m.constructor(p.length*x);let M=0,b=0;for(let w=0,_=p.length;w<_;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*x;for(let S=0;S<x;S++)y[b++]=m[M++]}return new Ti(y,x,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let x=0,v=m.length;x<v;x++){const y=m[x],M=e(y,r);p.push(M)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,y=m.length;v<y;v++){const M=m[v];x.push(M.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let y=0,M=v.length;y<M;y++)x.push(v[y].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rm=new Ht,Xr=new jg,yl=new ph,Nm=new K,_l=new K,Sl=new K,Ml=new K,nd=new K,wl=new K,Pm=new K,bl=new K;class Bt extends vn{constructor(e=new gi,t=new gh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){wl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=d[p],v=l[p];x!==0&&(nd.fromBufferAttribute(v,e),u?wl.addScaledVector(nd,x):wl.addScaledVector(nd.sub(t),x))}t.add(wl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(yl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(yl,Nm)===null||Xr.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Rm.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(Rm),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,w=y.length;b<w;b++){const _=y[b],S=u[_.materialIndex],I=Math.max(_.start,M.start),k=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let A=I,q=k;A<q;A+=3){const F=d.getX(A),O=d.getX(A+1),B=d.getX(A+2);o=El(this,S,e,r,m,x,v,F,O,B),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let _=b,S=w;_<S;_+=3){const I=d.getX(_),k=d.getX(_+1),A=d.getX(_+2);o=El(this,u,e,r,m,x,v,I,k,A),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,w=y.length;b<w;b++){const _=y[b],S=u[_.materialIndex],I=Math.max(_.start,M.start),k=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let A=I,q=k;A<q;A+=3){const F=A,O=A+1,B=A+2;o=El(this,S,e,r,m,x,v,F,O,B),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let _=b,S=w;_<S;_+=3){const I=_,k=_+1,A=_+2;o=El(this,u,e,r,m,x,v,I,k,A),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function L_(a,e,t,r,o,l,u,d){let p;if(e.side===Dn?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Cr,d),p===null)return null;bl.copy(d),bl.applyMatrix4(a.matrixWorld);const m=t.ray.origin.distanceTo(bl);return m<t.near||m>t.far?null:{distance:m,point:bl.clone(),object:a}}function El(a,e,t,r,o,l,u,d,p,m){a.getVertexPosition(d,_l),a.getVertexPosition(p,Sl),a.getVertexPosition(m,Ml);const x=L_(a,e,t,r,_l,Sl,Ml,Pm);if(x){const v=new K;fi.getBarycoord(Pm,_l,Sl,Ml,v),o&&(x.uv=fi.getInterpolatedAttribute(o,d,p,m,v,new at)),l&&(x.uv1=fi.getInterpolatedAttribute(l,d,p,m,v,new at)),u&&(x.normal=fi.getInterpolatedAttribute(u,d,p,m,v,new K),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new K,materialIndex:0};fi.getNormal(_l,Sl,Ml,y.normal),x.face=y,x.barycoord=v}return x}class rs extends gi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],v=[];let y=0,M=0;b("z","y","x",-1,-1,r,t,e,u,l,0),b("z","y","x",1,-1,r,t,-e,u,l,1),b("x","z","y",1,1,e,r,t,o,u,2),b("x","z","y",1,-1,e,r,-t,o,u,3),b("x","y","z",1,-1,e,t,r,o,l,4),b("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(v,2));function b(w,_,S,I,k,A,q,F,O,B,P){const C=A/O,z=q/B,te=A/2,J=q/2,ce=F/2,de=O+1,ue=B+1;let fe=0,G=0;const me=new K;for(let D=0;D<ue;D++){const E=D*z-J;for(let j=0;j<de;j++){const ve=j*C-te;me[w]=ve*I,me[_]=E*k,me[S]=ce,m.push(me.x,me.y,me.z),me[w]=0,me[_]=0,me[S]=F>0?1:-1,x.push(me.x,me.y,me.z),v.push(j/O),v.push(1-D/B),fe+=1}}for(let D=0;D<B;D++)for(let E=0;E<O;E++){const j=y+E+de*D,ve=y+E+de*(D+1),Y=y+(E+1)+de*(D+1),ne=y+(E+1)+de*D;p.push(j,ve,ne),p.push(ve,Y,ne),G+=6}d.addGroup(M,G,P),M+=G,y+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const o=a[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function wn(a){const e={};for(let t=0;t<a.length;t++){const r=es(a[t]);for(const o in r)e[o]=r[o]}return e}function I_(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Yg(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const U_={clone:es,merge:wn};var F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends eo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=I_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class $g extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new K,km=new at,Dm=new at;class Qn extends $g{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=th*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return th*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,km,Dm),t.subVectors(Dm,km)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ha=-90,Va=1;class B_ extends vn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Qn(Ha,Va,e,t);o.layers=this.layers,this.add(o);const l=new Qn(Ha,Va,e,t);l.layers=this.layers,this.add(l);const u=new Qn(Ha,Va,e,t);u.layers=this.layers,this.add(u);const d=new Qn(Ha,Va,e,t);d.layers=this.layers,this.add(d);const p=new Qn(Ha,Va,e,t);p.layers=this.layers,this.add(p);const m=new Qn(Ha,Va,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const m of t)this.remove(m);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Kg extends Ln{constructor(e,t,r,o,l,u,d,p,m,x){e=e!==void 0?e:[],t=t!==void 0?t:Ka,super(e,t,r,o,l,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z_ extends aa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Kg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new rs(5,5,5),l=new Rr({name:"CubemapFromEquirect",uniforms:es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:Tr});l.uniforms.tEquirect.value=t;const u=new Bt(o,l),d=t.minFilter;return t.minFilter===ta&&(t.minFilter=bi),new B_(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const id=new K,H_=new K,V_=new gt;class Kr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=id.subVectors(r,t).cross(H_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(id),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||V_.getNormalMatrix(e),o=this.coplanarPoint(id).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new ph,Tl=new K;class xh{constructor(e=new Kr,t=new Kr,r=new Kr,o=new Kr,l=new Kr,u=new Kr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],p=o[3],m=o[4],x=o[5],v=o[6],y=o[7],M=o[8],b=o[9],w=o[10],_=o[11],S=o[12],I=o[13],k=o[14],A=o[15];if(r[0].setComponents(p-l,y-m,_-M,A-S).normalize(),r[1].setComponents(p+l,y+m,_+M,A+S).normalize(),r[2].setComponents(p+u,y+x,_+b,A+I).normalize(),r[3].setComponents(p-u,y-x,_-b,A-I).normalize(),r[4].setComponents(p-d,y-v,_-w,A-k).normalize(),t===qi)r[5].setComponents(p+d,y+v,_+w,A+k).normalize();else if(t===Vl)r[5].setComponents(d,v,w,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Tl.x=o.normal.x>0?e.max.x:e.min.x,Tl.y=o.normal.y>0?e.max.y:e.min.y,Tl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zg(){let a=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){a=l}}}function G_(a){const e=new WeakMap;function t(d,p){const m=d.array,x=d.usage,v=m.byteLength,y=a.createBuffer();a.bindBuffer(p,y),a.bufferData(p,m,x),d.onUploadCallback();let M;if(m instanceof Float32Array)M=a.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=a.SHORT;else if(m instanceof Uint32Array)M=a.UNSIGNED_INT;else if(m instanceof Int32Array)M=a.INT;else if(m instanceof Int8Array)M=a.BYTE;else if(m instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const x=p.array,v=p.updateRanges;if(a.bindBuffer(m,d),v.length===0)a.bufferSubData(m,0,x);else{v.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<v.length;M++){const b=v[y],w=v[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++y,v[y]=w)}v.length=y+1;for(let M=0,b=v.length;M<b;M++){const w=v[M];a.bufferSubData(m,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}class to extends gi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,v=e/d,y=t/p,M=[],b=[],w=[],_=[];for(let S=0;S<x;S++){const I=S*y-u;for(let k=0;k<m;k++){const A=k*v-l;b.push(A,-I,0),w.push(0,0,1),_.push(k/d),_.push(1-S/p)}}for(let S=0;S<p;S++)for(let I=0;I<d;I++){const k=I+m*S,A=I+m*(S+1),q=I+1+m*(S+1),F=I+1+m*S;M.push(k,A,F),M.push(A,q,F)}this.setIndex(M),this.setAttribute("position",new Jt(b,3)),this.setAttribute("normal",new Jt(w,3)),this.setAttribute("uv",new Jt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}var j_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,J_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_S="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,US=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:j_,alphahash_pars_fragment:W_,alphamap_fragment:X_,alphamap_pars_fragment:q_,alphatest_fragment:Y_,alphatest_pars_fragment:$_,aomap_fragment:K_,aomap_pars_fragment:Z_,batching_pars_vertex:Q_,batching_vertex:J_,begin_vertex:eS,beginnormal_vertex:tS,bsdfs:nS,iridescence_fragment:iS,bumpmap_pars_fragment:rS,clipping_planes_fragment:aS,clipping_planes_pars_fragment:sS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:lS,color_fragment:cS,color_pars_fragment:uS,color_pars_vertex:dS,color_vertex:hS,common:fS,cube_uv_reflection_fragment:pS,defaultnormal_vertex:mS,displacementmap_pars_vertex:gS,displacementmap_vertex:xS,emissivemap_fragment:vS,emissivemap_pars_fragment:yS,colorspace_fragment:_S,colorspace_pars_fragment:SS,envmap_fragment:MS,envmap_common_pars_fragment:wS,envmap_pars_fragment:bS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:US,envmap_vertex:TS,fog_vertex:AS,fog_pars_vertex:CS,fog_fragment:RS,fog_pars_fragment:NS,gradientmap_pars_fragment:PS,lightmap_pars_fragment:kS,lights_lambert_fragment:DS,lights_lambert_pars_fragment:LS,lights_pars_begin:IS,lights_toon_fragment:FS,lights_toon_pars_fragment:OS,lights_phong_fragment:BS,lights_phong_pars_fragment:zS,lights_physical_fragment:HS,lights_physical_pars_fragment:VS,lights_fragment_begin:GS,lights_fragment_maps:jS,lights_fragment_end:WS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:qS,logdepthbuf_pars_vertex:YS,logdepthbuf_vertex:$S,map_fragment:KS,map_pars_fragment:ZS,map_particle_fragment:QS,map_particle_pars_fragment:JS,metalnessmap_fragment:e1,metalnessmap_pars_fragment:t1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:r1,morphtarget_pars_vertex:a1,morphtarget_vertex:s1,normal_fragment_begin:o1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:d1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:x1,packing:v1,premultiplied_alpha_fragment:y1,project_vertex:_1,dithering_fragment:S1,dithering_pars_fragment:M1,roughnessmap_fragment:w1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:E1,shadowmap_pars_vertex:T1,shadowmap_vertex:A1,shadowmask_pars_fragment:C1,skinbase_vertex:R1,skinning_pars_vertex:N1,skinning_vertex:P1,skinnormal_vertex:k1,specularmap_fragment:D1,specularmap_pars_fragment:L1,tonemapping_fragment:I1,tonemapping_pars_fragment:U1,transmission_fragment:F1,transmission_pars_fragment:O1,uv_pars_fragment:B1,uv_pars_vertex:z1,uv_vertex:H1,worldpos_vertex:V1,background_vert:G1,background_frag:j1,backgroundCube_vert:W1,backgroundCube_frag:X1,cube_vert:q1,cube_frag:Y1,depth_vert:$1,depth_frag:K1,distanceRGBA_vert:Z1,distanceRGBA_frag:Q1,equirect_vert:J1,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:aM,meshlambert_frag:sM,meshmatcap_vert:oM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:dM,meshphong_frag:hM,meshphysical_vert:fM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:xM,points_frag:vM,shadow_vert:yM,shadow_frag:_M,sprite_vert:SM,sprite_frag:MM},De={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},wi={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Nt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Nt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};wi.physical={uniforms:wn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Al={r:0,b:0,g:0},Yr=new Ai,wM=new Ht;function bM(a,e,t,r,o,l,u){const d=new Nt(0);let p=l===!0?0:1,m,x,v=null,y=0,M=null;function b(I){let k=I.isScene===!0?I.background:null;return k&&k.isTexture&&(k=(I.backgroundBlurriness>0?t:e).get(k)),k}function w(I){let k=!1;const A=b(I);A===null?S(d,p):A&&A.isColor&&(S(A,1),k=!0);const q=a.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,u):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(a.autoClear||k)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function _(I,k){const A=b(k);A&&(A.isCubeTexture||A.mapping===ql)?(x===void 0&&(x=new Bt(new rs(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:es(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(q,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Yr.copy(k.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),x.material.uniforms.envMap.value=A,x.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Yr)),x.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Dt,(v!==A||y!==A.version||M!==a.toneMapping)&&(x.material.needsUpdate=!0,v=A,y=A.version,M=a.toneMapping),x.layers.enableAll(),I.unshift(x,x.geometry,x.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Bt(new to(2,2),new Rr({name:"BackgroundMaterial",uniforms:es(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||y!==A.version||M!==a.toneMapping)&&(m.material.needsUpdate=!0,v=A,y=A.version,M=a.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function S(I,k){I.getRGB(Al,Yg(a)),r.buffers.color.setClear(Al.r,Al.g,Al.b,k,u)}return{getClearColor:function(){return d},setClearColor:function(I,k=1){d.set(I),p=k,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,S(d,p)},render:w,addToRenderList:_}}function EM(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(C,z,te,J,ce){let de=!1;const ue=v(J,te,z);l!==ue&&(l=ue,m(l.object)),de=M(C,J,te,ce),de&&b(C,J,te,ce),ce!==null&&e.update(ce,a.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,A(C,z,te,J),ce!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return a.createVertexArray()}function m(C){return a.bindVertexArray(C)}function x(C){return a.deleteVertexArray(C)}function v(C,z,te){const J=te.wireframe===!0;let ce=r[C.id];ce===void 0&&(ce={},r[C.id]=ce);let de=ce[z.id];de===void 0&&(de={},ce[z.id]=de);let ue=de[J];return ue===void 0&&(ue=y(p()),de[J]=ue),ue}function y(C){const z=[],te=[],J=[];for(let ce=0;ce<t;ce++)z[ce]=0,te[ce]=0,J[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:te,attributeDivisors:J,object:C,attributes:{},index:null}}function M(C,z,te,J){const ce=l.attributes,de=z.attributes;let ue=0;const fe=te.getAttributes();for(const G in fe)if(fe[G].location>=0){const D=ce[G];let E=de[G];if(E===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(E=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(E=C.instanceColor)),D===void 0||D.attribute!==E||E&&D.data!==E.data)return!0;ue++}return l.attributesNum!==ue||l.index!==J}function b(C,z,te,J){const ce={},de=z.attributes;let ue=0;const fe=te.getAttributes();for(const G in fe)if(fe[G].location>=0){let D=de[G];D===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(D=C.instanceColor));const E={};E.attribute=D,D&&D.data&&(E.data=D.data),ce[G]=E,ue++}l.attributes=ce,l.attributesNum=ue,l.index=J}function w(){const C=l.newAttributes;for(let z=0,te=C.length;z<te;z++)C[z]=0}function _(C){S(C,0)}function S(C,z){const te=l.newAttributes,J=l.enabledAttributes,ce=l.attributeDivisors;te[C]=1,J[C]===0&&(a.enableVertexAttribArray(C),J[C]=1),ce[C]!==z&&(a.vertexAttribDivisor(C,z),ce[C]=z)}function I(){const C=l.newAttributes,z=l.enabledAttributes;for(let te=0,J=z.length;te<J;te++)z[te]!==C[te]&&(a.disableVertexAttribArray(te),z[te]=0)}function k(C,z,te,J,ce,de,ue){ue===!0?a.vertexAttribIPointer(C,z,te,ce,de):a.vertexAttribPointer(C,z,te,J,ce,de)}function A(C,z,te,J){w();const ce=J.attributes,de=te.getAttributes(),ue=z.defaultAttributeValues;for(const fe in de){const G=de[fe];if(G.location>=0){let me=ce[fe];if(me===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(me=C.instanceColor)),me!==void 0){const D=me.normalized,E=me.itemSize,j=e.get(me);if(j===void 0)continue;const ve=j.buffer,Y=j.type,ne=j.bytesPerElement,pe=Y===a.INT||Y===a.UNSIGNED_INT||me.gpuType===lh;if(me.isInterleavedBufferAttribute){const ie=me.data,ge=ie.stride,be=me.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<G.locationSize;Pe++)S(G.location+Pe,ie.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<G.locationSize;Pe++)_(G.location+Pe);a.bindBuffer(a.ARRAY_BUFFER,ve);for(let Pe=0;Pe<G.locationSize;Pe++)k(G.location+Pe,E/G.locationSize,Y,D,ge*ne,(be+E/G.locationSize*Pe)*ne,pe)}else{if(me.isInstancedBufferAttribute){for(let ie=0;ie<G.locationSize;ie++)S(G.location+ie,me.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ie=0;ie<G.locationSize;ie++)_(G.location+ie);a.bindBuffer(a.ARRAY_BUFFER,ve);for(let ie=0;ie<G.locationSize;ie++)k(G.location+ie,E/G.locationSize,Y,D,E*ne,E/G.locationSize*ie*ne,pe)}}else if(ue!==void 0){const D=ue[fe];if(D!==void 0)switch(D.length){case 2:a.vertexAttrib2fv(G.location,D);break;case 3:a.vertexAttrib3fv(G.location,D);break;case 4:a.vertexAttrib4fv(G.location,D);break;default:a.vertexAttrib1fv(G.location,D)}}}}I()}function q(){B();for(const C in r){const z=r[C];for(const te in z){const J=z[te];for(const ce in J)x(J[ce].object),delete J[ce];delete z[te]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const te in z){const J=z[te];for(const ce in J)x(J[ce].object),delete J[ce];delete z[te]}delete r[C.id]}function O(C){for(const z in r){const te=r[z];if(te[C.id]===void 0)continue;const J=te[C.id];for(const ce in J)x(J[ce].object),delete J[ce];delete te[C.id]}}function B(){P(),u=!0,l!==o&&(l=o,m(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:B,resetDefaultState:P,dispose:q,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:_,disableUnusedAttributes:I}}function TM(a,e,t){let r;function o(m){r=m}function l(m,x){a.drawArrays(r,m,x),t.update(x,r,1)}function u(m,x,v){v!==0&&(a.drawArraysInstanced(r,m,x,v),t.update(x,r,v))}function d(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let M=0;for(let b=0;b<v;b++)M+=x[b];t.update(M,r,1)}function p(m,x,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<m.length;b++)u(m[b],x[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,x,0,y,0,v);let b=0;for(let w=0;w<v;w++)b+=x[w]*y[w];t.update(b,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function AM(a,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==pi&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const B=O===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==$i&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!B)}function p(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),k=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),q=b>0,F=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:I,maxVaryings:k,maxFragmentUniforms:A,vertexTextures:q,maxSamples:F}}function CM(a){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Kr,d=new gt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||o;return o=y,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=x(v,y,0)},this.setState=function(v,y,M){const b=v.clippingPlanes,w=v.clipIntersection,_=v.clipShadows,S=a.get(v);if(!o||b===null||b.length===0||l&&!_)l?x(null):m();else{const I=l?0:r,k=I*4;let A=S.clippingState||null;p.value=A,A=x(b,y,k,M);for(let q=0;q!==k;++q)A[q]=t[q];S.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,M,b){const w=v!==null?v.length:0;let _=null;if(w!==0){if(_=p.value,b!==!0||_===null){const S=M+w*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(_===null||_.length<S)&&(_=new Float32Array(S));for(let k=0,A=M;k!==w;++k,A+=4)u.copy(v[k]).applyMatrix4(I,d),u.normal.toArray(_,A),_[A+3]=u.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function RM(a){let e=new WeakMap;function t(u,d){return d===Ed?u.mapping=Ka:d===Td&&(u.mapping=Za),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Ed||d===Td)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new z_(p.height);return m.fromEquirectangularTexture(a,u),e.set(u,m),u.addEventListener("dispose",o),t(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Qg extends $g{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ja=4,Lm=[.125,.215,.35,.446,.526,.582],Jr=20,rd=new Qg,Im=new Nt;let ad=null,sd=0,od=0,ld=!1;const Zr=(1+Math.sqrt(5))/2,Ga=1/Zr,Um=[new K(-Zr,Ga,0),new K(Zr,Ga,0),new K(-Ga,0,Zr),new K(Ga,0,Zr),new K(0,Zr,-Ga),new K(0,Zr,Ga),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){ad=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,sd,od),this._renderer.xr.enabled=ld,e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ka||e.mapping===Za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Ks,format:pi,colorSpace:ns,depthBuffer:!1},o=Om(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Om(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NM(l)),this._blurMaterial=PM(l,e,t)}return o}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,rd)}_sceneToCubeUV(e,t,r,o){const d=new Qn(90,1,t,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,y=x.toneMapping;x.getClearColor(Im),x.toneMapping=Ar,x.autoClear=!1;const M=new gh({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),b=new Bt(new rs,M);let w=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,w=!0):(M.color.copy(Im),w=!0);for(let S=0;S<6;S++){const I=S%3;I===0?(d.up.set(0,p[S],0),d.lookAt(m[S],0,0)):I===1?(d.up.set(0,0,p[S]),d.lookAt(0,m[S],0)):(d.up.set(0,p[S],0),d.lookAt(0,0,m[S]));const k=this._cubeSize;Cl(o,I*k,S>2?k:0,k,k),x.setRenderTarget(o),w&&x.render(b,d),x.render(e,d)}b.geometry.dispose(),b.material.dispose(),x.toneMapping=y,x.autoClear=v,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ka||e.mapping===Za;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Bt(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Cl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,rd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Um[(o-l-1)%Um.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,v=new Bt(this._lodPlanes[o],m),y=m.uniforms,M=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Jr-1),w=l/b,_=isFinite(l)?1+Math.floor(x*w):Jr;_>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Jr}`);const S=[];let I=0;for(let O=0;O<Jr;++O){const B=O/w,P=Math.exp(-B*B/2);S.push(P),O===0?I+=P:O<_&&(I+=2*P)}for(let O=0;O<S.length;O++)S[O]=S[O]/I;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=S,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:k}=this;y.dTheta.value=b,y.mipInt.value=k-r;const A=this._sizeLods[o],q=3*A*(o>k-ja?o-k+ja:0),F=4*(this._cubeSize-A);Cl(t,q,F,3*A,2*A),p.setRenderTarget(t),p.render(v,rd)}}function NM(a){const e=[],t=[],r=[];let o=a;const l=a-ja+1+Lm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let p=1/d;u>a-ja?p=Lm[u-a+ja-1]:u===0&&(p=0),r.push(p);const m=1/(d-2),x=-m,v=1+m,y=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,b=6,w=3,_=2,S=1,I=new Float32Array(w*b*M),k=new Float32Array(_*b*M),A=new Float32Array(S*b*M);for(let F=0;F<M;F++){const O=F%3*2/3-1,B=F>2?0:-1,P=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];I.set(P,w*b*F),k.set(y,_*b*F);const C=[F,F,F,F,F,F];A.set(C,S*b*F)}const q=new gi;q.setAttribute("position",new Ti(I,w)),q.setAttribute("uv",new Ti(k,_)),q.setAttribute("faceIndex",new Ti(A,S)),e.push(q),o>ja&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Om(a,e,t){const r=new aa(a,e,t);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cl(a,e,t,r,o){a.viewport.set(e,t,r,o),a.scissor.set(e,t,r,o)}function PM(a,e,t){const r=new Float32Array(Jr),o=new K(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Bm(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function zm(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kM(a){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ed||p===Td,x=p===Ka||p===Za;if(m||x){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Fm(a)),v=m?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||x&&M&&o(M)?(t===null&&(t=new Fm(a)),v=m?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let p=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function DM(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Gs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function LM(a,e,t,r){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);for(const b in y.morphAttributes){const w=y.morphAttributes[b];for(let _=0,S=w.length;_<S;_++)e.remove(w[_])}y.removeEventListener("dispose",u),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function p(v){const y=v.attributes;for(const b in y)e.update(y[b],a.ARRAY_BUFFER);const M=v.morphAttributes;for(const b in M){const w=M[b];for(let _=0,S=w.length;_<S;_++)e.update(w[_],a.ARRAY_BUFFER)}}function m(v){const y=[],M=v.index,b=v.attributes.position;let w=0;if(M!==null){const I=M.array;w=M.version;for(let k=0,A=I.length;k<A;k+=3){const q=I[k+0],F=I[k+1],O=I[k+2];y.push(q,F,F,O,O,q)}}else if(b!==void 0){const I=b.array;w=b.version;for(let k=0,A=I.length/3-1;k<A;k+=3){const q=k+0,F=k+1,O=k+2;y.push(q,F,F,O,O,q)}}else return;const _=new(Hg(y)?qg:Xg)(y,1);_.version=w;const S=l.get(v);S&&e.remove(S),l.set(v,_)}function x(v){const y=l.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:x}}function IM(a,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,M){a.drawElements(r,M,l,y*u),t.update(M,r,1)}function m(y,M,b){b!==0&&(a.drawElementsInstanced(r,M,l,y*u,b),t.update(M,r,b))}function x(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,y,0,b);let _=0;for(let S=0;S<b;S++)_+=M[S];t.update(_,r,1)}function v(y,M,b,w){if(b===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<y.length;S++)m(y[S]/u,M[S],w[S]);else{_.multiDrawElementsInstancedWEBGL(r,M,0,l,y,0,w,0,b);let S=0;for(let I=0;I<b;I++)S+=M[I]*w[I];t.update(S,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function UM(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case a.TRIANGLES:t.triangles+=d*(l/3);break;case a.LINES:t.lines+=d*(l/2);break;case a.LINE_STRIP:t.lines+=d*(l-1);break;case a.LINE_LOOP:t.lines+=d*l;break;case a.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function FM(a,e,t){const r=new WeakMap,o=new Wt;function l(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let C=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let A=0;b===!0&&(A=1),w===!0&&(A=2),_===!0&&(A=3);let q=d.attributes.position.count*A,F=1;q>e.maxTextureSize&&(F=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const O=new Float32Array(q*F*4*v),B=new Gg(O,q,F,v);B.type=Xi,B.needsUpdate=!0;const P=A*4;for(let z=0;z<v;z++){const te=S[z],J=I[z],ce=k[z],de=q*F*4*z;for(let ue=0;ue<te.count;ue++){const fe=ue*P;b===!0&&(o.fromBufferAttribute(te,ue),O[de+fe+0]=o.x,O[de+fe+1]=o.y,O[de+fe+2]=o.z,O[de+fe+3]=0),w===!0&&(o.fromBufferAttribute(J,ue),O[de+fe+4]=o.x,O[de+fe+5]=o.y,O[de+fe+6]=o.z,O[de+fe+7]=0),_===!0&&(o.fromBufferAttribute(ce,ue),O[de+fe+8]=o.x,O[de+fe+9]=o.y,O[de+fe+10]=o.z,O[de+fe+11]=ce.itemSize===4?o.w:1)}}y={count:v,texture:B,size:new at(q,F)},r.set(d,y),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",u.morphTexture,t);else{let b=0;for(let _=0;_<m.length;_++)b+=m[_];const w=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(a,"morphTargetBaseInfluence",w),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(a,"morphTargetsTextureSize",y.size)}return{update:l}}function OM(a,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return v}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}class Jg extends Ln{constructor(e,t,r,o,l,u,d,p,m,x=qa){if(x!==qa&&x!==Ja)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===qa&&(r=ra),r===void 0&&x===Ja&&(r=Qa),super(null,o,l,u,d,p,x,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:mi,this.minFilter=p!==void 0?p:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const e0=new Ln,Hm=new Jg(1,1),t0=new Gg,n0=new b_,i0=new Kg,Vm=[],Gm=[],jm=new Float32Array(16),Wm=new Float32Array(9),Xm=new Float32Array(4);function as(a,e,t){const r=a[0];if(r<=0||r>0)return a;const o=e*t;let l=Vm[o];if(l===void 0&&(l=new Float32Array(o),Vm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,a[u].toArray(l,d)}return l}function en(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function tn(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function $l(a,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function BM(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function zM(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;a.uniform2fv(this.addr,e),tn(t,e)}}function HM(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;a.uniform3fv(this.addr,e),tn(t,e)}}function VM(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;a.uniform4fv(this.addr,e),tn(t,e)}}function GM(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Xm.set(r),a.uniformMatrix2fv(this.addr,!1,Xm),tn(t,r)}}function jM(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Wm.set(r),a.uniformMatrix3fv(this.addr,!1,Wm),tn(t,r)}}function WM(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;jm.set(r),a.uniformMatrix4fv(this.addr,!1,jm),tn(t,r)}}function XM(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function qM(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;a.uniform2iv(this.addr,e),tn(t,e)}}function YM(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;a.uniform3iv(this.addr,e),tn(t,e)}}function $M(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;a.uniform4iv(this.addr,e),tn(t,e)}}function KM(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function ZM(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;a.uniform2uiv(this.addr,e),tn(t,e)}}function QM(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;a.uniform3uiv(this.addr,e),tn(t,e)}}function JM(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;a.uniform4uiv(this.addr,e),tn(t,e)}}function ew(a,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let l;this.type===a.SAMPLER_2D_SHADOW?(Hm.compareFunction=zg,l=Hm):l=e0,t.setTexture2D(e||l,o)}function tw(a,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||n0,o)}function nw(a,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||i0,o)}function iw(a,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||t0,o)}function rw(a){switch(a){case 5126:return BM;case 35664:return zM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return jM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return $M;case 5125:return KM;case 36294:return ZM;case 36295:return QM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}function aw(a,e){a.uniform1fv(this.addr,e)}function sw(a,e){const t=as(e,this.size,2);a.uniform2fv(this.addr,t)}function ow(a,e){const t=as(e,this.size,3);a.uniform3fv(this.addr,t)}function lw(a,e){const t=as(e,this.size,4);a.uniform4fv(this.addr,t)}function cw(a,e){const t=as(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function uw(a,e){const t=as(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function dw(a,e){const t=as(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function hw(a,e){a.uniform1iv(this.addr,e)}function fw(a,e){a.uniform2iv(this.addr,e)}function pw(a,e){a.uniform3iv(this.addr,e)}function mw(a,e){a.uniform4iv(this.addr,e)}function gw(a,e){a.uniform1uiv(this.addr,e)}function xw(a,e){a.uniform2uiv(this.addr,e)}function vw(a,e){a.uniform3uiv(this.addr,e)}function yw(a,e){a.uniform4uiv(this.addr,e)}function _w(a,e,t){const r=this.cache,o=e.length,l=$l(t,o);en(r,l)||(a.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||e0,l[u])}function Sw(a,e,t){const r=this.cache,o=e.length,l=$l(t,o);en(r,l)||(a.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||n0,l[u])}function Mw(a,e,t){const r=this.cache,o=e.length,l=$l(t,o);en(r,l)||(a.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||i0,l[u])}function ww(a,e,t){const r=this.cache,o=e.length,l=$l(t,o);en(r,l)||(a.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||t0,l[u])}function bw(a){switch(a){case 5126:return aw;case 35664:return sw;case 35665:return ow;case 35666:return lw;case 35674:return cw;case 35675:return uw;case 35676:return dw;case 5124:case 35670:return hw;case 35667:case 35671:return fw;case 35668:case 35672:return pw;case 35669:case 35673:return mw;case 5125:return gw;case 36294:return xw;case 36295:return vw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return _w;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return ww}}class Ew{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=rw(t.type)}}class Tw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bw(t.type)}}class Aw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function qm(a,e){a.seq.push(e),a.map[e.id]=e}function Cw(a,e,t){const r=a.name,o=r.length;for(cd.lastIndex=0;;){const l=cd.exec(r),u=cd.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){qm(t,m===void 0?new Ew(d,a,e):new Tw(d,a,e));break}else{let v=t.map[d];v===void 0&&(v=new Aw(d),qm(t,v)),t=v}}}class Fl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);Cw(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Ym(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const Rw=37297;let Nw=0;function Pw(a,e){const t=a.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const $m=new gt;function kw(a){Tt._getMatrix($m,Tt.workingColorSpace,a);const e=`mat3( ${$m.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(a)){case Yl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Km(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),o=a.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+Pw(a.getShaderSource(e),u)}else return o}function Dw(a,e){const t=kw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lw(a,e){let t;switch(e){case Zy:t="Linear";break;case Qy:t="Reinhard";break;case Jy:t="Cineon";break;case e_:t="ACESFilmic";break;case n_:t="AgX";break;case i_:t="Neutral";break;case t_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rl=new K;function Iw(){Tt.getLuminanceCoefficients(Rl);const a=Rl.x.toFixed(4),e=Rl.y.toFixed(4),t=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Fw(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Ow(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=a.getActiveAttrib(e,o),u=l.name;let d=1;l.type===a.FLOAT_MAT2&&(d=2),l.type===a.FLOAT_MAT3&&(d=3),l.type===a.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:a.getAttribLocation(e,u),locationSize:d}}return t}function js(a){return a!==""}function Zm(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(a){return a.replace(Bw,Hw)}const zw=new Map;function Hw(a,e){let t=xt[e];if(t===void 0){const r=zw.get(e);if(r!==void 0)t=xt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}const Vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(a){return a.replace(Vw,Gw)}function Gw(a,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function eg(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jw(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Tg?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ww(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ka:case Za:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xw(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Za:e="ENVMAP_MODE_REFRACTION";break}return e}function qw(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ag:e="ENVMAP_BLENDING_MULTIPLY";break;case $y:e="ENVMAP_BLENDING_MIX";break;case Ky:e="ENVMAP_BLENDING_ADD";break}return e}function Yw(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function $w(a,e,t,r){const o=a.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=jw(t),m=Ww(t),x=Xw(t),v=qw(t),y=Yw(t),M=Uw(t),b=Fw(l),w=o.createProgram();let _,S,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(js).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(js).join(`
`),S.length>0&&(S+=`
`)):(_=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),S=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?xt.tonemapping_pars_fragment:"",t.toneMapping!==Ar?Lw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Dw("linearToOutputTexel",t.outputColorSpace),Iw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),u=nh(u),u=Zm(u,t),u=Qm(u,t),d=nh(d),d=Zm(d,t),d=Qm(d,t),u=Jm(u),d=Jm(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const k=I+_+u,A=I+S+d,q=Ym(o,o.VERTEX_SHADER,k),F=Ym(o,o.FRAGMENT_SHADER,A);o.attachShader(w,q),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(z){if(a.debug.checkShaderErrors){const te=o.getProgramInfoLog(w).trim(),J=o.getShaderInfoLog(q).trim(),ce=o.getShaderInfoLog(F).trim();let de=!0,ue=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(de=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,q,F);else{const fe=Km(o,q,"vertex"),G=Km(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+te+`
`+fe+`
`+G)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(J===""||ce==="")&&(ue=!1);ue&&(z.diagnostics={runnable:de,programLog:te,vertexShader:{log:J,prefix:_},fragmentShader:{log:ce,prefix:S}})}o.deleteShader(q),o.deleteShader(F),B=new Fl(o,w),P=Ow(o,w)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(w,Rw)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=q,this.fragmentShader=F,this}let Kw=0;class Zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Qw(e),t.set(e,r)),r}}class Qw{constructor(e){this.id=Kw++,this.code=e,this.usedTimes=0}}function Jw(a,e,t,r,o,l,u){const d=new mh,p=new Zw,m=new Set,x=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function _(P,C,z,te,J){const ce=te.fog,de=J.geometry,ue=P.isMeshStandardMaterial?te.environment:null,fe=(P.isMeshStandardMaterial?t:e).get(P.envMap||ue),G=fe&&fe.mapping===ql?fe.image.height:null,me=b[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const D=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,E=D!==void 0?D.length:0;let j=0;de.morphAttributes.position!==void 0&&(j=1),de.morphAttributes.normal!==void 0&&(j=2),de.morphAttributes.color!==void 0&&(j=3);let ve,Y,ne,pe;if(me){const bt=wi[me];ve=bt.vertexShader,Y=bt.fragmentShader}else ve=P.vertexShader,Y=P.fragmentShader,p.update(P),ne=p.getVertexShaderID(P),pe=p.getFragmentShaderID(P);const ie=a.getRenderTarget(),ge=a.state.buffers.depth.getReversed(),be=J.isInstancedMesh===!0,Pe=J.isBatchedMesh===!0,Je=!!P.map,We=!!P.matcap,ot=!!fe,H=!!P.aoMap,wt=!!P.lightMap,tt=!!P.bumpMap,et=!!P.normalMap,Ge=!!P.displacementMap,vt=!!P.emissiveMap,Fe=!!P.metalnessMap,L=!!P.roughnessMap,R=P.anisotropy>0,ae=P.clearcoat>0,_e=P.dispersion>0,Se=P.iridescence>0,xe=P.sheen>0,Xe=P.transmission>0,Ne=R&&!!P.anisotropyMap,Oe=ae&&!!P.clearcoatMap,pt=ae&&!!P.clearcoatNormalMap,Ee=ae&&!!P.clearcoatRoughnessMap,ze=Se&&!!P.iridescenceMap,nt=Se&&!!P.iridescenceThicknessMap,st=xe&&!!P.sheenColorMap,Ve=xe&&!!P.sheenRoughnessMap,yt=!!P.specularMap,ht=!!P.specularColorMap,Pt=!!P.specularIntensityMap,$=Xe&&!!P.transmissionMap,ke=Xe&&!!P.thicknessMap,he=!!P.gradientMap,ye=!!P.alphaMap,Ie=P.alphaTest>0,Le=!!P.alphaHash,ft=!!P.extensions;let Ut=Ar;P.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ut=a.toneMapping);const $t={shaderID:me,shaderType:P.type,shaderName:P.name,vertexShader:ve,fragmentShader:Y,defines:P.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Pe,batchingColor:Pe&&J._colorsTexture!==null,instancing:be,instancingColor:be&&J.instanceColor!==null,instancingMorph:be&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ie===null?a.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ns,alphaToCoverage:!!P.alphaToCoverage,map:Je,matcap:We,envMap:ot,envMapMode:ot&&fe.mapping,envMapCubeUVHeight:G,aoMap:H,lightMap:wt,bumpMap:tt,normalMap:et,displacementMap:y&&Ge,emissiveMap:vt,normalMapObjectSpace:et&&P.normalMapType===o_,normalMapTangentSpace:et&&P.normalMapType===Bg,metalnessMap:Fe,roughnessMap:L,anisotropy:R,anisotropyMap:Ne,clearcoat:ae,clearcoatMap:Oe,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ee,dispersion:_e,iridescence:Se,iridescenceMap:ze,iridescenceThicknessMap:nt,sheen:xe,sheenColorMap:st,sheenRoughnessMap:Ve,specularMap:yt,specularColorMap:ht,specularIntensityMap:Pt,transmission:Xe,transmissionMap:$,thicknessMap:ke,gradientMap:he,opaque:P.transparent===!1&&P.blending===Xa&&P.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ie,alphaHash:Le,combine:P.combine,mapUv:Je&&w(P.map.channel),aoMapUv:H&&w(P.aoMap.channel),lightMapUv:wt&&w(P.lightMap.channel),bumpMapUv:tt&&w(P.bumpMap.channel),normalMapUv:et&&w(P.normalMap.channel),displacementMapUv:Ge&&w(P.displacementMap.channel),emissiveMapUv:vt&&w(P.emissiveMap.channel),metalnessMapUv:Fe&&w(P.metalnessMap.channel),roughnessMapUv:L&&w(P.roughnessMap.channel),anisotropyMapUv:Ne&&w(P.anisotropyMap.channel),clearcoatMapUv:Oe&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:pt&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:st&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&w(P.sheenRoughnessMap.channel),specularMapUv:yt&&w(P.specularMap.channel),specularColorMapUv:ht&&w(P.specularColorMap.channel),specularIntensityMapUv:Pt&&w(P.specularIntensityMap.channel),transmissionMapUv:$&&w(P.transmissionMap.channel),thicknessMapUv:ke&&w(P.thicknessMap.channel),alphaMapUv:ye&&w(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(et||R),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!de.attributes.uv&&(Je||ye),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:ge,skinning:J.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:j,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Je&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:vt&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===hi,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ft&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&P.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return $t.vertexUv1s=m.has(1),$t.vertexUv2s=m.has(2),$t.vertexUv3s=m.has(3),m.clear(),$t}function S(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(I(C,P),k(C,P),C.push(a.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function I(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function k(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function A(P){const C=b[P.type];let z;if(C){const te=wi[C];z=U_.clone(te.uniforms)}else z=P.uniforms;return z}function q(P,C){let z;for(let te=0,J=x.length;te<J;te++){const ce=x[te];if(ce.cacheKey===C){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new $w(a,C,P,l),x.push(z)),z}function F(P){if(--P.usedTimes===0){const C=x.indexOf(P);x[C]=x[x.length-1],x.pop(),P.destroy()}}function O(P){p.remove(P)}function B(){p.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:A,acquireProgram:q,releaseProgram:F,releaseShaderCache:O,programs:x,dispose:B}}function eb(){let a=new WeakMap;function e(u){return a.has(u)}function t(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,p){a.get(u)[d]=p}function l(){a=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function tb(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function tg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ng(){const a=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v,y,M,b,w,_){let S=a[e];return S===void 0?(S={id:v.id,object:v,geometry:y,material:M,groupOrder:b,renderOrder:v.renderOrder,z:w,group:_},a[e]=S):(S.id=v.id,S.object=v,S.geometry=y,S.material=M,S.groupOrder=b,S.renderOrder=v.renderOrder,S.z=w,S.group=_),e++,S}function d(v,y,M,b,w,_){const S=u(v,y,M,b,w,_);M.transmission>0?r.push(S):M.transparent===!0?o.push(S):t.push(S)}function p(v,y,M,b,w,_){const S=u(v,y,M,b,w,_);M.transmission>0?r.unshift(S):M.transparent===!0?o.unshift(S):t.unshift(S)}function m(v,y){t.length>1&&t.sort(v||tb),r.length>1&&r.sort(y||tg),o.length>1&&o.sort(y||tg)}function x(){for(let v=e,y=a.length;v<y;v++){const M=a[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:x,sort:m}}function nb(){let a=new WeakMap;function e(r,o){const l=a.get(r);let u;return l===void 0?(u=new ng,a.set(r,[u])):o>=l.length?(u=new ng,l.push(u)):u=l[o],u}function t(){a=new WeakMap}return{get:e,dispose:t}}function ib(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Nt};break;case"SpotLight":t={position:new K,direction:new K,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new K,halfWidth:new K,halfHeight:new K};break}return a[e.id]=t,t}}}function rb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ab=0;function sb(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function ob(a){const e=new ib,t=rb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const o=new K,l=new Ht,u=new Ht;function d(m){let x=0,v=0,y=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,b=0,w=0,_=0,S=0,I=0,k=0,A=0,q=0,F=0,O=0;m.sort(sb);for(let P=0,C=m.length;P<C;P++){const z=m[P],te=z.color,J=z.intensity,ce=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)x+=te.r*J,v+=te.g*J,y+=te.b*J;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(z.sh.coefficients[ue],J);O++}else if(z.isDirectionalLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const fe=z.shadow,G=t.get(z);G.shadowIntensity=fe.intensity,G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,r.directionalShadow[M]=G,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=z.shadow.matrix,I++}r.directional[M]=ue,M++}else if(z.isSpotLight){const ue=e.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(te).multiplyScalar(J),ue.distance=ce,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,r.spot[w]=ue;const fe=z.shadow;if(z.map&&(r.spotLightMap[q]=z.map,q++,fe.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[w]=fe.matrix,z.castShadow){const G=t.get(z);G.shadowIntensity=fe.intensity,G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,r.spotShadow[w]=G,r.spotShadowMap[w]=de,A++}w++}else if(z.isRectAreaLight){const ue=e.get(z);ue.color.copy(te).multiplyScalar(J),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),r.rectArea[_]=ue,_++}else if(z.isPointLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const fe=z.shadow,G=t.get(z);G.shadowIntensity=fe.intensity,G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,G.shadowCameraNear=fe.camera.near,G.shadowCameraFar=fe.camera.far,r.pointShadow[b]=G,r.pointShadowMap[b]=de,r.pointShadowMatrix[b]=z.shadow.matrix,k++}r.point[b]=ue,b++}else if(z.isHemisphereLight){const ue=e.get(z);ue.skyColor.copy(z.color).multiplyScalar(J),ue.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[S]=ue,S++}}_>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const B=r.hash;(B.directionalLength!==M||B.pointLength!==b||B.spotLength!==w||B.rectAreaLength!==_||B.hemiLength!==S||B.numDirectionalShadows!==I||B.numPointShadows!==k||B.numSpotShadows!==A||B.numSpotMaps!==q||B.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=_,r.point.length=b,r.hemi.length=S,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=k,r.pointShadowMap.length=k,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=k,r.spotLightMatrix.length=A+q-F,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,B.directionalLength=M,B.pointLength=b,B.spotLength=w,B.rectAreaLength=_,B.hemiLength=S,B.numDirectionalShadows=I,B.numPointShadows=k,B.numSpotShadows=A,B.numSpotMaps=q,B.numLightProbes=O,r.version=ab++)}function p(m,x){let v=0,y=0,M=0,b=0,w=0;const _=x.matrixWorldInverse;for(let S=0,I=m.length;S<I;S++){const k=m[S];if(k.isDirectionalLight){const A=r.directional[v];A.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(_),v++}else if(k.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(k.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(_),M++}else if(k.isRectAreaLight){const A=r.rectArea[b];A.position.setFromMatrixPosition(k.matrixWorld),A.position.applyMatrix4(_),u.identity(),l.copy(k.matrixWorld),l.premultiply(_),u.extractRotation(l),A.halfWidth.set(k.width*.5,0,0),A.halfHeight.set(0,k.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),b++}else if(k.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(k.matrixWorld),A.position.applyMatrix4(_),y++}else if(k.isHemisphereLight){const A=r.hemi[w];A.direction.setFromMatrixPosition(k.matrixWorld),A.direction.transformDirection(_),w++}}}return{setup:d,setupView:p,state:r}}function ig(a){const e=new ob(a),t=[],r=[];function o(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function d(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function lb(a){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new ig(a),e.set(o,[d])):l>=u.length?(d=new ig(a),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class cb extends eo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ub extends eo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fb(a,e,t){let r=new xh;const o=new at,l=new at,u=new Wt,d=new cb({depthPacking:s_}),p=new ub,m={},x=t.maxTextureSize,v={[Cr]:Dn,[Dn]:Cr,[hi]:hi},y=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:db,fragmentShader:hb}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new gi;b.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Bt(b,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tg;let S=this.type;this.render=function(F,O,B){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;const P=a.getRenderTarget(),C=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),te=a.state;te.setBlending(Tr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const J=S!==Wi&&this.type===Wi,ce=S===Wi&&this.type!==Wi;for(let de=0,ue=F.length;de<ue;de++){const fe=F[de],G=fe.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const me=G.getFrameExtents();if(o.multiply(me),l.copy(G.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/me.x),o.x=l.x*me.x,G.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/me.y),o.y=l.y*me.y,G.mapSize.y=l.y)),G.map===null||J===!0||ce===!0){const E=this.type!==Wi?{minFilter:mi,magFilter:mi}:{};G.map!==null&&G.map.dispose(),G.map=new aa(o.x,o.y,E),G.map.texture.name=fe.name+".shadowMap",G.camera.updateProjectionMatrix()}a.setRenderTarget(G.map),a.clear();const D=G.getViewportCount();for(let E=0;E<D;E++){const j=G.getViewport(E);u.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),te.viewport(u),G.updateMatrices(fe,E),r=G.getFrustum(),A(O,B,G.camera,fe,this.type)}G.isPointLightShadow!==!0&&this.type===Wi&&I(G,B),G.needsUpdate=!1}S=this.type,_.needsUpdate=!1,a.setRenderTarget(P,C,z)};function I(F,O){const B=e.update(w);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new aa(o.x,o.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,a.setRenderTarget(F.mapPass),a.clear(),a.renderBufferDirect(O,null,B,y,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,a.setRenderTarget(F.map),a.clear(),a.renderBufferDirect(O,null,B,M,w,null)}function k(F,O,B,P){let C=null;const z=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)C=z;else if(C=B.isPointLight===!0?p:d,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const te=C.uuid,J=O.uuid;let ce=m[te];ce===void 0&&(ce={},m[te]=ce);let de=ce[J];de===void 0&&(de=C.clone(),ce[J]=de,O.addEventListener("dispose",q)),C=de}if(C.visible=O.visible,C.wireframe=O.wireframe,P===Wi?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:v[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const te=a.properties.get(C);te.light=B}return C}function A(F,O,B,P,C){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Wi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const J=e.update(F),ce=F.material;if(Array.isArray(ce)){const de=J.groups;for(let ue=0,fe=de.length;ue<fe;ue++){const G=de[ue],me=ce[G.materialIndex];if(me&&me.visible){const D=k(F,me,P,C);F.onBeforeShadow(a,F,O,B,J,D,G),a.renderBufferDirect(B,null,J,D,F,G),F.onAfterShadow(a,F,O,B,J,D,G)}}}else if(ce.visible){const de=k(F,ce,P,C);F.onBeforeShadow(a,F,O,B,J,de,null),a.renderBufferDirect(B,null,J,de,F,null),F.onAfterShadow(a,F,O,B,J,de,null)}}const te=F.children;for(let J=0,ce=te.length;J<ce;J++)A(te[J],O,B,P,C)}function q(F){F.target.removeEventListener("dispose",q);for(const B in m){const P=m[B],C=F.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const pb={[vd]:yd,[_d]:wd,[Sd]:bd,[$a]:Md,[yd]:vd,[wd]:_d,[bd]:Sd,[Md]:$a};function mb(a,e){function t(){let $=!1;const ke=new Wt;let he=null;const ye=new Wt(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!$&&(a.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){$=Ie},setClear:function(Ie,Le,ft,Ut,$t){$t===!0&&(Ie*=Ut,Le*=Ut,ft*=Ut),ke.set(Ie,Le,ft,Ut),ye.equals(ke)===!1&&(a.clearColor(Ie,Le,ft,Ut),ye.copy(ke))},reset:function(){$=!1,he=null,ye.set(-1,0,0,0)}}}function r(){let $=!1,ke=!1,he=null,ye=null,Ie=null;return{setReversed:function(Le){if(ke!==Le){const ft=e.get("EXT_clip_control");ke?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ie;Ie=null,this.setClear(Ut)}ke=Le},getReversed:function(){return ke},setTest:function(Le){Le?ie(a.DEPTH_TEST):ge(a.DEPTH_TEST)},setMask:function(Le){he!==Le&&!$&&(a.depthMask(Le),he=Le)},setFunc:function(Le){if(ke&&(Le=pb[Le]),ye!==Le){switch(Le){case vd:a.depthFunc(a.NEVER);break;case yd:a.depthFunc(a.ALWAYS);break;case _d:a.depthFunc(a.LESS);break;case $a:a.depthFunc(a.LEQUAL);break;case Sd:a.depthFunc(a.EQUAL);break;case Md:a.depthFunc(a.GEQUAL);break;case wd:a.depthFunc(a.GREATER);break;case bd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ye=Le}},setLocked:function(Le){$=Le},setClear:function(Le){Ie!==Le&&(ke&&(Le=1-Le),a.clearDepth(Le),Ie=Le)},reset:function(){$=!1,he=null,ye=null,Ie=null,ke=!1}}}function o(){let $=!1,ke=null,he=null,ye=null,Ie=null,Le=null,ft=null,Ut=null,$t=null;return{setTest:function(bt){$||(bt?ie(a.STENCIL_TEST):ge(a.STENCIL_TEST))},setMask:function(bt){ke!==bt&&!$&&(a.stencilMask(bt),ke=bt)},setFunc:function(bt,bn,yn){(he!==bt||ye!==bn||Ie!==yn)&&(a.stencilFunc(bt,bn,yn),he=bt,ye=bn,Ie=yn)},setOp:function(bt,bn,yn){(Le!==bt||ft!==bn||Ut!==yn)&&(a.stencilOp(bt,bn,yn),Le=bt,ft=bn,Ut=yn)},setLocked:function(bt){$=bt},setClear:function(bt){$t!==bt&&(a.clearStencil(bt),$t=bt)},reset:function(){$=!1,ke=null,he=null,ye=null,Ie=null,Le=null,ft=null,Ut=null,$t=null}}}const l=new t,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let x={},v={},y=new WeakMap,M=[],b=null,w=!1,_=null,S=null,I=null,k=null,A=null,q=null,F=null,O=new Nt(0,0,0),B=0,P=!1,C=null,z=null,te=null,J=null,ce=null;const de=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,fe=0;const G=a.getParameter(a.VERSION);G.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(G)[1]),ue=fe>=1):G.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ue=fe>=2);let me=null,D={};const E=a.getParameter(a.SCISSOR_BOX),j=a.getParameter(a.VIEWPORT),ve=new Wt().fromArray(E),Y=new Wt().fromArray(j);function ne($,ke,he,ye){const Ie=new Uint8Array(4),Le=a.createTexture();a.bindTexture($,Le),a.texParameteri($,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri($,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ft=0;ft<he;ft++)$===a.TEXTURE_3D||$===a.TEXTURE_2D_ARRAY?a.texImage3D(ke,0,a.RGBA,1,1,ye,0,a.RGBA,a.UNSIGNED_BYTE,Ie):a.texImage2D(ke+ft,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ie);return Le}const pe={};pe[a.TEXTURE_2D]=ne(a.TEXTURE_2D,a.TEXTURE_2D,1),pe[a.TEXTURE_CUBE_MAP]=ne(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[a.TEXTURE_2D_ARRAY]=ne(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),pe[a.TEXTURE_3D]=ne(a.TEXTURE_3D,a.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ie(a.DEPTH_TEST),u.setFunc($a),tt(!1),et(om),ie(a.CULL_FACE),H(Tr);function ie($){x[$]!==!0&&(a.enable($),x[$]=!0)}function ge($){x[$]!==!1&&(a.disable($),x[$]=!1)}function be($,ke){return v[$]!==ke?(a.bindFramebuffer($,ke),v[$]=ke,$===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=ke),$===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=ke),!0):!1}function Pe($,ke){let he=M,ye=!1;if($){he=y.get(ke),he===void 0&&(he=[],y.set(ke,he));const Ie=$.textures;if(he.length!==Ie.length||he[0]!==a.COLOR_ATTACHMENT0){for(let Le=0,ft=Ie.length;Le<ft;Le++)he[Le]=a.COLOR_ATTACHMENT0+Le;he.length=Ie.length,ye=!0}}else he[0]!==a.BACK&&(he[0]=a.BACK,ye=!0);ye&&a.drawBuffers(he)}function Je($){return b!==$?(a.useProgram($),b=$,!0):!1}const We={[Qr]:a.FUNC_ADD,[ky]:a.FUNC_SUBTRACT,[Dy]:a.FUNC_REVERSE_SUBTRACT};We[Ly]=a.MIN,We[Iy]=a.MAX;const ot={[Uy]:a.ZERO,[Fy]:a.ONE,[Oy]:a.SRC_COLOR,[gd]:a.SRC_ALPHA,[jy]:a.SRC_ALPHA_SATURATE,[Vy]:a.DST_COLOR,[zy]:a.DST_ALPHA,[By]:a.ONE_MINUS_SRC_COLOR,[xd]:a.ONE_MINUS_SRC_ALPHA,[Gy]:a.ONE_MINUS_DST_COLOR,[Hy]:a.ONE_MINUS_DST_ALPHA,[Wy]:a.CONSTANT_COLOR,[Xy]:a.ONE_MINUS_CONSTANT_COLOR,[qy]:a.CONSTANT_ALPHA,[Yy]:a.ONE_MINUS_CONSTANT_ALPHA};function H($,ke,he,ye,Ie,Le,ft,Ut,$t,bt){if($===Tr){w===!0&&(ge(a.BLEND),w=!1);return}if(w===!1&&(ie(a.BLEND),w=!0),$!==Py){if($!==_||bt!==P){if((S!==Qr||A!==Qr)&&(a.blendEquation(a.FUNC_ADD),S=Qr,A=Qr),bt)switch($){case Xa:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case lm:a.blendFunc(a.ONE,a.ONE);break;case cm:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case um:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Xa:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case lm:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case cm:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case um:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}I=null,k=null,q=null,F=null,O.set(0,0,0),B=0,_=$,P=bt}return}Ie=Ie||ke,Le=Le||he,ft=ft||ye,(ke!==S||Ie!==A)&&(a.blendEquationSeparate(We[ke],We[Ie]),S=ke,A=Ie),(he!==I||ye!==k||Le!==q||ft!==F)&&(a.blendFuncSeparate(ot[he],ot[ye],ot[Le],ot[ft]),I=he,k=ye,q=Le,F=ft),(Ut.equals(O)===!1||$t!==B)&&(a.blendColor(Ut.r,Ut.g,Ut.b,$t),O.copy(Ut),B=$t),_=$,P=!1}function wt($,ke){$.side===hi?ge(a.CULL_FACE):ie(a.CULL_FACE);let he=$.side===Dn;ke&&(he=!he),tt(he),$.blending===Xa&&$.transparent===!1?H(Tr):H($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const ye=$.stencilWrite;d.setTest(ye),ye&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),vt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ie(a.SAMPLE_ALPHA_TO_COVERAGE):ge(a.SAMPLE_ALPHA_TO_COVERAGE)}function tt($){C!==$&&($?a.frontFace(a.CW):a.frontFace(a.CCW),C=$)}function et($){$!==Ay?(ie(a.CULL_FACE),$!==z&&($===om?a.cullFace(a.BACK):$===Cy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ge(a.CULL_FACE),z=$}function Ge($){$!==te&&(ue&&a.lineWidth($),te=$)}function vt($,ke,he){$?(ie(a.POLYGON_OFFSET_FILL),(J!==ke||ce!==he)&&(a.polygonOffset(ke,he),J=ke,ce=he)):ge(a.POLYGON_OFFSET_FILL)}function Fe($){$?ie(a.SCISSOR_TEST):ge(a.SCISSOR_TEST)}function L($){$===void 0&&($=a.TEXTURE0+de-1),me!==$&&(a.activeTexture($),me=$)}function R($,ke,he){he===void 0&&(me===null?he=a.TEXTURE0+de-1:he=me);let ye=D[he];ye===void 0&&(ye={type:void 0,texture:void 0},D[he]=ye),(ye.type!==$||ye.texture!==ke)&&(me!==he&&(a.activeTexture(he),me=he),a.bindTexture($,ke||pe[$]),ye.type=$,ye.texture=ke)}function ae(){const $=D[me];$!==void 0&&$.type!==void 0&&(a.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function _e(){try{a.compressedTexImage2D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Se(){try{a.compressedTexImage3D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xe(){try{a.texSubImage2D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xe(){try{a.texSubImage3D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ne(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Oe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function pt(){try{a.texStorage2D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ee(){try{a.texStorage3D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ze(){try{a.texImage2D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function nt(){try{a.texImage3D.apply(a,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function st($){ve.equals($)===!1&&(a.scissor($.x,$.y,$.z,$.w),ve.copy($))}function Ve($){Y.equals($)===!1&&(a.viewport($.x,$.y,$.z,$.w),Y.copy($))}function yt($,ke){let he=m.get(ke);he===void 0&&(he=new WeakMap,m.set(ke,he));let ye=he.get($);ye===void 0&&(ye=a.getUniformBlockIndex(ke,$.name),he.set($,ye))}function ht($,ke){const ye=m.get(ke).get($);p.get(ke)!==ye&&(a.uniformBlockBinding(ke,ye,$.__bindingPointIndex),p.set(ke,ye))}function Pt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),x={},me=null,D={},v={},y=new WeakMap,M=[],b=null,w=!1,_=null,S=null,I=null,k=null,A=null,q=null,F=null,O=new Nt(0,0,0),B=0,P=!1,C=null,z=null,te=null,J=null,ce=null,ve.set(0,0,a.canvas.width,a.canvas.height),Y.set(0,0,a.canvas.width,a.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ie,disable:ge,bindFramebuffer:be,drawBuffers:Pe,useProgram:Je,setBlending:H,setMaterial:wt,setFlipSided:tt,setCullFace:et,setLineWidth:Ge,setPolygonOffset:vt,setScissorTest:Fe,activeTexture:L,bindTexture:R,unbindTexture:ae,compressedTexImage2D:_e,compressedTexImage3D:Se,texImage2D:ze,texImage3D:nt,updateUBOMapping:yt,uniformBlockBinding:ht,texStorage2D:pt,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Xe,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Oe,scissor:st,viewport:Ve,reset:Pt}}function rg(a,e,t,r){const o=gb(r);switch(t){case kg:return a*e;case Lg:return a*e;case Ig:return a*e*2;case Ug:return a*e/o.components*o.byteLength;case dh:return a*e/o.components*o.byteLength;case Fg:return a*e*2/o.components*o.byteLength;case hh:return a*e*2/o.components*o.byteLength;case Dg:return a*e*3/o.components*o.byteLength;case pi:return a*e*4/o.components*o.byteLength;case fh:return a*e*4/o.components*o.byteLength;case kl:case Dl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Il:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Nd:case kd:return Math.max(a,16)*Math.max(e,8)/4;case Rd:case Pd:return Math.max(a,8)*Math.max(e,8)/2;case Dd:case Ld:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Id:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Kd:case Zd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Og:case Qd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Jd:case eh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gb(a){switch(a){case $i:case Rg:return{byteLength:1,components:1};case Ys:case Ng:case Ks:return{byteLength:2,components:1};case ch:case uh:return{byteLength:2,components:4};case ra:case lh:case Xi:return{byteLength:4,components:1};case Pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function xb(a,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new at,x=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,R){return M?new OffscreenCanvas(L,R):Gl("canvas")}function w(L,R,ae){let _e=1;const Se=Fe(L);if((Se.width>ae||Se.height>ae)&&(_e=ae/Math.max(Se.width,Se.height)),_e<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const xe=Math.floor(_e*Se.width),Xe=Math.floor(_e*Se.height);v===void 0&&(v=b(xe,Xe));const Ne=R?b(xe,Xe):v;return Ne.width=xe,Ne.height=Xe,Ne.getContext("2d").drawImage(L,0,0,xe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+xe+"x"+Xe+")."),Ne}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function _(L){return L.generateMipmaps}function S(L){a.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function k(L,R,ae,_e,Se=!1){if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xe=R;if(R===a.RED&&(ae===a.FLOAT&&(xe=a.R32F),ae===a.HALF_FLOAT&&(xe=a.R16F),ae===a.UNSIGNED_BYTE&&(xe=a.R8)),R===a.RED_INTEGER&&(ae===a.UNSIGNED_BYTE&&(xe=a.R8UI),ae===a.UNSIGNED_SHORT&&(xe=a.R16UI),ae===a.UNSIGNED_INT&&(xe=a.R32UI),ae===a.BYTE&&(xe=a.R8I),ae===a.SHORT&&(xe=a.R16I),ae===a.INT&&(xe=a.R32I)),R===a.RG&&(ae===a.FLOAT&&(xe=a.RG32F),ae===a.HALF_FLOAT&&(xe=a.RG16F),ae===a.UNSIGNED_BYTE&&(xe=a.RG8)),R===a.RG_INTEGER&&(ae===a.UNSIGNED_BYTE&&(xe=a.RG8UI),ae===a.UNSIGNED_SHORT&&(xe=a.RG16UI),ae===a.UNSIGNED_INT&&(xe=a.RG32UI),ae===a.BYTE&&(xe=a.RG8I),ae===a.SHORT&&(xe=a.RG16I),ae===a.INT&&(xe=a.RG32I)),R===a.RGB_INTEGER&&(ae===a.UNSIGNED_BYTE&&(xe=a.RGB8UI),ae===a.UNSIGNED_SHORT&&(xe=a.RGB16UI),ae===a.UNSIGNED_INT&&(xe=a.RGB32UI),ae===a.BYTE&&(xe=a.RGB8I),ae===a.SHORT&&(xe=a.RGB16I),ae===a.INT&&(xe=a.RGB32I)),R===a.RGBA_INTEGER&&(ae===a.UNSIGNED_BYTE&&(xe=a.RGBA8UI),ae===a.UNSIGNED_SHORT&&(xe=a.RGBA16UI),ae===a.UNSIGNED_INT&&(xe=a.RGBA32UI),ae===a.BYTE&&(xe=a.RGBA8I),ae===a.SHORT&&(xe=a.RGBA16I),ae===a.INT&&(xe=a.RGBA32I)),R===a.RGB&&ae===a.UNSIGNED_INT_5_9_9_9_REV&&(xe=a.RGB9_E5),R===a.RGBA){const Xe=Se?Yl:Tt.getTransfer(_e);ae===a.FLOAT&&(xe=a.RGBA32F),ae===a.HALF_FLOAT&&(xe=a.RGBA16F),ae===a.UNSIGNED_BYTE&&(xe=Xe===Dt?a.SRGB8_ALPHA8:a.RGBA8),ae===a.UNSIGNED_SHORT_4_4_4_4&&(xe=a.RGBA4),ae===a.UNSIGNED_SHORT_5_5_5_1&&(xe=a.RGB5_A1)}return(xe===a.R16F||xe===a.R32F||xe===a.RG16F||xe===a.RG32F||xe===a.RGBA16F||xe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function A(L,R){let ae;return L?R===null||R===ra||R===Qa?ae=a.DEPTH24_STENCIL8:R===Xi?ae=a.DEPTH32F_STENCIL8:R===Ys&&(ae=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ra||R===Qa?ae=a.DEPTH_COMPONENT24:R===Xi?ae=a.DEPTH_COMPONENT32F:R===Ys&&(ae=a.DEPTH_COMPONENT16),ae}function q(L,R){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==mi&&L.minFilter!==bi?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function F(L){const R=L.target;R.removeEventListener("dispose",F),B(R),R.isVideoTexture&&x.delete(R)}function O(L){const R=L.target;R.removeEventListener("dispose",O),C(R)}function B(L){const R=r.get(L);if(R.__webglInit===void 0)return;const ae=L.source,_e=y.get(ae);if(_e){const Se=_e[R.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&P(L),Object.keys(_e).length===0&&y.delete(ae)}r.remove(L)}function P(L){const R=r.get(L);a.deleteTexture(R.__webglTexture);const ae=L.source,_e=y.get(ae);delete _e[R.__cacheKey],u.memory.textures--}function C(L){const R=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(R.__webglFramebuffer[_e]))for(let Se=0;Se<R.__webglFramebuffer[_e].length;Se++)a.deleteFramebuffer(R.__webglFramebuffer[_e][Se]);else a.deleteFramebuffer(R.__webglFramebuffer[_e]);R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer[_e])}else{if(Array.isArray(R.__webglFramebuffer))for(let _e=0;_e<R.__webglFramebuffer.length;_e++)a.deleteFramebuffer(R.__webglFramebuffer[_e]);else a.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&a.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _e=0;_e<R.__webglColorRenderbuffer.length;_e++)R.__webglColorRenderbuffer[_e]&&a.deleteRenderbuffer(R.__webglColorRenderbuffer[_e]);R.__webglDepthRenderbuffer&&a.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ae=L.textures;for(let _e=0,Se=ae.length;_e<Se;_e++){const xe=r.get(ae[_e]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),u.memory.textures--),r.remove(ae[_e])}r.remove(L)}let z=0;function te(){z=0}function J(){const L=z;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),z+=1,L}function ce(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function de(L,R){const ae=r.get(L);if(L.isVideoTexture&&Ge(L),L.isRenderTargetTexture===!1&&L.version>0&&ae.__version!==L.version){const _e=L.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(ae,L,R);return}}t.bindTexture(a.TEXTURE_2D,ae.__webglTexture,a.TEXTURE0+R)}function ue(L,R){const ae=r.get(L);if(L.version>0&&ae.__version!==L.version){Y(ae,L,R);return}t.bindTexture(a.TEXTURE_2D_ARRAY,ae.__webglTexture,a.TEXTURE0+R)}function fe(L,R){const ae=r.get(L);if(L.version>0&&ae.__version!==L.version){Y(ae,L,R);return}t.bindTexture(a.TEXTURE_3D,ae.__webglTexture,a.TEXTURE0+R)}function G(L,R){const ae=r.get(L);if(L.version>0&&ae.__version!==L.version){ne(ae,L,R);return}t.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture,a.TEXTURE0+R)}const me={[Ad]:a.REPEAT,[ea]:a.CLAMP_TO_EDGE,[Cd]:a.MIRRORED_REPEAT},D={[mi]:a.NEAREST,[r_]:a.NEAREST_MIPMAP_NEAREST,[cl]:a.NEAREST_MIPMAP_LINEAR,[bi]:a.LINEAR,[Iu]:a.LINEAR_MIPMAP_NEAREST,[ta]:a.LINEAR_MIPMAP_LINEAR},E={[l_]:a.NEVER,[p_]:a.ALWAYS,[c_]:a.LESS,[zg]:a.LEQUAL,[u_]:a.EQUAL,[f_]:a.GEQUAL,[d_]:a.GREATER,[h_]:a.NOTEQUAL};function j(L,R){if(R.type===Xi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===bi||R.magFilter===Iu||R.magFilter===cl||R.magFilter===ta||R.minFilter===bi||R.minFilter===Iu||R.minFilter===cl||R.minFilter===ta)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,me[R.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,me[R.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,me[R.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,D[R.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,D[R.minFilter]),R.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,E[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===mi||R.minFilter!==cl&&R.minFilter!==ta||R.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function ve(L,R){let ae=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",F));const _e=R.source;let Se=y.get(_e);Se===void 0&&(Se={},y.set(_e,Se));const xe=ce(R);if(xe!==L.__cacheKey){Se[xe]===void 0&&(Se[xe]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Se[xe].usedTimes++;const Xe=Se[L.__cacheKey];Xe!==void 0&&(Se[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(R)),L.__cacheKey=xe,L.__webglTexture=Se[xe].texture}return ae}function Y(L,R,ae){let _e=a.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_e=a.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_e=a.TEXTURE_3D);const Se=ve(L,R),xe=R.source;t.bindTexture(_e,L.__webglTexture,a.TEXTURE0+ae);const Xe=r.get(xe);if(xe.version!==Xe.__version||Se===!0){t.activeTexture(a.TEXTURE0+ae);const Ne=Tt.getPrimaries(Tt.workingColorSpace),Oe=R.colorSpace===Er?null:Tt.getPrimaries(R.colorSpace),pt=R.colorSpace===Er||Ne===Oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ee=w(R.image,!1,o.maxTextureSize);Ee=vt(R,Ee);const ze=l.convert(R.format,R.colorSpace),nt=l.convert(R.type);let st=k(R.internalFormat,ze,nt,R.colorSpace,R.isVideoTexture);j(_e,R);let Ve;const yt=R.mipmaps,ht=R.isVideoTexture!==!0,Pt=Xe.__version===void 0||Se===!0,$=xe.dataReady,ke=q(R,Ee);if(R.isDepthTexture)st=A(R.format===Ja,R.type),Pt&&(ht?t.texStorage2D(a.TEXTURE_2D,1,st,Ee.width,Ee.height):t.texImage2D(a.TEXTURE_2D,0,st,Ee.width,Ee.height,0,ze,nt,null));else if(R.isDataTexture)if(yt.length>0){ht&&Pt&&t.texStorage2D(a.TEXTURE_2D,ke,st,yt[0].width,yt[0].height);for(let he=0,ye=yt.length;he<ye;he++)Ve=yt[he],ht?$&&t.texSubImage2D(a.TEXTURE_2D,he,0,0,Ve.width,Ve.height,ze,nt,Ve.data):t.texImage2D(a.TEXTURE_2D,he,st,Ve.width,Ve.height,0,ze,nt,Ve.data);R.generateMipmaps=!1}else ht?(Pt&&t.texStorage2D(a.TEXTURE_2D,ke,st,Ee.width,Ee.height),$&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ze,nt,Ee.data)):t.texImage2D(a.TEXTURE_2D,0,st,Ee.width,Ee.height,0,ze,nt,Ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ht&&Pt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ke,st,yt[0].width,yt[0].height,Ee.depth);for(let he=0,ye=yt.length;he<ye;he++)if(Ve=yt[he],R.format!==pi)if(ze!==null)if(ht){if($)if(R.layerUpdates.size>0){const Ie=rg(Ve.width,Ve.height,R.format,R.type);for(const Le of R.layerUpdates){const ft=Ve.data.subarray(Le*Ie/Ve.data.BYTES_PER_ELEMENT,(Le+1)*Ie/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,he,0,0,Le,Ve.width,Ve.height,1,ze,ft)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,he,0,0,0,Ve.width,Ve.height,Ee.depth,ze,Ve.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,he,st,Ve.width,Ve.height,Ee.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?$&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,he,0,0,0,Ve.width,Ve.height,Ee.depth,ze,nt,Ve.data):t.texImage3D(a.TEXTURE_2D_ARRAY,he,st,Ve.width,Ve.height,Ee.depth,0,ze,nt,Ve.data)}else{ht&&Pt&&t.texStorage2D(a.TEXTURE_2D,ke,st,yt[0].width,yt[0].height);for(let he=0,ye=yt.length;he<ye;he++)Ve=yt[he],R.format!==pi?ze!==null?ht?$&&t.compressedTexSubImage2D(a.TEXTURE_2D,he,0,0,Ve.width,Ve.height,ze,Ve.data):t.compressedTexImage2D(a.TEXTURE_2D,he,st,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?$&&t.texSubImage2D(a.TEXTURE_2D,he,0,0,Ve.width,Ve.height,ze,nt,Ve.data):t.texImage2D(a.TEXTURE_2D,he,st,Ve.width,Ve.height,0,ze,nt,Ve.data)}else if(R.isDataArrayTexture)if(ht){if(Pt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ke,st,Ee.width,Ee.height,Ee.depth),$)if(R.layerUpdates.size>0){const he=rg(Ee.width,Ee.height,R.format,R.type);for(const ye of R.layerUpdates){const Ie=Ee.data.subarray(ye*he/Ee.data.BYTES_PER_ELEMENT,(ye+1)*he/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,ze,nt,Ie)}R.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,nt,Ee.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,st,Ee.width,Ee.height,Ee.depth,0,ze,nt,Ee.data);else if(R.isData3DTexture)ht?(Pt&&t.texStorage3D(a.TEXTURE_3D,ke,st,Ee.width,Ee.height,Ee.depth),$&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,nt,Ee.data)):t.texImage3D(a.TEXTURE_3D,0,st,Ee.width,Ee.height,Ee.depth,0,ze,nt,Ee.data);else if(R.isFramebufferTexture){if(Pt)if(ht)t.texStorage2D(a.TEXTURE_2D,ke,st,Ee.width,Ee.height);else{let he=Ee.width,ye=Ee.height;for(let Ie=0;Ie<ke;Ie++)t.texImage2D(a.TEXTURE_2D,Ie,st,he,ye,0,ze,nt,null),he>>=1,ye>>=1}}else if(yt.length>0){if(ht&&Pt){const he=Fe(yt[0]);t.texStorage2D(a.TEXTURE_2D,ke,st,he.width,he.height)}for(let he=0,ye=yt.length;he<ye;he++)Ve=yt[he],ht?$&&t.texSubImage2D(a.TEXTURE_2D,he,0,0,ze,nt,Ve):t.texImage2D(a.TEXTURE_2D,he,st,ze,nt,Ve);R.generateMipmaps=!1}else if(ht){if(Pt){const he=Fe(Ee);t.texStorage2D(a.TEXTURE_2D,ke,st,he.width,he.height)}$&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ze,nt,Ee)}else t.texImage2D(a.TEXTURE_2D,0,st,ze,nt,Ee);_(R)&&S(_e),Xe.__version=xe.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ne(L,R,ae){if(R.image.length!==6)return;const _e=ve(L,R),Se=R.source;t.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+ae);const xe=r.get(Se);if(Se.version!==xe.__version||_e===!0){t.activeTexture(a.TEXTURE0+ae);const Xe=Tt.getPrimaries(Tt.workingColorSpace),Ne=R.colorSpace===Er?null:Tt.getPrimaries(R.colorSpace),Oe=R.colorSpace===Er||Xe===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const pt=R.isCompressedTexture||R.image[0].isCompressedTexture,Ee=R.image[0]&&R.image[0].isDataTexture,ze=[];for(let ye=0;ye<6;ye++)!pt&&!Ee?ze[ye]=w(R.image[ye],!0,o.maxCubemapSize):ze[ye]=Ee?R.image[ye].image:R.image[ye],ze[ye]=vt(R,ze[ye]);const nt=ze[0],st=l.convert(R.format,R.colorSpace),Ve=l.convert(R.type),yt=k(R.internalFormat,st,Ve,R.colorSpace),ht=R.isVideoTexture!==!0,Pt=xe.__version===void 0||_e===!0,$=Se.dataReady;let ke=q(R,nt);j(a.TEXTURE_CUBE_MAP,R);let he;if(pt){ht&&Pt&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ke,yt,nt.width,nt.height);for(let ye=0;ye<6;ye++){he=ze[ye].mipmaps;for(let Ie=0;Ie<he.length;Ie++){const Le=he[Ie];R.format!==pi?st!==null?ht?$&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie,0,0,Le.width,Le.height,st,Le.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie,yt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?$&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie,0,0,Le.width,Le.height,st,Ve,Le.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie,yt,Le.width,Le.height,0,st,Ve,Le.data)}}}else{if(he=R.mipmaps,ht&&Pt){he.length>0&&ke++;const ye=Fe(ze[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ke,yt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){ht?$&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ze[ye].width,ze[ye].height,st,Ve,ze[ye].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,yt,ze[ye].width,ze[ye].height,0,st,Ve,ze[ye].data);for(let Ie=0;Ie<he.length;Ie++){const ft=he[Ie].image[ye].image;ht?$&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie+1,0,0,ft.width,ft.height,st,Ve,ft.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie+1,yt,ft.width,ft.height,0,st,Ve,ft.data)}}else{ht?$&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,st,Ve,ze[ye]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,yt,st,Ve,ze[ye]);for(let Ie=0;Ie<he.length;Ie++){const Le=he[Ie];ht?$&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie+1,0,0,st,Ve,Le.image[ye]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie+1,yt,st,Ve,Le.image[ye])}}}_(R)&&S(a.TEXTURE_CUBE_MAP),xe.__version=Se.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function pe(L,R,ae,_e,Se,xe){const Xe=l.convert(ae.format,ae.colorSpace),Ne=l.convert(ae.type),Oe=k(ae.internalFormat,Xe,Ne,ae.colorSpace),pt=r.get(R),Ee=r.get(ae);if(Ee.__renderTarget=R,!pt.__hasExternalTextures){const ze=Math.max(1,R.width>>xe),nt=Math.max(1,R.height>>xe);Se===a.TEXTURE_3D||Se===a.TEXTURE_2D_ARRAY?t.texImage3D(Se,xe,Oe,ze,nt,R.depth,0,Xe,Ne,null):t.texImage2D(Se,xe,Oe,ze,nt,0,Xe,Ne,null)}t.bindFramebuffer(a.FRAMEBUFFER,L),et(R)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,Se,Ee.__webglTexture,0,tt(R)):(Se===a.TEXTURE_2D||Se>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,_e,Se,Ee.__webglTexture,xe),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ie(L,R,ae){if(a.bindRenderbuffer(a.RENDERBUFFER,L),R.depthBuffer){const _e=R.depthTexture,Se=_e&&_e.isDepthTexture?_e.type:null,xe=A(R.stencilBuffer,Se),Xe=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=tt(R);et(R)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ne,xe,R.width,R.height):ae?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ne,xe,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,xe,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Xe,a.RENDERBUFFER,L)}else{const _e=R.textures;for(let Se=0;Se<_e.length;Se++){const xe=_e[Se],Xe=l.convert(xe.format,xe.colorSpace),Ne=l.convert(xe.type),Oe=k(xe.internalFormat,Xe,Ne,xe.colorSpace),pt=tt(R);ae&&et(R)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,pt,Oe,R.width,R.height):et(R)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,pt,Oe,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Oe,R.width,R.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ge(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(R.depthTexture);_e.__renderTarget=R,(!_e.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),de(R.depthTexture,0);const Se=_e.__webglTexture,xe=tt(R);if(R.depthTexture.format===qa)et(R)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Se,0,xe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Se,0);else if(R.depthTexture.format===Ja)et(R)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Se,0,xe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function be(L){const R=r.get(L),ae=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const _e=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_e){const Se=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_e.removeEventListener("dispose",Se)};_e.addEventListener("dispose",Se),R.__depthDisposeCallback=Se}R.__boundDepthTexture=_e}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");ge(R.__webglFramebuffer,L)}else if(ae){R.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[_e]),R.__webglDepthbuffer[_e]===void 0)R.__webglDepthbuffer[_e]=a.createRenderbuffer(),ie(R.__webglDepthbuffer[_e],L,!1);else{const Se=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=R.__webglDepthbuffer[_e];a.bindRenderbuffer(a.RENDERBUFFER,xe),a.framebufferRenderbuffer(a.FRAMEBUFFER,Se,a.RENDERBUFFER,xe)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=a.createRenderbuffer(),ie(R.__webglDepthbuffer,L,!1);else{const _e=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=R.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Se),a.framebufferRenderbuffer(a.FRAMEBUFFER,_e,a.RENDERBUFFER,Se)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Pe(L,R,ae){const _e=r.get(L);R!==void 0&&pe(_e.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ae!==void 0&&be(L)}function Je(L){const R=L.texture,ae=r.get(L),_e=r.get(R);L.addEventListener("dispose",O);const Se=L.textures,xe=L.isWebGLCubeRenderTarget===!0,Xe=Se.length>1;if(Xe||(_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture()),_e.__version=R.version,u.memory.textures++),xe){ae.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(R.mipmaps&&R.mipmaps.length>0){ae.__webglFramebuffer[Ne]=[];for(let Oe=0;Oe<R.mipmaps.length;Oe++)ae.__webglFramebuffer[Ne][Oe]=a.createFramebuffer()}else ae.__webglFramebuffer[Ne]=a.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ne=0;Ne<R.mipmaps.length;Ne++)ae.__webglFramebuffer[Ne]=a.createFramebuffer()}else ae.__webglFramebuffer=a.createFramebuffer();if(Xe)for(let Ne=0,Oe=Se.length;Ne<Oe;Ne++){const pt=r.get(Se[Ne]);pt.__webglTexture===void 0&&(pt.__webglTexture=a.createTexture(),u.memory.textures++)}if(L.samples>0&&et(L)===!1){ae.__webglMultisampledFramebuffer=a.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Se.length;Ne++){const Oe=Se[Ne];ae.__webglColorRenderbuffer[Ne]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ae.__webglColorRenderbuffer[Ne]);const pt=l.convert(Oe.format,Oe.colorSpace),Ee=l.convert(Oe.type),ze=k(Oe.internalFormat,pt,Ee,Oe.colorSpace,L.isXRRenderTarget===!0),nt=tt(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,nt,ze,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,ae.__webglColorRenderbuffer[Ne])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(ae.__webglDepthRenderbuffer=a.createRenderbuffer(),ie(ae.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(xe){t.bindTexture(a.TEXTURE_CUBE_MAP,_e.__webglTexture),j(a.TEXTURE_CUBE_MAP,R);for(let Ne=0;Ne<6;Ne++)if(R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)pe(ae.__webglFramebuffer[Ne][Oe],L,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Oe);else pe(ae.__webglFramebuffer[Ne],L,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);_(R)&&S(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ne=0,Oe=Se.length;Ne<Oe;Ne++){const pt=Se[Ne],Ee=r.get(pt);t.bindTexture(a.TEXTURE_2D,Ee.__webglTexture),j(a.TEXTURE_2D,pt),pe(ae.__webglFramebuffer,L,pt,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,0),_(pt)&&S(a.TEXTURE_2D)}t.unbindTexture()}else{let Ne=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ne,_e.__webglTexture),j(Ne,R),R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)pe(ae.__webglFramebuffer[Oe],L,R,a.COLOR_ATTACHMENT0,Ne,Oe);else pe(ae.__webglFramebuffer,L,R,a.COLOR_ATTACHMENT0,Ne,0);_(R)&&S(Ne),t.unbindTexture()}L.depthBuffer&&be(L)}function We(L){const R=L.textures;for(let ae=0,_e=R.length;ae<_e;ae++){const Se=R[ae];if(_(Se)){const xe=I(L),Xe=r.get(Se).__webglTexture;t.bindTexture(xe,Xe),S(xe),t.unbindTexture()}}}const ot=[],H=[];function wt(L){if(L.samples>0){if(et(L)===!1){const R=L.textures,ae=L.width,_e=L.height;let Se=a.COLOR_BUFFER_BIT;const xe=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Xe=r.get(L),Ne=R.length>1;if(Ne)for(let Oe=0;Oe<R.length;Oe++)t.bindFramebuffer(a.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Oe=0;Oe<R.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=a.STENCIL_BUFFER_BIT)),Ne){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const pt=r.get(R[Oe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,pt,0)}a.blitFramebuffer(0,0,ae,_e,0,0,ae,_e,Se,a.NEAREST),p===!0&&(ot.length=0,H.length=0,ot.push(a.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ot.push(xe),H.push(xe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,H)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ne)for(let Oe=0;Oe<R.length;Oe++){t.bindFramebuffer(a.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const pt=r.get(R[Oe]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.TEXTURE_2D,pt,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const R=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[R])}}}function tt(L){return Math.min(o.maxSamples,L.samples)}function et(L){const R=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ge(L){const R=u.render.frame;x.get(L)!==R&&(x.set(L,R),L.update())}function vt(L,R){const ae=L.colorSpace,_e=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ae!==ns&&ae!==Er&&(Tt.getTransfer(ae)===Dt?(_e!==pi||Se!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),R}function Fe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=te,this.setTexture2D=de,this.setTexture2DArray=ue,this.setTexture3D=fe,this.setTextureCube=G,this.rebindTextures=Pe,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=et}function vb(a,e){function t(r,o=Er){let l;const u=Tt.getTransfer(o);if(r===$i)return a.UNSIGNED_BYTE;if(r===ch)return a.UNSIGNED_SHORT_4_4_4_4;if(r===uh)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Pg)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Rg)return a.BYTE;if(r===Ng)return a.SHORT;if(r===Ys)return a.UNSIGNED_SHORT;if(r===lh)return a.INT;if(r===ra)return a.UNSIGNED_INT;if(r===Xi)return a.FLOAT;if(r===Ks)return a.HALF_FLOAT;if(r===kg)return a.ALPHA;if(r===Dg)return a.RGB;if(r===pi)return a.RGBA;if(r===Lg)return a.LUMINANCE;if(r===Ig)return a.LUMINANCE_ALPHA;if(r===qa)return a.DEPTH_COMPONENT;if(r===Ja)return a.DEPTH_STENCIL;if(r===Ug)return a.RED;if(r===dh)return a.RED_INTEGER;if(r===Fg)return a.RG;if(r===hh)return a.RG_INTEGER;if(r===fh)return a.RGBA_INTEGER;if(r===kl||r===Dl||r===Ll||r===Il)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Nd||r===Pd||r===kd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dd||r===Ld||r===Id)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Dd||r===Ld)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Id)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ud||r===Fd||r===Od||r===Bd||r===zd||r===Hd||r===Vd||r===Gd||r===jd||r===Wd||r===Xd||r===qd||r===Yd||r===$d)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ud)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Od)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$d)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===Kd||r===Zd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ul)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Og||r===Qd||r===Jd||r===eh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ul)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Qd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===eh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qa?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}class yb extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wa extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _b={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,r),S=this._getHandJoint(m,w);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=x.position.distanceTo(v.position),M=.02,b=.005;m.inputState.pinching&&y>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_b)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Ln,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Rr({vertexShader:Sb,fragmentShader:Mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new to(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bb extends is{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,x=null,v=null,y=null,M=null,b=null;const w=new wb,_=t.getContextAttributes();let S=null,I=null;const k=[],A=[],q=new at;let F=null;const O=new Qn;O.viewport=new Wt;const B=new Qn;B.viewport=new Wt;const P=[O,B],C=new yb;let z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=k[Y];return ne===void 0&&(ne=new ud,k[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=k[Y];return ne===void 0&&(ne=new ud,k[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=k[Y];return ne===void 0&&(ne=new ud,k[Y]=ne),ne.getHandSpace()};function J(Y){const ne=A.indexOf(Y.inputSource);if(ne===-1)return;const pe=k[ne];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,m||u),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ce(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",de);for(let Y=0;Y<k.length;Y++){const ne=A[Y];ne!==null&&(A[Y]=null,k[Y].disconnect(ne))}z=null,te=null,w.reset(),e.setRenderTarget(S),M=null,y=null,v=null,o=null,I=null,ve.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(S=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",de),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(q),o.renderState.layers===void 0){const ne={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ne),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new aa(M.framebufferWidth,M.framebufferHeight,{format:pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,pe=null,ie=null;_.depth&&(ie=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?Ja:qa,pe=_.stencil?Qa:ra);const ge={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:l};v=new XRWebGLBinding(o,t),y=v.createProjectionLayer(ge),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new aa(y.textureWidth,y.textureHeight,{format:pi,type:$i,depthTexture:new Jg(y.textureWidth,y.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),ve.setContext(o),ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(Y){for(let ne=0;ne<Y.removed.length;ne++){const pe=Y.removed[ne],ie=A.indexOf(pe);ie>=0&&(A[ie]=null,k[ie].disconnect(pe))}for(let ne=0;ne<Y.added.length;ne++){const pe=Y.added[ne];let ie=A.indexOf(pe);if(ie===-1){for(let be=0;be<k.length;be++)if(be>=A.length){A.push(pe),ie=be;break}else if(A[be]===null){A[be]=pe,ie=be;break}if(ie===-1)break}const ge=k[ie];ge&&ge.connect(pe)}}const ue=new K,fe=new K;function G(Y,ne,pe){ue.setFromMatrixPosition(ne.matrixWorld),fe.setFromMatrixPosition(pe.matrixWorld);const ie=ue.distanceTo(fe),ge=ne.projectionMatrix.elements,be=pe.projectionMatrix.elements,Pe=ge[14]/(ge[10]-1),Je=ge[14]/(ge[10]+1),We=(ge[9]+1)/ge[5],ot=(ge[9]-1)/ge[5],H=(ge[8]-1)/ge[0],wt=(be[8]+1)/be[0],tt=Pe*H,et=Pe*wt,Ge=ie/(-H+wt),vt=Ge*-H;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(vt),Y.translateZ(Ge),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ge[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Fe=Pe+Ge,L=Je+Ge,R=tt-vt,ae=et+(ie-vt),_e=We*Je/L*Fe,Se=ot*Je/L*Fe;Y.projectionMatrix.makePerspective(R,ae,_e,Se,Fe,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function me(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let ne=Y.near,pe=Y.far;w.texture!==null&&(w.depthNear>0&&(ne=w.depthNear),w.depthFar>0&&(pe=w.depthFar)),C.near=B.near=O.near=ne,C.far=B.far=O.far=pe,(z!==C.near||te!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,te=C.far),O.layers.mask=Y.layers.mask|2,B.layers.mask=Y.layers.mask|4,C.layers.mask=O.layers.mask|B.layers.mask;const ie=Y.parent,ge=C.cameras;me(C,ie);for(let be=0;be<ge.length;be++)me(ge[be],ie);ge.length===2?G(C,O,B):C.projectionMatrix.copy(O.projectionMatrix),D(Y,C,ie)};function D(Y,ne,pe){pe===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=th*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(Y){p=Y,y!==null&&(y.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let E=null;function j(Y,ne){if(x=ne.getViewerPose(m||u),b=ne,x!==null){const pe=x.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let ie=!1;pe.length!==C.cameras.length&&(C.cameras.length=0,ie=!0);for(let be=0;be<pe.length;be++){const Pe=pe[be];let Je=null;if(M!==null)Je=M.getViewport(Pe);else{const ot=v.getViewSubImage(y,Pe);Je=ot.viewport,be===0&&(e.setRenderTargetTextures(I,ot.colorTexture,y.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(I))}let We=P[be];We===void 0&&(We=new Qn,We.layers.enable(be),We.viewport=new Wt,P[be]=We),We.matrix.fromArray(Pe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Pe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Je.x,Je.y,Je.width,Je.height),be===0&&(C.matrix.copy(We.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ie===!0&&C.cameras.push(We)}const ge=o.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const be=v.getDepthInformation(pe[0]);be&&be.isValid&&be.texture&&w.init(e,be,o.renderState)}}for(let pe=0;pe<k.length;pe++){const ie=A[pe],ge=k[pe];ie!==null&&ge!==void 0&&ge.update(ie,ne,m||u)}E&&E(Y,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),b=null}const ve=new Zg;ve.setAnimationLoop(j),this.setAnimationLoop=function(Y){E=Y},this.dispose=function(){}}}const $r=new Ai,Eb=new Ht;function Tb(a,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function r(_,S){S.color.getRGB(_.fogColor.value,Yg(a)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function o(_,S,I,k,A){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(_,S):S.isMeshToonMaterial?(l(_,S),v(_,S)):S.isMeshPhongMaterial?(l(_,S),x(_,S)):S.isMeshStandardMaterial?(l(_,S),y(_,S),S.isMeshPhysicalMaterial&&M(_,S,A)):S.isMeshMatcapMaterial?(l(_,S),b(_,S)):S.isMeshDepthMaterial?l(_,S):S.isMeshDistanceMaterial?(l(_,S),w(_,S)):S.isMeshNormalMaterial?l(_,S):S.isLineBasicMaterial?(u(_,S),S.isLineDashedMaterial&&d(_,S)):S.isPointsMaterial?p(_,S,I,k):S.isSpriteMaterial?m(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===Dn&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===Dn&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const I=e.get(S),k=I.envMap,A=I.envMapRotation;k&&(_.envMap.value=k,$r.copy(A),$r.x*=-1,$r.y*=-1,$r.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),_.envMapRotation.value.setFromMatrix4(Eb.makeRotationFromEuler($r)),_.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function u(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function d(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function p(_,S,I,k){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*I,_.scale.value=k*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function m(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function x(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function v(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function y(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function M(_,S,I){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Dn&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function b(_,S){S.matcap&&(_.matcap.value=S.matcap)}function w(_,S){const I=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Ab(a,e,t,r){let o={},l={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,k){const A=k.program;r.uniformBlockBinding(I,A)}function m(I,k){let A=o[I.id];A===void 0&&(b(I),A=x(I),o[I.id]=A,I.addEventListener("dispose",_));const q=k.program;r.updateUBOMapping(I,q);const F=e.render.frame;l[I.id]!==F&&(y(I),l[I.id]=F)}function x(I){const k=v();I.__bindingPointIndex=k;const A=a.createBuffer(),q=I.__size,F=I.usage;return a.bindBuffer(a.UNIFORM_BUFFER,A),a.bufferData(a.UNIFORM_BUFFER,q,F),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,k,A),A}function v(){for(let I=0;I<d;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const k=o[I.id],A=I.uniforms,q=I.__cache;a.bindBuffer(a.UNIFORM_BUFFER,k);for(let F=0,O=A.length;F<O;F++){const B=Array.isArray(A[F])?A[F]:[A[F]];for(let P=0,C=B.length;P<C;P++){const z=B[P];if(M(z,F,P,q)===!0){const te=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let de=0;de<J.length;de++){const ue=J[de],fe=w(ue);typeof ue=="number"||typeof ue=="boolean"?(z.__data[0]=ue,a.bufferSubData(a.UNIFORM_BUFFER,te+ce,z.__data)):ue.isMatrix3?(z.__data[0]=ue.elements[0],z.__data[1]=ue.elements[1],z.__data[2]=ue.elements[2],z.__data[3]=0,z.__data[4]=ue.elements[3],z.__data[5]=ue.elements[4],z.__data[6]=ue.elements[5],z.__data[7]=0,z.__data[8]=ue.elements[6],z.__data[9]=ue.elements[7],z.__data[10]=ue.elements[8],z.__data[11]=0):(ue.toArray(z.__data,ce),ce+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,te,z.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(I,k,A,q){const F=I.value,O=k+"_"+A;if(q[O]===void 0)return typeof F=="number"||typeof F=="boolean"?q[O]=F:q[O]=F.clone(),!0;{const B=q[O];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return q[O]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function b(I){const k=I.uniforms;let A=0;const q=16;for(let O=0,B=k.length;O<B;O++){const P=Array.isArray(k[O])?k[O]:[k[O]];for(let C=0,z=P.length;C<z;C++){const te=P[C],J=Array.isArray(te.value)?te.value:[te.value];for(let ce=0,de=J.length;ce<de;ce++){const ue=J[ce],fe=w(ue),G=A%q,me=G%fe.boundary,D=G+me;A+=me,D!==0&&q-D<fe.storage&&(A+=q-D),te.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=A,A+=fe.storage}}}const F=A%q;return F>0&&(A+=q-F),I.__size=A,I.__cache={},this}function w(I){const k={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(k.boundary=4,k.storage=4):I.isVector2?(k.boundary=8,k.storage=8):I.isVector3||I.isColor?(k.boundary=16,k.storage=12):I.isVector4?(k.boundary=16,k.storage=16):I.isMatrix3?(k.boundary=48,k.storage=48):I.isMatrix4?(k.boundary=64,k.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),k}function _(I){const k=I.target;k.removeEventListener("dispose",_);const A=u.indexOf(k.__bindingPointIndex);u.splice(A,1),a.deleteBuffer(o[k.id]),delete o[k.id],delete l[k.id]}function S(){for(const I in o)a.deleteBuffer(o[I]);u=[],o={},l={}}return{bind:p,update:m,dispose:S}}class Cb{constructor(e={}){const{canvas:t=g_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const b=new Uint32Array(4),w=new Int32Array(4);let _=null,S=null;const I=[],k=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Ar,this.toneMappingExposure=1;const A=this;let q=!1,F=0,O=0,B=null,P=-1,C=null;const z=new Wt,te=new Wt;let J=null;const ce=new Nt(0);let de=0,ue=t.width,fe=t.height,G=1,me=null,D=null;const E=new Wt(0,0,ue,fe),j=new Wt(0,0,ue,fe);let ve=!1;const Y=new xh;let ne=!1,pe=!1;const ie=new Ht,ge=new Ht,be=new K,Pe=new Wt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ot(){return B===null?G:1}let H=r;function wt(N,Z){return t.getContext(N,Z)}try{const N={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oh}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Le,!1),H===null){const Z="webgl2";if(H=wt(Z,N),H===null)throw wt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let tt,et,Ge,vt,Fe,L,R,ae,_e,Se,xe,Xe,Ne,Oe,pt,Ee,ze,nt,st,Ve,yt,ht,Pt,$;function ke(){tt=new DM(H),tt.init(),ht=new vb(H,tt),et=new AM(H,tt,e,ht),Ge=new mb(H,tt),et.reverseDepthBuffer&&y&&Ge.buffers.depth.setReversed(!0),vt=new UM(H),Fe=new eb,L=new xb(H,tt,Ge,Fe,et,ht,vt),R=new RM(A),ae=new kM(A),_e=new G_(H),Pt=new EM(H,_e),Se=new LM(H,_e,vt,Pt),xe=new OM(H,Se,_e,vt),st=new FM(H,et,L),Ee=new CM(Fe),Xe=new Jw(A,R,ae,tt,et,Pt,Ee),Ne=new Tb(A,Fe),Oe=new nb,pt=new lb(tt),nt=new bM(A,R,ae,Ge,xe,M,p),ze=new fb(A,xe,et),$=new Ab(H,vt,et,Ge),Ve=new TM(H,tt,vt),yt=new IM(H,tt,vt),vt.programs=Xe.programs,A.capabilities=et,A.extensions=tt,A.properties=Fe,A.renderLists=Oe,A.shadowMap=ze,A.state=Ge,A.info=vt}ke();const he=new bb(A,H);this.xr=he,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const N=tt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=tt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(N){N!==void 0&&(G=N,this.setSize(ue,fe,!1))},this.getSize=function(N){return N.set(ue,fe)},this.setSize=function(N,Z,oe=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=N,fe=Z,t.width=Math.floor(N*G),t.height=Math.floor(Z*G),oe===!0&&(t.style.width=N+"px",t.style.height=Z+"px"),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(ue*G,fe*G).floor()},this.setDrawingBufferSize=function(N,Z,oe){ue=N,fe=Z,G=oe,t.width=Math.floor(N*oe),t.height=Math.floor(Z*oe),this.setViewport(0,0,N,Z)},this.getCurrentViewport=function(N){return N.copy(z)},this.getViewport=function(N){return N.copy(E)},this.setViewport=function(N,Z,oe,le){N.isVector4?E.set(N.x,N.y,N.z,N.w):E.set(N,Z,oe,le),Ge.viewport(z.copy(E).multiplyScalar(G).round())},this.getScissor=function(N){return N.copy(j)},this.setScissor=function(N,Z,oe,le){N.isVector4?j.set(N.x,N.y,N.z,N.w):j.set(N,Z,oe,le),Ge.scissor(te.copy(j).multiplyScalar(G).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(N){Ge.setScissorTest(ve=N)},this.setOpaqueSort=function(N){me=N},this.setTransparentSort=function(N){D=N},this.getClearColor=function(N){return N.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(N=!0,Z=!0,oe=!0){let le=0;if(N){let Q=!1;if(B!==null){const Re=B.texture.format;Q=Re===fh||Re===hh||Re===dh}if(Q){const Re=B.texture.type,Ae=Re===$i||Re===ra||Re===Ys||Re===Qa||Re===ch||Re===uh,$e=nt.getClearColor(),qe=nt.getClearAlpha(),lt=$e.r,dt=$e.g,Ke=$e.b;Ae?(b[0]=lt,b[1]=dt,b[2]=Ke,b[3]=qe,H.clearBufferuiv(H.COLOR,0,b)):(w[0]=lt,w[1]=dt,w[2]=Ke,w[3]=qe,H.clearBufferiv(H.COLOR,0,w))}else le|=H.COLOR_BUFFER_BIT}Z&&(le|=H.DEPTH_BUFFER_BIT),oe&&(le|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Oe.dispose(),pt.dispose(),Fe.dispose(),R.dispose(),ae.dispose(),xe.dispose(),Pt.dispose(),$.dispose(),Xe.dispose(),he.dispose(),he.removeEventListener("sessionstart",sa),he.removeEventListener("sessionend",Qi),Ci.stop()};function ye(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const N=vt.autoReset,Z=ze.enabled,oe=ze.autoUpdate,le=ze.needsUpdate,Q=ze.type;ke(),vt.autoReset=N,ze.enabled=Z,ze.autoUpdate=oe,ze.needsUpdate=le,ze.type=Q}function Le(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ft(N){const Z=N.target;Z.removeEventListener("dispose",ft),Ut(Z)}function Ut(N){$t(N),Fe.remove(N)}function $t(N){const Z=Fe.get(N).programs;Z!==void 0&&(Z.forEach(function(oe){Xe.releaseProgram(oe)}),N.isShaderMaterial&&Xe.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,oe,le,Q,Re){Z===null&&(Z=Je);const Ae=Q.isMesh&&Q.matrixWorld.determinant()<0,$e=ro(N,Z,oe,le,Q);Ge.setMaterial(le,Ae);let qe=oe.index,lt=1;if(le.wireframe===!0){if(qe=Se.getWireframeAttribute(oe),qe===void 0)return;lt=2}const dt=oe.drawRange,Ke=oe.attributes.position;let Mt=dt.start*lt,Rt=(dt.start+dt.count)*lt;Re!==null&&(Mt=Math.max(Mt,Re.start*lt),Rt=Math.min(Rt,(Re.start+Re.count)*lt)),qe!==null?(Mt=Math.max(Mt,0),Rt=Math.min(Rt,qe.count)):Ke!=null&&(Mt=Math.max(Mt,0),Rt=Math.min(Rt,Ke.count));const St=Rt-Mt;if(St<0||St===1/0)return;Pt.setup(Q,le,$e,oe,qe);let cn,mt=Ve;if(qe!==null&&(cn=_e.get(qe),mt=yt,mt.setIndex(cn)),Q.isMesh)le.wireframe===!0?(Ge.setLineWidth(le.wireframeLinewidth*ot()),mt.setMode(H.LINES)):mt.setMode(H.TRIANGLES);else if(Q.isLine){let Qe=le.linewidth;Qe===void 0&&(Qe=1),Ge.setLineWidth(Qe*ot()),Q.isLineSegments?mt.setMode(H.LINES):Q.isLineLoop?mt.setMode(H.LINE_LOOP):mt.setMode(H.LINE_STRIP)}else Q.isPoints?mt.setMode(H.POINTS):Q.isSprite&&mt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)mt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))mt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,ei=Q._multiDrawCounts,At=Q._multiDrawCount,un=qe?_e.get(qe).bytesPerElement:1,ti=Fe.get(le).currentProgram.getUniforms();for(let Kt=0;Kt<At;Kt++)ti.setValue(H,"_gl_DrawID",Kt),mt.render(Qe[Kt]/un,ei[Kt])}else if(Q.isInstancedMesh)mt.renderInstances(Mt,St,Q.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ei=Math.min(oe.instanceCount,Qe);mt.renderInstances(Mt,St,ei)}else mt.render(Mt,St)};function bt(N,Z,oe){N.transparent===!0&&N.side===hi&&N.forceSinglePass===!1?(N.side=Dn,N.needsUpdate=!0,oa(N,Z,oe),N.side=Cr,N.needsUpdate=!0,oa(N,Z,oe),N.side=hi):oa(N,Z,oe)}this.compile=function(N,Z,oe=null){oe===null&&(oe=N),S=pt.get(oe),S.init(Z),k.push(S),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),N!==oe&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights();const le=new Set;return N.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let Ae=0;Ae<Re.length;Ae++){const $e=Re[Ae];bt($e,oe,Q),le.add($e)}else bt(Re,oe,Q),le.add(Re)}),k.pop(),S=null,le},this.compileAsync=function(N,Z,oe=null){const le=this.compile(N,Z,oe);return new Promise(Q=>{function Re(){if(le.forEach(function(Ae){Fe.get(Ae).currentProgram.isReady()&&le.delete(Ae)}),le.size===0){Q(N);return}setTimeout(Re,10)}tt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let bn=null;function yn(N){bn&&bn(N)}function sa(){Ci.stop()}function Qi(){Ci.start()}const Ci=new Zg;Ci.setAnimationLoop(yn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(N){bn=N,he.setAnimationLoop(N),N===null?Ci.stop():Ci.start()},he.addEventListener("sessionstart",sa),he.addEventListener("sessionend",Qi),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(Z),Z=he.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,Z,B),S=pt.get(N,k.length),S.init(Z),k.push(S),ge.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y.setFromProjectionMatrix(ge),pe=this.localClippingEnabled,ne=Ee.init(this.clippingPlanes,pe),_=Oe.get(N,I.length),_.init(),I.push(_),he.enabled===!0&&he.isPresenting===!0){const Re=A.xr.getDepthSensingMesh();Re!==null&&Ri(Re,Z,-1/0,A.sortObjects)}Ri(N,Z,0,A.sortObjects),_.finish(),A.sortObjects===!0&&_.sort(me,D),We=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,We&&nt.addToRenderList(_,N),this.info.render.frame++,ne===!0&&Ee.beginShadows();const oe=S.state.shadowsArray;ze.render(oe,N,Z),ne===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=_.opaque,Q=_.transmissive;if(S.setupLights(),Z.isArrayCamera){const Re=Z.cameras;if(Q.length>0)for(let Ae=0,$e=Re.length;Ae<$e;Ae++){const qe=Re[Ae];Pr(le,Q,N,qe)}We&&nt.render(N);for(let Ae=0,$e=Re.length;Ae<$e;Ae++){const qe=Re[Ae];Nr(_,N,qe,qe.viewport)}}else Q.length>0&&Pr(le,Q,N,Z),We&&nt.render(N),Nr(_,N,Z);B!==null&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),N.isScene===!0&&N.onAfterRender(A,N,Z),Pt.resetDefaultState(),P=-1,C=null,k.pop(),k.length>0?(S=k[k.length-1],ne===!0&&Ee.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,I.pop(),I.length>0?_=I[I.length-1]:_=null};function Ri(N,Z,oe,le){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)oe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Y.intersectsSprite(N)){le&&Pe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ge);const Ae=xe.update(N),$e=N.material;$e.visible&&_.push(N,Ae,$e,oe,Pe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Y.intersectsObject(N))){const Ae=xe.update(N),$e=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Pe.copy(N.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Pe.copy(Ae.boundingSphere.center)),Pe.applyMatrix4(N.matrixWorld).applyMatrix4(ge)),Array.isArray($e)){const qe=Ae.groups;for(let lt=0,dt=qe.length;lt<dt;lt++){const Ke=qe[lt],Mt=$e[Ke.materialIndex];Mt&&Mt.visible&&_.push(N,Ae,Mt,oe,Pe.z,Ke)}}else $e.visible&&_.push(N,Ae,$e,oe,Pe.z,null)}}const Re=N.children;for(let Ae=0,$e=Re.length;Ae<$e;Ae++)Ri(Re[Ae],Z,oe,le)}function Nr(N,Z,oe,le){const Q=N.opaque,Re=N.transmissive,Ae=N.transparent;S.setupLightsView(oe),ne===!0&&Ee.setGlobalState(A.clippingPlanes,oe),le&&Ge.viewport(z.copy(le)),Q.length>0&&Ji(Q,Z,oe),Re.length>0&&Ji(Re,Z,oe),Ae.length>0&&Ji(Ae,Z,oe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Pr(N,Z,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[le.id]===void 0&&(S.state.transmissionRenderTarget[le.id]=new aa(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Ks:$i,minFilter:ta,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Re=S.state.transmissionRenderTarget[le.id],Ae=le.viewport||z;Re.setSize(Ae.z,Ae.w);const $e=A.getRenderTarget();A.setRenderTarget(Re),A.getClearColor(ce),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),We&&nt.render(oe);const qe=A.toneMapping;A.toneMapping=Ar;const lt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),S.setupLightsView(le),ne===!0&&Ee.setGlobalState(A.clippingPlanes,le),Ji(N,oe,le),L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re),tt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Ke=0,Mt=Z.length;Ke<Mt;Ke++){const Rt=Z[Ke],St=Rt.object,cn=Rt.geometry,mt=Rt.material,Qe=Rt.group;if(mt.side===hi&&St.layers.test(le.layers)){const ei=mt.side;mt.side=Dn,mt.needsUpdate=!0,no(St,oe,le,cn,mt,Qe),mt.side=ei,mt.needsUpdate=!0,dt=!0}}dt===!0&&(L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re))}A.setRenderTarget($e),A.setClearColor(ce,de),lt!==void 0&&(le.viewport=lt),A.toneMapping=qe}function Ji(N,Z,oe){const le=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Re=N.length;Q<Re;Q++){const Ae=N[Q],$e=Ae.object,qe=Ae.geometry,lt=le===null?Ae.material:le,dt=Ae.group;$e.layers.test(oe.layers)&&no($e,Z,oe,qe,lt,dt)}}function no(N,Z,oe,le,Q,Re){N.onBeforeRender(A,Z,oe,le,Q,Re),N.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(A,Z,oe,le,N,Re),Q.transparent===!0&&Q.side===hi&&Q.forceSinglePass===!1?(Q.side=Dn,Q.needsUpdate=!0,A.renderBufferDirect(oe,Z,le,Q,N,Re),Q.side=Cr,Q.needsUpdate=!0,A.renderBufferDirect(oe,Z,le,Q,N,Re),Q.side=hi):A.renderBufferDirect(oe,Z,le,Q,N,Re),N.onAfterRender(A,Z,oe,le,Q,Re)}function oa(N,Z,oe){Z.isScene!==!0&&(Z=Je);const le=Fe.get(N),Q=S.state.lights,Re=S.state.shadowsArray,Ae=Q.state.version,$e=Xe.getParameters(N,Q.state,Re,Z,oe),qe=Xe.getProgramCacheKey($e);let lt=le.programs;le.environment=N.isMeshStandardMaterial?Z.environment:null,le.fog=Z.fog,le.envMap=(N.isMeshStandardMaterial?ae:R).get(N.envMap||le.environment),le.envMapRotation=le.environment!==null&&N.envMap===null?Z.environmentRotation:N.envMapRotation,lt===void 0&&(N.addEventListener("dispose",ft),lt=new Map,le.programs=lt);let dt=lt.get(qe);if(dt!==void 0){if(le.currentProgram===dt&&le.lightsStateVersion===Ae)return xi(N,$e),dt}else $e.uniforms=Xe.getUniforms(N),N.onBeforeCompile($e,A),dt=Xe.acquireProgram($e,qe),lt.set(qe,dt),le.uniforms=$e.uniforms;const Ke=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ke.clippingPlanes=Ee.uniform),xi(N,$e),le.needsLights=Kl(N),le.lightsStateVersion=Ae,le.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.directionalShadowMap.value=Q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotShadowMap.value=Q.state.spotShadowMap,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMap.value=Q.state.pointShadowMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),le.currentProgram=dt,le.uniformsList=null,dt}function io(N){if(N.uniformsList===null){const Z=N.currentProgram.getUniforms();N.uniformsList=Fl.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function xi(N,Z){const oe=Fe.get(N);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function ro(N,Z,oe,le,Q){Z.isScene!==!0&&(Z=Je),L.resetTextureUnits();const Re=Z.fog,Ae=le.isMeshStandardMaterial?Z.environment:null,$e=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ns,qe=(le.isMeshStandardMaterial?ae:R).get(le.envMap||Ae),lt=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,dt=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ke=!!oe.morphAttributes.position,Mt=!!oe.morphAttributes.normal,Rt=!!oe.morphAttributes.color;let St=Ar;le.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(St=A.toneMapping);const cn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,mt=cn!==void 0?cn.length:0,Qe=Fe.get(le),ei=S.state.lights;if(ne===!0&&(pe===!0||N!==C)){const _n=N===C&&le.id===P;Ee.setState(le,N,_n)}let At=!1;le.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ei.state.version||Qe.outputColorSpace!==$e||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==qe||le.fog===!0&&Qe.fog!==Re||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ee.numPlanes||Qe.numIntersection!==Ee.numIntersection)||Qe.vertexAlphas!==lt||Qe.vertexTangents!==dt||Qe.morphTargets!==Ke||Qe.morphNormals!==Mt||Qe.morphColors!==Rt||Qe.toneMapping!==St||Qe.morphTargetsCount!==mt)&&(At=!0):(At=!0,Qe.__version=le.version);let un=Qe.currentProgram;At===!0&&(un=oa(le,Z,Q));let ti=!1,Kt=!1,vi=!1;const Lt=un.getUniforms(),Hn=Qe.uniforms;if(Ge.useProgram(un.program)&&(ti=!0,Kt=!0,vi=!0),le.id!==P&&(P=le.id,Kt=!0),ti||C!==N){Ge.buffers.depth.getReversed()?(ie.copy(N.projectionMatrix),v_(ie),y_(ie),Lt.setValue(H,"projectionMatrix",ie)):Lt.setValue(H,"projectionMatrix",N.projectionMatrix),Lt.setValue(H,"viewMatrix",N.matrixWorldInverse);const Vn=Lt.map.cameraPosition;Vn!==void 0&&Vn.setValue(H,be.setFromMatrixPosition(N.matrixWorld)),et.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",N.isOrthographicCamera===!0),C!==N&&(C=N,Kt=!0,vi=!0)}if(Q.isSkinnedMesh){Lt.setOptional(H,Q,"bindMatrix"),Lt.setOptional(H,Q,"bindMatrixInverse");const _n=Q.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Lt.setValue(H,"boneTexture",_n.boneTexture,L))}Q.isBatchedMesh&&(Lt.setOptional(H,Q,"batchingTexture"),Lt.setValue(H,"batchingTexture",Q._matricesTexture,L),Lt.setOptional(H,Q,"batchingIdTexture"),Lt.setValue(H,"batchingIdTexture",Q._indirectTexture,L),Lt.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Lt.setValue(H,"batchingColorTexture",Q._colorsTexture,L));const Ni=oe.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&st.update(Q,oe,un),(Kt||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,Lt.setValue(H,"receiveShadow",Q.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Hn.envMap.value=qe,Hn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Z.environment!==null&&(Hn.envMapIntensity.value=Z.environmentIntensity),Kt&&(Lt.setValue(H,"toneMappingExposure",A.toneMappingExposure),Qe.needsLights&&ao(Hn,vi),Re&&le.fog===!0&&Ne.refreshFogUniforms(Hn,Re),Ne.refreshMaterialUniforms(Hn,le,G,fe,S.state.transmissionRenderTarget[N.id]),Fl.upload(H,io(Qe),Hn,L)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Fl.upload(H,io(Qe),Hn,L),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Lt.setValue(H,"center",Q.center),Lt.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Lt.setValue(H,"normalMatrix",Q.normalMatrix),Lt.setValue(H,"modelMatrix",Q.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const _n=le.uniformsGroups;for(let Vn=0,En=_n.length;Vn<En;Vn++){const so=_n[Vn];$.update(so,un),$.bind(so,un)}}return un}function ao(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function Kl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(N,Z,oe){Fe.get(N.texture).__webglTexture=Z,Fe.get(N.depthTexture).__webglTexture=oe;const le=Fe.get(N);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=oe===void 0,le.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Z){const oe=Fe.get(N);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(N,Z=0,oe=0){B=N,F=Z,O=oe;let le=!0,Q=null,Re=!1,Ae=!1;if(N){const qe=Fe.get(N);if(qe.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(H.FRAMEBUFFER,null),le=!1;else if(qe.__webglFramebuffer===void 0)L.setupRenderTarget(N);else if(qe.__hasExternalTextures)L.rebindTextures(N,Fe.get(N.texture).__webglTexture,Fe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ke=N.depthTexture;if(qe.__boundDepthTexture!==Ke){if(Ke!==null&&Fe.has(Ke)&&(N.width!==Ke.image.width||N.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(N)}}const lt=N.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ae=!0);const dt=Fe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(dt[Z])?Q=dt[Z][oe]:Q=dt[Z],Re=!0):N.samples>0&&L.useMultisampledRTT(N)===!1?Q=Fe.get(N).__webglMultisampledFramebuffer:Array.isArray(dt)?Q=dt[oe]:Q=dt,z.copy(N.viewport),te.copy(N.scissor),J=N.scissorTest}else z.copy(E).multiplyScalar(G).floor(),te.copy(j).multiplyScalar(G).floor(),J=ve;if(Ge.bindFramebuffer(H.FRAMEBUFFER,Q)&&le&&Ge.drawBuffers(N,Q),Ge.viewport(z),Ge.scissor(te),Ge.setScissorTest(J),Re){const qe=Fe.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,qe.__webglTexture,oe)}else if(Ae){const qe=Fe.get(N.texture),lt=Z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.__webglTexture,oe||0,lt)}P=-1},this.readRenderTargetPixels=function(N,Z,oe,le,Q,Re,Ae){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Fe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ae!==void 0&&($e=$e[Ae]),$e){Ge.bindFramebuffer(H.FRAMEBUFFER,$e);try{const qe=N.texture,lt=qe.format,dt=qe.type;if(!et.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-le&&oe>=0&&oe<=N.height-Q&&H.readPixels(Z,oe,le,Q,ht.convert(lt),ht.convert(dt),Re)}finally{const qe=B!==null?Fe.get(B).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(N,Z,oe,le,Q,Re,Ae){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Fe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ae!==void 0&&($e=$e[Ae]),$e){const qe=N.texture,lt=qe.format,dt=qe.type;if(!et.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=N.width-le&&oe>=0&&oe<=N.height-Q){Ge.bindFramebuffer(H.FRAMEBUFFER,$e);const Ke=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),H.readPixels(Z,oe,le,Q,ht.convert(lt),ht.convert(dt),0);const Mt=B!==null?Fe.get(B).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,Mt);const Rt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await x_(H,Rt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.deleteBuffer(Ke),H.deleteSync(Rt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,Z=null,oe=0){N.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,N=arguments[1]);const le=Math.pow(2,-oe),Q=Math.floor(N.image.width*le),Re=Math.floor(N.image.height*le),Ae=Z!==null?Z.x:0,$e=Z!==null?Z.y:0;L.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,oe,0,0,Ae,$e,Q,Re),Ge.unbindTexture()},this.copyTextureToTexture=function(N,Z,oe=null,le=null,Q=0){N.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,N=arguments[1],Z=arguments[2],Q=arguments[3]||0,oe=null);let Re,Ae,$e,qe,lt,dt,Ke,Mt,Rt;const St=N.isCompressedTexture?N.mipmaps[Q]:N.image;oe!==null?(Re=oe.max.x-oe.min.x,Ae=oe.max.y-oe.min.y,$e=oe.isBox3?oe.max.z-oe.min.z:1,qe=oe.min.x,lt=oe.min.y,dt=oe.isBox3?oe.min.z:0):(Re=St.width,Ae=St.height,$e=St.depth||1,qe=0,lt=0,dt=0),le!==null?(Ke=le.x,Mt=le.y,Rt=le.z):(Ke=0,Mt=0,Rt=0);const cn=ht.convert(Z.format),mt=ht.convert(Z.type);let Qe;Z.isData3DTexture?(L.setTexture3D(Z,0),Qe=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(L.setTexture2DArray(Z,0),Qe=H.TEXTURE_2D_ARRAY):(L.setTexture2D(Z,0),Qe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const ei=H.getParameter(H.UNPACK_ROW_LENGTH),At=H.getParameter(H.UNPACK_IMAGE_HEIGHT),un=H.getParameter(H.UNPACK_SKIP_PIXELS),ti=H.getParameter(H.UNPACK_SKIP_ROWS),Kt=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,St.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,qe),H.pixelStorei(H.UNPACK_SKIP_ROWS,lt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,dt);const vi=N.isDataArrayTexture||N.isData3DTexture,Lt=Z.isDataArrayTexture||Z.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){const Hn=Fe.get(N),Ni=Fe.get(Z),_n=Fe.get(Hn.__renderTarget),Vn=Fe.get(Ni.__renderTarget);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let En=0;En<$e;En++)vi&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.get(N).__webglTexture,Q,dt+En),N.isDepthTexture?(Lt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.get(Z).__webglTexture,Q,Rt+En),H.blitFramebuffer(qe,lt,Re,Ae,Ke,Mt,Re,Ae,H.DEPTH_BUFFER_BIT,H.NEAREST)):Lt?H.copyTexSubImage3D(Qe,Q,Ke,Mt,Rt+En,qe,lt,Re,Ae):H.copyTexSubImage2D(Qe,Q,Ke,Mt,Rt+En,qe,lt,Re,Ae);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Lt?N.isDataTexture||N.isData3DTexture?H.texSubImage3D(Qe,Q,Ke,Mt,Rt,Re,Ae,$e,cn,mt,St.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Qe,Q,Ke,Mt,Rt,Re,Ae,$e,cn,St.data):H.texSubImage3D(Qe,Q,Ke,Mt,Rt,Re,Ae,$e,cn,mt,St):N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Q,Ke,Mt,Re,Ae,cn,mt,St.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Q,Ke,Mt,St.width,St.height,cn,St.data):H.texSubImage2D(H.TEXTURE_2D,Q,Ke,Mt,Re,Ae,cn,mt,St);H.pixelStorei(H.UNPACK_ROW_LENGTH,ei),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,At),H.pixelStorei(H.UNPACK_SKIP_PIXELS,un),H.pixelStorei(H.UNPACK_SKIP_ROWS,ti),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Kt),Q===0&&Z.generateMipmaps&&H.generateMipmap(Qe),Ge.unbindTexture()},this.copyTextureToTexture3D=function(N,Z,oe=null,le=null,Q=0){return N.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,le=arguments[1]||null,N=arguments[2],Z=arguments[3],Q=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Z,oe,le,Q)},this.initRenderTarget=function(N){Fe.get(N).__webglFramebuffer===void 0&&L.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?L.setTextureCube(N,0):N.isData3DTexture?L.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?L.setTexture2DArray(N,0):L.setTexture2D(N,0),Ge.unbindTexture()},this.resetState=function(){F=0,O=0,B=null,Ge.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}class Rb extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const x=r[o],y=r[o+1]-x,M=(u-x)/y;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),p=t||(u.isVector2?new at:new K);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new K,o=[],l=[],u=[],d=new K,p=new Ht;for(let M=0;M<=e;M++){const b=M/e;o[M]=this.getTangentAt(b,new K)}l[0]=new K,u[0]=new K;let m=Number.MAX_VALUE;const x=Math.abs(o[0].x),v=Math.abs(o[0].y),y=Math.abs(o[0].z);x<=m&&(m=x,r.set(1,0,0)),v<=m&&(m=v,r.set(0,1,0)),y<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),d.crossVectors(o[M-1],o[M]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(xn(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(p.makeRotationAxis(d,b))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(xn(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(M=-M);for(let b=1;b<=e;b++)l[b].applyMatrix4(p.makeRotationAxis(o[b],M*b)),u[b].crossVectors(o[b],l[b])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class r0 extends Zi{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new at){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),v=Math.sin(this.aRotation),y=p-this.aX,M=m-this.aY;p=y*x-M*v+this.aX,m=y*v+M*x+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nb extends r0{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function yh(){let a=0,e=0,t=0,r=0;function o(l,u,d,p){a=l,e=d,t=-3*l+3*u-2*d-p,r=2*l-2*u+d+p}return{initCatmullRom:function(l,u,d,p,m){o(u,d,m*(d-l),m*(p-u))},initNonuniformCatmullRom:function(l,u,d,p,m,x,v){let y=(u-l)/m-(d-l)/(m+x)+(d-u)/x,M=(d-u)/x-(p-u)/(x+v)+(p-d)/v;y*=x,M*=x,o(u,d,y,M)},calc:function(l){const u=l*l,d=u*l;return a+e*l+t*u+r*d}}}const Nl=new K,dd=new yh,hd=new yh,fd=new yh;class a0 extends Zi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new K){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,x;this.closed||d>0?m=o[(d-1)%l]:(Nl.subVectors(o[0],o[1]).add(o[0]),m=Nl);const v=o[d%l],y=o[(d+1)%l];if(this.closed||d+2<l?x=o[(d+2)%l]:(Nl.subVectors(o[l-1],o[l-2]).add(o[l-1]),x=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let b=Math.pow(m.distanceToSquared(v),M),w=Math.pow(v.distanceToSquared(y),M),_=Math.pow(y.distanceToSquared(x),M);w<1e-4&&(w=1),b<1e-4&&(b=w),_<1e-4&&(_=w),dd.initNonuniformCatmullRom(m.x,v.x,y.x,x.x,b,w,_),hd.initNonuniformCatmullRom(m.y,v.y,y.y,x.y,b,w,_),fd.initNonuniformCatmullRom(m.z,v.z,y.z,x.z,b,w,_)}else this.curveType==="catmullrom"&&(dd.initCatmullRom(m.x,v.x,y.x,x.x,this.tension),hd.initCatmullRom(m.y,v.y,y.y,x.y,this.tension),fd.initCatmullRom(m.z,v.z,y.z,x.z,this.tension));return r.set(dd.calc(p),hd.calc(p),fd.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ag(a,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=a*a,p=a*d;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*d+l*a+t}function Pb(a,e){const t=1-a;return t*t*e}function kb(a,e){return 2*(1-a)*a*e}function Db(a,e){return a*a*e}function Ws(a,e,t,r){return Pb(a,e)+kb(a,t)+Db(a,r)}function Lb(a,e){const t=1-a;return t*t*t*e}function Ib(a,e){const t=1-a;return 3*t*t*a*e}function Ub(a,e){return 3*(1-a)*a*a*e}function Fb(a,e){return a*a*a*e}function Xs(a,e,t,r,o){return Lb(a,e)+Ib(a,t)+Ub(a,r)+Fb(a,o)}class Ob extends Zi{constructor(e=new at,t=new at,r=new at,o=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new at){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Xs(e,o.x,l.x,u.x,d.x),Xs(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bb extends Zi{constructor(e=new K,t=new K,r=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new K){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Xs(e,o.x,l.x,u.x,d.x),Xs(e,o.y,l.y,u.y,d.y),Xs(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zb extends Zi{constructor(e=new at,t=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new at){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new at){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hb extends Zi{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vb extends Zi{constructor(e=new at,t=new at,r=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new at){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Ws(e,o.x,l.x,u.x),Ws(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s0 extends Zi{constructor(e=new K,t=new K,r=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new K){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Ws(e,o.x,l.x,u.x),Ws(e,o.y,l.y,u.y),Ws(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gb extends Zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new at){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,p=o[u===0?u:u-1],m=o[u],x=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return r.set(ag(d,p.x,m.x,x.x,v.x),ag(d,p.y,m.y,x.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new at().fromArray(o))}return this}}var jb=Object.freeze({__proto__:null,ArcCurve:Nb,CatmullRomCurve3:a0,CubicBezierCurve:Ob,CubicBezierCurve3:Bb,EllipseCurve:r0,LineCurve:zb,LineCurve3:Hb,QuadraticBezierCurve:Vb,QuadraticBezierCurve3:s0,SplineCurve:Gb});class Ei extends gi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],y=[],M=[];let b=0;const w=[],_=r/2;let S=0;I(),u===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(x),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(M,2));function I(){const A=new K,q=new K;let F=0;const O=(t-e)/r;for(let B=0;B<=l;B++){const P=[],C=B/l,z=C*(t-e)+e;for(let te=0;te<=o;te++){const J=te/o,ce=J*p+d,de=Math.sin(ce),ue=Math.cos(ce);q.x=z*de,q.y=-C*r+_,q.z=z*ue,v.push(q.x,q.y,q.z),A.set(de,O,ue).normalize(),y.push(A.x,A.y,A.z),M.push(J,1-C),P.push(b++)}w.push(P)}for(let B=0;B<o;B++)for(let P=0;P<l;P++){const C=w[P][B],z=w[P+1][B],te=w[P+1][B+1],J=w[P][B+1];(e>0||P!==0)&&(x.push(C,z,J),F+=3),(t>0||P!==l-1)&&(x.push(z,te,J),F+=3)}m.addGroup(S,F,0),S+=F}function k(A){const q=b,F=new at,O=new K;let B=0;const P=A===!0?e:t,C=A===!0?1:-1;for(let te=1;te<=o;te++)v.push(0,_*C,0),y.push(0,C,0),M.push(.5,.5),b++;const z=b;for(let te=0;te<=o;te++){const ce=te/o*p+d,de=Math.cos(ce),ue=Math.sin(ce);O.x=P*ue,O.y=_*C,O.z=P*de,v.push(O.x,O.y,O.z),y.push(0,C,0),F.x=de*.5+.5,F.y=ue*.5*C+.5,M.push(F.x,F.y),b++}for(let te=0;te<o;te++){const J=q+te,ce=z+te;A===!0?x.push(ce,ce+1,J):x.push(ce+1,ce,J),B+=3}m.addGroup(S,B,A===!0?1:2),S+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _h extends Ei{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new _h(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ts extends gi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const x=[],v=new K,y=new K,M=[],b=[],w=[],_=[];for(let S=0;S<=r;S++){const I=[],k=S/r;let A=0;S===0&&u===0?A=.5/t:S===r&&p===Math.PI&&(A=-.5/t);for(let q=0;q<=t;q++){const F=q/t;v.x=-e*Math.cos(o+F*l)*Math.sin(u+k*d),v.y=e*Math.cos(u+k*d),v.z=e*Math.sin(o+F*l)*Math.sin(u+k*d),b.push(v.x,v.y,v.z),y.copy(v).normalize(),w.push(y.x,y.y,y.z),_.push(F+A,1-k),I.push(m++)}x.push(I)}for(let S=0;S<r;S++)for(let I=0;I<t;I++){const k=x[S][I+1],A=x[S][I],q=x[S+1][I],F=x[S+1][I+1];(S!==0||u>0)&&M.push(k,A,F),(S!==r-1||p<Math.PI)&&M.push(A,q,F)}this.setIndex(M),this.setAttribute("position",new Jt(b,3)),this.setAttribute("normal",new Jt(w,3)),this.setAttribute("uv",new Jt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sh extends gi{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],p=[],m=[],x=new K,v=new K,y=new K;for(let M=0;M<=r;M++)for(let b=0;b<=o;b++){const w=b/o*l,_=M/r*Math.PI*2;v.x=(e+t*Math.cos(_))*Math.cos(w),v.y=(e+t*Math.cos(_))*Math.sin(w),v.z=t*Math.sin(_),d.push(v.x,v.y,v.z),x.x=e*Math.cos(w),x.y=e*Math.sin(w),y.subVectors(v,x).normalize(),p.push(y.x,y.y,y.z),m.push(b/o),m.push(M/r)}for(let M=1;M<=r;M++)for(let b=1;b<=o;b++){const w=(o+1)*M+b-1,_=(o+1)*(M-1)+b-1,S=(o+1)*(M-1)+b,I=(o+1)*M+b;u.push(w,_,I),u.push(_,S,I)}this.setIndex(u),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mh extends gi{constructor(e=new s0(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new K,p=new K,m=new at;let x=new K;const v=[],y=[],M=[],b=[];w(),this.setIndex(b),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(M,2));function w(){for(let k=0;k<t;k++)_(k);_(l===!1?t:0),I(),S()}function _(k){x=e.getPointAt(k/t,x);const A=u.normals[k],q=u.binormals[k];for(let F=0;F<=o;F++){const O=F/o*Math.PI*2,B=Math.sin(O),P=-Math.cos(O);p.x=P*A.x+B*q.x,p.y=P*A.y+B*q.y,p.z=P*A.z+B*q.z,p.normalize(),y.push(p.x,p.y,p.z),d.x=x.x+r*p.x,d.y=x.y+r*p.y,d.z=x.z+r*p.z,v.push(d.x,d.y,d.z)}}function S(){for(let k=1;k<=t;k++)for(let A=1;A<=o;A++){const q=(o+1)*(k-1)+(A-1),F=(o+1)*k+(A-1),O=(o+1)*k+A,B=(o+1)*(k-1)+A;b.push(q,F,B),b.push(F,O,B)}}function I(){for(let k=0;k<=t;k++)for(let A=0;A<=o;A++)m.x=k/t,m.y=A/o,M.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Mh(new jb[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class di extends eo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bg,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o0 extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const pd=new Ht,sg=new K,og=new K;class Wb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(sg),og.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(og),t.updateMatrixWorld(),pd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xb extends Wb{constructor(){super(new Qg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qb extends o0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new Xb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yb extends o0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $b{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lg(){return performance.now()}const cg=new Ht;class ug{constructor(e,t,r=0,o=1/0){this.ray=new jg(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new mh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cg),this}intersectObject(e,t=!0,r=[]){return ih(e,this,r,t),r.sort(dg),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)ih(e[o],this,r,t);return r.sort(dg),r}}function dg(a,e){return a.distance-e.distance}function ih(a,e,t,r){let o=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=a.children;for(let u=0,d=l.length;u<d;u++)ih(l[u],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);function Kb({plant:a,selectedHotspot:e,onSelectHotspot:t,wireframe:r=!1,isNightMode:o=!1,autoRotate:l=!0,batterySaver:u=!1}){const d=Ue.useRef(null),p=Ue.useRef(null),m=Ue.useRef(null),x=Ue.useRef(null),v=Ue.useRef(null),y=Ue.useRef(null),M=Ue.useRef(null),b=Ue.useRef(!1),w=Ue.useRef({x:0,y:0}),_=Ue.useRef({x:0,y:0}),S=Ue.useRef(new K(0,1.8,3.2)),[I,k]=Ue.useState(null);Ue.useEffect(()=>{var H,wt;if(!d.current)return;const C=d.current,z=C.clientWidth,te=C.clientHeight||420,J=new Rb;p.current=J;const ce=new Qn(45,z/te,.1,80);ce.position.set(0,1.8,3.2),x.current=ce;const de=new Cb({antialias:!u,alpha:!0,powerPreference:"default",precision:u?"mediump":"highp"});de.setSize(z,te),de.setPixelRatio(Math.min(window.devicePixelRatio,u?1:1.25)),de.shadowMap.enabled=!u,de.shadowMap.enabled&&(de.shadowMap.type=Ry),m.current=de,C.innerHTML="",C.appendChild(de.domElement);const ue=new Yb(o?1715746:16055287,o?.9:1.3);J.add(ue);const fe=new qb(o?8843180:16775917,o?1:1.6);fe.position.set(3,5,3),u||(fe.castShadow=!0,fe.shadow.mapSize.width=512,fe.shadow.mapSize.height=512),J.add(fe);const G=new Ei(1.3,1.5,.2,u?16:24),me=new di({color:o?1254938:14669771,roughness:.85}),D=new Bt(G,me);D.position.y=-.1,u||(D.receiveShadow=!0),J.add(D);const E=new Ei(.65,.45,.65,u?14:20),j=new di({color:11817737,roughness:.9}),ve=new Bt(E,j);ve.position.y=.32,J.add(ve);const Y=new Ei(.63,.63,.06,u?14:20),ne=new di({color:4007959,roughness:.95}),pe=new Bt(Y,ne);pe.position.y=.64,J.add(pe);const ie=new Wa;v.current=ie,J.add(ie);const ge=new Wa;y.current=ge,J.add(ge),Zb(((H=a==null?void 0:a.threeDConfig)==null?void 0:H.modelType)||"tulsi",ie,r,u),Qb(((wt=a==null?void 0:a.threeDConfig)==null?void 0:wt.hotspots)||[],ge);let be=new $b,Pe=!0;const Je=()=>{Pe=!document.hidden};document.addEventListener("visibilitychange",Je);const We=()=>{if(M.current=requestAnimationFrame(We),!Pe)return;const tt=be.getDelta(),et=be.getElapsedTime();l&&!b.current?(ie.rotation.y+=.3*tt,ge.rotation.y=ie.rotation.y):b.current||(ie.rotation.y+=_.current.y,ie.rotation.x+=_.current.x,ge.rotation.y=ie.rotation.y,ge.rotation.x=ie.rotation.x,_.current.x*=.92,_.current.y*=.92),ge.children.forEach((Ge,vt)=>{const Fe=1+Math.sin(et*3+vt*1.5)*.15;Ge.scale.set(Fe,Fe,Fe)}),ce.position.lerp(S.current,.05),ce.lookAt(0,.85,0),de.render(J,ce)};We();const ot=()=>{if(!d.current||!m.current||!x.current)return;const tt=d.current.clientWidth,et=d.current.clientHeight||420;x.current.aspect=tt/et,x.current.updateProjectionMatrix(),m.current.setSize(tt,et)};return window.addEventListener("resize",ot),()=>{document.removeEventListener("visibilitychange",Je),window.removeEventListener("resize",ot),M.current&&cancelAnimationFrame(M.current),m.current&&m.current.domElement&&(C.innerHTML="",m.current.dispose())}},[a==null?void 0:a.id,o,u]),Ue.useEffect(()=>{v.current&&v.current.traverse(C=>{C.isMesh&&C.material&&(C.material.wireframe=r)})},[r]),Ue.useEffect(()=>{var z;if(!e||!((z=a==null?void 0:a.threeDConfig)!=null&&z.hotspots)){S.current.set(0,1.8,3.2);return}const C=a.threeDConfig.hotspots.find(te=>te.id===e.id);if(C&&C.pos){const[te,J,ce]=C.pos;S.current.set(te*.8,J+.4,ce+1.8)}},[e,a]);const A=C=>{b.current=!0,w.current={x:C.clientX,y:C.clientY}},q=C=>{if(b.current){const z=C.clientX-w.current.x,te=C.clientY-w.current.y;w.current={x:C.clientX,y:C.clientY},v.current&&y.current&&(v.current.rotation.y+=z*.008,v.current.rotation.x=Math.max(-.4,Math.min(.6,v.current.rotation.x+te*.005)),y.current.rotation.y=v.current.rotation.y,y.current.rotation.x=v.current.rotation.x,_.current={x:te*.002,y:z*.004});return}B(C.clientX,C.clientY)},F=()=>{b.current=!1},O=C=>{var ue;const z=d.current.getBoundingClientRect(),te=(C.clientX-z.left)/z.width*2-1,J=-((C.clientY-z.top)/z.height)*2+1,ce=new ug;if(ce.setFromCamera(new at(te,J),x.current),!y.current)return;const de=ce.intersectObjects(y.current.children,!0);if(de.length>0){const G=(ue=de[0].object.userData)==null?void 0:ue.hotspot;G&&t&&t(G)}},B=(C,z)=>{var fe;if(!d.current||!x.current||!y.current)return;const te=d.current.getBoundingClientRect(),J=(C-te.left)/te.width*2-1,ce=-((z-te.top)/te.height)*2+1,de=new ug;de.setFromCamera(new at(J,ce),x.current);const ue=de.intersectObjects(y.current.children,!0);if(ue.length>0){const G=(fe=ue[0].object.userData)==null?void 0:fe.hotspot;k(G),d.current.style.cursor="pointer"}else k(null),d.current.style.cursor=b.current?"grabbing":"grab"},P=C=>{if(C.preventDefault(),!x.current)return;const z=C.deltaY*.002,te=Math.max(1.8,Math.min(4.8,S.current.z+z));S.current.z=te};return f.jsxs("div",{className:"relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden bg-gradient-to-b from-emerald-950/20 via-emerald-900/10 to-transparent border border-emerald-500/20 shadow-inner select-none",children:[f.jsx("div",{ref:d,className:"w-full h-full cursor-grab active:cursor-grabbing",onMouseDown:A,onMouseMove:q,onMouseUp:F,onMouseLeave:F,onClick:O,onWheel:P}),I&&f.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass-panel border border-emerald-400/50 shadow-xl pointer-events-none flex items-center gap-2",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-ping"}),f.jsxs("span",{className:"text-xs font-semibold text-emerald-800 dark:text-emerald-300",children:["Inspect: ",I.name]})]}),f.jsxs("div",{className:"absolute bottom-4 left-4 pointer-events-none glass-panel px-3 py-1 rounded-lg border border-emerald-500/30 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),"Three.js WebGL • ",a==null?void 0:a.scientificName]})]})}function Zb(a,e,t,r){e.clear();const o=r?8:12,l=new di({color:6045747,roughness:.8,wireframe:t}),u=new di({color:2278750,roughness:.5,side:hi,wireframe:t}),d=new di({color:1409085,roughness:.4,side:hi,wireframe:t}),p=new di({color:11032055,roughness:.6,wireframe:t});if(new di({color:16347926,roughness:.3,wireframe:t}),a==="tulsi"){const m=new a0([new K(0,.65,0),new K(.04,1.1,.02),new K(-.02,1.6,0),new K(0,2.1,0)]),x=new Mh(m,r?10:16,.035,6,!1),v=new Bt(x,l);e.add(v);const y=new ts(.18,o,6);y.scale(1.4,.2,.8);const M=r?5:7;for(let b=0;b<M;b++){const w=.85+b*.18,_=b*Math.PI/3;[-1,1].forEach(S=>{const I=new Bt(y,b%2===0?u:d);I.position.set(Math.cos(_)*.24*S,w,Math.sin(_)*.24*S),I.rotation.set(.2*S,_,.3*S),e.add(I)})}for(let b=0;b<3;b++){const w=new Ei(.02,.04,.3,6),_=new Bt(w,p);_.position.set((b-1)*.07,2.15,(b-1)*.03),_.rotation.z=(b-1)*.15,e.add(_)}}else if(a==="neem"){const m=new Ei(.05,.08,1.4,8),x=new Bt(m,l);x.position.y=1.35,e.add(x);const v=new rs(.45,.02,.1),y=r?8:12;for(let M=0;M<y;M++){const b=.95+M*.1,w=M*Math.PI/4,_=new Bt(v,u);_.position.set(Math.cos(w)*.32,b,Math.sin(w)*.32),_.rotation.set(.1,w,.2),e.add(_)}}else if(a==="aloe"){const m=new _h(.11,1.2,6);m.scale(1.2,1,.4);const x=new di({color:1483594,roughness:.3,wireframe:t}),v=r?10:14;for(let y=0;y<v;y++){const M=Math.floor(y/5),b=y*(Math.PI*2)/5+M*.4,w=.35+M*.25,_=new Bt(m,x);_.position.set(Math.cos(b)*(.14+M*.09),.75+M*.09,Math.sin(b)*(.14+M*.09)),_.rotation.set(Math.sin(b)*w,b,Math.cos(b)*w),e.add(_)}}else if(a==="ashwagandha"){const m=new Ei(.04,.06,1.1,8),x=new Bt(m,l);x.position.y=1.15,e.add(x);const v=new ts(.18,o,6);v.scale(1.3,.15,.9);for(let y=0;y<7;y++){const M=y*Math.PI/3,b=new Bt(v,u);b.position.set(Math.cos(M)*.28,.85+y*.14,Math.sin(M)*.28),b.rotation.set(.2,M,.2),e.add(b)}}else{const m=new Sh(.22,.08,6,12),x=new di({color:14251782,roughness:.9,wireframe:t}),v=new Bt(m,x);v.position.set(0,.68,0),v.rotation.x=Math.PI/2,e.add(v);const y=new Ei(.03,.045,1,6),M=new Bt(y,l);M.position.y=1.2,e.add(M);const b=new to(.3,.7,2,4);for(let w=0;w<4;w++){const _=w*Math.PI*2/4,S=new Bt(b,u);S.position.set(Math.cos(_)*.18,1.15+w*.16,Math.sin(_)*.18),S.rotation.set(.3,_,.2),e.add(S)}}}function Qb(a,e){e.clear(),a.forEach(t=>{const[r,o,l]=t.pos||[0,1,0],u=new ts(.06,12,12),d=new di({color:2278750,emissive:1483594,emissiveIntensity:.85,roughness:.2}),p=new Bt(u,d);p.position.set(r,o,l),p.userData={hotspot:t};const m=new ts(.09,10,10),x=new gh({color:8843180,transparent:!0,opacity:.3}),v=new Bt(m,x);p.add(v),e.add(p)})}function Jb({initialPlant:a,onOpenDetails:e}){var A,q;const{t,getPlantCommonName:r}=Jn(),{mark3DViewed:o,addXP:l}=Ki(),u=Zn.filter(F=>F.has3DModel),[d,p]=Ue.useState(()=>a&&a.has3DModel?a:u[0]),[m,x]=Ue.useState(null),[v,y]=Ue.useState(!1),[M,b]=Ue.useState(!1),[w,_]=Ue.useState(!0),[S,I]=Ue.useState(!1);Ue.useEffect(()=>{a&&a.has3DModel&&p(a)},[a]),Ue.useEffect(()=>{d&&(o(d.id),x(null))},[d==null?void 0:d.id]);const k=F=>{x(F),l(10,"Inspected anatomical node")};return f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[f.jsxs("div",{className:"space-y-1",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800",children:[f.jsx(na,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Three.js WebGL Studio"})]}),f.jsx("h2",{className:"font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white",children:t.threeD.title}),f.jsx("p",{className:"text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl",children:t.threeD.subtitle})]}),f.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1",children:u.map(F=>f.jsx("button",{onClick:()=>p(F),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${d.id===F.id?"bg-emerald-600 text-white shadow-md":"glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"}`,children:r(F)},F.id))})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[f.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[f.jsxs("div",{className:"relative",children:[f.jsx(Kb,{plant:d,selectedHotspot:m,onSelectHotspot:k,wireframe:v,isNightMode:M,autoRotate:w,batterySaver:S}),f.jsxs("div",{className:"absolute top-4 right-4 flex items-center gap-2 z-10",children:[f.jsx("button",{onClick:()=>I(!S),title:"Toggle Performance / Low Power Mode",className:`p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${S?"bg-amber-600 text-white border-amber-500":"bg-black/40 text-white border-white/20 hover:bg-black/60"}`,children:f.jsx(wy,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>_(!w),title:"Toggle Rotation",className:`p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${w?"bg-emerald-600 text-white border-emerald-500":"bg-black/40 text-white border-white/20 hover:bg-black/60"}`,children:f.jsx(sh,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>y(!v),title:t.threeD.wireframe,className:`p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${v?"bg-emerald-600 text-white border-emerald-500":"bg-black/40 text-white border-white/20 hover:bg-black/60"}`,children:f.jsx(_g,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>b(!M),title:t.threeD.dayNight,className:"p-2 rounded-xl bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-black/60 transition-all shadow-md",children:M?f.jsx(zl,{className:"w-3.5 h-3.5 text-amber-400"}):f.jsx(md,{className:"w-3.5 h-3.5 text-slate-200"})})]})]}),f.jsxs("div",{className:"flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400 px-1",children:[f.jsx("span",{children:t.threeD.rotateHint}),f.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-bold",children:"+10 XP per inspection"})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"rounded-3xl p-5 sm:p-6 glass-panel border border-emerald-500/30 shadow-lg space-y-4",children:[f.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/10 pb-3",children:[f.jsxs("h3",{className:"font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2",children:[f.jsx(ia,{className:"w-4 h-4 text-emerald-600"}),t.threeD.anatomyDetails]}),m&&f.jsx("button",{onClick:()=>x(null),className:"text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline",children:"Clear"})]}),m?f.jsxs("div",{className:"space-y-4 animate-in fade-in",children:[f.jsxs("div",{className:"p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-1.5",children:[f.jsx("div",{className:"text-emerald-800 dark:text-emerald-300 font-heading font-extrabold text-base",children:m.name}),f.jsx("p",{className:"text-xs text-slate-700 dark:text-slate-200 leading-relaxed",children:m.description})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider",children:"Bioactive Phytochemicals"}),f.jsx("div",{className:"flex flex-wrap gap-1.5",children:d.phytochemicals.map(F=>f.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-semibold glass-panel border border-teal-500/30 text-teal-800 dark:text-teal-300",children:F},F))})]})]}):f.jsxs("div",{className:"text-center py-6 space-y-3",children:[f.jsx("div",{className:"w-10 h-10 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600",children:f.jsx(Lv,{className:"w-5 h-5"})}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed px-1",children:t.threeD.clickToInspect}),f.jsx("div",{className:"flex flex-wrap gap-1.5 justify-center pt-1",children:(q=(A=d==null?void 0:d.threeDConfig)==null?void 0:A.hotspots)==null?void 0:q.map(F=>f.jsx("button",{onClick:()=>k(F),className:"px-2.5 py-1 rounded-xl text-xs font-semibold glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors",children:F.name},F.id))})]}),f.jsx("div",{className:"pt-2 border-t border-emerald-500/10",children:f.jsxs("button",{onClick:()=>e(d),className:"w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-sm",children:[f.jsx("span",{children:"View Full Botanical Record"}),f.jsx($s,{className:"w-3.5 h-3.5"})]})})]}),f.jsxs("div",{className:"p-4 rounded-2xl glass-panel border border-amber-500/30 space-y-1.5",children:[f.jsx("div",{className:"font-heading font-bold text-xs text-amber-900 dark:text-amber-300",children:"Traditional Significance"}),f.jsx("p",{className:"text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed",children:d.traditionalSignificance})]})]})]})]})}const hg=[{id:"digestive-health",title:"The Digestive Agni Trail",subtitle:"Gut Health, Metabolic Fire & Bloating Relief",duration:"6 mins",plantIds:["ginger","tulsi","peppermint","turmeric","aloe-vera"],themeColor:"from-amber-500 to-emerald-600",description:"Explore classical herbs dedicated to rekindling digestive Agni, calming acid reflux, expelling gas, and soothing intestinal inflammation.",steps:[{plantId:"ginger",heading:"Step 1: Sparking the Digestive Fire with Ginger",narration:"We begin our journey with Ginger, known as Vishwabheshaja (The Universal Remedy). In Ayurveda, chewing a slice of fresh ginger with rock salt 10 minutes before meals stimulates digestive enzymes and awakens a sluggish gut."},{plantId:"tulsi",heading:"Step 2: Calming Spasms & Gut Tension with Tulsi",narration:"Next we arrive at Holy Basil. Beyond its respiratory benefits, Tulsi soothes nervous stomach butterflies, supports beneficial microbiome flora, and eliminates metabolic Ama toxins."},{plantId:"peppermint",heading:"Step 3: Cooling Intestinal Cramps with Pudina",narration:"Meet Pudina (Peppermint), rich in volatile menthol. It gently relaxes the smooth muscles of the digestive tract, providing rapid relief for irritable bowel symptoms and trapped gas."},{plantId:"aloe-vera",heading:"Step 4: Mucosal Soothing & Repair with Aloe Gel",narration:"We conclude at Aloe Vera. Its cooling mucilage coats inflamed gastric linings, naturally neutralizing excess hydrochloric acid and healing stomach ulcers."}]},{id:"immunity-rasayana",title:"Rasayana & Longevity Trail",subtitle:"Immunity, Adaptogens & Vital Ojas",duration:"8 mins",plantIds:["tulsi","giloy","ashwagandha","amla","turmeric"],themeColor:"from-emerald-500 to-teal-700",description:"Walk through India's greatest Rasayana herbs that elevate protective white blood cells, modulate immune response, and nourish vital Ojas.",steps:[{plantId:"giloy",heading:"Step 1: The Divine Shield of Giloy (Amrita)",narration:"We begin with Giloy, the nectar vine. Celebrated for its unique ability to balance all three doshas simultaneously, it cleanses blood and supercharges macrophage response."},{plantId:"ashwagandha",heading:"Step 2: Rebuilding Deep Resilience with Ashwagandha",narration:"Ashwagandha provides the stamina and calm required for immune vitality by balancing stress cortisol and restoring deep recuperative sleep cycles."},{plantId:"amla",heading:"Step 3: The Vitamin C Reservoir of Amla",narration:"Indian Gooseberry delivers thermostable Vitamin C and ellagitannins that nourish all seven bodily tissues (Sapta Dhatus) and reverse cellular oxidation."},{plantId:"turmeric",heading:"Step 4: Golden Immunity of Haridra",narration:"Turmeric with its active curcumin modulates inflammatory pathways, fortifying barrier immunity from internal organs to skin."}]},{id:"skin-radiance",title:"Varnya: Skin Glow & Healing Walk",subtitle:"Acne Defense, Wound Healing & Youthful Radiance",duration:"5 mins",plantIds:["neem","aloe-vera","turmeric","moringa"],themeColor:"from-teal-500 to-lime-600",description:"Discover nature's dermatological pharmacy that cleanses blood, clears blemishes, accelerates tissue collagen synthesis, and cools inflammation.",steps:[{plantId:"neem",heading:"Step 1: Deep Blood Purifying with Neem",narration:"Neem is the cornerstone of Ayurvedic skin health. Its bitter properties clear excess Pitta and toxic microbes from the micro-capillaries of the skin."},{plantId:"aloe-vera",heading:"Step 2: Hydration & Cell Renewal with Aloe Vera",narration:"Kumari gel provides deep cellular hydration, boosts fibroblast collagen generation, and soothes sunburns and acne inflammation."},{plantId:"turmeric",heading:"Step 3: Golden Complexion Enhancer (Varnya)",narration:"Haridra has been applied as bridal Ubtan for millennia to lighten blemishes, even out skin pigmentation, and heal minor wounds."}]}];function eE({onSelectPlant:a}){const{t:e,getPlantCommonName:t}=Jn(),{addXP:r}=Ki(),[o,l]=Ue.useState(hg[0]),[u,d]=Ue.useState(0),[p,m]=Ue.useState(!1),x=o.steps[u],v=Zn.find(w=>w.id===(x==null?void 0:x.plantId)),y=()=>{var w;p&&((w=window.speechSynthesis)==null||w.cancel()),m(!1),u<o.steps.length-1?d(_=>_+1):(r(50,"Completed Virtual Garden Tour"),alert(`Tour completed! You earned 50 XP for completing "${o.title}".`))},M=()=>{var w;p&&((w=window.speechSynthesis)==null||w.cancel()),m(!1),u>0&&d(_=>_-1)},b=()=>{if(!("speechSynthesis"in window))return;if(p){window.speechSynthesis.cancel(),m(!1);return}window.speechSynthesis.cancel();const w=new SpeechSynthesisUtterance(`${x.heading}. ${x.narration}`);w.rate=.95,w.onend=()=>m(!1),w.onerror=()=>m(!1),window.speechSynthesis.speak(w),m(!0)};return f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold border border-teal-300 dark:border-teal-800",children:[f.jsx(Mg,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Curated Herbal Walkthroughs"})]}),f.jsx("h2",{className:"font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white",children:"Guided Virtual Herbal Trails"}),f.jsx("p",{className:"text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl",children:"Follow themed educational trails curated by AYUSH specialists to explore targeted botanical remedies for digestion, immunity, and skin health."})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:hg.map(w=>{const _=o.id===w.id;return f.jsxs("div",{onClick:()=>{var S;l(w),d(0),p&&((S=window.speechSynthesis)==null||S.cancel()),m(!1)},className:`cursor-pointer p-4 sm:p-5 rounded-3xl transition-all ${_?"glass-panel border-2 border-emerald-500 shadow-lg scale-[1.01]":"glass-panel border border-emerald-500/20 hover:border-emerald-500/60 shadow-sm"}`,children:[f.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-slate-500 mb-2",children:[f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx(Tv,{className:"w-3.5 h-3.5 text-emerald-600"}),w.duration]}),f.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px]",children:[w.steps.length," stops"]})]}),f.jsx("h3",{className:"font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white",children:w.title}),f.jsx("p",{className:"text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-0.5",children:w.subtitle}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2",children:w.description})]},w.id)})}),f.jsxs("div",{className:"rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 p-6 md:p-8 shadow-xl space-y-6",children:[f.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-slate-500",children:[f.jsx("span",{children:o.title}),f.jsxs("span",{className:"text-emerald-600 dark:text-emerald-400",children:["Stop ",u+1," of ",o.steps.length]})]}),f.jsx("div",{className:"w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden",children:f.jsx("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-300",style:{width:`${(u+1)/o.steps.length*100}%`}})}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-center",children:[v&&f.jsxs("div",{className:"relative rounded-3xl overflow-hidden h-64 sm:h-72 shadow-lg border border-emerald-500/20 group",children:[f.jsx("img",{src:v.image,alt:v.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"}),f.jsxs("div",{className:"absolute bottom-4 left-4 right-4 text-white",children:[f.jsx("div",{className:"text-[10px] font-bold text-emerald-300 uppercase tracking-wider",children:"Featured Trail Herb"}),f.jsx("h4",{className:"font-heading font-extrabold text-xl sm:text-2xl",children:t(v)}),f.jsx("p",{className:"text-xs italic text-slate-200",children:v.scientificName})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"space-y-1.5",children:[f.jsx("h3",{className:"font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white",children:x.heading}),f.jsx("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed",children:x.narration})]}),f.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 pt-1",children:[f.jsxs("button",{onClick:b,className:`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold shadow-sm transition-all ${p?"bg-amber-500 text-white animate-pulse":"bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200"}`,children:[p?f.jsx(Eg,{className:"w-3.5 h-3.5"}):f.jsx(bg,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:p?"Pause Audio":"Listen Audio"})]}),v&&f.jsx("button",{onClick:()=>a(v),className:"px-3.5 py-2 rounded-xl glass-panel border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors",children:"View Details"})]}),f.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-emerald-500/20",children:[f.jsxs("button",{onClick:M,disabled:u===0,className:"flex items-center gap-1 px-3.5 py-2 rounded-xl glass-panel text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-50 dark:hover:bg-emerald-950/40",children:[f.jsx(hv,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Previous"})]}),f.jsxs("button",{onClick:y,className:"flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-sm",children:[f.jsx("span",{children:u===o.steps.length-1?"Finish Tour":"Next Stop"}),f.jsx($s,{className:"w-3.5 h-3.5"})]})]})]})]})]})]})}const ji=[{id:"q1",category:"Plant Identification & AYUSH",question:{en:"Which revered medicinal plant is traditionally referred to as 'The Queen of Herbs' and 'The Incomparable One' in Ayurveda?",hi:"आयुर्वेद में किस पूजनीय औषधीय पौधे को 'जड़ी-बूटियों की रानी' और 'तुलना-रहित' कहा जाता है?",ta:"ஆயுர்வேதத்தில் 'மூலிகைகளின் அரசி' என்று பாரம்பரியமாக அழைக்கப்படும் புனித தாவரம் எது?",bn:"আয়ুর্বেদে কোন পবিত্র ঔষধি গাছটিকে 'ভেষজের রানী' হিসেবে উল্লেখ করা হয়?"},options:[{text:{en:"Tulsi (Holy Basil)",hi:"तुलसी (Tulsi)",ta:"துளசி (Tulsi)",bn:"তুলসী (Tulsi)"},isCorrect:!0},{text:{en:"Neem (Indian Lilac)",hi:"नीम (Neem)",ta:"வேம்பு (Neem)",bn:"নিম (Neem)"},isCorrect:!1},{text:{en:"Aloe Vera (Ghritkumari)",hi:"घृतकुमारी (Aloe Vera)",ta:"கற்றாழை (Aloe)",bn:"ঘৃতকুমারী (Aloe)"},isCorrect:!1},{text:{en:"Ashwagandha",hi:"अश्वगंधा (Ashwagandha)",ta:"அமுக்கிரா (Ashwagandha)",bn:"অশ্বগন্ধা (Ashwagandha)"},isCorrect:!1}],explanation:{en:"Tulsi (Ocimum tenuiflorum) is revered across classical Ayurveda texts as the 'Queen of Herbs' and an unparalleled adaptogen for immunity and respiratory health.",hi:"तुलसी (Ocimum tenuiflorum) को शास्त्रीय ग्रंथों में जड़ी-बूटियों की रानी और रोग प्रतिरोधक क्षमता का उत्कृष्ट रसायन माना गया है।",ta:"துளசி அதன் தனித்துவமான நோய் எதிர்ப்பு சக்தி மற்றும் சுவாச குணங்களுக்காக மூலிகைகளின் அரசியாக போற்றப்படுகிறது.",bn:"তুলসী তার অনন্য রোগ প্রতিরোধ ক্ষমতা এবং শ্বাসযন্ত্রের সুরক্ষার জন্য ভেষজের রানী হিসেবে পরিচিত।"}},{id:"q2",category:"Active Phytochemicals",question:{en:"What is the primary active golden polyphenol found in Turmeric (Curcuma longa) responsible for its potent anti-inflammatory effects?",hi:"हल्दी (Curcuma longa) में पाया जाने वाला प्राथमिक सक्रिय पॉलीफेनोल कौन सा है जो इसके सूजन-रोधी प्रभावों के लिए जिम्मेदार है?",ta:"மஞ்சளில் உள்ள சக்திவாய்ந்த வீக்க எதிர்ப்பு பாலிபினால் எது?",bn:"হলুদের মধ্যে থাকা প্রধান সক্রিয় পলিফেনল কোনটি যা এর প্রদাহ-বিরোধী গুণের জন্য দায়ী?"},options:[{text:{en:"Curcumin",hi:"करक्यूमिन (Curcumin)",ta:"குர்குமின் (Curcumin)",bn:"কারকিউমিন (Curcumin)"},isCorrect:!0},{text:{en:"Azadirachtin",hi:"एज़ाडिराक्टिन (Azadirachtin)",ta:"அசாடிராக்டின்",bn:"আজাদির্যাকটিন"},isCorrect:!1},{text:{en:"Withanolide A",hi:"विथानोलाइड ए (Withanolide A)",ta:"விதனாலாய்டு",bn:"উইথানোলাইড"},isCorrect:!1},{text:{en:"Eugenol",hi:"यूजेनॉल (Eugenol)",ta:"யூஜெனால்",bn:"ইউজেনল"},isCorrect:!1}],explanation:{en:"Curcumin is the primary bioactive curcuminoid compound in turmeric rhizomes celebrated globally for antioxidant and anti-inflammatory action.",hi:"करक्यूमिन हल्दी का मुख्य बायोएक्टिव घटक है जो सूजन और ऑक्सीडेटिव स्ट्रेस को कम करता है।",ta:"குர்குமின் மஞ்சளில் காணப்படும் முதன்மை வேதிப்பொருளாகும், இது சக்திவாய்ந்த அழற்சி எதிர்ப்பு பண்புகளைக் கொண்டுள்ளது.",bn:"কারকিউমিন হল হলুদের প্রধান জৈব উপাদান যা প্রদাহ দূর করতে সহায়ক।"}},{id:"q3",category:"AYUSH Philosophy",question:{en:"Which AYUSH system is built upon the core philosophy of 'Similia Similibus Curentur' (Like Cures Like)?",hi:"कौन सी आयुष चिकित्सा प्रणाली 'सिमिलिया सिमिलिबस क्युरेंटूर' (समः समं शमयति) के सिद्धांत पर आधारित है?",ta:"'ஒத்தவை ஒத்தவற்றை குணப்படுத்தும்' என்ற கொள்கையின் அடிப்படையில் அமைந்த ஆயுஷ் முறை எது?",bn:"কোন আয়ুষ চিকিৎসা ব্যবস্থা 'লাইক কিউরস লাইক' নীতির ওপর প্রতিষ্ঠিত?"},options:[{text:{en:"Homeopathy",hi:"होम्योपैथी (Homeopathy)",ta:"ஹோமியோபதி (Homeopathy)",bn:"হোমিওপ্যাথি (Homeopathy)"},isCorrect:!0},{text:{en:"Ayurveda",hi:"आयुर्वेद (Ayurveda)",ta:"ஆயுர்வேதம் (Ayurveda)",bn:"আয়ুর্বেদ (Ayurveda)"},isCorrect:!1},{text:{en:"Unani",hi:"यूनानी (Unani)",ta:"யுனானி (Unani)",bn:"ইউনানি (Unani)"},isCorrect:!1},{text:{en:"Siddha",hi:"सिद्ध (Siddha)",ta:"சித்தா (Siddha)",bn:"সিদ্ধ (Siddha)"},isCorrect:!1}],explanation:{en:"Homeopathy, developed by Dr. Samuel Hahnemann, operates on the Law of Similars—using micro-potencies of natural botanicals to cure matched symptom profiles.",hi:"होम्योपैथी चिकित्सा प्रणाली डॉ सैमुअल हैनीमैन द्वारा स्थापित 'समरूपता के नियम' पर आधारित है।",ta:"ஹோமியோபதி முறை சாமுவேல் ஹானிமன் அவர்களால் உருவாக்கப்பட்ட ஒத்தவை விதி அடிப்படையில் இயங்குகிறது.",bn:"হোমিওপ্যাথি চিকিৎসা ব্যবস্থা ড. স্যামুয়েল হ্যানিম্যান কর্তৃক উদ্ভাবিত সাদৃশ্য নীতির ওপর প্রতিষ্ঠিত।"}},{id:"q4",category:"Plant Anatomy & Parts Used",question:{en:"Which anatomical part of Ashwagandha (Withania somnifera) is primarily dried, ground, and formulated for strength and vitality?",hi:"अश्वगंधा (Withania somnifera) के किस पौधे के हिस्से का उपयोग मुख्य रूप से सुखाकर शक्ति और जीवन शक्ति के लिए किया जाता है?",ta:"அசுவகந்தா தாவரத்தில் வலிமை மற்றும் புத்துணர்ச்சிக்காக முதன்மையாகப் பயன்படுத்தப்படும் பகுதி எது?",bn:"অশ্বগন্ধা উদ্ভিদের কোন অংশটি মূলত শুকিয়ে শক্তি ও সতেজতার জন্য ব্যবহার করা হয়?"},options:[{text:{en:"Roots (Moola)",hi:"जड़ें (Roots / मूल)",ta:"வேர்கள் (Roots)",bn:"মূল / শিকড় (Roots)"},isCorrect:!0},{text:{en:"Flowers (Pushpa)",hi:"फूल (Flowers)",ta:"மலர்கள் (Flowers)",bn:"ফুল (Flowers)"},isCorrect:!1},{text:{en:"Seeds (Beeja)",hi:"बीज (Seeds)",ta:"விதைகள் (Seeds)",bn:"বীজ (Seeds)"},isCorrect:!1},{text:{en:"Bark (Twak)",hi:"छाल (Bark)",ta:"பட்டை (Bark)",bn:"বাকল (Bark)"},isCorrect:!1}],explanation:{en:"The fleshy roots of Ashwagandha are concentrated with withanolides and adaptogenic saponins, traditionally ground into Churna.",hi:"अश्वगंधा की जड़ों में विथानोलाइड्स प्रचुर मात्रा में होते हैं, जो तनाव को कम करके शारीरिक बल प्रदान करते हैं।",ta:"அசுவகந்தாவின் வேர்களில் தான் அதிக மருத்துவ குணங்கள் கொண்ட விதனாலாய்டுகள் நிறைந்துள்ளன.",bn:"অশ্বগন্ধার মূলে প্রচুর পরিমাণে উইথানোলাইড থাকে যা শারীরিক বল বৃদ্ধি করে।"}},{id:"q5",category:"Traditional Formulations",question:{en:"Which famous botanical triad of herbs forms the classical Ayurvedic formulation 'Triphala'?",hi:"शास्त्रीय आयुर्वेदिक योग 'त्रिफला' किन तीन औषधीय फलों से मिलकर बनता है?",ta:"புகழ்பெற்ற பாரம்பரிய 'திரிபலா' சூரணத்தை உருவாக்கும் மூன்று மூலிகை பழங்கள் எவை?",bn:"বিখ্যাত আয়ুর্বেদিক 'ত্রিফলা' কোন তিনটি ফল নিয়ে গঠিত?"},options:[{text:{en:"Amalaki, Haritaki, Bibhitaki",hi:"आंवला, हरड़, बहेड़ा",ta:"நெல்லிக்காய், கடுக்காய், தான்றிக்காய்",bn:"আমলকী, হরিতকী, বহেরা"},isCorrect:!0},{text:{en:"Tulsi, Neem, Giloy",hi:"तुलसी, नीम, गिलोय",ta:"துளசி, வேம்பு, சீந்தில்",bn:"তুলসী, নিম, গুলঞ্চ"},isCorrect:!1},{text:{en:"Ginger, Black Pepper, Pippali",hi:"सोंठ, काली मिर्च, पिप्पली (त्रिकटु)",ta:"சுக்கு, மிளகு, திப்பிலி",bn:"শুঁঠ, গোলমরিচ, পিপুল"},isCorrect:!1},{text:{en:"Ashwagandha, Shatavari, Brahmi",hi:"अश्वगंधा, शतावरी, ब्राह्मी",ta:"அசுவகந்தா, தண்ணீர்விட்டான், பிராமி",bn:"অশ্বগন্ধা, শতমূলী, ব্রাহ্মী"},isCorrect:!1}],explanation:{en:"Triphala (Three Fruits) combines Amalaki (Amla), Haritaki (Harad), and Bibhitaki (Baheda)—serving as the pinnacle daily bowel tonic and antioxidant in Ayurveda.",hi:"त्रिफला तीन फलों (आंवला, हरड़ और बहेड़ा) का अद्भुत मिश्रण है जो पाचन और शरीर शुद्धि के लिए सर्वोत्तम माना जाता है।",ta:"திரிபலா என்பது நெல்லிக்காய், கடுக்காய் மற்றும் தான்றிக்காய் ஆகியவற்றின் கலவையாகும்.",bn:"ত্রিফলা হল আমলকী, হরিতকী ও বহেরার সংমিশ্রণ যা হজম ও দেহ শুদ্ধির জন্য শ্রেষ্ঠ।"}},{id:"q6",category:"Plant Identification",question:{en:"Which plant is known as 'Amrita' (Nectar of Immortality) and forms the primary ingredient in Samsamani Vati for immunity and fevers?",hi:"किस पौधे को 'अमृता' (अमरता का अमृत) कहा जाता है और यह रोग प्रतिरोधक क्षमता के लिए संशमनी वटी का मुख्य घटक है?",ta:"'அமிர்தா' என்று அழைக்கப்படும் மற்றும் காய்ச்சலுக்கான முதன்மை மூலிகைக் கொடி எது?",bn:"কোন গাছটিকে 'অমৃতা' বলা হয় এবং এটি জ্বর নিরাময়ে প্রধান উপাদান?"},options:[{text:{en:"Giloy (Guduchi)",hi:"गिलोय (Guduchi)",ta:"சீந்தில் கொடி (Giloy)",bn:"গুলঞ্চ (Giloy)"},isCorrect:!0},{text:{en:"Neem",hi:"नीम",ta:"வேம்பு",bn:"নিম"},isCorrect:!1},{text:{en:"Aloe Vera",hi:"घृतकुमारी",ta:"கற்றாழை",bn:"ঘৃতকুমারী"},isCorrect:!1},{text:{en:"Moringa",hi:"सहजन",ta:"முருங்கை",bn:"সজনে"},isCorrect:!1}],explanation:{en:"Giloy (Tinospora cordifolia) is hailed as Amrita in classical scriptures for its unmatched immunomodulatory and antipyretic properties.",hi:"गिलोय को अमृत तुल्य माना गया है जो सभी प्रकार के ज्वर को दूर करके प्लेटलेट्स और इम्यूनिटी को बढ़ाता है।",ta:"சீந்தில் கொடி (கிலோய்) நோய் எதிர்ப்பு சக்தியை அதிகரிக்கும் அமிர்த மூலிகையாகும்.",bn:"গুলঞ্চকে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি এবং জ্বর নিরাময়ের জন্য অমৃত হিসেবে বিবেচনা করা হয়।"}}];function tE(){const{t:a,lang:e}=Jn(),{recordQuizResult:t,triggerConfetti:r}=Ki(),[o,l]=Ue.useState(0),[u,d]=Ue.useState(null),[p,m]=Ue.useState(!1),[x,v]=Ue.useState(0),[y,M]=Ue.useState(0),[b,w]=Ue.useState(!1),_=ji[o],S=A=>{if(p)return;d(A),m(!0),_.options[A].isCorrect?(v(F=>F+1),M(F=>F+1)):M(0)},I=()=>{var A;if(o<ji.length-1)l(q=>q+1),d(null),m(!1);else{const q=x+((A=_.options[u])!=null&&A.isCorrect,0),F=Math.round(q/ji.length*100);t(q,ji.length,F),w(!0),r()}},k=()=>{l(0),d(null),m(!1),v(0),M(0),w(!1)};if(b){const A=Math.round(x/ji.length*100);return f.jsxs("div",{className:"max-w-2xl mx-auto text-center space-y-5 p-6 sm:p-10 rounded-3xl glass-panel border border-emerald-500/30 shadow-xl animate-in zoom-in-95 duration-200",children:[f.jsx("div",{className:"w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-lg",children:f.jsx(wg,{className:"w-10 h-10"})}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("h2",{className:"font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white",children:a.quiz.congrats}),f.jsxs("p",{className:"text-xs sm:text-sm text-slate-600 dark:text-slate-300",children:["You scored ",f.jsx("span",{className:"font-bold text-emerald-600 dark:text-emerald-400 text-base",children:x})," out of ",ji.length," (",A,"%)"]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800",children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Proficiency Level"}),f.jsx("div",{className:"font-heading font-bold text-base text-emerald-800 dark:text-emerald-300",children:A>=80?"Master Herbalist":A>=50?"Herbal Scholar":"Herbal Apprentice"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"text-[10px] font-bold text-slate-500 uppercase",children:a.quiz.xpEarned}),f.jsxs("div",{className:"font-heading font-bold text-base text-amber-600 dark:text-amber-400 flex items-center justify-center gap-1",children:[f.jsx(ia,{className:"w-4 h-4"}),"+",x*30+50," XP"]})]})]}),f.jsxs("button",{onClick:k,className:"flex items-center gap-2 px-6 py-3 mx-auto rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all",children:[f.jsx(sh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:a.quiz.restart})]})]})}return f.jsxs("div",{className:"max-w-3xl mx-auto space-y-5",children:[f.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-3xl glass-panel border border-emerald-500/30 shadow-sm",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600",children:f.jsx(jl,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"text-[10px] font-extrabold uppercase tracking-wider text-slate-400",children:_.category}),f.jsxs("div",{className:"font-heading font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100",children:[a.quiz.question," ",o+1," of ",ji.length]})]})]}),f.jsxs("div",{className:"flex items-center gap-3 self-end sm:self-auto",children:[y>1&&f.jsxs("div",{className:"flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold",children:[f.jsx(Bl,{className:"w-3.5 h-3.5 fill-amber-500"}),f.jsxs("span",{children:[y,"x Streak"]})]}),f.jsxs("div",{className:"flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300",children:[f.jsxs("span",{children:[a.quiz.score,":"]}),f.jsx("span",{className:"font-heading font-extrabold text-sm",children:x})]})]})]}),f.jsx("div",{className:"w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden",children:f.jsx("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-300",style:{width:`${(o+1)/ji.length*100}%`}})}),f.jsxs("div",{className:"rounded-3xl p-5 sm:p-7 glass-panel border border-emerald-500/30 shadow-lg space-y-5",children:[f.jsx("h3",{className:"font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-relaxed",children:_.question[e]||_.question.en}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:_.options.map((A,q)=>{const F=u===q,O=p&&A.isCorrect,B=p&&F&&!A.isCorrect;let P="glass-panel border-emerald-500/20 text-slate-800 dark:text-slate-100 hover:border-emerald-500";return O?P="bg-emerald-600 text-white border-emerald-500 shadow-md":B?P="bg-rose-600 text-white border-rose-500 shadow-md":p&&(P="opacity-50 glass-panel"),f.jsxs("button",{disabled:p,onClick:()=>S(q),className:`p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between gap-2 ${P}`,children:[f.jsx("span",{children:A.text[e]||A.text.en}),O&&f.jsx(yg,{className:"w-4 h-4 flex-shrink-0"}),B&&f.jsx(bv,{className:"w-4 h-4 flex-shrink-0"})]},q)})}),p&&f.jsxs("div",{className:"p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-1 animate-in fade-in",children:[f.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300",children:[f.jsx(ia,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Classical Scripture Reference"})]}),f.jsx("p",{className:"text-xs text-slate-700 dark:text-slate-300 leading-relaxed",children:_.explanation[e]||_.explanation.en})]}),p&&f.jsx("div",{className:"flex justify-end pt-1",children:f.jsxs("button",{onClick:I,className:"flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all",children:[f.jsx("span",{children:o===ji.length-1?a.quiz.viewResults:a.quiz.nextQuestion}),f.jsx($s,{className:"w-3.5 h-3.5"})]})})]})]})}const nE=[{id:"ayurveda",name:"Ayurveda",slogan:"The Science of Life & Longevity (5000+ Years)",color:"#15803d",badgeClass:"bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",description:"Originating in ancient Vedic India, Ayurveda focuses on establishing harmonious balance between the five elements (Pancha Mahabhutas) and the three biological forces (Tridosha: Vata, Pitta, Kapha).",keyConcepts:[{title:"Tridosha Theory",text:"Vata (Air/Space), Pitta (Fire/Water), and Kapha (Water/Earth) govern physiological rhythms."},{title:"Agni & Ama",text:"Agni is the biological digestive metabolic fire; weak Agni produces Ama (toxic metabolic residue)."},{title:"Dravya Guna",text:"Every herb is classified by Rasa (Taste), Guna (Quality), Virya (Potency), and Vipaka (Post-digestive effect)."}],classicalTexts:["Charaka Samhita","Sushruta Samhita","Ashtanga Hridaya"],famousHerbs:["Tulsi","Ashwagandha","Turmeric","Giloy","Amla","Brahmi"]},{id:"yoga",name:"Yoga & Naturopathy",slogan:"Holistic Union of Mind, Body & Nature Healing",color:"#d97706",badgeClass:"bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300 dark:border-amber-800",description:"Naturopathy harnesses sunlight, earth, water, pure air, and botanical nourishment to activate the body's innate self-healing vitality without synthetic pharmaceuticals.",keyConcepts:[{title:"Pancha Mahabhutas",text:"Treatments utilize Earth (Mud packs), Water (Hydrotherapy), Sun (Heliotherapy), and Air."},{title:"Ahara as Aushadha",text:"Living organic foods, herbal swarasa (juices), and plant decoctions serve as primary medicine."},{title:"Pranayama & Asana",text:"Regulates vital bio-energy and enhances internal organ micro-circulation."}],classicalTexts:["Patanjali Yoga Sutras","Gheranda Samhita","Hatha Yoga Pradipika"],famousHerbs:["Aloe Vera","Tulsi","Neem","Amla","Moringa"]},{id:"unani",name:"Unani",slogan:"Greco-Arabian Humoral Medicine System",color:"#7c3aed",badgeClass:"bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300 dark:border-purple-800",description:"Expanded by physician Ibn Sina (Avicenna), Unani medicine seeks equilibrium between the four bodily humors (Dam/Blood, Balgham/Phlegm, Safra/Yellow Bile, Sauda/Black Bile) and temperaments (Mizaj).",keyConcepts:[{title:"Arkan & Akhlat",text:"The four fundamental elements and the four humors dictate constitution and immunity."},{title:"Tabiyat (Innate Defense)",text:"The supreme self-regulating power of the human body that physician herbs assist."},{title:"Ilaj-bil-Ghiza & Tadbeer",text:"Dietary therapy, regimen therapies (Cupping, Massage), and single botanical drugs (Mufradat)."}],classicalTexts:["Al-Qanun fi al-Tibb (The Canon of Medicine)","Kitab al-Hawi"],famousHerbs:["Neem","Ginger","Ashwagandha","Licorice (Mulethi)","Pudina"]},{id:"siddha",name:"Siddha",slogan:"Ancient Dravidian Alchemy & Botanical Mastery",color:"#ea580c",badgeClass:"bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300 border-orange-300 dark:border-orange-800",description:"Originating in Tamil Nadu, created by 18 Siddhars led by Sage Agathiyar. Emphasizes maintaining Vali, Azhal, and Iyyam in harmonious 4:2:1 balance and achieving Kayakalpa (cellular rejuvenation).",keyConcepts:[{title:"Mukkuttram",text:"Vali (Vata), Azhal (Pitta), and Iyyam (Kapha) maintained in precise equilibrium."},{title:"Kayakalpa Regimen",text:"Immuno-rejuvenation therapies that decelerate aging and promote longevity."},{title:"Envagai Thervu",text:"Eight-fold comprehensive diagnosis including pulse (Nadi), eyes, voice, and tongue."}],classicalTexts:["Agathiyar Vaidya Rathina Churukkam","Theraiyar Yamaga Venba"],famousHerbs:["Thulasi","Vembu (Neem)","Manjal (Turmeric)","Sotru Katraazhai (Aloe)","Seenthil (Giloy)"]},{id:"homeopathy",name:"Homeopathy",slogan:"Similia Similibus Curentur (Like Cures Like)",color:"#0284c7",badgeClass:"bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border-sky-300 dark:border-sky-800",description:"Founded by Dr. Samuel Hahnemann, Homeopathy uses dynamically potentized micro-doses of medicinal herbs to gently awaken the vital force and initiate self-healing.",keyConcepts:[{title:"Law of Similars",text:"A substance producing symptoms in healthy individuals cures corresponding symptoms in the sick."},{title:"Potentization",text:"Serial micro-dilutions releasing the latent therapeutic energy of medicinal botanicals."},{title:"Holistic Totality",text:"Prescriptions address the complete mental, emotional, and physical individual."}],classicalTexts:["Organon of Medicine","Materia Medica"],famousHerbs:["Ocimum Sanctum","Aloe Socotrina","Curcuma Longa","Zingiber","Mentha Piperita"]}],iE=[{name:"Swarasa (Fresh Expressed Juice)",icon:"Droplet",desc:"Freshly crushed leaves or roots pressed through muslin cloth to obtain pure botanical juice. Fast-acting and highly potent."},{name:"Kashayam / Kwatha (Herbal Decoction)",icon:"Flame",desc:"Coarsely ground herbs boiled with 16 parts water and reduced to 1/4th volume. Ideal for deep systemic absorption."},{name:"Churna (Micronized Herbal Powder)",icon:"Sparkles",desc:"Cleaned, dried herbs ground into a fine sieve-filtered powder, taken with honey, warm water, or A2 milk."},{name:"Lepa / Paste (Topical Poultice)",icon:"Layers",desc:"Fresh or powdered herbs ground with liquids (rose water, honey, curd) applied directly over skin for inflammation."},{name:"Taila & Ghrita (Medicated Oils & Ghee)",icon:"Sun",desc:"Herbs simmered slowly in sesame oil or cow ghee. Allows lipid-soluble phytochemicals to cross cellular barriers."},{name:"Asava & Arishta (Fermented Elixirs)",icon:"Wine",desc:"Naturally fermented herbal infusions with self-generated micro-alcohol ensuring rapid absorption and long shelf life."}];function rE(){return f.jsxs("div",{className:"space-y-10 max-w-5xl mx-auto",children:[f.jsxs("div",{className:"text-center space-y-2 max-w-3xl mx-auto",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800",children:[f.jsx(Wl,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"AYUSH Educational Repository"})]}),f.jsx("h2",{className:"font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white",children:"The Five Pillars of AYUSH Healthcare"}),f.jsx("p",{className:"text-xs sm:text-sm text-slate-600 dark:text-slate-300",children:"Traditional healthcare systems recognized by the Ministry of AYUSH, Government of India."})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:nE.map(a=>f.jsxs("div",{className:"rounded-3xl p-5 sm:p-6 glass-panel border border-emerald-500/20 hover:border-emerald-500/60 shadow-lg space-y-4 transition-all",children:[f.jsxs("div",{children:[f.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${a.badgeClass}`,children:a.name}),f.jsx("h3",{className:"font-heading font-extrabold text-lg text-slate-900 dark:text-white mt-2",children:a.name}),f.jsx("p",{className:"text-xs font-semibold text-slate-500 dark:text-slate-400",children:a.slogan})]}),f.jsx("p",{className:"text-xs text-slate-700 dark:text-slate-300 leading-relaxed",children:a.description}),f.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-emerald-500/10",children:[f.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Core Theoretical Principles"}),f.jsx("div",{className:"space-y-1.5",children:a.keyConcepts.map((e,t)=>f.jsxs("div",{className:"p-2.5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 text-xs space-y-0.5",children:[f.jsxs("span",{className:"font-bold text-emerald-800 dark:text-emerald-300",children:["• ",e.title,":"]}),f.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-[11px]",children:e.text})]},t))})]}),f.jsxs("div",{className:"text-[11px] font-medium text-slate-500 flex items-center gap-1.5 pt-1",children:[f.jsx("span",{className:"font-bold text-slate-700 dark:text-slate-200",children:"Treatises:"}),f.jsx("span",{className:"italic",children:a.classicalTexts.join(", ")})]})]},a.id))}),f.jsxs("div",{className:"space-y-4 pt-4",children:[f.jsxs("div",{className:"text-center space-y-1",children:[f.jsx("h3",{className:"font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white",children:"Classical Herbal Formulation Methods (Kalpana)"}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300",children:"How traditional herbs are processed, extracted, and administered for clinical effectiveness."})]}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5",children:iE.map((a,e)=>f.jsxs("div",{className:"p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1.5 shadow-sm",children:[f.jsxs("div",{className:"font-heading font-bold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2",children:[f.jsx(Bl,{className:"w-3.5 h-3.5 text-amber-500"}),f.jsx("span",{children:a.name})]}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:a.desc})]},e))})]}),f.jsxs("div",{className:"rounded-3xl p-5 sm:p-7 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-xl space-y-2.5",children:[f.jsxs("div",{className:"flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider",children:[f.jsx(fy,{className:"w-4 h-4"}),f.jsx("span",{children:"Biodiversity Conservation & GAP Compliance"})]}),f.jsx("h3",{className:"font-heading font-extrabold text-lg sm:text-xl",children:"Preserving India's Threatened Botanical Wealth"}),f.jsx("p",{className:"text-xs text-emerald-100 leading-relaxed max-w-3xl",children:"Over 90% of medicinal plants in trade are harvested from natural forest habitats. The Virtual Herbal Garden supports sustainable GAP (Good Agricultural Practices), ex-situ botanical gene banks, and public digital education to protect vulnerable Ayurvedic flora."})]})]})}function aE(){const{unlockedBadges:a,exploredPlants:e,quizHistory:t}=Ki(),{t:r}=Jn(),o=[{id:"explorer_novice",title:"Herbal Apprentice",description:"Started the Virtual Herbal Garden exploration.",icon:Xl,unlocked:!0,progress:"100%"},{id:"plant_explorer_5",title:"Plant Explorer",description:"Explored 5 distinct medicinal species in detail.",icon:gv,unlocked:a.includes("plant_explorer_5"),progress:`${Math.min(100,Math.round(e.length/5*100))}%`},{id:"ayush_scholar_10",title:"AYUSH Scholar",description:"Explored 10 verified classical medicinal plants.",icon:qs,unlocked:a.includes("ayush_scholar_10"),progress:`${Math.min(100,Math.round(e.length/10*100))}%`},{id:"3d_botanist",title:"3D Botanical Specialist",description:"Inspected 3 interactive 3D plants and hotspots.",icon:Rv,unlocked:a.includes("3d_botanist"),progress:a.includes("3d_botanist")?"100%":"50%"},{id:"herbal_novice",title:"Herbal Quizzer",description:"Completed your first herbal knowledge quiz.",icon:dy,unlocked:a.includes("herbal_novice")||t.length>0,progress:t.length>0?"100%":"0%"},{id:"master_herbalist",title:"Master Herbalist",description:"Scored 80% or above in the Herbal Knowledge Quiz.",icon:wg,unlocked:a.includes("master_herbalist"),progress:a.includes("master_herbalist")?"100%":"0%"}];return f.jsxs("div",{className:"space-y-3.5",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("h3",{className:"font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2",children:[f.jsx(jl,{className:"w-4 h-4 text-amber-500"}),f.jsx("span",{children:r.badges.title})]}),f.jsxs("span",{className:"text-xs font-bold text-emerald-600 dark:text-emerald-400",children:[o.filter(l=>l.unlocked).length," of ",o.length," Unlocked"]})]}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:o.map(l=>{const u=l.icon;return f.jsx("div",{className:`p-3.5 rounded-2xl border transition-all ${l.unlocked?"glass-panel border-amber-500/40 bg-amber-500/5 shadow-sm":"glass-panel border-slate-300/40 dark:border-slate-800 opacity-60"}`,children:f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${l.unlocked?"bg-amber-500/20 text-amber-600 dark:text-amber-400":"bg-slate-200 dark:bg-slate-800 text-slate-400"}`,children:l.unlocked?f.jsx(u,{className:"w-5 h-5"}):f.jsx(qv,{className:"w-4 h-4"})}),f.jsxs("div",{className:"space-y-1 flex-1",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("h4",{className:"font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white",children:l.title}),l.unlocked&&f.jsx(yg,{className:"w-3.5 h-3.5 text-emerald-500"})]}),f.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-snug",children:l.description}),f.jsx("div",{className:"w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden mt-1.5",children:f.jsx("div",{className:"bg-amber-500 h-full rounded-full",style:{width:l.progress}})})]})]})},l.id)})})]})}function sE({onSelectPlant:a}){const{xp:e,level:t,bookmarkedPlants:r,notes:o}=Ki(),{t:l,getPlantCommonName:u}=Jn(),d=Zn.filter(v=>r.includes(v.id)),p=Object.keys(o).filter(v=>{var y;return((y=o[v])==null?void 0:y.trim().length)>0}),m=t*200,x=Math.round(e%200/200*100);return f.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[f.jsxs("div",{className:"rounded-3xl p-5 sm:p-7 glass-panel border border-emerald-500/30 shadow-lg bg-gradient-to-r from-emerald-900/20 via-teal-900/10 to-transparent flex flex-col sm:flex-row items-center gap-5",children:[f.jsxs("div",{className:"relative",children:[f.jsx("div",{className:"w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-500 p-1 shadow-lg shadow-emerald-600/30",children:f.jsx("div",{className:"w-full h-full rounded-[22px] bg-slate-900 flex items-center justify-center text-white font-heading font-extrabold text-2xl",children:"VS"})}),f.jsxs("span",{className:"absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-amber-500 text-white font-extrabold text-[10px] shadow-sm",children:["Lvl ",t]})]}),f.jsxs("div",{className:"space-y-2.5 flex-1 text-center sm:text-left w-full",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-center sm:justify-start gap-2",children:[f.jsx("h2",{className:"font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white",children:"Herbal Explorer"}),f.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold",children:"Ayurveda Student"})]}),f.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Smart India Hackathon 2026 AYUSH Botanical Fellow"})]}),f.jsxs("div",{className:"space-y-1",children:[f.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300",children:[f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx(ia,{className:"w-3.5 h-3.5 text-amber-500"}),e," Total XP"]}),f.jsxs("span",{children:["Next Level: ",m," XP (",x,"%)"]})]}),f.jsx("div",{className:"w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden",children:f.jsx("div",{className:"bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 h-full transition-all duration-300",style:{width:`${x}%`}})})]})]})]}),f.jsx(aE,{}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[f.jsxs("div",{className:"p-5 rounded-3xl glass-panel border border-emerald-500/20 shadow-md space-y-3.5",children:[f.jsx("div",{className:"flex items-center justify-between border-b border-emerald-500/10 pb-2.5",children:f.jsxs("h3",{className:"font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2",children:[f.jsx(Ol,{className:"w-4 h-4 text-amber-500 fill-amber-500"}),f.jsxs("span",{children:[l.profile.bookmarksTitle," (",d.length,")"]})]})}),d.length===0?f.jsx("p",{className:"text-xs text-slate-500 py-6 text-center",children:l.profile.noBookmarks}):f.jsx("div",{className:"space-y-2.5 max-h-64 overflow-y-auto pr-1",children:d.map(v=>f.jsxs("div",{onClick:()=>a(v),className:"cursor-pointer p-2.5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-emerald-500 flex items-center justify-between gap-3 transition-colors",children:[f.jsxs("div",{className:"flex items-center gap-2.5",children:[f.jsx("img",{src:v.image,alt:v.name,className:"w-10 h-10 rounded-xl object-cover"}),f.jsxs("div",{children:[f.jsx("h4",{className:"font-heading font-bold text-xs text-slate-900 dark:text-white",children:u(v)}),f.jsx("p",{className:"text-[10px] italic text-emerald-600 dark:text-emerald-400",children:v.scientificName})]})]}),f.jsx(kv,{className:"w-3.5 h-3.5 text-slate-400"})]},v.id))})]}),f.jsxs("div",{className:"p-5 rounded-3xl glass-panel border border-emerald-500/20 shadow-md space-y-3.5",children:[f.jsx("div",{className:"flex items-center justify-between border-b border-emerald-500/10 pb-2.5",children:f.jsxs("h3",{className:"font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2",children:[f.jsx(Wl,{className:"w-4 h-4 text-teal-600"}),f.jsxs("span",{children:[l.profile.notesTitle," (",p.length,")"]})]})}),p.length===0?f.jsx("p",{className:"text-xs text-slate-500 py-6 text-center",children:l.profile.noNotes}):f.jsx("div",{className:"space-y-2.5 max-h-64 overflow-y-auto pr-1",children:p.map(v=>{const y=Zn.find(M=>M.id===v);return f.jsxs("div",{className:"p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-1",children:[f.jsx("div",{className:"font-heading font-bold text-xs text-emerald-700 dark:text-emerald-300",children:y?u(y):v}),f.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 italic",children:['"',o[v],'"']})]},v)})})]})]})]})}function oE({plant:a,onClose:e,onOpen3D:t}){const{t:r,getPlantCommonName:o}=Jn(),{bookmarkedPlants:l,toggleBookmark:u,notes:d,saveNote:p,markPlantExplored:m}=Ki(),[x,v]=Ue.useState("overview"),[y,M]=Ue.useState(!1),[b,w]=Ue.useState(""),[_,S]=Ue.useState(!1),[I,k]=Ue.useState(!1),A=a?l.includes(a.id):!1;if(Ue.useEffect(()=>{a&&(m(a.id),w(d[a.id]||""),v("overview"))},[a==null?void 0:a.id]),!a)return null;const q=()=>{if(!("speechSynthesis"in window)){alert("Text-to-speech not supported in this browser.");return}if(y){window.speechSynthesis.cancel(),M(!1);return}window.speechSynthesis.cancel();const P=`${o(a)}, botanical name ${a.scientificName}, family ${a.family}. ${a.shortDescription}. Verified uses: ${a.medicinalUses.join(". ")}`,C=new SpeechSynthesisUtterance(P);C.rate=.95,C.pitch=1,C.onend=()=>M(!1),C.onerror=()=>M(!1),window.speechSynthesis.speak(C),M(!0)},F=()=>{var B;(B=navigator.clipboard)==null||B.writeText(window.location.href),S(!0),setTimeout(()=>S(!1),2e3)},O=B=>{B.preventDefault(),p(a.id,b),k(!0),setTimeout(()=>k(!1),2e3)};return f.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200",children:f.jsxs("div",{className:"relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 shadow-2xl bg-white dark:bg-herbal-darkCard",children:[f.jsxs("div",{className:"relative h-60 sm:h-72 w-full overflow-hidden flex-shrink-0 bg-slate-900",children:[f.jsx("img",{src:a.bannerImage||a.image,alt:a.name,className:"w-full h-full object-cover"}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"}),f.jsxs("div",{className:"absolute top-4 right-4 flex items-center gap-2",children:[f.jsx("button",{onClick:F,title:r.modal.share,className:"p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-transform active:scale-95",children:_?f.jsx(im,{className:"w-4 h-4 text-emerald-400"}):f.jsx(ay,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>u(a.id),title:A?"Bookmarked":"Bookmark",className:`p-2.5 rounded-full backdrop-blur-md transition-transform active:scale-95 ${A?"bg-amber-500 text-white":"bg-black/40 text-white hover:bg-black/60"}`,children:f.jsx(Ol,{className:`w-4 h-4 ${A?"fill-current":""}`})}),f.jsx("button",{onClick:()=>{var B;y&&((B=window.speechSynthesis)==null||B.cancel()),e()},className:"p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-transform active:scale-95",children:f.jsx(Hl,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"absolute bottom-4 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-emerald-600/90 text-[10px] font-extrabold uppercase tracking-widest text-white",children:a.family}),a.isPopular&&f.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-amber-500 text-[10px] font-extrabold uppercase tracking-widest text-white",children:"Popular"})]}),f.jsx("h2",{className:"font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl mt-1 drop-shadow-md",children:o(a)}),f.jsxs("p",{className:"text-xs sm:text-sm italic text-emerald-200 font-medium",children:[a.scientificName," • ",f.jsx("span",{className:"not-italic font-sans text-amber-200 font-bold",children:a.sanskritName})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:q,className:`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold backdrop-blur-md border border-white/20 transition-all ${y?"bg-amber-500 text-white animate-pulse":"bg-white/20 text-white hover:bg-white/30"}`,children:[y?f.jsx(Eg,{className:"w-4 h-4"}):f.jsx(bg,{className:"w-4 h-4"}),f.jsx("span",{children:y?r.modal.stopAudio:r.modal.playAudio})]}),a.has3DModel&&f.jsxs("button",{onClick:()=>{e(),t(a)},className:"flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg transition-all",children:[f.jsx(na,{className:"w-4 h-4"}),f.jsx("span",{children:"3D Model"})]})]})]})]}),f.jsx("div",{className:"flex items-center gap-2 px-5 py-2.5 border-b border-emerald-500/20 overflow-x-auto select-none bg-emerald-50/50 dark:bg-emerald-950/30",children:[{id:"overview",label:r.modal.tabOverview,icon:Sg},{id:"significance",label:r.modal.tabSignificance,icon:Wl},{id:"pharmacology",label:r.modal.tabPharmacology,icon:ia},{id:"cultivation",label:r.modal.tabCultivation,icon:Lu},{id:"preparations",label:r.modal.tabPreparations,icon:Bl},{id:"notes",label:r.modal.tabNotes,icon:Ol}].map(B=>{const P=B.icon,C=x===B.id;return f.jsxs("button",{onClick:()=>v(B.id),className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${C?"bg-emerald-600 text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40"}`,children:[f.jsx(P,{className:"w-3.5 h-3.5"}),B.label]},B.id)})}),f.jsxs("div",{className:"p-6 overflow-y-auto flex-1 space-y-6 text-slate-800 dark:text-slate-200",children:[x==="overview"&&f.jsxs("div",{className:"space-y-6 animate-in fade-in",children:[f.jsx("p",{className:"text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200",children:a.shortDescription}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400",children:r.card.ayush}),f.jsx("div",{className:"flex flex-wrap gap-2",children:a.ayushSystems.map(B=>f.jsx("span",{className:"px-3 py-1 rounded-xl text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800",children:B},B))})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400",children:"Verified Medicinal Uses"}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:a.medicinalUses.map((B,P)=>f.jsxs("div",{className:"p-3 rounded-2xl glass-panel border border-emerald-500/20 flex items-start gap-2.5 text-xs font-medium",children:[f.jsx("span",{className:"w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold"}),f.jsx("span",{children:B})]},P))})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400",children:"Bioactive Phytochemicals"}),f.jsx("div",{className:"flex flex-wrap gap-1.5",children:a.phytochemicals.map(B=>f.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-semibold glass-panel border border-teal-500/30 text-teal-800 dark:text-teal-300",children:B},B))})]}),a.precautions&&f.jsxs("div",{className:"p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 flex items-start gap-3",children:[f.jsx(my,{className:"w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5"}),f.jsxs("div",{className:"space-y-0.5 text-xs",children:[f.jsxs("span",{className:"font-bold text-amber-900 dark:text-amber-300",children:[r.modal.precautions,":"]}),f.jsx("p",{className:"text-amber-800 dark:text-amber-400",children:a.precautions})]})]})]}),x==="significance"&&f.jsxs("div",{className:"space-y-6 animate-in fade-in",children:[f.jsxs("div",{className:"p-5 rounded-2xl glass-panel border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2",children:[f.jsx("h4",{className:"font-heading font-bold text-sm text-emerald-900 dark:text-emerald-200",children:"Classical Literature & Traditional Wisdom"}),f.jsx("p",{className:"text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300",children:a.traditionalSignificance})]}),f.jsxs("div",{className:"space-y-2.5",children:[f.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400",children:"Anatomical Plant Parts Used in Classical Formulations"}),f.jsx("div",{className:"flex flex-wrap gap-2",children:a.partsUsed.map(B=>f.jsx("span",{className:"px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300",children:B},B))})]})]}),x==="pharmacology"&&f.jsxs("div",{className:"space-y-6 animate-in fade-in",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:[f.jsxs("div",{className:"p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-0.5",children:[f.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Rasa (Taste)"}),f.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100",children:a.ayurvedicProfile.rasa})]}),f.jsxs("div",{className:"p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-0.5",children:[f.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Guna (Qualities)"}),f.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100",children:a.ayurvedicProfile.guna})]}),f.jsxs("div",{className:"p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-0.5",children:[f.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Virya (Potency)"}),f.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100",children:a.ayurvedicProfile.virya})]}),f.jsxs("div",{className:"p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-0.5",children:[f.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Vipaka (Post-Digestive Effect)"}),f.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100",children:a.ayurvedicProfile.vipaka})]})]}),f.jsxs("div",{className:"p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-300 dark:border-teal-800 space-y-1",children:[f.jsx("span",{className:"text-xs font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wide",children:"Dosha Karma (Influence on Bio-energies)"}),f.jsx("p",{className:"text-xs sm:text-sm font-medium text-teal-800 dark:text-teal-200",children:a.ayurvedicProfile.doshaKarma})]})]}),x==="cultivation"&&f.jsxs("div",{className:"space-y-4 animate-in fade-in",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:[f.jsxs("div",{className:"p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-1",children:[f.jsxs("span",{className:"text-xs font-bold text-slate-500 flex items-center gap-1.5",children:[f.jsx(Xl,{className:"w-3.5 h-3.5 text-emerald-600"}),"Climate & Habitat"]}),f.jsx("p",{className:"text-xs text-slate-800 dark:text-slate-200",children:a.cultivation.climate})]}),f.jsxs("div",{className:"p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-1",children:[f.jsxs("span",{className:"text-xs font-bold text-slate-500 flex items-center gap-1.5",children:[f.jsx(Lu,{className:"w-3.5 h-3.5 text-sky-600"}),"Soil Requirements"]}),f.jsx("p",{className:"text-xs text-slate-800 dark:text-slate-200",children:a.cultivation.soil})]}),f.jsxs("div",{className:"p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-1",children:[f.jsxs("span",{className:"text-xs font-bold text-slate-500 flex items-center gap-1.5",children:[f.jsx(zl,{className:"w-3.5 h-3.5 text-amber-500"}),"Sunlight Needs"]}),f.jsx("p",{className:"text-xs text-slate-800 dark:text-slate-200",children:a.cultivation.sunlight})]}),f.jsxs("div",{className:"p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-1",children:[f.jsxs("span",{className:"text-xs font-bold text-slate-500 flex items-center gap-1.5",children:[f.jsx(Lu,{className:"w-3.5 h-3.5 text-blue-500"}),"Watering"]}),f.jsx("p",{className:"text-xs text-slate-800 dark:text-slate-200",children:a.cultivation.watering})]})]}),f.jsxs("div",{className:"p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-1",children:[f.jsx("span",{className:"text-xs font-bold text-emerald-900 dark:text-emerald-300",children:"Home Gardening & Balcony Tips"}),f.jsx("p",{className:"text-xs text-emerald-800 dark:text-emerald-200",children:a.cultivation.homeGardening})]})]}),x==="preparations"&&f.jsx("div",{className:"space-y-3.5 animate-in fade-in",children:a.preparations.map((B,P)=>f.jsxs("div",{className:"p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1",children:[f.jsxs("div",{className:"font-heading font-bold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2",children:[f.jsx(Bl,{className:"w-3.5 h-3.5 text-amber-500"}),B.name]}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300",children:B.usage})]},P))}),x==="notes"&&f.jsxs("form",{onSubmit:O,className:"space-y-4 animate-in fade-in",children:[f.jsxs("div",{className:"space-y-1",children:[f.jsxs("label",{className:"text-xs font-bold text-slate-700 dark:text-slate-300",children:["Personal Herbalist Notes (",o(a),")"]}),f.jsx("textarea",{rows:5,value:b,onChange:B=>w(B.target.value),placeholder:r.modal.notesPlaceholder,className:"w-full p-3.5 rounded-2xl glass-panel border border-emerald-500/30 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500"})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-[10px] text-slate-400",children:"Notes are stored locally in your browser and synced with your profile."}),f.jsxs("button",{type:"submit",className:"flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-sm",children:[I?f.jsx(im,{className:"w-3.5 h-3.5"}):f.jsx(ey,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:I?"Saved":r.modal.saveNotes})]})]})]})]})]})})}function lE({setActiveTab:a}){const{t:e}=Jn();return f.jsx("footer",{className:"w-full border-t border-emerald-500/20 glass-panel mt-16 pt-10 pb-6 text-slate-600 dark:text-slate-400 text-xs",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",children:[f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[f.jsxs("div",{className:"space-y-2 md:col-span-2",children:[f.jsxs("div",{className:"flex items-center gap-2.5",children:[f.jsx("div",{className:"w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md",children:f.jsx(Pl,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"font-heading font-extrabold text-base text-slate-900 dark:text-white",children:"Virtual Herbal Garden"}),f.jsx("p",{className:"text-[10px] text-emerald-700 dark:text-emerald-400 font-bold",children:"Smart India Hackathon 2026 • PSS03"})]})]}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm",children:"An interactive 3D digital botanical platform promoting public education, biodiversity preservation, and research access across India's traditional AYUSH healthcare heritage."})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("div",{className:"font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]",children:"Platform Modules"}),f.jsxs("ul",{className:"space-y-1 font-medium",children:[f.jsx("li",{children:f.jsx("button",{onClick:()=>a("explore"),className:"hover:text-emerald-600 dark:hover:text-emerald-400",children:"Virtual Plant Explorer"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>a("3d-garden"),className:"hover:text-emerald-600 dark:hover:text-emerald-400",children:"Interactive 3D Garden"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>a("assistant"),className:"hover:text-emerald-600 dark:hover:text-emerald-400",children:"AI Knowledge Assistant"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>a("tours"),className:"hover:text-emerald-600 dark:hover:text-emerald-400",children:"Guided Virtual Tours"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>a("quiz"),className:"hover:text-emerald-600 dark:hover:text-emerald-400",children:"Knowledge Quiz"})})]})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("div",{className:"font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]",children:"National Initiative"}),f.jsx("p",{className:"text-xs leading-relaxed text-slate-600 dark:text-slate-300",children:"Developed for the Smart India Hackathon 2026 aligned with Ministry of AYUSH botanical preservation standards."}),f.jsx("div",{className:"p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-800 dark:text-emerald-300 font-semibold",children:"Inspiring a Healthier, Greener, and Self-Reliant India."})]})]}),f.jsxs("div",{className:"p-3 rounded-2xl bg-emerald-950/20 dark:bg-emerald-950/60 border border-emerald-500/20 flex items-center gap-2.5 text-slate-700 dark:text-slate-300",children:[f.jsx(qs,{className:"w-4 h-4 text-emerald-600 flex-shrink-0"}),f.jsx("p",{className:"text-[10px] sm:text-[11px] leading-relaxed",children:e.disclaimer})]}),f.jsx("div",{className:"text-center text-[10px] text-slate-400 pt-1 border-t border-emerald-500/10",children:"© 2026 Virtual Herbal Garden Prototype • Smart India Hackathon 2026. Built with React & Three.js."})]})})}function cE(){const[a,e]=Ue.useState("home"),[t,r]=Ue.useState(null),[o,l]=Ue.useState(null),{recentBadge:u,clearRecentBadge:d}=Ki(),p=m=>{l(m),e("3d-garden")};return f.jsxs("div",{className:"min-h-screen flex flex-col lg:flex-row bg-herbal-cream dark:bg-herbal-darkBg text-slate-800 dark:text-slate-100 transition-colors duration-300",children:[f.jsx(by,{activeTab:a,setActiveTab:e}),f.jsxs("div",{className:"flex-1 lg:pl-72 flex flex-col min-h-screen w-full transition-all",children:[u&&f.jsxs("div",{className:"fixed bottom-6 right-6 z-50 p-4 rounded-2xl glass-panel border-2 border-amber-500 shadow-2xl bg-amber-500/20 backdrop-blur-xl flex items-center gap-3 animate-in slide-in-from-bottom-4",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"}),f.jsxs("div",{children:[f.jsx("div",{className:"text-[10px] font-extrabold uppercase tracking-wider text-amber-900 dark:text-amber-300",children:"Badge Unlocked"}),f.jsx("div",{className:"font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white",children:u})]}),f.jsx("button",{onClick:d,className:"ml-2 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200",children:f.jsx(X,{className:"w-3.5 h-3.5"})})]}),f.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8",children:[a==="home"&&f.jsxs("div",{className:"space-y-10",children:[f.jsx(Ey,{setActiveTab:e}),f.jsx("div",{className:"pt-2",children:f.jsx(am,{onSelectPlant:r,onOpen3D:p})}),f.jsxs("div",{className:"space-y-4 pt-2",children:[f.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/10 pb-2",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white",children:"Featured Botanical Flora"}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300",children:"Medicinal plant species documented in classical AYUSH pharmacopeias."})]}),f.jsx("button",{onClick:()=>e("explore"),className:"text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline",children:"View All Plants →"})]}),f.jsx(sm,{onSelectPlant:r,onOpen3D:p})]})]}),a==="explore"&&f.jsx(sm,{onSelectPlant:r,onOpen3D:p}),a==="3d-garden"&&f.jsx(Jb,{initialPlant:o,onOpenDetails:r}),a==="assistant"&&f.jsx(am,{onSelectPlant:r,onOpen3D:p}),a==="ayush"&&f.jsx(rE,{}),a==="tours"&&f.jsx(eE,{onSelectPlant:r}),a==="quiz"&&f.jsx(tE,{}),a==="profile"&&f.jsx(sE,{onSelectPlant:r})]}),t&&f.jsx(oE,{plant:t,onClose:()=>r(null),onOpen3D:p}),f.jsx(lE,{setActiveTab:e})]})]})}function uE(){return f.jsx(Jx,{children:f.jsx(Qx,{children:f.jsx(nv,{children:f.jsx(cE,{})})})})}Kx.createRoot(document.getElementById("root")).render(f.jsx(Gx.StrictMode,{children:f.jsx(uE,{})}));
