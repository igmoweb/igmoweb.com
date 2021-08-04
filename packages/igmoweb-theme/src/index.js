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
			topBannerPage: '/hola',
			autoPrefetch: 'hover',
			menu: [
				[ 'Cursos', '/cursos' ],
				[ 'Sobre mí', '/sobre-mi' ],
				[ 'Contacto', '/contacto' ],
			],
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
