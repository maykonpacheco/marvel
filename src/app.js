import React from 'react';

import store from './store';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyles />
    </Provider>
  );
}