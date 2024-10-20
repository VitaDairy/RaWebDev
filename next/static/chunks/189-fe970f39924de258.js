"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{4196:function(e,t,o){var n=o(7437),a=o(6648),i=o(6463);let r=[{name:"Trang chủ",icon:"/static/icons/icon_home_no_active.svg",iconActive:"/static/icons/icon_home_active.svg",url:"/home"},{name:"C\xe1 nh\xe2n",icon:"/static/icons/icon_personal_no_active.svg",iconActive:"/static/icons/icon_personal_active.svg",url:"/personal"}];t.Z=()=>{let e=(0,i.useRouter)(),t=(0,i.usePathname)(),o=t=>{e.push(t)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"fixed inset-x-0 bottom-0 shadow-lg z-[999] bg-cover bg-no-repeat bg-center object-cover",style:{backgroundImage:"url('/static/bg/bg_footer.svg')",backgroundSize:"100% 100%",margin:"0",width:"100%",maxWidth:"430px",marginLeft:"auto",marginRight:"auto"},children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2",children:(0,n.jsx)("div",{className:"w-[52px] h-[52px] bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center shadow-lg",children:(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)("button",{onClick:()=>{e.push("/qr")},children:(0,n.jsx)(a.default,{src:"/static/icons/icon_scan.svg",alt:"Home",width:52,height:52})})})})}),(0,n.jsx)("div",{className:"flex justify-between items-center px-10 py-6",children:null==r?void 0:r.map(e=>(0,n.jsxs)("div",{className:"flex flex-col items-center ".concat(t===e.url?"text-primary":"text-gray-500 cursor-pointer"),onClick:()=>o(e.url),children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.default,{src:t===e.url?e.iconActive:e.icon,alt:e.name,width:21,height:21})}),(0,n.jsx)("p",{className:"text-sm ".concat(e.url===t?"text-primary500":""),children:e.name})]},e.name))})]})})})}},937:function(e,t,o){o.d(t,{Z:function(){return h}});var n=o(7437),a=o(1292),i=o(1555),r=o(3056),l=o(3874),s=o(6648),c=o(6463),u=o(2265),d=e=>{let{src:t,alt:o}=e;return(0,n.jsx)("div",{className:"w-[48px] h-[48px] rounded-full border-2 border-white overflow-hidden",children:(0,n.jsx)(s.default,{src:t,alt:o||"Avatar",width:48,height:48,className:"object-cover"})})},g=e=>{let{MENUS:t,fullWidth:o=!1}=e,a=(0,c.useRouter)(),i=e=>{a.push(e)};return(0,n.jsx)("div",{className:"max-w-md mx-auto space-y-4 ".concat(o?"":"p-4"),children:t.map((e,t)=>{var o;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-4 space-y-4",children:[e.menus.map((t,o)=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center justify-between space-x-2",onClick:()=>{if(""===t.url&&t.onClick){t.onClick();return}i((null==t?void 0:t.url)||"#")},children:[(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(s.default,{src:t.icon,alt:t.text,width:40,height:40}),(0,n.jsx)("span",{className:"".concat((null==t?void 0:t.color)?t.color:"text-primary500"," font-normal "),children:t.text}),(0,n.jsx)("div",{className:"border-b border-neutral200"})]}),t.iconEnd&&(0,n.jsx)("div",{children:t.iconEnd})]},o),o!==e.menus.length-1&&(0,n.jsx)("div",{className:"border-b "})]})),(null==e?void 0:e.subMenu)&&(0,n.jsx)("div",{className:"flex justify-around",children:null==e?void 0:null===(o=e.subMenu)||void 0===o?void 0:o.map((t,o)=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col items-center space-y-2",onClick:()=>i(t.url),children:[(0,n.jsx)(s.default,{src:t.icon,alt:t.text,width:24,height:24}),(0,n.jsx)("span",{className:"text-blue-700 text-[12px] text-center pl-2 pr-2 ",children:t.text})]},o),o!==e.subMenu.length-1&&(0,n.jsx)("div",{className:"border-l border-dashed"})]}))})]},t)})})})},h=e=>{let{showSubMenu:t=!0,showProfile:o=!1}=e,{logout:h,user:v}=(0,r.Z)(),[m,p]=(0,u.useState)(0);(0,u.useEffect)(()=>{l.ZP.getNotificationUnread().then(e=>{var t;console.log("\uD83D\uDE80 ~ loyaltyService.getNotificationUnread ~ res:",e),p((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.notificationCount)||0)})},[]);let f=(0,c.useRouter)();return(0,n.jsxs)("div",{className:"relative text-white p-4 pt-10 bg-surface02",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-no-repeat bg-cover bg-center rounded-b-3xl h-[80%] w-full",style:{backgroundImage:"url('/static/bg/bg_header_2.png')"}}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)(i.tq,{}),(0,n.jsx)("div",{className:"flex space-x-3",children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)("div",{className:"flex items-center flex-col",children:[(0,n.jsx)(d,{src:"/static/avatar/origin_avatar.png"}),(0,n.jsxs)("span",{className:"text-xs",children:["Xin ch\xe0o ",(null==v?void 0:v.name)||""]})]}),(0,n.jsx)("div",{className:"w-5 h-full rounded-full pt-1",children:(0,n.jsxs)("button",{className:"w-5 h-5",onClick:()=>{f.push("/noti")},children:[(0,n.jsx)(s.default,{src:"/static/icons/navigation.svg",alt:"Navigation",width:24,height:24}),!!m&&(0,n.jsx)("span",{className:"absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"})]})})]})})]}),t&&(0,n.jsx)("div",{className:"mt-8 p-4 bg-white rounded-lg shadow-lg",children:(0,n.jsx)("div",{className:"flex justify-around ",children:(0,n.jsx)(a.default,{items:[{image_url:"/static/sbps/icons/spoon.svg",imag_alt:"QR Code",name:"X\xe1c thực muỗng",url:"/qr",key:"guide"},{image_url:"/static/sbps/icons/global.svg",imag_alt:"QR Code",name:"Đổi qu\xe0",url:"#",key:"rules"},{image_url:"/static/sbps/icons/gift.svg",imag_alt:"QR Code",name:"Qu\xe0 của t\xf4i",url:"/gift",key:"gift"}]})})}),o&&(0,n.jsx)(g,{MENUS:[{menus:[{icon:"/static/personal/icon_address.svg",text:"Địa chỉ",url:"/address"}]},{menus:[{icon:"/static/personal/icon_callcenter.svg",text:"Li\xean hệ Hotline",url:"/contact"}]},{menus:[{icon:"/static/personal/icon_logout.svg",text:"Đăng xuất",color:"text-error400",url:"",onClick:()=>{h()}}]}]})]})]})}},1292:function(e,t,o){var n=o(7437),a=o(6648),i=o(6463);t.default=e=>{let{items:t=[]}=e,o=(0,i.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"flex flex-row items-center justify-center min-w-full",children:null==t?void 0:t.map(e=>(0,n.jsxs)("div",{className:"items-center justify-center w-1/3 flex flex-col",onClick:()=>{if(console.log("onClick",e),e.url){o.push(e.url);return}e.onClick&&(console.log("\uD83D\uDE80 ~ BlockItems ~ item.onClick:",e.onClick),null==e||e.onClick())},children:[(0,n.jsx)(a.default,{src:e.image_url,alt:e.imag_alt,width:52,height:52}),(0,n.jsx)("h2",{className:"text-primary500 text-[10px]",children:e.name})]},e.key))})})}},1555:function(e,t,o){o.d(t,{$T:function(){return i},tq:function(){return r}});var n=o(7437),a=o(6648);let i=()=>(0,n.jsx)(a.default,{src:"/static/logo/logo.svg",alt:"LogoVTD",width:162,height:78}),r=()=>(0,n.jsx)(a.default,{src:"/static/logo/logo_white.svg",alt:"LogoWhiteVTD",width:78,height:78})},3056:function(e,t,o){var n=o(9099),a=o(9291),i=o(3874);let r=(0,n.Ue)()((0,a.tJ)((e,t)=>({user:null,auth:null,phone:null,otp:null,address:null,token:null,verifyPhone:null,source:null,isLoggedIn:!1,loginError:null,provinces:null,districts:null,wards:null,authorization:null,actionGetProvinces:async()=>{var o;if(t().provinces)return{provinces:t().provinces};let[n]=await Promise.all([i.ZP.getProvinces()]);return(null==n?void 0:null===(o=n.meta)||void 0===o?void 0:o.status)!==1e3?{provinces:null}:(e({provinces:n.response.provinces}),{provinces:n.response.provinces})},actionVerifyPhoneNumber:async t=>{let o=await i.ZP.verifyPhoneNumber(t);return e({verifyPhone:o,phone:t,source:o?"LOGIN":"REGISTER"}),{verifyPhone:o,phone:t,source:o?"LOGIN":"REGISTER"}},actionLogin:async(t,o)=>{try{var n,a;let r=await i.ZP.verifyPhoneNumber(t);if(console.log("\uD83D\uDE80 ~ actionLogin: ~ verifyPhoneNumber:",r),!r)return e({user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false",phone:t,otp:o}),{user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false"};let l=await i.ZP.login(t,o);if(console.log("\uD83D\uDE80 ~ actionLogin: ~ loginResp:",l),(null==l?void 0:null===(n=l.meta)||void 0===n?void 0:n.status)!==1e3)return e({user:null,token:null,isLoggedIn:!1,loginError:"Login failed",phone:t,otp:o}),{user:null,token:null,isLoggedIn:!1,loginError:"Login failed"};let{user:s,auth:c}=(null==l?void 0:l.response)||{};localStorage.setItem("token",c.accessToken);let u="Bearer ".concat(c.accessToken);e({user:s,token:c.accessToken,isLoggedIn:!0,loginError:null,auth:c,authorization:u});let[d]=await Promise.all([i.ZP.getAddress({auth:u})]),g=(null==d?void 0:null===(a=d.response)||void 0===a?void 0:a.recipientInfoList)||[];return e({address:g}),{user:s,token:t,isLoggedIn:!0,loginError:null}}catch(n){return console.log("\uD83D\uDE80 ~ login: ~ error:",n),e({user:null,token:null,isLoggedIn:!1,loginError:n.message||"Login failed",phone:t,otp:o}),{user:null,token:null,isLoggedIn:!1,loginError:n.message||"Login failed"}}},logout:()=>{localStorage.removeItem("login-storage"),console.log("\uD83D\uDE80 ~ logout: ~ localStorage:",localStorage),e({user:null,token:null,isLoggedIn:!1,loginError:null})}}),{name:"login-storage",storage:(0,a.FL)(()=>localStorage)}));t.Z=r},3874:function(e,t,o){o.d(t,{ZP:function(){return c}});let n=async e=>{let{url:t,method:o,body:n,authorization:a,headers:i={}}=e;try{let e={"Content-Type":"application/json",...i};a&&(e.Authorization=a),("GET"===o||"DELETE"===o)&&(t="".concat(t,"?").concat(new URLSearchParams(n).toString()),n=void 0);let r=n?JSON.stringify(n):void 0,l=await fetch(t,{method:o,headers:e,body:r});return null==l?void 0:l.json()}catch(e){return console.log(e),{error:e,status:500}}},a="https://api-sandbox.vitadairyvietnam.vn",i=()=>{try{var e,t;let o=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",n=JSON.parse(o);return(null==n?void 0:null===(t=n.state)||void 0===t?void 0:t.authorization)||""}catch(e){return null}},r=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],l=0,s=async e=>{var t,o,r,l;let{page:s=0,size:c=10,body:u}=e,d=await n({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:i(),body:{page:0,size:c,...u}}),g=null==d?void 0:null===(o=d.response)||void 0===o?void 0:null===(t=o.data)||void 0===t?void 0:t.data,h=[];for(let e=1;e<=(null==d?void 0:null===(l=d.response)||void 0===l?void 0:null===(r=l.data)||void 0===r?void 0:r.total);e+=1)h.push(n({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:i(),body:{page:e,size:10,...u}}).then(e=>{var t,o;g=g.concat(null==e?void 0:null===(o=e.response)||void 0===o?void 0:null===(t=o.data)||void 0===t?void 0:t.data)}));return await Promise.all(h),d.response.data.data=g,d};var c={getUser:async()=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user"),method:"GET",authorization:i()}),getNotificationUnread:async()=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:i()}),getMyRewards:async()=>await n({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:i()}),sendOTP:async(e,t)=>"LOGIN"===t?(t="REGISTER",await n({url:"".concat(a,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:e,type:"log_in_calosure"}})):await n({url:"".concat(a,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:i()}),verifyOTP:async(e,t)=>await n({url:"".concat(a,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:i()}),getNotifications:async e=>{let{page:t=1,size:o=20}=e,r=await n({url:"".concat(a,"/api-v3/noti/user/noti"),method:"GET",authorization:i(),body:{page:t,size:o}});return console.log("\uD83D\uDE80 ~ getNotifications ~ response:",r),r},getDetailNotifications:async e=>{let{id:t,page:o=1,size:r=20}=e;return await n({url:"".concat(a,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:i()})},readDetailNotifications:async e=>{let{id:t}=e;return await n({url:"".concat(a,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:i(),body:{id:t}})},getAddress:async e=>{let{auth:t}=e;return await n({url:"".concat(a,"/api/recipient/me"),method:"GET",authorization:t||i()})},logout:async()=>await n({url:"".concat(a,"/api/user/logout"),method:"POST",authorization:i()}),verifyPhoneNumber:async e=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:i(),body:{phoneNumber:e}}),getProvinces:async()=>await n({url:"".concat(a,"/api/province/vn"),method:"GET",authorization:i()}),getWardsAndDistricts:async e=>{let{code:t}=e;return await n({url:"".concat(a,"/api/province/parent/").concat(t),method:"GET",authorization:i()})},register:async e=>await n({url:"".concat(a,"/api/user/register"),method:"POST",body:e,headers:{appversioncode:12,appversionname:"3.1.2",webapp_name:"SBPS"}}),login:async(e,t)=>await n({url:"".concat(a,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:t},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:i()}),getQrCode:async e=>{let{qrCode:t}=e;return await n({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:i(),body:{qrCode:t}})},validateProduct:async e=>{let{qrCode:t,sku:o,mock:s=!0}=e;return s?((l+=1)>=r.length&&(l=0),{response:null,meta:{status:1e3},notification:{code:r[l]}}):await n({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:i(),body:{qrCode:t,sku:o}})},getGifts:async()=>await s({page:0,size:15,body:{giftTypes:"GIFT",statuses:"PENDING,EXCHANGED"}}),getVouchers:async()=>s({page:0,size:15,body:{giftTypes:"E_VOUCHER,E_VOUCHER_SHOP,E_VOUCHER_SHOP_BKIDS,EV_VITA_CODE"}}),getAlls:s,orderGift:async e=>{let{recipientSnapshot:t,userGiftSnapshot:o,userId:r}=e;return await n({url:"".concat(a,"/v4/os/orders"),method:"POST",body:{recipientSnapshot:t,userGiftSnapshot:o,userId:r},authorization:i()})}}}}]);