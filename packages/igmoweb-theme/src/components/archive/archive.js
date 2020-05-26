import ArchiveTitle from './archive-title';
import CodeNav from '../header/code-nav';
import List from './list';
import Pagination from '../archive/pagination';
import React from 'react';
import { connect, loadable } from 'frontity';

const TopBanner = loadable( () => import( './top-banner' ) );

const Archive = ( { state } ) => {
	const data = state.source.get( state.router.link );

	const { isHome, isSearch, items, page } = data;

	const posts = items.map( ( { id, type } ) => {
		return state.source[ type ][ id ];
	} );

	return (
		<>
			{ page === 1 && isHome && ! isSearch && <TopBanner /> }
			{ isHome && ! isSearch && <CodeNav /> }
			<ArchiveTitle />
			<List posts={ posts } />
			<Pagination />
		</>
	);
};

export default connect( Archive );
