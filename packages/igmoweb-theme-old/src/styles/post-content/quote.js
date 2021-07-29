import config from '../../config';
import { css } from 'frontity';

const { colorPalette, fontSizes } = config;

export default css`
	blockquote {
		border-color: ${colorPalette.primary};
		border-style: solid;

		/*rtl:ignore*/
		border-width: 0 0 0 0.2rem;
		color: inherit;
		font-size: 1em;
		margin: 4rem 0;

		/*rtl:ignore*/
		padding: 0.5rem 0 0.5rem 2rem;
	}

	cite {
		color: ${colorPalette.gray};
		font-size: ${fontSizes.h4};
		font-style: normal;
		font-weight: 600;
		line-height: 1.25;
	}

	blockquote cite {
		display: block;
		margin: 2rem 0 0 0;
	}

	blockquote p:last-child {
		margin: 0;
	}
`;
