import styled from "styled-components";

export const StyledNotFound = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;

  @media only screen and (max-width: 600px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const StyledGoBack = styled.button`
  width: 14rem;
  height: 4rem;
  background-color: var(--pink);
  margin-top: 2rem;
  font-size: 1.6rem;
  font-family: "Poppins", serif;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: var(--intensivePink);
    box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: var(--darkBlue);
  }
`;
