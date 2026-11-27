import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./merge-props-036f_J7F.js";import{n as i,t as a}from"./button-CoqCVDkj.js";import{n as o,t as s}from"./field-Ew_FqFCu.js";import{n as c,t as l}from"./field-text-CFTSvVrK.js";import{a as u,r as d}from"./index.esm-JU-wlF3h.js";import{a as f,i as p,n as m,r as h,t as g}from"./form-DWq34AfP.js";import{n as _,t as v}from"./input-tel-CAXBqp3X.js";var y,b;function x(){return(x=e((()=>{n(),c(),p(),_(),y=t(),b=({inputProps:e,...t})=>{let{field:n,rootProps:i,shellProps:a}=f(t),o={name:n.name,value:n.value??``,onChange:n.onChange,onBlur:n.onBlur,ref:n.ref};return(0,y.jsx)(l,{...i,children:(0,y.jsx)(h,{...a,wrapContent:!0,children:(0,y.jsx)(v,{...r(o,e??{})})})})},b.displayName=`FormTel`;try{b.displayName=`FormTel`,b.__docgenInfo={description:"A complete US phone number field bound to one react-hook-form value: label,\n`InputTel`, helper text and validation error, laid out in the standard\norder and wired through `useController`. It renders inside a `Form.Root`,\nwhich provides the form, and needs only a `name`, which on a typed form\nmust point at a string (`FormTelPath`).\n\nThe form stores the number as the user sees it, masked: `(555) 123-4567`,\nnever the bare digits. A partial number may end in a separator: typing\nleaves the one before the next digit (`(555) 123-`), deleting trims it\n(`(555) 123`). Validate the full format with a rule such as\n`pattern: /^\\(\\d{3}\\) \\d{3}-\\d{4}$/`. A value the form writes\nitself, through `defaultValues`, `reset` or `setValue`, is shown as it is\ngiven, so write it masked too.\n\nIt is [FormText](?path=/docs/components-formtext--docs) with an\n[InputTel](?path=/docs/components-inputtel--docs) in place of the `Input`:\nsame props, same layout, the same `required`, `invalid` and error wiring.\nEvery root prop of [FieldText](?path=/docs/components-fieldtext--docs) is\naccepted and forwarded, such as `orientation`, `className` or `controlId`.\n\nDo not use it for international numbers or extensions: the mask only knows\nthe ten-digit US format. Bind those to a `FormText`.",displayName:`FormTel`,filePath:`/home/runner/work/design-system/design-system/src/form-tel/form-tel.tsx`,methods:[],props:{disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.\nDisables the control and marks the field. Unlike react-hook-form's own\n`disabled` option, the value stays in the submitted data: disabling a\nfield is a presentation decision, not a change to the form's values.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.\nMarks the field required: an asterisk on the label and the native\n`required` attribute on the control, which assistive technology\nannounces. It does not validate — pair it with `rules.required` or a\nresolver — and it never triggers the browser bubble, since `Form.Root`\nrenders `noValidate`.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Layout of the field. `vertical` (default) stacks label, control and\nmessages. `horizontal` is one row at every width: the first child fills it\nand the rest keep their natural width, aligned to the right, so the\ncontrols of stacked fields line up. `responsive` stacks below `28rem` and\nbehaves like `horizontal` from there, measured on the field itself, so it\nneeds no particular wrapper. In both, `Field.Content` groups a control with\nits messages, or a label with its description.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical" | "responsive"`,value:[{value:`"horizontal"`},{value:`"vertical"`},{value:`"responsive"`}]}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Path of the value in the form, nested paths included (`'agency.npn'`).\nType it against the form's values by passing their type as the\ncomponent's first generic, or by passing `control`: the path must then\nexist and hold a value of the field's type.",name:`name`,required:!0,tags:{},type:{name:`string`}},control:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"The form's `control`, from `useForm()`. Defaults to the one the\nsurrounding `Form.Root` provides; pass it explicitly to get `name`\ninference without writing the generic, or when the field renders outside\na `Form.Root`. A `control` whose resolver transforms the values is\naccepted as is.",name:`control`,required:!1,tags:{},type:{name:`Control<TFieldValues, any, TTransformedValues>`}},rules:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"react-hook-form validation rules for this field (`required`, `pattern`,\n`validate`…), same as `register`'s. They only validate: `rules.required`\ndoes not mark the field `required` — that is a separate, visible decision.",name:`rules`,required:!1,tags:{},type:{name:`Omit<RegisterOptions<TFieldValues, TName>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">`}},shouldUnregister:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Drops the value from the form when the field unmounts, react-hook-form's\n`shouldUnregister`. Defaults to `false`: a field revealed by another one\nkeeps its value while hidden.",name:`shouldUnregister`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`The caption, rendered as the field's label. Text in almost every case.`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Helper text shown under the control, above the error when there is one,\nand announced through its `aria-describedby`. Use it for guidance the\nuser needs before typing; put details worth a click in `tooltip` instead.",name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},tooltip:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`Content of an info tooltip rendered beside the label, for details that
would clutter the description. The trigger is a sibling of the label, so
the field's accessible name stays the label text.`,name:`tooltip`,required:!1,tags:{},type:{name:`ReactNode`}},tooltipSide:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Preferred side of the tooltip. Defaults to `'top'`.",name:`tooltipSide`,required:!1,tags:{},type:{name:`enum`,raw:`"top" | "right" | "bottom" | "left"`,value:[{value:`"top"`},{value:`"right"`},{value:`"bottom"`},{value:`"left"`}]}},optional:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:'Appends a muted " (optional)" to the label. The forms mark optional fields\nrather than required ones; ignored when `required` is set.',name:`optional`,required:!1,tags:{},type:{name:`boolean`}},inputProps:{defaultValue:null,declarations:[{fileName:`design-system/src/form-tel/form-tel.tsx`,name:`TypeLiteral`}],description:"Everything else the `InputTel` should receive: `placeholder`,\n`autoComplete`, `size`, `className` (which styles the frame)…\nHandlers such as `onChange` and `onBlur` run after react-hook-form's,\nwhich are already wired, and read the masked value.",name:`inputProps`,required:!1,tags:{},type:{name:`FormTelInputProps`}}},tags:{summary:`Label, InputTel, description and error bound to one react-hook-form field`,example:`<FormTel
  name="phone"
  label="Phone number"
  required
  rules={{
    required: 'Enter a phone number.',
    pattern: { value: /^\\(\\d{3}\\) \\d{3}-\\d{4}$/, message: 'Enter a 10-digit phone number.' }
  }}
  inputProps={{ autoComplete: 'tel-national' }}
/>`}}}catch{}})))()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{d(),x(),i(),o(),m(),S=t(),{expect:C,fn:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/FormTel`,component:b,tags:[`autodocs`],argTypes:{name:{control:!1},orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},label:{control:`text`},description:{control:`text`},tooltip:{control:`text`},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`}},args:{name:`phone`,label:`Phone number`,orientation:`vertical`,required:!0,optional:!1,disabled:!1,readOnly:!1},parameters:{docs:{description:{component:"FormTel is a complete US phone number field bound to one react-hook-form\nvalue: label, `InputTel`, helper text and validation error in the standard\norder, wired through `useController`. It renders inside a `Form.Root` and\nneeds only a `name`. The form stores the number masked, as the user sees\nit: `(555) 123-4567`.\n\nIt is `FormText` with an `InputTel` in place of the `Input`: same props,\nsame layout, same wiring."}}}},k=w(),A=/^\(\d{3}\) \d{3}-\d{4}$/,j={render:e=>{let t=u({defaultValues:{phone:``}});return(0,S.jsxs)(g.Root,{methods:t,onSubmit:k,"aria-label":`Contact`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsx)(b,{rules:{required:`Enter a phone number.`,pattern:{value:A,message:`Enter a 10-digit phone number.`}},inputProps:{placeholder:`(555) 000-0000`,autoComplete:`tel-national`},...e,name:`phone`}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Phone number`}),r=t.getByRole(`button`,{name:`Save`});await C(n).toHaveAttribute(`type`,`tel`),await C(n).toHaveAttribute(`name`,`phone`),await C(n).toBeRequired(),await T.click(r),await C(await t.findByRole(`alert`)).toHaveTextContent(`Enter a phone number.`),await C(n).toHaveAttribute(`aria-invalid`,`true`),await T.type(n,`555123`),await C(n).toHaveValue(`(555) 123-`),await T.click(r),await C(await t.findByRole(`alert`)).toHaveTextContent(`Enter a 10-digit phone number.`),await C(k).not.toHaveBeenCalled(),await T.type(n,`4567`),await E(()=>C(t.queryByRole(`alert`)).toBeNull()),await C(n).toHaveValue(`(555) 123-4567`),await T.click(r),await E(()=>C(k).toHaveBeenCalledWith({phone:`(555) 123-4567`},C.anything()))}},M={render:()=>{let e=u({defaultValues:{mobile:``}});return(0,S.jsx)(g.Root,{methods:e,"aria-label":`Agent contact`,children:(0,S.jsx)(b,{name:`mobile`,label:`Mobile number`,optional:!0,description:`We text a code here when you sign in.`})})},play:async({canvasElement:e})=>{let t=D(e).getByRole(`textbox`,{name:`Mobile number (optional)`});await C(t).not.toBeRequired(),await C(t).toHaveAccessibleDescription(`We text a code here when you sign in.`)}},N={render:()=>{let e=u({defaultValues:{phone:`(555) 123-4567`}});return(0,S.jsxs)(g.Root,{methods:e,"aria-label":`Contact`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsx)(b,{name:`phone`,label:`Phone number`}),(0,S.jsx)(a,{type:`button`,variant:`secondary`,onClick:()=>e.reset({phone:`(555) 987-6543`}),children:`Load saved number`})]})},play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`textbox`,{name:`Phone number`});await C(n).toHaveValue(`(555) 123-4567`),await T.click(t.getByRole(`button`,{name:`Load saved number`})),await C(n).toHaveValue(`(555) 987-6543`),await T.clear(n),await T.type(n,`5550001111`),await C(n).toHaveValue(`(555) 000-1111`)}},P=w(),F=w(),I={render:()=>{let e=u({defaultValues:{phone:``}});return(0,S.jsxs)(g.Root,{methods:e,"aria-label":`Contact`,className:`flex flex-col gap-2`,children:[(0,S.jsx)(b,{name:`phone`,label:`Phone number`,description:`We call this number about your policy.`,inputProps:{placeholder:`(555) 000-0000`,autoComplete:`tel-national`,size:`lg`,"aria-describedby":`phone-hours`,onChange:t=>P(e.getValues(`phone`),t.target.value),onBlur:()=>F(e.getFieldState(`phone`).isTouched)}}),(0,S.jsx)(`p`,{id:`phone-hours`,children:`Calls go out on weekdays, 9am to 5pm.`})]})},play:async({canvasElement:e})=>{P.mockClear(),F.mockClear();let t=D(e).getByRole(`textbox`,{name:`Phone number`});await C(t).toHaveAttribute(`placeholder`,`(555) 000-0000`),await C(t).toHaveAttribute(`autocomplete`,`tel-national`),await C(t).toHaveAttribute(`data-size`,`lg`),await C(t).toHaveAccessibleDescription(`We call this number about your policy. Calls go out on weekdays, 9am to 5pm.`),await T.type(t,`5551`),await C(P).toHaveBeenCalledTimes(4),await C(P).toHaveBeenLastCalledWith(`(555) 1`,`(555) 1`),await T.tab(),await C(F).toHaveBeenCalledTimes(1),await C(F).toHaveBeenLastCalledWith(!0)}},L={render:()=>{let e=u({defaultValues:{phone:``,mobile:``}});return(0,S.jsx)(g.Root,{methods:e,"aria-label":`Agent contact`,className:`w-[40rem]`,children:(0,S.jsxs)(s.Group,{children:[(0,S.jsx)(b,{name:`phone`,label:`Office phone`,orientation:`horizontal`,inputProps:{className:`w-72`}}),(0,S.jsx)(b,{name:`mobile`,label:`Mobile`,description:`Used for sign-in codes only.`,orientation:`horizontal`,inputProps:{className:`w-72`},"data-testid":`mobile`})]})})},play:async({canvasElement:e})=>{let t=D(e),n=e=>e.getBoundingClientRect(),r=t.getByTestId(`mobile`),i=t.getByRole(`textbox`,{name:`Mobile`}),a=r.querySelector(`[data-slot=input-tel]`),o=r.querySelector(`[data-slot=field-description]`);await C(r).toHaveAttribute(`data-orientation`,`horizontal`),await C(a).toHaveClass(`w-72`),await C(n(t.getByText(`Mobile`)).right).toBeLessThanOrEqual(n(a).left),await C(n(o).top).toBeGreaterThanOrEqual(n(a).bottom),await C(i).toHaveAccessibleDescription(`Used for sign-in codes only.`)}},R={render:()=>{let e=u({defaultValues:{phone:`(555) 123-4567`}});return(0,S.jsxs)(g.Root,{methods:e,onSubmit:k,"aria-label":`Contact`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsx)(b,{name:`phone`,label:`Phone number`,disabled:!0}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Phone number`});await C(n).toBeDisabled(),await C(n.closest(`[data-slot=field]`)).toHaveAttribute(`data-disabled`),await T.click(t.getByRole(`button`,{name:`Save`})),await E(()=>C(k).toHaveBeenCalledWith({phone:`(555) 123-4567`},C.anything()))}},z={render:()=>{let e=u({defaultValues:{phone:``,mobile:``}});return(0,S.jsxs)(g.Root,{methods:e,onSubmit:k,"aria-label":`Agent contact`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsxs)(s.Group,{children:[(0,S.jsx)(b,{name:`phone`,label:`Office phone`}),(0,S.jsx)(b,{name:`mobile`,label:`Mobile`,required:!0,rules:{required:`Enter a mobile number.`}})]}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e);await T.click(t.getByRole(`button`,{name:`Save`})),await E(()=>C(t.getByRole(`textbox`,{name:`Mobile`})).toHaveFocus()),await C(k).not.toHaveBeenCalled()}},B=[`Default`,`OptionalWithDescription`,`WithDefaultValue`,`InputPropsChaining`,`Horizontal`,`Disabled`,`FocusOnError`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  // The controls drive the field; the form owns the path, the control and the rules.
  render: args => {
    const methods = useForm<ContactValues>({
      defaultValues: {
        phone: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Contact" className="flex flex-col items-start gap-7">
                <FormTel rules={{
        required: 'Enter a phone number.',
        pattern: {
          value: US_PHONE,
          message: 'Enter a 10-digit phone number.'
        }
      }} inputProps={{
        placeholder: '(555) 000-0000',
        autoComplete: 'tel-national'
      }} {...args} name="phone" />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    const save = canvas.getByRole('button', {
      name: 'Save'
    });
    await expect(input).toHaveAttribute('type', 'tel');
    await expect(input).toHaveAttribute('name', 'phone');
    await expect(input).toBeRequired();
    await userEvent.click(save);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter a phone number.');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(input, '555123');
    await expect(input).toHaveValue('(555) 123-');
    await userEvent.click(save);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter a 10-digit phone number.');
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.type(input, '4567');
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
    await expect(input).toHaveValue('(555) 123-4567');
    await userEvent.click(save);
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      phone: '(555) 123-4567'
    }, expect.anything()));
  }
}`,...j.parameters?.docs?.source},description:{story:`A required phone field validating the full format. The digits are masked as
they are typed, a partial number fails the \`pattern\` rule, and the form
receives the masked text, never the bare digits.

@summary Required phone field submitting the masked number`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<{
      mobile: string;
    }>({
      defaultValues: {
        mobile: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Agent contact">
                <FormTel name="mobile" label="Mobile number" optional description="We text a code here when you sign in." />
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Mobile number (optional)'
    });
    await expect(input).not.toBeRequired();
    await expect(input).toHaveAccessibleDescription('We text a code here when you sign in.');
  }
}`,...M.parameters?.docs?.source},description:{story:"`optional` appends a muted suffix to the label and leaves the input without\nthe `required` attribute. `description` is announced with the input.\n\n@summary Optional phone field with helper text",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<ContactValues>({
      defaultValues: {
        phone: '(555) 123-4567'
      }
    });
    return <Form.Root methods={methods} aria-label="Contact" className="flex flex-col items-start gap-7">
                <FormTel name="phone" label="Phone number" />
                <Button type="button" variant="secondary" onClick={() => methods.reset({
        phone: '(555) 987-6543'
      })}>
                    Load saved number
                </Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(input).toHaveValue('(555) 123-4567');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Load saved number'
    }));
    await expect(input).toHaveValue('(555) 987-6543');
    await userEvent.clear(input);
    await userEvent.type(input, '5550001111');
    await expect(input).toHaveValue('(555) 000-1111');
  }
}`,...N.parameters?.docs?.source},description:{story:"A value the form writes itself — `defaultValues`, `reset`, `setValue` — is\nshown as given, so it is written masked, in the same shape the field stores.\nEditing it masks the result as usual.\n\n@summary Masked default value and reset written by the form",...N.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<ContactValues>({
      defaultValues: {
        phone: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Contact" className="flex flex-col gap-2">
                <FormTel name="phone" label="Phone number" description="We call this number about your policy." inputProps={{
        placeholder: '(555) 000-0000',
        autoComplete: 'tel-national',
        size: 'lg',
        'aria-describedby': 'phone-hours',
        onChange: event => onOwnChange(methods.getValues('phone'), event.target.value),
        onBlur: () => onOwnBlur(methods.getFieldState('phone').isTouched)
      }} />
                <p id="phone-hours">Calls go out on weekdays, 9am to 5pm.</p>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onOwnChange.mockClear();
    onOwnBlur.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(input).toHaveAttribute('placeholder', '(555) 000-0000');
    await expect(input).toHaveAttribute('autocomplete', 'tel-national');
    await expect(input).toHaveAttribute('data-size', 'lg');
    await expect(input).toHaveAccessibleDescription('We call this number about your policy. Calls go out on weekdays, 9am to 5pm.');
    await userEvent.type(input, '5551');
    await expect(onOwnChange).toHaveBeenCalledTimes(4);
    await expect(onOwnChange).toHaveBeenLastCalledWith('(555) 1', '(555) 1');
    await userEvent.tab();
    await expect(onOwnBlur).toHaveBeenCalledTimes(1);
    await expect(onOwnBlur).toHaveBeenLastCalledWith(true);
  }
}`,...I.parameters?.docs?.source},description:{story:"`inputProps` carries the input's own attributes — `placeholder`,\n`autoComplete`, `size`… — and its handlers. A consumer `onChange` runs after\nreact-hook-form's and reads the masked value, both from the event and from\n`getValues`; a consumer `onBlur` runs once the field is already touched. An\n`aria-describedby` of its own joins the field's description instead of\nreplacing it.\n\n@summary Input attributes, chained handlers and an extra aria-describedby",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<AgentValues>({
      defaultValues: {
        phone: '',
        mobile: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Agent contact" className="w-[40rem]">
                <Field.Group>
                    <FormTel name="phone" label="Office phone" orientation="horizontal" inputProps={{
          className: 'w-72'
        }} />
                    <FormTel name="mobile" label="Mobile" description="Used for sign-in codes only." orientation="horizontal" inputProps={{
          className: 'w-72'
        }} data-testid="mobile" />
                </Field.Group>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rect = (element: Element) => element.getBoundingClientRect();
    const field = canvas.getByTestId('mobile');
    const input = canvas.getByRole('textbox', {
      name: 'Mobile'
    });
    const frame = field.querySelector('[data-slot=input-tel]') as HTMLElement;
    const description = field.querySelector('[data-slot=field-description]') as HTMLElement;
    await expect(field).toHaveAttribute('data-orientation', 'horizontal');
    await expect(frame).toHaveClass('w-72');
    await expect(rect(canvas.getByText('Mobile')).right).toBeLessThanOrEqual(rect(frame).left);
    await expect(rect(description).top).toBeGreaterThanOrEqual(rect(frame).bottom);
    await expect(input).toHaveAccessibleDescription('Used for sign-in codes only.');
  }
}`,...L.parameters?.docs?.source},description:{story:`Root props pass through: \`orientation="horizontal"\` lays the label and the
phone frame in a row, with the description under the control.

@summary Horizontal orientation through the root props`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<ContactValues>({
      defaultValues: {
        phone: '(555) 123-4567'
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Contact" className="flex flex-col items-start gap-7">
                <FormTel name="phone" label="Phone number" disabled />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(input).toBeDisabled();
    await expect(input.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      phone: '(555) 123-4567'
    }, expect.anything()));
  }
}`,...R.parameters?.docs?.source},description:{story:"`disabled` disables the input and marks the field, and the value still\nreaches `onSubmit` — unlike react-hook-form's own `disabled` option, which\ndrops it.\n\n@summary Disabled phone field whose value is still submitted",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<AgentValues>({
      defaultValues: {
        phone: '',
        mobile: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Agent contact" className="flex flex-col items-start gap-7">
                <Field.Group>
                    <FormTel name="phone" label="Office phone" />
                    <FormTel name="mobile" label="Mobile" required rules={{
          required: 'Enter a mobile number.'
        }} />
                </Field.Group>
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(canvas.getByRole('textbox', {
      name: 'Mobile'
    })).toHaveFocus());
    await expect(onSubmit).not.toHaveBeenCalled();
  }
}`,...z.parameters?.docs?.source},description:{story:"react-hook-form's `ref` reaches the `<input>` inside the phone frame, so\n`setFocus` and the focus on the first invalid field after submit both work.\n\n@summary Focus on the first invalid field after submit",...z.parameters?.docs?.description}}}})))()}V();export{j as Default,R as Disabled,z as FocusOnError,L as Horizontal,I as InputPropsChaining,M as OptionalWithDescription,N as WithDefaultValue,B as __namedExportsOrder,O as default};