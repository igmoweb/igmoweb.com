import Loader from 'react-loader-spinner';
import theme from '../../styles/theme';

const Spinner = () => {
	return (
		<Loader
			color={ theme.colorPalette.secondary }
			height={ 30 }
			timeout={ 30000 }
			type="Bars"
			width={ 30 } //3 secs
		/>
	);
};

export default Spinner;
