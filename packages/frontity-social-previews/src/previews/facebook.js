import React from 'react';
import usePageDetails from '../hooks/use-page-details';
import { Head, connect } from 'frontity';

const Facebook = ( { state } ) => {
	const { description, image, title } = usePageDetails( state );
	const { socialCards } = state;
	const { facebook } = socialCards;
	return (
		<Head>
			<meta content={ location.href } property="og:url" />
			<meta content={ location.href } property="og:type" />
			{ title !== '' && <meta content={ title } name="og:title" /> }
			{ description !== '' && (
				<meta content={ description } name="og:description" />
			) }
			{ image !== '' && <meta content={ image } name="og:image" /> }
			{ facebook.facebookAppId !== '' && (
				<meta content={ image } name="og:app_id" />
			) }
		</Head>
	);
};

export default connect( Facebook );
