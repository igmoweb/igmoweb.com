import { styled } from 'frontity';
import config from '../../config';

const { fontSizes } = config;

const Container = styled.div`
	font-size: ${fontSizes.xsmall};
`;

const DATE_OPTIONS = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

const PublishDate = ( { postDate } ) => {
	const date = new Date( postDate );
	return (
		<Container className="publish-date">
			{ date.toLocaleDateString( undefined, DATE_OPTIONS ) }
		</Container>
	);
};

export default PublishDate;
