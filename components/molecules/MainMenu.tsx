import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  width: 100%;
  height: 10rem;
  padding: 0.4rem 0;
  background-color: var(--white);
  box-shadow: 1px 7px 70px 1px rgba(0,0,0,0.18);
  vertical-align: middle;
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  height: 100%;
  margin: 0 auto;

  & .logo-container {
    max-width: 25rem;
  }
`

export default function MainMenu({ children }: { children?: ReactNode }) {
  return <StyledHeader>
    <StyledHeaderWrapper>
      {children}
    </StyledHeaderWrapper>
  </StyledHeader>
}
