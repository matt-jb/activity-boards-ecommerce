import styled from "styled-components";

export const StyledInput = styled.input`
  width: 30rem;
  height: 4rem;
  margin-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: var(--lightGrey2);
  border: 1px solid transparent;
  outline: none;
  border-radius: 10rem;
  font-size: 1.6rem;
  font-family: "Poppins", serif;
  box-shadow: none;
  transition: all 0.1s ease-in-out;

  &:focus {
    box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.15);
    border: 1px solid var(--darkGrey);
    outline: none;
  }
`;

export const StyledError = styled.p`
  margin-top: 0.5rem;
  font-size: 1.3rem;
  color: var(--intensivePink);
`;
