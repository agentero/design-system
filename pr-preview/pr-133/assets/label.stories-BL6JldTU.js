import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./label-CVeVlEH7.js";import{n as i,r as a}from"./input-QmZhlJje.js";import{a as o,n as s,t as c}from"./field-B7vVtLxR.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{s(),i(),n(),l=t(),{expect:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Label`,component:r,tags:[`autodocs`],argTypes:{optional:{control:`boolean`},required:{control:`boolean`}},args:{children:`Email`},parameters:{docs:{description:{component:"Label is the accessible caption for a form control, built on Radix's Label\nprimitive: it associates with the control through `htmlFor` and does not select\ntext on double-click.\n\n`optional` and `required` are display-only affordances — the control itself\nstill has to carry `required` / `aria-required`."}}}},p={args:{htmlFor:`email`},render:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{...e}),(0,l.jsx)(`input`,{id:`email`,placeholder:`you@example.com`,className:a()})]}),play:async({canvasElement:e})=>{let t=d(e);await u(t.getByLabelText(`Email`)).toBeInTheDocument()}},m={args:{optional:!0,children:`Phone number`}},h={args:{required:!0,children:`Full name`},play:async({canvasElement:e})=>{let t=d(e);await u(t.getByText(`Full name`)).toBeInTheDocument(),await u(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},g={args:{optional:!0,required:!0,children:`Agency name`},play:async({canvasElement:e})=>{let t=d(e);await u(t.getByText(`*`)).toBeInTheDocument(),await u(t.getByText(`Agency name`)).not.toHaveClass(/after:content/)}},_=()=>{let e=o();return(0,l.jsx)(`input`,{id:e?.controlId,"aria-describedby":e?.describedBy,className:a()})},v={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,l.jsxs)(c.Root,{children:[(0,l.jsx)(r,{children:`Email`}),(0,l.jsx)(_,{})]}),(0,l.jsxs)(c.Root,{children:[(0,l.jsx)(r,{htmlFor:`explicit-control`,children:`Phone`}),(0,l.jsx)(`input`,{id:`explicit-control`,className:a()})]})]}),play:async({canvasElement:e})=>{let t=d(e),n=t.getByRole(`textbox`,{name:`Email`});await u(t.getByText(`Email`).closest(`label`)).toHaveAttribute(`for`,n.id),await u(t.getByText(`Phone`).closest(`label`)).toHaveAttribute(`for`,`explicit-control`)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Inside a `Field.Root` the label reads `LabelContext` and points at the\nfield's control with no `htmlFor`. An explicit `htmlFor` still wins.\n\n@summary Inside a Field the label associates itself; explicit htmlFor wins",...v.parameters?.docs?.description}}},y=[`Default`,`Optional`,`Required`,`RequiredWinsOverOptional`,`InsideField`]})))()}b();export{p as Default,v as InsideField,m as Optional,h as Required,g as RequiredWinsOverOptional,y as __namedExportsOrder,f as default};