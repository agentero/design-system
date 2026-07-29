import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-BMqBnlE1.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-CopUfO-o.js";import{n as o,t as s}from"./dist-y8Lcfz_d.js";import{n as c,t as l}from"./dist-xs6gOf1u.js";import{n as u,t as d}from"./lib-Dkaf_tmd.js";import{t as f}from"./button-Clz348T1.js";import{t as p}from"./button-C9JJ_f-D.js";import{t as m}from"./avatar-BJYl55tp.js";import{t as h}from"./avatar-CUClxwmj.js";import{i as ee,n as te,r as g,t as ne}from"./dist-BfRnWe9w2.js";import{n as re,t as ie}from"./dist-CcyMf1LN2.js";import{r as ae,t as oe}from"./dist-BtNgvtYc2.js";import{a as se,i as ce,n as le,o as ue,r as de,t as fe}from"./dist-ClRysESu2.js";import{a as pe,i as me,n as he,t as ge}from"./dist-BmYyd8Ho.js";function _(e){return t=>t.pointerType===`touch`?void 0:e()}function _e(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t}var v,y,b,x,S,ve,C,ye,w,T,E,D,O,be,xe,k,A,j,Se,Ce,M,we,Te,Ee,De,Oe,ke=e((()=>{v=t(n(),1),ee(),re(),s(),a(),ue(),pe(),te(),ae(),he(),y=r(),x=`HoverCard`,[S,ve]=ie(x,[se]),C=se(),[ye,w]=S(x),T=e=>{let{__scopeHoverCard:t,children:n,open:r,defaultOpen:i,onOpenChange:a,openDelay:s=700,closeDelay:c=300}=e,l=C(t),u=v.useRef(0),d=v.useRef(0),f=v.useRef(!1),p=v.useRef(!1),[m,h]=o({prop:r,defaultProp:i??!1,onChange:a,caller:x}),ee=v.useCallback(()=>{clearTimeout(d.current),u.current=window.setTimeout(()=>h(!0),s)},[s,h]),te=v.useCallback(()=>{clearTimeout(u.current),!f.current&&!p.current&&(d.current=window.setTimeout(()=>h(!1),c))},[c,h]),g=v.useCallback(()=>h(!1),[h]);return v.useEffect(()=>()=>{clearTimeout(u.current),clearTimeout(d.current)},[]),(0,y.jsx)(ye,{scope:t,open:m,onOpenChange:h,onOpen:ee,onClose:te,onDismiss:g,hasSelectionRef:f,isPointerDownOnContentRef:p,children:(0,y.jsx)(ce,{...l,children:n})})},T.displayName=x,E=`HoverCardTrigger`,D=v.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=w(E,n),a=C(n);return(0,y.jsx)(fe,{asChild:!0,...a,children:(0,y.jsx)(oe.a,{"data-state":i.open?`open`:`closed`,...r,ref:t,onPointerEnter:g(e.onPointerEnter,_(i.onOpen)),onPointerLeave:g(e.onPointerLeave,_(i.onClose)),onFocus:g(e.onFocus,i.onOpen),onBlur:g(e.onBlur,i.onClose),onTouchStart:g(e.onTouchStart,e=>e.preventDefault())})})}),D.displayName=E,O=`HoverCardPortal`,[be,xe]=S(O,{forceMount:void 0}),k=e=>{let{__scopeHoverCard:t,forceMount:n,children:r,container:i}=e,a=w(O,t);return(0,y.jsx)(be,{scope:t,forceMount:n,children:(0,y.jsx)(ne,{present:n||a.open,children:(0,y.jsx)(me,{asChild:!0,container:i,children:r})})})},k.displayName=O,A=`HoverCardContent`,j=v.forwardRef((e,t)=>{let n=xe(A,e.__scopeHoverCard),{forceMount:r=n.forceMount,...i}=e,a=w(A,e.__scopeHoverCard);return(0,y.jsx)(ne,{present:r||a.open,children:(0,y.jsx)(Se,{"data-state":a.open?`open`:`closed`,...i,onPointerEnter:g(e.onPointerEnter,_(a.onOpen)),onPointerLeave:g(e.onPointerLeave,_(a.onClose)),ref:t})})}),j.displayName=A,Se=v.forwardRef((e,t)=>{let{__scopeHoverCard:n,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,...c}=e,l=w(A,n),u=C(n),d=v.useRef(null),f=i(t,d),[p,m]=v.useState(!1);return v.useEffect(()=>{if(p){let e=document.body;return b=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect=`none`,e.style.webkitUserSelect=`none`,()=>{e.style.userSelect=b,e.style.webkitUserSelect=b}}},[p]),v.useEffect(()=>{if(d.current){let e=()=>{m(!1),l.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==``&&(l.hasSelectionRef.current=!0)})};return document.addEventListener(`pointerup`,e),()=>{document.removeEventListener(`pointerup`,e),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!1}}},[l.isPointerDownOnContentRef,l.hasSelectionRef]),v.useEffect(()=>{d.current&&_e(d.current).forEach(e=>e.setAttribute(`tabindex`,`-1`))}),(0,y.jsx)(ge,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:s,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:g(o,e=>{e.preventDefault()}),onDismiss:l.onDismiss,children:(0,y.jsx)(de,{...u,...c,onPointerDown:g(c.onPointerDown,e=>{e.currentTarget.contains(e.target)&&m(!0),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!0}),ref:f,style:{...c.style,userSelect:p?`text`:void 0,WebkitUserSelect:p?`text`:void 0,"--radix-hover-card-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-hover-card-content-available-width":`var(--radix-popper-available-width)`,"--radix-hover-card-content-available-height":`var(--radix-popper-available-height)`,"--radix-hover-card-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-hover-card-trigger-height":`var(--radix-popper-anchor-height)`}})})}),Ce=`HoverCardArrow`,M=v.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=C(n);return(0,y.jsx)(le,{...i,...r,ref:t})}),M.displayName=Ce,we=T,Te=D,Ee=k,De=j,Oe=M})),N,P,F,I,L,R,z,B,Ae=e((()=>{ke(),l(),d(),N=r(),P=e=>(0,N.jsx)(we,{"data-slot":`hover-card-root`,...e}),P.displayName=`HoverCard.Root`,F=e=>(0,N.jsx)(Te,{"data-slot":`hover-card-trigger`,...e}),F.displayName=`HoverCard.Trigger`,I=Ee,L=c({base:[`z-(--z-index-flyover) max-w-80 rounded-lg bg-bg-default-base-primary p-4 shadow-xl`,`border border-border-default-base-primary`,`text-sm text-text-default-base-primary`,`will-change-[transform,opacity]`,`data-[side=bottom]:origin-top data-[side=left]:origin-right`,`data-[side=right]:origin-left data-[side=top]:origin-bottom`,`transition-[opacity,transform] duration-200 ease-out`,`starting:opacity-0 starting:[transform:scale(0.9)]`,`data-[state=closed]:opacity-0 data-[state=closed]:[transform:scale(0.9)]`,`data-[state=closed]:duration-150 data-[state=closed]:ease-in`,`data-[state=closed]:animate-presence-hold`,`motion-reduce:transition-none motion-reduce:animate-none!`]}),R=({className:e,sideOffset:t=8,collisionPadding:n=8,...r})=>(0,N.jsx)(De,{"data-slot":`hover-card-content`,sideOffset:t,collisionPadding:n,className:L({className:e}),...r}),R.displayName=`HoverCard.Content`,z=({className:e,width:t=12,height:n=6,...r})=>(0,N.jsx)(Oe,{"data-slot":`hover-card-arrow`,width:t,height:n,asChild:!0,...r,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 12 6`,className:u(`fill-bg-default-base-primary stroke-border-default-base-primary`,e),children:[(0,N.jsx)(`polygon`,{points:`0,0 6,6 12,0`,stroke:`none`}),(0,N.jsx)(`path`,{d:`M0 0 L6 6 L12 0`,fill:`none`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})]})}),z.displayName=`HoverCard.Arrow`,B={Root:P,Trigger:F,Portal:I,Content:R,Arrow:z};try{L.displayName=`hoverCardRecipe`,L.__docgenInfo={description:``,displayName:`hoverCardRecipe`,props:{class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{B.displayName=`HoverCard`,B.__docgenInfo={description:"Rich, sighted-user hover preview anchored to a trigger (profile cards, entity\npreviews) shown on hover/focus, built on Radix HoverCard. Compose from\n`Root` / `Trigger` / `Portal` / `Content`, plus an optional `Arrow`.\n\nPointer-first and NOT keyboard-accessible: focus opens it but focus never\nenters the card — never put essential info or the only path to an action\ninside. Use `Popover`/`DropdownMenu` for that, or `Tooltip` for text hints.",displayName:`HoverCard`,props:{}}}catch{}try{B.Root.displayName=`HoverCard.Root`,B.Root.__docgenInfo={description:``,displayName:`HoverCard.Root`,props:{}}}catch{}try{B.Trigger.displayName=`HoverCard.Trigger`,B.Trigger.__docgenInfo={description:``,displayName:`HoverCard.Trigger`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{I.displayName=`Portal`,I.__docgenInfo={description:``,displayName:`Portal`,props:{}}}catch{}try{B.Content.displayName=`HoverCard.Content`,B.Content.__docgenInfo={description:``,displayName:`HoverCard.Content`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{B.Arrow.displayName=`HoverCard.Arrow`,B.Arrow.__docgenInfo={description:``,displayName:`HoverCard.Arrow`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}})),V,H,U,W,G,K,je,q,J,Y,Me,X,Z,Q,$,Ne;e((()=>{h(),p(),Ae(),V=r(),{expect:H,userEvent:U,waitFor:W,within:G}=__STORYBOOK_MODULE_TEST__,K=()=>(0,V.jsxs)(`div`,{className:`flex gap-3`,children:[(0,V.jsx)(m,{fallback:`AL`,colorize:`Ada Lovelace`,type:`initials`,size:`md`}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,V.jsx)(`p`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Ada Lovelace`}),(0,V.jsx)(`p`,{className:`text-text-default-base-tertiary`,children:`Product designer on the design systems team.`})]})]}),je={title:`Components/HoverCard`,component:B.Root,tags:[`autodocs`],argTypes:{openDelay:{control:`number`},closeDelay:{control:`number`}},args:{openDelay:0,closeDelay:0},decorators:[e=>(0,V.jsx)(`div`,{className:`flex min-h-64 items-center justify-center p-10`,children:(0,V.jsx)(e,{})})],parameters:{docs:{description:{component:"HoverCard reveals rich, sighted-user preview content anchored to a trigger\non pointer hover or keyboard focus. Compose it from `Root` / `Trigger` /\n`Portal` / `Content`.\n\n`Trigger` takes any focusable control through `asChild`; these stories use a\n`secondary` Button throughout. Radix mirrors open state onto whatever you\npass, so the trigger can style itself off `data-state`."}}}},q={render:e=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(f,{variant:`secondary`,children:`Hover me`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsx)(K,{})})})]}),play:async({canvasElement:e})=>{let t=G(e),n=G(document.body),r=t.getByRole(`button`,{name:/hover me/i});await H(r).toHaveAttribute(`data-slot`,`hover-card-trigger`),await H(n.queryByText(/product designer/i)).not.toBeInTheDocument(),await U.hover(r),await H((await n.findAllByText(/product designer/i)).length).toBeGreaterThan(0),await H(document.querySelector(`[data-slot="hover-card-content"]`)).toBeInTheDocument(),await H(r).toHaveAttribute(`data-state`,`open`),await U.unhover(r),await W(()=>H(n.queryByText(/product designer/i)).not.toBeInTheDocument()),await H(r).toHaveAttribute(`data-state`,`closed`)}},J={render:e=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(f,{variant:`secondary`,children:`Hover me`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsx)(K,{})})})]}),play:async({canvasElement:e})=>{let t=G(e).getByRole(`button`,{name:/hover me/i});await U.hover(t);let n=await W(()=>{let e=document.querySelector(`[data-slot="hover-card-content"]`);if(!e)throw Error(`hover card never opened`);return e}),r=[],i=!0,a=()=>{i&&(n.isConnected&&r.push({state:n.getAttribute(`data-state`),opacity:Number(getComputedStyle(n).opacity)}),requestAnimationFrame(a))};a(),await U.unhover(t),await W(()=>H(n.isConnected).toBe(!1)),i=!1;let o=r.findIndex(e=>e.state===`closed`);await H(o).toBeGreaterThan(0);let s=r[o-1]?.opacity??1,c=r[o]?.opacity??1;await H(s).toBeLessThan(1),await H(c).toBeLessThanOrEqual(s)}},Y={render:e=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(f,{variant:`secondary`,children:`Focus me`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsx)(K,{})})})]}),play:async({canvasElement:e})=>{let t=G(e),n=G(document.body),r=t.getByRole(`button`,{name:/focus me/i});await U.tab(),await H(r).toHaveFocus(),await H((await n.findAllByText(/product designer/i)).length).toBeGreaterThan(0)}},Me={top:`col-start-2 row-start-1`,right:`col-start-3 row-start-2`,bottom:`col-start-2 row-start-3`,left:`col-start-1 row-start-2`},X={decorators:[e=>(0,V.jsx)(`div`,{className:`py-32`,children:(0,V.jsx)(e,{})})],render:e=>(0,V.jsx)(`div`,{className:`grid grid-cols-3 grid-rows-3 gap-4`,children:[`top`,`right`,`bottom`,`left`].map(t=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(f,{variant:`secondary`,className:`capitalize ${Me[t]}`,children:t})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{side:t,children:(0,V.jsx)(K,{})})})]},t))})},Z={render:e=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(f,{variant:`secondary`,children:`Hover me`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,V.jsxs)(`div`,{className:`flex gap-3`,children:[(0,V.jsx)(m,{fallback:`AL`,colorize:`Ada Lovelace`,type:`initials`,size:`lg`}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,V.jsx)(`p`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Ada Lovelace`}),(0,V.jsx)(`p`,{className:`text-text-default-base-tertiary`,children:`Product designer on the design systems team.`})]})]}),(0,V.jsxs)(`div`,{className:`flex gap-5 text-text-default-base-secondary`,children:[(0,V.jsxs)(`span`,{children:[(0,V.jsx)(`span`,{className:`font-medium text-text-default-base-primary`,children:`128`}),` followers`]}),(0,V.jsxs)(`span`,{children:[(0,V.jsx)(`span`,{className:`font-medium text-text-default-base-primary`,children:`24`}),` projects`]})]}),(0,V.jsx)(f,{variant:`secondary`,size:`sm`,className:`mt-2`,asChild:!0,children:(0,V.jsx)(`a`,{href:`https://example.com/ada-lovelace`,children:`View profile`})})]})})})]}),play:async({canvasElement:e})=>{let t=G(e),n=G(document.body),r=t.getByRole(`button`,{name:/hover me/i});await U.hover(r),await H(await n.findByText(/128/)).toBeInTheDocument();let i=await n.findByRole(`link`,{name:/view profile/i});await H(i).toHaveAttribute(`data-slot`,`button`),await H(i).toHaveAttribute(`href`,`https://example.com/ada-lovelace`)}},Q={render:e=>(0,V.jsxs)(B.Root,{...e,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(f,{variant:`secondary`,children:`Hover me`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsxs)(B.Content,{children:[(0,V.jsx)(K,{}),(0,V.jsx)(B.Arrow,{})]})})]}),play:async({canvasElement:e})=>{let t=G(e).getByRole(`button`,{name:/hover me/i});await U.hover(t);let n=(await W(()=>{let e=document.querySelector(`[data-slot="hover-card-arrow"]`);if(!e)throw Error(`arrow never rendered`);return e})).querySelector(`path`);await H(n).toBeInTheDocument(),await H(getComputedStyle(n).stroke).not.toBe(`none`),await H(n).toHaveAttribute(`d`,H.not.stringContaining(`Z`))}},$={render:()=>(0,V.jsxs)(`div`,{className:`grid grid-cols-2 gap-10`,children:[(0,V.jsxs)(B.Root,{openDelay:700,closeDelay:300,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(f,{variant:`secondary`,children:`Default (700ms)`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsx)(K,{})})})]}),(0,V.jsxs)(B.Root,{openDelay:0,closeDelay:0,children:[(0,V.jsx)(B.Trigger,{asChild:!0,children:(0,V.jsx)(f,{variant:`secondary`,children:`Instant (0ms)`})}),(0,V.jsx)(B.Portal,{children:(0,V.jsx)(B.Content,{children:(0,V.jsx)(K,{})})})]})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <Button variant="secondary">Hover me</Button>
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
    const trigger = canvas.getByRole('button', {
      name: /hover me/i
    });
    await expect(trigger).toHaveAttribute('data-slot', 'hover-card-trigger');
    await expect(body.queryByText(/product designer/i)).not.toBeInTheDocument();
    await userEvent.hover(trigger);
    const previews = await body.findAllByText(/product designer/i);
    await expect(previews.length).toBeGreaterThan(0);
    await expect(document.querySelector('[data-slot="hover-card-content"]')).toBeInTheDocument();
    // Open state lands on the Button itself, so it can style its own open look.
    await expect(trigger).toHaveAttribute('data-state', 'open');
    await userEvent.unhover(trigger);
    await waitFor(() => expect(body.queryByText(/product designer/i)).not.toBeInTheDocument());
    await expect(trigger).toHaveAttribute('data-state', 'closed');
  }
}`,...q.parameters?.docs?.source},description:{story:`Default preview revealed on hover; hides again on unhover.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <Button variant="secondary">Hover me</Button>
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
    const trigger = canvas.getByRole('button', {
      name: /hover me/i
    });
    await userEvent.hover(trigger);
    const content = await waitFor(() => {
      const node = document.querySelector('[data-slot="hover-card-content"]');
      if (!node) throw new Error('hover card never opened');
      return node;
    });

    // Sample every frame across the interruption. The entrance runs 200ms, so
    // leaving now lands well inside it.
    const frames: {
      state: string | null;
      opacity: number;
    }[] = [];
    let sampling = true;
    const sample = () => {
      if (!sampling) return;
      if (content.isConnected) {
        frames.push({
          state: content.getAttribute('data-state'),
          opacity: Number(getComputedStyle(content).opacity)
        });
      }
      requestAnimationFrame(sample);
    };
    sample();
    await userEvent.unhover(trigger);
    await waitFor(() => expect(content.isConnected).toBe(false));
    sampling = false;
    const closing = frames.findIndex(frame => frame.state === 'closed');
    await expect(closing).toBeGreaterThan(0);
    const lastOpen = frames[closing - 1]?.opacity ?? 1;
    const firstClosed = frames[closing]?.opacity ?? 1;
    // The card was still fading in when the pointer left, and opacity keeps
    // falling from there instead of snapping back up to 1.
    await expect(lastOpen).toBeLessThan(1);
    await expect(firstClosed).toBeLessThanOrEqual(lastOpen);
  }
}`,...J.parameters?.docs?.source},description:{story:`Brushing the trigger and leaving without ever reaching the card is the most
common way a hover card gets dismissed, so the exit reverses the entrance
from wherever it got to. Driving it with keyframes instead would restart the
exit at full opacity and scale, popping the half-faded card to fully visible
on its way out.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <Button variant="secondary">Focus me</Button>
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
    const trigger = canvas.getByRole('button', {
      name: /focus me/i
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    const previews = await body.findAllByText(/product designer/i);
    await expect(previews.length).toBeGreaterThan(0);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Opens on focus as a supplementary affordance. Note this is not the same as
being keyboard-accessible: focus does not move into the card and it closes
on blur, so any interactive content inside stays unreachable by keyboard —
never put essential actions there.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  // Headroom so \`top\` clears the viewport and actually opens upward rather
  // than flipping — the point here is the four placements, not the collision.
  decorators: [Story => <div className="py-32">
                <Story />
            </div>],
  render: args => <div className="grid grid-cols-3 grid-rows-3 gap-4">
            {(['top', 'right', 'bottom', 'left'] as const).map(side => <HoverCard.Root key={side} {...args}>
                    <HoverCard.Trigger asChild>
                        {/* \`capitalize\` sits on the Button because Preflight resets
                            text-transform on <button>, so it can't be inherited. */}
                        <Button variant="secondary" className={\`capitalize \${SIDE_CELL[side]}\`}>
                            {side}
                        </Button>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                        <HoverCard.Content side={side}>
                            <PreviewCard />
                        </HoverCard.Content>
                    </HoverCard.Portal>
                </HoverCard.Root>)}
        </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <Button variant="secondary">Hover me</Button>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content>
                    {/* Identity and stats are one unit at gap-2; the action is a
                        separate concern, so it gets mt-2 on top of that for 16px. */}
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3">
                            <Avatar fallback="AL" colorize="Ada Lovelace" type="initials" size="lg" />
                            <div className="flex flex-col gap-0.5">
                                <p className="text-base font-semibold text-text-default-base-primary">
                                    Ada Lovelace
                                </p>
                                <p className="text-text-default-base-tertiary">
                                    Product designer on the design systems team.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 text-text-default-base-secondary">
                            <span>
                                <span className="font-medium text-text-default-base-primary">128</span> followers
                            </span>
                            <span>
                                <span className="font-medium text-text-default-base-primary">24</span> projects
                            </span>
                        </div>
                        <Button variant="secondary" size="sm" className="mt-2" asChild>
                            <a href="https://example.com/ada-lovelace">View profile</a>
                        </Button>
                    </div>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: /hover me/i
    });
    await userEvent.hover(trigger);
    await expect(await body.findByText(/128/)).toBeInTheDocument();
    // \`asChild\` keeps the anchor semantics while picking up Button's styling.
    const profileLink = await body.findByRole('link', {
      name: /view profile/i
    });
    await expect(profileLink).toHaveAttribute('data-slot', 'button');
    await expect(profileLink).toHaveAttribute('href', 'https://example.com/ada-lovelace');
  }
}`,...Z.parameters?.docs?.source},description:{story:`The whole point of a HoverCard over a Tooltip: freely laid-out content that
may include its own links and actions. Keep those actions at \`secondary\` or
below — a primary CTA inside a card the keyboard can't reach reads as the
main path to something it isn't. The trigger still has to stand on its own.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <Button variant="secondary">Hover me</Button>
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
    const trigger = canvas.getByRole('button', {
      name: /hover me/i
    });
    await userEvent.hover(trigger);
    const arrow = await waitFor(() => {
      const node = document.querySelector('[data-slot="hover-card-arrow"]');
      if (!node) throw new Error('arrow never rendered');
      return node;
    });

    // The stroked slopes are what make the arrow read against the card border.
    const slopes = arrow.querySelector('path');
    await expect(slopes).toBeInTheDocument();
    await expect(getComputedStyle(slopes!).stroke).not.toBe('none');
    // Open path, no \`Z\`: stroking the base would draw a line across the card.
    await expect(slopes).toHaveAttribute('d', expect.not.stringContaining('Z'));
  }
}`,...Q.parameters?.docs?.source},description:{story:"An optional `Arrow` points back at the trigger; render it inside `Content`.\nIt carries the card's border down both slopes and leaves its base open, so\nthe card and the point read as one shape on any background.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () =>
  // Grid rather than flex so both triggers take the wider label's width —
  // a size difference would read as part of what the delay changes.
  <div className="grid grid-cols-2 gap-10">
            <HoverCard.Root openDelay={700} closeDelay={300}>
                <HoverCard.Trigger asChild>
                    <Button variant="secondary">Default (700ms)</Button>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                    <HoverCard.Content>
                        <PreviewCard />
                    </HoverCard.Content>
                </HoverCard.Portal>
            </HoverCard.Root>
            <HoverCard.Root openDelay={0} closeDelay={0}>
                <HoverCard.Trigger asChild>
                    <Button variant="secondary">Instant (0ms)</Button>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                    <HoverCard.Content>
                        <PreviewCard />
                    </HoverCard.Content>
                </HoverCard.Portal>
            </HoverCard.Root>
        </div>
}`,...$.parameters?.docs?.source},description:{story:"`openDelay` / `closeDelay` tune the hover latency. Default is a deliberate\n`700ms` open so cards don't flash on incidental passes; drop it to `0` for\ntrigger-dense UIs where an instant preview reads as more responsive.",...$.parameters?.docs?.description}}},Ne=[`Default`,`AbandonedHover`,`OpensOnFocus`,`Sides`,`RichContent`,`WithArrow`,`Delays`]}))();export{J as AbandonedHover,q as Default,$ as Delays,Y as OpensOnFocus,Z as RichContent,X as Sides,Q as WithArrow,Ne as __namedExportsOrder,je as default};