(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={exports:{}},rl={},Za={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=Symbol.for("react.element"),fc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),wc=Symbol.for("react.memo"),kc=Symbol.for("react.lazy"),$o=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var ba={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qa=Object.assign,es={};function an(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||ba}an.prototype.isReactComponent={};an.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};an.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ts(){}ts.prototype=an.prototype;function Wi(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||ba}var Qi=Wi.prototype=new ts;Qi.constructor=Wi;qa(Qi,an.prototype);Qi.isPureReactComponent=!0;var Vo=Array.isArray,ns=Object.prototype.hasOwnProperty,Gi={current:null},rs={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ns.call(t,r)&&!rs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Jn,type:e,key:i,ref:o,props:l,_owner:Gi.current}}function Ec(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function Nc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bo=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nc(""+e.key):t.toString(36)}function kr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Jn:case fc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Sl(o,0):r,Vo(l)?(n="",e!=null&&(n=e.replace(Bo,"$&/")+"/"),kr(l,t,n,"",function(d){return d})):l!=null&&(Yi(l)&&(l=Ec(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Bo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Vo(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Sl(i,s);o+=kr(i,t,n,u,l)}else if(u=Sc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Sl(i,s++),o+=kr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return kr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Sr={transition:null},Cc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:Gi};function is(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Yi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=an;P.Fragment=pc;P.Profiler=hc;P.PureComponent=Wi;P.StrictMode=mc;P.Suspense=xc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cc;P.act=is;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qa({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Gi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ns.call(t,u)&&!rs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Jn,type:e.type,key:l,ref:i,props:r,_owner:o}};P.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vc,_context:e},e.Consumer=e};P.createElement=ls;P.createFactory=function(e){var t=ls.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:yc,render:e}};P.isValidElement=Yi;P.lazy=function(e){return{$$typeof:kc,_payload:{_status:-1,_result:e},_init:jc}};P.memo=function(e,t){return{$$typeof:wc,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};P.unstable_act=is;P.useCallback=function(e,t){return ae.current.useCallback(e,t)};P.useContext=function(e){return ae.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};P.useEffect=function(e,t){return ae.current.useEffect(e,t)};P.useId=function(){return ae.current.useId()};P.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return ae.current.useMemo(e,t)};P.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};P.useRef=function(e){return ae.current.useRef(e)};P.useState=function(e){return ae.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return ae.current.useTransition()};P.version="18.3.1";Za.exports=P;var Ee=Za.exports;const _c=dc(Ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=Ee,zc=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),Ac=Object.prototype.hasOwnProperty,Lc=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ic={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ac.call(t,r)&&!Ic.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:zc,type:e,key:i,ref:o,props:l,_owner:Lc.current}}rl.Fragment=Pc;rl.jsx=os;rl.jsxs=os;Ja.exports=rl;var a=Ja.exports,Zl={},as={exports:{}},xe={},ss={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var z=N.length;N.push(T);e:for(;0<z;){var W=z-1>>>1,X=N[W];if(0<l(X,T))N[W]=T,N[z]=X,z=W;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],z=N.pop();if(z!==T){N[0]=z;e:for(var W=0,X=N.length,tr=X>>>1;W<tr;){var yt=2*(W+1)-1,kl=N[yt],xt=yt+1,nr=N[xt];if(0>l(kl,z))xt<X&&0>l(nr,kl)?(N[W]=nr,N[xt]=z,W=xt):(N[W]=kl,N[yt]=z,W=yt);else if(xt<X&&0>l(nr,z))N[W]=nr,N[xt]=z,W=xt;else break e}}return T}function l(N,T){var z=N.sortIndex-T.sortIndex;return z!==0?z:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],v=1,h=null,m=3,x=!1,w=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=N)r(d),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(d)}}function g(N){if(k=!1,p(N),!w)if(n(u)!==null)w=!0,xl(E);else{var T=n(d);T!==null&&wl(g,T.startTime-N)}}function E(N,T){w=!1,k&&(k=!1,f(_),_=-1),x=!0;var z=m;try{for(p(T),h=n(u);h!==null&&(!(h.expirationTime>T)||N&&!Te());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var X=W(h.expirationTime<=T);T=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(u)&&r(u),p(T)}else r(u);h=n(u)}if(h!==null)var tr=!0;else{var yt=n(d);yt!==null&&wl(g,yt.startTime-T),tr=!1}return tr}finally{h=null,m=z,x=!1}}var j=!1,C=null,_=-1,H=5,A=-1;function Te(){return!(e.unstable_now()-A<H)}function cn(){if(C!==null){var N=e.unstable_now();A=N;var T=!0;try{T=C(!0,N)}finally{T?dn():(j=!1,C=null)}}else j=!1}var dn;if(typeof c=="function")dn=function(){c(cn)};else if(typeof MessageChannel<"u"){var Uo=new MessageChannel,cc=Uo.port2;Uo.port1.onmessage=cn,dn=function(){cc.postMessage(null)}}else dn=function(){D(cn,0)};function xl(N){C=N,j||(j=!0,dn())}function wl(N,T){_=D(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,xl(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var z=m;m=T;try{return N()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=m;m=N;try{return T()}finally{m=z}},e.unstable_scheduleCallback=function(N,T,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=z+X,N={id:v++,callback:T,priorityLevel:N,startTime:z,expirationTime:X,sortIndex:-1},z>W?(N.sortIndex=z,t(d,N),n(u)===null&&N===n(d)&&(k?(f(_),_=-1):k=!0,wl(g,z-W))):(N.sortIndex=X,t(u,N),w||x||(w=!0,xl(E))),N},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(N){var T=m;return function(){var z=m;m=T;try{return N.apply(this,arguments)}finally{m=z}}}})(us);ss.exports=us;var Oc=ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=Ee,ye=Oc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cs=new Set,In={};function Lt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(In[e]=t,e=0;e<t.length;e++)cs.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,Mc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ho={},Wo={};function Dc(e){return bl.call(Wo,e)?!0:bl.call(Ho,e)?!1:Mc.test(e)?Wo[e]=!0:(Ho[e]=!0,!1)}function Fc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,t,n,r){if(t===null||typeof t>"u"||Fc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ki=/[\-:]([a-z])/g;function Xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ki,Xi);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ki,Xi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ki,Xi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ji(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uc(t,n,l,r)&&(n=null),r||l===null?Dc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),ds=Symbol.for("react.provider"),fs=Symbol.for("react.context"),bi=Symbol.for("react.forward_ref"),ei=Symbol.for("react.suspense"),ti=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ps=Symbol.for("react.offscreen"),Qo=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,El;function wn(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Nl=!1;function jl(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function $c(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function ni(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Rt:return"Portal";case ql:return"Profiler";case Zi:return"StrictMode";case ei:return"Suspense";case ti:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fs:return(e.displayName||"Context")+".Consumer";case ds:return(e._context.displayName||"Context")+".Provider";case bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return t=e.displayName||null,t!==null?t:ni(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return ni(e(t))}catch{}}return null}function Vc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ni(t);case 8:return t===Zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bc(e){var t=ms(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Bc(e))}function hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ms(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ri(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Go(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vs(e,t){t=t.checked,t!=null&&Ji(e,"checked",t,!1)}function li(e,t){vs(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ii(e,t.type,n):t.hasOwnProperty("defaultValue")&&ii(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ii(e,t,n){(t!=="number"||Ir(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ko(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function gs(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ys(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ys(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,xs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function ks(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Wc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function si(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ci=null;function eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var di=null,Kt=null,Xt=null;function Jo(e){if(e=qn(e)){if(typeof di!="function")throw Error(y(280));var t=e.stateNode;t&&(t=sl(t),di(e.stateNode,e.type,t))}}function Ss(e){Kt?Xt?Xt.push(e):Xt=[e]:Kt=e}function Es(){if(Kt){var e=Kt,t=Xt;if(Xt=Kt=null,Jo(e),t)for(e=0;e<t.length;e++)Jo(t[e])}}function Ns(e,t){return e(t)}function js(){}var Cl=!1;function Cs(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Ns(e,t,n)}finally{Cl=!1,(Kt!==null||Xt!==null)&&(js(),Es())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var fi=!1;if(Ge)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){fi=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{fi=!1}function Qc(e,t,n,r,l,i,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var jn=!1,Or=null,Rr=!1,pi=null,Gc={onError:function(e){jn=!0,Or=e}};function Yc(e,t,n,r,l,i,o,s,u){jn=!1,Or=null,Qc.apply(Gc,arguments)}function Kc(e,t,n,r,l,i,o,s,u){if(Yc.apply(this,arguments),jn){if(jn){var d=Or;jn=!1,Or=null}else throw Error(y(198));Rr||(Rr=!0,pi=d)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(It(e)!==e)throw Error(y(188))}function Xc(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Zo(l),e;if(i===r)return Zo(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ts(e){return e=Xc(e),e!==null?zs(e):null}function zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zs(e);if(t!==null)return t;e=e.sibling}return null}var Ps=ye.unstable_scheduleCallback,bo=ye.unstable_cancelCallback,Jc=ye.unstable_shouldYield,Zc=ye.unstable_requestPaint,Q=ye.unstable_now,bc=ye.unstable_getCurrentPriorityLevel,to=ye.unstable_ImmediatePriority,As=ye.unstable_UserBlockingPriority,Mr=ye.unstable_NormalPriority,qc=ye.unstable_LowPriority,Ls=ye.unstable_IdlePriority,ll=null,Ue=null;function ed(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:rd,td=Math.log,nd=Math.LN2;function rd(e){return e>>>=0,e===0?32:31-(td(e)/nd|0)|0}var ar=64,sr=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Sn(s):(i&=o,i!==0&&(r=Sn(i)))}else o=n&~l,o!==0?r=Sn(o):i!==0&&(r=Sn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ie(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=ld(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Is(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function no(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Os(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rs,ro,Ms,Ds,Fs,hi=!1,ur=[],it=null,ot=null,at=null,Mn=new Map,Dn=new Map,tt=[],ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function mn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&ro(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function sd(e,t,n,r,l){switch(t){case"focusin":return it=mn(it,e,t,n,r,l),!0;case"dragenter":return ot=mn(ot,e,t,n,r,l),!0;case"mouseover":return at=mn(at,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Mn.set(i,mn(Mn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Dn.set(i,mn(Dn.get(i)||null,e,t,n,r,l)),!0}return!1}function Us(e){var t=St(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=_s(n),t!==null){e.blockedOn=t,Fs(e.priority,function(){Ms(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ci=r,n.target.dispatchEvent(r),ci=null}else return t=qn(n),t!==null&&ro(t),e.blockedOn=n,!1;t.shift()}return!0}function ea(e,t,n){Er(e)&&n.delete(t)}function ud(){hi=!1,it!==null&&Er(it)&&(it=null),ot!==null&&Er(ot)&&(ot=null),at!==null&&Er(at)&&(at=null),Mn.forEach(ea),Dn.forEach(ea)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,hi||(hi=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ud)))}function Fn(e){function t(l){return hn(l,e)}if(0<ur.length){hn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&hn(it,e),ot!==null&&hn(ot,e),at!==null&&hn(at,e),Mn.forEach(t),Dn.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Us(n),n.blockedOn===null&&tt.shift()}var Jt=Je.ReactCurrentBatchConfig,Fr=!0;function cd(e,t,n,r){var l=I,i=Jt.transition;Jt.transition=null;try{I=1,lo(e,t,n,r)}finally{I=l,Jt.transition=i}}function dd(e,t,n,r){var l=I,i=Jt.transition;Jt.transition=null;try{I=4,lo(e,t,n,r)}finally{I=l,Jt.transition=i}}function lo(e,t,n,r){if(Fr){var l=vi(e,t,n,r);if(l===null)Dl(e,t,r,Ur,n),qo(e,r);else if(sd(l,e,t,n,r))r.stopPropagation();else if(qo(e,r),t&4&&-1<ad.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&Rs(i),i=vi(e,t,n,r),i===null&&Dl(e,t,r,Ur,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var Ur=null;function vi(e,t,n,r){if(Ur=null,e=eo(r),e=St(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function $s(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bc()){case to:return 1;case As:return 4;case Mr:case qc:return 16;case Ls:return 536870912;default:return 16}default:return 16}}var rt=null,io=null,Nr=null;function Vs(){if(Nr)return Nr;var e,t=io,n=t.length,r,l="value"in rt?rt.value:rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Nr=l.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function ta(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cr:ta,this.isPropagationStopped=ta,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=we(sn),bn=V({},sn,{view:0,detail:0}),fd=we(bn),Tl,zl,vn,il=V({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Tl=e.screenX-vn.screenX,zl=e.screenY-vn.screenY):zl=Tl=0,vn=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),na=we(il),pd=V({},il,{dataTransfer:0}),md=we(pd),hd=V({},bn,{relatedTarget:0}),Pl=we(hd),vd=V({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=we(vd),yd=V({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=we(yd),wd=V({},sn,{data:0}),ra=we(wd),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ed[e])?!!t[e]:!1}function ao(){return Nd}var jd=V({},bn,{key:function(e){if(e.key){var t=kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cd=we(jd),_d=V({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),la=we(_d),Td=V({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),zd=we(Td),Pd=V({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ad=we(Pd),Ld=V({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=we(Ld),Od=[9,13,27,32],so=Ge&&"CompositionEvent"in window,Cn=null;Ge&&"documentMode"in document&&(Cn=document.documentMode);var Rd=Ge&&"TextEvent"in window&&!Cn,Bs=Ge&&(!so||Cn&&8<Cn&&11>=Cn),ia=" ",oa=!1;function Hs(e,t){switch(e){case"keyup":return Od.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dt=!1;function Md(e,t){switch(e){case"compositionend":return Ws(t);case"keypress":return t.which!==32?null:(oa=!0,ia);case"textInput":return e=t.data,e===ia&&oa?null:e;default:return null}}function Dd(e,t){if(Dt)return e==="compositionend"||!so&&Hs(e,t)?(e=Vs(),Nr=io=rt=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bs&&t.locale!=="ko"?null:t.data;default:return null}}var Fd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fd[e.type]:t==="textarea"}function Qs(e,t,n,r){Ss(r),t=$r(t,"onChange"),0<t.length&&(n=new oo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Un=null;function Ud(e){nu(e,0)}function ol(e){var t=$t(e);if(hs(t))return e}function $d(e,t){if(e==="change")return t}var Gs=!1;if(Ge){var Al;if(Ge){var Ll="oninput"in document;if(!Ll){var sa=document.createElement("div");sa.setAttribute("oninput","return;"),Ll=typeof sa.oninput=="function"}Al=Ll}else Al=!1;Gs=Al&&(!document.documentMode||9<document.documentMode)}function ua(){_n&&(_n.detachEvent("onpropertychange",Ys),Un=_n=null)}function Ys(e){if(e.propertyName==="value"&&ol(Un)){var t=[];Qs(t,Un,e,eo(e)),Cs(Ud,t)}}function Vd(e,t,n){e==="focusin"?(ua(),_n=t,Un=n,_n.attachEvent("onpropertychange",Ys)):e==="focusout"&&ua()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Un)}function Hd(e,t){if(e==="click")return ol(t)}function Wd(e,t){if(e==="input"||e==="change")return ol(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Qd;function $n(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!bl.call(t,l)||!Re(e[l],t[l]))return!1}return!0}function ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function da(e,t){var n=ca(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ca(n)}}function Ks(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ks(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xs(){for(var e=window,t=Ir();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gd(e){var t=Xs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ks(n.ownerDocument.documentElement,n)){if(r!==null&&uo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=da(n,i);var o=da(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yd=Ge&&"documentMode"in document&&11>=document.documentMode,Ft=null,gi=null,Tn=null,yi=!1;function fa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yi||Ft==null||Ft!==Ir(r)||(r=Ft,"selectionStart"in r&&uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&$n(Tn,r)||(Tn=r,r=$r(gi,"onSelect"),0<r.length&&(t=new oo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Il={},Js={};Ge&&(Js=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function al(e){if(Il[e])return Il[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Js)return Il[e]=t[n];return e}var Zs=al("animationend"),bs=al("animationiteration"),qs=al("animationstart"),eu=al("transitionend"),tu=new Map,pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){tu.set(e,t),Lt(t,[e])}for(var Ol=0;Ol<pa.length;Ol++){var Rl=pa[Ol],Kd=Rl.toLowerCase(),Xd=Rl[0].toUpperCase()+Rl.slice(1);ht(Kd,"on"+Xd)}ht(Zs,"onAnimationEnd");ht(bs,"onAnimationIteration");ht(qs,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(eu,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function ma(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kc(r,t,void 0,e),e.currentTarget=null}function nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;ma(l,s,d),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;ma(l,s,d),i=u}}}if(Rr)throw e=pi,Rr=!1,pi=null,e}function R(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(ru(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),ru(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[fr]){e[fr]=!0,cs.forEach(function(n){n!=="selectionchange"&&(Jd.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Ml("selectionchange",!1,t))}}function ru(e,t,n,r){switch($s(t)){case 1:var l=cd;break;case 4:l=dd;break;default:l=lo}n=l.bind(null,t,n,e),l=void 0,!fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=St(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Cs(function(){var d=i,v=eo(n),h=[];e:{var m=tu.get(e);if(m!==void 0){var x=oo,w=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":x=Cd;break;case"focusin":w="focus",x=Pl;break;case"focusout":w="blur",x=Pl;break;case"beforeblur":case"afterblur":x=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=zd;break;case Zs:case bs:case qs:x=gd;break;case eu:x=Ad;break;case"scroll":x=fd;break;case"wheel":x=Id;break;case"copy":case"cut":case"paste":x=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=la}var k=(t&4)!==0,D=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=Rn(c,f),g!=null&&k.push(Bn(c,g,p)))),D)break;c=c.return}0<k.length&&(m=new x(m,w,null,n,v),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==ci&&(w=n.relatedTarget||n.fromElement)&&(St(w)||w[Ye]))break e;if((x||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=d,w=w?St(w):null,w!==null&&(D=It(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(k=na,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=la,g="onPointerLeave",f="onPointerEnter",c="pointer"),D=x==null?m:$t(x),p=w==null?m:$t(w),m=new k(g,c+"leave",x,n,v),m.target=D,m.relatedTarget=p,g=null,St(v)===d&&(k=new k(f,c+"enter",w,n,v),k.target=p,k.relatedTarget=D,g=k),D=g,x&&w)t:{for(k=x,f=w,c=0,p=k;p;p=Ot(p))c++;for(p=0,g=f;g;g=Ot(g))p++;for(;0<c-p;)k=Ot(k),c--;for(;0<p-c;)f=Ot(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=Ot(k),f=Ot(f)}k=null}else k=null;x!==null&&ha(h,m,x,k,!1),w!==null&&D!==null&&ha(h,D,w,k,!0)}}e:{if(m=d?$t(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var E=$d;else if(aa(m))if(Gs)E=Wd;else{E=Bd;var j=Vd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Hd);if(E&&(E=E(e,d))){Qs(h,E,n,v);break e}j&&j(e,m,d),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&ii(m,"number",m.value)}switch(j=d?$t(d):window,e){case"focusin":(aa(j)||j.contentEditable==="true")&&(Ft=j,gi=d,Tn=null);break;case"focusout":Tn=gi=Ft=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,fa(h,n,v);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":fa(h,n,v)}var C;if(so)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Dt?Hs(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Bs&&n.locale!=="ko"&&(Dt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Dt&&(C=Vs()):(rt=v,io="value"in rt?rt.value:rt.textContent,Dt=!0)),j=$r(d,_),0<j.length&&(_=new ra(_,e,null,n,v),h.push({event:_,listeners:j}),C?_.data=C:(C=Ws(n),C!==null&&(_.data=C)))),(C=Rd?Md(e,n):Dd(e,n))&&(d=$r(d,"onBeforeInput"),0<d.length&&(v=new ra("onBeforeInput","beforeinput",null,n,v),h.push({event:v,listeners:d}),v.data=C))}nu(h,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rn(e,n),i!=null&&r.unshift(Bn(e,i,l)),i=Rn(e,t),i!=null&&r.push(Bn(e,i,l))),e=e.return}return r}function Ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ha(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Rn(n,i),u!=null&&o.unshift(Bn(n,u,s))):l||(u=Rn(n,i),u!=null&&o.push(Bn(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zd=/\r\n?/g,bd=/\u0000|\uFFFD/g;function va(e){return(typeof e=="string"?e:""+e).replace(Zd,`
`).replace(bd,"")}function pr(e,t,n){if(t=va(t),va(e)!==t&&n)throw Error(y(425))}function Vr(){}var xi=null,wi=null;function ki(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,ga=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof ga<"u"?function(e){return ga.resolve(null).then(e).catch(tf)}:Si;function tf(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ya(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Fe="__reactFiber$"+un,Hn="__reactProps$"+un,Ye="__reactContainer$"+un,Ei="__reactEvents$"+un,nf="__reactListeners$"+un,rf="__reactHandles$"+un;function St(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ya(e);e!==null;){if(n=e[Fe])return n;e=ya(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Fe]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function sl(e){return e[Hn]||null}var Ni=[],Vt=-1;function vt(e){return{current:e}}function M(e){0>Vt||(e.current=Ni[Vt],Ni[Vt]=null,Vt--)}function O(e,t){Vt++,Ni[Vt]=e.current,e.current=t}var mt={},le=vt(mt),de=vt(!1),_t=mt;function en(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Br(){M(de),M(le)}function xa(e,t,n){if(le.current!==mt)throw Error(y(168));O(le,t),O(de,n)}function lu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Vc(e)||"Unknown",l));return V({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,_t=le.current,O(le,e),O(de,de.current),!0}function wa(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=lu(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,M(de),M(le),O(le,e)):M(de),O(de,n)}var Be=null,ul=!1,Ul=!1;function iu(e){Be===null?Be=[e]:Be.push(e)}function lf(e){ul=!0,iu(e)}function gt(){if(!Ul&&Be!==null){Ul=!0;var e=0,t=I;try{var n=Be;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,ul=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Ps(to,gt),l}finally{I=t,Ul=!1}}return null}var Bt=[],Ht=0,Wr=null,Qr=0,ke=[],Se=0,Tt=null,He=1,We="";function wt(e,t){Bt[Ht++]=Qr,Bt[Ht++]=Wr,Wr=e,Qr=t}function ou(e,t,n){ke[Se++]=He,ke[Se++]=We,ke[Se++]=Tt,Tt=e;var r=He;e=We;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var i=32-Ie(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-Ie(t)+l|n<<l|r,We=i+e}else He=1<<i|n<<l|r,We=e}function co(e){e.return!==null&&(wt(e,1),ou(e,1,0))}function fo(e){for(;e===Wr;)Wr=Bt[--Ht],Bt[Ht]=null,Qr=Bt[--Ht],Bt[Ht]=null;for(;e===Tt;)Tt=ke[--Se],ke[Se]=null,We=ke[--Se],ke[Se]=null,He=ke[--Se],ke[Se]=null}var ge=null,he=null,F=!1,Le=null;function au(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ka(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(F){var t=he;if(t){var n=t;if(!ka(e,t)){if(ji(e))throw Error(y(418));t=st(n.nextSibling);var r=ge;t&&ka(e,t)?au(r,n):(e.flags=e.flags&-4097|2,F=!1,ge=e)}}else{if(ji(e))throw Error(y(418));e.flags=e.flags&-4097|2,F=!1,ge=e}}}function Sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function mr(e){if(e!==ge)return!1;if(!F)return Sa(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ki(e.type,e.memoizedProps)),t&&(t=he)){if(ji(e))throw su(),Error(y(418));for(;t;)au(e,t),t=st(t.nextSibling)}if(Sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?st(e.stateNode.nextSibling):null;return!0}function su(){for(var e=he;e;)e=st(e.nextSibling)}function tn(){he=ge=null,F=!1}function po(e){Le===null?Le=[e]:Le.push(e)}var of=Je.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ea(e){var t=e._init;return t(e._payload)}function uu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=ft(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,g){return c===null||c.tag!==6?(c=Gl(p,f.mode,g),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,g){var E=p.type;return E===Mt?v(f,c,p.props.children,g,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qe&&Ea(E)===c.type)?(g=l(c,p.props),g.ref=gn(f,c,p),g.return=f,g):(g=Lr(p.type,p.key,p.props,null,f.mode,g),g.ref=gn(f,c,p),g.return=f,g)}function d(f,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yl(p,f.mode,g),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function v(f,c,p,g,E){return c===null||c.tag!==7?(c=Ct(p,f.mode,g,E),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Gl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return p=Lr(c.type,c.key,c.props,null,f.mode,p),p.ref=gn(f,null,c),p.return=f,p;case Rt:return c=Yl(c,f.mode,p),c.return=f,c;case qe:var g=c._init;return h(f,g(c._payload),p)}if(kn(c)||fn(c))return c=Ct(c,f.mode,p,null),c.return=f,c;hr(f,c)}return null}function m(f,c,p,g){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(f,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:return p.key===E?u(f,c,p,g):null;case Rt:return p.key===E?d(f,c,p,g):null;case qe:return E=p._init,m(f,c,E(p._payload),g)}if(kn(p)||fn(p))return E!==null?null:v(f,c,p,g,null);hr(f,p)}return null}function x(f,c,p,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,s(c,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case lr:return f=f.get(g.key===null?p:g.key)||null,u(c,f,g,E);case Rt:return f=f.get(g.key===null?p:g.key)||null,d(c,f,g,E);case qe:var j=g._init;return x(f,c,p,j(g._payload),E)}if(kn(g)||fn(g))return f=f.get(p)||null,v(c,f,g,E,null);hr(c,g)}return null}function w(f,c,p,g){for(var E=null,j=null,C=c,_=c=0,H=null;C!==null&&_<p.length;_++){C.index>_?(H=C,C=null):H=C.sibling;var A=m(f,C,p[_],g);if(A===null){C===null&&(C=H);break}e&&C&&A.alternate===null&&t(f,C),c=i(A,c,_),j===null?E=A:j.sibling=A,j=A,C=H}if(_===p.length)return n(f,C),F&&wt(f,_),E;if(C===null){for(;_<p.length;_++)C=h(f,p[_],g),C!==null&&(c=i(C,c,_),j===null?E=C:j.sibling=C,j=C);return F&&wt(f,_),E}for(C=r(f,C);_<p.length;_++)H=x(C,f,_,p[_],g),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?_:H.key),c=i(H,c,_),j===null?E=H:j.sibling=H,j=H);return e&&C.forEach(function(Te){return t(f,Te)}),F&&wt(f,_),E}function k(f,c,p,g){var E=fn(p);if(typeof E!="function")throw Error(y(150));if(p=E.call(p),p==null)throw Error(y(151));for(var j=E=null,C=c,_=c=0,H=null,A=p.next();C!==null&&!A.done;_++,A=p.next()){C.index>_?(H=C,C=null):H=C.sibling;var Te=m(f,C,A.value,g);if(Te===null){C===null&&(C=H);break}e&&C&&Te.alternate===null&&t(f,C),c=i(Te,c,_),j===null?E=Te:j.sibling=Te,j=Te,C=H}if(A.done)return n(f,C),F&&wt(f,_),E;if(C===null){for(;!A.done;_++,A=p.next())A=h(f,A.value,g),A!==null&&(c=i(A,c,_),j===null?E=A:j.sibling=A,j=A);return F&&wt(f,_),E}for(C=r(f,C);!A.done;_++,A=p.next())A=x(C,f,_,A.value,g),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?_:A.key),c=i(A,c,_),j===null?E=A:j.sibling=A,j=A);return e&&C.forEach(function(cn){return t(f,cn)}),F&&wt(f,_),E}function D(f,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Mt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:e:{for(var E=p.key,j=c;j!==null;){if(j.key===E){if(E=p.type,E===Mt){if(j.tag===7){n(f,j.sibling),c=l(j,p.props.children),c.return=f,f=c;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qe&&Ea(E)===j.type){n(f,j.sibling),c=l(j,p.props),c.ref=gn(f,j,p),c.return=f,f=c;break e}n(f,j);break}else t(f,j);j=j.sibling}p.type===Mt?(c=Ct(p.props.children,f.mode,g,p.key),c.return=f,f=c):(g=Lr(p.type,p.key,p.props,null,f.mode,g),g.ref=gn(f,c,p),g.return=f,f=g)}return o(f);case Rt:e:{for(j=p.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Yl(p,f.mode,g),c.return=f,f=c}return o(f);case qe:return j=p._init,D(f,c,j(p._payload),g)}if(kn(p))return w(f,c,p,g);if(fn(p))return k(f,c,p,g);hr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Gl(p,f.mode,g),c.return=f,f=c),o(f)):n(f,c)}return D}var nn=uu(!0),cu=uu(!1),Gr=vt(null),Yr=null,Wt=null,mo=null;function ho(){mo=Wt=Yr=null}function vo(e){var t=Gr.current;M(Gr),e._currentValue=t}function _i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Yr=e,mo=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(mo!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Yr===null)throw Error(y(308));Wt=e,Yr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var Et=null;function go(e){Et===null?Et=[e]:Et.push(e)}function du(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,go(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,go(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,no(e,n)}}function Na(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;et=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;o=0,v=d=u=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=V({},h,m);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=x,u=h):v=v.next=x,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(v===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=h}}function ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var er={},$e=vt(er),Wn=vt(er),Qn=vt(er);function Nt(e){if(e===er)throw Error(y(174));return e}function xo(e,t){switch(O(Qn,t),O(Wn,e),O($e,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ai(t,e)}M($e),O($e,t)}function rn(){M($e),M(Wn),M(Qn)}function pu(e){Nt(Qn.current);var t=Nt($e.current),n=ai(t,e.type);t!==n&&(O(Wn,e),O($e,n))}function wo(e){Wn.current===e&&(M($e),M(Wn))}var U=vt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function ko(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var _r=Je.ReactCurrentDispatcher,Vl=Je.ReactCurrentBatchConfig,zt=0,$=null,Y=null,J=null,Jr=!1,zn=!1,Gn=0,af=0;function te(){throw Error(y(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,l,i){if(zt=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?df:ff,e=n(r,l),zn){i=0;do{if(zn=!1,Gn=0,25<=i)throw Error(y(301));i+=1,J=Y=null,t.updateQueue=null,_r.current=pf,e=n(r,l)}while(zn)}if(_r.current=Zr,t=Y!==null&&Y.next!==null,zt=0,J=Y=$=null,Jr=!1,t)throw Error(y(300));return e}function No(){var e=Gn!==0;return Gn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function _e(){if(Y===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=J===null?$.memoizedState:J.next;if(t!==null)J=t,Y=e;else{if(e===null)throw Error(y(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function Yn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,d=i;do{var v=d.lane;if((zt&v)===v)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,o=r):u=u.next=h,$.lanes|=v,Pt|=v}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=s,Re(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Re(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function mu(){}function hu(e,t){var n=$,r=_e(),l=t(),i=!Re(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,jo(yu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Kn(9,gu.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(y(349));zt&30||vu(n,t,l)}return l}function vu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gu(e,t,n,r){t.value=n,t.getSnapshot=r,xu(t)&&wu(e)}function yu(e,t,n){return n(function(){xu(t)&&wu(e)})}function xu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function wu(e){var t=Ke(e,1);t!==null&&Oe(t,e,1,-1)}function Ca(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=cf.bind(null,$,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return _e().memoizedState}function Tr(e,t,n,r){var l=De();$.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var l=_e();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&So(r,o.deps)){l.memoizedState=Kn(t,n,i,r);return}}$.flags|=e,l.memoizedState=Kn(1|t,n,i,r)}function _a(e,t){return Tr(8390656,8,e,t)}function jo(e,t){return cl(2048,8,e,t)}function Su(e,t){return cl(4,2,e,t)}function Eu(e,t){return cl(4,4,e,t)}function Nu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ju(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,Nu.bind(null,t,e),n)}function Co(){}function Cu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _u(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&So(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return zt&21?(Re(n,t)||(n=Is(),$.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function sf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{I=n,Vl.transition=r}}function zu(){return _e().memoizedState}function uf(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pu(e))Au(t,n);else if(n=du(e,t,n,r),n!==null){var l=oe();Oe(n,e,r,l),Lu(n,t,r)}}function cf(e,t,n){var r=dt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Au(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Re(s,o)){var u=t.interleaved;u===null?(l.next=l,go(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=du(e,t,l,r),n!==null&&(l=oe(),Oe(n,e,r,l),Lu(n,t,r))}}function Pu(e){var t=e.alternate;return e===$||t!==null&&t===$}function Au(e,t){zn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,no(e,n)}}var Zr={readContext:Ce,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},df={readContext:Ce,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:_a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,Nu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uf.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Ca,useDebugValue:Co,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Ca(!1),t=e[0];return e=sf.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=De();if(F){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Z===null)throw Error(y(349));zt&30||vu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,_a(yu.bind(null,r,i,e),[e]),r.flags|=2048,Kn(9,gu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=De(),t=Z.identifierPrefix;if(F){var n=We,r=He;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ff={readContext:Ce,useCallback:Cu,useContext:Ce,useEffect:jo,useImperativeHandle:ju,useInsertionEffect:Su,useLayoutEffect:Eu,useMemo:_u,useReducer:Bl,useRef:ku,useState:function(){return Bl(Yn)},useDebugValue:Co,useDeferredValue:function(e){var t=_e();return Tu(t,Y.memoizedState,e)},useTransition:function(){var e=Bl(Yn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:hu,useId:zu,unstable_isNewReconciler:!1},pf={readContext:Ce,useCallback:Cu,useContext:Ce,useEffect:jo,useImperativeHandle:ju,useInsertionEffect:Su,useLayoutEffect:Eu,useMemo:_u,useReducer:Hl,useRef:ku,useState:function(){return Hl(Yn)},useDebugValue:Co,useDeferredValue:function(e){var t=_e();return Y===null?t.memoizedState=e:Tu(t,Y.memoizedState,e)},useTransition:function(){var e=Hl(Yn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:hu,useId:zu,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=dt(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Oe(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=dt(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Oe(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=dt(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Oe(t,e,r,n),Cr(t,e,r))}};function Ta(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(l,i):!0}function Iu(e,t,n){var r=!1,l=mt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(l=fe(t)?_t:le.current,r=t.contextTypes,i=(r=r!=null)?en(e,l):mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function za(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function zi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},yo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ce(i):(i=fe(t)?_t:le.current,l.context=en(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ti(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mf=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,$i=r),Pi(e,t)},n}function Ru(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Pi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pi(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Pa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Tf.bind(null,e,t,n),t.then(e,e))}function Aa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function La(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var hf=Je.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?cu(t,null,n,r):nn(t,e.child,n,r)}function Ia(e,t,n,r,l){n=n.render;var i=t.ref;return Zt(t,l),r=Eo(e,t,n,r,i,l),n=No(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(F&&n&&co(t),t.flags|=1,ie(e,t,r,l),t.child)}function Oa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Oo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Mu(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(o,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if($n(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Ai(e,t,n,r,l)}function Du(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Gt,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Gt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(Gt,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(Gt,me),me|=r;return ie(e,t,l,n),t.child}function Fu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,n,r,l){var i=fe(n)?_t:le.current;return i=en(t,i),Zt(t,l),n=Eo(e,t,n,r,i,l),r=No(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(F&&r&&co(t),t.flags|=1,ie(e,t,n,l),t.child)}function Ra(e,t,n,r,l){if(fe(n)){var i=!0;Hr(t)}else i=!1;if(Zt(t,l),t.stateNode===null)zr(e,t),Iu(t,n,r),zi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=fe(n)?_t:le.current,d=en(t,d));var v=n.getDerivedStateFromProps,h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&za(t,o,r,d),et=!1;var m=t.memoizedState;o.state=m,Kr(t,r,o,l),u=t.memoizedState,s!==r||m!==u||de.current||et?(typeof v=="function"&&(Ti(t,n,v,r),u=t.memoizedState),(s=et||Ta(t,n,s,r,m,u,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Pe(t.type,s),o.props=d,h=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ce(u):(u=fe(n)?_t:le.current,u=en(t,u));var x=n.getDerivedStateFromProps;(v=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==u)&&za(t,o,r,u),et=!1,m=t.memoizedState,o.state=m,Kr(t,r,o,l);var w=t.memoizedState;s!==h||m!==w||de.current||et?(typeof x=="function"&&(Ti(t,n,x,r),w=t.memoizedState),(d=et||Ta(t,n,d,r,m,w,u)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Li(e,t,n,r,i,l)}function Li(e,t,n,r,l,i){Fu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&wa(t,n,!1),Xe(e,t,i);r=t.stateNode,hf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=nn(t,e.child,null,i),t.child=nn(t,null,s,i)):ie(e,t,s,i),t.memoizedState=r.state,l&&wa(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xa(e,t.context,!1),xo(e,t.containerInfo)}function Ma(e,t,n,r,l){return tn(),po(l),t.flags|=256,ie(e,t,n,r),t.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function Oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function $u(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(U,l&1),e===null)return Ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ml(o,r,0,null),e=Ct(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Oi(n),t.memoizedState=Ii,e):_o(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return vf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ft(s,i):(i=Ct(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Oi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ii,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _o(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vr(e,t,n,r){return r!==null&&po(r),nn(t,e.child,null,n),e=_o(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(y(422))),vr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=ml({mode:"visible",children:r.children},l,0,null),i=Ct(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&nn(t,e.child,null,o),t.child.memoizedState=Oi(o),t.memoizedState=Ii,i);if(!(t.mode&1))return vr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=Wl(i,r,void 0),vr(e,t,o,r)}if(s=(o&e.childLanes)!==0,ce||s){if(r=Z,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),Oe(r,e,l,-1))}return Io(),r=Wl(Error(y(421))),vr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=zf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,he=st(l.nextSibling),ge=t,F=!0,Le=null,e!==null&&(ke[Se++]=He,ke[Se++]=We,ke[Se++]=Tt,He=e.id,We=e.overflow,Tt=t),t=_o(t,r.children),t.flags|=4096,t)}function Da(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_i(e.return,t,n)}function Ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Vu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Da(e,n,t);else if(e.tag===19)Da(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gf(e,t,n){switch(t.tag){case 3:Uu(t),tn();break;case 5:pu(t);break;case 1:fe(t.type)&&Hr(t);break;case 4:xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(Gr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?$u(e,t,n):(O(U,U.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n)}return Xe(e,t,n)}var Bu,Ri,Hu,Wu;Bu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ri=function(){};Hu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Nt($e.current);var i=null;switch(n){case"input":l=ri(e,l),r=ri(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=oi(e,l),r=oi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}si(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(In.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(In.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&R("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yf(e,t,n){var r=t.pendingProps;switch(fo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Br(),ne(t),null;case 3:return r=t.stateNode,rn(),M(de),M(le),ko(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Hi(Le),Le=null))),Ri(e,t),ne(t),null;case 5:wo(t);var l=Nt(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=Nt($e.current),mr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Hn]=i,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(l=0;l<En.length;l++)R(En[l],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":Go(r,i),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},R("invalid",r);break;case"textarea":Ko(r,i),R("invalid",r)}si(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",""+s]):In.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&R("scroll",r)}switch(n){case"input":ir(r),Yo(r,i,!0);break;case"textarea":ir(r),Xo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ys(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fe]=t,e[Hn]=r,Bu(e,t,!1,!1),t.stateNode=e;e:{switch(o=ui(n,r),n){case"dialog":R("cancel",e),R("close",e),l=r;break;case"iframe":case"object":case"embed":R("load",e),l=r;break;case"video":case"audio":for(l=0;l<En.length;l++)R(En[l],e);l=r;break;case"source":R("error",e),l=r;break;case"img":case"image":case"link":R("error",e),R("load",e),l=r;break;case"details":R("toggle",e),l=r;break;case"input":Go(e,r),l=ri(e,r),R("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),R("invalid",e);break;case"textarea":Ko(e,r),l=oi(e,r),R("invalid",e);break;default:l=r}si(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?ks(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xs(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&On(e,u):typeof u=="number"&&On(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(In.hasOwnProperty(i)?u!=null&&i==="onScroll"&&R("scroll",e):u!=null&&Ji(e,i,u,o))}switch(n){case"input":ir(e),Yo(e,r,!1);break;case"textarea":ir(e),Xo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Nt(Qn.current),Nt($e.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ne(t),null;case 13:if(M(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&he!==null&&t.mode&1&&!(t.flags&128))su(),tn(),t.flags|=98560,i=!1;else if(i=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Fe]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Le!==null&&(Hi(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):Io())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return rn(),Ri(e,t),e===null&&Vn(t.stateNode.containerInfo),ne(t),null;case 10:return vo(t.type._context),ne(t),null;case 17:return fe(t.type)&&Br(),ne(t),null;case 19:if(M(U),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)yn(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xr(e),o!==null){for(t.flags|=128,yn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>on&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!F)return ne(t),null}else 2*Q()-i.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=U.current,O(U,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Lo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function xf(e,t){switch(fo(t),t.tag){case 1:return fe(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),M(de),M(le),ko(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wo(t),null;case 13:if(M(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(U),null;case 4:return rn(),null;case 10:return vo(t.type._context),null;case 22:case 23:return Lo(),null;case 24:return null;default:return null}}var gr=!1,re=!1,wf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Mi(e,t,n){try{n()}catch(r){B(e,t,r)}}var Fa=!1;function kf(e,t){if(xi=Fr,e=Xs(),uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,v=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(s=o+l),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=o),m===i&&++v===r&&(u=o),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wi={focusedElem:e,selectionRange:n},Fr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,D=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Pe(t.type,k),D);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){B(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Fa,Fa=!1,w}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Mi(t,n,i)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Di(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Hn],delete t[Ei],delete t[nf],delete t[rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function Ua(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}var b=null,Ae=!1;function be(e,t,n){for(n=n.child;n!==null;)Yu(e,t,n),n=n.sibling}function Yu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:re||Qt(n,t);case 6:var r=b,l=Ae;b=null,be(e,t,n),b=r,Ae=l,b!==null&&(Ae?(e=b,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):b.removeChild(n.stateNode));break;case 18:b!==null&&(Ae?(e=b,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),Fn(e)):Fl(b,n.stateNode));break;case 4:r=b,l=Ae,b=n.stateNode.containerInfo,Ae=!0,be(e,t,n),b=r,Ae=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mi(n,t,o),l=l.next}while(l!==r)}be(e,t,n);break;case 1:if(!re&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){B(n,t,s)}be(e,t,n);break;case 21:be(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,be(e,t,n),re=r):be(e,t,n);break;default:be(e,t,n)}}function $a(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var l=Pf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:b=s.stateNode,Ae=!1;break e;case 3:b=s.stateNode.containerInfo,Ae=!0;break e;case 4:b=s.stateNode.containerInfo,Ae=!0;break e}s=s.return}if(b===null)throw Error(y(160));Yu(i,o,l),b=null,Ae=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){B(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ku(t,e),t=t.sibling}function Ku(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Me(e),r&4){try{Pn(3,e,e.return),fl(3,e)}catch(k){B(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:ze(t,e),Me(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(ze(t,e),Me(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(k){B(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&vs(l,i),ui(s,o);var d=ui(s,i);for(o=0;o<u.length;o+=2){var v=u[o],h=u[o+1];v==="style"?ks(l,h):v==="dangerouslySetInnerHTML"?xs(l,h):v==="children"?On(l,h):Ji(l,v,h,d)}switch(s){case"input":li(l,i);break;case"textarea":gs(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Yt(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Yt(l,!!i.multiple,i.defaultValue,!0):Yt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Hn]=i}catch(k){B(e,e.return,k)}}break;case 6:if(ze(t,e),Me(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){B(e,e.return,k)}}break;case 3:if(ze(t,e),Me(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:ze(t,e),Me(e);break;case 13:ze(t,e),Me(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Po=Q())),r&4&&$a(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(re=(d=re)||v,ze(t,e),re=d):ze(t,e),Me(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(S=e,v=e.child;v!==null;){for(h=S=v;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Qt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){B(r,n,k)}}break;case 5:Qt(m,m.return);break;case 22:if(m.memoizedState!==null){Ba(h);continue}}x!==null?(x.return=m,S=x):Ba(h)}v=v.sibling}e:for(v=null,h=e;;){if(h.tag===5){if(v===null){v=h;try{l=h.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ws("display",o))}catch(k){B(e,e.return,k)}}}else if(h.tag===6){if(v===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){B(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;v===h&&(v=null),h=h.return}v===h&&(v=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(t,e),Me(e),r&4&&$a(e);break;case 21:break;default:ze(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var i=Ua(e);Ui(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Ua(e);Fi(e,s,o);break;default:throw Error(y(161))}}catch(u){B(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e,t,n){S=e,Xu(e)}function Xu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||gr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||re;s=gr;var d=re;if(gr=o,(re=u)&&!d)for(S=l;S!==null;)o=S,u=o.child,o.tag===22&&o.memoizedState!==null?Ha(l):u!==null?(u.return=o,S=u):Ha(l);for(;i!==null;)S=i,Xu(i),i=i.sibling;S=l,gr=s,re=d}Va(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Va(e)}}function Va(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ja(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ja(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var h=v.dehydrated;h!==null&&Fn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&Di(t)}catch(m){B(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ba(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ha(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(u){B(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){B(t,l,u)}}var i=t.return;try{Di(t)}catch(u){B(t,i,u)}break;case 5:var o=t.return;try{Di(t)}catch(u){B(t,o,u)}}}catch(u){B(t,t.return,u)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var Ef=Math.ceil,br=Je.ReactCurrentDispatcher,To=Je.ReactCurrentOwner,je=Je.ReactCurrentBatchConfig,L=0,Z=null,G=null,q=0,me=0,Gt=vt(0),K=0,Xn=null,Pt=0,pl=0,zo=0,An=null,ue=null,Po=0,on=1/0,Ve=null,qr=!1,$i=null,ct=null,yr=!1,lt=null,el=0,Ln=0,Vi=null,Pr=-1,Ar=0;function oe(){return L&6?Q():Pr!==-1?Pr:Pr=Q()}function dt(e){return e.mode&1?L&2&&q!==0?q&-q:of.transition!==null?(Ar===0&&(Ar=Is()),Ar):(e=I,e!==0||(e=window.event,e=e===void 0?16:$s(e.type)),e):1}function Oe(e,t,n,r){if(50<Ln)throw Ln=0,Vi=null,Error(y(185));Zn(e,n,r),(!(L&2)||e!==Z)&&(e===Z&&(!(L&2)&&(pl|=n),K===4&&nt(e,q)),pe(e,r),n===1&&L===0&&!(t.mode&1)&&(on=Q()+500,ul&&gt()))}function pe(e,t){var n=e.callbackNode;id(e,t);var r=Dr(e,e===Z?q:0);if(r===0)n!==null&&bo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bo(n),t===1)e.tag===0?lf(Wa.bind(null,e)):iu(Wa.bind(null,e)),ef(function(){!(L&6)&&gt()}),n=null;else{switch(Os(r)){case 1:n=to;break;case 4:n=As;break;case 16:n=Mr;break;case 536870912:n=Ls;break;default:n=Mr}n=rc(n,Ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ju(e,t){if(Pr=-1,Ar=0,L&6)throw Error(y(327));var n=e.callbackNode;if(bt()&&e.callbackNode!==n)return null;var r=Dr(e,e===Z?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=tl(e,r);else{t=r;var l=L;L|=2;var i=bu();(Z!==e||q!==t)&&(Ve=null,on=Q()+500,jt(e,t));do try{Cf();break}catch(s){Zu(e,s)}while(!0);ho(),br.current=i,L=l,G!==null?t=0:(Z=null,q=0,t=K)}if(t!==0){if(t===2&&(l=mi(e),l!==0&&(r=l,t=Bi(e,l))),t===1)throw n=Xn,jt(e,0),nt(e,r),pe(e,Q()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Nf(l)&&(t=tl(e,r),t===2&&(i=mi(e),i!==0&&(r=i,t=Bi(e,i))),t===1))throw n=Xn,jt(e,0),nt(e,r),pe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:kt(e,ue,Ve);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Po+500-Q(),10<t)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Si(kt.bind(null,e,ue,Ve),t);break}kt(e,ue,Ve);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ie(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ef(r/1960))-r,10<r){e.timeoutHandle=Si(kt.bind(null,e,ue,Ve),r);break}kt(e,ue,Ve);break;case 5:kt(e,ue,Ve);break;default:throw Error(y(329))}}}return pe(e,Q()),e.callbackNode===n?Ju.bind(null,e):null}function Bi(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=tl(e,t),e!==2&&(t=ue,ue=n,t!==null&&Hi(t)),e}function Hi(e){ue===null?ue=e:ue.push.apply(ue,e)}function Nf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Re(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~zo,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Wa(e){if(L&6)throw Error(y(327));bt();var t=Dr(e,0);if(!(t&1))return pe(e,Q()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=mi(e);r!==0&&(t=r,n=Bi(e,r))}if(n===1)throw n=Xn,jt(e,0),nt(e,t),pe(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,ue,Ve),pe(e,Q()),null}function Ao(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(on=Q()+500,ul&&gt())}}function At(e){lt!==null&&lt.tag===0&&!(L&6)&&bt();var t=L;L|=1;var n=je.transition,r=I;try{if(je.transition=null,I=1,e)return e()}finally{I=r,je.transition=n,L=t,!(L&6)&&gt()}}function Lo(){me=Gt.current,M(Gt)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(fo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:rn(),M(de),M(le),ko();break;case 5:wo(r);break;case 4:rn();break;case 13:M(U);break;case 19:M(U);break;case 10:vo(r.type._context);break;case 22:case 23:Lo()}n=n.return}if(Z=e,G=e=ft(e.current,null),q=me=t,K=0,Xn=null,zo=pl=Pt=0,ue=An=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Et=null}return e}function Zu(e,t){do{var n=G;try{if(ho(),_r.current=Zr,Jr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jr=!1}if(zt=0,J=Y=$=null,zn=!1,Gn=0,To.current=null,n===null||n.return===null){K=1,Xn=t,G=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=q,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,v=s,h=v.tag;if(!(v.mode&1)&&(h===0||h===11||h===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=Aa(o);if(x!==null){x.flags&=-257,La(x,o,s,i,t),x.mode&1&&Pa(i,d,t),t=x,u=d;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){Pa(i,d,t),Io();break e}u=Error(y(426))}}else if(F&&s.mode&1){var D=Aa(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),La(D,o,s,i,t),po(ln(u,s));break e}}i=u=ln(u,s),K!==4&&(K=2),An===null?An=[i]:An.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ou(i,u,t);Na(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Ru(i,s,t);Na(i,g);break e}}i=i.return}while(i!==null)}ec(n)}catch(E){t=E,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function bu(){var e=br.current;return br.current=Zr,e===null?Zr:e}function Io(){(K===0||K===3||K===2)&&(K=4),Z===null||!(Pt&268435455)&&!(pl&268435455)||nt(Z,q)}function tl(e,t){var n=L;L|=2;var r=bu();(Z!==e||q!==t)&&(Ve=null,jt(e,t));do try{jf();break}catch(l){Zu(e,l)}while(!0);if(ho(),L=n,br.current=r,G!==null)throw Error(y(261));return Z=null,q=0,K}function jf(){for(;G!==null;)qu(G)}function Cf(){for(;G!==null&&!Jc();)qu(G)}function qu(e){var t=nc(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?ec(e):G=t,To.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,G=null;return}}else if(n=yf(n,t,me),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);K===0&&(K=5)}function kt(e,t,n){var r=I,l=je.transition;try{je.transition=null,I=1,_f(e,t,n,r)}finally{je.transition=l,I=r}return null}function _f(e,t,n,r){do bt();while(lt!==null);if(L&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(od(e,i),e===Z&&(G=Z=null,q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,rc(Mr,function(){return bt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=je.transition,je.transition=null;var o=I;I=1;var s=L;L|=4,To.current=null,kf(e,n),Ku(n,e),Gd(wi),Fr=!!xi,wi=xi=null,e.current=n,Sf(n),Zc(),L=s,I=o,je.transition=i}else e.current=n;if(yr&&(yr=!1,lt=e,el=l),i=e.pendingLanes,i===0&&(ct=null),ed(n.stateNode),pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=$i,$i=null,e;return el&1&&e.tag!==0&&bt(),i=e.pendingLanes,i&1?e===Vi?Ln++:(Ln=0,Vi=e):Ln=0,gt(),null}function bt(){if(lt!==null){var e=Os(el),t=je.transition,n=I;try{if(je.transition=null,I=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,el=0,L&6)throw Error(y(331));var l=L;for(L|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(S=d;S!==null;){var v=S;switch(v.tag){case 0:case 11:case 15:Pn(8,v,i)}var h=v.child;if(h!==null)h.return=v,S=h;else for(;S!==null;){v=S;var m=v.sibling,x=v.return;if(Qu(v),v===d){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fl(9,s)}}catch(E){B(s,s.return,E)}if(s===o){S=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,S=g;break e}S=s.return}}if(L=l,gt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{I=n,je.transition=t}}return!1}function Qa(e,t,n){t=ln(n,t),t=Ou(e,t,1),e=ut(e,t,1),t=oe(),e!==null&&(Zn(e,1,t),pe(e,t))}function B(e,t,n){if(e.tag===3)Qa(e,e,n);else for(;t!==null;){if(t.tag===3){Qa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=ln(n,e),e=Ru(t,e,1),t=ut(t,e,1),e=oe(),t!==null&&(Zn(t,1,e),pe(t,e));break}}t=t.return}}function Tf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(q&n)===n&&(K===4||K===3&&(q&130023424)===q&&500>Q()-Po?jt(e,0):zo|=n),pe(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=oe();e=Ke(e,t),e!==null&&(Zn(e,t,n),pe(e,n))}function zf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function Pf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,gf(e,t,n);ce=!!(e.flags&131072)}else ce=!1,F&&t.flags&1048576&&ou(t,Qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var l=en(t,le.current);Zt(t,n),l=Eo(null,t,r,e,l,n);var i=No();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,Hr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,yo(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,zi(t,r,e,n),t=Li(null,t,r,!0,i,n)):(t.tag=0,F&&i&&co(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Lf(r),e=Pe(r,e),l){case 0:t=Ai(null,t,r,e,n);break e;case 1:t=Ra(null,t,r,e,n);break e;case 11:t=Ia(null,t,r,e,n);break e;case 14:t=Oa(null,t,r,Pe(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ai(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ra(e,t,r,l,n);case 3:e:{if(Uu(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,fu(e,t),Kr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=ln(Error(y(423)),t),t=Ma(e,t,r,n,l);break e}else if(r!==l){l=ln(Error(y(424)),t),t=Ma(e,t,r,n,l);break e}else for(he=st(t.stateNode.containerInfo.firstChild),ge=t,F=!0,Le=null,n=cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===l){t=Xe(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return pu(t),e===null&&Ci(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,ki(r,l)?o=null:i!==null&&ki(r,i)&&(t.flags|=32),Fu(e,t),ie(e,t,o,n),t.child;case 6:return e===null&&Ci(t),null;case 13:return $u(e,t,n);case 4:return xo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ia(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(Gr,r._currentValue),r._currentValue=o,i!==null)if(Re(i.value,o)){if(i.children===l.children&&!de.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qe(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?u.next=u:(u.next=v.next,v.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),_i(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),_i(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=Ce(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=Pe(r,t.pendingProps),l=Pe(r.type,l),Oa(e,t,r,l,n);case 15:return Mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),zr(e,t),t.tag=1,fe(r)?(e=!0,Hr(t)):e=!1,Zt(t,n),Iu(t,r,l),zi(t,r,l,n),Li(null,t,r,!0,e,n);case 19:return Vu(e,t,n);case 22:return Du(e,t,n)}throw Error(y(156,t.tag))};function rc(e,t){return Ps(e,t)}function Af(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Af(e,t,n,r)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return Oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bi)return 11;if(e===qi)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Oo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mt:return Ct(n.children,l,i,t);case Zi:o=8,l|=8;break;case ql:return e=Ne(12,n,t,l|2),e.elementType=ql,e.lanes=i,e;case ei:return e=Ne(13,n,t,l),e.elementType=ei,e.lanes=i,e;case ti:return e=Ne(19,n,t,l),e.elementType=ti,e.lanes=i,e;case ps:return ml(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ds:o=10;break e;case fs:o=9;break e;case bi:o=11;break e;case qi:o=14;break e;case qe:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Ct(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ps,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function If(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ro(e,t,n,r,l,i,o,s,u){return e=new If(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yo(i),e}function Of(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lc(e){if(!e)return mt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(fe(n))return lu(e,n,t)}return t}function ic(e,t,n,r,l,i,o,s,u){return e=Ro(n,r,!0,e,l,i,o,s,u),e.context=lc(null),n=e.current,r=oe(),l=dt(n),i=Qe(r,l),i.callback=t??null,ut(n,i,l),e.current.lanes=l,Zn(e,l,r),pe(e,r),e}function hl(e,t,n,r){var l=t.current,i=oe(),o=dt(l);return n=lc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,o),e!==null&&(Oe(e,l,o,i),Cr(e,l,o)),o}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ga(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mo(e,t){Ga(e,t),(e=e.alternate)&&Ga(e,t)}function Rf(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Do(e){this._internalRoot=e}vl.prototype.render=Do.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));hl(e,t,null,null)};vl.prototype.unmount=Do.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){hl(null,e,null,null)}),t[Ye]=null}};function vl(e){this._internalRoot=e}vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ds();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Us(e)}};function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ya(){}function Mf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=nl(o);i.call(d)}}var o=ic(t,r,e,0,null,!1,!1,"",Ya);return e._reactRootContainer=o,e[Ye]=o.current,Vn(e.nodeType===8?e.parentNode:e),At(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=nl(u);s.call(d)}}var u=Ro(e,0,!1,null,null,!1,!1,"",Ya);return e._reactRootContainer=u,e[Ye]=u.current,Vn(e.nodeType===8?e.parentNode:e),At(function(){hl(t,u,n,r)}),u}function yl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=nl(o);s.call(u)}}hl(t,o,e,l)}else o=Mf(n,t,e,l,r);return nl(o)}Rs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(no(t,n|1),pe(t,Q()),!(L&6)&&(on=Q()+500,gt()))}break;case 13:At(function(){var r=Ke(e,1);if(r!==null){var l=oe();Oe(r,e,1,l)}}),Mo(e,1)}};ro=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=oe();Oe(t,e,134217728,n)}Mo(e,134217728)}};Ms=function(e){if(e.tag===13){var t=dt(e),n=Ke(e,t);if(n!==null){var r=oe();Oe(n,e,t,r)}Mo(e,t)}};Ds=function(){return I};Fs=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};di=function(e,t,n){switch(t){case"input":if(li(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(y(90));hs(r),li(r,l)}}}break;case"textarea":gs(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};Ns=Ao;js=At;var Df={usingClientEntryPoint:!1,Events:[qn,$t,sl,Ss,Es,Ao]},xn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ts(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{ll=xr.inject(Ff),Ue=xr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fo(t))throw Error(y(200));return Of(e,t,null,n)};xe.createRoot=function(e,t){if(!Fo(e))throw Error(y(299));var n=!1,r="",l=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ro(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Do(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ts(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return At(e)};xe.hydrate=function(e,t,n){if(!gl(t))throw Error(y(200));return yl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Fo(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=oc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ic(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new vl(t)};xe.render=function(e,t,n){if(!gl(t))throw Error(y(200));return yl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!gl(e))throw Error(y(40));return e._reactRootContainer?(At(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};xe.unstable_batchedUpdates=Ao;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return yl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(e){console.error(e)}}ac(),as.exports=xe;var Uf=as.exports,Ka=Uf;Zl.createRoot=Ka.createRoot,Zl.hydrateRoot=Ka.hydrateRoot;const sc={chapter:0,flightPhase:"climb",selectedSubsystem:"propulsion",selectedScenario:"EX-01",activeFaultNode:null,selectedMitigation:null,openPanel:"none",motionMode:"normal",qualityMode:"high"};function $f(e,t){switch(t.type){case"SET_CHAPTER":return e.chapter===t.payload?e:{...e,chapter:t.payload,openPanel:"none",activeFaultNode:null};case"SET_FLIGHT_PHASE":return{...e,flightPhase:t.payload};case"SET_SUBSYSTEM":return{...e,selectedSubsystem:t.payload};case"SET_SCENARIO":return{...e,selectedScenario:t.payload,activeFaultNode:null,selectedMitigation:null};case"SET_FAULT_NODE":return{...e,activeFaultNode:t.payload};case"SET_MITIGATION":return{...e,selectedMitigation:t.payload};case"SET_PANEL":return{...e,openPanel:e.openPanel===t.payload?"none":t.payload};case"TOGGLE_MOTION_MODE":{const n=e.motionMode==="normal"?"reduced":"normal";return{...e,motionMode:n}}case"TOGGLE_QUALITY_MODE":{const n=e.qualityMode==="high"?"eco":"high";return{...e,qualityMode:n}}case"RESET_STATE":return sc;default:return e}}const uc=Ee.createContext(null),Vf=({children:e})=>{const[t,n]=Ee.useReducer($f,sc);Ee.useEffect(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches&&n({type:"TOGGLE_MOTION_MODE"})},[]),Ee.useEffect(()=>{t.motionMode==="reduced"?document.body.classList.add("reduced-motion"):document.body.classList.remove("reduced-motion")},[t.motionMode]),Ee.useEffect(()=>{t.qualityMode==="eco"?document.body.classList.add("eco-mode"):document.body.classList.remove("eco-mode")},[t.qualityMode]),Ee.useEffect(()=>{const l=i=>{var o;if(!["INPUT","TEXTAREA","SELECT"].includes((o=i.target)==null?void 0:o.tagName))if(i.key>="0"&&i.key<="5"){const s=parseInt(i.key,10);n({type:"SET_CHAPTER",payload:s})}else i.key==="Escape"&&(t.openPanel!=="none"?n({type:"SET_PANEL",payload:"none"}):t.chapter===0&&n({type:"SET_CHAPTER",payload:1}))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t.chapter,t.openPanel]);const r=l=>{n({type:"SET_CHAPTER",payload:l})};return a.jsx(uc.Provider,{value:{state:t,dispatch:n,goToChapter:r},children:e})},Ze=()=>{const e=Ee.useContext(uc);if(!e)throw new Error("useSafetyState 必须在 StateProvider 内部使用");return e},Bf=[{id:0,label:"0 觉醒",en:"AWAKENING"},{id:1,label:"I 升空",en:"ASCENT"},{id:2,label:"II 机器内部",en:"MACHINE"},{id:3,label:"III 失效边界",en:"FAILURE"},{id:4,label:"IV 工程信任",en:"TRUST"},{id:5,label:"V 结论与证据",en:"BEYOND"}],Hf=()=>{const{state:e,goToChapter:t,dispatch:n}=Ze();return a.jsxs("header",{className:"site-header",role:"banner",children:[a.jsxs("div",{className:"header-inner",children:[a.jsxs("div",{className:"header-brand",onClick:()=>t(0),role:"button",tabIndex:0,children:[a.jsx("span",{className:"brand-title",children:"BEYOND GRAVITY"}),a.jsx("span",{className:"brand-sub",children:"《超越重力：天空的代价》"})]}),a.jsx("nav",{className:"chapter-nav","aria-label":"六幕章节导航",children:Bf.map(r=>{const l=e.chapter===r.id;return a.jsxs("button",{className:`chapter-btn ${l?"active":""}`,onClick:()=>t(r.id),"aria-current":l?"step":void 0,title:`按快捷键 ${r.id} 快速切换`,children:[a.jsx("span",{className:"ch-num",children:r.label.split(" ")[0]}),a.jsx("span",{className:"ch-text",children:r.label.split(" ")[1]})]},r.id)})}),a.jsxs("div",{className:"header-controls",children:[a.jsx("button",{className:`control-pill ${e.motionMode==="reduced"?"active-pill":""}`,onClick:()=>n({type:"TOGGLE_MOTION_MODE"}),title:"切换低动效模式（适合低性能或眩晕敏感用户）",children:e.motionMode==="reduced"?"⚡ 静态模式":"🌊 动效正常"}),a.jsx("button",{className:`control-pill ${e.qualityMode==="eco"?"active-pill":""}`,onClick:()=>n({type:"TOGGLE_QUALITY_MODE"}),title:"切换低功耗渲染模式",children:e.qualityMode==="eco"?"🔋 节能模式":"✨ 电影质感"}),a.jsx("button",{className:"control-pill outline-pill",onClick:()=>n({type:"SET_PANEL",payload:"sources"}),title:"查看官方证据链与适航参考文献",children:"📖 证据文献"})]})]}),a.jsx("style",{children:`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(10, 14, 19, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--color-graphite-border);
          padding: 0 16px;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
          max-width: var(--max-content-width);
          margin: 0 auto;
          gap: 12px;
        }
        .header-brand {
          display: flex;
          align-items: baseline;
          gap: 8px;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
        }
        .brand-title {
          font-family: var(--font-family-cinematic);
          font-size: 16px;
          letter-spacing: 1.5px;
          color: var(--color-warm-white);
          font-weight: 900;
        }
        .brand-sub {
          font-size: 12px;
          color: var(--color-aluminum);
          display: none;
        }
        @media (min-width: 1024px) {
          .brand-sub {
            display: inline;
          }
        }
        .chapter-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .chapter-nav::-webkit-scrollbar {
          display: none;
        }
        .chapter-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          border-radius: 4px;
          color: var(--color-aluminum);
          font-size: 13px;
          white-space: nowrap;
          transition: background var(--transition-nav), color var(--transition-nav);
        }
        .chapter-btn:hover {
          color: var(--color-warm-white);
          background: rgba(184, 193, 200, 0.08);
        }
        .chapter-btn.active {
          color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
          font-weight: 600;
        }
        .ch-num {
          font-family: var(--font-family-mono);
          font-size: 11px;
          opacity: 0.8;
        }
        .header-controls {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .control-pill {
          padding: 5px 9px;
          border-radius: 4px;
          font-size: 12px;
          color: var(--color-aluminum);
          background: rgba(184, 193, 200, 0.08);
          border: 1px solid transparent;
          transition: all var(--transition-nav);
          white-space: nowrap;
        }
        .control-pill:hover {
          color: var(--color-warm-white);
          border-color: var(--color-graphite-border);
        }
        .control-pill.active-pill {
          background: rgba(217, 154, 69, 0.15);
          color: var(--color-amber);
          border-color: rgba(217, 154, 69, 0.3);
        }
        .control-pill.outline-pill {
          border-color: var(--color-graphite-border);
        }
        @media (max-width: 640px) {
          .ch-text {
            display: none;
          }
          .brand-title {
            font-size: 13px;
          }
          .control-pill {
            padding: 4px 6px;
            font-size: 11px;
          }
        }
      `})]})},ve=({type:e,text:t,sourceId:n,onClick:r})=>{const l=()=>{switch(e){case"F":return t||"F · 官方证实";case"A":return t||"A · 工程假设";case"D":return t||"D · 教学示范";case"U":return t||"U · 尚未核实"}};return a.jsxs("span",{className:`badge-tag tag-${e.toLowerCase()}`,title:n?`证据源: [${n}] 点击查看核验文献`:`事实类型: ${l()}`,onClick:r,role:r?"button":void 0,tabIndex:r?0:void 0,style:{cursor:r?"pointer":"default"},children:[a.jsxs("span",{children:["[",e,"]"]}),a.jsx("span",{children:l()}),n&&a.jsxs("span",{style:{opacity:.7},children:["#",n]})]})},Xa=()=>{const{goToChapter:e}=Ze();return a.jsxs("section",{className:"act-screen act-0","aria-labelledby":"act0-heading",children:[a.jsxs("div",{className:"act0-content",children:[a.jsxs("div",{className:"status-meta",children:[a.jsx(ve,{type:"F",text:"高校安全工程作业",sourceId:"S5"}),a.jsx("span",{className:"meta-text",children:"JOBY S4 eVTOL 参照研究 · 纯静态独立运行版"})]}),a.jsx("div",{className:"silhouette-preview","aria-hidden":"true",children:a.jsxs("svg",{viewBox:"0 0 600 240",className:"aircraft-svg",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"amberGlow",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[a.jsx("stop",{offset:"0%",stopColor:"#D99A45",stopOpacity:"0.8"}),a.jsx("stop",{offset:"100%",stopColor:"#D99A45",stopOpacity:"0.05"})]})}),a.jsx("path",{d:"M 50 150 Q 180 145 280 135 L 520 130 Q 550 132 570 140 Q 530 155 420 158 L 220 162 Z",fill:"rgba(184, 193, 200, 0.08)",stroke:"#B8C1C8",strokeWidth:"1.5"}),a.jsx("path",{d:"M 160 145 L 360 85 L 390 88 L 210 155 Z",fill:"rgba(217, 154, 69, 0.12)",stroke:"#D99A45",strokeWidth:"1.2"}),a.jsx("line",{x1:"360",y1:"85",x2:"360",y2:"60",stroke:"#D99A45",strokeWidth:"2"}),a.jsx("circle",{cx:"360",cy:"55",r:"30",fill:"none",stroke:"url(#amberGlow)",strokeDasharray:"3 3"}),a.jsx("path",{d:"M 500 130 L 550 70 L 565 72 L 525 133 Z",fill:"rgba(184, 193, 200, 0.08)",stroke:"#B8C1C8",strokeWidth:"1.2"}),a.jsx("circle",{cx:"550",cy:"70",r:"18",fill:"none",stroke:"#D99A45",strokeWidth:"1",strokeDasharray:"2 2"})]})}),a.jsx("h1",{id:"act0-heading",className:"main-title",children:"WHAT MAKES FLIGHT SAFE?"}),a.jsx("p",{className:"main-subtitle",children:"究竟是什么赋予飞行以安全？人类飞向天空的每一米，都必须由精确的工程证据偿付。"}),a.jsxs("div",{className:"act0-actions",children:[a.jsx("button",{className:"primary-btn",onClick:()=>e(1),autoFocus:!0,children:"进入安全分析 (Enter) →"}),a.jsx("button",{className:"secondary-btn",onClick:()=>e(1),children:"跳过片头 (Skip)"})]}),a.jsx("div",{className:"disclaimer-note",children:a.jsxs("small",{children:[a.jsx("strong",{children:"免责声明："}),"本项目为课程教学与系统安全工程研究，非 Joby Aviation 或 FAA/EASA 官方安全审定结果。"]})})]}),a.jsx("style",{children:`
        .act-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - var(--header-height) - 80px);
          text-align: center;
        }
        .act0-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .status-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .meta-text {
          font-size: 13px;
          color: var(--color-aluminum);
          font-family: var(--font-family-mono);
        }
        .silhouette-preview {
          width: 100%;
          max-width: 540px;
          margin: 10px 0;
        }
        .aircraft-svg {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 0 15px var(--color-amber-glow));
        }
        .main-title {
          font-family: var(--font-family-cinematic);
          font-size: clamp(28px, 5vw, 48px);
          letter-spacing: 2px;
          color: var(--color-warm-white);
          font-weight: 900;
          line-height: 1.15;
        }
        .main-subtitle {
          font-size: clamp(14px, 2vw, 17px);
          color: var(--color-aluminum);
          max-width: 600px;
          line-height: 1.7;
        }
        .act0-actions {
          display: flex;
          gap: 14px;
          margin-top: 10px;
        }
        .primary-btn {
          background: var(--color-amber);
          color: var(--color-graphite);
          font-weight: 700;
          padding: 11px 26px;
          border-radius: 4px;
          font-size: 14px;
          letter-spacing: 0.5px;
          transition: transform var(--transition-nav), background var(--transition-nav);
        }
        .primary-btn:hover {
          background: #e6a855;
          transform: translateY(-1px);
        }
        .secondary-btn {
          border: 1px solid var(--color-graphite-border);
          color: var(--color-aluminum);
          padding: 11px 22px;
          border-radius: 4px;
          font-size: 14px;
          transition: all var(--transition-nav);
        }
        .secondary-btn:hover {
          color: var(--color-warm-white);
          border-color: var(--color-aluminum);
        }
        .disclaimer-note {
          margin-top: 24px;
          color: var(--color-aluminum-dim);
          font-size: 12px;
          line-height: 1.5;
        }
      `})]})},Kl=[{id:"takeoff",name:"起飞阶段",en:"VTOL TAKEOFF",flightRegime:"垂直推力模态（旋翼仰角 90°）",tag:"F",source:"S5",hazards:["地面效应扰动造成非受控偏航","单旋翼瞬态功率跌落导致离地非对称倾斜"],systemFocus:"高倍率瞬态电能输出与多旋翼垂直姿态增稳控制",criticality:"高（近地安全裕度窄，无机翼升力储备）"},{id:"climb",name:"爬升与过渡",en:"TRANSITION CLIMB",flightRegime:"倾转过渡走廊（旋翼仰角 90° → 0°）",tag:"A",source:"EX-01",hazards:["倾转机构不同步卡阻","非对称气动分离导致翼尖剧烈失速"],systemFocus:"气动舵面与倾转推力矢量复合控制律调度",criticality:"极高（混合升力过渡，控制重构复杂度最高区间）"},{id:"cruise",name:"平飞巡航",en:"WING-BORNE CRUISE",flightRegime:"固定翼气动升力模态（旋翼仰角 0°，主翼承担全升力）",tag:"F",source:"S8",hazards:["空速管结冰偏置导致迎角超限","长航时热量积累导致逆变器热保护"],systemFocus:"巡航能效优化与机翼结构疲劳寿命监控",criticality:"中等（具备固定翼滑翔能力与较大空域高度裕度）"},{id:"approach",name:"进近减速",en:"INBOUND DECELERATION",flightRegime:"反向过渡模态（旋翼仰角 0° → 90°）",tag:"A",source:"EX-03",hazards:["涡环状态 (VRS) 气流重摄入导致沉降率骤增","导航多源传感器延迟引发进近轨迹超差"],systemFocus:"升力分配平滑重构与进近低噪声航线跟踪",criticality:"高（减速工况下推力快速重整，外界扰动敏感）"},{id:"landing",name:"垂直着陆",en:"VTOL TOUCHDOWN",flightRegime:"垂直着陆与悬停接地",tag:"F",source:"S9",hazards:["电池荷电状态 (SOC) 见底导致功率受限","起落架着地冲击引发二次结构振荡"],systemFocus:"末端动力储备判定与地面防倾覆减震",criticality:"高（可用剩余电量下限，着陆窗口不可延迟）"}],Wf=()=>{const{state:e,dispatch:t,goToChapter:n}=Ze(),r=Kl.find(l=>l.id===e.flightPhase)||Kl[0];return a.jsxs("section",{className:"chapter-view","aria-labelledby":"act1-title",children:[a.jsxs("div",{className:"chapter-header",children:[a.jsxs("div",{className:"chapter-tag-line",children:[a.jsx("span",{className:"chapter-code",children:"ACT I · THE ASCENT"}),a.jsx(ve,{type:"F",text:"飞行包线基线",sourceId:"S5"})]}),a.jsx("h2",{id:"act1-title",className:"chapter-heading",children:"升空：全飞行周期的工况与危险源映射"}),a.jsx("p",{className:"chapter-desc",children:"eVTOL 的飞行并非单一工况，而是从垂直起飞、倾转过渡到巡航滑翔的连续动力学转换。每个阶段的物理特性决定了独特的失效边界。"})]}),a.jsx("nav",{className:"phase-selector","aria-label":"飞行剖面阶段切换",children:Kl.map(l=>{const i=e.flightPhase===l.id;return a.jsxs("button",{className:`phase-card-btn ${i?"active":""}`,onClick:()=>t({type:"SET_FLIGHT_PHASE",payload:l.id}),"aria-current":i?"true":void 0,children:[a.jsx("div",{className:"phase-card-step",children:l.en}),a.jsx("div",{className:"phase-card-title",children:l.name})]},l.id)})}),a.jsxs("div",{className:"phase-detail-card",children:[a.jsxs("div",{className:"card-top-bar",children:[a.jsxs("div",{className:"card-title-group",children:[a.jsxs("h3",{className:"phase-title",children:[r.name,"（",r.en,"）"]}),a.jsx("span",{className:"phase-sub",children:r.flightRegime})]}),a.jsx(ve,{type:r.tag,sourceId:r.source})]}),a.jsxs("div",{className:"grid-two-col",children:[a.jsxs("div",{className:"panel-box",children:[a.jsx("h4",{className:"box-title",children:"典型运行工况与核心挑战"}),a.jsx("p",{className:"box-desc",children:r.systemFocus}),a.jsxs("div",{className:"metric-row",children:[a.jsx("span",{className:"metric-label",children:"安全严苛度："}),a.jsx("span",{className:"metric-val critical",children:r.criticality})]})]}),a.jsxs("div",{className:"panel-box",children:[a.jsx("h4",{className:"box-title",children:"主要危害源与致因机制 [FHA]"}),a.jsx("ul",{className:"hazard-list",children:r.hazards.map((l,i)=>a.jsxs("li",{className:"hazard-item",children:[a.jsx("span",{className:"bullet",children:"!"}),a.jsx("span",{children:l})]},i))})]})]}),a.jsxs("div",{className:"card-bottom-actions",children:[a.jsx("span",{className:"link-note",children:"该工况对应的系统物理架构与控制链路解析："}),a.jsx("button",{className:"text-cta-btn",onClick:()=>n(2),children:"深入子系统内部剖析 (进入 ACT II) →"})]})]}),a.jsx("style",{children:`
        .chapter-view {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .chapter-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .chapter-tag-line {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .chapter-code {
          font-family: var(--font-family-mono);
          font-size: 13px;
          color: var(--color-amber);
          font-weight: 700;
          letter-spacing: 1px;
        }
        .chapter-heading {
          font-size: clamp(22px, 3.5vw, 32px);
          font-weight: 800;
          color: var(--color-warm-white);
        }
        .chapter-desc {
          color: var(--color-aluminum);
          max-width: 880px;
          line-height: 1.7;
        }
        .phase-selector {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 10px;
        }
        .phase-card-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 14px 16px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
        }
        .phase-card-btn:hover {
          border-color: var(--color-aluminum);
          background: var(--color-graphite-elevated);
        }
        .phase-card-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.1);
          box-shadow: 0 0 12px var(--color-amber-glow);
        }
        .phase-card-step {
          font-size: 11px;
          color: var(--color-aluminum-dim);
          font-family: var(--font-family-mono);
        }
        .phase-card-title {
          font-size: 15px;
          color: var(--color-warm-white);
          font-weight: 600;
          margin-top: 4px;
        }
        .phase-detail-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 16px;
        }
        .phase-title {
          font-size: 20px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .phase-sub {
          font-size: 13px;
          color: var(--color-aluminum);
        }
        .grid-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 800px) {
          .grid-two-col {
            grid-template-columns: 1fr;
          }
        }
        .panel-box {
          background: var(--color-graphite-elevated);
          padding: 16px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
        }
        .box-title {
          font-size: 14px;
          color: var(--color-amber);
          margin-bottom: 10px;
          font-weight: 600;
        }
        .box-desc {
          font-size: 14px;
          color: var(--color-warm-white);
          line-height: 1.6;
        }
        .metric-row {
          margin-top: 14px;
          font-size: 13px;
          display: flex;
          gap: 6px;
        }
        .metric-label {
          color: var(--color-aluminum);
        }
        .metric-val.critical {
          color: var(--color-risk-red);
          font-weight: 600;
        }
        .hazard-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .hazard-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .bullet {
          color: var(--color-amber);
          font-weight: 900;
          font-family: var(--font-family-mono);
        }
        .card-bottom-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid var(--color-graphite-border);
          padding-top: 16px;
        }
        .link-note {
          font-size: 13px;
          color: var(--color-aluminum);
        }
        .text-cta-btn {
          color: var(--color-amber);
          font-weight: 600;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap var(--transition-nav);
        }
        .text-cta-btn:hover {
          gap: 10px;
          color: #e6a855;
        }
      `})]})},Xl=[{id:"propulsion",name:"分布式电力推进 (DEP)",en:"PROPULSION & TILTING",tag:"F",source:"J1",functionDesc:"6 套外置倾转旋翼与永磁同步电机，提供垂直升力与水平巡航推力转换。",failureMode:"旋翼变桨机构卡死、电机绕组相间短路、倾转机构不同步失衡。",safeguard:"独立电机控制器隔离、各旋翼独立姿态控制律容错重构、倾转死区监测。",evidenceNote:"Joby 公开宣传 6 旋翼冗余与独立倾转架构，非对称容错推力由教学模型 [A] 模拟。"},{id:"power",name:"高压动力电池与配电链路",en:"ENERGY & BUS DISTRIBUTION",tag:"A",source:"M1",functionDesc:"多组独立高压锂离子动力电池包与分段隔离式高压母线网络，负责全机供电。",failureMode:"单体电芯内部微短路引发热失控连锁蔓延、主高压接触器黏连或误分断。",safeguard:"耐火物理隔离舱、BMS 实时阻抗/温度多点监控、热烟气定向泄放阀。",evidenceNote:"电池热蔓延防护标准依据 DO-311A 航空储能审定基线，具体分舱尺寸为工程假设 [A]。"},{id:"avionics",name:"三余度/四余度电传飞控",en:"FLIGHT CONTROL COMPUTERS",tag:"F",source:"J1",functionDesc:"多通道异构飞行控制计算机，采集动静压、IMU、姿态数据并运算分配指令。",failureMode:"共因软件逻辑死锁、传感器非高斯瞬态偏置、多总线通信时钟严重脱步。",safeguard:"非相似硬件通道架构、表决算法 (2oo3/3oo4)、硬件看门狗与安全降级备份律。",evidenceNote:"厂商公开宣布采用四重冗余飞控计算单元；控制律切换机制参考 ARP4754A [M2]。"},{id:"structures",name:"全碳纤维复合材料机体",en:"PRIMARY AIRFRAME & WINGS",tag:"F",source:"J1",functionDesc:"主翼、双尾撑、V 尾及座舱一体化全复合材料机身，兼顾极致轻量化与刚度。",failureMode:"多次垂直悬停冲击疲劳微裂纹、外来物损伤 (FOD) 导致的不可见脱层破坏。",safeguard:"损伤容限设计、结构健康监测传感器 (SHM)、超声波无损探伤定期检修程序。",evidenceNote:"机身材料为官方公开信息；结构疲劳损伤容限符合 FAR Part 23 / 27 审定准则。"},{id:"actuators",name:"电伺服倾转与舵面执行机构",en:"ELECTROMECHANICAL ACTUATION",tag:"A",source:"S8",functionDesc:"电动机械伺服作动筒 (EMA)，驱动 6 组推进倾转短舱和副翼、升降副翼。",failureMode:"滚珠丝杠机械锁死、驱动电机过载发热卡阻、传动轴断裂。",safeguard:"双绕组备份驱动电机、无动力自锁/解脱机构、舵面位置差动反馈交叉比对。",evidenceNote:"EMA 机电作动系统失效率模型基于行业通用教学标准，具体执行机构构造为假设 [A]。"},{id:"operations",name:"起降场与运营环境感知",en:"ENVIRONMENT & OPS",tag:"F",source:"S6",functionDesc:"垂直起降场 (Vertiport) 微气象雷达、地面充电快速插口及城市微气候感知系统。",failureMode:"高楼狭管阵风剪切、城市低空鸟击、近地扬尘吸入电机轴承导致散热恶化。",safeguard:"起降走廊实时微气象网络联动、进近航线动态避风禁飞区、地面防风导流设计。",evidenceNote:"FAA AAM 运营概念官方发布白皮书 [S6]；起降场微气候要求参考通用直升机场规范。"}],Qf=()=>{const{state:e,dispatch:t,goToChapter:n}=Ze(),r=Xl.find(l=>l.id===e.selectedSubsystem)||Xl[0];return a.jsxs("section",{className:"chapter-view","aria-labelledby":"act2-title",children:[a.jsxs("div",{className:"chapter-header",children:[a.jsxs("div",{className:"chapter-tag-line",children:[a.jsx("span",{className:"chapter-code",children:"ACT II · INSIDE THE MACHINE"}),a.jsx(ve,{type:"F",text:"子系统架构",sourceId:"J1"})]}),a.jsx("h2",{id:"act2-title",className:"chapter-heading",children:"机器内部：六大核心子系统技术剖析"}),a.jsx("p",{className:"chapter-desc",children:"打破“未来飞行汽车”的黑盒。探索分布式电力推进（DEP）、高压能量链路与四余度飞控之间的物理拓扑与安全防护屏障。"})]}),a.jsx("div",{className:"subsystem-tabs",role:"tablist",children:Xl.map(l=>{const i=e.selectedSubsystem===l.id;return a.jsxs("button",{role:"tab","aria-selected":i,className:`sub-tab-btn ${i?"active":""}`,onClick:()=>t({type:"SET_SUBSYSTEM",payload:l.id}),children:[a.jsx("span",{className:"sub-en",children:l.en}),a.jsx("span",{className:"sub-name",children:l.name})]},l.id)})}),a.jsxs("div",{className:"subsystem-body-grid",children:[a.jsxs("div",{className:"diagram-container",children:[a.jsxs("div",{className:"diagram-header",children:[a.jsx("span",{className:"diagram-label",children:"2D 矢量技术解剖拓扑"}),a.jsx(ve,{type:r.tag,sourceId:r.source})]}),a.jsx("div",{className:"svg-frame",role:"img","aria-label":`子系统拓扑图 - ${r.name}`,children:a.jsxs("svg",{viewBox:"0 0 600 340",className:"tech-schematic-svg",children:[a.jsx("rect",{width:"600",height:"340",fill:"#0E141B",rx:"8",stroke:"rgba(184, 193, 200, 0.15)"}),a.jsx("defs",{children:a.jsx("pattern",{id:"smallGrid",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:a.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:"rgba(184, 193, 200, 0.04)",strokeWidth:"0.5"})})}),a.jsx("rect",{width:"600",height:"340",fill:"url(#smallGrid)"}),a.jsx("ellipse",{cx:"300",cy:"170",rx:"220",ry:"80",fill:"none",stroke:"rgba(184, 193, 200, 0.2)",strokeWidth:"1",strokeDasharray:"4 4"}),r.id==="propulsion"&&a.jsxs("g",{className:"highlight-group",children:[a.jsx("circle",{cx:"120",cy:"130",r:"28",fill:"rgba(217, 154, 69, 0.2)",stroke:"#D99A45",strokeWidth:"2"}),a.jsx("text",{x:"120",y:"135",fill:"#F2EFE7",fontSize:"11",textAnchor:"middle",children:"翼尖旋翼 #1"}),a.jsx("circle",{cx:"480",cy:"130",r:"28",fill:"rgba(217, 154, 69, 0.2)",stroke:"#D99A45",strokeWidth:"2"}),a.jsx("text",{x:"480",y:"135",fill:"#F2EFE7",fontSize:"11",textAnchor:"middle",children:"翼尖旋翼 #6"}),a.jsx("circle",{cx:"210",cy:"110",r:"24",fill:"rgba(217, 154, 69, 0.15)",stroke:"#D99A45",strokeWidth:"1.5"}),a.jsx("circle",{cx:"390",cy:"110",r:"24",fill:"rgba(217, 154, 69, 0.15)",stroke:"#D99A45",strokeWidth:"1.5"}),a.jsx("circle",{cx:"260",cy:"220",r:"22",fill:"rgba(217, 154, 69, 0.15)",stroke:"#D99A45",strokeWidth:"1.5"}),a.jsx("circle",{cx:"340",cy:"220",r:"22",fill:"rgba(217, 154, 69, 0.15)",stroke:"#D99A45",strokeWidth:"1.5"}),a.jsx("line",{x1:"120",y1:"130",x2:"480",y2:"130",stroke:"#D99A45",strokeWidth:"1",strokeDasharray:"3 3"})]}),r.id==="power"&&a.jsxs("g",{className:"highlight-group",children:[a.jsx("rect",{x:"230",y:"140",width:"140",height:"60",rx:"6",fill:"rgba(217, 154, 69, 0.25)",stroke:"#D99A45",strokeWidth:"2"}),a.jsx("text",{x:"300",y:"174",fill:"#F2EFE7",fontSize:"12",textAnchor:"middle",fontWeight:"bold",children:"高压主电池舱 (800V)"}),a.jsx("line",{x1:"230",y1:"170",x2:"140",y2:"170",stroke:"#D99A45",strokeWidth:"1.5"}),a.jsx("line",{x1:"370",y1:"170",x2:"460",y2:"170",stroke:"#D99A45",strokeWidth:"1.5"}),a.jsx("rect",{x:"110",y:"155",width:"30",height:"30",fill:"rgba(184, 193, 200, 0.2)",stroke:"#B8C1C8"}),a.jsx("rect",{x:"460",y:"155",width:"30",height:"30",fill:"rgba(184, 193, 200, 0.2)",stroke:"#B8C1C8"})]}),r.id==="avionics"&&a.jsxs("g",{className:"highlight-group",children:[a.jsx("rect",{x:"250",y:"90",width:"100",height:"50",rx:"4",fill:"rgba(78, 122, 148, 0.3)",stroke:"#4E7A94",strokeWidth:"2"}),a.jsx("text",{x:"300",y:"120",fill:"#8EC2E6",fontSize:"12",textAnchor:"middle",fontWeight:"bold",children:"四余度 FCC 主控"}),a.jsx("circle",{cx:"270",cy:"115",r:"4",fill:"#D99A45"}),a.jsx("circle",{cx:"290",cy:"115",r:"4",fill:"#D99A45"}),a.jsx("circle",{cx:"310",cy:"115",r:"4",fill:"#D99A45"}),a.jsx("circle",{cx:"330",cy:"115",r:"4",fill:"#D99A45"}),a.jsx("line",{x1:"300",y1:"140",x2:"300",y2:"230",stroke:"#4E7A94",strokeWidth:"1",strokeDasharray:"2 2"})]}),r.id!=="propulsion"&&r.id!=="power"&&r.id!=="avionics"&&a.jsxs("g",{className:"highlight-group",children:[a.jsx("circle",{cx:"300",cy:"170",r:"60",fill:"rgba(184, 193, 200, 0.15)",stroke:"#B8C1C8",strokeWidth:"2"}),a.jsx("text",{x:"300",y:"175",fill:"#F2EFE7",fontSize:"13",textAnchor:"middle",children:r.name}),a.jsx("line",{x1:"300",y1:"110",x2:"300",y2:"60",stroke:"#B8C1C8",strokeWidth:"1"}),a.jsx("line",{x1:"300",y1:"230",x2:"300",y2:"280",stroke:"#B8C1C8",strokeWidth:"1"})]})]})}),a.jsxs("p",{className:"diagram-caption",children:["图 2.1: ",r.name," 物理安装拓扑与隔离边界示意图"]})]}),a.jsxs("div",{className:"subsystem-info-panel",children:[a.jsxs("div",{className:"info-block",children:[a.jsx("h4",{className:"info-title",children:"核心功能与设计定位"}),a.jsx("p",{className:"info-text",children:r.functionDesc})]}),a.jsxs("div",{className:"info-block danger-block",children:[a.jsx("h4",{className:"info-title-danger",children:"潜在失效模式 (FMEA 危险源)"}),a.jsx("p",{className:"info-text",children:r.failureMode})]}),a.jsxs("div",{className:"info-block success-block",children:[a.jsx("h4",{className:"info-title-success",children:"工程防护与冗余措施"}),a.jsx("p",{className:"info-text",children:r.safeguard})]}),a.jsxs("div",{className:"info-block note-block",children:[a.jsx("h4",{className:"info-title-note",children:"公开事实与教学假设说明"}),a.jsx("p",{className:"info-text-dim",children:r.evidenceNote})]}),a.jsx("button",{className:"link-fmea-btn",onClick:()=>n(3),children:"观察该部件在故障场景中的连锁因果链 (进入 ACT III) →"})]})]}),a.jsx("style",{children:`
        .subsystem-tabs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 8px;
        }
        .sub-tab-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 12px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
        }
        .sub-tab-btn:hover {
          border-color: var(--color-aluminum);
          background: var(--color-graphite-elevated);
        }
        .sub-tab-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
        }
        .sub-en {
          display: block;
          font-size: 10px;
          color: var(--color-aluminum-dim);
          font-family: var(--font-family-mono);
        }
        .sub-name {
          display: block;
          font-size: 13.5px;
          color: var(--color-warm-white);
          font-weight: 600;
          margin-top: 2px;
        }
        .subsystem-body-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 900px) {
          .subsystem-body-grid {
            grid-template-columns: 1fr;
          }
        }
        .diagram-container {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .diagram-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .diagram-label {
          font-size: 13px;
          color: var(--color-aluminum);
          font-family: var(--font-family-mono);
        }
        .svg-frame {
          width: 100%;
        }
        .tech-schematic-svg {
          width: 100%;
          height: auto;
          display: block;
        }
        .diagram-caption {
          font-size: 12px;
          color: var(--color-aluminum-dim);
          text-align: center;
        }
        .subsystem-info-panel {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .info-block {
          background: var(--color-graphite-elevated);
          padding: 12px 14px;
          border-radius: 6px;
          border-left: 3px solid var(--color-aluminum-dim);
        }
        .danger-block {
          border-left-color: var(--color-risk-red);
        }
        .success-block {
          border-left-color: var(--color-amber);
        }
        .note-block {
          border-left-color: var(--color-tech-blue);
        }
        .info-title {
          font-size: 13px;
          color: var(--color-warm-white);
          margin-bottom: 4px;
        }
        .info-title-danger {
          font-size: 13px;
          color: #f1928b;
          margin-bottom: 4px;
        }
        .info-title-success {
          font-size: 13px;
          color: #f3c47e;
          margin-bottom: 4px;
        }
        .info-title-note {
          font-size: 13px;
          color: #8ec2e6;
          margin-bottom: 4px;
        }
        .info-text {
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .info-text-dim {
          font-size: 12.5px;
          color: var(--color-aluminum);
          line-height: 1.5;
        }
        .link-fmea-btn {
          margin-top: 6px;
          padding: 12px;
          background: rgba(217, 154, 69, 0.12);
          border: 1px solid var(--color-amber);
          color: var(--color-amber);
          font-weight: 600;
          font-size: 13.5px;
          border-radius: 6px;
          text-align: center;
          transition: all var(--transition-nav);
        }
        .link-fmea-btn:hover {
          background: var(--color-amber);
          color: var(--color-graphite);
        }
      `})]})},Jl=[{id:"EX-01",title:"推进链异常推力不一致",context:"悬停或倾转过渡阶段（低空垂直姿态向水平姿态转换）",hazard:"单侧某推进单元电机扭矩突降或推力丢失（如 2 号前翼电机）",mechanism:"逆变器相电流检测偏移或电机绕组过热保护触发非对称限幅",propagation:["第 2 号外置旋翼推力骤减 40%","左翼升力力矩骤失，产生剧烈左滚与向左偏航力矩","飞控系统必须瞬间提升其余 5 旋翼转速与倾角进行配平","姿态控制裕度 (Control Margin) 严重收窄至极限"],consequence:"机组操纵负荷激增；若处于低高度悬停，可能发生接地偏摆或进近硬着陆。",severity:"危急 (Critical / Catastrophic 取决于故障阶段)",mitigation:"推力非对称自适应重构算法、双绕组冗余电机、倾转走廊高度限制。",verification:"6 自由度铁鸟台架故障注入、全飞行包线极限蒙特卡洛仿真。",residualRisk:"极限强风剪切叠加单旋翼失效时的多重偶发边界工况。",tag:"A",source:"EX-01"},{id:"EX-02",title:"高压动力电池局部热失控",context:"高倍率大电流爬升工况或地面大功率超级快充",hazard:"某电池模块内单个电芯内部微短路或机械应力微穿孔",mechanism:"单体电芯剧烈自加速副反应，温度突破热失控自放热临界阈值 (>150°C)",propagation:["单体电芯释气并产生高温局部射流","热量传导至相邻电芯与采样线束","BMS 检测到异常温升与单体电压骤降，触发紧急断电报警","该动力分段高压接触器切断，全机可用电量与峰值放电功率缩水"],consequence:"垂直着陆阶段可用放电倍率受限，飞行时间与备降距离窗口急剧缩短。",severity:"灾难性 (Catastrophic，若热失控向临近模组失控蔓延)",mitigation:"气凝胶隔热屏障、相变吸热层、定向排气防爆阀、双向电气隔离接触器。",verification:"单体过充/针刺破坏性试验、模组级火烧不蔓延试验 (DO-311A)。",residualRisk:"微小制造缺陷在全寿命周期老化震动后诱发的随机内短路。",tag:"A",source:"EX-02"},{id:"EX-03",title:"动静压传感器结冰与数据偏置",context:"进近减速穿云阶段（高湿低温微气象环境）",hazard:"机头空速管加热失效引发局部结冰，空速数据读数虚高或冻结",mechanism:"飞控计算机接收到被误导的指示空速 (IAS)，控制律错误判断当前升力充裕",propagation:["传感器通道 1 空速偏高 30 节，通道 2/3 数据出现渐进分歧","表决算法触发延迟或误将真实低速判定为故障","自动倾转指令未能及时后倾旋翼补充垂直推力","真实空速跌破失速临界线，产生未预警沉降"],consequence:"飞行器轨迹大幅下坠偏离进近下滑道，触发近地告警并增加飞行员接管负荷。",severity:"危险 (Hazardous)",mitigation:"多源异构空速估算（结合 GPS 地速、合成迎角、电机反扭矩融合估算）。",verification:"人在环路飞行模拟机结冰故障注入、传感器故障注入飞行试验。",residualRisk:"极端恶劣气象下多源传感器共因失效模式。",tag:"A",source:"EX-03"}],Gf=()=>{const{state:e,dispatch:t,goToChapter:n}=Ze(),r=Jl.find(l=>l.id===e.selectedScenario)||Jl[0];return a.jsxs("section",{className:"chapter-view","aria-labelledby":"act3-title",children:[a.jsxs("div",{className:"chapter-header",children:[a.jsxs("div",{className:"chapter-tag-line",children:[a.jsx("span",{className:"chapter-code",children:"ACT III · THE EDGE OF FAILURE"}),a.jsx(ve,{type:"A",text:"教学故障因果推演",sourceId:"M1"})]}),a.jsx("h2",{id:"act3-title",className:"chapter-heading",children:"失效边界：因果传播链与动态风险推演"}),a.jsx("p",{className:"chapter-desc",children:"安全并非来自“永不损坏”的幻想，而是源于对每一次失效如何发生、如何扩散、如何被遏制的精密推演。以下选取三个关键教学假设场景进行因果链展示。"})]}),a.jsx("div",{className:"scenario-switcher",children:Jl.map(l=>{const i=e.selectedScenario===l.id;return a.jsxs("button",{className:`scenario-btn ${i?"active":""}`,onClick:()=>t({type:"SET_SCENARIO",payload:l.id}),children:[a.jsx("span",{className:"sc-id",children:l.id}),a.jsx("span",{className:"sc-title",children:l.title})]},l.id)})}),a.jsxs("div",{className:"causal-pipeline-card",children:[a.jsxs("div",{className:"pipeline-header",children:[a.jsxs("div",{className:"header-info",children:[a.jsxs("h3",{className:"scenario-name",children:["情境分析：",r.title]}),a.jsxs("span",{className:"scenario-ctx",children:[a.jsx("strong",{children:"工况环境："}),r.context]})]}),a.jsx(ve,{type:r.tag,sourceId:r.source})]}),a.jsxs("div",{className:"propagation-chain",children:[a.jsxs("div",{className:"chain-step step-hazard",children:[a.jsx("div",{className:"step-tag",children:"01 · 始发危险源"}),a.jsx("div",{className:"step-content",children:r.hazard})]}),a.jsxs("div",{className:"chain-step step-mech",children:[a.jsx("div",{className:"step-tag",children:"02 · 微观致因机制"}),a.jsx("div",{className:"step-content",children:r.mechanism})]}),a.jsxs("div",{className:"chain-step step-prop",children:[a.jsx("div",{className:"step-tag",children:"03 · 系统级连锁传播"}),a.jsx("ul",{className:"prop-list",children:r.propagation.map((l,i)=>a.jsxs("li",{className:"prop-node",children:[a.jsx("span",{className:"prop-arrow",children:"→"}),a.jsx("span",{children:l})]},i))})]}),a.jsxs("div",{className:"chain-step step-conseq",children:[a.jsx("div",{className:"step-tag",children:"04 · 最终系统后果"}),a.jsx("div",{className:"step-content text-risk",children:r.consequence}),a.jsxs("div",{className:"severity-badge",children:["严重度：",r.severity]})]})]}),a.jsxs("div",{className:"mitigation-row",children:[a.jsxs("div",{className:"mitigation-box",children:[a.jsx("span",{className:"mitigation-label",children:"🛡️ 拟议工程控制措施："}),a.jsx("span",{className:"mitigation-text",children:r.mitigation})]}),a.jsxs("div",{className:"mitigation-box",children:[a.jsx("span",{className:"mitigation-label",children:"🧪 适航符合性验证方法："}),a.jsx("span",{className:"mitigation-text",children:r.verification})]})]}),a.jsxs("div",{className:"pipeline-footer",children:[a.jsxs("span",{className:"residual-hint",children:["⚠️ 残余风险与不确定性：",r.residualRisk]}),a.jsx("button",{className:"primary-link-btn",onClick:()=>n(4),children:"查阅防御矩阵与验证证据 (进入 ACT IV) →"})]})]}),a.jsx("style",{children:`
        .scenario-switcher {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
        }
        .scenario-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 14px 18px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .scenario-btn:hover {
          border-color: var(--color-aluminum);
          background: var(--color-graphite-elevated);
        }
        .scenario-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
          box-shadow: 0 0 14px var(--color-amber-glow);
        }
        .sc-id {
          font-family: var(--font-family-mono);
          font-size: 11px;
          color: var(--color-amber);
          font-weight: 700;
        }
        .sc-title {
          font-size: 14.5px;
          color: var(--color-warm-white);
          font-weight: 600;
        }
        .causal-pipeline-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .pipeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 16px;
        }
        .scenario-name {
          font-size: 19px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .scenario-ctx {
          font-size: 13px;
          color: var(--color-aluminum);
          margin-top: 4px;
          display: block;
        }
        .propagation-chain {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
        }
        .chain-step {
          background: var(--color-graphite-elevated);
          padding: 16px;
          border-radius: 6px;
          border-top: 3px solid var(--color-aluminum-dim);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .step-hazard {
          border-top-color: var(--color-amber);
        }
        .step-mech {
          border-top-color: var(--color-tech-blue);
        }
        .step-prop {
          border-top-color: #d88e36;
        }
        .step-conseq {
          border-top-color: var(--color-risk-red);
        }
        .step-tag {
          font-size: 11px;
          font-family: var(--font-family-mono);
          color: var(--color-aluminum);
          text-transform: uppercase;
        }
        .step-content {
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .step-content.text-risk {
          color: #f1928b;
          font-weight: 600;
        }
        .severity-badge {
          margin-top: auto;
          font-size: 11.5px;
          background: rgba(185, 76, 68, 0.2);
          border: 1px solid rgba(185, 76, 68, 0.4);
          color: #f1928b;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        .prop-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .prop-node {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 12.5px;
          color: var(--color-warm-white);
          line-height: 1.4;
        }
        .prop-arrow {
          color: var(--color-amber);
          font-weight: bold;
        }
        .mitigation-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 800px) {
          .mitigation-row {
            grid-template-columns: 1fr;
          }
        }
        .mitigation-box {
          background: rgba(217, 154, 69, 0.08);
          border: 1px solid rgba(217, 154, 69, 0.2);
          padding: 12px 14px;
          border-radius: 6px;
          font-size: 13px;
        }
        .mitigation-label {
          color: var(--color-amber);
          font-weight: 600;
          display: block;
          margin-bottom: 4px;
        }
        .mitigation-text {
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .pipeline-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid var(--color-graphite-border);
          padding-top: 16px;
        }
        .residual-hint {
          font-size: 12.5px;
          color: var(--color-aluminum);
        }
        .primary-link-btn {
          color: var(--color-amber);
          font-weight: 700;
          font-size: 13.5px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
      `})]})},wr=[{id:"layer-1",name:"物理与热空间隔离",en:"PHYSICAL ISOLATION",principle:"通过空间距离、耐火隔舱、防破裂包络线切断单一故障连锁传递路径。",examples:["电池模组间耐火气凝胶屏障","高压线缆与飞控信号总线物理分道布置","旋翼爆裂未包容碎片轨迹避开载人座舱"],verificationMethod:"1100°C 持续 15 分钟标准耐火烧穿试验、未包容转子碎片碰撞冲击仿真。",source:"S8",tag:"F"},{id:"layer-2",name:"多通道硬件余度设计",en:"HARDWARE REDUNDANCY",principle:"在单一物理通道损坏时，备份通道无缝接管或进行加权表决。",examples:["四通道异构电传飞控计算机 (FCC)","每个倾转旋翼配备独立双绕组驱动电机","三组非相似迎角与动静压传感器"],verificationMethod:"硬件故障注入试验 (Fault Injection)、多总线通道丢包/抖动极限压力测试。",source:"J1",tag:"F"},{id:"layer-3",name:"自主健康监控与重构",en:"MONITORING & RECONFIGURATION",principle:"控制律实时感知推进效率恶化，自适应重配其余舵面与电机推力。",examples:["单发停转推力重平衡控制律","BMS 绝缘阻抗毫秒级高频检测","作动机构卡阻死区自适应补偿"],verificationMethod:"全任务飞行仿真平台蒙特卡洛极端状态收敛性验证 (Monte Carlo)。",source:"M2",tag:"A"},{id:"layer-4",name:"安全降级模式与飞行员处置",en:"DEGRADED MODES & SOP",principle:"在多重系统受损时，提供明确受限但受控的降级运行策略。",examples:["进近低能量滑翔备降程序","应急垂直硬着陆姿态维持策略","声光振动多模态告警与飞行员简洁决策界面 (HMI)"],verificationMethod:"人在回路 (HIL) 飞行员高负荷接管应急演练评估 (FAA AC 21.17-4 准则)。",source:"S9",tag:"F"},{id:"layer-5",name:"全生命周期适航审定追溯",en:"CERTIFICATION & TRACEABILITY",principle:"满足 EASA SC-VTOL 10^-9/h 灾难性失效概率要求，每项安全需求具备双向追溯证据。",examples:["DO-178C DAL A 级飞行机载软件认证","DO-254 复杂硬件可追溯测试用例","适航审定符合性审查检查单 (Compliance Checklist)"],verificationMethod:"适航主管机构现场目击审查、审定试飞科目闭环与设计缺陷整改单核销。",source:"S7",tag:"F"}],Yf=()=>{const{goToChapter:e}=Ze(),[t,n]=Ee.useState(wr[0].id),r=wr.find(l=>l.id===t)||wr[0];return a.jsxs("section",{className:"chapter-view","aria-labelledby":"act4-title",children:[a.jsxs("div",{className:"chapter-header",children:[a.jsxs("div",{className:"chapter-tag-line",children:[a.jsx("span",{className:"chapter-code",children:"ACT IV · ENGINEERING TRUST"}),a.jsx(ve,{type:"F",text:"深度防御体系",sourceId:"M2"})]}),a.jsx("h2",{id:"act4-title",className:"chapter-heading",children:"工程建立信任：纵深防御与适航验证矩阵"}),a.jsx("p",{className:"chapter-desc",children:"航空安全从不依赖单个零件的“零缺陷”，而是建立在多重独立的纵深防御层上。任何单一屏障的失效，都必须被下一层机制牢牢截击。"})]}),a.jsx("div",{className:"defense-stack",children:wr.map((l,i)=>{const o=t===l.id;return a.jsxs("button",{className:`layer-btn ${o?"active":""}`,onClick:()=>n(l.id),children:[a.jsxs("div",{className:"layer-num",children:["LAYER 0",i+1]}),a.jsx("div",{className:"layer-name",children:l.name}),a.jsx("div",{className:"layer-en",children:l.en})]},l.id)})}),a.jsxs("div",{className:"layer-detail-card",children:[a.jsxs("div",{className:"layer-detail-header",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"layer-detail-title",children:[r.name," (",r.en,")"]}),a.jsxs("p",{className:"layer-principle",children:[a.jsx("strong",{children:"核心防御原理："}),r.principle]})]}),a.jsx(ve,{type:r.tag,sourceId:r.source})]}),a.jsxs("div",{className:"grid-two-col",children:[a.jsxs("div",{className:"detail-box",children:[a.jsx("h4",{className:"detail-box-title",children:"典型工程防御实现范例"}),a.jsx("ul",{className:"example-list",children:r.examples.map((l,i)=>a.jsxs("li",{className:"example-item",children:[a.jsx("span",{className:"check-icon",children:"✓"}),a.jsx("span",{children:l})]},i))})]}),a.jsxs("div",{className:"detail-box",children:[a.jsx("h4",{className:"detail-box-title",children:"适航符合性验证手段 (MOC)"}),a.jsx("p",{className:"verification-text",children:r.verificationMethod}),a.jsxs("div",{className:"standards-badge",children:[a.jsx("span",{children:"参照标准："}),a.jsx("code",{children:"ARP4754A / EASA SC-VTOL Issue 2"})]})]})]}),a.jsxs("div",{className:"matrix-footer",children:[a.jsx("span",{className:"footer-tip",children:"⚠️ 提示：行业通用安全构型不能直接等同于 Joby S4 最终获批审定参数，均受最新官方审查限制。"}),a.jsx("button",{className:"primary-cta-btn",onClick:()=>e(5),children:"汇总全篇结论、事实与未验证清单 (进入 ACT V) →"})]})]}),a.jsx("style",{children:`
        .defense-stack {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 10px;
        }
        .layer-btn {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          padding: 14px 16px;
          border-radius: 6px;
          text-align: left;
          transition: all var(--transition-nav);
        }
        .layer-btn:hover {
          border-color: var(--color-aluminum);
          background: var(--color-graphite-elevated);
        }
        .layer-btn.active {
          border-color: var(--color-amber);
          background: rgba(217, 154, 69, 0.12);
          box-shadow: 0 0 12px var(--color-amber-glow);
        }
        .layer-num {
          font-size: 11px;
          font-family: var(--font-family-mono);
          color: var(--color-amber);
          font-weight: 700;
        }
        .layer-name {
          font-size: 14.5px;
          color: var(--color-warm-white);
          font-weight: 600;
          margin: 4px 0 2px;
        }
        .layer-en {
          font-size: 11px;
          color: var(--color-aluminum-dim);
          font-family: var(--font-family-mono);
        }
        .layer-detail-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .layer-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 16px;
        }
        .layer-detail-title {
          font-size: 20px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .layer-principle {
          font-size: 13.5px;
          color: var(--color-aluminum);
          margin-top: 6px;
          line-height: 1.5;
        }
        .grid-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 800px) {
          .grid-two-col {
            grid-template-columns: 1fr;
          }
        }
        .detail-box {
          background: var(--color-graphite-elevated);
          padding: 18px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
        }
        .detail-box-title {
          font-size: 14px;
          color: var(--color-amber);
          margin-bottom: 12px;
          font-weight: 600;
        }
        .example-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .example-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.45;
        }
        .check-icon {
          color: #8ec2e6;
          font-weight: bold;
        }
        .verification-text {
          font-size: 13.5px;
          color: var(--color-warm-white);
          line-height: 1.6;
        }
        .standards-badge {
          margin-top: 14px;
          font-size: 12px;
          color: var(--color-aluminum-dim);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .standards-badge code {
          background: rgba(184, 193, 200, 0.12);
          padding: 2px 6px;
          border-radius: 3px;
          color: var(--color-aluminum);
          font-family: var(--font-family-mono);
        }
        .matrix-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid var(--color-graphite-border);
          padding-top: 16px;
        }
        .footer-tip {
          font-size: 12px;
          color: var(--color-aluminum-dim);
          max-width: 600px;
        }
        .primary-cta-btn {
          color: var(--color-amber);
          font-weight: 700;
          font-size: 13.5px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
      `})]})},Kf=()=>{const{goToChapter:e,dispatch:t}=Ze(),[n,r]=Ee.useState(!1),l=()=>{navigator.clipboard.writeText("Beyond Gravity: The Cost of Flight (eVTOL Safety Systems Engineering Research & Demonstration). Coursework Project-2 (Independent Edition), Nov 2026. Referenced to FAA AC 21.17-4, EASA SC-VTOL Issue 2 and Joby S4 Architecture."),r(!0),setTimeout(()=>r(!1),2500)};return a.jsxs("section",{className:"chapter-view","aria-labelledby":"act5-title",children:[a.jsxs("div",{className:"chapter-header",children:[a.jsxs("div",{className:"chapter-tag-line",children:[a.jsx("span",{className:"chapter-code",children:"ACT V · BEYOND GRAVITY"}),a.jsx(ve,{type:"F",text:"系统学术总结",sourceId:"S7"})]}),a.jsx("h2",{id:"act5-title",className:"chapter-heading",children:"超越重力：研究结论、边界与证据台账"}),a.jsx("p",{className:"chapter-desc",children:"真正的工程信任建立在对自身认知边界的清晰界定之上。在这里，我们严格拆解已知事实、教学模型假设与尚未核实的工程未知。"})]}),a.jsxs("div",{className:"three-columns-grid",children:[a.jsxs("div",{className:"column-card border-fact",children:[a.jsxs("div",{className:"column-header",children:[a.jsx("h3",{className:"column-title",children:"1. 已证实公开事实 [F]"}),a.jsx(ve,{type:"F",text:"官方有据"})]}),a.jsxs("ul",{className:"column-list",children:[a.jsxs("li",{children:[a.jsx("strong",{children:"6 倾转旋翼气动架构："}),"全机拥有 6 组外置倾转旋翼单元，由独立永磁同步电机驱动 [J1]。"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Powered-lift 适航专用准则："}),"FAA AC 21.17-4 作为型号审定基础，打破传统固定翼与旋翼机二元规章 [S5]。"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"EASA SC-VTOL 安全目标："}),"适航规章要求商用载客运营满足 $10^",-9,"$/h 灾难性失效量级 [S7]。"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"多余度电传飞控声明："}),"厂商公开确认采用四通道异构飞行控制计算机架构 [J1]。"]})]})]}),a.jsxs("div",{className:"column-card border-assumption",children:[a.jsxs("div",{className:"column-header",children:[a.jsx("h3",{className:"column-title",children:"2. 有边界工程假设 [A]"}),a.jsx(ve,{type:"A",text:"教学推演"})]}),a.jsxs("ul",{className:"column-list",children:[a.jsxs("li",{children:[a.jsx("strong",{children:"EX-01 推进非对称推力："}),"模拟单旋翼推力骤降 40% 时飞控自适应升力平衡的教学情境 [A]。"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"EX-02 动力电池单体热失控："}),"基于 DO-311A 航空储能标准设定的电芯级热蔓延隔热屏障分析 [A]。"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"EX-03 动静压管积冰偏置："}),"基于 STPA 控制回路模拟未安全控制行为 (UCA) 与人机交接 [A]。"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"FMEA/FTA 定性矩阵："}),"采用定性严重度×可能性矩阵，不伪造具体随机失效率数字 [M1]。"]})]})]}),a.jsxs("div",{className:"column-card border-unverified",children:[a.jsxs("div",{className:"column-header",children:[a.jsx("h3",{className:"column-title",children:"3. 待研究与未核实项 [U]"}),a.jsx(ve,{type:"U",text:"保持存疑"})]}),a.jsxs("ul",{className:"column-list",children:[a.jsxs("li",{children:[a.jsx("strong",{children:"具体部件实际随机失效率："}),"商业机密限制，公开资料无各机械/电子部件确切 MTBF 数据 [U]。"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"内部电芯排列与冷却流道细节："}),"具体模组级液冷/相变流道内部细节尚未完全公开 [U]。"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"最终标准适航证获批状态："}),"目前处于审定符合性验证阶段，尚未取得 FAA 最终 TC 正式认证 [U]。"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"多点共因极端气象失效："}),"强风剪切、结冰与雷击多重耦合条件下的统计安全性尚需长期验证 [U]。"]})]})]})]}),a.jsxs("div",{className:"conclusion-action-card",children:[a.jsxs("div",{className:"citation-text-box",children:[a.jsx("span",{className:"citation-label",children:"学术引用标识 (Academic Citation)："}),a.jsx("code",{className:"citation-code",children:"Beyond Gravity: The Cost of Flight (eVTOL Safety Systems Engineering). Coursework-2, 2026."})]}),a.jsxs("div",{className:"action-buttons-group",children:[a.jsx("button",{className:"copy-citation-btn",onClick:l,children:n?"✓ 已复制到剪贴板":"📋 复制学术引用文本"}),a.jsx("button",{className:"view-sources-btn",onClick:()=>t({type:"SET_PANEL",payload:"sources"}),children:"📖 查阅完整文献索引表 (SOURCES)"}),a.jsx("button",{className:"back-act0-btn",onClick:()=>e(0),children:"↺ 返回片头主视点 (ACT 0)"})]})]}),a.jsx("style",{children:`
        .three-columns-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        .column-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .border-fact {
          border-top: 3px solid #8ec2e6;
        }
        .border-assumption {
          border-top: 3px solid var(--color-amber);
        }
        .border-unverified {
          border-top: 3px solid #f1928b;
        }
        .column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-graphite-border);
          padding-bottom: 12px;
        }
        .column-title {
          font-size: 15px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .column-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .column-list li {
          font-size: 13px;
          color: var(--color-aluminum);
          line-height: 1.6;
        }
        .column-list li strong {
          color: var(--color-warm-white);
          display: block;
          margin-bottom: 2px;
        }
        .conclusion-action-card {
          background: var(--color-graphite-surface);
          border: 1px solid var(--color-graphite-border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .citation-text-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .citation-label {
          font-size: 12px;
          color: var(--color-amber);
          font-weight: 600;
        }
        .citation-code {
          background: var(--color-graphite-elevated);
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12.5px;
          color: var(--color-warm-white);
          border: 1px solid var(--color-graphite-border);
          font-family: var(--font-family-mono);
          word-break: break-all;
        }
        .action-buttons-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .copy-citation-btn, .view-sources-btn, .back-act0-btn {
          padding: 10px 16px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 600;
          transition: all var(--transition-nav);
        }
        .copy-citation-btn {
          background: var(--color-amber);
          color: var(--color-graphite);
        }
        .copy-citation-btn:hover {
          background: #e6a855;
        }
        .view-sources-btn {
          background: var(--color-graphite-elevated);
          border: 1px solid var(--color-graphite-border);
          color: var(--color-warm-white);
        }
        .view-sources-btn:hover {
          border-color: var(--color-aluminum);
        }
        .back-act0-btn {
          border: 1px solid var(--color-graphite-border);
          color: var(--color-aluminum);
        }
        .back-act0-btn:hover {
          color: var(--color-warm-white);
        }
      `})]})},Xf=[{id:"S4",title:"GitHub Pages 静态构建与发布源配置规范",link:"https://docs.github.com/en/pages",date:"2026-11-20"},{id:"S5",title:"FAA AC 21.17-4: Type Certification—Powered-lift",link:"https://www.faa.gov/regulations_policies/advisory_circulars",date:"2026-11-20"},{id:"S6",title:"FAA Advanced Air Mobility (AAM) Integration Need-to-Know",link:"https://www.faa.gov/aam",date:"2026-11-20"},{id:"S7",title:"EASA Special Condition for VTOL and Means of Compliance",link:"https://www.easa.europa.eu",date:"2026-11-20"},{id:"S8",title:"EASA MOC SC-VTOL Issue 2 (推力矢量与多升力源冗余)",link:"https://www.easa.europa.eu",date:"2026-11-20"},{id:"S9",title:"FAA Pilot Training & Certification for Powered-Lift",link:"https://www.faa.gov",date:"2026-11-20"},{id:"M1",title:"SAE ARP4761: Civil Airborne Systems Safety Assessment Guidelines",link:"SAE International",date:"2026-11-20"},{id:"M2",title:"SAE ARP4754A: Development of Civil Aircraft and Systems",link:"SAE International",date:"2026-11-20"},{id:"J1",title:"Joby Aviation SEC 10-K / 10-Q 年度与季度公开披露文件",link:"SEC EDGAR",date:"2026-11-20"}],Jf=()=>{const{state:e,dispatch:t}=Ze();return e.openPanel==="none"?null:a.jsxs("div",{className:"modal-backdrop",onClick:()=>t({type:"SET_PANEL",payload:"none"}),children:[a.jsxs("div",{className:"modal-drawer",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",onClick:n=>n.stopPropagation(),children:[a.jsxs("div",{className:"drawer-header",children:[a.jsxs("div",{className:"header-titles",children:[a.jsx("h3",{id:"modal-title",className:"drawer-title",children:e.openPanel==="sources"?"官方证据链与文献索引":"系统安全工程说明"}),a.jsx("span",{className:"drawer-sub",children:"SOURCES & REGULATORY FRAMEWORK"})]}),a.jsx("button",{className:"close-btn",onClick:()=>t({type:"SET_PANEL",payload:"none"}),"aria-label":"关闭抽屉",children:"✕"})]}),a.jsxs("div",{className:"drawer-body",children:[a.jsxs("div",{className:"disclaimer-banner",children:[a.jsx("div",{className:"banner-title",children:"⚠️ 学术研究与免责声明"}),a.jsx("p",{className:"banner-text",children:"本项目为高校系统安全工程课程作业学术研究（独立整理版），非 Joby Aviation、FAA 或 EASA 的官方安全评估报告。公开资料仅能证明原文确有表述，不可据此推断全部商业设计的真实物理表现。"})]}),a.jsx("h4",{className:"section-title",children:"官方监管规章、工业标准与公开文献"}),a.jsx("ul",{className:"source-list",children:Xf.map(n=>a.jsxs("li",{className:"source-item",children:[a.jsxs("span",{className:"source-tag",children:["[",n.id,"]"]}),a.jsxs("div",{className:"source-info",children:[a.jsx("div",{className:"source-name",children:n.title}),a.jsxs("div",{className:"source-meta",children:[a.jsxs("span",{children:["访问/检索日期: ",n.date]}),a.jsxs("span",{className:"source-origin",children:["出处: ",n.link]})]})]})]},n.id))})]})]}),a.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 14, 19, 0.75);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 200ms ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-drawer {
          width: 100%;
          max-width: 540px;
          height: 100%;
          background: var(--color-graphite-surface);
          border-left: 1px solid var(--color-graphite-border);
          box-shadow: -8px 0 24px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          animation: slideIn 240ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          border-bottom: 1px solid var(--color-graphite-border);
        }
        .drawer-title {
          font-size: 17px;
          color: var(--color-warm-white);
          font-weight: 700;
        }
        .drawer-sub {
          font-size: 11px;
          color: var(--color-aluminum-dim);
          font-family: var(--font-family-mono);
        }
        .close-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          color: var(--color-aluminum);
          font-size: 16px;
          background: rgba(184, 193, 200, 0.08);
          transition: all var(--transition-nav);
        }
        .close-btn:hover {
          color: var(--color-warm-white);
          background: rgba(184, 193, 200, 0.16);
        }
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .disclaimer-banner {
          background: rgba(217, 154, 69, 0.1);
          border: 1px solid rgba(217, 154, 69, 0.3);
          border-radius: 6px;
          padding: 14px;
        }
        .banner-title {
          font-size: 13px;
          color: var(--color-amber);
          font-weight: 700;
          margin-bottom: 6px;
        }
        .banner-text {
          font-size: 12.5px;
          color: var(--color-warm-white);
          line-height: 1.5;
        }
        .section-title {
          font-size: 14px;
          color: var(--color-aluminum);
          font-weight: 600;
        }
        .source-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .source-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: var(--color-graphite-elevated);
          padding: 12px;
          border-radius: 6px;
          border: 1px solid rgba(184, 193, 200, 0.08);
        }
        .source-tag {
          font-family: var(--font-family-mono);
          font-size: 12px;
          color: var(--color-amber);
          font-weight: bold;
          flex-shrink: 0;
        }
        .source-name {
          font-size: 13px;
          color: var(--color-warm-white);
          line-height: 1.4;
          font-weight: 500;
        }
        .source-meta {
          font-size: 11px;
          color: var(--color-aluminum-dim);
          margin-top: 4px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
      `})]})},Zf=()=>{const{state:e}=Ze(),t=()=>{switch(e.chapter){case 0:return a.jsx(Xa,{});case 1:return a.jsx(Wf,{});case 2:return a.jsx(Qf,{});case 3:return a.jsx(Gf,{});case 4:return a.jsx(Yf,{});case 5:return a.jsx(Kf,{});default:return a.jsx(Xa,{})}};return a.jsxs("div",{className:"app-container",children:[a.jsx(Hf,{}),a.jsx("main",{className:"main-viewport",id:"main-content",tabIndex:-1,children:t()}),a.jsx(Jf,{}),a.jsx("footer",{className:"site-footer",children:a.jsxs("div",{className:"footer-content",children:[a.jsx("span",{children:"BEYOND GRAVITY © 2026 课程作业-2 · 纯静态独立运行版"}),a.jsx("span",{className:"footer-sub",children:"Joby S4 eVTOL 参照研究 ｜ 纯客户端零依赖"})]})}),a.jsx("style",{children:`
        .site-footer {
          border-top: 1px solid var(--color-graphite-border);
          padding: 16px 20px;
          background: rgba(10, 14, 19, 0.95);
          font-size: 12px;
          color: var(--color-aluminum-dim);
        }
        .footer-content {
          max-width: var(--max-content-width);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
      `})]})};Zl.createRoot(document.getElementById("root")).render(a.jsx(_c.StrictMode,{children:a.jsx(Vf,{children:a.jsx(Zf,{})})}));
