import styled from "styled-components";
import { PaginationButtonColors } from "../../../utils/types";

const buttonColors = {
  current: `var(--pink)`,
  standard: `var(--lightBlue2)`,
  disabled: `var(--lightGrey2)`,
};

export const Wrapper = styled.section`
  min-height: 5rem;
  margin-top: 4rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 2rem;
`;

export const CurrMarker = styled.span`
  height: 5rem;
  width: 5rem;
  background-color: var(--pink);
  opacity: 0.3;
  border-radius: 10rem;
`;

export const Button = styled.button<{
  variant: PaginationButtonColors;
}>`
  width: 4rem;
  height: 4rem;
  border: 1px solid var(--intensivePink);
  background-color: ${(props) => buttonColors[props.variant]};
  border-radius: 10rem;
`;
