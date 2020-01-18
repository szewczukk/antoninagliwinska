import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import SEO from '../components/seo';
import Landing from '../components/landing';

export default ({
  data: {
    background: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <Landing fluid={fluid} />
  </Layout>
);

export const query = graphql`
  query {
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1980) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
