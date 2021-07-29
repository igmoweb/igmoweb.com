import config from '../../config';
import { css } from 'frontity';

const { colorPalette, fontSizes } = config;

export default css`
	figure {
		display: block;
		margin: 0;
	}

	iframe {
		display: block;
		max-width: 100%;
	}

	video {
		display: block;
	}

	svg,
	img,
	embed,
	object {
		display: block;
		height: auto;
		max-width: 100%;
	}

	figcaption,
	.wp-caption-text {
		color: ${colorPalette.white};
		display: block;
		font-size: ${fontSizes.small};
		font-weight: 500;
		line-height: 1.2;
		margin-top: 1.5rem;
		text-align: center;
		padding-top: 0.5rem;
	}

	figcaption a,
	.wp-caption-text a {
		color: inherit;
	}
`;
