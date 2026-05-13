import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BjLNHG_v.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{O as i,_ as a,c as o,k as s,n as ee,o as c,t as l,v as u}from"./lucide-react-8iEviSz6.js";import{a as d,n as f,o as p,r as m,t as te}from"./lib-CS_4QekD.js";import{t as ne}from"./button-CnTIlLz2.js";import{t as h}from"./button-DKX2vU8w.js";var g,_,v,y,b,re,ie,x,S,C,ae,oe,se,ce,w,T,le=t((()=>{g=e(n(),1),l(),d(),te(),h(),_=r(),v=p({slots:{root:[`flex items-start rounded-md`,`[&_[data-slot=alert-title]]:-mt-px`,`[&_a]:text-current [&_a]:fill-current [&_a]:underline [&_a:hover]:no-underline`],title:`font-semibold`,paragraph:``,content:`flex flex-col h-full self-start`,icon:``},variants:{color:{neutral:{},success:{},danger:{},warning:{},info:{},creative:{},dynamic:{},playful:{}},size:{sm:{root:`px-4 py-3 gap-2`,title:`text-sm`,paragraph:`text-xs`,content:`gap-1`},md:{root:`px-8 py-6 gap-4`,title:`text-lg`,paragraph:`text-sm`,content:`gap-2`}},ghost:{true:{root:`bg-transparent p-0`},false:{}}},compoundVariants:[{ghost:!1,color:`neutral`,class:{root:`bg-bg-alert-primary-neutral text-text-alert-primary-neutral`,icon:`text-icon-alert-primary-neutral`}},{ghost:!1,color:`success`,class:{root:`bg-bg-alert-primary-success text-text-alert-primary-success`,icon:`text-icon-alert-primary-success`}},{ghost:!1,color:`danger`,class:{root:`bg-bg-alert-primary-danger text-text-alert-primary-danger`,icon:`text-icon-alert-primary-danger`}},{ghost:!1,color:`warning`,class:{root:`bg-bg-alert-primary-warning text-text-alert-primary-warning`,icon:`text-icon-alert-primary-warning`}},{ghost:!1,color:`info`,class:{root:`bg-bg-alert-primary-info text-text-alert-primary-info`,icon:`text-icon-alert-primary-info`}},{ghost:!1,color:`creative`,class:{root:`bg-bg-alert-primary-creative text-text-alert-primary-creative`,icon:`text-icon-alert-primary-creative`}},{ghost:!1,color:`dynamic`,class:{root:`bg-bg-alert-primary-dynamic text-text-alert-primary-dynamic`,icon:`text-icon-alert-primary-dynamic`}},{ghost:!1,color:`playful`,class:{root:`bg-bg-alert-primary-playful text-text-alert-primary-playful`,icon:`text-icon-alert-primary-playful`}},{ghost:!0,color:`neutral`,class:{root:`text-text-alert-ghost-neutral`,icon:`text-icon-alert-ghost-neutral`}},{ghost:!0,color:`success`,class:{root:`text-text-alert-ghost-success`,icon:`text-icon-alert-ghost-success`}},{ghost:!0,color:`danger`,class:{root:`text-text-alert-ghost-danger`,icon:`text-icon-alert-ghost-danger`}},{ghost:!0,color:`warning`,class:{root:`text-text-alert-ghost-warning`,icon:`text-icon-alert-ghost-warning`}},{ghost:!0,color:`info`,class:{root:`text-text-alert-ghost-info`,icon:`text-icon-alert-ghost-info`}},{ghost:!0,color:`creative`,class:{root:`text-text-alert-ghost-creative`,icon:`text-icon-alert-ghost-creative`}},{ghost:!0,color:`dynamic`,class:{root:`text-text-alert-ghost-dynamic`,icon:`text-icon-alert-ghost-dynamic`}},{ghost:!0,color:`playful`,class:{root:`text-text-alert-ghost-playful`,icon:`text-icon-alert-ghost-playful`}},{size:`sm`,class:{root:`[&:not(:has([data-slot=alert-title]))_[data-slot=alert-paragraph]:first-of-type]:mt-0.5`}},{size:`md`,class:{root:`[&:not(:has([data-slot=alert-title]))_[data-slot=alert-paragraph]:first-of-type]:mt-px`}}],defaultVariants:{color:`neutral`,size:`sm`,ghost:!1}}),y=(0,g.createContext)(null),b=()=>{let e=(0,g.use)(y);if(!e)throw Error(`useAlert must be used within an Alert`);return e},re={neutral:u,success:i,danger:s,warning:c,info:u,creative:o,dynamic:u,playful:u},ie={sm:m({size:`md`}),md:m({size:`lg`})},x=({className:e,children:t,...n})=>{let{slotsStyles:r,titleId:i}=b();return(0,_.jsx)(`h3`,{id:i,"data-slot":`alert-title`,...n,className:f(r.title(),e),children:t})},S=({className:e,children:t,...n})=>{let{slotsStyles:r}=b();return(0,_.jsx)(`p`,{"data-slot":`alert-paragraph`,...n,className:f(r.paragraph(),e),children:t})},C=({html:e,className:t,...n})=>{let{slotsStyles:r}=b();return(0,_.jsx)(`div`,{"data-slot":`alert-paragraph`,...n,className:f(r.paragraph(),t),dangerouslySetInnerHTML:{__html:e}})},ae=({className:e,children:t,...n})=>{let{slotsStyles:r}=b();return(0,_.jsx)(`div`,{"data-slot":`alert-content`,...n,className:f(r.content(),e),children:t})},oe=({className:e,children:t,...n})=>(0,_.jsx)(`div`,{"data-slot":`alert-actions`,...n,className:f(`ml-auto flex flex-col items-center justify-center gap-2`,e),children:t}),se=({className:e,children:t,...n})=>(0,_.jsx)(`div`,{...n,className:f(`[&_svg]:h-16! [&_svg]:w-16!`,e),children:t}),ce=({className:e,...t})=>(0,_.jsx)(ne,{variant:`link`,className:f(`text-current`,e),...t}),w=(e,t)=>g.Children.toArray(e).some(e=>{if(!(0,g.isValidElement)(e))return!1;if(e.type===t)return!0;let n=e.props.children;return n?w(n,t):!1}),T=({children:e,onDismiss:t,hasIcon:n=!0,icon:r,color:i=`neutral`,size:a=`sm`,ghost:o=!1,className:s,...c})=>{let l=v({color:i,size:a,ghost:o}),u=(0,g.useId)(),d=`${u}-title`,p=`${u}-desc`,m=w(e,x),te=w(e,S)||w(e,C),h=r??re[i],b=r?!0:n;return(0,_.jsx)(y,{value:{size:a,slotsStyles:l,titleId:d,descId:p},children:(0,_.jsxs)(`div`,{role:`alert`,"aria-labelledby":m?d:void 0,"aria-describedby":te?p:void 0,"data-slot":`alert-root`,...c,className:f(l.root(),s),children:[t&&(0,_.jsx)(`div`,{className:f(`order-last ml-auto self-center`,{"pl-2.5":a===`sm`,"pl-0.5":a===`md`}),children:(0,_.jsx)(ne,{variant:`ghost`,size:a,iconOnly:!0,"aria-label":`Dismiss`,className:`text-current`,onClick:t,children:(0,_.jsx)(ee,{})})}),b&&(0,_.jsx)(h,{className:f(ie[a],l.icon()),"data-slot":`alert-icon`}),(0,_.jsx)(`div`,{id:p,className:`flex w-full items-center gap-10`,children:e})]})})},T.Title=x,T.Paragraph=S,T.ParagraphHtml=C,T.Content=ae,T.Actions=oe,T.Button=ce,T.Pictograms=se;try{v.displayName=`alertRecipe`,v.__docgenInfo={description:"Style recipe for Alert using tailwind-variants. Exposes five slots\n(`root`, `title`, `paragraph`, `content`, `icon`) and three variants\n(`color`, `size`, `ghost`). Compound variants collapse the 8 colors ×\nghost boolean matrix into a single row per combination, so each slot's\ncolor token is defined exactly once.\n\nExported for advanced composition (e.g., styling a custom element to\nmatch an Alert slot). Prefer rendering the `Alert` component directly.",displayName:`alertRecipe`,props:{size:{defaultValue:{value:`sm`},description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`}]}},color:{defaultValue:{value:`neutral`},description:``,name:`color`,required:!1,type:{name:`enum`,value:[{value:`"neutral"`},{value:`"success"`},{value:`"warning"`},{value:`"info"`},{value:`"danger"`},{value:`"creative"`},{value:`"dynamic"`},{value:`"playful"`}]}},ghost:{defaultValue:{value:`false`},description:``,name:`ghost`,required:!1,type:{name:`boolean`}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{b.displayName=`useAlert`,b.__docgenInfo={description:"Returns the current Alert context including size, computed slot styles,\nand the ids used for `aria-labelledby` (title) and `aria-describedby`\n(paragraph wrapper). Must be called within an `Alert` component tree.",displayName:`useAlert`,props:{}}}catch{}try{T.displayName=`Alert`,T.__docgenInfo={description:'Alert surfaces feedback about an outcome or state change — success, error,\nwarning, or informational. Compose it from the exposed sub-components to\nbuild the layout you need: `Alert.Content` groups a `Alert.Title` and any\nnumber of `Alert.Paragraph` / `Alert.ParagraphHtml`; `Alert.Actions` adds\ntrailing buttons; `Alert.Pictograms` renders a 64px illustration. Pass\n`onDismiss` to show a close button; `hasIcon={false}` to hide the default\nicon; `icon` to substitute a custom icon component.\n\nAccessibility: the root carries `role="alert"`; `aria-labelledby` points at\nthe rendered `Alert.Title` (when present) and `aria-describedby` at the\nparagraph wrapper. Multiple Alerts on the same page receive unique ids via\n`useId()`. The dismiss control has an accessible name of `Dismiss`.\n\nDo **not** use Alert for transient toast notifications (use a Toast\ncomponent) or for large error pages (use a dedicated empty-state).',displayName:`Alert`,props:{onDismiss:{defaultValue:null,description:'Fires when the dismiss button is clicked. When provided, renders an `iconOnly` close button with `aria-label="Dismiss"`.',name:`onDismiss`,required:!1,type:{name:`(() => void)`}},hasIcon:{defaultValue:{value:`true`},description:"When `true` (default), renders the built-in icon for the current `color`. Set to `false` to omit the icon entirely.",name:`hasIcon`,required:!1,type:{name:`boolean`}},icon:{defaultValue:null,description:`Overrides the default icon for the current \`color\`. Pass any \`LucideIcon\`
from \`lucide-react\` — Alert applies the size + color tokens via className,
so consumers don't need to style the icon themselves.
@example import { LightbulbIcon } from 'lucide-react';

<Alert color="creative" icon={LightbulbIcon}>
  <Alert.Content>
    <Alert.Title>Pro tip</Alert.Title>
  </Alert.Content>
</Alert>`,name:`icon`,required:!1,type:{name:`LucideIcon`}},color:{defaultValue:{value:`neutral`},description:"Semantic color. Defaults to `'neutral'`.\n- `neutral` — generic info; no strong signal.\n- `success` — positive confirmation.\n- `danger` — error or destructive outcome.\n- `warning` — caution; user attention needed.\n- `info` — informational highlight.\n- `creative`, `dynamic`, `playful` — brand-aligned accents.",name:`color`,required:!1,type:{name:`enum`,value:[{value:`"neutral"`},{value:`"success"`},{value:`"warning"`},{value:`"info"`},{value:`"danger"`},{value:`"creative"`},{value:`"dynamic"`},{value:`"playful"`}]}},size:{defaultValue:{value:`sm`},description:"Size treatment. Defaults to `'sm'`.\n- `sm` — compact inline alerts (1rem padding, 14/12px typography).\n- `md` — prominent standalone alerts (2rem padding, 18/14px typography).",name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`}]}},ghost:{defaultValue:{value:`false`},description:`When \`true\`, removes background and padding so the alert blends inline
with surrounding text (e.g., inline form field errors). Colors switch
to the ghost token ramp for lower visual weight.`,name:`ghost`,required:!1,type:{name:`boolean`}}}}}catch{}try{T.Title.displayName=`Alert.Title`,T.Title.__docgenInfo={description:`Renders a styled heading inside an Alert. The element inherits size from
the parent Alert and its id is wired to the root's \`aria-labelledby\`
so assistive tech announces the title as the accessible name.`,displayName:`Alert.Title`,props:{}}}catch{}try{T.Paragraph.displayName=`Alert.Paragraph`,T.Paragraph.__docgenInfo={description:`Renders a body paragraph inside an Alert. Inherits size from the parent
Alert context and contributes to the accessible description.`,displayName:`Alert.Paragraph`,props:{}}}catch{}try{T.ParagraphHtml.displayName=`Alert.ParagraphHtml`,T.ParagraphHtml.__docgenInfo={description:"Renders raw HTML inside an Alert paragraph slot via\n`dangerouslySetInnerHTML`. The caller is responsible for sanitizing the\n`html` string before passing it in — this component does not escape or\nfilter content.",displayName:`Alert.ParagraphHtml`,props:{html:{defaultValue:null,description:``,name:`html`,required:!0,type:{name:`string`}}}}}catch{}try{T.Content.displayName=`Alert.Content`,T.Content.__docgenInfo={description:`Groups title and paragraph content inside an Alert. Applies the context
size's gap and flex column layout to keep title + paragraphs stacked
with consistent spacing.`,displayName:`Alert.Content`,props:{}}}catch{}try{T.Actions.displayName=`Alert.Actions`,T.Actions.__docgenInfo={description:`Container for action buttons pinned to the right edge of the Alert,
vertically centered. Use alongside \`Alert.Content\` to place actions
opposite the main message.`,displayName:`Alert.Actions`,props:{}}}catch{}try{T.Button.displayName=`Alert.Button`,T.Button.__docgenInfo={description:'Link-styled button that inherits the Alert\'s text color. Equivalent to\n`<Button variant="link" className="text-current" />` — consumer props\nare spread last so every prop (including `variant` and `className`\nbeyond the default `text-current`) is overridable.',displayName:`Alert.Button`,props:{children:{defaultValue:null,description:`Content rendered inside the Button. Accepts a text label, icon elements,
or any mix of both. Icon-only children switch the Button to a square
aspect ratio and trigger the icon-only layout.

When \`asChild\` is set, the single child element is merged with Button's
props and styles; auto-detection of icon-only children is skipped — use
the \`iconOnly\` prop to opt into the square icon-only layout.

Not supported with \`variant="link"\` when children resolve to icons only
— passing both logs a dev-only warning (silent in production).`,name:`children`,required:!1,type:{name:`ReactNode`}},variant:{defaultValue:null,description:"Visual hierarchy. Defaults to `'primary'`.\n- `primary` — main call-to-action; use once per view.\n- `secondary` — alternative action alongside a primary button.\n- `tertiary` — low-emphasis action, subtle background.\n- `ghost` — minimal background; low-emphasis action in dense layouts.\n- `link` — inline text-style action; no padding or background.",name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"link"`},{value:`"primary"`},{value:`"secondary"`},{value:`"tertiary"`},{value:`"ghost"`}]}},size:{defaultValue:{value:`sm`},description:"Control size. Defaults to `'sm'`.\n- `xs` (24px) — dense toolbars, compact inline actions.\n- `sm` (32px) — standard usage in forms and cards.\n- `md` (40px) — prominent actions in modals or feature rows.\n- `lg` (48px) — hero CTAs and full-width mobile actions.",name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xs"`}]}},status:{defaultValue:null,description:`Semantic status override. Set to \`'danger'\` for destructive actions
(delete, remove, disconnect) — applies the destructive color treatment
across all variants.`,name:`status`,required:!1,type:{name:`enum`,value:[{value:`"danger"`}]}},loading:{defaultValue:null,description:'When `true`, shows a spinner overlay and forces the button into a disabled\nstate to block further interaction. Not supported with `variant="link"` —\npassing both logs a dev-only warning (silent in production).',name:`loading`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:null,description:"Disables interaction and applies the disabled color treatment. Applied\nvia className so it still affects anchors rendered via `asChild`, which\nignore the native `disabled` attribute — in that case `aria-disabled`\nand `data-disabled` are forwarded to the child element instead.",name:`disabled`,required:!1,type:{name:`boolean`}},iconOnly:{defaultValue:null,description:"Forces the icon-only layout (square aspect ratio, no min-width). Useful\nwith `asChild` where the single wrapper child prevents auto-detection.\nFor non-`asChild` usage, prefer passing icon elements as children — the\nicon-only layout is applied automatically.",name:`iconOnly`,required:!1,type:{name:`boolean`}},rounded:{defaultValue:null,description:"When `true`, renders a fully pill-shaped button (rounded-full). Otherwise\nuses the variant's default corner radius.",name:`rounded`,required:!1,type:{name:`boolean`}},align:{defaultValue:null,description:"Justifies children along the main axis. Defaults to `'center'`.\nUse `'justify'` to push leading and trailing icons to the edges.",name:`align`,required:!1,type:{name:`enum`,value:[{value:`"center"`},{value:`"start"`},{value:`"end"`},{value:`"justify"`}]}},fitContent:{defaultValue:null,description:"When `true`, removes the per-size `min-width` floor so the button hugs\nits content. Useful for inline actions inside tight containers.",name:`fitContent`,required:!1,type:{name:`boolean`}},ref:{defaultValue:null,description:"Ref forwarded to the underlying element. Typed as a union covering both\n`<button>` and `<a>` because `asChild` lets consumers render either tag\n(or any forwardRef component) through Radix's `Slot`.",name:`ref`,required:!1,type:{name:`Ref<HTMLButtonElement | HTMLAnchorElement>`}},asChild:{defaultValue:null,description:"When `true`, Button clones its single child element and merges\nButton's `className`, `ref`, and event handlers onto it rather than\nrendering a `<button>`. Use this to style any element (a plain `<a>`,\na framework `Link`, a `React.forwardRef` component) as a Button.\n\nWhen combined with `disabled`, Button emits `aria-disabled` and\n`data-disabled` on the child instead of the native `disabled`\nattribute (which is ignored by non-form-control elements).",name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{T.Pictograms.displayName=`Alert.Pictograms`,T.Pictograms.__docgenInfo={description:"Container for a 64×64 pictogram/illustration rendered inside an Alert.\nForces any `<svg>` descendant to render at 64px square.",displayName:`Alert.Pictograms`,props:{}}}catch{}})),E,D,ue,de,O,k,fe,A,pe,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,me;t((()=>{l(),le(),E=r(),{expect:D,fn:ue,userEvent:de,within:O}=__STORYBOOK_MODULE_TEST__,k=[`neutral`,`success`,`danger`,`warning`,`info`,`creative`,`dynamic`,`playful`],fe=[`sm`,`md`],A=({children:e})=>(0,E.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:e}),pe={title:`Components/Alert`,component:T,tags:[`autodocs`],argTypes:{color:{control:`select`,options:k},size:{control:`radio`,options:fe},ghost:{control:`boolean`},hasIcon:{control:`boolean`},onDismiss:{control:`boolean`},icon:{control:`select`,options:[`default`,`star`,`check`,`error`,`info`,`warning`],mapping:{default:void 0,star:o,check:i,error:s,info:u,warning:c}}},args:{color:`neutral`,size:`sm`,ghost:!1,hasIcon:!0},render:({onDismiss:e,...t})=>(0,E.jsx)(T,{...t,onDismiss:e?()=>{}:void 0,children:(0,E.jsxs)(T.Content,{children:[(0,E.jsx)(T.Title,{children:`Title`}),(0,E.jsx)(T.Paragraph,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]})}),parameters:{docs:{description:{component:"Alert surfaces feedback about outcomes or state changes — success, danger,\nwarning, or info. Compose it from `Alert.Content`, `Alert.Title`,\n`Alert.Paragraph`, `Alert.Actions`, and `Alert.Button` to build the layout\nyour flow needs. Eight colors, two sizes, and a ghost mode cover most\nfeedback scenarios."}}}},j={},M={args:{color:`neutral`}},N={args:{color:`success`}},P={args:{color:`danger`}},F={args:{color:`warning`}},I={args:{color:`info`}},L={args:{color:`creative`}},R={args:{color:`dynamic`}},z={args:{color:`playful`}},B={args:{color:`danger`,ghost:!0}},V={args:{size:`sm`}},H={args:{size:`md`}},U={args:{color:`warning`,onDismiss:ue()},argTypes:{onDismiss:{control:!1,action:`onDismiss`}},render:e=>(0,E.jsx)(T,{...e,children:(0,E.jsxs)(T.Content,{children:[(0,E.jsx)(T.Title,{children:`Title`}),(0,E.jsx)(T.Paragraph,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]})}),play:async({canvasElement:e,args:t})=>{let n=O(e),r=n.getByRole(`alert`);await D(r).toHaveAttribute(`data-slot`,`alert-root`),await D(r).toHaveAccessibleName(`Title`);let i=n.getByRole(`button`,{name:`Dismiss`});await de.click(i),await D(t.onDismiss).toHaveBeenCalledTimes(1)}},W={args:{color:`info`},render:({onDismiss:e,...t})=>(0,E.jsxs)(T,{...t,onDismiss:e?()=>{}:void 0,children:[(0,E.jsxs)(T.Content,{children:[(0,E.jsx)(T.Title,{children:`Update available`}),(0,E.jsx)(T.Paragraph,{children:`Reload to apply the latest version.`})]}),(0,E.jsx)(T.Actions,{children:(0,E.jsx)(T.Button,{onClick:()=>{},children:`Reload`})})]})},G={args:{color:`warning`,size:`md`,onDismiss:(()=>{})},render:({onDismiss:e,...t})=>(0,E.jsxs)(T,{...t,onDismiss:e?()=>{}:void 0,children:[(0,E.jsxs)(T.Content,{children:[(0,E.jsx)(T.Title,{children:`Session expiring`}),(0,E.jsx)(T.Paragraph,{children:`Renew to continue editing.`})]}),(0,E.jsx)(T.Actions,{children:(0,E.jsx)(T.Button,{onClick:()=>{},children:`Renew session`})})]})},K={args:{color:`info`,hasIcon:!1}},q={args:{color:`creative`,icon:a}},J={args:{color:`success`},render:({onDismiss:e,...t})=>(0,E.jsx)(T,{...t,onDismiss:e?()=>{}:void 0,children:(0,E.jsxs)(T.Content,{children:[(0,E.jsx)(T.Title,{children:`Formatted content`}),(0,E.jsx)(T.ParagraphHtml,{html:`Review the <strong>terms</strong> or <a href='https://example.com'>read the docs</a>.`})]})})},Y={args:{color:`info`,hasIcon:!1,size:`md`},render:({onDismiss:e,...t})=>(0,E.jsxs)(T,{...t,onDismiss:e?()=>{}:void 0,children:[(0,E.jsx)(T.Pictograms,{children:(0,E.jsxs)(`svg`,{viewBox:`0 0 64 64`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:[(0,E.jsx)(`circle`,{cx:`32`,cy:`32`,r:`28`,fill:`currentColor`,opacity:`0.15`}),(0,E.jsx)(`circle`,{cx:`32`,cy:`32`,r:`14`,fill:`currentColor`})]})}),(0,E.jsxs)(T.Content,{children:[(0,E.jsx)(T.Title,{children:`Pictogram example`}),(0,E.jsx)(T.Paragraph,{children:`Pictograms scale to 64×64px regardless of the configured size.`})]})]})},X={args:{color:`neutral`},render:({onDismiss:e,...t})=>(0,E.jsx)(T,{...t,onDismiss:e?()=>{}:void 0,children:(0,E.jsx)(T.Paragraph,{children:`This field is required.`})})},Z={args:{color:`success`},render:({onDismiss:e,...t})=>(0,E.jsx)(T,{...t,onDismiss:e?()=>{}:void 0,children:(0,E.jsxs)(T.Content,{children:[(0,E.jsx)(T.Title,{children:`Upload complete`}),(0,E.jsx)(T.Paragraph,{children:`12 documents were added to the policy.`}),(0,E.jsx)(`div`,{children:(0,E.jsx)(T.Button,{onClick:()=>{},children:`View documents`})})]})})},Q={render:()=>(0,E.jsx)(A,{children:k.map(e=>(0,E.jsx)(T,{color:e,children:(0,E.jsxs)(T.Content,{children:[(0,E.jsx)(T.Title,{children:e}),(0,E.jsxs)(T.Paragraph,{children:[`This is a `,e,` alert variant with the default icon.`]})]})},e))})},$={render:()=>(0,E.jsx)(A,{children:k.map(e=>(0,E.jsx)(T,{color:e,ghost:!0,children:(0,E.jsxs)(T.Content,{children:[(0,E.jsxs)(T.Title,{children:[e,` (ghost)`]}),(0,E.jsxs)(T.Paragraph,{children:[`This is a `,e,` ghost alert variant with the ghost icon color.`]})]})},e))})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source},description:{story:"Args-controlled playground. Toggle `color`, `size`, `ghost`, `hasIcon`, and\n`onDismiss` from the Controls panel to explore every visual combination.\n\n@summary Default args playground for Alert",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  }
}`,...M.parameters?.docs?.source},description:{story:`Neutral color is the default and carries no strong semantic signal — use it
for generic inline information.

@summary Neutral color (default)`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success'
  }
}`,...N.parameters?.docs?.source},description:{story:`Success color confirms a positive outcome — saved record, completed task,
healthy state.

@summary Success color for positive outcomes`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'danger'
  }
}`,...P.parameters?.docs?.source},description:{story:`Danger color flags errors and destructive outcomes that require the user's
attention.

@summary Danger color for errors and destructive outcomes`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning'
  }
}`,...F.parameters?.docs?.source},description:{story:`Warning color signals caution — the user should review before proceeding.

@summary Warning color for cautionary feedback`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info'
  }
}`,...I.parameters?.docs?.source},description:{story:`Info color highlights tips, hints, or secondary informational content.

@summary Info color for informational highlights`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'creative'
  }
}`,...L.parameters?.docs?.source},description:{story:`Creative color uses a brand-aligned purple accent for marketing or
onboarding moments.

@summary Creative brand accent color`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'dynamic'
  }
}`,...R.parameters?.docs?.source},description:{story:`Dynamic color uses a brand-aligned orange accent for activity or
momentum-focused content.

@summary Dynamic brand accent color`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'playful'
  }
}`,...z.parameters?.docs?.source},description:{story:`Playful color uses a brand-aligned pink accent for lighter or celebratory
content.

@summary Playful brand accent color`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'danger',
    ghost: true
  }
}`,...B.parameters?.docs?.source},description:{story:`Ghost mode removes the background and padding so the alert blends inline
with surrounding text (e.g., form field errors). Colors switch to the ghost
token ramp for lower visual weight.

@summary Ghost mode for inline, low-emphasis alerts`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...V.parameters?.docs?.source},description:{story:`Small size (default) uses compact padding and 14/12px typography — suitable
for inline alerts inside forms, tables, or cards.

@summary Small size (default, compact)`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...H.parameters?.docs?.source},description:{story:`Medium size uses larger padding and 18/14px typography — suitable for
standalone alerts in empty states, modals, or dedicated feedback regions.

@summary Medium size (prominent, standalone)`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    onDismiss: fn()
  },
  argTypes: {
    onDismiss: {
      control: false,
      action: 'onDismiss'
    }
  },
  render: args => <Alert {...args}>
            <Alert.Content>
                <Alert.Title>Title</Alert.Title>
                <Alert.Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert.Paragraph>
            </Alert.Content>
        </Alert>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByRole('alert');
    await expect(root).toHaveAttribute('data-slot', 'alert-root');
    await expect(root).toHaveAccessibleName('Title');
    const dismiss = canvas.getByRole('button', {
      name: 'Dismiss'
    });
    await userEvent.click(dismiss);
    await expect(args.onDismiss).toHaveBeenCalledTimes(1);
  }
}`,...U.parameters?.docs?.source},description:{story:`Dismissible alert. Providing \`onDismiss\` shows an icon-only close button
with \`aria-label="Dismiss"\` that inherits the alert's color.

@summary Alert with a dismiss button`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Content>
                <Alert.Title>Update available</Alert.Title>
                <Alert.Paragraph>Reload to apply the latest version.</Alert.Paragraph>
            </Alert.Content>
            <Alert.Actions>
                <Alert.Button onClick={() => {}}>Reload</Alert.Button>
            </Alert.Actions>
        </Alert>
}`,...W.parameters?.docs?.source},description:{story:'Alert with a trailing action pinned to the right edge. Use `Alert.Actions`\n+ `Alert.Button` for the common "message + action" pattern.\n\n@summary Alert with a trailing action button',...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    size: 'md',
    onDismiss: (() => {}) as never
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Content>
                <Alert.Title>Session expiring</Alert.Title>
                <Alert.Paragraph>Renew to continue editing.</Alert.Paragraph>
            </Alert.Content>
            <Alert.Actions>
                <Alert.Button onClick={() => {}}>Renew session</Alert.Button>
            </Alert.Actions>
        </Alert>
}`,...G.parameters?.docs?.source},description:{story:`Alert combining a dismiss button with a trailing action. Dismiss is pinned
to the right edge after the actions.

@summary Alert with both dismiss and action`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info',
    hasIcon: false
  }
}`,...K.parameters?.docs?.source},description:{story:`Alert rendered without the built-in color icon. Use \`hasIcon={false}\` when
the surrounding context already conveys the semantic intent.

@summary Alert without the default icon`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'creative',
    icon: LightbulbIcon
  }
}`,...q.parameters?.docs?.source},description:{story:`Alert with a caller-supplied icon that replaces the default color icon. The
custom icon receives the slot-computed className so color tokens still
apply.

@summary Alert with a custom icon override`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Content>
                <Alert.Title>Formatted content</Alert.Title>
                <Alert.ParagraphHtml html="Review the <strong>terms</strong> or <a href='https://example.com'>read the docs</a>." />
            </Alert.Content>
        </Alert>
}`,...J.parameters?.docs?.source},description:{story:`Alert rendering a paragraph from pre-sanitized HTML via
\`Alert.ParagraphHtml\`. The caller is responsible for sanitizing the HTML
string before passing it in.

@summary Alert paragraph rendered from HTML`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info',
    hasIcon: false,
    size: 'md'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Pictograms>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.15" />
                    <circle cx="32" cy="32" r="14" fill="currentColor" />
                </svg>
            </Alert.Pictograms>
            <Alert.Content>
                <Alert.Title>Pictogram example</Alert.Title>
                <Alert.Paragraph>
                    Pictograms scale to 64×64px regardless of the configured size.
                </Alert.Paragraph>
            </Alert.Content>
        </Alert>
}`,...Y.parameters?.docs?.source},description:{story:`Alert with a 64×64 pictogram in place of the inline icon. Use
\`Alert.Pictograms\` when the message benefits from a richer illustration.

@summary Alert with a pictogram illustration`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Paragraph>This field is required.</Alert.Paragraph>
        </Alert>
}`,...X.parameters?.docs?.source},description:{story:`Alert rendered with only a paragraph — no title. The root omits
\`aria-labelledby\` since there is no title to reference.

@summary Alert with only a paragraph body`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success'
  },
  render: ({
    onDismiss,
    ...args
  }) => <Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
            <Alert.Content>
                <Alert.Title>Upload complete</Alert.Title>
                <Alert.Paragraph>12 documents were added to the policy.</Alert.Paragraph>
                <div>
                    <Alert.Button onClick={() => {}}>View documents</Alert.Button>
                </div>
            </Alert.Content>
        </Alert>
}`,...Z.parameters?.docs?.source},description:{story:"Action button rendered inline below the paragraphs, inside\n`Alert.Content`, rather than pinned to the right via `Alert.Actions`.\n\n@summary Alert with actions placed below the content",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {COLORS.map(color => <Alert key={color} color={color}>
                    <Alert.Content>
                        <Alert.Title>{color}</Alert.Title>
                        <Alert.Paragraph>
                            This is a {color} alert variant with the default icon.
                        </Alert.Paragraph>
                    </Alert.Content>
                </Alert>)}
        </Stack>
}`,...Q.parameters?.docs?.source},description:{story:`All eight colors in their primary (non-ghost) treatment, stacked for
comparison. Each alert uses the built-in icon mapping for its color.

@summary Visual comparison of all Alert colors`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
            {COLORS.map(color => <Alert key={color} color={color} ghost>
                    <Alert.Content>
                        <Alert.Title>{color} (ghost)</Alert.Title>
                        <Alert.Paragraph>
                            This is a {color} ghost alert variant with the ghost icon color.
                        </Alert.Paragraph>
                    </Alert.Content>
                </Alert>)}
        </Stack>
}`,...$.parameters?.docs?.source},description:{story:`All eight colors in ghost mode, stacked for comparison. Ghost alerts use a
lower-weight token ramp and omit background + padding.

@summary Visual comparison of all Alert colors in ghost mode`,...$.parameters?.docs?.description}}},me=[`Default`,`Neutral`,`Success`,`Danger`,`Warning`,`Info`,`Creative`,`Dynamic`,`Playful`,`Ghost`,`SmallSize`,`MediumSize`,`WithDismiss`,`WithActions`,`WithDismissAndAction`,`WithoutIcon`,`WithCustomIcon`,`WithParagraphHtml`,`WithPictograms`,`OnlyParagraph`,`WithActionsBelow`,`AllColors`,`AllGhostColors`]}))();export{Q as AllColors,$ as AllGhostColors,L as Creative,P as Danger,j as Default,R as Dynamic,B as Ghost,I as Info,H as MediumSize,M as Neutral,X as OnlyParagraph,z as Playful,V as SmallSize,N as Success,F as Warning,W as WithActions,Z as WithActionsBelow,q as WithCustomIcon,U as WithDismiss,G as WithDismissAndAction,J as WithParagraphHtml,Y as WithPictograms,K as WithoutIcon,me as __namedExportsOrder,pe as default};