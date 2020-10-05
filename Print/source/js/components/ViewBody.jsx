/* eslint-disable react/prop-types */
import React from 'react';
import {RecordTable} from './RecordTable.jsx';
import {Label} from './Label.jsx';
import '../../css/header.css';

const ViewBody = ({views, records, fields, title, lines}) => {

  return (
    <div className="view-print-body">
      <Label
        className="header-title"
        text={title}
        fontSize="16px"
        isVisible={!!title}
      />
      <RecordTable
        className="record-table"
        views={views}
        records={records}
        fields={fields}
        lines={lines}
      />
    </div>
  );
};

export {ViewBody};