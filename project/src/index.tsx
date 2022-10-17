import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { filmsList } from './mocks/films-mock';
import { favoriteFilmMock } from './mocks/favorite-film-mock';
import { ReviewsMock } from './mocks/reviews-mock';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
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
