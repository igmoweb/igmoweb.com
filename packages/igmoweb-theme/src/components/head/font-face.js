import RobotoRegular from '../../assets/fonts/RobotoMono-Regular.woff2';
import { Global, css } from 'frontity';

const FontFace = () => (
	<Global
		styles={ css`
			@font-face {
				font-family: 'Roboto Mono';
				src: url( ${ RobotoRegular } ) format( 'woff2' );
				font-style: normal;
				font-weight: 400;
				font-display: swap;
			}
		` }
	/>
);

export default FontFace;
