import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-Dt5Be2Tq.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-Dz5qUj01.js";import{n as a,t as o}from"./avatar-DfteHPr2.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{s=t(),r(),a(),c=n(),{expect:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f=`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,p={title:`Components/Avatar`,component:o,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`]},variant:{control:`radio`,options:[`circle`,`square`,`pillow`,`pentagon`]},type:{control:`radio`,options:[`photo`,`initials`,`isotype`],description:"Content type the avatar represents. `photo` fills the shape, `initials` shows text, `isotype` renders a brand icon smaller than the shape so it sits centered inside."}},args:{fallback:`JD`,size:`md`,variant:`circle`,type:`photo`},parameters:{docs:{description:{component:"Avatar displays a user's profile image, initials, or a fallback icon.\nUse for user identification in lists, headers, cards, and comment threads.\nSupports multiple shapes (`circle`, `square`, `pillow`, `pentagon`),\ncontent types (`photo`, `initials`, `isotype`), and sizes from `xs` (24px)\nto `4xl` (128px)."}}}},m={},h={args:{src:`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,alt:`Alex Morgan`}},g={tags:[`!manifest`],args:{size:`xl`,alt:`Alex Morgan`,fallback:`AM`},render:e=>{let[t,n]=(0,s.useState)(0);return(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,s.createElement)(o,{...e,key:t,src:`${f}&reload=${t}`}),(0,c.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>n(t+1),children:`Reload photo`})]})}},_={args:{src:`https://broken-url.example/photo.jpg`,fallback:`AM`},play:async({canvasElement:e})=>{let t=d(e);await u(()=>l(t.getByText(`AM`)).toBeVisible(),{timeout:1e4}),await l(t.queryByRole(`img`)).toBeNull()}},v={args:{variant:`circle`,fallback:`CR`}},y={args:{variant:`square`,fallback:`WS`}},b={args:{variant:`pillow`,fallback:`PL`}},x={args:{variant:`pentagon`,fallback:`PT`}},S={args:{type:`photo`,src:`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,alt:`Alex Morgan`,fallback:`AM`}},C={args:{type:`initials`,fallback:`JD`}},w={args:{type:`isotype`,variant:`square`,src:`https://cdn.simpleicons.org/figma`,alt:`Figma`,fallback:`FG`}},T={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,c.jsx)(o,{size:`lg`,type:`photo`,src:`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,alt:`Alex Morgan`,fallback:`AM`}),(0,c.jsx)(o,{size:`lg`,type:`initials`,fallback:`JD`}),(0,c.jsx)(o,{size:`lg`,type:`isotype`,variant:`square`,src:`https://cdn.simpleicons.org/figma`,alt:`Figma`,fallback:`FG`})]})},E={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`].map(e=>(0,c.jsx)(o,{size:e,type:`isotype`,variant:`square`,src:`https://cdn.simpleicons.org/figma`,alt:`Figma`,fallback:`FG`},e))})},D={args:{size:`xs`,fallback:`XS`}},O={args:{size:`sm`,fallback:`SM`}},k={args:{size:`lg`,fallback:`LG`}},A={args:{size:`xl`,fallback:`XL`}},j={args:{colorize:`jane doe`,fallback:`JD`}},M={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`alice`,`bob`,`carol`,`dave`,`eve`,`frank`,`grace`,`henry`,`iris`].map(e=>(0,c.jsx)(o,{size:`lg`,colorize:e,fallback:e.slice(0,2).toUpperCase()},e))})},N={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`].map(e=>(0,c.jsx)(o,{size:e,fallback:e.toUpperCase()},e))})},P={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`].map(e=>(0,c.jsx)(o,{size:e,src:`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,alt:`Alex Morgan`,fallback:`AM`},e))})},F={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`circle`,`square`,`pillow`,`pentagon`].map(e=>(0,c.jsx)(o,{size:`lg`,variant:e,fallback:e.slice(0,2).toUpperCase()},e))})},I={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[`circle`,`square`,`pillow`,`pentagon`].map(e=>(0,c.jsx)(o,{size:`lg`,variant:e,src:`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop`,alt:`Alex Morgan`,fallback:`AM`},e))})},L=[`Default`,`WithImage`,`WithLateLoadingImage`,`WithFallbackInitials`,`Circle`,`Square`,`Pillow`,`Pentagon`,`TypePhoto`,`TypeInitials`,`TypeIsotype`,`AllTypes`,`AllSizesIsotype`,`SizeXs`,`SizeSm`,`SizeLg`,`SizeXl`,`Colorized`,`AllColorized`,`AllSizes`,`AllSizesWithImage`,`AllVariants`,`AllVariantsWithImage`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source},description:{story:`The default avatar with fallback initials. Renders as a medium circle
when no image source is provided.

@summary Default avatar with fallback initials`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    alt: 'Alex Morgan'
  }
}`,...h.parameters?.docs?.source},description:{story:`Avatar displaying a user profile photo. The image fills the avatar shape
and the fallback is hidden while the image loads successfully.

@summary Avatar with a profile image`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  args: {
    size: 'xl',
    alt: 'Alex Morgan',
    fallback: 'AM'
  },
  render: args => {
    const [reloads, setReloads] = useState(0);
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
                <Avatar {...args} key={reloads} src={\`\${PROFILE_PHOTO}&reload=\${reloads}\`} />
                <Button variant="secondary" size="sm" onClick={() => setReloads(reloads + 1)}>
                    Reload photo
                </Button>
            </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`A photo that has to load fades in, and the avatar stays empty until it
arrives: the fallback is not shown for a loading image. A cached photo is
there on the first paint and does not fade. Each reload asks for a URL the
browser has not cached, so the photo loads again.

@summary Photo that loads late fades in over an empty avatar`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://broken-url.example/photo.jpg',
    fallback: 'AM'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => expect(canvas.getByText('AM')).toBeVisible(), {
      timeout: 10000
    });
    await expect(canvas.queryByRole('img')).toBeNull();
  }
}`,..._.parameters?.docs?.source},description:{story:`When the image fails to load, the fallback content is displayed.
Pass initials, an icon, or any ReactNode as the \`fallback\` prop.

@summary Fallback content shown when image is unavailable`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    fallback: 'CR'
  }
}`,...v.parameters?.docs?.source},description:{story:`The circle variant is the default shape, ideal for user profile photos.

@summary Circle-shaped avatar (default)`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'square',
    fallback: 'WS'
  }
}`,...y.parameters?.docs?.source},description:{story:`The square variant uses a rounded rectangle, suitable for workspace,
team, or organization icons.

@summary Square-shaped avatar for workspaces`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pillow',
    fallback: 'PL'
  }
}`,...b.parameters?.docs?.source},description:{story:`The pillow variant uses a soft, organic squircle shape for a
friendly and distinctive appearance.

@summary Pillow-shaped avatar with organic squircle`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pentagon',
    fallback: 'PT'
  }
}`,...x.parameters?.docs?.source},description:{story:`The pentagon variant uses a five-sided mask for a unique visual identity.
Note: the border is hidden in this variant due to the mask shape.

@summary Pentagon-shaped avatar for unique identity`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    alt: 'Alex Morgan',
    fallback: 'AM'
  }
}`,...S.parameters?.docs?.source},description:{story:`The \`photo\` type is the default. The image fills the avatar shape edge-to-edge,
which is ideal for user profile photographs.

@summary Photo type fills the avatar shape edge-to-edge`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    fallback: 'JD'
  }
}`,...C.parameters?.docs?.source},description:{story:`The \`initials\` type is intended when no image is available and the avatar
stands in for a user with their initials. The fallback text is centered
within the avatar shape.

@summary Initials type for users without a profile photo`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'isotype',
    variant: 'square',
    src: 'https://cdn.simpleicons.org/figma',
    alt: 'Figma',
    fallback: 'FG'
  }
}`,...w.parameters?.docs?.source},description:{story:`The \`isotype\` type renders the image smaller than the avatar shape so a
brand or organization icon sits centered inside the container rather than
filling it. Use for workspace, team, or company avatars where a logo
should remain legible inside the bounding shape.

@summary Isotype type centers a brand icon inside the shape`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            <Avatar size="lg" type="photo" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" alt="Alex Morgan" fallback="AM" />
            <Avatar size="lg" type="initials" fallback="JD" />
            <Avatar size="lg" type="isotype" variant="square" src="https://cdn.simpleicons.org/figma" alt="Figma" fallback="FG" />
        </div>
}`,...T.parameters?.docs?.source},description:{story:"All content types shown side by side: `photo` fills the shape, `initials`\ncenters text, and `isotype` shrinks a brand icon inside the bounding shape.\n\n@summary Visual comparison of all avatar content types",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => <Avatar key={size} size={size} type="isotype" variant="square" src="https://cdn.simpleicons.org/figma" alt="Figma" fallback="FG" />)}
        </div>
}`,...E.parameters?.docs?.source},description:{story:`The isotype icon scales proportionally smaller than the avatar shape at
every size, keeping a consistent inset around the logo from \`xs\` (24px)
to \`4xl\` (128px).

@summary Isotype scaling across all avatar sizes`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    fallback: 'XS'
  }
}`,...D.parameters?.docs?.source},description:{story:`Extra-small avatar (24px) for dense lists and inline indicators.

@summary Extra-small 24px avatar`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    fallback: 'SM'
  }
}`,...O.parameters?.docs?.source},description:{story:`Small avatar (32px) for compact layouts and table rows.

@summary Small 32px avatar`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    fallback: 'LG'
  }
}`,...k.parameters?.docs?.source},description:{story:`Large avatar (48px) for profile sections and detail views.

@summary Large 48px avatar`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    fallback: 'XL'
  }
}`,...A.parameters?.docs?.source},description:{story:`Extra-large avatar (64px) for hero sections and prominent display.

@summary Extra-large 64px avatar`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    colorize: 'jane doe',
    fallback: 'JD'
  }
}`,...j.parameters?.docs?.source},description:{story:`The \`colorize\` prop deterministically maps a string (typically a user name)
to a color from the palette, applying a tinted background and matching
text color. Useful for distinguishing users in lists without profile photos.

@summary Colorized avatar based on user name`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {['alice', 'bob', 'carol', 'dave', 'eve', 'frank', 'grace', 'henry', 'iris'].map(name => <Avatar key={name} size="lg" colorize={name} fallback={name.slice(0, 2).toUpperCase()} />)}
        </div>
}`,...M.parameters?.docs?.source},description:{story:`Multiple colorized avatars showing how different names map to different
colors from the palette for visual distinction.

@summary Multiple colorized avatars for visual distinction`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => <Avatar key={size} size={size} fallback={size.toUpperCase()} />)}
        </div>
}`,...N.parameters?.docs?.source},description:{story:"All available sizes displayed together for visual comparison.\nSizes range from `xs` (24px) to `4xl` (128px).\n\n@summary Visual comparison of all avatar sizes",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => <Avatar key={size} size={size} src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" alt="Alex Morgan" fallback="AM" />)}
        </div>
}`,...P.parameters?.docs?.source},description:{story:"All sizes with a profile image to verify image scaling and quality\nacross the full size range from `xs` (24px) to `4xl` (128px).\n\n@summary All avatar sizes with a profile image",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {(['circle', 'square', 'pillow', 'pentagon'] as const).map(variant => <Avatar key={variant} size="lg" variant={variant} fallback={variant.slice(0, 2).toUpperCase()} />)}
        </div>
}`,...F.parameters?.docs?.source},description:{story:`All available shape variants displayed together for visual comparison.
Each variant serves a different use case: user photos, workspaces,
friendly branding, and unique identity.

@summary Visual comparison of all avatar shapes`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
            {(['circle', 'square', 'pillow', 'pentagon'] as const).map(variant => <Avatar key={variant} size="lg" variant={variant} src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" alt="Alex Morgan" fallback="AM" />)}
        </div>
}`,...I.parameters?.docs?.source},description:{story:`All shape variants with a profile image to show how each mask clips
the photo. Particularly useful for verifying the pentagon mask and
pillow shape render correctly with real imagery.

@summary All avatar shapes with a profile image`,...I.parameters?.docs?.description}}}})))()}R();export{M as AllColorized,N as AllSizes,E as AllSizesIsotype,P as AllSizesWithImage,T as AllTypes,F as AllVariants,I as AllVariantsWithImage,v as Circle,j as Colorized,m as Default,x as Pentagon,b as Pillow,k as SizeLg,O as SizeSm,A as SizeXl,D as SizeXs,y as Square,C as TypeInitials,w as TypeIsotype,S as TypePhoto,_ as WithFallbackInitials,h as WithImage,g as WithLateLoadingImage,L as __namedExportsOrder,p as default};