import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{i as n,n as r,r as i,t as a}from"./lib-XMjO6GLr.js";var o,s,c,l=e((()=>{i(),a(),o=t(),s=n({base:`size-2 rounded-full`,variants:{color:{success:`bg-bg-status-ball-success`,info:`bg-bg-status-ball-info`,warning:`bg-bg-status-ball-warning`,danger:`bg-bg-status-ball-danger`,creative:`bg-bg-status-ball-creative`,dynamic:`bg-bg-status-ball-dynamic`,playful:`bg-bg-status-ball-playful`,neutral:`bg-bg-status-ball-neutral`}},defaultVariants:{color:`neutral`}}),c=({color:e,className:t,...n})=>(0,o.jsx)(`div`,{"data-slot":`status-ball`,className:r(s({color:e}),t),...n});try{s.displayName=`statusBallRecipe`,s.__docgenInfo={description:"Style recipe for StatusBall using tailwind-variants. Defines a single `base`\n(a 8px circle via `size-2 rounded-full`) and a `color` variant that swaps\nthe background across 8 semantic-intent tokens (`--color-bg-status-ball-*`).\nConsumers typically render `StatusBall` directly; import the recipe only\nwhen styling a custom element to match a StatusBall.",displayName:`statusBallRecipe`,props:{color:{defaultValue:null,description:``,name:`color`,required:!1,type:{name:`enum`,value:[{value:`"neutral"`},{value:`"success"`},{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"creative"`},{value:`"dynamic"`},{value:`"playful"`}]}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{c.displayName=`StatusBall`,c.__docgenInfo={description:"StatusBall renders a small colored dot used to mark the state of an adjacent\nlabel — things like an appointment's confirmation state, a license's validity,\nor any list-row entry where a single glyph of color conveys the status at a\nglance. Pair it with text; the dot alone is not announced to assistive\ntechnologies, so the surrounding label must carry the meaning.\n\nThe 8 intents (`success`, `info`, `warning`, `danger`, `creative`,\n`dynamic`, `playful`, `neutral`) map to semantic tokens\n(`--color-bg-status-ball-*`) and mirror the convention used by\n[Alert](?path=/docs/components-alert--docs). Consumers typically resolve a\ndomain-specific status to an intent via their own lookup table\n(e.g., `active → success`, `expired → danger`).\n\nDo **not** use StatusBall as a progress or loading indicator — reach for\n[Loading](?path=/docs/components-loading--docs) for async state. For\nsection-level alerts with copy, use [Alert](?path=/docs/components-alert--docs)\ninstead.",displayName:`StatusBall`,props:{}}}catch{}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{l(),u=t(),d={title:`Design System/Feedback/StatusBall`,component:c,tags:[`autodocs`],argTypes:{color:{control:`select`,options:[void 0,...[`success`,`info`,`warning`,`danger`,`creative`,`dynamic`,`playful`,`neutral`]]}},args:{color:`neutral`},parameters:{docs:{description:{component:`StatusBall renders a small colored dot that marks the state of an adjacent
label — appointment confirmation, license validity, availability, or any
list row where a single glyph of color communicates status. Pair it with
text; the dot alone is not announced to assistive technologies, so the
surrounding label must carry the meaning.`}}}},f={render:e=>(0,u.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,u.jsx)(c,{...e})})},p={render:()=>(0,u.jsx)(`div`,{className:`grid grid-cols-2 gap-x-8 gap-y-3`,children:[{color:`success`,label:`Active`},{color:`info`,label:`Scheduled`},{color:`warning`,label:`Pending`},{color:`danger`,label:`Expired`},{color:`creative`,label:`In review`},{color:`playful`,label:`Flagged`},{color:`dynamic`,label:`Needs attention`},{color:`neutral`,label:`Inactive`}].map(({color:e,label:t})=>(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(c,{color:e}),(0,u.jsx)(`span`,{className:`text-sm text-text-default-base-primary`,children:t})]},e))})},m={args:{color:`success`}},h={args:{color:`info`}},g={args:{color:`warning`}},_={args:{color:`danger`}},v={args:{color:`creative`}},y={args:{color:`dynamic`}},b={args:{color:`playful`}},x={args:{color:`neutral`}},S={render:()=>(0,u.jsx)(`ul`,{className:`w-80 divide-y divide-border-default-base-primary rounded-lg border border-border-default-base-primary bg-bg-default-base-primary`,children:[{color:`success`,name:`Ada Lovelace`,status:`Active`},{color:`warning`,name:`Grace Hopper`,status:`Pending renewal`},{color:`danger`,name:`Alan Turing`,status:`Expired`},{color:`neutral`,name:`Katherine Johnson`,status:`Inactive`}].map(e=>(0,u.jsxs)(`li`,{className:`flex items-center gap-3 px-4 py-3`,children:[(0,u.jsx)(c,{color:e.color}),(0,u.jsxs)(`div`,{className:`flex flex-col`,children:[(0,u.jsx)(`span`,{className:`text-sm font-medium text-text-default-base-primary`,children:e.name}),(0,u.jsx)(`span`,{className:`text-xs text-text-default-base-secondary`,children:e.status})]})]},e.name))})},C={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,u.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary`,children:[(0,u.jsx)(c,{color:`success`}),`Active`]}),(0,u.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary`,children:[(0,u.jsx)(c,{color:`warning`}),`Pending`]}),(0,u.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary`,children:[(0,u.jsx)(c,{color:`danger`}),`Expired`]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-2">
            <StatusBall {...args} />
        </div>
}`,...f.parameters?.docs?.source},description:{story:`The default dot — \`color="neutral"\` for an unknown or inactive status. Drop
next to a text label to surface state at a glance.

@summary Default neutral dot representing an inactive status`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const samples: {
      color: (typeof INTENTS)[number];
      label: string;
    }[] = [{
      color: 'success',
      label: 'Active'
    }, {
      color: 'info',
      label: 'Scheduled'
    }, {
      color: 'warning',
      label: 'Pending'
    }, {
      color: 'danger',
      label: 'Expired'
    }, {
      color: 'creative',
      label: 'In review'
    }, {
      color: 'playful',
      label: 'Flagged'
    }, {
      color: 'dynamic',
      label: 'Needs attention'
    }, {
      color: 'neutral',
      label: 'Inactive'
    }];
    return <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {samples.map(({
        color,
        label
      }) => <div key={color} className="flex items-center gap-2">
                        <StatusBall color={color} />
                        <span className="text-sm text-text-default-base-primary">{label}</span>
                    </div>)}
            </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`All 8 semantic intents rendered in a single grid, each paired with a sample
label. Consumers typically drive the \`color\` prop from a domain-specific
status → intent lookup table.

@summary Every intent paired with a representative status label`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success'
  }
}`,...m.parameters?.docs?.source},description:{story:`Success dot for positive / active states — the most common pairing for
"live" records such as active licenses or confirmed appointments.

@summary Success dot for positive or active statuses`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info'
  }
}`,...h.parameters?.docs?.source},description:{story:`Info dot for informational or neutral-positive states — e.g., scheduled or
queued records that are progressing normally.

@summary Info dot for informational statuses`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning'
  }
}`,...g.parameters?.docs?.source},description:{story:`Warning dot for pending states or records approaching a deadline — e.g., a
license nearing expiration or an appointment awaiting confirmation.

@summary Warning dot for pending or approaching-deadline statuses`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'danger'
  }
}`,..._.parameters?.docs?.source},description:{story:`Danger dot for error / expired / blocking states — e.g., an expired license
or a failed payment that blocks progress.

@summary Danger dot for error or expired statuses`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'creative'
  }
}`,...v.parameters?.docs?.source},description:{story:`Creative dot for category-specific statuses without a direct success/info/
warning/danger mapping — often used for "in review" or "under assessment"
domain states.

@summary Creative dot for category-specific statuses`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'dynamic'
  }
}`,...y.parameters?.docs?.source},description:{story:`Dynamic dot for attention-worthy states that sit between warning and
danger — e.g., records that need action soon but are not yet failed.

@summary Dynamic dot for attention-needed statuses`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'playful'
  }
}`,...b.parameters?.docs?.source},description:{story:`Playful dot for flagged or priority domain states that need to stand out
from warnings with a distinct hue.

@summary Playful dot for flagged or priority statuses`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  }
}`,...x.parameters?.docs?.source},description:{story:`Neutral dot for inactive, unknown, or default states — the fallback when no
other intent applies.

@summary Neutral dot for inactive or unknown statuses`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows = [{
      color: 'success',
      name: 'Ada Lovelace',
      status: 'Active'
    }, {
      color: 'warning',
      name: 'Grace Hopper',
      status: 'Pending renewal'
    }, {
      color: 'danger',
      name: 'Alan Turing',
      status: 'Expired'
    }, {
      color: 'neutral',
      name: 'Katherine Johnson',
      status: 'Inactive'
    }] as const;
    return <ul className="w-80 divide-y divide-border-default-base-primary rounded-lg border border-border-default-base-primary bg-bg-default-base-primary">
                {rows.map(row => <li key={row.name} className="flex items-center gap-3 px-4 py-3">
                        <StatusBall color={row.color} />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-text-default-base-primary">{row.name}</span>
                            <span className="text-xs text-text-default-base-secondary">{row.status}</span>
                        </div>
                    </li>)}
            </ul>;
  }
}`,...S.parameters?.docs?.source},description:{story:`StatusBall inside a list row — the canonical production usage, mirroring
the appointment and license list patterns in \`producerflow/mono\`. Each row
pairs a dot with a label and supporting text.

@summary StatusBall paired with labels inside a list`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
                <StatusBall color="success" />
                Active
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
                <StatusBall color="warning" />
                Pending
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
                <StatusBall color="danger" />
                Expired
            </span>
        </div>
}`,...C.parameters?.docs?.source},description:{story:`StatusBall inside a status pill — a tinted badge that pairs the dot with a
label in a single rounded container. Use when the status needs more visual
weight than a bare list row provides.

@summary StatusBall inside a rounded status pill`,...C.parameters?.docs?.description}}},w=[`Default`,`Intents`,`Success`,`Info`,`Warning`,`Danger`,`Creative`,`Dynamic`,`Playful`,`Neutral`,`InList`,`InPill`]}))();export{v as Creative,_ as Danger,f as Default,y as Dynamic,S as InList,C as InPill,h as Info,p as Intents,x as Neutral,b as Playful,m as Success,g as Warning,w as __namedExportsOrder,d as default};