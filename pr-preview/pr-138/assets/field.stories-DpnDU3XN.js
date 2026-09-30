import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DVb4Iike.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./utils-nsk-j2e0.js";import{n as a,t as o}from"./label-Bn4ajvkw.js";import{n as s,r as c}from"./input-D55KXEsd.js";import{a as l,n as u,r as d,t as f}from"./field-DjNnSco3.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{p=t(),u(),r(),s(),a(),m=n(),{expect:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/Field`,component:f.Root,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`vertical`,invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"Field lays out a single form field — label, control, helper text and error —\nand wires the accessibility relationships between them. `Field.Root`\ngenerates the ids and shares them through context: `Label` reads\n`LabelContext`, `Field.Description` and `Field.Error` read `FieldContext`,\nand a `Field<X>` such as `FieldText` provides the control's context. Nobody\npasses an `id` by hand.\n\nPresentational and form-library agnostic: pass `invalid` and the error\nmessages from whatever validates the form. Spacing between fields belongs to\n`Field.Group`, never to a margin on the field itself.\n\n`Field.Description` and `Field.Error` register themselves with the root, so\nthe control's `aria-describedby` lists exactly the messages on screen and is\nabsent when there is none."}}}},b=({className:e,...t})=>{let n=l();return(0,m.jsx)(`input`,{id:n?.controlId,"aria-describedby":n?.describedBy,"aria-invalid":n?.invalid||void 0,required:n?.required||void 0,disabled:n?.disabled||void 0,readOnly:n?.readOnly||void 0,...t,className:i(c(),e)})},x={render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(o,{children:`Email`}),(0,m.jsx)(b,{placeholder:`you@example.com`}),(0,m.jsx)(f.Description,{children:`We only use this to send policy documents.`})]}),play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`textbox`,{name:`Email`}),r=t.getByText(/policy documents/);await h(n).toHaveAttribute(`aria-describedby`,h.stringContaining(r.id)),await h(n).toHaveAccessibleDescription(`We only use this to send policy documents.`),await h(n).not.toHaveAttribute(`aria-invalid`)}},S={args:{required:!0},render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(o,{children:`Full name`}),(0,m.jsx)(b,{placeholder:`Jane Doe`})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getByRole(`textbox`,{name:`Full name`})).toBeRequired(),await h(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},C={render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(o,{optional:!0,children:`Phone number`}),(0,m.jsx)(b,{type:`tel`,placeholder:`+1 (555) 000-0000`})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getByText(`Phone number`)).toHaveClass(/after:content/),await h(t.getByRole(`textbox`,{name:`Phone number`})).not.toBeRequired()}},w={args:{required:!0},render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(f.Label,{tooltip:`Issued by the IRS to identify your business.`,children:`Tax ID`}),(0,m.jsx)(b,{placeholder:`XX-XXXXXXX`})]}),play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`button`,{name:`More information`});await h(n.closest(`label`)).toBeNull(),await h(t.getByRole(`textbox`,{name:`Tax ID`})).toBeInTheDocument(),await g.tab(),await h(n).toHaveFocus();let r=await v(document.body).findAllByText(/Issued by the IRS/);await h(r.length).toBeGreaterThan(0)}},T={args:{invalid:!0},render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(o,{children:`Email`}),(0,m.jsx)(b,{type:`email`,defaultValue:`not-an-email`}),(0,m.jsx)(f.Error,{errors:[{message:`Enter a valid email address.`}]})]}),play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`textbox`,{name:`Email`}),r=t.getByRole(`alert`);await h(n).toHaveAttribute(`aria-invalid`,`true`),await h(n).toHaveAttribute(`aria-describedby`,h.stringContaining(r.id)),await h(n).toHaveAccessibleDescription(`Enter a valid email address.`),await h(e.querySelector(`[data-slot=field][data-invalid="true"]`)).not.toBeNull()}},E={args:{invalid:!0},render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(o,{children:`Password`}),(0,m.jsx)(b,{type:`password`,defaultValue:`abc`}),(0,m.jsx)(f.Error,{errors:[{message:`Use at least 8 characters.`},{message:`Include a number.`},{message:`Use at least 8 characters.`}]})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getByRole(`alert`)).toBeInTheDocument(),await h(t.getAllByRole(`listitem`)).toHaveLength(2)}},D={args:{invalid:!0},render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(o,{children:`Password`}),(0,m.jsx)(b,{type:`password`,defaultValue:`short`}),(0,m.jsx)(f.Error,{errors:[{message:`At least one uppercase letter.`,types:{uppercase:`At least one uppercase letter.`,number:`At least one number.`,length:[`At least 10 characters.`],unnamed:!0}}]})]}),play:async({canvasElement:e})=>{let t=v(e).getByRole(`alert`),n=v(t).getAllByRole(`listitem`);await h(n).toHaveLength(3),await h(n[0]).toHaveTextContent(`At least one uppercase letter.`),await h(n[1]).toHaveTextContent(`At least one number.`),await h(n[2]).toHaveTextContent(`At least 10 characters.`),await h(t).not.toHaveTextContent(`true`)}},O={render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(o,{children:`Email`}),(0,m.jsx)(b,{type:`email`}),(0,m.jsx)(f.Error,{errors:[void 0]})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.queryByRole(`alert`)).toBeNull(),await h(t.getByRole(`textbox`,{name:`Email`})).not.toHaveAttribute(`aria-describedby`)}},k={args:{disabled:!0},render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(o,{children:`Agency`}),(0,m.jsx)(b,{defaultValue:`Acme Insurance`}),(0,m.jsx)(f.Description,{children:`Managed by your administrator.`})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getByRole(`textbox`,{name:`Agency`})).toBeDisabled(),await h(e.querySelector(`[data-slot=field][data-disabled]`)).not.toBeNull()}},A={args:{readOnly:!0},render:e=>(0,m.jsxs)(f.Root,{...e,children:[(0,m.jsx)(o,{children:`Policy number`}),(0,m.jsx)(b,{defaultValue:`POL-2049-118`}),(0,m.jsx)(f.Description,{children:`Assigned by the carrier; contact support to change it.`})]}),play:async({canvasElement:e})=>{let t=v(e).getByRole(`textbox`,{name:`Policy number`});await h(t).toHaveAttribute(`readonly`),await h(t).not.toBeDisabled(),await h(e.querySelector(`[data-slot=field][data-readonly]`)).not.toBeNull()}},j={render:()=>(0,m.jsxs)(f.Group,{className:`w-160`,children:[(0,m.jsxs)(f.Root,{orientation:`horizontal`,"data-testid":`short`,children:[(0,m.jsx)(o,{children:`Full name`}),(0,m.jsx)(b,{defaultValue:`Rafa Moro`,className:`w-72`})]}),(0,m.jsxs)(f.Root,{orientation:`horizontal`,"data-testid":`long`,children:[(0,m.jsx)(o,{children:`Title`}),(0,m.jsxs)(f.Content,{className:`w-72`,children:[(0,m.jsx)(b,{placeholder:`Software engineer`}),(0,m.jsx)(f.Description,{children:`Shown on your public profile.`})]})]}),(0,m.jsxs)(f.Root,{orientation:`horizontal`,"data-testid":`switch`,children:[(0,m.jsxs)(f.Content,{children:[(0,m.jsx)(o,{children:`Auto-renew`}),(0,m.jsx)(f.Description,{children:`Renews the policy automatically before it expires.`})]}),(0,m.jsx)(b,{type:`checkbox`,className:`size-5`})]}),(0,m.jsx)(`div`,{className:`w-[20rem]`,"data-testid":`narrow`,children:(0,m.jsxs)(f.Root,{orientation:`horizontal`,children:[(0,m.jsx)(o,{children:`Email`}),(0,m.jsx)(b,{type:`email`,placeholder:`you@example.com`,className:`w-40`})]})})]}),play:async({canvasElement:e})=>{let t=v(e),n=e=>e.getBoundingClientRect(),r=t.getByTestId(`short`),i=t.getByTestId(`long`),a=r.querySelector(`input`),o=i.querySelector(`input`);await h(n(a).left).toBe(n(o).left),await h(Math.round(n(a).right)).toBe(Math.round(n(r).right));let s=i.querySelector(`[data-slot=field-description]`);await h(n(s).left).toBe(n(o).left),await h(n(s).top).toBeGreaterThanOrEqual(n(o).bottom),await h(o).toHaveAccessibleDescription(`Shown on your public profile.`);let c=t.getByTestId(`switch`).querySelector(`input`);await h(Math.round(n(c).right)).toBe(Math.round(n(t.getByTestId(`switch`)).right));let l=t.getByTestId(`narrow`),u=l.querySelector(`label`),d=l.querySelector(`input`);await h(n(u).right).toBeLessThanOrEqual(n(d).left)}},M={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,m.jsx)(`div`,{className:`w-full max-w-160`,"data-testid":`wide`,children:(0,m.jsxs)(f.Root,{orientation:`responsive`,children:[(0,m.jsx)(o,{children:`Email`}),(0,m.jsxs)(f.Content,{className:`@md/field:w-72`,children:[(0,m.jsx)(b,{type:`email`,placeholder:`you@example.com`}),(0,m.jsx)(f.Description,{children:`We only use this to send policy documents, and never to contact you about anything else.`})]})]})}),(0,m.jsx)(`div`,{className:`w-full max-w-[20rem]`,"data-testid":`narrow`,children:(0,m.jsxs)(f.Root,{orientation:`responsive`,children:[(0,m.jsx)(o,{children:`Email`}),(0,m.jsxs)(f.Content,{children:[(0,m.jsx)(b,{type:`email`,placeholder:`you@example.com`}),(0,m.jsx)(f.Description,{children:`We only use this to send policy documents.`})]})]})})]}),play:async({canvasElement:e})=>{let t=v(e),n=e=>e.getBoundingClientRect(),r=t.getByTestId(`wide`),i=r.querySelector(`label`),a=r.querySelector(`input`),o=r.querySelector(`[data-slot=field-content]`);await h(n(i).right).toBeLessThanOrEqual(n(a).left),await h(n(o).width).toBe(288);let s=t.getByTestId(`narrow`),c=s.querySelector(`label`),l=s.querySelector(`input`);await h(n(l).top).toBeGreaterThanOrEqual(n(c).bottom),await h(n(l).left).toBe(n(c).left)}},N={render:()=>(0,m.jsxs)(f.Group,{children:[(0,m.jsxs)(f.Root,{required:!0,children:[(0,m.jsx)(o,{children:`Full name`}),(0,m.jsx)(b,{placeholder:`Jane Doe`})]}),(0,m.jsxs)(f.Root,{required:!0,invalid:!0,children:[(0,m.jsx)(o,{children:`Email`}),(0,m.jsx)(b,{type:`email`,defaultValue:`not-an-email`}),(0,m.jsx)(f.Error,{children:`Enter a valid email address.`})]}),(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(o,{optional:!0,children:`Phone number`}),(0,m.jsx)(b,{type:`tel`,placeholder:`+1 (555) 000-0000`})]})]}),play:async({canvasElement:e})=>{let t=v(e),n=t.getAllByRole(`textbox`).map(e=>e.id);await h(new Set(n).size).toBe(3),await h(t.getAllByRole(`alert`)).toHaveLength(1)}},P={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(o,{htmlFor:`standalone-email`,children:`Email`}),(0,m.jsx)(b,{id:`standalone-email`,type:`email`,"aria-describedby":`standalone-error`}),(0,m.jsx)(f.Error,{id:`standalone-error`,children:`Something went wrong.`})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getByRole(`textbox`,{name:`Email`})).toHaveAttribute(`id`,`standalone-email`),await h(t.getByRole(`alert`)).toHaveAttribute(`id`,`standalone-error`)}},F={render:()=>(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(o,{htmlFor:`own-input`,children:`Email`}),(0,m.jsx)(`input`,{id:`own-input`,type:`email`,className:c()}),(0,m.jsx)(f.Description,{id:`own-description`,children:`Points wherever you say.`})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getByText(`Email`).closest(`label`)).toHaveAttribute(`for`,`own-input`),await h(t.getByRole(`textbox`,{name:`Email`})).toHaveAttribute(`id`,`own-input`),await h(t.getByText(/Points wherever/)).toHaveAttribute(`id`,`own-description`)}},I=({errors:e,children:t})=>{let n=(0,p.use)(d);return(0,m.jsx)(d,{value:n&&{...n,errors:e},children:t})},L={render:()=>{let[e,t]=(0,p.useState)(``),[n,r]=(0,p.useState)(!1),i=n&&!e?[{message:`Required`}]:void 0;return(0,m.jsxs)(f.Root,{invalid:!!i,required:!0,children:[(0,m.jsx)(o,{children:`Email`}),(0,m.jsx)(b,{type:`email`,value:e,onChange:e=>t(e.target.value),onBlur:()=>r(!0)}),(0,m.jsx)(I,{errors:i,children:(0,m.jsx)(f.Error,{})})]})},play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`textbox`,{name:`Email`});await h(t.queryByRole(`alert`)).toBeNull(),await g.click(n),await g.tab(),await h(await t.findByRole(`alert`)).toHaveTextContent(`Required`),await h(n).toHaveAttribute(`aria-invalid`,`true`),await g.type(n,`jane@example.com`),await _(()=>h(t.queryByRole(`alert`)).toBeNull()),await h(n).not.toHaveAttribute(`aria-invalid`)}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Field.Root {...args}>
            <Label>Email</Label>
            <DemoInput placeholder="you@example.com" />
            <Field.Description>We only use this to send policy documents.</Field.Description>
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Email'
    });
    const description = canvas.getByText(/policy documents/);
    await expect(input).toHaveAttribute('aria-describedby', expect.stringContaining(description.id));
    await expect(input).toHaveAccessibleDescription('We only use this to send policy documents.');
    await expect(input).not.toHaveAttribute('aria-invalid');
  }
}`,...x.parameters?.docs?.source},description:{story:`A vertical field with a label, a control and helper text. The label points
at the control and the description is referenced by it — neither needed an
explicit \`id\`.

@summary Default vertical field with label, control and description`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => <Field.Root {...args}>
            <Label>Full name</Label>
            <DemoInput placeholder="Jane Doe" />
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Full name'
    })).toBeRequired();
    await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...S.parameters?.docs?.source},description:{story:"`required` on the root is the single source of truth: the label shows its\nasterisk and the control receives `required`, both through context.\n\n@summary Required field driven from the root alone",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Field.Root {...args}>
            <Label optional>Phone number</Label>
            <DemoInput type="tel" placeholder="+1 (555) 000-0000" />
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Phone number')).toHaveClass(/after:content/);
    await expect(canvas.getByRole('textbox', {
      name: 'Phone number'
    })).not.toBeRequired();
  }
}`,...C.parameters?.docs?.source},description:{story:`\`optional\` on the label appends the muted suffix; the control stays
non-required.

@summary Optional field with the muted label suffix`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => <Field.Root {...args}>
            <Field.Label tooltip="Issued by the IRS to identify your business.">Tax ID</Field.Label>
            <DemoInput placeholder="XX-XXXXXXX" />
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'More information'
    });
    await expect(trigger.closest('label')).toBeNull();
    await expect(canvas.getByRole('textbox', {
      name: 'Tax ID'
    })).toBeInTheDocument();
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    const hints = await within(document.body).findAllByText(/Issued by the IRS/);
    await expect(hints.length).toBeGreaterThan(0);
  }
}`,...w.parameters?.docs?.source},description:{story:`\`Field.Label\` puts an info button beside the caption. It is a sibling of the
\`<label>\`, so it keeps its own accessible name, clicking it does not focus
the control, and the control's name stays clean. It opens on focus too.

@summary Label with a tooltip trigger beside it`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field.Root {...args}>
            <Label>Email</Label>
            <DemoInput type="email" defaultValue="not-an-email" />
            <Field.Error errors={[{
      message: 'Enter a valid email address.'
    }]} />
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Email'
    });
    const alert = canvas.getByRole('alert');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAttribute('aria-describedby', expect.stringContaining(alert.id));
    await expect(input).toHaveAccessibleDescription('Enter a valid email address.');
    await expect(canvasElement.querySelector('[data-slot=field][data-invalid="true"]')).not.toBeNull();
  }
}`,...T.parameters?.docs?.source},description:{story:"`invalid` on the root sets `data-invalid` for styling and `aria-invalid` on\nthe control, which drives its destructive border; the label keeps its color\nby design. `Field.Error` takes the error objects as they come from a form\nlibrary.\n\n@summary Invalid field with a single error message",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field.Root {...args}>
            <Label>Password</Label>
            <DemoInput type="password" defaultValue="abc" />
            <Field.Error errors={[{
      message: 'Use at least 8 characters.'
    }, {
      message: 'Include a number.'
    }, {
      message: 'Use at least 8 characters.'
    }]} />
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getAllByRole('listitem')).toHaveLength(2);
  }
}`,...E.parameters?.docs?.source},description:{story:`Several errors render as a list, de-duplicated by message.

@summary Several errors rendered as a de-duplicated list`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field.Root {...args}>
            <Label>Password</Label>
            <DemoInput type="password" defaultValue="short" />
            <Field.Error errors={[{
      message: 'At least one uppercase letter.',
      types: {
        uppercase: 'At least one uppercase letter.',
        number: 'At least one number.',
        length: ['At least 10 characters.'],
        unnamed: true
      }
    }]} />
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole('alert');
    const items = within(alert).getAllByRole('listitem');

    // The rule that failed without a message adds nothing to the list.
    await expect(items).toHaveLength(3);
    await expect(items[0]).toHaveTextContent('At least one uppercase letter.');
    await expect(items[1]).toHaveTextContent('At least one number.');
    await expect(items[2]).toHaveTextContent('At least 10 characters.');
    await expect(alert).not.toHaveTextContent('true');
  }
}`,...D.parameters?.docs?.source},description:{story:`One error whose \`types\` lists every rule that failed renders as that same
list. A form library fills it when it collects all the failures instead of
stopping at the first (react-hook-form's \`criteriaMode: 'all'\`), leaving only
the first one in \`message\`, so the messages take precedence over it. A rule
that failed without a message of its own contributes nothing.

@summary Every rule a single error collected, rendered as a list`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <Field.Root {...args}>
            <Label>Email</Label>
            <DemoInput type="email" />
            <Field.Error errors={[undefined]} />
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('alert')).toBeNull();
    await expect(canvas.getByRole('textbox', {
      name: 'Email'
    })).not.toHaveAttribute('aria-describedby');
  }
}`,...O.parameters?.docs?.source},description:{story:"`Field.Error` renders nothing without a message, so it can stay mounted and\nreceive `undefined` entries while the field is valid. With no description\neither, the control carries no `aria-describedby` at all.\n\n@summary Error stays mounted and renders nothing while valid",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Field.Root {...args}>
            <Label>Agency</Label>
            <DemoInput defaultValue="Acme Insurance" />
            <Field.Description>Managed by your administrator.</Field.Description>
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Agency'
    })).toBeDisabled();
    await expect(canvasElement.querySelector('[data-slot=field][data-disabled]')).not.toBeNull();
  }
}`,...k.parameters?.docs?.source},description:{story:"`disabled` on the root disables the control through context and sets\n`data-disabled` for styling.\n\n@summary Disabled field driven from the root",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  render: args => <Field.Root {...args}>
            <Label>Policy number</Label>
            <DemoInput defaultValue="POL-2049-118" />
            <Field.Description>Assigned by the carrier; contact support to change it.</Field.Description>
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Policy number'
    });
    await expect(input).toHaveAttribute('readonly');
    await expect(input).not.toBeDisabled();
    await expect(canvasElement.querySelector('[data-slot=field][data-readonly]')).not.toBeNull();
  }
}`,...A.parameters?.docs?.source},description:{story:"`readOnly` on the root makes the control read-only through context and sets\n`data-readonly` for styling. Unlike `disabled`, the value stays focusable,\ncopyable and submitted.\n\n@summary Read-only field driven from the root",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Field.Group className="w-160">
            <Field.Root orientation="horizontal" data-testid="short">
                <Label>Full name</Label>
                <DemoInput defaultValue="Rafa Moro" className="w-72" />
            </Field.Root>

            <Field.Root orientation="horizontal" data-testid="long">
                <Label>Title</Label>
                <Field.Content className="w-72">
                    <DemoInput placeholder="Software engineer" />
                    <Field.Description>Shown on your public profile.</Field.Description>
                </Field.Content>
            </Field.Root>

            <Field.Root orientation="horizontal" data-testid="switch">
                <Field.Content>
                    <Label>Auto-renew</Label>
                    <Field.Description>Renews the policy automatically before it expires.</Field.Description>
                </Field.Content>
                <DemoInput type="checkbox" className="size-5" />
            </Field.Root>

            <div className="w-[20rem]" data-testid="narrow">
                <Field.Root orientation="horizontal">
                    <Label>Email</Label>
                    <DemoInput type="email" placeholder="you@example.com" className="w-40" />
                </Field.Root>
            </div>
        </Field.Group>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rect = (element: Element) => element.getBoundingClientRect();
    const short = canvas.getByTestId('short');
    const long = canvas.getByTestId('long');
    const shortInput = short.querySelector('input') as HTMLElement;
    const longInput = long.querySelector('input') as HTMLElement;

    // Controls line up on the right whatever the label measures.
    await expect(rect(shortInput).left).toBe(rect(longInput).left);
    await expect(Math.round(rect(shortInput).right)).toBe(Math.round(rect(short).right));

    // A right-hand Field.Content stacks the control and its message.
    const controlDescription = long.querySelector('[data-slot=field-description]') as HTMLElement;
    await expect(rect(controlDescription).left).toBe(rect(longInput).left);
    await expect(rect(controlDescription).top).toBeGreaterThanOrEqual(rect(longInput).bottom);
    await expect(longInput).toHaveAccessibleDescription('Shown on your public profile.');

    // A natural-width control sits at the right edge too.
    const toggle = canvas.getByTestId('switch').querySelector('input') as HTMLElement;
    await expect(Math.round(rect(toggle).right)).toBe(Math.round(rect(canvas.getByTestId('switch')).right));

    // Horizontal never folds: the row holds even when the field is narrow.
    const narrow = canvas.getByTestId('narrow');
    const narrowLabel = narrow.querySelector('label') as HTMLElement;
    const narrowInput = narrow.querySelector('input') as HTMLElement;
    await expect(rect(narrowLabel).right).toBeLessThanOrEqual(rect(narrowInput).left);
  }
}`,...j.parameters?.docs?.source},description:{story:"`horizontal` is one row at every width. The first child fills the row and\neverything after it keeps its natural width, aligned to the right edge, so\nthe controls of stacked fields line up whatever their labels measure. Wrap a\nlabel with its description, or a control with its messages, in\n`Field.Content`. A control sets its own width: `Input` is `w-full`, so it\ngets one here.\n\n@summary Horizontal field, one row at every width, controls right-aligned",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
            <div className="w-full max-w-160" data-testid="wide">
                <Field.Root orientation="responsive">
                    <Label>Email</Label>
                    <Field.Content className="@md/field:w-72">
                        <DemoInput type="email" placeholder="you@example.com" />
                        <Field.Description>
                            We only use this to send policy documents, and never to contact you about anything
                            else.
                        </Field.Description>
                    </Field.Content>
                </Field.Root>
            </div>

            <div className="w-full max-w-[20rem]" data-testid="narrow">
                <Field.Root orientation="responsive">
                    <Label>Email</Label>
                    <Field.Content>
                        <DemoInput type="email" placeholder="you@example.com" />
                        <Field.Description>We only use this to send policy documents.</Field.Description>
                    </Field.Content>
                </Field.Root>
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rect = (element: Element) => element.getBoundingClientRect();
    const wide = canvas.getByTestId('wide');
    const wideLabel = wide.querySelector('label') as HTMLElement;
    const wideInput = wide.querySelector('input') as HTMLElement;
    const wideContent = wide.querySelector('[data-slot=field-content]') as HTMLElement;
    await expect(rect(wideLabel).right).toBeLessThanOrEqual(rect(wideInput).left);

    // The width the content was given holds: the root sets no child width from
    // \`md\` up, so a two-line description does not push it to its max-content
    // width and fold the row.
    await expect(rect(wideContent).width).toBe(288);
    const narrow = canvas.getByTestId('narrow');
    const narrowLabel = narrow.querySelector('label') as HTMLElement;
    const narrowInput = narrow.querySelector('input') as HTMLElement;
    await expect(rect(narrowInput).top).toBeGreaterThanOrEqual(rect(narrowLabel).bottom);
    await expect(rect(narrowInput).left).toBe(rect(narrowLabel).left);
  }
}`,...M.parameters?.docs?.source},description:{story:"`responsive` stacks the parts below `28rem` and behaves like `horizontal`\nfrom there: first child fills, the rest keep their width on the right. It\nmeasures the field itself, so it needs no particular wrapper. A width that\nshould only apply once horizontal goes behind `@md/field:`.\n\n@summary Responsive field that stacks when narrow",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Field.Group>
            <Field.Root required>
                <Label>Full name</Label>
                <DemoInput placeholder="Jane Doe" />
            </Field.Root>

            <Field.Root required invalid>
                <Label>Email</Label>
                <DemoInput type="email" defaultValue="not-an-email" />
                <Field.Error>Enter a valid email address.</Field.Error>
            </Field.Root>

            <Field.Root>
                <Label optional>Phone number</Label>
                <DemoInput type="tel" placeholder="+1 (555) 000-0000" />
            </Field.Root>
        </Field.Group>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ids = canvas.getAllByRole('textbox').map(input => input.id);
    await expect(new Set(ids).size).toBe(3);
    await expect(canvas.getAllByRole('alert')).toHaveLength(1);
  }
}`,...N.parameters?.docs?.source},description:{story:`\`Field.Group\` stacks fields and owns the space between them. Each field gets
its own ids, so several on one page never collide.

@summary Several fields stacked in a group`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
            <Label htmlFor="standalone-email">Email</Label>
            <DemoInput id="standalone-email" type="email" aria-describedby="standalone-error" />
            <Field.Error id="standalone-error">Something went wrong.</Field.Error>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Email'
    })).toHaveAttribute('id', 'standalone-email');
    await expect(canvas.getByRole('alert')).toHaveAttribute('id', 'standalone-error');
  }
}`,...P.parameters?.docs?.source},description:{story:"Outside a `Field.Root` every part reads a `null` context and works on its own\nprops alone: `Label` needs its `htmlFor`, `Field.Error` its own `id`.\n\n@summary Label and Field.Error used without a Field.Root",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Field.Root>
            <Label htmlFor="own-input">Email</Label>
            <input id="own-input" type="email" className={inputRecipe()} />
            <Field.Description id="own-description">Points wherever you say.</Field.Description>
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Email').closest('label')).toHaveAttribute('for', 'own-input');
    await expect(canvas.getByRole('textbox', {
      name: 'Email'
    })).toHaveAttribute('id', 'own-input');
    await expect(canvas.getByText(/Points wherever/)).toHaveAttribute('id', 'own-description');
  }
}`,...F.parameters?.docs?.source},description:{story:"A context is a default, never an override: an explicit `htmlFor` or `id` on a\npart wins over what `Field.Root` provides.\n\n@summary Explicit props on a part win over the field's context",...F.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const errors = touched && !value ? [{
      message: 'Required'
    }] : undefined;
    return <Field.Root invalid={!!errors} required>
                <Label>Email</Label>
                <DemoInput type="email" value={value} onChange={event => setValue(event.target.value)} onBlur={() => setTouched(true)} />
                <ErrorProvider errors={errors}>
                    <Field.Error />
                </ErrorProvider>
            </Field.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Email'
    });
    await expect(canvas.queryByRole('alert')).toBeNull();
    await userEvent.click(input);
    await userEvent.tab();
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Required');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(input, 'jane@example.com');
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
    await expect(input).not.toHaveAttribute('aria-invalid');
  }
}`,...L.parameters?.docs?.source},description:{story:"`FieldContext` is an extension point: re-provided under the root with the\nerrors, a bare `<Field.Error />` renders them — here with `useState` and no\nform library. `InputContext` extends the same way with `value`, `onChange`,\n`onBlur` and `name`; see `FieldText`.\n\n@summary Errors supplied to a bare Field.Error through context",...L.parameters?.docs?.description}}},R=[`Default`,`Required`,`Optional`,`WithTooltip`,`Invalid`,`MultipleErrors`,`ErrorWithTypes`,`NoError`,`Disabled`,`ReadOnly`,`Horizontal`,`Responsive`,`Group`,`StandaloneOutsideField`,`OwnPropsWin`,`ErrorsFromContext`]})))()}z();export{x as Default,k as Disabled,D as ErrorWithTypes,L as ErrorsFromContext,N as Group,j as Horizontal,T as Invalid,E as MultipleErrors,O as NoError,C as Optional,F as OwnPropsWin,A as ReadOnly,S as Required,M as Responsive,P as StandaloneOutsideField,w as WithTooltip,R as __namedExportsOrder,y as default};