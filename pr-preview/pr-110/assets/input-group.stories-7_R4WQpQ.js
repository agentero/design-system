import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n}from"./button-DDSeCh77.js";import{t as r}from"./button-DISizB1u.js";import{n as i,t as a}from"./divider-Dr8I_zVC.js";import{n as o,r as s,t as c}from"./input-CknTUgFE.js";import{n as l,r as u,t as d}from"./icons-nXUFvxw-.js";import{t as f}from"./input-g27hKh11.js";import{n as p,t as m}from"./tag-BxzC8u3z.js";var h=e((()=>{i()})),g=e((()=>{p()})),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{s(),r(),h(),c(),g(),u(),_=t(),{expect:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/InputGroup`,component:o.Root,tags:[`autodocs`],argTypes:{children:{control:!1}},decorators:[e=>(0,_.jsx)(`div`,{className:`max-w-md`,children:(0,_.jsx)(e,{})})],parameters:{docs:{description:{component:"InputGroup puts a control and its addons inside one bordered frame, so a value\nwith a leading icon, a currency prefix or a trailing action reads as a single\ncontrol rather than as a row of boxes. Three parts compose it: `Root` is the\nframe, `Addon` holds an icon, a tag or a button, and `Text` holds a text\nprefix or suffix.\n\nThe group takes no state props. It reads focus, disabled, invalid and the\ncontrol's height off the `Input` inside it, so the frame cannot disagree with\nwhat it wraps — set `size`, `disabled` and `aria-invalid` on the control as\nusual.\n\nThe group is not the control: it renders a `div`, which a `<label>` cannot\npoint at. Inside a form field, reach for `FieldText` with\n`leadingAddon`/`trailingAddon`, which keeps the field's wiring on the\n`<input>` inside the frame."}}}},C=(e,t)=>{let n=document.createElement(`span`);n.style.setProperty(t,`var(${e})`),document.body.append(n);let r=getComputedStyle(n),i=t===`color`?r.color:r.borderTopLeftRadius;return n.remove(),i},w=e=>e===`none`||!/rgba?\((?!0, 0, 0, 0\))/.test(e),T={render:()=>(0,_.jsxs)(o.Root,{children:[(0,_.jsx)(o.Addon,{children:(0,_.jsx)(l,{})}),(0,_.jsx)(f,{"aria-label":`Search`,placeholder:`Search`})]}),play:async({canvasElement:e})=>{let t=x(e),n=e.querySelector(`[data-slot="input-group"]`),r=t.getByRole(`textbox`,{name:`Search`});await v(getComputedStyle(n).borderTopWidth).toBe(`1px`),await v(getComputedStyle(r).borderTopStyle).toBe(`none`),await v(w(getComputedStyle(r).boxShadow)).toBe(!0),await v(w(getComputedStyle(n).boxShadow)).toBe(!1);let i=n.querySelector(`svg`),a=i.querySelector(`path`);await v(getComputedStyle(a).fill).toBe(C(`--color-icon-input-default`,`color`)),await v(i.getBoundingClientRect().height).toBe(24)}},E={render:()=>(0,_.jsxs)(o.Root,{children:[(0,_.jsx)(o.Text,{children:`$`}),(0,_.jsx)(f,{"aria-label":`Amount`,inputMode:`decimal`,placeholder:`0.00`}),(0,_.jsx)(o.Text,{children:`USD`})]}),play:async({canvasElement:e})=>{let t=x(e),n=t.getByRole(`textbox`,{name:`Amount`}),r=t.getByText(`$`);await v(getComputedStyle(r).fontSize).toBe(getComputedStyle(n).fontSize),await v(getComputedStyle(r).color).toBe(C(`--color-text-input-placeholder`,`color`))}},D={render:()=>(0,_.jsxs)(o.Root,{children:[(0,_.jsx)(o.Addon,{children:(0,_.jsx)(m,{color:`informative`,children:`ID`})}),(0,_.jsx)(f,{"aria-label":`Identifier`,placeholder:`000-0000000`})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-slot="input-group"]`),n=e.querySelector(`[data-slot="tag"]`);await v(getComputedStyle(n).borderTopLeftRadius).toBe(C(`--radius-sm`,`border-radius`)),await v(getComputedStyle(n).marginInlineStart).toBe(`-4px`);let r=t.getBoundingClientRect();await v(n.getBoundingClientRect().left-r.left).toBeCloseTo(9,0)}},O={render:()=>(0,_.jsxs)(o.Root,{children:[(0,_.jsx)(f,{"aria-label":`Tracking code`,placeholder:`000000000000`}),(0,_.jsx)(o.Addon,{children:(0,_.jsx)(m,{color:`dynamic`,children:`TRACK`})})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-slot="input-group"]`),n=e.querySelector(`[data-slot="tag"]`);await v(t.querySelector(`input`).nextElementSibling).toBe(n.parentElement),await v(getComputedStyle(n).marginInlineStart).toBe(`0px`),await v(getComputedStyle(n).marginInlineEnd).toBe(`-4px`),await v(t.getBoundingClientRect().right-n.getBoundingClientRect().right).toBeCloseTo(9,0),await v(getComputedStyle(n).borderTopLeftRadius).toBe(C(`--radius-sm`,`border-radius`))}},k={render:()=>(0,_.jsxs)(o.Root,{children:[(0,_.jsx)(o.Addon,{children:(0,_.jsx)(d,{})}),(0,_.jsx)(f,{"aria-label":`Invite by email`,type:`email`,placeholder:`name@example.com`}),(0,_.jsx)(a,{orientation:`vertical`}),(0,_.jsx)(o.Addon,{className:`-mx-[var(--input-group-gap)]`,children:(0,_.jsx)(n,{variant:`ghost`,size:`md`,className:`rounded-none`,children:`Invite`})})]}),play:async({canvasElement:e})=>{let t=x(e),n=e.querySelector(`[data-slot="input-group"]`),r=t.getByRole(`button`,{name:`Invite`}),i=e.querySelector(`[data-slot="separator"]`),a=n.getBoundingClientRect();await v(r.getBoundingClientRect().right).toBeCloseTo(a.right-1,0),await v(getComputedStyle(i).backgroundColor).toBe(getComputedStyle(n).borderTopColor)}},A=[`sm`,`md`,`lg`],j={render:()=>(0,_.jsx)(`div`,{className:`flex flex-col gap-4`,children:A.map(e=>(0,_.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,_.jsxs)(o.Root,{"data-testid":`group-${e}`,children:[(0,_.jsx)(o.Addon,{children:(0,_.jsx)(l,{})}),(0,_.jsx)(f,{size:e,"aria-label":`Grouped ${e}`,placeholder:`Search`}),(0,_.jsx)(o.Text,{children:e})]}),(0,_.jsx)(f,{size:e,"aria-label":`Bare ${e}`,placeholder:`Search`})]},e))}),play:async({canvasElement:e})=>{let t=x(e),n={sm:32,md:40,lg:48};for(let e of A){let r=t.getByTestId(`group-${e}`),i=t.getByRole(`textbox`,{name:`Bare ${e}`});await v(r.getBoundingClientRect().height).toBe(n[e]),await v(getComputedStyle(r).borderTopLeftRadius).toBe(getComputedStyle(i).borderTopLeftRadius)}let r=t.getByTestId(`group-md`),i=t.getByTestId(`group-lg`);await v(getComputedStyle(r).borderTopLeftRadius).not.toBe(getComputedStyle(i).borderTopLeftRadius)}},M={render:()=>(0,_.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,_.jsxs)(o.Root,{"data-testid":`group-default`,children:[(0,_.jsx)(o.Addon,{children:(0,_.jsx)(d,{})}),(0,_.jsx)(f,{"aria-label":`Default`,type:`email`,placeholder:`name@example.com`})]}),(0,_.jsxs)(o.Root,{"data-testid":`group-invalid`,children:[(0,_.jsx)(o.Addon,{children:(0,_.jsx)(d,{})}),(0,_.jsx)(f,{"aria-label":`Invalid`,type:`email`,"aria-invalid":!0,defaultValue:`name@`})]}),(0,_.jsxs)(o.Root,{"data-testid":`group-disabled`,children:[(0,_.jsx)(o.Addon,{children:(0,_.jsx)(d,{})}),(0,_.jsx)(f,{"aria-label":`Disabled`,type:`email`,disabled:!0,defaultValue:`name@example.com`})]})]}),play:async({canvasElement:e})=>{let t=x(e),n=e=>getComputedStyle(t.getByTestId(e)).borderTopColor;await v(n(`group-default`)).not.toBe(n(`group-invalid`)),await v(n(`group-default`)).not.toBe(n(`group-disabled`));let r=t.getByTestId(`group-disabled`);await v(w(getComputedStyle(r).boxShadow)).toBe(!0),await v(w(getComputedStyle(t.getByTestId(`group-default`)).boxShadow)).toBe(!1);let i=r.querySelector(`svg path`);await v(getComputedStyle(i).fill).toBe(C(`--color-icon-input-disable`,`color`))}},N={render:()=>(0,_.jsxs)(o.Root,{children:[(0,_.jsx)(o.Addon,{"data-testid":`icon-addon`,children:(0,_.jsx)(l,{})}),(0,_.jsx)(f,{"aria-label":`Search`,defaultValue:`Nationwide`,placeholder:`Search`}),(0,_.jsx)(a,{orientation:`vertical`}),(0,_.jsx)(o.Addon,{className:`-mx-[var(--input-group-gap)]`,children:(0,_.jsx)(n,{variant:`ghost`,size:`md`,className:`rounded-none`,children:`Go`})})]}),play:async({canvasElement:e})=>{let t=x(e),n=e.querySelector(`[data-slot="input-group"]`),r=t.getByRole(`textbox`,{name:`Search`}),i=t.getByRole(`button`,{name:`Go`});await v(getComputedStyle(n).outlineWidth).toBe(`0px`),await y.click(t.getByTestId(`icon-addon`)),await v(r).toHaveFocus(),await b(async()=>{await v(getComputedStyle(n).outlineWidth).toBe(`2px`)}),await v(getComputedStyle(r).outlineStyle).toBe(`none`),r.setSelectionRange(6,6),await y.click(t.getByTestId(`icon-addon`)),await v(r).toHaveFocus(),await v(r.selectionStart).toBe(6),await v(r.selectionEnd).toBe(6),await y.click(i),await v(r).not.toHaveFocus()}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Addon>
                <IconSearch />
            </InputGroup.Addon>
            <Input aria-label="Search" placeholder="Search" />
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
    const control = canvas.getByRole('textbox', {
      name: 'Search'
    });

    // One frame, not two: the group paints the border and the control inside it
    // paints none, so the pair reads as a single control.
    await expect(getComputedStyle(group).borderTopWidth).toBe('1px');
    await expect(getComputedStyle(control).borderTopStyle).toBe('none');
    // The frame keeps the shadow; the control's is switched off.
    await expect(isInvisibleShadow(getComputedStyle(control).boxShadow)).toBe(true);
    await expect(isInvisibleShadow(getComputedStyle(group).boxShadow)).toBe(false);
    // And the icon takes the control's icon colour rather than the page's text
    // colour, which is the addon's job.
    const icon = group.querySelector('svg') as SVGSVGElement;
    const iconPath = icon.querySelector('path') as SVGPathElement;
    await expect(getComputedStyle(iconPath).fill).toBe(resolveToken('--color-icon-input-default', 'color'));
    await expect(icon.getBoundingClientRect().height).toBe(24);
  }
}`,...T.parameters?.docs?.source},description:{story:`A leading icon inside the control's frame — the most common group by a wide
margin. The icon is sized and tinted by the addon, so nothing about it is set
at the call site.

@summary Leading icon addon sharing the control's frame`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Text>$</InputGroup.Text>
            <Input aria-label="Amount" inputMode="decimal" placeholder="0.00" />
            <InputGroup.Text>USD</InputGroup.Text>
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole('textbox', {
      name: 'Amount'
    });
    const prefix = canvas.getByText('$');

    // Same type size as the value it sits beside, in the placeholder colour so
    // it reads as part of the line rather than as content.
    await expect(getComputedStyle(prefix).fontSize).toBe(getComputedStyle(control).fontSize);
    await expect(getComputedStyle(prefix).color).toBe(resolveToken('--color-text-input-placeholder', 'color'));
  }
}`,...E.parameters?.docs?.source},description:{story:`A text prefix and a text suffix. \`InputGroup.Text\` is set in the placeholder
colour and at the control's own type size, so \`$\` and the amount beside it sit
on the same line without the prefix competing with what the user typed.

Text addons are decoration: nothing announces them. The currency the field
expects belongs in its label or description.

@summary Text prefix and suffix set in the control's type size`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Addon>
                <Tag color="informative">ID</Tag>
            </InputGroup.Addon>
            <Input aria-label="Identifier" placeholder="000-0000000" />
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
    const tag = canvasElement.querySelector('[data-slot="tag"]') as HTMLElement;

    // The frame's own treatment wins over the tag's default radius.
    await expect(getComputedStyle(tag).borderTopLeftRadius).toBe(resolveToken('--radius-sm', 'border-radius'));

    // And the pull, which is the other half of the claim: a negative inline
    // start margin of 4px eats a third of the frame's 12px inner padding, so
    // the tag sits 9px from the frame's left edge (1px border + 12px padding −
    // 4px pull) instead of 13px. That 9px is what the legacy control shows.
    await expect(getComputedStyle(tag).marginInlineStart).toBe('-4px');
    const frame = group.getBoundingClientRect();
    await expect(tag.getBoundingClientRect().left - frame.left).toBeCloseTo(9, 0);
  }
}`,...D.parameters?.docs?.source},description:{story:`A [Tag](?path=/docs/components-tag--docs) as the addon, for a value whose kind
has to stay on screen while it is typed. The group squares off the tag's
corners and pulls it towards the frame's edge, so it reads as part of the
control rather than as content inside it.

@summary Tag addon squared off and pulled into the frame's edge`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <Input aria-label="Tracking code" placeholder="000000000000" />
            <InputGroup.Addon>
                <Tag color="dynamic">TRACK</Tag>
            </InputGroup.Addon>
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
    const tag = canvasElement.querySelector('[data-slot="tag"]') as HTMLElement;

    // The tag is genuinely after the control, which is what the frame's
    // adjacency rules key off — an addon that merely looks trailing because of
    // flex order would not match them.
    const control = group.querySelector('input') as HTMLInputElement;
    await expect(control.nextElementSibling).toBe(tag.parentElement);

    // The pull swaps sides. A leading tag takes a -4px start margin; this one
    // has that cancelled back to 0 and takes the -4px on its end instead —
    // without the cancellation it would be pulled away from the edge it sits
    // against and towards the value.
    await expect(getComputedStyle(tag).marginInlineStart).toBe('0px');
    await expect(getComputedStyle(tag).marginInlineEnd).toBe('-4px');

    // So the tag sits 9px from the frame's right edge (1px border + 12px
    // padding − 4px pull), which is the mirror of the leading tag's 9px and the
    // number the legacy control shows.
    const frame = group.getBoundingClientRect();
    await expect(frame.right - tag.getBoundingClientRect().right).toBeCloseTo(9, 0);

    // The squared-off corners still apply: the radius rule is declared before
    // the two margin rules here, where the legacy declared it after, and the
    // trailing tag is the one case where that order is observable.
    await expect(getComputedStyle(tag).borderTopLeftRadius).toBe(resolveToken('--radius-sm', 'border-radius'));
  }
}`,...O.parameters?.docs?.source},description:{story:`The same [Tag](?path=/docs/components-tag--docs), on the other side of the
value — a code whose kind is only known once it has been typed. The pull
follows the tag: it is dropped from the tag's leading edge and applied to its
trailing one, so the tag sits against the frame's right edge exactly as the
leading one sits against its left.

@summary Tag addon after the value, pulled into the frame's trailing edge`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Addon>
                <IconMail />
            </InputGroup.Addon>
            <Input aria-label="Invite by email" type="email" placeholder="name@example.com" />
            <Divider orientation="vertical" />
            <InputGroup.Addon className="-mx-[var(--input-group-gap)]">
                <Button variant="ghost" size="md" className="rounded-none">
                    Invite
                </Button>
            </InputGroup.Addon>
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
    const button = canvas.getByRole('button', {
      name: 'Invite'
    });
    const rule = canvasElement.querySelector('[data-slot="separator"]') as HTMLElement;

    // The button reaches the frame's inner edge — the gap is cancelled, not
    // merely reduced.
    const frame = group.getBoundingClientRect();
    await expect(button.getBoundingClientRect().right).toBeCloseTo(frame.right - 1, 0);
    // And the rule inside the frame takes the frame's own border colour.
    await expect(getComputedStyle(rule).backgroundColor).toBe(getComputedStyle(group).borderTopColor);
  }
}`,...k.parameters?.docs?.source},description:{story:`A [Divider](?path=/docs/components-divider--docs) splits the frame, and a
trailing [Button](?path=/docs/components-button--docs) fills its own end of
it. The addon cancels the group's gap with \`--input-group-gap\` so the button
reaches the border instead of floating a gap away from it.

Reach for this only when the action belongs to the value — copying it,
clearing it, running the search it describes. An action that merely sits near
the field belongs outside the frame.

@summary Trailing action button filling its end of the frame`,...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {SIZES.map(size => <div key={size} className="flex items-center gap-4">
                    <InputGroup.Root data-testid={\`group-\${size}\`}>
                        <InputGroup.Addon>
                            <IconSearch />
                        </InputGroup.Addon>
                        <Input size={size} aria-label={\`Grouped \${size}\`} placeholder="Search" />
                        <InputGroup.Text>{size}</InputGroup.Text>
                    </InputGroup.Root>

                    <Input size={size} aria-label={\`Bare \${size}\`} placeholder="Search" />
                </div>)}
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heights = {
      sm: 32,
      md: 40,
      lg: 48
    };
    for (const size of SIZES) {
      const group = canvas.getByTestId(\`group-\${size}\`);
      const bare = canvas.getByRole('textbox', {
        name: \`Bare \${size}\`
      });

      // The frame is exactly as tall as the control it replaces — the control's
      // negative block margin is what pays for the frame's two borders.
      await expect(group.getBoundingClientRect().height).toBe(heights[size]);
      await expect(getComputedStyle(group).borderTopLeftRadius).toBe(getComputedStyle(bare).borderTopLeftRadius);
    }

    // The 48px control is the one that changes the frame's shape.
    const md = canvas.getByTestId('group-md');
    const lg = canvas.getByTestId('group-lg');
    await expect(getComputedStyle(md).borderTopLeftRadius).not.toBe(getComputedStyle(lg).borderTopLeftRadius);
  }
}`,...j.parameters?.docs?.source},description:{story:"The three control heights, set on the `Input` and followed by the frame. The\ngroup has no `size` of its own: it takes its height from the control, and at\n`lg` it raises its corner radius with it, so a grouped control and a bare one\nof the same size are the same shape.\n\n@summary Frame height and radius following the control's size",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <InputGroup.Root data-testid="group-default">
                <InputGroup.Addon>
                    <IconMail />
                </InputGroup.Addon>
                <Input aria-label="Default" type="email" placeholder="name@example.com" />
            </InputGroup.Root>

            <InputGroup.Root data-testid="group-invalid">
                <InputGroup.Addon>
                    <IconMail />
                </InputGroup.Addon>
                <Input aria-label="Invalid" type="email" aria-invalid defaultValue="name@" />
            </InputGroup.Root>

            <InputGroup.Root data-testid="group-disabled">
                <InputGroup.Addon>
                    <IconMail />
                </InputGroup.Addon>
                <Input aria-label="Disabled" type="email" disabled defaultValue="name@example.com" />
            </InputGroup.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const borderOf = (testId: string) => getComputedStyle(canvas.getByTestId(testId)).borderTopColor;

    // Read as rgb() off the elements and compared against each other rather
    // than against a literal, so the assertion follows the tokens.
    await expect(borderOf('group-default')).not.toBe(borderOf('group-invalid'));
    await expect(borderOf('group-default')).not.toBe(borderOf('group-disabled'));
    const disabled = canvas.getByTestId('group-disabled');
    await expect(isInvisibleShadow(getComputedStyle(disabled).boxShadow)).toBe(true);
    await expect(isInvisibleShadow(getComputedStyle(canvas.getByTestId('group-default')).boxShadow)).toBe(false);
    const disabledIcon = disabled.querySelector('svg path') as SVGPathElement;
    await expect(getComputedStyle(disabledIcon).fill).toBe(resolveToken('--color-icon-input-disable', 'color'));
  }
}`,...M.parameters?.docs?.source},description:{story:"Invalid and disabled, both read off the control. `aria-invalid` on the\n`Input` turns the frame destructive; `disabled` greys the frame, drops its\nshadow and dims the icon. Neither is a prop on the group, which is what stops\nthe frame from ever disagreeing with the control it wraps.\n\n@summary Invalid and disabled frames driven by the control's own attributes",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <InputGroup.Addon data-testid="icon-addon">
                <IconSearch />
            </InputGroup.Addon>
            <Input aria-label="Search" defaultValue="Nationwide" placeholder="Search" />
            <Divider orientation="vertical" />
            <InputGroup.Addon className="-mx-[var(--input-group-gap)]">
                <Button variant="ghost" size="md" className="rounded-none">
                    Go
                </Button>
            </InputGroup.Addon>
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
    const control = canvas.getByRole('textbox', {
      name: 'Search'
    }) as HTMLInputElement;
    const action = canvas.getByRole('button', {
      name: 'Go'
    });
    await expect(getComputedStyle(group).outlineWidth).toBe('0px');
    await userEvent.click(canvas.getByTestId('icon-addon'));
    await expect(control).toHaveFocus();
    // Focusing through the addon draws the ring on the frame rather than on the
    // control. The ring is a 75ms transition, so it is waited for rather than
    // read on the same tick as the click.
    await waitFor(async () => {
      await expect(getComputedStyle(group).outlineWidth).toBe('2px');
    });
    await expect(getComputedStyle(control).outlineStyle).toBe('none');

    // The caret half of the claim, which is what the addon's \`preventDefault\`
    // buys: with the caret parked between the sixth and seventh characters of
    // "Nationwide", pressing the addon has to leave it there rather than
    // dropping it at either end of the value.
    control.setSelectionRange(6, 6);
    await userEvent.click(canvas.getByTestId('icon-addon'));
    await expect(control).toHaveFocus();
    await expect(control.selectionStart).toBe(6);
    await expect(control.selectionEnd).toBe(6);

    // The button keeps its own press: focus does not jump to the value.
    await userEvent.click(action);
    await expect(control).not.toHaveFocus();
  }
}`,...N.parameters?.docs?.source},description:{story:`The addon stands in for the control: pressing the icon focuses the value and
leaves the caret where it was, which is what makes a leading icon feel like
part of the field rather than something beside it. A press that lands on a
button inside an addon is left alone, so an addon can still hold a real
action.

@summary Pressing an addon focuses the control; buttons keep their press`,...N.parameters?.docs?.description}}},P=[`Default`,`WithTextAddons`,`WithTagAddon`,`WithTrailingTagAddon`,`WithActionButton`,`Sizes`,`States`,`FocusFromAddon`]}))();export{T as Default,N as FocusFromAddon,j as Sizes,M as States,k as WithActionButton,D as WithTagAddon,E as WithTextAddons,O as WithTrailingTagAddon,P as __namedExportsOrder,S as default};