'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { tv } from 'tailwind-variants';

import type { ButtonProps } from '../button';
import { Slide } from './slide';

const DEFAULT_BG = 'var(--color-bg-default-base-primary)';
const DEFAULT_DELAY = 10000;

export const slideshowRecipe = tv({
	slots: {
		root: [
			'relative overflow-hidden rounded-lg select-none',
			'border border-solid border-border-default-base-primary',
			'transition-colors duration-500'
		],
		body: 'flex',
		nav: 'absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5'
	}
});

// No variants → slot classes are constant; compute once at module load, not per render.
const slideshowSlots = slideshowRecipe();

export const slideshowNavButtonRecipe = tv({
	base: [
		'relative size-6 cursor-pointer outline-none',
		'focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary',
		'before:absolute before:top-[calc(50%-0.0625rem)] before:left-0 before:h-0.5 before:w-6',
		'before:origin-left before:rounded-[0.0625rem] before:opacity-50 before:content-[""]'
	],
	variants: {
		theme: {
			light: 'before:bg-bg-default-base-primary',
			dark: 'before:bg-bg-default-base-inverse-primary'
		},
		active: {
			true: 'before:opacity-100'
		}
	},
	defaultVariants: {
		theme: 'light'
	}
});

export type SlideshowItem = {
	id: string;
	title: ReactNode;
	body: ReactNode;
	image: {
		content: ReactNode;
		size?: 'md' | 'lg';
		colorized?: boolean;
	};
	cta: {
		label: string;
		action: () => void;
	} & ButtonProps;
	color?: {
		bg?: string;
		nav?: 'light' | 'dark';
	};
	onDismiss?: () => void;
};

type SlideshowProps = {
	items: SlideshowItem[];
	delay?: number;
};

/**
 * Autoplaying carousel of promotional slides, each with a headline, body, CTA,
 * and artwork. The viewport cross-fades to each slide's background, dots jump
 * between slides, and slides may be dismissed. A single slide renders static.
 *
 * @summary Autoplaying carousel of dismissable promotional slides
 */
export const Slideshow = ({ items: initialItems, delay = DEFAULT_DELAY }: SlideshowProps) => {
	const [items, setItems] = useState(initialItems);
	const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay({ playOnInit: true, delay })]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	// Clamp so a dismissed slide can't leave the index past the end of the list.
	const activeIndex = Math.min(selectedIndex, items.length - 1);
	const activeColor = items[activeIndex]?.color;
	const bgColor = activeColor?.bg ?? DEFAULT_BG;
	const navTheme = activeColor?.nav ?? 'light';

	const removeSlide = useCallback((item: SlideshowItem) => {
		item.onDismiss?.();
		setItems(prev => prev.filter(current => current.id !== item.id));
	}, []);

	const scrollToSlide = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

	useEffect(() => {
		if (!emblaApi) {
			return;
		}
		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on('select', onSelect);
		return () => {
			emblaApi.off('select', onSelect);
		};
	}, [emblaApi]);

	if (!items.length) {
		return null;
	}

	if (items.length === 1) {
		const single = items[0]!;
		return (
			<div className={slideshowSlots.root()} data-slot="slideshow" style={{ background: bgColor }}>
				<Slide
					item={{
						...single,
						onDismiss: single.onDismiss ? () => removeSlide(single) : undefined
					}}
				/>
			</div>
		);
	}

	return (
		<div
			className={slideshowSlots.root()}
			ref={emblaRef}
			data-slot="slideshow"
			style={{ background: bgColor }}>
			<div className={slideshowSlots.body()}>
				{items.map(item => (
					<Slide
						key={item.id}
						item={{
							...item,
							onDismiss: item.onDismiss ? () => removeSlide(item) : undefined
						}}
					/>
				))}
			</div>
			<nav
				className={slideshowSlots.nav()}
				aria-label="Slideshow navigation"
				data-slot="slideshow-nav">
				{items.map(({ id }, index) => {
					const active = activeIndex === index;
					return (
						<button
							type="button"
							key={id}
							aria-label={`Go to slide ${index + 1}`}
							aria-current={active ? 'true' : undefined}
							className={slideshowNavButtonRecipe({ theme: navTheme, active })}
							onClick={() => scrollToSlide(index)}
						/>
					);
				})}
			</nav>
		</div>
	);
};
