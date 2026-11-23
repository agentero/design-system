import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-jswLEZVm.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./dist-Dsj2rsW0.js";import{n as o,t as s}from"./utils-CgWqOJ_E.js";import{i as c,n as l,r as u}from"./merge-props-Ksqcn4dZ.js";import{n as d,t as f}from"./button-Dzjik7L2.js";import{$ as p,A as m,An as h,B as g,C as ee,Cn as _,Ct as v,D as y,E as b,En as x,F as S,G as C,Gt as w,Kt as T,L as te,Mn as E,N as D,Nn as O,Nt as k,P as ne,Pn as re,Pt as ie,Q as ae,R as A,S as j,Sn as oe,T as M,Tn as N,Tt as P,Ut as se,V as F,W as I,Wt as ce,X as L,_ as le,_n as ue,a as de,b as R,bn as z,c as fe,d as B,dt as pe,f as me,g as he,gn as ge,h as _e,hn as ve,i as ye,it as be,j as xe,jn as Se,kn as Ce,l as we,m as Te,mn as Ee,n as De,o as Oe,p as ke,r as Ae,rt as je,s as Me,t as Ne,tt as Pe,u as Fe,v as Ie,vt as Le,w as Re,wn as ze,x as Be,xn as Ve,y as He,z as Ue}from"./useCompositeListItem-oxcB2GD2.js";import{N as We,j as Ge}from"./dist-quIh0QwH.js";import{a as Ke,n as qe,t as V}from"./field-XOP6YPLS.js";import{a as Je,r as Ye,t as Xe}from"./index.esm-BsrSjSoZ.js";var Ze,Qe;function $e(){return($e=t((()=>{Ze=`data-checked`,Qe=`data-unchecked`})))()}var et;function tt(){return(tt=t((()=>{k(),S(),$e(),et={checked(e){return e?{[Ze]:``}:{[Qe]:``}},...ie,...ne}})))()}var nt;function rt(){return(rt=t((()=>{nt=`data-composite-item-active`})))()}function it(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=ke(),{ref:i,index:a}=De(e),o=n===a,s=at.useRef(null),c=ze(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}var at;function ot(){return(ot=t((()=>{at=e(n(),1),_(),me(),Ne()})))()}function st(e){let{render:t,className:n,style:r,state:i=ve,props:a=Ee,refs:o=Ee,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=it({metadata:s});return C(l,e,{state:i,ref:[f,...o],props:[d,...a,u],stateAttributesMapping:c})}function ct(){return(ct=t((()=>{ue(),I(),ot()})))()}function lt(){return ut.useContext(dt)}var ut,dt;function ft(){return(ft=t((()=>{ut=e(n(),1),dt=ut.createContext({disabled:!1})})))()}function pt(e,t,n,r=!0,i,a){let[o,s]=gt.useState(),c=ee(i?`${i}-label`:void 0),l=!!a?.trim(),u=e??(l?void 0:t)??o;return h(()=>{let i=e||t||l||!r?void 0:mt(n.current,c);o!==i&&s(i)}),u}function mt(e,t){let n=ht(e);if(n)return!n.id&&t&&(n.id=t),n.id||void 0}function ht(e){if(!e)return;let t=e.parentElement;if(t&&t.tagName===`LABEL`)return t;let n=e.id;if(n){let t=e.nextElementSibling;if(t&&t.htmlFor===n)return t}let r=e.labels;return r&&r[0]}var gt;function _t(){return(_t=t((()=>{gt=e(n(),1),Ce(),j()})))()}function vt(){return yt.useContext(bt)}var yt,bt;function xt(){return(xt=t((()=>{yt=e(n(),1),bt=yt.createContext(void 0)})))()}function St(){let e=Ct.useContext(wt);if(e===void 0)throw Error(O(52));return e}var Ct,wt;function Tt(){return(Tt=t((()=>{re(),Ct=e(n(),1),wt=Ct.createContext(void 0)})))()}var Et,Dt,Ot;function kt(){return(kt=t((()=>{Et=e(n(),1),_(),Ce(),z(),ue(),P(),pe(),tt(),Fe(),j(),I(),Me(),rt(),ct(),m(),de(),ft(),R(),_t(),Ie(),xt(),Tt(),Dt=r(),Ot=Et.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,readOnly:a=!1,required:o=!1,"aria-labelledby":s,value:c,inputRef:l,nativeButton:u=!1,id:d,style:f,...p}=e,m=vt(),{disabled:g,readOnly:_,required:y,form:b,checkedValue:x,touched:S=!1,validation:w,name:T,setCheckedValue:E=ge,setTouched:D=ge,registerInputRef:O=ge}=m??{},{setTouched:k,setFilled:ne,state:re,disabled:ie}=xe(),ae=lt(),{labelId:A,getDescriptionProps:j}=Be(),M=ie||ae.disabled||g||i,N=_||a,P=y||o,se=b,F=m?x===c:c===``,I=Et.useRef(null),ce=Oe(M,I),L=Et.useRef(null),le=w?.registerInput,ue=Et.useCallback(e=>le?.(e,{controlRef:I,value:void 0}),[le]),de=ze(l,L,O,ue);h(()=>{L.current?.checked&&ne(!0)},[ne]),h(()=>{L.current&&O(M&&F?null:L.current)},[F,M,O]);let R=ee(),z=He({id:d}),B=u?void 0:z,pe={role:`radio`,"aria-checked":F,"aria-labelledby":pt(s,A,L,!u,B,p[`aria-label`]),[nt]:F?``:void 0,id:u?z:R,onKeyDown(e){e.key===`Enter`&&e.preventDefault()},onClick(e){if(e.defaultPrevented||M||N)return;e.preventDefault();let t=L.current;t&&we(t,e)},onFocus(e){ce(!0),e.defaultPrevented||M||N||!S||(L.current?.click(),D(!1))},onBlur(){m||ce(!1)}},{getButtonProps:me,buttonRef:he}=fe({disabled:M,native:u,composite:!1}),_e={type:`radio`,ref:de,form:se,id:B,name:T,tabIndex:-1,style:T?oe:Ve,"aria-hidden":!0,...c===void 0?ve:{value:te(c)},disabled:M,checked:F,required:P,readOnly:N,onChange(e){if(e.nativeEvent.defaultPrevented||M||N||c===void 0)return;let t=v(Le,e.nativeEvent);E(c,t),t.isCanceled||k(!0)},onClick(e){e.stopPropagation()},onFocus(){I.current?.focus()}},ye=Et.useMemo(()=>({...re,required:P,disabled:M,readOnly:N,checked:F}),[re,M,N,F,P]),be=ye,Se=m!==void 0,Ce=[t,I,he],Te=[pe,p,me,j,w?e=>w.getValidationProps(M,e):ve],Ee=C(`span`,e,{enabled:!Se,state:ye,ref:Ce,props:Te,stateAttributesMapping:et});return(0,Dt.jsxs)(wt.Provider,{value:be,children:[Se?(0,Dt.jsx)(st,{tag:`span`,render:n,className:r,style:f,state:ye,refs:Ce,props:Te,stateAttributesMapping:et}):Ee,(0,Dt.jsx)(`input`,{..._e,suppressHydrationWarning:!0})]})})})))()}var At,jt;function Mt(){return(Mt=t((()=>{At=e(n(),1),I(),Tt(),tt(),A(),g(),jt=At.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,s=St(),c=s.checked,{mounted:l,transitionStatus:u,setMounted:d}=F(c),f={...s,transitionStatus:u},p=At.useRef(null),m=a||l,h=C(`span`,e,{ref:[t,p],state:f,props:o,stateAttributesMapping:et});return Ue({batch:!0,enabled:!c,open:c,ref:p,onComplete(){c||d(!1)}}),m?h:null})})))()}function Nt(e){return We(e)&&e.tagName===`INPUT`}function Pt(e){return!!(Nt(e)&&e.selectionStart!=null||We(e)&&e.tagName===`TEXTAREA`)}function Ft(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=It(e,t,`left`),a=Lt(e),o=Lt(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=It(e,t,`top`),r=Lt(e),i=Lt(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function It(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function Lt(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}var Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt;function Kt(){return(Kt=t((()=>{Ge(),T(),Pe(),Rt=`ArrowUp`,zt=`ArrowDown`,Bt=`ArrowLeft`,Vt=`ArrowRight`,Ht=`Home`,Ut=new Set([Rt,zt,Bt,Vt,Ht,`End`]),Wt=`Shift`,Gt=[Wt,`Control`,`Alt`,`Meta`]})))()}function qt(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}function Jt(e){let{loopFocus:t=!0,orientation:n=`both`,grid:r,onLoop:i,direction:a,highlightedIndex:o,onHighlightedIndexChange:s,rootRef:c,enableHomeAndEndKeys:l=!1,stopEventPropagation:u,disabledIndices:d,modifierKeys:f=Ee}=e,[m,g]=Zt.useState(0),ee=r!=null,_=Zt.useRef(null),v=ze(_,c),y=Zt.useRef([]),b=Zt.useRef(!1),S=Zt.useRef(null),C=o??m,w=x((e,t=!1)=>{if(S.current=y.current[e]??null,(s??g)(e),t){let t=y.current[e];Ft(_.current,t,a,n)}}),T=x(e=>{if(e.size===0)return;if(b.current){let e=y.current,t=e.indexOf(S.current);if(t===-1){let t=e[C];!t||be(e,C,d)?w(Yt(e,d)):S.current=t}else t!==C&&w(t);return}b.current=!0;let t=Array.from(e.keys()),r=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,i=r?e.get(r)?.index??-1:-1;if(i!==-1)w(i);else if(be(t,C,d)){let e=L(t,{disabledIndices:d});je(t,e)||w(e)}Ft(_.current,r,a,n)});h(()=>{if(d==null||o!=null||!b.current)return;let e=y.current;if(be(e,C,d)){let t=L(e,{disabledIndices:d});je(e,t)||w(t)}},[d,o,C,y,w]);let te=x((e,t,n)=>i?i(e,t,n,y):n),E=x(e=>{let o=e.key===`Home`||e.key===`End`;if(!Ut.has(e.key)||!l&&o||Xt(e,f)||!_.current)return;let s=a===`rtl`,c=s?Bt:Vt,m=s?Vt:Bt,h=n===`vertical`?zt:c,g=n===`vertical`?Rt:m,v=ce(e.nativeEvent);if(v!=null&&Pt(v)&&!qt(v)){let t=v.selectionStart,n=v.selectionEnd,r=v.value;if(t==null||e.shiftKey||t!==n||e.key!==g&&t<r.length||e.key!==h&&t>0)return}let b=C,x=p(y,d),S=ae(y,d);r!=null&&(b=r({disabledIndices:d,elementsRef:y,event:e,highlightedIndex:C,loopFocus:t,maxIndex:S,minIndex:x,onLoop:te,orientation:n,rtl:s}));let T=n!==`vertical`&&e.key===c||n!==`horizontal`&&e.key===`ArrowDown`,E=n!==`vertical`&&e.key===m||n!==`horizontal`&&e.key===`ArrowUp`;l&&(e.key===`Home`?b=x:e.key===`End`&&(b=S)),b===C&&(T||E)&&(t&&b===S&&T?(b=x,i&&(b=i(e,C,b,y))):t&&b===x&&E?(b=S,i&&(b=i(e,C,b,y))):b=L(y.current,{startingIndex:b,decrement:E,disabledIndices:d})),b!==C&&!je(y.current,b)&&(u&&e.stopPropagation(),(ee||o||T||E)&&e.preventDefault(),w(b,!0),queueMicrotask(()=>{y.current[b]?.focus()}))});return{props:{ref:v,onFocus(e){let t=_.current,n=ce(e.nativeEvent);t&&n!=null&&Pt(n)&&n.setSelectionRange(0,n.value.length)},onKeyDown:E},highlightedIndex:C,onHighlightedIndexChange:w,elementsRef:y,onMapChange:T,relayKeyboardEvent:E}}function Yt(e,t){let n=-1;for(let r=0;r<e.length;r+=1){let i=e[r];if(i&&!be(e,r,t)){if(i.hasAttribute(`data-composite-item-active`))return r;n===-1&&(n=r)}}return Math.max(n,0)}function Xt(e,t){for(let n of Gt)if(!t.includes(n)&&e.getModifierState(n))return!0;return!1}var Zt;function Qt(){return(Qt=t((()=>{Zt=e(n(),1),N(),_(),Ce(),ue(),Kt(),rt(),w()})))()}function $t(e){let{render:t,className:n,style:r,refs:i=Ee,props:a=Ee,state:o=ve,stateAttributesMapping:s,highlightedIndex:c,onHighlightedIndexChange:l,orientation:u,grid:d,loopFocus:f,onLoop:p,enableHomeAndEndKeys:m,onMapChange:h,stopEventPropagation:g=!0,rootRef:ee,disabledIndices:_,modifierKeys:v,highlightItemOnHover:y=!1,tag:b=`div`,...x}=e,{props:S,highlightedIndex:w,onHighlightedIndexChange:T,elementsRef:te,onMapChange:E,relayKeyboardEvent:D}=Jt({grid:d,loopFocus:f,onLoop:p,orientation:u,highlightedIndex:c,onHighlightedIndexChange:l,rootRef:ee,stopEventPropagation:g,enableHomeAndEndKeys:m,direction:_e(),disabledIndices:_,modifierKeys:v}),O=C(b,e,{state:o,ref:i,props:[S,...a,x],stateAttributesMapping:s}),k=en.useMemo(()=>({highlightedIndex:w,onHighlightedIndexChange:T,highlightItemOnHover:y,relayKeyboardEvent:D}),[w,T,y,D]);return(0,tn.jsx)(B.Provider,{value:k,children:(0,tn.jsx)(Ae,{elementsRef:te,onMapChange:e=>{h?.(e),E(e)},children:O})})}var en,tn;function nn(){return(nn=t((()=>{en=e(n(),1),ue(),ye(),Qt(),me(),I(),Te(),tn=r()})))()}function rn(e,t){return e.matches(`:disabled`)?!1:!t||e.form===t||e.form===null&&!e.hasAttribute(`form`)}function an(){return(an=t((()=>{n(),S(),Object.keys(D)})))()}function on(e=!1){let t=sn.useContext(cn);if(!t&&!e)throw Error(O(86));return t}var sn,cn;function ln(){return(ln=t((()=>{re(),sn=e(n(),1),cn=sn.createContext(void 0)})))()}var H,un,dn,fn;function pn(){return(pn=t((()=>{H=e(n(),1),Se(),Ce(),_(),N(),j(),w(),Kt(),nn(),m(),b(),S(),an(),ln(),Re(),R(),he(),xt(),un=r(),dn=[Wt],fn=H.forwardRef(function(e,t){let{render:n,className:r,disabled:i,readOnly:a,required:o,onValueChange:s,value:c,defaultValue:l,form:u,name:d,inputRef:f,id:p,style:m,...g}=e,{setTouched:_,setFocused:v,validationMode:b,name:S,disabled:C,state:w,validation:T,setDirty:te,setFilled:D,validityData:O}=xe(),{labelId:k}=Be(),{clearErrors:re,elementRef:ie}=M(),ae=on(!0),A=C||i,j=S??d,oe=ee(p),[N,P]=E({controlled:c,default:l,name:`RadioGroup`,state:`value`}),[F,I]=H.useState(!1),ce=x((e,t)=>{s?.(e,t),t.isCanceled||P(e)}),L=T.getInputControl,ue=H.useMemo(()=>({get current(){return L()}}),[L]),de=H.useRef(null),R=H.useRef(null),z=ze(de,f),fe=H.useRef(z),B=x(e=>{(de.current!==e||fe.current!==z)&&(fe.current=z,z?.(e))});h(()=>{B(de.current)},[z,B]);let pe=x(e=>{if(e){if(!e.disabled){R.current||=e;let t=de.current;(e.checked||t==null||t.disabled)&&B(e)}return()=>{R.current===e&&(R.current=null),de.current===e&&B(null)}}}),me=x(()=>{let e=ie.current;if(!e)return N??null;for(let t of T.registeredInputs.keys())if(t.checked&&rn(t,e))return N??null;return null});y(ue,oe,N??null,me,!A,d),le(N,()=>{re(j),te(N!==O.initialValue),D(N!=null),T.change(N);let e=R.current;N==null&&e&&!e.disabled&&B(e)});let he=k??ae?.legendId,ge={...w,disabled:A??!1,required:o??!1,readOnly:a??!1},_e=H.useMemo(()=>({checkedValue:N,disabled:A,form:u,validation:T,name:j,readOnly:a,registerInputRef:pe,required:o,setCheckedValue:ce,setTouched:I,touched:F}),[N,A,u,T,j,a,pe,o,ce,I,F]),ve={id:p,role:`radiogroup`,"aria-required":o||void 0,"aria-disabled":A||void 0,"aria-readonly":a||void 0,"aria-labelledby":he,onBlur(e){se(e.currentTarget,e.relatedTarget)||(I(!1),_(!0),v(!1),b===`onBlur`&&T.commit(N))},onKeyDownCapture(e){e.key.startsWith(`Arrow`)&&I(!0)}};return(0,un.jsx)(bt.Provider,{value:_e,children:(0,un.jsx)($t,{render:n,className:r,style:m,state:ge,props:[ve,g,e=>T.getValidationProps(A??!1,e)],refs:[t],stateAttributesMapping:ne,enableHomeAndEndKeys:!1,modifierKeys:dn})})})})))()}var U,W,mn,hn,gn,_n,vn,yn;function bn(){return(bn=t((()=>{U=n(),kt(),Mt(),pn(),a(),o(),l(),qe(),W=r(),mn=i({slots:{root:[`flex [:is([data-slot=field-content],[data-slot=field-label],[data-slot=label],[data-slot=field-description])+&]:mt-2`,`[&:has(+[data-slot=field-error])]:mb-2`],item:`group/radio-group-item flex`,label:[`group/radio-group-label flex cursor-pointer items-start gap-3 text-sm text-text-default-base-primary select-none`,`group-data-disabled/radio-group-item:cursor-not-allowed`,`in-data-readonly:cursor-default`],control:`flex size-6 shrink-0 items-center justify-center`,radio:[`relative box-border inline-flex size-4 shrink-0 items-center justify-center rounded-full`,`border-[1.5px] border-solid border-border-checkbox-default bg-bg-input-normal`,`cursor-pointer transition-colors duration-150`,`not-data-disabled:data-unchecked:shadow-xs`,`not-data-disabled:not-data-readonly:not-in-aria-invalid:data-unchecked:group-hover/radio-group-label:border-border-input-hover`,`data-checked:border-bg-checkbox-selected`,`outline-solid outline-2 outline-offset-2 outline-transparent`,`focus-visible:outline-focus-ring-button-primary`,`in-aria-invalid:border-border-input-destructive`,`in-aria-invalid:focus-visible:outline-focus-ring-button-destructive`,`in-aria-invalid:data-checked:border-bg-default-danger-primary`,`data-disabled:cursor-not-allowed data-disabled:border-border-checkbox-disabled data-disabled:bg-bg-input-disable`,`in-aria-invalid:data-disabled:border-bg-checkbox-invalid-disabled`,`in-data-readonly:cursor-default`],indicator:[`size-2 rounded-full bg-bg-checkbox-selected`,`in-aria-invalid:bg-bg-default-danger-primary`,`data-disabled:bg-bg-checkbox-disabled`,`in-aria-invalid:data-disabled:bg-bg-checkbox-invalid-disabled`],text:`flex min-h-6 items-center group-data-disabled/radio-group-item:text-text-default-disable-primary`},variants:{orientation:{vertical:{root:`flex-col gap-2`},horizontal:{root:`flex-row flex-wrap gap-x-6 gap-y-2`}}},defaultVariants:{orientation:`vertical`}}),hn=(0,U.createContext)(null),gn=(e,t)=>e.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1,_n=e=>Array.from(e?.querySelectorAll(`input[type=radio]`)??[]),vn=({value:e,defaultValue:t,onValueChange:n,disabled:r,readOnly:i,required:a,orientation:o=`vertical`,name:l,"aria-invalid":d,"aria-labelledby":f,"aria-describedby":p,ref:m,controlRef:h,className:g,children:ee,..._})=>{let v=Ke(),y=(0,U.useMemo)(()=>mn({orientation:o}),[o]),b=f??(_[`aria-label`]===void 0?v?.labelId:void 0),x=r??(v?.disabled||void 0),S=i??(v?.readOnly||void 0),C=a??(v?.required||void 0),w=d??(v?.invalid||void 0),T=u({"aria-describedby":v?.describedBy},{"aria-describedby":p})[`aria-describedby`],[te]=(0,U.useState)(t??null),[E,D]=(0,U.useState)(t??null),O=e!==void 0,k=O?e:E,[ne,re]=(0,U.useState)(e);e!==ne&&(re(e),e===void 0&&D(null));let[ie,ae]=(0,U.useState)([]),A=(0,U.useCallback)(e=>(ae(t=>[...t.filter(t=>t.element!==e.element),e].sort(gn)),()=>ae(t=>t.filter(t=>t.element!==e.element))),[]),j=ie.filter(e=>!e.disabled),oe=j.find(e=>e.value===k)??j[0],M=oe?.value,N=(0,U.useMemo)(()=>({styles:y,disabled:x,tabStop:M,register:A}),[y,x,M,A]);(0,U.useImperativeHandle)(h,()=>({focus:()=>oe?.element.focus()}),[oe]);let P=(0,U.useRef)(null),se=(0,U.useMemo)(()=>c(P,m),[m]),F=(0,U.useEffectEvent)(()=>{let e=O?k:te;O||D(te);for(let t of _n(P.current))t.checked=t.value===e});return(0,U.useEffect)(()=>{let e=P.current?.closest(`form`);if(!e)return;let t=()=>setTimeout(()=>F());return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[]),(0,W.jsx)(hn,{value:N,children:(0,W.jsx)(fn,{..._,ref:se,value:k,onValueChange:e=>{e!==null&&(O||D(e),n?.(e))},disabled:x,readOnly:S,required:C&&l!==void 0,"aria-required":C||void 0,name:l,"data-slot":`radio-group`,"data-orientation":o,"aria-orientation":o,"aria-invalid":w,"aria-labelledby":b,"aria-describedby":T,className:s(y.root(),g),children:ee})})},vn.displayName=`RadioGroup.Root`,yn=({id:e,value:t,disabled:n,className:r,children:i,...a})=>{let o=(0,U.use)(hn),c=(0,U.useId)();if(!o)throw Error(`RadioGroup.Item must be rendered inside RadioGroup.Root.`);let{styles:l,register:u}=o,d=e??c,f=!!(o.disabled||n),p=(0,U.useRef)(null);return(0,U.useLayoutEffect)(()=>{if(p.current)return u({value:t,disabled:f,element:p.current})},[u,t,f]),(0,W.jsx)(`div`,{...a,"data-slot":`radio-group-item`,"data-disabled":f||void 0,className:s(l.item(),r),children:(0,W.jsxs)(`label`,{htmlFor:d,"data-slot":`radio-group-item-label`,className:l.label(),children:[(0,W.jsx)(`span`,{"data-slot":`radio-group-item-control`,className:l.control(),children:(0,W.jsx)(Ot,{nativeButton:!0,render:(0,W.jsx)(`button`,{type:`button`}),ref:p,id:d,value:t,disabled:f,tabIndex:t===o.tabStop?0:-1,"data-slot":`radio-group-radio`,className:l.radio(),children:(0,W.jsx)(jt,{"data-slot":`radio-group-indicator`,className:l.indicator()})})}),(0,W.jsx)(`span`,{"data-slot":`radio-group-item-text`,className:l.text(),children:i})]})})},yn.displayName=`RadioGroup.Item`;try{mn.displayName=`radioGroupRecipe`,mn.__docgenInfo={description:"Style recipe for RadioGroup. Slots: `root`, `item`, `label` (the clickable row), `control` (24px\nslot for the radio), `radio` (the 16px circle), `indicator` (the dot), `text`.",displayName:`radioGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{orientation:{defaultValue:{value:`vertical`},description:``,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.1_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.1_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.1_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.1_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{vn.displayName=`RadioGroup.Root`,vn.__docgenInfo={description:'Single-select list of radios that holds the selected value as a `string`.\nRenders `role="radiogroup"`: name it with `aria-labelledby` or\n`aria-label`, or put it inside a `Field.Root`, which names, describes,\ninvalidates, disables, requires and makes it read-only (the group\'s own\nprops win). Tab enters the group on the selected item, and the arrow keys\nmove the selection.\n\nUse it when the options are few and should all stay visible. For a long\nlist use [Combobox](?path=/docs/components-combobox--docs), for several\nvalues use [CheckboxGroup](?path=/docs/components-checkboxgroup--docs), and\nfor an on/off setting use [Switch](?path=/docs/components-switch--docs).\n\nEvery native `<div>` attribute is forwarded to the group, `aria-invalid`\nincluded: `role="radiogroup"` supports it, and each radio paints the\ndestructive state from it. With react-hook-form, wire it through\n`Controller` (`value`, `onValueChange`, and `field.ref` as `controlRef`),\nnot `register`: the radios\' inputs belong to the group, not to the form\nlibrary.\n\nThe group is a single Tab stop: the selected radio if it is enabled, else\nthe first enabled one. A native form reset puts an uncontrolled group back\non `defaultValue` and a controlled one on its `value`.',displayName:`RadioGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Controlled value of the selected item. `null` leaves every item unselected; `undefined`\nmakes the group uncontrolled.",name:`value`,required:!1,tags:{},type:{name:`string | null`}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Initial value for an uncontrolled group. Leave it out to start with nothing selected.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Fires with the value of the item the user selects.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Disables every item in the group.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Keeps the items focusable but stops the selection from changing.`,name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Marks the group required (`aria-required`). With `name`, the browser also\nblocks a form submission until an item is selected; without it the radios\nare not one native group, so validation is left to the form.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"`vertical` (default) stacks the items; `horizontal` lays them in a row that wraps.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Form field name; the form submits `name=value` for the selected item.",name:`name`,required:!1,tags:{},type:{name:`string`}},controlRef:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Receives `{ focus }`, which moves focus to the radio Tab would land on.\nPass a form library's field ref here (react-hook-form's `field.ref`) so it\ncan focus the group on a failed submit.",name:`controlRef`,required:!1,tags:{},type:{name:`Ref<RadioGroupControl>`}}},tags:{summary:`Single-select radio list holding its selected value as a string`,example:`<span id="payment">Payment plan</span>
<RadioGroup.Root aria-labelledby="payment" defaultValue="monthly" onValueChange={setPlan}>
  <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
  <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
</RadioGroup.Root>`,dataAttribute:`{string} data-orientation - "vertical" | "horizontal"
{string} data-disabled - Present when the whole group is disabled
{string} data-readonly - Present when the group is read-only`}}}catch{}try{yn.displayName=`RadioGroup.Item`,yn.__docgenInfo={description:"One option of a [RadioGroup](?path=/docs/components-radiogroup--docs): a\nradio and its `<label>`, inside `RadioGroup.Root`. Native `<div>`\nattributes go to the row, except `id`, which goes to the radio.",displayName:`RadioGroup.Item`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Value the group takes when this item is selected.`,name:`value`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Disables this item only. The group's `disabled` wins over `false`.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Radio and label for one value of the group`,dataAttribute:`{string} data-disabled - Present when the item or its group is disabled`}}}catch{}})))()}var G;function xn(){return(xn=t((()=>{bn(),G={Root:vn,Item:yn}})))()}var K,q,J,Sn,Y,Cn,X,wn,Z,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Q,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,$,Jn;function Yn(){return(Yn=t((()=>{K=n(),Ye(),xn(),d(),qe(),q=r(),{expect:J,fn:Sn,userEvent:Y,waitFor:Cn,within:X}=__STORYBOOK_MODULE_TEST__,wn={title:`Components/RadioGroup`,component:G.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},"aria-invalid":{control:`boolean`},onValueChange:{action:`valueChange`}},args:{"aria-label":`Payment plan`,defaultValue:`monthly`},render:e=>(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),parameters:{docs:{description:{component:"`Root` owns the selected value; each `Item` is a radio with its label."}}}},Z=[{value:`monthly`,label:`Monthly`},{value:`quarterly`,label:`Quarterly`},{value:`annual`,label:`Annual`}],Tn={args:{onValueChange:Sn()},play:async({args:e,canvasElement:t})=>{let n=X(t);await J(n.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument(),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(22, 24, 29)`}),await Y.click(n.getByRole(`radio`,{name:`Quarterly`})),await J(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await Y.click(n.getByText(`Annual`)),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`annual`);let r=n.getByRole(`radio`,{name:`Monthly`});await Y.click(r.closest(`[data-slot=radio-group-item-control]`)),await J(r).toBeChecked()}},En={args:{orientation:`horizontal`},play:async({canvasElement:e})=>{let t=X(e),[n,r]=t.getAllByRole(`radio`).map(e=>e.closest(`[data-slot=radio-group-item]`).getBoundingClientRect());await J(t.getByRole(`radiogroup`)).toHaveAttribute(`data-orientation`,`horizontal`),await J(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-orientation`,`horizontal`),await J(r.top).toBe(n.top),await J(r.left-n.right).toBe(24)}},Dn={args:{"aria-label":void 0,defaultValue:void 0},render:e=>(0,q.jsxs)(V.Root,{invalid:!0,required:!0,children:[(0,q.jsxs)(V.Content,{children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(V.Description,{children:`How often the insured pays the premium.`})]}),(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(V.Error,{errors:[{message:`Choose a payment plan`}]})]}),play:async({canvasElement:e})=>{let t=X(e).getByRole(`radiogroup`,{name:/Payment plan/});await J(t).toHaveAccessibleDescription(/premium.*Choose a payment plan|Choose a payment plan.*premium/),await J(t).toHaveAttribute(`aria-invalid`,`true`),await J(t).toHaveAttribute(`aria-required`,`true`)}},On={args:{disabled:!0,onValueChange:Sn()},play:async({args:e,canvasElement:t})=>{let n=X(t);for(let e of n.getAllByRole(`radio`))await J(e).toBeDisabled();await J(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(207, 210, 219)`}),await Y.click(n.getByText(`Annual`)),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},kn={args:{onValueChange:Sn()},render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly`}),(0,q.jsx)(G.Item,{value:`quarterly`,disabled:!0,children:`Quarterly (not offered by this carrier)`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({args:e,canvasElement:t})=>{let n=X(t);await J(n.getByRole(`radio`,{name:/Quarterly/})).toBeDisabled(),await Y.click(n.getByRole(`radio`,{name:`Monthly`})),await Y.keyboard(`{ArrowDown}`),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`annual`)}},An={args:{readOnly:!0,onValueChange:Sn()},play:async({args:e,canvasElement:t})=>{let n=X(t),r=n.getByRole(`radio`,{name:`Annual`});await J(n.getByRole(`radiogroup`)).toHaveAttribute(`aria-readonly`,`true`),await Y.click(r),await Y.click(n.getByText(`Quarterly`)),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(r).not.toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},jn={args:{"aria-invalid":!0,"aria-describedby":`plan-error`,defaultValue:void 0},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(`p`,{id:`plan-error`,className:`text-sm text-text-input-destructive`,children:`Choose a payment plan.`})]}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radiogroup`,{name:`Payment plan`});await J(n).toHaveAttribute(`aria-invalid`,`true`),await J(n).toHaveAccessibleDescription(`Choose a payment plan.`),await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveStyle({borderColor:`rgb(217, 38, 38)`})}},Mn={render:()=>{let[e,t]=(0,K.useState)(`monthly`);return(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(`annual`),children:`Choose annual`})]}),(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e??`none`]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Choose annual`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.tab(),await J(t.getByRole(`radio`,{name:`Annual`})).toHaveFocus(),await Y.click(t.getByRole(`radio`,{name:`Quarterly`})),await J(t.getByRole(`status`)).toHaveTextContent(`quarterly`),await Y.click(t.getByRole(`button`,{name:`Clear`}));for(let e of t.getAllByRole(`radio`))await J(e).not.toBeChecked();await J(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},Nn={render:()=>{let[e,t]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,required:!0,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(t.queryByRole(`status`)).not.toBeInTheDocument(),await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},Pn={render:()=>{let{control:e,handleSubmit:t}=Je({defaultValues:{plan:``}}),[n,r]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:t(e=>r(e.plan)),children:[(0,q.jsx)(Xe,{name:`plan`,control:e,rules:{required:`Choose a payment plan`},render:({field:e,fieldState:t})=>(0,q.jsxs)(V.Root,{invalid:t.invalid,required:!0,children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(G.Root,{controlRef:e.ref,value:e.value,onValueChange:e.onChange,onBlur:e.onBlur,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(V.Error,{errors:[t.error]})]})}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),n&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveFocus();let n=t.getByRole(`radiogroup`,{name:/Payment plan/});await J(n).toHaveAccessibleDescription(`Choose a payment plan`),await J(n).toHaveAttribute(`aria-invalid`,`true`),await J(n.getBoundingClientRect().top-n.previousElementSibling.getBoundingClientRect().bottom).toBe(16),await Y.keyboard(`{ArrowDown}`),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`quarterly`)}},Q={render:e=>(0,q.jsx)(`div`,{className:`w-60`,children:(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly, charged on the policy's effective day of every month`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]})}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radio`,{name:/Monthly/}),r=t.getByText(/Monthly/),i=n.parentElement.getBoundingClientRect(),a=n.getBoundingClientRect();await J(r.getBoundingClientRect().height).toBeGreaterThan(24),await J(i.top).toBe(r.getBoundingClientRect().top),await J(i.height).toBe(24),await J(a.top-i.top).toBe(4),await J(a.width).toBe(16)}},Fn={render:()=>(0,q.jsx)(`div`,{className:`flex flex-wrap gap-10`,children:[[`Enabled`,{}],[`Disabled`,{disabled:!0}],[`Invalid`,{"aria-invalid":!0}],[`Read-only`,{readOnly:!0}]].map(([e,t])=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,q.jsx)(G.Root,{"aria-label":`${e} payment plan`,defaultValue:`quarterly`,...t,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]},e))})},In={tags:[`!dev`,`!autodocs`,`!manifest`],args:{onValueChange:Sn()},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(f,{variant:`secondary`,children:`Continue`})]}),play:async({args:e,canvasElement:t})=>{let n=X(t);await Y.tab(),await J(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await Y.keyboard(`{ArrowDown}`),await J(n.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await J(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await Y.keyboard(`{ArrowUp}{ArrowUp}`),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.tab(),await J(n.getByRole(`button`,{name:`Continue`})).toHaveFocus()}},Ln={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:void 0,onValueChange:Sn()},play:async({args:e,canvasElement:t})=>{let n=X(t);for(let e of n.getAllByRole(`radio`))await J(e).not.toBeChecked();await Y.tab(),await J(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await J(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},Rn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":void 0,"aria-labelledby":`plan-heading`},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(`span`,{id:`plan-heading`,className:`text-sm font-semibold text-text-input-normal`,children:`Payment plan`}),(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument()}},zn={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,disabled:!0,children:`Monthly (no longer offered)`}),(0,q.jsx)(G.Item,{value:`quarterly`,children:`Quarterly`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radio`,{name:/Monthly/})).toBeChecked(),await Y.tab(),await J(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus()}},Bn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,defaultValue:`monthly`,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,q.jsx)(f,{type:`submit`,children:`Submit`})]}),e&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Reset`})),await J(t.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(t.getByRole(`radio`,{name:`Annual`})).not.toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`monthly`)}},Vn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(`quarterly`),[n,r]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),r(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,value:e,onValueChange:t,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,q.jsx)(f,{type:`submit`,children:`Submit`})]}),n&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Reset`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},Hn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(!1);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(!0)},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,required:!0,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,q.jsx)(`output`,{className:`text-sm`,children:`Sent`})]})},play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-required`,`true`),await Y.click(t.getByRole(`radio`,{name:`Annual`})),await J(e.querySelector(`form`).checkValidity()).toBe(!0),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`Sent`)}},Un={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{id:`plan-monthly`,value:`monthly`,children:`Monthly`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveAttribute(`id`,`plan-monthly`),await J(t.getByRole(`radio`,{name:`Annual`}).id).not.toBe(``)}},Wn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":`Plan`,"aria-describedby":`plan-note`,disabled:!1},render:e=>(0,q.jsxs)(V.Root,{disabled:!0,children:[(0,q.jsxs)(V.Content,{children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(V.Description,{children:`How often the insured pays the premium.`})]}),(0,q.jsx)(`p`,{id:`plan-note`,children:`Changing it starts at the next renewal.`}),(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radiogroup`,{name:`Plan`});await J(n).not.toHaveAttribute(`aria-labelledby`),await J(n).toHaveAccessibleDescription(`How often the insured pays the premium. Changing it starts at the next renewal.`);for(let e of t.getAllByRole(`radio`))await J(e).toBeEnabled()}},Gn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(``);return(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,q.jsxs)(G.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:[(0,q.jsx)(G.Item,{value:``,children:`None`}),(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly`})]})]})},play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radio`,{name:`None`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Clear`})),await J(t.getByRole(`radio`,{name:`None`})).not.toBeChecked(),await J(t.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked()}},Kn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let{control:e,reset:t}=Je();return(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsx)(Xe,{name:`plan`,control:e,render:({field:e})=>(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,controlRef:e.ref,value:e.value,onValueChange:e.onChange,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})}),(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(),children:`Reset form`})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Reset form`}));for(let e of t.getAllByRole(`radio`))await J(e).not.toBeChecked()}},qn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(null);return(0,K.useEffect)(()=>{t(`annual`)},[]),(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,readOnly:!0,value:e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})},play:async({canvasElement:e})=>{let t=X(e),n=()=>t.getAllByRole(`radio`).filter(e=>e.tabIndex===0);await Cn(()=>J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()),await J(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})]),await Y.click(t.getByRole(`radio`,{name:`Quarterly`})),await J(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})])}},$={tags:[`!dev`,`!autodocs`,`!manifest`],play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByText(`Quarterly`)),await J(t.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await Y.keyboard(`{ArrowDown}`),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()}},Jn=[`Default`,`Horizontal`,`InsideField`,`Disabled`,`DisabledItem`,`ReadOnly`,`Invalid`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`AllStates`,`Keyboard`,`NoSelection`,`LabelledByHeading`,`DisabledSelectedItem`,`FormReset`,`FormResetControlled`,`RequiredWithoutName`,`ItemId`,`InsideFieldOverridden`,`EmptyStringOption`,`ResetToUndefined`,`SingleTabStop`,`LabelPressFocus`],Tn.parameters={...Tn.parameters,docs:{...Tn.parameters?.docs,source:{originalSource:`{
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
}`,...Tn.parameters?.docs?.source},description:{story:`@summary Uncontrolled group with one item selected`,...Tn.parameters?.docs?.description}}},En.parameters={...En.parameters,docs:{...En.parameters?.docs,source:{originalSource:`{
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
}`,...En.parameters?.docs?.source},description:{story:`Items laid in a row, 24px apart, wrapping when the row runs out of room.

@summary Items in a row`,...En.parameters?.docs?.description}}},Dn.parameters={...Dn.parameters,docs:{...Dn.parameters?.docs,source:{originalSource:`{
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
}`,...Dn.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, label, messages, `invalid`, `required` and\n`disabled` reach the group with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...Dn.parameters?.docs?.description}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`{
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
}`,...On.parameters?.docs?.source},description:{story:`@summary Whole group disabled`,...On.parameters?.docs?.description}}},kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`{
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
}`,...kn.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest interactive, and the arrow keys skip
it.

@summary One item disabled`,...kn.parameters?.docs?.description}}},An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`{
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
}`,...An.parameters?.docs?.source},description:{story:`The items stay focusable but the selection does not change, by pointer or
by keyboard.

@summary Read-only group`,...An.parameters?.docs?.description}}},jn.parameters={...jn.parameters,docs:{...jn.parameters?.docs,source:{originalSource:`{
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
}`,...jn.parameters?.docs?.source},description:{story:'`aria-invalid` sits on the group, which `role="radiogroup"` supports, and\nevery radio paints the destructive border from it.\n\n@summary Failed validation on the group',...jn.parameters?.docs?.description}}},Mn.parameters={...Mn.parameters,docs:{...Mn.parameters?.docs,source:{originalSource:`{
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
}`,...Mn.parameters?.docs?.source},description:{story:`@summary Controlled group whose value is set from outside`,...Mn.parameters?.docs?.description}}},Nn.parameters={...Nn.parameters,docs:{...Nn.parameters?.docs,source:{originalSource:`{
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
}`,...Nn.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value` for the selected item, and\n`required` blocks the submission while nothing is selected.\n\n@summary Native form submission",...Nn.parameters?.docs?.description}}},Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`{
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
}`,...Pn.parameters?.docs?.source},description:{story:`With react-hook-form, wire the group through \`Controller\`. Its \`ref\` lets
the form focus the group on a failed submit: focus lands on the radio Tab
would reach.

@summary React Hook Form through Controller`,...Pn.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`A long label wraps under itself and the radio stays level with its first
line.

@summary Wrapping label keeps the radio on the first line`,...Q.parameters?.docs?.description}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
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
}`,...Fn.parameters?.docs?.source},description:{story:`Every state of an item side by side, for checking against the design:
enabled, disabled, invalid and read-only, each with one item selected.

@summary Visual comparison of the item states`,...Fn.parameters?.docs?.description}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`{
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
}`,...In.parameters?.docs?.source},description:{story:`Tab enters the group on the selected item and leaves it on the next Tab;
the arrow keys move the selection, wrapping at the ends.

@summary Keyboard navigation and selection`,...In.parameters?.docs?.description}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`{
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
}`,...Ln.parameters?.docs?.source},description:{story:`With no \`defaultValue\` nothing is selected, and Tab lands on the first item
without selecting it.

@summary Group that starts with nothing selected`,...Ln.parameters?.docs?.description}}},Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`{
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
}`,...Rn.parameters?.docs?.source},description:{story:`@summary Group named by a visible heading`,...Rn.parameters?.docs?.description}}},zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
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
}`,...zn.parameters?.docs?.source},description:{story:`When the selected item is disabled, Tab enters the group on the first
enabled item instead, so the group stays reachable by keyboard.

@summary Selected item disabled`,...zn.parameters?.docs?.description}}},Bn.parameters={...Bn.parameters,docs:{...Bn.parameters?.docs,source:{originalSource:`{
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
}`,...Bn.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled group back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...Bn.parameters?.docs?.description}}},Vn.parameters={...Vn.parameters,docs:{...Vn.parameters?.docs,source:{originalSource:`{
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
}`,...Vn.parameters?.docs?.source},description:{story:`A native form reset leaves a controlled group on its \`value\`, and the form
submits that value too.

@summary Native form reset on a controlled group`,...Vn.parameters?.docs?.description}}},Hn.parameters={...Hn.parameters,docs:{...Hn.parameters?.docs,source:{originalSource:`{
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
}`,...Hn.parameters?.docs?.source},description:{story:"Without `name` the radios are not one native group, so `required` only\nmarks the group (`aria-required`) and leaves validation to the form: a\nselection never leaves the form invalid.\n\n@summary Required without a name",...Hn.parameters?.docs?.description}}},Un.parameters={...Un.parameters,docs:{...Un.parameters?.docs,source:{originalSource:`{
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
}`,...Un.parameters?.docs?.source},description:{story:`@summary Item id reaches the radio`,...Un.parameters?.docs?.description}}},Wn.parameters={...Wn.parameters,docs:{...Wn.parameters?.docs,source:{originalSource:`{
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
}`,...Wn.parameters?.docs?.source},description:{story:"`aria-label` and `disabled={false}` on the group win over the field. Its own\n`aria-describedby` joins the field's messages instead of replacing them.\n\n@summary Own props override the Field wiring",...Wn.parameters?.docs?.description}}},Gn.parameters={...Gn.parameters,docs:{...Gn.parameters?.docs,source:{originalSource:`{
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
}`,...Gn.parameters?.docs?.source},description:{story:`An item can carry the empty string, for a "None" choice: \`''\` selects it,
and only \`null\` leaves the group without a selection.

@summary Empty-string value for a None option`,...Gn.parameters?.docs?.description}}},Kn.parameters={...Kn.parameters,docs:{...Kn.parameters?.docs,source:{originalSource:`{
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
}`,...Kn.parameters?.docs?.source},description:{story:`A react-hook-form reset with no default values sets the field back to
\`undefined\`: the group clears instead of keeping the last pick on screen.

@summary Form reset to undefined clears the selection`,...Kn.parameters?.docs?.description}}},qn.parameters={...qn.parameters,docs:{...qn.parameters?.docs,source:{originalSource:`{
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
}`,...qn.parameters?.docs?.source},description:{story:`The group is always one Tab stop, even read-only with a value that arrives
after mount and a press that moves focus to another radio.

@summary Single tab stop when read-only`,...qn.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`A press on an item's text focuses that item, so the arrow keys continue
from the one just picked.

@summary Pressing a label focuses its radio`,...$.parameters?.docs?.description}}}})))()}Yn();export{Fn as AllStates,Mn as Controlled,Tn as Default,On as Disabled,kn as DisabledItem,zn as DisabledSelectedItem,Gn as EmptyStringOption,Bn as FormReset,Vn as FormResetControlled,En as Horizontal,Nn as InForm,Dn as InsideField,Wn as InsideFieldOverridden,jn as Invalid,Un as ItemId,In as Keyboard,$ as LabelPressFocus,Rn as LabelledByHeading,Q as LongLabel,Ln as NoSelection,An as ReadOnly,Hn as RequiredWithoutName,Kn as ResetToUndefined,qn as SingleTabStop,Pn as WithReactHookForm,Jn as __namedExportsOrder,wn as default};