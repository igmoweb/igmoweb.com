import IgmowebLink from '../common/link';
import _get from 'lodash/get';
import { connect, decode } from 'frontity';

export default connect( ( { post, state } ) => {
	const { source } = state;

	if ( 0 === _get( post, 'tags', [] ).length ) {
		return null;
	}

	const allTags = source.tag;
	const postTags =
		post.tags &&
		post.tags
			.map( ( tagId ) => allTags[ tagId ] )
			.filter( ( tag ) => tag !== undefined );
	return (
		<ul>
			{ postTags.map( ( { id, link, name } ) => {
				return (
					<li key={ id }>
						<IgmowebLink key={ id } link={ link }>
							{ decode( name ) }
						</IgmowebLink>
					</li>
				);
			} ) }
		</ul>
	);
} );
