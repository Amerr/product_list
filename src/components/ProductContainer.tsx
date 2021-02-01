import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { RootState } from '../redux/reducers';
import ProductList from './ProductList';
import ProductFilter from './ProductFilter';
import { fetchProducts } from '../redux/actions/productAction';
import { ProductState } from '../types';
import { mobile } from '../utils/breakpoint';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 80vh;

  ${mobile} {
    flex-direction: column;
  }
`;

const FilterWrapper = styled.div`
  flex-basis: 30%;
  border-right: 2px solid #ccc;

  ${mobile} {
    border: none;
  }
`;

const ProductListWrapper = styled.div`
  flex-basis: 70%;
  display flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
`;

const ProductContainer = () => {
  const productListData: ProductState = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter product based on filter selection
  let filteredProductItems = productListData.items;
  if (productListData.filter.length) {
    const brandFilter: string[] = [];
    const productFilter: string[] = [];
    productListData.filter.forEach((query) => {
      return query.type === 'brand'
        ? brandFilter.push(query.value)
        : productFilter.push(query.value);
    });
    if (brandFilter.length) {
      filteredProductItems = filteredProductItems.filter((item) =>
        brandFilter.includes(item.brand)
      );
    }
    if (productFilter.length) {
      filteredProductItems = filteredProductItems.filter((item) =>
        productFilter.includes(item.type)
      );
    }
  }

  return (
    <Wrapper>
      <FilterWrapper>
        <ProductFilter items={productListData.items} filter={productListData.filter} />
      </FilterWrapper>
      <ProductListWrapper>
        {productListData.isLoading ? (
          <Loading>Loding....</Loading>
        ) : (
          <ProductList items={filteredProductItems} />
        )}
      </ProductListWrapper>
    </Wrapper>
  );
};

export default ProductContainer;
