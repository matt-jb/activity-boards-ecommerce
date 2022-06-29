import { StyledButton, StyledContainer } from "./RegularButton.styles";

interface Props {
  text: string;
  blue?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function RegularButton({
  onClick,
  text,
  blue,
  disabled,
}: Props) {
  return (
    <StyledContainer>
      <StyledButton onClick={onClick} blue={blue} disabled={disabled}>
        {text}
      </StyledButton>
    </StyledContainer>
  );
}
