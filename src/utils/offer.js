import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => {
	const { html } = data.markdownRemark;
	const { title } = data.markdownRemark.frontmatter;
	return (
		<Layout>
			<SEO title={title} />
			<h2>{title}</h2>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</Layout>
	);
};

export const Query = graphql`
	query Query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
