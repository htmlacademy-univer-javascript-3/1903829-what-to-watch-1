import { NameSpace } from './../const';
import { State } from './../types/state-type';
import { AuthorizationStatus } from './../const';
import TypeFilm from '../types/film-type';
import Reviews from './../types/reviews';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
const getAvatarUrl = (state: State): string | null => state[NameSpace.User].avatar;
const getUserId = (state: State): number | null => state[NameSpace.User].userId;

const getFilms = (state: State): TypeFilm[] => state[NameSpace.WelcomeScreen].filmsList;
const getFilm = (state: State): TypeFilm | null => state[NameSpace.WelcomeScreen].film;
const getFilteredFilms = (state: State): TypeFilm[] => state[NameSpace.WelcomeScreen].filmsListFiltered;
const getCountCard = (state: State): number => state[NameSpace.WelcomeScreen].countShowCard;
const getFavoriteCount = (state: State): number => state[NameSpace.WelcomeScreen].favoriteCount;
const getFavoriteFilms = (state: State): TypeFilm[] => state[NameSpace.WelcomeScreen].favoriteListFilms;

const getReviews = (state: State): Reviews => state[NameSpace.FilmScreen].comments;
const getChooseTab = (state: State): string => state[NameSpace.FilmScreen].filmTab;
const getFilmListMore = (state: State): TypeFilm[] => state[NameSpace.FilmScreen].moreFilm;

const getError = (state: State): string | null => state[NameSpace.App].error;

export { getAuthorizationStatus, getAvatarUrl, getUserId,
  getFilms, getFilm, getFilteredFilms, getCountCard, getFavoriteCount, getFavoriteFilms,
  getReviews, getChooseTab, getFilmListMore, getError,
};
