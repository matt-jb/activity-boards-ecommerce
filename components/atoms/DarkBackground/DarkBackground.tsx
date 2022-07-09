import { ReactNode } from "react";
import { Background, backgroundVariants } from "./DarkBackground.styles";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default function DarkBackground({ children, onClick }: Props) {
  return (
    <Background
      onClick={onClick}
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </Background>
  );
}
