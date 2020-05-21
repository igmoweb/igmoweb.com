import highlight from 'highlight.js';
import { styled } from 'frontity';
import React, { useEffect, useRef } from 'react';

const HighlitedCode = ( { children, lang } ) => {
	const codeRef = useRef( null );
	useEffect( () => {
		highlight.highlightBlock( codeRef.current );
	} );

	return (
		<CodeContainer ref={ codeRef } className={ lang }>
			{ children.replace( /^(\n)|(\r\n)/, '' ) }
		</CodeContainer>
	);
};

export default HighlitedCode;

const CodeContainer = styled.code`
	background: #000;
	padding: 3px;
	font-weight: 800;
	border: 1px solid #111;
	border-radius: 0.2rem;
`;
