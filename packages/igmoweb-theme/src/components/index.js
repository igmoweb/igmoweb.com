import Footer from './footer';
import Header from './header/header';
import Main from './main';
import React from 'react';
import Title from './title';
import config from '../config';
import { darken } from 'polished';
import { globalStyles } from '../styles';
import { Global, Head, connect, styled } from 'frontity';

const { colorPalette } = config;

const StyledHeader = styled( Header )`
	margin-bottom: 3rem;
`;

const StyledFooter = styled( Footer )`
	background: ${darken( 0.03, colorPalette.black )};
	margin-top: 5rem;
`;

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ( { state } ) => {
	// Get information about the current URL.
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
				<html lang="es" />
			</Head>
			<StyledHeader />
			<Main />
			<StyledFooter />
		</>
	);
};

export default connect( Theme );
