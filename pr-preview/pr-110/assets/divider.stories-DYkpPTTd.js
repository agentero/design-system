import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./lib-Dkaf_tmd.js";import{t as i}from"./button-DDSeCh77.js";import{t as a}from"./button-DISizB1u.js";import{n as o,t as s}from"./divider-Dr8I_zVC.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{r(),a(),o(),c=t(),l={title:`Components/Divider`,component:s,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`]},decorative:{control:`boolean`},label:{control:`text`}},args:{orientation:`horizontal`,decorative:!0},parameters:{docs:{description:{component:`Divider separates content visually along either a horizontal or vertical
axis. Use between page or card sections, between inline items in a toolbar
or list, or — with the \`label\` prop — to render an "or"-style break between
options. Set \`decorative={false}\` when the separator carries semantic
meaning so it's announced to assistive technologies.`}}}},u={render:e=>(0,c.jsxs)(`div`,{className:n(`flex gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6`,e.orientation===`vertical`?`h-40 w-lg items-stretch`:`w-80 flex-col`),children:[(0,c.jsxs)(`div`,{className:`flex flex-1 flex-col justify-center gap-1`,children:[(0,c.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`First section`}),(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Content on one side of the divider, visually separated from the other.`})]}),(0,c.jsx)(s,{...e}),(0,c.jsxs)(`div`,{className:`flex flex-1 flex-col justify-center gap-1`,children:[(0,c.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Second section`}),(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Content on the other side of the divider, clearly separated from the first.`})]})]})},d={render:()=>(0,c.jsx)(`div`,{className:`w-80`,children:(0,c.jsx)(s,{})})},f={render:()=>(0,c.jsx)(`div`,{className:`flex h-24 items-stretch`,children:(0,c.jsx)(s,{orientation:`vertical`})})},p={args:{label:`or`},render:e=>(0,c.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,c.jsx)(i,{variant:`primary`,children:`Continue with email`}),(0,c.jsx)(s,{...e}),(0,c.jsx)(i,{variant:`secondary`,children:`Continue with SSO`})]})},m={args:{orientation:`vertical`,label:`OR`},render:e=>(0,c.jsxs)(`div`,{className:`flex h-40 items-stretch gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6`,children:[(0,c.jsxs)(`div`,{className:`flex flex-col justify-center gap-1`,children:[(0,c.jsx)(`h3`,{className:`text-sm font-semibold text-text-default-base-primary`,children:`Left panel`}),(0,c.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Content on the left side`})]}),(0,c.jsx)(s,{...e}),(0,c.jsxs)(`div`,{className:`flex flex-col justify-center gap-1`,children:[(0,c.jsx)(`h3`,{className:`text-sm font-semibold text-text-default-base-primary`,children:`Right panel`}),(0,c.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Content on the right side`})]})]})},h={args:{decorative:!1},render:e=>(0,c.jsxs)(`div`,{className:`flex w-80 flex-col gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6`,children:[(0,c.jsxs)(`section`,{className:`flex flex-col gap-1`,children:[(0,c.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Section one`}),(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Semantically separated from the next section for screen readers.`})]}),(0,c.jsx)(s,{...e}),(0,c.jsxs)(`section`,{className:`flex flex-col gap-1`,children:[(0,c.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Section two`}),(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Screen readers will announce this as a separate section.`})]})]})},g={render:()=>(0,c.jsxs)(`div`,{className:`w-80 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary`,children:[(0,c.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3`,children:[(0,c.jsx)(`h4`,{className:`text-sm text-text-default-base-primary`,children:`Notification 1`}),(0,c.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`You have a new message from Jane.`})]}),(0,c.jsx)(s,{}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3`,children:[(0,c.jsx)(`h4`,{className:`text-sm text-text-default-base-primary`,children:`Notification 2`}),(0,c.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Your report is ready to download.`})]}),(0,c.jsx)(s,{}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3`,children:[(0,c.jsx)(`h4`,{className:`text-sm text-text-default-base-primary`,children:`Notification 3`}),(0,c.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`System maintenance is scheduled for tonight.`})]})]})},_={render:()=>(0,c.jsxs)(`div`,{className:`inline-flex h-10 items-center gap-1 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary px-2 shadow-1`,children:[(0,c.jsx)(i,{variant:`ghost`,size:`xs`,children:`Cut`}),(0,c.jsx)(i,{variant:`ghost`,size:`xs`,children:`Copy`}),(0,c.jsx)(i,{variant:`ghost`,size:`xs`,children:`Paste`}),(0,c.jsx)(s,{orientation:`vertical`,className:`mx-1 h-6`}),(0,c.jsx)(i,{variant:`ghost`,size:`xs`,children:`Undo`}),(0,c.jsx)(i,{variant:`ghost`,size:`xs`,children:`Redo`}),(0,c.jsx)(s,{orientation:`vertical`,className:`mx-1 h-6`}),(0,c.jsx)(i,{variant:`ghost`,size:`xs`,children:`Settings`})]})},v={render:()=>(0,c.jsxs)(`div`,{className:`flex w-96 flex-col gap-4 p-6`,children:[(0,c.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,c.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Section title`}),(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Descriptive content for the first section. The divider below separates it from the next.`})]}),(0,c.jsx)(s,{}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,c.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Another section`}),(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`The second section is clearly separated from the previous one.`})]}),(0,c.jsx)(s,{}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,c.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Final section`}),(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Dividers help establish visual hierarchy in content-heavy layouts.`})]})]})},y={render:()=>(0,c.jsxs)(`div`,{className:`flex items-stretch gap-3`,children:[(0,c.jsx)(i,{variant:`primary`,size:`sm`,children:`Button 1`}),(0,c.jsx)(s,{orientation:`vertical`}),(0,c.jsx)(i,{variant:`primary`,size:`sm`,children:`Button 2`}),(0,c.jsx)(s,{orientation:`vertical`}),(0,c.jsx)(i,{variant:`primary`,size:`sm`,children:`Button 3`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className={cn('flex gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6', args.orientation === 'vertical' ? 'h-40 w-lg items-stretch' : 'w-80 flex-col')}>
            <div className="flex flex-1 flex-col justify-center gap-1">
                <h3 className="text-base font-semibold text-text-default-base-primary">First section</h3>
                <p className="text-sm text-text-default-base-secondary">
                    Content on one side of the divider, visually separated from the other.
                </p>
            </div>
            <Divider {...args} />
            <div className="flex flex-1 flex-col justify-center gap-1">
                <h3 className="text-base font-semibold text-text-default-base-primary">Second section</h3>
                <p className="text-sm text-text-default-base-secondary">
                    Content on the other side of the divider, clearly separated from the first.
                </p>
            </div>
        </div>
}`,...u.parameters?.docs?.source},description:{story:`The default horizontal, decorative divider — a 1px line that spans the
parent width. Use this form between stacked content blocks.

@summary Default horizontal decorative divider`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80">
            <Divider />
        </div>
}`,...d.parameters?.docs?.source},description:{story:`Horizontal divider — a 1px line spanning the parent's full width. The
default orientation; use to separate stacked content.

@summary Horizontal 1px line spanning the parent width`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-24 items-stretch">
            <Divider orientation="vertical" />
        </div>
}`,...f.parameters?.docs?.source},description:{story:`Vertical divider — a 1px line spanning the parent's full height. Parent must
establish a height (via \`h-*\` or an intrinsic flex item height) for the line
to be visible.

@summary Vertical 1px line spanning the parent height`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'or'
  },
  render: args => <div className="flex w-80 flex-col gap-2">
            <Button variant="primary">Continue with email</Button>
            <Divider {...args} />
            <Button variant="secondary">Continue with SSO</Button>
        </div>
}`,...p.parameters?.docs?.source},description:{story:`Labelled divider. The label sits centered between two flanking 1px lines —
a common pattern for "or" breaks between authentication options.

@summary Horizontal divider with a centered "or" label`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    label: 'OR'
  },
  render: args => <div className="flex h-40 items-stretch gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6">
            <div className="flex flex-col justify-center gap-1">
                <h3 className="text-sm font-semibold text-text-default-base-primary">Left panel</h3>
                <p className="text-xs text-text-default-base-secondary">Content on the left side</p>
            </div>
            <Divider {...args} />
            <div className="flex flex-col justify-center gap-1">
                <h3 className="text-sm font-semibold text-text-default-base-primary">Right panel</h3>
                <p className="text-xs text-text-default-base-secondary">Content on the right side</p>
            </div>
        </div>
}`,...m.parameters?.docs?.source},description:{story:`Vertical divider with a label. The label sits between two stacked 1px line
segments; use sparingly — horizontal labelled dividers are more common.

@summary Vertical divider with a centered label`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    decorative: false
  },
  render: args => <div className="flex w-80 flex-col gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6">
            <section className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-text-default-base-primary">Section one</h3>
                <p className="text-sm text-text-default-base-secondary">
                    Semantically separated from the next section for screen readers.
                </p>
            </section>
            <Divider {...args} />
            <section className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-text-default-base-primary">Section two</h3>
                <p className="text-sm text-text-default-base-secondary">
                    Screen readers will announce this as a separate section.
                </p>
            </section>
        </div>
}`,...h.parameters?.docs?.source},description:{story:'Semantic divider (`decorative={false}`). Exposes `role="separator"` and\n`aria-orientation` to assistive technologies, marking a meaningful section\nbreak rather than a purely visual one.\n\n@summary Semantic separator announced to assistive technologies',...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary">
            <div className="flex flex-col gap-1 px-4 py-3">
                <h4 className="text-sm text-text-default-base-primary">Notification 1</h4>
                <p className="text-xs text-text-default-base-secondary">
                    You have a new message from Jane.
                </p>
            </div>
            <Divider />
            <div className="flex flex-col gap-1 px-4 py-3">
                <h4 className="text-sm text-text-default-base-primary">Notification 2</h4>
                <p className="text-xs text-text-default-base-secondary">
                    Your report is ready to download.
                </p>
            </div>
            <Divider />
            <div className="flex flex-col gap-1 px-4 py-3">
                <h4 className="text-sm text-text-default-base-primary">Notification 3</h4>
                <p className="text-xs text-text-default-base-secondary">
                    System maintenance is scheduled for tonight.
                </p>
            </div>
        </div>
}`,...g.parameters?.docs?.source},description:{story:`Divider between list rows. Dividers delineate each item without the visual
weight of a full border on every row.

@summary Horizontal dividers between stacked list rows`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="inline-flex h-10 items-center gap-1 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary px-2 shadow-1">
            <Button variant="ghost" size="xs">
                Cut
            </Button>
            <Button variant="ghost" size="xs">
                Copy
            </Button>
            <Button variant="ghost" size="xs">
                Paste
            </Button>
            <Divider orientation="vertical" className="mx-1 h-6" />
            <Button variant="ghost" size="xs">
                Undo
            </Button>
            <Button variant="ghost" size="xs">
                Redo
            </Button>
            <Divider orientation="vertical" className="mx-1 h-6" />
            <Button variant="ghost" size="xs">
                Settings
            </Button>
        </div>
}`,..._.parameters?.docs?.source},description:{story:`Vertical dividers grouping related toolbar actions. Use to separate logical
clusters of buttons (editing vs. history vs. settings) without visual
weight.

@summary Vertical dividers grouping toolbar actions`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4 p-6">
            <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-text-default-base-primary">Section title</h3>
                <p className="text-sm text-text-default-base-secondary">
                    Descriptive content for the first section. The divider below separates it from the next.
                </p>
            </div>
            <Divider />
            <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-text-default-base-primary">Another section</h3>
                <p className="text-sm text-text-default-base-secondary">
                    The second section is clearly separated from the previous one.
                </p>
            </div>
            <Divider />
            <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-text-default-base-primary">Final section</h3>
                <p className="text-sm text-text-default-base-secondary">
                    Dividers help establish visual hierarchy in content-heavy layouts.
                </p>
            </div>
        </div>
}`,...v.parameters?.docs?.source},description:{story:`Horizontal dividers between content sections in a long-form layout. Helps
create visual hierarchy in content-heavy pages.

@summary Horizontal dividers between content sections`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-stretch gap-3">
            <Button variant="primary" size="sm">
                Button 1
            </Button>
            <Divider orientation="vertical" />
            <Button variant="primary" size="sm">
                Button 2
            </Button>
            <Divider orientation="vertical" />
            <Button variant="primary" size="sm">
                Button 3
            </Button>
        </div>
}`,...y.parameters?.docs?.source},description:{story:`Vertical dividers between inline elements. Common for separating a row of
related controls or inline links without visual weight.

@summary Vertical dividers separating inline elements`,...y.parameters?.docs?.description}}},b=[`Default`,`Horizontal`,`Vertical`,`WithLabel`,`VerticalWithLabel`,`Semantic`,`InList`,`InToolbar`,`HorizontalInContent`,`VerticalBetweenElements`]}))();export{u as Default,d as Horizontal,v as HorizontalInContent,g as InList,_ as InToolbar,h as Semantic,f as Vertical,y as VerticalBetweenElements,m as VerticalWithLabel,p as WithLabel,b as __namedExportsOrder,l as default};