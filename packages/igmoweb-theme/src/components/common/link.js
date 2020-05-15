import React from 'react';
import { connect, styled } from 'frontity';

const StyledAnchor = styled.a`
	text-decoration: underline;
	&:hover,
	&:active {
		text-decoration: underline;
	}
`;

const Link = ( {
	actions,
	'aria-current': ariaCurrent,
	children,
	className,
	link,
} ) => {
	const onClick = ( event ) => {
		const isExternal = link.startsWith( 'http' );

		// Do nothing if it's an external link
		if ( isExternal ) {
			return;
		}

		event.preventDefault();

		// Set the router to the new url.
		actions.router.set( link );

		// Scroll the page to the top
		window.scrollTo( 0, 0 );
	};

	const onMouseEnter = () => {
		const isExternal = link.startsWith( 'http' );

		// Prefetch the link's content when the user hovers on the link
		if ( ! isExternal ) {
			actions.source.fetch( link );
		}
	};

	return (
		<StyledAnchor
			aria-current={ ariaCurrent }
			className={ className }
			href={ link }
			onClick={ onClick }
			onMouseEnter={ onMouseEnter }
		>
			{ children }
		</StyledAnchor>
	);
};

const ConnectedLink = connect( Link );

export default ConnectedLink;

export const NoDecoratedLink = styled( ConnectedLink )`
	text-decoration: none;
`;
