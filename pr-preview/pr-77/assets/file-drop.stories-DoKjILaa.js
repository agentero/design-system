import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Bu2K1ly6.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{n as o,t as s}from"./lib-Dkaf_tmd.js";import{i as c,t as l}from"./dist-DcgLT_tu.js";import{t as u}from"./button-DIYUrx4Y.js";import{t as d}from"./button-CBU4_3H6.js";import{n as f,t as p}from"./alert-CPNqh8g4.js";var m=e((()=>{f()})),h,g,_,v,y,ee,b,x,S,C,w,T,E,D,O,k,te,A,ne=e((()=>{h=t(n(),1),c(),a(),s(),d(),g=r(),_=i({slots:{root:`flex flex-col gap-3`,zone:[`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border-default-base-primary`,`px-6 py-10 text-center text-sm text-text-default-base-secondary transition-colors`,`data-dragging:bg-bg-default-base-secondary`,`data-invalid:border-border-input-destructive`,`data-disabled:pointer-events-none data-disabled:opacity-50`],trigger:[`cursor-pointer rounded-sm font-semibold text-text-default-base-primary underline underline-offset-2`,`outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary`,`disabled:cursor-not-allowed`],list:`flex flex-col gap-2`,item:`flex items-center gap-3 rounded-md border border-border-default-base-primary px-3 py-2`,preview:`flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-bg-default-base-secondary`}}),v=_(),y=e=>`url`in e,ee=(e,t=``)=>{let n=t.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean);if(n.length===0)return!0;let r=e.name.toLowerCase(),i=e.type.toLowerCase();return n.some(e=>e.startsWith(`.`)?r.endsWith(e):e.endsWith(`/*`)?i.startsWith(e.slice(0,-1)):i===e)},b=(0,h.createContext)(null),x=()=>{let e=(0,h.use)(b);if(!e)throw Error(`useFileDrop must be used within a FileDrop`);return e},S=e=>e.dataTransfer.types.includes(`Files`),C=({className:e,children:t,onClick:n,onDragEnter:r,onDragOver:i,onDragLeave:a,onDrop:s,...c})=>{let{disabled:l,invalid:u,addFiles:d,openFileDialog:f}=x(),[p,m]=(0,h.useState)(!1),_=(0,h.useRef)(0);return(0,g.jsx)(`div`,{"data-slot":`file-drop-zone`,"data-dragging":p||void 0,"data-invalid":u||void 0,"data-disabled":l||void 0,className:o(v.zone(),e),onClick:e=>{n?.(e),!e.defaultPrevented&&(e.target.closest(`button, a, input, label`)||f())},onDragEnter:e=>{r?.(e),!e.defaultPrevented&&(e.preventDefault(),!(l||!S(e))&&(_.current+=1,m(!0)))},onDragOver:e=>{i?.(e),e.preventDefault()},onDragLeave:e=>{a?.(e),e.preventDefault(),_.current=Math.max(0,_.current-1),_.current===0&&m(!1)},onDrop:e=>{s?.(e),_.current=0,m(!1),!e.defaultPrevented&&(e.preventDefault(),l||d(e.dataTransfer.files))},...c,children:t})},w=({asChild:e,className:t,onClick:n,...r})=>{let{openFileDialog:i,disabled:a}=x();return(0,g.jsx)(e?l:`button`,{"data-slot":`file-drop-trigger`,className:e?t:o(v.trigger(),t),onClick:e=>{n?.(e),e.defaultPrevented||i()},...e?{"aria-disabled":a||void 0,"data-disabled":a||void 0}:{type:`button`,disabled:a},...r})},T=({className:e,onChange:t,ref:n,...r})=>{let{inputRef:i,accept:a,multiple:s,disabled:c,invalid:l,addFiles:u}=x();return(0,g.jsx)(`input`,{ref:e=>{i.current=e,typeof n==`function`?n(e):n&&(n.current=e)},type:`file`,accept:a,multiple:s,disabled:c,"aria-invalid":l||void 0,tabIndex:-1,"data-slot":`file-drop-input`,className:o(`sr-only`,e),onChange:e=>{t?.(e),u(e.target.files),e.target.value=``},...r})},E=({className:e,...t})=>(0,g.jsx)(`ul`,{"data-slot":`file-drop-list`,className:o(v.list(),e),...t}),D=({className:e,...t})=>(0,g.jsx)(`li`,{"data-slot":`file-drop-item`,className:o(v.item(),e),...t}),O=({file:e,onClick:t,...n})=>{let{removeFile:r,disabled:i}=x();return(0,g.jsx)(u,{type:`button`,variant:`ghost`,size:`sm`,iconOnly:!0,disabled:i,"data-slot":`file-drop-remove`,onClick:n=>{if(t?.(n),n.defaultPrevented)return;let i=n.currentTarget.closest(`[data-slot="file-drop"]`),a=(i?Array.from(i.querySelectorAll(`[data-slot="file-drop-remove"]`)):[]).indexOf(n.currentTarget);r(e),requestAnimationFrame(()=>{if(!i)return;let e=Array.from(i.querySelectorAll(`[data-slot="file-drop-remove"]`));(e[Math.min(a,e.length-1)]??i.querySelector(`[data-slot="file-drop-trigger"]`))?.focus()})},...n})},k=e=>{let[t,n]=(0,h.useState)();return(0,h.useEffect)(()=>{if(y(e)||!e.type.startsWith(`image/`)){n(void 0);return}let t=URL.createObjectURL(e);return n(t),()=>URL.revokeObjectURL(t)},[e]),y(e)?e.url:t},te=({file:e,className:t,...n})=>{let r=k(e);return(0,g.jsx)(`div`,{"data-slot":`file-drop-preview`,className:o(v.preview(),t),...n,children:r?(0,g.jsx)(`img`,{src:r,alt:``,className:`size-full object-cover`}):(0,g.jsx)(`span`,{className:`truncate px-1 text-2xs text-text-default-base-tertiary`,children:e.name})})},A=({value:e,onValueChange:t,accept:n,maxSize:r,maxFiles:i,multiple:a=!1,disabled:s=!1,invalid:c=!1,onReject:l,className:u,children:d,...f})=>{let p=(0,h.useRef)(null),[m,_]=(0,h.useState)(``);return(0,g.jsx)(b,{value:{value:e,disabled:s,invalid:c,multiple:a,accept:n,inputRef:p,openFileDialog:()=>{s||p.current?.click()},removeFile:n=>{t(e.filter(e=>e!==n)),_(`${n.name} removed`)},addFiles:o=>{if(s||!o)return;let c=[],u=[];for(let e of Array.from(o))ee(e,n)?r!==void 0&&e.size>r?u.push({file:e,reason:`size`}):c.push(e):u.push({file:e,reason:`type`});let d=a?e:[],f=Math.max(0,(a?i??1/0:1)-d.length),p=c.slice(0,f);for(let e of c.slice(f))u.push({file:e,reason:`count`});p.length>0&&(t([...d,...p]),_(`${p.map(e=>e.name).join(`, `)} added`)),u.length>0&&l?.(u)}},children:(0,g.jsxs)(`div`,{"data-slot":`file-drop`,className:o(v.root(),u),...f,children:[d,(0,g.jsx)(`span`,{role:`status`,"data-slot":`file-drop-status`,className:`sr-only`,children:m})]})})},A.Zone=C,A.Trigger=w,A.Input=T,A.List=E,A.Item=D,A.Remove=O,A.Preview=te;try{_.displayName=`fileDropRecipe`,_.__docgenInfo={description:``,displayName:`fileDropRecipe`,props:{class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{A.displayName=`FileDrop`,A.__docgenInfo={description:"Composable, controlled, form-agnostic drag-and-drop file picker. Validation\n(`accept`/`maxSize`/`maxFiles`) runs on add and reports through `onReject`.",displayName:`FileDrop`,props:{value:{defaultValue:null,description:``,name:`value`,required:!0,type:{name:`FileDropFile[]`}},onValueChange:{defaultValue:null,description:``,name:`onValueChange`,required:!0,type:{name:`(files: FileDropFile[]) => void`}},accept:{defaultValue:null,description:"Comma-separated: extensions (`.pdf`), wildcard (`image/*`), or exact MIME.",name:`accept`,required:!1,type:{name:`string`}},maxSize:{defaultValue:null,description:`Per-file max size in bytes.`,name:`maxSize`,required:!1,type:{name:`number`}},maxFiles:{defaultValue:null,description:``,name:`maxFiles`,required:!1,type:{name:`number`}},multiple:{defaultValue:{value:`false`},description:``,name:`multiple`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},description:``,name:`disabled`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:"Reflects an external error (e.g. form field) via `data-invalid` and `aria-invalid`.",name:`invalid`,required:!1,type:{name:`boolean`}},onReject:{defaultValue:null,description:``,name:`onReject`,required:!1,type:{name:`((rejections: FileDropRejection[]) => void)`}}}}}catch{}try{A.Zone.displayName=`FileDrop.Zone`,A.Zone.__docgenInfo={description:`Drop target; clicking it opens the file dialog (nested interactive elements keep their own behavior).`,displayName:`FileDrop.Zone`,props:{}}}catch{}try{A.Trigger.displayName=`FileDrop.Trigger`,A.Trigger.__docgenInfo={description:``,displayName:`FileDrop.Trigger`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}}}}}catch{}try{A.Input.displayName=`FileDrop.Input`,A.Input.__docgenInfo={description:`Hidden file input (out of the tab order — the Trigger is the keyboard path); give it an accessible name.`,displayName:`FileDrop.Input`,props:{}}}catch{}try{A.List.displayName=`FileDrop.List`,A.List.__docgenInfo={description:``,displayName:`FileDrop.List`,props:{}}}catch{}try{A.Item.displayName=`FileDrop.Item`,A.Item.__docgenInfo={description:``,displayName:`FileDrop.Item`,props:{}}}catch{}try{A.Remove.displayName=`FileDrop.Remove`,A.Remove.__docgenInfo={description:"Removes `file` (must be the same reference held in `value`). A DS `Button`\n(ghost/sm) — pass an `aria-label` and an icon element child.",displayName:`FileDrop.Remove`,props:{children:{defaultValue:null,description:`Content rendered inside the Button. Accepts a text label, icon elements,
or any mix of both. Icon-only children switch the Button to a square
aspect ratio and trigger the icon-only layout.

When \`asChild\` is set, the single child element is merged with Button's
props and styles; auto-detection of icon-only children is skipped — use
the \`iconOnly\` prop to opt into the square icon-only layout.

Not supported with \`variant="link"\` when children resolve to icons only
— passing both logs a dev-only warning (silent in production).`,name:`children`,required:!1,type:{name:`ReactNode`}},variant:{defaultValue:null,description:"Visual hierarchy. Defaults to `'primary'`.\n- `primary` — main call-to-action; use once per view.\n- `secondary` — alternative action alongside a primary button.\n- `tertiary` — low-emphasis action, subtle background.\n- `ghost` — minimal background; low-emphasis action in dense layouts.\n- `link` — inline text-style action; no padding or background.",name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"link"`},{value:`"primary"`},{value:`"secondary"`},{value:`"tertiary"`},{value:`"ghost"`}]}},size:{defaultValue:null,description:"Control size. Defaults to `'sm'`.\n- `xs` (24px) — dense toolbars, compact inline actions.\n- `sm` (32px) — standard usage in forms and cards.\n- `md` (40px) — prominent actions in modals or feature rows.\n- `lg` (48px) — hero CTAs and full-width mobile actions.",name:`size`,required:!1,type:{name:`enum`,value:[{value:`"xs"`},{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},status:{defaultValue:null,description:`Semantic status override. Set to \`'danger'\` for destructive actions
(delete, remove, disconnect) — applies the destructive color treatment
across all variants.`,name:`status`,required:!1,type:{name:`enum`,value:[{value:`"danger"`}]}},loading:{defaultValue:null,description:'When `true`, shows a spinner overlay and forces the button into a disabled\nstate to block further interaction. Not supported with `variant="link"` —\npassing both logs a dev-only warning (silent in production).',name:`loading`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},description:"Disables interaction and applies the disabled color treatment. Applied\nvia className so it still affects anchors rendered via `asChild`, which\nignore the native `disabled` attribute — in that case `aria-disabled`\nand `data-disabled` are forwarded to the child element instead.",name:`disabled`,required:!1,type:{name:`boolean`}},iconOnly:{defaultValue:null,description:"Forces the icon-only layout (square aspect ratio, no min-width). Useful\nwith `asChild` where the single wrapper child prevents auto-detection.\nFor non-`asChild` usage, prefer passing icon elements as children — the\nicon-only layout is applied automatically.",name:`iconOnly`,required:!1,type:{name:`boolean`}},rounded:{defaultValue:null,description:"When `true`, renders a fully pill-shaped button (rounded-full). Otherwise\nuses the variant's default corner radius.",name:`rounded`,required:!1,type:{name:`boolean`}},align:{defaultValue:null,description:"Justifies children along the main axis. Defaults to `'center'`.\nUse `'justify'` to push leading and trailing icons to the edges.",name:`align`,required:!1,type:{name:`enum`,value:[{value:`"center"`},{value:`"start"`},{value:`"end"`},{value:`"justify"`}]}},fitContent:{defaultValue:null,description:"When `true`, removes the per-size `min-width` floor so the button hugs\nits content. Useful for inline actions inside tight containers.",name:`fitContent`,required:!1,type:{name:`boolean`}},ref:{defaultValue:null,description:"Ref forwarded to the underlying element. Typed as a union covering both\n`<button>` and `<a>` because `asChild` lets consumers render either tag\n(or any forwardRef component) through Radix's `Slot`.",name:`ref`,required:!1,type:{name:`Ref<HTMLButtonElement | HTMLAnchorElement>`}},asChild:{defaultValue:null,description:"When `true`, Button clones its single child element and merges\nButton's `className`, `ref`, and event handlers onto it rather than\nrendering a `<button>`. Use this to style any element (a plain `<a>`,\na framework `Link`, a `React.forwardRef` component) as a Button.\n\nWhen combined with `disabled`, Button emits `aria-disabled` and\n`data-disabled` on the child instead of the native `disabled`\nattribute (which is ignored by non-form-control elements).",name:`asChild`,required:!1,type:{name:`boolean`}},file:{defaultValue:null,description:``,name:`file`,required:!0,type:{name:`FileDropFile`}}}}}catch{}try{A.Preview.displayName=`FileDrop.Preview`,A.Preview.__docgenInfo={description:'Opt-in decorative thumbnail (`alt=""`) — pair it with visible file name text; falls back to the name.',displayName:`FileDrop.Preview`,props:{file:{defaultValue:null,description:``,name:`file`,required:!0,type:{name:`FileDropFile`}}}}}catch{}})),j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,re;e((()=>{j=t(n(),1),m(),d(),ne(),M=r(),{expect:N,userEvent:P,within:F}=__STORYBOOK_MODULE_TEST__,I=()=>(0,M.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,M.jsx)(`path`,{d:`M12 15V4m0 0L8 8m4-4 4 4M5 17v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),L=()=>(0,M.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,M.jsx)(`path`,{d:`M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z`})}),R=({multiple:e,accept:t,maxSize:n,maxFiles:r})=>{let[i,a]=(0,j.useState)([]),[o,s]=(0,j.useState)([]);return(0,M.jsxs)(`div`,{className:`max-w-md`,children:[(0,M.jsxs)(A,{value:i,onValueChange:e=>{a(e),s([])},multiple:e,accept:t,maxSize:n,maxFiles:r,onReject:s,children:[(0,M.jsxs)(A.Zone,{children:[(0,M.jsx)(I,{}),(0,M.jsxs)(`p`,{children:[`Drag & drop or `,(0,M.jsx)(A.Trigger,{children:`browse`})]}),(0,M.jsx)(A.Input,{"aria-label":`Upload file`})]}),i.length>0&&(0,M.jsx)(A.List,{children:i.map((e,t)=>(0,M.jsxs)(A.Item,{children:[(0,M.jsx)(A.Preview,{file:e}),(0,M.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-sm`,children:e.name}),(0,M.jsx)(A.Remove,{file:e,"aria-label":`Remove ${e.name}`,children:(0,M.jsx)(L,{})})]},t))})]}),o.length>0&&(0,M.jsx)(p,{color:`danger`,ghost:!0,className:`mt-2`,children:(0,M.jsx)(p.Content,{children:o.map(({file:e,reason:t},n)=>(0,M.jsxs)(p.Paragraph,{children:[e.name,` `,z[t]]},n))})})]})},z={type:`isn't an accepted file type`,size:`is too large`,count:`exceeds the file limit`},B={title:`Components/FileDrop`,component:A,tags:[`autodocs`],args:{value:[],onValueChange:()=>{}},parameters:{docs:{description:{component:`FileDrop is a composable drag-and-drop file picker. Compose the drop zone,
trigger, hidden input, and the selected-file list from its sub-components;
it stays controlled and form-agnostic.`}}}},V=`<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#818cf8"/><circle cx="56" cy="24" r="14" fill="#c7d2fe"/><path d="M0 62l24-18 20 14 16-10 20 14v18H0z" fill="#4f46e5"/></svg>`,H=e=>new File([V],e,{type:`image/svg+xml`}),U=`%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 42 >>
stream
BT /F1 24 Tf 72 720 Td (Sample PDF) Tj ET
endstream
endobj
trailer
<< /Root 1 0 R >>`,W=e=>new File([U],e,{type:`application/pdf`}),G=e=>{let[t,n]=(0,j.useState)();return(0,j.useEffect)(()=>{if(!e||`url`in e){n(void 0);return}let t=URL.createObjectURL(e);return n(t),()=>URL.revokeObjectURL(t)},[e]),e&&`url`in e?e.url:t},K=()=>{let[e,t]=(0,j.useState)([]),[n]=e,r=G(n),i=r?`${r}#toolbar=1&navpanes=0&view=FitH`:void 0;return(0,M.jsx)(`div`,{className:`max-w-2xl`,children:(0,M.jsxs)(A,{value:e,onValueChange:t,accept:`application/pdf,image/*`,children:[(0,M.jsx)(A.Input,{"aria-label":`Upload document`}),n?(0,M.jsxs)(`div`,{className:`overflow-hidden rounded-md border border-border-default-base-primary`,children:[(0,M.jsxs)(`div`,{className:`flex items-center justify-between gap-4 border-b border-border-default-base-primary px-4 py-3`,children:[(0,M.jsx)(`span`,{className:`truncate text-sm text-text-default-base-secondary`,children:n.name}),(0,M.jsx)(A.Trigger,{asChild:!0,children:(0,M.jsx)(u,{variant:`secondary`,size:`sm`,children:`Replace file`})})]}),(0,M.jsx)(`iframe`,{title:n.name,src:i,className:`block h-100 w-full border-0`})]}):(0,M.jsxs)(A.Zone,{children:[(0,M.jsx)(I,{}),(0,M.jsxs)(`p`,{children:[`Drag & drop or `,(0,M.jsx)(A.Trigger,{children:`browse`})]})]})]})})},q={render:()=>(0,M.jsx)(R,{accept:`image/*`}),play:({canvasElement:e})=>{let t=F(e);N(t.getByText(/drag & drop/i)).toBeInTheDocument(),N(t.getByRole(`button`,{name:`browse`})).toBeInTheDocument(),N(t.getByLabelText(`Upload file`)).toBeInTheDocument()}},J={render:()=>(0,M.jsx)(R,{accept:`image/*`}),play:async({canvasElement:e})=>{let t=F(e),n=t.getByLabelText(`Upload file`);await P.upload(n,H(`logo.svg`)),N(await t.findByText(`logo.svg`)).toBeInTheDocument(),N(t.getByRole(`button`,{name:`Remove logo.svg`})).toBeInTheDocument(),await P.upload(n,H(`replacement.svg`)),N(await t.findByText(`replacement.svg`)).toBeInTheDocument(),N(t.queryByText(`logo.svg`)).not.toBeInTheDocument()}},Y={render:()=>(0,M.jsx)(R,{multiple:!0,accept:`image/*`}),play:async({canvasElement:e})=>{let t=F(e),n=t.getByLabelText(`Upload file`);await P.upload(n,[H(`a.svg`),H(`b.svg`)]),await P.upload(n,H(`c.svg`)),N(await t.findByText(`c.svg`)).toBeInTheDocument(),N(t.getByText(`a.svg`)).toBeInTheDocument(),N(t.getByText(`b.svg`)).toBeInTheDocument()}},X={render:()=>(0,M.jsx)(R,{accept:`image/*`,maxSize:100}),play:async({canvasElement:e})=>{let t=F(e),n=t.getByLabelText(`Upload file`);await P.upload(n,H(`too-big.svg`)),N(await t.findByRole(`alert`)).toHaveTextContent(/too-big\.svg is too large/i),await P.setup({applyAccept:!1}).upload(n,W(`report.pdf`)),N(await t.findByRole(`alert`)).toHaveTextContent(/report\.pdf isn't an accepted file type/i),N(t.queryByRole(`button`,{name:/remove/i})).not.toBeInTheDocument()}},Z={render:()=>(0,M.jsxs)(`div`,{className:`flex max-w-md flex-col gap-4`,children:[(0,M.jsx)(A,{value:[],onValueChange:()=>{},invalid:!0,children:(0,M.jsxs)(A.Zone,{children:[(0,M.jsx)(`p`,{children:`Invalid`}),(0,M.jsx)(A.Input,{"aria-label":`Invalid upload`})]})}),(0,M.jsx)(A,{value:[],onValueChange:()=>{},disabled:!0,children:(0,M.jsxs)(A.Zone,{children:[(0,M.jsx)(`p`,{children:`Disabled`}),(0,M.jsx)(A.Input,{"aria-label":`Disabled upload`})]})})]}),play:({canvasElement:e})=>{let t=F(e);N(t.getByText(`Invalid`).closest(`[data-slot="file-drop-zone"]`)).toHaveAttribute(`data-invalid`),N(t.getByText(`Disabled`).closest(`[data-slot="file-drop-zone"]`)).toHaveAttribute(`data-disabled`),N(t.getByLabelText(`Invalid upload`)).toHaveAttribute(`aria-invalid`,`true`)}},Q={render:()=>(0,M.jsx)(K,{}),play:({canvasElement:e})=>{let t=F(e);N(t.getByText(/drag & drop/i)).toBeInTheDocument(),N(t.getByRole(`button`,{name:`browse`})).toBeInTheDocument(),N(t.getByLabelText(`Upload document`)).toBeInTheDocument()}},$={render:()=>(0,M.jsx)(K,{}),play:async({canvasElement:e})=>{let t=F(e),n=t.getByLabelText(`Upload document`);await P.upload(n,W(`policy.pdf`)),N((await t.findByTitle(`policy.pdf`)).tagName).toBe(`IFRAME`)}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Demo accept="image/*" />,
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/drag & drop/i)).toBeInTheDocument();
    expect(canvas.getByRole('button', {
      name: 'browse'
    })).toBeInTheDocument();
    expect(canvas.getByLabelText('Upload file')).toBeInTheDocument();
  }
}`,...q.parameters?.docs?.source},description:{story:`@summary Empty drop zone — the initial state before any file is selected`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Demo accept="image/*" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Upload file');
    await userEvent.upload(input, imageFile('logo.svg'));
    expect(await canvas.findByText('logo.svg')).toBeInTheDocument();
    expect(canvas.getByRole('button', {
      name: 'Remove logo.svg'
    })).toBeInTheDocument();
    await userEvent.upload(input, imageFile('replacement.svg'));
    expect(await canvas.findByText('replacement.svg')).toBeInTheDocument();
    expect(canvas.queryByText('logo.svg')).not.toBeInTheDocument();
  }
}`,...J.parameters?.docs?.source},description:{story:`@summary Single-file upload — selecting replaces the current file`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Demo multiple accept="image/*" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Upload file');
    await userEvent.upload(input, [imageFile('a.svg'), imageFile('b.svg')]);
    await userEvent.upload(input, imageFile('c.svg'));
    expect(await canvas.findByText('c.svg')).toBeInTheDocument();
    expect(canvas.getByText('a.svg')).toBeInTheDocument();
    expect(canvas.getByText('b.svg')).toBeInTheDocument();
  }
}`,...Y.parameters?.docs?.source},description:{story:`@summary Multiple-file selection (files accumulate across selections)`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Demo accept="image/*" maxSize={100} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Upload file');
    await userEvent.upload(input, imageFile('too-big.svg'));
    expect(await canvas.findByRole('alert')).toHaveTextContent(/too-big\\.svg is too large/i);
    const user = userEvent.setup({
      applyAccept: false
    });
    await user.upload(input, pdfFile('report.pdf'));
    expect(await canvas.findByRole('alert')).toHaveTextContent(/report\\.pdf isn't an accepted file type/i);
    expect(canvas.queryByRole('button', {
      name: /remove/i
    })).not.toBeInTheDocument();
  }
}`,...X.parameters?.docs?.source},description:{story:"@summary Files over `maxSize` or outside `accept` are rejected and reported through `onReject`",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex max-w-md flex-col gap-4">
            <FileDrop value={[]} onValueChange={() => {}} invalid>
                <FileDrop.Zone>
                    <p>Invalid</p>
                    <FileDrop.Input aria-label="Invalid upload" />
                </FileDrop.Zone>
            </FileDrop>
            <FileDrop value={[]} onValueChange={() => {}} disabled>
                <FileDrop.Zone>
                    <p>Disabled</p>
                    <FileDrop.Input aria-label="Disabled upload" />
                </FileDrop.Zone>
            </FileDrop>
        </div>,
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Invalid').closest('[data-slot="file-drop-zone"]')).toHaveAttribute('data-invalid');
    expect(canvas.getByText('Disabled').closest('[data-slot="file-drop-zone"]')).toHaveAttribute('data-disabled');
    expect(canvas.getByLabelText('Invalid upload')).toHaveAttribute('aria-invalid', 'true');
  }
}`,...Z.parameters?.docs?.source},description:{story:`@summary Invalid and disabled zone states`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <DocumentDemo />,
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/drag & drop/i)).toBeInTheDocument();
    expect(canvas.getByRole('button', {
      name: 'browse'
    })).toBeInTheDocument();
    expect(canvas.getByLabelText('Upload document')).toBeInTheDocument();
  }
}`,...Q.parameters?.docs?.source},description:{story:`@summary Empty document drop zone — the initial state of the PDF upload`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <DocumentDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Upload document');
    await userEvent.upload(input, pdfFile('policy.pdf'));
    const frame = await canvas.findByTitle('policy.pdf');
    expect(frame.tagName).toBe('IFRAME');
  }
}`,...$.parameters?.docs?.source},description:{story:`@summary Document upload with the legacy-style preview (header + Replace file + iframe) composed in the consumer`,...$.parameters?.docs?.description}}},re=[`Default`,`Uploaded`,`Multiple`,`Rejects`,`States`,`DocumentEmpty`,`Document`]}))();export{q as Default,$ as Document,Q as DocumentEmpty,Y as Multiple,X as Rejects,Z as States,J as Uploaded,re as __namedExportsOrder,B as default};