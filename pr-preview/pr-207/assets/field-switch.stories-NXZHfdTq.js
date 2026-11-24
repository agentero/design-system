import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-3hmWN7Jx.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./utils-BL6AXtr8.js";import{n as a,t as o}from"./label-tlZQ_QPj.js";import{a as s,n as c,r as l,t as u}from"./field-CIsGQX0H.js";import{i as d,n as f,r as p,t as m}from"./switch-PpIw3p6T.js";var h,g,_,v;function y(){return(y=e((()=>{r(),c(),d(),h=n(),g=({children:e})=>{let t=s(),n=t&&{id:t.controlId,"aria-describedby":t.describedBy,"aria-invalid":t.invalid||void 0,required:t.required||void 0,disabled:t.disabled||void 0,readOnly:t.readOnly||void 0,size:`sm`};return(0,h.jsx)(p,{value:n,children:e})},_=[`data-[orientation=horizontal]:items-start data-[orientation=horizontal]:gap-4`,`data-[orientation=horizontal]:[&>:first-child]:flex-initial`,`data-[orientation=horizontal]:[&>[data-slot=switch][data-size=sm]]:mt-1`],v=({orientation:e=`horizontal`,className:t,children:n,...r})=>(0,h.jsx)(u.Root,{orientation:e,className:i(_,t),...r,children:(0,h.jsx)(g,{children:n})}),v.displayName=`FieldSwitch`;try{v.displayName=`FieldSwitch`,v.__docgenInfo={description:'A `Field.Root` for an on/off toggle: it provides `SwitchContext`, so the\n`Switch` inside associates itself with the label and the messages and takes\n`invalid`, `required`, `disabled` and `readOnly` from the field, plus the\n`sm` size of the design. Every other part (`Label`, `Field.Content`,\n`Field.Description`, `Field.Error`) works as in any field.\n\nUnlike the other fields it defaults to `orientation="horizontal"`: the\nlabel and the toggle read as one row, the toggle 16px after the text and\ncentred on the label\'s first line. Wrap the label with its description and\nits error in a `Field.Content`, so they stack together beside the toggle\ninstead of joining the row. Pass `vertical` to put the toggle under the\nlabel.\n\nForm-library agnostic, and its contexts compose: a provider nested inside it\ncan extend `SwitchContext` with `name`, `checked`, `onCheckedChange`,\n`onBlur` and `ref` to control the `Switch`, and `FieldContext` with the\nerrors, on top of the wiring `FieldSwitch` already set.',displayName:`FieldSwitch`,filePath:`/home/runner/work/design-system/design-system/src/field-switch/field-switch.tsx`,methods:[],props:{required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},invalid:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Marks the field as failing validation: sets `data-invalid` on the root and\n`aria-invalid` on the control through its context, which drives the\ncontrol's destructive border. The label keeps its color by design.",name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}},orientation:{defaultValue:{value:`horizontal`},declarations:[{fileName:`design-system/src/field-switch/field-switch.tsx`,name:`TypeLiteral`}],description:"`horizontal` (default) puts the label, or a `Field.Content` with the\nlabel, its description and its error, on one row with the toggle beside\nit; `vertical` stacks the toggle under the label.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}}},tags:{summary:`Field for an on/off toggle, wiring the Switch inside it`,example:`<FieldSwitch>
  <Field.Content>
    <Label>Email notifications</Label>
    <Field.Description>Get an email when a quote is ready.</Field.Description>
  </Field.Content>
  <Switch checked={enabled} onCheckedChange={setEnabled} />
</FieldSwitch>`}}}catch{}})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{b=t(),y(),c(),a(),f(),d(),x=n(),{expect:S,fn:C,userEvent:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/FieldSwitch`,component:v,tags:[`autodocs`],decorators:[e=>(0,x.jsx)(`div`,{className:`w-120 max-w-full`,children:(0,x.jsx)(e,{})})],argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`],description:"Layout of the label and the toggle. `horizontal` (default) is one row, the toggle beside the text."},invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`horizontal`,invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"FieldSwitch is a `Field.Root` for an on/off toggle. It provides\n`SwitchContext`, so the `Switch` inside associates itself with the label and\nthe messages and takes `invalid`, `required`, `disabled` and `readOnly` from\nthe field — no `id`, `htmlFor` or `aria-describedby` written by hand. It\ndefaults to one row, the toggle (`sm`, as in the design) 16px after the\ntext.\n\nIt knows nothing about form libraries, and its contexts compose: a provider\nnested inside it can extend `SwitchContext` with `checked`,\n`onCheckedChange`, `onBlur` and `name`, and `FieldContext` with the errors,\nas the last story shows."}}}},D={render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Auto-appointment requests`}),(0,x.jsx)(m,{})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`switch`,{name:`Auto-appointment requests`});await S(n).toHaveAttribute(`data-slot`,`switch`),await S(n).toHaveAttribute(`data-size`,`sm`),await S(n).not.toBeChecked();let r=t.getByText(`Auto-appointment requests`).closest(`label`),i=n.getBoundingClientRect();await S([i.width,i.height]).toEqual([30,16]),await S(i.left-r.getBoundingClientRect().right).toBe(16),await w.click(t.getByText(`Auto-appointment requests`)),await S(n).toBeChecked()}},O={render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsxs)(u.Content,{children:[(0,x.jsx)(o,{children:`Email notifications`}),(0,x.jsx)(u.Description,{children:`Get an email when a carrier returns a quote.`})]}),(0,x.jsx)(m,{defaultChecked:!0})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`switch`,{name:`Email notifications`});await S(n).toBeChecked(),await S(n).toHaveAccessibleDescription(`Get an email when a carrier returns a quote.`);let r=t.getByText(`Email notifications`).closest(`label`);await S(n.getBoundingClientRect().top-r.getBoundingClientRect().top).toBe(4)}},k={render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(m,{}),(0,x.jsxs)(u.Content,{children:[(0,x.jsx)(o,{children:`Paperless billing`}),(0,x.jsx)(u.Description,{children:`Invoices arrive by email only.`})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`switch`,{name:`Paperless billing`}),r=e.querySelector(`[data-slot=field]`).getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getByText(`Paperless billing`).closest(`label`).getBoundingClientRect();await S(n).toHaveAccessibleDescription(`Invoices arrive by email only.`),await S(i.left).toBe(r.left),await S([i.width,i.height]).toEqual([30,16]),await S(a.left-i.right).toBe(16),await S(i.top-a.top).toBe(4)}},A={render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(m,{}),(0,x.jsxs)(u.Content,{children:[(0,x.jsx)(u.Label,{optional:!0,tooltip:`Policies stop printing once this is on.`,children:`Paperless billing`}),(0,x.jsx)(u.Description,{children:`Invoices arrive by email only.`})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`switch`,{name:/Paperless billing/}),r=t.getByRole(`button`,{name:`More information`}),i=e.querySelector(`[data-slot=field]`).getBoundingClientRect();await S(n).toHaveAccessibleName(`Paperless billing (optional)`),await S(n.getBoundingClientRect().top-i.top).toBe(4),await w.click(r),await S(n).not.toBeChecked()}},j={render:e=>(0,x.jsx)(`div`,{className:`w-56`,children:(0,x.jsxs)(v,{...e,children:[(0,x.jsxs)(u.Content,{children:[(0,x.jsx)(o,{children:`Paperless billing for every policy on this agency account`}),(0,x.jsx)(u.Description,{children:`Invoices arrive by email only.`})]}),(0,x.jsx)(m,{})]})}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`switch`,{name:/Paperless billing/}),r=e.querySelector(`[data-slot=field]`).getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getByText(/Paperless billing/).closest(`label`).getBoundingClientRect();await S(a.height).toBeGreaterThan(24),await S([i.width,i.height]).toEqual([30,16]),await S(i.top-r.top).toBe(4),await S(i.right).toBeLessThanOrEqual(r.right)}},M={args:{required:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Accept the carrier terms`}),(0,x.jsx)(m,{})]}),play:async({canvasElement:e})=>{let t=T(e);await S(t.getByRole(`switch`,{name:/Accept the carrier terms/})).toHaveAttribute(`aria-required`,`true`)}},N={args:{orientation:`vertical`},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Skip the one-year license check`}),(0,x.jsx)(m,{})]}),play:async({canvasElement:e})=>{let t=T(e);await S(e.querySelector(`[data-slot=field]`)).toHaveAttribute(`data-orientation`,`vertical`);let n=t.getByRole(`switch`,{name:`Skip the one-year license check`});await S(n).toBeVisible(),await S(n.getBoundingClientRect().width).toBe(30)}},P={args:{invalid:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsxs)(u.Content,{children:[(0,x.jsx)(o,{children:`I accept the carrier's terms`}),(0,x.jsx)(u.Error,{errors:[{message:`Accept the terms to continue.`}]})]}),(0,x.jsx)(m,{})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`switch`,{name:`I accept the carrier's terms`}),r=t.getByRole(`alert`);await S(n).toHaveAttribute(`aria-invalid`,`true`),await S(n).toHaveAttribute(`aria-describedby`,S.stringContaining(r.id));let i=t.getByText(`I accept the carrier's terms`).closest(`label`);await S(r.getBoundingClientRect().left).toBe(i.getBoundingClientRect().left)}},F={args:{disabled:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Has vetting`}),(0,x.jsx)(m,{defaultChecked:!0})]}),play:async({canvasElement:e})=>{let t=T(e);await S(t.getByRole(`switch`,{name:`Has vetting`})).toBeDisabled()}},I={args:{readOnly:!0},render:e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(o,{children:`Instant appointments`}),(0,x.jsx)(m,{defaultChecked:!0})]}),play:async({canvasElement:e})=>{let t=T(e).getByRole(`switch`,{name:`Instant appointments`});await S(t).toHaveAttribute(`aria-readonly`,`true`),await S(t).not.toBeDisabled(),await w.click(t),await S(t).toBeChecked(),await w.keyboard(` `),await S(t).toHaveFocus(),await S(t).toBeChecked()}},L={render:e=>(0,x.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,x.jsxs)(v,{...e,children:[(0,x.jsxs)(u.Content,{children:[(0,x.jsx)(o,{children:`Carrier news`}),(0,x.jsx)(u.Description,{children:`Shown on the home page.`})]}),(0,x.jsx)(m,{size:`md`,"aria-describedby":`news-hint`})]}),(0,x.jsx)(`p`,{id:`news-hint`,className:`text-sm`,children:`You can change it later.`})]}),play:async({canvasElement:e})=>{let t=T(e).getByRole(`switch`,{name:`Carrier news`});await S(t).toHaveAccessibleDescription(`Shown on the home page. You can change it later.`),await S(t).toHaveAttribute(`data-size`,`md`),await S(t).toHaveClass(`h-6`)}},R=({switchProps:e,errors:t,children:n})=>{let r=(0,b.use)(p),i=(0,b.use)(l);return(0,x.jsx)(p,{value:{...r,...e},children:(0,x.jsx)(l,{value:i&&{...i,errors:t},children:n})})},z=C(),B={render:()=>{let[e,t]=(0,b.useState)(!1),n=e?void 0:[{message:`Turn it on to continue.`}];return(0,x.jsx)(v,{invalid:!!n,children:(0,x.jsxs)(R,{switchProps:{name:`terms`,checked:e,onCheckedChange:t},errors:n,children:[(0,x.jsxs)(u.Content,{children:[(0,x.jsx)(o,{children:`I accept the terms`}),(0,x.jsx)(u.Error,{})]}),(0,x.jsx)(m,{onCheckedChange:z})]})})},play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`switch`,{name:`I accept the terms`});await S(n).toHaveAttribute(`aria-invalid`,`true`),await S(t.getByRole(`alert`)).toHaveTextContent(`Turn it on to continue.`),await w.click(n),await S(n).toBeChecked(),await S(z).toHaveBeenCalledWith(!0),await S(t.queryByRole(`alert`)).toBeNull()}},V=[`Default`,`WithDescription`,`SwitchFirst`,`WithTooltip`,`NarrowWithLongLabel`,`Required`,`Vertical`,`Invalid`,`Disabled`,`ReadOnly`,`OwnPropsWin`,`ControlledFromContext`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`The composition consumers write: a label and the design system's \`Switch\`.
The label names the toggle through context, and clicking it flips the
toggle like clicking the toggle itself. The toggle is the design's 30×16,
16px after the text rather than pushed to the far edge.

@summary Label and Switch on one row, wired with no ids`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`A \`Field.Content\` keeps the label and its description together before the
toggle; the description is announced with it. The toggle stays centred on
the label's 24px first line, not on the whole block.

@summary Label and description stacked beside the toggle`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`The toggle can lead instead: written before the \`Field.Content\`, it sits on
the label's first line with 16px to the text, as Figma's switch-first field.

@summary Toggle first, then the label and its description`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Figma's full label row: `Field.Label` with `optional` and a `tooltip`. The\ninfo button sits beside the label, outside it, so it has its own name and\nopening the hint never flips the toggle.\n\n@summary Label with the optional suffix and an info tooltip",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`In a narrow column the label wraps and the description follows it; the
toggle keeps its size and stays on the label's first line.

@summary Long label in a narrow column keeps the toggle whole`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the toggle's\n`aria-required`.\n\n@summary Required field driven from the root alone",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`\`orientation="vertical"\` stacks the label above the toggle, as in the other
fields; the toggle keeps its width instead of stretching to the field's.

@summary Label above the toggle`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <FieldSwitch {...args}>
            <Field.Content>
                <Label>I accept the carrier's terms</Label>
                <Field.Error errors={[{
        message: 'Accept the terms to continue.'
      }]} />
            </Field.Content>
            <Switch />
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: "I accept the carrier's terms"
    });
    const alert = canvas.getByRole('alert');
    await expect(toggle).toHaveAttribute('aria-invalid', 'true');
    await expect(toggle).toHaveAttribute('aria-describedby', expect.stringContaining(alert.id));
    const label = canvas.getByText("I accept the carrier's terms").closest('label')!;
    await expect(alert.getBoundingClientRect().left).toBe(label.getBoundingClientRect().left);
  }
}`,...P.parameters?.docs?.source},description:{story:"`invalid` on the field sets `aria-invalid` on the toggle, and the error is\nannounced with it. The error goes in the `Field.Content`, under the label,\nso it does not join the row.\n\n@summary Invalid field with the error described on the toggle",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <FieldSwitch {...args}>
            <Label>Has vetting</Label>
            <Switch defaultChecked />
        </FieldSwitch>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('switch', {
      name: 'Has vetting'
    })).toBeDisabled();
  }
}`,...F.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the toggle through context.

@summary Disabled field driven from the root`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
    await userEvent.keyboard(' ');
    await expect(toggle).toHaveFocus();
    await expect(toggle).toBeChecked();
  }
}`,...I.parameters?.docs?.source},description:{story:`\`readOnly\` on the field keeps the toggle focusable and announced as
read-only, but neither a click nor a key flips it.

@summary Read-only field: focusable, but it does not flip`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"The context is a default, never an override: an extra `aria-describedby` is\nconcatenated with the field's ids and `size=\"md\"` replaces the field's `sm`.\n\n@summary Switch's own props merge with, and win over, the field's context",...L.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"The contexts are an extension point: a provider nested in the field adds\n`name`, `checked` and `onCheckedChange` to `SwitchContext`, so a bare\n`<Switch />` becomes controlled, and the errors to `FieldContext`, so a\nbare `<Field.Error />` renders them — here with `useState` and no form\nlibrary. The switch's own `onCheckedChange` still runs, chained after the\nprovider's.\n\n@summary Switch controlled and errors supplied from outside the field",...B.parameters?.docs?.description}}}})))()}H();export{B as ControlledFromContext,D as Default,F as Disabled,P as Invalid,j as NarrowWithLongLabel,L as OwnPropsWin,I as ReadOnly,M as Required,k as SwitchFirst,N as Vertical,O as WithDescription,A as WithTooltip,V as __namedExportsOrder,E as default};