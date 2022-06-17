import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`

export const Button = styled.button`
  width: 23rem;
  height: 4.5rem;
  margin-top: 2rem;
  background-color: var(--lightBlue2);
  border: none;
  border-radius: 10rem;
  font-size: 1.6rem;
  font-family: 'Poppins', serif;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: none;
  transition: all .1s ease-in-out;

  &:hover {
    background-color: var(--lightBlue);
    box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0,0,0,0.15);
  }

  &:active {
    background-color: var(--intensivePink);
  }
`

export const OtherOptions = styled.p`
  font-size: 1.5rem;
  font-family: 'Poppins', serif;
  margin: 1rem auto;
  color: var(--black);

  & a {
    color: var(--pink);
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover {
      color: var(--intensivePink);
      border-bottom: 1px solid var(--intensivePink);
    }
  }
`