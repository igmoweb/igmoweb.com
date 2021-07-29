import ArchiveTitle from './archive-title';
import List from './list';
import Pagination from './pagination';
import { connect } from 'frontity';

const Archive = ( { state } ) => {
	const data = state.source.get( state.router.link );

	const { isHome, isSearch, items, page } = data;

	const posts = items.map( ( { id, type } ) => {
		return state.source[ type ][ id ];
	} );

	return (
		<>
			{ /*{ page === 1 && isHome && ! isSearch && <TopBanner /> }*/ }
			{ /*{ isHome && ! isSearch && <CodeNav /> }*/ }
			<ArchiveTitle />
			<List posts={ posts } />
			<Pagination />
		</>
	);
};

export default connect( Archive );
