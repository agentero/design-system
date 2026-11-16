import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-Bswo_eV3.js";import{t as r}from"./react-dom-BXuLyisi.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./createLucideIcon-DrXi5esl.js";import{n as s,t as c}from"./check-BOxP4l1n.js";import{n as l,t as u}from"./chevron-down-CS45Y6Zb.js";import{i as d,n as f,r as p,t as m}from"./dist-COiCg2Xs.js";import{n as h,t as g}from"./dist-BaIB5Jzq.js";import{n as _,t as v}from"./dist-C-2fRwq_.js";import{n as y,t as b}from"./dist-C8AlzbfS.js";import{n as x,t as S}from"./utils-nsk-j2e0.js";import{n as ee,t as C}from"./button-BH6uaYH4.js";import{i as te,n as w,r as T,t as ne}from"./dist-BJ4TOXFa.js";import{a as E,i as D}from"./tooltip-DuOz6W4C.js";import{n as re,t as ie}from"./dist-C6-du71Z.js";import{r as ae,t as O}from"./dist-D33rvDic.js";import{i as k,n as A,r as oe,t as se}from"./dist-DV8jEBec.js";import{a as ce,i as le,n as ue,o as de,r as fe,t as pe}from"./dist-D6VPf2Eu.js";import{a as me,n as he,t as j}from"./field-z1-tV2zQ.js";import{n as ge,r as _e}from"./input-U5idIXhl.js";import{n as ve,t as ye}from"./modal-BR-O3xEh.js";import{a as be,i as xe,o as Se,r as Ce}from"./combobox-escape-uEfd7OBv.js";import{i as we,n as Te,r as Ee,t as De}from"./es2015-C6o1aFGW.js";import{n as Oe,t as ke}from"./popover-XKUUBGOM.js";import{n as Ae,t as je}from"./dist-BUc-QyE1.js";import{a as Me,r as Ne,t as Pe}from"./index.esm-iYj4yHkp.js";import{n as Fe,t as Ie}from"./dist-B04N1uNo.js";var Le,Re;function ze(){return(ze=t((()=>{a(),Le={name:`chevron-up`,size:24,node:[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]},Le.node,Re=o(Le)})))()}function Be(e,[t,n]){return Math.min(n,Math.max(t,e))}function Ve(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function He(...e){return t=>{let n=!1,r=e.map(e=>{let r=Ve(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Ve(e[t],null)}}}}function M(...e){return Ue.useCallback(He(...e),e)}var Ue;function We(){return(We=t((()=>{Ue=e(n(),1)})))()}function Ge(e){let t=N.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];Ye(r)&&typeof nt==`function`&&(r=nt(r._payload)),N.Children.forEach(r,e=>{if(Je(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;Ye(n)&&typeof nt==`function`&&(n=nt(n._payload)),a=Qe(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=N.cloneElement(a,void 0,s):!o&&N.Children.count(r)===1&&N.isValidElement(r)&&(a=r);let c=a?qe(a):void 0,l=M(n,c);if(!a){if(r||r===0)throw Error(o?tt(e):et(e));return r}let u=Ke(i,a.props??{});return a.type!==N.Fragment&&(u.ref=n?l:c),N.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function Ke(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function qe(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Je(e){return N.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Ze}function Ye(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===$e&&`_payload`in e&&Xe(e._payload)}function Xe(e){return typeof e==`object`&&!!e&&`then`in e}var N,Ze,Qe,$e,et,tt,nt;function rt(){return(rt=t((()=>{N=e(n(),1),We(),Ze=Symbol.for(`radix.slottable`),Qe=(e,t)=>{if(`child`in e.props){let t=e.props.child;return N.isValidElement(t)?N.cloneElement(t,void 0,e.props.children(t.props.children)):null}return N.isValidElement(t)?t:null},$e=Symbol.for(`react.lazy`),et=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,tt=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,nt=N.use})))()}function it(e){let t=at.useRef(e);return at.useEffect(()=>{t.current=e}),at.useMemo(()=>((...e)=>t.current?.(...e)),[])}var at;function ot(){return(ot=t((()=>{at=e(n(),1)})))()}function st(e){let{__scopeSelect:t,children:n,open:r,defaultOpen:i,onOpenChange:a,value:o,defaultValue:s,onValueChange:c,dir:l,name:u,autoComplete:d,disabled:p,required:m,form:g,internal_do_not_use_render:v}=e,y=bt(t),[b,x]=P.useState(null),[S,ee]=P.useState(null),[C,te]=P.useState(!1),w=_(l),[T,ne]=f({prop:r,defaultProp:i??!1,onChange:a,caller:I}),[E,D]=f({prop:o,defaultProp:s,onChange:c,caller:I}),re=P.useRef(null),ie=P.useRef(E);P.useEffect(()=>{let e=g?b?.ownerDocument.getElementById(g):b?.form;if(e instanceof HTMLFormElement){let t=()=>D(ie.current);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[g,b,D]);let ae=!b||!!g||!!b.closest(`form`),[O,k]=P.useState(new Set),A=h(),oe=Array.from(O).map(e=>e.props.value).join(`;`),se=P.useCallback(e=>{k(t=>new Set(t).add(e))},[]),ce=P.useCallback(e=>{k(t=>{let n=new Set(t);return n.delete(e),n})},[]),ue={required:m,trigger:b,onTriggerChange:x,valueNode:S,onValueNodeChange:ee,valueNodeHasChildren:C,onValueNodeHasChildrenChange:te,contentId:A,value:E,onValueChange:D,open:T,onOpenChange:ne,dir:w,triggerPointerDownPosRef:re,disabled:p,name:u,autoComplete:d,form:g,nativeOptions:O,nativeSelectKey:oe,isFormControl:ae};return(0,F.jsx)(le,{...y,children:(0,F.jsx)(xt,{scope:t,...ue,children:(0,F.jsx)(gt.Provider,{scope:t,children:(0,F.jsx)(St,{scope:t,onNativeOptionAdd:se,onNativeOptionRemove:ce,children:ct(v)?v(ue):n})})})})}function ct(e){return typeof e==`function`}function lt(e){return e===``||e===void 0}function ut(e){let t=it(e),n=P.useRef(``),r=P.useRef(0),i=P.useCallback(e=>{let i=n.current+e;t(i),(function e(t){n.current=t,window.clearTimeout(r.current),t!==``&&(r.current=window.setTimeout(()=>e(``),1e3))})(i)},[t]),a=P.useCallback(()=>{n.current=``,window.clearTimeout(r.current)},[]);return P.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,a]}function dt(e,t,n){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,i=n?e.indexOf(n):-1,a=ft(e,Math.max(i,0));r.length===1&&(a=a.filter(e=>e!==n));let o=a.find(e=>e.textValue.toLowerCase().startsWith(r.toLowerCase()));return o===n?void 0:o}function ft(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var P,pt,F,mt,ht,I,gt,_t,vt,L,yt,bt,xt,R,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,z,It,Lt,B,Rt,V,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn;function Sn(){return(Sn=t((()=>{P=e(n(),1),pt=e(r(),1),te(),Fe(),We(),re(),v(),k(),Ce(),Se(),g(),de(),A(),w(),ae(),rt(),ot(),m(),p(),je(),E(),Te(),we(),F=i(),mt=[` `,`Enter`,`ArrowUp`,`ArrowDown`],ht=[` `,`Enter`],I=`Select`,[gt,_t,vt]=Ie(I),[L,yt]=ie(I,[vt,ce]),bt=ce(),[xt,R]=L(I),[St,Ct]=L(I),wt=`SelectProvider`,st.displayName=wt,Tt=e=>{let{__scopeSelect:t,children:n,...r}=e;return(0,F.jsx)(st,{__scopeSelect:t,...r,internal_do_not_use_render:({isFormControl:e})=>(0,F.jsxs)(F.Fragment,{children:[n,e?(0,F.jsx)(xn,{__scopeSelect:t}):null]})})},Tt.displayName=I,Et=`SelectTrigger`,Dt=P.forwardRef((e,t)=>{let{__scopeSelect:n,disabled:r=!1,...i}=e,a=bt(n),o=R(Et,n),s=o.disabled||r,c=M(t,o.onTriggerChange),l=_t(n),u=P.useRef(`touch`),[d,f,p]=ut(e=>{let t=l().filter(e=>!e.disabled),n=dt(t,e,t.find(e=>e.value===o.value));n!==void 0&&o.onValueChange(n.value)}),m=e=>{s||(o.onOpenChange(!0),p()),e&&(o.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,F.jsx)(pe,{asChild:!0,...a,children:(0,F.jsx)(O.button,{type:`button`,role:`combobox`,"aria-controls":o.open?o.contentId:void 0,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":`none`,dir:o.dir,"data-state":o.open?`open`:`closed`,disabled:s,"data-disabled":s?``:void 0,"data-placeholder":lt(o.value)?``:void 0,...i,ref:c,onClick:T(i.onClick,e=>{e.currentTarget.focus(),u.current!==`mouse`&&m(e)}),onPointerDown:T(i.onPointerDown,e=>{u.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.button===0&&e.ctrlKey===!1&&e.pointerType===`mouse`&&(m(e),e.preventDefault())}),onKeyDown:T(i.onKeyDown,e=>{let t=d.current!==``;!(e.ctrlKey||e.altKey||e.metaKey)&&e.key.length===1&&f(e.key),!(t&&e.key===` `)&&mt.includes(e.key)&&(m(),e.preventDefault())})})})}),Dt.displayName=Et,Ot=`SelectValue`,kt=P.forwardRef((e,t)=>{let{__scopeSelect:n,className:r,style:i,children:a,placeholder:o=``,...s}=e,c=R(Ot,n),{onValueNodeHasChildrenChange:l}=c,u=a!==void 0,f=M(t,c.onValueNodeChange);d(()=>{l(u)},[l,u]);let p=lt(c.value);return(0,F.jsx)(O.span,{...s,asChild:!p&&s.asChild,ref:f,style:{pointerEvents:`none`},children:(0,F.jsx)(P.Fragment,{children:p?o:a},p?`placeholder`:`value`)})}),kt.displayName=Ot,At=`SelectIcon`,jt=P.forwardRef((e,t)=>{let{__scopeSelect:n,children:r,...i}=e;return(0,F.jsx)(O.span,{"aria-hidden":!0,...i,ref:t,children:r||`▼`})}),jt.displayName=At,Mt=`SelectPortal`,[Nt,Pt]=L(Mt,{forceMount:void 0}),Ft=e=>{let{__scopeSelect:t,forceMount:n,...r}=e;return(0,F.jsx)(Nt,{scope:e.__scopeSelect,forceMount:n,children:(0,F.jsx)(se,{asChild:!0,...r})})},Ft.displayName=Mt,z=`SelectContent`,It=P.forwardRef((e,t)=>{let n=Pt(z,e.__scopeSelect),{forceMount:r=n.forceMount,...i}=e,a=R(z,e.__scopeSelect),[o,s]=P.useState();return d(()=>{s(new DocumentFragment)},[]),(0,F.jsx)(ne,{present:r||a.open,children:({present:e})=>e?(0,F.jsx)(Vt,{...i,ref:t}):(0,F.jsx)(Lt,{...i,fragment:o})})}),It.displayName=z,Lt=P.forwardRef((e,t)=>{let{__scopeSelect:n,children:r,fragment:i}=e;return i?pt.createPortal((0,F.jsx)(Rt,{scope:n,children:(0,F.jsx)(gt.Slot,{scope:n,children:(0,F.jsx)(`div`,{ref:t,children:r})})}),i):null}),Lt.displayName=`SelectContentFragment`,B=10,[Rt,V]=L(z),zt=`SelectContentImpl`,Bt=Ge(`SelectContent.RemoveScroll`),Vt=P.forwardRef((e,t)=>{let{__scopeSelect:n}=e,{position:r=`item-aligned`,onCloseAutoFocus:i,onEscapeKeyDown:a,onPointerDownOutside:o,side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g,..._}=e,v=R(z,n),[y,b]=P.useState(null),[x,S]=P.useState(null),ee=M(t,b),[C,te]=P.useState(null),[w,ne]=P.useState(null),E=_t(n),[D,re]=P.useState(!1),ie=P.useRef(!1);P.useEffect(()=>{if(y)return De(y)},[y]),xe();let ae=P.useCallback(e=>{let[t,...n]=E().map(e=>e.ref.current),[r]=n.slice(-1),i=document.activeElement;for(let n of e)if(n===i||(n?.scrollIntoView({block:`nearest`}),n===t&&x&&(x.scrollTop=0),n===r&&x&&(x.scrollTop=x.scrollHeight),n?.focus(),document.activeElement!==i))return},[E,x]),O=P.useCallback(()=>ae([C,y]),[ae,C,y]);P.useEffect(()=>{D&&O()},[D,O]);let{onOpenChange:k,triggerPointerDownPosRef:A}=v;P.useEffect(()=>{if(y){let e={x:0,y:0},t=t=>{e={x:Math.abs(Math.round(t.pageX)-(A.current?.x??0)),y:Math.abs(Math.round(t.pageY)-(A.current?.y??0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():n.composedPath().includes(y)||k(!1),document.removeEventListener(`pointermove`,t),A.current=null};return A.current!==null&&(document.addEventListener(`pointermove`,t),document.addEventListener(`pointerup`,n,{capture:!0,once:!0})),()=>{document.removeEventListener(`pointermove`,t),document.removeEventListener(`pointerup`,n,{capture:!0})}}},[y,k,A]),P.useEffect(()=>{let e=()=>k(!1);return window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[k]);let[se,ce]=ut(e=>{let t=E().filter(e=>!e.disabled),n=dt(t,e,t.find(e=>e.ref.current===document.activeElement));n&&setTimeout(()=>n.ref.current?.focus())}),le=P.useCallback((e,t,n)=>{let r=!ie.current&&!n;(v.value!==void 0&&v.value===t||r)&&(te(e),r&&(ie.current=!0))},[v.value]),ue=P.useCallback(()=>y?.focus(),[y]),de=P.useCallback((e,t,n)=>{let r=!ie.current&&!n;(v.value!==void 0&&v.value===t||r)&&ne(e)},[v.value]),fe=r===`popper`?Gt:Ut,pe=fe===Gt?{side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g}:{};return(0,F.jsx)(Rt,{scope:n,content:y,viewport:x,onViewportChange:S,itemRefCallback:le,selectedItem:C,onItemLeave:ue,itemTextRefCallback:de,focusSelectedItem:O,selectedItemText:w,position:r,isPositioned:D,searchRef:se,children:(0,F.jsx)(Ee,{as:Bt,allowPinchZoom:!0,children:(0,F.jsx)(be,{asChild:!0,trapped:v.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:T(i,e=>{v.trigger?.focus({preventScroll:!0}),e.preventDefault()}),children:(0,F.jsx)(oe,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:o,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>v.onOpenChange(!1),children:(0,F.jsx)(fe,{role:`listbox`,id:v.contentId,"data-state":v.open?`open`:`closed`,dir:v.dir,onContextMenu:e=>e.preventDefault(),..._,...pe,onPlaced:()=>re(!0),ref:ee,style:{display:`flex`,flexDirection:`column`,outline:`none`,..._.style},onKeyDown:T(_.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if(e.key===`Tab`&&e.preventDefault(),!t&&e.key.length===1&&ce(e.key),[`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=E().filter(e=>!e.disabled).map(e=>e.ref.current);if([`ArrowUp`,`End`].includes(e.key)&&(t=t.slice().reverse()),[`ArrowUp`,`ArrowDown`].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>ae(t)),e.preventDefault()}})})})})})})}),Vt.displayName=zt,Ht=`SelectItemAlignedPosition`,Ut=P.forwardRef((e,t)=>{let{__scopeSelect:n,onPlaced:r,...i}=e,a=R(z,n),o=V(z,n),[s,c]=P.useState(null),[l,u]=P.useState(null),f=M(t,u),p=_t(n),m=P.useRef(!1),h=P.useRef(!0),{viewport:g,selectedItem:_,selectedItemText:v,focusSelectedItem:y}=o,b=P.useCallback(()=>{if(a.trigger&&a.valueNode&&s&&l&&g&&_&&v){let e=a.trigger.getBoundingClientRect(),t=l.getBoundingClientRect(),n=a.valueNode.getBoundingClientRect(),i=v.getBoundingClientRect();if(a.dir!==`rtl`){let r=i.left-t.left,a=n.left-r,o=e.left-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-B,d=Be(a,[B,Math.max(B,u-l)]);s.style.minWidth=c+`px`,s.style.left=d+`px`}else{let r=t.right-i.right,a=window.innerWidth-n.right-r,o=window.innerWidth-e.right-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-B,d=Be(a,[B,Math.max(B,u-l)]);s.style.minWidth=c+`px`,s.style.right=d+`px`}let o=p(),c=window.innerHeight-B*2,u=g.scrollHeight,d=window.getComputedStyle(l),f=parseInt(d.borderTopWidth,10),h=parseInt(d.paddingTop,10),y=parseInt(d.borderBottomWidth,10),b=parseInt(d.paddingBottom,10),x=f+h+u+b+y,S=Math.min(_.offsetHeight*5,x),ee=window.getComputedStyle(g),C=parseInt(ee.paddingTop,10),te=parseInt(ee.paddingBottom,10),w=e.top+e.height/2-B,T=c-w,ne=_.offsetHeight/2,E=_.offsetTop+ne,D=f+h+E,re=x-D;if(D<=w){let e=o.length>0&&_===o[o.length-1].ref.current;s.style.bottom=`0px`;let t=l.clientHeight-g.offsetTop-g.offsetHeight,n=D+Math.max(T,ne+(e?te:0)+t+y);s.style.height=n+`px`}else{let e=o.length>0&&_===o[0].ref.current;s.style.top=`0px`;let t=Math.max(w,f+g.offsetTop+(e?C:0)+ne)+re;s.style.height=t+`px`,g.scrollTop=D-w+g.offsetTop}s.style.margin=`${B}px 0`,s.style.minHeight=S+`px`,s.style.maxHeight=c+`px`,r?.(),requestAnimationFrame(()=>m.current=!0)}},[p,a.trigger,a.valueNode,s,l,g,_,v,a.dir,r]);d(()=>b(),[b]);let[x,S]=P.useState();d(()=>{l&&S(window.getComputedStyle(l).zIndex)},[l]);let ee=P.useCallback(e=>{e&&h.current===!0&&(b(),y?.(),h.current=!1)},[b,y]);return(0,F.jsx)(Kt,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:m,onScrollButtonChange:ee,children:(0,F.jsx)(`div`,{ref:c,style:{display:`flex`,flexDirection:`column`,position:`fixed`,zIndex:x},children:(0,F.jsx)(O.div,{...i,ref:f,style:{boxSizing:`border-box`,maxHeight:`100%`,...i.style}})})})}),Ut.displayName=Ht,Wt=`SelectPopperPosition`,Gt=P.forwardRef((e,t)=>{let{__scopeSelect:n,align:r=`start`,collisionPadding:i=B,...a}=e,o=bt(n);return(0,F.jsx)(fe,{...o,...a,ref:t,align:r,collisionPadding:i,style:{boxSizing:`border-box`,...a.style,"--radix-select-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-select-content-available-width":`var(--radix-popper-available-width)`,"--radix-select-content-available-height":`var(--radix-popper-available-height)`,"--radix-select-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-select-trigger-height":`var(--radix-popper-anchor-height)`}})}),Gt.displayName=Wt,[Kt,qt]=L(z,{}),Jt=`SelectViewport`,Yt=P.forwardRef((e,t)=>{let{__scopeSelect:n,nonce:r,...i}=e,a=V(Jt,n),o=qt(Jt,n),s=M(t,a.onViewportChange),c=P.useRef(0);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`},nonce:r}),(0,F.jsx)(gt.Slot,{scope:n,children:(0,F.jsx)(O.div,{"data-radix-select-viewport":``,role:`presentation`,...i,ref:s,style:{position:`relative`,flex:1,overflow:`hidden auto`,...i.style},onScroll:T(i.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=o;if(r?.current&&n){let e=Math.abs(c.current-t.scrollTop);if(e>0){let r=window.innerHeight-B*2,i=parseFloat(n.style.minHeight),a=parseFloat(n.style.height),o=Math.max(i,a);if(o<r){let i=o+e,a=Math.min(r,i),s=i-a;n.style.height=a+`px`,n.style.bottom===`0px`&&(t.scrollTop=s>0?s:0,n.style.justifyContent=`flex-end`)}}}c.current=t.scrollTop})})})]})}),Yt.displayName=Jt,Xt=`SelectGroup`,[Zt,Qt]=L(Xt),$t=P.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,i=h();return(0,F.jsx)(Zt,{scope:n,id:i,children:(0,F.jsx)(O.div,{role:`group`,"aria-labelledby":i,...r,ref:t})})}),$t.displayName=Xt,en=`SelectLabel`,tn=P.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,i=Qt(en,n);return(0,F.jsx)(O.div,{id:i.id,...r,ref:t})}),tn.displayName=en,nn=`SelectItem`,[rn,an]=L(nn),on=P.forwardRef((e,t)=>{let{__scopeSelect:n,value:r,disabled:i=!1,textValue:a,...o}=e,s=R(nn,n),c=V(nn,n),l=s.value===r,[u,d]=P.useState(a??``),[f,p]=P.useState(!1),m=M(t,it(e=>c.itemRefCallback?.(e,r,i))),g=h(),_=P.useRef(`touch`),v=()=>{i||(s.onValueChange(r),s.onOpenChange(!1))};return(0,F.jsx)(rn,{scope:n,value:r,disabled:i,textId:g,isSelected:l,onItemTextChange:P.useCallback(e=>{d(t=>t||(e?.textContent??``).trim())},[]),children:(0,F.jsx)(gt.ItemSlot,{scope:n,value:r,disabled:i,textValue:u,children:(0,F.jsx)(O.div,{role:`option`,"aria-labelledby":g,"data-highlighted":f?``:void 0,"aria-selected":l&&f,"data-state":l?`checked`:`unchecked`,"aria-disabled":i||void 0,"data-disabled":i?``:void 0,tabIndex:i?void 0:-1,...o,ref:m,onFocus:T(o.onFocus,()=>p(!0)),onBlur:T(o.onBlur,()=>p(!1)),onClick:T(o.onClick,()=>{_.current!==`mouse`&&v()}),onPointerUp:T(o.onPointerUp,()=>{_.current===`mouse`&&v()}),onPointerDown:T(o.onPointerDown,e=>{_.current=e.pointerType}),onPointerMove:T(o.onPointerMove,e=>{_.current=e.pointerType,i?c.onItemLeave?.():_.current===`mouse`&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:T(o.onPointerLeave,e=>{e.currentTarget===document.activeElement&&c.onItemLeave?.()}),onKeyDown:T(o.onKeyDown,e=>{i||e.target!==e.currentTarget||(c.searchRef?.current===``||e.key!==` `)&&(ht.includes(e.key)&&v(),e.key===` `&&e.preventDefault())})})})})}),on.displayName=nn,sn=`SelectItemText`,cn=P.forwardRef((e,t)=>{let{__scopeSelect:n,className:r,style:i,...a}=e,o=R(sn,n),s=V(sn,n),c=an(sn,n),l=Ct(sn,n),[u,f]=P.useState(null),p=it(e=>s.itemTextRefCallback?.(e,c.value,c.disabled)),m=M(t,f,c.onItemTextChange,p),h=u?.textContent,g=P.useMemo(()=>(0,F.jsx)(`option`,{value:c.value,disabled:c.disabled,children:h},c.value),[c.disabled,c.value,h]),{onNativeOptionAdd:_,onNativeOptionRemove:v}=l;return d(()=>(_(g),()=>v(g)),[_,v,g]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(O.span,{id:c.textId,...a,ref:m}),c.isSelected&&o.valueNode&&!o.valueNodeHasChildren&&!lt(o.value)?pt.createPortal(a.children,o.valueNode):null]})}),cn.displayName=sn,ln=`SelectItemIndicator`,un=P.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e;return an(ln,n).isSelected?(0,F.jsx)(O.span,{"aria-hidden":!0,...r,ref:t}):null}),un.displayName=ln,dn=`SelectScrollUpButton`,fn=P.forwardRef((e,t)=>{let n=V(dn,e.__scopeSelect),r=qt(dn,e.__scopeSelect),[i,a]=P.useState(!1),o=M(t,r.onScrollButtonChange);return d(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollTop>0;a(e)},t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,F.jsx)(hn,{...e,ref:o,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop-=t.offsetHeight)}}):null}),fn.displayName=dn,pn=`SelectScrollDownButton`,mn=P.forwardRef((e,t)=>{let n=V(pn,e.__scopeSelect),r=qt(pn,e.__scopeSelect),[i,a]=P.useState(!1),o=M(t,r.onScrollButtonChange);return d(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight,n=Math.ceil(t.scrollTop)<e;a(n)},t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,F.jsx)(hn,{...e,ref:o,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop+=t.offsetHeight)}}):null}),mn.displayName=pn,hn=P.forwardRef((e,t)=>{let{__scopeSelect:n,onAutoScroll:r,...i}=e,a=V(`SelectScrollButton`,n),o=P.useRef(null),s=_t(n),c=P.useCallback(()=>{o.current!==null&&(window.clearInterval(o.current),o.current=null)},[]);return P.useEffect(()=>()=>c(),[c]),d(()=>{s().find(e=>e.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:`nearest`})},[s]),(0,F.jsx)(O.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:T(i.onPointerDown,()=>{o.current===null&&(o.current=window.setInterval(r,50))}),onPointerMove:T(i.onPointerMove,()=>{a.onItemLeave?.(),o.current===null&&(o.current=window.setInterval(r,50))}),onPointerLeave:T(i.onPointerLeave,()=>{c()})})}),gn=`SelectSeparator`,_n=P.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e;return(0,F.jsx)(O.div,{"aria-hidden":!0,...r,ref:t})}),_n.displayName=gn,vn=`SelectArrow`,yn=P.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,i=bt(n);return V(vn,n).position===`popper`?(0,F.jsx)(ue,{...i,...r,ref:t}):null}),yn.displayName=vn,bn=`SelectBubbleInput`,xn=P.forwardRef(({__scopeSelect:e,...t},n)=>{let r=R(bn,e),{value:i,onValueChange:a,required:o,disabled:s,name:c,autoComplete:l,form:u}=r,{nativeOptions:d,nativeSelectKey:f}=r,p=P.useRef(null),m=M(n,p),h=i??``,g=Ae(h),_=Array.from(d).some(e=>(e.props.value??``)===``);return P.useEffect(()=>{let e=p.current;if(!e)return;let t=window.HTMLSelectElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set;if(g!==h&&n){let t=new Event(`change`,{bubbles:!0});n.call(e,h),e.dispatchEvent(t)}},[g,h]),(0,F.jsxs)(O.select,{"aria-hidden":!0,required:o,tabIndex:-1,name:c,autoComplete:l,disabled:s,form:u,onChange:e=>a(e.target.value),...t,style:{...D,...t.style},ref:m,defaultValue:h,children:[lt(i)&&!_?(0,F.jsx)(`option`,{value:``}):null,Array.from(d)]},f)}),xn.displayName=bn})))()}var H,Cn,U,wn,Tn,En,Dn,On,kn,An;function jn(){return(jn=t((()=>{Sn(),s(),l(),ze(),b(),x(),he(),ge(),H=i(),Cn=y({slots:{trigger:[`flex cursor-pointer items-center gap-2 pe-3 text-start`,`data-[state=open]:border-border-input-focus data-[state=open]:outline-border-input-focus`,`data-[state=open]:outline-[0.125rem] data-[state=open]:outline-offset-[-0.0625rem]`,`aria-invalid:data-[state=open]:border-border-input-destructive`,`aria-invalid:data-[state=open]:outline-border-input-destructive`],value:`min-w-0 flex-1 truncate group-data-placeholder/select-trigger:text-text-input-placeholder`,icon:[`flex size-5 shrink-0 items-center justify-center transition-transform duration-150 motion-reduce:transition-none`,`text-icon-input-default group-data-[state=open]/select-trigger:-rotate-180`,`group-disabled/select-trigger:text-icon-input-disable`],content:[`relative z-(--z-index-top-layer) flex flex-col overflow-hidden outline-none`,`rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-xl`],viewport:`scroll-py-1 py-1`,scrollButton:[`flex h-6 shrink-0 cursor-default items-center justify-center bg-bg-default-base-primary`,`text-icon-input-default`],item:[`group/item relative mx-1 flex min-h-10 cursor-pointer items-center rounded-md py-2 ps-4`,`pe-10 text-sm text-text-default-base-primary outline-none select-none`,`data-highlighted:bg-bg-default-base-primary-hover`,`data-disabled:cursor-default data-disabled:text-text-default-base-tertiary`],trailing:`ms-3 shrink-0 text-xs text-text-default-base-tertiary`,indicator:[`pointer-events-none absolute end-2 flex size-5 items-center justify-center`,`text-icon-default-base-secondary group-data-disabled/item:text-text-default-base-tertiary`],groupLabel:`mx-1 px-3 py-1 text-xs text-text-default-base-tertiary`,separator:`my-2 h-px bg-border-default-base-primary`},variants:{trailing:{true:{item:`pe-2`,indicator:`static ms-2 shrink-0`}},position:{popper:{content:`w-(--radix-select-trigger-width) max-h-[min(18rem,var(--radix-select-content-available-height))]`},"item-aligned":{content:`max-h-72`}}}}),U=Cn(),wn=({disabled:e,required:t,...n})=>{let r=me();return(0,H.jsx)(Tt,{...n,disabled:e??r?.disabled,required:t??r?.required})},wn.displayName=`Select.Root`,Tn=({size:e=`md`,placeholder:t,children:n,className:r,...i})=>{let a=me();return(0,H.jsxs)(Dt,{id:a?.controlId,"aria-describedby":a?.describedBy,"aria-invalid":a?.invalid||void 0,...i,"data-slot":`select-trigger`,"data-size":e,className:S(_e({size:e}),`group/select-trigger`,U.trigger(),r),children:[(0,H.jsx)(`span`,{"data-slot":`select-value`,className:U.value(),children:(0,H.jsx)(kt,{placeholder:t,children:n})}),(0,H.jsx)(jt,{"data-slot":`select-icon`,className:U.icon(),children:(0,H.jsx)(u,{className:`size-5`})})]})},Tn.displayName=`Select.Trigger`,En=({position:e=`popper`,side:t=`bottom`,align:n=`start`,sideOffset:r=8,collisionPadding:i=8,className:a,children:o,...s})=>{let c=me(),l=s[`aria-label`]||s[`aria-labelledby`]?{}:c?{"aria-labelledby":c.labelId}:{"aria-label":`Options`};return(0,H.jsx)(Ft,{children:(0,H.jsxs)(It,{...l,...s,position:e,side:t,align:n,sideOffset:r,collisionPadding:i,"data-slot":`select-content`,className:S(U.content({position:e}),a),children:[(0,H.jsx)(fn,{"data-slot":`select-scroll-up`,className:U.scrollButton(),children:(0,H.jsx)(Re,{className:`size-4`})}),(0,H.jsx)(Yt,{"data-slot":`select-list`,className:U.viewport(),children:o}),(0,H.jsx)(mn,{"data-slot":`select-scroll-down`,className:U.scrollButton(),children:(0,H.jsx)(u,{className:`size-4`})})]})})},En.displayName=`Select.Content`,Dn=({trailing:e,className:t,children:n,...r})=>{let i=Cn({trailing:e!==void 0});return(0,H.jsxs)(on,{...r,"data-slot":`select-item`,className:S(i.item(),t),children:[(0,H.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:(0,H.jsx)(cn,{children:n})}),e!==void 0&&(0,H.jsx)(`span`,{"data-slot":`select-item-trailing`,className:U.trailing(),children:e}),(0,H.jsx)(`span`,{className:i.indicator(),children:(0,H.jsx)(un,{"data-slot":`select-item-indicator`,className:`flex`,children:(0,H.jsx)(c,{className:`size-5`})})})]})},Dn.displayName=`Select.Item`,On=e=>(0,H.jsx)($t,{...e,"data-slot":`select-group`}),On.displayName=`Select.Group`,kn=({className:e,...t})=>(0,H.jsx)(tn,{...t,"data-slot":`select-group-label`,className:S(U.groupLabel(),e)}),kn.displayName=`Select.GroupLabel`,An=({className:e,...t})=>(0,H.jsx)(_n,{...t,"data-slot":`select-separator`,className:S(U.separator(),e)}),An.displayName=`Select.Separator`;try{Cn.displayName=`Select.Root`,Cn.__docgenInfo={description:"Style recipe for Select. Slots: `trigger` (the closed field), `value`, `icon` (the chevron),\n`content` (the floating surface), `viewport` (the scrolling list), `scrollButton`, `item`,\n`trailing`, `indicator` (the check on the selected row), `groupLabel` and `separator`. The\ntrigger wears `Input`'s recipe.",displayName:`Select.Root`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{trailing:{defaultValue:null,description:``,name:`trailing`,required:!1,tags:{},type:{name:`boolean`}},position:{defaultValue:{value:`popper`},description:``,name:`position`,required:!1,tags:{},type:{name:`enum`,raw:`"popper" | "item-aligned"`,value:[{value:`"popper"`},{value:`"item-aligned"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the Select trigger, surface and rows`}}}catch{}try{Tn.displayName=`Select.Trigger`,Tn.__docgenInfo={description:"The closed field: a button drawn as an `Input`, showing the picked option\n(or `placeholder`) and a chevron. Click, Enter, Space or the arrow keys\nopen the list. While the list is open the focus is on the options, and the\nfield keeps its focus ring.\n\nInside a `Field.Root` it takes the field's `id`, description and `invalid`,\nso the `Field.Label` names it, and its own props win. Outside one, give it an\n`aria-label` or point a `Label` at its `id`. Its `ref` reaches the button, so\na form library can focus the field on a failed submit.",displayName:`Select.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:"Control height, matching `Input`. Defaults to `'md'`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},placeholder:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Text shown while nothing is picked.`,name:`placeholder`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Renders the picked value. Defaults to the picked option's label.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Button drawn as an input, showing the picked option and a chevron`,dataAttribute:`{string} data-slot - Always set to "select-trigger"
{string} data-state - "open" while the list is open, "closed" otherwise
{string} data-placeholder - Present while nothing is picked`}}}catch{}try{En.displayName=`Select.Content`,En.__docgenInfo={description:'The floating list. By default (`position="popper"`) it opens below the\ntrigger, matches its width and caps its height to six rows or the room\navailable, so a long list scrolls, with arrows at the ends while there is\nmore to see. `position="item-aligned"` opens it over the trigger instead,\nwith the picked option on top of it.\n\nIt renders on Radix\'s layer stack, so inside a `Modal` or a `Popover` the\nfocus stays on the list and Escape closes the list first.\n\nInside a `Field.Root` the list is named after the `Field.Label`; otherwise it\nis named "Options". Pass `aria-label` or `aria-labelledby` to name it.',displayName:`Select.Content`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Floating surface holding the options`,dataAttribute:`{string} data-slot - Always set to "select-content"`}}}catch{}try{Dn.displayName=`Select.Item`,Dn.__docgenInfo={description:"One option. `value` is what the select stores and submits; the children are\nthe label shown in the row and in the trigger. The picked row carries a\ncheck at its end. A `disabled` row is greyed out and cannot be picked.",displayName:`Select.Item`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},trailing:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Short text at the end of the row, such as a code or a count. It does not show in the trigger.`,name:`trailing`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Option row inside the list`,dataAttribute:`{string} data-slot - Always set to "select-item"
{string} data-state - "checked" on the picked row
{string} data-highlighted - Present on the row under the pointer or the keyboard`}}}catch{}try{On.displayName=`Select.Group`,On.__docgenInfo={description:"A section of options. Give it a `GroupLabel` as heading, and put a\n`Separator` between sections. A single section can carry a heading too.",displayName:`Select.Group`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Section of options under a heading`,dataAttribute:`{string} data-slot - Always set to "select-group"`}}}catch{}try{kn.displayName=`Select.GroupLabel`,kn.__docgenInfo={description:"Heading of a `Group`. It names the group and cannot be picked.",displayName:`Select.GroupLabel`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Heading of a section of options`,dataAttribute:`{string} data-slot - Always set to "select-group-label"`}}}catch{}try{An.displayName=`Select.Separator`,An.__docgenInfo={description:"Line between two `Group`s.",displayName:`Select.Separator`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Divider between sections of options`,dataAttribute:`{string} data-slot - Always set to "select-separator"`}}}catch{}})))()}var W;function Mn(){return(Mn=t((()=>{jn(),W={Root:wn,Trigger:Tn,Content:En,Item:Dn,Group:On,GroupLabel:kn,Separator:An}})))()}var Nn,G,K,Pn,q,J,Y,X,Z,Fn,In,Q,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,$,Xn,Zn,Qn,$n,er;function tr(){return(tr=t((()=>{Nn=n(),Ne(),Mn(),ee(),he(),ve(),Oe(),G=i(),{expect:K,fn:Pn,screen:q,userEvent:J,waitFor:Y,within:X}=__STORYBOOK_MODULE_TEST__,Z=[{value:`AZ`,label:`Arizona`},{value:`CA`,label:`California`},{value:`FL`,label:`Florida`},{value:`GA`,label:`Georgia`},{value:`NY`,label:`New York`},{value:`TX`,label:`Texas`}],Fn=[{label:`North`,options:[{value:`AZ`,label:`Arizona`},{value:`MN`,label:`Minnesota`},{value:`FL`,label:`Florida`}]},{label:`West`,options:[{value:`CA`,label:`California`}]},{label:`South`,options:[{value:`TX`,label:`Texas`}]}],In={title:`Components/Select`,component:W.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:"Select is a button that opens a list of options and shows the one picked.\nUse it for a pick from a short, known list, where typing would add nothing.\nFor a long list or one the user searches, use Combobox; for a handful of\noptions that should all stay visible, use RadioGroup. `Root` owns the picked\nvalue; `Trigger` is the closed field and `Content` the list of `Item`s."}}},decorators:[e=>(0,G.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,G.jsx)(e,{})})],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:"Control height of the trigger, matching `Input`. Set on `Select.Trigger`."},placeholder:{control:`text`,description:"Text the trigger shows while nothing is picked. Set on `Select.Trigger`."},disabled:{control:`boolean`,description:"Blocks the whole select. Defaults to the surrounding `Field.Root`."},required:{control:`boolean`,description:"Blocks a native form submission until something is picked. Defaults to the surrounding `Field.Root`."},onValueChange:{action:`valueChange`,description:`Called with the picked value.`}},args:{size:`md`,placeholder:`Select a state`},render:({size:e,placeholder:t,...n})=>(0,G.jsxs)(W.Root,{...n,children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`,size:e,placeholder:t}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})},Q=async e=>(await J.click(e),q.findByRole(`listbox`)),Ln=async()=>{await J.keyboard(`{Escape}`),await Y(()=>K(q.queryByRole(`listbox`)).not.toBeInTheDocument())},Rn={args:{onValueChange:Pn()},play:async({args:e,canvasElement:t})=>{let n=X(t).getByRole(`combobox`,{name:`State`});await K(n).toHaveTextContent(`Select a state`);let r=await Q(n),i=r.querySelector(`[data-slot=select-list]`);await K(r).toHaveAccessibleName(`Options`),await K(i.scrollHeight).toBe(i.clientHeight),await J.click(X(r).getByRole(`option`,{name:`Florida`})),await Y(()=>K(q.queryByRole(`listbox`)).not.toBeInTheDocument()),await K(n).toHaveTextContent(`Florida`),await K(e.onValueChange).toHaveBeenLastCalledWith(`FL`)}},zn={render:()=>(0,G.jsx)(`div`,{className:`w-full`,children:(0,G.jsxs)(j.Root,{invalid:!0,required:!0,children:[(0,G.jsx)(j.Label,{children:`State`}),(0,G.jsxs)(W.Root,{children:[(0,G.jsx)(W.Trigger,{placeholder:`Select a state`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]}),(0,G.jsx)(j.Description,{children:`Where the risk is located.`}),(0,G.jsx)(j.Error,{errors:[{message:`Choose a state`}]})]})}),play:async({canvasElement:e})=>{let t=X(e).getByRole(`combobox`,{name:/State/});await K(t).toHaveAttribute(`aria-invalid`,`true`),await K(t).toHaveAccessibleDescription(/located.*Choose a state|Choose a state.*located/),await K(t).toHaveStyle({borderColor:`rgb(217, 38, 38)`});let n=await Q(t);await K(n).toHaveAccessibleName(/State/),await Ln()}},Bn={args:{onValueChange:Pn()},render:e=>(0,G.jsxs)(W.Root,{...e,children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,disabled:e===`FL`,children:t},e))})]}),play:async({args:e,canvasElement:t})=>{let n=await Q(X(t).getByRole(`combobox`,{name:`State`}));await K(X(n).getByRole(`option`,{name:`Florida`})).toHaveAttribute(`aria-disabled`,`true`),await J.click(X(n).getByRole(`option`,{name:`Florida`})),await K(e.onValueChange).not.toHaveBeenCalled(),X(n).getByRole(`option`,{name:`California`}).focus(),await J.keyboard(`{ArrowDown}`),await K(X(n).getByRole(`option`,{name:`Georgia`})).toHaveFocus(),await Ln()}},Vn={render:()=>{let[e,t]=(0,Nn.useState)(`CA`);return(0,G.jsxs)(`div`,{className:`flex w-full flex-col items-start gap-6`,children:[(0,G.jsxs)(`div`,{className:`flex gap-3`,children:[(0,G.jsx)(C,{variant:`secondary`,size:`sm`,onClick:()=>t(``),children:`Clear`}),(0,G.jsx)(C,{variant:`secondary`,size:`sm`,onClick:()=>t(`NY`),children:`Choose New York`})]}),(0,G.jsx)(`div`,{className:`w-full`,children:(0,G.jsxs)(W.Root,{value:e,onValueChange:t,children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})}),(0,G.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e||`none`]})]})},play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`combobox`,{name:`State`});await J.click(t.getByRole(`button`,{name:`Choose New York`})),await K(n).toHaveTextContent(`New York`),await J.click(t.getByRole(`button`,{name:`Clear`})),await K(n).toHaveTextContent(`Select a state`),await K(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},Hn={render:()=>{let[e,t]=(0,Nn.useState)(null);return(0,G.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,G.jsx)(`div`,{className:`w-full`,children:(0,G.jsxs)(W.Root,{name:`state`,required:!0,children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})}),(0,G.jsx)(C,{type:`submit`,children:`Submit`}),e&&(0,G.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=X(e),n=e.querySelector(`form`);await K(n.checkValidity()).toBe(!1);let r=await Q(t.getByRole(`combobox`,{name:`State`}));await J.click(X(r).getByRole(`option`,{name:`Georgia`})),await K(n.checkValidity()).toBe(!0),await J.click(t.getByRole(`button`,{name:`Submit`})),await K(await t.findByRole(`status`)).toHaveTextContent(`Submitted: GA`)}},Un={render:()=>{let{control:e,handleSubmit:t}=Me({defaultValues:{state:``}}),[n,r]=(0,Nn.useState)(null);return(0,G.jsxs)(`form`,{noValidate:!0,className:`flex w-full flex-col items-start gap-6`,onSubmit:t(e=>r(e.state)),children:[(0,G.jsx)(Pe,{name:`state`,control:e,rules:{required:`Choose a state`},render:({field:e,fieldState:t})=>(0,G.jsxs)(j.Root,{invalid:t.invalid,required:!0,className:`w-full`,children:[(0,G.jsx)(j.Label,{children:`State`}),(0,G.jsxs)(W.Root,{value:e.value,onValueChange:e.onChange,children:[(0,G.jsx)(W.Trigger,{ref:e.ref,onBlur:e.onBlur,placeholder:`Select a state`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]}),(0,G.jsx)(j.Error,{errors:[t.error]})]})}),(0,G.jsx)(C,{type:`submit`,children:`Submit`}),n&&(0,G.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`combobox`,{name:/State/});await J.click(t.getByRole(`button`,{name:`Submit`})),await Y(()=>K(n).toHaveFocus()),await Y(()=>K(n).toHaveAccessibleDescription(`Choose a state`));let r=await Q(n);await J.click(X(r).getByRole(`option`,{name:`Arizona`})),await J.click(t.getByRole(`button`,{name:`Submit`})),await K(await t.findByRole(`status`)).toHaveTextContent(`Submitted: AZ`)}},Wn={render:()=>(0,G.jsx)(`div`,{className:`w-60`,children:(0,G.jsxs)(W.Root,{defaultValue:`ho3`,children:[(0,G.jsx)(W.Trigger,{"aria-label":`Policy form`}),(0,G.jsx)(W.Content,{children:[{value:`ho3`,label:`Homeowners HO-3, special form, including dwelling and contents`},{value:`ho6`,label:`Condo unit owners HO-6`}].map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})}),play:async({canvasElement:e})=>{let t=X(e).getByRole(`combobox`,{name:`Policy form`}),n=t.querySelector(`[data-slot=select-value]`);await K(t.getBoundingClientRect().height).toBe(40),await Y(()=>K(n.scrollWidth).toBeGreaterThan(n.clientWidth))}},Gn=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`).map(e=>({value:e,label:e})),Kn={args:{defaultValue:`Ohio`},parameters:{docs:{story:{height:`400px`}}},render:e=>(0,G.jsxs)(W.Root,{...e,children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,G.jsx)(W.Content,{children:Gn.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e).getByRole(`combobox`,{name:`State`}),n=await Q(t),r=X(n).getByRole(`option`,{name:`Ohio`}),i=n.querySelector(`[data-slot=select-list]`),a=t.getBoundingClientRect(),o=n.getBoundingClientRect();await K(Math.round(o.width)).toBe(Math.round(a.width)),await K(Math.round(o.left)).toBe(Math.round(a.left)),await K(Math.round(o.top-a.bottom)).toBe(8),await K(i.scrollHeight).toBeGreaterThan(i.clientHeight),await K(r).toHaveAttribute(`aria-selected`,`true`),await Y(()=>{K(n.querySelector(`[data-slot=select-scroll-up]`)).not.toBeNull(),K(n.querySelector(`[data-slot=select-scroll-down]`)).not.toBeNull()}),await Y(()=>{let e=r.getBoundingClientRect(),t=i.getBoundingClientRect();K(e.top).toBeGreaterThanOrEqual(t.top),K(e.bottom).toBeLessThanOrEqual(t.bottom)}),await Ln()}},qn={parameters:{docs:{story:{height:`360px`}}},render:()=>(0,G.jsxs)(`div`,{className:`grid w-full grid-cols-2 gap-6`,children:[(0,G.jsxs)(W.Root,{defaultValue:`FL`,children:[(0,G.jsx)(W.Trigger,{"aria-label":`Region`}),(0,G.jsx)(W.Content,{children:Fn.map((e,t)=>(0,G.jsxs)(Nn.Fragment,{children:[t>0&&(0,G.jsx)(W.Separator,{}),(0,G.jsxs)(W.Group,{children:[(0,G.jsx)(W.GroupLabel,{children:e.label}),e.options.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))]})]},e.label))})]}),(0,G.jsxs)(W.Root,{defaultValue:`CA`,children:[(0,G.jsx)(W.Trigger,{"aria-label":`Recent state`}),(0,G.jsx)(W.Content,{children:(0,G.jsxs)(W.Group,{children:[(0,G.jsx)(W.GroupLabel,{children:`Recently used`}),Z.slice(0,3).map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))]})})]})]}),play:async({canvasElement:e})=>{let t=await Q(X(e).getByRole(`combobox`,{name:`Region`}));await K(X(t).getAllByRole(`group`)).toHaveLength(3),await K(X(X(t).getByRole(`group`,{name:`North`})).getByRole(`option`,{name:`Florida`})).toHaveAttribute(`aria-selected`,`true`),await Ln()}},Jn={render:()=>(0,G.jsxs)(W.Root,{defaultValue:`CA`,children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,trailing:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=X(e).getByRole(`combobox`,{name:`State`}),n=await Q(t);await K(X(n).getByRole(`option`,{name:/Texas/})).toHaveTextContent(`TX`),await J.click(X(n).getByRole(`option`,{name:/Texas/})),await Y(()=>K(t).toHaveTextContent(/^Texas$/))}},Yn={parameters:{docs:{story:{height:`360px`}}},render:()=>(0,G.jsx)(`div`,{className:`pt-24`,children:(0,G.jsxs)(W.Root,{defaultValue:`FL`,children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`}),(0,G.jsx)(W.Content,{position:`item-aligned`,children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})}),play:async({canvasElement:e})=>{let t=X(e).getByRole(`combobox`,{name:`State`}),n=await Q(t),r=t.getBoundingClientRect();await Y(()=>{let e=X(n).getByRole(`option`,{name:`Florida`}).getBoundingClientRect();K(e.top).toBeLessThan(r.bottom),K(e.bottom).toBeGreaterThan(r.top)}),await Ln()}},$={render:()=>(0,G.jsxs)(`div`,{className:`grid w-full grid-cols-2 gap-6`,children:[[[`Placeholder`,{}],[`Filled`,{defaultValue:`TX`}],[`Disabled`,{defaultValue:`TX`,disabled:!0}]].map(([e,t])=>(0,G.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,G.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,G.jsxs)(W.Root,{...t,children:[(0,G.jsx)(W.Trigger,{"aria-label":e,placeholder:`Select a state`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})]},e)),(0,G.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,G.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:`Invalid`}),(0,G.jsxs)(W.Root,{children:[(0,G.jsx)(W.Trigger,{"aria-label":`Invalid`,"aria-invalid":!0,placeholder:`Select a state`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})]})]})},Xn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:`CA`,onValueChange:Pn()},play:async({args:e,canvasElement:t})=>{let n=X(t).getByRole(`combobox`,{name:`State`}),r=`rgb(45, 48, 57)`;await J.tab(),await K(n).toHaveFocus(),await Y(()=>K(n).toHaveStyle({borderColor:r})),await J.keyboard(`{ArrowDown}`);let i=await q.findByRole(`listbox`);await Y(()=>K(X(i).getByRole(`option`,{name:`California`})).toHaveFocus()),await K(n).toHaveStyle({borderColor:r}),await J.keyboard(`{ArrowDown}{Enter}`),await Y(()=>K(q.queryByRole(`listbox`)).not.toBeInTheDocument()),await K(n).toHaveTextContent(`Florida`),await K(e.onValueChange).toHaveBeenLastCalledWith(`FL`),await K(n).toHaveFocus(),await J.keyboard(`{Enter}`),await q.findByRole(`listbox`),await J.keyboard(`{Escape}`),await Y(()=>K(q.queryByRole(`listbox`)).not.toBeInTheDocument()),await K(n).toHaveTextContent(`Florida`),await K(n).toHaveFocus()}},Zn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,Nn.useState)(null);return(0,G.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,G.jsx)(`div`,{className:`w-full`,children:(0,G.jsxs)(W.Root,{name:`state`,defaultValue:`CA`,children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})}),(0,G.jsxs)(`div`,{className:`flex gap-3`,children:[(0,G.jsx)(C,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,G.jsx)(C,{type:`submit`,children:`Submit`})]}),e&&(0,G.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=X(e),n=t.getByRole(`combobox`,{name:`State`}),r=await Q(n);await J.click(X(r).getByRole(`option`,{name:`Georgia`})),await K(n).toHaveTextContent(`Georgia`),await J.click(t.getByRole(`button`,{name:`Reset`})),await Y(()=>K(n).toHaveTextContent(`California`)),await J.click(t.getByRole(`button`,{name:`Submit`})),await K(await t.findByRole(`status`)).toHaveTextContent(`Submitted: CA`)}},Qn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,G.jsxs)(ye.Root,{children:[(0,G.jsx)(ye.Trigger,{asChild:!0,children:(0,G.jsx)(C,{variant:`secondary`,children:`Edit address`})}),(0,G.jsxs)(ye.Content,{children:[(0,G.jsx)(ye.Title,{children:`Edit address`}),(0,G.jsx)(ye.Body,{children:(0,G.jsxs)(W.Root,{children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})})]})]}),play:async({canvasElement:e})=>{let t=X(document.body);await J.click(X(e).getByRole(`button`,{name:`Edit address`}));let n=await t.findByRole(`dialog`,{name:`Edit address`}),r=X(n).getByRole(`combobox`,{name:`State`}),i=await Q(r);await Y(()=>K(i).toContainElement(document.activeElement)),await J.keyboard(`{Escape}`),await Y(()=>K(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await K(n).toHaveAttribute(`data-state`,`open`),await J.click(X(await Q(r)).getByRole(`option`,{name:`California`})),await Y(()=>K(t.queryByRole(`listbox`)).not.toBeInTheDocument()),r.focus(),await J.keyboard(`{ArrowDown}`);let a=await t.findByRole(`listbox`);await Y(()=>K(X(a).getByRole(`option`,{name:`California`})).toHaveFocus()),await J.keyboard(`{ArrowDown}`),await K(X(a).getByRole(`option`,{name:`Florida`})).toHaveFocus(),await J.keyboard(`{Escape}`),await Y(()=>K(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await K(n).toHaveAttribute(`data-state`,`open`),await J.keyboard(`{Escape}`),await Y(()=>K(n).toHaveAttribute(`data-state`,`closed`))}},$n={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,G.jsxs)(ke.Root,{children:[(0,G.jsx)(ke.Trigger,{asChild:!0,children:(0,G.jsx)(C,{variant:`secondary`,children:`Filter`})}),(0,G.jsx)(ke.Content,{className:`w-72`,children:(0,G.jsxs)(W.Root,{children:[(0,G.jsx)(W.Trigger,{"aria-label":`State`,placeholder:`Any state`}),(0,G.jsx)(W.Content,{children:Z.map(({value:e,label:t})=>(0,G.jsx)(W.Item,{value:e,children:t},e))})]})})]}),play:async({canvasElement:e})=>{let t=X(document.body),n=X(e).getByRole(`button`,{name:`Filter`});await J.click(n);let r=await t.findByRole(`combobox`,{name:`State`}),i=await Q(r);await Y(()=>K(i).toContainElement(document.activeElement)),await J.keyboard(`{Escape}`),await Y(()=>K(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await K(r.closest(`[data-slot=popover-content]`)).toHaveAttribute(`data-state`,`open`),await J.keyboard(`{Escape}`),await Y(()=>K(t.queryByRole(`combobox`,{name:`State`})).not.toBeInTheDocument())}},Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`{
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
    const viewport = list.querySelector<HTMLElement>('[data-slot=select-list]')!;
    await expect(list).toHaveAccessibleName('Options');
    await expect(viewport.scrollHeight).toBe(viewport.clientHeight);
    await userEvent.click(within(list).getByRole('option', {
      name: 'Florida'
    }));
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('FL');
  }
}`,...Rn.parameters?.docs?.source},description:{story:`@summary Pick an option from the list`,...Rn.parameters?.docs?.description}}},zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full">
            <Field.Root invalid required>
                <Field.Label>State</Field.Label>
                <Select.Root>
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
}`,...zn.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, the label, description, error, `invalid` and\n`required` reach the trigger with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...zn.parameters?.docs?.description}}},Bn.parameters={...Bn.parameters,docs:{...Bn.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => <Select.Root {...args}>
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
    await userEvent.keyboard('{ArrowDown}');
    await expect(within(list).getByRole('option', {
      name: 'Georgia'
    })).toHaveFocus();
    await close();
  }
}`,...Bn.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest selectable. It is announced as
disabled, a press does not pick it, and the arrow keys skip it.

@summary One option disabled`,...Bn.parameters?.docs?.description}}},Vn.parameters={...Vn.parameters,docs:{...Vn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState('CA');
    return <div className="flex w-full flex-col items-start gap-6">
                <div className="flex gap-3">
                    <Button variant="secondary" size="sm" onClick={() => setState('')}>
                        Clear
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => setState('NY')}>
                        Choose New York
                    </Button>
                </div>
                <div className="w-full">
                    <Select.Root value={state} onValueChange={setState}>
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
                <output className="text-sm">Selected: {state || 'none'}</output>
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
}`,...Vn.parameters?.docs?.source},description:{story:`@summary Controlled select whose value is set from outside`,...Vn.parameters?.docs?.description}}},Hn.parameters={...Hn.parameters,docs:{...Hn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex w-full flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('state')));
    }}>
                <div className="w-full">
                    <Select.Root name="state" required>
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
}`,...Hn.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value`, and `required` blocks the\nsubmission until something is picked.\n\n@summary Native form submission",...Hn.parameters?.docs?.description}}},Un.parameters={...Un.parameters,docs:{...Un.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control,
      handleSubmit
    } = useForm<{
      state: string;
    }>({
      defaultValues: {
        state: ''
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
                            <Select.Root value={field.value} onValueChange={field.onChange}>
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
}`,...Un.parameters?.docs?.source},description:{story:"With react-hook-form, wire the select through `Controller` and put\n`field.ref` on the trigger, so a failed submit focuses it.\n\n@summary React Hook Form through Controller",...Un.parameters?.docs?.description}}},Wn.parameters={...Wn.parameters,docs:{...Wn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      value: 'ho3',
      label: 'Homeowners HO-3, special form, including dwelling and contents'
    }, {
      value: 'ho6',
      label: 'Condo unit owners HO-6'
    }];
    return <div className="w-60">
                <Select.Root defaultValue="ho3">
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
    await waitFor(() => expect(value.scrollWidth).toBeGreaterThan(value.clientWidth));
  }
}`,...Wn.parameters?.docs?.source},description:{story:`A long option label is cut with an ellipsis in the trigger and in its row,
and the chevron keeps its place.

@summary Long labels truncate`,...Wn.parameters?.docs?.description}}},Kn.parameters={...Kn.parameters,docs:{...Kn.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Ohio'
  },
  parameters: {
    docs: {
      story: {
        height: '400px'
      }
    }
  },
  render: args => <Select.Root {...args}>
            <Select.Trigger aria-label="State" placeholder="Select a state" />
            <Select.Content>
                {US_STATES.map(({
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
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    const picked = within(list).getByRole('option', {
      name: 'Ohio'
    });
    const viewport = list.querySelector<HTMLElement>('[data-slot=select-list]')!;
    const box = trigger.getBoundingClientRect();
    const panel = list.getBoundingClientRect();
    await expect(Math.round(panel.width)).toBe(Math.round(box.width));
    await expect(Math.round(panel.left)).toBe(Math.round(box.left));
    await expect(Math.round(panel.top - box.bottom)).toBe(8);
    await expect(viewport.scrollHeight).toBeGreaterThan(viewport.clientHeight);
    await expect(picked).toHaveAttribute('aria-selected', 'true');
    await waitFor(() => {
      expect(list.querySelector('[data-slot=select-scroll-up]')).not.toBeNull();
      expect(list.querySelector('[data-slot=select-scroll-down]')).not.toBeNull();
    });
    await waitFor(() => {
      const row = picked.getBoundingClientRect();
      const view = viewport.getBoundingClientRect();
      expect(row.top).toBeGreaterThanOrEqual(view.top);
      expect(row.bottom).toBeLessThanOrEqual(view.bottom);
    });
    await close();
  }
}`,...Kn.parameters?.docs?.source},description:{story:`With more options than fit, the list stops at six rows and scrolls, with an
arrow at each end while there is more to see, and it opens with the picked
option in view. It matches the trigger's width and opens 8px below it. Past
a few dozen options, or when
people know what they are looking for, a Combobox lets them type instead.

@summary Long list that scrolls`,...Kn.parameters?.docs?.description}}},qn.parameters={...qn.parameters,docs:{...qn.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        height: '360px'
      }
    }
  },
  render: () => <div className="grid w-full grid-cols-2 gap-6">
            <Select.Root defaultValue="FL">
                <Select.Trigger aria-label="Region" />
                <Select.Content>
                    {REGIONS.map((region, index) => <Fragment key={region.label}>
                            {index > 0 && <Select.Separator />}
                            <Select.Group>
                                <Select.GroupLabel>{region.label}</Select.GroupLabel>
                                {region.options.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                        {label}
                                    </Select.Item>)}
                            </Select.Group>
                        </Fragment>)}
                </Select.Content>
            </Select.Root>
            <Select.Root defaultValue="CA">
                <Select.Trigger aria-label="Recent state" />
                <Select.Content>
                    <Select.Group>
                        <Select.GroupLabel>Recently used</Select.GroupLabel>
                        {STATES.slice(0, 3).map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const list = await open(within(canvasElement).getByRole('combobox', {
      name: 'Region'
    }));
    await expect(within(list).getAllByRole('group')).toHaveLength(3);
    await expect(within(within(list).getByRole('group', {
      name: 'North'
    })).getByRole('option', {
      name: 'Florida'
    })).toHaveAttribute('aria-selected', 'true');
    await close();
  }
}`,...qn.parameters?.docs?.source},description:{story:"Options grouped into sections: each `Group` has a `GroupLabel` as heading,\nwith a `Separator` between groups. A single group can carry a heading too.\n\n@summary Options in sections",...qn.parameters?.docs?.description}}},Jn.parameters={...Jn.parameters,docs:{...Jn.parameters?.docs,source:{originalSource:`{
  render: () => <Select.Root defaultValue="CA">
            <Select.Trigger aria-label="State" />
            <Select.Content>
                {STATES.map(({
        value,
        label
      }) => <Select.Item key={value} value={value} trailing={value}>
                        {label}
                    </Select.Item>)}
            </Select.Content>
        </Select.Root>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    await expect(within(list).getByRole('option', {
      name: /Texas/
    })).toHaveTextContent('TX');
    await userEvent.click(within(list).getByRole('option', {
      name: /Texas/
    }));
    await waitFor(() => expect(trigger).toHaveTextContent(/^Texas$/));
  }
}`,...Jn.parameters?.docs?.source},description:{story:`\`trailing\` puts short text at the end of a row, such as a code. It stays in
the list: the trigger shows only the label.

@summary Text at the end of a row`,...Jn.parameters?.docs?.description}}},Yn.parameters={...Yn.parameters,docs:{...Yn.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        height: '360px'
      }
    }
  },
  render: () => <div className="pt-24">
            <Select.Root defaultValue="FL">
                <Select.Trigger aria-label="State" />
                <Select.Content position="item-aligned">
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
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    const box = trigger.getBoundingClientRect();
    await waitFor(() => {
      const row = within(list).getByRole('option', {
        name: 'Florida'
      }).getBoundingClientRect();
      expect(row.top).toBeLessThan(box.bottom);
      expect(row.bottom).toBeGreaterThan(box.top);
    });
    await close();
  }
}`,...Yn.parameters?.docs?.source},description:{story:'`position="item-aligned"` on `Content` opens the list over the trigger, with\nthe picked option on top of it, instead of below.\n\n@summary List opening on the picked option',...Yn.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full grid-cols-2 gap-6">
            {([['Placeholder', {}], ['Filled', {
      defaultValue: 'TX'
    }], ['Disabled', {
      defaultValue: 'TX',
      disabled: true
    }]] as const).map(([title, props]) => <div key={title} className="flex flex-col gap-2">
                    <span className="text-xs text-text-input-placeholder">{title}</span>
                    <Select.Root {...props}>
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
                <Select.Root>
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
}`,...$.parameters?.docs?.source},description:{story:`Every state of the trigger side by side, for checking against the design.

@summary Visual comparison of the trigger states`,...$.parameters?.docs?.description}}},Xn.parameters={...Xn.parameters,docs:{...Xn.parameters?.docs,source:{originalSource:`{
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
    await expect(args.onValueChange).toHaveBeenLastCalledWith('FL');
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await screen.findByRole('listbox');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await expect(trigger).toHaveFocus();
  }
}`,...Xn.parameters?.docs?.source},description:{story:`Enter, Space or the arrow keys open the list; the arrows move, Enter picks
and Escape closes it, handing focus back to the trigger. The trigger keeps
its focus ring while the options hold the focus.

@summary Keyboard selection`,...Xn.parameters?.docs?.description}}},Zn.parameters={...Zn.parameters,docs:{...Zn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex w-full flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('state')));
    }}>
                <div className="w-full">
                    <Select.Root name="state" defaultValue="CA">
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
    await waitFor(() => expect(trigger).toHaveTextContent('California'));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: CA');
  }
}`,...Zn.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled select back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...Zn.parameters?.docs?.description}}},Qn.parameters={...Qn.parameters,docs:{...Qn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Edit address</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Edit address</Modal.Title>
                <Modal.Body>
                    <Select.Root>
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
    await waitFor(() => expect(list).toContainElement(document.activeElement as HTMLElement));
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
}`,...Qn.parameters?.docs?.source},description:{story:`Inside a \`Modal\`, the list sits on top of the dialog in Radix's layer stack,
so focus moves to it. Escape closes the list first and the modal on the next
press.

@summary Focus and Escape inside a Modal`,...Qn.parameters?.docs?.description}}},$n.parameters={...$n.parameters,docs:{...$n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Filter</Button>
            </Popover.Trigger>
            <Popover.Content className="w-72">
                <Select.Root>
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
    await waitFor(() => expect(list).toContainElement(document.activeElement as HTMLElement));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger.closest('[data-slot=popover-content]')).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('combobox', {
      name: 'State'
    })).not.toBeInTheDocument());
  }
}`,...$n.parameters?.docs?.source},description:{story:`Inside a \`Popover\`, Escape on the open list closes the list only; the next
one closes the popover.

@summary Escape inside a Popover`,...$n.parameters?.docs?.description}}},er=[`Default`,`InsideField`,`DisabledItem`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`ManyItems`,`Sections`,`TrailingText`,`OpensOnPickedOption`,`AllStates`,`Keyboard`,`FormReset`,`InsideModal`,`InsidePopover`]})))()}tr();export{$ as AllStates,Vn as Controlled,Rn as Default,Bn as DisabledItem,Zn as FormReset,Hn as InForm,zn as InsideField,Qn as InsideModal,$n as InsidePopover,Xn as Keyboard,Wn as LongLabel,Kn as ManyItems,Yn as OpensOnPickedOption,qn as Sections,Jn as TrailingText,Un as WithReactHookForm,er as __namedExportsOrder,In as default};