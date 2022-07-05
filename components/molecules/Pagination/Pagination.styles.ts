import styled from "styled-components";
import { PaginationButtonColors } from "../../../utils/types";

const buttonColors = {
  current: `var(--pink)`,
  standard: `var(--lightBlue)`,
  arrow: `var(--lightBlue2)`,
  disabled: `var(--lightGrey2)`,
};

export const Button = styled.button<{
  variant: PaginationButtonColors;
  icon?: boolean;
}>`
  width: 4rem;
  height: 4rem;
  border: 2px solid var(--intensivePink);
  background-color: ${(props) => buttonColors[props.variant]};
  border-radius: 2rem;
  margin: 0.3rem;
  padding-top: ${(props) => (props.icon ? `0.5rem` : 0)};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    cursor: default;
    border: 2px solid var(--lightGrey);

    &:hover {
      background-color: ${(props) => buttonColors[props.variant]};
    }
  }

  &:hover {
    background-color: var(--intensivePink);
  }
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 5rem;
  margin-top: 4rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 2rem;
`;
