import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DJu3G0OF.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./createLucideIcon-m6ws3NaR.js";import{n as a,t as o}from"./chevron-down-CZnToipf.js";import{n as ee,t as s}from"./search-re1ewCwn.js";import{n as te,t as c}from"./button-CSXn76B8.js";import{n as ne,t as re}from"./label-pg1ZBux8.js";import{n as ie,t as l}from"./field-DgDPv4N5.js";import{n as ae,t as u}from"./input-27H6euf_.js";import{n as oe,t as d}from"./input-group-DA3JGjti.js";import{n as se,t as f}from"./field-text-WXR4iJil.js";import{n as ce,t as p}from"./tag-BlcmyZqz.js";import{n as le,t as m}from"./dropdown-menu-DyCSaUPk.js";import{n as ue,t as h}from"./divider-GRhZhAjI.js";var g,_;function v(){return(v=e((()=>{r(),g={name:`mail`,size:24,node:[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]},g.node,_=i(g)})))()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{y=t(),a(),v(),ee(),oe(),te(),ue(),le(),ie(),se(),ae(),ne(),ce(),b=n(),{expect:x,fn:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/InputGroup`,component:d.Root,tags:[`autodocs`],decorators:[e=>(0,b.jsx)(`div`,{className:`w-96 max-w-full p-4`,children:(0,b.jsx)(e,{})})],parameters:{docs:{description:{component:"InputGroup draws an `Input` and what sits beside it — an icon, a currency or\nunit affix, a trailing action — as one bordered control. The frame owns the\nborder, the shadow and the focus ring; the `Input` inside renders bare and\nhands its state to the frame through `:has()`, so focus, `disabled`,\n`aria-invalid` and `size` are never wired by hand. Inside a `FieldText` the\n`Input` keeps taking its label and messages from the field."}}}},D=e=>Array.from(e.querySelectorAll(`[data-slot="input-group"]`)),O=e=>D(e)[0],k={render:()=>(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Addon,{children:(0,b.jsx)(s,{})}),(0,b.jsx)(u,{type:`search`,placeholder:`Search agencies`,"aria-label":`Search agencies`})]}),play:async({canvasElement:e})=>{let t=T(e),n=O(e),r=t.getByRole(`searchbox`,{name:`Search agencies`});await x(n).not.toHaveAttribute(`role`),await x(r).toHaveAttribute(`data-slot`,`input`),await C.click(e.querySelector(`[data-slot="input-group-addon"]`)),await x(r).toHaveFocus(),await w(()=>x(getComputedStyle(n).outlineWidth).toBe(`2px`)),await x(getComputedStyle(r).borderStyle).toBe(`none`),await x(getComputedStyle(r).outlineStyle).toBe(`none`)}},A={render:()=>(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Text,{children:`$`}),(0,b.jsx)(u,{inputMode:`decimal`,placeholder:`0.00`,"aria-label":`Premium in US dollars`}),(0,b.jsx)(d.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`textbox`,{name:`Premium in US dollars`});await x(t.getByText(`$`)).toHaveAttribute(`data-slot`,`input-group-text`),await x(t.getByText(`USD`)).toHaveAttribute(`data-slot`,`input-group-text`),await C.type(n,`1250`),await x(n).toHaveValue(`1250`)}},j={render:()=>(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Text,{children:`https://`}),(0,b.jsx)(h,{orientation:`vertical`}),(0,b.jsx)(u,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero`,"aria-label":`Agency website`}),(0,b.jsx)(h,{orientation:`vertical`}),(0,b.jsx)(d.Text,{children:`.com`})]}),play:async({canvasElement:e})=>{let t=T(e),n=O(e),r=t.getByRole(`textbox`,{name:`Agency website`}),i=n.querySelectorAll(`[data-slot="separator"]`);await x(i).toHaveLength(2);for(let e of i)await x(e.offsetHeight).toBe(n.clientHeight);await C.type(r,`www.agentero`),await x(r.validity.valid).toBe(!0)}},M={render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Addon,{children:(0,b.jsx)(p,{color:`informative`,children:`FEIN`})}),(0,b.jsx)(u,{placeholder:`XX-XXXXXXX`,"aria-label":`FEIN`})]}),(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Addon,{children:(0,b.jsx)(s,{})}),(0,b.jsx)(u,{placeholder:`Describe your filters`,"aria-label":`Describe your filters`}),(0,b.jsx)(d.Addon,{children:(0,b.jsx)(p,{color:`informative`,children:`Beta`})})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=getComputedStyle(t.getByText(`FEIN`)),r=getComputedStyle(t.getByText(`Beta`)),i=document.createElement(`span`);i.className=`rounded-sm`,e.append(i),await x(n.marginInlineStart).toBe(`-4px`),await x(r.marginInlineStart).toBe(`0px`),await x(r.marginInlineEnd).toBe(`-4px`),await x(n.borderRadius).toBe(getComputedStyle(i).borderRadius),i.remove()}},N=S(),P={render:()=>(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(u,{value:`https://agentero.com/r/abc123`,readOnly:!0,"aria-label":`Referral link`}),(0,b.jsx)(h,{orientation:`vertical`}),(0,b.jsx)(d.Addon,{variant:`action`,children:(0,b.jsx)(c,{type:`button`,variant:`ghost`,size:`md`,onClick:N,children:`Copy link`})})]}),play:async({canvasElement:e})=>{let t=T(e),n=O(e),r=t.getByRole(`button`,{name:`Copy link`});await C.click(r),await x(N).toHaveBeenCalledOnce(),await x(t.getByRole(`textbox`,{name:`Referral link`})).not.toHaveFocus();let i=n.getBoundingClientRect(),a=r.getBoundingClientRect();await x(i.height).toBe(40),await x(a.right).toBeCloseTo(i.right-n.clientLeft,0),await x(a.height).toBeCloseTo(n.clientHeight,0),await x(getComputedStyle(r).borderTopLeftRadius).toBe(`0px`),await x(getComputedStyle(r).borderTopRightRadius).toBe(getComputedStyle(n).borderTopRightRadius),t.getByRole(`textbox`,{name:`Referral link`}).focus(),await C.tab(),await x(r).toHaveFocus(),await x(parseFloat(getComputedStyle(r).outlineOffset)).toBeLessThan(0)}},F={render:()=>(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Addon,{children:(0,b.jsx)(s,{})}),(0,b.jsx)(u,{placeholder:`Search agencies`,"aria-label":`Search agencies`,disabled:!0}),(0,b.jsx)(d.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=T(e);await x(t.getByRole(`textbox`,{name:`Search agencies`})).toBeDisabled(),await x(getComputedStyle(O(e)).cursor).toBe(`default`)}},I={render:()=>(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Text,{children:`$`}),(0,b.jsx)(u,{defaultValue:`-40`,"aria-invalid":!0,"aria-label":`Premium in US dollars`})]}),play:async({canvasElement:e})=>{let t=T(e).getByRole(`textbox`,{name:`Premium in US dollars`}),n=document.createElement(`div`);n.className=`border border-border-input-default`,e.append(n),await x(t).toHaveAttribute(`aria-invalid`,`true`),await x(getComputedStyle(O(e)).borderColor).not.toBe(getComputedStyle(n).borderColor),n.remove()}},L=[`sm`,`md`,`lg`],R={render:()=>(0,b.jsx)(`div`,{className:`flex flex-col gap-4`,children:L.map(e=>(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Addon,{children:(0,b.jsx)(s,{})}),(0,b.jsx)(u,{size:e,placeholder:`Size ${e}`,"aria-label":`Size ${e}`})]},e))}),play:async({canvasElement:e})=>{let[t,n,r]=D(e);await x(t.getBoundingClientRect().height).toBe(32),await x(n.getBoundingClientRect().height).toBe(40),await x(r.getBoundingClientRect().height).toBe(48),await x(parseFloat(getComputedStyle(r).borderRadius)).toBeGreaterThan(parseFloat(getComputedStyle(n).borderRadius))}},z={render:()=>(0,b.jsxs)(f,{required:!0,children:[(0,b.jsx)(re,{children:`Agency website`}),(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Text,{children:`https://`}),(0,b.jsx)(u,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero.com`})]}),(0,b.jsx)(l.Description,{children:`Shown on your public profile.`})]}),play:async({canvasElement:e})=>{let t=T(e).getByRole(`textbox`,{name:`Agency website`});await x(t).toBeRequired(),await x(t).toHaveAccessibleDescription(`Shown on your public profile.`),await x(O(e)).not.toHaveAttribute(`id`)}},B=({label:e,tooltip:t,required:n,error:r,children:i})=>(0,b.jsx)(`div`,{className:`flex flex-col gap-6`,children:[!1,!0].map(a=>(0,b.jsxs)(f,{invalid:a,required:n,children:[(0,b.jsx)(l.Label,{required:n,optional:!n,tooltip:t,children:e}),i,a?(0,b.jsx)(l.Error,{errors:[{message:r}]}):(0,b.jsx)(l.Description,{children:`Helper text`})]},String(a)))}),V={render:()=>(0,b.jsx)(B,{label:`Email`,required:!0,error:`Enter a valid email address.`,children:(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Addon,{children:(0,b.jsx)(_,{})}),(0,b.jsx)(u,{type:`email`,placeholder:`me@email.com`})]})}),play:async({canvasElement:e})=>{let[t,n]=T(e).getAllByRole(`textbox`,{name:/Email/});await x(t).not.toHaveAttribute(`aria-invalid`),await x(n).toHaveAttribute(`aria-invalid`,`true`),await x(n).toHaveAccessibleDescription(`Enter a valid email address.`)}},H=[`USD`,`EUR`,`MXN`],U=()=>{let[e,t]=(0,y.useState)(`USD`);return(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Text,{children:`$`}),(0,b.jsx)(u,{inputMode:`decimal`,placeholder:`0.00`}),(0,b.jsx)(d.Addon,{variant:`action`,children:(0,b.jsxs)(m.Root,{children:[(0,b.jsx)(m.Trigger,{asChild:!0,children:(0,b.jsxs)(c,{variant:`ghost`,size:`sm`,"aria-label":`Currency: ${e}`,children:[e,(0,b.jsx)(o,{})]})}),(0,b.jsx)(m.Portal,{children:(0,b.jsx)(m.Content,{align:`end`,children:H.map(e=>(0,b.jsx)(m.Item,{onSelect:()=>t(e),children:e},e))})})]})})]})},W={render:()=>(0,b.jsx)(B,{label:`Price`,required:!0,error:`Enter a price above zero.`,children:(0,b.jsx)(U,{})}),play:async({canvasElement:e})=>{let t=T(e),n=T(e.ownerDocument.body),[r]=D(e),[i]=t.getAllByRole(`button`,{name:`Currency: USD`});await x(r.getBoundingClientRect().height).toBe(40),await C.click(i),await C.click(await n.findByRole(`menuitem`,{name:`EUR`})),await w(()=>x(n.queryByRole(`menu`)).not.toBeInTheDocument()),await x(i).toHaveAccessibleName(`Currency: EUR`),await x(i).toHaveFocus(),await C.click(i),await C.click(await n.findByRole(`menuitem`,{name:`USD`})),await w(()=>x(n.queryByRole(`menu`)).not.toBeInTheDocument())}},G=[`US +1`,`CA +1`],K=()=>{let[e,t]=(0,y.useState)(`US +1`);return(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Addon,{variant:`action`,children:(0,b.jsxs)(m.Root,{children:[(0,b.jsx)(m.Trigger,{asChild:!0,children:(0,b.jsxs)(c,{variant:`ghost`,size:`sm`,"aria-label":`Country code: ${e}`,children:[e,(0,b.jsx)(o,{})]})}),(0,b.jsx)(m.Portal,{children:(0,b.jsx)(m.Content,{align:`start`,children:G.map(e=>(0,b.jsx)(m.Item,{onSelect:()=>t(e),children:e},e))})})]})}),(0,b.jsx)(u,{type:`tel`,autoComplete:`tel-national`,placeholder:`(555) 000-0000`})]})},q={render:()=>(0,b.jsx)(B,{label:`Phone number`,error:`Enter a 10-digit phone number.`,children:(0,b.jsx)(K,{})}),play:async({canvasElement:e})=>{let t=T(e),[n]=D(e),[r]=t.getAllByRole(`button`,{name:`Country code: US +1`}),i=n.getBoundingClientRect();await x(i.height).toBe(40),await x(r.getBoundingClientRect().left).toBeCloseTo(i.left+n.clientLeft,0),await x(getComputedStyle(r).borderTopLeftRadius).toBe(getComputedStyle(n).borderTopLeftRadius)}},J=e=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,b.jsx)(`path`,{d:`M9.5 16a6.5 6.5 0 1 1 5.16-2.55l5.2 5.2a.75.75 0 0 1-1.06 1.06l-5.2-5.2A6.47 6.47 0 0 1 9.5 16m0-1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10`})}),Y=e=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,b.jsx)(`path`,{fill:`#434856`,d:`M9.5 16a6.5 6.5 0 1 1 5.16-2.55l5.2 5.2a.75.75 0 0 1-1.06 1.06l-5.2-5.2A6.47 6.47 0 0 1 9.5 16m0-1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10`})}),X=e=>{let t=e.querySelector(`path`);return{color:getComputedStyle(e).color,pathFill:getComputedStyle(t).fill,pathStroke:getComputedStyle(t).stroke}},Z={tags:[`!dev`,`!autodocs`],render:()=>(0,b.jsx)(`div`,{className:`flex flex-col gap-2`,children:[!1,!0].map(e=>[s,J,Y].map((t,n)=>(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Addon,{children:(0,b.jsx)(t,{})}),(0,b.jsx)(u,{disabled:e,placeholder:`Search agencies`,"aria-label":`Search agencies`})]},`${e}-${n}`)))}),play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`[data-slot="input-group-addon"] svg`)].map(X);await x(t).toHaveLength(6);let n=t.slice(0,3),r=t.slice(3);await x(r[0].color).not.toBe(n[0].color);for(let[e,t,i]of[n,r])await x(t.color).toBe(e.color),await x(i.color).toBe(e.color),await x(e.pathStroke).toBe(e.color),await x(e.pathFill).toBe(`none`),await x(t.pathFill).toBe(e.color),await x(i.pathFill).toBe(e.color)}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Addon>
                <SearchIcon />
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
}`,...k.parameters?.docs?.source},description:{story:`A search field: the icon leads and the input takes the rest of the frame.
Pressing the icon focuses the input, and the frame — not the input — draws the
focus ring, so the two never show a double border. A search field with a
clear button and a loading state is
[InputSearch](?path=/docs/components-inputsearch--docs), built on this frame.

@summary Leading icon addon with the frame drawing the focus ring`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Text affixes on both sides. They are decoration only — a screen reader does
not read them as part of the value — so the unit is also in the label.

@summary Currency prefix and unit suffix around an amount`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`A \`Divider\` separates an affix from the value when it reads as a distinct
segment, like a protocol before a domain. It spans the full height of the
frame, meeting its border at both ends.

@summary Protocol prefix and domain suffix split off by vertical dividers`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <Tag color="informative">FEIN</Tag>
                </InputGroup.Addon>
                <Input placeholder="XX-XXXXXXX" aria-label="FEIN" />
            </InputGroup.Root>
            <InputGroup.Root>
                <InputGroup.Addon>
                    <SearchIcon />
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
}`,...M.parameters?.docs?.source},description:{story:`A \`Tag\` in an addon labels what the value is. It tucks into the frame's
padding on the side it touches and takes a tighter radius, so it sits inside
the corner instead of competing with it.

@summary Leading and trailing tags tucked into the frame's padding`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Addon>
                <SearchIcon />
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
}`,...F.parameters?.docs?.source},description:{story:`\`disabled\` on the input greys out the whole frame — background, border, icon
and affix — and the frame stops offering the text cursor.

@summary Disabled input greying out the frame and its addons`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`\`aria-invalid\` on the input moves the destructive border to the frame, and
the ring follows it on focus.

@summary Invalid input driving the frame's destructive border`,...I.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {SIZES.map(size => <InputGroup.Root key={size}>
                    <InputGroup.Addon>
                        <SearchIcon />
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
}`,...R.parameters?.docs?.source},description:{story:"The frame follows the input's `size`: the same height as a standalone\n`Input` of that size, and the larger corner radius with `lg`.\n\n@summary The three input sizes inside the frame, heights matching Input",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` nothing changes for the group: the \`Input\` reads the
field's context at any depth, so the label names it and the description
describes it with no ids written by hand. The frame is not in the way.

@summary Label and description reaching the input through the frame`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <FieldStates label="Email" required error="Enter a valid email address.">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <MailIcon />
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
}`,...V.parameters?.docs?.source},description:{story:`The email field from the Portal UI library: a leading icon is all it adds
to the input.

@summary Email field with a leading icon, valid and invalid`,...V.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`The price field from the Portal UI library: a currency symbol before the
value and a currency picker after it. The picker is a \`DropdownMenu\` whose
trigger fills an \`action\` addon, so it keeps the frame's height and an inset
focus ring.

@summary Price field with a symbol and a currency picker, valid and invalid`,...W.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`The optional phone field from the Portal UI library: a country code picker
before the number. The picker leads, so the \`action\` addon rounds its
button's start corners with the frame.

@summary Phone field with a leading country code picker, valid and invalid`,...q.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  render: () => <div className="flex flex-col gap-2">
            {[false, true].map(disabled => [SearchIcon, LegacyBarePathIcon, LegacyHardcodedFillIcon].map((Icon, index) => <InputGroup.Root key={\`\${disabled}-\${index}\`}>
                        <InputGroup.Addon>
                            <Icon />
                        </InputGroup.Addon>
                        <Input disabled={disabled} placeholder="Search agencies" aria-label="Search agencies" />
                    </InputGroup.Root>))}
        </div>,
  play: async ({
    canvasElement
  }) => {
    const icons = [...canvasElement.querySelectorAll<SVGElement>('[data-slot="input-group-addon"] svg')].map(paintedWith);
    await expect(icons).toHaveLength(6);
    const enabled = icons.slice(0, 3) as [Paint, Paint, Paint];
    const disabled = icons.slice(3) as [Paint, Paint, Paint];
    // Disabling the input repaints the addon with the disabled token.
    await expect(disabled[0].color).not.toBe(enabled[0].color);
    for (const [lucide, barePath, hardcoded] of [enabled, disabled]) {
      await expect(barePath.color).toBe(lucide.color);
      await expect(hardcoded.color).toBe(lucide.color);
      await expect(lucide.pathStroke).toBe(lucide.color);
      await expect(lucide.pathFill).toBe('none');
      await expect(barePath.pathFill).toBe(lucide.color);
      await expect(hardcoded.pathFill).toBe(lucide.color);
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:"Test only, hidden from the sidebar and the docs (`!dev`, `!autodocs`). A legacy\nglyph in an addon must take the addon's token, enabled and disabled, like a\nlucide icon does.",...Z.parameters?.docs?.description}}},Q=[`Default`,`TextAffixes`,`WithDivider`,`WithTags`,`WithButton`,`Disabled`,`Invalid`,`AllSizes`,`InsideFieldText`,`EmailField`,`PriceField`,`PhoneField`,`LegacyFilledIcon`]})))()}$();export{R as AllSizes,k as Default,F as Disabled,V as EmailField,z as InsideFieldText,I as Invalid,Z as LegacyFilledIcon,q as PhoneField,W as PriceField,A as TextAffixes,P as WithButton,j as WithDivider,M as WithTags,Q as __namedExportsOrder,E as default};