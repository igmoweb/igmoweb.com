import { containers } from '../../styles';
import { styled } from 'frontity';

const Container = ( { className, children } ) => (
	<ContainerContent className={ className }>{ children }</ContainerContent>
);

const ContainerContent = styled.div`
	${ containers.container }
`;

export default Container;
