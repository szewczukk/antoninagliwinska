import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import Pulse from "react-reveal/Pulse";

import ArrowSVG from "../images/arrow.svg";

const Background = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3) center 30%;
  background-blend-mode: darken;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 4rem;
  color: ${({ theme: { colors } }) => colors.white};
  margin: 6rem 0 1rem 0;

  text-align: center;

  @media (max-width: 900px) {
    font-size: 3rem;
  }
`;

const P = styled.p`
  font-size: 2rem;
  color: ${({ theme: { colors } }) => colors.white};

  margin-bottom: 8rem;

  @media (max-width: 900px) {
    font-size: 1.25rem;
  }
`;

const Button = styled.a`
  background: ${({
    theme: {
      colors: { white },
    },
  }) => white};

  border: 0;
  border-radius: 2px;

  width: 300px;
  height: 72px;

  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  @media (max-width: 900px) {
    width: 200px;
    height: 48px;
  }
`;

const Arrow = styled(ArrowSVG)`
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
  @media (max-width: 900px) {
    width: 1rem;
    height: 1rem;
  }
`;

export default ({ fluid }) => (
  <Background fluid={fluid}>
    <FlexWrapper>
      <Pulse>
        <H2>Antonina Gliwinska</H2>
        <P>Praca jest pasją</P>
        <Button href="#about">
          Więcej o mnie
          <Arrow />
        </Button>
      </Pulse>
    </FlexWrapper>
  </Background>
);
