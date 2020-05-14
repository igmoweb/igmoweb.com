import { connect, decode, styled } from 'frontity';

const ArchiveTitle = ( { state } ) => {
	const data = state.source.get( state.router.link );
	const { id, isTaxonomy, taxonomy } = data;
	const { source } = state;

	if ( ! isTaxonomy ) {
		return null;
	}

	return (
		<div>
			<StyledArchiveTitle>
				{ taxonomy } =&gt;{ ' ' }
				<strong>{ decode( source[ taxonomy ][ id ].name ) }</strong>
			</StyledArchiveTitle>
		</div>
	);
};

export default connect( ArchiveTitle );

const StyledArchiveTitle = styled.h1`
	margin-bottom: 4rem;
`;
