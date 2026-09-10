import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-fXDOf-02.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./input-DIeTvEdH.js";import{i as d,t as f}from"./input-CPi90oGO.js";var p,m,h,g=e((()=>{c(),u(),p=r(),m=({children:e})=>{let t=s();return(0,p.jsx)(d,{value:t&&{id:t.controlId,"aria-describedby":t.describedBy,"aria-invalid":t.invalid||void 0,required:t.required||void 0,disabled:t.disabled||void 0,readOnly:t.readOnly||void 0},children:e})},h=({children:e,...t})=>(0,p.jsx)(o.Root,{...t,children:(0,p.jsx)(m,{children:e})}),h.displayName=`FieldText`;try{h.displayName=`FieldText`,h.__docgenInfo={description:"A `Field.Root` for a single-line text control: it provides `InputContext`,\nso the `Input` inside associates itself with the label and the messages and\ntakes `invalid`, `required`, `disabled` and `readOnly` from the field. Every\nother part (`Label`, `Field.Description`, `Field.Error`) works as in any\nfield.\n\nForm-library agnostic, and its contexts compose: a provider nested inside it\ncan extend `InputContext` with `name`, `value`, `onChange`, `onBlur` and\n`ref` to control the `Input`, and `FieldContext` with the errors, on top of\nthe wiring `FieldText` already set.",displayName:`FieldText`,filePath:`/home/runner/work/design-system/design-system/src/field-text/field-text.tsx`,methods:[],props:{orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Layout of the field. `vertical` (default) stacks label, control and\nmessages. `horizontal` is one row at every width: the first child fills it\nand the rest keep their natural width, aligned to the right, so the\ncontrols of stacked fields line up. `responsive` stacks below `28rem` and\nbehaves like `horizontal` from there, measured on the field itself, so it\nneeds no particular wrapper. In both, `Field.Content` groups a control with\nits messages, or a label with its description.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical" | "responsive"`,value:[{value:`"horizontal"`},{value:`"vertical"`},{value:`"responsive"`}]}},invalid:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Marks the field as failing validation: sets `data-invalid` on the root and\n`aria-invalid` on the control through its context, which drives the\ncontrol's destructive border. The label keeps its color by design.",name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Field for a single-line text control, wiring the Input inside it`,example:`<FieldText invalid={!!error} required>
  <Label>Email</Label>
  <Input type="email" />
  <Field.Description>We only use this for policy documents.</Field.Description>
  <Field.Error errors={[error]} />
</FieldText>`}}}catch{}})),_=e((()=>{g()})),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{v=t(n(),1),_(),c(),u(),l(),y=r(),{expect:b,fn:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/FieldText`,component:h,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`vertical`,invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"FieldText is a `Field.Root` for a single-line text control. It provides\n`InputContext`, so the `Input` inside associates itself with the label and\nthe messages and takes `invalid`, `required`, `disabled` and `readOnly` from\nthe field — no `id`, `htmlFor`, `aria-describedby` or `aria-invalid` written\nby hand.\n\nIt knows nothing about form libraries, and its contexts compose: a provider\nnested inside it can extend `InputContext` with `value`, `onChange`, `onBlur`\nand `name`, and `FieldContext` with the errors, as the last story shows."}}}},E={render:e=>(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(i,{children:`Email`}),(0,y.jsx)(f,{type:`email`,placeholder:`you@example.com`}),(0,y.jsx)(o.Description,{children:`We only use this to send policy documents.`})]}),play:async({canvasElement:e})=>{let t=w(e).getByRole(`textbox`,{name:`Email`});await b(t).toHaveAttribute(`data-slot`,`input`),await b(t).toHaveAccessibleDescription(`We only use this to send policy documents.`),await b(t).not.toHaveAttribute(`aria-invalid`)}},D={args:{required:!0},render:e=>(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(i,{children:`Full name`}),(0,y.jsx)(f,{placeholder:`Jane Doe`})]}),play:async({canvasElement:e})=>{let t=w(e);await b(t.getByRole(`textbox`,{name:`Full name`})).toBeRequired(),await b(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},O={args:{invalid:!0},render:e=>(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(i,{children:`Email`}),(0,y.jsx)(f,{type:`email`,defaultValue:`not-an-email`}),(0,y.jsx)(o.Error,{errors:[{message:`Enter a valid email address.`}]})]}),play:async({canvasElement:e})=>{let t=w(e),n=t.getByRole(`textbox`,{name:`Email`}),r=t.getByRole(`alert`);await b(n).toHaveAttribute(`aria-invalid`,`true`),await b(n).toHaveAttribute(`aria-describedby`,b.stringContaining(r.id)),await b(e.querySelector(`[data-slot=field][data-invalid="true"]`)).not.toBeNull()}},k={args:{disabled:!0},render:e=>(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(i,{children:`Agency`}),(0,y.jsx)(f,{defaultValue:`Acme Insurance`})]}),play:async({canvasElement:e})=>{await b(w(e).getByRole(`textbox`,{name:`Agency`})).toBeDisabled()}},A={args:{readOnly:!0},render:e=>(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(i,{children:`Policy number`}),(0,y.jsx)(f,{defaultValue:`POL-2049-118`}),(0,y.jsx)(o.Description,{children:`Assigned by the carrier; contact support to change it.`})]}),play:async({canvasElement:e})=>{let t=w(e).getByRole(`textbox`,{name:`Policy number`});await b(t).toHaveAttribute(`readonly`),await b(t).not.toBeDisabled()}},j={render:e=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsxs)(h,{...e,children:[(0,y.jsx)(i,{children:`Website`}),(0,y.jsx)(f,{type:`url`,size:`lg`,className:`max-w-xs`,"aria-describedby":`website-hint`}),(0,y.jsx)(o.Description,{children:`Include the protocol.`})]}),(0,y.jsx)(`p`,{id:`website-hint`,className:`text-sm`,children:`Shown on your public profile.`})]}),play:async({canvasElement:e})=>{let t=w(e).getByRole(`textbox`,{name:`Website`});await b(t).toHaveAccessibleDescription(`Include the protocol. Shown on your public profile.`),await b(t).toHaveAttribute(`data-size`,`lg`),await b(t).toHaveClass(`max-w-xs`)}},M=({inputProps:e,errors:t,children:n})=>{let r=(0,v.use)(d),i=(0,v.use)(a);return(0,y.jsx)(d,{value:{...r,...e},children:(0,y.jsx)(a,{value:i&&{...i,errors:t},children:n})})},N=x(),P=()=>{let[e,t]=(0,v.useState)(``),[n,r]=(0,v.useState)(!1),a=n&&!e?[{message:`Required`}]:void 0;return(0,y.jsx)(h,{invalid:!!a,required:!0,children:(0,y.jsxs)(M,{inputProps:{name:`email`,value:e,onChange:e=>t(e.target.value),onBlur:()=>r(!0)},errors:a,children:[(0,y.jsx)(i,{children:`Email`}),(0,y.jsx)(f,{type:`email`,onChange:N}),(0,y.jsx)(o.Error,{})]})})},F={render:()=>(0,y.jsx)(P,{}),play:async({canvasElement:e})=>{let t=w(e),n=t.getByRole(`textbox`,{name:`Email`});await b(n).toHaveAttribute(`name`,`email`),await b(t.queryByRole(`alert`)).toBeNull(),await S.click(n),await S.tab(),await b(await t.findByRole(`alert`)).toHaveTextContent(`Required`),await b(n).toHaveAttribute(`aria-invalid`,`true`),await S.type(n,`jane@example.com`),await b(n).toHaveValue(`jane@example.com`),await b(N).toHaveBeenCalled(),await C(()=>b(t.queryByRole(`alert`)).toBeNull())}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <FieldText {...args}>
            <Label>Email</Label>
            <Input type="email" placeholder="you@example.com" />
            <Field.Description>We only use this to send policy documents.</Field.Description>
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Email'
    });
    await expect(input).toHaveAttribute('data-slot', 'input');
    await expect(input).toHaveAccessibleDescription('We only use this to send policy documents.');
    await expect(input).not.toHaveAttribute('aria-invalid');
  }
}`,...E.parameters?.docs?.source},description:{story:`The composition consumers write: a label, the design system's \`Input\` and
helper text. The label points at the input and the input is described by the
text, all through context.

@summary Label, Input and description wired with no ids`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => <FieldText {...args}>
            <Label>Full name</Label>
            <Input placeholder="Jane Doe" />
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Full name'
    })).toBeRequired();
    await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...D.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the input's\n`required` attribute.\n\n@summary Required field driven from the root alone",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldText {...args}>
            <Label>Email</Label>
            <Input type="email" defaultValue="not-an-email" />
            <Field.Error errors={[{
      message: 'Enter a valid email address.'
    }]} />
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Email'
    });
    const alert = canvas.getByRole('alert');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAttribute('aria-describedby', expect.stringContaining(alert.id));
    await expect(canvasElement.querySelector('[data-slot=field][data-invalid="true"]')).not.toBeNull();
  }
}`,...O.parameters?.docs?.source},description:{story:"`invalid` on the field sets `aria-invalid` on the input, which drives its\ndestructive border, and the error is announced with the input.\n\n@summary Invalid field with the Input styled by aria-invalid",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <FieldText {...args}>
            <Label>Agency</Label>
            <Input defaultValue="Acme Insurance" />
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Agency'
    })).toBeDisabled();
  }
}`,...k.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the input through context.

@summary Disabled field driven from the root`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  render: args => <FieldText {...args}>
            <Label>Policy number</Label>
            <Input defaultValue="POL-2049-118" />
            <Field.Description>Assigned by the carrier; contact support to change it.</Field.Description>
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Policy number'
    });
    await expect(input).toHaveAttribute('readonly');
    await expect(input).not.toBeDisabled();
  }
}`,...A.parameters?.docs?.source},description:{story:`\`readOnly\` on the field reaches the input through context. The value stays
focusable, copyable and submitted, and the input looks like any other.

@summary Read-only field driven from the root`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
            <FieldText {...args}>
                <Label>Website</Label>
                <Input type="url" size="lg" className="max-w-xs" aria-describedby="website-hint" />
                <Field.Description>Include the protocol.</Field.Description>
            </FieldText>
            <p id="website-hint" className="text-sm">
                Shown on your public profile.
            </p>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Website'
    });
    await expect(input).toHaveAccessibleDescription('Include the protocol. Shown on your public profile.');
    await expect(input).toHaveAttribute('data-size', 'lg');
    await expect(input).toHaveClass('max-w-xs');
  }
}`,...j.parameters?.docs?.source},description:{story:"The context is a default, never an override: an extra `aria-describedby` is\nconcatenated with the field's ids, `className` is merged and `size` passes\nthrough untouched.\n\n@summary Input's own props merge with, and win over, the field's context",...j.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledField />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Email'
    });
    await expect(input).toHaveAttribute('name', 'email');
    await expect(canvas.queryByRole('alert')).toBeNull();
    await userEvent.click(input);
    await userEvent.tab();
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Required');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(input, 'jane@example.com');
    await expect(input).toHaveValue('jane@example.com');
    await expect(onOwnChange).toHaveBeenCalled();
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
  }
}`,...F.parameters?.docs?.source},description:{story:"The contexts are an extension point: a provider nested in the field adds\n`name`, `value`, `onChange` and `onBlur` to `InputContext`, so a bare\n`<Input />` becomes controlled, and the errors to `FieldContext`, so a bare\n`<Field.Error />` renders them — here with `useState` and no form library.\nThe input's own `onChange` still runs, chained after the provider's.\n\n@summary Input controlled and errors supplied from outside the field",...F.parameters?.docs?.description}}},I=[`Default`,`Required`,`Invalid`,`Disabled`,`ReadOnly`,`OwnPropsWin`,`ControlledFromContext`]}))();export{F as ControlledFromContext,E as Default,k as Disabled,O as Invalid,j as OwnPropsWin,A as ReadOnly,D as Required,I as __namedExportsOrder,T as default};