import { ReactNode } from "react";
import { BiX } from "react-icons/bi";
import { DarkBackground } from "../../atoms";
import {
  IconContainer,
  SideBox,
  sideVariants,
  Title,
  TopRow,
} from "./SideBar.styles";

interface Props {
  onClick: () => void;
  children: ReactNode;
  title: string;
}

export default function SideBar({ onClick, children, title }: Props) {
  return (
    <DarkBackground onClick={onClick}>
      <SideBox variants={sideVariants} onClick={(e) => e.stopPropagation()}>
        <TopRow>
          <Title>{title}</Title>
          <IconContainer>
            <BiX
              onClick={onClick}
              className="close"
              data-testid="side-bar-close"
            />
          </IconContainer>
        </TopRow>
        {children}
      </SideBox>
    </DarkBackground>
  );
}
