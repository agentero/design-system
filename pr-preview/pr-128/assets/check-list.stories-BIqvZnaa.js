import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./check-B523JULt.js";import{n as i,t as a}from"./dist-C8AlzbfS.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),o=t(),s=i({slots:{root:`flex flex-col gap-1.5 text-sm text-text-default-base-primary`,item:`flex items-start gap-2`,icon:`relative top-[0.25em] size-[1em] shrink-0`}}),c=s(),l=({className:e,...t})=>(0,o.jsx)(`ul`,{"data-slot":`check-list`,className:c.root({className:e}),...t}),l.displayName=`CheckList.Root`,u=({className:e,children:t,...n})=>(0,o.jsxs)(`li`,{"data-slot":`check-list-item`,className:c.item({className:e}),...n,children:[(0,o.jsx)(r,{className:c.icon(),"aria-hidden":!0}),t]}),u.displayName=`CheckList.Item`;try{s.displayName=`CheckList.Root`,s.__docgenInfo={description:``,displayName:`CheckList.Root`,filePath:`/home/runner/work/design-system/design-system/src/check-list/check-list.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{u.displayName=`CheckList.Item`,u.__docgenInfo={description:``,displayName:`CheckList.Item`,filePath:`/home/runner/work/design-system/design-system/src/check-list/check-list.tsx`,methods:[],props:{},tags:{summary:`List row with a leading check icon`}}}catch{}})))()}var f;function p(){return(p=e((()=>{d(),f={Root:l,Item:u}})))()}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/CheckList`,component:f.Root,tags:[`autodocs`],parameters:{docs:{description:{component:`CheckList renders a vertical list where every row is marked with a check
icon. Purely presentational — for interactive selection use a checkbox group.`}}}},v={render:()=>(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(f.Item,{children:`Instant appointment`}),(0,m.jsx)(f.Item,{children:`Bind with Agentero`}),(0,m.jsx)(f.Item,{children:`Available in the Agentero rater`})]}),play:async({canvasElement:e})=>{let t=g(e),n=t.getAllByRole(`listitem`);await h(t.getByRole(`list`)).toBeInTheDocument(),await h(n).toHaveLength(3),await h(n[0].querySelector(`svg`)).toHaveAttribute(`aria-hidden`)}},y={render:()=>(0,m.jsx)(`div`,{className:`w-72`,children:(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(f.Item,{children:(0,m.jsx)(`a`,{href:`#quoting`,className:`underline`,children:`Agentero rater`})}),(0,m.jsx)(f.Item,{children:`Longer descriptions wrap under their own text while the check stays aligned to the first line.`})]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <CheckList.Root>
            <CheckList.Item>Instant appointment</CheckList.Item>
            <CheckList.Item>Bind with Agentero</CheckList.Item>
            <CheckList.Item>Available in the Agentero rater</CheckList.Item>
        </CheckList.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const items = canvas.getAllByRole('listitem');
    await expect(canvas.getByRole('list')).toBeInTheDocument();
    await expect(items).toHaveLength(3);
    await expect(items[0]!.querySelector('svg')).toHaveAttribute('aria-hidden');
  }
}`,...v.parameters?.docs?.source},description:{story:`Plain text rows with a leading check.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <CheckList.Root>
                <CheckList.Item>
                    <a href="#quoting" className="underline">
                        Agentero rater
                    </a>
                </CheckList.Item>
                <CheckList.Item>
                    Longer descriptions wrap under their own text while the check stays aligned to the first
                    line.
                </CheckList.Item>
            </CheckList.Root>
        </div>
}`,...y.parameters?.docs?.source},description:{story:`Items accept rich content — links, wrapped text, custom markup.`,...y.parameters?.docs?.description}}},b=[`Default`,`RichContent`]})))()}x();export{v as Default,y as RichContent,b as __namedExportsOrder,_ as default};