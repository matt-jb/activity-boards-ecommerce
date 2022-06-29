import { useEffect, useState } from "react";
import { Layout } from "../../../components/templates";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm, Spinner } from "../../../components/atoms";
import { useCart } from "../../../context/CartContext";
import { getGrandTotal } from "../../../utils/utils";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const { state } = useCart();
  const amount = getGrandTotal(state) * 100; // just PLN things

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Layout title="Płatność za zamówienie">
      {clientSecret ? (
        <Elements
          options={options as StripeElementsOptions}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
}
