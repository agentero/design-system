import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-WZ1_VgH3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,r as a,t as o}from"./eye-zDaJGxWT.js";import{n as s,t as c}from"./dist-C8AlzbfS.js";import{n as l,t as u}from"./button-FI5QRdPH.js";import{n as d,t as f}from"./label-BWEVtOdO.js";import{n as p,t as m}from"./field-DVZD3Vlg.js";import{n as h,t as g}from"./input-BBsqoCkb.js";import{n as _,t as v}from"./input-group-CdL3IpxL.js";import{n as y,t as b}from"./field-text-CrJjasur.js";var x,S,C,w;function T(){return(T=e((()=>{x=t(),i(),r(),c(),l(),h(),_(),S=n(),C=s({slots:{toggle:`group-has-[input:disabled]/input-group:hidden`,button:`text-icon-input-default [&_svg]:mx-0`},variants:{size:{sm:{toggle:`-me-2.25`,button:`rounded-sm [&_svg]:size-5`},md:{toggle:`-me-2.25`,button:`rounded-sm [&_svg]:size-5`},lg:{toggle:`-me-1.25`,button:`[&_svg]:size-5`}}},defaultVariants:{size:`md`}}),w=({className:e,size:t,...n})=>{let[r,i]=(0,x.useState)(`password`),s=r===`password`,c=C({size:t});return(0,S.jsxs)(v.Root,{"data-slot":`input-password`,className:e,children:[(0,S.jsx)(g,{...n,size:t,type:r}),(0,S.jsx)(v.Addon,{className:c.toggle(),children:(0,S.jsx)(u,{type:`button`,variant:`ghost`,iconOnly:!0,size:t===`sm`?`xs`:`sm`,className:c.button(),"aria-label":s?`Show password`:`Hide password`,onMouseDown:e=>e.preventDefault(),onClick:()=>i(s?`text`:`password`),children:s?(0,S.jsx)(o,{}):(0,S.jsx)(a,{})})})]})},w.displayName=`InputPassword`;try{C.displayName=`inputPasswordRecipe`,C.__docgenInfo={description:"Style recipe for InputPassword. Slots: `toggle` (the addon holding the\nbutton) and `button`. The `size` variant follows the input's: the button is\n24px at `sm` and 32px above, the icon 16, 20 or 24px, and a negative end\nmargin pulls the addon into the frame's padding so the button sits as far\nfrom the right edge as from the top and bottom (4px, 8px at `lg`).",displayName:`inputPasswordRecipe`,filePath:`/home/runner/work/design-system/design-system/src/input-password/input-password.tsx`,methods:[],props:{size:{defaultValue:null,description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "md" | "lg"`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the InputPassword toggle`}}}catch{}try{w.displayName=`InputPassword`,w.__docgenInfo={description:'InputPassword is a password field with a show/hide toggle at the end of its\nframe. The value starts hidden; the toggle reveals it as plain text and\nhides it again. Its accessible name reads "Show password" or "Hide\npassword", depending on what the next press does. Pressing the toggle keeps\nfocus and the caret in the input. The toggle is not rendered while the input\nis disabled, whether `disabled` comes from the prop, from a surrounding\n`FieldText` or from a `<fieldset disabled>`.\n\nIt is an [Input](?path=/docs/components-input--docs) inside an\n[InputGroup](?path=/docs/components-inputgroup--docs) frame. `className`\nstyles the frame. Every other prop goes to the `<input>`: the `ref`, `id`,\n`name`, `value`, `onChange`, `aria-*` and every other standard attribute,\nsuch as `autoComplete`, `required` or `maxLength`. Only `type` is not\naccepted, because the toggle owns it. Inside a `FieldText` the input takes\nits label, messages and states from the field as a plain `Input` does. The\ninvalid state comes from `aria-invalid`, and the frame paints the\ndestructive border. Set `autoComplete` to `current-password` on sign-in and\n`new-password` when the user picks one, so password managers fill the right\nvalue.\n\nDo not use it for text that is not secret; use `Input` instead. A one-time\ncode is an `Input` with `autoComplete="one-time-code"`, not a password.',displayName:`InputPassword`,filePath:`/home/runner/work/design-system/design-system/src/input-password/input-password.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}},tags:{summary:`Password input with a show/hide toggle inside the frame`,dataAttribute:`{string} data-slot - Always set to "input-password" on the frame`,example:`<FieldText required>
  <Label>Password</Label>
  <InputPassword name="password" autoComplete="current-password" />
</FieldText>`}}}catch{}})))()}var E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{p(),y(),d(),T(),E=n(),{expect:D,userEvent:O,within:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/InputPassword`,component:w,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Password`,autoComplete:`current-password`},decorators:[e=>(0,E.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,E.jsx)(e,{})})],parameters:{docs:{description:{component:"InputPassword is a password field with a show/hide toggle at the end of its\nframe. It is an `Input` inside an `InputGroup`: `className` styles the\nframe and every other prop reaches the `<input>`, which takes its label,\nmessages and states from a surrounding `FieldText`. The toggle is not\nrendered while the input is disabled."}}}},j=e=>Array.from(e.querySelectorAll(`[data-slot="input-password"]`)),M={play:async({canvasElement:e})=>{let t=k(e),n=t.getByLabelText(`Password`);await D(n).toHaveAttribute(`type`,`password`),await O.type(n,`correct horse`),await O.click(t.getByRole(`button`,{name:`Show password`})),await D(n).toHaveAttribute(`type`,`text`),await D(n).toHaveFocus(),await D(n).toHaveValue(`correct horse`),await D(t.getByRole(`button`,{name:`Hide password`})).toBeInTheDocument(),await O.click(t.getByRole(`button`,{name:`Hide password`})),await D(n).toHaveAttribute(`type`,`password`),await D(n).toHaveFocus()}},N={render:e=>(0,E.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,E.jsx)(w,{...e,disabled:!0,defaultValue:`hunter22`}),(0,E.jsx)(`fieldset`,{disabled:!0,style:{border:0,margin:0,padding:0},children:(0,E.jsx)(w,{...e,"aria-label":`New password`,autoComplete:`new-password`})})]}),play:async({canvasElement:e})=>{let t=k(e);await D(t.getByLabelText(`Password`)).toBeDisabled(),await D(t.getByLabelText(`New password`)).toBeDisabled(),await D(t.queryByRole(`button`)).not.toBeInTheDocument()}},P={render:e=>(0,E.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,E.jsx)(w,{...e,"aria-label":`Valid password`,defaultValue:`hunter22`}),(0,E.jsxs)(b,{invalid:!0,children:[(0,E.jsx)(f,{children:`Password`}),(0,E.jsx)(w,{autoComplete:`new-password`,defaultValue:`hunter`}),(0,E.jsx)(m.Error,{errors:[{message:`Use at least 8 characters.`}]})]})]}),play:async({canvasElement:e})=>{let t=k(e).getByLabelText(`Password`),[n,r]=j(e);await D(t).toHaveAttribute(`aria-invalid`,`true`),await D(t).toHaveAccessibleDescription(`Use at least 8 characters.`),await D(getComputedStyle(r).borderColor).not.toBe(getComputedStyle(n).borderColor)}},F={render:e=>(0,E.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,E.jsx)(w,{...e,size:`sm`,"aria-label":`Small`}),(0,E.jsx)(w,{...e,size:`md`,"aria-label":`Medium`}),(0,E.jsx)(w,{...e,size:`lg`,"aria-label":`Large`})]}),play:async({canvasElement:e})=>{let t=j(e).map(e=>{let t=e.getBoundingClientRect(),n=e.querySelector(`button`).getBoundingClientRect(),r=e.querySelector(`button svg`).getBoundingClientRect();return{frame:t.height,button:n.height,icon:r.height,top:n.top-t.top,bottom:t.bottom-n.bottom,right:t.right-n.right}});await D(t).toEqual([{frame:32,button:24,icon:20,top:4,bottom:4,right:4},{frame:40,button:32,icon:20,top:4,bottom:4,right:4},{frame:48,button:32,icon:20,top:8,bottom:8,right:8}])}},I={render:()=>(0,E.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,E.jsxs)(b,{required:!0,children:[(0,E.jsx)(f,{children:`Password`}),(0,E.jsx)(w,{autoComplete:`new-password`}),(0,E.jsx)(m.Description,{children:`At least 8 characters.`})]}),(0,E.jsxs)(b,{disabled:!0,children:[(0,E.jsx)(f,{children:`Current password`}),(0,E.jsx)(w,{autoComplete:`current-password`,defaultValue:`hunter22`})]})]}),play:async({canvasElement:e})=>{let t=k(e),n=t.getByLabelText(/^Password/),r=t.getByLabelText(`Current password`);await D(n).toBeRequired(),await D(n).toHaveAccessibleDescription(`At least 8 characters.`),await D(t.getByRole(`button`,{name:`Show password`})).toBeInTheDocument(),await D(r).toBeDisabled(),await D(t.getAllByRole(`button`)).toHaveLength(1)}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Password');
    await expect(input).toHaveAttribute('type', 'password');
    await userEvent.type(input, 'correct horse');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show password'
    }));
    await expect(input).toHaveAttribute('type', 'text');
    await expect(input).toHaveFocus();
    await expect(input).toHaveValue('correct horse');
    await expect(canvas.getByRole('button', {
      name: 'Hide password'
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Hide password'
    }));
    await expect(input).toHaveAttribute('type', 'password');
    await expect(input).toHaveFocus();
  }
}`,...M.parameters?.docs?.source},description:{story:`The value starts hidden. The toggle shows it as plain text and hides it
again; pressing it leaves focus and the caret in the input.

@summary Hidden value with a toggle that reveals and hides it`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <InputPassword {...args} disabled defaultValue="hunter22" />
            <fieldset disabled style={{
      border: 0,
      margin: 0,
      padding: 0
    }}>
                <InputPassword {...args} aria-label="New password" autoComplete="new-password" />
            </fieldset>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Password')).toBeDisabled();
    await expect(canvas.getByLabelText('New password')).toBeDisabled();
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
  }
}`,...N.parameters?.docs?.source},description:{story:"A disabled input has no toggle, whether `disabled` is set on the input\nitself or comes from a `<fieldset disabled>` around it.\n\n@summary Disabled input with the toggle removed",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1.5rem'
  }}>
            <InputPassword {...args} aria-label="Valid password" defaultValue="hunter22" />
            <FieldText invalid>
                <Label>Password</Label>
                <InputPassword autoComplete="new-password" defaultValue="hunter" />
                <Field.Error errors={[{
        message: 'Use at least 8 characters.'
      }]} />
            </FieldText>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Password');
    const [valid, invalid] = getFrames(canvasElement) as [HTMLElement, HTMLElement];
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('Use at least 8 characters.');
    await expect(getComputedStyle(invalid).borderColor).not.toBe(getComputedStyle(valid).borderColor);
  }
}`,...P.parameters?.docs?.source},description:{story:"`invalid` on the surrounding `FieldText` sets `aria-invalid` on the input,\nwhich paints the frame's destructive border, and `Field.Error` is announced\nwith the input.\n\n@summary Invalid field driving the frame's destructive border",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <InputPassword {...args} size="sm" aria-label="Small" />
            <InputPassword {...args} size="md" aria-label="Medium" />
            <InputPassword {...args} size="lg" aria-label="Large" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const measures = getFrames(canvasElement).map(frame => {
      const box = frame.getBoundingClientRect();
      const button = frame.querySelector('button')!.getBoundingClientRect();
      const icon = frame.querySelector('button svg')!.getBoundingClientRect();
      return {
        frame: box.height,
        button: button.height,
        icon: icon.height,
        top: button.top - box.top,
        bottom: box.bottom - button.bottom,
        right: box.right - button.right
      };
    });
    await expect(measures).toEqual([{
      frame: 32,
      button: 24,
      icon: 20,
      top: 4,
      bottom: 4,
      right: 4
    }, {
      frame: 40,
      button: 32,
      icon: 20,
      top: 4,
      bottom: 4,
      right: 4
    }, {
      frame: 48,
      button: 32,
      icon: 20,
      top: 8,
      bottom: 8,
      right: 8
    }]);
  }
}`,...F.parameters?.docs?.source},description:{story:"The three sizes match Input's: the frame is 32, 40 or 48px tall. The toggle\nicon is 20px at every size, like the other input icons; its button grows\nwith the frame (24px at `sm`, 32px at `md` and `lg`) and sits as far from\nthe right edge as from the top and bottom.\n\n@summary The three sizes, with the toggle scaled and evenly inset",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1.5rem'
  }}>
            <FieldText required>
                <Label>Password</Label>
                <InputPassword autoComplete="new-password" />
                <Field.Description>At least 8 characters.</Field.Description>
            </FieldText>
            <FieldText disabled>
                <Label>Current password</Label>
                <InputPassword autoComplete="current-password" defaultValue="hunter22" />
            </FieldText>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/^Password/);
    const disabled = canvas.getByLabelText('Current password');
    await expect(input).toBeRequired();
    await expect(input).toHaveAccessibleDescription('At least 8 characters.');
    await expect(canvas.getByRole('button', {
      name: 'Show password'
    })).toBeInTheDocument();
    await expect(disabled).toBeDisabled();
    await expect(canvas.getAllByRole('button')).toHaveLength(1);
  }
}`,...I.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` the input takes its label, description and states from
the field through the frame. A disabled field removes the toggle too.

@summary Label and disabled state reaching the input through the frame`,...I.parameters?.docs?.description}}},L=[`Default`,`Disabled`,`Invalid`,`AllSizes`,`InsideFieldText`]})))()}R();export{F as AllSizes,M as Default,N as Disabled,I as InsideFieldText,P as Invalid,L as __namedExportsOrder,A as default};