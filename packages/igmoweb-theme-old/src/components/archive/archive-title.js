import React from 'react';
import { connect, decode, styled } from 'frontity';

const ArchiveTitle = ( { state } ) => {
	const data = state.source.get( state.router.link );
	const { id, isSearch, isTaxonomy, searchQuery, taxonomy } = data;
	const { source } = state;

	let title = '';
	if ( isTaxonomy ) {
		title = (
			<>
				{ taxonomy } =&gt;{ ' ' }
				<strong>{ decode( source[ taxonomy ][ id ].name ) }</strong>
			</>
		);
	} else if ( isSearch ) {
		title = <>Buscando =&gt; { searchQuery }</>;
	}

	return (
		<div>
			<StyledArchiveTitle>{ title }</StyledArchiveTitle>
		</div>
	);
};

export default connect( ArchiveTitle );

const StyledArchiveTitle = styled.h1`
	margin-bottom: 4rem;
`;
