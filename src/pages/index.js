import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import About from '../components/about';

import SEO from '../components/seo';
import Landing from '../components/landing';

export default ({ data: { background, avatar } }) => (
	<Layout>
		<SEO title="Home" />
		<Landing fluid={background.childImageSharp.fluid} />
		<About avatar={avatar.childImageSharp.fluid} />
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
		avatar: file(relativePath: { eq: "avatar.jpg" }) {
			childImageSharp {
				fluid(quality: 100, maxWidth: 260) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
