import badgeStyles from '../badge';
import config from '../../config';
import { css } from 'frontity';
import { darken } from 'polished';

const { colorPalette } = config;

const buttonStyles = css`
	button,
	.button,
	.wp-block-button {
		${badgeStyles};
		background-color: ${colorPalette.tertiary};
		color: ${colorPalette.black};
		display: inline-block;
		margin: 0 1rem 1rem 0;
		cursor: pointer;
		padding: 0;

		a,
		&__link {
			color: ${colorPalette.black};
			text-decoration: none;
			padding: 0.5rem 0.8rem;
			display: inline-block;
		}

		&:hover {
			background-color: ${darken( 0.2, colorPalette.tertiary )};
			a,
			.wp-block-button__link {
				color: ${colorPalette.white};
			}
		}
	}
`;

export default css( [ buttonStyles ] );
