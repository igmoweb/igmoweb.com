import WPComCSS from './wp-com.css';
import alignStyles from './align';
import buttonStyles from './buttons';
import codeStyles from './code';
import colorsStyles from './colors';
import columnsStyles from './columns';
import { css } from 'frontity';
import headingsStyles from './headings';
import hljsStyles from 'highlight.js/styles/darcula.css';
import mediaStyles from './media';
import quoteStyles from './quote';

export default css( [
	alignStyles,
	buttonStyles,
	codeStyles,
	colorsStyles,
	columnsStyles,
	mediaStyles,
	quoteStyles,
	headingsStyles,
	WPComCSS,
	hljsStyles,
] );
