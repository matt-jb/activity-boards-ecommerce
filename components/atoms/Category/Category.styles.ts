import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26rem;
  width: 26rem;
  overflow: hidden;
  border: 0.3rem solid var(--intensivePink);
  border-radius: 5rem;
  font-size: 3rem;
  font-weight: 600;
  font-family: "Dosis", serif;
  color: var(--darkGrey);
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--intensivePink);
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    height: 13rem;
  }
`;
