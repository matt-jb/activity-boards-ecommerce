import Logo from '../../atoms/Logo';
import { MainNavigation } from '../../molecules/index';
import { UserNav } from '../../molecules/index';
import { StyledHeader, StyledHeaderWrapper } from './HeaderMenu.styles';

export default function HeaderMenu() {
  return <StyledHeader>
    <StyledHeaderWrapper>
      <Logo />
      <MainNavigation />
      <UserNav />
    </StyledHeaderWrapper>
  </StyledHeader>
}
