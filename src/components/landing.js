import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import ArrowSVG from '../images/arrow.svg';

const Background = styled(BackgroundImage)`
	width: 100%;
	min-height: 100vh;
	background: rgba(0, 0, 0, 0.3) center 30%;
	background-blend-mode: darken;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-bottom: 2rem;
`;

const FlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const H2 = styled.h2`
	font-size: 4rem;
	color: ${({ theme: { colors } }) => colors.white};
	margin: 6rem 0 1rem 0;

	text-align: center;

	@media (max-width: 900px) {
		font-size: 2rem;
	}
`;

const P = styled.p`
	font-size: 2rem;
	color: ${({ theme: { colors } }) => colors.white};

	margin-bottom: 8rem;

	@media (max-width: 900px) {
		font-size: 1rem;
	}
`;

const Button = styled.a`
	background: ${({
		theme: {
			colors: { primary },
		},
	}) => primary};

	border: 0;
	border-radius: 2px;

	width: 300px;
	height: 72px;

	color: white;

	display: flex;
	align-items: center;
	justify-content: center;

	text-decoration: none;

	@media (max-width: 900px) {
		width: 200px;
		height: 48px;
	}
`;

const Arrow = styled(ArrowSVG)`
	margin-left: 1rem;
	width: 2rem;
	height: 2rem;
	@media (max-width: 900px) {
		width: 1rem;
		height: 1rem;
	}
`;

export default ({ fluid }) => (
	<Background fluid={fluid}>
		<FlexWrapper>
			<H2>Antonina Gliwińska</H2>
			<P>Lorem ipsum dolor sit amet</P>
			<Button href="#about">
				Więcej o mnie
				<Arrow />
			</Button>
		</FlexWrapper>
	</Background>
);
