(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{5843:function(e,t,n){Promise.resolve().then(n.bind(n,1263))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var r=n(5601),s=n.n(r)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return a}});let r=n(9920),s=n(497),i=n(8173),l=r._(n(1241));function a(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=i.Image},1263:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7437),s=n(506),i=n(6981),l=n(3056),a=n(2826),o=n(2265);function c(){let{user:e}=(0,l.Z)();(0,o.useEffect)(()=>{(0,i.x)({event:"ev_content_click_chat",pr_event_group:"content",pr_start_time:(0,a.e)(),pr_user_id:(null==e?void 0:e.id)||null})},[]);let{point:t,name:n,source:c,phoneNumber:u}=e|{};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{title:"Nhắn tin",inputSearch:!1,showPoint:!1,showBack:!0}),(0,r.jsx)("div",{className:"flex flex-col pt-2 text-center w-full h-full",children:(0,r.jsx)("iframe",{src:"https://vitadairy-webview.vinbase.ai/?username=guest&userphone=".concat(u,"&gender=1"),className:"w-full h-full",frameBorder:"0",allowFullScreen:!0})})]})}},506:function(e,t,n){"use strict";var r=n(7437),s=n(6514),i=n(4380),l=n(6648),a=n(6463);t.Z=e=>{let{title:t,inputSearch:n=!0,showPoint:o=!0,showBack:c=!1,backUrl:u="",showInputVoucher:d=!1}=e,f=(0,a.useRouter)(),h=(0,a.usePathname)();return(0,r.jsxs)("header",{className:"".concat(h.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,r.jsx)("div",{className:"flex justify-between items-center"}),(0,r.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,r.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex",children:[c&&(0,r.jsx)(s.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(u){f.push(u);return}f.back()}}),t]}),o&&(0,r.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,r.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,r.jsx)(l.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),d&&(0,r.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,r.jsx)("button",{onClick:()=>{f.push("/qr/detail")},children:(0,r.jsx)(l.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),n&&(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,r.jsx)(i.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,r.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},6514:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},i),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=s},4380:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},i),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=s}},function(e){e.O(0,[173,461,56,971,23,744],function(){return e(e.s=5843)}),_N_E=e.O()}]);