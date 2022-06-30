import { CartWrapper } from "./CartSummary.styles";
import { useCart } from "../../../context/CartContext";
import { ICartItem } from "../../../utils/types";
import { RegularButton } from "../../atoms";
import { GrandTotalSection, CartItemControls } from "../../molecules";
import { useRouter } from "next/router";

export default function CartSummary() {
  const { state, clearCartItems } = useCart();
  const router = useRouter();

  return (
    <CartWrapper>
      {state.map((product: ICartItem) => (
        <CartItemControls key={product.item.id} product={product} />
      ))}
      <GrandTotalSection />
      <RegularButton
        onClick={() => router.push("/cart/details")}
        text="Do kasy"
        blue
      />
      <RegularButton
        onClick={() => {
          clearCartItems();
        }}
        text="Usuń wszystko z koszyka"
      />
    </CartWrapper>
  );
}
