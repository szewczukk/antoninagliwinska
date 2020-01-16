import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Background = styled(BackgroundImage)`
  width: 100%;
  min-height: 100vh;
`;

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Background fluid={data.file.childImageSharp.fluid}>
      <h1>Hello World!</h1>
    </Background>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
