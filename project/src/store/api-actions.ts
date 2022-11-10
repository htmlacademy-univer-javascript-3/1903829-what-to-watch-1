import { AxiosInstance } from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import TypeFilm from '../types/film-type.js';
import Reviews from '../types/reviews.js';
import { dropToken } from '../services/token';
import { APIRoute, TIMEOUT_SHOW_ERROR, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './index';
import FavoriteFilms from '../types/favorite-films.js';
import { StatusFilm } from '../types/status.js';
import { setError } from './app-process/app-process';

export const fetchFilmAction = createAsyncThunk<TypeFilm[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TypeFilm[]>(APIRoute.Films);

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
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<{ token: string, avatarUrl: string, userId: number }, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const {data: {token, avatarUrl, id}} = await api.post<UserData>(APIRoute.Login, {email, password});
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
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Root));
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
    const {data} = await api.get<FavoriteFilms[]>(APIRoute.Favorite);

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
    const {data} = await api.get<TypeFilm>(`${ APIRoute.Films }/${ filmId }`);

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
    const { data } = await api.get<Reviews>(`${ APIRoute.Reviews }/${ filmId }`);

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
    const { data } = await api.post<TypeFilm>(`${ APIRoute.Favorite }/${ id } /${ isFavorite }`);

    return data;
  },
);

export const fetchOneFilmAction = createAsyncThunk<TypeFilm, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TypeFilm>('/promo');

    return data;
  },
);
