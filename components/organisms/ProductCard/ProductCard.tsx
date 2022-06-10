import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../../utils/types";
import { getShortDescription } from "../../../utils/utils";
import DeleteButton from "../../atoms/DeleteButton";
import EditButton from "../../atoms/EditButton";
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
  StyledProductCard } from "./ProductCard.styles";

interface Props {
  product: IProduct
}

export default function ProductCard({ product }: Props) {
  const { id, name, slug, images, description, price } = product;

  return (
    <StyledProductCard>
      <ImageContainer>
        <>
          <EditButton />
          <DeleteButton />
        </>
        <Image
          src={images[0]}
          alt={name}
          layout="fill"
          objectFit="cover"
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
        <AddToCartButton>Do koszyka</AddToCartButton>
      </CtaWrapper>
    </StyledProductCard>
  )
}
