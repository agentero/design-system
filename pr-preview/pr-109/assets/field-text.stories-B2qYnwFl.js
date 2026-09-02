import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,r,t as i}from"./input-CknTUgFE.js";import{r as a,t as o}from"./icons-nXUFvxw-.js";import{t as s}from"./input-g27hKh11.js";import{n as c,t as l}from"./field-SIuMgreW.js";var u,d,f=e((()=>{i(),r(),u=t(),d=({leadingAddon:e,trailingAddon:t,...r})=>(0,u.jsxs)(n.Root,{children:[e,(0,u.jsx)(s,{...r}),t]}),d.displayName=`InputWithAddons`;try{d.displayName=`InputWithAddons`,d.__docgenInfo={description:"An `Input` inside an `InputGroup`, wired to the surrounding field. Internal to\nthe field layer — `FieldText` renders it when it is given an addon.\n\nThe field's wiring arrives here on its own. `Field` injects `id`,\n`aria-describedby`, `aria-invalid`, `required` and its `ref` through a Radix\n`Slot`, and a `Slot` hands them to whatever single child it is given: since\nthat child is this component rather than the group's `div`, they land in these\nprops and the spread below puts them on the `<input>`, one level inside the\nframe. So the caption points at the `<input>`, and the field's development\ncheck — which warns when the wiring lands on an element a `<label>` cannot\npoint at — sees an `INPUT` and stays quiet.\n\nSo the component reads no context of its own and needs no `'use client'`\ndirective: everything it places on the `<input>` arrives as a prop.\n\nWhat the component buys is that the group is assembled here rather than at\nthe call site. Consumers set `leadingAddon`/`trailingAddon` on the field and\nnever get the chance to pass an `InputGroup` to the generic `Field` — there\nthe single child *is* the group's `div`, the id lands on the frame, and the\ncaption ends up pointing at an element a `<label>` cannot label.",displayName:`InputWithAddons`,filePath:`/home/runner/work/design-system/design-system/src/field/input-with-addons.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},leadingAddon:{defaultValue:null,declarations:[{fileName:`design-system/src/field/input-with-addons.tsx`,name:`TypeLiteral`}],description:`Rendered inside the group, before the control.`,name:`leadingAddon`,required:!1,tags:{},type:{name:`ReactNode`}},trailingAddon:{defaultValue:null,declarations:[{fileName:`design-system/src/field/input-with-addons.tsx`,name:`TypeLiteral`}],description:`Rendered inside the group, after the control.`,name:`trailingAddon`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Input and its addons assembled inside an InputGroup for the field`}}}catch{}})),p,m,h=e((()=>{i(),c(),f(),p=t(),m=({label:e,tooltip:t,description:n,optional:r,required:i,errors:a,orientation:o,controlId:c,className:u,leadingAddon:f,trailingAddon:m,...h})=>(0,p.jsx)(l,{label:e,tooltip:t,description:n,optional:r,required:i,errors:a,orientation:o,controlId:c,className:u,children:f===void 0&&m===void 0?(0,p.jsx)(s,{type:`text`,...h}):(0,p.jsx)(d,{type:`text`,leadingAddon:f,trailingAddon:m,...h})}),m.displayName=`FieldText`;try{m.displayName=`FieldText`,m.__docgenInfo={description:"FieldText is the ready-made text field: the\n[Field](?path=/docs/components-field--docs) layout plus an\n[Input](?path=/docs/components-input--docs) control, one prop per part and no\nchild to pass. Everything that is not a field-level prop is forwarded to the\n`<input>`, and the wiring (`id`, `htmlFor`, `aria-invalid`,\n`aria-describedby`, `required`) comes from Field — the Input itself stays\nfield-agnostic.\n\nThis is what a form should reach for by default. Drop to the generic `Field`\nonly for a control that has no ready-made field yet.\n\nA value with a leading icon, a currency prefix or a trailing unit is still a\ntext field: pass `leadingAddon`/`trailingAddon` and the control is rendered\ninside an [InputGroup](?path=/docs/components-inputgroup--docs), with the\nfield's wiring staying on the `<input>` inside the frame. That is the reason\nto reach for the props rather than assembling the group under the generic\n`Field` — there, the wiring would land on the group's `div` and the caption\nwould end up pointing at an element a `<label>` cannot label.\n\nIt is form-library agnostic: drive `errors` yourself, or pair it with the\nreact-hook-form-bound `FormText`. Do not use it for multi-line text (that is\na TextArea field), and do not reach for an addon to hold something the user\nhas to read — nothing announces an addon.",displayName:`FieldText`,filePath:`/home/runner/work/design-system/design-system/src/field/field-text.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.\nThe **control's** height, not the field's — it reaches the `<input>` and\nchanges nothing about the caption, the helper text or the gaps. Defaults\nto `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:`The field's caption.`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},tooltip:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Hint about the field, revealed from an info-icon trigger beside the\ncaption. For text that should always be on screen, use `description`.",name:`tooltip`,required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:`Helper text under the control, announced as part of the control's description.`,name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},optional:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:'Appends the muted " (optional)" suffix to the caption. Ignored when `required` is set.',name:`optional`,required:!1,tags:{},type:{name:`boolean`}},errors:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Errors to display under the control. Any entry with a `message` also flips\nthe control's `aria-invalid`, so the message and the treatment can never\ndisagree.",name:`errors`,required:!1,tags:{},type:{name:`FieldErrorLike[]`}},orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Field arrangement. Defaults to `'vertical'` (caption above the control,\nmessages below); `'horizontal'` puts the caption in a fixed-width first\ncolumn.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Overrides the generated control id when a semantic one is needed (e2e\nselectors, an external `aria-labelledby`).",name:`controlId`,required:!1,tags:{},type:{name:`string`}},leadingAddon:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Content shown inside the control's frame, before the value — a leading\nicon, a currency symbol, a URL scheme. Setting it (or `trailingAddon`) puts\nthe `<input>` inside an\n[InputGroup](?path=/docs/components-inputgroup--docs), which draws one\nbordered frame around the pair.\n\nWrap what you pass in the group part that matches it: `InputGroup.Addon`\nfor an icon, a tag or a button, `InputGroup.Text` for a text prefix. The\nfield keeps its wiring on the `<input>` inside the frame, so the caption\nstill points at the control.\n\nAddons are decoration and nothing announces them: anything the user has to\nread to fill the field in belongs in `label` or `description`.",name:`leadingAddon`,required:!1,tags:{},type:{name:`ReactNode`}},trailingAddon:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field-text.tsx`,name:`TypeLiteral`}],description:"Content shown inside the control's frame, after the value — a unit, a\ndomain suffix, an action button. Same rules as `leadingAddon`.",name:`trailingAddon`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Ready-made text field: Field layout plus Input, no form library`,example:`<FieldText
  label="Agency name"
  description="As registered with your state."
  placeholder="ACME Insurance"
  errors={[nameError]}
  required
/>
<FieldText
  label="Email"
  type="email"
  size="lg"
  leadingAddon={
    <InputGroup.Addon>
      <IconMail />
    </InputGroup.Addon>
  }
/>`}}}catch{}})),g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{r(),a(),h(),g=t(),{expect:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/FieldText`,component:m,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`]},orientation:{control:`radio`,options:[`vertical`,`horizontal`]},label:{control:`text`},tooltip:{control:`text`},description:{control:`text`},optional:{control:`boolean`},required:{control:`boolean`},disabled:{control:`boolean`},errors:{control:!1},leadingAddon:{control:!1},trailingAddon:{control:!1}},args:{label:`Agency name`,placeholder:`ACME Insurance`},decorators:[e=>(0,g.jsx)(`div`,{className:`max-w-md`,children:(0,g.jsx)(e,{})})],parameters:{docs:{description:{component:`FieldText is the ready-made text field: the Field layout plus an Input
control, one prop per part and no child to pass. It is what a form should
reach for by default — the generic \`Field\` is for controls that have no
ready-made field yet.

Everything that is not a field-level prop is forwarded to the \`<input>\`,
including \`size\`: the control's height is the control's business, and it
changes nothing about the caption, the helper text or the gaps.`}}}},x={play:async({canvasElement:e})=>{await _(y(e).getByLabelText(`Agency name`)).toBeInTheDocument()}},S={args:{label:`Scheduling link`,type:`url`,optional:!0,tooltip:`Anyone with this link can book time on your calendar.`,description:`Shown on your public profile.`,placeholder:`https://cal.com/jane`},play:async({canvasElement:e})=>{let t=y(e);await _(t.getByRole(`textbox`,{name:`Scheduling link`})).toHaveAccessibleDescription(`Shown on your public profile.`),await _(t.getByRole(`button`,{name:`More information`})).toBeInTheDocument();let n=e.querySelector(`[data-slot="label"] span`);await _(getComputedStyle(n,`::after`).content).toContain(`optional`)}},C={args:{label:`Scheduling link`,type:`url`,defaultValue:`cal.com/jane`,errors:[{message:`Enter a full URL, including https://.`}]},play:async({canvasElement:e})=>{let t=y(e);await _(t.getByLabelText(`Scheduling link`)).toHaveAttribute(`aria-invalid`,`true`),await _(t.getByRole(`alert`)).toHaveTextContent(`Enter a full URL, including https://.`)}},w={args:{label:`Full name`,required:!0,placeholder:`Jane Rivera`},play:async({canvasElement:e})=>{let t=y(e);await _(t.getByLabelText(/Full name/)).toBeRequired(),await _(t.getByText(`*`)).toHaveAttribute(`aria-hidden`),await _(t.getByRole(`textbox`,{name:`Full name`})).toBeInTheDocument()}},T={render:e=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,g.jsx)(m,{...e,size:`sm`,label:`Small`}),(0,g.jsx)(m,{...e,size:`md`,label:`Medium`}),(0,g.jsx)(m,{...e,size:`lg`,label:`Large`})]}),play:async({canvasElement:e})=>{let t=y(e);await _(t.getByLabelText(`Small`)).toHaveAttribute(`data-size`,`sm`),await _(t.getByLabelText(`Medium`)).toHaveAttribute(`data-size`,`md`);let n=t.getByLabelText(`Large`);await _(n).toHaveAttribute(`data-size`,`lg`),await _(n.getBoundingClientRect().height).toBe(48)}},E={args:{label:`Email`,type:`email`,size:`lg`,required:!0,placeholder:`name@example.com`,leadingAddon:(0,g.jsx)(n.Addon,{children:(0,g.jsx)(o,{})})},play:async({canvasElement:e})=>{let t=y(e).getByRole(`textbox`,{name:/Email/}),n=e.querySelector(`[data-slot="input-group"]`),r=e.querySelector(`[data-slot="label"]`);await _(r.getAttribute(`for`)).toBe(t.getAttribute(`id`)),await _(t.closest(`[data-slot="input-group"]`)).toBe(n),await _(n).not.toHaveAttribute(`id`),await _(t).toHaveAttribute(`aria-describedby`),await _(t).toBeRequired(),await v.click(r),await _(t).toHaveFocus(),t.blur(),await _(t).not.toHaveFocus(),await v.click(e.querySelector(`[data-slot="input-group-addon"]`)),await _(t).toHaveFocus()}},D={args:{label:`Coverage limit`,description:`Enter the amount in US dollars.`,inputMode:`decimal`,size:`lg`,placeholder:`0.00`,leadingAddon:(0,g.jsx)(n.Text,{children:`$`}),trailingAddon:(0,g.jsx)(n.Text,{children:`USD`})},play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`textbox`,{name:`Coverage limit`}),r=e.querySelector(`[data-slot="input-group"]`),i=t.getByText(`$`),a=t.getByText(`USD`);await _(n).toHaveAccessibleName(`Coverage limit`),await _(n).toHaveAccessibleDescription(`Enter the amount in US dollars.`),await _(n).toHaveAttribute(`data-size`,`lg`),await _(r.getBoundingClientRect().height).toBe(48),await _(getComputedStyle(n).fontSize).toBe(`16px`),await _(getComputedStyle(i).fontSize).toBe(`16px`),await _(getComputedStyle(a).fontSize).toBe(`16px`)}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Agency name')).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source},description:{story:`One prop per part — the whole field in a single self-wiring component. The
caption and the control are associated without an \`id\` or an \`htmlFor\`
written by hand.

@summary Complete text field from a flat prop surface`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`The caption's affordances and the helper text, all as flat props. \`tooltip\`
is the aside a user can go looking for; \`description\` is the guidance that
should always be on screen and is announced with the control.

@summary Field with description, tooltip and the optional suffix`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:'Any entry with a `message` flips the field to invalid: the control gets\n`aria-invalid` and the message is announced via `role="alert"`. The treatment\nand the message come from the same prop, so they cannot disagree.\n\n@summary Errors drive both the invalid treatment and the alert message',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`\`required\` marks both halves of the field from one prop: the caption gets its
decorative asterisk and the \`<input>\` gets the native attribute, which is the
half assistive technology announces.

@summary Required field: asterisk on the caption, required on the control`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"`size` is the **control's** height, not the field's: it reaches the `<input>`\nand leaves the caption, the helper text and the gaps alone. The three heights\nare `sm` (32px), `md` (40px, the default) and `lg` (48px).\n\n@summary The three control heights, set on the field and applied to the input",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    size: 'lg',
    required: true,
    placeholder: 'name@example.com',
    leadingAddon: <InputGroup.Addon>
                <IconMail />
            </InputGroup.Addon>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole('textbox', {
      name: /Email/
    });
    const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
    const caption = canvasElement.querySelector('[data-slot="label"]') as HTMLLabelElement;

    // The wiring is on the input, one level below the frame — the caption
    // points at the control and not at the group's div.
    await expect(caption.getAttribute('for')).toBe(control.getAttribute('id'));
    await expect(control.closest('[data-slot="input-group"]')).toBe(group);
    await expect(group).not.toHaveAttribute('id');
    await expect(control).toHaveAttribute('aria-describedby');
    await expect(control).toBeRequired();

    // Clicking the caption reaches the control through the frame, and so does
    // clicking the icon.
    await userEvent.click(caption);
    await expect(control).toHaveFocus();

    // The icon is checked from a blurred start, otherwise the assertion would
    // pass on the focus the caption already handed over: the addon deliberately
    // skips refocusing a control that is already focused.
    control.blur();
    await expect(control).not.toHaveFocus();
    await userEvent.click(canvasElement.querySelector('[data-slot="input-group-addon"]') as HTMLElement);
    await expect(control).toHaveFocus();
  }
}`,...E.parameters?.docs?.source},description:{story:`A leading icon inside the control's frame. \`leadingAddon\` puts the \`<input>\`
inside an [InputGroup](?path=/docs/components-inputgroup--docs) and keeps the
field's wiring on the input, so the caption still points at the control and
the frame around it is only a frame.

This is the shape of a sign-in email field: one caption, a 48px control, an
envelope in the frame. Assembling it by hand is where it goes wrong — put the
group under the generic \`Field\` and the caption ends up pointing at the
group's \`div\`, which is a control with no accessible name and nothing on
screen to show it.

@summary Leading icon addon with the field's wiring still on the input`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Coverage limit',
    description: 'Enter the amount in US dollars.',
    inputMode: 'decimal',
    size: 'lg',
    placeholder: '0.00',
    leadingAddon: <InputGroup.Text>$</InputGroup.Text>,
    trailingAddon: <InputGroup.Text>USD</InputGroup.Text>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole('textbox', {
      name: 'Coverage limit'
    });
    const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
    const prefix = canvas.getByText('$');
    const suffix = canvas.getByText('USD');

    // The addons stay out of the accessible name and out of the description.
    await expect(control).toHaveAccessibleName('Coverage limit');
    await expect(control).toHaveAccessibleDescription('Enter the amount in US dollars.');

    // The \`size\` set on the field reaches the control, and the frame and the
    // text addons follow it: 48px of frame, and 16px type on both addons rather
    // than the 14px they would take at any other height.
    await expect(control).toHaveAttribute('data-size', 'lg');
    await expect(group.getBoundingClientRect().height).toBe(48);
    await expect(getComputedStyle(control).fontSize).toBe('16px');
    await expect(getComputedStyle(prefix).fontSize).toBe('16px');
    await expect(getComputedStyle(suffix).fontSize).toBe('16px');
  }
}`,...D.parameters?.docs?.source},description:{story:"A currency prefix and a unit suffix, both inside the frame. `InputGroup.Text`\nis the part for plain text; the control's `size` still drives the frame's\nheight and both text addons' type size. This one is `lg`, so the frame is 48px\ntall and `$` and `USD` are set at the control's larger type size rather than\nat the group's default.\n\nAddons are decoration and nothing announces them, so the unit the field\nexpects is repeated in the description rather than left to the suffix alone.\n\n@summary Text prefix and suffix around the value, sized by the control",...D.parameters?.docs?.description}}},O=[`Default`,`WithDescriptionAndTooltip`,`WithErrors`,`Required`,`Sizes`,`WithLeadingAddon`,`WithTextAddons`]}))();export{x as Default,w as Required,T as Sizes,S as WithDescriptionAndTooltip,C as WithErrors,E as WithLeadingAddon,D as WithTextAddons,O as __namedExportsOrder,b as default};