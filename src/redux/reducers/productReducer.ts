import { Product } from '../../types/index';

const initialState: Product[] = [];

const productReducer = (state: Product[] = initialState, action: any) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default productReducer;
