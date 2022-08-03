import { StyledTitle } from "./PageTitle.styles";

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return <StyledTitle data-testid="page-title">{title}</StyledTitle>;
}
