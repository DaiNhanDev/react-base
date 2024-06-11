/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import ReactDOM from 'react-dom/client';
// import { Switch, BrowserRouter, Router } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { ConnectedRouter } from 'connected-react-router';

import { Provider } from 'react-redux';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';
import { history } from 'store/reducers';

import { ThemeProvider } from 'styles/theme/ThemeProvider';

import reportWebVitals from 'reportWebVitals';

import { App } from './app/index';

// Initialize languages
import './locales/i18n';

// // Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// // the index.html file and this observer)
// const openSansObserver = new FontFaceObserver('Inter', {});

// // When Inter is loaded, add a font-family using Inter to the body
// openSansObserver.load().then(() => {
//   document.body.classList.add('fontLoaded');
//   console.log('======> NEXT');
// }, () =>{
//   console.log('====> ERROR');
// });

const store = configureAppStore(history);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider>
        <HelmetProvider>
          <GlobalStyle />
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
);

// Hot reloadable translation json files
// if (module.hot) {
//   module.hot.accept(['./locales/i18n'], () => {
//     // No need to render the App again because i18next works with the hooks
//   });
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
