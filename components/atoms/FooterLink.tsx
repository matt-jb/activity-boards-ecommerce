import Link from 'next/link';
import styled from 'styled-components';
import { INavLink } from '../../utils/types';

const StyledLi = styled.li`
  width: fit-content;
  list-style: none;
  border-bottom: 1px solid transparent;
  transition: all ease-in-out .1s;
  cursor: pointer;
  
  &:hover {
    color: var(--lightGrey);
    border-bottom: 1px solid var(--lightGrey);
  }
`

export default function FooterLink({ text, url }: INavLink) {
  return (
    <Link href={url} passHref><StyledLi>{text}</StyledLi></Link>
  )
}
