import FeaturedMedia from '../common/featured-media';

export default ( { post } ) => {
	const { featured_media: featuredMedia, title } = post;
	return (
		<header>
			{ 0 !== featuredMedia && (
				<div>
					<FeaturedMedia id={ featuredMedia } size="thumbnail" />
				</div>
			) }
			<h1 dangerouslySetInnerHTML={ { __html: title.rendered } } />
		</header>
	);
};
