(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6714:function(e,t,n){Promise.resolve().then(n.bind(n,5261))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return l.a}});var s=n(5601),l=n.n(s)},6463:function(e,t,n){"use strict";var s=n(1169);n.o(s,"usePathname")&&n.d(t,{usePathname:function(){return s.usePathname}}),n.o(s,"useRouter")&&n.d(t,{useRouter:function(){return s.useRouter}}),n.o(s,"useSearchParams")&&n.d(t,{useSearchParams:function(){return s.useSearchParams}})},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},getImageProps:function(){return r}});let s=n(9920),l=n(497),i=n(8173),a=s._(n(1241));function r(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let u=i.Image},5261:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var s=n(7437),l=n(795),i=n(1292),a=n(1555),r=n(6463),u=n(2265),o=n(6648);function c(e){let{isOpen:t,togglePopup:n}=e;return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("div",{className:"fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 w-full",children:(0,s.jsxs)("div",{className:"mt-6 space-y-2 w-full p-4",children:[(0,s.jsxs)("button",{onClick:()=>{window.location.href="tel:1900633559"},className:"w-full px-4 py-2 bg-white rounded-lg text-[#1F86F6] text-sm h-11 flex justify-between items-center ",children:[(0,s.jsx)(o.default,{src:"/static/sbps/icons/support.svg",alt:"Call",width:24,height:24,className:"pl-0"}),(0,s.jsx)("span",{className:"mx-auto text-sm font-medium",children:"Call 1900 633559"})]}),(0,s.jsx)("button",{onClick:n,className:"w-full px-4 py-2 bg-white rounded-lg h-11 font-semibold text-[#1F86F6]",children:"Cancel"})]})})})}let d={image_url:"/static/sbps/banner/banner_main.jpeg",image_alt:"Banner",width:343,height:180,key:"banner-join"};function m(){console.log("re-render JoinNowPage");let e=(0,r.useRouter)(),t=()=>{e.push("/login")},[n,o]=(0,u.useState)(!1),m=()=>{o(!n)},f=[{image_url:"/static/sbps/icons/medal.svg",imag_alt:"QR Code",name:"Hướng dẫn",url:"/instruct",key:"guide"},{image_url:"/static/sbps/icons/earth.svg",imag_alt:"QR Code",name:"Thể lệ ",url:"/rules",key:"rules"},{image_url:"/static/sbps/icons/call.svg",imag_alt:"QR Code",name:"Hotline",url:"",key:"hotline",onClick:m}];return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen bg-white space-y-4 p-5",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(a.$T,{})}),(0,s.jsx)("div",{className:"pt-5",children:(0,s.jsx)(l.Z,{banner:d})}),(0,s.jsx)("h2",{className:"font-bold text-3xl text-center text-primary500 pt-5",children:"T\xecm ‘M\xe3 dự thưởng’ X\xe1c thực Nhận ngay 01 lượt quay May mắn"}),(0,s.jsx)("button",{className:"bg-gradient-button text-white font-bold py-2 px-4 rounded-full transition duration-300 min-w-full mt-5",onClick:()=>{t()},children:"THAM GIA NGAY"}),(0,s.jsx)(i.default,{items:f}),n&&(0,s.jsx)(c,{isOpen:n,togglePopup:m})]})}},795:function(e,t,n){"use strict";var s=n(7437),l=n(6648);t.Z=e=>{let{banner:t}=e;return(0,s.jsx)(l.default,{src:t.image_url,alt:t.image_alt,width:t.width,height:t.height,className:"rounded-xl"})}},1292:function(e,t,n){"use strict";var s=n(7437),l=n(6648),i=n(6463);t.default=e=>{let{items:t=[]}=e,n=(0,i.useRouter)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex flex-row items-center justify-center min-w-full",children:null==t?void 0:t.map(e=>(0,s.jsxs)("div",{className:"items-center justify-center w-1/3 flex flex-col",onClick:()=>{if(console.log("onClick",e),e.url){n.push(e.url);return}e.onClick&&(console.log("\uD83D\uDE80 ~ BlockItems ~ item.onClick:",e.onClick),null==e||e.onClick())},children:[(0,s.jsx)(l.default,{src:e.image_url,alt:e.imag_alt,width:52,height:52}),(0,s.jsx)("h2",{className:"text-primary500 text-[10px]",children:e.name})]},e.key))})})}},1555:function(e,t,n){"use strict";n.d(t,{$T:function(){return i},tq:function(){return a}});var s=n(7437),l=n(6648);let i=()=>(0,s.jsx)(l.default,{src:"/static/logo/logo.svg",alt:"LogoVTD",width:162,height:78}),a=()=>(0,s.jsx)(l.default,{src:"/static/logo/logo_white.svg",alt:"LogoWhiteVTD",width:78,height:78})}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=6714)}),_N_E=e.O()}]);