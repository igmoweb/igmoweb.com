import FeaturedMedia from '../common/featured-media';
import { mq } from '../../styles';
import { styled } from 'frontity';

export default ( { post } ) => {
	const { featured_media: featuredMedia, title } = post;
	return (
		<ArticleHeader>
			{ 0 !== featuredMedia && (
				<FeaturedMediaWrap>
					<FeaturedMedia id={ featuredMedia } size="thumbnail" />
				</FeaturedMediaWrap>
			) }
			<Title dangerouslySetInnerHTML={ { __html: title.rendered } } />
		</ArticleHeader>
	);
};
const ArticleHeader = styled.header`
	${mq( 'medium' )} {
		display: flex;
	}
`;

const FeaturedMediaWrap = styled.div`
	display: none;
	padding-right: 2rem;
	width: 150px;
	${mq( 'medium' )} {
		display: block;
	}
`;

const Title = styled.h1`
	margin-bottom: 0;
	margin-top: 0;
`;
