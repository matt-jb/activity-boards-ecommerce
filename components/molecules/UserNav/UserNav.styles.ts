import styled from 'styled-components';

export const StyledUserSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 25rem;

  & .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Poppins', serif;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
    

    &:hover {
      & + .icon-name, .icon {
        fill: var(--pink);
      }
    }
  }

  & .icon {
    width: 4rem;
    height: 3.5rem;
    fill: var(--black);
    transition: all .15s;
  }

  & .icon-name {
    text-transform: uppercase;
    color: var(--pink);
  }
`;
