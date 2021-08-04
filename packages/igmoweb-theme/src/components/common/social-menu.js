import IgmowebLink from './link';
import theme from '../../styles/theme';
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'frontity';
import { mq, screenReaderText } from '../../styles';

const SocialMenu = ( { className } ) => {
	return (
		<Container className={ className }>
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
					<span css={ screenReaderText }>WordPress profile</span>
					<StyledFontAwesomeIcon icon={ faWordpress } />
				</SocialIconLink>
			</li>
		</Container>
	);
};

const SocialIconLink = styled( IgmowebLink )`
	color: inherit;
	&:hover,
	&:active {
		color: ${ theme.colorPalette.primary };
	}
`;

const StyledFontAwesomeIcon = styled( FontAwesomeIcon )`
	font-size: 16px;
	${ mq( 'medium' ) } {
		font-size: 22px;
	}
`;

const Container = styled.ul`
	display: flex;
	list-style: none;
`;

export default SocialMenu;
