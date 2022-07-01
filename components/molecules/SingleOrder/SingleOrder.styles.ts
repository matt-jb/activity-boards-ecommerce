import styled from "styled-components";

export const OrderControls = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12rem;
  margin-bottom: 2rem;
  padding-right: 1rem;
  border: 2px solid #e6e6e6;
  border-radius: 3rem;
  overflow: hidden;
  background-color: var(--white);
  transition: all 0.2s;
  font-family: "Poppins", serif;
  font-weight: 400;

  &:hover {
    box-shadow: 0.1rem 1.2rem 1.9rem 0rem rgba(0, 0, 0, 0.17);
    border: 2px solid var(--pink);
  }

  @media only screen and (max-width: 900px) {
    height: 25rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: left;
  height: 90%;
  width: 33%;
  margin: auto 1rem;

  & span {
    font-weight: 600;
  }

  @media only screen and (max-width: 900px) {
    height: 40%;
    width: 40%;
  }
`;
