(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{700:function(e,n,t){Promise.resolve().then(t.bind(t,7209))},7136:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(7437),r=t(6495),o=t(7846),a=t.n(o);function s(e){let{uri:n,icon:t="link-45deg"}=e,{trackEvent:o}=(0,r.E)(),s=()=>{o("click",{url:n})};return(0,i.jsx)("a",{className:a().link+" btn",onClick:s,onAuxClick:e=>{1===e.button&&s()},href:n,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"bi bi-"+t})})}},579:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(7437),r=t(7846),o=t.n(r),a=t(7138);function s(e){let{uri:n,icon:t="link-45deg"}=e;return(0,i.jsx)(a.default,{className:o().link+" btn",style:{fontSize:"1.2rem"},href:n,children:(0,i.jsx)("i",{className:"bi bi-"+t})})}},7209:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var i=t(7437),r=t(6800),o=t.n(r),a=t(2265),s=t(1448),c=t.n(s),l=t(2574);c().string,c().bool,c().bool,c().bool,c().bool;let u=a.forwardRef((e,n)=>{let{bsPrefix:t,className:r,fluid:a=!1,rounded:s=!1,roundedCircle:c=!1,thumbnail:u=!1,...p}=e;return t=(0,l.vE)(t,"img"),(0,i.jsx)("img",{ref:n,...p,className:o()(r,a&&"".concat(t,"-fluid"),s&&"rounded",c&&"rounded-circle",u&&"".concat(t,"-thumbnail"))})});u.displayName="Image";var p=t(8518),f=t.n(p),d=t(7136),m=JSON.parse('{"photo":"/img/photo.jpg","name":"Carina Andr\xe9","title":"","location":"Coimbra, Portugal","email":"carina.andes2@gmail.com","description":"","links":[{"uri":"https://www.linkedin.com/in/carina-andr%C3%A9","icon":"linkedin"}]}'),h=t(6495),_=t(579);function x(){let{trackEvent:e}=(0,h.E)();return(0,a.useEffect)(()=>{e("view",{page:"home",theme:"dark"})},[]),(0,i.jsxs)("div",{className:f().profile,children:[(0,i.jsx)(u,{className:f().photo,src:m.photo,alt:m.name}),(0,i.jsxs)("div",{className:f().header,children:[(0,i.jsx)("div",{className:f().name,children:m.name}),(0,i.jsx)("div",{className:f().title,children:m.title})]}),(0,i.jsxs)("div",{className:f().contact,children:[(0,i.jsxs)("div",{className:f().location,children:[(0,i.jsx)("i",{className:"bi bi-geo-alt"}),m.location]}),(0,i.jsx)("div",{className:f().email,children:(0,i.jsxs)("a",{href:"mailto:"+m.email,onClick:()=>e("click",{url:m.email}),children:[(0,i.jsx)("i",{className:"bi bi-envelope-at"}),m.email]})})]}),(0,i.jsx)("div",{className:f().description,children:m.description}),(0,i.jsx)("div",{className:f().links,children:m.links.map((e,n)=>(0,i.jsx)(d.Z,{uri:e.uri,icon:e.icon},n))}),(0,i.jsx)("div",{children:(0,i.jsx)(_.Z,{uri:"/timeline",icon:"arrow-right"})})]})}},9949:function(e,n,t){"use strict";var i=t(8877);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,o,a){if(a!==i){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:r};return t.PropTypes=t,t}},1448:function(e,n,t){e.exports=t(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2574:function(e,n,t){"use strict";t.d(n,{vE:function(){return s}});var i=t(2265);t(7437);let r=i.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:o,Provider:a}=r;function s(e,n){let{prefixes:t}=(0,i.useContext)(r);return e||t[n]||n}},7846:function(e){e.exports={link:"XPAIconLink_link__vrxp_"}},8518:function(e){e.exports={profile:"page_profile__sVhcz",photo:"page_photo__4Aj8p",header:"page_header__oRW75",name:"page_name__o7Dx1",title:"page_title__po7na",contact:"page_contact__jWuHg",description:"page_description__lvaOp",links:"page_links__t4Q_2"}},6800:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)i.call(e,t)&&e[t]&&(n=o(n,t));return n}(t)))}return e}function o(e,n){return n?e?e+" "+n:e+n:e}e.exports?(r.default=r,e.exports=r):void 0!==(t=(function(){return r}).apply(n,[]))&&(e.exports=t)}()}},function(e){e.O(0,[502,472,971,23,744],function(){return e(e.s=700)}),_N_E=e.O()}]);