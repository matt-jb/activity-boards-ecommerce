import styled from "styled-components";
import { IAlert } from "../../utils/types";

const colors = {
  'warning': '#ff4b6c',
  'success': '#65ff65',
  'info': '#83aae4cc'
}

const StyledAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 3rem;
  margin: 1rem auto;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: 'Poppins', serif;
  font-size: 1.5rem;
  border-radius: 10rem;
  cursor: default;

  @media only screen and (max-width: 900px) {
    width: 95%;
  }

  @media only screen and (max-width: 600px) {
    height: 5.5rem;
  }
`

const StyledEx = styled.span`
  cursor: pointer;
`

interface Props {
  alert: IAlert
  discardAlert: (id: string) => void
}

export default function Alert({ alert, discardAlert }: Props) {
  const { id, type, message } = alert;

  return (
    <StyledAlert key={id} style={{backgroundColor: `${colors[type]}`}}>
      {message}
      <StyledEx onClick={() => discardAlert(id)}>x</StyledEx>
    </StyledAlert>
  )
}
