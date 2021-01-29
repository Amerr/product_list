import styled from 'styled-components';
import { mobile } from './breakpoint';

const Rating = styled.div`
  font-size: 12px;
  font-weight: 800;
  ${mobile} {
    font-size: 16px;
  }
`;
const StarRating = ({ rating }: { rating: number }) => {
  const value = rating / 20;
  return <Rating>Rating: {value.toFixed(2)}</Rating>;
};

export default StarRating;
