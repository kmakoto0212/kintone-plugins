/* eslint-disable react/prop-types */
import React, {memo} from 'react';
import {Label} from './Label.jsx';
import '../../css/header.css';

const Title = ({title}) => {
  return (
    <>
      <Label
        className="header-title"
        text={title}
        fontSize="16px"
        isVisible={!!title}
      />
    </>);
};

export default memo(Title);