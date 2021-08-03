import { dark } from '@theme-ui/presets';

export default {
	...dark,
	styles: {
		...dark.styles,
		h2: {
			fontSize: 82,
			fontFamily: 'heading',
			fontWeight: 'heading',
			color: 'primary',
			mt: 4,
			mb: 2,
		},
	},
	fonts: {
		...dark.fonts,
		body: '"Roboto Mono", monospace',
	},
	colors: {
		...dark.colors,
		background: '#1d1d26',
		primary: '#9F73AE',
		secondary: '#CBA54F',
		text: '#d0d0d9',
	},
};
