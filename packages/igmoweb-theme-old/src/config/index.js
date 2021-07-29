const colorPalette = {
	primary: '#9F73AE',
	secondary: '#48A459',
	tertiary: '#CBA54F',
	cuaternary: '#90A3FA',
	black: '#1D1D26',
	white: '#d0d0d9',
	veryWhite: '#ffffff',
	greyLight: '#A8A8A8',
	greyDark: '#434343',
};

const mainFont = "'Roboto Mono', monospace";

const fontSizes = {
	base: '16px',
	h1: '2rem',
	h2: '1.625rem',
	h3: '1.438rem',
	h4: '1.375rem',
	h5: '1.375rem',
	h6: '1.375rem',
	big: '1.625rem',
	small: '0.875rem',
	xsmall: '0.79rem',
};

const breakpoints = {
	medium: '40rem',
	large: '64rem',
};

const baseLineHeight = 1.5;

export default {
	colorPalette,
	fonts: {
		header: mainFont,
		text: mainFont,
		accent: mainFont,
	},
	fontSizes,
	lineHeight: baseLineHeight,
	breakpoints,
	baseWidth: '60rem',
	boderRadius: '3px',
};
