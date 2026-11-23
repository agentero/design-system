'use client';

import {
	ChangeEvent,
	ComponentPropsWithRef,
	DragEvent,
	FocusEvent,
	MouseEvent,
	ReactNode,
	useEffect,
	useCallback,
	useMemo,
	useRef,
	useState
} from 'react';

import { FileTextIcon, FileUpIcon, UploadIcon } from 'lucide-react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn, mergeRefs } from '../../lib';
import { Button } from '../button';
import { Skeleton } from '../skeleton';
import { getAcceptedFormats, isAccepted } from './accept';
import { useFileDropContext } from './context';

/**
 * Style recipe for FileDrop. `filled` swaps the dashed drop zone for the
 * preview box; `tone` is the zone's feedback, where a file dragged over it
 * (`accept`/`reject`) wins over the field's `invalid` state; `disabled` greys
 * the zone out. `--file-drop-min-height` (200px) is the least height of the
 * zone and of the preview, which the header sits on top of.
 *
 * @summary tailwind-variants recipe backing the FileDrop component styles
 */
export const fileDropRecipe = tv({
	slots: {
		root: [
			'relative flex flex-col rounded-md border border-border-default-base-primary',
			'[--file-drop-min-height:12.5rem]'
		],
		// The zone's children ignore the pointer so none of them becomes a drag
		// target: a `dragleave` fired by one would clear the tone mid-drag, and
		// WebKit gives no `relatedTarget` to tell it apart from leaving the zone.
		icon: 'pointer-events-none size-7 shrink-0 text-icon-default-base-secondary',
		copy: 'pointer-events-none flex flex-col items-center gap-1 text-center',
		prompt: 'text-sm font-semibold text-text-default-base-primary',
		formats: 'text-xs text-text-input-placeholder',
		separator: 'pointer-events-none text-xs text-text-input-placeholder',
		header: [
			'flex items-center justify-end gap-2 p-3',
			'border-b border-border-default-base-primary bg-bg-default-base-primary'
		],
		frame: 'min-h-(--file-drop-min-height) w-full flex-1 bg-bg-default-base-secondary',
		fallback: [
			'flex min-h-(--file-drop-min-height) flex-1 flex-col items-center justify-center gap-2 p-10',
			'text-xs text-text-input-placeholder'
		],
		fallbackIcon: 'size-16 text-icon-default-base-secondary',
		fallbackName: 'text-text-default-base-primary',
		loading: 'flex min-h-(--file-drop-min-height) flex-1',
		skeleton: 'flex-1 rounded-none'
	},
	variants: {
		filled: {
			false: {
				root: [
					'min-h-(--file-drop-min-height) cursor-pointer items-center justify-center gap-2',
					'border-dashed p-6 transition-colors',
					'border-icon-default-base-secondary bg-bg-default-base-secondary',
					// What takes focus is the sr-only input, so the ring goes on the zone.
					'has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2',
					'has-[input:focus-visible]:outline-focus-ring-button-primary'
				]
			},
			true: { root: 'overflow-hidden' }
		},
		tone: {
			neutral: {},
			invalid: { root: 'border-border-input-destructive' },
			accept: { root: 'border-border-default-brand-primary bg-bg-default-base-secondary-hover' },
			reject: { root: 'border-border-input-destructive bg-bg-alert-primary-danger' }
		},
		disabled: {
			true: {
				root: 'cursor-default border-border-input-disable bg-bg-input-disable',
				icon: 'text-text-input-disable',
				prompt: 'text-text-input-disable',
				formats: 'text-text-input-disable',
				separator: 'text-text-input-disable'
			}
		}
	},
	compoundVariants: [
		{ filled: false, tone: 'invalid', class: { root: 'bg-bg-alert-primary-danger' } }
	],
	defaultVariants: {
		filled: false,
		tone: 'neutral'
	}
});

export type FileDropVariants = VariantProps<typeof fileDropRecipe>;

/**
 * The file a `FileDrop` shows: one just picked (`file`), one already stored,
 * by its `url`, or one known only by its `name` (copied from another record,
 * say), which shows the name without a preview. The `file` wins over the
 * `url`, and the `url` over the `name`.
 */
export type FileDropValue = {
	file?: File;
	/**
	 * Framed as it is, whatever its type, so it must point at a file you trust,
	 * on another origin such as the file store's: an HTML or SVG file served
	 * from the app's own origin would run its script inside the app.
	 */
	url?: string;
	name?: string;
};

export type FileDropProps = Omit<
	ComponentPropsWithRef<'input'>,
	'type' | 'value' | 'defaultValue' | 'onChange' | 'multiple' | 'size' | 'children'
> & {
	/**
	 * The file to preview. Empty (no `file`, `url` or `name`) shows the drop
	 * zone. Any object with those keys fits, so a form's upload value can be
	 * passed as it is.
	 */
	value?: FileDropValue | null;
	/** Called with the file picked or dropped when `accept` allows it. */
	onFileChange?: (file: File) => void;
	/** Called with the file picked or dropped when `accept` rejects it. */
	onFileReject?: (file: File) => void;
	/**
	 * Adds a "Remove" button next to "Replace file" and is called when it is
	 * pressed; clear the `value` there to bring the drop zone back. Without it
	 * there is no button and a file can only be replaced.
	 */
	onFileRemove?: () => void;
	/**
	 * Shows a placeholder in place of the preview while the stored file's
	 * `url` is on its way, instead of "No preview available".
	 */
	previewLoading?: boolean;
	/** Lists the formats `accept` allows under the prompt. Defaults to `true`. */
	showAcceptedFormats?: boolean;
	/**
	 * Another way to supply the file, such as picking one from another
	 * record: rendered in the empty zone under an "or", and gone once there is
	 * a file. Clicks inside it do not open the picker.
	 */
	children?: ReactNode;
};

type DragTone = 'accept' | 'reject';

// Blob URLs share the app's origin, so the frame only shows types that run no
// script: an HTML or SVG file would execute inside the portal.
const PREVIEWABLE_TYPES = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png', 'image/gif'];
const MAX_PREVIEW_SIZE = 10 * 1024 * 1024;

// The browser's own PDF viewer streams the file, so only the other types,
// which it renders whole, are capped.
const canPreview = (file: File) =>
	PREVIEWABLE_TYPES.includes(file.type) &&
	file.size > 0 &&
	(file.type === 'application/pdf' || file.size <= MAX_PREVIEW_SIZE);

const FilePreview = ({
	value: { file, url, name },
	loading,
	styles
}: {
	value: FileDropValue;
	loading?: boolean;
	styles: ReturnType<typeof fileDropRecipe>;
}) => {
	// The blob URL lives exactly as long as the frame shows that file: the ref
	// callback creates it on attach and its cleanup revokes it on detach.
	const showFile = useCallback(
		(frame: HTMLIFrameElement | null) => {
			if (!frame || !file) {
				return;
			}

			const blobUrl = URL.createObjectURL(file);
			frame.src = blobUrl;

			return () => URL.revokeObjectURL(blobUrl);
		},
		[file]
	);

	if (!file && !url && loading) {
		return (
			<div role="status" aria-label="Loading file preview" className={styles.loading()}>
				<Skeleton className={styles.skeleton()} />
			</div>
		);
	}

	if (file ? !canPreview(file) : !url) {
		return (
			<div className={styles.fallback()}>
				<FileTextIcon className={styles.fallbackIcon()} />
				{name && <span className={styles.fallbackName()}>{name}</span>}
				(No preview available)
			</div>
		);
	}

	return file ? (
		<iframe ref={showFile} title="File preview" className={styles.frame()} />
	) : (
		<iframe src={url} title="File preview" className={styles.frame()} />
	);
};

// Without it the browser opens the dropped file in place of the page.
const allowDrop = (event: DragEvent<HTMLDivElement>) => event.preventDefault();

// The preview takes no drop (replacing goes through the button), but a file
// dropped on it must not open in place of the page either.
const ignoreDrop = (event: DragEvent<HTMLDivElement>) => {
	event.preventDefault();
	event.dataTransfer.dropEffect = 'none';
};

/**
 * FileDrop is the design system's base control for uploading one file: a
 * dashed zone that takes a file dropped on it or opens the picker on click,
 * and once there is a file, a preview of it (PDF, plain text and images) with
 * a "Replace file" button.
 *
 * It is controlled: it shows `value` and reports a picked or dropped file
 * through `onFileChange`, or through `onFileReject` when `accept` does not
 * allow it, so the field can show the error. Nothing is uploaded here; the
 * consumer owns the `File`. The zone lists the accepted formats from `accept`
 * (unless `showAcceptedFormats` is `false`). The zone, and the preview under
 * its header, are at least 200px tall; `className` lands on the box, so
 * `[--file-drop-min-height:18.75rem]` there makes both 300px. `onFileRemove`
 * adds a "Remove" button, `previewLoading`
 * holds a placeholder while a stored file's `url` arrives, and `children`
 * offer another way to supply the file inside the empty zone.
 *
 * The real control is a visually hidden `<input type="file">`, so a `Label`
 * names it and every other `<input>` attribute (`id`, `name`, `required`,
 * `aria-*`, `onBlur`, `ref`) is forwarded to it. When a container provides
 * `FileDropContext` it takes that wiring from it, and its own props always win.
 * `aria-invalid` paints the zone in the destructive tone, `disabled` greys it
 * out, and `readOnly` shows the file without its buttons, ignores picks and
 * drops, and renders nothing when there is no file. `required` holds only
 * while the zone is empty, since a dropped or stored file never reaches the
 * input. "Replace file" carries the input's `aria-describedby`, so the field's
 * error is read on the control that keeps the focus.
 *
 * @summary Base single-file upload control: drop zone, picker and preview
 *
 * @example
 * <Label htmlFor="w9">W-9</Label>
 * <FileDrop
 *   id="w9"
 *   accept="application/pdf"
 *   value={{ file }}
 *   onFileChange={setFile}
 *   onFileReject={() => setError('Only PDF files are accepted')}
 * />
 */
export const FileDrop = (props: FileDropProps) => {
	const {
		value,
		onFileChange,
		onFileReject,
		onFileRemove,
		previewLoading,
		showAcceptedFormats = true,
		children,
		accept,
		className,
		disabled,
		readOnly,
		required,
		ref,
		tabIndex,
		onClick,
		onFocus,
		...inputProps
	} = useFileDropContext(props);

	const [dragTone, setDragTone] = useState<DragTone>();
	const inputRef = useRef<HTMLInputElement>(null);
	const replaceRef = useRef<HTMLButtonElement>(null);
	const focusInput = useRef(false);
	const mergedRef = useMemo(() => mergeRefs(inputRef, ref), [ref]);

	const filled = !!(value?.file || value?.url || value?.name);
	const interactive = !disabled && !readOnly;
	const invalid = !!inputProps['aria-invalid'] && inputProps['aria-invalid'] !== 'false';

	const styles = fileDropRecipe({
		filled,
		tone: dragTone ?? (invalid ? 'invalid' : 'neutral'),
		disabled: !!disabled
	});

	// Filled, the input leaves the tab order and "Replace file" is the way to the
	// picker, so focus left on the input (it was there when the picker closed)
	// moves to the button instead of stranding a keyboard user on a hidden control.
	useEffect(() => {
		if (filled && document.activeElement === inputRef.current) {
			replaceRef.current?.focus();
		}

		if (!filled && inputRef.current) {
			// A file removed or reset from outside leaves the input too, or picking
			// the same file again would fire no `change`.
			inputRef.current.value = '';

			// "Remove" leaves with the preview, so focus goes to the zone it brings back.
			if (focusInput.current) {
				focusInput.current = false;
				inputRef.current.focus();
			}
		}
	}, [filled]);

	const onInputFocus = (event: FocusEvent<HTMLInputElement>) => {
		onFocus?.(event);

		if (filled) {
			replaceRef.current?.focus();
		}
	};

	const handleFile = (file: File | undefined) => {
		setDragTone(undefined);

		if (!file || !interactive) {
			return;
		}

		if (isAccepted(file, accept)) {
			onFileChange?.(file);
			return;
		}

		onFileReject?.(file);

		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	const onInputClick = (event: MouseEvent<HTMLInputElement>) => {
		onClick?.(event);

		// `readonly` means nothing to a file input, so the picker is stopped here.
		if (readOnly) {
			event.preventDefault();
		}
	};

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) =>
		handleFile(event.target.files?.[0]);

	const onDragEnter = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();

		// A dragged link or text selection is no file, so it gets no tint.
		if (!interactive || !event.dataTransfer.types.includes('Files')) {
			return;
		}

		// Mid-drag only the MIME type is known, the name arrives with the drop, so an
		// extension-only `accept` reads as a rejection until the drop judges the file.
		const item = event.dataTransfer.items[0];
		const allowed = !item || isAccepted({ name: '', type: item.type }, accept);

		setDragTone(allowed ? 'accept' : 'reject');
	};

	const onDragOver = (event: DragEvent<HTMLDivElement>) => {
		allowDrop(event);

		if (!interactive) {
			event.dataTransfer.dropEffect = 'none';
		}
	};

	const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
		if (event.currentTarget.contains(event.relatedTarget as Node)) {
			return;
		}

		setDragTone(undefined);
	};

	const onDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		handleFile(event.dataTransfer.files[0]);
	};

	const onZoneClick = (event: MouseEvent<HTMLDivElement>) => {
		// The click below bubbles back here, so the input's own clicks are skipped.
		if (!interactive || event.target === inputRef.current) {
			return;
		}

		// Inside a `<label>` for the input, the label would click it a second time.
		event.preventDefault();
		inputRef.current?.click();
	};

	// First in both states, so the same input survives the swap between them
	// and keeps focus and its picked file.
	const input = (
		<input
			{...inputProps}
			ref={mergedRef}
			type="file"
			accept={accept}
			disabled={disabled}
			readOnly={readOnly}
			required={required && !filled}
			tabIndex={filled ? -1 : tabIndex}
			className="sr-only"
			onClick={onInputClick}
			onFocus={onInputFocus}
			onChange={onInputChange}
		/>
	);

	if (filled && value) {
		return (
			<div
				data-slot="file-drop"
				data-state="filled"
				data-invalid={invalid || undefined}
				data-disabled={disabled || undefined}
				className={cn(styles.root(), className)}
				onDragOver={ignoreDrop}
				onDrop={ignoreDrop}>
				{input}
				{!readOnly && (
					<div className={styles.header()}>
						<Button
							ref={replaceRef}
							type="button"
							variant="secondary"
							disabled={disabled}
							aria-describedby={inputProps['aria-describedby']}
							onClick={() => inputRef.current?.click()}>
							<UploadIcon />
							Replace file
						</Button>
						{onFileRemove && (
							<Button
								type="button"
								variant="secondary"
								disabled={disabled}
								onClick={() => {
									focusInput.current = true;
									onFileRemove();
								}}>
								Remove
							</Button>
						)}
					</div>
				)}
				<FilePreview value={value} loading={previewLoading} styles={styles} />
			</div>
		);
	}

	// Read-only with nothing to show: there is no file to look at and none to add.
	if (readOnly) {
		return null;
	}

	const formats = showAcceptedFormats && accept ? getAcceptedFormats(accept) : [];

	return (
		// A pointer convenience only: the input inside is the labelled control.
		<div
			role="presentation"
			data-slot="file-drop"
			data-state="empty"
			data-dragging={dragTone}
			data-invalid={invalid || undefined}
			data-disabled={disabled || undefined}
			className={cn(styles.root(), className)}
			onClick={onZoneClick}
			onDragEnter={onDragEnter}
			onDragOver={onDragOver}
			onDragLeave={onDragLeave}
			onDrop={onDrop}>
			{input}
			<FileUpIcon className={styles.icon()} />
			<div className={styles.copy()}>
				<span className={styles.prompt()}>
					Drag &amp; drop files or <span className="underline">Browse</span>
				</span>
				{formats.length > 0 && (
					<span className={styles.formats()}>Accepted formats: {formats.join(', ')}</span>
				)}
				{children && <span className={styles.separator()}>or</span>}
			</div>
			{children && (
				// Its own controls act on their own: a click here never opens the picker.
				<div data-slot="file-drop-alternative" onClick={event => event.stopPropagation()}>
					{children}
				</div>
			)}
		</div>
	);
};

FileDrop.displayName = 'FileDrop';
