import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-By2Bouy5.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-Ch6hraTi.js";import{n as a,t as o}from"./label-CtGwj-HA.js";import{n as s,t as c}from"./field-XxM3bEp5.js";import{a as l,i as u}from"./input-0gfHSWjG.js";import{n as d,t as f}from"./field-text-Cv1C1Q5h.js";import{a as p,r as m}from"./index.esm-CUAI1jSE.js";import{n as h,t as g}from"./input-tel-BbMxuAH2.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{_=t(),m(),r(),s(),d(),l(),a(),h(),v=n(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/InputTel`,component:g,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Phone number`,onChange:b(e=>e.target.value)},decorators:[e=>(0,v.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,v.jsx)(e,{})})],parameters:{docs:{description:{component:'InputTel is a US phone number field that masks as you type: the digits are\nlaid out as `(555) 123-4567`, anything else is dropped and the caret stays\nnext to the digit just edited. It is an `Input` of `type="tel"` inside an\n`InputGroup` frame with a `+1` prefix; `onChange` receives the native event\nwith the masked text already in `event.target.value`.'}}}},T=e=>Array.from(e.querySelectorAll(`[data-slot="input-tel"]`)),E=e=>e.mock.results.at(-1)?.value,D={play:async({args:e,canvasElement:t})=>{let n=C(t),r=n.getByRole(`textbox`,{name:`Phone number`});await y(r).toHaveAttribute(`type`,`tel`),await y(n.getByText(`+1`)).toBeInTheDocument(),await x.type(r,`5551234567`),await y(r).toHaveValue(`(555) 123-4567`),await y(E(e.onChange)).toBe(`(555) 123-4567`)}},O={render:function(e){let[t,n]=(0,_.useState)(``);return(0,v.jsx)(g,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})},play:async({args:e,canvasElement:t})=>{let n=C(t).getByRole(`textbox`,{name:`Phone number`});await x.type(n,`555123`),await y(n).toHaveValue(`(555) 123-`),await y(E(e.onChange)).toBe(`(555) 123-`)}},k={play:async({canvasElement:e})=>{let t=C(e).getByRole(`textbox`,{name:`Phone number`});await x.type(t,`5551234567`),await x.type(t,`9`,{initialSelectionStart:2,initialSelectionEnd:2}),await y(t).toHaveValue(`(595) 512-3456`),await S(()=>y(t.selectionStart).toBe(3))}},A={play:async({canvasElement:e})=>{let t=C(e).getByRole(`textbox`,{name:`Phone number`});await x.type(t,`555`),await y(t).toHaveValue(`(555) `),await x.keyboard(`{Backspace}`),await y(t).toHaveValue(`(555`),await x.keyboard(`{Backspace}`),await y(t).toHaveValue(`(55`)}},j={play:async({args:e,canvasElement:t})=>{let n=C(t).getByRole(`textbox`,{name:`Phone number`});await x.click(n),await x.paste(`555-123-4567`),await y(n).toHaveValue(`(555) 123-4567`),await y(E(e.onChange)).toBe(`(555) 123-4567`)}},M={play:async({args:e,canvasElement:t})=>{let n=C(t).getByRole(`textbox`,{name:`Phone number`});await x.click(n),await x.paste(`+1 (555) 123-4567`),await y(n).toHaveValue(`(555) 123-4567`),await y(E(e.onChange)).toBe(`(555) 123-4567`)}},N={render:()=>(0,v.jsxs)(f,{children:[(0,v.jsx)(o,{children:`Phone number`}),(0,v.jsx)(g,{}),(0,v.jsx)(c.Description,{children:`We only call about your account.`})]}),play:async({canvasElement:e})=>{let t=C(e).getByRole(`textbox`,{name:`Phone number`});await y(t).toHaveAccessibleDescription(`We only call about your account.`),await x.type(t,`5551234567`),await y(t).toHaveValue(`(555) 123-4567`)}},P=b(e=>e),F={beforeEach:()=>{P.mockClear()},render:function(e){let{register:t,handleSubmit:n}=p({defaultValues:{phone:``}});return(0,v.jsxs)(`form`,{"aria-label":`Contact`,noValidate:!0,onSubmit:n(e=>P(e)),style:{display:`grid`,gap:`1rem`},children:[(0,v.jsx)(g,{"aria-label":e[`aria-label`],...t(`phone`)}),(0,v.jsx)(i,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`textbox`,{name:`Phone number`});await x.type(n,`5551234567`),await x.click(t.getByRole(`button`,{name:`Save`})),await S(()=>y(P).toHaveBeenCalledWith({phone:`(555) 123-4567`}))}},I={tags:[`!manifest`],render:function(e){let{register:t}=p({defaultValues:{phone:`(555) 123-4567`}});return(0,v.jsx)(g,{"aria-label":e[`aria-label`],...t(`phone`)})},play:async({canvasElement:e})=>{let t=C(e).getByRole(`textbox`,{name:`Phone number`});await y(t).toHaveValue(`(555) 123-4567`),await x.type(t,`9`,{initialSelectionStart:2,initialSelectionEnd:2}),await y(t).toHaveValue(`(595) 512-3456`),await S(()=>y(t.selectionStart).toBe(3))}},L={tags:[`!manifest`],render:e=>(0,v.jsx)(u,{value:{onChange:e.onChange},children:(0,v.jsx)(g,{"aria-label":e[`aria-label`]})}),play:async({args:e,canvasElement:t})=>{let n=C(t).getByRole(`textbox`,{name:`Phone number`});await x.type(n,`5551234567`),await y(n).toHaveValue(`(555) 123-4567`),await y(E(e.onChange)).toBe(`(555) 123-4567`),await y(e.onChange).toHaveBeenCalledTimes(10)}},R={args:{disabled:!0,defaultValue:`(555) 123-4567`},play:async({canvasElement:e})=>{let t=C(e);await y(t.getByRole(`textbox`,{name:`Phone number`})).toBeDisabled()}},z={render:()=>(0,v.jsxs)(f,{invalid:!0,children:[(0,v.jsx)(o,{children:`Phone number`}),(0,v.jsx)(g,{defaultValue:`(555) 12`}),(0,v.jsx)(c.Error,{errors:[{message:`Enter a 10-digit phone number.`}]})]}),play:async({canvasElement:e})=>{let t=C(e).getByLabelText(`Phone number`);await y(t).toHaveAttribute(`aria-invalid`,`true`),await y(t).toHaveAccessibleDescription(`Enter a 10-digit phone number.`)}},B={render:e=>(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,v.jsx)(g,{...e,size:`sm`,"aria-label":`Small`,defaultValue:`(555) 123-4567`}),(0,v.jsx)(g,{...e,size:`md`,"aria-label":`Medium`,defaultValue:`(555) 123-4567`}),(0,v.jsx)(g,{...e,size:`lg`,"aria-label":`Large`,defaultValue:`(555) 123-4567`})]}),play:async({canvasElement:e})=>{let t=T(e).map(e=>e.getBoundingClientRect().height);await y(t).toEqual([32,40,48])}},V=[`Default`,`Controlled`,`CaretInTheMiddle`,`BackspaceOverMaskCharacters`,`Paste`,`PasteWithCountryCode`,`InsideFieldText`,`WithReactHookForm`,`WithReactHookFormDefaultValue`,`WithInputContext`,`Disabled`,`Invalid`,`AllSizes`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(input).toHaveAttribute('type', 'tel');
    await expect(canvas.getByText('+1')).toBeInTheDocument();
    await userEvent.type(input, '5551234567');
    await expect(input).toHaveValue('(555) 123-4567');
    await expect(lastValue(args.onChange)).toBe('(555) 123-4567');
  }
}`,...D.parameters?.docs?.source},description:{story:"An uncontrolled phone field with its `+1` prefix. Typing the ten digits lays\nthem out as `(555) 123-4567`, and every `onChange` call carries the masked\ntext in `event.target.value`; the prefix never enters the value.\n\n@summary Phone field with a +1 prefix masking the digits as they are typed",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [phone, setPhone] = useState('');
    return <InputTel {...args} value={phone} onChange={event => {
      setPhone(event.target.value);
      args.onChange?.(event);
    }} />;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await userEvent.type(input, '555123');
    await expect(input).toHaveValue('(555) 123-');
    await expect(lastValue(args.onChange)).toBe('(555) 123-');
  }
}`,...O.parameters?.docs?.source},description:{story:`A controlled phone field. The state that owns the value stores what
\`event.target.value\` reports, which is already masked, and the input shows
it back unchanged. A partial number carries the separator that comes before
the next digit, so six digits read \`(555) 123-\`.

@summary Controlled phone field storing the masked value`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox', {
      name: 'Phone number'
    });
    await userEvent.type(input, '5551234567');
    await userEvent.type(input, '9', {
      initialSelectionStart: 2,
      initialSelectionEnd: 2
    });
    await expect(input).toHaveValue('(595) 512-3456');
    await waitFor(() => expect(input.selectionStart).toBe(3));
  }
}`,...k.parameters?.docs?.source},description:{story:`Editing in the middle of a full number: a digit typed after \`(5\` shifts the
rest right, the eleventh digit falls off the end and the caret stays after
the digit just typed instead of jumping to the end.

@summary Caret staying put when a digit is inserted mid-number`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await userEvent.type(input, '555');
    await expect(input).toHaveValue('(555) ');
    await userEvent.keyboard('{Backspace}');
    await expect(input).toHaveValue('(555');
    await userEvent.keyboard('{Backspace}');
    await expect(input).toHaveValue('(55');
  }
}`,...A.parameters?.docs?.source},description:{story:"Backspace over the mask's own characters: after `555` the field shows\n`(555) `, and deleting backwards trims the separators along with the digit\nunder the caret instead of leaving a dangling `) `.\n\n@summary Backspace trimming the separators the mask added",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await userEvent.click(input);
    await userEvent.paste('555-123-4567');
    await expect(input).toHaveValue('(555) 123-4567');
    await expect(lastValue(args.onChange)).toBe('(555) 123-4567');
  }
}`,...j.parameters?.docs?.source},description:{story:"A pasted number in any format is reduced to its digits and masked, so\n`555-123-4567` from a clipboard ends up as `(555) 123-4567`.\n\n@summary Pasted number reduced to its digits and masked",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await userEvent.click(input);
    await userEvent.paste('+1 (555) 123-4567');
    await expect(input).toHaveValue('(555) 123-4567');
    await expect(lastValue(args.onChange)).toBe('(555) 123-4567');
  }
}`,...M.parameters?.docs?.source},description:{story:"A number that carries the `+1` country code, as copied from a signature or\nfilled in by the browser's autofill, loses the code and keeps its ten\nnational digits: `+1 (555) 123-4567` ends up as `(555) 123-4567`.\n\n@summary Pasted number with a +1 country code",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <FieldText>
            <Label>Phone number</Label>
            <InputTel />
            <Field.Description>We only call about your account.</Field.Description>
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(input).toHaveAccessibleDescription('We only call about your account.');
    await userEvent.type(input, '5551234567');
    await expect(input).toHaveValue('(555) 123-4567');
  }
}`,...N.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` the input takes its label, description and states from
the field, and the masked value still reaches a handler the field provides.

@summary Label and description reaching the input through the field`,...N.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  beforeEach: () => {
    onSubmit.mockClear();
  },
  render: function Render(args) {
    const {
      register,
      handleSubmit
    } = useForm<ContactValues>({
      defaultValues: {
        phone: ''
      }
    });
    return <form aria-label="Contact" noValidate onSubmit={handleSubmit(values => onSubmit(values))} style={{
      display: 'grid',
      gap: '1rem'
    }}>
                <InputTel aria-label={args['aria-label']} {...register('phone')} />
                <Button type="submit">Save</Button>
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await userEvent.type(input, '5551234567');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      phone: '(555) 123-4567'
    }));
  }
}`,...F.parameters?.docs?.source},description:{story:"Registered with react-hook-form, the form receives the masked value: the\n`register` handler reads `event.target.value` like any other change.\n\n@summary Masked value reaching react-hook-form through register",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: function Render(args) {
    const {
      register
    } = useForm<ContactValues>({
      defaultValues: {
        phone: '(555) 123-4567'
      }
    });
    return <InputTel aria-label={args['aria-label']} {...register('phone')} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox', {
      name: 'Phone number'
    });
    await expect(input).toHaveValue('(555) 123-4567');
    await userEvent.type(input, '9', {
      initialSelectionStart: 2,
      initialSelectionEnd: 2
    });
    await expect(input).toHaveValue('(595) 512-3456');
    await waitFor(() => expect(input.selectionStart).toBe(3));
  }
}`,...I.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: react-hook-form writes the
default value straight into the DOM after mount, and the first edit in the
middle of it still keeps the caret after the digit just typed.

@summary Caret staying put on a value react-hook-form wrote`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: args => <InputContext value={{
    onChange: args.onChange
  }}>
            <InputTel aria-label={args['aria-label']} />
        </InputContext>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await userEvent.type(input, '5551234567');
    await expect(input).toHaveValue('(555) 123-4567');
    await expect(lastValue(args.onChange)).toBe('(555) 123-4567');
    await expect(args.onChange).toHaveBeenCalledTimes(10);
  }
}`,...L.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: a handler handed down through
\`InputContext\` runs once per keystroke, after the mask, so it reads the
masked value too.

@summary Context handler called once per key with the masked value`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '(555) 123-4567'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Phone number'
    })).toBeDisabled();
  }
}`,...R.parameters?.docs?.source},description:{story:`A disabled phone field keeps its masked value and takes no input.

@summary Disabled phone field`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <FieldText invalid>
            <Label>Phone number</Label>
            <InputTel defaultValue="(555) 12" />
            <Field.Error errors={[{
      message: 'Enter a 10-digit phone number.'
    }]} />
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Phone number');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('Enter a 10-digit phone number.');
  }
}`,...z.parameters?.docs?.source},description:{story:"`invalid` on the surrounding `FieldText` sets `aria-invalid` on the input,\nwhich paints the frame's destructive border, and `Field.Error` is announced\nwith the input.\n\n@summary Invalid field driving the frame's destructive border",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <InputTel {...args} size="sm" aria-label="Small" defaultValue="(555) 123-4567" />
            <InputTel {...args} size="md" aria-label="Medium" defaultValue="(555) 123-4567" />
            <InputTel {...args} size="lg" aria-label="Large" defaultValue="(555) 123-4567" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const heights = getFrames(canvasElement).map(frame => frame.getBoundingClientRect().height);
    await expect(heights).toEqual([32, 40, 48]);
  }
}`,...B.parameters?.docs?.source},description:{story:`The three sizes match Input's: the frame is 32, 40 or 48px tall.

@summary The three sizes side by side`,...B.parameters?.docs?.description}}}})))()}H();export{B as AllSizes,A as BackspaceOverMaskCharacters,k as CaretInTheMiddle,O as Controlled,D as Default,R as Disabled,N as InsideFieldText,z as Invalid,j as Paste,M as PasteWithCountryCode,L as WithInputContext,F as WithReactHookForm,I as WithReactHookFormDefaultValue,V as __namedExportsOrder,w as default};