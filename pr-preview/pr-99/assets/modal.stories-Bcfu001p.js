import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-LQrT2M4s.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-BnRUc9cm.js";import{n as o,t as s}from"./dist-45xnqf3J.js";import{n as c,t as l}from"./dist-COTF87Jc.js";import{n as ee,t as u}from"./dist-xs6gOf1u.js";import{n as d,t as te}from"./lib-Dkaf_tmd.js";import{t as f}from"./button-BlbtOAL_.js";import{t as ne}from"./button-Bv3ow0we.js";import{i as re,n as ie,r as ae,t as oe}from"./es2015-BCRgU-Rn.js";import{i as se,n as ce,r as p,t as le}from"./dist-CkSupJmn2.js";import{n as ue,t as de}from"./dist-T3vm1nbk2.js";import{r as fe,t as m}from"./dist-fsMKwn5V2.js";import{a as pe,i as me,n as he,r as ge,t as _e}from"./dist-DDm_IwRy2.js";import{i as ve,n as ye,r as be,t as xe}from"./dist-D4SkQFiv.js";function Se(e){let t=h.forwardRef((t,n)=>{let{children:r,...a}=t,o=null,s=!1,c=[];Ee(r)&&typeof g==`function`&&(r=g(r._payload)),h.Children.forEach(r,e=>{if(Te(e)){s=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;Ee(n)&&typeof g==`function`&&(n=g(n._payload)),o=ke(t,n),c.push(o?.props?.children)}else c.push(e)}),o?o=h.cloneElement(o,void 0,c):!s&&h.Children.count(r)===1&&h.isValidElement(r)&&(o=r);let l=o?we(o):void 0,ee=i(n,l);if(!o){if(r||r===0)throw Error(s?Me(e):je(e));return r}let u=Ce(a,o.props??{});return o.type!==h.Fragment&&(u.ref=n?ee:l),h.cloneElement(o,u)});return t.displayName=`${e}.Slot`,t}function Ce(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function we(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Te(e){return h.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Oe}function Ee(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ae&&`_payload`in e&&De(e._payload)}function De(e){return typeof e==`object`&&!!e&&`then`in e}var h,Oe,ke,Ae,je,Me,g,Ne=e((()=>{h=t(n(),1),a(),Oe=Symbol.for(`radix.slottable`),ke=(e,t)=>{if(`child`in e.props){let t=e.props.child;return h.isValidElement(t)?h.cloneElement(t,void 0,e.props.children(t.props.children)):null}return h.isValidElement(t)?t:null},Ae=Symbol.for(`react.lazy`),je=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Me=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,g=h.use}));function Pe(e){return e?`open`:`closed`}var _,v,y,Fe,Ie,Le,b,x,S,C,w,Re,ze,Be,T,Ve,He,Ue,E,We,Ge,Ke,qe,D,O,k,Je,A,j,Ye=e((()=>{_=t(n(),1),se(),a(),ue(),l(),s(),he(),ve(),pe(),ce(),fe(),xe(),ae(),ie(),Ne(),v=r(),y=`Dialog`,[Fe,Ie]=de(y),[Le,b]=Fe(y),x=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:s=!0}=e,l=_.useRef(null),ee=_.useRef(null),[u,d]=o({prop:r,defaultProp:i??!1,onChange:a,caller:y});return(0,v.jsx)(Le,{scope:t,triggerRef:l,contentRef:ee,contentId:c(),titleId:c(),descriptionId:c(),open:u,onOpenChange:d,onOpenToggle:_.useCallback(()=>d(e=>!e),[d]),modal:s,children:n})},x.displayName=y,S=`DialogTrigger`,C=_.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=b(S,n),o=i(t,a.triggerRef);return(0,v.jsx)(m.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":Pe(a.open),...r,ref:o,onClick:p(e.onClick,a.onOpenToggle)})}),C.displayName=S,w=`DialogPortal`,[Re,ze]=Fe(w,{forceMount:void 0}),Be=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:i}=e,a=b(w,t);return(0,v.jsx)(Re,{scope:t,forceMount:n,children:_.Children.map(r,e=>(0,v.jsx)(le,{present:n||a.open,children:(0,v.jsx)(me,{asChild:!0,container:i,children:e})}))})},Be.displayName=w,T=`DialogOverlay`,Ve=_.forwardRef((e,t)=>{let n=ze(T,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=b(T,e.__scopeDialog);return a.modal?(0,v.jsx)(le,{present:r||a.open,children:(0,v.jsx)(Ue,{...i,ref:t})}):null}),Ve.displayName=T,He=Se(`DialogOverlay.RemoveScroll`),Ue=_.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=b(T,n),o=i(t,ge());return(0,v.jsx)(re,{as:He,allowPinchZoom:!0,shards:[a.contentRef],children:(0,v.jsx)(m.div,{"data-state":Pe(a.open),...r,ref:o,style:{pointerEvents:`auto`,...r.style}})})}),E=`DialogContent`,We=_.forwardRef((e,t)=>{let n=ze(E,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=b(E,e.__scopeDialog);return(0,v.jsx)(le,{present:r||a.open,children:a.modal?(0,v.jsx)(Ge,{...i,ref:t}):(0,v.jsx)(Ke,{...i,ref:t})})}),We.displayName=E,Ge=_.forwardRef((e,t)=>{let n=b(E,e.__scopeDialog),r=_.useRef(null),a=i(t,n.contentRef,r);return _.useEffect(()=>{let e=r.current;if(e)return oe(e)},[]),(0,v.jsx)(qe,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:p(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;(t.button===2||n)&&e.preventDefault()}),onFocusOutside:p(e.onFocusOutside,e=>e.preventDefault())})}),Ke=_.forwardRef((e,t)=>{let n=b(E,e.__scopeDialog),r=_.useRef(!1),i=_.useRef(!1);return(0,v.jsx)(qe,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),qe=_.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,...o}=e,s=b(E,n);return ye(),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(be,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,v.jsx)(_e,{role:`dialog`,id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":Pe(s.open),...o,ref:t,deferPointerDownOutside:!0,onDismiss:()=>s.onOpenChange(!1)})})})}),D=`DialogTitle`,O=_.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=b(D,n);return(0,v.jsx)(m.h2,{id:i.titleId,...r,ref:t})}),O.displayName=D,k=`DialogDescription`,Je=_.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=b(k,n);return(0,v.jsx)(m.p,{id:i.descriptionId,...r,ref:t})}),Je.displayName=k,A=`DialogClose`,j=_.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=b(A,n);return(0,v.jsx)(m.button,{type:`button`,...r,ref:t,onClick:p(e.onClick,()=>i.onOpenChange(!1))})}),j.displayName=A})),M,Xe,Ze=e((()=>{M=r(),Xe=()=>(0,M.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,M.jsx)(`path`,{d:`M12 13.0538L6.92689 18.1269C6.78844 18.2654 6.6144 18.3362 6.40479 18.3394C6.19519 18.3426 6.01795 18.2718 5.87309 18.1269C5.7282 17.982 5.65576 17.8064 5.65576 17.6C5.65576 17.3936 5.7282 17.218 5.87309 17.0731L10.9462 12L5.87309 6.92689C5.73462 6.78844 5.66379 6.6144 5.66059 6.40479C5.65737 6.19519 5.7282 6.01795 5.87309 5.87309C6.01795 5.7282 6.19359 5.65576 6.39999 5.65576C6.60639 5.65576 6.78202 5.7282 6.92689 5.87309L12 10.9462L17.0731 5.87309C17.2115 5.73462 17.3856 5.66379 17.5952 5.66059C17.8048 5.65737 17.982 5.7282 18.1269 5.87309C18.2718 6.01795 18.3442 6.19359 18.3442 6.39999C18.3442 6.60639 18.2718 6.78202 18.1269 6.92689L13.0538 12L18.1269 17.0731C18.2654 17.2115 18.3362 17.3856 18.3394 17.5952C18.3426 17.8048 18.2718 17.982 18.1269 18.1269C17.982 18.2718 17.8064 18.3442 17.6 18.3442C17.3936 18.3442 17.218 18.2718 17.0731 18.1269L12 13.0538Z`})})})),N,P,F,I,L,R,z,B,V,Qe,H,$e,et=e((()=>{N=t(n(),1),Ye(),u(),te(),ne(),Ze(),P=r(),F=e=>(0,P.jsx)(x,{"data-slot":`modal-root`,...e}),F.displayName=`Modal.Root`,I=e=>(0,P.jsx)(C,{"data-slot":`modal-trigger`,...e}),I.displayName=`Modal.Trigger`,L=(0,N.createContext)(`dialog`),R=ee({slots:{overlay:[`fixed inset-0 z-(--z-index-overlay) bg-overlay-dark-300`,`data-[state=open]:animate-modal-overlay-in data-[state=closed]:animate-modal-overlay-out`,`motion-reduce:animate-none!`],content:[`fixed top-1/2 left-1/2 z-(--z-index-modal) -translate-x-1/2 -translate-y-1/2`,`flex max-h-[calc(100dvh-4rem)] w-[calc(100vw-2rem)] flex-col gap-6`,`rounded-lg bg-bg-default-base-primary py-10 shadow-sm outline-none`,`data-[state=open]:animate-modal-content-in data-[state=closed]:animate-modal-content-out`,`motion-reduce:animate-none!`],title:`flex items-center justify-between gap-2 px-10 text-[1.375rem] leading-7 font-semibold text-text-default-base-primary`,body:`-my-1 max-h-[60vh] overflow-y-auto px-10 py-1`,footer:`flex shrink-0 items-center justify-end gap-4 px-10`},variants:{size:{md:{content:`max-w-[33.75rem]`},lg:{content:`max-w-[45rem]`}}},defaultVariants:{size:`md`}}),z=R(),B=({className:e,size:t,variant:n=`dialog`,children:r,onEscapeKeyDown:i,onPointerDownOutside:a,...o})=>{let s=R({size:t}),c=n===`alert`;return(0,P.jsx)(L.Provider,{value:n,children:(0,P.jsxs)(Be,{children:[(0,P.jsx)(Ve,{"data-slot":`modal-overlay`,className:s.overlay()}),(0,P.jsx)(We,{"data-slot":`modal-content`,role:c?`alertdialog`:`dialog`,"aria-describedby":void 0,className:d(s.content(),e),onEscapeKeyDown:e=>{i?.(e),c&&e.preventDefault()},onPointerDownOutside:e=>{a?.(e),c&&e.preventDefault()},...o,children:r})]})})},B.displayName=`Modal.Content`,V=({className:e,children:t,...n})=>{let r=(0,N.useContext)(L);return(0,P.jsxs)(`div`,{"data-slot":`modal-title`,className:z.title({className:e}),children:[(0,P.jsx)(O,{...n,children:t}),r===`dialog`&&(0,P.jsx)(j,{asChild:!0,children:(0,P.jsx)(f,{variant:`ghost`,size:`sm`,"aria-label":`Close`,className:`shrink-0`,children:(0,P.jsx)(Xe,{})})})]})},V.displayName=`Modal.Title`,Qe=({className:e,...t})=>(0,P.jsx)(`div`,{"data-slot":`modal-body`,tabIndex:0,className:z.body({className:e}),...t}),Qe.displayName=`Modal.Body`,H=({className:e,...t})=>(0,P.jsx)(`div`,{"data-slot":`modal-footer`,className:z.footer({className:e}),...t}),H.displayName=`Modal.Footer`,$e=e=>(0,P.jsx)(j,{"data-slot":`modal-close`,...e}),$e.displayName=`Modal.Close`;try{Modal.Root.displayName=`Modal.Root`,Modal.Root.__docgenInfo={description:'Root container of a dialog that interrupts the flow — confirmations, forms,\nand detail views. It owns the modal\'s open state, controlled via\n`open`/`onOpenChange` or uncontrolled via `defaultOpen`/`Trigger`. Built on\nRadix UI Dialog, so focus trapping, scroll locking, `Escape`/overlay\ndismissal, and ARIA wiring come for free.\n\nCompose `Root` with `Content` (surface, `size` md/lg), and fill it with\n`Title` (built-in X button), `Body` (scrollable), and `Footer` (right-aligned\nactions). Close from inside with `Close asChild` around your cancel button.\n\nFor a modal the user has to answer, pass `variant="alert"` to `Content`:\n`Escape`, the overlay click and the X button all stop closing it, and it is\nannounced as an `alertdialog`.',displayName:`Modal.Root`,props:{}}}catch{}try{Modal.Trigger.displayName=`Modal.Trigger`,Modal.Trigger.__docgenInfo={description:"Button that opens the Modal. Pass `asChild` to delegate rendering to a\ncustom element (e.g. a `Button`) while inheriting Radix's wiring.",displayName:`Modal.Trigger`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{R.displayName=`modalRecipe`,R.__docgenInfo={description:``,displayName:`modalRecipe`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"lg"`}]}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{Modal.Content.displayName=`Modal.Content`,Modal.Content.__docgenInfo={description:'The modal surface, portalled over a dimmed overlay and centered in the\nviewport. Focus is trapped inside, `Escape` and overlay clicks close it,\nand body scroll is locked while open. Labelled by `Modal.Title`\nautomatically; pass `aria-label` for the rare titleless modal.\n\n`variant="alert"` turns off every implicit way out — `Escape`, the overlay\nclick, and the X button in `Modal.Title` — leaving only the footer actions.',displayName:`Modal.Content`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}},size:{defaultValue:null,description:"Width of the modal. Defaults to `'md'` (540px); `'lg'` is 720px.\nBoth shrink to the viewport on small screens.",name:`size`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"lg"`}]}},variant:{defaultValue:{value:`dialog`},description:"`'dialog'` (default) is dismissable: `Escape`, an overlay click, and the\nX button in `Modal.Title` all close it. `'alert'` removes all three, so\nthe only way out is one of the buttons in `Modal.Footer`, and exposes\n`role=\"alertdialog\"` to assistive technology. Use it when dismissing\nwithout choosing would leave the user stuck or lose their work.",name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"dialog"`},{value:`"alert"`}]}}}}}catch{}try{Modal.Title.displayName=`Modal.Title`,Modal.Title.__docgenInfo={description:'Heading row of the modal with a built-in close (X) button. Radix wires it\nas the modal\'s accessible name via `aria-labelledby`. The X button is\nomitted inside a `Modal.Content` with `variant="alert"`.',displayName:`Modal.Title`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{Modal.Body.displayName=`Modal.Body`,Modal.Body.__docgenInfo={description:"Scrollable content area of the modal. Focusable (`tabIndex 0`) so keyboard\nusers can scroll overflowing content with the arrow keys.",displayName:`Modal.Body`,props:{}}}catch{}try{Modal.Footer.displayName=`Modal.Footer`,Modal.Footer.__docgenInfo={description:`Right-aligned action row at the bottom of the modal.`,displayName:`Modal.Footer`,props:{}}}catch{}try{Modal.Close.displayName=`Modal.Close`,Modal.Close.__docgenInfo={description:"Closes the modal when activated. Pass `asChild` to wrap your own button —\nthe idiomatic replacement for the legacy `{({ close }) => …}` render prop.",displayName:`Modal.Close`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}})),U,tt=e((()=>{et(),U={Root:F,Trigger:I,Content:B,Title:V,Body:Qe,Footer:H,Close:$e}})),nt,W,G,K,q,J,rt,Y,it,X,Z,Q,$,at;e((()=>{nt=t(n(),1),tt(),ne(),W=r(),{expect:G,userEvent:K,waitFor:q,within:J}=__STORYBOOK_MODULE_TEST__,rt={title:`Components/Modal`,component:U.Root,tags:[`autodocs`],parameters:{docs:{description:{component:'Modal is a compound dialog built on Radix UI: `Root` owns the open state,\n`Content` is the centered surface (`size` md/lg), and `Title`/`Body`/`Footer`\nstructure it. Close it with `Escape`, the overlay, the X button, or a\n`Modal.Close asChild` around your own button.\n\n`Content` also takes `variant="alert"` for the modal the user has to answer:\nit drops all three implicit ways out and is announced as an `alertdialog`.'}}}},Y={render:()=>(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{asChild:!0,children:(0,W.jsx)(f,{variant:`secondary`,children:`Delete carrier`})}),(0,W.jsxs)(U.Content,{children:[(0,W.jsx)(U.Title,{children:`Delete carrier`}),(0,W.jsx)(U.Body,{children:(0,W.jsx)(`p`,{children:`This will remove the carrier from your agency. This action cannot be undone.`})}),(0,W.jsxs)(U.Footer,{children:[(0,W.jsx)(U.Close,{asChild:!0,children:(0,W.jsx)(f,{variant:`ghost`,children:`Cancel`})}),(0,W.jsx)(f,{variant:`primary`,children:`Delete`})]})]})]}),play:async({canvasElement:e})=>{let t=J(e),n=J(document.body);await K.click(t.getByRole(`button`,{name:/delete carrier/i}));let r=await n.findByRole(`dialog`,{name:/delete carrier/i});await q(()=>G(r).toBeVisible()),await G(n.getByText(/cannot be undone/i)).toBeVisible(),await K.click(n.getByRole(`button`,{name:/cancel/i})),await q(()=>G(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},it=()=>{let[e,t]=(0,nt.useState)(!1);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(f,{variant:`secondary`,onClick:()=>t(!0),children:`Open controlled`}),(0,W.jsx)(U.Root,{open:e,onOpenChange:t,children:(0,W.jsxs)(U.Content,{children:[(0,W.jsx)(U.Title,{children:`Controlled modal`}),(0,W.jsx)(U.Body,{children:(0,W.jsx)(`p`,{children:`The open state lives in the consumer.`})}),(0,W.jsx)(U.Footer,{children:(0,W.jsx)(f,{variant:`primary`,onClick:()=>t(!1),children:`Done`})})]})})]})},X={render:()=>(0,W.jsx)(it,{}),play:async({canvasElement:e})=>{let t=J(e),n=J(document.body);await K.click(t.getByRole(`button`,{name:/open controlled/i}));let r=await n.findByRole(`dialog`,{name:/controlled modal/i});await q(()=>G(r).toBeVisible()),await K.keyboard(`{Escape}`),await q(()=>G(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},Z={render:()=>(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{asChild:!0,children:(0,W.jsx)(f,{variant:`secondary`,children:`Open large`})}),(0,W.jsxs)(U.Content,{size:`lg`,children:[(0,W.jsx)(U.Title,{children:`Large modal`}),(0,W.jsx)(U.Body,{children:(0,W.jsx)(`p`,{children:"Use `lg` for wide content like tables or side-by-side forms."})})]})]})},Q={render:()=>(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{asChild:!0,children:(0,W.jsx)(f,{variant:`secondary`,children:`Open scrollable`})}),(0,W.jsxs)(U.Content,{children:[(0,W.jsx)(U.Title,{children:`Terms and conditions`}),(0,W.jsx)(U.Body,{children:Array.from({length:24},(e,t)=>(0,W.jsxs)(`p`,{className:`mb-4`,children:[`Section `,t+1,`: agents shall maintain active licensure in every state where they transact business, and notify the marketplace of any change in appointment status.`]},t))}),(0,W.jsx)(U.Footer,{children:(0,W.jsx)(U.Close,{asChild:!0,children:(0,W.jsx)(f,{variant:`primary`,children:`Accept`})})})]})]})},$={render:()=>(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{asChild:!0,children:(0,W.jsx)(f,{variant:`secondary`,children:`Open alert`})}),(0,W.jsxs)(U.Content,{variant:`alert`,children:[(0,W.jsx)(U.Title,{children:`Complete your Docusign integration`}),(0,W.jsx)(U.Body,{children:(0,W.jsx)(`p`,{children:`To enable your integration, please authorize access to your Docusign account.`})}),(0,W.jsxs)(U.Footer,{children:[(0,W.jsx)(U.Close,{asChild:!0,children:(0,W.jsx)(f,{variant:`ghost`,children:`Not now`})}),(0,W.jsx)(f,{variant:`primary`,children:`Authorize`})]})]})]}),play:async({canvasElement:e})=>{let t=J(e),n=J(document.body);await K.click(t.getByRole(`button`,{name:`Open alert`}));let r=await n.findByRole(`alertdialog`,{name:`Complete your Docusign integration`});await q(()=>G(r).toBeVisible()),await G(n.queryByRole(`button`,{name:`Close`})).not.toBeInTheDocument(),await K.keyboard(`{Escape}`),await G(r).toBeVisible(),await K.click(document.querySelector(`[data-slot="modal-overlay"]`)),await G(r).toBeVisible(),await K.click(n.getByRole(`button`,{name:`Not now`})),await q(()=>G(n.queryByRole(`alertdialog`)).not.toBeInTheDocument())}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Delete carrier</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Delete carrier</Modal.Title>
                <Modal.Body>
                    <p>This will remove the carrier from your agency. This action cannot be undone.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Close asChild>
                        <Button variant="ghost">Cancel</Button>
                    </Modal.Close>
                    <Button variant="primary">Delete</Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /delete carrier/i
    }));
    const dialog = await body.findByRole('dialog', {
      name: /delete carrier/i
    });
    await waitFor(() => expect(dialog).toBeVisible());
    await expect(body.getByText(/cannot be undone/i)).toBeVisible();
    await userEvent.click(body.getByRole('button', {
      name: /cancel/i
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  }
}`,...Y.parameters?.docs?.source},description:{story:`Trigger-driven modal: open it, then dismiss with the footer's Cancel.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /open controlled/i
    }));
    const dialog = await body.findByRole('dialog', {
      name: /controlled modal/i
    });
    await waitFor(() => expect(dialog).toBeVisible());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  }
}`,...X.parameters?.docs?.source},description:{story:"Controlled with `open`/`onOpenChange` — the dominant pattern in both apps. Also closes on `Escape`.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Open large</Button>
            </Modal.Trigger>
            <Modal.Content size="lg">
                <Modal.Title>Large modal</Modal.Title>
                <Modal.Body>
                    <p>Use \`lg\` for wide content like tables or side-by-side forms.</p>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
}`,...Z.parameters?.docs?.source},description:{story:'`size="lg"` widens the surface to 720px; `md` (default) is 540px.',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Open scrollable</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Terms and conditions</Modal.Title>
                <Modal.Body>
                    {Array.from({
          length: 24
        }, (_, i) => <p key={i} className="mb-4">
                            Section {i + 1}: agents shall maintain active licensure in every state where they
                            transact business, and notify the marketplace of any change in appointment status.
                        </p>)}
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Close asChild>
                        <Button variant="primary">Accept</Button>
                    </Modal.Close>
                </Modal.Footer>
            </Modal.Content>
        </Modal.Root>
}`,...Q.parameters?.docs?.source},description:{story:"Long content scrolls inside `Body` while title and footer stay pinned.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Open alert</Button>
            </Modal.Trigger>
            <Modal.Content variant="alert">
                <Modal.Title>Complete your Docusign integration</Modal.Title>
                <Modal.Body>
                    <p>To enable your integration, please authorize access to your Docusign account.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Close asChild>
                        <Button variant="ghost">Not now</Button>
                    </Modal.Close>
                    <Button variant="primary">Authorize</Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open alert'
    }));
    const dialog = await body.findByRole('alertdialog', {
      name: 'Complete your Docusign integration'
    });
    await waitFor(() => expect(dialog).toBeVisible());
    await expect(body.queryByRole('button', {
      name: 'Close'
    })).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(dialog).toBeVisible();
    await userEvent.click(document.querySelector('[data-slot="modal-overlay"]')!);
    await expect(dialog).toBeVisible();
    await userEvent.click(body.getByRole('button', {
      name: 'Not now'
    }));
    await waitFor(() => expect(body.queryByRole('alertdialog')).not.toBeInTheDocument());
  }
}`,...$.parameters?.docs?.source},description:{story:'`variant="alert"` for a decision the user cannot skip: `Escape` and overlay\nclicks are ignored, `Modal.Title` renders no X button, and the surface is\nannounced as an `alertdialog`. Only the footer actions close it.',...$.parameters?.docs?.description}}},at=[`Default`,`Controlled`,`Large`,`ScrollableBody`,`Alert`]}))();export{$ as Alert,X as Controlled,Y as Default,Z as Large,Q as ScrollableBody,at as __namedExportsOrder,rt as default};