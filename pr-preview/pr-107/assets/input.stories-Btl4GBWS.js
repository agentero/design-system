import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./dist-xs6gOf1u.js";import{n as i,t as a}from"./lib-Dkaf_tmd.js";var o,s,c,l=e((()=>{r(),a(),o=t(),s=n({base:[`box-border w-full min-w-0 appearance-none rounded-md px-4 shadow-sm`,`border border-solid border-border-input-default bg-bg-input-normal text-text-input-normal`,`placeholder:text-text-input-placeholder placeholder-shown:text-ellipsis`,`outline-0 -outline-offset-1 outline-[transparent]`,`transition-[color,box-shadow,outline-color,outline-offset,outline-width] duration-75`,`focus-visible:border-border-input-focus focus-visible:outline-border-input-focus`,`focus-visible:outline-[0.125rem] focus-visible:outline-offset-[-0.0625rem]`,`aria-invalid:border-border-input-destructive`,`aria-invalid:focus-visible:border-border-input-destructive`,`aria-invalid:focus-visible:outline-border-input-destructive`,`disabled:cursor-default disabled:border-border-input-disable disabled:bg-bg-input-disable`,`disabled:text-text-input-disable disabled:shadow-none`,`disabled:placeholder:text-text-input-disable`],variants:{size:{sm:`h-8 text-sm`,md:`h-10 text-sm`,lg:`h-12 rounded-lg text-base`}},defaultVariants:{size:`md`}}),c=({className:e,size:t,...n})=>(0,o.jsx)(`input`,{"data-slot":`input`,"data-size":t,className:i(s({size:t}),e),...n}),c.displayName=`Input`;try{s.displayName=`inputRecipe`,s.__docgenInfo={description:"Style recipe for Input. Single-element recipe with a `size` variant; the\ninvalid treatment is driven entirely by the `aria-invalid` attribute so the\nvisual state can never drift from what assistive technology announces.",displayName:`inputRecipe`,filePath:`/home/runner/work/design-system/design-system/src/input/input.tsx`,methods:[],props:{size:{defaultValue:null,description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "md" | "lg"`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the Input component styles`}}}catch{}try{c.displayName=`Input`,c.__docgenInfo={description:`Input is the design system's base single-line text control. Reach for it
whenever a form collects free text, and pair it with
[Label](?path=/docs/components-label--docs) so the control has an accessible
name.

It is deliberately self-contained: it renders the props it is given and
knows nothing about form fields, form libraries, or surrounding layout.
Wiring (\`id\`, \`aria-invalid\`, \`aria-describedby\`) arrives as plain props, so
a field wrapper can inject them and standalone usage can set them by hand.
There is no \`status\` prop — mark the control \`aria-invalid\` and the
destructive border follows.

Do not use Input for multi-line text; that is TextArea's job. It also has no
slots for leading or trailing addons — an input with a currency prefix or a
unit suffix belongs in an input group, not here.`,displayName:`Input`,filePath:`/home/runner/work/design-system/design-system/src/input/input.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}},tags:{summary:`Base single-line text control, unaware of fields and form libraries`,example:`<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />
<Input id="email" aria-invalid aria-describedby="email-error" />
<span id="email-error">Enter a valid email address.</span>`}}}catch{}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{l(),u=t(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Input`,component:c,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`,`date`,`time`]},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{type:`text`,placeholder:`Insert value`,"aria-label":`Value`},parameters:{docs:{description:{component:"Input is the base single-line text control. It is intentionally unaware of\nform fields and form libraries: `id`, `aria-invalid` and `aria-describedby`\nare plain props, set by a field wrapper or by hand.\n\nThere is no `status` prop. Mark the control `aria-invalid` and the\ndestructive border follows, so the styling can never disagree with what\nassistive technology announces."}}}},h={play:async({canvasElement:e})=>{let t=p(e).getByRole(`textbox`,{name:`Value`});await f.type(t,`Typed by the user`),await d(t).toHaveValue(`Typed by the user`)}},g={args:{size:`sm`}},_={args:{size:`md`}},v={args:{size:`lg`}},y={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`20rem`},children:[(0,u.jsx)(c,{...e,size:`sm`,"aria-label":`Small input`,placeholder:`sm — 32px`}),(0,u.jsx)(c,{...e,size:`md`,"aria-label":`Medium input`,placeholder:`md — 40px`}),(0,u.jsx)(c,{...e,size:`lg`,"aria-label":`Large input`,placeholder:`lg — 48px`})]})},b={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`20rem`},children:[(0,u.jsx)(c,{...e,type:`text`,"aria-label":`Text`,placeholder:`Text`}),(0,u.jsx)(c,{...e,type:`email`,"aria-label":`Email address`,placeholder:`you@example.com`}),(0,u.jsx)(c,{...e,type:`password`,"aria-label":`Password`,placeholder:`Password`}),(0,u.jsx)(c,{...e,type:`number`,"aria-label":`Amount`,placeholder:`0`}),(0,u.jsx)(c,{...e,type:`date`,"aria-label":`Date`,placeholder:``})]})},x={args:{type:`email`,"aria-label":`Email`,"aria-invalid":!0,"aria-describedby":`email-error`,defaultValue:`not-an-email`},render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`0.25rem`,maxWidth:`20rem`},children:[(0,u.jsx)(c,{...e}),(0,u.jsx)(`span`,{id:`email-error`,children:`Enter a valid email address.`})]}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`textbox`,{name:`Email`});await d(t).toHaveAttribute(`aria-invalid`,`true`),await d(t).toHaveAccessibleDescription(`Enter a valid email address.`)}},S={args:{disabled:!0,defaultValue:`Cannot be edited`},play:async({canvasElement:e})=>{let t=p(e).getByRole(`textbox`,{name:`Value`});await d(t).toBeDisabled(),await f.type(t,`nope`),await d(t).toHaveValue(`Cannot be edited`)}},C={args:{readOnly:!0,defaultValue:`Copy me, but do not change me`},play:async({canvasElement:e})=>{let t=p(e).getByRole(`textbox`,{name:`Value`});await d(t).toHaveAttribute(`readonly`),await d(t).not.toBeDisabled()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Value'
    });
    await userEvent.type(input, 'Typed by the user');
    await expect(input).toHaveValue('Typed by the user');
  }
}`,...h.parameters?.docs?.source},description:{story:`The default control at \`md\`, usable anywhere without a surrounding field.

@summary Default standalone input`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...g.parameters?.docs?.source},description:{story:`\`sm\` (32px) keeps dense layouts compact where vertical space is tight.

@summary Small 32px control for dense layouts`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,..._.parameters?.docs?.source},description:{story:`\`md\` (40px) is the default and covers standard form density.

@summary Medium 40px control, the default`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...v.parameters?.docs?.source},description:{story:"`lg` (48px) suits low-density forms and larger touch targets. It also raises\nthe text to `base` and the corner radius to `lg`.\n\n@summary Large 48px control for low-density forms",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem',
    maxWidth: '20rem'
  }}>
            <Input {...args} size="sm" aria-label="Small input" placeholder="sm — 32px" />
            <Input {...args} size="md" aria-label="Medium input" placeholder="md — 40px" />
            <Input {...args} size="lg" aria-label="Large input" placeholder="lg — 48px" />
        </div>
}`,...y.parameters?.docs?.source},description:{story:`All three heights together for visual comparison.

@summary Visual comparison of the three input sizes`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem',
    maxWidth: '20rem'
  }}>
            <Input {...args} type="text" aria-label="Text" placeholder="Text" />
            <Input {...args} type="email" aria-label="Email address" placeholder="you@example.com" />
            <Input {...args} type="password" aria-label="Password" placeholder="Password" />
            <Input {...args} type="number" aria-label="Amount" placeholder="0" />
            <Input {...args} type="date" aria-label="Date" placeholder="" />
        </div>
}`,...b.parameters?.docs?.source},description:{story:`A range of input types. The type picks the on-screen keyboard on touch
devices and the browser's own parsing, so set it even when you validate
yourself.

@summary Common input types side by side`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    'aria-label': 'Email',
    'aria-invalid': true,
    'aria-describedby': 'email-error',
    defaultValue: 'not-an-email'
  },
  render: args => <div style={{
    display: 'grid',
    gap: '0.25rem',
    maxWidth: '20rem'
  }}>
            <Input {...args} />
            <span id="email-error">Enter a valid email address.</span>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Email'
    });
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('Enter a valid email address.');
  }
}`,...x.parameters?.docs?.source},description:{story:`The invalid treatment comes purely from \`aria-invalid\`, so the border can
never disagree with what assistive technology announces. Point
\`aria-describedby\` at the message so it is read out with the control.

@summary Invalid state driven by aria-invalid`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Cannot be edited'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Value'
    });
    await expect(input).toBeDisabled();
    await userEvent.type(input, 'nope');
    await expect(input).toHaveValue('Cannot be edited');
  }
}`,...S.parameters?.docs?.source},description:{story:`A disabled input keeps its value readable but blocks interaction, drops its
shadow and leaves the tab order.

@summary Disabled state`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'Copy me, but do not change me'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Value'
    });
    await expect(input).toHaveAttribute('readonly');
    await expect(input).not.toBeDisabled();
  }
}`,...C.parameters?.docs?.source},description:{story:`Read-only inputs stay focusable and copyable and still submit their value —
reach for this over \`disabled\` when the user needs to read or copy something
they cannot change.

@summary Read-only value that stays focusable and copyable`,...C.parameters?.docs?.description}}},w=[`Default`,`Small`,`Medium`,`Large`,`AllSizes`,`Types`,`Invalid`,`Disabled`,`ReadOnly`]}))();export{y as AllSizes,h as Default,S as Disabled,x as Invalid,v as Large,_ as Medium,C as ReadOnly,g as Small,b as Types,w as __namedExportsOrder,m as default};