import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./button-WXZ2nqeE.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{n(),i=t(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s=`Button`,c=[`primary`,`secondary`,`tertiary`,`ghost`,`link`],l=[`xs`,`sm`,`md`,`lg`],u=[`primary`,`secondary`,`tertiary`,`ghost`],d=()=>(0,i.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,i.jsx)(`path`,{d:`M11.25 12.75H6.25C6.0375 12.75 5.85938 12.6781 5.71563 12.5343C5.57187 12.3905 5.5 12.2123 5.5 11.9997C5.5 11.7871 5.57187 11.609 5.71563 11.4654C5.85938 11.3218 6.0375 11.25 6.25 11.25H11.25V6.25003C11.25 6.03753 11.3219 5.85941 11.4657 5.71566C11.6095 5.57191 11.7877 5.50003 12.0003 5.50003C12.2129 5.50003 12.391 5.57191 12.5346 5.71566C12.6782 5.85941 12.7499 6.03753 12.7499 6.25003V11.25H17.75C17.9625 11.25 18.1406 11.3219 18.2843 11.4657C18.4281 11.6095 18.5 11.7877 18.5 12.0003C18.5 12.2129 18.4281 12.391 18.2843 12.5346C18.1406 12.6782 17.9625 12.75 17.75 12.75H12.7499V17.75C12.7499 17.9625 12.6781 18.1406 12.5342 18.2844C12.3904 18.4281 12.2122 18.5 11.9997 18.5C11.787 18.5 11.609 18.4281 11.4654 18.2844C11.3218 18.1406 11.25 17.9625 11.25 17.75V12.75Z`})}),f=()=>(0,i.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,i.jsx)(`path`,{d:`M12 13.0538L6.92689 18.1269C6.78844 18.2654 6.6144 18.3362 6.40479 18.3394C6.19519 18.3426 6.01795 18.2718 5.87309 18.1269C5.7282 17.982 5.65576 17.8064 5.65576 17.6C5.65576 17.3936 5.7282 17.218 5.87309 17.0731L10.9462 12L5.87309 6.92689C5.73462 6.78844 5.66379 6.6144 5.66059 6.40479C5.65737 6.19519 5.7282 6.01795 5.87309 5.87309C6.01795 5.7282 6.19359 5.65576 6.39999 5.65576C6.60639 5.65576 6.78202 5.7282 6.92689 5.87309L12 10.9462L17.0731 5.87309C17.2115 5.73462 17.3856 5.66379 17.5952 5.66059C17.8048 5.65737 17.982 5.7282 18.1269 5.87309C18.2718 6.01795 18.3442 6.19359 18.3442 6.39999C18.3442 6.60639 18.2718 6.78202 18.1269 6.92689L13.0538 12L18.1269 17.0731C18.2654 17.2115 18.3362 17.3856 18.3394 17.5952C18.3426 17.8048 18.2718 17.982 18.1269 18.1269C17.982 18.2718 17.8064 18.3442 17.6 18.3442C17.3936 18.3442 17.218 18.2718 17.0731 18.1269L12 13.0538Z`})}),p={title:`Components/Button`,component:r,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Button is the design system's primary actionable control. Pick `variant` to\nexpress hierarchy, `size` for prominence, and `status=\"danger\"` for\ndestructive actions. Pass `asChild` to render Button's styles on any nested\nelement — a plain `<a>`, a framework `<Link>`, or a custom component —\nwithout Button binding to any particular framework."}}},argTypes:{children:{control:`text`,table:{type:{summary:`React.ReactNode`}}},variant:{control:`radio`,options:c},size:{control:`radio`,options:l},status:{control:`radio`,options:[void 0,`danger`]},loading:{control:`boolean`},disabled:{control:`boolean`},rounded:{control:`boolean`}},args:{children:s,variant:`primary`,size:`sm`}},m={},h={render:()=>(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:c.map(e=>(0,i.jsx)(r,{variant:e,children:s},e))})},g={render:()=>(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:l.map(e=>(0,i.jsx)(r,{size:e,children:s},e))})},_={render:()=>(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:c.map(e=>(0,i.jsx)(r,{asChild:!0,variant:e,disabled:!0,children:(0,i.jsx)(`a`,{children:s})},e))})},v={render:()=>(0,i.jsx)(`div`,{className:`flex flex-col gap-4`,children:c.map(e=>(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:l.map(t=>(0,i.jsxs)(r,{variant:e,size:t,children:[(0,i.jsx)(d,{}),s,(0,i.jsx)(d,{})]},t))},e))})},y={render:()=>(0,i.jsx)(`div`,{className:`flex flex-col gap-4`,children:u.map(e=>(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:l.map(t=>(0,i.jsx)(r,{variant:e,size:t,"aria-label":`Close`,children:(0,i.jsx)(f,{})},t))},e))})},b={render:()=>(0,i.jsx)(`div`,{className:`flex flex-col gap-4`,children:u.map(e=>(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:l.map(t=>(0,i.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,i.jsx)(r,{variant:e,size:t,loading:!0,"aria-label":`Loading`,children:(0,i.jsx)(d,{})}),(0,i.jsx)(r,{variant:e,size:t,loading:!0,children:s})]},t))},e))})},x={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:c.map(e=>(0,i.jsxs)(r,{variant:e,status:`danger`,children:[(0,i.jsx)(d,{}),s,(0,i.jsx)(d,{})]},e))}),(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:c.map(e=>(0,i.jsx)(r,{asChild:!0,variant:e,status:`danger`,disabled:!0,children:(0,i.jsxs)(`a`,{children:[(0,i.jsx)(d,{}),s,(0,i.jsx)(d,{})]})},e))})]})},S={render:()=>(0,i.jsx)(`div`,{className:`flex flex-col gap-4`,children:u.map(e=>(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:l.map(t=>(0,i.jsxs)(r,{variant:e,size:t,rounded:!0,children:[(0,i.jsx)(d,{}),s,(0,i.jsx)(d,{})]},t))},e))})},C={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(r,{asChild:!0,variant:`primary`,children:(0,i.jsx)(`a`,{href:`/dashboard`,children:`Go to dashboard`})}),(0,i.jsx)(r,{asChild:!0,variant:`secondary`,children:(0,i.jsx)(`a`,{href:`https://agentero.com`,target:`_blank`,rel:`noreferrer`,children:`Visit Agentero`})})]})},w={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,i.jsx)(`div`,{className:`flex items-center gap-4`,children:u.map(e=>(0,i.jsxs)(r,{variant:e,children:[`Press `,e]},e))}),(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(r,{variant:`link`,children:`Link stays still`}),(0,i.jsx)(r,{variant:`primary`,disabled:!0,children:`Disabled stays still`}),(0,i.jsx)(r,{asChild:!0,variant:`secondary`,disabled:!0,children:(0,i.jsx)(`a`,{href:`/dashboard`,children:`Disabled anchor stays still`})})]})]}),play:async({canvasElement:e})=>{let t=o(e).getByRole(`button`,{name:`Press primary`});await a(getComputedStyle(t).transitionProperty).toContain(`transform`)}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `variant`, `size`, `status`, `loading`,\n`disabled`, and `rounded` from the Controls panel to explore every visual\ncombination of the Button.\n\n@summary Default args playground for Button",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            {VARIANTS.map(variant => <Button key={variant} variant={variant}>
                    {TEXT}
                </Button>)}
        </div>
}`,...h.parameters?.docs?.source},description:{story:"All five variants at the default `sm` size. Variants express visual\nhierarchy: `primary` for the main CTA, `secondary` / `tertiary` for\nsupporting actions, `ghost` for low-emphasis inline actions, and `link`\nfor text-only actions.\n\n@summary All Button variants at default size",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            {SIZES.map(size => <Button key={size} size={size}>
                    {TEXT}
                </Button>)}
        </div>
}`,...g.parameters?.docs?.source},description:{story:"All four sizes at the default `primary` variant. Sizes scale from `xs`\n(24px) for dense toolbars up to `lg` (48px) for hero CTAs.\n\n@summary All Button sizes at default variant",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            {VARIANTS.map(variant => <Button asChild key={variant} variant={variant} disabled>
                    <a>{TEXT}</a>
                </Button>)}
        </div>
}`,..._.parameters?.docs?.source},description:{story:"Disabled state across all variants. Rendered via `asChild` with `<a>`\nchildren to show the disabled treatment applied via className — native\nanchors ignore the `disabled` attribute, so Button emits `aria-disabled`\nand `data-disabled` on the child instead.\n\n@summary Disabled treatment for every variant",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {VARIANTS.map(variant => <div key={variant} className="flex items-center gap-4">
                    {SIZES.map(size => <Button key={size} variant={variant} size={size}>
                            <IconAdd />
                            {TEXT}
                            <IconAdd />
                        </Button>)}
                </div>)}
        </div>
}`,...v.parameters?.docs?.source},description:{story:`Variant × size grid with leading and trailing icons.

@summary Variant × size grid with leading + trailing icons`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {NON_LINK_VARIANTS.map(variant => <div key={variant} className="flex items-center gap-4">
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} aria-label="Close">
                            <IconClose />
                        </Button>)}
                </div>)}
        </div>
}`,...y.parameters?.docs?.source},description:{story:'Icon-only buttons across the variant × size grid. Excludes `variant="link"`\n— combining `link` with icon-only children logs a dev-only warning because\nthe link treatment has no padding to accommodate an icon alone.\n\n@summary Icon-only Button across variant × size (excluding `link`)',...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {NON_LINK_VARIANTS.map(variant => <div key={variant} className="flex items-center gap-4">
                    {SIZES.map(size => <div key={size} className="flex items-center gap-2">
                            <Button variant={variant} size={size} loading aria-label="Loading">
                                <IconAdd />
                            </Button>
                            <Button variant={variant} size={size} loading>
                                {TEXT}
                            </Button>
                        </div>)}
                </div>)}
        </div>
}`,...b.parameters?.docs?.source},description:{story:'Loading state across the variant × size grid. Each row shows two buttons\nper size: one icon-only, one with text. Loading forces `disabled` and\noverlays a spinner that inherits the variant\'s text color. Excludes\n`variant="link"` — combining `link` with `loading` logs a dev-only warning.\n\n@summary Loading state across variant × size (excluding `link`)',...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                {VARIANTS.map(variant => <Button key={variant} variant={variant} status="danger">
                        <IconAdd />
                        {TEXT}
                        <IconAdd />
                    </Button>)}
            </div>
            <div className="flex items-center gap-4">
                {VARIANTS.map(variant => <Button asChild key={variant} variant={variant} status="danger" disabled>
                        <a>
                            <IconAdd />
                            {TEXT}
                            <IconAdd />
                        </a>
                    </Button>)}
            </div>
        </div>
}`,...x.parameters?.docs?.source},description:{story:'Destructive treatment via `status="danger"`. The top row shows every\nvariant enabled; the bottom row shows every variant disabled. Use\n`status="danger"` for delete, remove, or disconnect actions regardless of\nvariant.\n\n@summary `status="danger"` across every variant, enabled + disabled',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {NON_LINK_VARIANTS.map(variant => <div key={variant} className="flex items-center gap-4">
                    {SIZES.map(size => <Button key={size} variant={variant} size={size} rounded>
                            <IconAdd />
                            {TEXT}
                            <IconAdd />
                        </Button>)}
                </div>)}
        </div>
}`,...S.parameters?.docs?.source},description:{story:'Fully pill-shaped buttons across the variant × size grid. Excludes\n`variant="link"` since the link treatment has no background to round.\n\n@summary `rounded` pill shape across variant × size (excluding `link`)',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            <Button asChild variant="primary">
                <a href="/dashboard">Go to dashboard</a>
            </Button>
            <Button asChild variant="secondary">
                <a href="https://agentero.com" target="_blank" rel="noreferrer">
                    Visit Agentero
                </a>
            </Button>
        </div>
}`,...C.parameters?.docs?.source},description:{story:"`asChild` renders Button's styles on the nested child element rather than\non a `<button>` — the child receives Button's `className`, `ref`, and\nmerged props via Radix's `Slot` primitive. Use it to turn any anchor or\nframework `Link` into a Button without coupling the design system to a\nrouter. In app code, swap the plain `<a>` below for your framework's Link\n(`next/link`, `react-router`, `@tanstack/react-router`, etc.).\n\n@summary `asChild` composes Button's styles onto any element",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                {NON_LINK_VARIANTS.map(variant => <Button key={variant} variant={variant}>
                        Press {variant}
                    </Button>)}
            </div>
            <div className="flex items-center gap-4">
                <Button variant="link">Link stays still</Button>
                <Button variant="primary" disabled>
                    Disabled stays still
                </Button>
                <Button asChild variant="secondary" disabled>
                    <a href="/dashboard">Disabled anchor stays still</a>
                </Button>
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Press primary'
    });

    // \`:active\` only responds to real input, so a play function cannot hold the
    // button down — untrusted events never trigger the pseudo-class. What is
    // worth guarding is that the dip animates instead of snapping: Tailwind's
    // \`scale-*\` utilities set the standalone \`scale\` property, so writing the
    // press as \`scale-97\` would leave it outside this allowlist and un-eased.
    await expect(getComputedStyle(button).transitionProperty).toContain('transform');
  }
}`,...w.parameters?.docs?.source},description:{story:`Buttons dip to 97% while held so the control answers the pointer rather than
only changing color. Press and hold one below to feel it — the effect is
deliberately small, and if a quick click draws the eye it is too strong.

\`variant="link"\` is excluded: it has no padding or background, so scaling
bare text reads as a wobble rather than a button being pushed. Disabled
buttons are excluded too, including the \`asChild\` anchor form, which stays
keyboard-focusable and would otherwise dip on Enter. The whole effect is
gated behind \`motion-safe\`, so it disappears under \`prefers-reduced-motion\`.

@summary Press feedback dips the button, excluding \`link\` and disabled`,...w.parameters?.docs?.description}}},T=[`Default`,`Variants`,`Sizes`,`Disabled`,`WithIcons`,`OnlyIcon`,`Loading`,`Status`,`Rounded`,`AsChild`,`Pressed`]}))();export{C as AsChild,m as Default,_ as Disabled,b as Loading,y as OnlyIcon,w as Pressed,S as Rounded,g as Sizes,x as Status,h as Variants,v as WithIcons,T as __namedExportsOrder,p as default};