/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import {PrintButton} from './js/components/PrintButton.jsx';
import './css/plugin.css';

(() => {
  kintone.events.on('app.record.index.show', (event) => {
    if (event.viewId === 20
      || document.getElementsByClassName('plint-view-button').length
      || event.viewType === 'calendar') {
      return event;
    }

    const viewName = event.viewName;
    const button = document.createElement('div');
    button.className = 'plint-view-button';
    kintone.app.getHeaderMenuSpaceElement().append(button);

    ReactDOM.render(<PrintButton viewName={viewName} />, button);

    return event;
  });
})();
