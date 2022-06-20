import styled from "styled-components";

export const StyledImagesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 49%;

  @media only screen and (max-width: 900px) {
    width: 100%;
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

  @media only screen and (max-width: 400px) {
    width: 33%;
  }
`;
