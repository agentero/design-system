import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./merge-props-BvZWBepU.js";import{n as i,t as a}from"./button-C1H0vVIZ.js";import{n as o,t as s}from"./field-u2vhzj15.js";import{n as c,t as l}from"./checkbox-XDaqkQj4.js";import{n as u,t as d}from"./field-checkbox-i3u6t7yZ.js";import{a as f,r as p}from"./index.esm-Dvl19wYF.js";import{a as m,n as h,o as g,r as _,t as v}from"./form-BaNEYnnH.js";var y,b;function x(){return(x=e((()=>{n(),c(),u(),m(),y=t(),b=({checkboxProps:e,...t})=>{let{field:n,rootProps:i,shellProps:a}=g(t),o={name:n.name,checked:n.value===!0,onCheckedChange:e=>n.onChange(e===!0),onBlur:n.onBlur,ref:n.ref};return(0,y.jsxs)(d,{...i,children:[(0,y.jsx)(l,{...r(o,e??{})}),(0,y.jsx)(_,{...a})]})},b.displayName=`FormCheckbox`;try{b.displayName=`FormCheckbox`,b.__docgenInfo={description:"A complete checkbox field bound to one boolean react-hook-form value: the\nbox, its label, helper text and validation error, wired through\n`useController`. It renders inside a `Form.Root`, which provides the form,\nand needs only a `name`, which on a typed form must point at a boolean\n(`FormCheckboxPath`). The `required`, `invalid` and error states reach the\nlabel, the box's `aria-*` attributes and the message with no ids written by\nhand.\n\nThe layout is [FieldCheckbox](?path=/docs/components-fieldcheckbox--docs)'s:\nthe box first, and the label, its description and its error stacked beside\nit. Checking the box stores `true` and clearing it `false`. `rules.required`\nfails on `false`, so it is how a box the user must check (terms, consent) is\nvalidated.\n\nUse it for the common case: one labelled checkbox in a form. A list of\noptions stored in one array is a `CheckboxGroup`. For another layout,\ncompose the primitives yourself: `useController` with `FieldCheckbox`,\n`Checkbox`, `Field.Content`, `Label`, `Field.Description` and\n`Field.Error`. Over that composition `FormCheckbox` adds one thing: it reads\nan empty value as unchecked (`checked={field.value === true}`), where a\n`Checkbox` given the form's `undefined` starts uncontrolled.\n\nErrors come from `useController`'s per-field state, never from\n`formState.errors`, so the message stays fresh under the React Compiler.",displayName:`FormCheckbox`,filePath:`/home/runner/work/design-system/design-system/src/form-checkbox/form-checkbox.tsx`,methods:[],props:{disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.\nDisables the control and marks the field. Unlike react-hook-form's own\n`disabled` option, the value stays in the submitted data: disabling a\nfield is a presentation decision, not a change to the form's values.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.\nMarks the field required: an asterisk on the label and the native\n`required` attribute on the control, which assistive technology\nannounces. It does not validate — pair it with `rules.required` or a\nresolver — and it never triggers the browser bubble, since `Form.Root`\nrenders `noValidate`.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Path of the value in the form, nested paths included (`'agency.npn'`).\nType it against the form's values by passing their type as the\ncomponent's first generic, or by passing `control`: the path must then\nexist and hold a value of the field's type.",name:`name`,required:!0,tags:{},type:{name:`string`}},control:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"The form's `control`, from `useForm()`. Defaults to the one the\nsurrounding `Form.Root` provides; pass it explicitly to get `name`\ninference without writing the generic, or when the field renders outside\na `Form.Root`. A `control` whose resolver transforms the values is\naccepted as is.",name:`control`,required:!1,tags:{},type:{name:`Control<TFieldValues, any, TTransformedValues>`}},rules:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"react-hook-form validation rules for this field (`required`, `pattern`,\n`validate`…), same as `register`'s. They only validate: `rules.required`\ndoes not mark the field `required` — that is a separate, visible decision.",name:`rules`,required:!1,tags:{},type:{name:`Omit<RegisterOptions<TFieldValues, TName>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">`}},shouldUnregister:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Drops the value from the form when the field unmounts, react-hook-form's\n`shouldUnregister`. Defaults to `false`: a field revealed by another one\nkeeps its value while hidden.",name:`shouldUnregister`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`The caption, rendered as the field's label. Text in almost every case.`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Helper text shown under the control, above the error when there is one,\nand announced through its `aria-describedby`. Use it for guidance the\nuser needs before typing; put details worth a click in `tooltip` instead.",name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},tooltip:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`Content of an info tooltip rendered beside the label, for details that
would clutter the description. The trigger is a sibling of the label, so
the field's accessible name stays the label text.`,name:`tooltip`,required:!1,tags:{},type:{name:`ReactNode`}},tooltipSide:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Preferred side of the tooltip. Defaults to `'top'`.",name:`tooltipSide`,required:!1,tags:{},type:{name:`enum`,raw:`"top" | "right" | "bottom" | "left"`,value:[{value:`"top"`},{value:`"right"`},{value:`"bottom"`},{value:`"left"`}]}},optional:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:'Appends a muted " (optional)" to the label. The forms mark optional fields\nrather than required ones; ignored when `required` is set.',name:`optional`,required:!1,tags:{},type:{name:`boolean`}},checkboxProps:{defaultValue:null,declarations:[{fileName:`design-system/src/form-checkbox/form-checkbox.tsx`,name:`TypeLiteral`}],description:"Everything else the `Checkbox` should receive: `className`, `aria-*`…\nHandlers such as `onCheckedChange` and `onBlur` run after\nreact-hook-form's, which are already wired, and `aria-describedby` ids\njoin the ones the field wires. The rest is owned elsewhere, so it is\nleft out: the field sets `id` (choose it with `controlId`) and names the\nbox with its `label`; react-hook-form sets `name` and `checked` (start\nit in `useForm`'s `defaultValues`); `disabled`, `required` and\n`readOnly` are props of `FormCheckbox`, so the label and the root follow\nthem too.",name:`checkboxProps`,required:!1,tags:{},type:{name:`FormCheckboxCheckboxProps`}}},tags:{summary:`Checkbox, label, description and error bound to one boolean react-hook-form field`,example:`<FormCheckbox
  name="acceptTerms"
  label="I accept the carrier terms"
  required
  rules={{ required: 'Accept the terms to send the request.' }}
/>`}}}catch{}})))()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{p(),x(),i(),o(),h(),S=t(),{expect:C,fn:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/FormCheckbox`,component:b,tags:[`autodocs`],argTypes:{name:{control:!1},label:{control:`text`},description:{control:`text`},tooltip:{control:`text`},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`}},args:{name:`terms`,label:`I accept the carrier terms`,description:`The carrier reviews every request against them.`,required:!0,optional:!1,disabled:!1,readOnly:!1},parameters:{docs:{description:{component:"FormCheckbox is a complete checkbox field bound to one boolean\nreact-hook-form value: the box, its label, helper text and validation error,\nlaid out as in `FieldCheckbox` and wired through `useController`. It renders inside a\n`Form.Root` and needs only a `name`; `required`, `invalid` and the error\nreach the label, the box's `aria-*` attributes and the message with no\nids written by hand.\n\nIt covers the common case. For another layout, compose `useController` with\nthe `FieldCheckbox`, `Checkbox`, `Label` and `Field.*` primitives directly."}}}},k=[`!dev`,`!autodocs`,`!manifest`],A=w(),j=e=>{let t=f({defaultValues:{terms:!1}});return(0,S.jsxs)(v.Root,{methods:t,onSubmit:A,"aria-label":`Appointment request`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,S.jsx)(b,{label:`I accept the carrier terms`,rules:{required:`Accept the terms to send the request.`},...e,name:`terms`}),(0,S.jsx)(a,{type:`submit`,children:`Send`})]})},M={render:e=>(0,S.jsx)(j,{...e})},N={tags:k,render:()=>(0,S.jsx)(j,{description:`The carrier reviews every request against them.`,required:!0}),play:async({canvasElement:e})=>{A.mockClear();let t=D(e),n=t.getByRole(`checkbox`,{name:`I accept the carrier terms`});await C(n).not.toBeChecked(),await C(n).toHaveAttribute(`aria-required`,`true`),await C(n).toHaveAccessibleDescription(`The carrier reviews every request against them.`),await C(t.queryByRole(`alert`)).toBeNull(),await T.click(t.getByRole(`button`,{name:`Send`})),await C(await t.findByRole(`alert`)).toHaveTextContent(`Accept the terms to send the request.`),await C(n).toHaveAttribute(`aria-invalid`,`true`),await C(n).toHaveFocus(),await C(A).not.toHaveBeenCalled(),await T.click(n),await C(n).toBeChecked(),await E(()=>C(t.queryByRole(`alert`)).toBeNull()),await C(n).not.toHaveAttribute(`aria-invalid`),await T.click(t.getByRole(`button`,{name:`Send`})),await E(()=>C(A).toHaveBeenCalledWith({terms:!0},C.anything()))}},P=()=>{let e=f({defaultValues:{notifications:{email:!0}}});return(0,S.jsxs)(v.Root,{methods:e,onSubmit:A,"aria-label":`Notifications`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,S.jsxs)(s.Group,{children:[(0,S.jsx)(b,{name:`notifications.email`,label:`Email notifications`,description:`Get an email when a carrier returns a quote.`}),(0,S.jsx)(b,{name:`notifications.sms`,label:`Text messages`,tooltip:`Standard rates from your carrier apply.`,optional:!0})]}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},F={render:()=>(0,S.jsx)(P,{}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`checkbox`,{name:`Text messages (optional)`});await C(t.getByRole(`checkbox`,{name:`Email notifications`})).toBeChecked(),await C(n).not.toBeChecked(),await C(n).not.toHaveAttribute(`aria-required`),await C(t.getByRole(`button`,{name:`More information`}).closest(`label`)).toBeNull()}},I={tags:k,render:()=>(0,S.jsx)(P,{}),play:async({canvasElement:e})=>{A.mockClear();let t=D(e);await T.click(t.getByRole(`checkbox`,{name:`Email notifications`})),await T.click(t.getByRole(`checkbox`,{name:`Text messages (optional)`})),await T.click(t.getByRole(`button`,{name:`Save`})),await E(()=>C(A).toHaveBeenCalledWith({notifications:{email:!1,sms:!0}},C.anything()))}},L=()=>{let e=f({defaultValues:{instantAppointments:!0,paperlessBilling:!0}});return(0,S.jsxs)(v.Root,{methods:e,onSubmit:A,"aria-label":`Agency`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,S.jsxs)(s.Group,{children:[(0,S.jsx)(b,{name:`instantAppointments`,label:`Instant appointments`,readOnly:!0}),(0,S.jsx)(b,{name:`paperlessBilling`,label:`Paperless billing`,disabled:!0})]}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},R={render:()=>(0,S.jsx)(L,{}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`checkbox`,{name:`Paperless billing`});await C(t.getByRole(`checkbox`,{name:`Instant appointments`})).toHaveAttribute(`aria-readonly`,`true`),await C(n).toBeDisabled(),await C(n.closest(`[data-slot=field]`)).toHaveAttribute(`data-disabled`)}},z={tags:k,render:()=>(0,S.jsx)(L,{}),play:async({canvasElement:e})=>{A.mockClear();let t=D(e),n=t.getByRole(`checkbox`,{name:`Instant appointments`});await T.click(n),await C(n).toBeChecked(),await T.click(t.getByRole(`button`,{name:`Save`})),await E(()=>C(A).toHaveBeenCalledWith({instantAppointments:!0,paperlessBilling:!0},C.anything()))}},B=w(),V=()=>{let e=f({defaultValues:{marketing:!1}});return(0,S.jsxs)(v.Root,{methods:e,"aria-label":`Preferences`,className:`flex max-w-120 flex-col gap-2`,children:[(0,S.jsx)(b,{name:`marketing`,label:`Product news`,description:`One email a month.`,checkboxProps:{"aria-describedby":`marketing-unsubscribe`,onCheckedChange:t=>B(e.getValues(`marketing`),t)}}),(0,S.jsx)(`p`,{id:`marketing-unsubscribe`,className:`text-sm text-text-input-placeholder`,children:`Unsubscribe from any email.`})]})},H={render:()=>(0,S.jsx)(V,{}),play:async({canvasElement:e})=>{let t=D(e);await C(t.getByRole(`checkbox`,{name:`Product news`})).toHaveAccessibleDescription(`One email a month. Unsubscribe from any email.`)}},U={tags:k,render:()=>(0,S.jsx)(V,{}),play:async({canvasElement:e})=>{B.mockClear();let t=D(e).getByRole(`checkbox`,{name:`Product news`});await T.click(t),await C(t).toBeChecked(),await C(B).toHaveBeenCalledTimes(1),await C(B).toHaveBeenLastCalledWith(!0,!0)}},W=[`Default`,`ValidatesOnSubmit`,`NestedAndEmpty`,`SubmitsNestedBooleans`,`DisabledAndReadOnly`,`SubmitsDisabledAndReadOnly`,`CheckboxProps`,`ChainsOnCheckedChange`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  // The controls drive the field; the form owns the path, the value and the rule.
  render: args => <TermsForm {...args} />
}`,...M.parameters?.docs?.source},description:{story:"The field consumers write: a `name`, a `label` and the validation rule.\n`rules.required` fails while the box is clear, so sending with it clear\nrenders the error and marks the box invalid; checking it clears both and\n`true` reaches `onSubmit`.\n\n@summary Box the user must check, validating on submit",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <TermsForm description="The carrier reviews every request against them." required />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: 'I accept the carrier terms'
    });
    await expect(box).not.toBeChecked();
    await expect(box).toHaveAttribute('aria-required', 'true');
    await expect(box).toHaveAccessibleDescription('The carrier reviews every request against them.');
    await expect(canvas.queryByRole('alert')).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Send'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Accept the terms to send the request.');
    await expect(box).toHaveAttribute('aria-invalid', 'true');
    await expect(box).toHaveFocus();
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.click(box);
    await expect(box).toBeChecked();
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
    await expect(box).not.toHaveAttribute('aria-invalid');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Send'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      terms: true
    }, expect.anything()));
  }
}`,...N.parameters?.docs?.source},description:{story:"Sending with the box clear renders the error, marks the box invalid and\nfocuses it through react-hook-form's `ref`; checking it clears both and\n`true` reaches `onSubmit`.",...N.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <NotificationsForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sms = canvas.getByRole('checkbox', {
      name: 'Text messages (optional)'
    });
    await expect(canvas.getByRole('checkbox', {
      name: 'Email notifications'
    })).toBeChecked();
    await expect(sms).not.toBeChecked();
    await expect(sms).not.toHaveAttribute('aria-required');
    await expect(canvas.getByRole('button', {
      name: 'More information'
    }).closest('label')).toBeNull();
  }
}`,...F.parameters?.docs?.source},description:{story:"`name` accepts nested paths typed against the form's values through the\ngeneric. A value the form has not set yet (`undefined`, or `null`) reads as\nunchecked, and the first click stores a boolean. `tooltip` is an info button beside\nthe label, a sibling of the `<label>`, so the accessible name stays the\nlabel text; `optional` appends a muted suffix to it.\n\n@summary Nested paths, an empty value read as unchecked, and an info tooltip",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <NotificationsForm />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Email notifications'
    }));
    await userEvent.click(canvas.getByRole('checkbox', {
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
}`,...I.parameters?.docs?.source},description:{story:`Clicking both boxes submits booleans at their nested paths, the empty one included.`,...I.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <AgencyForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const paperless = canvas.getByRole('checkbox', {
      name: 'Paperless billing'
    });
    await expect(canvas.getByRole('checkbox', {
      name: 'Instant appointments'
    })).toHaveAttribute('aria-readonly', 'true');
    await expect(paperless).toBeDisabled();
    await expect(paperless.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
  }
}`,...R.parameters?.docs?.source},description:{story:"`disabled` disables the box and marks the field, and the value still\nreaches `onSubmit` — unlike react-hook-form's own `disabled` option, which\ndrops it. `readOnly` keeps the box focusable and announced, but a click\ndoes not toggle it.\n\n@summary Disabled and read-only boxes whose values are still submitted",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <AgencyForm />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const instant = canvas.getByRole('checkbox', {
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
}`,...z.parameters?.docs?.source},description:{story:`A click leaves the read-only box as it was, and both values are submitted.`,...z.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <MarketingForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox', {
      name: 'Product news'
    })).toHaveAccessibleDescription('One email a month. Unsubscribe from any email.');
  }
}`,...H.parameters?.docs?.source},description:{story:"`checkboxProps` carries the box's own props — `aria-*`, `className`… — and\nits handlers. An `aria-describedby` joins the ids the field wires, and a\nconsumer `onCheckedChange` runs after react-hook-form's: by the time it\nfires, `getValues` already returns the new value.\n\n@summary Checkbox props merged with the field's wiring",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <MarketingForm />,
  play: async ({
    canvasElement
  }) => {
    onOwnCheckedChange.mockClear();
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: 'Product news'
    });
    await userEvent.click(box);
    await expect(box).toBeChecked();
    await expect(onOwnCheckedChange).toHaveBeenCalledTimes(1);
    await expect(onOwnCheckedChange).toHaveBeenLastCalledWith(true, true);
  }
}`,...U.parameters?.docs?.source},description:{story:"A consumer `onCheckedChange` runs after react-hook-form's, once the value is stored.",...U.parameters?.docs?.description}}}})))()}G();export{U as ChainsOnCheckedChange,H as CheckboxProps,M as Default,R as DisabledAndReadOnly,F as NestedAndEmpty,z as SubmitsDisabledAndReadOnly,I as SubmitsNestedBooleans,N as ValidatesOnSubmit,W as __namedExportsOrder,O as default};