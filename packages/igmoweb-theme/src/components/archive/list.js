import Post from './post';

const List = ( { posts } ) => {
	if ( posts.length === 0 ) {
		return <p>Aquí no hay nada de nada.</p>;
	}
	return (
		<>
			{ posts.map( ( post ) => (
				<Post key={ post.id } item={ post } />
			) ) }
		</>
	);
};

export default List;
