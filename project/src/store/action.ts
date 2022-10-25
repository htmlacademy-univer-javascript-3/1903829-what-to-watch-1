import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import TypeFilm from '../types/film-type';

const changeGenreFilm = createAction<{ genre: string }>('films/changeGenre');
const increaseCardCount = createAction('main/increaseCardCount');
const resetCardCount = createAction('main/resetCardCount');
const loadFilms = createAction<TypeFilm>('data/loadFilms');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export { changeGenreFilm, increaseCardCount, resetCardCount, loadFilms,requireAuthorization };
