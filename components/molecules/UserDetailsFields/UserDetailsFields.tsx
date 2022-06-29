import { FormInput } from "../../atoms";
import { UserDetailsLabel } from "./UserDetailsFields.styles";

interface Props {
  formik: any;
}

export default function UserDetailsForm({ formik }: Props) {
  return (
    <>
      <UserDetailsLabel htmlFor="fName">Imię:</UserDetailsLabel>
      <FormInput id="fName" type="text" label="Imię" formik={formik} />

      <UserDetailsLabel htmlFor="lName">Nazwisko:</UserDetailsLabel>
      <FormInput id="lName" type="text" label="Nazwisko" formik={formik} />

      <UserDetailsLabel htmlFor="phoneNumber">Telefon:</UserDetailsLabel>
      <FormInput id="phoneNumber" type="text" label="Telefon" formik={formik} />

      <UserDetailsLabel htmlFor="addressL1">Adres:</UserDetailsLabel>
      <FormInput id="addressL1" type="text" label="Adres" formik={formik} />

      <UserDetailsLabel htmlFor="addressL2">Adres (c.d.):</UserDetailsLabel>
      <FormInput id="addressL2" type="text" label="Adres" formik={formik} />

      <UserDetailsLabel htmlFor="city">Miasto:</UserDetailsLabel>
      <FormInput id="city" type="text" label="Miasto" formik={formik} />

      <UserDetailsLabel htmlFor="zipCode">Kod pocztowy:</UserDetailsLabel>
      <FormInput
        id="zipCode"
        type="text"
        label="Kod pocztowy"
        formik={formik}
      />
    </>
  );
}
