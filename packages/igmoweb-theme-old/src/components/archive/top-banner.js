import PostContent from '../single/post-content';
import SocialMenu from '../common/social-menu';
import Spinner from '../common/spinner';
import _get from 'lodash/get';
import config from '../../config';
import { mq } from '../../styles';
import React, { useEffect } from 'react';
import { connect, styled } from 'frontity';

const { fontSizes } = config;

/**
 * Codesplit the list component so it's not included if the users
 * load a post directly.
 */
const TopBanner = connect( ( { actions, state } ) => {
	const { topBannerPage } = state.theme;
	useEffect( () => {
		actions.source.fetch( topBannerPage );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	const data = state.source.get( topBannerPage );

	if ( ! data.isReady ) {
		return (
			<StyledTopBanner>
				<Spinner />
			</StyledTopBanner>
		);
	}

	const { id, type } = data;

	const post = _get( state.source, `[${ type }][${ id }]`, null );
	if ( ! post ) {
		return null;
	}
	const { content } = post;
	return (
		<StyledTopBanner>
			<StyledSocialMenu />
			<PostContent content={ content.rendered } />
		</StyledTopBanner>
	);
} );

export default TopBanner;

const StyledSocialMenu = styled( SocialMenu )`
	.svg-inline--fa {
		width: 1rem;
	}
	display: none;

	${mq( 'medium' )} {
		display: flex;
		position: absolute;
		top: 10px;
		right: 20px;
	}
`;

const StyledTopBanner = styled.div`
	position: relative;
	margin-bottom: 4rem;
	.wp-block-columns {
		justify-content: center;
		.wp-block-column {
			flex-grow: 3;
			margin-left: 0;

			&:first-of-type {
				flex-grow: 0;
				flex-basis: 90px !important;
				margin-right: 1rem;
				display: none;
				align-items: center;
				${mq( 'medium' )} {
					display: flex;
				}
			}
		}

		${mq( 'medium' )} {
			.wp-block-column:nth-of-type( 2n ) {
				margin-left: 0;
			}
		}
	}
	.wp-block-column > h2:first-of-type {
		margin-top: 0;
		font-size: ${fontSizes.base};
	}

	.wp-block-column p {
		font-size: ${fontSizes.small};
		margin-bottom: 0;
	}

	.wp-block-image {
		margin-bottom: 0 !important;
	}
`;
