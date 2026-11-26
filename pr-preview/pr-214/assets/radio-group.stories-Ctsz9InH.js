import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-BSow4ymF.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,n as a,r as o,t as s}from"./dist-B9nTnCIW.js";import{i as c,n as l,r as u}from"./merge-props-G2_3KbU1.js";import{n as d,t as f}from"./button-ChSD-QWz.js";import{$ as p,A as m,An as h,B as g,C as ee,Cn as _,Ct as v,D as y,E as b,En as x,F as S,G as C,Gt as w,Kt as T,L as te,Mn as E,N as D,Nn as O,Nt as k,P as ne,Pn as re,Pt as ie,Q as ae,R as A,S as j,Sn as oe,T as M,Tn as N,Tt as se,Ut as ce,V as P,W as F,Wt as le,X as I,_ as ue,_n as de,a as L,b as fe,bn as R,c as pe,d as z,dt as me,f as he,g as ge,gn as _e,h as ve,hn as ye,i as be,it as xe,j as Se,jn as Ce,kn as we,l as Te,m as Ee,mn as De,n as Oe,o as ke,p as Ae,r as je,rt as Me,s as Ne,t as Pe,tt as Fe,u as Ie,v as Le,vt as Re,w as ze,wn as Be,x as Ve,xn as He,y as Ue,z as We}from"./useCompositeListItem-hGSD9b9e.js";import{N as Ge,j as Ke}from"./dist-BuFT_1HI.js";import{a as qe,n as Je,t as B}from"./field-CiCbk5uv.js";import{a as Ye,r as Xe,t as Ze}from"./index.esm-DgZh5CJ4.js";var Qe,$e;function et(){return(et=t((()=>{Qe=`data-checked`,$e=`data-unchecked`})))()}var tt;function nt(){return(nt=t((()=>{k(),S(),et(),tt={checked(e){return e?{[Qe]:``}:{[$e]:``}},...ie,...ne}})))()}var rt;function it(){return(it=t((()=>{rt=`data-composite-item-active`})))()}function at(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=Ae(),{ref:i,index:a}=Oe(e),o=n===a,s=ot.useRef(null),c=Be(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}var ot;function st(){return(st=t((()=>{ot=e(n(),1),_(),he(),Pe()})))()}function ct(e){let{render:t,className:n,style:r,state:i=ye,props:a=De,refs:o=De,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=at({metadata:s});return C(l,e,{state:i,ref:[f,...o],props:[d,...a,u],stateAttributesMapping:c})}function lt(){return(lt=t((()=>{de(),F(),st()})))()}function ut(){return dt.useContext(ft)}var dt,ft;function pt(){return(pt=t((()=>{dt=e(n(),1),ft=dt.createContext({disabled:!1})})))()}function mt(e,t,n,r=!0,i,a){let[o,s]=_t.useState(),c=ee(i?`${i}-label`:void 0),l=!!a?.trim(),u=e??(l?void 0:t)??o;return h(()=>{let i=e||t||l||!r?void 0:ht(n.current,c);o!==i&&s(i)}),u}function ht(e,t){let n=gt(e);if(n)return!n.id&&t&&(n.id=t),n.id||void 0}function gt(e){if(!e)return;let t=e.parentElement;if(t&&t.tagName===`LABEL`)return t;let n=e.id;if(n){let t=e.nextElementSibling;if(t&&t.htmlFor===n)return t}let r=e.labels;return r&&r[0]}var _t;function vt(){return(vt=t((()=>{_t=e(n(),1),we(),j()})))()}function yt(){return bt.useContext(xt)}var bt,xt;function St(){return(St=t((()=>{bt=e(n(),1),xt=bt.createContext(void 0)})))()}function Ct(){let e=wt.useContext(Tt);if(e===void 0)throw Error(O(52));return e}var wt,Tt;function Et(){return(Et=t((()=>{re(),wt=e(n(),1),Tt=wt.createContext(void 0)})))()}var Dt,Ot,kt;function At(){return(At=t((()=>{Dt=e(n(),1),_(),we(),R(),de(),se(),me(),nt(),Ie(),j(),F(),Ne(),it(),lt(),m(),L(),pt(),fe(),vt(),Le(),St(),Et(),Ot=r(),kt=Dt.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,readOnly:a=!1,required:o=!1,"aria-labelledby":s,value:c,inputRef:l,nativeButton:u=!1,id:d,style:f,...p}=e,m=yt(),{disabled:g,readOnly:_,required:y,form:b,checkedValue:x,touched:S=!1,validation:w,name:T,setCheckedValue:E=_e,setTouched:D=_e,registerInputRef:O=_e}=m??{},{setTouched:k,setFilled:ne,state:re,disabled:ie}=Se(),ae=ut(),{labelId:A,getDescriptionProps:j}=Ve(),M=ie||ae.disabled||g||i,N=_||a,se=y||o,ce=b,P=m?x===c:c===``,F=Dt.useRef(null),le=ke(M,F),I=Dt.useRef(null),ue=w?.registerInput,de=Dt.useCallback(e=>ue?.(e,{controlRef:F,value:void 0}),[ue]),L=Be(l,I,O,de);h(()=>{I.current?.checked&&ne(!0)},[ne]),h(()=>{I.current&&O(M&&P?null:I.current)},[P,M,O]);let fe=ee(),R=Ue({id:d}),z=u?void 0:R,me={role:`radio`,"aria-checked":P,"aria-labelledby":mt(s,A,I,!u,z,p[`aria-label`]),[rt]:P?``:void 0,id:u?R:fe,onKeyDown(e){e.key===`Enter`&&e.preventDefault()},onClick(e){if(e.defaultPrevented||M||N)return;e.preventDefault();let t=I.current;t&&Te(t,e)},onFocus(e){le(!0),e.defaultPrevented||M||N||!S||(I.current?.click(),D(!1))},onBlur(){m||le(!1)}},{getButtonProps:he,buttonRef:ge}=pe({disabled:M,native:u,composite:!1}),ve={type:`radio`,ref:L,form:ce,id:z,name:T,tabIndex:-1,style:T?oe:He,"aria-hidden":!0,...c===void 0?ye:{value:te(c)},disabled:M,checked:P,required:se,readOnly:N,onChange(e){if(e.nativeEvent.defaultPrevented||M||N||c===void 0)return;let t=v(Re,e.nativeEvent);E(c,t),t.isCanceled||k(!0)},onClick(e){e.stopPropagation()},onFocus(){F.current?.focus()}},be=Dt.useMemo(()=>({...re,required:se,disabled:M,readOnly:N,checked:P}),[re,M,N,P,se]),xe=be,Ce=m!==void 0,we=[t,F,ge],Ee=[me,p,he,j,w?e=>w.getValidationProps(M,e):ye],De=C(`span`,e,{enabled:!Ce,state:be,ref:we,props:Ee,stateAttributesMapping:tt});return(0,Ot.jsxs)(Tt.Provider,{value:xe,children:[Ce?(0,Ot.jsx)(ct,{tag:`span`,render:n,className:r,style:f,state:be,refs:we,props:Ee,stateAttributesMapping:tt}):De,(0,Ot.jsx)(`input`,{...ve,suppressHydrationWarning:!0})]})})})))()}var jt,Mt;function Nt(){return(Nt=t((()=>{jt=e(n(),1),F(),Et(),nt(),A(),g(),Mt=jt.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,s=Ct(),c=s.checked,{mounted:l,transitionStatus:u,setMounted:d}=P(c),f={...s,transitionStatus:u},p=jt.useRef(null),m=a||l,h=C(`span`,e,{ref:[t,p],state:f,props:o,stateAttributesMapping:tt});return We({batch:!0,enabled:!c,open:c,ref:p,onComplete(){c||d(!1)}}),m?h:null})})))()}function Pt(e){return Ge(e)&&e.tagName===`INPUT`}function Ft(e){return!!(Pt(e)&&e.selectionStart!=null||Ge(e)&&e.tagName===`TEXTAREA`)}function It(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=Lt(e,t,`left`),a=Rt(e),o=Rt(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=Lt(e,t,`top`),r=Rt(e),i=Rt(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function Lt(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function Rt(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}var zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt;function qt(){return(qt=t((()=>{Ke(),T(),Fe(),zt=`ArrowUp`,Bt=`ArrowDown`,Vt=`ArrowLeft`,Ht=`ArrowRight`,Ut=`Home`,Wt=new Set([zt,Bt,Vt,Ht,Ut,`End`]),Gt=`Shift`,Kt=[Gt,`Control`,`Alt`,`Meta`]})))()}function Jt(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}function Yt(e){let{loopFocus:t=!0,orientation:n=`both`,grid:r,onLoop:i,direction:a,highlightedIndex:o,onHighlightedIndexChange:s,rootRef:c,enableHomeAndEndKeys:l=!1,stopEventPropagation:u,disabledIndices:d,modifierKeys:f=De}=e,[m,g]=Qt.useState(0),ee=r!=null,_=Qt.useRef(null),v=Be(_,c),y=Qt.useRef([]),b=Qt.useRef(!1),S=Qt.useRef(null),C=o??m,w=x((e,t=!1)=>{if(S.current=y.current[e]??null,(s??g)(e),t){let t=y.current[e];It(_.current,t,a,n)}}),T=x(e=>{if(e.size===0)return;if(b.current){let e=y.current,t=e.indexOf(S.current);if(t===-1){let t=e[C];!t||xe(e,C,d)?w(Xt(e,d)):S.current=t}else t!==C&&w(t);return}b.current=!0;let t=Array.from(e.keys()),r=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,i=r?e.get(r)?.index??-1:-1;if(i!==-1)w(i);else if(xe(t,C,d)){let e=I(t,{disabledIndices:d});Me(t,e)||w(e)}It(_.current,r,a,n)});h(()=>{if(d==null||o!=null||!b.current)return;let e=y.current;if(xe(e,C,d)){let t=I(e,{disabledIndices:d});Me(e,t)||w(t)}},[d,o,C,y,w]);let te=x((e,t,n)=>i?i(e,t,n,y):n),E=x(e=>{let o=e.key===`Home`||e.key===`End`;if(!Wt.has(e.key)||!l&&o||Zt(e,f)||!_.current)return;let s=a===`rtl`,c=s?Vt:Ht,m=s?Ht:Vt,h=n===`vertical`?Bt:c,g=n===`vertical`?zt:m,v=le(e.nativeEvent);if(v!=null&&Ft(v)&&!Jt(v)){let t=v.selectionStart,n=v.selectionEnd,r=v.value;if(t==null||e.shiftKey||t!==n||e.key!==g&&t<r.length||e.key!==h&&t>0)return}let b=C,x=p(y,d),S=ae(y,d);r!=null&&(b=r({disabledIndices:d,elementsRef:y,event:e,highlightedIndex:C,loopFocus:t,maxIndex:S,minIndex:x,onLoop:te,orientation:n,rtl:s}));let T=n!==`vertical`&&e.key===c||n!==`horizontal`&&e.key===`ArrowDown`,E=n!==`vertical`&&e.key===m||n!==`horizontal`&&e.key===`ArrowUp`;l&&(e.key===`Home`?b=x:e.key===`End`&&(b=S)),b===C&&(T||E)&&(t&&b===S&&T?(b=x,i&&(b=i(e,C,b,y))):t&&b===x&&E?(b=S,i&&(b=i(e,C,b,y))):b=I(y.current,{startingIndex:b,decrement:E,disabledIndices:d})),b!==C&&!Me(y.current,b)&&(u&&e.stopPropagation(),(ee||o||T||E)&&e.preventDefault(),w(b,!0),queueMicrotask(()=>{y.current[b]?.focus()}))});return{props:{ref:v,onFocus(e){let t=_.current,n=le(e.nativeEvent);t&&n!=null&&Ft(n)&&n.setSelectionRange(0,n.value.length)},onKeyDown:E},highlightedIndex:C,onHighlightedIndexChange:w,elementsRef:y,onMapChange:T,relayKeyboardEvent:E}}function Xt(e,t){let n=-1;for(let r=0;r<e.length;r+=1){let i=e[r];if(i&&!xe(e,r,t)){if(i.hasAttribute(`data-composite-item-active`))return r;n===-1&&(n=r)}}return Math.max(n,0)}function Zt(e,t){for(let n of Kt)if(!t.includes(n)&&e.getModifierState(n))return!0;return!1}var Qt;function $t(){return($t=t((()=>{Qt=e(n(),1),N(),_(),we(),de(),qt(),it(),w()})))()}function en(e){let{render:t,className:n,style:r,refs:i=De,props:a=De,state:o=ye,stateAttributesMapping:s,highlightedIndex:c,onHighlightedIndexChange:l,orientation:u,grid:d,loopFocus:f,onLoop:p,enableHomeAndEndKeys:m,onMapChange:h,stopEventPropagation:g=!0,rootRef:ee,disabledIndices:_,modifierKeys:v,highlightItemOnHover:y=!1,tag:b=`div`,...x}=e,{props:S,highlightedIndex:w,onHighlightedIndexChange:T,elementsRef:te,onMapChange:E,relayKeyboardEvent:D}=Yt({grid:d,loopFocus:f,onLoop:p,orientation:u,highlightedIndex:c,onHighlightedIndexChange:l,rootRef:ee,stopEventPropagation:g,enableHomeAndEndKeys:m,direction:ve(),disabledIndices:_,modifierKeys:v}),O=C(b,e,{state:o,ref:i,props:[S,...a,x],stateAttributesMapping:s}),k=tn.useMemo(()=>({highlightedIndex:w,onHighlightedIndexChange:T,highlightItemOnHover:y,relayKeyboardEvent:D}),[w,T,y,D]);return(0,nn.jsx)(z.Provider,{value:k,children:(0,nn.jsx)(je,{elementsRef:te,onMapChange:e=>{h?.(e),E(e)},children:O})})}var tn,nn;function rn(){return(rn=t((()=>{tn=e(n(),1),de(),be(),$t(),he(),F(),Ee(),nn=r()})))()}function an(e,t){return e.matches(`:disabled`)?!1:!t||e.form===t||e.form===null&&!e.hasAttribute(`form`)}function on(){return(on=t((()=>{n(),S(),Object.keys(D)})))()}function sn(e=!1){let t=cn.useContext(ln);if(!t&&!e)throw Error(O(86));return t}var cn,ln;function un(){return(un=t((()=>{re(),cn=e(n(),1),ln=cn.createContext(void 0)})))()}var V,dn,fn,pn;function mn(){return(mn=t((()=>{V=e(n(),1),Ce(),we(),_(),N(),j(),w(),qt(),rn(),m(),b(),S(),on(),un(),ze(),fe(),ge(),St(),dn=r(),fn=[Gt],pn=V.forwardRef(function(e,t){let{render:n,className:r,disabled:i,readOnly:a,required:o,onValueChange:s,value:c,defaultValue:l,form:u,name:d,inputRef:f,id:p,style:m,...g}=e,{setTouched:_,setFocused:v,validationMode:b,name:S,disabled:C,state:w,validation:T,setDirty:te,setFilled:D,validityData:O}=Se(),{labelId:k}=Ve(),{clearErrors:re,elementRef:ie}=M(),ae=sn(!0),A=C||i,j=S??d,oe=ee(p),[N,se]=E({controlled:c,default:l,name:`RadioGroup`,state:`value`}),[P,F]=V.useState(!1),le=x((e,t)=>{s?.(e,t),t.isCanceled||se(e)}),I=T.getInputControl,de=V.useMemo(()=>({get current(){return I()}}),[I]),L=V.useRef(null),fe=V.useRef(null),R=Be(L,f),pe=V.useRef(R),z=x(e=>{(L.current!==e||pe.current!==R)&&(pe.current=R,R?.(e))});h(()=>{z(L.current)},[R,z]);let me=x(e=>{if(e){if(!e.disabled){fe.current||=e;let t=L.current;(e.checked||t==null||t.disabled)&&z(e)}return()=>{fe.current===e&&(fe.current=null),L.current===e&&z(null)}}}),he=x(()=>{let e=ie.current;if(!e)return N??null;for(let t of T.registeredInputs.keys())if(t.checked&&an(t,e))return N??null;return null});y(de,oe,N??null,he,!A,d),ue(N,()=>{re(j),te(N!==O.initialValue),D(N!=null),T.change(N);let e=fe.current;N==null&&e&&!e.disabled&&z(e)});let ge=k??ae?.legendId,_e={...w,disabled:A??!1,required:o??!1,readOnly:a??!1},ve=V.useMemo(()=>({checkedValue:N,disabled:A,form:u,validation:T,name:j,readOnly:a,registerInputRef:me,required:o,setCheckedValue:le,setTouched:F,touched:P}),[N,A,u,T,j,a,me,o,le,F,P]),ye={id:p,role:`radiogroup`,"aria-required":o||void 0,"aria-disabled":A||void 0,"aria-readonly":a||void 0,"aria-labelledby":ge,onBlur(e){ce(e.currentTarget,e.relatedTarget)||(F(!1),_(!0),v(!1),b===`onBlur`&&T.commit(N))},onKeyDownCapture(e){e.key.startsWith(`Arrow`)&&F(!0)}};return(0,dn.jsx)(xt.Provider,{value:ve,children:(0,dn.jsx)(en,{render:n,className:r,style:m,state:_e,props:[ye,g,e=>T.getValidationProps(A??!1,e)],refs:[t],stateAttributesMapping:ne,enableHomeAndEndKeys:!1,modifierKeys:fn})})})})))()}var H,U,hn,gn,_n,vn,yn,bn;function xn(){return(xn=t((()=>{H=n(),At(),Nt(),mn(),s(),i(),l(),Je(),U=r(),hn=a({slots:{root:[`flex [:is([data-slot=field-content],[data-slot=field-label],[data-slot=label],[data-slot=field-description])+&]:mt-2`,`[&:has(+[data-slot=field-error])]:mb-2`],item:`group/radio-group-item flex`,label:[`group/radio-group-label flex cursor-pointer items-start gap-3 text-sm text-text-default-base-primary select-none`,`group-data-disabled/radio-group-item:cursor-not-allowed`,`in-data-readonly:cursor-default`],control:`flex size-6 shrink-0 items-center justify-center`,radio:[`relative box-border inline-flex size-4 shrink-0 items-center justify-center rounded-full`,`border-[1.5px] border-solid border-border-checkbox-default bg-bg-input-normal`,`cursor-pointer transition-colors duration-150`,`not-data-disabled:data-unchecked:shadow-xs`,`not-data-disabled:not-data-readonly:not-in-aria-invalid:data-unchecked:group-hover/radio-group-label:border-border-input-hover`,`data-checked:border-bg-checkbox-selected`,`outline-solid outline-2 outline-offset-2 outline-transparent`,`focus-visible:outline-focus-ring-button-primary`,`in-aria-invalid:border-border-input-destructive`,`in-aria-invalid:focus-visible:outline-focus-ring-button-destructive`,`in-aria-invalid:data-checked:border-bg-default-danger-primary`,`data-disabled:cursor-not-allowed data-disabled:border-border-checkbox-disabled data-disabled:bg-bg-input-disable`,`in-aria-invalid:data-disabled:border-bg-checkbox-invalid-disabled`,`in-data-readonly:cursor-default`],indicator:[`size-2 rounded-full bg-bg-checkbox-selected`,`in-aria-invalid:bg-bg-default-danger-primary`,`data-disabled:bg-bg-checkbox-disabled`,`in-aria-invalid:data-disabled:bg-bg-checkbox-invalid-disabled`],text:`flex min-h-6 items-center group-data-disabled/radio-group-item:text-text-default-disable-primary`},variants:{orientation:{vertical:{root:`flex-col gap-2`},horizontal:{root:`flex-row flex-wrap gap-x-6 gap-y-2`}}},defaultVariants:{orientation:`vertical`}}),gn=(0,H.createContext)(null),_n=(e,t)=>e.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1,vn=e=>Array.from(e?.querySelectorAll(`input[type=radio]`)??[]),yn=({value:e,defaultValue:t,onValueChange:n,disabled:r,readOnly:i,required:a,orientation:s=`vertical`,name:l,"aria-invalid":d,"aria-labelledby":f,"aria-describedby":p,ref:m,controlRef:h,className:g,children:ee,..._})=>{let v=qe(),y=hn({orientation:s}),b=f??(_[`aria-label`]===void 0?v?.labelId:void 0),x=r??(v?.disabled||void 0),S=i??(v?.readOnly||void 0),C=a??(v?.required||void 0),w=d??(v?.invalid||void 0),T=u({"aria-describedby":v?.describedBy},{"aria-describedby":p})[`aria-describedby`],[te]=(0,H.useState)(t??null),[E,D]=(0,H.useState)(t??null),O=e!==void 0,k=O?e:E,[ne,re]=(0,H.useState)(e);e!==ne&&(re(e),e===void 0&&D(null));let[ie,ae]=(0,H.useState)([]),A=(0,H.useCallback)(e=>(ae(t=>[...t.filter(t=>t.element!==e.element),e].sort(_n)),()=>ae(t=>t.filter(t=>t.element!==e.element))),[]),j=ie.filter(e=>!e.disabled),oe=j.find(e=>e.value===k)??j[0];(0,H.useImperativeHandle)(h,()=>({focus:()=>oe?.element.focus()}),[oe]);let M=(0,H.useRef)(null),N=(0,H.useMemo)(()=>c(M,m),[m]),se=(0,H.useEffectEvent)(()=>{let e=O?k:te;O||D(te);for(let t of vn(M.current))t.checked=t.value===e});return(0,H.useEffect)(()=>{let e=M.current?.closest(`form`);if(!e)return;let t=()=>setTimeout(()=>se());return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[]),(0,U.jsx)(gn,{value:{styles:y,disabled:x,tabStop:oe?.value,register:A},children:(0,U.jsx)(pn,{..._,ref:N,value:k,onValueChange:e=>{e!==null&&(O||D(e),n?.(e))},disabled:x,readOnly:S,required:C&&l!==void 0,"aria-required":C||void 0,name:l,"data-slot":`radio-group`,"data-orientation":s,"aria-orientation":s,"aria-invalid":w,"aria-labelledby":b,"aria-describedby":T,className:o(y.root(),g),children:ee})})},yn.displayName=`RadioGroup.Root`,bn=({id:e,value:t,disabled:n,className:r,children:i,...a})=>{let s=(0,H.use)(gn),c=(0,H.useId)();if(!s)throw Error(`RadioGroup.Item must be rendered inside RadioGroup.Root.`);let{styles:l,register:u}=s,d=e??c,f=!!(s.disabled||n),p=(0,H.useRef)(null);return(0,H.useLayoutEffect)(()=>{if(p.current)return u({value:t,disabled:f,element:p.current})},[u,t,f]),(0,U.jsx)(`div`,{...a,"data-slot":`radio-group-item`,"data-disabled":f||void 0,className:o(l.item(),r),children:(0,U.jsxs)(`label`,{htmlFor:d,"data-slot":`radio-group-item-label`,className:l.label(),children:[(0,U.jsx)(`span`,{"data-slot":`radio-group-item-control`,className:l.control(),children:(0,U.jsx)(kt,{nativeButton:!0,render:(0,U.jsx)(`button`,{type:`button`}),ref:p,id:d,value:t,disabled:f,tabIndex:t===s.tabStop?0:-1,"data-slot":`radio-group-radio`,className:l.radio(),children:(0,U.jsx)(Mt,{"data-slot":`radio-group-indicator`,className:l.indicator()})})}),(0,U.jsx)(`span`,{"data-slot":`radio-group-item-text`,className:l.text(),children:i})]})})},bn.displayName=`RadioGroup.Item`;try{hn.displayName=`radioGroupRecipe`,hn.__docgenInfo={description:"Style recipe for RadioGroup. Slots: `root`, `item`, `label` (the clickable row), `control` (24px\nslot for the radio), `radio` (the 16px circle), `indicator` (the dot), `text`.",displayName:`radioGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{orientation:{defaultValue:{value:`vertical`},description:``,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@4.0.2/node_modules/tailwind-variants/dist/types-C5MP2uZf.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{yn.displayName=`RadioGroup.Root`,yn.__docgenInfo={description:'Single-select list of radios that holds the selected value as a `string`.\nRenders `role="radiogroup"`: name it with `aria-labelledby` or\n`aria-label`, or put it inside a `Field.Root`, which names, describes,\ninvalidates, disables, requires and makes it read-only (the group\'s own\nprops win). Tab enters the group on the selected item, and the arrow keys\nmove the selection.\n\nUse it when the options are few and should all stay visible. For a long\nlist use [Combobox](?path=/docs/components-combobox--docs), for several\nvalues use [CheckboxGroup](?path=/docs/components-checkboxgroup--docs), and\nfor an on/off setting use [Switch](?path=/docs/components-switch--docs).\n\nEvery native `<div>` attribute is forwarded to the group, `aria-invalid`\nincluded: `role="radiogroup"` supports it, and each radio paints the\ndestructive state from it. With react-hook-form, wire it through\n`Controller` (`value`, `onValueChange`, and `field.ref` as `controlRef`),\nnot `register`: the radios\' inputs belong to the group, not to the form\nlibrary.\n\nThe group is a single Tab stop: the selected radio if it is enabled, else\nthe first enabled one. A native form reset puts an uncontrolled group back\non `defaultValue` and a controlled one on its `value`.',displayName:`RadioGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Controlled value of the selected item. `null` leaves every item unselected; `undefined`\nmakes the group uncontrolled.",name:`value`,required:!1,tags:{},type:{name:`string | null`}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Initial value for an uncontrolled group. Leave it out to start with nothing selected.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Fires with the value of the item the user selects.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Disables every item in the group.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Keeps the items focusable but stops the selection from changing.`,name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Marks the group required (`aria-required`). With `name`, the browser also\nblocks a form submission until an item is selected; without it the radios\nare not one native group, so validation is left to the form.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"`vertical` (default) stacks the items; `horizontal` lays them in a row that wraps.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Form field name; the form submits `name=value` for the selected item.",name:`name`,required:!1,tags:{},type:{name:`string`}},controlRef:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Receives `{ focus }`, which moves focus to the radio Tab would land on.\nPass a form library's field ref here (react-hook-form's `field.ref`) so it\ncan focus the group on a failed submit.",name:`controlRef`,required:!1,tags:{},type:{name:`Ref<RadioGroupControl>`}}},tags:{summary:`Single-select radio list holding its selected value as a string`,example:`<span id="payment">Payment plan</span>
<RadioGroup.Root aria-labelledby="payment" defaultValue="monthly" onValueChange={setPlan}>
  <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
  <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
</RadioGroup.Root>`,dataAttribute:`{string} data-orientation - "vertical" | "horizontal"
{string} data-disabled - Present when the whole group is disabled
{string} data-readonly - Present when the group is read-only`}}}catch{}try{bn.displayName=`RadioGroup.Item`,bn.__docgenInfo={description:"One option of a [RadioGroup](?path=/docs/components-radiogroup--docs): a\nradio and its `<label>`, inside `RadioGroup.Root`. Native `<div>`\nattributes go to the row, except `id`, which goes to the radio.",displayName:`RadioGroup.Item`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Value the group takes when this item is selected.`,name:`value`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Disables this item only. The group's `disabled` wins over `false`.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Radio and label for one value of the group`,dataAttribute:`{string} data-disabled - Present when the item or its group is disabled`}}}catch{}})))()}var W;function Sn(){return(Sn=t((()=>{xn(),W={Root:yn,Item:bn}})))()}var G,K,q,J,Y,Cn,X,wn,Z,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Q,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,$,Jn;function Yn(){return(Yn=t((()=>{G=n(),Xe(),Sn(),d(),Je(),K=r(),{expect:q,fn:J,userEvent:Y,waitFor:Cn,within:X}=__STORYBOOK_MODULE_TEST__,wn={title:`Components/RadioGroup`,component:W.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},"aria-invalid":{control:`boolean`},onValueChange:{action:`valueChange`}},args:{"aria-label":`Payment plan`,defaultValue:`monthly`},render:e=>(0,K.jsx)(W.Root,{...e,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),parameters:{docs:{description:{component:"`Root` owns the selected value; each `Item` is a radio with its label."}}}},Z=[{value:`monthly`,label:`Monthly`},{value:`quarterly`,label:`Quarterly`},{value:`annual`,label:`Annual`}],Tn={args:{onValueChange:J()},play:async({args:e,canvasElement:t})=>{let n=X(t);await q(n.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument(),await q(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await q(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(22, 24, 29)`}),await Y.click(n.getByRole(`radio`,{name:`Quarterly`})),await q(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await q(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await q(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await Y.click(n.getByText(`Annual`)),await q(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await q(e.onValueChange).toHaveBeenLastCalledWith(`annual`);let r=n.getByRole(`radio`,{name:`Monthly`});await Y.click(r.closest(`[data-slot=radio-group-item-control]`)),await q(r).toBeChecked()}},En={args:{orientation:`horizontal`},play:async({canvasElement:e})=>{let t=X(e),[n,r]=t.getAllByRole(`radio`).map(e=>e.closest(`[data-slot=radio-group-item]`).getBoundingClientRect());await q(t.getByRole(`radiogroup`)).toHaveAttribute(`data-orientation`,`horizontal`),await q(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-orientation`,`horizontal`),await q(r.top).toBe(n.top),await q(r.left-n.right).toBe(24)}},Dn={args:{"aria-label":void 0,defaultValue:void 0},render:e=>(0,K.jsxs)(B.Root,{invalid:!0,required:!0,children:[(0,K.jsxs)(B.Content,{children:[(0,K.jsx)(B.Label,{children:`Payment plan`}),(0,K.jsx)(B.Description,{children:`How often the insured pays the premium.`})]}),(0,K.jsx)(W.Root,{...e,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),(0,K.jsx)(B.Error,{errors:[{message:`Choose a payment plan`}]})]}),play:async({canvasElement:e})=>{let t=X(e).getByRole(`radiogroup`,{name:/Payment plan/});await q(t).toHaveAccessibleDescription(/premium.*Choose a payment plan|Choose a payment plan.*premium/),await q(t).toHaveAttribute(`aria-invalid`,`true`),await q(t).toHaveAttribute(`aria-required`,`true`)}},On={args:{disabled:!0,onValueChange:J()},play:async({args:e,canvasElement:t})=>{let n=X(t);for(let e of n.getAllByRole(`radio`))await q(e).toBeDisabled();await q(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(207, 210, 219)`}),await Y.click(n.getByText(`Annual`)),await q(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await q(e.onValueChange).not.toHaveBeenCalled()}},kn={args:{onValueChange:J()},render:e=>(0,K.jsxs)(W.Root,{...e,children:[(0,K.jsx)(W.Item,{value:`monthly`,children:`Monthly`}),(0,K.jsx)(W.Item,{value:`quarterly`,disabled:!0,children:`Quarterly (not offered by this carrier)`}),(0,K.jsx)(W.Item,{value:`annual`,children:`Annual`})]}),play:async({args:e,canvasElement:t})=>{let n=X(t);await q(n.getByRole(`radio`,{name:/Quarterly/})).toBeDisabled(),await Y.click(n.getByRole(`radio`,{name:`Monthly`})),await Y.keyboard(`{ArrowDown}`),await q(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await q(e.onValueChange).toHaveBeenLastCalledWith(`annual`)}},An={args:{readOnly:!0,onValueChange:J()},play:async({args:e,canvasElement:t})=>{let n=X(t),r=n.getByRole(`radio`,{name:`Annual`});await q(n.getByRole(`radiogroup`)).toHaveAttribute(`aria-readonly`,`true`),await Y.click(r),await Y.click(n.getByText(`Quarterly`)),await q(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await q(r).not.toBeChecked(),await q(e.onValueChange).not.toHaveBeenCalled()}},jn={args:{"aria-invalid":!0,"aria-describedby":`plan-error`,defaultValue:void 0},render:e=>(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsx)(W.Root,{...e,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),(0,K.jsx)(`p`,{id:`plan-error`,className:`text-sm text-text-input-destructive`,children:`Choose a payment plan.`})]}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radiogroup`,{name:`Payment plan`});await q(n).toHaveAttribute(`aria-invalid`,`true`),await q(n).toHaveAccessibleDescription(`Choose a payment plan.`),await q(t.getByRole(`radio`,{name:`Monthly`})).toHaveStyle({borderColor:`rgb(217, 38, 38)`})}},Mn={render:()=>{let[e,t]=(0,G.useState)(`monthly`);return(0,K.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,K.jsxs)(`div`,{className:`flex gap-3`,children:[(0,K.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,K.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(`annual`),children:`Choose annual`})]}),(0,K.jsx)(W.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e??`none`]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Choose annual`})),await q(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.tab(),await q(t.getByRole(`radio`,{name:`Annual`})).toHaveFocus(),await Y.click(t.getByRole(`radio`,{name:`Quarterly`})),await q(t.getByRole(`status`)).toHaveTextContent(`quarterly`),await Y.click(t.getByRole(`button`,{name:`Clear`}));for(let e of t.getAllByRole(`radio`))await q(e).not.toBeChecked();await q(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},Nn={render:()=>{let[e,t]=(0,G.useState)(null);return(0,K.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,K.jsx)(W.Root,{"aria-label":`Payment plan`,name:`plan`,required:!0,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),(0,K.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(t.queryByRole(`status`)).not.toBeInTheDocument(),await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},Pn={render:()=>{let{control:e,handleSubmit:t}=Ye({defaultValues:{plan:``}}),[n,r]=(0,G.useState)(null);return(0,K.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:t(e=>r(e.plan)),children:[(0,K.jsx)(Ze,{name:`plan`,control:e,rules:{required:`Choose a payment plan`},render:({field:e,fieldState:t})=>(0,K.jsxs)(B.Root,{invalid:t.invalid,required:!0,children:[(0,K.jsx)(B.Label,{children:`Payment plan`}),(0,K.jsx)(W.Root,{controlRef:e.ref,value:e.value,onValueChange:e.onChange,onBlur:e.onBlur,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),(0,K.jsx)(B.Error,{errors:[t.error]})]})}),(0,K.jsx)(f,{type:`submit`,children:`Submit`}),n&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(t.getByRole(`radio`,{name:`Monthly`})).toHaveFocus();let n=t.getByRole(`radiogroup`,{name:/Payment plan/});await q(n).toHaveAccessibleDescription(`Choose a payment plan`),await q(n).toHaveAttribute(`aria-invalid`,`true`),await q(n.getBoundingClientRect().top-n.previousElementSibling.getBoundingClientRect().bottom).toBe(16),await Y.keyboard(`{ArrowDown}`),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`quarterly`)}},Q={render:e=>(0,K.jsx)(`div`,{className:`w-60`,children:(0,K.jsxs)(W.Root,{...e,children:[(0,K.jsx)(W.Item,{value:`monthly`,children:`Monthly, charged on the policy's effective day of every month`}),(0,K.jsx)(W.Item,{value:`annual`,children:`Annual`})]})}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radio`,{name:/Monthly/}),r=t.getByText(/Monthly/),i=n.parentElement.getBoundingClientRect(),a=n.getBoundingClientRect();await q(r.getBoundingClientRect().height).toBeGreaterThan(24),await q(i.top).toBe(r.getBoundingClientRect().top),await q(i.height).toBe(24),await q(a.top-i.top).toBe(4),await q(a.width).toBe(16)}},Fn={render:()=>(0,K.jsx)(`div`,{className:`flex flex-wrap gap-10`,children:[[`Enabled`,{}],[`Disabled`,{disabled:!0}],[`Invalid`,{"aria-invalid":!0}],[`Read-only`,{readOnly:!0}]].map(([e,t])=>(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,K.jsx)(W.Root,{"aria-label":`${e} payment plan`,defaultValue:`quarterly`,...t,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))})]},e))})},In={tags:[`!dev`,`!autodocs`,`!manifest`],args:{onValueChange:J()},render:e=>(0,K.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,K.jsx)(W.Root,{...e,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),(0,K.jsx)(f,{variant:`secondary`,children:`Continue`})]}),play:async({args:e,canvasElement:t})=>{let n=X(t);await Y.tab(),await q(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await Y.keyboard(`{ArrowDown}`),await q(n.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await q(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await q(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await Y.keyboard(`{ArrowUp}{ArrowUp}`),await q(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.tab(),await q(n.getByRole(`button`,{name:`Continue`})).toHaveFocus()}},Ln={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:void 0,onValueChange:J()},play:async({args:e,canvasElement:t})=>{let n=X(t);for(let e of n.getAllByRole(`radio`))await q(e).not.toBeChecked();await Y.tab(),await q(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await q(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await q(e.onValueChange).not.toHaveBeenCalled()}},Rn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":void 0,"aria-labelledby":`plan-heading`},render:e=>(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsx)(`span`,{id:`plan-heading`,className:`text-sm font-semibold text-text-input-normal`,children:`Payment plan`}),(0,K.jsx)(W.Root,{...e,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e);await q(t.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument()}},zn={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,K.jsxs)(W.Root,{...e,children:[(0,K.jsx)(W.Item,{value:`monthly`,disabled:!0,children:`Monthly (no longer offered)`}),(0,K.jsx)(W.Item,{value:`quarterly`,children:`Quarterly`}),(0,K.jsx)(W.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=X(e);await q(t.getByRole(`radio`,{name:/Monthly/})).toBeChecked(),await Y.tab(),await q(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus()}},Bn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,G.useState)(null);return(0,K.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,K.jsx)(W.Root,{"aria-label":`Payment plan`,name:`plan`,defaultValue:`monthly`,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),(0,K.jsxs)(`div`,{className:`flex gap-3`,children:[(0,K.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,K.jsx)(f,{type:`submit`,children:`Submit`})]}),e&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Reset`})),await q(t.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await q(t.getByRole(`radio`,{name:`Annual`})).not.toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`monthly`)}},Vn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,G.useState)(`quarterly`),[n,r]=(0,G.useState)(null);return(0,K.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),r(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,K.jsx)(W.Root,{"aria-label":`Payment plan`,name:`plan`,value:e,onValueChange:t,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),(0,K.jsxs)(`div`,{className:`flex gap-3`,children:[(0,K.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,K.jsx)(f,{type:`submit`,children:`Submit`})]}),n&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Reset`})),await q(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},Hn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,G.useState)(!1);return(0,K.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(!0)},children:[(0,K.jsx)(W.Root,{"aria-label":`Payment plan`,required:!0,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))}),(0,K.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,K.jsx)(`output`,{className:`text-sm`,children:`Sent`})]})},play:async({canvasElement:e})=>{let t=X(e);await q(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-required`,`true`),await Y.click(t.getByRole(`radio`,{name:`Annual`})),await q(e.querySelector(`form`).checkValidity()).toBe(!0),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`Sent`)}},Un={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,K.jsxs)(W.Root,{...e,children:[(0,K.jsx)(W.Item,{id:`plan-monthly`,value:`monthly`,children:`Monthly`}),(0,K.jsx)(W.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=X(e);await q(t.getByRole(`radio`,{name:`Monthly`})).toHaveAttribute(`id`,`plan-monthly`),await q(t.getByRole(`radio`,{name:`Annual`}).id).not.toBe(``)}},Wn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":`Plan`,"aria-describedby":`plan-note`,disabled:!1},render:e=>(0,K.jsxs)(B.Root,{disabled:!0,children:[(0,K.jsxs)(B.Content,{children:[(0,K.jsx)(B.Label,{children:`Payment plan`}),(0,K.jsx)(B.Description,{children:`How often the insured pays the premium.`})]}),(0,K.jsx)(`p`,{id:`plan-note`,children:`Changing it starts at the next renewal.`}),(0,K.jsx)(W.Root,{...e,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radiogroup`,{name:`Plan`});await q(n).not.toHaveAttribute(`aria-labelledby`),await q(n).toHaveAccessibleDescription(`How often the insured pays the premium. Changing it starts at the next renewal.`);for(let e of t.getAllByRole(`radio`))await q(e).toBeEnabled()}},Gn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,G.useState)(``);return(0,K.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,K.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,K.jsxs)(W.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:[(0,K.jsx)(W.Item,{value:``,children:`None`}),(0,K.jsx)(W.Item,{value:`monthly`,children:`Monthly`})]})]})},play:async({canvasElement:e})=>{let t=X(e);await q(t.getByRole(`radio`,{name:`None`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Clear`})),await q(t.getByRole(`radio`,{name:`None`})).not.toBeChecked(),await q(t.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked()}},Kn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let{control:e,reset:t}=Ye();return(0,K.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,K.jsx)(Ze,{name:`plan`,control:e,render:({field:e})=>(0,K.jsx)(W.Root,{"aria-label":`Payment plan`,controlRef:e.ref,value:e.value,onValueChange:e.onChange,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))})}),(0,K.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(),children:`Reset form`})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await q(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Reset form`}));for(let e of t.getAllByRole(`radio`))await q(e).not.toBeChecked()}},qn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,G.useState)(null);return(0,G.useEffect)(()=>{t(`annual`)},[]),(0,K.jsx)(W.Root,{"aria-label":`Payment plan`,readOnly:!0,value:e,children:Z.map(({value:e,label:t})=>(0,K.jsx)(W.Item,{value:e,children:t},e))})},play:async({canvasElement:e})=>{let t=X(e),n=()=>t.getAllByRole(`radio`).filter(e=>e.tabIndex===0);await Cn(()=>q(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()),await q(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})]),await Y.click(t.getByRole(`radio`,{name:`Quarterly`})),await q(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})])}},$={tags:[`!dev`,`!autodocs`,`!manifest`],play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByText(`Quarterly`)),await q(t.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await q(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await Y.keyboard(`{ArrowDown}`),await q(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()}},Jn=[`Default`,`Horizontal`,`InsideField`,`Disabled`,`DisabledItem`,`ReadOnly`,`Invalid`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`AllStates`,`Keyboard`,`NoSelection`,`LabelledByHeading`,`DisabledSelectedItem`,`FormReset`,`FormResetControlled`,`RequiredWithoutName`,`ItemId`,`InsideFieldOverridden`,`EmptyStringOption`,`ResetToUndefined`,`SingleTabStop`,`LabelPressFocus`],Tn.parameters={...Tn.parameters,docs:{...Tn.parameters?.docs,source:{originalSource:`{
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