import styled from "styled-components";

export const StyledUserSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 25rem;

  & .icon {
    width: 4rem;
    height: 3.5rem;
    fill: var(--pink);
    transition: all 0.15s;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Poppins", serif;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:hover {
    & + .icon-name,
    .icon {
      fill: var(--intensivePink);
    }
  }
`;

export const IconName = styled.div`
  text-transform: uppercase;
  color: var(--pink);
`;

export const Counter = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  width: 2rem;
  height: 2rem;
  padding-top: 0.3rem;
  background-color: var(--intensivePink);
  color: var(--white);
  border-radius: 10rem;
`;
