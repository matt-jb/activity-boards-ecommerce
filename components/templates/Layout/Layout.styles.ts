import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto auto 10rem 1fr auto;
  min-height: 100vh;
`;

export const WidthContainer = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
`