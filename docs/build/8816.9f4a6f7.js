"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8816,1604],{51604:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(34610),i=n(65034),o=n(4453),r=n(69917);const a="@jupyterlite/pyolite-kernel-extension:kernel",s=[{id:a,autoStart:!0,requires:[o.IKernelSpecs],optional:[i.IServiceWorkerManager,r.IBroadcastChannelWrapper],activate:(e,t,i,o)=>{const r=l.PageConfig.getBaseUrl(),s=JSON.parse(l.PageConfig.getOption("litePluginSettings")||"{}")[a]||{},p=s.pyodideUrl||"https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js",d=l.URLExt.parse(p).href,c=(s.pipliteUrls||[]).map((e=>l.URLExt.parse(e).href)),y=!!s.disablePyPIFallback;t.register({spec:{name:"python",display_name:"Python (Pyodide)",language:"python",argv:[],resources:{"logo-32x32":"TODO","logo-64x64":l.URLExt.join(r,"/kernelspecs/python.svg")}},create:async e=>{const{PyoliteKernel:t}=await Promise.all([n.e(6169),n.e(732)]).then(n.bind(n,4016)),l=!(!(null==i?void 0:i.enabled)||!(null==o?void 0:o.enabled));return l?console.info("Pyolite contents will be synced with Jupyter Contents"):console.warn("Pyolite contents will NOT be synced with Jupyter Contents"),new t({...e,pyodideUrl:d,pipliteUrls:c,disablePyPIFallback:y,mountDrive:l})}})}}]}}]);
//# sourceMappingURL=8816.9f4a6f7.js.map