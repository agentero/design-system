import { ComponentType, SVGProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	ChevronDownIcon,
	ClipboardCheckIcon,
	ClipboardListIcon,
	Grid2x2Icon,
	HouseIcon,
	ScanSearchIcon,
	UsersIcon
} from 'lucide-react';

import { cn } from '../../lib';

/**
 * Inline `@agentero/icons` SVGs preserved from portal-ui master for visual
 * comparison only. These match the geometry currently shipping in production
 * (Material Symbols-derived custom icons). Kept local to this story file —
 * not exported.
 */
const IconHome2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<path
			fill="currentColor"
			d="M10.513 2.863a2.56 2.56 0 0 1 2.973 0l1.078.775a32.5 32.5 0 0 1 8.02 8.258l.346.514v.001c.774 1.154-.16 2.518-1.398 2.518h-1.088a20.7 20.7 0 0 1-.25 4.188c-.238 1.47-1.554 2.494-3.031 2.494H6.837c-1.477 0-2.793-1.025-3.032-2.494a20.7 20.7 0 0 1-.249-4.188H2.468c-1.239 0-2.172-1.365-1.398-2.519l.344-.514a32.5 32.5 0 0 1 8.022-8.257zm1.975 1.39a.85.85 0 0 0-.976 0l-1.078.774a30.8 30.8 0 0 0-7.599 7.822l-.249.37h1.88a.855.855 0 0 1 .85.929 19 19 0 0 0 .177 4.695c.093.575.636 1.058 1.344 1.059H8.49v-3.985a3.511 3.511 0 0 1 7.02 0v3.985h1.653c.707 0 1.25-.484 1.344-1.059.253-1.555.31-3.13.175-4.695a.856.856 0 0 1 .853-.93h1.878l-.249-.37a30.8 30.8 0 0 0-7.6-7.821zM12 14.116a1.8 1.8 0 0 0-1.8 1.8v3.985h3.6v-3.985a1.8 1.8 0 0 0-1.8-1.8"
		/>
	</svg>
);

const IconApplications = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<path
			fill="currentColor"
			d="M6.475 13.05c.795 0 1.565.082 2.272.164a2.335 2.335 0 0 1 2.048 2.054c.078.705.154 1.468.154 2.257s-.076 1.553-.154 2.258a2.334 2.334 0 0 1-2.048 2.053C8.04 21.917 7.27 22 6.475 22c-.597 0-1.179-.046-1.73-.104l-.543-.06a2.334 2.334 0 0 1-2.048-2.053C2.076 19.078 2 18.314 2 17.525s.077-1.552.155-2.257a2.335 2.335 0 0 1 2.048-2.054c.708-.082 1.477-.164 2.273-.164m11.05 0c.796 0 1.566.082 2.273.164a2.335 2.335 0 0 1 2.016 1.854l.032.199c.078.706.154 1.47.154 2.258 0 .79-.076 1.553-.154 2.258a2.334 2.334 0 0 1-2.048 2.053c-.707.081-1.477.164-2.273.164-.596 0-1.178-.046-1.73-.104l-.541-.06a2.33 2.33 0 0 1-2.048-2.053c-.078-.705-.156-1.469-.156-2.258s.078-1.552.156-2.257a2.334 2.334 0 0 1 2.048-2.054c.707-.082 1.476-.164 2.271-.164m-11.05 1.584c-.696 0-1.385.07-2.091.152a.75.75 0 0 0-.655.656c-.078.702-.146 1.39-.146 2.083s.068 1.382.146 2.083a.75.75 0 0 0 .655.657c.706.08 1.395.152 2.09.152.696 0 1.386-.071 2.092-.152a.75.75 0 0 0 .655-.657c.077-.701.145-1.389.145-2.083s-.068-1.381-.145-2.083a.75.75 0 0 0-.655-.656c-.706-.081-1.396-.152-2.091-.152m11.05 0c-.695 0-1.384.07-2.09.152a.75.75 0 0 0-.656.656c-.078.702-.145 1.39-.145 2.083s.067 1.382.145 2.083a.75.75 0 0 0 .656.657c.706.08 1.395.152 2.09.152.696 0 1.386-.071 2.092-.152a.75.75 0 0 0 .656-.657c.077-.701.145-1.389.145-2.083s-.068-1.381-.145-2.083l-.025-.124a.75.75 0 0 0-.63-.532c-.707-.081-1.397-.152-2.093-.152M6.475 1.999c.795 0 1.565.083 2.272.164a2.335 2.335 0 0 1 2.048 2.054c.078.705.154 1.469.154 2.258s-.076 1.552-.154 2.257a2.334 2.334 0 0 1-2.048 2.053c-.707.082-1.477.164-2.272.164-.796 0-1.565-.082-2.273-.164a2.334 2.334 0 0 1-2.048-2.053C2.076 8.027 2 7.264 2 6.475s.077-1.553.155-2.258a2.335 2.335 0 0 1 2.048-2.054C4.91 2.082 5.68 2 6.475 2m11.05 0c.796 0 1.566.083 2.273.164a2.335 2.335 0 0 1 2.016 1.855l.032.198c.078.706.154 1.47.154 2.259s-.076 1.552-.154 2.257a2.334 2.334 0 0 1-2.048 2.053c-.707.082-1.477.164-2.273.164-.795 0-1.564-.082-2.271-.164a2.33 2.33 0 0 1-2.048-2.053c-.078-.705-.156-1.468-.156-2.257s.078-1.553.156-2.258a2.334 2.334 0 0 1 2.048-2.054C15.96 2.082 16.73 2 17.525 2M6.475 3.583c-.696 0-1.385.071-2.091.152a.75.75 0 0 0-.655.657c-.078.701-.146 1.389-.146 2.083s.068 1.381.146 2.083a.75.75 0 0 0 .655.656c.706.081 1.395.153 2.09.153.696 0 1.386-.072 2.092-.153a.75.75 0 0 0 .655-.656c.077-.702.145-1.39.145-2.083s-.068-1.382-.145-2.083a.75.75 0 0 0-.655-.657c-.706-.08-1.396-.152-2.091-.152m11.05 0c-.695 0-1.384.071-2.09.152a.75.75 0 0 0-.656.657c-.078.701-.145 1.389-.145 2.083s.067 1.381.145 2.083a.75.75 0 0 0 .656.656c.706.081 1.395.153 2.09.153.696 0 1.386-.072 2.092-.153a.75.75 0 0 0 .656-.656c.077-.702.145-1.39.145-2.083s-.068-1.382-.145-2.083l-.025-.124a.75.75 0 0 0-.63-.533c-.707-.08-1.397-.152-2.093-.152"
		/>
	</svg>
);

const IconApplicationSearch = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<path
			fill="currentColor"
			d="M6.474 13.05c.796 0 1.565.082 2.273.164a2.335 2.335 0 0 1 2.048 2.053c.078.706.154 1.47.154 2.258 0 .789-.076 1.553-.154 2.258a2.334 2.334 0 0 1-2.048 2.053c-.707.08-1.477.164-2.273.164-.596 0-1.178-.046-1.73-.104l-.541-.06a2.334 2.334 0 0 1-2.048-2.053C2.077 19.078 2 18.313 2 17.525c0-.789.077-1.552.155-2.258a2.334 2.334 0 0 1 2.048-2.053c.707-.082 1.476-.165 2.271-.165m10.514-.07c1.176 0 2.207.334 2.943 1.07.736.735 1.07 1.767 1.07 2.943 0 .87-.184 1.66-.577 2.311l1.343 1.345.055.06a.791.791 0 0 1-1.113 1.113l-.06-.055-1.344-1.343c-.651.396-1.444.582-2.317.582-1.176 0-2.207-.334-2.943-1.07s-1.07-1.767-1.07-2.943.334-2.208 1.07-2.943c.736-.736 1.767-1.07 2.943-1.07M6.474 14.632c-.695 0-1.384.072-2.09.153a.75.75 0 0 0-.656.656c-.077.701-.145 1.39-.145 2.083s.068 1.382.145 2.083a.75.75 0 0 0 .656.656c.706.082 1.395.153 2.09.153.696 0 1.385-.072 2.092-.153a.75.75 0 0 0 .655-.656c.078-.701.146-1.389.146-2.083s-.068-1.382-.146-2.083a.75.75 0 0 0-.655-.656c-.706-.081-1.396-.152-2.092-.152m10.514-.07c-.885 0-1.466.246-1.825.606-.36.359-.606.94-.606 1.824s.247 1.465.606 1.824c.36.36.94.606 1.825.607.885 0 1.464-.248 1.823-.607.36-.36.607-.94.607-1.824s-.247-1.465-.607-1.824c-.359-.36-.938-.606-1.823-.606M6.474 2c.796 0 1.565.081 2.273.163a2.335 2.335 0 0 1 2.048 2.054c.078.706.154 1.469.154 2.257 0 .79-.076 1.553-.154 2.258a2.334 2.334 0 0 1-2.048 2.054c-.708.081-1.477.163-2.273.163-.795 0-1.564-.082-2.271-.163a2.334 2.334 0 0 1-2.048-2.054C2.077 8.027 2 7.263 2 6.474s.077-1.551.155-2.257a2.335 2.335 0 0 1 2.048-2.054C4.91 2.08 5.679 2 6.474 2m11.051 0c.795 0 1.564.081 2.272.163a2.34 2.34 0 0 1 2.016 1.854l.032.2c.078.706.155 1.469.155 2.257 0 .79-.077 1.553-.155 2.258a2.335 2.335 0 0 1-2.048 2.054c-.707.081-1.477.163-2.272.163s-1.565-.082-2.272-.163a2.334 2.334 0 0 1-2.048-2.054c-.078-.705-.155-1.469-.155-2.258s.077-1.551.155-2.257a2.336 2.336 0 0 1 2.048-2.054C15.96 2.08 16.73 2 17.525 2M6.475 3.583c-.696 0-1.385.07-2.091.152a.75.75 0 0 0-.656.656c-.077.702-.145 1.39-.145 2.083s.068 1.382.145 2.083a.75.75 0 0 0 .656.657c.706.08 1.395.153 2.09.153.696 0 1.386-.072 2.092-.153a.75.75 0 0 0 .655-.657c.078-.701.146-1.389.146-2.083s-.068-1.381-.146-2.083a.75.75 0 0 0-.655-.656c-.706-.081-1.396-.152-2.092-.152m11.05 0c-.695 0-1.384.07-2.09.152a.75.75 0 0 0-.656.656c-.078.702-.145 1.39-.146 2.083 0 .694.068 1.382.146 2.083a.75.75 0 0 0 .655.657c.707.08 1.396.153 2.091.153s1.385-.072 2.091-.153a.75.75 0 0 0 .655-.657c.078-.701.146-1.389.146-2.083s-.068-1.381-.146-2.083l-.024-.124a.75.75 0 0 0-.631-.532c-.706-.081-1.395-.152-2.09-.152"
		/>
	</svg>
);

const IconClipboardSearch = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<path
			fill="currentColor"
			d="M9.925 2.016c.845-.032.837-.016 2.538.049l.299.02c.688.07 1.31.291 1.786.715.46.41.713.952.79 1.56l.566.061 1.015.12.194.032c.956.194 1.72.983 1.795 1.999l.059.823q.055.82.094 1.634l.035.812v.078a.764.764 0 0 1-1.518.059l-.008-.077-.034-.798a89 89 0 0 0-.092-1.606l-.057-.812a.695.695 0 0 0-.51-.6l-.132-.027-1.023-.121a27 27 0 0 0-.567-.06 2.35 2.35 0 0 1-.607.856c-.475.424-1.098.645-1.786.714l-.299.02c-1.701.065-1.692.08-2.538.048l-1.227-.048c-.806-.03-1.543-.25-2.086-.734a2.35 2.35 0 0 1-.608-.858l-.566.062-1.023.121a.72.72 0 0 0-.622.514l-.02.113a84.6 84.6 0 0 0 0 12.932l.02.113c.069.258.3.464.599.488l.861.066a75 75 0 0 0 5.853.19.763.763 0 0 1 .01 1.526 77 77 0 0 1-5.97-.194l-.876-.065a2.194 2.194 0 0 1-1.995-1.81l-.024-.2a86 86 0 0 1 0-13.16l.024-.2c.166-.984.987-1.717 1.966-1.83l1.015-.12.565-.06c.077-.609.332-1.15.791-1.56.543-.485 1.28-.705 2.086-.736zm6.693 9.93c1.391 0 2.586.395 3.432 1.241s1.239 2.04 1.24 3.43c0 1.092-.245 2.06-.758 2.837l1.244 1.243.053.057a.764.764 0 0 1-1.074 1.075l-.059-.053-1.243-1.243c-.776.512-1.744.756-2.835.756-1.39 0-2.585-.394-3.43-1.24s-1.24-2.04-1.24-3.431c0-1.39.394-2.585 1.24-3.431.845-.846 2.04-1.24 3.43-1.24m0 1.528c-1.11 0-1.869.31-2.351.792-.483.483-.792 1.242-.792 2.352s.31 1.87.792 2.352c.482.483 1.242.793 2.351.793 1.11 0 1.87-.31 2.353-.793.482-.482.792-1.242.792-2.352s-.31-1.87-.792-2.352-1.243-.792-2.353-.792M9.953 3.542l-1.197.048c-.584.023-.933.175-1.127.348-.177.158-.308.408-.308.828s.13.669.308.827c.194.173.543.327 1.127.349l1.197.048c.817.032.78.016 2.451-.048l.208-.014c.461-.046.75-.183.92-.335.144-.128.255-.316.292-.606l.001-.024.007-.033a2 2 0 0 0 .008-.164c0-.42-.13-.67-.308-.828-.17-.151-.459-.287-.92-.334l-.208-.014c-1.672-.063-1.634-.08-2.45-.048"
		/>
	</svg>
);

const IconClipboardCheck2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<path
			fill="currentColor"
			d="M11.343 2.016c.849-.033.839-.016 2.548.049l.297.02c.684.07 1.3.288 1.766.704.462.412.712.962.782 1.58.224.023.45.045.61.064l1.02.122.19.03c.939.19 1.689.965 1.764 1.96l.11 1.673c.19 3.326.19 6.547 0 9.873l-.11 1.673a2.146 2.146 0 0 1-1.787 1.946l-.194.025a76.5 76.5 0 0 1-11.061.115l-1.615-.115a2.15 2.15 0 0 1-1.957-1.776l-.024-.195a86.5 86.5 0 0 1 0-13.219l.024-.196c.163-.965.968-1.683 1.93-1.794l1.02-.122.61-.064c.07-.619.321-1.168.783-1.58.534-.475 1.26-.694 2.062-.724zm5.224 3.77a2.3 2.3 0 0 1-.613.877c-.467.417-1.082.637-1.766.706l-.297.02c-1.71.064-1.699.081-2.548.049l-1.232-.05c-.803-.03-1.528-.249-2.062-.725a2.3 2.3 0 0 1-.613-.876l-.61.065-1.027.121a.775.775 0 0 0-.67.557l-.021.122a85 85 0 0 0 0 13.005l.02.124a.73.73 0 0 0 .65.53l1.586.113c3.669.226 7.119.188 10.86-.112l.134-.024c.3-.079.514-.335.537-.631l.108-1.646c.187-3.272.187-6.44 0-9.713l-.108-1.646a.75.75 0 0 0-.551-.65l-.14-.029-1.029-.121q-.3-.035-.608-.065m-1.717 4.69a.715.715 0 0 1 .94 1.036l-.095.107c-1.01.917-1.71 1.687-2.29 2.592-.51.796-.943 1.72-1.406 2.98l-.2.562a.715.715 0 0 1-1.188.262l-2.337-2.41-.09-.113a.714.714 0 0 1 1.005-.974l.111.094 1.544 1.592c.421-1.085.849-1.968 1.358-2.763.672-1.048 1.467-1.913 2.532-2.878zm-3.48-7.032-1.204.049c-.594.022-.96.177-1.167.362-.191.171-.327.437-.327.872s.136.7.327.871c.207.185.572.342 1.167.364l1.203.047c.823.032.786.017 2.468-.047l.212-.015c.47-.048.772-.187.953-.349.192-.171.328-.436.328-.871s-.136-.701-.328-.872c-.181-.162-.482-.301-.953-.349l-.212-.013c-1.682-.064-1.645-.081-2.468-.05"
		/>
	</svg>
);

const IconNoPoverty = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<path
			fill="currentColor"
			d="M12.137 11.43c1.023 0 1.93.292 2.58.942s.942 1.559.942 2.582-.29 1.93-.941 2.581q-.024.023-.05.045.473.25.89.59a5.4 5.4 0 0 1 1.826 2.883.764.764 0 0 1-1.482.368 3.88 3.88 0 0 0-3.765-2.944 3.88 3.88 0 0 0-3.765 2.944.763.763 0 0 1-1.481-.368 5.4 5.4 0 0 1 2.713-3.472l-.05-.046c-.65-.65-.94-1.558-.94-2.58 0-1.024.29-1.932.94-2.583.651-.65 1.56-.941 2.583-.941m0 1.528c-.742 0-1.216.206-1.503.493s-.493.76-.493 1.503.206 1.215.493 1.502c.285.285.753.49 1.485.493h.034c.733-.003 1.2-.208 1.486-.493.287-.287.494-.76.494-1.502s-.207-1.215-.494-1.503-.76-.493-1.502-.493M7.27 1.999c1.023 0 1.93.291 2.58.941.651.651.942 1.56.942 2.582 0 1.024-.291 1.93-.941 2.582l-.05.044q.368.196.705.447l.183.143.058.052a.764.764 0 0 1-.96 1.177l-.063-.047-.132-.103a3.88 3.88 0 0 0-6.088 2.172.764.764 0 0 1-1.482-.367A5.4 5.4 0 0 1 4.735 8.15l-.048-.045c-.65-.651-.94-1.558-.94-2.582s.29-1.93.94-2.582C5.338 2.29 6.247 2 7.27 2m9.461 0c1.024 0 1.93.291 2.581.941.651.651.942 1.56.942 2.582 0 1.024-.291 1.93-.942 2.582l-.048.045q.47.25.888.59a5.4 5.4 0 0 1 1.825 2.883.764.764 0 0 1-1.458.442l-.023-.075-.087-.3a3.9 3.9 0 0 0-.988-1.56l-.235-.21a3.88 3.88 0 0 0-4.91 0 .764.764 0 0 1-.966-1.18 5.4 5.4 0 0 1 .887-.59l-.048-.045c-.65-.651-.94-1.558-.941-2.582 0-1.023.29-1.93.941-2.582C14.8 2.29 15.71 2 16.731 2M7.27 3.526c-.743 0-1.216.206-1.503.494-.288.287-.494.76-.494 1.502 0 .743.206 1.215.494 1.502.285.286.752.49 1.485.494h.033c.733-.003 1.201-.208 1.486-.494.288-.287.495-.76.495-1.502S9.059 4.307 8.77 4.02c-.287-.288-.76-.494-1.501-.494m9.461 0c-.742 0-1.215.206-1.503.494-.287.287-.493.76-.493 1.502 0 .743.206 1.215.494 1.502.285.286.752.49 1.485.494h.033c.733-.003 1.201-.208 1.486-.494.288-.287.494-.76.494-1.502s-.206-1.215-.494-1.502c-.287-.288-.76-.494-1.502-.494"
		/>
	</svg>
);

const IconExpandMore = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<path
			fill="currentColor"
			d="M12 14.662a.829.829 0 0 1-.633-.256L6.873 9.912a.73.73 0 0 1-.212-.523.7.7 0 0 1 .212-.531.72.72 0 0 1 .527-.218q.31 0 .527.218L12 12.93l4.073-4.073a.73.73 0 0 1 .522-.213.7.7 0 0 1 .532.213q.217.217.217.527a.72.72 0 0 1-.217.527l-4.494 4.494a.83.83 0 0 1-.633.255"
		/>
	</svg>
);

const IconArrowDropdown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<path
			fill="currentColor"
			d="m11.377 14.021-2.235-2.234q-.427-.427-.193-.982t.841-.555h4.439q.607 0 .841.555t-.193.982l-2.235 2.234a.9.9 0 0 1-.296.206.9.9 0 0 1-.336.065.9.9 0 0 1-.337-.065.9.9 0 0 1-.296-.206"
		/>
	</svg>
);

type NavRouteDef = {
	id: string;
	label: string;
	master: ComponentType<SVGProps<SVGSVGElement>>;
	lucide: ComponentType<SVGProps<SVGSVGElement>>;
	active?: boolean;
	badge?: string;
};

const mainRoutes: NavRouteDef[] = [
	{ id: 'home', label: 'Home', master: IconHome2, lucide: HouseIcon },
	{ id: 'carriers', label: 'Carriers', master: IconApplications, lucide: Grid2x2Icon },
	{
		id: 'appetite-checker',
		label: 'Appetite checker',
		master: IconApplicationSearch,
		lucide: ScanSearchIcon
	},
	{
		id: 'applications',
		label: 'Applications',
		master: IconClipboardSearch,
		lucide: ClipboardListIcon
	},
	{
		id: 'bind-requests',
		label: 'Bind requests',
		master: IconClipboardCheck2,
		lucide: ClipboardCheckIcon,
		active: true,
		badge: '10'
	}
];

const moreRoutes: NavRouteDef[] = [
	{ id: 'leads', label: 'Leads', master: IconNoPoverty, lucide: UsersIcon }
];

/**
 * Recreates the portal-ui sidebar nav with both icon families rendered
 * side-by-side. Left column uses the inline `@agentero/icons` SVGs (custom
 * Material-Symbols-derived geometry, filled, 24px) currently shipping in
 * production. Right column swaps each icon for its closest match from
 * `lucide-react` (stroke=2, 24px) — the family proposed in PR #20.
 *
 * Both columns share identical structure, spacing, and typography so the
 * only variable is the icon family.
 *
 * @summary Portal sidebar nav: master icons vs lucide
 */
const meta: Meta = {
	title: 'Foundations/Icons / In Nav Context',
	parameters: {
		layout: 'padded'
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

type SidebarVariant = 'master' | 'lucide';

const renderSidebar = (variant: SidebarVariant) => {
	const iconClass = cn(
		'size-6 shrink-0',
		variant === 'master' ? 'text-icon-default-base-secondary' : 'text-icon-default-base-secondary'
	);

	const renderRoute = (route: NavRouteDef) => {
		const Icon = variant === 'master' ? route.master : route.lucide;
		return (
			<li key={route.id}>
				<a
					href="#"
					onClick={e => e.preventDefault()}
					className={cn(
						'flex h-9 items-center gap-2 rounded-md p-1.5 text-sm no-underline transition-colors',
						'text-text-default-base-primary',
						route.active ? 'bg-bg-default-brand-tertiary' : 'hover:bg-bg-default-brand-tertiary'
					)}>
					<Icon className={iconClass} />
					<span className="min-w-0 flex-1 truncate">{route.label}</span>
					{route.badge && (
						<span className="rounded-md bg-bg-default-danger-tertiary px-1.5 py-0.5 text-xs text-text-default-danger-primary">
							{route.badge}
						</span>
					)}
				</a>
			</li>
		);
	};

	const ExpandMore = variant === 'master' ? IconExpandMore : ChevronDownIcon;
	const ArrowDropdown = variant === 'master' ? IconArrowDropdown : ChevronDownIcon;

	return (
		<div className="flex w-[17.5rem] flex-col gap-6 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6">
			{/* Agent dropdown header */}
			<button
				type="button"
				className="flex min-w-0 cursor-pointer items-center gap-3 rounded-lg border border-border-default-base-primary bg-bg-button-ghost-enable p-2 text-left text-text-button-ghost-enable transition-all hover:bg-bg-button-ghost-hover">
				<span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border-default-base-primary bg-bg-default-base-primary text-sm font-medium text-text-default-base-primary">
					R
				</span>
				<span className="flex min-w-0 flex-1 flex-col gap-1">
					<span className="truncate text-sm">Renato Miljato...</span>
					<span className="w-fit rounded-md bg-bg-default-brand-tertiary px-2 py-0.5 text-xs text-text-default-brand-primary">
						Elite
					</span>
				</span>
				<ExpandMore className="size-6 shrink-0 text-icon-default-base-secondary" />
			</button>

			{/* Get quotes button */}
			<button
				type="button"
				className="rounded-full bg-bg-button-secondary-enable px-4 py-2 text-sm font-semibold text-text-button-secondary-enable transition-colors hover:bg-bg-button-secondary-hover">
				Get quotes
			</button>

			{/* Nav list */}
			<ul className="flex flex-col gap-6" aria-label="Navigation list">
				<li>
					<ul className="flex flex-col gap-1">{mainRoutes.map(renderRoute)}</ul>
				</li>
				<li>
					<div className="flex flex-col gap-1">
						<div className="flex w-full items-center justify-between rounded-md px-2 py-0.5">
							<h2 className="text-sm">More</h2>
							<ArrowDropdown className="size-6 shrink-0 text-icon-default-base-secondary" />
						</div>
						<ul className="flex flex-col gap-1">{moreRoutes.map(renderRoute)}</ul>
					</div>
				</li>
			</ul>
		</div>
	);
};

export const SideBySide: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<div className="flex gap-8">
				<div className="flex flex-col gap-3">
					<div className="flex flex-col gap-0.5">
						<span className="text-sm font-semibold text-text-default-base-primary">
							Master (today)
						</span>
						<span className="text-xs text-text-default-base-tertiary">
							@agentero/icons · custom Material-derived, filled @ 24px
						</span>
					</div>
					{renderSidebar('master')}
				</div>
				<div className="flex flex-col gap-3">
					<div className="flex flex-col gap-0.5">
						<span className="text-sm font-semibold text-text-default-base-primary">
							PR #20 (lucide)
						</span>
						<span className="text-xs text-text-default-base-tertiary">
							lucide-react · stroke=2 @ 24px
						</span>
					</div>
					{renderSidebar('lucide')}
				</div>
			</div>

			<div className="flex max-w-2xl flex-col gap-2 text-xs text-text-default-base-secondary">
				<p>
					<strong className="text-text-default-base-primary">Icon mapping used:</strong>
				</p>
				<ul className="flex flex-col gap-1 ps-4">
					<li>
						<code>IconHome2</code> → <code>HouseIcon</code>
					</li>
					<li>
						<code>IconApplications</code> → <code>Grid2x2Icon</code>
					</li>
					<li>
						<code>IconApplicationSearch</code> → <code>ScanSearchIcon</code>
					</li>
					<li>
						<code>IconClipboardSearch</code> → <code>ClipboardListIcon</code>
					</li>
					<li>
						<code>IconClipboardCheck2</code> → <code>ClipboardCheckIcon</code>
					</li>
					<li>
						<code>IconNoPoverty</code> → <code>UsersIcon</code>
					</li>
					<li>
						<code>IconExpandMore</code> / <code>IconArrowDropdown</code> →{' '}
						<code>ChevronDownIcon</code>
					</li>
				</ul>
			</div>
		</div>
	)
};
