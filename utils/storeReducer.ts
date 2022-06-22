import { ActionsType, ICartItem } from "./types";

export function storeReducer(state: Array<ICartItem>, action: ActionsType) {
  switch (action.type) {
    case "add-cart-item":
      return [...state, { qty: 1, item: action.payload.product }];

    case "change-qty":
      const newState = [...state];
      newState[action.payload.cartProductIndex].qty = action.payload.newQty;
      return [...newState];

    case "remove-cart-item":
      const removedItemState = [...state];
      removedItemState.splice(action.payload.cartProductIndex, 1);
      return [...removedItemState];

    case "clear-cart-items":
      return [];

    default:
      return state;
  }
}
