import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { Product } from '../types';
import { mobile, tablet } from '../utils/breakpoint';

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  flex-basis: 30%;

  ${tablet} {
    flex-basis: 45%;
  }

  ${mobile} {
    flex-basis: 100%;
  }
`;

const ProductList = ({ items }: { items: Product[] }) => {
  return (
    <div>
      <ListWrapper>
        {items.map((item) => (
          <ListItem key={uuid()}>
            <ProductItem data={item} />
          </ListItem>
        ))}
      </ListWrapper>
    </div>
  );
};

export default ProductList;
