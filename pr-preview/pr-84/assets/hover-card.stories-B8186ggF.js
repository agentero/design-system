import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CnqX4F6R.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-BM7RdvCZ.js";import{n as o,t as s}from"./dist-P3-j_kk1.js";import{n as c,t as l}from"./dist-xs6gOf1u.js";import{n as u,t as d}from"./lib-Dkaf_tmd.js";import{t as f}from"./button-Db5xFPXm.js";import{t as p}from"./button-zgCCohwK.js";import{t as m}from"./avatar-BgYkW-Hs.js";import{t as h}from"./avatar-lU45ROP8.js";import{i as ee,n as te,r as g,t as ne}from"./dist-fyaQOaC02.js";import{n as re,t as ie}from"./dist-4Kn4zV9E2.js";import{r as ae,t as oe}from"./dist-u5a4gnWq2.js";import{a as se,i as ce,n as le,o as ue,r as de,t as fe}from"./dist-mZXn_s0u2.js";import{a as pe,i as me,n as he,t as ge}from"./dist-B8K_wG_E.js";function _(e){return t=>t.pointerType===`touch`?void 0:e()}function _e(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t}var v,y,b,x,S,ve,C,ye,w,T,be,E,D,xe,Se,O,k,A,Ce,we,j,Te,Ee,De,Oe,ke,Ae=e((()=>{v=t(n(),1),ee(),re(),s(),a(),ue(),pe(),te(),ae(),he(),y=r(),x=`HoverCard`,[S,ve]=ie(x,[se]),C=se(),[ye,w]=S(x),T=e=>{let{__scopeHoverCard:t,children:n,open:r,defaultOpen:i,onOpenChange:a,openDelay:s=700,closeDelay:c=300}=e,l=C(t),u=v.useRef(0),d=v.useRef(0),f=v.useRef(!1),p=v.useRef(!1),[m,h]=o({prop:r,defaultProp:i??!1,onChange:a,caller:x}),ee=v.useCallback(()=>{clearTimeout(d.current),u.current=window.setTimeout(()=>h(!0),s)},[s,h]),te=v.useCallback(()=>{clearTimeout(u.current),!f.current&&!p.current&&(d.current=window.setTimeout(()=>h(!1),c))},[c,h]),g=v.useCallback(()=>h(!1),[h]);return v.useEffect(()=>()=>{clearTimeout(u.current),clearTimeout(d.current)},[]),(0,y.jsx)(ye,{scope:t,open:m,onOpenChange:h,onOpen:ee,onClose:te,onDismiss:g,hasSelectionRef:f,isPointerDownOnContentRef:p,children:(0,y.jsx)(ce,{...l,children:n})})},T.displayName=x,be=`HoverCardTrigger`,E=v.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=w(be,n),a=C(n);return(0,y.jsx)(fe,{asChild:!0,...a,children:(0,y.jsx)(oe.a,{"data-state":i.open?`open`:`closed`,...r,ref:t,onPointerEnter:g(e.onPointerEnter,_(i.onOpen)),onPointerLeave:g(e.onPointerLeave,_(i.onClose)),onFocus:g(e.onFocus,i.onOpen),onBlur:g(e.onBlur,i.onClose),onTouchStart:g(e.onTouchStart,e=>e.preventDefault())})})}),E.displayName=be,D=`HoverCardPortal`,[xe,Se]=S(D,{forceMount:void 0}),O=e=>{let{__scopeHoverCard:t,forceMount:n,children:r,container:i}=e,a=w(D,t);return(0,y.jsx)(xe,{scope:t,forceMount:n,children:(0,y.jsx)(ne,{present:n||a.open,children:(0,y.jsx)(me,{asChild:!0,container:i,children:r})})})},O.displayName=D,k=`HoverCardContent`,A=v.forwardRef((e,t)=>{let n=Se(k,e.__scopeHoverCard),{forceMount:r=n.forceMount,...i}=e,a=w(k,e.__scopeHoverCard);return(0,y.jsx)(ne,{present:r||a.open,children:(0,y.jsx)(Ce,{"data-state":a.open?`open`:`closed`,...i,onPointerEnter:g(e.onPointerEnter,_(a.onOpen)),onPointerLeave:g(e.onPointerLeave,_(a.onClose)),ref:t})})}),A.displayName=k,Ce=v.forwardRef((e,t)=>{let{__scopeHoverCard:n,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,...c}=e,l=w(k,n),u=C(n),d=v.useRef(null),f=i(t,d),[p,m]=v.useState(!1);return v.useEffect(()=>{if(p){let e=document.body;return b=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect=`none`,e.style.webkitUserSelect=`none`,()=>{e.style.userSelect=b,e.style.webkitUserSelect=b}}},[p]),v.useEffect(()=>{if(d.current){let e=()=>{m(!1),l.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==``&&(l.hasSelectionRef.current=!0)})};return document.addEventListener(`pointerup`,e),()=>{document.removeEventListener(`pointerup`,e),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!1}}},[l.isPointerDownOnContentRef,l.hasSelectionRef]),v.useEffect(()=>{d.current&&_e(d.current).forEach(e=>e.setAttribute(`tabindex`,`-1`))}),(0,y.jsx)(ge,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:s,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:g(o,e=>{e.preventDefault()}),onDismiss:l.onDismiss,children:(0,y.jsx)(de,{...u,...c,onPointerDown:g(c.onPointerDown,e=>{e.currentTarget.contains(e.target)&&m(!0),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!0}),ref:f,style:{...c.style,userSelect:p?`text`:void 0,WebkitUserSelect:p?`text`:void 0,"--radix-hover-card-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-hover-card-content-available-width":`var(--radix-popper-available-width)`,"--radix-hover-card-content-available-height":`var(--radix-popper-available-height)`,"--radix-hover-card-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-hover-card-trigger-height":`var(--radix-popper-anchor-height)`}})})}),we=`HoverCardArrow`,j=v.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=C(n);return(0,y.jsx)(le,{...i,...r,ref:t})}),j.displayName=we,Te=T,Ee=E,De=O,Oe=A,ke=j})),M,N,P,F,I,L,R,z,je=e((()=>{Ae(),l(),d(),M=r(),N=e=>(0,M.jsx)(Te,{"data-slot":`hover-card-root`,...e}),N.displayName=`HoverCard.Root`,P=e=>(0,M.jsx)(Ee,{"data-slot":`hover-card-trigger`,...e}),P.displayName=`HoverCard.Trigger`,F=De,I=c({base:[`z-(--z-index-flyover) rounded-lg bg-bg-default-base-primary p-4 shadow-xl`,`border border-border-default-base-primary`,`text-sm text-text-default-base-primary`,`will-change-[transform,opacity]`,`data-[side=bottom]:origin-top data-[side=left]:origin-right`,`data-[side=right]:origin-left data-[side=top]:origin-bottom`,`transition-[opacity,transform] duration-200 ease-out`,`starting:opacity-0 starting:[transform:scale(0.9)]`,`data-[state=closed]:opacity-0 data-[state=closed]:[transform:scale(0.9)]`,`data-[state=closed]:duration-150 data-[state=closed]:ease-in`,`data-[state=closed]:animate-presence-hold`,`motion-reduce:transition-none motion-reduce:animate-none!`]}),L=({className:e,sideOffset:t=8,collisionPadding:n=8,...r})=>(0,M.jsx)(Oe,{"data-slot":`hover-card-content`,sideOffset:t,collisionPadding:n,className:I({className:e}),...r}),L.displayName=`HoverCard.Content`,R=({className:e,...t})=>(0,M.jsx)(ke,{"data-slot":`hover-card-arrow`,className:u(`fill-bg-default-base-primary`,e),...t}),R.displayName=`HoverCard.Arrow`,z={Root:N,Trigger:P,Portal:F,Content:L,Arrow:R};try{I.displayName=`hoverCardRecipe`,I.__docgenInfo={description:``,displayName:`hoverCardRecipe`,props:{class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{z.displayName=`HoverCard`,z.__docgenInfo={description:"Rich, sighted-user hover preview anchored to a trigger (profile cards, entity\npreviews) shown on hover/focus, built on Radix HoverCard. Compose from\n`Root` / `Trigger` / `Portal` / `Content`, plus an optional `Arrow`.\n\nPointer-first and NOT keyboard-accessible: focus opens it but focus never\nenters the card — never put essential info or the only path to an action\ninside. Use `Popover`/`DropdownMenu` for that, or `Tooltip` for text hints.",displayName:`HoverCard`,props:{}}}catch{}try{z.Root.displayName=`HoverCard.Root`,z.Root.__docgenInfo={description:``,displayName:`HoverCard.Root`,props:{}}}catch{}try{z.Trigger.displayName=`HoverCard.Trigger`,z.Trigger.__docgenInfo={description:``,displayName:`HoverCard.Trigger`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{F.displayName=`Portal`,F.__docgenInfo={description:``,displayName:`Portal`,props:{}}}catch{}try{z.Content.displayName=`HoverCard.Content`,z.Content.__docgenInfo={description:``,displayName:`HoverCard.Content`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{z.Arrow.displayName=`HoverCard.Arrow`,z.Arrow.__docgenInfo={description:``,displayName:`HoverCard.Arrow`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}})),B,V,H,U,W,G,Me,K,q,J,Y,X,Z,Q,$,Ne;e((()=>{h(),p(),je(),B=r(),{expect:V,userEvent:H,waitFor:U,within:W}=__STORYBOOK_MODULE_TEST__,G=()=>(0,B.jsxs)(`div`,{className:`flex w-72 gap-3`,children:[(0,B.jsx)(m,{fallback:`AG`,colorize:`Agentero`,type:`initials`,size:`md`}),(0,B.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,B.jsx)(`p`,{className:`font-medium text-text-default-base-primary`,children:`Agentero`}),(0,B.jsx)(`p`,{className:`text-text-default-base-tertiary`,children:`Insurance marketplace for independent agents.`})]})]}),Me={title:`Components/HoverCard`,component:z.Root,tags:[`autodocs`],argTypes:{openDelay:{control:`number`},closeDelay:{control:`number`}},args:{openDelay:0,closeDelay:0},decorators:[e=>(0,B.jsx)(`div`,{className:`flex min-h-64 items-center justify-center p-10`,children:(0,B.jsx)(e,{})})],parameters:{docs:{description:{component:"HoverCard reveals rich, sighted-user preview content anchored to a trigger\non pointer hover or keyboard focus. Compose it from `Root` / `Trigger` /\n`Portal` / `Content`."}}}},K={render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Trigger,{asChild:!0,children:(0,B.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`@agentero`})}),(0,B.jsx)(z.Portal,{children:(0,B.jsx)(z.Content,{children:(0,B.jsx)(G,{})})})]}),play:async({canvasElement:e})=>{let t=W(e),n=W(document.body),r=t.getByRole(`link`,{name:/@agentero/i});await V(r).toHaveAttribute(`data-slot`,`hover-card-trigger`),await V(n.queryByText(/insurance marketplace/i)).not.toBeInTheDocument(),await H.hover(r),await V((await n.findAllByText(/insurance marketplace/i)).length).toBeGreaterThan(0),await V(document.querySelector(`[data-slot="hover-card-content"]`)).toBeInTheDocument(),await H.unhover(r),await U(()=>V(n.queryByText(/insurance marketplace/i)).not.toBeInTheDocument())}},q={render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Trigger,{asChild:!0,children:(0,B.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`@agentero`})}),(0,B.jsx)(z.Portal,{children:(0,B.jsx)(z.Content,{children:(0,B.jsx)(G,{})})})]}),play:async({canvasElement:e})=>{let t=W(e).getByRole(`link`,{name:/@agentero/i});await H.hover(t);let n=await U(()=>{let e=document.querySelector(`[data-slot="hover-card-content"]`);if(!e)throw Error(`hover card never opened`);return e}),r=[],i=!0,a=()=>{i&&(n.isConnected&&r.push({state:n.getAttribute(`data-state`),opacity:Number(getComputedStyle(n).opacity)}),requestAnimationFrame(a))};a(),await H.unhover(t),await U(()=>V(n.isConnected).toBe(!1)),i=!1;let o=r.findIndex(e=>e.state===`closed`);await V(o).toBeGreaterThan(0);let s=r[o-1]?.opacity??1,c=r[o]?.opacity??1;await V(s).toBeLessThan(1),await V(c).toBeLessThanOrEqual(s)}},J={render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Trigger,{asChild:!0,children:(0,B.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`@agentero`})}),(0,B.jsx)(z.Portal,{children:(0,B.jsx)(z.Content,{children:(0,B.jsx)(G,{})})})]}),play:async({canvasElement:e})=>{let t=W(e),n=W(document.body),r=t.getByRole(`link`,{name:/@agentero/i});await H.tab(),await V(r).toHaveFocus(),await V((await n.findAllByText(/insurance marketplace/i)).length).toBeGreaterThan(0)}},Y={render:e=>(0,B.jsx)(`div`,{className:`grid grid-cols-2 gap-10`,children:[`top`,`right`,`bottom`,`left`].map(t=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Trigger,{asChild:!0,children:(0,B.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:t})}),(0,B.jsx)(z.Portal,{children:(0,B.jsx)(z.Content,{side:t,children:(0,B.jsx)(G,{})})})]},t))})},X={render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Trigger,{asChild:!0,children:(0,B.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`@agentero`})}),(0,B.jsx)(z.Portal,{children:(0,B.jsx)(z.Content,{className:`w-80`,children:(0,B.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,B.jsxs)(`div`,{className:`flex gap-3`,children:[(0,B.jsx)(m,{fallback:`AG`,colorize:`Agentero`,type:`initials`,size:`lg`}),(0,B.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,B.jsx)(`p`,{className:`font-medium text-text-default-base-primary`,children:`Agentero`}),(0,B.jsx)(`p`,{className:`text-text-default-base-tertiary`,children:`Insurance marketplace for independent agents.`})]})]}),(0,B.jsxs)(`div`,{className:`flex gap-4 text-text-default-base-secondary`,children:[(0,B.jsxs)(`span`,{children:[(0,B.jsx)(`span`,{className:`font-medium text-text-default-base-primary`,children:`128`}),` carriers`]}),(0,B.jsxs)(`span`,{children:[(0,B.jsx)(`span`,{className:`font-medium text-text-default-base-primary`,children:`50`}),` states`]})]}),(0,B.jsx)(f,{variant:`secondary`,size:`sm`,asChild:!0,children:(0,B.jsx)(`a`,{href:`https://agentero.com`,children:`View profile`})})]})})})]}),play:async({canvasElement:e})=>{let t=W(e),n=W(document.body),r=t.getByRole(`link`,{name:/@agentero/i});await H.hover(r),await V(await n.findByText(/128/)).toBeInTheDocument();let i=await n.findByRole(`link`,{name:/view profile/i});await V(i).toHaveAttribute(`data-slot`,`button`),await V(i).toHaveAttribute(`href`,`https://agentero.com`)}},Z={render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Trigger,{asChild:!0,children:(0,B.jsx)(f,{variant:`secondary`,children:`Agentero`})}),(0,B.jsx)(z.Portal,{children:(0,B.jsx)(z.Content,{children:(0,B.jsx)(G,{})})})]}),play:async({canvasElement:e})=>{let t=W(e),n=W(document.body),r=t.getByRole(`button`,{name:/agentero/i});await H.hover(r),await V((await n.findAllByText(/insurance marketplace/i)).length).toBeGreaterThan(0),await V(r).toHaveAttribute(`data-state`,`open`),await H.unhover(r),await U(()=>V(r).toHaveAttribute(`data-state`,`closed`))}},Q={decorators:[e=>(0,B.jsx)(`div`,{className:`rounded-lg bg-slate-300 p-16`,children:(0,B.jsx)(e,{})})],render:e=>(0,B.jsxs)(z.Root,{...e,children:[(0,B.jsx)(z.Trigger,{asChild:!0,children:(0,B.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`@agentero`})}),(0,B.jsx)(z.Portal,{children:(0,B.jsxs)(z.Content,{children:[(0,B.jsx)(G,{}),(0,B.jsx)(z.Arrow,{})]})})]}),play:async({canvasElement:e})=>{let t=W(e).getByRole(`link`,{name:/@agentero/i});await H.hover(t),await U(()=>V(document.querySelector(`[data-slot="hover-card-arrow"]`)).toBeInTheDocument())}},$={render:()=>(0,B.jsxs)(`div`,{className:`flex gap-10`,children:[(0,B.jsxs)(z.Root,{openDelay:700,closeDelay:300,children:[(0,B.jsx)(z.Trigger,{asChild:!0,children:(0,B.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`Default (700ms)`})}),(0,B.jsx)(z.Portal,{children:(0,B.jsx)(z.Content,{children:(0,B.jsx)(G,{})})})]}),(0,B.jsxs)(z.Root,{openDelay:0,closeDelay:0,children:[(0,B.jsx)(z.Trigger,{asChild:!0,children:(0,B.jsx)(`a`,{href:`https://agentero.com`,className:`text-text-default-base-primary underline`,children:`Instant (0ms)`})}),(0,B.jsx)(z.Portal,{children:(0,B.jsx)(z.Content,{children:(0,B.jsx)(G,{})})})]})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Default preview revealed on hover; hides again on unhover.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    const trigger = canvas.getByRole('link', {
      name: /@agentero/i
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
}`,...q.parameters?.docs?.source},description:{story:`Brushing the trigger and leaving without ever reaching the card is the most
common way a hover card gets dismissed, so the exit reverses the entrance
from wherever it got to. Driving it with keyframes instead would restart the
exit at full opacity and scale, popping the half-faded card to fully visible
on its way out.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
                        <Button variant="secondary" size="sm" asChild>
                            <a href="https://agentero.com">View profile</a>
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
    const trigger = canvas.getByRole('link', {
      name: /@agentero/i
    });
    await userEvent.hover(trigger);
    await expect(await body.findByText(/128/)).toBeInTheDocument();
    // \`asChild\` keeps the anchor semantics while picking up Button's styling.
    const profileLink = await body.findByRole('link', {
      name: /view profile/i
    });
    await expect(profileLink).toHaveAttribute('data-slot', 'button');
    await expect(profileLink).toHaveAttribute('href', 'https://agentero.com');
  }
}`,...X.parameters?.docs?.source},description:{story:`The whole point of a HoverCard over a Tooltip: freely laid-out content that
may include its own links and actions. Keep those actions at \`secondary\` or
below — a primary CTA inside a card the keyboard can't reach reads as the
main path to something it isn't. The trigger still has to stand on its own.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard.Root {...args}>
            <HoverCard.Trigger asChild>
                <Button variant="secondary">Agentero</Button>
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
      name: /agentero/i
    });
    await userEvent.hover(trigger);
    const previews = await body.findAllByText(/insurance marketplace/i);
    await expect(previews.length).toBeGreaterThan(0);
    // Radix mirrors open state onto the trigger, so the Button can style it.
    await expect(trigger).toHaveAttribute('data-state', 'open');
    await userEvent.unhover(trigger);
    await waitFor(() => expect(trigger).toHaveAttribute('data-state', 'closed'));
  }
}`,...Z.parameters?.docs?.source},description:{story:"The trigger is not limited to inline text — `asChild` takes any focusable\ncontrol. A `secondary` Button is the usual fit: the button keeps its own job\non click and the card is a preview of where it leads, so nothing is lost when\nthe card never opens.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"An optional `Arrow` points back at the trigger; render it inside `Content`.\nThe arrow is filled with the card background (white), so it only reads\nagainst a surface that contrasts with the card — shown here on a muted\nbackdrop.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"`openDelay` / `closeDelay` tune the hover latency. Default is a deliberate\n`700ms` open so cards don't flash on incidental passes; drop it to `0` for\ntrigger-dense UIs where an instant preview reads as more responsive.",...$.parameters?.docs?.description}}},Ne=[`Default`,`AbandonedHover`,`OpensOnFocus`,`Sides`,`RichContent`,`ButtonTrigger`,`WithArrow`,`Delays`]}))();export{q as AbandonedHover,Z as ButtonTrigger,K as Default,$ as Delays,J as OpensOnFocus,X as RichContent,Y as Sides,Q as WithArrow,Ne as __namedExportsOrder,Me as default};