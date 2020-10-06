/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, {memo} from 'react';
import {Button, Text} from '@kintone/kintone-ui-component';
import Label from './Label.jsx';
import Number from './Number.jsx';
import '../../css/Interface.css';

const ViewHead = ({setIsOpen, lines, setLines, title, setTitle}) => {
  return (
    <div className="view-print-head">
      <Button
        text="印刷"
        type="submit"
        onClick={() => {
          window.print();
        }}
      />
      <Button
        text="戻る"
        type="normal"
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <label >
        <Label text="表示行数:" fontSize="150%" />
        <Number
          value={lines}
          min="1"
          max="500"
          onChange={num => setLines((+num || 1) > 500 ? 500 : (+num || 1))}
        />
      </label>
      <label >
        <Label text="タイトル:" fontSize="150%" />
        <Text
          value={title}
          onChange={str => setTitle('' + str)}
        />
      </label>
    </div>
  );
};

export default memo(ViewHead);