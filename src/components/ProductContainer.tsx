import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { RootState } from '../redux/reducers';
import ProductList from './ProductList';
import ProductFilter from './ProductFilter';
import { fetchProducts } from '../redux/actions/productAction';
import { ProductState } from '../types';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  min-height: 80vh;
`;

const FilterWrapper = styled.div`
  flex-basis: 30%;
  border-right: 2px solid #ccc;
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

  return (
    <Wrapper>
      <FilterWrapper>
        <ProductFilter />
      </FilterWrapper>
      <ProductListWrapper>
        {productListData.isLoading ? (
          <Loading>Loding....</Loading>
        ) : (
          <ProductList items={productListData.items} />
        )}
      </ProductListWrapper>
    </Wrapper>
  );
};

export default ProductContainer;
