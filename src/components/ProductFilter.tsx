import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_PRODUCT, FILTER_CLEAR_ALL } from '../redux/actions/types';
import { Product, ProductFilterQuery } from '../types';
import './ProductFilter.scss';
import SubFilter from './SubFilter';
import useWindowSize from '../utils/use-window-resize';

const ProductFilter = ({ items, filter }: { items: Product[]; filter: ProductFilterQuery[] }) => {
  const brandSet = new Set(items.map((i) => i.brand));
  const productTypeSet = new Set(items.map((i) => i.type));

  const listOfBrands = [];
  const listOfprofuctType = [];

  const brandFilter: string[] = [];
  const productTypeFilter: string[] = [];

  filter.forEach((query) =>
    query.type === 'brand' ? brandFilter.push(query.value) : productTypeFilter.push(query.value)
  );

  // Format data for the view Subfilter
  for (const i of brandSet.values()) {
    listOfBrands.push({ value: i, isSelected: brandFilter.includes(i) });
  }
  for (const i of productTypeSet.values()) {
    listOfprofuctType.push({ value: i, isSelected: productTypeFilter.includes(i) });
  }

  const dispatch = useDispatch();
  const brandDispatch = (value: string) =>
    dispatch({ type: FILTER_PRODUCT, payload: { type: 'brand', value } });

  const productTypeDispatch = (value: string) =>
    dispatch({ type: FILTER_PRODUCT, payload: { type: 'type', value } });
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const [width] = useWindowSize();

  useEffect(() => {
    setShowFilterMenu(width > 767);
  }, [width]);

  return (
    <div className="filter-wrapper">
      <div className="filter-mobile-toggle">
        <button type="button" onClick={() => setShowFilterMenu(!showFilterMenu)}>
          {showFilterMenu ? 'Hide Filter' : 'Show filter'}
        </button>
      </div>
      <div className={`filter-content ${showFilterMenu ? 'show' : 'hide'}`}>
        <div className="clear-button-wrapper">
          {filter.length !== 0 && (
            <button type="button" onClick={() => dispatch({ type: FILTER_CLEAR_ALL })}>
              Clear All
            </button>
          )}
        </div>
        <SubFilter title="Brand" items={listOfBrands} onClick={brandDispatch} />
        <SubFilter title="Product Type" items={listOfprofuctType} onClick={productTypeDispatch} />
      </div>
    </div>
  );
};

export default ProductFilter;
