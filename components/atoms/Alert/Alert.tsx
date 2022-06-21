import { IAlert } from "../../../utils/types";
import { colors, StyledAlert, StyledEx } from "./Alert.styles";

interface Props {
  alert: IAlert;
  discardAlert: (id: string) => void;
}

export default function Alert({ alert, discardAlert }: Props) {
  const { id, type, message } = alert;

  return (
    <StyledAlert key={id} style={{ backgroundColor: `${colors[type]}` }}>
      {message}
      <StyledEx onClick={() => discardAlert(id)}>x</StyledEx>
    </StyledAlert>
  );
}
