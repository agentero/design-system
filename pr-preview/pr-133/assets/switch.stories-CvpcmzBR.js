import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CPLHRcKx.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./switch-DLBs9jOM.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a=t(),r(),o=n(),s={title:`Components/Switch`,component:i,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`]},checked:{control:`boolean`},disabled:{control:`boolean`}},args:{size:`md`,disabled:!1},parameters:{docs:{description:{component:`Two-state toggle for a setting that takes effect immediately. Prefer it over
a Checkbox for a single boolean that applies instantly, and pair it with a
\`<label htmlFor>\` to give it an accessible name.`}}}},c={args:{defaultChecked:!0,"aria-label":`Toggle setting`}},l={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{id:`size-sm`,size:`sm`,defaultChecked:!0}),(0,o.jsx)(`label`,{htmlFor:`size-sm`,className:`text-sm text-text-default-base-primary`,children:`Small`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{id:`size-md`,size:`md`,defaultChecked:!0}),(0,o.jsx)(`label`,{htmlFor:`size-md`,className:`text-sm text-text-default-base-primary`,children:`Medium`})]})]})},u={render:e=>(0,o.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,o.jsx)(i,{...e,defaultChecked:!1,"aria-label":`Off`}),(0,o.jsx)(i,{...e,defaultChecked:!0,"aria-label":`On`})]})},d={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,o.jsx)(i,{disabled:!0,"aria-label":`Disabled off`}),(0,o.jsx)(i,{disabled:!0,defaultChecked:!0,"aria-label":`Disabled on`})]})},f={render:()=>{let[e,t]=(0,a.useState)(!1);return(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{id:`controlled`,checked:e,onCheckedChange:t}),(0,o.jsxs)(`label`,{htmlFor:`controlled`,className:`text-sm text-text-default-base-primary`,children:[`Notifications `,e?`on`:`off`]})]})}},p={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,o.jsx)(i,{id:`with-label`,label:`Email`,defaultChecked:!0}),(0,o.jsx)(i,{id:`with-label-reverse`,label:`SMS`,reverse:!0})]})},m={render:()=>(0,o.jsxs)(`div`,{className:`flex w-80 items-center justify-between gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-4`,children:[(0,o.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,o.jsx)(`label`,{htmlFor:`marketing`,className:`text-sm font-medium text-text-default-base-primary`,children:`Marketing emails`}),(0,o.jsx)(`p`,{className:`text-xs text-text-default-base-secondary`,children:`Receive product updates and offers.`})]}),(0,o.jsx)(i,{id:`marketing`,defaultChecked:!0})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    'aria-label': 'Toggle setting'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"The `sm` and `md` sizes compared.",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-6">
            <Switch {...args} defaultChecked={false} aria-label="Off" />
            <Switch {...args} defaultChecked aria-label="On" />
        </div>
}`,...u.parameters?.docs?.source},description:{story:`Unchecked and checked tracks.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
            <Switch disabled aria-label="Disabled off" />
            <Switch disabled defaultChecked aria-label="Disabled on" />
        </div>
}`,...d.parameters?.docs?.source},description:{story:`Disabled switches are dimmed and reject pointer and keyboard interaction.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return <div className="flex items-center gap-2">
                <Switch id="controlled" checked={enabled} onCheckedChange={setEnabled} />
                <label htmlFor="controlled" className="text-sm text-text-default-base-primary">
                    Notifications {enabled ? 'on' : 'off'}
                </label>
            </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Controlled switch wired to component state via `checked` + `onCheckedChange`.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
            <Switch id="with-label" label="Email" defaultChecked />
            <Switch id="with-label-reverse" label="SMS" reverse />
        </div>
}`,...p.parameters?.docs?.source},description:{story:"The built-in `label` prop renders an associated text label beside the toggle\n(wired via `htmlFor`/`id`); `reverse` places the label before the toggle.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Switch aligned in a labelled settings row.`,...m.parameters?.docs?.description}}},h=[`Default`,`Sizes`,`States`,`Disabled`,`Controlled`,`WithLabel`,`SettingRow`]})))()}g();export{f as Controlled,c as Default,d as Disabled,m as SettingRow,l as Sizes,u as States,p as WithLabel,h as __namedExportsOrder,s as default};