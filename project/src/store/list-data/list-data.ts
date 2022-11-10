import { createSlice } from '@reduxjs/toolkit';
import { CARDS_PER_STEP, NameSpace } from '../../const';
import TypeFilm from '../../types/film-type';
import Reviews from '../../types/reviews';
import { SortGenreFilm } from '../../utils/functions';
import { fetchFavoriteFilmsAction, fetchFilmAction, changeFilmStatusToView, fetchOneFilmAction } from '../../store/api-actions';

type InitialState = {
  genre: string,
  filmsList: TypeFilm[];
  countShowCard: number,
  //oneGenreList: TypeFilm[],
  // authorizationStatus: string,
  // error: string | null,
  isDataLoaded: boolean,
  // filmTab: string,
  film: TypeFilm | null,
  filmsListFiltered: TypeFilm[],
  reviews: Reviews,
  // isLoaded: boolean | null,
  favoriteListFilms: TypeFilm[],
  favoriteCount: number,
}

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  countShowCard: 0,
  //oneGenreList: [],
  // authorizationStatus: AuthorizationStatus.Unknown,
  // error: null,
  isDataLoaded: false,
  // filmTab: 'Overview',
  film: null,
  // filmsListFiltered: [],
  reviews: [],
  // isLoaded: null,
  filmsListFiltered: [],
  favoriteListFilms: [],
  favoriteCount: 0,
};

const COUNT_LIST_CARD = 8;

export const reducer = createSlice({
  name: NameSpace.WelcomeScreen,
  initialState,
  reducers: {
    changeGenreFilm: (state, action) => {
      state.genre = action.payload.genre;
      const filmsListFiltered = SortGenreFilm(state.filmsList, action.payload.genre);
      state.countShowCard = filmsListFiltered.length < CARDS_PER_STEP ? filmsListFiltered.length : COUNT_LIST_CARD;
      state.filmsListFiltered = filmsListFiltered;
    },
    increaseCardCount: (state) => {
      state.countShowCard = (state.countShowCard + CARDS_PER_STEP) < state.filmsListFiltered.length ?
        state.countShowCard + CARDS_PER_STEP : state.filmsListFiltered.length;
    },
    resetCardCount: (state) => {
      state.countShowCard = state.filmsListFiltered.length < CARDS_PER_STEP ?
        state.filmsListFiltered.length : COUNT_LIST_CARD;
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
        state.countShowCard = films.length < CARDS_PER_STEP ? films.length : COUNT_LIST_CARD;
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
} = reducer.actions;
