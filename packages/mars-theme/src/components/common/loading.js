import React from 'react';
import Spinner from './spinner';
import config from '../../config';
import { styled } from 'frontity';

const { baseWidth } = config;

const Container = styled.div`
	width: ${baseWidth};
	margin: 0;
	padding: 24px;
	display: flex;
	justify-content: center;
	align-items: center;

	& > * {
		margin-top: 24px;
	}
`;

const Loading = () => (
	<Container>
		<Spinner />
	</Container>
);

export default Loading;
