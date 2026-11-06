import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./plus-CbVL0xCJ.js";import{n as i,t as a}from"./x-uSNtmrhx.js";import{n as o,t as s}from"./button-BD-qXsZQ.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{n(),i(),o(),c=t(),{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,d=e=>(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,c.jsx)(`path`,{d:`M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z`})}),f=e=>(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,c.jsx)(`path`,{fill:`#434856`,d:`M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z`})}),p=e=>(0,c.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`#000000`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:[(0,c.jsx)(`path`,{d:`M0 0h24v24H0z`,fill:`none`}),(0,c.jsx)(`path`,{d:`M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z`})]}),m=`Button`,h=[`primary`,`secondary`,`tertiary`,`ghost`,`link`],g=[`xs`,`sm`,`md`,`lg`],_=[`primary`,`secondary`,`tertiary`,`ghost`],v=({children:e})=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:e}),y=({children:e})=>(0,c.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:e}),b={title:`Components/Button`,component:s,tags:[`autodocs`],argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},variant:{control:`radio`,options:h},size:{control:`radio`,options:g},status:{control:`radio`,options:[void 0,`danger`]},loading:{control:`boolean`},disabled:{control:`boolean`},rounded:{control:`boolean`}},args:{children:m,variant:`primary`,size:`sm`},parameters:{docs:{description:{component:"Button is the design system's primary actionable control. Pick `variant` to\nexpress hierarchy, `size` for prominence, and `status=\"danger\"` for\ndestructive actions. Pass `asChild` to render Button's styles on any nested\nelement — a plain `<a>`, a framework `<Link>`, or a custom component —\nwithout Button binding to any particular framework."}}}},x={},S={render:()=>(0,c.jsx)(v,{children:h.map(e=>(0,c.jsx)(s,{variant:e,children:m},e))})},C={render:()=>(0,c.jsx)(v,{children:g.map(e=>(0,c.jsx)(s,{size:e,children:m},e))})},w={render:()=>(0,c.jsx)(v,{children:h.map(e=>(0,c.jsx)(s,{asChild:!0,variant:e,disabled:!0,children:(0,c.jsx)(`a`,{children:m})},e))})},T={render:()=>(0,c.jsx)(y,{children:h.map(e=>(0,c.jsx)(v,{children:g.map(t=>(0,c.jsxs)(s,{variant:e,size:t,children:[(0,c.jsx)(r,{}),m,(0,c.jsx)(r,{})]},t))},e))})},E=e=>{let t=e.querySelector(`path:not([fill=none])`),n=e.querySelector(`path[fill=none]`);return{color:getComputedStyle(e).color,svgFill:getComputedStyle(e).fill,pathFill:getComputedStyle(t).fill,pathStroke:getComputedStyle(t).stroke,strokeWidth:getComputedStyle(t).strokeWidth,maskFill:n?getComputedStyle(n).fill:void 0}},D={tags:[`!dev`,`!autodocs`],render:()=>(0,c.jsx)(y,{children:_.map(e=>(0,c.jsxs)(v,{children:[(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(r,{}),`lucide`]}),(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(d,{}),`bare path`]}),(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(f,{}),`hardcoded fill`]}),(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(p,{}),`masked`]})]},e))}),play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`button svg`)].map(E);await l(t).toHaveLength(_.length*4);for(let e=0;e<t.length;e+=4){let[n,r,i,a]=t.slice(e,e+4);await l(r.color).toBe(n.color),await l(i.color).toBe(n.color),await l(a.color).toBe(n.color),await l(n.pathStroke).toBe(n.color),await l(n.pathFill).toBe(`none`),await l(n.strokeWidth).toBe(`1.5px`),await l(r.pathFill).toBe(n.color),await l(i.pathFill).toBe(n.color),await l(a.pathFill).toBe(n.color),await l(a.maskFill).toBe(`none`)}}},O={render:()=>(0,c.jsx)(y,{children:_.map(e=>(0,c.jsx)(v,{children:g.map(t=>(0,c.jsx)(s,{variant:e,size:t,"aria-label":`Close`,children:(0,c.jsx)(a,{})},t))},e))})},k={render:()=>(0,c.jsx)(y,{children:_.map(e=>(0,c.jsx)(v,{children:g.map(t=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:[(0,c.jsx)(s,{variant:e,size:t,loading:!0,"aria-label":`Loading`,children:(0,c.jsx)(r,{})}),(0,c.jsx)(s,{variant:e,size:t,loading:!0,children:m})]},t))},e))})},A={render:()=>(0,c.jsxs)(y,{children:[(0,c.jsx)(v,{children:h.map(e=>(0,c.jsxs)(s,{variant:e,status:`danger`,children:[(0,c.jsx)(r,{}),m,(0,c.jsx)(r,{})]},e))}),(0,c.jsx)(v,{children:h.map(e=>(0,c.jsx)(s,{asChild:!0,variant:e,status:`danger`,disabled:!0,children:(0,c.jsxs)(`a`,{children:[(0,c.jsx)(r,{}),m,(0,c.jsx)(r,{})]})},e))})]})},j={render:()=>(0,c.jsx)(y,{children:_.map(e=>(0,c.jsx)(v,{children:g.map(t=>(0,c.jsxs)(s,{variant:e,size:t,rounded:!0,children:[(0,c.jsx)(r,{}),m,(0,c.jsx)(r,{})]},t))},e))})},M={render:()=>(0,c.jsxs)(v,{children:[(0,c.jsx)(s,{asChild:!0,variant:`primary`,children:(0,c.jsx)(`a`,{href:`/dashboard`,children:`Go to dashboard`})}),(0,c.jsx)(s,{asChild:!0,variant:`secondary`,children:(0,c.jsx)(`a`,{href:`https://agentero.com`,target:`_blank`,rel:`noreferrer`,children:`Visit Agentero`})})]})},N=e=>{let t=document.createElement(`span`);t.style.backgroundColor=`var(${e})`,document.body.append(t);let n=getComputedStyle(t).backgroundColor;return t.remove(),n},P={render:()=>(0,c.jsxs)(y,{children:[(0,c.jsx)(v,{children:_.map(e=>(0,c.jsx)(s,{variant:e,"aria-haspopup":`menu`,"aria-expanded":`true`,children:`${e} menu open`},e))}),(0,c.jsxs)(v,{children:[(0,c.jsx)(s,{variant:`secondary`,"aria-expanded":`true`,children:`Section expanded`}),(0,c.jsx)(s,{variant:`secondary`,status:`danger`,"aria-haspopup":`menu`,"aria-expanded":`true`,children:`Danger menu open`}),(0,c.jsx)(s,{variant:`secondary`,loading:!0,"aria-haspopup":`menu`,"aria-expanded":`true`,children:`Loading menu open`})]})]}),play:async({canvasElement:e})=>{let t=u(e);for(let e of _){let n=t.getByRole(`button`,{name:`${e} menu open`});await l(getComputedStyle(n).backgroundColor).toBe(N(`--color-bg-button-${e}-hover`))}let n=t.getByRole(`button`,{name:`Section expanded`});await l(getComputedStyle(n).backgroundColor).toBe(N(`--color-bg-button-secondary-enable`));let r=t.getByRole(`button`,{name:`Danger menu open`});await l(getComputedStyle(r).backgroundColor).toBe(N(`--color-bg-button-secondary-destructive-hover`));let i=t.getByText(`Loading menu open`).closest(`button`);await l(getComputedStyle(i).backgroundColor).toBe(N(`--color-bg-button-secondary-disable`))}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `variant`, `size`, `status`, `loading`,\n`disabled`, and `rounded` from the Controls panel to explore every visual\ncombination of the Button.\n\n@summary Default args playground for Button",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {VARIANTS.map(variant => <Button key={variant} variant={variant}>
                    {TEXT}
                </Button>)}
        </Row>
}`,...S.parameters?.docs?.source},description:{story:"All five variants at the default `sm` size. Variants express visual\nhierarchy: `primary` for the main CTA, `secondary` / `tertiary` for\nsupporting actions, `ghost` for low-emphasis inline actions, and `link`\nfor text-only actions.\n\n@summary All Button variants at default size",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {SIZES.map(size => <Button key={size} size={size}>
                    {TEXT}
                </Button>)}
        </Row>
}`,...C.parameters?.docs?.source},description:{story:"All four sizes at the default `primary` variant. Sizes scale from `xs`\n(24px) for dense toolbars up to `lg` (48px) for hero CTAs.\n\n@summary All Button sizes at default variant",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {VARIANTS.map(variant => <Button asChild key={variant} variant={variant} disabled>
                    <a>{TEXT}</a>
                </Button>)}
        </Row>
}`,...w.parameters?.docs?.source},description:{story:"Disabled state across all variants. Rendered via `asChild` with `<a>`\nchildren to show the disabled treatment applied via className — native\nanchors ignore the `disabled` attribute, so Button emits `aria-disabled`\nand `data-disabled` on the child instead.\n\n@summary Disabled treatment for every variant",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size}>
                            <PlusIcon />
                            {TEXT}
                            <PlusIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...T.parameters?.docs?.source},description:{story:`Variant × size grid with leading and trailing icons.

@summary Variant × size grid with leading + trailing icons`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    <Button variant={variant}>
                        <PlusIcon />
                        lucide
                    </Button>
                    <Button variant={variant}>
                        <LegacyBarePathIcon />
                        bare path
                    </Button>
                    <Button variant={variant}>
                        <LegacyHardcodedFillIcon />
                        hardcoded fill
                    </Button>
                    <Button variant={variant}>
                        <LegacyMaskedIcon />
                        masked
                    </Button>
                </Row>)}
        </Stack>,
  play: async ({
    canvasElement
  }) => {
    const icons = [...canvasElement.querySelectorAll<SVGElement>('button svg')].map(paintedWith);
    await expect(icons).toHaveLength(NON_LINK_VARIANTS.length * 4);
    for (let i = 0; i < icons.length; i += 4) {
      const [lucide, barePath, hardcoded, masked] = icons.slice(i, i + 4) as [Paint, Paint, Paint, Paint];
      // Each row is one variant: lucide, bare path, hardcoded fill, masked.
      await expect(barePath.color).toBe(lucide.color);
      await expect(hardcoded.color).toBe(lucide.color);
      await expect(masked.color).toBe(lucide.color);
      await expect(lucide.pathStroke).toBe(lucide.color);
      await expect(lucide.pathFill).toBe('none');
      // The library's 1.5 stroke, not lucide's default 2.
      await expect(lucide.strokeWidth).toBe('1.5px');
      await expect(barePath.pathFill).toBe(lucide.color);
      await expect(hardcoded.pathFill).toBe(lucide.color);
      await expect(masked.pathFill).toBe(lucide.color);
      await expect(masked.maskFill).toBe('none');
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`Test only, hidden from the sidebar and the docs (\`!dev\`, \`!autodocs\`). The
legacy shapes must land on the button's color like a lucide icon in every
variant; this is what catches the two compatibility rules regressing.

@summary Legacy filled icons land on the same token as lucide ones`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} aria-label="Close">
                            <XIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...O.parameters?.docs?.source},description:{story:'Icon-only buttons across the variant × size grid. Excludes `variant="link"`\n— combining `link` with icon-only children logs a dev-only warning because\nthe link treatment has no padding to accommodate an icon alone.\n\n@summary Icon-only Button across variant × size (excluding `link`)',...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <div key={size} style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center'
      }}>
                            <Button variant={variant} size={size} loading aria-label="Loading">
                                <PlusIcon />
                            </Button>
                            <Button variant={variant} size={size} loading>
                                {TEXT}
                            </Button>
                        </div>)}
                </Row>)}
        </Stack>
}`,...k.parameters?.docs?.source},description:{story:'Loading state across the variant × size grid. Each row shows two buttons\nper size: one icon-only, one with text. Loading forces `disabled` and\noverlays a spinner that inherits the variant\'s text color. Excludes\n`variant="link"` — combining `link` with `loading` logs a dev-only warning.\n\n@summary Loading state across variant × size (excluding `link`)',...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            <Row>
                {VARIANTS.map(variant => <Button key={variant} variant={variant} status="danger">
                        <PlusIcon />
                        {TEXT}
                        <PlusIcon />
                    </Button>)}
            </Row>
            <Row>
                {VARIANTS.map(variant => <Button asChild key={variant} variant={variant} status="danger" disabled>
                        <a>
                            <PlusIcon />
                            {TEXT}
                            <PlusIcon />
                        </a>
                    </Button>)}
            </Row>
        </Stack>
}`,...A.parameters?.docs?.source},description:{story:'Destructive treatment via `status="danger"`. The top row shows every\nvariant enabled; the bottom row shows every variant disabled. Use\n`status="danger"` for delete, remove, or disconnect actions regardless of\nvariant.\n\n@summary `status="danger"` across every variant, enabled + disabled',...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} rounded>
                            <PlusIcon />
                            {TEXT}
                            <PlusIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...j.parameters?.docs?.source},description:{story:'Fully pill-shaped buttons across the variant × size grid. Excludes\n`variant="link"` since the link treatment has no background to round.\n\n@summary `rounded` pill shape across variant × size (excluding `link`)',...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Button asChild variant="primary">
                <a href="/dashboard">Go to dashboard</a>
            </Button>
            <Button asChild variant="secondary">
                <a href="https://agentero.com" target="_blank" rel="noreferrer">
                    Visit Agentero
                </a>
            </Button>
        </Row>
}`,...M.parameters?.docs?.source},description:{story:"`asChild` renders Button's styles on the nested child element rather than\non a `<button>` — the child receives Button's `className`, `ref`, and\nmerged props via Radix's `Slot` primitive. Use it to turn any anchor or\nframework `Link` into a Button without coupling the design system to a\nrouter. In app code, swap the plain `<a>` below for your framework's Link\n(`next/link`, `react-router`, `@tanstack/react-router`, etc.).\n\n@summary `asChild` composes Button's styles onto any element",...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            <Row>
                {NON_LINK_VARIANTS.map(variant => <Button key={variant} variant={variant} aria-haspopup="menu" aria-expanded="true">
                        {\`\${variant} menu open\`}
                    </Button>)}
            </Row>
            <Row>
                <Button variant="secondary" aria-expanded="true">
                    Section expanded
                </Button>
                <Button variant="secondary" status="danger" aria-haspopup="menu" aria-expanded="true">
                    Danger menu open
                </Button>
                <Button variant="secondary" loading aria-haspopup="menu" aria-expanded="true">
                    Loading menu open
                </Button>
            </Row>
        </Stack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const variant of NON_LINK_VARIANTS) {
      const trigger = canvas.getByRole('button', {
        name: \`\${variant} menu open\`
      });
      await expect(getComputedStyle(trigger).backgroundColor).toBe(resolveColor(\`--color-bg-button-\${variant}-hover\`));
    }
    const disclosure = canvas.getByRole('button', {
      name: 'Section expanded'
    });
    await expect(getComputedStyle(disclosure).backgroundColor).toBe(resolveColor('--color-bg-button-secondary-enable'));
    const dangerTrigger = canvas.getByRole('button', {
      name: 'Danger menu open'
    });
    await expect(getComputedStyle(dangerTrigger).backgroundColor).toBe(resolveColor('--color-bg-button-secondary-destructive-hover'));
    const loadingTrigger = canvas.getByText('Loading menu open').closest('button')!;
    await expect(getComputedStyle(loadingTrigger).backgroundColor).toBe(resolveColor('--color-bg-button-secondary-disable'));
  }
}`,...P.parameters?.docs?.source},description:{story:`A Button that opens a menu, popover, select or combobox list keeps its hover
look while that overlay is open, so the pointer can leave it for the list
without the trigger looking idle. The open state is read from
\`aria-expanded="true"\` together with \`aria-haspopup\` (or \`role="combobox"\`),
which Radix and Base UI triggers set for you. A disclosure toggle, such as a
collapsible section header, sets only \`aria-expanded\` and keeps its regular look,
and a disabled or loading trigger keeps its disabled look.

@summary Overlay triggers keep the hover look while their overlay is open`,...P.parameters?.docs?.description}}},F=[`Default`,`Variants`,`Sizes`,`Disabled`,`WithIcons`,`LegacyFilledIcon`,`OnlyIcon`,`Loading`,`Status`,`Rounded`,`AsChild`,`OpenTrigger`]})))()}I();export{M as AsChild,x as Default,w as Disabled,D as LegacyFilledIcon,k as Loading,O as OnlyIcon,P as OpenTrigger,j as Rounded,C as Sizes,A as Status,S as Variants,T as WithIcons,F as __namedExportsOrder,b as default};