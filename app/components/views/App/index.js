import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from '../../../core/theme';

import TopBar from './TopBar';
import Navigator from './Navigator';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <TopBar />
      <Navigator />
    </ThemeProvider>
  );
}

export default App;
