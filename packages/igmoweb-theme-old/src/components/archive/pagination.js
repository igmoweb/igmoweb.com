import { NoDecoratedLink } from '../common/link';
import config from '../../config';
import React, { useEffect } from 'react';
import { connect, styled } from 'frontity';

const { fontSizes } = config;

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
		<StyledPagination>
			{ next && (
				<PageLink css={ { textAlign: 'left' } } link={ next }>
					&lt;- En episodios anteriores
				</PageLink>
			) }

			{ previous && next && ' - ' }

			{ previous && (
				<PageLink css={ { textAlign: 'right' } } link={ previous }>
					En el próximo capítulo &gt;
				</PageLink>
			) }
		</StyledPagination>
	);
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect( Pagination );

const StyledPagination = styled.div`
	display: flex;
	> * {
		flex-grow: 1;
	}
`;
const PageLink = styled( NoDecoratedLink )`
	display: inline-block;
	margin-top: 16px;
	font-size: ${fontSizes.small};
`;
