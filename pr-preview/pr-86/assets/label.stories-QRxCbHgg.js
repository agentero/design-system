import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./label-6LueCx__.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Label`,component:r,tags:[`autodocs`],argTypes:{optional:{control:`boolean`},required:{control:`boolean`}},args:{children:`Email`},parameters:{docs:{description:{component:"Label is the accessible caption for a form control, built on Radix's Label\nprimitive: it associates with the control through `htmlFor` and does not select\ntext on double-click.\n\n`optional` and `required` are display-only affordances — the control itself\nstill has to carry `required` / `aria-required`."}}}},c={args:{htmlFor:`email`},render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{...e}),(0,i.jsx)(`input`,{id:`email`,placeholder:`you@example.com`})]}),play:async({canvasElement:e})=>{await a(o(e).getByLabelText(`Email`)).toBeInTheDocument()}},l={args:{optional:!0,children:`Phone number`}},u={args:{required:!0,children:`Full name`},play:async({canvasElement:e})=>{let t=o(e),n=t.getByText(`Full name`),r=t.getByText(`*`);await a(r).toHaveAttribute(`aria-hidden`,`true`),await a(r.getBoundingClientRect().left-n.getBoundingClientRect().right).toBe(4)}},d={args:{optional:!0,required:!0,children:`Agency name`},play:async({canvasElement:e})=>{let t=o(e);await a(t.getByText(`*`)).toBeInTheDocument(),await a(t.getByText(`Agency name`)).not.toHaveClass(/after:content/)}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'email'
  },
  render: args => <>
            <Label {...args} />
            <input id="email" placeholder="you@example.com" />
        </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Email')).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source},description:{story:`A plain caption, associated with its control through \`htmlFor\`.

@summary Default label associated with a control`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    children: 'Phone number'
  }
}`,...l.parameters?.docs?.source},description:{story:`Appends a muted " (optional)" suffix for fields that can be left blank.

@summary Optional field with a muted suffix`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    children: 'Full name'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText('Full name');
    const asterisk = canvas.getByText('*');
    await expect(asterisk).toHaveAttribute('aria-hidden', 'true');

    // Spacing comes from the row's \`gap-1\` alone. A margin on the asterisk on top
    // of it would put it 8px from the caption, where Figma spaces every part by 4.
    await expect(asterisk.getBoundingClientRect().left - text.getBoundingClientRect().right).toBe(4);
  }
}`,...u.parameters?.docs?.source},description:{story:"Appends an asterisk. It is `aria-hidden`, so the control still needs its own\n`required` attribute for assistive technology.\n\n@summary Required field with a decorative asterisk",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    required: true,
    children: 'Agency name'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('*')).toBeInTheDocument();
    await expect(canvas.getByText('Agency name')).not.toHaveClass(/after:content/);
  }
}`,...d.parameters?.docs?.source},description:{story:`Contradictory props do not throw — \`required\` wins and the optional suffix is
dropped, so a mistake never takes the page down.

@summary required takes precedence over optional`,...d.parameters?.docs?.description}}},f=[`Default`,`Optional`,`Required`,`RequiredWinsOverOptional`]}))();export{c as Default,l as Optional,u as Required,d as RequiredWinsOverOptional,f as __namedExportsOrder,s as default};