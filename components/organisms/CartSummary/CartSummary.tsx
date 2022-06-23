import { CartWrapper } from "./CartSummary.styles";
import { useCart } from "../../../context/CartContext";
import { ICartItem } from "../../../utils/types";
import { LoginButton } from "../../atoms";
import { GrandTotalSection, CartItemControls } from "../../molecules";

export default function CartSummary() {
  const { state, clearCartItems } = useCart();

  return (
    <CartWrapper>
      {state.map((product: ICartItem) => (
        <CartItemControls key={product.item.id} product={product} />
      ))}
      <GrandTotalSection />
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
