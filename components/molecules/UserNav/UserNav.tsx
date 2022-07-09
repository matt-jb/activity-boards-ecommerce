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
import { useState } from "react";
import { WishList } from "../../organisms";
import { AnimatePresence } from "framer-motion";

export default function UserNav() {
  const { user } = useAuth();
  const { state } = useCart();
  const [wishList, setWishList] = useState(false);

  function handleWishList() {
    setWishList((prev) => !prev);
  }

  return (
    <>
      <AnimatePresence>
        {wishList && <WishList handleWishList={handleWishList} />}
      </AnimatePresence>
      <StyledUserSection>
        <IconContainer>
          <BiSearchAlt2 className="icon" />
          <IconName>Szukaj</IconName>
        </IconContainer>
        <IconContainer onClick={() => setWishList(true)}>
          <BiHeart className="icon" />
          <IconName>Lista życzeń</IconName>
        </IconContainer>
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
