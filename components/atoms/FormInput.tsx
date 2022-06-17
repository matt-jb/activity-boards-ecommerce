import styled from "styled-components";

interface Props {
  id: string
  label: string
  type: string
  formik: any // To pewnie do zmodyfikowania
}

const StyledInput = styled.input`
  width: 30rem;
  height: 4rem;
  margin-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: var(--lightGrey2);
  border: 1px solid transparent;
  outline: none;
  border-radius: 10rem;
  font-size: 1.6rem;
  font-family: 'Poppins', serif;
  box-shadow: none;
  transition: all .1s ease-in-out;

  &:focus {
    box-shadow: 0.1rem 0.5rem 1rem 0rem rgba(0,0,0,0.15);
    border: 1px solid var(--darkGrey);
    outline: none;
  }
`

const StyledError = styled.p`
  margin-top: 0.5rem;
  font-size: 1.3rem;
  color: var(--intensivePink);
`

export default function FormInput({ id, label, type, formik }: Props) {
  return (
    <>
      {/* <label htmlFor={id}>{label}</label> */}
      <StyledInput
        id={id}
        type={type}
        placeholder={label}
        {...formik.getFieldProps(`${id}`)}
      />
      {formik.touched[id] && formik.errors[id] && <StyledError>{formik.errors[id]}</StyledError>}
    </>
  )
}
