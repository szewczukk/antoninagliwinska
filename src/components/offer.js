import React from 'react';
import { StaticQuery, graphql, use } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import styled from 'styled-components';

const MainWrapper = styled.div`
	margin-top: 3rem;

	width: 100%;
	background: ${({
		theme: {
			colors: { accent },
		},
	}) => accent};
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

	overflow: hidden;
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

export default () => (
	<MainWrapper>
		<H3>Moja oferta</H3>
		<P>Cena: 100zł/h</P>
		<StaticQuery
			query={graphql`
				query Markdowns {
					allMarkdownRemark {
						edges {
							node {
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
			render={data => {
				const { edges } = data.allMarkdownRemark;
				return (
					<CardsWrapper>
						{edges.map((offer, id) => {
							const { title, icon } = offer.node.frontmatter;
							return (
								<Card id={id}>
									<CardImage fluid={icon.childImageSharp.fluid} />
									<CardText>{title}</CardText>
								</Card>
							);
						})}
					</CardsWrapper>
				);
			}}
		/>
	</MainWrapper>
);
