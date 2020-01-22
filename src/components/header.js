import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Hamburger from '../images/hamburger.svg';

const Header = styled.header`
	padding: 24px;
	background: ${({
		theme: {
			colors: { primary },
		},
	}) => primary};
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: sticky;
	top: 0;
	left: 0;
	z-index: 2;

	max-width: 100vw;
`;

const H1 = styled.h1`
	color: ${({
		theme: {
			colors: { white },
		},
	}) => white};
	font-weight: ${({
		theme: {
			weights: { bold },
		},
	}) => bold};
	text-align: center;
`;

const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`;

export default () => (
	<Header>
		<Hamburger />
		<StyledLink to="/">
			<H1>Antonina Gliwinska</H1>
		</StyledLink>
		<div />
	</Header>
);
