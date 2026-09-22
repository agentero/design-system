import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./label-CcT9Q1Cy.js";import{n as i,t as a}from"./input-CDNBut-g.js";import{n as o,t as s}from"./input-group-wxle5EOB.js";import{n as c,t as l}from"./icons-DHzydebG.js";import{n as u,t as d}from"./field-BzJcIPqf.js";import{n as f,t as p}from"./field-text-DtSGx96f.js";import{n as m,t as h}from"./divider-LO7yyEQ0.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{o(),c(),m(),u(),f(),i(),n(),g=t(),{expect:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/InputGroup`,component:s.Root,tags:[`autodocs`],decorators:[e=>(0,g.jsx)(`div`,{className:`w-96 max-w-full p-4`,children:(0,g.jsx)(e,{})})],parameters:{docs:{description:{component:"InputGroup draws an `Input` and what sits beside it — an icon, a currency or\nunit affix, a trailing action — as one bordered control. The frame owns the\nborder, the shadow and the focus ring; the `Input` inside renders bare and\nhands its state to the frame through `:has()`, so focus, `disabled`,\n`aria-invalid` and `size` are never wired by hand. Inside a `FieldText` the\n`Input` keeps taking its label and messages from the field."}}}},S={render:()=>(0,g.jsxs)(s.Root,{children:[(0,g.jsx)(s.Addon,{children:(0,g.jsx)(l,{})}),(0,g.jsx)(a,{type:`search`,placeholder:`Search agencies`,"aria-label":`Search agencies`})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`group`),r=t.getByRole(`searchbox`,{name:`Search agencies`});await _(n).toHaveAttribute(`data-slot`,`input-group`),await _(r).toHaveAttribute(`data-slot`,`input`),await v.click(e.querySelector(`[data-slot="input-group-addon"]`)),await _(r).toHaveFocus(),await y(()=>_(getComputedStyle(n).outlineWidth).toBe(`2px`)),await _(getComputedStyle(r).borderStyle).toBe(`none`),await _(getComputedStyle(r).outlineStyle).toBe(`none`)}},C={render:()=>(0,g.jsxs)(s.Root,{children:[(0,g.jsx)(s.Text,{children:`$`}),(0,g.jsx)(a,{inputMode:`decimal`,placeholder:`0.00`,"aria-label":`Premium in US dollars`}),(0,g.jsx)(s.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Premium in US dollars`});await _(t.getByText(`$`)).toHaveAttribute(`data-slot`,`input-group-text`),await _(t.getByText(`USD`)).toHaveAttribute(`data-slot`,`input-group-text`),await v.type(n,`1250`),await _(n).toHaveValue(`1250`)}},w={render:()=>(0,g.jsxs)(s.Root,{children:[(0,g.jsx)(s.Text,{children:`https://`}),(0,g.jsx)(h,{orientation:`vertical`,className:`my-2`}),(0,g.jsx)(a,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero.com`,"aria-label":`Agency website`})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Agency website`});await _(t.getByText(`https://`)).toBeInTheDocument(),await _(n).toHaveAttribute(`inputmode`,`url`),await v.type(n,`www.agentero.com`),await _(n.validity.valid).toBe(!0)}},T={render:()=>(0,g.jsxs)(s.Root,{children:[(0,g.jsx)(s.Addon,{children:(0,g.jsx)(l,{})}),(0,g.jsx)(a,{placeholder:`Search agencies`,"aria-label":`Search agencies`,disabled:!0}),(0,g.jsx)(s.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=b(e);await _(t.getByRole(`textbox`,{name:`Search agencies`})).toBeDisabled(),await _(getComputedStyle(t.getByRole(`group`)).cursor).toBe(`default`)}},E={render:()=>(0,g.jsxs)(s.Root,{children:[(0,g.jsx)(s.Text,{children:`$`}),(0,g.jsx)(a,{defaultValue:`-40`,"aria-invalid":!0,"aria-label":`Premium in US dollars`})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Premium in US dollars`}),r=document.createElement(`div`);r.className=`border border-border-input-default`,e.append(r),await _(n).toHaveAttribute(`aria-invalid`,`true`),await _(getComputedStyle(t.getByRole(`group`)).borderColor).not.toBe(getComputedStyle(r).borderColor),r.remove()}},D=[`sm`,`md`,`lg`],O={render:()=>(0,g.jsx)(`div`,{className:`flex flex-col gap-4`,children:D.map(e=>(0,g.jsxs)(s.Root,{children:[(0,g.jsx)(s.Addon,{children:(0,g.jsx)(l,{})}),(0,g.jsx)(a,{size:e,placeholder:`Size ${e}`,"aria-label":`Size ${e}`})]},e))}),play:async({canvasElement:e})=>{let[t,n,r]=b(e).getAllByRole(`group`);await _(t.getBoundingClientRect().height).toBe(32),await _(n.getBoundingClientRect().height).toBe(40),await _(r.getBoundingClientRect().height).toBe(48),await _(parseFloat(getComputedStyle(r).borderRadius)).toBeGreaterThan(parseFloat(getComputedStyle(n).borderRadius))}},k={render:()=>(0,g.jsxs)(p,{required:!0,children:[(0,g.jsx)(r,{children:`Agency website`}),(0,g.jsxs)(s.Root,{children:[(0,g.jsx)(s.Text,{children:`https://`}),(0,g.jsx)(a,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero.com`})]}),(0,g.jsx)(d.Description,{children:`Shown on your public profile.`})]}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`textbox`,{name:`Agency website`});await _(n).toBeRequired(),await _(n).toHaveAccessibleDescription(`Shown on your public profile.`),await _(t.getByRole(`group`)).not.toHaveAttribute(`id`)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Addon>
                <IconSearch />
            </InputGroup.Addon>
            <Input type="search" placeholder="Search agencies" aria-label="Search agencies" />
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('group');
    const input = canvas.getByRole('searchbox', {
      name: 'Search agencies'
    });
    await expect(group).toHaveAttribute('data-slot', 'input-group');
    await expect(input).toHaveAttribute('data-slot', 'input');
    await userEvent.click(canvasElement.querySelector('[data-slot="input-group-addon"]')!);
    await expect(input).toHaveFocus();

    // \`waitFor\`: the frame's ring transitions in over 75ms.
    await waitFor(() => expect(getComputedStyle(group).outlineWidth).toBe('2px'));
    await expect(getComputedStyle(input).borderStyle).toBe('none');
    await expect(getComputedStyle(input).outlineStyle).toBe('none');
  }
}`,...S.parameters?.docs?.source},description:{story:`A search field: the icon leads and the input takes the rest of the frame.
Pressing the icon focuses the input, and the frame — not the input — draws the
focus ring, so the two never show a double border.

@summary Leading icon addon with the frame drawing the focus ring`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Text>$</InputGroup.Text>
            <Input inputMode="decimal" placeholder="0.00" aria-label="Premium in US dollars" />
            <InputGroup.Text>USD</InputGroup.Text>
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium in US dollars'
    });
    await expect(canvas.getByText('$')).toHaveAttribute('data-slot', 'input-group-text');
    await expect(canvas.getByText('USD')).toHaveAttribute('data-slot', 'input-group-text');
    await userEvent.type(input, '1250');
    await expect(input).toHaveValue('1250');
  }
}`,...C.parameters?.docs?.source},description:{story:`Text affixes on both sides. They are decoration only — a screen reader does
not read them as part of the value — so the unit is also in the label.

@summary Currency prefix and unit suffix around an amount`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Text>https://</InputGroup.Text>
            <Divider orientation="vertical" className="my-2" />
            <Input type="text" inputMode="url" autoCapitalize="none" placeholder="www.agentero.com" aria-label="Agency website" />
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Agency website'
    });
    await expect(canvas.getByText('https://')).toBeInTheDocument();
    await expect(input).toHaveAttribute('inputmode', 'url');
    await userEvent.type(input, 'www.agentero.com');
    await expect((input as HTMLInputElement).validity.valid).toBe(true);
  }
}`,...w.parameters?.docs?.source},description:{story:`A \`Divider\` separates a prefix from the value when the affix reads as a
distinct segment, like a protocol before a domain.

@summary Protocol prefix separated from the input by a vertical divider`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Addon>
                <IconSearch />
            </InputGroup.Addon>
            <Input placeholder="Search agencies" aria-label="Search agencies" disabled />
            <InputGroup.Text>USD</InputGroup.Text>
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Search agencies'
    })).toBeDisabled();
    await expect(getComputedStyle(canvas.getByRole('group')).cursor).toBe('default');
  }
}`,...T.parameters?.docs?.source},description:{story:`\`disabled\` on the input greys out the whole frame — background, border, icon
and affix — and the frame stops offering the text cursor.

@summary Disabled input greying out the frame and its addons`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Text>$</InputGroup.Text>
            <Input defaultValue="-40" aria-invalid aria-label="Premium in US dollars" />
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium in US dollars'
    });
    const valid = document.createElement('div');
    valid.className = 'border border-border-input-default';
    canvasElement.append(valid);
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(getComputedStyle(canvas.getByRole('group')).borderColor).not.toBe(getComputedStyle(valid).borderColor);
    valid.remove();
  }
}`,...E.parameters?.docs?.source},description:{story:`\`aria-invalid\` on the input moves the destructive border to the frame, and
the ring follows it on focus.

@summary Invalid input driving the frame's destructive border`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {SIZES.map(size => <InputGroup.Root key={size}>
                    <InputGroup.Addon>
                        <IconSearch />
                    </InputGroup.Addon>
                    <Input size={size} placeholder={\`Size \${size}\`} aria-label={\`Size \${size}\`} />
                </InputGroup.Root>)}
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [sm, md, lg] = canvas.getAllByRole('group') as [HTMLElement, HTMLElement, HTMLElement];
    await expect(sm.getBoundingClientRect().height).toBe(32);
    await expect(md.getBoundingClientRect().height).toBe(40);
    await expect(lg.getBoundingClientRect().height).toBe(48);
    await expect(parseFloat(getComputedStyle(lg).borderRadius)).toBeGreaterThan(parseFloat(getComputedStyle(md).borderRadius));
  }
}`,...O.parameters?.docs?.source},description:{story:"The frame follows the input's `size`: the same height as a standalone\n`Input` of that size, and the larger corner radius with `lg`.\n\n@summary The three input sizes inside the frame, heights matching Input",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <FieldText required>
            <Label>Agency website</Label>
            <InputGroup.Root>
                <InputGroup.Text>https://</InputGroup.Text>
                <Input type="text" inputMode="url" autoCapitalize="none" placeholder="www.agentero.com" />
            </InputGroup.Root>
            <Field.Description>Shown on your public profile.</Field.Description>
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Agency website'
    });
    await expect(input).toBeRequired();
    await expect(input).toHaveAccessibleDescription('Shown on your public profile.');
    await expect(canvas.getByRole('group')).not.toHaveAttribute('id');
  }
}`,...k.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` nothing changes for the group: the \`Input\` reads the
field's context at any depth, so the label names it and the description
describes it with no ids written by hand. The frame is not in the way.

@summary Label and description reaching the input through the frame`,...k.parameters?.docs?.description}}},A=[`Default`,`TextAffixes`,`WithDivider`,`Disabled`,`Invalid`,`AllSizes`,`InsideFieldText`]})))()}j();export{O as AllSizes,S as Default,T as Disabled,k as InsideFieldText,E as Invalid,C as TextAffixes,w as WithDivider,A as __namedExportsOrder,x as default};