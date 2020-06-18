import { useEffect, useState } from 'react';

const CookieNotice = () => {
	const { initialize, isInitialized } = useState( false );
	useEffect( () => {
		const cookieconsent = window.cookieconsent || false;
		if ( ! cookieconsent ) {
			return;
		}

		cookieconsent.initialise( {
			palette: {
				popup: {
					background: '#16161d',
					text: '#d0d0d9',
				},
				button: {
					background: '#cba54f',
					text: '#1d1d26',
				},
			},
			theme: 'classic',
			content: {
				href: 'https://igmoweb.com/cookies',
			},
		} );
	} );
	return (
		<script
			data-cfasync="false"
			src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
		/>
	);
};

export default CookieNotice;
