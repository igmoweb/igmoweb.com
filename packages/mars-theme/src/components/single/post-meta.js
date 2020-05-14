import PostCategories from './post-categories';
import PublishDate from '../meta/publish-date';
import config from '../../config';
import { mq } from '../../styles';
import { connect, styled } from 'frontity';

export default connect( ( { post } ) => {
	const { date } = post;
	return (
		<Meta>
			<PublishDate postDate={ date } />
			<Dot>·</Dot>
			<PostCategories post={ post } />
		</Meta>
	);
} );

const { fontSizes } = config;

const Dot = styled.span`
	display: none;
	${mq( 'medium' )} {
		display: block;
	}
`;

const Meta = styled.section`
	display: flex;
	flex-direction: column;
	align-items: baseline;
	> * {
		font-size: ${fontSizes.xsmall};
		padding: 0 0.5rem;
	}

	.publish-date {
		padding-left: 0;
	}

	${mq( 'medium' )} {
		flex-direction: row;
	}
`;
