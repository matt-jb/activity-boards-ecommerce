import { ReactNode } from "react";
import { StyledProductsWrapper } from "./ProductsWrapper.styles";

export default function ProductsWrapper({ children }: { children: ReactNode }) {
  return <StyledProductsWrapper>{children}</StyledProductsWrapper>;
}
