import React from 'react';
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import configureStore from '../shared/store';
import App from '../shared/App';
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();

const store = window.store || configureStore(window.__INITIAL_STATE__);

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}

if (!window.store) {
  window.store = store;
}
