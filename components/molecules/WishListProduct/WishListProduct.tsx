import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import { IProduct } from "../../../utils/types";
import {
  IconsContainer,
  ItemWrapper,
  Name,
  NameContainer,
  ThumbnailContainer,
} from "./WishListProduct.styles";
import { BsCartPlus } from "react-icons/bs";
import { IoTrashBinOutline } from "react-icons/io5";
import { useAuth } from "../../../context/AuthContext";

interface Props {
  product: IProduct;
  onClick: () => void;
}

export default function WishListProduct({ product, onClick }: Props) {
  const { addProduct } = useCart();
  const { removeFromWishList } = useAuth();
  const thumbnail = product.images[0];

  return (
    <ItemWrapper>
      <ThumbnailContainer>
        <Image
          src={thumbnail}
          alt={product.name}
          layout="fill"
          objectFit="contain"
        />
      </ThumbnailContainer>
      <NameContainer>
        <Link href={`/${product.id}/${product.slug}`} passHref>
          <Name>{product.name}</Name>
        </Link>
      </NameContainer>
      <IconsContainer>
        <IoTrashBinOutline
          className="icon bin"
          onClick={() => onClick()}
          title="Usuń z listy życzeń"
        />
        <BsCartPlus
          className="icon add"
          onClick={() => addProduct(product)}
          title="Dodaj do koszyka"
        />
      </IconsContainer>
    </ItemWrapper>
  );
}
