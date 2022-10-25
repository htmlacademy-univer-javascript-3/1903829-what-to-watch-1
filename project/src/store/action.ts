import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import TypeFilm from '../types/film-type';

const changeGenreFilm = createAction<{ genre: string }>('films/changeGenre');
const increaseCardCount = createAction('main/increaseCardCount');
const resetCardCount = createAction('main/resetCardCount');
const loadFilms = createAction<TypeFilm[]>('data/loadFilms');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setError = createAction<string | null>('game/setError');
const resetMainScreen = createAction('main/resetState');
const resetFilmScreen = createAction('film/resetState');
const changeFilmTab = createAction<{ currentTab: string }>('film/changeFilmTab');
const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export { changeGenreFilm, increaseCardCount, resetCardCount, loadFilms,requireAuthorization, setError, resetMainScreen, resetFilmScreen,
  changeFilmTab, setDataLoadedStatus };
