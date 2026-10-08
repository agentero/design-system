import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BWHKetSP.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./dist-C8AlzbfS.js";import{n as a,t as o}from"./utils-nsk-j2e0.js";import{n as s,t as c}from"./avatar-BNtvM4aa.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),i(),a(),s(),u=n(),d=r({slots:{root:`inline-flex items-center`,item:`relative first:ms-0 [--avatar-border-color:var(--color-bg-default-base-primary)] [--avatar-border-width:0.125rem]`},variants:{size:{xs:{item:`-ms-1.5`},sm:{item:`-ms-2`},md:{item:`-ms-2.5`},lg:{item:`-ms-3`},xl:{item:`-ms-3.5`},"2xl":{item:`-ms-4`},"3xl":{item:`-ms-4.5`},"4xl":{item:`-ms-5`}}},defaultVariants:{size:`md`}}),f=e=>typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(f).join(``):(0,l.isValidElement)(e)?f(e.props.children):``,p=({fallback:e,src:t,role:n=`img`,"aria-label":r,"aria-labelledby":i})=>{let a=f(e).trim();return a&&!t&&r===void 0&&i===void 0&&n!==`presentation`&&n!==`none`?{role:n,"aria-label":a}:void 0},m=({children:e,max:t=3,size:n=`md`,variant:r,className:i,ref:a,...s})=>{let f=d({size:n}),m=f.item(),h=l.Children.toArray(e).filter(l.isValidElement),g=h.slice(0,Math.max(0,t)),_=h.length-g.length;return(0,u.jsxs)(`div`,{ref:a,"data-slot":`avatar-group`,...s,className:o(f.root(),i),children:[g.map(e=>(0,l.cloneElement)(e,{size:n,variant:r,className:o(m,e.props.className),...p(e.props)})),_>0&&(0,u.jsx)(c,{"data-slot":`avatar-group-overflow`,role:`img`,"aria-label":`+${_}`,size:n,variant:r,fallback:`+${_}`,className:m})]})};try{d.displayName=`avatarGroupRecipe`,d.__docgenInfo={description:``,displayName:`avatarGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/avatar-group/avatar-group.tsx`,methods:[],props:{size:{defaultValue:{value:`md`},description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"`,value:[{value:`"xs"`},{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xl"`},{value:`"2xl"`},{value:`"3xl"`},{value:`"4xl"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{m.displayName=`AvatarGroup`,m.__docgenInfo={description:"Stacks `<Avatar>` children into an overlapping row, collapsing everything past\n`max` (default 3) into a trailing `+N` bubble. Pass `<Avatar>` elements\ndirectly — the group clones each to force a uniform `size`/`variant` and the\noverlap, so wrapped children won't pick those up.\n\nAvatar hides its fallback from assistive technology, and a grouped avatar has\nno name beside it. The group therefore exposes an avatar without `src` as an\nimage named by the text of its fallback, and the `+N` bubble as an image\nnamed `+N`. An icon fallback has no text, so it gets no name.\nInitials are a poor name: give each avatar `role=\"img\"` and an `aria-label`\nwith the person's name, and the group keeps them. An avatar with `src` is\nnamed by its `alt` only, so it has no name if the photo fails to load.",displayName:`AvatarGroup`,filePath:`/home/runner/work/design-system/design-system/src/avatar-group/avatar-group.tsx`,methods:[],props:{max:{defaultValue:{value:`3`},declarations:[{fileName:`design-system/src/avatar-group/avatar-group.tsx`,name:`TypeLiteral`}],description:``,name:`max`,required:!1,tags:{},type:{name:`number`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/avatar-group/avatar-group.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"`,value:[{value:`"xs"`},{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xl"`},{value:`"2xl"`},{value:`"3xl"`},{value:`"4xl"`}]}},variant:{defaultValue:null,declarations:[{fileName:`design-system/src/avatar-group/avatar-group.tsx`,name:`TypeLiteral`}],description:"Shape applied uniformly to every avatar and the `+N` bubble. Defaults to `circle`.",name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"circle" | "square" | "pillow" | "pentagon"`,value:[{value:`"circle"`},{value:`"square"`},{value:`"pillow"`},{value:`"pentagon"`}]}}},tags:{summary:"Overlapping row of avatars, collapsing the rest into `+N`",example:`<AvatarGroup size="sm" max={3}>
	<Avatar fallback="AL" colorize="Ada Lovelace" />
	<Avatar fallback="GH" colorize="Grace Hopper" />
	<Avatar fallback="MK" colorize="Mary Kom" />
</AvatarGroup>`}}}catch{}})))()}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{s(),h(),g=n(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y=[{fallback:`AL`,colorize:`Ada Lovelace`},{fallback:`GH`,colorize:`Grace Hopper`},{fallback:`MK`,colorize:`Mary Kom`},{fallback:`RP`,colorize:`Rosa Parks`},{fallback:`HT`,colorize:`Harriet Tubman`}],b=`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,x={title:`Components/AvatarGroup`,component:m,tags:[`autodocs`],argTypes:{max:{control:{type:`number`,min:1}},size:{control:`radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`]},variant:{control:`radio`,options:[`circle`,`square`,`pillow`,`pentagon`]}},args:{max:3,size:`md`},parameters:{docs:{description:{component:"AvatarGroup stacks `<Avatar>` children into an overlapping row and collapses\neverything past `max` into a trailing `+N` bubble. The group owns the layout:\nit forces a uniform `size` (and `variant`, when set) and rings each avatar in\nthe surface color so they read as separate."}}}},S={render:e=>(0,g.jsx)(m,{...e,children:y.map(e=>(0,g.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=v(e);await _(t.getByText(`AL`)).toBeInTheDocument(),await _(t.getByText(`GH`)).toBeInTheDocument(),await _(t.getByText(`MK`)).toBeInTheDocument(),await _(t.queryByText(`RP`)).not.toBeInTheDocument(),await _(t.getByText(`+2`)).toBeInTheDocument(),await _(t.getByRole(`img`,{name:`AL`})).toBeInTheDocument(),await _(t.getByRole(`img`,{name:`+2`})).toBeInTheDocument();let n=e.querySelectorAll(`[data-slot="avatar-group"] > *`);_(n).toHaveLength(4);let[r,i]=n;r&&i&&(_(getComputedStyle(r).marginLeft).toBe(`0px`),_(getComputedStyle(i).marginLeft).toBe(`-10px`),_(getComputedStyle(r).borderTopWidth).toBe(`2px`))}},C={args:{max:5},render:e=>(0,g.jsx)(m,{...e,children:y.map(e=>(0,g.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=v(e);await _(t.getByText(`HT`)).toBeInTheDocument(),await _(t.getByRole(`img`,{name:`HT`})).toBeInTheDocument(),await _(t.queryByText(/^\+/)).not.toBeInTheDocument()}},w={render:e=>(0,g.jsx)(m,{...e,children:y.map(e=>(0,g.jsx)(c,{role:`img`,"aria-label":e.colorize,fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=v(e);await _(t.getByRole(`img`,{name:`Ada Lovelace`})).toBeInTheDocument(),await _(t.queryByRole(`img`,{name:`AL`})).not.toBeInTheDocument()}},T={render:e=>(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(c,{src:b,alt:`Alex Morgan`,fallback:`AM`}),y.map(e=>(0,g.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))]}),play:async({canvasElement:e})=>{let t=v(e);await _(t.queryByRole(`img`,{name:`AM`})).not.toBeInTheDocument(),await _(t.getByRole(`img`,{name:`AL`})).toBeInTheDocument()}},E={tags:[`!manifest`],render:e=>(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(c,{role:`button`,tabIndex:0,fallback:`AL`,colorize:`Ada Lovelace`}),(0,g.jsx)(c,{role:`presentation`,fallback:`GH`,colorize:`Grace Hopper`})]}),play:async({canvasElement:e})=>{let t=v(e);await _(t.getByRole(`button`,{name:`AL`})).toBeInTheDocument(),await _(t.getByText(`GH`).closest(`[role="presentation"]`)).not.toHaveAttribute(`aria-label`)}},D={tags:[`!manifest`],render:e=>(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(c,{fallback:(0,g.jsx)(`span`,{children:`AL`}),colorize:`Ada Lovelace`}),(0,g.jsx)(c,{fallback:(0,g.jsx)(g.Fragment,{children:`GH`}),colorize:`Grace Hopper`})]}),play:async({canvasElement:e})=>{let t=v(e);await _(t.getByRole(`img`,{name:`AL`})).toBeInTheDocument(),await _(t.getByRole(`img`,{name:`GH`})).toBeInTheDocument()}},O={render:()=>(0,g.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,g.jsx)(m,{size:e,max:3,children:y.map(e=>(0,g.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))},e))})},k={args:{variant:`square`},render:e=>(0,g.jsx)(m,{...e,children:y.map(e=>(0,g.jsx)(c,{fallback:e.fallback,colorize:e.colorize},e.colorize))}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-slot="avatar-group-overflow"]`);await _(t).toBeInTheDocument(),await _(t).toHaveClass(`rounded-md`)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole('img', {
      name: 'AL'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('img', {
      name: '+2'
    })).toBeInTheDocument();
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
}`,...S.parameters?.docs?.source},description:{story:"Five people, `max={3}`: three avatars overlap and the rest collapse into `+2`.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole('img', {
      name: 'HT'
    })).toBeInTheDocument();
    await expect(canvas.queryByText(/^\\+/)).not.toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source},description:{story:"When the count is within `max`, every avatar shows and no `+N` bubble renders.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>
            {PEOPLE.map(person => <Avatar key={person.colorize} role="img" aria-label={person.colorize} fallback={person.fallback} colorize={person.colorize} />)}
        </AvatarGroup>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img', {
      name: 'Ada Lovelace'
    })).toBeInTheDocument();
    await expect(canvas.queryByRole('img', {
      name: 'AL'
    })).not.toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source},description:{story:`Initials are a poor accessible name. Give each avatar \`role="img"\` and an
\`aria-label\` with the person's name; the group keeps what the caller sets.

@summary Avatars named by the caller keep their accessible names`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>
            <Avatar src={PROFILE_PHOTO} alt="Alex Morgan" fallback="AM" />
            {PEOPLE.map(person => <Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />)}
        </AvatarGroup>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('img', {
      name: 'AM'
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole('img', {
      name: 'AL'
    })).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source},description:{story:`An avatar with a photo is named by its \`alt\`, so the group adds no fallback
name on top of it.

@summary A photo is named by its alt, not by its fallback`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: args => <AvatarGroup {...args}>
            <Avatar role="button" tabIndex={0} fallback="AL" colorize="Ada Lovelace" />
            <Avatar role="presentation" fallback="GH" colorize="Grace Hopper" />
        </AvatarGroup>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'AL'
    })).toBeInTheDocument();
    await expect(canvas.getByText('GH').closest('[role="presentation"]')).not.toHaveAttribute('aria-label');
  }
}`,...E.parameters?.docs?.source},description:{story:`A role says what the avatar is, not what it is called. An avatar that carries
its own role keeps it and still takes its text fallback as its name. An
avatar marked \`presentation\` is left without one.

@summary A caller's role is kept and the fallback still names the avatar`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: args => <AvatarGroup {...args}>
            <Avatar fallback={<span>AL</span>} colorize="Ada Lovelace" />
            <Avatar fallback={<>GH</>} colorize="Grace Hopper" />
        </AvatarGroup>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img', {
      name: 'AL'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('img', {
      name: 'GH'
    })).toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source},description:{story:`Initials wrapped in an element or a fragment are read from its text, so the
avatar is still named.

@summary Initials wrapped in an element still name the avatar`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <AvatarGroup key={size} size={size} max={3}>
                    {PEOPLE.map(person => <Avatar key={person.colorize} fallback={person.fallback} colorize={person.colorize} />)}
                </AvatarGroup>)}
        </div>
}`,...O.parameters?.docs?.source},description:{story:"The group forces its `size` onto every child, so the stack stays uniform.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"`variant` reshapes every avatar and the overflow bubble together.",...k.parameters?.docs?.description}}},A=[`Default`,`WithinMax`,`WithNames`,`WithPhoto`,`WithRole`,`WithWrappedInitials`,`Sizes`,`Square`]})))()}j();export{S as Default,O as Sizes,k as Square,w as WithNames,T as WithPhoto,E as WithRole,D as WithWrappedInitials,C as WithinMax,A as __namedExportsOrder,x as default};