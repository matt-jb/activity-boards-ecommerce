import Link from "next/link";
import { INavLink } from "../../../utils/types";
import { StyledNavLink } from "./NavLink.styles";

export default function NavLink({ text, url }: INavLink) {
  return (
    <Link href={url} passHref>
      <StyledNavLink>{text}</StyledNavLink>
    </Link>
  );
}
