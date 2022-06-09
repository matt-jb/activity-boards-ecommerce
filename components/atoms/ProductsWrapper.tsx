import { ReactNode } from "react";
import styled from "styled-components";

const StyledProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-items: center;
  margin: 2rem 0;
`;

export default function ProductsWrapper({ children }: { children: ReactNode }) {
  return (
    <StyledProductsWrapper>
      {children}
    </StyledProductsWrapper>
  )
}
