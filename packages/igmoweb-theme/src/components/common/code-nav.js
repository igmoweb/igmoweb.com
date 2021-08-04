import Link from '../common/link';
import React from 'react';
import { connect, styled } from 'frontity';
import theme from '../../styles/theme';

const { fontSizes } = theme;

const CodeNav = ( { state } ) => {
	const { codeMenu } = state.theme;

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
	font-size: ${ fontSizes.small };
	align-items: baseline;
	li {
		list-style: none;
		:before {
			content: '->';
			margin-right: 0.5rem;
		}
		:first-of-type {
			margin-left: 0;
		}
	}
`;

export default connect( CodeNav );
