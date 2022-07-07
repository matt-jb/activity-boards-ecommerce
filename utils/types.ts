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
  category: string;
}

export interface IUserFormData {
  fName: string;
  lName: string;
  phoneNumber: string;
  addressL1: string;
  addressL2: string;
  zipCode: string;
  city: string;
  notes?: string;
}

export interface IUser extends IUserFormData {
  uid: string;
  email: string | null;
}

export interface IOrder extends IUserFormData {
  id: string;
  order: ICartItem[];
  total: number;
  createdBy: string;
  paid: boolean;
  status: string;
}

export interface INavLink {
  text: string;
  url: string;
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

export type usePaginationType = (data: Array<IProduct>) => {
  entries: Array<IProduct>;
  controls: IPaginateControls;
};

export interface IPaginateControls {
  lastPageIdx: number;
  actualPageIdx: number;
  goToFirstPage: () => void;
  goToPrevPage: () => void;
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
}

export type PaginationButtonColors =
  | "standard"
  | "current"
  | "disabled"
  | "arrow";

export type VisibleAccountViews = "purchases" | "data" | "deletion" | null;

export type SizesType = "small" | "medium" | "large";
