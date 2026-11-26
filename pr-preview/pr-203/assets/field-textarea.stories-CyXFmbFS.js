import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-B5Qlx0aQ.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./label-CfB66jag.js";import{n as a,r as o,t as s}from"./field-BAUGd7xi.js";import{i as c,n as l,r as u,t as d}from"./textarea-CAyaA4-d.js";import{n as f,t as p}from"./field-textarea-DgG8tJwJ.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{m=t(),f(),a(),r(),l(),c(),h=n(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/FieldTextArea`,component:p,tags:[`autodocs`],argTypes:{invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{invalid:!1,disabled:!1,readOnly:!1,required:!1},decorators:[e=>(0,h.jsx)(`div`,{style:{maxWidth:`28rem`},children:(0,h.jsx)(e,{})})],parameters:{docs:{description:{component:"FieldTextArea is a `Field.Root` for a multi-line text control. It provides\n`TextAreaContext`, so the `TextArea` inside associates itself with the label\nand the messages and takes `invalid`, `required`, `disabled` and `readOnly`\nfrom the field — no `id`, `htmlFor`, `aria-describedby` or `aria-invalid`\nwritten by hand.\n\nIt knows nothing about form libraries, and its contexts compose: a provider\nnested inside it can extend `TextAreaContext` with `value`, `onChange`,\n`onBlur` and `name`, and `FieldContext` with the errors, as the last story\nshows."}}}},S={render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Notes`}),(0,h.jsx)(d,{placeholder:`Anything the underwriter should know`}),(0,h.jsx)(s.Description,{children:`Shared with the carrier along with the request.`})]}),play:async({canvasElement:e})=>{let t=b(e).getByRole(`textbox`,{name:`Notes`});await g(t).toHaveAttribute(`data-slot`,`textarea`),await g(t).toHaveAccessibleDescription(`Shared with the carrier along with the request.`),await g(t).not.toHaveAttribute(`aria-invalid`)}},C={args:{required:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Reason`}),(0,h.jsx)(d,{placeholder:`Tell us in your own words`})]}),play:async({canvasElement:e})=>{let t=b(e);await g(t.getByRole(`textbox`,{name:`Reason`})).toBeRequired(),await g(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},w={args:{invalid:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Reason`}),(0,h.jsx)(d,{defaultValue:`n/a`}),(0,h.jsx)(s.Error,{errors:[{message:`Tell us why you are cancelling.`}]})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Reason`}),r=t.getByRole(`alert`);await g(n).toHaveAttribute(`aria-invalid`,`true`),await g(n).toHaveAttribute(`aria-describedby`,g.stringContaining(r.id)),await g(e.querySelector(`[data-slot=field][data-invalid="true"]`)).not.toBeNull()}},T={args:{disabled:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Notes`}),(0,h.jsx)(d,{defaultValue:`Locked once the request is submitted.`})]}),play:async({canvasElement:e})=>{let t=b(e);await g(t.getByRole(`textbox`,{name:`Notes`})).toBeDisabled()}},E={args:{readOnly:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Underwriter notes`}),(0,h.jsx)(d,{defaultValue:`Approved subject to a roof inspection.`}),(0,h.jsx)(s.Description,{children:`Written by the carrier; contact them to change it.`})]}),play:async({canvasElement:e})=>{let t=b(e).getByRole(`textbox`,{name:`Underwriter notes`});await g(t).toHaveAttribute(`readonly`),await g(t).not.toBeDisabled()}},D={render:e=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Message`}),(0,h.jsx)(d,{size:`lg`,className:`max-h-60`,"aria-describedby":`message-hint`}),(0,h.jsx)(s.Description,{children:`Sent to the agent as written.`})]}),(0,h.jsx)(`p`,{id:`message-hint`,className:`text-sm text-text-input-placeholder`,children:`Markdown is not rendered.`})]}),play:async({canvasElement:e})=>{let t=b(e).getByRole(`textbox`,{name:`Message`});await g(t).toHaveAccessibleDescription(`Sent to the agent as written. Markdown is not rendered.`),await g(t).toHaveAttribute(`data-size`,`lg`),await g(t).toHaveClass(`max-h-60`)}},O={render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{optional:!0,children:`Notes`}),(0,h.jsx)(d,{limit:500,placeholder:`Placeholder`}),(0,h.jsx)(s.Description,{children:`Shared with the carrier along with the request, and kept on the policy file for audits.`})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:/Notes/}),r=e.querySelector(`[data-slot=textarea-counter]`),i=t.getByText(/Shared with the carrier/),a=e.querySelector(`[data-slot=textarea-root]`).getBoundingClientRect(),o=r.getBoundingClientRect(),s=i.getBoundingClientRect();await g(r).toHaveTextContent(`0/500`),await g(n).toHaveAccessibleDescription(`Shared with the carrier along with the request, and kept on the policy file for audits. 0 of 500 characters`),await g(o.bottom).toBeLessThan(a.bottom),await g(o.left).toBe(n.getBoundingClientRect().left),await g(s.top-a.bottom).toBe(8)}},k={args:{invalid:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Notes`}),(0,h.jsx)(d,{limit:40,defaultValue:`Roof replaced in 2024 after hail damage, garage added.`}),(0,h.jsx)(s.Error,{errors:[{message:`Keep it brief`}]})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Notes`}),r=e.querySelector(`[data-slot=textarea-counter]`),i=e.querySelector(`[data-slot=textarea-overflow] [data-over]`),a=t.getByRole(`alert`);await g(r).toHaveTextContent(`54/40`),await g(i.textContent).toBe(n.value.slice(40)),await g(getComputedStyle(i).color).toBe(getComputedStyle(a).color),await v.type(n,` More text.`),await g(r).toHaveTextContent(`65/40`)}},A={args:{invalid:!0,required:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Reason`}),(0,h.jsx)(d,{limit:500}),(0,h.jsx)(s.Error,{errors:[{message:`This field is required`}]})]}),play:async({canvasElement:e})=>{let t=b(e),n=e.querySelector(`[data-slot=textarea-counter]`),r=t.getByRole(`alert`),i=e.querySelector(`[data-slot=textarea-root]`);await g(r.getBoundingClientRect().top).toBeGreaterThan(i.getBoundingClientRect().bottom),await g(getComputedStyle(n).color).toBe(getComputedStyle(r).color),await g(getComputedStyle(i).borderColor).toBe(getComputedStyle(r).color)}},j=({textAreaProps:e,errors:t,children:n})=>{let r=(0,m.use)(u),i=(0,m.use)(o);return(0,h.jsx)(u,{value:{...r,...e},children:(0,h.jsx)(o,{value:i&&{...i,errors:t},children:n})})},M=_(),N={render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(!1),a=n&&!e?[{message:`Required`}]:void 0;return(0,h.jsx)(p,{invalid:!!a,required:!0,children:(0,h.jsxs)(j,{textAreaProps:{name:`notes`,value:e,onChange:e=>t(e.target.value),onBlur:()=>r(!0)},errors:a,children:[(0,h.jsx)(i,{children:`Notes`}),(0,h.jsx)(d,{onChange:M}),(0,h.jsx)(s.Error,{})]})})},play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Notes`});await g(n).toHaveAttribute(`name`,`notes`),await g(t.queryByRole(`alert`)).toBeNull(),await v.click(n),await v.tab(),await g(await t.findByRole(`alert`)).toHaveTextContent(`Required`),await g(n).toHaveAttribute(`aria-invalid`,`true`),await v.type(n,`Roof replaced in 2024.`),await g(n).toHaveValue(`Roof replaced in 2024.`),await g(M).toHaveBeenCalled(),await y(()=>g(t.queryByRole(`alert`)).toBeNull())}},P=[`Default`,`Required`,`Invalid`,`Disabled`,`ReadOnly`,`OwnPropsWin`,`WithCounter`,`OverLimit`,`InvalidWithCounter`,`ControlledFromContext`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <FieldTextArea {...args}>
            <Label>Notes</Label>
            <TextArea placeholder="Anything the underwriter should know" />
            <Field.Description>Shared with the carrier along with the request.</Field.Description>
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toHaveAttribute('data-slot', 'textarea');
    await expect(textarea).toHaveAccessibleDescription('Shared with the carrier along with the request.');
    await expect(textarea).not.toHaveAttribute('aria-invalid');
  }
}`,...S.parameters?.docs?.source},description:{story:`The composition consumers write: a label, the design system's \`TextArea\` and
helper text. The label points at the control and the control is described
by the text, all through context.

@summary Label, TextArea and description wired with no ids`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => <FieldTextArea {...args}>
            <Label>Reason</Label>
            <TextArea placeholder="Tell us in your own words" />
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Reason'
    })).toBeRequired();
    await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...C.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the control's\n`required` attribute.\n\n@summary Required field driven from the root alone",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldTextArea {...args}>
            <Label>Reason</Label>
            <TextArea defaultValue="n/a" />
            <Field.Error errors={[{
      message: 'Tell us why you are cancelling.'
    }]} />
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Reason'
    });
    const alert = canvas.getByRole('alert');
    await expect(textarea).toHaveAttribute('aria-invalid', 'true');
    await expect(textarea).toHaveAttribute('aria-describedby', expect.stringContaining(alert.id));
    await expect(canvasElement.querySelector('[data-slot=field][data-invalid="true"]')).not.toBeNull();
  }
}`,...w.parameters?.docs?.source},description:{story:"`invalid` on the field sets `aria-invalid` on the control, which drives its\ndestructive border, and the error is announced with the control.\n\n@summary Invalid field with the TextArea styled by aria-invalid",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <FieldTextArea {...args}>
            <Label>Notes</Label>
            <TextArea defaultValue="Locked once the request is submitted." />
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Notes'
    })).toBeDisabled();
  }
}`,...T.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the control through context.

@summary Disabled field driven from the root`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  render: args => <FieldTextArea {...args}>
            <Label>Underwriter notes</Label>
            <TextArea defaultValue="Approved subject to a roof inspection." />
            <Field.Description>Written by the carrier; contact them to change it.</Field.Description>
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Underwriter notes'
    });
    await expect(textarea).toHaveAttribute('readonly');
    await expect(textarea).not.toBeDisabled();
  }
}`,...E.parameters?.docs?.source},description:{story:`\`readOnly\` on the field reaches the control through context. The value
stays focusable, copyable and submitted, and the control looks like any
other.

@summary Read-only field driven from the root`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
            <FieldTextArea {...args}>
                <Label>Message</Label>
                <TextArea size="lg" className="max-h-60" aria-describedby="message-hint" />
                <Field.Description>Sent to the agent as written.</Field.Description>
            </FieldTextArea>
            <p id="message-hint" className="text-sm text-text-input-placeholder">
                Markdown is not rendered.
            </p>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Message'
    });
    await expect(textarea).toHaveAccessibleDescription('Sent to the agent as written. Markdown is not rendered.');
    await expect(textarea).toHaveAttribute('data-size', 'lg');
    await expect(textarea).toHaveClass('max-h-60');
  }
}`,...D.parameters?.docs?.source},description:{story:"The context is a default, never an override: an extra `aria-describedby` is\nconcatenated with the field's ids, `className` is merged and `size` passes\nthrough untouched.\n\n@summary TextArea's own props merge with, and win over, the field's context",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <FieldTextArea {...args}>
            <Label optional>Notes</Label>
            <TextArea limit={500} placeholder="Placeholder" />
            <Field.Description>
                Shared with the carrier along with the request, and kept on the policy file for audits.
            </Field.Description>
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: /Notes/
    });
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    const description = canvas.getByText(/Shared with the carrier/);
    const frame = canvasElement.querySelector('[data-slot=textarea-root]')!.getBoundingClientRect();
    const count = counter.getBoundingClientRect();
    const help = description.getBoundingClientRect();
    await expect(counter).toHaveTextContent('0/500');
    await expect(textarea).toHaveAccessibleDescription('Shared with the carrier along with the request, and kept on the policy file for audits. 0 of 500 characters');
    await expect(count.bottom).toBeLessThan(frame.bottom);
    await expect(count.left).toBe(textarea.getBoundingClientRect().left);
    await expect(help.top - frame.bottom).toBe(8);
  }
}`,...O.parameters?.docs?.source},description:{story:`With a count, the count sits inside the box and the description keeps the
row under it, wrapping as in any field. A screen reader hears both.

@summary Count inside the box, description under it`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldTextArea {...args}>
            <Label>Notes</Label>
            <TextArea limit={40} defaultValue="Roof replaced in 2024 after hail damage, garage added." />
            <Field.Error errors={[{
      message: 'Keep it brief'
    }]} />
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    const overText = canvasElement.querySelector('[data-slot=textarea-overflow] [data-over]')!;
    const alert = canvas.getByRole('alert');
    await expect(counter).toHaveTextContent('54/40');
    await expect(overText.textContent).toBe((textarea as HTMLTextAreaElement).value.slice(40));
    await expect(getComputedStyle(overText).color).toBe(getComputedStyle(alert).color);
    await userEvent.type(textarea, ' More text.');
    await expect(counter).toHaveTextContent('65/40');
  }
}`,...k.parameters?.docs?.source},description:{story:`Past the limit, as in Figma: the user keeps typing, the characters over the
limit and the count read destructive, and the form's validation shows its
error where the description goes.

@summary Over the limit: extra characters, count and error in red`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    required: true
  },
  render: args => <FieldTextArea {...args}>
            <Label>Reason</Label>
            <TextArea limit={500} />
            <Field.Error errors={[{
      message: 'This field is required'
    }]} />
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    const alert = canvas.getByRole('alert');
    const frame = canvasElement.querySelector('[data-slot=textarea-root]')!;
    await expect(alert.getBoundingClientRect().top).toBeGreaterThan(frame.getBoundingClientRect().bottom);
    await expect(getComputedStyle(counter).color).toBe(getComputedStyle(alert).color);
    await expect(getComputedStyle(frame).borderColor).toBe(getComputedStyle(alert).color);
  }
}`,...A.parameters?.docs?.source},description:{story:`An invalid field turns the box's border and the count inside it
destructive, and shows its error under the box.

@summary Destructive border and count, error under the box`,...A.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const errors = touched && !value ? [{
      message: 'Required'
    }] : undefined;
    return <FieldTextArea invalid={!!errors} required>
                <ContextExtension textAreaProps={{
        name: 'notes',
        value,
        onChange: event => setValue(event.target.value),
        onBlur: () => setTouched(true)
      }} errors={errors}>
                    <Label>Notes</Label>
                    <TextArea onChange={onOwnChange} />
                    <Field.Error />
                </ContextExtension>
            </FieldTextArea>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toHaveAttribute('name', 'notes');
    await expect(canvas.queryByRole('alert')).toBeNull();
    await userEvent.click(textarea);
    await userEvent.tab();
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Required');
    await expect(textarea).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(textarea, 'Roof replaced in 2024.');
    await expect(textarea).toHaveValue('Roof replaced in 2024.');
    await expect(onOwnChange).toHaveBeenCalled();
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
  }
}`,...N.parameters?.docs?.source},description:{story:"The contexts are an extension point: a provider nested in the field adds\n`name`, `value`, `onChange` and `onBlur` to `TextAreaContext`, so a bare\n`<TextArea />` becomes controlled, and the errors to `FieldContext`, so a\nbare `<Field.Error />` renders them — here with `useState` and no form\nlibrary. The text area's own `onChange` still runs, chained after the\nprovider's.\n\n@summary TextArea controlled and errors supplied from outside the field",...N.parameters?.docs?.description}}}})))()}F();export{N as ControlledFromContext,S as Default,T as Disabled,w as Invalid,A as InvalidWithCounter,k as OverLimit,D as OwnPropsWin,E as ReadOnly,C as Required,O as WithCounter,P as __namedExportsOrder,x as default};