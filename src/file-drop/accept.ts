// Extensions per MIME type, used only to print the accepted formats: a MIME
// type or group in `accept` reads as the extensions a person recognises.
const extensionsByMimeType: Record<string, string[]> = {
	'audio/aac': ['.aac'],
	'application/x-abiword': ['.abw'],
	'application/x-freearc': ['.arc'],
	'image/avif': ['.avif'],
	'video/x-msvideo': ['.avi'],
	'application/vnd.amazon.ebook': ['.azw'],
	'application/octet-stream': ['.bin'],
	'image/bmp': ['.bmp'],
	'application/x-bzip': ['.bz'],
	'application/x-bzip2': ['.bz2'],
	'application/x-cdf': ['.cda'],
	'application/x-csh': ['.csh'],
	'text/css': ['.css'],
	'text/csv': ['.csv'],
	'application/msword': ['.doc'],
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
	'application/vnd.ms-fontobject': ['.eot'],
	'application/epub+zip': ['.epub'],
	'application/gzip': ['.gz'],
	'image/gif': ['.gif'],
	'text/html': ['.htm', '.html'],
	'image/vnd.microsoft.icon': ['.ico'],
	'text/calendar': ['.ics'],
	'application/java-archive': ['.jar'],
	'image/jpeg': ['.jpeg', '.jpg'],
	'text/javascript': ['.js', '.mjs'],
	'application/json': ['.json'],
	'application/ld+json': ['.jsonld'],
	'audio/midi': ['.mid', '.midi'],
	'audio/mpeg': ['.mp3'],
	'video/mp4': ['.mp4'],
	'video/mpeg': ['.mpeg'],
	'application/vnd.apple.installer+xml': ['.mpkg'],
	'application/vnd.oasis.opendocument.presentation': ['.odp'],
	'application/vnd.oasis.opendocument.spreadsheet': ['.ods'],
	'application/vnd.oasis.opendocument.text': ['.odt'],
	'audio/ogg': ['.oga'],
	'video/ogg': ['.ogv'],
	'application/ogg': ['.ogx'],
	'audio/opus': ['.opus'],
	'font/otf': ['.otf'],
	'image/png': ['.png'],
	'application/pdf': ['.pdf'],
	'application/x-httpd-php': ['.php'],
	'application/vnd.ms-powerpoint': ['.ppt'],
	'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
	'application/vnd.rar': ['.rar'],
	'application/rtf': ['.rtf'],
	'application/x-sh': ['.sh'],
	'image/svg+xml': ['.svg'],
	'application/x-tar': ['.tar'],
	'image/tiff': ['.tif', '.tiff'],
	'video/mp2t': ['.ts'],
	'font/ttf': ['.ttf'],
	'text/plain': ['.txt'],
	'application/vnd.visio': ['.vsd'],
	'audio/wav': ['.wav'],
	'audio/webm': ['.weba'],
	'video/webm': ['.webm'],
	'image/webp': ['.webp'],
	'font/woff': ['.woff'],
	'font/woff2': ['.woff2'],
	'application/xhtml+xml': ['.xhtml'],
	'application/vnd.ms-excel': ['.xls'],
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
	'application/xml': ['.xml'],
	'application/vnd.mozilla.xul+xml': ['.xul'],
	'application/zip': ['.zip'],
	'video/3gpp': ['.3gp'],
	'video/3gpp2': ['.3g2'],
	'application/x-7z-compressed': ['.7z']
};

const splitAccept = (accept: string) =>
	accept
		.split(',')
		.map(type => type.trim().toLowerCase())
		.filter(Boolean);

const extensionsFor = (type: string): string[] => {
	if (type.endsWith('/*')) {
		const group = type.slice(0, -1);

		return Object.entries(extensionsByMimeType)
			.filter(([mimeType]) => mimeType.startsWith(group))
			.flatMap(([, extensions]) => extensions);
	}

	return type.includes('/') ? (extensionsByMimeType[type] ?? []) : [type];
};

/**
 * The formats an `accept` string allows, as the uppercase extensions the drop
 * zone prints: `application/pdf,.csv` reads `['PDF', 'CSV']`, and a group like
 * `image/*` lists every extension of the group. A MIME type missing from the
 * table prints nothing, but `isAccepted` still allows it.
 */
export const getAcceptedFormats = (accept: string): string[] =>
	splitAccept(accept)
		.flatMap(extensionsFor)
		.map(extension => extension.replace('.', '').toUpperCase());

/**
 * Whether a file matches an `accept` string the way the native picker reads
 * it: an extension (`.csv`) against the name, a group (`image/*`) against the
 * MIME type's first half, and a MIME type against the whole of it. An empty
 * `accept` allows anything.
 */
export const isAccepted = (file: Pick<File, 'name' | 'type'>, accept: string | undefined) => {
	if (!accept) {
		return true;
	}

	const name = file.name.toLowerCase();
	const mimeType = file.type.toLowerCase();

	return splitAccept(accept).some(type => {
		if (type.startsWith('.')) {
			return name.endsWith(type);
		}

		if (type.endsWith('/*')) {
			return mimeType.startsWith(type.slice(0, -1));
		}

		return mimeType === type;
	});
};
