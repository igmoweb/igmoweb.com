import IgmowebLink from '../common/link';
import Nav from './nav';
import { connect } from 'frontity';

const Header = ( { className, state } ) => {
	return (
		<div className={ className } id="header">
			<IgmowebLink link="/">
				<h2>{ state.frontity.title }</h2>
			</IgmowebLink>
			<div>{ state.frontity.description }</div>
			<Nav />
		</div>
	);
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect( Header );
