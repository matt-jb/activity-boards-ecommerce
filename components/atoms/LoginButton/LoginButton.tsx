import { StyledButton, StyledContainer } from "./LoginButton.styles";

interface Props {
  onClick: () => void;
  text: string;
  blue?: boolean;
}

export default function LoginButton({ onClick, text, blue }: Props) {
  return (
    <StyledContainer>
      <StyledButton onClick={onClick} blue={blue}>
        {text}
      </StyledButton>
    </StyledContainer>
  );
}
