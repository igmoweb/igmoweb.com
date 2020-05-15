import Archive from './archive';
import Author from './author';
import Loading from './common/loading';
import MaxWidth from './common/max-width';
import PageError from './page-error';
import React from 'react';
import Single from './single';
import Switch from '@frontity/components/switch';
import { connect, styled } from 'frontity';

const Main = ( { state } ) => {
	const data = state.source.get( state.router.link );
	return (
		<Container>
			<Switch>
				<Loading when={ data.isFetching } />
				<Author when={ data.isAuthor } />
				<Archive when={ data.isArchive } />
				<Single when={ data.isPostType } />
				<PageError when={ data.isError } />
			</Switch>
		</Container>
	);
};

const Container = styled( MaxWidth )``;

export default connect( Main );
