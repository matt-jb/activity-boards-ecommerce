import { useRouter } from "next/router";
import { StyledButton, StyledEmptyCart } from "./NoItemsInCart.styles";

export default function NoItemsInCart() {
  const router = useRouter();

  return (
    <StyledEmptyCart>
      Twój koszyk jest pusty.
      <StyledButton type="button" onClick={() => router.push("/")}>
        Dodaj coś do niego!
      </StyledButton>
    </StyledEmptyCart>
  );
}
