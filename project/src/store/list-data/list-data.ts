import { createSlice } from '@reduxjs/toolkit';
import { CARDS_PER_STEP, NameSpace } from '../../const';
import TypeFilm from '../../types/film-type';
import { SortGenreFilm } from '../../utils/functions';
import { fetchFavoriteFilmsAction, fetchFilmAction, changeFilmStatusToView, fetchOneFilmAction } from '../../store/api-actions';

type InitialState = {
  genre: string,
  filmsList: TypeFilm[];
  countShowCard: number,
  isDataLoaded: boolean,
  film: TypeFilm | null,
  filmsListFiltered: TypeFilm[],
  favoriteListFilms: TypeFilm[],
  favoriteCount: number,
}

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  countShowCard: 0,
  isDataLoaded: false,
  film: null,
  filmsListFiltered: [],
  favoriteListFilms: [],
  favoriteCount: 0,
};

export const MainData = createSlice({
  name: NameSpace.WelcomeScreen,
  initialState,
  reducers: {
    changeGenreFilm: (state, action) => {
      const filmsListFiltered = SortGenreFilm(state.filmsList, action.payload.genre);
      state.genre = action.payload.genre;
      state.filmsListFiltered = filmsListFiltered;
      state.countShowCard = filmsListFiltered.length < CARDS_PER_STEP ? filmsListFiltered.length : CARDS_PER_STEP;
    },
    increaseCardCount: (state) => {
      state.countShowCard = (state.countShowCard + CARDS_PER_STEP) < state.filmsListFiltered.length ?
        state.countShowCard + CARDS_PER_STEP : state.filmsListFiltered.length;
    },
    resetCardCount: (state) => {
      state.countShowCard = state.filmsListFiltered.length < CARDS_PER_STEP ? state.filmsListFiltered.length : CARDS_PER_STEP;
    },
    resetMainScreen: (state) => {
      state.genre = 'All genres';
      state.filmsListFiltered = state.filmsList;
      state.countShowCard = state.filmsList.length < CARDS_PER_STEP ? state.filmsList.length : CARDS_PER_STEP;
    },
    setDataLoadedStatus: (state, action) => {
      state.isDataLoaded = action.payload;
    },
    setFavoriteCount: (state, action) => {
      state.favoriteCount = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        const films = action.payload;

        state.filmsList = films;
        state.filmsListFiltered = films;
        state.countShowCard = films.length < CARDS_PER_STEP ? films.length : CARDS_PER_STEP;
        state.isDataLoaded = false;
      })
      .addCase(fetchOneFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteListFilms = action.payload;
        state.favoriteCount = action.payload.length;
        state.isDataLoaded = false;
      })
      .addCase(changeFilmStatusToView.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  }
});

export const {
  resetMainScreen,
  changeGenreFilm,
  increaseCardCount,
  resetCardCount,
  setDataLoadedStatus,
  setFavoriteCount
} = MainData.actions;
