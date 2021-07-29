import React from 'react';
import background from '../assets/murray.jpg';
import { mq } from '../styles';
import { Global, connect, css, styled } from 'frontity';

const globalStyles = css`
	html {
		background-image: url( ${background} );
		background-repeat: no-repeat;
		background-size: auto;
		${mq( 'medium' )} {
			background-size: cover;
		}
	}

	body {
		background: none;
	}

	#footer,
	#branding > div {
		display: none;
	}

	#navigation {
		background-color: transparent;
		justify-content: left;
		padding-left: 20px;
	}
`;

// The 404 page component
const Page404 = ( { state } ) => {
	const data = state.source.get( state.router.link );

	const title = 'Oops! Something went wrong';
	const title404 = 'Oops! 404';

	return (
		<>
			<Global styles={ globalStyles } />
			<Container>
				<Title>{ data.is404 ? title404 : title }</Title>
			</Container>
		</>
	);
};

export default connect( Page404 );

const Container = styled.div`
	width: 800px;
	margin: 0;
	padding: 24px;
	text-align: left;
`;

const Title = styled.h1`
	margin: 0;
	margin-top: 24px;
	margin-bottom: 8px;
	color: rgba( 12, 17, 43 );
	font-size: 4em;
`;
