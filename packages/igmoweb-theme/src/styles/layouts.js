import { css } from 'frontity';
import mq from './media-queries';

export default {
	flexHor: css`
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 100%;
		${ mq( 'medium' ) } {
			width: 50%;
		}
	`,
};
