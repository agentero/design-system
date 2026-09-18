import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-B783Ax66.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-BrKziXJV.js";import{n as o,t as s}from"./dist-BwVje-qJ.js";import{n as c,t as l}from"./dist-xs6gOf1u.js";import{t as u}from"./button-XcOe0b8s.js";import{t as d}from"./button-vcR4pkyW.js";import{i as f,n as p,r as m,t as ee}from"./es2015-CkjkZrt8.js";import{i as te,n as ne,r as h,t as re}from"./dist-uKMtJN8C2.js";import{n as ie,t as ae}from"./dist-lkv0_Wl4.js";import{r as oe,t as se}from"./dist-DiakMPae.js";import{i as ce,n as le,r as ue,t as de}from"./dist-DPyCjqcx2.js";import{a as fe,i as pe,n as me,o as he,r as ge,t as _e}from"./dist-DD1__gKY.js";import{a as ve,i as ye,n as be,o as xe,r as Se,t as g}from"./modal-D6otNsnZ.js";function Ce(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function we(...e){return t=>{let n=!1,r=e.map(e=>{let r=Ce(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Ce(e[t],null)}}}}function _(...e){return Te.useCallback(we(...e),e)}var Te,Ee=e((()=>{Te=t(n(),1)}));function De(e){let t=v.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];je(r)&&typeof y==`function`&&(r=y(r._payload)),v.Children.forEach(r,e=>{if(Ae(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;je(n)&&typeof y==`function`&&(n=y(n._payload)),a=Pe(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=v.cloneElement(a,void 0,s):!o&&v.Children.count(r)===1&&v.isValidElement(r)&&(a=r);let c=a?ke(a):void 0,l=_(n,c);if(!a){if(r||r===0)throw Error(o?Le(e):Ie(e));return r}let u=Oe(i,a.props??{});return a.type!==v.Fragment&&(u.ref=n?l:c),v.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function Oe(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function ke(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ae(e){return v.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Ne}function je(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Fe&&`_payload`in e&&Me(e._payload)}function Me(e){return typeof e==`object`&&!!e&&`then`in e}var v,Ne,Pe,Fe,Ie,Le,y,Re=e((()=>{v=t(n(),1),Ee(),Ne=Symbol.for(`radix.slottable`),Pe=(e,t)=>{if(`child`in e.props){let t=e.props.child;return v.isValidElement(t)?v.cloneElement(t,void 0,e.props.children(t.props.children)):null}return v.isValidElement(t)?t:null},Fe=Symbol.for(`react.lazy`),Ie=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Le=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,y=v.use}));function ze(e){return e?`open`:`closed`}var b,x,S,C,Be,w,Ve,T,E,D,O,k,A,j,He,Ue,We,M,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot=e((()=>{b=t(n(),1),te(),Ee(),ie(),ce(),Se(),xe(),s(),he(),le(),ne(),oe(),Re(),a(),p(),m(),x=r(),S=`Popover`,[C,Be]=ae(S,[fe]),w=fe(),[Ve,T]=C(S),E=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:a,onOpenChange:s,modal:c=!1}=e,l=w(t),u=b.useRef(null),[d,f]=b.useState(!1),[p,m]=i({prop:r,defaultProp:a??!1,onChange:s,caller:S});return(0,x.jsx)(pe,{...l,children:(0,x.jsx)(Ve,{scope:t,contentId:o(),triggerRef:u,open:p,onOpenChange:m,onOpenToggle:b.useCallback(()=>m(e=>!e),[m]),hasCustomAnchor:d,onCustomAnchorAdd:b.useCallback(()=>f(!0),[]),onCustomAnchorRemove:b.useCallback(()=>f(!1),[]),modal:c,children:n})})},E.displayName=S,D=`PopoverAnchor`,O=b.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=T(D,n),a=w(n),{onCustomAnchorAdd:o,onCustomAnchorRemove:s}=i;return b.useEffect(()=>(o(),()=>s()),[o,s]),(0,x.jsx)(_e,{...a,...r,ref:t})}),O.displayName=D,k=`PopoverTrigger`,A=b.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=T(k,n),a=w(n),o=_(t,i.triggerRef),s=(0,x.jsx)(se.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":ze(i.open),...r,ref:o,onClick:h(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,x.jsx)(_e,{asChild:!0,...a,children:s})}),A.displayName=k,j=`PopoverPortal`,[He,Ue]=C(j,{forceMount:void 0}),We=e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=T(j,t);return(0,x.jsx)(He,{scope:t,forceMount:n,children:(0,x.jsx)(re,{present:n||a.open,children:(0,x.jsx)(de,{asChild:!0,container:i,children:r})})})},We.displayName=j,M=`PopoverContent`,Ge=b.forwardRef((e,t)=>{let n=Ue(M,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=T(M,e.__scopePopover);return(0,x.jsx)(re,{present:r||a.open,children:a.modal?(0,x.jsx)(qe,{...i,ref:t}):(0,x.jsx)(Je,{...i,ref:t})})}),Ge.displayName=M,Ke=De(`PopoverContent.RemoveScroll`),qe=b.forwardRef((e,t)=>{let n=T(M,e.__scopePopover),r=b.useRef(null),i=_(t,r),a=b.useRef(!1);return b.useEffect(()=>{let e=r.current;if(e)return ee(e)},[]),(0,x.jsx)(f,{as:Ke,allowPinchZoom:!0,children:(0,x.jsx)(Ye,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;a.current=t.button===2||n},{checkForDefaultPrevented:!1}),onFocusOutside:h(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),Je=b.forwardRef((e,t)=>{let n=T(M,e.__scopePopover),r=b.useRef(!1),i=b.useRef(!1);return(0,x.jsx)(Ye,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),Ye=b.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,...d}=e,f=T(M,n),p=w(n);return ye(),(0,x.jsx)(ve,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,x.jsx)(ue,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,x.jsx)(ge,{"data-state":ze(f.open),role:`dialog`,id:f.contentId,...p,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})}),Xe=`PopoverClose`,Ze=b.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=T(Xe,n);return(0,x.jsx)(se.button,{type:`button`,...r,ref:t,onClick:h(e.onClick,()=>i.onOpenChange(!1))})}),Ze.displayName=Xe,Qe=`PopoverArrow`,$e=b.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=w(n);return(0,x.jsx)(me,{...i,...r,ref:t})}),$e.displayName=Qe,et=E,tt=O,nt=A,rt=We,it=Ge,at=Ze})),N,P,F,I,L,R,z,B,st=e((()=>{ot(),l(),N=r(),P=e=>(0,N.jsx)(et,{"data-slot":`popover-root`,...e}),P.displayName=`Popover.Root`,F=e=>(0,N.jsx)(nt,{"data-slot":`popover-trigger`,...e}),F.displayName=`Popover.Trigger`,I=e=>(0,N.jsx)(tt,{"data-slot":`popover-anchor`,...e}),I.displayName=`Popover.Anchor`,L=e=>(0,N.jsx)(at,{"data-slot":`popover-close`,...e}),L.displayName=`Popover.Close`,R=rt,z=c({base:[`z-(--z-index-top-layer) rounded-md bg-bg-default-base-primary px-2 py-3 shadow-md`,`border border-border-default-base-primary`,`will-change-[transform,opacity]`,`origin-(--radix-popover-content-transform-origin)`,`data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top`,`data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right`,`data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left`,`data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom`,`data-[state=closed]:animate-dropdown-slide-out`,`motion-reduce:animate-none!`]}),B=({className:e,sideOffset:t=8,...n})=>(0,N.jsx)(rt,{children:(0,N.jsx)(it,{"data-slot":`popover-content`,sideOffset:t,className:z({className:e}),...n})}),B.displayName=`Popover.Content`;try{P.displayName=`Popover.Root`,P.__docgenInfo={description:"Root of a non-modal floating surface anchored to a trigger, built on Radix\nPopover. Compose `Root` with `Trigger` / `Content`, plus optional `Anchor`,\n`Close`, and `Portal`. Use for rich interactive overlays (forms, filters,\npickers); prefer `Tooltip` for text hints and `DropdownMenu` for menus.",displayName:`Popover.Root`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{summary:`Root provider for a floating interactive overlay`,see:`{@link https://www.radix-ui.com/primitives/docs/components/popover Radix UI Popover}`,example:`\`\`\`tsx
import { Popover } from '@agentero/design-system/popover';

<Popover.Root>
  <Popover.Trigger asChild>
    <Button>Filters</Button>
  </Popover.Trigger>
  <Popover.Content align="start">
    <FiltersForm />
  </Popover.Content>
</Popover.Root>
\`\`\``}}}catch{}try{F.displayName=`Popover.Trigger`,F.__docgenInfo={description:``,displayName:`Popover.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{I.displayName=`Popover.Anchor`,I.__docgenInfo={description:``,displayName:`Popover.Anchor`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{L.displayName=`Popover.Close`,L.__docgenInfo={description:``,displayName:`Popover.Close`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{R.displayName=`Portal`,R.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{z.displayName=`popoverRecipe`,z.__docgenInfo={description:``,displayName:`popoverRecipe`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{B.displayName=`Popover.Content`,B.__docgenInfo={description:``,displayName:`Popover.Content`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),V,ct=e((()=>{st(),V={Root:P,Trigger:F,Anchor:I,Close:L,Portal:R,Content:B}})),H,U,W,G,K,lt,q,J,Y,X,Z,Q,$,ut;e((()=>{ct(),d(),be(),H=r(),{expect:U,userEvent:W,waitFor:G,within:K}=__STORYBOOK_MODULE_TEST__,lt={title:`Components/Popover`,component:V.Root,tags:[`autodocs`],decorators:[e=>(0,H.jsx)(`div`,{className:`flex min-h-60 items-center justify-center p-10`,children:(0,H.jsx)(e,{})})],parameters:{docs:{description:{component:"Popover is a non-modal floating surface anchored to a trigger, used for\nrich interactive overlays such as forms, filters, and pickers. Compose it\nfrom `Root` / `Trigger` / `Content`, plus optional `Anchor` and `Close`.\nBuilt on Radix UI's Popover primitive, so focus management, dismissal, and\ncollision detection come for free."}}}},q={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(u,{variant:`secondary`,children:`Open popover`})}),(0,H.jsx)(V.Content,{children:(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`This carrier is appointed for 3 lines of business.`})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body),r=t.getByRole(`button`,{name:/open popover/i});await U(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument(),await W.click(r);let i=await n.findByText(/3 lines of business/i);await U(i).toBeInTheDocument(),await U(i.closest(`[data-slot="popover-content"]`)).toHaveAttribute(`data-state`,`open`),await W.keyboard(`{Escape}`),await G(()=>U(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument())}},J={render:()=>(0,H.jsx)(`div`,{className:`grid grid-cols-2 gap-6`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(u,{variant:`secondary`,children:e})}),(0,H.jsx)(V.Content,{side:e,children:(0,H.jsxs)(`p`,{className:`text-sm text-text-default-base-primary`,children:[`Opens on `,e]})})]},e))})},Y={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(u,{variant:`secondary`,children:`Rename`})}),(0,H.jsx)(V.Content,{align:`start`,children:(0,H.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,H.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-text-default-base-primary`,children:[`New name`,(0,H.jsx)(`input`,{type:`text`,defaultValue:`Untitled`,className:`rounded-md border border-border-default-base-primary px-2 py-1 text-sm`})]}),(0,H.jsx)(V.Close,{asChild:!0,children:(0,H.jsx)(u,{variant:`primary`,size:`sm`,children:`Save`})})]})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body);await W.click(t.getByRole(`button`,{name:/rename/i})),await U(await n.findByRole(`textbox`)).toBeInTheDocument(),await W.click(n.getByRole(`button`,{name:/save/i})),await G(()=>U(n.queryByRole(`textbox`)).not.toBeInTheDocument())}},X={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,H.jsx)(V.Anchor,{className:`rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary`,children:`Anchored here`}),(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(u,{variant:`secondary`,children:`Toggle from below`})})]}),(0,H.jsx)(V.Content,{side:`top`,children:(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Positioned against the anchor`})})]})},Z=e=>[...document.body.children].findIndex(t=>t.contains(e)),Q=e=>getComputedStyle(document.body.children[Z(e)]).zIndex,$={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(u,{variant:`secondary`,children:`Renewal 2026`})}),(0,H.jsx)(V.Content,{align:`start`,children:(0,H.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Applied to 12 contracts across 3 carriers.`}),(0,H.jsxs)(g.Root,{children:[(0,H.jsx)(g.Trigger,{asChild:!0,children:(0,H.jsx)(u,{variant:`secondary`,size:`sm`,children:`Delete tag`})}),(0,H.jsxs)(g.Content,{children:[(0,H.jsx)(g.Title,{children:`Delete this tag?`}),(0,H.jsx)(g.Description,{children:`It will be removed from the 12 contracts that carry it.`}),(0,H.jsxs)(g.Footer,{children:[(0,H.jsx)(g.Close,{asChild:!0,children:(0,H.jsx)(u,{variant:`ghost`,children:`Cancel`})}),(0,H.jsx)(u,{variant:`primary`,children:`Delete`})]})]})]})]})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body);await W.click(t.getByRole(`button`,{name:`Renewal 2026`}));let r=await n.findByText(/12 contracts across 3 carriers/i);await W.click(n.getByRole(`button`,{name:`Delete tag`}));let i=await n.findByRole(`dialog`,{name:`Delete this tag?`});await G(()=>U(i).toBeVisible()),await U(r).toBeInTheDocument(),await U(Q(i)).toBe(Q(r)),await U(Z(i)).toBeGreaterThan(Z(r))}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Open popover</Button>
            </Popover.Trigger>
            <Popover.Content>
                <p className="text-sm text-text-default-base-primary">
                    This carrier is appointed for 3 lines of business.
                </p>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: /open popover/i
    });
    await expect(body.queryByText(/3 lines of business/i)).not.toBeInTheDocument();
    await userEvent.click(trigger);
    const content = await body.findByText(/3 lines of business/i);
    await expect(content).toBeInTheDocument();
    await expect(content.closest('[data-slot="popover-content"]')).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByText(/3 lines of business/i)).not.toBeInTheDocument());
  }
}`,...q.parameters?.docs?.source},description:{story:`A minimal Popover: a trigger button that reveals a short text surface on
click and dismisses on outside click or Escape.

@summary Basic click-to-open popover surface`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6">
            {(['top', 'right', 'bottom', 'left'] as const).map(side => <Popover.Root key={side}>
                    <Popover.Trigger asChild>
                        <Button variant="secondary">{side}</Button>
                    </Popover.Trigger>
                    <Popover.Content side={side}>
                        <p className="text-sm text-text-default-base-primary">Opens on {side}</p>
                    </Popover.Content>
                </Popover.Root>)}
        </div>
}`,...J.parameters?.docs?.source},description:{story:`\`side\` sets the preferred placement; Radix flips it on viewport collision.

@summary Popover placement on each of the four sides`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Rename</Button>
            </Popover.Trigger>
            <Popover.Content align="start">
                <div className="flex flex-col gap-3">
                    <label className="flex flex-col gap-1 text-sm text-text-default-base-primary">
                        New name
                        <input type="text" defaultValue="Untitled" className="rounded-md border border-border-default-base-primary px-2 py-1 text-sm" />
                    </label>
                    <Popover.Close asChild>
                        <Button variant="primary" size="sm">
                            Save
                        </Button>
                    </Popover.Close>
                </div>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /rename/i
    }));
    const input = await body.findByRole('textbox');
    await expect(input).toBeInTheDocument();
    await userEvent.click(body.getByRole('button', {
      name: /save/i
    }));
    await waitFor(() => expect(body.queryByRole('textbox')).not.toBeInTheDocument());
  }
}`,...Y.parameters?.docs?.source},description:{story:"Rich interactive content — the primary reason to reach for a Popover over a\nTooltip. A `Close` inside the surface dismisses it after submitting.\n\n@summary Popover holding an interactive form with a `Close` action",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <div className="flex flex-col items-center gap-4">
                <Popover.Anchor className="rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary">
                    Anchored here
                </Popover.Anchor>
                <Popover.Trigger asChild>
                    <Button variant="secondary">Toggle from below</Button>
                </Popover.Trigger>
            </div>
            <Popover.Content side="top">
                <p className="text-sm text-text-default-base-primary">Positioned against the anchor</p>
            </Popover.Content>
        </Popover.Root>
}`,...X.parameters?.docs?.source},description:{story:"`Anchor` positions the Content against an element other than the Trigger —\nuseful when the visual anchor differs from the toggle button.\n\n@summary Popover positioned against a separate `Anchor` element",...X.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Renewal 2026</Button>
            </Popover.Trigger>
            <Popover.Content align="start">
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-text-default-base-primary">
                        Applied to 12 contracts across 3 carriers.
                    </p>
                    <Modal.Root>
                        <Modal.Trigger asChild>
                            <Button variant="secondary" size="sm">
                                Delete tag
                            </Button>
                        </Modal.Trigger>
                        <Modal.Content>
                            <Modal.Title>Delete this tag?</Modal.Title>
                            <Modal.Description>
                                It will be removed from the 12 contracts that carry it.
                            </Modal.Description>
                            <Modal.Footer>
                                <Modal.Close asChild>
                                    <Button variant="ghost">Cancel</Button>
                                </Modal.Close>
                                <Button variant="primary">Delete</Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Root>
                </div>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Renewal 2026'
    }));
    const popover = await body.findByText(/12 contracts across 3 carriers/i);
    await userEvent.click(body.getByRole('button', {
      name: 'Delete tag'
    }));
    const dialog = await body.findByRole('dialog', {
      name: 'Delete this tag?'
    });
    await waitFor(() => expect(dialog).toBeVisible());

    // The popover is still there — the modal covers it rather than replacing it.
    await expect(popover).toBeInTheDocument();
    await expect(zIndexOf(dialog)).toBe(zIndexOf(popover));
    await expect(layerOf(dialog)).toBeGreaterThan(layerOf(popover));
  }
}`,...$.parameters?.docs?.source},description:{story:`A Modal opened from a button inside the Popover. Both share
\`--z-index-top-layer\`, so the modal opens last and paints over the popover
while the overlay dims it. The popover stays mounted underneath, which keeps
focus returning to its trigger once the modal closes.

@summary Modal opened from inside a Popover paints above it`,...$.parameters?.docs?.description}}},ut=[`Default`,`Sides`,`WithForm`,`WithAnchor`,`ModalFromInsidePopover`]}))();export{q as Default,$ as ModalFromInsidePopover,J as Sides,X as WithAnchor,Y as WithForm,ut as __namedExportsOrder,lt as default};