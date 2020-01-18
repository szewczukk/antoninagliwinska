import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const Wrapper = styled.div`
	max-width: 1366px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Image = styled(GatsbyImage)`
	width: 260px;
	height: 260px;
`;

const TopContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-column-gap: 3rem;

	margin-bottom: 1rem;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = styled.h3`
	font-size: 2rem;
`;

const P = styled.p`
	width: 530px;
`;

const BottomContainer = styled.div`
	display: grid;

	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
`;

export default ({ avatar, first, second, third, fourth, five, six }) => (
	<Wrapper>
		<TopContainer>
			<Image fluid={avatar} />
			<TextContainer>
				<Heading>Jestem Antonina!</Heading>
				<P>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
					sed diam voluptua. At vero eos
				</P>
			</TextContainer>
		</TopContainer>
		<BottomContainer>
			<Image fluid={first} />
			<Image fluid={second} />
			<Image fluid={third} />
			<Image fluid={fourth} />
			<Image fluid={five} />
			<Image fluid={six} />
		</BottomContainer>
	</Wrapper>
);
