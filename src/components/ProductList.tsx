import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { Product } from '../types';
import { mobile, tablet } from '../utils/breakpoint';

const ListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
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

const ZeroResult = styled.div`
  text-align: center;
`;

const ProductList = ({ items }: { items: Product[] }) => {
  return (
    <>
      {items.length ? (
        <ListWrapper>
          {items.map((item) => (
            <ListItem key={uuid()}>
              <ProductItem data={item} />
            </ListItem>
          ))}
        </ListWrapper>
      ) : (
        <ZeroResult>No Results Matching the Filter</ZeroResult>
      )}
    </>
  );
};

export default ProductList;
