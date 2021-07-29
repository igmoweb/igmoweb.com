const PublishDate = ( { postDate } ) => {
	const date = new Date( postDate );
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return (
		<div className="publish-date">
			{ date.toLocaleDateString( 'es-ES', options ) }
		</div>
	);
};

export default PublishDate;
