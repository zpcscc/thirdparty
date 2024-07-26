(self.webpackChunk_zpcscc_thirdparty=self.webpackChunk_zpcscc_thirdparty||[]).push([[904],{29779:function(b,m,u){"use strict";u.r(m),u.d(m,{demos:function(){return D}});var y=u(90228),l=u.n(y),E=u(87999),v=u.n(E),g=u(75271),P=u(87733),D={"docs-crypto-crypto-aes-demo-cryptoaes":{component:g.memo(g.lazy(function(){return u.e(433).then(u.bind(u,87147))})),asset:{type:"BLOCK",id:"docs-crypto-crypto-aes-demo-cryptoaes",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:u(29199).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@zpcscc/thirdparty":{type:"NPM",value:"0.1.1"},"@zpcscc/utils":{type:"NPM",value:"7.1.0"},antd:{type:"NPM",value:"5.19.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":u(35157),"@zpcscc/thirdparty":u(89821),"@zpcscc/utils":u(90501),antd:u(82014),react:u(75271)},renderOpts:{compile:function(){var I=v()(l()().mark(function L(){var R,W=arguments;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,u.e(381).then(u.bind(u,34381));case 2:return C.abrupt("return",(R=C.sent).default.apply(R,W));case 3:case"end":return C.stop()}},L)}));function w(){return I.apply(this,arguments)}return w}()}}}},31375:function(b,m,u){"use strict";u.r(m),u.d(m,{demos:function(){return D}});var y=u(90228),l=u.n(y),E=u(87999),v=u.n(E),g=u(75271),P=u(15906),D={"docs-crypto-crypto-base-64-demo-cryptobase64":{component:g.memo(g.lazy(function(){return u.e(433).then(u.bind(u,64154))})),asset:{type:"BLOCK",id:"docs-crypto-crypto-base-64-demo-cryptobase64",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:u(10361).Z},"@ant-design/icons":{type:"NPM",value:"5.4.0"},"@zpcscc/thirdparty":{type:"NPM",value:"0.1.1"},"@zpcscc/utils":{type:"NPM",value:"7.1.0"},antd:{type:"NPM",value:"5.19.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":u(35157),"@zpcscc/thirdparty":u(89821),"@zpcscc/utils":u(90501),antd:u(82014),react:u(75271)},renderOpts:{compile:function(){var I=v()(l()().mark(function L(){var R,W=arguments;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,u.e(381).then(u.bind(u,34381));case 2:return C.abrupt("return",(R=C.sent).default.apply(R,W));case 3:case"end":return C.stop()}},L)}));function w(){return I.apply(this,arguments)}return w}()}}}},2649:function(b,m,u){"use strict";u.r(m),u.d(m,{demos:function(){return E}});var y=u(75271),l=u(13767),E={}},6449:function(b,m,u){"use strict";u.r(m),u.d(m,{demos:function(){return E}});var y=u(75271),l=u(29310),E={}},51746:function(b,m,u){"use strict";u.r(m),u.d(m,{demos:function(){return D}});var y=u(90228),l=u.n(y),E=u(87999),v=u.n(E),g=u(75271),P=u(67967),D={"docs-screenshot-screenshot-demo-html-to-image":{component:g.memo(g.lazy(function(){return u.e(433).then(u.bind(u,17496))})),asset:{type:"BLOCK",id:"docs-screenshot-screenshot-demo-html-to-image",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:u(69095).Z},"@zpcscc/thirdparty":{type:"NPM",value:"0.1.1"},antd:{type:"NPM",value:"5.19.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@zpcscc/thirdparty":u(89821),antd:u(82014),react:u(75271)},renderOpts:{compile:function(){var I=v()(l()().mark(function L(){var R,W=arguments;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,u.e(381).then(u.bind(u,34381));case 2:return C.abrupt("return",(R=C.sent).default.apply(R,W));case 3:case"end":return C.stop()}},L)}));function w(){return I.apply(this,arguments)}return w}()}}}},94205:function(b,m,u){"use strict";var y=u(26068),l=u.n(y),E=u(90501),v=u(25778),g=u.n(v),P=v.enc.Base64,D=v.enc.Hex,I=v.enc.Utf8,w=function($){return"".concat($).slice(0,16).padEnd(16)},L={iv:"0000000000000000",mode:"CBC",padding:"Pkcs7"},R=function($){var K=l()(l()({},L),$);return{iv:I.parse(w(K.iv)),mode:v.mode[K.mode],padding:v.pad[K.padding]}},W=function($,K,j){var Z=(0,E.toString)($),H=I.parse(Z),k=I.parse(w(K)),N=R(j),X=v.AES.encrypt(H,k,N);return X.ciphertext.toString().toUpperCase()},G=function($,K,j){var Z=P.stringify(D.parse($)),H=I.parse(w(K)),k=R(j),N=v.AES.decrypt(Z,H,k),X=N.toString(I);return(0,E.toData)(X)},C={encrypt:W,decrypt:G};m.Z=C},58835:function(b,m,u){"use strict";var y=u(90501),l=u(33490),E=u.n(l),v=u(26551),g=u.n(v),P=function(L){var R=(0,y.toString)(L);return E().stringify(g().parse(R))},D=function(L){var R="";try{R=E().parse(L).toString(g())}catch(W){R="\u683C\u5F0F\u9519\u8BEF"}return(0,y.toData)(R)},I={encrypt:P,decrypt:D};m.Z=I},31291:function(b,m,u){"use strict";u.r(m),u.d(m,{cryptoAES:function(){return y.Z},cryptoBase64:function(){return l.Z}});var y=u(94205),l=u(58835),E=u(13739),v=u.n(E),g={};for(var P in E)["default","cryptoAES","cryptoBase64"].indexOf(P)<0&&(g[P]=function(D){return E[D]}.bind(0,P));u.d(m,g)},13739:function(){},89821:function(b,m,u){"use strict";u.r(m),u.d(m,{toBlob:function(){return g.SE},toCanvas:function(){return g.rT},toJpeg:function(){return g.hi},toPixelData:function(){return g.rL},toPng:function(){return g.YM},toSvg:function(){return g.KT},toSvgNode:function(){return g.Y4}});var y=u(31291),v={};for(var l in y)l!=="default"&&(v[l]=function(P){return y[P]}.bind(0,l));u.d(m,v);var E=u(1625),v={};for(var l in E)["default","cryptoAES","cryptoBase64"].indexOf(l)<0&&(v[l]=function(D){return E[D]}.bind(0,l));u.d(m,v);var g=u(14749)},1625:function(b,m,u){"use strict";u.r(m),u.d(m,{codeMessage:function(){return P.c},getErrorMsg:function(){return P.a},request:function(){return y.Z}});var y=u(10877),l=u(62425),E=u.n(l),v={};for(var g in l)["default","request"].indexOf(g)<0&&(v[g]=function(D){return l[D]}.bind(0,g));u.d(m,v);var P=u(51764)},10877:function(b,m,u){"use strict";var y=u(34520),l=u(51764),E=y.Z.create();E.interceptors.response.use(function(v){return v},l.a),m.Z=E},62425:function(){},51764:function(b,m,u){"use strict";u.d(m,{a:function(){return E},c:function(){return l}});var y=u(90501),l={200:"\u670D\u52A1\u5668\u6210\u529F\u8FD4\u56DE\u8BF7\u6C42\u7684\u6570\u636E\u3002",201:"\u65B0\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u6210\u529F\u3002",202:"\u4E00\u4E2A\u8BF7\u6C42\u5DF2\u7ECF\u8FDB\u5165\u540E\u53F0\u6392\u961F\uFF08\u5F02\u6B65\u4EFB\u52A1\uFF09\u3002",204:"\u5220\u9664\u6570\u636E\u6210\u529F\u3002",400:"\u8BF7\u6C42\u6709\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\uFF01",401:"\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09\u3002",403:"\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684\u3002",404:"\u53D1\u51FA\u7684\u8BF7\u6C42\u9488\u5BF9\u7684\u662F\u4E0D\u5B58\u5728\u7684\u8BB0\u5F55\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u64CD\u4F5C\u3002",406:"\u8BF7\u6C42\u7684\u683C\u5F0F\u4E0D\u53EF\u5F97\u3002",410:"\u8BF7\u6C42\u7684\u8D44\u6E90\u88AB\u6C38\u4E45\u5220\u9664\uFF0C\u4E14\u4E0D\u4F1A\u518D\u5F97\u5230\u7684\u3002",422:"\u5F53\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u53D1\u751F\u4E00\u4E2A\u9A8C\u8BC1\u9519\u8BEF\u3002",500:"\u670D\u52A1\u5668\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u670D\u52A1\u5668\u3002",502:"\u7F51\u5173\u9519\u8BEF\u3002",503:"\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4\u3002",504:"\u7F51\u5173\u8D85\u65F6\u3002"},E=function(g){var P,D,I,w=g==null||(P=g.response)===null||P===void 0?void 0:P.status;return{error:g,status:w,response:g==null?void 0:g.response,message:(0,y.toString)(g==null||(D=g.response)===null||D===void 0?void 0:D.data),codeMessage:l[w],statusText:g==null||(I=g.response)===null||I===void 0?void 0:I.statusText}}},14749:function(b,m,u){"use strict";u.d(m,{SE:function(){return Ur},rT:function(){return J},hi:function(){return zr},rL:function(){return Fr},YM:function(){return Kr},KT:function(){return Mr},Y4:function(){return ce}});var y=u(90228),l=u.n(y),E=u(87999),v=u.n(E),g=function(r,e){if(/^[a-z]+:\/\//i.test(r))return r;if(/^\/\//.test(r))return window.location.protocol+r;if(/^[a-z]+:/i.test(r))return r;var n=document.implementation.createHTMLDocument(),a=n.createElement("base"),t=n.createElement("a");return n.head.append(a),n.body.append(t),e&&(a.href=e),t.href=r,t.href},P=function(){var o=0,r=function(){return"0000".concat(Math.trunc(Math.random()*Math.pow(36,4)).toString(36)).slice(-4)};return function(){return o+=1,"u".concat(r()).concat(o)}}(),D=function(r){return function(e){return new Promise(function(n){setTimeout(function(){return n(e)},r)})}},I=function(r){for(var e=[],n=0,a=r.length;n<a;n++)e.push(r[n]);return e},w=function(r,e){var n=r.ownerDocument.defaultView||window,a=n.getComputedStyle(r).getPropertyValue(e);return a?Number.parseFloat(a.replace("px","")):0},L=function(r){var e=w(r,"border-left-width"),n=w(r,"border-right-width");return r.clientWidth+e+n},R=function(r){var e=w(r,"border-top-width"),n=w(r,"border-bottom-width");return r.clientHeight+e+n},W=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width||L(r),a=e.height||R(r);return{width:n,height:a}},G=function(){var r,e;try{e=process}catch(a){console.error(a)}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(r=Number.parseInt(n,10),Number.isNaN(r)&&(r=1)),r||window.devicePixelRatio||1},C=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return r.toBlob?new Promise(function(n){var a,t;r.toBlob(n,(a=e.type)!==null&&a!==void 0?a:"image/png",(t=e.quality)!==null&&t!==void 0?t:1)}):new Promise(function(n){for(var a,t,c,i=window.atob(r.toDataURL((a=e.type)!==null&&a!==void 0?a:void 0,(t=e.quality)!==null&&t!==void 0?t:void 0).split(",")[1]),s=i.length,p=new Uint8Array(s),d=0;d<s;d+=1){var f;p[d]=(f=i.codePointAt(d))!==null&&f!==void 0?f:0}n(new Blob([p],{type:(c=e.type)!==null&&c!==void 0?c:"image/png"}))})},V=function(r){return new Promise(function(e,n){var a=new Image;a.addEventListener("load",function(){return e(a)}),a.addEventListener("error",n),a.crossOrigin="anonymous",a.decoding="sync",a.loading="eager",a.src=r})},$=function(){var o=v()(l()().mark(function r(e){var n;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(function(){return new XMLSerializer().serializeToString(e)}).then(encodeURIComponent).then(function(c){return"data:image/svg+xml;charset=utf-8,".concat(c)});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),K=function(r,e,n){var a="http://www.w3.org/2000/svg",t=document.createElementNS(a,"svg"),c=document.createElementNS(a,"foreignObject");return t.setAttribute("width","".concat(e)),t.setAttribute("height","".concat(n)),t.setAttribute("viewBox","0 0 ".concat(e," ").concat(n)),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("externalResourcesRequired","true"),t.append(c),c.append(r),t},j=function(r){var e=/url\((["']?)([^"']+?)\1\)/g;return r.search(e)!==-1},Z=u(26068),H=u.n(Z),k=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:16384;(r.width>e||r.height>e)&&(r.width>e&&r.height>e?r.width>r.height?(r.height*=e/r.width,r.width=e):(r.width*=e/r.height,r.height=e):r.width>e?(r.height*=e/r.width,r.width=e):(r.width*=e/r.height,r.height=e))},N=function(r,e){var n=r.createElement("canvas"),a=n.getContext("2d"),t=e.pixelRatio||G(),c=e.canvasWidth||e.width||100,i=e.canvasHeight||e.height||100;return n.width=c*t,n.height=i*t,e.skipAutoScale||k(n,e.maximumCanvasSize),n.style.width="".concat(c),n.style.height="".concat(i),e.backgroundColor&&(a.fillStyle=e.backgroundColor,a.fillRect(0,0,n.width,n.height)),{canvas:n,context2d:a}},X=N,Me=u(31759),Oe=u.n(Me),Q=function(r){return r.nodeType===1},Te=function(r){return r.tagName==="VIDEO"},Ae=function(r){return Oe()(r.className)==="object"},ne=function(r){return r.tagName==="IMG"},Be=function(r){return Q(r)&&r.style!==void 0&&!Ae(r)},Le=function(r){return r.tagName==="image"},U=function o(r,e){if(r instanceof e)return!0;var n=Object.getPrototypeOf(r);return n===null?!1:n.constructor.name===e.name||o(n,e)},Ue=function(r){var e;return(e=r&&Q(r)?r==null?void 0:r.ownerDocument:r)!==null&&e!==void 0?e:window.document},xe=Ue,ze=function(r,e){var n=xe(e).createElement("img");return n.decoding="sync",n.loading="eager",n.src=r,n},de=ze,We=function(r,e){var n=r.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var a=e.style;return a&&Object.keys(a).forEach(function(t){n[t]=a[t]}),r},Fe=u(335),pe=u.n(Fe),$e=u(15558),Ke=u.n($e),Ve=function(r){var e=r.getPropertyValue("content");return"".concat(r.cssText," content: '").concat(e.replaceAll(/'|"/g,""),"';")},je=function(r){return I(r).map(function(e){var n=r.getPropertyValue(e),a=r.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(a?" !important":"",";")}).join(" ")},Ge=function(r,e,n){var a=".".concat(r,":").concat(e),t=n.cssText?Ve(n):je(n);return document.createTextNode("".concat(a,"{").concat(t,"}"))},fe=function(r,e,n){var a=window.getComputedStyle(r,n),t=a.getPropertyValue("content");if(!(t===""||t==="none")){var c=P();try{e.className="".concat(e.className," ").concat(c)}catch(s){return}var i=document.createElement("style");i.append(Ge(c,n,a)),e.append(i)}},He=function(r,e){fe(r,e,":before"),fe(r,e,":after")},Ze=function(r){return r.split(/,/)[1]},te=function(r){return r.search(/^(data:)/)!==-1},ve=function(r,e){return"data:".concat(e,";base64,").concat(r)},me=function(){var o=v()(l()().mark(function r(e,n,a){var t,c;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(e,n);case 2:if(t=s.sent,t.status!==404){s.next=5;break}throw new Error('Resource "'.concat(t.url,'" not found'));case 5:return s.next=7,t.blob();case 7:return c=s.sent,s.abrupt("return",new Promise(function(p,d){var f=new FileReader;f.addEventListener("error",d),f.onloadend=function(){try{p(a({res:t,result:f.result}))}catch(h){d(h)}},f.readAsDataURL(c)}));case 9:case"end":return s.stop()}},r)}));return function(e,n,a){return o.apply(this,arguments)}}(),ae={},ke=function(r,e,n){var a=r.replace(/\?.*/,"");return n&&(a=r),/ttf|otf|eot|woff2?/i.test(a)&&(a=a.replace(/.*\//,"")),e?"[".concat(e,"]").concat(a):a},ue=function(){var o=v()(l()().mark(function r(e,n,a){var t,c,i,s;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(t=ke(e,n,a.includeQueryParams),ae[t]==null){d.next=3;break}return d.abrupt("return",ae[t]);case 3:return a.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+Date.now()),d.prev=4,d.next=7,me(e,a.fetchRequestInit,function(f){var h=f.res,O=f.result;return n||(n=h.headers.get("Content-Type")||""),Ze(O)});case 7:i=d.sent,c=ve(i,n),d.next=17;break;case 11:d.prev=11,d.t0=d.catch(4),c=a.imagePlaceholder||"",s="Failed to fetch resource: ".concat(e),d.t0&&(s=typeof d.t0=="string"?d.t0:d.t0.message),s&&console.warn(s);case 17:return ae[t]=c,d.abrupt("return",c);case 19:case"end":return d.stop()}},r,null,[[4,11]])}));return function(e,n,a){return o.apply(this,arguments)}}(),ge="application/font-woff",he="image/jpeg",Ne={woff:ge,woff2:ge,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:he,jpeg:he,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"},Xe=function(r){var e=/\.([^./]*?)$/g.exec(r);return e?e[1]:""},se=function(r){var e=Xe(r).toLowerCase();return Ne[e]||""},Je=function(){var o=v()(l()().mark(function r(e){var n;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.toDataURL(),n!=="data:,"){t.next=3;break}return t.abrupt("return",e.cloneNode(!1));case 3:return t.abrupt("return",V(n));case 4:case"end":return t.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),Qe=function(){var o=v()(l()().mark(function r(e,n){var a,t,c,i,s,p;return l()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!e.currentSrc){f.next=8;break}return a=document.createElement("canvas"),t=a.getContext("2d"),a.width=e.clientWidth,a.height=e.clientHeight,t==null||t.drawImage(e,0,0,a.width,a.height),c=a.toDataURL(),f.abrupt("return",V(c));case 8:return i=e.poster,s=se(i),f.next=12,ue(i,s,n);case 12:return p=f.sent,f.abrupt("return",V(p));case 14:case"end":return f.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),Ye=function(){var o=v()(l()().mark(function r(e){var n;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e!=null&&(n=e.contentDocument)!==null&&n!==void 0&&n.body)){t.next=5;break}return t.next=4,Y(e.contentDocument.body,{},!0);case 4:return t.abrupt("return",t.sent);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error:",t.t0);case 10:return t.abrupt("return",e.cloneNode(!1));case 11:case"end":return t.stop()}},r,null,[[0,7]])}));return function(e){return o.apply(this,arguments)}}(),qe=function(){var o=v()(l()().mark(function r(e,n){return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!U(e,HTMLCanvasElement)){t.next=2;break}return t.abrupt("return",Je(e));case 2:if(!U(e,HTMLVideoElement)){t.next=4;break}return t.abrupt("return",Qe(e,n));case 4:if(!U(e,HTMLIFrameElement)){t.next=6;break}return t.abrupt("return",Ye(e));case 6:return t.abrupt("return",e.cloneNode(!1));case 7:case"end":return t.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),er=function(r){return r.tagName!=null&&r.tagName.toUpperCase()==="SLOT"},rr=function(){var o=v()(l()().mark(function r(e,n,a){var t,c,i;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(c=[],er(e)&&e.assignedNodes?c=I(e.assignedNodes()):U(e,HTMLIFrameElement)&&(t=e.contentDocument)!==null&&t!==void 0&&t.body?c=I(e.contentDocument.body.childNodes):c=I(((i=e.shadowRoot)!==null&&i!==void 0?i:e).childNodes),!(c.length===0||U(e,HTMLVideoElement))){p.next=4;break}return p.abrupt("return",n);case 4:return p.next=6,c.reduce(function(d,f){return d.then(function(){return Y(f,a)}).then(function(h){h&&n.append(h)})},Promise.resolve());case 6:return p.abrupt("return",n);case 7:case"end":return p.stop()}},r)}));return function(e,n,a){return o.apply(this,arguments)}}(),nr=function(r,e){var n=e.style;if(n){var a=window.getComputedStyle(r);a.cssText?(n.cssText=a.cssText,n.transformOrigin=a.transformOrigin):I(a).forEach(function(t){var c=a.getPropertyValue(t);if(t==="font-size"&&c.endsWith("px")){var i=Math.floor(Number.parseFloat(c.slice(0,Math.max(0,c.length-2))))-.1;c="".concat(i,"px")}U(r,HTMLIFrameElement)&&t==="display"&&c==="inline"&&(c="block"),t==="d"&&e.getAttribute("d")&&(c="path(".concat(e.getAttribute("d"),")")),n.setProperty(t,c,a.getPropertyPriority(t))})}},tr=function(r,e){U(r,HTMLTextAreaElement)&&(e.innerHTML=r.value),U(r,HTMLInputElement)&&e.setAttribute("value",r.value)},ar=function(r,e){if(U(r,HTMLSelectElement)){var n=e,a=Ke()(n.children).find(function(t){return r.value===t.getAttribute("value")});a&&a.setAttribute("selected","")}},ur=function(r,e){return U(e,Element)&&(nr(r,e),He(r,e),tr(r,e),ar(r,e)),e},sr=function(){var o=v()(l()().mark(function r(e,n){var a,t,c,i,s,p,d,f,h,O,_,A,M,F,x;return l()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(a=e.querySelectorAll?e.querySelectorAll("use"):[],a.length!==0){S.next=3;break}return S.abrupt("return",e);case 3:t={},c=pe()(a),S.prev=5,c.s();case 7:if((i=c.n()).done){S.next=19;break}if(s=i.value,p=s.getAttribute("xlink:href"),!p){S.next=17;break}if(d=e.querySelector(p),f=document.querySelector(p),!(!d&&f&&!t[p])){S.next=17;break}return S.next=16,Y(f,n,!0);case 16:t[p]=S.sent;case 17:S.next=7;break;case 19:S.next=24;break;case 21:S.prev=21,S.t0=S.catch(5),c.e(S.t0);case 24:return S.prev=24,c.f(),S.finish(24);case 27:if(h=Object.values(t),h.length>0){O="http://www.w3.org/1999/xhtml",_=document.createElementNS(O,"svg"),_.setAttribute("xmlns",O),_.style.position="absolute",_.style.width="0",_.style.height="0",_.style.overflow="hidden",_.style.display="none",A=document.createElementNS(O,"defs"),_.append(A),M=pe()(h);try{for(M.s();!(F=M.n()).done;)x=F.value,A.append(x)}catch(T){M.e(T)}finally{M.f()}e.append(_)}return S.abrupt("return",e);case 30:case"end":return S.stop()}},r,null,[[5,21,24,27]])}));return function(e,n){return o.apply(this,arguments)}}(),Y=function(){var o=v()(l()().mark(function r(e,n,a){return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!(!a&&n.filter&&!n.filter(e))){c.next=2;break}return c.abrupt("return",null);case 2:return c.abrupt("return",Promise.resolve(e).then(function(i){return qe(i,n)}).then(function(i){return rr(e,i,n)}).then(function(i){return ur(e,i)}).then(function(i){return sr(i,n)}));case 3:case"end":return c.stop()}},r)}));return function(e,n,a){return o.apply(this,arguments)}}(),ir=u(48305),cr=u.n(ir),or=u(53649),q=u.n(or),ye,lr=/url\((["']?)([^"']+?)\1\)/g,dr=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,pr=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g,fr=function(r){var e=r.replaceAll(/([$()*+./?[\\\]^{|}])/g,String.raw(ye||(ye=q()(["$1"],["\\$1"]))));return new RegExp(`(url\\(['"]?)(`.concat(e,`)(['"]?\\))`),"g")},vr=function(r){var e=[];return r.replaceAll(lr,function(n,a,t){return e.push(t),n}),e.filter(function(n){return!te(n)})},mr=function(){var o=v()(l()().mark(function r(e,n,a,t,c){var i,s,p,d;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(h.prev=0,i=a?g(n,a):n,s=se(n),!c){h.next=10;break}return h.next=6,c(i);case 6:d=h.sent,p=ve(d,s),h.next=13;break;case 10:return h.next=12,ue(i,s,t);case 12:p=h.sent;case 13:return h.abrupt("return",e.replace(fr(n),"$1".concat(p,"$3")));case 16:h.prev=16,h.t0=h.catch(0),console.log("error:",h.t0);case 19:return h.abrupt("return",e);case 20:case"end":return h.stop()}},r,null,[[0,16]])}));return function(e,n,a,t,c){return o.apply(this,arguments)}}(),gr=function(r,e){var n=e.preferredFontFormat;return n?r.replaceAll(pr,function(a){for(;;){var t=dr.exec(a)||[],c=cr()(t,3),i=c[0],s=c[2];if(!s)return"";if(s===n)return"src: ".concat(i,";")}}):r},Ee=function(){var o=v()(l()().mark(function r(e,n,a){var t,c;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(j(e)){s.next=2;break}return s.abrupt("return",e);case 2:return t=gr(e,a),c=vr(t),s.abrupt("return",c.reduce(function(p,d){return p.then(function(f){return mr(f,d,n,a)})},Promise.resolve(t)));case 5:case"end":return s.stop()}},r)}));return function(e,n,a){return o.apply(this,arguments)}}(),hr=function(){var r=navigator.userAgent,e=/iPhone|iPad|iPod/.test(r),n=/Macintosh/.test(r),a=/Safari/.test(r)&&!/Chrome|CriOS|Edg|Edge|Firefox/.test(r);return e||n&&a},yr=hr,Er=function(){yr()&&(window.drawImageCount=(window.drawImageCount||0)+1)},ie=Er,ee=function(){var o=v()(l()().mark(function r(e,n,a){var t,c,i;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(c=(t=n.style)===null||t===void 0?void 0:t.getPropertyValue(e),!c){p.next=8;break}return j(c)&&ie(),p.next=5,Ee(c,null,a);case 5:return i=p.sent,n.style.setProperty(e,i,n.style.getPropertyPriority(e)),p.abrupt("return",!0);case 8:return p.abrupt("return",!1);case 9:case"end":return p.stop()}},r)}));return function(e,n,a){return o.apply(this,arguments)}}(),Ir=function(){var o=v()(l()().mark(function r(e,n){return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee("background",e,n);case 2:if(t.sent){t.next=5;break}return t.next=5,ee("background-image",e,n);case 5:return t.next=7,ee("mask",e,n);case 7:if(t.sent){t.next=10;break}return t.next=10,ee("mask-image",e,n);case 10:case"end":return t.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),Sr=function(){var o=v()(l()().mark(function r(e,n){var a,t,c;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(a=U(e,HTMLImageElement),!(!(a&&!te(e.src))&&!(U(e,SVGImageElement)&&!te(e.href.baseVal)))){s.next=3;break}return s.abrupt("return");case 3:return t=a?e.src:e.href.baseVal,s.next=6,ue(t,se(t),n);case 6:return c=s.sent,s.next=9,new Promise(function(p,d){e.addEventListener("load",p),e.addEventListener("error",d);var f=e;f.decode&&(f.decode=p),f.loading==="lazy"&&(f.loading="eager"),a?(e.srcset="",e.src=c):e.href.baseVal=c});case 9:case"end":return s.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),Cr=function(){var o=v()(l()().mark(function r(e,n){var a,t;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=I(e.childNodes),t=a.map(function(s){return Ie(s,n)}),i.next=4,Promise.all(t).then(function(){return e});case 4:case"end":return i.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),Ie=function(){var o=v()(l()().mark(function r(e,n){var a;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!U(e,Element)){c.next=7;break}return c.next=3,Ir(e,n);case 3:return c.next=5,Sr(e,n);case 5:return c.next=7,Cr(e,n);case 7:Be(e)&&(a=["background-image","border-image-source","-webkit-border-image","-webkit-mask-image","list-style-image"],a.forEach(function(i){var s=e.style.getPropertyValue(i);if(!s||s==="none")return null;ie()})),Q(e)&&ne(e)&&ie();case 9:case"end":return c.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),Se,Ce,Pe,be={},De=function(){var o=v()(l()().mark(function r(e){var n,a,t;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=be[e],n==null){i.next=3;break}return i.abrupt("return",n);case 3:return i.next=5,fetch(e);case 5:return a=i.sent,i.next=8,a.text();case 8:return t=i.sent,n={url:e,cssText:t},be[e]=n,i.abrupt("return",n);case 12:case"end":return i.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),_e=function(r,e){var n=r.cssText,a=/url\(["']?([^"')]+)["']?\)/g,t=n.match(/url\([^)]+\)/g)||[],c=t.map(function(){var i=v()(l()().mark(function s(p){var d;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return d=p.replaceAll(a,"$1"),d.startsWith("https://")||(d=new URL(d,r.url).href),h.abrupt("return",me(d,e.fetchRequestInit,function(O){var _=O.result;return n=n.replace(p,"url(".concat(_,")")),[p,_]}));case 3:case"end":return h.stop()}},s)}));return function(s){return i.apply(this,arguments)}}());return Promise.all(c).then(function(){return n})},we=function(r){if(!r)return[];for(var e=[],n=/(\/\*[\S\s]*?\*\/)/gi,a=r.replaceAll(n,""),t=new RegExp(String.raw(Se||(Se=q()(["((@.*?keyframes [sS]*?){([sS]*?}s*?)})"],["((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})"]))),"gi");;){var c=t.exec(a);if(c===null)break;e.push(c[0])}a=a.replaceAll(t,"");for(var i=/@import[\S\s]*?url\([^)]*\)[\S\s]*?;/gi,s=String.raw(Ce||(Ce=q()(["((s*?(?:/*[sS]*?*/)?s*?@media[sS]"],["((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]"])))+String.raw(Pe||(Pe=q()(["*?){([sS]*?)}s*?})|(([sS]*?){([sS]*?)})"],["*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})"]))),p=new RegExp(s,"gi");;){var d=i.exec(a);if(d===null){if(d=p.exec(a),d===null)break;i.lastIndex=p.lastIndex}else p.lastIndex=i.lastIndex;e.push(d[0])}return e},Pr=function(){var o=v()(l()().mark(function r(e,n){var a,t;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=[],t=[],e.forEach(function(s){if("cssRules"in s)try{I(s.cssRules||[]).forEach(function(d,f){if(d.type===CSSRule.IMPORT_RULE){var h=f+1,O=d.href,_=De(O).then(function(A){return _e(A,n)}).then(function(A){return we(A).forEach(function(M){try{s.insertRule(M,M.startsWith("@import")?h+=1:s.cssRules.length)}catch(F){console.error("Error inserting rule from remote css",{rule:M,error:F})}})}).catch(function(A){console.error("Error loading remote css",A.toString())});t.push(_)}})}catch(d){var p=e.find(function(f){return f.href==null})||document.styleSheets[0];s.href!=null&&t.push(De(s.href).then(function(f){return _e(f,n)}).then(function(f){return we(f).forEach(function(h){p.insertRule(h,s.cssRules.length)})}).catch(function(f){console.error("Error loading remote stylesheet",f)})),console.error("Error inlining remote css file",d)}}),i.abrupt("return",Promise.all(t).then(function(){return e.forEach(function(s){if("cssRules"in s)try{I(s.cssRules||[]).forEach(function(p){a.push(p)})}catch(p){console.error("Error while reading CSS rules from ".concat(s.href),p)}}),a}));case 4:case"end":return i.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),br=function(r){return r.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return j(e.style.getPropertyValue("src"))})},Dr=function(){var o=v()(l()().mark(function r(e,n){var a,t;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(e.ownerDocument!=null){i.next=2;break}throw new Error("Provided element is not within a Document");case 2:return a=I(e.ownerDocument.styleSheets),i.next=5,Pr(a,n);case 5:return t=i.sent,i.abrupt("return",br(t));case 7:case"end":return i.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),_r=function(){var o=v()(l()().mark(function r(e,n){var a,t;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Dr(e,n);case 2:return a=i.sent,i.next=5,Promise.all(a.map(function(s){var p=s.parentStyleSheet?s.parentStyleSheet.href:null;return Ee(s.cssText,p,n)}));case 5:return t=i.sent,i.abrupt("return",t.join(`
`));case 7:case"end":return i.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),wr=function(){var o=v()(l()().mark(function r(e,n){var a,t,c;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(n.fontEmbedCSS!=null){s.next=11;break}if(!n.skipFonts){s.next=5;break}s.t1=null,s.next=8;break;case 5:return s.next=7,_r(e,n);case 7:s.t1=s.sent;case 8:s.t0=s.t1,s.next=12;break;case 11:s.t0=n.fontEmbedCSS;case 12:a=s.t0,a&&(t=document.createElement("style"),c=document.createTextNode(a),t.append(c),e.firstChild?e.insertBefore(t,e.firstChild):e.append(t));case 14:case"end":return s.stop()}},r)}));return function(e,n){return o.apply(this,arguments)}}(),ce=function(){var o=v()(l()().mark(function r(e){var n,a,t,c,i,s=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return n=s.length>1&&s[1]!==void 0?s[1]:{},a=W(e,n),t=a.width,c=a.height,d.next=4,Y(e,n,!0);case 4:return i=d.sent,d.next=7,wr(i,n);case 7:return d.next=9,Ie(i,n);case 9:return We(i,n),d.abrupt("return",K(i,t,c));case 11:case"end":return d.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),Rr=function(){var o=v()(l()().mark(function r(e){var n,a,t,c=arguments;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=c.length>1&&c[1]!==void 0?c[1]:{},s.next=3,ce(e,n);case 3:return a=s.sent,s.next=6,$(a);case 6:return t=s.sent,s.abrupt("return",t);case 8:case"end":return s.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),Mr=Rr,Or=function(r){var e;return(e=r&&Q(r)?r==null?void 0:r.ownerDocument:r)!==null&&e!==void 0?e:window.document},Tr=function o(r,e){return new Promise(function(n){var a=e!=null?e:{},t=a.timeout,c=a.ownerDocument,i=a.onError,s=typeof r=="string"?de(r,Or(c)):r,p=null,d=null,f=function(){var B;n(s),p&&clearTimeout(p),(B=d)===null||B===void 0||B()};if(t&&(p=setTimeout(f,t)),Te(s)){var h=s.currentSrc||s.src;if(!h){if(s.poster)return o(s.poster,e).then(n);f();return}if(s.readyState>=2){f();return}var O=f,_=function(B){i==null||i(B),f()};d=function(){s.removeEventListener("loadeddata",O),s.removeEventListener("error",_)},s.addEventListener("loadeddata",O,{once:!0}),s.addEventListener("error",_,{once:!0})}else{var A=Le(s)?s.href.baseVal:s.currentSrc||s.src;if(!A){f();return}var M=function(){var x=v()(l()().mark(function B(){return l()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(!(ne(s)&&"decode"in s)){T.next=9;break}return T.prev=1,T.next=4,s.decode();case 4:T.next=9;break;case 6:T.prev=6,T.t0=T.catch(1),console.log("error:",T.t0);case 9:f();case 10:case"end":return T.stop()}},B,null,[[1,6]])}));return function(){return x.apply(this,arguments)}}(),F=function(B){console.log("error:",B),f()};if(ne(s)&&s.complete)return M();d=function(){s.removeEventListener("load",M),s.removeEventListener("error",F)},s.addEventListener("load",M,{once:!0}),s.addEventListener("error",F,{once:!0})}})},Ar=Tr,Br=function(){var o=v()(l()().mark(function r(e){var n,a,t,c,i,s,p,d,f,h,O,_,A,M,F,x,B,S,T,oe=arguments;return l()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return n=oe.length>1&&oe[1]!==void 0?oe[1]:{},a=n.timeout,t=a===void 0?3e4:a,c=n.drawImageInterval,i=c===void 0?100:c,s=W(e,n),p=s.width,d=s.height,z.next=5,ce(e,n);case 5:return f=z.sent,z.next=8,$(f);case 8:return h=z.sent,O=de(h,f.ownerDocument),z.next=12,Ar(O,{timeout:t});case 12:_=z.sent,A=X(O.ownerDocument,H()(H()({},n),{},{width:p,height:d})),M=A.canvas,F=A.context2d,x=function(){try{F==null||F.drawImage(_,0,0,M.width,M.height)}catch(le){console.log("error:",le)}},x(),B=l()().mark(function Re(le){return l()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,new Promise(function(Vr){setTimeout(function(){x(),Vr()},le+i)});case 2:case"end":return re.stop()}},Re)}),S=0;case 18:if(!(S<((T=window.drawImageCount)!==null&&T!==void 0?T:0))){z.next=23;break}return z.delegateYield(B(S),"t0",20);case 20:S++,z.next=18;break;case 23:return window.drawImageCount=0,z.abrupt("return",M);case 25:case"end":return z.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),J=Br,Lr=function(){var o=v()(l()().mark(function r(e){var n,a,t,c=arguments;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=c.length>1&&c[1]!==void 0?c[1]:{},s.next=3,J(e,n);case 3:return a=s.sent,s.next=6,C(a);case 6:return t=s.sent,s.abrupt("return",t);case 8:case"end":return s.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),Ur=Lr,xr=function(){var o=v()(l()().mark(function r(e){var n,a,t=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=t.length>1&&t[1]!==void 0?t[1]:{},i.next=3,J(e,n);case 3:return a=i.sent,i.abrupt("return",a.toDataURL("image/jpeg",n.quality||1));case 5:case"end":return i.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),zr=xr,Wr=function(){var o=v()(l()().mark(function r(e){var n,a,t,c,i,s,p=arguments;return l()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return n=p.length>1&&p[1]!==void 0?p[1]:{},a=W(e,n),t=a.width,c=a.height,f.next=4,J(e,n);case 4:return i=f.sent,s=i.getContext("2d"),f.abrupt("return",s.getImageData(0,0,t,c).data);case 7:case"end":return f.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),Fr=Wr,$r=function(){var o=v()(l()().mark(function r(e){var n,a,t=arguments;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=t.length>1&&t[1]!==void 0?t[1]:{},i.next=3,J(e,n);case 3:return a=i.sent,i.abrupt("return",a.toDataURL());case 5:case"end":return i.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),Kr=$r},95855:function(b,m,u){"use strict";u.r(m),u.d(m,{texts:function(){return l}});var y=u(87733);const l=[{value:`// AES\u52A0\u5BC6\u914D\u7F6E
interface AESConfigType {
  // \u5BC6\u94A5\u504F\u79FB\u91CF\uFF0C16\u4F4Dhex\u5B57\u7B26\u4E32
  iv: string;
  // \u52A0\u5BC6\u6A21\u5F0F
  mode: 'CBC' | 'CFB' | 'CTR' | 'CTRGladman' | 'ECB' | 'OFB';
  // \u586B\u5145\u65B9\u6CD5
  padding: 'AnsiX923' | 'Iso10126' | 'Iso97971' | 'NoPadding' | 'Pkcs7' | 'ZeroPadding';
}

// \u52A0\u5BC6
cryptoAES.encrypt(value: string, key: string, AEScfg?: AESConfigType);
// \u89E3\u5BC6
cryptoAES.decrypt(value: string, key: string, AEScfg?: AESConfigType);
`,paraId:0,tocIndex:2},{value:"\u53C2\u6570",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"value",paraId:1,tocIndex:3},{value:"\u9700\u8981\u52A0\u5BC6\u89E3\u5BC6\u7684\u6570\u636E",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"key",paraId:1,tocIndex:3},{value:"\u5BC6\u94A5",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"AEScfg",paraId:1,tocIndex:3},{value:"AES \u52A0\u5BC6\u7684\u914D\u7F6E\u9879",paraId:1,tocIndex:3},{value:"AESConfigType",paraId:1,tocIndex:3},{value:"\u53C2\u6570",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"iv",paraId:2,tocIndex:4},{value:"\u5BC6\u94A5\u504F\u79FB\u91CF",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"0000000000000000",paraId:2,tocIndex:4},{value:"mode",paraId:2,tocIndex:4},{value:"\u52A0\u5BC6\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"CBC",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"CFB",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"CTR",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"CTRGladman",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"ECB",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"OFB",paraId:2,tocIndex:4},{value:"CBC",paraId:2,tocIndex:4},{value:"padding",paraId:2,tocIndex:4},{value:"\u586B\u5145\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"Pkcs7",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"AnsiX923",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"Iso10126",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"Iso97971",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"NoPadding",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"ZeroPadding",paraId:2,tocIndex:4},{value:"Pkcs7",paraId:2,tocIndex:4},{value:"(string):\u8FD4\u56DE\u52A0\u5BC6\u6216\u89E3\u5BC6\u8FC7\u7684\u6570\u636E\u3002",paraId:3,tocIndex:5}]},26922:function(b,m,u){"use strict";u.r(m),u.d(m,{texts:function(){return l}});var y=u(15906);const l=[{value:`// \u52A0\u5BC6
cryptoBase64.encrypt(value: string);
// \u89E3\u5BC6
cryptoBase64.decrypt(value: string);
`,paraId:0,tocIndex:2},{value:"\u53C2\u6570",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"value",paraId:1,tocIndex:3},{value:"\u9700\u8981\u52A0\u5BC6\u89E3\u5BC6\u7684\u6570\u636E",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"(string):\u8FD4\u56DE\u52A0\u5BC6\u6216\u89E3\u5BC6\u8FC7\u7684\u6570\u636E\u3002",paraId:2,tocIndex:4}]},22960:function(b,m,u){"use strict";u.r(m),u.d(m,{texts:function(){return l}});var y=u(13767);const l=[]},70330:function(b,m,u){"use strict";u.r(m),u.d(m,{texts:function(){return l}});var y=u(29310);const l=[{value:"\u62E6\u622A\u4E86 error\uFF0C\u5BF9 error \u7684\u6570\u636E\u505A\u4E86\u5904\u7406\u3002\u7528\u4E8E\u7EDF\u4E00\u5168\u5C40\u8BF7\u6C42\u62A5\u9519\u3002",paraId:0,tocIndex:0},{value:`import { request } from '@zpcscc/thirdparty';

interface ErrorMessageType {
  error: AxiosError;
  // \u9ED8\u8BA4\u8FD4\u56DE\u4FE1\u606F
  response?: AxiosResponse<any>;
  // \u72B6\u6001\u7801
  status?: keyof typeof codeMessage;
  // \u62A5\u9519\u8FD4\u56DE\u7684\u63D0\u793A\u5185\u5BB9
  message: string;
  // \u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u63D0\u793A
  codeMessage: string;
  // \u7CFB\u7EDF\u9ED8\u8BA4\u72B6\u6001\u7801\u63D0\u793A
  statusText?: string;
}

request
  .get('url')
  .then(resolve)
  .catch((error:ErrorMessageType) => reject(error));
`,paraId:1,tocIndex:0}]},5576:function(b,m,u){"use strict";u.r(m),u.d(m,{texts:function(){return l}});var y=u(67967);const l=[{value:"\u57FA\u4E8E",paraId:0,tocIndex:0},{value:"html-to-image",paraId:0,tocIndex:0},{value:` \u4FEE\u6539\u540E\u7684\u622A\u5C4F\u5E93\uFF1B
\u878D\u5408\u4E86`,paraId:0,tocIndex:0},{value:"modern-screenshot",paraId:0,tocIndex:0},{value:"\u7684\u90E8\u5206\u4EE3\u7801\uFF0C\u7528\u4E8E\u5904\u7406ios\u4E0B\uFF0C\u622A\u5C4F\u5076\u5C14\u7A7A\u767D\u7684\u95EE\u9898\u3002",paraId:0,tocIndex:0}]},29199:function(b,m){"use strict";m.Z=`import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { cryptoAES, type AESConfigType } from '@zpcscc/thirdparty';
import { toString } from '@zpcscc/utils';
import { Button, Input, Radio, Space } from 'antd';
import { useState, type FC } from 'react';

const AES: FC = () => {
  // \u5F85\u52A0\u5BC6\u6570\u636E
  const [encryptValue, setEncryptValue] = useState<string>('');
  // \u5F85\u89E3\u5BC6\u6570\u636E
  const [decryptValue, setDecryptValue] = useState<string>('');
  // \u5BC6\u94A5
  const [key, setKey] = useState<string>('1111111111111111');
  // \u5BC6\u94A5\u504F\u79FB\u91CF
  const [iv, setIv] = useState<string>('0000000000000000');
  // \u52A0\u5BC6\u6A21\u5F0F
  const [mode, setMode] = useState<AESConfigType['mode']>('CBC');
  // \u586B\u5145\u65B9\u5F0F
  const [padding, setPadding] = useState<AESConfigType['padding']>('Pkcs7');
  // aes\u52A0\u5BC6\u914D\u7F6E\uFF0C\u53EF\u9009\u9879
  const aesConfig = { iv, mode, padding };

  // \u52A0\u5BC6
  const onEncrypt = () => {
    console.log('jiam');
    setDecryptValue(cryptoAES.encrypt(encryptValue, key, aesConfig));
  };

  // \u89E3\u5BC6
  const onDecrypt = () => {
    setEncryptValue(cryptoAES.decrypt(decryptValue, key, aesConfig));
  };

  return (
    <Space direction='vertical' wrap>
      <Space direction='vertical' wrap>
        <Input
          style={{ width: '300px' }}
          placeholder={'\u8BF7\u8F93\u5165\u5BC6\u94A5'}
          addonBefore='\u5BC6\u94A5'
          maxLength={16}
          value={key}
          onChange={({ target: { value } }) => setKey(value)}
        />
        <Input
          style={{ width: '300px' }}
          placeholder={'\u8BF7\u8F93\u5165\u5BC6\u94A5\u504F\u79FB\u91CF'}
          addonBefore='\u5BC6\u94A5\u504F\u79FB\u91CF'
          maxLength={16}
          value={iv}
          onChange={({ target: { value } }) => setIv(value)}
        />
        <Space wrap>
          \u52A0\u5BC6\u6A21\u5F0F\uFF1A\uFF08\u9ED8\u8BA4\uFF1ACBC\uFF09
          <Radio.Group
            options={[
              { label: 'CBC', value: 'CBC' },
              { label: 'CFB', value: 'CFB' },
              { label: 'CTR', value: 'CTR' },
              { label: 'CTRGladman', value: 'CTRGladman' },
              { label: 'ECB', value: 'ECB' },
              { label: 'OFB', value: 'OFB' }
            ]}
            onChange={({ target: { value } }) => setMode(value)}
            value={mode}
            optionType='button'
            buttonStyle='solid'
          />
        </Space>
        <Space wrap>
          \u586B\u5145\u6A21\u5F0F\uFF1A\uFF08\u9ED8\u8BA4\uFF1APkcs7\uFF09
          <Radio.Group
            options={[
              { label: 'Pkcs7', value: 'Pkcs7' },
              { label: 'AnsiX923', value: 'AnsiX923' },
              { label: 'Iso10126', value: 'Iso10126' },
              { label: 'Iso97971', value: 'Iso97971' },
              { label: 'NoPadding', value: 'NoPadding' },
              { label: 'ZeroPadding', value: 'ZeroPadding' }
            ]}
            onChange={({ target: { value } }) => setPadding(value)}
            value={padding}
            optionType='button'
            buttonStyle='solid'
          />
        </Space>
      </Space>
      <Space wrap>
        <Input.TextArea
          rows={5}
          style={{ width: '300px' }}
          value={toString(encryptValue)}
          onChange={({ target: { value } }) => setEncryptValue(value)}
        />
        <Space direction='vertical'>
          <Button type='primary' onClick={onEncrypt} icon={<RightOutlined />}>
            \u52A0\u5BC6
          </Button>
          <Button type='primary' onClick={onDecrypt} icon={<LeftOutlined />}>
            \u89E3\u5BC6
          </Button>
        </Space>
        <Input.TextArea
          rows={5}
          style={{ width: '300px' }}
          value={toString(decryptValue)}
          onChange={({ target: { value } }) => setDecryptValue(value)}
        />
      </Space>
    </Space>
  );
};

export default AES;
`},10361:function(b,m){"use strict";m.Z=`import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { cryptoBase64 } from '@zpcscc/thirdparty';
import { toString } from '@zpcscc/utils';
import { Button, Input, Space } from 'antd';
import { useState, type FC } from 'react';

const Base64: FC = () => {
  // \u5F85\u52A0\u5BC6\u6570\u636E
  const [encryptValue, setEncryptValue] = useState<string>('');
  // \u5F85\u89E3\u5BC6\u6570\u636E
  const [decryptValue, setDecryptValue] = useState<string>('');
  // \u52A0\u5BC6
  const onEncrypt = () => {
    setDecryptValue(cryptoBase64.encrypt(encryptValue));
  };
  // \u89E3\u5BC6
  const onDecrypt = () => {
    setEncryptValue(cryptoBase64.decrypt(decryptValue));
  };

  return (
    <Space wrap>
      <Input.TextArea
        rows={5}
        style={{ width: '300px' }}
        value={toString(encryptValue)}
        onChange={(e) => setEncryptValue(e.target.value)}
      />
      <Space direction='vertical'>
        <Button type='primary' onClick={onEncrypt} icon={<RightOutlined />}>
          \u52A0\u5BC6
        </Button>
        <Button type='primary' onClick={onDecrypt} icon={<LeftOutlined />}>
          \u89E3\u5BC6
        </Button>
      </Space>
      <Input.TextArea
        rows={5}
        style={{ width: '300px' }}
        value={toString(decryptValue)}
        onChange={(e) => setDecryptValue(e.target.value)}
      />
    </Space>
  );
};

export default Base64;
`},69095:function(b,m){"use strict";m.Z=`import { toSvg } from '@zpcscc/thirdparty';
import { Button, Image, Space } from 'antd';
import { useState, type FC } from 'react';

// \u622A\u5C4F
const Screenshot: FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('https://zpcscc.top/img/logo.png');

  // \u622A\u5C4F
  const onScreenshot = async () => {
    const url = await toSvg(document.body, {
      pixelRatio: 2,
      skipFonts: true,
      drawImageInterval: 0
    });
    setImgSrc(url);
  };

  return (
    <Space direction='vertical' align='center'>
      <Image width={400} height={300} src={imgSrc} />
      <Button type='primary' onClick={onScreenshot}>
        \u622A\u53D6\u5168\u5C4F
      </Button>
    </Space>
  );
};

export default Screenshot;
`},96581:function(){}}]);
