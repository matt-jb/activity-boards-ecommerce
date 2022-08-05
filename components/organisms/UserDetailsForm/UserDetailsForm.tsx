import { useFormik } from "formik";
import { validate } from "../../../utils/utils";
import * as Yup from "yup";
import { SubmitButton } from "../PurchaseDetailsForm/PurchaseDetailsForm.styles";
import { UserDetailsFields } from "../../molecules";
import { FieldsWrapper } from "./UserDetailsForm.styles";
import { useAuth } from "../../../context/AuthContext";
import { useAlert } from "../../../context/AlertContext";
import { saveUserDetails } from "../../../lib/userControls";

const { name, phoneNumber, address, zipCode, city, wishList } = validate;

export default function UserDetailsForm() {
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
    }),
    onSubmit: (values, { setSubmitting }) => {
      saveUserDetails(user!.uid, values)
        .then(() => {
          window.scrollTo(0, 0);
          addAlert("success", "Poprawnie zapisano dane użytkownika.");
        })
        .then(() => {
          updateUserCtx(values);
        })
        .catch((err) => {
          addAlert("warning", err);
        });

      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FieldsWrapper>
        <UserDetailsFields formik={formik} />
        <SubmitButton type="submit" disabled={formik.isSubmitting}>
          Zapisz dane
        </SubmitButton>
      </FieldsWrapper>
    </form>
  );
}
