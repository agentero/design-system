import { SVGProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	BellIcon,
	CheckIcon,
	ChevronRightIcon,
	CircleAlertIcon,
	CircleCheckIcon,
	CopyIcon,
	DownloadIcon,
	FilterIcon,
	HeartIcon,
	HomeIcon,
	InfoIcon,
	MailIcon,
	MenuIcon,
	PlusIcon,
	SearchIcon,
	SettingsIcon,
	StarIcon,
	Trash2Icon,
	TriangleAlertIcon,
	UploadIcon,
	UserIcon,
	XIcon
} from 'lucide-react';

import { cn } from '../../lib';
import { iconStyles } from '../../lib/icon-styles';

/**
 * Inline Material Symbols `opsz=24` SVGs preserved from master for visual
 * comparison only. These match the geometry currently shipping in production
 * (before the lucide migration). Kept local to this story file — not exported.
 */
const MaterialCheckCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M10.5808 14.1462L8.25765 11.8231C8.1192 11.6846 7.94517 11.6138 7.73555 11.6106C7.52593 11.6074 7.34869 11.6782 7.20382 11.8231C7.05896 11.968 6.98653 12.1436 6.98653 12.35C6.98653 12.5564 7.05896 12.732 7.20382 12.8769L9.94805 15.6211C10.1288 15.8019 10.3397 15.8923 10.5808 15.8923C10.8218 15.8923 11.0327 15.8019 11.2134 15.6211L16.7769 10.0577C16.9153 9.91923 16.9862 9.7452 16.9894 9.53558C16.9926 9.32596 16.9218 9.14872 16.7769 9.00386C16.632 8.85899 16.4564 8.78656 16.25 8.78656C16.0436 8.78656 15.8679 8.85899 15.7231 9.00386L10.5808 14.1462ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5766 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45271 3.248 8.29658C3.74667 7.14043 4.42342 6.13475 5.27825 5.27953C6.1331 4.4243 7.13834 3.74724 8.29398 3.24836C9.44959 2.74947 10.6844 2.50003 11.9983 2.50003C13.3122 2.50003 14.5473 2.74936 15.7034 3.24803C16.8596 3.7467 17.8652 4.42345 18.7205 5.27828C19.5757 6.13313 20.2527 7.13837 20.7516 8.29401C21.2505 9.44962 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8653 18.7217 18.7205C17.8669 19.5757 16.8616 20.2528 15.706 20.7517C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.87501 17.675 6.32501C16.125 4.77501 14.2333 4.00001 12 4.00001C9.76664 4.00001 7.87498 4.77501 6.32498 6.32501C4.77498 7.87501 3.99998 9.76667 3.99998 12C3.99998 14.2333 4.77498 16.125 6.32498 17.675C7.87498 19.225 9.76664 20 12 20Z" />
	</svg>
);

const MaterialErrorOutline = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
	</svg>
);

const MaterialWarning = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M3.42555 20.4999C3.25605 20.4999 3.10382 20.4585 2.96887 20.3756C2.83392 20.2928 2.72897 20.1836 2.654 20.048C2.57602 19.9134 2.53312 19.7676 2.52532 19.6105C2.51752 19.4535 2.5599 19.2979 2.65245 19.1439L11.2132 4.35609C11.3057 4.20206 11.4216 4.08819 11.5607 4.01447C11.6998 3.94074 11.8462 3.90387 12.0001 3.90387C12.1539 3.90387 12.3004 3.94074 12.4395 4.01447C12.5786 4.08819 12.6944 4.20206 12.787 4.35609L21.3477 19.1439C21.4403 19.2979 21.4827 19.4535 21.4749 19.6105C21.4671 19.7676 21.4242 19.9134 21.3462 20.048C21.2712 20.1836 21.1663 20.2928 21.0313 20.3756C20.8964 20.4585 20.7441 20.4999 20.5746 20.4999H3.42555ZM4.4501 19H19.5501L12.0001 5.99997L4.4501 19ZM12.0001 17.8076C12.2289 17.8076 12.4208 17.7302 12.5756 17.5754C12.7304 17.4206 12.8078 17.2288 12.8078 17C12.8078 16.7711 12.7304 16.5793 12.5756 16.4245C12.4208 16.2697 12.2289 16.1923 12.0001 16.1923C11.7712 16.1923 11.5794 16.2697 11.4246 16.4245C11.2698 16.5793 11.1924 16.7711 11.1924 17C11.1924 17.2288 11.2698 17.4206 11.4246 17.5754C11.5794 17.7302 11.7712 17.8076 12.0001 17.8076ZM12.0004 15.1923C12.213 15.1923 12.3911 15.1204 12.5347 14.9767C12.6783 14.8329 12.7501 14.6548 12.7501 14.4423V10.9423C12.7501 10.7298 12.6782 10.5517 12.5344 10.4079C12.3906 10.2642 12.2124 10.1923 11.9998 10.1923C11.7872 10.1923 11.6091 10.2642 11.4655 10.4079C11.3219 10.5517 11.2501 10.7298 11.2501 10.9423V14.4423C11.2501 14.6548 11.322 14.8329 11.4658 14.9767C11.6096 15.1204 11.7878 15.1923 12.0004 15.1923Z" />
	</svg>
);

const MaterialClose = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M12 13.0538L6.92689 18.1269C6.78844 18.2654 6.6144 18.3362 6.40479 18.3394C6.19519 18.3426 6.01795 18.2718 5.87309 18.1269C5.7282 17.982 5.65576 17.8064 5.65576 17.6C5.65576 17.3936 5.7282 17.218 5.87309 17.0731L10.9462 12L5.87309 6.92689C5.73462 6.78844 5.66379 6.6144 5.66059 6.40479C5.65737 6.19519 5.7282 6.01795 5.87309 5.87309C6.01795 5.7282 6.19359 5.65576 6.39999 5.65576C6.60639 5.65576 6.78202 5.7282 6.92689 5.87309L12 10.9462L17.0731 5.87309C17.2115 5.73462 17.3856 5.66379 17.5952 5.66059C17.8048 5.65737 17.982 5.7282 18.1269 5.87309C18.2718 6.01795 18.3442 6.19359 18.3442 6.39999C18.3442 6.60639 18.2718 6.78202 18.1269 6.92689L13.0538 12L18.1269 17.0731C18.2654 17.2115 18.3362 17.3856 18.3394 17.5952C18.3426 17.8048 18.2718 17.982 18.1269 18.1269C17.982 18.2718 17.8064 18.3442 17.6 18.3442C17.3936 18.3442 17.218 18.2718 17.0731 18.1269L12 13.0538Z" />
	</svg>
);

/**
 * The design system does not wrap icons — consumers install `lucide-react`
 * directly (declared as a `peerDependency`) and pair any icon with `iconStyles`
 * from `@agentero/design-system/lib` to enforce canonical sizing, color
 * inheritance, and shrink behavior.
 *
 * This page is a living reference for the icon system: sizes, color inheritance
 * via semantic tokens, and a sample set of the most-used icons.
 */
const meta: Meta = {
	title: 'Foundations/Icons',
	parameters: {
		layout: 'padded'
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

/**
 * Three canonical sizes — `sm` (14px, default), `md` (16px), `lg` (20px).
 * Apply via `iconStyles({ size })` on any SVG from `lucide-react`. Calling
 * `iconStyles()` with no args returns the default `sm`.
 *
 * @summary Canonical icon sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex items-end gap-8">
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className={iconStyles()} />
				<span className="text-xs">sm (14px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className={iconStyles({ size: 'md' })} />
				<span className="text-xs">md (16px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<ChevronRightIcon className={iconStyles({ size: 'lg' })} />
				<span className="text-xs">lg (20px)</span>
			</div>
		</div>
	)
};

/**
 * Icons inherit color via `currentColor`. Drive them from semantic tokens on
 * the parent (`text-icon-default-base-*`) so they stay in sync with the
 * surrounding UI state.
 *
 * @summary Color inheritance via semantic tokens
 */
export const Colors: Story = {
	render: () => (
		<div className="flex gap-8">
			<div className="flex flex-col items-center gap-2 text-icon-default-base-primary">
				<BellIcon className={iconStyles()} />
				<span className="text-xs">primary</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-icon-default-base-secondary">
				<BellIcon className={iconStyles()} />
				<span className="text-xs">secondary</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-icon-default-base-tertiary">
				<BellIcon className={iconStyles()} />
				<span className="text-xs">tertiary</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-bg-default-danger-primary">
				<TriangleAlertIcon className={iconStyles()} />
				<span className="text-xs">danger</span>
			</div>
			<div className="flex flex-col items-center gap-2 text-bg-default-positive-primary">
				<CheckIcon className={iconStyles()} />
				<span className="text-xs">positive</span>
			</div>
		</div>
	)
};

/**
 * A sample set of icons from `lucide-react`. The full catalogue (~1500 icons)
 * is available at https://lucide.dev/icons — import by name as needed.
 *
 * @summary Sample icon set
 */
export const Gallery: Story = {
	render: () => {
		const icons = [
			{ name: 'HomeIcon', Icon: HomeIcon },
			{ name: 'SearchIcon', Icon: SearchIcon },
			{ name: 'UserIcon', Icon: UserIcon },
			{ name: 'SettingsIcon', Icon: SettingsIcon },
			{ name: 'BellIcon', Icon: BellIcon },
			{ name: 'MailIcon', Icon: MailIcon },
			{ name: 'HeartIcon', Icon: HeartIcon },
			{ name: 'StarIcon', Icon: StarIcon },
			{ name: 'PlusIcon', Icon: PlusIcon },
			{ name: 'XIcon', Icon: XIcon },
			{ name: 'CheckIcon', Icon: CheckIcon },
			{ name: 'MenuIcon', Icon: MenuIcon },
			{ name: 'ChevronRightIcon', Icon: ChevronRightIcon },
			{ name: 'InfoIcon', Icon: InfoIcon },
			{ name: 'TriangleAlertIcon', Icon: TriangleAlertIcon },
			{ name: 'Trash2Icon', Icon: Trash2Icon },
			{ name: 'DownloadIcon', Icon: DownloadIcon },
			{ name: 'UploadIcon', Icon: UploadIcon },
			{ name: 'CopyIcon', Icon: CopyIcon },
			{ name: 'FilterIcon', Icon: FilterIcon }
		];

		return (
			<div className="grid grid-cols-4 gap-4 text-icon-default-base-primary sm:grid-cols-6">
				{icons.map(({ name, Icon }) => (
					<div
						key={name}
						className="flex flex-col items-center gap-2 rounded border border-slate-200 p-3">
						<Icon className={iconStyles({ size: 'lg' })} />
						<span className="text-xs text-icon-default-base-tertiary">{name}</span>
					</div>
				))}
			</div>
		);
	}
};

/**
 * Demonstrates the intended usage pattern: icons live inside composed
 * components (buttons, inputs, badges) that own their own sizing slot.
 *
 * @summary Icon within a button-like composition
 */
export const InComposition: Story = {
	render: () => (
		<div className="flex items-center gap-2 rounded-full bg-bg-button-primary-enable px-4 py-2 text-icon-button-primary-enable">
			<PlusIcon className={iconStyles()} />
			<span className="text-sm">Create agent</span>
		</div>
	)
};

/**
 * Side-by-side comparison of the icons currently shipping in master
 * (Material Symbols `opsz=24`, filled) against the proposed lucide
 * replacements. Each cell renders inside a 24×24 outlined box so the
 * **visual bounding box** of the glyph is comparable, not just the SVG
 * `viewBox`.
 *
 * Lucide ships icons at `stroke-width=2` with a generous interior padding
 * — at the same 24px container, the inked area is noticeably smaller than
 * a filled Material Symbol. Two mitigations are shown:
 *
 * - **Lucide stroke 2.5** — bumps the stroke weight, fills more of the
 *   bounding box visually without changing the size.
 * - **Lucide @ 28px** — renders the icon larger so the inked area matches
 *   Material Symbols. Requires component-level spacing adjustments.
 *
 * Use this story to decide whether lucide's native look is acceptable, or
 * whether the DS should switch to the Material Symbols pipeline (PR #40/#41).
 *
 * @summary Bounding-box parity check: Material Symbols vs lucide
 */
export const BoundingBoxComparison: Story = {
	render: () => {
		const rows = [
			{
				label: 'check-circle (success)',
				material: MaterialCheckCircle,
				lucide: CircleCheckIcon
			},
			{
				label: 'error-outline (danger)',
				material: MaterialErrorOutline,
				lucide: CircleAlertIcon
			},
			{
				label: 'warning (warning)',
				material: MaterialWarning,
				lucide: TriangleAlertIcon
			},
			{ label: 'close (dismiss)', material: MaterialClose, lucide: XIcon }
		];

		const cellBox =
			'flex h-6 w-6 items-center justify-center outline outline-1 outline-bg-default-base-tertiary';

		return (
			<div className="flex flex-col gap-6">
				<div className="grid grid-cols-[12rem_repeat(4,minmax(0,1fr))] items-center gap-x-6 gap-y-3 text-xs">
					<span className="text-text-default-base-secondary">icon</span>
					<span className="text-text-default-base-secondary">
						Material Symbols
						<br />
						<span className="text-text-default-base-tertiary">opsz=24, filled</span>
					</span>
					<span className="text-text-default-base-secondary">
						Lucide @ 24px
						<br />
						<span className="text-text-default-base-tertiary">stroke=2 (default)</span>
					</span>
					<span className="text-text-default-base-secondary">
						Lucide stroke 2.5
						<br />
						<span className="text-text-default-base-tertiary">heavier @ 24px</span>
					</span>
					<span className="text-text-default-base-secondary">
						Lucide @ 28px
						<br />
						<span className="text-text-default-base-tertiary">oversized to match</span>
					</span>

					{rows.map(({ label, material: Material, lucide: Lucide }) => (
						<>
							<span key={`${label}-label`} className="text-text-default-base-primary">
								{label}
							</span>
							<div key={`${label}-ms`} className="flex items-center">
								<div className={cellBox}>
									<Material className="size-6 text-icon-default-base-primary" />
								</div>
							</div>
							<div key={`${label}-lucide`} className="flex items-center">
								<div className={cellBox}>
									<Lucide className="size-6 text-icon-default-base-primary" />
								</div>
							</div>
							<div key={`${label}-lucide-25`} className="flex items-center">
								<div className={cellBox}>
									<Lucide className="size-6 text-icon-default-base-primary" strokeWidth={2.5} />
								</div>
							</div>
							<div key={`${label}-lucide-28`} className="flex items-center">
								<div className={cellBox}>
									<Lucide className="size-7 text-icon-default-base-primary" />
								</div>
							</div>
						</>
					))}
				</div>

				<p className="max-w-xl text-xs text-text-default-base-secondary">
					The outlined box on every cell is exactly 24×24. Compare how much of that box each glyph
					actually paints — that is the &ldquo;visual bounding box&rdquo; the designer is asking
					about. The viewBox attribute is identical across all four columns; only the geometry
					differs.
				</p>
			</div>
		);
	}
};

/**
 * Renders an Alert-shaped container with both the current master geometry
 * (Material Symbols inline, `size-5`/`size-6` icon slot) and the PR #20
 * geometry (lucide, `iconStyles({ size: 'md' })`/`iconStyles({ size: 'lg' })`
 * — i.e. `size-4`/`size-5`) so the visual delta the designer is seeing in
 * production-shaped UI is reproducible side by side.
 *
 * Two distinct effects combine here:
 *
 * 1. **Size shrink** — PR #20's `iconStyles` recipe tops out at `lg=20px`,
 *    so what was a 24px icon in master is now 20px (and the `sm` slot drops
 *    from 20px to 16px).
 * 2. **Interior padding** — lucide leaves ~2–3px of air inside its viewBox;
 *    Material Symbols `opsz=24` fills the box edge-to-edge.
 *
 * @summary Side-by-side Alert: master geometry vs PR #20 geometry
 */
export const InAlertContext: Story = {
	render: () => {
		const rows = [
			{
				key: 'success',
				bgClass: 'bg-bg-alert-primary-success',
				textClass: 'text-text-alert-primary-success',
				iconColorClass: 'text-icon-alert-primary-success',
				material: MaterialCheckCircle,
				lucide: CircleCheckIcon,
				title: 'Quote sent',
				body: 'The carrier received your request.'
			},
			{
				key: 'danger',
				bgClass: 'bg-bg-alert-primary-danger',
				textClass: 'text-text-alert-primary-danger',
				iconColorClass: 'text-icon-alert-primary-danger',
				material: MaterialErrorOutline,
				lucide: CircleAlertIcon,
				title: 'Submission failed',
				body: 'Carrier returned an error. Retry shortly.'
			},
			{
				key: 'warning',
				bgClass: 'bg-bg-alert-primary-warning',
				textClass: 'text-text-alert-primary-warning',
				iconColorClass: 'text-icon-alert-primary-warning',
				material: MaterialWarning,
				lucide: TriangleAlertIcon,
				title: 'Missing information',
				body: 'Three required fields need attention.'
			},
			{
				key: 'info',
				bgClass: 'bg-bg-alert-primary-info',
				textClass: 'text-text-alert-primary-info',
				iconColorClass: 'text-icon-alert-primary-info',
				material: MaterialErrorOutline,
				lucide: InfoIcon,
				title: 'Heads up',
				body: 'Effective dates updated for this carrier.'
			}
		];

		const renderColumn = (
			heading: string,
			subheading: string,
			alertSize: 'sm' | 'md',
			variant: 'master' | 'lucide' | 'lucide-xl'
		) => {
			const rootSize = alertSize === 'sm' ? 'px-4 py-3 gap-2' : 'px-8 py-6 gap-4';
			const contentSize = alertSize === 'sm' ? 'gap-1' : 'gap-2';
			const titleSize = alertSize === 'sm' ? 'text-sm' : 'text-lg';
			const paragraphSize = alertSize === 'sm' ? 'text-xs' : 'text-sm';

			const iconSizeClass =
				variant === 'master'
					? alertSize === 'sm'
						? 'size-5'
						: 'size-6'
					: variant === 'lucide-xl'
						? alertSize === 'sm'
							? 'size-5'
							: 'size-6'
						: alertSize === 'sm'
							? 'size-4'
							: 'size-5';

			return (
				<div className="flex flex-col gap-3">
					<div className="flex flex-col gap-0.5">
						<span className="text-sm font-semibold text-text-default-base-primary">{heading}</span>
						<span className="text-xs text-text-default-base-tertiary">{subheading}</span>
					</div>
					{rows.map(row => {
						const Icon = variant === 'master' ? row.material : row.lucide;
						const iconClass =
							variant === 'master'
								? cn('shrink-0 [&_path]:fill-current', iconSizeClass, row.iconColorClass)
								: cn('shrink-0', iconSizeClass, row.iconColorClass);
						return (
							<div
								key={`${row.key}-${variant}-${alertSize}`}
								className={cn('flex items-start rounded-md', rootSize, row.bgClass, row.textClass)}>
								<Icon className={iconClass} />
								<div className={cn('flex flex-col self-start', contentSize)}>
									<span className={cn('-mt-px font-semibold', titleSize)}>{row.title}</span>
									<span className={paragraphSize}>{row.body}</span>
								</div>
							</div>
						);
					})}
				</div>
			);
		};

		return (
			<div className="flex flex-col gap-8">
				<section className="flex flex-col gap-3">
					<h3 className="text-base font-semibold text-text-default-base-primary">
						Alert size <code>sm</code>
					</h3>
					<div className="grid grid-cols-3 gap-6">
						{renderColumn(
							'Master (today)',
							'Material Symbols · size-5 (20px footprint)',
							'sm',
							'master'
						)}
						{renderColumn(
							'PR #20 (lucide)',
							'lucide · iconStyles md = size-4 (16px footprint)',
							'sm',
							'lucide'
						)}
						{renderColumn(
							'PR #20 + iconStyles xl',
							'lucide · proposed xl = size-5 (20px footprint)',
							'sm',
							'lucide-xl'
						)}
					</div>
				</section>

				<section className="flex flex-col gap-3">
					<h3 className="text-base font-semibold text-text-default-base-primary">
						Alert size <code>md</code>
					</h3>
					<div className="grid grid-cols-3 gap-6">
						{renderColumn(
							'Master (today)',
							'Material Symbols · size-6 (24px footprint)',
							'md',
							'master'
						)}
						{renderColumn(
							'PR #20 (lucide)',
							'lucide · iconStyles lg = size-5 (20px footprint)',
							'md',
							'lucide'
						)}
						{renderColumn(
							'PR #20 + iconStyles xl',
							'lucide · proposed xl = size-6 (24px footprint)',
							'md',
							'lucide-xl'
						)}
					</div>
				</section>

				<p className="max-w-2xl text-xs text-text-default-base-secondary">
					The third column is what the Alert would render if <code>iconStyles</code> grew an{' '}
					<code>xl=24px</code> step and the Alert recipe pointed to it. The{' '}
					<strong>footprint reserved</strong> for the icon now matches master, which restores the
					external spacing (icon → text gap, component proportions) the designer is flagging. The
					glyph itself is still lucide stroke=2, so the inked content inside the box stays outlined
					rather than filled — but the surrounding rhythm of the component lines up with today.
				</p>
			</div>
		);
	}
};
