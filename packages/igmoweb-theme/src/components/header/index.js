import IgmowebLink from '../common/link';
import Nav from './nav';
import theme from '../../styles/theme';
import { mq } from '../../styles';
import { connect, styled } from 'frontity';

const Header = ( { state } ) => {
	return (
		<Flex>
			<Branding>
				<TitleLink link="/">
					<Title>{ state.frontity.title }</Title>
				</TitleLink>
				<Description>{ state.frontity.description }</Description>
			</Branding>
			<Nav />
		</Flex>
	);
};

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 0 2rem 0;
	flex-direction: column;
	${ mq( 'medium' ) } {
		flex-direction: row;
	}
`;

const Branding = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	margin-bottom: 2rem;
	${ mq( 'medium' ) } {
		margin-bottom: 0;
		width: 50%;
	}
`;

const Description = styled.div`
	color: ${ theme.colorPalette.secondary };
	&:before {
		content: ':~$ ';
	}
`;

const Title = styled.h2`
	margin: 0;
	margin-bottom: 16px;
	width: 100%;
`;

const TitleLink = styled( IgmowebLink )`
	text-decoration: none;
`;

// Connect the Header component to get access to the `state` in it's `props`
export default connect( Header );
