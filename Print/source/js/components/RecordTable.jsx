/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, {memo} from 'react';
import '@css/RecordTable';
import {getStringFromDate} from '@js/util';

const RecordTable = ({views, records, fields, lines}) => {
  if (!(views && fields && records && lines)) {
    return <p>No Data.</p>;
  }
  const fieldCodes = views.fields;
  const tableHead = fieldCodes.map((code, index) => {
    return (
      <th key={`head-${index}`}>
        <div>{fields[code].label}</div>
      </th>
    );
  });
  const getStringFromType = (record, type) => {
    if (!(record && type)) return '';

    switch (type) {
      case 'CREATOR':
      case 'MODIFIER':
        return record.value.name;
      case 'USER_SELECT':
      case 'CATEGORY':
      case 'STATUS_ASSIGNEE':
      case 'ORGANIZATION_SELECT':
      case 'GROUP_SELECT':
        return record.value
          .map((x) => {
            return x.name;
          })
          .join(', ');
      case 'CREATED_TIME':
      case 'UPDATED_TIME':
      case 'DATETIME': {
        const jstDate = new Date(record.value.replace('Z', '+09:00'));
        const format = 'YYYY/MM/DD hh:mm';
        return getStringFromDate(jstDate, format);
      }
      case 'CHECK_BOX':
      case 'MULTI_SELECT':
        return record.value.join(', ');
      case 'FILE':
      case 'SUBTABLE':
        return '';
      default:
        return record.value;
    }
  };

  const TableBody = ({records, codes, lines}) => {
    const TableData = ({index, records, codes}) => {
      return codes.map((code, codeIndex) => {
        return (
          <td key={`body-${index}-${codeIndex}`}>
            <div>
              {records[index]
                ? getStringFromType(
                    records[index][code],
                    records[index][code].type
                  )
                : ' '}
            </div>
          </td>
        );
      });
    };

    const tableRows = [];
    for (let i = 0; i < lines; i++) {
      tableRows.push(
        <tr>
          <TableData key={i} index={i} records={records} codes={codes} />
        </tr>
      );
    }

    return <>{tableRows}</>;
  };

  return (
    <>
      <table className="record-table">
        <thead>
          <tr key="-1">{tableHead}</tr>
        </thead>
        <tbody>
          <TableBody
            records={records}
            fields={fields}
            codes={fieldCodes}
            lines={lines}
          />
        </tbody>
      </table>
    </>
  );
};
export default memo(RecordTable);
