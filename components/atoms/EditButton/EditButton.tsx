import IconGears from "../../assets/IconGears";
import { StyledButton } from "./EditButton.styles";

export default function EditButton() {
  return (
    <StyledButton title="Edytuj produkt">
      <IconGears className="icon" />
    </StyledButton>
  );
}
