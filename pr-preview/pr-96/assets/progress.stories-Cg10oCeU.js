import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Dn0ebc72.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{n as o,t as s}from"./decorators-BBj7YOsL.js";import{n as c,t as l}from"./dist-D-HQNU282.js";import{r as u,t as d}from"./dist-DlSY-f8h2.js";function f(e,t){return`${Math.round(e/t*100)}%`}function p(e,t){return e==null?`indeterminate`:e===t?`complete`:`loading`}function m(e){return typeof e==`number`}function h(e){return m(e)&&!isNaN(e)&&e>0}function g(e,t){return m(e)&&!isNaN(e)&&e<=t&&e>=0}function _(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${S}\`.`}function v(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${S} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{y=t(n(),1),c(),u(),b=r(),x=`Progress`,S=100,[C,w]=l(x),[T,E]=C(x),D=y.forwardRef((e,t)=>{let{__scopeProgress:n,value:r=null,max:i,getValueLabel:a=f,...o}=e;(i||i===0)&&!h(i)&&console.error(_(`${i}`,`Progress`));let s=h(i)?i:S;r!==null&&!g(r,s)&&console.error(v(`${r}`,`Progress`));let c=g(r,s)?r:null,l=m(c)?a(c,s):void 0;return(0,b.jsx)(T,{scope:n,value:c,max:s,children:(0,b.jsx)(d.div,{"aria-valuemax":s,"aria-valuemin":0,"aria-valuenow":m(c)?c:void 0,"aria-valuetext":l,role:`progressbar`,"data-state":p(c,s),"data-value":c??void 0,"data-max":s,...o,ref:t})})}),D.displayName=x,O=`ProgressIndicator`,k=y.forwardRef((e,t)=>{let{__scopeProgress:n,...r}=e,i=E(O,n);return(0,b.jsx)(d.div,{"data-state":p(i.value,i.max),"data-value":i.value??void 0,"data-max":i.max,...r,ref:t})}),k.displayName=O,A=D,j=k})),N,P,F,I,L=e((()=>{N=t(n(),1),M(),a(),P=r(),F=i({slots:{root:`flex flex-col gap-2`,track:`relative h-2 w-full overflow-hidden rounded-sm bg-neutrals-200 text-neutrals-900`,indicator:`size-full bg-current transition-transform duration-600 ease-in-out motion-reduce:transition-none`,labelRow:`flex items-center justify-between gap-2`,label:`text-sm text-text-default-base-primary`,value:`text-base text-text-default-base-primary`}}),I=({percentage:e,label:t,"aria-label":n,className:r})=>{let i=(0,N.useId)(),a=F(),o=Math.min(100,Math.max(0,e));return(0,P.jsxs)(`div`,{"data-slot":`progress`,className:a.root(),children:[t&&(0,P.jsxs)(`div`,{"data-slot":`progress-label`,className:a.labelRow(),children:[(0,P.jsx)(`span`,{id:i,className:a.label(),children:t}),(0,P.jsxs)(`span`,{className:a.value(),children:[o,`%`]})]}),(0,P.jsx)(A,{"data-slot":`progress-track`,value:o,"aria-labelledby":t?i:void 0,"aria-label":t?void 0:n??`Progress`,className:a.track({className:r}),children:(0,P.jsx)(j,{"data-slot":`progress-indicator`,className:a.indicator(),style:{transform:`translateX(-${100-o}%)`}})})]})},I.displayName=`Progress`;try{F.displayName=`progressRecipe`,F.__docgenInfo={description:``,displayName:`progressRecipe`,props:{class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{I.displayName=`Progress`,I.__docgenInfo={description:'Progress shows how far a bounded task has advanced — wizard steps, upload\nstatus, or a split of a total. Pass `percentage` (0–100) and optionally a\n`label`, which renders above the bar with the percentage value. Built on\nRadix UI Progress, so `role="progressbar"` and `aria-value*` come wired.\n\nThe fill is near-black by default and paints with `currentColor` — recolor\nit from the consumer with a plain text color class.',displayName:`Progress`,props:{percentage:{defaultValue:null,description:`Completion percentage, 0–100. Values outside the range are clamped.`,name:`percentage`,required:!0,type:{name:`number`}},label:{defaultValue:null,description:`Optional label rendered above the bar, with the percentage value on the right.`,name:`label`,required:!1,type:{name:`string`}},"aria-label":{defaultValue:null,description:"Accessible name when no visible `label` is provided. Defaults to `'Progress'`.",name:`aria-label`,required:!1,type:{name:`string`}},className:{defaultValue:null,description:"Extra classes for the bar, merged last. The fill paints with `currentColor`,\nso a text color recolors it (e.g. `text-brand-400`); sizing classes resize\nthe track (e.g. `h-3`).",name:`className`,required:!1,type:{name:`string`}}}}}catch{}})),R,z,B,V,H,U,W,G,K;e((()=>{s(),L(),R=r(),{expect:z,within:B}=__STORYBOOK_MODULE_TEST__,V={title:`Components/Progress`,component:I,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:'Progress shows how far a bounded task has advanced. Pass `percentage`\n(0–100) and optionally a `label` rendered above the bar. The fill paints\nwith `currentColor`, so recolor it with a plain text class — e.g.\n`className="text-brand-400"`.'}}},argTypes:{percentage:{control:{type:`range`,min:0,max:100}},label:{control:`text`},className:{control:`text`}},args:{percentage:62},decorators:[o(`w-80`)]},H={play:async({canvasElement:e,args:t})=>{let n=B(e).getByRole(`progressbar`);await z(n).toBeInTheDocument(),await z(n).toHaveAttribute(`aria-valuenow`,String(t.percentage))}},U={args:{label:`Profile completion`,className:`text-brand-400`},play:async({canvasElement:e,args:t})=>{let n=B(e);await z(n.getByText(t.label)).toBeVisible(),await z(n.getByText(`${t.percentage}%`)).toBeVisible()}},W={render:e=>(0,R.jsx)(`div`,{className:`flex flex-col gap-4`,children:[[`default`,void 0],[`text-brand-400`,`text-brand-400`],[`text-brand-600`,`text-brand-600`],[`text-purple-400`,`text-purple-400`],[`text-orange-400`,`text-orange-400`],[`text-pink-400`,`text-pink-400`],[`text-blue-400`,`text-blue-400`]].map(([t,n])=>(0,R.jsx)(I,{...e,className:n,label:t},t))}),play:async({canvasElement:e})=>{let[t,n]=e.querySelectorAll(`[data-slot="progress-track"]`),r=n.querySelector(`[data-slot="progress-indicator"]`);await z(t).toHaveClass(`text-neutrals-900`),await z(n).toHaveClass(`text-brand-400`),await z(getComputedStyle(r).backgroundColor).toBe(getComputedStyle(n).color)}},G={args:{percentage:150},play:async({canvasElement:e})=>{await z(B(e).getByRole(`progressbar`)).toHaveAttribute(`aria-valuenow`,`100`)}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const bar = canvas.getByRole('progressbar');
    await expect(bar).toBeInTheDocument();
    await expect(bar).toHaveAttribute('aria-valuenow', String(args.percentage));
  }
}`,...H.parameters?.docs?.source},description:{story:'Default near-black bar; exposes `role="progressbar"` with the current value.',...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"`label` renders above the bar with the percentage value on the right.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"The fill follows `currentColor`: recolor it with any `text-*` class via `className`.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    percentage: 150
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  }
}`,...G.parameters?.docs?.source},description:{story:`Out-of-range values are clamped to 0–100.`,...G.parameters?.docs?.description}}},K=[`Default`,`WithLabel`,`CustomColors`,`Clamped`]}))();export{G as Clamped,W as CustomColors,H as Default,U as WithLabel,K as __namedExportsOrder,V as default};