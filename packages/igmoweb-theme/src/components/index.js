import Archive from './archive';
import FontFace from './font-face';
import Footer from './footer';
import Header from './header/header';
import Loading from './common/loading';
import MaxWidth from './common/max-width';
import PageError from './page-error';
import React from 'react';
import ReactGA from 'react-ga';
import Single from './single';
import Switch from '@frontity/components/switch';
import Title from './title';
import config from '../config';
import { darken } from 'polished';
import { globalStyles } from '../styles';
import { Global, Head, connect, styled } from 'frontity';
import CookieNotice from './cookie-notice'

const { colorPalette } = config;

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ( { state } ) => {
	const data = state.source.get( state.router.link );
	ReactGA.initialize( 'UA-168045737-1' );
	ReactGA.pageview( state.router.link );
	return (
		<>
			<FontFace />
			<Global styles={ globalStyles } />
			<Title />
			<Head>
				<meta
					content={ state.frontity.description }
					name="description"
				/>
				<link
					href={ state.frontity.feed }
					rel="alternate"
					title="Ignacio Cruz Moreno » Feed"
					type="application/rss+xml"
				/>
				<meta
					content="2Mxtpz_D7zcbzwE1_zvXiihh9chlWkdK-oiBqlrv3HE"
					name="google-site-verification"
				/>
				<link
					href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
					rel="stylesheet"
					type="text/css"
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
			<CookieNotice />
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
