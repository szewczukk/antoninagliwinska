import React from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';

import Header from './header';
import theme from '../utils/theme';

import Footer from './footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 300;
  }
  
  html {
  	scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    font-family: ${({ theme: { font } }) => font};
    
  }
`;

const StyledLink = styled(Link)`
	color: inherit;
	display: inline-block;
`;

export default ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Header />
		{children}
		<Footer />
		<CookieConsent
			buttonText="Zgadzam się"
			style={{
				background: theme.colors.secondary,
			}}
			buttonStyle={{ background: theme.colors.white, borderRadius: '2px' }}
		>
			Ta strona używa pliki cookies{' '}
			<StyledLink to="/polityka">Zobacz politykę plików cookies</StyledLink>
		</CookieConsent>
	</ThemeProvider>
);
