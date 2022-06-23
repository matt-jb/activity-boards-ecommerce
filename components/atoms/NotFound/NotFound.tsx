import { useRouter } from "next/router";
import { StyledGoBack, StyledNotFound } from "./NotFound.styles";

export default function NotFound() {
  const router = useRouter();

  return (
    <StyledNotFound>
      Ups! Ta strona nie istnieje.
      <StyledGoBack type="button" onClick={() => router.back()}>
        Zawróć!
      </StyledGoBack>
    </StyledNotFound>
  );
}
