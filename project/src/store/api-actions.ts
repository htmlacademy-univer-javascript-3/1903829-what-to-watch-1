import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import TypeFilm from '../types/film-type.js';
import Reviews from '../types/reviews.js';
import { ApiRoute, TIMEOUT_SHOW_ERROR, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './index';
import FavoriteFilms from '../types/favorite-films';
import { StatusFilm } from '../types/status';
import { setError } from './app-process/app-process';
import { createAction } from '@reduxjs/toolkit';
import { dropToken } from '../services/token';
import { dropAvatarURL } from '../services/avatar';

export const fetchFilmsAction = createAsyncThunk<TypeFilm[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TypeFilm[]>(ApiRoute.Films);

    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(ApiRoute.Login);
  },
);

export const loginAction = createAsyncThunk<{ token: string, avatarUrl: string, userId: number }, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const {data: {token, avatarUrl, id}} = await api.post<UserData>(ApiRoute.Login, {email, password});
    return {token: token, avatarUrl: avatarUrl, userId: id};
  },
);

const redirectToRoute = createAction<string>('app/redirectToRoute');

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dropAvatarURL();
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<FavoriteFilms[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilmsAction',
  async (_arg, { dispatch, extra: api}) => {
    const {data} = await api.get<FavoriteFilms[]>(ApiRoute.Favorite);

    return data;
  },
);

export const fetchFilmByID = createAsyncThunk<TypeFilm | null, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmById',
  async (filmId: string, { extra: api }) => {
    const {data} = await api.get<TypeFilm>(`${ ApiRoute.Films }/${ filmId }`);

    return data;
  },
);

export const fetchReviewsByID = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCommentsById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${ ApiRoute.Reviews }/${ filmId }`);

    return data;
  },
);

export const changeFilmStatusToView = createAsyncThunk<TypeFilm, StatusFilm, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFilmStatusToView',
  async ({filmId: id, status: isFavorite}, { extra: api }) => {
    const { data } = await api.post<TypeFilm>(`${ ApiRoute.Favorite }/${ id } /${ isFavorite }`);

    return data;
  },
);

export const fetchOneFilmAction = createAsyncThunk<TypeFilm, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TypeFilm>(ApiRoute.Promo);

    return data;
  },
);

export const fetchMoreFilmByID = createAsyncThunk<TypeFilm[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<TypeFilm[]>(`${ ApiRoute.Films }/${ filmId }${ ApiRoute.Similar }`);

    return data;
  },
);

type UserComment = {
  filmId: string,
  rating: number,
  comment: string
}

export const postComment = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postCommentById',
  async ({ comment, rating, filmId }, { dispatch, extra: api }) => {
    await api.post<UserComment>(`${ ApiRoute.Reviews }/${ filmId }`, { comment, rating });
    dispatch(redirectToRoute(`${ ApiRoute.Films }/${ filmId }`));
  },
);
