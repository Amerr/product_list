import styled from 'styled-components';
import ProductList from './ProductList';
import ProductFilter from './ProductFilter';

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
`;

const ProductContainer = () => {
  return (
    <Wrapper>
      <FilterWrapper>
        <ProductFilter />
      </FilterWrapper>
      <ProductListWrapper>
        <ProductList />
      </ProductListWrapper>
    </Wrapper>
  );
};

export default ProductContainer;
