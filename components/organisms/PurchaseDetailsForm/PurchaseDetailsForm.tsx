import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { UserDetailsFields } from "../../molecules";
import * as Yup from "yup";
import { useAlert } from "../../../context/AlertContext";
import { validate } from "../../../utils/utils";
import { Field, FormikProvider, useFormik } from "formik";
import {
  FieldsWrapper,
  StyledError,
  StyledTextArea,
  SubmitButton,
  UserDetailsLabel,
} from "./PurchaseDetailsForm.styles";
import { useCart } from "../../../context/CartContext";
import { createOrder } from "../../../lib/payments";
import { saveUserDetails } from "../../../lib/userControls";
import { IUserFormData } from "../../../utils/types";

const { name, phoneNumber, address, zipCode, city, notes, wishList } = validate;

export default function PurchaseDetailsForm() {
  const router = useRouter();
  const { state } = useCart();
  const { addAlert } = useAlert();
  const { user, updateUserCtx } = useAuth();
  const initialValues = {
    fName: user?.fName || "",
    lName: user?.lName || "",
    phoneNumber: user?.phoneNumber || "",
    addressL1: user?.addressL1 || "",
    addressL2: user?.addressL2 || "",
    zipCode: user?.zipCode || "",
    city: user?.city || "",
    notes: "",
    wishList: user?.wishList || [],
  };

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
      wishList,
    }),
    onSubmit: async (values, { setSubmitting }) => {
      await createOrder(state, values as IUserFormData, user)
        .then(async (docRef) => {
          router.push(`/cart/payment/${docRef.id}`);
        })
        .catch((err) => {
          addAlert("warning", `Wystąpił błąd: ${err}`);
        });

      await saveUserDetails(user!.uid, values as IUserFormData)
        .then(() => {
          updateUserCtx(values as IUserFormData);
        })
        .catch((err) => {
          console.log(err);
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
