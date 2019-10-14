import React from 'react';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { Provider } from 'react-redux';

import store from './store';

import AppContainer from './containers/AppContainer';

// eslint-disable-next-line
if (__DEV__) {
  activateKeepAwake();
}

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

registerRootComponent(App);
