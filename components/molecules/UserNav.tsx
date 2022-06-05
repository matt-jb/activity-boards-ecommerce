import Link from 'next/link';
import styled from 'styled-components';
import IconAccount from '../atoms/IconAccount';
import IconCart from '../atoms/IconCart';
import IconHeart from '../atoms/IconHeart';
import IconSearch from '../atoms/IconSearch';

const StyledUserSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 25rem;

  & .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Poppins', serif;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
    

    &:hover {
      & + .icon-name, .icon {
        fill: var(--pink);
      }
    }
  }

  & .icon {
    width: 4rem;
    height: 3.5rem;
    fill: var(--black);
    transition: all .15s;
  }

  & .icon-name {
    text-transform: uppercase;
    color: var(--pink);
  }
`

export default function UserNav() {
  return (
    <>
      <StyledUserSection>
        <Link href="/search" passHref>
          <div className="icon-container">
            <IconSearch className="icon"/>
            <div className="icon-name">Szukaj</div>
          </div>
        </Link>
        <Link href="/favorite" passHref>
          <div className="icon-container">
            <IconHeart className="icon"/>
            <div className="icon-name">Ulubione</div>
          </div>
        </Link>
        <Link href="/account" passHref>
          <div className="icon-container">
            <IconAccount className="icon"/>
            <div className="icon-name">Konto</div>
          </div>
        </Link>
        <Link href="/cart" passHref>
          <div className="icon-container">
            <IconCart className="icon"/>
            <div className="icon-name">Koszyk</div>
          </div>
        </Link>
      </StyledUserSection>
    </>
  )
}
