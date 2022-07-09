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
