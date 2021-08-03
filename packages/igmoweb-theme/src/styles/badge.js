import config from './theme';
import { css } from 'frontity';
import { darken } from 'polished';

const { boderRadius, colorPalette } = config;

export const badgeActive = css`
	text-decoration: none;
	background-color: ${ darken( 0.1, colorPalette.black ) };
`;

export default css`
	border-radius: ${ boderRadius };
	background-color: ${ darken( 0.03, colorPalette.black ) };
	padding: 0.5rem 0.8rem;

	&:hover,
	&:active,
	&.badge__active {
		${ badgeActive }
	}
`;
