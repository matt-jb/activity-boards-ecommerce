import * as Yup from "yup";

export function getShortDescription(description: string) {
  const words = description.split(` `);
  if (words.length > 12) return words.slice(0, 12).join(` `).concat(`...`);
  return description;
}

export const validate = {
  email: Yup.string()
    .email("Nieprawidłowy adres Email")
    .required("Adres Email jest wymagany"),
  password: Yup.string()
    .required("Hasło jest wymagane.")
    .min(
      8,
      "Twoje hasło jest zbyt krótkie - powinno mieć przynajmniej 8 znaków."
    ),
  confirmPassword: Yup.string()
    .required("Potwierdzenie hasła jest wymagane.")
    .oneOf([Yup.ref("password"), null], "Oba hasła muszą być takie same."),
};
