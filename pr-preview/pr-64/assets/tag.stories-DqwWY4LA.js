import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CcuoUkTc.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{n as o,t as s}from"./lib-Dkaf_tmd.js";import{i as c,n as l,t as u}from"./dist-C-fHuWk7.js";var d,f,p,m,h=e((()=>{d=t(n(),1),c(),a(),s(),f=r(),p=i({base:[`inline-flex w-fit min-w-fit items-center gap-1`,`rounded-md border border-solid border-transparent px-2`,`font-normal leading-normal no-underline`,`transition-[background-color,opacity] duration-200`,`[&_svg]:size-3.5`],variants:{color:{neutral:`bg-bg-tag-neutral-enable text-text-tag-neutral border-border-tag-neutral [&_svg_path]:fill-icon-tag-neutral`,positive:`bg-bg-tag-positive-enable text-text-tag-positive border-border-tag-positive [&_svg_path]:fill-icon-tag-positive`,danger:`bg-bg-tag-danger-enable text-text-tag-danger border-border-tag-danger [&_svg_path]:fill-icon-tag-danger`,warning:`bg-bg-tag-warning-enable text-text-tag-warning border-border-tag-warning [&_svg_path]:fill-icon-tag-warning`,informative:`bg-bg-tag-informative-enable text-text-tag-informative border-border-tag-informative [&_svg_path]:fill-icon-tag-informative`,creative:`bg-bg-tag-creative-enable text-text-tag-creative border-border-tag-creative [&_svg_path]:fill-icon-tag-creative`,dynamic:`bg-bg-tag-dynamic-enable text-text-tag-dynamic border-border-tag-dynamic [&_svg_path]:fill-icon-tag-dynamic`,playful:`bg-bg-tag-playful-enable text-text-tag-playful border-border-tag-playful [&_svg_path]:fill-icon-tag-playful`},variant:{secondary:``,tertiary:`border-transparent`,ghost:`border-transparent bg-transparent`,invisible:`border-transparent bg-transparent opacity-0`},size:{xs:`h-5 px-1.5 text-xs [&_svg]:size-3`,sm:`h-6 text-xs`,md:`h-8 text-sm`},pill:{true:`rounded-full`},truncate:{true:`max-w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap`},interactive:{true:`cursor-pointer`},hasOnlyIcon:{true:`justify-center px-0`}},compoundVariants:[{hasOnlyIcon:!0,size:`xs`,class:`size-5`},{hasOnlyIcon:!0,size:`sm`,class:`size-6`},{hasOnlyIcon:!0,size:`md`,class:`size-8 [&_svg]:size-4`},{color:`neutral`,interactive:!0,class:`hover:bg-bg-tag-neutral-hover`},{color:`positive`,interactive:!0,class:`hover:bg-bg-tag-positive-hover`},{color:`danger`,interactive:!0,class:`hover:bg-bg-tag-danger-hover`},{color:`warning`,interactive:!0,class:`hover:bg-bg-tag-warning-hover`},{color:`informative`,interactive:!0,class:`hover:bg-bg-tag-informative-hover`},{color:`creative`,interactive:!0,class:`hover:bg-bg-tag-creative-hover`},{color:`dynamic`,interactive:!0,class:`hover:bg-bg-tag-dynamic-hover`},{color:`playful`,interactive:!0,class:`hover:bg-bg-tag-playful-hover`},{variant:`invisible`,interactive:!0,class:`hover:opacity-100`}],defaultVariants:{color:`neutral`,variant:`tertiary`,size:`sm`}}),m=({children:e,asChild:t,color:n,variant:r,size:i,pill:a,truncate:s,className:c,ref:m,...h})=>{let g=t?u:`span`,_=t&&(0,d.isValidElement)(e)?e.props.children:e,v=d.Children.toArray(_),y=o(p({color:n,variant:r,size:i,pill:a,truncate:s,interactive:t,hasOnlyIcon:v.length>0&&v.every(d.isValidElement)}),c);return(0,f.jsx)(g,{"data-slot":`tag`,...h,className:y,ref:m,children:t?(0,f.jsx)(l,{children:e}):e})};try{p.displayName=`tagRecipe`,p.__docgenInfo={description:`Style recipe for Tag. Each color maps to its dedicated \`*-tag-*\` semantic
tokens (bg enable/hover, border, text/icon) defined in the theme — one ramp
per color, so the recipe carries no raw palette values.`,displayName:`tagRecipe`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"sm"`},{value:`"xs"`}]}},color:{defaultValue:null,description:``,name:`color`,required:!1,type:{name:`enum`,value:[{value:`"danger"`},{value:`"neutral"`},{value:`"warning"`},{value:`"creative"`},{value:`"dynamic"`},{value:`"playful"`},{value:`"positive"`},{value:`"informative"`}]}},variant:{defaultValue:null,description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"secondary"`},{value:`"tertiary"`},{value:`"ghost"`},{value:`"invisible"`}]}},hasOnlyIcon:{defaultValue:null,description:``,name:`hasOnlyIcon`,required:!1,type:{name:`boolean`}},interactive:{defaultValue:null,description:``,name:`interactive`,required:!1,type:{name:`boolean`}},pill:{defaultValue:null,description:``,name:`pill`,required:!1,type:{name:`boolean`}},truncate:{defaultValue:null,description:``,name:`truncate`,required:!1,type:{name:`boolean`}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{m.displayName=`Tag`,m.__docgenInfo={description:"Tag is a compact label for statuses, categories, counts, and attributes. As a\nplain `<span>` it reads as a static badge with no hover. Pass `asChild` to\nrender an interactive link or button instead — that adds the pointer cursor\nand the hover fill. Pick `color` for meaning and `variant` for fill emphasis.",displayName:`Tag`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"md"`},{value:`"sm"`},{value:`"xs"`}]}},color:{defaultValue:null,description:``,name:`color`,required:!1,type:{name:`enum`,value:[{value:`"danger"`},{value:`"neutral"`},{value:`"warning"`},{value:`"creative"`},{value:`"dynamic"`},{value:`"playful"`},{value:`"positive"`},{value:`"informative"`}]}},variant:{defaultValue:null,description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"secondary"`},{value:`"tertiary"`},{value:`"ghost"`},{value:`"invisible"`}]}},pill:{defaultValue:null,description:``,name:`pill`,required:!1,type:{name:`boolean`}},truncate:{defaultValue:null,description:``,name:`truncate`,required:!1,type:{name:`boolean`}},asChild:{defaultValue:null,description:"Render the single child element instead of a `<span>` (via Radix `Slot`),\nkeeping Tag framework-agnostic. Marks the Tag interactive: adds the pointer\ncursor and the hover fill (a plain `<span>` Tag is a static badge).",name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{h(),g=r(),{expect:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b=[`neutral`,`positive`,`danger`,`warning`,`informative`,`creative`,`dynamic`,`playful`],x=[`secondary`,`tertiary`,`ghost`,`invisible`],S=()=>(0,g.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,g.jsx)(`path`,{d:`M11.25 12.75H6.25C6.0375 12.75 5.85938 12.6781 5.71563 12.5343C5.57187 12.3905 5.5 12.2123 5.5 11.9997C5.5 11.7871 5.57187 11.609 5.71563 11.4654C5.85938 11.3218 6.0375 11.25 6.25 11.25H11.25V6.25003C11.25 6.03753 11.3219 5.85941 11.4657 5.71566C11.6095 5.57191 11.7877 5.50003 12.0003 5.50003C12.2129 5.50003 12.391 5.57191 12.5346 5.71566C12.6782 5.85941 12.7499 6.03753 12.7499 6.25003V11.25H17.75C17.9625 11.25 18.1406 11.3219 18.2843 11.4657C18.4281 11.6095 18.5 11.7877 18.5 12.0003C18.5 12.2129 18.4281 12.391 18.2843 12.5346C18.1406 12.6782 17.9625 12.75 17.75 12.75H12.7499V17.75C12.7499 17.9625 12.6781 18.1406 12.5342 18.2844C12.3904 18.4281 12.2122 18.5 11.9997 18.5C11.787 18.5 11.609 18.4281 11.4654 18.2844C11.3218 18.1406 11.25 17.9625 11.25 17.75V12.75Z`})}),C=({children:e})=>(0,g.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`},children:e}),w=({gap:e=`1rem`,children:t})=>(0,g.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:e},children:t}),T={title:`Components/Tag`,component:m,tags:[`autodocs`],argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},color:{control:`select`,options:b},variant:{control:`select`,options:x},size:{control:`radio`,options:[`xs`,`sm`,`md`]},pill:{control:`boolean`},truncate:{control:`boolean`}},args:{children:`Default`,color:`neutral`,variant:`secondary`,size:`sm`},parameters:{docs:{description:{component:"Tag is a compact semantic label for statuses, categories, counts, and\nattributes. Pick `color` for meaning, `variant` for fill emphasis, and\n`size` for prominence. A plain Tag is a static badge; pass `asChild` to make\nit an interactive link or button, which adds the pointer cursor and hover fill."}}}},E={},D={render:()=>(0,g.jsx)(w,{children:[`xs`,`sm`,`md`].map(e=>(0,g.jsxs)(w,{gap:`0.5rem`,children:[(0,g.jsxs)(`strong`,{children:[e,`:`]}),(0,g.jsxs)(C,{children:[(0,g.jsx)(m,{size:e,color:`informative`,variant:`secondary`,role:`img`,"aria-label":`${e} icon only`,children:(0,g.jsx)(S,{})}),(0,g.jsxs)(m,{size:e,color:`informative`,variant:`secondary`,children:[(0,g.jsx)(S,{}),e]}),(0,g.jsx)(m,{size:e,color:`informative`,variant:`secondary`,children:e})]})]},e))})},O={render:()=>(0,g.jsxs)(w,{gap:`0.5rem`,children:[(0,g.jsx)(C,{children:x.map(e=>(0,g.jsx)(m,{color:`informative`,variant:e,children:e},e))}),(0,g.jsx)(C,{children:x.map(e=>(0,g.jsx)(m,{color:`informative`,variant:e,pill:!0,children:e},e))})]})},k={render:()=>(0,g.jsxs)(C,{children:[(0,g.jsx)(m,{color:`informative`,variant:`secondary`,children:`badge`}),(0,g.jsx)(m,{color:`informative`,variant:`secondary`,asChild:!0,children:(0,g.jsx)(`button`,{type:`button`,children:`interactive`})}),(0,g.jsx)(m,{color:`informative`,variant:`secondary`,asChild:!0,"aria-label":`add`,children:(0,g.jsx)(`button`,{type:`button`,children:(0,g.jsx)(S,{})})})]}),play:async({canvasElement:e})=>{let t=y(e),n=t.getByText(`badge`),r=t.getByRole(`button`,{name:`interactive`});_(n.className).not.toContain(`hover:bg-bg-tag`),_(r).toHaveAttribute(`data-slot`,`tag`),_(r.className).toContain(`hover:bg-bg-tag-informative-hover`),await v.hover(r)}},A={render:()=>(0,g.jsx)(C,{children:b.map(e=>(0,g.jsx)(m,{variant:`secondary`,color:e,children:e},e))}),play:({canvasElement:e})=>{let t=y(e).getByText(`positive`);_(getComputedStyle(t).backgroundColor).toBe(`rgb(232, 252, 236)`)}},j={render:()=>(0,g.jsx)(C,{children:b.map(e=>(0,g.jsx)(m,{variant:`tertiary`,color:e,children:e},e))})},M={render:()=>(0,g.jsx)(C,{children:b.map(e=>(0,g.jsx)(m,{variant:`ghost`,color:e,children:e},e))})},N={render:()=>(0,g.jsxs)(w,{gap:`0.5rem`,children:[(0,g.jsx)(C,{children:b.map(e=>(0,g.jsx)(m,{variant:`invisible`,color:e,children:e},e))}),(0,g.jsx)(C,{children:b.map(e=>(0,g.jsx)(m,{variant:`invisible`,color:e,asChild:!0,children:(0,g.jsx)(`button`,{type:`button`,children:e})},e))})]}),play:async({canvasElement:e})=>{let t=y(e).getByRole(`button`,{name:`neutral`});_(t).toHaveAttribute(`data-slot`,`tag`),_(t.className).toContain(`hover:opacity-100`),await v.hover(t)}},P={render:()=>(0,g.jsx)(w,{children:b.map(e=>(0,g.jsx)(C,{children:x.map(t=>(0,g.jsxs)(m,{color:e,variant:t,children:[(0,g.jsx)(S,{}),`tag`,(0,g.jsx)(S,{})]},t))},e))})},F={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`4rem`,flexWrap:`wrap`},children:[(0,g.jsx)(w,{children:b.map(e=>(0,g.jsxs)(w,{gap:`0.5rem`,children:[(0,g.jsxs)(`strong`,{children:[e,`:`]}),(0,g.jsx)(C,{children:x.map(t=>(0,g.jsx)(m,{color:e,variant:t,children:t},t))})]},e))}),(0,g.jsx)(w,{children:b.map(e=>(0,g.jsxs)(w,{gap:`0.5rem`,children:[(0,g.jsxs)(`strong`,{children:[e,` with pill:`]}),(0,g.jsx)(C,{children:x.map(t=>(0,g.jsx)(m,{color:e,variant:t,pill:!0,children:t},t))})]},e))}),(0,g.jsx)(w,{children:b.map(e=>(0,g.jsxs)(w,{gap:`0.5rem`,children:[(0,g.jsxs)(`strong`,{children:[e,` as button:`]}),(0,g.jsx)(C,{children:x.map(t=>(0,g.jsx)(m,{color:e,variant:t,asChild:!0,children:(0,g.jsx)(`button`,{type:`button`,children:t})},t))})]},e))}),(0,g.jsx)(w,{children:b.map(e=>(0,g.jsxs)(w,{gap:`0.5rem`,children:[(0,g.jsxs)(`strong`,{children:[e,` with icon:`]}),(0,g.jsx)(C,{children:x.map(t=>(0,g.jsxs)(m,{color:e,variant:t,children:[(0,g.jsx)(S,{}),t]},t))})]},e))}),(0,g.jsx)(w,{children:b.map(e=>(0,g.jsxs)(w,{gap:`0.5rem`,children:[(0,g.jsxs)(`strong`,{children:[e,` with icons:`]}),(0,g.jsx)(C,{children:x.map(t=>(0,g.jsxs)(m,{color:e,variant:t,children:[(0,g.jsx)(S,{}),t,(0,g.jsx)(S,{})]},t))})]},e))}),(0,g.jsx)(w,{children:b.map(e=>(0,g.jsxs)(w,{gap:`0.5rem`,children:[(0,g.jsxs)(`strong`,{children:[e,` icon only:`]}),(0,g.jsx)(C,{children:x.map(t=>(0,g.jsx)(m,{color:e,variant:t,role:`img`,"aria-label":`${e} ${t}`,children:(0,g.jsx)(S,{})},t))})]},e))})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{}`,...E.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `color`, `variant`, `size`, `pill`, and\n`truncate` from the Controls panel to explore every visual combination.\n\n@summary Default args playground for Tag",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"The three sizes — `xs` (20px), `sm` (24px, default), and `md` (32px) — each\nshown icon-only, icon + text, and text-only so the type and icon scale are\nvisible.\n\n@summary All three sizes across icon-only, icon + text, and text-only",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"The `Style` axis: the default rounded corners (top row) versus `pill` fully\nrounded (bottom row), shown across every fill variant.\n\n@summary Rounded (default) vs pill",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Static badge vs interactive Tag. A plain `<span>` badge has no hover; pass\n`asChild` with a `<button>` (or `<a>`) to make it interactive — that adds the\npointer cursor and reveals the hover fill on `:hover`. Hover the middle and\nright Tags to see it.\n\n@summary Static badge vs interactive (asChild) hover",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"`secondary` fills with a tinted background plus a matching border, shown\nacross every color.\n\n@summary `secondary` variant across all colors",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {COLORS.map(color => <Tag key={color} variant="tertiary" color={color}>
                    {color}
                </Tag>)}
        </Row>
}`,...j.parameters?.docs?.source},description:{story:"`tertiary` (default) fills with a tinted background and no border, shown\nacross every color.\n\n@summary `tertiary` variant across all colors",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {COLORS.map(color => <Tag key={color} variant="ghost" color={color}>
                    {color}
                </Tag>)}
        </Row>
}`,...M.parameters?.docs?.source},description:{story:"`ghost` shows colored text alone with no background or border, across every\ncolor.\n\n@summary `ghost` variant across all colors",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"`invisible` stays fully transparent until hovered, then reveals its fill.\nThe top row renders plain `<span>` Tags; the bottom row renders interactive\nTags via `asChild` with a `<button>` child.\n\n@summary `invisible` variant as span and as interactive button",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {COLORS.map(color => <Row key={color}>
                    {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant}>
                            <IconAdd />
                            tag
                            <IconAdd />
                        </Tag>)}
                </Row>)}
        </Stack>
}`,...P.parameters?.docs?.source},description:{story:`Every variant for every color rendered with a leading and trailing icon.
Icons are tinted with each color's \`icon-tag-*\` token.

@summary Variant × color grid with icons`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"Full matrix: every variant for every color, repeated as default, as `pill`,\nas an interactive `asChild` `<button>`, with a single leading icon, with\nleading + trailing icons, and icon-only.\n\n@summary Variant × color matrix — default, pill, button, and icon layouts",...F.parameters?.docs?.description}}},I=[`Default`,`Sizes`,`Styles`,`Interactive`,`Secondary`,`Tertiary`,`Ghost`,`Invisible`,`WithIcon`,`Colors`]}))();export{F as Colors,E as Default,M as Ghost,k as Interactive,N as Invisible,A as Secondary,D as Sizes,O as Styles,j as Tertiary,P as WithIcon,I as __namedExportsOrder,T as default};