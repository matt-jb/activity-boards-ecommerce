import Link from 'next/link';
import { StyledUl } from './MainNavigation.styles';

export default function MainNavigation() {
  return (
    <nav>
      <StyledUl>
        <Link href="/shop" passHref><li>Sklep</li></Link>
        <Link href="/categories" passHref><li>Kategorie</li></Link>
        <Link href="/blog" passHref><li>Blog</li></Link>
        <Link href="/about" passHref><li>O nas</li></Link>
        <Link href="/contact" passHref><li>Kontakt</li></Link>
      </StyledUl>
    </nav>
  )
}
