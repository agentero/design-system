import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-DC_hz1Cy.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-C7m40iI3.js";import{n as o,t as s}from"./dist-BxnbYTXT.js";import{n as c,t as l}from"./dist-Bb34G7TI.js";import{n as ee,t as u}from"./dist-xs6gOf1u.js";import{n as d,t as te}from"./lib-Dkaf_tmd.js";import{t as f}from"./button-DUmAt8dM.js";import{t as ne}from"./button-D8zvpYw2.js";import{i as re,n as ie,r as ae,t as oe}from"./es2015-BjjzgRkS.js";import{i as se,n as ce,r as p,t as m}from"./dist-CMX8xpKn2.js";import{n as le,t as ue}from"./dist-DWu9c6h42.js";import{r as de,t as h}from"./dist-QgBxZeIM2.js";import{a as fe,i as pe,n as me,r as he,t as ge}from"./dist-CaYFC7yD2.js";import{i as _e,n as ve,r as ye,t as be}from"./dist-6oTM5Dn6.js";function xe(e){let t=g.forwardRef((t,n)=>{let{children:r,...a}=t,o=null,s=!1,c=[];Te(r)&&typeof _==`function`&&(r=_(r._payload)),g.Children.forEach(r,e=>{if(we(e)){s=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;Te(n)&&typeof _==`function`&&(n=_(n._payload)),o=Oe(t,n),c.push(o?.props?.children)}else c.push(e)}),o?o=g.cloneElement(o,void 0,c):!s&&g.Children.count(r)===1&&g.isValidElement(r)&&(o=r);let l=o?Ce(o):void 0,ee=i(n,l);if(!o){if(r||r===0)throw Error(s?je(e):Ae(e));return r}let u=Se(a,o.props??{});return o.type!==g.Fragment&&(u.ref=n?ee:l),g.cloneElement(o,u)});return t.displayName=`${e}.Slot`,t}function Se(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function Ce(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function we(e){return g.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===De}function Te(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===ke&&`_payload`in e&&Ee(e._payload)}function Ee(e){return typeof e==`object`&&!!e&&`then`in e}var g,De,Oe,ke,Ae,je,_,Me=e((()=>{g=t(n(),1),a(),De=Symbol.for(`radix.slottable`),Oe=(e,t)=>{if(`child`in e.props){let t=e.props.child;return g.isValidElement(t)?g.cloneElement(t,void 0,e.props.children(t.props.children)):null}return g.isValidElement(t)?t:null},ke=Symbol.for(`react.lazy`),Ae=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,je=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,_=g.use}));function v(e){return e?`open`:`closed`}var y,b,x,S,Ne,Pe,C,w,T,E,D,Fe,O,k,A,j,Ie,Le,M,N,Re,ze,P,Be,F,I,Ve,He,L,Ue=e((()=>{y=t(n(),1),se(),a(),le(),l(),s(),me(),_e(),fe(),ce(),de(),be(),ae(),ie(),Me(),b=r(),x=`Dialog`,[S,Ne]=ue(x),[Pe,C]=S(x),w=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:s=!0}=e,l=y.useRef(null),ee=y.useRef(null),[u,d]=o({prop:r,defaultProp:i??!1,onChange:a,caller:x});return(0,b.jsx)(Pe,{scope:t,triggerRef:l,contentRef:ee,contentId:c(),titleId:c(),descriptionId:c(),open:u,onOpenChange:d,onOpenToggle:y.useCallback(()=>d(e=>!e),[d]),modal:s,children:n})},w.displayName=x,T=`DialogTrigger`,E=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=C(T,n),o=i(t,a.triggerRef);return(0,b.jsx)(h.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":v(a.open),...r,ref:o,onClick:p(e.onClick,a.onOpenToggle)})}),E.displayName=T,D=`DialogPortal`,[Fe,O]=S(D,{forceMount:void 0}),k=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:i}=e,a=C(D,t);return(0,b.jsx)(Fe,{scope:t,forceMount:n,children:y.Children.map(r,e=>(0,b.jsx)(m,{present:n||a.open,children:(0,b.jsx)(pe,{asChild:!0,container:i,children:e})}))})},k.displayName=D,A=`DialogOverlay`,j=y.forwardRef((e,t)=>{let n=O(A,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=C(A,e.__scopeDialog);return a.modal?(0,b.jsx)(m,{present:r||a.open,children:(0,b.jsx)(Le,{...i,ref:t})}):null}),j.displayName=A,Ie=xe(`DialogOverlay.RemoveScroll`),Le=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=C(A,n),o=i(t,he());return(0,b.jsx)(re,{as:Ie,allowPinchZoom:!0,shards:[a.contentRef],children:(0,b.jsx)(h.div,{"data-state":v(a.open),...r,ref:o,style:{pointerEvents:`auto`,...r.style}})})}),M=`DialogContent`,N=y.forwardRef((e,t)=>{let n=O(M,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=C(M,e.__scopeDialog);return(0,b.jsx)(m,{present:r||a.open,children:a.modal?(0,b.jsx)(Re,{...i,ref:t}):(0,b.jsx)(ze,{...i,ref:t})})}),N.displayName=M,Re=y.forwardRef((e,t)=>{let n=C(M,e.__scopeDialog),r=y.useRef(null),a=i(t,n.contentRef,r);return y.useEffect(()=>{let e=r.current;if(e)return oe(e)},[]),(0,b.jsx)(P,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:p(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;(t.button===2||n)&&e.preventDefault()}),onFocusOutside:p(e.onFocusOutside,e=>e.preventDefault())})}),ze=y.forwardRef((e,t)=>{let n=C(M,e.__scopeDialog),r=y.useRef(!1),i=y.useRef(!1);return(0,b.jsx)(P,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),P=y.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,...o}=e,s=C(M,n);return ve(),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(ye,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,b.jsx)(ge,{role:`dialog`,id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":v(s.open),...o,ref:t,deferPointerDownOutside:!0,onDismiss:()=>s.onOpenChange(!1)})})})}),Be=`DialogTitle`,F=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(Be,n);return(0,b.jsx)(h.h2,{id:i.titleId,...r,ref:t})}),F.displayName=Be,I=`DialogDescription`,Ve=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(I,n);return(0,b.jsx)(h.p,{id:i.descriptionId,...r,ref:t})}),Ve.displayName=I,He=`DialogClose`,L=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(He,n);return(0,b.jsx)(h.button,{type:`button`,...r,ref:t,onClick:p(e.onClick,()=>i.onOpenChange(!1))})}),L.displayName=He})),We,Ge,Ke=e((()=>{We=r(),Ge=()=>(0,We.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,We.jsx)(`path`,{d:`M12 13.0538L6.92689 18.1269C6.78844 18.2654 6.6144 18.3362 6.40479 18.3394C6.19519 18.3426 6.01795 18.2718 5.87309 18.1269C5.7282 17.982 5.65576 17.8064 5.65576 17.6C5.65576 17.3936 5.7282 17.218 5.87309 17.0731L10.9462 12L5.87309 6.92689C5.73462 6.78844 5.66379 6.6144 5.66059 6.40479C5.65737 6.19519 5.7282 6.01795 5.87309 5.87309C6.01795 5.7282 6.19359 5.65576 6.39999 5.65576C6.60639 5.65576 6.78202 5.7282 6.92689 5.87309L12 10.9462L17.0731 5.87309C17.2115 5.73462 17.3856 5.66379 17.5952 5.66059C17.8048 5.65737 17.982 5.7282 18.1269 5.87309C18.2718 6.01795 18.3442 6.19359 18.3442 6.39999C18.3442 6.60639 18.2718 6.78202 18.1269 6.92689L13.0538 12L18.1269 17.0731C18.2654 17.2115 18.3362 17.3856 18.3394 17.5952C18.3426 17.8048 18.2718 17.982 18.1269 18.1269C17.982 18.2718 17.8064 18.3442 17.6 18.3442C17.3936 18.3442 17.218 18.2718 17.0731 18.1269L12 13.0538Z`})})})),qe,R,Je,Ye,Xe,z,B,Ze,Qe,$e,et,tt,V,H,nt=e((()=>{qe=t(n(),1),Ue(),u(),te(),ne(),Ke(),R=r(),Je=e=>(0,R.jsx)(w,{"data-slot":`modal-root`,...e}),Je.displayName=`Modal.Root`,Ye=e=>(0,R.jsx)(E,{"data-slot":`modal-trigger`,...e}),Ye.displayName=`Modal.Trigger`,Xe=(0,qe.createContext)(`dialog`),z=ee({slots:{overlay:[`fixed inset-0 z-(--z-index-overlay) bg-overlay-dark-300`,`data-[state=open]:animate-modal-overlay-in data-[state=closed]:animate-modal-overlay-out`,`motion-reduce:animate-none!`],content:[`fixed top-1/2 left-1/2 z-(--z-index-modal) -translate-x-1/2 -translate-y-1/2`,`flex max-h-[calc(100dvh-4rem)] w-[calc(100vw-2rem)] flex-col gap-6`,`rounded-lg bg-bg-default-base-primary py-10 shadow-sm outline-none`,`data-[state=open]:animate-modal-content-in data-[state=closed]:animate-modal-content-out`,`motion-reduce:animate-none!`],title:`flex items-center justify-between gap-2 px-10 text-[1.375rem] leading-7 font-semibold text-text-default-base-primary`,description:`-mt-4 px-10 text-base text-text-default-base-primary`,body:`-my-1 max-h-[60vh] overflow-y-auto px-10 py-1`,footer:`flex shrink-0 items-center justify-end gap-4 px-10`},variants:{size:{md:{content:`max-w-[33.75rem]`},lg:{content:`max-w-[45rem]`}}},defaultVariants:{size:`md`}}),B=z(),Ze=({className:e,size:t,variant:n=`dialog`,children:r,onEscapeKeyDown:i,onPointerDownOutside:a,...o})=>{let s=z({size:t}),c=n===`alert`;return(0,R.jsx)(Xe.Provider,{value:n,children:(0,R.jsxs)(k,{children:[(0,R.jsx)(j,{"data-slot":`modal-overlay`,className:s.overlay()}),(0,R.jsx)(N,{"data-slot":`modal-content`,role:c?`alertdialog`:`dialog`,className:d(s.content(),e),onEscapeKeyDown:e=>{i?.(e),c&&e.preventDefault()},onPointerDownOutside:e=>{a?.(e),c&&e.preventDefault()},...o,children:r})]})})},Ze.displayName=`Modal.Content`,Qe=({className:e,children:t,...n})=>{let r=(0,qe.useContext)(Xe);return(0,R.jsxs)(`div`,{"data-slot":`modal-title`,className:B.title({className:e}),children:[(0,R.jsx)(F,{...n,children:t}),r===`dialog`&&(0,R.jsx)(L,{asChild:!0,children:(0,R.jsx)(f,{variant:`ghost`,size:`sm`,"aria-label":`Close`,className:`shrink-0`,children:(0,R.jsx)(Ge,{})})})]})},Qe.displayName=`Modal.Title`,$e=({className:e,...t})=>(0,R.jsx)(Ve,{"data-slot":`modal-description`,className:B.description({className:e}),...t}),$e.displayName=`Modal.Description`,et=({className:e,...t})=>(0,R.jsx)(`div`,{"data-slot":`modal-body`,tabIndex:0,className:B.body({className:e}),...t}),et.displayName=`Modal.Body`,tt=({className:e,...t})=>(0,R.jsx)(`div`,{"data-slot":`modal-footer`,className:B.footer({className:e}),...t}),tt.displayName=`Modal.Footer`,V=e=>(0,R.jsx)(L,{"data-slot":`modal-close`,...e}),V.displayName=`Modal.Close`,H={Root:Je,Trigger:Ye,Content:Ze,Title:Qe,Description:$e,Body:et,Footer:tt,Close:V};try{z.displayName=`modalRecipe`,z.__docgenInfo={description:``,displayName:`modalRecipe`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"lg"`}]}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{H.displayName=`Modal`,H.__docgenInfo={description:'Modal is the compound component for dialogs that interrupt the flow —\nconfirmations, forms, and detail views. Built on Radix UI Dialog, so focus\ntrapping, scroll locking, `Escape`/overlay dismissal, and ARIA wiring come\nfor free.\n\nCompose `Root` (open state) with `Content` (surface, `size` md/lg), and\nfill it with `Title` (built-in X button), an optional `Description` right\nbelow it, `Body` (scrollable), and `Footer` (right-aligned actions). Open\nit controlled (`open`/`onOpenChange`) or via `Trigger`; close from inside\nwith `Close asChild` around your cancel button.\n\nFor a modal the user has to answer, pass `variant="alert"` to `Content`:\n`Escape`, the overlay click and the X button all stop closing it, and it is\nannounced as an `alertdialog`.',displayName:`Modal`,props:{}}}catch{}try{H.Root.displayName=`Modal.Root`,H.Root.__docgenInfo={description:``,displayName:`Modal.Root`,props:{}}}catch{}try{H.Trigger.displayName=`Modal.Trigger`,H.Trigger.__docgenInfo={description:``,displayName:`Modal.Trigger`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{H.Content.displayName=`Modal.Content`,H.Content.__docgenInfo={description:``,displayName:`Modal.Content`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}},size:{defaultValue:null,description:"Width of the modal. Defaults to `'md'` (540px); `'lg'` is 720px.\nBoth shrink to the viewport on small screens.",name:`size`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"lg"`}]}},variant:{defaultValue:{value:`dialog`},description:"`'dialog'` (default) is dismissable: `Escape`, an overlay click, and the\nX button in `Modal.Title` all close it. `'alert'` removes all three, so\nthe only way out is one of the buttons in `Modal.Footer`, and exposes\n`role=\"alertdialog\"` to assistive technology. Use it when dismissing\nwithout choosing would leave the user stuck or lose their work.",name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"dialog"`},{value:`"alert"`}]}}}}}catch{}try{H.Title.displayName=`Modal.Title`,H.Title.__docgenInfo={description:``,displayName:`Modal.Title`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{H.Description.displayName=`Modal.Description`,H.Description.__docgenInfo={description:``,displayName:`Modal.Description`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{H.Body.displayName=`Modal.Body`,H.Body.__docgenInfo={description:``,displayName:`Modal.Body`,props:{}}}catch{}try{H.Footer.displayName=`Modal.Footer`,H.Footer.__docgenInfo={description:``,displayName:`Modal.Footer`,props:{}}}catch{}try{H.Close.displayName=`Modal.Close`,H.Close.__docgenInfo={description:``,displayName:`Modal.Close`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}})),rt,U,W,G,K,q,it,J,Y,at,X,Z,Q,$,ot;e((()=>{rt=t(n(),1),ne(),nt(),U=r(),{expect:W,userEvent:G,waitFor:K,within:q}=__STORYBOOK_MODULE_TEST__,it={title:`Components/Modal`,component:H.Root,tags:[`autodocs`],parameters:{docs:{description:{component:'Modal is a compound dialog built on Radix UI: `Root` owns the open state,\n`Content` is the centered surface (`size` md/lg), and `Title`/`Body`/`Footer`\nstructure it. Close it with `Escape`, the overlay, the X button, or a\n`Modal.Close asChild` around your own button.\n\n`Content` also takes `variant="alert"` for the modal the user has to answer:\nit drops all three implicit ways out and is announced as an `alertdialog`.'}}}},J={render:()=>(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(f,{variant:`secondary`,children:`Delete carrier`})}),(0,U.jsxs)(H.Content,{children:[(0,U.jsx)(H.Title,{children:`Delete carrier`}),(0,U.jsx)(H.Body,{children:(0,U.jsx)(`p`,{children:`This will remove the carrier from your agency. This action cannot be undone.`})}),(0,U.jsxs)(H.Footer,{children:[(0,U.jsx)(H.Close,{asChild:!0,children:(0,U.jsx)(f,{variant:`ghost`,children:`Cancel`})}),(0,U.jsx)(f,{variant:`primary`,children:`Delete`})]})]})]}),play:async({canvasElement:e})=>{let t=q(e),n=q(document.body);await G.click(t.getByRole(`button`,{name:/delete carrier/i}));let r=await n.findByRole(`dialog`,{name:/delete carrier/i});await K(()=>W(r).toBeVisible()),await W(n.getByText(/cannot be undone/i)).toBeVisible(),await G.click(n.getByRole(`button`,{name:/cancel/i})),await K(()=>W(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},Y={render:()=>(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(f,{variant:`secondary`,children:`Delete carrier`})}),(0,U.jsxs)(H.Content,{children:[(0,U.jsx)(H.Title,{children:`Delete carrier`}),(0,U.jsx)(H.Description,{children:`This action cannot be undone.`}),(0,U.jsxs)(H.Footer,{children:[(0,U.jsx)(H.Close,{asChild:!0,children:(0,U.jsx)(f,{variant:`ghost`,children:`Cancel`})}),(0,U.jsx)(f,{variant:`primary`,children:`Delete`})]})]})]}),play:async({canvasElement:e})=>{let t=q(e),n=q(document.body);await G.click(t.getByRole(`button`,{name:/delete carrier/i}));let r=await n.findByRole(`dialog`,{name:/delete carrier/i});await K(()=>W(r).toBeVisible()),await W(r).toHaveAccessibleDescription(/cannot be undone/i)}},at=()=>{let[e,t]=(0,rt.useState)(!1);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(f,{variant:`secondary`,onClick:()=>t(!0),children:`Open controlled`}),(0,U.jsx)(H.Root,{open:e,onOpenChange:t,children:(0,U.jsxs)(H.Content,{children:[(0,U.jsx)(H.Title,{children:`Controlled modal`}),(0,U.jsx)(H.Body,{children:(0,U.jsx)(`p`,{children:`The open state lives in the consumer.`})}),(0,U.jsx)(H.Footer,{children:(0,U.jsx)(f,{variant:`primary`,onClick:()=>t(!1),children:`Done`})})]})})]})},X={render:()=>(0,U.jsx)(at,{}),play:async({canvasElement:e})=>{let t=q(e),n=q(document.body);await G.click(t.getByRole(`button`,{name:/open controlled/i}));let r=await n.findByRole(`dialog`,{name:/controlled modal/i});await K(()=>W(r).toBeVisible()),await G.keyboard(`{Escape}`),await K(()=>W(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},Z={render:()=>(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(f,{variant:`secondary`,children:`Open large`})}),(0,U.jsxs)(H.Content,{size:`lg`,children:[(0,U.jsx)(H.Title,{children:`Large modal`}),(0,U.jsx)(H.Body,{children:(0,U.jsx)(`p`,{children:"Use `lg` for wide content like tables or side-by-side forms."})})]})]})},Q={render:()=>(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(f,{variant:`secondary`,children:`Open scrollable`})}),(0,U.jsxs)(H.Content,{children:[(0,U.jsx)(H.Title,{children:`Terms and conditions`}),(0,U.jsx)(H.Body,{children:Array.from({length:24},(e,t)=>(0,U.jsxs)(`p`,{className:`mb-4`,children:[`Section `,t+1,`: agents shall maintain active licensure in every state where they transact business, and notify the marketplace of any change in appointment status.`]},t))}),(0,U.jsx)(H.Footer,{children:(0,U.jsx)(H.Close,{asChild:!0,children:(0,U.jsx)(f,{variant:`primary`,children:`Accept`})})})]})]})},$={render:()=>(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(f,{variant:`secondary`,children:`Open alert`})}),(0,U.jsxs)(H.Content,{variant:`alert`,children:[(0,U.jsx)(H.Title,{children:`Complete your Docusign integration`}),(0,U.jsx)(H.Body,{children:(0,U.jsx)(`p`,{children:`To enable your integration, please authorize access to your Docusign account.`})}),(0,U.jsxs)(H.Footer,{children:[(0,U.jsx)(H.Close,{asChild:!0,children:(0,U.jsx)(f,{variant:`ghost`,children:`Not now`})}),(0,U.jsx)(f,{variant:`primary`,children:`Authorize`})]})]})]}),play:async({canvasElement:e})=>{let t=q(e),n=q(document.body);await G.click(t.getByRole(`button`,{name:`Open alert`}));let r=await n.findByRole(`alertdialog`,{name:`Complete your Docusign integration`});await K(()=>W(r).toBeVisible()),await W(n.queryByRole(`button`,{name:`Close`})).not.toBeInTheDocument(),await G.keyboard(`{Escape}`),await W(r).toBeVisible(),await G.click(document.querySelector(`[data-slot="modal-overlay"]`)),await W(r).toBeVisible(),await G.click(n.getByRole(`button`,{name:`Not now`})),await K(()=>W(n.queryByRole(`alertdialog`)).not.toBeInTheDocument())}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Trigger-driven modal: open it, then dismiss with the footer's Cancel.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Delete carrier</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Delete carrier</Modal.Title>
                <Modal.Description>This action cannot be undone.</Modal.Description>
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
    await expect(dialog).toHaveAccessibleDescription(/cannot be undone/i);
  }
}`,...Y.parameters?.docs?.source},description:{story:"`Modal.Description` sits 0.5rem below `Modal.Title` and doubles as the accessible description.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:'`variant="alert"` for a decision the user cannot skip: `Escape` and overlay\nclicks are ignored, `Modal.Title` renders no X button, and the surface is\nannounced as an `alertdialog`. Only the footer actions close it.',...$.parameters?.docs?.description}}},ot=[`Default`,`WithDescription`,`Controlled`,`Large`,`ScrollableBody`,`Alert`]}))();export{$ as Alert,X as Controlled,J as Default,Z as Large,Q as ScrollableBody,Y as WithDescription,ot as __namedExportsOrder,it as default};