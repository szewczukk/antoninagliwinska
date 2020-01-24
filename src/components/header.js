import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Hamburger from '../images/hamburger.svg';

const Header = styled.header`
	padding: 1rem;
	background: ${({
		theme: {
			colors: { white },
		},
	}) => white};
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: sticky;
	top: 0;
	left: 0;
	z-index: 2;

	max-width: 100vw;
`;

const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`;

const StyledImage = styled(Image)`
	width: 40px;
`;

const HeaderComponent = ({ toggleNavigation }) => (
	<Header>
		<Hamburger onClick={toggleNavigation} />
		<StyledLink to="/">
			<StaticQuery
				query={graphql`
					query {
						file(relativePath: { eq: "logo.png" }) {
							childImageSharp {
								fixed(quality: 100, width: 40) {
									...GatsbyImageSharpFixed
								}
							}
						}
					}
				`}
				render={data => {
					const { fixed } = data.file.childImageSharp;
					return <StyledImage fixed={fixed} />;
				}}
			/>
		</StyledLink>
		<div />
	</Header>
);

const mapDispatchToProps = dispatch => {
	return { toggleNavigation: () => dispatch({ type: 'TOGGLE_NAVIGATION' }) };
};
export default connect(null, mapDispatchToProps)(HeaderComponent);
