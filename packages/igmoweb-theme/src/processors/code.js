import _get from 'lodash/get';
import { css, styled } from 'frontity';

const LANGS = {
	plain: 'javascript',
	jscript: 'javascript',
};

const mapWPLangs = ( lang ) => {
	return LANGS[ lang ] ? LANGS[ lang ] : lang;
};

const HighlitedCode = ( { children, lang } ) => (
	<CodeContainer className={ lang }>
		{ children.replace( /^(\n)|(\r\n)/, '' ) }
	</CodeContainer>
);

const CodeContainer = styled.code`
	background: #000;
	padding: 3px;
	font-weight: 800;
	border: 1px solid #111;
`;

export default {
	name: 'code',
	test: ( { node } ) => {
		const { component, parent, type } = node;
		if ( type !== 'element' || component !== 'code' ) {
			return false;
		}

		if ( parent?.component === 'pre' ) {
			return false;
		}

		return true;
	},
	processor: ( { node } ) => {
		node.props.css = css`
			background: #0f0f13;
			padding: 3px;
			border-radius: 3px;
			font-size: 0.9rem;
		`;

		console.log( 'node', node );

		return node;
	},
};
