import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n}from"./button-CO9HKuG6.js";import{t as r}from"./button-C6wVmNZF.js";import{n as i,t as a}from"./field-Dwb5LEct.js";import{i as o,n as s,o as c,r as l,s as u,t as d}from"./form-0aOyYl5H.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{c(),l(),r(),i(),s(),f=t(),{expect:p,fn:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/FormText`,component:o,tags:[`autodocs`],argTypes:{name:{control:!1},orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},label:{control:`text`},description:{control:`text`},tooltip:{control:`text`},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`}},args:{name:`agencyName`,label:`Agency name`,orientation:`vertical`,required:!0,optional:!1,disabled:!1,readOnly:!1},parameters:{docs:{description:{component:"FormText is a complete text field bound to one react-hook-form value: label,\n`Input`, helper text and validation error in the standard order, wired\nthrough `useController`. It renders inside a `Form.Root` and needs only a\n`name`; `required`, `invalid` and the error reach the label, the input's\n`aria-*` attributes and the message with no ids written by hand.\n\nIt covers the common case. For another layout — an input with addons, a\ndifferent control, a message rendered elsewhere — compose `useController`\nwith the `FieldText`, `Label`, `Input` and `Field.*` primitives directly."}}}},y=m(),b=e=>{let t=u({defaultValues:{agencyName:``}});return(0,f.jsxs)(d.Root,{methods:t,onSubmit:y,"aria-label":`Agency`,className:`flex flex-col items-start gap-7`,children:[(0,f.jsx)(o,{rules:{required:`Enter the agency name.`},inputProps:{placeholder:`Acme Insurance`},...e,name:`agencyName`}),(0,f.jsx)(n,{type:`submit`,children:`Save`})]})},x={parameters:{docs:{source:{code:`const methods = useForm<AgencyValues>({ defaultValues: { agencyName: '' } });

<Form.Root
  methods={methods}
  onSubmit={saveAgency}
  aria-label="Agency"
  className="flex flex-col items-start gap-7">
  <FormText
    name="agencyName"
    label="Agency name"
    required
    rules={{ required: 'Enter the agency name.' }}
    inputProps={{ placeholder: 'Acme Insurance' }}
  />
  <Button type="submit">Save</Button>
</Form.Root>`}}},render:e=>(0,f.jsx)(b,{...e}),play:async({canvasElement:e})=>{y.mockClear();let t=_(e),n=t.getByRole(`textbox`,{name:`Agency name`});await p(n).toBeRequired(),await p(n).toHaveAttribute(`name`,`agencyName`),await p(t.queryByRole(`alert`)).toBeNull(),await h.click(t.getByRole(`button`,{name:`Save`})),await p(await t.findByRole(`alert`)).toHaveTextContent(`Enter the agency name.`),await p(n).toHaveAttribute(`aria-invalid`,`true`),await p(y).not.toHaveBeenCalled(),await h.type(n,`Acme Insurance`),await g(()=>p(t.queryByRole(`alert`)).toBeNull()),await p(n).not.toHaveAttribute(`aria-invalid`),await h.click(t.getByRole(`button`,{name:`Save`})),await g(()=>p(y).toHaveBeenCalledWith({agencyName:`Acme Insurance`},p.anything()))}},S=()=>{let e=u({defaultValues:{taxId:``}});return(0,f.jsx)(d.Root,{methods:e,"aria-label":`Tax details`,children:(0,f.jsx)(o,{name:`taxId`,label:`Tax ID`,tooltip:`The EIN the IRS issued to the agency.`,description:`Nine digits, with or without the dash.`,inputProps:{inputMode:`numeric`,autoComplete:`off`}})})},C={parameters:{docs:{source:{code:`const methods = useForm<TaxValues>({ defaultValues: { taxId: '' } });

<Form.Root methods={methods} aria-label="Tax details">
  <FormText
    name="taxId"
    label="Tax ID"
    tooltip="The EIN the IRS issued to the agency."
    description="Nine digits, with or without the dash."
    inputProps={{ inputMode: 'numeric', autoComplete: 'off' }}
  />
</Form.Root>`}}},render:()=>(0,f.jsx)(S,{}),play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`textbox`,{name:`Tax ID`}),r=t.getByRole(`button`,{name:`More information`});await p(n).toHaveAccessibleDescription(`Nine digits, with or without the dash.`),await p(r.closest(`label`)).toBeNull()}},w=()=>{let e=u({defaultValues:{phone:``}});return(0,f.jsx)(d.Root,{methods:e,"aria-label":`Contact`,children:(0,f.jsx)(o,{name:`phone`,label:`Phone number`,optional:!0,inputProps:{type:`tel`}})})},T={parameters:{docs:{source:{code:`const methods = useForm<PhoneValues>({ defaultValues: { phone: '' } });

<Form.Root methods={methods} aria-label="Contact">
  <FormText name="phone" label="Phone number" optional inputProps={{ type: 'tel' }} />
</Form.Root>`}}},render:()=>(0,f.jsx)(w,{}),play:async({canvasElement:e})=>{let t=_(e);await p(t.getByRole(`textbox`,{name:`Phone number`})).not.toBeRequired(),await p(t.getByText(`Phone number`)).toHaveClass(/after:content-/)}},E=()=>{let e=u({defaultValues:{agency:{npn:``}}});return(0,f.jsxs)(d.Root,{methods:e,onSubmit:y,"aria-label":`License`,className:`flex flex-col items-start gap-7`,children:[(0,f.jsx)(o,{name:`agency.npn`,label:`NPN`,rules:{required:`Enter your NPN.`,pattern:{value:/^\d{6,10}$/,message:`An NPN is 6 to 10 digits.`}},inputProps:{inputMode:`numeric`}}),(0,f.jsx)(n,{type:`submit`,children:`Save`})]})},D={parameters:{docs:{source:{code:`const methods = useForm<LicenseValues>({ defaultValues: { agency: { npn: '' } } });

<Form.Root
  methods={methods}
  onSubmit={saveLicense}
  aria-label="License"
  className="flex flex-col items-start gap-7">
  <FormText<LicenseValues>
    name="agency.npn"
    label="NPN"
    rules={{
      required: 'Enter your NPN.',
      pattern: { value: /^\\d{6,10}$/, message: 'An NPN is 6 to 10 digits.' }
    }}
  />
  <Button type="submit">Save</Button>
</Form.Root>`}}},render:()=>(0,f.jsx)(E,{}),play:async({canvasElement:e})=>{y.mockClear();let t=_(e),n=t.getByRole(`textbox`,{name:`NPN`}),r=t.getByRole(`button`,{name:`Save`});await p(n).toHaveAttribute(`name`,`agency.npn`),await p(n).not.toBeRequired(),await p(t.queryByText(`*`)).toBeNull(),await h.click(r),await p(await t.findByRole(`alert`)).toHaveTextContent(`Enter your NPN.`),await h.type(n,`abc`),await h.click(r),await p(await t.findByRole(`alert`)).toHaveTextContent(`An NPN is 6 to 10 digits.`),await p(y).not.toHaveBeenCalled(),await h.clear(n),await h.type(n,`1234567`),await h.click(r),await g(()=>p(y).toHaveBeenCalledWith({agency:{npn:`1234567`}},p.anything())),await p(t.queryByRole(`alert`)).toBeNull()}},O=()=>{let e=u({defaultValues:{password:``},criteriaMode:`all`});return(0,f.jsxs)(d.Root,{methods:e,onSubmit:y,"aria-label":`Account security`,className:`flex flex-col items-start gap-7`,children:[(0,f.jsx)(o,{name:`password`,label:`Password`,required:!0,inputProps:{type:`password`},rules:{required:`Enter a password.`,validate:{uppercase:e=>/[A-Z]/.test(e)||`At least one uppercase letter.`,number:e=>/[0-9]/.test(e)||`At least one number.`,length:e=>e.length>=10||`At least 10 characters.`}}}),(0,f.jsx)(n,{type:`submit`,children:`Save`})]})},k={parameters:{docs:{source:{code:`// criteriaMode: 'all' collects every rule that failed, not just the first.
const methods = useForm<PasswordValues>({
  defaultValues: { password: '' },
  criteriaMode: 'all'
});

<Form.Root
  methods={methods}
  onSubmit={save}
  aria-label="Account security"
  className="flex flex-col items-start gap-7">
  <FormText
    name="password"
    label="Password"
    required
    inputProps={{ type: 'password' }}
    rules={{
      required: 'Enter a password.',
      validate: {
        uppercase: value => /[A-Z]/.test(value) || 'At least one uppercase letter.',
        number: value => /[0-9]/.test(value) || 'At least one number.',
        length: value => value.length >= 10 || 'At least 10 characters.'
      }
    }}
  />
  <Button type="submit">Save</Button>
</Form.Root>`}}},render:()=>(0,f.jsx)(O,{}),play:async({canvasElement:e})=>{y.mockClear();let t=_(e),n=t.getByLabelText(/Password/);await h.type(n,`short`),await h.click(t.getByRole(`button`,{name:`Save`}));let r=await t.findByRole(`alert`);await p(_(r).getAllByRole(`listitem`)).toHaveLength(3),await p(r).toHaveTextContent(`At least one uppercase letter.`),await p(r).toHaveTextContent(`At least one number.`),await p(r).toHaveTextContent(`At least 10 characters.`),await p(n).toHaveAccessibleDescription(p.stringContaining(`At least one number.`)),await p(y).not.toHaveBeenCalled(),await h.clear(n),await h.type(n,`Str0ngPassw0rd`),await h.click(t.getByRole(`button`,{name:`Save`})),await g(()=>p(y).toHaveBeenCalled()),await p(t.queryByRole(`alert`)).toBeNull()}},A=m(),j=()=>{let e=u({defaultValues:{phone:``}});return(0,f.jsx)(d.Root,{methods:e,"aria-label":`Mobile`,children:(0,f.jsx)(o,{name:`phone`,label:`Mobile`,inputProps:{type:`tel`,placeholder:`5550000000`,maxLength:10,size:`lg`,onChange:t=>A(e.getValues(`phone`),t.target.value)}})})},M={parameters:{docs:{source:{code:`const methods = useForm<PhoneValues>({ defaultValues: { phone: '' } });

// The consumer's own onChange runs after react-hook-form's, already wired.
<Form.Root methods={methods} aria-label="Mobile">
  <FormText
    name="phone"
    label="Mobile"
    inputProps={{
      type: 'tel',
      maxLength: 1,
      onChange: event => track(event.target.value)
    }}
  />
</Form.Root>`}}},render:()=>(0,f.jsx)(j,{}),play:async({canvasElement:e})=>{A.mockClear();let t=_(e).getByRole(`textbox`,{name:`Mobile`});await p(t).toHaveAttribute(`type`,`tel`),await p(t).toHaveAttribute(`placeholder`,`5550000000`),await p(t).toHaveAttribute(`maxlength`,`10`),await p(t).toHaveAttribute(`data-size`,`lg`),await h.type(t,`5`),await p(t).toHaveValue(`5`),await p(A).toHaveBeenCalledTimes(1),await p(A).toHaveBeenLastCalledWith(`5`,`5`)}},N=()=>{let e=u({defaultValues:{fullName:`Rafa Moro`,title:``}});return(0,f.jsx)(d.Root,{methods:e,"aria-label":`Profile`,className:`w-[40rem]`,children:(0,f.jsxs)(a.Group,{children:[(0,f.jsx)(o,{name:`fullName`,label:`Full name`,orientation:`horizontal`,inputProps:{className:`w-72`},"data-testid":`short`}),(0,f.jsx)(o,{name:`title`,label:`Title`,description:`Shown on your public profile.`,orientation:`horizontal`,inputProps:{className:`w-72`,placeholder:`Software engineer`},"data-testid":`long`})]})})},P={parameters:{docs:{source:{code:`const methods = useForm<ProfileValues>({
  defaultValues: { fullName: 'Rafa Moro', title: '' }
});

<Form.Root methods={methods} aria-label="Profile" className="w-[40rem]">
  <Field.Group>
    <FormText
      name="fullName"
      label="Full name"
      orientation="horizontal"
      inputProps={{ className: 'w-72' }}
    />
    <FormText
      name="title"
      label="Title"
      description="Shown on your public profile."
      orientation="horizontal"
      inputProps={{ className: 'w-72', placeholder: 'Software engineer' }}
    />
  </Field.Group>
</Form.Root>`}}},render:()=>(0,f.jsx)(N,{}),play:async({canvasElement:e})=>{let t=_(e),n=e=>e.getBoundingClientRect(),r=t.getByTestId(`short`),i=t.getByTestId(`long`),a=t.getByRole(`textbox`,{name:`Full name`}),o=t.getByRole(`textbox`,{name:`Title`});await p(r).toHaveAttribute(`data-orientation`,`horizontal`),await p(a).toHaveClass(`w-72`),await p(a).toHaveValue(`Rafa Moro`),await p(n(a).left).toBe(n(o).left),await p(Math.round(n(a).right)).toBe(Math.round(n(r).right)),await p(n(t.getByText(`Full name`)).right).toBeLessThanOrEqual(n(a).left),await p(n(i.querySelector(`[data-slot=field-description]`)).top).toBeGreaterThanOrEqual(n(o).bottom),await p(o).toHaveAccessibleDescription(`Shown on your public profile.`)}},F=()=>{let e=u({defaultValues:{agencyId:`AG-48213`,email:`ops@acme-insurance.com`}});return(0,f.jsxs)(d.Root,{methods:e,onSubmit:y,"aria-label":`Account`,className:`flex flex-col items-start gap-7`,children:[(0,f.jsxs)(a.Group,{children:[(0,f.jsx)(o,{name:`agencyId`,label:`Agency ID`,disabled:!0}),(0,f.jsx)(o,{name:`email`,label:`Email`,inputProps:{type:`email`}})]}),(0,f.jsx)(n,{type:`submit`,children:`Save`})]})},I={parameters:{docs:{source:{code:`const methods = useForm<AccountValues>({
  defaultValues: { agencyId: 'AG-48213', email: 'ops@acme-insurance.com' }
});

<Form.Root
  methods={methods}
  onSubmit={saveAccount}
  aria-label="Account"
  className="flex flex-col items-start gap-7">
  <Field.Group>
    <FormText name="agencyId" label="Agency ID" disabled />
    <FormText name="email" label="Email" inputProps={{ type: 'email' }} />
  </Field.Group>
  <Button type="submit">Save</Button>
</Form.Root>`}}},render:()=>(0,f.jsx)(F,{}),play:async({canvasElement:e})=>{y.mockClear();let t=_(e),n=t.getByRole(`textbox`,{name:`Agency ID`});await p(n).toBeDisabled(),await p(n.closest(`[data-slot=field]`)).toHaveAttribute(`data-disabled`),await p(t.getByRole(`textbox`,{name:`Email`})).toBeEnabled(),await h.click(t.getByRole(`button`,{name:`Save`})),await g(()=>p(y).toHaveBeenCalledWith({agencyId:`AG-48213`,email:`ops@acme-insurance.com`},p.anything()))}},L=()=>{let e=u({defaultValues:{agencyName:``,phone:``}});return(0,f.jsxs)(d.Root,{methods:e,"aria-label":`Agency contact`,className:`flex flex-col items-start gap-7`,children:[(0,f.jsxs)(a.Group,{children:[(0,f.jsx)(o,{name:`agencyName`,label:`Agency name`}),(0,f.jsx)(o,{name:`phone`,label:`Phone number`,inputProps:{type:`tel`}})]}),(0,f.jsx)(n,{type:`button`,variant:`secondary`,onClick:()=>e.setFocus(`phone`),children:`Focus phone`})]})},R={parameters:{docs:{source:{code:`const methods = useForm<AgencyValues & PhoneValues>({
  defaultValues: { agencyName: '', phone: '' }
});

<Form.Root methods={methods} aria-label="Agency contact" className="flex flex-col items-start gap-7">
  <Field.Group>
    <FormText name="agencyName" label="Agency name" />
    <FormText name="phone" label="Phone number" inputProps={{ type: 'tel' }} />
  </Field.Group>
  <Button type="button" variant="secondary" onClick={() => methods.setFocus('phone')}>
    Focus phone
  </Button>
</Form.Root>`}}},render:()=>(0,f.jsx)(L,{}),play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`textbox`,{name:`Phone number`});await p(n).not.toHaveFocus(),await h.click(t.getByRole(`button`,{name:`Focus phone`})),await p(n).toHaveFocus()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const methods = useForm<AgencyValues>({ defaultValues: { agencyName: '' } });

<Form.Root
  methods={methods}
  onSubmit={saveAgency}
  aria-label="Agency"
  className="flex flex-col items-start gap-7">
  <FormText
    name="agencyName"
    label="Agency name"
    required
    rules={{ required: 'Enter the agency name.' }}
    inputProps={{ placeholder: 'Acme Insurance' }}
  />
  <Button type="submit">Save</Button>
</Form.Root>\`
      }
    }
  },
  render: args => <AgencyNameForm {...args} />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Agency name'
    });
    await expect(input).toBeRequired();
    await expect(input).toHaveAttribute('name', 'agencyName');
    await expect(canvas.queryByRole('alert')).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter the agency name.');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.type(input, 'Acme Insurance');
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
    await expect(input).not.toHaveAttribute('aria-invalid');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      agencyName: 'Acme Insurance'
    }, expect.anything()));
  }
}`,...x.parameters?.docs?.source},description:{story:"The field consumers write: a `name`, a `label` and the validation rule.\nSubmitting empty renders the error and marks the input invalid; typing\nclears both and the value reaches `onSubmit`.\n\n@summary Required text field validating on submit",...x.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const methods = useForm<TaxValues>({ defaultValues: { taxId: '' } });

<Form.Root methods={methods} aria-label="Tax details">
  <FormText
    name="taxId"
    label="Tax ID"
    tooltip="The EIN the IRS issued to the agency."
    description="Nine digits, with or without the dash."
    inputProps={{ inputMode: 'numeric', autoComplete: 'off' }}
  />
</Form.Root>\`
      }
    }
  },
  render: () => <TaxIdForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Tax ID'
    });
    const trigger = canvas.getByRole('button', {
      name: 'More information'
    });
    await expect(input).toHaveAccessibleDescription('Nine digits, with or without the dash.');
    await expect(trigger.closest('label')).toBeNull();
  }
}`,...C.parameters?.docs?.source},description:{story:"`description` is helper text under the input, announced through\n`aria-describedby`. `tooltip` is an info button beside the label for details\nworth a click; it is a sibling of the `<label>`, so the field's accessible\nname stays the label text.\n\n@summary Helper text under the input and an info tooltip beside the label",...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const methods = useForm<PhoneValues>({ defaultValues: { phone: '' } });

<Form.Root methods={methods} aria-label="Contact">
  <FormText name="phone" label="Phone number" optional inputProps={{ type: 'tel' }} />
</Form.Root>\`
      }
    }
  },
  render: () => <PhoneForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(input).not.toBeRequired();
    await expect(canvas.getByText('Phone number')).toHaveClass(/after:content-/);
  }
}`,...T.parameters?.docs?.source},description:{story:`The forms mark optional fields rather than required ones: \`optional\`
appends a muted suffix to the label and leaves the input without the
\`required\` attribute.

@summary Optional field with the " (optional)" label suffix`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const methods = useForm<LicenseValues>({ defaultValues: { agency: { npn: '' } } });

<Form.Root
  methods={methods}
  onSubmit={saveLicense}
  aria-label="License"
  className="flex flex-col items-start gap-7">
  <FormText<LicenseValues>
    name="agency.npn"
    label="NPN"
    rules={{
      required: 'Enter your NPN.',
      pattern: { value: /^\\\\d{6,10}$/, message: 'An NPN is 6 to 10 digits.' }
    }}
  />
  <Button type="submit">Save</Button>
</Form.Root>\`
      }
    }
  },
  render: () => <NpnForm />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'NPN'
    });
    const save = canvas.getByRole('button', {
      name: 'Save'
    });
    await expect(input).toHaveAttribute('name', 'agency.npn');
    await expect(input).not.toBeRequired();
    await expect(canvas.queryByText('*')).toBeNull();
    await userEvent.click(save);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter your NPN.');
    await userEvent.type(input, 'abc');
    await userEvent.click(save);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('An NPN is 6 to 10 digits.');
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.clear(input);
    await userEvent.type(input, '1234567');
    await userEvent.click(save);
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      agency: {
        npn: '1234567'
      }
    }, expect.anything()));
    await expect(canvas.queryByRole('alert')).toBeNull();
  }
}`,...D.parameters?.docs?.source},description:{story:"`rules` are react-hook-form's, and `name` accepts nested paths typed against\nthe form's values through the generic. `rules.required` validates but does\nnot mark the field required: that stays an explicit `required` prop.\n\n@summary Nested path with validation rules, typed through the generic",...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// criteriaMode: 'all' collects every rule that failed, not just the first.
const methods = useForm<PasswordValues>({
  defaultValues: { password: '' },
  criteriaMode: 'all'
});

<Form.Root
  methods={methods}
  onSubmit={save}
  aria-label="Account security"
  className="flex flex-col items-start gap-7">
  <FormText
    name="password"
    label="Password"
    required
    inputProps={{ type: 'password' }}
    rules={{
      required: 'Enter a password.',
      validate: {
        uppercase: value => /[A-Z]/.test(value) || 'At least one uppercase letter.',
        number: value => /[0-9]/.test(value) || 'At least one number.',
        length: value => value.length >= 10 || 'At least 10 characters.'
      }
    }}
  />
  <Button type="submit">Save</Button>
</Form.Root>\`
      }
    }
  },
  render: () => <PasswordRulesForm />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/Password/);
    await userEvent.type(input, 'short');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));

    // Three rules failed, so three messages, not just the first one.
    const alert = await canvas.findByRole('alert');
    await expect(within(alert).getAllByRole('listitem')).toHaveLength(3);
    await expect(alert).toHaveTextContent('At least one uppercase letter.');
    await expect(alert).toHaveTextContent('At least one number.');
    await expect(alert).toHaveTextContent('At least 10 characters.');
    await expect(input).toHaveAccessibleDescription(expect.stringContaining('At least one number.'));
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.clear(input);
    await userEvent.type(input, 'Str0ngPassw0rd');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
    await expect(canvas.queryByRole('alert')).toBeNull();
  }
}`,...k.parameters?.docs?.source},description:{story:`A form set to react-hook-form's \`criteriaMode: 'all'\` collects every rule
that failed instead of stopping at the first, and the field lists them all.
With the default \`'firstError'\` a single message is rendered, as in the other
stories.

@summary Every failed rule listed under criteriaMode 'all'`,...k.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const methods = useForm<PhoneValues>({ defaultValues: { phone: '' } });

// The consumer's own onChange runs after react-hook-form's, already wired.
<Form.Root methods={methods} aria-label="Mobile">
  <FormText
    name="phone"
    label="Mobile"
    inputProps={{
      type: 'tel',
      maxLength: 1,
      onChange: event => track(event.target.value)
    }}
  />
</Form.Root>\`
      }
    }
  },
  render: () => <MobileForm />,
  play: async ({
    canvasElement
  }) => {
    onOwnChange.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Mobile'
    });
    await expect(input).toHaveAttribute('type', 'tel');
    await expect(input).toHaveAttribute('placeholder', '5550000000');
    await expect(input).toHaveAttribute('maxlength', '10');
    await expect(input).toHaveAttribute('data-size', 'lg');
    await userEvent.type(input, '5');
    await expect(input).toHaveValue('5');
    await expect(onOwnChange).toHaveBeenCalledTimes(1);
    await expect(onOwnChange).toHaveBeenLastCalledWith('5', '5');
  }
}`,...M.parameters?.docs?.source},description:{story:"`inputProps` carries the input's own attributes — `type`, `placeholder`,\n`maxLength`, `size`… — and its handlers. A consumer `onChange` runs after\nreact-hook-form's: by the time it fires, `getValues` already returns the new\nvalue.\n\n@summary Input attributes and a consumer onChange chained after the form's",...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const methods = useForm<ProfileValues>({
  defaultValues: { fullName: 'Rafa Moro', title: '' }
});

<Form.Root methods={methods} aria-label="Profile" className="w-[40rem]">
  <Field.Group>
    <FormText
      name="fullName"
      label="Full name"
      orientation="horizontal"
      inputProps={{ className: 'w-72' }}
    />
    <FormText
      name="title"
      label="Title"
      description="Shown on your public profile."
      orientation="horizontal"
      inputProps={{ className: 'w-72', placeholder: 'Software engineer' }}
    />
  </Field.Group>
</Form.Root>\`
      }
    }
  },
  render: () => <ProfileForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rect = (element: Element) => element.getBoundingClientRect();
    const short = canvas.getByTestId('short');
    const long = canvas.getByTestId('long');
    const shortInput = canvas.getByRole('textbox', {
      name: 'Full name'
    });
    const longInput = canvas.getByRole('textbox', {
      name: 'Title'
    });
    await expect(short).toHaveAttribute('data-orientation', 'horizontal');
    await expect(shortInput).toHaveClass('w-72');
    await expect(shortInput).toHaveValue('Rafa Moro');

    // Controls line up on the right whatever the label measures.
    await expect(rect(shortInput).left).toBe(rect(longInput).left);
    await expect(Math.round(rect(shortInput).right)).toBe(Math.round(rect(short).right));
    await expect(rect(canvas.getByText('Full name')).right).toBeLessThanOrEqual(rect(shortInput).left);

    // The description stays with its control, under it.
    const description = long.querySelector('[data-slot=field-description]') as HTMLElement;
    await expect(rect(description).top).toBeGreaterThanOrEqual(rect(longInput).bottom);
    await expect(longInput).toHaveAccessibleDescription('Shown on your public profile.');
  }
}`,...P.parameters?.docs?.source},description:{story:'Root props pass through: `orientation="horizontal"` lays the label and the\ncontrol in a row, and `className` on the root or in `inputProps` sizes them.\nThe `Input` is full-width by default, so a settings row gives it a width.\n`responsive` stacks the field below 28rem and rows it from there.\n\n@summary Horizontal orientation and class names through the root props',...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const methods = useForm<AccountValues>({
  defaultValues: { agencyId: 'AG-48213', email: 'ops@acme-insurance.com' }
});

<Form.Root
  methods={methods}
  onSubmit={saveAccount}
  aria-label="Account"
  className="flex flex-col items-start gap-7">
  <Field.Group>
    <FormText name="agencyId" label="Agency ID" disabled />
    <FormText name="email" label="Email" inputProps={{ type: 'email' }} />
  </Field.Group>
  <Button type="submit">Save</Button>
</Form.Root>\`
      }
    }
  },
  render: () => <AccountForm />,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const agencyId = canvas.getByRole('textbox', {
      name: 'Agency ID'
    });
    await expect(agencyId).toBeDisabled();
    await expect(agencyId.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
    await expect(canvas.getByRole('textbox', {
      name: 'Email'
    })).toBeEnabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      agencyId: 'AG-48213',
      email: 'ops@acme-insurance.com'
    }, expect.anything()));
  }
}`,...I.parameters?.docs?.source},description:{story:"`disabled` disables the input and marks the field, and the value still\nreaches `onSubmit` — unlike react-hook-form's own `disabled` option, which\ndrops it. Use `readOnly` for a value the user can copy but not edit.\n\n@summary Disabled field whose value is still submitted",...I.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const methods = useForm<AgencyValues & PhoneValues>({
  defaultValues: { agencyName: '', phone: '' }
});

<Form.Root methods={methods} aria-label="Agency contact" className="flex flex-col items-start gap-7">
  <Field.Group>
    <FormText name="agencyName" label="Agency name" />
    <FormText name="phone" label="Phone number" inputProps={{ type: 'tel' }} />
  </Field.Group>
  <Button type="button" variant="secondary" onClick={() => methods.setFocus('phone')}>
    Focus phone
  </Button>
</Form.Root>\`
      }
    }
  },
  render: () => <SetFocusForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const phone = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(phone).not.toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Focus phone'
    }));
    await expect(phone).toHaveFocus();
  }
}`,...R.parameters?.docs?.source},description:{story:"react-hook-form's `ref` reaches the `<input>`, so `setFocus` and the focus\non the first invalid field after submit both work with no ref written by\nhand.\n\n@summary setFocus reaches the input through the merged ref",...R.parameters?.docs?.description}}},z=[`Default`,`WithDescriptionAndTooltip`,`Optional`,`WithRules`,`AllErrors`,`InputPropsChaining`,`Horizontal`,`Disabled`,`SetFocus`]}))();export{k as AllErrors,x as Default,I as Disabled,P as Horizontal,M as InputPropsChaining,T as Optional,R as SetFocus,C as WithDescriptionAndTooltip,D as WithRules,z as __namedExportsOrder,v as default};