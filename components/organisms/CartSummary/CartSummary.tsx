import Image from "next/image";
import { useCart } from "../../../context/CartContext";
import { ICartItem } from "../../../utils/types";
import { LoginButton } from "../../atoms";
import {
  CartWrapper,
  ControlsContainer,
  GrandTotal,
  GrandTotalSection,
  ItemControls,
  Name,
  Price,
  Qty,
  ThumbnailContainer,
  Total,
} from "./CartSummary.styles";
import { BiMinusCircle, BiPlusCircle, BiXCircle } from "react-icons/bi";
import { getGrandTotal, getTotalForItem } from "../../../utils/utils";

export default function CartSummary() {
  const {
    state,
    addProduct,
    decreaseProductAmount,
    removeProduct,
    clearCartItems,
  } = useCart();

  return (
    <CartWrapper>
      {state.map((product: ICartItem) => {
        const { qty, item } = product;
        const { id, name, price } = item;
        const thumbnail = item.images[0];

        return (
          <ItemControls key={id}>
            <ThumbnailContainer>
              <Image
                src={thumbnail}
                alt={name}
                layout="fill"
                objectFit="contain"
              />
            </ThumbnailContainer>
            <Name>
              {name}
              <Price> ({price},00 zł)</Price>
            </Name>
            <ControlsContainer>
              <BiMinusCircle
                className="control"
                onClick={() => decreaseProductAmount(item)}
              />
              <Qty>{qty}</Qty>
              <BiPlusCircle
                className="control"
                onClick={() => addProduct(item)}
              />
              <BiXCircle
                className="control x"
                onClick={() => removeProduct(item)}
              />
            </ControlsContainer>
            <Total>
              Razem: <Price>{getTotalForItem(product)},00 zł</Price>
            </Total>
          </ItemControls>
        );
      })}
      <GrandTotalSection>
        <GrandTotal>Razem:</GrandTotal>
        <Qty>{getGrandTotal(state)},00 zł</Qty>
      </GrandTotalSection>
      <LoginButton
        onClick={() => console.log(`clicked!`)}
        text="Do kasy"
        blue
      />
      <LoginButton
        onClick={() => {
          clearCartItems();
        }}
        text="Usuń wszystko z koszyka"
      />
    </CartWrapper>
  );
}
