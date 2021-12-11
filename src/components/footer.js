import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;

  background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

const P = styled.p`
  text-align: center;
`;

const A = styled.a`
  color: inherit;
`;

export default () => (
  <Wrapper>
    <P>
      Created by{" "}
      <A href="" target="_blank">
        Dmitro Szewczuk
      </A>
    </P>
  </Wrapper>
);
