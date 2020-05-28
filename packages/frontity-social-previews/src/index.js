import React from 'react';
import { Head, connect } from 'frontity';

const socialCards = connect( ( { state } ) => {
	const { socialCards, source } = state;
	const { siteLogo } = socialCards;
	const data = source.get( state.router.link );
	const { id, isPostType, type } = data;

	let description = '';
	let title = '';
	let image = siteLogo || '';
	if ( isPostType ) {
		const post = source[ type ][ id ];
		title = post?.title?.rendered || '';
		description = post?.excerpt?.rendered || '';
		const mediaId = post.featured_media || '';
		const media = state?.source?.attachment[ mediaId ] || '';
		/* eslint-disable camelcase */
		image = media?.media_details?.sizes?.thumbnail
			? media?.media_details?.sizes?.thumbnail?.source_url
			: media?.source_url;
		/* eslint-enable */
	} else {
		title = state?.frontity?.title || '';
		description = state?.frontity?.description || '';
	}

	return (
		<>
			<Head>
				<meta content="summary" name="twitter:card" />
				{ title !== '' && (
					<meta content={ title } name="twitter:title" />
				) }
				{ description !== '' && (
					<meta content={ description } name="twitter:description" />
				) }
				{ description !== '' && (
					<meta content={ image } name="twitter:image" />
				) }
			</Head>
		</>
	);
} );
export default {
	roots: {
		socialCards,
	},
	state: {
		socialCards: {
			siteLogo: 'https://igmoweb.files.wordpress.com/2020/05/bug.png',
			twitter: {
				site: 'igmoweb',
				creator: 'twitter',
			},
		},
	},
};
