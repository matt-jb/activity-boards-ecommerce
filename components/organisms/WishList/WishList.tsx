import { NoProducts, ProductsWrapper } from "./WishList.styles";
import { DropdownProduct } from "../../molecules";
import { RegularButton } from "../../atoms";
import { useAuth } from "../../../context/AuthContext";
import { useProducts } from "../../../context/ProductsContext";
import { useEffect, useState } from "react";
import { UserNavFeatures } from "../../../utils/types";
import SideBar from "../SideBar/SideBar";

interface Props {
  handleVisible: (type: UserNavFeatures) => void;
}

export default function WishList({ handleVisible }: Props) {
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
    <SideBar
      onClick={() => handleVisible("wishList")}
      title="Twoja lista życzeń"
    >
      <ProductsWrapper>
        {productWishList.length > 0 ? (
          <>
            {productWishList.map((product) => (
              <DropdownProduct
                product={product}
                key={product.id}
                onClick={() => removeFromWishList(product.id)}
                variant="wishList"
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
    </SideBar>
  );
}
