import Loading from '../common/loading';
import { loadable } from 'frontity';

export default loadable( () => import( './single' ), {
	fallback: <Loading />,
} );
