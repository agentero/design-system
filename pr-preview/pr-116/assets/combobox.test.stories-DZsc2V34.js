import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n}from"./button-DrJ6l9tm.js";import{t as r}from"./button-oiY0HWOM.js";import{n as i,t as a}from"./command-CCS23kOj.js";import{AnchoredToTheSearchField as o,ChromeLessSurface as s,CustomContainer as c,Default as l,ExternalPortal as u,MarketplaceSpacing as d,MatchingTriggerWidth as f,n as p,r as m,t as h}from"./combobox.stories-CItNs893.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{m(),r(),i(),h(),g=t(),{expect:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Tests/Combobox`,component:p.Root,tags:[`!dev`,`!autodocs`,`!manifest`],parameters:{docs:{description:{component:`Interaction checks reuse the public examples without changing their preview state.`}}}},S={...l,play:async({canvasElement:e})=>{let t=b(e),n=b(document.body);await _(n.queryByRole(`dialog`)).not.toBeInTheDocument(),await v.click(t.getByRole(`button`,{name:`Select a line of business`}));let r=await n.findByRole(`dialog`,{name:`Select a line of business`});await _(t.getByRole(`button`,{name:`Select a line of business`})).toHaveAttribute(`aria-controls`,r.id);let i=await n.findByRole(`combobox`,{name:`Search lines of business`});await _(n.getAllByRole(`option`)).toHaveLength(5),await v.type(i,`flo`),await y(()=>_(n.getAllByRole(`option`)).toHaveLength(1)),await v.click(n.getByRole(`option`,{name:`Flood`}));let a=t.getByRole(`button`,{name:`Flood`});await y(()=>_(a).toHaveFocus()),await v.click(a),await n.findByRole(`dialog`,{name:`Select a line of business`}),await v.keyboard(`{Escape}`),await y(()=>_(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await _(a).toHaveFocus()}},C={...s,play:async()=>{let e=await y(()=>{let e=document.querySelector(`[data-slot="combobox-content"]`);if(!e)throw Error(`Combobox.Content is not mounted`);return e}),t=getComputedStyle(e);await _(t.borderTopWidth).toBe(`0px`),await _(t.boxShadow).toBe(`none`),await _(t.width).toBe(`300px`),await _(t.animationName).toBe(`comboboxIn`),await _(t.animationDuration).toBe(`0.1s`),await _(e.querySelector(`[data-slot=combobox-content-inner]`)).toBeInTheDocument(),await _([`transparent`,`rgba(0, 0, 0, 0)`]).toContain(t.backgroundColor);let n=e.querySelector(`[data-slot="command-root"]`);await _(n).toBeInTheDocument(),await _(getComputedStyle(n).borderTopWidth).not.toBe(`0px`)}},w={...f,play:async({canvasElement:e})=>{let t=b(e).getByRole(`button`,{name:`Select a line of business`}),n=await y(()=>{let e=document.querySelector(`[data-slot="combobox-content"]`);if(!e)throw Error(`Combobox.Content is not mounted`);return e});await y(()=>_(Math.round(n.getBoundingClientRect().width)).toBe(Math.round(t.getBoundingClientRect().width)))}},T={...o,play:async({canvasElement:e})=>{let t=b(e),n=b(document.body),r=t.getByRole(`combobox`,{name:`Search lines of business`});await _(r).toHaveValue(``),await _(r).toHaveAttribute(`aria-expanded`,`false`),await _(r).not.toHaveAttribute(`aria-controls`),await v.click(r),await y(()=>_(n.getAllByRole(`option`)).toHaveLength(5)),await _(n.queryByRole(`dialog`)).not.toBeInTheDocument(),await _(r).toHaveAttribute(`aria-controls`,n.getByRole(`listbox`).id),await v.click(r),await _(r).toHaveAttribute(`aria-expanded`,`true`),await _(n.getByRole(`listbox`)).toBeVisible(),await v.keyboard(`{ArrowDown}`);let i=n.getByRole(`option`,{name:`Dwelling Fire`});await _(i).toHaveAttribute(`aria-selected`,`true`),await _(r).toHaveAttribute(`aria-activedescendant`,i.id),await v.keyboard(`{Enter}`),await _(r).toHaveValue(`Dwelling Fire`),await _(r).toHaveAttribute(`aria-expanded`,`false`),await _(r).toHaveFocus(),await y(()=>_(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await v.click(r),await v.clear(r),await v.type(r,`flo`),await y(()=>_(n.getAllByRole(`option`)).toHaveLength(1)),await _(r).toHaveFocus(),await v.keyboard(`{Escape}`),await _(r).toHaveAttribute(`aria-expanded`,`false`),await y(()=>_(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},E={...c,play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`button`,{name:`Open options`});await v.click(n);let r=b(t.getByTestId(`combobox-container`)),i=await r.findByRole(`dialog`,{name:`Custom options`});await y(()=>_(i).toBeVisible()),await v.keyboard(`{Escape}`),await y(()=>_(r.queryByRole(`dialog`)).not.toBeInTheDocument()),await _(n).toHaveFocus()}},D={...u,play:async({canvasElement:e})=>{let t=b(e),n=b(t.getByTestId(`external-combobox-container`)),r=await n.findByRole(`dialog`,{name:`External options`});await y(()=>_(r).toBeVisible()),await v.click(t.getByRole(`heading`,{name:`External options`})),await y(()=>_(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},O={render:()=>(0,g.jsxs)(p.Root,{defaultOpen:!0,children:[(0,g.jsx)(p.Trigger,{asChild:!0,children:(0,g.jsx)(n,{children:`Choose a state`})}),(0,g.jsx)(p.Content,{label:`Choose a state`,side:`bottom`,avoidCollisions:!1,children:(0,g.jsxs)(a.Root,{label:`Search states`,children:[(0,g.jsx)(a.Input,{}),(0,g.jsx)(a.List,{children:(0,g.jsx)(a.Item,{children:`California`})})]})})]}),play:async({canvasElement:e})=>{let t=b(e).getByRole(`button`,{name:`Choose a state`}),n=await b(document.body).findByRole(`dialog`,{name:`Choose a state`});await y(()=>_(n.getBoundingClientRect().top-t.getBoundingClientRect().bottom).toBeCloseTo(8,0))}},k={...d,play:async({canvasElement:e})=>{let t=b(e).getByRole(`button`,{name:`Choose a state`}),n=await b(document.body).findByRole(`dialog`,{name:`Choose a state`});await y(()=>_(n.getBoundingClientRect().top-t.getBoundingClientRect().bottom).toBeCloseTo(4,0))}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Examples.Default,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Select a line of business'
    }));
    const dialog = await body.findByRole('dialog', {
      name: 'Select a line of business'
    });
    await expect(canvas.getByRole('button', {
      name: 'Select a line of business'
    })).toHaveAttribute('aria-controls', dialog.id);
    const input = await body.findByRole('combobox', {
      name: 'Search lines of business'
    });
    await expect(body.getAllByRole('option')).toHaveLength(5);
    await userEvent.type(input, 'flo');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
    await userEvent.click(body.getByRole('option', {
      name: 'Flood'
    }));
    const trigger = canvas.getByRole('button', {
      name: 'Flood'
    });
    await waitFor(() => expect(trigger).toHaveFocus());
    await userEvent.click(trigger);
    await body.findByRole('dialog', {
      name: 'Select a line of business'
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(trigger).toHaveFocus();
  }
}`,...S.parameters?.docs?.source},description:{story:`@summary Verify Default behavior`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Examples.ChromeLessSurface,
  play: async () => {
    const content = await waitFor(() => {
      const element = document.querySelector('[data-slot="combobox-content"]');
      if (!element) throw new Error('Combobox.Content is not mounted');
      return element;
    });
    const styles = getComputedStyle(content);
    await expect(styles.borderTopWidth).toBe('0px');
    await expect(styles.boxShadow).toBe('none');
    await expect(styles.width).toBe('300px');
    await expect(styles.animationName).toBe('comboboxIn');
    await expect(styles.animationDuration).toBe('0.1s');
    await expect(content.querySelector('[data-slot=combobox-content-inner]')).toBeInTheDocument();
    await expect(['transparent', 'rgba(0, 0, 0, 0)']).toContain(styles.backgroundColor);
    const panel = content.querySelector('[data-slot="command-root"]');
    await expect(panel).toBeInTheDocument();
    await expect(getComputedStyle(panel!).borderTopWidth).not.toBe('0px');
  }
}`,...C.parameters?.docs?.source},description:{story:`@summary Verify ChromeLessSurface behavior`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Examples.MatchingTriggerWidth,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'Select a line of business'
    });
    const content = await waitFor(() => {
      const element = document.querySelector('[data-slot="combobox-content"]');
      if (!element) throw new Error('Combobox.Content is not mounted');
      return element;
    });
    await waitFor(() => expect(Math.round(content.getBoundingClientRect().width)).toBe(Math.round(trigger.getBoundingClientRect().width)));
  }
}`,...w.parameters?.docs?.source},description:{story:`@summary Verify MatchingTriggerWidth behavior`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Examples.AnchoredToTheSearchField,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const field = canvas.getByRole('combobox', {
      name: 'Search lines of business'
    });
    await expect(field).toHaveValue('');
    await expect(field).toHaveAttribute('aria-expanded', 'false');
    await expect(field).not.toHaveAttribute('aria-controls');
    await userEvent.click(field);
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(5));
    await expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    await expect(field).toHaveAttribute('aria-controls', body.getByRole('listbox').id);
    await userEvent.click(field);
    await expect(field).toHaveAttribute('aria-expanded', 'true');
    await expect(body.getByRole('listbox')).toBeVisible();
    await userEvent.keyboard('{ArrowDown}');
    const secondOption = body.getByRole('option', {
      name: 'Dwelling Fire'
    });
    await expect(secondOption).toHaveAttribute('aria-selected', 'true');
    await expect(field).toHaveAttribute('aria-activedescendant', secondOption.id);
    await userEvent.keyboard('{Enter}');
    await expect(field).toHaveValue('Dwelling Fire');
    await expect(field).toHaveAttribute('aria-expanded', 'false');
    await expect(field).toHaveFocus();
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await userEvent.click(field);
    await userEvent.clear(field);
    await userEvent.type(field, 'flo');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
    await expect(field).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await expect(field).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...T.parameters?.docs?.source},description:{story:`@summary Verify AnchoredToTheSearchField behavior`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...Examples.CustomContainer,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'Open options'
    });
    await userEvent.click(trigger);
    const container = within(canvas.getByTestId('combobox-container'));
    const dialog = await container.findByRole('dialog', {
      name: 'Custom options'
    });
    await waitFor(() => expect(dialog).toBeVisible());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(container.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(trigger).toHaveFocus();
  }
}`,...E.parameters?.docs?.source},description:{story:`@summary Verify CustomContainer behavior`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...Examples.ExternalPortal,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const container = within(canvas.getByTestId('external-combobox-container'));
    const dialog = await container.findByRole('dialog', {
      name: 'External options'
    });
    await waitFor(() => expect(dialog).toBeVisible());
    await userEvent.click(canvas.getByRole('heading', {
      name: 'External options'
    }));
    await waitFor(() => expect(container.queryByRole('dialog')).not.toBeInTheDocument());
  }
}`,...D.parameters?.docs?.source},description:{story:`@summary Verify ExternalPortal behavior`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root defaultOpen>
            <Combobox.Trigger asChild>
                <Button>Choose a state</Button>
            </Combobox.Trigger>
            <Combobox.Content label="Choose a state" side="bottom" avoidCollisions={false}>
                <Command.Root label="Search states">
                    <Command.Input />
                    <Command.List>
                        <Command.Item>California</Command.Item>
                    </Command.List>
                </Command.Root>
            </Combobox.Content>
        </Combobox.Root>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('button', {
      name: 'Choose a state'
    });
    const dialog = await within(document.body).findByRole('dialog', {
      name: 'Choose a state'
    });
    await waitFor(() => expect(dialog.getBoundingClientRect().top - trigger.getBoundingClientRect().bottom).toBeCloseTo(8, 0));
  }
}`,...O.parameters?.docs?.source},description:{story:`@summary Verify the default 8px offset shared with Popover, DropdownMenu and HoverCard`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...Examples.MarketplaceSpacing,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('button', {
      name: 'Choose a state'
    });
    const dialog = await within(document.body).findByRole('dialog', {
      name: 'Choose a state'
    });
    await waitFor(() => expect(dialog.getBoundingClientRect().top - trigger.getBoundingClientRect().bottom).toBeCloseTo(4, 0));
  }
}`,...k.parameters?.docs?.source},description:{story:`@summary Verify MarketplaceSpacing behavior`,...k.parameters?.docs?.description}}},A=[`Default`,`ChromeLessSurface`,`MatchingTriggerWidth`,`AnchoredToTheSearchField`,`CustomContainer`,`ExternalPortal`,`DefaultSpacing`,`MarketplaceSpacing`]}))();export{T as AnchoredToTheSearchField,C as ChromeLessSurface,E as CustomContainer,S as Default,O as DefaultSpacing,D as ExternalPortal,k as MarketplaceSpacing,w as MatchingTriggerWidth,A as __namedExportsOrder,x as default};