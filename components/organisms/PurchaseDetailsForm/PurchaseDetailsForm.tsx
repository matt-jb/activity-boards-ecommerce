import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { UserDetailsFields } from "../../molecules";
import * as Yup from "yup";
import { useAlert } from "../../../context/AlertContext";
import { validate } from "../../../utils/utils";
import { useFormik } from "formik";
import {
  ButtonWrapper,
  FieldsWrapper,
  StyledError,
  StyledTextArea,
  SubmitButton,
  TextAreaWrapper,
  UserDetailsLabel,
} from "./PurchaseDetailsForm.styles";

const initialValues = {
  fName: "",
  lName: "",
  addressL1: "",
  addressL2: "",
  zipCode: "",
  city: "",
  notes: "",
};
const { name, address, zipCode, city, notes } = validate;

export default function PurchaseDetailsForm() {
  const router = useRouter();
  const { user } = useAuth();
  const { addAlert } = useAlert();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      fName: name,
      lName: name,
      addressL1: address,
      zipCode,
      city,
      notes,
    }),
    onSubmit: (values, { setSubmitting }) => {
      const { fName, lName, addressL1, addressL2, zipCode, city, notes } =
        values;

      console.log(`fName: ${fName}`);
      console.log(`lName: ${lName}`);
      console.log(`addressL1: ${addressL1}`);
      console.log(`addressL2: ${addressL2}`);
      console.log(`zipCode: ${zipCode}`);
      console.log(`city: ${city}`);
      console.log(`notes: ${notes}`);
      setSubmitting(false);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FieldsWrapper>
          <UserDetailsFields formik={formik} />
          <UserDetailsLabel htmlFor="notes">Uwagi:</UserDetailsLabel>
          <StyledTextArea id="notes" {...formik.getFieldProps(`${notes}`)} />
          {formik.touched.notes && formik.errors.notes && (
            <StyledError>{formik.errors.notes}</StyledError>
          )}
        </FieldsWrapper>
        <ButtonWrapper>
          <SubmitButton type="submit" disabled={formik.isSubmitting}>
            Kup z obowiązkiem zapłaty
          </SubmitButton>
        </ButtonWrapper>
      </form>
    </>
  );
}
