import IgmowebLink from '../common/link';
import { connect } from 'frontity';
import { useEffect } from 'react';

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ( { actions, state } ) => {
	// Get the total posts to be displayed based for the current link
	const { next, previous } = state.source.get( state.router.link );

	// Pre-fetch the the next page if it hasn't been fetched yet.
	useEffect( () => {
		if ( next ) actions.source.fetch( next );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	return (
		<div>
			{ next && (
				<IgmowebLink css={ { textAlign: 'left' } } link={ next }>
					&lt;- En episodios anteriores
				</IgmowebLink>
			) }

			{ previous && next && ' - ' }

			{ previous && (
				<IgmowebLink css={ { textAlign: 'right' } } link={ previous }>
					En el próximo capítulo &gt;
				</IgmowebLink>
			) }
		</div>
	);
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect( Pagination );
