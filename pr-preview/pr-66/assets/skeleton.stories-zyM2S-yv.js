import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./dist-xs6gOf1u.js";var i,a,o,s=e((()=>{r(),i=t(),a=n({base:`animate-pulse rounded-sm bg-bg-default-base-tertiary motion-reduce:animate-none`}),o=({className:e,...t})=>(0,i.jsx)(`div`,{"data-slot":`skeleton`,"aria-hidden":`true`,...t,className:a({className:e})}),o.displayName=`Skeleton`;try{a.displayName=`skeletonRecipe`,a.__docgenInfo={description:``,displayName:`skeletonRecipe`,props:{class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{o.displayName=`Skeleton`,o.__docgenInfo={description:"Skeleton renders a pulsing placeholder box while content loads. Size and\nshape it with Tailwind classes (`h-4 w-30`, `size-10 rounded-full`) to\nmirror the content it stands in for. Hidden from assistive technologies.",displayName:`Skeleton`,props:{}}}catch{}})),c,l,u,d,f,p,m,h,g;e((()=>{s(),c=t(),{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Skeleton`,component:o,tags:[`autodocs`],argTypes:{className:{control:`text`}},args:{className:`h-4 w-40`},parameters:{docs:{description:{component:`Skeleton renders a pulsing placeholder box while content loads. Size and
shape it with Tailwind classes to mirror the content it stands in for.`}}}},f={play:async({canvasElement:e})=>{let t=u(e),n=e.querySelector(`[data-slot="skeleton"]`);await l(n).toBeInTheDocument(),await l(n).toHaveAttribute(`aria-hidden`,`true`),await l(t.queryByRole(`generic`,{hidden:!1,name:/./})).toBeNull()}},p={render:()=>(0,c.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,c.jsx)(o,{className:`h-4 w-full`}),(0,c.jsx)(o,{className:`h-4 w-full`}),(0,c.jsx)(o,{className:`h-4 w-2/3`})]})},m={render:()=>(0,c.jsxs)(`div`,{className:`flex w-80 items-center gap-3`,children:[(0,c.jsx)(o,{className:`size-10 shrink-0 rounded-full`}),(0,c.jsxs)(`div`,{className:`flex w-full flex-col gap-2`,children:[(0,c.jsx)(o,{className:`h-4 w-1/2`}),(0,c.jsx)(o,{className:`h-3 w-3/4`})]})]})},h={render:()=>(0,c.jsxs)(`div`,{className:`flex w-80 flex-col gap-3 rounded-lg border border-border-default-base-primary p-4`,children:[(0,c.jsx)(o,{className:`h-32 w-full rounded-md`}),(0,c.jsx)(o,{className:`h-5 w-1/2`}),(0,c.jsx)(o,{className:`h-4 w-full`}),(0,c.jsx)(o,{className:`h-4 w-2/3`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvasElement.querySelector('[data-slot="skeleton"]');
    await expect(skeleton).toBeInTheDocument();
    await expect(skeleton).toHaveAttribute('aria-hidden', 'true');
    await expect(canvas.queryByRole('generic', {
      hidden: false,
      name: /./
    })).toBeNull();
  }
}`,...f.parameters?.docs?.source},description:{story:"Default placeholder box, sized via `className`; hidden from assistive technologies.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
        </div>
}`,...p.parameters?.docs?.source},description:{story:`Compose plain skeletons to sketch the loading shape of real content.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 items-center gap-3">
            <Skeleton className="size-10 shrink-0 rounded-full" />
            <div className="flex w-full flex-col gap-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
            </div>
        </div>
}`,...m.parameters?.docs?.source},description:{story:"`rounded-full` for avatars; pair with text lines for a list-item placeholder.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-3 rounded-lg border border-border-default-base-primary p-4">
            <Skeleton className="h-32 w-full rounded-md" />
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
        </div>
}`,...h.parameters?.docs?.source},description:{story:`A card-shaped placeholder: media area, title, and body lines.`,...h.parameters?.docs?.description}}},g=[`Default`,`TextBlock`,`ListItem`,`Card`]}))();export{h as Card,f as Default,m as ListItem,p as TextBlock,g as __namedExportsOrder,d as default};