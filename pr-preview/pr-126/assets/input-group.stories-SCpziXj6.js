import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CxdW0L-D.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./dist-C8AlzbfS.js";import{n as a,t as o}from"./utils-nsk-j2e0.js";import{n as ee,t as te}from"./icons-RRxAkzcP.js";import{n as ne,t as s}from"./button-XwY9nWC-.js";import{n as re,t as ie}from"./label-BcCqzO2Q.js";import{n as ae,t as c}from"./field-BBETq6DP.js";import{n as oe,t as l}from"./input-C1Gs3pFZ.js";import{r as se,t as ce}from"./icons-CYg7bn5o.js";import{n as le,t as u}from"./icons-DHzydebG.js";import{n as ue,t as d}from"./field-text-CrSlb4A1.js";import{n as de,t as f}from"./tag-CqgP0sO6.js";import{n as fe,t as p}from"./dropdown-menu-QnrYE9Si.js";import{n as pe,t as m}from"./divider-DUr3zpwc.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{i(),a(),h=n(),g=r({slots:{root:[`group/input-group [--input-group-gap:0.75rem]`,`flex gap-(--input-group-gap) rounded-md border border-solid border-border-input-default`,`bg-bg-input-normal px-3 text-text-input-normal shadow-sm`,`cursor-text overflow-hidden outline-0 -outline-offset-1 outline-[transparent]`,`transition-[color,box-shadow,outline-color,outline-offset,outline-width] duration-75`,`has-[input:focus-within,textarea:focus-within]:border-border-input-focus`,`has-[input:focus-within,textarea:focus-within]:outline-border-input-focus`,`has-[input:focus-within,textarea:focus-within]:outline-[0.125rem]`,`has-[input:focus-within,textarea:focus-within]:outline-offset-[-0.0625rem]`,`has-[input:disabled,textarea:disabled]:cursor-default`,`has-[input:disabled,textarea:disabled]:border-border-input-disable`,`has-[input:disabled,textarea:disabled]:bg-bg-input-disable`,`has-[input:disabled,textarea:disabled]:text-text-input-disable`,`has-[input:disabled,textarea:disabled]:shadow-none`,`has-[input[data-size="lg"],textarea[data-size="lg"]]:rounded-lg`,`has-[input[aria-invalid="true"],textarea[aria-invalid="true"]]:border-border-input-destructive`,`has-[input[aria-invalid="true"]:focus-within,textarea[aria-invalid="true"]:focus-within]:outline-outline-input-destructive`,`**:[input,textarea]:-my-0.25 **:[input,textarea]:border-none **:[input,textarea]:bg-transparent`,`**:[input,textarea]:px-0 **:[input,textarea]:pb-0.125 **:[input,textarea]:shadow-none`,`**:[input,textarea]:outline-none **:[input,textarea]:focus-visible:outline-none`,`**:[[data-slot=separator]]:bg-border-input-default`,`**:[[data-slot=tag]]:-ms-1 **:[[data-slot=tag]]:rounded-sm`,`**:[input+[data-slot=input-group-addon]>[data-slot=tag]]:ms-0`,`**:[input+[data-slot=input-group-addon]>[data-slot=tag]]:-me-1`],addon:[`flex h-auto cursor-text items-center justify-center`,`*:[svg]:-mx-1 *:[svg]:size-6 [&_path]:fill-icon-input-default`,`group-has-[input:disabled,textarea:disabled]/input-group:[&_path]:fill-icon-input-disable`],text:[`flex items-center text-sm text-text-input-placeholder`,`group-has-[input[data-size="lg"]]/input-group:text-base`,`group-has-[input:disabled,textarea:disabled]/input-group:text-text-input-disable`]},variants:{variant:{default:{},action:{addon:[`-mx-(--input-group-gap) shrink-0 items-stretch rounded-[inherit]`,`*:[button]:h-auto *:[button]:rounded-none *:[button]:focus-visible:-outline-offset-2`,`first:*:[button]:rounded-s-[inherit] last:*:[button]:rounded-e-[inherit]`]}}},defaultVariants:{variant:`default`}}),_=g(),v=({className:e,...t})=>(0,h.jsx)(`div`,{"data-slot":`input-group`,className:o(_.root(),e),...t}),v.displayName=`InputGroup.Root`,y=({className:e,variant:t,onMouseDown:n,...r})=>(0,h.jsx)(`div`,{"data-slot":`input-group-addon`,className:o(g({variant:t}).addon(),e),onMouseDown:e=>{if(n?.(e),e.defaultPrevented||e.target.closest(`button, a`))return;e.preventDefault();let t=e.currentTarget.parentElement,r=t?.querySelector(`input, textarea`);r&&!t?.querySelector(`input:focus, textarea:focus`)&&r.focus()},...r}),y.displayName=`InputGroup.Addon`,b=({className:e,...t})=>(0,h.jsx)(`span`,{"data-slot":`input-group-text`,className:o(_.text(),e),...t}),b.displayName=`InputGroup.Text`;try{g.displayName=`InputGroup.Root`,g.__docgenInfo={description:"Style recipe for InputGroup. Slots: `root` (the bordered frame), `addon` and\n`text`. Focus, disabled, invalid and size all come from the `<input>` or\n`<textarea>` inside through `:has()`, so the frame can never disagree with\nits control.",displayName:`InputGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/input-group/input-group.tsx`,methods:[],props:{variant:{defaultValue:null,description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "action"`,value:[{value:`"default"`},{value:`"action"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the InputGroup frame and addons`}}}catch{}try{y.displayName=`InputGroup.Addon`,y.__docgenInfo={description:`A slot for an icon, a tag or a button inside the frame. Icons take the input
colour and size (24px) and follow the disabled state. A press on the addon
itself focuses the input, so the whole frame reads as the control; a press on
a button or link inside it is left alone.

For a text affix use \`InputGroup.Text\`, which sets the type and colour a
prefix needs.`,displayName:`InputGroup.Addon`,filePath:`/home/runner/work/design-system/design-system/src/input-group/input-group.tsx`,methods:[],props:{variant:{defaultValue:{value:`'default'`},declarations:[{fileName:`design-system/src/input-group/input-group.tsx`,name:`TypeLiteral`}],description:"`action` runs a button edge to edge at the frame's height.",name:`variant`,required:!1,tags:{default:`'default'`},type:{name:`enum`,raw:`"default" | "action"`,value:[{value:`"default"`},{value:`"action"`}]}}},tags:{summary:`Icon, tag or button slot inside the input group frame`,dataAttribute:`{string} data-slot - Always set to "input-group-addon"`,example:`<InputGroup.Root>
  <InputGroup.Addon><IconSearch /></InputGroup.Addon>
  <Input type="search" placeholder="Search agencies" />
</InputGroup.Root>`}}}catch{}try{b.displayName=`InputGroup.Text`,b.__docgenInfo={description:'A text affix inside the frame: a currency symbol, a protocol, a unit. Set in\nthe placeholder colour so the typed value stands out, at the input\'s text\nsize (`base` when the input is `lg`), and greyed out with a disabled input.\nIt is decoration only: a screen reader does not read it as part of the value,\nso say the unit in the label or the description when it matters — and the\nvalue excludes it too, so a `https://` prefix goes with a `type="text"`\ninput, not `type="url"`, whose native validation would reject the bare host.',displayName:`InputGroup.Text`,filePath:`/home/runner/work/design-system/design-system/src/input-group/input-group.tsx`,methods:[],props:{},tags:{summary:`Currency, protocol or unit affix set beside the input`,dataAttribute:`{string} data-slot - Always set to "input-group-text"`,example:`<InputGroup.Root>
  <InputGroup.Text>https://</InputGroup.Text>
  <Input type="text" inputMode="url" autoCapitalize="none" placeholder="www.agentero.com" />
</InputGroup.Root>`}}}catch{}})))()}var S;function C(){return(C=e((()=>{x(),S={Root:v,Addon:y,Text:b}})))()}var w,T,E,D,O,k,A,me,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,he,Z,ge,_e,Q,$;function ve(){return(ve=e((()=>{w=t(),C(),ee(),ne(),se(),le(),pe(),fe(),ae(),ue(),oe(),re(),de(),T=n(),{expect:E,fn:D,userEvent:O,waitFor:k,within:A}=__STORYBOOK_MODULE_TEST__,me={title:`Components/InputGroup`,component:S.Root,tags:[`autodocs`],decorators:[e=>(0,T.jsx)(`div`,{className:`w-96 max-w-full p-4`,children:(0,T.jsx)(e,{})})],parameters:{docs:{description:{component:"InputGroup draws an `Input` and what sits beside it — an icon, a currency or\nunit affix, a trailing action — as one bordered control. The frame owns the\nborder, the shadow and the focus ring; the `Input` inside renders bare and\nhands its state to the frame through `:has()`, so focus, `disabled`,\n`aria-invalid` and `size` are never wired by hand. Inside a `FieldText` the\n`Input` keeps taking its label and messages from the field."}}}},j=e=>Array.from(e.querySelectorAll(`[data-slot="input-group"]`)),M=e=>j(e)[0],N={render:()=>(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Addon,{children:(0,T.jsx)(u,{})}),(0,T.jsx)(l,{type:`search`,placeholder:`Search agencies`,"aria-label":`Search agencies`})]}),play:async({canvasElement:e})=>{let t=A(e),n=M(e),r=t.getByRole(`searchbox`,{name:`Search agencies`});await E(n).not.toHaveAttribute(`role`),await E(r).toHaveAttribute(`data-slot`,`input`),await O.click(e.querySelector(`[data-slot="input-group-addon"]`)),await E(r).toHaveFocus(),await k(()=>E(getComputedStyle(n).outlineWidth).toBe(`2px`)),await E(getComputedStyle(r).borderStyle).toBe(`none`),await E(getComputedStyle(r).outlineStyle).toBe(`none`)}},P={render:()=>(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Text,{children:`$`}),(0,T.jsx)(l,{inputMode:`decimal`,placeholder:`0.00`,"aria-label":`Premium in US dollars`}),(0,T.jsx)(S.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=A(e),n=t.getByRole(`textbox`,{name:`Premium in US dollars`});await E(t.getByText(`$`)).toHaveAttribute(`data-slot`,`input-group-text`),await E(t.getByText(`USD`)).toHaveAttribute(`data-slot`,`input-group-text`),await O.type(n,`1250`),await E(n).toHaveValue(`1250`)}},F={render:()=>(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Text,{children:`https://`}),(0,T.jsx)(m,{orientation:`vertical`}),(0,T.jsx)(l,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero`,"aria-label":`Agency website`}),(0,T.jsx)(m,{orientation:`vertical`}),(0,T.jsx)(S.Text,{children:`.com`})]}),play:async({canvasElement:e})=>{let t=A(e),n=M(e),r=t.getByRole(`textbox`,{name:`Agency website`}),i=n.querySelectorAll(`[data-slot="separator"]`);await E(i).toHaveLength(2);for(let e of i)await E(e.offsetHeight).toBe(n.clientHeight);await O.type(r,`www.agentero`),await E(r.validity.valid).toBe(!0)}},I={render:()=>(0,T.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Addon,{children:(0,T.jsx)(f,{color:`informative`,children:`FEIN`})}),(0,T.jsx)(l,{placeholder:`XX-XXXXXXX`,"aria-label":`FEIN`})]}),(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Addon,{children:(0,T.jsx)(u,{})}),(0,T.jsx)(l,{placeholder:`Describe your filters`,"aria-label":`Describe your filters`}),(0,T.jsx)(S.Addon,{children:(0,T.jsx)(f,{color:`informative`,children:`Beta`})})]})]}),play:async({canvasElement:e})=>{let t=A(e),n=getComputedStyle(t.getByText(`FEIN`)),r=getComputedStyle(t.getByText(`Beta`)),i=document.createElement(`span`);i.className=`rounded-sm`,e.append(i),await E(n.marginInlineStart).toBe(`-4px`),await E(r.marginInlineStart).toBe(`0px`),await E(r.marginInlineEnd).toBe(`-4px`),await E(n.borderRadius).toBe(getComputedStyle(i).borderRadius),i.remove()}},L=D(),R={render:()=>(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(l,{value:`https://agentero.com/r/abc123`,readOnly:!0,"aria-label":`Referral link`}),(0,T.jsx)(m,{orientation:`vertical`}),(0,T.jsx)(S.Addon,{variant:`action`,children:(0,T.jsx)(s,{type:`button`,variant:`ghost`,size:`md`,onClick:L,children:`Copy link`})})]}),play:async({canvasElement:e})=>{let t=A(e),n=M(e),r=t.getByRole(`button`,{name:`Copy link`});await O.click(r),await E(L).toHaveBeenCalledOnce(),await E(t.getByRole(`textbox`,{name:`Referral link`})).not.toHaveFocus();let i=n.getBoundingClientRect(),a=r.getBoundingClientRect();await E(i.height).toBe(40),await E(a.right).toBeCloseTo(i.right-n.clientLeft,0),await E(a.height).toBeCloseTo(n.clientHeight,0),await E(getComputedStyle(r).borderTopLeftRadius).toBe(`0px`),await E(getComputedStyle(r).borderTopRightRadius).toBe(getComputedStyle(n).borderTopRightRadius),t.getByRole(`textbox`,{name:`Referral link`}).focus(),await O.tab(),await E(r).toHaveFocus(),await E(parseFloat(getComputedStyle(r).outlineOffset)).toBeLessThan(0)}},z={render:()=>(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Addon,{children:(0,T.jsx)(u,{})}),(0,T.jsx)(l,{placeholder:`Search agencies`,"aria-label":`Search agencies`,disabled:!0}),(0,T.jsx)(S.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=A(e);await E(t.getByRole(`textbox`,{name:`Search agencies`})).toBeDisabled(),await E(getComputedStyle(M(e)).cursor).toBe(`default`)}},B={render:()=>(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Text,{children:`$`}),(0,T.jsx)(l,{defaultValue:`-40`,"aria-invalid":!0,"aria-label":`Premium in US dollars`})]}),play:async({canvasElement:e})=>{let t=A(e).getByRole(`textbox`,{name:`Premium in US dollars`}),n=document.createElement(`div`);n.className=`border border-border-input-default`,e.append(n),await E(t).toHaveAttribute(`aria-invalid`,`true`),await E(getComputedStyle(M(e)).borderColor).not.toBe(getComputedStyle(n).borderColor),n.remove()}},V=[`sm`,`md`,`lg`],H={render:()=>(0,T.jsx)(`div`,{className:`flex flex-col gap-4`,children:V.map(e=>(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Addon,{children:(0,T.jsx)(u,{})}),(0,T.jsx)(l,{size:e,placeholder:`Size ${e}`,"aria-label":`Size ${e}`})]},e))}),play:async({canvasElement:e})=>{let[t,n,r]=j(e);await E(t.getBoundingClientRect().height).toBe(32),await E(n.getBoundingClientRect().height).toBe(40),await E(r.getBoundingClientRect().height).toBe(48),await E(parseFloat(getComputedStyle(r).borderRadius)).toBeGreaterThan(parseFloat(getComputedStyle(n).borderRadius))}},U={render:()=>(0,T.jsxs)(d,{required:!0,children:[(0,T.jsx)(ie,{children:`Agency website`}),(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Text,{children:`https://`}),(0,T.jsx)(l,{type:`text`,inputMode:`url`,autoCapitalize:`none`,placeholder:`www.agentero.com`})]}),(0,T.jsx)(c.Description,{children:`Shown on your public profile.`})]}),play:async({canvasElement:e})=>{let t=A(e).getByRole(`textbox`,{name:`Agency website`});await E(t).toBeRequired(),await E(t).toHaveAccessibleDescription(`Shown on your public profile.`),await E(M(e)).not.toHaveAttribute(`id`)}},W=e=>(0,T.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,T.jsx)(`path`,{d:`M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z`})}),G=({label:e,tooltip:t,required:n,error:r,children:i})=>(0,T.jsx)(`div`,{className:`flex flex-col gap-6`,children:[!1,!0].map(a=>(0,T.jsxs)(d,{invalid:a,required:n,children:[(0,T.jsx)(c.Label,{required:n,optional:!n,tooltip:t,children:e}),i,a?(0,T.jsx)(c.Error,{errors:[{message:r}]}):(0,T.jsx)(c.Description,{children:`Helper text`})]},String(a)))}),K=()=>{let[e,t]=(0,w.useState)(``),n=(0,w.useRef)(null);return(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Addon,{children:(0,T.jsx)(u,{})}),(0,T.jsx)(l,{ref:n,value:e,onChange:e=>t(e.target.value),placeholder:`Search agencies`}),e&&(0,T.jsx)(S.Addon,{children:(0,T.jsx)(s,{variant:`ghost`,size:`xs`,type:`button`,iconOnly:!0,"aria-label":`Clear search`,onClick:()=>{t(``),n.current?.focus()},children:(0,T.jsx)(ce,{})})})]})},q=D(e=>e.preventDefault()),J={render:()=>(0,T.jsx)(`form`,{onSubmit:q,children:(0,T.jsx)(G,{label:`Agency`,tooltip:`Search by agency name or NPN.`,required:!0,error:`Pick an agency from the list.`,children:(0,T.jsx)(K,{})})}),play:async({canvasElement:e})=>{let t=A(e),[n]=t.getAllByRole(`textbox`,{name:/Agency/});await E(t.queryByRole(`button`,{name:`Clear search`})).not.toBeInTheDocument(),await O.type(n,`Acme`),await O.click(t.getByRole(`button`,{name:`Clear search`})),await E(n).toHaveValue(``),await E(n).toHaveFocus(),await E(q).not.toHaveBeenCalled(),await E(t.queryByRole(`button`,{name:`Clear search`})).not.toBeInTheDocument()}},Y={render:()=>(0,T.jsx)(G,{label:`Email`,required:!0,error:`Enter a valid email address.`,children:(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Addon,{children:(0,T.jsx)(W,{})}),(0,T.jsx)(l,{type:`email`,placeholder:`me@email.com`})]})}),play:async({canvasElement:e})=>{let[t,n]=A(e).getAllByRole(`textbox`,{name:/Email/});await E(t).not.toHaveAttribute(`aria-invalid`),await E(n).toHaveAttribute(`aria-invalid`,`true`),await E(n).toHaveAccessibleDescription(`Enter a valid email address.`)}},X=[`USD`,`EUR`,`MXN`],he=()=>{let[e,t]=(0,w.useState)(`USD`);return(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Text,{children:`$`}),(0,T.jsx)(l,{inputMode:`decimal`,placeholder:`0.00`}),(0,T.jsx)(S.Addon,{variant:`action`,children:(0,T.jsxs)(p.Root,{children:[(0,T.jsx)(p.Trigger,{asChild:!0,children:(0,T.jsxs)(s,{variant:`ghost`,size:`sm`,"aria-label":`Currency: ${e}`,children:[e,(0,T.jsx)(te,{})]})}),(0,T.jsx)(p.Portal,{children:(0,T.jsx)(p.Content,{align:`end`,children:X.map(e=>(0,T.jsx)(p.Item,{onSelect:()=>t(e),children:e},e))})})]})})]})},Z={render:()=>(0,T.jsx)(G,{label:`Price`,required:!0,error:`Enter a price above zero.`,children:(0,T.jsx)(he,{})}),play:async({canvasElement:e})=>{let t=A(e),n=A(e.ownerDocument.body),[r]=j(e),[i]=t.getAllByRole(`button`,{name:`Currency: USD`});await E(r.getBoundingClientRect().height).toBe(40),await O.click(i),await O.click(await n.findByRole(`menuitem`,{name:`EUR`})),await k(()=>E(n.queryByRole(`menu`)).not.toBeInTheDocument()),await E(i).toHaveAccessibleName(`Currency: EUR`),await E(i).toHaveFocus(),await O.click(i),await O.click(await n.findByRole(`menuitem`,{name:`USD`})),await k(()=>E(n.queryByRole(`menu`)).not.toBeInTheDocument())}},ge=[`US +1`,`CA +1`],_e=()=>{let[e,t]=(0,w.useState)(`US +1`);return(0,T.jsxs)(S.Root,{children:[(0,T.jsx)(S.Addon,{variant:`action`,children:(0,T.jsxs)(p.Root,{children:[(0,T.jsx)(p.Trigger,{asChild:!0,children:(0,T.jsxs)(s,{variant:`ghost`,size:`sm`,"aria-label":`Country code: ${e}`,children:[e,(0,T.jsx)(te,{})]})}),(0,T.jsx)(p.Portal,{children:(0,T.jsx)(p.Content,{align:`start`,children:ge.map(e=>(0,T.jsx)(p.Item,{onSelect:()=>t(e),children:e},e))})})]})}),(0,T.jsx)(l,{type:`tel`,autoComplete:`tel-national`,placeholder:`(555) 000-0000`})]})},Q={render:()=>(0,T.jsx)(G,{label:`Phone number`,error:`Enter a 10-digit phone number.`,children:(0,T.jsx)(_e,{})}),play:async({canvasElement:e})=>{let t=A(e),[n]=j(e),[r]=t.getAllByRole(`button`,{name:`Country code: US +1`}),i=n.getBoundingClientRect();await E(i.height).toBe(40),await E(r.getBoundingClientRect().left).toBeCloseTo(i.left+n.clientLeft,0),await E(getComputedStyle(r).borderTopLeftRadius).toBe(getComputedStyle(n).borderTopLeftRadius)}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`A \`Divider\` separates an affix from the value when it reads as a distinct
segment, like a protocol before a domain. It spans the full height of the
frame, meeting its border at both ends.

@summary Protocol prefix and domain suffix split off by vertical dividers`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`A \`Tag\` in an addon labels what the value is. It tucks into the frame's
padding on the side it touches and takes a tighter radius, so it sits inside
the corner instead of competing with it.

@summary Leading and trailing tags tucked into the frame's padding`,...I.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`\`disabled\` on the input greys out the whole frame — background, border, icon
and affix — and the frame stops offering the text cursor.

@summary Disabled input greying out the frame and its addons`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`\`aria-invalid\` on the input moves the destructive border to the frame, and
the ring follows it on focus.

@summary Invalid input driving the frame's destructive border`,...B.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"The frame follows the input's `size`: the same height as a standalone\n`Input` of that size, and the larger corner radius with `lg`.\n\n@summary The three input sizes inside the frame, heights matching Input",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` nothing changes for the group: the \`Input\` reads the
field's context at any depth, so the label names it and the description
describes it with no ids written by hand. The frame is not in the way.

@summary Label and description reaching the input through the frame`,...U.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <form onSubmit={handleSearchSubmit}>
            <FieldStates label="Agency" tooltip="Search by agency name or NPN." required error="Pick an agency from the list.">
                <SearchInput />
            </FieldStates>
        </form>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [input] = canvas.getAllByRole('textbox', {
      name: /Agency/
    }) as [HTMLElement];
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).not.toBeInTheDocument();
    await userEvent.type(input, 'Acme');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(input).toHaveValue('');
    await expect(input).toHaveFocus();
    await expect(handleSearchSubmit).not.toHaveBeenCalled();
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).not.toBeInTheDocument();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`The email field from the Portal UI library: a leading icon is all it adds
to the input.

@summary Email field with a leading icon, valid and invalid`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`The price field from the Portal UI library: a currency symbol before the
value and a currency picker after it. The picker is a \`DropdownMenu\` whose
trigger fills an \`action\` addon, so it keeps the frame's height and an inset
focus ring.

@summary Price field with a symbol and a currency picker, valid and invalid`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`The optional phone field from the Portal UI library: a country code picker
before the number. The picker leads, so the \`action\` addon rounds its
button's start corners with the frame.

@summary Phone field with a leading country code picker, valid and invalid`,...Q.parameters?.docs?.description}}},$=[`Default`,`TextAffixes`,`WithDivider`,`WithTags`,`WithButton`,`Disabled`,`Invalid`,`AllSizes`,`InsideFieldText`,`SearchField`,`EmailField`,`PriceField`,`PhoneField`]})))()}ve();export{H as AllSizes,N as Default,z as Disabled,Y as EmailField,U as InsideFieldText,B as Invalid,Q as PhoneField,Z as PriceField,J as SearchField,P as TextAffixes,R as WithButton,F as WithDivider,I as WithTags,$ as __namedExportsOrder,me as default};