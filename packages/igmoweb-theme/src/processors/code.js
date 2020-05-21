import _get from 'lodash/get';

const LANGS = {
	plain: 'javascript',
	jscript: 'javascript',
};

const mapWPLangs = ( lang ) => {
	return LANGS[ lang ] ? LANGS[ lang ] : lang;
};

export default {
	name: 'code',
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
		const brush = /^brush\:\s([a-zA-Z]*)\;/gm.exec( className );
		const lang = mapWPLangs( _get( brush, '[1]', '' ) );

		// Add a <code> node inside the preformatted one.
		node.children = [
			{
				type: 'element',
				component: ( { children, lang } ) => (
					<code className={ lang }>
						{ children.replace( /^(\n)|(\r\n)/, '' ) }
					</code>
				),
				props: {
					lang: `lang-${ lang }`,
				},
				children,
			},
		];
		return node;
	},
};
