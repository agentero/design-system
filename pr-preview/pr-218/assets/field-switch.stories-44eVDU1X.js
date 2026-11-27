import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-JEv23j35.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./label-BnuDTFw_.js";import{n as a,r as o,t as s}from"./field-BilStKb8.js";import{i as c,n as l,r as u,t as d}from"./switch-RgojZtdL.js";import{n as f,t as p}from"./field-switch-DikVELtX.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{m=t(),f(),a(),r(),l(),c(),h=n(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/FieldSwitch`,component:p,tags:[`autodocs`],decorators:[e=>(0,h.jsx)(`div`,{className:`w-120 max-w-full`,children:(0,h.jsx)(e,{})})],argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`],description:"Layout of the label and the toggle. `horizontal` (default) is one row, the toggle beside the text."},invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`horizontal`,invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"FieldSwitch is a `Field.Root` for an on/off toggle. It provides\n`SwitchContext`, so the `Switch` inside associates itself with the label and\nthe messages and takes `invalid`, `required`, `disabled` and `readOnly` from\nthe field — no `id`, `htmlFor` or `aria-describedby` written by hand. It\ndefaults to one row, with the small toggle next to the text.\n\nIt knows nothing about form libraries, and its contexts compose: a provider\nnested inside it can extend `SwitchContext` with `checked`,\n`onCheckedChange`, `onBlur` and `name`, and `FieldContext` with the errors,\nwhich is how a form library binds it. For react-hook-form, use `FormSwitch`."}}}},x={render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Auto-appointment requests`}),(0,h.jsx)(d,{})]}),play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`switch`,{name:`Auto-appointment requests`});await g(n).toHaveAttribute(`data-slot`,`switch`),await g(n).toHaveAttribute(`data-size`,`sm`),await g(n).not.toBeChecked();let r=t.getByText(`Auto-appointment requests`).closest(`label`),i=n.getBoundingClientRect();await g([i.width,i.height]).toEqual([30,16]),await g(i.left-r.getBoundingClientRect().right).toBe(16),await v.click(t.getByText(`Auto-appointment requests`)),await g(n).toBeChecked()}},S={args:{required:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Accept the carrier terms`}),(0,h.jsx)(d,{})]}),play:async({canvasElement:e})=>{let t=y(e);await g(t.getByRole(`switch`,{name:/Accept the carrier terms/})).toHaveAttribute(`aria-required`,`true`)}},C={args:{disabled:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Quote alerts by text`}),(0,h.jsx)(d,{defaultChecked:!0})]}),play:async({canvasElement:e})=>{let t=y(e);await g(t.getByRole(`switch`,{name:`Quote alerts by text`})).toBeDisabled()}},w={args:{readOnly:!0},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Instant appointments`}),(0,h.jsx)(d,{defaultChecked:!0})]}),play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`switch`,{name:`Instant appointments`});await g(n).toHaveAttribute(`aria-readonly`,`true`),await g(n).not.toBeDisabled(),await g(n).toBeChecked(),await v.click(n),await g(n).toBeChecked(),await v.click(t.getByText(`Instant appointments`)),await g(n).toBeChecked(),await v.keyboard(` `),await g(n).toHaveFocus(),await g(n).toBeChecked()}},T={render:e=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsxs)(p,{...e,children:[(0,h.jsxs)(s.Content,{children:[(0,h.jsx)(i,{children:`Carrier news`}),(0,h.jsx)(s.Description,{children:`Shown on the home page.`})]}),(0,h.jsx)(d,{size:`md`,"aria-describedby":`news-hint`})]}),(0,h.jsx)(`p`,{id:`news-hint`,className:`text-sm`,children:`You can change it later.`})]}),play:async({canvasElement:e})=>{let t=y(e).getByRole(`switch`,{name:`Carrier news`});await g(t).toHaveAccessibleDescription(`Shown on the home page. You can change it later.`),await g(t).toHaveAttribute(`data-size`,`md`),await g(t).toHaveClass(`h-6`)}},E={render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsxs)(s.Content,{children:[(0,h.jsx)(i,{children:`Email notifications`}),(0,h.jsx)(s.Description,{children:`Get an email when a carrier returns a quote.`})]}),(0,h.jsx)(d,{defaultChecked:!0})]}),play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`switch`,{name:`Email notifications`});await g(n).toBeChecked(),await g(n).toHaveAccessibleDescription(`Get an email when a carrier returns a quote.`);let r=t.getByText(`Email notifications`).closest(`label`);await g(n.getBoundingClientRect().top-r.getBoundingClientRect().top).toBe(4)}},D={render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(d,{}),(0,h.jsxs)(s.Content,{children:[(0,h.jsx)(i,{children:`Paperless billing`}),(0,h.jsx)(s.Description,{children:`Invoices arrive by email only.`})]})]}),play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`switch`,{name:`Paperless billing`}),r=e.querySelector(`[data-slot=field]`).getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getByText(`Paperless billing`).closest(`label`).getBoundingClientRect();await g(n).toHaveAccessibleDescription(`Invoices arrive by email only.`),await g(i.left).toBe(r.left),await g([i.width,i.height]).toEqual([30,16]),await g(a.left-i.right).toBe(16),await g(i.top-a.top).toBe(4)}},O={render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(d,{}),(0,h.jsxs)(s.Content,{children:[(0,h.jsx)(s.Label,{optional:!0,tooltip:`Policies stop printing once this is on.`,children:`Paperless billing`}),(0,h.jsx)(s.Description,{children:`Invoices arrive by email only.`})]})]}),play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`switch`,{name:/Paperless billing/}),r=t.getByRole(`button`,{name:`More information`}),i=e.querySelector(`[data-slot=field]`).getBoundingClientRect();await g(n).toHaveAccessibleName(`Paperless billing (optional)`),await g(n.getBoundingClientRect().top-i.top).toBe(4),await v.click(r),await g(n).not.toBeChecked()}},k={args:{orientation:`vertical`},render:e=>(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(i,{children:`Skip the one-year license check`}),(0,h.jsx)(d,{})]}),play:async({canvasElement:e})=>{let t=y(e);await g(e.querySelector(`[data-slot=field]`)).toHaveAttribute(`data-orientation`,`vertical`);let n=t.getByRole(`switch`,{name:`Skip the one-year license check`});await g(n).toBeVisible(),await g(n.getBoundingClientRect().width).toBe(30)}},A={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,h.jsx)(`div`,{className:`w-56`,children:(0,h.jsxs)(p,{...e,children:[(0,h.jsxs)(s.Content,{children:[(0,h.jsx)(i,{children:`Paperless billing for every policy on this agency account`}),(0,h.jsx)(s.Description,{children:`Invoices arrive by email only.`})]}),(0,h.jsx)(d,{})]})}),play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`switch`,{name:/Paperless billing/}),r=e.querySelector(`[data-slot=field]`).getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getByText(/Paperless billing/).closest(`label`).getBoundingClientRect();await g(a.height).toBeGreaterThan(24),await g([i.width,i.height]).toEqual([30,16]),await g(i.top-r.top).toBe(4),await g(i.right).toBeLessThanOrEqual(r.right)}},j=({switchProps:e,errors:t,children:n})=>{let r=(0,m.use)(u),i=(0,m.use)(o);return(0,h.jsx)(u,{value:{...r,...e},children:(0,h.jsx)(o,{value:i&&{...i,errors:t},children:n})})},M=_(),N={render:()=>{let[e,t]=(0,m.useState)(!1),n=e?void 0:[{message:`Turn it on to continue.`}];return(0,h.jsx)(p,{invalid:!!n,children:(0,h.jsxs)(j,{switchProps:{name:`terms`,checked:e,onCheckedChange:t},errors:n,children:[(0,h.jsxs)(s.Content,{children:[(0,h.jsx)(i,{children:`I accept the terms`}),(0,h.jsx)(s.Error,{})]}),(0,h.jsx)(d,{onCheckedChange:M})]})})},play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`switch`,{name:`I accept the terms`});await g(n).toHaveAttribute(`aria-invalid`,`true`),await g(t.getByRole(`alert`)).toHaveTextContent(`Turn it on to continue.`),await v.click(n),await g(n).toBeChecked(),await g(M).toHaveBeenCalledWith(!0),await g(t.queryByRole(`alert`)).toBeNull()}},P=[`Default`,`Required`,`Disabled`,`ReadOnly`,`OwnPropsWin`,`WithDescription`,`SwitchFirst`,`WithTooltip`,`Vertical`,`NarrowWithLongLabel`,`ControlledFromContext`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSwitch {...args}>
            <Label>Auto-appointment requests</Label>
            <Switch />
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Auto-appointment requests'
    });
    await expect(toggle).toHaveAttribute('data-slot', 'switch');
    await expect(toggle).toHaveAttribute('data-size', 'sm');
    await expect(toggle).not.toBeChecked();
    const label = canvas.getByText('Auto-appointment requests').closest('label')!;
    const box = toggle.getBoundingClientRect();
    await expect([box.width, box.height]).toEqual([30, 16]);
    await expect(box.left - label.getBoundingClientRect().right).toBe(16);
    await userEvent.click(canvas.getByText('Auto-appointment requests'));
    await expect(toggle).toBeChecked();
  }
}`,...x.parameters?.docs?.source},description:{story:`The composition consumers write: a label and the design system's \`Switch\`.
The label names the toggle through context, and clicking it flips the
toggle like clicking the toggle itself.

@summary Label and Switch on one row, wired with no ids`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => <FieldSwitch {...args}>
            <Label>Accept the carrier terms</Label>
            <Switch />
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('switch', {
      name: /Accept the carrier terms/
    })).toHaveAttribute('aria-required', 'true');
  }
}`,...S.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the toggle's\n`aria-required`.\n\n@summary Required field driven from the root alone",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <FieldSwitch {...args}>
            <Label>Quote alerts by text</Label>
            <Switch defaultChecked />
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('switch', {
      name: 'Quote alerts by text'
    })).toBeDisabled();
  }
}`,...C.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the toggle through context.

@summary Disabled field driven from the root`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  render: args => <FieldSwitch {...args}>
            <Label>Instant appointments</Label>
            <Switch defaultChecked />
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Instant appointments'
    });
    await expect(toggle).toHaveAttribute('aria-readonly', 'true');
    await expect(toggle).not.toBeDisabled();
    await expect(toggle).toBeChecked();
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
    await userEvent.click(canvas.getByText('Instant appointments'));
    await expect(toggle).toBeChecked();
    await userEvent.keyboard(' ');
    await expect(toggle).toHaveFocus();
    await expect(toggle).toBeChecked();
  }
}`,...w.parameters?.docs?.source},description:{story:`\`readOnly\` on the field keeps the toggle focusable and announced as
read-only, but neither a click nor a key flips it.

@summary Read-only field: focusable, but it does not flip`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
            <FieldSwitch {...args}>
                <Field.Content>
                    <Label>Carrier news</Label>
                    <Field.Description>Shown on the home page.</Field.Description>
                </Field.Content>
                <Switch size="md" aria-describedby="news-hint" />
            </FieldSwitch>
            <p id="news-hint" className="text-sm">
                You can change it later.
            </p>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Carrier news'
    });
    await expect(toggle).toHaveAccessibleDescription('Shown on the home page. You can change it later.');
    await expect(toggle).toHaveAttribute('data-size', 'md');
    await expect(toggle).toHaveClass('h-6');
  }
}`,...T.parameters?.docs?.source},description:{story:"The context is a default, never an override: an extra `aria-describedby` is\nconcatenated with the field's ids and `size=\"md\"` replaces the field's `sm`.\n\n@summary Switch's own props merge with, and win over, the field's context",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSwitch {...args}>
            <Field.Content>
                <Label>Email notifications</Label>
                <Field.Description>Get an email when a carrier returns a quote.</Field.Description>
            </Field.Content>
            <Switch defaultChecked />
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Email notifications'
    });
    await expect(toggle).toBeChecked();
    await expect(toggle).toHaveAccessibleDescription('Get an email when a carrier returns a quote.');
    const label = canvas.getByText('Email notifications').closest('label')!;
    await expect(toggle.getBoundingClientRect().top - label.getBoundingClientRect().top).toBe(4);
  }
}`,...E.parameters?.docs?.source},description:{story:`A \`Field.Content\` keeps the label and its description together, and the
description is announced with the toggle. The toggle lines up with the
label, not with the middle of the block.

@summary Label and description stacked beside the toggle`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSwitch {...args}>
            <Switch />
            <Field.Content>
                <Label>Paperless billing</Label>
                <Field.Description>Invoices arrive by email only.</Field.Description>
            </Field.Content>
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Paperless billing'
    });
    const root = canvasElement.querySelector('[data-slot=field]')!.getBoundingClientRect();
    const box = toggle.getBoundingClientRect();
    const label = canvas.getByText('Paperless billing').closest('label')!.getBoundingClientRect();
    await expect(toggle).toHaveAccessibleDescription('Invoices arrive by email only.');
    await expect(box.left).toBe(root.left);
    await expect([box.width, box.height]).toEqual([30, 16]);
    await expect(label.left - box.right).toBe(16);
    await expect(box.top - label.top).toBe(4);
  }
}`,...D.parameters?.docs?.source},description:{story:`The toggle can lead instead: write it before the \`Field.Content\`. Use this
order in lists of settings, where the toggles line up on the left.

@summary Toggle first, then the label and its description`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSwitch {...args}>
            <Switch />
            <Field.Content>
                <Field.Label optional tooltip="Policies stop printing once this is on.">
                    Paperless billing
                </Field.Label>
                <Field.Description>Invoices arrive by email only.</Field.Description>
            </Field.Content>
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: /Paperless billing/
    });
    const info = canvas.getByRole('button', {
      name: 'More information'
    });
    const root = canvasElement.querySelector('[data-slot=field]')!.getBoundingClientRect();
    await expect(toggle).toHaveAccessibleName('Paperless billing (optional)');
    await expect(toggle.getBoundingClientRect().top - root.top).toBe(4);
    await userEvent.click(info);
    await expect(toggle).not.toBeChecked();
  }
}`,...O.parameters?.docs?.source},description:{story:"`Field.Label` takes `optional` and a `tooltip` here as in any field. The info\nbutton sits beside the label, outside it, so it has its own name and\nopening the hint never flips the toggle.\n\n@summary Label with the optional suffix and an info tooltip",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <FieldSwitch {...args}>
            <Label>Skip the one-year license check</Label>
            <Switch />
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvasElement.querySelector('[data-slot=field]')).toHaveAttribute('data-orientation', 'vertical');
    const toggle = canvas.getByRole('switch', {
      name: 'Skip the one-year license check'
    });
    await expect(toggle).toBeVisible();
    await expect(toggle.getBoundingClientRect().width).toBe(30);
  }
}`,...k.parameters?.docs?.source},description:{story:`\`orientation="vertical"\` stacks the label above the toggle, as in the other
fields. Use it when the switch sits in a form column next to other fields.

@summary Label above the toggle`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: args => <div className="w-56">
            <FieldSwitch {...args}>
                <Field.Content>
                    <Label>Paperless billing for every policy on this agency account</Label>
                    <Field.Description>Invoices arrive by email only.</Field.Description>
                </Field.Content>
                <Switch />
            </FieldSwitch>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: /Paperless billing/
    });
    const root = canvasElement.querySelector('[data-slot=field]')!.getBoundingClientRect();
    const box = toggle.getBoundingClientRect();
    const label = canvas.getByText(/Paperless billing/).closest('label')!.getBoundingClientRect();
    await expect(label.height).toBeGreaterThan(24);
    await expect([box.width, box.height]).toEqual([30, 16]);
    await expect(box.top - root.top).toBe(4);
    await expect(box.right).toBeLessThanOrEqual(root.right);
  }
}`,...A.parameters?.docs?.source},description:{story:`In a narrow column the label wraps and the description follows it; the
toggle keeps its size and stays on the label's first line.

@summary Long label in a narrow column keeps the toggle whole`,...A.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const errors = checked ? undefined : [{
      message: 'Turn it on to continue.'
    }];
    return <FieldSwitch invalid={!!errors}>
                <ContextExtension switchProps={{
        name: 'terms',
        checked,
        onCheckedChange: setChecked
      }} errors={errors}>
                    <Field.Content>
                        <Label>I accept the terms</Label>
                        <Field.Error />
                    </Field.Content>
                    <Switch onCheckedChange={onOwnCheckedChange} />
                </ContextExtension>
            </FieldSwitch>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'I accept the terms'
    });
    await expect(toggle).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByRole('alert')).toHaveTextContent('Turn it on to continue.');
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
    await expect(onOwnCheckedChange).toHaveBeenCalledWith(true);
    await expect(canvas.queryByRole('alert')).toBeNull();
  }
}`,...N.parameters?.docs?.source},description:{story:"The contexts are an extension point: a provider nested in the field adds\n`name`, `checked` and `onCheckedChange` to `SwitchContext`, so a bare\n`<Switch />` becomes controlled, and the errors to `FieldContext`, so a\nbare `<Field.Error />` renders them — here with `useState` and no form\nlibrary. The switch's own `onCheckedChange` still runs, chained after the\nprovider's.\n\n@summary Switch controlled and errors supplied from outside the field",...N.parameters?.docs?.description}}}})))()}F();export{N as ControlledFromContext,x as Default,C as Disabled,A as NarrowWithLongLabel,T as OwnPropsWin,w as ReadOnly,S as Required,D as SwitchFirst,k as Vertical,E as WithDescription,O as WithTooltip,P as __namedExportsOrder,b as default};