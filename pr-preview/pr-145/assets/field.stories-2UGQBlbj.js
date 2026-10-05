import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe--qzG6Kzv.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./utils-nsk-j2e0.js";import{n as a,t as o}from"./label-BmXvFnBE.js";import{a as s,n as c,r as l,t as u}from"./field-O5vRJor1.js";import{n as d,r as f}from"./input-D_VAI-e-.js";import{n as p,t as m}from"./switch-C0D3WF_f.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{h=t(),c(),r(),d(),a(),p(),g=n(),{expect:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/Field`,component:u.Root,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`vertical`,`horizontal`,`responsive`]},invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`vertical`,invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"Field lays out a single form field — label, control, helper text and error —\nand wires the accessibility relationships between them. `Field.Root`\ngenerates the ids and shares them through context: `Label` reads\n`LabelContext`, `Field.Description` and `Field.Error` read `FieldContext`,\nand a `Field<X>` such as `FieldText` provides the control's context. Nobody\npasses an `id` by hand.\n\nPresentational and form-library agnostic: pass `invalid` and the error\nmessages from whatever validates the form. Spacing between fields belongs to\n`Field.Group`, never to a margin on the field itself.\n\n`Field.Description` and `Field.Error` register themselves with the root, so\nthe control's `aria-describedby` lists exactly the messages on screen and is\nabsent when there is none."}}}},S=({className:e,...t})=>{let n=s();return(0,g.jsx)(`input`,{id:n?.controlId,"aria-describedby":n?.describedBy,"aria-invalid":n?.invalid||void 0,required:n?.required||void 0,disabled:n?.disabled||void 0,readOnly:n?.readOnly||void 0,...t,className:i(f(),e)})},C=e=>{let t=s();return(0,g.jsx)(m,{id:t?.controlId,"aria-describedby":t?.describedBy,"aria-invalid":t?.invalid||void 0,required:t?.required||void 0,disabled:t?.disabled||void 0,...e})},w={render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(o,{children:`Email`}),(0,g.jsx)(S,{placeholder:`you@example.com`}),(0,g.jsx)(u.Description,{children:`We only use this to send policy documents.`})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Email`}),r=t.getByText(/policy documents/);await _(n).toHaveAttribute(`aria-describedby`,_.stringContaining(r.id)),await _(n).toHaveAccessibleDescription(`We only use this to send policy documents.`),await _(n).not.toHaveAttribute(`aria-invalid`)}},T={args:{required:!0},render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(o,{children:`Full name`}),(0,g.jsx)(S,{placeholder:`Jane Doe`})]}),play:async({canvasElement:e})=>{let t=b(e);await _(t.getByRole(`textbox`,{name:`Full name`})).toBeRequired(),await _(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},E={render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(o,{optional:!0,children:`Phone number`}),(0,g.jsx)(S,{type:`tel`,placeholder:`+1 (555) 000-0000`})]}),play:async({canvasElement:e})=>{let t=b(e);await _(t.getByText(`Phone number`)).toHaveClass(/after:content/),await _(t.getByRole(`textbox`,{name:`Phone number`})).not.toBeRequired()}},D={args:{required:!0},render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(u.Label,{tooltip:`Issued by the IRS to identify your business.`,children:`Tax ID`}),(0,g.jsx)(S,{placeholder:`XX-XXXXXXX`})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`button`,{name:`More information`});await _(n.closest(`label`)).toBeNull(),await _(t.getByRole(`textbox`,{name:`Tax ID`})).toBeInTheDocument(),await v.tab(),await _(n).toHaveFocus();let r=await b(document.body).findAllByText(/Issued by the IRS/);await _(r.length).toBeGreaterThan(0)}},O={args:{invalid:!0},render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(o,{children:`Email`}),(0,g.jsx)(S,{type:`email`,defaultValue:`not-an-email`}),(0,g.jsx)(u.Error,{errors:[{message:`Enter a valid email address.`}]})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Email`}),r=t.getByRole(`alert`);await _(n).toHaveAttribute(`aria-invalid`,`true`),await _(n).toHaveAttribute(`aria-describedby`,_.stringContaining(r.id)),await _(n).toHaveAccessibleDescription(`Enter a valid email address.`),await _(e.querySelector(`[data-slot=field][data-invalid="true"]`)).not.toBeNull()}},k={args:{invalid:!0},render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(o,{children:`Password`}),(0,g.jsx)(S,{type:`password`,defaultValue:`abc`}),(0,g.jsx)(u.Error,{errors:[{message:`Use at least 8 characters.`},{message:`Include a number.`},{message:`Use at least 8 characters.`}]})]}),play:async({canvasElement:e})=>{let t=b(e);await _(t.getByRole(`alert`)).toBeInTheDocument(),await _(t.getAllByRole(`listitem`)).toHaveLength(2)}},A={args:{invalid:!0},render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(o,{children:`Password`}),(0,g.jsx)(S,{type:`password`,defaultValue:`short`}),(0,g.jsx)(u.Error,{errors:[{message:`At least one uppercase letter.`,types:{uppercase:`At least one uppercase letter.`,number:`At least one number.`,length:[`At least 10 characters.`],unnamed:!0}}]})]}),play:async({canvasElement:e})=>{let t=b(e).getByRole(`alert`),n=b(t).getAllByRole(`listitem`);await _(n).toHaveLength(3),await _(n[0]).toHaveTextContent(`At least one uppercase letter.`),await _(n[1]).toHaveTextContent(`At least one number.`),await _(n[2]).toHaveTextContent(`At least 10 characters.`),await _(t).not.toHaveTextContent(`true`)}},j={render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(o,{children:`Email`}),(0,g.jsx)(S,{type:`email`}),(0,g.jsx)(u.Error,{errors:[void 0]})]}),play:async({canvasElement:e})=>{let t=b(e);await _(t.queryByRole(`alert`)).toBeNull(),await _(t.getByRole(`textbox`,{name:`Email`})).not.toHaveAttribute(`aria-describedby`)}},M={args:{disabled:!0},render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(o,{children:`Agency`}),(0,g.jsx)(S,{defaultValue:`Acme Insurance`}),(0,g.jsx)(u.Description,{children:`Managed by your administrator.`})]}),play:async({canvasElement:e})=>{let t=b(e);await _(t.getByRole(`textbox`,{name:`Agency`})).toBeDisabled(),await _(e.querySelector(`[data-slot=field][data-disabled]`)).not.toBeNull()}},N={args:{readOnly:!0},render:e=>(0,g.jsxs)(u.Root,{...e,children:[(0,g.jsx)(o,{children:`Policy number`}),(0,g.jsx)(S,{defaultValue:`POL-2049-118`}),(0,g.jsx)(u.Description,{children:`Assigned by the carrier; contact support to change it.`})]}),play:async({canvasElement:e})=>{let t=b(e).getByRole(`textbox`,{name:`Policy number`});await _(t).toHaveAttribute(`readonly`),await _(t).not.toBeDisabled(),await _(e.querySelector(`[data-slot=field][data-readonly]`)).not.toBeNull()}},P={render:()=>(0,g.jsxs)(u.Group,{className:`w-160`,children:[(0,g.jsxs)(u.Root,{orientation:`horizontal`,"data-testid":`short`,children:[(0,g.jsx)(o,{children:`Full name`}),(0,g.jsx)(S,{defaultValue:`Rafa Moro`,className:`w-72`})]}),(0,g.jsxs)(u.Root,{orientation:`horizontal`,"data-testid":`long`,children:[(0,g.jsx)(o,{children:`Title`}),(0,g.jsxs)(u.Content,{className:`w-72`,children:[(0,g.jsx)(S,{placeholder:`Software engineer`}),(0,g.jsx)(u.Description,{children:`Shown on your public profile.`})]})]}),(0,g.jsxs)(u.Root,{orientation:`horizontal`,"data-testid":`switch`,children:[(0,g.jsxs)(u.Content,{children:[(0,g.jsx)(o,{children:`Auto-renew`}),(0,g.jsx)(u.Description,{children:`Renews the policy automatically before it expires.`})]}),(0,g.jsx)(C,{className:`self-center`})]}),(0,g.jsx)(`div`,{className:`w-[20rem]`,"data-testid":`narrow`,children:(0,g.jsxs)(u.Root,{orientation:`horizontal`,children:[(0,g.jsx)(o,{children:`Email`}),(0,g.jsx)(S,{type:`email`,placeholder:`you@example.com`,className:`w-40`})]})})]}),play:async({canvasElement:e})=>{let t=b(e),n=e=>e.getBoundingClientRect(),r=t.getByTestId(`short`),i=t.getByTestId(`long`),a=r.querySelector(`input`),o=i.querySelector(`input`);await _(n(a).left).toBe(n(o).left),await _(Math.round(n(a).right)).toBe(Math.round(n(r).right));let s=i.querySelector(`[data-slot=field-description]`);await _(n(s).left).toBe(n(o).left),await _(n(s).top).toBeGreaterThanOrEqual(n(o).bottom),await _(o).toHaveAccessibleDescription(`Shown on your public profile.`);let c=t.getByRole(`switch`,{name:`Auto-renew`});await _(Math.round(n(c).right)).toBe(Math.round(n(t.getByTestId(`switch`)).right));let l=t.getByTestId(`narrow`),u=l.querySelector(`label`),d=l.querySelector(`input`);await _(n(u).right).toBeLessThanOrEqual(n(d).left)}},F={render:()=>(0,g.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,g.jsx)(`div`,{className:`w-full max-w-160`,"data-testid":`wide`,children:(0,g.jsxs)(u.Root,{orientation:`responsive`,children:[(0,g.jsx)(o,{children:`Email`}),(0,g.jsxs)(u.Content,{className:`@md/field:w-72`,children:[(0,g.jsx)(S,{type:`email`,placeholder:`you@example.com`}),(0,g.jsx)(u.Description,{children:`We only use this to send policy documents, and never to contact you about anything else.`})]})]})}),(0,g.jsx)(`div`,{className:`w-full max-w-[20rem]`,"data-testid":`narrow`,children:(0,g.jsxs)(u.Root,{orientation:`responsive`,children:[(0,g.jsx)(o,{children:`Email`}),(0,g.jsxs)(u.Content,{children:[(0,g.jsx)(S,{type:`email`,placeholder:`you@example.com`}),(0,g.jsx)(u.Description,{children:`We only use this to send policy documents.`})]})]})})]}),play:async({canvasElement:e})=>{let t=b(e),n=e=>e.getBoundingClientRect(),r=t.getByTestId(`wide`),i=r.querySelector(`label`),a=r.querySelector(`input`),o=r.querySelector(`[data-slot=field-content]`);await _(n(i).right).toBeLessThanOrEqual(n(a).left),await _(n(o).width).toBe(288);let s=t.getByTestId(`narrow`),c=s.querySelector(`label`),l=s.querySelector(`input`);await _(n(l).top).toBeGreaterThanOrEqual(n(c).bottom),await _(n(l).left).toBe(n(c).left)}},I={render:()=>(0,g.jsxs)(u.Group,{children:[(0,g.jsxs)(u.Root,{required:!0,children:[(0,g.jsx)(o,{children:`Full name`}),(0,g.jsx)(S,{placeholder:`Jane Doe`})]}),(0,g.jsxs)(u.Root,{required:!0,invalid:!0,children:[(0,g.jsx)(o,{children:`Email`}),(0,g.jsx)(S,{type:`email`,defaultValue:`not-an-email`}),(0,g.jsx)(u.Error,{children:`Enter a valid email address.`})]}),(0,g.jsxs)(u.Root,{children:[(0,g.jsx)(o,{optional:!0,children:`Phone number`}),(0,g.jsx)(S,{type:`tel`,placeholder:`+1 (555) 000-0000`})]})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getAllByRole(`textbox`).map(e=>e.id);await _(new Set(n).size).toBe(3),await _(t.getAllByRole(`alert`)).toHaveLength(1)}},L={render:()=>(0,g.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,g.jsx)(o,{htmlFor:`standalone-email`,children:`Email`}),(0,g.jsx)(S,{id:`standalone-email`,type:`email`,"aria-describedby":`standalone-error`}),(0,g.jsx)(u.Error,{id:`standalone-error`,children:`Something went wrong.`})]}),play:async({canvasElement:e})=>{let t=b(e);await _(t.getByRole(`textbox`,{name:`Email`})).toHaveAttribute(`id`,`standalone-email`),await _(t.getByRole(`alert`)).toHaveAttribute(`id`,`standalone-error`)}},R={render:()=>(0,g.jsxs)(u.Root,{children:[(0,g.jsx)(o,{htmlFor:`own-input`,children:`Email`}),(0,g.jsx)(`input`,{id:`own-input`,type:`email`,className:f()}),(0,g.jsx)(u.Description,{id:`own-description`,children:`Points wherever you say.`})]}),play:async({canvasElement:e})=>{let t=b(e);await _(t.getByText(`Email`).closest(`label`)).toHaveAttribute(`for`,`own-input`),await _(t.getByRole(`textbox`,{name:`Email`})).toHaveAttribute(`id`,`own-input`),await _(t.getByText(/Points wherever/)).toHaveAttribute(`id`,`own-description`)}},z=({errors:e,children:t})=>{let n=(0,h.use)(l);return(0,g.jsx)(l,{value:n&&{...n,errors:e},children:t})},B={render:()=>{let[e,t]=(0,h.useState)(``),[n,r]=(0,h.useState)(!1),i=n&&!e?[{message:`Required`}]:void 0;return(0,g.jsxs)(u.Root,{invalid:!!i,required:!0,children:[(0,g.jsx)(o,{children:`Email`}),(0,g.jsx)(S,{type:`email`,value:e,onChange:e=>t(e.target.value),onBlur:()=>r(!0)}),(0,g.jsx)(z,{errors:i,children:(0,g.jsx)(u.Error,{})})]})},play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Email`});await _(t.queryByRole(`alert`)).toBeNull(),await v.click(n),await v.tab(),await _(await t.findByRole(`alert`)).toHaveTextContent(`Required`),await _(n).toHaveAttribute(`aria-invalid`,`true`),await v.type(n,`jane@example.com`),await y(()=>_(t.queryByRole(`alert`)).toBeNull()),await _(n).not.toHaveAttribute(`aria-invalid`)}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`A vertical field with a label, a control and helper text. The label points
at the control and the description is referenced by it — neither needed an
explicit \`id\`.

@summary Default vertical field with label, control and description`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"`required` on the root is the single source of truth: the label shows its\nasterisk and the control receives `required`, both through context.\n\n@summary Required field driven from the root alone",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`\`optional\` on the label appends the muted suffix; the control stays
non-required.

@summary Optional field with the muted label suffix`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`\`Field.Label\` puts an info button beside the caption. It is a sibling of the
\`<label>\`, so it keeps its own accessible name, clicking it does not focus
the control, and the control's name stays clean. It opens on focus too.

@summary Label with a tooltip trigger beside it`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"`invalid` on the root sets `data-invalid` for styling and `aria-invalid` on\nthe control, which drives its destructive border; the label keeps its color\nby design. `Field.Error` takes the error objects as they come from a form\nlibrary.\n\n@summary Invalid field with a single error message",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Several errors render as a list, de-duplicated by message.

@summary Several errors rendered as a de-duplicated list`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`One error whose \`types\` lists every rule that failed renders as that same
list. A form library fills it when it collects all the failures instead of
stopping at the first (react-hook-form's \`criteriaMode: 'all'\`), leaving only
the first one in \`message\`, so the messages take precedence over it. A rule
that failed without a message of its own contributes nothing.

@summary Every rule a single error collected, rendered as a list`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"`Field.Error` renders nothing without a message, so it can stay mounted and\nreceive `undefined` entries while the field is valid. With no description\neither, the control carries no `aria-describedby` at all.\n\n@summary Error stays mounted and renders nothing while valid",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"`disabled` on the root disables the control through context and sets\n`data-disabled` for styling.\n\n@summary Disabled field driven from the root",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"`readOnly` on the root makes the control read-only through context and sets\n`data-readonly` for styling. Unlike `disabled`, the value stays focusable,\ncopyable and submitted.\n\n@summary Read-only field driven from the root",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
                <DemoSwitch className="self-center" />
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
    const toggle = canvas.getByRole('switch', {
      name: 'Auto-renew'
    });
    await expect(Math.round(rect(toggle).right)).toBe(Math.round(rect(canvas.getByTestId('switch')).right));

    // Horizontal never folds: the row holds even when the field is narrow.
    const narrow = canvas.getByTestId('narrow');
    const narrowLabel = narrow.querySelector('label') as HTMLElement;
    const narrowInput = narrow.querySelector('input') as HTMLElement;
    await expect(rect(narrowLabel).right).toBeLessThanOrEqual(rect(narrowInput).left);
  }
}`,...P.parameters?.docs?.source},description:{story:"`horizontal` is one row at every width. The first child fills the row and\neverything after it keeps its natural width, aligned to the right edge, so\nthe controls of stacked fields line up whatever their labels measure. Wrap a\nlabel with its description, or a control with its messages, in\n`Field.Content`. A control sets its own width: `Input` is `w-full`, so it\ngets one here.\n\n@summary Horizontal field, one row at every width, controls right-aligned",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"`responsive` stacks the parts below `28rem` and behaves like `horizontal`\nfrom there: first child fills, the rest keep their width on the right. It\nmeasures the field itself, so it needs no particular wrapper. A width that\nshould only apply once horizontal goes behind `@md/field:`.\n\n@summary Responsive field that stacks when narrow",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`\`Field.Group\` stacks fields and owns the space between them. Each field gets
its own ids, so several on one page never collide.

@summary Several fields stacked in a group`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"Outside a `Field.Root` every part reads a `null` context and works on its own\nprops alone: `Label` needs its `htmlFor`, `Field.Error` its own `id`.\n\n@summary Label and Field.Error used without a Field.Root",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"A context is a default, never an override: an explicit `htmlFor` or `id` on a\npart wins over what `Field.Root` provides.\n\n@summary Explicit props on a part win over the field's context",...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"`FieldContext` is an extension point: re-provided under the root with the\nerrors, a bare `<Field.Error />` renders them — here with `useState` and no\nform library. `InputContext` extends the same way with `value`, `onChange`,\n`onBlur` and `name`; see `FieldText`.\n\n@summary Errors supplied to a bare Field.Error through context",...B.parameters?.docs?.description}}},V=[`Default`,`Required`,`Optional`,`WithTooltip`,`Invalid`,`MultipleErrors`,`ErrorWithTypes`,`NoError`,`Disabled`,`ReadOnly`,`Horizontal`,`Responsive`,`Group`,`StandaloneOutsideField`,`OwnPropsWin`,`ErrorsFromContext`]})))()}H();export{w as Default,M as Disabled,A as ErrorWithTypes,B as ErrorsFromContext,I as Group,P as Horizontal,O as Invalid,k as MultipleErrors,j as NoError,E as Optional,R as OwnPropsWin,N as ReadOnly,T as Required,F as Responsive,L as StandaloneOutsideField,D as WithTooltip,V as __namedExportsOrder,x as default};