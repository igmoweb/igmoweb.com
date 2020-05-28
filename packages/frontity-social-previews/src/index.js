import React from 'react';
import _get from 'lodash/get';
import { Head, connect, decode } from 'frontity';

const socialCards = connect( ( { state } ) => {
	const { socialCards, source } = state;
	const { siteLogo } = socialCards;
	console.log( siteLogo );
	const data = source.get( state.router.link );
	const { id, isPostType, type } = data;

	let description = '';
	let title = '';
	if ( isPostType ) {
		title = _get( source, `[${ type }][${ id }].title.rendered`, '' );
		description = _get(
			source,
			`[${ type }][${ id }].excerpt.rendered`,
			''
		);
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
					<meta
						content={ description }
						name="twitter:description"
					/>
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
