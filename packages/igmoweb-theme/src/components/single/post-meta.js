import PostCategories from './post-categories';
import PublishDate from '../common/publish-date';
import { connect } from 'frontity';
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';

export default connect( ( { post, state } ) => {
	const { frontity } = state;
	const { date } = post;
	const { url } = frontity;

	return (
		<section>
			<PublishDate postDate={ date } />
			<span>·</span>
			<PostCategories post={ post } />
			<span>·</span>
			<div className="sharing">
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
			</div>
		</section>
	);
} );
