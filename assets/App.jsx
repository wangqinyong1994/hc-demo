import React from 'react';
import { Provider } from 'mobx-react';
import Route from './router/index';
import store from './store/index';

export default () => (
  <Provider {...store}>
    <Route />
  </Provider>
);
