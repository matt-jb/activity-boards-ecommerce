import styled from 'styled-components';
import IconDelete from '../assets/IconDelete';

const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;
  border: none;
  border-radius: 100%;
  z-index: 1;
  transition: all .1s;
  cursor: pointer;
  opacity: 0.7;
  left: 1rem;
  top: 1rem;
  background-color: var(--pink);
  margin-right: 1rem;

  & .icon {
    display: inline-block;
    position: relative;
    width: 5rem;
    height: 5rem;
    left: 0.85rem;
    top: 0.9rem;
  }

  &:hover {
    opacity: 1;
    box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0,0,0,0.15);
  }
`

export default function DeleteButton() {
  return (
    <StyledButton title="Edytuj produkt">
      <IconDelete className="icon" />
    </StyledButton>
  )
}