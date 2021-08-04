import { mq } from '../../styles';
import FeaturedMedia from '../common/featured-media';
import IgmowebLink from '../common/link';
import PublishDate from '../common/publish-date';
import { styled } from 'frontity';
import theme from '../../styles/theme';

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
	font-size: ${ theme.fontSizes.xsmall };
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
