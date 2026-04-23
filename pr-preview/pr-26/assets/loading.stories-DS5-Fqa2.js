import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{i as n,n as r,r as i,t as a}from"./lib-Gy4MyxBR.js";var o,s,c,l=e((()=>{i(),a(),o=t(),s=n({base:[`inline-grid`,`place-items-center`,`bg-inherit`,`opacity-0`,`animate-fade-in`,`before:content-[""]`,`before:block`,`before:border-[0.125em]`,`before:border-solid`,`before:rounded-full`,`before:border-inherit`,`before:border-t-transparent`,`before:animate-spin`],variants:{size:{sm:[`before:h-[1em]`,`before:w-[1em]`],md:[`before:h-[1.5em]`,`before:w-[1.5em]`],lg:[`before:h-[2em]`,`before:w-[2em]`]}},defaultVariants:{size:`sm`}}),c=({className:e,size:t,...n})=>(0,o.jsx)(`span`,{"data-slot":`loading`,role:`status`,"aria-label":`Loading`,className:r(s({size:t}),e),...n});try{s.displayName=`loadingRecipe`,s.__docgenInfo={description:"Style recipe for Loading using tailwind-variants.\nRenders a circular spinner via the `::before` pseudo-element that inherits\ncolor from the parent and fades in on mount. Size variants (`sm`, `md`, `lg`)\nscale the spinner diameter in `em` units so it tracks the parent font size.",displayName:`loadingRecipe`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{c.displayName=`Loading`,c.__docgenInfo={description:'Loading displays a circular spinner that indicates an in-progress operation.\nUse Loading to signal that content is being fetched, a form is submitting,\nor any asynchronous task is running inline with surrounding content.\n\nThe spinner inherits its color from the parent `color` (text color) via\n`border-current`, so it adapts to the surrounding context without extra\nprops. It fades in on mount and spins continuously until unmounted.\n\nAvailable sizes: `sm` (1em, default), `md` (1.5em), and `lg` (2em). Each\nsize is expressed in `em` units so the spinner scales with the parent\nfont size — wrap the Loading (or its ancestor) with the appropriate\n`text-[size]` utility to override the absolute diameter.\n\nExposes `role="status"` and `aria-label="Loading"` for screen readers, and\n`data-slot="loading"` for styling hooks.\n\nDo **not** use Loading as the busy indicator for a button — the Button\ncomponent has its own built-in loading overlay ([Button](?path=/docs/button--docs)).\nFor full-page or skeleton loading states prefer a dedicated skeleton\nplaceholder instead of a spinner.',displayName:`Loading`,props:{size:{defaultValue:null,description:"Controls the spinner diameter in `em` units relative to the parent font size.\nDefaults to `'sm'`.\n- `sm` (1em) — inline indicators, buttons, and compact layouts\n- `md` (1.5em) — cards, panels, and standalone loading states\n- `lg` (2em) — page-level or section-level loading",name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}}}}catch{}})),u,d,f,p,m,h,g,_,v,y;e((()=>{l(),u=t(),d={title:`Components/Loading`,component:c,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]}},args:{size:`sm`},parameters:{docs:{description:{component:"Loading displays a circular spinner that indicates an in-progress operation.\nUse for inline fetch, form submission, or asynchronous task indicators.\nThe spinner inherits its color from the parent `color` and scales with the\nparent font size via `em`-based size variants (`sm`, `md`, `lg`)."}}}},f={},p={args:{size:`sm`}},m={args:{size:`md`}},h={args:{size:`lg`}},g={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`2rem`},children:[`sm`,`md`,`lg`].map(e=>(0,u.jsx)(c,{size:e},e))})},_={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`2rem`},children:[(0,u.jsx)(`div`,{className:`text-text-default-base-primary`,children:(0,u.jsx)(c,{size:`md`})}),(0,u.jsx)(`div`,{className:`text-text-default-brand-primary`,children:(0,u.jsx)(c,{size:`md`})}),(0,u.jsx)(`div`,{className:`text-text-default-danger-primary`,children:(0,u.jsx)(c,{size:`md`})})]})},v={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-8 rounded-lg bg-bg-button-primary-enable p-8 text-text-default-base-inverse-primary`,children:[(0,u.jsx)(c,{size:`sm`}),(0,u.jsx)(c,{size:`md`}),(0,u.jsx)(c,{size:`lg`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source},description:{story:`The default spinner at \`size="sm"\` (1em diameter), inheriting the current
text color. Matches the out-of-the-box behavior when Loading is dropped
into any layout.

@summary Default spinner at the \`sm\` size`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...p.parameters?.docs?.source},description:{story:`Small spinner (1em diameter) — the default. Ideal for inline indicators,
buttons, and compact layouts where the spinner needs to sit next to text.

@summary Small 1em spinner for inline indicators`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...m.parameters?.docs?.source},description:{story:`Medium spinner (1.5em diameter). Use for cards, panels, and standalone
loading states where the spinner is the primary visual signal.

@summary Medium 1.5em spinner for cards and panels`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...h.parameters?.docs?.source},description:{story:`Large spinner (2em diameter). Use for page-level or section-level loading
where the spinner needs more visual weight.

@summary Large 2em spinner for page or section loading`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  }}>
            {(['sm', 'md', 'lg'] as const).map(size => <Loading key={size} size={size} />)}
        </div>
}`,...g.parameters?.docs?.source},description:{story:`All three sizes rendered side by side for visual comparison of the
\`em\`-based scaling. Each spinner inherits the same parent text color.

@summary Visual comparison of all three spinner sizes`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"The spinner color tracks the parent `color` (text color) via `border-current`.\nWrap Loading in any element with a text color utility — or set `color` on\nLoading itself — and the spinner adopts that color without extra props.\n\n@summary Spinner color inherits from the parent text color",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8 rounded-lg bg-bg-button-primary-enable p-8 text-text-default-base-inverse-primary">
            <Loading size="sm" />
            <Loading size="md" />
            <Loading size="lg" />
        </div>
}`,...v.parameters?.docs?.source},description:{story:`Spinner on a dark surface to verify \`border-current\` contrast. The parent
sets a light text color, which the spinner inherits so it remains visible
against the dark background.

@summary Spinner on a dark-background surface`,...v.parameters?.docs?.description}}},y=[`Default`,`SizeSm`,`SizeMd`,`SizeLg`,`Sizes`,`InheritsColor`,`OnDarkSurface`]}))();export{f as Default,_ as InheritsColor,v as OnDarkSurface,h as SizeLg,m as SizeMd,p as SizeSm,g as Sizes,y as __namedExportsOrder,d as default};