import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import routes from './routes';
import { Provider } from 'react-redux';
const preloadedState =
  // eslint-disable-next-line no-underscore-dangle
  window.__INITIAL_STATE__; /* eslint no-underscore-dangle: ["error", { "allow": ["__PRELOADED_STATE__"] }] */
// Allow the passed state to be garbage-collected
// eslint-disable-next-line no-underscore-dangle
delete window.__INITIAL_STATE__;

// const IS_DEV = process.env.NODE_ENV === 'development';
const history = createBrowserHistory();
const store = configureStore(preloadedState, history);
// const initialState = window.initialState;
ReactDOM.hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
