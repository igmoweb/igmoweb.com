import FeaturedMedia from '../common/featured-media';
import IgmowebLink from '../common/link';
import PublishDate from '../common/publish-date';
import { styled } from 'frontity';
import { mq } from '../../../../igmoweb-theme-old/src/styles';
import theme from '../../styles/theme';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 *
 * @param  root0
 * @param  root0.item
 */
const Post = ( { item } ) => {
	const { date, featured_media: featuredMedia, link, title } = item;

	return (
		<StyledArticle>
			<StyledHeader>
				<FeaturedMedia id={ featuredMedia } size="thumbnail" />
			</StyledHeader>
			<Content>
				<IgmowebLink className="post-title__link" link={ link }>
					<Title
						dangerouslySetInnerHTML={ {
							__html: title.rendered,
						} }
					/>
				</IgmowebLink>

				<StyledPublishDate postDate={ date } />
			</Content>
		</StyledArticle>
	);
};

const Title = styled.h2`
	font-size: 1.1rem;
	color: ${ theme.colorPalette.primary };
	margin: 0;
	box-sizing: border-box;
`;

const StyledPublishDate = styled( PublishDate )`
	color: ${ theme.colorPalette.tertiary };
`;

const StyledArticle = styled.article`
	padding-bottom: 2rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid ${ theme.colorPalette.greyDark };
	display: flex;
	&:last-of-type {
		border-bottom: none;
	}
`;

const StyledHeader = styled.header`
	display: none;
	width: 70px;
	height: 50px;
	margin-right: 1.5rem;
	img {
		max-width: 100%;
		inline-size: inherit;
		max-height: 50px;
		width: 50px;
	}
	${ mq( 'medium' ) } {
		display: block;
	}
`;

const Content = styled.div`
	display: flex;
	align-items: stretch;
	flex-direction: column;
	justify-content: space-between;
`;

// Connect the Item to gain access to `state` as a prop
export default Post;
