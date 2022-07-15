import * as Yup from "yup";
import { ICartItem, IProduct } from "./types";

export function getShortDescription(description: string) {
  const words = description.split(` `);
  if (words.length > 12) return words.slice(0, 12).join(` `).concat(`...`);
  return description;
}

export function getItemsNumber(state: Array<ICartItem>) {
  return state.reduce((prev, curr) => {
    return prev + curr.qty;
  }, 0);
}

export function getTotalForItem(product: ICartItem) {
  return product.qty * product.item.price;
}

export function getGrandTotal(state: Array<ICartItem>) {
  return state.reduce((prev, curr) => {
    return prev + getTotalForItem(curr);
  }, 0);
}

export function getProductIndex(product: IProduct, state: Array<ICartItem>) {
  const { id } = product;
  return state.findIndex((product) => product.item.id === id);
}

export const validate = {
  email: Yup.string()
    .email("Nieprawidłowy adres Email.")
    .required("Adres Email jest wymagany."),
  password: Yup.string()
    .required("Hasło jest wymagane.")
    .min(
      8,
      "Twoje hasło jest zbyt krótkie - powinno mieć przynajmniej 8 znaków."
    ),
  confirmPassword: Yup.string()
    .required("Potwierdzenie hasła jest wymagane.")
    .oneOf([Yup.ref("password"), null], "Oba hasła muszą być takie same."),
  name: Yup.string().required("Imię i nazwisko są wymagane."),
  address: Yup.string().required("Adres jest wymagany."),
  zipCode: Yup.string()
    .required("Kod pocztowy jest wymagany.")
    .length(6, "Kod pocztowy jest zbyt długi.")
    .matches(/^[0-9]{2}-[0-9]{3}/, "Podaj kod pocztowy w formacie XX-XXX."),
  city: Yup.string().required("Musisz podać miasto."),
  notes: Yup.string(),
  phoneNumber: Yup.string()
    .required("Musisz podać numer telefonu.")
    .matches(
      /^\d{3}\d{3}\d{3}/g,
      "Podaj numer telefonu jako ciąg 9 cyfr, bez spacji i myślników."
    )
    .length(9, "Numer telefonu jest zbyt długi."),
};

export const sizes = {
  small: `Małe`,
  medium: `Średnie`,
  large: `Duże`,
};

export function filterSearchResults(
  value: string,
  products?: Array<IProduct>
): Array<IProduct> {
  if (!products) return [];
  return products.filter(
    (item) => item.name.toLowerCase().indexOf(value.toLocaleLowerCase()) > -1
  );
}
