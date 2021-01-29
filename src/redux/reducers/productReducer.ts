import { ProductState } from '../../types/index';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from '../actions/types';

const initialState: ProductState = {
  isLoading: false,
  items: []
};

const productReducer = (state: ProductState = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { items: payload, isLoading: false };
    case FETCH_PRODUCT_FAILURE:
      return { items: [], isLoading: false };
    default:
      return state;
  }
};

export default productReducer;
