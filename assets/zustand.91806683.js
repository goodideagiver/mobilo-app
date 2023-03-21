import{r as h,g as V}from"./vendor.21311c1b.js";const E=t=>{let e;const n=new Set,o=(s,d)=>{const c=typeof s=="function"?s(e):s;if(!Object.is(c,e)){const a=e;e=(d!=null?d:typeof c!="object")?c:Object.assign({},e,c),n.forEach(p=>p(e,a))}},r=()=>e,l={setState:o,getState:r,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>n.clear()};return e=t(o,r,l),l},D=t=>t?E(t):E;var w={exports:{}},j={},O={exports:{}},$={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=h.exports;function _(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var b=typeof Object.is=="function"?Object.is:_,k=v.useState,q=v.useEffect,I=v.useLayoutEffect,W=v.useDebugValue;function B(t,e){var n=e(),o=k({inst:{value:n,getSnapshot:e}}),r=o[0].inst,u=o[1];return I(function(){r.value=n,r.getSnapshot=e,y(r)&&u({inst:r})},[t,n,e]),q(function(){return y(r)&&u({inst:r}),t(function(){y(r)&&u({inst:r})})},[t]),W(n),n}function y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!b(t,n)}catch{return!0}}function C(t,e){return e()}var F=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?C:B;$.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:F;(function(t){t.exports=$})(O);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=h.exports,L=O.exports;function M(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var R=typeof Object.is=="function"?Object.is:M,z=L.useSyncExternalStore,A=x.useRef,G=x.useEffect,H=x.useMemo,J=x.useDebugValue;j.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var u=A(null);if(u.current===null){var f={hasValue:!1,value:null};u.current=f}else f=u.current;u=H(function(){function s(i){if(!d){if(d=!0,c=i,i=o(i),r!==void 0&&f.hasValue){var S=f.value;if(r(S,i))return a=S}return a=i}if(S=a,R(c,i))return S;var m=o(i);return r!==void 0&&r(S,m)?S:(c=i,a=m)}var d=!1,c,a,p=n===void 0?null:n;return[function(){return s(e())},p===null?void 0:function(){return s(p())}]},[e,n,o,r]);var l=z(t,u[0],u[1]);return G(function(){f.hasValue=!0,f.value=l},[l]),J(l),l};(function(t){t.exports=j})(w);const K=V(w.exports),{useSyncExternalStoreWithSelector:N}=K;function P(t,e=t.getState,n){const o=N(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return h.exports.useDebugValue(o),o}const g=t=>{const e=typeof t=="function"?D(t):t,n=(o,r)=>P(e,o,r);return Object.assign(n,e),n},T=t=>t?g(t):g;export{T as c};
