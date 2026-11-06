import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./plus-K_CLNVjm.js";import{n as i,t as a}from"./x-DvZmTmKt.js";import{n as o,t as s}from"./button-DU8AJHQc.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{n(),i(),o(),c=t(),{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,d=e=>(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,c.jsx)(`path`,{d:`M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z`})}),f=e=>(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,c.jsx)(`path`,{fill:`#434856`,d:`M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z`})}),p=`Button`,m=[`primary`,`secondary`,`tertiary`,`ghost`,`link`],h=[`xs`,`sm`,`md`,`lg`],g=[`primary`,`secondary`,`tertiary`,`ghost`],_=({children:e})=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:e}),v=({children:e})=>(0,c.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:e}),y={title:`Components/Button`,component:s,tags:[`autodocs`],argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},variant:{control:`radio`,options:m},size:{control:`radio`,options:h},status:{control:`radio`,options:[void 0,`danger`]},loading:{control:`boolean`},disabled:{control:`boolean`},rounded:{control:`boolean`}},args:{children:p,variant:`primary`,size:`sm`},parameters:{docs:{description:{component:"Button is the design system's primary actionable control. Pick `variant` to\nexpress hierarchy, `size` for prominence, and `status=\"danger\"` for\ndestructive actions. Pass `asChild` to render Button's styles on any nested\nelement — a plain `<a>`, a framework `<Link>`, or a custom component —\nwithout Button binding to any particular framework."}}}},b={},x={render:()=>(0,c.jsx)(_,{children:m.map(e=>(0,c.jsx)(s,{variant:e,children:p},e))})},S={render:()=>(0,c.jsx)(_,{children:h.map(e=>(0,c.jsx)(s,{size:e,children:p},e))})},C={render:()=>(0,c.jsx)(_,{children:m.map(e=>(0,c.jsx)(s,{asChild:!0,variant:e,disabled:!0,children:(0,c.jsx)(`a`,{children:p})},e))})},w={render:()=>(0,c.jsx)(v,{children:m.map(e=>(0,c.jsx)(_,{children:h.map(t=>(0,c.jsxs)(s,{variant:e,size:t,children:[(0,c.jsx)(r,{}),p,(0,c.jsx)(r,{})]},t))},e))})},T=e=>{let t=e.querySelector(`path`);return{color:getComputedStyle(e).color,svgFill:getComputedStyle(e).fill,pathFill:getComputedStyle(t).fill,pathStroke:getComputedStyle(t).stroke,strokeWidth:getComputedStyle(t).strokeWidth}},E={tags:[`!dev`,`!autodocs`],render:()=>(0,c.jsx)(v,{children:g.map(e=>(0,c.jsxs)(_,{children:[(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(r,{}),`lucide`]}),(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(d,{}),`bare path`]}),(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(f,{}),`hardcoded fill`]})]},e))}),play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`button svg`)].map(T);await l(t).toHaveLength(g.length*3);for(let e=0;e<t.length;e+=3){let[n,r,i]=t.slice(e,e+3);await l(r.color).toBe(n.color),await l(i.color).toBe(n.color),await l(n.pathStroke).toBe(n.color),await l(n.pathFill).toBe(`none`),await l(n.strokeWidth).toBe(`1.5px`),await l(r.pathFill).toBe(n.color),await l(i.pathFill).toBe(n.color)}}},D={render:()=>(0,c.jsx)(v,{children:g.map(e=>(0,c.jsx)(_,{children:h.map(t=>(0,c.jsx)(s,{variant:e,size:t,"aria-label":`Close`,children:(0,c.jsx)(a,{})},t))},e))})},O={render:()=>(0,c.jsx)(v,{children:g.map(e=>(0,c.jsx)(_,{children:h.map(t=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:[(0,c.jsx)(s,{variant:e,size:t,loading:!0,"aria-label":`Loading`,children:(0,c.jsx)(r,{})}),(0,c.jsx)(s,{variant:e,size:t,loading:!0,children:p})]},t))},e))})},k={render:()=>(0,c.jsxs)(v,{children:[(0,c.jsx)(_,{children:m.map(e=>(0,c.jsxs)(s,{variant:e,status:`danger`,children:[(0,c.jsx)(r,{}),p,(0,c.jsx)(r,{})]},e))}),(0,c.jsx)(_,{children:m.map(e=>(0,c.jsx)(s,{asChild:!0,variant:e,status:`danger`,disabled:!0,children:(0,c.jsxs)(`a`,{children:[(0,c.jsx)(r,{}),p,(0,c.jsx)(r,{})]})},e))})]})},A={render:()=>(0,c.jsx)(v,{children:g.map(e=>(0,c.jsx)(_,{children:h.map(t=>(0,c.jsxs)(s,{variant:e,size:t,rounded:!0,children:[(0,c.jsx)(r,{}),p,(0,c.jsx)(r,{})]},t))},e))})},j={render:()=>(0,c.jsxs)(_,{children:[(0,c.jsx)(s,{asChild:!0,variant:`primary`,children:(0,c.jsx)(`a`,{href:`/dashboard`,children:`Go to dashboard`})}),(0,c.jsx)(s,{asChild:!0,variant:`secondary`,children:(0,c.jsx)(`a`,{href:`https://agentero.com`,target:`_blank`,rel:`noreferrer`,children:`Visit Agentero`})})]})},M=e=>{let t=document.createElement(`span`);t.style.backgroundColor=`var(${e})`,document.body.append(t);let n=getComputedStyle(t).backgroundColor;return t.remove(),n},N={render:()=>(0,c.jsxs)(v,{children:[(0,c.jsx)(_,{children:g.map(e=>(0,c.jsx)(s,{variant:e,"aria-haspopup":`menu`,"aria-expanded":`true`,children:`${e} menu open`},e))}),(0,c.jsxs)(_,{children:[(0,c.jsx)(s,{variant:`secondary`,"aria-expanded":`true`,children:`Section expanded`}),(0,c.jsx)(s,{variant:`secondary`,status:`danger`,"aria-haspopup":`menu`,"aria-expanded":`true`,children:`Danger menu open`}),(0,c.jsx)(s,{variant:`secondary`,loading:!0,"aria-haspopup":`menu`,"aria-expanded":`true`,children:`Loading menu open`})]})]}),play:async({canvasElement:e})=>{let t=u(e);for(let e of g){let n=t.getByRole(`button`,{name:`${e} menu open`});await l(getComputedStyle(n).backgroundColor).toBe(M(`--color-bg-button-${e}-hover`))}let n=t.getByRole(`button`,{name:`Section expanded`});await l(getComputedStyle(n).backgroundColor).toBe(M(`--color-bg-button-secondary-enable`));let r=t.getByRole(`button`,{name:`Danger menu open`});await l(getComputedStyle(r).backgroundColor).toBe(M(`--color-bg-button-secondary-destructive-hover`));let i=t.getByText(`Loading menu open`).closest(`button`);await l(getComputedStyle(i).backgroundColor).toBe(M(`--color-bg-button-secondary-disable`))}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `variant`, `size`, `status`, `loading`,\n`disabled`, and `rounded` from the Controls panel to explore every visual\ncombination of the Button.\n\n@summary Default args playground for Button",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {VARIANTS.map(variant => <Button key={variant} variant={variant}>
                    {TEXT}
                </Button>)}
        </Row>
}`,...x.parameters?.docs?.source},description:{story:"All five variants at the default `sm` size. Variants express visual\nhierarchy: `primary` for the main CTA, `secondary` / `tertiary` for\nsupporting actions, `ghost` for low-emphasis inline actions, and `link`\nfor text-only actions.\n\n@summary All Button variants at default size",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {SIZES.map(size => <Button key={size} size={size}>
                    {TEXT}
                </Button>)}
        </Row>
}`,...S.parameters?.docs?.source},description:{story:"All four sizes at the default `primary` variant. Sizes scale from `xs`\n(24px) for dense toolbars up to `lg` (48px) for hero CTAs.\n\n@summary All Button sizes at default variant",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {VARIANTS.map(variant => <Button asChild key={variant} variant={variant} disabled>
                    <a>{TEXT}</a>
                </Button>)}
        </Row>
}`,...C.parameters?.docs?.source},description:{story:"Disabled state across all variants. Rendered via `asChild` with `<a>`\nchildren to show the disabled treatment applied via className — native\nanchors ignore the `disabled` attribute, so Button emits `aria-disabled`\nand `data-disabled` on the child instead.\n\n@summary Disabled treatment for every variant",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size}>
                            <PlusIcon />
                            {TEXT}
                            <PlusIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...w.parameters?.docs?.source},description:{story:`Variant × size grid with leading and trailing icons.

@summary Variant × size grid with leading + trailing icons`,...w.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
                </Row>)}
        </Stack>,
  play: async ({
    canvasElement
  }) => {
    const icons = [...canvasElement.querySelectorAll<SVGElement>('button svg')].map(paintedWith);
    await expect(icons).toHaveLength(NON_LINK_VARIANTS.length * 3);
    for (let i = 0; i < icons.length; i += 3) {
      const [lucide, barePath, hardcoded] = icons.slice(i, i + 3) as [Paint, Paint, Paint];
      // One variant per row: the three icons share the variant's icon token…
      await expect(barePath.color).toBe(lucide.color);
      await expect(hardcoded.color).toBe(lucide.color);
      // …lucide by stroke, never filled; the legacy shapes by fill.
      await expect(lucide.pathStroke).toBe(lucide.color);
      await expect(lucide.pathFill).toBe('none');
      // …at the library's 1.5 stroke, not lucide's default 2.
      await expect(lucide.strokeWidth).toBe('1.5px');
      await expect(barePath.pathFill).toBe(lucide.color);
      await expect(hardcoded.pathFill).toBe(lucide.color);
    }
  }
}`,...E.parameters?.docs?.source},description:{story:"Test only — hidden from the sidebar and the docs page (`!dev`, `!autodocs`),\nso every visible story stays on lucide. Consumers still pass filled Material\nglyphs from `@agentero/icons`, in two shapes a stroke icon does not have: a\n`<path>` with no `fill` at all (black unless the recipe paints it) and a\n`<path>` carrying its own hardcoded `fill`. Both must land on the same token\nas a lucide icon in every variant — this run is what catches\n`[&_svg:not([fill=none])]:fill-current` and `[&_svg_path[fill]]:fill-current`\nregressing.\n\n@summary Legacy filled icons land on the same token as lucide ones",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} aria-label="Close">
                            <XIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...D.parameters?.docs?.source},description:{story:'Icon-only buttons across the variant × size grid. Excludes `variant="link"`\n— combining `link` with icon-only children logs a dev-only warning because\nthe link treatment has no padding to accommodate an icon alone.\n\n@summary Icon-only Button across variant × size (excluding `link`)',...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:'Loading state across the variant × size grid. Each row shows two buttons\nper size: one icon-only, one with text. Loading forces `disabled` and\noverlays a spinner that inherits the variant\'s text color. Excludes\n`variant="link"` — combining `link` with `loading` logs a dev-only warning.\n\n@summary Loading state across variant × size (excluding `link`)',...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:'Destructive treatment via `status="danger"`. The top row shows every\nvariant enabled; the bottom row shows every variant disabled. Use\n`status="danger"` for delete, remove, or disconnect actions regardless of\nvariant.\n\n@summary `status="danger"` across every variant, enabled + disabled',...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} rounded>
                            <PlusIcon />
                            {TEXT}
                            <PlusIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...A.parameters?.docs?.source},description:{story:'Fully pill-shaped buttons across the variant × size grid. Excludes\n`variant="link"` since the link treatment has no background to round.\n\n@summary `rounded` pill shape across variant × size (excluding `link`)',...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"`asChild` renders Button's styles on the nested child element rather than\non a `<button>` — the child receives Button's `className`, `ref`, and\nmerged props via Radix's `Slot` primitive. Use it to turn any anchor or\nframework `Link` into a Button without coupling the design system to a\nrouter. In app code, swap the plain `<a>` below for your framework's Link\n(`next/link`, `react-router`, `@tanstack/react-router`, etc.).\n\n@summary `asChild` composes Button's styles onto any element",...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`A Button that opens a menu, popover, select or combobox list keeps its hover
look while that overlay is open, so the pointer can leave it for the list
without the trigger looking idle. The open state is read from
\`aria-expanded="true"\` together with \`aria-haspopup\` (or \`role="combobox"\`),
which Radix and Base UI triggers set for you. A disclosure toggle, such as a
collapsible section header, sets only \`aria-expanded\` and keeps its regular look,
and a disabled or loading trigger keeps its disabled look.

@summary Overlay triggers keep the hover look while their overlay is open`,...N.parameters?.docs?.description}}},P=[`Default`,`Variants`,`Sizes`,`Disabled`,`WithIcons`,`LegacyFilledIcon`,`OnlyIcon`,`Loading`,`Status`,`Rounded`,`AsChild`,`OpenTrigger`]})))()}F();export{j as AsChild,b as Default,C as Disabled,E as LegacyFilledIcon,O as Loading,D as OnlyIcon,N as OpenTrigger,A as Rounded,S as Sizes,k as Status,x as Variants,w as WithIcons,P as __namedExportsOrder,y as default};