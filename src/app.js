import React from 'react';

import configureStore from './store/index';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global';
import Routes from './routes';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyles />
    </Provider>
  );
}