import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { UserDetailsFields } from "../../molecules";
import * as Yup from "yup";
import { useAlert } from "../../../context/AlertContext";
import { getGrandTotal, validate } from "../../../utils/utils";
import { Field, FormikProvider, useFormik } from "formik";
import {
  FieldsWrapper,
  StyledError,
  StyledTextArea,
  SubmitButton,
  UserDetailsLabel,
} from "./PurchaseDetailsForm.styles";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../lib/clientAuth";
import { useCart } from "../../../context/CartContext";

const initialValues = {
  fName: "",
  lName: "",
  phoneNumber: "",
  addressL1: "",
  addressL2: "",
  zipCode: "",
  city: "",
  notes: "",
};
const { name, phoneNumber, address, zipCode, city, notes } = validate;

export default function PurchaseDetailsForm() {
  const router = useRouter();
  const { user } = useAuth();
  const { state } = useCart();
  const { addAlert } = useAlert();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      fName: name,
      lName: name,
      phoneNumber,
      addressL1: address,
      zipCode,
      city,
      notes,
    }),
    onSubmit: (values, { setSubmitting }) => {
      const {
        fName,
        lName,
        phoneNumber,
        addressL1,
        addressL2,
        zipCode,
        city,
        notes,
      } = values;

      addDoc(collection(db, "orders"), {
        order: state,
        total: getGrandTotal(state),
        fName,
        lName,
        phoneNumber,
        addressL1,
        addressL2,
        zipCode,
        city,
        notes,
        paid: false,
        createdBy: user?.uid || "anonymous",
        createdAt: Timestamp.fromDate(new Date()),
      })
        .then(async (docRef) => {
          router.push(`/cart/payment/${docRef.id}`);
        })
        .catch((err) => {
          addAlert("warning", `Wystąpił błąd: ${err}`);
        });

      setSubmitting(false);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FieldsWrapper>
          <FormikProvider value={formik}>
            <UserDetailsFields formik={formik} />
            <UserDetailsLabel htmlFor="notes">Uwagi:</UserDetailsLabel>
            <Field name="notes">
              {({ field, meta }: any) => (
                <>
                  <StyledTextArea id="notes" {...field} />
                  {meta.touched && meta.error && (
                    <StyledError>{meta.error}</StyledError>
                  )}
                </>
              )}
            </Field>
            <SubmitButton type="submit" disabled={formik.isSubmitting}>
              Kup z obowiązkiem zapłaty
            </SubmitButton>
          </FormikProvider>
        </FieldsWrapper>
      </form>
    </>
  );
}
