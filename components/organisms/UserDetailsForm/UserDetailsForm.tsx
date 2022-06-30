import { useFormik } from "formik";
import { validate } from "../../../utils/utils";
import * as Yup from "yup";
import { SubmitButton } from "../PurchaseDetailsForm/PurchaseDetailsForm.styles";
import { UserDetailsFields } from "../../molecules";
import { FieldsWrapper } from "./UserDetailsForm.styles";
import { useAuth } from "../../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../lib/clientAuth";
import { useAlert } from "../../../context/AlertContext";
import { getUserDetails } from "../../../lib/userControls";
import { useEffect } from "react";

const { name, phoneNumber, address, zipCode, city } = validate;

export default function UserDetailsForm() {
  const { user } = useAuth();
  const { addAlert } = useAlert();
  let initialValues = {
    fName: "",
    lName: "",
    phoneNumber: "",
    addressL1: "",
    addressL2: "",
    zipCode: "",
    city: "",
  };

  // getUserDetails(user!.uid).then((vals) => {
  //   initialValues = vals;
  // });

  // useEffect(() => {
  //   getUserDetails(user!.uid).then((vals) => {
  //     initialValues = vals;
  //   });
  // }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: Yup.object({
      fName: name,
      lName: name,
      phoneNumber,
      addressL1: address,
      zipCode,
      city,
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const { fName, lName, phoneNumber, addressL1, addressL2, zipCode, city } =
        values;
      await setDoc(doc(db, "users", user!.uid), {
        fName,
        lName,
        phoneNumber,
        addressL1,
        addressL2,
        zipCode,
        city,
      })
        .then(() => {
          window.scrollTo(0, 0);
          addAlert("success", "Poprawnie zapisano dane użytkownika.");
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
