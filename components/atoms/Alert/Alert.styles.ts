import { motion } from "framer-motion";
import styled from "styled-components";
import { AlertTypes } from "../../../utils/types";

export const colors = {
  warning: "#ff4b6c",
  success: "#65ff65",
  info: "#83aae4",
};

export const alertsVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: { type: "tween", duration: 0.5 },
  },
  exit: {
    y: "100vh",
    transition: { duration: 0.2 },
  },
};

export const StyledAlert = styled(motion.div)<{ type: AlertTypes }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50rem;
  min-height: 3rem;
  margin: 0.1rem auto;
  padding: 0.2rem 2rem;
  background-color: ${(props) => `${colors[props.type]}`};
  font-family: "Poppins", serif;
  font-size: 1.5rem;
  border-radius: 1rem;
  cursor: default;

  @media only screen and (max-width: 550px) {
    width: 90vw;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const CloseContainer = styled.div`
  width: 4rem;
  height: 4rem;

  & .icon {
    cursor: pointer;
    width: 4rem;
    height: 4rem;
  }
`;
