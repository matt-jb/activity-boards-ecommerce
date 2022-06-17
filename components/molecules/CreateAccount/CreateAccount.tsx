import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useAlert } from '../../../context/AlertContext';
import { auth } from '../../../lib/clientAuth';
import { validate } from '../../../utils/utils';
import FormInput from '../../atoms/FormInput';
import { Button, OtherOptions, StyledForm, Wrapper } from './CreateAccount.styles';

const initialValues = { email: '', password: '', confirmPassword: '' }
const { email, password, confirmPassword } = validate;

export default function CreateAccount() {
  const { addAlert } = useAlert();
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email, password, confirmPassword
    }),
    onSubmit: (values, { setSubmitting }) => {
      const { email, password } = values;
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        addAlert('success', 'Poprawnie zarejestrowano użytkownika.');
        router.push('/');
        setSubmitting(false);
      })
      .catch((error) => {
        addAlert('warning', error.message);
      });
    }
  });

  return (
    <Wrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FormInput
          id="email"
          type="email"
          label="Email"
          formik={formik}
        />
        <FormInput
          id="password"
          type="password"
          label="Hasło"
          formik={formik}
        />
        <FormInput
          id="confirmPassword"
          type="password"
          label="Potwierdź hasło"
          formik={formik}
        />
        <Button type="submit" disabled={formik.isSubmitting}>Zrejestruj się</Button>
      </StyledForm>
      <OtherOptions>Masz konto, ale nie pamiętasz hasła? <Link href="/reset">Zresetuj je</Link>.</OtherOptions>
    </Wrapper>
  )
}
