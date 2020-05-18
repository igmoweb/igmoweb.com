import { css } from 'frontity';
import mq from '../media-queries';

export default css`
	.alignwide {
		${mq( 'medium' )} {
			width: calc( 100% + 120px );
			position: relative;
			left: -60px;
		}
	}
`;
