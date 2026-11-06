import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./plus-Dw5apkxK.js";import{n as i,t as a}from"./tag-BlcmyZqz.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),i(),o=t(),{expect:s,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u=[`neutral`,`positive`,`danger`,`warning`,`informative`,`creative`,`dynamic`,`playful`],d=[`secondary`,`tertiary`,`ghost`,`invisible`],f=({children:e})=>(0,o.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`},children:e}),p=({gap:e=`1rem`,children:t})=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:e},children:t}),m={title:`Components/Tag`,component:a,tags:[`autodocs`],argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},color:{control:`select`,options:u},variant:{control:`select`,options:d},size:{control:`radio`,options:[`xs`,`sm`,`md`]},pill:{control:`boolean`},truncate:{control:`boolean`}},args:{children:`Default`,color:`neutral`,variant:`secondary`,size:`sm`},parameters:{docs:{description:{component:"Tag is a compact semantic label for statuses, categories, counts, and\nattributes. Pick `color` for meaning, `variant` for fill emphasis, and\n`size` for prominence. A plain Tag is a static badge; pass `asChild` to make\nit an interactive link or button, which adds the pointer cursor and hover fill."}}}},h={},g={render:()=>(0,o.jsx)(p,{children:[`xs`,`sm`,`md`].map(e=>(0,o.jsxs)(p,{gap:`0.5rem`,children:[(0,o.jsxs)(`strong`,{children:[e,`:`]}),(0,o.jsxs)(f,{children:[(0,o.jsx)(a,{size:e,color:`informative`,variant:`secondary`,role:`img`,"aria-label":`${e} icon only`,children:(0,o.jsx)(r,{})}),(0,o.jsxs)(a,{size:e,color:`informative`,variant:`secondary`,children:[(0,o.jsx)(r,{}),e]}),(0,o.jsx)(a,{size:e,color:`informative`,variant:`secondary`,children:e})]})]},e))})},_={render:()=>(0,o.jsxs)(p,{gap:`0.5rem`,children:[(0,o.jsx)(f,{children:d.map(e=>(0,o.jsx)(a,{color:`informative`,variant:e,children:e},e))}),(0,o.jsx)(f,{children:d.map(e=>(0,o.jsx)(a,{color:`informative`,variant:e,pill:!0,children:e},e))})]})},v={render:()=>(0,o.jsxs)(f,{children:[(0,o.jsx)(a,{color:`informative`,variant:`secondary`,children:`badge`}),(0,o.jsx)(a,{color:`informative`,variant:`secondary`,asChild:!0,children:(0,o.jsx)(`button`,{type:`button`,children:`interactive`})}),(0,o.jsx)(a,{color:`informative`,variant:`secondary`,asChild:!0,"aria-label":`add`,children:(0,o.jsx)(`button`,{type:`button`,children:(0,o.jsx)(r,{})})})]}),play:async({canvasElement:e})=>{let t=l(e),n=t.getByText(`badge`),r=t.getByRole(`button`,{name:`interactive`});s(n.className).not.toContain(`hover:bg-bg-tag`),s(r).toHaveAttribute(`data-slot`,`tag`),s(r.className).toContain(`hover:bg-bg-tag-informative-hover`),await c.hover(r)}},y=e=>{let t=document.createElement(`span`);t.style.backgroundColor=`var(${e})`,document.body.append(t);let n=getComputedStyle(t).backgroundColor;return t.remove(),n},b={render:()=>(0,o.jsx)(f,{children:(0,o.jsx)(a,{color:`informative`,variant:`ghost`,asChild:!0,children:(0,o.jsx)(`button`,{type:`button`,"aria-haspopup":`menu`,"aria-expanded":`true`,children:`Status menu open`})})}),play:async({canvasElement:e})=>{let t=l(e).getByRole(`button`,{name:`Status menu open`});await s(getComputedStyle(t).backgroundColor).toBe(y(`--color-bg-tag-informative-hover`))}},x={render:()=>(0,o.jsx)(f,{children:u.map(e=>(0,o.jsx)(a,{variant:`secondary`,color:e,children:e},e))}),play:({canvasElement:e})=>{let t=l(e).getByText(`positive`);s(getComputedStyle(t).backgroundColor).toBe(`rgb(232, 252, 236)`)}},S={render:()=>(0,o.jsx)(f,{children:u.map(e=>(0,o.jsx)(a,{variant:`tertiary`,color:e,children:e},e))})},C={render:()=>(0,o.jsx)(f,{children:u.map(e=>(0,o.jsx)(a,{variant:`ghost`,color:e,children:e},e))})},w={render:()=>(0,o.jsxs)(p,{gap:`0.5rem`,children:[(0,o.jsx)(f,{children:u.map(e=>(0,o.jsx)(a,{variant:`invisible`,color:e,children:e},e))}),(0,o.jsx)(f,{children:u.map(e=>(0,o.jsx)(a,{variant:`invisible`,color:e,asChild:!0,children:(0,o.jsx)(`button`,{type:`button`,children:e})},e))})]}),play:async({canvasElement:e})=>{let t=l(e).getByRole(`button`,{name:`neutral`});s(t).toHaveAttribute(`data-slot`,`tag`),s(t.className).toContain(`hover:opacity-100`),await c.hover(t)}},T={render:()=>(0,o.jsx)(p,{children:u.map(e=>(0,o.jsx)(f,{children:d.map(t=>(0,o.jsxs)(a,{color:e,variant:t,children:[(0,o.jsx)(r,{}),`tag`,(0,o.jsx)(r,{})]},t))},e))})},E={render:()=>(0,o.jsxs)(p,{children:[(0,o.jsx)(`div`,{style:{width:`9rem`},children:(0,o.jsx)(a,{truncate:!0,title:`Travel insurance limited lines producer`,children:`Travel insurance limited lines producer`})}),(0,o.jsx)(`div`,{style:{width:`9rem`},children:(0,o.jsxs)(a,{truncate:!0,color:`informative`,children:[(0,o.jsx)(r,{}),`Travel insurance limited lines producer`]})})]}),play:({canvasElement:e})=>{let t=l(e).getByTitle(`Travel insurance limited lines producer`),n=t.firstElementChild;s(t.className).toContain(`overflow-hidden`),s(n.scrollWidth).toBeGreaterThan(n.clientWidth),s(getComputedStyle(n).textOverflow).toBe(`ellipsis`),s(getComputedStyle(n).display).toBe(`block`);let r=e.querySelector(`svg`).getBoundingClientRect();s(Math.round(r.width)).toBe(Math.round(r.height))}},D={render:()=>(0,o.jsx)(`div`,{style:{width:`9rem`,border:`1px dashed gray`},children:(0,o.jsx)(a,{title:`Travel insurance limited lines producer`,children:`Travel insurance limited lines producer`})}),play:({canvasElement:e})=>{let t=l(e).getByTitle(`Travel insurance limited lines producer`);s(getComputedStyle(t).whiteSpace).toBe(`nowrap`);let n=t.getBoundingClientRect();s(Math.round(n.height)).toBe(24),s(n.width).toBeGreaterThan(144)}},O={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`4rem`,flexWrap:`wrap`},children:[(0,o.jsx)(p,{children:u.map(e=>(0,o.jsxs)(p,{gap:`0.5rem`,children:[(0,o.jsxs)(`strong`,{children:[e,`:`]}),(0,o.jsx)(f,{children:d.map(t=>(0,o.jsx)(a,{color:e,variant:t,children:t},t))})]},e))}),(0,o.jsx)(p,{children:u.map(e=>(0,o.jsxs)(p,{gap:`0.5rem`,children:[(0,o.jsxs)(`strong`,{children:[e,` with pill:`]}),(0,o.jsx)(f,{children:d.map(t=>(0,o.jsx)(a,{color:e,variant:t,pill:!0,children:t},t))})]},e))}),(0,o.jsx)(p,{children:u.map(e=>(0,o.jsxs)(p,{gap:`0.5rem`,children:[(0,o.jsxs)(`strong`,{children:[e,` as button:`]}),(0,o.jsx)(f,{children:d.map(t=>(0,o.jsx)(a,{color:e,variant:t,asChild:!0,children:(0,o.jsx)(`button`,{type:`button`,children:t})},t))})]},e))}),(0,o.jsx)(p,{children:u.map(e=>(0,o.jsxs)(p,{gap:`0.5rem`,children:[(0,o.jsxs)(`strong`,{children:[e,` with icon:`]}),(0,o.jsx)(f,{children:d.map(t=>(0,o.jsxs)(a,{color:e,variant:t,children:[(0,o.jsx)(r,{}),t]},t))})]},e))}),(0,o.jsx)(p,{children:u.map(e=>(0,o.jsxs)(p,{gap:`0.5rem`,children:[(0,o.jsxs)(`strong`,{children:[e,` with icons:`]}),(0,o.jsx)(f,{children:d.map(t=>(0,o.jsxs)(a,{color:e,variant:t,children:[(0,o.jsx)(r,{}),t,(0,o.jsx)(r,{})]},t))})]},e))}),(0,o.jsx)(p,{children:u.map(e=>(0,o.jsxs)(p,{gap:`0.5rem`,children:[(0,o.jsxs)(`strong`,{children:[e,` icon only:`]}),(0,o.jsx)(f,{children:d.map(t=>(0,o.jsx)(a,{color:e,variant:t,role:`img`,"aria-label":`${e} ${t}`,children:(0,o.jsx)(r,{})},t))})]},e))})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `color`, `variant`, `size`, `pill`, and\n`truncate` from the Controls panel to explore every visual combination.\n\n@summary Default args playground for Tag",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {(['xs', 'sm', 'md'] as const).map(size => <Stack gap="0.5rem" key={size}>
                    <strong>{size}:</strong>
                    <Row>
                        <Tag size={size} color="informative" variant="secondary" role="img" aria-label={\`\${size} icon only\`}>
                            <PlusIcon />
                        </Tag>
                        <Tag size={size} color="informative" variant="secondary">
                            <PlusIcon />
                            {size}
                        </Tag>
                        <Tag size={size} color="informative" variant="secondary">
                            {size}
                        </Tag>
                    </Row>
                </Stack>)}
        </Stack>
}`,...g.parameters?.docs?.source},description:{story:"The three sizes — `xs` (20px), `sm` (24px, default), and `md` (32px) — each\nshown icon-only, icon + text, and text-only so the type and icon scale are\nvisible.\n\n@summary All three sizes across icon-only, icon + text, and text-only",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="0.5rem">
            <Row>
                {VARIANTS.map(variant => <Tag key={variant} color="informative" variant={variant}>
                        {variant}
                    </Tag>)}
            </Row>
            <Row>
                {VARIANTS.map(variant => <Tag key={variant} color="informative" variant={variant} pill>
                        {variant}
                    </Tag>)}
            </Row>
        </Stack>
}`,..._.parameters?.docs?.source},description:{story:"The `Style` axis: the default rounded corners (top row) versus `pill` fully\nrounded (bottom row), shown across every fill variant.\n\n@summary Rounded (default) vs pill",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Tag color="informative" variant="secondary">
                badge
            </Tag>
            <Tag color="informative" variant="secondary" asChild>
                <button type="button">interactive</button>
            </Tag>
            <Tag color="informative" variant="secondary" asChild aria-label="add">
                <button type="button">
                    <PlusIcon />
                </button>
            </Tag>
        </Row>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('badge');
    const button = canvas.getByRole('button', {
      name: 'interactive'
    });
    expect(badge.className).not.toContain('hover:bg-bg-tag');
    expect(button).toHaveAttribute('data-slot', 'tag');
    expect(button.className).toContain('hover:bg-bg-tag-informative-hover');
    await userEvent.hover(button);
  }
}`,...v.parameters?.docs?.source},description:{story:"Static badge vs interactive Tag. A plain `<span>` badge has no hover; pass\n`asChild` with a `<button>` (or `<a>`) to make it interactive — that adds the\npointer cursor and reveals the hover fill on `:hover`. Hover the middle and\nright Tags to see it.\n\n@summary Static badge vs interactive (asChild) hover",...v.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Tag color="informative" variant="ghost" asChild>
                <button type="button" aria-haspopup="menu" aria-expanded="true">
                    Status menu open
                </button>
            </Tag>
        </Row>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('button', {
      name: 'Status menu open'
    });
    await expect(getComputedStyle(trigger).backgroundColor).toBe(resolveColor('--color-bg-tag-informative-hover'));
  }
}`,...b.parameters?.docs?.source},description:{story:`An interactive Tag that opens a menu or popover keeps its hover fill while
that overlay is open. The open state is read from \`aria-expanded="true"\`
together with \`aria-haspopup\`, which Radix and Base UI triggers set for you.

@summary Tag trigger keeps the hover fill while its overlay is open`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {COLORS.map(color => <Tag key={color} variant="secondary" color={color}>
                    {color}
                </Tag>)}
        </Row>,
  play: ({
    canvasElement
  }) => {
    const positive = within(canvasElement).getByText('positive');
    expect(getComputedStyle(positive).backgroundColor).toBe('rgb(232, 252, 236)');
  }
}`,...x.parameters?.docs?.source},description:{story:"`secondary` fills with a tinted background plus a matching border, shown\nacross every color.\n\n@summary `secondary` variant across all colors",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {COLORS.map(color => <Tag key={color} variant="tertiary" color={color}>
                    {color}
                </Tag>)}
        </Row>
}`,...S.parameters?.docs?.source},description:{story:"`tertiary` (default) fills with a tinted background and no border, shown\nacross every color.\n\n@summary `tertiary` variant across all colors",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {COLORS.map(color => <Tag key={color} variant="ghost" color={color}>
                    {color}
                </Tag>)}
        </Row>
}`,...C.parameters?.docs?.source},description:{story:"`ghost` shows colored text alone with no background or border, across every\ncolor.\n\n@summary `ghost` variant across all colors",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="0.5rem">
            <Row>
                {COLORS.map(color => <Tag key={color} variant="invisible" color={color}>
                        {color}
                    </Tag>)}
            </Row>
            <Row>
                {COLORS.map(color => <Tag key={color} variant="invisible" color={color} asChild>
                        <button type="button">{color}</button>
                    </Tag>)}
            </Row>
        </Stack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'neutral'
    });
    expect(button).toHaveAttribute('data-slot', 'tag');
    expect(button.className).toContain('hover:opacity-100');
    await userEvent.hover(button);
  }
}`,...w.parameters?.docs?.source},description:{story:"`invisible` stays fully transparent until hovered, then reveals its fill.\nThe top row renders plain `<span>` Tags; the bottom row renders interactive\nTags via `asChild` with a `<button>` child.\n\n@summary `invisible` variant as span and as interactive button",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {COLORS.map(color => <Row key={color}>
                    {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant}>
                            <PlusIcon />
                            tag
                            <PlusIcon />
                        </Tag>)}
                </Row>)}
        </Stack>
}`,...T.parameters?.docs?.source},description:{story:`Every variant for every color rendered with a leading and trailing icon.
Icons are tinted with each color's \`icon-tag-*\` token.

@summary Variant × color grid with icons`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            <div style={{
      width: '9rem'
    }}>
                <Tag truncate title="Travel insurance limited lines producer">
                    Travel insurance limited lines producer
                </Tag>
            </div>
            <div style={{
      width: '9rem'
    }}>
                <Tag truncate color="informative">
                    <PlusIcon />
                    Travel insurance limited lines producer
                </Tag>
            </div>
        </Stack>,
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByTitle('Travel insurance limited lines producer');
    const textWrapper = label.firstElementChild as HTMLElement;
    expect(label.className).toContain('overflow-hidden');
    expect(textWrapper.scrollWidth).toBeGreaterThan(textWrapper.clientWidth);
    // \`text-overflow\` only ellipsizes a block container — the Tag itself is
    // a flex one, so the resolved value has to land on the text wrapper.
    expect(getComputedStyle(textWrapper).textOverflow).toBe('ellipsis');
    expect(getComputedStyle(textWrapper).display).toBe('block');

    // The label gives way, never the icon: as a flex item it would otherwise
    // shrink along its width and leave a sliver.
    const icon = canvasElement.querySelector('svg')!.getBoundingClientRect();
    expect(Math.round(icon.width)).toBe(Math.round(icon.height));
  }
}`,...E.parameters?.docs?.source},description:{story:`\`truncate\` caps the Tag at its container's width and ellipsizes the label.
The ellipsis sits on a wrapper around each text run, so a Tag that mixes an
icon with a long label clips the label and leaves the icon at full size.

@summary Long labels capped at the container width with an ellipsis`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '9rem',
    border: '1px dashed gray'
  }}>
            <Tag title="Travel insurance limited lines producer">
                Travel insurance limited lines producer
            </Tag>
        </div>,
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByTitle('Travel insurance limited lines producer');
    expect(getComputedStyle(label).whiteSpace).toBe('nowrap');

    // A single line at \`sm\` is 24px (\`h-6\`) tall — if the label had wrapped,
    // the box would be a multiple of that.
    const box = label.getBoundingClientRect();
    expect(Math.round(box.height)).toBe(24);

    // The label keeps its full intrinsic width and overflows the 9rem (144px) container.
    expect(box.width).toBeGreaterThan(144);
  }
}`,...D.parameters?.docs?.source},description:{story:`Without \`truncate\`, a Tag never wraps its label onto multiple lines — a
container narrower than the label just gets overflowed by a single-line
Tag that keeps its intrinsic width, instead of breaking the label across
lines and spilling out of the fixed-height box.

@summary A too-narrow container overflows a single-line Tag; the label never wraps`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '4rem',
    flexWrap: 'wrap'
  }}>
            <Stack>
                {COLORS.map(color => <Stack gap="0.5rem" key={color}>
                        <strong>{color}:</strong>
                        <Row>
                            {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant}>
                                    {variant}
                                </Tag>)}
                        </Row>
                    </Stack>)}
            </Stack>
            <Stack>
                {COLORS.map(color => <Stack gap="0.5rem" key={color}>
                        <strong>{color} with pill:</strong>
                        <Row>
                            {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant} pill>
                                    {variant}
                                </Tag>)}
                        </Row>
                    </Stack>)}
            </Stack>
            <Stack>
                {COLORS.map(color => <Stack gap="0.5rem" key={color}>
                        <strong>{color} as button:</strong>
                        <Row>
                            {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant} asChild>
                                    <button type="button">{variant}</button>
                                </Tag>)}
                        </Row>
                    </Stack>)}
            </Stack>
            <Stack>
                {COLORS.map(color => <Stack gap="0.5rem" key={color}>
                        <strong>{color} with icon:</strong>
                        <Row>
                            {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant}>
                                    <PlusIcon />
                                    {variant}
                                </Tag>)}
                        </Row>
                    </Stack>)}
            </Stack>
            <Stack>
                {COLORS.map(color => <Stack gap="0.5rem" key={color}>
                        <strong>{color} with icons:</strong>
                        <Row>
                            {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant}>
                                    <PlusIcon />
                                    {variant}
                                    <PlusIcon />
                                </Tag>)}
                        </Row>
                    </Stack>)}
            </Stack>
            <Stack>
                {COLORS.map(color => <Stack gap="0.5rem" key={color}>
                        <strong>{color} icon only:</strong>
                        <Row>
                            {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant} role="img" aria-label={\`\${color} \${variant}\`}>
                                    <PlusIcon />
                                </Tag>)}
                        </Row>
                    </Stack>)}
            </Stack>
        </div>
}`,...O.parameters?.docs?.source},description:{story:"Full matrix: every variant for every color, repeated as default, as `pill`,\nas an interactive `asChild` `<button>`, with a single leading icon, with\nleading + trailing icons, and icon-only.\n\n@summary Variant × color matrix — default, pill, button, and icon layouts",...O.parameters?.docs?.description}}},k=[`Default`,`Sizes`,`Styles`,`Interactive`,`OpenTrigger`,`Secondary`,`Tertiary`,`Ghost`,`Invisible`,`WithIcon`,`Truncate`,`OverflowsWithoutWrapping`,`Colors`]})))()}A();export{O as Colors,h as Default,C as Ghost,v as Interactive,w as Invisible,b as OpenTrigger,D as OverflowsWithoutWrapping,x as Secondary,g as Sizes,_ as Styles,S as Tertiary,E as Truncate,T as WithIcon,k as __namedExportsOrder,m as default};