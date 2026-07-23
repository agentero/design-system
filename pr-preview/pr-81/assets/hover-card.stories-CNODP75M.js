import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-TEnZsy6v.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-Bai10Van.js";import{n as ee,t as o}from"./dist-BHtk4naO.js";import{n as s,t as c}from"./dist-xs6gOf1u.js";import{n as l,t as u}from"./lib-Dkaf_tmd.js";import{n as d,t as f}from"./avatar-1SLa8rV9.js";import{i as p,n as m,r as h,t as g}from"./dist-BslxYyd5.js";import{n as te,t as ne}from"./dist-thVRQ2J-2.js";import{r as re,t as ie}from"./dist-miXyJ1sM2.js";import{a as ae,i as oe,n as se,o as ce,r as le,t as ue}from"./dist-7Bwp82Ox2.js";import{a as de,i as fe,n as pe,t as me}from"./dist-y6h_2g4l2.js";var he=e((()=>{d()}));function _(e){return t=>t.pointerType===`touch`?void 0:e()}function ge(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t}var v,y,b,x,S,_e,C,ve,w,T,E,D,O,ye,be,k,A,j,xe,Se,M,Ce,we,Te,Ee,De,Oe=e((()=>{v=t(n(),1),p(),te(),o(),a(),ce(),de(),m(),re(),pe(),y=r(),x=`HoverCard`,[S,_e]=ne(x,[ae]),C=ae(),[ve,w]=S(x),T=e=>{let{__scopeHoverCard:t,children:n,open:r,defaultOpen:i,onOpenChange:a,openDelay:o=700,closeDelay:s=300}=e,c=C(t),l=v.useRef(0),u=v.useRef(0),d=v.useRef(!1),f=v.useRef(!1),[p,m]=ee({prop:r,defaultProp:i??!1,onChange:a,caller:x}),h=v.useCallback(()=>{clearTimeout(u.current),l.current=window.setTimeout(()=>m(!0),o)},[o,m]),g=v.useCallback(()=>{clearTimeout(l.current),!d.current&&!f.current&&(u.current=window.setTimeout(()=>m(!1),s))},[s,m]),te=v.useCallback(()=>m(!1),[m]);return v.useEffect(()=>()=>{clearTimeout(l.current),clearTimeout(u.current)},[]),(0,y.jsx)(ve,{scope:t,open:p,onOpenChange:m,onOpen:h,onClose:g,onDismiss:te,hasSelectionRef:d,isPointerDownOnContentRef:f,children:(0,y.jsx)(oe,{...c,children:n})})},T.displayName=x,E=`HoverCardTrigger`,D=v.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=w(E,n),a=C(n);return(0,y.jsx)(ue,{asChild:!0,...a,children:(0,y.jsx)(ie.a,{"data-state":i.open?`open`:`closed`,...r,ref:t,onPointerEnter:h(e.onPointerEnter,_(i.onOpen)),onPointerLeave:h(e.onPointerLeave,_(i.onClose)),onFocus:h(e.onFocus,i.onOpen),onBlur:h(e.onBlur,i.onClose),onTouchStart:h(e.onTouchStart,e=>e.preventDefault())})})}),D.displayName=E,O=`HoverCardPortal`,[ye,be]=S(O,{forceMount:void 0}),k=e=>{let{__scopeHoverCard:t,forceMount:n,children:r,container:i}=e,a=w(O,t);return(0,y.jsx)(ye,{scope:t,forceMount:n,children:(0,y.jsx)(g,{present:n||a.open,children:(0,y.jsx)(fe,{asChild:!0,container:i,children:r})})})},k.displayName=O,A=`HoverCardContent`,j=v.forwardRef((e,t)=>{let n=be(A,e.__scopeHoverCard),{forceMount:r=n.forceMount,...i}=e,a=w(A,e.__scopeHoverCard);return(0,y.jsx)(g,{present:r||a.open,children:(0,y.jsx)(xe,{"data-state":a.open?`open`:`closed`,...i,onPointerEnter:h(e.onPointerEnter,_(a.onOpen)),onPointerLeave:h(e.onPointerLeave,_(a.onClose)),ref:t})})}),j.displayName=A,xe=v.forwardRef((e,t)=>{let{__scopeHoverCard:n,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:ee,onInteractOutside:o,...s}=e,c=w(A,n),l=C(n),u=v.useRef(null),d=i(t,u),[f,p]=v.useState(!1);return v.useEffect(()=>{if(f){let e=document.body;return b=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect=`none`,e.style.webkitUserSelect=`none`,()=>{e.style.userSelect=b,e.style.webkitUserSelect=b}}},[f]),v.useEffect(()=>{if(u.current){let e=()=>{p(!1),c.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==``&&(c.hasSelectionRef.current=!0)})};return document.addEventListener(`pointerup`,e),()=>{document.removeEventListener(`pointerup`,e),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!1}}},[c.isPointerDownOnContentRef,c.hasSelectionRef]),v.useEffect(()=>{u.current&&ge(u.current).forEach(e=>e.setAttribute(`tabindex`,`-1`))}),(0,y.jsx)(me,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:o,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:h(ee,e=>{e.preventDefault()}),onDismiss:c.onDismiss,children:(0,y.jsx)(le,{...l,...s,onPointerDown:h(s.onPointerDown,e=>{e.currentTarget.contains(e.target)&&p(!0),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!0}),ref:d,style:{...s.style,userSelect:f?`text`:void 0,WebkitUserSelect:f?`text`:void 0,"--radix-hover-card-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-hover-card-content-available-width":`var(--radix-popper-available-width)`,"--radix-hover-card-content-available-height":`var(--radix-popper-available-height)`,"--radix-hover-card-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-hover-card-trigger-height":`var(--radix-popper-anchor-height)`}})})}),Se=`HoverCardArrow`,M=v.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=C(n);return(0,y.jsx)(se,{...i,...r,ref:t})}),M.displayName=Se,Ce=T,we=D,Te=k,Ee=j,De=M})),N,P,F,I,L,R,z,B,ke=e((()=>{Oe(),c(),u(),N=r(),P=e=>(0,N.jsx)(Ce,{"data-slot":`hover-card-root`,...e}),P.displayName=`HoverCard.Root`,F=e=>(0,N.jsx)(we,{"data-slot":`hover-card-trigger`,...e}),F.displayName=`HoverCard.Trigger`,I=Te,L=s({base:[`z-(--z-index-flyover) rounded-lg bg-bg-default-base-primary p-4 shadow-xl`,`border border-border-default-base-primary`,`text-sm text-text-default-base-primary`,`will-change-[transform,opacity]`,`data-[side=bottom]:origin-top data-[side=left]:origin-right`,`data-[side=right]:origin-left data-[side=top]:origin-bottom`,`data-[state=open]:data-[side=bottom]:animate-dropdown-slide-in-from-top`,`data-[state=open]:data-[side=left]:animate-dropdown-slide-in-from-right`,`data-[state=open]:data-[side=right]:animate-dropdown-slide-in-from-left`,`data-[state=open]:data-[side=top]:animate-dropdown-slide-in-from-bottom`,`data-[state=closed]:animate-dropdown-slide-out`,`motion-reduce:animate-none!`]}),R=({className:e,sideOffset:t=8,collisionPadding:n=8,...r})=>(0,N.jsx)(Ee,{"data-slot":`hover-card-content`,sideOffset:t,collisionPadding:n,className:L({className:e}),...r}),R.displayName=`HoverCard.Content`,z=({className:e,...t})=>(0,N.jsx)(De,{"data-slot":`hover-card-arrow`,className:l(`fill-bg-default-base-primary`,e),...t}),z.displayName=`HoverCard.Arrow`,B={Root:P,Trigger:F,Portal:I,Content:R,Arrow:z};try{L.displayName=`hoverCardRecipe`,L.__docgenInfo={description:``,displayName:`hoverCardRecipe`,props:{class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{B.displayName=`HoverCard`,B.__docgenInfo={description:"Rich, sighted-user hover preview anchored to a trigger (profile cards, entity\npreviews) shown on hover/focus, built on Radix HoverCard. Compose from\n`Root` / `Trigger` / `Portal` / `Content`, plus an optional `Arrow`.\n\nPointer-first and NOT keyboard-accessible: focus opens it but focus never\nenters the card — never put essential info or the only path to an action\ninside. Use `Popover`/`DropdownMenu` for that, or `Tooltip` for text hints.",displayName:`HoverCard`,props:{}}}catch{}try{B.Root.displayName=`HoverCard.Root`,B.Root.__docgenInfo={description:``,displayName:`HoverCard.Root`,props:{}}}catch{}try{B.Trigger.displayName=`HoverCard.Trigger`,B.Trigger.__docgenInfo={description:``,displayName:`HoverCard.Trigger`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{I.displayName=`Portal`,I.__docgenInfo={description:``,displayName:`Portal`,props:{}}}catch{}try{B.Content.displayName=`HoverCard.Content`,B.Content.__docgenInfo={description:``,displayName:`HoverCard.Content`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{B.Arrow.displayName=`HoverCard.Arrow`,B.Arrow.__docgenInfo={description:``,displayName:`HoverCard.Arrow`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}})),V,H,U,W,G,K,Ae,q,J,Y,X,Z,Q,$;e((()=>{he(),ke(),V=r(),{expect:H,userEvent:U,waitFor:W,within:G}=__STORYBOOK_MODULE_TEST__,K=()=>(0,V.jsxs)(`div`,{className:`flex w-72 gap-3`,children:[(0,V.jsx)(f,{fallback:`AG`,colorize:`Agentero`,type:`initials`,size:`md`}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,V.jsx)(`p`,{className:`font-medium text-text-default-base-primary`,children:`Agentero`}),(0,V.jsx)(`p`,{className:`text-text-default-base-tertiary`,children:`Insurance marketplace for independent agents.`})]})]}),Ae={title:`Components/HoverCard`,component:B.Root,tags:[`autodocs`],argTypes:{openDelay:{control:`number`},closeDelay:{control:`number`}},args:{openDelay:0,closeDelay:0},decorators:[e=>(0,V.jsx)(`div`,{className:`flex min-h-64 items-center justify-center p-10`,children:(0,V.jsx)(e,{})})],parameters:{docs:{description:{component:"HoverCard reveals rich, sighted-user preview content anchored to a trigger\non pointer hover or keyboard focus. Compose it from `Root` / `Trigger` /\n`Portal` / `Content`."}}}},q={render:e=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`@agentero`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsx)(K,{})})})]}),play:async({canvasElement:e})=>{let t=G(e),n=G(document.body),r=t.getByRole(`link`,{name:/@agentero/i});await H(r).toHaveAttribute(`data-slot`,`hover-card-trigger`),await H(n.queryByText(/insurance marketplace/i)).not.toBeInTheDocument(),await U.hover(r),await H((await n.findAllByText(/insurance marketplace/i)).length).toBeGreaterThan(0),await H(document.querySelector(`[data-slot="hover-card-content"]`)).toBeInTheDocument(),await U.unhover(r),await W(()=>H(n.queryByText(/insurance marketplace/i)).not.toBeInTheDocument())}},J={render:e=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`@agentero`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsx)(K,{})})})]}),play:async({canvasElement:e})=>{let t=G(e),n=G(document.body),r=t.getByRole(`link`,{name:/@agentero/i});await U.tab(),await H(r).toHaveFocus(),await H((await n.findAllByText(/insurance marketplace/i)).length).toBeGreaterThan(0)}},Y={render:e=>(0,V.jsx)(`div`,{className:`grid grid-cols-2 gap-10`,children:[`top`,`right`,`bottom`,`left`].map(t=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:t})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{side:t,children:(0,V.jsx)(K,{})})})]},t))})},X={render:e=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`@agentero`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{className:`w-80`,children:(0,V.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,V.jsxs)(`div`,{className:`flex gap-3`,children:[(0,V.jsx)(f,{fallback:`AG`,colorize:`Agentero`,type:`initials`,size:`lg`}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,V.jsx)(`p`,{className:`font-medium text-text-default-base-primary`,children:`Agentero`}),(0,V.jsx)(`p`,{className:`text-text-default-base-tertiary`,children:`Insurance marketplace for independent agents.`})]})]}),(0,V.jsxs)(`div`,{className:`flex gap-4 text-text-default-base-secondary`,children:[(0,V.jsxs)(`span`,{children:[(0,V.jsx)(`span`,{className:`font-medium text-text-default-base-primary`,children:`128`}),` carriers`]}),(0,V.jsxs)(`span`,{children:[(0,V.jsx)(`span`,{className:`font-medium text-text-default-base-primary`,children:`50`}),` states`]})]}),(0,V.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`View profile`})]})})})]}),play:async({canvasElement:e})=>{let t=G(e),n=G(document.body),r=t.getByRole(`link`,{name:/@agentero/i});await U.hover(r),await H(await n.findByText(/128/)).toBeInTheDocument(),await H(await n.findByRole(`link`,{name:/view profile/i})).toBeInTheDocument()}},Z={decorators:[e=>(0,V.jsx)(`div`,{className:`rounded-lg bg-slate-300 p-16`,children:(0,V.jsx)(e,{})})],render:e=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`@agentero`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsxs)(B.Content,{children:[(0,V.jsx)(K,{}),(0,V.jsx)(B.Arrow,{})]})})]}),play:async({canvasElement:e})=>{let t=G(e).getByRole(`link`,{name:/@agentero/i});await U.hover(t),await W(()=>H(document.querySelector(`[data-slot="hover-card-arrow"]`)).toBeInTheDocument())}},Q={render:()=>(0,V.jsxs)(`div`,{className:`flex gap-10`,children:[(0,V.jsxs)(B.Root,{openDelay:700,closeDelay:300,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`Default (700ms)`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsx)(K,{})})})]}),(0,V.jsxs)(B.Root,{openDelay:0,closeDelay:0,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`Instant (0ms)`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsx)(K,{})})})]})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <a href="https://agentero.com" className="text-text-default-base-primary underline">
                    @agentero
                </a>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content>
                    <PreviewCard />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('link', {
      name: /@agentero/i
    });
    await expect(trigger).toHaveAttribute('data-slot', 'hover-card-trigger');
    await expect(body.queryByText(/insurance marketplace/i)).not.toBeInTheDocument();
    await userEvent.hover(trigger);
    const previews = await body.findAllByText(/insurance marketplace/i);
    await expect(previews.length).toBeGreaterThan(0);
    await expect(document.querySelector('[data-slot="hover-card-content"]')).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => expect(body.queryByText(/insurance marketplace/i)).not.toBeInTheDocument());
  }
}`,...q.parameters?.docs?.source},description:{story:`Default preview revealed on hover; hides again on unhover.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <a href="https://agentero.com" className="text-text-default-base-primary underline">
                    @agentero
                </a>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content>
                    <PreviewCard />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('link', {
      name: /@agentero/i
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    const previews = await body.findAllByText(/insurance marketplace/i);
    await expect(previews.length).toBeGreaterThan(0);
  }
}`,...J.parameters?.docs?.source},description:{story:`Opens on focus as a supplementary affordance. Note this is not the same as
being keyboard-accessible: focus does not move into the card and it closes
on blur, so any interactive content inside stays unreachable by keyboard —
never put essential actions there.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid grid-cols-2 gap-10">
            {(['top', 'right', 'bottom', 'left'] as const).map(side => <HoverCard.Root key={side} {...args}>
                    <HoverCard.Trigger asChild>
                        <a href="https://agentero.com" className="text-text-default-base-primary underline">
                            {side}
                        </a>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                        <HoverCard.Content side={side}>
                            <PreviewCard />
                        </HoverCard.Content>
                    </HoverCard.Portal>
                </HoverCard.Root>)}
        </div>
}`,...Y.parameters?.docs?.source},description:{story:"`side` sets the preferred placement; it flips on viewport collision.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <a href="https://agentero.com" className="text-text-default-base-primary underline">
                    @agentero
                </a>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content className="w-80">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <Avatar fallback="AG" colorize="Agentero" type="initials" size="lg" />
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-text-default-base-primary">Agentero</p>
                                <p className="text-text-default-base-tertiary">
                                    Insurance marketplace for independent agents.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-text-default-base-secondary">
                            <span>
                                <span className="font-medium text-text-default-base-primary">128</span> carriers
                            </span>
                            <span>
                                <span className="font-medium text-text-default-base-primary">50</span> states
                            </span>
                        </div>
                        <a href="https://agentero.com" className="text-text-default-base-primary underline">
                            View profile
                        </a>
                    </div>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('link', {
      name: /@agentero/i
    });
    await userEvent.hover(trigger);
    await expect(await body.findByText(/128/)).toBeInTheDocument();
    const profileLink = await body.findByRole('link', {
      name: /view profile/i
    });
    await expect(profileLink).toBeInTheDocument();
  }
}`,...X.parameters?.docs?.source},description:{story:`The whole point of a HoverCard over a Tooltip: freely laid-out content that
may include its own links and actions. Still supplementary — never the only
path to an action.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="rounded-lg bg-slate-300 p-16">
                <Story />
            </div>],
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <a href="https://agentero.com" className="text-text-default-base-primary underline">
                    @agentero
                </a>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content>
                    <PreviewCard />
                    <HoverCard.Arrow />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('link', {
      name: /@agentero/i
    });
    await userEvent.hover(trigger);
    await waitFor(() => expect(document.querySelector('[data-slot="hover-card-arrow"]')).toBeInTheDocument());
  }
}`,...Z.parameters?.docs?.source},description:{story:"An optional `Arrow` points back at the trigger; render it inside `Content`.\nThe arrow is filled with the card background (white), so it only reads\nagainst a surface that contrasts with the card — shown here on a muted\nbackdrop.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-10">
            <HoverCard.Root openDelay={700} closeDelay={300}>
                <HoverCard.Trigger asChild>
                    <a href="https://agentero.com" className="text-text-default-base-primary underline">
                        Default (700ms)
                    </a>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                    <HoverCard.Content>
                        <PreviewCard />
                    </HoverCard.Content>
                </HoverCard.Portal>
            </HoverCard.Root>
            <HoverCard.Root openDelay={0} closeDelay={0}>
                <HoverCard.Trigger asChild>
                    <a href="https://agentero.com" className="text-text-default-base-primary underline">
                        Instant (0ms)
                    </a>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                    <HoverCard.Content>
                        <PreviewCard />
                    </HoverCard.Content>
                </HoverCard.Portal>
            </HoverCard.Root>
        </div>
}`,...Q.parameters?.docs?.source},description:{story:"`openDelay` / `closeDelay` tune the hover latency. Default is a deliberate\n`700ms` open so cards don't flash on incidental passes; drop it to `0` for\ntrigger-dense UIs where an instant preview reads as more responsive.",...Q.parameters?.docs?.description}}},$=[`Default`,`OpensOnFocus`,`Sides`,`RichContent`,`WithArrow`,`Delays`]}))();export{q as Default,Q as Delays,J as OpensOnFocus,X as RichContent,Y as Sides,Z as WithArrow,$ as __namedExportsOrder,Ae as default};