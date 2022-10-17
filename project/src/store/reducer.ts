import { createReducer } from '@reduxjs/toolkit';
import filmsList from '../mocks/films-mock';
import { changeGenreFilm, increaseCardCount } from './action';
import { SortGenreFilm } from '../utils/functions';

const initialState = {
  genre: 'All genres',
  filmsList: filmsList,
  countShowCard: filmsList.length < 8 ? filmsList.length : 8,
  oneGenreList: filmsList,
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
    });
});

export default reducer;
