import { useEffect, useState } from 'react';

const CookieNotice = () => {
	const { isInitialized, setInitialized } = useState( false );
	useEffect( () => {
		const cookieconsent = window.cookieconsent || false;
		if ( ! cookieconsent || isInitialized ) {
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
				message:
					'Si continúas navegando por esta web, entendemos que aceptas las cookies que usamos para mejorar nuestros servicios.',
				dismiss: 'Vale',
				link: 'Me interesa un montón, leer más',
				href: 'https://igmoweb.com/cookies',
			},
		} );

		setInitialized( true );
	} );
	return (
		<script
			data-cfasync="false"
			src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
		/>
	);
};

export default CookieNotice;
