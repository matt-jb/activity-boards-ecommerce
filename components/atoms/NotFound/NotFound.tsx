import { useRouter } from "next/router";
import { StyledGoBack, StyledNotFound } from "./NotFound.styles";

export default function NotFound() {
  const router = useRouter();

  return (
    <StyledNotFound>
      The page you&apos;re looking for was not found.
      <StyledGoBack type="button" onClick={() => router.back()}>
        Go back
      </StyledGoBack>
    </StyledNotFound>
  );
}
