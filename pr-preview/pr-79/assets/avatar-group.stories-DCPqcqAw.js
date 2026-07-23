import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-sGmjnL1b.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./dist-xs6gOf1u.js";import{n as o,t as s}from"./lib-Dkaf_tmd.js";import{t as c}from"./avatar-BGAjVeFQ.js";import{t as l}from"./avatar-D6X5cuFg.js";var u,d,f,p,m=e((()=>{u=t(n(),1),a(),s(),l(),d=r(),f=i({slots:{root:`inline-flex items-center`,item:`relative first:ms-0 [--avatar-border-color:var(--color-bg-default-base-primary)] [--avatar-border-width:0.125rem]`},variants:{size:{xs:{item:`-ms-1.5`},sm:{item:`-ms-2`},md:{item:`-ms-2.5`},lg:{item:`-ms-3`},xl:{item:`-ms-3.5`},"2xl":{item:`-ms-4`},"3xl":{item:`-ms-4.5`},"4xl":{item:`-ms-5`}}},defaultVariants:{size:`md`}}),p=({children:e,max:t=3,size:n=`md`,variant:r,className:i,ref:a,...s})=>{let l=f({size:n}),p=l.item(),m=u.Children.toArray(e).filter(u.isValidElement),h=m.slice(0,Math.max(0,t)),g=m.length-h.length;return(0,d.jsxs)(`div`,{ref:a,"data-slot":`avatar-group`,...s,className:o(l.root(),i),children:[h.map(e=>(0,u.cloneElement)(e,{size:n,variant:r,className:o(p,e.props.className)})),g>0&&(0,d.jsx)(c,{"data-slot":`avatar-group-overflow`,size:n,variant:r,fallback:`+${g}`,className:p})]})};try{f.displayName=`avatarGroupRecipe`,f.__docgenInfo={description:``,displayName:`avatarGroupRecipe`,props:{size:{defaultValue:{value:`md`},description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xs"`},{value:`"xl"`},{value:`"2xl"`},{value:`"3xl"`},{value:`"4xl"`}]}},class:{defaultValue:null,description:``,name:`class`,required:!1,type:{name:`ClassNameValue`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`ClassNameValue`}}}}}catch{}try{p.displayName=`AvatarGroup`,p.__docgenInfo={description:"Stacks `<Avatar>` children into an overlapping row, collapsing everything past\n`max` (default 3) into a trailing `+N` bubble. Pass `<Avatar>` elements\ndirectly — the group clones each to force a uniform `size`/`variant` and the\noverlap, so wrapped children won't pick those up.",displayName:`AvatarGroup`,props:{max:{defaultValue:{value:`3`},description:``,name:`max`,required:!1,type:{name:`number`}},size:{defaultValue:{value:`md`},description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xs"`},{value:`"xl"`},{value:`"2xl"`},{value:`"3xl"`},{value:`"4xl"`}]}},variant:{defaultValue:null,description:"Shape applied uniformly to every avatar and the `+N` bubble. Defaults to `circle`.",name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"square"`},{value:`"circle"`},{value:`"pillow"`},{value:`"pentagon"`}]}}}}}catch{}})),h,g,_,v,y,b,x,S,C,w;e((()=>{l(),m(),h=r(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v=[{fallback:`AL`,colorize:`Ada Lovelace`},{fallback:`GH`,colorize:`Grace Hopper`},{fallback:`MK`,colorize:`Mary Kom`},{fallback:`RP`,colorize:`Rosa Parks`},{fallback:`HT`,colorize:`Harriet Tubman`}],y={title:`Components/AvatarGroup`,component:p,tags:[`autodocs`],argTypes:{max:{control:{type:`number`,min:1}},size:{control:`radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`]},variant:{control:`radio`,options:[`circle`,`square`,`pillow`,`pentagon`]}},args:{max:3,size:`md`},parameters:{docs:{description:{component:"AvatarGroup stacks `<Avatar>` children into an overlapping row and collapses\neverything past `max` into a trailing `+N` bubble. The group owns the layout:\nit forces a uniform `size` (and `variant`, when set) and rings each avatar in\nthe surface color so they read as separate."}}}},b={render:e=>(0,h.jsx)(p,{...e,children:v.map(e=>(0,h.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=_(e);await g(t.getByText(`AL`)).toBeInTheDocument(),await g(t.getByText(`GH`)).toBeInTheDocument(),await g(t.getByText(`MK`)).toBeInTheDocument(),await g(t.queryByText(`RP`)).not.toBeInTheDocument(),await g(t.getByText(`+2`)).toBeInTheDocument();let n=e.querySelectorAll(`[data-slot="avatar-group"] > *`);g(n).toHaveLength(4);let[r,i]=n;r&&i&&(g(getComputedStyle(r).marginLeft).toBe(`0px`),g(getComputedStyle(i).marginLeft).toBe(`-10px`),g(getComputedStyle(r).borderTopWidth).toBe(`2px`))}},x={args:{max:5},render:e=>(0,h.jsx)(p,{...e,children:v.map(e=>(0,h.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=_(e);await g(t.getByText(`HT`)).toBeInTheDocument(),await g(t.queryByText(/^\+/)).not.toBeInTheDocument()}},S={render:()=>(0,h.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,h.jsx)(p,{size:e,max:3,children:v.map(e=>(0,h.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))},e))})},C={args:{variant:`square`},render:e=>(0,h.jsx)(p,{...e,children:v.map(e=>(0,h.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-slot="avatar-group-overflow"]`);await g(t).toBeInTheDocument(),await g(t).toHaveClass(`rounded-md`)}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Five people, `max={3}`: three avatars overlap and the rest collapse into `+2`.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"When the count is within `max`, every avatar shows and no `+N` bubble renders.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <AvatarGroup key={size} size={size} max={3}>
                    {PEOPLE.map(person => <Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />)}
                </AvatarGroup>)}
        </div>
}`,...S.parameters?.docs?.source},description:{story:"The group forces its `size` onto every child, so the stack stays uniform.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"`variant` reshapes every avatar and the overflow bubble together.",...C.parameters?.docs?.description}}},w=[`Default`,`WithinMax`,`Sizes`,`Square`]}))();export{b as Default,S as Sizes,C as Square,x as WithinMax,w as __namedExportsOrder,y as default};