import { BiX } from "react-icons/bi";
import { IAlert } from "../../../utils/types";
import {
  alertsVariants,
  CloseContainer,
  colors,
  StyledAlert,
} from "./Alert.styles";

interface Props {
  alert: IAlert;
  discardAlert: (id: string) => void;
}

export default function Alert({ alert, discardAlert }: Props) {
  const { id, type, message } = alert;

  return (
    <StyledAlert
      key={id}
      variants={alertsVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      type={type}
    >
      {message}
      <CloseContainer>
        <BiX onClick={() => discardAlert(id)} className="icon" />
      </CloseContainer>
    </StyledAlert>
  );
}
