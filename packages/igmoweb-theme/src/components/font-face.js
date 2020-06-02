import React from 'react';
import { Global, css } from 'frontity';

import RobotoRegular from '../assets/fonts/RobotoMono-Regular.woff2';

const FontFace = () => (
	<Global
		styles={ css`
			/* cyrillic-ext */
			@font-face {
				font-family: 'Roboto Mono';
				src: url( ${RobotoRegular} );
				font-style: normal;
				font-weight: 400;
				font-display: swap;
			}
		` }
	/>
);

export default FontFace;
