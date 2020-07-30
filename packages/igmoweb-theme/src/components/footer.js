import MaxWidth from './common/max-width';
import { NoDecoratedLink } from './common/link';
import React from 'react';
import SocialMenu from './common/social-menu';
import { connect, styled } from 'frontity';

const StyledMaxWidth = styled( MaxWidth )`
	padding-top: 2rem;
	padding-bottom: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const Footer = ( { className, state } ) => {
	return (
		<div className={ className } id="footer">
			<StyledMaxWidth>
				<NoDecoratedLink link={ state.frontity.feed }>
					RSS
				</NoDecoratedLink>
				<SocialMenu />
			</StyledMaxWidth>
		</div>
	);
};

export default connect( Footer );
