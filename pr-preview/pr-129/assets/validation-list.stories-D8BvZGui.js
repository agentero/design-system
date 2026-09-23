import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Bpb4HYgt.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./dist-C8AlzbfS.js";var a,o,s,c,l;function u(){return(u=e((()=>{i(),a=n(),o=r({slots:{root:`ml-4 flex list-inside list-disc flex-col gap-1 text-left`,item:`text-sm`},variants:{active:{true:{item:`text-text-default-base-primary`},false:{item:`text-text-default-base-tertiary`}}},defaultVariants:{active:!1}}),s=o(),c=(e,t)=>e instanceof RegExp?new RegExp(e).test(t):e(t),l=({value:e,rules:t,className:n,...r})=>(0,a.jsx)(`ul`,{"data-slot":`validation-list`,className:s.root({className:n}),...r,children:t.map(({text:t,pattern:n})=>{let r=c(n,e);return(0,a.jsx)(`li`,{"data-slot":`validation-list-item`,"data-active":r,className:s.item({active:r}),children:t},t)})});try{o.displayName=`validationListRecipe`,o.__docgenInfo={description:``,displayName:`validationListRecipe`,filePath:`/home/runner/work/design-system/design-system/src/validation-list/validation-list.tsx`,methods:[],props:{active:{defaultValue:null,description:``,name:`active`,required:!1,tags:{},type:{name:`boolean`}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{l.displayName=`ValidationList`,l.__docgenInfo={description:"A checklist of rules that turn active as `value` satisfies them — one `<li>`\nper rule, each matched via a `RegExp` or a `(value) => boolean` predicate.\nPresentational only; pair it with your form validation.",displayName:`ValidationList`,filePath:`/home/runner/work/design-system/design-system/src/validation-list/validation-list.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/validation-list/validation-list.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string`}},rules:{defaultValue:null,declarations:[{fileName:`design-system/src/validation-list/validation-list.tsx`,name:`TypeLiteral`}],description:``,name:`rules`,required:!0,tags:{},type:{name:`ValidationRule[]`}}},tags:{summary:`Checklist of rules that turn active as the value satisfies them`,example:`<ValidationList
	value={password}
	rules={[{ text: 'At least 10 characters', pattern: value => value.length >= 10 }]}
/>`}}}catch{}})))()}var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{d=t(),u(),f=n(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/ValidationList`,component:l,tags:[`autodocs`],argTypes:{value:{control:`text`}},parameters:{docs:{description:{component:"ValidationList renders a bulleted checklist of rules that light up as a value\nsatisfies them. Each rule's `pattern` is a `RegExp` or a predicate\n`(value) => boolean`, so character-class checks and arbitrary logic (length,\nmembership, …) live in the same list. It is presentational — pair it with\nyour form validation; it does not own the input or block submission."}}}},g=[{text:`At least one uppercase letter`,pattern:/[A-Z]/},{text:`At least one lowercase letter`,pattern:/[a-z]/},{text:`At least one number`,pattern:/[0-9]/},{text:`At least one symbol`,pattern:/[.,\-_&%$!/[\]{}@#|\\]/},{text:`At least 10 characters`,pattern:e=>e.length>=10}],_={args:{value:`Password1234.`,rules:g},play:async({canvasElement:e})=>{let t=m(e).getAllByRole(`listitem`);await p(t).toHaveLength(g.length);for(let e of t)await p(e).toHaveAttribute(`data-active`,`true`),await p(e).toHaveClass(`text-text-default-base-primary`)}},v={args:{value:``,rules:g},play:async({canvasElement:e})=>{let t=m(e).getAllByRole(`listitem`);for(let e of t)await p(e).toHaveAttribute(`data-active`,`false`),await p(e).toHaveClass(`text-text-default-base-tertiary`)}},y={args:{value:`Aa1.`,rules:g},play:async({canvasElement:e})=>{let t=m(e).getAllByRole(`listitem`);await p(t[0]).toHaveAttribute(`data-active`,`true`),await p(t[4]).toHaveAttribute(`data-active`,`false`)}},b={args:{value:``,rules:g},render:e=>{let[t,n]=(0,d.useState)(``);return(0,f.jsxs)(`div`,{className:`flex w-100 flex-col gap-4`,children:[(0,f.jsx)(`input`,{type:`text`,value:t,placeholder:`Type a password…`,onChange:e=>n(e.target.value),className:`rounded-md border border-border-default-base-primary px-3 py-2 text-sm`}),(0,f.jsx)(l,{...e,value:t})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Password1234.',
    rules
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const items = canvas.getAllByRole('listitem');
    await expect(items).toHaveLength(rules.length);
    for (const item of items) {
      await expect(item).toHaveAttribute('data-active', 'true');
      await expect(item).toHaveClass('text-text-default-base-primary');
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`A partially-satisfied value: some rules are active, some are still unmet.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    rules
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const items = canvas.getAllByRole('listitem');
    for (const item of items) {
      await expect(item).toHaveAttribute('data-active', 'false');
      await expect(item).toHaveClass('text-text-default-base-tertiary');
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Empty value: every rule is unmet, so all items render in the tertiary color.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Aa1.',
    rules
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const items = canvas.getAllByRole('listitem');
    await expect(items[0]).toHaveAttribute('data-active', 'true');
    await expect(items[4]).toHaveAttribute('data-active', 'false');
  }
}`,...y.parameters?.docs?.source},description:{story:`A value that satisfies the regex rules but not the length predicate.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    rules
  },
  render: args => {
    const [value, setValue] = useState('');
    return <div className="flex w-100 flex-col gap-4">
                <input type="text" value={value} placeholder="Type a password…" onChange={event => setValue(event.target.value)} className="rounded-md border border-border-default-base-primary px-3 py-2 text-sm" />
                <ValidationList {...args} value={value} />
            </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Wire the value to an input to watch the list update on every keystroke.`,...b.parameters?.docs?.description}}},x=[`Default`,`NoneMet`,`PartiallyMet`,`Playground`]})))()}S();export{_ as Default,v as NoneMet,y as PartiallyMet,b as Playground,x as __namedExportsOrder,h as default};