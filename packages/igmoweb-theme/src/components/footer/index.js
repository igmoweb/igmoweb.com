import CookieNotice from './cookie-notice';
import IgmowebLink from '../common/link';
import SocialMenu from '../common/social-menu';
import { connect } from 'frontity';

const Footer = ( { className, state } ) => {
	return (
		<div className={ className } id="footer">
			<IgmowebLink link={ state.frontity.feed }>RSS</IgmowebLink>
			<SocialMenu />
			<CookieNotice />
		</div>
	);
};

export default connect( Footer );
