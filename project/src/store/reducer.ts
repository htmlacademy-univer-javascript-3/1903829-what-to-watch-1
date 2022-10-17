import { createReducer } from '@reduxjs/toolkit';
import { filmsList } from '../mocks/films-mock';
import { changeGenreFilm } from './action';

const initialState = {
  genre: 'All genres',
  filmList: filmsList,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreFilm, (state, action) => {
      state.genre = action.payload.genre;
    });
});
