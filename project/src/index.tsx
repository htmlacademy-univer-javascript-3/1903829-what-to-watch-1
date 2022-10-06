import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { GENRES_LIST } from './const';
import { filmsList } from './mocks/films-mock';
import { favoriteFilmMock } from './mocks/favorite-film-mock';
import { ReviewsMock } from './mocks/reviews-mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title = { 'Title' }
      genre = { 'Genre' }
      year = { 0 }
      films = { filmsList }
      genres = { GENRES_LIST }
      favouriteList = { favoriteFilmMock }
      reviews = { ReviewsMock }
    />
  </React.StrictMode>,
);
