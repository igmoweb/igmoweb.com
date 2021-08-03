import theme from './theme';
import { css } from 'frontity';

export default {
	container: css`
		width: ${ theme.baseWidth };
		padding: 0 1.5rem;
		max-width: 100%;
		margin: 0 auto;
	`,
};
