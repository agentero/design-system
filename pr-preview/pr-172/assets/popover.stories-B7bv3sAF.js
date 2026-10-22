import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-CSYuZkpF.js";import{n as i,t as a}from"./modal-8PDogRtx.js";import{n as o,t as s}from"./popover-B9IGfR-2.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{o(),n(),i(),c=t(),{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Popover`,component:s.Root,tags:[`autodocs`],decorators:[e=>(0,c.jsx)(`div`,{className:`flex min-h-60 items-center justify-center p-10`,children:(0,c.jsx)(e,{})})],parameters:{docs:{description:{component:"Popover is a non-modal floating surface anchored to a trigger, used for\nrich interactive overlays such as forms, filters, and pickers. Compose it\nfrom `Root` / `Trigger` / `Content`, plus optional `Anchor` and `Close`.\nBuilt on Radix UI's Popover primitive, so focus management, dismissal, and\ncollision detection come for free."}}}},m={render:()=>(0,c.jsxs)(s.Root,{children:[(0,c.jsx)(s.Trigger,{asChild:!0,children:(0,c.jsx)(r,{variant:`secondary`,children:`Open popover`})}),(0,c.jsx)(s.Content,{children:(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`This carrier is appointed for 3 lines of business.`})})]}),play:async({canvasElement:e})=>{let t=f(e),n=f(document.body),r=t.getByRole(`button`,{name:/open popover/i});await l(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument(),await u.click(r);let i=await n.findByText(/3 lines of business/i);await l(i).toBeInTheDocument(),await l(i.closest(`[data-slot="popover-content"]`)).toHaveAttribute(`data-state`,`open`),await u.keyboard(`{Escape}`),await d(()=>l(n.queryByText(/3 lines of business/i)).not.toBeInTheDocument())}},h={render:()=>(0,c.jsx)(`div`,{className:`grid grid-cols-2 gap-6`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,c.jsxs)(s.Root,{children:[(0,c.jsx)(s.Trigger,{asChild:!0,children:(0,c.jsx)(r,{variant:`secondary`,children:e})}),(0,c.jsx)(s.Content,{side:e,children:(0,c.jsxs)(`p`,{className:`text-sm text-text-default-base-primary`,children:[`Opens on `,e]})})]},e))})},g={render:()=>(0,c.jsxs)(s.Root,{children:[(0,c.jsx)(s.Trigger,{asChild:!0,children:(0,c.jsx)(r,{variant:`secondary`,children:`Rename`})}),(0,c.jsx)(s.Content,{align:`start`,children:(0,c.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,c.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-text-default-base-primary`,children:[`New name`,(0,c.jsx)(`input`,{type:`text`,defaultValue:`Untitled`,className:`rounded-md border border-border-default-base-primary px-2 py-1 text-sm`})]}),(0,c.jsx)(s.Close,{asChild:!0,children:(0,c.jsx)(r,{variant:`primary`,size:`sm`,children:`Save`})})]})})]}),play:async({canvasElement:e})=>{let t=f(e),n=f(document.body);await u.click(t.getByRole(`button`,{name:/rename/i}));let r=await n.findByRole(`textbox`);await l(r).toBeInTheDocument(),await u.click(n.getByRole(`button`,{name:/save/i})),await d(()=>l(n.queryByRole(`textbox`)).not.toBeInTheDocument())}},_={render:()=>(0,c.jsxs)(s.Root,{children:[(0,c.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,c.jsx)(s.Anchor,{className:`rounded-md border border-border-default-base-primary px-4 py-2 text-sm text-text-default-base-secondary`,children:`Anchored here`}),(0,c.jsx)(s.Trigger,{asChild:!0,children:(0,c.jsx)(r,{variant:`secondary`,children:`Toggle from below`})})]}),(0,c.jsx)(s.Content,{side:`top`,children:(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Positioned against the anchor`})})]})},v=e=>[...document.body.children].findIndex(t=>t.contains(e)),y=e=>getComputedStyle(document.body.children[v(e)]).zIndex,b={render:()=>(0,c.jsxs)(s.Root,{children:[(0,c.jsx)(s.Trigger,{asChild:!0,children:(0,c.jsx)(r,{variant:`secondary`,children:`Renewal 2026`})}),(0,c.jsx)(s.Content,{align:`start`,children:(0,c.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,c.jsx)(`p`,{className:`text-sm text-text-default-base-primary`,children:`Applied to 12 contracts across 3 carriers.`}),(0,c.jsxs)(a.Root,{children:[(0,c.jsx)(a.Trigger,{asChild:!0,children:(0,c.jsx)(r,{variant:`secondary`,size:`sm`,children:`Delete tag`})}),(0,c.jsxs)(a.Content,{children:[(0,c.jsx)(a.Title,{children:`Delete this tag?`}),(0,c.jsx)(a.Description,{children:`It will be removed from the 12 contracts that carry it.`}),(0,c.jsxs)(a.Footer,{children:[(0,c.jsx)(a.Close,{asChild:!0,children:(0,c.jsx)(r,{variant:`ghost`,children:`Cancel`})}),(0,c.jsx)(r,{variant:`primary`,children:`Delete`})]})]})]})]})})]}),play:async({canvasElement:e})=>{let t=f(e),n=f(document.body);await u.click(t.getByRole(`button`,{name:`Renewal 2026`}));let r=await n.findByText(/12 contracts across 3 carriers/i);await u.click(n.getByRole(`button`,{name:`Delete tag`}));let i=await n.findByRole(`dialog`,{name:`Delete this tag?`});await d(()=>l(i).toBeVisible()),await l(r).toBeInTheDocument(),await l(y(i)).toBe(y(r)),await l(v(i)).toBeGreaterThan(v(r))}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`A minimal Popover: a trigger button that reveals a short text surface on
click and dismisses on outside click or Escape.

@summary Basic click-to-open popover surface`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`\`side\` sets the preferred placement; Radix flips it on viewport collision.

@summary Popover placement on each of the four sides`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Rich interactive content — the primary reason to reach for a Popover over a\nTooltip. A `Close` inside the surface dismisses it after submitting.\n\n@summary Popover holding an interactive form with a `Close` action",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"`Anchor` positions the Content against an element other than the Trigger —\nuseful when the visual anchor differs from the toggle button.\n\n@summary Popover positioned against a separate `Anchor` element",..._.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`A Modal opened from a button inside the Popover. Both share
\`--z-index-top-layer\`, so the modal opens last and paints over the popover
while the overlay dims it. The popover stays mounted underneath, which keeps
focus returning to its trigger once the modal closes.

@summary Modal opened from inside a Popover paints above it`,...b.parameters?.docs?.description}}},x=[`Default`,`Sides`,`WithForm`,`WithAnchor`,`ModalFromInsidePopover`]})))()}S();export{m as Default,b as ModalFromInsidePopover,h as Sides,_ as WithAnchor,g as WithForm,x as __namedExportsOrder,p as default};