import Link from 'next/link';
import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;

  & li {
    text-transform: uppercase;
    font-family: 'Poppins', serif;
    font-size: 1.7rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--black);
    list-style: none;
    transition: all .15s;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }

    &:hover {
      color: var(--pink);
      cursor: pointer;
    }
  }
`

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
