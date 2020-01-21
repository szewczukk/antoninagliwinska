import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
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
			render={data => {
				const { edges } = data.allMarkdownRemark;
				return (
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
				);
			}}
		/>
	</MainWrapper>
);
