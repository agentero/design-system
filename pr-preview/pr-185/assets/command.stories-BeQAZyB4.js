import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-Cv1r6t2O.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./search-BJDkqcW-.js";import{n as o,t as s}from"./dist-vre1D6-W.js";import{n as c,t as l}from"./dist-Bz4ZdGVB.js";import{n as u,t as d}from"./dist-Dsj2rsW0.js";import{n as f,t as p}from"./button-DLu2woHf.js";import{a as m,c as ee,d as te,r as ne,s as re}from"./combobox-escape-B4fy8sSa.js";import{n as ie,t as ae}from"./popover-CNDKDFrf.js";import{n as oe,t as h}from"./dist-1JNSRcpX.js";function g(e,t,n,r,i,a,o){if(a===t.length)return i===e.length?y:C;var s=`${i},${a}`;if(o[s]!==void 0)return o[s];for(var c=r.charAt(a),l=n.indexOf(c,i),u=0,d,f,p,m;l>=0;)d=g(e,t,n,r,l+1,a+1,o),d>u&&(l===i?d*=y:ue.test(e.charAt(l-1))?(d*=ce,p=e.slice(i,l-1).match(w),p&&i>0&&(d*=x**+p.length)):de.test(e.charAt(l-1))?(d*=se,m=e.slice(i,l-1).match(T),m&&i>0&&(d*=x**+m.length)):(d*=le,i>0&&(d*=x**+(l-i))),e.charAt(l)!==t.charAt(a)&&(d*=S)),(d<b&&n.charAt(l-1)===r.charAt(a+1)||r.charAt(a+1)===r.charAt(a)&&n.charAt(l-1)!==r.charAt(a))&&(f=g(e,t,n,r,l+1,a+2,o),f*b>d&&(d=f*b)),d>u&&(u=d),l=n.indexOf(c,l+1);return o[s]=u,u}function _(e){return e.toLowerCase().replace(T,` `)}function v(e,t,n){return e=n&&n.length>0?`${e+` `+n.join(` `)}`:e,g(e,t,_(e),_(t),0,0,{})}var y,se,ce,le,b,x,S,C,ue,w,de,T;function fe(){return(fe=t((()=>{y=1,se=.9,ce=.8,le=.17,b=.1,x=.999,S=.9999,C=.99,ue=/[\\\/_+.#"@\[\(\{&]/,w=/[\\\/_+.#"@\[\(\{&]/g,de=/[\s-]/,T=/[\s-]/g})))()}function pe(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function me(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function he(e){let t=O.useRef(e);return N(()=>{t.current=e}),t}function E(e){let t=O.useRef();return t.current===void 0&&(t.current=e()),t}function D(e){let t=De(),n=()=>e(t.snapshot());return O.useSyncExternalStore(t.subscribe,n,n)}function ge(e,t,n,r=[]){let i=O.useRef(),a=j();return N(()=>{var o;let s=(()=>{for(let e of n){if(typeof e==`string`)return e.trim();if(typeof e==`object`&&`current`in e)return e.current?e.current.textContent?.trim():i.current}})(),c=r.map(e=>e.trim());a.value(e,s,c),(o=t.current)==null||o.setAttribute(A,s),i.current=s}),i}function _e(e){let t=e.type;return typeof t==`function`?t(e.props):`render`in t?t.render(e.props):e}function ve({asChild:e,children:t},n){return e&&O.isValidElement(t)?O.cloneElement(_e(t),{ref:t.ref},n(t.props.children)):n(t)}var O,k,ye,be,xe,Se,Ce,A,we,Te,j,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,M,N,Re,ze;function Be(){return(Be=t((()=>{fe(),te(),O=e(n(),1),oe(),l(),o(),k=`[cmdk-group=""]`,ye=`[cmdk-group-items=""]`,be=`[cmdk-group-heading=""]`,xe=`[cmdk-item=""]`,Se=`${xe}:not([aria-disabled="true"])`,Ce=`cmdk-item-select`,A=`data-value`,we=(e,t,n)=>v(e,t,n),Te=O.createContext(void 0),j=()=>O.useContext(Te),Ee=O.createContext(void 0),De=()=>O.useContext(Ee),Oe=O.createContext(void 0),ke=O.forwardRef((e,t)=>{let n=E(()=>({search:``,value:e.value??e.defaultValue??``,selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}})),r=E(()=>new Set),i=E(()=>new Map),a=E(()=>new Map),o=E(()=>new Set),s=he(e),{label:l,children:u,value:d,onValueChange:f,filter:p,shouldFilter:m,loop:ee,disablePointerSelection:te=!1,vimBindings:ne=!0,...re}=e,ie=c(),ae=c(),oe=c(),g=O.useRef(null),_=Re();N(()=>{if(d!==void 0){let e=d.trim();n.current.value=e,v.emit()}},[d]),N(()=>{_(6,x)},[]);let v=O.useMemo(()=>({subscribe:e=>(o.current.add(e),()=>o.current.delete(e)),snapshot:()=>n.current,setState:(e,t,r)=>{var i,a,o;if(!Object.is(n.current[e],t)){if(n.current[e]=t,e===`search`)b(),ce(),_(1,le);else if(e===`value`){if(document.activeElement.hasAttribute(`cmdk-input`)||document.activeElement.hasAttribute(`cmdk-root`)){let e=document.getElementById(oe);e?e.focus():(i=document.getElementById(ie))==null||i.focus()}if(_(7,()=>{n.current.selectedItemId=S()?.id,v.emit()}),r||_(5,x),s.current?.value!==void 0){let e=t??``;(o=(a=s.current).onValueChange)==null||o.call(a,e);return}}v.emit()}},emit:()=>{o.current.forEach(e=>e())}}),[]),y=O.useMemo(()=>({value:(e,t,r)=>{t!==a.current.get(e)?.value&&(a.current.set(e,{value:t,keywords:r}),n.current.filtered.items.set(e,se(t,r)),_(2,()=>{ce(),v.emit()}))},item:(e,t)=>(r.current.add(e),t&&(i.current.has(t)?i.current.get(t).add(e):i.current.set(t,new Set([e]))),_(3,()=>{b(),ce(),n.current.value||le(),v.emit()}),()=>{a.current.delete(e),r.current.delete(e),n.current.filtered.items.delete(e);let t=S();_(4,()=>{b(),t?.getAttribute(`id`)===e&&le(),v.emit()})}),group:e=>(i.current.has(e)||i.current.set(e,new Set),()=>{a.current.delete(e),i.current.delete(e)}),filter:()=>s.current.shouldFilter,label:l||e[`aria-label`],getDisablePointerSelection:()=>s.current.disablePointerSelection,listId:ie,inputId:oe,labelId:ae,listInnerRef:g}),[]);function se(e,t){let r=s.current?.filter??we;return e?r(e,n.current.search,t):0}function ce(){if(!n.current.search||s.current.shouldFilter===!1)return;let e=n.current.filtered.items,t=[];n.current.filtered.groups.forEach(n=>{let r=i.current.get(n),a=0;r.forEach(t=>{let n=e.get(t);a=Math.max(n,a)}),t.push([n,a])});let r=g.current;C().sort((t,n)=>{let r=t.getAttribute(`id`),i=n.getAttribute(`id`);return(e.get(i)??0)-(e.get(r)??0)}).forEach(e=>{let t=e.closest(ye);t?t.appendChild(e.parentElement===t?e:e.closest(`${ye} > *`)):r.appendChild(e.parentElement===r?e:e.closest(`${ye} > *`))}),t.sort((e,t)=>t[1]-e[1]).forEach(e=>{let t=g.current?.querySelector(`${k}[${A}="${encodeURIComponent(e[0])}"]`);t?.parentElement.appendChild(t)})}function le(){let e=C().find(e=>e.getAttribute(`aria-disabled`)!==`true`)?.getAttribute(A);v.setState(`value`,e||void 0)}function b(){if(!n.current.search||s.current.shouldFilter===!1){n.current.filtered.count=r.current.size;return}n.current.filtered.groups=new Set;let e=0;for(let t of r.current){let r=se(a.current.get(t)?.value??``,a.current.get(t)?.keywords??[]);n.current.filtered.items.set(t,r),r>0&&e++}for(let[e,t]of i.current)for(let r of t)if(n.current.filtered.items.get(r)>0){n.current.filtered.groups.add(e);break}n.current.filtered.count=e}function x(){var e;let t=S();t&&(t.parentElement?.firstChild===t&&((e=t.closest(k)?.querySelector(be))==null||e.scrollIntoView({block:`nearest`})),t.scrollIntoView({block:`nearest`}))}function S(){return g.current?.querySelector(`${xe}[aria-selected="true"]`)}function C(){return Array.from(g.current?.querySelectorAll(Se)||[])}function ue(e){let t=C()[e];t&&v.setState(`value`,t.getAttribute(A))}function w(e){var t;let n=S(),r=C(),i=r.findIndex(e=>e===n),a=r[i+e];(t=s.current)!=null&&t.loop&&(a=i+e<0?r[r.length-1]:i+e===r.length?r[0]:r[i+e]),a&&v.setState(`value`,a.getAttribute(A))}function de(e){let t=S()?.closest(k),n;for(;t&&!n;)t=e>0?pe(t,k):me(t,k),n=t?.querySelector(Se);n?v.setState(`value`,n.getAttribute(A)):w(e)}let T=()=>ue(C().length-1),fe=e=>{e.preventDefault(),e.metaKey?T():e.altKey?de(1):w(1)},D=e=>{e.preventDefault(),e.metaKey?ue(0):e.altKey?de(-1):w(-1)};return O.createElement(h.div,{ref:t,tabIndex:-1,...re,"cmdk-root":``,onKeyDown:e=>{var t;(t=re.onKeyDown)==null||t.call(re,e);let n=e.nativeEvent.isComposing||e.keyCode===229;if(!(e.defaultPrevented||n))switch(e.key){case`n`:case`j`:ne&&e.ctrlKey&&fe(e);break;case`ArrowDown`:fe(e);break;case`p`:case`k`:ne&&e.ctrlKey&&D(e);break;case`ArrowUp`:D(e);break;case`Home`:e.preventDefault(),ue(0);break;case`End`:e.preventDefault(),T();break;case`Enter`:{e.preventDefault();let t=S();if(t){let e=new Event(Ce);t.dispatchEvent(e)}}}}},O.createElement(`label`,{"cmdk-label":``,htmlFor:y.inputId,id:y.labelId,style:ze},l),ve(e,e=>O.createElement(Ee.Provider,{value:v},O.createElement(Te.Provider,{value:y},e))))}),Ae=O.forwardRef((e,t)=>{let n=c(),r=O.useRef(null),i=O.useContext(Oe),a=j(),o=he(e),l=o.current?.forceMount??i?.forceMount;N(()=>{if(!l)return a.item(n,i?.id)},[l]);let u=ge(n,r,[e.value,e.children,r],e.keywords),d=De(),f=D(e=>e.value&&e.value===u.current),p=D(e=>l||a.filter()===!1?!0:!e.search||e.filtered.items.get(n)>0);O.useEffect(()=>{let t=r.current;if(t&&!e.disabled)return t.addEventListener(Ce,m),()=>t.removeEventListener(Ce,m)},[p,e.onSelect,e.disabled]);function m(){var e,t;ee(),(t=(e=o.current).onSelect)==null||t.call(e,u.current)}function ee(){d.setState(`value`,u.current,!0)}if(!p)return null;let{disabled:te,value:ne,onSelect:re,forceMount:ie,keywords:ae,...oe}=e;return O.createElement(h.div,{ref:s(r,t),...oe,id:n,"cmdk-item":``,role:`option`,"aria-disabled":!!te,"aria-selected":!!f,"data-disabled":!!te,"data-selected":!!f,onPointerMove:te||a.getDisablePointerSelection()?void 0:ee,onClick:te?void 0:m},e.children)}),je=O.forwardRef((e,t)=>{let{heading:n,children:r,forceMount:i,...a}=e,o=c(),l=O.useRef(null),u=O.useRef(null),d=c(),f=j(),p=D(e=>i||f.filter()===!1?!0:!e.search||e.filtered.groups.has(o));N(()=>f.group(o),[]),ge(o,l,[e.value,e.heading,u]);let m=O.useMemo(()=>({id:o,forceMount:i}),[i]);return O.createElement(h.div,{ref:s(l,t),...a,"cmdk-group":``,role:`presentation`,hidden:!p||void 0},n&&O.createElement(`div`,{ref:u,"cmdk-group-heading":``,"aria-hidden":!0,id:d},n),ve(e,e=>O.createElement(`div`,{"cmdk-group-items":``,role:`group`,"aria-labelledby":n?d:void 0},O.createElement(Oe.Provider,{value:m},e))))}),Me=O.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,i=O.useRef(null),a=D(e=>!e.search);return!n&&!a?null:O.createElement(h.div,{ref:s(i,t),...r,"cmdk-separator":``,role:`separator`})}),Ne=O.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,i=e.value!=null,a=De(),o=D(e=>e.search),s=D(e=>e.selectedItemId),c=j();return O.useEffect(()=>{e.value!=null&&a.setState(`search`,e.value)},[e.value]),O.createElement(h.input,{ref:t,...r,"cmdk-input":``,autoComplete:`off`,autoCorrect:`off`,spellCheck:!1,"aria-autocomplete":`list`,role:`combobox`,"aria-expanded":!0,"aria-controls":c.listId,"aria-labelledby":c.labelId,"aria-activedescendant":s,id:c.inputId,type:`text`,value:i?e.value:o,onChange:e=>{i||a.setState(`search`,e.target.value),n?.(e.target.value)}})}),Pe=O.forwardRef((e,t)=>{let{children:n,label:r=`Suggestions`,...i}=e,a=O.useRef(null),o=O.useRef(null),c=D(e=>e.selectedItemId),l=j();return O.useEffect(()=>{if(o.current&&a.current){let e=o.current,t=a.current,n,r=new ResizeObserver(()=>{n=requestAnimationFrame(()=>{let n=e.offsetHeight;t.style.setProperty(`--cmdk-list-height`,n.toFixed(1)+`px`)})});return r.observe(e),()=>{cancelAnimationFrame(n),r.unobserve(e)}}},[]),O.createElement(h.div,{ref:s(a,t),...i,"cmdk-list":``,role:`listbox`,tabIndex:-1,"aria-activedescendant":c,"aria-label":r,id:l.listId},ve(e,e=>O.createElement(`div`,{ref:s(o,l.listInnerRef),"cmdk-list-sizer":``},e)))}),Fe=O.forwardRef((e,t)=>{let{open:n,onOpenChange:r,overlayClassName:i,contentClassName:a,container:o,...s}=e;return O.createElement(ne,{open:n,onOpenChange:r},O.createElement(ee,{container:o},O.createElement(re,{"cmdk-overlay":``,className:i}),O.createElement(m,{"aria-label":e.label,"cmdk-dialog":``,className:a},O.createElement(ke,{ref:t,...s}))))}),Ie=O.forwardRef((e,t)=>D(e=>e.filtered.count===0)?O.createElement(h.div,{ref:t,...e,"cmdk-empty":``,role:`presentation`}):null),Le=O.forwardRef((e,t)=>{let{progress:n,children:r,label:i=`Loading...`,...a}=e;return O.createElement(h.div,{ref:t,...a,"cmdk-loading":``,role:`progressbar`,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":i},ve(e,e=>O.createElement(`div`,{"aria-hidden":!0},e)))}),M=Object.assign(ke,{List:Pe,Item:Ae,Input:Ne,Group:je,Separator:Me,Dialog:Fe,Empty:Ie,Loading:Le}),N=typeof window>`u`?O.useEffect:O.useLayoutEffect,Re=()=>{let[e,t]=O.useState(),n=E(()=>new Map);return N(()=>{n.current.forEach(e=>e()),n.current=new Map},[e]),(e,r)=>{n.current.set(e,r),t({})}},ze={position:`absolute`,width:`1px`,height:`1px`,padding:`0`,margin:`-1px`,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,borderWidth:`0`}})))()}var P,Ve,F,He,I,L,R,Ue,We,Ge;function Ke(){return(Ke=t((()=>{Be(),i(),d(),P=r(),Ve=u({slots:{root:[`overflow-hidden rounded-md bg-bg-default-base-primary shadow-xl`,`border border-border-default-base-primary`],search:[`flex items-center gap-2 px-4 py-3`,`border-b border-border-default-base-primary`],searchIcon:`size-5 shrink-0 pointer-events-none text-icon-default-base-tertiary`,input:[`w-full border-none bg-transparent text-sm text-text-default-base-primary outline-none`,`placeholder:text-text-default-base-tertiary`],list:[`max-h-65.25 overflow-y-auto rounded-md px-1 py-2 outline-none scroll-py-2`,`not-has-[[cmdk-item]]:py-0`],empty:`p-3 text-center text-sm text-text-default-base-tertiary`,item:[`flex items-center rounded-md px-3 py-2 text-sm text-text-default-base-primary`,`cursor-pointer hover:bg-bg-default-base-tertiary`,`data-[selected=true]:bg-bg-default-base-tertiary`,`data-[disabled=true]:cursor-default data-[disabled=true]:text-text-default-disable-primary`,`data-[disabled=true]:hover:bg-transparent data-[disabled=true]:data-[selected=true]:bg-transparent`]}}),F=Ve(),He=({className:e,...t})=>(0,P.jsx)(M,{"data-slot":`command-root`,className:F.root({className:e}),...t}),He.displayName=`Command.Root`,I=({className:e,...t})=>(0,P.jsxs)(`div`,{"data-slot":`command-search`,className:F.search({className:e}),children:[(0,P.jsx)(a,{"data-slot":`command-search-icon`,className:F.searchIcon(),"aria-hidden":!0}),(0,P.jsx)(M.Input,{"data-slot":`command-input`,className:F.input(),...t})]}),I.displayName=`Command.Input`,L=({className:e,...t})=>(0,P.jsx)(M.List,{"data-slot":`command-list`,className:F.list({className:e}),...t}),L.displayName=`Command.List`,R=({className:e,...t})=>(0,P.jsx)(M.Empty,{"data-slot":`command-empty`,className:F.empty({className:e}),...t}),R.displayName=`Command.Empty`,Ue=e=>(0,P.jsx)(M.Group,{"data-slot":`command-group`,...e}),Ue.displayName=`Command.Group`,We=({className:e,...t})=>(0,P.jsx)(M.Item,{"data-slot":`command-item`,className:F.item({className:e}),...t}),We.displayName=`Command.Item`,Ge=e=>D(e);try{Ve.displayName=`Command.Root`,Ve.__docgenInfo={description:``,displayName:`Command.Root`,filePath:`/home/runner/work/design-system/design-system/src/command/command.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{I.displayName=`Command.Input`,I.__docgenInfo={description:"Search row: a leading magnifier plus the text field that drives filtering.\n`className` lands on the row wrapper rather than the `<input>`, since the row\nis what reads as the field.\n\nName it through `Root`'s `label`, **not** `aria-label` here: cmdk applies its\nown `aria-labelledby` after spreading props, so it always wins and an\n`aria-label` here is silently ignored.",displayName:`Command.Input`,filePath:`/home/runner/work/design-system/design-system/src/command/command.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`Optional controlled state for the value of the search input.`,name:`value`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`Event handler called when the search value changes.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((search: string) => void)`}}},tags:{summary:`Search field that filters the list as you type`,example:'```tsx\n<Command.Root label="Search options">\n  <Command.Input placeholder="Search options..." />\n</Command.Root>\n```'}}}catch{}try{L.displayName=`Command.List`,L.__docgenInfo={description:"Scrollable region holding the items. Height is capped so a long list scrolls\ninstead of growing the surface; to change that cap, pass your own `max-h-*`.",displayName:`Command.List`,filePath:`/home/runner/work/design-system/design-system/src/command/command.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`Accessible label for this List of suggestions. Not shown visibly.`,name:`label`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Scroll container for command items`}}}catch{}try{R.displayName=`Command.Empty`,R.__docgenInfo={description:'Message rendered only while the search matches nothing; renders nothing at\nall when there are results, so it can sit in the tree permanently.\n\nPlace it as a **sibling** of `List`, not inside it: cmdk hardcodes\n`role="presentation"` here and `role="listbox"` on `List`, and a\npresentational child fails `aria-required-children`.',displayName:`Command.Empty`,filePath:`/home/runner/work/design-system/design-system/src/command/command.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Empty-state message shown when no item matches`,example:"```tsx\n<Command.List>{items}</Command.List>\n<Command.Empty>No options found</Command.Empty>\n```"}}}catch{}try{Ue.displayName=`Command.Group`,Ue.__docgenInfo={description:`Optional section wrapper around related items. Unstyled by design, so
ungrouped lists carry no extra spacing. cmdk renders the heading itself, so
style it from here with the descendant variant:
\`**:[[cmdk-group-heading]]:px-3\`.`,displayName:`Command.Group`,filePath:`/home/runner/work/design-system/design-system/src/command/command.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},heading:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`Optional heading to render for this group.`,name:`heading`,required:!1,tags:{},type:{name:`ReactNode`}},value:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`If no heading is provided, you must provide a value that is unique for this group.`,name:`value`,required:!1,tags:{},type:{name:`string`}},forceMount:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`Whether this group is forcibly rendered regardless of filtering.`,name:`forceMount`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Unstyled grouping wrapper for related items`}}}catch{}try{We.displayName=`Command.Item`,We.__docgenInfo={description:'Selectable row. cmdk keeps exactly one item active — via pointer or arrow\nkeys — and marks it `data-selected="true"`; Enter fires `onSelect` on that\nrow. Use `keywords` to make an item matchable by terms it doesn\'t display.',displayName:`Command.Item`,filePath:`/home/runner/work/design-system/design-system/src/command/command.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`Whether this item is currently disabled.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},onSelect:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`Event handler for when this item is selected, either via click or keyboard selection.`,name:`onSelect`,required:!1,tags:{},type:{name:`((value: string) => void)`}},value:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:"A unique value for this item.\nIf no value is provided, it will be inferred from `children` or the rendered `textContent`. If your `textContent` changes between renders, you _must_ provide a stable, unique `value`.",name:`value`,required:!1,tags:{},type:{name:`string`}},keywords:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`Optional keywords to match against when filtering.`,name:`keywords`,required:!1,tags:{},type:{name:`string[]`}},forceMount:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/cmdk/dist/index.d.ts`,name:`TypeLiteral`}],description:`Whether this item is forcibly rendered regardless of filtering.`,name:`forceMount`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Selectable command row with hover and active styling`,example:`\`\`\`tsx
<Command.Item value="ho" keywords={['Homeowners']} onSelect={handleSelect}>
  Homeowners
</Command.Item>
\`\`\``}}}catch{}})))()}var z;function qe(){return(qe=t((()=>{Ke(),z={Root:He,Input:I,List:L,Empty:R,Group:Ue,Item:We}})))()}var B,V,Je,H,U,W,Ye,Xe,Ze,G,K,q,Qe,J,Y,X,$e,Z,et,tt,Q,$,nt;function rt(){return(rt=t((()=>{qe(),f(),ie(),B=r(),{expect:V,fn:Je,userEvent:H,waitFor:U,within:W}=__STORYBOOK_MODULE_TEST__,Ye={title:`Components/Command`,component:z.Root,tags:[`autodocs`],parameters:{docs:{description:{component:"Command is a filterable list built on `cmdk`. Type to narrow the options,\nnavigate with the arrow keys, select with Enter. It carries its own panel\nchrome, so dropping it inside a `Popover.Content` yields a combobox.\n`useCommandState` reads the search text and results of the surrounding\n`Command.Root` from any component rendered inside it."}}}},Xe=[`Profile`,`Documentation`,`Projects`],Ze=`**:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:text-text-default-base-tertiary`,G={render:()=>(0,B.jsxs)(z.Root,{label:`Search commands`,children:[(0,B.jsx)(z.Input,{placeholder:`Type a command or search...`}),(0,B.jsx)(z.List,{children:Xe.map(e=>(0,B.jsx)(z.Item,{children:e},e))}),(0,B.jsx)(z.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{let t=W(e),n=t.getByRole(`combobox`,{name:/search commands/i});await V(n.closest(`[data-slot="command-search"]`)).toBeInTheDocument(),await V(t.getAllByRole(`option`)).toHaveLength(3),await H.type(n,`pro`),await U(()=>V(t.getAllByRole(`option`)).toHaveLength(2)),await V(t.getByText(`Profile`)).toBeInTheDocument(),await V(t.queryByText(`Documentation`)).not.toBeInTheDocument()}},K={render:()=>(0,B.jsxs)(z.Root,{label:`Search commands`,children:[(0,B.jsx)(z.Input,{placeholder:`Search...`}),(0,B.jsx)(z.List,{children:Xe.map(e=>(0,B.jsx)(z.Item,{children:e},e))}),(0,B.jsx)(z.Empty,{children:`No results found for your search.`})]}),play:async({canvasElement:e})=>{let t=W(e),n=t.getByRole(`combobox`,{name:/search commands/i});await V(t.queryByText(/no results found/i)).not.toBeInTheDocument(),await H.type(n,`zzzzz`),await V(await t.findByText(/no results found/i)).toBeInTheDocument(),await V(t.queryAllByRole(`option`)).toHaveLength(0);let r=t.getByRole(`listbox`);await V(r.getBoundingClientRect().height).toBe(0)}},q={render:()=>(0,B.jsxs)(z.Root,{label:`Search commands`,children:[(0,B.jsx)(z.Input,{placeholder:`Search...`}),(0,B.jsxs)(z.List,{children:[(0,B.jsxs)(z.Group,{heading:`Account`,className:Ze,children:[(0,B.jsx)(z.Item,{children:`Profile`}),(0,B.jsx)(z.Item,{children:`Billing`})]}),(0,B.jsxs)(z.Group,{heading:`Workspace`,className:Ze,children:[(0,B.jsx)(z.Item,{children:`Projects`}),(0,B.jsx)(z.Item,{children:`Members`})]})]}),(0,B.jsx)(z.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{let t=W(e);await V(t.getByText(`Account`)).toBeVisible(),await V(t.getByText(`Workspace`)).toBeInTheDocument(),await H.type(t.getByRole(`combobox`,{name:/search commands/i}),`proj`),await U(()=>V(t.getByText(`Account`)).not.toBeVisible()),await V(t.getByText(`Workspace`)).toBeVisible()}},Qe=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`),J={render:()=>(0,B.jsxs)(z.Root,{label:`Search states`,children:[(0,B.jsx)(z.Input,{placeholder:`Search states...`}),(0,B.jsx)(z.List,{children:Qe.map(e=>(0,B.jsx)(z.Item,{children:e},e))}),(0,B.jsx)(z.Empty,{children:`No states found.`})]}),play:async({canvasElement:e})=>{let t=W(e),n=t.getByRole(`listbox`);await V(t.getAllByRole(`option`)).toHaveLength(50),await V(n.scrollHeight).toBeGreaterThan(n.clientHeight),await V(n.scrollTop).toBe(0),await H.click(t.getByRole(`combobox`,{name:/search states/i})),await H.keyboard(`{End}`);let r=t.getByRole(`option`,{name:`Wyoming`});await U(()=>V(r).toHaveAttribute(`data-selected`,`true`)),await U(()=>V(n.scrollTop).toBeGreaterThan(0));let i=n.getBoundingClientRect(),a=r.getBoundingClientRect();await V(a.top).toBeGreaterThanOrEqual(i.top),await V(a.bottom).toBeLessThanOrEqual(i.bottom)}},Y=Je(),X={args:{label:`Search commands`},render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Input,{placeholder:`Search...`}),(0,B.jsxs)(z.List,{children:[(0,B.jsx)(z.Item,{value:`home`,keywords:[`Homeowners`],onSelect:Y,children:`Homeowners`}),(0,B.jsx)(z.Item,{value:`auto`,keywords:[`Auto`],onSelect:Y,children:`Auto`})]}),(0,B.jsx)(z.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{Y.mockClear();let t=W(e),n=t.getAllByRole(`option`);await V(n[0]).toHaveAttribute(`data-selected`,`true`),await V(n[1]).toHaveAttribute(`data-selected`,`false`),await H.click(t.getByRole(`combobox`,{name:/search commands/i})),await H.keyboard(`{ArrowDown}`),await U(()=>V(n[1]).toHaveAttribute(`data-selected`,`true`)),await V(n[0]).toHaveAttribute(`data-selected`,`false`),await H.keyboard(`{Enter}`),await V(Y).toHaveBeenCalledTimes(1),await V(Y).toHaveBeenCalledWith(`auto`)}},$e=Je(),Z={args:{label:`Search agencies`},render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Input,{placeholder:`Search...`}),(0,B.jsxs)(z.List,{children:[(0,B.jsx)(z.Item,{value:`pinnacle`,onSelect:$e,children:`Pinnacle Shield Insurance`}),(0,B.jsx)(z.Item,{value:`horizon`,disabled:!0,onSelect:$e,children:`Horizon Risk Solutions`})]}),(0,B.jsx)(z.Empty,{children:`No results found.`})]}),play:async({canvasElement:e})=>{$e.mockClear();let t=W(e).getByRole(`option`,{name:`Horizon Risk Solutions`});await V(t).toHaveAttribute(`data-disabled`,`true`),await V(t).toHaveAttribute(`aria-disabled`,`true`),await H.click(t),await V($e).not.toHaveBeenCalled()}},et=Je(),tt=()=>{let e=Ge(e=>e.search),t=Ge(e=>e.filtered.count);return!e||t>0?null:(0,B.jsxs)(z.Item,{value:`create-${e}`,forceMount:!0,onSelect:()=>et(e),children:[`Create agency "`,e,`"`]})},Q={args:{label:`Search agencies`},render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Input,{placeholder:`Search agencies...`}),(0,B.jsxs)(z.List,{children:[(0,B.jsx)(z.Item,{children:`Pinnacle Shield Insurance`}),(0,B.jsx)(z.Item,{children:`Horizon Risk Solutions`}),(0,B.jsx)(tt,{})]})]}),play:async({canvasElement:e})=>{et.mockClear();let t=W(e),n=t.getByRole(`combobox`,{name:/search agencies/i});await V(t.queryByText(/create agency/i)).not.toBeInTheDocument(),await H.type(n,`Summit`);let r=await t.findByRole(`option`,{name:`Create agency "Summit"`});await H.click(r),await V(et).toHaveBeenCalledWith(`Summit`)}},$={render:()=>(0,B.jsxs)(ae.Root,{children:[(0,B.jsx)(ae.Trigger,{asChild:!0,children:(0,B.jsx)(p,{variant:`secondary`,children:`Open commands`})}),(0,B.jsx)(ae.Content,{"aria-label":`Commands`,children:(0,B.jsxs)(z.Root,{label:`Search commands`,children:[(0,B.jsx)(z.Input,{placeholder:`Search...`}),(0,B.jsx)(z.List,{children:Xe.map(e=>(0,B.jsx)(z.Item,{children:e},e))})]})})]}),play:async({canvasElement:e})=>{let t=W(document.body),n=W(e).getByRole(`button`,{name:/open commands/i});await H.click(n);let r=await t.findByRole(`combobox`,{name:/search commands/i});await U(()=>V(r).toHaveFocus());let i=getComputedStyle(t.getByRole(`dialog`,{name:/commands/i}));await V(i.borderTopWidth).toBe(`0px`),await V(i.boxShadow).toMatch(/^rgba\(0, 0, 0, 0\) 0px 0px 0px 0px(, rgba\(0, 0, 0, 0\) 0px 0px 0px 0px)*$/),await V(i.paddingTop).toBe(`0px`),await H.keyboard(`{Escape}`),await U(()=>V(n).toHaveAttribute(`data-state`,`closed`))}},nt=[`Default`,`EmptyState`,`Grouped`,`ScrollingList`,`KeyboardNavigation`,`DisabledItem`,`ReadingState`,`InsidePopover`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Command.Root label="Search commands">
            <Command.Input placeholder="Type a command or search..." />
            <Command.List>
                {OPTIONS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
            </Command.List>
            <Command.Empty>No results found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: /search commands/i
    });
    await expect(input.closest('[data-slot="command-search"]')).toBeInTheDocument();
    await expect(canvas.getAllByRole('option')).toHaveLength(3);

    // "pro" fuzzy-matches Profile and Projects but not Documentation, which has no "p".
    await userEvent.type(input, 'pro');
    await waitFor(() => expect(canvas.getAllByRole('option')).toHaveLength(2));
    await expect(canvas.getByText('Profile')).toBeInTheDocument();
    await expect(canvas.queryByText('Documentation')).not.toBeInTheDocument();
  }
}`,...G.parameters?.docs?.source},description:{story:`Search field over a flat list. Typing filters the rows through cmdk's default scorer.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Command.Root label="Search commands">
            <Command.Input placeholder="Search..." />
            <Command.List>
                {OPTIONS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
            </Command.List>
            <Command.Empty>No results found for your search.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: /search commands/i
    });
    await expect(canvas.queryByText(/no results found/i)).not.toBeInTheDocument();
    await userEvent.type(input, 'zzzzz');
    await expect(await canvas.findByText(/no results found/i)).toBeInTheDocument();
    await expect(canvas.queryAllByRole('option')).toHaveLength(0);

    // The itemless listbox stays mounted; it must collapse instead of leaving its py-2 as a gap.
    const list = canvas.getByRole('listbox');
    await expect(list.getBoundingClientRect().height).toBe(0);
  }
}`,...K.parameters?.docs?.source},description:{story:"`Empty` renders only while nothing matches, so it can live permanently in the list.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Command.Root label="Search commands">
            <Command.Input placeholder="Search..." />
            <Command.List>
                <Command.Group heading="Account" className={GROUP_HEADING}>
                    <Command.Item>Profile</Command.Item>
                    <Command.Item>Billing</Command.Item>
                </Command.Group>
                <Command.Group heading="Workspace" className={GROUP_HEADING}>
                    <Command.Item>Projects</Command.Item>
                    <Command.Item>Members</Command.Item>
                </Command.Group>
            </Command.List>
            <Command.Empty>No results found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Account')).toBeVisible();
    await expect(canvas.getByText('Workspace')).toBeInTheDocument();

    // cmdk hides an unmatched group with \`hidden\`, leaving its children mounted.
    await userEvent.type(canvas.getByRole('combobox', {
      name: /search commands/i
    }), 'proj');
    await waitFor(() => expect(canvas.getByText('Account')).not.toBeVisible());
    await expect(canvas.getByText('Workspace')).toBeVisible();
  }
}`,...q.parameters?.docs?.source},description:{story:"`Group` sections related options. It ships unstyled, so the heading is styled\nper usage through the `[cmdk-group-heading]` hook.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Command.Root label="Search states">
            <Command.Input placeholder="Search states..." />
            <Command.List>
                {US_STATES.map(state => <Command.Item key={state}>{state}</Command.Item>)}
            </Command.List>
            <Command.Empty>No states found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('listbox');
    await expect(canvas.getAllByRole('option')).toHaveLength(50);
    await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight);
    await expect(list.scrollTop).toBe(0);
    await userEvent.click(canvas.getByRole('combobox', {
      name: /search states/i
    }));
    await userEvent.keyboard('{End}');
    const last = canvas.getByRole('option', {
      name: 'Wyoming'
    });
    await waitFor(() => expect(last).toHaveAttribute('data-selected', 'true'));
    await waitFor(() => expect(list.scrollTop).toBeGreaterThan(0));

    // The active row must sit fully inside the list viewport after the scroll.
    const listRect = list.getBoundingClientRect();
    const lastRect = last.getBoundingClientRect();
    await expect(lastRect.top).toBeGreaterThanOrEqual(listRect.top);
    await expect(lastRect.bottom).toBeLessThanOrEqual(listRect.bottom);
  }
}`,...J.parameters?.docs?.source},description:{story:`With more rows than the list cap fits, the list scrolls — by wheel, or by
keyboard: cmdk scrolls the active row into view as the arrow keys move it,
and \`scroll-py-2\` keeps that row off the container edges.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search commands'
  },
  render: args => <Command.Root {...args}>
            <Command.Input placeholder="Search..." />
            <Command.List>
                <Command.Item value="home" keywords={['Homeowners']} onSelect={handleSelect}>
                    Homeowners
                </Command.Item>
                <Command.Item value="auto" keywords={['Auto']} onSelect={handleSelect}>
                    Auto
                </Command.Item>
            </Command.List>
            <Command.Empty>No results found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    handleSelect.mockClear();
    const canvas = within(canvasElement);
    const options = canvas.getAllByRole('option');

    // cmdk activates the first row on mount.
    await expect(options[0]).toHaveAttribute('data-selected', 'true');
    await expect(options[1]).toHaveAttribute('data-selected', 'false');
    await userEvent.click(canvas.getByRole('combobox', {
      name: /search commands/i
    }));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(options[1]).toHaveAttribute('data-selected', 'true'));
    await expect(options[0]).toHaveAttribute('data-selected', 'false');
    await userEvent.keyboard('{Enter}');
    await expect(handleSelect).toHaveBeenCalledTimes(1);
    await expect(handleSelect).toHaveBeenCalledWith('auto');
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search agencies'
  },
  render: args => <Command.Root {...args}>
            <Command.Input placeholder="Search..." />
            <Command.List>
                <Command.Item value="pinnacle" onSelect={handleDisabledSelect}>
                    Pinnacle Shield Insurance
                </Command.Item>
                <Command.Item value="horizon" disabled onSelect={handleDisabledSelect}>
                    Horizon Risk Solutions
                </Command.Item>
            </Command.List>
            <Command.Empty>No results found.</Command.Empty>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    handleDisabledSelect.mockClear();
    const canvas = within(canvasElement);
    const disabledOption = canvas.getByRole('option', {
      name: 'Horizon Risk Solutions'
    });
    await expect(disabledOption).toHaveAttribute('data-disabled', 'true');
    await expect(disabledOption).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(disabledOption);
    await expect(handleDisabledSelect).not.toHaveBeenCalled();
  }
}`,...Z.parameters?.docs?.source},description:{story:`A \`disabled\` row stays visible and searchable but cannot be chosen. cmdk skips it with the
arrow keys and swallows the click, and the row drops its hover and active styling so the
list does not invite the pointer.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search agencies'
  },
  render: args => <Command.Root {...args}>
            <Command.Input placeholder="Search agencies..." />
            <Command.List>
                <Command.Item>Pinnacle Shield Insurance</Command.Item>
                <Command.Item>Horizon Risk Solutions</Command.Item>
                <CreateItem />
            </Command.List>
        </Command.Root>,
  play: async ({
    canvasElement
  }) => {
    handleCreate.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: /search agencies/i
    });
    await expect(canvas.queryByText(/create agency/i)).not.toBeInTheDocument();
    await userEvent.type(input, 'Summit');
    const create = await canvas.findByRole('option', {
      name: 'Create agency "Summit"'
    });
    await userEvent.click(create);
    await expect(handleCreate).toHaveBeenCalledWith('Summit');
  }
}`,...Q.parameters?.docs?.source},description:{story:"`useCommandState` reads the surrounding `Root` from a component inside it. Here the row\noffering to create an agency appears only when the search text matches no existing one.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Open commands</Button>
            </Popover.Trigger>
            <Popover.Content aria-label="Commands">
                <Command.Root label="Search commands">
                    <Command.Input placeholder="Search..." />
                    <Command.List>
                        {OPTIONS.map(option => <Command.Item key={option}>{option}</Command.Item>)}
                    </Command.List>
                </Command.Root>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const body = within(document.body);
    const trigger = within(canvasElement).getByRole('button', {
      name: /open commands/i
    });
    await userEvent.click(trigger);
    const input = await body.findByRole('combobox', {
      name: /search commands/i
    });
    await waitFor(() => expect(input).toHaveFocus());
    const popover = getComputedStyle(body.getByRole('dialog', {
      name: /commands/i
    }));
    await expect(popover.borderTopWidth).toBe('0px');
    // Tailwind composes box-shadow from several layers; \`shadow-none\` leaves each one transparent.
    await expect(popover.boxShadow).toMatch(/^rgba\\(0, 0, 0, 0\\) 0px 0px 0px 0px(, rgba\\(0, 0, 0, 0\\) 0px 0px 0px 0px)*$/);
    await expect(popover.paddingTop).toBe('0px');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveAttribute('data-state', 'closed'));
  }
}`,...$.parameters?.docs?.source},description:{story:"Inside a `Popover`. The popover hands its border, shadow and padding to the `Command`, so the\npicker draws a single panel. cmdk's list is always on screen, so Escape closes the popover.",...$.parameters?.docs?.description}}}})))()}rt();export{G as Default,Z as DisabledItem,K as EmptyState,q as Grouped,$ as InsidePopover,X as KeyboardNavigation,Q as ReadingState,J as ScrollingList,nt as __namedExportsOrder,Ye as default};