import { useState } from "react";
import {
  addProductToWishList,
  removeAllProductsFromWishList,
  removeProductFromWishList,
} from "../lib/userControls";
import { IProduct, IUser } from "../utils/types";

function initWishList(products: Array<IProduct>, list: Array<string>) {
  if (list.length === 0) return [];
  return products.filter((product) => list.includes(product.id));
}

export const useWishList = (products: Array<IProduct>, user: IUser) => {
  const [wishList, setWishList] = useState<IProduct[]>(
    initWishList(products, user.wishList)
  );
  const { uid } = user;

  async function addToWishList(pid: string) {
    await addProductToWishList(pid, uid);
    const newProduct = products.find((product) => product.id === pid)!;
    setWishList((prev) => [...prev, newProduct]);
  }

  async function removeFromWishList(pid: string) {
    await removeProductFromWishList(pid, uid);
    setWishList((prev) => prev.filter((product) => product.id !== pid));
  }

  async function clearWishList() {
    await removeAllProductsFromWishList(uid);
    setWishList([]);
  }

  return { wishList, addToWishList, removeFromWishList, clearWishList };
};
