import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useCart } from "../../../context/CartContext";
import { IProduct } from "../../../utils/types";
import {
  ActionButton,
  ButtonsContainer,
  DescriptionSection,
} from "./ProductDescription.styles";

interface Props {
  product: IProduct;
}

export default function ProductDescription({ product }: Props) {
  const { name, price, description, width, height, id } = product;
  const { addProduct } = useCart();
  const { addToWishList } = useAuth();

  return (
    <DescriptionSection>
      <p>
        <span>Nazwa</span>: {name}
      </p>
      <p>
        <span>Cena</span>: {price},00 zł
      </p>
      <p>
        <span>Opis</span>: {description}
      </p>
      <p>
        <span>Wymiary</span> (szer. x wys.): {width} cm x {height} cm
      </p>
      <ButtonsContainer>
        <ActionButton onClick={() => addProduct(product)} cart>
          Dodaj do koszyka
        </ActionButton>
        <ActionButton onClick={() => addToWishList(id)}>
          Dodaj do listy życzeń
        </ActionButton>
      </ButtonsContainer>
    </DescriptionSection>
  );
}
