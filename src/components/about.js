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

	margin: 0;
`;

const TopContainer = styled.div`
	display: flex;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 2rem;
`;

const Heading = styled.h3`
	font-size: 2rem;
`;

const P = styled.p`
	width: 530px;
`;

export default ({ avatar }) => (
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
		<div />
	</Wrapper>
);
