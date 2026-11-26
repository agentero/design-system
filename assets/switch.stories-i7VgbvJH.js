import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-sbcZ4iqt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./switch-DEQ-RMOg.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{a=t(),r(),o=n(),{expect:s,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Switch`,component:i,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`]},checked:{control:`boolean`},disabled:{control:`boolean`}},args:{size:`md`,disabled:!1},parameters:{docs:{description:{component:`Two-state toggle for a setting that takes effect immediately. Prefer it over
a Checkbox for a single boolean that applies instantly, and pair it with a
\`<label htmlFor>\` to give it an accessible name.`}}}},d={args:{defaultChecked:!0,"aria-label":`Toggle setting`}},f={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{id:`size-sm`,size:`sm`,defaultChecked:!0}),(0,o.jsx)(`label`,{htmlFor:`size-sm`,className:`text-sm text-text-default-base-primary`,children:`Small`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{id:`size-md`,size:`md`,defaultChecked:!0}),(0,o.jsx)(`label`,{htmlFor:`size-md`,className:`text-sm text-text-default-base-primary`,children:`Medium`})]})]})},p={render:e=>(0,o.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,o.jsx)(i,{...e,defaultChecked:!1,"aria-label":`Off`}),(0,o.jsx)(i,{...e,defaultChecked:!0,"aria-label":`On`})]})},m={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,o.jsx)(i,{disabled:!0,"aria-label":`Disabled off`}),(0,o.jsx)(i,{disabled:!0,defaultChecked:!0,"aria-label":`Disabled on`})]})},h={render:()=>{let[e,t]=(0,a.useState)(!1);return(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{id:`controlled`,checked:e,onCheckedChange:t}),(0,o.jsxs)(`label`,{htmlFor:`controlled`,className:`text-sm text-text-default-base-primary`,children:[`Notifications `,e?`on`:`off`]})]})}},g={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,o.jsx)(i,{id:`with-label`,label:`Email`,defaultChecked:!0}),(0,o.jsx)(i,{id:`with-label-reverse`,label:`SMS`,reverse:!0})]})},_={render:()=>(0,o.jsx)(i,{id:`read-only`,label:`Instant appointments`,defaultChecked:!0,readOnly:!0}),play:async({canvasElement:e})=>{let t=l(e).getByRole(`switch`,{name:`Instant appointments`});await s(t).toHaveAttribute(`aria-readonly`,`true`),await s(t).toBeChecked(),await c.click(t),await s(t).toBeChecked(),await c.keyboard(` `),await s(t).toHaveFocus(),await s(t).toBeChecked()}},v={render:()=>(0,o.jsxs)(`div`,{className:`flex w-80 items-center justify-between gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-4`,children:[(0,o.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,o.jsx)(`label`,{htmlFor:`marketing`,className:`text-sm font-medium text-text-default-base-primary`,children:`Marketing emails`}),(0,o.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Receive product updates and offers.`})]}),(0,o.jsx)(i,{id:`marketing`,defaultChecked:!0})]})},y=[`Default`,`Sizes`,`States`,`Disabled`,`Controlled`,`WithLabel`,`ReadOnly`,`SettingRow`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    'aria-label': 'Toggle setting'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <Switch id="size-sm" size="sm" defaultChecked />
                <label htmlFor="size-sm" className="text-sm text-text-default-base-primary">
                    Small
                </label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="size-md" size="md" defaultChecked />
                <label htmlFor="size-md" className="text-sm text-text-default-base-primary">
                    Medium
                </label>
            </div>
        </div>
}`,...f.parameters?.docs?.source},description:{story:"The `sm` and `md` sizes compared.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-6">
            <Switch {...args} defaultChecked={false} aria-label="Off" />
            <Switch {...args} defaultChecked aria-label="On" />
        </div>
}`,...p.parameters?.docs?.source},description:{story:`Unchecked and checked tracks.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
            <Switch disabled aria-label="Disabled off" />
            <Switch disabled defaultChecked aria-label="Disabled on" />
        </div>
}`,...m.parameters?.docs?.source},description:{story:`Disabled switches are dimmed and reject pointer and keyboard interaction.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return <div className="flex items-center gap-2">
                <Switch id="controlled" checked={enabled} onCheckedChange={setEnabled} />
                <label htmlFor="controlled" className="text-sm text-text-default-base-primary">
                    Notifications {enabled ? 'on' : 'off'}
                </label>
            </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:"Controlled switch wired to component state via `checked` + `onCheckedChange`.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
            <Switch id="with-label" label="Email" defaultChecked />
            <Switch id="with-label-reverse" label="SMS" reverse />
        </div>
}`,...g.parameters?.docs?.source},description:{story:"The built-in `label` prop renders an associated text label beside the toggle\n(wired via `htmlFor`/`id`); `reverse` places the label before the toggle.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Switch id="read-only" label="Instant appointments" defaultChecked readOnly />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Instant appointments'
    });
    await expect(toggle).toHaveAttribute('aria-readonly', 'true');
    await expect(toggle).toBeChecked();
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
    await userEvent.keyboard(' ');
    await expect(toggle).toHaveFocus();
    await expect(toggle).toBeChecked();
  }
}`,..._.parameters?.docs?.source},description:{story:`\`readOnly\` keeps the toggle focusable and announced as read-only, but
neither a click nor a key flips it. Use it to show a setting the viewer
cannot change; \`disabled\` takes it out of the tab order instead.

@summary Focusable toggle that does not flip`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 items-center justify-between gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-4">
            <div className="flex flex-col gap-0.5">
                <label htmlFor="marketing" className="text-sm font-medium text-text-default-base-primary">
                    Marketing emails
                </label>
                <p className="text-xs text-text-default-base-secondary">
                    Receive product updates and offers.
                </p>
            </div>
            <Switch id="marketing" defaultChecked />
        </div>
}`,...v.parameters?.docs?.source},description:{story:`Switch aligned in a labelled settings row.`,...v.parameters?.docs?.description}}}})))()}b();export{h as Controlled,d as Default,m as Disabled,_ as ReadOnly,v as SettingRow,f as Sizes,p as States,g as WithLabel,y as __namedExportsOrder,u as default};