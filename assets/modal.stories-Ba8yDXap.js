import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-DZCaGPBy.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./button-Bqp-52CJ.js";import{t as a}from"./button-Bnt485Ny.js";import{n as o,t as s}from"./modal-C6XtlH8_.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{c=t(n(),1),o(),a(),l=r(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Modal`,component:s.Root,tags:[`autodocs`],parameters:{docs:{description:{component:'Modal is a compound dialog built on Radix UI: `Root` owns the open state,\n`Content` is the centered surface (`size` md/lg), and `Title`/`Body`/`Footer`\nstructure it. Close it with `Escape`, the overlay, the X button, or a\n`Modal.Close asChild` around your own button.\n\n`Content` also takes `variant="alert"` for the modal the user has to answer:\nit drops all three implicit ways out and is announced as an `alertdialog`.'}}}},h={render:()=>(0,l.jsxs)(s.Root,{children:[(0,l.jsx)(s.Trigger,{asChild:!0,children:(0,l.jsx)(i,{variant:`secondary`,children:`Delete carrier`})}),(0,l.jsxs)(s.Content,{children:[(0,l.jsx)(s.Title,{children:`Delete carrier`}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{children:`This will remove the carrier from your agency. This action cannot be undone.`})}),(0,l.jsxs)(s.Footer,{children:[(0,l.jsx)(s.Close,{asChild:!0,children:(0,l.jsx)(i,{variant:`ghost`,children:`Cancel`})}),(0,l.jsx)(i,{variant:`primary`,children:`Delete`})]})]})]}),play:async({canvasElement:e})=>{let t=p(e),n=p(document.body);await d.click(t.getByRole(`button`,{name:/delete carrier/i}));let r=await n.findByRole(`dialog`,{name:/delete carrier/i});await f(()=>u(r).toBeVisible()),await u(n.getByText(/cannot be undone/i)).toBeVisible(),await d.click(n.getByRole(`button`,{name:/cancel/i})),await f(()=>u(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},g={render:()=>(0,l.jsxs)(s.Root,{children:[(0,l.jsx)(s.Trigger,{asChild:!0,children:(0,l.jsx)(i,{variant:`secondary`,children:`Delete carrier`})}),(0,l.jsxs)(s.Content,{children:[(0,l.jsx)(s.Title,{children:`Delete carrier`}),(0,l.jsx)(s.Description,{children:`This action cannot be undone.`}),(0,l.jsxs)(s.Footer,{children:[(0,l.jsx)(s.Close,{asChild:!0,children:(0,l.jsx)(i,{variant:`ghost`,children:`Cancel`})}),(0,l.jsx)(i,{variant:`primary`,children:`Delete`})]})]})]}),play:async({canvasElement:e})=>{let t=p(e),n=p(document.body);await d.click(t.getByRole(`button`,{name:/delete carrier/i}));let r=await n.findByRole(`dialog`,{name:/delete carrier/i});await f(()=>u(r).toBeVisible()),await u(r).toHaveAccessibleDescription(/cannot be undone/i)}},_=()=>{let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{variant:`secondary`,onClick:()=>t(!0),children:`Open controlled`}),(0,l.jsx)(s.Root,{open:e,onOpenChange:t,children:(0,l.jsxs)(s.Content,{children:[(0,l.jsx)(s.Title,{children:`Controlled modal`}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{children:`The open state lives in the consumer.`})}),(0,l.jsx)(s.Footer,{children:(0,l.jsx)(i,{variant:`primary`,onClick:()=>t(!1),children:`Done`})})]})})]})},v={render:()=>(0,l.jsx)(_,{}),play:async({canvasElement:e})=>{let t=p(e),n=p(document.body);await d.click(t.getByRole(`button`,{name:/open controlled/i}));let r=await n.findByRole(`dialog`,{name:/controlled modal/i});await f(()=>u(r).toBeVisible()),await d.keyboard(`{Escape}`),await f(()=>u(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},y={render:()=>(0,l.jsxs)(s.Root,{children:[(0,l.jsx)(s.Trigger,{asChild:!0,children:(0,l.jsx)(i,{variant:`secondary`,children:`Open large`})}),(0,l.jsxs)(s.Content,{size:`lg`,children:[(0,l.jsx)(s.Title,{children:`Large modal`}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{children:"Use `lg` for wide content like tables or side-by-side forms."})})]})]})},b={render:()=>(0,l.jsxs)(s.Root,{children:[(0,l.jsx)(s.Trigger,{asChild:!0,children:(0,l.jsx)(i,{variant:`secondary`,children:`Open scrollable`})}),(0,l.jsxs)(s.Content,{children:[(0,l.jsx)(s.Title,{children:`Terms and conditions`}),(0,l.jsx)(s.Body,{children:Array.from({length:24},(e,t)=>(0,l.jsxs)(`p`,{className:`mb-4`,children:[`Section `,t+1,`: agents shall maintain active licensure in every state where they transact business, and notify the marketplace of any change in appointment status.`]},t))}),(0,l.jsx)(s.Footer,{children:(0,l.jsx)(s.Close,{asChild:!0,children:(0,l.jsx)(i,{variant:`primary`,children:`Accept`})})})]})]})},x={render:()=>(0,l.jsxs)(s.Root,{children:[(0,l.jsx)(s.Trigger,{asChild:!0,children:(0,l.jsx)(i,{variant:`secondary`,children:`Open alert`})}),(0,l.jsxs)(s.Content,{variant:`alert`,children:[(0,l.jsx)(s.Title,{children:`Complete your Docusign integration`}),(0,l.jsx)(s.Body,{children:(0,l.jsx)(`p`,{children:`To enable your integration, please authorize access to your Docusign account.`})}),(0,l.jsxs)(s.Footer,{children:[(0,l.jsx)(s.Close,{asChild:!0,children:(0,l.jsx)(i,{variant:`ghost`,children:`Not now`})}),(0,l.jsx)(i,{variant:`primary`,children:`Authorize`})]})]})]}),play:async({canvasElement:e})=>{let t=p(e),n=p(document.body);await d.click(t.getByRole(`button`,{name:`Open alert`}));let r=await n.findByRole(`alertdialog`,{name:`Complete your Docusign integration`});await f(()=>u(r).toBeVisible()),await u(n.queryByRole(`button`,{name:`Close`})).not.toBeInTheDocument(),await d.keyboard(`{Escape}`),await u(r).toBeVisible(),await d.click(document.querySelector(`[data-slot="modal-overlay"]`)),await u(r).toBeVisible(),await d.click(n.getByRole(`button`,{name:`Not now`})),await f(()=>u(n.queryByRole(`alertdialog`)).not.toBeInTheDocument())}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Trigger-driven modal: open it, then dismiss with the footer's Cancel.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"`Modal.Description` sits 0.5rem below `Modal.Title` and doubles as the accessible description.",...g.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Controlled with `open`/`onOpenChange` — the dominant pattern in both apps. Also closes on `Escape`.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:'`size="lg"` widens the surface to 720px; `md` (default) is 540px.',...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Long content scrolls inside `Body` while title and footer stay pinned.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:'`variant="alert"` for a decision the user cannot skip: `Escape` and overlay\nclicks are ignored, `Modal.Title` renders no X button, and the surface is\nannounced as an `alertdialog`. Only the footer actions close it.',...x.parameters?.docs?.description}}},S=[`Default`,`WithDescription`,`Controlled`,`Large`,`ScrollableBody`,`Alert`]}))();export{x as Alert,v as Controlled,h as Default,y as Large,b as ScrollableBody,g as WithDescription,S as __namedExportsOrder,m as default};