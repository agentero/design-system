// Consumers import icons from here, never from `lucide-react`: the design system
// declares the dependency, and a direct import only works by hoisting. A flat
// re-export rather than a curated list, so a new lucide icon never waits for a
// design-system release; Next.js consumers keep this subpath in `optimizePackageImports`.
export * from 'lucide-react';
// Named, not `export *`: a named export wins over the star, so a lucide release that
// ships one of these names can't silently drop ours (two stars would make it ambiguous).
export {
	AgenteroIcon,
	CaretDownIcon,
	CaretLeftIcon,
	CaretRightIcon,
	CaretUpIcon,
	CircleAlertFilledIcon,
	CircleCheckFilledIcon,
	CircleHelpFilledIcon,
	CircleProgress25Icon,
	CircleProgress50Icon,
	CircleProgress75Icon,
	CircleProgressAlertIcon,
	CircleXFilledIcon,
	InfoFilledIcon,
	ProducerflowIcon,
	TriangleAlertFilledIcon
} from './custom';
