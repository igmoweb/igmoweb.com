import ArticleHeader from './article-header';
import PostContent from './post-content';
import PostMeta from './post-meta';
import PostTags from './post-tags';
import { connect } from 'frontity';
import { useEffect } from 'react';

const Single = ( { actions, state } ) => {
	const { router, source } = state;
	const { link } = router;

	useEffect( () => {
		// Prefetch the homepage
		actions.source.fetch( '/' );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	const data = source.get( link );

	if ( ! data.isReady ) {
		return null;
	}

	const { id, type } = data;

	const post = source[ type ][ id ];

	// Post date
	const { content, type: postType } = post;

	return (
		<article>
			<ArticleHeader post={ post } />
			{ 'post' === postType && <PostMeta post={ post } /> }
			<PostTags post={ post } />
			<PostContent content={ content.rendered } />
		</article>
	);
};

export default connect( Single );
