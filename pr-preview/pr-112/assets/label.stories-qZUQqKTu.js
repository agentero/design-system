import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{c as n,l as r,n as i,o as a,r as o,t as s}from"./input-gAF3Wp1N.js";import{r as c}from"./input-sDR0iNco.js";var l,u,d,f,p,m,h,g,_,v,y;e((()=>{o(),s(),r(),l=t(),{expect:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Label`,component:n,tags:[`autodocs`],argTypes:{optional:{control:`boolean`},required:{control:`boolean`}},args:{children:`Email`},parameters:{docs:{description:{component:"Label is the accessible caption for a form control, built on Radix's Label\nprimitive: it associates with the control through `htmlFor` and does not select\ntext on double-click.\n\n`optional` and `required` are display-only affordances — the control itself\nstill has to carry `required` / `aria-required`."}}}},p={args:{htmlFor:`email`},render:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{...e}),(0,l.jsx)(`input`,{id:`email`,placeholder:`you@example.com`,className:c()})]}),play:async({canvasElement:e})=>{await u(d(e).getByLabelText(`Email`)).toBeInTheDocument()}},m={args:{optional:!0,children:`Phone number`}},h={args:{required:!0,children:`Full name`},play:async({canvasElement:e})=>{let t=d(e);await u(t.getByText(`Full name`)).toBeInTheDocument(),await u(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},g={args:{optional:!0,required:!0,children:`Agency name`},play:async({canvasElement:e})=>{let t=d(e);await u(t.getByText(`*`)).toBeInTheDocument(),await u(t.getByText(`Agency name`)).not.toHaveClass(/after:content/)}},_=()=>{let e=a();return(0,l.jsx)(`input`,{id:e?.controlId,"aria-describedby":e?.describedBy,className:c()})},v={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,l.jsxs)(i.Root,{children:[(0,l.jsx)(n,{children:`Email`}),(0,l.jsx)(_,{})]}),(0,l.jsxs)(i.Root,{children:[(0,l.jsx)(n,{htmlFor:`explicit-control`,children:`Phone`}),(0,l.jsx)(`input`,{id:`explicit-control`,className:c()})]})]}),play:async({canvasElement:e})=>{let t=d(e),n=t.getByRole(`textbox`,{name:`Email`});await u(t.getByText(`Email`).closest(`label`)).toHaveAttribute(`for`,n.id),await u(t.getByText(`Phone`).closest(`label`)).toHaveAttribute(`for`,`explicit-control`)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'email'
  },
  render: args => <>
            <Label {...args} />
            <input id="email" placeholder="you@example.com" className={inputRecipe()} />
        </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Email')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source},description:{story:`A plain caption, associated with its control through \`htmlFor\`.

@summary Default label associated with a control`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    children: 'Phone number'
  }
}`,...m.parameters?.docs?.source},description:{story:`Appends a muted " (optional)" suffix for fields that can be left blank.

@summary Optional field with a muted suffix`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    children: 'Full name'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Full name')).toBeInTheDocument();
    await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...h.parameters?.docs?.source},description:{story:"Appends an asterisk. It is `aria-hidden`, so the control still needs its own\n`required` attribute for assistive technology.\n\n@summary Required field with a decorative asterisk",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Contradictory props do not throw — \`required\` wins and the optional suffix is
dropped, so a mistake never takes the page down.

@summary required takes precedence over optional`,...g.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            <Field.Root>
                <Label>Email</Label>
                <FieldInput />
            </Field.Root>

            <Field.Root>
                <Label htmlFor="explicit-control">Phone</Label>
                <input id="explicit-control" className={inputRecipe()} />
            </Field.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const email = canvas.getByRole('textbox', {
      name: 'Email'
    });
    await expect(canvas.getByText('Email').closest('label')).toHaveAttribute('for', email.id);
    await expect(canvas.getByText('Phone').closest('label')).toHaveAttribute('for', 'explicit-control');
  }
}`,...v.parameters?.docs?.source},description:{story:"Inside a `Field.Root` the label reads `LabelContext` and points at the\nfield's control with no `htmlFor`. An explicit `htmlFor` still wins.\n\n@summary Inside a Field the label associates itself; explicit htmlFor wins",...v.parameters?.docs?.description}}},y=[`Default`,`Optional`,`Required`,`RequiredWinsOverOptional`,`InsideField`]}))();export{p as Default,v as InsideField,m as Optional,h as Required,g as RequiredWinsOverOptional,y as __namedExportsOrder,f as default};