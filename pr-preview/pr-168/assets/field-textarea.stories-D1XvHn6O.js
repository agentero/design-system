import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Ci9eiYCz.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./utils-nsk-j2e0.js";import{n as a,t as o}from"./label-oK8AmSJd.js";import{a as s,n as c,r as l,t as u}from"./field-Cqz-7Bss.js";import{i as d,n as f,r as p,t as m}from"./textarea-BYyH5ry4.js";var h,g,_,v;function y(){return(y=e((()=>{r(),c(),d(),h=n(),g=({children:e})=>{let t=s(),n=t&&{id:t.controlId,"aria-describedby":t.describedBy,"aria-invalid":t.invalid||void 0,required:t.required||void 0,disabled:t.disabled||void 0,readOnly:t.readOnly||void 0};return(0,h.jsx)(p,{value:n,children:e})},_=[`data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:grid data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:grid-flow-row-dense data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:grid-cols-[1fr_auto] data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:gap-x-4`,`data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>*]:col-span-2 data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]]:contents`,`data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]>[data-slot=textarea-box]]:col-span-2`,`data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>:is([data-slot=field-description],[data-slot=field-error])]:col-span-1`,`data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=field-description]]:truncate`,`data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]>[data-slot=textarea-counter]]:col-start-2`,`data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]>[data-slot=textarea-counter]]:mt-0`,`data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]>[data-slot=textarea-counter]]:self-end`,`[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])]:grid [&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])]:grid-flow-row-dense [&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])]:grid-cols-[1fr_auto] [&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])]:gap-x-4`,`[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>*]:col-span-2 [&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]]:contents`,`[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]>[data-slot=textarea-box]]:col-span-2`,`[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>:is([data-slot=field-description],[data-slot=field-error])]:col-span-1`,`[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=field-description]]:truncate`,`[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]>[data-slot=textarea-counter]]:col-start-2`,`[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]>[data-slot=textarea-counter]]:mt-0`,`[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]>[data-slot=textarea-counter]]:self-end`],v=({className:e,children:t,...n})=>(0,h.jsx)(u.Root,{className:i(_,e),...n,children:(0,h.jsx)(g,{children:t})}),v.displayName=`FieldTextArea`;try{v.displayName=`FieldTextArea`,v.__docgenInfo={description:"A `Field.Root` for a multi-line text control: it provides `TextAreaContext`,\nso the `TextArea` inside associates itself with the label and the messages\nand takes `invalid`, `required`, `disabled` and `readOnly` from the field.\nEvery other part (`Label`, `Field.Description`, `Field.Error`) works as in\nany field. With `maxLength` on the `TextArea`, its count shares the row under\nthe box with the description or the error, on the right; the description\nthen keeps to one line and truncates, while an error wraps.\n\nForm-library agnostic, and its contexts compose: a provider nested inside it\ncan extend `TextAreaContext` with `name`, `value`, `onChange`, `onBlur` and\n`ref` to control the `TextArea`, and `FieldContext` with the errors, on top\nof the wiring `FieldTextArea` already set.",displayName:`FieldTextArea`,filePath:`/home/runner/work/design-system/design-system/src/field-textarea/field-textarea.tsx`,methods:[],props:{orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Layout of the field. `vertical` (default) stacks label, control and\nmessages. `horizontal` is one row at every width: the first child fills it\nand the rest keep their natural width, aligned to the right, so the\ncontrols of stacked fields line up. `responsive` stacks below `28rem` and\nbehaves like `horizontal` from there, measured on the field itself, so it\nneeds no particular wrapper. In both, `Field.Content` groups a control with\nits messages, or a label with its description.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical" | "responsive"`,value:[{value:`"horizontal"`},{value:`"vertical"`},{value:`"responsive"`}]}},invalid:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Marks the field as failing validation: sets `data-invalid` on the root and\n`aria-invalid` on the control through its context, which drives the\ncontrol's destructive border. The label keeps its color by design.",name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Field for a multi-line text control, wiring the TextArea inside it`,example:`<FieldTextArea invalid={!!error} required>
  <Label>Reason</Label>
  <TextArea placeholder="Tell us in your own words" />
  <Field.Description>Shared with the carrier.</Field.Description>
  <Field.Error errors={[error]} />
</FieldTextArea>`}}}catch{}})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{b=t(),y(),c(),a(),f(),d(),x=n(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/FieldTextArea`,component:v,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`vertical`,invalid:!1,disabled:!1,readOnly:!1,required:!1},decorators:[e=>(0,x.jsx)(`div`,{style:{maxWidth:`28rem`},children:(0,x.jsx)(e,{})})],parameters:{docs:{description:{component:"FieldTextArea is a `Field.Root` for a multi-line text control. It provides\n`TextAreaContext`, so the `TextArea` inside associates itself with the label\nand the messages and takes `invalid`, `required`, `disabled` and `readOnly`\nfrom the field — no `id`, `htmlFor`, `aria-describedby` or `aria-invalid`\nwritten by hand.\n\nIt knows nothing about form libraries, and its contexts compose: a provider\nnested inside it can extend `TextAreaContext` with `value`, `onChange`,\n`onBlur` and `name`, and `FieldContext` with the errors, as the last story\nshows."}}}},O={render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Notes`}),(0,x.jsx)(m,{placeholder:`Anything the underwriter should know`}),(0,x.jsx)(u.Description,{children:`Shared with the carrier along with the request.`})]}),play:async({canvasElement:e})=>{let t=E(e).getByRole(`textbox`,{name:`Notes`});await S(t).toHaveAttribute(`data-slot`,`textarea`),await S(t).toHaveAccessibleDescription(`Shared with the carrier along with the request.`),await S(t).not.toHaveAttribute(`aria-invalid`)}},k={args:{required:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Reason`}),(0,x.jsx)(m,{placeholder:`Tell us in your own words`})]}),play:async({canvasElement:e})=>{let t=E(e);await S(t.getByRole(`textbox`,{name:`Reason`})).toBeRequired(),await S(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},A={args:{invalid:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Reason`}),(0,x.jsx)(m,{defaultValue:`n/a`}),(0,x.jsx)(u.Error,{errors:[{message:`Tell us why you are cancelling.`}]})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`textbox`,{name:`Reason`}),r=t.getByRole(`alert`);await S(n).toHaveAttribute(`aria-invalid`,`true`),await S(n).toHaveAttribute(`aria-describedby`,S.stringContaining(r.id)),await S(e.querySelector(`[data-slot=field][data-invalid="true"]`)).not.toBeNull()}},j={args:{disabled:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Notes`}),(0,x.jsx)(m,{defaultValue:`Locked once the request is submitted.`})]}),play:async({canvasElement:e})=>{let t=E(e);await S(t.getByRole(`textbox`,{name:`Notes`})).toBeDisabled()}},M={args:{readOnly:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Underwriter notes`}),(0,x.jsx)(m,{defaultValue:`Approved subject to a roof inspection.`}),(0,x.jsx)(u.Description,{children:`Written by the carrier; contact them to change it.`})]}),play:async({canvasElement:e})=>{let t=E(e).getByRole(`textbox`,{name:`Underwriter notes`});await S(t).toHaveAttribute(`readonly`),await S(t).not.toBeDisabled()}},N={render:e=>(0,x.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Message`}),(0,x.jsx)(m,{size:`lg`,className:`max-h-60`,"aria-describedby":`message-hint`}),(0,x.jsx)(u.Description,{children:`Sent to the agent as written.`})]}),(0,x.jsx)(`p`,{id:`message-hint`,className:`text-sm text-text-input-placeholder`,children:`Markdown is not rendered.`})]}),play:async({canvasElement:e})=>{let t=E(e).getByRole(`textbox`,{name:`Message`});await S(t).toHaveAccessibleDescription(`Sent to the agent as written. Markdown is not rendered.`),await S(t).toHaveAttribute(`data-size`,`lg`),await S(t).toHaveClass(`max-h-60`)}},P={render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{optional:!0,children:`Notes`}),(0,x.jsx)(m,{maxLength:500,placeholder:`Placeholder`}),(0,x.jsx)(u.Description,{children:`Shared with the carrier along with the request, and kept on the policy file for audits.`})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`textbox`,{name:/Notes/}),r=e.querySelector(`[data-slot=textarea-counter]`),i=t.getByText(/Shared with the carrier/),a=n.getBoundingClientRect(),o=r.getBoundingClientRect(),s=i.getBoundingClientRect();await S(r).toHaveTextContent(`0/500`),await S(n).toHaveAccessibleDescription(`Shared with the carrier along with the request, and kept on the policy file for audits. 0 of 500 characters`),await S(s.top-a.bottom).toBe(8),await S(o.top).toBe(s.top),await S(Math.round(o.right)).toBe(Math.round(a.right)),await S(o.left-s.right).toBe(16),await S(s.height).toBe(21),await S(getComputedStyle(i).textOverflow).toBe(`ellipsis`)}},F={args:{invalid:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Notes`}),(0,x.jsx)(m,{maxLength:40,defaultValue:`Roof replaced in 2024 after hail damage, garage added.`}),(0,x.jsx)(u.Error,{errors:[{message:`Keep it brief`}]})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`textbox`,{name:`Notes`}),r=e.querySelector(`[data-slot=textarea-counter]`),i=e.querySelector(`[data-slot=textarea-overflow] span`),a=t.getByRole(`alert`);await S(r).toHaveTextContent(`54/40`),await S(i.textContent).toBe(n.value.slice(40)),await S(getComputedStyle(i).color).toBe(getComputedStyle(a).color),await w.type(n,` More text.`),await S(r).toHaveTextContent(`65/40`)}},I={tags:[`!dev`,`!autodocs`,`!manifest`],args:{orientation:`horizontal`},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Reason`}),(0,x.jsx)(m,{maxLength:500})]}),play:async({canvasElement:e})=>{let t=E(e),n=e.querySelector(`[data-slot=field]`),r=t.getByText(`Reason`).closest(`label`).getBoundingClientRect(),i=t.getByRole(`textbox`,{name:`Reason`}).getBoundingClientRect(),a=e.querySelector(`[data-slot=textarea-counter]`).getBoundingClientRect();await S(getComputedStyle(n).display).toBe(`flex`),await S(i.left).toBeGreaterThan(r.right),await S(a.top-i.bottom).toBe(8),await S(Math.round(a.right)).toBe(Math.round(i.right))}},L={tags:[`!dev`,`!autodocs`,`!manifest`],args:{orientation:`horizontal`},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Reason`}),(0,x.jsxs)(u.Content,{className:`flex-1`,children:[(0,x.jsx)(m,{maxLength:500}),(0,x.jsx)(u.Description,{children:`Shared with the carrier.`})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`textbox`,{name:`Reason`}).getBoundingClientRect(),r=t.getByText(`Shared with the carrier.`).getBoundingClientRect(),i=e.querySelector(`[data-slot=textarea-counter]`).getBoundingClientRect();await S(i.top).toBe(r.top),await S(r.top-n.bottom).toBe(8),await S(Math.round(i.right)).toBe(Math.round(n.right))}},R={args:{invalid:!0,required:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Reason`}),(0,x.jsx)(m,{maxLength:500}),(0,x.jsx)(u.Error,{errors:[{message:`This field is required`}]})]}),play:async({canvasElement:e})=>{let t=E(e),n=e.querySelector(`[data-slot=textarea-counter]`),r=t.getByRole(`alert`);await S(n.getBoundingClientRect().top).toBe(r.getBoundingClientRect().top),await S(getComputedStyle(n).color).toBe(getComputedStyle(r).color)}},z=({textAreaProps:e,errors:t,children:n})=>{let r=(0,b.use)(p),i=(0,b.use)(l);return(0,x.jsx)(p,{value:{...r,...e},children:(0,x.jsx)(l,{value:i&&{...i,errors:t},children:n})})},B=C(),V={render:()=>{let[e,t]=(0,b.useState)(``),[n,r]=(0,b.useState)(!1),i=n&&!e?[{message:`Required`}]:void 0;return(0,x.jsx)(v,{invalid:!!i,required:!0,children:(0,x.jsxs)(z,{textAreaProps:{name:`notes`,value:e,onChange:e=>t(e.target.value),onBlur:()=>r(!0)},errors:i,children:[(0,x.jsx)(o,{children:`Notes`}),(0,x.jsx)(m,{onChange:B}),(0,x.jsx)(u.Error,{})]})})},play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`textbox`,{name:`Notes`});await S(n).toHaveAttribute(`name`,`notes`),await S(t.queryByRole(`alert`)).toBeNull(),await w.click(n),await w.tab(),await S(await t.findByRole(`alert`)).toHaveTextContent(`Required`),await S(n).toHaveAttribute(`aria-invalid`,`true`),await w.type(n,`Roof replaced in 2024.`),await S(n).toHaveValue(`Roof replaced in 2024.`),await S(B).toHaveBeenCalled(),await T(()=>S(t.queryByRole(`alert`)).toBeNull())}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`The composition consumers write: a label, the design system's \`TextArea\` and
helper text. The label points at the control and the control is described
by the text, all through context.

@summary Label, TextArea and description wired with no ids`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the control's\n`required` attribute.\n\n@summary Required field driven from the root alone",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"`invalid` on the field sets `aria-invalid` on the control, which drives its\ndestructive border, and the error is announced with the control.\n\n@summary Invalid field with the TextArea styled by aria-invalid",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the control through context.

@summary Disabled field driven from the root`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`\`readOnly\` on the field reaches the control through context. The value
stays focusable, copyable and submitted, and the control looks like any
other.

@summary Read-only field driven from the root`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"The context is a default, never an override: an extra `aria-describedby` is\nconcatenated with the field's ids, `className` is merged and `size` passes\nthrough untouched.\n\n@summary TextArea's own props merge with, and win over, the field's context",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <FieldTextArea {...args}>
            <Label optional>Notes</Label>
            <TextArea maxLength={500} placeholder="Placeholder" />
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
    const box = textarea.getBoundingClientRect();
    const count = counter.getBoundingClientRect();
    const help = description.getBoundingClientRect();
    await expect(counter).toHaveTextContent('0/500');
    await expect(textarea).toHaveAccessibleDescription('Shared with the carrier along with the request, and kept on the policy file for audits. 0 of 500 characters');
    await expect(help.top - box.bottom).toBe(8);
    await expect(count.top).toBe(help.top);
    await expect(Math.round(count.right)).toBe(Math.round(box.right));
    await expect(count.left - help.right).toBe(16);
    await expect(help.height).toBe(21);
    await expect(getComputedStyle(description).textOverflow).toBe('ellipsis');
  }
}`,...P.parameters?.docs?.source},description:{story:`Figma's empty state with a count: the description on the left and the count
on the right, 16px apart under the box. Beside a count a long description
keeps to one line and truncates; a screen reader still hears all of it, with
the count.

@summary Count beside a truncated description, under the box`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldTextArea {...args}>
            <Label>Notes</Label>
            <TextArea maxLength={40} defaultValue="Roof replaced in 2024 after hail damage, garage added." />
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
    const overText = canvasElement.querySelector('[data-slot=textarea-overflow] span')!;
    const alert = canvas.getByRole('alert');
    await expect(counter).toHaveTextContent('54/40');
    await expect(overText.textContent).toBe((textarea as HTMLTextAreaElement).value.slice(40));
    await expect(getComputedStyle(overText).color).toBe(getComputedStyle(alert).color);
    await userEvent.type(textarea, ' More text.');
    await expect(counter).toHaveTextContent('65/40');
  }
}`,...F.parameters?.docs?.source},description:{story:`Past the limit, as in Figma: the user keeps typing, the characters over the
limit and the count read destructive, and the form's validation shows its
error where the description goes.

@summary Over the limit: extra characters, count and error in red`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: a layout edge case, not a Figma state.
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    orientation: 'horizontal'
  },
  render: args => <FieldTextArea {...args}>
            <Label>Reason</Label>
            <TextArea maxLength={500} />
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvasElement.querySelector('[data-slot=field]')!;
    const label = canvas.getByText('Reason').closest('label')!.getBoundingClientRect();
    const box = canvas.getByRole('textbox', {
      name: 'Reason'
    }).getBoundingClientRect();
    const count = canvasElement.querySelector('[data-slot=textarea-counter]')!.getBoundingClientRect();
    await expect(getComputedStyle(root).display).toBe('flex');
    await expect(box.left).toBeGreaterThan(label.right);
    await expect(count.top - box.bottom).toBe(8);
    await expect(Math.round(count.right)).toBe(Math.round(box.right));
  }
}`,...I.parameters?.docs?.source},description:{story:`A horizontal field keeps its row, label beside the box, and the count sits
under the box rather than beside it.

@summary Horizontal field: count under the box, label beside it`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: a layout edge case, not a Figma state.
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    orientation: 'horizontal'
  },
  render: args => <FieldTextArea {...args}>
            <Label>Reason</Label>
            <Field.Content className="flex-1">
                <TextArea maxLength={500} />
                <Field.Description>Shared with the carrier.</Field.Description>
            </Field.Content>
        </FieldTextArea>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('textbox', {
      name: 'Reason'
    }).getBoundingClientRect();
    const help = canvas.getByText('Shared with the carrier.').getBoundingClientRect();
    const count = canvasElement.querySelector('[data-slot=textarea-counter]')!.getBoundingClientRect();
    await expect(count.top).toBe(help.top);
    await expect(help.top - box.bottom).toBe(8);
    await expect(Math.round(count.right)).toBe(Math.round(box.right));
  }
}`,...L.parameters?.docs?.source},description:{story:`A \`Field.Content\` holding the box and its messages gets the same row as a
vertical field: description left, count right.

@summary Count beside the description inside a Field.Content`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    required: true
  },
  render: args => <FieldTextArea {...args}>
            <Label>Reason</Label>
            <TextArea maxLength={500} />
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
    await expect(counter.getBoundingClientRect().top).toBe(alert.getBoundingClientRect().top);
    await expect(getComputedStyle(counter).color).toBe(getComputedStyle(alert).color);
  }
}`,...R.parameters?.docs?.source},description:{story:`An invalid field shows its error where the description goes, and the count
beside it turns destructive too, as in Figma.

@summary Error and destructive count share the row under the box`,...R.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"The contexts are an extension point: a provider nested in the field adds\n`name`, `value`, `onChange` and `onBlur` to `TextAreaContext`, so a bare\n`<TextArea />` becomes controlled, and the errors to `FieldContext`, so a\nbare `<Field.Error />` renders them — here with `useState` and no form\nlibrary. The text area's own `onChange` still runs, chained after the\nprovider's.\n\n@summary TextArea controlled and errors supplied from outside the field",...V.parameters?.docs?.description}}},H=[`Default`,`Required`,`Invalid`,`Disabled`,`ReadOnly`,`OwnPropsWin`,`WithCounter`,`OverLimit`,`HorizontalWithCounter`,`ContentWithCounter`,`InvalidWithCounter`,`ControlledFromContext`]})))()}U();export{L as ContentWithCounter,V as ControlledFromContext,O as Default,j as Disabled,I as HorizontalWithCounter,A as Invalid,R as InvalidWithCounter,F as OverLimit,N as OwnPropsWin,M as ReadOnly,k as Required,P as WithCounter,H as __namedExportsOrder,D as default};