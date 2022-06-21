import Link from "next/link";
import { INavLink } from "../../../utils/types";
import { StyledLi } from "./FooterLink.styles";

export default function FooterLink({ text, url }: INavLink) {
  return (
    <Link href={url} passHref>
      <StyledLi>{text}</StyledLi>
    </Link>
  );
}
