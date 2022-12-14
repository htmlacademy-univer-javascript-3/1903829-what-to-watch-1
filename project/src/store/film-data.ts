import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import FilmData from '../types/film-data';
import { fetchFilmByID, fetchReviewsByID, changeFilmStatusToView, fetchMoreFilmByID } from './api-actions';
import { deleteFilm } from '../utils/functions';

const initialState: FilmData = {
  film: null,
  filmTab: 'Overview',
  comments: [],
  isLoaded: null,
  isFounded: null,
  moreFilm: [],
};

export const filmData = createSlice({
  name: NameSpace.FilmScreen,
  initialState,
  reducers: {
    changeFilmTab: (state, action) => { state.filmTab = action.payload; },
    resetFilmTab: (state) => { state.filmTab = 'Overview'; }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmByID.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(fetchFilmByID.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFounded = true;
        state.isLoaded = false;
      })
      .addCase(fetchFilmByID.rejected, (state, action) => {
        state.isFounded = false;
        state.isLoaded = false;
      })
      .addCase(fetchMoreFilmByID.fulfilled, (state, action) => {
        state.moreFilm = deleteFilm(action.payload, state.film?.id);
      })
      .addCase(fetchReviewsByID.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(changeFilmStatusToView.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  }
});

export const {
  changeFilmTab,
  resetFilmTab
} = filmData.actions;
