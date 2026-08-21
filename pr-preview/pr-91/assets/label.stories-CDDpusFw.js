import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Ct4rMg7s.js";import{t as r}from"./react-dom-CuaxNGnE.js";import{t as i}from"./jsx-runtime-CaZkqeYb.js";import{n as a,t as o}from"./dist-xs6gOf1u.js";import{n as s,t as c}from"./lib-Dkaf_tmd.js";function l(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function u(...e){return t=>{let n=!1,r=e.map(e=>{let r=l(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():l(e[t],null)}}}}function d(...e){return f.useCallback(u(...e),e)}var f,p,m,ee=e((()=>{f=t(n(),1),p=Object.defineProperty,m=(e,t)=>p(e,`name`,{value:t,configurable:!0}),m(l,`setRef`),m(u,`composeRefs`),m(d,`useComposedRefs`)}));function h(e){let t=x.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];y(r)&&typeof k==`function`&&(r=k(r._payload)),x.Children.forEach(r,e=>{if(v(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;y(n)&&typeof k==`function`&&(n=k(n._payload)),a=T(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=x.cloneElement(a,void 0,s):!o&&x.Children.count(r)===1&&x.isValidElement(r)&&(a=r);let c=a?_(a):void 0,l=d(n,c);if(!a){if(r||r===0)throw Error(o?O(e):D(e));return r}let u=g(i,a.props??{});return a.type!==x.Fragment&&(u.ref=n?l:c),x.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function te(e){let t=C(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=w,t}function g(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function _(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function v(e){return x.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===w}function y(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===E&&`_payload`in e&&b(e._payload)}function b(e){return typeof e==`object`&&!!e&&`then`in e}var x,S,C,w,T,E,D,O,k,ne=e((()=>{x=t(n(),1),ee(),S=Object.defineProperty,C=(e,t)=>S(e,`name`,{value:t,configurable:!0}),C(h,`createSlot`),w=Symbol.for(`radix.slottable`),C(te,`createSlottable`),T=C((e,t)=>{if(`child`in e.props){let t=e.props.child;return x.isValidElement(t)?x.cloneElement(t,void 0,e.props.children(t.props.children)):null}return x.isValidElement(t)?t:null},`getSlottableElementFromSlottable`),C(g,`mergeProps`),C(_,`getElementRef`),C(v,`isSlottable`),E=Symbol.for(`react.lazy`),C(y,`isLazyComponent`),C(b,`isPromiseLike`),D=C(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),O=C(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),k=x.use}));function re(e,t){e&&j.flushSync(()=>e.dispatchEvent(t))}var A,j,M,N,P,F,ie=e((()=>{A=t(n(),1),j=t(r(),1),ne(),M=i(),N=Object.defineProperty,P=(e,t)=>N(e,`name`,{value:t,configurable:!0}),F=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=h(`Primitive.${t}`),r=A.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,M.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),P(re,`dispatchDiscreteCustomEvent`)})),I,L,R,z,B,V,ae=e((()=>{I=t(n(),1),ie(),L=i(),R=Object.defineProperty,z=(e,t)=>R(e,`name`,{value:t,configurable:!0}),B=I.forwardRef(z(function(e,t){return(0,L.jsx)(F.label,{...e,ref:t,onMouseDown:t=>{t.target.closest(`button, input, select, textarea`)||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}})},`Label`)),V=B})),H,U,W,oe=e((()=>{ae(),o(),c(),H=i(),U=a({slots:{root:`flex flex-wrap gap-1 py-0.25 text-sm font-semibold text-text-input-normal`,text:`align-middle`,required:`ms-1 align-middle text-text-input-destructive`},variants:{optional:{true:{text:`after:font-normal after:text-text-input-placeholder after:content-["_(optional)"]`}}},defaultVariants:{optional:!1}}),W=({className:e,children:t,optional:n=!1,required:r=!1,...i})=>{let a=U({optional:n&&!r});return(0,H.jsxs)(V,{"data-slot":`label`,className:s(a.root(),e),...i,children:[(0,H.jsx)(`span`,{className:a.text(),children:t}),r&&(0,H.jsx)(`span`,{"aria-hidden":!0,className:a.required(),children:`*`})]})},W.displayName=`Label`;try{U.displayName=`labelRecipe`,U.__docgenInfo={description:"Style recipe for Label. Slots: `root`, `text`, `required`.",displayName:`labelRecipe`,props:{optional:{defaultValue:{value:`false`},description:``,name:`optional`,required:!1,type:{name:`boolean`}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{W.displayName=`Label`,W.__docgenInfo={description:`Accessible caption for a form control, built on Radix's Label primitive so it
associates with the control via \`htmlFor\` and does not select text on
double-click.

Keep it text-only. Nesting an interactive element (a help tooltip trigger, a
button) inside a \`<label>\` gives that element the label's accessible name and
makes a click focus the control — render it as a sibling instead.`,displayName:`Label`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}},optional:{defaultValue:{value:`false`},description:'Appends a muted " (optional)" suffix. Ignored when `required` is set.',name:`optional`,required:!1,type:{name:`boolean`}},required:{defaultValue:{value:`false`},description:"Appends a decorative asterisk. Mark the control itself `required` too — the asterisk is `aria-hidden`.",name:`required`,required:!1,type:{name:`boolean`}}}}}catch{}})),G,K,q,J,Y,X,Z,Q,$;e((()=>{oe(),G=i(),{expect:K,within:q}=__STORYBOOK_MODULE_TEST__,J={title:`Components/Label`,component:W,tags:[`autodocs`],argTypes:{optional:{control:`boolean`},required:{control:`boolean`}},args:{children:`Email`},parameters:{docs:{description:{component:"Label is the accessible caption for a form control, built on Radix's Label\nprimitive: it associates with the control through `htmlFor` and does not select\ntext on double-click.\n\n`optional` and `required` are display-only affordances — the control itself\nstill has to carry `required` / `aria-required`."}}}},Y={args:{htmlFor:`email`},render:e=>(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(W,{...e}),(0,G.jsx)(`input`,{id:`email`,placeholder:`you@example.com`})]}),play:async({canvasElement:e})=>{await K(q(e).getByLabelText(`Email`)).toBeInTheDocument()}},X={args:{optional:!0,children:`Phone number`}},Z={args:{required:!0,children:`Full name`},play:async({canvasElement:e})=>{let t=q(e);await K(t.getByText(`Full name`)).toBeInTheDocument(),await K(t.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`)}},Q={args:{optional:!0,required:!0,children:`Agency name`},play:async({canvasElement:e})=>{let t=q(e);await K(t.getByText(`*`)).toBeInTheDocument(),await K(t.getByText(`Agency name`)).not.toHaveClass(/after:content/)}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`A plain caption, associated with its control through \`htmlFor\`.

@summary Default label associated with a control`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    children: 'Phone number'
  }
}`,...X.parameters?.docs?.source},description:{story:`Appends a muted " (optional)" suffix for fields that can be left blank.

@summary Optional field with a muted suffix`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"Appends an asterisk. It is `aria-hidden`, so the control still needs its own\n`required` attribute for assistive technology.\n\n@summary Required field with a decorative asterisk",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Contradictory props do not throw — \`required\` wins and the optional suffix is
dropped, so a mistake never takes the page down.

@summary required takes precedence over optional`,...Q.parameters?.docs?.description}}},$=[`Default`,`Optional`,`Required`,`RequiredWinsOverOptional`]}))();export{Y as Default,X as Optional,Z as Required,Q as RequiredWinsOverOptional,$ as __namedExportsOrder,J as default};