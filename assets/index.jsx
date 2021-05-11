import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { messages, currentLang } from './lang/index';
import App from './App';

addLocaleData([...en, ...zh]);

async function run() {
  try {
    ReactDOM.render(
      <IntlProvider locale={currentLang} messages={messages[currentLang]}>
        <App />
      </IntlProvider>,
      document.getElementById('container'),
    );
  } catch (e) {
    console.error('run is error', e);
  }
}

run();
