import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./createLucideIcon-BvSVVqp2.js";import{i as ee,n as i,r as a,t as o}from"./arrow-up-CTWHB7ZD.js";import{n as s,t as c}from"./check-Drg-jXq5.js";import{n as l,t as u}from"./chevron-down-D9KUEAvs.js";import{i as d,n as f,r as te,t as ne}from"./ellipsis-r62GlFc6.js";import{n as re,t as p}from"./chevron-right-Ces4I9Yp.js";import{a as ie,c as ae,i as oe,n as se,o as ce,r as m,s as h,t as g}from"./triangle-exclamation-point-B-0pIvUS.js";import{i as _,n as v,r as y,t as b}from"./eye-acYVWwFp.js";import{n as x,t as S}from"./info-DpCIF3XT.js";import{n as C,t as w}from"./plus-tdnPVBkF.js";import{n as T,t as E}from"./search-COVdnzSx.js";import{n as D,t as O}from"./trash-D_M8ECle.js";import{n as k,t as A}from"./x-qZmez9C5.js";import{n as j,t as M}from"./button-sinQyQWo.js";import{a as N,i as le,n as P,o as F,r as I,s as L,t as R}from"./custom-FCIoNG30.js";var z,B;function V(){return(V=e((()=>{n(),z={name:`bell`,size:24,node:[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]},z.node,B=r(z)})))()}var H,U;function W(){return(W=e((()=>{n(),H={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]},H.node,U=r(H)})))()}var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ee(),i(),V(),s(),l(),d(),re(),ce(),ae(),W(),f(),v(),_(),x(),C(),T(),oe(),D(),se(),k(),j(),L(),G=t(),K={title:`Foundations/Icons`,parameters:{layout:`padded`,docs:{description:{component:"Icons ship with the design system. `lucide-react` is a runtime dependency\nhere and reaches consumers through the `@agentero/design-system/icons`\nsubpath, so nothing is declared or versioned on the consumer side.\n\nThere is no wrapper component and no size scale: a lucide icon is a plain\nSVG that takes `className`, so Tailwind already does the job — `size-*` for\nsize, a `text-*` token for color, `shrink-0` when it sits next to text in a\nflex row. The stroke is 1.5, as the Figma library draws it: the theme sets\nit on every `svg.lucide`, so don't pass `strokeWidth` (the prop loses to that\nrule); put a `stroke-*` class on the icon when one really needs another.\n\nAlways import the `*Icon` form. Lucide also exports bare names such as `Tag`,\n`Table` and `Command` that collide with design-system components, so an\nauto-import on the bare name lands on the icon.\n\n```tsx\nimport { ChevronRightIcon } from '@agentero/design-system/icons';\n\n<ChevronRightIcon className=\"size-4 shrink-0 text-icon-default-base-secondary\" />\n```\n\n@summary How to size and color icons, and the set the components use"}}},tags:[`autodocs`,`!manifest`]},q={render:()=>(0,G.jsx)(`div`,{className:`flex items-end gap-8 text-icon-default-base-primary`,children:[`size-3.5`,`size-4`,`size-5`,`size-6`].map(e=>(0,G.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,G.jsx)(p,{className:e}),(0,G.jsx)(`span`,{className:`text-xs text-text-default-base-tertiary`,children:e})]},e))})},J={render:()=>(0,G.jsx)(`div`,{className:`flex gap-8`,children:[{token:`text-icon-default-base-primary`,Icon:B,label:`primary`},{token:`text-icon-default-base-secondary`,Icon:B,label:`secondary`},{token:`text-icon-default-base-tertiary`,Icon:B,label:`tertiary`},{token:`text-icon-default-danger-primary`,Icon:g,label:`danger`},{token:`text-icon-default-positive-primary`,Icon:h,label:`positive`}].map(({token:e,Icon:t,label:n})=>(0,G.jsxs)(`div`,{className:`flex flex-col items-center gap-2 ${e}`,children:[(0,G.jsx)(t,{className:`size-5`}),(0,G.jsx)(`span`,{className:`text-xs text-text-default-base-tertiary`,children:n})]},n))})},Y={render:()=>(0,G.jsx)(`div`,{className:`grid grid-cols-2 gap-4 text-icon-default-base-primary sm:grid-cols-4`,children:[{Icon:p,name:`ChevronRightIcon`,where:`Pagination, DropdownMenu`},{Icon:te,name:`ChevronLeftIcon`,where:`Pagination`},{Icon:u,name:`ChevronDownIcon`,where:`Accordion, Combobox, Table`},{Icon:c,name:`CheckIcon`,where:`CheckList`},{Icon:A,name:`XIcon`,where:`Alert, Modal, Toast`},{Icon:E,name:`SearchIcon`,where:`Command, Combobox, InputSearch`},{Icon:I,name:`CircleXFilledIcon`,where:`Combobox, InputSearch clear`},{Icon:b,name:`EyeIcon`,where:`InputPassword`},{Icon:y,name:`EyeOffIcon`,where:`InputPassword`},{Icon:o,name:`ArrowUpIcon`,where:`DataTable sorted`},{Icon:a,name:`ArrowUpDownIcon`,where:`DataTable sortable`},{Icon:ne,name:`EllipsisIcon`,where:`Pagination ellipsis`},{Icon:h,name:`CircleCheckIcon`,where:`Alert`},{Icon:ie,name:`CircleAlertIcon`,where:`Alert`},{Icon:g,name:`TriangleAlertIcon`,where:`Alert`},{Icon:S,name:`InfoIcon`,where:`Alert, Field`},{Icon:P,name:`CircleCheckFilledIcon`,where:`Toast`},{Icon:R,name:`CircleAlertFilledIcon`,where:`Toast`},{Icon:N,name:`TriangleAlertFilledIcon`,where:`Toast`},{Icon:le,name:`InfoFilledIcon`,where:`Toast`},{Icon:m,name:`StarIcon`,where:`Alert creative`}].map(({Icon:e,name:t,where:n})=>(0,G.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,G.jsx)(e,{className:`size-5 shrink-0`}),(0,G.jsxs)(`span`,{className:`flex flex-col text-xs`,children:[(0,G.jsx)(`span`,{className:`text-text-default-base-primary`,children:t}),(0,G.jsx)(`span`,{className:`text-text-default-base-tertiary`,children:n})]})]},t))})},X={render:()=>(0,G.jsx)(`div`,{className:`grid grid-cols-2 gap-4 text-icon-default-base-primary sm:grid-cols-4`,children:Object.entries(F).map(([e,t])=>(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(t,{className:`size-5 shrink-0`}),(0,G.jsx)(`span`,{className:`text-xs text-text-default-base-primary`,children:e})]},e))})},Z={render:()=>(0,G.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,G.jsxs)(M,{children:[(0,G.jsx)(w,{}),`Create agent`]}),(0,G.jsxs)(`span`,{className:`flex items-center gap-2 text-sm text-text-default-base-secondary`,children:[(0,G.jsx)(U,{className:`size-4 shrink-0`}),`Download report`]}),(0,G.jsxs)(`span`,{className:`flex items-center gap-2 text-sm text-text-default-danger-primary`,children:[(0,G.jsx)(O,{className:`size-4 shrink-0`}),`Delete`]})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-8 text-icon-default-base-primary">
            {['size-3.5', 'size-4', 'size-5', 'size-6'].map(size => <div key={size} className="flex flex-col items-center gap-2">
                    <ChevronRightIcon className={size} />
                    <span className="text-xs text-text-default-base-tertiary">{size}</span>
                </div>)}
        </div>
}`,...q.parameters?.docs?.source},description:{story:`Size comes from a \`size-*\` class on the icon. The design system imposes no
scale — components pick the size that fits their own density.

@summary Sizing icons with Tailwind classes`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
            {[{
      token: 'text-icon-default-base-primary',
      Icon: BellIcon,
      label: 'primary'
    }, {
      token: 'text-icon-default-base-secondary',
      Icon: BellIcon,
      label: 'secondary'
    }, {
      token: 'text-icon-default-base-tertiary',
      Icon: BellIcon,
      label: 'tertiary'
    }, {
      token: 'text-icon-default-danger-primary',
      Icon: TriangleAlertIcon,
      label: 'danger'
    }, {
      token: 'text-icon-default-positive-primary',
      Icon: CircleCheckIcon,
      label: 'positive'
    }].map(({
      token,
      Icon,
      label
    }) => <div key={label} className={\`flex flex-col items-center gap-2 \${token}\`}>
                    <Icon className="size-5" />
                    <span className="text-xs text-text-default-base-tertiary">{label}</span>
                </div>)}
        </div>
}`,...J.parameters?.docs?.source},description:{story:'Lucide paints with `stroke="currentColor"` and leaves `fill` empty, so color\ncomes from a `text-*` token — **not** from `fill-*`, which is what the old\ninlined Material glyphs used and which does nothing here.\n\n@summary Color through text tokens, not fill',...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 text-icon-default-base-primary sm:grid-cols-4">
            {[{
      Icon: ChevronRightIcon,
      name: 'ChevronRightIcon',
      where: 'Pagination, DropdownMenu'
    }, {
      Icon: ChevronLeftIcon,
      name: 'ChevronLeftIcon',
      where: 'Pagination'
    }, {
      Icon: ChevronDownIcon,
      name: 'ChevronDownIcon',
      where: 'Accordion, Combobox, Table'
    }, {
      Icon: CheckIcon,
      name: 'CheckIcon',
      where: 'CheckList'
    }, {
      Icon: XIcon,
      name: 'XIcon',
      where: 'Alert, Modal, Toast'
    }, {
      Icon: SearchIcon,
      name: 'SearchIcon',
      where: 'Command, Combobox, InputSearch'
    }, {
      Icon: custom.CircleXFilledIcon,
      name: 'CircleXFilledIcon',
      where: 'Combobox, InputSearch clear'
    }, {
      Icon: EyeIcon,
      name: 'EyeIcon',
      where: 'InputPassword'
    }, {
      Icon: EyeOffIcon,
      name: 'EyeOffIcon',
      where: 'InputPassword'
    }, {
      Icon: ArrowUpIcon,
      name: 'ArrowUpIcon',
      where: 'DataTable sorted'
    }, {
      Icon: ArrowUpDownIcon,
      name: 'ArrowUpDownIcon',
      where: 'DataTable sortable'
    }, {
      Icon: EllipsisIcon,
      name: 'EllipsisIcon',
      where: 'Pagination ellipsis'
    }, {
      Icon: CircleCheckIcon,
      name: 'CircleCheckIcon',
      where: 'Alert'
    }, {
      Icon: CircleAlertIcon,
      name: 'CircleAlertIcon',
      where: 'Alert'
    }, {
      Icon: TriangleAlertIcon,
      name: 'TriangleAlertIcon',
      where: 'Alert'
    }, {
      Icon: InfoIcon,
      name: 'InfoIcon',
      where: 'Alert, Field'
    }, {
      Icon: custom.CircleCheckFilledIcon,
      name: 'CircleCheckFilledIcon',
      where: 'Toast'
    }, {
      Icon: custom.CircleAlertFilledIcon,
      name: 'CircleAlertFilledIcon',
      where: 'Toast'
    }, {
      Icon: custom.TriangleAlertFilledIcon,
      name: 'TriangleAlertFilledIcon',
      where: 'Toast'
    }, {
      Icon: custom.InfoFilledIcon,
      name: 'InfoFilledIcon',
      where: 'Toast'
    }, {
      Icon: StarIcon,
      name: 'StarIcon',
      where: 'Alert creative'
    }].map(({
      Icon,
      name,
      where
    }) => <div key={name} className="flex items-start gap-2">
                    <Icon className="size-5 shrink-0" />
                    <span className="flex flex-col text-xs">
                        <span className="text-text-default-base-primary">{name}</span>
                        <span className="text-text-default-base-tertiary">{where}</span>
                    </span>
                </div>)}
        </div>
}`,...Y.parameters?.docs?.source},description:{story:`The icons the components themselves render, with the name each one replaced.
The Checkbox check and minus, and the Combobox row check that mirrors them,
are not here: they are the Figma Base Checkbox glyphs, kept as local SVGs.
Use this page to check a swap before reaching for a different lucide glyph.

@summary The set the design system renders internally`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 text-icon-default-base-primary sm:grid-cols-4">
            {Object.entries(custom).map(([name, Icon]) => <div key={name} className="flex items-center gap-2">
                    <Icon className="size-5 shrink-0" />
                    <span className="text-xs text-text-default-base-primary">{name}</span>
                </div>)}
        </div>
}`,...X.parameters?.docs?.source},description:{story:"Glyphs the Figma library draws and lucide doesn't ship. They come from the same\nsubpath and behave like any lucide icon: `size-*`, a `text-*` token, and the\nfilled ones paint with `currentColor` too.\n\n@summary Icons the design system adds to lucide",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            <Button>
                <PlusIcon />
                Create agent
            </Button>
            <span className="flex items-center gap-2 text-sm text-text-default-base-secondary">
                <DownloadIcon className="size-4 shrink-0" />
                Download report
            </span>
            <span className="flex items-center gap-2 text-sm text-text-default-danger-primary">
                <Trash2Icon className="size-4 shrink-0" />
                Delete
            </span>
        </div>
}`,...Z.parameters?.docs?.source},description:{story:`Next to text: \`size-*\` to match the line, \`shrink-0\` so the flex row can't
squash it, and no color of its own so it follows the parent's token. Inside a
Button none of that is needed: the recipe sizes the icon and colors it.

@summary Icon composed with text`,...Z.parameters?.docs?.description}}},Q=[`Sizes`,`Colors`,`InComponents`,`Custom`,`InComposition`]})))()}$();export{J as Colors,X as Custom,Y as InComponents,Z as InComposition,q as Sizes,Q as __namedExportsOrder,K as default};