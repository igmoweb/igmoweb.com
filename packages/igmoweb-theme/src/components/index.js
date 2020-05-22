import Archive from './archive';
import Footer from './footer';
import Header from './header/header';
import Loading from './common/loading';
import MaxWidth from './common/max-width';
import PageError from './page-error';
import React from 'react';
import Single from './single';
import Switch from '@frontity/components/switch';
import Title from './title';
import config from '../config';
import { darken } from 'polished';
import { globalStyles } from '../styles';
import { Global, Head, connect, styled } from 'frontity';

const { colorPalette } = config;

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ( { state } ) => {
	const data = state.source.get( state.router.link );
	return (
		<>
			<Global styles={ globalStyles } />
			<Title />
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
					rel="stylesheet"
				/>
				<meta
					content={ state.frontity.description }
					name="description"
				/>
				<link
					href="https://igmoweb.wordpress.com/feed/"
					rel="alternate"
					title="Ignacio Cruz Moreno » Feed"
					type="application/rss+xml"
				/>
				<meta
					content="2Mxtpz_D7zcbzwE1_zvXiihh9chlWkdK-oiBqlrv3HE"
					name="google-site-verification"
				/>
				<html lang="es" />
			</Head>
			<StyledHeader />
			<MaxWidth>
				<Switch>
					<Loading when={ data.isFetching } />
					<Archive when={ data.isArchive } />
					<Single when={ data.isPostType } />
					<PageError when={ data.isError || data.isAuthor } />
				</Switch>
			</MaxWidth>
			<StyledFooter />
		</>
	);
};

export default connect( Theme );

const StyledHeader = styled( Header )`
	margin-bottom: 3rem;
`;

const StyledFooter = styled( Footer )`
	background: ${darken( 0.03, colorPalette.black )};
	margin-top: 5rem;
`;
