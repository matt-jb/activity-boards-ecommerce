import { StyledError, StyledInput, UserDetailsLabel } from "./FormInput.styles";

interface Props {
  id: string;
  label: string;
  type: string;
  formik: any; // To pewnie do zmodyfikowania
}

export default function FormInput({ id, label, type, formik }: Props) {
  return (
    <>
      <UserDetailsLabel htmlFor={id}>{label}:</UserDetailsLabel>
      <StyledInput
        id={id}
        type={type}
        placeholder={label}
        {...formik.getFieldProps(`${id}`)}
      />
      {formik.touched[id] && formik.errors[id] && (
        <StyledError>{formik.errors[id]}</StyledError>
      )}
    </>
  );
}
