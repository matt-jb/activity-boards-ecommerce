import Link from "next/link";
import { RegularButton } from "../../../components/atoms";
import { Message } from "./CheckoutSuccess.styles";

interface Props {
  text: string;
}

export default function CheckoutSuccess({ text }: Props) {
  return (
    <>
      <Message>{text}</Message>
      <Link href="/" passHref>
        <RegularButton text="Wróć do strony głównej" />
      </Link>
    </>
  );
}
