import { createContext, useContext, useEffect, useState } from "react";
import { getAllProductsQuery } from "../lib/queries";
import { IProduct } from "../utils/types";

interface IProductsContext {
  products: Array<IProduct> | undefined;
}

interface Props {
  children: React.ReactNode;
}

const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

export const useProducts = () => useContext(ProductsContext);

export function ProductsContextProvider({ children }: Props) {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    getAllProductsQuery()
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
