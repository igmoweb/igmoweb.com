import React from 'react';
import { connect, styled } from 'frontity';
import MaxWidth from './common/max-width';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mq } from '../styles';
import Link, { NoDecoratedLink } from './common/link';
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import screenReaderText from '../styles/screen-reader';
import config from '../config';

const { colorPalette } = config;

const StyledMaxWidth = styled( MaxWidth )`
	padding-top: 2rem;
	padding-bottom: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const SocialMenu = styled.ul`
	display: flex;
	list-style: none;
`;

const SocialIconLink = styled( Link )`
	color: inherit;
	&:hover,
	&:active {
		color: ${colorPalette.primary};
	}
`;

const StyledFontAwesomeIcon = styled( FontAwesomeIcon )`
	font-size: 1em;
	${mq( 'medium' )} {
		font-size: 2em;
	}
`;
const Footer = ( { className, state } ) => {
	return (
		<div className={ className } id="footer">
			<StyledMaxWidth>
				<NoDecoratedLink link="https://igmoweb.com/feed/">
					RSS
				</NoDecoratedLink>
				<SocialMenu>
					<li>
						<SocialIconLink link="https://github.com/igmoweb">
							<span css={ screenReaderText }>GitHub</span>
							<StyledFontAwesomeIcon icon={ faGithub } />
						</SocialIconLink>
					</li>
					<li>
						<SocialIconLink link="https://twitter.com/igmoweb">
							<span css={ screenReaderText }>Twitter</span>
							<StyledFontAwesomeIcon icon={ faTwitter } />
						</SocialIconLink>
					</li>
					<li>
						<SocialIconLink link="https://www.linkedin.com/in/igmoweb/">
							<span css={ screenReaderText }>LinkedIn</span>
							<StyledFontAwesomeIcon icon={ faLinkedin } />
						</SocialIconLink>
					</li>
					<li>
						<SocialIconLink link="https://profiles.wordpress.org/igmoweb/">
							<span css={ screenReaderText }>
								WordPress profile
							</span>
							<StyledFontAwesomeIcon icon={ faWordpress } />
						</SocialIconLink>
					</li>
				</SocialMenu>
			</StyledMaxWidth>
		</div>
	);
};

export default connect( Footer );
