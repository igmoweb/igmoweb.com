import IgmowebLink from '../common/link';
import { connect } from 'frontity';

const stripSlash = ( url ) => url.replace( /\/$/, '' );

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ( { className, state } ) => (
	<ul className={ className } id="navigation">
		{ state.theme.menu.map( ( [ name, link ] ) => {
			const isCurrentPage =
				stripSlash( state.router.link ) === stripSlash( link );
			return (
				<li key={ name }>
					<IgmowebLink
						aria-current={ isCurrentPage ? 'page' : undefined }
						className={ isCurrentPage ? 'badge__active' : '' }
						link={ link }
					>
						{ name }
					</IgmowebLink>
				</li>
			);
		} ) }
	</ul>
);

export default connect( Nav );
