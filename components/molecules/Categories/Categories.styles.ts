import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  margin: 0 1rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 3rem;
  }
`;
