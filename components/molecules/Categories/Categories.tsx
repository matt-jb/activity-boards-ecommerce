import { useRouter } from "next/router";
import { Category } from "../../atoms";
import { Wrapper } from "./Categories.styles";

export default function Categories() {
  const router = useRouter();

  return (
    <Wrapper>
      <Category
        name="Małe tablice"
        onClick={() => router.push("/categories/small")}
      />
      <Category
        name="Średnie tablice"
        onClick={() => router.push("/categories/medium")}
      />
      <Category
        name="Duże tablice"
        onClick={() => router.push("/categories/large")}
      />
    </Wrapper>
  );
}
