/* eslint-disable react/prop-types */
import React, {memo} from 'react';
import Title from './Title.jsx';
import RecordTable from './RecordTable.jsx';
import '../../css/header.css';

const ViewBody = ({views, records, fields, title, lines}) => {
  return (
    <div className="view-print-body">
      <Title title={title} />
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

export default memo(ViewBody);
