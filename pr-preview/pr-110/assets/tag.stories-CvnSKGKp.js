import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./tag-BxzC8u3z.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{n(),i=t(),{expect:a,userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c=[`neutral`,`positive`,`danger`,`warning`,`informative`,`creative`,`dynamic`,`playful`],l=[`secondary`,`tertiary`,`ghost`,`invisible`],u=()=>(0,i.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,i.jsx)(`path`,{d:`M11.25 12.75H6.25C6.0375 12.75 5.85938 12.6781 5.71563 12.5343C5.57187 12.3905 5.5 12.2123 5.5 11.9997C5.5 11.7871 5.57187 11.609 5.71563 11.4654C5.85938 11.3218 6.0375 11.25 6.25 11.25H11.25V6.25003C11.25 6.03753 11.3219 5.85941 11.4657 5.71566C11.6095 5.57191 11.7877 5.50003 12.0003 5.50003C12.2129 5.50003 12.391 5.57191 12.5346 5.71566C12.6782 5.85941 12.7499 6.03753 12.7499 6.25003V11.25H17.75C17.9625 11.25 18.1406 11.3219 18.2843 11.4657C18.4281 11.6095 18.5 11.7877 18.5 12.0003C18.5 12.2129 18.4281 12.391 18.2843 12.5346C18.1406 12.6782 17.9625 12.75 17.75 12.75H12.7499V17.75C12.7499 17.9625 12.6781 18.1406 12.5342 18.2844C12.3904 18.4281 12.2122 18.5 11.9997 18.5C11.787 18.5 11.609 18.4281 11.4654 18.2844C11.3218 18.1406 11.25 17.9625 11.25 17.75V12.75Z`})}),d=({children:e})=>(0,i.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`},children:e}),f=({gap:e=`1rem`,children:t})=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:e},children:t}),p={title:`Components/Tag`,component:r,tags:[`autodocs`],argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},color:{control:`select`,options:c},variant:{control:`select`,options:l},size:{control:`radio`,options:[`xs`,`sm`,`md`]},pill:{control:`boolean`},truncate:{control:`boolean`}},args:{children:`Default`,color:`neutral`,variant:`secondary`,size:`sm`},parameters:{docs:{description:{component:"Tag is a compact semantic label for statuses, categories, counts, and\nattributes. Pick `color` for meaning, `variant` for fill emphasis, and\n`size` for prominence. A plain Tag is a static badge; pass `asChild` to make\nit an interactive link or button, which adds the pointer cursor and hover fill."}}}},m={},h={render:()=>(0,i.jsx)(f,{children:[`xs`,`sm`,`md`].map(e=>(0,i.jsxs)(f,{gap:`0.5rem`,children:[(0,i.jsxs)(`strong`,{children:[e,`:`]}),(0,i.jsxs)(d,{children:[(0,i.jsx)(r,{size:e,color:`informative`,variant:`secondary`,role:`img`,"aria-label":`${e} icon only`,children:(0,i.jsx)(u,{})}),(0,i.jsxs)(r,{size:e,color:`informative`,variant:`secondary`,children:[(0,i.jsx)(u,{}),e]}),(0,i.jsx)(r,{size:e,color:`informative`,variant:`secondary`,children:e})]})]},e))})},g={render:()=>(0,i.jsxs)(f,{gap:`0.5rem`,children:[(0,i.jsx)(d,{children:l.map(e=>(0,i.jsx)(r,{color:`informative`,variant:e,children:e},e))}),(0,i.jsx)(d,{children:l.map(e=>(0,i.jsx)(r,{color:`informative`,variant:e,pill:!0,children:e},e))})]})},_={render:()=>(0,i.jsxs)(d,{children:[(0,i.jsx)(r,{color:`informative`,variant:`secondary`,children:`badge`}),(0,i.jsx)(r,{color:`informative`,variant:`secondary`,asChild:!0,children:(0,i.jsx)(`button`,{type:`button`,children:`interactive`})}),(0,i.jsx)(r,{color:`informative`,variant:`secondary`,asChild:!0,"aria-label":`add`,children:(0,i.jsx)(`button`,{type:`button`,children:(0,i.jsx)(u,{})})})]}),play:async({canvasElement:e})=>{let t=s(e),n=t.getByText(`badge`),r=t.getByRole(`button`,{name:`interactive`});a(n.className).not.toContain(`hover:bg-bg-tag`),a(r).toHaveAttribute(`data-slot`,`tag`),a(r.className).toContain(`hover:bg-bg-tag-informative-hover`),await o.hover(r)}},v={render:()=>(0,i.jsx)(d,{children:c.map(e=>(0,i.jsx)(r,{variant:`secondary`,color:e,children:e},e))}),play:({canvasElement:e})=>{let t=s(e).getByText(`positive`);a(getComputedStyle(t).backgroundColor).toBe(`rgb(232, 252, 236)`)}},y={render:()=>(0,i.jsx)(d,{children:c.map(e=>(0,i.jsx)(r,{variant:`tertiary`,color:e,children:e},e))})},b={render:()=>(0,i.jsx)(d,{children:c.map(e=>(0,i.jsx)(r,{variant:`ghost`,color:e,children:e},e))})},x={render:()=>(0,i.jsxs)(f,{gap:`0.5rem`,children:[(0,i.jsx)(d,{children:c.map(e=>(0,i.jsx)(r,{variant:`invisible`,color:e,children:e},e))}),(0,i.jsx)(d,{children:c.map(e=>(0,i.jsx)(r,{variant:`invisible`,color:e,asChild:!0,children:(0,i.jsx)(`button`,{type:`button`,children:e})},e))})]}),play:async({canvasElement:e})=>{let t=s(e).getByRole(`button`,{name:`neutral`});a(t).toHaveAttribute(`data-slot`,`tag`),a(t.className).toContain(`hover:opacity-100`),await o.hover(t)}},S={render:()=>(0,i.jsx)(f,{children:c.map(e=>(0,i.jsx)(d,{children:l.map(t=>(0,i.jsxs)(r,{color:e,variant:t,children:[(0,i.jsx)(u,{}),`tag`,(0,i.jsx)(u,{})]},t))},e))})},C={render:()=>(0,i.jsxs)(f,{children:[(0,i.jsx)(`div`,{style:{width:`9rem`},children:(0,i.jsx)(r,{truncate:!0,title:`Travel insurance limited lines producer`,children:`Travel insurance limited lines producer`})}),(0,i.jsx)(`div`,{style:{width:`9rem`},children:(0,i.jsxs)(r,{truncate:!0,color:`informative`,children:[(0,i.jsx)(u,{}),`Travel insurance limited lines producer`]})})]}),play:({canvasElement:e})=>{let t=s(e).getByTitle(`Travel insurance limited lines producer`),n=t.firstElementChild;a(t.className).toContain(`overflow-hidden`),a(n.scrollWidth).toBeGreaterThan(n.clientWidth),a(getComputedStyle(n).textOverflow).toBe(`ellipsis`),a(getComputedStyle(n).display).toBe(`block`);let r=e.querySelector(`svg`).getBoundingClientRect();a(Math.round(r.width)).toBe(Math.round(r.height))}},w={render:()=>(0,i.jsx)(`div`,{style:{width:`9rem`,border:`1px dashed gray`},children:(0,i.jsx)(r,{title:`Travel insurance limited lines producer`,children:`Travel insurance limited lines producer`})}),play:({canvasElement:e})=>{let t=s(e).getByTitle(`Travel insurance limited lines producer`);a(getComputedStyle(t).whiteSpace).toBe(`nowrap`);let n=t.getBoundingClientRect();a(Math.round(n.height)).toBe(24),a(n.width).toBeGreaterThan(144)}},T={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`4rem`,flexWrap:`wrap`},children:[(0,i.jsx)(f,{children:c.map(e=>(0,i.jsxs)(f,{gap:`0.5rem`,children:[(0,i.jsxs)(`strong`,{children:[e,`:`]}),(0,i.jsx)(d,{children:l.map(t=>(0,i.jsx)(r,{color:e,variant:t,children:t},t))})]},e))}),(0,i.jsx)(f,{children:c.map(e=>(0,i.jsxs)(f,{gap:`0.5rem`,children:[(0,i.jsxs)(`strong`,{children:[e,` with pill:`]}),(0,i.jsx)(d,{children:l.map(t=>(0,i.jsx)(r,{color:e,variant:t,pill:!0,children:t},t))})]},e))}),(0,i.jsx)(f,{children:c.map(e=>(0,i.jsxs)(f,{gap:`0.5rem`,children:[(0,i.jsxs)(`strong`,{children:[e,` as button:`]}),(0,i.jsx)(d,{children:l.map(t=>(0,i.jsx)(r,{color:e,variant:t,asChild:!0,children:(0,i.jsx)(`button`,{type:`button`,children:t})},t))})]},e))}),(0,i.jsx)(f,{children:c.map(e=>(0,i.jsxs)(f,{gap:`0.5rem`,children:[(0,i.jsxs)(`strong`,{children:[e,` with icon:`]}),(0,i.jsx)(d,{children:l.map(t=>(0,i.jsxs)(r,{color:e,variant:t,children:[(0,i.jsx)(u,{}),t]},t))})]},e))}),(0,i.jsx)(f,{children:c.map(e=>(0,i.jsxs)(f,{gap:`0.5rem`,children:[(0,i.jsxs)(`strong`,{children:[e,` with icons:`]}),(0,i.jsx)(d,{children:l.map(t=>(0,i.jsxs)(r,{color:e,variant:t,children:[(0,i.jsx)(u,{}),t,(0,i.jsx)(u,{})]},t))})]},e))}),(0,i.jsx)(f,{children:c.map(e=>(0,i.jsxs)(f,{gap:`0.5rem`,children:[(0,i.jsxs)(`strong`,{children:[e,` icon only:`]}),(0,i.jsx)(d,{children:l.map(t=>(0,i.jsx)(r,{color:e,variant:t,role:`img`,"aria-label":`${e} ${t}`,children:(0,i.jsx)(u,{})},t))})]},e))})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `color`, `variant`, `size`, `pill`, and\n`truncate` from the Controls panel to explore every visual combination.\n\n@summary Default args playground for Tag",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {(['xs', 'sm', 'md'] as const).map(size => <Stack gap="0.5rem" key={size}>
                    <strong>{size}:</strong>
                    <Row>
                        <Tag size={size} color="informative" variant="secondary" role="img" aria-label={\`\${size} icon only\`}>
                            <IconAdd />
                        </Tag>
                        <Tag size={size} color="informative" variant="secondary">
                            <IconAdd />
                            {size}
                        </Tag>
                        <Tag size={size} color="informative" variant="secondary">
                            {size}
                        </Tag>
                    </Row>
                </Stack>)}
        </Stack>
}`,...h.parameters?.docs?.source},description:{story:"The three sizes — `xs` (20px), `sm` (24px, default), and `md` (32px) — each\nshown icon-only, icon + text, and text-only so the type and icon scale are\nvisible.\n\n@summary All three sizes across icon-only, icon + text, and text-only",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"The `Style` axis: the default rounded corners (top row) versus `pill` fully\nrounded (bottom row), shown across every fill variant.\n\n@summary Rounded (default) vs pill",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Tag color="informative" variant="secondary">
                badge
            </Tag>
            <Tag color="informative" variant="secondary" asChild>
                <button type="button">interactive</button>
            </Tag>
            <Tag color="informative" variant="secondary" asChild aria-label="add">
                <button type="button">
                    <IconAdd />
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
}`,..._.parameters?.docs?.source},description:{story:"Static badge vs interactive Tag. A plain `<span>` badge has no hover; pass\n`asChild` with a `<button>` (or `<a>`) to make it interactive — that adds the\npointer cursor and reveals the hover fill on `:hover`. Hover the middle and\nright Tags to see it.\n\n@summary Static badge vs interactive (asChild) hover",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"`secondary` fills with a tinted background plus a matching border, shown\nacross every color.\n\n@summary `secondary` variant across all colors",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {COLORS.map(color => <Tag key={color} variant="tertiary" color={color}>
                    {color}
                </Tag>)}
        </Row>
}`,...y.parameters?.docs?.source},description:{story:"`tertiary` (default) fills with a tinted background and no border, shown\nacross every color.\n\n@summary `tertiary` variant across all colors",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {COLORS.map(color => <Tag key={color} variant="ghost" color={color}>
                    {color}
                </Tag>)}
        </Row>
}`,...b.parameters?.docs?.source},description:{story:"`ghost` shows colored text alone with no background or border, across every\ncolor.\n\n@summary `ghost` variant across all colors",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"`invisible` stays fully transparent until hovered, then reveals its fill.\nThe top row renders plain `<span>` Tags; the bottom row renders interactive\nTags via `asChild` with a `<button>` child.\n\n@summary `invisible` variant as span and as interactive button",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {COLORS.map(color => <Row key={color}>
                    {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant}>
                            <IconAdd />
                            tag
                            <IconAdd />
                        </Tag>)}
                </Row>)}
        </Stack>
}`,...S.parameters?.docs?.source},description:{story:`Every variant for every color rendered with a leading and trailing icon.
Icons are tinted with each color's \`icon-tag-*\` token.

@summary Variant × color grid with icons`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
                    <IconAdd />
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
}`,...C.parameters?.docs?.source},description:{story:`\`truncate\` caps the Tag at its container's width and ellipsizes the label.
The ellipsis sits on a wrapper around each text run, so a Tag that mixes an
icon with a long label clips the label and leaves the icon at full size.

@summary Long labels capped at the container width with an ellipsis`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Without \`truncate\`, a Tag never wraps its label onto multiple lines — a
container narrower than the label just gets overflowed by a single-line
Tag that keeps its intrinsic width, instead of breaking the label across
lines and spilling out of the fixed-height box.

@summary A too-narrow container overflows a single-line Tag; the label never wraps`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
                                    <IconAdd />
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
                                    <IconAdd />
                                    {variant}
                                    <IconAdd />
                                </Tag>)}
                        </Row>
                    </Stack>)}
            </Stack>
            <Stack>
                {COLORS.map(color => <Stack gap="0.5rem" key={color}>
                        <strong>{color} icon only:</strong>
                        <Row>
                            {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant} role="img" aria-label={\`\${color} \${variant}\`}>
                                    <IconAdd />
                                </Tag>)}
                        </Row>
                    </Stack>)}
            </Stack>
        </div>
}`,...T.parameters?.docs?.source},description:{story:"Full matrix: every variant for every color, repeated as default, as `pill`,\nas an interactive `asChild` `<button>`, with a single leading icon, with\nleading + trailing icons, and icon-only.\n\n@summary Variant × color matrix — default, pill, button, and icon layouts",...T.parameters?.docs?.description}}},E=[`Default`,`Sizes`,`Styles`,`Interactive`,`Secondary`,`Tertiary`,`Ghost`,`Invisible`,`WithIcon`,`Truncate`,`OverflowsWithoutWrapping`,`Colors`]}))();export{T as Colors,m as Default,b as Ghost,_ as Interactive,x as Invisible,w as OverflowsWithoutWrapping,v as Secondary,h as Sizes,g as Styles,y as Tertiary,C as Truncate,S as WithIcon,E as __namedExportsOrder,p as default};