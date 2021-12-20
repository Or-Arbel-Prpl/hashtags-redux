import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Button} from '@shopify/polaris';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppProvider i18n={enTranslations}>
      <App />
        {/* <Button onClick={() => alert('Button clicked!')}>Example button</Button> */}
      </AppProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


