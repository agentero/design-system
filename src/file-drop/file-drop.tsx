'use client';

import {
	ComponentProps,
	createContext,
	DragEvent as ReactDragEvent,
	RefObject,
	use,
	useEffect,
	useRef,
	useState
} from 'react';

import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { Button } from '../button';

/** An already-uploaded file (edit flows). */
export type FileDropRemoteFile = { name: string; url: string };
/** A file held by FileDrop: a fresh native `File` or an uploaded {@link FileDropRemoteFile}. */
export type FileDropFile = File | FileDropRemoteFile;

export type FileDropRejectionReason = 'type' | 'size' | 'count';
export type FileDropRejection = { file: File; reason: FileDropRejectionReason };

/** @summary Tailwind-variants recipe backing the FileDrop slots */
export const fileDropRecipe = tv({
	slots: {
		root: 'flex flex-col gap-3',
		// drag/invalid/disabled are driven by data-* on the zone, not variants
		zone: [
			'flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border-default-base-primary',
			'px-6 py-10 text-center text-sm text-text-default-base-secondary transition-colors',
			'data-dragging:bg-bg-default-base-secondary',
			'data-invalid:border-border-input-destructive',
			'data-disabled:pointer-events-none data-disabled:opacity-50'
		],
		trigger: [
			'cursor-pointer rounded-sm font-semibold text-text-default-base-primary underline underline-offset-2',
			'outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary',
			'disabled:cursor-not-allowed'
		],
		list: 'flex flex-col gap-2',
		item: 'flex items-center gap-3 rounded-md border border-border-default-base-primary px-3 py-2',
		preview:
			'flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-bg-default-base-secondary'
	}
});

const slots = fileDropRecipe();

const isRemote = (file: FileDropFile): file is FileDropRemoteFile => 'url' in file;

const matchesAccept = (file: File, accept = ''): boolean => {
	const patterns = accept
		.split(',')
		.map(pattern => pattern.trim().toLowerCase())
		.filter(Boolean);
	if (patterns.length === 0) return true;

	const name = file.name.toLowerCase();
	const type = file.type.toLowerCase();

	return patterns.some(pattern => {
		if (pattern.startsWith('.')) return name.endsWith(pattern);
		if (pattern.endsWith('/*')) return type.startsWith(pattern.slice(0, -1));
		return type === pattern;
	});
};

type FileDropContextValue = {
	value: FileDropFile[];
	disabled: boolean;
	invalid: boolean;
	multiple: boolean;
	accept?: string;
	inputRef: RefObject<HTMLInputElement | null>;
	openFileDialog: () => void;
	removeFile: (file: FileDropFile) => void;
	addFiles: (files: FileList | File[] | null) => void;
};

const FileDropContext = createContext<FileDropContextValue | null>(null);

/** @summary Access FileDrop state and actions from context */
export const useFileDrop = () => {
	const context = use(FileDropContext);
	if (!context) {
		throw new Error('useFileDrop must be used within a FileDrop');
	}
	return context;
};

/* --------------- Sub-components --------------- */

const carriesFiles = (event: ReactDragEvent) => event.dataTransfer.types.includes('Files');

/** Drop target; clicking it opens the file dialog (nested interactive elements keep their own behavior). */
const FileDropZone = ({
	className,
	children,
	onClick,
	onDragEnter,
	onDragOver,
	onDragLeave,
	onDrop,
	...props
}: ComponentProps<'div'>) => {
	const { disabled, invalid, addFiles, openFileDialog } = useFileDrop();
	const [isDragging, setIsDragging] = useState(false);
	// enter/leave fire per child element; only stop dragging when the counter drains
	const dragDepth = useRef(0);

	return (
		<div
			data-slot="file-drop-zone"
			data-dragging={isDragging || undefined}
			data-invalid={invalid || undefined}
			data-disabled={disabled || undefined}
			className={cn(slots.zone(), className)}
			onClick={event => {
				onClick?.(event);
				if (event.defaultPrevented) return;
				if ((event.target as HTMLElement).closest('button, a, input, label')) return;
				openFileDialog();
			}}
			onDragEnter={event => {
				onDragEnter?.(event);
				if (event.defaultPrevented) return;
				event.preventDefault();
				if (disabled || !carriesFiles(event)) return;
				dragDepth.current += 1;
				setIsDragging(true);
			}}
			onDragOver={event => {
				onDragOver?.(event);
				// always allow drop so stray payloads (text, links) get swallowed instead of navigating
				event.preventDefault();
			}}
			onDragLeave={event => {
				onDragLeave?.(event);
				event.preventDefault();
				dragDepth.current = Math.max(0, dragDepth.current - 1);
				if (dragDepth.current === 0) setIsDragging(false);
			}}
			onDrop={event => {
				onDrop?.(event);
				dragDepth.current = 0;
				setIsDragging(false);
				if (event.defaultPrevented) return;
				event.preventDefault();
				if (!disabled) addFiles(event.dataTransfer.files);
			}}
			{...props}>
			{children}
		</div>
	);
};

type FileDropTriggerProps = ComponentProps<'button'> & { asChild?: boolean };

const FileDropTrigger = ({ asChild, className, onClick, ...props }: FileDropTriggerProps) => {
	const { openFileDialog, disabled } = useFileDrop();
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="file-drop-trigger"
			// asChild: the child owns its styling (e.g. a DS Button) — don't inject the link look
			className={asChild ? className : cn(slots.trigger(), className)}
			onClick={event => {
				onClick?.(event);
				if (!event.defaultPrevented) openFileDialog();
			}}
			{...(asChild
				? { 'aria-disabled': disabled || undefined, 'data-disabled': disabled || undefined }
				: { type: 'button', disabled })}
			{...props}
		/>
	);
};

type FileDropInputProps = Omit<ComponentProps<'input'>, 'type' | 'accept' | 'multiple'>;

/** Hidden file input (out of the tab order — the Trigger is the keyboard path); give it an accessible name. */
const FileDropInput = ({ className, onChange, ref, ...props }: FileDropInputProps) => {
	const { inputRef, accept, multiple, disabled, invalid, addFiles } = useFileDrop();

	return (
		<input
			ref={node => {
				inputRef.current = node;
				if (typeof ref === 'function') ref(node);
				else if (ref) ref.current = node;
			}}
			type="file"
			accept={accept}
			multiple={multiple}
			disabled={disabled}
			aria-invalid={invalid || undefined}
			tabIndex={-1}
			data-slot="file-drop-input"
			className={cn('sr-only', className)}
			onChange={event => {
				onChange?.(event);
				addFiles(event.target.files);
				event.target.value = '';
			}}
			{...props}
		/>
	);
};

const FileDropList = ({ className, ...props }: ComponentProps<'ul'>) => (
	<ul data-slot="file-drop-list" className={cn(slots.list(), className)} {...props} />
);

const FileDropItem = ({ className, ...props }: ComponentProps<'li'>) => (
	<li data-slot="file-drop-item" className={cn(slots.item(), className)} {...props} />
);

type FileDropRemoveProps = ComponentProps<typeof Button> & { file: FileDropFile };

/**
 * Removes `file` (must be the same reference held in `value`). A DS `Button`
 * (ghost/sm) — pass an `aria-label` and an icon element child.
 */
const FileDropRemove = ({ file, onClick, ...props }: FileDropRemoveProps) => {
	const { removeFile, disabled } = useFileDrop();

	return (
		<Button
			type="button"
			variant="ghost"
			size="sm"
			iconOnly
			disabled={disabled}
			data-slot="file-drop-remove"
			onClick={event => {
				onClick?.(event);
				if (event.defaultPrevented) return;
				const root = event.currentTarget.closest<HTMLElement>('[data-slot="file-drop"]');
				const removes = root
					? Array.from(root.querySelectorAll<HTMLElement>('[data-slot="file-drop-remove"]'))
					: [];
				const index = removes.indexOf(event.currentTarget);
				removeFile(file);
				// the focused button unmounts with its row — keep keyboard focus in the list
				requestAnimationFrame(() => {
					if (!root) return;
					const remaining = Array.from(
						root.querySelectorAll<HTMLElement>('[data-slot="file-drop-remove"]')
					);
					const target =
						remaining[Math.min(index, remaining.length - 1)] ??
						root.querySelector<HTMLElement>('[data-slot="file-drop-trigger"]');
					target?.focus();
				});
			}}
			{...props}
		/>
	);
};

const usePreviewUrl = (file: FileDropFile): string | undefined => {
	const [objectUrl, setObjectUrl] = useState<string>();

	useEffect(() => {
		if (isRemote(file) || !file.type.startsWith('image/')) {
			setObjectUrl(undefined);
			return;
		}
		const url = URL.createObjectURL(file);
		setObjectUrl(url);
		return () => URL.revokeObjectURL(url);
	}, [file]);

	return isRemote(file) ? file.url : objectUrl;
};

type FileDropPreviewProps = ComponentProps<'div'> & { file: FileDropFile };

/** Opt-in decorative thumbnail (`alt=""`) — pair it with visible file name text; falls back to the name. */
const FileDropPreview = ({ file, className, ...props }: FileDropPreviewProps) => {
	const url = usePreviewUrl(file);

	return (
		<div data-slot="file-drop-preview" className={cn(slots.preview(), className)} {...props}>
			{url ? (
				<img src={url} alt="" className="size-full object-cover" />
			) : (
				<span className="truncate px-1 text-2xs text-text-default-base-tertiary">{file.name}</span>
			)}
		</div>
	);
};

/* --------------- Root --------------- */

type FileDropProps = {
	value: FileDropFile[];
	onValueChange: (files: FileDropFile[]) => void;
	/** Comma-separated: extensions (`.pdf`), wildcard (`image/*`), or exact MIME. */
	accept?: string;
	/** Per-file max size in bytes. */
	maxSize?: number;
	maxFiles?: number;
	multiple?: boolean;
	disabled?: boolean;
	/** Reflects an external error (e.g. form field) via `data-invalid` and `aria-invalid`. */
	invalid?: boolean;
	onReject?: (rejections: FileDropRejection[]) => void;
} & Omit<ComponentProps<'div'>, 'onDrop' | 'onDragEnter' | 'onDragOver' | 'onDragLeave'>;

/**
 * Composable, controlled, form-agnostic drag-and-drop file picker. Validation
 * (`accept`/`maxSize`/`maxFiles`) runs on add and reports through `onReject`.
 *
 * @summary Composable drag-and-drop file picker
 *
 * @example
 * <FileDrop value={files} onValueChange={setFiles} accept="image/*" maxSize={5_000_000}>
 *   <FileDrop.Zone>
 *     <UploadIcon />
 *     <p>Drag & drop or <FileDrop.Trigger>browse</FileDrop.Trigger></p>
 *     <FileDrop.Input aria-label="Upload file" />
 *   </FileDrop.Zone>
 *   <FileDrop.List>
 *     {files.map((file, index) => (
 *       <FileDrop.Item key={index}>
 *         <FileDrop.Preview file={file} />
 *         <span>{file.name}</span>
 *         <FileDrop.Remove file={file} aria-label={`Remove ${file.name}`}><CloseIcon /></FileDrop.Remove>
 *       </FileDrop.Item>
 *     ))}
 *   </FileDrop.List>
 * </FileDrop>
 */
export const FileDrop = ({
	value,
	onValueChange,
	accept,
	maxSize,
	maxFiles,
	multiple = false,
	disabled = false,
	invalid = false,
	onReject,
	className,
	children,
	...props
}: FileDropProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [announcement, setAnnouncement] = useState('');

	const openFileDialog = () => {
		if (!disabled) inputRef.current?.click();
	};

	const addFiles = (incoming: FileList | File[] | null) => {
		if (disabled || !incoming) return;

		const accepted: File[] = [];
		const rejected: FileDropRejection[] = [];

		for (const file of Array.from(incoming)) {
			if (!matchesAccept(file, accept)) {
				rejected.push({ file, reason: 'type' });
			} else if (maxSize !== undefined && file.size > maxSize) {
				rejected.push({ file, reason: 'size' });
			} else {
				accepted.push(file);
			}
		}

		// single mode replaces the current file; multiple appends up to maxFiles
		const kept = multiple ? value : [];
		const room = Math.max(0, (multiple ? (maxFiles ?? Infinity) : 1) - kept.length);
		const toAdd = accepted.slice(0, room);
		for (const file of accepted.slice(room)) rejected.push({ file, reason: 'count' });

		if (toAdd.length > 0) {
			onValueChange([...kept, ...toAdd]);
			setAnnouncement(`${toAdd.map(file => file.name).join(', ')} added`);
		}
		if (rejected.length > 0) onReject?.(rejected);
	};

	const removeFile = (file: FileDropFile) => {
		onValueChange(value.filter(current => current !== file));
		setAnnouncement(`${file.name} removed`);
	};

	return (
		<FileDropContext
			value={{
				value,
				disabled,
				invalid,
				multiple,
				accept,
				inputRef,
				openFileDialog,
				removeFile,
				addFiles
			}}>
			<div data-slot="file-drop" className={cn(slots.root(), className)} {...props}>
				{children}
				<span role="status" data-slot="file-drop-status" className="sr-only">
					{announcement}
				</span>
			</div>
		</FileDropContext>
	);
};

FileDrop.Zone = FileDropZone;
FileDrop.Trigger = FileDropTrigger;
FileDrop.Input = FileDropInput;
FileDrop.List = FileDropList;
FileDrop.Item = FileDropItem;
FileDrop.Remove = FileDropRemove;
FileDrop.Preview = FileDropPreview;

export type { FileDropProps };
