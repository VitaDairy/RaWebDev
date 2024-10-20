"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{6981:function(e,o,t){t.d(o,{x:function(){return n}});let n=e=>{let{event:o,eventCategory:t,eventLabel:n,...a}=e;window.gtag&&window.gtag("event",o,{event_category:t,event_label:n,...a})}},3056:function(e,o,t){var n=t(9099),a=t(9291),r=t(6981),i=t(3874),l=t(2826);let s=(0,n.Ue)()((0,a.tJ)((e,o)=>({user:null,auth:null,phone:null,otp:null,address:null,token:null,verifyPhone:null,source:null,isLoggedIn:!1,loginError:null,provinces:null,districts:null,wards:null,authorization:null,actionGetProvinces:async()=>{var t;if(o().provinces)return{provinces:o().provinces};let[n]=await Promise.all([i.ZP.getProvinces()]);return(null==n?void 0:null===(t=n.meta)||void 0===t?void 0:t.status)!==1e3?{provinces:null}:(e({provinces:n.response.provinces}),{provinces:n.response.provinces})},actionVerifyPhoneNumber:async o=>{let t=await i.ZP.verifyPhoneNumber(o);return e({verifyPhone:t,phone:o,source:t?"LOGIN":"REGISTER"}),{verifyPhone:t,phone:o,source:t?"LOGIN":"REGISTER"}},actionLogin:async(o,t)=>{try{var n,a,s;if(!await i.ZP.verifyPhoneNumber(o))return e({user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false",phone:o,otp:t}),{user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false"};let u=await i.ZP.login(o,t);if((null==u?void 0:null===(n=u.meta)||void 0===n?void 0:n.status)!==1e3)return(0,r.x)({event:"ev_account_failed_join_now_wa",pr_event_group:"account",pr_start_time:(0,l.e)(),pr_login_method:"SMS",pr_login_failed_value:o,pr_reason_message_error:null==u?void 0:null===(s=u.meta)||void 0===s?void 0:s.msg}),e({user:null,token:null,isLoggedIn:!1,loginError:"Login failed",phone:o,otp:t}),{user:null,token:null,isLoggedIn:!1,loginError:"Login failed"};let{user:c,auth:d}=(null==u?void 0:u.response)||{};(0,r.x)({event:"ev_account_complete_join_now_wa",pr_event_group:"account",pr_start_time:(0,l.e)(),pr_login_method:"SMS",pr_json_data:JSON.stringify({phone:o,id:c.id})}),localStorage.setItem("token",d.accessToken);let g="Bearer ".concat(d.accessToken);e({user:c,token:d.accessToken,isLoggedIn:!0,loginError:null,auth:d,authorization:g});let[v]=await Promise.all([i.ZP.getAddress({auth:g})]),p=(null==v?void 0:null===(a=v.response)||void 0===a?void 0:a.recipientInfoList)||[];return e({address:p}),{user:c,token:o,isLoggedIn:!0,loginError:null}}catch(n){return console.log("\uD83D\uDE80 ~ login: ~ error:",n),e({user:null,token:null,isLoggedIn:!1,loginError:n.message||"Login failed",phone:o,otp:t}),{user:null,token:null,isLoggedIn:!1,loginError:n.message||"Login failed"}}},actionRegister:async o=>{try{var t,n;if((null==o?void 0:null===(t=o.meta)||void 0===t?void 0:t.status)!==1e3)return{user:null,token:null,isLoggedIn:!1,loginError:"Register failed"};let{user:a,auth:r}=(null==o?void 0:o.response)||{};localStorage.setItem("token",r.accessToken);let l="Bearer ".concat(r.accessToken);e({user:a,token:r.accessToken,isLoggedIn:!0,loginError:null,auth:r,authorization:l});let[s]=await Promise.all([i.ZP.getAddress({auth:l})]),u=(null==s?void 0:null===(n=s.response)||void 0===n?void 0:n.recipientInfoList)||[];return e({address:u}),{user:a,isLoggedIn:!0,loginError:null}}catch(o){return console.log("\uD83D\uDE80 ~ login: ~ error:",o),e({user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed"}),{user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed"}}},logout:()=>{localStorage.removeItem("login-storage"),console.log("\uD83D\uDE80 ~ logout: ~ localStorage:",localStorage),e({user:null,token:null,isLoggedIn:!1,loginError:null})}}),{name:"login-storage",storage:(0,a.FL)(()=>localStorage)}));o.Z=s},3874:function(e,o,t){t.d(o,{ZP:function(){return u}});let n=async e=>{let{url:o,method:t,body:n,authorization:a,headers:r={}}=e;try{let e={"Content-Type":"application/json",...r};a&&(e.Authorization=a),("GET"===t||"DELETE"===t)&&(o="".concat(o,"?").concat(new URLSearchParams(n).toString()),n=void 0);let i=n?JSON.stringify(n):void 0,l=await fetch(o,{method:t,headers:e,body:i});return null==l?void 0:l.json()}catch(e){return console.log(e),{error:e,status:500}}},a="https://api-sandbox.vitadairyvietnam.vn",r=()=>{try{var e,o;let t=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",n=JSON.parse(t);return(null==n?void 0:null===(o=n.state)||void 0===o?void 0:o.authorization)||""}catch(e){return null}},i=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],l=0,s=async e=>{var o,t,i,l;let{page:s=0,size:u=10,body:c}=e,d=await n({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:0,size:u,...c}}),g=null==d?void 0:null===(t=d.response)||void 0===t?void 0:null===(o=t.data)||void 0===o?void 0:o.data,v=[];for(let e=1;e<=(null==d?void 0:null===(l=d.response)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:i.total);e+=1)v.push(n({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:e,size:10,...c}}).then(e=>{var o,t;g=g.concat(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(o=t.data)||void 0===o?void 0:o.data)}));return await Promise.all(v),d.response.data.data=g,d};var u={getUser:async()=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user"),method:"GET",authorization:r()}),getNotificationUnread:async()=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:r()}),getMyRewards:async()=>await n({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:r()}),sendOTP:async(e,o)=>"LOGIN"===o?(o="REGISTER",await n({url:"".concat(a,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:e,type:"log_in_calosure"}})):await n({url:"".concat(a,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:o},authorization:r()}),verifyOTP:async(e,o)=>await n({url:"".concat(a,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:o},authorization:r()}),getNotifications:async e=>{let{page:o=1,size:t=20}=e,i=await n({url:"".concat(a,"/api-v3/noti/user/noti"),method:"GET",authorization:r(),body:{page:o,size:t}});return console.log("\uD83D\uDE80 ~ getNotifications ~ response:",i),i},getDetailNotifications:async e=>{let{id:o,page:t=1,size:i=20}=e;return await n({url:"".concat(a,"/api-v3/noti/user/noti/").concat(o),method:"GET",authorization:r()})},readDetailNotifications:async e=>{let{id:o}=e;return await n({url:"".concat(a,"/api-v3/noti/user/noti/").concat(o,"/read"),method:"POST",authorization:r(),body:{id:o}})},getAddress:async e=>{let{auth:o}=e;return await n({url:"".concat(a,"/api/recipient/me"),method:"GET",authorization:o||r()})},logout:async()=>await n({url:"".concat(a,"/api/user/logout"),method:"POST",authorization:r()}),verifyPhoneNumber:async e=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:r(),body:{phoneNumber:e}}),getProvinces:async()=>await n({url:"".concat(a,"/api/province/vn"),method:"GET",authorization:r()}),getWardsAndDistricts:async e=>{let{code:o}=e;return await n({url:"".concat(a,"/api/province/parent/").concat(o),method:"GET",authorization:r()})},register:async e=>await n({url:"".concat(a,"/api/user/register"),method:"POST",body:e,headers:{appversioncode:12,appversionname:"3.1.2",webapp_name:"SBPS"}}),login:async(e,o)=>await n({url:"".concat(a,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:o},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await n({url:"".concat(a,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:r()}),getQrCode:async e=>{let{qrCode:o}=e;return await n({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:r(),body:{qrCode:o}})},validateProduct:async e=>{let{qrCode:o,sku:t,mock:s=!0}=e;return s?((l+=1)>=i.length&&(l=0),{response:null,meta:{status:1e3},notification:{code:i[l]}}):await n({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:r(),body:{qrCode:o,sku:t}})},getGifts:async()=>await s({page:0,size:15,body:{giftTypes:"GIFT",statuses:"PENDING,EXCHANGED"}}),getVouchers:async()=>s({page:0,size:15,body:{giftTypes:"E_VOUCHER,E_VOUCHER_SHOP,E_VOUCHER_SHOP_BKIDS,EV_VITA_CODE"}}),getAlls:s,orderGift:async e=>{let{recipientSnapshot:o,userGiftSnapshot:t,userId:i}=e;return await n({url:"".concat(a,"/v4/os/orders"),method:"POST",body:{recipientSnapshot:o,userGiftSnapshot:t,userId:i},authorization:r()})}}},2826:function(e,o,t){function n(e){let o=new Date(e),t=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),a=o.getFullYear();return"".concat(t,"/").concat(n,"/").concat(a)}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,o=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear(),a=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0"),i=String(e.getSeconds()).padStart(2,"0");return"".concat(o,"/").concat(t,"/").concat(n," - ").concat(a,":").concat(r,":").concat(i)}t.d(o,{e:function(){return a},p:function(){return n}})}}]);