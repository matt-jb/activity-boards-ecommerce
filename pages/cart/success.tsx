import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spinner } from "../../components/atoms";
import { CheckoutSuccess } from "../../components/molecules";
import { Layout } from "../../components/templates";
import { useCart } from "../../context/CartContext";
import { db } from "../../lib/clientAuth";

export default function Success() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { clearCartItems } = useCart();
  const router = useRouter();
  const { order } = router.query;

  useEffect(() => {
    if (!order) {
      router.push("/");
      return;
    }

    async function markPaid() {
      const orderRef = doc(db, "orders", `${order}`);
      await updateDoc(orderRef, {
        paid: true,
      }).catch((err) => {
        console.log(setError(err));
      });
    }
    markPaid();
    clearCartItems();

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!order && isLoading) return <Spinner />;

  return (
    <Layout title="Dziękujemy!">
      <CheckoutSuccess
        text={
          error
            ? `Twoje zamówienie zostało opłacone, ale dla pewności skontaktuj się z nami.`
            : `Twoje zamówienie zostało opłacone.`
        }
      />
    </Layout>
  );
}
