/* eslint-disable react/prop-types */
import React from 'react';
import '../../css/font.css';
import '../../css/Label.css';

const Label = ({text, textColor, backgroundColor, isRequired, isVisible, onClick, fontSize}) => {
  const _onClick = e => {
    onClick && onClick(e);
    return true;
  };

  if (isVisible === false) {
    return null;
  }

  const _style = {color: '' || textColor, backgroundColor: '' || backgroundColor, fontSize: fontSize || '14px'};

  return (
    <div className="kuc-label" onClick={_onClick} role="presentation">
      <span style={_style}>{text}</span>
      {isRequired && typeof isRequired === 'boolean' && <span className="kuc-require">*</span>}
    </div>
  );
};
export {Label};