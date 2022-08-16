import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import Bounce from "react-reveal/Bounce";

import styled from "styled-components";

const MainWrapper = styled.div`
  margin-top: 3rem;
  padding-bottom: 2rem;
  padding-top: 0.5rem;

  width: 100%;
  background: ${({
    theme: {
      colors: { accent },
    },
  }) => accent};

  position: relative;
`;

const H3 = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
`;

const P = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const CardsWrapper = styled.div`
  display: flex;

  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
    border-radius: 25px;

    :hover {
      background: ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
    }
  }
`;

const Card = styled.div`
  margin: 0 1rem;
`;

const CardImage = styled(GatsbyImage)`
  width: 260px;
  height: auto;
`;

const CardText = styled.p`
  background: white;
  padding: 2rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Anchor = styled.div`
  position: absolute;
  left: 0;
  top: -88px;
`;

export default () => (
  <MainWrapper>
    <Anchor id="offer" />
    <H3>Od 1.09.2022</H3>
    <P>Cena zabiegu około 60 min -150 zł . Access Bars- 200 zł</P>
    <StaticQuery
      query={graphql`
        query Markdowns {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  icon {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const { edges } = data.allMarkdownRemark;
        return (
          <Bounce bottom>
            <CardsWrapper>
              {edges.map((offer, id) => {
                const { title, icon } = offer.node.frontmatter;
                const { slug } = offer.node.fields;
                return (
                  <Card key={id}>
                    <StyledLink to={slug}>
                      <CardImage fluid={icon.childImageSharp.fluid} />
                      <CardText>{title}</CardText>
                    </StyledLink>
                  </Card>
                );
              })}
            </CardsWrapper>
          </Bounce>
        );
      }}
    />
  </MainWrapper>
);
