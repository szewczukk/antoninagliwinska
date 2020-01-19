import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import About from '../components/about';

import SEO from '../components/seo';
import Landing from '../components/landing';

export default ({
	data: { background, avatar, second, third, fourth, five, six },
}) => (
	<Layout>
		<SEO title="Home" />
		<Landing fluid={background.childImageSharp.fluid} />
		<About
			id="about"
			avatar={avatar.childImageSharp.fluid}
			first={background.childImageSharp.fluid}
			second={second.childImageSharp.fluid}
			third={third.childImageSharp.fluid}
			fourth={fourth.childImageSharp.fluid}
			five={five.childImageSharp.fluid}
			six={six.childImageSharp.fluid}
		/>
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
		second: file(relativePath: { eq: "plecy.jpg" }) {
			childImageSharp {
				fluid(quality: 100, maxWidth: 260) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		third: file(relativePath: { eq: "szyja.jpg" }) {
			childImageSharp {
				fluid(quality: 100, maxWidth: 260) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		fourth: file(relativePath: { eq: "twarz.jpg" }) {
			childImageSharp {
				fluid(quality: 100, maxWidth: 260) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		five: file(relativePath: { eq: "barki.jpg" }) {
			childImageSharp {
				fluid(quality: 100, maxWidth: 260) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		six: file(relativePath: { eq: "ramiona.jpg" }) {
			childImageSharp {
				fluid(quality: 100, maxWidth: 260) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
