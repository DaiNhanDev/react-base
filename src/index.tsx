import App from './App';
import reportWebVitals from './reportWebVitals';
import './locales/i18n';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { configureAppStore } from 'store/configureStore';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const store = configureAppStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
