const settings = require( '../frontity.settings' );
const RSS = require( 'rss' );
const fetch = require( 'node-fetch' );

const endpoint = 'https://public-api.wordpress.com/wp/v2/sites/igmoweb.com';
const feed = new RSS( {
	title: settings.default.state.frontity.title,
	description: settings.default.state.frontity.description,
	feed_url: 'https://igmoweb.com/api/rss',
	site_url: 'https://igmoweb.com',
	image_url: 'https://igmoweb.files.wordpress.com/2020/05/bug.png',
	language: 'es',
} );

const get = () => {
	return fetch( `${ endpoint }/posts` ).then( ( response ) => {
		if ( ! response.ok ) {
			const { status, statusText } = response;
			throw new Error( statusText );
		}
		return response;
	} );
};

const getData = async () => {
	const response = await fetch( `${ endpoint }/posts` );
	const json = await response.json();
	return json;
};

const https = require( 'https' );
const url = `${ endpoint }/posts`;

https.get( url, ( res ) => {
	res.setEncoding( 'utf8' );
	let body = '';
	res.on( 'data', ( data ) => {
		body += data;
	} );
	res.on( 'end', () => {
		body = JSON.parse( body );
		console.log( body );
	} );
} ).end();
