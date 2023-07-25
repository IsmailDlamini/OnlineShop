import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
} from "../constants/productConstants";

// PRODUCT LIST
export const productListReducer = (
  state = { loading: false, products: [], error: null },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_LIST_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// PRODUCT DETAILS
export const productDetailsReducer = (
  state = { loading: false, product: { reviews: [] }, error: null },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
