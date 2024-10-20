(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99],{4438:function(o,e,t){Promise.resolve().then(t.bind(t,8590))},8590:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var n=t(7437),a=t(3056),i=t(6463),r=t(2265);function l(o){let{children:e}=o,t=(0,i.useRouter)(),{isLoggedIn:l}=(0,a.Z)(),[s,u]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{u(!0)},[]),(0,r.useEffect)(()=>{!l&&s&&t.push("/")},[l,t,s]),s)?(0,n.jsx)(n.Fragment,{children:e}):(0,n.jsx)("div",{})}},3056:function(o,e,t){"use strict";var n=t(9099),a=t(9291),i=t(3874);let r=(0,n.Ue)()((0,a.tJ)((o,e)=>({user:null,auth:null,phone:null,otp:null,address:null,token:null,verifyPhone:null,source:null,isLoggedIn:!1,loginError:null,provinces:null,districts:null,wards:null,authorization:null,actionGetProvinces:async()=>{var t;if(e().provinces)return{provinces:e().provinces};let[n]=await Promise.all([i.ZP.getProvinces()]);return(null==n?void 0:null===(t=n.meta)||void 0===t?void 0:t.status)!==1e3?{provinces:null}:(o({provinces:n.response.provinces}),{provinces:n.response.provinces})},actionVerifyPhoneNumber:async e=>{let t=await i.ZP.verifyPhoneNumber(e);return o({verifyPhone:t,phone:e,source:t?"LOGIN":"REGISTER"}),{verifyPhone:t,phone:e,source:t?"LOGIN":"REGISTER"}},actionLogin:async(e,t)=>{try{var n,a;let r=await i.ZP.verifyPhoneNumber(e);if(console.log("\uD83D\uDE80 ~ actionLogin: ~ verifyPhoneNumber:",r),!r)return o({user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false",phone:e,otp:t}),{user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false"};let l=await i.ZP.login(e,t);if(console.log("\uD83D\uDE80 ~ actionLogin: ~ loginResp:",l),(null==l?void 0:null===(n=l.meta)||void 0===n?void 0:n.status)!==1e3)return o({user:null,token:null,isLoggedIn:!1,loginError:"Login failed",phone:e,otp:t}),{user:null,token:null,isLoggedIn:!1,loginError:"Login failed"};let{user:s,auth:u}=(null==l?void 0:l.response)||{};localStorage.setItem("token",u.accessToken);let c="Bearer ".concat(u.accessToken);o({user:s,token:u.accessToken,isLoggedIn:!0,loginError:null,auth:u,authorization:c});let[d]=await Promise.all([i.ZP.getAddress({auth:c})]),g=(null==d?void 0:null===(a=d.response)||void 0===a?void 0:a.recipientInfoList)||[];return o({address:g}),{user:s,token:e,isLoggedIn:!0,loginError:null}}catch(n){return console.log("\uD83D\uDE80 ~ login: ~ error:",n),o({user:null,token:null,isLoggedIn:!1,loginError:n.message||"Login failed",phone:e,otp:t}),{user:null,token:null,isLoggedIn:!1,loginError:n.message||"Login failed"}}},logout:()=>{localStorage.removeItem("login-storage"),console.log("\uD83D\uDE80 ~ logout: ~ localStorage:",localStorage),o({user:null,token:null,isLoggedIn:!1,loginError:null})}}),{name:"login-storage",storage:(0,a.FL)(()=>localStorage)}));e.Z=r},3874:function(o,e,t){"use strict";t.d(e,{ZP:function(){return u}});let n=async o=>{let{url:e,method:t,body:n,authorization:a,headers:i={}}=o;try{let o={"Content-Type":"application/json",...i};a&&(o.Authorization=a),("GET"===t||"DELETE"===t)&&(e="".concat(e,"?").concat(new URLSearchParams(n).toString()),n=void 0);let r=n?JSON.stringify(n):void 0,l=await fetch(e,{method:t,headers:o,body:r});return null==l?void 0:l.json()}catch(o){return console.log(o),{error:o,status:500}}},a="https://api-sandbox.vitadairyvietnam.vn",i=()=>{try{var o,e;let t=(null===(o=localStorage)||void 0===o?void 0:o.getItem("login-storage"))||"{}",n=JSON.parse(t);return(null==n?void 0:null===(e=n.state)||void 0===e?void 0:e.authorization)||""}catch(o){return null}},r=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],l=0,s=async o=>{var e,t,r,l;let{page:s=0,size:u=10,body:c}=o,d=await n({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:i(),body:{page:0,size:u,...c}}),g=null==d?void 0:null===(t=d.response)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.data,v=[];for(let o=1;o<=(null==d?void 0:null===(l=d.response)||void 0===l?void 0:null===(r=l.data)||void 0===r?void 0:r.total);o+=1)v.push(n({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:i(),body:{page:o,size:10,...c}}).then(o=>{var e,t;g=g.concat(null==o?void 0:null===(t=o.response)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.data)}));return await Promise.all(v),d.response.data.data=g,d};var u={getUser:async()=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user"),method:"GET",authorization:i()}),getNotificationUnread:async()=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:i()}),getMyRewards:async()=>await n({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:i()}),sendOTP:async(o,e)=>"LOGIN"===e?(e="REGISTER",await n({url:"".concat(a,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:o,type:"log_in_calosure"}})):await n({url:"".concat(a,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:o,source:e},authorization:i()}),verifyOTP:async(o,e)=>await n({url:"".concat(a,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:o,otp:e},authorization:i()}),getNotifications:async o=>{let{page:e=1,size:t=20}=o,r=await n({url:"".concat(a,"/api-v3/noti/user/noti"),method:"GET",authorization:i(),body:{page:e,size:t}});return console.log("\uD83D\uDE80 ~ getNotifications ~ response:",r),r},getDetailNotifications:async o=>{let{id:e,page:t=1,size:r=20}=o;return await n({url:"".concat(a,"/api-v3/noti/user/noti/").concat(e),method:"GET",authorization:i()})},readDetailNotifications:async o=>{let{id:e}=o;return await n({url:"".concat(a,"/api-v3/noti/user/noti/").concat(e,"/read"),method:"POST",authorization:i(),body:{id:e}})},getAddress:async o=>{let{auth:e}=o;return await n({url:"".concat(a,"/api/recipient/me"),method:"GET",authorization:e||i()})},logout:async()=>await n({url:"".concat(a,"/api/user/logout"),method:"POST",authorization:i()}),verifyPhoneNumber:async o=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:i(),body:{phoneNumber:o}}),getProvinces:async()=>await n({url:"".concat(a,"/api/province/vn"),method:"GET",authorization:i()}),getWardsAndDistricts:async o=>{let{code:e}=o;return await n({url:"".concat(a,"/api/province/parent/").concat(e),method:"GET",authorization:i()})},register:async o=>await n({url:"".concat(a,"/api/user/register"),method:"POST",body:o,headers:{appversioncode:12,appversionname:"3.1.2",webapp_name:"SBPS"}}),login:async(o,e)=>await n({url:"".concat(a,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:o,otp:e},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:i()}),getQrCode:async o=>{let{qrCode:e}=o;return await n({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:i(),body:{qrCode:e}})},validateProduct:async o=>{let{qrCode:e,sku:t,mock:s=!0}=o;return s?((l+=1)>=r.length&&(l=0),{response:null,meta:{status:1e3},notification:{code:r[l]}}):await n({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:i(),body:{qrCode:e,sku:t}})},getGifts:async()=>await s({page:0,size:15,body:{giftTypes:"GIFT",statuses:"PENDING,EXCHANGED"}}),getVouchers:async()=>s({page:0,size:15,body:{giftTypes:"E_VOUCHER,E_VOUCHER_SHOP,E_VOUCHER_SHOP_BKIDS,EV_VITA_CODE"}}),getAlls:s}}},function(o){o.O(0,[461,971,23,744],function(){return o(o.s=4438)}),_N_E=o.O()}]);