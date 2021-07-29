import PostCategories from './post-categories';
import PublishDate from '../meta/publish-date';
import config from '../../config';
import { mq } from '../../styles';
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';
import { connect, styled } from 'frontity';

export default connect( ( { post, state } ) => {
	const { frontity } = state;
	const { date } = post;
	const { url } = frontity;

	return (
		<Meta>
			<PublishDate postDate={ date } />
			<Dot>·</Dot>
			<PostCategories post={ post } />
			<Dot>·</Dot>
			<PostSharing className="sharing">
				<TwitterShareButton
					title={ post.title.rendered }
					url={ `${ url }${ post.link }` }
					via="igmoweb"
				>
					<TwitterIcon
						bgStyle={ { fill: 'transparent' } }
						round={ true }
						size={ 28 }
					/>
				</TwitterShareButton>
				<FacebookShareButton
					title={ post.title.rendered }
					url={ `${ url }${ post.link }` }
					via="igmoweb"
				>
					<FacebookIcon
						bgStyle={ { fill: 'transparent' } }
						round={ true }
						size={ 28 }
					/>
				</FacebookShareButton>
			</PostSharing>
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
	margin-bottom: 0;

	> * {
		font-size: ${fontSizes.xsmall};
		padding: 0 0.5rem;
	}

	.publish-date,
	.post-categories,
	.sharing {
		padding-left: 0;
		margin-bottom: 0.65rem;
		${mq( 'medium' )} {
			margin-bottom: 0;
		}
	}

	${mq( 'medium' )} {
		flex-direction: row;
		align-items: center;
		margin-bottom: 1rem;
	}
`;

const PostSharing = styled.div``;
