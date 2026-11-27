import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-CiFqObAj.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-jCRjQuAm.js";import{n as a,t as o}from"./field-DqU4j3H7.js";import{a as s,r as c}from"./index.esm-DW4O17hU.js";import{n as l,t as u}from"./form-C-Bh2S51.js";import{n as d,t as f}from"./form-text-BjnCvUFB.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{p=t(),c(),d(),r(),a(),l(),m=n(),{expect:h,fn:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/FormText`,component:f,tags:[`autodocs`],argTypes:{name:{control:!1},orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},label:{control:`text`},description:{control:`text`},tooltip:{control:`text`},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`}},args:{name:`agencyName`,label:`Agency name`,orientation:`vertical`,required:!0,optional:!1,disabled:!1,readOnly:!1},parameters:{docs:{description:{component:"FormText is a complete text field bound to one react-hook-form value: label,\n`Input`, helper text and validation error in the standard order, wired\nthrough `useController`. It renders inside a `Form.Root` and needs only a\n`name`; `required`, `invalid` and the error reach the label, the input's\n`aria-*` attributes and the message with no ids written by hand.\n\nIt covers the common case. For another layout — an input with addons, a\ndifferent control, a message rendered elsewhere — compose `useController`\nwith the `FieldText`, `Label`, `Input` and `Field.*` primitives directly."}}}},x=g(),S={render:e=>{let t=s({defaultValues:{agencyName:``}});return(0,m.jsxs)(u.Root,{methods:t,onSubmit:x,"aria-label":`Agency`,className:`flex flex-col items-start gap-7`,children:[(0,m.jsx)(f,{rules:{required:`Enter the agency name.`},inputProps:{placeholder:`Acme Insurance`},...e,name:`agencyName`}),(0,m.jsx)(i,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{x.mockClear();let t=y(e),n=t.getByRole(`textbox`,{name:`Agency name`});await h(n).toBeRequired(),await h(n).toHaveAttribute(`name`,`agencyName`),await h(t.queryByRole(`alert`)).toBeNull(),await _.click(t.getByRole(`button`,{name:`Save`})),await h(await t.findByRole(`alert`)).toHaveTextContent(`Enter the agency name.`),await h(n).toHaveAttribute(`aria-invalid`,`true`),await h(x).not.toHaveBeenCalled(),await _.type(n,`Acme Insurance`),await v(()=>h(t.queryByRole(`alert`)).toBeNull()),await h(n).not.toHaveAttribute(`aria-invalid`),await _.click(t.getByRole(`button`,{name:`Save`})),await v(()=>h(x).toHaveBeenCalledWith({agencyName:`Acme Insurance`},h.anything()))}},C={render:()=>{let e=s({defaultValues:{taxId:``}});return(0,m.jsx)(u.Root,{methods:e,"aria-label":`Tax details`,children:(0,m.jsx)(f,{name:`taxId`,label:`Tax ID`,tooltip:`The EIN the IRS issued to the agency.`,description:`Nine digits, with or without the dash.`,inputProps:{inputMode:`numeric`,autoComplete:`off`}})})},play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`textbox`,{name:`Tax ID`}),r=t.getByRole(`button`,{name:`More information`});await h(n).toHaveAccessibleDescription(`Nine digits, with or without the dash.`),await h(r.closest(`label`)).toBeNull()}},w={render:()=>{let e=s({defaultValues:{phone:``}});return(0,m.jsx)(u.Root,{methods:e,"aria-label":`Contact`,children:(0,m.jsx)(f,{name:`phone`,label:`Phone number`,optional:!0,inputProps:{type:`tel`}})})},play:async({canvasElement:e})=>{let t=y(e);await h(t.getByRole(`textbox`,{name:`Phone number (optional)`})).not.toBeRequired()}},T={render:()=>{let e=s({defaultValues:{agency:{npn:``}}});return(0,m.jsxs)(u.Root,{methods:e,onSubmit:x,"aria-label":`License`,className:`flex flex-col items-start gap-7`,children:[(0,m.jsx)(f,{name:`agency.npn`,label:`NPN`,rules:{required:`Enter your NPN.`,pattern:{value:/^\d{6,10}$/,message:`An NPN is 6 to 10 digits.`}},inputProps:{inputMode:`numeric`}}),(0,m.jsx)(i,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{x.mockClear();let t=y(e),n=t.getByRole(`textbox`,{name:`NPN`}),r=t.getByRole(`button`,{name:`Save`});await h(n).toHaveAttribute(`name`,`agency.npn`),await h(n).not.toBeRequired(),await h(t.queryByText(`*`)).toBeNull(),await _.click(r),await h(await t.findByRole(`alert`)).toHaveTextContent(`Enter your NPN.`),await _.type(n,`abc`),await _.click(r),await h(await t.findByRole(`alert`)).toHaveTextContent(`An NPN is 6 to 10 digits.`),await h(x).not.toHaveBeenCalled(),await _.clear(n),await _.type(n,`1234567`),await _.click(r),await v(()=>h(x).toHaveBeenCalledWith({agency:{npn:`1234567`}},h.anything())),await h(t.queryByRole(`alert`)).toBeNull()}},E={render:()=>{let e=s({defaultValues:{taxId:``}});return(0,m.jsxs)(u.Root,{methods:e,onSubmit:x,"aria-label":`Tax details`,className:`flex flex-col items-start gap-7`,children:[(0,m.jsx)(f,{name:`taxId`,label:`Tax ID`,description:`Nine digits, with or without the dash.`,rules:{required:`Enter the tax ID.`},inputProps:{inputMode:`numeric`,autoComplete:`off`}}),(0,m.jsx)(i,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{x.mockClear();let t=y(e),n=t.getByRole(`textbox`,{name:`Tax ID`});await _.click(t.getByRole(`button`,{name:`Save`}));let r=await t.findByRole(`alert`),i=t.getByText(`Nine digits, with or without the dash.`);await h(n.nextElementSibling).toBe(i),await h(i.nextElementSibling).toBe(r),await h(n).toHaveAccessibleDescription(`Nine digits, with or without the dash. Enter the tax ID.`),await h(x).not.toHaveBeenCalled()}},D={render:()=>{let e=s({defaultValues:{password:``},criteriaMode:`all`});return(0,m.jsxs)(u.Root,{methods:e,onSubmit:x,"aria-label":`Account security`,className:`flex flex-col items-start gap-7`,children:[(0,m.jsx)(f,{name:`password`,label:`Password`,required:!0,inputProps:{type:`password`},rules:{required:`Enter a password.`,validate:{uppercase:e=>/[A-Z]/.test(e)||`At least one uppercase letter.`,number:e=>/[0-9]/.test(e)||`At least one number.`,length:e=>e.length>=10||`At least 10 characters.`}}}),(0,m.jsx)(i,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{x.mockClear();let t=y(e),n=t.getByLabelText(/Password/);await _.type(n,`short`),await _.click(t.getByRole(`button`,{name:`Save`}));let r=await t.findByRole(`alert`);await h(y(r).getAllByRole(`listitem`)).toHaveLength(3),await h(r).toHaveTextContent(`At least one uppercase letter.`),await h(r).toHaveTextContent(`At least one number.`),await h(r).toHaveTextContent(`At least 10 characters.`),await h(n).toHaveAccessibleDescription(h.stringContaining(`At least one number.`)),await h(x).not.toHaveBeenCalled(),await _.clear(n),await _.type(n,`Str0ngPassw0rd`),await _.click(t.getByRole(`button`,{name:`Save`})),await v(()=>h(x).toHaveBeenCalled()),await h(t.queryByRole(`alert`)).toBeNull()}},O=g(),k={render:()=>{let e=s({defaultValues:{phone:``}});return(0,m.jsx)(u.Root,{methods:e,"aria-label":`Mobile`,children:(0,m.jsx)(f,{name:`phone`,label:`Mobile`,inputProps:{type:`tel`,placeholder:`5550000000`,maxLength:10,size:`lg`,onChange:t=>O(e.getValues(`phone`),t.target.value)}})})},play:async({canvasElement:e})=>{O.mockClear();let t=y(e).getByRole(`textbox`,{name:`Mobile`});await h(t).toHaveAttribute(`type`,`tel`),await h(t).toHaveAttribute(`placeholder`,`5550000000`),await h(t).toHaveAttribute(`maxlength`,`10`),await h(t).toHaveAttribute(`data-size`,`lg`),await _.type(t,`5`),await h(t).toHaveValue(`5`),await h(O).toHaveBeenCalledTimes(1),await h(O).toHaveBeenLastCalledWith(`5`,`5`)}},A={render:()=>{let e=s({defaultValues:{fullName:`Rafa Moro`,title:``}});return(0,m.jsx)(u.Root,{methods:e,"aria-label":`Profile`,className:`w-[40rem]`,children:(0,m.jsxs)(o.Group,{children:[(0,m.jsx)(f,{name:`fullName`,label:`Full name`,orientation:`horizontal`,inputProps:{className:`w-72`},"data-testid":`short`}),(0,m.jsx)(f,{name:`title`,label:`Title`,description:`Shown on your public profile.`,orientation:`horizontal`,inputProps:{className:`w-72`,placeholder:`Software engineer`},"data-testid":`long`})]})})},play:async({canvasElement:e})=>{let t=y(e),n=e=>e.getBoundingClientRect(),r=t.getByTestId(`short`),i=t.getByTestId(`long`),a=t.getByRole(`textbox`,{name:`Full name`}),o=t.getByRole(`textbox`,{name:`Title`});await h(r).toHaveAttribute(`data-orientation`,`horizontal`),await h(a).toHaveClass(`w-72`),await h(a).toHaveValue(`Rafa Moro`),await h(n(a).left).toBe(n(o).left),await h(Math.round(n(a).right)).toBe(Math.round(n(r).right)),await h(n(t.getByText(`Full name`)).right).toBeLessThanOrEqual(n(a).left);let s=i.querySelector(`[data-slot=field-description]`);await h(n(s).top).toBeGreaterThanOrEqual(n(o).bottom),await h(o).toHaveAccessibleDescription(`Shown on your public profile.`)}},j={render:()=>{let e=s({defaultValues:{agencyId:`AG-48213`,email:`ops@acme-insurance.com`}});return(0,m.jsxs)(u.Root,{methods:e,onSubmit:x,"aria-label":`Account`,className:`flex flex-col items-start gap-7`,children:[(0,m.jsxs)(o.Group,{children:[(0,m.jsx)(f,{name:`agencyId`,label:`Agency ID`,disabled:!0}),(0,m.jsx)(f,{name:`email`,label:`Email`,inputProps:{type:`email`}})]}),(0,m.jsx)(i,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{x.mockClear();let t=y(e),n=t.getByRole(`textbox`,{name:`Agency ID`});await h(n).toBeDisabled(),await h(n.closest(`[data-slot=field]`)).toHaveAttribute(`data-disabled`),await h(t.getByRole(`textbox`,{name:`Email`})).toBeEnabled(),await _.click(t.getByRole(`button`,{name:`Save`})),await v(()=>h(x).toHaveBeenCalledWith({agencyId:`AG-48213`,email:`ops@acme-insurance.com`},h.anything()))}},M={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,p.useState)(!0),n=s({defaultValues:{agencyName:``,npn:``}});return(0,m.jsxs)(u.Root,{methods:n,onSubmit:x,"aria-label":`Agency`,className:`flex flex-col items-start gap-7`,children:[(0,m.jsxs)(o.Group,{children:[(0,m.jsx)(f,{name:`agencyName`,label:`Agency name`,disabled:e,rules:{required:`Enter the agency name.`}}),(0,m.jsx)(f,{name:`npn`,label:`NPN`,readOnly:!0,rules:{required:`Enter the NPN.`}})]}),(0,m.jsx)(i,{type:`button`,variant:`secondary`,onClick:()=>t(!e),children:e?`Unlock`:`Lock`}),(0,m.jsx)(i,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{x.mockClear();let t=y(e),n=t.getByRole(`button`,{name:`Save`});await _.click(n),await v(()=>h(x).toHaveBeenCalledWith({agencyName:``,npn:``},h.anything())),x.mockClear(),await _.click(t.getByRole(`button`,{name:`Unlock`})),await _.click(n),await h(await t.findByText(`Enter the agency name.`)).toBeVisible(),await h(t.queryByText(`Enter the NPN.`)).toBeNull(),await h(x).not.toHaveBeenCalled(),await _.click(t.getByRole(`button`,{name:`Lock`})),await _.click(n),await v(()=>h(x).toHaveBeenCalledWith({agencyName:``,npn:``},h.anything())),await h(t.queryByText(`Enter the agency name.`)).toBeNull()}},N={render:()=>{let e=s({defaultValues:{agencyName:``,phone:``}});return(0,m.jsxs)(u.Root,{methods:e,"aria-label":`Agency contact`,className:`flex flex-col items-start gap-7`,children:[(0,m.jsxs)(o.Group,{children:[(0,m.jsx)(f,{name:`agencyName`,label:`Agency name`}),(0,m.jsx)(f,{name:`phone`,label:`Phone number`,inputProps:{type:`tel`}})]}),(0,m.jsx)(i,{type:`button`,variant:`secondary`,onClick:()=>e.setFocus(`phone`),children:`Focus phone`})]})},play:async({canvasElement:e})=>{let t=y(e),n=t.getByRole(`textbox`,{name:`Phone number`});await h(n).not.toHaveFocus(),await _.click(t.getByRole(`button`,{name:`Focus phone`})),await h(n).toHaveFocus()}},P=[`Default`,`WithDescriptionAndTooltip`,`Optional`,`WithRules`,`DescriptionAndError`,`AllErrors`,`InputPropsChaining`,`Horizontal`,`Disabled`,`LockedFieldSkipsRules`,`SetFocus`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // The controls drive the field; the form owns the path, the control and the rule.
  render: args => {
    const methods = useForm<AgencyValues>({
      defaultValues: {
        agencyName: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Agency" className="flex flex-col items-start gap-7">
                <FormText rules={{
        required: 'Enter the agency name.'
      }} inputProps={{
        placeholder: 'Acme Insurance'
      }} {...args} name="agencyName" />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
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
}`,...S.parameters?.docs?.source},description:{story:"The field consumers write: a `name`, a `label` and the validation rule.\nSubmitting empty renders the error and marks the input invalid; typing\nclears both and the value reaches `onSubmit`.\n\n@summary Required text field validating on submit",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<TaxValues>({
      defaultValues: {
        taxId: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Tax details">
                <FormText name="taxId" label="Tax ID" tooltip="The EIN the IRS issued to the agency." description="Nine digits, with or without the dash." inputProps={{
        inputMode: 'numeric',
        autoComplete: 'off'
      }} />
            </Form.Root>;
  },
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
}`,...C.parameters?.docs?.source},description:{story:"`description` is helper text under the input, announced through\n`aria-describedby`. `tooltip` is an info button beside the label for details\nworth a click; it is a sibling of the `<label>`, so the field's accessible\nname stays the label text.\n\n@summary Helper text under the input and an info tooltip beside the label",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<PhoneValues>({
      defaultValues: {
        phone: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Contact">
                <FormText name="phone" label="Phone number" optional inputProps={{
        type: 'tel'
      }} />
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Phone number (optional)'
    })).not.toBeRequired();
  }
}`,...w.parameters?.docs?.source},description:{story:`The forms mark optional fields rather than required ones: \`optional\`
appends a muted suffix to the label and leaves the input without the
\`required\` attribute.

@summary Optional field with the " (optional)" label suffix`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<LicenseValues>({
      defaultValues: {
        agency: {
          npn: ''
        }
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="License" className="flex flex-col items-start gap-7">
                <FormText<LicenseValues> name="agency.npn" label="NPN" rules={{
        required: 'Enter your NPN.',
        pattern: {
          value: /^\\d{6,10}$/,
          message: 'An NPN is 6 to 10 digits.'
        }
      }} inputProps={{
        inputMode: 'numeric'
      }} />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
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
}`,...T.parameters?.docs?.source},description:{story:"`rules` are react-hook-form's, and `name` accepts nested paths typed against\nthe form's values through the generic. `rules.required` validates but does\nnot mark the field required: that stays an explicit `required` prop.\n\n@summary Nested path with validation rules, typed through the generic",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<TaxValues>({
      defaultValues: {
        taxId: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Tax details" className="flex flex-col items-start gap-7">
                <FormText name="taxId" label="Tax ID" description="Nine digits, with or without the dash." rules={{
        required: 'Enter the tax ID.'
      }} inputProps={{
        inputMode: 'numeric',
        autoComplete: 'off'
      }} />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Tax ID'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    const alert = await canvas.findByRole('alert');
    const description = canvas.getByText('Nine digits, with or without the dash.');
    await expect(input.nextElementSibling).toBe(description);
    await expect(description.nextElementSibling).toBe(alert);
    await expect(input).toHaveAccessibleDescription('Nine digits, with or without the dash. Enter the tax ID.');
    await expect(onSubmit).not.toHaveBeenCalled();
  }
}`,...E.parameters?.docs?.source},description:{story:`The description sits right under the input and the error appears below it.
Screen readers announce them in the same order.

@summary Helper text under the input, above the error`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<PasswordValues>({
      defaultValues: {
        password: ''
      },
      criteriaMode: 'all'
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Account security" className="flex flex-col items-start gap-7">
                <FormText name="password" label="Password" required inputProps={{
        type: 'password'
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
}`,...D.parameters?.docs?.source},description:{story:`A form set to react-hook-form's \`criteriaMode: 'all'\` collects every rule
that failed instead of stopping at the first, and the field lists them all.
With the default \`'firstError'\` a single message is rendered, as in the other
stories.

@summary Every failed rule listed under criteriaMode 'all'`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<PhoneValues>({
      defaultValues: {
        phone: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Mobile">
                <FormText name="phone" label="Mobile" inputProps={{
        type: 'tel',
        placeholder: '5550000000',
        maxLength: 10,
        size: 'lg',
        onChange: event => onOwnChange(methods.getValues('phone'), event.target.value)
      }} />
            </Form.Root>;
  },
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
}`,...k.parameters?.docs?.source},description:{story:"`inputProps` carries the input's own attributes — `type`, `placeholder`,\n`maxLength`, `size`… — and its handlers. A consumer `onChange` runs after\nreact-hook-form's: by the time it fires, `getValues` already returns the new\nvalue.\n\n@summary Input attributes and a consumer onChange chained after the form's",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<ProfileValues>({
      defaultValues: {
        fullName: 'Rafa Moro',
        title: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Profile" className="w-[40rem]">
                <Field.Group>
                    <FormText name="fullName" label="Full name" orientation="horizontal" inputProps={{
          className: 'w-72'
        }} data-testid="short" />
                    <FormText name="title" label="Title" description="Shown on your public profile." orientation="horizontal" inputProps={{
          className: 'w-72',
          placeholder: 'Software engineer'
        }} data-testid="long" />
                </Field.Group>
            </Form.Root>;
  },
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
}`,...A.parameters?.docs?.source},description:{story:'Root props pass through: `orientation="horizontal"` lays the label and the\ncontrol in a row, and `className` on the root or in `inputProps` sizes them.\nThe `Input` is full-width by default, so a settings row gives it a width.\n`responsive` stacks the field below 28rem and rows it from there.\n\n@summary Horizontal orientation and class names through the root props',...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<AccountValues>({
      defaultValues: {
        agencyId: 'AG-48213',
        email: 'ops@acme-insurance.com'
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Account" className="flex flex-col items-start gap-7">
                <Field.Group>
                    <FormText name="agencyId" label="Agency ID" disabled />
                    <FormText name="email" label="Email" inputProps={{
          type: 'email'
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
}`,...j.parameters?.docs?.source},description:{story:"`disabled` disables the input and marks the field, and the value still\nreaches `onSubmit` — unlike react-hook-form's own `disabled` option, which\ndrops it. Use `readOnly` for a value the user can copy but not edit.\n\n@summary Disabled field whose value is still submitted",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [locked, setLocked] = useState(true);
    const methods = useForm<{
      agencyName: string;
      npn: string;
    }>({
      defaultValues: {
        agencyName: '',
        npn: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Agency" className="flex flex-col items-start gap-7">
                <Field.Group>
                    <FormText name="agencyName" label="Agency name" disabled={locked} rules={{
          required: 'Enter the agency name.'
        }} />
                    <FormText name="npn" label="NPN" readOnly rules={{
          required: 'Enter the NPN.'
        }} />
                </Field.Group>
                <Button type="button" variant="secondary" onClick={() => setLocked(!locked)}>
                    {locked ? 'Unlock' : 'Lock'}
                </Button>
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const save = canvas.getByRole('button', {
      name: 'Save'
    });
    await userEvent.click(save);
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      agencyName: '',
      npn: ''
    }, expect.anything()));
    onSubmit.mockClear();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Unlock'
    }));
    await userEvent.click(save);
    await expect(await canvas.findByText('Enter the agency name.')).toBeVisible();
    await expect(canvas.queryByText('Enter the NPN.')).toBeNull();
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Lock'
    }));
    await userEvent.click(save);
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      agencyName: '',
      npn: ''
    }, expect.anything()));
    await expect(canvas.queryByText('Enter the agency name.')).toBeNull();
  }
}`,...M.parameters?.docs?.source},description:{story:"A `disabled` or `readOnly` field skips its `rules`: the user cannot change\nthe value, so a failing rule would block the submit with nothing to fix.\nUnlocking the field brings the rules back on the next validation.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<AgencyValues & PhoneValues>({
      defaultValues: {
        agencyName: '',
        phone: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Agency contact" className="flex flex-col items-start gap-7">
                <Field.Group>
                    <FormText name="agencyName" label="Agency name" />
                    <FormText name="phone" label="Phone number" inputProps={{
          type: 'tel'
        }} />
                </Field.Group>
                <Button type="button" variant="secondary" onClick={() => methods.setFocus('phone')}>
                    Focus phone
                </Button>
            </Form.Root>;
  },
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
}`,...N.parameters?.docs?.source},description:{story:"react-hook-form's `ref` reaches the `<input>`, so `setFocus` and the focus\non the first invalid field after submit both work with no ref written by\nhand.\n\n@summary setFocus reaches the input through the merged ref",...N.parameters?.docs?.description}}}})))()}F();export{D as AllErrors,S as Default,E as DescriptionAndError,j as Disabled,A as Horizontal,k as InputPropsChaining,M as LockedFieldSkipsRules,w as Optional,N as SetFocus,C as WithDescriptionAndTooltip,T as WithRules,P as __namedExportsOrder,b as default};