import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SearchBox = styled.input`
  display: block;
  margin-bottom: 2.5rem;
  text-align: center;
  margin: 2rem auto;
  height: 6rem;
  width: 80%;
  padding: 0 1rem;
  border: 2px solid #e6e6e6;
  border-radius: 3rem;
  overflow: hidden;
  background-color: var(--white);
  transition: all 0.2s;
  font-family: "Poppins", serif;
  font-weight: 400;
  font-size: 2rem;
  outline: none;

  &:hover {
    box-shadow: 0 0 1rem 0rem rgba(0, 0, 0, 0.17);
    border: 2px solid var(--pink);
  }

  &:focus {
    border: 2px solid var(--lightBlue);
  }

  @media only screen and (max-width: 500px) {
    width: 95%;
    margin: 2rem auto;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 1rem;
  }
`;

export const UserInfo = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: var(--darkGrey2);
`;
