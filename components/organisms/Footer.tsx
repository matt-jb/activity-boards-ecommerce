import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.footer`
  width: 100%;
  min-height: 20rem;
  background-color: var(--darkBlue);
  color: var(--white);
`

const StyledFooter = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
`

const StyledColumn = styled.div`
  width: 25%;
  padding: 3rem 1rem 3rem;
  font-family: 'Poppins', serif;
  color: var(--white);

  & .footerColumnTitle {
    display: inline-block;
    position: relative;
    margin-bottom: 2rem;
    font-size: 2.5rem;

    &:before {
      position: absolute;
      height: 2px;
      width: 50%;
      left: 0;
      bottom: -5px;
      background: var(--pink);
      display: block;
      content: "";
    }
  }

  & .footerLeftColumn {
    font-size: 1.2rem;
  }

  & ul {
    font-size: 1.5rem;
  }

  & li {
    width: fit-content;
    list-style: none;
    border-bottom: 1px solid transparent;
    transition: all ease-in-out .1s;
    cursor: pointer;
    
    &:hover {
      color: var(--lightGrey);
      border-bottom: 1px solid var(--lightGrey);
    }
  }
`

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
