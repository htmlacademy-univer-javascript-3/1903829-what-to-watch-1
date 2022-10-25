import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import TypeFilm from '../types/film-type';
import { changeGenreFilm, increaseCardCount, loadFilms, requireAuthorization } from './action';
import { SortGenreFilm } from '../utils/functions';

type InitialState = {
  genre: string,
  filmsList: TypeFilm[];
  countShowCard: number,
  oneGenreList: TypeFilm[],
  authorizationStatus: string,
}

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  countShowCard: 0,
  oneGenreList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreFilm, (state, action) => {
      state.genre = action.payload.genre;
      const oneGenreList = SortGenreFilm(state.filmsList, action.payload.genre);
      state.countShowCard = oneGenreList.length < 8 ? oneGenreList.length : 8;
      state.oneGenreList = oneGenreList;
    })
    .addCase(increaseCardCount, (state) => {
      state.countShowCard = (state.countShowCard + 8) < state.oneGenreList.length ?
        state.countShowCard + 8 : state.oneGenreList.length;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;
