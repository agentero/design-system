import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-nkrlg8vk.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./input-M85UVkcr.js";import{r as d}from"./input-f0nLAMVZ.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{f=t(n(),1),c(),u(),l(),p=r(),{expect:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/Field`,component:o.Root,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`vertical`,`horizontal`]},invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{orientation:`vertical`,invalid:!1,disabled:!1,readOnly:!1,required:!1},parameters:{docs:{description:{component:"Field lays out a single form field — label, control, helper text and error —\nand wires the accessibility relationships between them. `Field.Root`\ngenerates the ids and shares them through context: `Label` reads\n`LabelContext`, `Field.Description` and `Field.Error` read theirs, and a\n`Field<X>` such as `FieldText` provides the control's context. Nobody passes\nan `id` by hand.\n\nPresentational and form-library agnostic: pass `invalid` and the error\nmessages from whatever validates the form. Spacing between fields belongs to\n`Field.Group`, never to a margin on the field itself.\n\n`Field.Description` and `Field.Error` register themselves with the root, so\nthe control's `aria-describedby` lists exactly the messages on screen and is\nabsent when there is none."}}}},y=e=>{let t=s();return(0,p.jsx)(`input`,{id:t?.controlId,"aria-describedby":t?.describedBy,"aria-invalid":t?.invalid||void 0,required:t?.required||void 0,disabled:t?.disabled||void 0,readOnly:t?.readOnly||void 0,className:d(),...e})},b={render:e=>(0,p.jsxs)(o.Root,{...e,children:[(0,p.jsx)(o.Label,{children:`Email`}),(0,p.jsx)(y,{placeholder:`you@example.com`}),(0,p.jsx)(o.Description,{children:`We only use this to send policy documents.`})]}),play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`textbox`,{name:`Email`}),r=t.getByText(/policy documents/);await m(n).toHaveAttribute(`aria-describedby`,m.stringContaining(r.id)),await m(n).toHaveAccessibleDescription(`We only use this to send policy documents.`),await m(n).not.toHaveAttribute(`aria-invalid`)}},x={args:{required:!0},render:e=>(0,p.jsxs)(o.Root,{...e,children:[(0,p.jsx)(o.Label,{children:`Full name`}),(0,p.jsx)(y,{placeholder:`Jane Doe`})]}),play:async({canvasElement:e})=>{let t=_(e);await m(t.getByRole(`textbox`,{name:`Full name`})).toBeRequired(),await m(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},S={render:e=>(0,p.jsxs)(o.Root,{...e,children:[(0,p.jsx)(o.Label,{optional:!0,children:`Phone number`}),(0,p.jsx)(y,{type:`tel`,placeholder:`+1 (555) 000-0000`})]}),play:async({canvasElement:e})=>{let t=_(e);await m(t.getByText(`Phone number`)).toHaveClass(/after:content/),await m(t.getByRole(`textbox`,{name:`Phone number`})).not.toBeRequired()}},C={args:{required:!0},render:e=>(0,p.jsxs)(o.Root,{...e,children:[(0,p.jsx)(o.Label,{tooltip:`Issued by the IRS to identify your business.`,children:`Tax ID`}),(0,p.jsx)(y,{placeholder:`XX-XXXXXXX`})]}),play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`button`,{name:`More information`});await m(n.closest(`label`)).toBeNull(),await m(t.getByRole(`textbox`,{name:`Tax ID`})).toBeInTheDocument(),await h.tab(),await m(n).toHaveFocus(),await m((await _(document.body).findAllByText(/Issued by the IRS/)).length).toBeGreaterThan(0)}},w={args:{invalid:!0},render:e=>(0,p.jsxs)(o.Root,{...e,children:[(0,p.jsx)(o.Label,{children:`Email`}),(0,p.jsx)(y,{type:`email`,defaultValue:`not-an-email`}),(0,p.jsx)(o.Error,{errors:[{message:`Enter a valid email address.`}]})]}),play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`textbox`,{name:`Email`}),r=t.getByRole(`alert`);await m(n).toHaveAttribute(`aria-invalid`,`true`),await m(n).toHaveAttribute(`aria-describedby`,m.stringContaining(r.id)),await m(n).toHaveAccessibleDescription(`Enter a valid email address.`),await m(e.querySelector(`[data-slot=field][data-invalid="true"]`)).not.toBeNull()}},T={args:{invalid:!0},render:e=>(0,p.jsxs)(o.Root,{...e,children:[(0,p.jsx)(o.Label,{children:`Password`}),(0,p.jsx)(y,{type:`password`,defaultValue:`abc`}),(0,p.jsx)(o.Error,{errors:[{message:`Use at least 8 characters.`},{message:`Include a number.`},{message:`Use at least 8 characters.`}]})]}),play:async({canvasElement:e})=>{let t=_(e);await m(t.getByRole(`alert`)).toBeInTheDocument(),await m(t.getAllByRole(`listitem`)).toHaveLength(2)}},E={render:e=>(0,p.jsxs)(o.Root,{...e,children:[(0,p.jsx)(o.Label,{children:`Email`}),(0,p.jsx)(y,{type:`email`}),(0,p.jsx)(o.Error,{errors:[void 0]})]}),play:async({canvasElement:e})=>{let t=_(e);await m(t.queryByRole(`alert`)).toBeNull(),await m(t.getByRole(`textbox`,{name:`Email`})).not.toHaveAttribute(`aria-describedby`)}},D={args:{disabled:!0},render:e=>(0,p.jsxs)(o.Root,{...e,children:[(0,p.jsx)(o.Label,{children:`Agency`}),(0,p.jsx)(y,{defaultValue:`Acme Insurance`}),(0,p.jsx)(o.Description,{children:`Managed by your administrator.`})]}),play:async({canvasElement:e})=>{await m(_(e).getByRole(`textbox`,{name:`Agency`})).toBeDisabled(),await m(e.querySelector(`[data-slot=field][data-disabled]`)).not.toBeNull()}},O={args:{readOnly:!0},render:e=>(0,p.jsxs)(o.Root,{...e,children:[(0,p.jsx)(o.Label,{children:`Policy number`}),(0,p.jsx)(y,{defaultValue:`POL-2049-118`}),(0,p.jsx)(o.Description,{children:`Assigned by the carrier; contact support to change it.`})]}),play:async({canvasElement:e})=>{let t=_(e).getByRole(`textbox`,{name:`Policy number`});await m(t).toHaveAttribute(`readonly`),await m(t).not.toBeDisabled(),await m(e.querySelector(`[data-slot=field][data-readonly]`)).not.toBeNull()}},k={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,p.jsx)(`div`,{className:`w-[40rem]`,"data-testid":`wide`,children:(0,p.jsxs)(o.Root,{orientation:`horizontal`,children:[(0,p.jsx)(o.Label,{children:`Email`}),(0,p.jsx)(y,{type:`email`,placeholder:`you@example.com`}),(0,p.jsx)(o.Description,{children:`We only use this to send policy documents.`})]})}),(0,p.jsx)(`div`,{className:`w-[40rem]`,"data-testid":`settings`,children:(0,p.jsxs)(o.Root,{orientation:`horizontal`,children:[(0,p.jsx)(i,{children:`Auto-renew`}),(0,p.jsx)(o.Description,{children:`Renews the policy automatically before it expires.`}),(0,p.jsx)(y,{type:`checkbox`,className:`size-5`})]})}),(0,p.jsx)(`div`,{className:`w-[20rem]`,"data-testid":`narrow`,children:(0,p.jsxs)(o.Root,{orientation:`horizontal`,children:[(0,p.jsx)(o.Label,{children:`Email`}),(0,p.jsx)(y,{type:`email`,placeholder:`you@example.com`}),(0,p.jsx)(o.Description,{children:`We only use this to send policy documents.`})]})})]}),play:async({canvasElement:e})=>{let t=_(e),n=e=>e.getBoundingClientRect(),r=t.getByTestId(`wide`),i=r.querySelector(`[data-slot=field-label]`),a=r.querySelector(`input`),o=r.querySelector(`[data-slot=field-description]`);await m(n(i).right).toBeLessThanOrEqual(n(a).left),await m(n(o).left).toBe(n(a).left),await m(n(o).top).toBeGreaterThanOrEqual(n(a).bottom);let s=t.getByTestId(`settings`),c=s.querySelector(`label`),l=s.querySelector(`[data-slot=field-description]`),u=s.querySelector(`input`);await m(n(l).left).toBe(n(c).left),await m(n(l).top).toBeGreaterThanOrEqual(n(c).bottom),await m(n(u).left).toBeGreaterThanOrEqual(n(c).right);let d=t.getByTestId(`narrow`),f=d.querySelector(`[data-slot=field-label]`),p=d.querySelector(`input`);await m(n(p).top).toBeGreaterThanOrEqual(n(f).bottom),await m(n(p).left).toBe(n(f).left)}},A={render:()=>(0,p.jsxs)(o.Group,{children:[(0,p.jsxs)(o.Root,{required:!0,children:[(0,p.jsx)(o.Label,{children:`Full name`}),(0,p.jsx)(y,{placeholder:`Jane Doe`})]}),(0,p.jsxs)(o.Root,{required:!0,invalid:!0,children:[(0,p.jsx)(o.Label,{children:`Email`}),(0,p.jsx)(y,{type:`email`,defaultValue:`not-an-email`}),(0,p.jsx)(o.Error,{children:`Enter a valid email address.`})]}),(0,p.jsxs)(o.Root,{children:[(0,p.jsx)(o.Label,{optional:!0,children:`Phone number`}),(0,p.jsx)(y,{type:`tel`,placeholder:`+1 (555) 000-0000`})]})]}),play:async({canvasElement:e})=>{let t=_(e),n=t.getAllByRole(`textbox`).map(e=>e.id);await m(new Set(n).size).toBe(3),await m(t.getAllByRole(`alert`)).toHaveLength(1)}},j={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(i,{htmlFor:`standalone-email`,children:`Email`}),(0,p.jsx)(y,{id:`standalone-email`,type:`email`,"aria-describedby":`standalone-error`}),(0,p.jsx)(o.Error,{id:`standalone-error`,children:`Something went wrong.`})]}),play:async({canvasElement:e})=>{let t=_(e);await m(t.getByRole(`textbox`,{name:`Email`})).toHaveAttribute(`id`,`standalone-email`),await m(t.getByRole(`alert`)).toHaveAttribute(`id`,`standalone-error`)}},M={render:()=>(0,p.jsxs)(o.Root,{children:[(0,p.jsx)(i,{htmlFor:`own-input`,children:`Email`}),(0,p.jsx)(`input`,{id:`own-input`,type:`email`,className:d()}),(0,p.jsx)(o.Description,{id:`own-description`,children:`Points wherever you say.`})]}),play:async({canvasElement:e})=>{let t=_(e);await m(t.getByText(`Email`).closest(`label`)).toHaveAttribute(`for`,`own-input`),await m(t.getByRole(`textbox`,{name:`Email`})).toHaveAttribute(`id`,`own-input`),await m(t.getByText(/Points wherever/)).toHaveAttribute(`id`,`own-description`)}},N=({errors:e,children:t})=>(0,p.jsx)(a,{value:{...(0,f.use)(a),errors:e},children:t}),P=()=>{let[e,t]=(0,f.useState)(``),[n,r]=(0,f.useState)(!1),i=n&&!e?[{message:`Required`}]:void 0;return(0,p.jsxs)(o.Root,{invalid:!!i,required:!0,children:[(0,p.jsx)(o.Label,{children:`Email`}),(0,p.jsx)(y,{type:`email`,value:e,onChange:e=>t(e.target.value),onBlur:()=>r(!0)}),(0,p.jsx)(N,{errors:i,children:(0,p.jsx)(o.Error,{})})]})},F={render:()=>(0,p.jsx)(P,{}),play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`textbox`,{name:`Email`});await m(t.queryByRole(`alert`)).toBeNull(),await h.click(n),await h.tab(),await m(await t.findByRole(`alert`)).toHaveTextContent(`Required`),await m(n).toHaveAttribute(`aria-invalid`,`true`),await h.type(n,`jane@example.com`),await g(()=>m(t.queryByRole(`alert`)).toBeNull()),await m(n).not.toHaveAttribute(`aria-invalid`)}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Field.Root {...args}>
            <Field.Label>Email</Field.Label>
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
}`,...b.parameters?.docs?.source},description:{story:`A vertical field with a label, a control and helper text. The label points
at the control and the description is referenced by it — neither needed an
explicit \`id\`.

@summary Default vertical field with label, control and description`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => <Field.Root {...args}>
            <Field.Label>Full name</Field.Label>
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
}`,...x.parameters?.docs?.source},description:{story:"`required` on the root is the single source of truth: the label shows its\nasterisk and the control receives `required`, both through context.\n\n@summary Required field driven from the root alone",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Field.Root {...args}>
            <Field.Label optional>Phone number</Field.Label>
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
}`,...S.parameters?.docs?.source},description:{story:`\`optional\` on the label appends the muted suffix; the control stays
non-required.

@summary Optional field with the muted label suffix`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`\`Field.Label\` puts an info button beside the caption. It is a sibling of the
\`<label>\`, so it keeps its own accessible name, clicking it does not focus
the control, and the control's name stays clean. It opens on focus too.

@summary Label with a tooltip trigger beside it`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field.Root {...args}>
            <Field.Label>Email</Field.Label>
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
}`,...w.parameters?.docs?.source},description:{story:"`invalid` on the root colors the label, sets `data-invalid` for styling and\n`aria-invalid` on the control. `Field.Error` takes the error objects as they\ncome from a form library.\n\n@summary Invalid field with a single error message",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field.Root {...args}>
            <Field.Label>Password</Field.Label>
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
}`,...T.parameters?.docs?.source},description:{story:`Several errors render as a list, de-duplicated by message.

@summary Several errors rendered as a de-duplicated list`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <Field.Root {...args}>
            <Field.Label>Email</Field.Label>
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
}`,...E.parameters?.docs?.source},description:{story:"`Field.Error` renders nothing without a message, so it can stay mounted and\nreceive `undefined` entries while the field is valid. With no description\neither, the control carries no `aria-describedby` at all.\n\n@summary Error stays mounted and renders nothing while valid",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Field.Root {...args}>
            <Field.Label>Agency</Field.Label>
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
}`,...D.parameters?.docs?.source},description:{story:"`disabled` on the root disables the control through context and sets\n`data-disabled` for styling.\n\n@summary Disabled field driven from the root",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  render: args => <Field.Root {...args}>
            <Field.Label>Policy number</Field.Label>
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
}`,...O.parameters?.docs?.source},description:{story:"`readOnly` on the root makes the control read-only through context and sets\n`data-readonly` for styling. Unlike `disabled`, the value stays focusable,\ncopyable and submitted.\n\n@summary Read-only field driven from the root",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
            <div className="w-[40rem]" data-testid="wide">
                <Field.Root orientation="horizontal">
                    <Field.Label>Email</Field.Label>
                    <DemoInput type="email" placeholder="you@example.com" />
                    <Field.Description>We only use this to send policy documents.</Field.Description>
                </Field.Root>
            </div>

            <div className="w-[40rem]" data-testid="settings">
                <Field.Root orientation="horizontal">
                    <Label>Auto-renew</Label>
                    <Field.Description>Renews the policy automatically before it expires.</Field.Description>
                    <DemoInput type="checkbox" className="size-5" />
                </Field.Root>
            </div>

            <div className="w-[20rem]" data-testid="narrow">
                <Field.Root orientation="horizontal">
                    <Field.Label>Email</Field.Label>
                    <DemoInput type="email" placeholder="you@example.com" />
                    <Field.Description>We only use this to send policy documents.</Field.Description>
                </Field.Root>
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rect = (element: Element) => element.getBoundingClientRect();
    const wide = canvas.getByTestId('wide');
    const wideLabel = wide.querySelector('[data-slot=field-label]') as HTMLElement;
    const wideInput = wide.querySelector('input') as HTMLElement;
    const wideDescription = wide.querySelector('[data-slot=field-description]') as HTMLElement;
    await expect(rect(wideLabel).right).toBeLessThanOrEqual(rect(wideInput).left);
    await expect(rect(wideDescription).left).toBe(rect(wideInput).left);
    await expect(rect(wideDescription).top).toBeGreaterThanOrEqual(rect(wideInput).bottom);
    const settings = canvas.getByTestId('settings');
    const settingsLabel = settings.querySelector('label') as HTMLElement;
    const settingsDescription = settings.querySelector('[data-slot=field-description]') as HTMLElement;
    const settingsControl = settings.querySelector('input') as HTMLElement;
    await expect(rect(settingsDescription).left).toBe(rect(settingsLabel).left);
    await expect(rect(settingsDescription).top).toBeGreaterThanOrEqual(rect(settingsLabel).bottom);
    await expect(rect(settingsControl).left).toBeGreaterThanOrEqual(rect(settingsLabel).right);
    const narrow = canvas.getByTestId('narrow');
    const narrowLabel = narrow.querySelector('[data-slot=field-label]') as HTMLElement;
    const narrowInput = narrow.querySelector('input') as HTMLElement;
    await expect(rect(narrowInput).top).toBeGreaterThanOrEqual(rect(narrowLabel).bottom);
    await expect(rect(narrowInput).left).toBe(rect(narrowLabel).left);
  }
}`,...k.parameters?.docs?.source},description:{story:"`horizontal` puts the label in a left column and everything else in a right\ncolumn, in DOM order: control, then description, then error. A description\nwritten right after the label stays under the label instead, which gives the\nsettings-row pattern with no wrapper. Below `28rem`, measured on the field\nitself, the parts stack. A bare `Label` gets the same placement as\n`Field.Label`.\n\n@summary Horizontal field that stacks when narrow",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Field.Group>
            <Field.Root required>
                <Field.Label>Full name</Field.Label>
                <DemoInput placeholder="Jane Doe" />
            </Field.Root>

            <Field.Root required invalid>
                <Field.Label>Email</Field.Label>
                <DemoInput type="email" defaultValue="not-an-email" />
                <Field.Error>Enter a valid email address.</Field.Error>
            </Field.Root>

            <Field.Root>
                <Field.Label optional>Phone number</Field.Label>
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
}`,...A.parameters?.docs?.source},description:{story:`\`Field.Group\` stacks fields and owns the space between them. Each field gets
its own ids, so several on one page never collide.

@summary Several fields stacked in a group`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Outside a `Field.Root` every part reads a `null` context and works on its own\nprops alone: `Label` needs its `htmlFor`, `Field.Error` its own `id`.\n\n@summary Label and Field.Error used without a Field.Root",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"A context is a default, never an override: an explicit `htmlFor` or `id` on a\npart wins over what `Field.Root` provides.\n\n@summary Explicit props on a part win over the field's context",...M.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <SimulatedFormField />,
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
}`,...F.parameters?.docs?.source},description:{story:"What a form adapter does with these contexts, simulated with `useState` and\nno form library: it re-provides `ErrorContext` with the field's errors so a\nbare `<Field.Error />` renders them. A `FieldText` adapter extends\n`InputContext` the same way with `value`, `onChange`, `onBlur` and `name`.\n\n@summary Form-adapter extension point simulated without a form library",...F.parameters?.docs?.description}}},I=[`Default`,`Required`,`Optional`,`WithTooltip`,`Invalid`,`MultipleErrors`,`NoError`,`Disabled`,`ReadOnly`,`Horizontal`,`Group`,`StandaloneOutsideField`,`OwnPropsWin`,`FormAdapterSimulation`]}))();export{b as Default,D as Disabled,F as FormAdapterSimulation,A as Group,k as Horizontal,w as Invalid,T as MultipleErrors,E as NoError,S as Optional,M as OwnPropsWin,O as ReadOnly,x as Required,j as StandaloneOutsideField,C as WithTooltip,I as __namedExportsOrder,v as default};