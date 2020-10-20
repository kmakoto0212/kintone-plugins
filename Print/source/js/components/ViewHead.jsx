/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, {memo} from 'react';
import {
  PrintButton,
  ReturnButton,
  InputViewLine,
  InputTitle,
} from '@components/Header';
import '@css/Interface';

const ViewHead = ({setIsOpen, lines, setLines, title, setTitle}) => {
  return (
    <div className="view-print-head">
      <PrintButton />
      <ReturnButton setIsOpen={setIsOpen} />
      <InputViewLine lines={lines} setLines={setLines} />
      <InputTitle title={title} setTitle={setTitle} />
    </div>
  );
};

export default memo(ViewHead);
