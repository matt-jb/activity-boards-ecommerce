import Image from "next/image";
import { BiMinusCircle, BiPlusCircle, BiXCircle } from "react-icons/bi";
import { useCart } from "../../../context/CartContext";
import { ICartItem } from "../../../utils/types";
import { getTotalForItem } from "../../../utils/utils";
import {
  ControlsContainer,
  ItemControls,
  Name,
  Price,
  Qty,
  ThumbnailContainer,
  Total,
} from "./CartItemControls.styles";

interface Props {
  product: ICartItem;
}

export default function CartItemControls({ product }: Props) {
  const { addProduct, removeProduct, decreaseProductAmount } = useCart();
  const { qty, item } = product;
  const { name, price, images } = item;
  const thumbnail = images[0];

  return (
    <ItemControls data-testid="order-controls">
      <ThumbnailContainer>
        <Image src={thumbnail} alt={name} layout="fill" objectFit="contain" />
      </ThumbnailContainer>
      <Name>
        {name}
        <Price> ({price},00 zł)</Price>
      </Name>
      <ControlsContainer>
        <BiMinusCircle
          className="control"
          onClick={() => decreaseProductAmount(item)}
          data-testid="minus-btn"
        />
        <Qty data-testid="order-qty">{qty}</Qty>
        <BiPlusCircle
          className="control"
          onClick={() => addProduct(item)}
          data-testid="plus-btn"
        />
        <BiXCircle
          className="control x"
          onClick={() => removeProduct(item)}
          data-testid="x-btn"
        />
      </ControlsContainer>
      <Total>
        Razem: <Price>{getTotalForItem(product)},00 zł</Price>
      </Total>
    </ItemControls>
  );
}
