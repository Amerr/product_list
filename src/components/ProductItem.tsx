import { Product } from '../types/index';

const ProductItem = (props: Product) => {
  return <div>{props.name}</div>;
};

export default ProductItem;
