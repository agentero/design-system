import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./createLucideIcon-DzDlE30o.js";import{i,n as a,r as o,t as s}from"./arrow-up-ATRvsnHI.js";import{n as c,t as l}from"./check-DqZ1EAwL.js";import{n as u,t as ee}from"./chevron-down-CsqD_gop.js";import{i as d,n as f,r as p,t as m}from"./ellipsis-CzYdtD94.js";import{n as h,t as g}from"./chevron-right-cvQtW5eQ.js";import{a as _,i as v,n as y,o as te,r as ne,t as b}from"./triangle-exclamation-point-BnfIZUrT.js";import{n as x,t as S}from"./circle-x-BWdKpyvr.js";import{i as C,n as w,r as T,t as E}from"./eye-zDaJGxWT.js";import{n as D,t as O}from"./info-fundnUOW.js";import{n as k,t as A}from"./plus-BcvCI9eu.js";import{n as j,t as M}from"./search-BGURQ6hx.js";import{n as N,t as P}from"./star-rtCnFn8_.js";import{n as re,t as F}from"./trash-BOQk_lED.js";import{n as I,t as L}from"./x-DUo3uhY4.js";import{n as R,t as z}from"./button-FI5QRdPH.js";var B,V;function H(){return(H=e((()=>{n(),B={name:`bell`,size:24,node:[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]},B.node,V=r(B)})))()}var U,W;function G(){return(G=e((()=>{n(),U={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]},U.node,W=r(U)})))()}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{i(),a(),H(),c(),u(),d(),h(),v(),te(),x(),G(),f(),w(),C(),D(),k(),j(),N(),re(),y(),I(),R(),K=t(),q={title:`Foundations/Icons`,parameters:{layout:`padded`,docs:{description:{component:"Icons ship with the design system. `lucide-react` is a runtime dependency\nhere and reaches consumers through the `@agentero/design-system/icons`\nsubpath, so nothing is declared or versioned on the consumer side.\n\nThere is no wrapper component and no size scale: a lucide icon is a plain\nSVG that takes `className`, so Tailwind already does the job — `size-*` for\nsize, a `text-*` token for color, `shrink-0` when it sits next to text in a\nflex row. The stroke is 1.5, as the Figma library draws it: the theme sets\nit on every `svg.lucide`, so don't pass `strokeWidth` (the prop loses to that\nrule); put a `stroke-*` class on the icon when one really needs another.\n\nAlways import the `*Icon` form. Lucide also exports bare names such as `Tag`,\n`Table` and `Command` that collide with design-system components, so an\nauto-import on the bare name lands on the icon.\n\n```tsx\nimport { ChevronRightIcon } from '@agentero/design-system/icons';\n\n<ChevronRightIcon className=\"size-4 shrink-0 text-icon-default-base-secondary\" />\n```\n\n@summary How to size and color icons, and the set the components use"}}},tags:[`autodocs`,`!manifest`]},J={render:()=>(0,K.jsx)(`div`,{className:`flex items-end gap-8 text-icon-default-base-primary`,children:[`size-3.5`,`size-4`,`size-5`,`size-6`].map(e=>(0,K.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,K.jsx)(g,{className:e}),(0,K.jsx)(`span`,{className:`text-xs text-text-default-base-tertiary`,children:e})]},e))})},Y={render:()=>(0,K.jsx)(`div`,{className:`flex gap-8`,children:[{token:`text-icon-default-base-primary`,Icon:V,label:`primary`},{token:`text-icon-default-base-secondary`,Icon:V,label:`secondary`},{token:`text-icon-default-base-tertiary`,Icon:V,label:`tertiary`},{token:`text-icon-default-danger-primary`,Icon:b,label:`danger`},{token:`text-icon-default-positive-primary`,Icon:_,label:`positive`}].map(({token:e,Icon:t,label:n})=>(0,K.jsxs)(`div`,{className:`flex flex-col items-center gap-2 ${e}`,children:[(0,K.jsx)(t,{className:`size-5`}),(0,K.jsx)(`span`,{className:`text-xs text-text-default-base-tertiary`,children:n})]},n))})},X={render:()=>(0,K.jsx)(`div`,{className:`grid grid-cols-2 gap-4 text-icon-default-base-primary sm:grid-cols-4`,children:[{Icon:g,name:`ChevronRightIcon`,where:`Pagination, DropdownMenu`},{Icon:p,name:`ChevronLeftIcon`,where:`Pagination`},{Icon:ee,name:`ChevronDownIcon`,where:`Accordion, Combobox, Table`},{Icon:l,name:`CheckIcon`,where:`CheckList`},{Icon:L,name:`XIcon`,where:`Alert, Modal, Toast`},{Icon:M,name:`SearchIcon`,where:`Command, Combobox, InputSearch`},{Icon:S,name:`CircleXIcon`,where:`Combobox, InputSearch clear`},{Icon:E,name:`EyeIcon`,where:`InputPassword`},{Icon:T,name:`EyeOffIcon`,where:`InputPassword`},{Icon:s,name:`ArrowUpIcon`,where:`DataTable sorted`},{Icon:o,name:`ArrowUpDownIcon`,where:`DataTable sortable`},{Icon:m,name:`EllipsisIcon`,where:`Pagination ellipsis`},{Icon:_,name:`CircleCheckIcon`,where:`Alert, Toast`},{Icon:ne,name:`CircleAlertIcon`,where:`Alert, Toast`},{Icon:b,name:`TriangleAlertIcon`,where:`Alert, Toast`},{Icon:O,name:`InfoIcon`,where:`Alert, Toast, Field`},{Icon:P,name:`StarIcon`,where:`Alert creative`}].map(({Icon:e,name:t,where:n})=>(0,K.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,K.jsx)(e,{className:`size-5 shrink-0`}),(0,K.jsxs)(`span`,{className:`flex flex-col text-xs`,children:[(0,K.jsx)(`span`,{className:`text-text-default-base-primary`,children:t}),(0,K.jsx)(`span`,{className:`text-text-default-base-tertiary`,children:n})]})]},t))})},Z={render:()=>(0,K.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,K.jsxs)(z,{children:[(0,K.jsx)(A,{}),`Create agent`]}),(0,K.jsxs)(`span`,{className:`flex items-center gap-2 text-sm text-text-default-base-secondary`,children:[(0,K.jsx)(W,{className:`size-4 shrink-0`}),`Download report`]}),(0,K.jsxs)(`span`,{className:`flex items-center gap-2 text-sm text-text-default-danger-primary`,children:[(0,K.jsx)(F,{className:`size-4 shrink-0`}),`Delete`]})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-8 text-icon-default-base-primary">
            {['size-3.5', 'size-4', 'size-5', 'size-6'].map(size => <div key={size} className="flex flex-col items-center gap-2">
                    <ChevronRightIcon className={size} />
                    <span className="text-xs text-text-default-base-tertiary">{size}</span>
                </div>)}
        </div>
}`,...J.parameters?.docs?.source},description:{story:`Size comes from a \`size-*\` class on the icon. The design system imposes no
scale — components pick the size that fits their own density.

@summary Sizing icons with Tailwind classes`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:'Lucide paints with `stroke="currentColor"` and leaves `fill` empty, so color\ncomes from a `text-*` token — **not** from `fill-*`, which is what the old\ninlined Material glyphs used and which does nothing here.\n\n@summary Color through text tokens, not fill',...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
      Icon: CircleXIcon,
      name: 'CircleXIcon',
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
      where: 'Alert, Toast'
    }, {
      Icon: CircleAlertIcon,
      name: 'CircleAlertIcon',
      where: 'Alert, Toast'
    }, {
      Icon: TriangleAlertIcon,
      name: 'TriangleAlertIcon',
      where: 'Alert, Toast'
    }, {
      Icon: InfoIcon,
      name: 'InfoIcon',
      where: 'Alert, Toast, Field'
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
}`,...X.parameters?.docs?.source},description:{story:`The icons the components themselves render, with the name each one replaced.
The Checkbox check and minus, and the Combobox row check that mirrors them,
are not here: they are the Figma Base Checkbox glyphs, kept as local SVGs.
Use this page to check a swap before reaching for a different lucide glyph.

@summary The set the design system renders internally`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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

@summary Icon composed with text`,...Z.parameters?.docs?.description}}},Q=[`Sizes`,`Colors`,`InComponents`,`InComposition`]})))()}$();export{Y as Colors,X as InComponents,Z as InComposition,J as Sizes,Q as __namedExportsOrder,q as default};