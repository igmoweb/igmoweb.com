import Loader from 'react-spinners/ScaleLoader';
import config from '../../config';

const { colorPalette } = config;

const Spinner = () => {
	return (
		<Loader
			color={ colorPalette.tertiary }
			height={ 24 }
			margin="3px"
			radius={ 0 }
			width={ 4 }
		/>
	);
};

export default Spinner;
