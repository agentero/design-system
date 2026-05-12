import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-CJIDZa62.js";import{t as r}from"./react-dom-Brdb3oMc.js";import{t as i}from"./jsx-runtime-D16BNjX-.js";import{a,n as o,o as s,t as c}from"./lib-CS_4QekD.js";import{i as l,r as u}from"./dist-C_JxnOwW.js";import{t as d}from"./button-CumtIOL5.js";import{t as f}from"./button-Dj0xc6-3.js";var p,m,h,g=t((()=>{p=e(n(),1),r(),l(),m=i(),h=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=u(`Primitive.${t}`),r=p.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,m.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})}));function _(e){return S.includes(e)}var v,y,b,x,S,C,w,T=t((()=>{v=e(n(),1),g(),y=i(),b=`Separator`,x=`horizontal`,S=[`horizontal`,`vertical`],C=v.forwardRef((e,t)=>{let{decorative:n,orientation:r=x,...i}=e,a=_(r)?r:x,o=a===`vertical`?a:void 0,s=n?{role:`none`}:{"aria-orientation":o,role:`separator`};return(0,y.jsx)(h.div,{"data-orientation":a,...s,...i,ref:t})}),C.displayName=b,w=C})),E,D,O,k=t((()=>{T(),a(),c(),E=i(),D=s({slots:{root:[`shrink-0`],label:[`flex text-text-default-base-tertiary`]},variants:{orientation:{horizontal:{root:[`w-full`]},vertical:{root:[`h-auto`]}},hasLabel:{true:{root:[`flex items-center text-sm`,`before:flex-1 before:content-[""] before:border-border-default-base-primary`,`after:flex-1 after:content-[""] after:border-border-default-base-primary`]},false:{root:[`bg-border-default-base-primary`]}}},compoundVariants:[{orientation:`horizontal`,hasLabel:!1,class:{root:`h-px w-full`}},{orientation:`vertical`,hasLabel:!1,class:{root:`h-auto w-px`}},{orientation:`horizontal`,hasLabel:!0,class:{root:`before:mr-2 before:border-t after:ml-2 after:border-t`,label:`px-10`}},{orientation:`vertical`,hasLabel:!0,class:{root:`flex-col before:mb-2 before:border-l after:mt-2 after:border-l`,label:`py-2`}}],defaultVariants:{orientation:`horizontal`,hasLabel:!1}}),O=({className:e,orientation:t=`horizontal`,decorative:n=!0,label:r,ref:i,...a})=>{let s=r!=null,c=D({orientation:t,hasLabel:s});return(0,E.jsx)(w,{ref:i,"data-slot":`separator`,decorative:n,orientation:t,className:o(c.root(),e),...a,children:s&&(0,E.jsx)(`div`,{className:c.label(),children:r})})};try{D.displayName=`dividerRecipe`,D.__docgenInfo={description:"Style recipe for Divider using tailwind-variants.\nDefines slots (`root`, `label`) and variants (`orientation`, `hasLabel`).\nThe labelless case renders a single 1px line via `bg-border-default-base-primary`;\nthe labelled case flanks the label with two 1px pseudo-element lines via\n`border-border-default-base-primary`. Label text routes through\n`text-text-default-base-tertiary`.",displayName:`dividerRecipe`,props:{orientation:{defaultValue:{value:`horizontal`},description:``,name:`orientation`,required:!1,type:{name:`enum`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},hasLabel:{defaultValue:null,description:``,name:`hasLabel`,required:!1,type:{name:`boolean`}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{O.displayName=`Divider`,O.__docgenInfo={description:`Divider separates content visually (or semantically, via \`decorative={false}\`)
along either a horizontal or vertical axis. Use Divider between page or card
sections, between inline items in a toolbar or list, or to break up long
content regions. Pass a \`label\` to render the "or"-style divider with text
centered between two line segments — useful for auth flows and step breaks.

Built on Radix UI's Separator primitive for the unlabelled case; the
labelled case renders a \`<div>\` that still forwards the correct
\`role\`/\`aria-orientation\` when \`decorative={false}\`.

Do **not** use Divider as a bare horizontal rule to add vertical rhythm —
reach for margin utilities or a layout wrapper instead. Divider should carry
meaning (visual or semantic section break), not whitespace.`,displayName:`Divider`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}},label:{defaultValue:null,description:`Optional label rendered inline between two flanking 1px lines. When set,
Divider renders a styled \`<div>\` (rather than the underlying separator
primitive) so the label can sit centered between the two line segments.`,name:`label`,required:!1,type:{name:`ReactNode`}}}}}catch{}})),A,j,M,N,P,F,I,L,R,z,B,V,H;t((()=>{c(),f(),k(),A=i(),j={title:`Components/Divider`,component:O,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`]},decorative:{control:`boolean`},label:{control:`text`}},args:{orientation:`horizontal`,decorative:!0},parameters:{docs:{description:{component:`Divider separates content visually along either a horizontal or vertical
axis. Use between page or card sections, between inline items in a toolbar
or list, or — with the \`label\` prop — to render an "or"-style break between
options. Set \`decorative={false}\` when the separator carries semantic
meaning so it's announced to assistive technologies.`}}}},M={render:e=>(0,A.jsxs)(`div`,{className:o(`flex gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6`,e.orientation===`vertical`?`h-40 w-lg items-stretch`:`w-80 flex-col`),children:[(0,A.jsxs)(`div`,{className:`flex flex-1 flex-col justify-center gap-1`,children:[(0,A.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`First section`}),(0,A.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Content on one side of the divider, visually separated from the other.`})]}),(0,A.jsx)(O,{...e}),(0,A.jsxs)(`div`,{className:`flex flex-1 flex-col justify-center gap-1`,children:[(0,A.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Second section`}),(0,A.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Content on the other side of the divider, clearly separated from the first.`})]})]})},N={render:()=>(0,A.jsx)(`div`,{className:`w-80`,children:(0,A.jsx)(O,{})})},P={render:()=>(0,A.jsx)(`div`,{className:`flex h-24 items-stretch`,children:(0,A.jsx)(O,{orientation:`vertical`})})},F={args:{label:`or`},render:e=>(0,A.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,A.jsx)(d,{variant:`primary`,children:`Continue with email`}),(0,A.jsx)(O,{...e}),(0,A.jsx)(d,{variant:`secondary`,children:`Continue with SSO`})]})},I={args:{orientation:`vertical`,label:`OR`},render:e=>(0,A.jsxs)(`div`,{className:`flex h-40 items-stretch gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6`,children:[(0,A.jsxs)(`div`,{className:`flex flex-col justify-center gap-1`,children:[(0,A.jsx)(`h3`,{className:`text-sm font-semibold text-text-default-base-primary`,children:`Left panel`}),(0,A.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Content on the left side`})]}),(0,A.jsx)(O,{...e}),(0,A.jsxs)(`div`,{className:`flex flex-col justify-center gap-1`,children:[(0,A.jsx)(`h3`,{className:`text-sm font-semibold text-text-default-base-primary`,children:`Right panel`}),(0,A.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Content on the right side`})]})]})},L={args:{decorative:!1},render:e=>(0,A.jsxs)(`div`,{className:`flex w-80 flex-col gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6`,children:[(0,A.jsxs)(`section`,{className:`flex flex-col gap-1`,children:[(0,A.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Section one`}),(0,A.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Semantically separated from the next section for screen readers.`})]}),(0,A.jsx)(O,{...e}),(0,A.jsxs)(`section`,{className:`flex flex-col gap-1`,children:[(0,A.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Section two`}),(0,A.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Screen readers will announce this as a separate section.`})]})]})},R={render:()=>(0,A.jsxs)(`div`,{className:`w-80 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary`,children:[(0,A.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3`,children:[(0,A.jsx)(`h4`,{className:`text-sm text-text-default-base-primary`,children:`Notification 1`}),(0,A.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`You have a new message from Jane.`})]}),(0,A.jsx)(O,{}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3`,children:[(0,A.jsx)(`h4`,{className:`text-sm text-text-default-base-primary`,children:`Notification 2`}),(0,A.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Your report is ready to download.`})]}),(0,A.jsx)(O,{}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3`,children:[(0,A.jsx)(`h4`,{className:`text-sm text-text-default-base-primary`,children:`Notification 3`}),(0,A.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`System maintenance is scheduled for tonight.`})]})]})},z={render:()=>(0,A.jsxs)(`div`,{className:`inline-flex h-10 items-center gap-1 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary px-2 shadow-1`,children:[(0,A.jsx)(d,{variant:`ghost`,size:`xs`,children:`Cut`}),(0,A.jsx)(d,{variant:`ghost`,size:`xs`,children:`Copy`}),(0,A.jsx)(d,{variant:`ghost`,size:`xs`,children:`Paste`}),(0,A.jsx)(O,{orientation:`vertical`,className:`mx-1 h-6`}),(0,A.jsx)(d,{variant:`ghost`,size:`xs`,children:`Undo`}),(0,A.jsx)(d,{variant:`ghost`,size:`xs`,children:`Redo`}),(0,A.jsx)(O,{orientation:`vertical`,className:`mx-1 h-6`}),(0,A.jsx)(d,{variant:`ghost`,size:`xs`,children:`Settings`})]})},B={render:()=>(0,A.jsxs)(`div`,{className:`flex w-96 flex-col gap-4 p-6`,children:[(0,A.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,A.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Section title`}),(0,A.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Descriptive content for the first section. The divider below separates it from the next.`})]}),(0,A.jsx)(O,{}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,A.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Another section`}),(0,A.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`The second section is clearly separated from the previous one.`})]}),(0,A.jsx)(O,{}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,A.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Final section`}),(0,A.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Dividers help establish visual hierarchy in content-heavy layouts.`})]})]})},V={render:()=>(0,A.jsxs)(`div`,{className:`flex items-stretch gap-3`,children:[(0,A.jsx)(d,{variant:`primary`,size:`sm`,children:`Button 1`}),(0,A.jsx)(O,{orientation:`vertical`}),(0,A.jsx)(d,{variant:`primary`,size:`sm`,children:`Button 2`}),(0,A.jsx)(O,{orientation:`vertical`}),(0,A.jsx)(d,{variant:`primary`,size:`sm`,children:`Button 3`})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`The default horizontal, decorative divider — a 1px line that spans the
parent width. Use this form between stacked content blocks.

@summary Default horizontal decorative divider`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80">
            <Divider />
        </div>
}`,...N.parameters?.docs?.source},description:{story:`Horizontal divider — a 1px line spanning the parent's full width. The
default orientation; use to separate stacked content.

@summary Horizontal 1px line spanning the parent width`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-24 items-stretch">
            <Divider orientation="vertical" />
        </div>
}`,...P.parameters?.docs?.source},description:{story:`Vertical divider — a 1px line spanning the parent's full height. Parent must
establish a height (via \`h-*\` or an intrinsic flex item height) for the line
to be visible.

@summary Vertical 1px line spanning the parent height`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'or'
  },
  render: args => <div className="flex w-80 flex-col gap-2">
            <Button variant="primary">Continue with email</Button>
            <Divider {...args} />
            <Button variant="secondary">Continue with SSO</Button>
        </div>
}`,...F.parameters?.docs?.source},description:{story:`Labelled divider. The label sits centered between two flanking 1px lines —
a common pattern for "or" breaks between authentication options.

@summary Horizontal divider with a centered "or" label`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Vertical divider with a label. The label sits between two stacked 1px line
segments; use sparingly — horizontal labelled dividers are more common.

@summary Vertical divider with a centered label`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:'Semantic divider (`decorative={false}`). Exposes `role="separator"` and\n`aria-orientation` to assistive technologies, marking a meaningful section\nbreak rather than a purely visual one.\n\n@summary Semantic separator announced to assistive technologies',...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Divider between list rows. Dividers delineate each item without the visual
weight of a full border on every row.

@summary Horizontal dividers between stacked list rows`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Vertical dividers grouping related toolbar actions. Use to separate logical
clusters of buttons (editing vs. history vs. settings) without visual
weight.

@summary Vertical dividers grouping toolbar actions`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Horizontal dividers between content sections in a long-form layout. Helps
create visual hierarchy in content-heavy pages.

@summary Horizontal dividers between content sections`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Vertical dividers between inline elements. Common for separating a row of
related controls or inline links without visual weight.

@summary Vertical dividers separating inline elements`,...V.parameters?.docs?.description}}},H=[`Default`,`Horizontal`,`Vertical`,`WithLabel`,`VerticalWithLabel`,`Semantic`,`InList`,`InToolbar`,`HorizontalInContent`,`VerticalBetweenElements`]}))();export{M as Default,N as Horizontal,B as HorizontalInContent,R as InList,z as InToolbar,L as Semantic,P as Vertical,V as VerticalBetweenElements,I as VerticalWithLabel,F as WithLabel,H as __namedExportsOrder,j as default};