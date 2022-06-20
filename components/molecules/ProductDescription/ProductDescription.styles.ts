import styled from "styled-components";

export const DescriptionSection = styled.section`
  width: 49%;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-family: "Poppins", serif;
  font-size: 1.8rem;

  & p {
    margin-bottom: 1rem;

    & span {
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const ButtonsContainer = styled.section`
  text-align: left;

  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;

export const ActionButton = styled.button<{ cart?: boolean }>`
  width: 35rem;
  height: 5rem;
  background-color: ${(props) => (props.cart ? `var(--pink)` : `var(--white)`)};
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-family: "Poppins", serif;
  font-weight: 600;
  text-transform: uppercase;
  border: ${(props) =>
    props.cart ? `none` : `3px solid var(--intensivePink)`};
  border-radius: 1.5rem;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: var(--intensivePink);
    box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.15);
    color: var(--white);
  }

  &:active {
    background-color: var(--darkBlue);
    color: var(--white);
  }

  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;
