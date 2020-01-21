import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Wrapper = styled.div`
	max-width: 1366px;
	margin: 0 auto 2rem auto;

	h2,
	h3 {
		margin: 1rem 0;
		font-weight: bold;
	}

	ul {
		margin-left: 2rem;
	}

	.gatsby-resp-image-link {
		height: 300px;
		width: 300px;
	}

	.top {
		display: flex;
	}
`;

export default ({ data }) => {
	const { html } = data.markdownRemark;
	const { title } = data.markdownRemark.frontmatter;
	return (
		<Layout>
			<SEO title={title} />
			<Wrapper dangerouslySetInnerHTML={{ __html: html }} />
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
