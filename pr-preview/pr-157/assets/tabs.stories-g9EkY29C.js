import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DVW2NO6r.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,n as a,r as o,t as s}from"./dist-80pxu5Ba.js";import{n as c,t as l}from"./dist-Dmzh6F3q.js";import{n as u,t as d}from"./dist-N5oeWw-g.js";import{n as f,t as p}from"./dist-C8AlzbfS.js";import{n as m,t as h}from"./utils-nsk-j2e0.js";import{i as g,n as ee}from"./merge-props-DHVotzRA.js";import{i as _,n as te,r as v,t as ne}from"./dist-5Jn9P3jG.js";import{n as y,t as re}from"./dist-B0GjN3vo.js";import{r as b,t as x}from"./dist-Cdp5No-N.js";function ie(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function ae(...e){return t=>{let n=!1,r=e.map(e=>{let r=ie(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():ie(e[t],null)}}}}function oe(...e){return se.useCallback(ae(...e),e)}var se;function ce(){return(ce=t((()=>{se=e(n(),1)})))()}function le(e){let t=S.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];pe(r)&&typeof C==`function`&&(r=C(r._payload)),S.Children.forEach(r,e=>{if(fe(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;pe(n)&&typeof C==`function`&&(n=C(n._payload)),a=ge(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=S.cloneElement(a,void 0,s):!o&&S.Children.count(r)===1&&S.isValidElement(r)&&(a=r);let c=a?de(a):void 0,l=oe(n,c);if(!a){if(r||r===0)throw Error(o?ye(e):ve(e));return r}let u=ue(i,a.props??{});return a.type!==S.Fragment&&(u.ref=n?l:c),S.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function ue(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function de(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function fe(e){return S.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===he}function pe(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===_e&&`_payload`in e&&me(e._payload)}function me(e){return typeof e==`object`&&!!e&&`then`in e}var S,he,ge,_e,ve,ye,C;function be(){return(be=t((()=>{S=e(n(),1),ce(),he=Symbol.for(`radix.slottable`),ge=(e,t)=>{if(`child`in e.props){let t=e.props.child;return S.isValidElement(t)?S.cloneElement(t,void 0,e.props.children(t.props.children)):null}return S.isValidElement(t)?t:null},_e=Symbol.for(`react.lazy`),ve=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,ye=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,C=S.use})))()}function xe(e){let t=e+`CollectionProvider`,[n,r]=re(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=e=>{let{scope:t,children:n}=e,r=w.useRef(null),a=w.useRef(new Map).current;return(0,Se.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})};o.displayName=t;let s=e+`CollectionSlot`,c=le(s),l=w.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=oe(t,a(s,n).collectionRef);return(0,Se.jsx)(c,{ref:i,children:r})});l.displayName=s;let u=e+`CollectionItemSlot`,d=`data-radix-collection-item`,f=le(u),p=w.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=w.useRef(null),s=oe(t,o),c=a(u,n);return w.useEffect(()=>(c.itemMap.set(o,{ref:o,...i}),()=>void c.itemMap.delete(o))),(0,Se.jsx)(f,{[d]:``,ref:s,children:r})});p.displayName=u;function m(t){let n=a(e+`CollectionConsumer`,t);return w.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return[{Provider:o,Slot:l,ItemSlot:p},m,r]}var w,Se;function Ce(){return(Ce=t((()=>{w=e(n(),1),y(),ce(),be(),Se=r(),n(),r()})))()}function we(e){let t=Te.useRef(e);return Te.useEffect(()=>{t.current=e}),Te.useMemo(()=>((...e)=>t.current?.(...e)),[])}var Te;function Ee(){return(Ee=t((()=>{Te=e(n(),1)})))()}function De(){let[e,t]=je.useState(Me);return je.useEffect(()=>{Me||(Me=!0,t(!0))},[]),e}function Oe(){return()=>{}}function ke(){return Ne(Oe,()=>!0,()=>!1)}var Ae,je,Me,Ne,Pe;function Fe(){return(Fe=t((()=>{Ae=e(n(),1),je=e(n(),1),Me=!1,Ne=Ae.useSyncExternalStore,Pe=typeof Ne==`function`?ke:De})))()}function Ie(e,t){return t===`rtl`?e===`ArrowLeft`?`ArrowRight`:e===`ArrowRight`?`ArrowLeft`:e:e}function Le(e,t,n){let r=Ie(e.key,n);if(!(t===`vertical`&&[`ArrowLeft`,`ArrowRight`].includes(r))&&!(t===`horizontal`&&[`ArrowUp`,`ArrowDown`].includes(r)))return $e[r]}function Re(e,t=!1){let n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function ze(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var T,E,Be,Ve,D,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt;function nt(){return(nt=t((()=>{T=e(n(),1),_(),Ce(),ce(),y(),l(),b(),Ee(),s(),d(),o(),Fe(),E=r(),Be=`rovingFocusGroup.onEntryFocus`,Ve={bubbles:!1,cancelable:!0},D=`RovingFocusGroup`,[He,Ue,We]=xe(D),[Ge,Ke]=re(D,[We]),[qe,Je]=Ge(D),Ye=T.forwardRef((e,t)=>(0,E.jsx)(He.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,E.jsx)(He.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,E.jsx)(Xe,{...e,ref:t})})})),Ye.displayName=D,Xe=T.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:o,currentTabStopId:s,defaultCurrentTabStopId:c,onCurrentTabStopIdChange:l,onEntryFocus:d,preventScrollOnEntryFocus:f=!1,...p}=e,m=T.useRef(null),h=oe(t,m),g=u(o),[ee,_]=a({prop:s,defaultProp:c??null,onChange:l,caller:D}),[te,ne]=T.useState(!1),y=we(d),re=Ue(n),b=T.useRef(!1),[ie,ae]=T.useState(0);return T.useEffect(()=>{let e=m.current;if(e)return e.addEventListener(Be,y),()=>e.removeEventListener(Be,y)},[y]),(0,E.jsx)(qe,{scope:n,orientation:r,dir:g,loop:i,currentTabStopId:ee,onItemFocus:T.useCallback(e=>_(e),[_]),onItemShiftTab:T.useCallback(()=>ne(!0),[]),onFocusableItemAdd:T.useCallback(()=>ae(e=>e+1),[]),onFocusableItemRemove:T.useCallback(()=>ae(e=>e-1),[]),children:(0,E.jsx)(x.div,{tabIndex:te||ie===0?-1:0,"data-orientation":r,...p,ref:h,style:{outline:`none`,...e.style},onMouseDown:v(e.onMouseDown,()=>{b.current=!0}),onFocus:v(e.onFocus,e=>{let t=!b.current;if(e.target===e.currentTarget&&t&&!te){let t=new CustomEvent(Be,Ve);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=re().filter(e=>e.focusable);Re([e.find(e=>e.active),e.find(e=>e.id===ee),...e].filter(Boolean).map(e=>e.ref.current),f)}}b.current=!1}),onBlur:v(e.onBlur,()=>ne(!1))})})}),Ze=`RovingFocusGroupItem`,Qe=T.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:o,children:s,...l}=e,u=c(),d=o||u,f=Je(Ze,n),p=f.currentTabStopId===d,m=Ue(n),{onFocusableItemAdd:h,onFocusableItemRemove:g,currentTabStopId:ee}=f,_=Pe();return i(()=>{if(_&&r)return h(),()=>g()},[_,r,h,g]),T.useEffect(()=>{if(!_&&r)return h(),()=>g()},[_,r,h,g]),(0,E.jsx)(He.ItemSlot,{scope:n,id:d,focusable:r,active:a,children:(0,E.jsx)(x.span,{tabIndex:p?0:-1,"data-orientation":f.orientation,...l,ref:t,onMouseDown:v(e.onMouseDown,e=>{r?f.onItemFocus(d):e.preventDefault()}),onFocus:v(e.onFocus,()=>f.onItemFocus(d)),onKeyDown:v(e.onKeyDown,e=>{if(e.key===`Tab`&&e.shiftKey){f.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=Le(e,f.orientation,f.dir);if(t!==void 0){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=m().filter(e=>e.focusable).map(e=>e.ref.current);if(t===`last`)n.reverse();else if(t===`prev`||t===`next`){t===`prev`&&n.reverse();let r=n.indexOf(e.currentTarget);n=f.loop?ze(n,r+1):n.slice(r+1)}setTimeout(()=>Re(n))}}),children:typeof s==`function`?s({isCurrentTabStop:p,hasTabStop:ee!=null}):s})})}),Qe.displayName=Ze,$e={ArrowLeft:`prev`,ArrowUp:`prev`,ArrowRight:`next`,ArrowDown:`next`,PageUp:`first`,Home:`first`,PageDown:`last`,End:`last`},et=Ye,tt=Qe})))()}function rt(e,t){return`${e}-trigger-${t}`}function it(e,t){return`${e}-content-${t}`}var O,k,A,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt;function xt(){return(xt=t((()=>{O=e(n(),1),_(),y(),nt(),te(),b(),d(),s(),l(),k=r(),A=`Tabs`,[at,ot]=re(A,[Ke]),st=Ke(),[ct,lt]=at(A),ut=O.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:i,defaultValue:o,orientation:s=`horizontal`,dir:l,activationMode:d=`automatic`,...f}=e,p=u(l),[m,h]=a({prop:r,onChange:i,defaultProp:o??``,caller:A});return(0,k.jsx)(ct,{scope:n,baseId:c(),value:m,onValueChange:h,orientation:s,dir:p,activationMode:d,children:(0,k.jsx)(x.div,{dir:p,"data-orientation":s,...f,ref:t})})}),ut.displayName=A,dt=`TabsList`,ft=O.forwardRef((e,t)=>{let{__scopeTabs:n,loop:r=!0,...i}=e,a=lt(dt,n),o=st(n);return(0,k.jsx)(et,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:(0,k.jsx)(x.div,{role:`tablist`,"aria-orientation":a.orientation,...i,ref:t})})}),ft.displayName=dt,pt=`TabsTrigger`,mt=O.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,disabled:i=!1,...a}=e,o=lt(pt,n),s=st(n),c=rt(o.baseId,r),l=it(o.baseId,r),u=r===o.value;return(0,k.jsx)(tt,{asChild:!0,...s,focusable:!i,active:u,children:(0,k.jsx)(x.button,{type:`button`,role:`tab`,"aria-selected":u,"aria-controls":l,"data-state":u?`active`:`inactive`,"data-disabled":i?``:void 0,disabled:i,id:c,...a,ref:t,onMouseDown:v(e.onMouseDown,e=>{!i&&e.button===0&&e.ctrlKey===!1?o.onValueChange(r):e.preventDefault()}),onKeyDown:v(e.onKeyDown,e=>{i||e.target!==e.currentTarget||[` `,`Enter`].includes(e.key)&&o.onValueChange(r)}),onFocus:v(e.onFocus,()=>{let e=o.activationMode!==`manual`;!u&&!i&&e&&o.onValueChange(r)})})})}),mt.displayName=pt,ht=`TabsContent`,gt=O.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,forceMount:i,children:a,...o}=e,s=lt(ht,n),c=rt(s.baseId,r),l=it(s.baseId,r),u=r===s.value,d=O.useRef(u);return O.useEffect(()=>{let e=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,k.jsx)(ne,{present:i||u,children:({present:n})=>(0,k.jsx)(x.div,{"data-state":u?`active`:`inactive`,"data-orientation":s.orientation,role:`tabpanel`,"aria-labelledby":c,hidden:!n,id:l,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:d.current?`0s`:void 0},children:n&&a})})}),gt.displayName=ht,_t=ut,vt=ft,yt=mt,bt=gt})))()}var j,M,N,St,Ct,P,wt,Tt,F,I,L,R;function Et(){return(Et=t((()=>{j=n(),xt(),p(),m(),ee(),M=r(),N=f({slots:{root:`flex flex-col`,list:`group/tabs-list relative z-1 flex shrink-0 overflow-x-auto overflow-y-hidden`,indicator:[`pointer-events-none absolute left-0 opacity-0 group-data-[indicator=ready]/tabs-list:opacity-100`,`data-animated:transition-transform data-animated:duration-200 data-animated:ease-(--ease-out-quint)`,`motion-reduce:transition-none`],trigger:[`relative cursor-pointer text-sm font-semibold text-text-default-base-secondary no-underline transition-colors duration-150`,`hover:text-text-default-base-primary`,`focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary`,`data-disabled:cursor-not-allowed data-disabled:opacity-50`,`data-[state=active]:text-text-default-base-primary`],content:``},variants:{variant:{line:{list:`w-full gap-6 border-b border-border-default-base-primary bg-bg-default-base-primary px-4`,trigger:[`grid h-10 content-center text-text-default-base-tertiary`,`before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-text-button-secondary-enable before:opacity-0 before:transition-opacity before:duration-150 before:content-['']`,`data-[state=active]:before:opacity-100 group-data-[indicator=ready]/tabs-list:before:hidden`],indicator:`bottom-0 h-0.5 w-px origin-left bg-text-button-secondary-enable`},enclosed:{list:`inline-grid max-w-full auto-cols-fr grid-flow-col rounded-md bg-bg-default-base-tertiary p-1`,trigger:[`flex items-center justify-center rounded-sm px-3 py-1 text-center data-[state=active]:bg-bg-default-base-primary`,`group-data-[indicator=ready]/tabs-list:data-[state=active]:bg-transparent`],indicator:`inset-y-1 rounded-sm bg-bg-default-base-primary`},button:{list:`gap-2`,trigger:[`flex h-8 items-center gap-2.5 rounded-md px-3 text-sm font-normal text-text-default-base-secondary`,`[&>svg]:-mx-1 [&>svg]:size-4 [&>svg]:fill-icon-default-base-secondary`,`hover:bg-bg-default-base-primary-hover data-[state=active]:bg-bg-default-base-primary-hover`],indicator:`hidden`}},position:{center:{list:`justify-center self-center`},start:{list:`self-start`},end:{list:`justify-end self-end`},full:{list:`w-full self-stretch`}}},compoundVariants:[{variant:`button`,position:`start`,class:{list:`-ml-2.25`}}],defaultVariants:{variant:`line`,position:`start`}}),St=(0,j.createContext)(null),Ct=()=>{let e=(0,j.use)(St);if(!e)throw Error(`Tabs.List, Tabs.Trigger and Tabs.Content must be used within Tabs.Root`);return e},P=({className:e,variant:t,position:n,...r})=>{let i=N({variant:t,position:n});return(0,M.jsx)(St,{value:{styles:i,variant:t??`line`},children:(0,M.jsx)(_t,{"data-slot":`tabs-root`,className:h(i.root(),e),...r})})},P.displayName=`Tabs.Root`,wt=`:scope > [role="tab"]`,Tt=e=>{let t=(0,j.useRef)(null),n=(0,j.useRef)(null);return(0,j.useLayoutEffect)(()=>{let r=t.current,i=n.current;if(!r||!i||e===`button`)return;let a=e===`line`;i.style.width=``;let o=()=>{let e=r.querySelector(`${wt}[data-state="active"]`);if(!e){delete r.dataset.indicator;return}i.style.transform=a?`translateX(${e.offsetLeft}px) scaleX(${e.offsetWidth})`:`translateX(${e.offsetLeft}px)`,a||(i.style.width=`${e.offsetWidth}px`),r.dataset.indicator=`ready`},s=new ResizeObserver(o),c=()=>{s.disconnect(),s.observe(r),r.querySelectorAll(wt).forEach(e=>s.observe(e))},l=new MutationObserver(e=>{e.some(e=>e.type===`childList`)&&c(),o()});o(),c(),l.observe(r,{childList:!0,subtree:!0,attributeFilter:[`data-state`]});let u=requestAnimationFrame(()=>{i.dataset.animated=``});return()=>{cancelAnimationFrame(u),s.disconnect(),l.disconnect(),delete i.dataset.animated,delete r.dataset.indicator}},[e]),{listRef:t,indicatorRef:n}},F=({className:e,children:t,ref:n,...r})=>{let{styles:i,variant:a}=Ct(),{listRef:o,indicatorRef:s}=Tt(a);return(0,M.jsxs)(vt,{ref:g(o,n),"data-slot":`tabs-list`,className:h(i.list(),e),...r,children:[(0,M.jsx)(`span`,{ref:s,"data-slot":`tabs-indicator`,"aria-hidden":!0,className:i.indicator()}),t]})},F.displayName=`Tabs.List`,I=({className:e,...t})=>{let{styles:n}=Ct();return(0,M.jsx)(yt,{"data-slot":`tabs-trigger`,className:h(n.trigger(),e),...t})},I.displayName=`Tabs.Trigger`,L=({className:e,...t})=>{let{styles:n}=Ct();return(0,M.jsx)(bt,{"data-slot":`tabs-content`,className:h(n.content(),e),...t})},L.displayName=`Tabs.Content`,R=({className:e,variant:t,...n})=>{let r=(0,j.use)(St)?.styles??N({variant:t});return(0,M.jsx)(`span`,{"data-slot":`tabs-label`,className:h(r.trigger(),`pointer-events-none`,e),...n})},R.displayName=`Tabs.Label`;try{N.displayName=`tabsRecipe`,N.__docgenInfo={description:``,displayName:`tabsRecipe`,filePath:`/home/runner/work/design-system/design-system/src/tabs/tabs.tsx`,methods:[],props:{variant:{defaultValue:null,description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"button" | "line" | "enclosed"`,value:[{value:`"button"`},{value:`"line"`},{value:`"enclosed"`}]}},position:{defaultValue:null,description:``,name:`position`,required:!1,tags:{},type:{name:`enum`,raw:`"center" | "start" | "end" | "full"`,value:[{value:`"center"`},{value:`"start"`},{value:`"end"`},{value:`"full"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{P.displayName=`Tabs.Root`,P.__docgenInfo={description:"Root of a set of tabs, built on Radix UI's Tabs so keyboard nav, roving focus\nand ARIA come for free. Owns the selected tab (controlled via `value`/\n`onValueChange` or uncontrolled via `defaultValue`) and wraps `List` and\n`Content`s. `variant` picks the look — `line` (default) underlines the active\ntab, `enclosed` renders segmented pills, `button` renders button-like tabs.",displayName:`Tabs.Root`,filePath:`/home/runner/work/design-system/design-system/src/tabs/tabs.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},variant:{defaultValue:null,description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"button" | "line" | "enclosed"`,value:[{value:`"button"`},{value:`"line"`},{value:`"enclosed"`}]}},position:{defaultValue:null,description:``,name:`position`,required:!1,tags:{},type:{name:`enum`,raw:`"center" | "start" | "end" | "full"`,value:[{value:`"center"`},{value:`"start"`},{value:`"end"`},{value:`"full"`}]}}},tags:{summary:`Root provider for a Tabs group`,example:`\`\`\`tsx
import { Tabs } from '@agentero/design-system/tabs';

<Tabs.Root defaultValue="overview">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">…</Tabs.Content>
  <Tabs.Content value="activity">…</Tabs.Content>
</Tabs.Root>
\`\`\``}}}catch{}try{F.displayName=`Tabs.List`,F.__docgenInfo={description:"The row of `Trigger`s. For `line` and `enclosed` it draws one indicator — the underline or the pill — and slides it\nto the active trigger on every change, so switching tabs reads as one mark moving. The slide takes 200ms on a strong\nease-out, animates `transform` only and stops under `prefers-reduced-motion`. Until the list has measured its\ntriggers (server render, before hydration) each trigger draws its own static mark. `button` tabs keep their own fill\nand nothing slides. Every native attribute is forwarded to the underlying element, and `ref` is merged with the\nlist's own.",displayName:`Tabs.List`,filePath:`/home/runner/work/design-system/design-system/src/tabs/tabs.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Row of tab triggers with a sliding active indicator`,dataAttribute:`{string} data-slot - "tabs-list" on the list, "tabs-indicator" on the indicator
{string} data-indicator - "ready" once the indicator is placed and the triggers' own marks are hidden`}}}catch{}try{I.displayName=`Tabs.Trigger`,I.__docgenInfo={description:``,displayName:`Tabs.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/tabs/tabs.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{L.displayName=`Tabs.Content`,L.__docgenInfo={description:``,displayName:`Tabs.Content`,filePath:`/home/runner/work/design-system/design-system/src/tabs/tabs.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{R.displayName=`Tabs.Label`,R.__docgenInfo={description:"Non-interactive heading with the exact look of an inactive `Trigger`: it\nrenders the trigger styles without the active data-state, and\n`pointer-events-none` keeps the hover styles from firing. Use it when a\npanel keeps the tab row's visual language but has a single, non-selectable\ntitle — a lone tab would announce a selectable control that isn't one.\nInside a `Root` it picks up the group's variant; standalone, pass `variant`.\nIt renders a plain `span` — wrap it in a heading element when the title\nneeds heading semantics.",displayName:`Tabs.Label`,filePath:`/home/runner/work/design-system/design-system/src/tabs/tabs.tsx`,methods:[],props:{variant:{defaultValue:null,declarations:[{fileName:`design-system/src/tabs/tabs.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"button" | "line" | "enclosed"`,value:[{value:`"button"`},{value:`"line"`},{value:`"enclosed"`}]}}},tags:{summary:`Text styled as an inactive tab trigger`,example:"```tsx\n<h2>\n  <Tabs.Label>Shared coverages</Tabs.Label>\n</h2>\n```"}}}catch{}})))()}var z;function Dt(){return(Dt=t((()=>{Et(),z={Root:P,List:F,Trigger:I,Content:L,Label:R}})))()}var B,V,Ot,kt,H,At,jt,U,W,G,K,q,J,Y,X,Z,Mt,Nt,Q,$,Pt;function Ft(){return(Ft=t((()=>{Dt(),B=r(),{expect:V,userEvent:Ot,waitFor:kt,within:H}=__STORYBOOK_MODULE_TEST__,At={title:`Components/Tabs`,component:z.Root,tags:[`autodocs`],parameters:{docs:{description:{component:"Tabs is a compound built on Radix UI: `Root` owns the selected tab, `List`\nholds the `Trigger`s, and one `Content` renders per tab. `variant` picks the\nlook — `line` (default) underlines the active tab, `enclosed` renders\nsegmented pills, `button` renders button-like tabs.\n\n`Label` is text styled as an inactive trigger, for a single title sitting in\nthe same row as the tabs."}}}},jt=[{value:`overview`,label:`Overview`,body:`A summary of the policy and its coverage.`},{value:`documents`,label:`Documents`,body:`Declarations, endorsements and forms.`},{value:`activity`,label:`Activity`,body:`A timeline of recent changes and events.`}],U=()=>jt.map(({value:e,label:t})=>(0,B.jsx)(z.Trigger,{value:e,children:t},e)),W=()=>jt.map(({value:e,body:t})=>(0,B.jsx)(z.Content,{value:e,className:`p-4 text-sm text-text-default-base-primary`,children:t},e)),G={args:{variant:`line`,defaultValue:`overview`},argTypes:{variant:{control:`radio`,options:[`line`,`enclosed`,`button`],description:`line = underline; enclosed = segmented pills; button = button-like tabs`}},render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.List,{children:(0,B.jsx)(U,{})}),(0,B.jsx)(W,{})]})},K={render:()=>(0,B.jsxs)(z.Root,{variant:`enclosed`,defaultValue:`overview`,children:[(0,B.jsx)(z.List,{children:(0,B.jsx)(U,{})}),(0,B.jsx)(W,{})]})},q={render:()=>(0,B.jsxs)(z.Root,{variant:`button`,defaultValue:`overview`,children:[(0,B.jsx)(z.List,{children:(0,B.jsx)(U,{})}),(0,B.jsx)(W,{})]})},J={render:()=>(0,B.jsx)(`div`,{className:`flex flex-col gap-8`,children:[`start`,`center`,`end`].map(e=>(0,B.jsxs)(z.Root,{variant:`enclosed`,position:e,defaultValue:`overview`,children:[(0,B.jsx)(z.List,{children:(0,B.jsx)(U,{})}),(0,B.jsx)(W,{})]},e))})},Y={render:()=>(0,B.jsxs)(z.Root,{variant:`enclosed`,position:`full`,defaultValue:`overview`,children:[(0,B.jsx)(z.List,{children:(0,B.jsx)(U,{})}),(0,B.jsx)(W,{})]})},X={render:()=>(0,B.jsxs)(z.Root,{variant:`line`,defaultValue:`overview`,children:[(0,B.jsx)(z.List,{children:jt.map(({value:e,label:t})=>(0,B.jsx)(z.Trigger,{value:e,asChild:!0,children:(0,B.jsx)(`a`,{href:`#${e}`,children:t})},e))}),(0,B.jsx)(W,{})]}),play:async({canvasElement:e})=>{let t=H(e).getByRole(`tab`,{name:/overview/i});await V(t.tagName).toBe(`A`),await V(getComputedStyle(t).textDecorationLine).toBe(`none`)}},Z={args:{variant:`line`,defaultValue:`overview`},render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.List,{children:(0,B.jsx)(U,{})}),(0,B.jsx)(W,{})]}),play:async({canvasElement:e})=>{let t=H(e),n=t.getByRole(`tab`,{name:/overview/i}),r=t.getByRole(`tab`,{name:/documents/i});await V(n).toHaveAttribute(`data-state`,`active`),await V(await t.findByText(/summary of the policy/i)).toBeVisible(),await Ot.click(r),await V(r).toHaveAttribute(`data-state`,`active`),await V(n).toHaveAttribute(`data-state`,`inactive`),await V(await t.findByText(/declarations, endorsements/i)).toBeVisible()}},Mt=e=>{let t=e.querySelector(`[data-slot="tabs-indicator"]`);if(!t)throw Error(`No tabs indicator rendered`);return t},Nt=e=>new DOMMatrix(e.style.transform).m41,Q={args:{defaultValue:`overview`},render:e=>(0,B.jsx)(`div`,{className:`flex flex-col gap-8`,children:[`line`,`enclosed`].map(t=>(0,B.jsxs)(z.Root,{...e,variant:t,children:[(0,B.jsx)(z.List,{"aria-label":`${t} tabs`,children:(0,B.jsx)(U,{})}),(0,B.jsx)(W,{})]},t))}),play:async({canvasElement:e})=>{let t=H(e),n=t.getByRole(`tablist`,{name:/line tabs/i}),r=t.getByRole(`tablist`,{name:/enclosed tabs/i});for(let e of[n,r]){let t=Mt(e),n=H(e).getByRole(`tab`,{name:/overview/i}),r=H(e).getByRole(`tab`,{name:/activity/i});await kt(()=>V(e).toHaveAttribute(`data-indicator`,`ready`)),await V(Nt(t)).toBe(n.offsetLeft),await kt(()=>V(t).toHaveAttribute(`data-animated`)),await Ot.click(r),await kt(()=>V(Nt(t)).toBe(r.offsetLeft))}let i=Mt(r),a=H(r).getByRole(`tab`,{name:/activity/i});await V(i.style.width).toBe(`${a.offsetWidth}px`);let o=Mt(n),s=H(n).getByRole(`tab`,{name:/activity/i});await V(new DOMMatrix(o.style.transform).a).toBe(s.offsetWidth)}},$={render:()=>(0,B.jsx)(`div`,{className:`flex flex-col items-start gap-6`,children:[`line`,`enclosed`,`button`].map(e=>(0,B.jsx)(`h2`,{children:(0,B.jsxs)(z.Label,{variant:e,children:[`Shared coverages (`,e,`)`]})},e))}),play:async({canvasElement:e})=>{let t=H(e);await V(t.getAllByRole(`heading`)).toHaveLength(3),await V(t.queryByRole(`tablist`)).not.toBeInTheDocument(),await V(t.queryByRole(`tab`)).not.toBeInTheDocument()}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    defaultValue: 'overview'
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['line', 'enclosed', 'button'],
      description: 'line = underline; enclosed = segmented pills; button = button-like tabs'
    }
  },
  render: args => <Tabs.Root {...args}>
            <Tabs.List>
                <TabItems />
            </Tabs.List>
            <TabPanels />
        </Tabs.Root>
}`,...G.parameters?.docs?.source},description:{story:"`line` (default): the active tab is marked with an animated underline.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root variant="enclosed" defaultValue="overview">
            <Tabs.List>
                <TabItems />
            </Tabs.List>
            <TabPanels />
        </Tabs.Root>
}`,...K.parameters?.docs?.source},description:{story:"`enclosed` renders segmented pills; the active tab sits on a raised surface.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root variant="button" defaultValue="overview">
            <Tabs.List>
                <TabItems />
            </Tabs.List>
            <TabPanels />
        </Tabs.Root>
}`,...q.parameters?.docs?.source},description:{story:"`button` renders button-like tabs, with room for a leading icon per trigger.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
            {(['start', 'center', 'end'] as const).map(position => <Tabs.Root key={position} variant="enclosed" position={position} defaultValue="overview">
                    <Tabs.List>
                        <TabItems />
                    </Tabs.List>
                    <TabPanels />
                </Tabs.Root>)}
        </div>
}`,...J.parameters?.docs?.source},description:{story:"`position` aligns the tab list within the row (`start` is the default).",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root variant="enclosed" position="full" defaultValue="overview">
            <Tabs.List>
                <TabItems />
            </Tabs.List>
            <TabPanels />
        </Tabs.Root>
}`,...Y.parameters?.docs?.source},description:{story:'`position="full"` stretches the tab list to fill the available width.',...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root variant="line" defaultValue="overview">
            <Tabs.List>
                {TABS.map(({
        value,
        label
      }) => <Tabs.Trigger key={value} value={value} asChild>
                        <a href={\`#\${value}\`}>{label}</a>
                    </Tabs.Trigger>)}
            </Tabs.List>
            <TabPanels />
        </Tabs.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const overview = canvas.getByRole('tab', {
      name: /overview/i
    });
    await expect(overview.tagName).toBe('A');
    await expect(getComputedStyle(overview).textDecorationLine).toBe('none');
  }
}`,...X.parameters?.docs?.source},description:{story:`Triggers accept \`asChild\` to render as another element — e.g. a router link.
The trigger resets the anchor's default underline, so link-based tabs match
the button-based ones.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    defaultValue: 'overview'
  },
  render: args => <Tabs.Root {...args}>
            <Tabs.List>
                <TabItems />
            </Tabs.List>
            <TabPanels />
        </Tabs.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const overview = canvas.getByRole('tab', {
      name: /overview/i
    });
    const documents = canvas.getByRole('tab', {
      name: /documents/i
    });
    await expect(overview).toHaveAttribute('data-state', 'active');
    await expect(await canvas.findByText(/summary of the policy/i)).toBeVisible();
    await userEvent.click(documents);
    await expect(documents).toHaveAttribute('data-state', 'active');
    await expect(overview).toHaveAttribute('data-state', 'inactive');
    await expect(await canvas.findByText(/declarations, endorsements/i)).toBeVisible();
  }
}`,...Z.parameters?.docs?.source},description:{story:`Selecting a tab reveals its panel and hides the others.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'overview'
  },
  render: args => <div className="flex flex-col gap-8">
            {(['line', 'enclosed'] as const).map(variant => <Tabs.Root key={variant} {...args} variant={variant}>
                    <Tabs.List aria-label={\`\${variant} tabs\`}>
                        <TabItems />
                    </Tabs.List>
                    <TabPanels />
                </Tabs.Root>)}
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const line = canvas.getByRole('tablist', {
      name: /line tabs/i
    });
    const enclosed = canvas.getByRole('tablist', {
      name: /enclosed tabs/i
    });
    for (const list of [line, enclosed]) {
      const indicator = indicatorOf(list);
      const overview = within(list).getByRole('tab', {
        name: /overview/i
      });
      const activity = within(list).getByRole('tab', {
        name: /activity/i
      });
      await waitFor(() => expect(list).toHaveAttribute('data-indicator', 'ready'));
      await expect(translateX(indicator)).toBe(overview.offsetLeft);
      // Transitions switch on a frame after the first placement, so the mark never slides in on load.
      await waitFor(() => expect(indicator).toHaveAttribute('data-animated'));
      await userEvent.click(activity);
      await waitFor(() => expect(translateX(indicator)).toBe(activity.offsetLeft));
    }

    // The pill takes the trigger's width; the line scales a 1px bar to it.
    const pill = indicatorOf(enclosed);
    const activePill = within(enclosed).getByRole('tab', {
      name: /activity/i
    });
    await expect(pill.style.width).toBe(\`\${activePill.offsetWidth}px\`);
    const bar = indicatorOf(line);
    const activeLine = within(line).getByRole('tab', {
      name: /activity/i
    });
    await expect(new DOMMatrix(bar.style.transform).a).toBe(activeLine.offsetWidth);
  }
}`,...Q.parameters?.docs?.source},description:{story:"`line` and `enclosed` draw one indicator for the whole list and slide it to the active trigger, so a tab change\nreads as the mark moving (200ms, strong ease-out, `transform` only). It lands without motion on first render and\nstays put under `prefers-reduced-motion`. `button` tabs keep their own fill.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-start gap-6">
            {(['line', 'enclosed', 'button'] as const).map(variant => <h2 key={variant}>
                    <Tabs.Label variant={variant}>Shared coverages ({variant})</Tabs.Label>
                </h2>)}
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole('heading')).toHaveLength(3);
    await expect(canvas.queryByRole('tablist')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('tab')).not.toBeInTheDocument();
  }
}`,...$.parameters?.docs?.source},description:{story:"A standalone `Label` gives a panel with a single, non-interactive title the\ninactive trigger's exact look: outside a `Root` it never gets the active\ndata-state, and `pointer-events-none` keeps hover styles off. It is a plain\n`span`, so wrap it in a heading element for heading semantics. No tab or\ntablist role is announced.",...$.parameters?.docs?.description}}},Pt=[`Default`,`Enclosed`,`Buttons`,`Positions`,`FullWidth`,`AsChildLinks`,`SwitchTabs`,`SlidingIndicator`,`SingleTitle`]})))()}Ft();export{X as AsChildLinks,q as Buttons,G as Default,K as Enclosed,Y as FullWidth,J as Positions,$ as SingleTitle,Q as SlidingIndicator,Z as SwitchTabs,Pt as __namedExportsOrder,At as default};