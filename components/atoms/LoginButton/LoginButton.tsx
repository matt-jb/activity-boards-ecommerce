import { StyledButton, StyledContainer } from "./LoginButton.styles";

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
