import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { RegularButton } from "../index";
import { StyledError } from "./CheckoutForm.styles";
import { Spinner } from "../";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { id } = router.query;
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentElementVisible, setPaymentElementVisible] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent!.status) {
        case "succeeded":
          setMessage("Płatność powiodła się!");
          break;
        case "processing":
          setMessage("Procesujemy Twoją płatność.");
          break;
        case "requires_payment_method":
          setMessage("Płatność nie powiodła się. Spróbuj ponownie.");
          break;
        default:
          setMessage("Coś poszło nie tak.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/cart/success?order=${id}`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message!);
    } else {
      setMessage("Wystąpił nieoczekiwany błąd.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={(e) => handleSubmit(e)}>
      <PaymentElement
        onReady={() => setPaymentElementVisible(true)}
        id="paymentElement"
      />
      {paymentElementVisible ? (
        <RegularButton
          text={isLoading ? "Procesujemy płatność..." : "Zapłać teraz"}
          disabled={isLoading || !stripe || !elements}
        />
      ) : (
        <Spinner />
      )}
      {message && <StyledError>{message}</StyledError>}
    </form>
  );
}
