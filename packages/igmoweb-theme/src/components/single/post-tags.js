import { NoDecoratedLink } from '../common/link';
import React from 'react';
import _get from 'lodash/get';
import { badge } from '../../styles';
import config from '../../config';
import { mq } from '../../styles';
import { connect, decode, styled } from 'frontity';

const { fontSizes } = config;

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
						<NoDecoratedLink
							key={ id }
							css={ [ badge ] }
							link={ link }
						>
							{ decode( name ) }
						</NoDecoratedLink>
					</li>
				);
			} ) }
		</TagsList>
	);
} );

const TagsList = styled.ul`
	flex-wrap: wrap;
	font-size: ${fontSizes.xsmall};
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

	${mq( 'medium' )} {
		flex-wrap: nowrap;
		margin-bottom: unset;
		li {
			margin-bottom: 0;
		}
	}
`;
