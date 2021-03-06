import { NavLink } from "../../atoms";
import { StyledUl } from "./MainNavigation.styles";
import { links } from "./navLinks";

export default function MainNavigation() {
  return (
    <nav>
      <StyledUl data-testid="main-nav">
        {links.map((link) => (
          <NavLink key={link.text} text={link.text} url={link.url} />
        ))}
      </StyledUl>
    </nav>
  );
}
