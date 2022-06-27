import styled from "styled-components";

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 30rem;
  height: 5rem;
  background-color: var(--lightBlue);
  margin-top: 2rem;
  margin-bottom: 2rem;
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
    background-color: var(--darkBlue);
    box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.15);
    color: var(--white);
  }

  &:active {
    background-color: var(--darkBlue);
  }
`;

export const StyledError = styled.p`
  margin-top: 0.5rem;
  font-size: 1.3rem;
  color: var(--intensivePink);
`;

export const TextAreaWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTextArea = styled.textarea`
  width: 30rem;
  height: 20rem;
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  background-color: var(--lightGrey2);
  border: 1px solid transparent;
  outline: none;
  border-radius: 2rem;
  font-size: 1.6rem;
  font-family: "Poppins", serif;
  box-shadow: none;
  transition: all 0.1s ease-in-out;
  resize: none;

  &:focus {
    box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.15);
    border: 1px solid var(--darkGrey);
    outline: none;
  }
`;

export const UserDetailsLabel = styled.label`
  width: 30rem;
  min-width: fit-content;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: -1.5rem;
  margin-top: 2.5rem;
`;
