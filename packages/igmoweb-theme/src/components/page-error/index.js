import { connect } from 'frontity';

// The 404 page component
const PageError = ( { state } ) => {
	const data = state.source.get( state.router.link );

	const title = 'Oops! Something went wrong';
	const title404 = 'Oops! 404';

	return (
		<>
			<div>
				<h1>{ data.is404 ? title404 : title }</h1>
			</div>
		</>
	);
};

export default connect( PageError );
