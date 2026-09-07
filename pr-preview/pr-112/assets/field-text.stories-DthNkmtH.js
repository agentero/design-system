import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-BW_8f0eb.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./input-BEIYjjfe.js";import{i as d,t as f}from"./input-fK8BbZOf.js";var p,m,h,g,_=e((()=>{p=t(n(),1),c(),u(),m=r(),h=({children:e})=>{let t=s();return(0,m.jsx)(d,{value:(0,p.useMemo)(()=>t&&{id:t.controlId,"aria-describedby":t.describedBy,"aria-invalid":t.invalid||void 0,required:t.required||void 0,disabled:t.disabled||void 0},[t]),children:e})},g=({children:e,...t})=>(0,m.jsx)(o.Root,{...t,children:(0,m.jsx)(h,{children:e})}),g.displayName=`FieldText`;try{g.displayName=`FieldText`,g.__docgenInfo={description:"A `Field.Root` for a single-line text control: it provides `InputContext`,\nso the `Input` inside associates itself with the label and the messages and\ntakes `invalid`, `required` and `disabled` from the field. Every other part\n(`Label`, `Field.Description`, `Field.Error`) works as in any field.\n\nForm-library agnostic. A form adapter re-provides `InputContext` under it\nwith `name`, `value`, `onChange`, `onBlur` and `ref`, and `ErrorContext` with\nthe errors, without `FieldText` knowing about the library.",displayName:`FieldText`,filePath:`/home/runner/work/design-system/design-system/src/field-text/field-text.tsx`,methods:[],props:{orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Layout of the field. `vertical` (default) stacks label, control and\nmessages. `horizontal` puts the label in a left column and the control\nwith its messages in a right column, in DOM order; a description written\nright after the label stays under the label. Below `28rem`, measured on the\nfield itself, it stacks like `vertical`, so it needs no particular wrapper.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},invalid:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Marks the field as failing validation: colors the label, sets `data-invalid`\non the root and `aria-invalid` on the control through its context.",name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Field for a single-line text control, wiring the Input inside it`,example:`<FieldText invalid={!!error} required>
  <Label>Email</Label>
  <Input type="email" />
  <Field.Description>We only use this for policy documents.</Field.Description>
  <Field.Error errors={[error]} />
</FieldText>`}}}catch{}})),v=e((()=>{_()})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{y=t(n(),1),v(),c(),u(),l(),b=r(),{expect:x,fn:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/FieldText`,component:g,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`vertical`,`horizontal`]},invalid:{control:`boolean`},disabled:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`vertical`,invalid:!1,disabled:!1,required:!1},parameters:{docs:{description:{component:"FieldText is a `Field.Root` for a single-line text control. It provides\n`InputContext`, so the `Input` inside associates itself with the label and\nthe messages and takes `invalid`, `required` and `disabled` from the field —\nno `id`, `htmlFor`, `aria-describedby` or `aria-invalid` written by hand.\n\nIt knows nothing about form libraries. A form adapter re-provides\n`InputContext` with `value`, `onChange`, `onBlur` and `name`, and\n`ErrorContext` with the errors, as the last story simulates."}}}},D={render:e=>(0,b.jsxs)(g,{...e,children:[(0,b.jsx)(i,{children:`Email`}),(0,b.jsx)(f,{type:`email`,placeholder:`you@example.com`}),(0,b.jsx)(o.Description,{children:`We only use this to send policy documents.`})]}),play:async({canvasElement:e})=>{let t=T(e).getByRole(`textbox`,{name:`Email`});await x(t).toHaveAttribute(`data-slot`,`input`),await x(t).toHaveAccessibleDescription(`We only use this to send policy documents.`),await x(t).not.toHaveAttribute(`aria-invalid`)}},O={args:{required:!0},render:e=>(0,b.jsxs)(g,{...e,children:[(0,b.jsx)(i,{children:`Full name`}),(0,b.jsx)(f,{placeholder:`Jane Doe`})]}),play:async({canvasElement:e})=>{let t=T(e);await x(t.getByRole(`textbox`,{name:`Full name`})).toBeRequired(),await x(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},k={args:{invalid:!0},render:e=>(0,b.jsxs)(g,{...e,children:[(0,b.jsx)(i,{children:`Email`}),(0,b.jsx)(f,{type:`email`,defaultValue:`not-an-email`}),(0,b.jsx)(o.Error,{errors:[{message:`Enter a valid email address.`}]})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`textbox`,{name:`Email`}),r=t.getByRole(`alert`);await x(n).toHaveAttribute(`aria-invalid`,`true`),await x(n).toHaveAttribute(`aria-describedby`,x.stringContaining(r.id)),await x(e.querySelector(`[data-slot=field][data-invalid="true"]`)).not.toBeNull()}},A={args:{disabled:!0},render:e=>(0,b.jsxs)(g,{...e,children:[(0,b.jsx)(i,{children:`Agency`}),(0,b.jsx)(f,{defaultValue:`Acme Insurance`})]}),play:async({canvasElement:e})=>{await x(T(e).getByRole(`textbox`,{name:`Agency`})).toBeDisabled()}},j={render:e=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,b.jsxs)(g,{...e,children:[(0,b.jsx)(i,{children:`Website`}),(0,b.jsx)(f,{type:`url`,size:`lg`,className:`max-w-xs`,"aria-describedby":`website-hint`}),(0,b.jsx)(o.Description,{children:`Include the protocol.`})]}),(0,b.jsx)(`p`,{id:`website-hint`,className:`text-sm`,children:`Shown on your public profile.`})]}),play:async({canvasElement:e})=>{let t=T(e).getByRole(`textbox`,{name:`Website`});await x(t).toHaveAccessibleDescription(`Include the protocol. Shown on your public profile.`),await x(t).toHaveAttribute(`data-size`,`lg`),await x(t).toHaveClass(`max-w-xs`)}},M=({inputProps:e,errors:t,children:n})=>{let r=(0,y.use)(d),i=(0,y.use)(a);return(0,b.jsx)(d,{value:{...r,...e},children:(0,b.jsx)(a,{value:{...i,errors:t},children:n})})},N=S(),P=()=>{let[e,t]=(0,y.useState)(``),[n,r]=(0,y.useState)(!1),a=n&&!e?[{message:`Required`}]:void 0;return(0,b.jsx)(g,{invalid:!!a,required:!0,children:(0,b.jsxs)(M,{inputProps:{name:`email`,value:e,onChange:e=>t(e.target.value),onBlur:()=>r(!0)},errors:a,children:[(0,b.jsx)(i,{children:`Email`}),(0,b.jsx)(f,{type:`email`,onChange:N}),(0,b.jsx)(o.Error,{})]})})},F={render:()=>(0,b.jsx)(P,{}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`textbox`,{name:`Email`});await x(n).toHaveAttribute(`name`,`email`),await x(t.queryByRole(`alert`)).toBeNull(),await C.click(n),await C.tab(),await x(await t.findByRole(`alert`)).toHaveTextContent(`Required`),await x(n).toHaveAttribute(`aria-invalid`,`true`),await C.type(n,`jane@example.com`),await x(n).toHaveValue(`jane@example.com`),await x(N).toHaveBeenCalled(),await w(()=>x(t.queryByRole(`alert`)).toBeNull())}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`The composition consumers write: a label, the design system's \`Input\` and
helper text. The label points at the input and the input is described by the
text, all through context.

@summary Label, Input and description wired with no ids`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the input's\n`required` attribute.\n\n@summary Required field driven from the root alone",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"`invalid` on the field sets `aria-invalid` on the input, which drives its\ndestructive border, and the error is announced with the input.\n\n@summary Invalid field with the Input styled by aria-invalid",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the input through context.

@summary Disabled field driven from the root`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
  render: () => <SimulatedForm />,
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
}`,...F.parameters?.docs?.source},description:{story:"What a form adapter does with these contexts, simulated with `useState` and\nno form library: it extends `InputContext` with `name`, `value`, `onChange`\nand `onBlur`, so a bare `<Input />` becomes controlled, and `ErrorContext`\nwith the errors, so a bare `<Field.Error />` renders them. The input's own\n`onChange` still runs, chained after the adapter's.\n\n@summary Form-adapter extension point simulated without a form library",...F.parameters?.docs?.description}}},I=[`Default`,`Required`,`Invalid`,`Disabled`,`OwnPropsWin`,`FormAdapterSimulation`]}))();export{D as Default,A as Disabled,F as FormAdapterSimulation,k as Invalid,j as OwnPropsWin,O as Required,I as __namedExportsOrder,E as default};