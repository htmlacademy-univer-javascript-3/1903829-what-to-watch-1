import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import ErrorMessageComponent from './components/error-message-component/error-message-component';
import { checkAuthAction, fetchFilmsAction, fetchOneFilmAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchOneFilmAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ErrorMessageComponent />
      <App />
    </Provider>
  </React.StrictMode>,
);
