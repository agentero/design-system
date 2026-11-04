import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DJ-ouHMA.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./dist-C8AlzbfS.js";import{n as o,t as s}from"./utils-nsk-j2e0.js";import{i as c,n as l,r as u}from"./merge-props-DCYDZV8W.js";import{C as d,Ct as f,F as p,H as m,I as h,J as g,L as _,M as v,Mt as y,N as b,Nt as ee,O as x,Pt as S,Q as C,R as w,S as T,St as E,T as D,U as O,X as k,Z as A,_ as te,_n as ne,_t as j,a as re,b as ie,bn as M,c as N,cn as ae,d as P,dn as oe,et as F,f as se,fn as I,g as L,gn as R,h as ce,i as le,in as ue,it as de,j as fe,k as pe,l as me,ln as he,m as ge,n as _e,nn as ve,nt as ye,o as be,p as xe,pn as z,r as Se,rn as Ce,s as we,sn as Te,t as Ee,tn as B,tt as De,u as Oe,un as ke,ut as Ae,v as je,vn as Me,w as Ne,x as Pe,xn as Fe,y as Ie,yn as Le,z as Re}from"./useCompositeListItem-BPStrmDf.js";import{D as ze,k as Be}from"./floating-ui.react-dom-CePZF3e3.js";import{a as Ve,n as He,t as V}from"./field-DYi1UsYG.js";import{a as Ue,r as We,t as Ge}from"./index.esm-_pm7FXBq.js";var Ke,qe;function Je(){return(Je=t((()=>{Ke=`data-checked`,qe=`data-unchecked`})))()}var Ye;function Xe(){return(Xe=t((()=>{E(),b(),Je(),Ye={checked(e){return e?{[Ke]:``}:{[qe]:``}},...f,...v}})))()}var Ze;function Qe(){return(Qe=t((()=>{Ze=`data-composite-item-active`})))()}function $e(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=P(),{ref:i,index:a}=_e(e),o=n===a,s=et.useRef(null),c=oe(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}var et;function tt(){return(tt=t((()=>{et=e(n(),1),ke(),Oe(),Ee()})))()}function nt(e){let{render:t,className:n,style:r,state:i=ve,props:a=B,refs:o=B,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=$e({metadata:s});return O(l,e,{state:i,ref:[f,...o],props:[d,...a,u],stateAttributesMapping:c})}function rt(){return(rt=t((()=>{ue(),m(),tt()})))()}function it(){return at.useContext(ot)}var at,ot;function st(){return(st=t((()=>{at=e(n(),1),ot=at.createContext({disabled:!1})})))()}function ct(e,t,n,r=!0,i){let[a,o]=dt.useState(),s=Pe(i?`${i}-label`:void 0),c=e??t??a;return ne(()=>{let i=e||t||!r?void 0:lt(n.current,s);a!==i&&o(i)}),c}function lt(e,t){let n=ut(e);if(n)return!n.id&&t&&(n.id=t),n.id||void 0}function ut(e){if(!e)return;let t=e.parentElement;if(t&&t.tagName===`LABEL`)return t;let n=e.id;if(n){let t=e.nextElementSibling;if(t&&t.htmlFor===n)return t}let r=e.labels;return r&&r[0]}var dt;function ft(){return(ft=t((()=>{dt=e(n(),1),R(),ie()})))()}function pt(){return mt.useContext(ht)}var mt,ht;function gt(){return(gt=t((()=>{mt=e(n(),1),ht=mt.createContext(void 0)})))()}function _t(){let e=vt.useContext(yt);if(e===void 0)throw Error(M(52));return e}var vt,yt;function bt(){return(bt=t((()=>{Fe(),vt=e(n(),1),yt=vt.createContext(void 0)})))()}var xt,St,Ct;function wt(){return(wt=t((()=>{xt=e(n(),1),ke(),R(),Te(),ue(),de(),Ae(),Xe(),N(),ie(),m(),re(),Qe(),rt(),x(),st(),je(),ft(),L(),gt(),bt(),St=r(),Ct=xt.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,readOnly:a=!1,required:o=!1,"aria-labelledby":s,value:c,inputRef:l,nativeButton:u=!1,id:d,style:f,...m}=e,h=pt(),{disabled:g,readOnly:_,required:v,form:y,checkedValue:b,touched:ee=!1,validation:x,name:S,setCheckedValue:C=Ce,setTouched:w=Ce,registerInputRef:T=Ce}=h??{},{setTouched:E,setFilled:D,state:k,disabled:A}=pe(),re=it(),{labelId:ie,getDescriptionProps:M}=Ie(),N=A||re.disabled||g||i,P=_||a,F=v||o,se=y,I=h?b===c:c===``,L=xt.useRef(null),R=xt.useRef(null),ce=x?.registerInput,le=xt.useCallback(e=>ce?.(e,{controlRef:L,value:void 0}),[ce]),ue=oe(l,R,T,le);ne(()=>{R.current?.checked&&D(!0)},[D]),ne(()=>{if(R.current){if(N&&I){T(null);return}T(R.current)}},[I,N,T]);let de=Pe(),fe=te({id:d}),me=u?void 0:fe,ge={role:`radio`,"aria-checked":I,"aria-labelledby":ct(s,ie,R,!u,me),[Ze]:I?``:void 0,id:u?fe:de,onKeyDown(e){e.key===`Enter`&&e.preventDefault()},onClick(e){if(e.defaultPrevented||N||P)return;e.preventDefault();let t=R.current;t&&we(t,e)},onFocus(e){e.defaultPrevented||N||P||!ee||(R.current?.click(),w(!1))}},{getButtonProps:_e,buttonRef:xe}=be({disabled:N,native:u,composite:!1}),z={type:`radio`,ref:ue,form:se,id:me,name:S,tabIndex:-1,style:S?he:ae,"aria-hidden":!0,...c===void 0?ve:{value:p(c)},disabled:N,checked:I,required:F,readOnly:P,onChange(e){if(e.nativeEvent.defaultPrevented||N||P||c===void 0)return;let t=ye(j,e.nativeEvent);C(c,t),!t.isCanceled&&E(!0)},onClick(e){e.stopPropagation()},onFocus(){L.current?.focus()}},Se=xt.useMemo(()=>({...k,required:F,disabled:N,readOnly:P,checked:I}),[k,N,P,I,F]),Te=Se,Ee=h!==void 0,B=[t,L,xe],De=[ge,m,_e,M,x?e=>x.getValidationProps(N,e):ve],Oe=O(`span`,e,{enabled:!Ee,state:Se,ref:B,props:De,stateAttributesMapping:Ye});return(0,St.jsxs)(yt.Provider,{value:Te,children:[Ee?(0,St.jsx)(nt,{tag:`span`,render:n,className:r,style:f,state:Se,refs:B,props:De,stateAttributesMapping:Ye}):Oe,(0,St.jsx)(`input`,{...z,suppressHydrationWarning:!0})]})})})))()}var Tt,Et;function Dt(){return(Dt=t((()=>{Tt=e(n(),1),m(),bt(),Xe(),h(),w(),Et=Tt.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,s=_t(),c=s.checked,{mounted:l,transitionStatus:u,setMounted:d}=Re(c),f={...s,transitionStatus:u},p=Tt.useRef(null),m=a||l,h=O(`span`,e,{ref:[t,p],state:f,props:o,stateAttributesMapping:Ye});return _({batch:!0,enabled:!c,open:c,ref:p,onComplete(){c||d(!1)}}),m?h:null})})))()}function Ot(e){return Be(e)&&e.tagName===`INPUT`}function kt(e){return!!(Ot(e)&&e.selectionStart!=null||Be(e)&&e.tagName===`TEXTAREA`)}function At(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=jt(e,t,`left`),a=Mt(e),o=Mt(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=jt(e,t,`top`),r=Mt(e),i=Mt(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function jt(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function Mt(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}var Nt,Pt,Ft,It,Lt,Rt,zt,Bt;function Vt(){return(Vt=t((()=>{ze(),C(),Nt=`ArrowUp`,Pt=`ArrowDown`,Ft=`ArrowLeft`,It=`ArrowRight`,Lt=`Home`,Rt=new Set([Nt,Pt,Ft,It,Lt,`End`]),zt=`Shift`,Bt=[zt,`Control`,`Alt`,`Meta`]})))()}function Ht(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}function Ut(e){let{loopFocus:t=!0,orientation:n=`both`,grid:r,onLoop:i,direction:a,highlightedIndex:o,onHighlightedIndexChange:s,rootRef:c,enableHomeAndEndKeys:l=!1,stopEventPropagation:u,disabledIndices:d,modifierKeys:f=B}=e,[p,m]=Kt.useState(0),h=r!=null,_=Kt.useRef(null),v=oe(_,c),y=Kt.useRef([]),b=Kt.useRef(!1),x=Kt.useRef(null),S=o??p,C=z((e,t=!1)=>{if(x.current=y.current[e]??null,(s??m)(e),t){let t=y.current[e];At(_.current,t,a,n)}}),w=z(e=>{if(e.size===0)return;if(b.current){let e=y.current,t=e.indexOf(x.current);if(t===-1){let t=e[S];!t||De(e,S,d)?C(Wt(e,d)):x.current=t}else t!==S&&C(t);return}b.current=!0;let t=Array.from(e.keys()),r=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,i=r?e.get(r)?.index??-1:-1;if(i!==-1)C(i);else if(De(t,S,d)){let e=g(t,{disabledIndices:d});F(t,e)||C(e)}At(_.current,r,a,n)});ne(()=>{if(d==null||o!=null||!b.current)return;let e=y.current;if(De(e,S,d)){let t=g(e,{disabledIndices:d});F(e,t)||C(t)}},[d,o,S,y,C]);let T=z((e,t,n)=>i?i(e,t,n,y):n),E=z(e=>{let o=e.key===`Home`||e.key===`End`;if(!Rt.has(e.key)||!l&&o||Gt(e,f)||!_.current)return;let s=a===`rtl`,c=s?Ft:It,p=s?It:Ft,m=n===`vertical`?Pt:c,v=n===`vertical`?Nt:p,b=ee(e.nativeEvent);if(b!=null&&kt(b)&&!Ht(b)){let t=b.selectionStart,n=b.selectionEnd,r=b.value;if(t==null||e.shiftKey||t!==n||e.key!==v&&t<r.length||e.key!==m&&t>0)return}let x=S,w=A(y,d),E=k(y,d);r!=null&&(x=r({disabledIndices:d,elementsRef:y,event:e,highlightedIndex:S,loopFocus:t,maxIndex:E,minIndex:w,onLoop:T,orientation:n,rtl:s}));let D=n!==`vertical`&&e.key===c||n!==`horizontal`&&e.key===`ArrowDown`,O=n!==`vertical`&&e.key===p||n!==`horizontal`&&e.key===`ArrowUp`;l&&(e.key===`Home`?x=w:e.key===`End`&&(x=E)),x===S&&(D||O)&&(t&&x===E&&D?(x=w,i&&(x=i(e,S,x,y))):t&&x===w&&O?(x=E,i&&(x=i(e,S,x,y))):x=g(y.current,{startingIndex:x,decrement:O,disabledIndices:d})),x!==S&&!F(y.current,x)&&(u&&e.stopPropagation(),(h||o||D||O)&&e.preventDefault(),C(x,!0),queueMicrotask(()=>{y.current[x]?.focus()}))});return{props:{ref:v,onFocus(e){let t=_.current,n=ee(e.nativeEvent);t&&n!=null&&kt(n)&&n.setSelectionRange(0,n.value.length)},onKeyDown:E},highlightedIndex:S,onHighlightedIndexChange:C,elementsRef:y,onMapChange:w,relayKeyboardEvent:E}}function Wt(e,t){let n=-1;for(let r=0;r<e.length;r+=1){let i=e[r];if(i&&!De(e,r,t)){if(i.hasAttribute(`data-composite-item-active`))return r;n===-1&&(n=r)}}return Math.max(n,0)}function Gt(e,t){for(let n of Bt)if(!t.includes(n)&&e.getModifierState(n))return!0;return!1}var Kt;function qt(){return(qt=t((()=>{Kt=e(n(),1),I(),ke(),R(),ue(),Vt(),Qe(),S()})))()}function Jt(e){let{render:t,className:n,style:r,refs:i=B,props:a=B,state:o=ve,stateAttributesMapping:s,highlightedIndex:c,onHighlightedIndexChange:l,orientation:u,grid:d,loopFocus:f,onLoop:p,enableHomeAndEndKeys:m,onMapChange:h,stopEventPropagation:g=!0,rootRef:_,disabledIndices:v,modifierKeys:y,highlightItemOnHover:b=!1,tag:ee=`div`,...x}=e,{props:S,highlightedIndex:C,onHighlightedIndexChange:w,elementsRef:T,onMapChange:E,relayKeyboardEvent:D}=Ut({grid:d,loopFocus:f,onLoop:p,orientation:u,highlightedIndex:c,onHighlightedIndexChange:l,rootRef:_,stopEventPropagation:g,enableHomeAndEndKeys:m,direction:xe(),disabledIndices:v,modifierKeys:y}),k=O(ee,e,{state:o,ref:i,props:[S,...a,x],stateAttributesMapping:s}),A=Yt.useMemo(()=>({highlightedIndex:C,onHighlightedIndexChange:w,highlightItemOnHover:b,relayKeyboardEvent:D}),[C,w,b,D]);return(0,Xt.jsx)(me.Provider,{value:A,children:(0,Xt.jsx)(Se,{elementsRef:T,onMapChange:e=>{h?.(e),E(e)},children:k})})}var Yt,Xt;function Zt(){return(Zt=t((()=>{Yt=e(n(),1),ue(),le(),qt(),Oe(),m(),se(),Xt=r()})))()}function Qt(e,t){return e.matches(`:disabled`)?!1:!t||e.form===t||e.form===null&&!e.hasAttribute(`form`)}function $t(){return($t=t((()=>{n(),b(),Object.keys(fe)})))()}function en(e=!1){let t=tn.useContext(nn);if(!t&&!e)throw Error(M(86));return t}var tn,nn;function rn(){return(rn=t((()=>{Fe(),tn=e(n(),1),nn=tn.createContext(void 0)})))()}var H,an,on,sn;function cn(){return(cn=t((()=>{H=e(n(),1),Me(),I(),ie(),S(),Vt(),Zt(),x(),Ne(),b(),$t(),rn(),T(),je(),ge(),gt(),an=r(),on=[zt],sn=H.forwardRef(function(e,t){let{render:n,className:r,disabled:i,readOnly:a,required:o,onValueChange:s,value:c,defaultValue:l,form:u,name:f,inputRef:p,id:m,style:h,...g}=e,{setTouched:_,setFocused:b,validationMode:ee,name:x,disabled:S,state:C,validation:w,setDirty:T,setFilled:E,validityData:O}=pe(),{labelId:k}=Ie(),{clearErrors:A,elementRef:te}=d(),ne=en(!0),j=S||i,re=x??f,ie=Pe(m),[M,N]=Le({controlled:c,default:l,name:`RadioGroup`,state:`value`}),[ae,P]=H.useState(!1),oe=z((e,t)=>{s?.(e,t),!t.isCanceled&&N(e)}),F=w.getInputControl,se=H.useMemo(()=>({get current(){return F()}}),[F]),I=H.useRef(null),L=H.useRef(null);function R(e){let t;return p&&(typeof p==`function`?t=p(e):p.current=e),I.current=e,t}let le=z(e=>{if(!e||e.disabled)return;L.current||=e;let t=I.current,n=e.checked||t==null||t.disabled?R(e):void 0;return()=>{L.current===e&&(L.current=null),I.current===e?n?(n(),I.current=null):R(null):n?.()}}),ue=z(()=>{let e=te.current;if(!e)return M??null;for(let t of w.registeredInputs.keys())if(t.checked&&Qt(t,e))return M??null;return null});D(se,ie,M??null,ue,!j,f),ce(M,()=>{A(re),T(M!==O.initialValue),E(M!=null),w.change(M);let e=L.current;M==null&&e&&!e.disabled&&R(e)});let de=k??ne?.legendId,fe={...C,disabled:j??!1,required:o??!1,readOnly:a??!1},me=H.useMemo(()=>({checkedValue:M,disabled:j,form:u,validation:w,name:re,readOnly:a,registerInputRef:le,required:o,setCheckedValue:oe,setTouched:P,touched:ae}),[M,j,u,w,re,a,le,o,oe,P,ae]),he={id:m,role:`radiogroup`,"aria-required":o||void 0,"aria-disabled":j||void 0,"aria-readonly":a||void 0,"aria-labelledby":de,onFocus(){b(!0)},onBlur(e){y(e.currentTarget,e.relatedTarget)||(_(!0),b(!1),ee===`onBlur`&&w.commit(M))},onKeyDownCapture(e){e.key.startsWith(`Arrow`)&&(P(!0),b(!0))}};return(0,an.jsx)(ht.Provider,{value:me,children:(0,an.jsx)(Jt,{render:n,className:r,style:h,state:fe,props:[he,g,e=>w.getValidationProps(j??!1,e)],refs:[t],stateAttributesMapping:v,enableHomeAndEndKeys:!1,modifierKeys:on})})})})))()}var U,W,ln,un,dn,fn,pn,mn,hn;function gn(){return(gn=t((()=>{U=n(),wt(),Dt(),cn(),a(),o(),l(),He(),W=r(),ln=i({slots:{root:[`flex [:is([data-slot=field-content],[data-slot=field-description])+&]:mt-2`,`[&:has(+[data-slot=field-error])]:mb-2`],item:`group/radio-group-item flex`,label:[`flex cursor-pointer items-start gap-3 text-sm text-text-default-base-primary select-none`,`group-data-disabled/radio-group-item:cursor-not-allowed`,`in-data-readonly:cursor-default`],control:`flex size-6 shrink-0 items-center justify-center`,radio:[`relative box-border inline-flex size-4 shrink-0 items-center justify-center rounded-full`,`border-[1.5px] border-solid border-border-checkbox-default bg-bg-input-normal`,`cursor-pointer transition-colors duration-150`,`not-data-disabled:data-unchecked:shadow-xs`,`not-data-disabled:not-in-aria-invalid:data-unchecked:hover:border-border-input-hover`,`data-checked:border-bg-checkbox-selected`,`outline-solid outline-2 outline-offset-2 outline-transparent`,`focus-visible:outline-focus-ring-button-primary`,`in-aria-invalid:border-border-input-destructive`,`in-aria-invalid:focus-visible:outline-focus-ring-button-destructive`,`in-aria-invalid:data-checked:border-bg-default-danger-primary`,`data-disabled:cursor-not-allowed data-disabled:border-border-checkbox-disabled data-disabled:bg-bg-input-disable`,`in-aria-invalid:data-disabled:border-bg-checkbox-invalid-disabled`,`in-data-readonly:cursor-default`],indicator:[`size-2 rounded-full bg-bg-checkbox-selected`,`in-aria-invalid:bg-bg-default-danger-primary`,`data-disabled:bg-bg-checkbox-disabled`,`in-aria-invalid:data-disabled:bg-bg-checkbox-invalid-disabled`],text:`flex min-h-6 items-center group-data-disabled/radio-group-item:opacity-50`},variants:{orientation:{vertical:{root:`flex-col gap-2`},horizontal:{root:`flex-row flex-wrap gap-x-6 gap-y-2`}}},defaultVariants:{orientation:`vertical`}}),un=(0,U.createContext)(null),dn=e=>Array.from(e?.querySelectorAll(`[data-slot=radio-group-radio]`)??[]),fn=e=>Array.from(e?.querySelectorAll(`input[type=radio]`)??[]),pn=e=>dn(e).find(e=>e.tabIndex===0),mn=({value:e,defaultValue:t,onValueChange:n,disabled:r,readOnly:i,required:a,orientation:o=`vertical`,name:l,"aria-invalid":d,"aria-labelledby":f,"aria-describedby":p,ref:m,onFocus:h,className:g,children:_,...v})=>{let y=Ve(),b=ln({orientation:o}),ee=f??(v[`aria-label`]===void 0?y?.labelId:void 0),x=r??(y?.disabled||void 0),S=i??(y?.readOnly||void 0),C=a??(y?.required||void 0),w=d??(y?.invalid||void 0),T=u({"aria-describedby":y?.describedBy},{"aria-describedby":p})[`aria-describedby`],[E]=(0,U.useState)(t),[D,O]=(0,U.useState)(t),k=e!==void 0,A=k?e:D,te=(0,U.useRef)(null),ne=(0,U.useMemo)(()=>c(te,m),[m]),j=(0,U.useRef)({isControlled:k,selected:A,initialValue:E});return j.current={isControlled:k,selected:A,initialValue:E},(0,U.useLayoutEffect)(()=>{let e=dn(te.current),t=e.filter(e=>!e.disabled),n=t.find(e=>e.getAttribute(`aria-checked`)===`true`)??t[0];if(n)for(let t of e)t.tabIndex=t===n?0:-1}),(0,U.useEffect)(()=>{let e=te.current?.closest(`form`);if(!e)return;let t=()=>queueMicrotask(()=>{let{isControlled:e,selected:t,initialValue:n}=j.current,r=e?t:n;e||O(n);for(let e of fn(te.current))e.checked=e.value===r});return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[]),(0,W.jsx)(un,{value:{styles:b,disabled:x},children:(0,W.jsx)(sn,{...v,ref:ne,tabIndex:-1,onFocus:e=>{h?.(e),e.target===e.currentTarget&&pn(te.current)?.focus()},value:A??null,onValueChange:e=>{e!==null&&(k||O(e),n?.(e))},disabled:x,readOnly:S,required:C&&l!==void 0,"aria-required":C||void 0,name:l,"data-slot":`radio-group`,"data-orientation":o,"aria-orientation":o,"aria-invalid":w,"aria-labelledby":ee,"aria-describedby":T,className:s(b.root(),g),children:_})})},mn.displayName=`RadioGroup.Root`,hn=({id:e,value:t,disabled:n,className:r,children:i,...a})=>{let o=(0,U.use)(un),c=(0,U.useId)();if(!o)throw Error(`RadioGroup.Item must be rendered inside RadioGroup.Root.`);let{styles:l}=o,u=e??c,d=o.disabled||n;return(0,W.jsx)(`div`,{...a,"data-slot":`radio-group-item`,"data-disabled":d||void 0,className:s(l.item(),r),children:(0,W.jsxs)(`label`,{htmlFor:u,"data-slot":`radio-group-item-label`,className:l.label(),children:[(0,W.jsx)(`span`,{"data-slot":`radio-group-item-control`,className:l.control(),children:(0,W.jsx)(Ct,{nativeButton:!0,render:(0,W.jsx)(`button`,{type:`button`}),id:u,value:t,disabled:d,"data-slot":`radio-group-radio`,className:l.radio(),children:(0,W.jsx)(Et,{"data-slot":`radio-group-indicator`,className:l.indicator()})})}),(0,W.jsx)(`span`,{"data-slot":`radio-group-item-text`,className:l.text(),children:i})]})})},hn.displayName=`RadioGroup.Item`;try{ln.displayName=`radioGroupRecipe`,ln.__docgenInfo={description:"Style recipe for RadioGroup. Slots: `root`, `item`, `label` (the clickable row), `control` (24px\nslot for the radio), `radio` (the 16px circle), `indicator` (the dot), `text`.",displayName:`radioGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{orientation:{defaultValue:{value:`vertical`},description:``,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{mn.displayName=`RadioGroup.Root`,mn.__docgenInfo={description:'Single-select list of radios that holds the selected value as a `string`.\nRenders `role="radiogroup"`: name it with `aria-labelledby` or\n`aria-label`, or put it inside a `Field.Root`, which names, describes,\ninvalidates, disables, requires and makes it read-only (the group\'s own\nprops win). Tab enters the group on the selected item, and the arrow keys\nmove the selection.\n\nUse it when the options are few and should all stay visible. For a long\nlist use [Combobox](?path=/docs/components-combobox--docs), for several\nvalues use [CheckboxGroup](?path=/docs/components-checkboxgroup--docs), and\nfor an on/off setting use [Switch](?path=/docs/components-switch--docs).\n\nEvery native `<div>` attribute is forwarded to the group, `aria-invalid`\nincluded: `role="radiogroup"` supports it, and each radio paints the\ndestructive state from it. The `ref` reaches the group element, and calling\n`focus()` on it moves focus to the radio Tab would land on, so a form\nlibrary can focus the field on a failed submit. With react-hook-form, wire\nit through `Controller` (`value`, `onValueChange`, `ref`), not `register`:\nthe radios\' inputs belong to the group, not to the form library.\n\nA native form reset puts an uncontrolled group back on `defaultValue` and a\ncontrolled one on its `value`.',displayName:`RadioGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Controlled value of the selected item. `''` leaves every item unselected.",name:`value`,required:!1,tags:{},type:{name:`string`}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Initial value for an uncontrolled group. Leave it out to start with nothing selected.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Fires with the value of the item the user selects.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Disables every item in the group.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Keeps the items focusable but stops the selection from changing.`,name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Marks the group required (`aria-required`). With `name`, the browser also\nblocks a form submission until an item is selected; without it the radios\nare not one native group, so validation is left to the form.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"`vertical` (default) stacks the items; `horizontal` lays them in a row that wraps.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Form field name; the form submits `name=value` for the selected item.",name:`name`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Single-select radio list holding its selected value as a string`,example:`<span id="payment">Payment plan</span>
<RadioGroup.Root aria-labelledby="payment" defaultValue="monthly" onValueChange={setPlan}>
  <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
  <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
</RadioGroup.Root>`,dataAttribute:`{string} data-orientation - "vertical" | "horizontal"
{string} data-disabled - Present when the whole group is disabled
{string} data-readonly - Present when the group is read-only`}}}catch{}try{hn.displayName=`RadioGroup.Item`,hn.__docgenInfo={description:"One option of a [RadioGroup](?path=/docs/components-radiogroup--docs): a\nradio and its `<label>`, inside `RadioGroup.Root`. Native `<div>`\nattributes go to the row, except `id`, which goes to the radio.",displayName:`RadioGroup.Item`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Value the group takes when this item is selected.`,name:`value`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Disables this item only. The group's `disabled` wins over `false`.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Radio and label for one value of the group`,dataAttribute:`{string} data-disabled - Present when the item or its group is disabled`}}}catch{}})))()}var G;function _n(){return(_n=t((()=>{gn(),G={Root:mn,Item:hn}})))()}var K,q,J,vn,Y,X,yn,Z,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Q,$,Ln,Rn;function zn(){return(zn=t((()=>{K=n(),We(),_n(),He(),q=r(),{expect:J,fn:vn,userEvent:Y,within:X}=__STORYBOOK_MODULE_TEST__,yn={title:`Components/RadioGroup`,component:G.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},"aria-invalid":{control:`boolean`},onValueChange:{action:`valueChange`}},args:{"aria-label":`Payment plan`,defaultValue:`monthly`},render:e=>(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),parameters:{docs:{description:{component:"`Root` owns the selected value; each `Item` is a radio with its label."}}}},Z=[{value:`monthly`,label:`Monthly`},{value:`quarterly`,label:`Quarterly`},{value:`annual`,label:`Annual`}],bn={args:{onValueChange:vn()},play:async({args:e,canvasElement:t})=>{let n=X(t);await J(n.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument(),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(22, 24, 29)`}),await Y.click(n.getByRole(`radio`,{name:`Quarterly`})),await J(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await Y.click(n.getByText(`Annual`)),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`annual`);let r=n.getByRole(`radio`,{name:`Monthly`});await Y.click(r.closest(`[data-slot=radio-group-item-control]`)),await J(r).toBeChecked()}},xn={args:{onValueChange:vn()},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(`button`,{type:`button`,className:`w-fit text-sm underline`,children:`Continue`})]}),play:async({args:e,canvasElement:t})=>{let n=X(t);await Y.tab(),await J(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await Y.keyboard(`{ArrowDown}`),await J(n.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await J(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await Y.keyboard(`{ArrowUp}{ArrowUp}`),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.tab(),await J(n.getByRole(`button`,{name:`Continue`})).toHaveFocus()}},Sn={args:{defaultValue:void 0,onValueChange:vn()},play:async({args:e,canvasElement:t})=>{let n=X(t);for(let e of n.getAllByRole(`radio`))await J(e).not.toBeChecked();await Y.tab(),await J(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await J(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},Cn={args:{"aria-label":void 0,"aria-labelledby":`plan-heading`},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(`span`,{id:`plan-heading`,className:`text-sm font-semibold text-text-input-normal`,children:`Payment plan`}),(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument()}},wn={render:()=>{let[e,t]=(0,K.useState)(`monthly`);return(0,q.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(`button`,{type:`button`,className:`w-fit text-sm underline`,onClick:()=>t(``),children:`Clear`}),(0,q.jsx)(`button`,{type:`button`,className:`w-fit text-sm underline`,onClick:()=>t(`annual`),children:`Choose annual`})]}),(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(`output`,{className:`text-sm`,children:e||`None`})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Choose annual`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.tab(),await J(t.getByRole(`radio`,{name:`Annual`})).toHaveFocus(),await Y.click(t.getByRole(`radio`,{name:`Quarterly`})),await J(t.getByRole(`status`)).toHaveTextContent(`quarterly`),await Y.click(t.getByRole(`button`,{name:`Clear`}));for(let e of t.getAllByRole(`radio`))await J(e).not.toBeChecked();await J(t.getByRole(`status`)).toHaveTextContent(`None`)}},Tn={args:{disabled:!0,onValueChange:vn()},play:async({args:e,canvasElement:t})=>{let n=X(t);for(let e of n.getAllByRole(`radio`))await J(e).toBeDisabled();await J(n.getByText(`Monthly`)).toHaveStyle({opacity:`0.5`}),await Y.click(n.getByText(`Annual`)),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},En={args:{onValueChange:vn()},render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly`}),(0,q.jsx)(G.Item,{value:`quarterly`,disabled:!0,children:`Quarterly (not offered by this carrier)`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({args:e,canvasElement:t})=>{let n=X(t);await J(n.getByRole(`radio`,{name:/Quarterly/})).toBeDisabled(),await Y.click(n.getByRole(`radio`,{name:`Monthly`})),await Y.keyboard(`{ArrowDown}`),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`annual`)}},Dn={render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,disabled:!0,children:`Monthly (no longer offered)`}),(0,q.jsx)(G.Item,{value:`quarterly`,children:`Quarterly`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radio`,{name:/Monthly/})).toBeChecked(),await Y.tab(),await J(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus()}},On={args:{readOnly:!0,onValueChange:vn()},play:async({args:e,canvasElement:t})=>{let n=X(t),r=n.getByRole(`radio`,{name:`Annual`});await J(n.getByRole(`radiogroup`)).toHaveAttribute(`aria-readonly`,`true`),await Y.click(r),await Y.click(n.getByText(`Quarterly`)),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(r).not.toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},kn={args:{"aria-invalid":!0,"aria-describedby":`plan-error`,defaultValue:void 0},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(`p`,{id:`plan-error`,className:`text-sm text-text-input-destructive`,children:`Choose a payment plan.`})]}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radiogroup`,{name:`Payment plan`});await J(n).toHaveAttribute(`aria-invalid`,`true`),await J(n).toHaveAccessibleDescription(`Choose a payment plan.`),await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveStyle({borderColor:`rgb(217, 38, 38)`})}},An={render:()=>{let[e,t]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,required:!0,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(`button`,{type:`submit`,className:`w-fit text-sm underline`,children:`Submit`}),e&&(0,q.jsx)(`output`,{className:`text-sm`,children:e})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(t.queryByRole(`status`)).not.toBeInTheDocument(),await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},jn={render:()=>{let[e,t]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,defaultValue:`monthly`,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(`button`,{type:`reset`,className:`w-fit text-sm underline`,children:`Reset`}),(0,q.jsx)(`button`,{type:`submit`,className:`w-fit text-sm underline`,children:`Submit`})]}),e&&(0,q.jsx)(`output`,{className:`text-sm`,children:e})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Reset`})),await J(t.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(t.getByRole(`radio`,{name:`Annual`})).not.toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`monthly`)}},Mn={render:()=>{let[e,t]=(0,K.useState)(`quarterly`),[n,r]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),r(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,value:e,onValueChange:t,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(`button`,{type:`reset`,className:`w-fit text-sm underline`,children:`Reset`}),(0,q.jsx)(`button`,{type:`submit`,className:`w-fit text-sm underline`,children:`Submit`})]}),n&&(0,q.jsx)(`output`,{className:`text-sm`,children:n})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Reset`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},Nn={render:()=>{let[e,t]=(0,K.useState)(!1);return(0,q.jsxs)(`form`,{className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),t(!0)},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,required:!0,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(`button`,{type:`submit`,className:`w-fit text-sm underline`,children:`Submit`}),e&&(0,q.jsx)(`output`,{className:`text-sm`,children:`Sent`})]})},play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-required`,`true`),await Y.click(t.getByRole(`radio`,{name:`Annual`})),await J(e.querySelector(`form`).checkValidity()).toBe(!0),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`Sent`)}},Pn={render:()=>{let{control:e,handleSubmit:t}=Ue({defaultValues:{plan:``}}),[n,r]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col gap-3`,onSubmit:t(e=>r(e.plan)),children:[(0,q.jsx)(Ge,{name:`plan`,control:e,rules:{required:`Choose a payment plan`},render:({field:e,fieldState:t})=>(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,ref:e.ref,value:e.value,onValueChange:e.onChange,onBlur:e.onBlur,"aria-invalid":t.invalid,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})}),(0,q.jsx)(`button`,{type:`submit`,className:`w-fit text-sm underline`,children:`Submit`}),n&&(0,q.jsx)(`output`,{className:`text-sm`,children:n})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await J(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-invalid`,`true`),await Y.keyboard(`{ArrowDown}`),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`quarterly`)}},Fn={render:e=>(0,q.jsx)(`div`,{className:`w-60`,children:(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly, charged on the policy's effective day of every month`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]})}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radio`,{name:/Monthly/}),r=t.getByText(/Monthly/),i=n.parentElement.getBoundingClientRect(),a=n.getBoundingClientRect();await J(r.getBoundingClientRect().height).toBeGreaterThan(24),await J(i.top).toBe(r.getBoundingClientRect().top),await J(i.height).toBe(24),await J(a.top-i.top).toBe(4),await J(a.width).toBe(16)}},In={args:{orientation:`horizontal`},play:async({canvasElement:e})=>{let t=X(e),[n,r]=t.getAllByRole(`radio`).map(e=>e.closest(`[data-slot=radio-group-item]`).getBoundingClientRect());await J(t.getByRole(`radiogroup`)).toHaveAttribute(`data-orientation`,`horizontal`),await J(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-orientation`,`horizontal`),await J(r.top).toBe(n.top),await J(r.left-n.right).toBe(24)}},Q={render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{id:`plan-monthly`,value:`monthly`,children:`Monthly`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveAttribute(`id`,`plan-monthly`),await J(t.getByRole(`radio`,{name:`Annual`}).id).not.toBe(``)}},$={args:{"aria-label":void 0,defaultValue:void 0},render:e=>(0,q.jsxs)(V.Root,{invalid:!0,required:!0,children:[(0,q.jsxs)(V.Content,{children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(V.Description,{children:`How often the insured pays the premium.`})]}),(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(V.Error,{errors:[{message:`Choose a payment plan`}]})]}),play:async({canvasElement:e})=>{let t=X(e).getByRole(`radiogroup`,{name:/Payment plan/});await J(t).toHaveAccessibleDescription(/premium.*Choose a payment plan|Choose a payment plan.*premium/),await J(t).toHaveAttribute(`aria-invalid`,`true`),await J(t).toHaveAttribute(`aria-required`,`true`)}},Ln={args:{"aria-label":`Plan`,"aria-describedby":`plan-note`,disabled:!1},render:e=>(0,q.jsxs)(V.Root,{disabled:!0,children:[(0,q.jsxs)(V.Content,{children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(V.Description,{children:`How often the insured pays the premium.`})]}),(0,q.jsx)(`p`,{id:`plan-note`,children:`Changing it starts at the next renewal.`}),(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radiogroup`,{name:`Plan`});await J(n).not.toHaveAttribute(`aria-labelledby`),await J(n).toHaveAccessibleDescription(`How often the insured pays the premium. Changing it starts at the next renewal.`);for(let e of t.getAllByRole(`radio`))await J(e).toBeEnabled()}},bn.parameters={...bn.parameters,docs:{...bn.parameters?.docs,source:{originalSource:`{
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

    // The padding around the radio and the gap before the text select too: the label wraps them.
    const monthly = canvas.getByRole('radio', {
      name: 'Monthly'
    });
    await userEvent.click(monthly.closest('[data-slot=radio-group-item-control]')!);
    await expect(monthly).toBeChecked();
  }
}`,...bn.parameters?.docs?.source},description:{story:`@summary Uncontrolled group with one item selected`,...bn.parameters?.docs?.description}}},xn.parameters={...xn.parameters,docs:{...xn.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => <div className="flex flex-col gap-3">
            <RadioGroup.Root {...args}>
                {PLANS.map(({
        value,
        label
      }) => <RadioGroup.Item key={value} value={value}>
                        {label}
                    </RadioGroup.Item>)}
            </RadioGroup.Root>
            <button type="button" className="w-fit text-sm underline">
                Continue
            </button>
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
}`,...xn.parameters?.docs?.source},description:{story:`Tab enters the group on the selected item and leaves it on the next Tab;
the arrow keys move the selection, wrapping at the ends.

@summary Keyboard navigation and selection`,...xn.parameters?.docs?.description}}},Sn.parameters={...Sn.parameters,docs:{...Sn.parameters?.docs,source:{originalSource:`{
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
}`,...Sn.parameters?.docs?.source},description:{story:`With no \`defaultValue\` nothing is selected, and Tab lands on the first item
without selecting it.

@summary Group that starts with nothing selected`,...Sn.parameters?.docs?.description}}},Cn.parameters={...Cn.parameters,docs:{...Cn.parameters?.docs,source:{originalSource:`{
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
}`,...Cn.parameters?.docs?.source},description:{story:`@summary Group named by a visible heading`,...Cn.parameters?.docs?.description}}},wn.parameters={...wn.parameters,docs:{...wn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [plan, setPlan] = useState('monthly');
    return <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <button type="button" className="w-fit text-sm underline" onClick={() => setPlan('')}>
                        Clear
                    </button>
                    <button type="button" className="w-fit text-sm underline" onClick={() => setPlan('annual')}>
                        Choose annual
                    </button>
                </div>
                <RadioGroup.Root aria-label="Payment plan" value={plan} onValueChange={setPlan}>
                    {PLANS.map(({
          value,
          label
        }) => <RadioGroup.Item key={value} value={value}>
                            {label}
                        </RadioGroup.Item>)}
                </RadioGroup.Root>
                <output className="text-sm">{plan || 'None'}</output>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // A value set from outside moves the tab stop too: Tab enters on the new selection.
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
    await expect(canvas.getByRole('status')).toHaveTextContent('None');
  }
}`,...wn.parameters?.docs?.source},description:{story:`@summary Controlled group whose value is set from outside`,...wn.parameters?.docs?.description}}},Tn.parameters={...Tn.parameters,docs:{...Tn.parameters?.docs,source:{originalSource:`{
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
      opacity: '0.5'
    });
    await userEvent.click(canvas.getByText('Annual'));
    await expect(canvas.getByRole('radio', {
      name: 'Monthly'
    })).toBeChecked();
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...Tn.parameters?.docs?.source},description:{story:`@summary Whole group disabled`,...Tn.parameters?.docs?.description}}},En.parameters={...En.parameters,docs:{...En.parameters?.docs,source:{originalSource:`{
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
}`,...En.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest interactive, and the arrow keys skip
it.

@summary One item disabled`,...En.parameters?.docs?.description}}},Dn.parameters={...Dn.parameters,docs:{...Dn.parameters?.docs,source:{originalSource:`{
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
}`,...Dn.parameters?.docs?.source},description:{story:`When the selected item is disabled, Tab enters the group on the first
enabled item instead, so the group stays reachable by keyboard.

@summary Selected item disabled`,...Dn.parameters?.docs?.description}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`{
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
}`,...On.parameters?.docs?.source},description:{story:`The items stay focusable but the selection does not change, by pointer or
by keyboard.

@summary Read-only group`,...On.parameters?.docs?.description}}},kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`{
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
}`,...kn.parameters?.docs?.source},description:{story:'`aria-invalid` sits on the group, which `role="radiogroup"` supports, and\nevery radio paints the destructive border from it.\n\n@summary Failed validation on the group',...kn.parameters?.docs?.description}}},An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex flex-col gap-3" onSubmit={event => {
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
                <button type="submit" className="w-fit text-sm underline">
                    Submit
                </button>
                {submitted && <output className="text-sm">{submitted}</output>}
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
}`,...An.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value` for the selected item, and\n`required` blocks the submission while nothing is selected.\n\n@summary Native form submission",...An.parameters?.docs?.description}}},jn.parameters={...jn.parameters,docs:{...jn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex flex-col gap-3" onSubmit={event => {
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
                    <button type="reset" className="w-fit text-sm underline">
                        Reset
                    </button>
                    <button type="submit" className="w-fit text-sm underline">
                        Submit
                    </button>
                </div>
                {submitted && <output className="text-sm">{submitted}</output>}
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
}`,...jn.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled group back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...jn.parameters?.docs?.description}}},Mn.parameters={...Mn.parameters,docs:{...Mn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [plan, setPlan] = useState('quarterly');
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex flex-col gap-3" onSubmit={event => {
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
                    <button type="reset" className="w-fit text-sm underline">
                        Reset
                    </button>
                    <button type="submit" className="w-fit text-sm underline">
                        Submit
                    </button>
                </div>
                {submitted && <output className="text-sm">{submitted}</output>}
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
}`,...Mn.parameters?.docs?.source},description:{story:`A native form reset leaves a controlled group on its \`value\`, and the form
submits that value too.

@summary Native form reset on a controlled group`,...Mn.parameters?.docs?.description}}},Nn.parameters={...Nn.parameters,docs:{...Nn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState(false);
    return <form className="flex flex-col gap-3" onSubmit={event => {
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
                <button type="submit" className="w-fit text-sm underline">
                    Submit
                </button>
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
}`,...Nn.parameters?.docs?.source},description:{story:"Without `name` the radios are not one native group, so `required` only\nmarks the group (`aria-required`) and leaves validation to the form: a\nselection never leaves the form invalid.\n\n@summary Required without a name",...Nn.parameters?.docs?.description}}},Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`{
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
    return <form className="flex flex-col gap-3" onSubmit={handleSubmit(data => setSubmitted(data.plan))}>
                <Controller name="plan" control={control} rules={{
        required: 'Choose a payment plan'
      }} render={({
        field,
        fieldState
      }) => <RadioGroup.Root aria-label="Payment plan" ref={field.ref} value={field.value} onValueChange={field.onChange} onBlur={field.onBlur} aria-invalid={fieldState.invalid}>
                            {PLANS.map(({
          value,
          label
        }) => <RadioGroup.Item key={value} value={value}>
                                    {label}
                                </RadioGroup.Item>)}
                        </RadioGroup.Root>} />
                <button type="submit" className="w-fit text-sm underline">
                    Submit
                </button>
                {submitted && <output className="text-sm">{submitted}</output>}
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
    await expect(canvas.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('quarterly');
  }
}`,...Pn.parameters?.docs?.source},description:{story:`With react-hook-form, wire the group through \`Controller\`. Its \`ref\` lets
the form focus the group on a failed submit: focus lands on the radio Tab
would reach.

@summary React Hook Form through Controller`,...Pn.parameters?.docs?.description}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
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
}`,...Fn.parameters?.docs?.source},description:{story:`A long label wraps under itself and the radio stays level with its first
line.

@summary Wrapping label keeps the radio on the first line`,...Fn.parameters?.docs?.description}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`{
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
}`,...In.parameters?.docs?.source},description:{story:`Items laid in a row, 24px apart, wrapping when the row runs out of room.

@summary Items in a row`,...In.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`@summary Item id reaches the radio`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, label, messages, `invalid`, `required` and\n`disabled` reach the group with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...$.parameters?.docs?.description}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`{
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
}`,...Ln.parameters?.docs?.source},description:{story:"`aria-label` and `disabled={false}` on the group win over the field. Its own\n`aria-describedby` joins the field's messages instead of replacing them.\n\n@summary Own props override the Field wiring",...Ln.parameters?.docs?.description}}},Rn=[`Default`,`Keyboard`,`NoSelection`,`LabelledByHeading`,`Controlled`,`Disabled`,`DisabledItem`,`DisabledSelectedItem`,`ReadOnly`,`Invalid`,`InForm`,`FormReset`,`FormResetControlled`,`RequiredWithoutName`,`WithReactHookForm`,`LongLabel`,`Horizontal`,`ItemId`,`InsideField`,`InsideFieldOverridden`]})))()}zn();export{wn as Controlled,bn as Default,Tn as Disabled,En as DisabledItem,Dn as DisabledSelectedItem,jn as FormReset,Mn as FormResetControlled,In as Horizontal,An as InForm,$ as InsideField,Ln as InsideFieldOverridden,kn as Invalid,Q as ItemId,xn as Keyboard,Cn as LabelledByHeading,Fn as LongLabel,Sn as NoSelection,On as ReadOnly,Nn as RequiredWithoutName,Pn as WithReactHookForm,Rn as __namedExportsOrder,yn as default};