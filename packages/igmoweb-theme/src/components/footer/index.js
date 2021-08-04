import CookieNotice from './cookie-notice';
import IgmowebLink from '../common/link';
import SocialMenu from '../common/social-menu';
import { connect, styled } from 'frontity';

const Footer = ( { className, state } ) => {
	return (
		<div className={ className }>
			<Container>
				<IgmowebLink link={ state.frontity.feed }>RSS</IgmowebLink>
				<SocialMenu />
				<CookieNotice />
			</Container>
		</div>
	);
};

const Container = styled.div`
	padding-top: 2rem;
	padding-bottom: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

export default connect( Footer );
