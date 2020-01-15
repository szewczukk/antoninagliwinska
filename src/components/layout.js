import React from 'react';
import {createGlobalStyle} from 'styled-components';

import Header from './header';

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
  }
`

export default ({ children }) => (
  <>
    <GlobalStyle/>
    <Header />
    {children}
  </>
);
