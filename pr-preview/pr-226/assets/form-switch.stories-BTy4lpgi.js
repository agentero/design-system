import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./merge-props-BiuMN-fB.js";import{n as i,t as a}from"./button-LFEf6Avc.js";import{n as o,t as s}from"./field-CS74ZB1u.js";import{n as c,t as l}from"./switch-CMDKnEd-.js";import{n as u,t as d}from"./field-switch-sIFOYKi2.js";import{a as f,r as p}from"./index.esm-C-wKm4H6.js";import{a as m,i as h,n as g,t as _}from"./form-CJ3VsI1V.js";var v,y;function b(){return(b=e((()=>{n(),o(),u(),h(),c(),v=t(),y=({switchProps:e,switchPosition:t=`end`,...n})=>{let{field:i,rootProps:a,shellProps:o}=m(n),{label:c,description:u,tooltip:f,tooltipSide:p,optional:h,error:g}=o,_={name:i.name,checked:i.value===!0,onCheckedChange:i.onChange,onBlur:i.onBlur,ref:i.ref},y=(0,v.jsx)(l,{...r(_,e??{})}),b=t===`start`&&a.orientation!==`vertical`;return(0,v.jsxs)(d,{...a,children:[b&&y,(0,v.jsxs)(s.Content,{children:[(0,v.jsx)(s.Label,{tooltip:f,tooltipSide:p,optional:h,children:c}),u&&(0,v.jsx)(s.Description,{children:u}),(0,v.jsx)(s.Error,{errors:g?[g]:void 0})]}),!b&&y]})},y.displayName=`FormSwitch`;try{y.displayName=`FormSwitch`,y.__docgenInfo={description:"A complete on/off field bound to one boolean react-hook-form value: label,\n`Switch`, helper text and validation error, wired through `useController`.\nIt renders inside a `Form.Root`, which provides the form, and needs only a\n`name`, which on a typed form must point at a boolean (`FormSwitchPath`).\nThe `required`, `invalid` and error states reach the label, the toggle's\n`aria-*` attributes and the message with no ids written by hand.\n\nThe layout is [FieldSwitch](?path=/docs/components-fieldswitch--docs)'s:\nthe label, its description and its error stack together in a\n`Field.Content`, with the toggle beside them (`horizontal`, the default) or\nunder them (`vertical`); `switchPosition=\"start\"` moves it before the text\nin a row. An empty value (`undefined`, `null`) reads as off,\nand flipping the toggle stores `true` or `false`. `rules.required` fails on\n`false`, so it is how a toggle the user must turn on is validated.\n\nUse it for the common case: a labelled toggle in a form. For another\nlayout, compose the primitives yourself: `useController` with\n`FieldSwitch`, `Field.Content`, `Label`, `Switch`, `Field.Description` and\n`Field.Error`. Over that composition `FormSwitch` adds one thing: it reads\nan empty value as off (`checked={field.value === true}`), where a `Switch`\ngiven the form's `undefined` starts uncontrolled.\n\nErrors come from `useController`'s per-field state, never from\n`formState.errors`, so the message stays fresh under the React Compiler.",displayName:`FormSwitch`,filePath:`/home/runner/work/design-system/design-system/src/form-switch/form-switch.tsx`,methods:[],props:{orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field-switch/field-switch.tsx`,name:`TypeLiteral`}],description:"`horizontal` (default) puts the label, or a `Field.Content` with the\nlabel, its description and its error, on one row with the toggle beside\nit; `vertical` stacks the toggle under the label.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.\nDisables the control and marks the field. Unlike react-hook-form's own\n`disabled` option, the value stays in the submitted data: disabling a\nfield is a presentation decision, not a change to the form's values.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.\nMarks the field required: an asterisk on the label and the native\n`required` attribute on the control, which assistive technology\nannounces. It does not validate — pair it with `rules.required` or a\nresolver — and it never triggers the browser bubble, since `Form.Root`\nrenders `noValidate`.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Path of the value in the form, nested paths included (`'agency.npn'`).\nType it against the form's values by passing their type as the\ncomponent's first generic, or by passing `control`: the path must then\nexist and hold a value of the field's type.",name:`name`,required:!0,tags:{},type:{name:`string`}},control:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"The form's `control`, from `useForm()`. Defaults to the one the\nsurrounding `Form.Root` provides; pass it explicitly to get `name`\ninference without writing the generic, or when the field renders outside\na `Form.Root`. A `control` whose resolver transforms the values is\naccepted as is.",name:`control`,required:!1,tags:{},type:{name:`Control<TFieldValues, any, TTransformedValues>`}},rules:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"react-hook-form validation rules for this field (`required`, `pattern`,\n`validate`…), same as `register`'s. They only validate: `rules.required`\ndoes not mark the field `required` — that is a separate, visible decision.",name:`rules`,required:!1,tags:{},type:{name:`Omit<RegisterOptions<TFieldValues, TName>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">`}},shouldUnregister:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Drops the value from the form when the field unmounts, react-hook-form's\n`shouldUnregister`. Defaults to `false`: a field revealed by another one\nkeeps its value while hidden.",name:`shouldUnregister`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`The caption, rendered as the field's label. Text in almost every case.`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Helper text shown under the control, above the error when there is one,\nand announced through its `aria-describedby`. Use it for guidance the\nuser needs before typing; put details worth a click in `tooltip` instead.",name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},tooltip:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`Content of an info tooltip rendered beside the label, for details that
would clutter the description. The trigger is a sibling of the label, so
the field's accessible name stays the label text.`,name:`tooltip`,required:!1,tags:{},type:{name:`ReactNode`}},tooltipSide:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Preferred side of the tooltip. Defaults to `'top'`.",name:`tooltipSide`,required:!1,tags:{},type:{name:`enum`,raw:`"top" | "right" | "bottom" | "left"`,value:[{value:`"top"`},{value:`"right"`},{value:`"bottom"`},{value:`"left"`}]}},optional:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:'Appends a muted " (optional)" to the label. The forms mark optional fields\nrather than required ones; ignored when `required` is set.',name:`optional`,required:!1,tags:{},type:{name:`boolean`}},switchProps:{defaultValue:null,declarations:[{fileName:`design-system/src/form-switch/form-switch.tsx`,name:`TypeLiteral`}],description:"Everything else the `Switch` should receive: `size`, `className`,\n`aria-*`… Handlers such as `onCheckedChange` and `onBlur` run after\nreact-hook-form's, which are already wired, and `aria-describedby` ids\njoin the ones the field wires. The rest is owned elsewhere, so it is\nleft out: the field sets `id` (choose it with `controlId`) and names\nthe toggle with its `label`; react-hook-form sets `name` and `checked`\n(start it in `useForm`'s `defaultValues`); `disabled`, `required` and\n`readOnly` are props of `FormSwitch`, so the label and the root follow\nthem too.",name:`switchProps`,required:!1,tags:{},type:{name:`FormSwitchSwitchProps`}},switchPosition:{defaultValue:{value:`end`},declarations:[{fileName:`design-system/src/form-switch/form-switch.tsx`,name:`TypeLiteral`}],description:"Side of the toggle in a `horizontal` field: `end` (default) puts it\nafter the label and its description, `start` before them. A `vertical`\nfield always puts it under them.",name:`switchPosition`,required:!1,tags:{},type:{name:`enum`,raw:`"start" | "end"`,value:[{value:`"start"`},{value:`"end"`}]}}},tags:{summary:`Label, Switch, description and error bound to one boolean react-hook-form field`,example:`<FormSwitch
  name="emailNotifications"
  label="Email notifications"
  description="Get an email when a carrier returns a quote."
/>`}}}catch{}})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{p(),b(),i(),o(),g(),x=t(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/FormSwitch`,component:y,tags:[`autodocs`],argTypes:{name:{control:!1},label:{control:`text`},description:{control:`text`},tooltip:{control:`text`},orientation:{control:`radio`,options:[`horizontal`,`vertical`]},switchPosition:{control:`radio`,options:[`end`,`start`]},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`}},args:{name:`terms`,label:`I accept the carrier terms`,description:`The carrier reviews every request against them.`,orientation:`horizontal`,switchPosition:`end`,required:!0,optional:!1,disabled:!1,readOnly:!1},parameters:{docs:{description:{component:"FormSwitch is a complete on/off field bound to one boolean react-hook-form\nvalue: label, `Switch`, helper text and validation error, laid out as in\n`FieldSwitch` and wired through `useController`. It renders inside a\n`Form.Root` and needs only a `name`; `required`, `invalid` and the error\nreach the label, the toggle's `aria-*` attributes and the message with no\nids written by hand.\n\nIt covers the common case. For another layout, compose `useController` with\nthe `FieldSwitch`, `Label`, `Switch` and `Field.*` primitives directly."}}}},O=[`!dev`,`!autodocs`,`!manifest`],k=C(),A=e=>{let t=f({defaultValues:{terms:!1}});return(0,x.jsxs)(_.Root,{methods:t,onSubmit:k,"aria-label":`Appointment request`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,x.jsx)(y,{label:`I accept the carrier terms`,rules:{required:`Accept the terms to send the request.`},...e,name:`terms`}),(0,x.jsx)(a,{type:`submit`,children:`Send`})]})},j={render:e=>(0,x.jsx)(A,{...e})},M={tags:O,render:()=>(0,x.jsx)(A,{description:`The carrier reviews every request against them.`,required:!0}),play:async({canvasElement:e})=>{k.mockClear();let t=E(e),n=t.getByRole(`switch`,{name:`I accept the carrier terms`});await S(n).not.toBeChecked(),await S(n).toHaveAttribute(`aria-required`,`true`),await S(n).toHaveAccessibleDescription(`The carrier reviews every request against them.`),await S(t.queryByRole(`alert`)).toBeNull(),await w.click(t.getByRole(`button`,{name:`Send`})),await S(await t.findByRole(`alert`)).toHaveTextContent(`Accept the terms to send the request.`),await S(n).toHaveAttribute(`aria-invalid`,`true`),await S(n).toHaveFocus(),await S(k).not.toHaveBeenCalled(),await w.click(n),await S(n).toBeChecked(),await T(()=>S(t.queryByRole(`alert`)).toBeNull()),await S(n).not.toHaveAttribute(`aria-invalid`),await w.click(t.getByRole(`button`,{name:`Send`})),await T(()=>S(k).toHaveBeenCalledWith({terms:!0},S.anything()))}},N=()=>{let e=f({defaultValues:{notifications:{email:!0}}});return(0,x.jsxs)(_.Root,{methods:e,onSubmit:k,"aria-label":`Notifications`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,x.jsxs)(s.Group,{children:[(0,x.jsx)(y,{name:`notifications.email`,label:`Email notifications`,description:`Get an email when a carrier returns a quote.`}),(0,x.jsx)(y,{name:`notifications.sms`,label:`Text messages`,tooltip:`Standard rates from your carrier apply.`,optional:!0})]}),(0,x.jsx)(a,{type:`submit`,children:`Save`})]})},P={render:()=>(0,x.jsx)(N,{}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`switch`,{name:`Text messages (optional)`});await S(t.getByRole(`switch`,{name:`Email notifications`})).toBeChecked(),await S(n).not.toBeChecked(),await S(n).not.toHaveAttribute(`aria-required`),await S(t.getByRole(`button`,{name:`More information`}).closest(`label`)).toBeNull()}},F={tags:O,render:()=>(0,x.jsx)(N,{}),play:async({canvasElement:e})=>{k.mockClear();let t=E(e);await w.click(t.getByRole(`switch`,{name:`Email notifications`})),await w.click(t.getByRole(`switch`,{name:`Text messages (optional)`})),await w.click(t.getByRole(`button`,{name:`Save`})),await T(()=>S(k).toHaveBeenCalledWith({notifications:{email:!1,sms:!0}},S.anything()))}},I={render:()=>{let e=f({defaultValues:{paperlessBilling:!1}});return(0,x.jsx)(_.Root,{methods:e,"aria-label":`Billing`,className:`max-w-120`,children:(0,x.jsx)(y,{name:`paperlessBilling`,label:`Paperless billing`,description:`Invoices arrive by email only.`,switchPosition:`start`})})},play:async({canvasElement:e})=>{let t=E(e).getByRole(`switch`,{name:`Paperless billing`});await S(t.closest(`[data-slot=field]`).firstElementChild).toBe(t),await S(t).toHaveAccessibleDescription(`Invoices arrive by email only.`)}},L={render:()=>{let e=f({defaultValues:{skipLicenseCheck:!1}});return(0,x.jsx)(_.Root,{methods:e,"aria-label":`Qualification`,className:`max-w-120`,children:(0,x.jsx)(y,{name:`skipLicenseCheck`,label:`Skip the one-year license check`,description:`Only for agencies the carrier has approved by hand.`,orientation:`vertical`})})},play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`switch`,{name:`Skip the one-year license check`}),r=t.getByText(`Only for agencies the carrier has approved by hand.`);await S(n.closest(`[data-slot=field]`)).toHaveAttribute(`data-orientation`,`vertical`),await S(n.getBoundingClientRect().top).toBeGreaterThanOrEqual(r.getBoundingClientRect().bottom)}},R=()=>{let e=f({defaultValues:{instantAppointments:!0,paperlessBilling:!0}});return(0,x.jsxs)(_.Root,{methods:e,onSubmit:k,"aria-label":`Agency`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,x.jsxs)(s.Group,{children:[(0,x.jsx)(y,{name:`instantAppointments`,label:`Instant appointments`,readOnly:!0}),(0,x.jsx)(y,{name:`paperlessBilling`,label:`Paperless billing`,disabled:!0})]}),(0,x.jsx)(a,{type:`submit`,children:`Save`})]})},z={render:()=>(0,x.jsx)(R,{}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`switch`,{name:`Paperless billing`});await S(t.getByRole(`switch`,{name:`Instant appointments`})).toHaveAttribute(`aria-readonly`,`true`),await S(n).toBeDisabled(),await S(n.closest(`[data-slot=field]`)).toHaveAttribute(`data-disabled`)}},B={tags:O,render:()=>(0,x.jsx)(R,{}),play:async({canvasElement:e})=>{k.mockClear();let t=E(e),n=t.getByRole(`switch`,{name:`Instant appointments`});await w.click(n),await S(n).toBeChecked(),await w.click(t.getByRole(`button`,{name:`Save`})),await T(()=>S(k).toHaveBeenCalledWith({instantAppointments:!0,paperlessBilling:!0},S.anything()))}},V=C(),H=()=>{let e=f({defaultValues:{marketing:!1}});return(0,x.jsxs)(_.Root,{methods:e,"aria-label":`Preferences`,className:`flex max-w-120 flex-col gap-2`,children:[(0,x.jsx)(y,{name:`marketing`,label:`Product news`,description:`One email a month.`,switchProps:{"aria-describedby":`marketing-unsubscribe`,onCheckedChange:t=>V(e.getValues(`marketing`),t)}}),(0,x.jsx)(`p`,{id:`marketing-unsubscribe`,className:`text-sm text-text-input-placeholder`,children:`Unsubscribe from any email.`})]})},U={render:()=>(0,x.jsx)(H,{}),play:async({canvasElement:e})=>{let t=E(e);await S(t.getByRole(`switch`,{name:`Product news`})).toHaveAccessibleDescription(`One email a month. Unsubscribe from any email.`)}},W={tags:O,render:()=>(0,x.jsx)(H,{}),play:async({canvasElement:e})=>{V.mockClear();let t=E(e).getByRole(`switch`,{name:`Product news`});await w.click(t),await S(t).toBeChecked(),await S(V).toHaveBeenCalledTimes(1),await S(V).toHaveBeenLastCalledWith(!0,!0)}},G=[`Default`,`ValidatesOnSubmit`,`NestedAndEmpty`,`SubmitsNestedBooleans`,`SwitchFirst`,`Vertical`,`DisabledAndReadOnly`,`SubmitsDisabledAndReadOnly`,`SwitchProps`,`ChainsOnCheckedChange`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  // The controls drive the field; the form owns the path, the value and the rule.
  render: args => <TermsForm {...args} />
}`,...j.parameters?.docs?.source},description:{story:"The field consumers write: a `name`, a `label` and the validation rule.\n`rules.required` fails while the toggle is off, so sending with it off\nrenders the error and marks the toggle invalid; turning it on clears both\nand `true` reaches `onSubmit`.\n\n@summary Toggle the user must turn on, validating on submit",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <TermsForm description="The carrier reviews every request against them." required />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'I accept the carrier terms'
    });
    await expect(toggle).not.toBeChecked();
    await expect(toggle).toHaveAttribute('aria-required', 'true');
    await expect(toggle).toHaveAccessibleDescription('The carrier reviews every request against them.');
    await expect(canvas.queryByRole('alert')).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Send'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Accept the terms to send the request.');
    await expect(toggle).toHaveAttribute('aria-invalid', 'true');
    await expect(toggle).toHaveFocus();
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
    await expect(toggle).not.toHaveAttribute('aria-invalid');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Send'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      terms: true
    }, expect.anything()));
  }
}`,...M.parameters?.docs?.source},description:{story:"Sending with the toggle off renders the error, marks the toggle invalid and\nfocuses it through react-hook-form's `ref`; turning it on clears both and\n`true` reaches `onSubmit`.",...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <NotificationsForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sms = canvas.getByRole('switch', {
      name: 'Text messages (optional)'
    });
    await expect(canvas.getByRole('switch', {
      name: 'Email notifications'
    })).toBeChecked();
    await expect(sms).not.toBeChecked();
    await expect(sms).not.toHaveAttribute('aria-required');
    await expect(canvas.getByRole('button', {
      name: 'More information'
    }).closest('label')).toBeNull();
  }
}`,...P.parameters?.docs?.source},description:{story:"`name` accepts nested paths typed against the form's values through the\ngeneric. A value the form has not set yet (`undefined`, or `null`) reads as\noff, and the first flip stores a boolean. `tooltip` is an info button beside\nthe label, a sibling of the `<label>`, so the accessible name stays the\nlabel text; `optional` appends a muted suffix to it.\n\n@summary Nested paths, an empty value read as off, and an info tooltip",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <NotificationsForm />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('switch', {
      name: 'Email notifications'
    }));
    await userEvent.click(canvas.getByRole('switch', {
      name: 'Text messages (optional)'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      notifications: {
        email: false,
        sms: true
      }
    }, expect.anything()));
  }
}`,...F.parameters?.docs?.source},description:{story:`Flipping both toggles submits booleans at their nested paths, the empty one included.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<BillingValues>({
      defaultValues: {
        paperlessBilling: false
      }
    });
    return <Form.Root methods={methods} aria-label="Billing" className="max-w-120">
                <FormSwitch name="paperlessBilling" label="Paperless billing" description="Invoices arrive by email only." switchPosition="start" />
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Paperless billing'
    });

    // The spacing is \`FieldSwitch\`'s; what \`switchPosition\` changes is the order.
    await expect(toggle.closest('[data-slot=field]')!.firstElementChild).toBe(toggle);
    await expect(toggle).toHaveAccessibleDescription('Invoices arrive by email only.');
  }
}`,...I.parameters?.docs?.source},description:{story:`\`switchPosition="start"\` puts the toggle before the label and its
description, the same row in the other order.

@summary Toggle first, then the label and its description`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<LicenseValues>({
      defaultValues: {
        skipLicenseCheck: false
      }
    });
    return <Form.Root methods={methods} aria-label="Qualification" className="max-w-120">
                <FormSwitch name="skipLicenseCheck" label="Skip the one-year license check" description="Only for agencies the carrier has approved by hand." orientation="vertical" />
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Skip the one-year license check'
    });
    const description = canvas.getByText('Only for agencies the carrier has approved by hand.');
    await expect(toggle.closest('[data-slot=field]')).toHaveAttribute('data-orientation', 'vertical');
    await expect(toggle.getBoundingClientRect().top).toBeGreaterThanOrEqual(description.getBoundingClientRect().bottom);
  }
}`,...L.parameters?.docs?.source},description:{story:`\`orientation="vertical"\` stacks the toggle under the label, its
description and its error, for a switch in a form column next to other
fields.

@summary Toggle under the label and its description`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <AgencyForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const paperless = canvas.getByRole('switch', {
      name: 'Paperless billing'
    });
    await expect(canvas.getByRole('switch', {
      name: 'Instant appointments'
    })).toHaveAttribute('aria-readonly', 'true');
    await expect(paperless).toBeDisabled();
    await expect(paperless.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
  }
}`,...z.parameters?.docs?.source},description:{story:"`disabled` disables the toggle and marks the field, and the value still\nreaches `onSubmit` — unlike react-hook-form's own `disabled` option, which\ndrops it. `readOnly` keeps the toggle focusable and announced, but a click\ndoes not flip it.\n\n@summary Disabled and read-only toggles whose values are still submitted",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <AgencyForm />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const instant = canvas.getByRole('switch', {
      name: 'Instant appointments'
    });
    await userEvent.click(instant);
    await expect(instant).toBeChecked();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      instantAppointments: true,
      paperlessBilling: true
    }, expect.anything()));
  }
}`,...B.parameters?.docs?.source},description:{story:`A click leaves the read-only toggle as it was, and both values are submitted.`,...B.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <MarketingForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('switch', {
      name: 'Product news'
    })).toHaveAccessibleDescription('One email a month. Unsubscribe from any email.');
  }
}`,...U.parameters?.docs?.source},description:{story:"`switchProps` carries the toggle's own props — `aria-*`, `className`… — and\nits handlers. An `aria-describedby` joins the ids the field wires, and a\nconsumer `onCheckedChange` runs after react-hook-form's: by the time it\nfires, `getValues` already returns the new value.\n\n@summary Toggle props merged with the field's wiring",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <MarketingForm />,
  play: async ({
    canvasElement
  }) => {
    onOwnCheckedChange.mockClear();
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Product news'
    });
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
    await expect(onOwnCheckedChange).toHaveBeenCalledTimes(1);
    await expect(onOwnCheckedChange).toHaveBeenLastCalledWith(true, true);
  }
}`,...W.parameters?.docs?.source},description:{story:"A consumer `onCheckedChange` runs after react-hook-form's, once the value is stored.",...W.parameters?.docs?.description}}}})))()}K();export{W as ChainsOnCheckedChange,j as Default,z as DisabledAndReadOnly,P as NestedAndEmpty,B as SubmitsDisabledAndReadOnly,F as SubmitsNestedBooleans,I as SwitchFirst,U as SwitchProps,M as ValidatesOnSubmit,L as Vertical,G as __namedExportsOrder,D as default};