import styled from "styled-components";

export const NameTag = styled.div`
  margin: 1.3rem 0;
`;

export const Name = styled.h2`
  font-size: 1.7rem;
  font-family: "Dosis", serif;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 1.2rem;
`;

export const CtaMore = styled.a`
  margin-left: 1rem;
  font-weight: 600;
  color: var(--darkGrey);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    color: var(--black);
    border-bottom: 1px solid var(--black);
  }
`;

export const Price = styled.div`
  margin: 1.3rem 0;
  font-size: 1.4rem;

  & span {
    font-weight: 600;
  }
`;

export const CtaWrapper = styled.div`
  display: flex;
  margin-top: 2rem;

  & a {
    text-decoration: none;
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1.3rem;
    color: var(--white);
    cursor: pointer;

    &:hover {
      box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.15);
    }
  }
`;

export const MoreButton = styled.button`
  width: 9rem;
  margin-right: 2rem;
  background-color: var(--lightBlue);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--pink);
  }
`;

export const AddToCartButton = styled.button`
  width: 12rem;
  background-color: var(--pink);
  transition: all 0.2s ease-in-out;
  margin-right: 1rem;

  &:hover {
    background-color: var(--intensivePink);
  }
`;

export const ImageContainer = styled.section`
  position: relative;
  float: left;
  height: 100%;
  width: 50%;
  margin-right: 1rem;
  overflow: hidden;

  & .heart {
    position: absolute;
    left: 1rem;
    top: 1rem;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    color: var(--darkGrey);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--intensivePink);
    }

    &:active {
      color: var(--lightBlue);
    }
  }

  & .onWishList {
    color: var(--pink);
  }
`;

export const StyledProductCard = styled.div`
  width: 100%;
  min-height: 27rem;
  padding-right: 1rem;
  border: 2px solid #e6e6e6;
  border-radius: 3rem;
  overflow: hidden;
  background-color: var(--white);
  transition: all 0.2s;
  font-family: "Poppins", serif;

  &:hover {
    box-shadow: 0.1rem 1.2rem 1.9rem 0rem rgba(0, 0, 0, 0.17);
    border: 2px solid var(--pink);
  }

  @media only screen and (max-width: 500px) {
    min-height: 35rem;
  }

  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
