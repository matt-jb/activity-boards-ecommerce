import styled from "styled-components";

export const StyledProductCard = styled.div`
  width: 100%;
  height: 25rem;
  border: 2px solid #e6e6e6;
  border-radius: 3rem;
  overflow: hidden;
  background-color: var(--white);
  transition: all .2s;
  font-family: 'Poppins', serif;

  & .imageContainer {
    position: relative;
    float: left;
    height: 100%;
    width: 50%;
    margin-right: 1rem;
    overflow: hidden;

    & div {
      display: inline-block;
      position: relative;
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      z-index: 1;
      transition: all .1s;
      cursor: pointer;
      opacity: 0.7;

      & .icon {
        display: inline-block;
        width: 5rem;
        height: 5rem;
        position: relative;
      }

      &:hover {
        opacity: 1;
        box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0,0,0,0.15);
      }
    }

    & .editContainer {
      left: 1rem;
      top: 1rem;
      background-color: var(--lightBlue);
      margin-right: 1rem;

      & .edit {
        left: 0.3rem;
        top: 0.8rem;
      }
    }

    & .deleteContainer {
      left: 1rem;
      top: 1rem;
      background-color: var(--pink);

      & .delete {
        left: 0.85rem;
        top: 0.9rem;
      }
    }
  }

  & .name {
    margin: 1.3rem 0;
    font-family: 'Dosis', serif;
    font-size: 1.7rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  & .description {
    font-size: 1.2rem;

    & .ctaMore {
      margin-left: 1rem;
      font-weight: 600;
      color: var(--darkGrey);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all .2s;

      &:hover {
        color: var(--black);
        border-bottom: 1px solid var(--black);
      }
    }
  }

  & .price {
    margin: 1.3rem 0;
    font-size: 1.4rem;

    & .desc {
      font-weight: 600;
    }
  }

  & .ctaWrapper {
    display: flex;
    margin-top: 2rem;

    & a {
      text-decoration: none;
    }

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;
      border-radius: 1.5rem;
      font-size: 1.3rem;
      color: var(--white);
      cursor: pointer;

      &:hover {
        box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0,0,0,0.15);
      }
    }
    
    & .more {
      width: 9rem;
      margin-right: 2rem;
      background-color: var(--lightBlue);
      transition: all 0.1s ease-in-out;

      &:hover {
        background-color: var(--pink);
      }
    }

    & .addToCart {
      width: 12rem;
      background-color: var(--pink);
      transition: all 0.1s ease-in-out;

      &:hover {
        background-color: var(--intensivePink);
      }
    }
  }

  &:hover {
    box-shadow: 0.1rem 1.2rem 1.9rem 0rem rgba(0,0,0,0.17);
    border: 2px solid var(--pink);
  }
`