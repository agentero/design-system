import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-uanLQG56.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-DILdC2a-.js";import{n as o,t as s}from"./dist-BSrHxYkV.js";import{n as c,t as l}from"./dist-Ds99YEBK.js";import{n as u,t as d}from"./dist-xs6gOf1u.js";import{t as f}from"./button-COYBqzek.js";import{t as p}from"./button-BHSTWVFm.js";import{i as m,n as ee,r as te,t as ne}from"./es2015-C46Z9Llc.js";import{i as re,n as ie,r as h,t as ae}from"./dist-CkXVqwPy2.js";import{n as oe,t as se}from"./dist-CXkm3HLJ2.js";import{r as ce,t as le}from"./dist-D5JwJwP_.js";import{a as ue,i as de,n as fe,o as pe,r as me,t as he}from"./dist-eaLqA1-B.js";import{a as ge,i as _e,n as ve,t as ye}from"./dist-crZgWAv9.js";import{a as be,i as xe,n as Se,o as Ce,r as we,t as g}from"./modal-B4Iq01Sj.js";function Te(e){let t=_.forwardRef((t,n)=>{let{children:r,...a}=t,o=null,s=!1,c=[];ke(r)&&typeof v==`function`&&(r=v(r._payload)),_.Children.forEach(r,e=>{if(Oe(e)){s=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;ke(n)&&typeof v==`function`&&(n=v(n._payload)),o=Me(t,n),c.push(o?.props?.children)}else c.push(e)}),o?o=_.cloneElement(o,void 0,c):!s&&_.Children.count(r)===1&&_.isValidElement(r)&&(o=r);let l=o?De(o):void 0,u=i(n,l);if(!o){if(r||r===0)throw Error(s?Fe(e):Pe(e));return r}let d=Ee(a,o.props??{});return o.type!==_.Fragment&&(d.ref=n?u:l),_.cloneElement(o,d)});return t.displayName=`${e}.Slot`,t}function Ee(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function De(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Oe(e){return _.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===je}function ke(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ne&&`_payload`in e&&Ae(e._payload)}function Ae(e){return typeof e==`object`&&!!e&&`then`in e}var _,je,Me,Ne,Pe,Fe,v,Ie=e((()=>{_=t(n(),1),a(),je=Symbol.for(`radix.slottable`),Me=(e,t)=>{if(`child`in e.props){let t=e.props.child;return _.isValidElement(t)?_.cloneElement(t,void 0,e.props.children(t.props.children)):null}return _.isValidElement(t)?t:null},Ne=Symbol.for(`react.lazy`),Pe=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Fe=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,v=_.use}));function Le(e){return e?`open`:`closed`}var y,b,x,S,Re,C,ze,w,T,E,D,O,k,A,Be,Ve,j,M,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt=e((()=>{y=t(n(),1),re(),a(),oe(),ve(),we(),Ce(),l(),pe(),ge(),ie(),ce(),Ie(),s(),ee(),te(),b=r(),x=`Popover`,[S,Re]=se(x,[ue]),C=ue(),[ze,w]=S(x),T=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:s=!1}=e,l=C(t),u=y.useRef(null),[d,f]=y.useState(!1),[p,m]=o({prop:r,defaultProp:i??!1,onChange:a,caller:x});return(0,b.jsx)(de,{...l,children:(0,b.jsx)(ze,{scope:t,contentId:c(),triggerRef:u,open:p,onOpenChange:m,onOpenToggle:y.useCallback(()=>m(e=>!e),[m]),hasCustomAnchor:d,onCustomAnchorAdd:y.useCallback(()=>f(!0),[]),onCustomAnchorRemove:y.useCallback(()=>f(!1),[]),modal:s,children:n})})},T.displayName=x,E=`PopoverAnchor`,D=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=w(E,n),a=C(n),{onCustomAnchorAdd:o,onCustomAnchorRemove:s}=i;return y.useEffect(()=>(o(),()=>s()),[o,s]),(0,b.jsx)(he,{...a,...r,ref:t})}),D.displayName=E,O=`PopoverTrigger`,k=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,a=w(O,n),o=C(n),s=i(t,a.triggerRef),c=(0,b.jsx)(le.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":Le(a.open),...r,ref:s,onClick:h(e.onClick,a.onOpenToggle)});return a.hasCustomAnchor?c:(0,b.jsx)(he,{asChild:!0,...o,children:c})}),k.displayName=O,A=`PopoverPortal`,[Be,Ve]=S(A,{forceMount:void 0}),j=e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=w(A,t);return(0,b.jsx)(Be,{scope:t,forceMount:n,children:(0,b.jsx)(ae,{present:n||a.open,children:(0,b.jsx)(_e,{asChild:!0,container:i,children:r})})})},j.displayName=A,M=`PopoverContent`,He=y.forwardRef((e,t)=>{let n=Ve(M,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=w(M,e.__scopePopover);return(0,b.jsx)(ae,{present:r||a.open,children:a.modal?(0,b.jsx)(We,{...i,ref:t}):(0,b.jsx)(Ge,{...i,ref:t})})}),He.displayName=M,Ue=Te(`PopoverContent.RemoveScroll`),We=y.forwardRef((e,t)=>{let n=w(M,e.__scopePopover),r=y.useRef(null),a=i(t,r),o=y.useRef(!1);return y.useEffect(()=>{let e=r.current;if(e)return ne(e)},[]),(0,b.jsx)(m,{as:Ue,allowPinchZoom:!0,children:(0,b.jsx)(Ke,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,e=>{e.preventDefault(),o.current||n.triggerRef.current?.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;o.current=t.button===2||n},{checkForDefaultPrevented:!1}),onFocusOutside:h(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),Ge=y.forwardRef((e,t)=>{let n=w(M,e.__scopePopover),r=y.useRef(!1),i=y.useRef(!1);return(0,b.jsx)(Ke,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),Ke=y.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,...d}=e,f=w(M,n),p=C(n);return xe(),(0,b.jsx)(be,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,b.jsx)(ye,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,b.jsx)(me,{"data-state":Le(f.open),role:`dialog`,id:f.contentId,...p,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})}),qe=`PopoverClose`,Je=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=w(qe,n);return(0,b.jsx)(le.button,{type:`button`,...r,ref:t,onClick:h(e.onClick,()=>i.onOpenChange(!1))})}),Je.displayName=qe,Ye=`PopoverArrow`,Xe=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=C(n);return(0,b.jsx)(fe,{...i,...r,ref:t})}),Xe.displayName=Ye,Ze=T,Qe=D,$e=k,et=j,tt=He,nt=Je})),N,P,F,I,L,R,z,B,it=e((()=>{rt(),d(),N=r(),P=e=>(0,N.jsx)(Ze,{"data-slot":`popover-root`,...e}),P.displayName=`Popover.Root`,F=e=>(0,N.jsx)($e,{"data-slot":`popover-trigger`,...e}),F.displayName=`Popover.Trigger`,I=e=>(0,N.jsx)(Qe,{"data-slot":`popover-anchor`,...e}),I.displayName=`Popover.Anchor`,L=e=>(0,N.jsx)(nt,{"data-slot":`popover-close`,...e}),L.displayName=`Popover.Close`,R=et,z=u({base:[`z-(--z-index-top-layer) rounded-md bg-bg-default-base-primary px-2 py-3 shadow-md`,`border border-border-default-base-primary`,`will-change-[transform,opacity]`,`origin-(--radix-popover-content-transform-origin)`,`data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top`,`data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right`,`data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left`,`data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom`,`data-[state=closed]:animate-dropdown-slide-out`,`motion-reduce:animate-none!`]}),B=({className:e,sideOffset:t=8,...n})=>(0,N.jsx)(et,{children:(0,N.jsx)(tt,{"data-slot":`popover-content`,sideOffset:t,className:z({className:e}),...n})}),B.displayName=`Popover.Content`;try{P.displayName=`Popover.Root`,P.__docgenInfo={description:"Root of a non-modal floating surface anchored to a trigger, built on Radix\nPopover. Compose `Root` with `Trigger` / `Content`, plus optional `Anchor`,\n`Close`, and `Portal`. Use for rich interactive overlays (forms, filters,\npickers); prefer `Tooltip` for text hints and `DropdownMenu` for menus.",displayName:`Popover.Root`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{summary:`Root provider for a floating interactive overlay`,see:`{@link https://www.radix-ui.com/primitives/docs/components/popover Radix UI Popover}`,example:`\`\`\`tsx
import { Popover } from '@agentero/design-system/popover';

<Popover.Root>
  <Popover.Trigger asChild>
    <Button>Filters</Button>
  </Popover.Trigger>
  <Popover.Content align="start">
    <FiltersForm />
  </Popover.Content>
</Popover.Root>
\`\`\``}}}catch{}try{F.displayName=`Popover.Trigger`,F.__docgenInfo={description:``,displayName:`Popover.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{I.displayName=`Popover.Anchor`,I.__docgenInfo={description:``,displayName:`Popover.Anchor`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{L.displayName=`Popover.Close`,L.__docgenInfo={description:``,displayName:`Popover.Close`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{R.displayName=`Portal`,R.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{z.displayName=`popoverRecipe`,z.__docgenInfo={description:``,displayName:`popoverRecipe`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{B.displayName=`Popover.Content`,B.__docgenInfo={description:``,displayName:`Popover.Content`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),V,at=e((()=>{it(),V={Root:P,Trigger:F,Anchor:I,Close:L,Portal:R,Content:B}})),H,U,W,G,K,ot,q,J,Y,X,Z,Q,$,st;e((()=>{at(),p(),Se(),H=r(),{expect:U,userEvent:W,waitFor:G,within:K}=__STORYBOOK_MODULE_TEST__,ot={title:`Components/Popover`,component:V.Root,tags:[`autodocs`],decorators:[e=>(0,H.jsx)(`div`,{className:`flex min-h-60 items-center justify-center p-10`,children:(0,H.jsx)(e,{})})],parameters:{docs:{description:{component:"Popover is a non-modal floating surface anchored to a trigger, used for\nrich interactive overlays such as forms, filters, and pickers. Compose it\nfrom `Root` / `Trigger` / `Content`, plus optional `Anchor` and `Close`.\nBuilt on Radix UI's Popover primitive, so focus management, dismissal, and\ncollision detection come for free."}}}},q={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(f,{variant:`secondary`,children:`Open popover`})}),(0,H.jsx)(V.Content,{children:(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`This carrier is appointed for 3 lines of business.`})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body),r=t.getByRole(`button`,{name:/open popover/i});await U(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument(),await W.click(r);let i=await n.findByText(/3 lines of business/i);await U(i).toBeInTheDocument(),await U(i.closest(`[data-slot="popover-content"]`)).toHaveAttribute(`data-state`,`open`),await W.keyboard(`{Escape}`),await G(()=>U(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument())}},J={render:()=>(0,H.jsx)(`div`,{className:`grid grid-cols-2 gap-6`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(f,{variant:`secondary`,children:e})}),(0,H.jsx)(V.Content,{side:e,children:(0,H.jsxs)(`p`,{className:`text-sm text-text-default-base-primary`,children:[`Opens on `,e]})})]},e))})},Y={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(f,{variant:`secondary`,children:`Rename`})}),(0,H.jsx)(V.Content,{align:`start`,children:(0,H.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,H.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-text-default-base-primary`,children:[`New name`,(0,H.jsx)(`input`,{type:`text`,defaultValue:`Untitled`,className:`rounded-md border border-border-default-base-primary px-2 py-1 text-sm`})]}),(0,H.jsx)(V.Close,{asChild:!0,children:(0,H.jsx)(f,{variant:`primary`,size:`sm`,children:`Save`})})]})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body);await W.click(t.getByRole(`button`,{name:/rename/i})),await U(await n.findByRole(`textbox`)).toBeInTheDocument(),await W.click(n.getByRole(`button`,{name:/save/i})),await G(()=>U(n.queryByRole(`textbox`)).not.toBeInTheDocument())}},X={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,H.jsx)(V.Anchor,{className:`rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary`,children:`Anchored here`}),(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(f,{variant:`secondary`,children:`Toggle from below`})})]}),(0,H.jsx)(V.Content,{side:`top`,children:(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Positioned against the anchor`})})]})},Z=e=>[...document.body.children].findIndex(t=>t.contains(e)),Q=e=>getComputedStyle(document.body.children[Z(e)]).zIndex,$={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(f,{variant:`secondary`,children:`Renewal 2026`})}),(0,H.jsx)(V.Content,{align:`start`,children:(0,H.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Applied to 12 contracts across 3 carriers.`}),(0,H.jsxs)(g.Root,{children:[(0,H.jsx)(g.Trigger,{asChild:!0,children:(0,H.jsx)(f,{variant:`secondary`,size:`sm`,children:`Delete tag`})}),(0,H.jsxs)(g.Content,{children:[(0,H.jsx)(g.Title,{children:`Delete this tag?`}),(0,H.jsx)(g.Description,{children:`It will be removed from the 12 contracts that carry it.`}),(0,H.jsxs)(g.Footer,{children:[(0,H.jsx)(g.Close,{asChild:!0,children:(0,H.jsx)(f,{variant:`ghost`,children:`Cancel`})}),(0,H.jsx)(f,{variant:`primary`,children:`Delete`})]})]})]})]})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body);await W.click(t.getByRole(`button`,{name:`Renewal 2026`}));let r=await n.findByText(/12 contracts across 3 carriers/i);await W.click(n.getByRole(`button`,{name:`Delete tag`}));let i=await n.findByRole(`dialog`,{name:`Delete this tag?`});await G(()=>U(i).toBeVisible()),await U(r).toBeInTheDocument(),await U(Q(i)).toBe(Q(r)),await U(Z(i)).toBeGreaterThan(Z(r))}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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

@summary Modal opened from inside a Popover paints above it`,...$.parameters?.docs?.description}}},st=[`Default`,`Sides`,`WithForm`,`WithAnchor`,`ModalFromInsidePopover`]}))();export{q as Default,$ as ModalFromInsidePopover,J as Sides,X as WithAnchor,Y as WithForm,st as __namedExportsOrder,ot as default};