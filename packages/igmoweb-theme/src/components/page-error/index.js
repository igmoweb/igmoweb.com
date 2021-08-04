import background from '../../assets/murray.jpg';
import theme from '../../styles/theme';
import { Global, connect, css, styled } from 'frontity';
import { mq } from '../../styles';
import { transparentize } from 'polished';

// The 404 page component
const PageError = ( { state } ) => {
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

const globalStyles = css`
	html {
		background-image: url( ${ background } );
		background-repeat: no-repeat;
		background-size: auto;
		${ mq( 'medium' ) } {
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

const Container = styled.div`
	width: 800px;
	margin: 0;
	padding: 24px;
	text-align: left;
`;

const titleBackground = transparentize( 0.1, theme.colorPalette.black );
const Title = styled.h1`
	margin: 0;
	margin-top: 24px;
	margin-bottom: 8px;
	background: ${ titleBackground };
	color: ${ theme.colorPalette.primary };
	font-size: 4em;
	display: inline-block;
	padding: 1rem;
`;

export default connect( PageError );
