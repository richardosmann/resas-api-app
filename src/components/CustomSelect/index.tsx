import { useMemo, useState } from 'react';
import './styles.css';
import { ageOptions } from '../../lib/constants';
import useResas from '../../hook/useResas';

const CustomSelect = () => {
  const [option, setOption] = useState('');

  const { useFilterByAge } = useResas();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setOption(event.target.value);
    useFilterByAge(event.target.value);
  };

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
  }, [ageOptions, handleSelect]);

  return <>{showSelect}</>;
};

export default CustomSelect;
