import config from '../../config';
import { styled } from 'frontity';

const { fontSizes } = config;

const Container = styled.div`
	font-size: ${fontSizes.xsmall};
`;

const PublishDate = ( { postDate } ) => {
	const date = new Date( postDate );
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return (
		<Container className="publish-date">
			{ date.toLocaleDateString( 'es-ES', options ) }
		</Container>
	);
};

export default PublishDate;
