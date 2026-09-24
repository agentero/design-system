import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BFwQyqPz.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./checkbox-D6f7gG-p.js";import{n as a,t as o}from"./label-BjCqAbin.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{s=t(),a(),r(),c=n(),{expect:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Checkbox`,component:i,tags:[`autodocs`],argTypes:{checked:{control:`radio`,options:[!0,!1,`indeterminate`]},defaultChecked:{control:`radio`,options:[!0,!1,`indeterminate`]},disabled:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`},onCheckedChange:{action:`checkedChange`}},args:{disabled:!1,"aria-label":`Select row`},parameters:{docs:{description:{component:"Base control for a boolean the user confirms later. Headless: pair it with\na `Label` and `htmlFor`, or give it an `aria-label`. There is no `status`\nprop — set `aria-invalid` and the destructive treatment follows."}}}},p={play:async({canvasElement:e})=>{let t=d(e).getByRole(`checkbox`,{name:`Select row`});await l(t).not.toBeChecked(),await u.click(t),await l(t).toBeChecked()}},m={args:{defaultChecked:!0}},h={args:{checked:`indeterminate`},play:async({canvasElement:e})=>{let t=d(e).getByRole(`checkbox`,{name:`Select row`});await l(t).toHaveAttribute(`aria-checked`,`mixed`)}},g={args:{defaultChecked:`indeterminate`},play:async({canvasElement:e})=>{let t=d(e).getByRole(`checkbox`,{name:`Select row`});await l(t).toHaveAttribute(`aria-checked`,`mixed`),await u.click(t),await l(t).toBeChecked(),await u.keyboard(` `),await l(t).toHaveAttribute(`aria-checked`,`false`)}},_={render:()=>(0,c.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,c.jsx)(i,{disabled:!0,"aria-label":`Disabled unchecked`}),(0,c.jsx)(i,{disabled:!0,defaultChecked:!0,"aria-label":`Disabled checked`}),(0,c.jsx)(i,{disabled:!0,checked:`indeterminate`,"aria-label":`Disabled mixed`})]})},v={render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,c.jsx)(i,{id:`terms`,"aria-invalid":!0,"aria-describedby":`terms-error`,required:!0}),(0,c.jsx)(o,{htmlFor:`terms`,children:`I accept the terms of service`})]}),(0,c.jsx)(`p`,{id:`terms-error`,className:`text-sm text-text-input-destructive`,children:`You must accept the terms to continue.`})]})},y={render:()=>(0,c.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,c.jsx)(i,{id:`newsletter`,name:`newsletter`}),(0,c.jsx)(o,{htmlFor:`newsletter`,children:`Email me product updates`})]}),play:async({canvasElement:e})=>{let t=d(e);await u.click(t.getByText(`Email me product updates`)),await l(t.getByRole(`checkbox`,{name:`Email me product updates`})).toBeChecked()}},b={render:()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,c.jsx)(i,{id:`controlled`,checked:e,onCheckedChange:e=>t(e===!0)}),(0,c.jsxs)(o,{htmlFor:`controlled`,children:[`Auto-renew policy `,e?`(on)`:`(off)`]})]})}},x={render:()=>{let e=[`Openly`,`Lemonade`,`Bamboo`],[t,n]=(0,s.useState)([`Openly`]),r=t.length===e.length;return(0,c.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,c.jsx)(i,{id:`select-all`,checked:r?!0:t.length>0&&`indeterminate`,onCheckedChange:t=>n(t===!0?e:[])}),(0,c.jsx)(o,{htmlFor:`select-all`,children:`Select all carriers`})]}),(0,c.jsx)(`div`,{className:`ms-6 flex flex-col gap-2`,children:e.map(e=>(0,c.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,c.jsx)(i,{id:e,checked:t.includes(e),onCheckedChange:t=>n(n=>t===!0?[...n,e]:n.filter(t=>t!==e))}),(0,c.jsx)(o,{htmlFor:e,children:e})]},e))})]})},play:async({canvasElement:e})=>{let t=d(e),n=t.getByRole(`checkbox`,{name:`Select all carriers`});await l(n).toHaveAttribute(`aria-checked`,`mixed`),await u.click(n),await l(t.getByRole(`checkbox`,{name:`Bamboo`})).toBeChecked()}},S={render:()=>(0,c.jsx)(`div`,{className:`group`,"data-state":`checked`,children:(0,c.jsx)(i,{"aria-label":`Select carriers`,defaultChecked:`indeterminate`})}),play:async({canvasElement:e})=>{let t=d(e).getByRole(`checkbox`,{name:`Select carriers`}),[n,r]=t.querySelectorAll(`[data-slot=checkbox-indicator] svg`);await l(n).not.toBeVisible(),await l(r).toBeVisible(),await u.click(t),await l(n).toBeVisible(),await l(r).not.toBeVisible()}},C={render:()=>(0,c.jsx)(`div`,{className:`flex flex-col gap-6`,children:[!1,!0].map(e=>(0,c.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(t=>(0,c.jsx)(`div`,{className:`flex items-center gap-6`,children:[!1,!0,`indeterminate`].map(n=>(0,c.jsx)(i,{"aria-label":`${e?`Invalid`:`Valid`} ${t?`disabled`:`enabled`} ${n}`,checked:n,disabled:t,"aria-invalid":e},String(n)))},String(t)))},String(e)))}),play:async({canvasElement:e})=>{let t=d(e);for(let e of[{name:`Valid enabled`,border:`rgb(207, 210, 219)`,fill:`rgb(36, 36, 36)`,cursor:`pointer`},{name:`Valid disabled`,border:`rgb(227, 227, 227)`,fill:`rgb(205, 205, 205)`,cursor:`not-allowed`},{name:`Invalid enabled`,border:`rgb(217, 38, 38)`,fill:`rgb(217, 38, 38)`,cursor:`pointer`},{name:`Invalid disabled`,border:`rgb(240, 168, 168)`,fill:`rgb(240, 168, 168)`,cursor:`not-allowed`}])for(let n of[`false`,`true`,`indeterminate`]){let r=t.getByRole(`checkbox`,{name:`${e.name} ${n}`}),i=getComputedStyle(r);await l(r.getBoundingClientRect().width).toBe(16),await l(r.getBoundingClientRect().height).toBe(16),await l(i.borderRadius).toBe(`4px`),await l(i.borderWidth).toBe(`1px`),await l(i.backgroundColor).toBe(n===`false`?`rgb(255, 255, 255)`:e.fill),await l(i.borderColor).toBe(n===`false`?e.border:e.fill),await l(i.cursor).toBe(e.cursor)}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Select row'
    });
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  }
}`,...p.parameters?.docs?.source},description:{story:`@summary Default standalone checkbox`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...m.parameters?.docs?.source},description:{story:`@summary Checked state`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checked: 'indeterminate'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Select row'
    });
    await expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
  }
}`,...h.parameters?.docs?.source},description:{story:`A state you set, never one the user clicks into: use it for a parent that
governs a partially selected group.

@summary Mixed state for a partially selected group`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: 'indeterminate'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Select row'
    });
    await expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await userEvent.keyboard(' ');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
  }
}`,...g.parameters?.docs?.source},description:{story:`Starts mixed without a controlled value, then toggles through checked and unchecked.

@summary Uncontrolled checkbox starting in the mixed state`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
            <Checkbox disabled aria-label="Disabled unchecked" />
            <Checkbox disabled defaultChecked aria-label="Disabled checked" />
            <Checkbox disabled checked="indeterminate" aria-label="Disabled mixed" />
        </div>
}`,..._.parameters?.docs?.source},description:{story:`@summary Disabled in every state`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Checkbox id="terms" aria-invalid aria-describedby="terms-error" required />
                <Label htmlFor="terms">I accept the terms of service</Label>
            </div>
            <p id="terms-error" className="text-sm text-text-input-destructive">
                You must accept the terms to continue.
            </p>
        </div>
}`,...v.parameters?.docs?.source},description:{story:`@summary Failed validation, driven by aria-invalid`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
            <Checkbox id="newsletter" name="newsletter" />
            <Label htmlFor="newsletter">Email me product updates</Label>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Email me product updates'));
    await expect(canvas.getByRole('checkbox', {
      name: 'Email me product updates'
    })).toBeChecked();
  }
}`,...y.parameters?.docs?.source},description:{story:`@summary Labelled checkbox with the text in the hit target`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [accepted, setAccepted] = useState(false);
    return <div className="flex items-center gap-2">
                <Checkbox id="controlled" checked={accepted} onCheckedChange={value => setAccepted(value === true)} />
                <Label htmlFor="controlled">Auto-renew policy {accepted ? '(on)' : '(off)'}</Label>
            </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`@summary Controlled checkbox driven by component state`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const carriers = ['Openly', 'Lemonade', 'Bamboo'];
    const [selected, setSelected] = useState<string[]>(['Openly']);
    const allSelected = selected.length === carriers.length;
    return <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <Checkbox id="select-all" checked={allSelected ? true : selected.length > 0 ? 'indeterminate' : false} onCheckedChange={value => setSelected(value === true ? carriers : [])} />
                    <Label htmlFor="select-all">Select all carriers</Label>
                </div>
                <div className="ms-6 flex flex-col gap-2">
                    {carriers.map(carrier => <div key={carrier} className="flex items-center gap-2">
                            <Checkbox id={carrier} checked={selected.includes(carrier)} onCheckedChange={value => setSelected(prev => value === true ? [...prev, carrier] : prev.filter(name => name !== carrier))} />
                            <Label htmlFor={carrier}>{carrier}</Label>
                        </div>)}
                </div>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selectAll = canvas.getByRole('checkbox', {
      name: 'Select all carriers'
    });
    await expect(selectAll).toHaveAttribute('aria-checked', 'mixed');
    await userEvent.click(selectAll);
    await expect(canvas.getByRole('checkbox', {
      name: 'Bamboo'
    })).toBeChecked();
  }
}`,...x.parameters?.docs?.source},description:{story:`@summary Parent select-all checkbox governing a group`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="group" data-state="checked">
            <Checkbox aria-label="Select carriers" defaultChecked="indeterminate" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const checkbox = within(canvasElement).getByRole('checkbox', {
      name: 'Select carriers'
    });
    const [check, minus] = checkbox.querySelectorAll('[data-slot=checkbox-indicator] svg');
    await expect(check).not.toBeVisible();
    await expect(minus).toBeVisible();
    await userEvent.click(checkbox);
    await expect(check).toBeVisible();
    await expect(minus).not.toBeVisible();
  }
}`,...S.parameters?.docs?.source},description:{story:`A surrounding selection container must not change the checkbox's own glyph.

@summary Mixed checkbox inside another selected group`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            {[false, true].map(invalid => <div key={String(invalid)} className="flex flex-col gap-4">
                    {[false, true].map(disabled => <div key={String(disabled)} className="flex items-center gap-6">
                            {([false, true, 'indeterminate'] as const).map(checked => <Checkbox key={String(checked)} aria-label={\`\${invalid ? 'Invalid' : 'Valid'} \${disabled ? 'disabled' : 'enabled'} \${checked}\`} checked={checked} disabled={disabled} aria-invalid={invalid} />)}
                        </div>)}
                </div>)}
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const states = [{
      name: 'Valid enabled',
      border: 'rgb(207, 210, 219)',
      fill: 'rgb(36, 36, 36)',
      cursor: 'pointer'
    }, {
      name: 'Valid disabled',
      border: 'rgb(227, 227, 227)',
      fill: 'rgb(205, 205, 205)',
      cursor: 'not-allowed'
    }, {
      name: 'Invalid enabled',
      border: 'rgb(217, 38, 38)',
      fill: 'rgb(217, 38, 38)',
      cursor: 'pointer'
    }, {
      name: 'Invalid disabled',
      border: 'rgb(240, 168, 168)',
      fill: 'rgb(240, 168, 168)',
      cursor: 'not-allowed'
    }];
    for (const state of states) {
      for (const value of ['false', 'true', 'indeterminate']) {
        const checkbox = canvas.getByRole('checkbox', {
          name: \`\${state.name} \${value}\`
        });
        const styles = getComputedStyle(checkbox);
        await expect(checkbox.getBoundingClientRect().width).toBe(16);
        await expect(checkbox.getBoundingClientRect().height).toBe(16);
        await expect(styles.borderRadius).toBe('4px');
        await expect(styles.borderWidth).toBe('1px');
        await expect(styles.backgroundColor).toBe(value === 'false' ? 'rgb(255, 255, 255)' : state.fill);
        await expect(styles.borderColor).toBe(value === 'false' ? state.border : state.fill);
        await expect(styles.cursor).toBe(state.cursor);
      }
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`Preserves the legacy palette and 16px footprint for every value and validation state.

@summary Legacy checkbox colours across all interaction states`,...C.parameters?.docs?.description}}},w=[`Default`,`Checked`,`Indeterminate`,`UncontrolledIndeterminate`,`Disabled`,`Invalid`,`WithLabel`,`Controlled`,`SelectAll`,`InsideSelectedGroup`,`LegacyStates`]})))()}T();export{m as Checked,b as Controlled,p as Default,_ as Disabled,h as Indeterminate,S as InsideSelectedGroup,v as Invalid,C as LegacyStates,x as SelectAll,g as UncontrolledIndeterminate,y as WithLabel,w as __namedExportsOrder,f as default};