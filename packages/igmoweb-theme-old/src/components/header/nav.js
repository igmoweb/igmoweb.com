import { NoDecoratedLink } from '../common/link';
import React from 'react';
import { badge } from '../../styles';
import config from '../../config';
import { darken } from 'polished';
import { mq } from '../../styles';
import { connect, styled } from 'frontity';

const { colorPalette, fontSizes } = config;

const stripSlash = ( url ) => url.replace( /\/$/, '' );

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ( { className, state } ) => (
	<NavContainer className={ className } id="navigation">
		{ state.theme.menu.map( ( [ name, link ] ) => {
			const isCurrentPage =
				stripSlash( state.router.link ) === stripSlash( link );
			return (
				<NavItem key={ name }>
					<NoDecoratedLink
						aria-current={ isCurrentPage ? 'page' : undefined }
						className={ isCurrentPage ? 'badge__active' : '' }
						css={ badge }
						link={ link }
					>
						{ name }
					</NoDecoratedLink>
				</NavItem>
			);
		} ) }
	</NavContainer>
);

export default connect( Nav );

const NavContainer = styled.ul`
	background-color: ${darken( 0.03, colorPalette.black )};
	padding-top: 1rem;
	padding-bottom: 1rem;
	width: 100vw;
	flex-wrap: wrap;
	list-style: none;
	display: flex;
	margin: 0;
	justify-content: center;

	${mq( 'medium' )} {
		width: auto;
		padding: 0;
		background-color: unset;
	}
`;

const NavItem = styled.li`
	padding: 0;
	color: ${colorPalette.white};
	font-size: ${fontSizes.small};
	flex-shrink: 0;
	line-height: 3;
	margin-left: 1rem;
	&:first-of-type {
		margin-left: 0;
	}

	& > a {
		font-weight: 800;
	}
	&:last-of-type {
		margin-right: 0;
	}
`;
