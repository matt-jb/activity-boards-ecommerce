import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 30rem;
  height: 5rem;
  background-color: var(--pink);
  margin-top: 1rem;
  margin-bottom: 1rem;
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
    color: var(--white);
  }
`;

interface Props {
  onClick: () => void;
  text: string;
}

export default function LoginButton({ onClick, text }: Props) {
  return (
    <StyledContainer>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </StyledContainer>
  );
}
