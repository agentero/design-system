import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-2-mPl1Vb.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";var o,s,c,l,u,d=e((()=>{a(),o=r(),s=i({slots:{root:`ml-4 flex list-inside list-disc flex-col gap-1 text-left`,item:`text-sm`},variants:{active:{true:{item:`text-text-default-base-primary`},false:{item:`text-text-default-base-tertiary`}}},defaultVariants:{active:!1}}),c=s(),l=(e,t)=>e instanceof RegExp?new RegExp(e).test(t):e(t),u=({value:e,rules:t,className:n,...r})=>(0,o.jsx)(`ul`,{"data-slot":`validation-list`,className:c.root({className:n}),...r,children:t.map(({text:t,pattern:n})=>{let r=l(n,e);return(0,o.jsx)(`li`,{"data-slot":`validation-list-item`,"data-active":r,className:c.item({active:r}),children:t},t)})});try{s.displayName=`validationListRecipe`,s.__docgenInfo={description:``,displayName:`validationListRecipe`,props:{active:{defaultValue:null,description:``,name:`active`,required:!1,type:{name:`boolean`}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{u.displayName=`ValidationList`,u.__docgenInfo={description:"A checklist of rules that turn active as `value` satisfies them — one `<li>`\nper rule, each matched via a `RegExp` or a `(value) => boolean` predicate.\nPresentational only; pair it with your form validation.",displayName:`ValidationList`,props:{value:{defaultValue:null,description:``,name:`value`,required:!0,type:{name:`string`}},rules:{defaultValue:null,description:``,name:`rules`,required:!0,type:{name:`ValidationRule[]`}}}}}catch{}})),f,p,m,h,g,_,v,y,b,x,S;e((()=>{f=t(n(),1),d(),p=r(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/ValidationList`,component:u,tags:[`autodocs`],argTypes:{value:{control:`text`}},parameters:{docs:{description:{component:"ValidationList renders a bulleted checklist of rules that light up as a value\nsatisfies them. Each rule's `pattern` is a `RegExp` or a predicate\n`(value) => boolean`, so character-class checks and arbitrary logic (length,\nmembership, …) live in the same list. It is presentational — pair it with\nyour form validation; it does not own the input or block submission."}}}},_=[{text:`At least one uppercase letter`,pattern:/[A-Z]/},{text:`At least one lowercase letter`,pattern:/[a-z]/},{text:`At least one number`,pattern:/[0-9]/},{text:`At least one symbol`,pattern:/[.,\-_&%$!/[\]{}@#|\\]/},{text:`At least 10 characters`,pattern:e=>e.length>=10}],v={args:{value:`Password1234.`,rules:_},play:async({canvasElement:e})=>{let t=h(e).getAllByRole(`listitem`);await m(t).toHaveLength(_.length);for(let e of t)await m(e).toHaveAttribute(`data-active`,`true`),await m(e).toHaveClass(`text-text-default-base-primary`)}},y={args:{value:``,rules:_},play:async({canvasElement:e})=>{let t=h(e).getAllByRole(`listitem`);for(let e of t)await m(e).toHaveAttribute(`data-active`,`false`),await m(e).toHaveClass(`text-text-default-base-tertiary`)}},b={args:{value:`Aa1.`,rules:_},play:async({canvasElement:e})=>{let t=h(e).getAllByRole(`listitem`);await m(t[0]).toHaveAttribute(`data-active`,`true`),await m(t[4]).toHaveAttribute(`data-active`,`false`)}},x={args:{value:``,rules:_},render:e=>{let[t,n]=(0,f.useState)(``);return(0,p.jsxs)(`div`,{className:`flex w-100 flex-col gap-4`,children:[(0,p.jsx)(`input`,{type:`text`,value:t,placeholder:`Type a password…`,onChange:e=>n(e.target.value),className:`rounded-md border border-border-default-base-primary px-3 py-2 text-sm`}),(0,p.jsx)(u,{...e,value:t})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`A partially-satisfied value: some rules are active, some are still unmet.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Empty value: every rule is unmet, so all items render in the tertiary color.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`A value that satisfies the regex rules but not the length predicate.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Wire the value to an input to watch the list update on every keystroke.`,...x.parameters?.docs?.description}}},S=[`Default`,`NoneMet`,`PartiallyMet`,`Playground`]}))();export{v as Default,y as NoneMet,b as PartiallyMet,x as Playground,S as __namedExportsOrder,g as default};