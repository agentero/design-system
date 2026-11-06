import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-BSEOgkhD.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./dist-C8AlzbfS.js";import{n as o,t as s}from"./utils-nsk-j2e0.js";import{i as c,n as l,r as u}from"./merge-props-BOvRQ1x5.js";import{n as d,t as f}from"./button-CC_l5WQm.js";import{C as p,Ct as m,F as ee,Ft as h,H as g,I as _,J as v,L as y,M as b,N as x,Nt as S,O as C,Pt as w,R as T,S as E,Sn as D,T as O,U as k,X as A,Z as te,_ as ne,_n as j,_t as re,a as ie,an as M,b as N,bn as P,c as ae,cn as F,d as oe,dn as I,et as se,f as ce,fn as L,g as le,h as ue,i as de,in as fe,it as pe,j as me,k as he,l as ge,ln as _e,m as ve,mn as R,n as ye,nn as be,nt as xe,o as Se,p as Ce,pn as we,r as Te,rn as Ee,s as De,t as Oe,tt as ke,u as Ae,un as je,ut as Me,v as Ne,vn as Pe,w as Fe,wt as Ie,x as Le,xn as Re,y as ze,yn as Be,z as Ve}from"./useCompositeListItem-DMiuFm50.js";import{a as He,n as Ue,t as z}from"./field-CWwgyjSg.js";import{a as We,r as Ge,t as Ke}from"./index.esm-DDP91yxQ.js";import{a as qe,d as Je,f as Ye,i as Xe,l as Ze,n as Qe,o as $e,p as et,r as tt,s as nt,u as rt}from"./isElementDisabled-DSU-95_S.js";var it,at;function ot(){return(ot=t((()=>{it=`data-checked`,at=`data-unchecked`})))()}var st;function ct(){return(ct=t((()=>{m(),x(),ot(),st={checked(e){return e?{[it]:``}:{[at]:``}},...Ie,...b}})))()}var lt;function ut(){return(ut=t((()=>{lt=`data-composite-item-active`})))()}function dt(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=oe(),{ref:i,index:a}=ye(e),o=n===a,s=ft.useRef(null),c=L(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}var ft;function pt(){return(pt=t((()=>{ft=e(n(),1),I(),Ae(),Oe()})))()}function mt(e){let{render:t,className:n,style:r,state:i=Ee,props:a=be,refs:o=be,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=dt({metadata:s});return k(l,e,{state:i,ref:[f,...o],props:[d,...a,u],stateAttributesMapping:c})}function ht(){return(ht=t((()=>{M(),g(),pt()})))()}function gt(){return _t.useContext(vt)}var _t,vt;function yt(){return(yt=t((()=>{_t=e(n(),1),vt=_t.createContext({disabled:!1})})))()}function bt(e,t,n,r=!0,i){let[a,o]=Ct.useState(),s=Le(i?`${i}-label`:void 0),c=e??t??a;return Pe(()=>{let i=e||t||!r?void 0:xt(n.current,s);a!==i&&o(i)}),c}function xt(e,t){let n=St(e);if(n)return!n.id&&t&&(n.id=t),n.id||void 0}function St(e){if(!e)return;let t=e.parentElement;if(t&&t.tagName===`LABEL`)return t;let n=e.id;if(n){let t=e.nextElementSibling;if(t&&t.htmlFor===n)return t}let r=e.labels;return r&&r[0]}var Ct;function wt(){return(wt=t((()=>{Ct=e(n(),1),j(),N()})))()}function Tt(){return Et.useContext(Dt)}var Et,Dt;function Ot(){return(Ot=t((()=>{Et=e(n(),1),Dt=Et.createContext(void 0)})))()}function kt(){let e=At.useContext(jt);if(e===void 0)throw Error(Re(52));return e}var At,jt;function Mt(){return(Mt=t((()=>{D(),At=e(n(),1),jt=At.createContext(void 0)})))()}var Nt,Pt,Ft;function It(){return(It=t((()=>{Nt=e(n(),1),I(),j(),F(),M(),pe(),Me(),ct(),ae(),N(),g(),ie(),ut(),ht(),C(),yt(),Ne(),wt(),le(),Ot(),Mt(),Pt=r(),Ft=Nt.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,readOnly:a=!1,required:o=!1,"aria-labelledby":s,value:c,inputRef:l,nativeButton:u=!1,id:d,style:f,...p}=e,m=Tt(),{disabled:h,readOnly:g,required:_,form:v,checkedValue:y,touched:b=!1,validation:x,name:S,setCheckedValue:C=fe,setTouched:w=fe,registerInputRef:T=fe}=m??{},{setTouched:E,setFilled:D,state:O,disabled:A}=he(),te=gt(),{labelId:j,getDescriptionProps:ie}=ze(),M=A||te.disabled||h||i,N=g||a,P=_||o,ae=v,F=m?y===c:c===``,oe=Nt.useRef(null),I=Nt.useRef(null),se=x?.registerInput,ce=Nt.useCallback(e=>se?.(e,{controlRef:oe,value:void 0}),[se]),le=L(l,I,T,ce);Pe(()=>{I.current?.checked&&D(!0)},[D]),Pe(()=>{if(I.current){if(M&&F){T(null);return}T(I.current)}},[F,M,T]);let ue=Le(),de=ne({id:d}),pe=u?void 0:de,me={role:`radio`,"aria-checked":F,"aria-labelledby":bt(s,j,I,!u,pe),[lt]:F?``:void 0,id:u?de:ue,onKeyDown(e){e.key===`Enter`&&e.preventDefault()},onClick(e){if(e.defaultPrevented||M||N)return;e.preventDefault();let t=I.current;t&&De(t,e)},onFocus(e){e.defaultPrevented||M||N||!b||(I.current?.click(),w(!1))}},{getButtonProps:ge,buttonRef:ve}=Se({disabled:M,native:u,composite:!1}),R={type:`radio`,ref:le,form:ae,id:pe,name:S,tabIndex:-1,style:S?je:_e,"aria-hidden":!0,...c===void 0?Ee:{value:ee(c)},disabled:M,checked:F,required:P,readOnly:N,onChange(e){if(e.nativeEvent.defaultPrevented||M||N||c===void 0)return;let t=xe(re,e.nativeEvent);C(c,t),!t.isCanceled&&E(!0)},onClick(e){e.stopPropagation()},onFocus(){oe.current?.focus()}},ye=Nt.useMemo(()=>({...O,required:P,disabled:M,readOnly:N,checked:F}),[O,M,N,F,P]),be=ye,Ce=m!==void 0,we=[t,oe,ve],Te=[me,p,ge,ie,x?e=>x.getValidationProps(M,e):Ee],Oe=k(`span`,e,{enabled:!Ce,state:ye,ref:we,props:Te,stateAttributesMapping:st});return(0,Pt.jsxs)(jt.Provider,{value:be,children:[Ce?(0,Pt.jsx)(mt,{tag:`span`,render:n,className:r,style:f,state:ye,refs:we,props:Te,stateAttributesMapping:st}):Oe,(0,Pt.jsx)(`input`,{...R,suppressHydrationWarning:!0})]})})})))()}var Lt,Rt;function zt(){return(zt=t((()=>{Lt=e(n(),1),g(),Mt(),ct(),_(),T(),Rt=Lt.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,s=kt(),c=s.checked,{mounted:l,transitionStatus:u,setMounted:d}=Ve(c),f={...s,transitionStatus:u},p=Lt.useRef(null),m=a||l,ee=k(`span`,e,{ref:[t,p],state:f,props:o,stateAttributesMapping:st});return y({batch:!0,enabled:!c,open:c,ref:p,onComplete(){c||d(!1)}}),m?ee:null})})))()}function Bt(e){let{loopFocus:t=!0,orientation:n=`both`,grid:r,onLoop:i,direction:a,highlightedIndex:o,onHighlightedIndexChange:s,rootRef:c,enableHomeAndEndKeys:l=!1,stopEventPropagation:u,disabledIndices:d,modifierKeys:f=be}=e,[p,m]=Ut.useState(0),ee=r!=null,h=Ut.useRef(null),g=L(h,c),_=Ut.useRef([]),y=Ut.useRef(!1),b=Ut.useRef(null),x=o??p,S=R((e,t=!1)=>{if(b.current=_.current[e]??null,(s??m)(e),t){let t=_.current[e];et(h.current,t,a,n)}}),C=R(e=>{if(e.size===0)return;if(y.current){let e=_.current,t=e.indexOf(b.current);if(t===-1){let t=e[x];!t||ke(e,x,d)?S(Vt(e,d)):b.current=t}else t!==x&&S(t);return}y.current=!0;let t=Array.from(e.keys()),r=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,i=r?e.get(r)?.index??-1:-1;if(i!==-1)S(i);else if(ke(t,x,d)){let e=v(t,{disabledIndices:d});se(t,e)||S(e)}et(h.current,r,a,n)});Pe(()=>{if(d==null||o!=null||!y.current)return;let e=_.current;if(ke(e,x,d)){let t=v(e,{disabledIndices:d});se(e,t)||S(t)}},[d,o,x,_,S]);let T=R((e,t,n)=>i?i(e,t,n,_):n),E=R(e=>{let o=e.key===`Home`||e.key===`End`;if(!nt.has(e.key)||!l&&o||Ht(e,f)||!h.current)return;let s=a===`rtl`,c=s?Xe:qe,p=s?qe:Xe,m=n===`vertical`?tt:c,g=n===`vertical`?$e:p,y=w(e.nativeEvent);if(y!=null&&Ye(y)&&!Qe(y)){let t=y.selectionStart,n=y.selectionEnd,r=y.value;if(t==null||e.shiftKey||t!==n||e.key!==g&&t<r.length||e.key!==m&&t>0)return}let b=x,C=te(_,d),E=A(_,d);r!=null&&(b=r({disabledIndices:d,elementsRef:_,event:e,highlightedIndex:x,loopFocus:t,maxIndex:E,minIndex:C,onLoop:T,orientation:n,rtl:s}));let D=n!==`vertical`&&e.key===c||n!==`horizontal`&&e.key===`ArrowDown`,O=n!==`vertical`&&e.key===p||n!==`horizontal`&&e.key===`ArrowUp`;l&&(e.key===`Home`?b=C:e.key===`End`&&(b=E)),b===x&&(D||O)&&(t&&b===E&&D?(b=C,i&&(b=i(e,x,b,_))):t&&b===C&&O?(b=E,i&&(b=i(e,x,b,_))):b=v(_.current,{startingIndex:b,decrement:O,disabledIndices:d})),b!==x&&!se(_.current,b)&&(u&&e.stopPropagation(),(ee||o||D||O)&&e.preventDefault(),S(b,!0),queueMicrotask(()=>{_.current[b]?.focus()}))});return{props:{ref:g,onFocus(e){let t=h.current,n=w(e.nativeEvent);t&&n!=null&&Ye(n)&&n.setSelectionRange(0,n.value.length)},onKeyDown:E},highlightedIndex:x,onHighlightedIndexChange:S,elementsRef:_,onMapChange:C,relayKeyboardEvent:E}}function Vt(e,t){let n=-1;for(let r=0;r<e.length;r+=1){let i=e[r];if(i&&!ke(e,r,t)){if(i.hasAttribute(`data-composite-item-active`))return r;n===-1&&(n=r)}}return Math.max(n,0)}function Ht(e,t){for(let n of Ze)if(!t.includes(n)&&e.getModifierState(n))return!0;return!1}var Ut;function Wt(){return(Wt=t((()=>{Ut=e(n(),1),we(),I(),j(),M(),Je(),ut(),h()})))()}function Gt(e){let{render:t,className:n,style:r,refs:i=be,props:a=be,state:o=Ee,stateAttributesMapping:s,highlightedIndex:c,onHighlightedIndexChange:l,orientation:u,grid:d,loopFocus:f,onLoop:p,enableHomeAndEndKeys:m,onMapChange:ee,stopEventPropagation:h=!0,rootRef:g,disabledIndices:_,modifierKeys:v,highlightItemOnHover:y=!1,tag:b=`div`,...x}=e,{props:S,highlightedIndex:C,onHighlightedIndexChange:w,elementsRef:T,onMapChange:E,relayKeyboardEvent:D}=Bt({grid:d,loopFocus:f,onLoop:p,orientation:u,highlightedIndex:c,onHighlightedIndexChange:l,rootRef:g,stopEventPropagation:h,enableHomeAndEndKeys:m,direction:Ce(),disabledIndices:_,modifierKeys:v}),O=k(b,e,{state:o,ref:i,props:[S,...a,x],stateAttributesMapping:s}),A=Kt.useMemo(()=>({highlightedIndex:C,onHighlightedIndexChange:w,highlightItemOnHover:y,relayKeyboardEvent:D}),[C,w,y,D]);return(0,qt.jsx)(ge.Provider,{value:A,children:(0,qt.jsx)(Te,{elementsRef:T,onMapChange:e=>{ee?.(e),E(e)},children:O})})}var Kt,qt;function Jt(){return(Jt=t((()=>{Kt=e(n(),1),M(),de(),Wt(),Ae(),g(),ce(),qt=r()})))()}function Yt(e,t){return e.matches(`:disabled`)?!1:!t||e.form===t||e.form===null&&!e.hasAttribute(`form`)}function Xt(){return(Xt=t((()=>{n(),x(),Object.keys(me)})))()}function Zt(e=!1){let t=Qt.useContext($t);if(!t&&!e)throw Error(Re(86));return t}var Qt,$t;function en(){return(en=t((()=>{D(),Qt=e(n(),1),$t=Qt.createContext(void 0)})))()}var B,tn,nn,rn;function an(){return(an=t((()=>{B=e(n(),1),Be(),we(),N(),h(),Je(),Jt(),C(),Fe(),x(),Xt(),en(),E(),Ne(),ve(),Ot(),tn=r(),nn=[rt],rn=B.forwardRef(function(e,t){let{render:n,className:r,disabled:i,readOnly:a,required:o,onValueChange:s,value:c,defaultValue:l,form:u,name:d,inputRef:f,id:m,style:ee,...h}=e,{setTouched:g,setFocused:_,validationMode:v,name:y,disabled:x,state:C,validation:w,setDirty:T,setFilled:E,validityData:D}=he(),{labelId:k}=ze(),{clearErrors:A,elementRef:te}=p(),ne=Zt(!0),j=x||i,re=y??d,ie=Le(m),[M,N]=P({controlled:c,default:l,name:`RadioGroup`,state:`value`}),[ae,F]=B.useState(!1),oe=R((e,t)=>{s?.(e,t),!t.isCanceled&&N(e)}),I=w.getInputControl,se=B.useMemo(()=>({get current(){return I()}}),[I]),ce=B.useRef(null),L=B.useRef(null);function le(e){let t;return f&&(typeof f==`function`?t=f(e):f.current=e),ce.current=e,t}let de=R(e=>{if(!e||e.disabled)return;L.current||=e;let t=ce.current,n=e.checked||t==null||t.disabled?le(e):void 0;return()=>{L.current===e&&(L.current=null),ce.current===e?n?(n(),ce.current=null):le(null):n?.()}}),fe=R(()=>{let e=te.current;if(!e)return M??null;for(let t of w.registeredInputs.keys())if(t.checked&&Yt(t,e))return M??null;return null});O(se,ie,M??null,fe,!j,d),ue(M,()=>{A(re),T(M!==D.initialValue),E(M!=null),w.change(M);let e=L.current;M==null&&e&&!e.disabled&&le(e)});let pe=k??ne?.legendId,me={...C,disabled:j??!1,required:o??!1,readOnly:a??!1},ge=B.useMemo(()=>({checkedValue:M,disabled:j,form:u,validation:w,name:re,readOnly:a,registerInputRef:de,required:o,setCheckedValue:oe,setTouched:F,touched:ae}),[M,j,u,w,re,a,de,o,oe,F,ae]),_e={id:m,role:`radiogroup`,"aria-required":o||void 0,"aria-disabled":j||void 0,"aria-readonly":a||void 0,"aria-labelledby":pe,onFocus(){_(!0)},onBlur(e){S(e.currentTarget,e.relatedTarget)||(g(!0),_(!1),v===`onBlur`&&w.commit(M))},onKeyDownCapture(e){e.key.startsWith(`Arrow`)&&(F(!0),_(!0))}};return(0,tn.jsx)(Dt.Provider,{value:ge,children:(0,tn.jsx)(Gt,{render:n,className:r,style:ee,state:me,props:[_e,h,e=>w.getValidationProps(j??!1,e)],refs:[t],stateAttributesMapping:b,enableHomeAndEndKeys:!1,modifierKeys:nn})})})})))()}var V,H,on,sn,cn,ln,un,dn;function fn(){return(fn=t((()=>{V=n(),It(),zt(),an(),a(),o(),l(),Ue(),H=r(),on=i({slots:{root:[`flex [:is([data-slot=field-content],[data-slot=field-label],[data-slot=label],[data-slot=field-description])+&]:mt-2`,`[&:has(+[data-slot=field-error])]:mb-2`],item:`group/radio-group-item flex`,label:[`group/radio-group-label flex cursor-pointer items-start gap-3 text-sm text-text-default-base-primary select-none`,`group-data-disabled/radio-group-item:cursor-not-allowed`,`in-data-readonly:cursor-default`],control:`flex size-6 shrink-0 items-center justify-center`,radio:[`relative box-border inline-flex size-4 shrink-0 items-center justify-center rounded-full`,`border-[1.5px] border-solid border-border-checkbox-default bg-bg-input-normal`,`cursor-pointer transition-colors duration-150`,`not-data-disabled:data-unchecked:shadow-xs`,`not-data-disabled:not-data-readonly:not-in-aria-invalid:data-unchecked:group-hover/radio-group-label:border-border-input-hover`,`data-checked:border-bg-checkbox-selected`,`outline-solid outline-2 outline-offset-2 outline-transparent`,`focus-visible:outline-focus-ring-button-primary`,`in-aria-invalid:border-border-input-destructive`,`in-aria-invalid:focus-visible:outline-focus-ring-button-destructive`,`in-aria-invalid:data-checked:border-bg-default-danger-primary`,`data-disabled:cursor-not-allowed data-disabled:border-border-checkbox-disabled data-disabled:bg-bg-input-disable`,`in-aria-invalid:data-disabled:border-bg-checkbox-invalid-disabled`,`in-data-readonly:cursor-default`],indicator:[`size-2 rounded-full bg-bg-checkbox-selected`,`in-aria-invalid:bg-bg-default-danger-primary`,`data-disabled:bg-bg-checkbox-disabled`,`in-aria-invalid:data-disabled:bg-bg-checkbox-invalid-disabled`],text:`flex min-h-6 items-center group-data-disabled/radio-group-item:text-text-default-disable-primary`},variants:{orientation:{vertical:{root:`flex-col gap-2`},horizontal:{root:`flex-row flex-wrap gap-x-6 gap-y-2`}}},defaultVariants:{orientation:`vertical`}}),sn=(0,V.createContext)(null),cn=(e,t)=>e.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1,ln=e=>Array.from(e?.querySelectorAll(`input[type=radio]`)??[]),un=({value:e,defaultValue:t,onValueChange:n,disabled:r,readOnly:i,required:a,orientation:o=`vertical`,name:l,"aria-invalid":d,"aria-labelledby":f,"aria-describedby":p,ref:m,controlRef:ee,className:h,children:g,..._})=>{let v=He(),y=on({orientation:o}),b=f??(_[`aria-label`]===void 0?v?.labelId:void 0),x=r??(v?.disabled||void 0),S=i??(v?.readOnly||void 0),C=a??(v?.required||void 0),w=d??(v?.invalid||void 0),T=u({"aria-describedby":v?.describedBy},{"aria-describedby":p})[`aria-describedby`],[E]=(0,V.useState)(t??null),[D,O]=(0,V.useState)(t??null),k=e!==void 0,A=k?e:D,[te,ne]=(0,V.useState)(e);e!==te&&(ne(e),e===void 0&&O(null));let[j,re]=(0,V.useState)([]),ie=(0,V.useCallback)(e=>(re(t=>[...t.filter(t=>t.element!==e.element),e].sort(cn)),()=>re(t=>t.filter(t=>t.element!==e.element))),[]),M=j.filter(e=>!e.disabled),N=M.find(e=>e.value===A)??M[0];(0,V.useImperativeHandle)(ee,()=>({focus:()=>N?.element.focus()}),[N]);let P=(0,V.useRef)(null),ae=(0,V.useMemo)(()=>c(P,m),[m]),F=(0,V.useRef)({isControlled:k,selected:A,initialValue:E});return F.current={isControlled:k,selected:A,initialValue:E},(0,V.useEffect)(()=>{let e=P.current?.closest(`form`);if(!e)return;let t=()=>setTimeout(()=>{let{isControlled:e,selected:t,initialValue:n}=F.current,r=e?t:n;e||O(n);for(let e of ln(P.current))e.checked=e.value===r});return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[]),(0,H.jsx)(sn,{value:{styles:y,disabled:x,tabStop:N?.value,register:ie},children:(0,H.jsx)(rn,{..._,ref:ae,value:A,onValueChange:e=>{e!==null&&(k||O(e),n?.(e))},disabled:x,readOnly:S,required:C&&l!==void 0,"aria-required":C||void 0,name:l,"data-slot":`radio-group`,"data-orientation":o,"aria-orientation":o,"aria-invalid":w,"aria-labelledby":b,"aria-describedby":T,className:s(y.root(),h),children:g})})},un.displayName=`RadioGroup.Root`,dn=({id:e,value:t,disabled:n,className:r,children:i,...a})=>{let o=(0,V.use)(sn),c=(0,V.useId)();if(!o)throw Error(`RadioGroup.Item must be rendered inside RadioGroup.Root.`);let{styles:l,register:u}=o,d=e??c,f=!!(o.disabled||n),p=(0,V.useRef)(null);return(0,V.useLayoutEffect)(()=>{if(p.current)return u({value:t,disabled:f,element:p.current})},[u,t,f]),(0,H.jsx)(`div`,{...a,"data-slot":`radio-group-item`,"data-disabled":f||void 0,className:s(l.item(),r),children:(0,H.jsxs)(`label`,{htmlFor:d,"data-slot":`radio-group-item-label`,className:l.label(),children:[(0,H.jsx)(`span`,{"data-slot":`radio-group-item-control`,className:l.control(),children:(0,H.jsx)(Ft,{nativeButton:!0,render:(0,H.jsx)(`button`,{type:`button`}),ref:p,id:d,value:t,disabled:f,tabIndex:t===o.tabStop?0:-1,"data-slot":`radio-group-radio`,className:l.radio(),children:(0,H.jsx)(Rt,{"data-slot":`radio-group-indicator`,className:l.indicator()})})}),(0,H.jsx)(`span`,{"data-slot":`radio-group-item-text`,className:l.text(),children:i})]})})},dn.displayName=`RadioGroup.Item`;try{on.displayName=`radioGroupRecipe`,on.__docgenInfo={description:"Style recipe for RadioGroup. Slots: `root`, `item`, `label` (the clickable row), `control` (24px\nslot for the radio), `radio` (the 16px circle), `indicator` (the dot), `text`.",displayName:`radioGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{orientation:{defaultValue:{value:`vertical`},description:``,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{un.displayName=`RadioGroup.Root`,un.__docgenInfo={description:'Single-select list of radios that holds the selected value as a `string`.\nRenders `role="radiogroup"`: name it with `aria-labelledby` or\n`aria-label`, or put it inside a `Field.Root`, which names, describes,\ninvalidates, disables, requires and makes it read-only (the group\'s own\nprops win). Tab enters the group on the selected item, and the arrow keys\nmove the selection.\n\nUse it when the options are few and should all stay visible. For a long\nlist use [Combobox](?path=/docs/components-combobox--docs), for several\nvalues use [CheckboxGroup](?path=/docs/components-checkboxgroup--docs), and\nfor an on/off setting use [Switch](?path=/docs/components-switch--docs).\n\nEvery native `<div>` attribute is forwarded to the group, `aria-invalid`\nincluded: `role="radiogroup"` supports it, and each radio paints the\ndestructive state from it. With react-hook-form, wire it through\n`Controller` (`value`, `onValueChange`, and `field.ref` as `controlRef`),\nnot `register`: the radios\' inputs belong to the group, not to the form\nlibrary.\n\nThe group is a single Tab stop: the selected radio if it is enabled, else\nthe first enabled one. A native form reset puts an uncontrolled group back\non `defaultValue` and a controlled one on its `value`.',displayName:`RadioGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Controlled value of the selected item. `null` leaves every item unselected; `undefined`\nmakes the group uncontrolled.",name:`value`,required:!1,tags:{},type:{name:`string | null`}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Initial value for an uncontrolled group. Leave it out to start with nothing selected.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Fires with the value of the item the user selects.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Disables every item in the group.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Keeps the items focusable but stops the selection from changing.`,name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Marks the group required (`aria-required`). With `name`, the browser also\nblocks a form submission until an item is selected; without it the radios\nare not one native group, so validation is left to the form.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"`vertical` (default) stacks the items; `horizontal` lays them in a row that wraps.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Form field name; the form submits `name=value` for the selected item.",name:`name`,required:!1,tags:{},type:{name:`string`}},controlRef:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Receives `{ focus }`, which moves focus to the radio Tab would land on.\nPass a form library's field ref here (react-hook-form's `field.ref`) so it\ncan focus the group on a failed submit.",name:`controlRef`,required:!1,tags:{},type:{name:`Ref<RadioGroupControl>`}}},tags:{summary:`Single-select radio list holding its selected value as a string`,example:`<span id="payment">Payment plan</span>
<RadioGroup.Root aria-labelledby="payment" defaultValue="monthly" onValueChange={setPlan}>
  <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
  <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
</RadioGroup.Root>`,dataAttribute:`{string} data-orientation - "vertical" | "horizontal"
{string} data-disabled - Present when the whole group is disabled
{string} data-readonly - Present when the group is read-only`}}}catch{}try{dn.displayName=`RadioGroup.Item`,dn.__docgenInfo={description:"One option of a [RadioGroup](?path=/docs/components-radiogroup--docs): a\nradio and its `<label>`, inside `RadioGroup.Root`. Native `<div>`\nattributes go to the row, except `id`, which goes to the radio.",displayName:`RadioGroup.Item`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Value the group takes when this item is selected.`,name:`value`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Disables this item only. The group's `disabled` wins over `false`.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Radio and label for one value of the group`,dataAttribute:`{string} data-disabled - Present when the item or its group is disabled`}}}catch{}})))()}var U;function pn(){return(pn=t((()=>{fn(),U={Root:un,Item:dn}})))()}var W,G,K,q,J,mn,Y,hn,X,Z,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,Q,On,kn,An,jn,Mn,Nn,Pn,Fn,In,$,Ln,Rn;function zn(){return(zn=t((()=>{W=n(),Ge(),pn(),d(),Ue(),G=r(),{expect:K,fn:q,userEvent:J,waitFor:mn,within:Y}=__STORYBOOK_MODULE_TEST__,hn={title:`Components/RadioGroup`,component:U.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},"aria-invalid":{control:`boolean`},onValueChange:{action:`valueChange`}},args:{"aria-label":`Payment plan`,defaultValue:`monthly`},render:e=>(0,G.jsx)(U.Root,{...e,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),parameters:{docs:{description:{component:"`Root` owns the selected value; each `Item` is a radio with its label."}}}},X=[{value:`monthly`,label:`Monthly`},{value:`quarterly`,label:`Quarterly`},{value:`annual`,label:`Annual`}],Z={args:{onValueChange:q()},play:async({args:e,canvasElement:t})=>{let n=Y(t);await K(n.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument(),await K(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await K(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(22, 24, 29)`}),await J.click(n.getByRole(`radio`,{name:`Quarterly`})),await K(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await K(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await K(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await J.click(n.getByText(`Annual`)),await K(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await K(e.onValueChange).toHaveBeenLastCalledWith(`annual`);let r=n.getByRole(`radio`,{name:`Monthly`});await J.click(r.closest(`[data-slot=radio-group-item-control]`)),await K(r).toBeChecked()}},gn={args:{orientation:`horizontal`},play:async({canvasElement:e})=>{let t=Y(e),[n,r]=t.getAllByRole(`radio`).map(e=>e.closest(`[data-slot=radio-group-item]`).getBoundingClientRect());await K(t.getByRole(`radiogroup`)).toHaveAttribute(`data-orientation`,`horizontal`),await K(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-orientation`,`horizontal`),await K(r.top).toBe(n.top),await K(r.left-n.right).toBe(24)}},_n={args:{"aria-label":void 0,defaultValue:void 0},render:e=>(0,G.jsxs)(z.Root,{invalid:!0,required:!0,children:[(0,G.jsxs)(z.Content,{children:[(0,G.jsx)(z.Label,{children:`Payment plan`}),(0,G.jsx)(z.Description,{children:`How often the insured pays the premium.`})]}),(0,G.jsx)(U.Root,{...e,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),(0,G.jsx)(z.Error,{errors:[{message:`Choose a payment plan`}]})]}),play:async({canvasElement:e})=>{let t=Y(e).getByRole(`radiogroup`,{name:/Payment plan/});await K(t).toHaveAccessibleDescription(/premium.*Choose a payment plan|Choose a payment plan.*premium/),await K(t).toHaveAttribute(`aria-invalid`,`true`),await K(t).toHaveAttribute(`aria-required`,`true`)}},vn={args:{disabled:!0,onValueChange:q()},play:async({args:e,canvasElement:t})=>{let n=Y(t);for(let e of n.getAllByRole(`radio`))await K(e).toBeDisabled();await K(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(207, 210, 219)`}),await J.click(n.getByText(`Annual`)),await K(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await K(e.onValueChange).not.toHaveBeenCalled()}},yn={args:{onValueChange:q()},render:e=>(0,G.jsxs)(U.Root,{...e,children:[(0,G.jsx)(U.Item,{value:`monthly`,children:`Monthly`}),(0,G.jsx)(U.Item,{value:`quarterly`,disabled:!0,children:`Quarterly (not offered by this carrier)`}),(0,G.jsx)(U.Item,{value:`annual`,children:`Annual`})]}),play:async({args:e,canvasElement:t})=>{let n=Y(t);await K(n.getByRole(`radio`,{name:/Quarterly/})).toBeDisabled(),await J.click(n.getByRole(`radio`,{name:`Monthly`})),await J.keyboard(`{ArrowDown}`),await K(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await K(e.onValueChange).toHaveBeenLastCalledWith(`annual`)}},bn={args:{readOnly:!0,onValueChange:q()},play:async({args:e,canvasElement:t})=>{let n=Y(t),r=n.getByRole(`radio`,{name:`Annual`});await K(n.getByRole(`radiogroup`)).toHaveAttribute(`aria-readonly`,`true`),await J.click(r),await J.click(n.getByText(`Quarterly`)),await K(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await K(r).not.toBeChecked(),await K(e.onValueChange).not.toHaveBeenCalled()}},xn={args:{"aria-invalid":!0,"aria-describedby":`plan-error`,defaultValue:void 0},render:e=>(0,G.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,G.jsx)(U.Root,{...e,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),(0,G.jsx)(`p`,{id:`plan-error`,className:`text-sm text-text-input-destructive`,children:`Choose a payment plan.`})]}),play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`radiogroup`,{name:`Payment plan`});await K(n).toHaveAttribute(`aria-invalid`,`true`),await K(n).toHaveAccessibleDescription(`Choose a payment plan.`),await K(t.getByRole(`radio`,{name:`Monthly`})).toHaveStyle({borderColor:`rgb(217, 38, 38)`})}},Sn={render:()=>{let[e,t]=(0,W.useState)(`monthly`);return(0,G.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,G.jsxs)(`div`,{className:`flex gap-3`,children:[(0,G.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,G.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(`annual`),children:`Choose annual`})]}),(0,G.jsx)(U.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),(0,G.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e??`none`]})]})},play:async({canvasElement:e})=>{let t=Y(e);await J.click(t.getByRole(`button`,{name:`Choose annual`})),await K(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J.tab(),await K(t.getByRole(`radio`,{name:`Annual`})).toHaveFocus(),await J.click(t.getByRole(`radio`,{name:`Quarterly`})),await K(t.getByRole(`status`)).toHaveTextContent(`quarterly`),await J.click(t.getByRole(`button`,{name:`Clear`}));for(let e of t.getAllByRole(`radio`))await K(e).not.toBeChecked();await K(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},Cn={render:()=>{let[e,t]=(0,W.useState)(null);return(0,G.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,G.jsx)(U.Root,{"aria-label":`Payment plan`,name:`plan`,required:!0,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),(0,G.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,G.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Y(e);await J.click(t.getByRole(`button`,{name:`Submit`})),await K(t.queryByRole(`status`)).not.toBeInTheDocument(),await J.click(t.getByRole(`radio`,{name:`Annual`})),await J.click(t.getByRole(`button`,{name:`Submit`})),await K(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},wn={render:()=>{let{control:e,handleSubmit:t}=We({defaultValues:{plan:``}}),[n,r]=(0,W.useState)(null);return(0,G.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:t(e=>r(e.plan)),children:[(0,G.jsx)(Ke,{name:`plan`,control:e,rules:{required:`Choose a payment plan`},render:({field:e,fieldState:t})=>(0,G.jsxs)(z.Root,{invalid:t.invalid,required:!0,children:[(0,G.jsx)(z.Label,{children:`Payment plan`}),(0,G.jsx)(U.Root,{controlRef:e.ref,value:e.value,onValueChange:e.onChange,onBlur:e.onBlur,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),(0,G.jsx)(z.Error,{errors:[t.error]})]})}),(0,G.jsx)(f,{type:`submit`,children:`Submit`}),n&&(0,G.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=Y(e);await J.click(t.getByRole(`button`,{name:`Submit`})),await K(t.getByRole(`radio`,{name:`Monthly`})).toHaveFocus();let n=t.getByRole(`radiogroup`,{name:/Payment plan/});await K(n).toHaveAccessibleDescription(`Choose a payment plan`),await K(n).toHaveAttribute(`aria-invalid`,`true`),await K(n.getBoundingClientRect().top-n.previousElementSibling.getBoundingClientRect().bottom).toBe(16),await J.keyboard(`{ArrowDown}`),await J.click(t.getByRole(`button`,{name:`Submit`})),await K(await t.findByRole(`status`)).toHaveTextContent(`quarterly`)}},Tn={render:e=>(0,G.jsx)(`div`,{className:`w-60`,children:(0,G.jsxs)(U.Root,{...e,children:[(0,G.jsx)(U.Item,{value:`monthly`,children:`Monthly, charged on the policy's effective day of every month`}),(0,G.jsx)(U.Item,{value:`annual`,children:`Annual`})]})}),play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`radio`,{name:/Monthly/}),r=t.getByText(/Monthly/),i=n.parentElement.getBoundingClientRect(),a=n.getBoundingClientRect();await K(r.getBoundingClientRect().height).toBeGreaterThan(24),await K(i.top).toBe(r.getBoundingClientRect().top),await K(i.height).toBe(24),await K(a.top-i.top).toBe(4),await K(a.width).toBe(16)}},En={render:()=>(0,G.jsx)(`div`,{className:`flex flex-wrap gap-10`,children:[[`Enabled`,{}],[`Disabled`,{disabled:!0}],[`Invalid`,{"aria-invalid":!0}],[`Read-only`,{readOnly:!0}]].map(([e,t])=>(0,G.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,G.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,G.jsx)(U.Root,{"aria-label":`${e} payment plan`,defaultValue:`quarterly`,...t,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))})]},e))})},Dn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{onValueChange:q()},render:e=>(0,G.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,G.jsx)(U.Root,{...e,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),(0,G.jsx)(f,{variant:`secondary`,children:`Continue`})]}),play:async({args:e,canvasElement:t})=>{let n=Y(t);await J.tab(),await K(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await J.keyboard(`{ArrowDown}`),await K(n.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await K(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await K(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await J.keyboard(`{ArrowUp}{ArrowUp}`),await K(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J.tab(),await K(n.getByRole(`button`,{name:`Continue`})).toHaveFocus()}},Q={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:void 0,onValueChange:q()},play:async({args:e,canvasElement:t})=>{let n=Y(t);for(let e of n.getAllByRole(`radio`))await K(e).not.toBeChecked();await J.tab(),await K(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await K(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await K(e.onValueChange).not.toHaveBeenCalled()}},On={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":void 0,"aria-labelledby":`plan-heading`},render:e=>(0,G.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,G.jsx)(`span`,{id:`plan-heading`,className:`text-sm font-semibold text-text-input-normal`,children:`Payment plan`}),(0,G.jsx)(U.Root,{...e,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=Y(e);await K(t.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument()}},kn={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,G.jsxs)(U.Root,{...e,children:[(0,G.jsx)(U.Item,{value:`monthly`,disabled:!0,children:`Monthly (no longer offered)`}),(0,G.jsx)(U.Item,{value:`quarterly`,children:`Quarterly`}),(0,G.jsx)(U.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=Y(e);await K(t.getByRole(`radio`,{name:/Monthly/})).toBeChecked(),await J.tab(),await K(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus()}},An={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,W.useState)(null);return(0,G.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,G.jsx)(U.Root,{"aria-label":`Payment plan`,name:`plan`,defaultValue:`monthly`,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),(0,G.jsxs)(`div`,{className:`flex gap-3`,children:[(0,G.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,G.jsx)(f,{type:`submit`,children:`Submit`})]}),e&&(0,G.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Y(e);await J.click(t.getByRole(`radio`,{name:`Annual`})),await J.click(t.getByRole(`button`,{name:`Reset`})),await K(t.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await K(t.getByRole(`radio`,{name:`Annual`})).not.toBeChecked(),await J.click(t.getByRole(`button`,{name:`Submit`})),await K(await t.findByRole(`status`)).toHaveTextContent(`monthly`)}},jn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,W.useState)(`quarterly`),[n,r]=(0,W.useState)(null);return(0,G.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),r(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,G.jsx)(U.Root,{"aria-label":`Payment plan`,name:`plan`,value:e,onValueChange:t,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),(0,G.jsxs)(`div`,{className:`flex gap-3`,children:[(0,G.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,G.jsx)(f,{type:`submit`,children:`Submit`})]}),n&&(0,G.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=Y(e);await J.click(t.getByRole(`radio`,{name:`Annual`})),await J.click(t.getByRole(`button`,{name:`Reset`})),await K(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J.click(t.getByRole(`button`,{name:`Submit`})),await K(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},Mn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,W.useState)(!1);return(0,G.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(!0)},children:[(0,G.jsx)(U.Root,{"aria-label":`Payment plan`,required:!0,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))}),(0,G.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,G.jsx)(`output`,{className:`text-sm`,children:`Sent`})]})},play:async({canvasElement:e})=>{let t=Y(e);await K(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-required`,`true`),await J.click(t.getByRole(`radio`,{name:`Annual`})),await K(e.querySelector(`form`).checkValidity()).toBe(!0),await J.click(t.getByRole(`button`,{name:`Submit`})),await K(await t.findByRole(`status`)).toHaveTextContent(`Sent`)}},Nn={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,G.jsxs)(U.Root,{...e,children:[(0,G.jsx)(U.Item,{id:`plan-monthly`,value:`monthly`,children:`Monthly`}),(0,G.jsx)(U.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=Y(e);await K(t.getByRole(`radio`,{name:`Monthly`})).toHaveAttribute(`id`,`plan-monthly`),await K(t.getByRole(`radio`,{name:`Annual`}).id).not.toBe(``)}},Pn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":`Plan`,"aria-describedby":`plan-note`,disabled:!1},render:e=>(0,G.jsxs)(z.Root,{disabled:!0,children:[(0,G.jsxs)(z.Content,{children:[(0,G.jsx)(z.Label,{children:`Payment plan`}),(0,G.jsx)(z.Description,{children:`How often the insured pays the premium.`})]}),(0,G.jsx)(`p`,{id:`plan-note`,children:`Changing it starts at the next renewal.`}),(0,G.jsx)(U.Root,{...e,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`radiogroup`,{name:`Plan`});await K(n).not.toHaveAttribute(`aria-labelledby`),await K(n).toHaveAccessibleDescription(`How often the insured pays the premium. Changing it starts at the next renewal.`);for(let e of t.getAllByRole(`radio`))await K(e).toBeEnabled()}},Fn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,W.useState)(``);return(0,G.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,G.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,G.jsxs)(U.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:[(0,G.jsx)(U.Item,{value:``,children:`None`}),(0,G.jsx)(U.Item,{value:`monthly`,children:`Monthly`})]})]})},play:async({canvasElement:e})=>{let t=Y(e);await K(t.getByRole(`radio`,{name:`None`})).toBeChecked(),await J.click(t.getByRole(`button`,{name:`Clear`})),await K(t.getByRole(`radio`,{name:`None`})).not.toBeChecked(),await K(t.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked()}},In={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let{control:e,reset:t}=We();return(0,G.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,G.jsx)(Ke,{name:`plan`,control:e,render:({field:e})=>(0,G.jsx)(U.Root,{"aria-label":`Payment plan`,controlRef:e.ref,value:e.value,onValueChange:e.onChange,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))})}),(0,G.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(),children:`Reset form`})]})},play:async({canvasElement:e})=>{let t=Y(e);await J.click(t.getByRole(`radio`,{name:`Annual`})),await K(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J.click(t.getByRole(`button`,{name:`Reset form`}));for(let e of t.getAllByRole(`radio`))await K(e).not.toBeChecked()}},$={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,W.useState)(null);return(0,W.useEffect)(()=>{t(`annual`)},[]),(0,G.jsx)(U.Root,{"aria-label":`Payment plan`,readOnly:!0,value:e,children:X.map(({value:e,label:t})=>(0,G.jsx)(U.Item,{value:e,children:t},e))})},play:async({canvasElement:e})=>{let t=Y(e),n=()=>t.getAllByRole(`radio`).filter(e=>e.tabIndex===0);await mn(()=>K(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()),await K(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})]),await J.click(t.getByRole(`radio`,{name:`Quarterly`})),await K(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})])}},Ln={tags:[`!dev`,`!autodocs`,`!manifest`],play:async({canvasElement:e})=>{let t=Y(e);await J.click(t.getByText(`Quarterly`)),await K(t.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await K(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await J.keyboard(`{ArrowDown}`),await K(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radiogroup', {
      name: 'Payment plan'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toBeChecked();
    await expect(canvas.getByText('Monthly')).toHaveStyle({
      color: 'rgb(22, 24, 29)'
    });
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Quarterly'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Quarterly'
    })).toBeChecked();
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).not.toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith('quarterly');
    await userEvent.click(canvas.getByText('Annual'));
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith('annual');
    const monthly = canvas.getByRole('radio', {
      name: 'Monthly'
    });
    await userEvent.click(monthly.closest('[data-slot=radio-group-item-control]')!);
    await expect(monthly).toBeChecked();
  }
}`,...Z.parameters?.docs?.source},description:{story:`@summary Uncontrolled group with one item selected`,...Z.parameters?.docs?.description}}},gn.parameters={...gn.parameters,docs:{...gn.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [monthly, quarterly] = canvas.getAllByRole('radio').map(radio => radio.closest('[data-slot=radio-group-item]')!.getBoundingClientRect()) as [DOMRect, DOMRect];
    await expect(canvas.getByRole('radiogroup')).toHaveAttribute('data-orientation', 'horizontal');
    await expect(canvas.getByRole('radiogroup')).toHaveAttribute('aria-orientation', 'horizontal');
    await expect(quarterly.top).toBe(monthly.top);
    await expect(quarterly.left - monthly.right).toBe(24);
  }
}`,...gn.parameters?.docs?.source},description:{story:`Items laid in a row, 24px apart, wrapping when the row runs out of room.

@summary Items in a row`,...gn.parameters?.docs?.description}}},_n.parameters={..._n.parameters,docs:{..._n.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': undefined,
    defaultValue: undefined
  },
  render: args => <Field.Root invalid required>
            <Field.Content>
                <Field.Label>Payment plan</Field.Label>
                <Field.Description>How often the insured pays the premium.</Field.Description>
            </Field.Content>
            <RadioGroup.Root {...args}>
                {PLANS.map(({
        value,
        label
      }) => <RadioGroup.Item key={value} value={value}>
                        {label}
                    </RadioGroup.Item>)}
            </RadioGroup.Root>
            <Field.Error errors={[{
      message: 'Choose a payment plan'
    }]} />
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('radiogroup', {
      name: /Payment plan/
    });
    await expect(group).toHaveAccessibleDescription(/premium.*Choose a payment plan|Choose a payment plan.*premium/);
    await expect(group).toHaveAttribute('aria-invalid', 'true');
    await expect(group).toHaveAttribute('aria-required', 'true');
  }
}`,..._n.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, label, messages, `invalid`, `required` and\n`disabled` reach the group with nothing wired by hand.\n\n@summary Wired to a surrounding Field",..._n.parameters?.docs?.description}}},vn.parameters={...vn.parameters,docs:{...vn.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onValueChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const radio of canvas.getAllByRole('radio')) {
      await expect(radio).toBeDisabled();
    }
    await expect(canvas.getByText('Monthly')).toHaveStyle({
      color: 'rgb(207, 210, 219)'
    });
    await userEvent.click(canvas.getByText('Annual'));
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toBeChecked();
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...vn.parameters?.docs?.source},description:{story:`@summary Whole group disabled`,...vn.parameters?.docs?.description}}},yn.parameters={...yn.parameters,docs:{...yn.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => <RadioGroup.Root {...args}>
            <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
            <RadioGroup.Item value="quarterly" disabled>
                Quarterly (not offered by this carrier)
            </RadioGroup.Item>
            <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
        </RadioGroup.Root>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio', {
      name: /Quarterly/
    })).toBeDisabled();
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Monthly'
    }));
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith('annual');
  }
}`,...yn.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest interactive, and the arrow keys skip
it.

@summary One item disabled`,...yn.parameters?.docs?.description}}},bn.parameters={...bn.parameters,docs:{...bn.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    onValueChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const annual = canvas.getByRole('radio', {
      name: 'Annual'
    });
    await expect(canvas.getByRole('radiogroup')).toHaveAttribute('aria-readonly', 'true');
    await userEvent.click(annual);
    await userEvent.click(canvas.getByText('Quarterly'));
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toBeChecked();
    await expect(annual).not.toBeChecked();
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...bn.parameters?.docs?.source},description:{story:`The items stay focusable but the selection does not change, by pointer or
by keyboard.

@summary Read-only group`,...bn.parameters?.docs?.description}}},xn.parameters={...xn.parameters,docs:{...xn.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    'aria-describedby': 'plan-error',
    defaultValue: undefined
  },
  render: args => <div className="flex flex-col gap-2">
            <RadioGroup.Root {...args}>
                {PLANS.map(({
        value,
        label
      }) => <RadioGroup.Item key={value} value={value}>
                        {label}
                    </RadioGroup.Item>)}
            </RadioGroup.Root>
            <p id="plan-error" className="text-sm text-text-input-destructive">
                Choose a payment plan.
            </p>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('radiogroup', {
      name: 'Payment plan'
    });
    await expect(group).toHaveAttribute('aria-invalid', 'true');
    await expect(group).toHaveAccessibleDescription('Choose a payment plan.');
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toHaveStyle({
      borderColor: 'rgb(217, 38, 38)'
    });
  }
}`,...xn.parameters?.docs?.source},description:{story:'`aria-invalid` sits on the group, which `role="radiogroup"` supports, and\nevery radio paints the destructive border from it.\n\n@summary Failed validation on the group',...xn.parameters?.docs?.description}}},Sn.parameters={...Sn.parameters,docs:{...Sn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [plan, setPlan] = useState<string | null>('monthly');
    return <div className="flex flex-col items-start gap-6">
                <div className="flex gap-3">
                    <Button variant="secondary" size="sm" onClick={() => setPlan(null)}>
                        Clear
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => setPlan('annual')}>
                        Choose annual
                    </Button>
                </div>
                <RadioGroup.Root aria-label="Payment plan" value={plan} onValueChange={setPlan}>
                    {PLANS.map(({
          value,
          label
        }) => <RadioGroup.Item key={value} value={value}>
                            {label}
                        </RadioGroup.Item>)}
                </RadioGroup.Root>
                <output className="text-sm">Selected: {plan ?? 'none'}</output>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Choose annual'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).toBeChecked();
    await userEvent.tab();
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).toHaveFocus();
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Quarterly'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('quarterly');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear'
    }));
    for (const radio of canvas.getAllByRole('radio')) {
      await expect(radio).not.toBeChecked();
    }
    await expect(canvas.getByRole('status')).toHaveTextContent('Selected: none');
  }
}`,...Sn.parameters?.docs?.source},description:{story:`@summary Controlled group whose value is set from outside`,...Sn.parameters?.docs?.description}}},Cn.parameters={...Cn.parameters,docs:{...Cn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('plan')));
    }}>
                <RadioGroup.Root aria-label="Payment plan" name="plan" required>
                    {PLANS.map(({
          value,
          label
        }) => <RadioGroup.Item key={value} value={value}>
                            {label}
                        </RadioGroup.Item>)}
                </RadioGroup.Root>
                <Button type="submit">Submit</Button>
                {submitted && <output className="text-sm">Submitted: {submitted}</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(canvas.queryByRole('status')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Annual'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('annual');
  }
}`,...Cn.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value` for the selected item, and\n`required` blocks the submission while nothing is selected.\n\n@summary Native form submission",...Cn.parameters?.docs?.description}}},wn.parameters={...wn.parameters,docs:{...wn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control,
      handleSubmit
    } = useForm<{
      plan: string;
    }>({
      defaultValues: {
        plan: ''
      }
    });
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex flex-col items-start gap-6" onSubmit={handleSubmit(data => setSubmitted(data.plan))}>
                <Controller name="plan" control={control} rules={{
        required: 'Choose a payment plan'
      }} render={({
        field,
        fieldState
      }) => <Field.Root invalid={fieldState.invalid} required>
                            <Field.Label>Payment plan</Field.Label>
                            <RadioGroup.Root controlRef={field.ref} value={field.value} onValueChange={field.onChange} onBlur={field.onBlur}>
                                {PLANS.map(({
            value,
            label
          }) => <RadioGroup.Item key={value} value={value}>
                                        {label}
                                    </RadioGroup.Item>)}
                            </RadioGroup.Root>
                            <Field.Error errors={[fieldState.error]} />
                        </Field.Root>} />
                <Button type="submit">Submit</Button>
                {submitted && <output className="text-sm">Submitted: {submitted}</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toHaveFocus();
    const group = canvas.getByRole('radiogroup', {
      name: /Payment plan/
    });
    await expect(group).toHaveAccessibleDescription('Choose a payment plan');
    await expect(group).toHaveAttribute('aria-invalid', 'true');
    await expect(group.getBoundingClientRect().top - group.previousElementSibling!.getBoundingClientRect().bottom).toBe(16);
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('quarterly');
  }
}`,...wn.parameters?.docs?.source},description:{story:`With react-hook-form, wire the group through \`Controller\`. Its \`ref\` lets
the form focus the group on a failed submit: focus lands on the radio Tab
would reach.

@summary React Hook Form through Controller`,...wn.parameters?.docs?.description}}},Tn.parameters={...Tn.parameters,docs:{...Tn.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-60">
            <RadioGroup.Root {...args}>
                <RadioGroup.Item value="monthly">
                    Monthly, charged on the policy's effective day of every month
                </RadioGroup.Item>
                <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
            </RadioGroup.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole('radio', {
      name: /Monthly/
    });
    const label = canvas.getByText(/Monthly/);
    const slot = radio.parentElement!.getBoundingClientRect();
    const circle = radio.getBoundingClientRect();
    await expect(label.getBoundingClientRect().height).toBeGreaterThan(24);
    await expect(slot.top).toBe(label.getBoundingClientRect().top);
    await expect(slot.height).toBe(24);
    await expect(circle.top - slot.top).toBe(4);
    await expect(circle.width).toBe(16);
  }
}`,...Tn.parameters?.docs?.source},description:{story:`A long label wraps under itself and the radio stays level with its first
line.

@summary Wrapping label keeps the radio on the first line`,...Tn.parameters?.docs?.description}}},En.parameters={...En.parameters,docs:{...En.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-10">
            {([['Enabled', {}], ['Disabled', {
      disabled: true
    }], ['Invalid', {
      'aria-invalid': true
    }], ['Read-only', {
      readOnly: true
    }]] as const).map(([title, props]) => <div key={title} className="flex flex-col gap-2">
                    <span className="text-xs text-text-input-placeholder">{title}</span>
                    <RadioGroup.Root aria-label={\`\${title} payment plan\`} defaultValue="quarterly" {...props}>
                        {PLANS.map(({
          value,
          label
        }) => <RadioGroup.Item key={value} value={value}>
                                {label}
                            </RadioGroup.Item>)}
                    </RadioGroup.Root>
                </div>)}
        </div>
}`,...En.parameters?.docs?.source},description:{story:`Every state of an item side by side, for checking against the design:
enabled, disabled, invalid and read-only, each with one item selected.

@summary Visual comparison of the item states`,...En.parameters?.docs?.description}}},Dn.parameters={...Dn.parameters,docs:{...Dn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    onValueChange: fn()
  },
  render: args => <div className="flex flex-col items-start gap-6">
            <RadioGroup.Root {...args}>
                {PLANS.map(({
        value,
        label
      }) => <RadioGroup.Item key={value} value={value}>
                        {label}
                    </RadioGroup.Item>)}
            </RadioGroup.Root>
            <Button variant="secondary">Continue</Button>
        </div>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('radio', {
      name: 'Quarterly'
    })).toHaveFocus();
    await expect(canvas.getByRole('radio', {
      name: 'Quarterly'
    })).toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith('quarterly');
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).toBeChecked();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Continue'
    })).toHaveFocus();
  }
}`,...Dn.parameters?.docs?.source},description:{story:`Tab enters the group on the selected item and leaves it on the next Tab;
the arrow keys move the selection, wrapping at the ends.

@summary Keyboard navigation and selection`,...Dn.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    defaultValue: undefined,
    onValueChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const radio of canvas.getAllByRole('radio')) {
      await expect(radio).not.toBeChecked();
    }
    await userEvent.tab();
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toHaveFocus();
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).not.toBeChecked();
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...Q.parameters?.docs?.source},description:{story:`With no \`defaultValue\` nothing is selected, and Tab lands on the first item
without selecting it.

@summary Group that starts with nothing selected`,...Q.parameters?.docs?.description}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    'aria-label': undefined,
    'aria-labelledby': 'plan-heading'
  },
  render: args => <div className="flex flex-col gap-2">
            <span id="plan-heading" className="text-sm font-semibold text-text-input-normal">
                Payment plan
            </span>
            <RadioGroup.Root {...args}>
                {PLANS.map(({
        value,
        label
      }) => <RadioGroup.Item key={value} value={value}>
                        {label}
                    </RadioGroup.Item>)}
            </RadioGroup.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radiogroup', {
      name: 'Payment plan'
    })).toBeInTheDocument();
  }
}`,...On.parameters?.docs?.source},description:{story:`@summary Group named by a visible heading`,...On.parameters?.docs?.description}}},kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: args => <RadioGroup.Root {...args}>
            <RadioGroup.Item value="monthly" disabled>
                Monthly (no longer offered)
            </RadioGroup.Item>
            <RadioGroup.Item value="quarterly">Quarterly</RadioGroup.Item>
            <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
        </RadioGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio', {
      name: /Monthly/
    })).toBeChecked();
    await userEvent.tab();
    await expect(canvas.getByRole('radio', {
      name: 'Quarterly'
    })).toHaveFocus();
  }
}`,...kn.parameters?.docs?.source},description:{story:`When the selected item is disabled, Tab enters the group on the first
enabled item instead, so the group stays reachable by keyboard.

@summary Selected item disabled`,...kn.parameters?.docs?.description}}},An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('plan')));
    }}>
                <RadioGroup.Root aria-label="Payment plan" name="plan" defaultValue="monthly">
                    {PLANS.map(({
          value,
          label
        }) => <RadioGroup.Item key={value} value={value}>
                            {label}
                        </RadioGroup.Item>)}
                </RadioGroup.Root>
                <div className="flex gap-3">
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                    <Button type="submit">Submit</Button>
                </div>
                {submitted && <output className="text-sm">Submitted: {submitted}</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Annual'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toBeChecked();
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).not.toBeChecked();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('monthly');
  }
}`,...An.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled group back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...An.parameters?.docs?.description}}},jn.parameters={...jn.parameters,docs:{...jn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [plan, setPlan] = useState('quarterly');
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('plan')));
    }}>
                <RadioGroup.Root aria-label="Payment plan" name="plan" value={plan} onValueChange={setPlan}>
                    {PLANS.map(({
          value,
          label
        }) => <RadioGroup.Item key={value} value={value}>
                            {label}
                        </RadioGroup.Item>)}
                </RadioGroup.Root>
                <div className="flex gap-3">
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                    <Button type="submit">Submit</Button>
                </div>
                {submitted && <output className="text-sm">Submitted: {submitted}</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Annual'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).toBeChecked();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('annual');
  }
}`,...jn.parameters?.docs?.source},description:{story:`A native form reset leaves a controlled group on its \`value\`, and the form
submits that value too.

@summary Native form reset on a controlled group`,...jn.parameters?.docs?.description}}},Mn.parameters={...Mn.parameters,docs:{...Mn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [submitted, setSubmitted] = useState(false);
    return <form className="flex flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(true);
    }}>
                <RadioGroup.Root aria-label="Payment plan" required>
                    {PLANS.map(({
          value,
          label
        }) => <RadioGroup.Item key={value} value={value}>
                            {label}
                        </RadioGroup.Item>)}
                </RadioGroup.Root>
                <Button type="submit">Submit</Button>
                {submitted && <output className="text-sm">Sent</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radiogroup')).toHaveAttribute('aria-required', 'true');
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Annual'
    }));
    await expect(canvasElement.querySelector('form')!.checkValidity()).toBe(true);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Sent');
  }
}`,...Mn.parameters?.docs?.source},description:{story:"Without `name` the radios are not one native group, so `required` only\nmarks the group (`aria-required`) and leaves validation to the form: a\nselection never leaves the form invalid.\n\n@summary Required without a name",...Mn.parameters?.docs?.description}}},Nn.parameters={...Nn.parameters,docs:{...Nn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: args => <RadioGroup.Root {...args}>
            <RadioGroup.Item id="plan-monthly" value="monthly">
                Monthly
            </RadioGroup.Item>
            <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
        </RadioGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toHaveAttribute('id', 'plan-monthly');
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    }).id).not.toBe('');
  }
}`,...Nn.parameters?.docs?.source},description:{story:`@summary Item id reaches the radio`,...Nn.parameters?.docs?.description}}},Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    'aria-label': 'Plan',
    'aria-describedby': 'plan-note',
    disabled: false
  },
  render: args => <Field.Root disabled>
            <Field.Content>
                <Field.Label>Payment plan</Field.Label>
                <Field.Description>How often the insured pays the premium.</Field.Description>
            </Field.Content>
            <p id="plan-note">Changing it starts at the next renewal.</p>
            <RadioGroup.Root {...args}>
                {PLANS.map(({
        value,
        label
      }) => <RadioGroup.Item key={value} value={value}>
                        {label}
                    </RadioGroup.Item>)}
            </RadioGroup.Root>
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('radiogroup', {
      name: 'Plan'
    });
    await expect(group).not.toHaveAttribute('aria-labelledby');
    await expect(group).toHaveAccessibleDescription('How often the insured pays the premium. Changing it starts at the next renewal.');
    for (const radio of canvas.getAllByRole('radio')) {
      await expect(radio).toBeEnabled();
    }
  }
}`,...Pn.parameters?.docs?.source},description:{story:"`aria-label` and `disabled={false}` on the group win over the field. Its own\n`aria-describedby` joins the field's messages instead of replacing them.\n\n@summary Own props override the Field wiring",...Pn.parameters?.docs?.description}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [plan, setPlan] = useState<string | null>('');
    return <div className="flex flex-col items-start gap-6">
                <Button variant="secondary" size="sm" onClick={() => setPlan(null)}>
                    Clear
                </Button>
                <RadioGroup.Root aria-label="Payment plan" value={plan} onValueChange={setPlan}>
                    <RadioGroup.Item value="">None</RadioGroup.Item>
                    <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
                </RadioGroup.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio', {
      name: 'None'
    })).toBeChecked();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'None'
    })).not.toBeChecked();
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).not.toBeChecked();
  }
}`,...Fn.parameters?.docs?.source},description:{story:`An item can carry the empty string, for a "None" choice: \`''\` selects it,
and only \`null\` leaves the group without a selection.

@summary Empty-string value for a None option`,...Fn.parameters?.docs?.description}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const {
      control,
      reset
    } = useForm<{
      plan?: string;
    }>();
    return <div className="flex flex-col items-start gap-6">
                <Controller name="plan" control={control} render={({
        field
      }) => <RadioGroup.Root aria-label="Payment plan" controlRef={field.ref} value={field.value} onValueChange={field.onChange}>
                            {PLANS.map(({
          value,
          label
        }) => <RadioGroup.Item key={value} value={value}>
                                    {label}
                                </RadioGroup.Item>)}
                        </RadioGroup.Root>} />
                <Button variant="secondary" size="sm" onClick={() => reset()}>
                    Reset form
                </Button>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Annual'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).toBeChecked();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset form'
    }));
    for (const radio of canvas.getAllByRole('radio')) {
      await expect(radio).not.toBeChecked();
    }
  }
}`,...In.parameters?.docs?.source},description:{story:`A react-hook-form reset with no default values sets the field back to
\`undefined\`: the group clears instead of keeping the last pick on screen.

@summary Form reset to undefined clears the selection`,...In.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [plan, setPlan] = useState<string | null>(null);
    useEffect(() => {
      setPlan('annual');
    }, []);
    return <RadioGroup.Root aria-label="Payment plan" readOnly value={plan}>
                {PLANS.map(({
        value,
        label
      }) => <RadioGroup.Item key={value} value={value}>
                        {label}
                    </RadioGroup.Item>)}
            </RadioGroup.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const stops = () => canvas.getAllByRole('radio').filter(radio => radio.tabIndex === 0);
    await waitFor(() => expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).toBeChecked());
    await expect(stops()).toEqual([canvas.getByRole('radio', {
      name: 'Annual'
    })]);
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Quarterly'
    }));
    await expect(stops()).toEqual([canvas.getByRole('radio', {
      name: 'Annual'
    })]);
  }
}`,...$.parameters?.docs?.source},description:{story:`The group is always one Tab stop, even read-only with a value that arrives
after mount and a press that moves focus to another radio.

@summary Single tab stop when read-only`,...$.parameters?.docs?.description}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Quarterly'));
    await expect(canvas.getByRole('radio', {
      name: 'Quarterly'
    })).toBeChecked();
    await expect(canvas.getByRole('radio', {
      name: 'Quarterly'
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('radio', {
      name: 'Annual'
    })).toBeChecked();
  }
}`,...Ln.parameters?.docs?.source},description:{story:`A press on an item's text focuses that item, so the arrow keys continue
from the one just picked.

@summary Pressing a label focuses its radio`,...Ln.parameters?.docs?.description}}},Rn=[`Default`,`Horizontal`,`InsideField`,`Disabled`,`DisabledItem`,`ReadOnly`,`Invalid`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`AllStates`,`Keyboard`,`NoSelection`,`LabelledByHeading`,`DisabledSelectedItem`,`FormReset`,`FormResetControlled`,`RequiredWithoutName`,`ItemId`,`InsideFieldOverridden`,`EmptyStringOption`,`ResetToUndefined`,`SingleTabStop`,`LabelPressFocus`]})))()}zn();export{En as AllStates,Sn as Controlled,Z as Default,vn as Disabled,yn as DisabledItem,kn as DisabledSelectedItem,Fn as EmptyStringOption,An as FormReset,jn as FormResetControlled,gn as Horizontal,Cn as InForm,_n as InsideField,Pn as InsideFieldOverridden,xn as Invalid,Nn as ItemId,Dn as Keyboard,Ln as LabelPressFocus,On as LabelledByHeading,Tn as LongLabel,Q as NoSelection,bn as ReadOnly,Mn as RequiredWithoutName,In as ResetToUndefined,$ as SingleTabStop,wn as WithReactHookForm,Rn as __namedExportsOrder,hn as default};