import React from 'react';

import styled from 'styled-components';

const Header = styled.header`
  padding: 24px;
  background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;

const H1 = styled.h1`
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  text-align: center;
  font-family: ${({ theme: { font } }) => font};
  font-weight: ${({
    theme: {
      weights: { bold },
    },
  }) => bold};
`;

export default () => (
  <Header>
    <H1>Antonina Gliwinska</H1>
  </Header>
);
