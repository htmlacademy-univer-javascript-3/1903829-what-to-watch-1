import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmsList } from './mock/film';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title = { 'Title' }
      genre = { 'Genre' }
      year={ 0 }
      films={ filmsList }
    />
  </React.StrictMode>,
);
