import FeaturedMedia from '../common/featured-media';
import IgmowebLink from '../common/link';
import PublishDate from '../common/publish-date';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Post = ( { item } ) => {
	const { date, featured_media: featuredMedia, link, title } = item;

	return (
		<article>
			<header>
				<FeaturedMedia id={ featuredMedia } size="thumbnail" />
			</header>
			<div>
				<IgmowebLink className="post-title__link" link={ link }>
					<h2
						dangerouslySetInnerHTML={ {
							__html: title.rendered,
						} }
					/>
				</IgmowebLink>

				<PublishDate postDate={ date } />
			</div>
		</article>
	);
};

// Connect the Item to gain access to `state` as a prop
export default Post;
