import { StyledWrapper, StyledFooter, StyledColumn } from './Footer.styles';
import { middleColumn, rightColumn } from './Links';
import FooterLink from '../../atoms/FooterLink';

export default function Footer() {
  return (
    <StyledWrapper>
      <StyledFooter>
        <StyledColumn>
          <div className="footerColumnTitle">Kącik aktywności</div>
          <div className="footerLeftColumn">
            Kącik aktywności jest miejscem,
            w którym możesz kupić ręcznie wykonane
            tablice manipulacyjne dla swojego dziecka.
            Są to małe, lecz niezwykle trwałe
            arcydzieła.
          </div>
        </StyledColumn>
        <StyledColumn />
        <StyledColumn>
          <div className="footerColumnTitle">Zakupy</div>
          <ul>
            {middleColumn.map(link => (<FooterLink
              key={link.text}
              text={link.text}
              url={link.url}
            />))}
          </ul>
        </StyledColumn>
        <StyledColumn>
          <div className="footerColumnTitle">Sklep</div>
          <ul>
            {rightColumn.map(link => (<FooterLink
              key={link.text}
              text={link.text}
              url={link.url}
            />))}
          </ul>
        </StyledColumn>
      </StyledFooter>
    </StyledWrapper>
  )
}
