import styled from "styled-components";

export const StyledLi = styled.li`
  width: fit-content;
  list-style: none;
  border-bottom: 1px solid transparent;
  transition: all ease-in-out 0.1s;
  cursor: pointer;

  &:hover {
    color: var(--lightGrey);
    border-bottom: 1px solid var(--lightGrey);
  }
`;
