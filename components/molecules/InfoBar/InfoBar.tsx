import Link from "next/link";
import { StyledWrapper, StyledBar } from "./InfoBar.styles";

export default function InfoBar() {
  return (
    <StyledWrapper>
      <StyledBar data-testid="info-bar">
        <Link href="/how-to-buy" className="infoText">
          Wysyłka i zwrot
        </Link>
        <div>Ręcznie wykonane tablice manipulacyjne</div>
        <Link href="/personalization" className="infoText">
          Personalizacja
        </Link>
      </StyledBar>
    </StyledWrapper>
  );
}
