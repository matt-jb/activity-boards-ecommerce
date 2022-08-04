import styled from "styled-components";

export const Gallery = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: var(--white);

  & .icon {
    width: 8rem;
    height: 8rem;
    z-index: 10;
    color: var(--darkGrey);
    user-select: none;
    cursor: pointer;
    z-index: 11;

    @media only screen and (max-width: 600px) {
      width: 6rem;
      height: 6rem;
    }
  }

  & .prev {
    margin-left: 1rem;
    margin-right: 0;
  }

  & .next {
    margin-left: 0;
    margin-right: 1rem;
  }
`;

export const FullScreenImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 5;
`;
