(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{5777:function(e,t,n){Promise.resolve().then(n.bind(n,9690))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var r=n(5601),s=n.n(r)},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return l}});let r=n(9920),s=n(497),i=n(8173),a=r._(n(1241));function l(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=i.Image},9690:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7437),s=n(2265);let i=s.forwardRef(function(e,t){let{title:n,titleId:r,...i}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},i),n?s.createElement("title",{id:r},n):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))});var a=n(6648);function l(e){let{image:t,name:n,link:s,code:l,onClick:o}=e;return(0,r.jsx)("div",{className:" bg-gray-50 ",children:(0,r.jsx)("div",{className:"flex flex-col bg-sureface02 rounded-lg shadow-lg overflow-hidden",children:(0,r.jsxs)("div",{className:"flex p-4 items-center",onClick:o,children:[(0,r.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,r.jsx)(a.default,{src:t,alt:"image gift",width:44,height:44,className:"ml-2 rounded-full"})}),(0,r.jsxs)("div",{className:"ml-4 flex justify-between w-full items-center",children:[n&&(0,r.jsx)("p",{className:"font-medium text-xs text-neutral900",children:n}),(0,r.jsx)(i,{className:"h-4 w-4 text-neutral500 dark:text-neutral500 ",strokeWidth:2})]})]})})})}var o=n(506),c=n(6463);function u(){let e=(0,c.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{title:"Giải tr\xed",inputSearch:!1,showPoint:!1,showBack:!0}),(0,r.jsx)("div",{className:"flex flex-col pt-2 text-center",children:(0,r.jsx)(l,{name:"RINH \xd4 T\xd4 RƯỚC IPHONE VỀ NH\xc0",image:"./static/sbps/banner/banner_event.jpeg",onClick:()=>{e.push("/event/detail")}})}),(0,r.jsx)("div",{className:"h-40"})]})}},506:function(e,t,n){"use strict";var r=n(7437),s=n(6514),i=n(4380),a=n(6648),l=n(6463);t.Z=e=>{let{title:t,inputSearch:n=!0,showPoint:o=!0,showBack:c=!1,backUrl:u="",showInputVoucher:d=!1}=e,f=(0,l.useRouter)(),m=(0,l.usePathname)();return(0,r.jsxs)("header",{className:"".concat(m.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,r.jsx)("div",{className:"flex justify-between items-center"}),(0,r.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,r.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex items-center",children:[c&&(0,r.jsx)(s.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(u){f.push(u);return}f.back()}}),t]}),o&&(0,r.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,r.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,r.jsx)(a.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),d&&(0,r.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,r.jsx)("button",{onClick:()=>{f.push("/qr/detail")},children:(0,r.jsx)(a.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),n&&(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,r.jsx)(i.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,r.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},6514:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},i),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=s},4380:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},i),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=s}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=5777)}),_N_E=e.O()}]);