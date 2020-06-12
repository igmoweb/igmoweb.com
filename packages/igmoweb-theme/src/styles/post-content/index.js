import WPComCSS from './wp-com.css';
import alignStyles from './align';
import buttonStyles from './buttons';
import codeStyles from './code';
import colorsStyles from './colors';
import columnsStyles from './columns';
import { css } from 'frontity';
import embedStyles from './embeds';
import headingsStyles from './headings';
import hljsStyles from 'highlight.js/styles/darcula.css';
import mediaStyles from './media';
import quoteStyles from './quote';
import tableStyles from './table';

export default css( [
	alignStyles,
	buttonStyles,
	colorsStyles,
	columnsStyles,
	mediaStyles,
	quoteStyles,
	headingsStyles,
	WPComCSS,
	codeStyles,
	hljsStyles,
	embedStyles,
	tableStyles,
] );
