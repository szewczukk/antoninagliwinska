import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './header';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 300;
  }
  
  body {
    margin: 0;
    font-family: ${({ theme: { font } }) => font};
  }
`;

export default ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Header />
		{children}
	</ThemeProvider>
);
