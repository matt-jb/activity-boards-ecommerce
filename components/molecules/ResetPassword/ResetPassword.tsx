import { sendPasswordResetEmail } from "firebase/auth";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useAlert } from "../../../context/AlertContext";
import { auth } from "../../../lib/clientAuth";
import { validate } from "../../../utils/utils";
import FormInput from "../../atoms/FormInput";
import {
  Button,
  OtherOptions,
  StyledForm,
  Wrapper,
} from "./ResetPassword.styles";

const initialValues = { email: "" };
const { email } = validate;

export default function ResetPassword() {
  const router = useRouter();
  const { addAlert } = useAlert();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({ email }),
    onSubmit: (values, { setSubmitting }) => {
      const { email } = values;

      sendPasswordResetEmail(auth, email)
        .then(() => {
          addAlert("info", "Link do resetu hasła wysłany.");
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
        <Button type="submit" disabled={formik.isSubmitting}>
          Zresetuj hasło
        </Button>
      </StyledForm>
      <OtherOptions>
        Pamiętasz swoje hasło? <Link href="/login">Zaloguj się</Link>.
      </OtherOptions>
    </Wrapper>
  );
}
