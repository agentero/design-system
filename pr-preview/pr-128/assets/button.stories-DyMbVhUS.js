import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./plus-DnLyhmoz.js";import{n as i,t as a}from"./x-Bdqgelgi.js";import{n as o,t as s}from"./button-CsB_uHIV.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{n(),i(),o(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u=e=>(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,c.jsx)(`path`,{d:`M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z`})}),d=e=>(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,c.jsx)(`path`,{fill:`#434856`,d:`M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z`})}),f=`Button`,p=[`primary`,`secondary`,`tertiary`,`ghost`,`link`],m=[`xs`,`sm`,`md`,`lg`],h=[`primary`,`secondary`,`tertiary`,`ghost`],g=({children:e})=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:e}),_=({children:e})=>(0,c.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:e}),v={title:`Components/Button`,component:s,tags:[`autodocs`],argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},variant:{control:`radio`,options:p},size:{control:`radio`,options:m},status:{control:`radio`,options:[void 0,`danger`]},loading:{control:`boolean`},disabled:{control:`boolean`},rounded:{control:`boolean`}},args:{children:f,variant:`primary`,size:`sm`},parameters:{docs:{description:{component:"Button is the design system's primary actionable control. Pick `variant` to\nexpress hierarchy, `size` for prominence, and `status=\"danger\"` for\ndestructive actions. Pass `asChild` to render Button's styles on any nested\nelement — a plain `<a>`, a framework `<Link>`, or a custom component —\nwithout Button binding to any particular framework."}}}},y={},b={render:()=>(0,c.jsx)(g,{children:p.map(e=>(0,c.jsx)(s,{variant:e,children:f},e))})},x={render:()=>(0,c.jsx)(g,{children:m.map(e=>(0,c.jsx)(s,{size:e,children:f},e))})},S={render:()=>(0,c.jsx)(g,{children:p.map(e=>(0,c.jsx)(s,{asChild:!0,variant:e,disabled:!0,children:(0,c.jsx)(`a`,{children:f})},e))})},C={render:()=>(0,c.jsx)(_,{children:p.map(e=>(0,c.jsx)(g,{children:m.map(t=>(0,c.jsxs)(s,{variant:e,size:t,children:[(0,c.jsx)(r,{}),f,(0,c.jsx)(r,{})]},t))},e))})},w=e=>{let t=e.querySelector(`path`);return{color:getComputedStyle(e).color,svgFill:getComputedStyle(e).fill,pathFill:getComputedStyle(t).fill,pathStroke:getComputedStyle(t).stroke}},T={tags:[`!dev`,`!autodocs`],render:()=>(0,c.jsx)(_,{children:h.map(e=>(0,c.jsxs)(g,{children:[(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(r,{}),`lucide`]}),(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(u,{}),`bare path`]}),(0,c.jsxs)(s,{variant:e,children:[(0,c.jsx)(d,{}),`hardcoded fill`]})]},e))}),play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`button svg`)].map(w);await l(t).toHaveLength(h.length*3);for(let e=0;e<t.length;e+=3){let[n,r,i]=t.slice(e,e+3);await l(r.color).toBe(n.color),await l(i.color).toBe(n.color),await l(n.pathStroke).toBe(n.color),await l(n.pathFill).toBe(`none`),await l(r.pathFill).toBe(n.color),await l(i.pathFill).toBe(n.color)}}},E={render:()=>(0,c.jsx)(_,{children:h.map(e=>(0,c.jsx)(g,{children:m.map(t=>(0,c.jsx)(s,{variant:e,size:t,"aria-label":`Close`,children:(0,c.jsx)(a,{})},t))},e))})},D={render:()=>(0,c.jsx)(_,{children:h.map(e=>(0,c.jsx)(g,{children:m.map(t=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:[(0,c.jsx)(s,{variant:e,size:t,loading:!0,"aria-label":`Loading`,children:(0,c.jsx)(r,{})}),(0,c.jsx)(s,{variant:e,size:t,loading:!0,children:f})]},t))},e))})},O={render:()=>(0,c.jsxs)(_,{children:[(0,c.jsx)(g,{children:p.map(e=>(0,c.jsxs)(s,{variant:e,status:`danger`,children:[(0,c.jsx)(r,{}),f,(0,c.jsx)(r,{})]},e))}),(0,c.jsx)(g,{children:p.map(e=>(0,c.jsx)(s,{asChild:!0,variant:e,status:`danger`,disabled:!0,children:(0,c.jsxs)(`a`,{children:[(0,c.jsx)(r,{}),f,(0,c.jsx)(r,{})]})},e))})]})},k={render:()=>(0,c.jsx)(_,{children:h.map(e=>(0,c.jsx)(g,{children:m.map(t=>(0,c.jsxs)(s,{variant:e,size:t,rounded:!0,children:[(0,c.jsx)(r,{}),f,(0,c.jsx)(r,{})]},t))},e))})},A={render:()=>(0,c.jsxs)(g,{children:[(0,c.jsx)(s,{asChild:!0,variant:`primary`,children:(0,c.jsx)(`a`,{href:`/dashboard`,children:`Go to dashboard`})}),(0,c.jsx)(s,{asChild:!0,variant:`secondary`,children:(0,c.jsx)(`a`,{href:`https://agentero.com`,target:`_blank`,rel:`noreferrer`,children:`Visit Agentero`})})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `variant`, `size`, `status`, `loading`,\n`disabled`, and `rounded` from the Controls panel to explore every visual\ncombination of the Button.\n\n@summary Default args playground for Button",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {VARIANTS.map(variant => <Button key={variant} variant={variant}>
                    {TEXT}
                </Button>)}
        </Row>
}`,...b.parameters?.docs?.source},description:{story:"All five variants at the default `sm` size. Variants express visual\nhierarchy: `primary` for the main CTA, `secondary` / `tertiary` for\nsupporting actions, `ghost` for low-emphasis inline actions, and `link`\nfor text-only actions.\n\n@summary All Button variants at default size",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {SIZES.map(size => <Button key={size} size={size}>
                    {TEXT}
                </Button>)}
        </Row>
}`,...x.parameters?.docs?.source},description:{story:"All four sizes at the default `primary` variant. Sizes scale from `xs`\n(24px) for dense toolbars up to `lg` (48px) for hero CTAs.\n\n@summary All Button sizes at default variant",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {VARIANTS.map(variant => <Button asChild key={variant} variant={variant} disabled>
                    <a>{TEXT}</a>
                </Button>)}
        </Row>
}`,...S.parameters?.docs?.source},description:{story:"Disabled state across all variants. Rendered via `asChild` with `<a>`\nchildren to show the disabled treatment applied via className — native\nanchors ignore the `disabled` attribute, so Button emits `aria-disabled`\nand `data-disabled` on the child instead.\n\n@summary Disabled treatment for every variant",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size}>
                            <PlusIcon />
                            {TEXT}
                            <PlusIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...C.parameters?.docs?.source},description:{story:`Variant × size grid with leading and trailing icons.

@summary Variant × size grid with leading + trailing icons`,...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      await expect(barePath.pathFill).toBe(lucide.color);
      await expect(hardcoded.pathFill).toBe(lucide.color);
    }
  }
}`,...T.parameters?.docs?.source},description:{story:"Test only — hidden from the sidebar and the docs page (`!dev`, `!autodocs`),\nso every visible story stays on lucide. Consumers still pass filled Material\nglyphs from `@agentero/icons`, in two shapes a stroke icon does not have: a\n`<path>` with no `fill` at all (black unless the recipe paints it) and a\n`<path>` carrying its own hardcoded `fill`. Both must land on the same token\nas a lucide icon in every variant — this run is what catches\n`[&_svg:not([fill=none])]:fill-current` and `[&_svg_path[fill]]:fill-current`\nregressing.\n\n@summary Legacy filled icons land on the same token as lucide ones",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} aria-label="Close">
                            <XIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...E.parameters?.docs?.source},description:{story:'Icon-only buttons across the variant × size grid. Excludes `variant="link"`\n— combining `link` with icon-only children logs a dev-only warning because\nthe link treatment has no padding to accommodate an icon alone.\n\n@summary Icon-only Button across variant × size (excluding `link`)',...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:'Loading state across the variant × size grid. Each row shows two buttons\nper size: one icon-only, one with text. Loading forces `disabled` and\noverlays a spinner that inherits the variant\'s text color. Excludes\n`variant="link"` — combining `link` with `loading` logs a dev-only warning.\n\n@summary Loading state across variant × size (excluding `link`)',...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:'Destructive treatment via `status="danger"`. The top row shows every\nvariant enabled; the bottom row shows every variant disabled. Use\n`status="danger"` for delete, remove, or disconnect actions regardless of\nvariant.\n\n@summary `status="danger"` across every variant, enabled + disabled',...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} rounded>
                            <PlusIcon />
                            {TEXT}
                            <PlusIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...k.parameters?.docs?.source},description:{story:'Fully pill-shaped buttons across the variant × size grid. Excludes\n`variant="link"` since the link treatment has no background to round.\n\n@summary `rounded` pill shape across variant × size (excluding `link`)',...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"`asChild` renders Button's styles on the nested child element rather than\non a `<button>` — the child receives Button's `className`, `ref`, and\nmerged props via Radix's `Slot` primitive. Use it to turn any anchor or\nframework `Link` into a Button without coupling the design system to a\nrouter. In app code, swap the plain `<a>` below for your framework's Link\n(`next/link`, `react-router`, `@tanstack/react-router`, etc.).\n\n@summary `asChild` composes Button's styles onto any element",...A.parameters?.docs?.description}}},j=[`Default`,`Variants`,`Sizes`,`Disabled`,`WithIcons`,`LegacyFilledIcon`,`OnlyIcon`,`Loading`,`Status`,`Rounded`,`AsChild`]})))()}M();export{A as AsChild,y as Default,S as Disabled,T as LegacyFilledIcon,D as Loading,E as OnlyIcon,k as Rounded,x as Sizes,O as Status,b as Variants,C as WithIcons,j as __namedExportsOrder,v as default};