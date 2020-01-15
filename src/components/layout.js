import React from 'react';
import styled from 'styled-components';

import Header from './header';

export default ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
