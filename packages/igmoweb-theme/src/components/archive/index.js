import Loading from '../common/loading';
import { loadable } from 'frontity';

export default loadable( () => import( './archive' ), {
	fallback: <Loading />,
} );
