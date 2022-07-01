import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button<{
  blue?: boolean;
  disabled?: boolean;
}>`
  width: 30rem;
  min-height: 5rem;
  background-color: ${(props) =>
    props.blue ? `var(--lightBlue)` : `var(--pink)`};
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-family: "Poppins", serif;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => (props.disabled ? `var(--lightGrey2)` : `var(--black)`)};
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.blue ? `var(--darkBlue)` : `var(--intensivePink)`};
    box-shadow: ${(props) =>
      props.disabled ? `none` : `0.1rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.15)`};
    color: ${(props) =>
      props.disabled ? `var(--lightGrey2)` : `var(--white)`};
  }

  &:active {
    background-color: ${(props) =>
      props.disabled ? `var(--lightGrey2)` : `var(--darkBlue)`};
  }

  @media only screen and (max-width: 400px) {
    width: 90%;
  }
`;
