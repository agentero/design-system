import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dist-C8AlzbfS.js";import{n as i,t as a}from"./utils-nsk-j2e0.js";import{n as o,t as s}from"./button-Ci3z3Sp_.js";import{n as c,t as l}from"./label-C8-woHnY.js";import{n as u,t as d}from"./field-COnb_aOb.js";import{n as f,t as p}from"./input-BEdyqa-C.js";import{n as m,t as h}from"./icons-DHzydebG.js";import{n as g,t as _}from"./field-text-BBruoFkV.js";import{n as v,t as y}from"./tag-DswV29W8.js";import{n as b,t as x}from"./divider-Bklp6JIY.js";var S,C,w,T,E,D;function O(){return(O=e((()=>{r(),i(),S=t(),C=n({slots:{root:[`group/input-group [--input-group-gap:0.75rem]`,`flex gap-(--input-group-gap) rounded-md border border-solid border-border-input-default`,`bg-bg-input-normal px-3 text-text-input-normal shadow-sm`,`cursor-text overflow-hidden outline-0 -outline-offset-1 outline-[transparent]`,`transition-[color,box-shadow,outline-color,outline-offset,outline-width] duration-75`,`has-[input:focus-within,textarea:focus-within]:border-border-input-focus`,`has-[input:focus-within,textarea:focus-within]:outline-border-input-focus`,`has-[input:focus-within,textarea:focus-within]:outline-[0.125rem]`,`has-[input:focus-within,textarea:focus-within]:outline-offset-[-0.0625rem]`,`has-[input:disabled,textarea:disabled]:cursor-default`,`has-[input:disabled,textarea:disabled]:border-border-input-disable`,`has-[input:disabled,textarea:disabled]:bg-bg-input-disable`,`has-[input:disabled,textarea:disabled]:text-text-input-disable`,`has-[input:disabled,textarea:disabled]:shadow-none`,`has-[input[data-size="lg"],textarea[data-size="lg"]]:rounded-lg`,`has-[input[aria-invalid="true"],textarea[aria-invalid="true"]]:border-border-input-destructive`,`has-[input[aria-invalid="true"]:focus-within,textarea[aria-invalid="true"]:focus-within]:outline-outline-input-destructive`,`**:[input,textarea]:-my-0.25 **:[input,textarea]:border-none **:[input,textarea]:bg-transparent`,`**:[input,textarea]:px-0 **:[input,textarea]:pb-0.125 **:[input,textarea]:shadow-none`,`**:[input,textarea]:outline-none **:[input,textarea]:focus-visible:outline-none`,`**:[[data-slot=separator]]:bg-border-input-default`,`**:[[data-slot=tag]]:-ms-1 **:[[data-slot=tag]]:rounded-sm`,`**:[input+[data-slot=input-group-addon]>[data-slot=tag]]:ms-0`,`**:[input+[data-slot=input-group-addon]>[data-slot=tag]]:-me-1`],addon:[`flex h-auto cursor-text items-center justify-center`,`*:[svg]:-mx-1 *:[svg]:size-6 [&_path]:fill-icon-input-default`,`group-has-[input:disabled,textarea:disabled]/input-group:[&_path]:fill-icon-input-disable`],text:[`flex items-center text-sm text-text-input-placeholder`,`group-has-[input[data-size="lg"]]/input-group:text-base`,`group-has-[input:disabled,textarea:disabled]/input-group:text-text-input-disable`]},variants:{variant:{default:{},action:{addon:[`-mx-(--input-group-gap) shrink-0 items-stretch`,`*:[button]:h-auto *:[button]:rounded-none *:[button]:focus-visible:-outline-offset-2`]}}},defaultVariants:{variant:`default`}}),w=C(),T=({className:e,...t})=>(0,S.jsx)(`div`,{"data-slot":`input-group`,className:a(w.root(),e),...t}),T.displayName=`InputGroup.Root`,E=({className:e,variant:t,onMouseDown:n,...r})=>(0,S.jsx)(`div`,{"data-slot":`input-group-addon`,className:a(C({variant:t}).addon(),e),onMouseDown:e=>{if(n?.(e),e.defaultPrevented||e.target.closest(`button, a`))return;e.preventDefault();let t=e.currentTarget.parentElement,r=t?.querySelector(`input, textarea`);r&&!t?.querySelector(`input:focus, textarea:focus`)&&r.focus()},...r}),E.displayName=`InputGroup.Addon`,D=({className:e,...t})=>(0,S.jsx)(`span`,{"data-slot":`input-group-text`,className:a(w.text(),e),...t}),D.displayName=`InputGroup.Text`;try{C.displayName=`InputGroup.Root`,C.__docgenInfo={description:"Style recipe for InputGroup. Slots: `root` (the bordered frame), `addon` and\n`text`. Focus, disabled, invalid and size all come from the `<input>` or\n`<textarea>` inside through `:has()`, so the frame can never disagree with\nits control.",displayName:`InputGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/input-group/input-group.tsx`,methods:[],props:{variant:{defaultValue:null,description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"action" | "default"`,value:[{value:`"action"`},{value:`"default"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the InputGroup frame and addons`}}}catch{}try{E.displayName=`InputGroup.Addon`,E.__docgenInfo={description:`A slot for an icon, a tag or a button inside the frame. Icons take the input
colour and size (24px) and follow the disabled state. A press on the addon
itself focuses the input, so the whole frame reads as the control; a press on
a button or link inside it is left alone.

For a text affix use \`InputGroup.Text\`, which sets the type and colour a
prefix needs.`,displayName:`InputGroup.Addon`,filePath:`/home/runner/work/design-system/design-system/src/input-group/input-group.tsx`,methods:[],props:{variant:{defaultValue:{value:`'default'`},declarations:[{fileName:`design-system/src/input-group/input-group.tsx`,name:`TypeLiteral`}],description:"`action` runs a button edge to edge at the frame's height.",name:`variant`,required:!1,tags:{default:`'default'`},type:{name:`enum`,raw:`"action" | "default"`,value:[{value:`"action"`},{value:`"default"`}]}}},tags:{summary:`Icon, tag or button slot inside the input group frame`,dataAttribute:`{string} data-slot - Always set to "input-group-addon"`,example:`<InputGroup.Root>
  <InputGroup.Addon><IconSearch /></InputGroup.Addon>
  <Input type="search" placeholder="Search agencies" />
</InputGroup.Root>`}}}catch{}try{D.displayName=`InputGroup.Text`,D.__docgenInfo={description:'A text affix inside the frame: a currency symbol, a protocol, a unit. Set in\nthe placeholder colour so the typed value stands out, at the input\'s text\nsize (`base` when the input is `lg`), and greyed out with a disabled input.\nIt is decoration only: a screen reader does not read it as part of the value,\nso say the unit in the label or the description when it matters — and the\nvalue excludes it too, so a `https://` prefix goes with a `type="text"`\ninput, not `type="url"`, whose native validation would reject the bare host.',displayName:`InputGroup.Text`,filePath:`/home/runner/work/design-system/design-system/src/input-group/input-group.tsx`,methods:[],props:{},tags:{summary:`Currency, protocol or unit affix set beside the input`,dataAttribute:`{string} data-slot - Always set to "input-group-text"`,example:`<InputGroup.Root>
  <InputGroup.Text>https://</InputGroup.Text>
  <Input type="text" inputMode="url" autoCapitalize="none" placeholder="www.agentero.com" />
</InputGroup.Root>`}}}catch{}})))()}var k;function A(){return(A=e((()=>{O(),k={Root:T,Addon:E,Text:D}})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{A(),o(),m(),b(),u(),g(),f(),c(),v(),j=t(),{expect:M,fn:N,userEvent:P,waitFor:F,within:I}=__STORYBOOK_MODULE_TEST__,L={title:`Components/InputGroup`,component:k.Root,tags:[`autodocs`],decorators:[e=>(0,j.jsx)(`div`,{className:`w-96 max-w-full p-4`,children:(0,j.jsx)(e,{})})],parameters:{docs:{description:{component:"InputGroup draws an `Input` and what sits beside it — an icon, a currency or\nunit affix, a trailing action — as one bordered control. The frame owns the\nborder, the shadow and the focus ring; the `Input` inside renders bare and\nhands its state to the frame through `:has()`, so focus, `disabled`,\n`aria-invalid` and `size` are never wired by hand. Inside a `FieldText` the\n`Input` keeps taking its label and messages from the field."}}}},R=e=>Array.from(e.querySelectorAll(`[data-slot="input-group"]`)),z=e=>R(e)[0],B={render:()=>(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(k.Addon,{children:(0,j.jsx)(h,{})}),(0,j.jsx)(p,{type:`search`,placeholder:`Search agencies`,"aria-label":`Search agencies`})]}),play:async({canvasElement:e})=>{let t=I(e),n=z(e),r=t.getByRole(`searchbox`,{name:`Search agencies`});await M(n).not.toHaveAttribute(`role`),await M(r).toHaveAttribute(`data-slot`,`input`),await P.click(e.querySelector(`[data-slot="input-group-addon"]`)),await M(r).toHaveFocus(),await F(()=>M(getComputedStyle(n).outlineWidth).toBe(`2px`)),await M(getComputedStyle(r).borderStyle).toBe(`none`),await M(getComputedStyle(r).outlineStyle).toBe(`none`)}},V={render:()=>(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(k.Text,{children:`$`}),(0,j.jsx)(p,{inputMode:`decimal`,placeholder:`0.00`,"aria-label":`Premium in US dollars`}),(0,j.jsx)(k.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=I(e),n=t.getByRole(`textbox`,{name:`Premium in US dollars`});await M(t.getByText(`$`)).toHaveAttribute(`data-slot`,`input-group-text`),await M(t.getByText(`USD`)).toHaveAttribute(`data-slot`,`input-group-text`),await P.type(n,`1250`),await M(n).toHaveValue(`1250`)}},H={render:()=>(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(k.Text,{children:`https://`}),(0,j.jsx)(x,{orientation:`vertical`}),(0,j.jsx)(p,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero`,"aria-label":`Agency website`}),(0,j.jsx)(x,{orientation:`vertical`}),(0,j.jsx)(k.Text,{children:`.com`})]}),play:async({canvasElement:e})=>{let t=I(e),n=z(e),r=t.getByRole(`textbox`,{name:`Agency website`}),i=n.querySelectorAll(`[data-slot="separator"]`);await M(i).toHaveLength(2);for(let e of i)await M(e.offsetHeight).toBe(n.clientHeight);await P.type(r,`www.agentero`),await M(r.validity.valid).toBe(!0)}},U={render:()=>(0,j.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(k.Addon,{children:(0,j.jsx)(y,{color:`informative`,children:`FEIN`})}),(0,j.jsx)(p,{placeholder:`XX-XXXXXXX`,"aria-label":`FEIN`})]}),(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(k.Addon,{children:(0,j.jsx)(h,{})}),(0,j.jsx)(p,{placeholder:`Describe your filters`,"aria-label":`Describe your filters`}),(0,j.jsx)(k.Addon,{children:(0,j.jsx)(y,{color:`informative`,children:`Beta`})})]})]}),play:async({canvasElement:e})=>{let t=I(e),n=getComputedStyle(t.getByText(`FEIN`)),r=getComputedStyle(t.getByText(`Beta`)),i=document.createElement(`span`);i.className=`rounded-sm`,e.append(i),await M(n.marginInlineStart).toBe(`-4px`),await M(r.marginInlineStart).toBe(`0px`),await M(r.marginInlineEnd).toBe(`-4px`),await M(n.borderRadius).toBe(getComputedStyle(i).borderRadius),i.remove()}},W=N(),G={render:()=>(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(p,{value:`https://agentero.com/r/abc123`,readOnly:!0,"aria-label":`Referral link`}),(0,j.jsx)(x,{orientation:`vertical`}),(0,j.jsx)(k.Addon,{variant:`action`,children:(0,j.jsx)(s,{variant:`ghost`,size:`md`,onClick:W,children:`Copy link`})})]}),play:async({canvasElement:e})=>{let t=I(e),n=z(e),r=t.getByRole(`button`,{name:`Copy link`});await P.click(r),await M(W).toHaveBeenCalledOnce(),await M(t.getByRole(`textbox`,{name:`Referral link`})).not.toHaveFocus();let i=n.getBoundingClientRect(),a=r.getBoundingClientRect();await M(i.height).toBe(40),await M(a.right).toBeCloseTo(i.right-n.clientLeft,0),await M(a.height).toBeCloseTo(n.clientHeight,0),await M(getComputedStyle(r).borderRadius).toBe(`0px`),t.getByRole(`textbox`,{name:`Referral link`}).focus(),await P.tab(),await M(r).toHaveFocus(),await M(parseFloat(getComputedStyle(r).outlineOffset)).toBeLessThan(0)}},K={render:()=>(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(k.Addon,{children:(0,j.jsx)(h,{})}),(0,j.jsx)(p,{placeholder:`Search agencies`,"aria-label":`Search agencies`,disabled:!0}),(0,j.jsx)(k.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=I(e);await M(t.getByRole(`textbox`,{name:`Search agencies`})).toBeDisabled(),await M(getComputedStyle(z(e)).cursor).toBe(`default`)}},q={render:()=>(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(k.Text,{children:`$`}),(0,j.jsx)(p,{defaultValue:`-40`,"aria-invalid":!0,"aria-label":`Premium in US dollars`})]}),play:async({canvasElement:e})=>{let t=I(e).getByRole(`textbox`,{name:`Premium in US dollars`}),n=document.createElement(`div`);n.className=`border border-border-input-default`,e.append(n),await M(t).toHaveAttribute(`aria-invalid`,`true`),await M(getComputedStyle(z(e)).borderColor).not.toBe(getComputedStyle(n).borderColor),n.remove()}},J=[`sm`,`md`,`lg`],Y={render:()=>(0,j.jsx)(`div`,{className:`flex flex-col gap-4`,children:J.map(e=>(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(k.Addon,{children:(0,j.jsx)(h,{})}),(0,j.jsx)(p,{size:e,placeholder:`Size ${e}`,"aria-label":`Size ${e}`})]},e))}),play:async({canvasElement:e})=>{let[t,n,r]=R(e);await M(t.getBoundingClientRect().height).toBe(32),await M(n.getBoundingClientRect().height).toBe(40),await M(r.getBoundingClientRect().height).toBe(48),await M(parseFloat(getComputedStyle(r).borderRadius)).toBeGreaterThan(parseFloat(getComputedStyle(n).borderRadius))}},X={render:()=>(0,j.jsxs)(_,{required:!0,children:[(0,j.jsx)(l,{children:`Agency website`}),(0,j.jsxs)(k.Root,{children:[(0,j.jsx)(k.Text,{children:`https://`}),(0,j.jsx)(p,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero.com`})]}),(0,j.jsx)(d.Description,{children:`Shown on your public profile.`})]}),play:async({canvasElement:e})=>{let t=I(e).getByRole(`textbox`,{name:`Agency website`});await M(t).toBeRequired(),await M(t).toHaveAccessibleDescription(`Shown on your public profile.`),await M(z(e)).not.toHaveAttribute(`id`)}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    const group = getGroup(canvasElement);
    const input = canvas.getByRole('searchbox', {
      name: 'Search agencies'
    });
    await expect(group).not.toHaveAttribute('role');
    await expect(input).toHaveAttribute('data-slot', 'input');
    await userEvent.click(canvasElement.querySelector('[data-slot="input-group-addon"]')!);
    await expect(input).toHaveFocus();

    // \`waitFor\`: the frame's ring transitions in over 75ms.
    await waitFor(() => expect(getComputedStyle(group).outlineWidth).toBe('2px'));
    await expect(getComputedStyle(input).borderStyle).toBe('none');
    await expect(getComputedStyle(input).outlineStyle).toBe('none');
  }
}`,...B.parameters?.docs?.source},description:{story:`A search field: the icon leads and the input takes the rest of the frame.
Pressing the icon focuses the input, and the frame — not the input — draws the
focus ring, so the two never show a double border.

@summary Leading icon addon with the frame drawing the focus ring`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Text affixes on both sides. They are decoration only — a screen reader does
not read them as part of the value — so the unit is also in the label.

@summary Currency prefix and unit suffix around an amount`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Text>https://</InputGroup.Text>
            <Divider orientation="vertical" />
            <Input type="text" inputMode="url" autoCapitalize="none" placeholder="www.agentero" aria-label="Agency website" />
            <Divider orientation="vertical" />
            <InputGroup.Text>.com</InputGroup.Text>
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = getGroup(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Agency website'
    });
    const dividers = group.querySelectorAll<HTMLElement>('[data-slot="separator"]');
    await expect(dividers).toHaveLength(2);
    for (const divider of dividers) {
      await expect(divider.offsetHeight).toBe(group.clientHeight);
    }
    await userEvent.type(input, 'www.agentero');
    await expect((input as HTMLInputElement).validity.valid).toBe(true);
  }
}`,...H.parameters?.docs?.source},description:{story:`A \`Divider\` separates an affix from the value when it reads as a distinct
segment, like a protocol before a domain. It spans the full height of the
frame, meeting its border at both ends.

@summary Protocol prefix and domain suffix split off by vertical dividers`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <Tag color="informative">FEIN</Tag>
                </InputGroup.Addon>
                <Input placeholder="XX-XXXXXXX" aria-label="FEIN" />
            </InputGroup.Root>
            <InputGroup.Root>
                <InputGroup.Addon>
                    <IconSearch />
                </InputGroup.Addon>
                <Input placeholder="Describe your filters" aria-label="Describe your filters" />
                <InputGroup.Addon>
                    <Tag color="informative">Beta</Tag>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const leading = getComputedStyle(canvas.getByText('FEIN'));
    const trailing = getComputedStyle(canvas.getByText('Beta'));
    const standalone = document.createElement('span');
    standalone.className = 'rounded-sm';
    canvasElement.append(standalone);
    await expect(leading.marginInlineStart).toBe('-4px');
    await expect(trailing.marginInlineStart).toBe('0px');
    await expect(trailing.marginInlineEnd).toBe('-4px');
    await expect(leading.borderRadius).toBe(getComputedStyle(standalone).borderRadius);
    standalone.remove();
  }
}`,...U.parameters?.docs?.source},description:{story:`A \`Tag\` in an addon labels what the value is. It tucks into the frame's
padding on the side it touches and takes a tighter radius, so it sits inside
the corner instead of competing with it.

@summary Leading and trailing tags tucked into the frame's padding`,...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <Input value="https://agentero.com/r/abc123" readOnly aria-label="Referral link" />
            <Divider orientation="vertical" />
            <InputGroup.Addon variant="action">
                <Button variant="ghost" size="md" onClick={handleCopy}>
                    Copy link
                </Button>
            </InputGroup.Addon>
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = getGroup(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Copy link'
    });
    await userEvent.click(button);
    await expect(handleCopy).toHaveBeenCalledOnce();
    await expect(canvas.getByRole('textbox', {
      name: 'Referral link'
    })).not.toHaveFocus();
    const frame = group.getBoundingClientRect();
    const edge = button.getBoundingClientRect();
    await expect(frame.height).toBe(40);
    await expect(edge.right).toBeCloseTo(frame.right - group.clientLeft, 0);
    await expect(edge.height).toBeCloseTo(group.clientHeight, 0);
    await expect(getComputedStyle(button).borderRadius).toBe('0px');

    // The frame clips overflow, so the ring has to sit inside the button to be seen.
    canvas.getByRole('textbox', {
      name: 'Referral link'
    }).focus();
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await expect(parseFloat(getComputedStyle(button).outlineOffset)).toBeLessThan(0);
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    await expect(getComputedStyle(getGroup(canvasElement)).cursor).toBe('default');
  }
}`,...K.parameters?.docs?.source},description:{story:`\`disabled\` on the input greys out the whole frame — background, border, icon
and affix — and the frame stops offering the text cursor.

@summary Disabled input greying out the frame and its addons`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    await expect(getComputedStyle(getGroup(canvasElement)).borderColor).not.toBe(getComputedStyle(valid).borderColor);
    valid.remove();
  }
}`,...q.parameters?.docs?.source},description:{story:`\`aria-invalid\` on the input moves the destructive border to the frame, and
the ring follows it on focus.

@summary Invalid input driving the frame's destructive border`,...q.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
    const [sm, md, lg] = getGroups(canvasElement) as [HTMLElement, HTMLElement, HTMLElement];
    await expect(sm.getBoundingClientRect().height).toBe(32);
    await expect(md.getBoundingClientRect().height).toBe(40);
    await expect(lg.getBoundingClientRect().height).toBe(48);
    await expect(parseFloat(getComputedStyle(lg).borderRadius)).toBeGreaterThan(parseFloat(getComputedStyle(md).borderRadius));
  }
}`,...Y.parameters?.docs?.source},description:{story:"The frame follows the input's `size`: the same height as a standalone\n`Input` of that size, and the larger corner radius with `lg`.\n\n@summary The three input sizes inside the frame, heights matching Input",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
    await expect(getGroup(canvasElement)).not.toHaveAttribute('id');
  }
}`,...X.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` nothing changes for the group: the \`Input\` reads the
field's context at any depth, so the label names it and the description
describes it with no ids written by hand. The frame is not in the way.

@summary Label and description reaching the input through the frame`,...X.parameters?.docs?.description}}},Z=[`Default`,`TextAffixes`,`WithDivider`,`WithTags`,`WithButton`,`Disabled`,`Invalid`,`AllSizes`,`InsideFieldText`]})))()}Q();export{Y as AllSizes,B as Default,K as Disabled,X as InsideFieldText,q as Invalid,V as TextAffixes,G as WithButton,H as WithDivider,U as WithTags,Z as __namedExportsOrder,L as default};