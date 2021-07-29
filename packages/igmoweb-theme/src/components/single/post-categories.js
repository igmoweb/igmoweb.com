import IgmowebLink from '../common/link';
import _get from 'lodash/get';
import { connect, decode, styled } from 'frontity';

export default connect( ( { post, state } ) => {
	const { source } = state;
	const { categories } = post;
	const allCategories = source.category;

	if ( 0 === _get( post, 'categories', [] ).length ) {
		return null;
	}

	const postCategories =
		categories && categories.map( ( catId ) => allCategories[ catId ] );

	return (
		postCategories && (
			<ul className="post-categories">
				{ postCategories.map( ( category ) => {
					if ( ! category ) {
						return null;
					}

					const { id, link, name } = category;

					return (
						<li key={ id }>
							<IgmowebLink key={ id } link={ link }>
								{ decode( name ) }
							</IgmowebLink>
						</li>
					);
				} ) }
			</ul>
		)
	);
} );
