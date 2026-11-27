import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./label-DTaTKzml.js";import{n as i,t as a}from"./field-CmFisSk4.js";import{n as o,t as s}from"./field-text-Cm-LJnBt.js";import{n as c,t as l}from"./input-password-CsbZHI8E.js";var u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{i(),o(),n(),c(),u=t(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/InputPassword`,component:l,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Password`,autoComplete:`current-password`},decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,u.jsx)(e,{})})],parameters:{docs:{description:{component:"InputPassword is a password field with a show/hide toggle at the end of its\nframe. It is an `Input` inside an `InputGroup`: `className` styles the\nframe and every other prop reaches the `<input>`, which takes its label,\nmessages and states from a surrounding `FieldText`. The toggle is not\nrendered while the input is disabled."}}}},h=e=>Array.from(e.querySelectorAll(`[data-slot="input-password"]`)),g={play:async({canvasElement:e})=>{let t=p(e),n=t.getByLabelText(`Password`);await d(n).toHaveAttribute(`type`,`password`),await f.type(n,`correct horse`),await f.click(t.getByRole(`button`,{name:`Show password`})),await d(n).toHaveAttribute(`type`,`text`),await d(n).toHaveFocus(),await d(n).toHaveValue(`correct horse`),await d(t.getByRole(`button`,{name:`Hide password`})).toBeInTheDocument(),await f.click(t.getByRole(`button`,{name:`Hide password`})),await d(n).toHaveAttribute(`type`,`password`),await d(n).toHaveFocus()}},_={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,u.jsx)(l,{...e,disabled:!0,defaultValue:`hunter22`}),(0,u.jsx)(`fieldset`,{disabled:!0,style:{border:0,margin:0,padding:0},children:(0,u.jsx)(l,{...e,"aria-label":`New password`,autoComplete:`new-password`})})]}),play:async({canvasElement:e})=>{let t=p(e);await d(t.getByLabelText(`Password`)).toBeDisabled(),await d(t.getByLabelText(`New password`)).toBeDisabled(),await d(t.queryByRole(`button`)).not.toBeInTheDocument()}},v={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,u.jsx)(l,{...e,"aria-label":`Valid password`,defaultValue:`hunter22`}),(0,u.jsxs)(s,{invalid:!0,children:[(0,u.jsx)(r,{children:`Password`}),(0,u.jsx)(l,{autoComplete:`new-password`,defaultValue:`hunter`}),(0,u.jsx)(a.Error,{errors:[{message:`Use at least 8 characters.`}]})]})]}),play:async({canvasElement:e})=>{let t=p(e).getByLabelText(`Password`),[n,r]=h(e);await d(t).toHaveAttribute(`aria-invalid`,`true`),await d(t).toHaveAccessibleDescription(`Use at least 8 characters.`),await d(getComputedStyle(r).borderColor).not.toBe(getComputedStyle(n).borderColor)}},y={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,u.jsx)(l,{...e,size:`sm`,"aria-label":`Small`}),(0,u.jsx)(l,{...e,size:`md`,"aria-label":`Medium`}),(0,u.jsx)(l,{...e,size:`lg`,"aria-label":`Large`})]}),play:async({canvasElement:e})=>{let t=h(e).map(e=>{let t=e.getBoundingClientRect(),n=e.querySelector(`button`).getBoundingClientRect(),r=e.querySelector(`button svg`).getBoundingClientRect();return{frame:t.height,button:n.height,icon:r.height,top:n.top-t.top,bottom:t.bottom-n.bottom,right:t.right-n.right}});await d(t).toEqual([{frame:32,button:24,icon:20,top:4,bottom:4,right:4},{frame:40,button:32,icon:20,top:4,bottom:4,right:4},{frame:48,button:32,icon:20,top:8,bottom:8,right:8}])}},b={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,u.jsxs)(s,{required:!0,children:[(0,u.jsx)(r,{children:`Password`}),(0,u.jsx)(l,{autoComplete:`new-password`}),(0,u.jsx)(a.Description,{children:`At least 8 characters.`})]}),(0,u.jsxs)(s,{disabled:!0,children:[(0,u.jsx)(r,{children:`Current password`}),(0,u.jsx)(l,{autoComplete:`current-password`,defaultValue:`hunter22`})]})]}),play:async({canvasElement:e})=>{let t=p(e),n=t.getByLabelText(/^Password/),r=t.getByLabelText(`Current password`);await d(n).toBeRequired(),await d(n).toHaveAccessibleDescription(`At least 8 characters.`),await d(t.getByRole(`button`,{name:`Show password`})).toBeInTheDocument(),await d(r).toBeDisabled(),await d(t.getAllByRole(`button`)).toHaveLength(1)}},x=[`Default`,`Disabled`,`Invalid`,`AllSizes`,`InsideFieldText`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`The value starts hidden. The toggle shows it as plain text and hides it
again; pressing it leaves focus and the caret in the input.

@summary Hidden value with a toggle that reveals and hides it`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"A disabled input has no toggle, whether `disabled` is set on the input\nitself or comes from a `<fieldset disabled>` around it.\n\n@summary Disabled input with the toggle removed",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"`invalid` on the surrounding `FieldText` sets `aria-invalid` on the input,\nwhich paints the frame's destructive border, and `Field.Error` is announced\nwith the input.\n\n@summary Invalid field driving the frame's destructive border",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"The three sizes match Input's: the frame is 32, 40 or 48px tall. The toggle\nicon is 20px at every size, like the other input icons; its button grows\nwith the frame (24px at `sm`, 32px at `md` and `lg`) and sits as far from\nthe right edge as from the top and bottom.\n\n@summary The three sizes, with the toggle scaled and evenly inset",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` the input takes its label, description and states from
the field through the frame. A disabled field removes the toggle too.

@summary Label and disabled state reaching the input through the frame`,...b.parameters?.docs?.description}}}})))()}S();export{y as AllSizes,g as Default,_ as Disabled,b as InsideFieldText,v as Invalid,x as __namedExportsOrder,m as default};