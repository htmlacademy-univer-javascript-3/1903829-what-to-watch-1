import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CARDS_PER_STEP } from '../const';
import TypeFilm from '../types/film-type';
import { changeGenreFilm, increaseCardCount, loadFilms, requireAuthorization, setError, resetMainScreen,
  resetFilmScreen, changeFilmTab, setDataLoadedStatus } from './action';
import { SortGenreFilm } from '../utils/functions';

type InitialState = {
  genre: string,
  filmsList: TypeFilm[];
  countShowCard: number,
  oneGenreList: TypeFilm[],
  authorizationStatus: string,
  error: string | null,
  isDataLoaded: boolean,
  filmTab: string,
}

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  countShowCard: 0,
  oneGenreList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false,
  filmTab: 'Overview',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreFilm, (state, action) => {
      state.genre = action.payload.genre;
      const oneGenreList = SortGenreFilm(state.filmsList, action.payload.genre);
      state.countShowCard = oneGenreList.length < CARDS_PER_STEP ? oneGenreList.length : 8;
      state.oneGenreList = oneGenreList;
    })
    .addCase(increaseCardCount, (state) => {
      state.countShowCard = (state.countShowCard + CARDS_PER_STEP) < state.oneGenreList.length ?
        state.countShowCard + CARDS_PER_STEP : state.oneGenreList.length;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
      state.oneGenreList = action.payload;
      state.countShowCard = CARDS_PER_STEP;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(resetMainScreen, (state) => {
      state.genre = 'All genres';
      state.oneGenreList = state.filmsList;
      state.countShowCard = state.filmsList.length < CARDS_PER_STEP ? state.filmsList.length : CARDS_PER_STEP;
    })
    .addCase(resetFilmScreen, (state) => {
      state.filmTab = 'Overview';
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmTab = action.payload.currentTab;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });}
);

export default reducer;
