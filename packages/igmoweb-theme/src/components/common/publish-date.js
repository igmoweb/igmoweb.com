const PublishDate = ( { className, postDate } ) => {
	const date = new Date( postDate );
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return (
		<div className={ className }>
			{ date.toLocaleDateString( 'es-ES', options ) }
		</div>
	);
};

export default PublishDate;
