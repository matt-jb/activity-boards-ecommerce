import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
  min-height: 100vh;
`;

export const WidthContainer = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const AlertsContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  position: fixed;
  bottom: 2vh;
  right: 2vw;
  z-index: 1;

  @media only screen and (max-width: 550px) {
    right: 50;
    bottom: 4vh;
  }
`;
