import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-E4fjpRt5.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,r as a,t as o}from"./dist-B9nTnCIW.js";import{n as s,t as c}from"./label-CPw49s2l.js";import{a as l,n as u,r as d,t as f}from"./field-CJiV73xh.js";import{i as p,n as m,r as h,t as g}from"./switch-BaWWozNg.js";var _,v,y,b;function x(){return(x=e((()=>{o(),r(),u(),p(),_=n(),v=({children:e})=>{let t=l(),n=t&&{id:t.controlId,"aria-describedby":t.describedBy,"aria-invalid":t.invalid||void 0,required:t.required||void 0,disabled:t.disabled||void 0,readOnly:t.readOnly||void 0,size:`sm`};return(0,_.jsx)(h,{value:n,children:e})},y=i({base:[`data-[orientation=horizontal]:items-start data-[orientation=horizontal]:gap-4`,`data-[orientation=horizontal]:[&>:first-child]:flex-initial`,`data-[orientation=horizontal]:[&>[data-slot=switch][data-size=sm]]:mt-1`,`data-[orientation=vertical]:[&>[data-slot=switch][data-size=sm]]:max-w-7.5`,`data-[orientation=vertical]:[&>[data-slot=switch][data-size=md]]:max-w-12`]}),b=({orientation:e=`horizontal`,className:t,children:n,...r})=>(0,_.jsx)(f.Root,{orientation:e,className:a(y(),t),...r,children:(0,_.jsx)(v,{children:n})}),b.displayName=`FieldSwitch`;try{y.displayName=`FieldSwitch`,y.__docgenInfo={description:``,displayName:`FieldSwitch`,filePath:`/home/runner/work/design-system/design-system/src/field-switch/field-switch.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}})))()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{S=t(),x(),u(),s(),m(),p(),C=n(),{expect:w,fn:T,userEvent:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/FieldSwitch`,component:b,tags:[`autodocs`],decorators:[e=>(0,C.jsx)(`div`,{className:`w-120 max-w-full`,children:(0,C.jsx)(e,{})})],argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`],description:"Layout of the label and the toggle. `horizontal` (default) is one row, the toggle beside the text."},invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`horizontal`,invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"FieldSwitch is a `Field.Root` for an on/off toggle. It provides\n`SwitchContext`, so the `Switch` inside associates itself with the label and\nthe messages and takes `invalid`, `required`, `disabled` and `readOnly` from\nthe field — no `id`, `htmlFor` or `aria-describedby` written by hand. It\ndefaults to one row, with the small toggle next to the text.\n\nIt knows nothing about form libraries, and its contexts compose: a provider\nnested inside it can extend `SwitchContext` with `checked`,\n`onCheckedChange`, `onBlur` and `name`, and `FieldContext` with the errors,\nwhich is how `FormSwitch` will bind it."}}}},k={render:e=>(0,C.jsxs)(b,{...e,children:[(0,C.jsx)(c,{children:`Auto-appointment requests`}),(0,C.jsx)(g,{})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`switch`,{name:`Auto-appointment requests`});await w(n).toHaveAttribute(`data-slot`,`switch`),await w(n).toHaveAttribute(`data-size`,`sm`),await w(n).not.toBeChecked();let r=t.getByText(`Auto-appointment requests`).closest(`label`),i=n.getBoundingClientRect();await w([i.width,i.height]).toEqual([30,16]),await w(i.left-r.getBoundingClientRect().right).toBe(16),await E.click(t.getByText(`Auto-appointment requests`)),await w(n).toBeChecked()}},A={args:{required:!0},render:e=>(0,C.jsxs)(b,{...e,children:[(0,C.jsx)(c,{children:`Accept the carrier terms`}),(0,C.jsx)(g,{})]}),play:async({canvasElement:e})=>{let t=D(e);await w(t.getByRole(`switch`,{name:/Accept the carrier terms/})).toHaveAttribute(`aria-required`,`true`)}},j={args:{disabled:!0},render:e=>(0,C.jsxs)(b,{...e,children:[(0,C.jsx)(c,{children:`Quote alerts by text`}),(0,C.jsx)(g,{defaultChecked:!0})]}),play:async({canvasElement:e})=>{let t=D(e);await w(t.getByRole(`switch`,{name:`Quote alerts by text`})).toBeDisabled()}},M={args:{readOnly:!0},render:e=>(0,C.jsxs)(b,{...e,children:[(0,C.jsx)(c,{children:`Instant appointments`}),(0,C.jsx)(g,{defaultChecked:!0})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`switch`,{name:`Instant appointments`});await w(n).toHaveAttribute(`aria-readonly`,`true`),await w(n).not.toBeDisabled(),await w(n).toBeChecked(),await E.click(n),await w(n).toBeChecked(),await E.click(t.getByText(`Instant appointments`)),await w(n).toBeChecked(),await E.keyboard(` `),await w(n).toHaveFocus(),await w(n).toBeChecked()}},N={render:e=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsxs)(b,{...e,children:[(0,C.jsxs)(f.Content,{children:[(0,C.jsx)(c,{children:`Carrier news`}),(0,C.jsx)(f.Description,{children:`Shown on the home page.`})]}),(0,C.jsx)(g,{size:`md`,"aria-describedby":`news-hint`})]}),(0,C.jsx)(`p`,{id:`news-hint`,className:`text-sm`,children:`You can change it later.`})]}),play:async({canvasElement:e})=>{let t=D(e).getByRole(`switch`,{name:`Carrier news`});await w(t).toHaveAccessibleDescription(`Shown on the home page. You can change it later.`),await w(t).toHaveAttribute(`data-size`,`md`),await w(t).toHaveClass(`h-6`)}},P={render:e=>(0,C.jsxs)(b,{...e,children:[(0,C.jsxs)(f.Content,{children:[(0,C.jsx)(c,{children:`Email notifications`}),(0,C.jsx)(f.Description,{children:`Get an email when a carrier returns a quote.`})]}),(0,C.jsx)(g,{defaultChecked:!0})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`switch`,{name:`Email notifications`});await w(n).toBeChecked(),await w(n).toHaveAccessibleDescription(`Get an email when a carrier returns a quote.`);let r=t.getByText(`Email notifications`).closest(`label`);await w(n.getBoundingClientRect().top-r.getBoundingClientRect().top).toBe(4)}},F={render:e=>(0,C.jsxs)(b,{...e,children:[(0,C.jsx)(g,{}),(0,C.jsxs)(f.Content,{children:[(0,C.jsx)(c,{children:`Paperless billing`}),(0,C.jsx)(f.Description,{children:`Invoices arrive by email only.`})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`switch`,{name:`Paperless billing`}),r=e.querySelector(`[data-slot=field]`).getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getByText(`Paperless billing`).closest(`label`).getBoundingClientRect();await w(n).toHaveAccessibleDescription(`Invoices arrive by email only.`),await w(i.left).toBe(r.left),await w([i.width,i.height]).toEqual([30,16]),await w(a.left-i.right).toBe(16),await w(i.top-a.top).toBe(4)}},I={render:e=>(0,C.jsxs)(b,{...e,children:[(0,C.jsx)(g,{}),(0,C.jsxs)(f.Content,{children:[(0,C.jsx)(f.Label,{optional:!0,tooltip:`Policies stop printing once this is on.`,children:`Paperless billing`}),(0,C.jsx)(f.Description,{children:`Invoices arrive by email only.`})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`switch`,{name:/Paperless billing/}),r=t.getByRole(`button`,{name:`More information`}),i=e.querySelector(`[data-slot=field]`).getBoundingClientRect();await w(n).toHaveAccessibleName(`Paperless billing (optional)`),await w(n.getBoundingClientRect().top-i.top).toBe(4),await E.click(r),await w(n).not.toBeChecked()}},L={args:{orientation:`vertical`},render:e=>(0,C.jsxs)(b,{...e,children:[(0,C.jsx)(c,{children:`Skip the one-year license check`}),(0,C.jsx)(g,{})]}),play:async({canvasElement:e})=>{let t=D(e);await w(e.querySelector(`[data-slot=field]`)).toHaveAttribute(`data-orientation`,`vertical`);let n=t.getByRole(`switch`,{name:`Skip the one-year license check`});await w(n).toBeVisible(),await w(n.getBoundingClientRect().width).toBe(30)}},R={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,C.jsx)(`div`,{className:`w-56`,children:(0,C.jsxs)(b,{...e,children:[(0,C.jsxs)(f.Content,{children:[(0,C.jsx)(c,{children:`Paperless billing for every policy on this agency account`}),(0,C.jsx)(f.Description,{children:`Invoices arrive by email only.`})]}),(0,C.jsx)(g,{})]})}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`switch`,{name:/Paperless billing/}),r=e.querySelector(`[data-slot=field]`).getBoundingClientRect(),i=n.getBoundingClientRect(),a=t.getByText(/Paperless billing/).closest(`label`).getBoundingClientRect();await w(a.height).toBeGreaterThan(24),await w([i.width,i.height]).toEqual([30,16]),await w(i.top-r.top).toBe(4),await w(i.right).toBeLessThanOrEqual(r.right)}},z=({switchProps:e,errors:t,children:n})=>{let r=(0,S.use)(h),i=(0,S.use)(d);return(0,C.jsx)(h,{value:{...r,...e},children:(0,C.jsx)(d,{value:i&&{...i,errors:t},children:n})})},B=T(),V={render:()=>{let[e,t]=(0,S.useState)(!1),n=e?void 0:[{message:`Turn it on to continue.`}];return(0,C.jsx)(b,{invalid:!!n,children:(0,C.jsxs)(z,{switchProps:{name:`terms`,checked:e,onCheckedChange:t},errors:n,children:[(0,C.jsxs)(f.Content,{children:[(0,C.jsx)(c,{children:`I accept the terms`}),(0,C.jsx)(f.Error,{})]}),(0,C.jsx)(g,{onCheckedChange:B})]})})},play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`switch`,{name:`I accept the terms`});await w(n).toHaveAttribute(`aria-invalid`,`true`),await w(t.getByRole(`alert`)).toHaveTextContent(`Turn it on to continue.`),await E.click(n),await w(n).toBeChecked(),await w(B).toHaveBeenCalledWith(!0),await w(t.queryByRole(`alert`)).toBeNull()}},H=[`Default`,`Required`,`Disabled`,`ReadOnly`,`OwnPropsWin`,`WithDescription`,`SwitchFirst`,`WithTooltip`,`Vertical`,`NarrowWithLongLabel`,`ControlledFromContext`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`The composition consumers write: a label and the design system's \`Switch\`.
The label names the toggle through context, and clicking it flips the
toggle like clicking the toggle itself.

@summary Label and Switch on one row, wired with no ids`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the toggle's\n`aria-required`.\n\n@summary Required field driven from the root alone",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`\`disabled\` on the field disables the toggle through context.

@summary Disabled field driven from the root`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`\`readOnly\` on the field keeps the toggle focusable and announced as
read-only, but neither a click nor a key flips it.

@summary Read-only field: focusable, but it does not flip`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"The context is a default, never an override: an extra `aria-describedby` is\nconcatenated with the field's ids and `size=\"md\"` replaces the field's `sm`.\n\n@summary Switch's own props merge with, and win over, the field's context",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`A \`Field.Content\` keeps the label and its description together, and the
description is announced with the toggle. The toggle lines up with the
label, not with the middle of the block.

@summary Label and description stacked beside the toggle`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`The toggle can lead instead: write it before the \`Field.Content\`. Use this
order in lists of settings, where the toggles line up on the left.

@summary Toggle first, then the label and its description`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:"`Field.Label` takes `optional` and a `tooltip` here as in any field. The info\nbutton sits beside the label, outside it, so it has its own name and\nopening the hint never flips the toggle.\n\n@summary Label with the optional suffix and an info tooltip",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`\`orientation="vertical"\` stacks the label above the toggle, as in the other
fields. Use it when the switch sits in a form column next to other fields.

@summary Label above the toggle`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`In a narrow column the label wraps and the description follows it; the
toggle keeps its size and stays on the label's first line.

@summary Long label in a narrow column keeps the toggle whole`,...R.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"The contexts are an extension point: a provider nested in the field adds\n`name`, `checked` and `onCheckedChange` to `SwitchContext`, so a bare\n`<Switch />` becomes controlled, and the errors to `FieldContext`, so a\nbare `<Field.Error />` renders them — here with `useState` and no form\nlibrary. The switch's own `onCheckedChange` still runs, chained after the\nprovider's.\n\n@summary Switch controlled and errors supplied from outside the field",...V.parameters?.docs?.description}}}})))()}U();export{V as ControlledFromContext,k as Default,j as Disabled,R as NarrowWithLongLabel,N as OwnPropsWin,M as ReadOnly,A as Required,F as SwitchFirst,L as Vertical,P as WithDescription,I as WithTooltip,H as __namedExportsOrder,O as default};