import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n}from"./input-D84gv-Vy.js";import{a as r,n as i,t as a}from"./field-DFelqVZH.js";var o,s,c=e((()=>{r(),i(),o=t(),s=({label:e,tooltip:t,description:r,optional:i,required:s,errors:c,orientation:l,controlId:u,className:d,...f})=>(0,o.jsx)(a,{label:e,tooltip:t,description:r,optional:i,required:s,errors:c,orientation:l,controlId:u,className:d,children:(0,o.jsx)(n,{type:`text`,...f})}),s.displayName=`FieldText`;try{s.displayName=`FieldText`,s.__docgenInfo={description:"FieldText is the ready-made text field: the\n[Field](?path=/docs/components-field--docs) layout plus an\n[Input](?path=/docs/components-input--docs) control, one prop per part and no\nchild to pass. Everything that is not a field-level prop is forwarded to the\n`<input>`, and the wiring (`id`, `htmlFor`, `aria-invalid`,\n`aria-describedby`, `required`) comes from Field — the Input itself stays\nfield-agnostic.\n\nThis is what a form should reach for by default. Drop to the generic `Field`\nonly for a control that has no ready-made field yet.\n\nIt is form-library agnostic: drive `errors` yourself, or pair it with the\nreact-hook-form-bound `FormText`. Do not use it for multi-line text (that is\na TextArea field) or for a value with a leading or trailing addon (that is an\ninput group).",displayName:`FieldText`,filePath:`/home/runner/work/design-system/design-system/src/field/field-text.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.\nThe **control's** height, not the field's — it reaches the `<input>` and\nchanges nothing about the caption, the helper text or the gaps. Defaults\nto `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:`The field's caption.`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},tooltip:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Hint about the field, revealed from an info-icon trigger beside the\ncaption. For text that should always be on screen, use `description`.",name:`tooltip`,required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:`Helper text under the control, announced as part of the control's description.`,name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},optional:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:'Appends the muted " (optional)" suffix to the caption. Ignored when `required` is set.',name:`optional`,required:!1,tags:{},type:{name:`boolean`}},errors:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Errors to display under the control. Any entry with a `message` also flips\nthe control's `aria-invalid`, so the message and the treatment can never\ndisagree.",name:`errors`,required:!1,tags:{},type:{name:`FieldErrorLike[]`}},orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Field arrangement. Defaults to `'vertical'` (caption above the control,\nmessages below); `'horizontal'` puts the caption in a fixed-width first\ncolumn.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Overrides the generated control id when a semantic one is needed (e2e\nselectors, an external `aria-labelledby`).",name:`controlId`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Ready-made text field: Field layout plus Input, no form library`,example:`<FieldText
  label="Agency name"
  description="As registered with your state."
  placeholder="ACME Insurance"
  errors={[nameError]}
  required
/>`}}}catch{}})),l,u,d,f,p,m,h,g,_,v;e((()=>{c(),l=t(),{expect:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/FieldText`,component:s,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`]},orientation:{control:`radio`,options:[`vertical`,`horizontal`]},label:{control:`text`},tooltip:{control:`text`},description:{control:`text`},optional:{control:`boolean`},required:{control:`boolean`},disabled:{control:`boolean`},errors:{control:!1}},args:{label:`Agency name`,placeholder:`ACME Insurance`},decorators:[e=>(0,l.jsx)(`div`,{className:`max-w-md`,children:(0,l.jsx)(e,{})})],parameters:{docs:{description:{component:`FieldText is the ready-made text field: the Field layout plus an Input
control, one prop per part and no child to pass. It is what a form should
reach for by default — the generic \`Field\` is for controls that have no
ready-made field yet.

Everything that is not a field-level prop is forwarded to the \`<input>\`,
including \`size\`: the control's height is the control's business, and it
changes nothing about the caption, the helper text or the gaps.`}}}},p={play:async({canvasElement:e})=>{await u(d(e).getByLabelText(`Agency name`)).toBeInTheDocument()}},m={args:{label:`Scheduling link`,type:`url`,optional:!0,tooltip:`Anyone with this link can book time on your calendar.`,description:`Shown on your public profile.`,placeholder:`https://cal.com/jane`},play:async({canvasElement:e})=>{let t=d(e);await u(t.getByRole(`textbox`,{name:`Scheduling link`})).toHaveAccessibleDescription(`Shown on your public profile.`),await u(t.getByRole(`button`,{name:`More information`})).toBeInTheDocument();let n=e.querySelector(`[data-slot="label"] span`);await u(getComputedStyle(n,`::after`).content).toContain(`optional`)}},h={args:{label:`Scheduling link`,type:`url`,defaultValue:`cal.com/jane`,errors:[{message:`Enter a full URL, including https://.`}]},play:async({canvasElement:e})=>{let t=d(e);await u(t.getByLabelText(`Scheduling link`)).toHaveAttribute(`aria-invalid`,`true`),await u(t.getByRole(`alert`)).toHaveTextContent(`Enter a full URL, including https://.`)}},g={args:{label:`Full name`,required:!0,placeholder:`Jane Rivera`},play:async({canvasElement:e})=>{let t=d(e);await u(t.getByLabelText(/Full name/)).toBeRequired(),await u(t.getByText(`*`)).toHaveAttribute(`aria-hidden`),await u(t.getByRole(`textbox`,{name:`Full name`})).toBeInTheDocument()}},_={render:e=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,l.jsx)(s,{...e,size:`sm`,label:`Small`}),(0,l.jsx)(s,{...e,size:`md`,label:`Medium`}),(0,l.jsx)(s,{...e,size:`lg`,label:`Large`})]}),play:async({canvasElement:e})=>{let t=d(e);await u(t.getByLabelText(`Small`)).toHaveAttribute(`data-size`,`sm`),await u(t.getByLabelText(`Medium`)).toHaveAttribute(`data-size`,`md`);let n=t.getByLabelText(`Large`);await u(n).toHaveAttribute(`data-size`,`lg`),await u(n.getBoundingClientRect().height).toBe(48)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Agency name')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source},description:{story:`One prop per part — the whole field in a single self-wiring component. The
caption and the control are associated without an \`id\` or an \`htmlFor\`
written by hand.

@summary Complete text field from a flat prop surface`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Scheduling link',
    type: 'url',
    optional: true,
    tooltip: 'Anyone with this link can book time on your calendar.',
    description: 'Shown on your public profile.',
    placeholder: 'https://cal.com/jane'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Scheduling link'
    });
    await expect(input).toHaveAccessibleDescription('Shown on your public profile.');
    await expect(canvas.getByRole('button', {
      name: 'More information'
    })).toBeInTheDocument();
    // The suffix is a pseudo-element, so it is read off the computed style.
    const caption = canvasElement.querySelector('[data-slot="label"] span') as HTMLElement;
    await expect(getComputedStyle(caption, '::after').content).toContain('optional');
  }
}`,...m.parameters?.docs?.source},description:{story:`The caption's affordances and the helper text, all as flat props. \`tooltip\`
is the aside a user can go looking for; \`description\` is the guidance that
should always be on screen and is announced with the control.

@summary Field with description, tooltip and the optional suffix`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Scheduling link',
    type: 'url',
    defaultValue: 'cal.com/jane',
    errors: [{
      message: 'Enter a full URL, including https://.'
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Scheduling link');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByRole('alert')).toHaveTextContent('Enter a full URL, including https://.');
  }
}`,...h.parameters?.docs?.source},description:{story:'Any entry with a `message` flips the field to invalid: the control gets\n`aria-invalid` and the message is announced via `role="alert"`. The treatment\nand the message come from the same prop, so they cannot disagree.\n\n@summary Errors drive both the invalid treatment and the alert message',...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full name',
    required: true,
    placeholder: 'Jane Rivera'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Both halves, since the JSDoc promises both: the native attribute…
    await expect(canvas.getByLabelText(/Full name/)).toBeRequired();
    // …and the decorative asterisk, which is aria-hidden and so stays out of
    // the control's accessible name.
    const asterisk = canvas.getByText('*');
    await expect(asterisk).toHaveAttribute('aria-hidden');
    await expect(canvas.getByRole('textbox', {
      name: 'Full name'
    })).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source},description:{story:`\`required\` marks both halves of the field from one prop: the caption gets its
decorative asterisk and the \`<input>\` gets the native attribute, which is the
half assistive technology announces.

@summary Required field: asterisk on the caption, required on the control`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1.5rem'
  }}>
            <FieldText {...args} size="sm" label="Small" />
            <FieldText {...args} size="md" label="Medium" />
            <FieldText {...args} size="lg" label="Large" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The value set on the field has to survive the trip to the control —
    // nothing on the way is allowed to drop it.
    await expect(canvas.getByLabelText('Small')).toHaveAttribute('data-size', 'sm');
    await expect(canvas.getByLabelText('Medium')).toHaveAttribute('data-size', 'md');
    const large = canvas.getByLabelText('Large');
    await expect(large).toHaveAttribute('data-size', 'lg');
    await expect(large.getBoundingClientRect().height).toBe(48);
  }
}`,..._.parameters?.docs?.source},description:{story:"`size` is the **control's** height, not the field's: it reaches the `<input>`\nand leaves the caption, the helper text and the gaps alone. The three heights\nare `sm` (32px), `md` (40px, the default) and `lg` (48px).\n\n@summary The three control heights, set on the field and applied to the input",..._.parameters?.docs?.description}}},v=[`Default`,`WithDescriptionAndTooltip`,`WithErrors`,`Required`,`Sizes`]}))();export{p as Default,g as Required,_ as Sizes,m as WithDescriptionAndTooltip,h as WithErrors,v as __namedExportsOrder,f as default};