import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import Slide from 'react-reveal/Slide';

const Wrapper = styled.div`
	max-width: 1366px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
`;

const Image = styled(GatsbyImage)`
	width: 260px;
	height: auto;
`;

const MarginImage = styled(Image)`
	margin: 1rem;
`;

const InfoContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-column-gap: 3rem;

	margin-bottom: 1rem;

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = styled.h3`
	font-size: 2rem;
	margin-bottom: 1rem;
`;

const P = styled.p`
	max-width: 530px;

	@media (max-width: 900px) {
		margin: 0 0.5rem;
	}
`;

const ImagesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	max-width: 876px;
`;

const Anchor = styled.div`
	position: absolute;
	left: 0;
	top: -88px;
`;

export default ({ avatar, first, second, third, fourth, five, six }) => (
	<Wrapper>
		<Anchor id="about" />
		<InfoContainer>
			<Slide left>
				<Image fluid={avatar} initial="hidden" animate="visible" />
			</Slide>
			<Slide right>
				<TextContainer>
					<Heading>Jestem Antonina!</Heading>
					<P>
						Jestem doświadczoną masażystką z 14 letnim stażem pracy. Prowadzę
						prywatny gabinet od 2008 roku. Pracowałam w renomowanych hotelach
						spa takich jak Malinowy Zdrój Hotel Medical Spa w Solcu Zdroju czy
						Bristol Art & Medical Spa w Busko-Zdroju. Jestem właśnie tym
						przypadkiem kiedy praca jest pasją, a pomoc innym daje mi
						satysfakcję.
					</P>
				</TextContainer>
			</Slide>
		</InfoContainer>
		<ImagesContainer>
			<Slide left>
				<MarginImage fluid={first} />
				<MarginImage fluid={second} />
				<MarginImage fluid={third} />
			</Slide>
			<Slide right>
				<MarginImage fluid={fourth} />
				<MarginImage fluid={five} />
				<MarginImage fluid={six} />
			</Slide>
		</ImagesContainer>
	</Wrapper>
);
