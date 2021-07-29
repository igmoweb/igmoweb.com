import Link from '@frontity/components/link';
import { connect, useConnect } from 'frontity';

const IgmowebLink = ( { children, ...props } ) => {
	const { actions } = useConnect();

	const { link } = props;

	const onClick = ( event ) => {
		const isExternal = link.startsWith( 'http' );

		// Do nothing if it's an external link
		if ( isExternal ) {
			return;
		}

		event.preventDefault();

		// Set the router to the new url.
		actions.router.set( link );

		// Scroll the page to the top
		window.scrollTo( 0, 0 );
	};

	const onMouseEnter = () => {
		const isExternal = link.startsWith( 'http' );

		// Prefetch the link's content when the user hovers on the link
		if ( ! isExternal ) {
			actions.source.fetch( link );
		}
	};

	return (
		<Link { ...props } onClick={ onClick } onMouseEnter={ onMouseEnter }>
			{ children }
		</Link>
	);
};

export default connect( IgmowebLink, { injectProps: false } );
