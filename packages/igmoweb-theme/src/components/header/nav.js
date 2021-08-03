import IgmowebLink from '../common/link';
import { connect, styled } from 'frontity';
import { darken } from 'polished';
import theme from '../../styles/theme';
import { badge, badgeActive, mq } from '../../styles';

const stripSlash = ( url ) => url.replace( /\/$/, '' );

const Nav = ( { className, state } ) => {
	return (
		<NavContainer className={ className } id="navigation">
			{ state.theme.menu.map( ( [ name, link ] ) => {
				const isCurrentPage =
					stripSlash( state.router.link ) === stripSlash( link );
				return (
					<NavItem key={ name }>
						{ isCurrentPage ? (
							<CurrentNavLink aria-current="page" link={ link }>
								{ name }
							</CurrentNavLink>
						) : (
							<NavLink link={ link }>{ name }</NavLink>
						) }
					</NavItem>
				);
			} ) }
		</NavContainer>
	);
};

const NavContainer = styled.ul`
	background-color: ${ darken( 0.03, theme.colorPalette.black ) };
	padding-top: 1rem;
	padding-bottom: 1rem;
	width: 100vw;
	flex-wrap: wrap;
	list-style: none;
	display: flex;
	margin: 0;
	justify-content: center;

	${ mq( 'medium' ) } {
		width: auto;
		padding: 0;
		background-color: unset;
	}
`;

const NavItem = styled.li`
	padding: 0;
	color: ${ theme.colorPalette.white };
	font-size: ${ theme.fontSizes.small };
	flex-shrink: 0;
	line-height: 3;
	margin-left: 1rem;
	cursor: pointer;

	&:first-of-type {
		margin-left: 0;
	}

	& > a {
		font-weight: 800;
		text-decoration: none;
	}
	&:last-of-type {
		margin-right: 0;
	}
`;

const NavLink = styled( IgmowebLink )`
	${ badge }
`;

const CurrentNavLink = styled( NavLink )`
	${ badgeActive }
`;

export default connect( Nav );
