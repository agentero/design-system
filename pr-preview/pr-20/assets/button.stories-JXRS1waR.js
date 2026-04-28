import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,p as r,t as i}from"./lucide-react-CAEWd1Q3.js";import{n as a,t as o}from"./button-CN9H8G25.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{i(),a(),s=t(),c=`Button`,l=[`primary`,`secondary`,`tertiary`,`ghost`,`link`],u=[`xs`,`sm`,`md`,`lg`],d=[`primary`,`secondary`,`tertiary`,`ghost`],f=({children:e})=>(0,s.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:e}),p=({children:e})=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:e}),m={title:`Components/Button`,component:o,tags:[`autodocs`],argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},variant:{control:`radio`,options:l},size:{control:`radio`,options:u},status:{control:`radio`,options:[void 0,`danger`]},loading:{control:`boolean`},disabled:{control:`boolean`},rounded:{control:`boolean`}},args:{children:c,variant:`primary`,size:`sm`},parameters:{docs:{description:{component:"Button is the design system's primary actionable control. Pick `variant` to\nexpress hierarchy, `size` for prominence, and `status=\"danger\"` for\ndestructive actions. Pass `asChild` to render Button's styles on any nested\nelement — a plain `<a>`, a framework `<Link>`, or a custom component —\nwithout Button binding to any particular framework."}}}},h={},g={render:()=>(0,s.jsx)(f,{children:l.map(e=>(0,s.jsx)(o,{variant:e,children:c},e))})},_={render:()=>(0,s.jsx)(f,{children:u.map(e=>(0,s.jsx)(o,{size:e,children:c},e))})},v={render:()=>(0,s.jsx)(f,{children:l.map(e=>(0,s.jsx)(o,{asChild:!0,variant:e,disabled:!0,children:(0,s.jsx)(`a`,{children:c})},e))})},y={render:()=>(0,s.jsx)(p,{children:l.map(e=>(0,s.jsx)(f,{children:u.map(t=>(0,s.jsxs)(o,{variant:e,size:t,children:[(0,s.jsx)(r,{}),c,(0,s.jsx)(r,{})]},t))},e))})},b={render:()=>(0,s.jsx)(p,{children:d.map(e=>(0,s.jsx)(f,{children:u.map(t=>(0,s.jsx)(o,{variant:e,size:t,"aria-label":`Close`,children:(0,s.jsx)(n,{})},t))},e))})},x={render:()=>(0,s.jsx)(p,{children:d.map(e=>(0,s.jsx)(f,{children:u.map(t=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:[(0,s.jsx)(o,{variant:e,size:t,loading:!0,"aria-label":`Loading`,children:(0,s.jsx)(r,{})}),(0,s.jsx)(o,{variant:e,size:t,loading:!0,children:c})]},t))},e))})},S={render:()=>(0,s.jsxs)(p,{children:[(0,s.jsx)(f,{children:l.map(e=>(0,s.jsxs)(o,{variant:e,status:`danger`,children:[(0,s.jsx)(r,{}),c,(0,s.jsx)(r,{})]},e))}),(0,s.jsx)(f,{children:l.map(e=>(0,s.jsx)(o,{asChild:!0,variant:e,status:`danger`,disabled:!0,children:(0,s.jsxs)(`a`,{children:[(0,s.jsx)(r,{}),c,(0,s.jsx)(r,{})]})},e))})]})},C={render:()=>(0,s.jsx)(p,{children:d.map(e=>(0,s.jsx)(f,{children:u.map(t=>(0,s.jsxs)(o,{variant:e,size:t,rounded:!0,children:[(0,s.jsx)(r,{}),c,(0,s.jsx)(r,{})]},t))},e))})},w={render:()=>(0,s.jsxs)(f,{children:[(0,s.jsx)(o,{asChild:!0,variant:`primary`,children:(0,s.jsx)(`a`,{href:`/dashboard`,children:`Go to dashboard`})}),(0,s.jsx)(o,{asChild:!0,variant:`secondary`,children:(0,s.jsx)(`a`,{href:`https://agentero.com`,target:`_blank`,rel:`noreferrer`,children:`Visit Agentero`})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `variant`, `size`, `status`, `loading`,\n`disabled`, and `rounded` from the Controls panel to explore every visual\ncombination of the Button.\n\n@summary Default args playground for Button",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {VARIANTS.map(variant => <Button key={variant} variant={variant}>
                    {TEXT}
                </Button>)}
        </Row>
}`,...g.parameters?.docs?.source},description:{story:"All five variants at the default `sm` size. Variants express visual\nhierarchy: `primary` for the main CTA, `secondary` / `tertiary` for\nsupporting actions, `ghost` for low-emphasis inline actions, and `link`\nfor text-only actions.\n\n@summary All Button variants at default size",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {SIZES.map(size => <Button key={size} size={size}>
                    {TEXT}
                </Button>)}
        </Row>
}`,..._.parameters?.docs?.source},description:{story:"All four sizes at the default `primary` variant. Sizes scale from `xs`\n(24px) for dense toolbars up to `lg` (48px) for hero CTAs.\n\n@summary All Button sizes at default variant",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            {VARIANTS.map(variant => <Button asChild key={variant} variant={variant} disabled>
                    <a>{TEXT}</a>
                </Button>)}
        </Row>
}`,...v.parameters?.docs?.source},description:{story:"Disabled state across all variants. Rendered via `asChild` with `<a>`\nchildren to show the disabled treatment applied via className — native\nanchors ignore the `disabled` attribute, so Button emits `aria-disabled`\nand `data-disabled` on the child instead.\n\n@summary Disabled treatment for every variant",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size}>
                            <PlusIcon />
                            {TEXT}
                            <PlusIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...y.parameters?.docs?.source},description:{story:`Variant × size grid with leading and trailing icons.

@summary Variant × size grid with leading + trailing icons`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} aria-label="Close">
                            <XIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...b.parameters?.docs?.source},description:{story:'Icon-only buttons across the variant × size grid. Excludes `variant="link"`\n— combining `link` with icon-only children logs a dev-only warning because\nthe link treatment has no padding to accommodate an icon alone.\n\n@summary Icon-only Button across variant × size (excluding `link`)',...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:'Loading state across the variant × size grid. Each row shows two buttons\nper size: one icon-only, one with text. Loading forces `disabled` and\noverlays a spinner that inherits the variant\'s text color. Excludes\n`variant="link"` — combining `link` with `loading` logs a dev-only warning.\n\n@summary Loading state across variant × size (excluding `link`)',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:'Destructive treatment via `status="danger"`. The top row shows every\nvariant enabled; the bottom row shows every variant disabled. Use\n`status="danger"` for delete, remove, or disconnect actions regardless of\nvariant.\n\n@summary `status="danger"` across every variant, enabled + disabled',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {NON_LINK_VARIANTS.map(variant => <Row key={variant}>
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} rounded>
                            <PlusIcon />
                            {TEXT}
                            <PlusIcon />
                        </Button>)}
                </Row>)}
        </Stack>
}`,...C.parameters?.docs?.source},description:{story:'Fully pill-shaped buttons across the variant × size grid. Excludes\n`variant="link"` since the link treatment has no background to round.\n\n@summary `rounded` pill shape across variant × size (excluding `link`)',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"`asChild` renders Button's styles on the nested child element rather than\non a `<button>` — the child receives Button's `className`, `ref`, and\nmerged props via Radix's `Slot` primitive. Use it to turn any anchor or\nframework `Link` into a Button without coupling the design system to a\nrouter. In app code, swap the plain `<a>` below for your framework's Link\n(`next/link`, `react-router`, `@tanstack/react-router`, etc.).\n\n@summary `asChild` composes Button's styles onto any element",...w.parameters?.docs?.description}}},T=[`Default`,`Variants`,`Sizes`,`Disabled`,`WithIcons`,`OnlyIcon`,`Loading`,`Status`,`Rounded`,`AsChild`]}))();export{w as AsChild,h as Default,v as Disabled,x as Loading,b as OnlyIcon,C as Rounded,_ as Sizes,S as Status,g as Variants,y as WithIcons,T as __namedExportsOrder,m as default};