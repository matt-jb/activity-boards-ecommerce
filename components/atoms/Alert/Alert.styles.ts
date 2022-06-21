import styled from "styled-components";

export const colors = {
  warning: "#ff4b6c",
  success: "#65ff65",
  info: "#83aae4cc",
};

export const StyledAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 3rem;
  margin: 1rem auto;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: "Poppins", serif;
  font-size: 1.5rem;
  border-radius: 10rem;
  cursor: default;

  @media only screen and (max-width: 900px) {
    width: 95%;
  }

  @media only screen and (max-width: 600px) {
    height: 5.5rem;
  }
`;

export const StyledEx = styled.span`
  cursor: pointer;
`;
