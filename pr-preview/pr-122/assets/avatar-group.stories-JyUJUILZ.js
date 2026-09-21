import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BdNrbtGA.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./dist-C8AlzbfS.js";import{n as a,t as o}from"./utils-nsk-j2e0.js";import{n as s,t as c}from"./avatar-CCYiPkwg.js";var l,u,d,f;function p(){return(p=e((()=>{l=t(),i(),a(),s(),u=n(),d=r({slots:{root:`inline-flex items-center`,item:`relative first:ms-0 [--avatar-border-color:var(--color-bg-default-base-primary)] [--avatar-border-width:0.125rem]`},variants:{size:{xs:{item:`-ms-1.5`},sm:{item:`-ms-2`},md:{item:`-ms-2.5`},lg:{item:`-ms-3`},xl:{item:`-ms-3.5`},"2xl":{item:`-ms-4`},"3xl":{item:`-ms-4.5`},"4xl":{item:`-ms-5`}}},defaultVariants:{size:`md`}}),f=({children:e,max:t=3,size:n=`md`,variant:r,className:i,ref:a,...s})=>{let f=d({size:n}),p=f.item(),m=l.Children.toArray(e).filter(l.isValidElement),h=m.slice(0,Math.max(0,t)),g=m.length-h.length;return(0,u.jsxs)(`div`,{ref:a,"data-slot":`avatar-group`,...s,className:o(f.root(),i),children:[h.map(e=>(0,l.cloneElement)(e,{size:n,variant:r,className:o(p,e.props.className)})),g>0&&(0,u.jsx)(c,{"data-slot":`avatar-group-overflow`,size:n,variant:r,fallback:`+${g}`,className:p})]})};try{d.displayName=`avatarGroupRecipe`,d.__docgenInfo={description:``,displayName:`avatarGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/avatar-group/avatar-group.tsx`,methods:[],props:{size:{defaultValue:{value:`md`},description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"md" | "sm" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl"`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`},{value:`"xs"`},{value:`"xl"`},{value:`"2xl"`},{value:`"3xl"`},{value:`"4xl"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{f.displayName=`AvatarGroup`,f.__docgenInfo={description:"Stacks `<Avatar>` children into an overlapping row, collapsing everything past\n`max` (default 3) into a trailing `+N` bubble. Pass `<Avatar>` elements\ndirectly — the group clones each to force a uniform `size`/`variant` and the\noverlap, so wrapped children won't pick those up.",displayName:`AvatarGroup`,filePath:`/home/runner/work/design-system/design-system/src/avatar-group/avatar-group.tsx`,methods:[],props:{max:{defaultValue:{value:`3`},declarations:[{fileName:`design-system/src/avatar-group/avatar-group.tsx`,name:`TypeLiteral`}],description:``,name:`max`,required:!1,tags:{},type:{name:`number`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/avatar-group/avatar-group.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"md" | "sm" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl"`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`},{value:`"xs"`},{value:`"xl"`},{value:`"2xl"`},{value:`"3xl"`},{value:`"4xl"`}]}},variant:{defaultValue:null,declarations:[{fileName:`design-system/src/avatar-group/avatar-group.tsx`,name:`TypeLiteral`}],description:"Shape applied uniformly to every avatar and the `+N` bubble. Defaults to `circle`.",name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"circle" | "square" | "pillow" | "pentagon"`,value:[{value:`"circle"`},{value:`"square"`},{value:`"pillow"`},{value:`"pentagon"`}]}}},tags:{summary:"Overlapping row of avatars, collapsing the rest into `+N`",example:`<AvatarGroup size="sm" max={3}>
	<Avatar fallback="AL" colorize="Ada Lovelace" />
	<Avatar fallback="GH" colorize="Grace Hopper" />
	<Avatar fallback="MK" colorize="Mary Kom" />
</AvatarGroup>`}}}catch{}})))()}var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{s(),p(),m=n(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_=[{fallback:`AL`,colorize:`Ada Lovelace`},{fallback:`GH`,colorize:`Grace Hopper`},{fallback:`MK`,colorize:`Mary Kom`},{fallback:`RP`,colorize:`Rosa Parks`},{fallback:`HT`,colorize:`Harriet Tubman`}],v={title:`Components/AvatarGroup`,component:f,tags:[`autodocs`],argTypes:{max:{control:{type:`number`,min:1}},size:{control:`radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`]},variant:{control:`radio`,options:[`circle`,`square`,`pillow`,`pentagon`]}},args:{max:3,size:`md`},parameters:{docs:{description:{component:"AvatarGroup stacks `<Avatar>` children into an overlapping row and collapses\neverything past `max` into a trailing `+N` bubble. The group owns the layout:\nit forces a uniform `size` (and `variant`, when set) and rings each avatar in\nthe surface color so they read as separate."}}}},y={render:e=>(0,m.jsx)(f,{...e,children:_.map(e=>(0,m.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=g(e);await h(t.getByText(`AL`)).toBeInTheDocument(),await h(t.getByText(`GH`)).toBeInTheDocument(),await h(t.getByText(`MK`)).toBeInTheDocument(),await h(t.queryByText(`RP`)).not.toBeInTheDocument(),await h(t.getByText(`+2`)).toBeInTheDocument();let n=e.querySelectorAll(`[data-slot="avatar-group"] > *`);h(n).toHaveLength(4);let[r,i]=n;r&&i&&(h(getComputedStyle(r).marginLeft).toBe(`0px`),h(getComputedStyle(i).marginLeft).toBe(`-10px`),h(getComputedStyle(r).borderTopWidth).toBe(`2px`))}},b={args:{max:5},render:e=>(0,m.jsx)(f,{...e,children:_.map(e=>(0,m.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=g(e);await h(t.getByText(`HT`)).toBeInTheDocument(),await h(t.queryByText(/^\+/)).not.toBeInTheDocument()}},x={render:()=>(0,m.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,m.jsx)(f,{size:e,max:3,children:_.map(e=>(0,m.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))},e))})},S={args:{variant:`square`},render:e=>(0,m.jsx)(f,{...e,children:_.map(e=>(0,m.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-slot="avatar-group-overflow"]`);await h(t).toBeInTheDocument(),await h(t).toHaveClass(`rounded-md`)}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>
            {PEOPLE.map(person => <Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />)}
        </AvatarGroup>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('AL')).toBeInTheDocument();
    await expect(canvas.getByText('GH')).toBeInTheDocument();
    await expect(canvas.getByText('MK')).toBeInTheDocument();
    await expect(canvas.queryByText('RP')).not.toBeInTheDocument();
    await expect(canvas.getByText('+2')).toBeInTheDocument();
    const items = canvasElement.querySelectorAll('[data-slot="avatar-group"] > *');
    expect(items).toHaveLength(4); // 3 visible + the +2 bubble

    const [first, second] = items;
    if (first && second) {
      // first avatar sits flush; the rest overlap by the md step (-0.625rem = -10px)
      expect(getComputedStyle(first).marginLeft).toBe('0px');
      expect(getComputedStyle(second).marginLeft).toBe('-10px');
      // the surface-colored separator lands as a 2px border on each avatar
      expect(getComputedStyle(first).borderTopWidth).toBe('2px');
    }
  }
}`,...y.parameters?.docs?.source},description:{story:"Five people, `max={3}`: three avatars overlap and the rest collapse into `+2`.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    max: 5
  },
  render: args => <AvatarGroup {...args}>
            {PEOPLE.map(person => <Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />)}
        </AvatarGroup>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('HT')).toBeInTheDocument();
    await expect(canvas.queryByText(/^\\+/)).not.toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source},description:{story:"When the count is within `max`, every avatar shows and no `+N` bubble renders.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <AvatarGroup key={size} size={size} max={3}>
                    {PEOPLE.map(person => <Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />)}
                </AvatarGroup>)}
        </div>
}`,...x.parameters?.docs?.source},description:{story:"The group forces its `size` onto every child, so the stack stays uniform.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'square'
  },
  render: args => <AvatarGroup {...args}>
            {PEOPLE.map(person => <Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />)}
        </AvatarGroup>,
  play: async ({
    canvasElement
  }) => {
    const overflow = canvasElement.querySelector('[data-slot="avatar-group-overflow"]');
    await expect(overflow).toBeInTheDocument();
    await expect(overflow).toHaveClass('rounded-md');
  }
}`,...S.parameters?.docs?.source},description:{story:"`variant` reshapes every avatar and the overflow bubble together.",...S.parameters?.docs?.description}}},C=[`Default`,`WithinMax`,`Sizes`,`Square`]})))()}w();export{y as Default,x as Sizes,S as Square,b as WithinMax,C as __namedExportsOrder,v as default};