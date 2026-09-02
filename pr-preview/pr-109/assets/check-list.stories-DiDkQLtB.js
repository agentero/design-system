import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./dist-xs6gOf1u.js";var i,a,o=e((()=>{i=t(),a=e=>(0,i.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,i.jsx)(`path`,{fill:`currentColor`,d:`M9.54988 15.5154L18.1884 6.87695C18.3371 6.72824 18.5137 6.65227 18.7182 6.64905C18.9226 6.64585 19.1024 6.72182 19.2576 6.87695C19.4127 7.03207 19.4903 7.21027 19.4903 7.41155C19.4903 7.61282 19.4127 7.79102 19.2576 7.94615L10.1826 17.0211C10.0018 17.2019 9.7909 17.2923 9.54988 17.2923C9.30887 17.2923 9.09798 17.2019 8.91721 17.0211L4.74221 12.8462C4.59349 12.6974 4.52009 12.5208 4.52201 12.3164C4.52394 12.1119 4.60247 11.9321 4.75758 11.777C4.91272 11.6218 5.09092 11.5443 5.29218 11.5443C5.49347 11.5443 5.67167 11.6218 5.82678 11.777L9.54988 15.5154Z`})});try{a.displayName=`IconCheck`,a.__docgenInfo={description:``,displayName:`IconCheck`,filePath:`/home/runner/work/design-system/design-system/src/check-list/icons.tsx`,methods:[],props:{},tags:{}}}catch{}})),s,c,l,u,d,f=e((()=>{r(),o(),s=t(),c=n({slots:{root:`flex flex-col gap-1.5 text-sm text-text-default-base-primary`,item:`flex items-start gap-2`,icon:`relative top-[0.125em] size-[1.25em] shrink-0`}}),l=c(),u=({className:e,...t})=>(0,s.jsx)(`ul`,{"data-slot":`check-list`,className:l.root({className:e}),...t}),u.displayName=`CheckList.Root`,d=({className:e,children:t,...n})=>(0,s.jsxs)(`li`,{"data-slot":`check-list-item`,className:l.item({className:e}),...n,children:[(0,s.jsx)(a,{className:l.icon(),"aria-hidden":!0}),t]}),d.displayName=`CheckList.Item`;try{c.displayName=`CheckList.Root`,c.__docgenInfo={description:``,displayName:`CheckList.Root`,filePath:`/home/runner/work/design-system/design-system/src/check-list/check-list.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{d.displayName=`CheckList.Item`,d.__docgenInfo={description:``,displayName:`CheckList.Item`,filePath:`/home/runner/work/design-system/design-system/src/check-list/check-list.tsx`,methods:[],props:{},tags:{summary:`List row with a leading check icon`}}}catch{}})),p,m=e((()=>{f(),p={Root:u,Item:d}})),h,g,_,v,y,b,x;e((()=>{m(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/CheckList`,component:p.Root,tags:[`autodocs`],parameters:{docs:{description:{component:`CheckList renders a vertical list where every row is marked with a check
icon. Purely presentational — for interactive selection use a checkbox group.`}}}},y={render:()=>(0,h.jsxs)(p.Root,{children:[(0,h.jsx)(p.Item,{children:`Instant appointment`}),(0,h.jsx)(p.Item,{children:`Bind with Agentero`}),(0,h.jsx)(p.Item,{children:`Available in the Agentero rater`})]}),play:async({canvasElement:e})=>{let t=_(e),n=t.getAllByRole(`listitem`);await g(t.getByRole(`list`)).toBeInTheDocument(),await g(n).toHaveLength(3),await g(n[0].querySelector(`svg`)).toHaveAttribute(`aria-hidden`)}},b={render:()=>(0,h.jsx)(`div`,{className:`w-72`,children:(0,h.jsxs)(p.Root,{children:[(0,h.jsx)(p.Item,{children:(0,h.jsx)(`a`,{href:`#quoting`,className:`underline`,children:`Agentero rater`})}),(0,h.jsx)(p.Item,{children:`Longer descriptions wrap under their own text while the check stays aligned to the first line.`})]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Plain text rows with a leading check.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Items accept rich content — links, wrapped text, custom markup.`,...b.parameters?.docs?.description}}},x=[`Default`,`RichContent`]}))();export{y as Default,b as RichContent,x as __namedExportsOrder,v as default};