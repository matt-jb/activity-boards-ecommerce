import styled from 'styled-components';

export const StyledHeader = styled.header`
  text-align: center;
  width: 100%;
  height: 10rem;
  padding: 0.4rem 0;
  background-color: var(--white);
  box-shadow: 1px 7px 70px 1px rgba(0,0,0,0.18);

  @media only screen and (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media only screen and (max-width: 900px) {
    height: 18rem;
    box-shadow: none;
  }
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  height: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-around;
  }

  & .logo-container {
    max-width: 25rem;

    @media only screen and (max-width: 450px) {
      margin-top: 0.5rem;
    }
  }
`;