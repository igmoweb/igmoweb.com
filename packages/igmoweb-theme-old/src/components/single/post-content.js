import React from 'react';
import postContentStyles from '../../styles/post-content';
import { connect, styled } from 'frontity';

const PostContent = connect( ( { content, libraries } ) => {
	const Html2React = libraries.html2react.Component;

	return (
		<StyledPostContent>
			<Html2React html={ content } />
		</StyledPostContent>
	);
} );

const StyledPostContent = styled.section`
	${postContentStyles};
	margin-top: 2rem;
`;

export default PostContent;
