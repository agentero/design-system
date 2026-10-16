import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CpjI8XnV.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BpGBntB-.js";import{n as a,t as o}from"./label-DU9X2aja.js";import{n as s,t as c}from"./textarea-CyVVsukO.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{l=t(),r(),a(),s(),u=n(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h=e=>{let t=e.parentElement.querySelector(`[data-slot=textarea-overflow]`),n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return{layer:t,sameOrigin:r.top===n.top+e.clientTop&&r.left===n.left+e.clientLeft&&r.width===e.clientWidth&&r.height===e.clientHeight}},g={title:`Components/TextArea`,component:c,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},rows:{control:`number`},placeholder:{control:`text`},maxLength:{control:`number`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{placeholder:`Anything the underwriter should know`,"aria-label":`Notes`},decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,u.jsx)(e,{})})],parameters:{docs:{description:{component:"TextArea is the base multi-line text control, with Input's skin, sizes and\nstates. It wires nothing on its own: `id`, `aria-invalid` and\n`aria-describedby` are plain props, set by whoever owns the field."}}}},_={play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Notes`});await d(t).toHaveAttribute(`data-slot`,`textarea`),await d(getComputedStyle(t).resize).toBe(`vertical`),await f.type(t,`Roof replaced in 2024.{enter}No prior claims.`),await d(t).toHaveValue(`Roof replaced in 2024.
No prior claims.`)}},v={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,u.jsx)(c,{...e,size:`sm`,"aria-label":`Small`,placeholder:`sm — 76px, three rows`}),(0,u.jsx)(c,{...e,size:`md`,"aria-label":`Medium`,placeholder:`md — 84px, three rows`}),(0,u.jsx)(c,{...e,size:`lg`,"aria-label":`Large`,placeholder:`lg — 96px, three rows`})]}),play:async({canvasElement:e})=>{let t=m(e),n=e=>t.getByRole(`textbox`,{name:e}).getBoundingClientRect().height;await d(n(`Small`)).toBe(76),await d(n(`Medium`)).toBe(84),await d(n(`Large`)).toBe(96),await d(t.getByRole(`textbox`,{name:`Large`})).toHaveAttribute(`data-size`,`lg`)}},y={args:{rows:6,placeholder:`Six rows visible before scrolling`},play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Notes`});await d(t).toHaveAttribute(`rows`,`6`),await d(t.getBoundingClientRect().height).toBeGreaterThan(84)}},b={args:{"aria-label":`Reason`,"aria-invalid":!0,"aria-describedby":`reason-error`,defaultValue:`n/a`},render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`0.25rem`},children:[(0,u.jsx)(c,{...e}),(0,u.jsx)(`span`,{id:`reason-error`,className:`text-sm text-text-input-destructive`,children:`Tell us why you are cancelling.`})]}),play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Reason`});await d(t).toHaveAttribute(`aria-invalid`,`true`),await d(t).toHaveAccessibleDescription(`Tell us why you are cancelling.`)}},x={args:{disabled:!0,defaultValue:`Cannot be edited`},play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Notes`});await d(t).toBeDisabled(),await f.type(t,`nope`),await d(t).toHaveValue(`Cannot be edited`)}},S={args:{readOnly:!0,defaultValue:`Copy me, but do not change me`},play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Notes`});await d(t).toHaveAttribute(`readonly`),await d(t).not.toBeDisabled()}},C={args:{maxLength:140},play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Notes`}),n=e.querySelector(`[data-slot=textarea-counter]`);await d(t).toHaveAccessibleDescription(`0 of 140 characters`),await d(n).toHaveTextContent(`0/140`),await f.type(t,`Roof replaced in 2024.`),await d(n).toHaveTextContent(`22/140`),await d(t).toHaveAccessibleDescription(`22 of 140 characters`);let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();await d(i.top-r.bottom).toBe(8),await d(Math.round(i.right)).toBe(Math.round(r.right))}},w={args:{maxLength:10},play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Notes`}),n=e.querySelector(`[data-slot=textarea-counter]`),r=getComputedStyle(n).color;await f.type(t,`Twelve chars`),await d(t).toHaveValue(`Twelve chars`),await d(t).not.toHaveAttribute(`maxlength`),await d(n).toHaveTextContent(`12/10`),await d(n).toHaveAttribute(`data-over`),await d(getComputedStyle(n).color).not.toBe(r),await d(t).toHaveAccessibleDescription(`2 characters over the limit of 10`);let i=e.querySelector(`[data-slot=textarea-overflow]`).querySelector(`[data-over]`);await d(i).toHaveTextContent(`rs`),await d(getComputedStyle(i).color).toBe(getComputedStyle(n).color),await d(h(t).sameOrigin).toBe(!0),await d(getComputedStyle(t).color).toBe(`rgba(0, 0, 0, 0)`),await d(getComputedStyle(t).caretColor).not.toBe(`rgba(0, 0, 0, 0)`),await f.keyboard(`{Backspace}{Backspace}`),await d(e.querySelector(`[data-slot=textarea-overflow]`)).toBeNull(),await d(n).not.toHaveAttribute(`data-over`),await d(getComputedStyle(t).color).not.toBe(`rgba(0, 0, 0, 0)`)}},T={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,u.jsxs)(o,{className:`flex-col items-stretch font-normal`,children:[`Notes`,(0,u.jsx)(c,{maxLength:100,defaultValue:`hello`})]}),play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Notes`});await d(t).toHaveAccessibleDescription(`5 of 100 characters`)}},E={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,u.jsx)(c,{"aria-label":`Margin`,className:`mt-4`,maxLength:5,defaultValue:`Twelve chars`}),(0,u.jsx)(c,{"aria-label":`Content box`,className:`box-content`,maxLength:5,defaultValue:`Twelve chars`}),(0,u.jsx)(c,{"aria-label":`Right to left`,dir:`rtl`,maxLength:5,defaultValue:`שלום עולם טוב`}),(0,u.jsx)(c,{"aria-label":`Unwrapped`,wrap:`off`,maxLength:5,defaultValue:[,,,,,,].fill(`A long line that does not wrap `.repeat(6)).join(`
`)}),(0,u.jsx)(c,{"aria-label":`Emoji`,maxLength:3,defaultValue:`ab😀cd`})]}),play:async({canvasElement:e})=>{let t=m(e),n=e=>t.getByRole(`textbox`,{name:e});await d(h(n(`Margin`)).sameOrigin).toBe(!0),await d(h(n(`Content box`)).sameOrigin).toBe(!0),await d(getComputedStyle(h(n(`Margin`)).layer).visibility).toBe(`visible`);let r=h(n(`Right to left`));await d(getComputedStyle(r.layer).direction).toBe(`rtl`);let i=n(`Unwrapped`);await d(h(i).sameOrigin).toBe(!0),i.scrollLeft=120,i.scrollTop=i.scrollHeight,i.dispatchEvent(new Event(`scroll`)),await p(()=>{let{layer:e}=h(i);d(e.scrollLeft).toBe(i.scrollLeft),d(e.scrollTop).toBe(i.scrollTop)});let a=h(n(`Emoji`)).layer;await d(a.querySelector(`[data-over]`).textContent).toBe(`😀cd`)}},D=()=>{let[e,t]=(0,l.useState)(`Twelve`);return(0,u.jsx)(c,{"aria-label":`Notes`,maxLength:10,value:e,onChange:e=>t(e.target.value)})},O={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,u.jsx)(D,{}),play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Notes`}),n=e.querySelector(`[data-slot=textarea-counter]`);await d(n).toHaveTextContent(`6/10`),await f.type(t,` chars!`),await d(n).toHaveTextContent(`13/10`),await d(e.querySelector(`[data-slot=textarea-overflow] [data-over]`).textContent).toBe(`rs!`),await f.keyboard(`{Backspace}{Backspace}{Backspace}`),await d(n).toHaveTextContent(`10/10`),await d(e.querySelector(`[data-slot=textarea-overflow]`)).toBeNull()}},k=()=>{let e=(0,l.useRef)(null),[,t]=(0,l.useState)(0);return(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,u.jsx)(c,{ref:e,"aria-label":`Notes`,maxLength:100,defaultValue:`hello`}),(0,u.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>{e.current.value=`bye`,t(e=>e+1)},children:`Reset`})]})},A={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,u.jsx)(k,{}),(0,u.jsxs)(`form`,{className:`flex flex-col items-start gap-2`,children:[(0,u.jsx)(c,{"aria-label":`Native`,maxLength:100,defaultValue:`hello`}),(0,u.jsx)(i,{type:`reset`,variant:`secondary`,size:`sm`,children:`Native reset`})]})]}),play:async({canvasElement:e})=>{let t=m(e),[n,r]=e.querySelectorAll(`[data-slot=textarea-counter]`);await d(n).toHaveTextContent(`5/100`),await f.click(t.getByRole(`button`,{name:`Reset`})),await d(n).toHaveTextContent(`3/100`),await f.type(t.getByRole(`textbox`,{name:`Native`}),` there`),await d(r).toHaveTextContent(`11/100`),await f.click(t.getByRole(`button`,{name:`Native reset`})),await p(()=>d(r).toHaveTextContent(`5/100`))}},j={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,u.jsxs)(`div`,{className:`flex w-96 items-start gap-4`,children:[(0,u.jsx)(c,{"aria-label":`Notes`,className:`w-auto flex-1`}),(0,u.jsx)(i,{variant:`secondary`,size:`sm`,children:`Clear`})]}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`textbox`,{name:`Notes`}),r=t.getByRole(`button`,{name:`Clear`});await d(getComputedStyle(n.parentElement).display).toBe(`contents`),await d(n.getBoundingClientRect().right+16).toBeCloseTo(r.getBoundingClientRect().left,0)}},M=()=>{let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,u.jsx)(c,{"aria-label":`Notes`,maxLength:e?100:void 0}),(0,u.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>t(e=>!e),children:`Toggle limit`})]})},N={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,u.jsx)(M,{}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`textbox`,{name:`Notes`});await f.type(n,`Draft`),await f.click(t.getByRole(`button`,{name:`Toggle limit`})),await d(t.getByRole(`textbox`,{name:`Notes`})).toBe(n),await d(n).toHaveValue(`Draft`),await d(e.querySelector(`[data-slot=textarea-counter]`)).toHaveTextContent(`5/100`)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`The default control at \`md\`: three rows at rest and a vertical resize handle
the user can drag to make it taller.

@summary Default standalone text area`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`The three sizes mirror Input's: the first row measures one Input of the same
size and the minimum height shows three rows.

@summary The three sizes, three rows tall at rest`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`\`rows\` sets a taller initial height when three rows are not enough.

@summary Taller initial height through the native rows attribute`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"The invalid treatment comes purely from `aria-invalid`; point\n`aria-describedby` at the message so it is read with the control.\n\n@summary Invalid state driven by aria-invalid",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`@summary Disabled state`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`@summary Read-only value that stays focusable and copyable`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    await expect(count.top - box.bottom).toBe(8);
    await expect(Math.round(count.right)).toBe(Math.round(box.right));
  }
}`,...C.parameters?.docs?.source},description:{story:`\`maxLength\` shows the count under the box, right-aligned, 8px below it. The
count is part of the control's description, so a screen reader hears
"0 of 140 characters" with the field instead of on every keystroke.

@summary Character count under the box, driven by maxLength`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 10
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    const muted = getComputedStyle(counter).color;
    await userEvent.type(textarea, 'Twelve chars');
    await expect(textarea).toHaveValue('Twelve chars');
    await expect(textarea).not.toHaveAttribute('maxlength');
    await expect(counter).toHaveTextContent('12/10');
    await expect(counter).toHaveAttribute('data-over');
    await expect(getComputedStyle(counter).color).not.toBe(muted);
    await expect(textarea).toHaveAccessibleDescription('2 characters over the limit of 10');

    // The characters past the limit read destructive inside the box.
    const layer = canvasElement.querySelector('[data-slot=textarea-overflow]')!;
    const overText = layer.querySelector('[data-over]')!;
    await expect(overText).toHaveTextContent('rs');
    await expect(getComputedStyle(overText).color).toBe(getComputedStyle(counter).color);
    await expect(layerMatches(textarea).sameOrigin).toBe(true);

    // The layer paints the text, so the textarea's own text never shows through.
    await expect(getComputedStyle(textarea).color).toBe('rgba(0, 0, 0, 0)');
    await expect(getComputedStyle(textarea).caretColor).not.toBe('rgba(0, 0, 0, 0)');
    await userEvent.keyboard('{Backspace}{Backspace}');
    await expect(canvasElement.querySelector('[data-slot=textarea-overflow]')).toBeNull();
    await expect(counter).not.toHaveAttribute('data-over');
    await expect(getComputedStyle(textarea).color).not.toBe('rgba(0, 0, 0, 0)');
  }
}`,...w.parameters?.docs?.source},description:{story:`The limit is soft: typing goes past it, the characters over the limit and
the count turn destructive, and the description says by how much, so the
form's validation can reject it.

@summary Typing past the limit turns the count destructive`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: an edge case, not a state consumers need to see.
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Label className="flex-col items-stretch font-normal">
            Notes
            <TextArea maxLength={100} defaultValue="hello" />
        </Label>,
  play: async ({
    canvasElement
  }) => {
    const textarea = within(canvasElement).getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textarea).toHaveAccessibleDescription('5 of 100 characters');
  }
}`,...T.parameters?.docs?.source},description:{story:`The count never joins the name of a \`<label>\` wrapped around the control.

@summary Count kept out of a wrapping label's name`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: an edge case, not a state consumers need to see.
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <div className="flex flex-col gap-4">
            <TextArea aria-label="Margin" className="mt-4" maxLength={5} defaultValue="Twelve chars" />
            <TextArea aria-label="Content box" className="box-content" maxLength={5} defaultValue="Twelve chars" />
            <TextArea aria-label="Right to left" dir="rtl" maxLength={5} defaultValue="שלום עולם טוב" />
            <TextArea aria-label="Unwrapped" wrap="off" maxLength={5} defaultValue={Array(6).fill('A long line that does not wrap '.repeat(6)).join('\\n')} />
            <TextArea aria-label="Emoji" maxLength={3} defaultValue="ab😀cd" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = (name: string) => canvas.getByRole('textbox', {
      name
    }) as HTMLTextAreaElement;
    await expect(layerMatches(textbox('Margin')).sameOrigin).toBe(true);
    await expect(layerMatches(textbox('Content box')).sameOrigin).toBe(true);
    await expect(getComputedStyle(layerMatches(textbox('Margin')).layer).visibility).toBe('visible');
    const rtl = layerMatches(textbox('Right to left'));
    await expect(getComputedStyle(rtl.layer).direction).toBe('rtl');
    const unwrapped = textbox('Unwrapped');
    await expect(layerMatches(unwrapped).sameOrigin).toBe(true);
    unwrapped.scrollLeft = 120;
    unwrapped.scrollTop = unwrapped.scrollHeight;
    unwrapped.dispatchEvent(new Event('scroll'));
    await waitFor(() => {
      const {
        layer
      } = layerMatches(unwrapped);
      expect(layer.scrollLeft).toBe(unwrapped.scrollLeft);
      expect(layer.scrollTop).toBe(unwrapped.scrollTop);
    });
    const emoji = layerMatches(textbox('Emoji')).layer;
    await expect(emoji.querySelector('[data-over]')!.textContent).toBe('😀cd');
  }
}`,...E.parameters?.docs?.source},description:{story:`The red layer follows the textarea it covers whatever styles it: a margin
or \`box-content\` from \`className\`, right-to-left text, a long unwrapped line scrolled
sideways, and an emoji right on the limit, which is never cut in two.

@summary Over-limit highlight follows margins, direction, sideways scroll and emoji`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: covers the controlled path of the count.
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <ControlledCounter />,
  play: async ({
    canvasElement
  }) => {
    const textarea = within(canvasElement).getByRole('textbox', {
      name: 'Notes'
    });
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    await expect(counter).toHaveTextContent('6/10');
    await userEvent.type(textarea, ' chars!');
    await expect(counter).toHaveTextContent('13/10');
    await expect(canvasElement.querySelector('[data-slot=textarea-overflow] [data-over]')!.textContent).toBe('rs!');
    await userEvent.keyboard('{Backspace}{Backspace}{Backspace}');
    await expect(counter).toHaveTextContent('10/10');
    await expect(canvasElement.querySelector('[data-slot=textarea-overflow]')).toBeNull();
  }
}`,...O.parameters?.docs?.source},description:{story:`A controlled value drives the count and the highlight too, past the limit
and back under it.

@summary Controlled count and highlight past the limit`,...O.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: it covers how the count is read, not a visual state.
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <div className="flex flex-col gap-6">
            <ResetForm />
            <form className="flex flex-col items-start gap-2">
                <TextArea aria-label="Native" maxLength={100} defaultValue="hello" />
                <Button type="reset" variant="secondary" size="sm">
                    Native reset
                </Button>
            </form>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [rerendered, native] = canvasElement.querySelectorAll('[data-slot=textarea-counter]');
    await expect(rerendered).toHaveTextContent('5/100');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await expect(rerendered).toHaveTextContent('3/100');
    await userEvent.type(canvas.getByRole('textbox', {
      name: 'Native'
    }), ' there');
    await expect(native).toHaveTextContent('11/100');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Native reset'
    }));
    await waitFor(() => expect(native).toHaveTextContent('5/100'));
  }
}`,...A.parameters?.docs?.source},description:{story:`The uncontrolled count follows a value the form rewrites without an input
event: a re-render after a react-hook-form-style reset, and a native reset.

@summary Uncontrolled count follows form resets`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: an edge case, not a state consumers need to see.
  tags: ['!dev', '!autodocs', '!manifest'],
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
}`,...j.parameters?.docs?.source},description:{story:"Without a count the wrapper is `display: contents`, so the `<textarea>`\nlays out as a direct child of its container: a width or a flex item class\nin `className` works as on a bare `<textarea>`.\n\n@summary Without maxLength the wrapper leaves layout to the textarea",...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: an edge case, not a state consumers need to see.
  tags: ['!dev', '!autodocs', '!manifest'],
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
}`,...N.parameters?.docs?.source},description:{story:"The `<textarea>` keeps its place in the tree whether or not there is a\ncount, so adding or removing `maxLength` keeps what the user typed.\n\n@summary Adding a limit keeps the same control and its text",...N.parameters?.docs?.description}}},P=[`Default`,`AllSizes`,`Rows`,`Invalid`,`Disabled`,`ReadOnly`,`WithCounter`,`CounterOverLimit`,`CounterInLabel`,`OverflowFollowsTextarea`,`CounterControlled`,`CounterFollowsResets`,`LayoutWithoutCounter`,`ToggleMaxLength`]})))()}F();export{v as AllSizes,O as CounterControlled,A as CounterFollowsResets,T as CounterInLabel,w as CounterOverLimit,_ as Default,x as Disabled,b as Invalid,j as LayoutWithoutCounter,E as OverflowFollowsTextarea,S as ReadOnly,y as Rows,N as ToggleMaxLength,C as WithCounter,P as __namedExportsOrder,g as default};