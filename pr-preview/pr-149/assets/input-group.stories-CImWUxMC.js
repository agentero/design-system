import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CH8RS831.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./icons-RRxAkzcP.js";import{n as a,t as o}from"./button-DkhqdXhx.js";import{n as ee,t as s}from"./label-9lXkUoNz.js";import{n as c,t as l}from"./field-Cl3GX2aR.js";import{n as u,t as d}from"./input-CtI-Jyaf.js";import{n as f,t as p}from"./input-group-CWBq5u89.js";import{n as m,t as h}from"./field-text-aMUQgOXV.js";import{n as g,t as _}from"./tag-CeM2rOhg.js";import{n as te,t as v}from"./icons-DHzydebG.js";import{n as ne,t as y}from"./dropdown-menu-wVo143YO.js";import{n as b,t as x}from"./divider-BDJ1CPaY.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{S=t(),f(),r(),a(),te(),b(),ne(),c(),m(),u(),ee(),g(),C=n(),{expect:w,fn:T,userEvent:E,waitFor:D,within:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/InputGroup`,component:p.Root,tags:[`autodocs`],decorators:[e=>(0,C.jsx)(`div`,{className:`w-96 max-w-full p-4`,children:(0,C.jsx)(e,{})})],parameters:{docs:{description:{component:"InputGroup draws an `Input` and what sits beside it — an icon, a currency or\nunit affix, a trailing action — as one bordered control. The frame owns the\nborder, the shadow and the focus ring; the `Input` inside renders bare and\nhands its state to the frame through `:has()`, so focus, `disabled`,\n`aria-invalid` and `size` are never wired by hand. Inside a `FieldText` the\n`Input` keeps taking its label and messages from the field."}}}},A=e=>Array.from(e.querySelectorAll(`[data-slot="input-group"]`)),j=e=>A(e)[0],M={render:()=>(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Addon,{children:(0,C.jsx)(v,{})}),(0,C.jsx)(d,{type:`search`,placeholder:`Search agencies`,"aria-label":`Search agencies`})]}),play:async({canvasElement:e})=>{let t=O(e),n=j(e),r=t.getByRole(`searchbox`,{name:`Search agencies`});await w(n).not.toHaveAttribute(`role`),await w(r).toHaveAttribute(`data-slot`,`input`),await E.click(e.querySelector(`[data-slot="input-group-addon"]`)),await w(r).toHaveFocus(),await D(()=>w(getComputedStyle(n).outlineWidth).toBe(`2px`)),await w(getComputedStyle(r).borderStyle).toBe(`none`),await w(getComputedStyle(r).outlineStyle).toBe(`none`)}},N={render:()=>(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Text,{children:`$`}),(0,C.jsx)(d,{inputMode:`decimal`,placeholder:`0.00`,"aria-label":`Premium in US dollars`}),(0,C.jsx)(p.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=O(e),n=t.getByRole(`textbox`,{name:`Premium in US dollars`});await w(t.getByText(`$`)).toHaveAttribute(`data-slot`,`input-group-text`),await w(t.getByText(`USD`)).toHaveAttribute(`data-slot`,`input-group-text`),await E.type(n,`1250`),await w(n).toHaveValue(`1250`)}},P={render:()=>(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Text,{children:`https://`}),(0,C.jsx)(x,{orientation:`vertical`}),(0,C.jsx)(d,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero`,"aria-label":`Agency website`}),(0,C.jsx)(x,{orientation:`vertical`}),(0,C.jsx)(p.Text,{children:`.com`})]}),play:async({canvasElement:e})=>{let t=O(e),n=j(e),r=t.getByRole(`textbox`,{name:`Agency website`}),i=n.querySelectorAll(`[data-slot="separator"]`);await w(i).toHaveLength(2);for(let e of i)await w(e.offsetHeight).toBe(n.clientHeight);await E.type(r,`www.agentero`),await w(r.validity.valid).toBe(!0)}},F={render:()=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Addon,{children:(0,C.jsx)(_,{color:`informative`,children:`FEIN`})}),(0,C.jsx)(d,{placeholder:`XX-XXXXXXX`,"aria-label":`FEIN`})]}),(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Addon,{children:(0,C.jsx)(v,{})}),(0,C.jsx)(d,{placeholder:`Describe your filters`,"aria-label":`Describe your filters`}),(0,C.jsx)(p.Addon,{children:(0,C.jsx)(_,{color:`informative`,children:`Beta`})})]})]}),play:async({canvasElement:e})=>{let t=O(e),n=getComputedStyle(t.getByText(`FEIN`)),r=getComputedStyle(t.getByText(`Beta`)),i=document.createElement(`span`);i.className=`rounded-sm`,e.append(i),await w(n.marginInlineStart).toBe(`-4px`),await w(r.marginInlineStart).toBe(`0px`),await w(r.marginInlineEnd).toBe(`-4px`),await w(n.borderRadius).toBe(getComputedStyle(i).borderRadius),i.remove()}},I=T(),L={render:()=>(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(d,{value:`https://agentero.com/r/abc123`,readOnly:!0,"aria-label":`Referral link`}),(0,C.jsx)(x,{orientation:`vertical`}),(0,C.jsx)(p.Addon,{variant:`action`,children:(0,C.jsx)(o,{type:`button`,variant:`ghost`,size:`md`,onClick:I,children:`Copy link`})})]}),play:async({canvasElement:e})=>{let t=O(e),n=j(e),r=t.getByRole(`button`,{name:`Copy link`});await E.click(r),await w(I).toHaveBeenCalledOnce(),await w(t.getByRole(`textbox`,{name:`Referral link`})).not.toHaveFocus();let i=n.getBoundingClientRect(),a=r.getBoundingClientRect();await w(i.height).toBe(40),await w(a.right).toBeCloseTo(i.right-n.clientLeft,0),await w(a.height).toBeCloseTo(n.clientHeight,0),await w(getComputedStyle(r).borderTopLeftRadius).toBe(`0px`),await w(getComputedStyle(r).borderTopRightRadius).toBe(getComputedStyle(n).borderTopRightRadius),t.getByRole(`textbox`,{name:`Referral link`}).focus(),await E.tab(),await w(r).toHaveFocus(),await w(parseFloat(getComputedStyle(r).outlineOffset)).toBeLessThan(0)}},R={render:()=>(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Addon,{children:(0,C.jsx)(v,{})}),(0,C.jsx)(d,{placeholder:`Search agencies`,"aria-label":`Search agencies`,disabled:!0}),(0,C.jsx)(p.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=O(e);await w(t.getByRole(`textbox`,{name:`Search agencies`})).toBeDisabled(),await w(getComputedStyle(j(e)).cursor).toBe(`default`)}},z={render:()=>(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Text,{children:`$`}),(0,C.jsx)(d,{defaultValue:`-40`,"aria-invalid":!0,"aria-label":`Premium in US dollars`})]}),play:async({canvasElement:e})=>{let t=O(e).getByRole(`textbox`,{name:`Premium in US dollars`}),n=document.createElement(`div`);n.className=`border border-border-input-default`,e.append(n),await w(t).toHaveAttribute(`aria-invalid`,`true`),await w(getComputedStyle(j(e)).borderColor).not.toBe(getComputedStyle(n).borderColor),n.remove()}},B=[`sm`,`md`,`lg`],V={render:()=>(0,C.jsx)(`div`,{className:`flex flex-col gap-4`,children:B.map(e=>(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Addon,{children:(0,C.jsx)(v,{})}),(0,C.jsx)(d,{size:e,placeholder:`Size ${e}`,"aria-label":`Size ${e}`})]},e))}),play:async({canvasElement:e})=>{let[t,n,r]=A(e);await w(t.getBoundingClientRect().height).toBe(32),await w(n.getBoundingClientRect().height).toBe(40),await w(r.getBoundingClientRect().height).toBe(48),await w(parseFloat(getComputedStyle(r).borderRadius)).toBeGreaterThan(parseFloat(getComputedStyle(n).borderRadius))}},H={render:()=>(0,C.jsxs)(h,{required:!0,children:[(0,C.jsx)(s,{children:`Agency website`}),(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Text,{children:`https://`}),(0,C.jsx)(d,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero.com`})]}),(0,C.jsx)(l.Description,{children:`Shown on your public profile.`})]}),play:async({canvasElement:e})=>{let t=O(e).getByRole(`textbox`,{name:`Agency website`});await w(t).toBeRequired(),await w(t).toHaveAccessibleDescription(`Shown on your public profile.`),await w(j(e)).not.toHaveAttribute(`id`)}},U=e=>(0,C.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,C.jsx)(`path`,{d:`M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z`})}),W=({label:e,tooltip:t,required:n,error:r,children:i})=>(0,C.jsx)(`div`,{className:`flex flex-col gap-6`,children:[!1,!0].map(a=>(0,C.jsxs)(h,{invalid:a,required:n,children:[(0,C.jsx)(l.Label,{required:n,optional:!n,tooltip:t,children:e}),i,a?(0,C.jsx)(l.Error,{errors:[{message:r}]}):(0,C.jsx)(l.Description,{children:`Helper text`})]},String(a)))}),G={render:()=>(0,C.jsx)(W,{label:`Email`,required:!0,error:`Enter a valid email address.`,children:(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Addon,{children:(0,C.jsx)(U,{})}),(0,C.jsx)(d,{type:`email`,placeholder:`me@email.com`})]})}),play:async({canvasElement:e})=>{let[t,n]=O(e).getAllByRole(`textbox`,{name:/Email/});await w(t).not.toHaveAttribute(`aria-invalid`),await w(n).toHaveAttribute(`aria-invalid`,`true`),await w(n).toHaveAccessibleDescription(`Enter a valid email address.`)}},K=[`USD`,`EUR`,`MXN`],q=()=>{let[e,t]=(0,S.useState)(`USD`);return(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Text,{children:`$`}),(0,C.jsx)(d,{inputMode:`decimal`,placeholder:`0.00`}),(0,C.jsx)(p.Addon,{variant:`action`,children:(0,C.jsxs)(y.Root,{children:[(0,C.jsx)(y.Trigger,{asChild:!0,children:(0,C.jsxs)(o,{variant:`ghost`,size:`sm`,"aria-label":`Currency: ${e}`,children:[e,(0,C.jsx)(i,{})]})}),(0,C.jsx)(y.Portal,{children:(0,C.jsx)(y.Content,{align:`end`,children:K.map(e=>(0,C.jsx)(y.Item,{onSelect:()=>t(e),children:e},e))})})]})})]})},J={render:()=>(0,C.jsx)(W,{label:`Price`,required:!0,error:`Enter a price above zero.`,children:(0,C.jsx)(q,{})}),play:async({canvasElement:e})=>{let t=O(e),n=O(e.ownerDocument.body),[r]=A(e),[i]=t.getAllByRole(`button`,{name:`Currency: USD`});await w(r.getBoundingClientRect().height).toBe(40),await E.click(i),await E.click(await n.findByRole(`menuitem`,{name:`EUR`})),await D(()=>w(n.queryByRole(`menu`)).not.toBeInTheDocument()),await w(i).toHaveAccessibleName(`Currency: EUR`),await w(i).toHaveFocus(),await E.click(i),await E.click(await n.findByRole(`menuitem`,{name:`USD`})),await D(()=>w(n.queryByRole(`menu`)).not.toBeInTheDocument())}},Y=[`US +1`,`CA +1`],X=()=>{let[e,t]=(0,S.useState)(`US +1`);return(0,C.jsxs)(p.Root,{children:[(0,C.jsx)(p.Addon,{variant:`action`,children:(0,C.jsxs)(y.Root,{children:[(0,C.jsx)(y.Trigger,{asChild:!0,children:(0,C.jsxs)(o,{variant:`ghost`,size:`sm`,"aria-label":`Country code: ${e}`,children:[e,(0,C.jsx)(i,{})]})}),(0,C.jsx)(y.Portal,{children:(0,C.jsx)(y.Content,{align:`start`,children:Y.map(e=>(0,C.jsx)(y.Item,{onSelect:()=>t(e),children:e},e))})})]})}),(0,C.jsx)(d,{type:`tel`,autoComplete:`tel-national`,placeholder:`(555) 000-0000`})]})},Z={render:()=>(0,C.jsx)(W,{label:`Phone number`,error:`Enter a 10-digit phone number.`,children:(0,C.jsx)(X,{})}),play:async({canvasElement:e})=>{let t=O(e),[n]=A(e),[r]=t.getAllByRole(`button`,{name:`Country code: US +1`}),i=n.getBoundingClientRect();await w(i.height).toBe(40),await w(r.getBoundingClientRect().left).toBeCloseTo(i.left+n.clientLeft,0),await w(getComputedStyle(r).borderTopLeftRadius).toBe(getComputedStyle(n).borderTopLeftRadius)}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`A search field: the icon leads and the input takes the rest of the frame.
Pressing the icon focuses the input, and the frame — not the input — draws the
focus ring, so the two never show a double border. A search field with a
clear button and a loading state is
[InputSearch](?path=/docs/components-inputsearch--docs), built on this frame.

@summary Leading icon addon with the frame drawing the focus ring`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`Text affixes on both sides. They are decoration only — a screen reader does
not read them as part of the value — so the unit is also in the label.

@summary Currency prefix and unit suffix around an amount`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`A \`Divider\` separates an affix from the value when it reads as a distinct
segment, like a protocol before a domain. It spans the full height of the
frame, meeting its border at both ends.

@summary Protocol prefix and domain suffix split off by vertical dividers`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`A \`Tag\` in an addon labels what the value is. It tucks into the frame's
padding on the side it touches and takes a tighter radius, so it sits inside
the corner instead of competing with it.

@summary Leading and trailing tags tucked into the frame's padding`,...F.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <Input value="https://agentero.com/r/abc123" readOnly aria-label="Referral link" />
            <Divider orientation="vertical" />
            <InputGroup.Addon variant="action">
                <Button type="button" variant="ghost" size="md" onClick={handleCopy}>
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
    await expect(getComputedStyle(button).borderTopLeftRadius).toBe('0px');
    await expect(getComputedStyle(button).borderTopRightRadius).toBe(getComputedStyle(group).borderTopRightRadius);

    // The frame clips overflow, so the ring has to sit inside the button to be seen.
    canvas.getByRole('textbox', {
      name: 'Referral link'
    }).focus();
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await expect(parseFloat(getComputedStyle(button).outlineOffset)).toBeLessThan(0);
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`\`disabled\` on the input greys out the whole frame — background, border, icon
and affix — and the frame stops offering the text cursor.

@summary Disabled input greying out the frame and its addons`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`\`aria-invalid\` on the input moves the destructive border to the frame, and
the ring follows it on focus.

@summary Invalid input driving the frame's destructive border`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"The frame follows the input's `size`: the same height as a standalone\n`Input` of that size, and the larger corner radius with `lg`.\n\n@summary The three input sizes inside the frame, heights matching Input",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` nothing changes for the group: the \`Input\` reads the
field's context at any depth, so the label names it and the description
describes it with no ids written by hand. The frame is not in the way.

@summary Label and description reaching the input through the frame`,...H.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <FieldStates label="Email" required error="Enter a valid email address.">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <IconMail />
                </InputGroup.Addon>
                <Input type="email" placeholder="me@email.com" />
            </InputGroup.Root>
        </FieldStates>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [valid, invalid] = canvas.getAllByRole('textbox', {
      name: /Email/
    }) as [HTMLElement, HTMLElement];
    await expect(valid).not.toHaveAttribute('aria-invalid');
    await expect(invalid).toHaveAttribute('aria-invalid', 'true');
    await expect(invalid).toHaveAccessibleDescription('Enter a valid email address.');
  }
}`,...G.parameters?.docs?.source},description:{story:`The email field from the Portal UI library: a leading icon is all it adds
to the input.

@summary Email field with a leading icon, valid and invalid`,...G.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <FieldStates label="Price" required error="Enter a price above zero.">
            <PriceInput />
        </FieldStates>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const [group] = getGroups(canvasElement) as [HTMLElement];
    const [trigger] = canvas.getAllByRole('button', {
      name: 'Currency: USD'
    }) as [HTMLElement];
    await expect(group.getBoundingClientRect().height).toBe(40);
    await userEvent.click(trigger);
    await userEvent.click(await body.findByRole('menuitem', {
      name: 'EUR'
    }));
    await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());
    await expect(trigger).toHaveAccessibleName('Currency: EUR');
    await expect(trigger).toHaveFocus();

    // Back to USD so the story shows the template's default once the test is done.
    await userEvent.click(trigger);
    await userEvent.click(await body.findByRole('menuitem', {
      name: 'USD'
    }));
    await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());
  }
}`,...J.parameters?.docs?.source},description:{story:`The price field from the Portal UI library: a currency symbol before the
value and a currency picker after it. The picker is a \`DropdownMenu\` whose
trigger fills an \`action\` addon, so it keeps the frame's height and an inset
focus ring.

@summary Price field with a symbol and a currency picker, valid and invalid`,...J.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <FieldStates label="Phone number" error="Enter a 10-digit phone number.">
            <PhoneInput />
        </FieldStates>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [group] = getGroups(canvasElement) as [HTMLElement];
    const [trigger] = canvas.getAllByRole('button', {
      name: 'Country code: US +1'
    }) as [HTMLElement];
    const frame = group.getBoundingClientRect();
    await expect(frame.height).toBe(40);
    await expect(trigger.getBoundingClientRect().left).toBeCloseTo(frame.left + group.clientLeft, 0);
    await expect(getComputedStyle(trigger).borderTopLeftRadius).toBe(getComputedStyle(group).borderTopLeftRadius);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The optional phone field from the Portal UI library: a country code picker
before the number. The picker leads, so the \`action\` addon rounds its
button's start corners with the frame.

@summary Phone field with a leading country code picker, valid and invalid`,...Z.parameters?.docs?.description}}},Q=[`Default`,`TextAffixes`,`WithDivider`,`WithTags`,`WithButton`,`Disabled`,`Invalid`,`AllSizes`,`InsideFieldText`,`EmailField`,`PriceField`,`PhoneField`]})))()}$();export{V as AllSizes,M as Default,R as Disabled,G as EmailField,H as InsideFieldText,z as Invalid,Z as PhoneField,J as PriceField,N as TextAffixes,L as WithButton,P as WithDivider,F as WithTags,Q as __namedExportsOrder,k as default};