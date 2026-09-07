import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./input-DBUjEPCw.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),i=t(),{expect:a,userEvent:o,waitFor:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Input`,component:r,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`,`date`,`time`]},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{type:`text`,placeholder:`Insert value`,"aria-label":`Value`},parameters:{docs:{description:{component:"Input is the base single-line text control. When a container such as\n`FieldText` provides `InputContext`, it picks up `id`, `aria-invalid` and\n`aria-describedby` on its own; standalone, as here, they are plain props set\nby hand.\n\nThere is no `status` prop. Mark the control `aria-invalid` and the\ndestructive border follows, so the styling can never disagree with what\nassistive technology announces."}}}},u={play:async({canvasElement:e})=>{let t=c(e).getByRole(`textbox`,{name:`Value`});await o.type(t,`Typed by the user`),await a(t).toHaveValue(`Typed by the user`)}},d={args:{size:`sm`}},f={args:{size:`md`}},p={args:{size:`lg`}},m={render:e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`20rem`},children:[(0,i.jsx)(r,{...e,size:`sm`,"aria-label":`Small input`,placeholder:`sm — 32px`}),(0,i.jsx)(r,{...e,size:`md`,"aria-label":`Medium input`,placeholder:`md — 40px`}),(0,i.jsx)(r,{...e,size:`lg`,"aria-label":`Large input`,placeholder:`lg — 48px`})]})},h={render:e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`20rem`},children:[(0,i.jsx)(r,{...e,type:`text`,"aria-label":`Text`,placeholder:`Text`}),(0,i.jsx)(r,{...e,type:`email`,"aria-label":`Email address`,placeholder:`you@example.com`}),(0,i.jsx)(r,{...e,type:`password`,"aria-label":`Password`,placeholder:`Password`}),(0,i.jsx)(r,{...e,type:`number`,"aria-label":`Amount`,placeholder:`0`}),(0,i.jsx)(r,{...e,type:`date`,"aria-label":`Date`,placeholder:``})]})},g={args:{type:`email`,"aria-label":`Email`,"aria-invalid":!0,"aria-describedby":`email-error`,defaultValue:`not-an-email`},render:e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`0.25rem`,maxWidth:`20rem`},children:[(0,i.jsx)(r,{...e}),(0,i.jsx)(`span`,{id:`email-error`,children:`Enter a valid email address.`})]}),play:async({canvasElement:e})=>{let t=c(e).getByRole(`textbox`,{name:`Email`});await a(t).toHaveAttribute(`aria-invalid`,`true`),await a(t).toHaveAccessibleDescription(`Enter a valid email address.`)}},_={args:{disabled:!0,defaultValue:`Cannot be edited`},play:async({canvasElement:e})=>{let t=c(e).getByRole(`textbox`,{name:`Value`});await a(t).toBeDisabled(),await o.type(t,`nope`),await a(t).toHaveValue(`Cannot be edited`)}},v={args:{readOnly:!0,defaultValue:`Copy me, but do not change me`},play:async({canvasElement:e})=>{let t=c(e).getByRole(`textbox`,{name:`Value`});await a(t).toHaveAttribute(`readonly`),await a(t).not.toBeDisabled();let n=getComputedStyle(t);await a(n.borderBottomWidth).toBe(`1px`),await a(n.borderTopWidth).toBe(`0px`),await a(n.borderLeftWidth).toBe(`0px`),await a(n.borderRadius).toBe(`0px`),await a(n.boxShadow).not.toMatch(/rgba\(\d+, \d+, \d+, 0\.\d+\)/),await o.tab(),await a(t).toHaveFocus();let r=getComputedStyle(t);await a(r.borderTopWidth).toBe(`1px`),await a(r.borderLeftWidth).toBe(`1px`),await a(r.borderRadius).toBe(`12px`),await s(()=>a(getComputedStyle(t).outlineWidth).toBe(`2px`))}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`The default control at \`md\`, usable anywhere without a surrounding field.

@summary Default standalone input`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...d.parameters?.docs?.source},description:{story:`\`sm\` (32px) keeps dense layouts compact where vertical space is tight.

@summary Small 32px control for dense layouts`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...f.parameters?.docs?.source},description:{story:`\`md\` (40px) is the default and covers standard form density.

@summary Medium 40px control, the default`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...p.parameters?.docs?.source},description:{story:"`lg` (48px) suits low-density forms and larger touch targets. It also raises\nthe text to `base` and the corner radius to `lg`.\n\n@summary Large 48px control for low-density forms",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem',
    maxWidth: '20rem'
  }}>
            <Input {...args} size="sm" aria-label="Small input" placeholder="sm — 32px" />
            <Input {...args} size="md" aria-label="Medium input" placeholder="md — 40px" />
            <Input {...args} size="lg" aria-label="Large input" placeholder="lg — 48px" />
        </div>
}`,...m.parameters?.docs?.source},description:{story:`All three heights together for visual comparison.

@summary Visual comparison of the three input sizes`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`A range of input types. The type picks the on-screen keyboard on touch
devices and the browser's own parsing, so set it even when you validate
yourself.

@summary Common input types side by side`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`The invalid treatment comes purely from \`aria-invalid\`, so the border can
never disagree with what assistive technology announces. Point
\`aria-describedby\` at the message so it is read out with the control.

@summary Invalid state driven by aria-invalid`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`A disabled input keeps its value readable but blocks interaction, drops its
shadow and leaves the tab order.

@summary Disabled state`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    const rest = getComputedStyle(input);
    await expect(rest.borderBottomWidth).toBe('1px');
    await expect(rest.borderTopWidth).toBe('0px');
    await expect(rest.borderLeftWidth).toBe('0px');
    await expect(rest.borderRadius).toBe('0px');
    // Tailwind's \`shadow-none\` leaves transparent layers behind rather than \`none\`.
    await expect(rest.boxShadow).not.toMatch(/rgba\\(\\d+, \\d+, \\d+, 0\\.\\d+\\)/);
    await userEvent.tab();
    await expect(input).toHaveFocus();
    const focused = getComputedStyle(input);
    await expect(focused.borderTopWidth).toBe('1px');
    await expect(focused.borderLeftWidth).toBe('1px');
    await expect(focused.borderRadius).toBe('12px');
    // The outline animates in over 75ms, so give it time to land.
    await waitFor(() => expect(getComputedStyle(input).outlineWidth).toBe('2px'));
  }
}`,...v.parameters?.docs?.source},description:{story:`Read-only inputs stay focusable and copyable and still submit their value —
reach for this over \`disabled\` when the user needs to read or copy something
they cannot change. They render as an underlined field: same height and
text, no box, only the bottom border. On keyboard focus the box comes back
with \`lg\` corners so the focus ring reads as on any other input.

@summary Read-only value rendered as an underlined field`,...v.parameters?.docs?.description}}},y=[`Default`,`Small`,`Medium`,`Large`,`AllSizes`,`Types`,`Invalid`,`Disabled`,`ReadOnly`]}))();export{m as AllSizes,u as Default,_ as Disabled,g as Invalid,p as Large,f as Medium,v as ReadOnly,d as Small,h as Types,y as __namedExportsOrder,l as default};