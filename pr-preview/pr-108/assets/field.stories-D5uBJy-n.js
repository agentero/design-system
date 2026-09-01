import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n}from"./input-D84gv-Vy.js";import{a as r,i,n as a,r as o,t as s}from"./field-DFelqVZH.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{r(),o(),a(),c=t(),{expect:l,spyOn:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Field`,component:s,tags:[`autodocs`],argTypes:{label:{control:`text`},tooltip:{control:`text`},description:{control:`text`},optional:{control:`boolean`},required:{control:`boolean`},orientation:{control:`radio`,options:[`vertical`,`horizontal`]},controlId:{control:`text`},errors:{control:!1},children:{control:!1}},args:{label:`Agency name`,children:(0,c.jsx)(n,{placeholder:`ACME Insurance`})},decorators:[e=>(0,c.jsx)(`div`,{className:`max-w-md`,children:(0,c.jsx)(e,{})})],parameters:{docs:{description:{component:`Field lays out one form field — caption, control, helper text and error — and
wires their accessibility relations for free. The parts arrive as flat props
and the control as the single child: Field generates the ids, points the
caption at the control, and merges \`id\`, \`aria-invalid\`, \`aria-describedby\`
and the native \`required\` onto it. The control stays a plain component that
knows nothing about fields.

The layout is closed on purpose — there is no way to reorder the parts or to
assemble the caption yourself, which is what keeps every form in the product
looking the same. For a text field, reach for \`FieldText\` instead; the
generic Field is for controls that have no ready-made field yet.`}}}},m={play:async({canvasElement:e})=>{let t=f(e).getByLabelText(`Agency name`);await l(t).toBeInTheDocument(),await l(t).not.toHaveAttribute(`aria-invalid`),await l(t).toHaveAttribute(`aria-describedby`),await l(t).toHaveAccessibleDescription(``)}},h={args:{label:`Scheduling link`,description:`Shown on your public profile.`,errors:[{message:`Enter a full URL, including https://.`}],children:(0,c.jsx)(n,{type:`url`,defaultValue:`cal.com/jane`})},play:async({canvasElement:e})=>{let t=f(e),n=t.getByLabelText(`Scheduling link`),r=t.getByRole(`alert`);await l(n).toHaveAttribute(`aria-invalid`,`true`),await l(r).toHaveTextContent(`Enter a full URL, including https://.`),await l(n).toHaveAccessibleDescription(`Shown on your public profile. Enter a full URL, including https://.`)}},g={args:{label:`Password`,errors:[{message:`Use at least 12 characters.`},{message:`Add a number.`},{message:`Add a number.`}],children:(0,c.jsx)(n,{type:`password`,defaultValue:`abc`})},play:async({canvasElement:e})=>{await l(f(e).getAllByRole(`listitem`)).toHaveLength(2)}},_={args:{label:`Scheduling link`,optional:!0,tooltip:`Anyone with this link can book time on your calendar.`,children:(0,c.jsx)(n,{type:`url`,placeholder:`https://cal.com/jane`})},play:async({canvasElement:e})=>{let t=f(e),n=f(document.body);await l(t.getByRole(`textbox`,{name:`Scheduling link`})).toBeInTheDocument();let r=e.querySelector(`[data-slot="label"] span`);await l(getComputedStyle(r,`::after`).content).toContain(`optional`);let i=t.getByRole(`button`,{name:`More information`});await l(i).toBeInTheDocument(),await d.hover(i);let a=(await n.findAllByText(`Anyone with this link can book time on your calendar.`))[0]?.closest(`[data-side]`)?.getAttribute(`data-side`);await l([`top`,`bottom`]).toContain(a)}},v=e=>e.getBoundingClientRect(),y=e=>v(e).top+v(e).height/2,b={render:e=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`},children:[(0,c.jsx)(s,{...e,"data-testid":`vertical-field`,children:(0,c.jsx)(n,{type:`url`,placeholder:`https://cal.com/jane`})}),(0,c.jsx)(s,{...e,orientation:`horizontal`,"data-testid":`horizontal-field`,children:(0,c.jsx)(n,{type:`url`,placeholder:`https://cal.com/jane`})})]}),args:{label:`Scheduling link`,tooltip:`Anyone with this link can book time on your calendar.`,description:`Shown on your public profile.`},play:async({canvasElement:e})=>{let t=f(e);for(let e of[`vertical-field`,`horizontal-field`]){let n=t.getByTestId(e),r=f(n),i=n.querySelector(`[data-slot="field-caption"]`),a=r.getByText(`Scheduling link`).closest(`label`),o=r.getByRole(`button`,{name:`More information`}),s=r.getByRole(`textbox`),c=r.getByText(`Shown on your public profile.`);await l(getComputedStyle(n).display).toBe(`grid`);for(let e of[i,s,c])await l(e.parentElement).toBe(n);await l(a.parentElement).toBe(i),await l(o.parentElement).toBe(i),await l(y(o)).toBeCloseTo(y(a),0),await l(v(o).left).toBeGreaterThanOrEqual(v(a).right)}let n=t.getByTestId(`vertical-field`),r=n.querySelector(`[data-slot="field-caption"]`),i=f(n).getByRole(`textbox`),a=f(n).getByText(`Shown on your public profile.`);await l(v(i).top).toBeGreaterThanOrEqual(v(r).bottom),await l(v(a).top).toBeGreaterThanOrEqual(v(i).bottom),await l(v(i).width).toBeCloseTo(v(n).width,0);let o=t.getByTestId(`horizontal-field`),s=o.querySelector(`[data-slot="field-caption"]`),c=f(o).getByRole(`textbox`),u=f(o).getByText(`Shown on your public profile.`);await l(v(c).left).toBeGreaterThanOrEqual(v(s).right),await l(y(s)).toBeCloseTo(y(c),0),await l(v(u).left).toBeCloseTo(v(c).left,0),await l(v(u).top).toBeGreaterThanOrEqual(v(c).bottom),await l(v(c).left-v(o).left).toBeCloseTo(204,0)}},x={tags:[`!manifest`],render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`},children:[(0,c.jsx)(s,{label:`Required`,required:!0,"data-testid":`required`,children:(0,c.jsx)(n,{placeholder:`ACME Insurance`})}),(0,c.jsx)(s,{label:`Optional and required`,optional:!0,required:!0,"data-testid":`required-and-optional`,children:(0,c.jsx)(n,{placeholder:`ACME Insurance`})}),(0,c.jsx)(s,{label:`Optional only`,optional:!0,"data-testid":`optional-only`,children:(0,c.jsx)(n,{placeholder:`ACME Insurance`})})]}),play:async({canvasElement:e})=>{let t=f(e),n=e=>getComputedStyle(e.querySelector(`[data-slot="label"] span`),`::after`).content,r=f(t.getByTestId(`required`));await l(r.getByRole(`textbox`)).toBeRequired(),await l(r.getByText(`*`)).toBeInTheDocument(),await l(r.getByRole(`textbox`)).toHaveAccessibleName(`Required`);let i=t.getByTestId(`required-and-optional`);await l(f(i).getByText(`*`)).toBeInTheDocument(),await l(n(i)).toBe(`none`),await l(n(t.getByTestId(`optional-only`))).toContain(`optional`)}},S={args:{label:`Billing email`,controlId:`billing-email`,children:(0,c.jsx)(n,{type:`email`,placeholder:`billing@acme-insurance.com`})},play:async({canvasElement:e})=>{await l(f(e).getByLabelText(`Billing email`)).toHaveAttribute(`id`,`billing-email`)}},C={tags:[`!manifest`],render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`20rem`},children:[(0,c.jsx)(s,{label:`Account fields`,errors:[{message:`Pick at least one.`}],children:(0,c.jsx)(n,{size:`lg`,"aria-describedby":`sync-help`})}),(0,c.jsx)(s,{label:`Contact fields`,children:(0,c.jsx)(n,{"aria-describedby":`sync-help`})}),(0,c.jsx)(`p`,{id:`sync-help`,children:`Only the fields selected here are kept in sync.`})]}),play:async({canvasElement:e})=>{let t=f(e),n=t.getByLabelText(`Account fields`);await l(n.getAttribute(`aria-describedby`)?.split(` `)??[]).toEqual([`sync-help`]),await l(n).toHaveAccessibleDescription(`Only the fields selected here are kept in sync.`),await l(t.getByText(`Pick at least one.`)).toBeInTheDocument(),await l(n).toHaveAttribute(`data-size`,`lg`)}},w={tags:[`!manifest`],play:async({canvasElement:e})=>{let t=f(e).getByLabelText(`Agency name`);await d.type(t,`Typed by the user`),await l(t).toHaveValue(`Typed by the user`)}},T=()=>{let e=i();return(0,c.jsxs)(`div`,{"data-slot":`input-group`,style:{display:`flex`,alignItems:`center`,gap:`.5rem`},children:[(0,c.jsx)(n,{type:`text`,placeholder:`jane`,id:e?.controlId,"aria-describedby":e?.describedBy,"aria-invalid":e?.invalid||void 0,required:e?.required||void 0}),(0,c.jsx)(`span`,{"aria-hidden":!0,children:`@acme-insurance.com`})]})},E={tags:[`!manifest`],render:()=>(0,c.jsx)(s,{label:`Work email`,description:`We only use it to send the magic link.`,"data-testid":`composite-field`,children:(0,c.jsx)(T,{})}),play:async({canvasElement:e})=>{let t=f(e).getByRole(`textbox`,{name:`Work email`});await l(t).toHaveAttribute(`id`),await l(t).toHaveAccessibleDescription(`We only use it to send the magic link.`),await l(t.closest(`[data-slot="input-group"]`)).not.toBeNull()}},D={tags:[`!dev`,`!manifest`],parameters:{a11y:{test:`off`}},beforeEach:()=>{let e=u(console,`warn`).mockImplementation(()=>{});return()=>e.mockRestore()},render:()=>(0,c.jsx)(s,{label:`Wired onto the wrapper`,"data-testid":`broken-field`,children:(0,c.jsxs)(`div`,{"data-slot":`input-group`,style:{display:`flex`,gap:`.5rem`},children:[(0,c.jsx)(n,{type:`text`,placeholder:`jane`}),(0,c.jsx)(`span`,{"aria-hidden":!0,children:`@acme-insurance.com`})]})}),play:async({canvasElement:e})=>{let t=f(e).getByTestId(`broken-field`),n=t.querySelector(`[data-slot="input-group"]`),r=f(t).getByText(`Wired onto the wrapper`).closest(`label`);await l(console.warn).toHaveBeenCalledWith(l.stringContaining(`Field wired a <div>`)),await l(n).toHaveAttribute(`id`),await l(r).toHaveAttribute(`for`,n?.getAttribute(`id`)),await l(f(t).getByRole(`textbox`)).toHaveAccessibleName(``)}},O=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],k=[2024,2023,2022,2021],A={height:`2.5rem`,borderRadius:`.375rem`,border:`1px solid var(--color-border-input-default)`,background:`var(--color-bg-input-normal)`,padding:`0 .5rem`},j=()=>{let e=i(),t={"aria-describedby":e?.describedBy,"aria-invalid":e?.invalid||void 0,required:e?.required||void 0,style:A};return(0,c.jsxs)(`fieldset`,{style:{border:0,margin:0,padding:0},children:[(0,c.jsx)(`legend`,{style:{padding:0,fontSize:`.875rem`,fontWeight:600},children:`Licence obtained`}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`.5rem`,paddingTop:`.25rem`},children:[(0,c.jsxs)(`select`,{"aria-label":`Month`,defaultValue:``,...t,children:[(0,c.jsx)(`option`,{value:``,disabled:!0,children:`Month`}),O.map(e=>(0,c.jsx)(`option`,{value:e,children:e},e))]}),(0,c.jsxs)(`select`,{"aria-label":`Year`,defaultValue:``,...t,children:[(0,c.jsx)(`option`,{value:``,disabled:!0,children:`Year`}),k.map(e=>(0,c.jsx)(`option`,{value:e,children:e},e))]})]})]})},M={tags:[`!manifest`],render:()=>(0,c.jsx)(s,{description:`Renewal reminders go out 30 days before.`,errors:[{message:`Pick both a month and a year.`}],"data-testid":`year-month-field`,children:(0,c.jsx)(j,{})}),play:async({canvasElement:e})=>{let t=f(e),n=t.getByRole(`combobox`,{name:`Month`}),r=t.getByRole(`combobox`,{name:`Year`});for(let e of[n,r])await l(e).toHaveAccessibleDescription(`Renewal reminders go out 30 days before. Pick both a month and a year.`),await l(e).toHaveAttribute(`aria-invalid`,`true`);let i=t.getAllByRole(`alert`);await l(i).toHaveLength(1),await l(i[0]).toHaveTextContent(`Pick both a month and a year.`)}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Agency name');
    await expect(input).toBeInTheDocument();
    // A valid field renders no aria-invalid attribute at all — the
    // \`aria-invalid="false"\` footgun some screen readers announce.
    await expect(input).not.toHaveAttribute('aria-invalid');
    // The field always advertises its description and error ids, even with
    // neither part rendered. Those dangling references cost nothing: the
    // description comes out empty and axe raises nothing — which is what
    // spares the description and error from registering with the root.
    await expect(input).toHaveAttribute('aria-describedby');
    await expect(input).toHaveAccessibleDescription('');
  }
}`,...m.parameters?.docs?.source},description:{story:"Caption and control, associated through the ids Field generates — no\n`htmlFor`/`id` written by hand.\n\n@summary Label and control wired automatically from a flat prop surface",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Scheduling link',
    description: 'Shown on your public profile.',
    errors: [{
      message: 'Enter a full URL, including https://.'
    }],
    children: <Input type="url" defaultValue="cal.com/jane" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Scheduling link');
    const error = canvas.getByRole('alert');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(error).toHaveTextContent('Enter a full URL, including https://.');
    await expect(input).toHaveAccessibleDescription('Shown on your public profile. Enter a full URL, including https://.');
  }
}`,...h.parameters?.docs?.source},description:{story:`Helper text and error message both reach the control through the single
\`aria-describedby\` the field advertises. Any error with a message flips the
field to invalid, so \`aria-invalid\` and the message can never disagree, and
the message is announced assertively via \`role="alert"\`.

@summary Description and error wired into the control's aria-describedby`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    errors: [{
      message: 'Use at least 12 characters.'
    }, {
      message: 'Add a number.'
    }, {
      message: 'Add a number.'
    }],
    children: <Input type="password" defaultValue="abc" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole('listitem')).toHaveLength(2);
  }
}`,...g.parameters?.docs?.source},description:{story:`Several errors render as a list, deduped by message, so a rule that fires
twice is only read out once.

@summary Multiple error messages collapse into a deduped list`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Scheduling link',
    optional: true,
    tooltip: 'Anyone with this link can book time on your calendar.',
    children: <Input type="url" placeholder="https://cal.com/jane" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    // The trigger lives outside the <label>: the control's name is only the
    // caption…
    await expect(canvas.getByRole('textbox', {
      name: 'Scheduling link'
    })).toBeInTheDocument();
    // …the muted "(optional)" suffix is a pseudo-element, so it is read off the
    // computed style rather than the DOM, and it stays out of that name.
    const caption = canvasElement.querySelector('[data-slot="label"] span') as HTMLElement;
    await expect(getComputedStyle(caption, '::after').content).toContain('optional');
    // …and the trigger is an independently focusable, named button.
    const trigger = canvas.getByRole('button', {
      name: 'More information'
    });
    await expect(trigger).toBeInTheDocument();

    // One prop is enough. The balloon is placed above the trigger and flips
    // below when there is no room — asserted as "one of the two" on purpose,
    // since the side depends on available space, which is exactly why there is
    // nothing here for a consumer to choose.
    await userEvent.hover(trigger);
    const hints = await body.findAllByText('Anyone with this link can book time on your calendar.');
    const side = hints[0]?.closest('[data-side]')?.getAttribute('data-side');
    await expect(['top', 'bottom']).toContain(side);
  }
}`,..._.parameters?.docs?.source},description:{story:`The hint trigger sits beside the caption, outside the \`<label>\` element, so
the control's accessible name stays clean and the trigger keeps its own.
\`tooltip\` takes the content and that is the entire API — no trigger to place,
no side to choose. The hint pops above and flips when there is no room, in
every field, which is the point.

@summary Optional suffix on the caption plus a tooltip outside the label`,..._.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem'
  }}>
            <Field {...args} data-testid="vertical-field">
                <Input type="url" placeholder="https://cal.com/jane" />
            </Field>

            <Field {...args} orientation="horizontal" data-testid="horizontal-field">
                <Input type="url" placeholder="https://cal.com/jane" />
            </Field>
        </div>,
  args: {
    label: 'Scheduling link',
    tooltip: 'Anyone with this link can book time on your calendar.',
    description: 'Shown on your public profile.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const testId of ['vertical-field', 'horizontal-field']) {
      const root = canvas.getByTestId(testId);
      const field = within(root);
      const caption = root.querySelector('[data-slot="field-caption"]') as HTMLElement;
      const label = field.getByText('Scheduling link').closest('label') as HTMLElement;
      const trigger = field.getByRole('button', {
        name: 'More information'
      });
      const control = field.getByRole('textbox');
      const description = field.getByText('Shown on your public profile.');
      await expect(getComputedStyle(root).display).toBe('grid');
      // The parts the root places are the caption, the control and the
      // messages — nothing else sits in between.
      for (const part of [caption, control, description]) {
        await expect(part.parentElement).toBe(root);
      }
      // The label and its trigger are inside the caption, side by side, and
      // the consumer never wrote that pairing.
      await expect(label.parentElement).toBe(caption);
      await expect(trigger.parentElement).toBe(caption);
      await expect(middle(trigger)).toBeCloseTo(middle(label), 0);
      await expect(box(trigger).left).toBeGreaterThanOrEqual(box(label).right);
    }

    // Vertical: the control is below the caption and takes the full width.
    const vertical = canvas.getByTestId('vertical-field');
    const verticalCaption = vertical.querySelector('[data-slot="field-caption"]') as HTMLElement;
    const verticalControl = within(vertical).getByRole('textbox');
    const verticalDescription = within(vertical).getByText('Shown on your public profile.');
    await expect(box(verticalControl).top).toBeGreaterThanOrEqual(box(verticalCaption).bottom);
    await expect(box(verticalDescription).top).toBeGreaterThanOrEqual(box(verticalControl).bottom);
    await expect(box(verticalControl).width).toBeCloseTo(box(vertical).width, 0);

    // Horizontal: the caption is to the left, on the control's row, and the
    // description lines up under the control — not under the caption.
    const horizontal = canvas.getByTestId('horizontal-field');
    const horizontalCaption = horizontal.querySelector('[data-slot="field-caption"]') as HTMLElement;
    const horizontalControl = within(horizontal).getByRole('textbox');
    const horizontalDescription = within(horizontal).getByText('Shown on your public profile.');
    await expect(box(horizontalControl).left).toBeGreaterThanOrEqual(box(horizontalCaption).right);
    await expect(middle(horizontalCaption)).toBeCloseTo(middle(horizontalControl), 0);
    await expect(box(horizontalDescription).left).toBeCloseTo(box(horizontalControl).left, 0);
    await expect(box(horizontalDescription).top).toBeGreaterThanOrEqual(box(horizontalControl).bottom);
    // The label column is the fixed 12rem default plus the 12px column gap, so
    // labels line up down a form instead of each field sizing its own column.
    await expect(box(horizontalControl).left - box(horizontal).left).toBeCloseTo(192 + 12, 0);
  }
}`,...b.parameters?.docs?.source},description:{story:`The two arrangements, asserted in a real browser so a change to the recipe
fails the test rather than the design review.

- **vertical** (the default) — caption, control and messages stacked in one
  column.
- **horizontal** — caption in a fixed-width first column, the control on its
  row, and the description under the control rather than under the caption.

The caption travels as a single grid item, which is what lets one
slot-to-cell mapping serve both. In horizontal the label column is
\`--field-label-width\` (12rem by default) rather than \`auto\`: each field is
its own grid, so an auto column would size differently per field and nothing
would line up down the form.

@summary Vertical and horizontal arrangements side by side`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: () => <div style={{
    display: 'grid',
    gap: '2rem'
  }}>
            <Field label="Required" required data-testid="required">
                <Input placeholder="ACME Insurance" />
            </Field>

            <Field label="Optional and required" optional required data-testid="required-and-optional">
                <Input placeholder="ACME Insurance" />
            </Field>

            <Field label="Optional only" optional data-testid="optional-only">
                <Input placeholder="ACME Insurance" />
            </Field>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const suffixOf = (root: HTMLElement) => getComputedStyle(root.querySelector('[data-slot="label"] span') as HTMLElement, '::after').content;

    // Declared once: caption and control both marked, and the decorative
    // asterisk stays out of the accessible name.
    const required = within(canvas.getByTestId('required'));
    await expect(required.getByRole('textbox')).toBeRequired();
    await expect(required.getByText('*')).toBeInTheDocument();
    await expect(required.getByRole('textbox')).toHaveAccessibleName('Required');

    // required wins over optional, and rendering does not throw.
    const conflicting = canvas.getByTestId('required-and-optional');
    await expect(within(conflicting).getByText('*')).toBeInTheDocument();
    await expect(suffixOf(conflicting)).toBe('none');

    // The reference: optional alone does render the suffix.
    await expect(suffixOf(canvas.getByTestId('optional-only'))).toContain('optional');
  }
}`,...x.parameters?.docs?.source},description:{story:'`required` is declared once, on the field, and reaches both halves: the\ncaption draws the asterisk and the control gets the native `required`\nattribute. That matters because the asterisk is `aria-hidden` — the attribute\nis the only half a screen reader announces, and declaring them separately\nmakes it possible to ship the asterisk without it, a mistake neither\nTypeScript nor axe can catch.\n\n`optional` and `required` together do not throw: `required` wins and the\n" (optional)" suffix is dropped. The suffix is a CSS pseudo-element, so the\nassertions read it off the computed style rather than the DOM.\n\n@summary required declared once reaches both the caption and the control',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Billing email',
    controlId: 'billing-email',
    children: <Input type="email" placeholder="billing@acme-insurance.com" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Billing email')).toHaveAttribute('id', 'billing-email');
  }
}`,...S.parameters?.docs?.source},description:{story:`The generated ids are opaque on purpose — what matters is that the label,
the control and the messages agree, not what the string says. Nobody reads an
\`aria-describedby\`, and ids nobody can predict are ids nobody comes to depend
on.

Two cases need a stable one anyway: an end-to-end selector, and an
\`aria-labelledby\` pointing at the control from outside the field. That is
what \`controlId\` is for, and it replaces the generated one on the control
with the label following automatically.

It is a separate prop rather than \`id\` because \`id\` already means something:
like any component that renders an element, Field puts it on the element it
renders — its root. Redefining it to mean the control instead would make
Field the one place where \`id\` does not do what \`id\` does.

@summary Stable control id for when a generated one will not do`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: () => <div style={{
    display: 'grid',
    gap: '1rem',
    maxWidth: '20rem'
  }}>
            <Field label="Account fields" errors={[{
      message: 'Pick at least one.'
    }]}>
                <Input size="lg" aria-describedby="sync-help" />
            </Field>
            <Field label="Contact fields">
                <Input aria-describedby="sync-help" />
            </Field>
            <p id="sync-help">Only the fields selected here are kept in sync.</p>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Account fields');

    // The shared hint replaces the field's two references rather than joining
    // them: the error below is rendered, and announced by nobody.
    const references = input.getAttribute('aria-describedby')?.split(' ') ?? [];
    await expect(references).toEqual(['sync-help']);
    await expect(input).toHaveAccessibleDescription('Only the fields selected here are kept in sync.');
    await expect(canvas.getByText('Pick at least one.')).toBeInTheDocument();

    // A prop the field knows nothing about arrives untouched.
    await expect(input).toHaveAttribute('data-size', 'lg');
  }
}`,...C.parameters?.docs?.source},description:{story:`What the control declares for itself reaches it untouched — which is what
makes \`size\` the control's concern rather than the field's: the generic Field
takes an arbitrary child and cannot know whether it accepts a \`size\`, so you
set it on the control and the field leaves it alone.

\`aria-describedby\` is the one to be careful with. It is a list of references,
so joining is what you would expect, but the control's value is taken whole
and the field's own description and error drop out of it — they stay on
screen and stop being announced.

The shape below is a real one: two fields sharing a single block of help text
rendered once beneath them, which is why the text cannot live in either
field's \`description\`. If you need that, point the two controls at the shared
text and accept that each field's own messages leave the list, or repeat the
text per field.

@summary Control props win, and aria-describedby replaces the field's own`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Agency name');
    await userEvent.type(input, 'Typed by the user');
    await expect(input).toHaveValue('Typed by the user');
  }
}`,...w.parameters?.docs?.source},description:{story:`Typing into a wired field works exactly like a bare input — the wiring adds
attributes, never behavior.

@summary Interaction smoke test through the wired control`,...w.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: () => <Field label="Work email" description="We only use it to send the magic link." data-testid="composite-field">
            <EmailWithDomain />
        </Field>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole('textbox', {
      name: 'Work email'
    });

    // Wired through, despite sitting one level deeper than the field's parts.
    await expect(control).toHaveAttribute('id');
    await expect(control).toHaveAccessibleDescription('We only use it to send the magic link.');
    // And it really is nested inside the group, not hoisted out of it.
    await expect(control.closest('[data-slot="input-group"]')).not.toBeNull();
  }
}`,...E.parameters?.docs?.source},description:{story:`A control made of several elements — an input with a trailing addon — where
there is no single child for the field to inject into. The component reads
\`useFieldContext()\` and puts the wiring on the element that really is the
control, so the caption still points at the \`<input>\` and not at the wrapper.

@summary Composite control wiring itself through useFieldContext`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!manifest'],
  parameters: {
    a11y: {
      test: 'off'
    }
  },
  beforeEach: () => {
    const warn = spyOn(console, 'warn').mockImplementation(() => {});
    return () => warn.mockRestore();
  },
  render: () => <Field label="Wired onto the wrapper" data-testid="broken-field">
            <div data-slot="input-group" style={{
      display: 'flex',
      gap: '.5rem'
    }}>
                <Input type="text" placeholder="jane" />
                <span aria-hidden>@acme-insurance.com</span>
            </div>
        </Field>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByTestId('broken-field');
    const group = field.querySelector('[data-slot="input-group"]');
    const caption = within(field).getByText('Wired onto the wrapper').closest('label');

    // The warning fires and names the element it wired.
    await expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('Field wired a <div>'));

    // And this is what it warns about.
    await expect(group).toHaveAttribute('id');
    await expect(caption).toHaveAttribute('for', group?.getAttribute('id'));
    await expect(within(field).getByRole('textbox')).toHaveAccessibleName('');
  }
}`,...D.parameters?.docs?.source},description:{story:`The guard's test: a group passed as the field's child instead of the control
itself. The id lands on the \`<div>\`, the caption points at an element a
\`<label>\` cannot label, and the control is left with no accessible name — all
without throwing. That silence is why the warning exists.

Hidden from the library (\`!dev\`): it renders the mistake on purpose, and a
broken field is not an example to leave on display. It still runs in
\`yarn test\`, which is where the guarantee belongs.

@summary Test for the development warning when the wiring misses the control`,...D.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: () => <Field description="Renewal reminders go out 30 days before." errors={[{
    message: 'Pick both a month and a year.'
  }]} data-testid="year-month-field">
            <YearMonthControl />
        </Field>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const month = canvas.getByRole('combobox', {
      name: 'Month'
    });
    const year = canvas.getByRole('combobox', {
      name: 'Year'
    });
    const described = 'Renewal reminders go out 30 days before. Pick both a month and a year.';

    // Both controls are associated with the field's helper text and error…
    for (const control of [month, year]) {
      await expect(control).toHaveAccessibleDescription(described);
      await expect(control).toHaveAttribute('aria-invalid', 'true');
    }

    // …and the error itself is rendered — and announced — exactly once.
    const alerts = canvas.getAllByRole('alert');
    await expect(alerts).toHaveLength(1);
    await expect(alerts[0]).toHaveTextContent('Pick both a month and a year.');
  }
}`,...M.parameters?.docs?.source},description:{story:"A consumption case the flat props cannot express: two controls that together\nare one value, sharing one caption and one error. `Field` still owns the\nlayout, the ids and the messages; the control reads `useFieldContext()` and\nputs the field's `describedBy` on both selects, so the pair is described by\nthe same helper text and the same error — announced once, not twice.\n\nNote the two rules that come with the escape hatch. The caption here is a\n`<legend>` the control renders, not the field's `label`, because a single\n`<label>` can only point at one of the two selects: wiring by hand means\nplacing by hand. And nothing of this lives in a base control — a `Select`\nthat read the context would behave differently depending on where it was\nrendered.\n\n@summary Two selects as one field, assembled through the escape hatch",...M.parameters?.docs?.description}}},N=[`Default`,`WithDescriptionAndError`,`WithMultipleErrors`,`WithTooltipAndOptional`,`Orientation`,`RequiredWiring`,`WithSemanticControlId`,`ControlPropsWin`,`Interaction`,`CompositeControl`,`CompositeControlGuard`,`FieldYearMonth`]}))();export{E as CompositeControl,D as CompositeControlGuard,C as ControlPropsWin,m as Default,M as FieldYearMonth,w as Interaction,b as Orientation,x as RequiredWiring,h as WithDescriptionAndError,g as WithMultipleErrors,S as WithSemanticControlId,_ as WithTooltipAndOptional,N as __namedExportsOrder,p as default};