var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,l,u,d,s,f,c,p,h,b,v,m,y,g,w={299:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(104),t.e(840),t.e(20)]).then((()=>()=>t(20))),"./extension":()=>Promise.all([t.e(104),t.e(840),t.e(20)]).then((()=>()=>t(20))),"./style":()=>t.e(747).then((()=>()=>t(747)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},j={};function k(e){var r=j[e];if(void 0!==r)return r.exports;var t=j[e]={id:e,exports:{}};return w[e].call(t.exports,t,t.exports,k),t.exports}k.m=w,k.c=j,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{9:"22dda54bb43ddfcad24e",20:"e7e7bf324fc8d9ed22d2",104:"a2543b105b910aaedf73",213:"487eb44d7f2ebb55bae5",655:"d472811295ccbf215cbf",747:"db1b011ede666813d89f",788:"7407e1ef8f7705375aba",840:"cad69bb4794b63dd9edd",870:"4cd7d76b7a2d9ae4668e"}[e]+".js?v="+{9:"22dda54bb43ddfcad24e",20:"e7e7bf324fc8d9ed22d2",104:"a2543b105b910aaedf73",213:"487eb44d7f2ebb55bae5",655:"d472811295ccbf215cbf",747:"db1b011ede666813d89f",788:"7407e1ef8f7705375aba",840:"cad69bb4794b63dd9edd",870:"4cd7d76b7a2d9ae4668e"}[e],k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyterlite/xeus-python-kernel:",k.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var s=u[d];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+a){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var o=k.S[t],i="@jupyterlite/xeus-python-kernel",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@jupyterlite/contents","0.1.0-beta.16",(()=>Promise.all([k.e(655),k.e(104)]).then((()=>()=>k(655))))),l("@jupyterlite/server","0.1.0-beta.16",(()=>Promise.all([k.e(788),k.e(104),k.e(9),k.e(840)]).then((()=>()=>k(788))))),l("@jupyterlite/xeus-python-kernel","0.6.0",(()=>Promise.all([k.e(104),k.e(840),k.e(20)]).then((()=>()=>k(20))))),l("comlink","4.3.1",(()=>k.e(870).then((()=>()=>k(870)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var r=k.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var d,s,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(d=r[i]))[0]))return!u||("u"==f?l>n&&!a:""==f!=a);if("u"==s){if(!u||"u"!=f)return!1}else if(u)if(f==s)if(l<=n){if(d!=e[l])return!1}else{if(a?d>e[l]:d<e[l])return!1;d!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||s<f!=a)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=k.S[e];if(!t||!k.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",d=(e,r,t,n)=>{var a=l(e,t);return c(e[t][a])},s=(e,r,t,n)=>{var a=l(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(u(e,t,a,n)),c(e[t][a])},f=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},c=e=>(e.loaded=1,e.get()),h=(p=e=>function(r,t,n,a){var o=k.I(r);return o&&o.then?o.then(e.bind(e,r,k.S[r],t,n,a)):e(r,k.S[r],t,n,a)})(((e,r,t)=>(i(e,t),d(r,0,t)))),b=p(((e,r,t,n)=>(i(e,t),s(r,0,t,n)))),v=p(((e,r,t,n,a)=>{var o=r&&k.o(r,t)&&f(r,t,n);return o?c(o):a()})),m={},y={15:()=>b("default","@jupyterlab/coreutils",[1,5,5,2]),526:()=>b("default","@lumino/coreutils",[1,1,11,0]),840:()=>b("default","@lumino/signaling",[1,1,10,0]),267:()=>v("default","@jupyterlite/server",[2,0,1,0,,"beta",16],(()=>Promise.all([k.e(788),k.e(9)]).then((()=>()=>k(788))))),635:()=>h("default","@jupyterlite/kernel"),684:()=>v("default","comlink",[1,4,3,1],(()=>k.e(870).then((()=>()=>k(870))))),687:()=>v("default","@jupyterlite/contents",[2,0,1,0,,"beta",16],(()=>k.e(655).then((()=>()=>k(655))))),305:()=>b("default","@jupyterlab/services",[1,6,5,2]),545:()=>b("default","@lumino/application",[1,1,27,0])},g={9:[305,545],20:[267,635,684,687],104:[15,526],840:[840]},k.f.consumes=(e,r)=>{k.o(g,e)&&g[e].forEach((e=>{if(k.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}},n=r=>{delete m[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var a=y[e]();a.then?r.push(m[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{k.b=document.baseURI||self.location.href;var e={942:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(104|840|9)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=k.p+k.u(r),i=new Error;k.l(o,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)k.o(i,n)&&(k.m[n]=i[n]);l&&l(k)}for(r&&r(t);u<o.length;u++)a=o[u],k.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunk_jupyterlite_xeus_python_kernel=self.webpackChunk_jupyterlite_xeus_python_kernel||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),k.nc=void 0;var P=k(299);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlite/xeus-python-kernel"]=P})();