import hljs from 'highlight.js';
import postContentStyles from '../../styles/post-content';
import React, { useEffect } from 'react';
import { connect, styled } from 'frontity';

hljs.configure( {
	tabReplace: '  ', // 4 spaces
} );

const PostContent = connect( ( { content, libraries } ) => {
	const Html2React = libraries.html2react.Component;

	useEffect( () => {
		document.querySelectorAll( 'pre code' ).forEach( ( block ) => {
			hljs.highlightBlock( block );
		} );
	} );

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
