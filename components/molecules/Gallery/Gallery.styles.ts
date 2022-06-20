import styled from "styled-components";

export const Gallery = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  & .prev,
  .next {
    width: 8rem;
    height: 8rem;
    z-index: 10;
    color: var(--black);
    user-select: none;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      display: none;
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
  position: relative;
  width: 80vw;
  height: 90vh;
  margin: auto;
  z-index: 10;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 100rem;
    align-self: flex-start;
    margin-top: 0;
  }
`;
