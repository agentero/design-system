import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BwMQLG_j.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./textarea-BbvmVYnL.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{a=t(),r(),o=n(),{expect:s,userEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/TextArea`,component:i,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},rows:{control:`number`},placeholder:{control:`text`},maxLength:{control:`number`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{placeholder:`Anything the underwriter should know`,"aria-label":`Notes`},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,o.jsx)(e,{})})],parameters:{docs:{description:{component:"TextArea is the base multi-line text control, with Input's skin, sizes and\nstates. It wires nothing on its own: `id`, `aria-invalid` and\n`aria-describedby` are plain props, set by whoever owns the field."}}}},f={play:async({canvasElement:e})=>{let t=u(e).getByRole(`textbox`,{name:`Notes`});await s(t).toHaveAttribute(`data-slot`,`textarea`),await s(getComputedStyle(t).resize).toBe(`vertical`),await c.type(t,`Roof replaced in 2024.{enter}No prior claims.`),await s(t).toHaveValue(`Roof replaced in 2024.
No prior claims.`)}},p={render:e=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,o.jsx)(i,{...e,size:`sm`,"aria-label":`Small`,placeholder:`sm — 76px, three rows`}),(0,o.jsx)(i,{...e,size:`md`,"aria-label":`Medium`,placeholder:`md — 84px, three rows`}),(0,o.jsx)(i,{...e,size:`lg`,"aria-label":`Large`,placeholder:`lg — 96px, three rows`})]}),play:async({canvasElement:e})=>{let t=u(e),n=e=>t.getByRole(`textbox`,{name:e}).getBoundingClientRect().height;await s(n(`Small`)).toBe(76),await s(n(`Medium`)).toBe(84),await s(n(`Large`)).toBe(96),await s(t.getByRole(`textbox`,{name:`Large`})).toHaveAttribute(`data-size`,`lg`)}},m={args:{rows:6,placeholder:`Six rows visible before scrolling`},play:async({canvasElement:e})=>{let t=u(e).getByRole(`textbox`,{name:`Notes`});await s(t).toHaveAttribute(`rows`,`6`),await s(t.getBoundingClientRect().height).toBeGreaterThan(84)}},h={args:{"aria-label":`Reason`,"aria-invalid":!0,"aria-describedby":`reason-error`,defaultValue:`n/a`},render:e=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`0.25rem`},children:[(0,o.jsx)(i,{...e}),(0,o.jsx)(`span`,{id:`reason-error`,children:`Tell us why you are cancelling.`})]}),play:async({canvasElement:e})=>{let t=u(e).getByRole(`textbox`,{name:`Reason`});await s(t).toHaveAttribute(`aria-invalid`,`true`),await s(t).toHaveAccessibleDescription(`Tell us why you are cancelling.`)}},g={args:{disabled:!0,defaultValue:`Cannot be edited`},play:async({canvasElement:e})=>{let t=u(e).getByRole(`textbox`,{name:`Notes`});await s(t).toBeDisabled(),await c.type(t,`nope`),await s(t).toHaveValue(`Cannot be edited`)}},_={args:{readOnly:!0,defaultValue:`Copy me, but do not change me`},play:async({canvasElement:e})=>{let t=u(e).getByRole(`textbox`,{name:`Notes`});await s(t).toHaveAttribute(`readonly`),await s(t).not.toBeDisabled()}},v={args:{maxLength:140},play:async({canvasElement:e})=>{let t=u(e).getByRole(`textbox`,{name:`Notes`}),n=e.querySelector(`[data-slot=textarea-counter]`);await s(t).toHaveAccessibleDescription(`0 of 140 characters`),await s(n).toHaveTextContent(`0/140`),await c.type(t,`Roof replaced in 2024.`),await s(n).toHaveTextContent(`22/140`),await s(t).toHaveAccessibleDescription(`22 of 140 characters`);let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();await s(r.right-i.right).toBe(16),await s(r.bottom-i.bottom).toBe(8),await s(getComputedStyle(t).paddingBottom).toBe(`28px`)}},y={args:{maxLength:10,value:`Twelve chars`,onChange:()=>{},"aria-invalid":!0},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-slot=textarea-counter]`);await s(t).toHaveTextContent(`12/10`),await s(t).toHaveAttribute(`data-over`)}},b=()=>{let e=(0,a.useRef)(null),[,t]=(0,a.useState)(0);return(0,o.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,o.jsx)(i,{ref:e,"aria-label":`Notes`,maxLength:100,defaultValue:`hello`}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>{e.current.value=`bye`,t(e=>e+1)},children:`Reset`})]})},x={render:()=>(0,o.jsx)(b,{}),play:async({canvasElement:e})=>{let t=u(e),n=e.querySelector(`[data-slot=textarea-counter]`);await s(n).toHaveTextContent(`5/100`),await c.click(t.getByRole(`button`,{name:`Reset`})),await s(n).toHaveTextContent(`3/100`)}},S={render:()=>(0,o.jsxs)(`form`,{className:`flex flex-col items-start gap-2`,children:[(0,o.jsx)(i,{"aria-label":`Notes`,maxLength:100,defaultValue:`hello`}),(0,o.jsx)(`button`,{type:`reset`,children:`Reset`})]}),play:async({canvasElement:e})=>{let t=u(e),n=e.querySelector(`[data-slot=textarea-counter]`);await c.type(t.getByRole(`textbox`,{name:`Notes`}),` there`),await s(n).toHaveTextContent(`11/100`),await c.click(t.getByRole(`button`,{name:`Reset`})),await l(()=>s(n).toHaveTextContent(`5/100`))}},C={render:()=>(0,o.jsxs)(`div`,{className:`flex w-96 items-start gap-4`,children:[(0,o.jsx)(i,{"aria-label":`Notes`,className:`w-auto flex-1`}),(0,o.jsx)(`button`,{type:`button`,children:`Clear`})]}),play:async({canvasElement:e})=>{let t=u(e),n=t.getByRole(`textbox`,{name:`Notes`}),r=t.getByRole(`button`,{name:`Clear`});await s(getComputedStyle(n.parentElement).display).toBe(`contents`),await s(n.getBoundingClientRect().right+16).toBeCloseTo(r.getBoundingClientRect().left,0)}},w=()=>{let[e,t]=(0,a.useState)(!1);return(0,o.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,o.jsx)(i,{"aria-label":`Notes`,maxLength:e?100:void 0}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),children:`Toggle limit`})]})},T={render:()=>(0,o.jsx)(w,{}),play:async({canvasElement:e})=>{let t=u(e),n=t.getByRole(`textbox`,{name:`Notes`});await c.type(n,`Draft`),await c.click(t.getByRole(`button`,{name:`Toggle limit`})),await s(t.getByRole(`textbox`,{name:`Notes`})).toBe(n),await s(n).toHaveValue(`Draft`),await s(e.querySelector(`[data-slot=textarea-counter]`)).toHaveTextContent(`5/100`)}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toHaveAttribute('data-slot', 'textarea');
    await expect(getComputedStyle(textarea).resize).toBe('vertical');
    await userEvent.type(textarea, 'Roof replaced in 2024.{enter}No prior claims.');
    await expect(textarea).toHaveValue('Roof replaced in 2024.\\nNo prior claims.');
  }
}`,...f.parameters?.docs?.source},description:{story:`The default control at \`md\`: three rows at rest and a vertical resize handle
the user can drag to make it taller.

@summary Default standalone text area`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <TextArea {...args} size="sm" aria-label="Small" placeholder="sm — 76px, three rows" />
            <TextArea {...args} size="md" aria-label="Medium" placeholder="md — 84px, three rows" />
            <TextArea {...args} size="lg" aria-label="Large" placeholder="lg — 96px, three rows" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const height = (name: string) => canvas.getByRole('textbox', {
      name
    }).getBoundingClientRect().height;
    await expect(height('Small')).toBe(76);
    await expect(height('Medium')).toBe(84);
    await expect(height('Large')).toBe(96);
    await expect(canvas.getByRole('textbox', {
      name: 'Large'
    })).toHaveAttribute('data-size', 'lg');
  }
}`,...p.parameters?.docs?.source},description:{story:`The three sizes mirror Input's: the first row measures one Input of the same
size and the minimum height shows three rows.

@summary The three sizes, three rows tall at rest`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 6,
    placeholder: 'Six rows visible before scrolling'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toHaveAttribute('rows', '6');
    await expect(textarea.getBoundingClientRect().height).toBeGreaterThan(84);
  }
}`,...m.parameters?.docs?.source},description:{story:`\`rows\` sets a taller initial height when three rows are not enough.

@summary Taller initial height through the native rows attribute`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Reason',
    'aria-invalid': true,
    'aria-describedby': 'reason-error',
    defaultValue: 'n/a'
  },
  render: args => <div style={{
    display: 'grid',
    gap: '0.25rem'
  }}>
            <TextArea {...args} />
            <span id="reason-error">Tell us why you are cancelling.</span>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Reason'
    });
    await expect(textarea).toHaveAttribute('aria-invalid', 'true');
    await expect(textarea).toHaveAccessibleDescription('Tell us why you are cancelling.');
  }
}`,...h.parameters?.docs?.source},description:{story:"The invalid treatment comes purely from `aria-invalid`; point\n`aria-describedby` at the message so it is read with the control.\n\n@summary Invalid state driven by aria-invalid",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Cannot be edited'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toBeDisabled();
    await userEvent.type(textarea, 'nope');
    await expect(textarea).toHaveValue('Cannot be edited');
  }
}`,...g.parameters?.docs?.source},description:{story:`@summary Disabled state`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'Copy me, but do not change me'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toHaveAttribute('readonly');
    await expect(textarea).not.toBeDisabled();
  }
}`,..._.parameters?.docs?.source},description:{story:`@summary Read-only value that stays focusable and copyable`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 140
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    await expect(textarea).toHaveAccessibleDescription('0 of 140 characters');
    await expect(counter).toHaveTextContent('0/140');
    await userEvent.type(textarea, 'Roof replaced in 2024.');
    await expect(counter).toHaveTextContent('22/140');
    await expect(textarea).toHaveAccessibleDescription('22 of 140 characters');
    const box = textarea.getBoundingClientRect();
    const count = counter.getBoundingClientRect();
    await expect(box.right - count.right).toBe(16);
    await expect(box.bottom - count.bottom).toBe(8);
    await expect(getComputedStyle(textarea).paddingBottom).toBe('28px');
  }
}`,...v.parameters?.docs?.source},description:{story:`\`maxLength\` caps the value and shows the count inside the box, bottom
right. The count is part of the control's description, so a screen reader
hears "0 of 140 characters" with the field instead of on every keystroke.

@summary Character count inside the box, driven by maxLength`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 10,
    value: 'Twelve chars',
    onChange: () => {},
    'aria-invalid': true
  },
  play: async ({
    canvasElement
  }) => {
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    await expect(counter).toHaveTextContent('12/10');
    await expect(counter).toHaveAttribute('data-over');
  }
}`,...y.parameters?.docs?.source},description:{story:`A controlled value counts too, and one longer than \`maxLength\` — set by
code, since typing stops at the cap — turns the count destructive.

@summary Controlled count, destructive past the limit`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ResetForm />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    await expect(counter).toHaveTextContent('5/100');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await expect(counter).toHaveTextContent('3/100');
  }
}`,...x.parameters?.docs?.source},description:{story:`A form that rewrites an uncontrolled value, as a react-hook-form \`reset\`
does, fires no input event; the count reads the \`<textarea>\` again when the
form re-renders.

@summary Uncontrolled count follows a value rewritten by the form`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col items-start gap-2">
            <TextArea aria-label="Notes" maxLength={100} defaultValue="hello" />
            <button type="reset">Reset</button>
        </form>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    await userEvent.type(canvas.getByRole('textbox', {
      name: 'Notes'
    }), ' there');
    await expect(counter).toHaveTextContent('11/100');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(counter).toHaveTextContent('5/100'));
  }
}`,...S.parameters?.docs?.source},description:{story:`A native form reset restores the default value without an input event; the
count listens to the form's \`reset\` and follows.

@summary Uncontrolled count follows a native form reset`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 items-start gap-4">
            <TextArea aria-label="Notes" className="w-auto flex-1" />
            <button type="button">Clear</button>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    const button = canvas.getByRole('button', {
      name: 'Clear'
    });
    await expect(getComputedStyle(textarea.parentElement!).display).toBe('contents');
    await expect(textarea.getBoundingClientRect().right + 16).toBeCloseTo(button.getBoundingClientRect().left, 0);
  }
}`,...C.parameters?.docs?.source},description:{story:"Without a count the wrapper is `display: contents`, so the `<textarea>`\nlays out as a direct child of its container: a width or a flex item class\nin `className` works as on a bare `<textarea>`.\n\n@summary Without maxLength the wrapper leaves layout to the textarea",...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleLimit />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await userEvent.type(textarea, 'Draft');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Toggle limit'
    }));
    await expect(canvas.getByRole('textbox', {
      name: 'Notes'
    })).toBe(textarea);
    await expect(textarea).toHaveValue('Draft');
    await expect(canvasElement.querySelector('[data-slot=textarea-counter]')).toHaveTextContent('5/100');
  }
}`,...T.parameters?.docs?.source},description:{story:"The `<textarea>` keeps its place in the tree whether or not there is a\ncount, so adding or removing `maxLength` keeps what the user typed.\n\n@summary Adding a limit keeps the same control and its text",...T.parameters?.docs?.description}}},E=[`Default`,`AllSizes`,`Rows`,`Invalid`,`Disabled`,`ReadOnly`,`WithCounter`,`CounterOverLimit`,`CounterAfterReset`,`CounterAfterNativeReset`,`LayoutWithoutCounter`,`ToggleMaxLength`]})))()}D();export{p as AllSizes,S as CounterAfterNativeReset,x as CounterAfterReset,y as CounterOverLimit,f as Default,g as Disabled,h as Invalid,C as LayoutWithoutCounter,_ as ReadOnly,m as Rows,T as ToggleMaxLength,v as WithCounter,E as __namedExportsOrder,d as default};