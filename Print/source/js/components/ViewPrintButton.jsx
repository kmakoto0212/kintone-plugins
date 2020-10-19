/* eslint-disable react/prop-types */
import React, {useState, memo} from 'react';
import {Button} from '@kintone/kintone-ui-component';
import {Overlay} from 'react-portal-overlay';
import ViewRoot from './ViewRoot.jsx';
import '../../css/Interface.css';

const ViewPrintButton = ({viewName}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        text="一覧印刷"
        type="submit"
        onClick={() => {
          scrollTo(0, 0); // 座標0,0以外で開くと表示が崩れる不具合に対応
          setIsOpen(true);
        }}
      />
      <Overlay
        className="plugin-overlay"
        open={isOpen}
        animation={{
          duration: 200,
          easing: 'ease',
        }}
        defaultPortalStyles={{
          position: 'absolute',
          top: '0px',
          reft: '0px',
          zIndex: 999,
          width: isOpen ? '100%' : 0,
          height: isOpen ? '100%' : 0,
          backgroundColor: 'white',
        }}
        style={{
          position: 'relative',
          top: '0px',
          reft: '0px',
          zIndex: 1000,
          width: '100%',
          height: '100%',
        }}
      >
        <ViewRoot viewName={viewName} setIsOpen={setIsOpen} />
      </Overlay>
    </>
  );
};

export default memo(ViewPrintButton);
