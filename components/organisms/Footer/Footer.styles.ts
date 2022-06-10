import styled from 'styled-components';

export const StyledWrapper = styled.footer`
  width: 100%;
  min-height: 20rem;
  background-color: var(--darkBlue);
  color: var(--white);
`;

export const StyledFooter = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const FooterColumnTitle = styled.h2`
  display: inline-block;
  position: relative;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 400;

  &:before {
    position: absolute;
    height: 2px;
    width: 50%;
    left: 0;
    bottom: -5px;
    background: var(--pink);
    display: block;
    content: "";
  }
`

export const StyledDescription = styled.div`
  width: 50%;
  padding: 3rem 1rem 3rem;
  font-family: 'Poppins', serif;
  font-size: 1.2rem;
  color: var(--white);

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const StyledColumn = styled.div`
  width: 25%;
  padding: 3rem 1rem 3rem;
  font-family: 'Poppins', serif;
  color: var(--white);

  @media only screen and (max-width: 600px) {
    min-width: 50%;
  }

  & ul {
    font-size: 1.5rem;
  }
`;
