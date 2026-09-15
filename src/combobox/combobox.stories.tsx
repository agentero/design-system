import { useCallback, useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Command as CommandPrimitive } from 'cmdk';

import { Combobox } from '.';
import { Button } from '../button';
import { Command, commandRecipe } from '../command';
import { Input } from '../input';

/**
 * Combobox is a `Command` in a surface anchored to a trigger. The surface
 * itself is chrome-less — it positions and animates, nothing more — because
 * `Command.Root` already carries the border, radius, shadow and background.
 * Reach for `Popover` when the content has no chrome of its own.
 */
const meta = {
	title: 'Components/Combobox',
	component: Combobox.Root,
	tags: ['autodocs']
} satisfies Meta<typeof Combobox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const LINES_OF_BUSINESS = ['Condo', 'Dwelling Fire', 'Flood', 'Homeowners', 'Landlord'];

/** @summary Button trigger over a filterable list */
export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [value, setValue] = useState<string>();

		return (
			<Combobox.Root open={open} onOpenChange={setOpen}>
				<Combobox.Trigger asChild>
					<Button variant="secondary">{value ?? 'Select a line of business'}</Button>
				</Combobox.Trigger>
				<Combobox.Content label="Select a line of business">
					<Command.Root label="Search lines of business">
						<Command.Input placeholder="Search..." />
						<Command.List>
							{LINES_OF_BUSINESS.map(option => (
								<Command.Item
									key={option}
									onSelect={() => {
										setValue(option);
										setOpen(false);
									}}>
									{option}
								</Command.Item>
							))}
						</Command.List>
						<Command.Empty>No options found</Command.Empty>
					</Command.Root>
				</Combobox.Content>
			</Combobox.Root>
		);
	}
};

/**
 * The surface paints nothing of its own. Two borders on a combobox mean the
 * content was dropped in a `Popover.Content` instead of here.
 *
 * @summary Panel chrome belongs to Command, not the floating surface
 */
export const ChromeLessSurface: Story = {
	render: () => (
		<Combobox.Root defaultOpen>
			<Combobox.Trigger asChild>
				<Button variant="secondary">Open</Button>
			</Combobox.Trigger>
			<Combobox.Content label="Select a line of business">
				<Command.Root label="Search lines of business">
					<Command.Input placeholder="Search..." />
					<Command.List>
						{LINES_OF_BUSINESS.map(option => (
							<Command.Item key={option}>{option}</Command.Item>
						))}
					</Command.List>
					<Command.Empty>No options found</Command.Empty>
				</Command.Root>
			</Combobox.Content>
		</Combobox.Root>
	)
};

/**
 * The surface is 300px wide by default. When the trigger is a full-width form
 * control, match it with `w-(--radix-popover-trigger-width)` instead.
 *
 * @summary Match the floating surface to its trigger width
 */
export const MatchingTriggerWidth: Story = {
	render: () => (
		<div className="w-125">
			<Combobox.Root defaultOpen>
				<Combobox.Trigger asChild>
					<Button variant="secondary" align="justify" className="w-full">
						Select a line of business
					</Button>
				</Combobox.Trigger>
				<Combobox.Content
					label="Select a line of business"
					className="w-(--radix-popover-trigger-width)">
					<Command.Root label="Search lines of business">
						<Command.Input placeholder="Search..." />
						<Command.List>
							{LINES_OF_BUSINESS.map(option => (
								<Command.Item key={option}>{option}</Command.Item>
							))}
						</Command.List>
						<Command.Empty>No options found</Command.Empty>
					</Command.Root>
				</Combobox.Content>
			</Combobox.Root>
		</div>
	)
};

/**
 * Keep the input and list under one Command.Root so arrow keys and Enter reach
 * the same selection state across the portal. The input owns combobox semantics;
 * the surface is presentational and leaves focus in the input.
 * cmdk's unstyled Input composes with the DS Input through asChild, keeping
 * filtering and active-option announcements inside cmdk.
 *
 * @summary Search input anchoring a keyboard-accessible list
 */
export const AnchoredToTheSearchField: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [search, setSearch] = useState('');
		const [listId, setListId] = useState<string>();
		const listRef = useCallback((node: HTMLDivElement | null) => setListId(node?.id), []);
		const inputRef = useRef<HTMLInputElement>(null);

		return (
			<Combobox.Root open={open} onOpenChange={setOpen}>
				<Command.Root
					label="Search lines of business"
					className="overflow-visible border-0 bg-transparent shadow-none">
					<Combobox.Anchor asChild>
						<CommandPrimitive.Input
							asChild
							value={search}
							onValueChange={value => {
								setSearch(value);
								setOpen(true);
							}}>
							<Input
								ref={inputRef}
								size="sm"
								placeholder="Search..."
								aria-expanded={open}
								aria-controls={open ? listId : undefined}
								onFocus={() => setOpen(true)}
								onClick={() => setOpen(true)}
								onKeyDown={event => {
									if (event.key === 'ArrowDown' || event.key === 'ArrowUp') setOpen(true);
									if (event.key === 'Enter' && !open) event.preventDefault();
								}}
							/>
						</CommandPrimitive.Input>
					</Combobox.Anchor>
					<Combobox.Content
						role="presentation"
						className="w-(--radix-popover-trigger-width)"
						onOpenAutoFocus={event => event.preventDefault()}
						onCloseAutoFocus={event => event.preventDefault()}
						onInteractOutside={event => {
							if (inputRef.current?.contains(event.target as Node)) event.preventDefault();
						}}>
						<div className={commandRecipe().root()}>
							<Command.List ref={listRef} label="Lines of business">
								{LINES_OF_BUSINESS.map(option => (
									<Command.Item
										key={option}
										value={option}
										onSelect={() => {
											setSearch(option);
											setOpen(false);
										}}>
										{option}
									</Command.Item>
								))}
							</Command.List>
							<Command.Empty>No options found</Command.Empty>
						</div>
					</Combobox.Content>
				</Command.Root>
			</Combobox.Root>
		);
	}
};

/** @summary Content portalled into a custom container */
export const CustomContainer: Story = {
	render: () => {
		const [container, setContainer] = useState<HTMLDivElement | null>(null);
		return (
			<>
				<div ref={setContainer} data-testid="combobox-container" />
				{container && (
					<Combobox.Root>
						<Combobox.Trigger asChild>
							<Button>Open options</Button>
						</Combobox.Trigger>
						<Combobox.Content container={container} aria-label="Custom options">
							<Command.Root label="Search custom options">
								<Command.Input />
								<Command.List>
									<Command.Item>Homeowners</Command.Item>
								</Command.List>
							</Command.Root>
						</Combobox.Content>
					</Combobox.Root>
				)}
			</>
		);
	}
};

/** @summary External portal with Content's automatic portal disabled */
export const ExternalPortal: Story = {
	render: () => {
		const [container, setContainer] = useState<HTMLDivElement | null>(null);
		return (
			<>
				<h2 id="external-options-label">External options</h2>
				<div ref={setContainer} data-testid="external-combobox-container" />
				{container && (
					<Combobox.Root defaultOpen>
						<Combobox.Trigger asChild>
							<Button>Open options</Button>
						</Combobox.Trigger>
						<Combobox.Portal container={container}>
							<Combobox.Content portalled={false} aria-labelledby="external-options-label">
								<Command.Root label="Search external options">
									<Command.Input />
									<Command.List>
										<Command.Item>Homeowners</Command.Item>
									</Command.List>
								</Command.Root>
							</Combobox.Content>
						</Combobox.Portal>
					</Combobox.Root>
				)}
			</>
		);
	}
};

/**
 * Marketplace uses the default 4px offset. Producerflow's legacy surface uses 8px.
 *
 * @summary Preserve Producerflow's legacy spacing with sideOffset
 */
export const ProducerflowSpacing: Story = {
	render: () => (
		<Combobox.Root defaultOpen>
			<Combobox.Trigger asChild>
				<Button>Choose a state</Button>
			</Combobox.Trigger>
			<Combobox.Content label="Choose a state" sideOffset={8} side="bottom" avoidCollisions={false}>
				<Command.Root label="Search states">
					<Command.Input />
					<Command.List>
						<Command.Item>California</Command.Item>
					</Command.List>
				</Command.Root>
			</Combobox.Content>
		</Combobox.Root>
	)
};
