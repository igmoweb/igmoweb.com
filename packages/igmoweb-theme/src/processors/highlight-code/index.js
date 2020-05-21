import HighlitedCode from './highlighted-code';
import _get from 'lodash/get';
import { css } from 'frontity';
import highlight from 'highlight.js';

highlight.configure( {
	tabReplace: '  ', // 4 spaces
} );

const LANGS = {
	plain: 'javascript',
	jscript: 'javascript',
};

const mapWPLangs = ( lang ) => {
	return LANGS[ lang ] ? LANGS[ lang ] : lang;
};

export default {
	name: 'highlighted-code',
	test: ( { node } ) => {
		const { children, component, type } = node;
		const firstChild = _get( children, '[0]' );
		if (
			type === 'element' &&
			component === 'pre' &&
			// We are not interested on preformatted blocks
			node?.props?.className !== 'wp-block-preformatted' &&
			// If the first child is a code tag, let's forget about it.
			! (
				firstChild.type === 'element' && firstChild.component === 'code'
			)
		) {
			return true;
		}

		return false;
	},
	processor: ( { node } ) => {
		const { children, props } = node;
		const { className = '' } = props;
		// Find the language
		const brush = /brush\:\s([a-zA-Z]*)\;/gm.exec( className );
		const lang = mapWPLangs( _get( brush, '[1]', '' ) );

		// Add a <code> node inside the preformatted one.
		node.children = [
			{
				type: 'element',
				component: HighlitedCode,
				props: {
					lang: `lang-${ lang }`,
				},
				children,
			},
		];

		node.props.css = css`
			line-height: 1.5;
			margin: 3rem 0;
			overflow: auto;
			padding: 0;
			text-align: left;
			font-size: 0.9rem;
			border-radius: 0.2rem;
			font-weight: 800;
		`;

		return node;
	},
};
