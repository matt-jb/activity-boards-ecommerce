import { NoItemsInCart } from "../../components/atoms";
import { CartSummary } from "../../components/organisms";
import { Layout } from "../../components/templates";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { state } = useCart();

  return (
    <Layout title="Koszyk">
      {state.length === 0 ? <NoItemsInCart /> : <CartSummary />}
    </Layout>
  );
}
