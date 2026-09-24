import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-BFwQyqPz.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./dist-Czf5MHxJ.js";import{n as o,t as s}from"./dist-DzBe92D-.js";import{n as c,t as l}from"./dist-C8AlzbfS.js";import{n as u,t as d}from"./button-CIZMSIF4.js";import{i as f,n as ee,r as p,t as te}from"./dist-CNnp7syP.js";import{n as ne,t as re}from"./dist-BYK1ACV5.js";import{r as ie,t as ae}from"./dist-B9GSXRg6.js";import{i as oe,n as se,r as ce,t as le}from"./dist-YHg_8xO6.js";import{a as ue,i as de,n as fe,o as pe,r as me,t as he}from"./dist-aoMC2vTY.js";import{a as ge,i as _e,n as ve,o as ye,r as be,t as m}from"./modal-BKRS_d1A.js";import{i as xe,n as Se,r as Ce,t as we}from"./es2015-Cu1n3Vyb.js";function Te(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Ee(...e){return t=>{let n=!1,r=e.map(e=>{let r=Te(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Te(e[t],null)}}}}function De(...e){return Oe.useCallback(Ee(...e),e)}var Oe;function ke(){return(ke=t((()=>{Oe=e(n(),1)})))()}function Ae(e){let t=h.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];Pe(r)&&typeof g==`function`&&(r=g(r._payload)),h.Children.forEach(r,e=>{if(Ne(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;Pe(n)&&typeof g==`function`&&(n=g(n._payload)),a=Le(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=h.cloneElement(a,void 0,s):!o&&h.Children.count(r)===1&&h.isValidElement(r)&&(a=r);let c=a?Me(a):void 0,l=De(n,c);if(!a){if(r||r===0)throw Error(o?Be(e):ze(e));return r}let u=je(i,a.props??{});return a.type!==h.Fragment&&(u.ref=n?l:c),h.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function je(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function Me(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ne(e){return h.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Ie}function Pe(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Re&&`_payload`in e&&Fe(e._payload)}function Fe(e){return typeof e==`object`&&!!e&&`then`in e}var h,Ie,Le,Re,ze,Be,g;function Ve(){return(Ve=t((()=>{h=e(n(),1),ke(),Ie=Symbol.for(`radix.slottable`),Le=(e,t)=>{if(`child`in e.props){let t=e.props.child;return h.isValidElement(t)?h.cloneElement(t,void 0,e.props.children(t.props.children)):null}return h.isValidElement(t)?t:null},Re=Symbol.for(`react.lazy`),ze=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Be=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,g=h.use})))()}function He(e){return e?`open`:`closed`}var _,v,y,b,Ue,x,We,S,C,w,T,E,D,O,Ge,Ke,k,A,j,qe,Je,Ye,M,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at;function ot(){return(ot=t((()=>{_=e(n(),1),f(),ke(),ne(),oe(),be(),ye(),s(),pe(),se(),ee(),ie(),Ve(),a(),Se(),xe(),v=r(),y=`Popover`,[b,Ue]=re(y,[ue]),x=ue(),[We,S]=b(y),C=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:a,onOpenChange:s,modal:c=!1}=e,l=x(t),u=_.useRef(null),[d,f]=_.useState(!1),[ee,p]=i({prop:r,defaultProp:a??!1,onChange:s,caller:y});return(0,v.jsx)(de,{...l,children:(0,v.jsx)(We,{scope:t,contentId:o(),triggerRef:u,open:ee,onOpenChange:p,onOpenToggle:_.useCallback(()=>p(e=>!e),[p]),hasCustomAnchor:d,onCustomAnchorAdd:_.useCallback(()=>f(!0),[]),onCustomAnchorRemove:_.useCallback(()=>f(!1),[]),modal:c,children:n})})},C.displayName=y,w=`PopoverAnchor`,T=_.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=S(w,n),a=x(n),{onCustomAnchorAdd:o,onCustomAnchorRemove:s}=i;return _.useEffect(()=>(o(),()=>s()),[o,s]),(0,v.jsx)(he,{...a,...r,ref:t})}),T.displayName=w,E=`PopoverTrigger`,D=_.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=S(E,n),a=x(n),o=De(t,i.triggerRef),s=(0,v.jsx)(ae.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":He(i.open),...r,ref:o,onClick:p(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,v.jsx)(he,{asChild:!0,...a,children:s})}),D.displayName=E,O=`PopoverPortal`,[Ge,Ke]=b(O,{forceMount:void 0}),k=e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=S(O,t);return(0,v.jsx)(Ge,{scope:t,forceMount:n,children:(0,v.jsx)(te,{present:n||a.open,children:(0,v.jsx)(le,{asChild:!0,container:i,children:r})})})},k.displayName=O,A=`PopoverContent`,j=_.forwardRef((e,t)=>{let n=Ke(A,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=S(A,e.__scopePopover);return(0,v.jsx)(te,{present:r||a.open,children:a.modal?(0,v.jsx)(Je,{...i,ref:t}):(0,v.jsx)(Ye,{...i,ref:t})})}),j.displayName=A,qe=Ae(`PopoverContent.RemoveScroll`),Je=_.forwardRef((e,t)=>{let n=S(A,e.__scopePopover),r=_.useRef(null),i=De(t,r),a=_.useRef(!1);return _.useEffect(()=>{let e=r.current;if(e)return we(e)},[]),(0,v.jsx)(Ce,{as:qe,allowPinchZoom:!0,children:(0,v.jsx)(M,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;a.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:p(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),Ye=_.forwardRef((e,t)=>{let n=S(A,e.__scopePopover),r=_.useRef(!1),i=_.useRef(!1);return(0,v.jsx)(M,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),M=_.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,...d}=e,f=S(A,n),ee=x(n);return _e(),(0,v.jsx)(ge,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,v.jsx)(ce,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,v.jsx)(me,{"data-state":He(f.open),role:`dialog`,id:f.contentId,...ee,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})}),Xe=`PopoverClose`,Ze=_.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=S(Xe,n);return(0,v.jsx)(ae.button,{type:`button`,...r,ref:t,onClick:p(e.onClick,()=>i.onOpenChange(!1))})}),Ze.displayName=Xe,Qe=`PopoverArrow`,$e=_.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=x(n);return(0,v.jsx)(fe,{...i,...r,ref:t})}),$e.displayName=Qe,et=C,tt=T,nt=D,rt=k,it=j,at=Ze})))()}var N,P,F,I,L,R,z,B;function st(){return(st=t((()=>{ot(),l(),N=r(),P=e=>(0,N.jsx)(et,{"data-slot":`popover-root`,...e}),P.displayName=`Popover.Root`,F=e=>(0,N.jsx)(nt,{"data-slot":`popover-trigger`,...e}),F.displayName=`Popover.Trigger`,I=e=>(0,N.jsx)(tt,{"data-slot":`popover-anchor`,...e}),I.displayName=`Popover.Anchor`,L=e=>(0,N.jsx)(at,{"data-slot":`popover-close`,...e}),L.displayName=`Popover.Close`,R=rt,z=c({base:[`z-(--z-index-top-layer) rounded-md bg-bg-default-base-primary px-2 py-3 shadow-md`,`border border-border-default-base-primary`,`will-change-[transform,opacity]`,`origin-(--radix-popover-content-transform-origin)`,`data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top`,`data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right`,`data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left`,`data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom`,`data-[state=closed]:animate-dropdown-slide-out`,`motion-reduce:animate-none!`]}),B=({className:e,sideOffset:t=8,...n})=>(0,N.jsx)(rt,{children:(0,N.jsx)(it,{"data-slot":`popover-content`,sideOffset:t,className:z({className:e}),...n})}),B.displayName=`Popover.Content`;try{P.displayName=`Popover.Root`,P.__docgenInfo={description:"Root of a non-modal floating surface anchored to a trigger, built on Radix\nPopover. Compose `Root` with `Trigger` / `Content`, plus optional `Anchor`,\n`Close`, and `Portal`. Use for rich interactive overlays (forms, filters,\npickers); prefer `Tooltip` for text hints and `DropdownMenu` for menus.",displayName:`Popover.Root`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{summary:`Root provider for a floating interactive overlay`,see:`{@link https://www.radix-ui.com/primitives/docs/components/popover Radix UI Popover}`,example:`\`\`\`tsx
import { Popover } from '@agentero/design-system/popover';

<Popover.Root>
  <Popover.Trigger asChild>
    <Button>Filters</Button>
  </Popover.Trigger>
  <Popover.Content align="start">
    <FiltersForm />
  </Popover.Content>
</Popover.Root>
\`\`\``}}}catch{}try{F.displayName=`Popover.Trigger`,F.__docgenInfo={description:``,displayName:`Popover.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{I.displayName=`Popover.Anchor`,I.__docgenInfo={description:``,displayName:`Popover.Anchor`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{L.displayName=`Popover.Close`,L.__docgenInfo={description:``,displayName:`Popover.Close`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{R.displayName=`Portal`,R.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{z.displayName=`popoverRecipe`,z.__docgenInfo={description:``,displayName:`popoverRecipe`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{B.displayName=`Popover.Content`,B.__docgenInfo={description:``,displayName:`Popover.Content`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var V;function ct(){return(ct=t((()=>{st(),V={Root:P,Trigger:F,Anchor:I,Close:L,Portal:R,Content:B}})))()}var H,U,W,G,K,lt,q,J,Y,X,Z,Q,$,ut;function dt(){return(dt=t((()=>{ct(),u(),ve(),H=r(),{expect:U,userEvent:W,waitFor:G,within:K}=__STORYBOOK_MODULE_TEST__,lt={title:`Components/Popover`,component:V.Root,tags:[`autodocs`],decorators:[e=>(0,H.jsx)(`div`,{className:`flex min-h-60 items-center justify-center p-10`,children:(0,H.jsx)(e,{})})],parameters:{docs:{description:{component:"Popover is a non-modal floating surface anchored to a trigger, used for\nrich interactive overlays such as forms, filters, and pickers. Compose it\nfrom `Root` / `Trigger` / `Content`, plus optional `Anchor` and `Close`.\nBuilt on Radix UI's Popover primitive, so focus management, dismissal, and\ncollision detection come for free."}}}},q={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:`Open popover`})}),(0,H.jsx)(V.Content,{children:(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`This carrier is appointed for 3 lines of business.`})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body),r=t.getByRole(`button`,{name:/open popover/i});await U(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument(),await W.click(r);let i=await n.findByText(/3 lines of business/i);await U(i).toBeInTheDocument(),await U(i.closest(`[data-slot="popover-content"]`)).toHaveAttribute(`data-state`,`open`),await W.keyboard(`{Escape}`),await G(()=>U(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument())}},J={render:()=>(0,H.jsx)(`div`,{className:`grid grid-cols-2 gap-6`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:e})}),(0,H.jsx)(V.Content,{side:e,children:(0,H.jsxs)(`p`,{className:`text-sm text-text-default-base-primary`,children:[`Opens on `,e]})})]},e))})},Y={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:`Rename`})}),(0,H.jsx)(V.Content,{align:`start`,children:(0,H.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,H.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-text-default-base-primary`,children:[`New name`,(0,H.jsx)(`input`,{type:`text`,defaultValue:`Untitled`,className:`rounded-md border border-border-default-base-primary px-2 py-1 text-sm`})]}),(0,H.jsx)(V.Close,{asChild:!0,children:(0,H.jsx)(d,{variant:`primary`,size:`sm`,children:`Save`})})]})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body);await W.click(t.getByRole(`button`,{name:/rename/i}));let r=await n.findByRole(`textbox`);await U(r).toBeInTheDocument(),await W.click(n.getByRole(`button`,{name:/save/i})),await G(()=>U(n.queryByRole(`textbox`)).not.toBeInTheDocument())}},X={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,H.jsx)(V.Anchor,{className:`rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary`,children:`Anchored here`}),(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:`Toggle from below`})})]}),(0,H.jsx)(V.Content,{side:`top`,children:(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Positioned against the anchor`})})]})},Z=e=>[...document.body.children].findIndex(t=>t.contains(e)),Q=e=>getComputedStyle(document.body.children[Z(e)]).zIndex,$={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:`Renewal 2026`})}),(0,H.jsx)(V.Content,{align:`start`,children:(0,H.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Applied to 12 contracts across 3 carriers.`}),(0,H.jsxs)(m.Root,{children:[(0,H.jsx)(m.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,size:`sm`,children:`Delete tag`})}),(0,H.jsxs)(m.Content,{children:[(0,H.jsx)(m.Title,{children:`Delete this tag?`}),(0,H.jsx)(m.Description,{children:`It will be removed from the 12 contracts that carry it.`}),(0,H.jsxs)(m.Footer,{children:[(0,H.jsx)(m.Close,{asChild:!0,children:(0,H.jsx)(d,{variant:`ghost`,children:`Cancel`})}),(0,H.jsx)(d,{variant:`primary`,children:`Delete`})]})]})]})]})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body);await W.click(t.getByRole(`button`,{name:`Renewal 2026`}));let r=await n.findByText(/12 contracts across 3 carriers/i);await W.click(n.getByRole(`button`,{name:`Delete tag`}));let i=await n.findByRole(`dialog`,{name:`Delete this tag?`});await G(()=>U(i).toBeVisible()),await U(r).toBeInTheDocument(),await U(Q(i)).toBe(Q(r)),await U(Z(i)).toBeGreaterThan(Z(r))}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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

@summary Modal opened from inside a Popover paints above it`,...$.parameters?.docs?.description}}},ut=[`Default`,`Sides`,`WithForm`,`WithAnchor`,`ModalFromInsidePopover`]})))()}dt();export{q as Default,$ as ModalFromInsidePopover,J as Sides,X as WithAnchor,Y as WithForm,ut as __namedExportsOrder,lt as default};