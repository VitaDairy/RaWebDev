(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{3065:function(e,t,n){Promise.resolve().then(n.bind(n,5515))},5515:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var s=n(7437),l=n(6981),i=n(6648),a=n(6463),r=n(2265),c=n(9795),u=n(1847);function o(e){let{isOpen:t,togglePopup:n}=e,o=(0,a.useRouter)(),[d,h]=(0,r.useState)(!1),m=()=>{h(!d)};return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:[(0,s.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,s.jsx)("div",{className:"flex justify-center mb-4",children:(0,s.jsx)(i.default,{src:"./static/sbps/banner/otp_error.png",alt:"OTP Error",width:200,height:182})}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-error400 font-semibold text-lg",children:"Bạn chưa c\xf3 địa chỉ mặc định"}),(0,s.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Để việc nhận qu\xe0 từ chương tr\xecnh diễn ra thuận lợi, qu\xfd kh\xe1ch vui l\xf2ng điền địa chỉ giao nhận đầy đủ v\xe0 ch\xednh x\xe1c."}),(0,s.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Th\xf4ng tin địa chỉ sẽ l\xe0 cơ sở để VitaDairy tiến h\xe0nh gửi qu\xe0 tặng."})]}),(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsx)("button",{onClick:()=>{o.push("/address/add")},className:"w-full py-2 bg-gradient-button text-white rounded-full text-sm font-bold h-10",children:"NHẬP ĐỊA CHỈ"})}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)(c.O,{onClick:()=>{m(),(0,l.vP)()},name:"LI\xcaN HỆ NGAY"})})]}),d&&(0,s.jsx)(u.Z,{isOpen:d,togglePopup:m})]})})}var d=n(4196),h=n(937),m=n(795);n(3034),n(3435),n(4885),n(7322);var x=n(3267),g=n(6341),p=e=>{let{items:t=[]}=e,n=(0,a.useRouter)();return(0,s.jsx)("div",{className:"w-full pt-5",children:(0,s.jsx)(x.tq,{spaceBetween:10,slidesPerView:4,freeMode:!0,modules:[g.Rv],children:null==t?void 0:t.map(e=>(0,s.jsx)(x.o5,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center cursor-pointer",onClick:()=>{if(e.url){n.push(e.url);return}e.onClick&&(null==e||e.onClick())},children:[(0,s.jsx)(i.default,{src:e.image_url,alt:e.image_alt||"Image",width:44,height:44,className:"object-cover"}),(0,s.jsx)("h2",{className:"text-primary500 text-[10px] mt-2",children:e.name})]})},e.key))})})},b=n(3056);let f={image_url:"/static/sbps/banner/banner_main.jpeg",image_alt:"Banner",width:343,height:180,key:"banner-join"};function j(){var e;let t=(0,a.useRouter)(),{address:n}=(0,b.Z)(),[i,c]=(0,r.useState)(!1),x=()=>{c(!i)};(0,r.useEffect)(()=>{},[]);let[g,j]=(0,r.useState)((null==n?void 0:n.length)===0||n&&(null===(e=n[0])||void 0===e?void 0:e.provinceId)===null);return(0,s.jsxs)("div",{className:"bg-surface02",children:[(0,s.jsx)(h.Z,{showProfile:!1}),(0,s.jsx)("div",{className:"flex justify-between pl-5",children:(0,s.jsx)(p,{items:[{image_url:"/static/sbps/icons/medal.svg",imag_alt:"QR Code",name:"Hướng dẫn",url:"",key:"guide",onClick:()=>{t.push("/instruct"),(0,l.hy)()}},{image_url:"/static/sbps/icons/earth.svg",imag_alt:"QR Code",name:"Thể lệ",url:"",key:"rules",onClick:()=>{t.push("/rules"),(0,l.rf)()}},{image_url:"/static/sbps/icons/call.svg",imag_alt:"hot line",name:"Hotline",url:"",onClick:()=>{(0,l.vP)(),x()},key:"hotline"},{image_url:"/static/sbps/icons/chat.svg",imag_alt:"chat",name:"Nhắn tin",url:"",key:"chat",onClick:()=>{(0,l.xb)(),t.push("/chat")}}]})}),(0,s.jsx)("div",{className:"flex justify-center mt-8",children:(0,s.jsx)(m.Z,{banner:f})}),(0,s.jsx)("div",{className:"h-40"}),(0,s.jsx)(d.Z,{}),g&&(0,s.jsx)(o,{togglePopup:()=>{j(!g)},isOpen:g}),i&&(0,s.jsx)(u.Z,{isOpen:i,togglePopup:x,pagePersonal:!1})]})}},9795:function(e,t,n){"use strict";n.d(t,{I:function(){return l},O:function(){return i}});var s=n(7437);let l=e=>{let{name:t,onClick:n}=e;return(0,s.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out",onClick:n,children:[(0,s.jsx)("span",{className:"absolute inset-0 rounded-full bg-white bg-clip-padding"}),(0,s.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:t})]})},i=e=>{let{name:t,onClick:n}=e;return(0,s.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent bg-gradient-button border-0 border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out w-full h-10",onClick:n,children:[(0,s.jsx)("span",{className:"absolute inset-0 rounded-full border border-transparent bg-white bg-clip-padding"}),(0,s.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:t})]})}},795:function(e,t,n){"use strict";var s=n(7437),l=n(6648);t.Z=e=>{let{banner:t}=e;return(0,s.jsx)(l.default,{src:t.image_url,alt:t.image_alt,width:t.width,height:t.height,className:"rounded-xl"})}}},function(e){e.O(0,[904,173,461,169,498,189,971,23,744],function(){return e(e.s=3065)}),_N_E=e.O()}]);