import Image from '@frontity/components/image';
import React from 'react';
import { connect, styled } from 'frontity';

const Container = styled.div``;

const StyledImage = styled( Image )`
	display: block;
	height: auto;
	width: 100%;
`;

const FeaturedMedia = ( { id, size = 'full', state } ) => {
	const media = state.source.attachment[ id ];

	if ( ! media ) return null;
	const srcset =
		Object.values( media.media_details.sizes )
			// Get the url and width of each size.
			.map( ( item ) => [ item.source_url, item.width ] )
			// Recude them to a string with the format required by `srcset`.
			.reduce(
				( final, current, index, array ) =>
					final.concat(
						`${ current.join( ' ' ) }w${
							index !== array.length - 1 ? ', ' : ''
						}`
					),
				''
			) || null;

	const src = media.media_details.sizes[ size ]
		? media.media_details.sizes[ size ].source_url
		: media.source_url;
	return (
		<Container>
			<StyledImage
				alt={ media.title.rendered }
				src={ src }
				srcSet={ srcset }
			/>
		</Container>
	);
};

export default connect( FeaturedMedia );
