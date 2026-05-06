import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BzBhDrBh.js";import{t as r}from"./react-dom-DRolAaUc.js";import{t as i}from"./jsx-runtime-D16BNjX-.js";import{t as a}from"./shim-YKjAsH_d.js";import{i as o,n as s,r as c,t as ee}from"./lib-XMjO6GLr.js";import{i as te,r as ne}from"./dist-BjstgkW2.js";import{i as re,n as l,r as ie,t as ae}from"./dist-CDw4ohWL.js";function oe(e,t=[]){let n=[];function r(t,r){let i=u.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=u.useMemo(()=>o,Object.values(o));return(0,ce.jsx)(s.Provider,{value:c,children:r})};o.displayName=t+`Provider`;function s(n,o){let s=o?.[e]?.[a]||i,c=u.useContext(s);if(c)return c;if(r!==void 0)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}return[o,s]}let i=()=>{let t=n.map(e=>u.createContext(e));return function(n){let r=n?.[e]||t;return u.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return i.scopeName=e,[r,se(i,...t)]}function se(...e){let t=e[0];if(e.length===1)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}var u,ce,le=t((()=>{u=e(n(),1),ce=i()})),ue,de,d,fe=t((()=>{ue=e(n(),1),r(),te(),de=i(),d=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=ne(`Primitive.${t}`),r=ue.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,de.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})}));function pe(){return(0,f.useSyncExternalStore)(me,()=>!0,()=>!1)}function me(){return()=>{}}var f,he=t((()=>{f=a()}));function p(e,t){return e?t?(e.src!==t&&(e.src=t),e.complete&&e.naturalWidth>0?`loaded`:`loading`):`error`:`idle`}function ge(e,{referrerPolicy:t,crossOrigin:n}){let r=pe(),i=m.useRef(null),a=r?(i.current||=new window.Image,i.current):null,[o,s]=m.useState(()=>p(a,e));return l(()=>{s(p(a,e))},[a,e]),l(()=>{let e=e=>()=>{s(e)};if(!a)return;let r=e(`loaded`),i=e(`error`);return a.addEventListener(`load`,r),a.addEventListener(`error`,i),t&&(a.referrerPolicy=t),typeof n==`string`&&(a.crossOrigin=n),()=>{a.removeEventListener(`load`,r),a.removeEventListener(`error`,i)}},[a,n,t]),o}var m,h,g,_e,ve,ye,_,v,y,b,x,S,be,xe,Se,Ce=t((()=>{m=e(n(),1),le(),ie(),ae(),fe(),he(),h=i(),g=`Avatar`,[_e,ve]=oe(g),[ye,_]=_e(g),v=m.forwardRef((e,t)=>{let{__scopeAvatar:n,...r}=e,[i,a]=m.useState(`idle`);return(0,h.jsx)(ye,{scope:n,imageLoadingStatus:i,onImageLoadingStatusChange:a,children:(0,h.jsx)(d.span,{...r,ref:t})})}),v.displayName=g,y=`AvatarImage`,b=m.forwardRef((e,t)=>{let{__scopeAvatar:n,src:r,onLoadingStatusChange:i=()=>{},...a}=e,o=_(y,n),s=ge(r,a),c=re(e=>{i(e),o.onImageLoadingStatusChange(e)});return l(()=>{s!==`idle`&&c(s)},[s,c]),s===`loaded`?(0,h.jsx)(d.img,{...a,ref:t,src:r}):null}),b.displayName=y,x=`AvatarFallback`,S=m.forwardRef((e,t)=>{let{__scopeAvatar:n,delayMs:r,...i}=e,a=_(x,n),[o,s]=m.useState(r===void 0);return m.useEffect(()=>{if(r!==void 0){let e=window.setTimeout(()=>s(!0),r);return()=>window.clearTimeout(e)}},[r]),o&&a.imageLoadingStatus!==`loaded`?(0,h.jsx)(d.span,{...i,ref:t}):null}),S.displayName=x,be=v,xe=b,Se=S})),C,w,T,E,D,O,k,A,j,M,N,P,we=t((()=>{C=e(n(),1),Ce(),c(),ee(),w=i(),T=o({slots:{root:[`flex items-center justify-center align-middle`,`overflow-hidden select-none box-border`,`shrink-0 relative font-inherit`,`m-0 outline-none p-0 font-semibold`,`text-text-default-base-primary bg-bg-default-base-primary`,`border-solid border-[length:var(--avatar-border-width,1px)]`,`border-[var(--avatar-border-color,var(--color-border-default-base-primary))]`,`h-fit w-fit`],image:[`flex object-cover box-border h-full vertical-align-middle w-full`],fallback:[`uppercase`,`[&_svg]:size-[1.5em] [&_svg]:fill-neutral-500`]},variants:{size:{xs:{root:`size-6`,fallback:`text-xs leading-[1.125rem] [&_svg]:size-[0.9375rem]`},sm:{root:`size-8`,fallback:`text-sm`},md:{root:`size-10`,fallback:`text-base`},lg:{root:`size-12`,fallback:`text-lg`},xl:{root:`size-16`,fallback:`text-[1.375rem]`},"2xl":{root:`size-20`,fallback:`text-[1.625rem]`},"3xl":{root:`size-24`,fallback:`text-[2rem]`},"4xl":{root:`size-32`,fallback:`text-[3rem]`}},variant:{circle:{root:`rounded-full`},square:{root:`rounded-md`},pillow:{root:[`rounded-[38.5%]`,`[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWicvPjwvc3ZnPg==)]`,`[mask-size:contain]`]},pentagon:{root:[`!border-none`,`[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjU2NTcgMC4yNTA5NzdDMTUuODM0OCAtMC4wODM2NTk0IDE3LjE2NTggLTAuMDgzNjU4NCAxOC40MzQ4IDAuMjUwOTc3QzE5Ljg5NDIgMC42MzU4OCAyMS4yMTMzIDEuNjMwODkgMjMuNjM0IDMuNDM3NUwyNy4yNDQ0IDYuMTMxODRDMjkuNjY3IDcuOTM5OCAzMC45OTMyIDguOTE5NzcgMzEuNzk4MSAxMC4yMjI3QzMyLjQ5NzcgMTEuMzU1IDMyLjkwNzYgMTIuNjQ5OCAzMi45ODk1IDEzLjk4NjNDMzMuMDgzNSAxNS41MjI3IDMyLjU3MjQgMTcuMTExOSAzMS42NDY3IDIwLjAzODFMMzAuMjY3OCAyNC4zOTc1QzI5LjM0MjUgMjcuMzIyNyAyOC44NDU4IDI4LjkxODIgMjcuODg4OSAzMC4xMDY0QzI3LjA1NjEgMzEuMTQwNiAyNS45ODA4IDMxLjk0MzIgMjQuNzYzIDMyLjQzODVDMjMuMzYxNSAzMy4wMDg0IDIxLjcyMzggMzMgMTguNzMxNyAzM0gxNC4yNjg4QzExLjI3NjcgMzMgOS42MzkwNCAzMy4wMDg0IDguMjM3NiAzMi40Mzg1QzcuMDE5NzUgMzEuOTQzMiA1Ljk0NDQ4IDMxLjE0MDYgNS4xMTE2MiAzMC4xMDY0QzQuMTU0NzIgMjguOTE4MiAzLjY1ODAyIDI3LjMyMjcgMi43MzI3MiAyNC4zOTc1TDEuMzUzODEgMjAuMDM4MUMwLjQyODE4NyAxNy4xMTE5IC0wLjA4Mjk0NiAxNS41MjI3IDAuMDExMDM5IDEzLjk4NjNDMC4wOTI5MDMgMTIuNjQ5OCAwLjUwMjg4MSAxMS4zNTUgMS4yMDI0NCAxMC4yMjI3QzIuMDA3NCA4LjkxOTc3IDMuMzMzNTggNy45Mzk4IDUuNzU2MTYgNi4xMzE4NEw5LjM2NjUxIDMuNDM3NUMxMS43ODcyIDEuNjMwODkgMTMuMTA2MyAwLjYzNTg4IDE0LjU2NTcgMC4yNTA5NzdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)]`,`[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]`,`after:content-[""] after:absolute after:inset-0 after:pointer-events-none after:z-[1]`,`after:bg-[var(--avatar-border-color,var(--color-border-default-base-primary))]`,`after:[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMC41IC0wLjUgMzQgMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjU2NTcgMC4yNTA5NzdDMTUuODM0OCAtMC4wODM2NTk0IDE3LjE2NTggLTAuMDgzNjU4NCAxOC40MzQ4IDAuMjUwOTc3QzE5Ljg5NDIgMC42MzU4OCAyMS4yMTMzIDEuNjMwODkgMjMuNjM0IDMuNDM3NUwyNy4yNDQ0IDYuMTMxODRDMjkuNjY3IDcuOTM5OCAzMC45OTMyIDguOTE5NzcgMzEuNzk4MSAxMC4yMjI3QzMyLjQ5NzcgMTEuMzU1IDMyLjkwNzYgMTIuNjQ5OCAzMi45ODk1IDEzLjk4NjNDMzMuMDgzNSAxNS41MjI3IDMyLjU3MjQgMTcuMTExOSAzMS42NDY3IDIwLjAzODFMMzAuMjY3OCAyNC4zOTc1QzI5LjM0MjUgMjcuMzIyNyAyOC44NDU4IDI4LjkxODIgMjcuODg4OSAzMC4xMDY0QzI3LjA1NjEgMzEuMTQwNiAyNS45ODA4IDMxLjk0MzIgMjQuNzYzIDMyLjQzODVDMjMuMzYxNSAzMy4wMDg0IDIxLjcyMzggMzMgMTguNzMxNyAzM0gxNC4yNjg4QzExLjI3NjcgMzMgOS42MzkwNCAzMy4wMDg0IDguMjM3NiAzMi40Mzg1QzcuMDE5NzUgMzEuOTQzMiA1Ljk0NDQ4IDMxLjE0MDYgNS4xMTE2MiAzMC4xMDY0QzQuMTU0NzIgMjguOTE4MiAzLjY1ODAyIDI3LjMyMjcgMi43MzI3MiAyNC4zOTc1TDEuMzUzODEgMjAuMDM4MUMwLjQyODE4NyAxNy4xMTE5IC0wLjA4Mjk0NiAxNS41MjI3IDAuMDExMDM5IDEzLjk4NjNDMC4wOTI5MDMgMTIuNjQ5OCAwLjUwMjg4MSAxMS4zNTUgMS4yMDI0NCAxMC4yMjI3QzIuMDA3NCA4LjkxOTc3IDMuMzMzNTggNy45Mzk4IDUuNzU2MTYgNi4xMzE4NEw5LjM2NjUxIDMuNDM3NUMxMS43ODcyIDEuNjMwODkgMTMuMTA2MyAwLjYzNTg4IDE0LjU2NTcgMC4yNTA5NzdaIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiIHZlY3Rvci1lZmZlY3Q9Im5vbi1zY2FsaW5nLXN0cm9rZSIvPjwvc3ZnPg==)]`,`after:[mask-size:100%_100%] after:[mask-repeat:no-repeat] after:[mask-position:center]`]}}},defaultVariants:{size:`md`,variant:`circle`}}),E=(0,C.createContext)(null),D=()=>{let e=(0,C.use)(E);if(!e)throw Error(`useAvatar must be used within an AvatarProvider`);return e},O=({size:e,variant:t,...n})=>{let r=T({size:e,variant:t});return(0,w.jsx)(E,{value:{size:e,variant:t,slotsStyles:r},children:(0,w.jsx)(be,{...n,className:s(r.root(),n.className)})})},k=e=>{let{slotsStyles:t}=D();return(0,w.jsx)(xe,{...e,className:s(t.image(),e.className)})},A=e=>{let{slotsStyles:t}=D();return(0,w.jsx)(Se,{...e,className:s(t.fallback(),e.className)})},j=({alt:e,src:t,fallback:n,colorize:r,size:i,variant:a,ref:o,...s})=>{let c=r?P(r):void 0;return(0,w.jsxs)(O,{...s,ref:o,size:i,variant:a,style:{...c,...s.style},children:[(0,w.jsx)(k,{alt:e,src:t}),(0,w.jsx)(A,{children:n})]})},M=[{dark:`#434343`,light:`#e3e3e3`},{dark:`#1e7b5f`,light:`#d6f5ec`},{dark:`#054594`,light:`#cee3fd`},{dark:`#4f0792`,light:`#e6cefd`},{dark:`#8d0c40`,light:`#fbd0e1`},{dark:`#954004`,light:`#fee1cd`},{dark:`#821717`,light:`#f7d4d4`},{dark:`#947005`,light:`#fdf1ce`},{dark:`#0f8a2a`,light:`#d1fada`}],N=e=>{let t=e.split(``).reduce((e,t,n)=>{let r=1;for(let e=0;e<n;e++)r*=26;return e+(t.charCodeAt(0)-97+1)*r},0);return M[(t<0?-t:t)%M.length]},P=e=>{let{dark:t,light:n}=N(e);return{color:t,backgroundColor:n,borderColor:`var(--avatar-border-color, ${n})`}};try{T.displayName=`avatarRecipe`,T.__docgenInfo={description:"Style recipe for Avatar using tailwind-variants.\nDefines slots (`root`, `image`, `fallback`) and variants (`size`, `variant`).\nCustomize avatar appearance by composing these slots and variants.",displayName:`avatarRecipe`,props:{variant:{defaultValue:null,description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"circle"`},{value:`"square"`},{value:`"pillow"`},{value:`"pentagon"`}]}},size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"xs"`},{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xl"`},{value:`"2xl"`},{value:`"3xl"`},{value:`"4xl"`}]}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{D.displayName=`useAvatar`,D.__docgenInfo={description:"Returns the current Avatar context including variant props and computed slot styles.\nMust be called within an `AvatarRoot` (or `Avatar`) component tree.",displayName:`useAvatar`,props:{}}}catch{}try{j.displayName=`Avatar`,j.__docgenInfo={description:"Avatar displays a user's profile image, initials, or a fallback icon.\nUse Avatar for user identification in lists, headers, cards, and comment threads.\n\nDo **not** use Avatar for decorative images or thumbnails unrelated to a person\nor entity — use a standard `<img>` or a Thumbnail component instead.\n\nRenders an image when `src` is provided; otherwise displays `fallback` content\n(typically initials or an icon). Built on Radix UI Avatar primitives.\n\nAvailable shapes: `circle` (default), `square`, `pillow`, and `pentagon`.\nSizes range from `xs` (24px) to `4xl` (128px), defaulting to `md` (40px).",displayName:`Avatar`,props:{asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,type:{name:`boolean`}},alt:{defaultValue:null,description:"Accessible alt text describing the avatar image. Required when `src` is provided.",name:`alt`,required:!1,type:{name:`string`}},src:{defaultValue:null,description:"Image URL to display. When unavailable or loading fails, `fallback` content is shown instead.",name:`src`,required:!1,type:{name:`string`}},fallback:{defaultValue:null,description:'Content rendered when `src` is missing or fails to load. Typically user initials (e.g., "JD") or an icon.',name:`fallback`,required:!1,type:{name:`ReactNode`}},colorize:{defaultValue:null,description:`When provided, deterministically maps the string (typically a user name) to a
color from the palette, applying a light background, matching text color, and
border color. Useful for distinguishing users in lists without profile photos.`,name:`colorize`,required:!1,type:{name:`string`}},size:{defaultValue:null,description:"Controls the avatar dimensions. Defaults to `'md'` (40px).\n- `xs` (24px) — inline indicators, dense lists\n- `sm` (32px) — compact layouts, table rows\n- `md` (40px) — standard usage, cards, headers\n- `lg` (48px) — profile sections, detail views\n- `xl` (64px) — hero sections, prominent display\n- `2xl` (80px), `3xl` (96px), `4xl` (128px) — large feature areas, profile pages",name:`size`,required:!1,type:{name:`enum`,value:[{value:`"xs"`},{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xl"`},{value:`"2xl"`},{value:`"3xl"`},{value:`"4xl"`}]}},variant:{defaultValue:null,description:"Shape of the avatar container. Defaults to `'circle'`.\n- `circle` — standard round avatar for user photos\n- `square` — rounded rectangle, suitable for workspace or team icons\n- `pillow` — soft, organic squircle shape\n- `pentagon` — distinctive five-sided shape for unique visual identity",name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"circle"`},{value:`"square"`},{value:`"pillow"`},{value:`"pentagon"`}]}}}}}catch{}})),F,Te,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{we(),F=i(),Te={title:`Components/Avatar`,component:j,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`]},variant:{control:`radio`,options:[`circle`,`square`,`pillow`,`pentagon`]}},args:{fallback:`JD`,size:`md`,variant:`circle`},parameters:{docs:{description:{component:"Avatar displays a user's profile image, initials, or a fallback icon.\nUse for user identification in lists, headers, cards, and comment threads.\nSupports multiple shapes (`circle`, `square`, `pillow`, `pentagon`) and\nsizes from `xs` (24px) to `4xl` (128px)."}}}},I={},L={args:{src:`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,alt:`Alex Morgan`}},R={args:{src:`https://broken-url.example/photo.jpg`,fallback:`AM`}},z={args:{variant:`circle`,fallback:`CR`}},B={args:{variant:`square`,fallback:`WS`}},V={args:{variant:`pillow`,fallback:`PL`}},H={args:{variant:`pentagon`,fallback:`PT`}},U={args:{size:`xs`,fallback:`XS`}},W={args:{size:`sm`,fallback:`SM`}},G={args:{size:`lg`,fallback:`LG`}},K={args:{size:`xl`,fallback:`XL`}},q={args:{colorize:`jane doe`,fallback:`JD`}},J={render:()=>(0,F.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`alice`,`bob`,`carol`,`dave`,`eve`,`frank`,`grace`,`henry`,`iris`].map(e=>(0,F.jsx)(j,{size:`lg`,colorize:e,fallback:e.slice(0,2).toUpperCase()},e))})},Y={render:()=>(0,F.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`].map(e=>(0,F.jsx)(j,{size:e,fallback:e.toUpperCase()},e))})},X={render:()=>(0,F.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`].map(e=>(0,F.jsx)(j,{size:e,src:`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,alt:`Alex Morgan`,fallback:`AM`},e))})},Z={render:()=>(0,F.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`circle`,`square`,`pillow`,`pentagon`].map(e=>(0,F.jsx)(j,{size:`lg`,variant:e,fallback:e.slice(0,2).toUpperCase()},e))})},Q={render:()=>(0,F.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`circle`,`square`,`pillow`,`pentagon`].map(e=>(0,F.jsx)(j,{size:`lg`,variant:e,src:`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,alt:`Alex Morgan`,fallback:`AM`},e))})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source},description:{story:`The default avatar with fallback initials. Renders as a medium circle
when no image source is provided.

@summary Default avatar with fallback initials`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    alt: 'Alex Morgan'
  }
}`,...L.parameters?.docs?.source},description:{story:`Avatar displaying a user profile photo. The image fills the avatar shape
and the fallback is hidden while the image loads successfully.

@summary Avatar with a profile image`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://broken-url.example/photo.jpg',
    fallback: 'AM'
  }
}`,...R.parameters?.docs?.source},description:{story:`When the image fails to load, the fallback content is displayed.
Pass initials, an icon, or any ReactNode as the \`fallback\` prop.

@summary Fallback content shown when image is unavailable`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    fallback: 'CR'
  }
}`,...z.parameters?.docs?.source},description:{story:`The circle variant is the default shape, ideal for user profile photos.

@summary Circle-shaped avatar (default)`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'square',
    fallback: 'WS'
  }
}`,...B.parameters?.docs?.source},description:{story:`The square variant uses a rounded rectangle, suitable for workspace,
team, or organization icons.

@summary Square-shaped avatar for workspaces`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pillow',
    fallback: 'PL'
  }
}`,...V.parameters?.docs?.source},description:{story:`The pillow variant uses a soft, organic squircle shape for a
friendly and distinctive appearance.

@summary Pillow-shaped avatar with organic squircle`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pentagon',
    fallback: 'PT'
  }
}`,...H.parameters?.docs?.source},description:{story:`The pentagon variant uses a five-sided mask for a unique visual identity.
Note: the border is hidden in this variant due to the mask shape.

@summary Pentagon-shaped avatar for unique identity`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    fallback: 'XS'
  }
}`,...U.parameters?.docs?.source},description:{story:`Extra-small avatar (24px) for dense lists and inline indicators.

@summary Extra-small 24px avatar`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    fallback: 'SM'
  }
}`,...W.parameters?.docs?.source},description:{story:`Small avatar (32px) for compact layouts and table rows.

@summary Small 32px avatar`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    fallback: 'LG'
  }
}`,...G.parameters?.docs?.source},description:{story:`Large avatar (48px) for profile sections and detail views.

@summary Large 48px avatar`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    fallback: 'XL'
  }
}`,...K.parameters?.docs?.source},description:{story:`Extra-large avatar (64px) for hero sections and prominent display.

@summary Extra-large 64px avatar`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    colorize: 'jane doe',
    fallback: 'JD'
  }
}`,...q.parameters?.docs?.source},description:{story:`The \`colorize\` prop deterministically maps a string (typically a user name)
to a color from the palette, applying a tinted background and matching
text color. Useful for distinguishing users in lists without profile photos.

@summary Colorized avatar based on user name`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {['alice', 'bob', 'carol', 'dave', 'eve', 'frank', 'grace', 'henry', 'iris'].map(name => <Avatar key={name} size="lg" colorize={name} fallback={name.slice(0, 2).toUpperCase()} />)}
        </div>
}`,...J.parameters?.docs?.source},description:{story:`Multiple colorized avatars showing how different names map to different
colors from the palette for visual distinction.

@summary Multiple colorized avatars for visual distinction`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => <Avatar key={size} size={size} fallback={size.toUpperCase()} />)}
        </div>
}`,...Y.parameters?.docs?.source},description:{story:"All available sizes displayed together for visual comparison.\nSizes range from `xs` (24px) to `4xl` (128px).\n\n@summary Visual comparison of all avatar sizes",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => <Avatar key={size} size={size} src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" alt="Alex Morgan" fallback="AM" />)}
        </div>
}`,...X.parameters?.docs?.source},description:{story:"All sizes with a profile image to verify image scaling and quality\nacross the full size range from `xs` (24px) to `4xl` (128px).\n\n@summary All avatar sizes with a profile image",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {(['circle', 'square', 'pillow', 'pentagon'] as const).map(variant => <Avatar key={variant} size="lg" variant={variant} fallback={variant.slice(0, 2).toUpperCase()} />)}
        </div>
}`,...Z.parameters?.docs?.source},description:{story:`All available shape variants displayed together for visual comparison.
Each variant serves a different use case: user photos, workspaces,
friendly branding, and unique identity.

@summary Visual comparison of all avatar shapes`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {(['circle', 'square', 'pillow', 'pentagon'] as const).map(variant => <Avatar key={variant} size="lg" variant={variant} src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" alt="Alex Morgan" fallback="AM" />)}
        </div>
}`,...Q.parameters?.docs?.source},description:{story:`All shape variants with a profile image to show how each mask clips
the photo. Particularly useful for verifying the pentagon mask and
pillow shape render correctly with real imagery.

@summary All avatar shapes with a profile image`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithImage`,`WithFallbackInitials`,`Circle`,`Square`,`Pillow`,`Pentagon`,`SizeXs`,`SizeSm`,`SizeLg`,`SizeXl`,`Colorized`,`AllColorized`,`AllSizes`,`AllSizesWithImage`,`AllVariants`,`AllVariantsWithImage`]}))();export{J as AllColorized,Y as AllSizes,X as AllSizesWithImage,Z as AllVariants,Q as AllVariantsWithImage,z as Circle,q as Colorized,I as Default,H as Pentagon,V as Pillow,G as SizeLg,W as SizeSm,K as SizeXl,U as SizeXs,B as Square,R as WithFallbackInitials,L as WithImage,$ as __namedExportsOrder,Te as default};