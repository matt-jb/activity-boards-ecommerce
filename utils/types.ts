import { StaticImageData } from "next/image";

export interface IProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  images: Array<string | StaticImageData>;
  width: number;
  height: number;
}

export interface IPaymentFormData {
  fName: string;
  lName: string;
  phoneNumber: string;
  addressL1: string;
  addressL2: string;
  zipCode: string;
  city: string;
  notes: string;
}

export interface INavLink {
  text: string;
  url: string;
}

export interface IUser {
  uid: string;
  email: string | null;
}

export interface ICartItem {
  qty: number;
  item: IProduct;
}

export type UserType = IUser | null;

export type LoginType = "google" | "github";

export type AlertTypes = "warning" | "success" | "info";

export interface IAlert {
  type: AlertTypes;
  message: string;
  id: string;
}

export type ActionsType =
  | { type: "add-cart-item"; payload: { product: IProduct } }
  | {
      type: "change-qty";
      payload: { product: IProduct; cartProductIndex: number; newQty: number };
    }
  | { type: "remove-cart-item"; payload: { cartProductIndex: number } }
  | { type: "clear-cart-items" };
