import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dist-C8AlzbfS.js";import{n as i,t as a}from"./utils-nsk-j2e0.js";import{n as o,t as s}from"./label-EP8UQsr6.js";import{n as c,t as l}from"./input-DZwkuMS_.js";import{n as u,t as d}from"./icons-DHzydebG.js";import{n as f,t as p}from"./field-C2gc7exj.js";import{n as m,t as h}from"./field-text-BLkCHOtx.js";import{n as g,t as _}from"./divider-RbuqOr1k.js";var v,y,b,x,S,C;function w(){return(w=e((()=>{r(),i(),v=t(),y=n({slots:{root:[`group/input-group [--input-group-gap:0.75rem]`,`flex gap-(--input-group-gap) rounded-md border border-solid border-border-input-default`,`bg-bg-input-normal px-3 text-text-input-normal shadow-sm`,`cursor-text overflow-hidden outline-0 -outline-offset-1 outline-[transparent]`,`transition-[color,box-shadow,outline-color,outline-offset,outline-width] duration-75`,`has-[input:focus-within,textarea:focus-within]:border-border-input-focus`,`has-[input:focus-within,textarea:focus-within]:outline-border-input-focus`,`has-[input:focus-within,textarea:focus-within]:outline-[0.125rem]`,`has-[input:focus-within,textarea:focus-within]:outline-offset-[-0.0625rem]`,`has-[input:disabled,textarea:disabled]:cursor-default`,`has-[input:disabled,textarea:disabled]:border-border-input-disable`,`has-[input:disabled,textarea:disabled]:bg-bg-input-disable`,`has-[input:disabled,textarea:disabled]:text-text-input-disable`,`has-[input:disabled,textarea:disabled]:shadow-none`,`has-[input[data-size="lg"],textarea[data-size="lg"]]:rounded-lg`,`has-[input[aria-invalid="true"],textarea[aria-invalid="true"]]:border-border-input-destructive`,`has-[input[aria-invalid="true"]:focus-within,textarea[aria-invalid="true"]:focus-within]:outline-border-input-destructive`,`**:[input,textarea]:-my-0.25 **:[input,textarea]:border-none **:[input,textarea]:bg-transparent`,`**:[input,textarea]:px-0 **:[input,textarea]:pb-0.125 **:[input,textarea]:shadow-none`,`**:[input,textarea]:outline-none **:[input,textarea]:focus-visible:outline-none`,`**:[[data-slot=separator]]:bg-border-input-default`],addon:[`flex h-auto cursor-text items-center justify-center`,`*:[svg]:-mx-1 *:[svg]:size-6 [&_path]:fill-icon-input-default`,`group-has-[input:disabled,textarea:disabled]/input-group:[&_path]:fill-icon-input-disable`],text:[`flex items-center text-sm text-text-input-placeholder`,`group-has-[input[data-size="lg"]]/input-group:text-base`,`group-has-[input:disabled,textarea:disabled]/input-group:text-text-input-disable`]}}),b=y(),x=({className:e,...t})=>(0,v.jsx)(`div`,{"data-slot":`input-group`,role:`group`,className:a(b.root(),e),...t}),x.displayName=`InputGroup.Root`,S=({className:e,onMouseDown:t,...n})=>(0,v.jsx)(`div`,{"data-slot":`input-group-addon`,className:a(b.addon(),e),onMouseDown:e=>{if(t?.(e),e.defaultPrevented||e.target.closest(`button, a`))return;e.preventDefault();let n=e.currentTarget.parentElement,r=n?.querySelector(`input, textarea`);r&&!n?.querySelector(`input:focus, textarea:focus`)&&r.focus()},...n}),S.displayName=`InputGroup.Addon`,C=({className:e,...t})=>(0,v.jsx)(`span`,{"data-slot":`input-group-text`,className:a(b.text(),e),...t}),C.displayName=`InputGroup.Text`;try{y.displayName=`InputGroup.Root`,y.__docgenInfo={description:"Style recipe for InputGroup. Slots: `root` (the bordered frame), `addon` and\n`text`. There are no variants of its own: focus, disabled, invalid and size\nall come from the `<input>` or `<textarea>` inside through `:has()`, so the\nframe can never disagree with its control.",displayName:`InputGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/input-group/input-group.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the InputGroup frame and addons`}}}catch{}try{S.displayName=`InputGroup.Addon`,S.__docgenInfo={description:`A slot for an icon, a tag or a button inside the frame. Icons take the input
colour and size (24px) and follow the disabled state. A press on the addon
itself focuses the input, so the whole frame reads as the control; a press on
a button or link inside it is left alone.

For a text affix use \`InputGroup.Text\`, which sets the type and colour a
prefix needs.`,displayName:`InputGroup.Addon`,filePath:`/home/runner/work/design-system/design-system/src/input-group/input-group.tsx`,methods:[],props:{},tags:{summary:`Icon, tag or button slot inside the input group frame`,dataAttribute:`{string} data-slot - Always set to "input-group-addon"`,example:`<InputGroup.Root>
  <InputGroup.Addon><IconSearch /></InputGroup.Addon>
  <Input type="search" placeholder="Search agencies" />
</InputGroup.Root>`}}}catch{}try{C.displayName=`InputGroup.Text`,C.__docgenInfo={description:'A text affix inside the frame: a currency symbol, a protocol, a unit. Set in\nthe placeholder colour so the typed value stands out, at the input\'s text\nsize (`base` when the input is `lg`), and greyed out with a disabled input.\nIt is decoration only: a screen reader does not read it as part of the value,\nso say the unit in the label or the description when it matters — and the\nvalue excludes it too, so a `https://` prefix goes with a `type="text"`\ninput, not `type="url"`, whose native validation would reject the bare host.',displayName:`InputGroup.Text`,filePath:`/home/runner/work/design-system/design-system/src/input-group/input-group.tsx`,methods:[],props:{},tags:{summary:`Currency, protocol or unit affix set beside the input`,dataAttribute:`{string} data-slot - Always set to "input-group-text"`,example:`<InputGroup.Root>
  <InputGroup.Text>https://</InputGroup.Text>
  <Input type="text" inputMode="url" autoCapitalize="none" placeholder="www.agentero.com" />
</InputGroup.Root>`}}}catch{}})))()}var T;function E(){return(E=e((()=>{w(),T={Root:x,Addon:S,Text:C}})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{E(),u(),g(),f(),m(),c(),o(),D=t(),{expect:O,userEvent:k,waitFor:A,within:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/InputGroup`,component:T.Root,tags:[`autodocs`],decorators:[e=>(0,D.jsx)(`div`,{className:`w-96 max-w-full p-4`,children:(0,D.jsx)(e,{})})],parameters:{docs:{description:{component:"InputGroup draws an `Input` and what sits beside it — an icon, a currency or\nunit affix, a trailing action — as one bordered control. The frame owns the\nborder, the shadow and the focus ring; the `Input` inside renders bare and\nhands its state to the frame through `:has()`, so focus, `disabled`,\n`aria-invalid` and `size` are never wired by hand. Inside a `FieldText` the\n`Input` keeps taking its label and messages from the field."}}}},N={render:()=>(0,D.jsxs)(T.Root,{children:[(0,D.jsx)(T.Addon,{children:(0,D.jsx)(d,{})}),(0,D.jsx)(l,{type:`search`,placeholder:`Search agencies`,"aria-label":`Search agencies`})]}),play:async({canvasElement:e})=>{let t=j(e),n=t.getByRole(`group`),r=t.getByRole(`searchbox`,{name:`Search agencies`});await O(n).toHaveAttribute(`data-slot`,`input-group`),await O(r).toHaveAttribute(`data-slot`,`input`),await k.click(e.querySelector(`[data-slot="input-group-addon"]`)),await O(r).toHaveFocus(),await A(()=>O(getComputedStyle(n).outlineWidth).toBe(`2px`)),await O(getComputedStyle(r).borderStyle).toBe(`none`),await O(getComputedStyle(r).outlineStyle).toBe(`none`)}},P={render:()=>(0,D.jsxs)(T.Root,{children:[(0,D.jsx)(T.Text,{children:`$`}),(0,D.jsx)(l,{inputMode:`decimal`,placeholder:`0.00`,"aria-label":`Premium in US dollars`}),(0,D.jsx)(T.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=j(e),n=t.getByRole(`textbox`,{name:`Premium in US dollars`});await O(t.getByText(`$`)).toHaveAttribute(`data-slot`,`input-group-text`),await O(t.getByText(`USD`)).toHaveAttribute(`data-slot`,`input-group-text`),await k.type(n,`1250`),await O(n).toHaveValue(`1250`)}},F={render:()=>(0,D.jsxs)(T.Root,{children:[(0,D.jsx)(T.Text,{children:`https://`}),(0,D.jsx)(_,{orientation:`vertical`,className:`my-2`}),(0,D.jsx)(l,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero.com`,"aria-label":`Agency website`})]}),play:async({canvasElement:e})=>{let t=j(e),n=t.getByRole(`textbox`,{name:`Agency website`});await O(t.getByText(`https://`)).toBeInTheDocument(),await O(n).toHaveAttribute(`inputmode`,`url`),await k.type(n,`www.agentero.com`),await O(n.validity.valid).toBe(!0)}},I={render:()=>(0,D.jsxs)(T.Root,{children:[(0,D.jsx)(T.Addon,{children:(0,D.jsx)(d,{})}),(0,D.jsx)(l,{placeholder:`Search agencies`,"aria-label":`Search agencies`,disabled:!0}),(0,D.jsx)(T.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=j(e);await O(t.getByRole(`textbox`,{name:`Search agencies`})).toBeDisabled(),await O(getComputedStyle(t.getByRole(`group`)).cursor).toBe(`default`)}},L={render:()=>(0,D.jsxs)(T.Root,{children:[(0,D.jsx)(T.Text,{children:`$`}),(0,D.jsx)(l,{defaultValue:`-40`,"aria-invalid":!0,"aria-label":`Premium in US dollars`})]}),play:async({canvasElement:e})=>{let t=j(e),n=t.getByRole(`textbox`,{name:`Premium in US dollars`}),r=document.createElement(`div`);r.className=`border border-border-input-default`,e.append(r),await O(n).toHaveAttribute(`aria-invalid`,`true`),await O(getComputedStyle(t.getByRole(`group`)).borderColor).not.toBe(getComputedStyle(r).borderColor),r.remove()}},R=[`sm`,`md`,`lg`],z={render:()=>(0,D.jsx)(`div`,{className:`flex flex-col gap-4`,children:R.map(e=>(0,D.jsxs)(T.Root,{children:[(0,D.jsx)(T.Addon,{children:(0,D.jsx)(d,{})}),(0,D.jsx)(l,{size:e,placeholder:`Size ${e}`,"aria-label":`Size ${e}`})]},e))}),play:async({canvasElement:e})=>{let[t,n,r]=j(e).getAllByRole(`group`);await O(t.getBoundingClientRect().height).toBe(32),await O(n.getBoundingClientRect().height).toBe(40),await O(r.getBoundingClientRect().height).toBe(48),await O(parseFloat(getComputedStyle(r).borderRadius)).toBeGreaterThan(parseFloat(getComputedStyle(n).borderRadius))}},B={render:()=>(0,D.jsxs)(h,{required:!0,children:[(0,D.jsx)(s,{children:`Agency website`}),(0,D.jsxs)(T.Root,{children:[(0,D.jsx)(T.Text,{children:`https://`}),(0,D.jsx)(l,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero.com`})]}),(0,D.jsx)(p.Description,{children:`Shown on your public profile.`})]}),play:async({canvasElement:e})=>{let t=j(e),n=t.getByRole(`textbox`,{name:`Agency website`});await O(n).toBeRequired(),await O(n).toHaveAccessibleDescription(`Shown on your public profile.`),await O(t.getByRole(`group`)).not.toHaveAttribute(`id`)}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`A search field: the icon leads and the input takes the rest of the frame.
Pressing the icon focuses the input, and the frame — not the input — draws the
focus ring, so the two never show a double border.

@summary Leading icon addon with the frame drawing the focus ring`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Text affixes on both sides. They are decoration only — a screen reader does
not read them as part of the value — so the unit is also in the label.

@summary Currency prefix and unit suffix around an amount`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`A \`Divider\` separates a prefix from the value when the affix reads as a
distinct segment, like a protocol before a domain.

@summary Protocol prefix separated from the input by a vertical divider`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`\`disabled\` on the input greys out the whole frame — background, border, icon
and affix — and the frame stops offering the text cursor.

@summary Disabled input greying out the frame and its addons`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`\`aria-invalid\` on the input moves the destructive border to the frame, and
the ring follows it on focus.

@summary Invalid input driving the frame's destructive border`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"The frame follows the input's `size`: the same height as a standalone\n`Input` of that size, and the larger corner radius with `lg`.\n\n@summary The three input sizes inside the frame, heights matching Input",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` nothing changes for the group: the \`Input\` reads the
field's context at any depth, so the label names it and the description
describes it with no ids written by hand. The frame is not in the way.

@summary Label and description reaching the input through the frame`,...B.parameters?.docs?.description}}},V=[`Default`,`TextAffixes`,`WithDivider`,`Disabled`,`Invalid`,`AllSizes`,`InsideFieldText`]})))()}H();export{z as AllSizes,N as Default,I as Disabled,B as InsideFieldText,L as Invalid,P as TextAffixes,F as WithDivider,V as __namedExportsOrder,M as default};