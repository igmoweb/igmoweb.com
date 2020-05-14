export default {
	name: 'igmoweb',
	state: {
		frontity: {
			url: 'https://igmoweb.com',
			title: 'A mí me funciona',
			description: 'El blog de Ignacio Cruz',
		},
	},
	packages: [
		{
			name: '@frontity/mars-theme',
			state: {
				theme: {
					topBannerPage: '/hola',
					menu: [
						[ 'Kitchen Sink', '/kitchen-sink' ],
						[ 'Cursos', '/cursos' ],
					],
					featured: {
						showOnList: true,
						showOnPost: false,
					},
				},
			},
		},
		{
			name: '@frontity/wp-source',
			state: {
				source: {
					api:
						'https://public-api.wordpress.com/wp/v2/sites/igmoweb.com',
				},
			},
		},
		'@frontity/tiny-router',
		'@frontity/html2react',
	],
};
