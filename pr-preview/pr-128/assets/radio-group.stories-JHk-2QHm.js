import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DJu3G0OF.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./dist-C8AlzbfS.js";import{n as o,t as s}from"./utils-nsk-j2e0.js";import{i as c,n as l,r as u}from"./merge-props-D84KFPfE.js";import{n as d,t as f}from"./button-CSXn76B8.js";import{C as p,Ct as m,F as ee,H as h,I as g,J as _,L as v,M as y,Mt as b,N as x,Nt as S,O as C,Pt as w,Q as T,R as E,S as D,St as O,T as k,U as A,X as te,Z as ne,_ as j,_n as M,_t as re,a as N,b as P,bn as F,c as I,cn as ie,d as ae,dn as oe,et as L,f as R,fn as z,g as se,gn as ce,h as le,i as ue,in as de,it as fe,j as pe,k as me,l as he,ln as ge,m as _e,n as ve,nn as ye,nt as be,o as xe,p as Se,pn as B,r as Ce,rn as we,s as Te,sn as Ee,t as De,tn as Oe,tt as ke,u as Ae,un as je,ut as Me,v as Ne,vn as Pe,w as Fe,x as Ie,xn as Le,y as Re,yn as ze,z as Be}from"./useCompositeListItem-D7hjdRJL.js";import{D as Ve,k as He}from"./floating-ui.react-dom-Buhb9rvn.js";import{a as Ue,n as We,t as V}from"./field-DgDPv4N5.js";import{a as Ge,r as Ke,t as qe}from"./index.esm-DYynAx8F.js";var Je,Ye;function Xe(){return(Xe=t((()=>{Je=`data-checked`,Ye=`data-unchecked`})))()}var Ze;function Qe(){return(Qe=t((()=>{O(),x(),Xe(),Ze={checked(e){return e?{[Je]:``}:{[Ye]:``}},...m,...y}})))()}var $e;function et(){return(et=t((()=>{$e=`data-composite-item-active`})))()}function tt(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=ae(),{ref:i,index:a}=ve(e),o=n===a,s=nt.useRef(null),c=oe(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}var nt;function rt(){return(rt=t((()=>{nt=e(n(),1),je(),Ae(),De()})))()}function it(e){let{render:t,className:n,style:r,state:i=ye,props:a=Oe,refs:o=Oe,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=tt({metadata:s});return A(l,e,{state:i,ref:[f,...o],props:[d,...a,u],stateAttributesMapping:c})}function at(){return(at=t((()=>{de(),h(),rt()})))()}function ot(){return st.useContext(ct)}var st,ct;function lt(){return(lt=t((()=>{st=e(n(),1),ct=st.createContext({disabled:!1})})))()}function ut(e,t,n,r=!0,i){let[a,o]=pt.useState(),s=Ie(i?`${i}-label`:void 0),c=e??t??a;return M(()=>{let i=e||t||!r?void 0:dt(n.current,s);a!==i&&o(i)}),c}function dt(e,t){let n=ft(e);if(n)return!n.id&&t&&(n.id=t),n.id||void 0}function ft(e){if(!e)return;let t=e.parentElement;if(t&&t.tagName===`LABEL`)return t;let n=e.id;if(n){let t=e.nextElementSibling;if(t&&t.htmlFor===n)return t}let r=e.labels;return r&&r[0]}var pt;function mt(){return(mt=t((()=>{pt=e(n(),1),ce(),P()})))()}function ht(){return gt.useContext(_t)}var gt,_t;function vt(){return(vt=t((()=>{gt=e(n(),1),_t=gt.createContext(void 0)})))()}function yt(){let e=bt.useContext(xt);if(e===void 0)throw Error(F(52));return e}var bt,xt;function St(){return(St=t((()=>{Le(),bt=e(n(),1),xt=bt.createContext(void 0)})))()}var Ct,wt,Tt;function Et(){return(Et=t((()=>{Ct=e(n(),1),je(),ce(),Ee(),de(),fe(),Me(),Qe(),I(),P(),h(),N(),et(),at(),C(),lt(),Ne(),mt(),se(),vt(),St(),wt=r(),Tt=Ct.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,readOnly:a=!1,required:o=!1,"aria-labelledby":s,value:c,inputRef:l,nativeButton:u=!1,id:d,style:f,...p}=e,m=ht(),{disabled:h,readOnly:g,required:_,form:v,checkedValue:y,touched:b=!1,validation:x,name:S,setCheckedValue:C=we,setTouched:w=we,registerInputRef:T=we}=m??{},{setTouched:E,setFilled:D,state:O,disabled:k}=me(),te=ot(),{labelId:ne,getDescriptionProps:N}=Re(),P=k||te.disabled||h||i,F=g||a,I=_||o,ae=v,L=m?y===c:c===``,R=Ct.useRef(null),z=Ct.useRef(null),se=x?.registerInput,ce=Ct.useCallback(e=>se?.(e,{controlRef:R,value:void 0}),[se]),le=oe(l,z,T,ce);M(()=>{z.current?.checked&&D(!0)},[D]),M(()=>{if(z.current){if(P&&L){T(null);return}T(z.current)}},[L,P,T]);let ue=Ie(),de=j({id:d}),fe=u?void 0:de,pe={role:`radio`,"aria-checked":L,"aria-labelledby":ut(s,ne,z,!u,fe),[$e]:L?``:void 0,id:u?de:ue,onKeyDown(e){e.key===`Enter`&&e.preventDefault()},onClick(e){if(e.defaultPrevented||P||F)return;e.preventDefault();let t=z.current;t&&Te(t,e)},onFocus(e){e.defaultPrevented||P||F||!b||(z.current?.click(),w(!1))}},{getButtonProps:he,buttonRef:_e}=xe({disabled:P,native:u,composite:!1}),ve={type:`radio`,ref:le,form:ae,id:fe,name:S,tabIndex:-1,style:S?ge:ie,"aria-hidden":!0,...c===void 0?ye:{value:ee(c)},disabled:P,checked:L,required:I,readOnly:F,onChange(e){if(e.nativeEvent.defaultPrevented||P||F||c===void 0)return;let t=be(re,e.nativeEvent);C(c,t),!t.isCanceled&&E(!0)},onClick(e){e.stopPropagation()},onFocus(){R.current?.focus()}},Se=Ct.useMemo(()=>({...O,required:I,disabled:P,readOnly:F,checked:L}),[O,P,F,L,I]),B=Se,Ce=m!==void 0,Ee=[t,R,_e],De=[pe,p,he,N,x?e=>x.getValidationProps(P,e):ye],Oe=A(`span`,e,{enabled:!Ce,state:Se,ref:Ee,props:De,stateAttributesMapping:Ze});return(0,wt.jsxs)(xt.Provider,{value:B,children:[Ce?(0,wt.jsx)(it,{tag:`span`,render:n,className:r,style:f,state:Se,refs:Ee,props:De,stateAttributesMapping:Ze}):Oe,(0,wt.jsx)(`input`,{...ve,suppressHydrationWarning:!0})]})})})))()}var Dt,Ot;function kt(){return(kt=t((()=>{Dt=e(n(),1),h(),St(),Qe(),g(),E(),Ot=Dt.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,s=yt(),c=s.checked,{mounted:l,transitionStatus:u,setMounted:d}=Be(c),f={...s,transitionStatus:u},p=Dt.useRef(null),m=a||l,ee=A(`span`,e,{ref:[t,p],state:f,props:o,stateAttributesMapping:Ze});return v({batch:!0,enabled:!c,open:c,ref:p,onComplete(){c||d(!1)}}),m?ee:null})})))()}function At(e){return He(e)&&e.tagName===`INPUT`}function jt(e){return!!(At(e)&&e.selectionStart!=null||He(e)&&e.tagName===`TEXTAREA`)}function Mt(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=Nt(e,t,`left`),a=Pt(e),o=Pt(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=Nt(e,t,`top`),r=Pt(e),i=Pt(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function Nt(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function Pt(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}var Ft,It,Lt,Rt,zt,Bt,Vt,Ht;function Ut(){return(Ut=t((()=>{Ve(),T(),Ft=`ArrowUp`,It=`ArrowDown`,Lt=`ArrowLeft`,Rt=`ArrowRight`,zt=`Home`,Bt=new Set([Ft,It,Lt,Rt,zt,`End`]),Vt=`Shift`,Ht=[Vt,`Control`,`Alt`,`Meta`]})))()}function Wt(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}function Gt(e){let{loopFocus:t=!0,orientation:n=`both`,grid:r,onLoop:i,direction:a,highlightedIndex:o,onHighlightedIndexChange:s,rootRef:c,enableHomeAndEndKeys:l=!1,stopEventPropagation:u,disabledIndices:d,modifierKeys:f=Oe}=e,[p,m]=Jt.useState(0),ee=r!=null,h=Jt.useRef(null),g=oe(h,c),v=Jt.useRef([]),y=Jt.useRef(!1),b=Jt.useRef(null),x=o??p,C=B((e,t=!1)=>{if(b.current=v.current[e]??null,(s??m)(e),t){let t=v.current[e];Mt(h.current,t,a,n)}}),w=B(e=>{if(e.size===0)return;if(y.current){let e=v.current,t=e.indexOf(b.current);if(t===-1){let t=e[x];!t||ke(e,x,d)?C(Kt(e,d)):b.current=t}else t!==x&&C(t);return}y.current=!0;let t=Array.from(e.keys()),r=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,i=r?e.get(r)?.index??-1:-1;if(i!==-1)C(i);else if(ke(t,x,d)){let e=_(t,{disabledIndices:d});L(t,e)||C(e)}Mt(h.current,r,a,n)});M(()=>{if(d==null||o!=null||!y.current)return;let e=v.current;if(ke(e,x,d)){let t=_(e,{disabledIndices:d});L(e,t)||C(t)}},[d,o,x,v,C]);let T=B((e,t,n)=>i?i(e,t,n,v):n),E=B(e=>{let o=e.key===`Home`||e.key===`End`;if(!Bt.has(e.key)||!l&&o||qt(e,f)||!h.current)return;let s=a===`rtl`,c=s?Lt:Rt,p=s?Rt:Lt,m=n===`vertical`?It:c,g=n===`vertical`?Ft:p,y=S(e.nativeEvent);if(y!=null&&jt(y)&&!Wt(y)){let t=y.selectionStart,n=y.selectionEnd,r=y.value;if(t==null||e.shiftKey||t!==n||e.key!==g&&t<r.length||e.key!==m&&t>0)return}let b=x,w=ne(v,d),E=te(v,d);r!=null&&(b=r({disabledIndices:d,elementsRef:v,event:e,highlightedIndex:x,loopFocus:t,maxIndex:E,minIndex:w,onLoop:T,orientation:n,rtl:s}));let D=n!==`vertical`&&e.key===c||n!==`horizontal`&&e.key===`ArrowDown`,O=n!==`vertical`&&e.key===p||n!==`horizontal`&&e.key===`ArrowUp`;l&&(e.key===`Home`?b=w:e.key===`End`&&(b=E)),b===x&&(D||O)&&(t&&b===E&&D?(b=w,i&&(b=i(e,x,b,v))):t&&b===w&&O?(b=E,i&&(b=i(e,x,b,v))):b=_(v.current,{startingIndex:b,decrement:O,disabledIndices:d})),b!==x&&!L(v.current,b)&&(u&&e.stopPropagation(),(ee||o||D||O)&&e.preventDefault(),C(b,!0),queueMicrotask(()=>{v.current[b]?.focus()}))});return{props:{ref:g,onFocus(e){let t=h.current,n=S(e.nativeEvent);t&&n!=null&&jt(n)&&n.setSelectionRange(0,n.value.length)},onKeyDown:E},highlightedIndex:x,onHighlightedIndexChange:C,elementsRef:v,onMapChange:w,relayKeyboardEvent:E}}function Kt(e,t){let n=-1;for(let r=0;r<e.length;r+=1){let i=e[r];if(i&&!ke(e,r,t)){if(i.hasAttribute(`data-composite-item-active`))return r;n===-1&&(n=r)}}return Math.max(n,0)}function qt(e,t){for(let n of Ht)if(!t.includes(n)&&e.getModifierState(n))return!0;return!1}var Jt;function Yt(){return(Yt=t((()=>{Jt=e(n(),1),z(),je(),ce(),de(),Ut(),et(),w()})))()}function Xt(e){let{render:t,className:n,style:r,refs:i=Oe,props:a=Oe,state:o=ye,stateAttributesMapping:s,highlightedIndex:c,onHighlightedIndexChange:l,orientation:u,grid:d,loopFocus:f,onLoop:p,enableHomeAndEndKeys:m,onMapChange:ee,stopEventPropagation:h=!0,rootRef:g,disabledIndices:_,modifierKeys:v,highlightItemOnHover:y=!1,tag:b=`div`,...x}=e,{props:S,highlightedIndex:C,onHighlightedIndexChange:w,elementsRef:T,onMapChange:E,relayKeyboardEvent:D}=Gt({grid:d,loopFocus:f,onLoop:p,orientation:u,highlightedIndex:c,onHighlightedIndexChange:l,rootRef:g,stopEventPropagation:h,enableHomeAndEndKeys:m,direction:Se(),disabledIndices:_,modifierKeys:v}),O=A(b,e,{state:o,ref:i,props:[S,...a,x],stateAttributesMapping:s}),k=Zt.useMemo(()=>({highlightedIndex:C,onHighlightedIndexChange:w,highlightItemOnHover:y,relayKeyboardEvent:D}),[C,w,y,D]);return(0,Qt.jsx)(he.Provider,{value:k,children:(0,Qt.jsx)(Ce,{elementsRef:T,onMapChange:e=>{ee?.(e),E(e)},children:O})})}var Zt,Qt;function $t(){return($t=t((()=>{Zt=e(n(),1),de(),ue(),Yt(),Ae(),h(),R(),Qt=r()})))()}function en(e,t){return e.matches(`:disabled`)?!1:!t||e.form===t||e.form===null&&!e.hasAttribute(`form`)}function tn(){return(tn=t((()=>{n(),x(),Object.keys(pe)})))()}function nn(e=!1){let t=rn.useContext(an);if(!t&&!e)throw Error(F(86));return t}var rn,an;function on(){return(on=t((()=>{Le(),rn=e(n(),1),an=rn.createContext(void 0)})))()}var H,sn,cn,ln;function un(){return(un=t((()=>{H=e(n(),1),Pe(),z(),P(),w(),Ut(),$t(),C(),Fe(),x(),tn(),on(),D(),Ne(),_e(),vt(),sn=r(),cn=[Vt],ln=H.forwardRef(function(e,t){let{render:n,className:r,disabled:i,readOnly:a,required:o,onValueChange:s,value:c,defaultValue:l,form:u,name:d,inputRef:f,id:m,style:ee,...h}=e,{setTouched:g,setFocused:_,validationMode:v,name:x,disabled:S,state:C,validation:w,setDirty:T,setFilled:E,validityData:D}=me(),{labelId:O}=Re(),{clearErrors:A,elementRef:te}=p(),ne=nn(!0),j=S||i,M=x??d,re=Ie(m),[N,P]=ze({controlled:c,default:l,name:`RadioGroup`,state:`value`}),[F,I]=H.useState(!1),ie=B((e,t)=>{s?.(e,t),!t.isCanceled&&P(e)}),ae=w.getInputControl,oe=H.useMemo(()=>({get current(){return ae()}}),[ae]),L=H.useRef(null),R=H.useRef(null);function z(e){let t;return f&&(typeof f==`function`?t=f(e):f.current=e),L.current=e,t}let se=B(e=>{if(!e||e.disabled)return;R.current||=e;let t=L.current,n=e.checked||t==null||t.disabled?z(e):void 0;return()=>{R.current===e&&(R.current=null),L.current===e?n?(n(),L.current=null):z(null):n?.()}}),ce=B(()=>{let e=te.current;if(!e)return N??null;for(let t of w.registeredInputs.keys())if(t.checked&&en(t,e))return N??null;return null});k(oe,re,N??null,ce,!j,d),le(N,()=>{A(M),T(N!==D.initialValue),E(N!=null),w.change(N);let e=R.current;N==null&&e&&!e.disabled&&z(e)});let ue=O??ne?.legendId,de={...C,disabled:j??!1,required:o??!1,readOnly:a??!1},fe=H.useMemo(()=>({checkedValue:N,disabled:j,form:u,validation:w,name:M,readOnly:a,registerInputRef:se,required:o,setCheckedValue:ie,setTouched:I,touched:F}),[N,j,u,w,M,a,se,o,ie,I,F]),pe={id:m,role:`radiogroup`,"aria-required":o||void 0,"aria-disabled":j||void 0,"aria-readonly":a||void 0,"aria-labelledby":ue,onFocus(){_(!0)},onBlur(e){b(e.currentTarget,e.relatedTarget)||(g(!0),_(!1),v===`onBlur`&&w.commit(N))},onKeyDownCapture(e){e.key.startsWith(`Arrow`)&&(I(!0),_(!0))}};return(0,sn.jsx)(_t.Provider,{value:fe,children:(0,sn.jsx)(Xt,{render:n,className:r,style:ee,state:de,props:[pe,h,e=>w.getValidationProps(j??!1,e)],refs:[t],stateAttributesMapping:y,enableHomeAndEndKeys:!1,modifierKeys:cn})})})})))()}var U,W,dn,fn,pn,mn,hn,gn;function _n(){return(_n=t((()=>{U=n(),Et(),kt(),un(),a(),o(),l(),We(),W=r(),dn=i({slots:{root:[`flex [:is([data-slot=field-content],[data-slot=field-label],[data-slot=label],[data-slot=field-description])+&]:mt-2`,`[&:has(+[data-slot=field-error])]:mb-2`],item:`group/radio-group-item flex`,label:[`group/radio-group-label flex cursor-pointer items-start gap-3 text-sm text-text-default-base-primary select-none`,`group-data-disabled/radio-group-item:cursor-not-allowed`,`in-data-readonly:cursor-default`],control:`flex size-6 shrink-0 items-center justify-center`,radio:[`relative box-border inline-flex size-4 shrink-0 items-center justify-center rounded-full`,`border-[1.5px] border-solid border-border-checkbox-default bg-bg-input-normal`,`cursor-pointer transition-colors duration-150`,`not-data-disabled:data-unchecked:shadow-xs`,`not-data-disabled:not-data-readonly:not-in-aria-invalid:data-unchecked:group-hover/radio-group-label:border-border-input-hover`,`data-checked:border-bg-checkbox-selected`,`outline-solid outline-2 outline-offset-2 outline-transparent`,`focus-visible:outline-focus-ring-button-primary`,`in-aria-invalid:border-border-input-destructive`,`in-aria-invalid:focus-visible:outline-focus-ring-button-destructive`,`in-aria-invalid:data-checked:border-bg-default-danger-primary`,`data-disabled:cursor-not-allowed data-disabled:border-border-checkbox-disabled data-disabled:bg-bg-input-disable`,`in-aria-invalid:data-disabled:border-bg-checkbox-invalid-disabled`,`in-data-readonly:cursor-default`],indicator:[`size-2 rounded-full bg-bg-checkbox-selected`,`in-aria-invalid:bg-bg-default-danger-primary`,`data-disabled:bg-bg-checkbox-disabled`,`in-aria-invalid:data-disabled:bg-bg-checkbox-invalid-disabled`],text:`flex min-h-6 items-center group-data-disabled/radio-group-item:text-text-default-disable-primary`},variants:{orientation:{vertical:{root:`flex-col gap-2`},horizontal:{root:`flex-row flex-wrap gap-x-6 gap-y-2`}}},defaultVariants:{orientation:`vertical`}}),fn=(0,U.createContext)(null),pn=(e,t)=>e.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1,mn=e=>Array.from(e?.querySelectorAll(`input[type=radio]`)??[]),hn=({value:e,defaultValue:t,onValueChange:n,disabled:r,readOnly:i,required:a,orientation:o=`vertical`,name:l,"aria-invalid":d,"aria-labelledby":f,"aria-describedby":p,ref:m,controlRef:ee,className:h,children:g,..._})=>{let v=Ue(),y=dn({orientation:o}),b=f??(_[`aria-label`]===void 0?v?.labelId:void 0),x=r??(v?.disabled||void 0),S=i??(v?.readOnly||void 0),C=a??(v?.required||void 0),w=d??(v?.invalid||void 0),T=u({"aria-describedby":v?.describedBy},{"aria-describedby":p})[`aria-describedby`],[E]=(0,U.useState)(t??null),[D,O]=(0,U.useState)(t??null),k=e!==void 0,A=k?e:D,[te,ne]=(0,U.useState)(e);e!==te&&(ne(e),e===void 0&&O(null));let[j,M]=(0,U.useState)([]),re=(0,U.useCallback)(e=>(M(t=>[...t.filter(t=>t.element!==e.element),e].sort(pn)),()=>M(t=>t.filter(t=>t.element!==e.element))),[]),N=j.filter(e=>!e.disabled),P=N.find(e=>e.value===A)??N[0];(0,U.useImperativeHandle)(ee,()=>({focus:()=>P?.element.focus()}),[P]);let F=(0,U.useRef)(null),I=(0,U.useMemo)(()=>c(F,m),[m]),ie=(0,U.useRef)({isControlled:k,selected:A,initialValue:E});return ie.current={isControlled:k,selected:A,initialValue:E},(0,U.useEffect)(()=>{let e=F.current?.closest(`form`);if(!e)return;let t=()=>setTimeout(()=>{let{isControlled:e,selected:t,initialValue:n}=ie.current,r=e?t:n;e||O(n);for(let e of mn(F.current))e.checked=e.value===r});return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[]),(0,W.jsx)(fn,{value:{styles:y,disabled:x,tabStop:P?.value,register:re},children:(0,W.jsx)(ln,{..._,ref:I,value:A,onValueChange:e=>{e!==null&&(k||O(e),n?.(e))},disabled:x,readOnly:S,required:C&&l!==void 0,"aria-required":C||void 0,name:l,"data-slot":`radio-group`,"data-orientation":o,"aria-orientation":o,"aria-invalid":w,"aria-labelledby":b,"aria-describedby":T,className:s(y.root(),h),children:g})})},hn.displayName=`RadioGroup.Root`,gn=({id:e,value:t,disabled:n,className:r,children:i,...a})=>{let o=(0,U.use)(fn),c=(0,U.useId)();if(!o)throw Error(`RadioGroup.Item must be rendered inside RadioGroup.Root.`);let{styles:l,register:u}=o,d=e??c,f=!!(o.disabled||n),p=(0,U.useRef)(null);return(0,U.useLayoutEffect)(()=>{if(p.current)return u({value:t,disabled:f,element:p.current})},[u,t,f]),(0,W.jsx)(`div`,{...a,"data-slot":`radio-group-item`,"data-disabled":f||void 0,className:s(l.item(),r),children:(0,W.jsxs)(`label`,{htmlFor:d,"data-slot":`radio-group-item-label`,className:l.label(),children:[(0,W.jsx)(`span`,{"data-slot":`radio-group-item-control`,className:l.control(),children:(0,W.jsx)(Tt,{nativeButton:!0,render:(0,W.jsx)(`button`,{type:`button`}),ref:p,id:d,value:t,disabled:f,tabIndex:t===o.tabStop?0:-1,"data-slot":`radio-group-radio`,className:l.radio(),children:(0,W.jsx)(Ot,{"data-slot":`radio-group-indicator`,className:l.indicator()})})}),(0,W.jsx)(`span`,{"data-slot":`radio-group-item-text`,className:l.text(),children:i})]})})},gn.displayName=`RadioGroup.Item`;try{dn.displayName=`radioGroupRecipe`,dn.__docgenInfo={description:"Style recipe for RadioGroup. Slots: `root`, `item`, `label` (the clickable row), `control` (24px\nslot for the radio), `radio` (the 16px circle), `indicator` (the dot), `text`.",displayName:`radioGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{orientation:{defaultValue:{value:`vertical`},description:``,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{hn.displayName=`RadioGroup.Root`,hn.__docgenInfo={description:'Single-select list of radios that holds the selected value as a `string`.\nRenders `role="radiogroup"`: name it with `aria-labelledby` or\n`aria-label`, or put it inside a `Field.Root`, which names, describes,\ninvalidates, disables, requires and makes it read-only (the group\'s own\nprops win). Tab enters the group on the selected item, and the arrow keys\nmove the selection.\n\nUse it when the options are few and should all stay visible. For a long\nlist use [Combobox](?path=/docs/components-combobox--docs), for several\nvalues use [CheckboxGroup](?path=/docs/components-checkboxgroup--docs), and\nfor an on/off setting use [Switch](?path=/docs/components-switch--docs).\n\nEvery native `<div>` attribute is forwarded to the group, `aria-invalid`\nincluded: `role="radiogroup"` supports it, and each radio paints the\ndestructive state from it. With react-hook-form, wire it through\n`Controller` (`value`, `onValueChange`, and `field.ref` as `controlRef`),\nnot `register`: the radios\' inputs belong to the group, not to the form\nlibrary.\n\nThe group is a single Tab stop: the selected radio if it is enabled, else\nthe first enabled one. A native form reset puts an uncontrolled group back\non `defaultValue` and a controlled one on its `value`.',displayName:`RadioGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Controlled value of the selected item. `null` leaves every item unselected; `undefined`\nmakes the group uncontrolled.",name:`value`,required:!1,tags:{},type:{name:`string | null`}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Initial value for an uncontrolled group. Leave it out to start with nothing selected.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Fires with the value of the item the user selects.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Disables every item in the group.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Keeps the items focusable but stops the selection from changing.`,name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Marks the group required (`aria-required`). With `name`, the browser also\nblocks a form submission until an item is selected; without it the radios\nare not one native group, so validation is left to the form.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"`vertical` (default) stacks the items; `horizontal` lays them in a row that wraps.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Form field name; the form submits `name=value` for the selected item.",name:`name`,required:!1,tags:{},type:{name:`string`}},controlRef:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Receives `{ focus }`, which moves focus to the radio Tab would land on.\nPass a form library's field ref here (react-hook-form's `field.ref`) so it\ncan focus the group on a failed submit.",name:`controlRef`,required:!1,tags:{},type:{name:`Ref<RadioGroupControl>`}}},tags:{summary:`Single-select radio list holding its selected value as a string`,example:`<span id="payment">Payment plan</span>
<RadioGroup.Root aria-labelledby="payment" defaultValue="monthly" onValueChange={setPlan}>
  <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
  <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
</RadioGroup.Root>`,dataAttribute:`{string} data-orientation - "vertical" | "horizontal"
{string} data-disabled - Present when the whole group is disabled
{string} data-readonly - Present when the group is read-only`}}}catch{}try{gn.displayName=`RadioGroup.Item`,gn.__docgenInfo={description:"One option of a [RadioGroup](?path=/docs/components-radiogroup--docs): a\nradio and its `<label>`, inside `RadioGroup.Root`. Native `<div>`\nattributes go to the row, except `id`, which goes to the radio.",displayName:`RadioGroup.Item`,filePath:`/home/runner/work/design-system/design-system/src/radio-group/radio-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:`Value the group takes when this item is selected.`,name:`value`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"Disables this item only. The group's `disabled` wins over `false`.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/radio-group/radio-group.tsx`,name:`TypeLiteral`}],description:"The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Radio and label for one value of the group`,dataAttribute:`{string} data-disabled - Present when the item or its group is disabled`}}}catch{}})))()}var G;function vn(){return(vn=t((()=>{_n(),G={Root:hn,Item:gn}})))()}var K,q,J,Y,X,yn,Z,bn,Q,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,$,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn;function Kn(){return(Kn=t((()=>{K=n(),Ke(),vn(),d(),We(),q=r(),{expect:J,fn:Y,userEvent:X,waitFor:yn,within:Z}=__STORYBOOK_MODULE_TEST__,bn={title:`Components/RadioGroup`,component:G.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},"aria-invalid":{control:`boolean`},onValueChange:{action:`valueChange`}},args:{"aria-label":`Payment plan`,defaultValue:`monthly`},render:e=>(0,q.jsx)(G.Root,{...e,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),parameters:{docs:{description:{component:"`Root` owns the selected value; each `Item` is a radio with its label."}}}},Q=[{value:`monthly`,label:`Monthly`},{value:`quarterly`,label:`Quarterly`},{value:`annual`,label:`Annual`}],xn={args:{onValueChange:Y()},play:async({args:e,canvasElement:t})=>{let n=Z(t);await J(n.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument(),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(22, 24, 29)`}),await X.click(n.getByRole(`radio`,{name:`Quarterly`})),await J(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await X.click(n.getByText(`Annual`)),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`annual`);let r=n.getByRole(`radio`,{name:`Monthly`});await X.click(r.closest(`[data-slot=radio-group-item-control]`)),await J(r).toBeChecked()}},Sn={args:{orientation:`horizontal`},play:async({canvasElement:e})=>{let t=Z(e),[n,r]=t.getAllByRole(`radio`).map(e=>e.closest(`[data-slot=radio-group-item]`).getBoundingClientRect());await J(t.getByRole(`radiogroup`)).toHaveAttribute(`data-orientation`,`horizontal`),await J(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-orientation`,`horizontal`),await J(r.top).toBe(n.top),await J(r.left-n.right).toBe(24)}},Cn={args:{"aria-label":void 0,defaultValue:void 0},render:e=>(0,q.jsxs)(V.Root,{invalid:!0,required:!0,children:[(0,q.jsxs)(V.Content,{children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(V.Description,{children:`How often the insured pays the premium.`})]}),(0,q.jsx)(G.Root,{...e,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(V.Error,{errors:[{message:`Choose a payment plan`}]})]}),play:async({canvasElement:e})=>{let t=Z(e).getByRole(`radiogroup`,{name:/Payment plan/});await J(t).toHaveAccessibleDescription(/premium.*Choose a payment plan|Choose a payment plan.*premium/),await J(t).toHaveAttribute(`aria-invalid`,`true`),await J(t).toHaveAttribute(`aria-required`,`true`)}},wn={args:{disabled:!0,onValueChange:Y()},play:async({args:e,canvasElement:t})=>{let n=Z(t);for(let e of n.getAllByRole(`radio`))await J(e).toBeDisabled();await J(n.getByText(`Monthly`)).toHaveStyle({color:`rgb(207, 210, 219)`}),await X.click(n.getByText(`Annual`)),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},Tn={args:{onValueChange:Y()},render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly`}),(0,q.jsx)(G.Item,{value:`quarterly`,disabled:!0,children:`Quarterly (not offered by this carrier)`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({args:e,canvasElement:t})=>{let n=Z(t);await J(n.getByRole(`radio`,{name:/Quarterly/})).toBeDisabled(),await X.click(n.getByRole(`radio`,{name:`Monthly`})),await X.keyboard(`{ArrowDown}`),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`annual`)}},En={args:{readOnly:!0,onValueChange:Y()},play:async({args:e,canvasElement:t})=>{let n=Z(t),r=n.getByRole(`radio`,{name:`Annual`});await J(n.getByRole(`radiogroup`)).toHaveAttribute(`aria-readonly`,`true`),await X.click(r),await X.click(n.getByText(`Quarterly`)),await J(n.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(r).not.toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},Dn={args:{"aria-invalid":!0,"aria-describedby":`plan-error`,defaultValue:void 0},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(G.Root,{...e,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(`p`,{id:`plan-error`,className:`text-sm text-text-input-destructive`,children:`Choose a payment plan.`})]}),play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`radiogroup`,{name:`Payment plan`});await J(n).toHaveAttribute(`aria-invalid`,`true`),await J(n).toHaveAccessibleDescription(`Choose a payment plan.`),await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveStyle({borderColor:`rgb(217, 38, 38)`})}},On={render:()=>{let[e,t]=(0,K.useState)(`monthly`);return(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(`annual`),children:`Choose annual`})]}),(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e??`none`]})]})},play:async({canvasElement:e})=>{let t=Z(e);await X.click(t.getByRole(`button`,{name:`Choose annual`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await X.tab(),await J(t.getByRole(`radio`,{name:`Annual`})).toHaveFocus(),await X.click(t.getByRole(`radio`,{name:`Quarterly`})),await J(t.getByRole(`status`)).toHaveTextContent(`quarterly`),await X.click(t.getByRole(`button`,{name:`Clear`}));for(let e of t.getAllByRole(`radio`))await J(e).not.toBeChecked();await J(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},kn={render:()=>{let[e,t]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,required:!0,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e);await X.click(t.getByRole(`button`,{name:`Submit`})),await J(t.queryByRole(`status`)).not.toBeInTheDocument(),await X.click(t.getByRole(`radio`,{name:`Annual`})),await X.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},An={render:()=>{let{control:e,handleSubmit:t}=Ge({defaultValues:{plan:``}}),[n,r]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:t(e=>r(e.plan)),children:[(0,q.jsx)(qe,{name:`plan`,control:e,rules:{required:`Choose a payment plan`},render:({field:e,fieldState:t})=>(0,q.jsxs)(V.Root,{invalid:t.invalid,required:!0,children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(G.Root,{controlRef:e.ref,value:e.value,onValueChange:e.onChange,onBlur:e.onBlur,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(V.Error,{errors:[t.error]})]})}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),n&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=Z(e);await X.click(t.getByRole(`button`,{name:`Submit`})),await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveFocus();let n=t.getByRole(`radiogroup`,{name:/Payment plan/});await J(n).toHaveAccessibleDescription(`Choose a payment plan`),await J(n).toHaveAttribute(`aria-invalid`,`true`),await J(n.getBoundingClientRect().top-n.previousElementSibling.getBoundingClientRect().bottom).toBe(16),await X.keyboard(`{ArrowDown}`),await X.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`quarterly`)}},jn={render:e=>(0,q.jsx)(`div`,{className:`w-60`,children:(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly, charged on the policy's effective day of every month`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]})}),play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`radio`,{name:/Monthly/}),r=t.getByText(/Monthly/),i=n.parentElement.getBoundingClientRect(),a=n.getBoundingClientRect();await J(r.getBoundingClientRect().height).toBeGreaterThan(24),await J(i.top).toBe(r.getBoundingClientRect().top),await J(i.height).toBe(24),await J(a.top-i.top).toBe(4),await J(a.width).toBe(16)}},Mn={render:()=>(0,q.jsx)(`div`,{className:`flex flex-wrap gap-10`,children:[[`Enabled`,{}],[`Disabled`,{disabled:!0}],[`Invalid`,{"aria-invalid":!0}],[`Read-only`,{readOnly:!0}]].map(([e,t])=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,q.jsx)(G.Root,{"aria-label":`${e} payment plan`,defaultValue:`quarterly`,...t,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]},e))})},Nn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{onValueChange:Y()},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsx)(G.Root,{...e,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(f,{variant:`secondary`,children:`Continue`})]}),play:async({args:e,canvasElement:t})=>{let n=Z(t);await X.tab(),await J(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await X.keyboard(`{ArrowDown}`),await J(n.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await J(n.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(e.onValueChange).toHaveBeenLastCalledWith(`quarterly`),await X.keyboard(`{ArrowUp}{ArrowUp}`),await J(n.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await X.tab(),await J(n.getByRole(`button`,{name:`Continue`})).toHaveFocus()}},$={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:void 0,onValueChange:Y()},play:async({args:e,canvasElement:t})=>{let n=Z(t);for(let e of n.getAllByRole(`radio`))await J(e).not.toBeChecked();await X.tab(),await J(n.getByRole(`radio`,{name:`Monthly`})).toHaveFocus(),await J(n.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked(),await J(e.onValueChange).not.toHaveBeenCalled()}},Pn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":void 0,"aria-labelledby":`plan-heading`},render:e=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(`span`,{id:`plan-heading`,className:`text-sm font-semibold text-text-input-normal`,children:`Payment plan`}),(0,q.jsx)(G.Root,{...e,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=Z(e);await J(t.getByRole(`radiogroup`,{name:`Payment plan`})).toBeInTheDocument()}},Fn={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{value:`monthly`,disabled:!0,children:`Monthly (no longer offered)`}),(0,q.jsx)(G.Item,{value:`quarterly`,children:`Quarterly`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=Z(e);await J(t.getByRole(`radio`,{name:/Monthly/})).toBeChecked(),await X.tab(),await J(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus()}},In={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,defaultValue:`monthly`,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,q.jsx)(f,{type:`submit`,children:`Submit`})]}),e&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e);await X.click(t.getByRole(`radio`,{name:`Annual`})),await X.click(t.getByRole(`button`,{name:`Reset`})),await J(t.getByRole(`radio`,{name:`Monthly`})).toBeChecked(),await J(t.getByRole(`radio`,{name:`Annual`})).not.toBeChecked(),await X.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`monthly`)}},Ln={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(`quarterly`),[n,r]=(0,K.useState)(null);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),r(String(new FormData(e.currentTarget).get(`plan`)))},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,name:`plan`,value:e,onValueChange:t,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,q.jsx)(f,{type:`submit`,children:`Submit`})]}),n&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=Z(e);await X.click(t.getByRole(`radio`,{name:`Annual`})),await X.click(t.getByRole(`button`,{name:`Reset`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await X.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`annual`)}},Rn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(!1);return(0,q.jsxs)(`form`,{className:`flex flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(!0)},children:[(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,required:!0,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,q.jsx)(`output`,{className:`text-sm`,children:`Sent`})]})},play:async({canvasElement:e})=>{let t=Z(e);await J(t.getByRole(`radiogroup`)).toHaveAttribute(`aria-required`,`true`),await X.click(t.getByRole(`radio`,{name:`Annual`})),await J(e.querySelector(`form`).checkValidity()).toBe(!0),await X.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`Sent`)}},zn={tags:[`!dev`,`!autodocs`,`!manifest`],render:e=>(0,q.jsxs)(G.Root,{...e,children:[(0,q.jsx)(G.Item,{id:`plan-monthly`,value:`monthly`,children:`Monthly`}),(0,q.jsx)(G.Item,{value:`annual`,children:`Annual`})]}),play:async({canvasElement:e})=>{let t=Z(e);await J(t.getByRole(`radio`,{name:`Monthly`})).toHaveAttribute(`id`,`plan-monthly`),await J(t.getByRole(`radio`,{name:`Annual`}).id).not.toBe(``)}},Bn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{"aria-label":`Plan`,"aria-describedby":`plan-note`,disabled:!1},render:e=>(0,q.jsxs)(V.Root,{disabled:!0,children:[(0,q.jsxs)(V.Content,{children:[(0,q.jsx)(V.Label,{children:`Payment plan`}),(0,q.jsx)(V.Description,{children:`How often the insured pays the premium.`})]}),(0,q.jsx)(`p`,{id:`plan-note`,children:`Changing it starts at the next renewal.`}),(0,q.jsx)(G.Root,{...e,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`radiogroup`,{name:`Plan`});await J(n).not.toHaveAttribute(`aria-labelledby`),await J(n).toHaveAccessibleDescription(`How often the insured pays the premium. Changing it starts at the next renewal.`);for(let e of t.getAllByRole(`radio`))await J(e).toBeEnabled()}},Vn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(``);return(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,q.jsxs)(G.Root,{"aria-label":`Payment plan`,value:e,onValueChange:t,children:[(0,q.jsx)(G.Item,{value:``,children:`None`}),(0,q.jsx)(G.Item,{value:`monthly`,children:`Monthly`})]})]})},play:async({canvasElement:e})=>{let t=Z(e);await J(t.getByRole(`radio`,{name:`None`})).toBeChecked(),await X.click(t.getByRole(`button`,{name:`Clear`})),await J(t.getByRole(`radio`,{name:`None`})).not.toBeChecked(),await J(t.getByRole(`radio`,{name:`Monthly`})).not.toBeChecked()}},Hn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let{control:e,reset:t}=Ge();return(0,q.jsxs)(`div`,{className:`flex flex-col items-start gap-6`,children:[(0,q.jsx)(qe,{name:`plan`,control:e,render:({field:e})=>(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,controlRef:e.ref,value:e.value,onValueChange:e.onChange,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})}),(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(),children:`Reset form`})]})},play:async({canvasElement:e})=>{let t=Z(e);await X.click(t.getByRole(`radio`,{name:`Annual`})),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked(),await X.click(t.getByRole(`button`,{name:`Reset form`}));for(let e of t.getAllByRole(`radio`))await J(e).not.toBeChecked()}},Un={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,K.useState)(null);return(0,K.useEffect)(()=>{t(`annual`)},[]),(0,q.jsx)(G.Root,{"aria-label":`Payment plan`,readOnly:!0,value:e,children:Q.map(({value:e,label:t})=>(0,q.jsx)(G.Item,{value:e,children:t},e))})},play:async({canvasElement:e})=>{let t=Z(e),n=()=>t.getAllByRole(`radio`).filter(e=>e.tabIndex===0);await yn(()=>J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()),await J(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})]),await X.click(t.getByRole(`radio`,{name:`Quarterly`})),await J(n()).toEqual([t.getByRole(`radio`,{name:`Annual`})])}},Wn={tags:[`!dev`,`!autodocs`,`!manifest`],play:async({canvasElement:e})=>{let t=Z(e);await X.click(t.getByText(`Quarterly`)),await J(t.getByRole(`radio`,{name:`Quarterly`})).toBeChecked(),await J(t.getByRole(`radio`,{name:`Quarterly`})).toHaveFocus(),await X.keyboard(`{ArrowDown}`),await J(t.getByRole(`radio`,{name:`Annual`})).toBeChecked()}},xn.parameters={...xn.parameters,docs:{...xn.parameters?.docs,source:{originalSource:`{
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
}`,...xn.parameters?.docs?.source},description:{story:`@summary Uncontrolled group with one item selected`,...xn.parameters?.docs?.description}}},Sn.parameters={...Sn.parameters,docs:{...Sn.parameters?.docs,source:{originalSource:`{
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
}`,...Sn.parameters?.docs?.source},description:{story:`Items laid in a row, 24px apart, wrapping when the row runs out of room.

@summary Items in a row`,...Sn.parameters?.docs?.description}}},Cn.parameters={...Cn.parameters,docs:{...Cn.parameters?.docs,source:{originalSource:`{
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
}`,...Cn.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, label, messages, `invalid`, `required` and\n`disabled` reach the group with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...Cn.parameters?.docs?.description}}},wn.parameters={...wn.parameters,docs:{...wn.parameters?.docs,source:{originalSource:`{
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
}`,...wn.parameters?.docs?.source},description:{story:`@summary Whole group disabled`,...wn.parameters?.docs?.description}}},Tn.parameters={...Tn.parameters,docs:{...Tn.parameters?.docs,source:{originalSource:`{
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
}`,...Tn.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest interactive, and the arrow keys skip
it.

@summary One item disabled`,...Tn.parameters?.docs?.description}}},En.parameters={...En.parameters,docs:{...En.parameters?.docs,source:{originalSource:`{
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
}`,...En.parameters?.docs?.source},description:{story:`The items stay focusable but the selection does not change, by pointer or
by keyboard.

@summary Read-only group`,...En.parameters?.docs?.description}}},Dn.parameters={...Dn.parameters,docs:{...Dn.parameters?.docs,source:{originalSource:`{
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
}`,...Dn.parameters?.docs?.source},description:{story:'`aria-invalid` sits on the group, which `role="radiogroup"` supports, and\nevery radio paints the destructive border from it.\n\n@summary Failed validation on the group',...Dn.parameters?.docs?.description}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`{
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
}`,...On.parameters?.docs?.source},description:{story:`@summary Controlled group whose value is set from outside`,...On.parameters?.docs?.description}}},kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`{
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
}`,...kn.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value` for the selected item, and\n`required` blocks the submission while nothing is selected.\n\n@summary Native form submission",...kn.parameters?.docs?.description}}},An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`{
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
}`,...An.parameters?.docs?.source},description:{story:`With react-hook-form, wire the group through \`Controller\`. Its \`ref\` lets
the form focus the group on a failed submit: focus lands on the radio Tab
would reach.

@summary React Hook Form through Controller`,...An.parameters?.docs?.description}}},jn.parameters={...jn.parameters,docs:{...jn.parameters?.docs,source:{originalSource:`{
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
}`,...jn.parameters?.docs?.source},description:{story:`A long label wraps under itself and the radio stays level with its first
line.

@summary Wrapping label keeps the radio on the first line`,...jn.parameters?.docs?.description}}},Mn.parameters={...Mn.parameters,docs:{...Mn.parameters?.docs,source:{originalSource:`{
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
}`,...Mn.parameters?.docs?.source},description:{story:`Every state of an item side by side, for checking against the design:
enabled, disabled, invalid and read-only, each with one item selected.

@summary Visual comparison of the item states`,...Mn.parameters?.docs?.description}}},Nn.parameters={...Nn.parameters,docs:{...Nn.parameters?.docs,source:{originalSource:`{
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
}`,...Nn.parameters?.docs?.source},description:{story:`Tab enters the group on the selected item and leaves it on the next Tab;
the arrow keys move the selection, wrapping at the ends.

@summary Keyboard navigation and selection`,...Nn.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`With no \`defaultValue\` nothing is selected, and Tab lands on the first item
without selecting it.

@summary Group that starts with nothing selected`,...$.parameters?.docs?.description}}},Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`{
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
}`,...Pn.parameters?.docs?.source},description:{story:`@summary Group named by a visible heading`,...Pn.parameters?.docs?.description}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
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
}`,...Fn.parameters?.docs?.source},description:{story:`When the selected item is disabled, Tab enters the group on the first
enabled item instead, so the group stays reachable by keyboard.

@summary Selected item disabled`,...Fn.parameters?.docs?.description}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`{
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
}`,...In.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled group back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...In.parameters?.docs?.description}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`{
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
}`,...Ln.parameters?.docs?.source},description:{story:`A native form reset leaves a controlled group on its \`value\`, and the form
submits that value too.

@summary Native form reset on a controlled group`,...Ln.parameters?.docs?.description}}},Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`{
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
}`,...Rn.parameters?.docs?.source},description:{story:"Without `name` the radios are not one native group, so `required` only\nmarks the group (`aria-required`) and leaves validation to the form: a\nselection never leaves the form invalid.\n\n@summary Required without a name",...Rn.parameters?.docs?.description}}},zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
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
}`,...zn.parameters?.docs?.source},description:{story:`@summary Item id reaches the radio`,...zn.parameters?.docs?.description}}},Bn.parameters={...Bn.parameters,docs:{...Bn.parameters?.docs,source:{originalSource:`{
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
}`,...Bn.parameters?.docs?.source},description:{story:"`aria-label` and `disabled={false}` on the group win over the field. Its own\n`aria-describedby` joins the field's messages instead of replacing them.\n\n@summary Own props override the Field wiring",...Bn.parameters?.docs?.description}}},Vn.parameters={...Vn.parameters,docs:{...Vn.parameters?.docs,source:{originalSource:`{
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
}`,...Vn.parameters?.docs?.source},description:{story:`An item can carry the empty string, for a "None" choice: \`''\` selects it,
and only \`null\` leaves the group without a selection.

@summary Empty-string value for a None option`,...Vn.parameters?.docs?.description}}},Hn.parameters={...Hn.parameters,docs:{...Hn.parameters?.docs,source:{originalSource:`{
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
}`,...Hn.parameters?.docs?.source},description:{story:`A react-hook-form reset with no default values sets the field back to
\`undefined\`: the group clears instead of keeping the last pick on screen.

@summary Form reset to undefined clears the selection`,...Hn.parameters?.docs?.description}}},Un.parameters={...Un.parameters,docs:{...Un.parameters?.docs,source:{originalSource:`{
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
}`,...Un.parameters?.docs?.source},description:{story:`The group is always one Tab stop, even read-only with a value that arrives
after mount and a press that moves focus to another radio.

@summary Single tab stop when read-only`,...Un.parameters?.docs?.description}}},Wn.parameters={...Wn.parameters,docs:{...Wn.parameters?.docs,source:{originalSource:`{
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
}`,...Wn.parameters?.docs?.source},description:{story:`A press on an item's text focuses that item, so the arrow keys continue
from the one just picked.

@summary Pressing a label focuses its radio`,...Wn.parameters?.docs?.description}}},Gn=[`Default`,`Horizontal`,`InsideField`,`Disabled`,`DisabledItem`,`ReadOnly`,`Invalid`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`AllStates`,`Keyboard`,`NoSelection`,`LabelledByHeading`,`DisabledSelectedItem`,`FormReset`,`FormResetControlled`,`RequiredWithoutName`,`ItemId`,`InsideFieldOverridden`,`EmptyStringOption`,`ResetToUndefined`,`SingleTabStop`,`LabelPressFocus`]})))()}Kn();export{Mn as AllStates,On as Controlled,xn as Default,wn as Disabled,Tn as DisabledItem,Fn as DisabledSelectedItem,Vn as EmptyStringOption,In as FormReset,Ln as FormResetControlled,Sn as Horizontal,kn as InForm,Cn as InsideField,Bn as InsideFieldOverridden,Dn as Invalid,zn as ItemId,Nn as Keyboard,Wn as LabelPressFocus,Pn as LabelledByHeading,jn as LongLabel,$ as NoSelection,En as ReadOnly,Rn as RequiredWithoutName,Hn as ResetToUndefined,Un as SingleTabStop,An as WithReactHookForm,Gn as __namedExportsOrder,bn as default};