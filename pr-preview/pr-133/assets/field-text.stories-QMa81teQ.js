import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-7qrw1l4g.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./label-CVeVlEH7.js";import{a,i as o,n as s,t as c}from"./input-QmZhlJje.js";import{n as l,r as u,t as d}from"./field-B7vVtLxR.js";import{n as f,t as p}from"./field-text-BCxfhC1R.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{m=t(),f(),l(),s(),a(),r(),h=n(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/FieldText`,component:p,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`vertical`,invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"FieldText is a `Field.Root` for a single-line text control. It provides\n`InputContext`, so the `Input` inside associates itself with the label and\nthe messages and takes `invalid`, `required`, `disabled` and `readOnly` from\nthe field — no `id`, `htmlFor`, `aria-describedby` or `aria-invalid` written\nby hand.\n\nIt knows nothing about form libraries, and its contexts compose: a provider\nnested inside it can extend `InputContext` with `value`, `onChange`, `onBlur`\nand `name`, and `FieldContext` with the errors, as the last story shows."}}}},S={render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Email`}),(0,h.jsx)(c,{type:`email`,placeholder:`you@example.com`}),(0,h.jsx)(d.Description,{children:`We only use this to send policy documents.`})]}),play:async({canvasElement:e})=>{let t=b(e).getByRole(`textbox`,{name:`Email`});await g(t).toHaveAttribute(`data-slot`,`input`),await g(t).toHaveAccessibleDescription(`We only use this to send policy documents.`),await g(t).not.toHaveAttribute(`aria-invalid`)}},C={args:{required:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Full name`}),(0,h.jsx)(c,{placeholder:`Jane Doe`})]}),play:async({canvasElement:e})=>{let t=b(e);await g(t.getByRole(`textbox`,{name:`Full name`})).toBeRequired(),await g(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},w={args:{invalid:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Email`}),(0,h.jsx)(c,{type:`email`,defaultValue:`not-an-email`}),(0,h.jsx)(d.Error,{errors:[{message:`Enter a valid email address.`}]})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Email`}),r=t.getByRole(`alert`);await g(n).toHaveAttribute(`aria-invalid`,`true`),await g(n).toHaveAttribute(`aria-describedby`,g.stringContaining(r.id)),await g(e.querySelector(`[data-slot=field][data-invalid="true"]`)).not.toBeNull()}},T={args:{disabled:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Agency`}),(0,h.jsx)(c,{defaultValue:`Acme Insurance`})]}),play:async({canvasElement:e})=>{let t=b(e);await g(t.getByRole(`textbox`,{name:`Agency`})).toBeDisabled()}},E={args:{readOnly:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Policy number`}),(0,h.jsx)(c,{defaultValue:`POL-2049-118`}),(0,h.jsx)(d.Description,{children:`Assigned by the carrier; contact support to change it.`})]}),play:async({canvasElement:e})=>{let t=b(e).getByRole(`textbox`,{name:`Policy number`});await g(t).toHaveAttribute(`readonly`),await g(t).not.toBeDisabled()}},D={render:e=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Website`}),(0,h.jsx)(c,{type:`url`,size:`lg`,className:`max-w-xs`,"aria-describedby":`website-hint`}),(0,h.jsx)(d.Description,{children:`Include the protocol.`})]}),(0,h.jsx)(`p`,{id:`website-hint`,className:`text-sm`,children:`Shown on your public profile.`})]}),play:async({canvasElement:e})=>{let t=b(e).getByRole(`textbox`,{name:`Website`});await g(t).toHaveAccessibleDescription(`Include the protocol. Shown on your public profile.`),await g(t).toHaveAttribute(`data-size`,`lg`),await g(t).toHaveClass(`max-w-xs`)}},O=({inputProps:e,errors:t,children:n})=>{let r=(0,m.use)(o),i=(0,m.use)(u);return(0,h.jsx)(o,{value:{...r,...e},children:(0,h.jsx)(u,{value:i&&{...i,errors:t},children:n})})},k=_(),A=()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(!1),a=n&&!e?[{message:`Required`}]:void 0;return(0,h.jsx)(p,{invalid:!!a,required:!0,children:(0,h.jsxs)(O,{inputProps:{name:`email`,value:e,onChange:e=>t(e.target.value),onBlur:()=>r(!0)},errors:a,children:[(0,h.jsx)(i,{children:`Email`}),(0,h.jsx)(c,{type:`email`,onChange:k}),(0,h.jsx)(d.Error,{})]})})},j={render:()=>(0,h.jsx)(A,{}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Email`});await g(n).toHaveAttribute(`name`,`email`),await g(t.queryByRole(`alert`)).toBeNull(),await v.click(n),await v.tab(),await g(await t.findByRole(`alert`)).toHaveTextContent(`Required`),await g(n).toHaveAttribute(`aria-invalid`,`true`),await v.type(n,`jane@example.com`),await g(n).toHaveValue(`jane@example.com`),await g(k).toHaveBeenCalled(),await y(()=>g(t.queryByRole(`alert`)).toBeNull())}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`The composition consumers write: a label, the design system's \`Input\` and
helper text. The label points at the input and the input is described by the
text, all through context.

@summary Label, Input and description wired with no ids`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the input's\n`required` attribute.\n\n@summary Required field driven from the root alone",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"`invalid` on the field sets `aria-invalid` on the input, which drives its\ndestructive border, and the error is announced with the input.\n\n@summary Invalid field with the Input styled by aria-invalid",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the input through context.

@summary Disabled field driven from the root`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`\`readOnly\` on the field reaches the input through context. The value stays
focusable, copyable and submitted, and the input looks like any other.

@summary Read-only field driven from the root`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"The context is a default, never an override: an extra `aria-describedby` is\nconcatenated with the field's ids, `className` is merged and `size` passes\nthrough untouched.\n\n@summary Input's own props merge with, and win over, the field's context",...D.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"The contexts are an extension point: a provider nested in the field adds\n`name`, `value`, `onChange` and `onBlur` to `InputContext`, so a bare\n`<Input />` becomes controlled, and the errors to `FieldContext`, so a bare\n`<Field.Error />` renders them — here with `useState` and no form library.\nThe input's own `onChange` still runs, chained after the provider's.\n\n@summary Input controlled and errors supplied from outside the field",...j.parameters?.docs?.description}}},M=[`Default`,`Required`,`Invalid`,`Disabled`,`ReadOnly`,`OwnPropsWin`,`ControlledFromContext`]})))()}N();export{j as ControlledFromContext,S as Default,T as Disabled,w as Invalid,D as OwnPropsWin,E as ReadOnly,C as Required,M as __namedExportsOrder,x as default};