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
  return (
    <Rating>
      Rating:
      {rating / 20}
    </Rating>
  );
};

export default StarRating;
