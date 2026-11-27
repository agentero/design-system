import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./merge-props-DLGxhru7.js";import{n as i,t as a}from"./button-p7PGYRyV.js";import{n as o,t as s}from"./field-DbtKv6XR.js";import{n as c,t as l}from"./switch-D4jYNvvf.js";import{n as u,t as d}from"./field-switch-DVh4lHYA.js";import{a as f,r as p}from"./index.esm-CvZzmfVI.js";import{a as m,i as h,n as g,t as _}from"./form-Mm-429cf.js";var v,y;function b(){return(b=e((()=>{n(),o(),u(),h(),c(),v=t(),y=({switchProps:e,...t})=>{let{field:n,rootProps:i,shellProps:a}=m(t),{label:o,description:c,tooltip:u,tooltipSide:f,optional:p,error:h}=a,g={name:n.name,checked:n.value===!0,onCheckedChange:n.onChange,onBlur:n.onBlur,ref:n.ref};return(0,v.jsxs)(d,{...i,children:[(0,v.jsxs)(s.Content,{children:[(0,v.jsx)(s.Label,{tooltip:u,tooltipSide:f,optional:p,children:o}),c&&(0,v.jsx)(s.Description,{children:c}),(0,v.jsx)(s.Error,{errors:h?[h]:void 0})]}),(0,v.jsx)(l,{...r(g,e??{})})]})},y.displayName=`FormSwitch`;try{y.displayName=`FormSwitch`,y.__docgenInfo={description:"A complete on/off field bound to one boolean react-hook-form value: label,\n`Switch`, helper text and validation error, wired through `useController`.\nIt renders inside a `Form.Root`, which provides the form, and needs only a\n`name`, which on a typed form must point at a boolean (`FormSwitchPath`).\nThe `required`, `invalid` and error states reach the label, the toggle's\n`aria-*` attributes and the message with no ids written by hand.\n\nThe layout is [FieldSwitch](?path=/docs/components-fieldswitch--docs)'s:\nthe label, its description and its error stack together in a\n`Field.Content`, with the toggle beside them (`horizontal`, the default) or\nunder them (`vertical`). An empty value (`undefined`, `null`) reads as off,\nand flipping the toggle stores `true` or `false`. `rules.required` fails on\n`false`, so it is how a toggle the user must turn on is validated.\n\nUse it for the common case: a labelled toggle in a form. For another\nlayout, such as the toggle before its text, compose the primitives\nyourself: `useController` with `FieldSwitch`, `Field.Content`, `Label`,\n`Switch`, `Field.Description` and `Field.Error`. `FormSwitch` adds no\nbehaviour of its own over that composition.\n\nErrors come from `useController`'s per-field state, never from\n`formState.errors`, so the message stays fresh under the React Compiler.",displayName:`FormSwitch`,filePath:`/home/runner/work/design-system/design-system/src/form-switch/form-switch.tsx`,methods:[],props:{orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field-switch/field-switch.tsx`,name:`TypeLiteral`}],description:"`horizontal` (default) puts the label, or a `Field.Content` with the\nlabel, its description and its error, on one row with the toggle beside\nit; `vertical` stacks the toggle under the label.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.\nDisables the control and marks the field. Unlike react-hook-form's own\n`disabled` option, the value stays in the submitted data: disabling a\nfield is a presentation decision, not a change to the form's values.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.\nMarks the field required: an asterisk on the label and the native\n`required` attribute on the control, which assistive technology\nannounces. It does not validate — pair it with `rules.required` or a\nresolver — and it never triggers the browser bubble, since `Form.Root`\nrenders `noValidate`.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Path of the value in the form, nested paths included (`'agency.npn'`).\nType it against the form's values by passing their type as the\ncomponent's first generic, or by passing `control`: the path must then\nexist and hold a value of the field's type.",name:`name`,required:!0,tags:{},type:{name:`string`}},control:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"The form's `control`, from `useForm()`. Defaults to the one the\nsurrounding `Form.Root` provides; pass it explicitly to get `name`\ninference without writing the generic, or when the field renders outside\na `Form.Root`. A `control` whose resolver transforms the values is\naccepted as is.",name:`control`,required:!1,tags:{},type:{name:`Control<TFieldValues, any, TTransformedValues>`}},rules:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"react-hook-form validation rules for this field (`required`, `pattern`,\n`validate`…), same as `register`'s. They only validate: `rules.required`\ndoes not mark the field `required` — that is a separate, visible decision.",name:`rules`,required:!1,tags:{},type:{name:`Omit<RegisterOptions<TFieldValues, TName>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">`}},shouldUnregister:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Drops the value from the form when the field unmounts, react-hook-form's\n`shouldUnregister`. Defaults to `false`: a field revealed by another one\nkeeps its value while hidden.",name:`shouldUnregister`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`The caption, rendered as the field's label. Text in almost every case.`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Helper text shown under the control, above the error when there is one,\nand announced through its `aria-describedby`. Use it for guidance the\nuser needs before typing; put details worth a click in `tooltip` instead.",name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},tooltip:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`Content of an info tooltip rendered beside the label, for details that
would clutter the description. The trigger is a sibling of the label, so
the field's accessible name stays the label text.`,name:`tooltip`,required:!1,tags:{},type:{name:`ReactNode`}},tooltipSide:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Preferred side of the tooltip. Defaults to `'top'`.",name:`tooltipSide`,required:!1,tags:{},type:{name:`enum`,raw:`"top" | "right" | "bottom" | "left"`,value:[{value:`"top"`},{value:`"right"`},{value:`"bottom"`},{value:`"left"`}]}},optional:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:'Appends a muted " (optional)" to the label. The forms mark optional fields\nrather than required ones; ignored when `required` is set.',name:`optional`,required:!1,tags:{},type:{name:`boolean`}},switchProps:{defaultValue:null,declarations:[{fileName:`design-system/src/form-switch/form-switch.tsx`,name:`TypeLiteral`}],description:"Everything else the `Switch` should receive: `size`, `className`,\n`aria-*`… Handlers such as `onCheckedChange` and `onBlur` run after\nreact-hook-form's, which are already wired.",name:`switchProps`,required:!1,tags:{},type:{name:`FormSwitchSwitchProps`}}},tags:{summary:`Label, Switch, description and error bound to one boolean react-hook-form field`,example:`<FormSwitch
  name="emailNotifications"
  label="Email notifications"
  description="Get an email when a carrier returns a quote."
/>`}}}catch{}})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{p(),b(),i(),o(),g(),x=t(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/FormSwitch`,component:y,tags:[`autodocs`],argTypes:{name:{control:!1},label:{control:`text`},description:{control:`text`},tooltip:{control:`text`},orientation:{control:`radio`,options:[`horizontal`,`vertical`]},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`}},args:{name:`terms`,label:`I accept the carrier terms`,description:`The carrier reviews every request against them.`,orientation:`horizontal`,required:!0,optional:!1,disabled:!1,readOnly:!1},parameters:{docs:{description:{component:"FormSwitch is a complete on/off field bound to one boolean react-hook-form\nvalue: label, `Switch`, helper text and validation error, laid out as in\n`FieldSwitch` and wired through `useController`. It renders inside a\n`Form.Root` and needs only a `name`; `required`, `invalid` and the error\nreach the label, the toggle's `aria-*` attributes and the message with no\nids written by hand.\n\nIt covers the common case. For another layout, compose `useController` with\nthe `FieldSwitch`, `Label`, `Switch` and `Field.*` primitives directly."}}}},O=C(),k={render:e=>{let t=f({defaultValues:{terms:!1}});return(0,x.jsxs)(_.Root,{methods:t,onSubmit:O,"aria-label":`Appointment request`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,x.jsx)(y,{rules:{required:`Accept the terms to send the request.`},...e,name:`terms`}),(0,x.jsx)(a,{type:`submit`,children:`Send`})]})},play:async({canvasElement:e})=>{O.mockClear();let t=E(e),n=t.getByRole(`switch`,{name:`I accept the carrier terms`});await S(n).not.toBeChecked(),await S(n).toHaveAttribute(`aria-required`,`true`),await S(n).toHaveAccessibleDescription(`The carrier reviews every request against them.`),await S(t.queryByRole(`alert`)).toBeNull(),await w.click(t.getByRole(`button`,{name:`Send`})),await S(await t.findByRole(`alert`)).toHaveTextContent(`Accept the terms to send the request.`),await S(n).toHaveAttribute(`aria-invalid`,`true`),await S(O).not.toHaveBeenCalled(),await w.click(n),await S(n).toBeChecked(),await T(()=>S(t.queryByRole(`alert`)).toBeNull()),await S(n).not.toHaveAttribute(`aria-invalid`),await w.click(t.getByRole(`button`,{name:`Send`})),await T(()=>S(O).toHaveBeenCalledWith({terms:!0},S.anything()))}},A={render:()=>{let e=f({defaultValues:{notifications:{email:!0}}});return(0,x.jsxs)(_.Root,{methods:e,onSubmit:O,"aria-label":`Notifications`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,x.jsxs)(s.Group,{children:[(0,x.jsx)(y,{name:`notifications.email`,label:`Email notifications`,description:`Get an email when a carrier returns a quote.`}),(0,x.jsx)(y,{name:`notifications.sms`,label:`Text messages`,tooltip:`Standard rates from your carrier apply.`,optional:!0})]}),(0,x.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{O.mockClear();let t=E(e),n=t.getByRole(`switch`,{name:`Email notifications`}),r=t.getByRole(`switch`,{name:`Text messages (optional)`}),i=t.getByRole(`button`,{name:`More information`});await S(n).toBeChecked(),await S(r).not.toBeChecked(),await S(r).not.toHaveAttribute(`aria-required`),await S(i.closest(`label`)).toBeNull(),await w.click(n),await w.click(r),await w.click(t.getByRole(`button`,{name:`Save`})),await T(()=>S(O).toHaveBeenCalledWith({notifications:{email:!1,sms:!0}},S.anything()))}},j={render:()=>{let e=f({defaultValues:{skipLicenseCheck:!1}});return(0,x.jsx)(_.Root,{methods:e,"aria-label":`Qualification`,className:`max-w-120`,children:(0,x.jsx)(y,{name:`skipLicenseCheck`,label:`Skip the one-year license check`,description:`Only for agencies the carrier has approved by hand.`,orientation:`vertical`})})},play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`switch`,{name:`Skip the one-year license check`}),r=t.getByText(`Only for agencies the carrier has approved by hand.`);await S(n.closest(`[data-slot=field]`)).toHaveAttribute(`data-orientation`,`vertical`),await S(n.getBoundingClientRect().top).toBeGreaterThanOrEqual(r.getBoundingClientRect().bottom),await w.click(n),await S(n).toBeChecked()}},M={render:()=>{let e=f({defaultValues:{instantAppointments:!0,paperlessBilling:!0}});return(0,x.jsxs)(_.Root,{methods:e,onSubmit:O,"aria-label":`Agency`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,x.jsxs)(s.Group,{children:[(0,x.jsx)(y,{name:`instantAppointments`,label:`Instant appointments`,readOnly:!0}),(0,x.jsx)(y,{name:`paperlessBilling`,label:`Paperless billing`,disabled:!0})]}),(0,x.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{O.mockClear();let t=E(e),n=t.getByRole(`switch`,{name:`Instant appointments`}),r=t.getByRole(`switch`,{name:`Paperless billing`});await S(n).toHaveAttribute(`aria-readonly`,`true`),await S(r).toBeDisabled(),await S(r.closest(`[data-slot=field]`)).toHaveAttribute(`data-disabled`),await w.click(n),await S(n).toBeChecked(),await w.click(t.getByRole(`button`,{name:`Save`})),await T(()=>S(O).toHaveBeenCalledWith({instantAppointments:!0,paperlessBilling:!0},S.anything()))}},N=C(),P={render:()=>{let e=f({defaultValues:{marketing:!1}});return(0,x.jsx)(_.Root,{methods:e,"aria-label":`Preferences`,className:`max-w-120`,children:(0,x.jsx)(y,{name:`marketing`,label:`Product news`,switchProps:{size:`md`,onCheckedChange:t=>N(e.getValues(`marketing`),t)}})})},play:async({canvasElement:e})=>{N.mockClear();let t=E(e).getByRole(`switch`,{name:`Product news`});await S(t).toHaveAttribute(`data-size`,`md`),await w.click(t),await S(t).toBeChecked(),await S(N).toHaveBeenCalledTimes(1),await S(N).toHaveBeenLastCalledWith(!0,!0)}},F={render:()=>{let e=f({defaultValues:{terms:!1,marketing:!1}});return(0,x.jsxs)(_.Root,{methods:e,"aria-label":`Preferences`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,x.jsxs)(s.Group,{children:[(0,x.jsx)(y,{name:`terms`,label:`I accept the carrier terms`}),(0,x.jsx)(y,{name:`marketing`,label:`Product news`})]}),(0,x.jsx)(a,{type:`button`,variant:`secondary`,onClick:()=>e.setFocus(`marketing`),children:`Focus product news`})]})},play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`switch`,{name:`Product news`});await S(n).not.toHaveFocus(),await w.click(t.getByRole(`button`,{name:`Focus product news`})),await S(n).toHaveFocus()}},I=[`Default`,`NestedAndEmpty`,`Vertical`,`DisabledAndReadOnly`,`SwitchPropsChaining`,`SetFocus`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  // The controls drive the field; the form owns the path, the control and the rule.
  render: args => {
    const methods = useForm<TermsValues>({
      defaultValues: {
        terms: false
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Appointment request" className="flex max-w-120 flex-col items-start gap-7">
                <FormSwitch rules={{
        required: 'Accept the terms to send the request.'
      }} {...args} name="terms" />
                <Button type="submit">Send</Button>
            </Form.Root>;
  },
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
}`,...k.parameters?.docs?.source},description:{story:"The field consumers write: a `name`, a `label` and the validation rule.\n`rules.required` fails while the toggle is off, so submitting renders the\nerror and marks the toggle invalid; turning it on clears both and `true`\nreaches `onSubmit`.\n\n@summary Toggle the user must turn on, validating on submit",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<NotificationValues>({
      defaultValues: {
        notifications: {
          email: true
        }
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Notifications" className="flex max-w-120 flex-col items-start gap-7">
                <Field.Group>
                    <FormSwitch<NotificationValues> name="notifications.email" label="Email notifications" description="Get an email when a carrier returns a quote." />
                    <FormSwitch<NotificationValues> name="notifications.sms" label="Text messages" tooltip="Standard rates from your carrier apply." optional />
                </Field.Group>
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const email = canvas.getByRole('switch', {
      name: 'Email notifications'
    });
    const sms = canvas.getByRole('switch', {
      name: 'Text messages (optional)'
    });
    const trigger = canvas.getByRole('button', {
      name: 'More information'
    });
    await expect(email).toBeChecked();
    await expect(sms).not.toBeChecked();
    await expect(sms).not.toHaveAttribute('aria-required');
    await expect(trigger.closest('label')).toBeNull();
    await userEvent.click(email);
    await userEvent.click(sms);
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
}`,...A.parameters?.docs?.source},description:{story:"`name` accepts nested paths typed against the form's values through the\ngeneric. A value the form has not set yet (`undefined`, or `null`) reads as\noff, and the first flip stores a boolean. `tooltip` is an info button beside\nthe label, a sibling of the `<label>`, so the accessible name stays the\nlabel text; `optional` appends a muted suffix to it.\n\n@summary Nested paths, an empty value read as off, and an info tooltip",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
  }
}`,...j.parameters?.docs?.source},description:{story:`\`orientation="vertical"\` stacks the toggle under the label, its
description and its error, for a switch in a form column next to other
fields.

@summary Toggle under the label and its description`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<AgencyValues>({
      defaultValues: {
        instantAppointments: true,
        paperlessBilling: true
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Agency" className="flex max-w-120 flex-col items-start gap-7">
                <Field.Group>
                    <FormSwitch name="instantAppointments" label="Instant appointments" readOnly />
                    <FormSwitch name="paperlessBilling" label="Paperless billing" disabled />
                </Field.Group>
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const instant = canvas.getByRole('switch', {
      name: 'Instant appointments'
    });
    const paperless = canvas.getByRole('switch', {
      name: 'Paperless billing'
    });
    await expect(instant).toHaveAttribute('aria-readonly', 'true');
    await expect(paperless).toBeDisabled();
    await expect(paperless.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
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
}`,...M.parameters?.docs?.source},description:{story:"`disabled` disables the toggle and marks the field, and the value still\nreaches `onSubmit` — unlike react-hook-form's own `disabled` option, which\ndrops it. `readOnly` keeps the toggle focusable and announced, but a click\ndoes not flip it.\n\n@summary Disabled and read-only toggles whose values are still submitted",...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<MarketingValues>({
      defaultValues: {
        marketing: false
      }
    });
    return <Form.Root methods={methods} aria-label="Preferences" className="max-w-120">
                <FormSwitch name="marketing" label="Product news" switchProps={{
        size: 'md',
        onCheckedChange: checked => onOwnCheckedChange(methods.getValues('marketing'), checked)
      }} />
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onOwnCheckedChange.mockClear();
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Product news'
    });
    await expect(toggle).toHaveAttribute('data-size', 'md');
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
    await expect(onOwnCheckedChange).toHaveBeenCalledTimes(1);
    await expect(onOwnCheckedChange).toHaveBeenLastCalledWith(true, true);
  }
}`,...P.parameters?.docs?.source},description:{story:"`switchProps` carries the toggle's own props — `size`, `className`,\n`aria-*`… — and its handlers. A consumer `onCheckedChange` runs after\nreact-hook-form's: by the time it fires, `getValues` already returns the new\nvalue.\n\n@summary Toggle props and a consumer onCheckedChange chained after the form's",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<TermsValues & MarketingValues>({
      defaultValues: {
        terms: false,
        marketing: false
      }
    });
    return <Form.Root methods={methods} aria-label="Preferences" className="flex max-w-120 flex-col items-start gap-7">
                <Field.Group>
                    <FormSwitch name="terms" label="I accept the carrier terms" />
                    <FormSwitch name="marketing" label="Product news" />
                </Field.Group>
                <Button type="button" variant="secondary" onClick={() => methods.setFocus('marketing')}>
                    Focus product news
                </Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const marketing = canvas.getByRole('switch', {
      name: 'Product news'
    });
    await expect(marketing).not.toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Focus product news'
    }));
    await expect(marketing).toHaveFocus();
  }
}`,...F.parameters?.docs?.source},description:{story:"react-hook-form's `ref` reaches the toggle, so `setFocus` and the focus on\nthe first invalid field after submit both work with no ref written by hand.\n\n@summary setFocus reaches the toggle through the merged ref",...F.parameters?.docs?.description}}}})))()}L();export{k as Default,M as DisabledAndReadOnly,A as NestedAndEmpty,F as SetFocus,P as SwitchPropsChaining,j as Vertical,I as __namedExportsOrder,D as default};