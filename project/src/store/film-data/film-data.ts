import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { FilmData } from '../../types/FilmData';
import { fetchFilmByID, fetchReviewsByID, changeFilmStatusToView } from '../api-actions';

const initialState: FilmData = {
  film: null,
  filmTab: 'Overview',
  comments: [],
  isLoaded: null,
  isFounded: null,
};

export const filmData = createSlice({
  name: NameSpace.FilmScreen,
  initialState,
  reducers: {
    changeFilmTab: (state, action) => {
      state.filmTab = action.payload;
    },
    resetFilmTab: (state) => {
      state.filmTab = 'Overview';
    }
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
