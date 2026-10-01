import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-SFc7mrvX.js";import{n as i,t as a}from"./field-D5laGv1P.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./form-Dl56pknA.js";var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{o(),c(),n(),i(),s(),f=t(),{expect:p,fn:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/Form`,component:d.Root,tags:[`autodocs`],argTypes:{"aria-label":{control:`text`}},parameters:{docs:{description:{component:"Form is the react-hook-form binding of the design system. `Form.Root` renders\nthe `<form>` and provides the `useForm()` instance to the form fields inside\nit — `FormText` and the other `Form<X>` components — which bind themselves by\n`name`. The submit goes through `handleSubmit`, so `onSubmit` only runs with\nvalid, typed values, and the element is always `noValidate`: validation is\nreact-hook-form's, and the `required` a field sets is announced without the\nbrowser's own bubble.\n\n`react-hook-form` is an optional peer dependency: install it in the app and\nkeep a single copy, since the provider and the fields share one context."}}}},y=m(),b={render:()=>{let e=l({defaultValues:{agencyName:``,email:``}});return(0,f.jsxs)(d.Root,{methods:e,onSubmit:y,"aria-label":`Agency profile`,className:`flex flex-col items-start gap-7`,children:[(0,f.jsxs)(a.Group,{children:[(0,f.jsx)(u,{name:`agencyName`,label:`Agency name`,required:!0,rules:{required:`Enter the agency name.`}}),(0,f.jsx)(u,{name:`email`,label:`Email`,required:!0,rules:{required:`Enter the agency email.`},inputProps:{type:`email`,autoComplete:`email`}})]}),(0,f.jsx)(r,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{y.mockClear();let t=_(e),n=t.getByRole(`form`,{name:`Agency profile`}),r=t.getByRole(`textbox`,{name:`Agency name`}),i=t.getByRole(`textbox`,{name:`Email`});await p(n).toHaveAttribute(`novalidate`),await p(r).toBeRequired(),await p(i).toBeRequired(),await h.click(t.getByRole(`button`,{name:`Save`}));let a=await t.findAllByRole(`alert`);await p(a).toHaveLength(2),await p(a[0]).toHaveTextContent(`Enter the agency name.`),await p(a[1]).toHaveTextContent(`Enter the agency email.`),await p(r).toHaveAttribute(`aria-invalid`,`true`),await p(i).toHaveAttribute(`aria-invalid`,`true`),await p(r).toHaveFocus(),await p(y).not.toHaveBeenCalled(),await h.type(r,`Acme Insurance`),await h.type(i,`ops@acme-insurance.com`),await g(()=>p(t.queryByRole(`alert`)).toBeNull()),await p(r).not.toHaveAttribute(`aria-invalid`),await h.click(t.getByRole(`button`,{name:`Save`})),await g(()=>p(y).toHaveBeenCalledWith({agencyName:`Acme Insurance`,email:`ops@acme-insurance.com`},p.anything()))}},x={render:()=>{let e=l({defaultValues:{nickname:``}});return(0,f.jsxs)(d.Root,{methods:e,onSubmit:y,"aria-label":`Display name`,className:`flex flex-col items-start gap-7`,children:[(0,f.jsx)(u,{name:`nickname`,label:`Display name`,required:!0}),(0,f.jsx)(r,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{y.mockClear();let t=_(e);await p(t.getByRole(`form`,{name:`Display name`})).toHaveAttribute(`novalidate`),await p(t.getByRole(`textbox`,{name:`Display name`})).toBeRequired(),await h.click(t.getByRole(`button`,{name:`Save`})),await g(()=>p(y).toHaveBeenCalledWith({nickname:``},p.anything())),await p(t.queryByRole(`alert`)).toBeNull()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<AgencyValues>({
      defaultValues: {
        agencyName: '',
        email: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Agency profile" className="flex flex-col items-start gap-7">
                <Field.Group>
                    <FormText name="agencyName" label="Agency name" required rules={{
          required: 'Enter the agency name.'
        }} />
                    <FormText name="email" label="Email" required rules={{
          required: 'Enter the agency email.'
        }} inputProps={{
          type: 'email',
          autoComplete: 'email'
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
    const form = canvas.getByRole('form', {
      name: 'Agency profile'
    });
    const agencyName = canvas.getByRole('textbox', {
      name: 'Agency name'
    });
    const email = canvas.getByRole('textbox', {
      name: 'Email'
    });
    await expect(form).toHaveAttribute('novalidate');
    await expect(agencyName).toBeRequired();
    await expect(email).toBeRequired();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    const alerts = await canvas.findAllByRole('alert');
    await expect(alerts).toHaveLength(2);
    await expect(alerts[0]).toHaveTextContent('Enter the agency name.');
    await expect(alerts[1]).toHaveTextContent('Enter the agency email.');
    await expect(agencyName).toHaveAttribute('aria-invalid', 'true');
    await expect(email).toHaveAttribute('aria-invalid', 'true');
    await expect(agencyName).toHaveFocus();
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.type(agencyName, 'Acme Insurance');
    await userEvent.type(email, 'ops@acme-insurance.com');
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
    await expect(agencyName).not.toHaveAttribute('aria-invalid');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      agencyName: 'Acme Insurance',
      email: 'ops@acme-insurance.com'
    }, expect.anything()));
  }
}`,...b.parameters?.docs?.source},description:{story:`A form with two required fields and a submit button. Submitting empty shows
both errors, marks both inputs invalid and focuses the first one — proof that
react-hook-form's \`ref\` reached the inputs. Once filled in, \`onSubmit\`
receives the typed values.

@summary Form.Root with FormText fields validating on submit`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<NicknameValues>({
      defaultValues: {
        nickname: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Display name" className="flex flex-col items-start gap-7">
                <FormText name="nickname" label="Display name" required />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('form', {
      name: 'Display name'
    })).toHaveAttribute('novalidate');
    await expect(canvas.getByRole('textbox', {
      name: 'Display name'
    })).toBeRequired();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      nickname: ''
    }, expect.anything()));
    await expect(canvas.queryByRole('alert')).toBeNull();
  }
}`,...x.parameters?.docs?.source},description:{story:"`required` on a field reaches the native attribute, so assistive technology\nannounces it, but the form renders `noValidate`: without `rules`, submitting\nthe field empty is not blocked by the browser and `onSubmit` still runs.\nValidation is react-hook-form's alone.\n\n@summary Native required never triggers the browser's validation bubble",...x.parameters?.docs?.description}}},S=[`Default`,`NoValidate`]})))()}C();export{b as Default,x as NoValidate,S as __namedExportsOrder,v as default};