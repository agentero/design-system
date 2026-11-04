import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./loading-BddHiLKp.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),a={title:`Components/Loading`,component:r,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]}},args:{size:`sm`},parameters:{docs:{description:{component:"Loading displays a circular spinner that indicates an in-progress operation.\nUse for inline fetch, form submission, or asynchronous task indicators.\nThe spinner inherits its color from the parent `color` and scales with the\nparent font size via `em`-based size variants (`sm`, `md`, `lg`)."}}}},o={},s={args:{size:`sm`}},c={args:{size:`md`}},l={args:{size:`lg`}},u={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`2rem`},children:[`sm`,`md`,`lg`].map(e=>(0,i.jsx)(r,{size:e},e))})},d={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`2rem`},children:[(0,i.jsx)(`div`,{className:`text-text-default-base-primary`,children:(0,i.jsx)(r,{size:`md`})}),(0,i.jsx)(`div`,{className:`text-text-default-brand-primary`,children:(0,i.jsx)(r,{size:`md`})}),(0,i.jsx)(`div`,{className:`text-text-default-danger-primary`,children:(0,i.jsx)(r,{size:`md`})})]})},f={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-8 rounded-lg bg-bg-button-primary-enable p-8 text-text-default-base-inverse-primary`,children:[(0,i.jsx)(r,{size:`sm`}),(0,i.jsx)(r,{size:`md`}),(0,i.jsx)(r,{size:`lg`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source},description:{story:`The default spinner at \`size="sm"\` (1em diameter), inheriting the current
text color. Matches the out-of-the-box behavior when Loading is dropped
into any layout.

@summary Default spinner at the \`sm\` size`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...s.parameters?.docs?.source},description:{story:`Small spinner (1em diameter) — the default. Ideal for inline indicators,
buttons, and compact layouts where the spinner needs to sit next to text.

@summary Small 1em spinner for inline indicators`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...c.parameters?.docs?.source},description:{story:`Medium spinner (1.5em diameter). Use for cards, panels, and standalone
loading states where the spinner is the primary visual signal.

@summary Medium 1.5em spinner for cards and panels`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...l.parameters?.docs?.source},description:{story:`Large spinner (2em diameter). Use for page-level or section-level loading
where the spinner needs more visual weight.

@summary Large 2em spinner for page or section loading`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  }}>
            {(['sm', 'md', 'lg'] as const).map(size => <Loading key={size} size={size} />)}
        </div>
}`,...u.parameters?.docs?.source},description:{story:`All three sizes rendered side by side for visual comparison of the
\`em\`-based scaling. Each spinner inherits the same parent text color.

@summary Visual comparison of all three spinner sizes`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  }}>
            <div className="text-text-default-base-primary">
                <Loading size="md" />
            </div>
            <div className="text-text-default-brand-primary">
                <Loading size="md" />
            </div>
            <div className="text-text-default-danger-primary">
                <Loading size="md" />
            </div>
        </div>
}`,...d.parameters?.docs?.source},description:{story:"The spinner color tracks the parent `color` (text color) via `border-current`.\nWrap Loading in any element with a text color utility — or set `color` on\nLoading itself — and the spinner adopts that color without extra props.\n\n@summary Spinner color inherits from the parent text color",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8 rounded-lg bg-bg-button-primary-enable p-8 text-text-default-base-inverse-primary">
            <Loading size="sm" />
            <Loading size="md" />
            <Loading size="lg" />
        </div>
}`,...f.parameters?.docs?.source},description:{story:`Spinner on a dark surface to verify \`border-current\` contrast. The parent
sets a light text color, which the spinner inherits so it remains visible
against the dark background.

@summary Spinner on a dark-background surface`,...f.parameters?.docs?.description}}},p=[`Default`,`SizeSm`,`SizeMd`,`SizeLg`,`Sizes`,`InheritsColor`,`OnDarkSurface`]})))()}m();export{o as Default,d as InheritsColor,f as OnDarkSurface,l as SizeLg,c as SizeMd,s as SizeSm,u as Sizes,p as __namedExportsOrder,a as default};