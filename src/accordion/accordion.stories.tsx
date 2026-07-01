import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Accordion } from './accordion';
import { IconKeyboardArrowDown } from './icons';

const meta = {
	title: 'Components/Accordion',
	component: Accordion.Root,
	tags: ['autodocs']
} satisfies Meta<typeof Accordion.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

const FAQS = [
	{
		value: 'covered',
		question: 'What is covered?',
		answer:
			'Your policy covers the dwelling, personal property, and liability up to the stated limits. Review your declarations page for exact figures.'
	},
	{
		value: 'claim',
		question: 'How do I file a claim?',
		answer:
			'Open a claim from the dashboard or call the carrier directly. You will need your policy number and the date of loss.'
	},
	{
		value: 'payment',
		question: 'When is my payment due?',
		answer:
			'Premiums are billed monthly on the policy anniversary day. You can switch to annual billing from the billing settings.'
	}
] as const;

const FaqItems = () =>
	FAQS.map(({ value, question, answer }) => (
		<Accordion.Item key={value} value={value}>
			<Accordion.Trigger>{question}</Accordion.Trigger>
			<Accordion.Content>{answer}</Accordion.Content>
		</Accordion.Item>
	));

/** Exclusive accordion: one item open at a time, `collapsible` lets it close. */
export const Default: Story = {
	args: {
		type: 'single',
		collapsible: true,
		enclosed: false,
		disabled: false
	},
	argTypes: {
		type: {
			control: 'radio',
			options: ['single', 'multiple'],
			description: 'single = one item open at a time; multiple = items open independently'
		},
		collapsible: {
			control: 'boolean',
			description: 'single only — allows closing the open item (reach an all-closed state)'
		},
		enclosed: { control: 'boolean', description: 'Render the group as a bordered card' },
		disabled: { control: 'boolean', description: 'Disable every item' }
	},
	render: args => (
		<Accordion.Root {...args}>
			<FaqItems />
		</Accordion.Root>
	)
};

/** `type="multiple"` lets several sections stay open at once. */
export const Multiple: Story = {
	args: {
		type: 'multiple'
	},
	render: () => (
		<Accordion.Root type="multiple" defaultValue={['covered', 'payment']}>
			<FaqItems />
		</Accordion.Root>
	)
};

/** `enclosed` wraps the group in a bordered card (default borderless on top). */
export const Enclosed: Story = {
	args: {
		type: 'multiple'
	},
	render: () => (
		<div className="flex flex-col gap-8">
			<Accordion.Root type="multiple" defaultValue={['covered']}>
				<FaqItems />
			</Accordion.Root>
			<Accordion.Root type="multiple" enclosed defaultValue={['claim']}>
				<FaqItems />
			</Accordion.Root>
		</div>
	)
};

/** `asChild` delegates the trigger to a custom element; the built-in chevron is omitted. */
export const CustomTrigger: Story = {
	args: {
		type: 'single',
		collapsible: true
	},
	render: () => (
		<Accordion.Root type="single" collapsible defaultValue="covered">
			<Accordion.Item value="covered">
				<Accordion.Trigger asChild>
					<button className="group flex w-full items-center gap-2 py-4 text-left text-base font-semibold">
						<IconKeyboardArrowDown className="size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
						What is covered?
					</button>
				</Accordion.Trigger>
				<Accordion.Content>{FAQS[0].answer}</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	)
};

/** The consumer controls title weight/size via the children passed to `Trigger`. */
export const StyledTitles: Story = {
	args: {
		type: 'single',
		collapsible: true
	},
	render: args => (
		<Accordion.Root {...args}>
			{FAQS.map(({ value, question, answer }) => (
				<Accordion.Item key={value} value={value}>
					<Accordion.Trigger>
						<span className="text-lg font-bold">{question}</span>
					</Accordion.Trigger>
					<Accordion.Content>{answer}</Accordion.Content>
				</Accordion.Item>
			))}
		</Accordion.Root>
	)
};

/** `collapsible` lets clicking the open item close it (reach an all-closed state). */
export const ExpandCollapse: Story = {
	args: {
		type: 'single',
		collapsible: true
	},
	render: args => (
		<Accordion.Root {...args}>
			<FaqItems />
		</Accordion.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /what is covered/i });

		await expect(trigger).toHaveAttribute('aria-expanded', 'false');

		await userEvent.click(trigger);
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		await expect(trigger).toHaveAttribute('data-state', 'open');
		await expect(await canvas.findByText(/your policy covers the dwelling/i)).toBeVisible();

		await userEvent.click(trigger);
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
	}
};

/** Without `collapsible`, clicking the already-open item keeps it open. */
export const NonCollapsible: Story = {
	args: {
		type: 'single',
		collapsible: false,
		defaultValue: 'covered'
	},
	render: args => (
		<Accordion.Root {...args}>
			<FaqItems />
		</Accordion.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /what is covered/i });

		await expect(trigger).toHaveAttribute('aria-expanded', 'true');

		await userEvent.click(trigger);
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		await expect(trigger).toHaveAttribute('data-state', 'open');
	}
};
