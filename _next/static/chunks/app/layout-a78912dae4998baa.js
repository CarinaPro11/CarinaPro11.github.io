(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5220:function(e,t,n){Promise.resolve().then(n.bind(n,8554)),Promise.resolve().then(n.bind(n,8187)),Promise.resolve().then(n.bind(n,6495)),Promise.resolve().then(n.t.bind(n,936,23)),Promise.resolve().then(n.bind(n,2824)),Promise.resolve().then(n.t.bind(n,9010,23)),Promise.resolve().then(n.t.bind(n,6444,23)),Promise.resolve().then(n.t.bind(n,1472,23)),Promise.resolve().then(n.t.bind(n,4735,23)),Promise.resolve().then(n.t.bind(n,882,23)),Promise.resolve().then(n.t.bind(n,6857,23)),Promise.resolve().then(n.t.bind(n,1577,23))},8554:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(7437),o=n(2265),i=n(1916),a=n.n(i);let s=(e,t,n)=>{let r;let o=()=>{r=setTimeout(()=>{e(),o()},Math.floor(Math.random()*(n-t+1))+t)};return o(),{clear(){clearTimeout(r)}}},c=(e,t)=>Math.floor(Math.random()*(t-e+1)+e);function l(){let e=["linear","ease"],t=["/img/bling-1.png","/img/bling-2.png","/img/bling-3.png","/img/bling-4.png","/img/bling-5.png","/img/bling-6.png"],[n,i]=(0,o.useState)([]);return(0,o.useEffect)(()=>{let n=s(()=>{let n=t[c(0,t.length-1)],r=c(16,32),o={id:Date.now(),url:n,width:r,height:r,x:c(0,100),y:c(0,100),animation:{name:"bling".concat(c(0,1)),duration:c(5,10),func:e[c(0,e.length-1)]}};i(e=>[...e,o]),setTimeout(()=>{i(e=>e.filter(e=>e.id!==o.id))},1e3*o.animation.duration)},100,1e3);return()=>{n.clear()}},[]),(0,r.jsx)("div",{className:a().background,children:(0,r.jsx)("div",{className:a().blings,children:n.map(e=>(0,r.jsx)("div",{style:{backgroundImage:'url("'.concat(e.url,'")'),backgroundSize:"".concat(e.width,"px ").concat(e.height,"px"),width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),bottom:"".concat(e.x,"%"),right:"".concat(e.y,"%"),animation:"".concat(a()[e.animation.name]," ").concat(e.animation.duration,"s ").concat(e.animation.func," 0s infinite")}},e.id))})})}},8187:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var r=n(7437),o=n(6495),i=n(4048),a=n.n(i),s=n(357);function c(){let e="".concat(s.env.AUTHOR_WEBSITE),{trackEvent:t}=(0,o.E)(),n=()=>{t("click",{url:e})};return(0,r.jsx)("footer",{className:a().footer+" rounded-start mb-1 px-2 py-1 bg-body-tertiary border",children:(0,r.jsxs)("span",{children:["Made by ",(0,r.jsx)("a",{href:e,onClick:n,onAuxClick:e=>{1===e.button&&n()},target:"_blank",children:"Pedro Alves"})]})})}},357:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(8081)},8081:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c=[],l=!1,u=-1;function d(){l&&r&&(l=!1,r.length?c=r.concat(c):u=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(r=c,c=[];++u<t;)r&&r[u].run();u=-1,t=c.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},2824:function(e,t,n){"use strict";var r=n(6800),o=n.n(r),i=n(2265),a=n(2574),s=n(7437);let c=i.forwardRef((e,t)=>{let{bsPrefix:n,fluid:r=!1,as:i="div",className:c,...l}=e,u=(0,a.vE)(n,"container");return(0,s.jsx)(i,{ref:t,...l,className:o()(c,r?"".concat(u).concat("string"==typeof r?"-".concat(r):"-fluid"):u)})});c.displayName="Container",t.default=c},2574:function(e,t,n){"use strict";n.d(t,{vE:function(){return s}});var r=n(2265);n(7437);let o=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:i,Provider:a}=o;function s(e,t){let{prefixes:n}=(0,r.useContext)(o);return e||n[t]||t}},6857:function(){},1472:function(){},882:function(){},9010:function(){},4735:function(){},6444:function(){},1916:function(e){e.exports={background:"XPABackground_background__e97j6",blings:"XPABackground_blings__Z0NaR",bling0:"XPABackground_bling0__8AEe_",bling1:"XPABackground_bling1__tSs8f"}},4048:function(e){e.exports={footer:"XPAFooter_footer__4Phuf"}},1577:function(e){e.exports={main:"XPAMain_main__02iH6",card:"XPAMain_card__Xl0Ay"}},936:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},6800:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}(n)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(n=(function(){return o}).apply(t,[]))&&(e.exports=n)}()},6495:function(e,t,n){"use strict";n.d(t,{AptabaseProvider:function(){return _},E:function(){return k}});var r,o,i,a=n(2265),s=n(7437),c=(e,t,n)=>new Promise((r,o)=>{var i=e=>{try{s(n.next(e))}catch(e){o(e)}},a=e=>{try{s(n.throw(e))}catch(e){o(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,a);s((n=n.apply(e,t)).next())}),l="undefined"!=typeof window&&void 0!==window.fetch,u="undefined"!=typeof chrome&&!!(null!=(i=chrome.runtime)&&i.id),d=h(),f=new Date,p={US:"https://us.aptabase.com",EU:"https://eu.aptabase.com",DEV:"https://localhost:3000",SH:""};function h(){return Math.floor(Date.now()/1e3).toString()+Math.floor(1e8*Math.random()).toString().padStart(8,"0")}var v,m,g="",b={};function y(e,t){return c(this,null,function*(){let n;if(!v)return;let i=(Math.floor(((n=new Date).getTime()-f.getTime())/1e3)>3600&&(d=h()),f=n,d);yield function(e){return c(this,null,function*(){var t,n,i;if(!l&&!u){console.warn('Aptabase: trackEvent requires a browser environment. Event "'.concat(e.eventName,'" will be discarded.'));return}if(!e.appKey){console.warn('Aptabase: init must be called before trackEvent. Event "'.concat(e.eventName,'" will be discarded.'));return}try{let a=yield fetch(e.apiUrl,{method:"POST",headers:{"Content-Type":"application/json","App-Key":e.appKey},credentials:"omit",body:JSON.stringify({timestamp:new Date().toISOString(),sessionId:e.sessionId,eventName:e.eventName,systemProps:{locale:null!=(t=e.locale)?t:r||("undefined"!=typeof navigator?(navigator.languages.length>0?r=navigator.languages[0]:r=navigator.language,r):void 0),isDebug:null!=(n=e.isDebug)?n:void 0!==o?o:"undefined"==typeof location?o=!1:o="localhost"===location.hostname,appVersion:null!=(i=e.appVersion)?i:"",sdkVersion:e.sdkVersion},props:e.props})});if(a.status>=300){let t=yield a.text();console.warn('Failed to send event "'.concat(e.eventName,'": ').concat(a.status," ").concat(t))}}catch(t){console.warn('Failed to send event "'.concat(e.eventName,'"')),console.warn(t)}})}({apiUrl:v,sessionId:i,appKey:g,isDebug:null==m?void 0:m.isDebug,appVersion:null==m?void 0:m.appVersion,sdkVersion:"aptabase-react@0.3.5",eventName:e,props:t})})}function x(e,t){return b[e]=t,Promise.resolve()}var w=(0,a.createContext)({isInitialized:!1});function _(e){let{appKey:t,options:n,children:r}=e,[o,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var e;let r;(3!==(r=t.split("-")).length||void 0===p[r[1]])&&(console.warn('The Aptabase App Key "'.concat(t,'" is invalid. Tracking will be disabled.')),1)||(v=null!=(e=null==n?void 0:n.apiUrl)?e:function(e,t){var n;let r=e.split("-")[1];if("SH"===r){if(!(null!=t&&t.host)){console.warn("Host parameter must be defined when using Self-Hosted App Key. Tracking will be disabled.");return}return"".concat(t.host,"/api/v0/event")}return"".concat(null!=(n=null==t?void 0:t.host)?n:p[r],"/api/v0/event")}(t,n),g=t,m=n,Object.keys(b).forEach(e=>{y(e,b[e])}),b={}),i(!0)},[t,n]),(0,s.jsx)(w.Provider,{value:{appKey:t,options:n,isInitialized:o},children:r})}function k(){let e=(0,a.useContext)(w);return e.appKey?e.isInitialized?{trackEvent:y}:{trackEvent:x}:{trackEvent:()=>(console.warn("Aptabase: useAptabase must be used within AptabaseProvider. Did you forget to wrap your app in <AptabaseProvider>?"),Promise.resolve())}}}},function(e){e.O(0,[860,398,835,99,244,971,23,744],function(){return e(e.s=5220)}),_N_E=e.O()}]);