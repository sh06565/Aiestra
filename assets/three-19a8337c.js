import{r as v,a as y}from"./vendor-b1791c80.js";var p={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=v,R=Symbol.for("react.element"),x=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,w=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function _(o,t,l){var n,s={},e=null,r=null;l!==void 0&&(e=""+l),t.key!==void 0&&(e=""+t.key),t.ref!==void 0&&(r=t.ref);for(n in t)k.call(t,n)&&!O.hasOwnProperty(n)&&(s[n]=t[n]);if(o&&o.defaultProps)for(n in t=o.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:R,type:o,key:e,ref:r,props:s,_owner:w.current}}f.Fragment=x;f.jsx=_;f.jsxs=_;p.exports=f;var L=p.exports,u={},m=y;u.createRoot=m.createRoot,u.hydrateRoot=m.hydrateRoot;const S="modulepreload",P=function(o){return"/"+o},d={},$=function(t,l,n){if(!l||l.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(l.map(e=>{if(e=P(e),e in d)return;d[e]=!0;const r=e.endsWith(".css"),h=r?'[rel="stylesheet"]':"";if(!!n)for(let a=s.length-1;a>=0;a--){const c=s[a];if(c.href===e&&(!r||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${h}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":S,r||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),r)return new Promise((a,c)=>{i.addEventListener("load",a),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})};export{$ as _,u as c,L as j};
//# sourceMappingURL=three-19a8337c.js.map
