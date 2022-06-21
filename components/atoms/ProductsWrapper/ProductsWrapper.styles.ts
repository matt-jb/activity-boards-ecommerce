import styled from "styled-components";

export const StyledProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-items: center;
  margin: 2rem 0;

  @media only screen and (max-width: 1000px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
