import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from '../../../core/theme';
import { setNavigator } from '../../../core/navigator';

import TopBar from './TopBar';
import Navigator from './Navigator';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <TopBar />
      <Navigator ref={navigator => setNavigator(navigator)} />
    </ThemeProvider>
  );
}

export default App;
