import React from 'react';
import { connect } from 'frontity';

const PostContent = ( { content, libraries } ) => {
	const Html2React = libraries.html2react.Component;

	return (
		<section>
			<Html2React html={ content } />
		</section>
	);
};

export default connect( PostContent );
