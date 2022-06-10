import styled from 'styled-components';

export const StyledWrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 0.4rem 0;
  background-color: var(--lightBlue);

  @media only screen and (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--maxWidth);
  margin: 0 auto;
  font-family: 'Poppins', serif;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  
  > * {
    color: var(--white);
    text-decoration: none;
  }

  > a {
    transition: all ease-in-out .1s;
    border-bottom: 1px solid transparent;
    
    &:hover {
      color: var(--lightGrey);
      border-bottom: 1px solid var(--lightGrey);
    }
  }

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
