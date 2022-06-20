import styled from "styled-components";

export const DetailsOverview = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const DescriptionSection = styled.section`
  width: 49%;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-family: "Poppins", serif;
  font-size: 1.8rem;

  & p {
    margin-bottom: 1rem;

    & span {
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const ImagesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 49%;

  @media only screen and (max-width: 900px) {
    width: 97%;
  }
`;

export const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 35rem;
  cursor: pointer;
`;

export const GallerySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  min-height: 10rem;
`;

export const GalleryImageContainer = styled.div`
  display: block;
  width: 19.5%;
  &:not(:last-child) {
    margin-right: 0.5%;
  }
  margin-bottom: 0.3rem;
  height: 10rem;
  position: relative;
  border: 2px solid var(--lightGrey2);
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 24.5%;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 300px) {
    width: 33%;
    flex-wrap: wrap;
  }
`;

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
    margin-right: 3rem;
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

export const ButtonsContainer = styled.section`
  text-align: left;

  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;

export const ActionButton = styled.button<{ cart?: boolean }>`
  width: 35rem;
  height: 5rem;
  background-color: ${(props) => (props.cart ? `var(--pink)` : `var(--white)`)};
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-family: "Poppins", serif;
  font-weight: 600;
  text-transform: uppercase;
  border: ${(props) =>
    props.cart ? `none` : `3px solid var(--intensivePink)`};
  border-radius: 1.5rem;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: var(--intensivePink);
    box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.15);
    color: var(--white);
  }

  &:active {
    background-color: var(--darkBlue);
    color: var(--white);
  }

  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;
