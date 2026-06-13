import{j as n}from"./index-BHkqgZOr.js";import{c as r}from"./utils-BJa6zb-g.js";import{c as o}from"./createLucideIcon-CqAybpHj.js";import{C as g}from"./clock-CmOT7Pe2.js";import{L as f}from"./loader-circle-CednEkDe.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],x=o("ban",p);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],y=o("circle-check-big",b);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],h=o("circle-x",N);function a({status:e,config:i,showIcon:l=!0,animateStatus:s,className:d,...m}){const c=i[e];if(!c)return null;const u=c.icon;return n.jsxs("span",{"data-slot":"status-badge","data-status":e,className:r("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border",c.className,d),...m,children:[l&&n.jsx(u,{className:r("h-3 w-3",s&&e===s&&"animate-spin")}),c.label]})}const S={title:"Components/StatusBadge"},t={running:{label:"Running",icon:f,className:"bg-info/10 text-info border-info/20"},completed:{label:"Completed",icon:y,className:"bg-success/10 text-success border-success/20"},failed:{label:"Failed",icon:h,className:"bg-error/10 text-error border-error/20"},queued:{label:"Queued",icon:g,className:"bg-warning/10 text-warning border-warning/20"},cancelled:{label:"Cancelled",icon:x,className:"bg-muted text-muted-foreground border-border"}},B=()=>n.jsx("div",{className:"flex gap-2 flex-wrap",children:Object.keys(t).map(e=>n.jsx(a,{status:e,config:t,animateStatus:"running"},e))}),z=()=>n.jsx("div",{className:"flex gap-2 flex-wrap",children:Object.keys(t).map(e=>n.jsx(a,{status:e,config:t,showIcon:!1},e))}),I=()=>n.jsx(a,{status:"running",config:t,animateStatus:"running"});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{B as AllStatuses,z as NoIcon,I as SingleStatus,S as default};
