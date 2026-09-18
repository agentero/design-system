import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-B2pquosA.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-9Xx5NEAj.js";import{n as o,t as s}from"./dist-Dty3QTEl.js";import{n as c,t as l}from"./dist-xs6gOf1u.js";import{t as u}from"./button-BxC3DKUt.js";import{t as d}from"./button-DqkwLxjE.js";import{i as f,n as p,r as m,t as ee}from"./dist-MWShSgWJ.js";import{n as te,t as ne}from"./dist-CP36Fljv.js";import{r as re,t as ie}from"./dist-De4GoC0n2.js";import{i as ae,n as oe,r as se,t as ce}from"./dist-DzbStlGX2.js";import{a as le,i as ue,n as de,o as fe,r as pe,t as me}from"./dist-_wz0qihF2.js";import{i as he,n as ge,r as _e,t as ve}from"./es2015-ClxPXZwH.js";import{a as ye,i as be,n as xe,o as Se,r as Ce,t as h}from"./modal-C-1bFLP6.js";function we(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Te(...e){return t=>{let n=!1,r=e.map(e=>{let r=we(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():we(e[t],null)}}}}function g(...e){return Ee.useCallback(Te(...e),e)}var Ee,De=e((()=>{Ee=t(n(),1)}));function Oe(e){let t=_.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];Me(r)&&typeof v==`function`&&(r=v(r._payload)),_.Children.forEach(r,e=>{if(je(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;Me(n)&&typeof v==`function`&&(n=v(n._payload)),a=Fe(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=_.cloneElement(a,void 0,s):!o&&_.Children.count(r)===1&&_.isValidElement(r)&&(a=r);let c=a?Ae(a):void 0,l=g(n,c);if(!a){if(r||r===0)throw Error(o?Re(e):Le(e));return r}let u=ke(i,a.props??{});return a.type!==_.Fragment&&(u.ref=n?l:c),_.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function ke(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function Ae(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function je(e){return _.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Pe}function Me(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ie&&`_payload`in e&&Ne(e._payload)}function Ne(e){return typeof e==`object`&&!!e&&`then`in e}var _,Pe,Fe,Ie,Le,Re,v,ze=e((()=>{_=t(n(),1),De(),Pe=Symbol.for(`radix.slottable`),Fe=(e,t)=>{if(`child`in e.props){let t=e.props.child;return _.isValidElement(t)?_.cloneElement(t,void 0,e.props.children(t.props.children)):null}return _.isValidElement(t)?t:null},Ie=Symbol.for(`react.lazy`),Le=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Re=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,v=_.use}));function Be(e){return e?`open`:`closed`}var y,b,x,S,Ve,C,He,w,T,E,D,O,k,A,Ue,We,j,M,N,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at=e((()=>{y=t(n(),1),f(),De(),te(),ae(),Ce(),Se(),s(),fe(),oe(),p(),re(),ze(),a(),ge(),_e(),b=r(),x=`Popover`,[S,Ve]=ne(x,[le]),C=le(),[He,w]=S(x),T=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:a,onOpenChange:s,modal:c=!1}=e,l=C(t),u=y.useRef(null),[d,f]=y.useState(!1),[p,m]=i({prop:r,defaultProp:a??!1,onChange:s,caller:x});return(0,b.jsx)(ue,{...l,children:(0,b.jsx)(He,{scope:t,contentId:o(),triggerRef:u,open:p,onOpenChange:m,onOpenToggle:y.useCallback(()=>m(e=>!e),[m]),hasCustomAnchor:d,onCustomAnchorAdd:y.useCallback(()=>f(!0),[]),onCustomAnchorRemove:y.useCallback(()=>f(!1),[]),modal:c,children:n})})},T.displayName=x,E=`PopoverAnchor`,D=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=w(E,n),a=C(n),{onCustomAnchorAdd:o,onCustomAnchorRemove:s}=i;return y.useEffect(()=>(o(),()=>s()),[o,s]),(0,b.jsx)(me,{...a,...r,ref:t})}),D.displayName=E,O=`PopoverTrigger`,k=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=w(O,n),a=C(n),o=g(t,i.triggerRef),s=(0,b.jsx)(ie.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":Be(i.open),...r,ref:o,onClick:m(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,b.jsx)(me,{asChild:!0,...a,children:s})}),k.displayName=O,A=`PopoverPortal`,[Ue,We]=S(A,{forceMount:void 0}),j=e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=w(A,t);return(0,b.jsx)(Ue,{scope:t,forceMount:n,children:(0,b.jsx)(ee,{present:n||a.open,children:(0,b.jsx)(ce,{asChild:!0,container:i,children:r})})})},j.displayName=A,M=`PopoverContent`,N=y.forwardRef((e,t)=>{let n=We(M,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=w(M,e.__scopePopover);return(0,b.jsx)(ee,{present:r||a.open,children:a.modal?(0,b.jsx)(Ke,{...i,ref:t}):(0,b.jsx)(qe,{...i,ref:t})})}),N.displayName=M,Ge=Oe(`PopoverContent.RemoveScroll`),Ke=y.forwardRef((e,t)=>{let n=w(M,e.__scopePopover),r=y.useRef(null),i=g(t,r),a=y.useRef(!1);return y.useEffect(()=>{let e=r.current;if(e)return ve(e)},[]),(0,b.jsx)(he,{as:Ge,allowPinchZoom:!0,children:(0,b.jsx)(Je,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:m(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;a.current=t.button===2||n},{checkForDefaultPrevented:!1}),onFocusOutside:m(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),qe=y.forwardRef((e,t)=>{let n=w(M,e.__scopePopover),r=y.useRef(!1),i=y.useRef(!1);return(0,b.jsx)(Je,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),Je=y.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,...d}=e,f=w(M,n),p=C(n);return be(),(0,b.jsx)(ye,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,b.jsx)(se,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,b.jsx)(pe,{"data-state":Be(f.open),role:`dialog`,id:f.contentId,...p,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})}),Ye=`PopoverClose`,Xe=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=w(Ye,n);return(0,b.jsx)(ie.button,{type:`button`,...r,ref:t,onClick:m(e.onClick,()=>i.onOpenChange(!1))})}),Xe.displayName=Ye,Ze=`PopoverArrow`,Qe=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=C(n);return(0,b.jsx)(de,{...i,...r,ref:t})}),Qe.displayName=Ze,$e=T,et=D,tt=k,nt=j,rt=N,it=Xe})),P,F,I,L,R,z,B,V,ot=e((()=>{at(),l(),P=r(),F=e=>(0,P.jsx)($e,{"data-slot":`popover-root`,...e}),F.displayName=`Popover.Root`,I=e=>(0,P.jsx)(tt,{"data-slot":`popover-trigger`,...e}),I.displayName=`Popover.Trigger`,L=e=>(0,P.jsx)(et,{"data-slot":`popover-anchor`,...e}),L.displayName=`Popover.Anchor`,R=e=>(0,P.jsx)(it,{"data-slot":`popover-close`,...e}),R.displayName=`Popover.Close`,z=nt,B=c({base:[`z-(--z-index-top-layer) rounded-md bg-bg-default-base-primary px-2 py-3 shadow-md`,`border border-border-default-base-primary`,`will-change-[transform,opacity]`,`origin-(--radix-popover-content-transform-origin)`,`data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top`,`data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right`,`data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left`,`data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom`,`data-[state=closed]:animate-dropdown-slide-out`,`motion-reduce:animate-none!`]}),V=({className:e,sideOffset:t=8,...n})=>(0,P.jsx)(nt,{children:(0,P.jsx)(rt,{"data-slot":`popover-content`,sideOffset:t,className:B({className:e}),...n})}),V.displayName=`Popover.Content`;try{F.displayName=`Popover.Root`,F.__docgenInfo={description:"Root of a non-modal floating surface anchored to a trigger, built on Radix\nPopover. Compose `Root` with `Trigger` / `Content`, plus optional `Anchor`,\n`Close`, and `Portal`. Use for rich interactive overlays (forms, filters,\npickers); prefer `Tooltip` for text hints and `DropdownMenu` for menus.",displayName:`Popover.Root`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{summary:`Root provider for a floating interactive overlay`,see:`{@link https://www.radix-ui.com/primitives/docs/components/popover Radix UI Popover}`,example:`\`\`\`tsx
import { Popover } from '@agentero/design-system/popover';

<Popover.Root>
  <Popover.Trigger asChild>
    <Button>Filters</Button>
  </Popover.Trigger>
  <Popover.Content align="start">
    <FiltersForm />
  </Popover.Content>
</Popover.Root>
\`\`\``}}}catch{}try{I.displayName=`Popover.Trigger`,I.__docgenInfo={description:``,displayName:`Popover.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{L.displayName=`Popover.Anchor`,L.__docgenInfo={description:``,displayName:`Popover.Anchor`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{R.displayName=`Popover.Close`,R.__docgenInfo={description:``,displayName:`Popover.Close`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{z.displayName=`Portal`,z.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{B.displayName=`popoverRecipe`,B.__docgenInfo={description:``,displayName:`popoverRecipe`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{V.displayName=`Popover.Content`,V.__docgenInfo={description:``,displayName:`Popover.Content`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),H,st=e((()=>{ot(),H={Root:F,Trigger:I,Anchor:L,Close:R,Portal:z,Content:V}})),U,W,G,K,q,ct,J,Y,X,Z,Q,lt,$,ut;e((()=>{st(),d(),xe(),U=r(),{expect:W,userEvent:G,waitFor:K,within:q}=__STORYBOOK_MODULE_TEST__,ct={title:`Components/Popover`,component:H.Root,tags:[`autodocs`],decorators:[e=>(0,U.jsx)(`div`,{className:`flex min-h-60 items-center justify-center p-10`,children:(0,U.jsx)(e,{})})],parameters:{docs:{description:{component:"Popover is a non-modal floating surface anchored to a trigger, used for\nrich interactive overlays such as forms, filters, and pickers. Compose it\nfrom `Root` / `Trigger` / `Content`, plus optional `Anchor` and `Close`.\nBuilt on Radix UI's Popover primitive, so focus management, dismissal, and\ncollision detection come for free."}}}},J={render:()=>(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(u,{variant:`secondary`,children:`Open popover`})}),(0,U.jsx)(H.Content,{children:(0,U.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`This carrier is appointed for 3 lines of business.`})})]}),play:async({canvasElement:e})=>{let t=q(e),n=q(document.body),r=t.getByRole(`button`,{name:/open popover/i});await W(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument(),await G.click(r);let i=await n.findByText(/3 lines of business/i);await W(i).toBeInTheDocument(),await W(i.closest(`[data-slot="popover-content"]`)).toHaveAttribute(`data-state`,`open`),await G.keyboard(`{Escape}`),await K(()=>W(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument())}},Y={render:()=>(0,U.jsx)(`div`,{className:`grid grid-cols-2 gap-6`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(u,{variant:`secondary`,children:e})}),(0,U.jsx)(H.Content,{side:e,children:(0,U.jsxs)(`p`,{className:`text-sm text-text-default-base-primary`,children:[`Opens on `,e]})})]},e))})},X={render:()=>(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(u,{variant:`secondary`,children:`Rename`})}),(0,U.jsx)(H.Content,{align:`start`,children:(0,U.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,U.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-text-default-base-primary`,children:[`New name`,(0,U.jsx)(`input`,{type:`text`,defaultValue:`Untitled`,className:`rounded-md border border-border-default-base-primary px-2 py-1 text-sm`})]}),(0,U.jsx)(H.Close,{asChild:!0,children:(0,U.jsx)(u,{variant:`primary`,size:`sm`,children:`Save`})})]})})]}),play:async({canvasElement:e})=>{let t=q(e),n=q(document.body);await G.click(t.getByRole(`button`,{name:/rename/i})),await W(await n.findByRole(`textbox`)).toBeInTheDocument(),await G.click(n.getByRole(`button`,{name:/save/i})),await K(()=>W(n.queryByRole(`textbox`)).not.toBeInTheDocument())}},Z={render:()=>(0,U.jsxs)(H.Root,{children:[(0,U.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,U.jsx)(H.Anchor,{className:`rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary`,children:`Anchored here`}),(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(u,{variant:`secondary`,children:`Toggle from below`})})]}),(0,U.jsx)(H.Content,{side:`top`,children:(0,U.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Positioned against the anchor`})})]})},Q=e=>[...document.body.children].findIndex(t=>t.contains(e)),lt=e=>getComputedStyle(document.body.children[Q(e)]).zIndex,$={render:()=>(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{asChild:!0,children:(0,U.jsx)(u,{variant:`secondary`,children:`Renewal 2026`})}),(0,U.jsx)(H.Content,{align:`start`,children:(0,U.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,U.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Applied to 12 contracts across 3 carriers.`}),(0,U.jsxs)(h.Root,{children:[(0,U.jsx)(h.Trigger,{asChild:!0,children:(0,U.jsx)(u,{variant:`secondary`,size:`sm`,children:`Delete tag`})}),(0,U.jsxs)(h.Content,{children:[(0,U.jsx)(h.Title,{children:`Delete this tag?`}),(0,U.jsx)(h.Description,{children:`It will be removed from the 12 contracts that carry it.`}),(0,U.jsxs)(h.Footer,{children:[(0,U.jsx)(h.Close,{asChild:!0,children:(0,U.jsx)(u,{variant:`ghost`,children:`Cancel`})}),(0,U.jsx)(u,{variant:`primary`,children:`Delete`})]})]})]})]})})]}),play:async({canvasElement:e})=>{let t=q(e),n=q(document.body);await G.click(t.getByRole(`button`,{name:`Renewal 2026`}));let r=await n.findByText(/12 contracts across 3 carriers/i);await G.click(n.getByRole(`button`,{name:`Delete tag`}));let i=await n.findByRole(`dialog`,{name:`Delete this tag?`});await K(()=>W(i).toBeVisible()),await W(r).toBeInTheDocument(),await W(lt(i)).toBe(lt(r)),await W(Q(i)).toBeGreaterThan(Q(r))}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`A minimal Popover: a trigger button that reveals a short text surface on
click and dismisses on outside click or Escape.

@summary Basic click-to-open popover surface`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`\`side\` sets the preferred placement; Radix flips it on viewport collision.

@summary Popover placement on each of the four sides`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"Rich interactive content — the primary reason to reach for a Popover over a\nTooltip. A `Close` inside the surface dismisses it after submitting.\n\n@summary Popover holding an interactive form with a `Close` action",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"`Anchor` positions the Content against an element other than the Trigger —\nuseful when the visual anchor differs from the toggle button.\n\n@summary Popover positioned against a separate `Anchor` element",...Z.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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

@summary Modal opened from inside a Popover paints above it`,...$.parameters?.docs?.description}}},ut=[`Default`,`Sides`,`WithForm`,`WithAnchor`,`ModalFromInsidePopover`]}))();export{J as Default,$ as ModalFromInsidePopover,Y as Sides,Z as WithAnchor,X as WithForm,ut as __namedExportsOrder,ct as default};