import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchFilmAction } from './store/api-actions';
import filmsList from './mocks/films-mock';
import favoriteFilmMock from './mocks/favorite-film-mock';
import ReviewsMock from './mocks/reviews-mock';

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
        title = { 'Title' }
        genre = { 'Genre' }
        year = { 0 }
        films = { filmsList }
        favouriteList = { favoriteFilmMock }
        reviews = { ReviewsMock }
      />
    </Provider>
  </React.StrictMode>,
);
