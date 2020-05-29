import React from 'react';
import usePageDetails from '../hooks/use-page-details';
import { Head, connect } from 'frontity';

const Twitter = ( { state } ) => {
	const { description, image, title } = usePageDetails( state );
	return (
		<Head>
			<meta content="summary" name="twitter:card" />
			{ title !== '' && <meta content={ title } name="twitter:title" /> }
			{ description !== '' && (
				<meta content={ description } name="twitter:description" />
			) }
			{ image !== '' && <meta content={ image } name="twitter:image" /> }
		</Head>
	);
};

export default connect( Twitter );
