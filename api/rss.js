const RSS = require( 'rss' );
const axios = require( 'axios' );
const settings = require( '../frontity.settings' );
const _get = require( 'lodash/get' );

const rss = new RSS({
	title: settings.default.state.frontity.title,
	description: settings.default.state.frontity.description,
	feed_url: 'https://igmoweb.com/api/rss',
	site_url: 'https://igmoweb.com',
	image_url: 'https://igmoweb.files.wordpress.com/2020/05/bug.png',
	language: 'es',
	categories: [ 'Development', 'Software', 'WordPress', 'JavaScript' ],
});

module.exports = ( req, res ) => {
	const url =
		'https://public-api.wordpress.com/wp/v2/sites/igmoweb.com/posts?_embed';

	axios.get( url ).then( ( response ) => {
		res.setHeader( 'Content-Type', 'application/rss+xml; charset=UTF-8' );

		response.data.forEach( ( post ) => {
			const allTerms = _get( post, '_embedded[wp:term]' );
			const categories = allTerms.reduce( (acc, taxonomyTerms) => {
				return [
					...acc,
					...taxonomyTerms.filter( term => term.taxonomy === 'category' ).map( ( term ) => {
						return term.name;
					})
				];
			}, [] );

			rss.item( {
				title: post.title.rendered,
				url: post.url,
				guid: post.url,
				description: post.content.rendered,
				date: post.date,
				image_url: _get( post, '_embedded[wp:featuredmedia][0].media_details.sizes[thumbnail].source_url', '' ),
				categories,
			} );
		} );

		res.send( rss.xml() );
	} );
};
