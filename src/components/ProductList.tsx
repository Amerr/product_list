import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { RootState } from '../redux/reducers';
import ProductItem from './ProductItem';

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  flex-basis: 30%;

  @media (max-width: 768px) {
    flex-basis: 45%;
  }
`;

const ProductList = () => {
  const items = useSelector((state: RootState) => state.product);
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
