/* eslint-disable react/prop-types */
import React, {memo} from 'react';
import Label from '@components/Label';
import '@css/header';

const Title = ({title}) => {
  return (
    <>
      <Label
        className="header-title"
        text={title}
        fontSize="16px"
        isVisible={!!title}
      />
    </>
  );
};

export default memo(Title);
