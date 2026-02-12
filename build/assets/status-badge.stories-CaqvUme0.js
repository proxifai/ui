import{j as c}from"./index-BC_MNVAr.js";import{c as s}from"./utils-D_sggm65.js";import{c as a}from"./createLucideIcon-DWyRkbmX.js";import{L as u}from"./loader-circle-CS7eADQj.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],p=a("ban",b);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],y=a("circle-check-big",x);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],k=a("circle-x",f);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],h=a("clock",N);function o({status:e,config:r,showIcon:i=!0,animateStatus:l,className:d,...m}){const t=r[e];if(!t)return null;const g=t.icon;return c.jsxs("span",{"data-slot":"status-badge","data-status":e,className:s("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border",t.className,d),...m,children:[i&&c.jsx(g,{className:s("h-3 w-3",l&&e===l&&"animate-spin")}),t.label]})}const S={title:"Components/StatusBadge"},n={running:{label:"Running",icon:u,className:"bg-blue-500/10 text-blue-500 border-blue-500/20"},completed:{label:"Completed",icon:y,className:"bg-green-500/10 text-green-500 border-green-500/20"},failed:{label:"Failed",icon:k,className:"bg-red-500/10 text-red-500 border-red-500/20"},queued:{label:"Queued",icon:h,className:"bg-amber-500/10 text-amber-500 border-amber-500/20"},cancelled:{label:"Cancelled",icon:p,className:"bg-gray-500/10 text-gray-500 border-gray-500/20"}},B=()=>c.jsx("div",{className:"flex gap-2 flex-wrap",children:Object.keys(n).map(e=>c.jsx(o,{status:e,config:n,animateStatus:"running"},e))}),v=()=>c.jsx("div",{className:"flex gap-2 flex-wrap",children:Object.keys(n).map(e=>c.jsx(o,{status:e,config:n,showIcon:!1},e))}),z=()=>c.jsx(o,{status:"running",config:n,animateStatus:"running"});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{B as AllStatuses,v as NoIcon,z as SingleStatus,S as default};
