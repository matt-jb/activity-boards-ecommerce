import Link from "next/link"
import styled from "styled-components"
import { INavLink } from "../../utils/types"

const StyledNavLink = styled.li`
  text-transform: uppercase;
  font-family: 'Poppins', serif;
  font-size: 1.7rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--black);
  list-style: none;
  transition: all .15s;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:hover {
    color: var(--pink);
    cursor: pointer;
  }
`

export default function NavLink({ text, url }: INavLink) {
  return (
    <Link href={url} passHref>
      <StyledNavLink>
        {text}
      </StyledNavLink>
    </Link>
  )
}
