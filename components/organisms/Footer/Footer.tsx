import {
  StyledWrapper,
  StyledFooter,
  StyledColumn,
  FooterColumnTitle,
  StyledDescription,
} from "./Footer.styles";
import { middleColumn, rightColumn } from "./links";
import { FooterLink } from "../../atoms";

export default function Footer() {
  return (
    <StyledWrapper>
      <StyledFooter>
        <StyledDescription>
          <FooterColumnTitle className="footerColumnTitle">
            Kącik aktywności
          </FooterColumnTitle>
          <div className="footerLeftColumn">
            Kącik aktywności jest miejscem, w którym możesz kupić ręcznie
            wykonane tablice manipulacyjne dla swojego dziecka. Są to małe, lecz
            niezwykle trwałe arcydzieła.
          </div>
        </StyledDescription>
        <StyledColumn>
          <FooterColumnTitle className="footerColumnTitle">
            Zakupy
          </FooterColumnTitle>
          <ul>
            {middleColumn.map((link) => (
              <FooterLink key={link.text} text={link.text} url={link.url} />
            ))}
          </ul>
        </StyledColumn>
        <StyledColumn>
          <FooterColumnTitle className="footerColumnTitle">
            Sklep
          </FooterColumnTitle>
          <ul>
            {rightColumn.map((link) => (
              <FooterLink key={link.text} text={link.text} url={link.url} />
            ))}
          </ul>
        </StyledColumn>
      </StyledFooter>
    </StyledWrapper>
  );
}
