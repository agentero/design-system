import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-Cz5t4CPo.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./dist-C8AlzbfS.js";import{n as o,t as s}from"./utils-nsk-j2e0.js";import{i as c,n as l,r as u}from"./merge-props-DwIpLyc6.js";import{n as d,t as f}from"./button-VbtanGK5.js";import{$t as p,Bt as m,C as h,Ct as g,Ft as _,G as v,H as y,I as b,It as x,L as S,M as C,N as w,Nt as T,O as E,Qt as D,R as O,S as ee,Sn as k,St as A,T as j,U as M,W as N,_ as P,_n as F,_t as te,a as ne,an as re,at as ie,bn as ae,cn as oe,dn as I,f as se,fn as ce,g as L,gn as le,h as ue,hn as de,i as R,in as fe,it as pe,k as me,ln as he,m as ge,mn as _e,mt as ve,n as ye,nn as be,nt as xe,o as Se,p as Ce,pn as we,r as Te,rn as Ee,t as De,un as Oe,ut as ke,v as Ae,vn as je,w as Me,wt as Ne,xn as Pe,y as Fe,yn as Ie,z as Le}from"./useCompositeListItem-BAxFggsl.js";import{$ as Re,A as ze,C as Be,Ct as Ve,Dt as He,E as Ue,Et as z,F as We,G as Ge,H as Ke,I as qe,J as Je,K as Ye,L as Xe,M as Ze,N as Qe,O as $e,Ot as et,P as tt,Q as nt,R as rt,S as it,T as at,Tt as ot,U as st,V as ct,W as lt,X as ut,Y as dt,Z as ft,_ as pt,_t as mt,a as ht,at as gt,b as _t,bt as vt,c as yt,ct as bt,d as xt,dt as St,et as Ct,f as wt,g as Tt,gt as Et,h as Dt,it as Ot,j as kt,k as At,kt as jt,l as Mt,lt as Nt,m as Pt,n as Ft,nt as It,o as Lt,ot as Rt,p as zt,q as Bt,r as Vt,rt as Ht,s as Ut,tt as Wt,u as Gt,ut as Kt,vt as qt,wt as Jt,x as Yt,y as Xt,yt as Zt,z as Qt}from"./icons-DULoIvJ3.js";import{C as $t,O as en,S as tn,d as nn,f as rn,k as an}from"./floating-ui.react-dom-nwHLs0aR.js";import{a as on,n as sn,t as B}from"./field-BrBSnM3Y.js";import{n as cn,r as ln}from"./input-D4hUhiw1.js";import{n as un,t as dn}from"./modal-DpAG4plz.js";import{n as fn,t as pn}from"./popover-BPG46oie.js";import{a as mn,r as hn,t as gn}from"./index.esm-DfaU96v2.js";import{d as _n,n as vn,s as yn}from"./isElementDisabled-BeiN03IE.js";function bn(e){let[t,n]=xn.useState({current:e,previous:null});return Object.is(e,t.current)||n({current:e,previous:t.current}),t.previous}var xn;function Sn(){return(Sn=t((()=>{xn=e(n(),1)})))()}function Cn(){let e=En.useContext(Dn);if(e===void 0)throw Error(Pe(60));return e}function wn(){let e=En.useContext(On);if(e===void 0)throw Error(Pe(101));return e}function Tn(){let e=En.useContext(kn);if(e===void 0)throw Error(Pe(61));return e}var En,Dn,On,kn;function V(){return(V=t((()=>{k(),En=e(n(),1),Dn=En.createContext(void 0),On=En.createContext(void 0),kn=En.createContext(void 0)})))()}var An;function jn(){return(jn=t((()=>{qe(),Ue(),An={id:e=>e.id,labelId:e=>e.labelId,modal:e=>e.modal,items:e=>e.items,itemToStringLabel:e=>e.itemToStringLabel,isItemEqualToValue:e=>e.isItemEqualToValue,value:e=>e.value,hasSelectedValue:e=>{let{value:t,multiple:n,itemToStringValue:r}=e;return t==null?!1:n&&Array.isArray(t)?t.length>0:kt(t,r)!==``},hasNullItemLabel:(e,t)=>t?at(e.items):!1,open:e=>e.open,mounted:e=>e.mounted,forceMount:e=>e.forceMount,transitionStatus:e=>e.transitionStatus,openMethod:e=>e.openMethod,activeIndex:e=>e.activeIndex,selectedIndex:e=>e.selectedIndex,isActive:(e,t)=>e.activeIndex===t,isSelected:(e,t)=>{let n=e.isItemEqualToValue,r=e.value;return e.multiple?Array.isArray(r)&&r.some(e=>Ze(t,e,n)):Ze(t,r,n)},isSelectedByFocus:(e,t)=>e.selectedIndex===t,popupProps:e=>e.popupProps,triggerProps:e=>e.triggerProps,triggerElement:e=>e.triggerElement,positionerElement:e=>e.positionerElement,listElement:e=>e.listElement,popupSide:e=>e.popupSide,scrollUpArrowVisible:e=>e.scrollUpArrowVisible,scrollDownArrowVisible:e=>e.scrollDownArrowVisible,hasScrollArrows:e=>e.hasScrollArrows}})))()}function Mn(e,t=-(2**53-1),n=2**53-1){return Math.max(t,Math.min(e,n))}function Nn(e,t){return Math.max(0,e-t)}function Pn(e,t){if(t<=0)return 0;let n=Mn(e,0,t),r=n,i=t-n,a=r<=1,o=i<=1;return a&&o?r<=i?0:t:a?0:o?t:n}function Fn(){return(Fn=t((()=>{})))()}function In(e){let{id:t,value:n,defaultValue:r=null,onValueChange:i,open:a,defaultOpen:o=!1,onOpenChange:s,name:c,form:l,autoComplete:u,disabled:d=!1,readOnly:f=!1,required:p=!1,modal:m=!0,actionsRef:g,inputRef:_,onOpenChangeComplete:y,items:b,multiple:x=!1,itemToStringLabel:C,itemToStringValue:w,isItemEqualToValue:T=Qe,highlightItemOnHover:E=!0,children:D}=e,{clearErrors:O}=h(),{setDirty:ee,setTouched:k,setFocused:A,validityData:M,setFilled:N,name:F,disabled:ne,validation:re,validationMode:ie}=me(),oe=P({id:t}),I=ne||d,se=F??c,[L,de]=ae({controlled:n,default:x?r??be:r,name:`Select`,state:`value`}),[R,pe]=ae({controlled:a,default:o,name:`Select`,state:`open`}),ge=H.useRef([]),ve=H.useRef([]),ye=H.useRef(null),Se=H.useRef(null),Ce=H.useRef(0),we=H.useRef(null),Te=H.useRef([]),De=H.useRef(!1),ke=H.useRef(null),Ae=H.useRef(null),Me=H.useRef({allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1,dragY:0}),Ne=H.useRef(!1),Pe=H.useRef(L),{mounted:Fe,setMounted:Ie,transitionStatus:Re}=Le(R),{openMethod:Ve,triggerProps:Ue}=Be(R),z=le(()=>new Jt({id:oe,labelId:void 0,modal:m,multiple:x,itemToStringLabel:C,itemToStringValue:w,isItemEqualToValue:T,value:L,open:R,mounted:Fe,transitionStatus:Re,items:b,forceMount:!1,openMethod:null,activeIndex:null,selectedIndex:null,popupProps:Ee,triggerProps:Ee,triggerElement:null,positionerElement:null,listElement:null,popupSide:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1,hasScrollArrows:!1},{setValue:fe,setOpen:fe,handleScrollArrowVisibility:fe,onOpenChangeComplete:fe,listRef:ge,popupRef:ye,scrollHandlerRef:Se,scrollArrowsMountedCountRef:Ce,valueRef:we,valuesRef:Te,labelsRef:ve,typingRef:De,selectionRef:Me,firstItemTextRef:ke,selectedItemTextRef:Ae,alignItemWithTriggerActiveRef:Ne,initialValueRef:Pe},An)).current,Ge=z.useState(`activeIndex`),qe=z.useState(`selectedIndex`),Je=z.useState(`triggerElement`),Ze=z.useState(`positionerElement`),$e=bn(Ve),et=Ve??$e,tt=H.useMemo(()=>x?``:kt(L,w),[x,L,w]),rt=H.useMemo(()=>x&&Array.isArray(L)?L.map(e=>kt(e,w)):kt(L,w),[x,L,w]),it=He(Je),at=_e(()=>rt);j(it,oe,L,at,!I,c);let ot=x?Array.isArray(L)&&L.length>0:L!=null&&tt!==``;je(()=>{N(ot)},[ot,N]),je(function(){let e=We(Te.current,L,T,x);e===null&&(Ae.current=null),!R&&z.set(`selectedIndex`,e)},[x,R,L,T,z]),ue(L,()=>{O(se),ee(Xe(L,M.initialValue,T)),re.change(L)});let st=_e((e,t)=>{s?.(e,t),!t.isCanceled&&(pe(e),!e&&(t.reason===`focus-out`||t.reason===`outside-press`)&&(k(!0),A(!1),ie===`onBlur`&&re.commit(L)))}),ct=_e(()=>{Ie(!1),z.update({activeIndex:null,openMethod:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1}),y?.(!1)});S({enabled:!g,open:R,ref:ye,onComplete(){R||ct()}}),H.useImperativeHandle(g,()=>({unmount:ct}),[ct]);let dt=_e((e,t)=>{i?.(e,t),!t.isCanceled&&de(e)}),ft=_e(e=>{let t=Nn(e.scrollHeight,e.clientHeight),n=Pn(e.scrollTop,t),r=n>0,i=n<t;z.set(`scrollUpArrowVisible`,r),z.set(`scrollDownArrowVisible`,i)}),pt=Ye({open:R,onOpenChange:st,elements:{reference:Je,floating:Ze}}),mt=nt(pt,{enabled:!I,event:`mousedown`}),ht=ut(pt),gt=lt(pt,{enabled:!I,listRef:ge,activeIndex:Ge,selectedIndex:qe,disabledIndices:be,onNavigate(e){(e!==null||R)&&z.set(`activeIndex`,e)},focusItemOnHover:E}),_t=Ke(pt,{enabled:!I&&(R||!f&&!x),listRef:ve,activeIndex:Ge,selectedIndex:qe,disabledIndices:e=>vn(ge.current[e]),onMatch(e){R?z.set(`activeIndex`,e):dt(Te.current[e],xe(te))},onTyping(e){De.current=e}}),vt=H.useMemo(()=>v(_t.reference,gt.reference,ht.reference,mt.reference,Ue),[mt.reference,_t.reference,gt.reference,ht.reference,Ue]),yt=H.useMemo(()=>v(Bt,_t.floating,gt.floating,ht.floating),[_t.floating,gt.floating,ht.floating]),bt=gt.item??Ee;z.useContextCallback(`setValue`,dt),z.useContextCallback(`setOpen`,st),z.useContextCallback(`handleScrollArrowVisibility`,ft),z.useContextCallback(`onOpenChangeComplete`,y),jt(()=>{z.update({popupProps:yt,triggerProps:vt})}),z.useSyncedValues({id:oe,modal:m,multiple:x,value:L,open:R,mounted:Fe,transitionStatus:Re,popupProps:yt,triggerProps:vt,items:b,itemToStringLabel:C,itemToStringValue:w,isItemEqualToValue:T,openMethod:et});let xt=H.useMemo(()=>({disabled:I,readOnly:f,required:p,multiple:x,highlightItemOnHover:E,itemProps:bt}),[I,f,p,x,E,bt]),St=ce(_,re.inputRef),Ct=x?void 0:se,wt=H.useMemo(()=>!x||!Array.isArray(L)||!se?null:L.map(e=>{let t=kt(e,w);return(0,Ln.jsx)(`input`,{type:`hidden`,form:l,name:se,value:t,disabled:I},t)}),[x,L,l,se,w,I]);return(0,Ln.jsxs)(Dn.Provider,{value:z,children:[(0,Ln.jsx)(On.Provider,{value:xt,children:(0,Ln.jsx)(kn.Provider,{value:pt,children:D})}),(0,Ln.jsx)(`input`,{...re.getValidationProps(I,{onFocus(){z.state.triggerElement?.focus({focusVisible:!0})},onChange(e){if(e.nativeEvent.defaultPrevented||I||f)return;let t=e.currentTarget.value,n=xe(te,e.nativeEvent);function r(){if(x)return;let e=t.toLowerCase(),r=Te.current.findIndex(t=>kt(t,w).toLowerCase()===e||ze(t,C).toLowerCase()===e);r===-1&&(r=Te.current.findIndex((t,n)=>{let r=ve.current[n];return r!=null&&r.toLowerCase()===e}));let i=Te.current[r];i!=null&&dt(i,n)}z.set(`forceMount`,!0),queueMicrotask(r)}}),id:oe&&Ct==null?`${oe}-hidden-input`:void 0,form:l,name:Ct,autoComplete:u,value:tt,disabled:I,required:p&&!(x&&ot),readOnly:f,ref:St,style:se?Oe:he,tabIndex:-1,"aria-hidden":!0,suppressHydrationWarning:!0}),wt]})}var H,Ln;function Rn(){return(Rn=t((()=>{H=e(n(),1),oe(),I(),de(),et(),Sn(),Ie(),F(),we(),z(),ot(),re(),ft(),dt(),Ge(),st(),ct(),V(),E(),Me(),L(),O(),jn(),pe(),ke(),b(),ee(),Ue(),qe(),ge(),it(),Fn(),Je(),N(),Ln=r()})))()}var zn;function Bn(){return(Bn=t((()=>{bt(),zn=`data-popup-side`})))()}var Vn,Hn,Un,Wn;function Gn(){return(Gn=t((()=>{Vn=e(n(),1),qt(),z(),V(),E(),Ae(),bt(),w(),y(),_t(),_(),Rt(),N(),ne(),pe(),ke(),L(),Bn(),Hn=400,Un={...Kt,...C,popupSide:e=>e?{[zn]:e}:null,value:()=>null},Wn=Vn.forwardRef(function(e,t){let{render:n,className:r,id:i,disabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{setTouched:l,setFocused:u,validationMode:d,validation:f,state:p,disabled:m}=me(),{labelId:h}=Fe(),g=Cn(),{readOnly:_,required:y,disabled:b}=wn(),x=m||b||a,S=g.useState(`open`),C=g.useState(`mounted`),w=g.useState(`value`),E=g.useState(`triggerProps`),D=g.useState(`positionerElement`),O=g.useState(`listElement`),ee=g.useState(`popupSide`),k=g.useState(`id`),A=g.useState(`labelId`),j=g.useState(`hasSelectedValue`),N=C&&D?ee:null,F=i??k,ne=Xt(h,A);P({id:i});let re=He(D),ae=Vn.useRef(null),{getButtonProps:oe,buttonRef:I}=Se({disabled:x,native:o}),se=g.useStateSetter(`triggerElement`),ce=Zt(),L=Zt(),le=Zt();Vn.useEffect(()=>{if(S)return le.start(Hn,()=>{g.context.selectionRef.current.allowUnselectedMouseUp=!0,g.context.selectionRef.current.allowSelectedMouseUp=!0}),()=>{le.clear()};g.context.selectionRef.current={allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1,dragY:0},L.clear()},[S,g,L,le]);let ue=v(E,{id:F,role:`combobox`,"aria-expanded":S,"aria-haspopup":`listbox`,"aria-controls":S?O?.id??gt(D)?.id:void 0,"aria-labelledby":ne,"aria-readonly":_||void 0,"aria-required":y||void 0,tabIndex:x?-1:0,onFocus(e){u(!0),S&&g.context.alignItemWithTriggerActiveRef.current&&g.context.setOpen(!1,xe(te,e.nativeEvent)),ce.start(0,()=>{g.set(`forceMount`,!0)})},onBlur(e){T(D,e.relatedTarget)||(l(!0),u(!1),d===`onBlur`&&f.commit(w))},onMouseDown(e){if(S)return;let t=Ve(e.currentTarget);function n(e){if(!ae.current)return;let t=e.target;T(ae.current,t)||T(re.current,t)||Yt(e,ae.current)||g.context.setOpen(!1,xe(ie,e))}L.start(0,()=>{t.addEventListener(`mouseup`,n,{once:!0})})}},c,oe),de=f.getValidationProps(x,ue);de.role=`combobox`;let R={...p,open:S,disabled:x,value:w,readOnly:_,popupSide:N,placeholder:!j};return M(`button`,e,{ref:[t,ae,I,se],state:R,stateAttributesMapping:Un,props:de})})})))()}var Kn,qn,Jn;function Yn(){return(Yn=t((()=>{Kn=e(n(),1),y(),V(),Ue(),qn={value:()=>null},Jn=Kn.forwardRef(function(e,t){let{className:n,render:r,children:i,placeholder:a,style:o,...s}=e,c=Cn(),l=c.useState(`value`),u=c.useState(`items`),d=c.useState(`itemToStringLabel`),f=c.useState(`hasSelectedValue`),p=!f&&a!=null&&i==null,m=c.useState(`hasNullItemLabel`,p),h={value:l,placeholder:!f},g=null;return g=typeof i==`function`?i(l):i??(p&&!m?a:Array.isArray(l)?$e(l,u,d):At(l,u,d)),M(`span`,e,{state:h,ref:[t,c.context.valueRef],props:[{children:g},s],stateAttributesMapping:qn})})})))()}var Xn,Zn;function Qn(){return(Qn=t((()=>{Xn=e(n(),1),y(),V(),bt(),Zn=Xn.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o={open:Cn().useState(`open`)};return M(`span`,e,{state:o,ref:t,props:[{"aria-hidden":!0,children:`▼`},a],stateAttributesMapping:St})})})))()}var $n,er,tr;function nr(){return(nr=t((()=>{$n=e(n(),1),It(),V(),er=r(),tr=$n.forwardRef(function(e,t){let n=Cn(),r=n.useState(`mounted`),i=n.useState(`forceMount`);return r||i?(0,er.jsx)(Wt,{ref:t,...e}):null})})))()}function rr(){let e=ir.useContext(ar);if(!e)throw Error(Pe(59));return e}var ir,ar;function or(){return(or=t((()=>{k(),ir=e(n(),1),ar=ir.createContext(void 0)})))()}function sr(e,t){e&&Object.assign(e.style,t)}var cr;function lr(){return(lr=t((()=>{cr={position:`relative`,maxHeight:`100%`,overflowX:`hidden`,overflowY:`auto`}})))()}var ur,dr,fr,pr;function mr(){return(mr=t((()=>{ur=e(n(),1),pt(),F(),we(),V(),R(),Pt(),or(),zt(),Ot(),lr(),pe(),ke(),qe(),yt(),Lt(),dr=r(),fr={position:`fixed`},pr=ur.forwardRef(function(e,t){let{anchor:n,className:r,render:i,positionMethod:a,side:o,align:s,sideOffset:c,alignOffset:l,collisionBoundary:u=`clipping-ancestors`,collisionPadding:d,arrowPadding:f,sticky:p,disableAnchorTracking:m,alignItemWithTrigger:h=!0,collisionAvoidance:g=Ht,style:_,...v}=e,y=Cn(),b=Tn(),x=y.useState(`open`),S=y.useState(`mounted`),C=y.useState(`modal`),w=y.useState(`value`),T=y.useState(`openMethod`),E=y.useState(`positionerElement`),D=y.useState(`triggerElement`),O=y.useState(`isItemEqualToValue`),ee=y.useState(`transitionStatus`),k=ur.useRef(null),A=ur.useRef(null),[j,M]=ur.useState(h),N=S&&j&&T!==`touch`;!S&&j!==h&&M(h),ur.useImperativeHandle(y.context.alignItemWithTriggerActiveRef,()=>N),Ut((N||C)&&x,T===`touch`,E,D);let P=Dt({anchor:n,floatingRootContext:b,positionMethod:a,mounted:S,side:o,sideOffset:c,align:s,alignOffset:l,arrowPadding:f,collisionBoundary:u,collisionPadding:d,sticky:p,disableAnchorTracking:m??N,collisionAvoidance:g,keepMounted:!0}),F=N?`none`:P.side,ne=N?fr:P.positionerStyles,re={open:x,side:F,align:P.align,anchorHidden:P.anchorHidden};je(()=>{y.set(`popupSide`,P.side)},[y,P.side]);let ie=y.useStateSetter(`positionerElement`),ae=Mt(e,re,{styles:ne,transitionStatus:ee,props:v,refs:[t,ie],hidden:!S,inert:!x}),oe=ur.useRef(0),I=_e(e=>{if(y.context.valuesRef.current.length===0)return;let t=oe.current;oe.current=e.size;let n=xe(te);if(t!==0&&!y.state.multiple&&w!==null&&tt(y.context.valuesRef.current,w,O)===-1){let e=y.context.initialValueRef.current,t=e!=null&&tt(y.context.valuesRef.current,e,O)!==-1?e:null;y.context.setValue(t,n),t===null&&(y.set(`selectedIndex`,null),y.context.selectedItemTextRef.current=null)}if(t!==0&&y.state.multiple&&Array.isArray(w)){let e=w.filter(e=>tt(y.context.valuesRef.current,e,O)!==-1);e.length!==w.length&&(y.context.setValue(e,n),e.length===0&&(y.set(`selectedIndex`,null),y.context.selectedItemTextRef.current=null))}if(x&&N){y.update({scrollUpArrowVisible:!1,scrollDownArrowVisible:!1});let e={height:``};sr(E,e),sr(y.context.popupRef.current,e)}}),se=ur.useMemo(()=>({...P,side:F,alignItemWithTriggerActive:N,setControlledAlignItemWithTrigger:M,scrollUpArrowRef:k,scrollDownArrowRef:A}),[P,F,N,M]);return(0,dr.jsx)(Te,{elementsRef:y.context.listRef,labelsRef:y.context.labelsRef,onMapChange:I,children:(0,dr.jsxs)(ar.Provider,{value:se,children:[S&&C&&(0,dr.jsx)(wt,{inert:Tt(!x),cutout:D}),ae]})})})})))()}var hr,gr,_r;function vr(){return(vr=t((()=>{hr=r(),gr=`base-ui-disable-scrollbar`,_r={className:gr,getElement(e){return(0,hr.jsx)(`style`,{nonce:e,href:gr,precedence:`base-ui:low`,children:`.${gr}{scrollbar-width:none}.${gr}::-webkit-scrollbar{display:none}`})}}})))()}function yr(e){let t=br.useContext(xr);if(t===void 0&&!e)throw Error(Pe(69));return t}var br,xr;function Sr(){return(Sr=t((()=>{k(),br=e(n(),1),xr=br.createContext(void 0)})))()}function Cr(){return wr.useContext(Tr)??Er}var wr,Tr,Er;function Dr(){return(Dr=t((()=>{wr=e(n(),1),Tr=wr.createContext(void 0),Er={disableStyleElements:!1}})))()}var Or;function kr(){return(kr=t((()=>{Or=`--transform-origin`})))()}function Ar(e){let t=e.maxHeight;return t.endsWith(`px`)&&parseFloat(t)||1/0}function jr(e){return Nn(e.scrollHeight,e.clientHeight)}function Mr(e){return rn.getScale(e)}function Nr(e,t,n){return e/n[t]}function Pr(e,t){return $t({x:Nr(e.x,`x`,t),y:Nr(e.y,`y`,t),width:Nr(e.width,`x`,t),height:Nr(e.height,`y`,t)})}function Fr(e){let{style:t}=e,n={};for(let[e,r]of Br)n[e]=t.getPropertyValue(e),t.setProperty(e,r,`important`);return()=>{for(let[e]of Br){let r=n[e];r?t.setProperty(e,r):t.removeProperty(e)}}}var Ir,Lr,Rr,zr,Br;function Vr(){return(Vr=t((()=>{Ir=e(n(),1),tn(),Et(),we(),an(),F(),D(),Ct(),nn(),V(),bt(),or(),vr(),g(),b(),y(),lr(),pe(),ke(),Sr(),_n(),xt(),Fn(),Dr(),se(),kr(),Lr=r(),Rr={...Nt,...Ne},zr=Ir.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,...o}=e,s=Cn(),{multiple:c,readOnly:l,highlightItemOnHover:u}=wn(),d=Tn(),{side:f,align:m,alignItemWithTriggerActive:h,isPositioned:g,setControlledAlignItemWithTrigger:_}=rr(),v=yr(!0)!=null,y=Ce(),{nonce:b,disableStyleElements:x}=Cr(),C=s.useState(`id`),w=s.useState(`open`),T=s.useState(`openMethod`),E=s.useState(`mounted`),D=s.useState(`popupProps`),O=s.useState(`transitionStatus`),ee=s.useState(`triggerElement`),k=s.useState(`positionerElement`),j=s.useState(`listElement`),N=Ir.useRef(!1),P=Ir.useRef(!1),F=Ir.useRef({}),te=p(),ne=_e(e=>{if(!k||!s.context.popupRef.current||!P.current)return;let t=k.style.top===`0px`,n=k.style.bottom===`0px`;if(N.current||!h||!t&&!n){s.context.handleScrollArrowVisibility(e);return}let r=Mr(k),i=Nr(k.getBoundingClientRect().height,`y`,r),a=Ve(k),o=en(k),c=o.getComputedStyle(k),l=parseFloat(c.marginTop),u=parseFloat(c.marginBottom),d=Ar(o.getComputedStyle(s.context.popupRef.current)),f=Math.min(a.documentElement.clientHeight-l-u,d),p=e.scrollTop,m=jr(e),g=null,_=e=>{k.style.height=`${e}px`},v=t?m-p:p,y=Math.min(i+v,f);if(v<=1){let n=Mn(v,0,f-i);n>0&&_(i+n),e.scrollTop=t?m:0,f-(i+n)<=1&&(N.current=!0),s.context.handleScrollArrowVisibility(e);return}f-y>1?g=t?1/0:0:n&&p<m&&(g=p-(v-(i+v-f)));let b=Math.ceil(y);if(b!==0&&_(b),g!=null){let t=Mn(g,0,jr(e));Math.abs(e.scrollTop-t)>1&&(e.scrollTop=t)}b>=f-1&&(N.current=!0),s.context.handleScrollArrowVisibility(e)});Ir.useImperativeHandle(s.context.scrollHandlerRef,()=>ne,[ne]),S({open:w,ref:s.context.popupRef,onComplete(){w&&s.context.onOpenChangeComplete(!0)}});let re={open:w,transitionStatus:O,side:f,align:m};je(()=>{k&&s.context.popupRef.current&&!Object.keys(F.current).length&&(F.current={top:k.style.top||`0`,left:k.style.left||`0`,right:k.style.right,height:k.style.height,bottom:k.style.bottom,minHeight:k.style.minHeight,maxHeight:k.style.maxHeight,marginTop:k.style.marginTop,marginBottom:k.style.marginBottom})},[s,k]),je(()=>{w||h||(P.current=!1,N.current=!1,sr(k,F.current))},[w,h,k]),je(()=>{let e=s.context.popupRef.current;if(!w||!ee||!k||!e||h&&!g||s.state.transitionStatus===`ending`)return;if(P.current=!0,e.style.removeProperty(Or),!h){te.request(()=>s.context.handleScrollArrowVisibility(j||e));return}let t=Fr(e);try{let t=s.context.selectedItemTextRef.current;t?.isConnected||(t=!s.select(`hasSelectedValue`)&&s.context.firstItemTextRef.current?.isConnected?s.context.firstItemTextRef.current:null);let n=s.context.valueRef.current,r=en(k),i=r.getComputedStyle(k),a=r.getComputedStyle(e),o=Ve(ee),c=Mr(ee),l=Pr(ee.getBoundingClientRect(),c),d=Pr(k.getBoundingClientRect(),c),f=l.height,p=j||e,m=p.scrollHeight,h=parseFloat(a.borderBottomWidth),g=parseFloat(i.marginTop)||10,v=parseFloat(i.marginBottom)||10,b=parseFloat(i.minHeight)||100,x=Ar(a),S=o.documentElement.clientHeight-g-v,C=o.documentElement.clientWidth,w=S-l.bottom+f,T,E=y===`rtl`?l.right-d.width:l.left,D=0;if(t&&n){let e=Pr(n.getBoundingClientRect(),c);T=Pr(t.getBoundingClientRect(),c),E=d.left+(y===`rtl`?e.right-T.right:e.left-T.left);let r=e.top-l.top+e.height/2;D=T.top-d.top+T.height/2-r}let O=w+D+v+h,A=Math.min(S,O),M=S-g-v,P=O-A,te=C-5;k.style.left=`${Mn(E,5,te-d.width)}px`,k.style.height=`${A}px`,k.style.maxHeight=`none`,k.style.marginTop=`${g}px`,k.style.marginBottom=`${v}px`,e.style.height=`100%`;let ne=jr(p),re=P>=ne-1;re&&(A=Math.min(S,d.height)-(P-ne));let ie=l.top<20||l.bottom>S-20||Math.ceil(A)+1<Math.min(m,b),ae=(r.visualViewport?.scale??1)!==1&&mt;if(ie||ae){sr(k,F.current),_(!1);return}let oe=Math.max(b,A);if(re){let e=Math.max(0,S-O);k.style.top=d.height>=M?`0`:`${e}px`,k.style.height=`${A}px`,p.scrollTop=jr(p)}else k.style.bottom=`0`,p.scrollTop=P;if(T){let t=d.top,n=d.height,r=T.top+T.height/2,i=Mn(n>0?(r-t)/n*100:50,0,100);e.style.setProperty(Or,`50% ${i}%`)}(oe===S||A>=x)&&(N.current=!0),s.context.handleScrollArrowVisibility(p),u&&s.state.selectedIndex===null&&s.state.activeIndex===null&&s.context.listRef.current[0]!=null&&s.set(`activeIndex`,0)}finally{t()}},[s,w,k,ee,h,_,te,j,u,y,g]),Ir.useEffect(()=>{if(!h||!k||!w)return;let e=en(k);function t(e){s.context.setOpen(!1,xe(A,e))}return vt(e,`resize`,t)},[s,h,k,w]);let ie={...j?{role:`presentation`}:{role:`listbox`,"aria-multiselectable":c||void 0,"aria-readonly":l||void 0,id:`${C}-list`},onKeyDown(e){v&&yn.has(e.key)&&e.stopPropagation()},onScroll(e){j||ne(e.currentTarget)},...h&&{style:j?{height:`100%`}:cr},className:!j&&h?_r.className:void 0},ae=M(`div`,e,{ref:[t,s.context.popupRef],state:re,stateAttributesMapping:Rr,props:[D,ie,Gt(O),o]});return(0,Lr.jsxs)(Ir.Fragment,{children:[!x&&_r.getElement(b),(0,Lr.jsx)(Re,{context:d,modal:!1,disabled:!E,openInteractionType:T,returnFocus:a,restoreFocus:!0,children:ae})]})}),Br=[[`transform`,`none`],[`scale`,`1`],[`translate`,`0 0`]]})))()}var Hr,Ur;function Wr(){return(Wr=t((()=>{Hr=e(n(),1),V(),or(),y(),vr(),lr(),Ur=Hr.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=Cn(),{multiple:s,readOnly:c}=wn(),{alignItemWithTriggerActive:l}=rr(),u=o.useState(`hasScrollArrows`),d=o.useState(`openMethod`),f={id:`${o.useState(`id`)}-list`,role:`listbox`,"aria-multiselectable":s||void 0,"aria-readonly":c||void 0,onScroll(e){o.context.scrollHandlerRef.current?.(e.currentTarget)},...l&&{style:cr},className:u&&d!==`touch`?_r.className:void 0},p=o.useStateSetter(`listElement`);return M(`div`,e,{ref:[t,p],props:[f,a]})})})))()}function Gr(){let e=Kr.useContext(qr);if(!e)throw Error(Pe(57));return e}var Kr,qr;function Jr(){return(Jr=t((()=>{k(),Kr=e(n(),1),qr=Kr.createContext(void 0)})))()}var Yr,Xr,Zr;function Qr(){return(Qr=t((()=>{Yr=e(n(),1),F(),V(),De(),y(),Jr(),ne(),pe(),ke(),qe(),x(),Xr=r(),Zr=Yr.memo(Yr.forwardRef(function(e,t){let{render:n,className:r,style:i,value:a=null,label:o,disabled:s=!1,nativeButton:c=!1,...l}=e,u=Yr.useRef(null),d=ye({guess:!0,label:o,textRef:u}),f=Cn(),{itemProps:p,multiple:h,disabled:g,readOnly:_}=wn(),v=g||s,y=f.useState(`isActive`,d.index),b=f.useState(`open`),x=f.useState(`isSelected`,a),S=f.useState(`isSelectedByFocus`,d.index),C=f.useState(`isItemEqualToValue`),w=d.index,T=Yr.useRef(null);je(()=>{let e=f.context.valuesRef.current;return e[w]=a,()=>{delete e[w]}},[w,a,f]),je(()=>{let e=f.state.value,t=f.state.selectedIndex,n=t,r;h&&Array.isArray(e)?(n=Qt(w,a,f.context.valuesRef.current,e,C,t),r=n===w,w===t&&!r&&(f.context.selectedItemTextRef.current=null)):(r=e!==void 0&&Ze(a,e,C),r&&(n=w)),f.set(`selectedIndex`,n),r&&u.current&&(f.context.selectedItemTextRef.current=u.current)},[w,h,C,f,a]);let E=Yr.useRef(`mouse`),D=Yr.useRef(!1),{getButtonProps:O,buttonRef:ee}=Se({disabled:v,focusableWhenDisabled:!0,native:c,composite:!0}),k={disabled:v,selected:x,highlighted:y};function A(e){if(g||_)return;let t=f.state.value;if(h){let n=Array.isArray(t)?t:[],r=x?rt(n,a,C):[...n,a];f.context.setValue(r,xe(ve,e))}else f.context.setValue(a,xe(ve,e)),f.context.setOpen(!1,xe(ve,e))}function j(){f.context.selectionRef.current.dragY=0}let N={role:`option`,"aria-selected":x,tabIndex:b&&y?0:-1,onKeyDown(e){f.set(`activeIndex`,w),e.key===` `&&f.context.typingRef.current&&e.preventDefault()},onClick(e){let t=E.current!==`touch`,n=e.nativeEvent.pointerType,r=t&&m(e.nativeEvent)&&(n!==void 0||y),i=t&&!r&&!D.current;D.current=!1,!(v||i)&&A(e.nativeEvent)},onPointerEnter(e){E.current=e.pointerType},onPointerMove(e){if(e.pointerType===`mouse`&&e.buttons===1){let t=f.context.selectionRef.current;t.dragY+=e.movementY,t.dragY**2>=64&&(t.allowUnselectedMouseUp=!0)}},onPointerDown(e){E.current=e.pointerType,D.current=!0,j()},onMouseUp(){if(j(),v||E.current===`touch`||D.current)return;let e=!f.context.selectionRef.current.allowSelectedMouseUp&&x,t=!f.context.selectionRef.current.allowUnselectedMouseUp&&!x;e||t||(D.current=!0,T.current?.click(),D.current=!1)}},P=M(`div`,e,{ref:[ee,t,d.ref,T],state:k,props:[p,N,l,O]}),F=Yr.useMemo(()=>({selected:x,index:w,textRef:u,selectedByFocus:S}),[x,w,u,S]);return(0,Xr.jsx)(qr.Provider,{value:F,children:P})}))})))()}var $r,ei,ti,ni;function ri(){return(ri=t((()=>{$r=e(n(),1),Jr(),O(),b(),y(),g(),ei=r(),ti=$r.forwardRef(function(e,t){let{selected:n}=Gr();return e.keepMounted||n?(0,ei.jsx)(ni,{...e,ref:t}):null}),ni=$r.memo($r.forwardRef((e,t)=>{let{render:n,className:r,style:i,keepMounted:a,...o}=e,{selected:s}=Gr(),c=$r.useRef(null),{transitionStatus:l,setMounted:u}=Le(s),d=M(`span`,e,{ref:[t,c],state:{selected:s,transitionStatus:l},props:[{"aria-hidden":!0,children:`✔️`},o],stateAttributesMapping:Ne});return S({batch:!0,enabled:!s,open:s,ref:c,onComplete(){s||u(!1)}}),d}))})))()}var ii,ai;function oi(){return(oi=t((()=>{ii=e(n(),1),V(),Jr(),y(),ai=ii.memo(ii.forwardRef(function(e,t){let{index:n,textRef:r,selectedByFocus:i}=Gr(),a=Cn(),{render:o,className:s,style:c,...l}=e,u=ii.useCallback(e=>{e&&(n===0&&(a.context.firstItemTextRef.current=e),i&&(a.context.selectedItemTextRef.current=e))},[a,n,i]);return M(`div`,e,{ref:[u,t,r],props:l})}))})))()}var U,W,si,ci,li,ui,di,fi,pi,mi,hi;function gi(){return(gi=t((()=>{U=n(),Rn(),Gn(),Yn(),Qn(),nr(),mr(),Vr(),Wr(),Qr(),ri(),oi(),a(),o(),l(),ht(),sn(),cn(),W=r(),si=i({slots:{trigger:[`flex cursor-pointer items-center gap-2 pe-3 text-start`,`data-readonly:cursor-default`],value:`min-w-0 flex-1 truncate data-placeholder:text-text-input-placeholder`,icon:[`flex size-5 shrink-0 items-center justify-center transition-transform duration-150`,`[&_path]:fill-icon-input-default group-data-popup-open/select-trigger:rotate-180`,`group-disabled/select-trigger:[&_path]:fill-icon-input-disable`],content:[`flex w-(--anchor-width) max-h-[min(18rem,var(--available-height))] flex-col overflow-hidden`,`rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-lg`,`outline-none`],list:`min-h-0 flex-1 overflow-y-auto scroll-py-2 py-2 outline-none`,item:[`group/item mx-2 my-px flex cursor-pointer items-center gap-2 rounded-[calc(var(--radius-md)-2px)]`,`px-3 py-2 text-sm text-text-default-base-primary outline-none select-none`,`data-highlighted:bg-bg-default-base-primary-hover`,`data-disabled:cursor-default data-disabled:text-text-default-base-tertiary`],indicator:[`flex size-4 shrink-0 items-center justify-center text-text-default-base-primary`,`invisible group-data-selected/item:visible group-data-disabled/item:text-text-default-base-tertiary`]}}),ci=si(),li=(0,U.createContext)(null),ui=`[data-slot=modal-content], [data-slot=popover-content]`,di=e=>e instanceof Element&&e.closest(`[data-slot=select-content]`)!==null,fi=({value:e,defaultValue:t=null,onValueChange:n,disabled:r,readOnly:i,required:a,...o})=>{let s=on(),[c,l]=(0,U.useState)(null),u=(0,U.useRef)(void 0),[d]=(0,U.useState)(t),[f,p]=(0,U.useState)(t),m=e!==void 0,[h,g]=(0,U.useState)(e);e!==h&&(g(e),e===void 0&&p(null));let _=(0,U.useRef)(()=>{});_.current=()=>{m||p(d)},(0,U.useEffect)(()=>{let e=c?.closest(`form`);if(!e)return;let t=()=>_.current();return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[c]);let v=(0,U.useMemo)(()=>({trigger:c,setTrigger:l,triggerBlur:u}),[c]);return(0,W.jsx)(li,{value:v,children:(0,W.jsx)(In,{...o,value:m?e:f,onValueChange:(e,t)=>{n?.(e,t),!m&&!t.isCanceled&&p(e)},disabled:r??s?.disabled,readOnly:i??s?.readOnly,required:a??s?.required})})},fi.displayName=`Select.Root`,pi=({size:e=`md`,placeholder:t,children:n,className:r,ref:i,...a})=>{let o=on(),l=(0,U.use)(li),d=l?.setTrigger,f=(0,U.useMemo)(()=>c(d,i),[d,i]),p=u({id:o?.controlId,"aria-labelledby":o&&a[`aria-label`]===void 0?o.labelId:void 0,"aria-describedby":o?.describedBy,"aria-invalid":o?.invalid||void 0},a),{onBlur:m}=p;return l&&(l.triggerBlur.current=m),(0,W.jsxs)(Wn,{...p,ref:f,onBlur:e=>{di(e.relatedTarget)||m?.(e)},"data-slot":`select-trigger`,"data-size":e,className:s(ln({size:e}),`group/select-trigger`,ci.trigger(),r),children:[(0,W.jsx)(Jn,{"data-slot":`select-value`,placeholder:t,className:ci.value(),children:n}),(0,W.jsx)(Zn,{"data-slot":`select-icon`,className:ci.icon(),children:(0,W.jsx)(Vt,{className:`size-5`})})]})},pi.displayName=`Select.Trigger`,mi=({side:e=`bottom`,align:t=`start`,sideOffset:n=8,alignOffset:r,collisionPadding:i=8,"aria-label":a,"aria-labelledby":o,onBlur:c,className:l,children:u,...d})=>{let f=on(),p=(0,U.use)(li),m=p?.trigger,h=o??(a===void 0?f?.labelId:void 0),g=a??(h===void 0?`Options`:void 0),_=m?.closest(ui)??void 0,v=m?getComputedStyle(m).direction:void 0;return(0,W.jsx)(tr,{container:_,children:(0,W.jsx)(pr,{alignItemWithTrigger:!1,side:e,align:t,sideOffset:n,alignOffset:r,collisionPadding:i,className:`isolate z-(--z-index-top-layer) pointer-events-auto`,children:(0,W.jsx)(zr,{...d,"data-slot":`select-content`,dir:v,onBlur:e=>{c?.(e);let t=e.relatedTarget;di(t)||t===m||p?.triggerBlur.current?.(e)},className:s(ci.content(),l),children:(0,W.jsx)(Ur,{"data-slot":`select-list`,"aria-label":g,"aria-labelledby":h,className:ci.list(),children:u})})})})},mi.displayName=`Select.Content`,hi=({className:e,children:t,...n})=>(0,W.jsxs)(Zr,{...n,"data-slot":`select-item`,className:s(ci.item(),e),children:[(0,W.jsx)(ti,{keepMounted:!0,"data-slot":`select-item-indicator`,className:ci.indicator(),children:(0,W.jsx)(Ft,{className:`size-4`})}),(0,W.jsx)(ai,{className:`min-w-0 flex-1 truncate`,children:t})]}),hi.displayName=`Select.Item`;try{si.displayName=`selectRecipe`,si.__docgenInfo={description:"Style recipe for Select. Slots: `trigger` (the closed field), `value`, `icon` (the chevron),\n`content` (the floating surface), `list`, `item` and `indicator` (the check on the selected\nrow). The trigger wears `Input`'s recipe; the surface and rows match `Combobox`'s.",displayName:`selectRecipe`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the Select trigger, surface and rows`}}}catch{}try{fi.displayName=`Select.Root`,fi.__docgenInfo={description:"Root of a select: a button that opens a list of options and shows the one\npicked. Use it for a pick from a short, known list, where typing would add\nnothing. For a long list or one the user searches, use\n[Combobox](?path=/docs/components-combobox--docs); for a handful of options\nthat should all stay visible, use\n[RadioGroup](?path=/docs/components-radiogroup--docs).\n\nPass the options as `items` (`{ value, label }`) so the trigger shows the\npicked option's label rather than its value. With `name`, the form submits\n`name=value`, and `required` blocks the submission until something is picked.\n\nInside a `Field.Root`, `disabled`, `readOnly` and `required` default to the\nfield's, and the trigger takes its label, description and error. Every Base\nUI root prop is accepted and forwarded — `value`, `defaultValue`,\n`onValueChange`, `open` and so on. A native form reset puts an uncontrolled\nselect back on its `defaultValue`.\n\nWith react-hook-form, wire it through `Controller` and render the form with\n`noValidate`, as `Form.Root` does: a required select also sets the native\n`required`, and the browser would otherwise block the submit before the\nform library validates.",displayName:`Select.Root`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{},tags:{summary:`Root of a single-select dropdown picking from a short list`,see:`{@link https://base-ui.com/react/components/select Base UI Select}`,example:`<Select.Root items={plans} defaultValue="monthly" name="plan">
  <Select.Trigger placeholder="Select a plan" />
  <Select.Content>
    {plans.map(plan => (
      <Select.Item key={plan.value} value={plan.value}>
        {plan.label}
      </Select.Item>
    ))}
  </Select.Content>
</Select.Root>`}}}catch{}try{pi.displayName=`Select.Trigger`,pi.__docgenInfo={description:"The closed field: a button drawn as an `Input`, showing the picked option\n(or `placeholder`) and a chevron. Click, Enter, Space or the arrow keys\nopen the list.\n\nInside a `Field.Root` it takes the field's `id`, label, description and\n`invalid` with nothing passed by hand, and its own props win. Outside one,\ngive it an `aria-label` or point a `Label` at its `id`. Native button\nattributes are forwarded, and its `ref` reaches the button, so a form\nlibrary can focus the field on a failed submit.",displayName:`Select.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: SelectTriggerState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectTriggerState>`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Classes for the trigger, merged after its own.`,name:`className`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:"Control height, matching `Input`. Defaults to `'md'`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},placeholder:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Text shown while nothing is picked.`,name:`placeholder`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:"Renders the picked value. Defaults to the label of the matching entry in\nthe root's `items`.",name:`children`,required:!1,tags:{},type:{name:`ReactNode | ((value: any) => ReactNode)`}}},tags:{summary:`Button drawn as an input, showing the picked option and a chevron`,dataAttribute:`{string} data-slot - Always set to "select-trigger"
{string} data-popup-open - Present while the list is open
{string} data-placeholder - Present while nothing is picked`}}}catch{}try{mi.displayName=`Select.Content`,mi.__docgenInfo={description:"The floating list, the same surface as the `Combobox` list. It portals to\nthe body, matches the trigger's width, opens below it and caps its height\nto the room available, so a long list scrolls. Inside a `Modal` or a\n`Popover` it renders into that layer instead, so the layer's focus trap and\noutside press leave the list alone, and Escape closes the list first.\n\nInside a `Field.Root` the list is named after the field's label; outside\none it is named \"Options\". Pass `aria-label` or `aria-labelledby` to name it\nafter the field when a page has more than one select.",displayName:`Select.Content`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: SelectPopupState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectPopupState>`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Classes for the surface, merged after its own.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Floating surface holding the options`,dataAttribute:`{string} data-slot - Always set to "select-content"`}}}catch{}try{hi.displayName=`Select.Item`,hi.__docgenInfo={description:"One option. `value` is what the select stores and submits; the children are\nthe label shown in the row and, through the root's `items`, in the trigger.\nThe picked row carries a check. A `disabled` row is greyed out and cannot be\npicked, but the arrow keys still stop on it, so it is announced.",displayName:`Select.Item`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: SelectItemState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectItemState>`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Classes for the row, merged after its own.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Option row inside the list`,dataAttribute:`{string} data-slot - Always set to "select-item"
{string} data-selected - Present on the picked row
{string} data-highlighted - Present on the row under the pointer or the keyboard`}}}catch{}})))()}var G;function _i(){return(_i=t((()=>{gi(),G={Root:fi,Trigger:pi,Content:mi,Item:hi}})))()}var vi,K,q,yi,J,Y,X,Z,Q,bi,$,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki;function qi(){return(qi=t((()=>{vi=n(),hn(),_i(),d(),sn(),un(),fn(),K=r(),{expect:q,fn:yi,screen:J,userEvent:Y,waitFor:X,within:Z}=__STORYBOOK_MODULE_TEST__,Q=[{value:`AZ`,label:`Arizona`},{value:`CA`,label:`California`},{value:`FL`,label:`Florida`},{value:`GA`,label:`Georgia`},{value:`NY`,label:`New York`},{value:`TX`,label:`Texas`}],bi={title:`Components/Select`,component:G.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`}}},decorators:[e=>(0,K.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,K.jsx)(e,{})})],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:"Control height of the trigger, matching `Input`. Set on `Select.Trigger`."},placeholder:{control:`text`,description:"Text the trigger shows while nothing is picked. Set on `Select.Trigger`."},items:{control:`object`,description:"The options as `{ value, label }`, so the trigger shows the picked label rather than its value."},disabled:{control:`boolean`,description:"Blocks the whole select. Defaults to the surrounding `Field.Root`."},readOnly:{control:`boolean`,description:"The list still opens, but the value cannot change. Defaults to the surrounding `Field.Root`."},required:{control:`boolean`,description:"Blocks a native form submission until something is picked. Defaults to the surrounding `Field.Root`."},onValueChange:{action:`valueChange`,description:`Called with the picked value and Base UI event details.`}},args:{items:Q,size:`md`,placeholder:`Select a state`},render:({items:e,size:t,placeholder:n,...r})=>(0,K.jsxs)(G.Root,{...r,items:e,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,size:t,placeholder:n}),(0,K.jsx)(G.Content,{children:e.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})},$=async e=>(await Y.click(e),J.findByRole(`listbox`)),xi=async()=>{await Y.keyboard(`{Escape}`),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument())},Si={args:{onValueChange:yi()},play:async({args:e,canvasElement:t})=>{let n=Z(t).getByRole(`combobox`,{name:`State`});await q(n).toHaveTextContent(`Select a state`);let r=await $(n);await q(r).toHaveAccessibleName(`Options`),await Y.click(Z(r).getByRole(`option`,{name:`Florida`})),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveTextContent(`Florida`),await q(e.onValueChange).toHaveBeenLastCalledWith(`FL`,q.anything())}},Ci={args:{defaultValue:`TX`},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`State`});await q(t).toHaveTextContent(`Texas`);let n=await $(t);await q(n.scrollHeight).toBe(n.clientHeight),await q(Z(n).getByRole(`option`,{name:`Texas`})).toHaveAttribute(`aria-selected`,`true`),await xi()}},wi={render:()=>(0,K.jsx)(`div`,{className:`flex w-full flex-col gap-4`,children:[`sm`,`md`,`lg`].map(e=>(0,K.jsxs)(G.Root,{items:Q,defaultValue:`CA`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State ${e}`,size:e}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]},e))}),play:async({canvasElement:e})=>{let t=Z(e);for(let[e,n]of[[`sm`,32],[`md`,40],[`lg`,48]])await q(t.getByRole(`combobox`,{name:`State ${e}`}).getBoundingClientRect().height).toBe(n)}},Ti={render:()=>(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsxs)(B.Root,{invalid:!0,required:!0,children:[(0,K.jsx)(B.Label,{children:`State`}),(0,K.jsxs)(G.Root,{items:Q,children:[(0,K.jsx)(G.Trigger,{placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]}),(0,K.jsx)(B.Description,{children:`Where the risk is located.`}),(0,K.jsx)(B.Error,{errors:[{message:`Choose a state`}]})]})}),play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:/State/});await q(t).toHaveAttribute(`aria-invalid`,`true`),await q(t).toHaveAccessibleDescription(/located.*Choose a state|Choose a state.*located/),await q(t).toHaveStyle({borderColor:`rgb(217, 38, 38)`});let n=await $(t);await q(n).toHaveAccessibleName(/State/),await xi()}},Ei={args:{disabled:!0,defaultValue:`CA`},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`State`});await q(t).toBeDisabled(),await Y.click(t,{pointerEventsCheck:0}),await q(J.queryByRole(`listbox`)).not.toBeInTheDocument()}},Di={args:{onValueChange:yi()},render:e=>(0,K.jsxs)(G.Root,{...e,items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,disabled:e===`FL`,children:t},e))})]}),play:async({args:e,canvasElement:t})=>{let n=await $(Z(t).getByRole(`combobox`,{name:`State`}));await q(Z(n).getByRole(`option`,{name:`Florida`})).toHaveAttribute(`aria-disabled`,`true`),await Y.click(Z(n).getByRole(`option`,{name:`Florida`})),await q(e.onValueChange).not.toHaveBeenCalled(),Z(n).getByRole(`option`,{name:`California`}).focus(),await Y.keyboard(`{ArrowDown}{Enter}`),await q(e.onValueChange).not.toHaveBeenCalled(),await xi()}},Oi={args:{readOnly:!0,defaultValue:`CA`,onValueChange:yi()},play:async({args:e,canvasElement:t})=>{let n=Z(t).getByRole(`combobox`,{name:`State`}),r=await $(n);await Y.click(Z(r).getByRole(`option`,{name:`Texas`})),await Y.keyboard(`{ArrowDown}{Enter}`),await Y.keyboard(`g`),await Y.keyboard(`{Enter}`),await q(n).toHaveTextContent(`California`),await q(e.onValueChange).not.toHaveBeenCalled(),await xi()}},ki={render:()=>(0,K.jsxs)(`div`,{className:`flex w-full flex-col gap-2`,children:[(0,K.jsxs)(G.Root,{items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,"aria-invalid":!0,"aria-describedby":`state-error`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]}),(0,K.jsx)(`p`,{id:`state-error`,className:`text-sm text-text-input-destructive`,children:`Choose a state.`})]}),play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`State`});await q(t).toHaveAttribute(`aria-invalid`,`true`),await q(t).toHaveAccessibleDescription(`Choose a state.`),await q(t).toHaveStyle({borderColor:`rgb(217, 38, 38)`})}},Ai={render:()=>{let[e,t]=(0,vi.useState)(`CA`);return(0,K.jsxs)(`div`,{className:`flex w-full flex-col items-start gap-6`,children:[(0,K.jsxs)(`div`,{className:`flex gap-3`,children:[(0,K.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(null),children:`Clear`}),(0,K.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(`NY`),children:`Choose New York`})]}),(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsxs)(G.Root,{items:Q,value:e,onValueChange:t,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e??`none`]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:`State`});await Y.click(t.getByRole(`button`,{name:`Choose New York`})),await q(n).toHaveTextContent(`New York`),await Y.click(t.getByRole(`button`,{name:`Clear`})),await q(n).toHaveTextContent(`Select a state`),await q(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},ji={render:()=>{let[e,t]=(0,vi.useState)(null);return(0,K.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsxs)(G.Root,{items:Q,name:`state`,required:!0,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),(0,K.jsx)(f,{type:`submit`,children:`Submit`}),e&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e);await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(t.queryByRole(`status`)).not.toBeInTheDocument();let n=await $(t.getByRole(`combobox`,{name:`State`}));await Y.click(Z(n).getByRole(`option`,{name:`Georgia`})),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`Submitted: GA`)}},Mi={render:()=>{let{control:e,handleSubmit:t}=mn({defaultValues:{state:null}}),[n,r]=(0,vi.useState)(null);return(0,K.jsxs)(`form`,{noValidate:!0,className:`flex w-full flex-col items-start gap-6`,onSubmit:t(e=>r(e.state)),children:[(0,K.jsx)(gn,{name:`state`,control:e,rules:{required:`Choose a state`},render:({field:e,fieldState:t})=>(0,K.jsxs)(B.Root,{invalid:t.invalid,required:!0,className:`w-full`,children:[(0,K.jsx)(B.Label,{children:`State`}),(0,K.jsxs)(G.Root,{items:Q,value:e.value,onValueChange:e.onChange,children:[(0,K.jsx)(G.Trigger,{ref:e.ref,onBlur:e.onBlur,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]}),(0,K.jsx)(B.Error,{errors:[t.error]})]})}),(0,K.jsx)(f,{type:`submit`,children:`Submit`}),n&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:/State/});await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(n).toHaveFocus(),await X(()=>q(n).toHaveAccessibleDescription(`Choose a state`));let r=await $(n);await Y.click(Z(r).getByRole(`option`,{name:`Arizona`})),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`Submitted: AZ`)}},Ni={render:()=>{let e=[{value:`ho3`,label:`Homeowners HO-3, special form, including dwelling and contents`},{value:`ho6`,label:`Condo unit owners HO-6`}];return(0,K.jsx)(`div`,{className:`w-60`,children:(0,K.jsxs)(G.Root,{items:e,defaultValue:`ho3`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`Policy form`}),(0,K.jsx)(G.Content,{children:e.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`Policy form`}),n=t.querySelector(`[data-slot=select-value]`);await q(t.getBoundingClientRect().height).toBe(40),await q(n.scrollWidth).toBeGreaterThan(n.clientWidth)}},Pi={render:()=>(0,K.jsxs)(`div`,{className:`grid w-full grid-cols-2 gap-6`,children:[[[`Placeholder`,{}],[`Filled`,{defaultValue:`TX`}],[`Disabled`,{defaultValue:`TX`,disabled:!0}],[`Read-only`,{defaultValue:`TX`,readOnly:!0}]].map(([e,t])=>(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,K.jsxs)(G.Root,{items:Q,...t,children:[(0,K.jsx)(G.Trigger,{"aria-label":e,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})]},e)),(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:`Invalid`}),(0,K.jsxs)(G.Root,{items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`Invalid`,"aria-invalid":!0,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})]})]})},Fi={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:`CA`,onValueChange:yi()},play:async({args:e,canvasElement:t})=>{let n=Z(t).getByRole(`combobox`,{name:`State`});await Y.tab(),await q(n).toHaveFocus(),await Y.keyboard(`{ArrowDown}`);let r=await J.findByRole(`listbox`);await X(()=>q(Z(r).getByRole(`option`,{name:`California`})).toHaveFocus()),await Y.keyboard(`{ArrowDown}{Enter}`),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveTextContent(`Florida`),await q(e.onValueChange).toHaveBeenLastCalledWith(`FL`,q.anything()),await q(n).toHaveFocus(),await Y.keyboard(`{Enter}`),await J.findByRole(`listbox`),await Y.keyboard(`{Escape}`),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveTextContent(`Florida`),await q(n).toHaveFocus()}},Ii={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let e=Array.from({length:30},(e,t)=>({value:`option-${t}`,label:`Option ${t+1}`}));return(0,K.jsx)(`div`,{className:`m-4 w-72`,children:(0,K.jsxs)(G.Root,{items:e,children:[(0,K.jsx)(G.Trigger,{"aria-label":`Option`,placeholder:`Pick one`}),(0,K.jsx)(G.Content,{children:e.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})},play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`Option`}),n=await $(t),r=n.closest(`[data-slot=select-content]`),i=t.getBoundingClientRect(),a=r.getBoundingClientRect();await q(Math.round(a.width)).toBe(Math.round(i.width)),await q(Math.round(a.left)).toBe(Math.round(i.left)),await q(Math.round(a.top-i.bottom)).toBe(8),await q(n.scrollHeight).toBeGreaterThan(n.clientHeight),await xi()}},Li={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,K.jsxs)(G.Root,{items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{className:`max-h-40`,children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=await $(Z(e).getByRole(`combobox`,{name:`State`})),n=t.closest(`[data-slot=select-content]`);await q(n.getBoundingClientRect().height).toBe(160),await q(t.scrollHeight).toBeGreaterThan(t.clientHeight),t.scrollTop=t.scrollHeight,await X(()=>q(Z(t).getByRole(`option`,{name:`Texas`}).getBoundingClientRect().bottom).toBeLessThanOrEqual(n.getBoundingClientRect().bottom)),await xi()}},Ri={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,vi.useState)(null);return(0,K.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsxs)(G.Root,{items:Q,name:`state`,defaultValue:`CA`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),(0,K.jsxs)(`div`,{className:`flex gap-3`,children:[(0,K.jsx)(f,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,K.jsx)(f,{type:`submit`,children:`Submit`})]}),e&&(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:`State`}),r=await $(n);await Y.click(Z(r).getByRole(`option`,{name:`Georgia`})),await q(n).toHaveTextContent(`Georgia`),await Y.click(t.getByRole(`button`,{name:`Reset`})),await q(n).toHaveTextContent(`California`),await Y.click(t.getByRole(`button`,{name:`Submit`})),await q(await t.findByRole(`status`)).toHaveTextContent(`Submitted: CA`)}},zi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let{control:e,reset:t}=mn();return(0,K.jsxs)(`div`,{className:`flex w-full flex-col items-start gap-6`,children:[(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsx)(gn,{name:`state`,control:e,render:({field:e})=>(0,K.jsxs)(G.Root,{items:Q,value:e.value,onValueChange:e.onChange,children:[(0,K.jsx)(G.Trigger,{ref:e.ref,"aria-label":`State`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})}),(0,K.jsx)(f,{variant:`secondary`,size:`sm`,onClick:()=>t(),children:`Reset form`})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:`State`}),r=await $(n);await Y.click(Z(r).getByRole(`option`,{name:`Georgia`})),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveTextContent(`Georgia`),await Y.click(t.getByRole(`button`,{name:`Reset form`})),await q(n).toHaveTextContent(`Select a state`)}},Bi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,K.jsxs)(B.Root,{disabled:!0,children:[(0,K.jsx)(B.Label,{children:`State`}),(0,K.jsxs)(G.Root,{items:Q,disabled:!1,children:[(0,K.jsx)(G.Trigger,{"aria-label":`Risk state`,"aria-describedby":`state-note`,placeholder:`Select a state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]}),(0,K.jsx)(B.Description,{children:`Where the risk is located.`}),(0,K.jsx)(`p`,{id:`state-note`,children:`Changing it requotes every carrier.`})]}),play:async({canvasElement:e})=>{let t=Z(e).getByRole(`combobox`,{name:`Risk state`});await q(t).not.toHaveAttribute(`aria-labelledby`),await q(t).toHaveAccessibleDescription(`Where the risk is located. Changing it requotes every carrier.`),await q(t).toBeEnabled()}},Vi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,K.jsxs)(dn.Root,{children:[(0,K.jsx)(dn.Trigger,{asChild:!0,children:(0,K.jsx)(f,{variant:`secondary`,children:`Edit address`})}),(0,K.jsxs)(dn.Content,{children:[(0,K.jsx)(dn.Title,{children:`Edit address`}),(0,K.jsx)(dn.Body,{children:(0,K.jsxs)(G.Root,{items:Q,defaultValue:`CA`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})]})]}),play:async({canvasElement:e})=>{let t=Z(document.body);await Y.click(Z(e).getByRole(`button`,{name:`Edit address`}));let n=await t.findByRole(`dialog`,{name:`Edit address`}),r=Z(n).getByRole(`combobox`,{name:`State`});r.focus(),await Y.keyboard(`{ArrowDown}`);let i=await t.findByRole(`listbox`);await q(n).toContainElement(i),await X(()=>q(Z(i).getByRole(`option`,{name:`California`})).toHaveFocus()),await Y.keyboard(`{ArrowDown}`),await q(Z(i).getByRole(`option`,{name:`Florida`})).toHaveFocus(),await Y.keyboard(`{Enter}`),await X(()=>q(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(r).toHaveTextContent(`Florida`),await Y.keyboard(`{ArrowDown}`),await t.findByRole(`listbox`),await Y.keyboard(`{Escape}`),await X(()=>q(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveAttribute(`data-state`,`open`),await Y.keyboard(`{Escape}`),await X(()=>q(n).toHaveAttribute(`data-state`,`closed`))}},Hi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,K.jsxs)(dn.Root,{children:[(0,K.jsx)(dn.Trigger,{asChild:!0,children:(0,K.jsx)(f,{variant:`secondary`,children:`Edit address`})}),(0,K.jsxs)(dn.Content,{children:[(0,K.jsx)(dn.Title,{children:`Edit address`}),(0,K.jsx)(dn.Body,{children:(0,K.jsxs)(G.Root,{items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})]})]}),play:async({canvasElement:e})=>{let t=Z(document.body);await Y.click(Z(e).getByRole(`button`,{name:`Edit address`}));let n=await t.findByRole(`dialog`,{name:`Edit address`}),r=Z(n).getByRole(`combobox`,{name:`State`});await $(r),await X(()=>q(document.activeElement).toHaveAttribute(`data-slot`,`select-content`)),await Y.keyboard(`{Escape}`),await X(()=>q(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(n).toHaveAttribute(`data-state`,`open`),await Y.keyboard(`{Escape}`),await X(()=>q(n).toHaveAttribute(`data-state`,`closed`))}},Ui={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,K.jsxs)(pn.Root,{children:[(0,K.jsx)(pn.Trigger,{asChild:!0,children:(0,K.jsx)(f,{variant:`secondary`,children:`Filter`})}),(0,K.jsx)(pn.Content,{className:`w-72`,children:(0,K.jsxs)(G.Root,{items:Q,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,placeholder:`Any state`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})})]}),play:async({canvasElement:e})=>{let t=Z(document.body),n=Z(e).getByRole(`button`,{name:`Filter`});await Y.click(n);let r=await t.findByRole(`combobox`,{name:`State`}),i=await $(r);await Y.keyboard(`{ArrowDown}`),await q(i.querySelector(`:focus`)).not.toBeNull(),await Y.keyboard(`{Escape}`),await X(()=>q(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(r).toBeVisible(),await Y.keyboard(`{Escape}`),await X(()=>q(t.queryByRole(`combobox`,{name:`State`})).not.toBeInTheDocument())}},Wi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,K.jsx)(`div`,{dir:`rtl`,className:`w-full`,children:(0,K.jsxs)(G.Root,{items:Q,defaultValue:`TX`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),play:async({canvasElement:e})=>{let t=await $(Z(e).getByRole(`combobox`,{name:`State`}));await q(getComputedStyle(t).direction).toBe(`rtl`),await xi()}},Gi={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,vi.useState)(0);return(0,K.jsxs)(`div`,{className:`flex w-full flex-col items-start gap-6`,children:[(0,K.jsx)(`div`,{className:`w-full`,children:(0,K.jsxs)(G.Root,{items:Q,defaultValue:`CA`,children:[(0,K.jsx)(G.Trigger,{"aria-label":`State`,onBlur:()=>t(e=>e+1)}),(0,K.jsx)(G.Content,{children:Q.map(({value:e,label:t})=>(0,K.jsx)(G.Item,{value:e,children:t},e))})]})}),(0,K.jsx)(f,{variant:`secondary`,children:`Next`}),(0,K.jsxs)(`output`,{className:`text-sm`,children:[`Blurs: `,e]})]})},play:async({canvasElement:e})=>{let t=Z(e),n=t.getByRole(`combobox`,{name:`State`});n.focus(),await Y.keyboard(`{ArrowDown}`);let r=await J.findByRole(`listbox`);await Y.keyboard(`{ArrowDown}{ArrowDown}`),await q(r.querySelector(`:focus`)).not.toBeNull(),await q(t.getByRole(`status`)).toHaveTextContent(`Blurs: 0`),await xi(),await q(n).toHaveFocus(),await q(t.getByRole(`status`)).toHaveTextContent(`Blurs: 0`),await Y.tab(),await q(t.getByRole(`status`)).toHaveTextContent(`Blurs: 1`),await $(n),await Y.click(t.getByRole(`button`,{name:`Next`})),await X(()=>q(J.queryByRole(`listbox`)).not.toBeInTheDocument()),await q(t.getByRole(`status`)).toHaveTextContent(`Blurs: 2`)}},Si.parameters={...Si.parameters,docs:{...Si.parameters?.docs,source:{originalSource:`{
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
}`,...Si.parameters?.docs?.source},description:{story:`@summary Pick an option from the list`,...Si.parameters?.docs?.description}}},Ci.parameters={...Ci.parameters,docs:{...Ci.parameters?.docs,source:{originalSource:`{
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
}`,...Ci.parameters?.docs?.source},description:{story:`Starts on a value; the list opens with that option checked.

@summary Uncontrolled with a starting value`,...Ci.parameters?.docs?.description}}},wi.parameters={...wi.parameters,docs:{...wi.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full flex-col gap-4">
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
}`,...wi.parameters?.docs?.source},description:{story:`Trigger heights match \`Input\`: 32, 40 and 48px.

@summary Small, medium and large triggers`,...wi.parameters?.docs?.description}}},Ti.parameters={...Ti.parameters,docs:{...Ti.parameters?.docs,source:{originalSource:`{
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
}`,...Ti.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, the label, description, error, `invalid` and\n`required` reach the trigger with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...Ti.parameters?.docs?.description}}},Ei.parameters={...Ei.parameters,docs:{...Ei.parameters?.docs,source:{originalSource:`{
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
}`,...Ei.parameters?.docs?.source},description:{story:`@summary Whole select disabled`,...Ei.parameters?.docs?.description}}},Di.parameters={...Di.parameters,docs:{...Di.parameters?.docs,source:{originalSource:`{
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
}`,...Di.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest selectable. The arrow keys still stop
on it, so it is announced, but neither Enter nor a press picks it.

@summary One option disabled`,...Di.parameters?.docs?.description}}},Oi.parameters={...Oi.parameters,docs:{...Oi.parameters?.docs,source:{originalSource:`{
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
}`,...Oi.parameters?.docs?.source},description:{story:`The list still opens to show the options, but neither a press, the arrow
keys nor typing a letter changes the value.

@summary Read-only select`,...Oi.parameters?.docs?.description}}},ki.parameters={...ki.parameters,docs:{...ki.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full flex-col gap-2">
            <Select.Root items={STATES}>
                <Select.Trigger aria-label="State" aria-invalid aria-describedby="state-error" placeholder="Select a state" />
                <Select.Content>
                    {STATES.map(({
          value,
          label
        }) => <Select.Item key={value} value={value}>
                            {label}
                        </Select.Item>)}
                </Select.Content>
            </Select.Root>
            <p id="state-error" className="text-sm text-text-input-destructive">
                Choose a state.
            </p>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    await expect(trigger).toHaveAttribute('aria-invalid', 'true');
    await expect(trigger).toHaveAccessibleDescription('Choose a state.');
    await expect(trigger).toHaveStyle({
      borderColor: 'rgb(217, 38, 38)'
    });
  }
}`,...ki.parameters?.docs?.source},description:{story:"`aria-invalid` on the trigger paints the destructive border, and\n`aria-describedby` points at the message. Inside a `Field.Root`, `invalid`\non the field sets both.\n\n@summary Failed validation on the trigger",...ki.parameters?.docs?.description}}},Ai.parameters={...Ai.parameters,docs:{...Ai.parameters?.docs,source:{originalSource:`{
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
}`,...Ai.parameters?.docs?.source},description:{story:`@summary Controlled select whose value is set from outside`,...Ai.parameters?.docs?.description}}},ji.parameters={...ji.parameters,docs:{...ji.parameters?.docs,source:{originalSource:`{
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
}`,...ji.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value`, and `required` blocks the\nsubmission until something is picked.\n\n@summary Native form submission",...ji.parameters?.docs?.description}}},Mi.parameters={...Mi.parameters,docs:{...Mi.parameters?.docs,source:{originalSource:`{
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
      <form noValidate className="flex w-full flex-col items-start gap-6" onSubmit={handleSubmit(data => setSubmitted(data.state))}>
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
}`,...Mi.parameters?.docs?.source},description:{story:"With react-hook-form, wire the select through `Controller` and put\n`field.ref` on the trigger, so a failed submit focuses it.\n\n@summary React Hook Form through Controller",...Mi.parameters?.docs?.description}}},Ni.parameters={...Ni.parameters,docs:{...Ni.parameters?.docs,source:{originalSource:`{
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
}`,...Ni.parameters?.docs?.source},description:{story:`A long option label is cut with an ellipsis in the trigger and in its row,
and the chevron keeps its place.

@summary Long labels truncate`,...Ni.parameters?.docs?.description}}},Pi.parameters={...Pi.parameters,docs:{...Pi.parameters?.docs,source:{originalSource:`{
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
}`,...Pi.parameters?.docs?.source},description:{story:`Every state of the trigger side by side, for checking against the design.

@summary Visual comparison of the trigger states`,...Pi.parameters?.docs?.description}}},Fi.parameters={...Fi.parameters,docs:{...Fi.parameters?.docs,source:{originalSource:`{
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
}`,...Fi.parameters?.docs?.source},description:{story:`Enter, Space or the arrow keys open the list; the arrows move, Enter picks
and Escape closes it, handing focus back to the trigger.

@summary Keyboard selection`,...Fi.parameters?.docs?.description}}},Ii.parameters={...Ii.parameters,docs:{...Ii.parameters?.docs,source:{originalSource:`{
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
}`,...Ii.parameters?.docs?.source},description:{story:`The list matches the trigger's width, opens below it and scrolls once it
runs out of height.

@summary List geometry and scrolling`,...Ii.parameters?.docs?.description}}},Li.parameters={...Li.parameters,docs:{...Li.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Select.Root items={STATES}>
            <Select.Trigger aria-label="State" placeholder="Select a state" />
            <Select.Content className="max-h-40">
                {STATES.map(({
        value,
        label
      }) => <Select.Item key={value} value={value}>
                        {label}
                    </Select.Item>)}
            </Select.Content>
        </Select.Root>,
  play: async ({
    canvasElement
  }) => {
    const list = await open(within(canvasElement).getByRole('combobox', {
      name: 'State'
    }));
    const surface = list.closest('[data-slot=select-content]')!;
    await expect(surface.getBoundingClientRect().height).toBe(160);
    await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight);
    list.scrollTop = list.scrollHeight;
    await waitFor(() => expect(within(list).getByRole('option', {
      name: 'Texas'
    }).getBoundingClientRect().bottom).toBeLessThanOrEqual(surface.getBoundingClientRect().bottom));
    await close();
  }
}`,...Li.parameters?.docs?.source},description:{story:"A `max-h-*` on `Content` shrinks the scrolling area; the last option is still\nreachable by scrolling.\n\n@summary Shorter list through className",...Li.parameters?.docs?.description}}},Ri.parameters={...Ri.parameters,docs:{...Ri.parameters?.docs,source:{originalSource:`{
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
    await expect(trigger).toHaveTextContent('California');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: CA');
  }
}`,...Ri.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled select back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...Ri.parameters?.docs?.description}}},zi.parameters={...zi.parameters,docs:{...zi.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const {
      control,
      reset
    } = useForm<{
      state?: string | null;
    }>();
    return <div className="flex w-full flex-col items-start gap-6">
                <div className="w-full">
                    <Controller name="state" control={control} render={({
          field
        }) => <Select.Root items={STATES} value={field.value} onValueChange={field.onChange}>
                                <Select.Trigger ref={field.ref} aria-label="State" placeholder="Select a state" />
                                <Select.Content>
                                    {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                            {label}
                                        </Select.Item>)}
                                </Select.Content>
                            </Select.Root>} />
                </div>
                <Button variant="secondary" size="sm" onClick={() => reset()}>
                    Reset form
                </Button>
            </div>;
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
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Georgia');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset form'
    }));
    await expect(trigger).toHaveTextContent('Select a state');
  }
}`,...zi.parameters?.docs?.source},description:{story:`A form library's reset with no default values hands the select \`undefined\`,
which clears the pick instead of bringing back the last one.

@summary Reset to undefined clears the value`,...zi.parameters?.docs?.description}}},Bi.parameters={...Bi.parameters,docs:{...Bi.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Field.Root disabled>
            <Field.Label>State</Field.Label>
            <Select.Root items={STATES} disabled={false}>
                <Select.Trigger aria-label="Risk state" aria-describedby="state-note" placeholder="Select a state" />
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
            <p id="state-note">Changing it requotes every carrier.</p>
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'Risk state'
    });
    await expect(trigger).not.toHaveAttribute('aria-labelledby');
    await expect(trigger).toHaveAccessibleDescription('Where the risk is located. Changing it requotes every carrier.');
    await expect(trigger).toBeEnabled();
  }
}`,...Bi.parameters?.docs?.source},description:{story:"`aria-label` and `disabled={false}` on the select win over the field. Its own\n`aria-describedby` joins the field's description instead of replacing it.\n\n@summary Own props override the Field wiring",...Bi.parameters?.docs?.description}}},Vi.parameters={...Vi.parameters,docs:{...Vi.parameters?.docs,source:{originalSource:`{
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
}`,...Vi.parameters?.docs?.source},description:{story:`Inside a \`Modal\`, the list renders into the dialog, so the arrow keys keep
focus on the options. Escape closes the list first and the modal on the
next press.

@summary Keyboard and Escape inside a Modal`,...Vi.parameters?.docs?.description}}},Hi.parameters={...Hi.parameters,docs:{...Hi.parameters?.docs,source:{originalSource:`{
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
    await open(trigger);
    await waitFor(() => expect(document.activeElement).toHaveAttribute('data-slot', 'select-content'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
  }
}`,...Hi.parameters?.docs?.source},description:{story:`Opened by pointer with nothing picked, the list itself holds focus, and
Escape there still closes the list only, not the \`Modal\`.

@summary Escape from the list itself inside a Modal`,...Hi.parameters?.docs?.description}}},Ui.parameters={...Ui.parameters,docs:{...Ui.parameters?.docs,source:{originalSource:`{
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
  render: () => <div dir="rtl" className="w-full">
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
    return <div className="flex w-full flex-col items-start gap-6">
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

@summary onBlur only when focus leaves the select`,...Gi.parameters?.docs?.description}}},Ki=[`Default`,`WithValue`,`Sizes`,`InsideField`,`Disabled`,`DisabledItem`,`ReadOnly`,`Invalid`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`AllStates`,`Keyboard`,`ListGeometry`,`ContentMaxHeight`,`FormReset`,`ResetToUndefined`,`InsideFieldOverridden`,`InsideModal`,`ModalEscapeFromList`,`InsidePopover`,`RightToLeft`,`BlurOnLeave`]})))()}qi();export{Pi as AllStates,Gi as BlurOnLeave,Li as ContentMaxHeight,Ai as Controlled,Si as Default,Ei as Disabled,Di as DisabledItem,Ri as FormReset,ji as InForm,Ti as InsideField,Bi as InsideFieldOverridden,Vi as InsideModal,Ui as InsidePopover,ki as Invalid,Fi as Keyboard,Ii as ListGeometry,Ni as LongLabel,Hi as ModalEscapeFromList,Oi as ReadOnly,zi as ResetToUndefined,Wi as RightToLeft,wi as Sizes,Mi as WithReactHookForm,Ci as WithValue,Ki as __namedExportsOrder,bi as default};