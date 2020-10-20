/* eslint-disable react/prop-types */
import React, {useState, useEffect, memo} from 'react';
import {NotifyPopup} from '@kintone/kintone-ui-component';
import ViewHead from '@components/ViewHead';
import ViewBody from '@components/ViewBody';

const ViewRoot = ({viewName, setIsOpen}) => {
  const [views, setViews] = useState(null);
  const [fields, setfields] = useState(null);
  const [records, setRecords] = useState(null);
  const [lines, setLines] = useState(1);
  const [title, setTitle] = useState('');
  const [isTimeStamp, setIsTimeStamp] = useState(false);
  const [timeStampFormat, setTimeStampFormat] = useState(undefined);
  const [timeStampString, setTimeStampString] = useState(undefined);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    let unmounted = false;

    (async () => {
      const appId = kintone.app.getId();
      const rawQuery = await kintone.app.getQuery();
      const _regex = /limit ([0-9]{1,3})/;
      const [query, limit] = [
        rawQuery.replace(_regex, 'limit 500'),
        rawQuery.match(_regex)[1],
      ];
      const [viewsData, fieldsData, recordsData] = await Promise.all([
        kintone
          .api(kintone.api.url('/k/v1/app/views', true), 'GET', {app: appId})
          .catch((e) => {
            setIsError(true);
            const text = `一覧情報の取得に失敗しました。\n${e.message}`;
            setErrorText(text);
            console.error(text);
          }),
        kintone
          .api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', {
            app: appId,
          })
          .catch((e) => {
            setIsError(true);
            const text = `フィールド情報の取得に失敗しました。\n${e.message}`;
            setErrorText(text);
            console.error(text);
          }),
        kintone
          .api(kintone.api.url('/k/v1/records', true), 'GET', {
            app: appId,
            query,
          })
          .catch((e) => {
            setIsError(true);
            const text = `レコードの取得に失敗しました。\n${e.message}`;
            setErrorText(text);
            console.error(text);
          }),
      ]);

      if (!unmounted) {
        setLines(+limit);
        setViews(viewsData.views[viewName]);
        setfields(fieldsData.properties);
        setRecords(recordsData.records);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, [viewName]);

  return (
    <div className="view-print-root">
      <ViewHead
        className="view-print-head"
        setIsOpen={setIsOpen}
        lines={lines}
        setLines={setLines}
        title={title}
        setTitle={setTitle}
        isTimeStamp={isTimeStamp}
        setIsTimeStamp={setIsTimeStamp}
        timeStampFormat={timeStampFormat}
        setTimeStampFormat={setTimeStampFormat}
        timeStampString={timeStampString}
        setTimeStampString={setTimeStampString}
      />
      <ViewBody
        className="view-print-body"
        title={title}
        views={views}
        fields={fields}
        records={records}
        lines={lines}
        timeStampString={timeStampString}
      />
      <NotifyPopup
        type="error"
        isVisible={isError}
        text={errorText}
        onClose={() => setIsError(false)}
      />
    </div>
  );
};

export default memo(ViewRoot);
