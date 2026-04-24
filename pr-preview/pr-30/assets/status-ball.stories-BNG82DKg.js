import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{i as n,n as r,r as i,t as a}from"./lib-XMjO6GLr.js";var o,s,c,l=e((()=>{i(),a(),o=t(),s=n({base:`size-2 rounded-full`,variants:{color:{green:`bg-positive-700`,blue:`bg-blue-600`,yellow:`bg-warning-700`,red:`bg-danger-500`,purple:`bg-purple-500`,pink:`bg-pink-500`,orange:`bg-orange-500`,gray:`bg-slate-300`}},defaultVariants:{color:`gray`}}),c=({color:e,className:t,...n})=>(0,o.jsx)(`div`,{"data-slot":`status-ball`,className:r(s({color:e}),t),...n});try{s.displayName=`statusBallRecipe`,s.__docgenInfo={description:"Style recipe for StatusBall using tailwind-variants. Defines a single `base`\n(a 8px circle via `size-2 rounded-full`) and a `color` variant that swaps the\nbackground token across the 8 legacy palette entries. Consumers typically\nrender `StatusBall` directly; import the recipe only when styling a custom\nelement to match a StatusBall.",displayName:`statusBallRecipe`,props:{color:{defaultValue:null,description:``,name:`color`,required:!1,type:{name:`enum`,value:[{value:`"gray"`},{value:`"green"`},{value:`"blue"`},{value:`"yellow"`},{value:`"red"`},{value:`"purple"`},{value:`"pink"`},{value:`"orange"`}]}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{c.displayName=`StatusBall`,c.__docgenInfo={description:"StatusBall renders a small colored dot used to mark the state of an adjacent\nlabel — things like an appointment's confirmation state, a license's validity,\nor any list-row entry where a single glyph of color conveys the status at a\nglance. Pair it with text; the dot alone is not announced to assistive\ntechnologies, so the surrounding label must carry the meaning.\n\nThe 8 color names (`green`, `blue`, `yellow`, `red`, `purple`, `pink`,\n`orange`, `gray`) map to fixed palette tokens and are intentionally flat —\nconsumers typically resolve a domain-specific status to a color via their\nown lookup table (e.g., `active → green`, `expired → red`).\n\nDo **not** use StatusBall as a progress or loading indicator — reach for\n[Loading](?path=/docs/components-loading--docs) for async state. For\nsection-level alerts with copy, use [Alert](?path=/docs/components-alert--docs)\ninstead.",displayName:`StatusBall`,props:{}}}catch{}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{l(),u=t(),d={title:`Design System/Feedback/StatusBall`,component:c,tags:[`autodocs`],argTypes:{color:{control:`select`,options:[void 0,...[`green`,`blue`,`yellow`,`red`,`purple`,`pink`,`orange`,`gray`]]}},args:{color:`gray`},parameters:{docs:{description:{component:`StatusBall renders a small colored dot that marks the state of an adjacent
label — appointment confirmation, license validity, availability, or any
list row where a single glyph of color communicates status. Pair it with
text; the dot alone is not announced to assistive technologies, so the
surrounding label must carry the meaning.`}}}},f={render:e=>(0,u.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,u.jsx)(c,{...e})})},p={render:()=>(0,u.jsx)(`div`,{className:`grid grid-cols-2 gap-x-8 gap-y-3`,children:[{color:`green`,label:`Active`},{color:`blue`,label:`Scheduled`},{color:`yellow`,label:`Pending`},{color:`red`,label:`Expired`},{color:`purple`,label:`In review`},{color:`pink`,label:`Flagged`},{color:`orange`,label:`Needs attention`},{color:`gray`,label:`Inactive`}].map(({color:e,label:t})=>(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(c,{color:e}),(0,u.jsx)(`span`,{className:`text-sm text-text-default-base-primary`,children:t})]},e))})},m={args:{color:`green`}},h={args:{color:`blue`}},g={args:{color:`yellow`}},_={args:{color:`red`}},v={args:{color:`purple`}},y={args:{color:`pink`}},b={args:{color:`orange`}},x={args:{color:`gray`}},S={render:()=>(0,u.jsx)(`ul`,{className:`w-80 divide-y divide-border-default-base-primary rounded-lg border border-border-default-base-primary bg-bg-default-base-primary`,children:[{color:`green`,name:`Ada Lovelace`,status:`Active`},{color:`yellow`,name:`Grace Hopper`,status:`Pending renewal`},{color:`red`,name:`Alan Turing`,status:`Expired`},{color:`gray`,name:`Katherine Johnson`,status:`Inactive`}].map(e=>(0,u.jsxs)(`li`,{className:`flex items-center gap-3 px-4 py-3`,children:[(0,u.jsx)(c,{color:e.color}),(0,u.jsxs)(`div`,{className:`flex flex-col`,children:[(0,u.jsx)(`span`,{className:`text-sm font-medium text-text-default-base-primary`,children:e.name}),(0,u.jsx)(`span`,{className:`text-xs text-text-default-base-secondary`,children:e.status})]})]},e.name))})},C={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,u.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary`,children:[(0,u.jsx)(c,{color:`green`}),`Active`]}),(0,u.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary`,children:[(0,u.jsx)(c,{color:`yellow`}),`Pending`]}),(0,u.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary`,children:[(0,u.jsx)(c,{color:`red`}),`Expired`]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-2">
            <StatusBall {...args} />
        </div>
}`,...f.parameters?.docs?.source},description:{story:`The default dot — \`color="gray"\` for an unknown or inactive status. Drop
next to a text label to surface state at a glance.

@summary Default gray dot representing an inactive status`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const samples: {
      color: (typeof COLORS)[number];
      label: string;
    }[] = [{
      color: 'green',
      label: 'Active'
    }, {
      color: 'blue',
      label: 'Scheduled'
    }, {
      color: 'yellow',
      label: 'Pending'
    }, {
      color: 'red',
      label: 'Expired'
    }, {
      color: 'purple',
      label: 'In review'
    }, {
      color: 'pink',
      label: 'Flagged'
    }, {
      color: 'orange',
      label: 'Needs attention'
    }, {
      color: 'gray',
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
}`,...p.parameters?.docs?.source},description:{story:`All 8 colors rendered in a single grid, each paired with a sample label.
Consumers typically drive the \`color\` prop from a domain-specific
status → color lookup table.

@summary Every color paired with a representative status label`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green'
  }
}`,...m.parameters?.docs?.source},description:{story:`Green dot for positive / active states — the most common pairing for "live"
records such as active licenses or confirmed appointments.

@summary Green dot for positive or active statuses`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'blue'
  }
}`,...h.parameters?.docs?.source},description:{story:`Blue dot for informational or neutral-positive states — e.g., scheduled or
queued records that are progressing normally.

@summary Blue dot for informational statuses`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'yellow'
  }
}`,...g.parameters?.docs?.source},description:{story:`Yellow dot for warning or pending states — e.g., a license approaching
expiration or an appointment awaiting confirmation.

@summary Yellow dot for warning or pending statuses`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'red'
  }
}`,..._.parameters?.docs?.source},description:{story:`Red dot for danger / error / expired states — e.g., an expired license or a
failed payment that blocks progress.

@summary Red dot for danger or error statuses`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'purple'
  }
}`,...v.parameters?.docs?.source},description:{story:`Purple dot for category-specific statuses without a semantic fallback —
often used for "in review" or "under assessment" domain states.

@summary Purple dot for category-specific statuses`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'pink'
  }
}`,...y.parameters?.docs?.source},description:{story:`Pink dot for category-specific statuses — a distinct hue for flagged or
priority domain states that need to stand out from warnings.

@summary Pink dot for flagged or priority statuses`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'orange'
  }
}`,...b.parameters?.docs?.source},description:{story:`Orange dot for attention-worthy states that sit between warning and danger —
e.g., records that need action soon but are not yet failed.

@summary Orange dot for attention-needed statuses`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'gray'
  }
}`,...x.parameters?.docs?.source},description:{story:`Gray dot for inactive, unknown, or default states — the fallback when no
other color applies.

@summary Gray dot for inactive or unknown statuses`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows = [{
      color: 'green',
      name: 'Ada Lovelace',
      status: 'Active'
    }, {
      color: 'yellow',
      name: 'Grace Hopper',
      status: 'Pending renewal'
    }, {
      color: 'red',
      name: 'Alan Turing',
      status: 'Expired'
    }, {
      color: 'gray',
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
                <StatusBall color="green" />
                Active
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
                <StatusBall color="yellow" />
                Pending
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
                <StatusBall color="red" />
                Expired
            </span>
        </div>
}`,...C.parameters?.docs?.source},description:{story:`StatusBall inside a status pill — a tinted badge that pairs the dot with a
label in a single rounded container. Use when the status needs more visual
weight than a bare list row provides.

@summary StatusBall inside a rounded status pill`,...C.parameters?.docs?.description}}},w=[`Default`,`Colors`,`Green`,`Blue`,`Yellow`,`Red`,`Purple`,`Pink`,`Orange`,`Gray`,`InList`,`InPill`]}))();export{h as Blue,p as Colors,f as Default,x as Gray,m as Green,S as InList,C as InPill,b as Orange,y as Pink,v as Purple,_ as Red,g as Yellow,w as __namedExportsOrder,d as default};