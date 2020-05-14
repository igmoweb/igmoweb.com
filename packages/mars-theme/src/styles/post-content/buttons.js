import badgeStyles from '../badge';
import { css } from 'frontity';

const buttonStyles = css`
	button,
	.button,
	.wp-block-button {
		${badgeStyles};
		display: inline-block;
		margin: 0 1rem 1rem 0;
		cursor: pointer;
		padding: 0;
		&__link {
			text-decoration: none;
			padding: 0.5rem 0.8rem;
			display: inline-block;
		}
	}
`;

export default css( [ buttonStyles ] );
