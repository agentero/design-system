import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DYBdHRNQ.js";import{t as r}from"./react-dom-fmpUTPVx.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./chevron-down-BKQ7WV1B.js";import{i as s,n as c,r as l,t as u}from"./dist-DGr4osAA.js";import{a as ee,i as d,r as f,t as p}from"./dist-D-p-n1Vv.js";import{i as m,n as h,r as g,t as _}from"./dist-C-33Q2Ev.js";import{n as v,t as te}from"./dist-CeZHiCQq.js";import{n as ne,t as re}from"./dist-B82y7L55.js";import{n as ie,t as ae}from"./dist-C8AlzbfS.js";import{n as oe,t as y}from"./utils-nsk-j2e0.js";function se(e){let t=e+`CollectionProvider`,[n,r]=l(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=e=>{let{scope:t,children:n}=e,r=b.useRef(null),a=b.useRef(new Map).current;return(0,x.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})};o.displayName=t;let s=e+`CollectionSlot`,c=p(s),u=b.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=a(s,n),o=ee(t,i.collectionRef);return(0,x.jsx)(c,{ref:o,children:r})});u.displayName=s;let d=e+`CollectionItemSlot`,f=`data-radix-collection-item`,m=p(d),h=b.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=b.useRef(null),s=ee(t,o),c=a(d,n);return b.useEffect(()=>(c.itemMap.set(o,{ref:o,...i}),()=>void c.itemMap.delete(o))),(0,x.jsx)(m,{[f]:``,ref:s,children:r})});h.displayName=d;function g(t){let n=a(e+`CollectionConsumer`,t);return b.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${f}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return[{Provider:o,Slot:u,ItemSlot:h},g,r]}var b,x;function ce(){return(ce=t((()=>{b=e(n(),1),s(),d(),f(),x=i(),n(),i()})))()}var le,ue,S;function de(){return(de=t((()=>{le=e(n(),1),r(),f(),ue=i(),S=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=p(`Primitive.${t}`),r=le.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,ue.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})})))()}function fe(e,t){return ve.useReducer((e,n)=>t[e][n]??e,e)}function pe(e){let[t,n]=C.useState(),r=C.useRef(null),i=C.useRef(e),a=C.useRef(`none`),[o,s]=fe(e?`mounted`:`unmounted`,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}});return C.useEffect(()=>{let e=ge(r.current);a.current=o===`mounted`?e:`none`},[o]),m(()=>{let t=r.current,n=i.current;if(n!==e){let r=a.current,o=ge(t);e?s(`MOUNT`):o===`none`||t?.display===`none`?s(`UNMOUNT`):s(n&&r!==o?`ANIMATION_OUT`:`UNMOUNT`),i.current=e}},[e,s]),m(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,o=a=>{let o=ge(r.current).includes(CSS.escape(a.animationName));if(a.target===t&&o&&(s(`ANIMATION_END`),!i.current)){let r=t.style.animationFillMode;t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)})}},c=e=>{e.target===t&&(a.current=ge(r.current))};return t.addEventListener(`animationstart`,c),t.addEventListener(`animationcancel`,o),t.addEventListener(`animationend`,o),()=>{n.clearTimeout(e),t.removeEventListener(`animationstart`,c),t.removeEventListener(`animationcancel`,o),t.removeEventListener(`animationend`,o)}}s(`ANIMATION_END`)},[t,s]),{isPresent:[`mounted`,`unmountSuspended`].includes(o),ref:C.useCallback(e=>{r.current=e?getComputedStyle(e):null,n(e)},[])}}function me(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function he(...e){let t=C.useRef(e);return t.current=e,C.useCallback(e=>{let n=t.current,r=!1,i=n.map(t=>{let n=me(t,e);return!r&&typeof n==`function`&&(r=!0),n});if(r)return()=>{for(let e=0;e<i.length;e++){let t=i[e];typeof t==`function`?t():me(n[e],null)}}},[])}function ge(e){return e?.animationName||`none`}function _e(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var C,ve,ye;function be(){return(be=t((()=>{C=e(n(),1),g(),ve=e(n(),1),ye=e=>{let{present:t,children:n}=e,r=pe(t),i=typeof n==`function`?n({present:r.isPresent}):C.Children.only(n),a=he(r.ref,_e(i));return typeof n==`function`||r.isPresent?C.cloneElement(i,{ref:a}):null},ye.displayName=`Presence`})))()}function xe(e){return e?`open`:`closed`}var w,T,E,Se,Ce,we,D,Te,Ee,De,O,Oe,ke,Ae,je,Me;function Ne(){return(Ne=t((()=>{w=e(n(),1),c(),s(),_(),g(),d(),de(),be(),te(),T=i(),E=`Collapsible`,[Se,Ce]=l(E),[we,D]=Se(E),Te=w.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:a,onOpenChange:o,...s}=e,[c,l]=h({prop:r,defaultProp:i??!1,onChange:o,caller:E});return(0,T.jsx)(we,{scope:n,disabled:a,contentId:v(),open:c,onOpenToggle:w.useCallback(()=>l(e=>!e),[l]),children:(0,T.jsx)(S.div,{"data-state":xe(c),"data-disabled":a?``:void 0,...s,ref:t})})}),Te.displayName=E,Ee=`CollapsibleTrigger`,De=w.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,i=D(Ee,n);return(0,T.jsx)(S.button,{type:`button`,"aria-controls":i.open?i.contentId:void 0,"aria-expanded":i.open||!1,"data-state":xe(i.open),"data-disabled":i.disabled?``:void 0,disabled:i.disabled,...r,ref:t,onClick:u(e.onClick,i.onOpenToggle)})}),De.displayName=Ee,O=`CollapsibleContent`,Oe=w.forwardRef((e,t)=>{let{forceMount:n,...r}=e,i=D(O,e.__scopeCollapsible);return(0,T.jsx)(ye,{present:n||i.open,children:({present:e})=>(0,T.jsx)(ke,{...r,ref:t,present:e})})}),Oe.displayName=O,ke=w.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:r,children:i,...a}=e,o=D(O,n),[s,c]=w.useState(r),l=w.useRef(null),u=ee(t,l),d=w.useRef(0),f=d.current,p=w.useRef(0),h=p.current,g=o.open||s,_=w.useRef(g),v=w.useRef(void 0);return w.useEffect(()=>{let e=requestAnimationFrame(()=>_.current=!1);return()=>cancelAnimationFrame(e)},[]),m(()=>{let e=l.current;if(e){v.current=v.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let t=e.getBoundingClientRect();d.current=t.height,p.current=t.width,_.current||(e.style.transitionDuration=v.current.transitionDuration,e.style.animationName=v.current.animationName),c(r)}},[o.open,r]),(0,T.jsx)(S.div,{"data-state":xe(o.open),"data-disabled":o.disabled?``:void 0,id:o.contentId,hidden:!g,...a,ref:u,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":h?`${h}px`:void 0,...e.style},children:g&&i})}),Ae=Te,je=De,Me=Oe})))()}function Pe(e){return e?`open`:`closed`}var k,A,j,Fe,M,Ie,Le,N,Re,P,ze,Be,Ve,He,Ue,We,Ge,Ke,F,qe,I,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st;function ct(){return(ct=t((()=>{k=e(n(),1),s(),ce(),d(),c(),_(),de(),Ne(),te(),re(),A=i(),j=`Accordion`,Fe=[`Home`,`End`,`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`],[M,Ie,Le]=se(j),[N,Re]=l(j,[Le,Ce]),P=Ce(),ze=k.forwardRef((e,t)=>{let{type:n,...r}=e,i=r,a=r;return(0,A.jsx)(M.Provider,{scope:e.__scopeAccordion,children:n===`multiple`?(0,A.jsx)(Ge,{...a,ref:t}):(0,A.jsx)(We,{...i,ref:t})})}),ze.displayName=j,[Be,Ve]=N(j),[He,Ue]=N(j,{collapsible:!1}),We=k.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},collapsible:a=!1,...o}=e,[s,c]=h({prop:n,defaultProp:r??``,onChange:i,caller:j});return(0,A.jsx)(Be,{scope:e.__scopeAccordion,value:k.useMemo(()=>s?[s]:[],[s]),onItemOpen:c,onItemClose:k.useCallback(()=>a&&c(``),[a,c]),children:(0,A.jsx)(He,{scope:e.__scopeAccordion,collapsible:a,children:(0,A.jsx)(qe,{...o,ref:t})})})}),Ge=k.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[o,s]=h({prop:n,defaultProp:r??[],onChange:i,caller:j}),c=k.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=k.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,A.jsx)(Be,{scope:e.__scopeAccordion,value:o,onItemOpen:c,onItemClose:l,children:(0,A.jsx)(He,{scope:e.__scopeAccordion,collapsible:!0,children:(0,A.jsx)(qe,{...a,ref:t})})})}),[Ke,F]=N(j),qe=k.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:r,dir:i,orientation:a=`vertical`,...o}=e,s=k.useRef(null),c=ee(s,t),l=Ie(n),d=ne(i)===`ltr`,f=u(e.onKeyDown,e=>{if(!Fe.includes(e.key))return;let t=e.target,n=l().filter(e=>!e.ref.current?.disabled),r=n.findIndex(e=>e.ref.current===t),i=n.length;if(r===-1)return;e.preventDefault();let o=r,s=i-1,c=()=>{o=r+1,o>s&&(o=0)},u=()=>{o=r-1,o<0&&(o=s)};switch(e.key){case`Home`:o=0;break;case`End`:o=s;break;case`ArrowRight`:a===`horizontal`&&(d?c():u());break;case`ArrowDown`:a===`vertical`&&c();break;case`ArrowLeft`:a===`horizontal`&&(d?u():c());break;case`ArrowUp`:a===`vertical`&&u()}n[o%i].ref.current?.focus()});return(0,A.jsx)(Ke,{scope:n,disabled:r,direction:i,orientation:a,children:(0,A.jsx)(M.Slot,{scope:n,children:(0,A.jsx)(S.div,{...o,"data-orientation":a,ref:c,onKeyDown:r?void 0:f})})})}),I=`AccordionItem`,[Je,Ye]=N(I),Xe=k.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...i}=e,a=F(I,n),o=Ve(I,n),s=P(n),c=v(),l=r&&o.value.includes(r)||!1,u=a.disabled||e.disabled;return(0,A.jsx)(Je,{scope:n,open:l,disabled:u,triggerId:c,children:(0,A.jsx)(Ae,{"data-orientation":a.orientation,"data-state":Pe(l),...s,...i,ref:t,disabled:u,open:l,onOpenChange:e=>{e?o.onItemOpen(r):o.onItemClose(r)}})})}),Xe.displayName=I,Ze=`AccordionHeader`,Qe=k.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=F(j,n),a=Ye(Ze,n);return(0,A.jsx)(S.h3,{"data-orientation":i.orientation,"data-state":Pe(a.open),"data-disabled":a.disabled?``:void 0,...r,ref:t})}),Qe.displayName=Ze,$e=`AccordionTrigger`,et=k.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=F(j,n),a=Ye($e,n),o=Ue($e,n),s=P(n);return(0,A.jsx)(M.ItemSlot,{scope:n,children:(0,A.jsx)(je,{"aria-disabled":a.open&&!o.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...s,...r,ref:t})})}),et.displayName=$e,tt=`AccordionContent`,nt=k.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=F(j,n),a=Ye(tt,n),o=P(n);return(0,A.jsx)(Me,{role:`region`,"aria-labelledby":a.triggerId,"data-orientation":i.orientation,...o,...r,ref:t,style:{"--radix-accordion-content-height":`var(--radix-collapsible-content-height)`,"--radix-accordion-content-width":`var(--radix-collapsible-content-width)`,...e.style}})}),nt.displayName=tt,rt=ze,it=Xe,at=Qe,ot=et,st=nt})))()}var L,lt,R,z,ut,B,V;function dt(){return(dt=t((()=>{ct(),a(),ae(),oe(),L=i(),lt=ie({variants:{enclosed:{true:`rounded-lg border border-border-default-base-primary shadow-sm`}}}),R=({className:e,enclosed:t,...n})=>(0,L.jsx)(rt,{"data-slot":`accordion-root`,className:y(lt({enclosed:t}),e),...n}),R.displayName=`Accordion.Root`,z=({className:e,...t})=>(0,L.jsx)(it,{"data-slot":`accordion-item`,className:y(`border-b border-border-default-base-primary last:border-b-0`,e),...t}),z.displayName=`Accordion.Item`,ut=({className:e,...t})=>(0,L.jsx)(at,{"data-slot":`accordion-header`,className:y(`flex`,e),...t}),ut.displayName=`Accordion.Header`,B=({className:e,children:t,asChild:n,...r})=>(0,L.jsx)(ut,{children:(0,L.jsx)(ot,{"data-slot":`accordion-trigger`,asChild:n,className:y(`group flex flex-1 cursor-pointer items-center justify-between p-4 transition-colors hover:text-text-default-base-secondary`,`focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary`,`data-disabled:cursor-not-allowed data-disabled:pointer-events-none data-disabled:text-text-default-disable-primary`,e),...r,children:n?t:(0,L.jsxs)(L.Fragment,{children:[t,(0,L.jsx)(o,{"aria-hidden":!0,className:`size-3.5 shrink-0 group-data-[state=open]:rotate-180 motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out-quint`})]})})}),B.displayName=`Accordion.Trigger`,V=({className:e,children:t,...n})=>(0,L.jsx)(st,{"data-slot":`accordion-content`,className:y(`overflow-hidden px-4 text-sm`,`motion-safe:data-[state=open]:animate-accordion-down`,`motion-safe:data-[state=closed]:animate-accordion-up`,e),...n,children:(0,L.jsx)(`div`,{className:`pb-4`,children:t})}),V.displayName=`Accordion.Content`;try{R.displayName=`Accordion.Root`,R.__docgenInfo={description:'Stacked, collapsible sections built on Radix UI\'s Accordion, so keyboard nav\nand ARIA come for free. Compose `Root` with `Item`s, each holding a `Trigger`\nand `Content`. `type="single"` (optionally `collapsible`) opens one at a time;\n`type="multiple"` opens sections independently. `enclosed` renders the group\nas a bordered card.',displayName:`Accordion.Root`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_02cd1fcad845f8b2ae3445dcea9a7bc6/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},enclosed:{defaultValue:null,description:``,name:`enclosed`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Root of a group of collapsible sections`,example:`\`\`\`tsx
import { Accordion } from '@agentero/design-system/accordion';

<Accordion.Root type="single" collapsible>
  <Accordion.Item value="coverages">
    <Accordion.Trigger>Coverages</Accordion.Trigger>
    <Accordion.Content>…</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
\`\`\``}}}catch{}try{z.displayName=`Accordion.Item`,z.__docgenInfo={description:``,displayName:`Accordion.Item`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_02cd1fcad845f8b2ae3445dcea9a7bc6/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{B.displayName=`Accordion.Trigger`,B.__docgenInfo={description:``,displayName:`Accordion.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_02cd1fcad845f8b2ae3445dcea9a7bc6/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{V.displayName=`Accordion.Content`,V.__docgenInfo={description:``,displayName:`Accordion.Content`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_02cd1fcad845f8b2ae3445dcea9a7bc6/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var H;function ft(){return(ft=t((()=>{dt(),H={Root:R,Item:z,Trigger:B,Content:V}})))()}var U,W,G,pt,mt,K,q,J,Y,X,Z,Q,$,ht;function gt(){return(gt=t((()=>{a(),ft(),U=i(),{expect:W,userEvent:G,within:pt}=__STORYBOOK_MODULE_TEST__,mt={title:`Components/Accordion`,component:H.Root,tags:[`autodocs`],parameters:{docs:{description:{component:'Accordion is a compound built on Radix UI: `Root` holds the `Item`s, each\nwith a `Trigger` and a `Content`. `type="single"` (with optional\n`collapsible`) opens one section at a time; `type="multiple"` opens them\nindependently. `enclosed` renders the group as a bordered card.'}}}},K=[{value:`covered`,question:`What is covered?`,answer:`Your policy covers the dwelling, personal property, and liability up to the stated limits. Review your declarations page for exact figures.`},{value:`claim`,question:`How do I file a claim?`,answer:`Open a claim from the dashboard or call the carrier directly. You will need your policy number and the date of loss.`},{value:`payment`,question:`When is my payment due?`,answer:`Premiums are billed monthly on the policy anniversary day. You can switch to annual billing from the billing settings.`}],q={args:{type:`single`,collapsible:!0,enclosed:!1,disabled:!1},argTypes:{type:{control:`radio`,options:[`single`,`multiple`],description:`single = one item open at a time; multiple = items open independently`},collapsible:{control:`boolean`,description:`single only — allows closing the open item (reach an all-closed state)`},enclosed:{control:`boolean`,description:`Render the group as a bordered card`},disabled:{control:`boolean`,description:`Disable every item`}},render:e=>(0,U.jsx)(H.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))})},J={args:{type:`multiple`},render:()=>(0,U.jsx)(H.Root,{type:`multiple`,defaultValue:[`covered`,`payment`],children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))})},Y={args:{type:`multiple`},render:()=>(0,U.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,U.jsx)(H.Root,{type:`multiple`,defaultValue:[`covered`],children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))}),(0,U.jsx)(H.Root,{type:`multiple`,enclosed:!0,defaultValue:[`claim`],children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))})]})},X={args:{type:`single`,collapsible:!0},render:()=>(0,U.jsx)(H.Root,{type:`single`,collapsible:!0,defaultValue:`covered`,children:(0,U.jsxs)(H.Item,{value:`covered`,children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsxs)(`button`,{className:`group flex w-full items-center gap-2 py-4 text-left text-base font-semibold`,children:[(0,U.jsx)(o,{className:`size-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180`}),`What is covered?`]})}),(0,U.jsx)(H.Content,{children:K[0].answer})]})})},Z={args:{type:`single`,collapsible:!0},render:e=>(0,U.jsx)(H.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:(0,U.jsx)(`span`,{className:`text-lg font-bold`,children:t})}),(0,U.jsx)(H.Content,{children:n})]},e))})},Q={args:{type:`single`,collapsible:!0},render:e=>(0,U.jsx)(H.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))}),play:async({canvasElement:e})=>{let t=pt(e),n=t.getByRole(`button`,{name:/what is covered/i});await W(n).toHaveAttribute(`aria-expanded`,`false`),await G.click(n),await W(n).toHaveAttribute(`aria-expanded`,`true`),await W(n).toHaveAttribute(`data-state`,`open`),await W(await t.findByText(/your policy covers the dwelling/i)).toBeVisible(),await G.click(n),await W(n).toHaveAttribute(`aria-expanded`,`false`)}},$={args:{type:`single`,collapsible:!1,defaultValue:`covered`},render:e=>(0,U.jsx)(H.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))}),play:async({canvasElement:e})=>{let t=pt(e).getByRole(`button`,{name:/what is covered/i});await W(t).toHaveAttribute(`aria-expanded`,`true`),await G.click(t),await W(t).toHaveAttribute(`aria-expanded`,`true`),await W(t).toHaveAttribute(`data-state`,`open`)}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    enclosed: false,
    disabled: false
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'single = one item open at a time; multiple = items open independently'
    },
    collapsible: {
      control: 'boolean',
      description: 'single only — allows closing the open item (reach an all-closed state)'
    },
    enclosed: {
      control: 'boolean',
      description: 'Render the group as a bordered card'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable every item'
    }
  },
  render: args => <Accordion.Root {...args}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>{question}</Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>
}`,...q.parameters?.docs?.source},description:{story:"Exclusive accordion: one item open at a time, `collapsible` lets it close.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: () => <Accordion.Root type="multiple" defaultValue={['covered', 'payment']}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>{question}</Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>
}`,...J.parameters?.docs?.source},description:{story:'`type="multiple"` lets several sections stay open at once.',...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: () => <div className="flex flex-col gap-8">
            <Accordion.Root type="multiple" defaultValue={['covered']}>
                {FAQS.map(({
        value,
        question,
        answer
      }) => <Accordion.Item key={value} value={value}>
                        <Accordion.Trigger>{question}</Accordion.Trigger>
                        <Accordion.Content>{answer}</Accordion.Content>
                    </Accordion.Item>)}
            </Accordion.Root>
            <Accordion.Root type="multiple" enclosed defaultValue={['claim']}>
                {FAQS.map(({
        value,
        question,
        answer
      }) => <Accordion.Item key={value} value={value}>
                        <Accordion.Trigger>{question}</Accordion.Trigger>
                        <Accordion.Content>{answer}</Accordion.Content>
                    </Accordion.Item>)}
            </Accordion.Root>
        </div>
}`,...Y.parameters?.docs?.source},description:{story:"`enclosed` wraps the group in a bordered card (default borderless on top).",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: () => <Accordion.Root type="single" collapsible defaultValue="covered">
            <Accordion.Item value="covered">
                <Accordion.Trigger asChild>
                    <button className="group flex w-full items-center gap-2 py-4 text-left text-base font-semibold">
                        <ChevronDownIcon className="size-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        What is covered?
                    </button>
                </Accordion.Trigger>
                <Accordion.Content>{FAQS[0].answer}</Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
}`,...X.parameters?.docs?.source},description:{story:"`asChild` delegates the trigger to a custom element; the built-in chevron is omitted.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: args => <Accordion.Root {...args}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>
                        <span className="text-lg font-bold">{question}</span>
                    </Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>
}`,...Z.parameters?.docs?.source},description:{story:"The consumer controls title weight/size via the children passed to `Trigger`.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: args => <Accordion.Root {...args}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>{question}</Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /what is covered/i
    });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger).toHaveAttribute('data-state', 'open');
    await expect(await canvas.findByText(/your policy covers the dwelling/i)).toBeVisible();
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  }
}`,...Q.parameters?.docs?.source},description:{story:"`collapsible` lets clicking the open item close it (reach an all-closed state).",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: false,
    defaultValue: 'covered'
  },
  render: args => <Accordion.Root {...args}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>{question}</Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /what is covered/i
    });
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger).toHaveAttribute('data-state', 'open');
  }
}`,...$.parameters?.docs?.source},description:{story:"Without `collapsible`, clicking the already-open item keeps it open.",...$.parameters?.docs?.description}}},ht=[`Default`,`Multiple`,`Enclosed`,`CustomTrigger`,`StyledTitles`,`ExpandCollapse`,`NonCollapsible`]})))()}gt();export{X as CustomTrigger,q as Default,Y as Enclosed,Q as ExpandCollapse,J as Multiple,$ as NonCollapsible,Z as StyledTitles,ht as __namedExportsOrder,mt as default};