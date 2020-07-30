const RSS = require( 'rss' );
const axios = require( 'axios' );
const settings = require( '../frontity.settings' );

const rss = new RSS({
	title: settings.default.state.frontity.title,
	description: settings.default.state.frontity.description,
	feed_url: 'https://igmoweb.com/api/rss',
	site_url: 'https://igmoweb.com',
	image_url: 'https://igmoweb.files.wordpress.com/2020/05/bug.png',
	language: 'es',
});

module.exports = ( req, res ) => {
	const url =
		'https://public-api.wordpress.com/wp/v2/sites/igmoweb.com/posts';

	axios.get( url ).then( ( response ) => {
		res.setHeader( 'Content-Type', 'application/rss+xml; charset=UTF-8' );

		response.data.forEach( ( post ) => {
			rss.item( {
				title: post.title.rendered,
				guid: post.guid.rendered,
				url: post.url,
				description: post.content.rendered,
				date: post.date,
			} );
		} );

		console.log( rss.xml() );
		res.send( rss.xml() );
	} );
};
