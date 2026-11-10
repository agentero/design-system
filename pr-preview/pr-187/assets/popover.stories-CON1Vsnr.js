import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CVdKXyXU.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-Dk4cRmVF.js";import{n as a,t as o}from"./modal-9UkHXsNl.js";import{n as s,t as c}from"./popover-Dg31YToq.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{l=t(),s(),r(),a(),u=n(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Popover`,component:c.Root,tags:[`autodocs`],decorators:[e=>(0,u.jsx)(`div`,{className:`flex min-h-60 items-center justify-center p-10`,children:(0,u.jsx)(e,{})})],parameters:{docs:{description:{component:"Popover is a non-modal floating surface anchored to a trigger, used for\nrich interactive overlays such as forms, filters, and pickers. Compose it\nfrom `Root` / `Trigger` / `Content`, plus optional `Anchor` and `Close`.\nBuilt on Radix UI's Popover primitive, so focus management, dismissal, and\ncollision detection come for free."}}}},g={render:()=>(0,u.jsxs)(c.Root,{children:[(0,u.jsx)(c.Trigger,{asChild:!0,children:(0,u.jsx)(i,{variant:`secondary`,children:`Open popover`})}),(0,u.jsx)(c.Content,{children:(0,u.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`This carrier is appointed for 3 lines of business.`})})]}),play:async({canvasElement:e})=>{let t=m(e),n=m(document.body),r=t.getByRole(`button`,{name:/open popover/i});await d(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument(),await f.click(r);let i=await n.findByText(/3 lines of business/i);await d(i).toBeInTheDocument(),await d(i.closest(`[data-slot="popover-content"]`)).toHaveAttribute(`data-state`,`open`),await f.keyboard(`{Escape}`),await p(()=>d(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument())}},_={render:()=>(0,u.jsx)(`div`,{className:`flex gap-4`,children:(0,u.jsxs)(c.Root,{children:[(0,u.jsx)(c.Trigger,{asChild:!0,children:(0,u.jsx)(i,{variant:`secondary`,children:`Carrier details`})}),(0,u.jsx)(c.Content,{children:(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,u.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Appointed in 12 states.`}),(0,u.jsx)(c.Close,{asChild:!0,children:(0,u.jsx)(i,{size:`xs`,variant:`tertiary`,children:`Done`})})]})})]})}),play:async({canvasElement:e})=>{let t=m(e),n=m(document.body),r=t.getByRole(`button`,{name:`Carrier details`});await f.click(r),await n.findByText(`Appointed in 12 states.`),await f.click(n.getByRole(`button`,{name:`Done`})),await p(()=>d(n.queryByText(`Appointed in 12 states.`)).not.toBeInTheDocument()),await d(r).toHaveFocus(),await d(r.matches(`:focus-visible`)).toBe(!1),await f.keyboard(`{Enter}`),await n.findByText(`Appointed in 12 states.`),await f.keyboard(`{Escape}`),await p(()=>d(n.queryByText(`Appointed in 12 states.`)).not.toBeInTheDocument()),await d(r).toHaveFocus(),await d(r.matches(`:focus-visible`)).toBe(!0)}},v={render:()=>{let[e,t]=(0,l.useState)(0);return(0,u.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,u.jsxs)(c.Root,{children:[(0,u.jsx)(c.Trigger,{asChild:!0,children:(0,u.jsx)(i,{variant:`secondary`,children:`Carrier details`})}),(0,u.jsx)(c.Content,{children:(0,u.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Appointed in 12 states.`})})]}),(0,u.jsx)(`input`,{"aria-label":`Agency name`,onBlur:()=>t(e=>e+1)}),(0,u.jsxs)(`span`,{children:[`Blurred `,e,` times`]})]})},play:async({canvasElement:e})=>{let t=m(e),n=m(document.body),r=t.getByRole(`textbox`,{name:`Agency name`});await f.click(t.getByRole(`button`,{name:`Carrier details`})),await n.findByText(`Appointed in 12 states.`),await f.click(r),await p(()=>d(n.queryByText(`Appointed in 12 states.`)).not.toBeInTheDocument()),await new Promise(e=>setTimeout(e,50)),await d(r).toHaveFocus(),await d(t.getByText(`Blurred 0 times`)).toBeInTheDocument()}},y={render:()=>(0,u.jsx)(`div`,{className:`grid grid-cols-2 gap-6`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,u.jsxs)(c.Root,{children:[(0,u.jsx)(c.Trigger,{asChild:!0,children:(0,u.jsx)(i,{variant:`secondary`,children:e})}),(0,u.jsx)(c.Content,{side:e,children:(0,u.jsxs)(`p`,{className:`text-sm text-text-default-base-primary`,children:[`Opens on `,e]})})]},e))})},b={render:()=>(0,u.jsxs)(c.Root,{children:[(0,u.jsx)(c.Trigger,{asChild:!0,children:(0,u.jsx)(i,{variant:`secondary`,children:`Rename`})}),(0,u.jsx)(c.Content,{align:`start`,children:(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-text-default-base-primary`,children:[`New name`,(0,u.jsx)(`input`,{type:`text`,defaultValue:`Untitled`,className:`rounded-md border border-border-default-base-primary px-2 py-1 text-sm`})]}),(0,u.jsx)(c.Close,{asChild:!0,children:(0,u.jsx)(i,{variant:`primary`,size:`sm`,children:`Save`})})]})})]}),play:async({canvasElement:e})=>{let t=m(e),n=m(document.body);await f.click(t.getByRole(`button`,{name:/rename/i}));let r=await n.findByRole(`textbox`);await d(r).toBeInTheDocument(),await f.click(n.getByRole(`button`,{name:/save/i})),await p(()=>d(n.queryByRole(`textbox`)).not.toBeInTheDocument())}},x={render:()=>(0,u.jsxs)(c.Root,{children:[(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,u.jsx)(c.Anchor,{className:`rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary`,children:`Anchored here`}),(0,u.jsx)(c.Trigger,{asChild:!0,children:(0,u.jsx)(i,{variant:`secondary`,children:`Toggle from below`})})]}),(0,u.jsx)(c.Content,{side:`top`,children:(0,u.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Positioned against the anchor`})})]})},S=e=>[...document.body.children].findIndex(t=>t.contains(e)),C=e=>getComputedStyle(document.body.children[S(e)]).zIndex,w={render:()=>(0,u.jsxs)(c.Root,{children:[(0,u.jsx)(c.Trigger,{asChild:!0,children:(0,u.jsx)(i,{variant:`secondary`,children:`Renewal 2026`})}),(0,u.jsx)(c.Content,{align:`start`,children:(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Applied to 12 contracts across 3 carriers.`}),(0,u.jsxs)(o.Root,{children:[(0,u.jsx)(o.Trigger,{asChild:!0,children:(0,u.jsx)(i,{variant:`secondary`,size:`sm`,children:`Delete tag`})}),(0,u.jsxs)(o.Content,{children:[(0,u.jsx)(o.Title,{children:`Delete this tag?`}),(0,u.jsx)(o.Description,{children:`It will be removed from the 12 contracts that carry it.`}),(0,u.jsxs)(o.Footer,{children:[(0,u.jsx)(o.Close,{asChild:!0,children:(0,u.jsx)(i,{variant:`ghost`,children:`Cancel`})}),(0,u.jsx)(i,{variant:`primary`,children:`Delete`})]})]})]})]})})]}),play:async({canvasElement:e})=>{let t=m(e),n=m(document.body);await f.click(t.getByRole(`button`,{name:`Renewal 2026`}));let r=await n.findByText(/12 contracts across 3 carriers/i);await f.click(n.getByRole(`button`,{name:`Delete tag`}));let i=await n.findByRole(`dialog`,{name:`Delete this tag?`});await p(()=>d(i).toBeVisible()),await d(r).toBeInTheDocument(),await d(C(i)).toBe(C(r)),await d(S(i)).toBeGreaterThan(S(r))}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Open popover</Button>
            </Popover.Trigger>
            <Popover.Content>
                <p className="text-sm text-text-default-base-primary">
                    This carrier is appointed for 3 lines of business.
                </p>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: /open popover/i
    });
    await expect(body.queryByText(/3 lines of business/i)).not.toBeInTheDocument();
    await userEvent.click(trigger);
    const content = await body.findByText(/3 lines of business/i);
    await expect(content).toBeInTheDocument();
    await expect(content.closest('[data-slot="popover-content"]')).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByText(/3 lines of business/i)).not.toBeInTheDocument());
  }
}`,...g.parameters?.docs?.source},description:{story:`A minimal Popover: a trigger button that reveals a short text surface on
click and dismisses on outside click or Escape.

@summary Basic click-to-open popover surface`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button variant="secondary">Carrier details</Button>
                </Popover.Trigger>
                <Popover.Content>
                    <div className="flex flex-col items-start gap-2">
                        <p className="text-sm text-text-default-base-primary">Appointed in 12 states.</p>
                        <Popover.Close asChild>
                            <Button size="xs" variant="tertiary">
                                Done
                            </Button>
                        </Popover.Close>
                    </div>
                </Popover.Content>
            </Popover.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: 'Carrier details'
    });
    await userEvent.click(trigger);
    await body.findByText('Appointed in 12 states.');
    await userEvent.click(body.getByRole('button', {
      name: 'Done'
    }));
    await waitFor(() => expect(body.queryByText('Appointed in 12 states.')).not.toBeInTheDocument());
    await expect(trigger).toHaveFocus();
    await expect(trigger.matches(':focus-visible')).toBe(false);
    await userEvent.keyboard('{Enter}');
    await body.findByText('Appointed in 12 states.');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByText('Appointed in 12 states.')).not.toBeInTheDocument());
    await expect(trigger).toHaveFocus();
    await expect(trigger.matches(':focus-visible')).toBe(true);
  }
}`,..._.parameters?.docs?.source},description:{story:`Closing the popover from inside hands focus back to its trigger. After a
pointer close the trigger takes focus without a focus ring; after Escape the
ring shows, so a keyboard user can see where focus went.

@summary Focus returns to the trigger, with a ring only after a keyboard close`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [blurCount, setBlurCount] = useState(0);
    return <div className="flex items-center gap-4">
                <Popover.Root>
                    <Popover.Trigger asChild>
                        <Button variant="secondary">Carrier details</Button>
                    </Popover.Trigger>
                    <Popover.Content>
                        <p className="text-sm text-text-default-base-primary">Appointed in 12 states.</p>
                    </Popover.Content>
                </Popover.Root>
                <input aria-label="Agency name" onBlur={() => setBlurCount(count => count + 1)} />
                <span>Blurred {blurCount} times</span>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const field = canvas.getByRole('textbox', {
      name: 'Agency name'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Carrier details'
    }));
    await body.findByText('Appointed in 12 states.');
    await userEvent.click(field);
    await waitFor(() => expect(body.queryByText('Appointed in 12 states.')).not.toBeInTheDocument());
    await new Promise(resolve => setTimeout(resolve, 50));
    await expect(field).toHaveFocus();
    await expect(canvas.getByText('Blurred 0 times')).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source},description:{story:`Clicking a field outside closes the popover and leaves focus in that field:
Radix does not move focus back to the trigger, and the field gets no extra
blur.

@summary Clicking a field outside keeps focus in that field`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6">
            {(['top', 'right', 'bottom', 'left'] as const).map(side => <Popover.Root key={side}>
                    <Popover.Trigger asChild>
                        <Button variant="secondary">{side}</Button>
                    </Popover.Trigger>
                    <Popover.Content side={side}>
                        <p className="text-sm text-text-default-base-primary">Opens on {side}</p>
                    </Popover.Content>
                </Popover.Root>)}
        </div>
}`,...y.parameters?.docs?.source},description:{story:`\`side\` sets the preferred placement; Radix flips it on viewport collision.

@summary Popover placement on each of the four sides`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Rename</Button>
            </Popover.Trigger>
            <Popover.Content align="start">
                <div className="flex flex-col gap-3">
                    <label className="flex flex-col gap-1 text-sm text-text-default-base-primary">
                        New name
                        <input type="text" defaultValue="Untitled" className="rounded-md border border-border-default-base-primary px-2 py-1 text-sm" />
                    </label>
                    <Popover.Close asChild>
                        <Button variant="primary" size="sm">
                            Save
                        </Button>
                    </Popover.Close>
                </div>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /rename/i
    }));
    const input = await body.findByRole('textbox');
    await expect(input).toBeInTheDocument();
    await userEvent.click(body.getByRole('button', {
      name: /save/i
    }));
    await waitFor(() => expect(body.queryByRole('textbox')).not.toBeInTheDocument());
  }
}`,...b.parameters?.docs?.source},description:{story:"Rich interactive content — the primary reason to reach for a Popover over a\nTooltip. A `Close` inside the surface dismisses it after submitting.\n\n@summary Popover holding an interactive form with a `Close` action",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <div className="flex flex-col items-center gap-4">
                <Popover.Anchor className="rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary">
                    Anchored here
                </Popover.Anchor>
                <Popover.Trigger asChild>
                    <Button variant="secondary">Toggle from below</Button>
                </Popover.Trigger>
            </div>
            <Popover.Content side="top">
                <p className="text-sm text-text-default-base-primary">Positioned against the anchor</p>
            </Popover.Content>
        </Popover.Root>
}`,...x.parameters?.docs?.source},description:{story:"`Anchor` positions the Content against an element other than the Trigger —\nuseful when the visual anchor differs from the toggle button.\n\n@summary Popover positioned against a separate `Anchor` element",...x.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Renewal 2026</Button>
            </Popover.Trigger>
            <Popover.Content align="start">
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-text-default-base-primary">
                        Applied to 12 contracts across 3 carriers.
                    </p>
                    <Modal.Root>
                        <Modal.Trigger asChild>
                            <Button variant="secondary" size="sm">
                                Delete tag
                            </Button>
                        </Modal.Trigger>
                        <Modal.Content>
                            <Modal.Title>Delete this tag?</Modal.Title>
                            <Modal.Description>
                                It will be removed from the 12 contracts that carry it.
                            </Modal.Description>
                            <Modal.Footer>
                                <Modal.Close asChild>
                                    <Button variant="ghost">Cancel</Button>
                                </Modal.Close>
                                <Button variant="primary">Delete</Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Root>
                </div>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Renewal 2026'
    }));
    const popover = await body.findByText(/12 contracts across 3 carriers/i);
    await userEvent.click(body.getByRole('button', {
      name: 'Delete tag'
    }));
    const dialog = await body.findByRole('dialog', {
      name: 'Delete this tag?'
    });
    await waitFor(() => expect(dialog).toBeVisible());

    // The popover is still there — the modal covers it rather than replacing it.
    await expect(popover).toBeInTheDocument();
    await expect(zIndexOf(dialog)).toBe(zIndexOf(popover));
    await expect(layerOf(dialog)).toBeGreaterThan(layerOf(popover));
  }
}`,...w.parameters?.docs?.source},description:{story:`A Modal opened from a button inside the Popover. Both share
\`--z-index-top-layer\`, so the modal opens last and paints over the popover
while the overlay dims it. The popover stays mounted underneath, which keeps
focus returning to its trigger once the modal closes.

@summary Modal opened from inside a Popover paints above it`,...w.parameters?.docs?.description}}},T=[`Default`,`FocusReturn`,`CloseIntoField`,`Sides`,`WithForm`,`WithAnchor`,`ModalFromInsidePopover`]})))()}E();export{v as CloseIntoField,g as Default,_ as FocusReturn,w as ModalFromInsidePopover,y as Sides,x as WithAnchor,b as WithForm,T as __namedExportsOrder,h as default};