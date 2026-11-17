import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-BbVfpz-L.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./dist-l5PogUeD.js";import{n as o,t as s}from"./utils-CXR-8I1M.js";import{i as c,n as l,r as u}from"./merge-props-Bh-lyj0u.js";import{n as d,t as f}from"./button-GDXi8VW_.js";import{C as p,Ct as m,F as ee,Ft as h,H as g,I as _,J as v,L as y,M as b,Mt as x,N as S,Nt as C,O as w,Pt as T,Q as E,R as D,S as O,St as k,T as te,U as ne,X as re,Z as A,_ as ie,_n as ae,_t as j,a as M,b as N,bn as P,c as oe,cn as se,d as F,dn as I,et as L,f as R,fn as ce,g as le,gn as ue,h as de,i as fe,in as z,it as pe,j as me,k as he,l as ge,ln as _e,m as ve,n as ye,nn as be,nt as xe,o as Se,p as Ce,pn as B,r as we,rn as Te,s as Ee,sn as De,t as Oe,tn as ke,tt as Ae,u as je,un as Me,ut as Ne,v as Pe,vn as Fe,w as Ie,x as Le,xn as Re,y as ze,yn as Be,z as Ve}from"./useCompositeListItem-D937bZ80.js";import{D as He,k as Ue}from"./floating-ui.react-dom-Xev_85T8.js";import{a as We,n as Ge,t as V}from"./field-D_hvaRQ8.js";import{a as Ke,r as qe,t as Je}from"./index.esm-D5lmJ8kC.js";var Ye,Xe;function Ze(){return(Ze=t((()=>{Ye=`data-checked`,Xe=`data-unchecked`})))()}var Qe;function $e(){return($e=t((()=>{k(),S(),Ze(),Qe={checked(e){return e?{[Ye]:``}:{[Xe]:``}},...m,...b}})))()}var et;function tt(){return(tt=t((()=>{et=`data-composite-item-active`})))()}function nt(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=F(),{ref:i,index:a}=ye(e),o=n===a,s=rt.useRef(null),c=I(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}var rt;function it(){return(it=t((()=>{rt=e(n(),1),Me(),je(),Oe()})))()}function at(e){let{render:t,className:n,style:r,state:i=be,props:a=ke,refs:o=ke,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=nt({metadata:s});return ne(l,e,{state:i,ref:[f,...o],props:[d,...a,u],stateAttributesMapping:c})}function ot(){return(ot=t((()=>{z(),g(),it()})))()}function st(){return ct.useContext(lt)}var ct,lt;function ut(){return(ut=t((()=>{ct=e(n(),1),lt=ct.createContext({disabled:!1})})))()}function dt(e,t,n,r=!0,i){let[a,o]=mt.useState(),s=Le(i?`${i}-label`:void 0),c=e??t??a;return ae(()=>{let i=e||t||!r?void 0:ft(n.current,s);a!==i&&o(i)}),c}function ft(e,t){let n=pt(e);if(n)return!n.id&&t&&(n.id=t),n.id||void 0}function pt(e){if(!e)return;let t=e.parentElement;if(t&&t.tagName===`LABEL`)return t;let n=e.id;if(n){let t=e.nextElementSibling;if(t&&t.htmlFor===n)return t}let r=e.labels;return r&&r[0]}var mt;function ht(){return(ht=t((()=>{mt=e(n(),1),ue(),N()})))()}function gt(){return _t.useContext(vt)}var _t,vt;function yt(){return(yt=t((()=>{_t=e(n(),1),vt=_t.createContext(void 0)})))()}function bt(){let e=xt.useContext(St);if(e===void 0)throw Error(P(52));return e}var xt,St;function Ct(){return(Ct=t((()=>{Re(),xt=e(n(),1),St=xt.createContext(void 0)})))()}var wt,Tt,Et;function Dt(){return(Dt=t((()=>{wt=e(n(),1),Me(),ue(),De(),z(),pe(),Ne(),$e(),oe(),N(),g(),M(),tt(),ot(),w(),ut(),Pe(),ht(),le(),yt(),Ct(),Tt=r(),Et=wt.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,readOnly:a=!1,required:o=!1,"aria-labelledby":s,value:c,inputRef:l,nativeButton:u=!1,id:d,style:f,...p}=e,m=gt(),{disabled:h,readOnly:g,required:_,form:v,checkedValue:y,touched:b=!1,validation:x,name:S,setCheckedValue:C=Te,setTouched:w=Te,registerInputRef:T=Te}=m??{},{setTouched:E,setFilled:D,state:O,disabled:k}=he(),te=st(),{labelId:re,getDescriptionProps:A}=ze(),M=k||te.disabled||h||i,N=g||a,P=_||o,oe=v,F=m?y===c:c===``,L=wt.useRef(null),R=wt.useRef(null),ce=x?.registerInput,le=wt.useCallback(e=>ce?.(e,{controlRef:L,value:void 0}),[ce]),ue=I(l,R,T,le);ae(()=>{R.current?.checked&&D(!0)},[D]),ae(()=>{R.current&&T(M&&F?null:R.current)},[F,M,T]);let de=Le(),fe=ie({id:d}),z=u?void 0:fe,pe={role:`radio`,"aria-checked":F,"aria-labelledby":dt(s,re,R,!u,z),[et]:F?``:void 0,id:u?fe:de,onKeyDown(e){e.key===`Enter`&&e.preventDefault()},onClick(e){if(e.defaultPrevented||M||N)return;e.preventDefault();let t=R.current;t&&Ee(t,e)},onFocus(e){e.defaultPrevented||M||N||!b||(R.current?.click(),w(!1))}},{getButtonProps:me,buttonRef:ge}=Se({disabled:M,native:u,composite:!1}),ve={type:`radio`,ref:ue,form:oe,id:z,name:S,tabIndex:-1,style:S?_e:se,"aria-hidden":!0,...c===void 0?be:{value:ee(c)},disabled:M,checked:F,required:P,readOnly:N,onChange(e){if(e.nativeEvent.defaultPrevented||M||N||c===void 0)return;let t=xe(j,e.nativeEvent);C(c,t),t.isCanceled||E(!0)},onClick(e){e.stopPropagation()},onFocus(){L.current?.focus()}},ye=wt.useMemo(()=>({...O,required:P,disabled:M,readOnly:N,checked:F}),[O,M,N,F,P]),Ce=ye,B=m!==void 0,we=[t,L,ge],De=[pe,p,me,A,x?e=>x.getValidationProps(M,e):be],Oe=ne(`span`,e,{enabled:!B,state:ye,ref:we,props:De,stateAttributesMapping:Qe});return(0,Tt.jsxs)(St.Provider,{value:Ce,children:[B?(0,Tt.jsx)(at,{tag:`span`,render:n,className:r,style:f,state:ye,refs:we,props:De,stateAttributesMapping:Qe}):Oe,(0,Tt.jsx)(`input`,{...ve,suppressHydrationWarning:!0})]})})})))()}var Ot,kt;function At(){return(At=t((()=>{Ot=e(n(),1),g(),Ct(),$e(),_(),D(),kt=Ot.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,s=bt(),c=s.checked,{mounted:l,transitionStatus:u,setMounted:d}=Ve(c),f={...s,transitionStatus:u},p=Ot.useRef(null),m=a||l,ee=ne(`span`,e,{ref:[t,p],state:f,props:o,stateAttributesMapping:Qe});return y({batch:!0,enabled:!c,open:c,ref:p,onComplete(){c||d(!1)}}),m?ee:null})})))()}function jt(e){return Ue(e)&&e.tagName===`INPUT`}function Mt(e){return!!(jt(e)&&e.selectionStart!=null||Ue(e)&&e.tagName===`TEXTAREA`)}function Nt(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=Pt(e,t,`left`),a=Ft(e),o=Ft(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=Pt(e,t,`top`),r=Ft(e),i=Ft(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function Pt(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function Ft(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}var It,Lt,Rt,zt,Bt,Vt,Ht,Ut;function Wt(){return(Wt=t((()=>{He(),h(),E(),It=`ArrowUp`,Lt=`ArrowDown`,Rt=`ArrowLeft`,zt=`ArrowRight`,Bt=`Home`,Vt=new Set([It,Lt,Rt,zt,Bt,`End`]),Ht=`Shift`,Ut=[Ht,`Control`,`Alt`,`Meta`]})))()}function Gt(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}function Kt(e){let{loopFocus:t=!0,orientation:n=`both`,grid:r,onLoop:i,direction:a,highlightedIndex:o,onHighlightedIndexChange:s,rootRef:c,enableHomeAndEndKeys:l=!1,stopEventPropagation:u,disabledIndices:d,modifierKeys:f=ke}=e,[p,m]=Yt.useState(0),ee=r!=null,h=Yt.useRef(null),g=I(h,c),_=Yt.useRef([]),y=Yt.useRef(!1),b=Yt.useRef(null),x=o??p,S=B((e,t=!1)=>{if(b.current=_.current[e]??null,(s??m)(e),t){let t=_.current[e];Nt(h.current,t,a,n)}}),w=B(e=>{if(e.size===0)return;if(y.current){let e=_.current,t=e.indexOf(b.current);if(t===-1){let t=e[x];!t||Ae(e,x,d)?S(qt(e,d)):b.current=t}else t!==x&&S(t);return}y.current=!0;let t=Array.from(e.keys()),r=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,i=r?e.get(r)?.index??-1:-1;if(i!==-1)S(i);else if(Ae(t,x,d)){let e=v(t,{disabledIndices:d});L(t,e)||S(e)}Nt(h.current,r,a,n)});ae(()=>{if(d==null||o!=null||!y.current)return;let e=_.current;if(Ae(e,x,d)){let t=v(e,{disabledIndices:d});L(e,t)||S(t)}},[d,o,x,_,S]);let T=B((e,t,n)=>i?i(e,t,n,_):n),E=B(e=>{let o=e.key===`Home`||e.key===`End`;if(!Vt.has(e.key)||!l&&o||Jt(e,f)||!h.current)return;let s=a===`rtl`,c=s?Rt:zt,p=s?zt:Rt,m=n===`vertical`?Lt:c,g=n===`vertical`?It:p,y=C(e.nativeEvent);if(y!=null&&Mt(y)&&!Gt(y)){let t=y.selectionStart,n=y.selectionEnd,r=y.value;if(t==null||e.shiftKey||t!==n||e.key!==g&&t<r.length||e.key!==m&&t>0)return}let b=x,w=A(_,d),E=re(_,d);r!=null&&(b=r({disabledIndices:d,elementsRef:_,event:e,highlightedIndex:x,loopFocus:t,maxIndex:E,minIndex:w,onLoop:T,orientation:n,rtl:s}));let D=n!==`vertical`&&e.key===c||n!==`horizontal`&&e.key===`ArrowDown`,O=n!==`vertical`&&e.key===p||n!==`horizontal`&&e.key===`ArrowUp`;l&&(e.key===`Home`?b=w:e.key===`End`&&(b=E)),b===x&&(D||O)&&(t&&b===E&&D?(b=w,i&&(b=i(e,x,b,_))):t&&b===w&&O?(b=E,i&&(b=i(e,x,b,_))):b=v(_.current,{startingIndex:b,decrement:O,disabledIndices:d})),b!==x&&!L(_.current,b)&&(u&&e.stopPropagation(),(ee||o||D||O)&&e.preventDefault(),S(b,!0),queueMicrotask(()=>{_.current[b]?.focus()}))});return{props:{ref:g,onFocus(e){let t=h.current,n=C(e.nativeEvent);t&&n!=null&&Mt(n)&&n.setSelectionRange(0,n.value.length)},onKeyDown:E},highlightedIndex:x,onHighlightedIndexChange:S,elementsRef:_,onMapChange:w,relayKeyboardEvent:E}}function qt(e,t){let n=-1;for(let r=0;r<e.length;r+=1){let i=e[r];if(i&&!Ae(e,r,t)){if(i.hasAttribute(`data-composite-item-active`))return r;n===-1&&(n=r)}}return Math.max(n,0)}function Jt(e,t){for(let n of Ut)if(!t.includes(n)&&e.getModifierState(n))return!0;return!1}var Yt;function Xt(){return(Xt=t((()=>{Yt=e(n(),1),ce(),Me(),ue(),z(),Wt(),tt(),T()})))()}function Zt(e){let{render:t,className:n,style:r,refs:i=ke,props:a=ke,state:o=be,stateAttributesMapping:s,highlightedIndex:c,onHighlightedIndexChange:l,orientation:u,grid:d,loopFocus:f,onLoop:p,enableHomeAndEndKeys:m,onMapChange:ee,stopEventPropagation:h=!0,rootRef:g,disabledIndices:_,modifierKeys:v,highlightItemOnHover:y=!1,tag:b=`div`,...x}=e,{props:S,highlightedIndex:C,onHighlightedIndexChange:w,elementsRef:T,onMapChange:E,relayKeyboardEvent:D}=Kt({grid:d,loopFocus:f,onLoop:p,orientation:u,highlightedIndex:c,onHighlightedIndexChange:l,rootRef:g,stopEventPropagation:h,enableHomeAndEndKeys:m,direction:Ce(),disabledIndices:_,modifierKeys:v}),O=ne(b,e,{state:o,ref:i,props:[S,...a,x],stateAttributesMapping:s}),k=Qt.useMemo(()=>({highlightedIndex:C,onHighlightedIndexChange:w,highlightItemOnHover:y,relayKeyboardEvent:D}),[C,w,y,D]);return(0,$t.jsx)(ge.Provider,{value:k,children:(0,$t.jsx)(we,{elementsRef:T,onMapChange:e=>{ee?.(e),E(e)},children:O})})}var Qt,$t;function en(){return(en=t((()=>{Qt=e(n(),1),z(),fe(),Xt(),je(),g(),R(),$t=r()})))()}function tn(e,t){return e.matches(`:disabled`)?!1:!t||e.form===t||e.form===null&&!e.hasAttribute(`form`)}function nn(){return(nn=t((()=>{n(),S(),Object.keys(me)})))()}function rn(e=!1){let t=an.useContext(on);if(!t&&!e)throw Error(P(86));return t}var an,on;function sn(){return(sn=t((()=>{Re(),an=e(n(),1),on=an.createContext(void 0)})))()}var H,cn,ln,un;function dn(){return(dn=t((()=>{H=e(n(),1),Fe(),ce(),N(),T(),Wt(),en(),w(),Ie(),S(),nn(),sn(),O(),Pe(),ve(),yt(),cn=r(),ln=[Ht],un=H.forwardRef(function(e,t){let{render:n,className:r,disabled:i,readOnly:a,required:o,onValueChange:s,value:c,defaultValue:l,form:u,name:d,inputRef:f,id:m,style:ee,...h}=e,{setTouched:g,setFocused:_,validationMode:v,name:y,disabled:S,state:C,validation:w,setDirty:T,setFilled:E,validityData:D}=he(),{labelId:O}=ze(),{clearErrors:k,elementRef:ne}=p(),re=rn(!0),A=S||i,ie=y??d,ae=Le(m),[j,M]=Be({controlled:c,default:l,name:`RadioGroup`,state:`value`}),[N,P]=H.useState(!1),oe=B((e,t)=>{s?.(e,t),t.isCanceled||M(e)}),se=w.getInputControl,F=H.useMemo(()=>({get current(){return se()}}),[se]),I=H.useRef(null),L=H.useRef(null);function R(e){let t;return f&&(typeof f==`function`?t=f(e):f.current=e),I.current=e,t}let ce=B(e=>{if(!e||e.disabled)return;L.current||=e;let t=I.current,n=e.checked||t==null||t.disabled?R(e):void 0;return()=>{L.current===e&&(L.current=null),I.current===e?n?(n(),I.current=null):R(null):n?.()}}),le=B(()=>{let e=ne.current;if(!e)return j??null;for(let t of w.registeredInputs.keys())if(t.checked&&tn(t,e))return j??null;return null});te(F,ae,j??null,le,!A,d),de(j,()=>{k(ie),T(j!==D.initialValue),E(j!=null),w.change(j);let e=L.current;j==null&&e&&!e.disabled&&R(e)});let ue=O??re?.legendId,fe={...C,disabled:A??!1,required:o??!1,readOnly:a??!1},z=H.useMemo(()=>({checkedValue:j,disabled:A,form:u,validation:w,name:ie,readOnly:a,registerInputRef:ce,required:o,setCheckedValue:oe,setTouched:P,touched:N}),[j,A,u,w,ie,a,ce,o,oe,P,N]),pe={id:m,role:`radiogroup`,"aria-required":o||void 0,"aria-disabled":A||void 0,"aria-readonly":a||void 0,"aria-labelledby":ue,onFocus(){_(!0)},onBlur(e){x(e.currentTarget,e.relatedTarget)||(g(!0),_(!1),v===`onBlur`&&w.commit(j))},onKeyDownCapture(e){e.key.startsWith(`Arrow`)&&(P(!0),_(!0))}};return(0,cn.jsx)(vt.Provider,{value:z,children:(0,cn.jsx)(Zt,{render:n,className:r,style:ee,state:fe,props:[pe,h,e=>w.getValidationProps(A??!1,e)],refs:[t],stateAttributesMapping:b,enableHomeAndEndKeys:!1,modifierKeys:ln})})})})))()}var U,W,fn,pn,mn,hn,gn,_n;function vn(){return(vn=t((()=>{U=n(),Dt(),At(),dn(),a(),o(),l(),Ge(),W=r(),fn=i({slots:{root:[`flex [:is([data-slot=field-content],[data-slot=field-label],[data-slot=label],[data-slot=field-description])+&]:mt-2`,`[&:has(+[data-slot=field-error])]:mb-2`],item:`group/radio-group-item flex`,label:[`group/radio-group-label flex cursor-pointer items-start gap-3 text-sm text-text-default-base-primary select-none`,`group-data-disabled/radio-group-item:cursor-not-allowed`,`in-data-readonly:cursor-default`],control:`flex size-6 shrink-0 items-center justify-center`,radio:[`relative box-border inline-flex size-4 shrink-0 items-center justify-center rounded-full`,`border-[1.5px] border-solid border-border-checkbox-default bg-bg-input-normal`,`cursor-pointer transition-colors duration-150`,`not-data-disabled:data-unchecked:shadow-xs`,`not-data-disabled:not-data-readonly:not-in-aria-invalid:data-unchecked:group-hover/radio-group-label:border-border-input-hover`,`data-checked:border-bg-checkbox-selected`,`outline-solid outline-2 outline-offset-2 outline-transparent`,`focus-visible:outline-focus-ring-button-primary`,`in-aria-invalid:border-border-input-destructive`,`in-aria-invalid:focus-visible:outline-focus-ring-button-destructive`,`in-aria-invalid:data-checked:border-bg-default-danger-primary`,`data-disabled:cursor-not-allowed data-disabled:border-border-checkbox-disabled data-disabled:bg-bg-input-disable`,`in-aria-invalid:data-disabled:border-bg-checkbox-invalid-disabled`,`in-data-readonly:cursor-default`],indicator:[`size-2 rounded-full bg-bg-checkbox-selected`,`in-aria-invalid:bg-bg-default-danger-primary`,`data-disabled:bg-bg-checkbox-disabled`,`in-aria-invalid:data-disabled:bg-bg-checkbox-invalid-disabled`],text:`flex min-h-6 items-center group-data-disabled/radio-group-item:text-text-default-disable-primary`},variants:{orientation:{vertical:{root:`flex-col gap-2`},horizontal:{root:`flex-row flex-wrap gap-x-6 gap-y-2`}}},defaultVariants:{orientation:`vertical`}}),pn=(0,U.createContext)(null),mn=(e,t)=>e.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1,hn=e=>Array.from(e?.querySelectorAll(`input[type=radio]`)??[]),gn=({value:e,defaultValue:t,onValueChange:n,disabled:r,readOnly:i,required:a,orientation:o=`vertical`,name:l,"aria-invalid":d,"aria-labelledby":f,"aria-describedby":p,ref:m,controlRef:ee,className:h,children:g,..._})=>{let v=We(),y=fn({orientation:o}),b=f??(_[`aria-label`]===void 0?v?.labelId:void 0),x=r??(v?.disabled||void 0),S=i??(v?.readOnly||void 0),C=a??(v?.required||void 0),w=d??(v?.invalid||void 0),T=u({"aria-describedby":v?.describedBy},{"aria-describedby":p})[`aria-describedby`],[E]=(0,U.useState)(t??null),[D,O]=(0,U.useState)(t??null),k=e!==void 0,te=k?e:D,[ne,re]=(0,U.useState)(e);e!==ne&&(re(e),e===void 0&&O(null));let[A,ie]=(0,U.useState)([]),ae=(0,U.useCallback)(e=>(ie(t=>[...t.filter(t=>t.element!==e.element),e].sort(mn)),()=>ie(t=>t.filter(t=>t.element!==e.element))),[]),j=A.filter(e=>!e.disabled),M=j.find(e=>e.value===te)??j[0];(0,U.useImperativeHandle)(ee,()=>({focus:()=>M?.element.focus()}),[M]);let N=(0,U.useRef)(null),P=(0,U.useMemo)(()=>c(N,m),[m]),oe=(0,U.useRef)({isControlled:k,selected:te,initialValue:E});return oe.current={isControlled:k,selected:te,initialValue:E},(0,U.useEffect)(()=>{let e=N.current?.closest(`form`);if(!e)return;let t=()=>setTimeout(()=>{let{isControlled:e,selected:t,initialValue:n}=oe.current,r=e?t:n;e||O(n);for(let e of hn(N.current))e.checked=e.value===r});return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[]),(0,W.jsx)(pn,{value:{styles:y,disabled:x,tabStop:M?.value,register:ae},children:(0,W.jsx)(un,{..._,ref:P,value:te,onValueChange:e=>{e!==null&&(k||O(e),n?.(e))},disabled:x,readOnly:S,required:C&&l!==void 0,"aria-required":C||void 0,name:l,"data-slot":`radio-group`,"data-orientation":o,"aria-orientation":o,"aria-invalid":w,"aria-labelledby":b,"aria-describedby":T,className:s(y.root(),h),children:g})})},gn.displayName=`RadioGroup.Root`,_n=({id:e,value:t,disabled:n,className:r,children:i,...a})=>{let o=(0,U.use)(pn),c=(0,U.useId)();if(!o)throw Error(`RadioGroup.Item must be rendered inside RadioGroup.Root.`);let{styles:l,register:u}=o,d=e??c,f=!!(o.disabled||n),p=(0,U.useRef)(null);return(0,U.useLayoutEffect)(()=>{if(p.current)return u({value:t,disabled:f,element:p.current})},[u,t,f]),(0,W.jsx)(`div`,{...a,"data-slot":`radio-group-item`,"data-disabled":f||void 0,className:s(l.item(),r),children:(0,W.jsxs)(`label`,{htmlFor:d,"data-slot":`radio-group-item-label`,className:l.label(),children:[(0,W.jsx)(`span`,{"data-slot":`radio-group-item-control`,className:l.control(),children:(0,W.jsx)(Et,{nativeButton:!0,render:(0,W.jsx)(`button`,{type:`button`}),ref:p,id:d,value:t,disabled:f,tabIndex:t===o.tabStop?0:-1,"data-slot":`radio-group-radio`,className:l.radio(),children:(0,W.jsx)(kt,{"data-slot":`radio-group-indicator`,className:l.indicator()})})}),(0,W.jsx)(`span`,{"data-slot":`radio-group-item-text`,className:l.text(),children:i})]})})},_n.displayName=`RadioGroup.Item`;try{fn.displayName=`radioGroupRecipe`,fn.__docgenInfo={description:"Style recipe for RadioGroup. Slots: `root`, `item`, `label` (the clickable row), `control` (24px\nslot for the radio), `radio` (the 16px circle), `indicator` (the dot), `text`.",displayName:`radioGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{orientation:{defaultValue:{value:`vertical`},description:``,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{gn.displayName=`RadioGroup.Root`,gn.__docgenInfo={description:'Single-select list of radios that holds the selected value as a `string`.\nRenders `role="radiogroup"`: name it with `aria-labelledby` or\n`aria-label`, or put it inside a `Field.Root`, which names, describes,\ninvalidates, disables, requires and makes it read-only (the group\'s own\nprops win). Tab enters the group on the selected item, and the arrow keys\nmove the selection.\n\nUse it when the options are few and should all stay visible. For a long\nlist use [Combobox](?path=/docs/components-combobox--docs), for several\nvalues use [CheckboxGroup](?path=/docs/components-checkboxgroup--docs), and\nfor an on/off setting use [Switch](?path=/docs/components-switch--docs).\n\nEvery native `<div>` attribute is forwarded to the group, `aria-invalid`\nincluded: `role="radiogroup"` supports it, and each radio paints the\ndestructive state from it. With react-hook-form, wire it through\n`Controller` (`value`, `onValueChange`, and `field.ref` as `controlRef`),\nnot `register`: the radios\' inputs belong to the group, not to the form\nlibrary.\n\nThe group is a single Tab stop: the selected radio if it is enabled, else\nthe first enabled one. A native form reset puts an uncontrolled group back\non `defaultValue` and a controlled one on its `value`.',displayName:`RadioGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Controlled value of the selected item. `null` leaves every item unselected; `undefined`\nmakes the group uncontrolled.",name:`value`,required:!1,tags:{},type:{name:`string | null`}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Initial value for an uncontrolled group. Leave it out to start with nothing selected.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Fires with the value of the item the user selects.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Disables every item in the group.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Keeps the items focusable but stops the selection from changing.`,name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Marks the group required (`aria-required`). With `name`, the browser also\nblocks a form submission until an item is selected; without it the radios\nare not one native group, so validation is left to the form.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"`vertical` (default) stacks the items; `horizontal` lays them in a row that wraps.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Form field name; the form submits `name=value` for the selected item.",name:`name`,required:!1,tags:{},type:{name:`string`}},controlRef:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Receives `{ focus }`, which moves focus to the radio Tab would land on.\nPass a form library's field ref here (react-hook-form's `field.ref`) so it\ncan focus the group on a failed submit.",name:`controlRef`,required:!1,tags:{},type:{name:`Ref<RadioGroupControl>`}}},tags:{summary:`Single-select radio list holding its selected value as a string`,example:`<span id="payment">Payment plan</span>
<RadioGroup.Root aria-labelledby="payment" defaultValue="monthly" onValueChange={setPlan}>
  <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
  <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
</RadioGroup.Root>`,dataAttribute:`{string} data-orientation - "vertical" | "horizontal"
{string} data-disabled - Present when the whole group is disabled
{string} data-readonly - Present when the group is read-only`}}}catch{}try{_n.displayName=`RadioGroup.Item`,_n.__docgenInfo={description:"One option of a [RadioGroup](?path=/docs/components-radiogroup--docs): a\nradio and its `<label>`, inside `RadioGroup.Root`. Native `<div>`\nattributes go to the row, except `id`, which goes to the radio.",displayName:`RadioGroup.Item`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Value the group takes when this item is selected.`,name:`value`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Disables this item only. The group's `disabled` wins over `false`.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Radio and label for one value of the group`,dataAttribute:`{string} data-disabled - Present when the item or its group is disabled`}}}catch{}})))()}var G;function yn(){return(yn=t((()=>{vn(),G={Root:gn,Item:_n}})))()}var K,q,J,bn,Y,xn,X,Sn,Z,Q,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,$,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn;function qn(){return(qn=t((()=>{K=n(),qe(),yn(),d(),Ge(),q=r(),{expect:J,fn:bn,userEvent:Y,waitFor:xn,within:X}=__STORYBOOK_MODULE_TEST__,Sn={title:`Components/RadioGroup`,component:G.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},"aria-invalid":{control:`boolean`},onValueChange:{action:`valueChange`}},args:{"aria-label":`Payment plan`,defaultValue:`monthly`},render:e=>(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),parameters:{docs:{description:{component:"`Root` owns the selected value; each `Item` is a radio with its label."}}}},Z=[{value:`monthly`,label:`Monthly`},{value:`quarterly`,label:`Quarterly`},{value:`annual`,label:`Annual`}],Q={args:{onValueChange:bn()},play:async({args:e,canvasElement:t})=>{let n=X(t);await J(n.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument(),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(22, 24, 29)`}),await Y.click(n.getByRole(`radio`,{name:`Quarterly`})),await J(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await Y.click(n.getByText(`Annual`)),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`annual`);let r=n.getByRole(`radio`,{name:`Monthly`});await Y.click(r.closest(`[data-slot=radio-group-item-control]`)),await J(r).toBeChecked()}},Cn={args:{orientation:`horizontal`},play:async({canvasElement:e})=>{let t=X(e),[n,r]=t.getAllByRole(`radio`).map(e=>e.closest(`[data-slot=radio-group-item]`).getBoundingClientRect());await J(t.getByRole(`radiogroup`)).toHaveAttribute(`data-orientation`,`horizontal`),await J(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-orientation`,`horizontal`),await J(r.top).toBe(n.top),await J(r.left-n.right).toBe(24)}},wn={args:{"aria-label":void 0,defaultValue:void 0},render:e=>(0,q.jsxs)(V.Root,{invalid:!0,required:!0,children:[(0,q.jsxs)(V.Content,{children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(V.Description,{children:`How often the insured pays the premium.`})]}),(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(V.Error,{errors:[{message:`Choose a payment plan`}]})]}),play:async({canvasElement:e})=>{let t=X(e).getByRole(`radiogroup`,{name:/Payment plan/});await J(t).toHaveAccessibleDescription(/premium.*Choose a payment plan|Choose a payment plan.*premium/),await J(t).toHaveAttribute(`aria-invalid`,`true`),await J(t).toHaveAttribute(`aria-required`,`true`)}},Tn={args:{disabled:!0,onValueChange:bn()},play:async({args:e,canvasElement:t})=>{let n=X(t);for(let e of n.getAllByRole(`radio`))await J(e).toBeDisabled();await J(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(207, 210, 219)`}),await Y.click(n.getByText(`Annual`)),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},En={args:{onValueChange:bn()},render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly`}),(0,q.jsx)(G.Item,{value:`quarterly`,disabled:!0,children:`Quarterly (not offered by this carrier)`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({args:e,canvasElement:t})=>{let n=X(t);await J(n.getByRole(`radio`,{name:/Quarterly/})).toBeDisabled(),await Y.click(n.getByRole(`radio`,{name:`Monthly`})),await Y.keyboard(`{ArrowDown}`),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`annual`)}},Dn={args:{readOnly:!0,onValueChange:bn()},play:async({args:e,canvasElement:t})=>{let n=X(t),r=n.getByRole(`radio`,{name:`Annual`});await J(n.getByRole(`radiogroup`)).toHaveAttribute(`aria-readonly`,`true`),await Y.click(r),await Y.click(n.getByText(`Quarterly`)),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(r).not.toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},On={args:{"aria-invalid":!0,"aria-describedby":`plan-error`,defaultValue:void 0},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(`p`,{id:`plan-error`,className:`text-sm text-text-input-destructive`,children:`Choose a payment plan.`})]}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radiogroup`,{name:`Payment plan`});await J(n).toHaveAttribute(`aria-invalid`,`true`),await J(n).toHaveAccessibleDescription(`Choose a payment plan.`),await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveStyle({borderColor:`rgb(217, 38, 38)`})}},kn={render:()=>{let[e,t]=(0,K.useState)(`monthly`);return(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(`annual`),children:`Choose annual`})]}),(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e??`none`]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Choose annual`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.tab(),await J(t.getByRole(`radio`,{name:`Annual`})).toHaveFocus(),await Y.click(t.getByRole(`radio`,{name:`Quarterly`})),await J(t.getByRole(`status`)).toHaveTextContent(`quarterly`),await Y.click(t.getByRole(`button`,{name:`Clear`}));for(let e of t.getAllByRole(`radio`))await J(e).not.toBeChecked();await J(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},An={render:()=>{let[e,t]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,required:!0,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(t.queryByRole(`status`)).not.toBeInTheDocument(),await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},jn={render:()=>{let{control:e,handleSubmit:t}=Ke({defaultValues:{plan:``}}),[n,r]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:t(e=>r(e.plan)),children:[(0,q.jsx)(Je,{name:`plan`,control:e,rules:{required:`Choose a payment plan`},render:({field:e,fieldState:t})=>(0,q.jsxs)(V.Root,{invalid:t.invalid,required:!0,children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(G.Root,{controlRef:e.ref,value:e.value,onValueChange:e.onChange,onBlur:e.onBlur,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(V.Error,{errors:[t.error]})]})}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),n&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveFocus();let n=t.getByRole(`radiogroup`,{name:/Payment plan/});await J(n).toHaveAccessibleDescription(`Choose a payment plan`),await J(n).toHaveAttribute(`aria-invalid`,`true`),await J(n.getBoundingClientRect().top-n.previousElementSibling.getBoundingClientRect().bottom).toBe(16),await Y.keyboard(`{ArrowDown}`),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`quarterly`)}},Mn={render:e=>(0,q.jsx)(`div`,{className:`w-60`,children:(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly, charged on the policy's effective day of every month`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]})}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radio`,{name:/Monthly/}),r=t.getByText(/Monthly/),i=n.parentElement.getBoundingClientRect(),a=n.getBoundingClientRect();await J(r.getBoundingClientRect().height).toBeGreaterThan(24),await J(i.top).toBe(r.getBoundingClientRect().top),await J(i.height).toBe(24),await J(a.top-i.top).toBe(4),await J(a.width).toBe(16)}},Nn={render:()=>(0,q.jsx)(`div`,{className:`flex flex-wrap gap-10`,children:[[`Enabled`,{}],[`Disabled`,{disabled:!0}],[`Invalid`,{"aria-invalid":!0}],[`Read-only`,{readOnly:!0}]].map(([e,t])=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,q.jsx)(G.Root,{"aria-label":`${e} payment plan`,defaultValue:`quarterly`,...t,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]},e))})},$={tags:[`!dev`,`!autodocs`,`!manifest`],args:{onValueChange:bn()},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(f,{variant:`secondary`,children:`Continue`})]}),play:async({args:e,canvasElement:t})=>{let n=X(t);await Y.tab(),await J(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await Y.keyboard(`{ArrowDown}`),await J(n.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await J(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await Y.keyboard(`{ArrowUp}{ArrowUp}`),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.tab(),await J(n.getByRole(`button`,{name:`Continue`})).toHaveFocus()}},Pn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:void 0,onValueChange:bn()},play:async({args:e,canvasElement:t})=>{let n=X(t);for(let e of n.getAllByRole(`radio`))await J(e).not.toBeChecked();await Y.tab(),await J(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await J(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},Fn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":void 0,"aria-labelledby":`plan-heading`},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(`span`,{id:`plan-heading`,className:`text-sm font-semibold text-text-input-normal`,children:`Payment plan`}),(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument()}},In={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,disabled:!0,children:`Monthly (no longer offered)`}),(0,q.jsx)(G.Item,{value:`quarterly`,children:`Quarterly`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radio`,{name:/Monthly/})).toBeChecked(),await Y.tab(),await J(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus()}},Ln={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,defaultValue:`monthly`,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,q.jsx)(f,{type:`submit`,children:`Submit`})]}),e&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Reset`})),await J(t.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(t.getByRole(`radio`,{name:`Annual`})).not.toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`monthly`)}},Rn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(`quarterly`),[n,r]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),r(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,value:e,onValueChange:t,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,q.jsx)(f,{type:`submit`,children:`Submit`})]}),n&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await Y.click(t.getByRole(`button`,{name:`Reset`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},zn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(!1);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(!0)},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,required:!0,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,q.jsx)(`output`,{className:`text-sm`,children:`Sent`})]})},play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-required`,`true`),await Y.click(t.getByRole(`radio`,{name:`Annual`})),await J(e.querySelector(`form`).checkValidity()).toBe(!0),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`Sent`)}},Bn={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{id:`plan-monthly`,value:`monthly`,children:`Monthly`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveAttribute(`id`,`plan-monthly`),await J(t.getByRole(`radio`,{name:`Annual`}).id).not.toBe(``)}},Vn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":`Plan`,"aria-describedby":`plan-note`,disabled:!1},render:e=>(0,q.jsxs)(V.Root,{disabled:!0,children:[(0,q.jsxs)(V.Content,{children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(V.Description,{children:`How often the insured pays the premium.`})]}),(0,q.jsx)(`p`,{id:`plan-note`,children:`Changing it starts at the next renewal.`}),(0,q.jsx)(G.Root,{...e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`radiogroup`,{name:`Plan`});await J(n).not.toHaveAttribute(`aria-labelledby`),await J(n).toHaveAccessibleDescription(`How often the insured pays the premium. Changing it starts at the next renewal.`);for(let e of t.getAllByRole(`radio`))await J(e).toBeEnabled()}},Hn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(``);return(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,q.jsxs)(G.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:[(0,q.jsx)(G.Item,{value:``,children:`None`}),(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly`})]})]})},play:async({canvasElement:e})=>{let t=X(e);await J(t.getByRole(`radio`,{name:`None`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Clear`})),await J(t.getByRole(`radio`,{name:`None`})).not.toBeChecked(),await J(t.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked()}},Un={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let{control:e,reset:t}=Ke();return(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsx)(Je,{name:`plan`,control:e,render:({field:e})=>(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,controlRef:e.ref,value:e.value,onValueChange:e.onChange,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})}),(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(),children:`Reset form`})]})},play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByRole(`radio`,{name:`Annual`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await Y.click(t.getByRole(`button`,{name:`Reset form`}));for(let e of t.getAllByRole(`radio`))await J(e).not.toBeChecked()}},Wn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(null);return(0,K.useEffect)(()=>{t(`annual`)},[]),(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,readOnly:!0,value:e,children:Z.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})},play:async({canvasElement:e})=>{let t=X(e),n=()=>t.getAllByRole(`radio`).filter(e=>e.tabIndex===0);await xn(()=>J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()),await J(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})]),await Y.click(t.getByRole(`radio`,{name:`Quarterly`})),await J(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})])}},Gn={tags:[`!dev`,`!autodocs`,`!manifest`],play:async({canvasElement:e})=>{let t=X(e);await Y.click(t.getByText(`Quarterly`)),await J(t.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await Y.keyboard(`{ArrowDown}`),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()}},Kn=[`Default`,`Horizontal`,`InsideField`,`Disabled`,`DisabledItem`,`ReadOnly`,`Invalid`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`AllStates`,`Keyboard`,`NoSelection`,`LabelledByHeading`,`DisabledSelectedItem`,`FormReset`,`FormResetControlled`,`RequiredWithoutName`,`ItemId`,`InsideFieldOverridden`,`EmptyStringOption`,`ResetToUndefined`,`SingleTabStop`,`LabelPressFocus`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`@summary Uncontrolled group with one item selected`,...Q.parameters?.docs?.description}}},Cn.parameters={...Cn.parameters,docs:{...Cn.parameters?.docs,source:{originalSource:`{
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
}`,...Cn.parameters?.docs?.source},description:{story:`Items laid in a row, 24px apart, wrapping when the row runs out of room.

@summary Items in a row`,...Cn.parameters?.docs?.description}}},wn.parameters={...wn.parameters,docs:{...wn.parameters?.docs,source:{originalSource:`{
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
}`,...wn.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, label, messages, `invalid`, `required` and\n`disabled` reach the group with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...wn.parameters?.docs?.description}}},Tn.parameters={...Tn.parameters,docs:{...Tn.parameters?.docs,source:{originalSource:`{
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
}`,...Dn.parameters?.docs?.source},description:{story:`The items stay focusable but the selection does not change, by pointer or
by keyboard.

@summary Read-only group`,...Dn.parameters?.docs?.description}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`{
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
}`,...On.parameters?.docs?.source},description:{story:'`aria-invalid` sits on the group, which `role="radiogroup"` supports, and\nevery radio paints the destructive border from it.\n\n@summary Failed validation on the group',...On.parameters?.docs?.description}}},kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`{
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
}`,...kn.parameters?.docs?.source},description:{story:`@summary Controlled group whose value is set from outside`,...kn.parameters?.docs?.description}}},An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`{
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
}`,...An.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value` for the selected item, and\n`required` blocks the submission while nothing is selected.\n\n@summary Native form submission",...An.parameters?.docs?.description}}},jn.parameters={...jn.parameters,docs:{...jn.parameters?.docs,source:{originalSource:`{
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
}`,...jn.parameters?.docs?.source},description:{story:`With react-hook-form, wire the group through \`Controller\`. Its \`ref\` lets
the form focus the group on a failed submit: focus lands on the radio Tab
would reach.

@summary React Hook Form through Controller`,...jn.parameters?.docs?.description}}},Mn.parameters={...Mn.parameters,docs:{...Mn.parameters?.docs,source:{originalSource:`{
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
}`,...Mn.parameters?.docs?.source},description:{story:`A long label wraps under itself and the radio stays level with its first
line.

@summary Wrapping label keeps the radio on the first line`,...Mn.parameters?.docs?.description}}},Nn.parameters={...Nn.parameters,docs:{...Nn.parameters?.docs,source:{originalSource:`{
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
}`,...Nn.parameters?.docs?.source},description:{story:`Every state of an item side by side, for checking against the design:
enabled, disabled, invalid and read-only, each with one item selected.

@summary Visual comparison of the item states`,...Nn.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Tab enters the group on the selected item and leaves it on the next Tab;
the arrow keys move the selection, wrapping at the ends.

@summary Keyboard navigation and selection`,...$.parameters?.docs?.description}}},Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`{
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
}`,...Pn.parameters?.docs?.source},description:{story:`With no \`defaultValue\` nothing is selected, and Tab lands on the first item
without selecting it.

@summary Group that starts with nothing selected`,...Pn.parameters?.docs?.description}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
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
}`,...Fn.parameters?.docs?.source},description:{story:`@summary Group named by a visible heading`,...Fn.parameters?.docs?.description}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`{
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
}`,...In.parameters?.docs?.source},description:{story:`When the selected item is disabled, Tab enters the group on the first
enabled item instead, so the group stays reachable by keyboard.

@summary Selected item disabled`,...In.parameters?.docs?.description}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`{
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
}`,...Ln.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled group back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...Ln.parameters?.docs?.description}}},Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`{
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
}`,...Rn.parameters?.docs?.source},description:{story:`A native form reset leaves a controlled group on its \`value\`, and the form
submits that value too.

@summary Native form reset on a controlled group`,...Rn.parameters?.docs?.description}}},zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
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
}`,...zn.parameters?.docs?.source},description:{story:"Without `name` the radios are not one native group, so `required` only\nmarks the group (`aria-required`) and leaves validation to the form: a\nselection never leaves the form invalid.\n\n@summary Required without a name",...zn.parameters?.docs?.description}}},Bn.parameters={...Bn.parameters,docs:{...Bn.parameters?.docs,source:{originalSource:`{
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
}`,...Bn.parameters?.docs?.source},description:{story:`@summary Item id reaches the radio`,...Bn.parameters?.docs?.description}}},Vn.parameters={...Vn.parameters,docs:{...Vn.parameters?.docs,source:{originalSource:`{
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
}`,...Vn.parameters?.docs?.source},description:{story:"`aria-label` and `disabled={false}` on the group win over the field. Its own\n`aria-describedby` joins the field's messages instead of replacing them.\n\n@summary Own props override the Field wiring",...Vn.parameters?.docs?.description}}},Hn.parameters={...Hn.parameters,docs:{...Hn.parameters?.docs,source:{originalSource:`{
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
}`,...Hn.parameters?.docs?.source},description:{story:`An item can carry the empty string, for a "None" choice: \`''\` selects it,
and only \`null\` leaves the group without a selection.

@summary Empty-string value for a None option`,...Hn.parameters?.docs?.description}}},Un.parameters={...Un.parameters,docs:{...Un.parameters?.docs,source:{originalSource:`{
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
}`,...Un.parameters?.docs?.source},description:{story:`A react-hook-form reset with no default values sets the field back to
\`undefined\`: the group clears instead of keeping the last pick on screen.

@summary Form reset to undefined clears the selection`,...Un.parameters?.docs?.description}}},Wn.parameters={...Wn.parameters,docs:{...Wn.parameters?.docs,source:{originalSource:`{
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
}`,...Wn.parameters?.docs?.source},description:{story:`The group is always one Tab stop, even read-only with a value that arrives
after mount and a press that moves focus to another radio.

@summary Single tab stop when read-only`,...Wn.parameters?.docs?.description}}},Gn.parameters={...Gn.parameters,docs:{...Gn.parameters?.docs,source:{originalSource:`{
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
}`,...Gn.parameters?.docs?.source},description:{story:`A press on an item's text focuses that item, so the arrow keys continue
from the one just picked.

@summary Pressing a label focuses its radio`,...Gn.parameters?.docs?.description}}}})))()}qn();export{Nn as AllStates,kn as Controlled,Q as Default,Tn as Disabled,En as DisabledItem,In as DisabledSelectedItem,Hn as EmptyStringOption,Ln as FormReset,Rn as FormResetControlled,Cn as Horizontal,An as InForm,wn as InsideField,Vn as InsideFieldOverridden,On as Invalid,Bn as ItemId,$ as Keyboard,Gn as LabelPressFocus,Fn as LabelledByHeading,Mn as LongLabel,Pn as NoSelection,Dn as ReadOnly,zn as RequiredWithoutName,Un as ResetToUndefined,Wn as SingleTabStop,jn as WithReactHookForm,Kn as __namedExportsOrder,Sn as default};