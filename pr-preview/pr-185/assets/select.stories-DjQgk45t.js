import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-Y8_WjoPJ.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./dist-C8AlzbfS.js";import{n as o,t as s}from"./utils-nsk-j2e0.js";import{i as c,n as l,r as u}from"./merge-props-D4OW_Mr6.js";import{n as d,t as f}from"./button-Dt7uMgrX.js";import{$ as p,$n as m,A as h,At as g,B as _,Bn as v,C as y,Cn as b,Ct as x,D as S,Dn as C,Dt as w,E as T,Et as E,F as D,Fn as O,Ft as k,Gn as ee,Gt as A,H as j,Hn as M,I as N,In as P,It as F,Jn as te,K as I,Kn as ne,Kt as re,L as ie,Lt as L,M as ae,Mn as R,Mt as oe,N as se,Nn as z,Nt as ce,O as le,On as ue,Ot as de,P as fe,Pn as pe,Pt as me,Q as he,Qn as ge,Rt as _e,Sn as ve,St as ye,T as be,Tt as xe,U as Se,Un as Ce,Ut as we,V as Te,Vn as Ee,Wn as De,X as Oe,Xn as ke,Y as Ae,Yn as je,Zn as Me,Zt as Ne,_ as Pe,_t as Fe,a as B,ar as Ie,at as Le,b as Re,bn as ze,bt as Be,c as Ve,cn as He,cr as Ue,ct as We,d as Ge,dn as Ke,dt as qe,er as Je,f as Ye,fn as Xe,ft as Ze,g as Qe,gt as $e,h as et,ht as tt,in as nt,ir as rt,it,j as at,jt as ot,k as st,kt as ct,l as lt,ln as ut,lr as dt,lt as ft,m as pt,mn as mt,mt as ht,n as gt,nr as _t,nt as vt,o as yt,or as bt,ot as xt,p as St,pn as Ct,q as wt,qn as Tt,r as Et,rr as Dt,rt as Ot,s as kt,sn as At,sr as jt,st as Mt,tn as Nt,tr as Pt,tt as Ft,u as It,ur as Lt,ut as Rt,v as zt,vn as Bt,vt as Vt,w as Ht,wn as Ut,wt as Wt,x as Gt,xt as Kt,y as qt,yn as Jt,yt as Yt,zn as Xt,zt as Zt}from"./icons-COSe2O2b.js";import{C as Qt,O as $t,S as en,d as tn,f as nn,k as rn}from"./floating-ui.react-dom-Do2Wsm3X.js";import{a as an,n as on,t as sn}from"./field-DhacWktU.js";import{n as cn,r as ln}from"./input-BLHbU8_L.js";import{n as un,t as dn}from"./modal-Cwf8mOiI.js";import{n as fn,t as pn}from"./popover-BGYdNevP.js";import{a as mn,r as hn,t as gn}from"./index.esm-BOinPSBQ.js";function _n(e){let[t,n]=vn.useState({current:e,previous:null});return Object.is(e,t.current)||n({current:e,previous:t.current}),t.previous}var vn;function yn(){return(yn=t((()=>{vn=e(n(),1)})))()}function bn(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}function xn(){let e=wn.useContext(Tn);if(e===void 0)throw Error(dt(60));return e}function Sn(){let e=wn.useContext(En);if(e===void 0)throw Error(dt(101));return e}function Cn(){let e=wn.useContext(Dn);if(e===void 0)throw Error(dt(61));return e}var wn,Tn,En,Dn;function V(){return(V=t((()=>{Lt(),wn=e(n(),1),Tn=wn.createContext(void 0),En=wn.createContext(void 0),Dn=wn.createContext(void 0)})))()}var On;function kn(){return(kn=t((()=>{ft(),p(),On={id:e=>e.id,labelId:e=>e.labelId,modal:e=>e.modal,items:e=>e.items,itemToStringLabel:e=>e.itemToStringLabel,isItemEqualToValue:e=>e.isItemEqualToValue,value:e=>e.value,hasSelectedValue:e=>{let{value:t,multiple:n,itemToStringValue:r}=e;return t==null?!1:n&&Array.isArray(t)?t.length>0:it(t,r)!==``},hasNullItemLabel:(e,t)=>t?he(e.items):!1,open:e=>e.open,mounted:e=>e.mounted,forceMount:e=>e.forceMount,transitionStatus:e=>e.transitionStatus,openMethod:e=>e.openMethod,activeIndex:e=>e.activeIndex,selectedIndex:e=>e.selectedIndex,isActive:(e,t)=>e.activeIndex===t,isSelected:(e,t)=>{let n=e.isItemEqualToValue,r=e.value;return e.multiple?Array.isArray(r)&&r.some(e=>Le(t,e,n)):Le(t,r,n)},isSelectedByFocus:(e,t)=>e.selectedIndex===t,popupProps:e=>e.popupProps,triggerProps:e=>e.triggerProps,triggerElement:e=>e.triggerElement,positionerElement:e=>e.positionerElement,listElement:e=>e.listElement,popupSide:e=>e.popupSide,scrollUpArrowVisible:e=>e.scrollUpArrowVisible,scrollDownArrowVisible:e=>e.scrollDownArrowVisible,hasScrollArrows:e=>e.hasScrollArrows}})))()}function An(e,t=-(2**53-1),n=2**53-1){return Math.max(t,Math.min(e,n))}function jn(e,t){return Math.max(0,e-t)}function Mn(e,t){if(t<=0)return 0;let n=An(e,0,t),r=n,i=t-n,a=r<=1,o=i<=1;return a&&o?r<=i?0:t:a?0:o?t:n}function Nn(){return(Nn=t((()=>{})))()}function Pn(e){let{id:t,value:n,defaultValue:r=null,onValueChange:i,open:a,defaultOpen:o=!1,onOpenChange:s,name:c,form:l,autoComplete:u,disabled:d=!1,readOnly:f=!1,required:p=!1,modal:m=!0,actionsRef:h,inputRef:g,onOpenChangeComplete:_,items:y,multiple:b=!1,itemToStringLabel:S,itemToStringValue:C,isItemEqualToValue:T=xt,highlightItemOnHover:E=!0,children:O}=e,{clearErrors:k}=Te(),{setDirty:ee,setTouched:A,setFocused:j,validityData:N,setFilled:P,name:F,disabled:I,validation:ne,validationMode:re}=wt(),ie=D({id:t}),L=I||d,ae=F??c,[R,oe]=Ue({controlled:n,default:b?r??M:r,name:`Select`,state:`value`}),[z,ce]=Ue({controlled:a,default:o,name:`Select`,state:`open`}),le=H.useRef([]),ue=H.useRef([]),de=H.useRef(null),fe=H.useRef(null),pe=H.useRef(0),me=H.useRef(null),he=H.useRef([]),_e=H.useRef(!1),ve=H.useRef(null),ye=H.useRef(null),be=H.useRef({allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1,dragY:0}),Ee=H.useRef(!1),Oe=H.useRef(R),{mounted:Ae,setMounted:je,transitionStatus:Me}=xe(z),{openMethod:Ne,triggerProps:Pe}=at(z),B=_t(()=>new v({id:ie,labelId:void 0,modal:m,multiple:b,itemToStringLabel:S,itemToStringValue:C,isItemEqualToValue:T,value:R,open:z,mounted:Ae,transitionStatus:Me,items:y,forceMount:!1,openMethod:null,activeIndex:null,selectedIndex:null,popupProps:Ce,triggerProps:Ce,triggerElement:null,positionerElement:null,listElement:null,popupSide:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1,hasScrollArrows:!1},{setValue:De,setOpen:De,handleScrollArrowVisibility:De,onOpenChangeComplete:De,listRef:le,popupRef:de,scrollHandlerRef:fe,scrollArrowsMountedCountRef:pe,valueRef:me,valuesRef:he,labelsRef:ue,typingRef:_e,selectionRef:be,firstItemTextRef:ve,selectedItemTextRef:ye,alignItemWithTriggerActiveRef:Ee,initialValueRef:Oe},On)).current,Ie=B.useState(`activeIndex`),Le=B.useState(`selectedIndex`),Re=B.useState(`triggerElement`),ze=B.useState(`positionerElement`),Ve=_n(Ne),He=Ne??Ve,Ge=H.useMemo(()=>b?``:it(R,C),[b,R,C]),Ke=H.useMemo(()=>b&&Array.isArray(R)?R.map(e=>it(e,C)):it(R,C),[b,R,C]),qe=ke(Re),Ye=Je(()=>Ke);Se(qe,ie,R,Ye,!L,c);let Xe=b?Array.isArray(R)&&R.length>0:R!=null&&Ge!==``;bt(()=>{P(Xe)},[Xe,P]),bt(function(){let e=We(he.current,R,T,b);e===null&&(ye.current=null),!z&&B.set(`selectedIndex`,e)},[b,z,R,T,B]),se(R,()=>{k(ae),ee(Rt(R,N.initialValue,T)),ne.change(R)});let Ze=Je((e,t)=>{s?.(e,t),!t.isCanceled&&(ce(e),!e&&(t.reason===`focus-out`||t.reason===`outside-press`)&&(A(!0),j(!1),re===`onBlur`&&ne.commit(R)))}),Qe=Je(()=>{je(!1),B.update({activeIndex:null,openMethod:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1}),_?.(!1)});x({enabled:!h,open:z,ref:de,onComplete(){z||Qe()}}),H.useImperativeHandle(h,()=>({unmount:Qe}),[Qe]);let $e=Je((e,t)=>{i?.(e,t),!t.isCanceled&&oe(e)}),et=Je(e=>{let t=jn(e.scrollHeight,e.clientHeight),n=Mn(e.scrollTop,t),r=n>0,i=n<t;B.set(`scrollUpArrowVisible`,r),B.set(`scrollDownArrowVisible`,i)}),ot=Yt({open:z,onOpenChange:Ze,elements:{reference:Re,floating:ze}}),st=ct(ot,{enabled:!L,event:`mousedown`}),lt=w(ot),ut=Fe(ot,{enabled:!L,listRef:le,activeIndex:Ie,selectedIndex:Le,disabledIndices:M,onNavigate(e){(e!==null||z)&&B.set(`activeIndex`,e)},focusItemOnHover:E}),dt=tt(ot,{enabled:!L&&(z||!f&&!b),listRef:ue,activeIndex:Ie,selectedIndex:Le,disabledIndices:e=>bn(le.current[e]),onMatch(e){z?B.set(`activeIndex`,e):$e(he.current[e],we(nt))},onTyping(e){_e.current=e}}),ft=H.useMemo(()=>Zt(dt.reference,ut.reference,lt.reference,st.reference,Pe),[st.reference,dt.reference,ut.reference,lt.reference,Pe]),pt=H.useMemo(()=>Zt(Be,dt.floating,ut.floating,lt.floating),[dt.floating,ut.floating,lt.floating]),mt=ut.item??Ce;B.useContextCallback(`setValue`,$e),B.useContextCallback(`setOpen`,Ze),B.useContextCallback(`handleScrollArrowVisibility`,et),B.useContextCallback(`onOpenChangeComplete`,_),rt(()=>{B.update({popupProps:pt,triggerProps:ft})}),B.useSyncedValues({id:ie,modal:m,multiple:b,value:R,open:z,mounted:Ae,transitionStatus:Me,popupProps:pt,triggerProps:ft,items:y,itemToStringLabel:S,itemToStringValue:C,isItemEqualToValue:T,openMethod:He});let ht=H.useMemo(()=>({disabled:L,readOnly:f,required:p,multiple:b,highlightItemOnHover:E,itemProps:mt}),[L,f,p,b,E,mt]),gt=ge(g,ne.inputRef),vt=b?void 0:ae,yt=H.useMemo(()=>!b||!Array.isArray(R)||!ae?null:R.map(e=>{let t=it(e,C);return(0,Fn.jsx)(`input`,{type:`hidden`,form:l,name:ae,value:t,disabled:L},t)}),[b,R,l,ae,C,L]);return(0,Fn.jsxs)(Tn.Provider,{value:B,children:[(0,Fn.jsx)(En.Provider,{value:ht,children:(0,Fn.jsx)(Dn.Provider,{value:ot,children:O})}),(0,Fn.jsx)(`input`,{...ne.getValidationProps(L,{onFocus(){B.state.triggerElement?.focus({focusVisible:!0})},onChange(e){if(e.nativeEvent.defaultPrevented||L||f)return;let t=e.currentTarget.value,n=we(nt,e.nativeEvent);function r(){if(b)return;let e=t.toLowerCase(),r=he.current.findIndex(t=>it(t,C).toLowerCase()===e||Ot(t,S).toLowerCase()===e);r===-1&&(r=he.current.findIndex((t,n)=>{let r=ue.current[n];return r!=null&&r.toLowerCase()===e}));let i=he.current[r];i!=null&&$e(i,n)}B.set(`forceMount`,!0),queueMicrotask(r)}}),id:ie&&vt==null?`${ie}-hidden-input`:void 0,form:l,name:vt,autoComplete:u,value:Ge,disabled:L,required:p&&!(b&&Xe),readOnly:f,ref:gt,style:ae?te:Tt,tabIndex:-1,"aria-hidden":!0,suppressHydrationWarning:!0}),yt]})}var H,Fn;function In(){return(In=t((()=>{H=e(n(),1),ne(),Me(),Pt(),Dt(),yn(),jt(),Ie(),m(),je(),Ee(),ee(),de(),E(),Vt(),$e(),ht(),V(),I(),j(),fe(),Wt(),kn(),A(),Ne(),ye(),_(),p(),ft(),ae(),h(),Nn(),Kt(),_e(),Fn=r()})))()}var Ln;function Rn(){return(Rn=t((()=>{Ke(),Ln=`data-popup-side`})))()}var zn,Bn,Vn,Hn;function Un(){return(Un=t((()=>{zn=e(n(),1),R(),je(),V(),I(),N(),Ke(),Oe(),F(),Ht(),ve(),ut(),_e(),T(),A(),Ne(),fe(),Rn(),Bn=400,Vn={...Ct,...Ae,popupSide:e=>e?{[Ln]:e}:null,value:()=>null},Hn=zn.forwardRef(function(e,t){let{render:n,className:r,id:i,disabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{setTouched:l,setFocused:u,validationMode:d,validation:f,state:p,disabled:m}=wt(),{labelId:h}=ie(),g=xn(),{readOnly:_,required:v,disabled:b}=Sn(),x=m||b||a,C=g.useState(`open`),w=g.useState(`mounted`),T=g.useState(`value`),E=g.useState(`triggerProps`),O=g.useState(`positionerElement`),k=g.useState(`listElement`),ee=g.useState(`popupSide`),A=g.useState(`id`),j=g.useState(`labelId`),M=g.useState(`hasSelectedValue`),N=w&&O?ee:null,P=i??A,F=y(h,j);D({id:i});let te=ke(O),I=zn.useRef(null),{getButtonProps:ne,buttonRef:ae}=S({disabled:x,native:o}),R=g.useStateSetter(`triggerElement`),oe=z(),se=z(),ce=z();zn.useEffect(()=>{if(C)return ce.start(Bn,()=>{g.context.selectionRef.current.allowUnselectedMouseUp=!0,g.context.selectionRef.current.allowSelectedMouseUp=!0}),()=>{ce.clear()};g.context.selectionRef.current={allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1,dragY:0},se.clear()},[C,g,se,ce]);let le=Zt(E,{id:P,role:`combobox`,"aria-expanded":C,"aria-haspopup":`listbox`,"aria-controls":C?k?.id??He(O)?.id:void 0,"aria-labelledby":F,"aria-readonly":_||void 0,"aria-required":v||void 0,tabIndex:x?-1:0,onFocus(e){u(!0),C&&g.context.alignItemWithTriggerActiveRef.current&&g.context.setOpen(!1,we(nt,e.nativeEvent)),oe.start(0,()=>{g.set(`forceMount`,!0)})},onBlur(e){ze(O,e.relatedTarget)||(l(!0),u(!1),d===`onBlur`&&f.commit(T))},onMouseDown(e){if(C)return;let t=Xt(e.currentTarget);function n(e){if(!I.current)return;let t=e.target;ze(I.current,t)||ze(te.current,t)||be(e,I.current)||g.context.setOpen(!1,we(re,e))}se.start(0,()=>{t.addEventListener(`mouseup`,n,{once:!0})})}},c,ne),ue=f.getValidationProps(x,le);ue.role=`combobox`;let de={...p,open:C,disabled:x,value:T,readOnly:_,popupSide:N,placeholder:!M};return L(`button`,e,{ref:[t,I,ae,R],state:de,stateAttributesMapping:Vn,props:ue})})})))()}var Wn,Gn,Kn;function qn(){return(qn=t((()=>{Wn=e(n(),1),F(),V(),p(),Gn={value:()=>null},Kn=Wn.forwardRef(function(e,t){let{className:n,render:r,children:i,placeholder:a,style:o,...s}=e,c=xn(),l=c.useState(`value`),u=c.useState(`items`),d=c.useState(`itemToStringLabel`),f=c.useState(`hasSelectedValue`),p=!f&&a!=null&&i==null,m=c.useState(`hasNullItemLabel`,p),h={value:l,placeholder:!f},g=null;return g=typeof i==`function`?i(l):i??(p&&!m?a:Array.isArray(l)?Ft(l,u,d):vt(l,u,d)),L(`span`,e,{state:h,ref:[t,c.context.valueRef],props:[{children:g},s],stateAttributesMapping:Gn})})})))()}var Jn,Yn;function Xn(){return(Xn=t((()=>{Jn=e(n(),1),F(),V(),Ke(),Yn=Jn.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o={open:xn().useState(`open`)};return L(`span`,e,{state:o,ref:t,props:[{"aria-hidden":!0,children:`▼`},a],stateAttributesMapping:mt})})})))()}var Zn,Qn,$n;function er(){return(er=t((()=>{Zn=e(n(),1),ce(),V(),Qn=r(),$n=Zn.forwardRef(function(e,t){let n=xn(),r=n.useState(`mounted`),i=n.useState(`forceMount`);return r||i?(0,Qn.jsx)(oe,{ref:t,...e}):null})})))()}function tr(){let e=nr.useContext(rr);if(!e)throw Error(dt(59));return e}var nr,rr;function ir(){return(ir=t((()=>{Lt(),nr=e(n(),1),rr=nr.createContext(void 0)})))()}function ar(e,t){e&&Object.assign(e.style,t)}var or;function sr(){return(sr=t((()=>{or={position:`relative`,maxHeight:`100%`,overflowX:`hidden`,overflowY:`auto`}})))()}var cr,lr,ur,dr;function fr(){return(fr=t((()=>{cr=e(n(),1),qt(),Ie(),m(),V(),Gt(),Qe(),ir(),et(),k(),sr(),A(),Ne(),ft(),It(),Ve(),lr=r(),ur={position:`fixed`},dr=cr.forwardRef(function(e,t){let{anchor:n,className:r,render:i,positionMethod:a,side:o,align:s,sideOffset:c,alignOffset:l,collisionBoundary:u=`clipping-ancestors`,collisionPadding:d,arrowPadding:f,sticky:p,disableAnchorTracking:m,alignItemWithTrigger:h=!0,collisionAvoidance:g=me,style:_,...v}=e,y=xn(),b=Cn(),x=y.useState(`open`),S=y.useState(`mounted`),C=y.useState(`modal`),w=y.useState(`value`),T=y.useState(`openMethod`),E=y.useState(`positionerElement`),D=y.useState(`triggerElement`),O=y.useState(`isItemEqualToValue`),k=y.useState(`transitionStatus`),ee=cr.useRef(null),A=cr.useRef(null),[j,M]=cr.useState(h),N=S&&j&&T!==`touch`;!S&&j!==h&&M(h),cr.useImperativeHandle(y.context.alignItemWithTriggerActiveRef,()=>N),lt((N||C)&&x,T===`touch`,E,D);let P=Pe({anchor:n,floatingRootContext:b,positionMethod:a,mounted:S,side:o,sideOffset:c,align:s,alignOffset:l,arrowPadding:f,collisionBoundary:u,collisionPadding:d,sticky:p,disableAnchorTracking:m??N,collisionAvoidance:g,keepMounted:!0}),F=N?`none`:P.side,te=N?ur:P.positionerStyles,I={open:x,side:F,align:P.align,anchorHidden:P.anchorHidden};bt(()=>{y.set(`popupSide`,P.side)},[y,P.side]);let ne=y.useStateSetter(`positionerElement`),re=Ge(e,I,{styles:te,transitionStatus:k,props:v,refs:[t,ne],hidden:!S,inert:!x}),ie=cr.useRef(0),L=Je(e=>{if(y.context.valuesRef.current.length===0)return;let t=ie.current;ie.current=e.size;let n=we(nt);if(t!==0&&!y.state.multiple&&w!==null&&Mt(y.context.valuesRef.current,w,O)===-1){let e=y.context.initialValueRef.current,t=e!=null&&Mt(y.context.valuesRef.current,e,O)!==-1?e:null;y.context.setValue(t,n),t===null&&(y.set(`selectedIndex`,null),y.context.selectedItemTextRef.current=null)}if(t!==0&&y.state.multiple&&Array.isArray(w)){let e=w.filter(e=>Mt(y.context.valuesRef.current,e,O)!==-1);e.length!==w.length&&(y.context.setValue(e,n),e.length===0&&(y.set(`selectedIndex`,null),y.context.selectedItemTextRef.current=null))}if(x&&N){y.update({scrollUpArrowVisible:!1,scrollDownArrowVisible:!1});let e={height:``};ar(E,e),ar(y.context.popupRef.current,e)}}),ae=cr.useMemo(()=>({...P,side:F,alignItemWithTriggerActive:N,setControlledAlignItemWithTrigger:M,scrollUpArrowRef:ee,scrollDownArrowRef:A}),[P,F,N,M]);return(0,lr.jsx)(Re,{elementsRef:y.context.listRef,labelsRef:y.context.labelsRef,onMapChange:L,children:(0,lr.jsxs)(rr.Provider,{value:ae,children:[S&&C&&(0,lr.jsx)(pt,{inert:zt(!x),cutout:D}),re]})})})})))()}var pr,mr,hr;function gr(){return(gr=t((()=>{pr=r(),mr=`base-ui-disable-scrollbar`,hr={className:mr,getElement(e){return(0,pr.jsx)(`style`,{nonce:e,href:mr,precedence:`base-ui:low`,children:`.${mr}{scrollbar-width:none}.${mr}::-webkit-scrollbar{display:none}`})}}})))()}function _r(e){let t=vr.useContext(yr);if(t===void 0&&!e)throw Error(dt(69));return t}var vr,yr;function br(){return(br=t((()=>{Lt(),vr=e(n(),1),yr=vr.createContext(void 0)})))()}var xr,Sr,Cr,wr,Tr,Er;function Dr(){return(Dr=t((()=>{xr=`ArrowUp`,Sr=`ArrowDown`,Cr=`ArrowLeft`,wr=`ArrowRight`,Tr=`Home`,Er=new Set([xr,Sr,Cr,wr,Tr,`End`])})))()}function Or(){return kr.useContext(Ar)??jr}var kr,Ar,jr;function Mr(){return(Mr=t((()=>{kr=e(n(),1),Ar=kr.createContext(void 0),jr={disableStyleElements:!1}})))()}var Nr;function Pr(){return(Pr=t((()=>{Nr=`--transform-origin`})))()}function Fr(e){let t=e.maxHeight;return t.endsWith(`px`)&&parseFloat(t)||1/0}function Ir(e){return jn(e.scrollHeight,e.clientHeight)}function Lr(e){return nn.getScale(e)}function Rr(e,t,n){return e/n[t]}function zr(e,t){return Qt({x:Rr(e.x,`x`,t),y:Rr(e.y,`y`,t),width:Rr(e.width,`x`,t),height:Rr(e.height,`y`,t)})}function Br(e){let{style:t}=e,n={};for(let[e,r]of Gr)n[e]=t.getPropertyValue(e),t.setProperty(e,r,`important`);return()=>{for(let[e]of Gr){let r=n[e];r?t.setProperty(e,r):t.removeProperty(e)}}}var Vr,Hr,Ur,Wr,Gr;function Kr(){return(Kr=t((()=>{Vr=e(n(),1),en(),C(),m(),rn(),Ie(),pe(),ot(),tn(),V(),Ke(),ir(),gr(),Bt(),ye(),F(),sr(),A(),Ne(),br(),Dr(),St(),Nn(),Mr(),le(),Pr(),Hr=r(),Ur={...Xe,...Jt},Wr=Vr.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,...o}=e,s=xn(),{multiple:c,readOnly:l,highlightItemOnHover:u}=Sn(),d=Cn(),{side:f,align:p,alignItemWithTriggerActive:m,isPositioned:h,setControlledAlignItemWithTrigger:_}=tr(),v=_r(!0)!=null,y=st(),{nonce:b,disableStyleElements:S}=Or(),C=s.useState(`id`),w=s.useState(`open`),T=s.useState(`openMethod`),E=s.useState(`mounted`),D=s.useState(`popupProps`),k=s.useState(`transitionStatus`),ee=s.useState(`triggerElement`),A=s.useState(`positionerElement`),j=s.useState(`listElement`),M=Vr.useRef(!1),N=Vr.useRef(!1),F=Vr.useRef({}),te=O(),I=Je(e=>{if(!A||!s.context.popupRef.current||!N.current)return;let t=A.style.top===`0px`,n=A.style.bottom===`0px`;if(M.current||!m||!t&&!n){s.context.handleScrollArrowVisibility(e);return}let r=Lr(A),i=Rr(A.getBoundingClientRect().height,`y`,r),a=Xt(A),o=$t(A),c=o.getComputedStyle(A),l=parseFloat(c.marginTop),u=parseFloat(c.marginBottom),d=Fr(o.getComputedStyle(s.context.popupRef.current)),f=Math.min(a.documentElement.clientHeight-l-u,d),p=e.scrollTop,h=Ir(e),g=null,_=e=>{A.style.height=`${e}px`},v=t?h-p:p,y=Math.min(i+v,f);if(v<=1){let n=An(v,0,f-i);n>0&&_(i+n),e.scrollTop=t?h:0,f-(i+n)<=1&&(M.current=!0),s.context.handleScrollArrowVisibility(e);return}f-y>1?g=t?1/0:0:n&&p<h&&(g=p-(v-(i+v-f)));let b=Math.ceil(y);if(b!==0&&_(b),g!=null){let t=An(g,0,Ir(e));Math.abs(e.scrollTop-t)>1&&(e.scrollTop=t)}b>=f-1&&(M.current=!0),s.context.handleScrollArrowVisibility(e)});Vr.useImperativeHandle(s.context.scrollHandlerRef,()=>I,[I]),x({open:w,ref:s.context.popupRef,onComplete(){w&&s.context.onOpenChangeComplete(!0)}});let ne={open:w,transitionStatus:k,side:f,align:p};bt(()=>{A&&s.context.popupRef.current&&!Object.keys(F.current).length&&(F.current={top:A.style.top||`0`,left:A.style.left||`0`,right:A.style.right,height:A.style.height,bottom:A.style.bottom,minHeight:A.style.minHeight,maxHeight:A.style.maxHeight,marginTop:A.style.marginTop,marginBottom:A.style.marginBottom})},[s,A]),bt(()=>{w||m||(N.current=!1,M.current=!1,ar(A,F.current))},[w,m,A]),bt(()=>{let e=s.context.popupRef.current;if(!w||!ee||!A||!e||m&&!h||s.state.transitionStatus===`ending`)return;if(N.current=!0,e.style.removeProperty(Nr),!m){te.request(()=>s.context.handleScrollArrowVisibility(j||e));return}let t=Br(e);try{let t=s.context.selectedItemTextRef.current;t?.isConnected||(t=!s.select(`hasSelectedValue`)&&s.context.firstItemTextRef.current?.isConnected?s.context.firstItemTextRef.current:null);let n=s.context.valueRef.current,r=$t(A),i=r.getComputedStyle(A),a=r.getComputedStyle(e),o=Xt(ee),c=Lr(ee),l=zr(ee.getBoundingClientRect(),c),d=zr(A.getBoundingClientRect(),c),f=l.height,p=j||e,m=p.scrollHeight,h=parseFloat(a.borderBottomWidth),g=parseFloat(i.marginTop)||10,v=parseFloat(i.marginBottom)||10,b=parseFloat(i.minHeight)||100,x=Fr(a),S=o.documentElement.clientHeight-g-v,C=o.documentElement.clientWidth,w=S-l.bottom+f,T,E=y===`rtl`?l.right-d.width:l.left,D=0;if(t&&n){let e=zr(n.getBoundingClientRect(),c);T=zr(t.getBoundingClientRect(),c),E=d.left+(y===`rtl`?e.right-T.right:e.left-T.left);let r=e.top-l.top+e.height/2;D=T.top-d.top+T.height/2-r}let O=w+D+v+h,k=Math.min(S,O),N=S-g-v,P=O-k,te=C-5;A.style.left=`${An(E,5,te-d.width)}px`,A.style.height=`${k}px`,A.style.maxHeight=`none`,A.style.marginTop=`${g}px`,A.style.marginBottom=`${v}px`,e.style.height=`100%`;let I=Ir(p),ne=P>=I-1;ne&&(k=Math.min(S,d.height)-(P-I));let re=l.top<20||l.bottom>S-20||Math.ceil(k)+1<Math.min(m,b),ie=(r.visualViewport?.scale??1)!==1&&ue;if(re||ie){ar(A,F.current),_(!1);return}let L=Math.max(b,k);if(ne){let e=Math.max(0,S-O);A.style.top=d.height>=N?`0`:`${e}px`,A.style.height=`${k}px`,p.scrollTop=Ir(p)}else A.style.bottom=`0`,p.scrollTop=P;if(T){let t=d.top,n=d.height,r=T.top+T.height/2,i=An(n>0?(r-t)/n*100:50,0,100);e.style.setProperty(Nr,`50% ${i}%`)}(L===S||k>=x)&&(M.current=!0),s.context.handleScrollArrowVisibility(p),u&&s.state.selectedIndex===null&&s.state.activeIndex===null&&s.context.listRef.current[0]!=null&&s.set(`activeIndex`,0)}finally{t()}},[s,w,A,ee,m,_,te,j,u,y,h]),Vr.useEffect(()=>{if(!m||!A||!w)return;let e=$t(A);function t(e){s.context.setOpen(!1,we(At,e))}return P(e,`resize`,t)},[s,m,A,w]);let re={...j?{role:`presentation`}:{role:`listbox`,"aria-multiselectable":c||void 0,"aria-readonly":l||void 0,id:`${C}-list`},onKeyDown(e){v&&Er.has(e.key)&&e.stopPropagation()},onScroll(e){j||I(e.currentTarget)},...m&&{style:j?{height:`100%`}:or},className:!j&&m?hr.className:void 0},ie=L(`div`,e,{ref:[t,s.context.popupRef],state:ne,stateAttributesMapping:Ur,props:[D,re,Ye(k),o]});return(0,Hr.jsxs)(Vr.Fragment,{children:[!S&&hr.getElement(b),(0,Hr.jsx)(g,{context:d,modal:!1,disabled:!E,openInteractionType:T,returnFocus:a,restoreFocus:!0,children:ie})]})}),Gr=[[`transform`,`none`],[`scale`,`1`],[`translate`,`0 0`]]})))()}var qr,Jr;function Yr(){return(Yr=t((()=>{qr=e(n(),1),V(),ir(),F(),gr(),sr(),Jr=qr.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=xn(),{multiple:s,readOnly:c}=Sn(),{alignItemWithTriggerActive:l}=tr(),u=o.useState(`hasScrollArrows`),d=o.useState(`openMethod`),f={id:`${o.useState(`id`)}-list`,role:`listbox`,"aria-multiselectable":s||void 0,"aria-readonly":c||void 0,onScroll(e){o.context.scrollHandlerRef.current?.(e.currentTarget)},...l&&{style:or},className:u&&d!==`touch`?hr.className:void 0},p=o.useStateSetter(`listElement`);return L(`div`,e,{ref:[t,p],props:[f,a]})})})))()}function Xr(){let e=Zr.useContext(Qr);if(!e)throw Error(dt(57));return e}var Zr,Qr;function $r(){return($r=t((()=>{Lt(),Zr=e(n(),1),Qr=Zr.createContext(void 0)})))()}var ei,ti,ni;function ri(){return(ri=t((()=>{ei=e(n(),1),Ie(),V(),yt(),F(),$r(),T(),A(),Ne(),ft(),b(),ti=r(),ni=ei.memo(ei.forwardRef(function(e,t){let{render:n,className:r,style:i,value:a=null,label:o,disabled:s=!1,nativeButton:c=!1,...l}=e,u=ei.useRef(null),d=kt({guess:!0,label:o,textRef:u}),f=xn(),{itemProps:p,multiple:m,disabled:h,readOnly:g}=Sn(),_=h||s,v=f.useState(`isActive`,d.index),y=f.useState(`open`),b=f.useState(`isSelected`,a),x=f.useState(`isSelectedByFocus`,d.index),C=f.useState(`isItemEqualToValue`),w=d.index,T=ei.useRef(null);bt(()=>{let e=f.context.valuesRef.current;return e[w]=a,()=>{delete e[w]}},[w,a,f]),bt(()=>{let e=f.state.value,t=f.state.selectedIndex,n=t,r;m&&Array.isArray(e)?(n=Ze(w,a,f.context.valuesRef.current,e,C,t),r=n===w,w===t&&!r&&(f.context.selectedItemTextRef.current=null)):(r=e!==void 0&&Le(a,e,C),r&&(n=w)),f.set(`selectedIndex`,n),r&&u.current&&(f.context.selectedItemTextRef.current=u.current)},[w,m,C,f,a]);let E=ei.useRef(`mouse`),D=ei.useRef(!1),{getButtonProps:O,buttonRef:k}=S({disabled:_,focusableWhenDisabled:!0,native:c,composite:!0}),ee={disabled:_,selected:b,highlighted:v};function A(e){if(h||g)return;let t=f.state.value;if(m){let n=Array.isArray(t)?t:[],r=b?qe(n,a,C):[...n,a];f.context.setValue(r,we(Nt,e))}else f.context.setValue(a,we(Nt,e)),f.context.setOpen(!1,we(Nt,e))}function j(){f.context.selectionRef.current.dragY=0}let M={role:`option`,"aria-selected":b,tabIndex:y&&v?0:-1,onKeyDown(e){f.set(`activeIndex`,w),e.key===` `&&f.context.typingRef.current&&e.preventDefault()},onClick(e){let t=E.current!==`touch`,n=e.nativeEvent.pointerType,r=t&&Ut(e.nativeEvent)&&(n!==void 0||v),i=t&&!r&&!D.current;D.current=!1,!(_||i)&&A(e.nativeEvent)},onPointerEnter(e){E.current=e.pointerType},onPointerMove(e){if(e.pointerType===`mouse`&&e.buttons===1){let t=f.context.selectionRef.current;t.dragY+=e.movementY,t.dragY**2>=64&&(t.allowUnselectedMouseUp=!0)}},onPointerDown(e){E.current=e.pointerType,D.current=!0,j()},onMouseUp(){if(j(),_||E.current===`touch`||D.current)return;let e=!f.context.selectionRef.current.allowSelectedMouseUp&&b,t=!f.context.selectionRef.current.allowUnselectedMouseUp&&!b;e||t||(D.current=!0,T.current?.click(),D.current=!1)}},N=L(`div`,e,{ref:[k,t,d.ref,T],state:ee,props:[p,M,l,O]}),P=ei.useMemo(()=>({selected:b,index:w,textRef:u,selectedByFocus:x}),[b,w,u,x]);return(0,ti.jsx)(Qr.Provider,{value:P,children:N})}))})))()}var ii,ai,oi,si;function ci(){return(ci=t((()=>{ii=e(n(),1),$r(),Wt(),ye(),F(),Bt(),ai=r(),oi=ii.forwardRef(function(e,t){let{selected:n}=Xr();return e.keepMounted||n?(0,ai.jsx)(si,{...e,ref:t}):null}),si=ii.memo(ii.forwardRef((e,t)=>{let{render:n,className:r,style:i,keepMounted:a,...o}=e,{selected:s}=Xr(),c=ii.useRef(null),{transitionStatus:l,setMounted:u}=xe(s),d=L(`span`,e,{ref:[t,c],state:{selected:s,transitionStatus:l},props:[{"aria-hidden":!0,children:`✔️`},o],stateAttributesMapping:Jt});return x({batch:!0,enabled:!s,open:s,ref:c,onComplete(){s||u(!1)}}),d}))})))()}var li,ui;function di(){return(di=t((()=>{li=e(n(),1),V(),$r(),F(),ui=li.memo(li.forwardRef(function(e,t){let{index:n,textRef:r,selectedByFocus:i}=Xr(),a=xn(),{render:o,className:s,style:c,...l}=e,u=li.useCallback(e=>{e&&(n===0&&(a.context.firstItemTextRef.current=e),i&&(a.context.selectedItemTextRef.current=e))},[a,n,i]);return L(`div`,e,{ref:[u,t,r],props:l})}))})))()}var U,W,fi,pi,mi,hi,gi,_i,vi,yi,bi;function xi(){return(xi=t((()=>{U=n(),In(),Un(),qn(),Xn(),er(),fr(),Kr(),Yr(),ri(),ci(),di(),a(),o(),l(),B(),on(),cn(),W=r(),fi=i({slots:{trigger:[`flex cursor-pointer items-center gap-2 pe-3 text-start`,`data-readonly:cursor-default`],value:`min-w-0 flex-1 truncate data-placeholder:text-text-input-placeholder`,icon:[`flex size-5 shrink-0 items-center justify-center transition-transform duration-150`,`[&_path]:fill-icon-input-default group-data-popup-open/select-trigger:rotate-180`,`group-disabled/select-trigger:[&_path]:fill-icon-input-disable`],content:[`w-(--anchor-width) max-h-(--available-height) overflow-hidden rounded-md`,`border border-border-default-base-primary bg-bg-default-base-primary shadow-lg`,`outline-none`],list:`max-h-[min(18rem,var(--available-height))] overflow-y-auto scroll-py-2 py-2 outline-none`,item:[`group/item mx-2 my-px flex cursor-pointer items-center gap-2 rounded-[calc(var(--radius-md)-2px)]`,`px-3 py-2 text-sm text-text-default-base-primary outline-none select-none`,`data-highlighted:bg-bg-default-base-primary-hover`,`data-disabled:cursor-default data-disabled:text-text-default-base-tertiary`],indicator:[`flex size-4 shrink-0 items-center justify-center text-text-default-base-primary`,`invisible group-data-selected/item:visible group-data-disabled/item:text-text-default-base-tertiary`]}}),pi=fi(),mi=(0,U.createContext)(null),hi=`[data-slot=modal-content], [data-slot=popover-content]`,gi=e=>e instanceof Element&&e.closest(`[data-slot=select-content]`)!==null,_i=({value:e,defaultValue:t=null,onValueChange:n,disabled:r,readOnly:i,required:a,...o})=>{let s=an(),[c,l]=(0,U.useState)(null),u=(0,U.useRef)(void 0),[d]=(0,U.useState)(t),[f,p]=(0,U.useState)(t),m=e!==void 0,h=(0,U.useRef)(()=>{});return h.current=()=>{m||p(d)},(0,U.useEffect)(()=>{let e=c?.closest(`form`);if(!e)return;let t=()=>h.current();return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[c]),(0,W.jsx)(mi,{value:{trigger:c,setTrigger:l,triggerBlur:u},children:(0,W.jsx)(Pn,{...o,value:m?e:f,onValueChange:(e,t)=>{n?.(e,t),!m&&!t.isCanceled&&p(e)},disabled:r??s?.disabled,readOnly:i??s?.readOnly,required:a??s?.required})})},_i.displayName=`Select.Root`,vi=({size:e=`md`,placeholder:t,children:n,className:r,ref:i,...a})=>{let o=an(),l=(0,U.use)(mi),d=l?.setTrigger,f=(0,U.useMemo)(()=>c(d,i),[d,i]),p=u({id:o?.controlId,"aria-labelledby":o&&!a[`aria-label`]?o.labelId:void 0,"aria-describedby":o?.describedBy,"aria-invalid":o?.invalid||void 0},a),{onBlur:m}=p;return l&&(l.triggerBlur.current=m),(0,W.jsxs)(Hn,{...p,ref:f,onBlur:e=>{gi(e.relatedTarget)||m?.(e)},"data-slot":`select-trigger`,"data-size":e,className:s(ln({size:e}),`group/select-trigger`,pi.trigger(),r),children:[(0,W.jsx)(Kn,{"data-slot":`select-value`,placeholder:t,className:pi.value(),children:n}),(0,W.jsx)(Yn,{"data-slot":`select-icon`,className:pi.icon(),children:(0,W.jsx)(Et,{className:`size-5`})})]})},vi.displayName=`Select.Trigger`,yi=({side:e=`bottom`,align:t=`start`,sideOffset:n=8,alignOffset:r,collisionPadding:i=8,"aria-label":a,"aria-labelledby":o,onBlur:c,className:l,children:u,...d})=>{let f=an(),p=(0,U.use)(mi),m=p?.trigger,h=o??(a?void 0:f?.labelId),g=a??(h?void 0:`Options`),_=m?.closest(hi)??void 0,v=m?getComputedStyle(m).direction:void 0;return(0,W.jsx)($n,{container:_,children:(0,W.jsx)(dr,{alignItemWithTrigger:!1,side:e,align:t,sideOffset:n,alignOffset:r,collisionPadding:i,className:`isolate z-(--z-index-top-layer) pointer-events-auto`,children:(0,W.jsx)(Wr,{"data-slot":`select-content`,dir:v,onBlur:e=>{c?.(e);let t=e.relatedTarget;gi(t)||t===m||p?.triggerBlur.current?.(e)},className:s(pi.content(),l),...d,children:(0,W.jsx)(Jr,{"data-slot":`select-list`,"aria-label":g,"aria-labelledby":h,className:pi.list(),children:u})})})})},yi.displayName=`Select.Content`,bi=({className:e,children:t,...n})=>(0,W.jsxs)(ni,{"data-slot":`select-item`,className:s(pi.item(),e),...n,children:[(0,W.jsx)(oi,{keepMounted:!0,"data-slot":`select-item-indicator`,className:pi.indicator(),children:(0,W.jsx)(gt,{className:`size-4`})}),(0,W.jsx)(ui,{className:`min-w-0 flex-1 truncate`,children:t})]}),bi.displayName=`Select.Item`;try{fi.displayName=`selectRecipe`,fi.__docgenInfo={description:"Style recipe for Select. Slots: `trigger` (the closed field), `value`, `icon` (the chevron),\n`content` (the floating surface), `list`, `item` and `indicator` (the check on the selected\nrow). The trigger wears `Input`'s recipe; the surface and rows match `Combobox`'s.",displayName:`selectRecipe`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the Select trigger, surface and rows`}}}catch{}try{_i.displayName=`Select.Root`,_i.__docgenInfo={description:"Root of a select: a button that opens a list of options and shows the one\npicked. Use it for a pick from a short, known list, where typing would add\nnothing. For a long list or one the user searches, use\n[Combobox](?path=/docs/components-combobox--docs); for a handful of options\nthat should all stay visible, use\n[RadioGroup](?path=/docs/components-radiogroup--docs).\n\nPass the options as `items` (`{ value, label }`) so the trigger shows the\npicked option's label rather than its value. With `name`, the form submits\n`name=value`, and `required` blocks the submission until something is picked.\n\nInside a `Field.Root`, `disabled`, `readOnly` and `required` default to the\nfield's, and the trigger takes its label, description and error. Every Base\nUI root prop is accepted and forwarded — `value`, `defaultValue`,\n`onValueChange`, `open` and so on. A native form reset puts an uncontrolled\nselect back on its `defaultValue`.\n\nWith react-hook-form, wire it through `Controller` and render the form with\n`noValidate`, as `Form.Root` does: a required select also sets the native\n`required`, and the browser would otherwise block the submit before the\nform library validates.",displayName:`Select.Root`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{},tags:{summary:`Root of a single-select dropdown picking from a short list`,see:`{@link https://base-ui.com/react/components/select Base UI Select}`,example:`<Select.Root items={plans} defaultValue="monthly" name="plan">
  <Select.Trigger placeholder="Select a plan" />
  <Select.Content>
    {plans.map(plan => (
      <Select.Item key={plan.value} value={plan.value}>
        {plan.label}
      </Select.Item>
    ))}
  </Select.Content>
</Select.Root>`}}}catch{}try{vi.displayName=`Select.Trigger`,vi.__docgenInfo={description:"The closed field: a button drawn as an `Input`, showing the picked option\n(or `placeholder`) and a chevron. Click, Enter, Space or the arrow keys\nopen the list.\n\nInside a `Field.Root` it takes the field's `id`, label, description and\n`invalid` with nothing passed by hand, and its own props win. Outside one,\ngive it an `aria-label` or point a `Label` at its `id`. Native button\nattributes are forwarded, and its `ref` reaches the button, so a form\nlibrary can focus the field on a failed submit.",displayName:`Select.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: SelectTriggerState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectTriggerState>`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Classes for the trigger, merged after its own.`,name:`className`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:"Control height, matching `Input`. Defaults to `'md'`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},placeholder:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Text shown while nothing is picked.`,name:`placeholder`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:"Renders the picked value. Defaults to the label of the matching entry in\nthe root's `items`.",name:`children`,required:!1,tags:{},type:{name:`ReactNode | ((value: any) => ReactNode)`}}},tags:{summary:`Button drawn as an input, showing the picked option and a chevron`,dataAttribute:`{string} data-slot - Always set to "select-trigger"
{string} data-popup-open - Present while the list is open
{string} data-placeholder - Present while nothing is picked`}}}catch{}try{yi.displayName=`Select.Content`,yi.__docgenInfo={description:"The floating list, the same surface as the `Combobox` list. It portals to\nthe body, matches the trigger's width, opens below it and caps its height\nto the room available, so a long list scrolls. Inside a `Modal` or a\n`Popover` it renders into that layer instead, so the layer's focus trap and\noutside press leave the list alone, and Escape closes the list first.\n\nInside a `Field.Root` the list is named after the field's label; outside\none it is named \"Options\". Pass `aria-label` or `aria-labelledby` to name it\nafter the field when a page has more than one select.",displayName:`Select.Content`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: SelectPopupState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectPopupState>`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Classes for the surface, merged after its own.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Floating surface holding the options`,dataAttribute:`{string} data-slot - Always set to "select-content"`}}}catch{}try{bi.displayName=`Select.Item`,bi.__docgenInfo={description:"One option. `value` is what the select stores and submits; the children are\nthe label shown in the row and, through the root's `items`, in the trigger.\nThe picked row carries a check. A `disabled` row is greyed out and cannot be\npicked, but the arrow keys still stop on it, so it is announced.",displayName:`Select.Item`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: SelectItemState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectItemState>`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Classes for the row, merged after its own.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Option row inside the list`,dataAttribute:`{string} data-slot - Always set to "select-item"
{string} data-selected - Present on the picked row
{string} data-highlighted - Present on the row under the pointer or the keyboard`}}}catch{}})))()}var G;function Si(){return(Si=t((()=>{xi(),G={Root:_i,Trigger:vi,Content:yi,Item:bi}})))()}var Ci,K,q,wi,J,Y,X,Z,Ti,Q,$,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki;function qi(){return(qi=t((()=>{Ci=n(),hn(),Si(),d(),on(),un(),fn(),K=r(),{expect:q,fn:wi,screen:J,userEvent:Y,waitFor:X,within:Z}=__STORYBOOK_MODULE_TEST__,Ti={title:`Components/Select`,component:G.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},onValueChange:{action:`valueChange`}},args:{items:[]},render:e=>(0,K.jsx)(`div`,{className:`w-80`,children:(0,K.jsxs)(G.Root,{...e,items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),parameters:{docs:{description:{component:"`Root` owns the picked value; `Trigger` is the closed field and `Content` the list of `Item`s."}}}},Q=[{value:`AZ`,label:`Arizona`},{value:`CA`,label:`California`},{value:`FL`,label:`Florida`},{value:`GA`,label:`Georgia`},{value:`NY`,label:`New York`},{value:`TX`,label:`Texas`}],$=async e=>(await Y.click(e),J.findByRole(`listbox`)),Ei=async()=>{await Y.keyboard(`{Escape}`),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument())},Di={args:{onValueChange:wi()},play:async({args:e,canvasElement:t})=>{let n=Z(t).getByRole(`combobox`,{name:`State`});await q(n).toHaveTextContent(`Select a state`);let r=await $(n);await q(r).toHaveAccessibleName(`Options`),await Y.click(Z(r).getByRole(`option`,{name:`Florida`})),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveTextContent(`Florida`),await q(e.onValueChange).toHaveBeenLastCalledWith(`FL`,q.anything())}},Oi={args:{defaultValue:`TX`},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`State`});await q(t).toHaveTextContent(`Texas`);let n=await $(t);await q(n.scrollHeight).toBe(n.clientHeight),await q(Z(n).getByRole(`option`,{name:`Texas`})).toHaveAttribute(`aria-selected`,`true`),await Ei()}},ki={render:()=>(0,K.jsx)(`div`,{className:`flex w-80 flex-col gap-4`,children:[`sm`,`md`,`lg`].map(e=>(0,K.jsxs)(G.Root,{items:Q,defaultValue:`CA`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State ${e}`,size:e}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]},e))}),play:async({canvasElement:e})=>{let t=Z(e);for(let[e,n]of[[`sm`,32],[`md`,40],[`lg`,48]])await q(t.getByRole(`combobox`,{name:`State ${e}`}).getBoundingClientRect().height).toBe(n)}},Ai={render:()=>(0,K.jsx)(`div`,{className:`w-80`,children:(0,K.jsxs)(sn.Root,{invalid:!0,required:!0,children:[(0,K.jsx)(sn.Label,{children:`State`}),(0,K.jsxs)(G.Root,{items:Q,children:[(0,K.jsx)(G.Trigger,{placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]}),(0,K.jsx)(sn.Description,{children:`Where the risk is located.`}),(0,K.jsx)(sn.Error,{errors:[{message:`Choose a state`}]})]})}),play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:/State/});await q(t).toHaveAttribute(`aria-invalid`,`true`),await q(t).toHaveAccessibleDescription(/located.*Choose a state|Choose a state.*located/),await q(t).toHaveStyle({borderColor:`rgb(217, 38, 38)`});let n=await $(t);await q(n).toHaveAccessibleName(/State/),await Ei()}},ji={args:{disabled:!0,defaultValue:`CA`},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`State`});await q(t).toBeDisabled(),await Y.click(t,{pointerEventsCheck:0}),await q(J.queryByRole(`listbox`)).not.toBeInTheDocument()}},Mi={args:{onValueChange:wi()},render:e=>(0,K.jsx)(`div`,{className:`w-80`,children:(0,K.jsxs)(G.Root,{...e,items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,disabled:e===`FL`,children:t},e))})]})}),play:async({args:e,canvasElement:t})=>{let n=await $(Z(t).getByRole(`combobox`,{name:`State`}));await q(Z(n).getByRole(`option`,{name:`Florida`})).toHaveAttribute(`aria-disabled`,`true`),await Y.click(Z(n).getByRole(`option`,{name:`Florida`})),await q(e.onValueChange).not.toHaveBeenCalled(),Z(n).getByRole(`option`,{name:`California`}).focus(),await Y.keyboard(`{ArrowDown}{Enter}`),await q(e.onValueChange).not.toHaveBeenCalled(),await Ei()}},Ni={args:{readOnly:!0,defaultValue:`CA`,onValueChange:wi()},play:async({args:e,canvasElement:t})=>{let n=Z(t).getByRole(`combobox`,{name:`State`}),r=await $(n);await Y.click(Z(r).getByRole(`option`,{name:`Texas`})),await Y.keyboard(`{ArrowDown}{Enter}`),await Y.keyboard(`g`),await Y.keyboard(`{Enter}`),await q(n).toHaveTextContent(`California`),await q(e.onValueChange).not.toHaveBeenCalled(),await Ei()}},Pi={render:()=>{let[e,t]=(0,Ci.useState)(`CA`);return(0,K.jsxs)(`div`,{className:`flex w-80 flex-col items-start gap-6`,children:[(0,K.jsxs)(`div`,{className:`flex gap-3`,children:[(0,K.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,K.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(`NY`),children:`Choose New York`})]}),(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsxs)(G.Root,{items:Q,value:e,onValueChange:t,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e??`none`]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:`State`});await Y.click(t.getByRole(`button`,{name:`Choose New York`})),await q(n).toHaveTextContent(`New York`),await Y.click(t.getByRole(`button`,{name:`Clear`})),await q(n).toHaveTextContent(`Select a state`),await q(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},Fi={render:()=>{let[e,t]=(0,Ci.useState)(null);return(0,K.jsxs)(`form`,{className:`flex w-80 flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsxs)(G.Root,{items:Q,name:`state`,required:!0,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),(0,K.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(t.queryByRole(`status`)).not.toBeInTheDocument();let n=await $(t.getByRole(`combobox`,{name:`State`}));await Y.click(Z(n).getByRole(`option`,{name:`Georgia`})),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`Submitted: GA`)}},Ii={render:()=>{let{control:e,handleSubmit:t}=mn({defaultValues:{state:null}}),[n,r]=(0,Ci.useState)(null);return(0,K.jsxs)(`form`,{noValidate:!0,className:`flex w-80 flex-col items-start gap-6`,onSubmit:t(e=>r(e.state)),children:[(0,K.jsx)(gn,{name:`state`,control:e,rules:{required:`Choose a state`},render:({field:e,fieldState:t})=>(0,K.jsxs)(sn.Root,{invalid:t.invalid,required:!0,className:`w-full`,children:[(0,K.jsx)(sn.Label,{children:`State`}),(0,K.jsxs)(G.Root,{items:Q,value:e.value,onValueChange:e.onChange,children:[(0,K.jsx)(G.Trigger,{ref:e.ref,onBlur:e.onBlur,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]}),(0,K.jsx)(sn.Error,{errors:[t.error]})]})}),(0,K.jsx)(f,{type:`submit`,children:`Submit`}),n&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:/State/});await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(n).toHaveFocus(),await X(()=>q(n).toHaveAccessibleDescription(`Choose a state`));let r=await $(n);await Y.click(Z(r).getByRole(`option`,{name:`Arizona`})),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`Submitted: AZ`)}},Li={render:()=>{let e=[{value:`ho3`,label:`Homeowners HO-3, special form, including dwelling and contents`},{value:`ho6`,label:`Condo unit owners HO-6`}];return(0,K.jsx)(`div`,{className:`w-60`,children:(0,K.jsxs)(G.Root,{items:e,defaultValue:`ho3`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`Policy form`}),(0,K.jsx)(G.Content,{children:e.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`Policy form`}),n=t.querySelector(`[data-slot=select-value]`);await q(t.getBoundingClientRect().height).toBe(40),await q(n.scrollWidth).toBeGreaterThan(n.clientWidth)}},Ri={render:()=>(0,K.jsxs)(`div`,{className:`grid w-[42rem] grid-cols-2 gap-6`,children:[[[`Placeholder`,{}],[`Filled`,{defaultValue:`TX`}],[`Disabled`,{defaultValue:`TX`,disabled:!0}],[`Read-only`,{defaultValue:`TX`,readOnly:!0}]].map(([e,t])=>(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,K.jsxs)(G.Root,{items:Q,...t,children:[(0,K.jsx)(G.Trigger,{"aria-label":e,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})]},e)),(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:`Invalid`}),(0,K.jsxs)(G.Root,{items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`Invalid`,"aria-invalid":!0,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})]})]})},zi={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:`CA`,onValueChange:wi()},play:async({args:e,canvasElement:t})=>{let n=Z(t).getByRole(`combobox`,{name:`State`});await Y.tab(),await q(n).toHaveFocus(),await Y.keyboard(`{ArrowDown}`);let r=await J.findByRole(`listbox`);await X(()=>q(Z(r).getByRole(`option`,{name:`California`})).toHaveFocus()),await Y.keyboard(`{ArrowDown}{Enter}`),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveTextContent(`Florida`),await q(e.onValueChange).toHaveBeenLastCalledWith(`FL`,q.anything()),await q(n).toHaveFocus(),await Y.keyboard(`{Enter}`),await J.findByRole(`listbox`),await Y.keyboard(`{Escape}`),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveTextContent(`Florida`),await q(n).toHaveFocus()}},Bi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let e=Array.from({length:30},(e,t)=>({value:`option-${t}`,label:`Option ${t+1}`}));return(0,K.jsx)(`div`,{className:`m-4 w-72`,children:(0,K.jsxs)(G.Root,{items:e,children:[(0,K.jsx)(G.Trigger,{"aria-label":`Option`,placeholder:`Pick one`}),(0,K.jsx)(G.Content,{children:e.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`Option`}),n=await $(t),r=n.closest(`[data-slot=select-content]`),i=t.getBoundingClientRect(),a=r.getBoundingClientRect();await q(Math.round(a.width)).toBe(Math.round(i.width)),await q(Math.round(a.left)).toBe(Math.round(i.left)),await q(Math.round(a.top-i.bottom)).toBe(8),await q(n.scrollHeight).toBeGreaterThan(n.clientHeight),await Ei()}},Vi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,Ci.useState)(null);return(0,K.jsxs)(`form`,{className:`flex w-80 flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsxs)(G.Root,{items:Q,name:`state`,defaultValue:`CA`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),(0,K.jsxs)(`div`,{className:`flex gap-3`,children:[(0,K.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,K.jsx)(f,{type:`submit`,children:`Submit`})]}),e&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:`State`}),r=await $(n);await Y.click(Z(r).getByRole(`option`,{name:`Georgia`})),await q(n).toHaveTextContent(`Georgia`),await Y.click(t.getByRole(`button`,{name:`Reset`})),await q(n).toHaveTextContent(`California`),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`Submitted: CA`)}},Hi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,K.jsxs)(dn.Root,{children:[(0,K.jsx)(dn.Trigger,{asChild:!0,children:(0,K.jsx)(f,{variant:`secondary`,children:`Edit address`})}),(0,K.jsxs)(dn.Content,{children:[(0,K.jsx)(dn.Title,{children:`Edit address`}),(0,K.jsx)(dn.Body,{children:(0,K.jsxs)(G.Root,{items:Q,defaultValue:`CA`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})]})]}),play:async({canvasElement:e})=>{let t=Z(document.body);await Y.click(Z(e).getByRole(`button`,{name:`Edit address`}));let n=await t.findByRole(`dialog`,{name:`Edit address`}),r=Z(n).getByRole(`combobox`,{name:`State`});r.focus(),await Y.keyboard(`{ArrowDown}`);let i=await t.findByRole(`listbox`);await q(n).toContainElement(i),await X(()=>q(Z(i).getByRole(`option`,{name:`California`})).toHaveFocus()),await Y.keyboard(`{ArrowDown}`),await q(Z(i).getByRole(`option`,{name:`Florida`})).toHaveFocus(),await Y.keyboard(`{Enter}`),await X(()=>q(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(r).toHaveTextContent(`Florida`),await Y.keyboard(`{ArrowDown}`),await t.findByRole(`listbox`),await Y.keyboard(`{Escape}`),await X(()=>q(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveAttribute(`data-state`,`open`),await Y.keyboard(`{Escape}`),await X(()=>q(n).toHaveAttribute(`data-state`,`closed`))}},Ui={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,K.jsxs)(pn.Root,{children:[(0,K.jsx)(pn.Trigger,{asChild:!0,children:(0,K.jsx)(f,{variant:`secondary`,children:`Filter`})}),(0,K.jsx)(pn.Content,{className:`w-72`,children:(0,K.jsxs)(G.Root,{items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Any state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})]}),play:async({canvasElement:e})=>{let t=Z(document.body),n=Z(e).getByRole(`button`,{name:`Filter`});await Y.click(n);let r=await t.findByRole(`combobox`,{name:`State`}),i=await $(r);await Y.keyboard(`{ArrowDown}`),await q(i.querySelector(`:focus`)).not.toBeNull(),await Y.keyboard(`{Escape}`),await X(()=>q(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(r).toBeVisible(),await Y.keyboard(`{Escape}`),await X(()=>q(t.queryByRole(`combobox`,{name:`State`})).not.toBeInTheDocument())}},Wi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,K.jsx)(`div`,{dir:`rtl`,className:`w-80`,children:(0,K.jsxs)(G.Root,{items:Q,defaultValue:`TX`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),play:async({canvasElement:e})=>{let t=await $(Z(e).getByRole(`combobox`,{name:`State`}));await q(getComputedStyle(t).direction).toBe(`rtl`),await Ei()}},Gi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,Ci.useState)(0);return(0,K.jsxs)(`div`,{className:`flex w-80 flex-col items-start gap-6`,children:[(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsxs)(G.Root,{items:Q,defaultValue:`CA`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,onBlur:()=>t(e=>e+1)}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),(0,K.jsx)(f,{variant:`secondary`,children:`Next`}),(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Blurs: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:`State`});n.focus(),await Y.keyboard(`{ArrowDown}`);let r=await J.findByRole(`listbox`);await Y.keyboard(`{ArrowDown}{ArrowDown}`),await q(r.querySelector(`:focus`)).not.toBeNull(),await q(t.getByRole(`status`)).toHaveTextContent(`Blurs: 0`),await Ei(),await q(n).toHaveFocus(),await q(t.getByRole(`status`)).toHaveTextContent(`Blurs: 0`),await Y.tab(),await q(t.getByRole(`status`)).toHaveTextContent(`Blurs: 1`),await $(n),await Y.click(t.getByRole(`button`,{name:`Next`})),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(t.getByRole(`status`)).toHaveTextContent(`Blurs: 2`)}},Di.parameters={...Di.parameters,docs:{...Di.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(within(list).getByRole('option', {
      name: 'Florida'
    }));
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('FL', expect.anything());
  }
}`,...Di.parameters?.docs?.source},description:{story:`@summary Pick an option from the list`,...Di.parameters?.docs?.description}}},Oi.parameters={...Oi.parameters,docs:{...Oi.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'TX'
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    await expect(trigger).toHaveTextContent('Texas');
    const list = await open(trigger);
    await expect(list.scrollHeight).toBe(list.clientHeight);
    await expect(within(list).getByRole('option', {
      name: 'Texas'
    })).toHaveAttribute('aria-selected', 'true');
    await close();
  }
}`,...Oi.parameters?.docs?.source},description:{story:`Starts on a value; the list opens with that option checked.

@summary Uncontrolled with a starting value`,...Oi.parameters?.docs?.description}}},ki.parameters={...ki.parameters,docs:{...ki.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
            {(['sm', 'md', 'lg'] as const).map(size => <Select.Root key={size} items={STATES} defaultValue="CA">
                    <Select.Trigger aria-label={\`State \${size}\`} size={size} />
                    <Select.Content>
                        {STATES.map(({
          value,
          label
        }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>)}
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const [size, height] of [['sm', 32], ['md', 40], ['lg', 48]] as const) {
      await expect(canvas.getByRole('combobox', {
        name: \`State \${size}\`
      }).getBoundingClientRect().height).toBe(height);
    }
  }
}`,...ki.parameters?.docs?.source},description:{story:`Trigger heights match \`Input\`: 32, 40 and 48px.

@summary Small, medium and large triggers`,...ki.parameters?.docs?.description}}},Ai.parameters={...Ai.parameters,docs:{...Ai.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80">
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
}`,...Ai.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, the label, description, error, `invalid` and\n`required` reach the trigger with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...Ai.parameters?.docs?.description}}},ji.parameters={...ji.parameters,docs:{...ji.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'CA'
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    await expect(trigger).toBeDisabled();
    await userEvent.click(trigger, {
      pointerEventsCheck: 0
    });
    await expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  }
}`,...ji.parameters?.docs?.source},description:{story:`@summary Whole select disabled`,...ji.parameters?.docs?.description}}},Mi.parameters={...Mi.parameters,docs:{...Mi.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => <div className="w-80">
            <Select.Root {...args} items={STATES}>
                <Select.Trigger aria-label="State" placeholder="Select a state" />
                <Select.Content>
                    {STATES.map(({
          value,
          label
        }) => <Select.Item key={value} value={value} disabled={value === 'FL'}>
                            {label}
                        </Select.Item>)}
                </Select.Content>
            </Select.Root>
        </div>,
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
}`,...Mi.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest selectable. The arrow keys still stop
on it, so it is announced, but neither Enter nor a press picks it.

@summary One option disabled`,...Mi.parameters?.docs?.description}}},Ni.parameters={...Ni.parameters,docs:{...Ni.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
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
    const list = await open(trigger);
    await userEvent.click(within(list).getByRole('option', {
      name: 'Texas'
    }));
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await userEvent.keyboard('g');
    await userEvent.keyboard('{Enter}');
    await expect(trigger).toHaveTextContent('California');
    await expect(args.onValueChange).not.toHaveBeenCalled();
    await close();
  }
}`,...Ni.parameters?.docs?.source},description:{story:`The list still opens to show the options, but neither a press, the arrow
keys nor typing a letter changes the value.

@summary Read-only select`,...Ni.parameters?.docs?.description}}},Pi.parameters={...Pi.parameters,docs:{...Pi.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<string | null>('CA');
    return <div className="flex w-80 flex-col items-start gap-6">
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
}`,...Pi.parameters?.docs?.source},description:{story:`@summary Controlled select whose value is set from outside`,...Pi.parameters?.docs?.description}}},Fi.parameters={...Fi.parameters,docs:{...Fi.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex w-80 flex-col items-start gap-6" onSubmit={event => {
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
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(canvas.queryByRole('status')).not.toBeInTheDocument();
    const list = await open(canvas.getByRole('combobox', {
      name: 'State'
    }));
    await userEvent.click(within(list).getByRole('option', {
      name: 'Georgia'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: GA');
  }
}`,...Fi.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value`, and `required` blocks the\nsubmission until something is picked.\n\n@summary Native form submission",...Fi.parameters?.docs?.description}}},Ii.parameters={...Ii.parameters,docs:{...Ii.parameters?.docs,source:{originalSource:`{
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
    return (
      // \`noValidate\`, as \`Form.Root\` renders it: the field's validation is the form library's.
      <form noValidate className="flex w-80 flex-col items-start gap-6" onSubmit={handleSubmit(data => setSubmitted(data.state))}>
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
            </form>
    );
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
    await expect(trigger).toHaveFocus();
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
}`,...Ii.parameters?.docs?.source},description:{story:"With react-hook-form, wire the select through `Controller` and put\n`field.ref` on the trigger, so a failed submit focuses it.\n\n@summary React Hook Form through Controller",...Ii.parameters?.docs?.description}}},Li.parameters={...Li.parameters,docs:{...Li.parameters?.docs,source:{originalSource:`{
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
}`,...Li.parameters?.docs?.source},description:{story:`A long option label is cut with an ellipsis in the trigger and in its row,
and the chevron keeps its place.

@summary Long labels truncate`,...Li.parameters?.docs?.description}}},Ri.parameters={...Ri.parameters,docs:{...Ri.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-[42rem] grid-cols-2 gap-6">
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
}`,...Ri.parameters?.docs?.source},description:{story:`Every state of the trigger side by side, for checking against the design.

@summary Visual comparison of the trigger states`,...Ri.parameters?.docs?.description}}},zi.parameters={...zi.parameters,docs:{...zi.parameters?.docs,source:{originalSource:`{
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
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    const list = await screen.findByRole('listbox');
    await waitFor(() => expect(within(list).getByRole('option', {
      name: 'California'
    })).toHaveFocus());
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
}`,...zi.parameters?.docs?.source},description:{story:`Enter, Space or the arrow keys open the list; the arrows move, Enter picks
and Escape closes it, handing focus back to the trigger.

@summary Keyboard selection`,...zi.parameters?.docs?.description}}},Bi.parameters={...Bi.parameters,docs:{...Bi.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const many = Array.from({
      length: 30
    }, (_, index) => ({
      value: \`option-\${index}\`,
      label: \`Option \${index + 1}\`
    }));
    return <div className="m-4 w-72">
                <Select.Root items={many}>
                    <Select.Trigger aria-label="Option" placeholder="Pick one" />
                    <Select.Content>
                        {many.map(({
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
      name: 'Option'
    });
    const list = await open(trigger);
    const surface = list.closest('[data-slot=select-content]')!;
    const box = trigger.getBoundingClientRect();
    const panel = surface.getBoundingClientRect();
    await expect(Math.round(panel.width)).toBe(Math.round(box.width));
    await expect(Math.round(panel.left)).toBe(Math.round(box.left));
    await expect(Math.round(panel.top - box.bottom)).toBe(8);
    await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight);
    await close();
  }
}`,...Bi.parameters?.docs?.source},description:{story:`The list matches the trigger's width, opens below it and scrolls once it
runs out of height.

@summary List geometry and scrolling`,...Bi.parameters?.docs?.description}}},Vi.parameters={...Vi.parameters,docs:{...Vi.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex w-80 flex-col items-start gap-6" onSubmit={event => {
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
    await expect(trigger).toHaveTextContent('California');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: CA');
  }
}`,...Vi.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled select back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...Vi.parameters?.docs?.description}}},Hi.parameters={...Hi.parameters,docs:{...Hi.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Edit address</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Edit address</Modal.Title>
                <Modal.Body>
                    <Select.Root items={STATES} defaultValue="CA">
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
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const list = await body.findByRole('listbox');
    await expect(dialog).toContainElement(list);
    await waitFor(() => expect(within(list).getByRole('option', {
      name: 'California'
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    await expect(within(list).getByRole('option', {
      name: 'Florida'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await userEvent.keyboard('{ArrowDown}');
    await body.findByRole('listbox');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
  }
}`,...Hi.parameters?.docs?.source},description:{story:`Inside a \`Modal\`, the list renders into the dialog, so the arrow keys keep
focus on the options. Escape closes the list first and the modal on the
next press.

@summary Keyboard and Escape inside a Modal`,...Hi.parameters?.docs?.description}}},Ui.parameters={...Ui.parameters,docs:{...Ui.parameters?.docs,source:{originalSource:`{
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
    await expect(trigger).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('combobox', {
      name: 'State'
    })).not.toBeInTheDocument());
  }
}`,...Ui.parameters?.docs?.source},description:{story:`Inside a \`Popover\`, Escape on the open list closes the list only; the next
one closes the popover.

@summary Escape inside a Popover`,...Ui.parameters?.docs?.description}}},Wi.parameters={...Wi.parameters,docs:{...Wi.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <div dir="rtl" className="w-80">
            <Select.Root items={STATES} defaultValue="TX">
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
        </div>,
  play: async ({
    canvasElement
  }) => {
    const list = await open(within(canvasElement).getByRole('combobox', {
      name: 'State'
    }));
    await expect(getComputedStyle(list).direction).toBe('rtl');
    await close();
  }
}`,...Wi.parameters?.docs?.source},description:{story:`Under a \`dir="rtl"\` container the list keeps the direction, even though it
renders away from the trigger.

@summary Right-to-left`,...Wi.parameters?.docs?.description}}},Gi.parameters={...Gi.parameters,docs:{...Gi.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [blurs, setBlurs] = useState(0);
    return <div className="flex w-80 flex-col items-start gap-6">
                <div className="w-full">
                    <Select.Root items={STATES} defaultValue="CA">
                        <Select.Trigger aria-label="State" onBlur={() => setBlurs(count => count + 1)} />
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
                <Button variant="secondary">Next</Button>
                <output className="text-sm">Blurs: {blurs}</output>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', {
      name: 'State'
    });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const list = await screen.findByRole('listbox');
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await expect(list.querySelector(':focus')).not.toBeNull();
    await expect(canvas.getByRole('status')).toHaveTextContent('Blurs: 0');
    await close();
    await expect(trigger).toHaveFocus();
    await expect(canvas.getByRole('status')).toHaveTextContent('Blurs: 0');
    await userEvent.tab();
    await expect(canvas.getByRole('status')).toHaveTextContent('Blurs: 1');
    await open(trigger);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next'
    }));
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(canvas.getByRole('status')).toHaveTextContent('Blurs: 2');
  }
}`,...Gi.parameters?.docs?.source},description:{story:`Opening the list and moving through it is still using the field, so the
trigger's \`onBlur\` waits: it runs once, when focus leaves the select.

@summary onBlur only when focus leaves the select`,...Gi.parameters?.docs?.description}}},Ki=[`Default`,`WithValue`,`Sizes`,`InsideField`,`Disabled`,`DisabledItem`,`ReadOnly`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`AllStates`,`Keyboard`,`ListGeometry`,`FormReset`,`InsideModal`,`InsidePopover`,`RightToLeft`,`BlurOnLeave`]})))()}qi();export{Ri as AllStates,Gi as BlurOnLeave,Pi as Controlled,Di as Default,ji as Disabled,Mi as DisabledItem,Vi as FormReset,Fi as InForm,Ai as InsideField,Hi as InsideModal,Ui as InsidePopover,zi as Keyboard,Bi as ListGeometry,Li as LongLabel,Ni as ReadOnly,Wi as RightToLeft,ki as Sizes,Ii as WithReactHookForm,Oi as WithValue,Ki as __namedExportsOrder,Ti as default};