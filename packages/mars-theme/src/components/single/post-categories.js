import { NoDecoratedLink } from '../common/link';
import React from 'react';
import _get from 'lodash/get';
import { mq } from '../../styles';
import { connect, decode, styled } from 'frontity';

export default connect( ( { post, state } ) => {
	const { source } = state;
	const allCategories = source.category;

	if ( 0 === _get( post, 'categories', [] ).length ) {
		return null;
	}

	const postCategories =
		post.categories &&
		post.categories.map( ( catId ) => allCategories[ catId ] );

	return (
		postCategories && (
			<PostCategoriesList>
				{ postCategories.map( ( { id, link, name } ) => {
					return (
						<li key={ id }>
							<NoDecoratedLink key={ id } link={ link }>
								{ decode( name ) }
							</NoDecoratedLink>
						</li>
					);
				} ) }
			</PostCategoriesList>
		)
	);
} );

const PostCategoriesList = styled.ul`
	list-style: none;
	display: flex;
	margin-left: 0;
	margin-bottom: 0;
	margin-top: 1rem;
	padding-left: 0;

	${mq( 'medium' )} {
		padding-left: 0.5rem;
	}
	li {
		margin: 0;
		padding: 0 0.3rem;
		:first-of-type {
			padding-left: 0;
		}
	}
`;
