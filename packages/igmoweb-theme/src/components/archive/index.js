import List from './list';
import Pagination from '../archive/pagination';
import React from 'react';
import TopBanner from './top-banner';
import { connect } from 'frontity';
import ArchiveTitle from './archive-title';

const Archive = ( { state } ) => {
	const data = state.source.get( state.router.link );

	const { isHome, isTaxonomy, items, page } = data;

	const posts = items.map( ( { id, type } ) => {
		return state.source[ type ][ id ];
	} );

	return (
		<>
			{ page === 1 && isHome && <TopBanner /> }
			{ isTaxonomy && <ArchiveTitle /> }
			<List posts={ posts } />
			<Pagination />

			
		</>
	);
};

export default connect( Archive );
