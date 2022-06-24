import { createContext, useContext } from "react";
import { useStoreReducer } from "./useStoreReducer";
import { ICartItem, IProduct } from "../../utils/types";

interface ICartContext {
  state: Array<ICartItem>;
  addProduct: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  decreaseProductAmount: (product: IProduct) => void;
  clearCartItems: () => void;
}

interface Props {
  children: React.ReactNode;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export const useCart = () => useContext(CartContext);

export function CartContextProvider({ children }: Props) {
  const {
    state,
    addProduct,
    removeProduct,
    decreaseProductAmount,
    clearCartItems,
  } = useStoreReducer();

  return (
    <CartContext.Provider
      value={{
        state,
        addProduct,
        removeProduct,
        decreaseProductAmount,
        clearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
