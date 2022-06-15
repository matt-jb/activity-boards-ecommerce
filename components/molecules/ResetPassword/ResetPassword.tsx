import { sendPasswordResetEmail } from 'firebase/auth';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { auth } from '../../../lib/clientAuth';
import { validate } from '../../../utils/utils';
import FormInput from '../../atoms/FormInput';
import { Button, OtherOptions, StyledForm, Wrapper } from './ResetPassword.styles';

const initialValues = { email: '' }
const { email } = validate;

export default function ResetPassword() {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({ email }),
    onSubmit: values => {
      const { email } = values;

      sendPasswordResetEmail(auth, email)
        .then(() => {
          router.push('/');
        })
        .catch((error) => {
          console.log(error.message);
        });
  }});

  return (
    <Wrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FormInput
          id="email"
          type="email"
          label="Email"
          formik={formik}
        />
        <Button type="submit">Zresetuj hasło</Button>
      </StyledForm>
      <OtherOptions>Pamiętasz swoje hasło? <Link href="/login">Zaloguj się</Link>.</OtherOptions>
    </Wrapper>
  )
}
