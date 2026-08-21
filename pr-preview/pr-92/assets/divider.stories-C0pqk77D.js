import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-BLGG2hex.js";import{t as r}from"./react-dom-Dr-tbWrE.js";import{t as i}from"./jsx-runtime-CaZkqeYb.js";import{n as a,t as o}from"./dist-xs6gOf1u.js";import{n as s,t as c}from"./lib-Dkaf_tmd.js";import{t as l}from"./button-joIdVEyn.js";import{t as u}from"./button-BviSZ9yQ.js";function d(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function f(...e){return t=>{let n=!1,r=e.map(e=>{let r=d(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():d(e[t],null)}}}}var p=e((()=>{n()}));function ee(e){return typeof e==`object`&&!!e&&`then`in e}function m(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===x&&`_payload`in e&&ee(e._payload)}function te(e){let t=h(e),n=y.forwardRef((e,n)=>{let{children:r,...i}=e;m(r)&&typeof S==`function`&&(r=S(r._payload));let a=y.Children.toArray(r),o=a.find(g);if(o){let e=o.props.children,r=a.map(t=>t===o?y.Children.count(e)>1?y.Children.only(null):y.isValidElement(e)?e.props.children:null:t);return(0,b.jsx)(t,{...i,ref:n,children:y.isValidElement(e)?y.cloneElement(e,void 0,r):null})}return(0,b.jsx)(t,{...i,ref:n,children:r})});return n.displayName=`${e}.Slot`,n}function h(e){let t=y.forwardRef((e,t)=>{let{children:n,...r}=e;if(m(n)&&typeof S==`function`&&(n=S(n._payload)),y.isValidElement(n)){let e=v(n),i=_(r,n.props);return n.type!==y.Fragment&&(i.ref=t?f(t,e):e),y.cloneElement(n,i)}return y.Children.count(n)>1?y.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}function g(e){return y.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===C}function _(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function v(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var y,b,x,S,C,ne=e((()=>{y=t(n(),1),p(),b=i(),x=Symbol.for(`react.lazy`),S=y.use,C=Symbol(`radix.slottable`)})),w,T,E,D=e((()=>{w=t(n(),1),r(),ne(),T=i(),E=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=te(`Primitive.${t}`),r=w.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,T.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})}));function O(e){return N.includes(e)}var k,A,j,M,N,P,F,I=e((()=>{k=t(n(),1),D(),A=i(),j=`Separator`,M=`horizontal`,N=[`horizontal`,`vertical`],P=k.forwardRef((e,t)=>{let{decorative:n,orientation:r=M,...i}=e,a=O(r)?r:M,o=n?{role:`none`}:{"aria-orientation":a===`vertical`?a:void 0,role:`separator`};return(0,A.jsx)(E.div,{"data-orientation":a,...o,...i,ref:t})}),P.displayName=j,F=P})),L,R,z,B=e((()=>{I(),o(),c(),L=i(),R=a({slots:{root:[`shrink-0`],label:[`flex text-text-default-base-tertiary`]},variants:{orientation:{horizontal:{root:[`w-full`]},vertical:{root:[`h-auto`]}},hasLabel:{true:{root:[`flex items-center text-sm`,`before:flex-1 before:content-[""] before:border-border-default-base-primary`,`after:flex-1 after:content-[""] after:border-border-default-base-primary`]},false:{root:[`bg-border-default-base-primary`]}}},compoundVariants:[{orientation:`horizontal`,hasLabel:!1,class:{root:`h-px w-full`}},{orientation:`vertical`,hasLabel:!1,class:{root:`h-auto w-px`}},{orientation:`horizontal`,hasLabel:!0,class:{root:`before:mr-2 before:border-t after:ml-2 after:border-t`,label:`px-10`}},{orientation:`vertical`,hasLabel:!0,class:{root:`flex-col before:mb-2 before:border-l after:mt-2 after:border-l`,label:`py-2`}}],defaultVariants:{orientation:`horizontal`,hasLabel:!1}}),z=({className:e,orientation:t=`horizontal`,decorative:n=!0,label:r,ref:i,...a})=>{let o=r!=null,c=R({orientation:t,hasLabel:o});return(0,L.jsx)(F,{ref:i,"data-slot":`separator`,decorative:n,orientation:t,className:s(c.root(),e),...a,children:o&&(0,L.jsx)(`div`,{className:c.label(),children:r})})};try{R.displayName=`dividerRecipe`,R.__docgenInfo={description:"Style recipe for Divider using tailwind-variants.\nDefines slots (`root`, `label`) and variants (`orientation`, `hasLabel`).\nThe labelless case renders a single 1px line via `bg-border-default-base-primary`;\nthe labelled case flanks the label with two 1px pseudo-element lines via\n`border-border-default-base-primary`. Label text routes through\n`text-text-default-base-tertiary`.",displayName:`dividerRecipe`,props:{orientation:{defaultValue:{value:`horizontal`},description:``,name:`orientation`,required:!1,type:{name:`enum`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},hasLabel:{defaultValue:null,description:``,name:`hasLabel`,required:!1,type:{name:`boolean`}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{z.displayName=`Divider`,z.__docgenInfo={description:`Divider separates content visually (or semantically, via \`decorative={false}\`)
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
primitive) so the label can sit centered between the two line segments.`,name:`label`,required:!1,type:{name:`ReactNode`}}}}}catch{}})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),u(),B(),V=i(),H={title:`Components/Divider`,component:z,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`]},decorative:{control:`boolean`},label:{control:`text`}},args:{orientation:`horizontal`,decorative:!0},parameters:{docs:{description:{component:`Divider separates content visually along either a horizontal or vertical
axis. Use between page or card sections, between inline items in a toolbar
or list, or — with the \`label\` prop — to render an "or"-style break between
options. Set \`decorative={false}\` when the separator carries semantic
meaning so it's announced to assistive technologies.`}}}},U={render:e=>(0,V.jsxs)(`div`,{className:s(`flex gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6`,e.orientation===`vertical`?`h-40 w-lg items-stretch`:`w-80 flex-col`),children:[(0,V.jsxs)(`div`,{className:`flex flex-1 flex-col justify-center gap-1`,children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`First section`}),(0,V.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Content on one side of the divider, visually separated from the other.`})]}),(0,V.jsx)(z,{...e}),(0,V.jsxs)(`div`,{className:`flex flex-1 flex-col justify-center gap-1`,children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Second section`}),(0,V.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Content on the other side of the divider, clearly separated from the first.`})]})]})},W={render:()=>(0,V.jsx)(`div`,{className:`w-80`,children:(0,V.jsx)(z,{})})},G={render:()=>(0,V.jsx)(`div`,{className:`flex h-24 items-stretch`,children:(0,V.jsx)(z,{orientation:`vertical`})})},K={args:{label:`or`},render:e=>(0,V.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,V.jsx)(l,{variant:`primary`,children:`Continue with email`}),(0,V.jsx)(z,{...e}),(0,V.jsx)(l,{variant:`secondary`,children:`Continue with SSO`})]})},q={args:{orientation:`vertical`,label:`OR`},render:e=>(0,V.jsxs)(`div`,{className:`flex h-40 items-stretch gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6`,children:[(0,V.jsxs)(`div`,{className:`flex flex-col justify-center gap-1`,children:[(0,V.jsx)(`h3`,{className:`text-sm font-semibold text-text-default-base-primary`,children:`Left panel`}),(0,V.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Content on the left side`})]}),(0,V.jsx)(z,{...e}),(0,V.jsxs)(`div`,{className:`flex flex-col justify-center gap-1`,children:[(0,V.jsx)(`h3`,{className:`text-sm font-semibold text-text-default-base-primary`,children:`Right panel`}),(0,V.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Content on the right side`})]})]})},J={args:{decorative:!1},render:e=>(0,V.jsxs)(`div`,{className:`flex w-80 flex-col gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6`,children:[(0,V.jsxs)(`section`,{className:`flex flex-col gap-1`,children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Section one`}),(0,V.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Semantically separated from the next section for screen readers.`})]}),(0,V.jsx)(z,{...e}),(0,V.jsxs)(`section`,{className:`flex flex-col gap-1`,children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Section two`}),(0,V.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Screen readers will announce this as a separate section.`})]})]})},Y={render:()=>(0,V.jsxs)(`div`,{className:`w-80 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary`,children:[(0,V.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3`,children:[(0,V.jsx)(`h4`,{className:`text-sm text-text-default-base-primary`,children:`Notification 1`}),(0,V.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`You have a new message from Jane.`})]}),(0,V.jsx)(z,{}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3`,children:[(0,V.jsx)(`h4`,{className:`text-sm text-text-default-base-primary`,children:`Notification 2`}),(0,V.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Your report is ready to download.`})]}),(0,V.jsx)(z,{}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3`,children:[(0,V.jsx)(`h4`,{className:`text-sm text-text-default-base-primary`,children:`Notification 3`}),(0,V.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`System maintenance is scheduled for tonight.`})]})]})},X={render:()=>(0,V.jsxs)(`div`,{className:`inline-flex h-10 items-center gap-1 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary px-2 shadow-1`,children:[(0,V.jsx)(l,{variant:`ghost`,size:`xs`,children:`Cut`}),(0,V.jsx)(l,{variant:`ghost`,size:`xs`,children:`Copy`}),(0,V.jsx)(l,{variant:`ghost`,size:`xs`,children:`Paste`}),(0,V.jsx)(z,{orientation:`vertical`,className:`mx-1 h-6`}),(0,V.jsx)(l,{variant:`ghost`,size:`xs`,children:`Undo`}),(0,V.jsx)(l,{variant:`ghost`,size:`xs`,children:`Redo`}),(0,V.jsx)(z,{orientation:`vertical`,className:`mx-1 h-6`}),(0,V.jsx)(l,{variant:`ghost`,size:`xs`,children:`Settings`})]})},Z={render:()=>(0,V.jsxs)(`div`,{className:`flex w-96 flex-col gap-4 p-6`,children:[(0,V.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Section title`}),(0,V.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Descriptive content for the first section. The divider below separates it from the next.`})]}),(0,V.jsx)(z,{}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Another section`}),(0,V.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`The second section is clearly separated from the previous one.`})]}),(0,V.jsx)(z,{}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,V.jsx)(`h3`,{className:`text-base font-semibold text-text-default-base-primary`,children:`Final section`}),(0,V.jsx)(`p`,{className:`text-sm text-text-default-base-secondary`,children:`Dividers help establish visual hierarchy in content-heavy layouts.`})]})]})},Q={render:()=>(0,V.jsxs)(`div`,{className:`flex items-stretch gap-3`,children:[(0,V.jsx)(l,{variant:`primary`,size:`sm`,children:`Button 1`}),(0,V.jsx)(z,{orientation:`vertical`}),(0,V.jsx)(l,{variant:`primary`,size:`sm`,children:`Button 2`}),(0,V.jsx)(z,{orientation:`vertical`}),(0,V.jsx)(l,{variant:`primary`,size:`sm`,children:`Button 3`})]})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`The default horizontal, decorative divider — a 1px line that spans the
parent width. Use this form between stacked content blocks.

@summary Default horizontal decorative divider`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80">
            <Divider />
        </div>
}`,...W.parameters?.docs?.source},description:{story:`Horizontal divider — a 1px line spanning the parent's full width. The
default orientation; use to separate stacked content.

@summary Horizontal 1px line spanning the parent width`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-24 items-stretch">
            <Divider orientation="vertical" />
        </div>
}`,...G.parameters?.docs?.source},description:{story:`Vertical divider — a 1px line spanning the parent's full height. Parent must
establish a height (via \`h-*\` or an intrinsic flex item height) for the line
to be visible.

@summary Vertical 1px line spanning the parent height`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'or'
  },
  render: args => <div className="flex w-80 flex-col gap-2">
            <Button variant="primary">Continue with email</Button>
            <Divider {...args} />
            <Button variant="secondary">Continue with SSO</Button>
        </div>
}`,...K.parameters?.docs?.source},description:{story:`Labelled divider. The label sits centered between two flanking 1px lines —
a common pattern for "or" breaks between authentication options.

@summary Horizontal divider with a centered "or" label`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Vertical divider with a label. The label sits between two stacked 1px line
segments; use sparingly — horizontal labelled dividers are more common.

@summary Vertical divider with a centered label`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:'Semantic divider (`decorative={false}`). Exposes `role="separator"` and\n`aria-orientation` to assistive technologies, marking a meaningful section\nbreak rather than a purely visual one.\n\n@summary Semantic separator announced to assistive technologies',...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Divider between list rows. Dividers delineate each item without the visual
weight of a full border on every row.

@summary Horizontal dividers between stacked list rows`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Vertical dividers grouping related toolbar actions. Use to separate logical
clusters of buttons (editing vs. history vs. settings) without visual
weight.

@summary Vertical dividers grouping toolbar actions`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Horizontal dividers between content sections in a long-form layout. Helps
create visual hierarchy in content-heavy pages.

@summary Horizontal dividers between content sections`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Vertical dividers between inline elements. Common for separating a row of
related controls or inline links without visual weight.

@summary Vertical dividers separating inline elements`,...Q.parameters?.docs?.description}}},$=[`Default`,`Horizontal`,`Vertical`,`WithLabel`,`VerticalWithLabel`,`Semantic`,`InList`,`InToolbar`,`HorizontalInContent`,`VerticalBetweenElements`]}))();export{U as Default,W as Horizontal,Z as HorizontalInContent,Y as InList,X as InToolbar,J as Semantic,G as Vertical,Q as VerticalBetweenElements,q as VerticalWithLabel,K as WithLabel,$ as __namedExportsOrder,H as default};