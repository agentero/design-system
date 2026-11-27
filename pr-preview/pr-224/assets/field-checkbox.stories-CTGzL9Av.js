import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,n as r,r as i,t as a}from"./dist-B9nTnCIW.js";import{n as o,t as s}from"./label-BCtcC6BF.js";import{a as c,n as l,t as u}from"./field-CvESa5Sz.js";import{i as d,n as f,r as p,t as m}from"./checkbox-CE3JgGNl.js";var h,g,_,v;function y(){return(y=e((()=>{a(),n(),d(),l(),h=t(),g=({children:e})=>{let t=c(),n=t&&{id:t.controlId,"aria-describedby":t.describedBy,"aria-invalid":t.invalid||void 0,required:t.required||void 0,disabled:t.disabled||void 0,readOnly:t.readOnly||void 0};return(0,h.jsx)(p,{value:n,children:e})},_=r({base:[`items-start gap-3`,`[&>:first-child]:flex-none`,`[&>[data-slot=checkbox]]:m-1`,`[&>[data-slot=field-content]>[data-slot=field-error]]:-mt-2`]}),v=({className:e,children:t,...n})=>(0,h.jsx)(u.Root,{orientation:`horizontal`,className:i(_(),e),...n,children:(0,h.jsx)(g,{children:t})}),v.displayName=`FieldCheckbox`;try{_.displayName=`FieldCheckbox`,_.__docgenInfo={description:``,displayName:`FieldCheckbox`,filePath:`/home/runner/work/design-system/design-system/src/field-checkbox/field-checkbox.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{y(),f(),l(),o(),b=t(),{expect:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/FieldCheckbox`,component:v,tags:[`autodocs`],decorators:[e=>(0,b.jsx)(`div`,{className:`w-120 max-w-full`,children:(0,b.jsx)(e,{})})],argTypes:{invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"FieldCheckbox is a `Field.Root` for a checkbox. It provides\n`CheckboxContext`, so the `Checkbox` inside associates itself with the label\nand the messages and takes `invalid`, `required`, `disabled` and `readOnly`\nfrom the field — no `id`, `htmlFor` or `aria-describedby` written by hand.\nThe box comes first and its label beside it, as in the design.\n\nIt knows nothing about form libraries, and its contexts compose: a provider\nnested inside it can extend `CheckboxContext` with `checked`,\n`onCheckedChange`, `onBlur` and `name`, and `FieldContext` with the errors."}}}},T=[`!dev`,`!autodocs`,`!manifest`],E={render:e=>(0,b.jsxs)(v,{...e,children:[(0,b.jsx)(m,{}),(0,b.jsx)(s,{children:`Send me the carrier newsletter`})]})},D={tags:T,render:()=>(0,b.jsxs)(v,{children:[(0,b.jsx)(m,{}),(0,b.jsx)(s,{children:`Send me the carrier newsletter`})]}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`checkbox`,{name:`Send me the carrier newsletter`});await x(n).toHaveAttribute(`data-slot`,`checkbox`),await x(n).not.toBeChecked(),await S.click(t.getByText(`Send me the carrier newsletter`)),await x(n).toBeChecked()}},O={render:e=>(0,b.jsxs)(v,{...e,children:[(0,b.jsx)(m,{}),(0,b.jsxs)(u.Content,{children:[(0,b.jsx)(s,{children:`Email notifications`}),(0,b.jsx)(u.Description,{children:`Get an email when a carrier returns a quote.`})]})]}),play:async({canvasElement:e})=>{let t=C(e);await x(t.getByRole(`checkbox`,{name:`Email notifications`})).toHaveAccessibleDescription(`Get an email when a carrier returns a quote.`)}},k={tags:T,render:()=>(0,b.jsxs)(v,{children:[(0,b.jsx)(m,{}),(0,b.jsxs)(u.Content,{children:[(0,b.jsx)(s,{children:`Email notifications for every quote a carrier returns on this agency`}),(0,b.jsx)(u.Description,{children:`Get an email when a carrier returns a quote.`})]})]}),play:async({canvasElement:e})=>{let t=C(e),n=e.querySelector(`[data-slot=field]`).getBoundingClientRect(),r=t.getByRole(`checkbox`).getBoundingClientRect(),i=t.getByText(/^Email notifications/).closest(`label`).getBoundingClientRect(),a=t.getByText(`Get an email when a carrier returns a quote.`).getBoundingClientRect();await x([r.width,r.height]).toEqual([16,16]),await x([r.left-n.left,r.top-n.top]).toEqual([4,4]),await x(i.left-n.left).toBe(36),await x(i.height).toBeGreaterThan(24),await x(a.top).toBe(i.bottom)}},A={tags:T,render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsxs)(v,{invalid:!0,children:[(0,b.jsx)(m,{}),(0,b.jsxs)(u.Content,{children:[(0,b.jsx)(s,{children:`Carrier terms`}),(0,b.jsx)(u.Description,{children:`We email you a copy.`}),(0,b.jsx)(u.Error,{errors:[{message:`Accept the carrier terms.`}]})]})]}),(0,b.jsxs)(v,{invalid:!0,children:[(0,b.jsx)(m,{}),(0,b.jsxs)(u.Content,{children:[(0,b.jsx)(s,{children:`Privacy policy`}),(0,b.jsx)(u.Error,{errors:[{message:`Accept the privacy policy.`}]})]})]})]}),play:async({canvasElement:e})=>{let t=C(e),n=e=>t.getByText(e).getBoundingClientRect(),r=e=>t.getByText(e).closest(`label`).getBoundingClientRect();await x(n(`We email you a copy.`).top).toBe(r(`Carrier terms`).bottom),await x(n(`Accept the carrier terms.`).top).toBe(n(`We email you a copy.`).bottom),await x(n(`Accept the privacy policy.`).top).toBe(r(`Privacy policy`).bottom)}},j={render:e=>(0,b.jsxs)(v,{...e,children:[(0,b.jsx)(m,{}),(0,b.jsxs)(u.Content,{children:[(0,b.jsx)(u.Label,{optional:!0,tooltip:`Sent once a month, never shared.`,children:`Carrier newsletter`}),(0,b.jsx)(u.Description,{children:`News from the carriers you work with.`})]})]}),play:async({canvasElement:e})=>{let t=C(e);await x(t.getByRole(`checkbox`)).toHaveAccessibleName(`Carrier newsletter (optional)`),await x(t.getByRole(`button`,{name:`More information`}).closest(`label`)).toBeNull()}},M={tags:T,render:j.render,play:async({canvasElement:e})=>{let t=C(e);await S.click(t.getByRole(`button`,{name:`More information`})),await x(t.getByRole(`checkbox`)).not.toBeChecked()}},N={args:{required:!0},render:e=>(0,b.jsxs)(v,{...e,children:[(0,b.jsx)(m,{}),(0,b.jsx)(s,{children:`I accept the carrier terms`})]}),play:async({canvasElement:e})=>{let t=C(e);await x(t.getByRole(`checkbox`,{name:/I accept the carrier terms/})).toBeRequired()}},P={args:{invalid:!0,required:!0},render:e=>(0,b.jsxs)(v,{...e,children:[(0,b.jsx)(m,{}),(0,b.jsxs)(u.Content,{children:[(0,b.jsx)(s,{children:`I accept the carrier terms`}),(0,b.jsx)(u.Error,{errors:[{message:`Accept the terms to send the request.`}]})]})]}),play:async({canvasElement:e})=>{let t=C(e).getByRole(`checkbox`,{name:/I accept the carrier terms/});await x(t).toHaveAttribute(`aria-invalid`,`true`),await x(t).toHaveAccessibleDescription(`Accept the terms to send the request.`)}},F={args:{disabled:!0},render:e=>(0,b.jsxs)(v,{...e,children:[(0,b.jsx)(m,{defaultChecked:!0}),(0,b.jsx)(s,{children:`Quote alerts by text`})]}),play:async({canvasElement:e})=>{let t=C(e);await x(t.getByRole(`checkbox`,{name:`Quote alerts by text`})).toBeDisabled()}},I={args:{readOnly:!0},render:e=>(0,b.jsxs)(v,{...e,children:[(0,b.jsx)(m,{defaultChecked:!0}),(0,b.jsx)(s,{children:`Instant appointments`})]}),play:async({canvasElement:e})=>{let t=C(e).getByRole(`checkbox`,{name:`Instant appointments`});await x(t).toHaveAttribute(`aria-readonly`,`true`),await x(t).not.toBeDisabled(),await x(t).toBeChecked()}},L={tags:T,render:()=>(0,b.jsxs)(v,{readOnly:!0,children:[(0,b.jsx)(m,{defaultChecked:!0}),(0,b.jsx)(s,{children:`Instant appointments`})]}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`checkbox`,{name:`Instant appointments`});await S.click(n),await x(n).toBeChecked(),await S.click(t.getByText(`Instant appointments`)),await x(n).toBeChecked(),await S.keyboard(` `),await x(n).toHaveFocus(),await x(n).toBeChecked()}},R={tags:T,render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,b.jsxs)(v,{children:[(0,b.jsx)(m,{"aria-describedby":`news-hint`,disabled:!0}),(0,b.jsxs)(u.Content,{children:[(0,b.jsx)(s,{children:`Carrier news`}),(0,b.jsx)(u.Description,{children:`Shown on the home page.`})]})]}),(0,b.jsx)(`p`,{id:`news-hint`,className:`text-sm`,children:`You can change it later.`})]}),play:async({canvasElement:e})=>{let t=C(e).getByRole(`checkbox`,{name:`Carrier news`});await x(t).toHaveAccessibleDescription(`Shown on the home page. You can change it later.`),await x(t).toBeDisabled()}},z=[`Default`,`LabelToggles`,`WithDescription`,`MatchesTheDesign`,`ErrorFlushUnderTheText`,`WithTooltip`,`TooltipDoesNotToggle`,`Required`,`Invalid`,`Disabled`,`ReadOnly`,`ReadOnlyIgnoresInput`,`OwnPropsWin`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <FieldCheckbox {...args}>
            <Checkbox />
            <Label>Send me the carrier newsletter</Label>
        </FieldCheckbox>
}`,...E.parameters?.docs?.source},description:{story:`The composition consumers write: the design system's \`Checkbox\` and a
label after it. The label names the box through context, and clicking it
toggles the box like clicking the box itself.

@summary Checkbox and its label on one line, wired with no ids`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Clicking the label toggles the box, which the label names.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`A \`Field.Content\` keeps the label and its description together beside the
box, and the description is announced with it. The box stays on the
label's first line however long the text below.

@summary Label and description stacked beside the box`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Figma's geometry: the 16px box centred in a 24px slot, the label 12px after
it, and the description flush under the label.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <div className="flex flex-col gap-4">
            <FieldCheckbox invalid>
                <Checkbox />
                <Field.Content>
                    <Label>Carrier terms</Label>
                    <Field.Description>We email you a copy.</Field.Description>
                    <Field.Error errors={[{
          message: 'Accept the carrier terms.'
        }]} />
                </Field.Content>
            </FieldCheckbox>
            <FieldCheckbox invalid>
                <Checkbox />
                <Field.Content>
                    <Label>Privacy policy</Label>
                    <Field.Error errors={[{
          message: 'Accept the privacy policy.'
        }]} />
                </Field.Content>
            </FieldCheckbox>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rect = (text: string) => canvas.getByText(text).getBoundingClientRect();
    const label = (text: string) => canvas.getByText(text).closest('label')!.getBoundingClientRect();
    await expect(rect('We email you a copy.').top).toBe(label('Carrier terms').bottom);
    await expect(rect('Accept the carrier terms.').top).toBe(rect('We email you a copy.').bottom);
    await expect(rect('Accept the privacy policy.').top).toBe(label('Privacy policy').bottom);
  }
}`,...A.parameters?.docs?.source},description:{story:`The label, its description and its error read as one block: each sits flush
under the one before it, with or without a description.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"`Field.Label` takes `optional` and a `tooltip` here as in any field. The\ninfo button sits beside the label, outside it, so it has its own name and\nopening the hint never toggles the box.\n\n@summary Label with the optional suffix and an info tooltip",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Opening the hint leaves the box as it was.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the box's\n`required`.\n\n@summary Required field driven from the root alone",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:"`invalid` paints the box in the destructive tone and `Field.Error` shows the\nmessage under the label; the box announces both.\n\n@summary Invalid field with its error under the label",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the box through context.

@summary Disabled field driven from the root`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`\`readOnly\` on the field keeps the box focusable and announced as read-only,
but neither a click on it or its label nor Space toggles it.

@summary Read-only field: focusable, but it does not toggle`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`A click on the box or its label, or Space, leaves a read-only box as it was.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"The context is a default, never an override: an extra `aria-describedby` is\nconcatenated with the field's ids, and a `disabled` on the box wins over the\nfield's.",...R.parameters?.docs?.description}}}})))()}B();export{E as Default,F as Disabled,A as ErrorFlushUnderTheText,P as Invalid,D as LabelToggles,k as MatchesTheDesign,R as OwnPropsWin,I as ReadOnly,L as ReadOnlyIgnoresInput,N as Required,M as TooltipDoesNotToggle,O as WithDescription,j as WithTooltip,z as __namedExportsOrder,w as default};