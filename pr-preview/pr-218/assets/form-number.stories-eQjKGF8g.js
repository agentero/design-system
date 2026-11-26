import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./merge-props-C6_kEoTn.js";import{n as i,t as a}from"./button-CkwIfRo7.js";import{n as o,t as s}from"./field-D9Tcujty.js";import{n as c,t as l}from"./field-text-8FQea80Y.js";import{a as u,r as d}from"./index.esm-BTTZ3R6-.js";import{a as f,i as p,n as m,r as h,t as g}from"./form-DZhEvGZz.js";import{n as _,t as v}from"./input-number-Ci8pwkCV.js";var y,b;function x(){return(x=e((()=>{n(),c(),p(),_(),y=t(),b=({inputProps:e,...t})=>{let{field:n,rootProps:i,shellProps:a}=f(t),o={name:n.name,value:n.value??``,onChange:n.onChange,onBlur:n.onBlur,ref:n.ref};return(0,y.jsx)(l,{...i,children:(0,y.jsx)(h,{...a,wrapContent:!0,children:(0,y.jsx)(v,{...r(o,e??{})})})})},b.displayName=`FormNumber`;try{b.displayName=`FormNumber`,b.__docgenInfo={description:'A complete numeric field bound to one react-hook-form value: label,\n`InputNumber`, helper text and validation error, laid out in the standard\norder and wired through `useController`. It renders inside a `Form.Root`,\nwhich provides the form, and needs only a `name`, which on a typed form\nmust point at a string (`FormNumberPath`).\n\nThe form stores the text the field shows, not a number: `"1,234"` with\n`thousandSeparator`, `"001234"` for an identifier that keeps its leading\nzeros, `""` when empty. Parse it where the number is used (in the schema or\non submit). By default the field keeps leading zeros and groups nothing,\nwhich suits identifiers such as an NPN or a ZIP code; pass\n`inputProps={{ thousandSeparator: true }}` for an amount, which also drops\nleading zeros. The mobile keypad has a decimal key unless\n`inputProps.inputMode` is `\'numeric\'`.\n\nIt is [FormText](?path=/docs/components-formtext--docs) with an\n[InputNumber](?path=/docs/components-inputnumber--docs) in place of the\n`Input`: same props, same layout, the same `required`, `invalid` and error\nwiring. Every root prop of\n[FieldText](?path=/docs/components-fieldtext--docs) is accepted and\nforwarded, such as `orientation`, `className` or `controlId`.\n\nDo not use it for a phone number, which is a `FormTel`, nor for a form\nvalue that must be stored as a `number`.',displayName:`FormNumber`,filePath:`/home/runner/work/design-system/design-system/src/form-number/form-number.tsx`,methods:[],props:{orientation:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Layout of the field. `vertical` (default) stacks label, control and\nmessages. `horizontal` is one row at every width: the first child fills it\nand the rest keep their natural width, aligned to the right, so the\ncontrols of stacked fields line up. `responsive` stacks below `28rem` and\nbehaves like `horizontal` from there, measured on the field itself, so it\nneeds no particular wrapper. In both, `Field.Content` groups a control with\nits messages, or a label with its description.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical" | "responsive"`,value:[{value:`"horizontal"`},{value:`"vertical"`},{value:`"responsive"`}]}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.\nDisables the control and marks the field. Unlike react-hook-form's own\n`disabled` option, the value stays in the submitted data: disabling a\nfield is a presentation decision, not a change to the form's values.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.\nMarks the field required: an asterisk on the label and the native\n`required` attribute on the control, which assistive technology\nannounces. It does not validate — pair it with `rules.required` or a\nresolver — and it never triggers the browser bubble, since `Form.Root`\nrenders `noValidate`.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Path of the value in the form, nested paths included (`'agency.npn'`).\nType it against the form's values with the generic\n(`<FormText<Values> name=\"agency.npn\" />`) or by passing `control`: the\npath must then exist and hold a value of the field's type.",name:`name`,required:!0,tags:{},type:{name:`string`}},control:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"The form's `control`, from `useForm()`. Defaults to the one the\nsurrounding `Form.Root` provides; pass it explicitly to get `name`\ninference without writing the generic, or when the field renders outside\na `Form.Root`. A `control` whose resolver transforms the values is\naccepted as is.",name:`control`,required:!1,tags:{},type:{name:`Control<TFieldValues, any, TTransformedValues>`}},rules:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"react-hook-form validation rules for this field (`required`, `pattern`,\n`validate`…), same as `register`'s. They only validate: `rules.required`\ndoes not mark the field `required` — that is a separate, visible decision.",name:`rules`,required:!1,tags:{},type:{name:`Omit<RegisterOptions<TFieldValues, TName>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">`}},shouldUnregister:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Drops the value from the form when the field unmounts, react-hook-form's\n`shouldUnregister`. Defaults to `false`: a field revealed by another one\nkeeps its value while hidden.",name:`shouldUnregister`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`The caption, rendered as the field's label. Text in almost every case.`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Helper text shown under the control, above the error when there is one,\nand announced through its `aria-describedby`. Use it for guidance the\nuser needs before typing; put details worth a click in `tooltip` instead.",name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},tooltip:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`Content of an info tooltip rendered beside the label, for details that
would clutter the description. The trigger is a sibling of the label, so
the field's accessible name stays the label text.`,name:`tooltip`,required:!1,tags:{},type:{name:`ReactNode`}},tooltipSide:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Preferred side of the tooltip. Defaults to `'top'`.",name:`tooltipSide`,required:!1,tags:{},type:{name:`enum`,raw:`"top" | "right" | "bottom" | "left"`,value:[{value:`"top"`},{value:`"right"`},{value:`"bottom"`},{value:`"left"`}]}},optional:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:'Appends a muted " (optional)" to the label. The forms mark optional fields\nrather than required ones; ignored when `required` is set.',name:`optional`,required:!1,tags:{},type:{name:`boolean`}},inputProps:{defaultValue:null,declarations:[{fileName:`design-system/src/form-number/form-number.tsx`,name:`TypeLiteral`}],description:"Everything else the `InputNumber` should receive: the formatting\n(`thousandSeparator`, `allowLeadingZeros`, `maxNumber`), `inputMode`,\n`placeholder`, `size`, `className`… Handlers such as `onChange` and\n`onBlur` run after react-hook-form's, which are already wired, and\nread the formatted text.",name:`inputProps`,required:!1,tags:{},type:{name:`FormNumberInputProps`}}},tags:{summary:`Label, InputNumber, description and error bound to one react-hook-form field`,example:`<FormNumber
  name="annualPremium"
  label="Annual premium"
  required
  rules={{ required: 'Enter the annual premium.' }}
  inputProps={{ thousandSeparator: true, placeholder: '0' }}
/>`}}}catch{}})))()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{d(),x(),i(),o(),m(),S=t(),{expect:C,fn:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/FormNumber`,component:b,tags:[`autodocs`],argTypes:{name:{control:!1},orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},label:{control:`text`},description:{control:`text`},tooltip:{control:`text`},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`}},args:{name:`annualPremium`,label:`Annual premium`,orientation:`vertical`,required:!0,optional:!1,disabled:!1,readOnly:!1},parameters:{docs:{description:{component:'FormNumber is a complete numeric field bound to one react-hook-form value:\nlabel, `InputNumber`, helper text and validation error in the standard\norder, wired through `useController`. It renders inside a `Form.Root` and\nneeds only a `name`. The form stores the text the field shows (`"1,234"`),\nnot a number; parse it where the number is used.\n\nIt is `FormText` with an `InputNumber` in place of the `Input`: same props,\nsame layout, same wiring. The formatting goes in `inputProps`.'}}}},k=w(),A={render:e=>{let t=u({defaultValues:{annualPremium:``}});return(0,S.jsxs)(g.Root,{methods:t,onSubmit:k,"aria-label":`Policy`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsx)(b,{rules:{required:`Enter the annual premium.`},inputProps:{thousandSeparator:!0,placeholder:`0`},...e,name:`annualPremium`}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Annual premium`}),r=t.getByRole(`button`,{name:`Save`});await C(n).toHaveAttribute(`name`,`annualPremium`),await C(n).toHaveAttribute(`inputmode`,`decimal`),await C(n).toBeRequired(),await T.click(r),await C(await t.findByRole(`alert`)).toHaveTextContent(`Enter the annual premium.`),await C(n).toHaveAttribute(`aria-invalid`,`true`),await C(k).not.toHaveBeenCalled(),await T.type(n,`1234567`),await C(n).toHaveValue(`1,234,567`),await E(()=>C(t.queryByRole(`alert`)).toBeNull()),await T.click(r),await E(()=>C(k).toHaveBeenCalledWith({annualPremium:`1,234,567`},C.anything()))}},j={render:()=>{let e=u({defaultValues:{agency:{npn:``}}});return(0,S.jsxs)(g.Root,{methods:e,onSubmit:k,"aria-label":`License`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsx)(b,{name:`agency.npn`,label:`NPN`,description:`6 to 10 digits, as on your license.`,rules:{required:`Enter your NPN.`,pattern:{value:/^\d{6,10}$/,message:`An NPN is 6 to 10 digits.`}},inputProps:{inputMode:`numeric`,autoComplete:`off`}}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`NPN`}),r=t.getByRole(`button`,{name:`Save`});await C(n).toHaveAttribute(`inputmode`,`numeric`),await T.type(n,`0012`),await T.click(r),await C(await t.findByRole(`alert`)).toHaveTextContent(`An NPN is 6 to 10 digits.`),await T.type(n,`345`),await T.click(r),await E(()=>C(k).toHaveBeenCalledWith({agency:{npn:`0012345`}},C.anything())),await C(n).toHaveValue(`0012345`)}},M={render:()=>{let e=u({defaultValues:{coveragePercentage:``}});return(0,S.jsx)(g.Root,{methods:e,"aria-label":`Coverage`,children:(0,S.jsx)(b,{name:`coveragePercentage`,label:`Coverage percentage`,description:`Up to 100.`,inputProps:{maxNumber:100}})})},play:async({canvasElement:e})=>{let t=D(e).getByRole(`textbox`,{name:`Coverage percentage`});await T.type(t,`150`),await C(t).toHaveValue(`15`)}},N=w(()=>!0),P={render:()=>{let e=u({mode:`onBlur`,defaultValues:{annualPremium:``}});return(0,S.jsxs)(g.Root,{methods:e,onSubmit:k,"aria-label":`Policy`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsx)(b,{name:`annualPremium`,label:`Annual premium`,rules:{validate:N},inputProps:{thousandSeparator:!0}}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear(),N.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Annual premium`});await T.type(n,`0001234`),await T.tab(),await C(n).toHaveValue(`1,234`),await E(()=>C(N).toHaveBeenLastCalledWith(`1,234`,C.anything())),await T.click(t.getByRole(`button`,{name:`Save`})),await E(()=>C(k).toHaveBeenCalledWith({annualPremium:`1,234`},C.anything()))}},F={render:()=>{let e=u({defaultValues:{annualPremium:`12,500`}});return(0,S.jsxs)(g.Root,{methods:e,"aria-label":`Policy`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsx)(b,{name:`annualPremium`,label:`Annual premium`,inputProps:{thousandSeparator:!0}}),(0,S.jsx)(a,{type:`button`,variant:`secondary`,onClick:()=>e.reset({annualPremium:`8,250`}),children:`Load last year`})]})},play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`textbox`,{name:`Annual premium`});await C(n).toHaveValue(`12,500`),await T.click(t.getByRole(`button`,{name:`Load last year`})),await C(n).toHaveValue(`8,250`)}},I=w(),L={render:()=>{let e=u({defaultValues:{annualPremium:``}});return(0,S.jsx)(g.Root,{methods:e,"aria-label":`Policy`,children:(0,S.jsx)(b,{name:`annualPremium`,label:`Annual premium`,inputProps:{thousandSeparator:!0,size:`lg`,onChange:t=>I(e.getValues(`annualPremium`),t.target.value)}})})},play:async({canvasElement:e})=>{I.mockClear();let t=D(e).getByRole(`textbox`,{name:`Annual premium`});await C(t).toHaveAttribute(`data-size`,`lg`),await T.type(t,`1234`),await C(I).toHaveBeenLastCalledWith(`1,234`,`1,234`)}},R={render:()=>{let e=u({defaultValues:{annualPremium:`12,500`}});return(0,S.jsxs)(g.Root,{methods:e,onSubmit:k,"aria-label":`Policy`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsx)(b,{name:`annualPremium`,label:`Annual premium`,disabled:!0,inputProps:{thousandSeparator:!0}}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Annual premium`});await C(n).toBeDisabled(),await C(n.closest(`[data-slot=field]`)).toHaveAttribute(`data-disabled`),await T.click(t.getByRole(`button`,{name:`Save`})),await E(()=>C(k).toHaveBeenCalledWith({annualPremium:`12,500`},C.anything()))}},z={render:()=>{let e=u({defaultValues:{annualPremium:`12,500`,deductible:``}});return(0,S.jsxs)(g.Root,{methods:e,onSubmit:k,"aria-label":`Quote`,className:`flex flex-col items-start gap-7`,children:[(0,S.jsxs)(s.Group,{children:[(0,S.jsx)(b,{name:`annualPremium`,label:`Annual premium`,inputProps:{thousandSeparator:!0}}),(0,S.jsx)(b,{name:`deductible`,label:`Deductible`,required:!0,rules:{required:`Enter the deductible.`},inputProps:{thousandSeparator:!0}})]}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e);await T.click(t.getByRole(`button`,{name:`Save`})),await E(()=>C(t.getByRole(`textbox`,{name:`Deductible`})).toHaveFocus()),await C(k).not.toHaveBeenCalled()}},B=[`Default`,`Identifier`,`MaxNumber`,`LeadingZerosOnBlur`,`WithDefaultValue`,`InputPropsChaining`,`Disabled`,`FocusOnError`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  // The controls drive the field; the form owns the path, the control and the rules.
  render: args => {
    const methods = useForm<PolicyValues>({
      defaultValues: {
        annualPremium: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Policy" className="flex flex-col items-start gap-7">
                <FormNumber rules={{
        required: 'Enter the annual premium.'
      }} inputProps={{
        thousandSeparator: true,
        placeholder: '0'
      }} {...args} name="annualPremium" />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Annual premium'
    });
    const save = canvas.getByRole('button', {
      name: 'Save'
    });
    await expect(input).toHaveAttribute('name', 'annualPremium');
    await expect(input).toHaveAttribute('inputmode', 'decimal');
    await expect(input).toBeRequired();
    await userEvent.click(save);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Enter the annual premium.');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.type(input, '1234567');
    await expect(input).toHaveValue('1,234,567');
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
    await userEvent.click(save);
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      annualPremium: '1,234,567'
    }, expect.anything()));
  }
}`,...A.parameters?.docs?.source},description:{story:`An amount: \`thousandSeparator\` groups the digits as they are typed and the
form receives the formatted text, \`"1,234,567"\`. Submitting empty fails the
required rule.

@summary Required amount field submitting the formatted text`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<LicenseValues>({
      defaultValues: {
        agency: {
          npn: ''
        }
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="License" className="flex flex-col items-start gap-7">
                <FormNumber<LicenseValues> name="agency.npn" label="NPN" description="6 to 10 digits, as on your license." rules={{
        required: 'Enter your NPN.',
        pattern: {
          value: /^\\d{6,10}$/,
          message: 'An NPN is 6 to 10 digits.'
        }
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
      name: 'NPN'
    });
    const save = canvas.getByRole('button', {
      name: 'Save'
    });
    await expect(input).toHaveAttribute('inputmode', 'numeric');
    await userEvent.type(input, '0012');
    await userEvent.click(save);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('An NPN is 6 to 10 digits.');
    await userEvent.type(input, '345');
    await userEvent.click(save);
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      agency: {
        npn: '0012345'
      }
    }, expect.anything()));
    await expect(input).toHaveValue('0012345');
  }
}`,...j.parameters?.docs?.source},description:{story:`An identifier: with no separator the field keeps the zeros typed in front,
so \`0012345\` reaches the form as typed. \`inputMode="numeric"\` brings up a
digits-only keypad on mobile, and the rules validate the text.

@summary Identifier keeping its leading zeros, on a nested path`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<CoverageValues>({
      defaultValues: {
        coveragePercentage: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Coverage">
                <FormNumber name="coveragePercentage" label="Coverage percentage" description="Up to 100." inputProps={{
        maxNumber: 100
      }} />
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Coverage percentage'
    });
    await userEvent.type(input, '150');
    await expect(input).toHaveValue('15');
  }
}`,...M.parameters?.docs?.source},description:{story:"`maxNumber` drops a keystroke that would take the number above it, before\nit reaches the form: typing `150` with a maximum of 100 leaves `15`.\n\n@summary Maximum enforced while typing",...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<PolicyValues>({
      mode: 'onBlur',
      defaultValues: {
        annualPremium: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Policy" className="flex flex-col items-start gap-7">
                <FormNumber name="annualPremium" label="Annual premium" rules={{
        validate: onValidate
      }} inputProps={{
        thousandSeparator: true
      }} />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    onValidate.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Annual premium'
    });
    await userEvent.type(input, '0001234');
    await userEvent.tab();
    await expect(input).toHaveValue('1,234');
    await waitFor(() => expect(onValidate).toHaveBeenLastCalledWith('1,234', expect.anything()));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      annualPremium: '1,234'
    }, expect.anything()));
  }
}`,...P.parameters?.docs?.source},description:{story:"With `thousandSeparator` the zeros typed in front are dropped once the field\nloses focus: `0001234` becomes `1,234`, in the field and in the form. The\ntrimmed value reaches react-hook-form before its blur, so a rule run on\nblur (`mode: 'onBlur'`) already reads `\"1,234\"`.\n\n@summary Leading zeros dropped on blur, in the field and in the form",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<PolicyValues>({
      defaultValues: {
        annualPremium: '12,500'
      }
    });
    return <Form.Root methods={methods} aria-label="Policy" className="flex flex-col items-start gap-7">
                <FormNumber name="annualPremium" label="Annual premium" inputProps={{
        thousandSeparator: true
      }} />
                <Button type="button" variant="secondary" onClick={() => methods.reset({
        annualPremium: '8,250'
      })}>
                    Load last year
                </Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Annual premium'
    });
    await expect(input).toHaveValue('12,500');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Load last year'
    }));
    await expect(input).toHaveValue('8,250');
  }
}`,...F.parameters?.docs?.source},description:{story:"A value the form writes — `defaultValues`, `reset`, `setValue` — is shown\nformatted. Write it in the shape the field stores, the formatted text, so\nthe form holds the same value before and after the user edits it.\n\n@summary Formatted default value and reset written by the form",...F.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<PolicyValues>({
      defaultValues: {
        annualPremium: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Policy">
                <FormNumber name="annualPremium" label="Annual premium" inputProps={{
        thousandSeparator: true,
        size: 'lg',
        onChange: event => onOwnChange(methods.getValues('annualPremium'), event.target.value)
      }} />
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onOwnChange.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Annual premium'
    });
    await expect(input).toHaveAttribute('data-size', 'lg');
    await userEvent.type(input, '1234');
    await expect(onOwnChange).toHaveBeenLastCalledWith('1,234', '1,234');
  }
}`,...L.parameters?.docs?.source},description:{story:"A consumer `onChange` in `inputProps` runs after react-hook-form's and reads\nthe formatted text, both from the event and from `getValues`.\n\n@summary Consumer onChange reading the formatted value",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<PolicyValues>({
      defaultValues: {
        annualPremium: '12,500'
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Policy" className="flex flex-col items-start gap-7">
                <FormNumber name="annualPremium" label="Annual premium" disabled inputProps={{
        thousandSeparator: true
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
      name: 'Annual premium'
    });
    await expect(input).toBeDisabled();
    await expect(input.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      annualPremium: '12,500'
    }, expect.anything()));
  }
}`,...R.parameters?.docs?.source},description:{story:"`disabled` disables the input and marks the field, and the value still\nreaches `onSubmit` — unlike react-hook-form's own `disabled` option, which\ndrops it.\n\n@summary Disabled numeric field whose value is still submitted",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<QuoteValues>({
      defaultValues: {
        annualPremium: '12,500',
        deductible: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Quote" className="flex flex-col items-start gap-7">
                <Field.Group>
                    <FormNumber name="annualPremium" label="Annual premium" inputProps={{
          thousandSeparator: true
        }} />
                    <FormNumber name="deductible" label="Deductible" required rules={{
          required: 'Enter the deductible.'
        }} inputProps={{
          thousandSeparator: true
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
      name: 'Deductible'
    })).toHaveFocus());
    await expect(onSubmit).not.toHaveBeenCalled();
  }
}`,...z.parameters?.docs?.source},description:{story:"react-hook-form's `ref` reaches the `<input>` that `InputNumber` renders, so\n`setFocus` and the focus on the first invalid field after submit both work.\n\n@summary Focus on the first invalid field after submit",...z.parameters?.docs?.description}}}})))()}V();export{A as Default,R as Disabled,z as FocusOnError,j as Identifier,L as InputPropsChaining,P as LeadingZerosOnBlur,M as MaxNumber,F as WithDefaultValue,B as __namedExportsOrder,O as default};