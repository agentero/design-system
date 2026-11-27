import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-BTXpqodp.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./label-BJtgU2FW.js";import{n as a,t as o}from"./field-BJzbIsci.js";import{a as s,i as c}from"./input-CtrucBLK.js";import{n as l,t as u}from"./input-group-D0ExYp41.js";import{n as d,t as f}from"./field-text-DoXaA2kN.js";import{a as p,r as m,t as h}from"./index.esm-39IiLRHS.js";import{n as g,t as _}from"./input-number-B6NomIhD.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{v=t(),m(),a(),d(),s(),l(),r(),g(),y=n(),{expect:b,fn:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/InputNumber`,component:_,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},type:{control:`radio`,options:[`text`,`tel`,`password`]},thousandSeparator:{control:`boolean`},allowLeadingZeros:{control:`boolean`},maxNumber:{control:`number`},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Premium`,onChange:x(e=>e.target.value)},decorators:[e=>(0,y.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,y.jsx)(e,{})})],parameters:{docs:{description:{component:"InputNumber is a text field that only takes digits and a decimal point and\nformats them as the user types: thousands separators on request, leading\nzeros kept unless turned off, no sign. `onChange` fires with the formatted text in\n`event.target.value`. On mobile devices it shows a keypad with a decimal\nkey. It is an `Input` driven by\n`react-number-format`, so it takes its label, messages and states from a surrounding `FieldText`."}}}},E=e=>e.mock.results.at(-1)?.value,D=(0,v.createRef)(),O={render:e=>(0,y.jsx)(_,{...e,ref:D}),play:async({args:e,canvasElement:t})=>{let n=w(t).getByRole(`textbox`,{name:`Premium`});await S.type(n,`12abc34-`),await b(n).toHaveValue(`1234`),await b(E(e.onChange)).toBe(`1234`),await b(D.current).toBe(n)}},k={args:{type:`tel`,"aria-label":`NPN`},play:async({canvasElement:e})=>{let t=w(e).getByRole(`textbox`,{name:`NPN`});await b(t).toHaveAttribute(`type`,`tel`),await S.type(t,`2a9`),await b(t).toHaveValue(`29`)}},A={args:{thousandSeparator:!0},play:async({args:e,canvasElement:t})=>{let n=w(t).getByRole(`textbox`,{name:`Premium`});await S.type(n,`1234567`),await b(n).toHaveValue(`1,234,567`),await b(E(e.onChange)).toBe(`1,234,567`)}},j={render:()=>(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,y.jsxs)(f,{children:[(0,y.jsx)(i,{children:`Commission rate`}),(0,y.jsx)(_,{}),(0,y.jsx)(o.Description,{children:`Decimal keypad, so the user can type 12.5.`})]}),(0,y.jsxs)(f,{children:[(0,y.jsx)(i,{children:`NPN`}),(0,y.jsx)(_,{inputMode:`numeric`}),(0,y.jsx)(o.Description,{children:`Numeric keypad, digits only.`})]})]}),play:async({canvasElement:e})=>{let t=w(e);await b(t.getByRole(`textbox`,{name:`Commission rate`})).toHaveAttribute(`inputmode`,`decimal`),await b(t.getByRole(`textbox`,{name:`NPN`})).toHaveAttribute(`inputmode`,`numeric`)}},M={tags:[`!manifest`],render:e=>(0,y.jsx)(_,{...e,inputMode:void 0}),play:async({canvasElement:e})=>{let t=w(e);await b(t.getByRole(`textbox`,{name:`Premium`})).toHaveAttribute(`inputmode`,`decimal`)}},N={args:{maxNumber:100,"aria-label":`Commission rate`},play:async({args:e,canvasElement:t})=>{let n=w(t).getByRole(`textbox`,{name:`Commission rate`});await S.type(n,`1000`),await b(n).toHaveValue(`100`),await b(E(e.onChange)).toBe(`100`),await b(e.onChange.mock.calls).toHaveLength(3)}},P={render:e=>(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,y.jsxs)(f,{children:[(0,y.jsx)(i,{children:`ZIP code`}),(0,y.jsx)(_,{onChange:e.onChange}),(0,y.jsx)(o.Description,{children:`Keeps leading zeros: 007 stays 007.`})]}),(0,y.jsxs)(f,{children:[(0,y.jsx)(i,{children:`Amount`}),(0,y.jsx)(_,{onChange:e.onChange,thousandSeparator:!0}),(0,y.jsx)(o.Description,{children:`Drops leading zeros on blur: 0001234 becomes 1,234.`})]})]}),play:async({args:e,canvasElement:t})=>{let n=w(t),r=n.getByRole(`textbox`,{name:`ZIP code`}),i=n.getByRole(`textbox`,{name:`Amount`});await S.type(r,`007`),await S.type(i,`0001234`),await S.tab(),await b(r).toHaveValue(`007`),await b(i).toHaveValue(`1,234`),await b(E(e.onChange)).toBe(`1,234`)}},F={args:{thousandSeparator:!0},render:function(e){let[t,n]=(0,v.useState)(1234);return(0,y.jsx)(_,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})},play:async({canvasElement:e})=>{let t=w(e).getByRole(`textbox`,{name:`Premium`});await b(t).toHaveValue(`1,234`),await S.type(t,`5`),await b(t).toHaveValue(`12,345`)}},I={args:{thousandSeparator:!0,placeholder:`0`},render:e=>(0,y.jsxs)(u.Root,{children:[(0,y.jsx)(u.Text,{children:`$`}),(0,y.jsx)(_,{...e})]}),play:async({canvasElement:e})=>{let t=w(e),n=t.getByRole(`textbox`,{name:`Premium`});await S.type(n,`2500`),await b(n).toHaveValue(`2,500`),await b(t.getByText(`$`)).toBeInTheDocument()}},L={render:()=>(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,y.jsxs)(f,{required:!0,children:[(0,y.jsx)(i,{children:`NPN`}),(0,y.jsx)(_,{type:`tel`}),(0,y.jsx)(o.Description,{children:`The 7 to 10 digit National Producer Number.`})]}),(0,y.jsxs)(f,{invalid:!0,children:[(0,y.jsx)(i,{children:`Years in business`}),(0,y.jsx)(_,{defaultValue:150}),(0,y.jsx)(o.Error,{errors:[{message:`Enter at most 100 years.`}]})]}),(0,y.jsxs)(f,{disabled:!0,children:[(0,y.jsx)(i,{children:`Agency code`}),(0,y.jsx)(_,{defaultValue:`00412`})]})]}),play:async({canvasElement:e})=>{let t=w(e),n=t.getByLabelText(/^NPN/),r=t.getByLabelText(`Years in business`),i=t.getByLabelText(`Agency code`);await b(n).toBeRequired(),await b(n).toHaveAccessibleDescription(`The 7 to 10 digit National Producer Number.`),await b(r).toHaveAttribute(`aria-invalid`,`true`),await b(r).toHaveAccessibleDescription(`Enter at most 100 years.`),await b(getComputedStyle(r).borderColor).not.toBe(getComputedStyle(n).borderColor),await b(i).toBeDisabled(),await b(i).toHaveValue(`00412`)}},R={args:{disabled:!0,thousandSeparator:!0,defaultValue:12500},play:async({canvasElement:e})=>{let t=w(e).getByRole(`textbox`,{name:`Premium`});await b(t).toBeDisabled(),await b(t).toHaveValue(`12,500`)}},z={args:{"aria-invalid":!0,defaultValue:0},play:async({canvasElement:e})=>{let t=w(e).getByRole(`textbox`,{name:`Premium`});await b(t).toHaveAttribute(`aria-invalid`,`true`)}},B={args:{thousandSeparator:!0,defaultValue:1234},render:e=>(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,y.jsx)(_,{...e,size:`sm`,"aria-label":`Small`}),(0,y.jsx)(_,{...e,size:`md`,"aria-label":`Medium`}),(0,y.jsx)(_,{...e,size:`lg`,"aria-label":`Large`})]}),play:async({canvasElement:e})=>{let t=w(e).getAllByRole(`textbox`).map(e=>e.getBoundingClientRect().height);await b(t).toEqual([32,40,48])}},H={tags:[`!manifest`],render:function(e){return V=p({defaultValues:{npn:`1234`}}),(0,y.jsx)(h,{control:V.control,name:`npn`,render:({field:t})=>(0,y.jsx)(_,{"aria-label":e[`aria-label`],thousandSeparator:!0,...t})})},play:async({canvasElement:e})=>{let t=w(e).getByRole(`textbox`);await b(t).toHaveValue(`1,234`),await S.type(t,`5`),await b(t).toHaveValue(`12,345`),await b(V.getValues().npn).toBe(`12,345`),V.reset({npn:`42`}),await C(()=>b(t).toHaveValue(`42`))}},U=(0,v.createRef)(),W=x(e=>e.target.value),G={tags:[`!manifest`],args:{thousandSeparator:!0},render:e=>(0,y.jsx)(c,{value:{onChange:W,ref:U},children:(0,y.jsx)(_,{...e,ref:D})}),play:async({args:e,canvasElement:t})=>{W.mockClear();let n=w(t).getByRole(`textbox`,{name:`Premium`});await S.type(n,`1234`),await b(n).toHaveValue(`1,234`),await b(E(W)).toBe(`1,234`),await b(W.mock.calls).toHaveLength(4),await b(E(e.onChange)).toBe(`1,234`),await b(U.current).toBe(n),await b(D.current).toBe(n)}},K=[`Default`,`TypeTel`,`ThousandSeparator`,`Keypad`,`UndefinedInputMode`,`MaxNumber`,`LeadingZeros`,`Controlled`,`InsideInputGroup`,`InsideFieldText`,`Disabled`,`Invalid`,`AllSizes`,`WithReactHookForm`,`WithInputContext`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <InputNumber {...args} ref={inputRef} />,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await userEvent.type(input, '12abc34-');
    await expect(input).toHaveValue('1234');
    await expect(lastValue(args.onChange)).toBe('1234');
    await expect(inputRef.current).toBe(input);
  }
}`,...O.parameters?.docs?.source},description:{story:"Only digits and a decimal point make it into the field: letters and a minus\nsign are ignored as they are typed. `onChange` reports the text as it is shown, and the `ref`\npoints at the `<input>` element.\n\n@summary Numeric field that ignores letters and signs",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    'aria-label': 'NPN'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'NPN'
    });
    await expect(input).toHaveAttribute('type', 'tel');
    await userEvent.type(input, '2a9');
    await expect(input).toHaveValue('29');
  }
}`,...k.parameters?.docs?.source},description:{story:'`type="tel"` renders a `tel` input that behaves as a `text` one: the field\nformats and filters the same way, and the keypad on mobile devices still\nfollows `inputMode`.\n\n@summary tel input type, same behaviour as text',...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    thousandSeparator: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await userEvent.type(input, '1234567');
    await expect(input).toHaveValue('1,234,567');
    await expect(lastValue(args.onChange)).toBe('1,234,567');
  }
}`,...A.parameters?.docs?.source},description:{story:"With `thousandSeparator` the integer part is grouped with commas as the\nuser types, and the commas are part of what `onChange` reports.\n\n@summary Thousands grouped with commas as the user types",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1.5rem'
  }}>
            <FieldText>
                <Label>Commission rate</Label>
                <InputNumber />
                <Field.Description>Decimal keypad, so the user can type 12.5.</Field.Description>
            </FieldText>
            <FieldText>
                <Label>NPN</Label>
                <InputNumber inputMode="numeric" />
                <Field.Description>Numeric keypad, digits only.</Field.Description>
            </FieldText>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Commission rate'
    })).toHaveAttribute('inputmode', 'decimal');
    await expect(canvas.getByRole('textbox', {
      name: 'NPN'
    })).toHaveAttribute('inputmode', 'numeric');
  }
}`,...j.parameters?.docs?.source},description:{story:`The field brings up a keypad with a decimal key on mobile devices, since it
takes a decimal point. An identifier passes \`inputMode="numeric"\` for a
digits-only keypad.

@summary Decimal keypad by default, numeric keypad when passed`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: args => <InputNumber {...args} inputMode={undefined} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Premium'
    })).toHaveAttribute('inputmode', 'decimal');
  }
}`,...M.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: a wrapper that forwards an unset
\`inputMode\` still gets the decimal keypad.

@summary Forwarded undefined inputMode keeps the decimal keypad`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    maxNumber: 100,
    'aria-label': 'Commission rate'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Commission rate'
    });
    await userEvent.type(input, '1000');
    await expect(input).toHaveValue('100');
    await expect(lastValue(args.onChange)).toBe('100');
    await expect((args.onChange as ReturnType<typeof fn>).mock.calls).toHaveLength(3);
  }
}`,...N.parameters?.docs?.source},description:{story:`\`maxNumber\` caps the value: a keystroke that would push the number above
it is dropped, so the field keeps its previous value and \`onChange\` is not
called for it.

@summary Keystrokes that would exceed a maximum are dropped`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1.5rem'
  }}>
            <FieldText>
                <Label>ZIP code</Label>
                <InputNumber onChange={args.onChange} />
                <Field.Description>Keeps leading zeros: 007 stays 007.</Field.Description>
            </FieldText>
            <FieldText>
                <Label>Amount</Label>
                <InputNumber onChange={args.onChange} thousandSeparator />
                <Field.Description>Drops leading zeros on blur: 0001234 becomes 1,234.</Field.Description>
            </FieldText>
        </div>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const zip = canvas.getByRole('textbox', {
      name: 'ZIP code'
    });
    const amount = canvas.getByRole('textbox', {
      name: 'Amount'
    });
    await userEvent.type(zip, '007');
    await userEvent.type(amount, '0001234');
    await userEvent.tab();
    await expect(zip).toHaveValue('007');
    await expect(amount).toHaveValue('1,234');
    await expect(lastValue(args.onChange)).toBe('1,234');
  }
}`,...P.parameters?.docs?.source},description:{story:"Leading zeros are kept by default, as an NPN or a ZIP code needs. With\n`allowLeadingZeros` off they are dropped once the field loses focus, which\nis what an amount wants, and `onChange` reports the trimmed value. A field\nwith `thousandSeparator` is an amount, so it turns them off unless\n`allowLeadingZeros` is passed.\n\n@summary Leading zeros kept for identifiers, dropped on blur for amounts",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    thousandSeparator: true
  },
  render: function Render(args) {
    const [premium, setPremium] = useState<number | string>(1234);
    return <InputNumber {...args} value={premium} onChange={event => {
      setPremium(event.target.value);
      args.onChange?.(event);
    }} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await expect(input).toHaveValue('1,234');
    await userEvent.type(input, '5');
    await expect(input).toHaveValue('12,345');
  }
}`,...F.parameters?.docs?.source},description:{story:"A controlled field takes `value` as a number and shows it formatted. The\nstate keeps what `onChange` reports, so it holds the formatted text.\n\n@summary Controlled field showing a numeric value formatted",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    thousandSeparator: true,
    placeholder: '0'
  },
  render: args => <InputGroup.Root>
            <InputGroup.Text>$</InputGroup.Text>
            <InputNumber {...args} />
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await userEvent.type(input, '2500');
    await expect(input).toHaveValue('2,500');
    await expect(canvas.getByText('$')).toBeInTheDocument();
  }
}`,...I.parameters?.docs?.source},description:{story:`Inside an \`InputGroup\` the field sits behind a currency affix and the
frame takes its focus, disabled and invalid states from the input.

@summary Amount with a currency prefix inside an input group`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1.5rem'
  }}>
            <FieldText required>
                <Label>NPN</Label>
                <InputNumber type="tel" />
                <Field.Description>The 7 to 10 digit National Producer Number.</Field.Description>
            </FieldText>
            <FieldText invalid>
                <Label>Years in business</Label>
                <InputNumber defaultValue={150} />
                <Field.Error errors={[{
        message: 'Enter at most 100 years.'
      }]} />
            </FieldText>
            <FieldText disabled>
                <Label>Agency code</Label>
                <InputNumber defaultValue="00412" />
            </FieldText>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const npn = canvas.getByLabelText(/^NPN/);
    const years = canvas.getByLabelText('Years in business');
    const code = canvas.getByLabelText('Agency code');
    await expect(npn).toBeRequired();
    await expect(npn).toHaveAccessibleDescription('The 7 to 10 digit National Producer Number.');
    await expect(years).toHaveAttribute('aria-invalid', 'true');
    await expect(years).toHaveAccessibleDescription('Enter at most 100 years.');
    await expect(getComputedStyle(years).borderColor).not.toBe(getComputedStyle(npn).borderColor);
    await expect(code).toBeDisabled();
    await expect(code).toHaveValue('00412');
  }
}`,...L.parameters?.docs?.source},description:{story:"Inside a `FieldText` the input takes its label, description and states from\nthe field. `invalid` on the field sets `aria-invalid`, which paints the\ndestructive border, and `disabled` reaches the input the same way.\n\n@summary Label, messages and states reaching the input from a FieldText",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    thousandSeparator: true,
    defaultValue: 12500
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await expect(input).toBeDisabled();
    await expect(input).toHaveValue('12,500');
  }
}`,...R.parameters?.docs?.source},description:{story:`A disabled field keeps its formatted value and takes no input.

@summary Disabled field with a formatted value`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    defaultValue: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  }
}`,...z.parameters?.docs?.source},description:{story:"`aria-invalid` paints the destructive border, the same way it does on a\nplain `Input`.\n\n@summary Invalid state driven by aria-invalid",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    thousandSeparator: true,
    defaultValue: 1234
  },
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <InputNumber {...args} size="sm" aria-label="Small" />
            <InputNumber {...args} size="md" aria-label="Medium" />
            <InputNumber {...args} size="lg" aria-label="Large" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const heights = within(canvasElement).getAllByRole('textbox').map(input => input.getBoundingClientRect().height);
    await expect(heights).toEqual([32, 40, 48]);
  }
}`,...B.parameters?.docs?.source},description:{story:`The three sizes match Input's: 32, 40 or 48px tall.

@summary The three sizes side by side`,...B.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: function Render(args) {
    form = useForm<AgencyValues>({
      defaultValues: {
        npn: '1234'
      }
    });
    return <Controller control={form.control} name="npn" render={({
      field
    }) => <InputNumber aria-label={args['aria-label']} thousandSeparator {...field} />} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveValue('1,234');
    await userEvent.type(input, '5');
    await expect(input).toHaveValue('12,345');
    await expect(form.getValues().npn).toBe('12,345');
    form.reset({
      npn: '42'
    });
    await waitFor(() => expect(input).toHaveValue('42'));
  }
}`,...H.parameters?.docs?.source},description:{story:"Regression check, kept out of the manifest: bound through react-hook-form's\n`Controller`, the field shows the form's default, stores the formatted text\nthat `onChange` reports and follows `reset`.\n\n@summary Controller showing defaults and storing the formatted text",...H.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  args: {
    thousandSeparator: true
  },
  render: args => <InputContext value={{
    onChange: contextOnChange,
    ref: contextRef
  }}>
            <InputNumber {...args} ref={inputRef} />
        </InputContext>,
  play: async ({
    args,
    canvasElement
  }) => {
    contextOnChange.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await userEvent.type(input, '1234');
    await expect(input).toHaveValue('1,234');
    await expect(lastValue(contextOnChange)).toBe('1,234');
    await expect(contextOnChange.mock.calls).toHaveLength(4);
    await expect(lastValue(args.onChange)).toBe('1,234');
    await expect(contextRef.current).toBe(input);
    await expect(inputRef.current).toBe(input);
  }
}`,...G.parameters?.docs?.source},description:{story:"Regression check, kept out of the manifest: a container's `InputContext`\nis merged once, before the formatting, so a context `onChange` runs once\nper keystroke with the formatted value, and the context `ref` reaches the\n`<input>` alongside the field's own.\n\n@summary Context handlers merged once, before the formatting",...G.parameters?.docs?.description}}}})))()}q();export{B as AllSizes,F as Controlled,O as Default,R as Disabled,L as InsideFieldText,I as InsideInputGroup,z as Invalid,j as Keypad,P as LeadingZeros,N as MaxNumber,A as ThousandSeparator,k as TypeTel,M as UndefinedInputMode,G as WithInputContext,H as WithReactHookForm,K as __namedExportsOrder,T as default};