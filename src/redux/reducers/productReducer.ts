import { ProductState } from '../../types/index';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FILTER_PRODUCT,
  FILTER_CLEAR_ALL
} from '../actions/types';

const initialState: ProductState = {
  isLoading: false,
  items: [],
  filter: []
};

const productReducer = (state: ProductState = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, items: payload, isLoading: false };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, items: [], isLoading: false };
    case FILTER_CLEAR_ALL:
      return { ...state, filter: [] };
    case FILTER_PRODUCT:
      if (
        state.filter.some((query) => query.type === payload.type && query.value === payload.value)
      ) {
        return {
          ...state,
          filter: state.filter.filter(
            (i) => !(i.type === payload.type && i.value === payload.value)
          )
        };
      }
      return { ...state, filter: [...state.filter, payload] };
    default:
      return state;
  }
};

export default productReducer;
