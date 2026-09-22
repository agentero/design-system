import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dist-C8AlzbfS.js";import{n as i,t as a}from"./utils-nsk-j2e0.js";import{n as o,r as s}from"./input-cArlGeES.js";var c,l,u;function d(){return(d=e((()=>{r(),i(),o(),c=t(),l=n({extend:s,base:`block resize-y`,variants:{size:{sm:`h-auto min-h-19 py-1`,md:`h-auto min-h-21 py-2`,lg:`h-auto min-h-24 py-2.75`}},defaultVariants:{size:`md`}}),u=e=>{let{className:t,size:n,...r}=e;return(0,c.jsx)(`textarea`,{"data-slot":`textarea`,"data-size":n,className:a(l({size:n}),t),...r})},u.displayName=`TextArea`;try{l.displayName=`textAreaRecipe`,l.__docgenInfo={description:"Extends `inputRecipe`, trading Input's fixed height for a minimum one. The\nhandle drags vertically only, so the control can never break its column.",displayName:`textAreaRecipe`,filePath:`/home/runner/work/design-system/design-system/src/textarea/textarea.tsx`,methods:[],props:{size:{defaultValue:null,description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "md" | "lg"`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the TextArea component styles`}}}catch{}try{u.displayName=`TextArea`,u.__docgenInfo={description:"TextArea is the design system's multi-line text control: Input's skin, states\nand sizes on a single `<textarea>` with nothing around it, so the native\nresize handle and scrollbar keep working. Pair it with\n[Label](?path=/docs/components-label--docs) the way you pair an Input.\n\nIt wires nothing itself — `id`, `aria-describedby` and `aria-invalid` are the\nfield owner's job. The invalid state has no prop of its own: `aria-invalid`\ndrives the destructive border, the same as Input. Every `<textarea>` attribute\nis accepted and forwarded, so `placeholder`, `required`, `disabled`,\n`readOnly`, `maxLength` and the rest work as in plain HTML; `rows` raises the\nresting height when three rows are not enough. It holds no value either, so a\ncharacter counter belongs to whoever owns it.",displayName:`TextArea`,filePath:`/home/runner/work/design-system/design-system/src/textarea/textarea.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/textarea/textarea.tsx`,name:`TypeLiteral`}],description:"Defaults to `'md'`. The first row measures one Input of the same size and\nthree rows show at rest: `sm` 76px, `md` 84px, `lg` 96px (`lg` also raises\nthe text to `base` and the radius to `lg`).",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`TextAreaSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}},tags:{summary:`Base multi-line text control sharing Input's skin, states and sizes`,example:`<Label htmlFor="notes">Notes</Label>
<TextArea id="notes" placeholder="Anything the underwriter should know" />`}}}catch{}})))()}var f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{d(),f=t(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/TextArea`,component:u,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},rows:{control:`number`},placeholder:{control:`text`},maxLength:{control:`number`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{placeholder:`Anything the underwriter should know`,"aria-label":`Notes`},decorators:[e=>(0,f.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,f.jsx)(e,{})})],parameters:{docs:{description:{component:"TextArea is the base multi-line text control, with Input's skin, sizes and\nstates. It wires nothing on its own: `id`, `aria-invalid` and\n`aria-describedby` are plain props, set by whoever owns the field."}}}},_={play:async({canvasElement:e})=>{let t=h(e).getByRole(`textbox`,{name:`Notes`});await p(t).toHaveAttribute(`data-slot`,`textarea`),await p(getComputedStyle(t).resize).toBe(`vertical`),await m.type(t,`Roof replaced in 2024.{enter}No prior claims.`),await p(t).toHaveValue(`Roof replaced in 2024.
No prior claims.`)}},v={render:e=>(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,f.jsx)(u,{...e,size:`sm`,"aria-label":`Small`,placeholder:`sm — 76px, three rows`}),(0,f.jsx)(u,{...e,size:`md`,"aria-label":`Medium`,placeholder:`md — 84px, three rows`}),(0,f.jsx)(u,{...e,size:`lg`,"aria-label":`Large`,placeholder:`lg — 96px, three rows`})]}),play:async({canvasElement:e})=>{let t=h(e),n=e=>t.getByRole(`textbox`,{name:e}).getBoundingClientRect().height;await p(n(`Small`)).toBe(76),await p(n(`Medium`)).toBe(84),await p(n(`Large`)).toBe(96),await p(t.getByRole(`textbox`,{name:`Large`})).toHaveAttribute(`data-size`,`lg`)}},y={args:{rows:6,placeholder:`Six rows visible before scrolling`},play:async({canvasElement:e})=>{let t=h(e).getByRole(`textbox`,{name:`Notes`});await p(t).toHaveAttribute(`rows`,`6`),await p(t.getBoundingClientRect().height).toBeGreaterThan(84)}},b={args:{"aria-label":`Reason`,"aria-invalid":!0,"aria-describedby":`reason-error`,defaultValue:`n/a`},render:e=>(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`0.25rem`},children:[(0,f.jsx)(u,{...e}),(0,f.jsx)(`span`,{id:`reason-error`,children:`Tell us why you are cancelling.`})]}),play:async({canvasElement:e})=>{let t=h(e).getByRole(`textbox`,{name:`Reason`});await p(t).toHaveAttribute(`aria-invalid`,`true`),await p(t).toHaveAccessibleDescription(`Tell us why you are cancelling.`)}},x={args:{disabled:!0,defaultValue:`Cannot be edited`},play:async({canvasElement:e})=>{let t=h(e).getByRole(`textbox`,{name:`Notes`});await p(t).toBeDisabled(),await m.type(t,`nope`),await p(t).toHaveValue(`Cannot be edited`)}},S={args:{readOnly:!0,defaultValue:`Copy me, but do not change me`},play:async({canvasElement:e})=>{let t=h(e).getByRole(`textbox`,{name:`Notes`});await p(t).toHaveAttribute(`readonly`),await p(t).not.toBeDisabled()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toHaveAttribute('data-slot', 'textarea');
    await expect(getComputedStyle(textarea).resize).toBe('vertical');
    await userEvent.type(textarea, 'Roof replaced in 2024.{enter}No prior claims.');
    await expect(textarea).toHaveValue('Roof replaced in 2024.\\nNo prior claims.');
  }
}`,..._.parameters?.docs?.source},description:{story:`The default control at \`md\`: three rows at rest and a vertical resize handle
the user can drag to make it taller.

@summary Default standalone text area`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <TextArea {...args} size="sm" aria-label="Small" placeholder="sm — 76px, three rows" />
            <TextArea {...args} size="md" aria-label="Medium" placeholder="md — 84px, three rows" />
            <TextArea {...args} size="lg" aria-label="Large" placeholder="lg — 96px, three rows" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const height = (name: string) => canvas.getByRole('textbox', {
      name
    }).getBoundingClientRect().height;
    await expect(height('Small')).toBe(76);
    await expect(height('Medium')).toBe(84);
    await expect(height('Large')).toBe(96);
    await expect(canvas.getByRole('textbox', {
      name: 'Large'
    })).toHaveAttribute('data-size', 'lg');
  }
}`,...v.parameters?.docs?.source},description:{story:`The three sizes mirror Input's: the first row measures one Input of the same
size and the minimum height shows three rows.

@summary The three sizes, three rows tall at rest`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 6,
    placeholder: 'Six rows visible before scrolling'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toHaveAttribute('rows', '6');
    await expect(textarea.getBoundingClientRect().height).toBeGreaterThan(84);
  }
}`,...y.parameters?.docs?.source},description:{story:`\`rows\` sets a taller initial height when three rows are not enough.

@summary Taller initial height through the native rows attribute`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Reason',
    'aria-invalid': true,
    'aria-describedby': 'reason-error',
    defaultValue: 'n/a'
  },
  render: args => <div style={{
    display: 'grid',
    gap: '0.25rem'
  }}>
            <TextArea {...args} />
            <span id="reason-error">Tell us why you are cancelling.</span>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Reason'
    });
    await expect(textarea).toHaveAttribute('aria-invalid', 'true');
    await expect(textarea).toHaveAccessibleDescription('Tell us why you are cancelling.');
  }
}`,...b.parameters?.docs?.source},description:{story:"The invalid treatment comes purely from `aria-invalid`; point\n`aria-describedby` at the message so it is read with the control.\n\n@summary Invalid state driven by aria-invalid",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Cannot be edited'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toBeDisabled();
    await userEvent.type(textarea, 'nope');
    await expect(textarea).toHaveValue('Cannot be edited');
  }
}`,...x.parameters?.docs?.source},description:{story:`@summary Disabled state`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'Copy me, but do not change me'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toHaveAttribute('readonly');
    await expect(textarea).not.toBeDisabled();
  }
}`,...S.parameters?.docs?.source},description:{story:`@summary Read-only value that stays focusable and copyable`,...S.parameters?.docs?.description}}},C=[`Default`,`AllSizes`,`Rows`,`Invalid`,`Disabled`,`ReadOnly`]})))()}w();export{v as AllSizes,_ as Default,x as Disabled,b as Invalid,S as ReadOnly,y as Rows,C as __namedExportsOrder,g as default};