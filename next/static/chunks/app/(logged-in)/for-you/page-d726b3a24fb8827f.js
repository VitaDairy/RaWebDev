(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{5026:function(e,t,s){Promise.resolve().then(s.bind(s,2970)),Promise.resolve().then(s.bind(s,1846)),Promise.resolve().then(s.bind(s,9561))},6648:function(e,t,s){"use strict";s.d(t,{default:function(){return r.a}});var n=s(5601),r=s.n(n)},6463:function(e,t,s){"use strict";var n=s(1169);s.o(n,"usePathname")&&s.d(t,{usePathname:function(){return n.usePathname}}),s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}})},5601:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return c},getImageProps:function(){return i}});let n=s(9920),r=s(497),a=s(8173),l=n._(s(1241));function i(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let c=a.Image},2970:function(e,t,s){"use strict";s.d(t,{default:function(){return i}});var n=s(7437),r=s(2265);let a=r.forwardRef(function(e,t){let{title:s,titleId:n,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},a),s?r.createElement("title",{id:n},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});var l=s(6648),i=e=>{let{title:t,inputSearch:s=!0}=e;return(0,n.jsxs)("header",{className:"bg-gradient-to-r from-cyan-500 to-green-500 p-4 relative",children:[(0,n.jsx)("div",{className:"flex justify-between items-center"}),(0,n.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,n.jsx)("h1",{className:"text-white text-xl font-semibold pt-1",children:t}),(0,n.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,n.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,n.jsx)(l.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]})]}),s&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,n.jsx)(a,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,n.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},1846:function(e,t,s){"use strict";var n=s(7437),r=s(8499);t.default=e=>{let{products:t}=e;return(0,n.jsx)("div",{className:"h-screen overflow-y-auto p-4",children:(0,n.jsx)("div",{className:"grid grid-cols-2 gap-4",children:t.map(e=>(0,n.jsx)(r.Z,{product:e},e.key))})})}},9561:function(e,t,s){"use strict";var n=s(7437),r=s(8906),a=s(2265);t.default=()=>{let[e,t]=(0,a.useState)("Thứ tự ưu ti\xean từ thấp đến cao"),[s,l]=(0,a.useState)(!1),i=e=>{t(e),l(!1)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-4 relative",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>l(!s),children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-inputGrey text-xs",children:"Sắp xếp"}),(0,n.jsx)("p",{className:"text-neutral font-semibold text-sm",children:"Thứ tự ưu ti\xean từ thấp đến cao"})]}),(0,n.jsx)(r.Z,{className:"w-5 h-5 text-black ".concat(s?"transform rotate-180":"")})]}),s&&(0,n.jsx)("div",{className:"absolute left-0 bg-white shadow-lg rounded-lg mt-2 w-full z-10",children:["Thứ tự ưu ti\xean từ thấp đến cao","Thứ tự ưu ti\xean từ cao đến thấp","Gi\xe1 từ thấp đến cao","Gi\xe1 từ cao đến thấp"].map(e=>(0,n.jsx)("div",{onClick:()=>i(e),className:"px-4 py-1 hover:bg-gray-100 cursor-pointer",children:(0,n.jsxs)("p",{className:"text-neutral font-semibold text-sm",children:[" ",e]})},e))})]})})}},8499:function(e,t,s){"use strict";var n=s(7437),r=s(6648),a=s(6463);t.Z=e=>{let{product:t}=e,s=(0,a.useRouter)();return(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-md mb-2",onClick:()=>{s.push("/product-detail")},children:[(0,n.jsx)("div",{className:"w-40 h-40 bg-gray-200 relative",children:(0,n.jsx)(r.default,{src:"/static/product/product_image.jpeg",alt:"Product",layout:"fill",objectFit:"cover",className:"w-40 h-40 rounded-t-xl"})}),(0,n.jsxs)("div",{className:"p-2",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("h3",{className:"text-sm font-semibold mt-2 text-neutral",children:"Bếp Đa Năng Bear Bếp Đa Năng Bear"}),(0,n.jsx)(r.default,{src:"/static/icons/love.svg",alt:"love",width:16,height:15,className:"rounded-xl mt-2"})]}),(0,n.jsx)("p",{className:"text-gray-500 mt-2 text-xs",children:"Gi\xe1 trị: 255.000đ"}),(0,n.jsxs)("div",{className:"flex items-center justify-between mt-2",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(r.default,{src:"/static/icons/menu.svg",alt:"point",width:16,height:16}),(0,n.jsx)("p",{className:"text-gray-500 text-xs text-primary500 ml-1",children:"9 xu"})]}),(0,n.jsx)("p",{className:"text-gray-500 text-xs text-primary500",children:"C\xf2n h\xe0ng: 24"})]})]})]})}},8906:function(e,t,s){"use strict";var n=s(2265);let r=n.forwardRef(function(e,t){let{title:s,titleId:r,...a}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),s?n.createElement("title",{id:r},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))});t.Z=r}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=5026)}),_N_E=e.O()}]);