import { v4 as uuid } from 'uuid';
import './SubFilter.scss';

const SubFilter = ({
  title,
  items,
  onClick
}: {
  title: string;
  items: { value: string; isSelected: boolean }[];
  onClick: (item: string) => void;
}) => {
  return (
    <div className="subfilter-container">
      {items.length && (
        <>
          <h3>{title}</h3>
          <ul className="subfilter-list">
            {items.map((i) => {
              return (
                <li key={uuid()}>
                  <label htmlFor={i.value} onClick={() => onClick(i.value)}>
                    <input
                      type="checkbox"
                      name={i.value}
                      id={i.value}
                      defaultChecked={i.isSelected}
                    />
                    <span>{i.value}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default SubFilter;
