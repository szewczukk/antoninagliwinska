import React from 'react';

import styled from 'styled-components';

import Hamburger from '../images/hamburger.svg';

const Header = styled.header`
  padding: 24px;
  background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100vw;
`;

const H1 = styled.h1`
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  text-align: center;
  font-weight: ${({
    theme: {
      weights: { bold },
    },
  }) => bold};
`;

export default () => (
  <Header>
    <Hamburger />
    <H1>Antonina Gliwinska</H1>
    <div />
  </Header>
);
