import IgmowebLink from '../common/link';
import _get from 'lodash/get';
import { mq } from '../../styles';
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
			<PostCategoriesList>
				{ postCategories.map( ( category ) => {
					if ( ! category ) {
						return null;
					}

					const { id, link, name } = category;

					return (
						<li key={ id }>
							<Category key={ id } link={ link }>
								{ decode( name ) }
							</Category>
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
	padding-left: 0;

	${ mq( 'medium' ) } {
		padding-left: 0.5rem;
	}
	li {
		margin: 0;
		padding: 0 0.3rem;
		:first-of-type {
			padding-left: 0;
		}
		&:not( :last-child ):after {
			content: ' /';
		}
	}
`;

const Category = styled( IgmowebLink )`
	text-decoration: none;
	&:hover,
	&:active {
		text-decoration: underline;
	}
`;
