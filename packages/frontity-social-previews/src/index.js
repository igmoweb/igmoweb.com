import Facebook from './previews/facebook';
import React from 'react';
import Twitter from './previews/twitter';

export default {
	roots: {
		socialCards: () => {
			return (
				<>
					<Twitter />
					<Facebook />
				</>
			);
		},
	},
	state: {
		socialCards: {
			siteLogo: 'https://igmoweb.files.wordpress.com/2020/05/bug.png',
			twitter: {
				site: 'igmoweb',
				creator: 'twitter',
			},
			facebook: {
				facebookAppId: '',
			},
		},
	},
};
