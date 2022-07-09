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
import { Search, WishList } from "../../organisms";
import { AnimatePresence } from "framer-motion";
import { UserNavFeatures } from "../../../utils/types";

export default function UserNav() {
  const { user } = useAuth();
  const { state } = useCart();
  const [isVisible, setIsVisible] = useState<UserNavFeatures>(null);

  function handleVisible(type: UserNavFeatures) {
    isVisible === type ? setIsVisible(null) : setIsVisible(type);
  }

  return (
    <>
      <AnimatePresence>
        {isVisible === "wishList" && <WishList handleVisible={handleVisible} />}
        {isVisible === "searchBar" && <Search handleVisible={handleVisible} />}
      </AnimatePresence>
      <StyledUserSection>
        <IconContainer onClick={() => handleVisible("searchBar")}>
          <BiSearchAlt2 className="icon" />
          <IconName>Szukaj</IconName>
        </IconContainer>
        <IconContainer onClick={() => handleVisible("wishList")}>
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
