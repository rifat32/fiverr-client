(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3157],{79361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},93096:function(e,t,n){var r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),f=Object.prototype.toString,p=Math.max,g=Math.min,m=function(){return d.Date.now()};function h(e,t,n){var i,o,a,l,u,c,s=0,d=!1,f=!1,h=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,s=t,l=e.apply(r,n)}function w(e){return s=e,u=setTimeout(S,t),d?b(e):l}function _(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-s>=a}function S(){var e=m();if(_(e))return x(e);u=setTimeout(S,function(e){var n=t-(e-c);return f?g(n,a-(e-s)):n}(e))}function x(e){return u=void 0,h&&i?b(e):(i=o=void 0,l)}function j(){var e=m(),n=_(e);if(i=arguments,o=this,c=e,n){if(void 0===u)return w(c);if(f)return u=setTimeout(S,t),b(c)}return void 0===u&&(u=setTimeout(S,t)),l}return t=v(t)||0,y(n)&&(d=!!n.leading,a=(f="maxWait"in n)?p(v(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),j.cancel=function(){void 0!==u&&clearTimeout(u),s=0,i=c=o=u=void 0},j.flush=function(){return void 0===u?l:x(m())},j}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),h(e,t,{leading:i,maxWait:t,trailing:o})}},98461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79361).Z,i=n(94941).Z,o=n(53929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,u=void 0!==l&&l,g=e.priority,m=void 0!==g&&g,S=e.loading,z=e.className,O=e.quality,E=e.width,C=e.height,k=e.fill,A=e.style,L=e.onLoadingComplete,R=e.placeholder,I=void 0===R?"empty":R,P=e.blurDataURL,M=c(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoadingComplete","placeholder","blurDataURL"]);if(!h)throw new Error('The "next/future/image" component is experimental and may be subject to breaking changes. To enable this experiment, please include `experimental: { images: { allowFutureImage: true } }` in your next.config.js file.');var N=s.useContext(p.ImageConfigContext),T=s.useMemo((function(){var e=v||N||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[N]),Z=M,q=j;if("loader"in Z){if(Z.loader){var D=Z.loader;q=function(e){e.config;var t=c(e,["config"]);return D(t)}}delete Z.loader}var B="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var W=b(t)?t.default:t;if(!W.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(P=P||W.blurDataURL,B=W.src,C=C||W.height,E=E||W.width,!W.height||!W.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)))}var U=!m&&("lazy"===S||"undefined"===typeof S);((t="string"===typeof t?t:B).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,U=!1);y&&(u=!0);var F=i(s.useState(!1),2),V=F[0],G=F[1],H=i(s.useState(!1),2),$=H[0],J=H[1],K=_(E),Q=_(C),X=_(O);0;var Y=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},$||"blur"===I?{}:{color:"transparent"},A),ee="url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(K," ").concat(Q,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50'/%3E%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(P,"'/%3E%3C/svg%3E\")"),te="blur"!==I||V?{}:a({backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"0% 0%"},(null==P?void 0:P.startsWith("data:image"))?{backgroundImage:ee}:{filter:"blur(20px)",backgroundImage:'url("'.concat(P,'")')}),ne=w({config:T,src:t,unoptimized:u,width:K,quality:X,sizes:n,loader:q}),re=t;0;var ie,oe="imagesrcset",ae="imagesizes";oe="imageSrcSet",ae="imageSizes";var le=(r(ie={},oe,ne.srcSet),r(ie,ae,ne.sizes),ie),ue=s.useRef(L);s.useEffect((function(){ue.current=L}),[L]);var ce=a({isLazy:U,imgAttributes:ne,heightInt:Q,widthInt:K,qualityInt:X,className:z,imgStyle:Y,blurStyle:te,loading:S,config:T,fill:k,unoptimized:u,placeholder:I,loader:q,srcString:re,onLoadingCompleteRef:ue,setBlurComplete:G,setShowAltText:J,noscriptSizes:n},Z);return s.default.createElement(s.default.Fragment,null,s.default.createElement(x,Object.assign({},ce)),m?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ne.src+ne.srcSet+ne.sizes,rel:"preload",as:"image",href:ne.srcSet?void 0:ne.src},le))):null)};var a=n(6495).Z,l=n(92648).Z,u=n(91598).Z,c=n(17273).Z,s=u(n(67294)),d=l(n(5443)),f=n(99309),p=n(59977);n(63794);var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalFuture:!0}||{},m=g.experimentalFuture,h=void 0!==m&&m,y=g.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalFuture:!0};new Map;function b(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.width,a=e.quality,l=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var c=function(e,t,n){var r=e.deviceSizes,i=e.allSizes;if(n){for(var a,l=/(^|\s)(1?\d?\d)vw/g,u=[];a=l.exec(n);a)u.push(parseInt(a[2]));if(u.length){var c,s=.01*(c=Math).min.apply(c,o(u));return{widths:i.filter((function(e){return e>=r[0]*s})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,l),s=c.widths,d=c.kind,f=s.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:s.map((function(e,r){return"".concat(u({config:t,src:n,quality:a,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:u({config:t,src:n,quality:a,width:s[f]})}}function _(e){return"number"===typeof e||"undefined"===typeof e?e:"string"===typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function S(e,t,n,r,i){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&("blur"===n&&i(!0),null==r?void 0:r.current)){var t=e.naturalWidth,o=e.naturalHeight;r.current({naturalWidth:t,naturalHeight:o})}})))}var x=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.className,l=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.fill,p=e.placeholder,g=e.loading,m=e.srcString,h=e.config,y=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,_=e.setBlurComplete,x=e.setShowAltText,j=e.onLoad,z=e.onError,O=e.noscriptSizes,E=c(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError","noscriptSizes"]);return g=d?"lazy":g,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},E,t,{width:r,height:n,decoding:"async","data-nimg":"future".concat(f?"-fill":""),className:o,loading:g,style:a({},l,u),ref:s.useCallback((function(e){(null==e?void 0:e.complete)&&S(e,m,p,b,_)}),[m,p,b,_]),onLoad:function(e){S(e.currentTarget,m,p,b,_),j&&j(e)},onError:function(e){x(!0),"blur"===p&&_(!0),z&&z(e)}})),"blur"===p&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},E,w({config:h,src:m,unoptimized:y,width:r,quality:i,sizes:O,loader:v}),{width:r,height:n,decoding:"async","data-nimg":"future".concat(f?"-fill":""),style:l,className:o,loading:g}))))};function j(e){var t=e.config,n=e.src,r=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},28045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79361).Z,i=n(94941).Z,o=n(53929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,u=void 0!==l&&l,m=e.priority,h=void 0!==m&&m,_=e.loading,O=e.lazyRoot,C=void 0===O?null:O,k=e.lazyBoundary,A=e.className,L=e.quality,R=e.width,I=e.height,P=e.style,M=e.objectFit,N=e.objectPosition,T=e.onLoadingComplete,Z=e.placeholder,q=void 0===Z?"empty":Z,D=e.blurDataURL,B=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),W=s.useContext(g.ImageConfigContext),U=s.useMemo((function(){var e=v||W||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[W]),F=B,V=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var G=z;if("loader"in F){if(F.loader){var H=F.loader;G=function(e){e.config;var t=c(e,["config"]);return H(t)}}delete F.loader}var $="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var J=S(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(D=D||J.blurDataURL,$=J.src,(!V||"fill"!==V)&&(I=I||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var K=!h&&("lazy"===_||"undefined"===typeof _);((t="string"===typeof t?t:$).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,K=!1);b.has(t)&&(K=!1);y&&(u=!0);var Q,X=i(s.useState(!1),2),Y=X[0],ee=X[1],te=i(p.useIntersection({rootRef:C,rootMargin:k||"200px",disabled:!K}),3),ne=te[0],re=te[1],ie=te[2],oe=!K||re,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N},se=j(R),de=j(I),fe=j(L);0;var pe=Object.assign({},P,ce),ge="blur"!==q||Y?{}:{backgroundSize:M||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===V)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof de){var me=de/se,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===V?(ae.display="block",ae.position="relative",ue=!0,le.paddingTop=he):"intrinsic"===V?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ue=!0,le.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===V&&(ae.display="inline-block",ae.position="relative",ae.width=se,ae.height=de)}else 0;var ye={src:w,srcSet:void 0,sizes:void 0};oe&&(ye=x({config:U,src:t,unoptimized:u,layout:V,width:se,quality:fe,sizes:n,loader:G}));var ve=t;0;var be,we="imagesrcset",_e="imagesizes";we="imageSrcSet",_e="imageSizes";var Se=(r(be={},we,ye.srcSet),r(be,_e,ye.sizes),be),xe=s.default.useLayoutEffect,je=s.useRef(T),ze=s.useRef(t);s.useEffect((function(){je.current=T}),[T]),xe((function(){ze.current!==t&&(ie(),ze.current=t)}),[ie,t]);var Oe=a({isLazy:K,imgAttributes:ye,heightInt:de,widthInt:se,qualityInt:fe,layout:V,className:A,imgStyle:pe,blurStyle:ge,loading:_,config:U,unoptimized:u,placeholder:q,loader:G,srcString:ve,onLoadingCompleteRef:je,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},F);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:ae},ue?s.default.createElement("span",{style:le},Q?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,s.default.createElement(E,Object.assign({},Oe))),h?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},Se))):null)};var a=n(6495).Z,l=n(92648).Z,u=n(91598).Z,c=n(17273).Z,s=u(n(67294)),d=l(n(5443)),f=n(99309),p=n(57190),g=n(59977),m=(n(63794),n(82392));var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalFuture:!0}||{},y=h.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalFuture:!0},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var _=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(C(n))),a=o.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(C(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(C(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,l=e.quality,u=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(r);l)c.push(parseInt(l[2]));if(c.length){var s,d=.01*(s=Math).min.apply(s,o(c));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,u),d=s.widths,f=s.kind,p=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,r){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[p]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=_.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function O(e,t,n,r,i,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var E=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,l=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,g=e.srcString,m=e.config,h=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,_=e.onLoad,S=e.onError,j=(e.isVisible,e.noscriptSizes),z=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},z,t,{decoding:"async","data-nimg":i,className:o,style:a({},l,u),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&O(e,g,0,f,v,b)}),[w,g,i,f,v,b]),onLoad:function(e){O(e.currentTarget,g,0,f,v,b),_&&_(e)},onError:function(e){"blur"===f&&b(!0),S&&S(e)}})),(d||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},z,x({config:m,src:g,unoptimized:h,layout:i,width:n,quality:r,sizes:j,loader:y}),{decoding:"async","data-nimg":i,style:l,className:o,loading:p}))))};function C(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;n(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(92648).Z,o=n(17273).Z,a=i(n(67294)),l=n(76273),u=n(22725),c=n(63462),s=n(21018),d=n(57190),f=n(71210),p=n(98684),g="undefined"!==typeof a.default.useTransition,m={};function h(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(i?"%"+i:"")]=!0}}var y=a.default.forwardRef((function(e,t){var n,i=e.href,y=e.as,v=e.children,b=e.prefetch,w=e.passHref,_=e.replace,S=e.soft,x=e.shallow,j=e.scroll,z=e.locale,O=e.onClick,E=e.onMouseEnter,C=e.onTouchStart,k=e.legacyBehavior,A=void 0===k?!0!==Boolean(!1):k,L=o(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,!A||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var R=!1!==b,I=r(g?a.default.useTransition():[],2)[1],P=a.default.useContext(c.RouterContext),M=a.default.useContext(s.AppRouterContext);M&&(P=M);var N,T=a.default.useMemo((function(){var e=r(l.resolveHref(P,i,!0),2),t=e[0],n=e[1];return{href:t,as:y?l.resolveHref(P,y):n||t}}),[P,i,y]),Z=T.href,q=T.as,D=a.default.useRef(Z),B=a.default.useRef(q);A&&(N=a.default.Children.only(n));var W=A?N&&"object"===typeof N&&N.ref:t,U=r(d.useIntersection({rootMargin:"200px"}),3),F=U[0],V=U[1],G=U[2],H=a.default.useCallback((function(e){B.current===q&&D.current===Z||(G(),B.current=q,D.current=Z),F(e),W&&("function"===typeof W?W(e):"object"===typeof W&&(W.current=e))}),[q,W,Z,G,F]);a.default.useEffect((function(){var e=V&&R&&l.isLocalURL(Z),t="undefined"!==typeof z?z:P&&P.locale,n=m[Z+"%"+q+(t?"%"+t:"")];e&&!n&&h(P,Z,q,{locale:t})}),[q,Z,V,z,R,P]);var $={ref:H,onClick:function(e){A||"function"!==typeof O||O(e),A&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,u,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"softPush"in t&&"softReplace"in t?t[o?i?"softReplace":"softPush":i?"replace":"push"](n):t[i?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u})};s?s(d):d()}}(e,P,Z,q,_,S,x,j,z,M?I:void 0)},onMouseEnter:function(e){A||"function"!==typeof E||E(e),A&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),l.isLocalURL(Z)&&h(P,Z,q,{priority:!0})},onTouchStart:function(e){A||"function"!==typeof C||C(e),A&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),l.isLocalURL(Z)&&h(P,Z,q,{priority:!0})}};if(!A||w||"a"===N.type&&!("href"in N.props)){var J="undefined"!==typeof z?z:P&&P.locale,K=P&&P.isLocaleDomain&&f.getDomainLocale(q,J,P.locales,P.domainLocales);$.href=K||p.addBasePath(u.addLocale(q,J,P&&P.defaultLocale))}return A?a.default.cloneElement(N,$):a.default.createElement("a",Object.assign({},L,$),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,s=i.useRef(),d=r(i.useState(!1),2),f=d[0],p=d[1],g=r(i.useState(null),2),m=g[0],h=g[1];i.useEffect((function(){if(a){if(s.current&&(s.current(),s.current=void 0),c||f)return;return m&&m.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},u.push(n),l.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,c,n,t,f]);var y=i.useCallback((function(){p(!1)}),[]);return[h,f,y]};var i=n(67294),o=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(92648).Z)(n(67294)),i=r.default.createContext(null);t.AppRouterContext=i;var o=r.default.createContext(null);t.LayoutRouterContext=o;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a},90638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=i({},o,e));!1;(o=i({},o,t)).loadableGenerated&&delete(o=i({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,l(n,o);delete o.ssr}return n(o)},t.noSSR=l;var i=n(6495).Z,o=n(92648).Z,a=(o(n(67294)),o(n(14302)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},14302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,i=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,a=(0,n(92648).Z)(n(67294)),l=n(16319),u=n(67294).useSyncExternalStore,c=[],s=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return function(e,t){var n=function(){if(!c){var t=new p(e,i);c={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return c.promise()},r=function(){n();var e=a.default.useContext(l.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach((function(t){e(t)}))},i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);i.suspense&&(i.lazy=a.default.lazy(i.loader));var c=null;if(!d){var f=i.webpack?i.webpack():i.modules;f&&s.push((function(e){var t=!0,r=!1,i=void 0;try{for(var o,a=f[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var l=o.value;if(-1!==e.indexOf(l))return n()}}catch(u){r=!0,i=u}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}}))}var g=i.suspense?function(e,t){return r(),a.default.createElement(i.lazy,o({},e,{ref:t}))}:function(e,t){r();var n=u(c.subscribe,c.getCurrentValue,c.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:c.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(i.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:c.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return g.preload=function(){return n()},g.displayName="LoadableComponent",a.default.forwardRef(g)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}g.preloadAll=function(){return new Promise((function(e,t){m(c).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};m(s,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var h=g;t.default=h},5152:function(e,t,n){e.exports=n(90638)},61608:function(e,t,n){e.exports=n(98461)},9008:function(e,t,n){e.exports=n(5443)},25675:function(e,t,n){e.exports=n(28045)},41664:function(e,t,n){e.exports=n(48418)},69396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},99534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})}}]);