import Root from './components/root';
import iframe from '@frontity/html2react/processors/iframe';
import image from '@frontity/html2react/processors/image';
import link from '@frontity/html2react/processors/link';
import customProcessors from './processors';

export default {
	name: 'igmoweb-theme',
	roots: {
		theme: Root,
	},
	state: {
		theme: {
			autoPrefetch: 'hover',
		},
	},
	actions: {
		theme: {},
	},
	libraries: {
		html2react: {
			processors: [ image, iframe, link, ...customProcessors ],
		},
	},
};
