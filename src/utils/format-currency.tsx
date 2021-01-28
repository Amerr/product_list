const CURRENCY = '€';

const FormatMoney = ({ price }: { price: number }) => {
  return (
    <span>
      {price / 100} {CURRENCY}
    </span>
  );
};

export default FormatMoney;
