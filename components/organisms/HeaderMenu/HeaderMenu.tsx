import { Logo } from "../../atoms";
import { MainNavigation } from "../../molecules";
import { UserNav } from "../../molecules";
import { StyledHeader, StyledHeaderWrapper } from "./HeaderMenu.styles";

export default function HeaderMenu() {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo />
        <MainNavigation />
        <UserNav />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
}
