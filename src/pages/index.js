import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import About from "../components/about";
import Offer from "../components/offer";
import Contact from "../components/contact";

import SEO from "../components/seo";
import Landing from "../components/landing";

export default ({
  data: { background, avatar, second, third, fourth, five, six },
}) => (
  <Layout>
    <SEO title="Strona główna" />
    <Landing fluid={background.childImageSharp.fluid} />
    <About
      avatar={avatar.childImageSharp.fluid}
      first={background.childImageSharp.fluid}
      second={second.childImageSharp.fluid}
      third={third.childImageSharp.fluid}
      fourth={fourth.childImageSharp.fluid}
      five={five.childImageSharp.fluid}
      six={six.childImageSharp.fluid}
    />
    <Offer />
    <Contact avatar={avatar.childImageSharp.fluid} />
  </Layout>
);

export const query = graphql`
  query {
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1980) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 260) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    second: file(relativePath: { eq: "plecy.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 260) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    third: file(relativePath: { eq: "szyja.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 260) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fourth: file(relativePath: { eq: "twarz.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 260) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    five: file(relativePath: { eq: "barki.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 260) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    six: file(relativePath: { eq: "ramiona.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 260) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
