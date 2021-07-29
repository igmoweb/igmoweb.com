import config from '../config';
import { css } from 'frontity';

const { colorPalette, fontSizes, fonts, lineHeight } = config;

const cssReset = css`
	html,
	body {
		border: none;
		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	address,
	big,
	cite,
	code,
	em,
	font,
	img,
	small,
	strike,
	sub,
	sup,
	li,
	ol,
	ul,
	fieldset,
	form,
	label,
	legend,
	button,
	table,
	caption,
	tr,
	th,
	td {
		border: none;
		font-size: inherit;
		line-height: inherit;
		margin: 0;
		padding: 0;
		text-align: inherit;
	}

	blockquote::before,
	blockquote::after {
		content: '';
	}

	a,
	path {
		transition: all 0.15s linear;
	}
`;

const base = css`
	html {
		font-size: 16px;
	}

	body {
		background: ${colorPalette.black};
		box-sizing: border-box;
		color: ${colorPalette.white};
		font-family: ${fonts.text};
		letter-spacing: -0.015em;
		line-height: ${lineHeight};
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
		-webkit-font-smoothing: antialiased;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-feature-settings: 'lnum';
		font-variant-numeric: lining-nums;
		font-weight: 700;
		margin-bottom: 2rem;
	}

	h1,
	.heading-size-1 {
		font-size: ${fontSizes.h1};
	}

	h2,
	.heading-size-2 {
		font-size: ${fontSizes.h2};
	}

	h3,
	.heading-size-3 {
		font-size: ${fontSizes.h3};
	}

	h4,
	.heading-size-4 {
		font-size: ${fontSizes.h4};
	}

	h5,
	.heading-size-5 {
		font-size: ${fontSizes.h5};
	}

	h6,
	.heading-size-6 {
		font-size: ${fontSizes.h6};
		letter-spacing: 0.03125em;
		text-transform: uppercase;
	}

	p {
		margin: 0 0 1em 0;
		line-height: ${lineHeight * 1.3};
	}

	em,
	i,
	q,
	dfn {
		font-style: italic;
	}

	em em,
	em i,
	i em,
	i i,
	cite em,
	cite i {
		font-weight: bolder;
	}

	big {
		font-size: ${fontSizes.big};
	}

	small {
		font-size: ${fontSizes.small};
	}

	b,
	strong {
		font-weight: 800;
		color: ${colorPalette.veryWhite};
	}

	ins {
		text-decoration: underline;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sup {
		top: -0.5em;
	}

	sub {
		bottom: -0.25em;
	}

	abbr,
	acronym {
		cursor: help;
	}

	address {
		line-height: 1.5;
		margin: 0 0 2rem 0;
	}

	hr {
		border-style: solid;
		border-width: 0.1rem 0 0 0;
		border-color: ${colorPalette.white};
		margin: 4rem 0;
	}

	a {
		color: ${colorPalette.primary};
		text-decoration: underline;
	}

	a:hover,
	a:focus {
		text-decoration: none;
	}
`;

const accessibilitySettings = css`
	@media ( prefers-reduced-motion: reduce ) {
		* {
			animation-duration: 0s !important;
			transition-duration: 0s !important;
		}
	}
`;

const listStyle = css`
	ul,
	ol {
		margin-bottom: 1rem;
	}

	ul {
		list-style: disc;
	}

	ul ul {
		list-style: circle;
	}

	ul ul ul {
		list-style: square;
	}

	ol {
		list-style: decimal;
	}

	ol ol {
		list-style: lower-alpha;
	}

	ol ol ol {
		list-style: lower-roman;
	}

	li {
		line-height: ${lineHeight * 1.3};
		margin: 0.5rem 0 0 2rem;
	}

	li > ul,
	li > ol {
		margin: 1rem 0 0 2rem;
	}

	.reset-list-style,
	.reset-list-style ul,
	.reset-list-style ol {
		list-style: none;
		margin: 0;
	}

	.reset-list-style li {
		margin: 0;
	}

	dt,
	dd {
		line-height: 1.5;
	}

	dt {
		font-weight: 700;
	}

	dt + dd {
		margin-top: 0.5rem;
	}

	dd + dt {
		margin-top: 1.5rem;
	}
`;

export default css( [ cssReset, base, accessibilitySettings, listStyle ] );
