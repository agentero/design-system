import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-B8K5-8Wc.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{n as o,t as s}from"./dist-lJLYNX0h2.js";import{r as c,t as l}from"./dist-tp4P39CL2.js";function u(e,t){return`${Math.round(e/t*100)}%`}function d(e,t){return e==null?`indeterminate`:e===t?`complete`:`loading`}function f(e){return typeof e==`number`}function p(e){return f(e)&&!isNaN(e)&&e>0}function m(e,t){return f(e)&&!isNaN(e)&&e<=t&&e>=0}function h(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${b}\`.`}function g(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${b} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var _,v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{_=t(n(),1),o(),c(),v=r(),y=`Progress`,b=100,[x,S]=s(y),[C,w]=x(y),T=_.forwardRef((e,t)=>{let{__scopeProgress:n,value:r=null,max:i,getValueLabel:a=u,...o}=e;(i||i===0)&&!p(i)&&console.error(h(`${i}`,`Progress`));let s=p(i)?i:b;r!==null&&!m(r,s)&&console.error(g(`${r}`,`Progress`));let c=m(r,s)?r:null,_=f(c)?a(c,s):void 0;return(0,v.jsx)(C,{scope:n,value:c,max:s,children:(0,v.jsx)(l.div,{"aria-valuemax":s,"aria-valuemin":0,"aria-valuenow":f(c)?c:void 0,"aria-valuetext":_,role:`progressbar`,"data-state":d(c,s),"data-value":c??void 0,"data-max":s,...o,ref:t})})}),T.displayName=y,E=`ProgressIndicator`,D=_.forwardRef((e,t)=>{let{__scopeProgress:n,...r}=e,i=w(E,n);return(0,v.jsx)(l.div,{"data-state":d(i.value,i.max),"data-value":i.value??void 0,"data-max":i.max,...r,ref:t})}),D.displayName=E,O=T,k=D})),j,M,N,P,F=e((()=>{j=t(n(),1),A(),a(),M=r(),N=i({slots:{root:`flex flex-col gap-2`,track:`relative h-2 w-full overflow-hidden rounded-sm bg-neutrals-200 text-neutrals-900`,indicator:`size-full bg-current transition-transform duration-600 ease-in-out motion-reduce:transition-none`,labelRow:`flex items-center justify-between gap-2`,label:`text-sm text-text-default-base-primary`,value:`text-base text-text-default-base-primary`}}),P=({percentage:e,label:t,"aria-label":n,className:r})=>{let i=(0,j.useId)(),a=N(),o=Math.min(100,Math.max(0,e));return(0,M.jsxs)(`div`,{"data-slot":`progress`,className:a.root(),children:[t&&(0,M.jsxs)(`div`,{"data-slot":`progress-label`,className:a.labelRow(),children:[(0,M.jsx)(`span`,{id:i,className:a.label(),children:t}),(0,M.jsxs)(`span`,{className:a.value(),children:[o,`%`]})]}),(0,M.jsx)(O,{"data-slot":`progress-track`,value:o,"aria-labelledby":t?i:void 0,"aria-label":t?void 0:n??`Progress`,className:a.track({className:r}),children:(0,M.jsx)(k,{"data-slot":`progress-indicator`,className:a.indicator(),style:{transform:`translateX(-${100-o}%)`}})})]})},P.displayName=`Progress`;try{N.displayName=`progressRecipe`,N.__docgenInfo={description:``,displayName:`progressRecipe`,props:{class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{P.displayName=`Progress`,P.__docgenInfo={description:'Progress shows how far a bounded task has advanced — wizard steps, upload\nstatus, or a split of a total. Pass `percentage` (0–100) and optionally a\n`label`, which renders above the bar with the percentage value. Built on\nRadix UI Progress, so `role="progressbar"` and `aria-value*` come wired.\n\nThe fill is near-black by default and paints with `currentColor` — recolor\nit from the consumer with a plain text color class.',displayName:`Progress`,props:{percentage:{defaultValue:null,description:`Completion percentage, 0–100. Values outside the range are clamped.`,name:`percentage`,required:!0,type:{name:`number`}},label:{defaultValue:null,description:`Optional label rendered above the bar, with the percentage value on the right.`,name:`label`,required:!1,type:{name:`string`}},"aria-label":{defaultValue:null,description:"Accessible name when no visible `label` is provided. Defaults to `'Progress'`.",name:`aria-label`,required:!1,type:{name:`string`}},className:{defaultValue:null,description:"Extra classes for the bar, merged last. The fill paints with `currentColor`,\nso a text color recolors it (e.g. `text-brand-400`); sizing classes resize\nthe track (e.g. `h-3`).",name:`className`,required:!1,type:{name:`string`}}}}}catch{}})),I,L,R,z,B,V,H,U,W;e((()=>{F(),I=r(),{expect:L,within:R}=__STORYBOOK_MODULE_TEST__,z={title:`Components/Progress`,component:P,tags:[`autodocs`],argTypes:{percentage:{control:{type:`range`,min:0,max:100}},label:{control:`text`},className:{control:`text`}},args:{percentage:62},decorators:[e=>(0,I.jsx)(`div`,{className:`w-80`,children:(0,I.jsx)(e,{})})],parameters:{docs:{description:{component:'Progress shows how far a bounded task has advanced. Pass `percentage`\n(0–100) and optionally a `label` rendered above the bar. The fill paints\nwith `currentColor`, so recolor it with a plain text class — e.g.\n`className="text-brand-400"`.'}}}},B={play:async({canvasElement:e,args:t})=>{let n=R(e).getByRole(`progressbar`);await L(n).toBeInTheDocument(),await L(n).toHaveAttribute(`aria-valuenow`,String(t.percentage))}},V={args:{label:`Profile completion`,className:`text-brand-400`},play:async({canvasElement:e,args:t})=>{let n=R(e);await L(n.getByText(t.label)).toBeVisible(),await L(n.getByText(`${t.percentage}%`)).toBeVisible()}},H={render:e=>(0,I.jsx)(`div`,{className:`flex flex-col gap-4`,children:[[`default`,void 0],[`text-brand-400`,`text-brand-400`],[`text-brand-600`,`text-brand-600`],[`text-purple-400`,`text-purple-400`],[`text-orange-400`,`text-orange-400`],[`text-pink-400`,`text-pink-400`],[`text-blue-400`,`text-blue-400`]].map(([t,n])=>(0,I.jsx)(P,{...e,className:n,label:t},t))}),play:async({canvasElement:e})=>{let[t,n]=e.querySelectorAll(`[data-slot="progress-track"]`),r=n.querySelector(`[data-slot="progress-indicator"]`);await L(t).toHaveClass(`text-neutrals-900`),await L(n).toHaveClass(`text-brand-400`),await L(getComputedStyle(r).backgroundColor).toBe(getComputedStyle(n).color)}},U={args:{percentage:150},play:async({canvasElement:e})=>{await L(R(e).getByRole(`progressbar`)).toHaveAttribute(`aria-valuenow`,`100`)}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const bar = canvas.getByRole('progressbar');
    await expect(bar).toBeInTheDocument();
    await expect(bar).toHaveAttribute('aria-valuenow', String(args.percentage));
  }
}`,...B.parameters?.docs?.source},description:{story:'Default near-black bar; exposes `role="progressbar"` with the current value.',...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Profile completion',
    className: 'text-brand-400'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.label as string)).toBeVisible();
    await expect(canvas.getByText(\`\${args.percentage}%\`)).toBeVisible();
  }
}`,...V.parameters?.docs?.source},description:{story:"`label` renders above the bar with the percentage value on the right.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
            {[['default', undefined], ['text-brand-400', 'text-brand-400'], ['text-brand-600', 'text-brand-600'], ['text-purple-400', 'text-purple-400'], ['text-orange-400', 'text-orange-400'], ['text-pink-400', 'text-pink-400'], ['text-blue-400', 'text-blue-400']].map(([name, className]) => <Progress key={name} {...args} className={className} label={name} />)}
        </div>,
  play: async ({
    canvasElement
  }) => {
    const [defaultBar, brandBar] = canvasElement.querySelectorAll('[data-slot="progress-track"]');
    const brandIndicator = brandBar!.querySelector('[data-slot="progress-indicator"]')!;
    await expect(defaultBar).toHaveClass('text-neutrals-900');
    await expect(brandBar).toHaveClass('text-brand-400');
    await expect(getComputedStyle(brandIndicator).backgroundColor).toBe(getComputedStyle(brandBar!).color);
  }
}`,...H.parameters?.docs?.source},description:{story:"The fill follows `currentColor`: recolor it with any `text-*` class via `className`.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 150
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  }
}`,...U.parameters?.docs?.source},description:{story:`Out-of-range values are clamped to 0–100.`,...U.parameters?.docs?.description}}},W=[`Default`,`WithLabel`,`CustomColors`,`Clamped`]}))();export{U as Clamped,H as CustomColors,B as Default,V as WithLabel,W as __namedExportsOrder,z as default};