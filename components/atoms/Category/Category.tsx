import { Block } from "./Category.styles";

interface Props {
  name: string;
  onClick: () => void;
}

export default function Category({ name, onClick }: Props) {
  return <Block onClick={onClick}>{name}</Block>;
}
