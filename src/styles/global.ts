import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

  html {
    min-height: 100%;
    font-size: 62.5%; //a cada 1rem será considerado 10px
  }

  body {
    font-size: 1.6rem;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  }

  ul {
    list-style: none;
  }
`;
