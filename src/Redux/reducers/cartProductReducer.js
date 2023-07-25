import {
  CART_ADD_PRODUCT, CART_REMOVE_PRODUCT,
} from "../constants/CartConstants"

    let item;
    let productExists

export const cartReducer = (state = { cartItems: [] }, action) => {
    
  switch (action.type) {
    
    case CART_ADD_PRODUCT:
       item = action.payload;
       productExists = state.cartItems.find(
        ((x) => x.product === item.product)
      );

      if (productExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === productExists ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_PRODUCT:
        return{
            ...state,
            cartItems: state.cartItems.filter((x) => x.product !== action.payload)
    }

    default:
      return state;
  }
};
