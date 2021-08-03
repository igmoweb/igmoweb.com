import Archive from './archive';
import FontFace from './head/font-face';
import Footer from './footer';
import Header from './header';
import Loading from './common/loading';
import PageError from './page-error';
import Single from './single';
import Switch from '@frontity/components/switch';
import Title from './head/title';
import { globalStyles } from '../styles';
import { Global, Head, connect, styled } from 'frontity';
import Container from './common/container';
import { darken } from 'polished';
import theme from '../styles/theme';

const Root = ( { state } ) => {
	const data = state.source.get( state.router.link );
	const {
		isArchive,
		isAuthor,
		isError,
		isFetching,
		isHome,
		isPostType,
		isSearch,
		page,
	} = data;

	const displayTopBanner = isArchive && page === 1 && isHome && ! isSearch;

	return (
		<>
			<Global styles={ globalStyles } />
			<Title />
			<FontFace />
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
				<html lang="es" />
				<link
					href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
					rel="stylesheet"
					type="text/css"
				/>
			</Head>
			<HeaderContainer>
				<Header />
			</HeaderContainer>
			<Container>{ displayTopBanner && <div>TOP BANNER</div> }</Container>
			<Container>
				<Switch>
					<Loading when={ isFetching } />
					<Archive when={ isArchive } />
					<Single when={ isPostType } />
					<PageError when={ isError || isAuthor } />
				</Switch>
			</Container>
			<FooterContainer>
				<Container>
					<Footer />
				</Container>
			</FooterContainer>
		</>
	);
};

const HeaderContainer = styled( Container )`
	margin-bottom: 3rem;
`;

const FooterContainer = styled.div`
	background: ${ darken( 0.03, theme.colorPalette.black ) };
	margin-top: 5rem;
`;

export default connect( Root );
