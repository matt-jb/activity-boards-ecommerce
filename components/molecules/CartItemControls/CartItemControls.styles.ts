import styled from "styled-components";

export const ItemControls = styled.div`
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
  font-weight: 600;

  &:hover {
    box-shadow: 0.1rem 1.2rem 1.9rem 0rem rgba(0, 0, 0, 0.17);
    border: 2px solid var(--pink);
  }

  @media only screen and (max-width: 600px) {
    height: 25rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ThumbnailContainer = styled.section`
  position: relative;
  float: left;
  height: 90%;
  width: 20%;
  margin-right: 1rem;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    height: 40%;
    width: 40%;
  }
`;

export const Name = styled.div`
  width: 25%;

  @media only screen and (max-width: 600px) {
    width: 80%;
    margin: 1rem 0;
    text-align: center;
  }
`;

export const Price = styled.span`
  font-weight: 400;
`;

export const Qty = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 35%;
  font-weight: 400;

  & .control {
    width: 4rem;
    height: 4rem;
    color: var(--lightBlue);
    cursor: pointer;
    user-select: none;
    transition: all 0.2s;

    &:hover {
      color: var(--intensivePink);
    }
  }

  & .x {
    color: var(--pink);
    margin-right: 2rem;
  }

  @media only screen and (max-width: 600px) {
    width: 60%;
    margin: 1rem 0;
    text-align: center;
  }
`;

export const Total = styled.div`
  width: 20%;

  @media only screen and (max-width: 600px) {
    width: 60%;
    text-align: center;
  }
`;
