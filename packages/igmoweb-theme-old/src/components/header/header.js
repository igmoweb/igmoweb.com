import MaxWidth from '../common/max-width';
import Nav from './nav';
import { NoDecoratedLink } from '../common/link';
import React from 'react';
import config from '../../config';
import { mq } from '../../styles';
import { connect, styled } from 'frontity';

const { colorPalette } = config;


const FlexMaxWidth = styled( MaxWidth )`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 1.5rem 2rem 1.5rem;
	flex-direction: column;
	${mq( 'medium' )} {
		flex-direction: row;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	margin-bottom: 2rem;
	${mq( 'medium' )} {
		margin-bottom: 0;
		width: 50%;
	}
`;

const Description = styled.div`
	color: ${colorPalette.tertiary};
	&:before {
		content: ':~$ ';
	}
`;

const Title = styled.h2`
	margin: 0;
	margin-bottom: 16px;
	width: 100%;
`;

const StyledNoDecoratedLink = styled( NoDecoratedLink )`
	&:hover,
	&:active {
		text-decoration: none;
	}
`;

const Header = ( { className, state } ) => {
	return (
		<div className={ className } id="header">
			<FlexMaxWidth>
				<Container id="branding">
					<StyledNoDecoratedLink link="/">
						<Title>{ state.frontity.title }</Title>
					</StyledNoDecoratedLink>
					<Description>{ state.frontity.description }</Description>
				</Container>
				<Nav />
			</FlexMaxWidth>
		</div>
	);
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect( Header );
