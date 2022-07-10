import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../../utils/types";
import { getShortDescription } from "../../../utils/utils";
import {
  AddToCartButton,
  CtaMore,
  CtaWrapper,
  Description,
  ImageContainer,
  MoreButton,
  Name,
  NameTag,
  Price,
  StyledProductCard,
} from "./ProductCard.styles";
import { useAuth } from "../../../context/AuthContext";
import { useCart } from "../../../context/CartContext";
import { BsHeart } from "react-icons/bs";
import { useRouter } from "next/router";

interface Props {
  product: IProduct;
}

export default function ProductCard({ product }: Props) {
  const router = useRouter();
  const { id, name, slug, images, description, price } = product;
  const { addProduct } = useCart();
  const { user, addToWishList, removeFromWishList } = useAuth();

  return (
    <StyledProductCard>
      <ImageContainer>
        <Image src={images[0]} alt={name} layout="fill" objectFit="cover" />
        <BsHeart
          className={user?.wishList.includes(id) ? "heart onWishList" : "heart"}
          onClick={() => {
            !user
              ? router.push("/login")
              : user.wishList.includes(id)
              ? removeFromWishList(id)
              : addToWishList(id);
          }}
          title={
            user?.wishList.includes(id)
              ? "Usuń z Listy Życzeń"
              : "Dodaj do Listy Życzeń"
          }
        />
      </ImageContainer>
      <NameTag>
        <Name>{name}</Name>
      </NameTag>
      <Description>
        {getShortDescription(description)}
        <Link href={`/${id}/${slug}`} passHref>
          <CtaMore>Więcej &#10142;</CtaMore>
        </Link>
      </Description>
      <Price>
        <span>Cena</span>: {price},00 zł
      </Price>
      <CtaWrapper>
        <Link href={`/${id}/${slug}`} passHref>
          <MoreButton>Więcej</MoreButton>
        </Link>
        <AddToCartButton onClick={() => addProduct(product)}>
          Do koszyka
        </AddToCartButton>
      </CtaWrapper>
    </StyledProductCard>
  );
}
