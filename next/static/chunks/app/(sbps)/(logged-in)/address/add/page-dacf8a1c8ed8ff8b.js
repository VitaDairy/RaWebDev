(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{5741:function(e,t,n){Promise.resolve().then(n.bind(n,6340))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var r=n(5601),s=n.n(r)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return d},getImageProps:function(){return i}});let r=n(9920),s=n(497),l=n(8173),a=r._(n(1241));function i(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let d=l.Image},6340:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7437),s=n(506),l=n(6981),a=n(3056),i=n(3874),d=n(5888),o=n(3934),c=n(8906),u=n(6463),m=n(2265);function h(){(0,u.useRouter)();let{user:e,actionGetProvinces:t,actionReloadDataUser:n}=(0,a.Z)(),o=new Date,[c,h]=(0,m.useState)(null),[p,b]=(0,m.useState)(""),[f,v]=(0,m.useState)(""),[j,N]=(0,m.useState)(!0),[w,g]=(0,m.useState)({}),[k,I]=(0,m.useState)({name:(null==e?void 0:e.firstName)||(null==e?void 0:e.name)||"",phoneNumber:(null==e?void 0:e.phoneNumber)||(null==e?void 0:e.phoneNumber)||"",provinceId:0,districtId:0,wardId:0,address:""});return(0,m.useEffect)(()=>{t().then(e=>{h((null==e?void 0:e.provinces)||null),I(t=>{var n;return{...t,provinceId:null==e?void 0:null===(n=e.provinces[0])||void 0===n?void 0:n.id}})})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{title:"Th\xeam địa chỉ",inputSearch:!1,showPoint:!1,showBack:!0}),(0,r.jsx)("div",{className:"flex flex-col pt-2 text-center"}),(0,r.jsx)(x,{defaultValue:e,handleChange:e=>{let{name:t,value:n,type:r,checked:s}=e.target;"name"===t&&""===n?g(e=>({...e,name:!0})):g(e=>({...e,name:!1})),"phoneNumber"!==t||""!==n&&(0,d.e)(n)?g(e=>({...e,phoneNumber:!1})):g(e=>({...e,phoneNumber:!0})),"address"===t&&""===n?g(e=>({...e,address:!0})):g(e=>({...e,address:!1})),"provinceId"===t&&(0===(n=Number(n))?g(e=>({...e,provinceId:!0})):g(e=>({...e,provinceId:!1})),i.ZP.getWardsAndDistricts({code:Number(n)}).then(e=>{var t;b((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null)})),"districtId"===t&&(0===(n=Number(n))?g(e=>({...e,districtId:!0})):g(e=>({...e,districtId:!1})),i.ZP.getWardsAndDistricts({code:Number(n)}).then(e=>{var t;v((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null)})),"wardId"===t&&(0===(n=Number(n))?g(e=>({...e,wardId:!0})):g(e=>({...e,wardId:!1}))),I(e=>({...e,[t]:"checkbox"===r?s:n})),N(!(""!==k.address&&0!==k.provinceId&&0!==k.districtId&&0!==k.wardId))},district:p,formData:k,handleSubmit:e=>{i.ZP.updateProfile(k).then(async e=>{var t,r;(null==e?void 0:null===(t=e.meta)||void 0===t?void 0:t.status)===1e3?(await n(),(0,l.QO)({startTime:o,address:k.address,phone:k.phoneNumber,provinceId:k.provinceId,districtId:k.districtId,wardId:k.wardId}),(0,l.lb)({address:k.address,phone:k.phoneNumber,provinceId:k.provinceId,districtId:k.districtId,wardId:k.wardId,startTime:o}),window.location.href="/home"):(0,l.Ux)({startTime:o,address:k.address,phone:k.phoneNumber,provinceId:k.provinceId,districtId:k.districtId,wardId:k.wardId,reason:null==e?void 0:null===(r=e.meta)||void 0===r?void 0:r.error})})},provinces:c,ward:f,isDisableButton:j,errors:w},"123")]})}let x=e=>{let{defaultValue:t,handleChange:n,formData:s,provinces:l,district:a,ward:i,handleSubmit:d,isDisableButton:u,errors:m}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"mt-15 w-full bg-white",children:[(0,r.jsxs)("div",{className:"pl-5 pr-5 bg-white",children:[(0,r.jsx)("label",{className:"block mb-2 text-sm font-medium text-neutral900 dark:text-neutral900 text-xs",children:"Nhập th\xf4ng tin địa chỉ:"}),(0,r.jsx)("label",{className:"block mb-2 text-sm font-normal text-neutral700 dark:text-neutral700 text-xs",children:"Vui l\xf2ng kiểm tra c\xe1c th\xf4ng tin ch\xednh x\xe1c trước khi bấm Lưu địa chỉ:"})]}),(0,r.jsx)("div",{className:"h-5 bg-surface02"}),(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("label",{className:"block mb-2 font-medium text-neutral500 dark:text-neutral500 text-sm",children:["T\xean người nhận ",(0,r.jsx)("span",{className:"text-error500",children:"*"})]}),(0,r.jsx)("input",{type:"text",name:"name",className:"border-0 border-b focus:outline-none border-inputGrey w-full text-neutral font-normal pb-2",placeholder:"",onChange:n,defaultValue:null==t?void 0:t.name,value:t.name||s.name,disabled:null!=t&&!!t.name})]}),m.name&&(0,r.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,r.jsx)(o.Z,{className:"h-4 w-4"}),(0,r.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng nhập t\xean người nhận"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"block mb-2 mt-5 font-medium text-neutral500 dark:text-neutral500 text-sm",children:["Số điện thoại ",(0,r.jsx)("span",{className:"text-error500",children:"*"})]}),(0,r.jsx)("input",{type:"tel",name:"phoneNumber",value:s.password,onChange:n,className:"border-0 border-b focus:outline-none border-inputGrey w-full text-neutral pb-2",placeholder:"",defaultValue:null==t?void 0:t.phoneNumber,disabled:null!=t&&!!t.phoneNumber})]}),m.phoneNumber&&(0,r.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,r.jsx)(o.Z,{className:"h-4 w-4"}),(0,r.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng điền th\xf4ng tin điện thoại hợp lệ"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"block mb-2 mt-5 font-medium text-neutral500 dark:text-neutral500 text-sm",children:["Tỉnh/Th\xe0nh phố ",(0,r.jsx)("span",{className:"text-error500",children:"*"})]}),(0,r.jsxs)("div",{className:"flex items-center relative",children:[(0,r.jsxs)("select",{name:"provinceId",value:s.provinceId,onChange:n,className:"appearance-none border-0 border-b focus:outline-none border-inputGrey w-full text-neutral font-normal pb-2",required:!0,children:[(0,r.jsx)("option",{value:"0",children:"Chọn tỉnh/th\xe0nh phố"}),l&&(null==l?void 0:l.filter(e=>e.id<100).map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},"province-".concat(e.id))))]}),(0,r.jsx)(c.Z,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]})]}),m.provinceId&&(0,r.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,r.jsx)(o.Z,{className:"h-4 w-4"}),(0,r.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng chọn Tỉnh/Th\xe0nh phố"})]}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("label",{className:"block mb-2 mt-5 font-medium text-neutral500 dark:text-neutral500 text-sm",children:["Quận/Huyện ",(0,r.jsx)("span",{className:"text-error500",children:"*"})]}),(0,r.jsxs)("div",{className:" flex items-center relative",children:[(0,r.jsxs)("select",{name:"districtId",value:s.districtId,onChange:n,className:"border-0 border-b focus:outline-none border-inputGrey w-full text-neutral font-normal pb-2",required:!0,children:[(0,r.jsx)("option",{value:"0",className:"text-neutral500 text-sm",disabled:!0,children:"Chọn Quận/huyện"}),a&&(null==a?void 0:a.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},"district-".concat(e.id))))]}),(0,r.jsx)(c.Z,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]})]}),m.districtId&&(0,r.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,r.jsx)(o.Z,{className:"h-4 w-4"}),(0,r.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng chọn Quận/Huyện"})]})]}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("label",{className:"block mb-2 mt-5 font-medium text-neutral500 dark:text-neutral500 text-sm",children:["Phường/X\xe3 ",(0,r.jsx)("span",{className:"text-error500",children:"*"})]}),(0,r.jsxs)("div",{className:" flex items-center relative",children:[(0,r.jsxs)("select",{name:"wardId",value:s.wardId,onChange:n,className:"border-0 border-b focus:outline-none border-inputGrey w-full text-neutral font-normal pb-2",required:!0,children:[(0,r.jsx)("option",{value:"0",disabled:!0,children:"Chọn X\xe3/Phường"}),i&&(null==i?void 0:i.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},"ward-".concat(e.id))))]}),(0,r.jsx)(c.Z,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]})]}),m.wardId&&(0,r.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,r.jsx)(o.Z,{className:"h-4 w-4"}),(0,r.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng chọn Phường/X\xe3"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"block mb-2 mt-5 font-medium text-neutral500 dark:text-neutral500 text-sm",children:["Địa chỉ cụ thể ",(0,r.jsx)("span",{className:"text-error500",children:"*"})]}),(0,r.jsx)("input",{name:"address",type:"text",value:s.address,className:"border-0 border-b focus:outline-none border-inputGrey w-full text-neutral pb-2",placeholder:"Số nh\xe0, đường, ấp, th\xf4n",onChange:n})]}),m.address&&(0,r.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,r.jsx)(o.Z,{className:"h-4 w-4"}),(0,r.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng nhập địa chỉ"})]}),(0,r.jsx)("button",{className:" ".concat(u?"bg-disabled opacity-50 cursor-not-allowed":"bg-gradient-button opacity-100"," font-bold py-2 px-4 rounded-full transition duration-300 min-w-full mt-5 bottom-0 left-0"),disabled:u,onClick:()=>{d()},children:"HO\xc0N TẤT"})]})]})})}},506:function(e,t,n){"use strict";var r=n(7437),s=n(6514),l=n(4380),a=n(6648),i=n(6463);t.Z=e=>{let{title:t,inputSearch:n=!0,showPoint:d=!0,showBack:o=!1,backUrl:c="",onClickBackURl:u=null,showInputVoucher:m=!1,onClickShowInputVoucher:h}=e,x=(0,i.useRouter)(),p=(0,i.usePathname)();return(0,r.jsxs)("header",{className:"".concat(p.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,r.jsx)("div",{className:"flex justify-between items-center"}),(0,r.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,r.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex items-center",children:[o&&(0,r.jsx)(s.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(u){u();return}if(c){x.push(c);return}x.back()}}),t]}),d&&(0,r.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,r.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,r.jsx)(a.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),m&&(0,r.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,r.jsx)("button",{onClick:()=>{h&&h(),x.push("/qr/detail")},children:(0,r.jsx)(a.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),n&&(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,r.jsx)(l.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,r.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},5888:function(e,t,n){"use strict";function r(e){return/^(0|\+84)(3|5|7|8|9)\d{8}$/.test(e)}n.d(t,{e:function(){return r}})},6514:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=s},8906:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))});t.Z=s},3934:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});t.Z=s},4380:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=s}},function(e){e.O(0,[8173,8461,4498,2971,7023,1744],function(){return e(e.s=5741)}),_N_E=e.O()}]);