import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";
import { BiSearchAlt2, BiHeart, BiUser, BiCart } from "react-icons/bi";
import {
  Counter,
  IconContainer,
  IconName,
  StyledUserSection,
} from "./UserNav.styles";
import { useCart } from "../../../context/CartContext";
import { getItemsNumber } from "../../../utils/utils";

export default function UserNav() {
  const { user } = useAuth();
  const { state } = useCart();

  return (
    <>
      <StyledUserSection>
        <Link href="/search" passHref>
          <IconContainer>
            <BiSearchAlt2 className="icon" />
            <IconName>Szukaj</IconName>
          </IconContainer>
        </Link>
        <Link href="/favorite" passHref>
          <IconContainer>
            <BiHeart className="icon" />
            <IconName>Ulubione</IconName>
          </IconContainer>
        </Link>
        <Link href={user ? `/account` : `/login`} passHref>
          <IconContainer>
            <BiUser className="icon" />
            <IconName>{user ? `Konto` : `Zaloguj`}</IconName>
          </IconContainer>
        </Link>
        <Link href="/cart" passHref>
          <IconContainer>
            {state.length > 0 && <Counter>{getItemsNumber(state)}</Counter>}
            <BiCart className="icon" />
            <IconName>Koszyk</IconName>
          </IconContainer>
        </Link>
      </StyledUserSection>
    </>
  );
}
