import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./label-D3XMsz5h.js";import{n as i,t as a}from"./field-u2vhzj15.js";import{n as o,t as s}from"./checkbox-XDaqkQj4.js";import{n as c,t as l}from"./field-checkbox-i3u6t7yZ.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{c(),o(),i(),n(),u=t(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/FieldCheckbox`,component:l,tags:[`autodocs`],decorators:[e=>(0,u.jsx)(`div`,{className:`w-120 max-w-full`,children:(0,u.jsx)(e,{})})],argTypes:{invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"FieldCheckbox is a `Field.Root` for a checkbox. It provides\n`CheckboxContext`, so the `Checkbox` inside associates itself with the label\nand the messages and takes `invalid`, `required`, `disabled` and `readOnly`\nfrom the field — no `id`, `htmlFor` or `aria-describedby` written by hand.\nThe box comes first and its label beside it, as in the design.\n\nIt knows nothing about form libraries, and its contexts compose: a provider\nnested inside it can extend `CheckboxContext` with `checked`,\n`onCheckedChange`, `onBlur` and `name`, and `FieldContext` with the errors."}}}},h=[`!dev`,`!autodocs`,`!manifest`],g={render:e=>(0,u.jsxs)(l,{...e,children:[(0,u.jsx)(s,{}),(0,u.jsx)(r,{children:`Send me the carrier newsletter`})]})},_={tags:h,render:()=>(0,u.jsxs)(l,{children:[(0,u.jsx)(s,{}),(0,u.jsx)(r,{children:`Send me the carrier newsletter`})]}),play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`checkbox`,{name:`Send me the carrier newsletter`});await d(n).toHaveAttribute(`data-slot`,`checkbox`),await d(n).not.toBeChecked(),await f.click(t.getByText(`Send me the carrier newsletter`)),await d(n).toBeChecked()}},v={render:e=>(0,u.jsxs)(l,{...e,children:[(0,u.jsx)(s,{}),(0,u.jsxs)(a.Content,{children:[(0,u.jsx)(r,{children:`Email notifications`}),(0,u.jsx)(a.Description,{children:`Get an email when a carrier returns a quote.`})]})]}),play:async({canvasElement:e})=>{let t=p(e);await d(t.getByRole(`checkbox`,{name:`Email notifications`})).toHaveAccessibleDescription(`Get an email when a carrier returns a quote.`)}},y={tags:h,render:()=>(0,u.jsxs)(l,{children:[(0,u.jsx)(s,{}),(0,u.jsxs)(a.Content,{children:[(0,u.jsx)(r,{children:`Email notifications for every quote a carrier returns on this agency`}),(0,u.jsx)(a.Description,{children:`Get an email when a carrier returns a quote.`})]})]}),play:async({canvasElement:e})=>{let t=p(e),n=e.querySelector(`[data-slot=field]`).getBoundingClientRect(),r=t.getByRole(`checkbox`).getBoundingClientRect(),i=t.getByText(/^Email notifications/).closest(`label`).getBoundingClientRect(),a=t.getByText(`Get an email when a carrier returns a quote.`).getBoundingClientRect();await d([r.width,r.height]).toEqual([16,16]),await d([r.left-n.left,r.top-n.top]).toEqual([4,4]),await d(i.left-n.left).toBe(36),await d(i.height).toBeGreaterThan(24),await d(a.top).toBe(i.bottom)}},b={render:e=>(0,u.jsxs)(l,{...e,children:[(0,u.jsx)(s,{}),(0,u.jsxs)(a.Content,{children:[(0,u.jsx)(a.Label,{optional:!0,tooltip:`Sent once a month, never shared.`,children:`Carrier newsletter`}),(0,u.jsx)(a.Description,{children:`News from the carriers you work with.`})]})]}),play:async({canvasElement:e})=>{let t=p(e);await d(t.getByRole(`checkbox`)).toHaveAccessibleName(`Carrier newsletter (optional)`),await d(t.getByRole(`button`,{name:`More information`}).closest(`label`)).toBeNull()}},x={tags:h,render:b.render,play:async({canvasElement:e})=>{let t=p(e);await f.click(t.getByRole(`button`,{name:`More information`})),await d(t.getByRole(`checkbox`)).not.toBeChecked()}},S={args:{required:!0},render:e=>(0,u.jsxs)(l,{...e,children:[(0,u.jsx)(s,{}),(0,u.jsx)(r,{children:`I accept the carrier terms`})]}),play:async({canvasElement:e})=>{let t=p(e);await d(t.getByRole(`checkbox`,{name:/I accept the carrier terms/})).toBeRequired()}},C={args:{invalid:!0,required:!0},render:e=>(0,u.jsxs)(l,{...e,children:[(0,u.jsx)(s,{}),(0,u.jsxs)(a.Content,{children:[(0,u.jsx)(r,{children:`I accept the carrier terms`}),(0,u.jsx)(a.Error,{errors:[{message:`Accept the terms to send the request.`}]})]})]}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`checkbox`,{name:/I accept the carrier terms/});await d(t).toHaveAttribute(`aria-invalid`,`true`),await d(t).toHaveAccessibleDescription(`Accept the terms to send the request.`)}},w={args:{disabled:!0},render:e=>(0,u.jsxs)(l,{...e,children:[(0,u.jsx)(s,{defaultChecked:!0}),(0,u.jsx)(r,{children:`Quote alerts by text`})]}),play:async({canvasElement:e})=>{let t=p(e);await d(t.getByRole(`checkbox`,{name:`Quote alerts by text`})).toBeDisabled()}},T={args:{readOnly:!0},render:e=>(0,u.jsxs)(l,{...e,children:[(0,u.jsx)(s,{defaultChecked:!0}),(0,u.jsx)(r,{children:`Instant appointments`})]}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`checkbox`,{name:`Instant appointments`});await d(t).toHaveAttribute(`aria-readonly`,`true`),await d(t).not.toBeDisabled(),await d(t).toBeChecked()}},E={tags:h,render:()=>(0,u.jsxs)(l,{readOnly:!0,children:[(0,u.jsx)(s,{defaultChecked:!0}),(0,u.jsx)(r,{children:`Instant appointments`})]}),play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`checkbox`,{name:`Instant appointments`});await f.click(n),await d(n).toBeChecked(),await f.click(t.getByText(`Instant appointments`)),await d(n).toBeChecked(),await f.keyboard(` `),await d(n).toHaveFocus(),await d(n).toBeChecked()}},D={tags:h,render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsxs)(l,{children:[(0,u.jsx)(s,{"aria-describedby":`news-hint`,disabled:!0}),(0,u.jsxs)(a.Content,{children:[(0,u.jsx)(r,{children:`Carrier news`}),(0,u.jsx)(a.Description,{children:`Shown on the home page.`})]})]}),(0,u.jsx)(`p`,{id:`news-hint`,className:`text-sm`,children:`You can change it later.`})]}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`checkbox`,{name:`Carrier news`});await d(t).toHaveAccessibleDescription(`Shown on the home page. You can change it later.`),await d(t).toBeDisabled()}},O=[`Default`,`LabelToggles`,`WithDescription`,`MatchesTheDesign`,`WithTooltip`,`TooltipDoesNotToggle`,`Required`,`Invalid`,`Disabled`,`ReadOnly`,`ReadOnlyIgnoresInput`,`OwnPropsWin`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <FieldCheckbox {...args}>
            <Checkbox />
            <Label>Send me the carrier newsletter</Label>
        </FieldCheckbox>
}`,...g.parameters?.docs?.source},description:{story:`The composition consumers write: the design system's \`Checkbox\` and a
label after it. The label names the box through context, and clicking it
toggles the box like clicking the box itself.

@summary Checkbox and its label on one line, wired with no ids`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <FieldCheckbox>
            <Checkbox />
            <Label>Send me the carrier newsletter</Label>
        </FieldCheckbox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: 'Send me the carrier newsletter'
    });
    await expect(box).toHaveAttribute('data-slot', 'checkbox');
    await expect(box).not.toBeChecked();
    await userEvent.click(canvas.getByText('Send me the carrier newsletter'));
    await expect(box).toBeChecked();
  }
}`,..._.parameters?.docs?.source},description:{story:`Clicking the label toggles the box, which the label names.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <FieldCheckbox {...args}>
            <Checkbox />
            <Field.Content>
                <Label>Email notifications</Label>
                <Field.Description>Get an email when a carrier returns a quote.</Field.Description>
            </Field.Content>
        </FieldCheckbox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox', {
      name: 'Email notifications'
    })).toHaveAccessibleDescription('Get an email when a carrier returns a quote.');
  }
}`,...v.parameters?.docs?.source},description:{story:`A \`Field.Content\` keeps the label and its description together beside the
box, and the description is announced with it. The box stays on the
label's first line however long the text below.

@summary Label and description stacked beside the box`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <FieldCheckbox>
            <Checkbox />
            <Field.Content>
                <Label>Email notifications for every quote a carrier returns on this agency</Label>
                <Field.Description>Get an email when a carrier returns a quote.</Field.Description>
            </Field.Content>
        </FieldCheckbox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvasElement.querySelector('[data-slot=field]')!.getBoundingClientRect();
    const box = canvas.getByRole('checkbox').getBoundingClientRect();
    const label = canvas.getByText(/^Email notifications/).closest('label')!.getBoundingClientRect();
    const description = canvas.getByText('Get an email when a carrier returns a quote.').getBoundingClientRect();
    await expect([box.width, box.height]).toEqual([16, 16]);
    await expect([box.left - root.left, box.top - root.top]).toEqual([4, 4]);
    await expect(label.left - root.left).toBe(36);
    await expect(label.height).toBeGreaterThan(24);
    await expect(description.top).toBe(label.bottom);
  }
}`,...y.parameters?.docs?.source},description:{story:`Figma's geometry: the 16px box centred in a 24px slot, the label 12px after
it, and the description flush under the label.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <FieldCheckbox {...args}>
            <Checkbox />
            <Field.Content>
                <Field.Label optional tooltip="Sent once a month, never shared.">
                    Carrier newsletter
                </Field.Label>
                <Field.Description>News from the carriers you work with.</Field.Description>
            </Field.Content>
        </FieldCheckbox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox')).toHaveAccessibleName('Carrier newsletter (optional)');
    await expect(canvas.getByRole('button', {
      name: 'More information'
    }).closest('label')).toBeNull();
  }
}`,...b.parameters?.docs?.source},description:{story:"`Field.Label` takes `optional` and a `tooltip` here as in any field. The\ninfo button sits beside the label, outside it, so it has its own name and\nopening the hint never toggles the box.\n\n@summary Label with the optional suffix and an info tooltip",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: WithTooltip.render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'More information'
    }));
    await expect(canvas.getByRole('checkbox')).not.toBeChecked();
  }
}`,...x.parameters?.docs?.source},description:{story:`Opening the hint leaves the box as it was.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => <FieldCheckbox {...args}>
            <Checkbox />
            <Label>I accept the carrier terms</Label>
        </FieldCheckbox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox', {
      name: /I accept the carrier terms/
    })).toBeRequired();
  }
}`,...S.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the box's\n`required`.\n\n@summary Required field driven from the root alone",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    required: true
  },
  render: args => <FieldCheckbox {...args}>
            <Checkbox />
            <Field.Content>
                <Label>I accept the carrier terms</Label>
                <Field.Error errors={[{
        message: 'Accept the terms to send the request.'
      }]} />
            </Field.Content>
        </FieldCheckbox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: /I accept the carrier terms/
    });
    await expect(box).toHaveAttribute('aria-invalid', 'true');
    await expect(box).toHaveAccessibleDescription('Accept the terms to send the request.');
  }
}`,...C.parameters?.docs?.source},description:{story:"`invalid` paints the box in the destructive tone and `Field.Error` shows the\nmessage under the label; the box announces both.\n\n@summary Invalid field with its error under the label",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <FieldCheckbox {...args}>
            <Checkbox defaultChecked />
            <Label>Quote alerts by text</Label>
        </FieldCheckbox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox', {
      name: 'Quote alerts by text'
    })).toBeDisabled();
  }
}`,...w.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the box through context.

@summary Disabled field driven from the root`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  render: args => <FieldCheckbox {...args}>
            <Checkbox defaultChecked />
            <Label>Instant appointments</Label>
        </FieldCheckbox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: 'Instant appointments'
    });
    await expect(box).toHaveAttribute('aria-readonly', 'true');
    await expect(box).not.toBeDisabled();
    await expect(box).toBeChecked();
  }
}`,...T.parameters?.docs?.source},description:{story:`\`readOnly\` on the field keeps the box focusable and announced as read-only,
but neither a click on it or its label nor Space toggles it.

@summary Read-only field: focusable, but it does not toggle`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <FieldCheckbox readOnly>
            <Checkbox defaultChecked />
            <Label>Instant appointments</Label>
        </FieldCheckbox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: 'Instant appointments'
    });
    await userEvent.click(box);
    await expect(box).toBeChecked();
    await userEvent.click(canvas.getByText('Instant appointments'));
    await expect(box).toBeChecked();
    await userEvent.keyboard(' ');
    await expect(box).toHaveFocus();
    await expect(box).toBeChecked();
  }
}`,...E.parameters?.docs?.source},description:{story:`A click on the box or its label, or Space, leaves a read-only box as it was.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <div className="flex flex-col gap-2">
            <FieldCheckbox>
                <Checkbox aria-describedby="news-hint" disabled />
                <Field.Content>
                    <Label>Carrier news</Label>
                    <Field.Description>Shown on the home page.</Field.Description>
                </Field.Content>
            </FieldCheckbox>
            <p id="news-hint" className="text-sm">
                You can change it later.
            </p>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: 'Carrier news'
    });
    await expect(box).toHaveAccessibleDescription('Shown on the home page. You can change it later.');
    await expect(box).toBeDisabled();
  }
}`,...D.parameters?.docs?.source},description:{story:"The context is a default, never an override: an extra `aria-describedby` is\nconcatenated with the field's ids, and a `disabled` on the box wins over the\nfield's.",...D.parameters?.docs?.description}}}})))()}k();export{g as Default,w as Disabled,C as Invalid,_ as LabelToggles,y as MatchesTheDesign,D as OwnPropsWin,T as ReadOnly,E as ReadOnlyIgnoresInput,S as Required,x as TooltipDoesNotToggle,v as WithDescription,b as WithTooltip,O as __namedExportsOrder,m as default};