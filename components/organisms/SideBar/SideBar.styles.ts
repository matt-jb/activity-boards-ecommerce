import { motion } from "framer-motion";
import styled from "styled-components";

export const SideBox = styled(motion.div)`
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

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 12rem;
  padding: 3rem 0.5rem 2rem;
`;

export const IconContainer = styled.div`
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
  padding-left: 2rem;
  text-align: left;
  font-size: 5rem;
  font-family: "Dosis", serif;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 130%;
  color: var(--pink);

  @media only screen and (max-width: 650px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 3rem;
  }
`;

export const sideVariants = {
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
