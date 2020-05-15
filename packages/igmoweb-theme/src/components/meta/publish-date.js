import config from '../../config';
import { dateI18n } from '@wordpress/date';
import { styled } from 'frontity';

const { fontSizes } = config;

const PublishDate = ( { postDate } ) => {
	const date = new Date( postDate );
	return (
		<Container className="publish-date">
			{ dateI18n( 'd M, Y', date.getTime() ) }
		</Container>
	);
};

export default PublishDate;

const Container = styled.div`
	font-size: ${fontSizes.xsmall};
`;
