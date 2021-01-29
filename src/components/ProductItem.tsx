import styled from 'styled-components';
import { Product } from '../types/index';
import { mobile } from '../utils/breakpoint';
import FormatMoney from '../utils/format-currency';
import StarRating from '../utils/star-rating';
import './ProductItem.scss';

const TextMuted = styled.div`
  color: #333;
  font-size: 12px;
  font-weight: 400;

  ${mobile} {
    font-size: 18px;
  }
`;

const ItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 20px;
  color: #333;

  &:hover {
    border: 1px solid #d5d5d5;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > * {
    margin-bottom: 5px;
  }
`;

const BoldContent = styled.strong`
  font-weight: 800;
`;

const ProductName = styled(BoldContent)`
  font-size: 16px;

  ${mobile} {
    font-size: 24px;
  }
`;

const calculatePriceForTarget = (size: string, price: number, targetSize = 100): number => {
  const value = parseInt(size.replace('ML', ''), 10);
  if (value === targetSize) {
    return price;
  }
  return Math.round((price / value) * targetSize);
};

const ProductItem = ({ data }: { data: Product }) => {
  const productName = data.name.replace(data.brand, '').replace(data.type, '');
  const priceFor100ML = calculatePriceForTarget(data.size, data.price);
  const targetSize = '100ML';
  return (
    <ItemWrapper href={data.slug}>
      <img style={{ width: '100%' }} src={data.image} alt={data.name} />
      <ContentWrapper>
        <BoldContent className="product-brand" style={{ marginBottom: '5px' }}>
          {data.brand}
        </BoldContent>
        <ProductName>{productName}</ProductName>
        <TextMuted style={{ margin: '5px 0 10px' }}>{data.type}</TextMuted>
        <BoldContent className="price-actual">
          ab <FormatMoney price={data.price} /> / {data.size}
        </BoldContent>
        <BoldContent className="price-full">
          <FormatMoney price={priceFor100ML} /> / {targetSize}
        </BoldContent>
        <StarRating rating={data.rating} />
      </ContentWrapper>
    </ItemWrapper>
  );
};

export default ProductItem;
