(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{568:function(e,t,a){Promise.resolve().then(a.bind(a,4516))},6648:function(e,t,a){"use strict";a.d(t,{default:function(){return i.a}});var n=a(5601),i=a.n(n)},6463:function(e,t,a){"use strict";var n=a(1169);a.o(n,"usePathname")&&a.d(t,{usePathname:function(){return n.usePathname}}),a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}}),a.o(n,"useSearchParams")&&a.d(t,{useSearchParams:function(){return n.useSearchParams}})},5601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return l},getImageProps:function(){return s}});let n=a(9920),i=a(497),o=a(8173),r=n._(a(1241));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let l=o.Image},4516:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(7437),i=a(2970),o=a(2265);let r=o.forwardRef(function(e,t){let{title:a,titleId:n,...i}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},i),a?o.createElement("title",{id:n},a):null,o.createElement("path",{fillRule:"evenodd",d:"M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z",clipRule:"evenodd"}))});var s=a(6463);function l(e){let{id:t,title:a,message:i,date:o,readAt:l}=e,c=(0,s.useRouter)();return(0,n.jsxs)("div",{className:"flex items-start p-4 bg-white shadow-md border border-gray-100",onClick:()=>{c.push("/noti/detail?id="+t)},children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"w-10 h-10 rounded-full bg-gradient-to-r from-[#44A5D8] to-[#15C770] flex items-center justify-center",children:(0,n.jsx)(r,{className:"w-6 h-6 text-white"})}),!l&&(0,n.jsx)("span",{className:"absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-red-500"})]}),(0,n.jsxs)("div",{className:"pl-2",children:[(0,n.jsx)("h3",{className:"text-sm font-semibold text-left text-neutral900",children:a}),(0,n.jsx)("p",{className:"text-neutral900 text-left font-light text-xs",children:i}),(0,n.jsx)("p",{className:"text-[10px] text-neutral500 text-left font-normal",children:o})]})]})}function c(e){let{notifications:t=[]}=e;return console.log("\uD83D\uDE80 ~ NotificationList ~ notifications:",t),(0,n.jsx)("div",{className:"max-w-lg",children:null==t?void 0:t.map(e=>(0,n.jsx)(l,{title:e.title,message:e.content,date:e.createdDate,readAt:e.readAt,id:e.id},e.id))})}var u=a(3874);function d(){let[e,t]=(0,o.useState)();return console.log("\uD83D\uDE80 ~ PageNoti ~ listNotification:",e),(0,o.useEffect)(()=>{u.ZP.getNotifications({page:1}).then(e=>{t(e.response)})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{title:"Th\xf4ng b\xe1o",inputSearch:!1,showPoint:!1,showBack:!0}),(0,n.jsx)("div",{className:"flex flex-col pt-2 text-center",children:(0,n.jsx)(c,{notifications:e})}),(0,n.jsx)("div",{className:"h-40"})]})}},2970:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7437),i=a(6514),o=a(2265);let r=o.forwardRef(function(e,t){let{title:a,titleId:n,...i}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},i),a?o.createElement("title",{id:n},a):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});var s=a(6648),l=a(6463),c=e=>{let{title:t,inputSearch:a=!0,showPoint:o=!0,showBack:c=!1,backUrl:u="",showInputVoucher:d=!1}=e,h=(0,l.useRouter)(),m=(0,l.usePathname)();return console.log("\uD83D\uDE80 ~ HeaderWithSearch ~ pathName:",m,m.startsWith("/noti")),(0,n.jsxs)("header",{className:"".concat(m.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,n.jsx)("div",{className:"flex justify-between items-center"}),(0,n.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,n.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex",children:[c&&(0,n.jsx)(i.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(u){h.push(u);return}h.back()}}),t]}),o&&(0,n.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,n.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,n.jsx)(s.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),d&&(0,n.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,n.jsx)("button",{children:(0,n.jsx)(s.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),a&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,n.jsx)(r,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,n.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},3874:function(e,t,a){"use strict";a.d(t,{ZP:function(){return r}});let n=async e=>{let{url:t,method:a,body:n,authorization:i,headers:o={}}=e;try{let e={"Content-Type":"application/json",...o};i&&(e.Authorization=i),("GET"===a||"DELETE"===a)&&(t="".concat(t,"?").concat(new URLSearchParams(n).toString()),n=void 0);let r=n?JSON.stringify(n):void 0,s=await fetch(t,{method:a,headers:e,body:r});return null==s?void 0:s.json()}catch(e){return console.log(e),{error:e,status:500}}},i="https://api-sandbox.vitadairyvietnam.vn",o=()=>{try{var e,t;let a=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",n=JSON.parse(a);return(null==n?void 0:null===(t=n.state)||void 0===t?void 0:t.authorization)||""}catch(e){return null}};var r={getUser:async()=>await n({url:"".concat(i,"/api-v3/loyalty/v1/user"),method:"GET",authorization:o()}),getNotificationUnread:async()=>await n({url:"".concat(i,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:o()}),getMyRewards:async()=>await n({url:"".concat(i,"/v4/gs/user-gifts"),method:"GET",authorization:o()}),sendOTP:async(e,t)=>"LOGIN"===t?(t="REGISTER",await n({url:"".concat(i,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:e,type:"log_in_calosure"}})):await n({url:"".concat(i,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:o()}),verifyOTP:async(e,t)=>await n({url:"".concat(i,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:o()}),getNotifications:async e=>{let{page:t=1,size:a=20}=e,r=await n({url:"".concat(i,"/api-v3/noti/user/noti"),method:"GET",authorization:o(),body:{page:t,size:a}});return console.log("\uD83D\uDE80 ~ getNotifications ~ response:",r),r},getDetailNotifications:async e=>{let{id:t,page:a=1,size:r=20}=e;return await n({url:"".concat(i,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:o()})},readDetailNotifications:async e=>{let{id:t}=e;return await n({url:"".concat(i,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:o(),body:{id:t}})},getAddress:async e=>{let{auth:t}=e;return await n({url:"".concat(i,"/api/recipient/me"),method:"GET",authorization:t||o()})},logout:async()=>await n({url:"".concat(i,"/api/user/logout"),method:"POST",authorization:o()}),verifyPhoneNumber:async e=>await n({url:"".concat(i,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:o(),body:{phoneNumber:e}}),getProvinces:async()=>await n({url:"".concat(i,"/api/province/vn"),method:"GET",authorization:o()}),getWardsAndDistricts:async e=>{let{code:t}=e;return await n({url:"".concat(i,"/api/province/parent/").concat(t),method:"GET",authorization:o()})},register:async e=>await n({url:"".concat(i,"/api/user/register"),method:"POST",body:e,headers:{appversioncode:12,appversionname:"3.1.2",webapp_name:"SBPS"}}),login:async(e,t)=>await n({url:"".concat(i,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:t},headers:{appversioncode:2,appversionname:"3.2.10"}})}},6514:function(e,t,a){"use strict";var n=a(2265);let i=n.forwardRef(function(e,t){let{title:a,titleId:i,...o}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),a?n.createElement("title",{id:i},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=i}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=568)}),_N_E=e.O()}]);