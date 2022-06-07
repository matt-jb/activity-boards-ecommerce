import Link from 'next/link';
import { StyledWrapper, StyledFooter, StyledColumn } from './Footer.styles';

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
            <Link href="/personalization" passHref><li>Tablice spersonalizowane</li></Link>
            <Link href="/about" passHref><li>O nas</li></Link>
            <Link href="/faq" passHref><li>FAQ</li></Link>
            <Link href="/blog" passHref><li>Blog</li></Link>
          </ul>
        </StyledColumn>
        <StyledColumn>
          <div className="footerColumnTitle">Sklep</div>
          <ul>
            <Link href="/how-to-buy" passHref><li>Jak kupować</li></Link>
            <Link href="/terms-and-conditions" passHref><li>Regulaminy</li></Link>
            <Link href="/account" passHref><li>Twoje konto</li></Link>
            <Link href="/contact" passHref><li>Kontakt</li></Link>
          </ul>
        </StyledColumn>
      </StyledFooter>
    </StyledWrapper>
  )
}
