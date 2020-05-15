import Post from './post';
import React from 'react';

const List = ( { posts } ) => {
	return (
		<>
			{ posts.map( ( post ) => (
				<Post key={ post.id } item={ post } />
			) ) }
		</>
	);
};

export default List;
