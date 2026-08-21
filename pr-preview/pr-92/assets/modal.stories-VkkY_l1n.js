import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-BnjMBw3d.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-DfNTs7J8.js";import{n as o,t as s}from"./dist-DAa7113K.js";import{n as c,t as l}from"./dist-Bo3MAkam.js";import{n as u,t as d}from"./dist-xs6gOf1u.js";import{n as f,t as ee}from"./lib-Dkaf_tmd.js";import{t as p}from"./button-P3X4rgdH.js";import{t as te}from"./button-BbS_r7IB.js";import{a as ne,i as re,n as ie,t as ae}from"./es2015-C5psI1re.js";import{i as oe,n as se,r as m,t as h}from"./dist-CfWfWwu42.js";import{n as ce,t as le}from"./dist-N-qy6R0v2.js";import{r as ue,t as g}from"./dist-BHZVtncG2.js";import{a as de,i as fe,n as pe,r as me,t as he}from"./dist-DWdszVaC.js";import{i as ge,n as _e,r as ve,t as ye}from"./dist-BLa7j4Iz.js";function be(e){let t=_.forwardRef((t,n)=>{let{children:r,...a}=t,o=null,s=!1,c=[];we(r)&&typeof v==`function`&&(r=v(r._payload)),_.Children.forEach(r,e=>{if(Ce(e)){s=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;we(n)&&typeof v==`function`&&(n=v(n._payload)),o=De(t,n),c.push(o?.props?.children)}else c.push(e)}),o?o=_.cloneElement(o,void 0,c):!s&&_.Children.count(r)===1&&_.isValidElement(r)&&(o=r);let l=o?Se(o):void 0,u=i(n,l);if(!o){if(r||r===0)throw Error(s?Ae(e):ke(e));return r}let d=xe(a,o.props??{});return o.type!==_.Fragment&&(d.ref=n?u:l),_.cloneElement(o,d)});return t.displayName=`${e}.Slot`,t}function xe(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function Se(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ce(e){return _.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Ee}function we(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Oe&&`_payload`in e&&Te(e._payload)}function Te(e){return typeof e==`object`&&!!e&&`then`in e}var _,Ee,De,Oe,ke,Ae,v,je=e((()=>{_=t(n(),1),a(),Ee=Symbol.for(`radix.slottable`),De=(e,t)=>{if(`child`in e.props){let t=e.props.child;return _.isValidElement(t)?_.cloneElement(t,void 0,e.props.children(t.props.children)):null}return _.isValidElement(t)?t:null},Oe=Symbol.for(`react.lazy`),ke=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Ae=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,v=_.use}));function Me(e){return e?`open`:`closed`}var y,b,x,S,Ne,Pe,C,Fe,Ie,Le,w,Re,T,E,D,ze,Be,Ve,O,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,k,Ze=e((()=>{y=t(n(),1),oe(),a(),ce(),l(),s(),pe(),ge(),de(),se(),ue(),ye(),ae(),ne(),je(),b=r(),x=`Dialog`,[S,Ne]=le(x),[Pe,C]=S(x),Fe=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:s=!0}=e,l=y.useRef(null),u=y.useRef(null),[d,f]=o({prop:r,defaultProp:i??!1,onChange:a,caller:x});return(0,b.jsx)(Pe,{scope:t,triggerRef:l,contentRef:u,contentId:c(),titleId:c(),descriptionId:c(),open:d,onOpenChange:f,onOpenToggle:y.useCallback(()=>f(e=>!e),[f]),modal:s,children:n})},Fe.displayName=x,Ie=`DialogTrigger`,Le=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=C(Ie,n),o=i(t,a.triggerRef);return(0,b.jsx)(g.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":Me(a.open),...r,ref:o,onClick:m(e.onClick,a.onOpenToggle)})}),Le.displayName=Ie,w=`DialogPortal`,[Re,T]=S(w,{forceMount:void 0}),E=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:i}=e,a=C(w,t);return(0,b.jsx)(Re,{scope:t,forceMount:n,children:y.Children.map(r,e=>(0,b.jsx)(h,{present:n||a.open,children:(0,b.jsx)(fe,{asChild:!0,container:i,children:e})}))})},E.displayName=w,D=`DialogOverlay`,ze=y.forwardRef((e,t)=>{let n=T(D,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=C(D,e.__scopeDialog);return a.modal?(0,b.jsx)(h,{present:r||a.open,children:(0,b.jsx)(Ve,{...i,ref:t})}):null}),ze.displayName=D,Be=be(`DialogOverlay.RemoveScroll`),Ve=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=C(D,n),o=i(t,me());return(0,b.jsx)(ie,{as:Be,allowPinchZoom:!0,shards:[a.contentRef],children:(0,b.jsx)(g.div,{"data-state":Me(a.open),...r,ref:o,style:{pointerEvents:`auto`,...r.style}})})}),O=`DialogContent`,He=y.forwardRef((e,t)=>{let n=T(O,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=C(O,e.__scopeDialog);return(0,b.jsx)(h,{present:r||a.open,children:a.modal?(0,b.jsx)(Ue,{...i,ref:t}):(0,b.jsx)(We,{...i,ref:t})})}),He.displayName=O,Ue=y.forwardRef((e,t)=>{let n=C(O,e.__scopeDialog),r=y.useRef(null),a=i(t,n.contentRef,r);return y.useEffect(()=>{let e=r.current;if(e)return re(e)},[]),(0,b.jsx)(Ge,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:m(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:m(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;(t.button===2||n)&&e.preventDefault()}),onFocusOutside:m(e.onFocusOutside,e=>e.preventDefault())})}),We=y.forwardRef((e,t)=>{let n=C(O,e.__scopeDialog),r=y.useRef(!1),i=y.useRef(!1);return(0,b.jsx)(Ge,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),Ge=y.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,...o}=e,s=C(O,n);return _e(),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(ve,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,b.jsx)(he,{role:`dialog`,id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":Me(s.open),...o,ref:t,deferPointerDownOutside:!0,onDismiss:()=>s.onOpenChange(!1)})})})}),Ke=`DialogTitle`,qe=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(Ke,n);return(0,b.jsx)(g.h2,{id:i.titleId,...r,ref:t})}),qe.displayName=Ke,Je=`DialogDescription`,Ye=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(Je,n);return(0,b.jsx)(g.p,{id:i.descriptionId,...r,ref:t})}),Ye.displayName=Je,Xe=`DialogClose`,k=y.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(Xe,n);return(0,b.jsx)(g.button,{type:`button`,...r,ref:t,onClick:m(e.onClick,()=>i.onOpenChange(!1))})}),k.displayName=Xe})),A,Qe,$e=e((()=>{A=r(),Qe=()=>(0,A.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,A.jsx)(`path`,{d:`M12 13.0538L6.92689 18.1269C6.78844 18.2654 6.6144 18.3362 6.40479 18.3394C6.19519 18.3426 6.01795 18.2718 5.87309 18.1269C5.7282 17.982 5.65576 17.8064 5.65576 17.6C5.65576 17.3936 5.7282 17.218 5.87309 17.0731L10.9462 12L5.87309 6.92689C5.73462 6.78844 5.66379 6.6144 5.66059 6.40479C5.65737 6.19519 5.7282 6.01795 5.87309 5.87309C6.01795 5.7282 6.19359 5.65576 6.39999 5.65576C6.60639 5.65576 6.78202 5.7282 6.92689 5.87309L12 10.9462L17.0731 5.87309C17.2115 5.73462 17.3856 5.66379 17.5952 5.66059C17.8048 5.65737 17.982 5.7282 18.1269 5.87309C18.2718 6.01795 18.3442 6.19359 18.3442 6.39999C18.3442 6.60639 18.2718 6.78202 18.1269 6.92689L13.0538 12L18.1269 17.0731C18.2654 17.2115 18.3362 17.3856 18.3394 17.5952C18.3426 17.8048 18.2718 17.982 18.1269 18.1269C17.982 18.2718 17.8064 18.3442 17.6 18.3442C17.3936 18.3442 17.218 18.2718 17.0731 18.1269L12 13.0538Z`})})})),j,M,N,P,F,I,L,R,z,B,V,H,U,et=e((()=>{j=t(n(),1),Ze(),d(),ee(),te(),$e(),M=r(),N=e=>(0,M.jsx)(Fe,{"data-slot":`modal-root`,...e}),N.displayName=`Modal.Root`,P=e=>(0,M.jsx)(Le,{"data-slot":`modal-trigger`,...e}),P.displayName=`Modal.Trigger`,F=(0,j.createContext)(`dialog`),I=u({slots:{overlay:[`fixed inset-0 z-(--z-index-overlay) bg-overlay-dark-300`,`data-[state=open]:animate-modal-overlay-in data-[state=closed]:animate-modal-overlay-out`,`motion-reduce:animate-none!`],content:[`fixed top-1/2 left-1/2 z-(--z-index-modal) -translate-x-1/2 -translate-y-1/2`,`flex max-h-[calc(100dvh-4rem)] w-[calc(100vw-2rem)] flex-col gap-6`,`rounded-lg bg-bg-default-base-primary py-10 shadow-sm outline-none`,`data-[state=open]:animate-modal-content-in data-[state=closed]:animate-modal-content-out`,`motion-reduce:animate-none!`],title:`flex items-start justify-between gap-2 px-10 text-[1.375rem] leading-7 font-semibold text-text-default-base-primary`,body:`-my-1 max-h-[60vh] overflow-y-auto px-10 py-1`,footer:`flex shrink-0 items-center justify-end gap-2 px-10`},variants:{size:{md:{content:`max-w-[33.75rem]`},lg:{content:`max-w-[45rem]`}}},defaultVariants:{size:`md`}}),L=I(),R=({className:e,size:t,variant:n=`dialog`,children:r,onEscapeKeyDown:i,onPointerDownOutside:a,...o})=>{let s=I({size:t}),c=n===`alert`;return(0,M.jsx)(F.Provider,{value:n,children:(0,M.jsxs)(E,{children:[(0,M.jsx)(ze,{"data-slot":`modal-overlay`,className:s.overlay()}),(0,M.jsx)(He,{"data-slot":`modal-content`,role:c?`alertdialog`:`dialog`,"aria-describedby":void 0,className:f(s.content(),e),onEscapeKeyDown:e=>{i?.(e),c&&e.preventDefault()},onPointerDownOutside:e=>{a?.(e),c&&e.preventDefault()},...o,children:r})]})})},R.displayName=`Modal.Content`,z=({className:e,children:t,...n})=>{let r=(0,j.useContext)(F);return(0,M.jsxs)(`div`,{"data-slot":`modal-title`,className:L.title({className:e}),children:[(0,M.jsx)(qe,{...n,children:t}),r===`dialog`&&(0,M.jsx)(k,{asChild:!0,children:(0,M.jsx)(p,{variant:`ghost`,size:`sm`,"aria-label":`Close`,className:`-my-2 -mr-6 shrink-0`,children:(0,M.jsx)(Qe,{})})})]})},z.displayName=`Modal.Title`,B=({className:e,...t})=>(0,M.jsx)(`div`,{"data-slot":`modal-body`,tabIndex:0,className:L.body({className:e}),...t}),B.displayName=`Modal.Body`,V=({className:e,...t})=>(0,M.jsx)(`div`,{"data-slot":`modal-footer`,className:L.footer({className:e}),...t}),V.displayName=`Modal.Footer`,H=e=>(0,M.jsx)(k,{"data-slot":`modal-close`,...e}),H.displayName=`Modal.Close`,U={Root:N,Trigger:P,Content:R,Title:z,Body:B,Footer:V,Close:H};try{I.displayName=`modalRecipe`,I.__docgenInfo={description:``,displayName:`modalRecipe`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"lg"`}]}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{U.displayName=`Modal`,U.__docgenInfo={description:'Modal is the compound component for dialogs that interrupt the flow —\nconfirmations, forms, and detail views. Built on Radix UI Dialog, so focus\ntrapping, scroll locking, `Escape`/overlay dismissal, and ARIA wiring come\nfor free.\n\nCompose `Root` (open state) with `Content` (surface, `size` md/lg), and\nfill it with `Title` (built-in X button), `Body` (scrollable), and `Footer`\n(right-aligned actions). Open it controlled (`open`/`onOpenChange`) or via\n`Trigger`; close from inside with `Close asChild` around your cancel button.\n\nFor a modal the user has to answer, pass `variant="alert"` to `Content`:\n`Escape`, the overlay click and the X button all stop closing it, and it is\nannounced as an `alertdialog`.',displayName:`Modal`,props:{}}}catch{}try{U.Root.displayName=`Modal.Root`,U.Root.__docgenInfo={description:``,displayName:`Modal.Root`,props:{}}}catch{}try{U.Trigger.displayName=`Modal.Trigger`,U.Trigger.__docgenInfo={description:``,displayName:`Modal.Trigger`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{U.Content.displayName=`Modal.Content`,U.Content.__docgenInfo={description:``,displayName:`Modal.Content`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}},size:{defaultValue:null,description:"Width of the modal. Defaults to `'md'` (540px); `'lg'` is 720px.\nBoth shrink to the viewport on small screens.",name:`size`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"lg"`}]}},variant:{defaultValue:{value:`dialog`},description:"`'dialog'` (default) is dismissable: `Escape`, an overlay click, and the\nX button in `Modal.Title` all close it. `'alert'` removes all three, so\nthe only way out is one of the buttons in `Modal.Footer`, and exposes\n`role=\"alertdialog\"` to assistive technology. Use it when dismissing\nwithout choosing would leave the user stuck or lose their work.",name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"alert"`},{value:`"dialog"`}]}}}}}catch{}try{U.Title.displayName=`Modal.Title`,U.Title.__docgenInfo={description:``,displayName:`Modal.Title`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{U.Body.displayName=`Modal.Body`,U.Body.__docgenInfo={description:``,displayName:`Modal.Body`,props:{}}}catch{}try{U.Footer.displayName=`Modal.Footer`,U.Footer.__docgenInfo={description:``,displayName:`Modal.Footer`,props:{}}}catch{}try{U.Close.displayName=`Modal.Close`,U.Close.__docgenInfo={description:``,displayName:`Modal.Close`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}})),tt,W,G,K,q,J,nt,Y,rt,X,Z,Q,$,it;e((()=>{tt=t(n(),1),te(),et(),W=r(),{expect:G,userEvent:K,waitFor:q,within:J}=__STORYBOOK_MODULE_TEST__,nt={title:`Components/Modal`,component:U.Root,tags:[`autodocs`],parameters:{docs:{description:{component:'Modal is a compound dialog built on Radix UI: `Root` owns the open state,\n`Content` is the centered surface (`size` md/lg), and `Title`/`Body`/`Footer`\nstructure it. Close it with `Escape`, the overlay, the X button, or a\n`Modal.Close asChild` around your own button.\n\n`Content` also takes `variant="alert"` for the modal the user has to answer:\nit drops all three implicit ways out and is announced as an `alertdialog`.'}}}},Y={render:()=>(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{asChild:!0,children:(0,W.jsx)(p,{variant:`secondary`,children:`Delete carrier`})}),(0,W.jsxs)(U.Content,{children:[(0,W.jsx)(U.Title,{children:`Delete carrier`}),(0,W.jsx)(U.Body,{children:(0,W.jsx)(`p`,{children:`This will remove the carrier from your agency. This action cannot be undone.`})}),(0,W.jsxs)(U.Footer,{children:[(0,W.jsx)(U.Close,{asChild:!0,children:(0,W.jsx)(p,{variant:`ghost`,children:`Cancel`})}),(0,W.jsx)(p,{variant:`primary`,children:`Delete`})]})]})]}),play:async({canvasElement:e})=>{let t=J(e),n=J(document.body);await K.click(t.getByRole(`button`,{name:/delete carrier/i}));let r=await n.findByRole(`dialog`,{name:/delete carrier/i});await q(()=>G(r).toBeVisible()),await G(n.getByText(/cannot be undone/i)).toBeVisible(),await K.click(n.getByRole(`button`,{name:/cancel/i})),await q(()=>G(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},rt=()=>{let[e,t]=(0,tt.useState)(!1);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(p,{variant:`secondary`,onClick:()=>t(!0),children:`Open controlled`}),(0,W.jsx)(U.Root,{open:e,onOpenChange:t,children:(0,W.jsxs)(U.Content,{children:[(0,W.jsx)(U.Title,{children:`Controlled modal`}),(0,W.jsx)(U.Body,{children:(0,W.jsx)(`p`,{children:`The open state lives in the consumer.`})}),(0,W.jsx)(U.Footer,{children:(0,W.jsx)(p,{variant:`primary`,onClick:()=>t(!1),children:`Done`})})]})})]})},X={render:()=>(0,W.jsx)(rt,{}),play:async({canvasElement:e})=>{let t=J(e),n=J(document.body);await K.click(t.getByRole(`button`,{name:/open controlled/i}));let r=await n.findByRole(`dialog`,{name:/controlled modal/i});await q(()=>G(r).toBeVisible()),await K.keyboard(`{Escape}`),await q(()=>G(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},Z={render:()=>(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{asChild:!0,children:(0,W.jsx)(p,{variant:`secondary`,children:`Open large`})}),(0,W.jsxs)(U.Content,{size:`lg`,children:[(0,W.jsx)(U.Title,{children:`Large modal`}),(0,W.jsx)(U.Body,{children:(0,W.jsx)(`p`,{children:"Use `lg` for wide content like tables or side-by-side forms."})})]})]})},Q={render:()=>(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{asChild:!0,children:(0,W.jsx)(p,{variant:`secondary`,children:`Open scrollable`})}),(0,W.jsxs)(U.Content,{children:[(0,W.jsx)(U.Title,{children:`Terms and conditions`}),(0,W.jsx)(U.Body,{children:Array.from({length:24},(e,t)=>(0,W.jsxs)(`p`,{className:`mb-4`,children:[`Section `,t+1,`: agents shall maintain active licensure in every state where they transact business, and notify the marketplace of any change in appointment status.`]},t))}),(0,W.jsx)(U.Footer,{children:(0,W.jsx)(U.Close,{asChild:!0,children:(0,W.jsx)(p,{variant:`primary`,children:`Accept`})})})]})]})},$={render:()=>(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{asChild:!0,children:(0,W.jsx)(p,{variant:`secondary`,children:`Open alert`})}),(0,W.jsxs)(U.Content,{variant:`alert`,children:[(0,W.jsx)(U.Title,{children:`Complete your Docusign integration`}),(0,W.jsx)(U.Body,{children:(0,W.jsx)(`p`,{children:`To enable your integration, please authorize access to your Docusign account.`})}),(0,W.jsxs)(U.Footer,{children:[(0,W.jsx)(U.Close,{asChild:!0,children:(0,W.jsx)(p,{variant:`ghost`,children:`Not now`})}),(0,W.jsx)(p,{variant:`primary`,children:`Authorize`})]})]})]}),play:async({canvasElement:e})=>{let t=J(e),n=J(document.body);await K.click(t.getByRole(`button`,{name:`Open alert`}));let r=await n.findByRole(`alertdialog`,{name:`Complete your Docusign integration`});await q(()=>G(r).toBeVisible()),await G(n.queryByRole(`button`,{name:`Close`})).not.toBeInTheDocument(),await K.keyboard(`{Escape}`),await G(r).toBeVisible(),await K.click(document.querySelector(`[data-slot="modal-overlay"]`)),await G(r).toBeVisible(),await K.click(n.getByRole(`button`,{name:`Not now`})),await q(()=>G(n.queryByRole(`alertdialog`)).not.toBeInTheDocument())}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:'`variant="alert"` for a decision the user cannot skip: `Escape` and overlay\nclicks are ignored, `Modal.Title` renders no X button, and the surface is\nannounced as an `alertdialog`. Only the footer actions close it.',...$.parameters?.docs?.description}}},it=[`Default`,`Controlled`,`Large`,`ScrollableBody`,`Alert`]}))();export{$ as Alert,X as Controlled,Y as Default,Z as Large,Q as ScrollableBody,it as __namedExportsOrder,nt as default};