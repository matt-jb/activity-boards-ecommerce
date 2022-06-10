import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 1rem auto;
  font-family: 'Dosis', serif;
  font-size: 5rem;
  color: var(--pink);
  text-transform: uppercase;
  text-align: center;
`

interface Props {
  title: string
}

export default function PageTitle({ title }: Props) {
  return (
    <StyledTitle>{title}</StyledTitle>
  )
}
