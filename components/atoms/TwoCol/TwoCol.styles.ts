import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 2rem;
`;

export const StyledLorem = styled.p`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  min-height: 30rem;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
