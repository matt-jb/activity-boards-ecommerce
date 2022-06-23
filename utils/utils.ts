import * as Yup from "yup";
import { ICartItem, IProduct } from "./types";

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
