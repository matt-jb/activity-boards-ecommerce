import styled from 'styled-components';

export const StyledUl = styled.ul`
  display: flex;

  @media only screen and (max-width: 900px) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 450px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
