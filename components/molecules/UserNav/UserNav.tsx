import Link from 'next/link';
import { useAuth } from '../../../context/AuthContext';
import IconAccount from '../../assets/IconAccount';
import IconCart from '../../assets/IconCart';
import IconHeart from '../../assets/IconHeart';
import IconSearch from '../../assets/IconSearch';
import { StyledUserSection } from './UserNav.styles';

export default function UserNav() {
  const { user } = useAuth();

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
        <Link href={user ? `/account` : `/login`} passHref>
          <div className="icon-container">
            <IconAccount className="icon"/>
            <div className="icon-name">{user ? `Konto` : `Zaloguj`}</div>
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
