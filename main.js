import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import AppRoot from './components';
import reducer from './reducers';
import { ActionCreators } from './actions';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__,
});

const configureStore = initialState => {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));

  return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});
store.dispatch(ActionCreators.verifyAuth());

const App = () => <Provider store={store}><AppRoot /></Provider>;

Expo.registerRootComponent(App);
