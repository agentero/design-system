import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-D0yt7BBt.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./plus-CQOLHqw0.js";import{n as a,t as o}from"./dist-C8AlzbfS.js";import{n as s,t as c}from"./utils-nsk-j2e0.js";import{i as l,n as u,t as d}from"./dist-CTsW0BoJ.js";var f,p,m,h,g;function _(){return(_=e((()=>{f=t(),l(),o(),s(),p=n(),m=a({base:[`inline-flex w-fit min-w-fit items-center gap-1`,`rounded-md border border-solid border-transparent px-2`,`font-normal leading-normal whitespace-nowrap no-underline`,`transition-[background-color,opacity] duration-200`,`[&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg:not([fill=none])]:fill-current [&_svg_path[fill]]:fill-current`],variants:{color:{neutral:`bg-bg-tag-neutral-enable text-text-tag-neutral border-border-tag-neutral [&_svg]:text-icon-tag-neutral`,positive:`bg-bg-tag-positive-enable text-text-tag-positive border-border-tag-positive [&_svg]:text-icon-tag-positive`,danger:`bg-bg-tag-danger-enable text-text-tag-danger border-border-tag-danger [&_svg]:text-icon-tag-danger`,warning:`bg-bg-tag-warning-enable text-text-tag-warning border-border-tag-warning [&_svg]:text-icon-tag-warning`,informative:`bg-bg-tag-informative-enable text-text-tag-informative border-border-tag-informative [&_svg]:text-icon-tag-informative`,creative:`bg-bg-tag-creative-enable text-text-tag-creative border-border-tag-creative [&_svg]:text-icon-tag-creative`,dynamic:`bg-bg-tag-dynamic-enable text-text-tag-dynamic border-border-tag-dynamic [&_svg]:text-icon-tag-dynamic`,playful:`bg-bg-tag-playful-enable text-text-tag-playful border-border-tag-playful [&_svg]:text-icon-tag-playful`},variant:{secondary:``,tertiary:`border-transparent`,ghost:`border-transparent bg-transparent`,invisible:`border-transparent bg-transparent opacity-0`},size:{xs:`h-5 px-1.5 text-xs [&_svg]:size-3`,sm:`h-6 text-xs`,md:`h-8 text-sm`},pill:{true:`rounded-full`},truncate:{true:`max-w-full min-w-0 overflow-hidden`},interactive:{true:`cursor-pointer`},hasOnlyIcon:{true:`justify-center px-0`}},compoundVariants:[{hasOnlyIcon:!0,size:`xs`,class:`size-5`},{hasOnlyIcon:!0,size:`sm`,class:`size-6`},{hasOnlyIcon:!0,size:`md`,class:`size-8 [&_svg]:size-4`},{color:`neutral`,interactive:!0,class:`hover:bg-bg-tag-neutral-hover`},{color:`positive`,interactive:!0,class:`hover:bg-bg-tag-positive-hover`},{color:`danger`,interactive:!0,class:`hover:bg-bg-tag-danger-hover`},{color:`warning`,interactive:!0,class:`hover:bg-bg-tag-warning-hover`},{color:`informative`,interactive:!0,class:`hover:bg-bg-tag-informative-hover`},{color:`creative`,interactive:!0,class:`hover:bg-bg-tag-creative-hover`},{color:`dynamic`,interactive:!0,class:`hover:bg-bg-tag-dynamic-hover`},{color:`playful`,interactive:!0,class:`hover:bg-bg-tag-playful-hover`},{variant:`invisible`,interactive:!0,class:`hover:opacity-100`}],defaultVariants:{color:`neutral`,variant:`tertiary`,size:`sm`}}),h=e=>f.Children.map(e,e=>typeof e==`string`||typeof e==`number`?(0,p.jsx)(`span`,{className:`min-w-0 truncate`,children:e}):e),g=({children:e,asChild:t,color:n,variant:r,size:i,pill:a,truncate:o,className:s,ref:l,...g})=>{let _=t?d:`span`,v=f.Children.toArray(t&&(0,f.isValidElement)(e)?e.props.children:e),y=v.length>0&&v.every(f.isValidElement),b=c(m({color:n,variant:r,size:i,pill:a,truncate:o,interactive:t,hasOnlyIcon:y}),s),x=o&&!t?h(e):e;return(0,p.jsx)(_,{"data-slot":`tag`,...g,className:b,ref:l,children:t?(0,p.jsx)(u,{children:e}):x})};try{m.displayName=`tagRecipe`,m.__docgenInfo={description:`Style recipe for Tag. Each color maps to its dedicated \`*-tag-*\` semantic
tokens (bg enable/hover, border, text/icon) defined in the theme — one ramp
per color, so the recipe carries no raw palette values.`,displayName:`tagRecipe`,filePath:`/home/runner/work/design-system/design-system/src/tag/tag.tsx`,methods:[],props:{size:{defaultValue:null,description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "md" | "xs"`,value:[{value:`"sm"`},{value:`"md"`},{value:`"xs"`}]}},color:{defaultValue:null,description:``,name:`color`,required:!1,tags:{},type:{name:`enum`,raw:`"neutral" | "warning" | "danger" | "creative" | "dynamic" | "playful" | "positive" | "informative"`,value:[{value:`"neutral"`},{value:`"warning"`},{value:`"danger"`},{value:`"creative"`},{value:`"dynamic"`},{value:`"playful"`},{value:`"positive"`},{value:`"informative"`}]}},variant:{defaultValue:null,description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"ghost" | "secondary" | "tertiary" | "invisible"`,value:[{value:`"ghost"`},{value:`"secondary"`},{value:`"tertiary"`},{value:`"invisible"`}]}},hasOnlyIcon:{defaultValue:null,description:``,name:`hasOnlyIcon`,required:!1,tags:{},type:{name:`boolean`}},interactive:{defaultValue:null,description:``,name:`interactive`,required:!1,tags:{},type:{name:`boolean`}},pill:{defaultValue:null,description:``,name:`pill`,required:!1,tags:{},type:{name:`boolean`}},truncate:{defaultValue:null,description:``,name:`truncate`,required:!1,tags:{},type:{name:`boolean`}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the Tag component styles`}}}catch{}try{g.displayName=`Tag`,g.__docgenInfo={description:"Tag is a compact label for statuses, categories, counts, and attributes. As a\nplain `<span>` it reads as a static badge with no hover. Pass `asChild` to\nrender an interactive link or button instead — that adds the pointer cursor\nand the hover fill. Pick `color` for meaning and `variant` for fill emphasis.",displayName:`Tag`,filePath:`/home/runner/work/design-system/design-system/src/tag/tag.tsx`,methods:[],props:{size:{defaultValue:null,description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "md" | "xs"`,value:[{value:`"sm"`},{value:`"md"`},{value:`"xs"`}]}},color:{defaultValue:null,description:``,name:`color`,required:!1,tags:{},type:{name:`enum`,raw:`"neutral" | "warning" | "danger" | "creative" | "dynamic" | "playful" | "positive" | "informative"`,value:[{value:`"neutral"`},{value:`"warning"`},{value:`"danger"`},{value:`"creative"`},{value:`"dynamic"`},{value:`"playful"`},{value:`"positive"`},{value:`"informative"`}]}},variant:{defaultValue:null,description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"ghost" | "secondary" | "tertiary" | "invisible"`,value:[{value:`"ghost"`},{value:`"secondary"`},{value:`"tertiary"`},{value:`"invisible"`}]}},pill:{defaultValue:null,description:``,name:`pill`,required:!1,tags:{},type:{name:`boolean`}},truncate:{defaultValue:null,description:``,name:`truncate`,required:!1,tags:{},type:{name:`boolean`}},asChild:{defaultValue:null,declarations:[{fileName:`design-system/src/tag/tag.tsx`,name:`TypeLiteral`}],description:"Render the single child element instead of a `<span>` (via Radix `Slot`),\nkeeping Tag framework-agnostic. Marks the Tag interactive: adds the pointer\ncursor and the hover fill (a plain `<span>` Tag is a static badge).",name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:"Compact semantic label; renders a static badge `<span>` or, with `asChild`, an interactive element",example:`<Tag color="positive">Active</Tag>
<Tag asChild color="informative">
  <a href="/carriers">View carriers</a>
</Tag>`}}}catch{}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{r(),_(),v=n(),{expect:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S=[`neutral`,`positive`,`danger`,`warning`,`informative`,`creative`,`dynamic`,`playful`],C=[`secondary`,`tertiary`,`ghost`,`invisible`],w=({children:e})=>(0,v.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`},children:e}),T=({gap:e=`1rem`,children:t})=>(0,v.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:e},children:t}),E={title:`Components/Tag`,component:g,tags:[`autodocs`],argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},color:{control:`select`,options:S},variant:{control:`select`,options:C},size:{control:`radio`,options:[`xs`,`sm`,`md`]},pill:{control:`boolean`},truncate:{control:`boolean`}},args:{children:`Default`,color:`neutral`,variant:`secondary`,size:`sm`},parameters:{docs:{description:{component:"Tag is a compact semantic label for statuses, categories, counts, and\nattributes. Pick `color` for meaning, `variant` for fill emphasis, and\n`size` for prominence. A plain Tag is a static badge; pass `asChild` to make\nit an interactive link or button, which adds the pointer cursor and hover fill."}}}},D={},O={render:()=>(0,v.jsx)(T,{children:[`xs`,`sm`,`md`].map(e=>(0,v.jsxs)(T,{gap:`0.5rem`,children:[(0,v.jsxs)(`strong`,{children:[e,`:`]}),(0,v.jsxs)(w,{children:[(0,v.jsx)(g,{size:e,color:`informative`,variant:`secondary`,role:`img`,"aria-label":`${e} icon only`,children:(0,v.jsx)(i,{})}),(0,v.jsxs)(g,{size:e,color:`informative`,variant:`secondary`,children:[(0,v.jsx)(i,{}),e]}),(0,v.jsx)(g,{size:e,color:`informative`,variant:`secondary`,children:e})]})]},e))})},k={render:()=>(0,v.jsxs)(T,{gap:`0.5rem`,children:[(0,v.jsx)(w,{children:C.map(e=>(0,v.jsx)(g,{color:`informative`,variant:e,children:e},e))}),(0,v.jsx)(w,{children:C.map(e=>(0,v.jsx)(g,{color:`informative`,variant:e,pill:!0,children:e},e))})]})},A={render:()=>(0,v.jsxs)(w,{children:[(0,v.jsx)(g,{color:`informative`,variant:`secondary`,children:`badge`}),(0,v.jsx)(g,{color:`informative`,variant:`secondary`,asChild:!0,children:(0,v.jsx)(`button`,{type:`button`,children:`interactive`})}),(0,v.jsx)(g,{color:`informative`,variant:`secondary`,asChild:!0,"aria-label":`add`,children:(0,v.jsx)(`button`,{type:`button`,children:(0,v.jsx)(i,{})})})]}),play:async({canvasElement:e})=>{let t=x(e),n=t.getByText(`badge`),r=t.getByRole(`button`,{name:`interactive`});y(n.className).not.toContain(`hover:bg-bg-tag`),y(r).toHaveAttribute(`data-slot`,`tag`),y(r.className).toContain(`hover:bg-bg-tag-informative-hover`),await b.hover(r)}},j={render:()=>(0,v.jsx)(w,{children:S.map(e=>(0,v.jsx)(g,{variant:`secondary`,color:e,children:e},e))}),play:({canvasElement:e})=>{let t=x(e).getByText(`positive`);y(getComputedStyle(t).backgroundColor).toBe(`rgb(232, 252, 236)`)}},M={render:()=>(0,v.jsx)(w,{children:S.map(e=>(0,v.jsx)(g,{variant:`tertiary`,color:e,children:e},e))})},N={render:()=>(0,v.jsx)(w,{children:S.map(e=>(0,v.jsx)(g,{variant:`ghost`,color:e,children:e},e))})},P={render:()=>(0,v.jsxs)(T,{gap:`0.5rem`,children:[(0,v.jsx)(w,{children:S.map(e=>(0,v.jsx)(g,{variant:`invisible`,color:e,children:e},e))}),(0,v.jsx)(w,{children:S.map(e=>(0,v.jsx)(g,{variant:`invisible`,color:e,asChild:!0,children:(0,v.jsx)(`button`,{type:`button`,children:e})},e))})]}),play:async({canvasElement:e})=>{let t=x(e).getByRole(`button`,{name:`neutral`});y(t).toHaveAttribute(`data-slot`,`tag`),y(t.className).toContain(`hover:opacity-100`),await b.hover(t)}},F={render:()=>(0,v.jsx)(T,{children:S.map(e=>(0,v.jsx)(w,{children:C.map(t=>(0,v.jsxs)(g,{color:e,variant:t,children:[(0,v.jsx)(i,{}),`tag`,(0,v.jsx)(i,{})]},t))},e))})},I={render:()=>(0,v.jsxs)(T,{children:[(0,v.jsx)(`div`,{style:{width:`9rem`},children:(0,v.jsx)(g,{truncate:!0,title:`Travel insurance limited lines producer`,children:`Travel insurance limited lines producer`})}),(0,v.jsx)(`div`,{style:{width:`9rem`},children:(0,v.jsxs)(g,{truncate:!0,color:`informative`,children:[(0,v.jsx)(i,{}),`Travel insurance limited lines producer`]})})]}),play:({canvasElement:e})=>{let t=x(e).getByTitle(`Travel insurance limited lines producer`),n=t.firstElementChild;y(t.className).toContain(`overflow-hidden`),y(n.scrollWidth).toBeGreaterThan(n.clientWidth),y(getComputedStyle(n).textOverflow).toBe(`ellipsis`),y(getComputedStyle(n).display).toBe(`block`);let r=e.querySelector(`svg`).getBoundingClientRect();y(Math.round(r.width)).toBe(Math.round(r.height))}},L={render:()=>(0,v.jsx)(`div`,{style:{width:`9rem`,border:`1px dashed gray`},children:(0,v.jsx)(g,{title:`Travel insurance limited lines producer`,children:`Travel insurance limited lines producer`})}),play:({canvasElement:e})=>{let t=x(e).getByTitle(`Travel insurance limited lines producer`);y(getComputedStyle(t).whiteSpace).toBe(`nowrap`);let n=t.getBoundingClientRect();y(Math.round(n.height)).toBe(24),y(n.width).toBeGreaterThan(144)}},R={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`4rem`,flexWrap:`wrap`},children:[(0,v.jsx)(T,{children:S.map(e=>(0,v.jsxs)(T,{gap:`0.5rem`,children:[(0,v.jsxs)(`strong`,{children:[e,`:`]}),(0,v.jsx)(w,{children:C.map(t=>(0,v.jsx)(g,{color:e,variant:t,children:t},t))})]},e))}),(0,v.jsx)(T,{children:S.map(e=>(0,v.jsxs)(T,{gap:`0.5rem`,children:[(0,v.jsxs)(`strong`,{children:[e,` with pill:`]}),(0,v.jsx)(w,{children:C.map(t=>(0,v.jsx)(g,{color:e,variant:t,pill:!0,children:t},t))})]},e))}),(0,v.jsx)(T,{children:S.map(e=>(0,v.jsxs)(T,{gap:`0.5rem`,children:[(0,v.jsxs)(`strong`,{children:[e,` as button:`]}),(0,v.jsx)(w,{children:C.map(t=>(0,v.jsx)(g,{color:e,variant:t,asChild:!0,children:(0,v.jsx)(`button`,{type:`button`,children:t})},t))})]},e))}),(0,v.jsx)(T,{children:S.map(e=>(0,v.jsxs)(T,{gap:`0.5rem`,children:[(0,v.jsxs)(`strong`,{children:[e,` with icon:`]}),(0,v.jsx)(w,{children:C.map(t=>(0,v.jsxs)(g,{color:e,variant:t,children:[(0,v.jsx)(i,{}),t]},t))})]},e))}),(0,v.jsx)(T,{children:S.map(e=>(0,v.jsxs)(T,{gap:`0.5rem`,children:[(0,v.jsxs)(`strong`,{children:[e,` with icons:`]}),(0,v.jsx)(w,{children:C.map(t=>(0,v.jsxs)(g,{color:e,variant:t,children:[(0,v.jsx)(i,{}),t,(0,v.jsx)(i,{})]},t))})]},e))}),(0,v.jsx)(T,{children:S.map(e=>(0,v.jsxs)(T,{gap:`0.5rem`,children:[(0,v.jsxs)(`strong`,{children:[e,` icon only:`]}),(0,v.jsx)(w,{children:C.map(t=>(0,v.jsx)(g,{color:e,variant:t,role:`img`,"aria-label":`${e} ${t}`,children:(0,v.jsx)(i,{})},t))})]},e))})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `color`, `variant`, `size`, `pill`, and\n`truncate` from the Controls panel to explore every visual combination.\n\n@summary Default args playground for Tag",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"The three sizes — `xs` (20px), `sm` (24px, default), and `md` (32px) — each\nshown icon-only, icon + text, and text-only so the type and icon scale are\nvisible.\n\n@summary All three sizes across icon-only, icon + text, and text-only",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"The `Style` axis: the default rounded corners (top row) versus `pill` fully\nrounded (bottom row), shown across every fill variant.\n\n@summary Rounded (default) vs pill",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Static badge vs interactive Tag. A plain `<span>` badge has no hover; pass\n`asChild` with a `<button>` (or `<a>`) to make it interactive — that adds the\npointer cursor and reveals the hover fill on `:hover`. Hover the middle and\nright Tags to see it.\n\n@summary Static badge vs interactive (asChild) hover",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"`secondary` fills with a tinted background plus a matching border, shown\nacross every color.\n\n@summary `secondary` variant across all colors",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {COLORS.map(color => <Tag key={color} variant="tertiary" color={color}>
                    {color}
                </Tag>)}
        </Row>
}`,...M.parameters?.docs?.source},description:{story:"`tertiary` (default) fills with a tinted background and no border, shown\nacross every color.\n\n@summary `tertiary` variant across all colors",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {COLORS.map(color => <Tag key={color} variant="ghost" color={color}>
                    {color}
                </Tag>)}
        </Row>
}`,...N.parameters?.docs?.source},description:{story:"`ghost` shows colored text alone with no background or border, across every\ncolor.\n\n@summary `ghost` variant across all colors",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:"`invisible` stays fully transparent until hovered, then reveals its fill.\nThe top row renders plain `<span>` Tags; the bottom row renders interactive\nTags via `asChild` with a `<button>` child.\n\n@summary `invisible` variant as span and as interactive button",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {COLORS.map(color => <Row key={color}>
                    {VARIANTS.map(variant => <Tag key={variant} color={color} variant={variant}>
                            <PlusIcon />
                            tag
                            <PlusIcon />
                        </Tag>)}
                </Row>)}
        </Stack>
}`,...F.parameters?.docs?.source},description:{story:`Every variant for every color rendered with a leading and trailing icon.
Icons are tinted with each color's \`icon-tag-*\` token.

@summary Variant × color grid with icons`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`\`truncate\` caps the Tag at its container's width and ellipsizes the label.
The ellipsis sits on a wrapper around each text run, so a Tag that mixes an
icon with a long label clips the label and leaves the icon at full size.

@summary Long labels capped at the container width with an ellipsis`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`Without \`truncate\`, a Tag never wraps its label onto multiple lines — a
container narrower than the label just gets overflowed by a single-line
Tag that keeps its intrinsic width, instead of breaking the label across
lines and spilling out of the fixed-height box.

@summary A too-narrow container overflows a single-line Tag; the label never wraps`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"Full matrix: every variant for every color, repeated as default, as `pill`,\nas an interactive `asChild` `<button>`, with a single leading icon, with\nleading + trailing icons, and icon-only.\n\n@summary Variant × color matrix — default, pill, button, and icon layouts",...R.parameters?.docs?.description}}},z=[`Default`,`Sizes`,`Styles`,`Interactive`,`Secondary`,`Tertiary`,`Ghost`,`Invisible`,`WithIcon`,`Truncate`,`OverflowsWithoutWrapping`,`Colors`]})))()}B();export{R as Colors,D as Default,N as Ghost,A as Interactive,P as Invisible,L as OverflowsWithoutWrapping,j as Secondary,O as Sizes,k as Styles,M as Tertiary,I as Truncate,F as WithIcon,z as __namedExportsOrder,E as default};