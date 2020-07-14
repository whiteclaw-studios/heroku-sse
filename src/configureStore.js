/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createReducer from './reducers';
import { ROUTER_STORE_KEY } from './constants';

export default function configureStore(initialState = {}, history = {}) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  //   const composeEnhancers =
  //     process.env.NODE_ENV !== 'production' && typeof window === 'object'
  //       ? composeWithDevTools({ shouldHotReload: true, trace: true }) // Change this to false if app re-renders on `replaceReducer`
  //       : compose;

  const createMockReducers = preloadedState => {
    const keys = Object.keys(preloadedState);
    const mockReducers = {};
    keys.forEach(key => {
      if (key === ROUTER_STORE_KEY) return;
      mockReducers[key] = (state = {}) => state;
    });

    return mockReducers;
  };
  const store = createStore(
    createReducer(createMockReducers(initialState), history),
    { ...initialState },
    // composeEnhancers(...enhancers),
  );

  // Extensions
  store.injectedReducers = { ...createMockReducers(initialState) }; // Reducer registry

  return store;
}
