import Image from '@frontity/components/image';
import { connect } from 'frontity';

const FeaturedMedia = ( { id, size = 'full', state } ) => {
	const media = state.source.attachment[ id ];

	if ( ! media ) return null;
	const srcset =
		Object.values( media.media_details.sizes )
			// Get the url and width of each size.
			.map( ( item ) => [ item.source_url, item.width ] )
			// Redude them to a string with the format required by `srcset`.
			.reduce(
				( final, current, index, array ) =>
					final.concat(
						`${ current.join( ' ' ) }w${
							index !== array.length - 1 ? ', ' : ''
						}`
					),
				''
			) || null;

	const { media_details: mediaDetails = {}, source_url: sourceURL } = media;
	const { source_url: sizeSourceURL = '' } = mediaDetails?.sizes[ size ];

	const src = mediaDetails?.sizes[ size ] ? sizeSourceURL : sourceURL;

	return (
		<div>
			<Image
				alt={ media.title.rendered }
				height={ mediaDetails?.height }
				src={ src }
				srcSet={ srcset }
				width={ mediaDetails?.width }
			/>
		</div>
	);
};

export default connect( FeaturedMedia );
