(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{6049:function(t,e,n){"use strict";n.d(e,{js$:function(){return o},wZP:function(){return i},tvw:function(){return a},YGl:function(){return s},W1M:function(){return c},Z7j:function(){return u},tBG:function(){return l}});var r=n(7294);var o=function(t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}))};var i=function(t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"}))};var a=function(t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}))};var s=function(t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"}))};var c=function(t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))};var u=function(t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"}))};var l=function(t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}))}},9917:function(t,e,n){"use strict";var r=n(3848),o=n(3115),i=n(2426);e.default=function(t){var e=t.src,n=t.sizes,o=t.unoptimized,i=void 0!==o&&o,d=t.priority,f=void 0!==d&&d,m=t.loading,g=t.className,v=t.quality,y=t.width,b=t.height,w=t.objectFit,D=t.objectPosition,C=t.loader,O=void 0===C?x:C,E=t.placeholder,S=void 0===E?"empty":E,M=t.blurDataURL,j=(0,a.default)(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),N=n?"responsive":"intrinsic";"layout"in j&&(j.layout&&(N=j.layout),delete j.layout);var P="";if(function(t){return"object"===typeof t&&(h(t)||function(t){return void 0!==t.src}(t))}(e)){var B=h(e)?e.default:e;if(!B.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(B)));if(M=M||B.blurDataURL,P=B.src,(!N||"fill"!==N)&&(b=b||B.height,y=y||B.width,!B.height||!B.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(B)))}e="string"===typeof e?e:P;var _=k(y),T=k(b),z=k(v);0;var L=!f&&("lazy"===m||"undefined"===typeof m);e&&e.startsWith("data:")&&(i=!0,L=!1);var I,H,F,W=(0,p.useIntersection)({rootMargin:"200px",disabled:!L}),R=r(W,2),q=R[0],V=R[1],U=!L||V,Y=(0,s.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:D},"blur"===S?{filter:"blur(20px)",backgroundSize:"cover",backgroundImage:'url("'.concat(M,'")')}:void 0);if("undefined"!==typeof _&&"undefined"!==typeof T&&"fill"!==N){var Z=T/_,$=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===N?(I={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={display:"block",boxSizing:"border-box",paddingTop:$}):"intrinsic"===N?(I={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={boxSizing:"border-box",display:"block",maxWidth:"100%"},F='<svg width="'.concat(_,'" height="').concat(T,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===N&&(I={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:_,height:T})}else"undefined"===typeof _&&"undefined"===typeof T&&"fill"===N&&(I={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var X={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};U&&(X=A({src:e,unoptimized:i,layout:N,width:_,quality:z,sizes:n,loader:O}));return c.default.createElement("div",{style:I},H?c.default.createElement("div",{style:H},F?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(F))}):null):null,!U&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},j,A({src:e,unoptimized:i,layout:N,width:_,quality:z,sizes:n,loader:O}),{decoding:"async",style:Y,className:g}))),c.default.createElement("img",Object.assign({},j,X,{decoding:"async",className:g,ref:function(t){q(t),function(t,e){if("blur"===e&&t){var n=function(){t.src.startsWith("data:")||("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){t.style.filter="none",t.style.backgroundSize="none",t.style.backgroundImage="none"}))};t.complete?n():t.onload=n}}(t,S)},style:Y})),f?c.default.createElement(u.default,null,c.default.createElement("link",{key:"__nimg-"+X.src+X.srcSet+X.sizes,rel:"preload",as:"image",href:X.srcSet?void 0:X.src,imagesrcset:X.srcSet,imagesizes:X.sizes})):null)};var a=i(n(6169)),s=i(n(9566)),c=i(n(7294)),u=i(n(2775)),l=n(8814),d=n(5655),p=n(7426);var f=new Map([["imgix",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality,i=["auto=format","fit=max","w="+r],a="";o&&i.push("q="+o);i.length&&(a="?"+i.join("&"));return"".concat(e).concat(D(n)).concat(a)}],["cloudinary",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(e).concat(i).concat(D(n))}],["akamai",function(t){var e=t.root,n=t.src,r=t.width;return"".concat(e).concat(D(n),"?imwidth=").concat(r)}],["default",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}]]);function h(t){return void 0!==t.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"akamai"}||d.imageConfigDefault,g=m.deviceSizes,v=m.imageSizes,y=m.loader,b=m.path,w=(m.domains,[].concat(o(g),o(v)));function A(t){var e=t.src,n=t.unoptimized,r=t.layout,i=t.width,a=t.quality,s=t.sizes,c=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var u=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var s=.01*Math.min.apply(Math,a);return{widths:w.filter((function(t){return t>=g[0]*s})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:g,kind:"w"}:{widths:o(new Set([t,2*t].map((function(t){return w.find((function(e){return e>=t}))||w[w.length-1]})))),kind:"x"}}(i,r,s),l=u.widths,d=u.kind,p=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((function(t,n){return"".concat(c({src:e,quality:a,width:t})," ").concat("w"===d?t:n+1).concat(d)})).join(", "),src:c({src:e,quality:a,width:l[p]})}}function k(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function x(t){var e=f.get(y);if(e)return e((0,s.default)({root:b},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(y))}function D(t){return"/"===t[0]?t.slice(1):t}g.sort((function(t,e){return t-e})),w.sort((function(t,e){return t-e}))},7426:function(t,e,n){"use strict";var r=n(3848);e.__esModule=!0,e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!a,c=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),d=l[0],p=l[1],f=(0,o.useCallback)((function(t){c.current&&(c.current(),c.current=void 0),n||d||t&&t.tagName&&(c.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=s.get(e);if(n)return n;var r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return s.set(e,n={id:e,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(t,e),i.observe(t),function(){a.delete(t),i.unobserve(t),0===a.size&&(i.disconnect(),s.delete(o))}}(t,(function(t){return t&&p(t)}),{rootMargin:e}))}),[n,e,d]);return(0,o.useEffect)((function(){if(!a&&!d){var t=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(t)}}}),[d]),[f,d]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},3398:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},6393:function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3398);function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery,a=void 0!==i&&i;return n||o&&a}},2775:function(t,e,n){"use strict";var r=n(1682);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.__esModule=!0,e.defaultHead=p,e.default=void 0;var i,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=d();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n(7294)),s=(i=n(3244))&&i.__esModule?i:{default:i},c=n(3398),u=n(1165),l=n(6393);function d(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return d=function(){return t},t}function p(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var h=["name","httpEquiv","charSet","itemProp"];function m(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(p(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);t.has(s)?i=!1:t.add(s)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var d=o.props[l],p=r[l]||new Set;"name"===l&&a||!p.has(d)?(p.add(d),r[l]=p):i=!1}}}return i}}()).reverse().map((function(t,n){var i=t.key||n;if(!e.inAmpMode&&"link"===t.type&&t.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(e){return t.props.href.startsWith(e)}))){var s=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(t,s)}return a.default.cloneElement(t,{key:i})}))}var g=function(t){var e=t.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},e)};e.default=g},3244:function(t,e,n){"use strict";var r=n(3115),o=n(2553),i=n(2012),a=(n(450),n(9807)),s=n(7690),c=n(9828);function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var l=n(7294),d=function(t){a(n,t);var e=u(n);function n(t){var i;return o(this,n),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);e.default=d},8814:function(t,e){"use strict";e.__esModule=!0,e.toBase64=function(t){return window.btoa(t)}},5655:function(t,e){"use strict";e.__esModule=!0,e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1}},9008:function(t,e,n){t.exports=n(2775)},5675:function(t,e,n){t.exports=n(9917)},8164:function(t,e,n){var r=n(4360);t.exports=function(t){if(Array.isArray(t))return r(t)}},1682:function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},9227:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return o}})},7381:function(t){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},5725:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(t,e,n){var r=n(8164),o=n(7381),i=n(3585),a=n(5725);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},1163:function(t,e,n){t.exports=n(4651)},4155:function(t){var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var s,c=[],u=!1,l=-1;function d(){u&&s&&(u=!1,s.length?c=s.concat(c):l=-1,c.length&&p())}function p(){if(!u){var t=a(d);u=!0;for(var e=c.length;e;){for(s=c,c=[];++l<e;)s&&s[l].run();l=-1,e=c.length}s=null,u=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function h(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new f(t,e)),1!==c.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},7794:function(t,e,n){"use strict";var r=n(7294),o=n(3935);function i(t){var e=!1;return function(){e||(console.warn(t),e=!0)}}i("\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren't supported, because Flip Move needs access to the backing instances via refs, and SFCs don't have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n"),i("\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n");var a=i("\n>> Warning, via react-flip-move <<\n\nWhen using \"wrapperless\" mode (by supplying 'typeName' of 'null'), strange things happen when the direct parent has the default \"static\" position.\n\nFlipMove has added 'position: relative' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n"),s=i("\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move's child elements have the html attribute 'disabled' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set 'animation' to false.\n"),c={elevator:{from:{transform:"scale(0)",opacity:"0"},to:{transform:"",opacity:""}},fade:{from:{opacity:"0"},to:{opacity:""}},accordionVertical:{from:{transform:"scaleY(0)",transformOrigin:"center top"},to:{transform:"",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(0)",transformOrigin:"left center"},to:{transform:"",transformOrigin:"left center"}},none:null},u={elevator:{from:{transform:"scale(1)",opacity:"1"},to:{transform:"scale(0)",opacity:"0"}},fade:{from:{opacity:"1"},to:{opacity:"0"}},accordionVertical:{from:{transform:"scaleY(1)",transformOrigin:"center top"},to:{transform:"scaleY(0)",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(1)",transformOrigin:"left center"},to:{transform:"scaleX(0)",transformOrigin:"left center"}},none:null},l=c,d="elevator",p=function(t,e){for(var n=0;n<e.length;n++)if(t(e[n],n,e))return e[n]},f=function(t){return(f=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)})(t)};var h=function(t){var e={};return function(n){return e[n]||(e[n]=t(n)),e[n]}}((function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()})),m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},b=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e};function w(t){var e,n;return n=e=function(e){function n(){return g(this,n),b(this,e.apply(this,arguments))}return y(n,e),n.prototype.checkChildren=function(t){},n.prototype.convertProps=function(t){var e={children:t.children,easing:t.easing,onStart:t.onStart,onFinish:t.onFinish,onStartAll:t.onStartAll,onFinishAll:t.onFinishAll,typeName:t.typeName,disableAllAnimations:t.disableAllAnimations,getPosition:t.getPosition,maintainContainerHeight:t.maintainContainerHeight,verticalAlignment:t.verticalAlignment,duration:this.convertTimingProp("duration"),delay:this.convertTimingProp("delay"),staggerDurationBy:this.convertTimingProp("staggerDurationBy"),staggerDelayBy:this.convertTimingProp("staggerDelayBy"),appearAnimation:this.convertAnimationProp(t.appearAnimation,l),enterAnimation:this.convertAnimationProp(t.enterAnimation,c),leaveAnimation:this.convertAnimationProp(t.leaveAnimation,u),delegated:{}};this.checkChildren(e.children);var n=Object.keys(e),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return Object.keys(t).forEach((function(r){-1===e.indexOf(r)&&(n[r]=t[r])})),n}(this.props,n);return r.style=v({position:"relative"},r.style),e.delegated=r,e},n.prototype.convertTimingProp=function(t){var e=this.props[t],r="number"===typeof e?e:parseInt(e,10);return isNaN(r)?n.defaultProps[t]:r},n.prototype.convertAnimationProp=function(t,e){switch("undefined"===typeof t?"undefined":m(t)){case"boolean":return e[t?d:"none"];case"string":return-1===Object.keys(e).indexOf(t)?e.elevator:e[t];default:return t}},n.prototype.render=function(){return r.createElement(t,this.convertProps(this.props))},n}(r.Component),e.defaultProps={easing:"ease-in-out",duration:350,delay:0,staggerDurationBy:0,staggerDelayBy:0,typeName:"div",enterAnimation:d,leaveAnimation:d,disableAllAnimations:!1,getPosition:function(t){return t.getBoundingClientRect()},maintainContainerHeight:!1,verticalAlignment:"top"},n}function A(t){var e=t.domNode,n=t.styles;Object.keys(n).forEach((function(t){e.style.setProperty(h(t),n[t])}))}var k=function(t){var e=t.childDomNode,n={top:0,left:0,right:0,bottom:0,height:0,width:0},r=t.childBoundingBox||n,o=t.parentBoundingBox||n,i=(0,t.getPosition)(e),a=i.top-o.top,s=i.left-o.left;return[r.left-s,r.top-a]},x=function(t,e){var n=e.delay,r=e.duration,o=e.staggerDurationBy,i=e.staggerDelayBy,a=e.easing;n+=t*i,r+=t*o;return["transform","opacity"].map((function(t){return t+" "+r+"ms "+a+" "+n+"ms"})).join(", ")},D=function(){var t={transition:"transitionend","-o-transition":"oTransitionEnd","-moz-transition":"transitionend","-webkit-transition":"webkitTransitionEnd"};if("undefined"===typeof document)return"";var e=document.createElement("fakeelement"),n=p((function(t){return void 0!==e.style.getPropertyValue(t)}),Object.keys(t));return n?t[n]:""}(),C=!D;function O(t){return t.key||""}function E(t){return r.Children.toArray(t)}var S=w(function(t){function e(){var n,r;g(this,e);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=r=b(this,t.call.apply(t,[this].concat(s))),r.state={children:E(r.props?r.props.children:[]).map((function(t){return v({},t,{element:t,appearing:!0})}))},r.childrenData={},r.parentData={domNode:null,boundingBox:null},r.heightPlaceholderData={domNode:null},r.remainingAnimations=0,r.childrenToAnimate=[],r.findDOMContainer=function(){var t=o.findDOMNode(r),e=t&&t.parentNode;e&&e instanceof HTMLElement&&("static"===window.getComputedStyle(e).position&&(e.style.position="relative",a()),r.parentData.domNode=e)},r.runAnimation=function(){var t=r.state.children.filter(r.doesChildNeedToBeAnimated),e=t.map((function(t){return r.computeInitialStyles(t)}));t.forEach((function(t,n){r.remainingAnimations+=1,r.childrenToAnimate.push(O(t)),r.animateChild(t,n,e[n])})),"function"===typeof r.props.onStartAll&&r.callChildrenHook(r.props.onStartAll)},r.doesChildNeedToBeAnimated=function(t){if(!O(t))return!1;var e=r.getChildData(O(t)),n=e.domNode,o=e.boundingBox,i=r.parentData.boundingBox;if(!n)return!1;var a=r.props,s=a.appearAnimation,c=a.enterAnimation,u=a.leaveAnimation,l=a.getPosition,d=t.appearing&&s,p=t.entering&&c,f=t.leaving&&u;if(d||p||f)return!0;var h=k({childDomNode:n,childBoundingBox:o,parentBoundingBox:i,getPosition:l}),m=h[0],g=h[1];return 0!==m||0!==g},b(r,n)}return y(e,t),e.prototype.componentDidMount=function(){null===this.props.typeName&&this.findDOMContainer(),this.props.appearAnimation&&!this.isAnimationDisabled(this.props)&&(this.prepForAnimation(),this.runAnimation())},e.prototype.componentDidUpdate=function(t){null===this.props.typeName&&this.findDOMContainer(),!function(t,e){if(t===e)return!0;var n=!f(t)||!f(e),r=t.length!==e.length;return!n&&!r&&function(t,e){for(var n=0;n<e.length;n++)if(!t(e[n],n,e))return!1;return!0}((function(t,n){return t===e[n]}),t)}(E(this.props.children).map((function(t){return t.key})),E(t.children).map((function(t){return t.key})))&&!this.isAnimationDisabled(this.props)&&(this.prepForAnimation(),this.runAnimation())},e.prototype.calculateNextSetOfChildren=function(t){var e=this,n=t.map((function(t){var n=e.findChildByKey(t.key),r=!n||n.leaving;return v({},t,{element:t,entering:r})})),r=0;return this.state.children.forEach((function(o,i){if(!p((function(t){return t.key===O(o)}),t)&&e.props.leaveAnimation){var a=v({},o,{leaving:!0}),s=i+r;n.splice(s,0,a),r+=1}})),n},e.prototype.prepForAnimation=function(){var t=this,e=this.props,n=e.leaveAnimation,r=e.maintainContainerHeight,o=e.getPosition;n&&(this.state.children.filter((function(t){return t.leaving})).forEach((function(e){var n=t.getChildData(O(e));!t.isAnimationDisabled(t.props)&&n.domNode&&n.domNode.disabled&&s(),n.boundingBox&&function(t,e){var n=t.domNode,r=t.boundingBox;if(n&&r){var o=window.getComputedStyle(n),i=["margin-top","margin-left","margin-right"].reduce((function(t,e){var n,r=o.getPropertyValue(e);return v({},t,((n={})[e]=Number(r.replace("px","")),n))}),{});A({domNode:n,styles:{position:"absolute",top:("bottom"===e?r.top-r.height:r.top)-i["margin-top"]+"px",left:r.left-i["margin-left"]+"px",right:r.right-i["margin-right"]+"px"}})}}(n,t.props.verticalAlignment)})),r&&this.heightPlaceholderData.domNode&&function(t){var e=t.domNode,n=t.parentData,r=t.getPosition,o=n.domNode,i=n.boundingBox;if(o&&i){A({domNode:e,styles:{height:"0"}});var a=i.height-r(o).height;A({domNode:e,styles:{height:a>0?a+"px":"0"}})}}({domNode:this.heightPlaceholderData.domNode,parentData:this.parentData,getPosition:o}));this.state.children.forEach((function(e){var n=t.getChildData(O(e)).domNode;n&&(e.entering||e.leaving||A({domNode:n,styles:{transition:""}}))}))},e.prototype.UNSAFE_componentWillReceiveProps=function(t){this.updateBoundingBoxCaches();var e=E(t.children);this.setState({children:this.isAnimationDisabled(t)?e.map((function(t){return v({},t,{element:t})})):this.calculateNextSetOfChildren(e)})},e.prototype.animateChild=function(t,e,n){var r=this,o=this.getChildData(O(t)).domNode;o&&(A({domNode:o,styles:n}),this.props.onStart&&this.props.onStart(t,o),requestAnimationFrame((function(){requestAnimationFrame((function(){var n={transition:x(e,r.props),transform:"",opacity:""};t.appearing&&r.props.appearAnimation?n=v({},n,r.props.appearAnimation.to):t.entering&&r.props.enterAnimation?n=v({},n,r.props.enterAnimation.to):t.leaving&&r.props.leaveAnimation&&(n=v({},n,r.props.leaveAnimation.to)),A({domNode:o,styles:n})}))})),this.bindTransitionEndHandler(t))},e.prototype.bindTransitionEndHandler=function(t){var e=this,n=this.getChildData(O(t)).domNode;if(n){n.addEventListener(D,(function r(o){o.target===n&&(n.style.transition="",e.triggerFinishHooks(t,n),n.removeEventListener(D,r),t.leaving&&e.removeChildData(O(t)))}))}},e.prototype.triggerFinishHooks=function(t,e){var n=this;if(this.props.onFinish&&this.props.onFinish(t,e),this.remainingAnimations-=1,0===this.remainingAnimations){var r=this.state.children.filter((function(t){return!t.leaving})).map((function(t){return v({},t,{element:t.element,appearing:!1,entering:!1})}));this.setState({children:r},(function(){"function"===typeof n.props.onFinishAll&&n.callChildrenHook(n.props.onFinishAll),n.childrenToAnimate=[]})),this.heightPlaceholderData.domNode&&(this.heightPlaceholderData.domNode.style.height="0")}},e.prototype.callChildrenHook=function(t){var e=this,n=[],r=[];this.childrenToAnimate.forEach((function(t){var o=e.findChildByKey(t);o&&(n.push(o),e.hasChildData(t)&&r.push(e.getChildData(t).domNode))})),t(n,r)},e.prototype.updateBoundingBoxCaches=function(){var t=this,e=this.parentData.domNode;if(e){this.parentData.boundingBox=this.props.getPosition(e);var n=[];this.state.children.forEach((function(r){var o=O(r);if(o)if(t.hasChildData(o)){var i=t.getChildData(o);i.domNode&&r?n.push(function(t){var e=t.childDomNode,n=t.parentDomNode,r=t.getPosition,o=r(n),i=r(e),a=i.top,s=i.left,c=i.right,u=i.bottom,l=i.width,d=i.height;return{top:a-o.top,left:s-o.left,right:o.right-c,bottom:o.bottom-u,width:l,height:d}}({childDomNode:i.domNode,parentDomNode:e,getPosition:t.props.getPosition})):n.push(null)}else n.push(null);else n.push(null)})),this.state.children.forEach((function(e,r){var o=O(e),i=n[r];o&&t.setChildData(o,{boundingBox:i})}))}},e.prototype.computeInitialStyles=function(t){if(t.appearing)return this.props.appearAnimation?this.props.appearAnimation.from:{};if(t.entering)return this.props.enterAnimation?v({position:"",top:"",left:"",right:"",bottom:""},this.props.enterAnimation.from):{};if(t.leaving)return this.props.leaveAnimation?this.props.leaveAnimation.from:{};var e=this.getChildData(O(t)),n=e.domNode,r=e.boundingBox,o=this.parentData.boundingBox;if(!n)return{};var i=k({childDomNode:n,childBoundingBox:r,parentBoundingBox:o,getPosition:this.props.getPosition});return{transform:"translate("+i[0]+"px, "+i[1]+"px)"}},e.prototype.isAnimationDisabled=function(t){return C||t.disableAllAnimations||0===t.duration&&0===t.delay&&0===t.staggerDurationBy&&0===t.staggerDelayBy},e.prototype.findChildByKey=function(t){return p((function(e){return O(e)===t}),this.state.children)},e.prototype.hasChildData=function(t){return Object.prototype.hasOwnProperty.call(this.childrenData,t)},e.prototype.getChildData=function(t){return this.hasChildData(t)?this.childrenData[t]:{}},e.prototype.setChildData=function(t,e){this.childrenData[t]=v({},this.getChildData(t),e)},e.prototype.removeChildData=function(t){delete this.childrenData[t],this.setState((function(e){return v({},e,{children:e.children.filter((function(e){return e.element.key!==t}))})}))},e.prototype.createHeightPlaceholder=function(){var t=this,e=this.props.typeName,n="ul"===e||"ol"===e?"li":"div";return(0,r.createElement)(n,{key:"height-placeholder",ref:function(e){t.heightPlaceholderData.domNode=e},style:{visibility:"hidden",height:0}})},e.prototype.childrenWithRefs=function(){var t=this;return this.state.children.map((function(e){return(0,r.cloneElement)(e.element,{ref:function(n){if(n){var r=function(t){if("undefined"===typeof HTMLElement)return null;if(t instanceof HTMLElement)return t;var e=(0,o.findDOMNode)(t);return e&&e.nodeType===Node.TEXT_NODE?null:e}(n);t.setChildData(O(e),{domNode:r})}}})}))},e.prototype.render=function(){var t=this,e=this.props,n=e.typeName,o=e.delegated,i=e.leaveAnimation,a=e.maintainContainerHeight,s=this.childrenWithRefs();if(i&&a&&s.push(this.createHeightPlaceholder()),!n)return s;var c=v({},o,{children:s,ref:function(e){t.parentData.domNode=e}});return(0,r.createElement)(n,c)},e}(r.Component));e.Z=S}}]);