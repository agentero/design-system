import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{D as n}from"./iframe-47cGghVb.js";import{t as r}from"./react-dom-3ANYvdDg.js";import{t as i}from"./jsx-runtime-CaZkqeYb.js";import{n as a,t as o}from"./dist-xs6gOf1u.js";import{n as s,r as c}from"./dist-z7i0jxcF.js";import{i as l,t as u}from"./lib-nIwOIF-Y.js";import{n as d,t as f}from"./label-CTeCQ26j.js";function p(e,t){let n=g.createContext(t);n.displayName=e+`Context`;let r=v(e=>{let{children:t,...r}=e,i=g.useMemo(()=>r,Object.values(r));return(0,_.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=g.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return v(i,`useContext`),[r,i]}function m(e,t=[]){let n=[];function r(t,r){let i=g.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=v(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=g.useMemo(()=>o,Object.values(o));return(0,_.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=g.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return v(s,`useContext`),[o,s]}v(r,`createContext`);let i=v(()=>{let t=n.map(e=>g.createContext(e));return v(function(n){let r=n?.[e]||t;return g.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,h(i,...t)]}function h(...e){let t=e[0];if(e.length===1)return t;let n=v(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return v(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return g.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}var g,_,ee,v,te=e((()=>{g=t(n(),1),_=i(),ee=Object.defineProperty,v=(e,t)=>ee(e,`name`,{value:t,configurable:!0}),v(p,`createContext`),v(m,`createContextScope`),v(h,`composeContextScopes`)}));function y(e,t,{checkForDefaultPrevented:n=!0}={}){return x(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}function b(e){if(!oe)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}function ne(e){if(!oe)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}function re(e,t=!1){let{activeElement:n}=ne(e);if(!n?.nodeName)return null;if(ie(n)&&n.contentDocument)return re(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=ne(n).getElementById(e);if(t)return t}}return n}function ie(e){return e.tagName===`IFRAME`}var ae,x,oe,se=e((()=>{ae=Object.defineProperty,x=(e,t)=>ae(e,`name`,{value:t,configurable:!0}),oe=!!(typeof window<`u`&&window.document&&window.document.createElement),x(y,`composeEventHandlers`),x(b,`getOwnerWindow`),x(ne,`getOwnerDocument`),x(re,`getActiveElement`),x(ie,`isFrame`)})),ce=e((()=>{})),le,S,ue=e((()=>{le=t(n(),1),S=globalThis?.document?le.useLayoutEffect:()=>{}}));function de(e){if(typeof me==`function`)return me(e);let t=C.useRef(()=>{throw Error(`Cannot call an event handler while rendering.`)});return typeof he==`function`?he(()=>{t.current=e}):S(()=>{t.current=e}),C.useMemo(()=>((...e)=>t.current?.(...e)),[])}var C,fe,pe,me,he,ge=e((()=>{ue(),C=t(n(),1),fe=Object.defineProperty,pe=(e,t)=>fe(e,`name`,{value:t,configurable:!0}),me=C.useEffectEvent,he=C.useInsertionEffect,pe(de,`useEffectEvent`)}));function _e({prop:e,defaultProp:t,onChange:n=E(()=>{},`onChange`),caller:r}){let[i,a,o]=ve({defaultProp:t,onChange:n}),s=e!==void 0;return[s?e:i,w.useCallback(t=>{if(s){let n=ye(t)?t(e):t;n!==e&&o.current?.(n)}else a(t)},[s,e,a,o])]}function ve({defaultProp:e,onChange:t}){let[n,r]=w.useState(e),i=w.useRef(n),a=w.useRef(t);return Se(()=>{a.current=t},[t]),w.useEffect(()=>{i.current!==n&&(a.current?.(n),i.current=n)},[n,i]),[n,r,a]}function ye(e){return typeof e==`function`}function be(e,t,n,r){let{prop:i,defaultProp:a,onChange:o,caller:s}=t,c=i!==void 0,l=de(o),u=[{...n,state:a}];r&&u.push(r);let[d,f]=T.useReducer((t,n)=>{if(n.type===Ce)return{...t,state:n.state};let r=e(t,n);return c&&!Object.is(r.state,t.state)&&l(r.state),r},...u),p=d.state,m=T.useRef(p);T.useEffect(()=>{m.current!==p&&(m.current=p,c||l(p))},[p,m,c]);let h=T.useMemo(()=>i===void 0?d:{...d,state:i},[d,i]);return T.useEffect(()=>{c&&!Object.is(i,d.state)&&f({type:Ce,state:i})},[i,d.state,c]),[h,f]}var w,T,xe,E,Se,Ce,we=e((()=>{w=t(n(),1),ce(),ue(),T=t(n(),1),ge(),xe=Object.defineProperty,E=(e,t)=>xe(e,`name`,{value:t,configurable:!0}),Se=w.useInsertionEffect||S,E(_e,`useControllableState`),E(ve,`useUncontrolledState`),E(ye,`isFunction`),Ce=Symbol(`RADIX:SYNC_STATE`),E(be,`useControllableStateReducer`)}));function Te(e){let[t,n]=Ee.useState(void 0);return S(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{if(!Array.isArray(t)||!t.length)return;let r=t[0],i,a;if(`borderBoxSize`in r){let e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;i=t.inlineSize,a=t.blockSize}else i=e.offsetWidth,a=e.offsetHeight;n({width:i,height:a})});return t.observe(e,{box:`border-box`}),()=>t.unobserve(e)}else n(void 0)},[e]),t}var Ee,De,Oe,ke=e((()=>{Ee=t(n(),1),ue(),De=Object.defineProperty,Oe=(e,t)=>De(e,`name`,{value:t,configurable:!0}),Oe(Te,`useSize`)}));function Ae(e,t){return Fe.useReducer((e,n)=>t[e][n]??e,e)}function je(e){let[t,n]=O.useState(),r=O.useRef(null),i=O.useRef(e),a=O.useRef(`none`),o=O.useRef(void 0),[s,c]=Ae(e?`mounted`:`unmounted`,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}});return O.useEffect(()=>{s===`mounted`?(a.current=o.current??D(r.current),o.current=void 0):a.current=`none`},[s]),S(()=>{let t=r.current,n=i.current;if(n!==e){let r=a.current,s=D(t);e?(o.current=s,c(`MOUNT`)):s===`none`||t?.display===`none`?c(`UNMOUNT`):c(n&&r!==s?`ANIMATION_OUT`:`UNMOUNT`),i.current=e}},[e,c]),S(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,o=k(a=>{let o=D(r.current).includes(CSS.escape(a.animationName));if(a.target===t&&o&&(c(`ANIMATION_END`),!i.current)){let r=t.style.animationFillMode;t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)})}},`handleAnimationEnd`),s=k(e=>{e.target===t&&(a.current=D(r.current))},`handleAnimationStart`);return t.addEventListener(`animationstart`,s),t.addEventListener(`animationcancel`,o),t.addEventListener(`animationend`,o),()=>{n.clearTimeout(e),t.removeEventListener(`animationstart`,s),t.removeEventListener(`animationcancel`,o),t.removeEventListener(`animationend`,o)}}else c(`ANIMATION_END`)},[t,c]),{isPresent:[`mounted`,`unmountSuspended`].includes(s),ref:O.useCallback(e=>{if(e){let t=getComputedStyle(e);r.current=t,o.current=D(t)}else r.current=null;n(e)},[])}}function Me(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Ne(...e){let t=O.useRef(e);return t.current=e,O.useCallback(e=>{let n=t.current,r=!1,i=n.map(t=>{let n=Me(t,e);return!r&&typeof n==`function`&&(r=!0),n});if(r)return()=>{for(let e=0;e<i.length;e++){let t=i[e];typeof t==`function`?t():Me(n[e],null)}}},[])}function D(e){return e?.animationName||`none`}function Pe(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var O,Fe,Ie,k,Le,Re=e((()=>{O=t(n(),1),ue(),Fe=t(n(),1),Ie=Object.defineProperty,k=(e,t)=>Ie(e,`name`,{value:t,configurable:!0}),k(Ae,`useStateMachine`),Le=k(e=>{let{present:t,children:n}=e,r=je(t),i=typeof n==`function`?n({present:r.isPresent}):O.Children.only(n),a=Ne(r.ref,Pe(i));return typeof n==`function`||r.isPresent?O.cloneElement(i,{ref:a}):null},`Presence`),k(je,`usePresence`),k(Me,`setRef`),k(Ne,`useStableComposedRefs`),k(D,`getAnimationName`),k(Pe,`getElementRef`)}));function ze(e){let t=A.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];We(r)&&typeof M==`function`&&(r=M(r._payload)),A.Children.forEach(r,e=>{if(Ue(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;We(n)&&typeof M==`function`&&(n=M(n._payload)),a=Je(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=A.cloneElement(a,void 0,s):!o&&A.Children.count(r)===1&&A.isValidElement(r)&&(a=r);let l=a?He(a):void 0,u=c(n,l);if(!a){if(r||r===0)throw Error(o?Ze(e):Xe(e));return r}let d=Ve(i,a.props??{});return a.type!==A.Fragment&&(d.ref=n?u:l),A.cloneElement(a,d)});return t.displayName=`${e}.Slot`,t}function Be(e){let t=j(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=qe,t}function Ve(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function He(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ue(e){return A.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===qe}function We(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ye&&`_payload`in e&&Ge(e._payload)}function Ge(e){return typeof e==`object`&&!!e&&`then`in e}var A,Ke,j,qe,Je,Ye,Xe,Ze,M,Qe=e((()=>{A=t(n(),1),s(),Ke=Object.defineProperty,j=(e,t)=>Ke(e,`name`,{value:t,configurable:!0}),j(ze,`createSlot`),qe=Symbol.for(`radix.slottable`),j(Be,`createSlottable`),Je=j((e,t)=>{if(`child`in e.props){let t=e.props.child;return A.isValidElement(t)?A.cloneElement(t,void 0,e.props.children(t.props.children)):null}return A.isValidElement(t)?t:null},`getSlottableElementFromSlottable`),j(Ve,`mergeProps`),j(He,`getElementRef`),j(Ue,`isSlottable`),Ye=Symbol.for(`react.lazy`),j(We,`isLazyComponent`),j(Ge,`isPromiseLike`),Xe=j(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),Ze=j(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),M=A.use}));function $e(e,t){e&&tt.flushSync(()=>e.dispatchEvent(t))}var et,tt,nt,rt,it,at,ot=e((()=>{et=t(n(),1),tt=t(r(),1),Qe(),nt=i(),rt=Object.defineProperty,it=(e,t)=>rt(e,`name`,{value:t,configurable:!0}),at=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=ze(`Primitive.${t}`),r=et.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,nt.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),it($e,`dispatchDiscreteCustomEvent`)}));function st(e){let{__scopeCheckbox:t,checked:n,children:r,defaultChecked:i,disabled:a,form:o,name:s,onCheckedChange:c,required:l,value:u=`on`,internal_do_not_use_render:d}=e,[f,p]=_e({prop:n,defaultProp:i??!1,onChange:c,caller:dt}),[m,h]=P.useState(null),[g,_]=P.useState(null),ee=P.useRef(!1),[v,te]=P.useReducer(e=>e+1,0),y=m?!!o||!!m.closest(`form`):!0,b={checked:f,disabled:a,setChecked:p,control:m,setControl:h,name:s,form:o,value:u,hasConsumerStoppedPropagationRef:ee,userInteractionCount:v,onUserInteraction:te,required:l,defaultChecked:N(i)?!1:i,isFormControl:y,bubbleInput:g,setBubbleInput:_};return(0,F.jsx)(mt,{scope:t,...b,children:ct(d)?d(b):r})}function ct(e){return typeof e==`function`}function N(e){return e===`indeterminate`}function lt(e){return N(e)?`indeterminate`:e?`checked`:`unchecked`}var P,F,ut,I,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct=e((()=>{P=t(n(),1),s(),te(),se(),we(),ke(),Re(),ot(),F=i(),ut=Object.defineProperty,I=(e,t)=>ut(e,`name`,{value:t,configurable:!0}),dt=`Checkbox`,[ft,pt]=m(dt),[mt,ht]=ft(dt),I(st,`CheckboxProvider`),gt=`CheckboxTrigger`,_t=P.forwardRef(I(function({__scopeCheckbox:e,onKeyDown:t,onClick:n,...r},i){let{control:a,value:o,disabled:s,checked:l,required:u,setControl:d,setChecked:f,hasConsumerStoppedPropagationRef:p,onUserInteraction:m,isFormControl:h,bubbleInput:g}=ht(gt,e),_=c(i,d),ee=P.useRef(l);return P.useEffect(()=>{let e=a?.form;if(e){let t=I(()=>f(ee.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[a,f]),(0,F.jsx)(at.button,{type:`button`,role:`checkbox`,"aria-checked":N(l)?`mixed`:l,"aria-required":u,"data-state":lt(l),"data-disabled":s?``:void 0,disabled:s,value:o,...r,ref:_,onKeyDown:y(t,e=>{e.key===`Enter`&&e.preventDefault()}),onClick:y(n,e=>{m(),f(e=>N(e)?!0:!e),g&&h&&(p.current=e.isPropagationStopped(),p.current||e.stopPropagation())})})},`CheckboxTrigger`)),vt=P.forwardRef(I(function(e,t){let{__scopeCheckbox:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d}=e;return(0,F.jsx)(st,{__scopeCheckbox:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(_t,{...d,ref:t,__scopeCheckbox:n}),e&&(0,F.jsx)(St,{__scopeCheckbox:n})]})})},`Checkbox`)),yt=`CheckboxIndicator`,bt=P.forwardRef(I(function(e,t){let{__scopeCheckbox:n,forceMount:r,...i}=e,a=ht(yt,n);return(0,F.jsx)(Le,{present:r||N(a.checked)||a.checked===!0,children:(0,F.jsx)(at.span,{"data-state":lt(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t,style:{pointerEvents:`none`,...e.style}})})},`CheckboxIndicator`)),xt=`CheckboxBubbleInput`,St=P.forwardRef(I(function({__scopeCheckbox:e,onClick:t,...n},r){let{control:i,hasConsumerStoppedPropagationRef:a,userInteractionCount:o,checked:s,defaultChecked:l,required:u,disabled:d,name:f,value:p,form:m,bubbleInput:h,setBubbleInput:g}=ht(xt,e),_=c(r,g),ee=Te(i),v=P.useRef(!1),te=P.useRef(s),b=P.useRef(o);P.useEffect(()=>{let e=h;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set,r=o!==b.current;b.current=o;let i=te.current!==s;te.current=s;let c=!(r&&a.current);if(i&&n){v.current=!r;let t=new Event(`click`,{bubbles:c});e.indeterminate=N(s),n.call(e,N(s)?!1:s),e.dispatchEvent(t),v.current=!1}},[h,s,a,o]);let ne=P.useRef(N(s)?!1:s);return(0,F.jsx)(at.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:l??ne.current,required:u,disabled:d,name:f,value:p,form:m,...n,tabIndex:-1,ref:_,onClick:y(t,e=>{v.current&&e.stopPropagation()}),style:{...n.style,...ee,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`CheckboxBubbleInput`)),I(ct,`isFunction`),I(N,`isIndeterminate`),I(lt,`getState`)})),L,wt,Tt,Et=e((()=>{L=i(),wt=e=>(0,L.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,stroke:`currentColor`,"aria-hidden":`true`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,L.jsx)(`path`,{d:`M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z`})}),Tt=e=>(0,L.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,L.jsx)(`path`,{d:`M5 12h14`})});try{wt.displayName=`IconCheck`,wt.__docgenInfo={description:``,displayName:`IconCheck`,filePath:`/home/runner/work/design-system/design-system/src/checkbox/icons.tsx`,methods:[],props:{},tags:{summary:`Material Sharp check used by the legacy checkbox`}}}catch{}try{Tt.displayName=`IconMinus`,Tt.__docgenInfo={description:``,displayName:`IconMinus`,filePath:`/home/runner/work/design-system/design-system/src/checkbox/icons.tsx`,methods:[],props:{},tags:{summary:`Rounded minus used by the legacy checkbox's mixed state`}}}catch{}})),Dt,Ot,R,kt=e((()=>{Ct(),o(),u(),Et(),Dt=i(),Ot=a({slots:{root:[`group/checkbox box-border inline-flex size-4 shrink-0 appearance-none items-center justify-center rounded-sm`,`border border-solid border-border-input-default bg-bg-input-normal`,`cursor-pointer transition-colors duration-200 ease-in-out`,`data-[state=checked]:border-bg-checkbox-selected data-[state=checked]:bg-bg-checkbox-selected`,`data-[state=indeterminate]:border-bg-checkbox-selected data-[state=indeterminate]:bg-bg-checkbox-selected`,`outline-solid outline-2 outline-offset-2 outline-transparent`,`focus-visible:outline-focus-ring-button-primary`,`aria-invalid:border-border-input-destructive`,`aria-invalid:focus-visible:outline-focus-ring-button-destructive`,`aria-invalid:data-[state=checked]:border-bg-default-danger-primary aria-invalid:data-[state=checked]:bg-bg-default-danger-primary`,`aria-invalid:data-[state=indeterminate]:border-bg-default-danger-primary aria-invalid:data-[state=indeterminate]:bg-bg-default-danger-primary`,`disabled:cursor-not-allowed disabled:border-border-checkbox-disabled`,`disabled:data-[state=checked]:border-bg-checkbox-disabled disabled:data-[state=checked]:bg-bg-checkbox-disabled`,`disabled:data-[state=indeterminate]:border-bg-checkbox-disabled disabled:data-[state=indeterminate]:bg-bg-checkbox-disabled`,`aria-invalid:disabled:border-bg-checkbox-invalid-disabled`,`aria-invalid:disabled:data-[state=checked]:border-bg-checkbox-invalid-disabled aria-invalid:disabled:data-[state=checked]:bg-bg-checkbox-invalid-disabled`,`aria-invalid:disabled:data-[state=indeterminate]:border-bg-checkbox-invalid-disabled aria-invalid:disabled:data-[state=indeterminate]:bg-bg-checkbox-invalid-disabled`],indicator:`flex items-center justify-center text-text-default-base-inverse-primary`}}),R=({className:e,ref:t,...n})=>{let r=Ot();return(0,Dt.jsx)(vt,{ref:t,"data-slot":`checkbox`,className:l(r.root(),e),...n,children:(0,Dt.jsxs)(bt,{"data-slot":`checkbox-indicator`,className:r.indicator(),children:[(0,Dt.jsx)(wt,{className:`hidden size-3.5 group-data-[state=checked]/checkbox:block`}),(0,Dt.jsx)(Tt,{className:`hidden size-3.5 group-data-[state=indeterminate]/checkbox:block`})]})})};try{Ot.displayName=`checkboxRecipe`,Ot.__docgenInfo={description:"Style recipe for Checkbox. Slots: `root` (the box), `indicator` (the glyph).",displayName:`checkboxRecipe`,filePath:`/home/runner/work/design-system/design-system/src/checkbox/checkbox.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{R.displayName=`Checkbox`,R.__docgenInfo={description:`Base control for a boolean the user confirms later: one item of a
multi-select, a terms tick, a row picked for a bulk action. Supports the
mixed state for a parent that summarises a partially selected group.
Keeps the legacy 16px surface, glyphs and state colours during adoption.

Headless like [Input](?path=/docs/components-input--docs): pair it with
[Label](?path=/docs/components-label--docs) and \`htmlFor\`, or give it an
\`aria-label\`. There is no \`status\` prop — set \`aria-invalid\`.

Use [Switch](?path=/docs/components-switch--docs) when the change applies
immediately, and [CheckList](?path=/docs/components-check-list--docs) for a
read-only list of ticked items.`,displayName:`Checkbox`,filePath:`/home/runner/work/design-system/design-system/src/checkbox/checkbox.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Base checkbox control, with mixed state, unaware of form libraries`,example:`<Label htmlFor="terms">I accept the terms</Label>
<Checkbox id="terms" name="terms" required />`}}}catch{}})),At,z,B,V,H,jt,U,W,G,K,q,J,Y,X,Z,Q,$,Mt;e((()=>{At=t(n(),1),f(),kt(),z=i(),{expect:B,userEvent:V,within:H}=__STORYBOOK_MODULE_TEST__,jt={title:`Components/Checkbox`,component:R,tags:[`autodocs`],argTypes:{checked:{control:`radio`,options:[!0,!1,`indeterminate`]},defaultChecked:{control:`radio`,options:[!0,!1,`indeterminate`]},disabled:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`},onCheckedChange:{action:`checkedChange`}},args:{disabled:!1,"aria-label":`Select row`},parameters:{docs:{description:{component:"Base control for a boolean the user confirms later. Headless: pair it with\na `Label` and `htmlFor`, or give it an `aria-label`. There is no `status`\nprop — set `aria-invalid` and the destructive treatment follows."}}}},U={play:async({canvasElement:e})=>{let t=H(e).getByRole(`checkbox`,{name:`Select row`});await B(t).not.toBeChecked(),await V.click(t),await B(t).toBeChecked()}},W={args:{defaultChecked:!0}},G={args:{checked:`indeterminate`},play:async({canvasElement:e})=>{await B(H(e).getByRole(`checkbox`,{name:`Select row`})).toHaveAttribute(`aria-checked`,`mixed`)}},K={args:{defaultChecked:`indeterminate`},play:async({canvasElement:e})=>{let t=H(e).getByRole(`checkbox`,{name:`Select row`});await B(t).toHaveAttribute(`aria-checked`,`mixed`),await V.click(t),await B(t).toBeChecked(),await V.keyboard(` `),await B(t).toHaveAttribute(`aria-checked`,`false`)}},q={render:()=>(0,z.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,z.jsx)(R,{disabled:!0,"aria-label":`Disabled unchecked`}),(0,z.jsx)(R,{disabled:!0,defaultChecked:!0,"aria-label":`Disabled checked`}),(0,z.jsx)(R,{disabled:!0,checked:`indeterminate`,"aria-label":`Disabled mixed`})]})},J={render:()=>(0,z.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(R,{id:`terms`,"aria-invalid":!0,"aria-describedby":`terms-error`,required:!0}),(0,z.jsx)(d,{htmlFor:`terms`,children:`I accept the terms of service`})]}),(0,z.jsx)(`p`,{id:`terms-error`,className:`text-sm text-text-input-destructive`,children:`You must accept the terms to continue.`})]})},Y={render:()=>(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(R,{id:`newsletter`,name:`newsletter`}),(0,z.jsx)(d,{htmlFor:`newsletter`,children:`Email me product updates`})]}),play:async({canvasElement:e})=>{let t=H(e);await V.click(t.getByText(`Email me product updates`)),await B(t.getByRole(`checkbox`,{name:`Email me product updates`})).toBeChecked()}},X={render:()=>{let[e,t]=(0,At.useState)(!1);return(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(R,{id:`controlled`,checked:e,onCheckedChange:e=>t(e===!0)}),(0,z.jsxs)(d,{htmlFor:`controlled`,children:[`Auto-renew policy `,e?`(on)`:`(off)`]})]})}},Z={render:()=>{let e=[`Openly`,`Lemonade`,`Bamboo`],[t,n]=(0,At.useState)([`Openly`]);return(0,z.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(R,{id:`select-all`,checked:t.length===e.length?!0:t.length>0?`indeterminate`:!1,onCheckedChange:t=>n(t===!0?e:[])}),(0,z.jsx)(d,{htmlFor:`select-all`,children:`Select all carriers`})]}),(0,z.jsx)(`div`,{className:`ms-6 flex flex-col gap-2`,children:e.map(e=>(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(R,{id:e,checked:t.includes(e),onCheckedChange:t=>n(n=>t===!0?[...n,e]:n.filter(t=>t!==e))}),(0,z.jsx)(d,{htmlFor:e,children:e})]},e))})]})},play:async({canvasElement:e})=>{let t=H(e),n=t.getByRole(`checkbox`,{name:`Select all carriers`});await B(n).toHaveAttribute(`aria-checked`,`mixed`),await V.click(n),await B(t.getByRole(`checkbox`,{name:`Bamboo`})).toBeChecked()}},Q={render:()=>(0,z.jsx)(`div`,{className:`group`,"data-state":`checked`,children:(0,z.jsx)(R,{"aria-label":`Select carriers`,defaultChecked:`indeterminate`})}),play:async({canvasElement:e})=>{let t=H(e).getByRole(`checkbox`,{name:`Select carriers`}),[n,r]=t.querySelectorAll(`[data-slot=checkbox-indicator] svg`);await B(n).not.toBeVisible(),await B(r).toBeVisible(),await V.click(t),await B(n).toBeVisible(),await B(r).not.toBeVisible()}},$={render:()=>(0,z.jsx)(`div`,{className:`flex flex-col gap-6`,children:[!1,!0].map(e=>(0,z.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(t=>(0,z.jsx)(`div`,{className:`flex items-center gap-6`,children:[!1,!0,`indeterminate`].map(n=>(0,z.jsx)(R,{"aria-label":`${e?`Invalid`:`Valid`} ${t?`disabled`:`enabled`} ${n}`,checked:n,disabled:t,"aria-invalid":e},String(n)))},String(t)))},String(e)))}),play:async({canvasElement:e})=>{let t=H(e);for(let e of[{name:`Valid enabled`,border:`rgb(207, 210, 219)`,fill:`rgb(36, 36, 36)`,cursor:`pointer`},{name:`Valid disabled`,border:`rgb(227, 227, 227)`,fill:`rgb(205, 205, 205)`,cursor:`not-allowed`},{name:`Invalid enabled`,border:`rgb(217, 38, 38)`,fill:`rgb(217, 38, 38)`,cursor:`pointer`},{name:`Invalid disabled`,border:`rgb(240, 168, 168)`,fill:`rgb(240, 168, 168)`,cursor:`not-allowed`}])for(let n of[`false`,`true`,`indeterminate`]){let r=t.getByRole(`checkbox`,{name:`${e.name} ${n}`}),i=getComputedStyle(r);await B(r.getBoundingClientRect().width).toBe(16),await B(r.getBoundingClientRect().height).toBe(16),await B(i.borderRadius).toBe(`4px`),await B(i.borderWidth).toBe(`1px`),await B(i.backgroundColor).toBe(n===`false`?`rgb(255, 255, 255)`:e.fill),await B(i.borderColor).toBe(n===`false`?e.border:e.fill),await B(i.cursor).toBe(e.cursor)}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Select row'
    });
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  }
}`,...U.parameters?.docs?.source},description:{story:`@summary Default standalone checkbox`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...W.parameters?.docs?.source},description:{story:`@summary Checked state`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    checked: 'indeterminate'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Select row'
    });
    await expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
  }
}`,...G.parameters?.docs?.source},description:{story:`A state you set, never one the user clicks into: use it for a parent that
governs a partially selected group.

@summary Mixed state for a partially selected group`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: 'indeterminate'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Select row'
    });
    await expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await userEvent.keyboard(' ');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
  }
}`,...K.parameters?.docs?.source},description:{story:`Starts mixed without a controlled value, then toggles through checked and unchecked.

@summary Uncontrolled checkbox starting in the mixed state`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
            <Checkbox disabled aria-label="Disabled unchecked" />
            <Checkbox disabled defaultChecked aria-label="Disabled checked" />
            <Checkbox disabled checked="indeterminate" aria-label="Disabled mixed" />
        </div>
}`,...q.parameters?.docs?.source},description:{story:`@summary Disabled in every state`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Checkbox id="terms" aria-invalid aria-describedby="terms-error" required />
                <Label htmlFor="terms">I accept the terms of service</Label>
            </div>
            <p id="terms-error" className="text-sm text-text-input-destructive">
                You must accept the terms to continue.
            </p>
        </div>
}`,...J.parameters?.docs?.source},description:{story:`@summary Failed validation, driven by aria-invalid`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
            <Checkbox id="newsletter" name="newsletter" />
            <Label htmlFor="newsletter">Email me product updates</Label>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Email me product updates'));
    await expect(canvas.getByRole('checkbox', {
      name: 'Email me product updates'
    })).toBeChecked();
  }
}`,...Y.parameters?.docs?.source},description:{story:`@summary Labelled checkbox with the text in the hit target`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [accepted, setAccepted] = useState(false);
    return <div className="flex items-center gap-2">
                <Checkbox id="controlled" checked={accepted} onCheckedChange={value => setAccepted(value === true)} />
                <Label htmlFor="controlled">Auto-renew policy {accepted ? '(on)' : '(off)'}</Label>
            </div>;
  }
}`,...X.parameters?.docs?.source},description:{story:`@summary Controlled checkbox driven by component state`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const carriers = ['Openly', 'Lemonade', 'Bamboo'];
    const [selected, setSelected] = useState<string[]>(['Openly']);
    const allSelected = selected.length === carriers.length;
    return <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <Checkbox id="select-all" checked={allSelected ? true : selected.length > 0 ? 'indeterminate' : false} onCheckedChange={value => setSelected(value === true ? carriers : [])} />
                    <Label htmlFor="select-all">Select all carriers</Label>
                </div>
                <div className="ms-6 flex flex-col gap-2">
                    {carriers.map(carrier => <div key={carrier} className="flex items-center gap-2">
                            <Checkbox id={carrier} checked={selected.includes(carrier)} onCheckedChange={value => setSelected(prev => value === true ? [...prev, carrier] : prev.filter(name => name !== carrier))} />
                            <Label htmlFor={carrier}>{carrier}</Label>
                        </div>)}
                </div>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selectAll = canvas.getByRole('checkbox', {
      name: 'Select all carriers'
    });
    await expect(selectAll).toHaveAttribute('aria-checked', 'mixed');
    await userEvent.click(selectAll);
    await expect(canvas.getByRole('checkbox', {
      name: 'Bamboo'
    })).toBeChecked();
  }
}`,...Z.parameters?.docs?.source},description:{story:`@summary Parent select-all checkbox governing a group`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="group" data-state="checked">
            <Checkbox aria-label="Select carriers" defaultChecked="indeterminate" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const checkbox = within(canvasElement).getByRole('checkbox', {
      name: 'Select carriers'
    });
    const [check, minus] = checkbox.querySelectorAll('[data-slot=checkbox-indicator] svg');
    await expect(check).not.toBeVisible();
    await expect(minus).toBeVisible();
    await userEvent.click(checkbox);
    await expect(check).toBeVisible();
    await expect(minus).not.toBeVisible();
  }
}`,...Q.parameters?.docs?.source},description:{story:`A surrounding selection container must not change the checkbox's own glyph.

@summary Mixed checkbox inside another selected group`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            {[false, true].map(invalid => <div key={String(invalid)} className="flex flex-col gap-4">
                    {[false, true].map(disabled => <div key={String(disabled)} className="flex items-center gap-6">
                            {([false, true, 'indeterminate'] as const).map(checked => <Checkbox key={String(checked)} aria-label={\`\${invalid ? 'Invalid' : 'Valid'} \${disabled ? 'disabled' : 'enabled'} \${checked}\`} checked={checked} disabled={disabled} aria-invalid={invalid} />)}
                        </div>)}
                </div>)}
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const states = [{
      name: 'Valid enabled',
      border: 'rgb(207, 210, 219)',
      fill: 'rgb(36, 36, 36)',
      cursor: 'pointer'
    }, {
      name: 'Valid disabled',
      border: 'rgb(227, 227, 227)',
      fill: 'rgb(205, 205, 205)',
      cursor: 'not-allowed'
    }, {
      name: 'Invalid enabled',
      border: 'rgb(217, 38, 38)',
      fill: 'rgb(217, 38, 38)',
      cursor: 'pointer'
    }, {
      name: 'Invalid disabled',
      border: 'rgb(240, 168, 168)',
      fill: 'rgb(240, 168, 168)',
      cursor: 'not-allowed'
    }];
    for (const state of states) {
      for (const value of ['false', 'true', 'indeterminate']) {
        const checkbox = canvas.getByRole('checkbox', {
          name: \`\${state.name} \${value}\`
        });
        const styles = getComputedStyle(checkbox);
        await expect(checkbox.getBoundingClientRect().width).toBe(16);
        await expect(checkbox.getBoundingClientRect().height).toBe(16);
        await expect(styles.borderRadius).toBe('4px');
        await expect(styles.borderWidth).toBe('1px');
        await expect(styles.backgroundColor).toBe(value === 'false' ? 'rgb(255, 255, 255)' : state.fill);
        await expect(styles.borderColor).toBe(value === 'false' ? state.border : state.fill);
        await expect(styles.cursor).toBe(state.cursor);
      }
    }
  }
}`,...$.parameters?.docs?.source},description:{story:`Preserves the legacy palette and 16px footprint for every value and validation state.

@summary Legacy checkbox colours across all interaction states`,...$.parameters?.docs?.description}}},Mt=[`Default`,`Checked`,`Indeterminate`,`UncontrolledIndeterminate`,`Disabled`,`Invalid`,`WithLabel`,`Controlled`,`SelectAll`,`InsideSelectedGroup`,`LegacyStates`]}))();export{W as Checked,X as Controlled,U as Default,q as Disabled,G as Indeterminate,Q as InsideSelectedGroup,J as Invalid,$ as LegacyStates,Z as SelectAll,K as UncontrolledIndeterminate,Y as WithLabel,Mt as __namedExportsOrder,jt as default};