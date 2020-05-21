import { css } from 'frontity';

export default css`
	code,
	kbd,
	pre,
	samp {
		font-family: 'Roboto Mono', monospace;
		font-size: 0.9rem;
	}

	pre {
		line-height: 1.5;
		margin: 3rem 0;
		overflow: auto;
		padding: 0;
		text-align: left;
	}

	pre code {
		background: transparent;
		padding: 1rem;
	}
`;
