import { useState } from "react";
import { Layout } from "../components/templates";
import { useAuth } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";
import { IProduct } from "../utils/types";

export default function WishList() {
  const { user, addToWishList, removeFromWishList, clearWishList } = useAuth();
  const { products } = useProducts();
  const [wishList, setWishList] = useState(
    generateWishList(products as IProduct[], user!.wishList)
  );

  function generateWishList(products: IProduct[], list: Array<string>) {
    return products.filter((product) => list.includes(product.id));
  }

  function handleAdd(pid: string) {
    const i = wishList.findIndex((product) => product.id === pid);
    if (i > -1) return;
    addToWishList(pid);
    const newProduct = products!.find((product) => product.id === pid)!;
    setWishList((prev) => [...prev, newProduct]);
  }

  function handleRemove(pid: string) {
    const i = wishList.findIndex((product) => product.id === pid);
    if (i === -1) return;

    removeFromWishList(pid);
    setWishList((prev) => prev.filter((product) => product.id !== pid));
  }

  function handleClear() {
    clearWishList();
    setWishList([]);
  }

  return (
    <Layout title="Lista życzeń">
      <p>To jest Twoja lista życzeń!</p>
      {wishList.map((product, i) => (
        <>
          <p>
            {product.name}{" "}
            <button onClick={() => handleRemove(product.id)}>Odejmij!</button>
          </p>
        </>
      ))}
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      {products!.map((product) => (
        <>
          <p>
            Dodaj produkt: {product.name}{" "}
            <button onClick={() => handleAdd(product.id)}>Dodaj!</button>
          </p>
        </>
      ))}
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <button onClick={() => handleClear()}>Wyczyść wish listę</button>
    </Layout>
  );
}
