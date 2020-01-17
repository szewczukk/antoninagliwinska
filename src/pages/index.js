import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ArrowSVG from '../images/arrow.svg';

const Background = styled(BackgroundImage)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.3) center 30%;
  background-blend-mode: darken;

  display: flex;
  justify-content: center;
  align-items: center;
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
    font-size: 2rem;
  }
`;

const P = styled.p`
  font-size: 2rem;
  color: ${({ theme: { colors } }) => colors.white};

  margin-bottom: 8rem;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};

  border: 0;
  border-radius: 2px;

  width: 300px;
  height: 72px;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

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

export default ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <Layout>
    <SEO title="Home" />

    <Background fluid={fluid}>
      <FlexWrapper>
        <H2>Antonina Gliwińska</H2>
        <P>Lorem ipsum dolor sit amet</P>
        <Button>
          Więcej o mnie
          <Arrow />
        </Button>
      </FlexWrapper>
    </Background>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1980) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
