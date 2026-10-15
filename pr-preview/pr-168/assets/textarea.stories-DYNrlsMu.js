import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BVE3nXuj.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CmTTiaHs.js";import{n as a,t as o}from"./input-group-CWBq5u89.js";import{n as s,t as c}from"./label-BzwAhupn.js";import{n as l,t as u}from"./textarea-CmpZj7qc.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{d=t(),r(),a(),s(),l(),f=n(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/TextArea`,component:u,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},rows:{control:`number`},placeholder:{control:`text`},maxLength:{control:`number`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{placeholder:`Anything the underwriter should know`,"aria-label":`Notes`},decorators:[e=>(0,f.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,f.jsx)(e,{})})],parameters:{docs:{description:{component:"TextArea is the base multi-line text control, with Input's skin, sizes and\nstates. It wires nothing on its own: `id`, `aria-invalid` and\n`aria-describedby` are plain props, set by whoever owns the field."}}}},v={play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Notes`});await p(t).toHaveAttribute(`data-slot`,`textarea`),await p(getComputedStyle(t).resize).toBe(`vertical`),await m.type(t,`Roof replaced in 2024.{enter}No prior claims.`),await p(t).toHaveValue(`Roof replaced in 2024.
No prior claims.`)}},y={render:e=>(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,f.jsx)(u,{...e,size:`sm`,"aria-label":`Small`,placeholder:`sm — 76px, three rows`}),(0,f.jsx)(u,{...e,size:`md`,"aria-label":`Medium`,placeholder:`md — 84px, three rows`}),(0,f.jsx)(u,{...e,size:`lg`,"aria-label":`Large`,placeholder:`lg — 96px, three rows`})]}),play:async({canvasElement:e})=>{let t=g(e),n=e=>t.getByRole(`textbox`,{name:e}).getBoundingClientRect().height;await p(n(`Small`)).toBe(76),await p(n(`Medium`)).toBe(84),await p(n(`Large`)).toBe(96),await p(t.getByRole(`textbox`,{name:`Large`})).toHaveAttribute(`data-size`,`lg`)}},b={args:{rows:6,placeholder:`Six rows visible before scrolling`},play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Notes`});await p(t).toHaveAttribute(`rows`,`6`),await p(t.getBoundingClientRect().height).toBeGreaterThan(84)}},x={args:{"aria-label":`Reason`,"aria-invalid":!0,"aria-describedby":`reason-error`,defaultValue:`n/a`},render:e=>(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`0.25rem`},children:[(0,f.jsx)(u,{...e}),(0,f.jsx)(`span`,{id:`reason-error`,className:`text-sm text-text-input-destructive`,children:`Tell us why you are cancelling.`})]}),play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Reason`});await p(t).toHaveAttribute(`aria-invalid`,`true`),await p(t).toHaveAccessibleDescription(`Tell us why you are cancelling.`)}},S={args:{disabled:!0,defaultValue:`Cannot be edited`},play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Notes`});await p(t).toBeDisabled(),await m.type(t,`nope`),await p(t).toHaveValue(`Cannot be edited`)}},C={args:{readOnly:!0,defaultValue:`Copy me, but do not change me`},play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Notes`});await p(t).toHaveAttribute(`readonly`),await p(t).not.toBeDisabled()}},w={args:{maxLength:140},play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Notes`}),n=e.querySelector(`[data-slot=textarea-counter]`);await p(t).toHaveAccessibleDescription(`0 of 140 characters`),await p(n).toHaveTextContent(`0/140`),await m.type(t,`Roof replaced in 2024.`),await p(n).toHaveTextContent(`22/140`),await p(t).toHaveAccessibleDescription(`22 of 140 characters`);let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();await p(r.right-i.right).toBe(12),await p(r.bottom-i.bottom).toBe(8),await p(getComputedStyle(t).paddingBottom).toBe(`28px`)}},T={args:{maxLength:10,value:`Twelve chars`,onChange:()=>{},"aria-invalid":!0},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-slot=textarea-counter]`);await p(t).toHaveTextContent(`12/10`),await p(t).toHaveAttribute(`data-over`)}},E=()=>{let e=(0,d.useRef)(null),[,t]=(0,d.useState)(0);return(0,f.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,f.jsx)(u,{ref:e,"aria-label":`Notes`,maxLength:100,defaultValue:`hello`}),(0,f.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>{e.current.value=`bye`,t(e=>e+1)},children:`Reset`})]})},D={render:()=>(0,f.jsx)(E,{}),play:async({canvasElement:e})=>{let t=g(e),n=e.querySelector(`[data-slot=textarea-counter]`);await p(n).toHaveTextContent(`5/100`),await m.click(t.getByRole(`button`,{name:`Reset`})),await p(n).toHaveTextContent(`3/100`)}},O={render:()=>(0,f.jsxs)(`form`,{className:`flex flex-col items-start gap-2`,children:[(0,f.jsx)(u,{"aria-label":`Notes`,maxLength:100,defaultValue:`hello`}),(0,f.jsx)(i,{type:`reset`,variant:`secondary`,size:`sm`,children:`Reset`})]}),play:async({canvasElement:e})=>{let t=g(e),n=e.querySelector(`[data-slot=textarea-counter]`);await m.type(t.getByRole(`textbox`,{name:`Notes`}),` there`),await p(n).toHaveTextContent(`11/100`),await m.click(t.getByRole(`button`,{name:`Reset`})),await h(()=>p(n).toHaveTextContent(`5/100`))}},k={render:()=>(0,f.jsxs)(`div`,{className:`flex w-96 items-start gap-4`,children:[(0,f.jsx)(u,{"aria-label":`Notes`,className:`w-auto flex-1`}),(0,f.jsx)(i,{variant:`secondary`,size:`sm`,children:`Clear`})]}),play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`textbox`,{name:`Notes`}),r=t.getByRole(`button`,{name:`Clear`});await p(getComputedStyle(n.parentElement).display).toBe(`contents`),await p(n.getBoundingClientRect().right+16).toBeCloseTo(r.getBoundingClientRect().left,0)}},A=()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,f.jsx)(u,{"aria-label":`Notes`,maxLength:e?100:void 0}),(0,f.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>t(e=>!e),children:`Toggle limit`})]})},j={render:()=>(0,f.jsx)(A,{}),play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`textbox`,{name:`Notes`});await m.type(n,`Draft`),await m.click(t.getByRole(`button`,{name:`Toggle limit`})),await p(t.getByRole(`textbox`,{name:`Notes`})).toBe(n),await p(n).toHaveValue(`Draft`),await p(e.querySelector(`[data-slot=textarea-counter]`)).toHaveTextContent(`5/100`)}},M={render:()=>(0,f.jsxs)(c,{className:`flex-col items-start font-normal`,children:[`Notes`,(0,f.jsx)(u,{className:`w-64`,maxLength:100,defaultValue:`hello`})]}),play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Notes`}),n=e.querySelector(`[data-slot=textarea-counter]`),r=t.getBoundingClientRect(),i=n.getBoundingClientRect();await p(r.width).toBe(256),await p(r.right-i.right).toBe(12),await p(r.bottom-i.bottom).toBe(8),await p(t).toHaveAccessibleDescription(`5 of 100 characters`)}},N={render:()=>(0,f.jsx)(o.Root,{children:(0,f.jsx)(u,{"aria-label":`Notes`,maxLength:100,defaultValue:`hello`})}),play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Notes`});await p(getComputedStyle(t).paddingBottom).toBe(`28px`)}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`The default control at \`md\`: three rows at rest and a vertical resize handle
the user can drag to make it taller.

@summary Default standalone text area`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`The three sizes mirror Input's: the first row measures one Input of the same
size and the minimum height shows three rows.

@summary The three sizes, three rows tall at rest`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`\`rows\` sets a taller initial height when three rows are not enough.

@summary Taller initial height through the native rows attribute`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
            <span id="reason-error" className="text-sm text-text-input-destructive">
                Tell us why you are cancelling.
            </span>
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
}`,...x.parameters?.docs?.source},description:{story:"The invalid treatment comes purely from `aria-invalid`; point\n`aria-describedby` at the message so it is read with the control.\n\n@summary Invalid state driven by aria-invalid",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`@summary Disabled state`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`@summary Read-only value that stays focusable and copyable`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    await expect(box.right - count.right).toBe(12);
    await expect(box.bottom - count.bottom).toBe(8);
    await expect(getComputedStyle(textarea).paddingBottom).toBe('28px');
  }
}`,...w.parameters?.docs?.source},description:{story:`\`maxLength\` caps the value and shows the count inside the box, bottom
right. The count is part of the control's description, so a screen reader
hears "0 of 140 characters" with the field instead of on every keystroke.

@summary Character count inside the box, driven by maxLength`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`A controlled value counts too, and one longer than \`maxLength\` — set by
code, since typing stops at the cap — turns the count destructive.

@summary Controlled count, destructive past the limit`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`A form that rewrites an uncontrolled value, as a react-hook-form \`reset\`
does, fires no input event; the count reads the \`<textarea>\` again when the
form re-renders.

@summary Uncontrolled count follows a value rewritten by the form`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col items-start gap-2">
            <TextArea aria-label="Notes" maxLength={100} defaultValue="hello" />
            <Button type="reset" variant="secondary" size="sm">
                Reset
            </Button>
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
}`,...O.parameters?.docs?.source},description:{story:`A native form reset restores the default value without an input event; the
count listens to the form's \`reset\` and follows.

@summary Uncontrolled count follows a native form reset`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 items-start gap-4">
            <TextArea aria-label="Notes" className="w-auto flex-1" />
            <Button variant="secondary" size="sm">
                Clear
            </Button>
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
}`,...k.parameters?.docs?.source},description:{story:"Without a count the wrapper is `display: contents`, so the `<textarea>`\nlays out as a direct child of its container: a width or a flex item class\nin `className` works as on a bare `<textarea>`.\n\n@summary Without maxLength the wrapper leaves layout to the textarea",...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"The `<textarea>` keeps its place in the tree whether or not there is a\ncount, so adding or removing `maxLength` keeps what the user typed.\n\n@summary Adding a limit keeps the same control and its text",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Label className="flex-col items-start font-normal">
            Notes
            <TextArea className="w-64" maxLength={100} defaultValue="hello" />
        </Label>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    const box = textarea.getBoundingClientRect();
    const count = counter.getBoundingClientRect();
    await expect(box.width).toBe(256);
    await expect(box.right - count.right).toBe(12);
    await expect(box.bottom - count.bottom).toBe(8);
    await expect(textarea).toHaveAccessibleDescription('5 of 100 characters');
  }
}`,...M.parameters?.docs?.source},description:{story:"The count is anchored to the `<textarea>`, so a width set through\n`className` keeps it in the box's corner, and it never joins the name of a\n`<label>` wrapped around the control.\n\n@summary Count stays in the corner of a narrower box and out of the label's name",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup.Root>
            <TextArea aria-label="Notes" maxLength={100} defaultValue="hello" />
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const textarea = within(canvasElement).getByRole('textbox', {
      name: 'Notes'
    });
    await expect(getComputedStyle(textarea).paddingBottom).toBe('28px');
  }
}`,...N.parameters?.docs?.source},description:{story:`Inside an \`InputGroup\` the count keeps its room: the group strips the
textarea's own padding, but not the space reserved under the text.

@summary Count inside an InputGroup keeps the text clear of it`,...N.parameters?.docs?.description}}},P=[`Default`,`AllSizes`,`Rows`,`Invalid`,`Disabled`,`ReadOnly`,`WithCounter`,`CounterOverLimit`,`CounterAfterReset`,`CounterAfterNativeReset`,`LayoutWithoutCounter`,`ToggleMaxLength`,`CounterNarrowInLabel`,`CounterInInputGroup`]})))()}F();export{y as AllSizes,O as CounterAfterNativeReset,D as CounterAfterReset,N as CounterInInputGroup,M as CounterNarrowInLabel,T as CounterOverLimit,v as Default,S as Disabled,x as Invalid,k as LayoutWithoutCounter,C as ReadOnly,b as Rows,j as ToggleMaxLength,w as WithCounter,P as __namedExportsOrder,_ as default};