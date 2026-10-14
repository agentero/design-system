import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CQ-q68Av.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i}from"./merge-props-BICvGTEv.js";import{n as a,t as o}from"./button-BnGkLuzX.js";import{n as s,t as c}from"./label-BxPVE1ba.js";import{n as ee,t as l}from"./field-D-f8ZqNp.js";import{a as u,i as d,n as te,o as f,t as ne}from"./input-DdoOcVdS.js";import{n as re,t as p}from"./input-group-CWBq5u89.js";import{n as ie,t as m}from"./field-text-33Msal5r.js";import{i as h,n as g}from"./index.esm-CKuCCfQ8.js";var _,v,y,b,x,S;function C(){return(C=e((()=>{_=`(...) ...-....`,v=e=>{let t=e.replace(/\D/g,``);return t.length>10&&t.startsWith(`1`)?t.slice(1):t},y=({value:e,mask:t,maskSymbol:n,trimNonMaskCharsLeftover:r=!1})=>{if(!e)return``;let i=``,a=0;for(let o of t.split(``)){if(a>=e.length){if(!r&&o!==n){i+=o;continue}break}o===n?(i+=e[a],a+=1):i+=o}return i},b=e=>e?/^\d+$/.test(e):!1,x=({phoneAfterInput:e,phoneAfterFormatted:t,cursorPositionAfterInput:n,deletion:r})=>{let i=null;for(let t=n-1;t>=0;--t)if(b(e[t])){i=t;break}if(i===null){for(let n=0;n<e.length;n+=1)if(b(t[n]))return n;return e.length}let a=0;for(let t=0;t<i;t+=1)b(e[t])&&(a+=1);let o=0,s=0;for(let e=0;e<t.length&&(o+=1,b(t[e])&&(s+=1),!(s>=a+1));e+=1);if(r!==`backward`)for(;!b(t[o])&&o<t.length;)o+=1;return o},S=e=>{if(e?.toLocaleLowerCase().includes(`delete`)??!1)return e?.toLocaleLowerCase().includes(`forward`)?`forward`:`backward`}})))()}var w,T,E;function D(){return(D=e((()=>{w=t(),i(),te(),u(),re(),C(),T=n(),E=e=>{let{className:t,onChange:n,ref:i,...a}=f(e),o=(0,w.useRef)(null),s=(0,w.useMemo)(()=>r(o,i),[i]),c=e=>{let t=S(e.nativeEvent.inputType),{value:r,selectionStart:i}=e.target,a=y({value:v(r),mask:_,maskSymbol:`.`,trimNonMaskCharsLeftover:t===`backward`}),s=x({cursorPositionAfterInput:i??0,phoneAfterInput:r,phoneAfterFormatted:a,deletion:t});e.target.value=a;let c=()=>{let e=o.current;e&&e===document.activeElement&&e.setSelectionRange(s,s)};n?(n(e),Promise.resolve().then(c)):c()};return(0,T.jsxs)(p.Root,{"data-slot":`input-tel`,className:t,children:[(0,T.jsx)(p.Text,{children:`+1`}),(0,T.jsx)(d,{value:null,children:(0,T.jsx)(ne,{...a,type:`tel`,ref:s,onChange:c})})]})},E.displayName=`InputTel`;try{E.displayName=`InputTel`,E.__docgenInfo={description:'InputTel is a US phone number field that masks as you type: the digits the\nuser enters are laid out as `(555) 123-4567` while typing, pasting or\ndeleting, anything that is not a digit is dropped, and the caret stays next\nto the digit just edited instead of jumping to the end. A leading `+1`\ncountry code, as pasted or filled in by the browser\'s autofill, is dropped\ntoo; past that, the eleventh digit and beyond are ignored. `onChange`\nreceives the native change event with the masked text already in\n`event.target.value`, so a controlled field, an uncontrolled one and one\nregistered with react-hook-form all store `(555) 123-4567`, never the bare\ndigits.\n\nIt is an [Input](?path=/docs/components-input--docs) of `type="tel"` inside\nan [InputGroup](?path=/docs/components-inputgroup--docs) frame that always\nshows a `+1` prefix in front of the number. The prefix is part of the frame,\nnot of the value. `className` styles the frame. Every other prop goes to the\n`<input>`: the `ref`, `id`, `name`, `value`, `onChange`, `aria-*` and every\nother standard attribute, such as `placeholder`, `autoComplete` or\n`required`. Only `type` is not accepted. Inside a `FieldText` the input\ntakes its label, messages and states from the field as a plain `Input` does.\nThe invalid state comes from `aria-invalid`, and the frame paints the\ndestructive border.\n\nDo not use it for international numbers or extensions; the mask only knows\nthe ten-digit US format. For free-form text that happens to hold a number,\nuse `Input`.',displayName:`InputTel`,filePath:`/home/runner/work/design-system/design-system/src/input-tel/input-tel.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}}},tags:{summary:`US phone input with a +1 prefix that masks as you type`,dataAttribute:`{string} data-slot - Always set to "input-tel" on the frame`,example:`<FieldText>
  <Label>Phone number</Label>
  <InputTel name="phone" autoComplete="tel-national" placeholder="(555) 000-0000" />
</FieldText>`}}}catch{}})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{O=t(),g(),a(),ee(),ie(),u(),s(),D(),k=n(),{expect:A,fn:j,userEvent:M,waitFor:N,within:P}=__STORYBOOK_MODULE_TEST__,F={title:`Components/InputTel`,component:E,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Phone number`,onChange:j(e=>e.target.value)},decorators:[e=>(0,k.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,k.jsx)(e,{})})],parameters:{docs:{description:{component:'InputTel is a US phone number field that masks as you type: the digits are\nlaid out as `(555) 123-4567`, anything else is dropped and the caret stays\nnext to the digit just edited. It is an `Input` of `type="tel"` inside an\n`InputGroup` frame with a `+1` prefix; `onChange` receives the native event\nwith the masked text already in `event.target.value`.'}}}},I=e=>Array.from(e.querySelectorAll(`[data-slot="input-tel"]`)),L=e=>e.mock.results.at(-1)?.value,R={play:async({args:e,canvasElement:t})=>{let n=P(t),r=n.getByRole(`textbox`,{name:`Phone number`});await A(r).toHaveAttribute(`type`,`tel`),await A(n.getByText(`+1`)).toBeInTheDocument(),await M.type(r,`5551234567`),await A(r).toHaveValue(`(555) 123-4567`),await A(L(e.onChange)).toBe(`(555) 123-4567`)}},z={render:function(e){let[t,n]=(0,O.useState)(``);return(0,k.jsx)(E,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})},play:async({args:e,canvasElement:t})=>{let n=P(t).getByRole(`textbox`,{name:`Phone number`});await M.type(n,`555123`),await A(n).toHaveValue(`(555) 123-`),await A(L(e.onChange)).toBe(`(555) 123-`)}},B={play:async({canvasElement:e})=>{let t=P(e).getByRole(`textbox`,{name:`Phone number`});await M.type(t,`5551234567`),await M.type(t,`9`,{initialSelectionStart:2,initialSelectionEnd:2}),await A(t).toHaveValue(`(595) 512-3456`),await N(()=>A(t.selectionStart).toBe(3))}},V={play:async({canvasElement:e})=>{let t=P(e).getByRole(`textbox`,{name:`Phone number`});await M.type(t,`555`),await A(t).toHaveValue(`(555) `),await M.keyboard(`{Backspace}`),await A(t).toHaveValue(`(555`),await M.keyboard(`{Backspace}`),await A(t).toHaveValue(`(55`)}},H={play:async({args:e,canvasElement:t})=>{let n=P(t).getByRole(`textbox`,{name:`Phone number`});await M.click(n),await M.paste(`555-123-4567`),await A(n).toHaveValue(`(555) 123-4567`),await A(L(e.onChange)).toBe(`(555) 123-4567`)}},U={play:async({args:e,canvasElement:t})=>{let n=P(t).getByRole(`textbox`,{name:`Phone number`});await M.click(n),await M.paste(`+1 (555) 123-4567`),await A(n).toHaveValue(`(555) 123-4567`),await A(L(e.onChange)).toBe(`(555) 123-4567`)}},W={render:()=>(0,k.jsxs)(m,{children:[(0,k.jsx)(c,{children:`Phone number`}),(0,k.jsx)(E,{}),(0,k.jsx)(l.Description,{children:`We only call about your account.`})]}),play:async({canvasElement:e})=>{let t=P(e).getByRole(`textbox`,{name:`Phone number`});await A(t).toHaveAccessibleDescription(`We only call about your account.`),await M.type(t,`5551234567`),await A(t).toHaveValue(`(555) 123-4567`)}},G=j(e=>e),K={beforeEach:()=>{G.mockClear()},render:function(e){let{register:t,handleSubmit:n}=h({defaultValues:{phone:``}});return(0,k.jsxs)(`form`,{"aria-label":`Contact`,noValidate:!0,onSubmit:n(e=>G(e)),style:{display:`grid`,gap:`1rem`},children:[(0,k.jsx)(E,{"aria-label":e[`aria-label`],...t(`phone`)}),(0,k.jsx)(o,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{let t=P(e),n=t.getByRole(`textbox`,{name:`Phone number`});await M.type(n,`5551234567`),await M.click(t.getByRole(`button`,{name:`Save`})),await N(()=>A(G).toHaveBeenCalledWith({phone:`(555) 123-4567`}))}},q={tags:[`!manifest`],render:function(e){let{register:t}=h({defaultValues:{phone:`(555) 123-4567`}});return(0,k.jsx)(E,{"aria-label":e[`aria-label`],...t(`phone`)})},play:async({canvasElement:e})=>{let t=P(e).getByRole(`textbox`,{name:`Phone number`});await A(t).toHaveValue(`(555) 123-4567`),await M.type(t,`9`,{initialSelectionStart:2,initialSelectionEnd:2}),await A(t).toHaveValue(`(595) 512-3456`),await N(()=>A(t.selectionStart).toBe(3))}},J={tags:[`!manifest`],render:e=>(0,k.jsx)(d,{value:{onChange:e.onChange},children:(0,k.jsx)(E,{"aria-label":e[`aria-label`]})}),play:async({args:e,canvasElement:t})=>{let n=P(t).getByRole(`textbox`,{name:`Phone number`});await M.type(n,`5551234567`),await A(n).toHaveValue(`(555) 123-4567`),await A(L(e.onChange)).toBe(`(555) 123-4567`),await A(e.onChange).toHaveBeenCalledTimes(10)}},Y={args:{disabled:!0,defaultValue:`(555) 123-4567`},play:async({canvasElement:e})=>{let t=P(e);await A(t.getByRole(`textbox`,{name:`Phone number`})).toBeDisabled()}},X={render:()=>(0,k.jsxs)(m,{invalid:!0,children:[(0,k.jsx)(c,{children:`Phone number`}),(0,k.jsx)(E,{defaultValue:`(555) 12`}),(0,k.jsx)(l.Error,{errors:[{message:`Enter a 10-digit phone number.`}]})]}),play:async({canvasElement:e})=>{let t=P(e).getByLabelText(`Phone number`);await A(t).toHaveAttribute(`aria-invalid`,`true`),await A(t).toHaveAccessibleDescription(`Enter a 10-digit phone number.`)}},Z={render:e=>(0,k.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,k.jsx)(E,{...e,size:`sm`,"aria-label":`Small`,defaultValue:`(555) 123-4567`}),(0,k.jsx)(E,{...e,size:`md`,"aria-label":`Medium`,defaultValue:`(555) 123-4567`}),(0,k.jsx)(E,{...e,size:`lg`,"aria-label":`Large`,defaultValue:`(555) 123-4567`})]}),play:async({canvasElement:e})=>{let t=I(e).map(e=>e.getBoundingClientRect().height);await A(t).toEqual([32,40,48])}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"An uncontrolled phone field with its `+1` prefix. Typing the ten digits lays\nthem out as `(555) 123-4567`, and every `onChange` call carries the masked\ntext in `event.target.value`; the prefix never enters the value.\n\n@summary Phone field with a +1 prefix masking the digits as they are typed",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`A controlled phone field. The state that owns the value stores what
\`event.target.value\` reports, which is already masked, and the input shows
it back unchanged. A partial number carries the separator that comes before
the next digit, so six digits read \`(555) 123-\`.

@summary Controlled phone field storing the masked value`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Editing in the middle of a full number: a digit typed after \`(5\` shifts the
rest right, the eleventh digit falls off the end and the caret stays after
the digit just typed instead of jumping to the end.

@summary Caret staying put when a digit is inserted mid-number`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"Backspace over the mask's own characters: after `555` the field shows\n`(555) `, and deleting backwards trims the separators along with the digit\nunder the caret instead of leaving a dangling `) `.\n\n@summary Backspace trimming the separators the mask added",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"A pasted number in any format is reduced to its digits and masked, so\n`555-123-4567` from a clipboard ends up as `(555) 123-4567`.\n\n@summary Pasted number reduced to its digits and masked",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"A number that carries the `+1` country code, as copied from a signature or\nfilled in by the browser's autofill, loses the code and keeps its ten\nnational digits: `+1 (555) 123-4567` ends up as `(555) 123-4567`.\n\n@summary Pasted number with a +1 country code",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"`invalid` on the surrounding `FieldText` sets `aria-invalid` on the input,\nwhich paints the frame's destructive border, and `Field.Error` is announced\nwith the input.\n\n@summary Invalid field driving the frame's destructive border",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`The three sizes match Input's: the frame is 32, 40 or 48px tall.

@summary The three sizes side by side`,...Z.parameters?.docs?.description}}},Q=[`Default`,`Controlled`,`CaretInTheMiddle`,`BackspaceOverMaskCharacters`,`Paste`,`PasteWithCountryCode`,`InsideFieldText`,`WithReactHookForm`,`WithReactHookFormDefaultValue`,`WithInputContext`,`Disabled`,`Invalid`,`AllSizes`]})))()}$();export{Z as AllSizes,V as BackspaceOverMaskCharacters,B as CaretInTheMiddle,z as Controlled,R as Default,Y as Disabled,W as InsideFieldText,X as Invalid,H as Paste,U as PasteWithCountryCode,J as WithInputContext,K as WithReactHookForm,q as WithReactHookFormDefaultValue,Q as __namedExportsOrder,F as default};