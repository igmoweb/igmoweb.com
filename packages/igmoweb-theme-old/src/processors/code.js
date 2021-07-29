import { css } from 'frontity';

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

		return node;
	},
};
