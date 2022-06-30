import { FormInput } from "../../atoms";

interface Props {
  formik: any;
}

export default function UserDetailsFields({ formik }: Props) {
  return (
    <>
      <FormInput id="fName" type="text" label="Imię" formik={formik} />
      <FormInput id="lName" type="text" label="Nazwisko" formik={formik} />
      <FormInput id="phoneNumber" type="text" label="Telefon" formik={formik} />
      <FormInput id="addressL1" type="text" label="Adres" formik={formik} />
      <FormInput id="addressL2" type="text" label="Adres" formik={formik} />
      <FormInput id="city" type="text" label="Miasto" formik={formik} />
      <FormInput
        id="zipCode"
        type="text"
        label="Kod pocztowy"
        formik={formik}
      />
    </>
  );
}
