import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const List = styled(motion.div)`
  position: sticky;
  float: right;
  height: 100%;
  width: clamp(50%, 70rem, 90%);
  background-color: var(--white);
  opacity: 1;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-left: 4rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 500px) {
    padding-left: 0;
  }
`;

export const IconContainer = styled.div`
  display: block;
  width: 100%;
  height: 9rem;
  padding-right: 4rem;
  padding-top: 2rem;
  text-align: right;

  & .close {
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    color: var(--darkGrey);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--intensivePink);
    }
  }
`;

export const Title = styled.p`
  display: block;
  width: 100%;
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 5rem;
  font-family: "Dosis", serif;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--pink);

  @media only screen and (max-width: 500px) {
    font-size: 4rem;
  }
`;

export const ProductsWrapper = styled.section`
  margin-bottom: 4rem;
`;

export const NoProducts = styled.p`
  font-size: 2rem;
`;

export const backgroundVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const listVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "tween" },
  },
  exit: {
    x: "100vw",
  },
};
