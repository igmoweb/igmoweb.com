import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IgmowebLink from './link';
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons';

const SocialMenu = ( { className } ) => {
	return (
		<ul className={ className }>
			<li>
				<IgmowebLink link="https://github.com/igmoweb">
					<span>GitHub</span>
					<FontAwesomeIcon icon={ faGithub } />
				</IgmowebLink>
			</li>
			<li>
				<IgmowebLink link="https://twitter.com/igmoweb">
					<span>Twitter</span>
					<FontAwesomeIcon icon={ faTwitter } />
				</IgmowebLink>
			</li>
			<li>
				<IgmowebLink link="https://www.linkedin.com/in/igmoweb/">
					<span>LinkedIn</span>
					<FontAwesomeIcon icon={ faLinkedin } />
				</IgmowebLink>
			</li>
			<li>
				<IgmowebLink link="https://profiles.wordpress.org/igmoweb/">
					<span>WordPress profile</span>
					<FontAwesomeIcon icon={ faWordpress } />
				</IgmowebLink>
			</li>
		</ul>
	);
};

export default SocialMenu;
