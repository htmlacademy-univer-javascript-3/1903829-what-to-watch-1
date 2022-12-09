import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state-type.js';
import TypeFilm from '../types/film-type.js';
import Reviews from '../types/reviews.js';
import { APIRoute, TIMEOUT_SHOW_ERROR, AppRoute } from '../const';
import AuthData from '../types/auth-data';
import UserData from '../types/user-data';
import store from './index';
import StatusFilm from '../types/status';
import { setError } from './app-process';
import { createAction } from '@reduxjs/toolkit';
import { dropToken } from '../services/token';
import { dropAvatarURL } from '../services/avatar';

const fetchFilmsAction = createAsyncThunk<TypeFilm[], undefined, {
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

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

const loginAction = createAsyncThunk<{ token: string, avatarUrl: string, userId: number }, AuthData, {
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

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropAvatarURL();
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

const fetchFavoriteFilmsAction = createAsyncThunk<TypeFilm[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilmsAction',
  async (_arg, { dispatch, extra: api}) => {
    const {data} = await api.get<TypeFilm[]>(APIRoute.Favorite);

    return data;
  },
);

const fetchFilmByID = createAsyncThunk<TypeFilm | null, string, {
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

const fetchReviewsByID = createAsyncThunk<Reviews, string, {
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

const changeFilmStatusToView = createAsyncThunk<TypeFilm, StatusFilm, {
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
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TypeFilm>(APIRoute.Promo);

    return data;
  },
);

const fetchMoreFilmByID = createAsyncThunk<TypeFilm[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<TypeFilm[]>(`${ APIRoute.Films }/${ filmId }${ APIRoute.Similar }`);

    return data;
  },
);

type UserComment = {
  filmId: string,
  rating: number,
  comment: string
}

const postComment = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postCommentById',
  async ({ comment, rating, filmId }, { dispatch, extra: api }) => {
    await api.post<UserComment>(`${ APIRoute.Reviews }/${ filmId }`, { comment, rating });
    dispatch(redirectToRoute(`${ APIRoute.Films }/${ filmId }`));
  },
);

export { fetchFilmsAction, checkAuthAction, loginAction, logoutAction, clearErrorAction, fetchFavoriteFilmsAction,
  fetchFilmByID, fetchReviewsByID, changeFilmStatusToView, fetchMoreFilmByID, postComment, };
