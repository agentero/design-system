import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./icons-BmomCrpT.js";var i,a,o,s,c;e((()=>{n(),i=t(),a=Object.entries(r).filter(([e,t])=>e.startsWith(`Icon`)&&t!=null),o={title:`Components/Icons`,argTypes:{size:{control:{type:`number`,min:16,max:96,step:4}}},args:{size:24},parameters:{docs:{description:{component:"Auto-discovering gallery of every icon exported from\n`@agentero/design-system/icons`. New icons appear here automatically once\nthey're added to `src/icons/manifest.json` and `yarn gen:icons` is run —\nno per-icon story files needed."}}}},s={render:({size:e})=>(0,i.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 p-4 text-text-default-base-primary`,children:a.map(([t,n])=>(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2 rounded-lg border border-border-default-base-primary p-4`,children:[(0,i.jsx)(n,{size:e}),(0,i.jsx)(`code`,{className:`text-xs text-text-default-base-secondary`,children:t})]},t))})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    size
  }) => <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 p-4 text-text-default-base-primary">
            {icons.map(([name, Icon]) => <div key={name} className="flex flex-col items-center gap-2 rounded-lg border border-border-default-base-primary p-4">
                    <Icon size={size} />
                    <code className="text-xs text-text-default-base-secondary">{name}</code>
                </div>)}
        </div>
}`,...s.parameters?.docs?.source},description:{story:`Renders every shared icon at the chosen pixel size. Colors inherit from the
surrounding \`text-*\` utility — the wrapper here uses
\`text-text-default-base-primary\` so the gallery picks up the theme token.

@summary Auto-discovering grid of all shared icons`,...s.parameters?.docs?.description}}},c=[`Gallery`]}))();export{s as Gallery,c as __namedExportsOrder,o as default};