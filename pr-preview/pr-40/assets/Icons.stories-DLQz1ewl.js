import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,r}from"./icons-B8NXXz4h.js";var i,a,o,s,c;e((()=>{r(),i=t(),a=Object.entries(n).filter(([e,t])=>e.startsWith(`Icon`)&&typeof t==`function`),o={title:`Icons/Gallery`,argTypes:{size:{control:{type:`number`,min:16,max:96,step:4}}},args:{size:24},parameters:{docs:{description:{component:"Visual gallery of every icon exported from `@agentero/design-system/icons`.\nEach icon is auto-discovered from the package's public exports — drop a new\nSVG into `src/icons/svg/`, add a line to `src/icons/index.ts`, and it shows\nup here on the next build.\n\n@summary Auto-discovered grid of all design-system icons"}}}},s={render:({size:e})=>(0,i.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 p-4 text-text-default-base-primary`,children:a.map(([t,n])=>(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2 rounded-md border border-border-default-base-primary p-4 [&_path]:fill-current`,children:[(0,i.jsx)(n,{width:e,height:e}),(0,i.jsx)(`code`,{className:`text-xs`,children:t})]},t))})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    size
  }) => <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 p-4 text-text-default-base-primary">
            {icons.map(([name, Icon]) => <div key={name} className="flex flex-col items-center gap-2 rounded-md border border-border-default-base-primary p-4 [&_path]:fill-current">
                    <Icon width={size} height={size} />
                    <code className="text-xs">{name}</code>
                </div>)}
        </div>
}`,...s.parameters?.docs?.source},description:{story:`Renders one card per exported icon with its component name underneath.
Use the \`size\` control to verify icons scale cleanly across the supported
range.

@summary Auto-discovered icon grid with a size scrubber`,...s.parameters?.docs?.description}}},c=[`Gallery`]}))();export{s as Gallery,c as __namedExportsOrder,o as default};