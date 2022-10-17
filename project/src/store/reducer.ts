import { createReducer } from '@reduxjs/toolkit';
import { GenresList } from '../const';
import { filmsList } from '../mocks/films-mock';

const initialState = {
  genre: GenresList.ALL,
  filmList: filmsList,
};

export const reducer = createReducer(initialState, (action) => null);
