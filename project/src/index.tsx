import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchFilmAction } from './store/api-actions';
import favoriteFilmMock from './mocks/favorite-film-mock';

store.dispatch(fetchFilmAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ErrorMessage />
      <App
        favouriteList = { favoriteFilmMock }
      />
    </Provider>
  </React.StrictMode>,
);
