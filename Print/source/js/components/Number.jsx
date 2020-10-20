/* eslint-disable react/prop-types */
import React, {memo} from 'react';
import '@css/font';
import '@css/Number';

const Number = ({
  value,
  isDisabled = false,
  isVisible = true,
  placeholder = '',
  min = 0,
  max = Infinity,
  onChange,
  onClick,
}) => {
  if (isVisible === false) {
    return null;
  }

  const _onChange = (e) => {
    const num = e.target.value;

    onChange &&
      onChange(() => {
        return (+num || min) > max ? max : +num || min;
      });
  };

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
