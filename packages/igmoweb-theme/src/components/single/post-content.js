import React from 'react';
import { connect, styled } from 'frontity';
import { postContentStyles } from '../../styles';

const PostContent = ( { content, libraries } ) => {
	const Html2React = libraries.html2react.Component;

	return (
		<StyledPostContent>
			<Html2React html={ content } />
		</StyledPostContent>
	);
};

const StyledPostContent = styled.section`
	${ postContentStyles };
	margin-top: 2rem;
`;
export default connect( PostContent );
