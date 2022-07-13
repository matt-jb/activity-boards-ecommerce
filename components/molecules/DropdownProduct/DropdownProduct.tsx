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
} from "./DropdownProduct.styles";
import { BsCartPlus } from "react-icons/bs";
import { IoTrashBinOutline } from "react-icons/io5";

interface Props {
  product: IProduct;
  variant: "search" | "wishList";
  onClick?: () => void;
}

export default function DropdownProduct({ product, variant, onClick }: Props) {
  const { addProduct } = useCart();
  const thumbnail = product.images[0];

  return (
    <ItemWrapper data-testid="dropdown-product">
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
        {variant === "wishList" && (
          <IoTrashBinOutline
            className="icon bin"
            onClick={onClick}
            title="Usuń z listy życzeń"
          />
        )}
        <BsCartPlus
          className="icon add"
          onClick={() => addProduct(product)}
          title="Dodaj do koszyka"
        />
      </IconsContainer>
    </ItemWrapper>
  );
}
