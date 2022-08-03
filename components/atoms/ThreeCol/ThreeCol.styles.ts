import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 0 2rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const StyledLorem = styled.p`
  font-size: 1.6rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 15rem;
  margin-bottom: 1rem;
`;

export const TextContainer = styled.div`
  width: 100%;
`;
