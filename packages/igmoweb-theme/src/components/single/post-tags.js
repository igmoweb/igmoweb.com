import IgmowebLink from '../common/link';
import _get from 'lodash/get';
import { connect, decode, styled } from 'frontity';
import theme from '../../styles/theme';
import { mq } from '../../styles';
import badge from '../../styles/badge';

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
		<TagsList>
			{ postTags.map( ( { id, link, name } ) => {
				return (
					<li key={ id }>
						<Tag key={ id } link={ link }>
							{ decode( name ) }
						</Tag>
					</li>
				);
			} ) }
		</TagsList>
	);
} );

const TagsList = styled.ul`
	flex-wrap: wrap;
	font-size: ${ theme.fontSizes.xsmall };
	list-style: none;
	display: flex;
	margin-left: 0;
	margin-bottom: 0;
	li {
		display: flex;
		align-items: stretch;
		margin: 0;
		margin-bottom: 1rem;
		margin-right: 1rem;
	}

	${ mq( 'medium' ) } {
		flex-wrap: nowrap;
		margin-bottom: unset;
		li {
			margin-bottom: 0;
		}
	}
`;

const Tag = styled( IgmowebLink )`
	text-decoration: none;
	${ badge }
`;
