import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-nRLngAKu.js";import{t as r}from"./react-dom-CmKL3Mc5.js";import{t as i}from"./jsx-runtime-CaZkqeYb.js";import{n as a,t as o}from"./dist-xs6gOf1u.js";import{n as s,t as c}from"./lib-Dkaf_tmd.js";import{i as l,r as u}from"./dist-B57gaEVh.js";function d(e,t){e&&p.flushSync(()=>e.dispatchEvent(t))}var f,p,m,h,g,_,v=e((()=>{f=t(n(),1),p=t(r(),1),l(),m=i(),h=Object.defineProperty,g=(e,t)=>h(e,`name`,{value:t,configurable:!0}),_=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=u(`Primitive.${t}`),r=f.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,m.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),g(d,`dispatchDiscreteCustomEvent`)})),y,b,x,S,C,w,T=e((()=>{y=t(n(),1),v(),b=i(),x=Object.defineProperty,S=(e,t)=>x(e,`name`,{value:t,configurable:!0}),C=y.forwardRef(S(function(e,t){return(0,b.jsx)(_.label,{...e,ref:t,onMouseDown:t=>{t.target.closest(`button, input, select, textarea`)||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}})},`Label`)),w=C})),E,D,O,k=e((()=>{T(),o(),c(),E=i(),D=a({slots:{root:`flex flex-wrap gap-1 py-0.25 text-sm font-semibold text-text-input-normal`,text:`align-middle`,required:`ms-1 align-middle text-text-input-destructive`},variants:{optional:{true:{text:`after:font-normal after:text-text-input-placeholder after:content-["_(optional)"]`}}},defaultVariants:{optional:!1}}),O=({className:e,children:t,optional:n=!1,required:r=!1,...i})=>{let a=D({optional:n&&!r});return(0,E.jsxs)(w,{"data-slot":`label`,className:s(a.root(),e),...i,children:[(0,E.jsx)(`span`,{className:a.text(),children:t}),r&&(0,E.jsx)(`span`,{"aria-hidden":!0,className:a.required(),children:`*`})]})},O.displayName=`Label`;try{D.displayName=`labelRecipe`,D.__docgenInfo={description:"Style recipe for Label. Slots: `root`, `text`, `required`.",displayName:`labelRecipe`,props:{optional:{defaultValue:{value:`false`},description:``,name:`optional`,required:!1,type:{name:`boolean`}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{O.displayName=`Label`,O.__docgenInfo={description:`Accessible caption for a form control, built on Radix's Label primitive so it
associates with the control via \`htmlFor\` and does not select text on
double-click.

Keep it text-only. Nesting an interactive element (a help tooltip trigger, a
button) inside a \`<label>\` gives that element the label's accessible name and
makes a click focus the control — render it as a sibling instead.`,displayName:`Label`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}},optional:{defaultValue:{value:`false`},description:'Appends a muted " (optional)" suffix. Ignored when `required` is set.',name:`optional`,required:!1,type:{name:`boolean`}},required:{defaultValue:{value:`false`},description:"Appends a decorative asterisk. Mark the control itself `required` too — the asterisk is `aria-hidden`.",name:`required`,required:!1,type:{name:`boolean`}}}}}catch{}})),A,j,M,N,P,F,I,L,R;e((()=>{k(),A=i(),{expect:j,within:M}=__STORYBOOK_MODULE_TEST__,N={title:`Components/Label`,component:O,tags:[`autodocs`],argTypes:{optional:{control:`boolean`},required:{control:`boolean`}},args:{children:`Email`},parameters:{docs:{description:{component:"Label is the accessible caption for a form control, built on Radix's Label\nprimitive: it associates with the control through `htmlFor` and does not select\ntext on double-click.\n\n`optional` and `required` are display-only affordances — the control itself\nstill has to carry `required` / `aria-required`."}}}},P={args:{htmlFor:`email`},render:e=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(O,{...e}),(0,A.jsx)(`input`,{id:`email`,placeholder:`you@example.com`})]}),play:async({canvasElement:e})=>{await j(M(e).getByLabelText(`Email`)).toBeInTheDocument()}},F={args:{optional:!0,children:`Phone number`}},I={args:{required:!0,children:`Full name`},play:async({canvasElement:e})=>{let t=M(e);await j(t.getByText(`Full name`)).toBeInTheDocument(),await j(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},L={args:{optional:!0,required:!0,children:`Agency name`},play:async({canvasElement:e})=>{let t=M(e);await j(t.getByText(`*`)).toBeInTheDocument(),await j(t.getByText(`Agency name`)).not.toHaveClass(/after:content/)}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: 'email'
  },
  render: args => <>
            <Label {...args} />
            <input id="email" placeholder="you@example.com" />
        </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Email')).toBeInTheDocument();
  }
}`,...P.parameters?.docs?.source},description:{story:`A plain caption, associated with its control through \`htmlFor\`.

@summary Default label associated with a control`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    children: 'Phone number'
  }
}`,...F.parameters?.docs?.source},description:{story:`Appends a muted " (optional)" suffix for fields that can be left blank.

@summary Optional field with a muted suffix`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    children: 'Full name'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Full name')).toBeInTheDocument();
    await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...I.parameters?.docs?.source},description:{story:"Appends an asterisk. It is `aria-hidden`, so the control still needs its own\n`required` attribute for assistive technology.\n\n@summary Required field with a decorative asterisk",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    required: true,
    children: 'Agency name'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('*')).toBeInTheDocument();
    await expect(canvas.getByText('Agency name')).not.toHaveClass(/after:content/);
  }
}`,...L.parameters?.docs?.source},description:{story:`Contradictory props do not throw — \`required\` wins and the optional suffix is
dropped, so a mistake never takes the page down.

@summary required takes precedence over optional`,...L.parameters?.docs?.description}}},R=[`Default`,`Optional`,`Required`,`RequiredWinsOverOptional`]}))();export{P as Default,F as Optional,I as Required,L as RequiredWinsOverOptional,R as __namedExportsOrder,N as default};