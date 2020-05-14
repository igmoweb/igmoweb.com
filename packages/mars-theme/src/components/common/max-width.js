import { styled } from 'frontity';
import config from '../../config';

const { baseWidth } = config;

const MaxWidth = styled.div`
	width: ${baseWidth};
	padding: 0 1.5rem;
	max-width: 100%;
	margin: 0 auto;
`;

export default ( { children, className } ) => {
	return <MaxWidth className={ className }>{ children }</MaxWidth>;
};
