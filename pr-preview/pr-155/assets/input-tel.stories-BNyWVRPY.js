import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-C9iExgFS.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i}from"./merge-props-CyYe4d_S.js";import{n as a,t as o}from"./button-BccApXms.js";import{n as s,t as c}from"./label-CXC6f2Wa.js";import{n as l,t as u}from"./field-CMV7zN8w.js";import{a as d,i as f,n as p,o as ee,t as te}from"./input-BmbAZuWF.js";import{n as ne,t as m}from"./input-group-CWBq5u89.js";import{n as re,t as ie}from"./field-text-CXA1zVxW.js";import{i as h,n as ae}from"./index.esm-Ba4q12rn.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{g=`(...) ...-....`,_=e=>{let t=e.replace(/\D/g,``);return t.length>10&&t.startsWith(`1`)?t.slice(1):t},v=({value:e,mask:t,maskSymbol:n,trimNonMaskCharsLeftover:r=!1})=>{if(!e)return``;let i=``,a=0;for(let o of t.split(``)){if(a>=e.length){if(!r&&o!==n){i+=o;continue}break}o===n?(i+=e[a],a+=1):i+=o}return i},y=e=>e?/^\d+$/.test(e):!1,b=({phoneBeforeInput:e,phoneAfterInput:t,phoneAfterFormatted:n,cursorPositionAfterInput:r,deletion:i})=>{if(!e)return n.length;let a=null;for(let e=r-1;e>=0;--e)if(y(t[e])){a=e;break}if(a===null){for(let e=0;e<t.length;e+=1)if(y(n[e]))return e;return t.length}let o=0;for(let e=0;e<a;e+=1)y(t[e])&&(o+=1);let s=0,c=0;for(let e=0;e<n.length&&(s+=1,y(n[e])&&(c+=1),!(c>=o+1));e+=1);if(i!==`backward`)for(;!y(n[s])&&s<n.length;)s+=1;return s},x=e=>{if(e?.toLocaleLowerCase().includes(`delete`)??!1)return e?.toLocaleLowerCase().includes(`forward`)?`forward`:`backward`}})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),i(),p(),d(),S(),w=n(),T=e=>{let{onChange:t,onFocus:n,ref:i,...a}=ee(e),o=(0,C.useRef)(null),s=(0,C.useRef)(``),c=(0,C.useMemo)(()=>r(o,i),[i]),l=e=>{s.current=e.target.value,n?.(e)},u=e=>{let n=x(e.nativeEvent.inputType),{value:r,selectionStart:i}=e.target,a=v({value:_(r),mask:g,maskSymbol:`.`,trimNonMaskCharsLeftover:n===`backward`}),c=b({cursorPositionAfterInput:i??0,phoneBeforeInput:s.current,phoneAfterInput:r,phoneAfterFormatted:a,deletion:n});s.current=a,e.target.value=a,t?(t(e),Promise.resolve().then(()=>{let e=o.current;e&&e===document.activeElement&&e.setSelectionRange(c,c)})):e.target.setSelectionRange(c,c)};return(0,w.jsx)(f,{value:null,children:(0,w.jsx)(te,{"data-slot":`input-tel`,...a,type:`tel`,ref:c,onFocus:l,onChange:u})})},T.displayName=`InputTel`;try{T.displayName=`InputTel`,T.__docgenInfo={description:'InputTel is a US phone number field that masks as you type: the digits the\nuser enters are laid out as `(555) 123-4567` while typing, pasting or\ndeleting, anything that is not a digit is dropped, and the caret stays next\nto the digit just edited instead of jumping to the end. A leading `+1`\ncountry code, as pasted or filled in by the browser\'s autofill, is dropped\ntoo; past that, the eleventh digit and beyond are ignored. `onChange` receives the native change event with the\nmasked text already in `event.target.value`, so a controlled field, an\nuncontrolled one and one registered with react-hook-form all store\n`(555) 123-4567`, never the bare digits.\n\nIt is an [Input](?path=/docs/components-input--docs) of `type="tel"`, with\nno frame of its own: put it inside an\n[InputGroup](?path=/docs/components-inputgroup--docs) to set a `+1` prefix\nbeside it. Every standard `<input>` attribute is accepted and forwarded, such\nas `name`, `placeholder`, `autoComplete` or `required`; only `type` is not\naccepted. Inside a `FieldText` it takes its label, messages and states from\nthe field as a plain `Input` does, and the invalid state comes from\n`aria-invalid`.\n\nDo not use it for international numbers or extensions; the mask only knows\nthe ten-digit US format. For free-form text that happens to hold a number,\nuse `Input`.',displayName:`InputTel`,filePath:`/home/runner/work/design-system/design-system/src/input-tel/input-tel.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}}},tags:{summary:`US phone input that masks as you type and reports the masked value`,dataAttribute:`{string} data-slot - Always set to "input-tel"`,example:`<FieldText>
  <Label>Phone number</Label>
  <InputGroup.Root>
    <InputGroup.Text>+1</InputGroup.Text>
    <InputTel name="phone" autoComplete="tel-national" />
  </InputGroup.Root>
</FieldText>`}}}catch{}})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{D=t(),ae(),a(),l(),re(),d(),ne(),s(),E(),O=n(),{expect:k,fn:A,userEvent:j,waitFor:M,within:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/InputTel`,component:T,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Phone number`,onChange:A(e=>e.target.value)},decorators:[e=>(0,O.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,O.jsx)(e,{})})],parameters:{docs:{description:{component:'InputTel is a US phone number field that masks as you type: the digits are\nlaid out as `(555) 123-4567`, anything else is dropped and the caret stays\nnext to the digit just edited. It is an `Input` of `type="tel"` with no frame\nof its own; `onChange` receives the native event with the masked text already\nin `event.target.value`.'}}}},F=e=>Array.from(e.querySelectorAll(`[data-slot="input-tel"]`)),I=e=>e.mock.results.at(-1)?.value,L={play:async({args:e,canvasElement:t})=>{let n=N(t).getByRole(`textbox`,{name:`Phone number`});await k(n).toHaveAttribute(`type`,`tel`),await j.type(n,`5551234567`),await k(n).toHaveValue(`(555) 123-4567`),await k(I(e.onChange)).toBe(`(555) 123-4567`)}},R={render:function(e){let[t,n]=(0,D.useState)(``);return(0,O.jsx)(T,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})},play:async({args:e,canvasElement:t})=>{let n=N(t).getByRole(`textbox`,{name:`Phone number`});await j.type(n,`555123`),await k(n).toHaveValue(`(555) 123-`),await k(I(e.onChange)).toBe(`(555) 123-`)}},z={play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`,{name:`Phone number`});await j.type(t,`5551234567`),await j.type(t,`9`,{initialSelectionStart:2,initialSelectionEnd:2}),await k(t).toHaveValue(`(595) 512-3456`),await M(()=>k(t.selectionStart).toBe(3))}},B={play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`,{name:`Phone number`});await j.type(t,`555`),await k(t).toHaveValue(`(555) `),await j.keyboard(`{Backspace}`),await k(t).toHaveValue(`(555`),await j.keyboard(`{Backspace}`),await k(t).toHaveValue(`(55`)}},V={play:async({args:e,canvasElement:t})=>{let n=N(t).getByRole(`textbox`,{name:`Phone number`});await j.click(n),await j.paste(`555-123-4567`),await k(n).toHaveValue(`(555) 123-4567`),await k(I(e.onChange)).toBe(`(555) 123-4567`)}},H={play:async({args:e,canvasElement:t})=>{let n=N(t).getByRole(`textbox`,{name:`Phone number`});await j.click(n),await j.paste(`+1 (555) 123-4567`),await k(n).toHaveValue(`(555) 123-4567`),await k(I(e.onChange)).toBe(`(555) 123-4567`)}},U={render:e=>(0,O.jsxs)(m.Root,{children:[(0,O.jsx)(m.Text,{children:`+1`}),(0,O.jsx)(T,{...e,autoComplete:`tel-national`,placeholder:`(555) 000-0000`})]}),play:async({canvasElement:e})=>{let t=N(e),n=t.getByRole(`textbox`,{name:`Phone number`});await k(t.getByText(`+1`)).toBeInTheDocument(),await j.type(n,`5551234567`),await k(n).toHaveValue(`(555) 123-4567`)}},W={render:()=>(0,O.jsxs)(ie,{children:[(0,O.jsx)(c,{children:`Phone number`}),(0,O.jsx)(T,{}),(0,O.jsx)(u.Description,{children:`We only call about your account.`})]}),play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`,{name:`Phone number`});await k(t).toHaveAccessibleDescription(`We only call about your account.`),await j.type(t,`5551234567`),await k(t).toHaveValue(`(555) 123-4567`)}},K={render:function(e){let{register:t,handleSubmit:n}=h({defaultValues:{phone:``}});return(0,O.jsxs)(`form`,{"aria-label":`Contact`,noValidate:!0,onSubmit:n(e=>{G=e}),style:{display:`grid`,gap:`1rem`},children:[(0,O.jsx)(T,{"aria-label":e[`aria-label`],...t(`phone`)}),(0,O.jsx)(o,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{let t=N(e),n=t.getByRole(`textbox`,{name:`Phone number`});await j.type(n,`5551234567`),await j.click(t.getByRole(`button`,{name:`Save`})),await M(()=>k(G?.phone).toBe(`(555) 123-4567`))}},q={tags:[`!manifest`],render:function(e){let{register:t}=h({defaultValues:{phone:`(555) 123-4567`}});return(0,O.jsx)(T,{"aria-label":e[`aria-label`],...t(`phone`)})},play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`,{name:`Phone number`});await k(t).toHaveValue(`(555) 123-4567`),await j.type(t,`9`,{initialSelectionStart:2,initialSelectionEnd:2}),await k(t).toHaveValue(`(595) 512-3456`),await M(()=>k(t.selectionStart).toBe(3))}},J={tags:[`!manifest`],render:e=>(0,O.jsx)(f,{value:{onChange:e.onChange},children:(0,O.jsx)(T,{"aria-label":e[`aria-label`]})}),play:async({args:e,canvasElement:t})=>{let n=N(t).getByRole(`textbox`,{name:`Phone number`});await j.type(n,`5551234567`),await k(n).toHaveValue(`(555) 123-4567`),await k(I(e.onChange)).toBe(`(555) 123-4567`),await k(e.onChange).toHaveBeenCalledTimes(10)}},Y={args:{disabled:!0,defaultValue:`(555) 123-4567`},play:async({canvasElement:e})=>{let t=N(e);await k(t.getByRole(`textbox`,{name:`Phone number`})).toBeDisabled()}},X={args:{"aria-invalid":!0,"aria-describedby":`phone-error`,defaultValue:`(555) 12`},render:e=>(0,O.jsxs)(`div`,{style:{display:`grid`,gap:`0.5rem`},children:[(0,O.jsx)(T,{...e}),(0,O.jsx)(`span`,{id:`phone-error`,children:`Enter a 10-digit phone number.`})]}),play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`,{name:`Phone number`});await k(t).toBeInvalid(),await k(t).toHaveAccessibleDescription(`Enter a 10-digit phone number.`)}},Z={render:e=>(0,O.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,O.jsx)(T,{...e,size:`sm`,"aria-label":`Small`,defaultValue:`(555) 123-4567`}),(0,O.jsx)(T,{...e,size:`md`,"aria-label":`Medium`,defaultValue:`(555) 123-4567`}),(0,O.jsx)(T,{...e,size:`lg`,"aria-label":`Large`,defaultValue:`(555) 123-4567`})]}),play:async({canvasElement:e})=>{let t=F(e).map(e=>e.getBoundingClientRect().height);await k(t).toEqual([32,40,48])}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(input).toHaveAttribute('type', 'tel');
    await userEvent.type(input, '5551234567');
    await expect(input).toHaveValue('(555) 123-4567');
    await expect(lastValue(args.onChange)).toBe('(555) 123-4567');
  }
}`,...L.parameters?.docs?.source},description:{story:"An uncontrolled phone field. Typing the ten digits lays them out as\n`(555) 123-4567`, and every `onChange` call carries the masked text in\n`event.target.value`.\n\n@summary Phone field masking the digits as they are typed",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`A controlled phone field. The state that owns the value stores what
\`event.target.value\` reports, which is already masked, and the input shows
it back unchanged. A partial number carries the separator that comes before
the next digit, so six digits read \`(555) 123-\`.

@summary Controlled phone field storing the masked value`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Editing in the middle of a full number: a digit typed after \`(5\` shifts the
rest right, the eleventh digit falls off the end and the caret stays after
the digit just typed instead of jumping to the end.

@summary Caret staying put when a digit is inserted mid-number`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Backspace over the mask's own characters: after `555` the field shows\n`(555) `, and deleting backwards trims the separators along with the digit\nunder the caret instead of leaving a dangling `) `.\n\n@summary Backspace trimming the separators the mask added",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"A pasted number in any format is reduced to its digits and masked, so\n`555-123-4567` from a clipboard ends up as `(555) 123-4567`.\n\n@summary Pasted number reduced to its digits and masked",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"A number that carries the `+1` country code, as copied from a signature or\nfilled in by the browser's autofill, loses the code and keeps its ten\nnational digits: `+1 (555) 123-4567` ends up as `(555) 123-4567`.\n\n@summary Pasted number with a +1 country code",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <InputGroup.Root>
            <InputGroup.Text>+1</InputGroup.Text>
            <InputTel {...args} autoComplete="tel-national" placeholder="(555) 000-0000" />
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(canvas.getByText('+1')).toBeInTheDocument();
    await userEvent.type(input, '5551234567');
    await expect(input).toHaveValue('(555) 123-4567');
  }
}`,...U.parameters?.docs?.source},description:{story:"The usual US phone layout: an `InputGroup` frame with a `+1` prefix in front\nof the masked input. The prefix is decoration, so the value stays\n`(555) 123-4567`.\n\n@summary Country prefix beside the masked input in an InputGroup",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` the input takes its label, description and states from
the field, and the masked value still reaches a handler the field provides.

@summary Label and description reaching the input through the field`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      register,
      handleSubmit
    } = useForm<ContactValues>({
      defaultValues: {
        phone: ''
      }
    });
    return <form aria-label="Contact" noValidate onSubmit={handleSubmit(values => {
      submitted = values;
    })} style={{
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
    await waitFor(() => expect(submitted?.phone).toBe('(555) 123-4567'));
  }
}`,...K.parameters?.docs?.source},description:{story:"Registered with react-hook-form, the form receives the masked value: the\n`register` handler reads `event.target.value` like any other change.\n\n@summary Masked value reaching react-hook-form through register",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: react-hook-form writes the
default value straight into the DOM after mount, and the first edit in the
middle of it still keeps the caret after the digit just typed.

@summary Caret staying put on a value react-hook-form wrote`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: a handler handed down through
\`InputContext\` runs once per keystroke, after the mask, so it reads the
masked value too.

@summary Context handler called once per key with the masked value`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`A disabled phone field keeps its masked value and takes no input.

@summary Disabled phone field`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    'aria-describedby': 'phone-error',
    defaultValue: '(555) 12'
  },
  render: args => <div style={{
    display: 'grid',
    gap: '0.5rem'
  }}>
            <InputTel {...args} />
            <span id="phone-error">Enter a 10-digit phone number.</span>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Phone number'
    });
    await expect(input).toBeInvalid();
    await expect(input).toHaveAccessibleDescription('Enter a 10-digit phone number.');
  }
}`,...X.parameters?.docs?.source},description:{story:"`aria-invalid` paints the destructive border; point `aria-describedby` at\nthe message so both are read together.\n\n@summary Invalid phone field with its error message",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
    const heights = getInputs(canvasElement).map(input => input.getBoundingClientRect().height);
    await expect(heights).toEqual([32, 40, 48]);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The three sizes match Input's: the control is 32, 40 or 48px tall.

@summary The three sizes side by side`,...Z.parameters?.docs?.description}}},Q=[`Default`,`Controlled`,`CaretInTheMiddle`,`BackspaceOverMaskCharacters`,`Paste`,`PasteWithCountryCode`,`InsideInputGroup`,`InsideFieldText`,`WithReactHookForm`,`WithReactHookFormDefaultValue`,`WithInputContext`,`Disabled`,`Invalid`,`AllSizes`]})))()}$();export{Z as AllSizes,B as BackspaceOverMaskCharacters,z as CaretInTheMiddle,R as Controlled,L as Default,Y as Disabled,W as InsideFieldText,U as InsideInputGroup,X as Invalid,V as Paste,H as PasteWithCountryCode,J as WithInputContext,K as WithReactHookForm,q as WithReactHookFormDefaultValue,Q as __namedExportsOrder,P as default};