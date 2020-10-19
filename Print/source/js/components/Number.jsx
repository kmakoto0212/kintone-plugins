/* eslint-disable react/prop-types */
import React, {memo} from 'react';
import '../../css/font.css';
import '../../css/Number.css';

const Number = ({
  value,
  isDisabled = false,
  isVisible = true,
  placeholder = '',
  min,
  max,
  onChange,
  onClick,
}) => {
  const _onChange = (event) => {
    onChange && onChange(event.target.value);
  };

  if (isVisible === false) {
    return null;
  }

  return (
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      className="kuc-input-number"
      min={min}
      max={max}
      onClick={onClick}
      onChange={_onChange}
      disabled={isDisabled}
    />
  );
};

export default memo(Number);
