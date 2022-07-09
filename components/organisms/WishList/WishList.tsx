import {
  Background,
  IconContainer,
  List,
  NoProducts,
  ProductsWrapper,
  Title,
} from "./WishList.styles";
import { BiX } from "react-icons/bi";
import { WishListProduct } from "../../molecules";
import { RegularButton } from "../../atoms";
import { useAuth } from "../../../context/AuthContext";
import { useProducts } from "../../../context/ProductsContext";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const backgroundVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const listVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "tween" },
  },
  exit: {
    x: "100vw",
  },
};

export default function WishList({ onClick }: { onClick: () => void }) {
  const { user, removeFromWishList, clearWishList } = useAuth();
  const { products } = useProducts();
  const [productWishList, setProductWishList] = useState(generateProducts());

  function generateProducts() {
    return products!.filter((product) => user!.wishList.includes(product.id));
  }

  useEffect(() => {
    setProductWishList([...generateProducts()]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AnimatePresence>
      <Background
        onClick={onClick}
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <List onClick={(e) => e.stopPropagation()} variants={listVariants}>
          <IconContainer>
            <BiX onClick={onClick} className="close" />
          </IconContainer>
          <Title key="cccc">Twoja lista życzeń</Title>
          <ProductsWrapper>
            {productWishList.length > 0 ? (
              <>
                {productWishList.map((product) => (
                  <WishListProduct
                    product={product}
                    key={product.id}
                    onClick={() => removeFromWishList(product.id)}
                  />
                ))}
                <RegularButton
                  text="Wyczyść listę życzeń"
                  onClick={() => clearWishList()}
                />
              </>
            ) : (
              <NoProducts>Twoja lista życzeń jest na razie pusta!</NoProducts>
            )}
          </ProductsWrapper>
        </List>
      </Background>
    </AnimatePresence>
  );
}
