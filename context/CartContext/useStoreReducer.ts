import { useEffect, useReducer } from "react";
import { storeReducer } from "./storeReducer";
import { ICartItem, IProduct } from "../../utils/types";
import { getProductIndex } from "../../utils/utils";

function setInitialState() {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("activity-boards-cart");
    if (data) return JSON.parse(data) as Array<ICartItem>;
  }
  return [];
}

export function useStoreReducer() {
  const [state, dispatch] = useReducer(storeReducer, setInitialState());

  useEffect(() => {
    localStorage.setItem("activity-boards-cart", JSON.stringify(state));
  });

  function addProduct(product: IProduct) {
    const cartProductIndex = getProductIndex(product, state);

    if (cartProductIndex === -1) {
      dispatch({
        type: "add-cart-item",
        payload: { product },
      });
    } else {
      const newQty = state[cartProductIndex].qty + 1;
      dispatch({
        type: "change-qty",
        payload: { product, cartProductIndex, newQty },
      });
    }
  }

  function decreaseProductAmount(product: IProduct) {
    const cartProductIndex = getProductIndex(product, state);
    const qty = state[cartProductIndex].qty;

    if (qty === 1) {
      removeProduct(product);
      return;
    }

    const newQty = state[cartProductIndex].qty - 1;
    dispatch({
      type: "change-qty",
      payload: { product, cartProductIndex, newQty },
    });
  }

  function removeProduct(product: IProduct) {
    const cartProductIndex = getProductIndex(product, state);

    dispatch({
      type: "remove-cart-item",
      payload: { cartProductIndex },
    });
  }

  function clearCartItems() {
    dispatch({
      type: "clear-cart-items",
    });
  }

  return {
    state,
    addProduct,
    clearCartItems,
    removeProduct,
    decreaseProductAmount,
  };
}
