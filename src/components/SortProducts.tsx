import { useState, useEffect } from 'react';
import { Product } from '../types';
import {
  SORT_PRICE_HIGH_TO_LOW,
  SORT_PRICE_LOW_TO_HIGH,
  SORT_RATING_HIGH_TO_LOW,
  SORT_RATING_LOW_TO_HIGH
} from '../utils/constants';
import './SortProducts.scss';

const SortProducts = ({ sort, items }: { sort: (arg: string) => void; items: Product[] }) => {
  const [sortValue, setSortValue] = useState('empty');

  useEffect(() => {
    setSortValue('empty');
  }, [items]);

  return (
    <div className="sort-wrapper">
      <label htmlFor="sort-products" className="sort-label">
        Sort Products
      </label>
      <select
        name="sort-products"
        id="sort-products"
        className="sort-dropdown"
        value={sortValue}
        onChange={(e) => {
          sort(e.target.value);
          setSortValue(e.target.value);
        }}>
        <option value="empty">----</option>
        <option value={SORT_PRICE_HIGH_TO_LOW}>Price High to Low</option>
        <option value={SORT_PRICE_LOW_TO_HIGH}>Price Low to High</option>
        <option value={SORT_RATING_HIGH_TO_LOW}>Rating High to Low</option>
        <option value={SORT_RATING_LOW_TO_HIGH}>Rating Low to High</option>
      </select>
    </div>
  );
};

export default SortProducts;
