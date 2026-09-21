import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-B-XGXLgN.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./dist-Be3W6QV-.js";import{n as o,t as s}from"./dist-u7w8FXej.js";import{n as c,t as l}from"./dist-C8AlzbfS.js";import{n as u,t as d}from"./button-CddOW4tM.js";import{i as f,n as ee,r as p,t as te}from"./es2015-u2TjSJbq.js";import{i as ne,n as re,r as m,t as ie}from"./dist-i_l5bC-d.js";import{n as ae,t as oe}from"./dist-9MbHre8A.js";import{r as se,t as ce}from"./dist-DrFajw70.js";import{i as le,n as ue,r as de,t as fe}from"./dist-BYu6rHWy.js";import{a as pe,i as me,n as he,o as ge,r as _e,t as ve}from"./dist-jgdRCxuA.js";import{a as ye,i as be,n as xe,o as Se,r as Ce,t as h}from"./modal-CMLd0nGc.js";function we(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Te(...e){return t=>{let n=!1,r=e.map(e=>{let r=we(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():we(e[t],null)}}}}function Ee(...e){return De.useCallback(Te(...e),e)}var De;function Oe(){return(Oe=t((()=>{De=e(n(),1)})))()}function ke(e){let t=g.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];Ne(r)&&typeof _==`function`&&(r=_(r._payload)),g.Children.forEach(r,e=>{if(Me(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;Ne(n)&&typeof _==`function`&&(n=_(n._payload)),a=Ie(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=g.cloneElement(a,void 0,s):!o&&g.Children.count(r)===1&&g.isValidElement(r)&&(a=r);let c=a?je(a):void 0,l=Ee(n,c);if(!a){if(r||r===0)throw Error(o?ze(e):Re(e));return r}let u=Ae(i,a.props??{});return a.type!==g.Fragment&&(u.ref=n?l:c),g.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function Ae(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function je(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Me(e){return g.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Fe}function Ne(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Le&&`_payload`in e&&Pe(e._payload)}function Pe(e){return typeof e==`object`&&!!e&&`then`in e}var g,Fe,Ie,Le,Re,ze,_;function Be(){return(Be=t((()=>{g=e(n(),1),Oe(),Fe=Symbol.for(`radix.slottable`),Ie=(e,t)=>{if(`child`in e.props){let t=e.props.child;return g.isValidElement(t)?g.cloneElement(t,void 0,e.props.children(t.props.children)):null}return g.isValidElement(t)?t:null},Le=Symbol.for(`react.lazy`),Re=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,ze=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,_=g.use})))()}function Ve(e){return e?`open`:`closed`}var v,y,b,x,He,S,Ue,C,w,T,E,D,O,k,We,Ge,A,j,M,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at;function ot(){return(ot=t((()=>{v=e(n(),1),ne(),Oe(),ae(),le(),Ce(),Se(),s(),ge(),ue(),re(),se(),Be(),a(),ee(),f(),y=r(),b=`Popover`,[x,He]=oe(b,[pe]),S=pe(),[Ue,C]=x(b),w=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:a,onOpenChange:s,modal:c=!1}=e,l=S(t),u=v.useRef(null),[d,f]=v.useState(!1),[ee,p]=i({prop:r,defaultProp:a??!1,onChange:s,caller:b});return(0,y.jsx)(me,{...l,children:(0,y.jsx)(Ue,{scope:t,contentId:o(),triggerRef:u,open:ee,onOpenChange:p,onOpenToggle:v.useCallback(()=>p(e=>!e),[p]),hasCustomAnchor:d,onCustomAnchorAdd:v.useCallback(()=>f(!0),[]),onCustomAnchorRemove:v.useCallback(()=>f(!1),[]),modal:c,children:n})})},w.displayName=b,T=`PopoverAnchor`,E=v.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=C(T,n),a=S(n),{onCustomAnchorAdd:o,onCustomAnchorRemove:s}=i;return v.useEffect(()=>(o(),()=>s()),[o,s]),(0,y.jsx)(ve,{...a,...r,ref:t})}),E.displayName=T,D=`PopoverTrigger`,O=v.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=C(D,n),a=S(n),o=Ee(t,i.triggerRef),s=(0,y.jsx)(ce.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":Ve(i.open),...r,ref:o,onClick:m(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,y.jsx)(ve,{asChild:!0,...a,children:s})}),O.displayName=D,k=`PopoverPortal`,[We,Ge]=x(k,{forceMount:void 0}),A=e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=C(k,t);return(0,y.jsx)(We,{scope:t,forceMount:n,children:(0,y.jsx)(ie,{present:n||a.open,children:(0,y.jsx)(fe,{asChild:!0,container:i,children:r})})})},A.displayName=k,j=`PopoverContent`,M=v.forwardRef((e,t)=>{let n=Ge(j,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=C(j,e.__scopePopover);return(0,y.jsx)(ie,{present:r||a.open,children:a.modal?(0,y.jsx)(qe,{...i,ref:t}):(0,y.jsx)(Je,{...i,ref:t})})}),M.displayName=j,Ke=ke(`PopoverContent.RemoveScroll`),qe=v.forwardRef((e,t)=>{let n=C(j,e.__scopePopover),r=v.useRef(null),i=Ee(t,r),a=v.useRef(!1);return v.useEffect(()=>{let e=r.current;if(e)return te(e)},[]),(0,y.jsx)(p,{as:Ke,allowPinchZoom:!0,children:(0,y.jsx)(Ye,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:m(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;a.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:m(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),Je=v.forwardRef((e,t)=>{let n=C(j,e.__scopePopover),r=v.useRef(!1),i=v.useRef(!1);return(0,y.jsx)(Ye,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),Ye=v.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,...d}=e,f=C(j,n),ee=S(n);return be(),(0,y.jsx)(ye,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,y.jsx)(de,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,y.jsx)(_e,{"data-state":Ve(f.open),role:`dialog`,id:f.contentId,...ee,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})}),Xe=`PopoverClose`,Ze=v.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=C(Xe,n);return(0,y.jsx)(ce.button,{type:`button`,...r,ref:t,onClick:m(e.onClick,()=>i.onOpenChange(!1))})}),Ze.displayName=Xe,Qe=`PopoverArrow`,$e=v.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=S(n);return(0,y.jsx)(he,{...i,...r,ref:t})}),$e.displayName=Qe,et=w,tt=E,nt=O,rt=A,it=M,at=Ze})))()}var N,P,F,I,L,R,z,B;function st(){return(st=t((()=>{ot(),l(),N=r(),P=e=>(0,N.jsx)(et,{"data-slot":`popover-root`,...e}),P.displayName=`Popover.Root`,F=e=>(0,N.jsx)(nt,{"data-slot":`popover-trigger`,...e}),F.displayName=`Popover.Trigger`,I=e=>(0,N.jsx)(tt,{"data-slot":`popover-anchor`,...e}),I.displayName=`Popover.Anchor`,L=e=>(0,N.jsx)(at,{"data-slot":`popover-close`,...e}),L.displayName=`Popover.Close`,R=rt,z=c({base:[`z-(--z-index-top-layer) rounded-md bg-bg-default-base-primary px-2 py-3 shadow-md`,`border border-border-default-base-primary`,`will-change-[transform,opacity]`,`origin-(--radix-popover-content-transform-origin)`,`data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top`,`data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right`,`data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left`,`data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom`,`data-[state=closed]:animate-dropdown-slide-out`,`motion-reduce:animate-none!`]}),B=({className:e,sideOffset:t=8,...n})=>(0,N.jsx)(rt,{children:(0,N.jsx)(it,{"data-slot":`popover-content`,sideOffset:t,className:z({className:e}),...n})}),B.displayName=`Popover.Content`;try{P.displayName=`Popover.Root`,P.__docgenInfo={description:"Root of a non-modal floating surface anchored to a trigger, built on Radix\nPopover. Compose `Root` with `Trigger` / `Content`, plus optional `Anchor`,\n`Close`, and `Portal`. Use for rich interactive overlays (forms, filters,\npickers); prefer `Tooltip` for text hints and `DropdownMenu` for menus.",displayName:`Popover.Root`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{summary:`Root provider for a floating interactive overlay`,see:`{@link https://www.radix-ui.com/primitives/docs/components/popover Radix UI Popover}`,example:`\`\`\`tsx
import { Popover } from '@agentero/design-system/popover';

<Popover.Root>
  <Popover.Trigger asChild>
    <Button>Filters</Button>
  </Popover.Trigger>
  <Popover.Content align="start">
    <FiltersForm />
  </Popover.Content>
</Popover.Root>
\`\`\``}}}catch{}try{F.displayName=`Popover.Trigger`,F.__docgenInfo={description:``,displayName:`Popover.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{I.displayName=`Popover.Anchor`,I.__docgenInfo={description:``,displayName:`Popover.Anchor`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{L.displayName=`Popover.Close`,L.__docgenInfo={description:``,displayName:`Popover.Close`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{R.displayName=`Portal`,R.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{z.displayName=`popoverRecipe`,z.__docgenInfo={description:``,displayName:`popoverRecipe`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{B.displayName=`Popover.Content`,B.__docgenInfo={description:``,displayName:`Popover.Content`,filePath:`/home/runner/work/design-system/design-system/src/popover/popover.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var V;function ct(){return(ct=t((()=>{st(),V={Root:P,Trigger:F,Anchor:I,Close:L,Portal:R,Content:B}})))()}var H,U,W,G,K,lt,q,J,Y,X,Z,Q,$,ut;function dt(){return(dt=t((()=>{ct(),u(),xe(),H=r(),{expect:U,userEvent:W,waitFor:G,within:K}=__STORYBOOK_MODULE_TEST__,lt={title:`Components/Popover`,component:V.Root,tags:[`autodocs`],decorators:[e=>(0,H.jsx)(`div`,{className:`flex min-h-60 items-center justify-center p-10`,children:(0,H.jsx)(e,{})})],parameters:{docs:{description:{component:"Popover is a non-modal floating surface anchored to a trigger, used for\nrich interactive overlays such as forms, filters, and pickers. Compose it\nfrom `Root` / `Trigger` / `Content`, plus optional `Anchor` and `Close`.\nBuilt on Radix UI's Popover primitive, so focus management, dismissal, and\ncollision detection come for free."}}}},q={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:`Open popover`})}),(0,H.jsx)(V.Content,{children:(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`This carrier is appointed for 3 lines of business.`})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body),r=t.getByRole(`button`,{name:/open popover/i});await U(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument(),await W.click(r);let i=await n.findByText(/3 lines of business/i);await U(i).toBeInTheDocument(),await U(i.closest(`[data-slot="popover-content"]`)).toHaveAttribute(`data-state`,`open`),await W.keyboard(`{Escape}`),await G(()=>U(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument())}},J={render:()=>(0,H.jsx)(`div`,{className:`grid grid-cols-2 gap-6`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:e})}),(0,H.jsx)(V.Content,{side:e,children:(0,H.jsxs)(`p`,{className:`text-sm text-text-default-base-primary`,children:[`Opens on `,e]})})]},e))})},Y={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:`Rename`})}),(0,H.jsx)(V.Content,{align:`start`,children:(0,H.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,H.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-text-default-base-primary`,children:[`New name`,(0,H.jsx)(`input`,{type:`text`,defaultValue:`Untitled`,className:`rounded-md border border-border-default-base-primary px-2 py-1 text-sm`})]}),(0,H.jsx)(V.Close,{asChild:!0,children:(0,H.jsx)(d,{variant:`primary`,size:`sm`,children:`Save`})})]})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body);await W.click(t.getByRole(`button`,{name:/rename/i}));let r=await n.findByRole(`textbox`);await U(r).toBeInTheDocument(),await W.click(n.getByRole(`button`,{name:/save/i})),await G(()=>U(n.queryByRole(`textbox`)).not.toBeInTheDocument())}},X={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,H.jsx)(V.Anchor,{className:`rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary`,children:`Anchored here`}),(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:`Toggle from below`})})]}),(0,H.jsx)(V.Content,{side:`top`,children:(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Positioned against the anchor`})})]})},Z=e=>[...document.body.children].findIndex(t=>t.contains(e)),Q=e=>getComputedStyle(document.body.children[Z(e)]).zIndex,$={render:()=>(0,H.jsxs)(V.Root,{children:[(0,H.jsx)(V.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,children:`Renewal 2026`})}),(0,H.jsx)(V.Content,{align:`start`,children:(0,H.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,H.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Applied to 12 contracts across 3 carriers.`}),(0,H.jsxs)(h.Root,{children:[(0,H.jsx)(h.Trigger,{asChild:!0,children:(0,H.jsx)(d,{variant:`secondary`,size:`sm`,children:`Delete tag`})}),(0,H.jsxs)(h.Content,{children:[(0,H.jsx)(h.Title,{children:`Delete this tag?`}),(0,H.jsx)(h.Description,{children:`It will be removed from the 12 contracts that carry it.`}),(0,H.jsxs)(h.Footer,{children:[(0,H.jsx)(h.Close,{asChild:!0,children:(0,H.jsx)(d,{variant:`ghost`,children:`Cancel`})}),(0,H.jsx)(d,{variant:`primary`,children:`Delete`})]})]})]})]})})]}),play:async({canvasElement:e})=>{let t=K(e),n=K(document.body);await W.click(t.getByRole(`button`,{name:`Renewal 2026`}));let r=await n.findByText(/12 contracts across 3 carriers/i);await W.click(n.getByRole(`button`,{name:`Delete tag`}));let i=await n.findByRole(`dialog`,{name:`Delete this tag?`});await G(()=>U(i).toBeVisible()),await U(r).toBeInTheDocument(),await U(Q(i)).toBe(Q(r)),await U(Z(i)).toBeGreaterThan(Z(r))}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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