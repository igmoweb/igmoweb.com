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
			/**
			 * Add a processor to `html2react` so it processes the `<img>` tags
			 * inside the content HTML. You can add your own processors too
			 */
			processors: [ image, iframe, link, ...customProcessors ],
		},
	},
};
