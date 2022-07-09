import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 8rem;
  margin: 2rem 4rem;
  padding: 0 1rem;
  border: 2px solid #e6e6e6;
  border-radius: 3rem;
  overflow: hidden;
  background-color: var(--white);
  transition: all 0.2s;
  font-family: "Poppins", serif;
  font-weight: 600;

  &:hover {
    box-shadow: 0 0 1rem 0rem rgba(0, 0, 0, 0.17);
    border: 2px solid var(--pink);
  }

  @media only screen and (max-width: 500px) {
    width: 95%;
    margin: 2rem auto;
    flex-direction: column;
    gap: 0.5rem;
    height: 18rem;
    padding: 1rem 1rem;
  }
`;

export const ThumbnailContainer = styled.section`
  position: relative;
  float: left;
  height: 100%;
  width: 20%;
  margin-right: 1rem;
  overflow: hidden;

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const NameContainer = styled.section`
  width: 30%;

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const Name = styled.a`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--black);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--intensivePink);
    border-bottom: 2px solid var(--intensivePink);
  }

  @media only screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const IconsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  width: 50%;

  & .icon {
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    color: var(--lightBlue);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--intensivePink);
    }
  }

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;
