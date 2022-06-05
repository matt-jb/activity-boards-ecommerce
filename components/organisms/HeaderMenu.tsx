import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import MainNavigation from '../molecules/MainNavigation';
import UserNav from '../molecules/UserNav';
import logo from "../../public/img/logo.png";

const StyledHeader = styled.header`
  text-align: center;
  width: 100%;
  height: 10rem;
  padding: 0.4rem 0;
  background-color: var(--white);
  box-shadow: 1px 7px 70px 1px rgba(0,0,0,0.18);
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  height: 100%;
  margin: 0 auto;

  & .logo-container {
    max-width: 25rem;
  }
`

export default function HeaderMenu() {
  return <StyledHeader>
    <StyledHeaderWrapper>
      <Link href="/" passHref>
        <a className="logo-container">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Zakącik aktywności"
              className="logo"
            />
          </Link>
        </a>
      </Link>
      <MainNavigation />
      <UserNav />
    </StyledHeaderWrapper>
  </StyledHeader>
}
