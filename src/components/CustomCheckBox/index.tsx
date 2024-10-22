import React, { useCallback, useMemo, useState } from 'react';
import './styles.css';

const CustomCheckBox = ({
  name,
  code,
  handleChange,
}: {
  name: string;
  code: number;
  handleChange: (code: number, checked: boolean) => void;
}) => {
  const [checked, setChecked] = useState(false);
  const onChange = useCallback(() => {
    setChecked(!checked);
    handleChange(code, !checked);
  }, [checked, handleChange]);

  const showCheckBox = useMemo(() => {
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          id={name}
          onChange={onChange}
          checked={checked}
        />
        <label>{name}</label>
      </div>
    );
  }, [name, checked, onChange]);

  return <>{showCheckBox}</>;
};

export default CustomCheckBox;
