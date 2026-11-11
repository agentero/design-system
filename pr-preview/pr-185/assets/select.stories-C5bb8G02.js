import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-ppc_N31f.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./dist-C8AlzbfS.js";import{n as o,t as s}from"./utils-nsk-j2e0.js";import{i as c,n as l,r as u}from"./merge-props-DwFNMBnc.js";import{n as d,t as f}from"./button-Cenn-eiy.js";import{$t as p,Bt as m,C as h,Ct as g,Ft as ee,G as _,H as v,I as y,It as b,L as x,M as S,N as C,Nt as w,O as T,Qt as E,R as D,S as O,Sn as k,St as A,T as j,U as M,W as N,_ as P,_n as F,_t as te,a as I,an as L,at as ne,bn as re,cn as R,dn as z,f as ie,fn as ae,g as B,gn as oe,h as se,hn as ce,i as V,in as le,it as ue,k as de,ln as fe,m as pe,mn as me,mt as he,n as ge,nn as _e,nt as ve,o as ye,p as be,pn as xe,r as Se,rn as Ce,t as we,un as Te,ut as Ee,v as De,vn as Oe,w as ke,wt as Ae,xn as je,y as Me,yn as Ne,z as Pe}from"./useCompositeListItem-B2UxGky-.js";import{$ as Fe,A as Ie,C as Le,Ct as Re,Dt as ze,E as Be,Et as H,F as Ve,G as He,H as Ue,I as We,J as Ge,K as Ke,L as qe,M as Je,N as Ye,O as Xe,Ot as Ze,P as Qe,Q as $e,R as et,S as tt,T as nt,Tt as rt,U as it,V as at,W as ot,X as st,Y as ct,Z as lt,_ as ut,_t as dt,a as ft,at as pt,b as mt,bt as ht,c as gt,ct as _t,d as vt,dt as yt,et as bt,f as xt,g as St,gt as Ct,h as wt,it as Tt,j as Et,k as Dt,kt as Ot,l as kt,lt as At,m as jt,n as Mt,nt as Nt,o as Pt,ot as Ft,p as It,q as Lt,r as Rt,rt as zt,s as Bt,tt as Vt,u as Ht,ut as Ut,vt as Wt,wt as Gt,x as Kt,y as qt,yt as Jt,z as Yt}from"./icons-DSnxwFeq.js";import{C as Xt,O as Zt,S as Qt,d as $t,f as en,k as tn}from"./floating-ui.react-dom-CjeUt2r-.js";import{a as nn,n as rn,t as an}from"./field-DqDzyBpa.js";import{n as on,r as sn}from"./input-BIpaSh1j.js";import{n as cn,t as ln}from"./modal-2G3VHQPV.js";import{n as un,t as dn}from"./popover-DOmj5oG1.js";import{a as fn,r as pn,t as mn}from"./index.esm-dC3QTXwM.js";import{d as hn,n as gn,s as _n}from"./isElementDisabled-9vbcNARx.js";function vn(e){let[t,n]=yn.useState({current:e,previous:null});return Object.is(e,t.current)||n({current:e,previous:t.current}),t.previous}var yn;function bn(){return(bn=t((()=>{yn=e(n(),1)})))()}function xn(){let e=wn.useContext(Tn);if(e===void 0)throw Error(je(60));return e}function Sn(){let e=wn.useContext(En);if(e===void 0)throw Error(je(101));return e}function Cn(){let e=wn.useContext(Dn);if(e===void 0)throw Error(je(61));return e}var wn,Tn,En,Dn;function U(){return(U=t((()=>{k(),wn=e(n(),1),Tn=wn.createContext(void 0),En=wn.createContext(void 0),Dn=wn.createContext(void 0)})))()}var On;function kn(){return(kn=t((()=>{We(),Be(),On={id:e=>e.id,labelId:e=>e.labelId,modal:e=>e.modal,items:e=>e.items,itemToStringLabel:e=>e.itemToStringLabel,isItemEqualToValue:e=>e.isItemEqualToValue,value:e=>e.value,hasSelectedValue:e=>{let{value:t,multiple:n,itemToStringValue:r}=e;return t==null?!1:n&&Array.isArray(t)?t.length>0:Et(t,r)!==``},hasNullItemLabel:(e,t)=>t?nt(e.items):!1,open:e=>e.open,mounted:e=>e.mounted,forceMount:e=>e.forceMount,transitionStatus:e=>e.transitionStatus,openMethod:e=>e.openMethod,activeIndex:e=>e.activeIndex,selectedIndex:e=>e.selectedIndex,isActive:(e,t)=>e.activeIndex===t,isSelected:(e,t)=>{let n=e.isItemEqualToValue,r=e.value;return e.multiple?Array.isArray(r)&&r.some(e=>Je(t,e,n)):Je(t,r,n)},isSelectedByFocus:(e,t)=>e.selectedIndex===t,popupProps:e=>e.popupProps,triggerProps:e=>e.triggerProps,triggerElement:e=>e.triggerElement,positionerElement:e=>e.positionerElement,listElement:e=>e.listElement,popupSide:e=>e.popupSide,scrollUpArrowVisible:e=>e.scrollUpArrowVisible,scrollDownArrowVisible:e=>e.scrollDownArrowVisible,hasScrollArrows:e=>e.hasScrollArrows}})))()}function An(e,t=-(2**53-1),n=2**53-1){return Math.max(t,Math.min(e,n))}function jn(e,t){return Math.max(0,e-t)}function Mn(e,t){if(t<=0)return 0;let n=An(e,0,t),r=n,i=t-n,a=r<=1,o=i<=1;return a&&o?r<=i?0:t:a?0:o?t:n}function Nn(){return(Nn=t((()=>{})))()}function Pn(e){let{id:t,value:n,defaultValue:r=null,onValueChange:i,open:a,defaultOpen:o=!1,onOpenChange:s,name:c,form:l,autoComplete:u,disabled:d=!1,readOnly:f=!1,required:p=!1,modal:m=!0,actionsRef:g,inputRef:ee,onOpenChangeComplete:v,items:y,multiple:b=!1,itemToStringLabel:S,itemToStringValue:C,isItemEqualToValue:w=Ye,highlightItemOnHover:T=!0,children:E}=e,{clearErrors:D}=h(),{setDirty:O,setTouched:k,setFocused:A,validityData:M,setFilled:N,name:F,disabled:I,validation:L,validationMode:ne}=de(),R=P({id:t}),z=I||d,ie=F??c,[B,ce]=re({controlled:n,default:b?r??_e:r,name:`Select`,state:`value`}),[V,ue]=re({controlled:a,default:o,name:`Select`,state:`open`}),pe=W.useRef([]),he=W.useRef([]),ge=W.useRef(null),ye=W.useRef(null),be=W.useRef(0),xe=W.useRef(null),Se=W.useRef([]),we=W.useRef(!1),Ee=W.useRef(null),De=W.useRef(null),ke=W.useRef({allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1,dragY:0}),Ae=W.useRef(!1),je=W.useRef(B),{mounted:Me,setMounted:Ne,transitionStatus:Fe}=Pe(V),{openMethod:Re,triggerProps:Be}=Le(V),H=oe(()=>new Gt({id:R,labelId:void 0,modal:m,multiple:b,itemToStringLabel:S,itemToStringValue:C,isItemEqualToValue:w,value:B,open:V,mounted:Me,transitionStatus:Fe,items:y,forceMount:!1,openMethod:null,activeIndex:null,selectedIndex:null,popupProps:Ce,triggerProps:Ce,triggerElement:null,positionerElement:null,listElement:null,popupSide:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1,hasScrollArrows:!1},{setValue:le,setOpen:le,handleScrollArrowVisibility:le,onOpenChangeComplete:le,listRef:pe,popupRef:ge,scrollHandlerRef:ye,scrollArrowsMountedCountRef:be,valueRef:xe,valuesRef:Se,labelsRef:he,typingRef:we,selectionRef:ke,firstItemTextRef:Ee,selectedItemTextRef:De,alignItemWithTriggerActiveRef:Ae,initialValueRef:je},On)).current,He=H.useState(`activeIndex`),We=H.useState(`selectedIndex`),Ge=H.useState(`triggerElement`),Je=H.useState(`positionerElement`),Xe=vn(Re),Ze=Re??Xe,Qe=W.useMemo(()=>b?``:Et(B,C),[b,B,C]),et=W.useMemo(()=>b&&Array.isArray(B)?B.map(e=>Et(e,C)):Et(B,C),[b,B,C]),tt=ze(Ge),nt=me(()=>et);j(tt,R,B,nt,!z,c);let rt=b?Array.isArray(B)&&B.length>0:B!=null&&Qe!==``;Oe(()=>{N(rt)},[rt,N]),Oe(function(){let e=Ve(Se.current,B,w,b);e===null&&(De.current=null),!V&&H.set(`selectedIndex`,e)},[b,V,B,w,H]),se(B,()=>{D(ie),O(qe(B,M.initialValue,w)),L.change(B)});let it=me((e,t)=>{s?.(e,t),!t.isCanceled&&(ue(e),!e&&(t.reason===`focus-out`||t.reason===`outside-press`)&&(k(!0),A(!1),ne===`onBlur`&&L.commit(B)))}),at=me(()=>{Ne(!1),H.update({activeIndex:null,openMethod:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1}),v?.(!1)});x({enabled:!g,open:V,ref:ge,onComplete(){V||at()}}),W.useImperativeHandle(g,()=>({unmount:at}),[at]);let ct=me((e,t)=>{i?.(e,t),!t.isCanceled&&ce(e)}),lt=me(e=>{let t=jn(e.scrollHeight,e.clientHeight),n=Mn(e.scrollTop,t),r=n>0,i=n<t;H.set(`scrollUpArrowVisible`,r),H.set(`scrollDownArrowVisible`,i)}),ut=Ke({open:V,onOpenChange:it,elements:{reference:Ge,floating:Je}}),dt=$e(ut,{enabled:!z,event:`mousedown`}),ft=st(ut),pt=ot(ut,{enabled:!z,listRef:pe,activeIndex:He,selectedIndex:We,disabledIndices:_e,onNavigate(e){(e!==null||V)&&H.set(`activeIndex`,e)},focusItemOnHover:T}),mt=Ue(ut,{enabled:!z&&(V||!f&&!b),listRef:he,activeIndex:He,selectedIndex:We,disabledIndices:e=>gn(pe.current[e]),onMatch(e){V?H.set(`activeIndex`,e):ct(Se.current[e],ve(te))},onTyping(e){we.current=e}}),ht=W.useMemo(()=>_(mt.reference,pt.reference,ft.reference,dt.reference,Be),[dt.reference,mt.reference,pt.reference,ft.reference,Be]),gt=W.useMemo(()=>_(Lt,mt.floating,pt.floating,ft.floating),[mt.floating,pt.floating,ft.floating]),_t=pt.item??Ce;H.useContextCallback(`setValue`,ct),H.useContextCallback(`setOpen`,it),H.useContextCallback(`handleScrollArrowVisibility`,lt),H.useContextCallback(`onOpenChangeComplete`,v),Ot(()=>{H.update({popupProps:gt,triggerProps:ht})}),H.useSyncedValues({id:R,modal:m,multiple:b,value:B,open:V,mounted:Me,transitionStatus:Fe,popupProps:gt,triggerProps:ht,items:y,itemToStringLabel:S,itemToStringValue:C,isItemEqualToValue:w,openMethod:Ze});let vt=W.useMemo(()=>({disabled:z,readOnly:f,required:p,multiple:b,highlightItemOnHover:T,itemProps:_t}),[z,f,p,b,T,_t]),yt=ae(ee,L.inputRef),bt=b?void 0:ie,xt=W.useMemo(()=>!b||!Array.isArray(B)||!ie?null:B.map(e=>{let t=Et(e,C);return(0,Fn.jsx)(`input`,{type:`hidden`,form:l,name:ie,value:t,disabled:z},t)}),[b,B,l,ie,C,z]);return(0,Fn.jsxs)(Tn.Provider,{value:H,children:[(0,Fn.jsx)(En.Provider,{value:vt,children:(0,Fn.jsx)(Dn.Provider,{value:ut,children:E})}),(0,Fn.jsx)(`input`,{...L.getValidationProps(z,{onFocus(){H.state.triggerElement?.focus({focusVisible:!0})},onChange(e){if(e.nativeEvent.defaultPrevented||z||f)return;let t=e.currentTarget.value,n=ve(te,e.nativeEvent);function r(){if(b)return;let e=t.toLowerCase(),r=Se.current.findIndex(t=>Et(t,C).toLowerCase()===e||Ie(t,S).toLowerCase()===e);r===-1&&(r=Se.current.findIndex((t,n)=>{let r=he.current[n];return r!=null&&r.toLowerCase()===e}));let i=Se.current[r];i!=null&&ct(i,n)}H.set(`forceMount`,!0),queueMicrotask(r)}}),id:R&&bt==null?`${R}-hidden-input`:void 0,form:l,name:bt,autoComplete:u,value:Qe,disabled:z,required:p&&!(b&&rt),readOnly:f,ref:yt,style:ie?Te:fe,tabIndex:-1,"aria-hidden":!0,suppressHydrationWarning:!0}),xt]})}var W,Fn;function In(){return(In=t((()=>{W=e(n(),1),R(),z(),ce(),Ze(),bn(),Ne(),F(),xe(),H(),rt(),L(),lt(),ct(),He(),it(),at(),U(),T(),ke(),B(),D(),kn(),ue(),Ee(),y(),O(),Be(),We(),pe(),tt(),Nn(),Ge(),N(),Fn=r()})))()}var Ln;function Rn(){return(Rn=t((()=>{_t(),Ln=`data-popup-side`})))()}var zn,Bn,Vn,Hn;function Un(){return(Un=t((()=>{zn=e(n(),1),Wt(),H(),U(),T(),De(),_t(),C(),v(),mt(),ee(),Ft(),N(),I(),ue(),Ee(),B(),Rn(),Bn=400,Vn={...Ut,...S,popupSide:e=>e?{[Ln]:e}:null,value:()=>null},Hn=zn.forwardRef(function(e,t){let{render:n,className:r,id:i,disabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{setTouched:l,setFocused:u,validationMode:d,validation:f,state:p,disabled:m}=de(),{labelId:h}=Me(),g=xn(),{readOnly:ee,required:v,disabled:y}=Sn(),b=m||y||a,x=g.useState(`open`),S=g.useState(`mounted`),C=g.useState(`value`),T=g.useState(`triggerProps`),E=g.useState(`positionerElement`),D=g.useState(`listElement`),O=g.useState(`popupSide`),k=g.useState(`id`),A=g.useState(`labelId`),j=g.useState(`hasSelectedValue`),N=S&&E?O:null,F=i??k,I=qt(h,A);P({id:i});let L=ze(E),re=zn.useRef(null),{getButtonProps:R,buttonRef:z}=ye({disabled:b,native:o}),ie=g.useStateSetter(`triggerElement`),ae=Jt(),B=Jt(),oe=Jt();zn.useEffect(()=>{if(x)return oe.start(Bn,()=>{g.context.selectionRef.current.allowUnselectedMouseUp=!0,g.context.selectionRef.current.allowSelectedMouseUp=!0}),()=>{oe.clear()};g.context.selectionRef.current={allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1,dragY:0},B.clear()},[x,g,B,oe]);let se=_(T,{id:F,role:`combobox`,"aria-expanded":x,"aria-haspopup":`listbox`,"aria-controls":x?D?.id??pt(E)?.id:void 0,"aria-labelledby":I,"aria-readonly":ee||void 0,"aria-required":v||void 0,tabIndex:b?-1:0,onFocus(e){u(!0),x&&g.context.alignItemWithTriggerActiveRef.current&&g.context.setOpen(!1,ve(te,e.nativeEvent)),ae.start(0,()=>{g.set(`forceMount`,!0)})},onBlur(e){w(E,e.relatedTarget)||(l(!0),u(!1),d===`onBlur`&&f.commit(C))},onMouseDown(e){if(x)return;let t=Re(e.currentTarget);function n(e){if(!re.current)return;let t=e.target;w(re.current,t)||w(L.current,t)||Kt(e,re.current)||g.context.setOpen(!1,ve(ne,e))}B.start(0,()=>{t.addEventListener(`mouseup`,n,{once:!0})})}},c,R),ce=f.getValidationProps(b,se);ce.role=`combobox`;let V={...p,open:x,disabled:b,value:C,readOnly:ee,popupSide:N,placeholder:!j};return M(`button`,e,{ref:[t,re,z,ie],state:V,stateAttributesMapping:Vn,props:ce})})})))()}var Wn,Gn,Kn;function qn(){return(qn=t((()=>{Wn=e(n(),1),v(),U(),Be(),Gn={value:()=>null},Kn=Wn.forwardRef(function(e,t){let{className:n,render:r,children:i,placeholder:a,style:o,...s}=e,c=xn(),l=c.useState(`value`),u=c.useState(`items`),d=c.useState(`itemToStringLabel`),f=c.useState(`hasSelectedValue`),p=!f&&a!=null&&i==null,m=c.useState(`hasNullItemLabel`,p),h={value:l,placeholder:!f},g=null;return g=typeof i==`function`?i(l):i??(p&&!m?a:Array.isArray(l)?Xe(l,u,d):Dt(l,u,d)),M(`span`,e,{state:h,ref:[t,c.context.valueRef],props:[{children:g},s],stateAttributesMapping:Gn})})})))()}var Jn,Yn;function Xn(){return(Xn=t((()=>{Jn=e(n(),1),v(),U(),_t(),Yn=Jn.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o={open:xn().useState(`open`)};return M(`span`,e,{state:o,ref:t,props:[{"aria-hidden":!0,children:`▼`},a],stateAttributesMapping:yt})})})))()}var Zn,Qn,$n;function er(){return(er=t((()=>{Zn=e(n(),1),Nt(),U(),Qn=r(),$n=Zn.forwardRef(function(e,t){let n=xn(),r=n.useState(`mounted`),i=n.useState(`forceMount`);return r||i?(0,Qn.jsx)(Vt,{ref:t,...e}):null})})))()}function tr(){let e=nr.useContext(rr);if(!e)throw Error(je(59));return e}var nr,rr;function ir(){return(ir=t((()=>{k(),nr=e(n(),1),rr=nr.createContext(void 0)})))()}function ar(e,t){e&&Object.assign(e.style,t)}var or;function sr(){return(sr=t((()=>{or={position:`relative`,maxHeight:`100%`,overflowX:`hidden`,overflowY:`auto`}})))()}var cr,lr,ur,dr;function fr(){return(fr=t((()=>{cr=e(n(),1),ut(),F(),xe(),U(),V(),jt(),ir(),It(),Tt(),sr(),ue(),Ee(),We(),gt(),Pt(),lr=r(),ur={position:`fixed`},dr=cr.forwardRef(function(e,t){let{anchor:n,className:r,render:i,positionMethod:a,side:o,align:s,sideOffset:c,alignOffset:l,collisionBoundary:u=`clipping-ancestors`,collisionPadding:d,arrowPadding:f,sticky:p,disableAnchorTracking:m,alignItemWithTrigger:h=!0,collisionAvoidance:g=zt,style:ee,..._}=e,v=xn(),y=Cn(),b=v.useState(`open`),x=v.useState(`mounted`),S=v.useState(`modal`),C=v.useState(`value`),w=v.useState(`openMethod`),T=v.useState(`positionerElement`),E=v.useState(`triggerElement`),D=v.useState(`isItemEqualToValue`),O=v.useState(`transitionStatus`),k=cr.useRef(null),A=cr.useRef(null),[j,M]=cr.useState(h),N=x&&j&&w!==`touch`;!x&&j!==h&&M(h),cr.useImperativeHandle(v.context.alignItemWithTriggerActiveRef,()=>N),Bt((N||S)&&b,w===`touch`,T,E);let P=wt({anchor:n,floatingRootContext:y,positionMethod:a,mounted:x,side:o,sideOffset:c,align:s,alignOffset:l,arrowPadding:f,collisionBoundary:u,collisionPadding:d,sticky:p,disableAnchorTracking:m??N,collisionAvoidance:g,keepMounted:!0}),F=N?`none`:P.side,I=N?ur:P.positionerStyles,L={open:b,side:F,align:P.align,anchorHidden:P.anchorHidden};Oe(()=>{v.set(`popupSide`,P.side)},[v,P.side]);let ne=v.useStateSetter(`positionerElement`),re=kt(e,L,{styles:I,transitionStatus:O,props:_,refs:[t,ne],hidden:!x,inert:!b}),R=cr.useRef(0),z=me(e=>{if(v.context.valuesRef.current.length===0)return;let t=R.current;R.current=e.size;let n=ve(te);if(t!==0&&!v.state.multiple&&C!==null&&Qe(v.context.valuesRef.current,C,D)===-1){let e=v.context.initialValueRef.current,t=e!=null&&Qe(v.context.valuesRef.current,e,D)!==-1?e:null;v.context.setValue(t,n),t===null&&(v.set(`selectedIndex`,null),v.context.selectedItemTextRef.current=null)}if(t!==0&&v.state.multiple&&Array.isArray(C)){let e=C.filter(e=>Qe(v.context.valuesRef.current,e,D)!==-1);e.length!==C.length&&(v.context.setValue(e,n),e.length===0&&(v.set(`selectedIndex`,null),v.context.selectedItemTextRef.current=null))}if(b&&N){v.update({scrollUpArrowVisible:!1,scrollDownArrowVisible:!1});let e={height:``};ar(T,e),ar(v.context.popupRef.current,e)}}),ie=cr.useMemo(()=>({...P,side:F,alignItemWithTriggerActive:N,setControlledAlignItemWithTrigger:M,scrollUpArrowRef:k,scrollDownArrowRef:A}),[P,F,N,M]);return(0,lr.jsx)(Se,{elementsRef:v.context.listRef,labelsRef:v.context.labelsRef,onMapChange:z,children:(0,lr.jsxs)(rr.Provider,{value:ie,children:[x&&S&&(0,lr.jsx)(xt,{inert:St(!b),cutout:E}),re]})})})})))()}var pr,mr,hr;function gr(){return(gr=t((()=>{pr=r(),mr=`base-ui-disable-scrollbar`,hr={className:mr,getElement(e){return(0,pr.jsx)(`style`,{nonce:e,href:mr,precedence:`base-ui:low`,children:`.${mr}{scrollbar-width:none}.${mr}::-webkit-scrollbar{display:none}`})}}})))()}function _r(e){let t=vr.useContext(yr);if(t===void 0&&!e)throw Error(je(69));return t}var vr,yr;function br(){return(br=t((()=>{k(),vr=e(n(),1),yr=vr.createContext(void 0)})))()}function xr(){return Sr.useContext(Cr)??wr}var Sr,Cr,wr;function Tr(){return(Tr=t((()=>{Sr=e(n(),1),Cr=Sr.createContext(void 0),wr={disableStyleElements:!1}})))()}var Er;function Dr(){return(Dr=t((()=>{Er=`--transform-origin`})))()}function Or(e){let t=e.maxHeight;return t.endsWith(`px`)&&parseFloat(t)||1/0}function kr(e){return jn(e.scrollHeight,e.clientHeight)}function Ar(e){return en.getScale(e)}function jr(e,t,n){return e/n[t]}function Mr(e,t){return Xt({x:jr(e.x,`x`,t),y:jr(e.y,`y`,t),width:jr(e.width,`x`,t),height:jr(e.height,`y`,t)})}function Nr(e){let{style:t}=e,n={};for(let[e,r]of Rr)n[e]=t.getPropertyValue(e),t.setProperty(e,r,`important`);return()=>{for(let[e]of Rr){let r=n[e];r?t.setProperty(e,r):t.removeProperty(e)}}}var Pr,Fr,Ir,Lr,Rr;function zr(){return(zr=t((()=>{Pr=e(n(),1),Qt(),Ct(),xe(),tn(),F(),E(),bt(),$t(),U(),_t(),ir(),gr(),g(),y(),v(),sr(),ue(),Ee(),br(),hn(),vt(),Nn(),Tr(),ie(),Dr(),Fr=r(),Ir={...At,...Ae},Lr=Pr.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,...o}=e,s=xn(),{multiple:c,readOnly:l,highlightItemOnHover:u}=Sn(),d=Cn(),{side:f,align:m,alignItemWithTriggerActive:h,isPositioned:g,setControlledAlignItemWithTrigger:ee}=tr(),_=_r(!0)!=null,v=be(),{nonce:y,disableStyleElements:b}=xr(),S=s.useState(`id`),C=s.useState(`open`),w=s.useState(`openMethod`),T=s.useState(`mounted`),E=s.useState(`popupProps`),D=s.useState(`transitionStatus`),O=s.useState(`triggerElement`),k=s.useState(`positionerElement`),j=s.useState(`listElement`),N=Pr.useRef(!1),P=Pr.useRef(!1),F=Pr.useRef({}),te=p(),I=me(e=>{if(!k||!s.context.popupRef.current||!P.current)return;let t=k.style.top===`0px`,n=k.style.bottom===`0px`;if(N.current||!h||!t&&!n){s.context.handleScrollArrowVisibility(e);return}let r=Ar(k),i=jr(k.getBoundingClientRect().height,`y`,r),a=Re(k),o=Zt(k),c=o.getComputedStyle(k),l=parseFloat(c.marginTop),u=parseFloat(c.marginBottom),d=Or(o.getComputedStyle(s.context.popupRef.current)),f=Math.min(a.documentElement.clientHeight-l-u,d),p=e.scrollTop,m=kr(e),g=null,ee=e=>{k.style.height=`${e}px`},_=t?m-p:p,v=Math.min(i+_,f);if(_<=1){let n=An(_,0,f-i);n>0&&ee(i+n),e.scrollTop=t?m:0,f-(i+n)<=1&&(N.current=!0),s.context.handleScrollArrowVisibility(e);return}f-v>1?g=t?1/0:0:n&&p<m&&(g=p-(_-(i+_-f)));let y=Math.ceil(v);if(y!==0&&ee(y),g!=null){let t=An(g,0,kr(e));Math.abs(e.scrollTop-t)>1&&(e.scrollTop=t)}y>=f-1&&(N.current=!0),s.context.handleScrollArrowVisibility(e)});Pr.useImperativeHandle(s.context.scrollHandlerRef,()=>I,[I]),x({open:C,ref:s.context.popupRef,onComplete(){C&&s.context.onOpenChangeComplete(!0)}});let L={open:C,transitionStatus:D,side:f,align:m};Oe(()=>{k&&s.context.popupRef.current&&!Object.keys(F.current).length&&(F.current={top:k.style.top||`0`,left:k.style.left||`0`,right:k.style.right,height:k.style.height,bottom:k.style.bottom,minHeight:k.style.minHeight,maxHeight:k.style.maxHeight,marginTop:k.style.marginTop,marginBottom:k.style.marginBottom})},[s,k]),Oe(()=>{C||h||(P.current=!1,N.current=!1,ar(k,F.current))},[C,h,k]),Oe(()=>{let e=s.context.popupRef.current;if(!C||!O||!k||!e||h&&!g||s.state.transitionStatus===`ending`)return;if(P.current=!0,e.style.removeProperty(Er),!h){te.request(()=>s.context.handleScrollArrowVisibility(j||e));return}let t=Nr(e);try{let t=s.context.selectedItemTextRef.current;t?.isConnected||(t=!s.select(`hasSelectedValue`)&&s.context.firstItemTextRef.current?.isConnected?s.context.firstItemTextRef.current:null);let n=s.context.valueRef.current,r=Zt(k),i=r.getComputedStyle(k),a=r.getComputedStyle(e),o=Re(O),c=Ar(O),l=Mr(O.getBoundingClientRect(),c),d=Mr(k.getBoundingClientRect(),c),f=l.height,p=j||e,m=p.scrollHeight,h=parseFloat(a.borderBottomWidth),g=parseFloat(i.marginTop)||10,_=parseFloat(i.marginBottom)||10,y=parseFloat(i.minHeight)||100,b=Or(a),x=o.documentElement.clientHeight-g-_,S=o.documentElement.clientWidth,C=x-l.bottom+f,w,T=v===`rtl`?l.right-d.width:l.left,E=0;if(t&&n){let e=Mr(n.getBoundingClientRect(),c);w=Mr(t.getBoundingClientRect(),c),T=d.left+(v===`rtl`?e.right-w.right:e.left-w.left);let r=e.top-l.top+e.height/2;E=w.top-d.top+w.height/2-r}let D=C+E+_+h,A=Math.min(x,D),M=x-g-_,P=D-A,te=S-5;k.style.left=`${An(T,5,te-d.width)}px`,k.style.height=`${A}px`,k.style.maxHeight=`none`,k.style.marginTop=`${g}px`,k.style.marginBottom=`${_}px`,e.style.height=`100%`;let I=kr(p),L=P>=I-1;L&&(A=Math.min(x,d.height)-(P-I));let ne=l.top<20||l.bottom>x-20||Math.ceil(A)+1<Math.min(m,y),re=(r.visualViewport?.scale??1)!==1&&dt;if(ne||re){ar(k,F.current),ee(!1);return}let R=Math.max(y,A);if(L){let e=Math.max(0,x-D);k.style.top=d.height>=M?`0`:`${e}px`,k.style.height=`${A}px`,p.scrollTop=kr(p)}else k.style.bottom=`0`,p.scrollTop=P;if(w){let t=d.top,n=d.height,r=w.top+w.height/2,i=An(n>0?(r-t)/n*100:50,0,100);e.style.setProperty(Er,`50% ${i}%`)}(R===x||A>=b)&&(N.current=!0),s.context.handleScrollArrowVisibility(p),u&&s.state.selectedIndex===null&&s.state.activeIndex===null&&s.context.listRef.current[0]!=null&&s.set(`activeIndex`,0)}finally{t()}},[s,C,k,O,h,ee,te,j,u,v,g]),Pr.useEffect(()=>{if(!h||!k||!C)return;let e=Zt(k);function t(e){s.context.setOpen(!1,ve(A,e))}return ht(e,`resize`,t)},[s,h,k,C]);let ne={...j?{role:`presentation`}:{role:`listbox`,"aria-multiselectable":c||void 0,"aria-readonly":l||void 0,id:`${S}-list`},onKeyDown(e){_&&_n.has(e.key)&&e.stopPropagation()},onScroll(e){j||I(e.currentTarget)},...h&&{style:j?{height:`100%`}:or},className:!j&&h?hr.className:void 0},re=M(`div`,e,{ref:[t,s.context.popupRef],state:L,stateAttributesMapping:Ir,props:[E,ne,Ht(D),o]});return(0,Fr.jsxs)(Pr.Fragment,{children:[!b&&hr.getElement(y),(0,Fr.jsx)(Fe,{context:d,modal:!1,disabled:!T,openInteractionType:w,returnFocus:a,restoreFocus:!0,children:re})]})}),Rr=[[`transform`,`none`],[`scale`,`1`],[`translate`,`0 0`]]})))()}var Br,Vr;function Hr(){return(Hr=t((()=>{Br=e(n(),1),U(),ir(),v(),gr(),sr(),Vr=Br.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=xn(),{multiple:s,readOnly:c}=Sn(),{alignItemWithTriggerActive:l}=tr(),u=o.useState(`hasScrollArrows`),d=o.useState(`openMethod`),f={id:`${o.useState(`id`)}-list`,role:`listbox`,"aria-multiselectable":s||void 0,"aria-readonly":c||void 0,onScroll(e){o.context.scrollHandlerRef.current?.(e.currentTarget)},...l&&{style:or},className:u&&d!==`touch`?hr.className:void 0},p=o.useStateSetter(`listElement`);return M(`div`,e,{ref:[t,p],props:[f,a]})})})))()}function Ur(){let e=Wr.useContext(Gr);if(!e)throw Error(je(57));return e}var Wr,Gr;function Kr(){return(Kr=t((()=>{k(),Wr=e(n(),1),Gr=Wr.createContext(void 0)})))()}var qr,Jr,Yr;function Xr(){return(Xr=t((()=>{qr=e(n(),1),F(),U(),we(),v(),Kr(),I(),ue(),Ee(),We(),b(),Jr=r(),Yr=qr.memo(qr.forwardRef(function(e,t){let{render:n,className:r,style:i,value:a=null,label:o,disabled:s=!1,nativeButton:c=!1,...l}=e,u=qr.useRef(null),d=ge({guess:!0,label:o,textRef:u}),f=xn(),{itemProps:p,multiple:h,disabled:g,readOnly:ee}=Sn(),_=g||s,v=f.useState(`isActive`,d.index),y=f.useState(`open`),b=f.useState(`isSelected`,a),x=f.useState(`isSelectedByFocus`,d.index),S=f.useState(`isItemEqualToValue`),C=d.index,w=qr.useRef(null);Oe(()=>{let e=f.context.valuesRef.current;return e[C]=a,()=>{delete e[C]}},[C,a,f]),Oe(()=>{let e=f.state.value,t=f.state.selectedIndex,n=t,r;h&&Array.isArray(e)?(n=Yt(C,a,f.context.valuesRef.current,e,S,t),r=n===C,C===t&&!r&&(f.context.selectedItemTextRef.current=null)):(r=e!==void 0&&Je(a,e,S),r&&(n=C)),f.set(`selectedIndex`,n),r&&u.current&&(f.context.selectedItemTextRef.current=u.current)},[C,h,S,f,a]);let T=qr.useRef(`mouse`),E=qr.useRef(!1),{getButtonProps:D,buttonRef:O}=ye({disabled:_,focusableWhenDisabled:!0,native:c,composite:!0}),k={disabled:_,selected:b,highlighted:v};function A(e){if(g||ee)return;let t=f.state.value;if(h){let n=Array.isArray(t)?t:[],r=b?et(n,a,S):[...n,a];f.context.setValue(r,ve(he,e))}else f.context.setValue(a,ve(he,e)),f.context.setOpen(!1,ve(he,e))}function j(){f.context.selectionRef.current.dragY=0}let N={role:`option`,"aria-selected":b,tabIndex:y&&v?0:-1,onKeyDown(e){f.set(`activeIndex`,C),e.key===` `&&f.context.typingRef.current&&e.preventDefault()},onClick(e){let t=T.current!==`touch`,n=e.nativeEvent.pointerType,r=t&&m(e.nativeEvent)&&(n!==void 0||v),i=t&&!r&&!E.current;E.current=!1,!(_||i)&&A(e.nativeEvent)},onPointerEnter(e){T.current=e.pointerType},onPointerMove(e){if(e.pointerType===`mouse`&&e.buttons===1){let t=f.context.selectionRef.current;t.dragY+=e.movementY,t.dragY**2>=64&&(t.allowUnselectedMouseUp=!0)}},onPointerDown(e){T.current=e.pointerType,E.current=!0,j()},onMouseUp(){if(j(),_||T.current===`touch`||E.current)return;let e=!f.context.selectionRef.current.allowSelectedMouseUp&&b,t=!f.context.selectionRef.current.allowUnselectedMouseUp&&!b;e||t||(E.current=!0,w.current?.click(),E.current=!1)}},P=M(`div`,e,{ref:[O,t,d.ref,w],state:k,props:[p,N,l,D]}),F=qr.useMemo(()=>({selected:b,index:C,textRef:u,selectedByFocus:x}),[b,C,u,x]);return(0,Jr.jsx)(Gr.Provider,{value:F,children:P})}))})))()}var Zr,Qr,$r,ei;function ti(){return(ti=t((()=>{Zr=e(n(),1),Kr(),D(),y(),v(),g(),Qr=r(),$r=Zr.forwardRef(function(e,t){let{selected:n}=Ur();return e.keepMounted||n?(0,Qr.jsx)(ei,{...e,ref:t}):null}),ei=Zr.memo(Zr.forwardRef((e,t)=>{let{render:n,className:r,style:i,keepMounted:a,...o}=e,{selected:s}=Ur(),c=Zr.useRef(null),{transitionStatus:l,setMounted:u}=Pe(s),d=M(`span`,e,{ref:[t,c],state:{selected:s,transitionStatus:l},props:[{"aria-hidden":!0,children:`✔️`},o],stateAttributesMapping:Ae});return x({batch:!0,enabled:!s,open:s,ref:c,onComplete(){s||u(!1)}}),d}))})))()}var ni,ri;function ii(){return(ii=t((()=>{ni=e(n(),1),U(),Kr(),v(),ri=ni.memo(ni.forwardRef(function(e,t){let{index:n,textRef:r,selectedByFocus:i}=Ur(),a=xn(),{render:o,className:s,style:c,...l}=e,u=ni.useCallback(e=>{e&&(n===0&&(a.context.firstItemTextRef.current=e),i&&(a.context.selectedItemTextRef.current=e))},[a,n,i]);return M(`div`,e,{ref:[u,t,r],props:l})}))})))()}var ai,G,oi,si,ci,li,ui,di,fi,pi;function mi(){return(mi=t((()=>{ai=n(),In(),Un(),qn(),Xn(),er(),fr(),zr(),Hr(),Xr(),ii(),ti(),a(),o(),l(),ft(),rn(),on(),G=r(),oi=i({slots:{trigger:[`flex cursor-pointer items-center gap-2 pe-3 text-start`,`data-readonly:cursor-default`,`data-popup-open:border-border-input-focus data-popup-open:outline-border-input-focus`,`data-popup-open:outline-[0.125rem] data-popup-open:outline-offset-[-0.0625rem]`,`aria-invalid:data-popup-open:border-border-input-destructive`,`aria-invalid:data-popup-open:outline-border-input-destructive`],value:`min-w-0 flex-1 truncate data-placeholder:text-text-input-placeholder`,icon:[`flex size-5 shrink-0 items-center justify-center transition-transform duration-150 motion-reduce:transition-none`,`[&_path]:fill-icon-input-default group-data-popup-open/select-trigger:rotate-180`,`group-disabled/select-trigger:[&_path]:fill-icon-input-disable`],content:[`flex w-(--anchor-width) max-h-[min(18rem,var(--available-height))] flex-col overflow-hidden`,`rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-lg`,`outline-none`],list:`min-h-0 flex-1 overflow-y-auto scroll-py-2 py-2 outline-none`,item:[`group/item relative mx-2 my-px flex cursor-pointer items-center rounded-[calc(var(--radius-md)-2px)]`,`py-2 ps-3 pe-9 text-sm text-text-default-base-primary outline-none select-none`,`data-highlighted:bg-bg-default-base-primary-hover`,`data-disabled:cursor-default data-disabled:text-text-default-base-tertiary`],indicator:[`pointer-events-none absolute end-3 flex size-4 items-center justify-center`,`text-text-default-base-primary group-data-disabled/item:text-text-default-base-tertiary`]}}),si=oi(),ci=(0,ai.createContext)(null),li=`[data-slot=modal-content], [data-slot=popover-content]`,ui=({disabled:e,readOnly:t,required:n,...r})=>{let i=nn(),[a,o]=(0,ai.useState)(null),[s,c]=(0,ai.useState)(0);(0,ai.useEffect)(()=>{let e=a?.closest(`form`);if(!e)return;let t=()=>c(e=>e+1);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[a]);let l=(0,ai.useMemo)(()=>({trigger:a,setTrigger:o}),[a]);return(0,G.jsx)(ci,{value:l,children:(0,G.jsx)(Pn,{...r,disabled:e??i?.disabled,readOnly:t??i?.readOnly,required:n??i?.required},s)})},ui.displayName=`Select.Root`,di=({size:e=`md`,placeholder:t,children:n,className:r,ref:i,...a})=>{let o=nn(),l=(0,ai.use)(ci)?.setTrigger,d=(0,ai.useMemo)(()=>c(l,i),[l,i]);return(0,G.jsxs)(Hn,{...u({id:o?.controlId,"aria-labelledby":o&&a[`aria-label`]===void 0?o.labelId:void 0,"aria-describedby":o?.describedBy,"aria-invalid":o?.invalid||void 0},a),ref:d,"data-slot":`select-trigger`,"data-size":e,className:s(sn({size:e}),`group/select-trigger`,si.trigger(),r),children:[(0,G.jsx)(Kn,{"data-slot":`select-value`,placeholder:t,className:si.value(),children:n}),(0,G.jsx)(Yn,{"data-slot":`select-icon`,className:si.icon(),children:(0,G.jsx)(Rt,{className:`size-5`})})]})},di.displayName=`Select.Trigger`,fi=({side:e=`bottom`,align:t=`start`,sideOffset:n=8,alignOffset:r,collisionPadding:i=8,"aria-label":a,"aria-labelledby":o,className:c,children:l,...u})=>{let d=nn(),f=(0,ai.use)(ci)?.trigger;if(!f)return null;let p=d&&f.ownerDocument.getElementById(d.labelId)?d.labelId:void 0,m=o??(a===void 0?p:void 0),h=a??(m===void 0?`Options`:void 0),g=f.closest(li)??void 0;return(0,G.jsx)($n,{container:g,children:(0,G.jsx)(dr,{alignItemWithTrigger:!1,side:e,align:t,sideOffset:n,alignOffset:r,collisionPadding:i,className:`isolate z-(--z-index-top-layer) pointer-events-auto`,children:(0,G.jsx)(Lr,{...u,"data-slot":`select-content`,className:s(si.content(),c),children:(0,G.jsx)(Vr,{"data-slot":`select-list`,"aria-label":h,"aria-labelledby":m,className:si.list(),children:l})})})})},fi.displayName=`Select.Content`,pi=({className:e,children:t,...n})=>(0,G.jsxs)(Yr,{...n,"data-slot":`select-item`,className:s(si.item(),e),children:[(0,G.jsx)(ri,{className:`min-w-0 flex-1 truncate`,children:t}),(0,G.jsx)($r,{"data-slot":`select-item-indicator`,className:si.indicator(),children:(0,G.jsx)(Mt,{className:`size-4`})})]}),pi.displayName=`Select.Item`;try{oi.displayName=`selectRecipe`,oi.__docgenInfo={description:"Style recipe for Select. Slots: `trigger` (the closed field), `value`, `icon` (the chevron),\n`content` (the floating surface), `list`, `item` and `indicator` (the check on the selected\nrow). The trigger wears `Input`'s recipe; the surface and rows match `Combobox`'s.",displayName:`selectRecipe`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the Select trigger, surface and rows`}}}catch{}try{ui.displayName=`Select.Root`,ui.__docgenInfo={description:"Root of a select: a button that opens a list of options and shows the one\npicked. Use it for a pick from a short, known list, where typing would add\nnothing. For a long list or one the user searches, use\n[Combobox](?path=/docs/components-combobox--docs); for a handful of options\nthat should all stay visible, use\n[RadioGroup](?path=/docs/components-radiogroup--docs).\n\nPass the options as `items` (`{ value, label }`) so the trigger shows the\npicked option's label rather than its value. With `name`, the form submits\n`name=value`, and `required` blocks the submission until something is picked.\n\nInside a `Field.Root`, `disabled`, `readOnly` and `required` default to the\nfield's, and the trigger takes its label, description and error. Every Base\nUI root prop is accepted and forwarded — `value`, `defaultValue`,\n`onValueChange`, `open` and so on. A native form reset puts an uncontrolled\nselect back on its `defaultValue`.\n\nWith react-hook-form, wire it through `Controller` and render the form with\n`noValidate`, as `Form.Root` does: a required select also sets the native\n`required`, and the browser would otherwise block the submit before the\nform library validates.",displayName:`Select.Root`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{},tags:{summary:`Root of a single-select dropdown picking from a short list`,see:`{@link https://base-ui.com/react/components/select Base UI Select}`,example:`<Select.Root items={plans} defaultValue="monthly" name="plan">
  <Select.Trigger placeholder="Select a plan" />
  <Select.Content>
    {plans.map(plan => (
      <Select.Item key={plan.value} value={plan.value}>
        {plan.label}
      </Select.Item>
    ))}
  </Select.Content>
</Select.Root>`}}}catch{}try{di.displayName=`Select.Trigger`,di.__docgenInfo={description:"The closed field: a button drawn as an `Input`, showing the picked option\n(or `placeholder`) and a chevron. Click, Enter, Space or the arrow keys\nopen the list, and so does a click on the field's `<label>`. While the list\nis open the focus is on the options, and the field keeps its focus ring.\n\nInside a `Field.Root` it takes the field's `id`, label, description and\n`invalid` with nothing passed by hand, and its own props win. Outside one,\ngive it an `aria-label` or point a `Label` at its `id`. Native button\nattributes are forwarded, and its `ref` reaches the button, so a form\nlibrary can focus the field on a failed submit.",displayName:`Select.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: SelectTriggerState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectTriggerState>`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Classes for the trigger, merged after its own.`,name:`className`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:"Control height, matching `Input`. Defaults to `'md'`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},placeholder:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Text shown while nothing is picked.`,name:`placeholder`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:"Renders the picked value. Defaults to the label of the matching entry in\nthe root's `items`.",name:`children`,required:!1,tags:{},type:{name:`ReactNode | ((value: any) => ReactNode)`}}},tags:{summary:`Button drawn as an input, showing the picked option and a chevron`,dataAttribute:`{string} data-slot - Always set to "select-trigger"
{string} data-popup-open - Present while the list is open
{string} data-placeholder - Present while nothing is picked`}}}catch{}try{fi.displayName=`Select.Content`,fi.__docgenInfo={description:"The floating list, the same surface as the `Combobox` list. It portals to\nthe body, matches the trigger's width, opens below it and caps its height\nto the room available, so a long list scrolls. Inside a `Modal` or a\n`Popover` it renders into that layer instead, so the layer's focus trap and\noutside press leave the list alone, and Escape closes the list first.\n\nInside a `Field.Root` with a `Field.Label` the list is named after that\nlabel; otherwise it is named \"Options\". Pass `aria-label` or\n`aria-labelledby` to name it after the field when a page has more than one\nselect.",displayName:`Select.Content`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: SelectPopupState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectPopupState>`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Classes for the surface, merged after its own.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Floating surface holding the options`,dataAttribute:`{string} data-slot - Always set to "select-content"`}}}catch{}try{pi.displayName=`Select.Item`,pi.__docgenInfo={description:"One option. `value` is what the select stores and submits; the children are\nthe label shown in the row and, through the root's `items`, in the trigger.\nThe picked row carries a check at its end. A `disabled` row is greyed out\nand cannot be picked, but the arrow keys still stop on it, so it is\nannounced.",displayName:`Select.Item`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: SelectItemState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectItemState>`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Classes for the row, merged after its own.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Option row inside the list`,dataAttribute:`{string} data-slot - Always set to "select-item"
{string} data-selected - Present on the picked row
{string} data-highlighted - Present on the row under the pointer or the keyboard`}}}catch{}})))()}var K;function hi(){return(hi=t((()=>{mi(),K={Root:ui,Trigger:di,Content:fi,Item:pi}})))()}var gi,q,J,_i,vi,Y,X,Z,Q,yi,$,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi;function Ii(){return(Ii=t((()=>{gi=n(),pn(),hi(),d(),rn(),cn(),un(),q=r(),{expect:J,fn:_i,screen:vi,userEvent:Y,waitFor:X,within:Z}=__STORYBOOK_MODULE_TEST__,Q=[{value:`AZ`,label:`Arizona`},{value:`CA`,label:`California`},{value:`FL`,label:`Florida`},{value:`GA`,label:`Georgia`},{value:`NY`,label:`New York`},{value:`TX`,label:`Texas`}],yi={title:`Components/Select`,component:K.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:"Select is a button that opens a list of options and shows the one picked.\nUse it for a pick from a short, known list, where typing would add nothing.\nFor a long list or one the user searches, use Combobox; for a handful of\noptions that should all stay visible, use RadioGroup. `Root` owns the picked\nvalue; `Trigger` is the closed field and `Content` the list of `Item`s."}}},decorators:[e=>(0,q.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,q.jsx)(e,{})})],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:"Control height of the trigger, matching `Input`. Set on `Select.Trigger`."},placeholder:{control:`text`,description:"Text the trigger shows while nothing is picked. Set on `Select.Trigger`."},items:{control:`object`,description:"The options as `{ value, label }`, so the trigger shows the picked label rather than its value."},disabled:{control:`boolean`,description:"Blocks the whole select. Defaults to the surrounding `Field.Root`."},readOnly:{control:`boolean`,description:"The list still opens, but the value cannot change. Defaults to the surrounding `Field.Root`."},required:{control:`boolean`,description:"Blocks a native form submission until something is picked. Defaults to the surrounding `Field.Root`."},onValueChange:{action:`valueChange`,description:`Called with the picked value and Base UI event details.`}},args:{items:Q,size:`md`,placeholder:`Select a state`},render:({items:e,size:t,placeholder:n,...r})=>(0,q.jsxs)(K.Root,{...r,items:e,children:[(0,q.jsx)(K.Trigger,{"aria-label":`State`,size:t,placeholder:n}),(0,q.jsx)(K.Content,{children:e.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]})},$=async e=>(await Y.click(e),vi.findByRole(`listbox`)),bi=async()=>{await Y.keyboard(`{Escape}`),await X(()=>J(vi.queryByRole(`listbox`)).not.toBeInTheDocument())},xi={args:{onValueChange:_i()},play:async({args:e,canvasElement:t})=>{let n=Z(t).getByRole(`combobox`,{name:`State`});await J(n).toHaveTextContent(`Select a state`);let r=await $(n);await J(r).toHaveAccessibleName(`Options`),await J(r.scrollHeight).toBe(r.clientHeight),await Y.click(Z(r).getByRole(`option`,{name:`Florida`})),await X(()=>J(vi.queryByRole(`listbox`)).not.toBeInTheDocument()),await J(n).toHaveTextContent(`Florida`),await J(e.onValueChange).toHaveBeenLastCalledWith(`FL`,J.anything())}},Si={render:()=>(0,q.jsx)(`div`,{className:`w-full`,children:(0,q.jsxs)(an.Root,{invalid:!0,required:!0,children:[(0,q.jsx)(an.Label,{children:`State`}),(0,q.jsxs)(K.Root,{items:Q,children:[(0,q.jsx)(K.Trigger,{placeholder:`Select a state`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]}),(0,q.jsx)(an.Description,{children:`Where the risk is located.`}),(0,q.jsx)(an.Error,{errors:[{message:`Choose a state`}]})]})}),play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:/State/});await J(t).toHaveAttribute(`aria-invalid`,`true`),await J(t).toHaveAccessibleDescription(/located.*Choose a state|Choose a state.*located/),await J(t).toHaveStyle({borderColor:`rgb(217, 38, 38)`});let n=await $(t);await J(n).toHaveAccessibleName(/State/),await bi()}},Ci={args:{onValueChange:_i()},render:e=>(0,q.jsxs)(K.Root,{...e,items:Q,children:[(0,q.jsx)(K.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,disabled:e===`FL`,children:t},e))})]}),play:async({args:e,canvasElement:t})=>{let n=await $(Z(t).getByRole(`combobox`,{name:`State`}));await J(Z(n).getByRole(`option`,{name:`Florida`})).toHaveAttribute(`aria-disabled`,`true`),await Y.click(Z(n).getByRole(`option`,{name:`Florida`})),await J(e.onValueChange).not.toHaveBeenCalled(),Z(n).getByRole(`option`,{name:`California`}).focus(),await Y.keyboard(`{ArrowDown}{Enter}`),await J(e.onValueChange).not.toHaveBeenCalled(),await bi()}},wi={render:()=>{let[e,t]=(0,gi.useState)(`CA`);return(0,q.jsxs)(`div`,{className:`flex w-full flex-col items-start gap-6`,children:[(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,q.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(`NY`),children:`Choose New York`})]}),(0,q.jsx)(`div`,{className:`w-full`,children:(0,q.jsxs)(K.Root,{items:Q,value:e,onValueChange:t,children:[(0,q.jsx)(K.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]})}),(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e??`none`]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:`State`});await Y.click(t.getByRole(`button`,{name:`Choose New York`})),await J(n).toHaveTextContent(`New York`),await Y.click(t.getByRole(`button`,{name:`Clear`})),await J(n).toHaveTextContent(`Select a state`),await J(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},Ti={render:()=>{let[e,t]=(0,gi.useState)(null);return(0,q.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,q.jsx)(`div`,{className:`w-full`,children:(0,q.jsxs)(K.Root,{items:Q,name:`state`,required:!0,children:[(0,q.jsx)(K.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]})}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=e.querySelector(`form`);await J(n.checkValidity()).toBe(!1);let r=await $(t.getByRole(`combobox`,{name:`State`}));await Y.click(Z(r).getByRole(`option`,{name:`Georgia`})),await J(n.checkValidity()).toBe(!0),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`Submitted: GA`)}},Ei={render:()=>{let{control:e,handleSubmit:t}=fn({defaultValues:{state:null}}),[n,r]=(0,gi.useState)(null);return(0,q.jsxs)(`form`,{noValidate:!0,className:`flex w-full flex-col items-start gap-6`,onSubmit:t(e=>r(e.state)),children:[(0,q.jsx)(mn,{name:`state`,control:e,rules:{required:`Choose a state`},render:({field:e,fieldState:t})=>(0,q.jsxs)(an.Root,{invalid:t.invalid,required:!0,className:`w-full`,children:[(0,q.jsx)(an.Label,{children:`State`}),(0,q.jsxs)(K.Root,{items:Q,value:e.value,onValueChange:e.onChange,children:[(0,q.jsx)(K.Trigger,{ref:e.ref,onBlur:e.onBlur,placeholder:`Select a state`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]}),(0,q.jsx)(an.Error,{errors:[t.error]})]})}),(0,q.jsx)(f,{type:`submit`,children:`Submit`}),n&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:/State/});await Y.click(t.getByRole(`button`,{name:`Submit`})),await X(()=>J(n).toHaveFocus()),await X(()=>J(n).toHaveAccessibleDescription(`Choose a state`));let r=await $(n);await Y.click(Z(r).getByRole(`option`,{name:`Arizona`})),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`Submitted: AZ`)}},Di={render:()=>{let e=[{value:`ho3`,label:`Homeowners HO-3, special form, including dwelling and contents`},{value:`ho6`,label:`Condo unit owners HO-6`}];return(0,q.jsx)(`div`,{className:`w-60`,children:(0,q.jsxs)(K.Root,{items:e,defaultValue:`ho3`,children:[(0,q.jsx)(K.Trigger,{"aria-label":`Policy form`}),(0,q.jsx)(K.Content,{children:e.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]})})},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`Policy form`}),n=t.querySelector(`[data-slot=select-value]`);await J(t.getBoundingClientRect().height).toBe(40),await J(n.scrollWidth).toBeGreaterThan(n.clientWidth)}},Oi=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`).map(e=>({value:e,label:e})),ki={args:{items:Oi,defaultValue:`Ohio`},parameters:{docs:{story:{height:`400px`}}},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`State`}),n=await $(t),r=Z(n).getByRole(`option`,{name:`Ohio`}),i=t.getBoundingClientRect(),a=n.closest(`[data-slot=select-content]`).getBoundingClientRect();await J(Math.round(a.width)).toBe(Math.round(i.width)),await J(Math.round(a.left)).toBe(Math.round(i.left)),await J(Math.round(a.top-i.bottom)).toBe(8),await J(n.scrollHeight).toBeGreaterThan(n.clientHeight),await J(r).toHaveAttribute(`aria-selected`,`true`),await X(()=>{let e=r.getBoundingClientRect(),t=n.getBoundingClientRect();J(e.top).toBeGreaterThanOrEqual(t.top),J(e.bottom).toBeLessThanOrEqual(t.bottom)}),await bi()}},Ai={render:()=>(0,q.jsxs)(`div`,{className:`grid w-full grid-cols-2 gap-6`,children:[[[`Placeholder`,{}],[`Filled`,{defaultValue:`TX`}],[`Disabled`,{defaultValue:`TX`,disabled:!0}],[`Read-only`,{defaultValue:`TX`,readOnly:!0}]].map(([e,t])=>(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,q.jsxs)(K.Root,{items:Q,...t,children:[(0,q.jsx)(K.Trigger,{"aria-label":e,placeholder:`Select a state`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]})]},e)),(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:`Invalid`}),(0,q.jsxs)(K.Root,{items:Q,children:[(0,q.jsx)(K.Trigger,{"aria-label":`Invalid`,"aria-invalid":!0,placeholder:`Select a state`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]})]})]})},ji={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:`CA`,onValueChange:_i()},play:async({args:e,canvasElement:t})=>{let n=Z(t).getByRole(`combobox`,{name:`State`}),r=`rgb(45, 48, 57)`;await Y.tab(),await J(n).toHaveFocus(),await X(()=>J(n).toHaveStyle({borderColor:r})),await Y.keyboard(`{ArrowDown}`);let i=await vi.findByRole(`listbox`);await X(()=>J(Z(i).getByRole(`option`,{name:`California`})).toHaveFocus()),await J(n).toHaveStyle({borderColor:r}),await Y.keyboard(`{ArrowDown}{Enter}`),await X(()=>J(vi.queryByRole(`listbox`)).not.toBeInTheDocument()),await J(n).toHaveTextContent(`Florida`),await J(e.onValueChange).toHaveBeenLastCalledWith(`FL`,J.anything()),await J(n).toHaveFocus(),await Y.keyboard(`{Enter}`),await vi.findByRole(`listbox`),await Y.keyboard(`{Escape}`),await X(()=>J(vi.queryByRole(`listbox`)).not.toBeInTheDocument()),await J(n).toHaveTextContent(`Florida`),await J(n).toHaveFocus()}},Mi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,gi.useState)(null);return(0,q.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,q.jsx)(`div`,{className:`w-full`,children:(0,q.jsxs)(K.Root,{items:Q,name:`state`,defaultValue:`CA`,children:[(0,q.jsx)(K.Trigger,{"aria-label":`State`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]})}),(0,q.jsxs)(`div`,{className:`flex gap-3`,children:[(0,q.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,q.jsx)(f,{type:`submit`,children:`Submit`})]}),e&&(0,q.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:`State`}),r=await $(n);await Y.click(Z(r).getByRole(`option`,{name:`Georgia`})),await J(n).toHaveTextContent(`Georgia`),await Y.click(t.getByRole(`button`,{name:`Reset`})),await X(()=>J(t.getByRole(`combobox`,{name:`State`})).toHaveTextContent(`California`)),await Y.click(t.getByRole(`button`,{name:`Submit`})),await J(await t.findByRole(`status`)).toHaveTextContent(`Submitted: CA`)}},Ni={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,q.jsxs)(ln.Root,{children:[(0,q.jsx)(ln.Trigger,{asChild:!0,children:(0,q.jsx)(f,{variant:`secondary`,children:`Edit address`})}),(0,q.jsxs)(ln.Content,{children:[(0,q.jsx)(ln.Title,{children:`Edit address`}),(0,q.jsx)(ln.Body,{children:(0,q.jsxs)(K.Root,{items:Q,children:[(0,q.jsx)(K.Trigger,{"aria-label":`State`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]})})]})]}),play:async({canvasElement:e})=>{let t=Z(document.body);await Y.click(Z(e).getByRole(`button`,{name:`Edit address`}));let n=await t.findByRole(`dialog`,{name:`Edit address`}),r=Z(n).getByRole(`combobox`,{name:`State`}),i=await $(r);await J(n).toContainElement(i),await X(()=>J(document.activeElement).toHaveAttribute(`data-slot`,`select-content`)),await Y.keyboard(`{Escape}`),await X(()=>J(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await J(n).toHaveAttribute(`data-state`,`open`),await Y.click(Z(await $(r)).getByRole(`option`,{name:`California`})),await X(()=>J(t.queryByRole(`listbox`)).not.toBeInTheDocument()),r.focus(),await Y.keyboard(`{ArrowDown}`);let a=await t.findByRole(`listbox`);await X(()=>J(Z(a).getByRole(`option`,{name:`California`})).toHaveFocus()),await Y.keyboard(`{ArrowDown}`),await J(Z(a).getByRole(`option`,{name:`Florida`})).toHaveFocus(),await Y.keyboard(`{Escape}`),await X(()=>J(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await J(n).toHaveAttribute(`data-state`,`open`),await Y.keyboard(`{Escape}`),await X(()=>J(n).toHaveAttribute(`data-state`,`closed`))}},Pi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,q.jsxs)(dn.Root,{children:[(0,q.jsx)(dn.Trigger,{asChild:!0,children:(0,q.jsx)(f,{variant:`secondary`,children:`Filter`})}),(0,q.jsx)(dn.Content,{className:`w-72`,children:(0,q.jsxs)(K.Root,{items:Q,children:[(0,q.jsx)(K.Trigger,{"aria-label":`State`,placeholder:`Any state`}),(0,q.jsx)(K.Content,{children:Q.map(({value:e,label:t})=>(0,q.jsx)(K.Item,{value:e,children:t},e))})]})})]}),play:async({canvasElement:e})=>{let t=Z(document.body),n=Z(e).getByRole(`button`,{name:`Filter`});await Y.click(n);let r=await t.findByRole(`combobox`,{name:`State`}),i=await $(r);await Y.keyboard(`{ArrowDown}`),await J(i.querySelector(`:focus`)).not.toBeNull(),await Y.keyboard(`{Escape}`),await X(()=>J(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await J(r.closest(`[data-slot=popover-content]`)).toHaveAttribute(`data-state`,`open`),await Y.keyboard(`{Escape}`),await X(()=>J(t.queryByRole(`combobox`,{name:`State`})).not.toBeInTheDocument())}},xi.parameters={...xi.parameters,docs:{...xi.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', {
      name: 'State'
    });
    await expect(trigger).toHaveTextContent('Select a state');
    const list = await open(trigger);
    await expect(list).toHaveAccessibleName('Options');
    await expect(list.scrollHeight).toBe(list.clientHeight);
    await userEvent.click(within(list).getByRole('option', {
      name: 'Florida'
    }));
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('FL', expect.anything());
  }
}`,...xi.parameters?.docs?.source},description:{story:`@summary Pick an option from the list`,...xi.parameters?.docs?.description}}},Si.parameters={...Si.parameters,docs:{...Si.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full">
            <Field.Root invalid required>
                <Field.Label>State</Field.Label>
                <Select.Root items={STATES}>
                    <Select.Trigger placeholder="Select a state" />
                    <Select.Content>
                        {STATES.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>
                <Field.Description>Where the risk is located.</Field.Description>
                <Field.Error errors={[{
        message: 'Choose a state'
      }]} />
            </Field.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: /State/
    });
    await expect(trigger).toHaveAttribute('aria-invalid', 'true');
    await expect(trigger).toHaveAccessibleDescription(/located.*Choose a state|Choose a state.*located/);
    await expect(trigger).toHaveStyle({
      borderColor: 'rgb(217, 38, 38)'
    });
    const list = await open(trigger);
    await expect(list).toHaveAccessibleName(/State/);
    await close();
  }
}`,...Si.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, the label, description, error, `invalid` and\n`required` reach the trigger with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...Si.parameters?.docs?.description}}},Ci.parameters={...Ci.parameters,docs:{...Ci.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => <Select.Root {...args} items={STATES}>
            <Select.Trigger aria-label="State" placeholder="Select a state" />
            <Select.Content>
                {STATES.map(({
        value,
        label
      }) => <Select.Item key={value} value={value} disabled={value === 'FL'}>
                        {label}
                    </Select.Item>)}
            </Select.Content>
        </Select.Root>,
  play: async ({
    args,
    canvasElement
  }) => {
    const list = await open(within(canvasElement).getByRole('combobox', {
      name: 'State'
    }));
    await expect(within(list).getByRole('option', {
      name: 'Florida'
    })).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(within(list).getByRole('option', {
      name: 'Florida'
    }));
    await expect(args.onValueChange).not.toHaveBeenCalled();
    within(list).getByRole('option', {
      name: 'California'
    }).focus();
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(args.onValueChange).not.toHaveBeenCalled();
    await close();
  }
}`,...Ci.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest selectable. The arrow keys still stop
on it, so it is announced, but neither Enter nor a press picks it.

@summary One option disabled`,...Ci.parameters?.docs?.description}}},wi.parameters={...wi.parameters,docs:{...wi.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<string | null>('CA');
    return <div className="flex w-full flex-col items-start gap-6">
                <div className="flex gap-3">
                    <Button variant="secondary" size="sm" onClick={() => setState(null)}>
                        Clear
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => setState('NY')}>
                        Choose New York
                    </Button>
                </div>
                <div className="w-full">
                    <Select.Root items={STATES} value={state} onValueChange={setState}>
                        <Select.Trigger aria-label="State" placeholder="Select a state" />
                        <Select.Content>
                            {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </div>
                <output className="text-sm">Selected: {state ?? 'none'}</output>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', {
      name: 'State'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Choose New York'
    }));
    await expect(trigger).toHaveTextContent('New York');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear'
    }));
    await expect(trigger).toHaveTextContent('Select a state');
    await expect(canvas.getByRole('status')).toHaveTextContent('Selected: none');
  }
}`,...wi.parameters?.docs?.source},description:{story:`@summary Controlled select whose value is set from outside`,...wi.parameters?.docs?.description}}},Ti.parameters={...Ti.parameters,docs:{...Ti.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex w-full flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('state')));
    }}>
                <div className="w-full">
                    <Select.Root items={STATES} name="state" required>
                        <Select.Trigger aria-label="State" placeholder="Select a state" />
                        <Select.Content>
                            {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </div>
                <Button type="submit">Submit</Button>
                {submitted && <output className="text-sm">Submitted: {submitted}</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const form = canvasElement.querySelector('form')!;
    await expect(form.checkValidity()).toBe(false);
    const list = await open(canvas.getByRole('combobox', {
      name: 'State'
    }));
    await userEvent.click(within(list).getByRole('option', {
      name: 'Georgia'
    }));
    await expect(form.checkValidity()).toBe(true);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: GA');
  }
}`,...Ti.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value`, and `required` blocks the\nsubmission until something is picked.\n\n@summary Native form submission",...Ti.parameters?.docs?.description}}},Ei.parameters={...Ei.parameters,docs:{...Ei.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control,
      handleSubmit
    } = useForm<{
      state: string | null;
    }>({
      defaultValues: {
        state: null
      }
    });
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form noValidate className="flex w-full flex-col items-start gap-6" onSubmit={handleSubmit(data => setSubmitted(data.state))}>
                <Controller name="state" control={control} rules={{
        required: 'Choose a state'
      }} render={({
        field,
        fieldState
      }) => <Field.Root invalid={fieldState.invalid} required className="w-full">
                            <Field.Label>State</Field.Label>
                            <Select.Root items={STATES} value={field.value} onValueChange={field.onChange}>
                                <Select.Trigger ref={field.ref} onBlur={field.onBlur} placeholder="Select a state" />
                                <Select.Content>
                                    {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                            {label}
                                        </Select.Item>)}
                                </Select.Content>
                            </Select.Root>
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
    const trigger = canvas.getByRole('combobox', {
      name: /State/
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await waitFor(() => expect(trigger).toHaveFocus());
    await waitFor(() => expect(trigger).toHaveAccessibleDescription('Choose a state'));
    const list = await open(trigger);
    await userEvent.click(within(list).getByRole('option', {
      name: 'Arizona'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: AZ');
  }
}`,...Ei.parameters?.docs?.source},description:{story:"With react-hook-form, wire the select through `Controller` and put\n`field.ref` on the trigger, so a failed submit focuses it.\n\n@summary React Hook Form through Controller",...Ei.parameters?.docs?.description}}},Di.parameters={...Di.parameters,docs:{...Di.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      value: 'ho3',
      label: 'Homeowners HO-3, special form, including dwelling and contents'
    }, {
      value: 'ho6',
      label: 'Condo unit owners HO-6'
    }];
    return <div className="w-60">
                <Select.Root items={items} defaultValue="ho3">
                    <Select.Trigger aria-label="Policy form" />
                    <Select.Content>
                        {items.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'Policy form'
    });
    const value = trigger.querySelector('[data-slot=select-value]')!;
    await expect(trigger.getBoundingClientRect().height).toBe(40);
    await expect(value.scrollWidth).toBeGreaterThan(value.clientWidth);
  }
}`,...Di.parameters?.docs?.source},description:{story:`A long option label is cut with an ellipsis in the trigger and in its row,
and the chevron keeps its place.

@summary Long labels truncate`,...Di.parameters?.docs?.description}}},ki.parameters={...ki.parameters,docs:{...ki.parameters?.docs,source:{originalSource:`{
  args: {
    items: US_STATES,
    defaultValue: 'Ohio'
  },
  parameters: {
    docs: {
      story: {
        height: '400px'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    const picked = within(list).getByRole('option', {
      name: 'Ohio'
    });
    const box = trigger.getBoundingClientRect();
    const panel = list.closest('[data-slot=select-content]')!.getBoundingClientRect();
    await expect(Math.round(panel.width)).toBe(Math.round(box.width));
    await expect(Math.round(panel.left)).toBe(Math.round(box.left));
    await expect(Math.round(panel.top - box.bottom)).toBe(8);
    await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight);
    await expect(picked).toHaveAttribute('aria-selected', 'true');
    await waitFor(() => {
      const row = picked.getBoundingClientRect();
      const view = list.getBoundingClientRect();
      expect(row.top).toBeGreaterThanOrEqual(view.top);
      expect(row.bottom).toBeLessThanOrEqual(view.bottom);
    });
    await close();
  }
}`,...ki.parameters?.docs?.source},description:{story:`With more options than fit, the list stops at six rows and scrolls, and it
opens with the picked option in view. It matches the trigger's width and
opens 8px below it. Past a few dozen options, or when
people know what they are looking for, a Combobox lets them type instead.

@summary Long list that scrolls`,...ki.parameters?.docs?.description}}},Ai.parameters={...Ai.parameters,docs:{...Ai.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full grid-cols-2 gap-6">
            {([['Placeholder', {}], ['Filled', {
      defaultValue: 'TX'
    }], ['Disabled', {
      defaultValue: 'TX',
      disabled: true
    }], ['Read-only', {
      defaultValue: 'TX',
      readOnly: true
    }]] as const).map(([title, props]) => <div key={title} className="flex flex-col gap-2">
                    <span className="text-xs text-text-input-placeholder">{title}</span>
                    <Select.Root items={STATES} {...props}>
                        <Select.Trigger aria-label={title} placeholder="Select a state" />
                        <Select.Content>
                            {STATES.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </div>)}
            <div className="flex flex-col gap-2">
                <span className="text-xs text-text-input-placeholder">Invalid</span>
                <Select.Root items={STATES}>
                    <Select.Trigger aria-label="Invalid" aria-invalid placeholder="Select a state" />
                    <Select.Content>
                        {STATES.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
}`,...Ai.parameters?.docs?.source},description:{story:`Every state of the trigger side by side, for checking against the design.

@summary Visual comparison of the trigger states`,...Ai.parameters?.docs?.description}}},ji.parameters={...ji.parameters,docs:{...ji.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    defaultValue: 'CA',
    onValueChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    const focusBorder = 'rgb(45, 48, 57)';
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    await waitFor(() => expect(trigger).toHaveStyle({
      borderColor: focusBorder
    }));
    await userEvent.keyboard('{ArrowDown}');
    const list = await screen.findByRole('listbox');
    await waitFor(() => expect(within(list).getByRole('option', {
      name: 'California'
    })).toHaveFocus());
    await expect(trigger).toHaveStyle({
      borderColor: focusBorder
    });
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('FL', expect.anything());
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await screen.findByRole('listbox');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await expect(trigger).toHaveFocus();
  }
}`,...ji.parameters?.docs?.source},description:{story:`Enter, Space or the arrow keys open the list; the arrows move, Enter picks
and Escape closes it, handing focus back to the trigger. The trigger keeps
its focus ring while the options hold the focus.

@summary Keyboard selection`,...ji.parameters?.docs?.description}}},Mi.parameters={...Mi.parameters,docs:{...Mi.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex w-full flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('state')));
    }}>
                <div className="w-full">
                    <Select.Root items={STATES} name="state" defaultValue="CA">
                        <Select.Trigger aria-label="State" />
                        <Select.Content>
                            {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </div>
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
    const trigger = canvas.getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    await userEvent.click(within(list).getByRole('option', {
      name: 'Georgia'
    }));
    await expect(trigger).toHaveTextContent('Georgia');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    // The reset remounts the select, so the trigger is a new element.
    await waitFor(() => expect(canvas.getByRole('combobox', {
      name: 'State'
    })).toHaveTextContent('California'));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: CA');
  }
}`,...Mi.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled select back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...Mi.parameters?.docs?.description}}},Ni.parameters={...Ni.parameters,docs:{...Ni.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Edit address</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Edit address</Modal.Title>
                <Modal.Body>
                    <Select.Root items={STATES}>
                        <Select.Trigger aria-label="State" />
                        <Select.Content>
                            {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const body = within(document.body);
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Edit address'
    }));
    const dialog = await body.findByRole('dialog', {
      name: 'Edit address'
    });
    const trigger = within(dialog).getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    await expect(dialog).toContainElement(list);
    await waitFor(() => expect(document.activeElement).toHaveAttribute('data-slot', 'select-content'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.click(within(await open(trigger)).getByRole('option', {
      name: 'California'
    }));
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const options = await body.findByRole('listbox');
    await waitFor(() => expect(within(options).getByRole('option', {
      name: 'California'
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    await expect(within(options).getByRole('option', {
      name: 'Florida'
    })).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
  }
}`,...Ni.parameters?.docs?.source},description:{story:`Inside a \`Modal\`, the list renders into the dialog, so focus stays on it.
Escape closes the list first, whether the list itself or an option holds
focus, and the modal on the next press.

@summary Focus and Escape inside a Modal`,...Ni.parameters?.docs?.description}}},Pi.parameters={...Pi.parameters,docs:{...Pi.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Filter</Button>
            </Popover.Trigger>
            <Popover.Content className="w-72">
                <Select.Root items={STATES}>
                    <Select.Trigger aria-label="State" placeholder="Any state" />
                    <Select.Content>
                        {STATES.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const body = within(document.body);
    const button = within(canvasElement).getByRole('button', {
      name: 'Filter'
    });
    await userEvent.click(button);
    const trigger = await body.findByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    await userEvent.keyboard('{ArrowDown}');
    await expect(list.querySelector(':focus')).not.toBeNull();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger.closest('[data-slot=popover-content]')).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('combobox', {
      name: 'State'
    })).not.toBeInTheDocument());
  }
}`,...Pi.parameters?.docs?.source},description:{story:`Inside a \`Popover\`, Escape on the open list closes the list only; the next
one closes the popover.

@summary Escape inside a Popover`,...Pi.parameters?.docs?.description}}},Fi=[`Default`,`InsideField`,`DisabledItem`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`ManyItems`,`AllStates`,`Keyboard`,`FormReset`,`InsideModal`,`InsidePopover`]})))()}Ii();export{Ai as AllStates,wi as Controlled,xi as Default,Ci as DisabledItem,Mi as FormReset,Ti as InForm,Si as InsideField,Ni as InsideModal,Pi as InsidePopover,ji as Keyboard,Di as LongLabel,ki as ManyItems,Ei as WithReactHookForm,Fi as __namedExportsOrder,yi as default};