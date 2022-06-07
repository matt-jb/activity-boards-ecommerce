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
`;

export const StyledColumn = styled.div`
  width: 25%;
  padding: 3rem 1rem 3rem;
  font-family: 'Poppins', serif;
  color: var(--white);

  & .footerColumnTitle {
    display: inline-block;
    position: relative;
    margin-bottom: 2rem;
    font-size: 2.5rem;

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
  }

  & .footerLeftColumn {
    font-size: 1.2rem;
  }

  & ul {
    font-size: 1.5rem;
  }

  & li {
    width: fit-content;
    list-style: none;
    border-bottom: 1px solid transparent;
    transition: all ease-in-out .1s;
    cursor: pointer;
    
    &:hover {
      color: var(--lightGrey);
      border-bottom: 1px solid var(--lightGrey);
    }
  }
`;
