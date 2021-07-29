import config from '../config';

const { breakpoints } = config;

/**
 * @credits: https://dev.to/bidah/better-reusable-media-queries-on-emotion---4dkk
 *
 * @param n
 * @return {string}
 */
const mq = ( n ) => {
	const [ result ] = Object.entries( breakpoints ).reduce(
		( acc, [ name, size ] ) => {
			if ( n === name )
				return [ ...acc, `@media (min-width: ${ size })` ];
			return acc;
		},
		[]
	);

	return result;
};

export default mq;
