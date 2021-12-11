import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import Slide from "react-reveal/Slide";

const Wrapper = styled.div`
  margin: 1rem 0;
`;

const H2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 300px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem 0;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled.p`
  font-size: 1.5rem;
`;

const StyledImage = styled(Image)`
  width: 260px;

  margin-left: 0.5rem;

  border-radius: 2px;

  @media (max-width: 900px) {
    margin-bottom: 0.5rem;
  }
`;

export default ({ avatar }) => (
  <Wrapper id="contact">
    <H2>Kontakt</H2>
    <IFrame
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.8804572362533!2d19.923769815717648!3d50.069800379424684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165ba86d303449%3A0xfaea9d2d8f986a16!2splac%20Inwalid%C3%B3w%207%2C%2033-332%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1579698077399!5m2!1spl!2spl"
      frameBorder="0"
      title="Lokalizacja"
    />
    <Container>
      <Slide left>
        <TextContainer>
          <Heading>Umów się na wizytę!</Heading>
          <p>+48 791-262-186</p>
        </TextContainer>
      </Slide>
      <Slide right>
        <StyledImage fluid={avatar} />
      </Slide>
    </Container>
  </Wrapper>
);
