import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./merge-props-ClApPWpD.js";import{n as i,t as a}from"./button-C78pMKrf.js";import{n as o,t as s}from"./field-Cd7VO1QX.js";import{n as c,t as l}from"./field-text-BqDGCMvL.js";import{a as u,r as d}from"./index.esm-C6WIbBkv.js";import{a as f,i as p,n as m,r as h,t as g}from"./form-CwUMte4i.js";import{n as _,t as v}from"./input-password-B6Lfvu_O.js";import{n as y,t as b}from"./form-text-D0QcZGBJ.js";var x,S;function C(){return(C=e((()=>{n(),c(),p(),_(),x=t(),S=({inputProps:e,...t})=>{let{field:n,rootProps:i,shellProps:a}=f(t),o={name:n.name,value:n.value??``,onChange:n.onChange,onBlur:n.onBlur,ref:n.ref};return(0,x.jsx)(l,{...i,children:(0,x.jsx)(h,{...a,wrapContent:!0,children:(0,x.jsx)(v,{...r(o,e)})})})},S.displayName=`FormPassword`;try{S.displayName=`FormPassword`,S.__docgenInfo={description:"A complete password field bound to one react-hook-form value: label,\n`InputPassword` with its show/hide toggle, helper text and validation\nerror, laid out in the standard order and wired through `useController`. It\nrenders inside a `Form.Root`, which provides the form, and needs a `name`,\nwhich on a typed form must point at a string (`FormPasswordPath`), and an\n`inputProps.autoComplete`.\n\nThe form stores the text as typed; the toggle only changes what the input\nshows. `inputProps.autoComplete` is required, so each field says which\npassword it holds and password managers fill the right one. For the\nstrength rules of a new password, put each one in `rules.validate` and set\n`criteriaMode: 'all'` on the form: the field then lists every rule that\nfailed.\n\nIt is [FormText](?path=/docs/components-formtext--docs) with an\n[InputPassword](?path=/docs/components-inputpassword--docs) in place of the\n`Input`: same props, same layout, the same `required`, `invalid` and error\nwiring. Only `inputProps` differs: it does not take `type`, which the\ntoggle owns, and it requires `autoComplete`. Every root prop of\n[FieldText](?path=/docs/components-fieldtext--docs) is accepted and\nforwarded, such as `orientation`, `className` or `controlId`.\n\nDo not use it for text that is not secret, nor for a one-time code, which\nis a `FormText` with `inputProps={{ autoComplete: 'one-time-code' }}`.",displayName:`FormPassword`,filePath:`/home/runner/work/design-system/design-system/src/form-password/form-password.tsx`,methods:[],props:{orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Layout of the field. `vertical` (default) stacks label, control and\nmessages. `horizontal` is one row at every width: the first child fills it\nand the rest keep their natural width, aligned to the right, so the\ncontrols of stacked fields line up. `responsive` stacks below `28rem` and\nbehaves like `horizontal` from there, measured on the field itself, so it\nneeds no particular wrapper. In both, `Field.Content` groups a control with\nits messages, or a label with its description.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical" | "responsive"`,value:[{value:`"horizontal"`},{value:`"vertical"`},{value:`"responsive"`}]}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.\nDisables the control and marks the field. Unlike react-hook-form's own\n`disabled` option, the value stays in the submitted data: disabling a\nfield is a presentation decision, not a change to the form's values.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.\nMarks the field required: an asterisk on the label and the native\n`required` attribute on the control, which assistive technology\nannounces. It does not validate — pair it with `rules.required` or a\nresolver — and it never triggers the browser bubble, since `Form.Root`\nrenders `noValidate`.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Path of the value in the form, nested paths included (`'agency.npn'`).\nType it against the form's values by passing their type as the\ncomponent's first generic, or by passing `control`: the path must then\nexist and hold a value of the field's type.",name:`name`,required:!0,tags:{},type:{name:`string`}},control:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"The form's `control`, from `useForm()`. Defaults to the one the\nsurrounding `Form.Root` provides; pass it explicitly to get `name`\ninference without writing the generic, or when the field renders outside\na `Form.Root`. A `control` whose resolver transforms the values is\naccepted as is.",name:`control`,required:!1,tags:{},type:{name:`Control<TFieldValues, any, TTransformedValues>`}},rules:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"react-hook-form validation rules for this field (`required`, `pattern`,\n`validate`…), same as `register`'s. They only validate: `rules.required`\ndoes not mark the field `required` — that is a separate, visible decision.",name:`rules`,required:!1,tags:{},type:{name:`Omit<RegisterOptions<TFieldValues, TName>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">`}},shouldUnregister:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Drops the value from the form when the field unmounts, react-hook-form's\n`shouldUnregister`. Defaults to `false`: a field revealed by another one\nkeeps its value while hidden.",name:`shouldUnregister`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`The caption, rendered as the field's label. Text in almost every case.`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Helper text shown under the control, above the error when there is one,\nand announced through its `aria-describedby`. Use it for guidance the\nuser needs before typing; put details worth a click in `tooltip` instead.",name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},tooltip:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`Content of an info tooltip rendered beside the label, for details that
would clutter the description. The trigger is a sibling of the label, so
the field's accessible name stays the label text.`,name:`tooltip`,required:!1,tags:{},type:{name:`ReactNode`}},tooltipSide:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Preferred side of the tooltip. Defaults to `'top'`.",name:`tooltipSide`,required:!1,tags:{},type:{name:`enum`,raw:`"top" | "right" | "bottom" | "left"`,value:[{value:`"top"`},{value:`"right"`},{value:`"bottom"`},{value:`"left"`}]}},optional:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:'Appends a muted " (optional)" to the label. The forms mark optional fields\nrather than required ones; ignored when `required` is set.',name:`optional`,required:!1,tags:{},type:{name:`boolean`}},inputProps:{defaultValue:null,declarations:[{fileName:`design-system/src/form-password/form-password.tsx`,name:`TypeLiteral`}],description:"Everything else the `InputPassword` should receive: `autoComplete`,\nwhich is required, `placeholder`, `maxLength`, `size`, `className` (which styles the\nframe)… Handlers such as `onChange` and `onBlur` run after\nreact-hook-form's, which are already wired. `type` is not accepted:\nthe show/hide toggle owns it.",name:`inputProps`,required:!0,tags:{},type:{name:`FormPasswordInputProps`}}},tags:{summary:`Label, InputPassword, description and error bound to one react-hook-form field`,example:`<FormPassword
  name="password"
  label="Password"
  required
  rules={{ required: 'Enter your password.' }}
  inputProps={{ autoComplete: 'current-password' }}
/>`}}}catch{}})))()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{d(),C(),i(),o(),m(),y(),w=t(),{expect:T,fn:E,userEvent:D,waitFor:O,within:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/FormPassword`,component:S,tags:[`autodocs`],argTypes:{name:{control:!1},inputProps:{control:!1},orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},label:{control:`text`},description:{control:`text`},tooltip:{control:`text`},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`}},args:{name:`password`,label:`Password`,inputProps:{autoComplete:`current-password`},orientation:`vertical`,required:!0,optional:!1,disabled:!1,readOnly:!1},parameters:{docs:{description:{component:"FormPassword is a complete password field bound to one react-hook-form\nvalue: label, `InputPassword` with its show/hide toggle, helper text and\nvalidation error in the standard order, wired through `useController`. It\nrenders inside a `Form.Root` and needs a `name` and an\n`inputProps.autoComplete`.\n\nIt is `FormText` with an `InputPassword` in place of the `Input`: same\nprops, same layout, same wiring. Only `inputProps.type` is left out,\nbecause the toggle owns it, and `inputProps.autoComplete` is required."}}}},j=E(),M={render:e=>{let t=u({defaultValues:{email:``,password:``}});return(0,w.jsxs)(g.Root,{methods:t,onSubmit:j,"aria-label":`Sign in`,className:`flex flex-col items-start gap-7`,children:[(0,w.jsx)(S,{rules:{required:`Enter your password.`},...e,name:`password`}),(0,w.jsx)(a,{type:`submit`,children:`Sign in`})]})},play:async({canvasElement:e})=>{j.mockClear();let t=k(e),n=t.getByLabelText(/Password/),r=t.getByRole(`button`,{name:`Sign in`});await T(n).toHaveAttribute(`type`,`password`),await T(n).toHaveAttribute(`name`,`password`),await T(n).toHaveAttribute(`autocomplete`,`current-password`),await T(n).toBeRequired(),await D.click(r),await T(await t.findByRole(`alert`)).toHaveTextContent(`Enter your password.`),await T(n).toHaveAttribute(`aria-invalid`,`true`),await D.type(n,`Str0ngPassw0rd`),await D.click(t.getByRole(`button`,{name:`Show password`})),await T(n).toHaveAttribute(`type`,`text`),await T(n).toHaveValue(`Str0ngPassw0rd`),await D.click(r),await O(()=>T(j).toHaveBeenCalledWith({email:``,password:`Str0ngPassw0rd`},T.anything()))}},N={render:()=>{let e=u({defaultValues:{newPassword:``},criteriaMode:`all`});return(0,w.jsxs)(g.Root,{methods:e,onSubmit:j,"aria-label":`Change password`,className:`flex flex-col items-start gap-7`,children:[(0,w.jsx)(S,{name:`newPassword`,label:`New password`,description:`At least 10 characters, with an uppercase letter and a number.`,required:!0,inputProps:{autoComplete:`new-password`},rules:{required:`Enter a password.`,validate:{uppercase:e=>/[A-Z]/.test(e)||`At least one uppercase letter.`,number:e=>/[0-9]/.test(e)||`At least one number.`,length:e=>e.length>=10||`At least 10 characters.`}}}),(0,w.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{j.mockClear();let t=k(e),n=t.getByLabelText(/New password/);await D.type(n,`short`),await D.click(t.getByRole(`button`,{name:`Save`}));let r=await t.findByRole(`alert`);await T(k(r).getAllByRole(`listitem`)).toHaveLength(3),await T(n).toHaveAccessibleDescription(T.stringContaining(`At least 10 characters, with an uppercase letter and a number.`)),await T(j).not.toHaveBeenCalled(),await D.clear(n),await D.type(n,`Str0ngPassw0rd`),await D.click(t.getByRole(`button`,{name:`Save`})),await O(()=>T(j).toHaveBeenCalledWith({newPassword:`Str0ngPassw0rd`},T.anything()))}},P=E(),F=E(),I={render:()=>{let e=u({defaultValues:{email:``,password:``}});return(0,w.jsxs)(g.Root,{methods:e,"aria-label":`Sign in`,className:`flex flex-col gap-2`,children:[(0,w.jsx)(S,{name:`password`,label:`Password`,description:`The one you set when you activated your account.`,inputProps:{placeholder:`Enter your password`,autoComplete:`current-password`,size:`lg`,"aria-describedby":`password-reset`,onChange:t=>P(e.getValues(`password`),t.target.value),onBlur:()=>F(e.getFieldState(`password`).isTouched)}}),(0,w.jsx)(`p`,{id:`password-reset`,children:`Forgot it? Ask your admin for a reset link.`})]})},play:async({canvasElement:e})=>{P.mockClear(),F.mockClear();let t=k(e).getByLabelText(`Password`);await T(t).toHaveAttribute(`placeholder`,`Enter your password`),await T(t).toHaveAttribute(`autocomplete`,`current-password`),await T(t).toHaveAttribute(`data-size`,`lg`),await T(t).toHaveAccessibleDescription(`The one you set when you activated your account. Forgot it? Ask your admin for a reset link.`),await D.type(t,`Str0ng`),await T(P).toHaveBeenCalledTimes(6),await T(P).toHaveBeenLastCalledWith(`Str0ng`,`Str0ng`),await D.tab(),await T(F).toHaveBeenCalledTimes(1),await T(F).toHaveBeenLastCalledWith(!0)}},L={render:()=>{let e=u({defaultValues:{currentPassword:``,newPassword:``}});return(0,w.jsx)(g.Root,{methods:e,"aria-label":`Change password`,className:`w-[40rem]`,children:(0,w.jsxs)(s.Group,{children:[(0,w.jsx)(S,{name:`currentPassword`,label:`Current password`,orientation:`horizontal`,inputProps:{autoComplete:`current-password`,className:`w-72`}}),(0,w.jsx)(S,{name:`newPassword`,label:`New password`,description:`At least 10 characters.`,orientation:`horizontal`,inputProps:{autoComplete:`new-password`,className:`w-72`},"data-testid":`new-password`})]})})},play:async({canvasElement:e})=>{let t=k(e),n=e=>e.getBoundingClientRect(),r=t.getByTestId(`new-password`),i=t.getByLabelText(`New password`),a=r.querySelector(`[data-slot=input-password]`),o=r.querySelector(`[data-slot=field-description]`);await T(r).toHaveAttribute(`data-orientation`,`horizontal`),await T(a).toHaveClass(`w-72`),await T(n(t.getByText(`New password`)).right).toBeLessThanOrEqual(n(a).left),await T(n(o).top).toBeGreaterThanOrEqual(n(a).bottom),await T(i).toHaveAccessibleDescription(`At least 10 characters.`)}},R={render:()=>{let e=u({defaultValues:{email:`ops@acme-insurance.com`,password:`Str0ngPassw0rd`}});return(0,w.jsxs)(g.Root,{methods:e,onSubmit:j,"aria-label":`Sign in`,className:`flex flex-col items-start gap-7`,children:[(0,w.jsx)(S,{name:`password`,label:`Password`,disabled:!0,inputProps:{autoComplete:`current-password`}}),(0,w.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{j.mockClear();let t=k(e),n=t.getByLabelText(`Password`);await T(n).toBeDisabled(),await T(n.closest(`[data-slot=field]`)).toHaveAttribute(`data-disabled`),await T(t.getByRole(`button`,{name:`Show password`,hidden:!0})).not.toBeVisible(),await D.click(t.getByRole(`button`,{name:`Save`})),await O(()=>T(j).toHaveBeenCalledWith({email:`ops@acme-insurance.com`,password:`Str0ngPassw0rd`},T.anything()))}},z={render:()=>{let e=u({defaultValues:{email:`ops@acme-insurance.com`,password:``}});return(0,w.jsxs)(g.Root,{methods:e,onSubmit:j,"aria-label":`Sign in`,className:`flex flex-col items-start gap-7`,children:[(0,w.jsxs)(s.Group,{children:[(0,w.jsx)(b,{name:`email`,label:`Email`,inputProps:{type:`email`}}),(0,w.jsx)(S,{name:`password`,label:`Password`,required:!0,rules:{required:`Enter your password.`},inputProps:{autoComplete:`current-password`}})]}),(0,w.jsx)(a,{type:`submit`,children:`Sign in`})]})},play:async({canvasElement:e})=>{j.mockClear();let t=k(e);await D.click(t.getByRole(`button`,{name:`Sign in`})),await O(()=>T(t.getByLabelText(/Password/)).toHaveFocus()),await T(j).not.toHaveBeenCalled()}},B=[`Default`,`NewPassword`,`InputPropsChaining`,`Horizontal`,`Disabled`,`FocusOnError`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  // The controls drive the field; the form owns the path, the control and the rules.
  render: args => {
    const methods = useForm<SignInValues>({
      defaultValues: {
        email: '',
        password: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Sign in" className="flex flex-col items-start gap-7">
                <FormPassword rules={{
        required: 'Enter your password.'
      }} {...args} name="password" />
                <Button type="submit">Sign in</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/Password/);
    const submit = canvas.getByRole('button', {
      name: 'Sign in'
    });
    await expect(input).toHaveAttribute('type', 'password');
    await expect(input).toHaveAttribute('name', 'password');
    await expect(input).toHaveAttribute('autocomplete', 'current-password');
    await expect(input).toBeRequired();
    await userEvent.click(submit);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter your password.');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(input, 'Str0ngPassw0rd');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show password'
    }));
    await expect(input).toHaveAttribute('type', 'text');
    await expect(input).toHaveValue('Str0ngPassw0rd');
    await userEvent.click(submit);
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      email: '',
      password: 'Str0ngPassw0rd'
    }, expect.anything()));
  }
}`,...M.parameters?.docs?.source},description:{story:`A sign-in password: required, with \`autoComplete="current-password"\` so
password managers fill it. The toggle reveals what was typed and the form
receives the text either way.

@summary Required sign-in password with the show/hide toggle`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<NewPasswordValues>({
      defaultValues: {
        newPassword: ''
      },
      criteriaMode: 'all'
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Change password" className="flex flex-col items-start gap-7">
                <FormPassword name="newPassword" label="New password" description="At least 10 characters, with an uppercase letter and a number." required inputProps={{
        autoComplete: 'new-password'
      }} rules={{
        required: 'Enter a password.',
        validate: {
          uppercase: value => /[A-Z]/.test(value) || 'At least one uppercase letter.',
          number: value => /[0-9]/.test(value) || 'At least one number.',
          length: value => value.length >= 10 || 'At least 10 characters.'
        }
      }} />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/New password/);
    await userEvent.type(input, 'short');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    const alert = await canvas.findByRole('alert');
    await expect(within(alert).getAllByRole('listitem')).toHaveLength(3);
    await expect(input).toHaveAccessibleDescription(expect.stringContaining('At least 10 characters, with an uppercase letter and a number.'));
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.clear(input);
    await userEvent.type(input, 'Str0ngPassw0rd');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      newPassword: 'Str0ngPassw0rd'
    }, expect.anything()));
  }
}`,...N.parameters?.docs?.source},description:{story:`A new password with strength rules: each rule is a \`rules.validate\` entry,
and a form set to \`criteriaMode: 'all'\` lists every rule that failed under
the field, after the description.

@summary New password listing every failed strength rule`,...N.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<SignInValues>({
      defaultValues: {
        email: '',
        password: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Sign in" className="flex flex-col gap-2">
                <FormPassword name="password" label="Password" description="The one you set when you activated your account." inputProps={{
        placeholder: 'Enter your password',
        autoComplete: 'current-password',
        size: 'lg',
        'aria-describedby': 'password-reset',
        onChange: event => onOwnChange(methods.getValues('password'), event.target.value),
        onBlur: () => onOwnBlur(methods.getFieldState('password').isTouched)
      }} />
                <p id="password-reset">Forgot it? Ask your admin for a reset link.</p>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onOwnChange.mockClear();
    onOwnBlur.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Password');
    await expect(input).toHaveAttribute('placeholder', 'Enter your password');
    await expect(input).toHaveAttribute('autocomplete', 'current-password');
    await expect(input).toHaveAttribute('data-size', 'lg');
    await expect(input).toHaveAccessibleDescription('The one you set when you activated your account. Forgot it? Ask your admin for a reset link.');
    await userEvent.type(input, 'Str0ng');
    await expect(onOwnChange).toHaveBeenCalledTimes(6);
    await expect(onOwnChange).toHaveBeenLastCalledWith('Str0ng', 'Str0ng');
    await userEvent.tab();
    await expect(onOwnBlur).toHaveBeenCalledTimes(1);
    await expect(onOwnBlur).toHaveBeenLastCalledWith(true);
  }
}`,...I.parameters?.docs?.source},description:{story:"`inputProps` carries the input's own attributes — `placeholder`,\n`autoComplete`, `size`… — and its handlers. A consumer `onChange` runs after\nreact-hook-form's and reads the typed text, both from the event and from\n`getValues`; a consumer `onBlur` runs once the field is already touched. An\n`aria-describedby` of its own joins the field's description instead of\nreplacing it.\n\n@summary Input attributes, chained handlers and an extra aria-describedby",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<ChangePasswordValues>({
      defaultValues: {
        currentPassword: '',
        newPassword: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Change password" className="w-[40rem]">
                <Field.Group>
                    <FormPassword name="currentPassword" label="Current password" orientation="horizontal" inputProps={{
          autoComplete: 'current-password',
          className: 'w-72'
        }} />
                    <FormPassword name="newPassword" label="New password" description="At least 10 characters." orientation="horizontal" inputProps={{
          autoComplete: 'new-password',
          className: 'w-72'
        }} data-testid="new-password" />
                </Field.Group>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rect = (element: Element) => element.getBoundingClientRect();
    const field = canvas.getByTestId('new-password');
    const input = canvas.getByLabelText('New password');
    const frame = field.querySelector('[data-slot=input-password]') as HTMLElement;
    const description = field.querySelector('[data-slot=field-description]') as HTMLElement;
    await expect(field).toHaveAttribute('data-orientation', 'horizontal');
    await expect(frame).toHaveClass('w-72');
    await expect(rect(canvas.getByText('New password')).right).toBeLessThanOrEqual(rect(frame).left);
    await expect(rect(description).top).toBeGreaterThanOrEqual(rect(frame).bottom);
    await expect(input).toHaveAccessibleDescription('At least 10 characters.');
  }
}`,...L.parameters?.docs?.source},description:{story:`Root props pass through: \`orientation="horizontal"\` lays the label and the
password frame in a row, with the description under the control.

@summary Horizontal orientation through the root props`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<SignInValues>({
      defaultValues: {
        email: 'ops@acme-insurance.com',
        password: 'Str0ngPassw0rd'
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Sign in" className="flex flex-col items-start gap-7">
                <FormPassword name="password" label="Password" disabled inputProps={{
        autoComplete: 'current-password'
      }} />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Password');
    await expect(input).toBeDisabled();
    await expect(input.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
    await expect(canvas.getByRole('button', {
      name: 'Show password',
      hidden: true
    })).not.toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      email: 'ops@acme-insurance.com',
      password: 'Str0ngPassw0rd'
    }, expect.anything()));
  }
}`,...R.parameters?.docs?.source},description:{story:"`disabled` disables the input and hides the toggle, and the value still\nreaches `onSubmit` — unlike react-hook-form's own `disabled` option, which\ndrops it.\n\n@summary Disabled password field, toggle hidden, value still submitted",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<SignInValues>({
      defaultValues: {
        email: 'ops@acme-insurance.com',
        password: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Sign in" className="flex flex-col items-start gap-7">
                <Field.Group>
                    <FormText name="email" label="Email" inputProps={{
          type: 'email'
        }} />
                    <FormPassword name="password" label="Password" required rules={{
          required: 'Enter your password.'
        }} inputProps={{
          autoComplete: 'current-password'
        }} />
                </Field.Group>
                <Button type="submit">Sign in</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Sign in'
    }));
    await waitFor(() => expect(canvas.getByLabelText(/Password/)).toHaveFocus());
    await expect(onSubmit).not.toHaveBeenCalled();
  }
}`,...z.parameters?.docs?.source},description:{story:"react-hook-form's `ref` reaches the `<input>` inside the password frame, so\n`setFocus` and the focus on the first invalid field after submit both work.\n\n@summary Focus on the first invalid field after submit",...z.parameters?.docs?.description}}}})))()}V();export{M as Default,R as Disabled,z as FocusOnError,L as Horizontal,I as InputPropsChaining,N as NewPassword,B as __namedExportsOrder,A as default};