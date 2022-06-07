import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
`

export default function WidthContainer({ children }: { children: ReactNode }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
