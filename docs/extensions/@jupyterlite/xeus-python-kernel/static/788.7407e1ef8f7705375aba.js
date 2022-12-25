(self.webpackChunk_jupyterlite_xeus_python_kernel=self.webpackChunk_jupyterlite_xeus_python_kernel||[]).push([[788],{788:(t,e,r)=>{"use strict";r.r(e),r.d(e,{IServiceWorkerManager:()=>h,JupyterLiteServer:()=>a,Router:()=>s,ServiceWorkerManager:()=>d,WORKER_NAME:()=>l});var o=r(305),n=r(545),i=r(670);class s{constructor(){this._routes=[]}get(t,e){this._add("GET",t,e)}put(t,e){this._add("PUT",t,e)}post(t,e){this._add("POST",t,e)}patch(t,e){this._add("PATCH",t,e)}delete(t,e){this._add("DELETE",t,e)}async route(t){const e=new URL(t.url),{method:r}=t,{pathname:o}=e;for(const n of this._routes){if(n.method!==r)continue;const i=o.match(n.pattern);if(!i)continue;const s=i.slice(1);let a;if("PATCH"===n.method||"PUT"===n.method||"POST"===n.method)try{a=JSON.parse(await t.text())}catch{a=void 0}return n.callback.call(null,{pathname:o,body:a,query:Object.fromEntries(e.searchParams)},...s)}throw new Error("Cannot route "+t.method+" "+t.url)}_add(t,e,r){"string"==typeof e&&(e=new RegExp(e)),this._routes.push({method:t,pattern:e,callback:r})}}class a extends n.Application{constructor(t){var e;super(t),this.name="JupyterLite Server",this.namespace=this.name,this.version="unknown",this._router=new s,this._serviceManager=new o.ServiceManager({standby:"never",serverSettings:{...o.ServerConnection.makeSettings(),WebSocket:i.WebSocket,fetch:null!==(e=this.fetch.bind(this))&&void 0!==e?e:void 0}})}get router(){return this._router}get serviceManager(){return this._serviceManager}async fetch(t,e){if(!(t instanceof Request))throw Error("Request info is not a Request");return this._router.route(t)}attachShell(t){}evtResize(t){}registerPluginModule(t){let e=t.default;Object.prototype.hasOwnProperty.call(t,"__esModule")||(e=t),Array.isArray(e)||(e=[e]),e.forEach((t=>{try{this.registerPlugin(t)}catch(t){console.error(t)}}))}registerPluginModules(t){t.forEach((t=>{this.registerPluginModule(t)}))}}var c=r(526);const u=r.p+"service-worker-b2fb40a.js",h=new c.Token("@jupyterlite/server-extension:IServiceWorkerManager"),l=`${u}`.split("/").slice(-1)[0];var p=r(840),f=r(15);class d{constructor(){this._registration=null,this._registrationChanged=new p.Signal(this),this._ready=new c.PromiseDelegate,this.initialize().catch(console.warn)}get registrationChanged(){return this._registrationChanged}get enabled(){return null!==this._registration}get ready(){return this._ready.promise}async initialize(){const{serviceWorker:t}=navigator,e=f.URLExt.join(f.PageConfig.getBaseUrl(),l);let r=null;if(t?t.controller&&(r=await t.getRegistration(t.controller.scriptURL)||null,console.info("JupyterLite ServiceWorker was already registered")):console.warn("ServiceWorkers not supported in this browser"),!r&&t)try{console.info("Registering new JupyterLite ServiceWorker",e),r=await t.register(e),console.info("JupyterLite ServiceWorker was sucessfully registered")}catch(t){console.warn(t),console.warn(`JupyterLite ServiceWorker registration unexpectedly failed: ${t}`)}this.setRegistration(r),r?this._ready.resolve(void 0):this._ready.reject(void 0)}setRegistration(t){this._registration=t,this._registrationChanged.emit(this._registration)}}},670:function(t,e,r){var o=r(155);!function(t){"use strict";var e="undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},n=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t},i=Object.prototype.hasOwnProperty;function s(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}function a(t){try{return encodeURIComponent(t)}catch(t){return null}}var c={stringify:function(t,e){e=e||"";var r,o,n=[];for(o in"string"!=typeof e&&(e="?"),t)if(i.call(t,o)){if((r=t[o])||null!=r&&!isNaN(r)||(r=""),o=a(o),r=a(r),null===o||null===r)continue;n.push(o+"="+r)}return n.length?e+n.join("&"):""},parse:function(t){for(var e,r=/([^=?#&]+)=?([^&]*)/g,o={};e=r.exec(t);){var n=s(e[1]),i=s(e[2]);null===n||null===i||n in o||(o[n]=i)}return o}},u=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,l=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function p(t){return(t||"").toString().replace(l,"")}var f=[["#","hash"],["?","query"],function(t,e){return v(e.protocol)?t.replace(/\\/g,"/"):t},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],d={hash:1,query:1};function y(t){var r,o=("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).location||{},n={},i=typeof(t=t||o);if("blob:"===t.protocol)n=new E(unescape(t.pathname),{});else if("string"===i)for(r in n=new E(t,{}),d)delete n[r];else if("object"===i){for(r in t)r in d||(n[r]=t[r]);void 0===n.slashes&&(n.slashes=u.test(t.href))}return n}function v(t){return"file:"===t||"ftp:"===t||"http:"===t||"https:"===t||"ws:"===t||"wss:"===t}function g(t,e){t=p(t),e=e||{};var r,o=h.exec(t),n=o[1]?o[1].toLowerCase():"",i=!!o[2],s=!!o[3],a=0;return i?s?(r=o[2]+o[3]+o[4],a=o[2].length+o[3].length):(r=o[2]+o[4],a=o[2].length):s?(r=o[3]+o[4],a=o[3].length):r=o[4],"file:"===n?a>=2&&(r=r.slice(2)):v(n)?r=o[4]:n?i&&(r=r.slice(2)):a>=2&&v(e.protocol)&&(r=o[4]),{protocol:n,slashes:i||v(n),slashesCount:a,rest:r}}function E(t,e,r){if(t=p(t),!(this instanceof E))return new E(t,e,r);var o,i,s,a,u,h,l=f.slice(),d=typeof e,m=this,b=0;for("object"!==d&&"string"!==d&&(r=e,e=null),r&&"function"!=typeof r&&(r=c.parse),o=!(i=g(t||"",e=y(e))).protocol&&!i.slashes,m.slashes=i.slashes||o&&e.slashes,m.protocol=i.protocol||e.protocol||"",t=i.rest,("file:"===m.protocol||!i.slashes&&(i.protocol||i.slashesCount<2||!v(m.protocol)))&&(l[3]=[/(.*)/,"pathname"]);b<l.length;b++)"function"!=typeof(a=l[b])?(s=a[0],h=a[1],s!=s?m[h]=t:"string"==typeof s?~(u=t.indexOf(s))&&("number"==typeof a[2]?(m[h]=t.slice(0,u),t=t.slice(u+a[2])):(m[h]=t.slice(u),t=t.slice(0,u))):(u=s.exec(t))&&(m[h]=u[1],t=t.slice(0,u.index)),m[h]=m[h]||o&&a[3]&&e[h]||"",a[4]&&(m[h]=m[h].toLowerCase())):t=a(t,m);r&&(m.query=r(m.query)),o&&e.slashes&&"/"!==m.pathname.charAt(0)&&(""!==m.pathname||""!==e.pathname)&&(m.pathname=function(t,e){if(""===t)return e;for(var r=(e||"/").split("/").slice(0,-1).concat(t.split("/")),o=r.length,n=r[o-1],i=!1,s=0;o--;)"."===r[o]?r.splice(o,1):".."===r[o]?(r.splice(o,1),s++):s&&(0===o&&(i=!0),r.splice(o,1),s--);return i&&r.unshift(""),"."!==n&&".."!==n||r.push(""),r.join("/")}(m.pathname,e.pathname)),"/"!==m.pathname.charAt(0)&&v(m.protocol)&&(m.pathname="/"+m.pathname),n(m.port,m.protocol)||(m.host=m.hostname,m.port=""),m.username=m.password="",m.auth&&(a=m.auth.split(":"),m.username=a[0]||"",m.password=a[1]||""),m.origin="file:"!==m.protocol&&v(m.protocol)&&m.host?m.protocol+"//"+m.host:"null",m.href=m.toString()}E.prototype={set:function(t,e,r){var o=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(r||c.parse)(e)),o[t]=e;break;case"port":o[t]=e,n(e,o.protocol)?e&&(o.host=o.hostname+":"+e):(o.host=o.hostname,o[t]="");break;case"hostname":o[t]=e,o.port&&(e+=":"+o.port),o.host=e;break;case"host":o[t]=e,/:\d+$/.test(e)?(e=e.split(":"),o.port=e.pop(),o.hostname=e.join(":")):(o.hostname=e,o.port="");break;case"protocol":o.protocol=e.toLowerCase(),o.slashes=!r;break;case"pathname":case"hash":if(e){var i="pathname"===t?"/":"#";o[t]=e.charAt(0)!==i?i+e:e}else o[t]=e;break;default:o[t]=e}for(var s=0;s<f.length;s++){var a=f[s];a[4]&&(o[a[1]]=o[a[1]].toLowerCase())}return o.origin="file:"!==o.protocol&&v(o.protocol)&&o.host?o.protocol+"//"+o.host:"null",o.href=o.toString(),o},toString:function(t){t&&"function"==typeof t||(t=c.stringify);var e,r=this,o=r.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var n=o+(r.slashes||v(r.protocol)?"//":"");return r.username&&(n+=r.username,r.password&&(n+=":"+r.password),n+="@"),n+=r.host+r.pathname,(e="object"==typeof r.query?t(r.query):r.query)&&(n+="?"!==e.charAt(0)?"?"+e:e),r.hash&&(n+=r.hash),n}},E.extractProtocol=g,E.location=y,E.trimLeft=p,E.qs=c;var m=E;function b(t,e){setTimeout((function(e){return t.call(e)}),4,e)}function w(t,e){void 0!==o&&console[t].call(null,e)}function S(t,e){void 0===t&&(t=[]);var r=[];return t.forEach((function(t){e(t)||r.push(t)})),r}var O=function(){this.listeners={}};function k(t){var e=t.indexOf("?");return e>=0?t.slice(0,e):t}O.prototype.addEventListener=function(t,e){"function"==typeof e&&(Array.isArray(this.listeners[t])||(this.listeners[t]=[]),0===function(t,e){void 0===t&&(t=[]);var r=[];return t.forEach((function(t){e(t)&&r.push(t)})),r}(this.listeners[t],(function(t){return t===e})).length&&this.listeners[t].push(e))},O.prototype.removeEventListener=function(t,e){var r=this.listeners[t];this.listeners[t]=S(r,(function(t){return t===e}))},O.prototype.dispatchEvent=function(t){for(var e=this,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];var n=t.type,i=this.listeners[n];return!!Array.isArray(i)&&(i.forEach((function(o){r.length>0?o.apply(e,r):o.call(e,t)})),!0)};var C=function(){this.urlMap={}};C.prototype.attachWebSocket=function(t,e){var r=k(e),o=this.urlMap[r];if(o&&o.server&&-1===o.websockets.indexOf(t))return o.websockets.push(t),o.server},C.prototype.addMembershipToRoom=function(t,e){var r=this.urlMap[k(t.url)];r&&r.server&&-1!==r.websockets.indexOf(t)&&(r.roomMemberships[e]||(r.roomMemberships[e]=[]),r.roomMemberships[e].push(t))},C.prototype.attachServer=function(t,e){var r=k(e);if(!this.urlMap[r])return this.urlMap[r]={server:t,websockets:[],roomMemberships:{}},t},C.prototype.serverLookup=function(t){var e=k(t),r=this.urlMap[e];if(r)return r.server},C.prototype.websocketsLookup=function(t,e,r){var o,n=k(t),i=this.urlMap[n];return o=i?i.websockets:[],e&&(o=i.roomMemberships[e]||[]),r?o.filter((function(t){return t!==r})):o},C.prototype.removeServer=function(t){delete this.urlMap[k(t)]},C.prototype.removeWebSocket=function(t,e){var r=k(e),o=this.urlMap[r];o&&(o.websockets=S(o.websockets,(function(e){return e===t})))},C.prototype.removeMembershipFromRoom=function(t,e){var r=this.urlMap[k(t.url)],o=r.roomMemberships[e];r&&null!==o&&(r.roomMemberships[e]=S(o,(function(e){return e===t})))};var L=new C,_=1e3,T=1005,R=1006,N={CONSTRUCTOR_ERROR:"Failed to construct 'WebSocket':",CLOSE_ERROR:"Failed to execute 'close' on 'WebSocket':",EVENT:{CONSTRUCT:"Failed to construct 'Event':",MESSAGE:"Failed to construct 'MessageEvent':",CLOSE:"Failed to construct 'CloseEvent':"}},P=function(){};P.prototype.stopPropagation=function(){},P.prototype.stopImmediatePropagation=function(){},P.prototype.initEvent=function(t,e,r){void 0===t&&(t="undefined"),void 0===e&&(e=!1),void 0===r&&(r=!1),this.type=""+t,this.bubbles=Boolean(e),this.cancelable=Boolean(r)};var W=function(t){function e(e,r){if(void 0===r&&(r={}),t.call(this),!e)throw new TypeError(N.EVENT_ERROR+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(N.EVENT_ERROR+" parameter 2 ('eventInitDict') is not an object.");var o=r.bubbles,n=r.cancelable;this.type=""+e,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!n&&Boolean(n),this.cancelBubble=!1,this.bubbles=!!o&&Boolean(o)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(P),A=function(t){function e(e,r){if(void 0===r&&(r={}),t.call(this),!e)throw new TypeError(N.EVENT.MESSAGE+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(N.EVENT.MESSAGE+" parameter 2 ('eventInitDict') is not an object");var o=r.bubbles,n=r.cancelable,i=r.data,s=r.origin,a=r.lastEventId,c=r.ports;this.type=""+e,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!n&&Boolean(n),this.canncelBubble=!1,this.bubbles=!!o&&Boolean(o),this.origin=""+s,this.ports=void 0===c?null:c,this.data=void 0===i?null:i,this.lastEventId=""+(a||"")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(P),j=function(t){function e(e,r){if(void 0===r&&(r={}),t.call(this),!e)throw new TypeError(N.EVENT.CLOSE+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(N.EVENT.CLOSE+" parameter 2 ('eventInitDict') is not an object");var o=r.bubbles,n=r.cancelable,i=r.code,s=r.reason,a=r.wasClean;this.type=""+e,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!n&&Boolean(n),this.cancelBubble=!1,this.bubbles=!!o&&Boolean(o),this.code="number"==typeof i?parseInt(i,10):0,this.reason=""+(s||""),this.wasClean=!!a&&Boolean(a)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(P);function M(t){var e=t.type,r=t.target,o=new W(e);return r&&(o.target=r,o.srcElement=r,o.currentTarget=r),o}function x(t){var e=t.type,r=t.origin,o=t.data,n=t.target,i=new A(e,{data:o,origin:r});return n&&(i.target=n,i.srcElement=n,i.currentTarget=n),i}function I(t){var e=t.code,r=t.reason,o=t.type,n=t.target,i=t.wasClean;i||(i=e===_||e===T);var s=new j(o,{code:e,reason:r,wasClean:i});return n&&(s.target=n,s.srcElement=n,s.currentTarget=n),s}function D(t,e,r){t.readyState=B.CLOSING;var o=L.serverLookup(t.url),n=I({type:"close",target:t.target,code:e,reason:r}),i=I({type:"server::close",target:t,code:e,reason:r});b((function(){L.removeWebSocket(t,t.url),t.readyState=B.CLOSED,t.dispatchEvent(n),t.dispatchEvent(i),o&&o.dispatchEvent(n,o)}),t)}function G(t){return"[object Blob]"===Object.prototype.toString.call(t)||t instanceof ArrayBuffer||(t=String(t)),t}var U=new WeakMap;function q(t){if(U.has(t))return U.get(t);var e=new Proxy(t,{get:function(r,o){return"close"===o?function(t){void 0===t&&(t={});var r=t.code||_,o=t.reason||"";D(e,r,o)}:"send"===o?function(e){e=G(e),t.dispatchEvent(x({type:"message",data:e,origin:this.url,target:t}))}:"on"===o?function(e,r){t.addEventListener("server::"+e,r)}:"target"===o?t:r[o]}});return U.set(t,e),e}var B=function(t){function e(r,o){t.call(this),this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null,this.url=function(t){var e=new m(t),r=e.pathname,o=e.protocol,n=e.hash;if(!t)throw new TypeError(N.CONSTRUCTOR_ERROR+" 1 argument required, but only 0 present.");if(r||(e.pathname="/"),""===o)throw new SyntaxError(N.CONSTRUCTOR_ERROR+" The URL '"+e.toString()+"' is invalid.");if("ws:"!==o&&"wss:"!==o)throw new SyntaxError(N.CONSTRUCTOR_ERROR+" The URL's scheme must be either 'ws' or 'wss'. '"+o+"' is not allowed.");if(""!==n)throw new SyntaxError(N.CONSTRUCTOR_ERROR+" The URL contains a fragment identifier ('"+n+"'). Fragment identifiers are not allowed in WebSocket URLs.");return e.toString()}(r),o=function(t){if(void 0===t&&(t=[]),!Array.isArray(t)&&"string"!=typeof t)throw new SyntaxError(N.CONSTRUCTOR_ERROR+" The subprotocol '"+t.toString()+"' is invalid.");"string"==typeof t&&(t=[t]);var e=t.map((function(t){return{count:1,protocol:t}})).reduce((function(t,e){return t[e.protocol]=(t[e.protocol]||0)+e.count,t}),{}),r=Object.keys(e).filter((function(t){return e[t]>1}));if(r.length>0)throw new SyntaxError(N.CONSTRUCTOR_ERROR+" The subprotocol '"+r[0]+"' is duplicated.");return t}(o),this.protocol=o[0]||"",this.binaryType="blob",this.readyState=e.CONNECTING;var n=q(this),i=L.attachWebSocket(n,this.url);b((function(){if(i)if(i.options.verifyClient&&"function"==typeof i.options.verifyClient&&!i.options.verifyClient())this.readyState=e.CLOSED,w("error","WebSocket connection to '"+this.url+"' failed: HTTP Authentication failed; no valid credentials available"),L.removeWebSocket(n,this.url),this.dispatchEvent(M({type:"error",target:this})),this.dispatchEvent(I({type:"close",target:this,code:_}));else{if(i.options.selectProtocol&&"function"==typeof i.options.selectProtocol){var t=i.options.selectProtocol(o),r=""!==t,s=-1!==o.indexOf(t);if(r&&!s)return this.readyState=e.CLOSED,w("error","WebSocket connection to '"+this.url+"' failed: Invalid Sub-Protocol"),L.removeWebSocket(n,this.url),this.dispatchEvent(M({type:"error",target:this})),void this.dispatchEvent(I({type:"close",target:this,code:_}));this.protocol=t}this.readyState=e.OPEN,this.dispatchEvent(M({type:"open",target:this})),i.dispatchEvent(M({type:"connection"}),n)}else this.readyState=e.CLOSED,this.dispatchEvent(M({type:"error",target:this})),this.dispatchEvent(I({type:"close",target:this,code:_})),w("error","WebSocket connection to '"+this.url+"' failed")}),this)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={onopen:{},onmessage:{},onclose:{},onerror:{}};return r.onopen.get=function(){return this._onopen},r.onmessage.get=function(){return this._onmessage},r.onclose.get=function(){return this._onclose},r.onerror.get=function(){return this._onerror},r.onopen.set=function(t){this.removeEventListener("open",this._onopen),this._onopen=t,this.addEventListener("open",t)},r.onmessage.set=function(t){this.removeEventListener("message",this._onmessage),this._onmessage=t,this.addEventListener("message",t)},r.onclose.set=function(t){this.removeEventListener("close",this._onclose),this._onclose=t,this.addEventListener("close",t)},r.onerror.set=function(t){this.removeEventListener("error",this._onerror),this._onerror=t,this.addEventListener("error",t)},e.prototype.send=function(t){var r=this;if(this.readyState===e.CLOSING||this.readyState===e.CLOSED)throw new Error("WebSocket is already in CLOSING or CLOSED state");var o=x({type:"server::message",origin:this.url,data:G(t)}),n=L.serverLookup(this.url);n&&b((function(){r.dispatchEvent(o,t)}),n)},e.prototype.close=function(t,r){if(void 0!==t&&("number"!=typeof t||1e3!==t&&(t<3e3||t>4999)))throw new TypeError(N.CLOSE_ERROR+" The code must be either 1000, or between 3000 and 4999. "+t+" is neither.");if(void 0!==r&&(o=r,n=encodeURIComponent(o).match(/%[89ABab]/g),o.length+(n?n.length:0)>123))throw new SyntaxError(N.CLOSE_ERROR+" The message must not be greater than 123 bytes.");var o,n;if(this.readyState!==e.CLOSING&&this.readyState!==e.CLOSED){var i=q(this);this.readyState===e.CONNECTING?function(t,e,r){t.readyState=B.CLOSING;var o=L.serverLookup(t.url),n=I({type:"close",target:t.target,code:e,reason:r,wasClean:!1}),i=I({type:"server::close",target:t,code:e,reason:r,wasClean:!1}),s=M({type:"error",target:t.target});b((function(){L.removeWebSocket(t,t.url),t.readyState=B.CLOSED,t.dispatchEvent(s),t.dispatchEvent(n),t.dispatchEvent(i),o&&o.dispatchEvent(n,o)}),t)}(i,t||R,r):D(i,t||T,r)}},Object.defineProperties(e.prototype,r),e}(O);B.CONNECTING=0,B.prototype.CONNECTING=B.CONNECTING,B.OPEN=1,B.prototype.OPEN=B.OPEN,B.CLOSING=2,B.prototype.CLOSING=B.CLOSING,B.CLOSED=3,B.prototype.CLOSED=B.CLOSED;function F(){return"undefined"!=typeof window?window:"object"==typeof o&&"object"==typeof r.g?r.g:this}var V={mock:!0,verifyClient:null,selectProtocol:null},z=function(t){function e(e,r){void 0===r&&(r=V),t.call(this);var o=new m(e);if(o.pathname||(o.pathname="/"),this.url=o.toString(),this.originalWebSocket=null,!L.attachServer(this,this.url))throw this.dispatchEvent(M({type:"error"})),new Error("A mock server is already listening on this url");this.options=Object.assign({},V,r),this.options.mock&&this.mockWebsocket()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.mockWebsocket=function(){var t=F();this.originalWebSocket=t.WebSocket,t.WebSocket=B},e.prototype.restoreWebsocket=function(){var t=F();null!==this.originalWebSocket&&(t.WebSocket=this.originalWebSocket),this.originalWebSocket=null},e.prototype.stop=function(t){void 0===t&&(t=function(){}),this.options.mock&&this.restoreWebsocket(),L.removeServer(this.url),"function"==typeof t&&t()},e.prototype.on=function(t,e){this.addEventListener(t,e)},e.prototype.close=function(t){void 0===t&&(t={});var e=t.code,r=t.reason,o=t.wasClean,n=L.websocketsLookup(this.url);L.removeServer(this.url),n.forEach((function(t){t.readyState=B.CLOSED,t.dispatchEvent(I({type:"close",target:t.target,code:e||_,reason:r||"",wasClean:o}))})),this.dispatchEvent(I({type:"close"}),this)},e.prototype.emit=function(t,e,r){var o=this;void 0===r&&(r={});var n=r.websockets;n||(n=L.websocketsLookup(this.url)),e="object"!=typeof r||arguments.length>3?(e=Array.prototype.slice.call(arguments,1,arguments.length)).map((function(t){return G(t)})):G(e),n.forEach((function(r){Array.isArray(e)?r.dispatchEvent.apply(r,[x({type:t,data:e,origin:o.url,target:r.target})].concat(e)):r.dispatchEvent(x({type:t,data:e,origin:o.url,target:r.target}))}))},e.prototype.clients=function(){return L.websocketsLookup(this.url)},e.prototype.to=function(t,e,r){var o=this;void 0===r&&(r=[]);var n=this,i=r.concat(L.websocketsLookup(this.url,t,e)).reduce((function(t,e){return t.indexOf(e)>-1?t:t.concat(e)}),[]);return{to:function(t,e){return o.to.call(o,t,e,i)},emit:function(t,e){n.emit(t,e,{websockets:i})}}},e.prototype.in=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.to.apply(null,t)},e.prototype.simulate=function(t){var e=L.websocketsLookup(this.url);"error"===t&&e.forEach((function(t){t.readyState=B.CLOSED,t.dispatchEvent(M({type:"error"}))}))},e}(O);z.of=function(t){return new z(t)};var J=function(t){function e(r,o){var n=this;void 0===r&&(r="socket.io"),void 0===o&&(o=""),t.call(this),this.binaryType="blob";var i=new m(r);i.pathname||(i.pathname="/"),this.url=i.toString(),this.readyState=e.CONNECTING,this.protocol="",this.target=this,"string"==typeof o||"object"==typeof o&&null!==o?this.protocol=o:Array.isArray(o)&&o.length>0&&(this.protocol=o[0]);var s=L.attachWebSocket(this,this.url);b((function(){s?(this.readyState=e.OPEN,s.dispatchEvent(M({type:"connection"}),s,this),s.dispatchEvent(M({type:"connect"}),s,this),this.dispatchEvent(M({type:"connect",target:this}))):(this.readyState=e.CLOSED,this.dispatchEvent(M({type:"error",target:this})),this.dispatchEvent(I({type:"close",target:this,code:_})),w("error","Socket.io connection to '"+this.url+"' failed"))}),this),this.addEventListener("close",(function(t){n.dispatchEvent(I({type:"disconnect",target:t.target,code:t.code}))}))}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={broadcast:{}};return e.prototype.close=function(){if(this.readyState===e.OPEN){var t=L.serverLookup(this.url);return L.removeWebSocket(this,this.url),this.readyState=e.CLOSED,this.dispatchEvent(I({type:"close",target:this,code:_})),t&&t.dispatchEvent(I({type:"disconnect",target:this,code:_}),t),this}},e.prototype.disconnect=function(){return this.close()},e.prototype.emit=function(t){for(var r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];if(this.readyState!==e.OPEN)throw new Error("SocketIO is already in CLOSING or CLOSED state");var n=x({type:t,origin:this.url,data:r}),i=L.serverLookup(this.url);return i&&i.dispatchEvent.apply(i,[n].concat(r)),this},e.prototype.send=function(t){return this.emit("message",t),this},r.broadcast.get=function(){if(this.readyState!==e.OPEN)throw new Error("SocketIO is already in CLOSING or CLOSED state");var t=this,r=L.serverLookup(this.url);if(!r)throw new Error("SocketIO can not find a server at the specified URL ("+this.url+")");return{emit:function(e,o){return r.emit(e,o,{websockets:L.websocketsLookup(t.url,null,t)}),t},to:function(e){return r.to(e,t)},in:function(e){return r.in(e,t)}}},e.prototype.on=function(t,e){return this.addEventListener(t,e),this},e.prototype.off=function(t,e){this.removeEventListener(t,e)},e.prototype.hasListeners=function(t){var e=this.listeners[t];return!!Array.isArray(e)&&!!e.length},e.prototype.join=function(t){L.addMembershipToRoom(this,t)},e.prototype.leave=function(t){L.removeMembershipFromRoom(this,t)},e.prototype.to=function(t){return this.broadcast.to(t)},e.prototype.in=function(){return this.to.apply(null,arguments)},e.prototype.dispatchEvent=function(t){for(var e=this,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];var n=t.type,i=this.listeners[n];if(!Array.isArray(i))return!1;i.forEach((function(o){r.length>0?o.apply(e,r):o.call(e,t.data?t.data:t)}))},Object.defineProperties(e.prototype,r),e}(O);J.CONNECTING=0,J.OPEN=1,J.CLOSING=2,J.CLOSED=3;var $=function(t,e){return new J(t,e)};$.connect=function(t,e){return $(t,e)};var H=z,Z=B,K=$;t.Server=H,t.WebSocket=Z,t.SocketIO=K,Object.defineProperty(t,"__esModule",{value:!0})}(e)},155:t=>{var e,r,o=t.exports={};function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===n||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:n}catch(t){e=n}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var a,c=[],u=!1,h=-1;function l(){u&&a&&(u=!1,a.length?c=a.concat(c):h=-1,c.length&&p())}function p(){if(!u){var t=s(l);u=!0;for(var e=c.length;e;){for(a=c,c=[];++h<e;)a&&a[h].run();h=-1,e=c.length}a=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new f(t,e)),1!==c.length||u||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);