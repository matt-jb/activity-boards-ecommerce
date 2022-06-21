import IconDelete from "../../assets/IconDelete";
import { StyledButton } from "./DeleteButton.styles";

export default function DeleteButton() {
  return (
    <StyledButton title="Edytuj produkt">
      <IconDelete className="icon" />
    </StyledButton>
  );
}
