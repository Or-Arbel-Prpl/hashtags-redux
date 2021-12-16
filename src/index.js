import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


