import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchFilmsAction, fetchOneFilmAction } from './store/api-actions';
// import HistoryRouter from './components/history-route/history-route';
// import browserHistory from './browser-history';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchOneFilmAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <HistoryRouter history={ browserHistory }> */}
      <ErrorMessage />
      <App />
      {/* </HistoryRouter> */}
    </Provider>
  </React.StrictMode>,
);
