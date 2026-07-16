'use client';

import {
	ComponentProps,
	createContext,
	DragEvent as ReactDragEvent,
	PropsWithChildren,
	RefObject,
	use,
	useEffect,
	useId,
	useRef,
	useState
} from 'react';

import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * A file held by FileDrop: either a freshly-selected native `File`, or a
 * descriptor for an already-uploaded remote file (edit flows). Both expose a
 * `name`, so consumers can render either uniformly.
 *
 * @summary Union of a native `File` and a `{ name, url }` remote descriptor
 */
export type RemoteFile = { name: string; url: string };
export type FileDropFile = File | RemoteFile;

/** Why a dropped/selected file was rejected: wrong `type`, over `maxSize`, or over `maxFiles`. */
export type FileDropRejectionReason = 'type' | 'size' | 'count';
export type FileDropRejection = { file: File; reason: FileDropRejectionReason };

/**
 * Style recipe for FileDrop. Slots cover the drop `zone`, the `trigger` that
 * opens the file dialog, and the selected-file `list`/`item`/`preview`/`remove`
 * pieces. Drag, invalid, and disabled states are driven by `data-*` attributes
 * on the zone rather than variants, so they compose with Tailwind selectors.
 *
 * @summary Tailwind-variants recipe backing the FileDrop slots
 */
export const fileDropRecipe = tv({
	slots: {
		root: 'flex flex-col gap-3',
		zone: [
			'flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border-default-base-primary',
			'px-6 py-10 text-center text-sm text-text-default-base-secondary transition-colors',
			'data-dragging:bg-bg-default-base-secondary',
			'data-invalid:border-border-tag-danger',
			'data-disabled:pointer-events-none data-disabled:opacity-50'
		],
		trigger:
			'cursor-pointer font-semibold text-text-default-base-primary underline underline-offset-2 outline-none disabled:cursor-not-allowed',
		list: 'flex flex-col gap-2',
		item: 'flex items-center gap-3 rounded-md border border-border-default-base-primary px-3 py-2',
		preview:
			'flex size-10 shrink-0 items-center justify-center overflow-hidden rounded bg-bg-default-base-secondary',
		remove:
			'ml-auto cursor-pointer text-text-default-base-secondary outline-none hover:text-text-default-base-primary disabled:cursor-not-allowed'
	}
});

const slots = fileDropRecipe();

/** Returns the display name for either a native `File` or a remote descriptor. */
const getFileName = (file: FileDropFile): string => file.name;

/**
 * Matches a file against a comma-separated `accept` string. Supports extensions
 * (`.pdf`), wildcard MIME (`image/*`), and exact MIME (`application/pdf`). An
 * empty/absent `accept` matches everything.
 */
const matchesAccept = (file: File, accept?: string): boolean => {
	if (!accept) return true;
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
	inputId: string;
	inputRef: RefObject<HTMLInputElement | null>;
	isDragging: boolean;
	openFileDialog: () => void;
	removeFile: (file: FileDropFile) => void;
	addFiles: (files: FileList | File[] | null) => void;
	setDragging: (dragging: boolean) => void;
};

const FileDropContext = createContext<FileDropContextValue | null>(null);

/**
 * Access the FileDrop context (value, drag state, and file actions). Must be
 * called within a `FileDrop` tree.
 *
 * @summary Read FileDrop state and actions from context
 */
export const useFileDrop = () => {
	const context = use(FileDropContext);
	if (!context) {
		throw new Error('useFileDrop must be used within a FileDrop');
	}
	return context;
};

const FileDropItemContext = createContext<FileDropFile | null>(null);

/* --------------- Sub-components --------------- */

/**
 * Droppable area. Handles drag-and-drop, reflects drag/invalid/disabled via
 * `data-dragging`, `data-invalid`, and `data-disabled`, and is where you place
 * the empty-state content, icon, and `FileDrop.Trigger`.
 *
 * @summary Drop target with drag/invalid/disabled data-state
 */
const FileDropZone = ({ className, children, ...props }: ComponentProps<'div'>) => {
	const { isDragging, disabled, invalid, setDragging, addFiles } = useFileDrop();
	const dragDepth = useRef(0);

	const onDragEnter = (event: ReactDragEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (disabled) return;
		dragDepth.current += 1;
		setDragging(true);
	};

	const onDragOver = (event: ReactDragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const onDragLeave = (event: ReactDragEvent<HTMLDivElement>) => {
		event.preventDefault();
		dragDepth.current -= 1;
		if (dragDepth.current <= 0) {
			dragDepth.current = 0;
			setDragging(false);
		}
	};

	const onDrop = (event: ReactDragEvent<HTMLDivElement>) => {
		event.preventDefault();
		dragDepth.current = 0;
		setDragging(false);
		if (disabled) return;
		addFiles(event.dataTransfer.files);
	};

	return (
		<div
			data-slot="file-drop-zone"
			data-dragging={isDragging || undefined}
			data-invalid={invalid || undefined}
			data-disabled={disabled || undefined}
			className={cn(slots.zone(), className)}
			onDragEnter={onDragEnter}
			onDragOver={onDragOver}
			onDragLeave={onDragLeave}
			onDrop={onDrop}
			{...props}>
			{children}
		</div>
	);
};

type FileDropTriggerProps = ComponentProps<'button'> & {
	/** Render the passed child as the trigger (Radix `Slot`) instead of a `<button>`. */
	asChild?: boolean;
};

/**
 * Opens the native file dialog. Renders a `<button>` by default; pass `asChild`
 * to turn any element (a link, a styled button) into the trigger.
 *
 * @summary Button that opens the file picker
 */
const FileDropTrigger = ({ asChild, className, onClick, ...props }: FileDropTriggerProps) => {
	const { openFileDialog, disabled } = useFileDrop();
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="file-drop-trigger"
			className={cn(slots.trigger(), className)}
			onClick={event => {
				onClick?.(event);
				if (!event.defaultPrevented) openFileDialog();
			}}
			{...(asChild ? {} : { type: 'button', disabled })}
			{...props}
		/>
	);
};

/**
 * Visually-hidden `<input type="file">` wired to the FileDrop context (accept,
 * multiple, disabled, change handling). Give it an accessible name via
 * `aria-label` or an associated `<label htmlFor>`.
 *
 * @summary Hidden file input bound to FileDrop
 */
const FileDropInput = ({ className, onChange, ...props }: ComponentProps<'input'>) => {
	const { inputRef, inputId, accept, multiple, disabled, addFiles } = useFileDrop();

	return (
		<input
			ref={inputRef}
			id={inputId}
			type="file"
			accept={accept}
			multiple={multiple}
			disabled={disabled}
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

/**
 * Container for the selected files.
 *
 * @summary List wrapper for selected-file rows
 */
const FileDropList = ({ className, ...props }: ComponentProps<'ul'>) => (
	<ul data-slot="file-drop-list" className={cn(slots.list(), className)} {...props} />
);

type FileDropItemProps = ComponentProps<'li'> & { file: FileDropFile };

/**
 * A single selected-file row. Provides its `file` to descendant
 * `FileDrop.Remove`/`FileDrop.Preview` via context.
 *
 * @summary Selected-file row
 */
const FileDropItem = ({ file, className, children, ...props }: FileDropItemProps) => (
	<FileDropItemContext value={file}>
		<li data-slot="file-drop-item" className={cn(slots.item(), className)} {...props}>
			{children}
		</li>
	</FileDropItemContext>
);

/**
 * Removes its enclosing `FileDrop.Item`'s file from the value. Provide an
 * accessible name (`aria-label`) and the icon/label as children.
 *
 * @summary Button that removes the current item's file
 */
const FileDropRemove = ({ className, onClick, children, ...props }: ComponentProps<'button'>) => {
	const { removeFile, disabled } = useFileDrop();
	const file = use(FileDropItemContext);

	return (
		<button
			type="button"
			data-slot="file-drop-remove"
			disabled={disabled}
			className={cn(slots.remove(), className)}
			onClick={event => {
				onClick?.(event);
				if (file && !event.defaultPrevented) removeFile(file);
			}}
			{...props}>
			{children}
		</button>
	);
};

/** Resolves a preview URL for a file: an object URL for local images, the `url` for remote files. */
const usePreviewUrl = (file: FileDropFile): string | undefined => {
	const [url, setUrl] = useState<string | undefined>(file instanceof File ? undefined : file.url);

	useEffect(() => {
		if (!(file instanceof File)) {
			setUrl(file.url);
			return;
		}
		if (!file.type.startsWith('image/')) {
			setUrl(undefined);
			return;
		}
		const objectUrl = URL.createObjectURL(file);
		setUrl(objectUrl);
		return () => URL.revokeObjectURL(objectUrl);
	}, [file]);

	return url;
};

type FileDropPreviewProps = ComponentProps<'div'> & { file: FileDropFile };

/**
 * Opt-in thumbnail for a file. Renders an `<img>` for images (local or remote);
 * otherwise falls back to the file name. Preview is intentionally lightweight —
 * for rich previews (PDF, etc.) render your own content inside `FileDrop.Item`.
 *
 * @summary Lightweight image thumbnail for a selected file
 */
const FileDropPreview = ({ file, className, ...props }: FileDropPreviewProps) => {
	const url = usePreviewUrl(file);

	return (
		<div data-slot="file-drop-preview" className={cn(slots.preview(), className)} {...props}>
			{url ? (
				<img src={url} alt={getFileName(file)} className="size-full object-cover" />
			) : (
				<span className="truncate px-1 text-2xs text-text-default-base-tertiary">
					{getFileName(file)}
				</span>
			)}
		</div>
	);
};

/* --------------- Root --------------- */

type FileDropProps = {
	/** Current files (controlled). Native `File`s and/or `{ name, url }` remote descriptors. */
	value: FileDropFile[];
	/** Called with the next files array when files are added or removed. */
	onValueChange: (files: FileDropFile[]) => void;
	/** Comma-separated accept list: extensions (`.pdf`), wildcard (`image/*`), or exact MIME. */
	accept?: string;
	/** Max size per file in bytes. Files above it are rejected with reason `size`. */
	maxSize?: number;
	/** Max number of files (only meaningful with `multiple`). Extras are rejected with reason `count`. */
	maxFiles?: number;
	/** Allow selecting/holding more than one file. Defaults to `false` (single file, replaced on select). */
	multiple?: boolean;
	/** Disables the zone, trigger, input, and remove buttons. */
	disabled?: boolean;
	/** Reflects an external error (e.g. a form field error) via `data-invalid` on the zone. */
	invalid?: boolean;
	/** Called with the files that failed validation (type/size/count). */
	onReject?: (rejections: FileDropRejection[]) => void;
} & Omit<ComponentProps<'div'>, 'onDrop'>;

/**
 * FileDrop is a headless-ish, composable drag-and-drop file picker. Compose it
 * from `FileDrop.Zone` (the drop target + empty state), `FileDrop.Trigger`
 * (opens the dialog), `FileDrop.Input` (the hidden input), and a
 * `FileDrop.List` of `FileDrop.Item`s with `FileDrop.Preview`/`FileDrop.Remove`.
 *
 * It is form-agnostic and controlled (`value` / `onValueChange`); wrap it in
 * your app's form field for react-hook-form binding. Validation (`accept`,
 * `maxSize`, `maxFiles`) runs on add and surfaces failures via `onReject`. Copy
 * and icons are supplied as children so each context reads the way it should.
 *
 * @summary Composable, controlled drag-and-drop file input
 *
 * @example
 * const [files, setFiles] = useState<FileDropFile[]>([]);
 * <FileDrop value={files} onValueChange={setFiles} accept="image/*" maxSize={5_000_000}>
 *   <FileDrop.Zone>
 *     <UploadIcon />
 *     <p>Drag & drop or <FileDrop.Trigger>browse</FileDrop.Trigger></p>
 *     <FileDrop.Input aria-label="Upload file" />
 *   </FileDrop.Zone>
 *   <FileDrop.List>
 *     {files.map(file => (
 *       <FileDrop.Item key={file.name} file={file}>
 *         <FileDrop.Preview file={file} />
 *         <span>{file.name}</span>
 *         <FileDrop.Remove aria-label={`Remove ${file.name}`}>✕</FileDrop.Remove>
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
}: PropsWithChildren<FileDropProps>) => {
	const inputId = useId();
	const inputRef = useRef<HTMLInputElement>(null);
	const [isDragging, setIsDragging] = useState(false);

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

		if (multiple) {
			const room = maxFiles === undefined ? Infinity : Math.max(0, maxFiles - value.length);
			const toAdd = accepted.slice(0, room);
			for (const file of accepted.slice(room)) rejected.push({ file, reason: 'count' });
			if (toAdd.length > 0) onValueChange([...value, ...toAdd]);
		} else {
			const [first, ...extra] = accepted;
			if (first) {
				for (const file of extra) rejected.push({ file, reason: 'count' });
				onValueChange([first]);
			}
		}

		if (rejected.length > 0) onReject?.(rejected);
	};

	const removeFile = (file: FileDropFile) => {
		onValueChange(value.filter(current => current !== file));
	};

	return (
		<FileDropContext
			value={{
				value,
				disabled,
				invalid,
				multiple,
				accept,
				inputId,
				inputRef,
				isDragging,
				openFileDialog,
				removeFile,
				addFiles,
				setDragging: setIsDragging
			}}>
			<div data-slot="file-drop" className={cn(slots.root(), className)} {...props}>
				{children}
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
