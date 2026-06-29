'use client';

import { tv } from 'tailwind-variants';

import { Button } from '../button';
import { IconClose } from './icons';
import type { SlideshowItem } from './slideshow';

// `size` scales the artwork SVG; `colorized` forces its paths white for colored slides.
export const slideRecipe = tv({
	slots: {
		root: [
			'flex shrink-0 grow-0 basis-full items-center',
			'min-h-82 min-w-0 text-balance text-text-default-base-inverse-primary'
		],
		image: 'relative grid h-full place-content-center'
	},
	variants: {
		size: {
			md: { image: '[&_svg]:size-20' },
			lg: { image: '[&_svg]:size-48' }
		},
		colorized: {
			true: { image: '[&_svg_path]:fill-icon-default-base-inverse-primary' }
		}
	},
	defaultVariants: {
		size: 'md',
		colorized: true
	}
});

type SlideProps = {
	item: SlideshowItem;
};

export const Slide = ({ item }: SlideProps) => {
	const { title, body, image, cta, onDismiss } = item;
	const { action, label, ...restCtaProps } = cta;
	const styles = slideRecipe({ size: image.size, colorized: image.colorized });

	return (
		<div className={styles.root()}>
			{onDismiss && (
				<div className="absolute top-4 right-4 -z-hide">
					<Button
						variant="ghost"
						size="sm"
						onClick={onDismiss}
						aria-label="Dismiss slide"
						className="border-transparent bg-transparent [&_svg]:fill-icon-default-base-inverse-primary">
						<IconClose />
					</Button>
				</div>
			)}
			<div className="grid h-full flex-1 auto-rows-[1fr] gap-0 md:grid-cols-12">
				<div className="grid items-center md:col-span-5">
					<div className="flex flex-col justify-center gap-6 py-16 ps-16">
						<div className="flex flex-col gap-4">
							{typeof title === 'string' ? (
								<h3 className="text-2xl leading-9 font-bold">{title}</h3>
							) : (
								title
							)}
							{typeof body === 'string' ? <p className="text-sm leading-normal">{body}</p> : body}
						</div>
						<div className="flex">
							<Button size="lg" variant="secondary" onClick={action} {...restCtaProps}>
								{label}
							</Button>
						</div>
					</div>
				</div>
				<div className="md:col-span-7">
					<div className={styles.image()}>{image.content}</div>
				</div>
			</div>
		</div>
	);
};
