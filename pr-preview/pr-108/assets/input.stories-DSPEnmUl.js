import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./input-D84gv-Vy.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{n(),i=t(),{expect:a,userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Input`,component:r,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`,`date`,`time`]},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{type:`text`,placeholder:`Insert value`,"aria-label":`Value`},parameters:{docs:{description:{component:"Input is the base single-line text control. It is intentionally unaware of\nform fields and form libraries: `id`, `aria-invalid` and `aria-describedby`\nare plain props, set by a field wrapper or by hand.\n\nThere is no `status` prop. Mark the control `aria-invalid` and the\ndestructive border follows, so the styling can never disagree with what\nassistive technology announces."}}}},l={play:async({canvasElement:e})=>{let t=s(e).getByRole(`textbox`,{name:`Value`});await o.type(t,`Typed by the user`),await a(t).toHaveValue(`Typed by the user`)}},u={args:{size:`sm`}},d={args:{size:`md`}},f={args:{size:`lg`}},p={render:e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`20rem`},children:[(0,i.jsx)(r,{...e,size:`sm`,"aria-label":`Small input`,placeholder:`sm — 32px`}),(0,i.jsx)(r,{...e,size:`md`,"aria-label":`Medium input`,placeholder:`md — 40px`}),(0,i.jsx)(r,{...e,size:`lg`,"aria-label":`Large input`,placeholder:`lg — 48px`})]})},m={render:e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`20rem`},children:[(0,i.jsx)(r,{...e,type:`text`,"aria-label":`Text`,placeholder:`Text`}),(0,i.jsx)(r,{...e,type:`email`,"aria-label":`Email address`,placeholder:`you@example.com`}),(0,i.jsx)(r,{...e,type:`password`,"aria-label":`Password`,placeholder:`Password`}),(0,i.jsx)(r,{...e,type:`number`,"aria-label":`Amount`,placeholder:`0`}),(0,i.jsx)(r,{...e,type:`date`,"aria-label":`Date`,placeholder:``})]})},h={args:{type:`email`,"aria-label":`Email`,"aria-invalid":!0,"aria-describedby":`email-error`,defaultValue:`not-an-email`},render:e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`0.25rem`,maxWidth:`20rem`},children:[(0,i.jsx)(r,{...e}),(0,i.jsx)(`span`,{id:`email-error`,children:`Enter a valid email address.`})]}),play:async({canvasElement:e})=>{let t=s(e).getByRole(`textbox`,{name:`Email`});await a(t).toHaveAttribute(`aria-invalid`,`true`),await a(t).toHaveAccessibleDescription(`Enter a valid email address.`)}},g={args:{disabled:!0,defaultValue:`Cannot be edited`},play:async({canvasElement:e})=>{let t=s(e).getByRole(`textbox`,{name:`Value`});await a(t).toBeDisabled(),await o.type(t,`nope`),await a(t).toHaveValue(`Cannot be edited`)}},_={args:{readOnly:!0,defaultValue:`Copy me, but do not change me`},play:async({canvasElement:e})=>{let t=s(e).getByRole(`textbox`,{name:`Value`});await a(t).toHaveAttribute(`readonly`),await a(t).not.toBeDisabled()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Value'
    });
    await userEvent.type(input, 'Typed by the user');
    await expect(input).toHaveValue('Typed by the user');
  }
}`,...l.parameters?.docs?.source},description:{story:`The default control at \`md\`, usable anywhere without a surrounding field.

@summary Default standalone input`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...u.parameters?.docs?.source},description:{story:`\`sm\` (32px) keeps dense layouts compact where vertical space is tight.

@summary Small 32px control for dense layouts`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...d.parameters?.docs?.source},description:{story:`\`md\` (40px) is the default and covers standard form density.

@summary Medium 40px control, the default`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...f.parameters?.docs?.source},description:{story:"`lg` (48px) suits low-density forms and larger touch targets. It also raises\nthe text to `base` and the corner radius to `lg`.\n\n@summary Large 48px control for low-density forms",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem',
    maxWidth: '20rem'
  }}>
            <Input {...args} size="sm" aria-label="Small input" placeholder="sm — 32px" />
            <Input {...args} size="md" aria-label="Medium input" placeholder="md — 40px" />
            <Input {...args} size="lg" aria-label="Large input" placeholder="lg — 48px" />
        </div>
}`,...p.parameters?.docs?.source},description:{story:`All three heights together for visual comparison.

@summary Visual comparison of the three input sizes`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem',
    maxWidth: '20rem'
  }}>
            <Input {...args} type="text" aria-label="Text" placeholder="Text" />
            <Input {...args} type="email" aria-label="Email address" placeholder="you@example.com" />
            <Input {...args} type="password" aria-label="Password" placeholder="Password" />
            <Input {...args} type="number" aria-label="Amount" placeholder="0" />
            <Input {...args} type="date" aria-label="Date" placeholder="" />
        </div>
}`,...m.parameters?.docs?.source},description:{story:`A range of input types. The type picks the on-screen keyboard on touch
devices and the browser's own parsing, so set it even when you validate
yourself.

@summary Common input types side by side`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    'aria-label': 'Email',
    'aria-invalid': true,
    'aria-describedby': 'email-error',
    defaultValue: 'not-an-email'
  },
  render: args => <div style={{
    display: 'grid',
    gap: '0.25rem',
    maxWidth: '20rem'
  }}>
            <Input {...args} />
            <span id="email-error">Enter a valid email address.</span>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Email'
    });
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('Enter a valid email address.');
  }
}`,...h.parameters?.docs?.source},description:{story:`The invalid treatment comes purely from \`aria-invalid\`, so the border can
never disagree with what assistive technology announces. Point
\`aria-describedby\` at the message so it is read out with the control.

@summary Invalid state driven by aria-invalid`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Cannot be edited'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Value'
    });
    await expect(input).toBeDisabled();
    await userEvent.type(input, 'nope');
    await expect(input).toHaveValue('Cannot be edited');
  }
}`,...g.parameters?.docs?.source},description:{story:`A disabled input keeps its value readable but blocks interaction, drops its
shadow and leaves the tab order.

@summary Disabled state`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'Copy me, but do not change me'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Value'
    });
    await expect(input).toHaveAttribute('readonly');
    await expect(input).not.toBeDisabled();
  }
}`,..._.parameters?.docs?.source},description:{story:`Read-only inputs stay focusable and copyable and still submit their value —
reach for this over \`disabled\` when the user needs to read or copy something
they cannot change.

@summary Read-only value that stays focusable and copyable`,..._.parameters?.docs?.description}}},v=[`Default`,`Small`,`Medium`,`Large`,`AllSizes`,`Types`,`Invalid`,`Disabled`,`ReadOnly`]}))();export{p as AllSizes,l as Default,g as Disabled,h as Invalid,f as Large,d as Medium,_ as ReadOnly,u as Small,m as Types,v as __namedExportsOrder,c as default};