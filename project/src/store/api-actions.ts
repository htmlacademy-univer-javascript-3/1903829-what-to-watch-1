import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import TypeFilm from '../types/film-type.js';
import Reviews from '../types/reviews.js';
import { loadFilms, requireAuthorization, setDataLoadedStatus, setError } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './index';
import FavoriteFilms from '../types/favorite-films.js';
import { StatusFilm } from '../types/status.js';

export const fetchFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TypeFilm[]>(APIRoute.Films);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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

export const fetchFavoriteFilmsAction = createAsyncThunk<FavoriteFilms, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilmsAction',
  async (_arg, { dispatch, extra: api}) => {
    const {data} = await api.get<FavoriteFilms>(APIRoute.Favorite);

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
