import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useAlert } from "../../../context/AlertContext";
import { auth } from "../../../lib/clientAuth";
import { validate } from "../../../utils/utils";
import { FormInput } from "../../atoms";
import {
  Button,
  OtherOptions,
  StyledForm,
  Wrapper,
} from "./LoginWithEmail.styles";

const initialValues = { email: "", password: "" };
const { email, password } = validate;

export default function LoginWithEmail() {
  const router = useRouter();
  const { addAlert } = useAlert();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email,
      password,
    }),
    onSubmit: (values, { setSubmitting }) => {
      const { email, password } = values;
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          addAlert("success", "Jesteś zalogowany.");
          router.push("/");
          setSubmitting(false);
        })
        .catch((error) => {
          addAlert("warning", error.message);
        });
    },
  });

  return (
    <Wrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FormInput id="email" type="email" label="Email" formik={formik} />
        <FormInput
          id="password"
          type="password"
          label="Hasło"
          formik={formik}
        />
        <Button
          type="submit"
          disabled={formik.isSubmitting}
          data-testid="login-submit-btn"
        >
          Zaloguj się
        </Button>
      </StyledForm>
      <OtherOptions>
        Nie masz konta? <Link href="/register">Załóż je</Link>.
      </OtherOptions>
      <OtherOptions>
        Nie pamiętasz hasła? <Link href="/reset">Zresetuj je</Link>.
      </OtherOptions>
    </Wrapper>
  );
}
