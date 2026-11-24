import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-Bw_4vtqb.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./chevron-down-DfBE9hAH.js";import{n as o,t as s}from"./dist-RUQ7hart.js";import{n as c,r as l}from"./dist-SIq1Vnm9.js";import{n as u,t as d}from"./dist-BRdonK27.js";import{a as f,i as p,n as ee,t as te}from"./dist-BXQ-O-1f.js";import{i as m,n as h,r as g,t as _}from"./dist-DjSNkYTR.js";import{r as ne,t as v}from"./dist-C5xUMjUc.js";import{n as re,t as ie}from"./dist-jj9PnojN.js";import{n as ae,t as oe}from"./dist-ot1XxjJ4.js";import{n as se,t as ce}from"./dist-Dsj2rsW0.js";import{n as le,t as y}from"./utils-BL6AXtr8.js";function b(e){return e?`open`:`closed`}var x,S,ue,C,w,de,fe,pe,T,me,he,ge,_e,ve,ye;function be(){return(be=t((()=>{x=e(n(),1),m(),o(),_(),d(),c(),ne(),re(),oe(),S=r(),ue=Object.defineProperty,C=(e,t)=>ue(e,`name`,{value:t,configurable:!0}),w=`Collapsible`,[de,fe]=s(w),[pe,T]=de(w),me=x.forwardRef(C(function(e,t){let{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:a,onOpenChange:o,...s}=e,[c,l]=h({prop:r,defaultProp:i??!1,onChange:o,caller:w});return(0,S.jsx)(pe,{scope:n,disabled:a,contentId:ae(),open:c,onOpenToggle:x.useCallback(()=>l(e=>!e),[l]),children:(0,S.jsx)(v.div,{"data-state":b(c),"data-disabled":a?``:void 0,...s,ref:t})})},`Collapsible`)),he=`CollapsibleTrigger`,ge=x.forwardRef(C(function(e,t){let{__scopeCollapsible:n,...r}=e,i=T(he,n);return(0,S.jsx)(v.button,{type:`button`,"aria-controls":i.open?i.contentId:void 0,"aria-expanded":i.open||!1,"data-state":b(i.open),"data-disabled":i.disabled?``:void 0,disabled:i.disabled,...r,ref:t,onClick:g(e.onClick,i.onOpenToggle)})},`CollapsibleTrigger`)),_e=`CollapsibleContent`,ve=x.forwardRef(C(function(e,t){let{forceMount:n,...r}=e,i=T(_e,e.__scopeCollapsible);return(0,S.jsx)(ie,{present:n||i.open,children:({present:e})=>(0,S.jsx)(ye,{...r,ref:t,present:e})})},`CollapsibleContent`)),ye=x.forwardRef(C(function(e,t){let{__scopeCollapsible:n,present:r,children:i,...a}=e,o=T(_e,n),[s,c]=x.useState(r),d=x.useRef(null),f=l(t,d),p=x.useRef(0),ee=p.current,te=x.useRef(0),m=te.current,h=o.open||s,g=x.useRef(h),_=x.useRef(void 0);return x.useEffect(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),u(()=>{let e=d.current;if(e){_.current=_.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let t=e.getBoundingClientRect();p.current=t.height,te.current=t.width,g.current||(e.style.transitionDuration=_.current.transitionDuration,e.style.animationName=_.current.animationName),c(r)}},[o.open,r]),(0,S.jsx)(v.div,{"data-state":b(o.open),"data-disabled":o.disabled?``:void 0,id:o.contentId,hidden:!h,...a,ref:f,style:{"--radix-collapsible-content-height":ee?`${ee}px`:void 0,"--radix-collapsible-content-width":m?`${m}px`:void 0,...e.style},children:h&&i})},`CollapsibleContentImpl`)),C(b,`getState`)})))()}function xe(e){return e?`open`:`closed`}var E,D,Se,O,Ce,k,we,A,Te,j,Ee,De,M,Oe,N,ke,Ae,je,Me,Ne,Pe,Fe,Ie,P,Le,F,Re,I,ze,Be,Ve,He,Ue,We,Ge;function Ke(){return(Ke=t((()=>{E=e(n(),1),o(),f(),c(),m(),_(),ne(),be(),oe(),te(),D=r(),Se=Object.defineProperty,O=(e,t)=>Se(e,`name`,{value:t,configurable:!0}),Ce={Single:`single`,Multiple:`multiple`},k={Vertical:`vertical`,Horizontal:`horizontal`},we={LTR:`ltr`,RTL:`rtl`},A=`Accordion`,Te=[`Home`,`End`,`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`],[j,{useGetCollection:Ee,createCollectionScope:De}]=p(A),[M,Oe]=s(A,[De,fe]),N=fe(),ke=E.forwardRef(O(function(e,t){let{type:n,...r}=e,i=r,a=r;return(0,D.jsx)(j.Provider,{scope:e.__scopeAccordion,children:n===Ce.Multiple?(0,D.jsx)(Fe,{...a,ref:t}):(0,D.jsx)(Pe,{...i,ref:t})})},`Accordion`)),[Ae,je]=M(A),[Me,Ne]=M(A,{collapsible:!1}),Pe=E.forwardRef(O(function(e,t){let{value:n,defaultValue:r,onValueChange:i=O(()=>{},`onValueChange`),collapsible:a=!1,...o}=e,[s,c]=h({prop:n,defaultProp:r??``,onChange:i,caller:A});return(0,D.jsx)(Ae,{scope:e.__scopeAccordion,value:E.useMemo(()=>s?[s]:[],[s]),onItemOpen:c,onItemClose:E.useCallback(()=>a&&c(``),[a,c]),children:(0,D.jsx)(Me,{scope:e.__scopeAccordion,collapsible:a,children:(0,D.jsx)(Le,{...o,ref:t})})})},`AccordionImplSingle`)),Fe=E.forwardRef(O(function(e,t){let{value:n,defaultValue:r,onValueChange:i=O(()=>{},`onValueChange`),...a}=e,[o,s]=h({prop:n,defaultProp:r??[],onChange:i,caller:A}),c=E.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=E.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,D.jsx)(Ae,{scope:e.__scopeAccordion,value:o,onItemOpen:c,onItemClose:l,children:(0,D.jsx)(Me,{scope:e.__scopeAccordion,collapsible:!0,children:(0,D.jsx)(Le,{...a,ref:t})})})},`AccordionImplMultiple`)),[Ie,P]=M(A),Le=E.forwardRef(O(function(e,t){let{__scopeAccordion:n,disabled:r,dir:i,orientation:a=k.Vertical,...o}=e,s=E.useRef(null),c=l(s,t),u=Ee(n),d=ee(i)===we.LTR,f=g(e.onKeyDown,e=>{if(!Te.includes(e.key))return;let t=u(),n=e.target,r=t.filter(([,e])=>!e.element.disabled),i=r.findIndex(([,e])=>e.element===n),o=r.size;if(i===-1)return;e.preventDefault();let s=i,c=o-1,l=O(()=>{s=i+1,s>c&&(s=0)},`moveNext`),f=O(()=>{s=i-1,s<0&&(s=c)},`movePrev`);switch(e.key){case`Home`:s=0;break;case`End`:s=c;break;case`ArrowRight`:a===k.Horizontal&&(d?l():f());break;case`ArrowDown`:a===k.Vertical&&l();break;case`ArrowLeft`:a===k.Horizontal&&(d?f():l());break;case`ArrowUp`:a===k.Vertical&&f()}let p=s%o;r.at(p)?.element.focus()});return(0,D.jsx)(Ie,{scope:n,disabled:r,direction:i,orientation:a,children:(0,D.jsx)(j.Slot,{scope:n,children:(0,D.jsx)(v.div,{...o,"data-orientation":a,ref:c,onKeyDown:r?void 0:f})})})},`AccordionImpl`)),F=`AccordionItem`,[Re,I]=M(F),ze=E.forwardRef(O(function(e,t){let{__scopeAccordion:n,value:r,...i}=e,a=P(F,n),o=je(F,n),s=N(n),c=ae(),l=r&&o.value.includes(r)||!1,u=a.disabled||e.disabled;return(0,D.jsx)(Re,{scope:n,open:l,disabled:u,triggerId:c,children:(0,D.jsx)(me,{"data-orientation":a.orientation,"data-state":xe(l),...s,...i,ref:t,disabled:u,open:l,onOpenChange:e=>{e?o.onItemOpen(r):o.onItemClose(r)}})})},`AccordionItem`)),Be=`AccordionHeader`,Ve=E.forwardRef(O(function(e,t){let{__scopeAccordion:n,...r}=e,i=P(A,n),a=I(Be,n);return(0,D.jsx)(v.h3,{"data-orientation":i.orientation,"data-state":xe(a.open),"data-disabled":a.disabled?``:void 0,...r,ref:t})},`AccordionHeader`)),He=`AccordionTrigger`,Ue=E.forwardRef(O(function(e,t){let{__scopeAccordion:n,...r}=e,i=P(A,n),a=I(He,n),o=Ne(He,n),s=N(n);return(0,D.jsx)(j.ItemSlot,{scope:n,children:(0,D.jsx)(ge,{"aria-disabled":a.open&&!o.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...s,...r,ref:t})})},`AccordionTrigger`)),We=`AccordionContent`,Ge=E.forwardRef(O(function(e,t){let{__scopeAccordion:n,...r}=e,i=P(A,n),a=I(We,n),o=N(n);return(0,D.jsx)(ve,{role:`region`,"aria-labelledby":a.triggerId,"data-orientation":i.orientation,...o,...r,ref:t,style:{"--radix-accordion-content-height":`var(--radix-collapsible-content-height)`,"--radix-accordion-content-width":`var(--radix-collapsible-content-width)`,...e.style}})},`AccordionContent`)),O(xe,`getState`)})))()}var L,qe,R,z,Je,B,V;function Ye(){return(Ye=t((()=>{Ke(),i(),ce(),le(),L=r(),qe=se({variants:{enclosed:{true:`rounded-lg border border-border-default-base-primary shadow-sm`}}}),R=({className:e,enclosed:t,...n})=>(0,L.jsx)(ke,{"data-slot":`accordion-root`,className:y(qe({enclosed:t}),e),...n}),R.displayName=`Accordion.Root`,z=({className:e,...t})=>(0,L.jsx)(ze,{"data-slot":`accordion-item`,className:y(`border-b border-border-default-base-primary last:border-b-0`,e),...t}),z.displayName=`Accordion.Item`,Je=({className:e,...t})=>(0,L.jsx)(Ve,{"data-slot":`accordion-header`,className:y(`flex`,e),...t}),Je.displayName=`Accordion.Header`,B=({className:e,children:t,asChild:n,...r})=>(0,L.jsx)(Je,{children:(0,L.jsx)(Ue,{"data-slot":`accordion-trigger`,asChild:n,className:y(`group flex flex-1 cursor-pointer items-center justify-between p-4 transition-colors hover:text-text-default-base-secondary`,`focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary`,`data-disabled:cursor-not-allowed data-disabled:pointer-events-none data-disabled:text-text-default-disable-primary`,e),...r,children:n?t:(0,L.jsxs)(L.Fragment,{children:[t,(0,L.jsx)(a,{"aria-hidden":!0,className:`size-3.5 shrink-0 group-data-[state=open]:rotate-180 motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out-quint`})]})})}),B.displayName=`Accordion.Trigger`,V=({className:e,children:t,...n})=>(0,L.jsx)(Ge,{"data-slot":`accordion-content`,className:y(`overflow-hidden px-4 text-sm`,`motion-safe:data-[state=open]:animate-accordion-down`,`motion-safe:data-[state=closed]:animate-accordion-up`,e),...n,children:(0,L.jsx)(`div`,{className:`pb-4`,children:t})}),V.displayName=`Accordion.Content`;try{R.displayName=`Accordion.Root`,R.__docgenInfo={description:'Stacked, collapsible sections built on Radix UI\'s Accordion, so keyboard nav\nand ARIA come for free. Compose `Root` with `Item`s, each holding a `Trigger`\nand `Content`. `type="single"` (optionally `collapsible`) opens one at a time;\n`type="multiple"` opens sections independently. `enclosed` renders the group\nas a bordered card.',displayName:`Accordion.Root`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},enclosed:{defaultValue:null,description:``,name:`enclosed`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Root of a group of collapsible sections`,example:`\`\`\`tsx
import { Accordion } from '@agentero/design-system/accordion';

<Accordion.Root type="single" collapsible>
  <Accordion.Item value="coverages">
    <Accordion.Trigger>Coverages</Accordion.Trigger>
    <Accordion.Content>…</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
\`\`\``}}}catch{}try{z.displayName=`Accordion.Item`,z.__docgenInfo={description:``,displayName:`Accordion.Item`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{B.displayName=`Accordion.Trigger`,B.__docgenInfo={description:``,displayName:`Accordion.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{V.displayName=`Accordion.Content`,V.__docgenInfo={description:``,displayName:`Accordion.Content`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var H;function Xe(){return(Xe=t((()=>{Ye(),H={Root:R,Item:z,Trigger:B,Content:V}})))()}var U,W,G,Ze,Qe,K,q,J,Y,X,Z,Q,$,$e;function et(){return(et=t((()=>{i(),Xe(),U=r(),{expect:W,userEvent:G,within:Ze}=__STORYBOOK_MODULE_TEST__,Qe={title:`Components/Accordion`,component:H.Root,tags:[`autodocs`],parameters:{docs:{description:{component:'Accordion is a compound built on Radix UI: `Root` holds the `Item`s, each\nwith a `Trigger` and a `Content`. `type="single"` (with optional\n`collapsible`) opens one section at a time; `type="multiple"` opens them\nindependently. `enclosed` renders the group as a bordered card.'}}}},K=[{value:`covered`,question:`What is covered?`,answer:`Your policy covers the dwelling, personal property, and liability up to the stated limits. Review your declarations page for exact figures.`},{value:`claim`,question:`How do I file a claim?`,answer:`Open a claim from the dashboard or call the carrier directly. You will need your policy number and the date of loss.`},{value:`payment`,question:`When is my payment due?`,answer:`Premiums are billed monthly on the policy anniversary day. You can switch to annual billing from the billing settings.`}],q={args:{type:`single`,collapsible:!0,enclosed:!1,disabled:!1},argTypes:{type:{control:`radio`,options:[`single`,`multiple`],description:`single = one item open at a time; multiple = items open independently`},collapsible:{control:`boolean`,description:`single only — allows closing the open item (reach an all-closed state)`},enclosed:{control:`boolean`,description:`Render the group as a bordered card`},disabled:{control:`boolean`,description:`Disable every item`}},render:e=>(0,U.jsx)(H.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))})},J={args:{type:`multiple`},render:()=>(0,U.jsx)(H.Root,{type:`multiple`,defaultValue:[`covered`,`payment`],children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))})},Y={args:{type:`multiple`},render:()=>(0,U.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,U.jsx)(H.Root,{type:`multiple`,defaultValue:[`covered`],children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))}),(0,U.jsx)(H.Root,{type:`multiple`,enclosed:!0,defaultValue:[`claim`],children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))})]})},X={args:{type:`single`,collapsible:!0},render:()=>(0,U.jsx)(H.Root,{type:`single`,collapsible:!0,defaultValue:`covered`,children:(0,U.jsxs)(H.Item,{value:`covered`,children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsxs)(`button`,{className:`group flex w-full items-center gap-2 py-4 text-left text-base font-semibold`,children:[(0,U.jsx)(a,{className:`size-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180`}),`What is covered?`]})}),(0,U.jsx)(H.Content,{children:K[0].answer})]})})},Z={args:{type:`single`,collapsible:!0},render:e=>(0,U.jsx)(H.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:(0,U.jsx)(`span`,{className:`text-lg font-bold`,children:t})}),(0,U.jsx)(H.Content,{children:n})]},e))})},Q={args:{type:`single`,collapsible:!0},render:e=>(0,U.jsx)(H.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))}),play:async({canvasElement:e})=>{let t=Ze(e),n=t.getByRole(`button`,{name:/what is covered/i});await W(n).toHaveAttribute(`aria-expanded`,`false`),await G.click(n),await W(n).toHaveAttribute(`aria-expanded`,`true`),await W(n).toHaveAttribute(`data-state`,`open`),await W(await t.findByText(/your policy covers the dwelling/i)).toBeVisible(),await G.click(n),await W(n).toHaveAttribute(`aria-expanded`,`false`)}},$={args:{type:`single`,collapsible:!1,defaultValue:`covered`},render:e=>(0,U.jsx)(H.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,U.jsxs)(H.Item,{value:e,children:[(0,U.jsx)(H.Trigger,{children:t}),(0,U.jsx)(H.Content,{children:n})]},e))}),play:async({canvasElement:e})=>{let t=Ze(e).getByRole(`button`,{name:/what is covered/i});await W(t).toHaveAttribute(`aria-expanded`,`true`),await G.click(t),await W(t).toHaveAttribute(`aria-expanded`,`true`),await W(t).toHaveAttribute(`data-state`,`open`)}},$e=[`Default`,`Multiple`,`Enclosed`,`CustomTrigger`,`StyledTitles`,`ExpandCollapse`,`NonCollapsible`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Without `collapsible`, clicking the already-open item keeps it open.",...$.parameters?.docs?.description}}}})))()}et();export{X as CustomTrigger,q as Default,Y as Enclosed,Q as ExpandCollapse,J as Multiple,$ as NonCollapsible,Z as StyledTitles,$e as __namedExportsOrder,Qe as default};