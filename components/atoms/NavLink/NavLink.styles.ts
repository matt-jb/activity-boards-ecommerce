import styled from "styled-components";

export const StyledNavLink = styled.li`
  text-transform: uppercase;
  font-family: "Poppins", serif;
  font-size: 1.7rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--black);
  list-style: none;
  transition: all 0.15s;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:hover {
    color: var(--pink);
    cursor: pointer;
  }
`;
