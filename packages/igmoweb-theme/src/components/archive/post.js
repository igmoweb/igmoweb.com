import FeaturedMedia from '../common/featured-media';
import { NoDecoratedLink } from '../common/link';
import PublishDate from '../meta/publish-date';
import React from 'react';
import config from '../../config';
import { mq } from '../../styles';
import { styled } from 'frontity';

const { colorPalette } = config;

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
		<StyledArticle>
			<StyledHeader>
				<FeaturedMedia id={ featuredMedia } size="thumbnail" />
			</StyledHeader>
			<Content>
				<NoDecoratedLink className="post-title__link" link={ link }>
					<Title
						dangerouslySetInnerHTML={ {
							__html: title.rendered,
						} }
					/>
				</NoDecoratedLink>

				<StyledPublishDate postDate={ date } />
			</Content>
		</StyledArticle>
	);
};

// Connect the Item to gain access to `state` as a prop
export default Post;

const Title = styled.h2`
	font-size: 1.1rem;
	color: ${colorPalette.primary};
	margin: 0;
	box-sizing: border-box;
`;

const StyledPublishDate = styled( PublishDate )`
	color: ${colorPalette.tertiary};
`;

const StyledArticle = styled.article`
	padding-bottom: 2rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid ${colorPalette.greyDark};
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
	${mq( 'medium' )} {
		display: block;
	}
`;

const Content = styled.div`
	display: flex;
	align-items: stretch;
	flex-direction: column;
	justify-content: space-between;
`;
