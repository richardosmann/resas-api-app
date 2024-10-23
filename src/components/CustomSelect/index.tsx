import { useCallback, useMemo, useState } from 'react';
import './styles.css';
import { ageOptions } from '../../lib/constants';
import useResas from '../../hook/useResas';

const CustomSelect = () => {
  const [option, setOption] = useState('');

  const { useFilterByAge } = useResas();

  const handleSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>): void => {
      setOption(event.target.value);
      useFilterByAge(event.target.value);
    },
    [setOption, useFilterByAge]
  );

  const showSelect = useMemo(() => {
    return (
      <div className="select">
        <select value={option} onChange={handleSelect}>
          {ageOptions.map((age: string, index: number) => (
            <option key={index}>{age}</option>
          ))}
        </select>
      </div>
    );
  }, [ageOptions, handleSelect, option]);

  return <>{showSelect}</>;
};

export default CustomSelect;
