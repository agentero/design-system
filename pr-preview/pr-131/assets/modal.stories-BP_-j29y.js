import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CGh0x7cT.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CdTDy3hk.js";import{n as a,t as o}from"./modal-Bfbc1QbJ.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{s=t(),a(),r(),c=n(),{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Modal`,component:o.Root,tags:[`autodocs`],parameters:{docs:{description:{component:'Modal is a compound dialog built on Radix UI: `Root` owns the open state,\n`Content` is the centered surface (`size` md/lg), and `Title`/`Body`/`Footer`\nstructure it. Close it with `Escape`, the overlay, the X button, or a\n`Modal.Close asChild` around your own button.\n\n`Content` also takes `variant="alert"` for the modal the user has to answer:\nit drops all three implicit ways out and is announced as an `alertdialog`.'}}}},m={render:()=>(0,c.jsxs)(o.Root,{children:[(0,c.jsx)(o.Trigger,{asChild:!0,children:(0,c.jsx)(i,{variant:`secondary`,children:`Delete carrier`})}),(0,c.jsxs)(o.Content,{children:[(0,c.jsx)(o.Title,{children:`Delete carrier`}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{children:`This will remove the carrier from your agency. This action cannot be undone.`})}),(0,c.jsxs)(o.Footer,{children:[(0,c.jsx)(o.Close,{asChild:!0,children:(0,c.jsx)(i,{variant:`ghost`,children:`Cancel`})}),(0,c.jsx)(i,{variant:`primary`,children:`Delete`})]})]})]}),play:async({canvasElement:e})=>{let t=f(e),n=f(document.body);await u.click(t.getByRole(`button`,{name:/delete carrier/i}));let r=await n.findByRole(`dialog`,{name:/delete carrier/i});await d(()=>l(r).toBeVisible()),await l(n.getByText(/cannot be undone/i)).toBeVisible(),await u.click(n.getByRole(`button`,{name:/cancel/i})),await d(()=>l(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},h={render:()=>(0,c.jsxs)(o.Root,{children:[(0,c.jsx)(o.Trigger,{asChild:!0,children:(0,c.jsx)(i,{variant:`secondary`,children:`Delete carrier`})}),(0,c.jsxs)(o.Content,{children:[(0,c.jsx)(o.Title,{children:`Delete carrier`}),(0,c.jsx)(o.Description,{children:`This action cannot be undone.`}),(0,c.jsxs)(o.Footer,{children:[(0,c.jsx)(o.Close,{asChild:!0,children:(0,c.jsx)(i,{variant:`ghost`,children:`Cancel`})}),(0,c.jsx)(i,{variant:`primary`,children:`Delete`})]})]})]}),play:async({canvasElement:e})=>{let t=f(e),n=f(document.body);await u.click(t.getByRole(`button`,{name:/delete carrier/i}));let r=await n.findByRole(`dialog`,{name:/delete carrier/i});await d(()=>l(r).toBeVisible()),await l(r).toHaveAccessibleDescription(/cannot be undone/i)}},g=()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{variant:`secondary`,onClick:()=>t(!0),children:`Open controlled`}),(0,c.jsx)(o.Root,{open:e,onOpenChange:t,children:(0,c.jsxs)(o.Content,{children:[(0,c.jsx)(o.Title,{children:`Controlled modal`}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{children:`The open state lives in the consumer.`})}),(0,c.jsx)(o.Footer,{children:(0,c.jsx)(i,{variant:`primary`,onClick:()=>t(!1),children:`Done`})})]})})]})},_={render:()=>(0,c.jsx)(g,{}),play:async({canvasElement:e})=>{let t=f(e),n=f(document.body);await u.click(t.getByRole(`button`,{name:/open controlled/i}));let r=await n.findByRole(`dialog`,{name:/controlled modal/i});await d(()=>l(r).toBeVisible()),await u.keyboard(`{Escape}`),await d(()=>l(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},v={render:()=>(0,c.jsxs)(o.Root,{children:[(0,c.jsx)(o.Trigger,{asChild:!0,children:(0,c.jsx)(i,{variant:`secondary`,children:`Open large`})}),(0,c.jsxs)(o.Content,{size:`lg`,children:[(0,c.jsx)(o.Title,{children:`Large modal`}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{children:"Use `lg` for wide content like tables or side-by-side forms."})})]})]})},y={render:()=>(0,c.jsxs)(o.Root,{children:[(0,c.jsx)(o.Trigger,{asChild:!0,children:(0,c.jsx)(i,{variant:`secondary`,children:`Open scrollable`})}),(0,c.jsxs)(o.Content,{children:[(0,c.jsx)(o.Title,{children:`Terms and conditions`}),(0,c.jsx)(o.Body,{children:Array.from({length:24},(e,t)=>(0,c.jsxs)(`p`,{className:`mb-4`,children:[`Section `,t+1,`: agents shall maintain active licensure in every state where they transact business, and notify the marketplace of any change in appointment status.`]},t))}),(0,c.jsx)(o.Footer,{children:(0,c.jsx)(o.Close,{asChild:!0,children:(0,c.jsx)(i,{variant:`primary`,children:`Accept`})})})]})]})},b={render:()=>(0,c.jsxs)(o.Root,{children:[(0,c.jsx)(o.Trigger,{asChild:!0,children:(0,c.jsx)(i,{variant:`secondary`,children:`Open alert`})}),(0,c.jsxs)(o.Content,{variant:`alert`,children:[(0,c.jsx)(o.Title,{children:`Complete your Docusign integration`}),(0,c.jsx)(o.Body,{children:(0,c.jsx)(`p`,{children:`To enable your integration, please authorize access to your Docusign account.`})}),(0,c.jsxs)(o.Footer,{children:[(0,c.jsx)(o.Close,{asChild:!0,children:(0,c.jsx)(i,{variant:`ghost`,children:`Not now`})}),(0,c.jsx)(i,{variant:`primary`,children:`Authorize`})]})]})]}),play:async({canvasElement:e})=>{let t=f(e),n=f(document.body);await u.click(t.getByRole(`button`,{name:`Open alert`}));let r=await n.findByRole(`alertdialog`,{name:`Complete your Docusign integration`});await d(()=>l(r).toBeVisible()),await l(n.queryByRole(`button`,{name:`Close`})).not.toBeInTheDocument(),await u.keyboard(`{Escape}`),await l(r).toBeVisible(),await u.click(document.querySelector(`[data-slot="modal-overlay"]`)),await l(r).toBeVisible(),await u.click(n.getByRole(`button`,{name:`Not now`})),await d(()=>l(n.queryByRole(`alertdialog`)).not.toBeInTheDocument())}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Delete carrier</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Delete carrier</Modal.Title>
                <Modal.Body>
                    <p>This will remove the carrier from your agency. This action cannot be undone.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Close asChild>
                        <Button variant="ghost">Cancel</Button>
                    </Modal.Close>
                    <Button variant="primary">Delete</Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /delete carrier/i
    }));
    const dialog = await body.findByRole('dialog', {
      name: /delete carrier/i
    });
    await waitFor(() => expect(dialog).toBeVisible());
    await expect(body.getByText(/cannot be undone/i)).toBeVisible();
    await userEvent.click(body.getByRole('button', {
      name: /cancel/i
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  }
}`,...m.parameters?.docs?.source},description:{story:`Trigger-driven modal: open it, then dismiss with the footer's Cancel.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Delete carrier</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Delete carrier</Modal.Title>
                <Modal.Description>This action cannot be undone.</Modal.Description>
                <Modal.Footer>
                    <Modal.Close asChild>
                        <Button variant="ghost">Cancel</Button>
                    </Modal.Close>
                    <Button variant="primary">Delete</Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /delete carrier/i
    }));
    const dialog = await body.findByRole('dialog', {
      name: /delete carrier/i
    });
    await waitFor(() => expect(dialog).toBeVisible());
    await expect(dialog).toHaveAccessibleDescription(/cannot be undone/i);
  }
}`,...h.parameters?.docs?.source},description:{story:"`Modal.Description` sits 0.5rem below `Modal.Title` and doubles as the accessible description.",...h.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /open controlled/i
    }));
    const dialog = await body.findByRole('dialog', {
      name: /controlled modal/i
    });
    await waitFor(() => expect(dialog).toBeVisible());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  }
}`,..._.parameters?.docs?.source},description:{story:"Controlled with `open`/`onOpenChange` — the dominant pattern in both apps. Also closes on `Escape`.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Open large</Button>
            </Modal.Trigger>
            <Modal.Content size="lg">
                <Modal.Title>Large modal</Modal.Title>
                <Modal.Body>
                    <p>Use \`lg\` for wide content like tables or side-by-side forms.</p>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
}`,...v.parameters?.docs?.source},description:{story:'`size="lg"` widens the surface to 720px; `md` (default) is 540px.',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Open scrollable</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Terms and conditions</Modal.Title>
                <Modal.Body>
                    {Array.from({
          length: 24
        }, (_, i) => <p key={i} className="mb-4">
                            Section {i + 1}: agents shall maintain active licensure in every state where they
                            transact business, and notify the marketplace of any change in appointment status.
                        </p>)}
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Close asChild>
                        <Button variant="primary">Accept</Button>
                    </Modal.Close>
                </Modal.Footer>
            </Modal.Content>
        </Modal.Root>
}`,...y.parameters?.docs?.source},description:{story:"Long content scrolls inside `Body` while title and footer stay pinned.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Open alert</Button>
            </Modal.Trigger>
            <Modal.Content variant="alert">
                <Modal.Title>Complete your Docusign integration</Modal.Title>
                <Modal.Body>
                    <p>To enable your integration, please authorize access to your Docusign account.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Close asChild>
                        <Button variant="ghost">Not now</Button>
                    </Modal.Close>
                    <Button variant="primary">Authorize</Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open alert'
    }));
    const dialog = await body.findByRole('alertdialog', {
      name: 'Complete your Docusign integration'
    });
    await waitFor(() => expect(dialog).toBeVisible());
    await expect(body.queryByRole('button', {
      name: 'Close'
    })).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(dialog).toBeVisible();
    await userEvent.click(document.querySelector('[data-slot="modal-overlay"]')!);
    await expect(dialog).toBeVisible();
    await userEvent.click(body.getByRole('button', {
      name: 'Not now'
    }));
    await waitFor(() => expect(body.queryByRole('alertdialog')).not.toBeInTheDocument());
  }
}`,...b.parameters?.docs?.source},description:{story:'`variant="alert"` for a decision the user cannot skip: `Escape` and overlay\nclicks are ignored, `Modal.Title` renders no X button, and the surface is\nannounced as an `alertdialog`. Only the footer actions close it.',...b.parameters?.docs?.description}}},x=[`Default`,`WithDescription`,`Controlled`,`Large`,`ScrollableBody`,`Alert`]})))()}S();export{b as Alert,_ as Controlled,m as Default,v as Large,y as ScrollableBody,h as WithDescription,x as __namedExportsOrder,p as default};