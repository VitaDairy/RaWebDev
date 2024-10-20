"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{1847:function(e,t,s){s.d(t,{Z:function(){return o}});var l=s(7437),i=s(6981),n=s(3056),a=s(2826),c=s(6648),r=s(2265);function o(e){let{isOpen:t,togglePopup:s,pagePersonal:o=!1}=e,{user:d}=(0,n.Z)();return(0,r.useEffect)(()=>{(0,i.x)({event:"ev_content_click_hotiline_wa",pr_event_group:"content",pr_start_time:(0,a.e)(),pr_user_id:(null==d?void 0:d.id)||null})},[]),(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsx)("div",{className:"fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 w-full z-10  ".concat(o?"mb-[30%]":""," "),children:(0,l.jsxs)("div",{className:"mt-6 space-y-2 w-full p-4",children:[(0,l.jsxs)("button",{onClick:()=>{window.location.href="tel:1900633559"},className:"w-full px-4 py-2 bg-white rounded-lg text-[#1F86F6] text-sm h-11 flex justify-between items-center ",children:[(0,l.jsx)(c.default,{src:"/static/sbps/icons/support.svg",alt:"Call",width:24,height:24,className:"pl-0"}),(0,l.jsx)("span",{className:"mx-auto text-sm font-medium",children:"Call 1900 633559"})]}),(0,l.jsx)("button",{onClick:s,className:"w-full px-4 py-2 bg-white rounded-lg h-11 font-semibold text-[#1F86F6]",children:"Cancel"})]})})})}},4196:function(e,t,s){var l=s(7437),i=s(6648),n=s(6463);let a=[{name:"Trang chủ",icon:"/static/icons/icon_home_no_active.svg",iconActive:"/static/icons/icon_home_active.svg",url:"/home"},{name:"C\xe1 nh\xe2n",icon:"/static/icons/icon_personal_no_active.svg",iconActive:"/static/icons/icon_personal_active.svg",url:"/personal"}];t.Z=()=>{let e=(0,n.useRouter)(),t=(0,n.usePathname)(),s=t=>{e.push(t)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"fixed inset-x-0 bottom-0 shadow-lg z-[999] bg-cover bg-no-repeat bg-center object-cover",style:{backgroundImage:"url('/static/bg/bg_footer.svg')",backgroundSize:"100% 100%",margin:"0",width:"100%",maxWidth:"430px",marginLeft:"auto",marginRight:"auto"},children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2",children:(0,l.jsx)("div",{className:"w-[52px] h-[52px] bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center shadow-lg",children:(0,l.jsx)("div",{className:"relative",children:(0,l.jsx)("button",{onClick:()=>{e.push("/qr")},children:(0,l.jsx)(i.default,{src:"/static/icons/icon_scan.svg",alt:"Home",width:52,height:52})})})})}),(0,l.jsx)("div",{className:"flex justify-between items-center px-10 py-6",children:null==a?void 0:a.map(e=>(0,l.jsxs)("div",{className:"flex flex-col items-center ".concat(t===e.url?"text-primary":"text-gray-500 cursor-pointer"),onClick:()=>s(e.url),children:[(0,l.jsx)("div",{children:(0,l.jsx)(i.default,{src:t===e.url?e.iconActive:e.icon,alt:e.name,width:21,height:21})}),(0,l.jsx)("p",{className:"text-sm ".concat(e.url===t?"text-primary500":""),children:e.name})]},e.name))})]})})})}},937:function(e,t,s){s.d(t,{Z:function(){return v}});var l=s(7437),i=s(1292),n=s(1555),a=s(6981),c=s(3056),r=s(3874),o=s(2826),d=s(6648),u=s(6463),x=s(2265),m=e=>{let{src:t,alt:s}=e;return(0,l.jsx)("div",{className:"w-[48px] h-[48px] rounded-full border-2 border-white overflow-hidden",children:(0,l.jsx)(d.default,{src:t,alt:s||"Avatar",width:48,height:48,className:"object-cover"})})},h=s(1847),g=e=>{let{MENUS:t,fullWidth:s=!1}=e,i=(0,u.useRouter)(),n=e=>{i.push(e)};return(0,l.jsx)("div",{className:"max-w-md mx-auto space-y-4 ".concat(s?"":"p-4"),children:t.map((e,t)=>{var s;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-4 space-y-4",children:[e.menus.map((t,s)=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex items-center justify-between space-x-2",onClick:()=>{if(""===t.url&&t.onClick){t.onClick();return}n((null==t?void 0:t.url)||"#")},children:[(0,l.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,l.jsx)(d.default,{src:t.icon,alt:t.text,width:40,height:40}),(0,l.jsx)("span",{className:"".concat((null==t?void 0:t.color)?t.color:"text-primary500"," font-normal "),children:t.text}),(0,l.jsx)("div",{className:"border-b border-neutral200"})]}),t.iconEnd&&(0,l.jsx)("div",{children:t.iconEnd})]},s),s!==e.menus.length-1&&(0,l.jsx)("div",{className:"border-b "})]})),(null==e?void 0:e.subMenu)&&(0,l.jsx)("div",{className:"flex justify-around",children:null==e?void 0:null===(s=e.subMenu)||void 0===s?void 0:s.map((t,s)=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",onClick:()=>n(t.url),children:[(0,l.jsx)(d.default,{src:t.icon,alt:t.text,width:24,height:24}),(0,l.jsx)("span",{className:"text-blue-700 text-[12px] text-center pl-2 pr-2 ",children:t.text})]},s),s!==e.subMenu.length-1&&(0,l.jsx)("div",{className:"border-l border-dashed"})]}))})]},t)})})})},v=e=>{let{showSubMenu:t=!0,showProfile:s=!1}=e,{logout:v,user:f}=(0,c.Z)(),[p,j]=(0,x.useState)(!1),b=()=>{j(!p)},_=[{menus:[{icon:"/static/personal/icon_address.svg",text:"Địa chỉ",url:"/address"}]},{menus:[{icon:"/static/personal/icon_callcenter.svg",text:"Li\xean hệ Hotline",url:"",onClick:b}]},{menus:[{icon:"/static/personal/icon_logout.svg",text:"Đăng xuất",color:"text-error400",url:"",onClick:()=>{(0,a.x)({event:"ev_account_sign_out_wa",pr_event_group:"account",pr_start_time:(0,o.e)(),pr_user_id:null==f?void 0:f.id}),v()}}]}],[w,N]=(0,x.useState)(0);(0,x.useEffect)(()=>{r.ZP.getNotificationUnread().then(e=>{var t;N((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.notificationCount)||0)})},[]);let k=(0,u.useRouter)();return(0,l.jsxs)("div",{className:"relative text-white p-4 pt-10 bg-surface02",children:[(0,l.jsx)("div",{className:"absolute inset-0 bg-no-repeat bg-cover bg-center rounded-b-3xl h-[80%] w-full",style:{backgroundImage:"url('/static/bg/bg_header_2.png')"}}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)(n.tq,{}),(0,l.jsx)("div",{className:"flex space-x-3",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("div",{className:"flex items-center flex-col",children:[(0,l.jsx)(m,{src:"/static/avatar/origin_avatar.png"}),(0,l.jsxs)("span",{className:"text-xs",children:["Xin ch\xe0o ",(null==f?void 0:f.name)||""]})]}),(0,l.jsx)("div",{className:"w-5 h-full rounded-full pt-1",children:(0,l.jsxs)("button",{className:"w-5 h-5",onClick:()=>{k.push("/noti")},children:[(0,l.jsx)(d.default,{src:"/static/icons/navigation.svg",alt:"Navigation",width:24,height:24}),!!w&&(0,l.jsx)("span",{className:"absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"})]})})]})})]}),t&&(0,l.jsx)("div",{className:"mt-8 p-4 bg-white rounded-lg shadow-lg",children:(0,l.jsx)("div",{className:"flex justify-around ",children:(0,l.jsx)(i.default,{items:[{image_url:"/static/sbps/icons/spoon.svg",imag_alt:"QR Code",name:"X\xe1c thực muỗng",url:"/qr",key:"guide"},{image_url:"/static/sbps/icons/global.svg",imag_alt:"QR Code",name:"Đổi qu\xe0",url:"#",key:"rules"},{image_url:"/static/sbps/icons/gift.svg",imag_alt:"QR Code",name:"Qu\xe0 của t\xf4i",url:"/gift",key:"gift"}]})})}),s&&(0,l.jsx)(g,{MENUS:_}),p&&(0,l.jsx)(h.Z,{isOpen:p,togglePopup:b,pagePersonal:!0})]})]})}},1292:function(e,t,s){var l=s(7437),i=s(6648),n=s(6463);t.default=e=>{let{items:t=[]}=e,s=(0,n.useRouter)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex flex-row items-center justify-center min-w-full",children:null==t?void 0:t.map(e=>(0,l.jsxs)("div",{className:"items-center justify-center w-1/3 flex flex-col",onClick:()=>{if(console.log("onClick",e),e.url){s.push(e.url);return}e.onClick&&(console.log("\uD83D\uDE80 ~ BlockItems ~ item.onClick:",e.onClick),null==e||e.onClick())},children:[(0,l.jsx)(i.default,{src:e.image_url,alt:e.imag_alt,width:52,height:52}),(0,l.jsx)("h2",{className:"text-primary500 text-[10px]",children:e.name})]},e.key))})})}},1555:function(e,t,s){s.d(t,{$T:function(){return n},tq:function(){return a}});var l=s(7437),i=s(6648);let n=()=>(0,l.jsx)(i.default,{src:"/static/logo/logo.svg",alt:"LogoVTD",width:162,height:78}),a=()=>(0,l.jsx)(i.default,{src:"/static/logo/logo_white.svg",alt:"LogoWhiteVTD",width:78,height:78})}}]);