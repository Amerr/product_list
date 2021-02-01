import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { Product } from '../types';
import { mobile, tablet } from '../utils/breakpoint';
import SortProducts from './SortProducts';
import './ProductList.scss';
import {
  SORT_PRICE_HIGH_TO_LOW,
  SORT_PRICE_LOW_TO_HIGH,
  SORT_RATING_HIGH_TO_LOW,
  SORT_RATING_LOW_TO_HIGH
} from '../utils/constants';

const ListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 20px;
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

const ZeroResult = styled.div`
  text-align: center;
`;

const ProductList = ({ items }: { items: Product[] }) => {
  const [sortProducts, setSortProducts] = useState(items);

  useEffect(() => {
    setSortProducts(items);
  }, [items]);

  const sortProductBy = (value: string) => {
    let sorted = items;
    switch (value) {
      case SORT_PRICE_HIGH_TO_LOW:
        // Sorting of price is not acurate since its only sorts based price not
        // taking
        sorted = sortProducts.sort((a, b) => b.price - a.price);
        break;
      case SORT_PRICE_LOW_TO_HIGH:
        sorted = sortProducts.sort((a, b) => a.price - b.price);
        break;
      case SORT_RATING_HIGH_TO_LOW:
        sorted = sortProducts.sort((a, b) => b.rating - a.rating);
        break;
      case SORT_RATING_LOW_TO_HIGH:
        sorted = sortProducts.sort((a, b) => a.rating - b.rating);
        break;
      default:
    }
    setSortProducts([...sorted]);
  };

  return (
    <>
      {items.length ? (
        <div className="product-list-container">
          <SortProducts sort={sortProductBy} items={items} />
          <ListWrapper>
            {sortProducts.map((item) => (
              <ListItem key={uuid()}>
                <ProductItem data={item} />
              </ListItem>
            ))}
          </ListWrapper>
        </div>
      ) : (
        <ZeroResult>No Results Matching the Filter</ZeroResult>
      )}
    </>
  );
};

export default ProductList;
