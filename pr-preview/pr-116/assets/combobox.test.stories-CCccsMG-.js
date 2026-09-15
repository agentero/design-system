import{i as e}from"./preload-helper-xPQekRTU.js";import{AnchoredToTheSearchField as t,ChromeLessSurface as n,CustomContainer as r,Default as i,ExternalPortal as a,MatchingTriggerWidth as o,ProducerflowSpacing as s,n as c,r as l,t as u}from"./combobox.stories-Cu_ot8AG.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{l(),u(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Tests/Combobox`,component:c.Root,tags:[`!dev`,`!autodocs`,`!manifest`],parameters:{docs:{description:{component:`Interaction checks reuse the public examples without changing their preview state.`}}}},g={...i,play:async({canvasElement:e})=>{let t=m(e),n=m(document.body);await d(n.queryByRole(`dialog`)).not.toBeInTheDocument(),await f.click(t.getByRole(`button`,{name:`Select a line of business`}));let r=await n.findByRole(`dialog`,{name:`Select a line of business`});await d(t.getByRole(`button`,{name:`Select a line of business`})).toHaveAttribute(`aria-controls`,r.id);let i=await n.findByRole(`combobox`,{name:`Search lines of business`});await d(n.getAllByRole(`option`)).toHaveLength(5),await f.type(i,`flo`),await p(()=>d(n.getAllByRole(`option`)).toHaveLength(1)),await f.click(n.getByRole(`option`,{name:`Flood`}));let a=t.getByRole(`button`,{name:`Flood`});await p(()=>d(a).toHaveFocus()),await f.click(a),await n.findByRole(`dialog`,{name:`Select a line of business`}),await f.keyboard(`{Escape}`),await p(()=>d(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await d(a).toHaveFocus()}},_={...n,play:async()=>{let e=await p(()=>{let e=document.querySelector(`[data-slot="combobox-content"]`);if(!e)throw Error(`Combobox.Content is not mounted`);return e}),t=getComputedStyle(e);await d(t.borderTopWidth).toBe(`0px`),await d(t.boxShadow).toBe(`none`),await d(t.width).toBe(`300px`),await d(t.animationName).toBe(`comboboxIn`),await d(t.animationDuration).toBe(`0.1s`),await d(e.querySelector(`[data-slot=combobox-content-inner]`)).toBeInTheDocument(),await d([`transparent`,`rgba(0, 0, 0, 0)`]).toContain(t.backgroundColor);let n=e.querySelector(`[data-slot="command-root"]`);await d(n).toBeInTheDocument(),await d(getComputedStyle(n).borderTopWidth).not.toBe(`0px`)}},v={...o,play:async({canvasElement:e})=>{let t=m(e).getByRole(`button`,{name:`Select a line of business`}),n=await p(()=>{let e=document.querySelector(`[data-slot="combobox-content"]`);if(!e)throw Error(`Combobox.Content is not mounted`);return e});await p(()=>d(Math.round(n.getBoundingClientRect().width)).toBe(Math.round(t.getBoundingClientRect().width)))}},y={...t,play:async({canvasElement:e})=>{let t=m(e),n=m(document.body),r=t.getByRole(`combobox`,{name:`Search lines of business`});await d(r).toHaveValue(``),await d(r).toHaveAttribute(`aria-expanded`,`false`),await d(r).not.toHaveAttribute(`aria-controls`),await f.click(r),await p(()=>d(n.getAllByRole(`option`)).toHaveLength(5)),await d(r).toHaveAttribute(`aria-controls`,n.getByRole(`listbox`).id),await f.click(r),await d(r).toHaveAttribute(`aria-expanded`,`true`),await d(n.getByRole(`listbox`)).toBeVisible(),await f.keyboard(`{ArrowDown}`);let i=n.getByRole(`option`,{name:`Dwelling Fire`});await d(i).toHaveAttribute(`aria-selected`,`true`),await d(r).toHaveAttribute(`aria-activedescendant`,i.id),await f.keyboard(`{Enter}`),await d(r).toHaveValue(`Dwelling Fire`),await d(r).toHaveAttribute(`aria-expanded`,`false`),await d(r).toHaveFocus(),await p(()=>d(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await f.click(r),await f.clear(r),await f.type(r,`flo`),await p(()=>d(n.getAllByRole(`option`)).toHaveLength(1)),await d(r).toHaveFocus(),await f.keyboard(`{Escape}`),await d(r).toHaveAttribute(`aria-expanded`,`false`),await p(()=>d(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},b={...r,play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`button`,{name:`Open options`});await f.click(n);let r=m(t.getByTestId(`combobox-container`)),i=await r.findByRole(`dialog`,{name:`Custom options`});await p(()=>d(i).toBeVisible()),await f.keyboard(`{Escape}`),await p(()=>d(r.queryByRole(`dialog`)).not.toBeInTheDocument()),await d(n).toHaveFocus()}},x={...a,play:async({canvasElement:e})=>{let t=m(e),n=m(t.getByTestId(`external-combobox-container`)),r=await n.findByRole(`dialog`,{name:`External options`});await p(()=>d(r).toBeVisible()),await f.click(t.getByRole(`heading`,{name:`External options`})),await p(()=>d(n.queryByRole(`dialog`)).not.toBeInTheDocument())}},S={...s,play:async({canvasElement:e})=>{let t=m(e).getByRole(`button`,{name:`Choose a state`}),n=await m(document.body).findByRole(`dialog`,{name:`Choose a state`});await p(()=>d(n.getBoundingClientRect().top-t.getBoundingClientRect().bottom).toBeCloseTo(8,0))}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`@summary Verify Default behavior`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`@summary Verify ChromeLessSurface behavior`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`@summary Verify MatchingTriggerWidth behavior`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`@summary Verify AnchoredToTheSearchField behavior`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`@summary Verify CustomContainer behavior`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`@summary Verify ExternalPortal behavior`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Examples.ProducerflowSpacing,
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
}`,...S.parameters?.docs?.source},description:{story:`@summary Verify ProducerflowSpacing behavior`,...S.parameters?.docs?.description}}},C=[`Default`,`ChromeLessSurface`,`MatchingTriggerWidth`,`AnchoredToTheSearchField`,`CustomContainer`,`ExternalPortal`,`ProducerflowSpacing`]}))();export{y as AnchoredToTheSearchField,_ as ChromeLessSurface,b as CustomContainer,g as Default,x as ExternalPortal,v as MatchingTriggerWidth,S as ProducerflowSpacing,C as __namedExportsOrder,h as default};