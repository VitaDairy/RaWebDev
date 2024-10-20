(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[944],{11:function(e,t,n){Promise.resolve().then(n.bind(n,1744))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var l=n(5601),r=n.n(l)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return i}});let l=n(9920),r=n(497),s=n(8173),a=l._(n(1241));function i(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=s.Image},1744:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var l=n(7437),r=n(6648);function s(e){let{isOpen:t,togglePopup:n}=e;return(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,l.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,l.jsx)("div",{className:"flex justify-center mb-4",children:(0,l.jsx)(r.default,{src:"./static/sbps/banner/otp_error.png",alt:"OTP Error",width:200,height:182})}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"text-error400 font-semibold text-lg",children:"M\xe3 OTP chưa ch\xednh x\xe1c!"}),(0,l.jsx)("p",{className:"text-neutral900 text-sm mt-2",children:"M\xe3 OTP của bạn nhập v\xe0o kh\xf4ng đ\xfang, vui l\xf2ng nhập lại"})]}),(0,l.jsx)("div",{className:"mt-6",children:(0,l.jsx)("button",{onClick:n,className:"w-full py-2 bg-gradient-button text-white rounded-lg text-lg",children:"Thử Lại"})})]})})})}var a=n(3056),i=n(3874),o=n(6514),c=n(6463),u=n(2265);let d=()=>{let{phone:e,source:t}=(0,a.Z)(),[n,r]=(0,u.useState)(15),[s,o]=(0,u.useState)(!0);return(0,u.useEffect)(()=>{if(!s)return;let e=setInterval(()=>{r(t=>0===t?(clearInterval(e),o(!1),60):t-1)},1e3);return()=>clearInterval(e)},[s]),(0,l.jsx)(l.Fragment,{children:s?(0,l.jsxs)("a",{href:"#",onClick:e=>{e.preventDefault()},className:"text-right text-neutral500 font-medium text-xs mt-2 block ".concat(s?"cursor-not-allowed":""),children:["Gửi lại sau ",n,"s"]}):(0,l.jsx)("a",{href:"#",className:"text-right text-primary500 font-medium text-xs mt-2 block",onClick:n=>{n.preventDefault(),i.ZP.sendOTP(e,t),o(!0),r(15)},children:"Gửi lại m\xe3 qua SMS"})})};function m(){let{actionLogin:e,isLoggedIn:t,actionVerifyPhoneNumber:n}=(0,a.Z)(),r="",m=(0,c.useRouter)();(0,u.useEffect)(()=>{t&&m.push("/home")},[]);let[f,x]=(0,u.useState)(1),h=()=>{x(f+1)},[g,p]=(0,u.useState)(!0),[b,j]=(0,u.useState)(""),v=e=>{let t=e.target.value.replace(/[^0-9]/g,"");(j(t),/^(0|\+84)(3|5|7|8|9)\d{8}$/.test(t))?p(!1):p(!0)},w=async()=>{var e;let{verifyPhone:t,source:l}=await n(b);r=l;let s=await i.ZP.sendOTP(b,l);s&&(null==s?void 0:null===(e=s.meta)||void 0===e?void 0:e.msg)==="OK"&&h()},y=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"mt-5 w-full",children:[(0,l.jsxs)("label",{className:"block mb-2 text-lg font-medium text-neutral dark:text-neutral",children:["Nhập số điện thoại ",(0,l.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,l.jsx)("input",{type:"tel",className:"border-0 border-b focus:outline-none border-neutral400 w-full placeholder-neutral400 mt-2 text-lg text-neutral mt-2",placeholder:"Nhập số điện thoại của bạn",onInput:v,onChange:v,onKeyDown:async e=>{"Enter"===e.key&&w()},value:b,autoFocus:!0})]}),(0,l.jsx)("div",{className:"flex items-center justify-center h-screen w-full",children:(0,l.jsx)("button",{className:" ".concat(g?"bg-disabled opacity-50 cursor-not-allowed":"bg-gradient-button opacity-100"," font-bold py-2 px-4 rounded-full transition duration-300 min-w-full mb-[40%] font-bold text-sm h-11"),disabled:g,onClick:()=>{w()},children:"TIẾP TỤC"})})]}),[N,k]=(0,u.useState)(["","","",""]),O=async(e,t)=>{let{value:n}=e.target;if(!/^[0-9]$/.test(n)&&""!==n)return;let l=[...N];if(l[t]=n,k(l),l.every(e=>""!==e)){let e=l.join("");await P(e)&&m.push("/home")}};(0,u.useEffect)(()=>{let e=N.findIndex(e=>""===e);if(e>=0&&e<4){let t=document.getElementById("otp-input-".concat(e));t&&t.focus()}},[N]);let P=async t=>{if("REGISTER"===r){var n;let e=await i.ZP.verifyOTP(b,t);if(console.log("\uD83D\uDE80 ~ checkOtp ~ verifyOtp:",e),e&&(null==e?void 0:null===(n=e.meta)||void 0===n?void 0:n.status)!==1e3)return C(!0),!1}let{loginError:l}=await e(b,t);return l?("verify phone number false"===l?m.push("/register"):(C(!0),k(["","","",""])),!1):(console.log("return true "),!0)},E=(0,u.memo)(()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"mt-5 w-full",children:[(0,l.jsxs)("label",{className:"block mb-2 text-sm font-normal text-neutral dark:text-neutral",children:["M\xe3 x\xe1c thực OTP được gửi qua ứng dụng Zalo tr\xean điện thoại theo số ",(0,l.jsx)("b",{className:"font-bold text-neutral",children:b})]}),(0,l.jsx)("div",{className:"flex space-x-2 mt-4 justify-between",children:N.map((e,t)=>(0,l.jsx)("input",{id:"otp-input-".concat(t),type:"tel",autoFocus:0===t,value:N[t],onChange:e=>O(e,t),maxLength:1,className:"w-[4.75rem] h-[4.75rem] text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl bg-neutral100 text-neutral900 dark:text-neutral900 "},"otp-"+t))}),(0,l.jsx)(d,{})]})})),[S,C]=(0,u.useState)(!1);return console.log("re render"),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col items-center h-screen space-y-4 p-5 bg-white min-h-screen",children:[(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)("button",{onClick:()=>{m.push("/")},children:(0,l.jsx)(o.Z,{className:"h-6 w-6 text-neutral dark:text-neutral ",strokeWidth:2})})}),(()=>{switch(f){case 1:return(0,l.jsx)(y,{});case 2:return(0,l.jsx)(E,{})}})(),S&&(0,l.jsx)(s,{isOpen:S,togglePopup:()=>{C(!S)}})]})})}},6514:function(e,t,n){"use strict";var l=n(2265);let r=l.forwardRef(function(e,t){let{title:n,titleId:r,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},s),n?l.createElement("title",{id:r},n):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=r}},function(e){e.O(0,[173,461,56,971,23,744],function(){return e(e.s=11)}),_N_E=e.O()}]);