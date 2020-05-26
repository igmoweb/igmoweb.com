import Link from '../common/link';
import config from '../../config';
import React from 'react';
import { connect, styled } from 'frontity';

const { fontSizes } = config;

const CodeNav = ( { state } ) => {
	const { theme } = state;
	const { codeMenu } = theme;

	return (
		<StyledList>
			{ codeMenu.map( ( [ name, link ] ) => {
				return (
					<li key={ link }>
						<Link link={ link }>{ name }</Link>
					</li>
				);
			} ) }
		</StyledList>
	);
};

const StyledList = styled.ul`
	display: flex;
	justify-content: flex-end;
	font-size: ${fontSizes.small};
	li {
		list-style: none;
		:first-of-type {
			margin-left: 0;
		}
	}
`;

export default connect( CodeNav );
