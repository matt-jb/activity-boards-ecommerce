import React from "react";
import { useCart } from "../../../context/CartContext";
import { getGrandTotal } from "../../../utils/utils";
import { GrandTotal, StyledGrandTotal, Sum } from "./GrandTotalSection.styles";

export default function GrandTotalSection() {
  const { state } = useCart();

  return (
    <StyledGrandTotal>
      <GrandTotal>Razem:</GrandTotal>
      <Sum>{getGrandTotal(state)},00 zł</Sum>
    </StyledGrandTotal>
  );
}
