const settings = {
	name: 'igmoweb.com',
	state: {
		frontity: {
			url: 'https://igmoweb.com',
			title: 'A mí me funciona',
			description: 'El blog de Ignacio Cruz',
			feed: 'https://igmoweb.com/api/rss',
		},
	},
	packages: [
		{
			name: 'igmoweb-theme',
		},
		{
			name: '@frontity/wp-source',
			state: {
				theme: {
					topBannerPage: '/hola',
					menu: [
						[ 'Cursos', '/cursos' ],
						[ 'Sobre mí', '/sobre-mi' ],
						[ 'Contacto', '/contacto' ],
					],
					codeMenu: [
						[ 'What is Code', '/category/what-is-code' ],
						[ "Please don't code", '/category/please-dont-code/' ],
					],
					featured: {
						showOnList: true,
						showOnPost: false,
					},
				},
				source: {
					api:
						'https://public-api.wordpress.com/wp/v2/sites/igmoweb.com',
				},
			},
		},
		{
			name: '@frontity/google-analytics',
			state: {
				googleAnalytics: {
					trackingId: 'UA-168045737-1',
				},
			},
		},
		'@frontity/tiny-router',
		'@frontity/html2react',
	],
};

export default settings;
